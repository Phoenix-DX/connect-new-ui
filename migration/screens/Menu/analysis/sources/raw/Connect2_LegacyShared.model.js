define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemRec = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemRec, _super);
function CommunityBusinessCarouselPreloadedItemRec(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "Bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CommunityBusinessTypeId", "communityBusinessTypeIdAttr", "CommunityBusinessTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessCarouselPreloadedItemRec.init();
return CommunityBusinessCarouselPreloadedItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec = CommunityBusinessCarouselPreloadedItemRec;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemList, _super);
function CommunityBusinessCarouselPreloadedItemList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemList.itemType = Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec;
return CommunityBusinessCarouselPreloadedItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemList = CommunityBusinessCarouselPreloadedItemList;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemList"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingRec = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingRec, _super);
function CommunityBusinessCarouselPreloadingRec(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingRec.attributesToDeclare = function () {
return [
this.attr("IsPreloaded", "isPreloadedAttr", "IsPreloaded", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PreloadedCarouselItems", "preloadedCarouselItemsAttr", "PreloadedCarouselItems", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemList());
}, true, Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemList)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessCarouselPreloadingRec.init();
return CommunityBusinessCarouselPreloadingRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec = CommunityBusinessCarouselPreloadingRec;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingList, _super);
function CommunityBusinessCarouselPreloadingList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingList.itemType = Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec;
return CommunityBusinessCarouselPreloadingList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingList = CommunityBusinessCarouselPreloadingList;

});
define("Connect2_LegacyShared.model$DurationObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$DurationObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DurationObjectRecord = (function (_super) {
__extends(DurationObjectRecord, _super);
function DurationObjectRecord(defaults) {
_super.apply(this, arguments);
}
DurationObjectRecord.attributesToDeclare = function () {
return [
this.attr("DurationObject", "durationObjectAttr", "DurationObject", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationObjectRec());
}, true, FullCalendarReactiveModel.DurationObjectRec)
].concat(_super.attributesToDeclare.call(this));
};
DurationObjectRecord.fromStructure = function (str) {
return new DurationObjectRecord(new DurationObjectRecord.RecordClass({
durationObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DurationObjectRecord._isAnonymousRecord = true;
DurationObjectRecord.UniqueId = "1027d800-24ba-ccdd-0cc3-b07718eb43e4";
DurationObjectRecord.init();
return DurationObjectRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DurationObjectRecord = DurationObjectRecord;

});
define("Connect2_LegacyShared.model$DurationObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DurationObjectRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DurationObjectRecordList = (function (_super) {
__extends(DurationObjectRecordList, _super);
function DurationObjectRecordList(defaults) {
_super.apply(this, arguments);
}
DurationObjectRecordList.itemType = Connect2_LegacySharedModel.DurationObjectRecord;
return DurationObjectRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DurationObjectRecordList = DurationObjectRecordList;

});
define("Connect2_LegacyShared.model$PhotoURLRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoURLRecord = (function (_super) {
__extends(PhotoURLRecord, _super);
function PhotoURLRecord(defaults) {
_super.apply(this, arguments);
}
PhotoURLRecord.attributesToDeclare = function () {
return [
this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoURLRec());
}, true, APIDomain_Directory_ISModel.PhotoURLRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoURLRecord.fromStructure = function (str) {
return new PhotoURLRecord(new PhotoURLRecord.RecordClass({
photoURLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoURLRecord._isAnonymousRecord = true;
PhotoURLRecord.UniqueId = "3336d11f-19ec-3217-4cb5-a1a019564a43";
PhotoURLRecord.init();
return PhotoURLRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PhotoURLRecord = PhotoURLRecord;

});
define("Connect2_LegacyShared.model$PhotoURLRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhotoURLRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoURLRecordList = (function (_super) {
__extends(PhotoURLRecordList, _super);
function PhotoURLRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoURLRecordList.itemType = Connect2_LegacySharedModel.PhotoURLRecord;
return PhotoURLRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoURLRecordList = PhotoURLRecordList;

});
define("Connect2_LegacyShared.model$MessageListItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
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
this.attr("CreatedByMemberId", "createdByMemberIdAttr", "CreatedByMemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
Connect2_LegacySharedModel.MessageListItemRec = MessageListItemRec;

});
define("Connect2_LegacyShared.model$MessageListItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageListItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageListItemList = (function (_super) {
__extends(MessageListItemList, _super);
function MessageListItemList(defaults) {
_super.apply(this, arguments);
}
MessageListItemList.itemType = Connect2_LegacySharedModel.MessageListItemRec;
return MessageListItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageListItemList = MessageListItemList;

});
define("Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageListItemList"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LongIntegerBooleanMessageListItemListRecord = (function (_super) {
__extends(LongIntegerBooleanMessageListItemListRecord, _super);
function LongIntegerBooleanMessageListItemListRecord(defaults) {
_super.apply(this, arguments);
}
LongIntegerBooleanMessageListItemListRecord.attributesToDeclare = function () {
return [
this.attr("TotalCount", "totalCountAttr", "TotalCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HasUnreadMessages", "hasUnreadMessagesAttr", "HasUnreadMessages", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Items", "itemsAttr", "Items", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MessageListItemList());
}, true, Connect2_LegacySharedModel.MessageListItemList)
].concat(_super.attributesToDeclare.call(this));
};
LongIntegerBooleanMessageListItemListRecord._isAnonymousRecord = true;
LongIntegerBooleanMessageListItemListRecord.UniqueId = "02cce8cc-3437-fcce-0263-94e41165fc69";
LongIntegerBooleanMessageListItemListRecord.init();
return LongIntegerBooleanMessageListItemListRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecord = LongIntegerBooleanMessageListItemListRecord;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemRec = (function (_super) {
__extends(HouseholdCarouselPreloadedItemRec, _super);
function HouseholdCarouselPreloadedItemRec(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UpdateItemId", "updateItemIdAttr", "UpdateItemId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
this.attr("HouseholdListIndex", "householdListIndexAttr", "HouseholdListIndex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdCarouselPreloadedItemRec.init();
return HouseholdCarouselPreloadedItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec = HouseholdCarouselPreloadedItemRec;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemRecord = (function (_super) {
__extends(HouseholdCarouselPreloadedItemRecord, _super);
function HouseholdCarouselPreloadedItemRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdCarouselPreloadedItem", "householdCarouselPreloadedItemAttr", "HouseholdCarouselPreloadedItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec());
}, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdCarouselPreloadedItemRecord.fromStructure = function (str) {
return new HouseholdCarouselPreloadedItemRecord(new HouseholdCarouselPreloadedItemRecord.RecordClass({
householdCarouselPreloadedItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdCarouselPreloadedItemRecord._isAnonymousRecord = true;
HouseholdCarouselPreloadedItemRecord.UniqueId = "5e9ee544-55d6-6991-9128-d7b2c27f33b8";
HouseholdCarouselPreloadedItemRecord.init();
return HouseholdCarouselPreloadedItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRecord = HouseholdCarouselPreloadedItemRecord;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemRecordList = (function (_super) {
__extends(HouseholdCarouselPreloadedItemRecordList, _super);
function HouseholdCarouselPreloadedItemRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemRecordList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRecord;
return HouseholdCarouselPreloadedItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRecordList = HouseholdCarouselPreloadedItemRecordList;

});
define("Connect2_LegacyShared.model$APIM_CommonHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "Connect2_LegacyShared.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderList = (function (_super) {
__extends(APIM_CommonHeaderList, _super);
function APIM_CommonHeaderList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderList.itemType = APIUtilitiesLibModel.APIM_CommonHeaderRec;
return APIM_CommonHeaderList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.APIM_CommonHeaderList = APIM_CommonHeaderList;

});
define("Connect2_LegacyShared.model$HostConfig_SpacingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingRec = (function (_super) {
__extends(HostConfig_SpacingRec, _super);
function HostConfig_SpacingRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingRec.attributesToDeclare = function () {
return [
this.attr("Small", "smallAttr", "small", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(3);
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(8);
}, true), 
this.attr("Medium", "mediumAttr", "medium", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(20);
}, true), 
this.attr("Large", "largeAttr", "large", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(30);
}, true), 
this.attr("ExtraLarge", "extraLargeAttr", "extraLarge", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(40);
}, true), 
this.attr("Padding", "paddingAttr", "padding", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(20);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_SpacingRec.init();
return HostConfig_SpacingRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_SpacingRec = HostConfig_SpacingRec;

});
define("Connect2_LegacyShared.model$HostConfig_FontSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeRec = (function (_super) {
__extends(HostConfig_FontSizeRec, _super);
function HostConfig_FontSizeRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeRec.attributesToDeclare = function () {
return [
this.attr("Small", "smallAttr", "small", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(10);
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(12);
}, true), 
this.attr("Medium", "mediumAttr", "medium", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(14);
}, true), 
this.attr("Large", "largeAttr", "large", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(17);
}, true), 
this.attr("ExtraLarge", "extraLargeAttr", "extraLarge", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(20);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontSizeRec.init();
return HostConfig_FontSizeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontSizeRec = HostConfig_FontSizeRec;

});
define("Connect2_LegacyShared.model$HostConfig_FontWeightsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsRec = (function (_super) {
__extends(HostConfig_FontWeightsRec, _super);
function HostConfig_FontWeightsRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsRec.attributesToDeclare = function () {
return [
this.attr("Lighter", "lighterAttr", "lighter", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(200);
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(400);
}, true), 
this.attr("Bolder", "bolderAttr", "bolder", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(800);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontWeightsRec.init();
return HostConfig_FontWeightsRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontWeightsRec = HostConfig_FontWeightsRec;

});
define("Connect2_LegacyShared.model$HostConfig_FontRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontRec = (function (_super) {
__extends(HostConfig_FontRec, _super);
function HostConfig_FontRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontRec.attributesToDeclare = function () {
return [
this.attr("FontFamily", "fontFamilyAttr", "fontFamily", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Roboto";
}, true), 
this.attr("FontSizes", "fontSizesAttr", "fontSizes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontSizeRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontSizeRec), 
this.attr("FontWeight", "fontWeightAttr", "fontWeights", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontWeightsRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontWeightsRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontRec.init();
return HostConfig_FontRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontRec = HostConfig_FontRec;

});
define("Connect2_LegacyShared.model$HostConfig_FontTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeRec = (function (_super) {
__extends(HostConfig_FontTypeRec, _super);
function HostConfig_FontTypeRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeRec.attributesToDeclare = function () {
return [
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontRec), 
this.attr("Monospace", "monospaceAttr", "monospace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontTypeRec.init();
return HostConfig_FontTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontTypeRec = HostConfig_FontTypeRec;

});
define("Connect2_LegacyShared.model$HostConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfigRec = (function (_super) {
__extends(HostConfigRec, _super);
function HostConfigRec(defaults) {
_super.apply(this, arguments);
}
HostConfigRec.attributesToDeclare = function () {
return [
this.attr("Spacing", "spacingAttr", "spacing", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_SpacingRec());
}, true, Connect2_LegacySharedModel.HostConfig_SpacingRec), 
this.attr("FontTypes", "fontTypesAttr", "fontTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontTypeRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfigRec.init();
return HostConfigRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfigRec = HostConfigRec;

});
define("Connect2_LegacyShared.model$UI_CommunityBusiness_ShareCardList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model", "Connect2_LegacyShared.model", "Connect_CommunityBusiness_CS.model$UI_CommunityBusiness_ShareCardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommunityBusiness_CS"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_CommunityBusiness_ShareCardList = (function (_super) {
__extends(UI_CommunityBusiness_ShareCardList, _super);
function UI_CommunityBusiness_ShareCardList(defaults) {
_super.apply(this, arguments);
}
UI_CommunityBusiness_ShareCardList.itemType = Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec;
return UI_CommunityBusiness_ShareCardList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_CommunityBusiness_ShareCardList = UI_CommunityBusiness_ShareCardList;

});
define("Connect2_LegacyShared.model$AuditLog_ShareEventInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AuditLog_ShareEventInfoRec = (function (_super) {
__extends(AuditLog_ShareEventInfoRec, _super);
function AuditLog_ShareEventInfoRec(defaults) {
_super.apply(this, arguments);
}
AuditLog_ShareEventInfoRec.attributesToDeclare = function () {
return [
this.attr("ShareId", "shareIdAttr", "ShareId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SharingMemberId", "sharingMemberIdAttr", "SharingMemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetUserId", "targetUserIdAttr", "TargetUserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetApp", "targetAppAttr", "TargetApp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShareObjectTypeId", "shareObjectTypeIdAttr", "ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectId", "objectIdAttr", "ObjectId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AuditLog_ShareEventInfoRec.init();
return AuditLog_ShareEventInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec = AuditLog_ShareEventInfoRec;

});
define("Connect2_LegacyShared.model$DetailList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DetailRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailList = (function (_super) {
__extends(DetailList, _super);
function DetailList(defaults) {
_super.apply(this, arguments);
}
DetailList.itemType = APIDomain_Directory_ISModel.DetailRec;
return DetailList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DetailList = DetailList;

});
define("Connect2_LegacyShared.model$Connect_Subscription_PlanList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$Connect_Subscription_PlanRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanList = (function (_super) {
__extends(Connect_Subscription_PlanList, _super);
function Connect_Subscription_PlanList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanList.itemType = Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec;
return Connect_Subscription_PlanList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Connect_Subscription_PlanList = Connect_Subscription_PlanList;

});
define("Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRec = (function (_super) {
__extends(LocalityResultItemWithGPSRec, _super);
function LocalityResultItemWithGPSRec(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CountryRec());
}, true, APIDomain_Directory_ISModel.CountryRec), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubdivisionsCount", "subdivisionsCountAttr", "SubdivisionsCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MainHallAddress", "mainHallAddressAttr", "MainHallAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalityResultItemWithGPSRec.init();
return LocalityResultItemWithGPSRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityResultItemWithGPSRec = LocalityResultItemWithGPSRec;

});
define("Connect2_LegacyShared.model$LocalityResultItemWithGPSList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSList = (function (_super) {
__extends(LocalityResultItemWithGPSList, _super);
function LocalityResultItemWithGPSList(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSList.itemType = Connect2_LegacySharedModel.LocalityResultItemWithGPSRec;
return LocalityResultItemWithGPSList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityResultItemWithGPSList = LocalityResultItemWithGPSList;

});
define("Connect2_LegacyShared.model$UBT_FlexDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_FlexDirectionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionRecord = (function (_super) {
__extends(UBT_FlexDirectionRecord, _super);
function UBT_FlexDirectionRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FlexDirection", "uBT_FlexDirectionAttr", "UBT_FlexDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FlexDirectionRec());
}, true, UBTConnectLibraryModel.UBT_FlexDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FlexDirectionRecord.fromStructure = function (str) {
return new UBT_FlexDirectionRecord(new UBT_FlexDirectionRecord.RecordClass({
uBT_FlexDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FlexDirectionRecord._isAnonymousRecord = true;
UBT_FlexDirectionRecord.UniqueId = "bd7e9f75-8e82-941f-5dc3-a5c9e5d3395e";
UBT_FlexDirectionRecord.init();
return UBT_FlexDirectionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_FlexDirectionRecord = UBT_FlexDirectionRecord;

});
define("Connect2_LegacyShared.model$UBT_FlexDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_FlexDirectionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionRecordList = (function (_super) {
__extends(UBT_FlexDirectionRecordList, _super);
function UBT_FlexDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionRecordList.itemType = Connect2_LegacySharedModel.UBT_FlexDirectionRecord;
return UBT_FlexDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_FlexDirectionRecordList = UBT_FlexDirectionRecordList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_LDMRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_LDMRec = (function (_super) {
__extends(ApplicationEvents_LDMRec, _super);
function ApplicationEvents_LDMRec(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_LDMRec.attributesToDeclare = function () {
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
ApplicationEvents_LDMRec.init();
return ApplicationEvents_LDMRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_LDMRec = ApplicationEvents_LDMRec;

});
define("Connect2_LegacyShared.model$ApplicationEvents_LDMList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_LDMRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_LDMList = (function (_super) {
__extends(ApplicationEvents_LDMList, _super);
function ApplicationEvents_LDMList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_LDMList.itemType = Connect2_LegacySharedModel.ApplicationEvents_LDMRec;
return ApplicationEvents_LDMList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_LDMList = ApplicationEvents_LDMList;

});
define("Connect2_LegacyShared.model$Directory_LocalityStatisticsRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityStatisticsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityStatisticsRecord = (function (_super) {
__extends(Directory_LocalityStatisticsRecord, _super);
function Directory_LocalityStatisticsRecord(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityStatisticsRecord.attributesToDeclare = function () {
return [
this.attr("Directory_LocalityStatistics", "directory_LocalityStatisticsAttr", "Directory_LocalityStatistics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocalityStatisticsRec());
}, true, APIDomain_Directory_ISModel.Directory_LocalityStatisticsRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_LocalityStatisticsRecord.fromStructure = function (str) {
return new Directory_LocalityStatisticsRecord(new Directory_LocalityStatisticsRecord.RecordClass({
directory_LocalityStatisticsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_LocalityStatisticsRecord._isAnonymousRecord = true;
Directory_LocalityStatisticsRecord.UniqueId = "05afcd5b-193c-f26e-c61b-cb3bb84310be";
Directory_LocalityStatisticsRecord.init();
return Directory_LocalityStatisticsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_LocalityStatisticsRecord = Directory_LocalityStatisticsRecord;

});
define("Connect2_LegacyShared.model$LocalSearchHistoryRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalSearchHistoryRec = (function (_super) {
__extends(LocalSearchHistoryRec, _super);
function LocalSearchHistoryRec(defaults) {
_super.apply(this, arguments);
}
LocalSearchHistoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SearchedString", "searchedStringAttr", "SearchedString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("RecentSearchTypeId", "recentSearchTypeIdAttr", "RecentSearchTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalSearchHistoryRec.init();
return LocalSearchHistoryRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalSearchHistoryRec = LocalSearchHistoryRec;

});
define("Connect2_LegacyShared.model$LocalSearchHistoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalSearchHistoryRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalSearchHistoryRecord = (function (_super) {
__extends(LocalSearchHistoryRecord, _super);
function LocalSearchHistoryRecord(defaults) {
_super.apply(this, arguments);
}
LocalSearchHistoryRecord.attributesToDeclare = function () {
return [
this.attr("LocalSearchHistory", "localSearchHistoryAttr", "LocalSearchHistory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalSearchHistoryRec());
}, true, Connect2_LegacySharedModel.LocalSearchHistoryRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalSearchHistoryRecord.fromStructure = function (str) {
return new LocalSearchHistoryRecord(new LocalSearchHistoryRecord.RecordClass({
localSearchHistoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalSearchHistoryRecord._isAnonymousRecord = true;
LocalSearchHistoryRecord.UniqueId = "21f05dfb-8f55-b081-b5c0-834e9fdc84f0";
LocalSearchHistoryRecord.init();
return LocalSearchHistoryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalSearchHistoryRecord = LocalSearchHistoryRecord;

});
define("Connect2_LegacyShared.model$LocalSearchHistoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalSearchHistoryRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalSearchHistoryRecordList = (function (_super) {
__extends(LocalSearchHistoryRecordList, _super);
function LocalSearchHistoryRecordList(defaults) {
_super.apply(this, arguments);
}
LocalSearchHistoryRecordList.itemType = Connect2_LegacySharedModel.LocalSearchHistoryRecord;
return LocalSearchHistoryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalSearchHistoryRecordList = LocalSearchHistoryRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontWeightsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsList = (function (_super) {
__extends(HostConfig_FontWeightsList, _super);
function HostConfig_FontWeightsList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsList.itemType = Connect2_LegacySharedModel.HostConfig_FontWeightsRec;
return HostConfig_FontWeightsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontWeightsList = HostConfig_FontWeightsList;

});
define("Connect2_LegacyShared.model$MessageParameterRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageParameterRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageParameterRecord = (function (_super) {
__extends(MessageParameterRecord, _super);
function MessageParameterRecord(defaults) {
_super.apply(this, arguments);
}
MessageParameterRecord.attributesToDeclare = function () {
return [
this.attr("MessageParameter", "messageParameterAttr", "MessageParameter", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageParameterRec());
}, true, Comms_CSModel.MessageParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageParameterRecord.fromStructure = function (str) {
return new MessageParameterRecord(new MessageParameterRecord.RecordClass({
messageParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageParameterRecord._isAnonymousRecord = true;
MessageParameterRecord.UniqueId = "e55b0e02-e04b-4d9e-5205-2558b23719e7";
MessageParameterRecord.init();
return MessageParameterRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageParameterRecord = MessageParameterRecord;

});
define("Connect2_LegacyShared.model$MessageParameterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageParameterRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageParameterRecordList = (function (_super) {
__extends(MessageParameterRecordList, _super);
function MessageParameterRecordList(defaults) {
_super.apply(this, arguments);
}
MessageParameterRecordList.itemType = Connect2_LegacySharedModel.MessageParameterRecord;
return MessageParameterRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageParameterRecordList = MessageParameterRecordList;

});
define("Connect2_LegacyShared.model$DetailRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DetailRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailRecord = (function (_super) {
__extends(DetailRecord, _super);
function DetailRecord(defaults) {
_super.apply(this, arguments);
}
DetailRecord.attributesToDeclare = function () {
return [
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DetailRec());
}, true, APIDomain_Directory_ISModel.DetailRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailRecord.fromStructure = function (str) {
return new DetailRecord(new DetailRecord.RecordClass({
detailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailRecord._isAnonymousRecord = true;
DetailRecord.UniqueId = "c75e7e3e-7b6f-0b98-7417-977aef0c9deb";
DetailRecord.init();
return DetailRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DetailRecord = DetailRecord;

});
define("Connect2_LegacyShared.model$DetailRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DetailRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailRecordList = (function (_super) {
__extends(DetailRecordList, _super);
function DetailRecordList(defaults) {
_super.apply(this, arguments);
}
DetailRecordList.itemType = Connect2_LegacySharedModel.DetailRecord;
return DetailRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DetailRecordList = DetailRecordList;

});
define("Connect2_LegacyShared.model$IOSOptions2List", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$IOSOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var IOSOptions2List = (function (_super) {
__extends(IOSOptions2List, _super);
function IOSOptions2List(defaults) {
_super.apply(this, arguments);
}
IOSOptions2List.itemType = InAppBrowserEventsModel.IOSOptionsRec;
return IOSOptions2List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.IOSOptions2List = IOSOptions2List;

});
define("Connect2_LegacyShared.model$TextGenderIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextGenderIdentifierRecord = (function (_super) {
__extends(TextGenderIdentifierRecord, _super);
function TextGenderIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
TextGenderIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Gender", "genderAttr", "Gender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextGenderIdentifierRecord._isAnonymousRecord = true;
TextGenderIdentifierRecord.UniqueId = "39fe40df-7530-13b0-4c26-c0a6f956f767";
TextGenderIdentifierRecord.init();
return TextGenderIdentifierRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextGenderIdentifierRecord = TextGenderIdentifierRecord;

});
define("Connect2_LegacyShared.model$TextGenderIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextGenderIdentifierRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextGenderIdentifierRecordList = (function (_super) {
__extends(TextGenderIdentifierRecordList, _super);
function TextGenderIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
TextGenderIdentifierRecordList.itemType = Connect2_LegacySharedModel.TextGenderIdentifierRecord;
return TextGenderIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextGenderIdentifierRecordList = TextGenderIdentifierRecordList;

});
define("Connect2_LegacyShared.model$APIM_CommonHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "Connect2_LegacyShared.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.APIM_CommonHeaderRecord = APIM_CommonHeaderRecord;

});
define("Connect2_LegacyShared.model$APIM_CommonHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$APIM_CommonHeaderRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecordList = (function (_super) {
__extends(APIM_CommonHeaderRecordList, _super);
function APIM_CommonHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecordList.itemType = Connect2_LegacySharedModel.APIM_CommonHeaderRecord;
return APIM_CommonHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.APIM_CommonHeaderRecordList = APIM_CommonHeaderRecordList;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsItemRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRec = (function (_super) {
__extends(LocalityHouseholdsItemRec, _super);
function LocalityHouseholdsItemRec(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Family", "familyAttr", "Family", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CDNRec());
}, true, APIDomain_Directory_ISModel.Directory_CDNRec), 
this.attr("Photo340", "photo340Attr", "Photo340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CDNRec());
}, true, APIDomain_Directory_ISModel.Directory_CDNRec), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsItemRec.init();
return LocalityHouseholdsItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityHouseholdsItemRec = LocalityHouseholdsItemRec;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRecord = (function (_super) {
__extends(LocalityHouseholdsItemRecord, _super);
function LocalityHouseholdsItemRecord(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRecord.attributesToDeclare = function () {
return [
this.attr("LocalityHouseholdsItem", "localityHouseholdsItemAttr", "LocalityHouseholdsItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityHouseholdsItemRec());
}, true, Connect2_LegacySharedModel.LocalityHouseholdsItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsItemRecord.fromStructure = function (str) {
return new LocalityHouseholdsItemRecord(new LocalityHouseholdsItemRecord.RecordClass({
localityHouseholdsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityHouseholdsItemRecord._isAnonymousRecord = true;
LocalityHouseholdsItemRecord.UniqueId = "0a65ad3f-8ebb-cdea-b78b-ada7665f83ff";
LocalityHouseholdsItemRecord.init();
return LocalityHouseholdsItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityHouseholdsItemRecord = LocalityHouseholdsItemRecord;

});
define("Connect2_LegacyShared.model$ShareUserListTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareUserListTypeRec = (function (_super) {
__extends(ShareUserListTypeRec, _super);
function ShareUserListTypeRec(defaults) {
_super.apply(this, arguments);
}
ShareUserListTypeRec.attributesToDeclare = function () {
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
ShareUserListTypeRec.init();
return ShareUserListTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ShareUserListTypeRec = ShareUserListTypeRec;

});
define("Connect2_LegacyShared.model$ShareUserListTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareUserListTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareUserListTypeRecord = (function (_super) {
__extends(ShareUserListTypeRecord, _super);
function ShareUserListTypeRecord(defaults) {
_super.apply(this, arguments);
}
ShareUserListTypeRecord.attributesToDeclare = function () {
return [
this.attr("ShareUserListType", "shareUserListTypeAttr", "ShareUserListType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ShareUserListTypeRec());
}, true, Connect2_LegacySharedModel.ShareUserListTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ShareUserListTypeRecord.fromStructure = function (str) {
return new ShareUserListTypeRecord(new ShareUserListTypeRecord.RecordClass({
shareUserListTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShareUserListTypeRecord._isAnonymousRecord = true;
ShareUserListTypeRecord.UniqueId = "0a74df8b-6062-e25c-c7ad-8ce63073496a";
ShareUserListTypeRecord.init();
return ShareUserListTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ShareUserListTypeRecord = ShareUserListTypeRecord;

});
define("Connect2_LegacyShared.model$UBT_FontSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_FontSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeList = (function (_super) {
__extends(UBT_FontSizeList, _super);
function UBT_FontSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeList.itemType = UBTConnectLibraryModel.UBT_FontSizeRec;
return UBT_FontSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_FontSizeList = UBT_FontSizeList;

});
define("Connect2_LegacyShared.model$MyBookmarks_ObjectTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeList = (function (_super) {
__extends(MyBookmarks_ObjectTypeList, _super);
function MyBookmarks_ObjectTypeList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeList.itemType = Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec;
return MyBookmarks_ObjectTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MyBookmarks_ObjectTypeList = MyBookmarks_ObjectTypeList;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemRecord = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemRecord, _super);
function CommunityBusinessCarouselPreloadedItemRecord(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemRecord.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessCarouselPreloadedItem", "communityBusinessCarouselPreloadedItemAttr", "CommunityBusinessCarouselPreloadedItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec());
}, true, Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessCarouselPreloadedItemRecord.fromStructure = function (str) {
return new CommunityBusinessCarouselPreloadedItemRecord(new CommunityBusinessCarouselPreloadedItemRecord.RecordClass({
communityBusinessCarouselPreloadedItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessCarouselPreloadedItemRecord._isAnonymousRecord = true;
CommunityBusinessCarouselPreloadedItemRecord.UniqueId = "5dfec7a8-b6e2-d362-474b-2c6b0ab93fbb";
CommunityBusinessCarouselPreloadedItemRecord.init();
return CommunityBusinessCarouselPreloadedItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRecord = CommunityBusinessCarouselPreloadedItemRecord;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemRecordList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemRecordList, _super);
function CommunityBusinessCarouselPreloadedItemRecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemRecordList.itemType = Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRecord;
return CommunityBusinessCarouselPreloadedItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRecordList = CommunityBusinessCarouselPreloadedItemRecordList;

});
define("Connect2_LegacyShared.model$ContactBase_CountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$ContactBase_CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ContactBase_CountryRecord = (function (_super) {
__extends(ContactBase_CountryRecord, _super);
function ContactBase_CountryRecord(defaults) {
_super.apply(this, arguments);
}
ContactBase_CountryRecord.attributesToDeclare = function () {
return [
this.attr("ContactBase_Country", "contactBase_CountryAttr", "ContactBase_Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.ContactBase_CountryRec());
}, true, Connect_CommonEntities_DBModel.ContactBase_CountryRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactBase_CountryRecord.fromStructure = function (str) {
return new ContactBase_CountryRecord(new ContactBase_CountryRecord.RecordClass({
contactBase_CountryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactBase_CountryRecord._isAnonymousRecord = true;
ContactBase_CountryRecord.UniqueId = "bb5422d7-c1fb-c1c5-3962-91fbfddbc3d9";
ContactBase_CountryRecord.init();
return ContactBase_CountryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ContactBase_CountryRecord = ContactBase_CountryRecord;

});
define("Connect2_LegacyShared.model$ContactBase_CountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ContactBase_CountryRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ContactBase_CountryRecordList = (function (_super) {
__extends(ContactBase_CountryRecordList, _super);
function ContactBase_CountryRecordList(defaults) {
_super.apply(this, arguments);
}
ContactBase_CountryRecordList.itemType = Connect2_LegacySharedModel.ContactBase_CountryRecord;
return ContactBase_CountryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ContactBase_CountryRecordList = ContactBase_CountryRecordList;

});
define("Connect2_LegacyShared.model$TargetRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$TargetRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TargetRecord = (function (_super) {
__extends(TargetRecord, _super);
function TargetRecord(defaults) {
_super.apply(this, arguments);
}
TargetRecord.attributesToDeclare = function () {
return [
this.attr("Target", "targetAttr", "Target", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.TargetRec());
}, true, InAppBrowserEventsModel.TargetRec)
].concat(_super.attributesToDeclare.call(this));
};
TargetRecord.fromStructure = function (str) {
return new TargetRecord(new TargetRecord.RecordClass({
targetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TargetRecord._isAnonymousRecord = true;
TargetRecord.UniqueId = "a501c409-89b0-76f7-0161-5b24fea351b6";
TargetRecord.init();
return TargetRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TargetRecord = TargetRecord;

});
define("Connect2_LegacyShared.model$TargetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TargetRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TargetRecordList = (function (_super) {
__extends(TargetRecordList, _super);
function TargetRecordList(defaults) {
_super.apply(this, arguments);
}
TargetRecordList.itemType = Connect2_LegacySharedModel.TargetRecord;
return TargetRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TargetRecordList = TargetRecordList;

});
define("Connect2_LegacyShared.model$SpouseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SpouseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpouseRecord = (function (_super) {
__extends(SpouseRecord, _super);
function SpouseRecord(defaults) {
_super.apply(this, arguments);
}
SpouseRecord.attributesToDeclare = function () {
return [
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SpouseRec());
}, true, APIDomain_Directory_ISModel.SpouseRec)
].concat(_super.attributesToDeclare.call(this));
};
SpouseRecord.fromStructure = function (str) {
return new SpouseRecord(new SpouseRecord.RecordClass({
spouseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpouseRecord._isAnonymousRecord = true;
SpouseRecord.UniqueId = "2951b8ee-54c1-e6a9-6ae3-32884c27e410";
SpouseRecord.init();
return SpouseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SpouseRecord = SpouseRecord;

});
define("Connect2_LegacyShared.model$SpouseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SpouseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpouseRecordList = (function (_super) {
__extends(SpouseRecordList, _super);
function SpouseRecordList(defaults) {
_super.apply(this, arguments);
}
SpouseRecordList.itemType = Connect2_LegacySharedModel.SpouseRecord;
return SpouseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpouseRecordList = SpouseRecordList;

});
define("Connect2_LegacyShared.model$AndroidOptions2Record", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$AndroidOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AndroidOptions2Record = (function (_super) {
__extends(AndroidOptions2Record, _super);
function AndroidOptions2Record(defaults) {
_super.apply(this, arguments);
}
AndroidOptions2Record.attributesToDeclare = function () {
return [
this.attr("AndroidOptions", "androidOptionsAttr", "AndroidOptions2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.AndroidOptionsRec());
}, true, InAppBrowserEventsModel.AndroidOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidOptions2Record.fromStructure = function (str) {
return new AndroidOptions2Record(new AndroidOptions2Record.RecordClass({
androidOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidOptions2Record._isAnonymousRecord = true;
AndroidOptions2Record.UniqueId = "80291416-a09a-0e5b-77d3-9ce61054b4cc";
AndroidOptions2Record.init();
return AndroidOptions2Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AndroidOptions2Record = AndroidOptions2Record;

});
define("Connect2_LegacyShared.model$AndroidOptions2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AndroidOptions2Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AndroidOptions2RecordList = (function (_super) {
__extends(AndroidOptions2RecordList, _super);
function AndroidOptions2RecordList(defaults) {
_super.apply(this, arguments);
}
AndroidOptions2RecordList.itemType = Connect2_LegacySharedModel.AndroidOptions2Record;
return AndroidOptions2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AndroidOptions2RecordList = AndroidOptions2RecordList;

});
define("Connect2_LegacyShared.model$ImageErrorEventInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageErrorEventInfoRec = (function (_super) {
__extends(ImageErrorEventInfoRec, _super);
function ImageErrorEventInfoRec(defaults) {
_super.apply(this, arguments);
}
ImageErrorEventInfoRec.attributesToDeclare = function () {
return [
this.attr("Element", "elementAttr", "Element", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsOffline", "isOfflineAttr", "IsOffline", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImageErrorEventInfoRec.init();
return ImageErrorEventInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageErrorEventInfoRec = ImageErrorEventInfoRec;

});
define("Connect2_LegacyShared.model$ImageErrorEventInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageErrorEventInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageErrorEventInfoList = (function (_super) {
__extends(ImageErrorEventInfoList, _super);
function ImageErrorEventInfoList(defaults) {
_super.apply(this, arguments);
}
ImageErrorEventInfoList.itemType = Connect2_LegacySharedModel.ImageErrorEventInfoRec;
return ImageErrorEventInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageErrorEventInfoList = ImageErrorEventInfoList;

});
define("Connect2_LegacyShared.model$PhotoDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRecord = (function (_super) {
__extends(PhotoDetailsRecord, _super);
function PhotoDetailsRecord(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRecord.attributesToDeclare = function () {
return [
this.attr("PhotoDetails", "photoDetailsAttr", "PhotoDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.PhotoDetailsRec());
}, true, Connect2_MyBookmarks_ISModel.PhotoDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoDetailsRecord.fromStructure = function (str) {
return new PhotoDetailsRecord(new PhotoDetailsRecord.RecordClass({
photoDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoDetailsRecord._isAnonymousRecord = true;
PhotoDetailsRecord.UniqueId = "0ed98616-7a81-527b-25bb-07fcbdb2d01d";
PhotoDetailsRecord.init();
return PhotoDetailsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PhotoDetailsRecord = PhotoDetailsRecord;

});
define("Connect2_LegacyShared.model$BulkSignedImagesParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersRec = (function (_super) {
__extends(BulkSignedImagesParametersRec, _super);
function BulkSignedImagesParametersRec(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImagesParametersRec.init();
return BulkSignedImagesParametersRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedImagesParametersRec = BulkSignedImagesParametersRec;

});
define("Connect2_LegacyShared.model$ThemeClassRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ThemeClassRec = (function (_super) {
__extends(ThemeClassRec, _super);
function ThemeClassRec(defaults) {
_super.apply(this, arguments);
}
ThemeClassRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StylesheetName", "stylesheetNameAttr", "StylesheetName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ThemeClassRec.init();
return ThemeClassRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ThemeClassRec = ThemeClassRec;

});
define("Connect2_LegacyShared.model$ThemeClassList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ThemeClassRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ThemeClassList = (function (_super) {
__extends(ThemeClassList, _super);
function ThemeClassList(defaults) {
_super.apply(this, arguments);
}
ThemeClassList.itemType = Connect2_LegacySharedModel.ThemeClassRec;
return ThemeClassList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ThemeClassList = ThemeClassList;

});
define("Connect2_LegacyShared.model$GetSubdivisionHouseholdsV2ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetSubdivisionHouseholdsV2ResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholdsV2ResponseRecord = (function (_super) {
__extends(GetSubdivisionHouseholdsV2ResponseRecord, _super);
function GetSubdivisionHouseholdsV2ResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsV2ResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetSubdivisionHouseholdsV2Response", "getSubdivisionHouseholdsV2ResponseAttr", "GetSubdivisionHouseholdsV2Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetSubdivisionHouseholdsV2ResponseRec());
}, true, APIDomain_Directory_ISModel.GetSubdivisionHouseholdsV2ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionHouseholdsV2ResponseRecord.fromStructure = function (str) {
return new GetSubdivisionHouseholdsV2ResponseRecord(new GetSubdivisionHouseholdsV2ResponseRecord.RecordClass({
getSubdivisionHouseholdsV2ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSubdivisionHouseholdsV2ResponseRecord._isAnonymousRecord = true;
GetSubdivisionHouseholdsV2ResponseRecord.UniqueId = "a9e147e0-3693-10a1-ddc3-6c9a433c1974";
GetSubdivisionHouseholdsV2ResponseRecord.init();
return GetSubdivisionHouseholdsV2ResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.GetSubdivisionHouseholdsV2ResponseRecord = GetSubdivisionHouseholdsV2ResponseRecord;

});
define("Connect2_LegacyShared.model$GetSubdivisionHouseholdsV2ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$GetSubdivisionHouseholdsV2ResponseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholdsV2ResponseRecordList = (function (_super) {
__extends(GetSubdivisionHouseholdsV2ResponseRecordList, _super);
function GetSubdivisionHouseholdsV2ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsV2ResponseRecordList.itemType = Connect2_LegacySharedModel.GetSubdivisionHouseholdsV2ResponseRecord;
return GetSubdivisionHouseholdsV2ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetSubdivisionHouseholdsV2ResponseRecordList = GetSubdivisionHouseholdsV2ResponseRecordList;

});
define("Connect2_LegacyShared.model$UI_CommunityBusiness_ShareCardRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model", "Connect2_LegacyShared.model", "Connect_CommunityBusiness_CS.model$UI_CommunityBusiness_ShareCardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommunityBusiness_CS"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_CommunityBusiness_ShareCardRecord = (function (_super) {
__extends(UI_CommunityBusiness_ShareCardRecord, _super);
function UI_CommunityBusiness_ShareCardRecord(defaults) {
_super.apply(this, arguments);
}
UI_CommunityBusiness_ShareCardRecord.attributesToDeclare = function () {
return [
this.attr("UI_CommunityBusiness_ShareCard", "uI_CommunityBusiness_ShareCardAttr", "UI_CommunityBusiness_ShareCard", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec());
}, true, Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_CommunityBusiness_ShareCardRecord.fromStructure = function (str) {
return new UI_CommunityBusiness_ShareCardRecord(new UI_CommunityBusiness_ShareCardRecord.RecordClass({
uI_CommunityBusiness_ShareCardAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_CommunityBusiness_ShareCardRecord._isAnonymousRecord = true;
UI_CommunityBusiness_ShareCardRecord.UniqueId = "0fb6a484-4860-d850-d05a-14587ac830f0";
UI_CommunityBusiness_ShareCardRecord.init();
return UI_CommunityBusiness_ShareCardRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_CommunityBusiness_ShareCardRecord = UI_CommunityBusiness_ShareCardRecord;

});
define("Connect2_LegacyShared.model$IntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerRecord = (function (_super) {
__extends(IntegerIntegerIntegerRecord, _super);
function IntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Left", "leftAttr", "Left", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Middle", "middleAttr", "Middle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Right", "rightAttr", "Right", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegerIntegerIntegerRecord._isAnonymousRecord = true;
IntegerIntegerIntegerRecord.UniqueId = "0fd2659c-7aa6-f339-f62a-c84d68866935";
IntegerIntegerIntegerRecord.init();
return IntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.IntegerIntegerIntegerRecord = IntegerIntegerIntegerRecord;

});
define("Connect2_LegacyShared.model$ConnectConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ConnectConfigRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ConnectConfigRecord = (function (_super) {
__extends(ConnectConfigRecord, _super);
function ConnectConfigRecord(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRecord.attributesToDeclare = function () {
return [
this.attr("ConnectConfig", "connectConfigAttr", "ConnectConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ConnectConfigRec());
}, true, APIDomain_Directory_ISModel.ConnectConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ConnectConfigRecord.fromStructure = function (str) {
return new ConnectConfigRecord(new ConnectConfigRecord.RecordClass({
connectConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConnectConfigRecord._isAnonymousRecord = true;
ConnectConfigRecord.UniqueId = "102f7240-4699-1795-0378-75c37cf47e99";
ConnectConfigRecord.init();
return ConnectConfigRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ConnectConfigRecord = ConnectConfigRecord;

});
define("Connect2_LegacyShared.model$Extension4Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Extension3Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Extension4Record = (function (_super) {
__extends(Extension4Record, _super);
function Extension4Record(defaults) {
_super.apply(this, arguments);
}
Extension4Record.attributesToDeclare = function () {
return [
this.attr("Extension3", "extension3Attr", "Extension4", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Extension3Rec());
}, true, APIDomain_Directory_ISModel.Extension3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Extension4Record.fromStructure = function (str) {
return new Extension4Record(new Extension4Record.RecordClass({
extension3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Extension4Record._isAnonymousRecord = true;
Extension4Record.UniqueId = "10b42b90-ffcb-acac-5446-547eee084979";
Extension4Record.init();
return Extension4Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Extension4Record = Extension4Record;

});
define("Connect2_LegacyShared.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$AnimationTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AnimationTypeRec());
}, true, OutSystemsUI_2_23Model.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "e1fd020e-ccea-bd6a-c94e-23efd9509c58";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("Connect2_LegacyShared.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AnimationTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = Connect2_LegacySharedModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("Connect2_LegacyShared.model$UBT_Icons2Record", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_IconsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_Icons2Record = (function (_super) {
__extends(UBT_Icons2Record, _super);
function UBT_Icons2Record(defaults) {
_super.apply(this, arguments);
}
UBT_Icons2Record.attributesToDeclare = function () {
return [
this.attr("UBT_Icons", "uBT_IconsAttr", "UBT_Icons2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_IconsRec());
}, true, UBTConnectLibraryModel.UBT_IconsRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_Icons2Record.fromStructure = function (str) {
return new UBT_Icons2Record(new UBT_Icons2Record.RecordClass({
uBT_IconsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_Icons2Record._isAnonymousRecord = true;
UBT_Icons2Record.UniqueId = "1231e4fe-de0a-eba3-623f-3a924dc07de7";
UBT_Icons2Record.init();
return UBT_Icons2Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_Icons2Record = UBT_Icons2Record;

});
define("Connect2_LegacyShared.model$Directory_LocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityRecord = (function (_super) {
__extends(Directory_LocalityRecord, _super);
function Directory_LocalityRecord(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Locality", "directory_LocalityAttr", "Directory_Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocalityRec());
}, true, APIDomain_Directory_ISModel.Directory_LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_LocalityRecord.fromStructure = function (str) {
return new Directory_LocalityRecord(new Directory_LocalityRecord.RecordClass({
directory_LocalityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_LocalityRecord._isAnonymousRecord = true;
Directory_LocalityRecord.UniqueId = "aacc44ac-b32e-740a-9681-ae0ab5929474";
Directory_LocalityRecord.init();
return Directory_LocalityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_LocalityRecord = Directory_LocalityRecord;

});
define("Connect2_LegacyShared.model$Directory_LocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_LocalityRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityRecordList = (function (_super) {
__extends(Directory_LocalityRecordList, _super);
function Directory_LocalityRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityRecordList.itemType = Connect2_LegacySharedModel.Directory_LocalityRecord;
return Directory_LocalityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityRecordList = Directory_LocalityRecordList;

});
define("Connect2_LegacyShared.model$TextTextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.TextTextLongIntegerRecord = TextTextLongIntegerRecord;

});
define("Connect2_LegacyShared.model$TextTextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextTextLongIntegerRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecordList = (function (_super) {
__extends(TextTextLongIntegerRecordList, _super);
function TextTextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecordList.itemType = Connect2_LegacySharedModel.TextTextLongIntegerRecord;
return TextTextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextTextLongIntegerRecordList = TextTextLongIntegerRecordList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Directory_UserCurrent_SubscriptionRecord = Directory_UserCurrent_SubscriptionRecord;

});
define("Connect2_LegacyShared.model$Extension3Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Extension2Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Extension3Record = (function (_super) {
__extends(Extension3Record, _super);
function Extension3Record(defaults) {
_super.apply(this, arguments);
}
Extension3Record.attributesToDeclare = function () {
return [
this.attr("Extension2", "extension2Attr", "Extension3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Extension2Rec());
}, true, APIDomain_Directory_ISModel.Extension2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Extension3Record.fromStructure = function (str) {
return new Extension3Record(new Extension3Record.RecordClass({
extension2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Extension3Record._isAnonymousRecord = true;
Extension3Record.UniqueId = "1300518a-0a39-a115-4ca7-e6d53c455f51";
Extension3Record.init();
return Extension3Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Extension3Record = Extension3Record;

});
define("Connect2_LegacyShared.model$ImageSigningSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeRec = (function (_super) {
__extends(ImageSigningSizeRec, _super);
function ImageSigningSizeRec(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImageSigningSizeRec.fromStructure = function (str) {
return new ImageSigningSizeRec(new ImageSigningSizeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageSigningSizeRec.init();
return ImageSigningSizeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageSigningSizeRec = ImageSigningSizeRec;

});
define("Connect2_LegacyShared.model$ImageSigningSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageSigningSizeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeRecord = (function (_super) {
__extends(ImageSigningSizeRecord, _super);
function ImageSigningSizeRecord(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeRecord.attributesToDeclare = function () {
return [
this.attr("ImageSigningSize", "imageSigningSizeAttr", "ImageSigningSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ImageSigningSizeRec());
}, true, Connect2_LegacySharedModel.ImageSigningSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageSigningSizeRecord.fromStructure = function (str) {
return new ImageSigningSizeRecord(new ImageSigningSizeRecord.RecordClass({
imageSigningSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageSigningSizeRecord._isAnonymousRecord = true;
ImageSigningSizeRecord.UniqueId = "a77fe0ec-eaf5-e9bf-51d9-cba21e604368";
ImageSigningSizeRecord.init();
return ImageSigningSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageSigningSizeRecord = ImageSigningSizeRecord;

});
define("Connect2_LegacyShared.model$ImageSigningSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageSigningSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeRecordList = (function (_super) {
__extends(ImageSigningSizeRecordList, _super);
function ImageSigningSizeRecordList(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeRecordList.itemType = Connect2_LegacySharedModel.ImageSigningSizeRecord;
return ImageSigningSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageSigningSizeRecordList = ImageSigningSizeRecordList;

});
define("Connect2_LegacyShared.model$SubdivisionExtendedRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "APIDomain_Directory_IS.model$LocalityRec"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRec = (function (_super) {
__extends(SubdivisionExtendedRec, _super);
function SubdivisionExtendedRec(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsMainHall", "isMainHallAttr", "IsMainHall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoRec());
}, true, APIDomain_Directory_ISModel.HallPhotoRec), 
this.attr("Address1", "address1Attr", "Address1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address2", "address2Attr", "Address2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address3", "address3Attr", "Address3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address4", "address4Attr", "Address4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address5", "address5Attr", "Address5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address6", "address6Attr", "Address6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address7", "address7Attr", "Address7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address8", "address8Attr", "Address8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UseCoordinates", "useCoordinatesAttr", "UseCoordinates", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityRec());
}, true, APIDomain_Directory_ISModel.LocalityRec), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionExtendedRec.init();
return SubdivisionExtendedRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubdivisionExtendedRec = SubdivisionExtendedRec;

});
define("Connect2_LegacyShared.model$TargetList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$TargetRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TargetList = (function (_super) {
__extends(TargetList, _super);
function TargetList(defaults) {
_super.apply(this, arguments);
}
TargetList.itemType = InAppBrowserEventsModel.TargetRec;
return TargetList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TargetList = TargetList;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemList = (function (_super) {
__extends(HouseholdCarouselPreloadedItemList, _super);
function HouseholdCarouselPreloadedItemList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec;
return HouseholdCarouselPreloadedItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemList = HouseholdCarouselPreloadedItemList;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemList"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingRec = (function (_super) {
__extends(HouseholdCarouselPreloadingRec, _super);
function HouseholdCarouselPreloadingRec(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingRec.attributesToDeclare = function () {
return [
this.attr("IsPreloaded", "isPreloadedAttr", "IsPreloaded", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PreloadedCarouselItems", "preloadedCarouselItemsAttr", "PreloadedCarouselItems", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemList());
}, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemList), 
this.attr("IsFromMyUpdateFeed", "isFromMyUpdateFeedAttr", "IsFromMyUpdateFeed", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdCarouselPreloadingRec.init();
return HouseholdCarouselPreloadingRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec = HouseholdCarouselPreloadingRec;

});
define("Connect2_LegacyShared.model$MessageInfoTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageInfoTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageInfoTypeList = (function (_super) {
__extends(MessageInfoTypeList, _super);
function MessageInfoTypeList(defaults) {
_super.apply(this, arguments);
}
MessageInfoTypeList.itemType = Comms_CSModel.MessageInfoTypeRec;
return MessageInfoTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageInfoTypeList = MessageInfoTypeList;

});
define("Connect2_LegacyShared.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemList = (function (_super) {
__extends(Custom_Address_ItemList, _super);
function Custom_Address_ItemList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
return Custom_Address_ItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("Connect2_LegacyShared.model$UserContactRequestRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "Connect2_LegacyShared.model", "UBT_Email.model$UserContactRequestRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_Email"], function (exports, OutSystems, UBT_EmailModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UserContactRequestRecord = (function (_super) {
__extends(UserContactRequestRecord, _super);
function UserContactRequestRecord(defaults) {
_super.apply(this, arguments);
}
UserContactRequestRecord.attributesToDeclare = function () {
return [
this.attr("UserContactRequest", "userContactRequestAttr", "UserContactRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.UserContactRequestRec());
}, true, UBT_EmailModel.UserContactRequestRec)
].concat(_super.attributesToDeclare.call(this));
};
UserContactRequestRecord.fromStructure = function (str) {
return new UserContactRequestRecord(new UserContactRequestRecord.RecordClass({
userContactRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserContactRequestRecord._isAnonymousRecord = true;
UserContactRequestRecord.UniqueId = "f471d296-4086-cdc0-17e6-2db371e9f151";
UserContactRequestRecord.init();
return UserContactRequestRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UserContactRequestRecord = UserContactRequestRecord;

});
define("Connect2_LegacyShared.model$UserContactRequestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UserContactRequestRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UserContactRequestRecordList = (function (_super) {
__extends(UserContactRequestRecordList, _super);
function UserContactRequestRecordList(defaults) {
_super.apply(this, arguments);
}
UserContactRequestRecordList.itemType = Connect2_LegacySharedModel.UserContactRequestRecord;
return UserContactRequestRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UserContactRequestRecordList = UserContactRequestRecordList;

});
define("Connect2_LegacyShared.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$MenuActionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MenuActionRec());
}, true, OutSystemsUI_2_23Model.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "152b85d3-e824-823c-c634-7a228030f9b6";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MenuActionRecord = MenuActionRecord;

});
define("Connect2_LegacyShared.model$AppManager_DeviceContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "Connect2_LegacyShared.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextRecord = (function (_super) {
__extends(AppManager_DeviceContextRecord, _super);
function AppManager_DeviceContextRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_DeviceContext", "appManager_DeviceContextAttr", "AppManager_DeviceContext", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_DeviceContextRec());
}, true, UBT_AppManager_CSModel.AppManager_DeviceContextRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_DeviceContextRecord.fromStructure = function (str) {
return new AppManager_DeviceContextRecord(new AppManager_DeviceContextRecord.RecordClass({
appManager_DeviceContextAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_DeviceContextRecord._isAnonymousRecord = true;
AppManager_DeviceContextRecord.UniqueId = "e046fbad-9b16-97b9-a3a8-12797a167da9";
AppManager_DeviceContextRecord.init();
return AppManager_DeviceContextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AppManager_DeviceContextRecord = AppManager_DeviceContextRecord;

});
define("Connect2_LegacyShared.model$AppManager_DeviceContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AppManager_DeviceContextRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextRecordList = (function (_super) {
__extends(AppManager_DeviceContextRecordList, _super);
function AppManager_DeviceContextRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextRecordList.itemType = Connect2_LegacySharedModel.AppManager_DeviceContextRecord;
return AppManager_DeviceContextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AppManager_DeviceContextRecordList = AppManager_DeviceContextRecordList;

});
define("Connect2_LegacyShared.model$UBT_ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ShapeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ShapeRecord = (function (_super) {
__extends(UBT_ShapeRecord, _super);
function UBT_ShapeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Shape", "uBT_ShapeAttr", "UBT_Shape", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ShapeRec());
}, true, UBTConnectLibraryModel.UBT_ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ShapeRecord.fromStructure = function (str) {
return new UBT_ShapeRecord(new UBT_ShapeRecord.RecordClass({
uBT_ShapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ShapeRecord._isAnonymousRecord = true;
UBT_ShapeRecord.UniqueId = "15ae935d-91c4-5b4d-4629-8b67f181820e";
UBT_ShapeRecord.init();
return UBT_ShapeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_ShapeRecord = UBT_ShapeRecord;

});
define("Connect2_LegacyShared.model$ExtensionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ExtensionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ExtensionRecord = (function (_super) {
__extends(ExtensionRecord, _super);
function ExtensionRecord(defaults) {
_super.apply(this, arguments);
}
ExtensionRecord.attributesToDeclare = function () {
return [
this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ExtensionRec());
}, true, APIDomain_Directory_ISModel.ExtensionRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionRecord.fromStructure = function (str) {
return new ExtensionRecord(new ExtensionRecord.RecordClass({
extensionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtensionRecord._isAnonymousRecord = true;
ExtensionRecord.UniqueId = "2f628101-99f9-bea6-abdb-ea7bac9b6c95";
ExtensionRecord.init();
return ExtensionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ExtensionRecord = ExtensionRecord;

});
define("Connect2_LegacyShared.model$ExtensionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ExtensionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ExtensionRecordList = (function (_super) {
__extends(ExtensionRecordList, _super);
function ExtensionRecordList(defaults) {
_super.apply(this, arguments);
}
ExtensionRecordList.itemType = Connect2_LegacySharedModel.ExtensionRecord;
return ExtensionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ExtensionRecordList = ExtensionRecordList;

});
define("Connect2_LegacyShared.model$ResultListTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResultListTypeRec = (function (_super) {
__extends(ResultListTypeRec, _super);
function ResultListTypeRec(defaults) {
_super.apply(this, arguments);
}
ResultListTypeRec.attributesToDeclare = function () {
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
ResultListTypeRec.init();
return ResultListTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ResultListTypeRec = ResultListTypeRec;

});
define("Connect2_LegacyShared.model$ResultListTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ResultListTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResultListTypeRecord = (function (_super) {
__extends(ResultListTypeRecord, _super);
function ResultListTypeRecord(defaults) {
_super.apply(this, arguments);
}
ResultListTypeRecord.attributesToDeclare = function () {
return [
this.attr("ResultListType", "resultListTypeAttr", "ResultListType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ResultListTypeRec());
}, true, Connect2_LegacySharedModel.ResultListTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ResultListTypeRecord.fromStructure = function (str) {
return new ResultListTypeRecord(new ResultListTypeRecord.RecordClass({
resultListTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResultListTypeRecord._isAnonymousRecord = true;
ResultListTypeRecord.UniqueId = "1727d670-aab8-02be-6977-7527394b45ff";
ResultListTypeRecord.init();
return ResultListTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ResultListTypeRecord = ResultListTypeRecord;

});
define("Connect2_LegacyShared.model$MessagePriorityList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessagePriorityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityList = (function (_super) {
__extends(MessagePriorityList, _super);
function MessagePriorityList(defaults) {
_super.apply(this, arguments);
}
MessagePriorityList.itemType = Comms_CSModel.MessagePriorityRec;
return MessagePriorityList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessagePriorityList = MessagePriorityList;

});
define("Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "ServiceCenter.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessagePriorityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Comms_CS.model$MessageContentRec", "Comms_CS.model$MessageTemplateRec", "Comms_CS.model$MessageSenderTargetRec", "Comms_CS.model$MessageInstanceRec", "Comms_CS.model$AdaptiveCardJSONRec", "ServiceCenter.model$UserRec", "Connect2_LegacyShared.referencesHealth$ServiceCenter"], function (exports, OutSystems, Comms_CSModel, ServiceCenterModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord = (function (_super) {
__extends(MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord, _super);
function MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord(defaults) {
_super.apply(this, arguments);
}
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord.attributesToDeclare = function () {
return [
this.attr("MessagePriority", "messagePriorityAttr", "MessagePriority", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessagePriorityRec());
}, true, Comms_CSModel.MessagePriorityRec), 
this.attr("MessageContent", "messageContentAttr", "MessageContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageContentRec());
}, true, Comms_CSModel.MessageContentRec), 
this.attr("MessageTemplate", "messageTemplateAttr", "MessageTemplate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTemplateRec());
}, true, Comms_CSModel.MessageTemplateRec), 
this.attr("MessageSenderTarget", "messageSenderTargetAttr", "MessageSenderTarget", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageSenderTargetRec());
}, true, Comms_CSModel.MessageSenderTargetRec), 
this.attr("MessageInstance", "messageInstanceAttr", "MessageInstance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInstanceRec());
}, true, Comms_CSModel.MessageInstanceRec), 
this.attr("AdaptiveCardJSON", "adaptiveCardJSONAttr", "AdaptiveCardJSON", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.AdaptiveCardJSONRec());
}, true, Comms_CSModel.AdaptiveCardJSONRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec), 
this.attr("CreatedByMemberId", "createdByMemberIdAttr", "CreatedByMemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord._isAnonymousRecord = true;
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord.UniqueId = "80a6aa85-7562-a4cc-45bb-db6e6222fb3b";
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord.init();
return MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord = MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord;

});
define("Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList = (function (_super) {
__extends(MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList, _super);
function MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList(defaults) {
_super.apply(this, arguments);
}
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList.itemType = Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecord;
return MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList = MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserTextRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontSizeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeRecord = (function (_super) {
__extends(HostConfig_FontSizeRecord, _super);
function HostConfig_FontSizeRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_FontSize", "hostConfig_FontSizeAttr", "HostConfig_FontSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontSizeRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontSizeRecord.fromStructure = function (str) {
return new HostConfig_FontSizeRecord(new HostConfig_FontSizeRecord.RecordClass({
hostConfig_FontSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontSizeRecord._isAnonymousRecord = true;
HostConfig_FontSizeRecord.UniqueId = "2f55f75b-99a7-4d2a-dd4a-c5a90fa7b732";
HostConfig_FontSizeRecord.init();
return HostConfig_FontSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontSizeRecord = HostConfig_FontSizeRecord;

});
define("Connect2_LegacyShared.model$HostConfig_FontSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeRecordList = (function (_super) {
__extends(HostConfig_FontSizeRecordList, _super);
function HostConfig_FontSizeRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeRecordList.itemType = Connect2_LegacySharedModel.HostConfig_FontSizeRecord;
return HostConfig_FontSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontSizeRecordList = HostConfig_FontSizeRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontSizeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontSizeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeList = (function (_super) {
__extends(HostConfig_FontSizeList, _super);
function HostConfig_FontSizeList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeList.itemType = Connect2_LegacySharedModel.HostConfig_FontSizeRec;
return HostConfig_FontSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontSizeList = HostConfig_FontSizeList;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultRec = (function (_super) {
__extends(BulkSignedPhotoResultRec, _super);
function BulkSignedPhotoResultRec(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultRec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedPhotoResultRec.init();
return BulkSignedPhotoResultRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedPhotoResultRec = BulkSignedPhotoResultRec;

});
define("Connect2_LegacyShared.model$GetContactDetailsAssemble_GETList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetContactDetailsAssemble_GETRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetContactDetailsAssemble_GETList = (function (_super) {
__extends(GetContactDetailsAssemble_GETList, _super);
function GetContactDetailsAssemble_GETList(defaults) {
_super.apply(this, arguments);
}
GetContactDetailsAssemble_GETList.itemType = APIDomain_Directory_ISModel.GetContactDetailsAssemble_GETRec;
return GetContactDetailsAssemble_GETList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetContactDetailsAssemble_GETList = GetContactDetailsAssemble_GETList;

});
define("Connect2_LegacyShared.model$GetCountriesBySubscriptionIdList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetCountriesBySubscriptionIdRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetCountriesBySubscriptionIdList = (function (_super) {
__extends(GetCountriesBySubscriptionIdList, _super);
function GetCountriesBySubscriptionIdList(defaults) {
_super.apply(this, arguments);
}
GetCountriesBySubscriptionIdList.itemType = APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec;
return GetCountriesBySubscriptionIdList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetCountriesBySubscriptionIdList = GetCountriesBySubscriptionIdList;

});
define("Connect2_LegacyShared.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$SpeedRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SpeedRec());
}, true, OutSystemsUI_2_23Model.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "a0f9b9f4-249b-a56a-b8b1-fc85548aeb7f";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SpeedRecord = SpeedRecord;

});
define("Connect2_LegacyShared.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SpeedRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = Connect2_LegacySharedModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpeedRecordList = SpeedRecordList;

});
define("Connect2_LegacyShared.model$MemoryCacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_LegacyShared.model", "MemoryClientCache.model$MemoryCacheTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecord = (function (_super) {
__extends(MemoryCacheTypeRecord, _super);
function MemoryCacheTypeRecord(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecord.attributesToDeclare = function () {
return [
this.attr("MemoryCacheType", "memoryCacheTypeAttr", "MemoryCacheType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheTypeRec());
}, true, MemoryClientCacheModel.MemoryCacheTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheTypeRecord.fromStructure = function (str) {
return new MemoryCacheTypeRecord(new MemoryCacheTypeRecord.RecordClass({
memoryCacheTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheTypeRecord._isAnonymousRecord = true;
MemoryCacheTypeRecord.UniqueId = "22391bfc-4d63-db02-f78b-506be318c40d";
MemoryCacheTypeRecord.init();
return MemoryCacheTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MemoryCacheTypeRecord = MemoryCacheTypeRecord;

});
define("Connect2_LegacyShared.model$MemoryCacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MemoryCacheTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecordList = (function (_super) {
__extends(MemoryCacheTypeRecordList, _super);
function MemoryCacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecordList.itemType = Connect2_LegacySharedModel.MemoryCacheTypeRecord;
return MemoryCacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemoryCacheTypeRecordList = MemoryCacheTypeRecordList;

});
define("Connect2_LegacyShared.model$SubscribedRegionItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubscribedRegionItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubscribedRegionItemRecord = (function (_super) {
__extends(SubscribedRegionItemRecord, _super);
function SubscribedRegionItemRecord(defaults) {
_super.apply(this, arguments);
}
SubscribedRegionItemRecord.attributesToDeclare = function () {
return [
this.attr("SubscribedRegionItem", "subscribedRegionItemAttr", "SubscribedRegionItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubscribedRegionItemRec());
}, true, APIDomain_Directory_ISModel.SubscribedRegionItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscribedRegionItemRecord.fromStructure = function (str) {
return new SubscribedRegionItemRecord(new SubscribedRegionItemRecord.RecordClass({
subscribedRegionItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscribedRegionItemRecord._isAnonymousRecord = true;
SubscribedRegionItemRecord.UniqueId = "1921ca2f-d18a-3f6d-6b70-956d59ff6afa";
SubscribedRegionItemRecord.init();
return SubscribedRegionItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubscribedRegionItemRecord = SubscribedRegionItemRecord;

});
define("Connect2_LegacyShared.model$AdaptiveCardsConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigRec = (function (_super) {
__extends(AdaptiveCardsConfigRec, _super);
function AdaptiveCardsConfigRec(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardsConfigRec.init();
return AdaptiveCardsConfigRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AdaptiveCardsConfigRec = AdaptiveCardsConfigRec;

});
define("Connect2_LegacyShared.model$PhoneCallInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhoneCallInfoRec = (function (_super) {
__extends(PhoneCallInfoRec, _super);
function PhoneCallInfoRec(defaults) {
_super.apply(this, arguments);
}
PhoneCallInfoRec.attributesToDeclare = function () {
return [
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AddressCountry", "addressCountryAttr", "AddressCountry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneLabel", "timezoneLabelAttr", "TimezoneLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OffsetSeconds", "offsetSecondsAttr", "OffsetSeconds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhoneCallInfoRec.init();
return PhoneCallInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PhoneCallInfoRec = PhoneCallInfoRec;

});
define("Connect2_LegacyShared.model$ParameterNameRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$ParameterNameRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ParameterNameRecord = (function (_super) {
__extends(ParameterNameRecord, _super);
function ParameterNameRecord(defaults) {
_super.apply(this, arguments);
}
ParameterNameRecord.attributesToDeclare = function () {
return [
this.attr("ParameterName", "parameterNameAttr", "ParameterName", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.ParameterNameRec());
}, true, Comms_CSModel.ParameterNameRec)
].concat(_super.attributesToDeclare.call(this));
};
ParameterNameRecord.fromStructure = function (str) {
return new ParameterNameRecord(new ParameterNameRecord.RecordClass({
parameterNameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ParameterNameRecord._isAnonymousRecord = true;
ParameterNameRecord.UniqueId = "e4f1ef90-a5d3-d136-05cb-d747a495cb60";
ParameterNameRecord.init();
return ParameterNameRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ParameterNameRecord = ParameterNameRecord;

});
define("Connect2_LegacyShared.model$ParameterNameRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ParameterNameRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ParameterNameRecordList = (function (_super) {
__extends(ParameterNameRecordList, _super);
function ParameterNameRecordList(defaults) {
_super.apply(this, arguments);
}
ParameterNameRecordList.itemType = Connect2_LegacySharedModel.ParameterNameRecord;
return ParameterNameRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ParameterNameRecordList = ParameterNameRecordList;

});
define("Connect2_LegacyShared.model$HostConfigList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfigRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfigList = (function (_super) {
__extends(HostConfigList, _super);
function HostConfigList(defaults) {
_super.apply(this, arguments);
}
HostConfigList.itemType = Connect2_LegacySharedModel.HostConfigRec;
return HostConfigList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfigList = HostConfigList;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingList = (function (_super) {
__extends(HouseholdCarouselPreloadingList, _super);
function HouseholdCarouselPreloadingList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec;
return HouseholdCarouselPreloadingList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdCarouselPreloadingList = HouseholdCarouselPreloadingList;

});
define("Connect2_LegacyShared.model$RadiusOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$RadiusOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RadiusOptionsRecord = (function (_super) {
__extends(RadiusOptionsRecord, _super);
function RadiusOptionsRecord(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsRecord.attributesToDeclare = function () {
return [
this.attr("RadiusOptions", "radiusOptionsAttr", "RadiusOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.RadiusOptionsRec());
}, true, UBTConnectLibraryModel.RadiusOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
RadiusOptionsRecord.fromStructure = function (str) {
return new RadiusOptionsRecord(new RadiusOptionsRecord.RecordClass({
radiusOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RadiusOptionsRecord._isAnonymousRecord = true;
RadiusOptionsRecord.UniqueId = "1a7930e2-86c1-b24d-bc00-6d1f02a6993d";
RadiusOptionsRecord.init();
return RadiusOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.RadiusOptionsRecord = RadiusOptionsRecord;

});
define("Connect2_LegacyShared.model$UBT_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ColorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ColorList = (function (_super) {
__extends(UBT_ColorList, _super);
function UBT_ColorList(defaults) {
_super.apply(this, arguments);
}
UBT_ColorList.itemType = UBTConnectLibraryModel.UBT_ColorRec;
return UBT_ColorList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ColorList = UBT_ColorList;

});
define("Connect2_LegacyShared.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$ColorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUI_2_23Model.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ColorList = ColorList;

});
define("Connect2_LegacyShared.model$UBT_ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ShapeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ShapeList = (function (_super) {
__extends(UBT_ShapeList, _super);
function UBT_ShapeList(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeList.itemType = UBTConnectLibraryModel.UBT_ShapeRec;
return UBT_ShapeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ShapeList = UBT_ShapeList;

});
define("Connect2_LegacyShared.model$CacheControl_UserInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function (exports, OutSystems, UBTConnect_UtilsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationRecord = (function (_super) {
__extends(CacheControl_UserInformationRecord, _super);
function CacheControl_UserInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheControl_UserInformation", "cacheControl_UserInformationAttr", "CacheControl_UserInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_UserInformationRec());
}, true, UBTConnect_UtilsModel.CacheControl_UserInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_UserInformationRecord.fromStructure = function (str) {
return new CacheControl_UserInformationRecord(new CacheControl_UserInformationRecord.RecordClass({
cacheControl_UserInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_UserInformationRecord._isAnonymousRecord = true;
CacheControl_UserInformationRecord.UniqueId = "1d61dbf6-1790-a772-b9fd-36988f57a53a";
CacheControl_UserInformationRecord.init();
return CacheControl_UserInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheControl_UserInformationRecord = CacheControl_UserInformationRecord;

});
define("Connect2_LegacyShared.model$SignedPhotoCacheRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedPhotoCacheRec = (function (_super) {
__extends(SignedPhotoCacheRec, _super);
function SignedPhotoCacheRec(defaults) {
_super.apply(this, arguments);
}
SignedPhotoCacheRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Bucket", "bucketAttr", "Bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExpiryDateTime", "expiryDateTimeAttr", "ExpiryDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignedPhotoCacheRec.init();
return SignedPhotoCacheRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SignedPhotoCacheRec = SignedPhotoCacheRec;

});
define("Connect2_LegacyShared.model$SignedPhotoCacheRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SignedPhotoCacheRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedPhotoCacheRecord = (function (_super) {
__extends(SignedPhotoCacheRecord, _super);
function SignedPhotoCacheRecord(defaults) {
_super.apply(this, arguments);
}
SignedPhotoCacheRecord.attributesToDeclare = function () {
return [
this.attr("SignedPhotoCache", "signedPhotoCacheAttr", "SignedPhotoCache", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SignedPhotoCacheRec());
}, true, Connect2_LegacySharedModel.SignedPhotoCacheRec)
].concat(_super.attributesToDeclare.call(this));
};
SignedPhotoCacheRecord.fromStructure = function (str) {
return new SignedPhotoCacheRecord(new SignedPhotoCacheRecord.RecordClass({
signedPhotoCacheAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SignedPhotoCacheRecord._isAnonymousRecord = true;
SignedPhotoCacheRecord.UniqueId = "1d852914-cecd-dd91-0f4d-2fdfae5c046f";
SignedPhotoCacheRecord.init();
return SignedPhotoCacheRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SignedPhotoCacheRecord = SignedPhotoCacheRecord;

});
define("Connect2_LegacyShared.model$Share_GetShare_GET_ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Share_GetShare_GET_ResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Share_GetShare_GET_ResponseList = (function (_super) {
__extends(Share_GetShare_GET_ResponseList, _super);
function Share_GetShare_GET_ResponseList(defaults) {
_super.apply(this, arguments);
}
Share_GetShare_GET_ResponseList.itemType = APIDomain_Directory_ISModel.Share_GetShare_GET_ResponseRec;
return Share_GetShare_GET_ResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Share_GetShare_GET_ResponseList = Share_GetShare_GET_ResponseList;

});
define("Connect2_LegacyShared.model$BulkSignedImageResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRec = (function (_super) {
__extends(BulkSignedImageResultRec, _super);
function BulkSignedImageResultRec(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImageResultRec.init();
return BulkSignedImageResultRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedImageResultRec = BulkSignedImageResultRec;

});
define("Connect2_LegacyShared.model$BulkSignedImageResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImageResultRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRecord = (function (_super) {
__extends(BulkSignedImageResultRecord, _super);
function BulkSignedImageResultRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedImageResult", "bulkSignedImageResultAttr", "BulkSignedImageResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BulkSignedImageResultRec());
}, true, Connect2_LegacySharedModel.BulkSignedImageResultRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImageResultRecord.fromStructure = function (str) {
return new BulkSignedImageResultRecord(new BulkSignedImageResultRecord.RecordClass({
bulkSignedImageResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedImageResultRecord._isAnonymousRecord = true;
BulkSignedImageResultRecord.UniqueId = "1e07b509-843f-8871-52ff-521c088eb279";
BulkSignedImageResultRecord.init();
return BulkSignedImageResultRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedImageResultRecord = BulkSignedImageResultRecord;

});
define("Connect2_LegacyShared.model$HostConfig_FontWeightsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsRecord = (function (_super) {
__extends(HostConfig_FontWeightsRecord, _super);
function HostConfig_FontWeightsRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_FontWeights", "hostConfig_FontWeightsAttr", "HostConfig_FontWeights", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontWeightsRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontWeightsRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontWeightsRecord.fromStructure = function (str) {
return new HostConfig_FontWeightsRecord(new HostConfig_FontWeightsRecord.RecordClass({
hostConfig_FontWeightsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontWeightsRecord._isAnonymousRecord = true;
HostConfig_FontWeightsRecord.UniqueId = "1e0998a4-207d-9316-6db5-d8a30bf60ffc";
HostConfig_FontWeightsRecord.init();
return HostConfig_FontWeightsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontWeightsRecord = HostConfig_FontWeightsRecord;

});
define("Connect2_LegacyShared.model$SignedImagesRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SignedImagesRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedImagesRecord = (function (_super) {
__extends(SignedImagesRecord, _super);
function SignedImagesRecord(defaults) {
_super.apply(this, arguments);
}
SignedImagesRecord.attributesToDeclare = function () {
return [
this.attr("SignedImages", "signedImagesAttr", "SignedImages", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SignedImagesRec());
}, true, APIDomain_Directory_ISModel.SignedImagesRec)
].concat(_super.attributesToDeclare.call(this));
};
SignedImagesRecord.fromStructure = function (str) {
return new SignedImagesRecord(new SignedImagesRecord.RecordClass({
signedImagesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SignedImagesRecord._isAnonymousRecord = true;
SignedImagesRecord.UniqueId = "4eed0783-13f9-4ddb-36fe-ee143e06fb56";
SignedImagesRecord.init();
return SignedImagesRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SignedImagesRecord = SignedImagesRecord;

});
define("Connect2_LegacyShared.model$SignedImagesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SignedImagesRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedImagesRecordList = (function (_super) {
__extends(SignedImagesRecordList, _super);
function SignedImagesRecordList(defaults) {
_super.apply(this, arguments);
}
SignedImagesRecordList.itemType = Connect2_LegacySharedModel.SignedImagesRecord;
return SignedImagesRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SignedImagesRecordList = SignedImagesRecordList;

});
define("Connect2_LegacyShared.model$ShareUserListTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareUserListTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareUserListTypeList = (function (_super) {
__extends(ShareUserListTypeList, _super);
function ShareUserListTypeList(defaults) {
_super.apply(this, arguments);
}
ShareUserListTypeList.itemType = Connect2_LegacySharedModel.ShareUserListTypeRec;
return ShareUserListTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ShareUserListTypeList = ShareUserListTypeList;

});
define("Connect2_LegacyShared.model$PhoneCallInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhoneCallInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhoneCallInfoRecord = (function (_super) {
__extends(PhoneCallInfoRecord, _super);
function PhoneCallInfoRecord(defaults) {
_super.apply(this, arguments);
}
PhoneCallInfoRecord.attributesToDeclare = function () {
return [
this.attr("PhoneCallInfo", "phoneCallInfoAttr", "PhoneCallInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.PhoneCallInfoRec());
}, true, Connect2_LegacySharedModel.PhoneCallInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
PhoneCallInfoRecord.fromStructure = function (str) {
return new PhoneCallInfoRecord(new PhoneCallInfoRecord.RecordClass({
phoneCallInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhoneCallInfoRecord._isAnonymousRecord = true;
PhoneCallInfoRecord.UniqueId = "f3541f51-60e0-3d9f-7fc0-9390df30bbca";
PhoneCallInfoRecord.init();
return PhoneCallInfoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PhoneCallInfoRecord = PhoneCallInfoRecord;

});
define("Connect2_LegacyShared.model$PhoneCallInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhoneCallInfoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhoneCallInfoRecordList = (function (_super) {
__extends(PhoneCallInfoRecordList, _super);
function PhoneCallInfoRecordList(defaults) {
_super.apply(this, arguments);
}
PhoneCallInfoRecordList.itemType = Connect2_LegacySharedModel.PhoneCallInfoRecord;
return PhoneCallInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhoneCallInfoRecordList = PhoneCallInfoRecordList;

});
define("Connect2_LegacyShared.model$UI_Household_Card_ContentRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_Household_Card_ContentRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Household_Card_ContentRecord = (function (_super) {
__extends(UI_Household_Card_ContentRecord, _super);
function UI_Household_Card_ContentRecord(defaults) {
_super.apply(this, arguments);
}
UI_Household_Card_ContentRecord.attributesToDeclare = function () {
return [
this.attr("UI_Household_Card_Content", "uI_Household_Card_ContentAttr", "UI_Household_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_Household_Card_ContentRec());
}, true, Connect_Household_CSModel.UI_Household_Card_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Household_Card_ContentRecord.fromStructure = function (str) {
return new UI_Household_Card_ContentRecord(new UI_Household_Card_ContentRecord.RecordClass({
uI_Household_Card_ContentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_Household_Card_ContentRecord._isAnonymousRecord = true;
UI_Household_Card_ContentRecord.UniqueId = "e2c733d7-db38-e91c-2495-e992b3011ba2";
UI_Household_Card_ContentRecord.init();
return UI_Household_Card_ContentRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_Household_Card_ContentRecord = UI_Household_Card_ContentRecord;

});
define("Connect2_LegacyShared.model$UI_Household_Card_ContentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_Household_Card_ContentRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Household_Card_ContentRecordList = (function (_super) {
__extends(UI_Household_Card_ContentRecordList, _super);
function UI_Household_Card_ContentRecordList(defaults) {
_super.apply(this, arguments);
}
UI_Household_Card_ContentRecordList.itemType = Connect2_LegacySharedModel.UI_Household_Card_ContentRecord;
return UI_Household_Card_ContentRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_Household_Card_ContentRecordList = UI_Household_Card_ContentRecordList;

});
define("Connect2_LegacyShared.model$HostConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfigRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfigRecord = (function (_super) {
__extends(HostConfigRecord, _super);
function HostConfigRecord(defaults) {
_super.apply(this, arguments);
}
HostConfigRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig", "hostConfigAttr", "HostConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfigRec());
}, true, Connect2_LegacySharedModel.HostConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfigRecord.fromStructure = function (str) {
return new HostConfigRecord(new HostConfigRecord.RecordClass({
hostConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfigRecord._isAnonymousRecord = true;
HostConfigRecord.UniqueId = "7c87dde1-eeed-1832-842c-7d1de8295b2c";
HostConfigRecord.init();
return HostConfigRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfigRecord = HostConfigRecord;

});
define("Connect2_LegacyShared.model$HostConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfigRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfigRecordList = (function (_super) {
__extends(HostConfigRecordList, _super);
function HostConfigRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfigRecordList.itemType = Connect2_LegacySharedModel.HostConfigRecord;
return HostConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfigRecordList = HostConfigRecordList;

});
define("Connect2_LegacyShared.model$DetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DetailItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailItemRecord = (function (_super) {
__extends(DetailItemRecord, _super);
function DetailItemRecord(defaults) {
_super.apply(this, arguments);
}
DetailItemRecord.attributesToDeclare = function () {
return [
this.attr("DetailItem", "detailItemAttr", "DetailItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DetailItemRec());
}, true, APIDomain_Directory_ISModel.DetailItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailItemRecord.fromStructure = function (str) {
return new DetailItemRecord(new DetailItemRecord.RecordClass({
detailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailItemRecord._isAnonymousRecord = true;
DetailItemRecord.UniqueId = "21139b78-aae6-baae-441d-3bf905184a63";
DetailItemRecord.init();
return DetailItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DetailItemRecord = DetailItemRecord;

});
define("Connect2_LegacyShared.model$DetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DetailItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailItemRecordList = (function (_super) {
__extends(DetailItemRecordList, _super);
function DetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DetailItemRecordList.itemType = Connect2_LegacySharedModel.DetailItemRecord;
return DetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DetailItemRecordList = DetailItemRecordList;

});
define("Connect2_LegacyShared.model$AssembleAttendeeGuestRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.AssembleAttendeeGuestRec = AssembleAttendeeGuestRec;

});
define("Connect2_LegacyShared.model$AssembleAttendeeGuestList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AssembleAttendeeGuestRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeGuestList = (function (_super) {
__extends(AssembleAttendeeGuestList, _super);
function AssembleAttendeeGuestList(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeGuestList.itemType = Connect2_LegacySharedModel.AssembleAttendeeGuestRec;
return AssembleAttendeeGuestList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AssembleAttendeeGuestList = AssembleAttendeeGuestList;

});
define("Connect2_LegacyShared.model$UBT_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ColorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ColorRecord = (function (_super) {
__extends(UBT_ColorRecord, _super);
function UBT_ColorRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ColorRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Color", "uBT_ColorAttr", "UBT_Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ColorRec());
}, true, UBTConnectLibraryModel.UBT_ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColorRecord.fromStructure = function (str) {
return new UBT_ColorRecord(new UBT_ColorRecord.RecordClass({
uBT_ColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ColorRecord._isAnonymousRecord = true;
UBT_ColorRecord.UniqueId = "3490cded-94ee-8559-0813-5fa401213bc4";
UBT_ColorRecord.init();
return UBT_ColorRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_ColorRecord = UBT_ColorRecord;

});
define("Connect2_LegacyShared.model$UBT_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_ColorRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ColorRecordList = (function (_super) {
__extends(UBT_ColorRecordList, _super);
function UBT_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColorRecordList.itemType = Connect2_LegacySharedModel.UBT_ColorRecord;
return UBT_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ColorRecordList = UBT_ColorRecordList;

});
define("Connect2_LegacyShared.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$SpaceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUI_2_23Model.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpaceList = SpaceList;

});
define("Connect2_LegacyShared.model$MessageListItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageListItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageListItemRecord = (function (_super) {
__extends(MessageListItemRecord, _super);
function MessageListItemRecord(defaults) {
_super.apply(this, arguments);
}
MessageListItemRecord.attributesToDeclare = function () {
return [
this.attr("MessageListItem", "messageListItemAttr", "MessageListItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MessageListItemRec());
}, true, Connect2_LegacySharedModel.MessageListItemRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageListItemRecord.fromStructure = function (str) {
return new MessageListItemRecord(new MessageListItemRecord.RecordClass({
messageListItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageListItemRecord._isAnonymousRecord = true;
MessageListItemRecord.UniqueId = "209c925e-3722-a1ec-4bdd-252b2fe626c3";
MessageListItemRecord.init();
return MessageListItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageListItemRecord = MessageListItemRecord;

});
define("Connect2_LegacyShared.model$MessageSenderTargetRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageSenderTargetRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageSenderTargetRecord = (function (_super) {
__extends(MessageSenderTargetRecord, _super);
function MessageSenderTargetRecord(defaults) {
_super.apply(this, arguments);
}
MessageSenderTargetRecord.attributesToDeclare = function () {
return [
this.attr("MessageSenderTarget", "messageSenderTargetAttr", "MessageSenderTarget", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageSenderTargetRec());
}, true, Comms_CSModel.MessageSenderTargetRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageSenderTargetRecord.fromStructure = function (str) {
return new MessageSenderTargetRecord(new MessageSenderTargetRecord.RecordClass({
messageSenderTargetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageSenderTargetRecord._isAnonymousRecord = true;
MessageSenderTargetRecord.UniqueId = "21e9a036-7c64-0555-9aec-78cf63c726f4";
MessageSenderTargetRecord.init();
return MessageSenderTargetRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageSenderTargetRecord = MessageSenderTargetRecord;

});
define("Connect2_LegacyShared.model$ApplicationEvents_AlphaRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_AlphaRec = (function (_super) {
__extends(ApplicationEvents_AlphaRec, _super);
function ApplicationEvents_AlphaRec(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_AlphaRec.attributesToDeclare = function () {
return [
this.attr("GUID", "gUIDAttr", "GUID", true, false, OS.DataTypes.DataTypes.Text, function () {
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
ApplicationEvents_AlphaRec.init();
return ApplicationEvents_AlphaRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_AlphaRec = ApplicationEvents_AlphaRec;

});
define("Connect2_LegacyShared.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$SpeedRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUI_2_23Model.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpeedList = SpeedList;

});
define("Connect2_LegacyShared.model$Options2List", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$OptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Options2List = (function (_super) {
__extends(Options2List, _super);
function Options2List(defaults) {
_super.apply(this, arguments);
}
Options2List.itemType = InAppBrowserEventsModel.OptionsRec;
return Options2List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Options2List = Options2List;

});
define("Connect2_LegacyShared.model$GetContactDetailsAssemble_GETRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetContactDetailsAssemble_GETRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetContactDetailsAssemble_GETRecord = (function (_super) {
__extends(GetContactDetailsAssemble_GETRecord, _super);
function GetContactDetailsAssemble_GETRecord(defaults) {
_super.apply(this, arguments);
}
GetContactDetailsAssemble_GETRecord.attributesToDeclare = function () {
return [
this.attr("GetContactDetailsAssemble_GET", "getContactDetailsAssemble_GETAttr", "GetContactDetailsAssemble_GET", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetContactDetailsAssemble_GETRec());
}, true, APIDomain_Directory_ISModel.GetContactDetailsAssemble_GETRec)
].concat(_super.attributesToDeclare.call(this));
};
GetContactDetailsAssemble_GETRecord.fromStructure = function (str) {
return new GetContactDetailsAssemble_GETRecord(new GetContactDetailsAssemble_GETRecord.RecordClass({
getContactDetailsAssemble_GETAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetContactDetailsAssemble_GETRecord._isAnonymousRecord = true;
GetContactDetailsAssemble_GETRecord.UniqueId = "22a5d20b-00ed-aa3c-2e53-698aec32aa45";
GetContactDetailsAssemble_GETRecord.init();
return GetContactDetailsAssemble_GETRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.GetContactDetailsAssemble_GETRecord = GetContactDetailsAssemble_GETRecord;

});
define("Connect2_LegacyShared.model$EventDescriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$EventDescriptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventDescriptionRecord = (function (_super) {
__extends(EventDescriptionRecord, _super);
function EventDescriptionRecord(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRecord.attributesToDeclare = function () {
return [
this.attr("EventDescription", "eventDescriptionAttr", "EventDescription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventDescriptionRec());
}, true, FullCalendarReactiveModel.EventDescriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
EventDescriptionRecord.fromStructure = function (str) {
return new EventDescriptionRecord(new EventDescriptionRecord.RecordClass({
eventDescriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventDescriptionRecord._isAnonymousRecord = true;
EventDescriptionRecord.UniqueId = "234667c3-0054-b3c7-4132-7888daa9bd1a";
EventDescriptionRecord.init();
return EventDescriptionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.EventDescriptionRecord = EventDescriptionRecord;

});
define("Connect2_LegacyShared.model$DirectoryAccessRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DirectoryAccessRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAccessRecord = (function (_super) {
__extends(DirectoryAccessRecord, _super);
function DirectoryAccessRecord(defaults) {
_super.apply(this, arguments);
}
DirectoryAccessRecord.attributesToDeclare = function () {
return [
this.attr("DirectoryAccess", "directoryAccessAttr", "DirectoryAccess", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DirectoryAccessRec());
}, true, APIDomain_Directory_ISModel.DirectoryAccessRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryAccessRecord.fromStructure = function (str) {
return new DirectoryAccessRecord(new DirectoryAccessRecord.RecordClass({
directoryAccessAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryAccessRecord._isAnonymousRecord = true;
DirectoryAccessRecord.UniqueId = "7e6ff03f-314a-57da-1023-6b408f94a554";
DirectoryAccessRecord.init();
return DirectoryAccessRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DirectoryAccessRecord = DirectoryAccessRecord;

});
define("Connect2_LegacyShared.model$DirectoryAccessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryAccessRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAccessRecordList = (function (_super) {
__extends(DirectoryAccessRecordList, _super);
function DirectoryAccessRecordList(defaults) {
_super.apply(this, arguments);
}
DirectoryAccessRecordList.itemType = Connect2_LegacySharedModel.DirectoryAccessRecord;
return DirectoryAccessRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DirectoryAccessRecordList = DirectoryAccessRecordList;

});
define("Connect2_LegacyShared.model$EventList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventList = (function (_super) {
__extends(EventList, _super);
function EventList(defaults) {
_super.apply(this, arguments);
}
EventList.itemType = FullCalendarReactiveModel.EventRec;
return EventList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EventList = EventList;

});
define("Connect2_LegacyShared.model$EventSourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventSourceList = (function (_super) {
__extends(EventSourceList, _super);
function EventSourceList(defaults) {
_super.apply(this, arguments);
}
EventSourceList.itemType = FullCalendarReactiveModel.EventSourceRec;
return EventSourceList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EventSourceList = EventSourceList;

});
define("Connect2_LegacyShared.model$HouseholdNavigationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdNavigationTypeRec = (function (_super) {
__extends(HouseholdNavigationTypeRec, _super);
function HouseholdNavigationTypeRec(defaults) {
_super.apply(this, arguments);
}
HouseholdNavigationTypeRec.attributesToDeclare = function () {
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
HouseholdNavigationTypeRec.init();
return HouseholdNavigationTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdNavigationTypeRec = HouseholdNavigationTypeRec;

});
define("Connect2_LegacyShared.model$HouseholdNavigationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdNavigationTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdNavigationTypeList = (function (_super) {
__extends(HouseholdNavigationTypeList, _super);
function HouseholdNavigationTypeList(defaults) {
_super.apply(this, arguments);
}
HouseholdNavigationTypeList.itemType = Connect2_LegacySharedModel.HouseholdNavigationTypeRec;
return HouseholdNavigationTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdNavigationTypeList = HouseholdNavigationTypeList;

});
define("Connect2_LegacyShared.model$UBT_ImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ImageSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeRecord = (function (_super) {
__extends(UBT_ImageSizeRecord, _super);
function UBT_ImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ImageSize", "uBT_ImageSizeAttr", "UBT_ImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ImageSizeRec());
}, true, UBTConnectLibraryModel.UBT_ImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ImageSizeRecord.fromStructure = function (str) {
return new UBT_ImageSizeRecord(new UBT_ImageSizeRecord.RecordClass({
uBT_ImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ImageSizeRecord._isAnonymousRecord = true;
UBT_ImageSizeRecord.UniqueId = "b63b1197-018d-6f35-ef1a-e2956550771d";
UBT_ImageSizeRecord.init();
return UBT_ImageSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_ImageSizeRecord = UBT_ImageSizeRecord;

});
define("Connect2_LegacyShared.model$UBT_ImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_ImageSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeRecordList = (function (_super) {
__extends(UBT_ImageSizeRecordList, _super);
function UBT_ImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeRecordList.itemType = Connect2_LegacySharedModel.UBT_ImageSizeRecord;
return UBT_ImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ImageSizeRecordList = UBT_ImageSizeRecordList;

});
define("Connect2_LegacyShared.model$Custom_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Custom_AddressRecord = Custom_AddressRecord;

});
define("Connect2_LegacyShared.model$Custom_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Custom_AddressRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecordList = (function (_super) {
__extends(Custom_AddressRecordList, _super);
function Custom_AddressRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecordList.itemType = Connect2_LegacySharedModel.Custom_AddressRecord;
return Custom_AddressRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Custom_AddressRecordList = Custom_AddressRecordList;

});
define("Connect2_LegacyShared.model$IOSOptions2Record", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$IOSOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var IOSOptions2Record = (function (_super) {
__extends(IOSOptions2Record, _super);
function IOSOptions2Record(defaults) {
_super.apply(this, arguments);
}
IOSOptions2Record.attributesToDeclare = function () {
return [
this.attr("IOSOptions", "iOSOptionsAttr", "IOSOptions2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.IOSOptionsRec());
}, true, InAppBrowserEventsModel.IOSOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
IOSOptions2Record.fromStructure = function (str) {
return new IOSOptions2Record(new IOSOptions2Record.RecordClass({
iOSOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IOSOptions2Record._isAnonymousRecord = true;
IOSOptions2Record.UniqueId = "2441d62d-48ea-2754-1500-449f24d0bf08";
IOSOptions2Record.init();
return IOSOptions2Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.IOSOptions2Record = IOSOptions2Record;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Directory_UserCurrent_VisibilityRecord = Directory_UserCurrent_VisibilityRecord;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_UserCurrent_VisibilityRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecordList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecordList, _super);
function Directory_UserCurrent_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecordList.itemType = Connect2_LegacySharedModel.Directory_UserCurrent_VisibilityRecord;
return Directory_UserCurrent_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_VisibilityRecordList = Directory_UserCurrent_VisibilityRecordList;

});
define("Connect2_LegacyShared.model$HaveMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HaveMessageRec = (function (_super) {
__extends(HaveMessageRec, _super);
function HaveMessageRec(defaults) {
_super.apply(this, arguments);
}
HaveMessageRec.attributesToDeclare = function () {
return [
this.attr("IsHave", "isHaveAttr", "IsHave", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HaveMessageRec.fromStructure = function (str) {
return new HaveMessageRec(new HaveMessageRec.RecordClass({
isHaveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HaveMessageRec.init();
return HaveMessageRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HaveMessageRec = HaveMessageRec;

});
define("Connect2_LegacyShared.model$HaveMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HaveMessageRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HaveMessageRecord = (function (_super) {
__extends(HaveMessageRecord, _super);
function HaveMessageRecord(defaults) {
_super.apply(this, arguments);
}
HaveMessageRecord.attributesToDeclare = function () {
return [
this.attr("HaveMessage", "haveMessageAttr", "HaveMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HaveMessageRec());
}, true, Connect2_LegacySharedModel.HaveMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
HaveMessageRecord.fromStructure = function (str) {
return new HaveMessageRecord(new HaveMessageRecord.RecordClass({
haveMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HaveMessageRecord._isAnonymousRecord = true;
HaveMessageRecord.UniqueId = "2456d28a-189d-dd33-a731-c968c2b38929";
HaveMessageRecord.init();
return HaveMessageRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HaveMessageRecord = HaveMessageRecord;

});
define("Connect2_LegacyShared.model$ThemeClassRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ThemeClassRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ThemeClassRecord = (function (_super) {
__extends(ThemeClassRecord, _super);
function ThemeClassRecord(defaults) {
_super.apply(this, arguments);
}
ThemeClassRecord.attributesToDeclare = function () {
return [
this.attr("ThemeClass", "themeClassAttr", "ThemeClass", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ThemeClassRec());
}, true, Connect2_LegacySharedModel.ThemeClassRec)
].concat(_super.attributesToDeclare.call(this));
};
ThemeClassRecord.fromStructure = function (str) {
return new ThemeClassRecord(new ThemeClassRecord.RecordClass({
themeClassAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ThemeClassRecord._isAnonymousRecord = true;
ThemeClassRecord.UniqueId = "247b43f8-7f9e-166f-7cbb-ad864d7ca054";
ThemeClassRecord.init();
return ThemeClassRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ThemeClassRecord = ThemeClassRecord;

});
define("Connect2_LegacyShared.model$SubdivisionExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRecord = (function (_super) {
__extends(SubdivisionExtendedRecord, _super);
function SubdivisionExtendedRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionExtended", "subdivisionExtendedAttr", "SubdivisionExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionExtendedRec());
}, true, Connect2_LegacySharedModel.SubdivisionExtendedRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionExtendedRecord.fromStructure = function (str) {
return new SubdivisionExtendedRecord(new SubdivisionExtendedRecord.RecordClass({
subdivisionExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionExtendedRecord._isAnonymousRecord = true;
SubdivisionExtendedRecord.UniqueId = "248396bb-674f-a463-d311-7d043b091947";
SubdivisionExtendedRecord.init();
return SubdivisionExtendedRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubdivisionExtendedRecord = SubdivisionExtendedRecord;

});
define("Connect2_LegacyShared.model$ApplicationEvents_LDMRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_LDMRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_LDMRecord = (function (_super) {
__extends(ApplicationEvents_LDMRecord, _super);
function ApplicationEvents_LDMRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_LDMRecord.attributesToDeclare = function () {
return [
this.attr("ApplicationEvents_LDM", "applicationEvents_LDMAttr", "ApplicationEvents_LDM", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ApplicationEvents_LDMRec());
}, true, Connect2_LegacySharedModel.ApplicationEvents_LDMRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationEvents_LDMRecord.fromStructure = function (str) {
return new ApplicationEvents_LDMRecord(new ApplicationEvents_LDMRecord.RecordClass({
applicationEvents_LDMAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationEvents_LDMRecord._isAnonymousRecord = true;
ApplicationEvents_LDMRecord.UniqueId = "514e52c6-deb9-087a-5598-c241e518d2b4";
ApplicationEvents_LDMRecord.init();
return ApplicationEvents_LDMRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_LDMRecord = ApplicationEvents_LDMRecord;

});
define("Connect2_LegacyShared.model$ApplicationEvents_LDMRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_LDMRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_LDMRecordList = (function (_super) {
__extends(ApplicationEvents_LDMRecordList, _super);
function ApplicationEvents_LDMRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_LDMRecordList.itemType = Connect2_LegacySharedModel.ApplicationEvents_LDMRecord;
return ApplicationEvents_LDMRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_LDMRecordList = ApplicationEvents_LDMRecordList;

});
define("Connect2_LegacyShared.model$TextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.TextLongIntegerRecord = TextLongIntegerRecord;

});
define("Connect2_LegacyShared.model$DetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DetailItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailItemList = (function (_super) {
__extends(DetailItemList, _super);
function DetailItemList(defaults) {
_super.apply(this, arguments);
}
DetailItemList.itemType = APIDomain_Directory_ISModel.DetailItemRec;
return DetailItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DetailItemList = DetailItemList;

});
define("Connect2_LegacyShared.model$MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$MemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberRecord = (function (_super) {
__extends(MemberRecord, _super);
function MemberRecord(defaults) {
_super.apply(this, arguments);
}
MemberRecord.attributesToDeclare = function () {
return [
this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.MemberRec());
}, true, APIDomain_Directory_ISModel.MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberRecord.fromStructure = function (str) {
return new MemberRecord(new MemberRecord.RecordClass({
memberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberRecord._isAnonymousRecord = true;
MemberRecord.UniqueId = "e80aede2-6a26-4d55-fb4a-cc4adf664f2d";
MemberRecord.init();
return MemberRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MemberRecord = MemberRecord;

});
define("Connect2_LegacyShared.model$MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MemberRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberRecordList = (function (_super) {
__extends(MemberRecordList, _super);
function MemberRecordList(defaults) {
_super.apply(this, arguments);
}
MemberRecordList.itemType = Connect2_LegacySharedModel.MemberRecord;
return MemberRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemberRecordList = MemberRecordList;

});
define("Connect2_LegacyShared.model$AndroidOptions2List", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$AndroidOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AndroidOptions2List = (function (_super) {
__extends(AndroidOptions2List, _super);
function AndroidOptions2List(defaults) {
_super.apply(this, arguments);
}
AndroidOptions2List.itemType = InAppBrowserEventsModel.AndroidOptionsRec;
return AndroidOptions2List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AndroidOptions2List = AndroidOptions2List;

});
define("Connect2_LegacyShared.model$HaveMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HaveMessageRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HaveMessageRecordList = (function (_super) {
__extends(HaveMessageRecordList, _super);
function HaveMessageRecordList(defaults) {
_super.apply(this, arguments);
}
HaveMessageRecordList.itemType = Connect2_LegacySharedModel.HaveMessageRecord;
return HaveMessageRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HaveMessageRecordList = HaveMessageRecordList;

});
define("Connect2_LegacyShared.model$TextLongIntegerLongIntegerLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextLongIntegerLongIntegerLongIntegerRecord = (function (_super) {
__extends(TextLongIntegerLongIntegerLongIntegerRecord, _super);
function TextLongIntegerLongIntegerLongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerLongIntegerLongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EntityId", "entityIdAttr", "EntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextLongIntegerLongIntegerLongIntegerRecord._isAnonymousRecord = true;
TextLongIntegerLongIntegerLongIntegerRecord.UniqueId = "2508d084-89e9-449e-cde6-9e61ff7cccf8";
TextLongIntegerLongIntegerLongIntegerRecord.init();
return TextLongIntegerLongIntegerLongIntegerRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextLongIntegerLongIntegerLongIntegerRecord = TextLongIntegerLongIntegerLongIntegerRecord;

});
define("Connect2_LegacyShared.model$UI_Household_CardList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_Household_CardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Household_CardList = (function (_super) {
__extends(UI_Household_CardList, _super);
function UI_Household_CardList(defaults) {
_super.apply(this, arguments);
}
UI_Household_CardList.itemType = Connect_Household_CSModel.UI_Household_CardRec;
return UI_Household_CardList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_Household_CardList = UI_Household_CardList;

});
define("Connect2_LegacyShared.model$UBT_ColumnBehaviourRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourRecord = (function (_super) {
__extends(UBT_ColumnBehaviourRecord, _super);
function UBT_ColumnBehaviourRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ColumnBehaviour", "uBT_ColumnBehaviourAttr", "UBT_ColumnBehaviour", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ColumnBehaviourRec());
}, true, UBTConnectLibraryModel.UBT_ColumnBehaviourRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColumnBehaviourRecord.fromStructure = function (str) {
return new UBT_ColumnBehaviourRecord(new UBT_ColumnBehaviourRecord.RecordClass({
uBT_ColumnBehaviourAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ColumnBehaviourRecord._isAnonymousRecord = true;
UBT_ColumnBehaviourRecord.UniqueId = "495adc17-750c-a588-7982-7ee722c028a5";
UBT_ColumnBehaviourRecord.init();
return UBT_ColumnBehaviourRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_ColumnBehaviourRecord = UBT_ColumnBehaviourRecord;

});
define("Connect2_LegacyShared.model$UBT_ColumnBehaviourRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_ColumnBehaviourRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourRecordList = (function (_super) {
__extends(UBT_ColumnBehaviourRecordList, _super);
function UBT_ColumnBehaviourRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourRecordList.itemType = Connect2_LegacySharedModel.UBT_ColumnBehaviourRecord;
return UBT_ColumnBehaviourRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ColumnBehaviourRecordList = UBT_ColumnBehaviourRecordList;

});
define("Connect2_LegacyShared.model$SubdivisionsItemRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "APIDomain_Directory_IS.model$LocalityRec"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRec = (function (_super) {
__extends(SubdivisionsItemRec, _super);
function SubdivisionsItemRec(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsMainHall", "isMainHallAttr", "IsMainHall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoRec());
}, true, APIDomain_Directory_ISModel.HallPhotoRec), 
this.attr("Address1", "address1Attr", "Address1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address2", "address2Attr", "Address2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address3", "address3Attr", "Address3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address4", "address4Attr", "Address4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address5", "address5Attr", "Address5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address6", "address6Attr", "Address6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address7", "address7Attr", "Address7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address8", "address8Attr", "Address8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityRec());
}, true, APIDomain_Directory_ISModel.LocalityRec), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BrothersCount", "brothersCountAttr", "BrothersCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SistersCount", "sistersCountAttr", "SistersCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionsItemRec.init();
return SubdivisionsItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubdivisionsItemRec = SubdivisionsItemRec;

});
define("Connect2_LegacyShared.model$SubdivisionsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionsItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRecord = (function (_super) {
__extends(SubdivisionsItemRecord, _super);
function SubdivisionsItemRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionsItem", "subdivisionsItemAttr", "SubdivisionsItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionsItemRec());
}, true, Connect2_LegacySharedModel.SubdivisionsItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionsItemRecord.fromStructure = function (str) {
return new SubdivisionsItemRecord(new SubdivisionsItemRecord.RecordClass({
subdivisionsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionsItemRecord._isAnonymousRecord = true;
SubdivisionsItemRecord.UniqueId = "28142865-55f2-2039-3ef9-4835efca9c66";
SubdivisionsItemRecord.init();
return SubdivisionsItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubdivisionsItemRecord = SubdivisionsItemRecord;

});
define("Connect2_LegacyShared.model$UBT_ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_ShapeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ShapeRecordList = (function (_super) {
__extends(UBT_ShapeRecordList, _super);
function UBT_ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeRecordList.itemType = Connect2_LegacySharedModel.UBT_ShapeRecord;
return UBT_ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ShapeRecordList = UBT_ShapeRecordList;

});
define("Connect2_LegacyShared.model$AvatarImageFallbackoptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsRecord = (function (_super) {
__extends(AvatarImageFallbackoptionsRecord, _super);
function AvatarImageFallbackoptionsRecord(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsRecord.attributesToDeclare = function () {
return [
this.attr("AvatarImageFallbackoptions", "avatarImageFallbackoptionsAttr", "AvatarImageFallbackoptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec());
}, true, UBTConnectLibraryModel.AvatarImageFallbackoptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarImageFallbackoptionsRecord.fromStructure = function (str) {
return new AvatarImageFallbackoptionsRecord(new AvatarImageFallbackoptionsRecord.RecordClass({
avatarImageFallbackoptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AvatarImageFallbackoptionsRecord._isAnonymousRecord = true;
AvatarImageFallbackoptionsRecord.UniqueId = "285ad076-c469-e14e-6a4f-adb5f1012e06";
AvatarImageFallbackoptionsRecord.init();
return AvatarImageFallbackoptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AvatarImageFallbackoptionsRecord = AvatarImageFallbackoptionsRecord;

});
define("Connect2_LegacyShared.model$RecentSearchTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RecentSearchTypeRec = (function (_super) {
__extends(RecentSearchTypeRec, _super);
function RecentSearchTypeRec(defaults) {
_super.apply(this, arguments);
}
RecentSearchTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RecentSearchTypeRec.fromStructure = function (str) {
return new RecentSearchTypeRec(new RecentSearchTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RecentSearchTypeRec.init();
return RecentSearchTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.RecentSearchTypeRec = RecentSearchTypeRec;

});
define("Connect2_LegacyShared.model$RecentSearchTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$RecentSearchTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RecentSearchTypeList = (function (_super) {
__extends(RecentSearchTypeList, _super);
function RecentSearchTypeList(defaults) {
_super.apply(this, arguments);
}
RecentSearchTypeList.itemType = Connect2_LegacySharedModel.RecentSearchTypeRec;
return RecentSearchTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RecentSearchTypeList = RecentSearchTypeList;

});
define("Connect2_LegacyShared.model$SubscribedRegionItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubscribedRegionItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubscribedRegionItemList = (function (_super) {
__extends(SubscribedRegionItemList, _super);
function SubscribedRegionItemList(defaults) {
_super.apply(this, arguments);
}
SubscribedRegionItemList.itemType = APIDomain_Directory_ISModel.SubscribedRegionItemRec;
return SubscribedRegionItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubscribedRegionItemList = SubscribedRegionItemList;

});
define("Connect2_LegacyShared.model$CountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryList = (function (_super) {
__extends(CountryList, _super);
function CountryList(defaults) {
_super.apply(this, arguments);
}
CountryList.itemType = APIDomain_Directory_ISModel.CountryRec;
return CountryList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CountryList = CountryList;

});
define("Connect2_LegacyShared.model$SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubscriptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubscriptionRecord = (function (_super) {
__extends(SubscriptionRecord, _super);
function SubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
SubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubscriptionRec());
}, true, APIDomain_Directory_ISModel.SubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionRecord.fromStructure = function (str) {
return new SubscriptionRecord(new SubscriptionRecord.RecordClass({
subscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscriptionRecord._isAnonymousRecord = true;
SubscriptionRecord.UniqueId = "f464bee9-2374-b4c4-ec54-7f38fcbc899d";
SubscriptionRecord.init();
return SubscriptionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubscriptionRecord = SubscriptionRecord;

});
define("Connect2_LegacyShared.model$SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubscriptionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubscriptionRecordList = (function (_super) {
__extends(SubscriptionRecordList, _super);
function SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
SubscriptionRecordList.itemType = Connect2_LegacySharedModel.SubscriptionRecord;
return SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubscriptionRecordList = SubscriptionRecordList;

});
define("Connect2_LegacyShared.model$Directory_LocalityTimezoneList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityTimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityTimezoneList = (function (_super) {
__extends(Directory_LocalityTimezoneList, _super);
function Directory_LocalityTimezoneList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityTimezoneList.itemType = APIDomain_Directory_ISModel.Directory_LocalityTimezoneRec;
return Directory_LocalityTimezoneList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityTimezoneList = Directory_LocalityTimezoneList;

});
define("Connect2_LegacyShared.model$UBT_ImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ImageSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeList = (function (_super) {
__extends(UBT_ImageSizeList, _super);
function UBT_ImageSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeList.itemType = UBTConnectLibraryModel.UBT_ImageSizeRec;
return UBT_ImageSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ImageSizeList = UBT_ImageSizeList;

});
define("Connect2_LegacyShared.model$TagRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TagRec = (function (_super) {
__extends(TagRec, _super);
function TagRec(defaults) {
_super.apply(this, arguments);
}
TagRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TagRec.init();
return TagRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TagRec = TagRec;

});
define("Connect2_LegacyShared.model$TagRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TagRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TagRecord = (function (_super) {
__extends(TagRecord, _super);
function TagRecord(defaults) {
_super.apply(this, arguments);
}
TagRecord.attributesToDeclare = function () {
return [
this.attr("Tag", "tagAttr", "Tag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TagRec());
}, true, Connect2_LegacySharedModel.TagRec)
].concat(_super.attributesToDeclare.call(this));
};
TagRecord.fromStructure = function (str) {
return new TagRecord(new TagRecord.RecordClass({
tagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TagRecord._isAnonymousRecord = true;
TagRecord.UniqueId = "8af9eea0-f56d-3d06-32fd-7ee9ac8f14fe";
TagRecord.init();
return TagRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TagRecord = TagRecord;

});
define("Connect2_LegacyShared.model$TagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TagRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TagRecordList = (function (_super) {
__extends(TagRecordList, _super);
function TagRecordList(defaults) {
_super.apply(this, arguments);
}
TagRecordList.itemType = Connect2_LegacySharedModel.TagRecord;
return TagRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TagRecordList = TagRecordList;

});
define("Connect2_LegacyShared.model$Directory_CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_CDNRecord = (function (_super) {
__extends(Directory_CDNRecord, _super);
function Directory_CDNRecord(defaults) {
_super.apply(this, arguments);
}
Directory_CDNRecord.attributesToDeclare = function () {
return [
this.attr("Directory_CDN", "directory_CDNAttr", "Directory_CDN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CDNRec());
}, true, APIDomain_Directory_ISModel.Directory_CDNRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_CDNRecord.fromStructure = function (str) {
return new Directory_CDNRecord(new Directory_CDNRecord.RecordClass({
directory_CDNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_CDNRecord._isAnonymousRecord = true;
Directory_CDNRecord.UniqueId = "ec2fcf22-c891-8e93-ddf0-a8ea0d45dbd4";
Directory_CDNRecord.init();
return Directory_CDNRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_CDNRecord = Directory_CDNRecord;

});
define("Connect2_LegacyShared.model$Directory_CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_CDNRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_CDNRecordList = (function (_super) {
__extends(Directory_CDNRecordList, _super);
function Directory_CDNRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_CDNRecordList.itemType = Connect2_LegacySharedModel.Directory_CDNRecord;
return Directory_CDNRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_CDNRecordList = Directory_CDNRecordList;

});
define("Connect2_LegacyShared.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ErrorMessageRec());
}, true, OutSystemsUI_2_23Model.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "a82b48d6-38f9-1d56-04e3-2c713e6d5950";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("Connect2_LegacyShared.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ErrorMessageRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = Connect2_LegacySharedModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("Connect2_LegacyShared.model$EventDescriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$EventDescriptionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventDescriptionRecordList = (function (_super) {
__extends(EventDescriptionRecordList, _super);
function EventDescriptionRecordList(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRecordList.itemType = Connect2_LegacySharedModel.EventDescriptionRecord;
return EventDescriptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EventDescriptionRecordList = EventDescriptionRecordList;

});
define("Connect2_LegacyShared.model$BackgroundOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsList = (function (_super) {
__extends(BackgroundOptionsList, _super);
function BackgroundOptionsList(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsList.itemType = UBTConnectLibraryModel.BackgroundOptionsRec;
return BackgroundOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BackgroundOptionsList = BackgroundOptionsList;

});
define("Connect2_LegacyShared.model$SpouseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SpouseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpouseList = (function (_super) {
__extends(SpouseList, _super);
function SpouseList(defaults) {
_super.apply(this, arguments);
}
SpouseList.itemType = APIDomain_Directory_ISModel.SpouseRec;
return SpouseList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpouseList = SpouseList;

});
define("Connect2_LegacyShared.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUI_2_23Model.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ErrorMessageList = ErrorMessageList;

});
define("Connect2_LegacyShared.model$EmailHouseholdEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EmailHouseholdEventRec = (function (_super) {
__extends(EmailHouseholdEventRec, _super);
function EmailHouseholdEventRec(defaults) {
_super.apply(this, arguments);
}
EmailHouseholdEventRec.attributesToDeclare = function () {
return [
this.attr("EmailTo", "emailToAttr", "EmailTo", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("NameOfSender", "nameOfSenderAttr", "NameOfSender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailHouseholdEventRec.init();
return EmailHouseholdEventRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.EmailHouseholdEventRec = EmailHouseholdEventRec;

});
define("Connect2_LegacyShared.model$EmailHouseholdEventList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$EmailHouseholdEventRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EmailHouseholdEventList = (function (_super) {
__extends(EmailHouseholdEventList, _super);
function EmailHouseholdEventList(defaults) {
_super.apply(this, arguments);
}
EmailHouseholdEventList.itemType = Connect2_LegacySharedModel.EmailHouseholdEventRec;
return EmailHouseholdEventList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EmailHouseholdEventList = EmailHouseholdEventList;

});
define("Connect2_LegacyShared.model$SubdivisionsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionsItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRecordList = (function (_super) {
__extends(SubdivisionsItemRecordList, _super);
function SubdivisionsItemRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRecordList.itemType = Connect2_LegacySharedModel.SubdivisionsItemRecord;
return SubdivisionsItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionsItemRecordList = SubdivisionsItemRecordList;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingRecord = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingRecord, _super);
function CommunityBusinessCarouselPreloadingRecord(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingRecord.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessCarouselPreloading", "communityBusinessCarouselPreloadingAttr", "CommunityBusinessCarouselPreloading", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec());
}, true, Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessCarouselPreloadingRecord.fromStructure = function (str) {
return new CommunityBusinessCarouselPreloadingRecord(new CommunityBusinessCarouselPreloadingRecord.RecordClass({
communityBusinessCarouselPreloadingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessCarouselPreloadingRecord._isAnonymousRecord = true;
CommunityBusinessCarouselPreloadingRecord.UniqueId = "2d518419-9bd0-f684-7aec-5bce682e6b24";
CommunityBusinessCarouselPreloadingRecord.init();
return CommunityBusinessCarouselPreloadingRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRecord = CommunityBusinessCarouselPreloadingRecord;

});
define("Connect2_LegacyShared.model$TextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextLongIntegerRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextLongIntegerRecordList = (function (_super) {
__extends(TextLongIntegerRecordList, _super);
function TextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerRecordList.itemType = Connect2_LegacySharedModel.TextLongIntegerRecord;
return TextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextLongIntegerRecordList = TextLongIntegerRecordList;

});
define("Connect2_LegacyShared.model$ImageBorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ImageBorderOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsRecord = (function (_super) {
__extends(ImageBorderOptionsRecord, _super);
function ImageBorderOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ImageBorderOptions", "imageBorderOptionsAttr", "ImageBorderOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ImageBorderOptionsRec());
}, true, UBTConnectLibraryModel.ImageBorderOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageBorderOptionsRecord.fromStructure = function (str) {
return new ImageBorderOptionsRecord(new ImageBorderOptionsRecord.RecordClass({
imageBorderOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageBorderOptionsRecord._isAnonymousRecord = true;
ImageBorderOptionsRecord.UniqueId = "f4ee7189-4cac-b1ec-c90f-31fe90073a0d";
ImageBorderOptionsRecord.init();
return ImageBorderOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageBorderOptionsRecord = ImageBorderOptionsRecord;

});
define("Connect2_LegacyShared.model$ImageBorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageBorderOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsRecordList = (function (_super) {
__extends(ImageBorderOptionsRecordList, _super);
function ImageBorderOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsRecordList.itemType = Connect2_LegacySharedModel.ImageBorderOptionsRecord;
return ImageBorderOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageBorderOptionsRecordList = ImageBorderOptionsRecordList;

});
define("Connect2_LegacyShared.model$DirectoryAPIFilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterRec = (function (_super) {
__extends(DirectoryAPIFilterRec, _super);
function DirectoryAPIFilterRec(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryAPIFilterRec.init();
return DirectoryAPIFilterRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DirectoryAPIFilterRec = DirectoryAPIFilterRec;

});
define("Connect2_LegacyShared.model$DirectoryAPIFilterList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryAPIFilterRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterList = (function (_super) {
__extends(DirectoryAPIFilterList, _super);
function DirectoryAPIFilterList(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterList.itemType = Connect2_LegacySharedModel.DirectoryAPIFilterRec;
return DirectoryAPIFilterList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DirectoryAPIFilterList = DirectoryAPIFilterList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_GeographyList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyList = (function (_super) {
__extends(Directory_UserCurrent_GeographyList, _super);
function Directory_UserCurrent_GeographyList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec;
return Directory_UserCurrent_GeographyList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_GeographyList = Directory_UserCurrent_GeographyList;

});
define("Connect2_LegacyShared.model$Directory_CountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_CountryRecord = (function (_super) {
__extends(Directory_CountryRecord, _super);
function Directory_CountryRecord(defaults) {
_super.apply(this, arguments);
}
Directory_CountryRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Country", "directory_CountryAttr", "Directory_Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CountryRec());
}, true, APIDomain_Directory_ISModel.Directory_CountryRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_CountryRecord.fromStructure = function (str) {
return new Directory_CountryRecord(new Directory_CountryRecord.RecordClass({
directory_CountryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_CountryRecord._isAnonymousRecord = true;
Directory_CountryRecord.UniqueId = "2e099d8f-e672-3bc3-a086-2b76272106f7";
Directory_CountryRecord.init();
return Directory_CountryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_CountryRecord = Directory_CountryRecord;

});
define("Connect2_LegacyShared.model$EventSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$EventSourceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventSourceRecord = (function (_super) {
__extends(EventSourceRecord, _super);
function EventSourceRecord(defaults) {
_super.apply(this, arguments);
}
EventSourceRecord.attributesToDeclare = function () {
return [
this.attr("EventSource", "eventSourceAttr", "EventSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventSourceRec());
}, true, FullCalendarReactiveModel.EventSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
EventSourceRecord.fromStructure = function (str) {
return new EventSourceRecord(new EventSourceRecord.RecordClass({
eventSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventSourceRecord._isAnonymousRecord = true;
EventSourceRecord.UniqueId = "9915d00f-8bb7-2a7c-8636-c92c5eed36cf";
EventSourceRecord.init();
return EventSourceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.EventSourceRecord = EventSourceRecord;

});
define("Connect2_LegacyShared.model$EventSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$EventSourceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventSourceRecordList = (function (_super) {
__extends(EventSourceRecordList, _super);
function EventSourceRecordList(defaults) {
_super.apply(this, arguments);
}
EventSourceRecordList.itemType = Connect2_LegacySharedModel.EventSourceRecord;
return EventSourceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EventSourceRecordList = EventSourceRecordList;

});
define("Connect2_LegacyShared.model$RoleItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$RoleItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RoleItemRecord = (function (_super) {
__extends(RoleItemRecord, _super);
function RoleItemRecord(defaults) {
_super.apply(this, arguments);
}
RoleItemRecord.attributesToDeclare = function () {
return [
this.attr("RoleItem", "roleItemAttr", "RoleItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.RoleItemRec());
}, true, APIDomain_Directory_ISModel.RoleItemRec)
].concat(_super.attributesToDeclare.call(this));
};
RoleItemRecord.fromStructure = function (str) {
return new RoleItemRecord(new RoleItemRecord.RecordClass({
roleItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RoleItemRecord._isAnonymousRecord = true;
RoleItemRecord.UniqueId = "980a77b3-9862-6d8b-f223-f418a93bde51";
RoleItemRecord.init();
return RoleItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.RoleItemRecord = RoleItemRecord;

});
define("Connect2_LegacyShared.model$RoleItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$RoleItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RoleItemRecordList = (function (_super) {
__extends(RoleItemRecordList, _super);
function RoleItemRecordList(defaults) {
_super.apply(this, arguments);
}
RoleItemRecordList.itemType = Connect2_LegacySharedModel.RoleItemRecord;
return RoleItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RoleItemRecordList = RoleItemRecordList;

});
define("Connect2_LegacyShared.model$LongIntegerDirectory_LocalityTimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityTimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LongIntegerDirectory_LocalityTimezoneRecord = (function (_super) {
__extends(LongIntegerDirectory_LocalityTimezoneRecord, _super);
function LongIntegerDirectory_LocalityTimezoneRecord(defaults) {
_super.apply(this, arguments);
}
LongIntegerDirectory_LocalityTimezoneRecord.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GetTimezoneResponse", "getTimezoneResponseAttr", "GetTimezoneResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocalityTimezoneRec());
}, true, APIDomain_Directory_ISModel.Directory_LocalityTimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
LongIntegerDirectory_LocalityTimezoneRecord._isAnonymousRecord = true;
LongIntegerDirectory_LocalityTimezoneRecord.UniqueId = "75d9e7f1-b5e9-26ac-14a8-e49c060935ad";
LongIntegerDirectory_LocalityTimezoneRecord.init();
return LongIntegerDirectory_LocalityTimezoneRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LongIntegerDirectory_LocalityTimezoneRecord = LongIntegerDirectory_LocalityTimezoneRecord;

});
define("Connect2_LegacyShared.model$LongIntegerDirectory_LocalityTimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LongIntegerDirectory_LocalityTimezoneRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LongIntegerDirectory_LocalityTimezoneRecordList = (function (_super) {
__extends(LongIntegerDirectory_LocalityTimezoneRecordList, _super);
function LongIntegerDirectory_LocalityTimezoneRecordList(defaults) {
_super.apply(this, arguments);
}
LongIntegerDirectory_LocalityTimezoneRecordList.itemType = Connect2_LegacySharedModel.LongIntegerDirectory_LocalityTimezoneRecord;
return LongIntegerDirectory_LocalityTimezoneRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LongIntegerDirectory_LocalityTimezoneRecordList = LongIntegerDirectory_LocalityTimezoneRecordList;

});
define("Connect2_LegacyShared.model$UpdateItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model", "Connect2_LegacyShared.model", "Connect_Updates_CS.model$UpdateItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Updates_CS"], function (exports, OutSystems, Connect_Updates_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UpdateItemRecord = (function (_super) {
__extends(UpdateItemRecord, _super);
function UpdateItemRecord(defaults) {
_super.apply(this, arguments);
}
UpdateItemRecord.attributesToDeclare = function () {
return [
this.attr("UpdateItem", "updateItemAttr", "UpdateItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.UpdateItemRec());
}, true, Connect_Updates_CSModel.UpdateItemRec)
].concat(_super.attributesToDeclare.call(this));
};
UpdateItemRecord.fromStructure = function (str) {
return new UpdateItemRecord(new UpdateItemRecord.RecordClass({
updateItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UpdateItemRecord._isAnonymousRecord = true;
UpdateItemRecord.UniqueId = "2f7b775a-c36b-1ef7-8bfb-2dc48cf19b58";
UpdateItemRecord.init();
return UpdateItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UpdateItemRecord = UpdateItemRecord;

});
define("Connect2_LegacyShared.model$HouseholdNavigationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdNavigationTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdNavigationTypeRecord = (function (_super) {
__extends(HouseholdNavigationTypeRecord, _super);
function HouseholdNavigationTypeRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdNavigationTypeRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdNavigationType", "householdNavigationTypeAttr", "HouseholdNavigationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdNavigationTypeRec());
}, true, Connect2_LegacySharedModel.HouseholdNavigationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdNavigationTypeRecord.fromStructure = function (str) {
return new HouseholdNavigationTypeRecord(new HouseholdNavigationTypeRecord.RecordClass({
householdNavigationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdNavigationTypeRecord._isAnonymousRecord = true;
HouseholdNavigationTypeRecord.UniqueId = "3b367f7c-4565-4f33-7162-7fd4e7a542d8";
HouseholdNavigationTypeRecord.init();
return HouseholdNavigationTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdNavigationTypeRecord = HouseholdNavigationTypeRecord;

});
define("Connect2_LegacyShared.model$HouseholdNavigationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdNavigationTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdNavigationTypeRecordList = (function (_super) {
__extends(HouseholdNavigationTypeRecordList, _super);
function HouseholdNavigationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdNavigationTypeRecordList.itemType = Connect2_LegacySharedModel.HouseholdNavigationTypeRecord;
return HouseholdNavigationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdNavigationTypeRecordList = HouseholdNavigationTypeRecordList;

});
define("Connect2_LegacyShared.model$BulkSignedImageResultList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImageResultRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultList = (function (_super) {
__extends(BulkSignedImageResultList, _super);
function BulkSignedImageResultList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultList.itemType = Connect2_LegacySharedModel.BulkSignedImageResultRec;
return BulkSignedImageResultList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedImageResultList = BulkSignedImageResultList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_DirectoryRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_DirectoryRec = (function (_super) {
__extends(ApplicationEvents_DirectoryRec, _super);
function ApplicationEvents_DirectoryRec(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_DirectoryRec.attributesToDeclare = function () {
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
ApplicationEvents_DirectoryRec.init();
return ApplicationEvents_DirectoryRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec = ApplicationEvents_DirectoryRec;

});
define("Connect2_LegacyShared.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextList = TextList;

});
define("Connect2_LegacyShared.model$PhotoTagList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoTagRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoTagList = (function (_super) {
__extends(PhotoTagList, _super);
function PhotoTagList(defaults) {
_super.apply(this, arguments);
}
PhotoTagList.itemType = APIDomain_Directory_ISModel.PhotoTagRec;
return PhotoTagList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoTagList = PhotoTagList;

});
define("Connect2_LegacyShared.model$BorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$BorderOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BorderOptionsRecord = (function (_super) {
__extends(BorderOptionsRecord, _super);
function BorderOptionsRecord(defaults) {
_super.apply(this, arguments);
}
BorderOptionsRecord.attributesToDeclare = function () {
return [
this.attr("BorderOptions", "borderOptionsAttr", "BorderOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BorderOptionsRec());
}, true, UBTConnectLibraryModel.BorderOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BorderOptionsRecord.fromStructure = function (str) {
return new BorderOptionsRecord(new BorderOptionsRecord.RecordClass({
borderOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BorderOptionsRecord._isAnonymousRecord = true;
BorderOptionsRecord.UniqueId = "7e6c94eb-ca32-af63-9cc6-1a2ebfc43a00";
BorderOptionsRecord.init();
return BorderOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BorderOptionsRecord = BorderOptionsRecord;

});
define("Connect2_LegacyShared.model$BorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BorderOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BorderOptionsRecordList = (function (_super) {
__extends(BorderOptionsRecordList, _super);
function BorderOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
BorderOptionsRecordList.itemType = Connect2_LegacySharedModel.BorderOptionsRecord;
return BorderOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BorderOptionsRecordList = BorderOptionsRecordList;

});
define("Connect2_LegacyShared.model$SubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubdivisionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionRecord = (function (_super) {
__extends(SubdivisionRecord, _super);
function SubdivisionRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionRecord.attributesToDeclare = function () {
return [
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubdivisionRec());
}, true, APIDomain_Directory_ISModel.SubdivisionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionRecord.fromStructure = function (str) {
return new SubdivisionRecord(new SubdivisionRecord.RecordClass({
subdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionRecord._isAnonymousRecord = true;
SubdivisionRecord.UniqueId = "326a465d-a961-7533-0340-7b556923bc4e";
SubdivisionRecord.init();
return SubdivisionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubdivisionRecord = SubdivisionRecord;

});
define("Connect2_LegacyShared.model$RangeList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$RangeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RangeList = (function (_super) {
__extends(RangeList, _super);
function RangeList(defaults) {
_super.apply(this, arguments);
}
RangeList.itemType = FullCalendarReactiveModel.RangeRec;
return RangeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RangeList = RangeList;

});
define("Connect2_LegacyShared.model$UBT_AvatarSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_AvatarSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeRecord = (function (_super) {
__extends(UBT_AvatarSizeRecord, _super);
function UBT_AvatarSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_AvatarSize", "uBT_AvatarSizeAttr", "UBT_AvatarSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_AvatarSizeRec());
}, true, UBTConnectLibraryModel.UBT_AvatarSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_AvatarSizeRecord.fromStructure = function (str) {
return new UBT_AvatarSizeRecord(new UBT_AvatarSizeRecord.RecordClass({
uBT_AvatarSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_AvatarSizeRecord._isAnonymousRecord = true;
UBT_AvatarSizeRecord.UniqueId = "eddff16b-8b32-809f-b4e4-7cbd636a62cf";
UBT_AvatarSizeRecord.init();
return UBT_AvatarSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_AvatarSizeRecord = UBT_AvatarSizeRecord;

});
define("Connect2_LegacyShared.model$UBT_AvatarSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_AvatarSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeRecordList = (function (_super) {
__extends(UBT_AvatarSizeRecordList, _super);
function UBT_AvatarSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeRecordList.itemType = Connect2_LegacySharedModel.UBT_AvatarSizeRecord;
return UBT_AvatarSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_AvatarSizeRecordList = UBT_AvatarSizeRecordList;

});
define("Connect2_LegacyShared.model$MemoryCacheResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_LegacyShared.model", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecord = (function (_super) {
__extends(MemoryCacheResultRecord, _super);
function MemoryCacheResultRecord(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecord.attributesToDeclare = function () {
return [
this.attr("MemoryCacheResult", "memoryCacheResultAttr", "MemoryCacheResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheResultRec());
}, true, MemoryClientCacheModel.MemoryCacheResultRec)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheResultRecord.fromStructure = function (str) {
return new MemoryCacheResultRecord(new MemoryCacheResultRecord.RecordClass({
memoryCacheResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheResultRecord._isAnonymousRecord = true;
MemoryCacheResultRecord.UniqueId = "9c1b9e17-cba5-5973-e862-979a81a4f983";
MemoryCacheResultRecord.init();
return MemoryCacheResultRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MemoryCacheResultRecord = MemoryCacheResultRecord;

});
define("Connect2_LegacyShared.model$MemoryCacheResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MemoryCacheResultRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecordList = (function (_super) {
__extends(MemoryCacheResultRecordList, _super);
function MemoryCacheResultRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecordList.itemType = Connect2_LegacySharedModel.MemoryCacheResultRecord;
return MemoryCacheResultRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemoryCacheResultRecordList = MemoryCacheResultRecordList;

});
define("Connect2_LegacyShared.model$Directory_Subdivision_SimpleRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_Subdivision_SimpleRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_Subdivision_SimpleRecord = (function (_super) {
__extends(Directory_Subdivision_SimpleRecord, _super);
function Directory_Subdivision_SimpleRecord(defaults) {
_super.apply(this, arguments);
}
Directory_Subdivision_SimpleRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Subdivision_Simple", "directory_Subdivision_SimpleAttr", "Directory_Subdivision_Simple", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_Subdivision_SimpleRec());
}, true, APIDomain_Directory_ISModel.Directory_Subdivision_SimpleRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_Subdivision_SimpleRecord.fromStructure = function (str) {
return new Directory_Subdivision_SimpleRecord(new Directory_Subdivision_SimpleRecord.RecordClass({
directory_Subdivision_SimpleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_Subdivision_SimpleRecord._isAnonymousRecord = true;
Directory_Subdivision_SimpleRecord.UniqueId = "333e10db-cd34-3a2d-12c8-46c656e79dbc";
Directory_Subdivision_SimpleRecord.init();
return Directory_Subdivision_SimpleRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_Subdivision_SimpleRecord = Directory_Subdivision_SimpleRecord;

});
define("Connect2_LegacyShared.model$BulkSignedImagesParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImagesParametersRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersRecord = (function (_super) {
__extends(BulkSignedImagesParametersRecord, _super);
function BulkSignedImagesParametersRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedImagesParameters", "bulkSignedImagesParametersAttr", "BulkSignedImagesParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BulkSignedImagesParametersRec());
}, true, Connect2_LegacySharedModel.BulkSignedImagesParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImagesParametersRecord.fromStructure = function (str) {
return new BulkSignedImagesParametersRecord(new BulkSignedImagesParametersRecord.RecordClass({
bulkSignedImagesParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedImagesParametersRecord._isAnonymousRecord = true;
BulkSignedImagesParametersRecord.UniqueId = "33509053-b1ed-24cb-7371-407ff7ab87ab";
BulkSignedImagesParametersRecord.init();
return BulkSignedImagesParametersRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedImagesParametersRecord = BulkSignedImagesParametersRecord;

});
define("Connect2_LegacyShared.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_LegacyShared.model", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ErrorList = ErrorList;

});
define("Connect2_LegacyShared.model$Connect_EntityRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_EntityRecord = (function (_super) {
__extends(Connect_EntityRecord, _super);
function Connect_EntityRecord(defaults) {
_super.apply(this, arguments);
}
Connect_EntityRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Entity", "connect_EntityAttr", "Connect_Entity", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_EntityRec());
}, true, Connect_CommonEntities_DBModel.Connect_EntityRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_EntityRecord.fromStructure = function (str) {
return new Connect_EntityRecord(new Connect_EntityRecord.RecordClass({
connect_EntityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_EntityRecord._isAnonymousRecord = true;
Connect_EntityRecord.UniqueId = "3514ce6c-0a23-b49d-ae55-1b6dcb4baa9d";
Connect_EntityRecord.init();
return Connect_EntityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Connect_EntityRecord = Connect_EntityRecord;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberList = (function (_super) {
__extends(Directory_UserCurrent_MemberList, _super);
function Directory_UserCurrent_MemberList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec;
return Directory_UserCurrent_MemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_MemberList = Directory_UserCurrent_MemberList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_DirectoryList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_DirectoryRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_DirectoryList = (function (_super) {
__extends(ApplicationEvents_DirectoryList, _super);
function ApplicationEvents_DirectoryList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_DirectoryList.itemType = Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec;
return ApplicationEvents_DirectoryList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_DirectoryList = ApplicationEvents_DirectoryList;

});
define("Connect2_LegacyShared.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageStatusRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = Comms_CSModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageStatusList = MessageStatusList;

});
define("Connect2_LegacyShared.model$GetLocalityStatisticsResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRecord = (function (_super) {
__extends(GetLocalityStatisticsResponseRecord, _super);
function GetLocalityStatisticsResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetLocalityStatisticsResponse", "getLocalityStatisticsResponseAttr", "GetLocalityStatisticsResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec());
}, true, APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalityStatisticsResponseRecord.fromStructure = function (str) {
return new GetLocalityStatisticsResponseRecord(new GetLocalityStatisticsResponseRecord.RecordClass({
getLocalityStatisticsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetLocalityStatisticsResponseRecord._isAnonymousRecord = true;
GetLocalityStatisticsResponseRecord.UniqueId = "377ab4ef-a0d2-cdcd-0077-9cbf3aecb441";
GetLocalityStatisticsResponseRecord.init();
return GetLocalityStatisticsResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.GetLocalityStatisticsResponseRecord = GetLocalityStatisticsResponseRecord;

});
define("Connect2_LegacyShared.model$OpeningHourItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$OpeningHourItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var OpeningHourItemList = (function (_super) {
__extends(OpeningHourItemList, _super);
function OpeningHourItemList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemList.itemType = APIDomain_Directory_ISModel.OpeningHourItemRec;
return OpeningHourItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.OpeningHourItemList = OpeningHourItemList;

});
define("Connect2_LegacyShared.model$BusinessLinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemList = (function (_super) {
__extends(BusinessLinkItemList, _super);
function BusinessLinkItemList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemList.itemType = APIDomain_Directory_ISModel.BusinessLinkItemRec;
return BusinessLinkItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BusinessLinkItemList = BusinessLinkItemList;

});
define("Connect2_LegacyShared.model$Directory_LocalityCommunityBusinessRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityCommunityBusinessRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityCommunityBusinessRecord = (function (_super) {
__extends(Directory_LocalityCommunityBusinessRecord, _super);
function Directory_LocalityCommunityBusinessRecord(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityCommunityBusinessRecord.attributesToDeclare = function () {
return [
this.attr("Directory_LocalityCommunityBusiness", "directory_LocalityCommunityBusinessAttr", "Directory_LocalityCommunityBusiness", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocalityCommunityBusinessRec());
}, true, APIDomain_Directory_ISModel.Directory_LocalityCommunityBusinessRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_LocalityCommunityBusinessRecord.fromStructure = function (str) {
return new Directory_LocalityCommunityBusinessRecord(new Directory_LocalityCommunityBusinessRecord.RecordClass({
directory_LocalityCommunityBusinessAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_LocalityCommunityBusinessRecord._isAnonymousRecord = true;
Directory_LocalityCommunityBusinessRecord.UniqueId = "a30492bc-a946-0d86-fd99-15878c9d87dd";
Directory_LocalityCommunityBusinessRecord.init();
return Directory_LocalityCommunityBusinessRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_LocalityCommunityBusinessRecord = Directory_LocalityCommunityBusinessRecord;

});
define("Connect2_LegacyShared.model$Directory_LocalityCommunityBusinessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_LocalityCommunityBusinessRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityCommunityBusinessRecordList = (function (_super) {
__extends(Directory_LocalityCommunityBusinessRecordList, _super);
function Directory_LocalityCommunityBusinessRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityCommunityBusinessRecordList.itemType = Connect2_LegacySharedModel.Directory_LocalityCommunityBusinessRecord;
return Directory_LocalityCommunityBusinessRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityCommunityBusinessRecordList = Directory_LocalityCommunityBusinessRecordList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_OrbitRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_OrbitRec = (function (_super) {
__extends(ApplicationEvents_OrbitRec, _super);
function ApplicationEvents_OrbitRec(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_OrbitRec.attributesToDeclare = function () {
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
ApplicationEvents_OrbitRec.init();
return ApplicationEvents_OrbitRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_OrbitRec = ApplicationEvents_OrbitRec;

});
define("Connect2_LegacyShared.model$ApplicationEvents_OrbitList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_OrbitRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_OrbitList = (function (_super) {
__extends(ApplicationEvents_OrbitList, _super);
function ApplicationEvents_OrbitList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_OrbitList.itemType = Connect2_LegacySharedModel.ApplicationEvents_OrbitRec;
return ApplicationEvents_OrbitList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_OrbitList = ApplicationEvents_OrbitList;

});
define("Connect2_LegacyShared.model$LocalConnectApplicationEventsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalConnectApplicationEventsRec = (function (_super) {
__extends(LocalConnectApplicationEventsRec, _super);
function LocalConnectApplicationEventsRec(defaults) {
_super.apply(this, arguments);
}
LocalConnectApplicationEventsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalConnectApplicationEventsRec.init();
return LocalConnectApplicationEventsRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalConnectApplicationEventsRec = LocalConnectApplicationEventsRec;

});
define("Connect2_LegacyShared.model$UBT_MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "Connect2_LegacyShared.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecord = (function (_super) {
__extends(UBT_MessageTypeRecord, _super);
function UBT_MessageTypeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_MessageType", "uBT_MessageTypeAttr", "UBT_MessageType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTJavaScriptUtilsModel.UBT_MessageTypeRec());
}, true, UBTJavaScriptUtilsModel.UBT_MessageTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_MessageTypeRecord.fromStructure = function (str) {
return new UBT_MessageTypeRecord(new UBT_MessageTypeRecord.RecordClass({
uBT_MessageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_MessageTypeRecord._isAnonymousRecord = true;
UBT_MessageTypeRecord.UniqueId = "39fb871d-a8eb-6e00-0e38-5ca7658159dc";
UBT_MessageTypeRecord.init();
return UBT_MessageTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_MessageTypeRecord = UBT_MessageTypeRecord;

});
define("Connect2_LegacyShared.model$AdaptiveCardJSONRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$AdaptiveCardJSONRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardJSONRecord = (function (_super) {
__extends(AdaptiveCardJSONRecord, _super);
function AdaptiveCardJSONRecord(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardJSONRecord.attributesToDeclare = function () {
return [
this.attr("AdaptiveCardJSON", "adaptiveCardJSONAttr", "AdaptiveCardJSON", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.AdaptiveCardJSONRec());
}, true, Comms_CSModel.AdaptiveCardJSONRec)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardJSONRecord.fromStructure = function (str) {
return new AdaptiveCardJSONRecord(new AdaptiveCardJSONRecord.RecordClass({
adaptiveCardJSONAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdaptiveCardJSONRecord._isAnonymousRecord = true;
AdaptiveCardJSONRecord.UniqueId = "3a865524-5ebf-18e5-413f-c7ef5a8d78e8";
AdaptiveCardJSONRecord.init();
return AdaptiveCardJSONRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AdaptiveCardJSONRecord = AdaptiveCardJSONRecord;

});
define("Connect2_LegacyShared.model$GetCountriesBySubscriptionIdRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetCountriesBySubscriptionIdRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetCountriesBySubscriptionIdRecord = (function (_super) {
__extends(GetCountriesBySubscriptionIdRecord, _super);
function GetCountriesBySubscriptionIdRecord(defaults) {
_super.apply(this, arguments);
}
GetCountriesBySubscriptionIdRecord.attributesToDeclare = function () {
return [
this.attr("GetCountriesBySubscriptionId", "getCountriesBySubscriptionIdAttr", "GetCountriesBySubscriptionId", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec());
}, true, APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCountriesBySubscriptionIdRecord.fromStructure = function (str) {
return new GetCountriesBySubscriptionIdRecord(new GetCountriesBySubscriptionIdRecord.RecordClass({
getCountriesBySubscriptionIdAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetCountriesBySubscriptionIdRecord._isAnonymousRecord = true;
GetCountriesBySubscriptionIdRecord.UniqueId = "59d6e874-9908-ef8c-164d-9869b8c4df71";
GetCountriesBySubscriptionIdRecord.init();
return GetCountriesBySubscriptionIdRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.GetCountriesBySubscriptionIdRecord = GetCountriesBySubscriptionIdRecord;

});
define("Connect2_LegacyShared.model$GetCountriesBySubscriptionIdRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$GetCountriesBySubscriptionIdRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetCountriesBySubscriptionIdRecordList = (function (_super) {
__extends(GetCountriesBySubscriptionIdRecordList, _super);
function GetCountriesBySubscriptionIdRecordList(defaults) {
_super.apply(this, arguments);
}
GetCountriesBySubscriptionIdRecordList.itemType = Connect2_LegacySharedModel.GetCountriesBySubscriptionIdRecord;
return GetCountriesBySubscriptionIdRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetCountriesBySubscriptionIdRecordList = GetCountriesBySubscriptionIdRecordList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_AlphaRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_AlphaRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_AlphaRecord = (function (_super) {
__extends(ApplicationEvents_AlphaRecord, _super);
function ApplicationEvents_AlphaRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_AlphaRecord.attributesToDeclare = function () {
return [
this.attr("ApplicationEvents_Alpha", "applicationEvents_AlphaAttr", "ApplicationEvents_Alpha", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ApplicationEvents_AlphaRec());
}, true, Connect2_LegacySharedModel.ApplicationEvents_AlphaRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationEvents_AlphaRecord.fromStructure = function (str) {
return new ApplicationEvents_AlphaRecord(new ApplicationEvents_AlphaRecord.RecordClass({
applicationEvents_AlphaAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationEvents_AlphaRecord._isAnonymousRecord = true;
ApplicationEvents_AlphaRecord.UniqueId = "3c176e91-41f6-2bb5-7804-8f32349dff44";
ApplicationEvents_AlphaRecord.init();
return ApplicationEvents_AlphaRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_AlphaRecord = ApplicationEvents_AlphaRecord;

});
define("Connect2_LegacyShared.model$GetLocalityStatisticsResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseList = (function (_super) {
__extends(GetLocalityStatisticsResponseList, _super);
function GetLocalityStatisticsResponseList(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseList.itemType = APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec;
return GetLocalityStatisticsResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetLocalityStatisticsResponseList = GetLocalityStatisticsResponseList;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingRecord = (function (_super) {
__extends(HouseholdCarouselPreloadingRecord, _super);
function HouseholdCarouselPreloadingRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdCarouselPreloading", "householdCarouselPreloadingAttr", "HouseholdCarouselPreloading", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec());
}, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdCarouselPreloadingRecord.fromStructure = function (str) {
return new HouseholdCarouselPreloadingRecord(new HouseholdCarouselPreloadingRecord.RecordClass({
householdCarouselPreloadingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdCarouselPreloadingRecord._isAnonymousRecord = true;
HouseholdCarouselPreloadingRecord.UniqueId = "e8b31aec-a385-e7d7-39ea-50dc6bde6880";
HouseholdCarouselPreloadingRecord.init();
return HouseholdCarouselPreloadingRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdCarouselPreloadingRecord = HouseholdCarouselPreloadingRecord;

});
define("Connect2_LegacyShared.model$HouseholdCarouselPreloadingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingRecordList = (function (_super) {
__extends(HouseholdCarouselPreloadingRecordList, _super);
function HouseholdCarouselPreloadingRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingRecordList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadingRecord;
return HouseholdCarouselPreloadingRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdCarouselPreloadingRecordList = HouseholdCarouselPreloadingRecordList;

});
define("Connect2_LegacyShared.model$LazyImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LazyImageSizeRecord = (function (_super) {
__extends(LazyImageSizeRecord, _super);
function LazyImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("LazyImageSize", "lazyImageSizeAttr", "LazyImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec());
}, true, UBTConnectLibraryModel.LazyImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
LazyImageSizeRecord.fromStructure = function (str) {
return new LazyImageSizeRecord(new LazyImageSizeRecord.RecordClass({
lazyImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LazyImageSizeRecord._isAnonymousRecord = true;
LazyImageSizeRecord.UniqueId = "4c061984-90a3-ec22-5824-8503ba6d4ff3";
LazyImageSizeRecord.init();
return LazyImageSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LazyImageSizeRecord = LazyImageSizeRecord;

});
define("Connect2_LegacyShared.model$LazyImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LazyImageSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LazyImageSizeRecordList = (function (_super) {
__extends(LazyImageSizeRecordList, _super);
function LazyImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeRecordList.itemType = Connect2_LegacySharedModel.LazyImageSizeRecord;
return LazyImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LazyImageSizeRecordList = LazyImageSizeRecordList;

});
define("Connect2_LegacyShared.model$Directory_InterchangeList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_InterchangeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_InterchangeList = (function (_super) {
__extends(Directory_InterchangeList, _super);
function Directory_InterchangeList(defaults) {
_super.apply(this, arguments);
}
Directory_InterchangeList.itemType = APIDomain_Directory_ISModel.Directory_InterchangeRec;
return Directory_InterchangeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_InterchangeList = Directory_InterchangeList;

});
define("Connect2_LegacyShared.model$SenderList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SenderRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SenderList = (function (_super) {
__extends(SenderList, _super);
function SenderList(defaults) {
_super.apply(this, arguments);
}
SenderList.itemType = APIDomain_Directory_ISModel.SenderRec;
return SenderList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SenderList = SenderList;

});
define("Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardActionSubmitDataRec = (function (_super) {
__extends(AdaptiveCardActionSubmitDataRec, _super);
function AdaptiveCardActionSubmitDataRec(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardActionSubmitDataRec.attributesToDeclare = function () {
return [
this.attr("EventHostId", "eventHostIdAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubmitType", "submitTypeAttr", "submitType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DestinationEmail", "destinationEmailAttr", "destinationEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrganiserName", "organiserNameAttr", "organiserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailSubject", "emailSubjectAttr", "emailSubject", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DestinationPhoneNumber", "destinationPhoneNumberAttr", "destinationPhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventId", "eventIdAttr", "eventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardActionSubmitDataRec.init();
return AdaptiveCardActionSubmitDataRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec = AdaptiveCardActionSubmitDataRec;

});
define("Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardActionSubmitDataRecord = (function (_super) {
__extends(AdaptiveCardActionSubmitDataRecord, _super);
function AdaptiveCardActionSubmitDataRecord(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardActionSubmitDataRecord.attributesToDeclare = function () {
return [
this.attr("AdaptiveCardActionSubmitData", "adaptiveCardActionSubmitDataAttr", "AdaptiveCardActionSubmitData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec());
}, true, Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardActionSubmitDataRecord.fromStructure = function (str) {
return new AdaptiveCardActionSubmitDataRecord(new AdaptiveCardActionSubmitDataRecord.RecordClass({
adaptiveCardActionSubmitDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdaptiveCardActionSubmitDataRecord._isAnonymousRecord = true;
AdaptiveCardActionSubmitDataRecord.UniqueId = "f05d4a27-e4b4-7524-75f4-7c9814ed62e8";
AdaptiveCardActionSubmitDataRecord.init();
return AdaptiveCardActionSubmitDataRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRecord = AdaptiveCardActionSubmitDataRecord;

});
define("Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardActionSubmitDataRecordList = (function (_super) {
__extends(AdaptiveCardActionSubmitDataRecordList, _super);
function AdaptiveCardActionSubmitDataRecordList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardActionSubmitDataRecordList.itemType = Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRecord;
return AdaptiveCardActionSubmitDataRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRecordList = AdaptiveCardActionSubmitDataRecordList;

});
define("Connect2_LegacyShared.model$SizeOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SizeOptionsList = (function (_super) {
__extends(SizeOptionsList, _super);
function SizeOptionsList(defaults) {
_super.apply(this, arguments);
}
SizeOptionsList.itemType = UBTConnectLibraryModel.SizeOptionsRec;
return SizeOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SizeOptionsList = SizeOptionsList;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemList = (function (_super) {
__extends(LocalityHouseholdsResultItemList, _super);
function LocalityHouseholdsResultItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemList.itemType = APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec;
return LocalityHouseholdsResultItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityHouseholdsResultItemList = LocalityHouseholdsResultItemList;

});
define("Connect2_LegacyShared.model$CacheableSubdivisionInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.model$LocalityHouseholdsResultItemList"], function (exports, OutSystems, Connect2_LegacySharedModel, APIDomain_Directory_ISModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRec = (function (_super) {
__extends(CacheableSubdivisionInformationRec, _super);
function CacheableSubdivisionInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRec.attributesToDeclare = function () {
return [
this.attr("Subdivision", "subdivisionAttr", "subdivision", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionExtendedRec());
}, true, Connect2_LegacySharedModel.SubdivisionExtendedRec), 
this.attr("HouseholdListResponse", "householdListResponseAttr", "HouseholdListResponse", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityHouseholdsResultItemList());
}, true, Connect2_LegacySharedModel.LocalityHouseholdsResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationRec.init();
return CacheableSubdivisionInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableSubdivisionInformationRec = CacheableSubdivisionInformationRec;

});
define("Connect2_LegacyShared.model$TextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextTextTextRecord = (function (_super) {
__extends(TextTextTextRecord, _super);
function TextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("Delimiter_Function", "delimiter_FunctionAttr", "Delimiter_Function", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Delimiter_Parameter", "delimiter_ParameterAttr", "Delimiter_Parameter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Delimiter_Placeholder", "delimiter_PlaceholderAttr", "Delimiter_Placeholder", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextRecord._isAnonymousRecord = true;
TextTextTextRecord.UniqueId = "3f0235fe-88ef-a3f3-37fc-15ad0ef057c7";
TextTextTextRecord.init();
return TextTextTextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextTextTextRecord = TextTextTextRecord;

});
define("Connect2_LegacyShared.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$SpaceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SpaceRec());
}, true, OutSystemsUI_2_23Model.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "de422bca-c75e-499b-55e3-ff48fdab55f6";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SpaceRecord = SpaceRecord;

});
define("Connect2_LegacyShared.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SpaceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = Connect2_LegacySharedModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpaceRecordList = SpaceRecordList;

});
define("Connect2_LegacyShared.model$UBT_VerticalAlignRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_VerticalAlignRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignRecord = (function (_super) {
__extends(UBT_VerticalAlignRecord, _super);
function UBT_VerticalAlignRecord(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignRecord.attributesToDeclare = function () {
return [
this.attr("UBT_VerticalAlign", "uBT_VerticalAlignAttr", "UBT_VerticalAlign", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_VerticalAlignRec());
}, true, UBTConnectLibraryModel.UBT_VerticalAlignRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_VerticalAlignRecord.fromStructure = function (str) {
return new UBT_VerticalAlignRecord(new UBT_VerticalAlignRecord.RecordClass({
uBT_VerticalAlignAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_VerticalAlignRecord._isAnonymousRecord = true;
UBT_VerticalAlignRecord.UniqueId = "3f9b0d1b-e686-7544-49eb-690b722b94ea";
UBT_VerticalAlignRecord.init();
return UBT_VerticalAlignRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_VerticalAlignRecord = UBT_VerticalAlignRecord;

});
define("Connect2_LegacyShared.model$DisplayOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$DisplayOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DisplayOptionsRecord = (function (_super) {
__extends(DisplayOptionsRecord, _super);
function DisplayOptionsRecord(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsRecord.attributesToDeclare = function () {
return [
this.attr("DisplayOptions", "displayOptionsAttr", "DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.DisplayOptionsRec());
}, true, UBTConnectLibraryModel.DisplayOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
DisplayOptionsRecord.fromStructure = function (str) {
return new DisplayOptionsRecord(new DisplayOptionsRecord.RecordClass({
displayOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DisplayOptionsRecord._isAnonymousRecord = true;
DisplayOptionsRecord.UniqueId = "de763328-7667-cb2f-9d07-694eace5c631";
DisplayOptionsRecord.init();
return DisplayOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DisplayOptionsRecord = DisplayOptionsRecord;

});
define("Connect2_LegacyShared.model$DisplayOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DisplayOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DisplayOptionsRecordList = (function (_super) {
__extends(DisplayOptionsRecordList, _super);
function DisplayOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsRecordList.itemType = Connect2_LegacySharedModel.DisplayOptionsRecord;
return DisplayOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DisplayOptionsRecordList = DisplayOptionsRecordList;

});
define("Connect2_LegacyShared.model$BookmarkItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkItemList = (function (_super) {
__extends(BookmarkItemList, _super);
function BookmarkItemList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemList.itemType = Connect2_MyBookmarks_ISModel.BookmarkItemRec;
return BookmarkItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BookmarkItemList = BookmarkItemList;

});
define("Connect2_LegacyShared.model$EventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$EventRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventRecord = (function (_super) {
__extends(EventRecord, _super);
function EventRecord(defaults) {
_super.apply(this, arguments);
}
EventRecord.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventRec());
}, true, FullCalendarReactiveModel.EventRec)
].concat(_super.attributesToDeclare.call(this));
};
EventRecord.fromStructure = function (str) {
return new EventRecord(new EventRecord.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventRecord._isAnonymousRecord = true;
EventRecord.UniqueId = "40643c74-d700-6f27-beec-e247aa9fc5fc";
EventRecord.init();
return EventRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.EventRecord = EventRecord;

});
define("Connect2_LegacyShared.model$EventDescriptionList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$EventDescriptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventDescriptionList = (function (_super) {
__extends(EventDescriptionList, _super);
function EventDescriptionList(defaults) {
_super.apply(this, arguments);
}
EventDescriptionList.itemType = FullCalendarReactiveModel.EventDescriptionRec;
return EventDescriptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EventDescriptionList = EventDescriptionList;

});
define("Connect2_LegacyShared.model$MessageInstanceList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageInstanceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageInstanceList = (function (_super) {
__extends(MessageInstanceList, _super);
function MessageInstanceList(defaults) {
_super.apply(this, arguments);
}
MessageInstanceList.itemType = Comms_CSModel.MessageInstanceRec;
return MessageInstanceList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageInstanceList = MessageInstanceList;

});
define("Connect2_LegacyShared.model$MessageContentRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageContentRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageContentRecord = (function (_super) {
__extends(MessageContentRecord, _super);
function MessageContentRecord(defaults) {
_super.apply(this, arguments);
}
MessageContentRecord.attributesToDeclare = function () {
return [
this.attr("MessageContent", "messageContentAttr", "MessageContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageContentRec());
}, true, Comms_CSModel.MessageContentRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageContentRecord.fromStructure = function (str) {
return new MessageContentRecord(new MessageContentRecord.RecordClass({
messageContentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageContentRecord._isAnonymousRecord = true;
MessageContentRecord.UniqueId = "41e088b9-55f6-a26d-5d94-b602b68b66dd";
MessageContentRecord.init();
return MessageContentRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageContentRecord = MessageContentRecord;

});
define("Connect2_LegacyShared.model$Options2Record", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "Connect2_LegacyShared.model", "InAppBrowserEvents.model$OptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents"], function (exports, OutSystems, InAppBrowserEventsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Options2Record = (function (_super) {
__extends(Options2Record, _super);
function Options2Record(defaults) {
_super.apply(this, arguments);
}
Options2Record.attributesToDeclare = function () {
return [
this.attr("Options", "optionsAttr", "Options2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.OptionsRec());
}, true, InAppBrowserEventsModel.OptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
Options2Record.fromStructure = function (str) {
return new Options2Record(new Options2Record.RecordClass({
optionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Options2Record._isAnonymousRecord = true;
Options2Record.UniqueId = "41fe306d-2451-7238-045c-960d1c743b15";
Options2Record.init();
return Options2Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Options2Record = Options2Record;

});
define("Connect2_LegacyShared.model$MessagePriorityRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessagePriorityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityRecord = (function (_super) {
__extends(MessagePriorityRecord, _super);
function MessagePriorityRecord(defaults) {
_super.apply(this, arguments);
}
MessagePriorityRecord.attributesToDeclare = function () {
return [
this.attr("MessagePriority", "messagePriorityAttr", "MessagePriority", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessagePriorityRec());
}, true, Comms_CSModel.MessagePriorityRec)
].concat(_super.attributesToDeclare.call(this));
};
MessagePriorityRecord.fromStructure = function (str) {
return new MessagePriorityRecord(new MessagePriorityRecord.RecordClass({
messagePriorityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessagePriorityRecord._isAnonymousRecord = true;
MessagePriorityRecord.UniqueId = "4251734c-56d8-f27d-d8d5-81bea2937f0e";
MessagePriorityRecord.init();
return MessagePriorityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessagePriorityRecord = MessagePriorityRecord;

});
define("Connect2_LegacyShared.model$MessageTemplateRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageTemplateRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateRecord = (function (_super) {
__extends(MessageTemplateRecord, _super);
function MessageTemplateRecord(defaults) {
_super.apply(this, arguments);
}
MessageTemplateRecord.attributesToDeclare = function () {
return [
this.attr("MessageTemplate", "messageTemplateAttr", "MessageTemplate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTemplateRec());
}, true, Comms_CSModel.MessageTemplateRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageTemplateRecord.fromStructure = function (str) {
return new MessageTemplateRecord(new MessageTemplateRecord.RecordClass({
messageTemplateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageTemplateRecord._isAnonymousRecord = true;
MessageTemplateRecord.UniqueId = "43c03da4-d49d-da67-5a29-8359a93916fa";
MessageTemplateRecord.init();
return MessageTemplateRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageTemplateRecord = MessageTemplateRecord;

});
define("Connect2_LegacyShared.model$UBT_Icons2List", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_IconsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_Icons2List = (function (_super) {
__extends(UBT_Icons2List, _super);
function UBT_Icons2List(defaults) {
_super.apply(this, arguments);
}
UBT_Icons2List.itemType = UBTConnectLibraryModel.UBT_IconsRec;
return UBT_Icons2List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_Icons2List = UBT_Icons2List;

});
define("Connect2_LegacyShared.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_LegacyShared.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecord = (function (_super) {
__extends(Mobile_OperatingSystemRecord, _super);
function Mobile_OperatingSystemRecord(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecord.attributesToDeclare = function () {
return [
this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
}, true, CommonPluginModel.Mobile_OperatingSystemRec)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRecord.fromStructure = function (str) {
return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Mobile_OperatingSystemRecord._isAnonymousRecord = true;
Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
Mobile_OperatingSystemRecord.init();
return Mobile_OperatingSystemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("Connect2_LegacyShared.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = Connect2_LegacySharedModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentList = (function (_super) {
__extends(Directory_UserCurrentList, _super);
function Directory_UserCurrentList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrentRec;
return Directory_UserCurrentList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrentList = Directory_UserCurrentList;

});
define("Connect2_LegacyShared.model$LocalityCommunityBusinessRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRecord = (function (_super) {
__extends(LocalityCommunityBusinessRecord, _super);
function LocalityCommunityBusinessRecord(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRecord.attributesToDeclare = function () {
return [
this.attr("LocalityCommunityBusiness", "localityCommunityBusinessAttr", "LocalityCommunityBusiness", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityCommunityBusinessRec());
}, true, APIDomain_Directory_ISModel.LocalityCommunityBusinessRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityCommunityBusinessRecord.fromStructure = function (str) {
return new LocalityCommunityBusinessRecord(new LocalityCommunityBusinessRecord.RecordClass({
localityCommunityBusinessAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityCommunityBusinessRecord._isAnonymousRecord = true;
LocalityCommunityBusinessRecord.UniqueId = "98cc55f1-9ff6-a6be-7673-76b0be00be87";
LocalityCommunityBusinessRecord.init();
return LocalityCommunityBusinessRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityCommunityBusinessRecord = LocalityCommunityBusinessRecord;

});
define("Connect2_LegacyShared.model$LocalityCommunityBusinessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityCommunityBusinessRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRecordList = (function (_super) {
__extends(LocalityCommunityBusinessRecordList, _super);
function LocalityCommunityBusinessRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRecordList.itemType = Connect2_LegacySharedModel.LocalityCommunityBusinessRecord;
return LocalityCommunityBusinessRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityCommunityBusinessRecordList = LocalityCommunityBusinessRecordList;

});
define("Connect2_LegacyShared.model$TimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TimezoneRecord = (function (_super) {
__extends(TimezoneRecord, _super);
function TimezoneRecord(defaults) {
_super.apply(this, arguments);
}
TimezoneRecord.attributesToDeclare = function () {
return [
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.TimezoneRec());
}, true, APIDomain_Directory_ISModel.TimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
TimezoneRecord.fromStructure = function (str) {
return new TimezoneRecord(new TimezoneRecord.RecordClass({
timezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimezoneRecord._isAnonymousRecord = true;
TimezoneRecord.UniqueId = "7c1edbba-89c5-49b8-58cc-f493f35403b0";
TimezoneRecord.init();
return TimezoneRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TimezoneRecord = TimezoneRecord;

});
define("Connect2_LegacyShared.model$TimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TimezoneRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TimezoneRecordList = (function (_super) {
__extends(TimezoneRecordList, _super);
function TimezoneRecordList(defaults) {
_super.apply(this, arguments);
}
TimezoneRecordList.itemType = Connect2_LegacySharedModel.TimezoneRecord;
return TimezoneRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TimezoneRecordList = TimezoneRecordList;

});
define("Connect2_LegacyShared.model$RadiusOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$RadiusOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RadiusOptionsRecordList = (function (_super) {
__extends(RadiusOptionsRecordList, _super);
function RadiusOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsRecordList.itemType = Connect2_LegacySharedModel.RadiusOptionsRecord;
return RadiusOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RadiusOptionsRecordList = RadiusOptionsRecordList;

});
define("Connect2_LegacyShared.model$PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoRecord = (function (_super) {
__extends(PhotoRecord, _super);
function PhotoRecord(defaults) {
_super.apply(this, arguments);
}
PhotoRecord.attributesToDeclare = function () {
return [
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoRec());
}, true, APIDomain_Directory_ISModel.PhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoRecord.fromStructure = function (str) {
return new PhotoRecord(new PhotoRecord.RecordClass({
photoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoRecord._isAnonymousRecord = true;
PhotoRecord.UniqueId = "485e1dda-923d-9b35-8659-101d2907ffd5";
PhotoRecord.init();
return PhotoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PhotoRecord = PhotoRecord;

});
define("Connect2_LegacyShared.model$HouseholdListItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HouseholdListItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdListItemList = (function (_super) {
__extends(HouseholdListItemList, _super);
function HouseholdListItemList(defaults) {
_super.apply(this, arguments);
}
HouseholdListItemList.itemType = APIDomain_Directory_ISModel.HouseholdListItemRec;
return HouseholdListItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdListItemList = HouseholdListItemList;

});
define("Connect2_LegacyShared.model$HallPhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HallPhotoRecord = (function (_super) {
__extends(HallPhotoRecord, _super);
function HallPhotoRecord(defaults) {
_super.apply(this, arguments);
}
HallPhotoRecord.attributesToDeclare = function () {
return [
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoRec());
}, true, APIDomain_Directory_ISModel.HallPhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoRecord.fromStructure = function (str) {
return new HallPhotoRecord(new HallPhotoRecord.RecordClass({
hallPhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HallPhotoRecord._isAnonymousRecord = true;
HallPhotoRecord.UniqueId = "87a95065-ca87-86bc-4360-fc71fc41409c";
HallPhotoRecord.init();
return HallPhotoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HallPhotoRecord = HallPhotoRecord;

});
define("Connect2_LegacyShared.model$HallPhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HallPhotoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HallPhotoRecordList = (function (_super) {
__extends(HallPhotoRecordList, _super);
function HallPhotoRecordList(defaults) {
_super.apply(this, arguments);
}
HallPhotoRecordList.itemType = Connect2_LegacySharedModel.HallPhotoRecord;
return HallPhotoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HallPhotoRecordList = HallPhotoRecordList;

});
define("Connect2_LegacyShared.model$ColumnOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ColumnOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ColumnOptionsRecord = (function (_super) {
__extends(ColumnOptionsRecord, _super);
function ColumnOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ColumnOptions", "columnOptionsAttr", "ColumnOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec());
}, true, UBTConnectLibraryModel.ColumnOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnOptionsRecord.fromStructure = function (str) {
return new ColumnOptionsRecord(new ColumnOptionsRecord.RecordClass({
columnOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnOptionsRecord._isAnonymousRecord = true;
ColumnOptionsRecord.UniqueId = "496d6673-ac98-746a-bcb5-762d76295284";
ColumnOptionsRecord.init();
return ColumnOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ColumnOptionsRecord = ColumnOptionsRecord;

});
define("Connect2_LegacyShared.model$DurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$DurationRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DurationRecord = (function (_super) {
__extends(DurationRecord, _super);
function DurationRecord(defaults) {
_super.apply(this, arguments);
}
DurationRecord.attributesToDeclare = function () {
return [
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationRec());
}, true, FullCalendarReactiveModel.DurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DurationRecord.fromStructure = function (str) {
return new DurationRecord(new DurationRecord.RecordClass({
durationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DurationRecord._isAnonymousRecord = true;
DurationRecord.UniqueId = "cd2a7371-8736-29ca-16d7-c7dd0cd180d7";
DurationRecord.init();
return DurationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DurationRecord = DurationRecord;

});
define("Connect2_LegacyShared.model$DurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DurationRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DurationRecordList = (function (_super) {
__extends(DurationRecordList, _super);
function DurationRecordList(defaults) {
_super.apply(this, arguments);
}
DurationRecordList.itemType = Connect2_LegacySharedModel.DurationRecord;
return DurationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DurationRecordList = DurationRecordList;

});
define("Connect2_LegacyShared.model$SubdivisionExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedList = (function (_super) {
__extends(SubdivisionExtendedList, _super);
function SubdivisionExtendedList(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedList.itemType = Connect2_LegacySharedModel.SubdivisionExtendedRec;
return SubdivisionExtendedList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionExtendedList = SubdivisionExtendedList;

});
define("Connect2_LegacyShared.model$SearchResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SearchResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SearchResultRecord = (function (_super) {
__extends(SearchResultRecord, _super);
function SearchResultRecord(defaults) {
_super.apply(this, arguments);
}
SearchResultRecord.attributesToDeclare = function () {
return [
this.attr("SearchResult", "searchResultAttr", "SearchResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SearchResultRec());
}, true, APIDomain_Directory_ISModel.SearchResultRec)
].concat(_super.attributesToDeclare.call(this));
};
SearchResultRecord.fromStructure = function (str) {
return new SearchResultRecord(new SearchResultRecord.RecordClass({
searchResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SearchResultRecord._isAnonymousRecord = true;
SearchResultRecord.UniqueId = "4b216680-645f-a870-125a-9289a4e38c87";
SearchResultRecord.init();
return SearchResultRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SearchResultRecord = SearchResultRecord;

});
define("Connect2_LegacyShared.model$MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$MemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberList = (function (_super) {
__extends(MemberList, _super);
function MemberList(defaults) {
_super.apply(this, arguments);
}
MemberList.itemType = APIDomain_Directory_ISModel.MemberRec;
return MemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemberList = MemberList;

});
define("Connect2_LegacyShared.model$RecentSearchTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$RecentSearchTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RecentSearchTypeRecord = (function (_super) {
__extends(RecentSearchTypeRecord, _super);
function RecentSearchTypeRecord(defaults) {
_super.apply(this, arguments);
}
RecentSearchTypeRecord.attributesToDeclare = function () {
return [
this.attr("RecentSearchType", "recentSearchTypeAttr", "RecentSearchType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.RecentSearchTypeRec());
}, true, Connect2_LegacySharedModel.RecentSearchTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
RecentSearchTypeRecord.fromStructure = function (str) {
return new RecentSearchTypeRecord(new RecentSearchTypeRecord.RecordClass({
recentSearchTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RecentSearchTypeRecord._isAnonymousRecord = true;
RecentSearchTypeRecord.UniqueId = "4b75a01e-9c4f-31c3-3793-ae0086c285ab";
RecentSearchTypeRecord.init();
return RecentSearchTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.RecentSearchTypeRecord = RecentSearchTypeRecord;

});
define("Connect2_LegacyShared.model$OpeningHourItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$OpeningHourItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRecord = (function (_super) {
__extends(OpeningHourItemRecord, _super);
function OpeningHourItemRecord(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRecord.attributesToDeclare = function () {
return [
this.attr("OpeningHourItem", "openingHourItemAttr", "OpeningHourItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.OpeningHourItemRec());
}, true, APIDomain_Directory_ISModel.OpeningHourItemRec)
].concat(_super.attributesToDeclare.call(this));
};
OpeningHourItemRecord.fromStructure = function (str) {
return new OpeningHourItemRecord(new OpeningHourItemRecord.RecordClass({
openingHourItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OpeningHourItemRecord._isAnonymousRecord = true;
OpeningHourItemRecord.UniqueId = "4c08221b-cd76-ea64-bfea-6bcc5dae54fa";
OpeningHourItemRecord.init();
return OpeningHourItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.OpeningHourItemRecord = OpeningHourItemRecord;

});
define("Connect2_LegacyShared.model$BookmarkNoteRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkNoteRec = (function (_super) {
__extends(BookmarkNoteRec, _super);
function BookmarkNoteRec(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteRec.attributesToDeclare = function () {
return [
this.attr("BookmarkId", "bookmarkIdAttr", "BookmarkId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkNoteRec.init();
return BookmarkNoteRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BookmarkNoteRec = BookmarkNoteRec;

});
define("Connect2_LegacyShared.model$Connect_Subscription_RegionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$Connect_Subscription_RegionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionRecord = (function (_super) {
__extends(Connect_Subscription_RegionRecord, _super);
function Connect_Subscription_RegionRecord(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Subscription_Region", "connect_Subscription_RegionAttr", "Connect_Subscription_Region", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec());
}, true, Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Subscription_RegionRecord.fromStructure = function (str) {
return new Connect_Subscription_RegionRecord(new Connect_Subscription_RegionRecord.RecordClass({
connect_Subscription_RegionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_Subscription_RegionRecord._isAnonymousRecord = true;
Connect_Subscription_RegionRecord.UniqueId = "b30e90cf-f405-3efa-584f-1492af623cf0";
Connect_Subscription_RegionRecord.init();
return Connect_Subscription_RegionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Connect_Subscription_RegionRecord = Connect_Subscription_RegionRecord;

});
define("Connect2_LegacyShared.model$Connect_Subscription_RegionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Connect_Subscription_RegionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionRecordList = (function (_super) {
__extends(Connect_Subscription_RegionRecordList, _super);
function Connect_Subscription_RegionRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionRecordList.itemType = Connect2_LegacySharedModel.Connect_Subscription_RegionRecord;
return Connect_Subscription_RegionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Connect_Subscription_RegionRecordList = Connect_Subscription_RegionRecordList;

});
define("Connect2_LegacyShared.model$CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDNRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDNRecord = (function (_super) {
__extends(CDNRecord, _super);
function CDNRecord(defaults) {
_super.apply(this, arguments);
}
CDNRecord.attributesToDeclare = function () {
return [
this.attr("CDN", "cDNAttr", "CDN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDNRec());
}, true, APIDomain_Directory_ISModel.CDNRec)
].concat(_super.attributesToDeclare.call(this));
};
CDNRecord.fromStructure = function (str) {
return new CDNRecord(new CDNRecord.RecordClass({
cDNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDNRecord._isAnonymousRecord = true;
CDNRecord.UniqueId = "4dcfb80a-1587-3f18-b937-819347fc346c";
CDNRecord.init();
return CDNRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CDNRecord = CDNRecord;

});
define("Connect2_LegacyShared.model$ShareItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ShareItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareItemRecord = (function (_super) {
__extends(ShareItemRecord, _super);
function ShareItemRecord(defaults) {
_super.apply(this, arguments);
}
ShareItemRecord.attributesToDeclare = function () {
return [
this.attr("ShareItem", "shareItemAttr", "ShareItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ShareItemRec());
}, true, APIDomain_Directory_ISModel.ShareItemRec)
].concat(_super.attributesToDeclare.call(this));
};
ShareItemRecord.fromStructure = function (str) {
return new ShareItemRecord(new ShareItemRecord.RecordClass({
shareItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShareItemRecord._isAnonymousRecord = true;
ShareItemRecord.UniqueId = "4df73679-e767-4d84-99d0-fcef78058154";
ShareItemRecord.init();
return ShareItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ShareItemRecord = ShareItemRecord;

});
define("Connect2_LegacyShared.model$AuditLog_ShareEventInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AuditLog_ShareEventInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AuditLog_ShareEventInfoRecord = (function (_super) {
__extends(AuditLog_ShareEventInfoRecord, _super);
function AuditLog_ShareEventInfoRecord(defaults) {
_super.apply(this, arguments);
}
AuditLog_ShareEventInfoRecord.attributesToDeclare = function () {
return [
this.attr("AuditLog_ShareEventInfo", "auditLog_ShareEventInfoAttr", "AuditLog_ShareEventInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec());
}, true, Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
AuditLog_ShareEventInfoRecord.fromStructure = function (str) {
return new AuditLog_ShareEventInfoRecord(new AuditLog_ShareEventInfoRecord.RecordClass({
auditLog_ShareEventInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AuditLog_ShareEventInfoRecord._isAnonymousRecord = true;
AuditLog_ShareEventInfoRecord.UniqueId = "4e97a241-a835-048d-5e25-ddfa97533aa4";
AuditLog_ShareEventInfoRecord.init();
return AuditLog_ShareEventInfoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AuditLog_ShareEventInfoRecord = AuditLog_ShareEventInfoRecord;

});
define("Connect2_LegacyShared.model$SpacingOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$SpacingOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpacingOptionsList = (function (_super) {
__extends(SpacingOptionsList, _super);
function SpacingOptionsList(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsList.itemType = UBTConnectLibraryModel.SpacingOptionsRec;
return SpacingOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpacingOptionsList = SpacingOptionsList;

});
define("Connect2_LegacyShared.model$UI_ShareableObject_GenericRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericRecord = (function (_super) {
__extends(UI_ShareableObject_GenericRecord, _super);
function UI_ShareableObject_GenericRecord(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericRecord.attributesToDeclare = function () {
return [
this.attr("UI_ShareableObject_Generic", "uI_ShareableObject_GenericAttr", "UI_ShareableObject_Generic", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec());
}, true, Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_ShareableObject_GenericRecord.fromStructure = function (str) {
return new UI_ShareableObject_GenericRecord(new UI_ShareableObject_GenericRecord.RecordClass({
uI_ShareableObject_GenericAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_ShareableObject_GenericRecord._isAnonymousRecord = true;
UI_ShareableObject_GenericRecord.UniqueId = "7e260f1d-2814-5f62-7edf-596a63247ddd";
UI_ShareableObject_GenericRecord.init();
return UI_ShareableObject_GenericRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_ShareableObject_GenericRecord = UI_ShareableObject_GenericRecord;

});
define("Connect2_LegacyShared.model$UI_ShareableObject_GenericRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_ShareableObject_GenericRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericRecordList = (function (_super) {
__extends(UI_ShareableObject_GenericRecordList, _super);
function UI_ShareableObject_GenericRecordList(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericRecordList.itemType = Connect2_LegacySharedModel.UI_ShareableObject_GenericRecord;
return UI_ShareableObject_GenericRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_ShareableObject_GenericRecordList = UI_ShareableObject_GenericRecordList;

});
define("Connect2_LegacyShared.model$UI_DisplayOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_DisplayOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_DisplayOptionsRecord = (function (_super) {
__extends(UI_DisplayOptionsRecord, _super);
function UI_DisplayOptionsRecord(defaults) {
_super.apply(this, arguments);
}
UI_DisplayOptionsRecord.attributesToDeclare = function () {
return [
this.attr("UI_DisplayOptions", "uI_DisplayOptionsAttr", "UI_DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_DisplayOptionsRec());
}, true, Connect_Household_CSModel.UI_DisplayOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_DisplayOptionsRecord.fromStructure = function (str) {
return new UI_DisplayOptionsRecord(new UI_DisplayOptionsRecord.RecordClass({
uI_DisplayOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_DisplayOptionsRecord._isAnonymousRecord = true;
UI_DisplayOptionsRecord.UniqueId = "50c81851-fe50-2bec-fca0-46d836b212a1";
UI_DisplayOptionsRecord.init();
return UI_DisplayOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_DisplayOptionsRecord = UI_DisplayOptionsRecord;

});
define("Connect2_LegacyShared.model$TagList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TagRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TagList = (function (_super) {
__extends(TagList, _super);
function TagList(defaults) {
_super.apply(this, arguments);
}
TagList.itemType = Connect2_LegacySharedModel.TagRec;
return TagList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TagList = TagList;

});
define("Connect2_LegacyShared.model$MapNavigationRedirectRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MapNavigationRedirectRec = (function (_super) {
__extends(MapNavigationRedirectRec, _super);
function MapNavigationRedirectRec(defaults) {
_super.apply(this, arguments);
}
MapNavigationRedirectRec.attributesToDeclare = function () {
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
MapNavigationRedirectRec.init();
return MapNavigationRedirectRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MapNavigationRedirectRec = MapNavigationRedirectRec;

});
define("Connect2_LegacyShared.model$MapNavigationRedirectList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MapNavigationRedirectRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MapNavigationRedirectList = (function (_super) {
__extends(MapNavigationRedirectList, _super);
function MapNavigationRedirectList(defaults) {
_super.apply(this, arguments);
}
MapNavigationRedirectList.itemType = Connect2_LegacySharedModel.MapNavigationRedirectRec;
return MapNavigationRedirectList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MapNavigationRedirectList = MapNavigationRedirectList;

});
define("Connect2_LegacyShared.model$AuditLog_ShareEventInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AuditLog_ShareEventInfoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AuditLog_ShareEventInfoRecordList = (function (_super) {
__extends(AuditLog_ShareEventInfoRecordList, _super);
function AuditLog_ShareEventInfoRecordList(defaults) {
_super.apply(this, arguments);
}
AuditLog_ShareEventInfoRecordList.itemType = Connect2_LegacySharedModel.AuditLog_ShareEventInfoRecord;
return AuditLog_ShareEventInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AuditLog_ShareEventInfoRecordList = AuditLog_ShareEventInfoRecordList;

});
define("Connect2_LegacyShared.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextTextTextRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord = (function (_super) {
__extends(Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord, _super);
function Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord(defaults) {
_super.apply(this, arguments);
}
Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord.attributesToDeclare = function () {
return [
this.attr("Delimiters", "delimitersAttr", "Delimiters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TextTextTextRecord());
}, true, Connect2_LegacySharedModel.TextTextTextRecord)
].concat(_super.attributesToDeclare.call(this));
};
Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord.fromStructure = function (str) {
return new Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord(new Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord.RecordClass({
delimitersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord._isAnonymousRecord = true;
Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord.UniqueId = "5334fb8f-2f05-8607-3ef7-7c2a4c04a1dd";
Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord.init();
return Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord = Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemList = (function (_super) {
__extends(LocalityHouseholdsItemList, _super);
function LocalityHouseholdsItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemList.itemType = Connect2_LegacySharedModel.LocalityHouseholdsItemRec;
return LocalityHouseholdsItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityHouseholdsItemList = LocalityHouseholdsItemList;

});
define("Connect2_LegacyShared.model$SubdivisionsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionsItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemList = (function (_super) {
__extends(SubdivisionsItemList, _super);
function SubdivisionsItemList(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemList.itemType = Connect2_LegacySharedModel.SubdivisionsItemRec;
return SubdivisionsItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionsItemList = SubdivisionsItemList;

});
define("Connect2_LegacyShared.model$InterchangeItemRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InterchangeItemRec = (function (_super) {
__extends(InterchangeItemRec, _super);
function InterchangeItemRec(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRec.attributesToDeclare = function () {
return [
this.attr("LocalityID", "localityIDAttr", "LocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeDistance", "interchangeDistanceAttr", "InterchangeDistance", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocalityId", "interchangeLocalityIdAttr", "InterchangeLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InterchangeLocalityName", "interchangeLocalityNameAttr", "InterchangeLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainhallAddress", "mainhallAddressAttr", "MainhallAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoExtensiveRec());
}, true, APIDomain_Directory_ISModel.HallPhotoExtensiveRec), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallLatitude", "mainHallLatitudeAttr", "MainHallLatitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MainHallLongitude", "mainHallLongitudeAttr", "MainHallLongitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InterchangeItemRec.init();
return InterchangeItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.InterchangeItemRec = InterchangeItemRec;

});
define("Connect2_LegacyShared.model$InterchangeItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$InterchangeItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InterchangeItemList = (function (_super) {
__extends(InterchangeItemList, _super);
function InterchangeItemList(defaults) {
_super.apply(this, arguments);
}
InterchangeItemList.itemType = Connect2_LegacySharedModel.InterchangeItemRec;
return InterchangeItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.InterchangeItemList = InterchangeItemList;

});
define("Connect2_LegacyShared.model$LocalityCommunityBusinessList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessList = (function (_super) {
__extends(LocalityCommunityBusinessList, _super);
function LocalityCommunityBusinessList(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessList.itemType = APIDomain_Directory_ISModel.LocalityCommunityBusinessRec;
return LocalityCommunityBusinessList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityCommunityBusinessList = LocalityCommunityBusinessList;

});
define("Connect2_LegacyShared.model$CacheableGeocodeInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRec = (function (_super) {
__extends(CacheableGeocodeInformationRec, _super);
function CacheableGeocodeInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRec.attributesToDeclare = function () {
return [
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("DaylightSavingTimeOffset", "daylightSavingTimeOffsetAttr", "DaylightSavingTimeOffset", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RawOffset", "rawOffsetAttr", "RawOffset", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TimezoneDisplayName", "timezoneDisplayNameAttr", "TimezoneDisplayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneAbbreviation", "timezoneAbbreviationAttr", "TimezoneAbbreviation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneLocation", "timezoneLocationAttr", "TimezoneLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CacheableGeocodeInformationRec.init();
return CacheableGeocodeInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableGeocodeInformationRec = CacheableGeocodeInformationRec;

});
define("Connect2_LegacyShared.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord._isAnonymousRecord = true;
TextRecord.UniqueId = "b8a6ca99-92f4-9590-1043-ce69fd76d10e";
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextRecord = TextRecord;

});
define("Connect2_LegacyShared.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.itemType = Connect2_LegacySharedModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextRecordList = TextRecordList;

});
define("Connect2_LegacyShared.model$CacheableLocalityInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.model$LocalityHouseholdsItemList", "Connect2_LegacyShared.model$SubdivisionsItemList", "Connect2_LegacyShared.model$InterchangeItemList", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_LegacyShared.model$LocalityCommunityBusinessList", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_LegacyShared.model$TextRecordList"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRec = (function (_super) {
__extends(CacheableLocalityInformationRec, _super);
function CacheableLocalityInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCount", "countryCountAttr", "CountryCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalityStats", "localityStatsAttr", "LocalityStats", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec());
}, true, APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec), 
this.attr("LocalityHouseholdsList", "localityHouseholdsListAttr", "LocalityHouseholdsList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityHouseholdsItemList());
}, true, Connect2_LegacySharedModel.LocalityHouseholdsItemList), 
this.attr("LocalitySubdivisionsList", "localitySubdivisionsListAttr", "LocalitySubdivisionsList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionsItemList());
}, true, Connect2_LegacySharedModel.SubdivisionsItemList), 
this.attr("LocalityInterchanges", "localityInterchangesAttr", "LocalityInterchanges", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.InterchangeItemList());
}, true, Connect2_LegacySharedModel.InterchangeItemList), 
this.attr("LocalitySchools", "localitySchoolsAttr", "LocalitySchools", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityCommunityBusinessList());
}, true, Connect2_LegacySharedModel.LocalityCommunityBusinessList), 
this.attr("LocalityStores", "localityStoresAttr", "LocalityStores", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityCommunityBusinessList());
}, true, Connect2_LegacySharedModel.LocalityCommunityBusinessList), 
this.attr("LocalityGeocodeInformation", "localityGeocodeInformationAttr", "LocalityGeocodeInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableGeocodeInformationRec());
}, true, Connect2_LegacySharedModel.CacheableGeocodeInformationRec), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.TimezoneRec());
}, true, APIDomain_Directory_ISModel.TimezoneRec), 
this.attr("AssembleMeetingTypes", "assembleMeetingTypesAttr", "AssembleMeetingTypes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TextRecordList());
}, true, Connect2_LegacySharedModel.TextRecordList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableLocalityInformationRec.init();
return CacheableLocalityInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableLocalityInformationRec = CacheableLocalityInformationRec;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedPhotoResultRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultRecord = (function (_super) {
__extends(BulkSignedPhotoResultRecord, _super);
function BulkSignedPhotoResultRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedPhotoResult", "bulkSignedPhotoResultAttr", "BulkSignedPhotoResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BulkSignedPhotoResultRec());
}, true, Connect2_LegacySharedModel.BulkSignedPhotoResultRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedPhotoResultRecord.fromStructure = function (str) {
return new BulkSignedPhotoResultRecord(new BulkSignedPhotoResultRecord.RecordClass({
bulkSignedPhotoResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedPhotoResultRecord._isAnonymousRecord = true;
BulkSignedPhotoResultRecord.UniqueId = "5379ecfa-18ea-15f6-9ebb-72c330e5a767";
BulkSignedPhotoResultRecord.init();
return BulkSignedPhotoResultRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedPhotoResultRecord = BulkSignedPhotoResultRecord;

});
define("Connect2_LegacyShared.model$SubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionRecordList = (function (_super) {
__extends(SubdivisionRecordList, _super);
function SubdivisionRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionRecordList.itemType = Connect2_LegacySharedModel.SubdivisionRecord;
return SubdivisionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionRecordList = SubdivisionRecordList;

});
define("Connect2_LegacyShared.model$UI_UpdateItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model", "Connect2_LegacyShared.model", "Connect_Updates_CS.model$UI_UpdateItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Updates_CS"], function (exports, OutSystems, Connect_Updates_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_UpdateItemRecord = (function (_super) {
__extends(UI_UpdateItemRecord, _super);
function UI_UpdateItemRecord(defaults) {
_super.apply(this, arguments);
}
UI_UpdateItemRecord.attributesToDeclare = function () {
return [
this.attr("UI_UpdateItem", "uI_UpdateItemAttr", "UI_UpdateItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.UI_UpdateItemRec());
}, true, Connect_Updates_CSModel.UI_UpdateItemRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_UpdateItemRecord.fromStructure = function (str) {
return new UI_UpdateItemRecord(new UI_UpdateItemRecord.RecordClass({
uI_UpdateItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_UpdateItemRecord._isAnonymousRecord = true;
UI_UpdateItemRecord.UniqueId = "548e7524-b540-9db7-cd97-09e4ea6f721d";
UI_UpdateItemRecord.init();
return UI_UpdateItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_UpdateItemRecord = UI_UpdateItemRecord;

});
define("Connect2_LegacyShared.model$EmailHouseholdEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$EmailHouseholdEventRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EmailHouseholdEventRecord = (function (_super) {
__extends(EmailHouseholdEventRecord, _super);
function EmailHouseholdEventRecord(defaults) {
_super.apply(this, arguments);
}
EmailHouseholdEventRecord.attributesToDeclare = function () {
return [
this.attr("EmailHouseholdEvent", "emailHouseholdEventAttr", "EmailHouseholdEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.EmailHouseholdEventRec());
}, true, Connect2_LegacySharedModel.EmailHouseholdEventRec)
].concat(_super.attributesToDeclare.call(this));
};
EmailHouseholdEventRecord.fromStructure = function (str) {
return new EmailHouseholdEventRecord(new EmailHouseholdEventRecord.RecordClass({
emailHouseholdEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EmailHouseholdEventRecord._isAnonymousRecord = true;
EmailHouseholdEventRecord.UniqueId = "b354b387-626c-96d0-3fbd-d04f420bbd39";
EmailHouseholdEventRecord.init();
return EmailHouseholdEventRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.EmailHouseholdEventRecord = EmailHouseholdEventRecord;

});
define("Connect2_LegacyShared.model$EmailHouseholdEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$EmailHouseholdEventRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EmailHouseholdEventRecordList = (function (_super) {
__extends(EmailHouseholdEventRecordList, _super);
function EmailHouseholdEventRecordList(defaults) {
_super.apply(this, arguments);
}
EmailHouseholdEventRecordList.itemType = Connect2_LegacySharedModel.EmailHouseholdEventRecord;
return EmailHouseholdEventRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EmailHouseholdEventRecordList = EmailHouseholdEventRecordList;

});
define("Connect2_LegacyShared.model$CacheableSubdivisionInformationTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationTextTextRecord = (function (_super) {
__extends(CacheableSubdivisionInformationTextTextRecord, _super);
function CacheableSubdivisionInformationTextTextRecord(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationTextTextRecord.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableSubdivisionInformationRec());
}, true, Connect2_LegacySharedModel.CacheableSubdivisionInformationRec), 
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationTextTextRecord._isAnonymousRecord = true;
CacheableSubdivisionInformationTextTextRecord.UniqueId = "9b561c39-1352-ba4d-d44d-5f4c028dca4a";
CacheableSubdivisionInformationTextTextRecord.init();
return CacheableSubdivisionInformationTextTextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecord = CacheableSubdivisionInformationTextTextRecord;

});
define("Connect2_LegacyShared.model$CacheableSubdivisionInformationTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationTextTextRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationTextTextRecordList = (function (_super) {
__extends(CacheableSubdivisionInformationTextTextRecordList, _super);
function CacheableSubdivisionInformationTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationTextTextRecordList.itemType = Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecord;
return CacheableSubdivisionInformationTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecordList = CacheableSubdivisionInformationTextTextRecordList;

});
define("Connect2_LegacyShared.model$DetailsJsonList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailsJsonList = (function (_super) {
__extends(DetailsJsonList, _super);
function DetailsJsonList(defaults) {
_super.apply(this, arguments);
}
DetailsJsonList.itemType = Connect2_MyBookmarks_ISModel.DetailsJsonRec;
return DetailsJsonList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DetailsJsonList = DetailsJsonList;

});
define("Connect2_LegacyShared.model$Directory_ImageCaptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_ImageCaptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_ImageCaptionList = (function (_super) {
__extends(Directory_ImageCaptionList, _super);
function Directory_ImageCaptionList(defaults) {
_super.apply(this, arguments);
}
Directory_ImageCaptionList.itemType = APIDomain_Directory_ISModel.Directory_ImageCaptionRec;
return Directory_ImageCaptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_ImageCaptionList = Directory_ImageCaptionList;

});
define("Connect2_LegacyShared.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$PositionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUI_2_23Model.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PositionList = PositionList;

});
define("Connect2_LegacyShared.model$SubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubdivisionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionList = (function (_super) {
__extends(SubdivisionList, _super);
function SubdivisionList(defaults) {
_super.apply(this, arguments);
}
SubdivisionList.itemType = APIDomain_Directory_ISModel.SubdivisionRec;
return SubdivisionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionList = SubdivisionList;

});
define("Connect2_LegacyShared.model$Directory_LocalityStatisticsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_LocalityStatisticsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityStatisticsRecordList = (function (_super) {
__extends(Directory_LocalityStatisticsRecordList, _super);
function Directory_LocalityStatisticsRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityStatisticsRecordList.itemType = Connect2_LegacySharedModel.Directory_LocalityStatisticsRecord;
return Directory_LocalityStatisticsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityStatisticsRecordList = Directory_LocalityStatisticsRecordList;

});
define("Connect2_LegacyShared.model$Directory_HouseholdListItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_HouseholdListItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_HouseholdListItemList = (function (_super) {
__extends(Directory_HouseholdListItemList, _super);
function Directory_HouseholdListItemList(defaults) {
_super.apply(this, arguments);
}
Directory_HouseholdListItemList.itemType = APIDomain_Directory_ISModel.Directory_HouseholdListItemRec;
return Directory_HouseholdListItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_HouseholdListItemList = Directory_HouseholdListItemList;

});
define("Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "UBT_AppManager_DB.model", "ServiceCenter.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessagePriorityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Comms_CS.model$MessageContentRec", "Comms_CS.model$MessageTemplateRec", "Comms_CS.model$MessageSenderTargetRec", "Comms_CS.model$MessageInstanceRec", "Comms_CS.model$AdaptiveCardJSONRec", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_DB", "ServiceCenter.model$UserRec", "Connect2_LegacyShared.referencesHealth$ServiceCenter"], function (exports, OutSystems, Comms_CSModel, UBT_AppManager_DBModel, ServiceCenterModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord = (function (_super) {
__extends(MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord, _super);
function MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord(defaults) {
_super.apply(this, arguments);
}
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord.attributesToDeclare = function () {
return [
this.attr("MessagePriority", "messagePriorityAttr", "MessagePriority", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessagePriorityRec());
}, true, Comms_CSModel.MessagePriorityRec), 
this.attr("MessageContent", "messageContentAttr", "MessageContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageContentRec());
}, true, Comms_CSModel.MessageContentRec), 
this.attr("MessageTemplate", "messageTemplateAttr", "MessageTemplate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTemplateRec());
}, true, Comms_CSModel.MessageTemplateRec), 
this.attr("MessageSenderTarget", "messageSenderTargetAttr", "MessageSenderTarget", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageSenderTargetRec());
}, true, Comms_CSModel.MessageSenderTargetRec), 
this.attr("MessageInstance", "messageInstanceAttr", "MessageInstance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInstanceRec());
}, true, Comms_CSModel.MessageInstanceRec), 
this.attr("AdaptiveCardJSON", "adaptiveCardJSONAttr", "AdaptiveCardJSON", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.AdaptiveCardJSONRec());
}, true, Comms_CSModel.AdaptiveCardJSONRec), 
this.attr("AppManager_UserExtended", "appManager_UserExtendedAttr", "AppManager_UserExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord._isAnonymousRecord = true;
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord.UniqueId = "588ab54c-f7c1-1fd2-9f27-ea28c7077d7b";
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord.init();
return MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord = MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord;

});
define("Connect2_LegacyShared.model$SearchResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SearchResultRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SearchResultRecordList = (function (_super) {
__extends(SearchResultRecordList, _super);
function SearchResultRecordList(defaults) {
_super.apply(this, arguments);
}
SearchResultRecordList.itemType = Connect2_LegacySharedModel.SearchResultRecord;
return SearchResultRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SearchResultRecordList = SearchResultRecordList;

});
define("Connect2_LegacyShared.model$SubscribedRegionItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubscribedRegionItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubscribedRegionItemRecordList = (function (_super) {
__extends(SubscribedRegionItemRecordList, _super);
function SubscribedRegionItemRecordList(defaults) {
_super.apply(this, arguments);
}
SubscribedRegionItemRecordList.itemType = Connect2_LegacySharedModel.SubscribedRegionItemRecord;
return SubscribedRegionItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubscribedRegionItemRecordList = SubscribedRegionItemRecordList;

});
define("Connect2_LegacyShared.model$Directory_SubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_SubdivisionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_SubdivisionRecord = (function (_super) {
__extends(Directory_SubdivisionRecord, _super);
function Directory_SubdivisionRecord(defaults) {
_super.apply(this, arguments);
}
Directory_SubdivisionRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Subdivision", "directory_SubdivisionAttr", "Directory_Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_SubdivisionRec());
}, true, APIDomain_Directory_ISModel.Directory_SubdivisionRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_SubdivisionRecord.fromStructure = function (str) {
return new Directory_SubdivisionRecord(new Directory_SubdivisionRecord.RecordClass({
directory_SubdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_SubdivisionRecord._isAnonymousRecord = true;
Directory_SubdivisionRecord.UniqueId = "5a3e98c5-3884-0301-f816-631dec93bccc";
Directory_SubdivisionRecord.init();
return Directory_SubdivisionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_SubdivisionRecord = Directory_SubdivisionRecord;

});
define("Connect2_LegacyShared.model$HostConfig_FontTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeList = (function (_super) {
__extends(HostConfig_FontTypeList, _super);
function HostConfig_FontTypeList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeList.itemType = Connect2_LegacySharedModel.HostConfig_FontTypeRec;
return HostConfig_FontTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontTypeList = HostConfig_FontTypeList;

});
define("Connect2_LegacyShared.model$ResourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResourceList = (function (_super) {
__extends(ResourceList, _super);
function ResourceList(defaults) {
_super.apply(this, arguments);
}
ResourceList.itemType = FullCalendarReactiveModel.ResourceRec;
return ResourceList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ResourceList = ResourceList;

});
define("Connect2_LegacyShared.model$ResourceSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$ResourceSourceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResourceSourceRecord = (function (_super) {
__extends(ResourceSourceRecord, _super);
function ResourceSourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRecord.attributesToDeclare = function () {
return [
this.attr("ResourceSource", "resourceSourceAttr", "ResourceSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceSourceRec());
}, true, FullCalendarReactiveModel.ResourceSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceSourceRecord.fromStructure = function (str) {
return new ResourceSourceRecord(new ResourceSourceRecord.RecordClass({
resourceSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceSourceRecord._isAnonymousRecord = true;
ResourceSourceRecord.UniqueId = "5bb69d1c-29b1-20b3-47ed-c0d48a5388df";
ResourceSourceRecord.init();
return ResourceSourceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ResourceSourceRecord = ResourceSourceRecord;

});
define("Connect2_LegacyShared.model$InlineIconRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$InlineIconRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InlineIconRecord = (function (_super) {
__extends(InlineIconRecord, _super);
function InlineIconRecord(defaults) {
_super.apply(this, arguments);
}
InlineIconRecord.attributesToDeclare = function () {
return [
this.attr("InlineIcon", "inlineIconAttr", "InlineIcon", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec());
}, true, UBTConnectLibraryModel.InlineIconRec)
].concat(_super.attributesToDeclare.call(this));
};
InlineIconRecord.fromStructure = function (str) {
return new InlineIconRecord(new InlineIconRecord.RecordClass({
inlineIconAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InlineIconRecord._isAnonymousRecord = true;
InlineIconRecord.UniqueId = "c18918d2-8929-aa33-c454-b4c0f0c15d1c";
InlineIconRecord.init();
return InlineIconRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.InlineIconRecord = InlineIconRecord;

});
define("Connect2_LegacyShared.model$InlineIconRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$InlineIconRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InlineIconRecordList = (function (_super) {
__extends(InlineIconRecordList, _super);
function InlineIconRecordList(defaults) {
_super.apply(this, arguments);
}
InlineIconRecordList.itemType = Connect2_LegacySharedModel.InlineIconRecord;
return InlineIconRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.InlineIconRecordList = InlineIconRecordList;

});
define("Connect2_LegacyShared.model$MessageInstanceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageInstanceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageInstanceRecord = (function (_super) {
__extends(MessageInstanceRecord, _super);
function MessageInstanceRecord(defaults) {
_super.apply(this, arguments);
}
MessageInstanceRecord.attributesToDeclare = function () {
return [
this.attr("MessageInstance", "messageInstanceAttr", "MessageInstance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInstanceRec());
}, true, Comms_CSModel.MessageInstanceRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageInstanceRecord.fromStructure = function (str) {
return new MessageInstanceRecord(new MessageInstanceRecord.RecordClass({
messageInstanceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageInstanceRecord._isAnonymousRecord = true;
MessageInstanceRecord.UniqueId = "5cb46315-6429-349d-c1e5-1d36017239e4";
MessageInstanceRecord.init();
return MessageInstanceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageInstanceRecord = MessageInstanceRecord;

});
define("Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LongIntegerBooleanMessageListItemListRecordList = (function (_super) {
__extends(LongIntegerBooleanMessageListItemListRecordList, _super);
function LongIntegerBooleanMessageListItemListRecordList(defaults) {
_super.apply(this, arguments);
}
LongIntegerBooleanMessageListItemListRecordList.itemType = Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecord;
return LongIntegerBooleanMessageListItemListRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecordList = LongIntegerBooleanMessageListItemListRecordList;

});
define("Connect2_LegacyShared.model$BookmarkNoteRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BookmarkNoteRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkNoteRecord = (function (_super) {
__extends(BookmarkNoteRecord, _super);
function BookmarkNoteRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkNote", "bookmarkNoteAttr", "BookmarkNote", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec());
}, true, Connect2_LegacySharedModel.BookmarkNoteRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkNoteRecord.fromStructure = function (str) {
return new BookmarkNoteRecord(new BookmarkNoteRecord.RecordClass({
bookmarkNoteAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkNoteRecord._isAnonymousRecord = true;
BookmarkNoteRecord.UniqueId = "5d0ccedf-5d4b-1826-c884-1c206f184db9";
BookmarkNoteRecord.init();
return BookmarkNoteRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BookmarkNoteRecord = BookmarkNoteRecord;

});
define("Connect2_LegacyShared.model$Type_ShareObjectList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectList = (function (_super) {
__extends(Type_ShareObjectList, _super);
function Type_ShareObjectList(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectList.itemType = Connect2_Sharing_CSModel.Type_ShareObjectRec;
return Type_ShareObjectList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Type_ShareObjectList = Type_ShareObjectList;

});
define("Connect2_LegacyShared.model$Extension4List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Extension3Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Extension4List = (function (_super) {
__extends(Extension4List, _super);
function Extension4List(defaults) {
_super.apply(this, arguments);
}
Extension4List.itemType = APIDomain_Directory_ISModel.Extension3Rec;
return Extension4List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Extension4List = Extension4List;

});
define("Connect2_LegacyShared.model$TextLongIntegerLongIntegerLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextLongIntegerLongIntegerLongIntegerRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextLongIntegerLongIntegerLongIntegerRecordList = (function (_super) {
__extends(TextLongIntegerLongIntegerLongIntegerRecordList, _super);
function TextLongIntegerLongIntegerLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerLongIntegerLongIntegerRecordList.itemType = Connect2_LegacySharedModel.TextLongIntegerLongIntegerLongIntegerRecord;
return TextLongIntegerLongIntegerLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextLongIntegerLongIntegerLongIntegerRecordList = TextLongIntegerLongIntegerLongIntegerRecordList;

});
define("Connect2_LegacyShared.model$AssembleAttendeeGuestRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AssembleAttendeeGuestRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeGuestRecord = (function (_super) {
__extends(AssembleAttendeeGuestRecord, _super);
function AssembleAttendeeGuestRecord(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeGuestRecord.attributesToDeclare = function () {
return [
this.attr("AssembleAttendeeGuest", "assembleAttendeeGuestAttr", "AssembleAttendeeGuest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.AssembleAttendeeGuestRec());
}, true, Connect2_LegacySharedModel.AssembleAttendeeGuestRec)
].concat(_super.attributesToDeclare.call(this));
};
AssembleAttendeeGuestRecord.fromStructure = function (str) {
return new AssembleAttendeeGuestRecord(new AssembleAttendeeGuestRecord.RecordClass({
assembleAttendeeGuestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AssembleAttendeeGuestRecord._isAnonymousRecord = true;
AssembleAttendeeGuestRecord.UniqueId = "782e2345-3d2a-5f0d-2596-8af4cf1f3c5f";
AssembleAttendeeGuestRecord.init();
return AssembleAttendeeGuestRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AssembleAttendeeGuestRecord = AssembleAttendeeGuestRecord;

});
define("Connect2_LegacyShared.model$AssembleAttendeeGuestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AssembleAttendeeGuestRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AssembleAttendeeGuestRecordList = (function (_super) {
__extends(AssembleAttendeeGuestRecordList, _super);
function AssembleAttendeeGuestRecordList(defaults) {
_super.apply(this, arguments);
}
AssembleAttendeeGuestRecordList.itemType = Connect2_LegacySharedModel.AssembleAttendeeGuestRecord;
return AssembleAttendeeGuestRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AssembleAttendeeGuestRecordList = AssembleAttendeeGuestRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeRecord = (function (_super) {
__extends(HostConfig_FontTypeRecord, _super);
function HostConfig_FontTypeRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_FontType", "hostConfig_FontTypeAttr", "HostConfig_FontType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontTypeRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontTypeRecord.fromStructure = function (str) {
return new HostConfig_FontTypeRecord(new HostConfig_FontTypeRecord.RecordClass({
hostConfig_FontTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontTypeRecord._isAnonymousRecord = true;
HostConfig_FontTypeRecord.UniqueId = "5e9b05bd-64b4-2400-083c-25f0e6bab7f6";
HostConfig_FontTypeRecord.init();
return HostConfig_FontTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontTypeRecord = HostConfig_FontTypeRecord;

});
define("Connect2_LegacyShared.model$HostConfig_FontTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeRecordList = (function (_super) {
__extends(HostConfig_FontTypeRecordList, _super);
function HostConfig_FontTypeRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeRecordList.itemType = Connect2_LegacySharedModel.HostConfig_FontTypeRecord;
return HostConfig_FontTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontTypeRecordList = HostConfig_FontTypeRecordList;

});
define("Connect2_LegacyShared.model$HaveMessageList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HaveMessageRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HaveMessageList = (function (_super) {
__extends(HaveMessageList, _super);
function HaveMessageList(defaults) {
_super.apply(this, arguments);
}
HaveMessageList.itemType = Connect2_LegacySharedModel.HaveMessageRec;
return HaveMessageList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HaveMessageList = HaveMessageList;

});
define("Connect2_LegacyShared.model$ImageDataList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ImageDataRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageDataList = (function (_super) {
__extends(ImageDataList, _super);
function ImageDataList(defaults) {
_super.apply(this, arguments);
}
ImageDataList.itemType = APIDomain_Directory_ISModel.ImageDataRec;
return ImageDataList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageDataList = ImageDataList;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedPhotoResultRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultRecordList = (function (_super) {
__extends(BulkSignedPhotoResultRecordList, _super);
function BulkSignedPhotoResultRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultRecordList.itemType = Connect2_LegacySharedModel.BulkSignedPhotoResultRecord;
return BulkSignedPhotoResultRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedPhotoResultRecordList = BulkSignedPhotoResultRecordList;

});
define("Connect2_LegacyShared.model$SearchResult2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SearchResult2Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SearchResult2List = (function (_super) {
__extends(SearchResult2List, _super);
function SearchResult2List(defaults) {
_super.apply(this, arguments);
}
SearchResult2List.itemType = APIDomain_Directory_ISModel.SearchResult2Rec;
return SearchResult2List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SearchResult2List = SearchResult2List;

});
define("Connect2_LegacyShared.model$UI_HouseholdMemberList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_HouseholdMemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberList = (function (_super) {
__extends(UI_HouseholdMemberList, _super);
function UI_HouseholdMemberList(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberList.itemType = Connect_Household_CSModel.UI_HouseholdMemberRec;
return UI_HouseholdMemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_HouseholdMemberList = UI_HouseholdMemberList;

});
define("Connect2_LegacyShared.model$UI_Household_Card_ContentList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_Household_Card_ContentRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Household_Card_ContentList = (function (_super) {
__extends(UI_Household_Card_ContentList, _super);
function UI_Household_Card_ContentList(defaults) {
_super.apply(this, arguments);
}
UI_Household_Card_ContentList.itemType = Connect_Household_CSModel.UI_Household_Card_ContentRec;
return UI_Household_Card_ContentList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_Household_Card_ContentList = UI_Household_Card_ContentList;

});
define("Connect2_LegacyShared.model$Householder_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Householder_MemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Householder_MemberList = (function (_super) {
__extends(Householder_MemberList, _super);
function Householder_MemberList(defaults) {
_super.apply(this, arguments);
}
Householder_MemberList.itemType = APIDomain_Directory_ISModel.Householder_MemberRec;
return Householder_MemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Householder_MemberList = Householder_MemberList;

});
define("Connect2_LegacyShared.model$UBT_SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_SizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_SizeRecord = (function (_super) {
__extends(UBT_SizeRecord, _super);
function UBT_SizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_SizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Size", "uBT_SizeAttr", "UBT_Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_SizeRec());
}, true, UBTConnectLibraryModel.UBT_SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_SizeRecord.fromStructure = function (str) {
return new UBT_SizeRecord(new UBT_SizeRecord.RecordClass({
uBT_SizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_SizeRecord._isAnonymousRecord = true;
UBT_SizeRecord.UniqueId = "d61a9bac-e6f1-22f3-9bd7-e1f359bbbea3";
UBT_SizeRecord.init();
return UBT_SizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_SizeRecord = UBT_SizeRecord;

});
define("Connect2_LegacyShared.model$UBT_SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_SizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_SizeRecordList = (function (_super) {
__extends(UBT_SizeRecordList, _super);
function UBT_SizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_SizeRecordList.itemType = Connect2_LegacySharedModel.UBT_SizeRecord;
return UBT_SizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_SizeRecordList = UBT_SizeRecordList;

});
define("Connect2_LegacyShared.model$RoleItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$RoleItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RoleItemList = (function (_super) {
__extends(RoleItemList, _super);
function RoleItemList(defaults) {
_super.apply(this, arguments);
}
RoleItemList.itemType = APIDomain_Directory_ISModel.RoleItemRec;
return RoleItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RoleItemList = RoleItemList;

});
define("Connect2_LegacyShared.model$ClaimItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ClaimItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ClaimItemList = (function (_super) {
__extends(ClaimItemList, _super);
function ClaimItemList(defaults) {
_super.apply(this, arguments);
}
ClaimItemList.itemType = APIDomain_Directory_ISModel.ClaimItemRec;
return ClaimItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ClaimItemList = ClaimItemList;

});
define("Connect2_LegacyShared.model$Users_Current_GETResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Users_Current_GETResponseRecord = (function (_super) {
__extends(Users_Current_GETResponseRecord, _super);
function Users_Current_GETResponseRecord(defaults) {
_super.apply(this, arguments);
}
Users_Current_GETResponseRecord.attributesToDeclare = function () {
return [
this.attr("Users_Current_GETResponse", "users_Current_GETResponseAttr", "Users_Current_GETResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Users_Current_GETResponseRec());
}, true, APIDomain_Directory_ISModel.Users_Current_GETResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Users_Current_GETResponseRecord.fromStructure = function (str) {
return new Users_Current_GETResponseRecord(new Users_Current_GETResponseRecord.RecordClass({
users_Current_GETResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Users_Current_GETResponseRecord._isAnonymousRecord = true;
Users_Current_GETResponseRecord.UniqueId = "e8058748-3b5b-98ac-9328-6803f9adbf4f";
Users_Current_GETResponseRecord.init();
return Users_Current_GETResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Users_Current_GETResponseRecord = Users_Current_GETResponseRecord;

});
define("Connect2_LegacyShared.model$Users_Current_GETResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Users_Current_GETResponseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Users_Current_GETResponseRecordList = (function (_super) {
__extends(Users_Current_GETResponseRecordList, _super);
function Users_Current_GETResponseRecordList(defaults) {
_super.apply(this, arguments);
}
Users_Current_GETResponseRecordList.itemType = Connect2_LegacySharedModel.Users_Current_GETResponseRecord;
return Users_Current_GETResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Users_Current_GETResponseRecordList = Users_Current_GETResponseRecordList;

});
define("Connect2_LegacyShared.model$HouseholdListItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HouseholdListItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdListItemRecord = (function (_super) {
__extends(HouseholdListItemRecord, _super);
function HouseholdListItemRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdListItemRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdListItem", "householdListItemAttr", "HouseholdListItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HouseholdListItemRec());
}, true, APIDomain_Directory_ISModel.HouseholdListItemRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdListItemRecord.fromStructure = function (str) {
return new HouseholdListItemRecord(new HouseholdListItemRecord.RecordClass({
householdListItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdListItemRecord._isAnonymousRecord = true;
HouseholdListItemRecord.UniqueId = "637863f9-3a0c-ce0d-a9fd-3ad0a69c36a0";
HouseholdListItemRecord.init();
return HouseholdListItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HouseholdListItemRecord = HouseholdListItemRecord;

});
define("Connect2_LegacyShared.model$BackgroundImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$BackgroundImageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BackgroundImageList = (function (_super) {
__extends(BackgroundImageList, _super);
function BackgroundImageList(defaults) {
_super.apply(this, arguments);
}
BackgroundImageList.itemType = UBTConnectLibraryModel.BackgroundImageRec;
return BackgroundImageList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BackgroundImageList = BackgroundImageList;

});
define("Connect2_LegacyShared.model$EventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$EventRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var EventRecordList = (function (_super) {
__extends(EventRecordList, _super);
function EventRecordList(defaults) {
_super.apply(this, arguments);
}
EventRecordList.itemType = Connect2_LegacySharedModel.EventRecord;
return EventRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.EventRecordList = EventRecordList;

});
define("Connect2_LegacyShared.model$CacheableGeocodeInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRecord = (function (_super) {
__extends(CacheableGeocodeInformationRecord, _super);
function CacheableGeocodeInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableGeocodeInformation", "cacheableGeocodeInformationAttr", "CacheableGeocodeInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableGeocodeInformationRec());
}, true, Connect2_LegacySharedModel.CacheableGeocodeInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableGeocodeInformationRecord.fromStructure = function (str) {
return new CacheableGeocodeInformationRecord(new CacheableGeocodeInformationRecord.RecordClass({
cacheableGeocodeInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableGeocodeInformationRecord._isAnonymousRecord = true;
CacheableGeocodeInformationRecord.UniqueId = "65ef38fa-aecf-f49a-0b38-7001769f5f61";
CacheableGeocodeInformationRecord.init();
return CacheableGeocodeInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableGeocodeInformationRecord = CacheableGeocodeInformationRecord;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_GeographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Directory_UserCurrent_GeographyRecord = Directory_UserCurrent_GeographyRecord;

});
define("Connect2_LegacyShared.model$AppManager_CachedUserInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "Connect2_LegacyShared.model", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_CachedUserInfoRecord = (function (_super) {
__extends(AppManager_CachedUserInfoRecord, _super);
function AppManager_CachedUserInfoRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_CachedUserInfoRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_CachedUserInfo", "appManager_CachedUserInfoAttr", "AppManager_CachedUserInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_CachedUserInfoRec());
}, true, UBT_AppManagerModel.AppManager_CachedUserInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_CachedUserInfoRecord.fromStructure = function (str) {
return new AppManager_CachedUserInfoRecord(new AppManager_CachedUserInfoRecord.RecordClass({
appManager_CachedUserInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_CachedUserInfoRecord._isAnonymousRecord = true;
AppManager_CachedUserInfoRecord.UniqueId = "b35ca5be-3302-f76a-374d-1f39ba4542b7";
AppManager_CachedUserInfoRecord.init();
return AppManager_CachedUserInfoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AppManager_CachedUserInfoRecord = AppManager_CachedUserInfoRecord;

});
define("Connect2_LegacyShared.model$AppManager_CachedUserInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AppManager_CachedUserInfoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_CachedUserInfoRecordList = (function (_super) {
__extends(AppManager_CachedUserInfoRecordList, _super);
function AppManager_CachedUserInfoRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_CachedUserInfoRecordList.itemType = Connect2_LegacySharedModel.AppManager_CachedUserInfoRecord;
return AppManager_CachedUserInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AppManager_CachedUserInfoRecordList = AppManager_CachedUserInfoRecordList;

});
define("Connect2_LegacyShared.model$AdaptiveCardJSONList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$AdaptiveCardJSONRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardJSONList = (function (_super) {
__extends(AdaptiveCardJSONList, _super);
function AdaptiveCardJSONList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardJSONList.itemType = Comms_CSModel.AdaptiveCardJSONRec;
return AdaptiveCardJSONList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AdaptiveCardJSONList = AdaptiveCardJSONList;

});
define("Connect2_LegacyShared.model$DefaultCountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DefaultCountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DefaultCountryList = (function (_super) {
__extends(DefaultCountryList, _super);
function DefaultCountryList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryList.itemType = APIDomain_Directory_ISModel.DefaultCountryRec;
return DefaultCountryList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DefaultCountryList = DefaultCountryList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Directory_UserCurrent_MemberRecord = Directory_UserCurrent_MemberRecord;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_UserCurrent_MemberRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecordList = (function (_super) {
__extends(Directory_UserCurrent_MemberRecordList, _super);
function Directory_UserCurrent_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecordList.itemType = Connect2_LegacySharedModel.Directory_UserCurrent_MemberRecord;
return Directory_UserCurrent_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_MemberRecordList = Directory_UserCurrent_MemberRecordList;

});
define("Connect2_LegacyShared.model$CountryWithMapPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRec = (function (_super) {
__extends(CountryWithMapPositionRec, _super);
function CountryWithMapPositionRec(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegionId", "regionIdAttr", "RegionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalitiesCount", "localitiesCountAttr", "LocalitiesCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdersCount", "householdersCountAttr", "HouseholdersCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MembersCount", "membersCountAttr", "MembersCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InitialLatitude", "initialLatitudeAttr", "InitialLatitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InitialLongitude", "initialLongitudeAttr", "InitialLongitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InitialZoom", "initialZoomAttr", "InitialZoom", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 5;
}, true), 
this.attr("WithinSubscription", "withinSubscriptionAttr", "WithinSubscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CountryWithMapPositionRec.init();
return CountryWithMapPositionRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CountryWithMapPositionRec = CountryWithMapPositionRec;

});
define("Connect2_LegacyShared.model$CountryWithMapPositionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CountryWithMapPositionRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionList = (function (_super) {
__extends(CountryWithMapPositionList, _super);
function CountryWithMapPositionList(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionList.itemType = Connect2_LegacySharedModel.CountryWithMapPositionRec;
return CountryWithMapPositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CountryWithMapPositionList = CountryWithMapPositionList;

});
define("Connect2_LegacyShared.model$Directory_PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Directory_PhotoRecord = Directory_PhotoRecord;

});
define("Connect2_LegacyShared.model$Directory_PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_PhotoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecordList = (function (_super) {
__extends(Directory_PhotoRecordList, _super);
function Directory_PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecordList.itemType = Connect2_LegacySharedModel.Directory_PhotoRecord;
return Directory_PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_PhotoRecordList = Directory_PhotoRecordList;

});
define("Connect2_LegacyShared.model$Directory_LocalityTimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityTimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityTimezoneRecord = (function (_super) {
__extends(Directory_LocalityTimezoneRecord, _super);
function Directory_LocalityTimezoneRecord(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityTimezoneRecord.attributesToDeclare = function () {
return [
this.attr("Directory_LocalityTimezone", "directory_LocalityTimezoneAttr", "Directory_LocalityTimezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocalityTimezoneRec());
}, true, APIDomain_Directory_ISModel.Directory_LocalityTimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_LocalityTimezoneRecord.fromStructure = function (str) {
return new Directory_LocalityTimezoneRecord(new Directory_LocalityTimezoneRecord.RecordClass({
directory_LocalityTimezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_LocalityTimezoneRecord._isAnonymousRecord = true;
Directory_LocalityTimezoneRecord.UniqueId = "68d6f1aa-1c2d-605e-9c99-8108e7af80a1";
Directory_LocalityTimezoneRecord.init();
return Directory_LocalityTimezoneRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_LocalityTimezoneRecord = Directory_LocalityTimezoneRecord;

});
define("Connect2_LegacyShared.model$MessageContentList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageContentRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageContentList = (function (_super) {
__extends(MessageContentList, _super);
function MessageContentList(defaults) {
_super.apply(this, arguments);
}
MessageContentList.itemType = Comms_CSModel.MessageContentRec;
return MessageContentList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageContentList = MessageContentList;

});
define("Connect2_LegacyShared.model$ContactBase_CountryList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$ContactBase_CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ContactBase_CountryList = (function (_super) {
__extends(ContactBase_CountryList, _super);
function ContactBase_CountryList(defaults) {
_super.apply(this, arguments);
}
ContactBase_CountryList.itemType = Connect_CommonEntities_DBModel.ContactBase_CountryRec;
return ContactBase_CountryList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ContactBase_CountryList = ContactBase_CountryList;

});
define("Connect2_LegacyShared.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_LegacyShared.model", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, true, CommonPluginModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "cbbd7d57-66e1-86ff-28ab-3b75adf75b93";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ErrorRecord = ErrorRecord;

});
define("Connect2_LegacyShared.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ErrorRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = Connect2_LegacySharedModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ErrorRecordList = ErrorRecordList;

});
define("Connect2_LegacyShared.model$CDN4Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDN4Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDN4Record = (function (_super) {
__extends(CDN4Record, _super);
function CDN4Record(defaults) {
_super.apply(this, arguments);
}
CDN4Record.attributesToDeclare = function () {
return [
this.attr("CDN4", "cDN4Attr", "CDN4", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDN4Rec());
}, true, APIDomain_Directory_ISModel.CDN4Rec)
].concat(_super.attributesToDeclare.call(this));
};
CDN4Record.fromStructure = function (str) {
return new CDN4Record(new CDN4Record.RecordClass({
cDN4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDN4Record._isAnonymousRecord = true;
CDN4Record.UniqueId = "6a3f81b4-84b5-b27c-348d-ae4c32d9230f";
CDN4Record.init();
return CDN4Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CDN4Record = CDN4Record;

});
define("Connect2_LegacyShared.model$CDN2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDN2Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDN2Record = (function (_super) {
__extends(CDN2Record, _super);
function CDN2Record(defaults) {
_super.apply(this, arguments);
}
CDN2Record.attributesToDeclare = function () {
return [
this.attr("CDN2", "cDN2Attr", "CDN2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDN2Rec());
}, true, APIDomain_Directory_ISModel.CDN2Rec)
].concat(_super.attributesToDeclare.call(this));
};
CDN2Record.fromStructure = function (str) {
return new CDN2Record(new CDN2Record.RecordClass({
cDN2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDN2Record._isAnonymousRecord = true;
CDN2Record.UniqueId = "ce0b6a3c-72dc-4016-1b0a-8496e5e9ce35";
CDN2Record.init();
return CDN2Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CDN2Record = CDN2Record;

});
define("Connect2_LegacyShared.model$CDN2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CDN2Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDN2RecordList = (function (_super) {
__extends(CDN2RecordList, _super);
function CDN2RecordList(defaults) {
_super.apply(this, arguments);
}
CDN2RecordList.itemType = Connect2_LegacySharedModel.CDN2Record;
return CDN2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CDN2RecordList = CDN2RecordList;

});
define("Connect2_LegacyShared.model$BookmarkNoteList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BookmarkNoteRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkNoteList = (function (_super) {
__extends(BookmarkNoteList, _super);
function BookmarkNoteList(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteList.itemType = Connect2_LegacySharedModel.BookmarkNoteRec;
return BookmarkNoteList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BookmarkNoteList = BookmarkNoteList;

});
define("Connect2_LegacyShared.model$MemberContactWithTimezoneRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextLongIntegerRecord", "Connect2_LegacyShared.model$AssembleAttendeeGuestRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberContactWithTimezoneRec = (function (_super) {
__extends(MemberContactWithTimezoneRec, _super);
function MemberContactWithTimezoneRec(defaults) {
_super.apply(this, arguments);
}
MemberContactWithTimezoneRec.attributesToDeclare = function () {
return [
this.attr("MobilePhoneNumber", "mobilePhoneNumberAttr", "MobilePhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhoneNumber", "homePhoneNumberAttr", "HomePhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhoneNumber", "workPhoneNumberAttr", "WorkPhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
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
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TextLongIntegerRecord());
}, true, Connect2_LegacySharedModel.TextLongIntegerRecord), 
this.attr("ContactDetails", "contactDetailsAttr", "ContactDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.AssembleAttendeeGuestRec());
}, true, Connect2_LegacySharedModel.AssembleAttendeeGuestRec), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberContactWithTimezoneRec.init();
return MemberContactWithTimezoneRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MemberContactWithTimezoneRec = MemberContactWithTimezoneRec;

});
define("Connect2_LegacyShared.model$MemberContactWithTimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberContactWithTimezoneRecord = (function (_super) {
__extends(MemberContactWithTimezoneRecord, _super);
function MemberContactWithTimezoneRecord(defaults) {
_super.apply(this, arguments);
}
MemberContactWithTimezoneRecord.attributesToDeclare = function () {
return [
this.attr("MemberContactWithTimezone", "memberContactWithTimezoneAttr", "MemberContactWithTimezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MemberContactWithTimezoneRec());
}, true, Connect2_LegacySharedModel.MemberContactWithTimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberContactWithTimezoneRecord.fromStructure = function (str) {
return new MemberContactWithTimezoneRecord(new MemberContactWithTimezoneRecord.RecordClass({
memberContactWithTimezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberContactWithTimezoneRecord._isAnonymousRecord = true;
MemberContactWithTimezoneRecord.UniqueId = "6c30128f-abe2-7a19-500f-2074354d48ed";
MemberContactWithTimezoneRecord.init();
return MemberContactWithTimezoneRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MemberContactWithTimezoneRecord = MemberContactWithTimezoneRecord;

});
define("Connect2_LegacyShared.model$SubdivisionLocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubdivisionLocalityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionLocalityRecord = (function (_super) {
__extends(SubdivisionLocalityRecord, _super);
function SubdivisionLocalityRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionLocalityRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionLocality", "subdivisionLocalityAttr", "SubdivisionLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubdivisionLocalityRec());
}, true, APIDomain_Directory_ISModel.SubdivisionLocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionLocalityRecord.fromStructure = function (str) {
return new SubdivisionLocalityRecord(new SubdivisionLocalityRecord.RecordClass({
subdivisionLocalityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionLocalityRecord._isAnonymousRecord = true;
SubdivisionLocalityRecord.UniqueId = "6c342559-8de7-cd37-faae-f1d49edb49d7";
SubdivisionLocalityRecord.init();
return SubdivisionLocalityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SubdivisionLocalityRecord = SubdivisionLocalityRecord;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsResultItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRecord = (function (_super) {
__extends(LocalityHouseholdsResultItemRecord, _super);
function LocalityHouseholdsResultItemRecord(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRecord.attributesToDeclare = function () {
return [
this.attr("LocalityHouseholdsResultItem", "localityHouseholdsResultItemAttr", "LocalityHouseholdsResultItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec());
}, true, APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsResultItemRecord.fromStructure = function (str) {
return new LocalityHouseholdsResultItemRecord(new LocalityHouseholdsResultItemRecord.RecordClass({
localityHouseholdsResultItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityHouseholdsResultItemRecord._isAnonymousRecord = true;
LocalityHouseholdsResultItemRecord.UniqueId = "734c73b9-3c8b-11d6-a804-6fbab9485f47";
LocalityHouseholdsResultItemRecord.init();
return LocalityHouseholdsResultItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityHouseholdsResultItemRecord = LocalityHouseholdsResultItemRecord;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsResultItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityHouseholdsResultItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRecordList = (function (_super) {
__extends(LocalityHouseholdsResultItemRecordList, _super);
function LocalityHouseholdsResultItemRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRecordList.itemType = Connect2_LegacySharedModel.LocalityHouseholdsResultItemRecord;
return LocalityHouseholdsResultItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityHouseholdsResultItemRecordList = LocalityHouseholdsResultItemRecordList;

});
define("Connect2_LegacyShared.model$ActionsMenuOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsRecord = (function (_super) {
__extends(ActionsMenuOptionsRecord, _super);
function ActionsMenuOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ActionsMenuOptions", "actionsMenuOptionsAttr", "ActionsMenuOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuOptionsRec());
}, true, UBTConnectLibraryModel.ActionsMenuOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionsMenuOptionsRecord.fromStructure = function (str) {
return new ActionsMenuOptionsRecord(new ActionsMenuOptionsRecord.RecordClass({
actionsMenuOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionsMenuOptionsRecord._isAnonymousRecord = true;
ActionsMenuOptionsRecord.UniqueId = "6e1fc01f-5ce9-a5aa-34e8-00543b0e34e2";
ActionsMenuOptionsRecord.init();
return ActionsMenuOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ActionsMenuOptionsRecord = ActionsMenuOptionsRecord;

});
define("Connect2_LegacyShared.model$Subdivision_ById_GETResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Subdivision_ById_GETResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Subdivision_ById_GETResponseList = (function (_super) {
__extends(Subdivision_ById_GETResponseList, _super);
function Subdivision_ById_GETResponseList(defaults) {
_super.apply(this, arguments);
}
Subdivision_ById_GETResponseList.itemType = APIDomain_Directory_ISModel.Subdivision_ById_GETResponseRec;
return Subdivision_ById_GETResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Subdivision_ById_GETResponseList = Subdivision_ById_GETResponseList;

});
define("Connect2_LegacyShared.model$UI_Screen_HouseholdDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Screen_HouseholdDetailsList = (function (_super) {
__extends(UI_Screen_HouseholdDetailsList, _super);
function UI_Screen_HouseholdDetailsList(defaults) {
_super.apply(this, arguments);
}
UI_Screen_HouseholdDetailsList.itemType = Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec;
return UI_Screen_HouseholdDetailsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_Screen_HouseholdDetailsList = UI_Screen_HouseholdDetailsList;

});
define("Connect2_LegacyShared.model$UI_DisplayOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_DisplayOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_DisplayOptionsList = (function (_super) {
__extends(UI_DisplayOptionsList, _super);
function UI_DisplayOptionsList(defaults) {
_super.apply(this, arguments);
}
UI_DisplayOptionsList.itemType = Connect_Household_CSModel.UI_DisplayOptionsRec;
return UI_DisplayOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_DisplayOptionsList = UI_DisplayOptionsList;

});
define("Connect2_LegacyShared.model$Type_ShareObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectRecord = (function (_super) {
__extends(Type_ShareObjectRecord, _super);
function Type_ShareObjectRecord(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectRecord.attributesToDeclare = function () {
return [
this.attr("Type_ShareObject", "type_ShareObjectAttr", "Type_ShareObject", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.Type_ShareObjectRec());
}, true, Connect2_Sharing_CSModel.Type_ShareObjectRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_ShareObjectRecord.fromStructure = function (str) {
return new Type_ShareObjectRecord(new Type_ShareObjectRecord.RecordClass({
type_ShareObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_ShareObjectRecord._isAnonymousRecord = true;
Type_ShareObjectRecord.UniqueId = "718078dc-4cf8-be0d-3e09-e6c98c787d90";
Type_ShareObjectRecord.init();
return Type_ShareObjectRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Type_ShareObjectRecord = Type_ShareObjectRecord;

});
define("Connect2_LegacyShared.model$BulkSignedImageResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImageResultRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRecordList = (function (_super) {
__extends(BulkSignedImageResultRecordList, _super);
function BulkSignedImageResultRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRecordList.itemType = Connect2_LegacySharedModel.BulkSignedImageResultRecord;
return BulkSignedImageResultRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedImageResultRecordList = BulkSignedImageResultRecordList;

});
define("Connect2_LegacyShared.model$ResultListTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ResultListTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResultListTypeRecordList = (function (_super) {
__extends(ResultListTypeRecordList, _super);
function ResultListTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ResultListTypeRecordList.itemType = Connect2_LegacySharedModel.ResultListTypeRecord;
return ResultListTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ResultListTypeRecordList = ResultListTypeRecordList;

});
define("Connect2_LegacyShared.model$ShareProfileRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDN4Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareProfileRec = (function (_super) {
__extends(ShareProfileRec, _super);
function ShareProfileRec(defaults) {
_super.apply(this, arguments);
}
ShareProfileRec.attributesToDeclare = function () {
return [
this.attr("ProfileId", "profileIdAttr", "ProfileId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CDN", "cDNAttr", "CDN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDN4Rec());
}, true, APIDomain_Directory_ISModel.CDN4Rec), 
this.attr("IsShared", "isSharedAttr", "IsShared", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ShareProfileRec.init();
return ShareProfileRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ShareProfileRec = ShareProfileRec;

});
define("Connect2_LegacyShared.model$TextTextText1Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextTextText1Record = (function (_super) {
__extends(TextTextText1Record, _super);
function TextTextText1Record(defaults) {
_super.apply(this, arguments);
}
TextTextText1Record.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextText1Record._isAnonymousRecord = true;
TextTextText1Record.UniqueId = "e5932bd1-112d-f3d0-4655-a551a317a6aa";
TextTextText1Record.init();
return TextTextText1Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextTextText1Record = TextTextText1Record;

});
define("Connect2_LegacyShared.model$TextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextTextText1Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextTextTextRecordList = (function (_super) {
__extends(TextTextTextRecordList, _super);
function TextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextRecordList.itemType = Connect2_LegacySharedModel.TextTextText1Record;
return TextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextTextTextRecordList = TextTextTextRecordList;

});
define("Connect2_LegacyShared.model$MessageInfoTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageInfoTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageInfoTypeRecord = (function (_super) {
__extends(MessageInfoTypeRecord, _super);
function MessageInfoTypeRecord(defaults) {
_super.apply(this, arguments);
}
MessageInfoTypeRecord.attributesToDeclare = function () {
return [
this.attr("MessageInfoType", "messageInfoTypeAttr", "MessageInfoType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInfoTypeRec());
}, true, Comms_CSModel.MessageInfoTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageInfoTypeRecord.fromStructure = function (str) {
return new MessageInfoTypeRecord(new MessageInfoTypeRecord.RecordClass({
messageInfoTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageInfoTypeRecord._isAnonymousRecord = true;
MessageInfoTypeRecord.UniqueId = "7393e800-adf2-27e0-f02f-e2a8b28d0691";
MessageInfoTypeRecord.init();
return MessageInfoTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageInfoTypeRecord = MessageInfoTypeRecord;

});
define("Connect2_LegacyShared.model$BackgroundOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsRecord = (function (_super) {
__extends(BackgroundOptionsRecord, _super);
function BackgroundOptionsRecord(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsRecord.attributesToDeclare = function () {
return [
this.attr("BackgroundOptions", "backgroundOptionsAttr", "BackgroundOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundOptionsRec());
}, true, UBTConnectLibraryModel.BackgroundOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BackgroundOptionsRecord.fromStructure = function (str) {
return new BackgroundOptionsRecord(new BackgroundOptionsRecord.RecordClass({
backgroundOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BackgroundOptionsRecord._isAnonymousRecord = true;
BackgroundOptionsRecord.UniqueId = "8336cc9d-cd2e-7526-b001-3e8d028c81a3";
BackgroundOptionsRecord.init();
return BackgroundOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BackgroundOptionsRecord = BackgroundOptionsRecord;

});
define("Connect2_LegacyShared.model$BackgroundOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BackgroundOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsRecordList = (function (_super) {
__extends(BackgroundOptionsRecordList, _super);
function BackgroundOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsRecordList.itemType = Connect2_LegacySharedModel.BackgroundOptionsRecord;
return BackgroundOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BackgroundOptionsRecordList = BackgroundOptionsRecordList;

});
define("Connect2_LegacyShared.model$MessagePriorityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessagePriorityRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityRecordList = (function (_super) {
__extends(MessagePriorityRecordList, _super);
function MessagePriorityRecordList(defaults) {
_super.apply(this, arguments);
}
MessagePriorityRecordList.itemType = Connect2_LegacySharedModel.MessagePriorityRecord;
return MessagePriorityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessagePriorityRecordList = MessagePriorityRecordList;

});
define("Connect2_LegacyShared.model$Directory_SubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_SubdivisionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_SubdivisionList = (function (_super) {
__extends(Directory_SubdivisionList, _super);
function Directory_SubdivisionList(defaults) {
_super.apply(this, arguments);
}
Directory_SubdivisionList.itemType = APIDomain_Directory_ISModel.Directory_SubdivisionRec;
return Directory_SubdivisionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_SubdivisionList = Directory_SubdivisionList;

});
define("Connect2_LegacyShared.model$ImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$ImageSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSizeRecord = (function (_super) {
__extends(ImageSizeRecord, _super);
function ImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
ImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("ImageSize", "imageSizeAttr", "ImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.ImageSizeRec());
}, true, Connect_CommonEntities_DBModel.ImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageSizeRecord.fromStructure = function (str) {
return new ImageSizeRecord(new ImageSizeRecord.RecordClass({
imageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageSizeRecord._isAnonymousRecord = true;
ImageSizeRecord.UniqueId = "75e61112-d52d-9f7a-c010-240bb39f50eb";
ImageSizeRecord.init();
return ImageSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageSizeRecord = ImageSizeRecord;

});
define("Connect2_LegacyShared.model$UBT_VerticalAlignRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_VerticalAlignRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignRecordList = (function (_super) {
__extends(UBT_VerticalAlignRecordList, _super);
function UBT_VerticalAlignRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignRecordList.itemType = Connect2_LegacySharedModel.UBT_VerticalAlignRecord;
return UBT_VerticalAlignRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_VerticalAlignRecordList = UBT_VerticalAlignRecordList;

});
define("Connect2_LegacyShared.model$CallbacksRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$CallbacksRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallbacksRecord = (function (_super) {
__extends(CallbacksRecord, _super);
function CallbacksRecord(defaults) {
_super.apply(this, arguments);
}
CallbacksRecord.attributesToDeclare = function () {
return [
this.attr("Callbacks", "callbacksAttr", "Callbacks", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.CallbacksRec());
}, true, FullCalendarReactiveModel.CallbacksRec)
].concat(_super.attributesToDeclare.call(this));
};
CallbacksRecord.fromStructure = function (str) {
return new CallbacksRecord(new CallbacksRecord.RecordClass({
callbacksAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CallbacksRecord._isAnonymousRecord = true;
CallbacksRecord.UniqueId = "770c33a2-9787-a079-ca18-f2c69a1986aa";
CallbacksRecord.init();
return CallbacksRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CallbacksRecord = CallbacksRecord;

});
define("Connect2_LegacyShared.model$BookmarkNoteRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BookmarkNoteRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkNoteRecordList = (function (_super) {
__extends(BookmarkNoteRecordList, _super);
function BookmarkNoteRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteRecordList.itemType = Connect2_LegacySharedModel.BookmarkNoteRecord;
return BookmarkNoteRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BookmarkNoteRecordList = BookmarkNoteRecordList;

});
define("Connect2_LegacyShared.model$CDN4RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CDN4Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDN4RecordList = (function (_super) {
__extends(CDN4RecordList, _super);
function CDN4RecordList(defaults) {
_super.apply(this, arguments);
}
CDN4RecordList.itemType = Connect2_LegacySharedModel.CDN4Record;
return CDN4RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CDN4RecordList = CDN4RecordList;

});
define("Connect2_LegacyShared.model$ResourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$ResourceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResourceRecord = (function (_super) {
__extends(ResourceRecord, _super);
function ResourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceRecord.attributesToDeclare = function () {
return [
this.attr("Resource", "resourceAttr", "Resource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceRec());
}, true, FullCalendarReactiveModel.ResourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceRecord.fromStructure = function (str) {
return new ResourceRecord(new ResourceRecord.RecordClass({
resourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceRecord._isAnonymousRecord = true;
ResourceRecord.UniqueId = "7810c21d-d757-4dc9-3bb0-9743aa9a452f";
ResourceRecord.init();
return ResourceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ResourceRecord = ResourceRecord;

});
define("Connect2_LegacyShared.model$Directory_LocalityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityList = (function (_super) {
__extends(Directory_LocalityList, _super);
function Directory_LocalityList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityList.itemType = APIDomain_Directory_ISModel.Directory_LocalityRec;
return Directory_LocalityList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityList = Directory_LocalityList;

});
define("Connect2_LegacyShared.model$AdaptiveCardsConfigList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardsConfigRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigList = (function (_super) {
__extends(AdaptiveCardsConfigList, _super);
function AdaptiveCardsConfigList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigList.itemType = Connect2_LegacySharedModel.AdaptiveCardsConfigRec;
return AdaptiveCardsConfigList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AdaptiveCardsConfigList = AdaptiveCardsConfigList;

});
define("Connect2_LegacyShared.model$ConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ConfigRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ConfigRecord = (function (_super) {
__extends(ConfigRecord, _super);
function ConfigRecord(defaults) {
_super.apply(this, arguments);
}
ConfigRecord.attributesToDeclare = function () {
return [
this.attr("Config", "configAttr", "Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ConfigRec());
}, true, APIDomain_Directory_ISModel.ConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ConfigRecord.fromStructure = function (str) {
return new ConfigRecord(new ConfigRecord.RecordClass({
configAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConfigRecord._isAnonymousRecord = true;
ConfigRecord.UniqueId = "fd3c1f4d-91bb-e25c-7c0b-799b4aee3ac3";
ConfigRecord.init();
return ConfigRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ConfigRecord = ConfigRecord;

});
define("Connect2_LegacyShared.model$ConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ConfigRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ConfigRecordList = (function (_super) {
__extends(ConfigRecordList, _super);
function ConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ConfigRecordList.itemType = Connect2_LegacySharedModel.ConfigRecord;
return ConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ConfigRecordList = ConfigRecordList;

});
define("Connect2_LegacyShared.model$TextOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$TextOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextOptionsList = (function (_super) {
__extends(TextOptionsList, _super);
function TextOptionsList(defaults) {
_super.apply(this, arguments);
}
TextOptionsList.itemType = UBTConnectLibraryModel.TextOptionsRec;
return TextOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextOptionsList = TextOptionsList;

});
define("Connect2_LegacyShared.model$SenderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SenderRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SenderRecord = (function (_super) {
__extends(SenderRecord, _super);
function SenderRecord(defaults) {
_super.apply(this, arguments);
}
SenderRecord.attributesToDeclare = function () {
return [
this.attr("Sender", "senderAttr", "Sender", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SenderRec());
}, true, APIDomain_Directory_ISModel.SenderRec)
].concat(_super.attributesToDeclare.call(this));
};
SenderRecord.fromStructure = function (str) {
return new SenderRecord(new SenderRecord.RecordClass({
senderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SenderRecord._isAnonymousRecord = true;
SenderRecord.UniqueId = "796fd20c-b813-cc5a-5da3-765d91f91a8c";
SenderRecord.init();
return SenderRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SenderRecord = SenderRecord;

});
define("Connect2_LegacyShared.model$Directory_HouseholdListItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_HouseholdListItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_HouseholdListItemRecord = (function (_super) {
__extends(Directory_HouseholdListItemRecord, _super);
function Directory_HouseholdListItemRecord(defaults) {
_super.apply(this, arguments);
}
Directory_HouseholdListItemRecord.attributesToDeclare = function () {
return [
this.attr("Directory_HouseholdListItem", "directory_HouseholdListItemAttr", "Directory_HouseholdListItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_HouseholdListItemRec());
}, true, APIDomain_Directory_ISModel.Directory_HouseholdListItemRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_HouseholdListItemRecord.fromStructure = function (str) {
return new Directory_HouseholdListItemRecord(new Directory_HouseholdListItemRecord.RecordClass({
directory_HouseholdListItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_HouseholdListItemRecord._isAnonymousRecord = true;
Directory_HouseholdListItemRecord.UniqueId = "e081be87-f35e-b7cc-14cb-f6f91582b38e";
Directory_HouseholdListItemRecord.init();
return Directory_HouseholdListItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_HouseholdListItemRecord = Directory_HouseholdListItemRecord;

});
define("Connect2_LegacyShared.model$Directory_HouseholdListItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_HouseholdListItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_HouseholdListItemRecordList = (function (_super) {
__extends(Directory_HouseholdListItemRecordList, _super);
function Directory_HouseholdListItemRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_HouseholdListItemRecordList.itemType = Connect2_LegacySharedModel.Directory_HouseholdListItemRecord;
return Directory_HouseholdListItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_HouseholdListItemRecordList = Directory_HouseholdListItemRecordList;

});
define("Connect2_LegacyShared.model$BackgroundImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$BackgroundImageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BackgroundImageRecord = (function (_super) {
__extends(BackgroundImageRecord, _super);
function BackgroundImageRecord(defaults) {
_super.apply(this, arguments);
}
BackgroundImageRecord.attributesToDeclare = function () {
return [
this.attr("BackgroundImage", "backgroundImageAttr", "BackgroundImage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundImageRec());
}, true, UBTConnectLibraryModel.BackgroundImageRec)
].concat(_super.attributesToDeclare.call(this));
};
BackgroundImageRecord.fromStructure = function (str) {
return new BackgroundImageRecord(new BackgroundImageRecord.RecordClass({
backgroundImageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BackgroundImageRecord._isAnonymousRecord = true;
BackgroundImageRecord.UniqueId = "7a12ce89-0c7a-ed80-58a6-dbda7d32eb72";
BackgroundImageRecord.init();
return BackgroundImageRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BackgroundImageRecord = BackgroundImageRecord;

});
define("Connect2_LegacyShared.model$Extension3List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Extension2Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Extension3List = (function (_super) {
__extends(Extension3List, _super);
function Extension3List(defaults) {
_super.apply(this, arguments);
}
Extension3List.itemType = APIDomain_Directory_ISModel.Extension2Rec;
return Extension3List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Extension3List = Extension3List;

});
define("Connect2_LegacyShared.model$LocalityHouseholdsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRecordList = (function (_super) {
__extends(LocalityHouseholdsItemRecordList, _super);
function LocalityHouseholdsItemRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRecordList.itemType = Connect2_LegacySharedModel.LocalityHouseholdsItemRecord;
return LocalityHouseholdsItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityHouseholdsItemRecordList = LocalityHouseholdsItemRecordList;

});
define("Connect2_LegacyShared.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList = (function (_super) {
__extends(Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList, _super);
function Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList(defaults) {
_super.apply(this, arguments);
}
Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList.itemType = Connect2_LegacySharedModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecord;
return Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList = Delimiter_FunctionDelimiter_ParameterDelimiter_PlaceholderRecordRecordList;

});
define("Connect2_LegacyShared.model$SenderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SenderRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SenderRecordList = (function (_super) {
__extends(SenderRecordList, _super);
function SenderRecordList(defaults) {
_super.apply(this, arguments);
}
SenderRecordList.itemType = Connect2_LegacySharedModel.SenderRecord;
return SenderRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SenderRecordList = SenderRecordList;

});
define("Connect2_LegacyShared.model$PhotoTagRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoTagRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoTagRecord = (function (_super) {
__extends(PhotoTagRecord, _super);
function PhotoTagRecord(defaults) {
_super.apply(this, arguments);
}
PhotoTagRecord.attributesToDeclare = function () {
return [
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoTagRec());
}, true, APIDomain_Directory_ISModel.PhotoTagRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoTagRecord.fromStructure = function (str) {
return new PhotoTagRecord(new PhotoTagRecord.RecordClass({
photoTagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoTagRecord._isAnonymousRecord = true;
PhotoTagRecord.UniqueId = "9a4052d6-eddc-b349-3edd-3b1a292fc7cc";
PhotoTagRecord.init();
return PhotoTagRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PhotoTagRecord = PhotoTagRecord;

});
define("Connect2_LegacyShared.model$PhotoTagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhotoTagRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoTagRecordList = (function (_super) {
__extends(PhotoTagRecordList, _super);
function PhotoTagRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoTagRecordList.itemType = Connect2_LegacySharedModel.PhotoTagRecord;
return PhotoTagRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoTagRecordList = PhotoTagRecordList;

});
define("Connect2_LegacyShared.model$MessageSenderTargetList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageSenderTargetRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageSenderTargetList = (function (_super) {
__extends(MessageSenderTargetList, _super);
function MessageSenderTargetList(defaults) {
_super.apply(this, arguments);
}
MessageSenderTargetList.itemType = Comms_CSModel.MessageSenderTargetRec;
return MessageSenderTargetList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageSenderTargetList = MessageSenderTargetList;

});
define("Connect2_LegacyShared.model$PhotoDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoDetailsList = (function (_super) {
__extends(PhotoDetailsList, _super);
function PhotoDetailsList(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsList.itemType = Connect2_MyBookmarks_ISModel.PhotoDetailsRec;
return PhotoDetailsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoDetailsList = PhotoDetailsList;

});
define("Connect2_LegacyShared.model$LocalityResultItemWithGPSRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRecord = (function (_super) {
__extends(LocalityResultItemWithGPSRecord, _super);
function LocalityResultItemWithGPSRecord(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRecord.attributesToDeclare = function () {
return [
this.attr("LocalityResultItemWithGPS", "localityResultItemWithGPSAttr", "LocalityResultItemWithGPS", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityResultItemWithGPSRec());
}, true, Connect2_LegacySharedModel.LocalityResultItemWithGPSRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityResultItemWithGPSRecord.fromStructure = function (str) {
return new LocalityResultItemWithGPSRecord(new LocalityResultItemWithGPSRecord.RecordClass({
localityResultItemWithGPSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityResultItemWithGPSRecord._isAnonymousRecord = true;
LocalityResultItemWithGPSRecord.UniqueId = "7f1607e2-9c98-4abd-bed7-733843c41cd8";
LocalityResultItemWithGPSRecord.init();
return LocalityResultItemWithGPSRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityResultItemWithGPSRecord = LocalityResultItemWithGPSRecord;

});
define("Connect2_LegacyShared.model$ResultListTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ResultListTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResultListTypeList = (function (_super) {
__extends(ResultListTypeList, _super);
function ResultListTypeList(defaults) {
_super.apply(this, arguments);
}
ResultListTypeList.itemType = Connect2_LegacySharedModel.ResultListTypeRec;
return ResultListTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ResultListTypeList = ResultListTypeList;

});
define("Connect2_LegacyShared.model$IntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$IntegerIntegerIntegerRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerRecordList = (function (_super) {
__extends(IntegerIntegerIntegerRecordList, _super);
function IntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerRecordList.itemType = Connect2_LegacySharedModel.IntegerIntegerIntegerRecord;
return IntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.IntegerIntegerIntegerRecordList = IntegerIntegerIntegerRecordList;

});
define("Connect2_LegacyShared.model$CallbacksList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$CallbacksRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallbacksList = (function (_super) {
__extends(CallbacksList, _super);
function CallbacksList(defaults) {
_super.apply(this, arguments);
}
CallbacksList.itemType = FullCalendarReactiveModel.CallbacksRec;
return CallbacksList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CallbacksList = CallbacksList;

});
define("Connect2_LegacyShared.model$LocalSearchHistoryList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalSearchHistoryRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalSearchHistoryList = (function (_super) {
__extends(LocalSearchHistoryList, _super);
function LocalSearchHistoryList(defaults) {
_super.apply(this, arguments);
}
LocalSearchHistoryList.itemType = Connect2_LegacySharedModel.LocalSearchHistoryRec;
return LocalSearchHistoryList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalSearchHistoryList = LocalSearchHistoryList;

});
define("Connect2_LegacyShared.model$LocalityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$LocalityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityList = (function (_super) {
__extends(LocalityList, _super);
function LocalityList(defaults) {
_super.apply(this, arguments);
}
LocalityList.itemType = APIDomain_Directory_ISModel.LocalityRec;
return LocalityList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityList = LocalityList;

});
define("Connect2_LegacyShared.model$MessageTemplateRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageTemplateRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateRecordList = (function (_super) {
__extends(MessageTemplateRecordList, _super);
function MessageTemplateRecordList(defaults) {
_super.apply(this, arguments);
}
MessageTemplateRecordList.itemType = Connect2_LegacySharedModel.MessageTemplateRecord;
return MessageTemplateRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageTemplateRecordList = MessageTemplateRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontList = (function (_super) {
__extends(HostConfig_FontList, _super);
function HostConfig_FontList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontList.itemType = Connect2_LegacySharedModel.HostConfig_FontRec;
return HostConfig_FontList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontList = HostConfig_FontList;

});
define("Connect2_LegacyShared.model$TextOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$TextOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextOptionsRecord = (function (_super) {
__extends(TextOptionsRecord, _super);
function TextOptionsRecord(defaults) {
_super.apply(this, arguments);
}
TextOptionsRecord.attributesToDeclare = function () {
return [
this.attr("TextOptions", "textOptionsAttr", "TextOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
}, true, UBTConnectLibraryModel.TextOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TextOptionsRecord.fromStructure = function (str) {
return new TextOptionsRecord(new TextOptionsRecord.RecordClass({
textOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextOptionsRecord._isAnonymousRecord = true;
TextOptionsRecord.UniqueId = "9f66f55c-798b-6cd3-7fb4-bedbd1a7c92a";
TextOptionsRecord.init();
return TextOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextOptionsRecord = TextOptionsRecord;

});
define("Connect2_LegacyShared.model$TextOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextOptionsRecordList = (function (_super) {
__extends(TextOptionsRecordList, _super);
function TextOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
TextOptionsRecordList.itemType = Connect2_LegacySharedModel.TextOptionsRecord;
return TextOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextOptionsRecordList = TextOptionsRecordList;

});
define("Connect2_LegacyShared.model$BulkSignedImagesParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImagesParametersRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersRecordList = (function (_super) {
__extends(BulkSignedImagesParametersRecordList, _super);
function BulkSignedImagesParametersRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersRecordList.itemType = Connect2_LegacySharedModel.BulkSignedImagesParametersRecord;
return BulkSignedImagesParametersRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedImagesParametersRecordList = BulkSignedImagesParametersRecordList;

});
define("Connect2_LegacyShared.model$IOSOptions2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$IOSOptions2Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var IOSOptions2RecordList = (function (_super) {
__extends(IOSOptions2RecordList, _super);
function IOSOptions2RecordList(defaults) {
_super.apply(this, arguments);
}
IOSOptions2RecordList.itemType = Connect2_LegacySharedModel.IOSOptions2Record;
return IOSOptions2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.IOSOptions2RecordList = IOSOptions2RecordList;

});
define("Connect2_LegacyShared.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Connect2_LegacyShared.model", "ServiceCenter.model$UserRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.UserRecord = UserRecord;

});
define("Connect2_LegacyShared.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UserRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = Connect2_LegacySharedModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UserRecordList = UserRecordList;

});
define("Connect2_LegacyShared.model$ActionsMenuOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsList = (function (_super) {
__extends(ActionsMenuOptionsList, _super);
function ActionsMenuOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsList.itemType = UBTConnectLibraryModel.ActionsMenuOptionsRec;
return ActionsMenuOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ActionsMenuOptionsList = ActionsMenuOptionsList;

});
define("Connect2_LegacyShared.model$LazyImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LazyImageSizeList = (function (_super) {
__extends(LazyImageSizeList, _super);
function LazyImageSizeList(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeList.itemType = UBTConnectLibraryModel.LazyImageSizeRec;
return LazyImageSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LazyImageSizeList = LazyImageSizeList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_DirectoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_DirectoryRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_DirectoryRecord = (function (_super) {
__extends(ApplicationEvents_DirectoryRecord, _super);
function ApplicationEvents_DirectoryRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_DirectoryRecord.attributesToDeclare = function () {
return [
this.attr("ApplicationEvents_Directory", "applicationEvents_DirectoryAttr", "ApplicationEvents_Directory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec());
}, true, Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationEvents_DirectoryRecord.fromStructure = function (str) {
return new ApplicationEvents_DirectoryRecord(new ApplicationEvents_DirectoryRecord.RecordClass({
applicationEvents_DirectoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationEvents_DirectoryRecord._isAnonymousRecord = true;
ApplicationEvents_DirectoryRecord.UniqueId = "e999351d-1074-2dab-5400-64c00c98c182";
ApplicationEvents_DirectoryRecord.init();
return ApplicationEvents_DirectoryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_DirectoryRecord = ApplicationEvents_DirectoryRecord;

});
define("Connect2_LegacyShared.model$ApplicationEvents_DirectoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_DirectoryRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_DirectoryRecordList = (function (_super) {
__extends(ApplicationEvents_DirectoryRecordList, _super);
function ApplicationEvents_DirectoryRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_DirectoryRecordList.itemType = Connect2_LegacySharedModel.ApplicationEvents_DirectoryRecord;
return ApplicationEvents_DirectoryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_DirectoryRecordList = ApplicationEvents_DirectoryRecordList;

});
define("Connect2_LegacyShared.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$AnimationTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUI_2_23Model.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AnimationTypeList = AnimationTypeList;

});
define("Connect2_LegacyShared.model$CacheableSubdivisionInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRecord = (function (_super) {
__extends(CacheableSubdivisionInformationRecord, _super);
function CacheableSubdivisionInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableSubdivisionInformation", "cacheableSubdivisionInformationAttr", "CacheableSubdivisionInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableSubdivisionInformationRec());
}, true, Connect2_LegacySharedModel.CacheableSubdivisionInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationRecord.fromStructure = function (str) {
return new CacheableSubdivisionInformationRecord(new CacheableSubdivisionInformationRecord.RecordClass({
cacheableSubdivisionInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableSubdivisionInformationRecord._isAnonymousRecord = true;
CacheableSubdivisionInformationRecord.UniqueId = "86b4e397-dd34-0cf3-bbb9-68d527e0da47";
CacheableSubdivisionInformationRecord.init();
return CacheableSubdivisionInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableSubdivisionInformationRecord = CacheableSubdivisionInformationRecord;

});
define("Connect2_LegacyShared.model$ApplicationEvents_AlphaList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_AlphaRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_AlphaList = (function (_super) {
__extends(ApplicationEvents_AlphaList, _super);
function ApplicationEvents_AlphaList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_AlphaList.itemType = Connect2_LegacySharedModel.ApplicationEvents_AlphaRec;
return ApplicationEvents_AlphaList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_AlphaList = ApplicationEvents_AlphaList;

});
define("Connect2_LegacyShared.model$AdaptiveCardsConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardsConfigRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigRecord = (function (_super) {
__extends(AdaptiveCardsConfigRecord, _super);
function AdaptiveCardsConfigRecord(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigRecord.attributesToDeclare = function () {
return [
this.attr("AdaptiveCardsConfig", "adaptiveCardsConfigAttr", "AdaptiveCardsConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.AdaptiveCardsConfigRec());
}, true, Connect2_LegacySharedModel.AdaptiveCardsConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardsConfigRecord.fromStructure = function (str) {
return new AdaptiveCardsConfigRecord(new AdaptiveCardsConfigRecord.RecordClass({
adaptiveCardsConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdaptiveCardsConfigRecord._isAnonymousRecord = true;
AdaptiveCardsConfigRecord.UniqueId = "87fb7a9b-bccc-174f-277f-bc096d49658f";
AdaptiveCardsConfigRecord.init();
return AdaptiveCardsConfigRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AdaptiveCardsConfigRecord = AdaptiveCardsConfigRecord;

});
define("Connect2_LegacyShared.model$InterchangeItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$InterchangeItemRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InterchangeItemRecord = (function (_super) {
__extends(InterchangeItemRecord, _super);
function InterchangeItemRecord(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRecord.attributesToDeclare = function () {
return [
this.attr("InterchangeItem", "interchangeItemAttr", "InterchangeItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.InterchangeItemRec());
}, true, Connect2_LegacySharedModel.InterchangeItemRec)
].concat(_super.attributesToDeclare.call(this));
};
InterchangeItemRecord.fromStructure = function (str) {
return new InterchangeItemRecord(new InterchangeItemRecord.RecordClass({
interchangeItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InterchangeItemRecord._isAnonymousRecord = true;
InterchangeItemRecord.UniqueId = "891e87ec-01d7-4677-e5e1-efd7f783ec6e";
InterchangeItemRecord.init();
return InterchangeItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.InterchangeItemRecord = InterchangeItemRecord;

});
define("Connect2_LegacyShared.model$CDN2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDN2Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDN2List = (function (_super) {
__extends(CDN2List, _super);
function CDN2List(defaults) {
_super.apply(this, arguments);
}
CDN2List.itemType = APIDomain_Directory_ISModel.CDN2Rec;
return CDN2List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CDN2List = CDN2List;

});
define("Connect2_LegacyShared.model$UI_HouseholdMemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_HouseholdMemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberRecord = (function (_super) {
__extends(UI_HouseholdMemberRecord, _super);
function UI_HouseholdMemberRecord(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberRecord.attributesToDeclare = function () {
return [
this.attr("UI_HouseholdMember", "uI_HouseholdMemberAttr", "UI_HouseholdMember", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMemberRec());
}, true, Connect_Household_CSModel.UI_HouseholdMemberRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdMemberRecord.fromStructure = function (str) {
return new UI_HouseholdMemberRecord(new UI_HouseholdMemberRecord.RecordClass({
uI_HouseholdMemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_HouseholdMemberRecord._isAnonymousRecord = true;
UI_HouseholdMemberRecord.UniqueId = "ae512bb4-86d5-b9f9-0e1f-5aa27193838f";
UI_HouseholdMemberRecord.init();
return UI_HouseholdMemberRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_HouseholdMemberRecord = UI_HouseholdMemberRecord;

});
define("Connect2_LegacyShared.model$UI_HouseholdMemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_HouseholdMemberRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberRecordList = (function (_super) {
__extends(UI_HouseholdMemberRecordList, _super);
function UI_HouseholdMemberRecordList(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberRecordList.itemType = Connect2_LegacySharedModel.UI_HouseholdMemberRecord;
return UI_HouseholdMemberRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_HouseholdMemberRecordList = UI_HouseholdMemberRecordList;

});
define("Connect2_LegacyShared.model$RadiusOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$RadiusOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RadiusOptionsList = (function (_super) {
__extends(RadiusOptionsList, _super);
function RadiusOptionsList(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsList.itemType = UBTConnectLibraryModel.RadiusOptionsRec;
return RadiusOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RadiusOptionsList = RadiusOptionsList;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersRec = (function (_super) {
__extends(BulkSignedPhotoParametersRec, _super);
function BulkSignedPhotoParametersRec(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersRec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedPhotoParametersRec.init();
return BulkSignedPhotoParametersRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedPhotoParametersRec = BulkSignedPhotoParametersRec;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoParametersList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedPhotoParametersRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersList = (function (_super) {
__extends(BulkSignedPhotoParametersList, _super);
function BulkSignedPhotoParametersList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersList.itemType = Connect2_LegacySharedModel.BulkSignedPhotoParametersRec;
return BulkSignedPhotoParametersList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedPhotoParametersList = BulkSignedPhotoParametersList;

});
define("Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingRecordList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingRecordList, _super);
function CommunityBusinessCarouselPreloadingRecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingRecordList.itemType = Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRecord;
return CommunityBusinessCarouselPreloadingRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRecordList = CommunityBusinessCarouselPreloadingRecordList;

});
define("Connect2_LegacyShared.model$AppManager_CachedUserInfoList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "Connect2_LegacyShared.model", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_CachedUserInfoList = (function (_super) {
__extends(AppManager_CachedUserInfoList, _super);
function AppManager_CachedUserInfoList(defaults) {
_super.apply(this, arguments);
}
AppManager_CachedUserInfoList.itemType = UBT_AppManagerModel.AppManager_CachedUserInfoRec;
return AppManager_CachedUserInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AppManager_CachedUserInfoList = AppManager_CachedUserInfoList;

});
define("Connect2_LegacyShared.model$MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTypeRecord = (function (_super) {
__extends(MessageTypeRecord, _super);
function MessageTypeRecord(defaults) {
_super.apply(this, arguments);
}
MessageTypeRecord.attributesToDeclare = function () {
return [
this.attr("MessageType", "messageTypeAttr", "MessageType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTypeRec());
}, true, Comms_CSModel.MessageTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageTypeRecord.fromStructure = function (str) {
return new MessageTypeRecord(new MessageTypeRecord.RecordClass({
messageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageTypeRecord._isAnonymousRecord = true;
MessageTypeRecord.UniqueId = "8ceb1a6c-5d47-ba97-104e-21a91d51f34f";
MessageTypeRecord.init();
return MessageTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageTypeRecord = MessageTypeRecord;

});
define("Connect2_LegacyShared.model$UI_Screen_HouseholdDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Screen_HouseholdDetailsRecord = (function (_super) {
__extends(UI_Screen_HouseholdDetailsRecord, _super);
function UI_Screen_HouseholdDetailsRecord(defaults) {
_super.apply(this, arguments);
}
UI_Screen_HouseholdDetailsRecord.attributesToDeclare = function () {
return [
this.attr("UI_Screen_HouseholdDetails", "uI_Screen_HouseholdDetailsAttr", "UI_Screen_HouseholdDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec());
}, true, Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Screen_HouseholdDetailsRecord.fromStructure = function (str) {
return new UI_Screen_HouseholdDetailsRecord(new UI_Screen_HouseholdDetailsRecord.RecordClass({
uI_Screen_HouseholdDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_Screen_HouseholdDetailsRecord._isAnonymousRecord = true;
UI_Screen_HouseholdDetailsRecord.UniqueId = "8d8aebb7-cb4c-b935-1a67-5791223fe922";
UI_Screen_HouseholdDetailsRecord.init();
return UI_Screen_HouseholdDetailsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_Screen_HouseholdDetailsRecord = UI_Screen_HouseholdDetailsRecord;

});
define("Connect2_LegacyShared.model$UI_UpdateItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model", "Connect2_LegacyShared.model", "Connect_Updates_CS.model$UI_UpdateItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Updates_CS"], function (exports, OutSystems, Connect_Updates_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_UpdateItemList = (function (_super) {
__extends(UI_UpdateItemList, _super);
function UI_UpdateItemList(defaults) {
_super.apply(this, arguments);
}
UI_UpdateItemList.itemType = Connect_Updates_CSModel.UI_UpdateItemRec;
return UI_UpdateItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_UpdateItemList = UI_UpdateItemList;

});
define("Connect2_LegacyShared.model$MapNavigationRedirectRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MapNavigationRedirectRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MapNavigationRedirectRecord = (function (_super) {
__extends(MapNavigationRedirectRecord, _super);
function MapNavigationRedirectRecord(defaults) {
_super.apply(this, arguments);
}
MapNavigationRedirectRecord.attributesToDeclare = function () {
return [
this.attr("MapNavigationRedirect", "mapNavigationRedirectAttr", "MapNavigationRedirect", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MapNavigationRedirectRec());
}, true, Connect2_LegacySharedModel.MapNavigationRedirectRec)
].concat(_super.attributesToDeclare.call(this));
};
MapNavigationRedirectRecord.fromStructure = function (str) {
return new MapNavigationRedirectRecord(new MapNavigationRedirectRecord.RecordClass({
mapNavigationRedirectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapNavigationRedirectRecord._isAnonymousRecord = true;
MapNavigationRedirectRecord.UniqueId = "99ba919c-21ff-38ae-030b-74bc7d3409d7";
MapNavigationRedirectRecord.init();
return MapNavigationRedirectRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MapNavigationRedirectRecord = MapNavigationRedirectRecord;

});
define("Connect2_LegacyShared.model$MapNavigationRedirectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MapNavigationRedirectRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MapNavigationRedirectRecordList = (function (_super) {
__extends(MapNavigationRedirectRecordList, _super);
function MapNavigationRedirectRecordList(defaults) {
_super.apply(this, arguments);
}
MapNavigationRedirectRecordList.itemType = Connect2_LegacySharedModel.MapNavigationRedirectRecord;
return MapNavigationRedirectRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MapNavigationRedirectRecordList = MapNavigationRedirectRecordList;

});
define("Connect2_LegacyShared.model$AvatarImageFallbackoptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsList = (function (_super) {
__extends(AvatarImageFallbackoptionsList, _super);
function AvatarImageFallbackoptionsList(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsList.itemType = UBTConnectLibraryModel.AvatarImageFallbackoptionsRec;
return AvatarImageFallbackoptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AvatarImageFallbackoptionsList = AvatarImageFallbackoptionsList;

});
define("Connect2_LegacyShared.model$Custom_Address_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Custom_Address_ItemRecord = Custom_Address_ItemRecord;

});
define("Connect2_LegacyShared.model$BusinessLinkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRecord = (function (_super) {
__extends(BusinessLinkItemRecord, _super);
function BusinessLinkItemRecord(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRecord.attributesToDeclare = function () {
return [
this.attr("BusinessLinkItem", "businessLinkItemAttr", "BusinessLinkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.BusinessLinkItemRec());
}, true, APIDomain_Directory_ISModel.BusinessLinkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BusinessLinkItemRecord.fromStructure = function (str) {
return new BusinessLinkItemRecord(new BusinessLinkItemRecord.RecordClass({
businessLinkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BusinessLinkItemRecord._isAnonymousRecord = true;
BusinessLinkItemRecord.UniqueId = "90f765c9-b98a-5cfb-2d9a-31039302f82b";
BusinessLinkItemRecord.init();
return BusinessLinkItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BusinessLinkItemRecord = BusinessLinkItemRecord;

});
define("Connect2_LegacyShared.model$UI_Screen_HouseholdDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_Screen_HouseholdDetailsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Screen_HouseholdDetailsRecordList = (function (_super) {
__extends(UI_Screen_HouseholdDetailsRecordList, _super);
function UI_Screen_HouseholdDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
UI_Screen_HouseholdDetailsRecordList.itemType = Connect2_LegacySharedModel.UI_Screen_HouseholdDetailsRecord;
return UI_Screen_HouseholdDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_Screen_HouseholdDetailsRecordList = UI_Screen_HouseholdDetailsRecordList;

});
define("Connect2_LegacyShared.model$SubdivisionLocalityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubdivisionLocalityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionLocalityList = (function (_super) {
__extends(SubdivisionLocalityList, _super);
function SubdivisionLocalityList(defaults) {
_super.apply(this, arguments);
}
SubdivisionLocalityList.itemType = APIDomain_Directory_ISModel.SubdivisionLocalityRec;
return SubdivisionLocalityList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionLocalityList = SubdivisionLocalityList;

});
define("Connect2_LegacyShared.model$BorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$BorderOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BorderOptionsList = (function (_super) {
__extends(BorderOptionsList, _super);
function BorderOptionsList(defaults) {
_super.apply(this, arguments);
}
BorderOptionsList.itemType = UBTConnectLibraryModel.BorderOptionsRec;
return BorderOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BorderOptionsList = BorderOptionsList;

});
define("Connect2_LegacyShared.model$ClaimItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ClaimItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ClaimItemRecord = (function (_super) {
__extends(ClaimItemRecord, _super);
function ClaimItemRecord(defaults) {
_super.apply(this, arguments);
}
ClaimItemRecord.attributesToDeclare = function () {
return [
this.attr("ClaimItem", "claimItemAttr", "ClaimItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ClaimItemRec());
}, true, APIDomain_Directory_ISModel.ClaimItemRec)
].concat(_super.attributesToDeclare.call(this));
};
ClaimItemRecord.fromStructure = function (str) {
return new ClaimItemRecord(new ClaimItemRecord.RecordClass({
claimItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ClaimItemRecord._isAnonymousRecord = true;
ClaimItemRecord.UniqueId = "9ddedd14-dd5c-9f7c-7e82-41f7477b78d4";
ClaimItemRecord.init();
return ClaimItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ClaimItemRecord = ClaimItemRecord;

});
define("Connect2_LegacyShared.model$ClaimItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ClaimItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ClaimItemRecordList = (function (_super) {
__extends(ClaimItemRecordList, _super);
function ClaimItemRecordList(defaults) {
_super.apply(this, arguments);
}
ClaimItemRecordList.itemType = Connect2_LegacySharedModel.ClaimItemRecord;
return ClaimItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ClaimItemRecordList = ClaimItemRecordList;

});
define("Connect2_LegacyShared.model$Type_ShareObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Type_ShareObjectRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectRecordList = (function (_super) {
__extends(Type_ShareObjectRecordList, _super);
function Type_ShareObjectRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectRecordList.itemType = Connect2_LegacySharedModel.Type_ShareObjectRecord;
return Type_ShareObjectRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Type_ShareObjectRecordList = Type_ShareObjectRecordList;

});
define("Connect2_LegacyShared.model$RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$RangeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RangeRecord = (function (_super) {
__extends(RangeRecord, _super);
function RangeRecord(defaults) {
_super.apply(this, arguments);
}
RangeRecord.attributesToDeclare = function () {
return [
this.attr("Range", "rangeAttr", "Range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.RangeRec());
}, true, FullCalendarReactiveModel.RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeRecord.fromStructure = function (str) {
return new RangeRecord(new RangeRecord.RecordClass({
rangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeRecord._isAnonymousRecord = true;
RangeRecord.UniqueId = "955c9088-bb27-57cb-e1ea-0efd52bf1f7b";
RangeRecord.init();
return RangeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.RangeRecord = RangeRecord;

});
define("Connect2_LegacyShared.model$RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$RangeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RangeRecordList = (function (_super) {
__extends(RangeRecordList, _super);
function RangeRecordList(defaults) {
_super.apply(this, arguments);
}
RangeRecordList.itemType = Connect2_LegacySharedModel.RangeRecord;
return RangeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RangeRecordList = RangeRecordList;

});
define("Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList = (function (_super) {
__extends(MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList, _super);
function MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList(defaults) {
_super.apply(this, arguments);
}
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList.itemType = Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendedUseRecord;
return MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList = MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONAppManager_UserExtendeRecordList;

});
define("Connect2_LegacyShared.model$Custom_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Custom_AddressList = (function (_super) {
__extends(Custom_AddressList, _super);
function Custom_AddressList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressList.itemType = APIDomain_Directory_ISModel.Custom_AddressRec;
return Custom_AddressList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Custom_AddressList = Custom_AddressList;

});
define("Connect2_LegacyShared.model$CacheableSubdivisionInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationList = (function (_super) {
__extends(CacheableSubdivisionInformationList, _super);
function CacheableSubdivisionInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationList.itemType = Connect2_LegacySharedModel.CacheableSubdivisionInformationRec;
return CacheableSubdivisionInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableSubdivisionInformationList = CacheableSubdivisionInformationList;

});
define("Connect2_LegacyShared.model$UI_UpdateItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_UpdateItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_UpdateItemRecordList = (function (_super) {
__extends(UI_UpdateItemRecordList, _super);
function UI_UpdateItemRecordList(defaults) {
_super.apply(this, arguments);
}
UI_UpdateItemRecordList.itemType = Connect2_LegacySharedModel.UI_UpdateItemRecord;
return UI_UpdateItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_UpdateItemRecordList = UI_UpdateItemRecordList;

});
define("Connect2_LegacyShared.model$DetailsJsonRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailsJsonRecord = (function (_super) {
__extends(DetailsJsonRecord, _super);
function DetailsJsonRecord(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRecord.attributesToDeclare = function () {
return [
this.attr("DetailsJson", "detailsJsonAttr", "DetailsJson", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.DetailsJsonRec());
}, true, Connect2_MyBookmarks_ISModel.DetailsJsonRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailsJsonRecord.fromStructure = function (str) {
return new DetailsJsonRecord(new DetailsJsonRecord.RecordClass({
detailsJsonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailsJsonRecord._isAnonymousRecord = true;
DetailsJsonRecord.UniqueId = "e5c679bb-91b8-85c7-2973-16a31f6d9560";
DetailsJsonRecord.init();
return DetailsJsonRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DetailsJsonRecord = DetailsJsonRecord;

});
define("Connect2_LegacyShared.model$DetailsJsonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DetailsJsonRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DetailsJsonRecordList = (function (_super) {
__extends(DetailsJsonRecordList, _super);
function DetailsJsonRecordList(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRecordList.itemType = Connect2_LegacySharedModel.DetailsJsonRecord;
return DetailsJsonRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DetailsJsonRecordList = DetailsJsonRecordList;

});
define("Connect2_LegacyShared.model$MessageTemplateMessageSenderTargetMessageInstanceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageTemplateRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Comms_CS.model$MessageSenderTargetRec", "Comms_CS.model$MessageInstanceRec"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateMessageSenderTargetMessageInstanceRecord = (function (_super) {
__extends(MessageTemplateMessageSenderTargetMessageInstanceRecord, _super);
function MessageTemplateMessageSenderTargetMessageInstanceRecord(defaults) {
_super.apply(this, arguments);
}
MessageTemplateMessageSenderTargetMessageInstanceRecord.attributesToDeclare = function () {
return [
this.attr("MessageTemplate", "messageTemplateAttr", "MessageTemplate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTemplateRec());
}, true, Comms_CSModel.MessageTemplateRec), 
this.attr("MessageSenderTarget", "messageSenderTargetAttr", "MessageSenderTarget", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageSenderTargetRec());
}, true, Comms_CSModel.MessageSenderTargetRec), 
this.attr("MessageInstance", "messageInstanceAttr", "MessageInstance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInstanceRec());
}, true, Comms_CSModel.MessageInstanceRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageTemplateMessageSenderTargetMessageInstanceRecord._isAnonymousRecord = true;
MessageTemplateMessageSenderTargetMessageInstanceRecord.UniqueId = "b758b380-19fa-effc-406f-7979c984fd3d";
MessageTemplateMessageSenderTargetMessageInstanceRecord.init();
return MessageTemplateMessageSenderTargetMessageInstanceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageTemplateMessageSenderTargetMessageInstanceRecord = MessageTemplateMessageSenderTargetMessageInstanceRecord;

});
define("Connect2_LegacyShared.model$MessageTemplateMessageSenderTargetMessageInstanceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageTemplateMessageSenderTargetMessageInstanceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateMessageSenderTargetMessageInstanceRecordList = (function (_super) {
__extends(MessageTemplateMessageSenderTargetMessageInstanceRecordList, _super);
function MessageTemplateMessageSenderTargetMessageInstanceRecordList(defaults) {
_super.apply(this, arguments);
}
MessageTemplateMessageSenderTargetMessageInstanceRecordList.itemType = Connect2_LegacySharedModel.MessageTemplateMessageSenderTargetMessageInstanceRecord;
return MessageTemplateMessageSenderTargetMessageInstanceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageTemplateMessageSenderTargetMessageInstanceRecordList = MessageTemplateMessageSenderTargetMessageInstanceRecordList;

});
define("Connect2_LegacyShared.model$ConnectConfigList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ConnectConfigRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ConnectConfigList = (function (_super) {
__extends(ConnectConfigList, _super);
function ConnectConfigList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigList.itemType = APIDomain_Directory_ISModel.ConnectConfigRec;
return ConnectConfigList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ConnectConfigList = ConnectConfigList;

});
define("Connect2_LegacyShared.model$Directory_Subdivision_SimpleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_Subdivision_SimpleRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_Subdivision_SimpleRecordList = (function (_super) {
__extends(Directory_Subdivision_SimpleRecordList, _super);
function Directory_Subdivision_SimpleRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_Subdivision_SimpleRecordList.itemType = Connect2_LegacySharedModel.Directory_Subdivision_SimpleRecord;
return Directory_Subdivision_SimpleRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_Subdivision_SimpleRecordList = Directory_Subdivision_SimpleRecordList;

});
define("Connect2_LegacyShared.model$Directory_LocalityTimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_LocalityTimezoneRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityTimezoneRecordList = (function (_super) {
__extends(Directory_LocalityTimezoneRecordList, _super);
function Directory_LocalityTimezoneRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityTimezoneRecordList.itemType = Connect2_LegacySharedModel.Directory_LocalityTimezoneRecord;
return Directory_LocalityTimezoneRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityTimezoneRecordList = Directory_LocalityTimezoneRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontRecord = (function (_super) {
__extends(HostConfig_FontRecord, _super);
function HostConfig_FontRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_Font", "hostConfig_FontAttr", "HostConfig_Font", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_FontRec());
}, true, Connect2_LegacySharedModel.HostConfig_FontRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontRecord.fromStructure = function (str) {
return new HostConfig_FontRecord(new HostConfig_FontRecord.RecordClass({
hostConfig_FontAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontRecord._isAnonymousRecord = true;
HostConfig_FontRecord.UniqueId = "999fa696-4e59-fcef-d540-59796556291c";
HostConfig_FontRecord.init();
return HostConfig_FontRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_FontRecord = HostConfig_FontRecord;

});
define("Connect2_LegacyShared.model$DisplayOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$DisplayOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DisplayOptionsList = (function (_super) {
__extends(DisplayOptionsList, _super);
function DisplayOptionsList(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsList.itemType = UBTConnectLibraryModel.DisplayOptionsRec;
return DisplayOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DisplayOptionsList = DisplayOptionsList;

});
define("Connect2_LegacyShared.model$CacheableGeocodeInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationList = (function (_super) {
__extends(CacheableGeocodeInformationList, _super);
function CacheableGeocodeInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationList.itemType = Connect2_LegacySharedModel.CacheableGeocodeInformationRec;
return CacheableGeocodeInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableGeocodeInformationList = CacheableGeocodeInformationList;

});
define("Connect2_LegacyShared.model$ResourceSourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$ResourceSourceRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResourceSourceList = (function (_super) {
__extends(ResourceSourceList, _super);
function ResourceSourceList(defaults) {
_super.apply(this, arguments);
}
ResourceSourceList.itemType = FullCalendarReactiveModel.ResourceSourceRec;
return ResourceSourceList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ResourceSourceList = ResourceSourceList;

});
define("Connect2_LegacyShared.model$GetContactDetailsAssemble_GETRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$GetContactDetailsAssemble_GETRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetContactDetailsAssemble_GETRecordList = (function (_super) {
__extends(GetContactDetailsAssemble_GETRecordList, _super);
function GetContactDetailsAssemble_GETRecordList(defaults) {
_super.apply(this, arguments);
}
GetContactDetailsAssemble_GETRecordList.itemType = Connect2_LegacySharedModel.GetContactDetailsAssemble_GETRecord;
return GetContactDetailsAssemble_GETRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetContactDetailsAssemble_GETRecordList = GetContactDetailsAssemble_GETRecordList;

});
define("Connect2_LegacyShared.model$SearchResult2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SearchResult2Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SearchResult2Record = (function (_super) {
__extends(SearchResult2Record, _super);
function SearchResult2Record(defaults) {
_super.apply(this, arguments);
}
SearchResult2Record.attributesToDeclare = function () {
return [
this.attr("SearchResult2", "searchResult2Attr", "SearchResult2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SearchResult2Rec());
}, true, APIDomain_Directory_ISModel.SearchResult2Rec)
].concat(_super.attributesToDeclare.call(this));
};
SearchResult2Record.fromStructure = function (str) {
return new SearchResult2Record(new SearchResult2Record.RecordClass({
searchResult2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SearchResult2Record._isAnonymousRecord = true;
SearchResult2Record.UniqueId = "d1cc97a2-bdce-ec2a-8b3b-002184e1fb5b";
SearchResult2Record.init();
return SearchResult2Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SearchResult2Record = SearchResult2Record;

});
define("Connect2_LegacyShared.model$SearchResult2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SearchResult2Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SearchResult2RecordList = (function (_super) {
__extends(SearchResult2RecordList, _super);
function SearchResult2RecordList(defaults) {
_super.apply(this, arguments);
}
SearchResult2RecordList.itemType = Connect2_LegacySharedModel.SearchResult2Record;
return SearchResult2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SearchResult2RecordList = SearchResult2RecordList;

});
define("Connect2_LegacyShared.model$CallInfoStructureRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallInfoStructureRec = (function (_super) {
__extends(CallInfoStructureRec, _super);
function CallInfoStructureRec(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureRec.attributesToDeclare = function () {
return [
this.attr("ShowCallPopup", "showCallPopupAttr", "ShowCallPopup", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CallPhone", "callPhoneAttr", "CallPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CallName", "callNameAttr", "CallName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ContactPerson", "contactPersonAttr", "ContactPerson", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalTimezoneLabel", "localTimezoneLabelAttr", "LocalTimezoneLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalTime", "localTimeAttr", "LocalTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ImgURL", "imgURLAttr", "ImgURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CallInfoStructureRec.init();
return CallInfoStructureRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CallInfoStructureRec = CallInfoStructureRec;

});
define("Connect2_LegacyShared.model$CallInfoStructureList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CallInfoStructureRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallInfoStructureList = (function (_super) {
__extends(CallInfoStructureList, _super);
function CallInfoStructureList(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureList.itemType = Connect2_LegacySharedModel.CallInfoStructureRec;
return CallInfoStructureList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CallInfoStructureList = CallInfoStructureList;

});
define("Connect2_LegacyShared.model$SignedPhotoCacheList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SignedPhotoCacheRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedPhotoCacheList = (function (_super) {
__extends(SignedPhotoCacheList, _super);
function SignedPhotoCacheList(defaults) {
_super.apply(this, arguments);
}
SignedPhotoCacheList.itemType = Connect2_LegacySharedModel.SignedPhotoCacheRec;
return SignedPhotoCacheList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SignedPhotoCacheList = SignedPhotoCacheList;

});
define("Connect2_LegacyShared.model$UBT_SizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_SizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_SizeList = (function (_super) {
__extends(UBT_SizeList, _super);
function UBT_SizeList(defaults) {
_super.apply(this, arguments);
}
UBT_SizeList.itemType = UBTConnectLibraryModel.UBT_SizeRec;
return UBT_SizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_SizeList = UBT_SizeList;

});
define("Connect2_LegacyShared.model$AppManager_UserExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "Connect2_LegacyShared.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedList = (function (_super) {
__extends(AppManager_UserExtendedList, _super);
function AppManager_UserExtendedList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedList.itemType = UBT_AppManager_DBModel.AppManager_UserExtendedRec;
return AppManager_UserExtendedList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AppManager_UserExtendedList = AppManager_UserExtendedList;

});
define("Connect2_LegacyShared.model$SearchResultList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SearchResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SearchResultList = (function (_super) {
__extends(SearchResultList, _super);
function SearchResultList(defaults) {
_super.apply(this, arguments);
}
SearchResultList.itemType = APIDomain_Directory_ISModel.SearchResultRec;
return SearchResultList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SearchResultList = SearchResultList;

});
define("Connect2_LegacyShared.model$ExtensionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ExtensionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ExtensionList = (function (_super) {
__extends(ExtensionList, _super);
function ExtensionList(defaults) {
_super.apply(this, arguments);
}
ExtensionList.itemType = APIDomain_Directory_ISModel.ExtensionRec;
return ExtensionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ExtensionList = ExtensionList;

});
define("Connect2_LegacyShared.model$ContainerOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ContainerOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ContainerOptionsRecord = (function (_super) {
__extends(ContainerOptionsRecord, _super);
function ContainerOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ContainerOptions", "containerOptionsAttr", "ContainerOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
}, true, UBTConnectLibraryModel.ContainerOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ContainerOptionsRecord.fromStructure = function (str) {
return new ContainerOptionsRecord(new ContainerOptionsRecord.RecordClass({
containerOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContainerOptionsRecord._isAnonymousRecord = true;
ContainerOptionsRecord.UniqueId = "ff143c1b-c1c5-0ea7-32ee-9d68318414e1";
ContainerOptionsRecord.init();
return ContainerOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ContainerOptionsRecord = ContainerOptionsRecord;

});
define("Connect2_LegacyShared.model$ContainerOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ContainerOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ContainerOptionsRecordList = (function (_super) {
__extends(ContainerOptionsRecordList, _super);
function ContainerOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsRecordList.itemType = Connect2_LegacySharedModel.ContainerOptionsRecord;
return ContainerOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ContainerOptionsRecordList = ContainerOptionsRecordList;

});
define("Connect2_LegacyShared.model$TextLongInteger1Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextLongInteger1Record = (function (_super) {
__extends(TextLongInteger1Record, _super);
function TextLongInteger1Record(defaults) {
_super.apply(this, arguments);
}
TextLongInteger1Record.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionId", "subdivisionIdAttr", "SubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextLongInteger1Record._isAnonymousRecord = true;
TextLongInteger1Record.UniqueId = "a951f456-ee98-f4bf-a55f-0f6e70c56d7e";
TextLongInteger1Record.init();
return TextLongInteger1Record;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.TextLongInteger1Record = TextLongInteger1Record;

});
define("Connect2_LegacyShared.model$TextLongInteger1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextLongInteger1Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextLongInteger1RecordList = (function (_super) {
__extends(TextLongInteger1RecordList, _super);
function TextLongInteger1RecordList(defaults) {
_super.apply(this, arguments);
}
TextLongInteger1RecordList.itemType = Connect2_LegacySharedModel.TextLongInteger1Record;
return TextLongInteger1RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextLongInteger1RecordList = TextLongInteger1RecordList;

});
define("Connect2_LegacyShared.model$Custom_Address_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Custom_Address_ItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecordList = (function (_super) {
__extends(Custom_Address_ItemRecordList, _super);
function Custom_Address_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecordList.itemType = Connect2_LegacySharedModel.Custom_Address_ItemRecord;
return Custom_Address_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Custom_Address_ItemRecordList = Custom_Address_ItemRecordList;

});
define("Connect2_LegacyShared.model$AuditLog_ShareEventInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AuditLog_ShareEventInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AuditLog_ShareEventInfoList = (function (_super) {
__extends(AuditLog_ShareEventInfoList, _super);
function AuditLog_ShareEventInfoList(defaults) {
_super.apply(this, arguments);
}
AuditLog_ShareEventInfoList.itemType = Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec;
return AuditLog_ShareEventInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AuditLog_ShareEventInfoList = AuditLog_ShareEventInfoList;

});
define("Connect2_LegacyShared.model$ColumnOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ColumnOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ColumnOptionsRecordList = (function (_super) {
__extends(ColumnOptionsRecordList, _super);
function ColumnOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsRecordList.itemType = Connect2_LegacySharedModel.ColumnOptionsRecord;
return ColumnOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ColumnOptionsRecordList = ColumnOptionsRecordList;

});
define("Connect2_LegacyShared.model$ResourceSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ResourceSourceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResourceSourceRecordList = (function (_super) {
__extends(ResourceSourceRecordList, _super);
function ResourceSourceRecordList(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRecordList.itemType = Connect2_LegacySharedModel.ResourceSourceRecord;
return ResourceSourceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ResourceSourceRecordList = ResourceSourceRecordList;

});
define("Connect2_LegacyShared.model$MessageParameterList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageParameterRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageParameterList = (function (_super) {
__extends(MessageParameterList, _super);
function MessageParameterList(defaults) {
_super.apply(this, arguments);
}
MessageParameterList.itemType = Comms_CSModel.MessageParameterRec;
return MessageParameterList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageParameterList = MessageParameterList;

});
define("Connect2_LegacyShared.model$BusinessLinkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BusinessLinkItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRecordList = (function (_super) {
__extends(BusinessLinkItemRecordList, _super);
function BusinessLinkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRecordList.itemType = Connect2_LegacySharedModel.BusinessLinkItemRecord;
return BusinessLinkItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BusinessLinkItemRecordList = BusinessLinkItemRecordList;

});
define("Connect2_LegacyShared.model$CommunityBusinessTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeRec = (function (_super) {
__extends(CommunityBusinessTypeRec, _super);
function CommunityBusinessTypeRec(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessTypeRec.fromStructure = function (str) {
return new CommunityBusinessTypeRec(new CommunityBusinessTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessTypeRec.init();
return CommunityBusinessTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CommunityBusinessTypeRec = CommunityBusinessTypeRec;

});
define("Connect2_LegacyShared.model$AvatarImageFallbackoptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AvatarImageFallbackoptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsRecordList = (function (_super) {
__extends(AvatarImageFallbackoptionsRecordList, _super);
function AvatarImageFallbackoptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsRecordList.itemType = Connect2_LegacySharedModel.AvatarImageFallbackoptionsRecord;
return AvatarImageFallbackoptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AvatarImageFallbackoptionsRecordList = AvatarImageFallbackoptionsRecordList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.Directory_UserCurrentRecord = Directory_UserCurrentRecord;

});
define("Connect2_LegacyShared.model$ConnectConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ConnectConfigRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ConnectConfigRecordList = (function (_super) {
__extends(ConnectConfigRecordList, _super);
function ConnectConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRecordList.itemType = Connect2_LegacySharedModel.ConnectConfigRecord;
return ConnectConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ConnectConfigRecordList = ConnectConfigRecordList;

});
define("Connect2_LegacyShared.model$UBT_FontSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_FontSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeRecord = (function (_super) {
__extends(UBT_FontSizeRecord, _super);
function UBT_FontSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FontSize", "uBT_FontSizeAttr", "UBT_FontSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FontSizeRec());
}, true, UBTConnectLibraryModel.UBT_FontSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FontSizeRecord.fromStructure = function (str) {
return new UBT_FontSizeRecord(new UBT_FontSizeRecord.RecordClass({
uBT_FontSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FontSizeRecord._isAnonymousRecord = true;
UBT_FontSizeRecord.UniqueId = "a2254625-48b7-a75e-5fcf-c17f5bd21996";
UBT_FontSizeRecord.init();
return UBT_FontSizeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_FontSizeRecord = UBT_FontSizeRecord;

});
define("Connect2_LegacyShared.model$Directory_CDNList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_CDNList = (function (_super) {
__extends(Directory_CDNList, _super);
function Directory_CDNList(defaults) {
_super.apply(this, arguments);
}
Directory_CDNList.itemType = APIDomain_Directory_ISModel.Directory_CDNRec;
return Directory_CDNList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_CDNList = Directory_CDNList;

});
define("Connect2_LegacyShared.model$LocalConnectApplicationEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalConnectApplicationEventsRecord = (function (_super) {
__extends(LocalConnectApplicationEventsRecord, _super);
function LocalConnectApplicationEventsRecord(defaults) {
_super.apply(this, arguments);
}
LocalConnectApplicationEventsRecord.attributesToDeclare = function () {
return [
this.attr("LocalConnectApplicationEvents", "localConnectApplicationEventsAttr", "LocalConnectApplicationEvents", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalConnectApplicationEventsRec());
}, true, Connect2_LegacySharedModel.LocalConnectApplicationEventsRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalConnectApplicationEventsRecord.fromStructure = function (str) {
return new LocalConnectApplicationEventsRecord(new LocalConnectApplicationEventsRecord.RecordClass({
localConnectApplicationEventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalConnectApplicationEventsRecord._isAnonymousRecord = true;
LocalConnectApplicationEventsRecord.UniqueId = "a296d022-fad6-44ed-dbe5-c0d3bf286c3d";
LocalConnectApplicationEventsRecord.init();
return LocalConnectApplicationEventsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalConnectApplicationEventsRecord = LocalConnectApplicationEventsRecord;

});
define("Connect2_LegacyShared.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUI_2_23Model.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("Connect2_LegacyShared.model$Extension3RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Extension3Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Extension3RecordList = (function (_super) {
__extends(Extension3RecordList, _super);
function Extension3RecordList(defaults) {
_super.apply(this, arguments);
}
Extension3RecordList.itemType = Connect2_LegacySharedModel.Extension3Record;
return Extension3RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Extension3RecordList = Extension3RecordList;

});
define("Connect2_LegacyShared.model$ThemeClassRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ThemeClassRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ThemeClassRecordList = (function (_super) {
__extends(ThemeClassRecordList, _super);
function ThemeClassRecordList(defaults) {
_super.apply(this, arguments);
}
ThemeClassRecordList.itemType = Connect2_LegacySharedModel.ThemeClassRecord;
return ThemeClassRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ThemeClassRecordList = ThemeClassRecordList;

});
define("Connect2_LegacyShared.model$AvatarIconOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$AvatarIconOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsList = (function (_super) {
__extends(AvatarIconOptionsList, _super);
function AvatarIconOptionsList(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsList.itemType = UBTConnectLibraryModel.AvatarIconOptionsRec;
return AvatarIconOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AvatarIconOptionsList = AvatarIconOptionsList;

});
define("Connect2_LegacyShared.model$AvatarImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$AvatarImageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarImageList = (function (_super) {
__extends(AvatarImageList, _super);
function AvatarImageList(defaults) {
_super.apply(this, arguments);
}
AvatarImageList.itemType = UBTConnectLibraryModel.AvatarImageRec;
return AvatarImageList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AvatarImageList = AvatarImageList;

});
define("Connect2_LegacyShared.model$UpdateItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UpdateItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UpdateItemRecordList = (function (_super) {
__extends(UpdateItemRecordList, _super);
function UpdateItemRecordList(defaults) {
_super.apply(this, arguments);
}
UpdateItemRecordList.itemType = Connect2_LegacySharedModel.UpdateItemRecord;
return UpdateItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UpdateItemRecordList = UpdateItemRecordList;

});
define("Connect2_LegacyShared.model$UI_Household_CardRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect2_LegacyShared.model", "Connect_Household_CS.model$UI_Household_CardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Household_CardRecord = (function (_super) {
__extends(UI_Household_CardRecord, _super);
function UI_Household_CardRecord(defaults) {
_super.apply(this, arguments);
}
UI_Household_CardRecord.attributesToDeclare = function () {
return [
this.attr("UI_Household_Card", "uI_Household_CardAttr", "UI_Household_Card", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_Household_CardRec());
}, true, Connect_Household_CSModel.UI_Household_CardRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Household_CardRecord.fromStructure = function (str) {
return new UI_Household_CardRecord(new UI_Household_CardRecord.RecordClass({
uI_Household_CardAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_Household_CardRecord._isAnonymousRecord = true;
UI_Household_CardRecord.UniqueId = "d0980057-c9ed-39ec-6890-64d3b2af7353";
UI_Household_CardRecord.init();
return UI_Household_CardRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UI_Household_CardRecord = UI_Household_CardRecord;

});
define("Connect2_LegacyShared.model$UI_Household_CardRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_Household_CardRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_Household_CardRecordList = (function (_super) {
__extends(UI_Household_CardRecordList, _super);
function UI_Household_CardRecordList(defaults) {
_super.apply(this, arguments);
}
UI_Household_CardRecordList.itemType = Connect2_LegacySharedModel.UI_Household_CardRecord;
return UI_Household_CardRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_Household_CardRecordList = UI_Household_CardRecordList;

});
define("Connect2_LegacyShared.model$ConfigList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ConfigRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ConfigList = (function (_super) {
__extends(ConfigList, _super);
function ConfigList(defaults) {
_super.apply(this, arguments);
}
ConfigList.itemType = APIDomain_Directory_ISModel.ConfigRec;
return ConfigList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ConfigList = ConfigList;

});
define("Connect2_LegacyShared.model$AvatarIconOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$AvatarIconOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsRecord = (function (_super) {
__extends(AvatarIconOptionsRecord, _super);
function AvatarIconOptionsRecord(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsRecord.attributesToDeclare = function () {
return [
this.attr("AvatarIconOptions", "avatarIconOptionsAttr", "AvatarIconOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarIconOptionsRec());
}, true, UBTConnectLibraryModel.AvatarIconOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarIconOptionsRecord.fromStructure = function (str) {
return new AvatarIconOptionsRecord(new AvatarIconOptionsRecord.RecordClass({
avatarIconOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AvatarIconOptionsRecord._isAnonymousRecord = true;
AvatarIconOptionsRecord.UniqueId = "beb9e540-5f74-3f44-a08f-33c96a05671b";
AvatarIconOptionsRecord.init();
return AvatarIconOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AvatarIconOptionsRecord = AvatarIconOptionsRecord;

});
define("Connect2_LegacyShared.model$AvatarIconOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AvatarIconOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsRecordList = (function (_super) {
__extends(AvatarIconOptionsRecordList, _super);
function AvatarIconOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsRecordList.itemType = Connect2_LegacySharedModel.AvatarIconOptionsRecord;
return AvatarIconOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AvatarIconOptionsRecordList = AvatarIconOptionsRecordList;

});
define("Connect2_LegacyShared.model$Directory_ImageCaptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_ImageCaptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_ImageCaptionRecord = (function (_super) {
__extends(Directory_ImageCaptionRecord, _super);
function Directory_ImageCaptionRecord(defaults) {
_super.apply(this, arguments);
}
Directory_ImageCaptionRecord.attributesToDeclare = function () {
return [
this.attr("Directory_ImageCaption", "directory_ImageCaptionAttr", "Directory_ImageCaption", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_ImageCaptionRec());
}, true, APIDomain_Directory_ISModel.Directory_ImageCaptionRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_ImageCaptionRecord.fromStructure = function (str) {
return new Directory_ImageCaptionRecord(new Directory_ImageCaptionRecord.RecordClass({
directory_ImageCaptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_ImageCaptionRecord._isAnonymousRecord = true;
Directory_ImageCaptionRecord.UniqueId = "cbe8b7c1-07a4-191b-b147-0c3cd9e8a347";
Directory_ImageCaptionRecord.init();
return Directory_ImageCaptionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_ImageCaptionRecord = Directory_ImageCaptionRecord;

});
define("Connect2_LegacyShared.model$Directory_ImageCaptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_ImageCaptionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_ImageCaptionRecordList = (function (_super) {
__extends(Directory_ImageCaptionRecordList, _super);
function Directory_ImageCaptionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_ImageCaptionRecordList.itemType = Connect2_LegacySharedModel.Directory_ImageCaptionRecord;
return Directory_ImageCaptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_ImageCaptionRecordList = Directory_ImageCaptionRecordList;

});
define("Connect2_LegacyShared.model$MessageSenderTargetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageSenderTargetRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageSenderTargetRecordList = (function (_super) {
__extends(MessageSenderTargetRecordList, _super);
function MessageSenderTargetRecordList(defaults) {
_super.apply(this, arguments);
}
MessageSenderTargetRecordList.itemType = Connect2_LegacySharedModel.MessageSenderTargetRecord;
return MessageSenderTargetRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageSenderTargetRecordList = MessageSenderTargetRecordList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_OrbitRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_OrbitRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_OrbitRecord = (function (_super) {
__extends(ApplicationEvents_OrbitRecord, _super);
function ApplicationEvents_OrbitRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_OrbitRecord.attributesToDeclare = function () {
return [
this.attr("ApplicationEvents_Orbit", "applicationEvents_OrbitAttr", "ApplicationEvents_Orbit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ApplicationEvents_OrbitRec());
}, true, Connect2_LegacySharedModel.ApplicationEvents_OrbitRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationEvents_OrbitRecord.fromStructure = function (str) {
return new ApplicationEvents_OrbitRecord(new ApplicationEvents_OrbitRecord.RecordClass({
applicationEvents_OrbitAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationEvents_OrbitRecord._isAnonymousRecord = true;
ApplicationEvents_OrbitRecord.UniqueId = "fea0f26b-1391-5bcb-f8ad-26117b4043f1";
ApplicationEvents_OrbitRecord.init();
return ApplicationEvents_OrbitRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ApplicationEvents_OrbitRecord = ApplicationEvents_OrbitRecord;

});
define("Connect2_LegacyShared.model$ApplicationEvents_OrbitRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_OrbitRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_OrbitRecordList = (function (_super) {
__extends(ApplicationEvents_OrbitRecordList, _super);
function ApplicationEvents_OrbitRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_OrbitRecordList.itemType = Connect2_LegacySharedModel.ApplicationEvents_OrbitRecord;
return ApplicationEvents_OrbitRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_OrbitRecordList = ApplicationEvents_OrbitRecordList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityList, _super);
function Directory_UserCurrent_VisibilityList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec;
return Directory_UserCurrent_VisibilityList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_VisibilityList = Directory_UserCurrent_VisibilityList;

});
define("Connect2_LegacyShared.model$PhotoDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhotoDetailsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRecordList = (function (_super) {
__extends(PhotoDetailsRecordList, _super);
function PhotoDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRecordList.itemType = Connect2_LegacySharedModel.PhotoDetailsRecord;
return PhotoDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoDetailsRecordList = PhotoDetailsRecordList;

});
define("Connect2_LegacyShared.model$LocalityResultItemWithGPSRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRecordList = (function (_super) {
__extends(LocalityResultItemWithGPSRecordList, _super);
function LocalityResultItemWithGPSRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRecordList.itemType = Connect2_LegacySharedModel.LocalityResultItemWithGPSRecord;
return LocalityResultItemWithGPSRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityResultItemWithGPSRecordList = LocalityResultItemWithGPSRecordList;

});
define("Connect2_LegacyShared.model$CacheableSubdivisionInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRecordList = (function (_super) {
__extends(CacheableSubdivisionInformationRecordList, _super);
function CacheableSubdivisionInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRecordList.itemType = Connect2_LegacySharedModel.CacheableSubdivisionInformationRecord;
return CacheableSubdivisionInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableSubdivisionInformationRecordList = CacheableSubdivisionInformationRecordList;

});
define("Connect2_LegacyShared.model$Users_Current_GETResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Users_Current_GETResponseList = (function (_super) {
__extends(Users_Current_GETResponseList, _super);
function Users_Current_GETResponseList(defaults) {
_super.apply(this, arguments);
}
Users_Current_GETResponseList.itemType = APIDomain_Directory_ISModel.Users_Current_GETResponseRec;
return Users_Current_GETResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Users_Current_GETResponseList = Users_Current_GETResponseList;

});
define("Connect2_LegacyShared.model$BookmarkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecord = (function (_super) {
__extends(BookmarkItemRecord, _super);
function BookmarkItemRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkItem", "bookmarkItemAttr", "BookmarkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkItemRec());
}, true, Connect2_MyBookmarks_ISModel.BookmarkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkItemRecord.fromStructure = function (str) {
return new BookmarkItemRecord(new BookmarkItemRecord.RecordClass({
bookmarkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkItemRecord._isAnonymousRecord = true;
BookmarkItemRecord.UniqueId = "aba0b140-6102-15e5-c64e-80ff3532321e";
BookmarkItemRecord.init();
return BookmarkItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BookmarkItemRecord = BookmarkItemRecord;

});
define("Connect2_LegacyShared.model$CacheControl_UserInformationList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function (exports, OutSystems, UBTConnect_UtilsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationList = (function (_super) {
__extends(CacheControl_UserInformationList, _super);
function CacheControl_UserInformationList(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationList.itemType = UBTConnect_UtilsModel.CacheControl_UserInformationRec;
return CacheControl_UserInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheControl_UserInformationList = CacheControl_UserInformationList;

});
define("Connect2_LegacyShared.model$UI_CommunityBusiness_ShareCardRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_CommunityBusiness_ShareCardRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_CommunityBusiness_ShareCardRecordList = (function (_super) {
__extends(UI_CommunityBusiness_ShareCardRecordList, _super);
function UI_CommunityBusiness_ShareCardRecordList(defaults) {
_super.apply(this, arguments);
}
UI_CommunityBusiness_ShareCardRecordList.itemType = Connect2_LegacySharedModel.UI_CommunityBusiness_ShareCardRecord;
return UI_CommunityBusiness_ShareCardRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_CommunityBusiness_ShareCardRecordList = UI_CommunityBusiness_ShareCardRecordList;

});
define("Connect2_LegacyShared.model$MemberContactWithTimezoneList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberContactWithTimezoneList = (function (_super) {
__extends(MemberContactWithTimezoneList, _super);
function MemberContactWithTimezoneList(defaults) {
_super.apply(this, arguments);
}
MemberContactWithTimezoneList.itemType = Connect2_LegacySharedModel.MemberContactWithTimezoneRec;
return MemberContactWithTimezoneList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemberContactWithTimezoneList = MemberContactWithTimezoneList;

});
define("Connect2_LegacyShared.model$Directory_InterchangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_InterchangeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_InterchangeRecord = (function (_super) {
__extends(Directory_InterchangeRecord, _super);
function Directory_InterchangeRecord(defaults) {
_super.apply(this, arguments);
}
Directory_InterchangeRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Interchange", "directory_InterchangeAttr", "Directory_Interchange", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_InterchangeRec());
}, true, APIDomain_Directory_ISModel.Directory_InterchangeRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_InterchangeRecord.fromStructure = function (str) {
return new Directory_InterchangeRecord(new Directory_InterchangeRecord.RecordClass({
directory_InterchangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_InterchangeRecord._isAnonymousRecord = true;
Directory_InterchangeRecord.UniqueId = "f4e7289d-5bb6-6a0f-a457-8275babcdd7a";
Directory_InterchangeRecord.init();
return Directory_InterchangeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Directory_InterchangeRecord = Directory_InterchangeRecord;

});
define("Connect2_LegacyShared.model$Directory_InterchangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_InterchangeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_InterchangeRecordList = (function (_super) {
__extends(Directory_InterchangeRecordList, _super);
function Directory_InterchangeRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_InterchangeRecordList.itemType = Connect2_LegacySharedModel.Directory_InterchangeRecord;
return Directory_InterchangeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_InterchangeRecordList = Directory_InterchangeRecordList;

});
define("Connect2_LegacyShared.model$CallInfoStructureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CallInfoStructureRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallInfoStructureRecord = (function (_super) {
__extends(CallInfoStructureRecord, _super);
function CallInfoStructureRecord(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureRecord.attributesToDeclare = function () {
return [
this.attr("CallInfoStructure", "callInfoStructureAttr", "CallInfoStructure", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CallInfoStructureRec());
}, true, Connect2_LegacySharedModel.CallInfoStructureRec)
].concat(_super.attributesToDeclare.call(this));
};
CallInfoStructureRecord.fromStructure = function (str) {
return new CallInfoStructureRecord(new CallInfoStructureRecord.RecordClass({
callInfoStructureAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CallInfoStructureRecord._isAnonymousRecord = true;
CallInfoStructureRecord.UniqueId = "af7a59d3-772a-48fc-effb-de854a8b9fd8";
CallInfoStructureRecord.init();
return CallInfoStructureRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CallInfoStructureRecord = CallInfoStructureRecord;

});
define("Connect2_LegacyShared.model$CacheableGeocodeInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRecordList = (function (_super) {
__extends(CacheableGeocodeInformationRecordList, _super);
function CacheableGeocodeInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRecordList.itemType = Connect2_LegacySharedModel.CacheableGeocodeInformationRecord;
return CacheableGeocodeInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableGeocodeInformationRecordList = CacheableGeocodeInformationRecordList;

});
define("Connect2_LegacyShared.model$SubdivisionLocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionLocalityRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionLocalityRecordList = (function (_super) {
__extends(SubdivisionLocalityRecordList, _super);
function SubdivisionLocalityRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionLocalityRecordList.itemType = Connect2_LegacySharedModel.SubdivisionLocalityRecord;
return SubdivisionLocalityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionLocalityRecordList = SubdivisionLocalityRecordList;

});
define("Connect2_LegacyShared.model$ShareItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ShareItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareItemList = (function (_super) {
__extends(ShareItemList, _super);
function ShareItemList(defaults) {
_super.apply(this, arguments);
}
ShareItemList.itemType = APIDomain_Directory_ISModel.ShareItemRec;
return ShareItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ShareItemList = ShareItemList;

});
define("Connect2_LegacyShared.model$ColumnOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ColumnOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ColumnOptionsList = (function (_super) {
__extends(ColumnOptionsList, _super);
function ColumnOptionsList(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsList.itemType = UBTConnectLibraryModel.ColumnOptionsRec;
return ColumnOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ColumnOptionsList = ColumnOptionsList;

});
define("Connect2_LegacyShared.model$ActionsMenuOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ActionsMenuOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsRecordList = (function (_super) {
__extends(ActionsMenuOptionsRecordList, _super);
function ActionsMenuOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsRecordList.itemType = Connect2_LegacySharedModel.ActionsMenuOptionsRecord;
return ActionsMenuOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ActionsMenuOptionsRecordList = ActionsMenuOptionsRecordList;

});
define("Connect2_LegacyShared.model$Directory_SubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_SubdivisionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_SubdivisionRecordList = (function (_super) {
__extends(Directory_SubdivisionRecordList, _super);
function Directory_SubdivisionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_SubdivisionRecordList.itemType = Connect2_LegacySharedModel.Directory_SubdivisionRecord;
return Directory_SubdivisionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_SubdivisionRecordList = Directory_SubdivisionRecordList;

});
define("Connect2_LegacyShared.model$Connect_Subscription_PlanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$Connect_Subscription_PlanRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanRecord = (function (_super) {
__extends(Connect_Subscription_PlanRecord, _super);
function Connect_Subscription_PlanRecord(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Subscription_Plan", "connect_Subscription_PlanAttr", "Connect_Subscription_Plan", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec());
}, true, Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Subscription_PlanRecord.fromStructure = function (str) {
return new Connect_Subscription_PlanRecord(new Connect_Subscription_PlanRecord.RecordClass({
connect_Subscription_PlanAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_Subscription_PlanRecord._isAnonymousRecord = true;
Connect_Subscription_PlanRecord.UniqueId = "b2d06068-8e84-3eb6-cc7f-cc4e6923baa6";
Connect_Subscription_PlanRecord.init();
return Connect_Subscription_PlanRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Connect_Subscription_PlanRecord = Connect_Subscription_PlanRecord;

});
define("Connect2_LegacyShared.model$ResourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ResourceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ResourceRecordList = (function (_super) {
__extends(ResourceRecordList, _super);
function ResourceRecordList(defaults) {
_super.apply(this, arguments);
}
ResourceRecordList.itemType = Connect2_LegacySharedModel.ResourceRecord;
return ResourceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ResourceRecordList = ResourceRecordList;

});
define("Connect2_LegacyShared.model$CommunityBusinessTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeRecord = (function (_super) {
__extends(CommunityBusinessTypeRecord, _super);
function CommunityBusinessTypeRecord(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeRecord.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessType", "communityBusinessTypeAttr", "CommunityBusinessType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessTypeRec());
}, true, Connect2_LegacySharedModel.CommunityBusinessTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessTypeRecord.fromStructure = function (str) {
return new CommunityBusinessTypeRecord(new CommunityBusinessTypeRecord.RecordClass({
communityBusinessTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessTypeRecord._isAnonymousRecord = true;
CommunityBusinessTypeRecord.UniqueId = "bbd63b99-8aca-5910-ddf7-b72027415e79";
CommunityBusinessTypeRecord.init();
return CommunityBusinessTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CommunityBusinessTypeRecord = CommunityBusinessTypeRecord;

});
define("Connect2_LegacyShared.model$CommunityBusinessTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeRecordList = (function (_super) {
__extends(CommunityBusinessTypeRecordList, _super);
function CommunityBusinessTypeRecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeRecordList.itemType = Connect2_LegacySharedModel.CommunityBusinessTypeRecord;
return CommunityBusinessTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CommunityBusinessTypeRecordList = CommunityBusinessTypeRecordList;

});
define("Connect2_LegacyShared.model$HallPhotoExtensiveList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveList = (function (_super) {
__extends(HallPhotoExtensiveList, _super);
function HallPhotoExtensiveList(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveList.itemType = APIDomain_Directory_ISModel.HallPhotoExtensiveRec;
return HallPhotoExtensiveList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HallPhotoExtensiveList = HallPhotoExtensiveList;

});
define("Connect2_LegacyShared.model$DirectoryAccessList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DirectoryAccessRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAccessList = (function (_super) {
__extends(DirectoryAccessList, _super);
function DirectoryAccessList(defaults) {
_super.apply(this, arguments);
}
DirectoryAccessList.itemType = APIDomain_Directory_ISModel.DirectoryAccessRec;
return DirectoryAccessList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DirectoryAccessList = DirectoryAccessList;

});
define("Connect2_LegacyShared.model$AvatarImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$AvatarImageRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarImageRecord = (function (_super) {
__extends(AvatarImageRecord, _super);
function AvatarImageRecord(defaults) {
_super.apply(this, arguments);
}
AvatarImageRecord.attributesToDeclare = function () {
return [
this.attr("AvatarImage", "avatarImageAttr", "AvatarImage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, true, UBTConnectLibraryModel.AvatarImageRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarImageRecord.fromStructure = function (str) {
return new AvatarImageRecord(new AvatarImageRecord.RecordClass({
avatarImageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AvatarImageRecord._isAnonymousRecord = true;
AvatarImageRecord.UniqueId = "b642e93b-4341-1c0a-26ab-f48505df22d9";
AvatarImageRecord.init();
return AvatarImageRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.AvatarImageRecord = AvatarImageRecord;

});
define("Connect2_LegacyShared.model$AvatarImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AvatarImageRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AvatarImageRecordList = (function (_super) {
__extends(AvatarImageRecordList, _super);
function AvatarImageRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarImageRecordList.itemType = Connect2_LegacySharedModel.AvatarImageRecord;
return AvatarImageRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AvatarImageRecordList = AvatarImageRecordList;

});
define("Connect2_LegacyShared.model$ContainerOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ContainerOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ContainerOptionsList = (function (_super) {
__extends(ContainerOptionsList, _super);
function ContainerOptionsList(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsList.itemType = UBTConnectLibraryModel.ContainerOptionsRec;
return ContainerOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ContainerOptionsList = ContainerOptionsList;

});
define("Connect2_LegacyShared.model$DurationList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$DurationRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DurationList = (function (_super) {
__extends(DurationList, _super);
function DurationList(defaults) {
_super.apply(this, arguments);
}
DurationList.itemType = FullCalendarReactiveModel.DurationRec;
return DurationList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DurationList = DurationList;

});
define("Connect2_LegacyShared.model$Subdivision_ById_GETResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Subdivision_ById_GETResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Subdivision_ById_GETResponseRecord = (function (_super) {
__extends(Subdivision_ById_GETResponseRecord, _super);
function Subdivision_ById_GETResponseRecord(defaults) {
_super.apply(this, arguments);
}
Subdivision_ById_GETResponseRecord.attributesToDeclare = function () {
return [
this.attr("Subdivision_ById_GETResponse", "subdivision_ById_GETResponseAttr", "Subdivision_ById_GETResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Subdivision_ById_GETResponseRec());
}, true, APIDomain_Directory_ISModel.Subdivision_ById_GETResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Subdivision_ById_GETResponseRecord.fromStructure = function (str) {
return new Subdivision_ById_GETResponseRecord(new Subdivision_ById_GETResponseRecord.RecordClass({
subdivision_ById_GETResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Subdivision_ById_GETResponseRecord._isAnonymousRecord = true;
Subdivision_ById_GETResponseRecord.UniqueId = "b7172f4a-d7ec-8a34-e1b0-df882f4a22d8";
Subdivision_ById_GETResponseRecord.init();
return Subdivision_ById_GETResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Subdivision_ById_GETResponseRecord = Subdivision_ById_GETResponseRecord;

});
define("Connect2_LegacyShared.model$Subdivision_ById_GETResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Subdivision_ById_GETResponseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Subdivision_ById_GETResponseRecordList = (function (_super) {
__extends(Subdivision_ById_GETResponseRecordList, _super);
function Subdivision_ById_GETResponseRecordList(defaults) {
_super.apply(this, arguments);
}
Subdivision_ById_GETResponseRecordList.itemType = Connect2_LegacySharedModel.Subdivision_ById_GETResponseRecord;
return Subdivision_ById_GETResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Subdivision_ById_GETResponseRecordList = Subdivision_ById_GETResponseRecordList;

});
define("Connect2_LegacyShared.model$LocalBookmarkRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
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
this.attr("ObjectType", "objectTypeAttr", "ObjectType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectId", "objectIdAttr", "ObjectId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalBookmarkRec.init();
return LocalBookmarkRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalBookmarkRec = LocalBookmarkRec;

});
define("Connect2_LegacyShared.model$LocalBookmarkList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalBookmarkRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalBookmarkList = (function (_super) {
__extends(LocalBookmarkList, _super);
function LocalBookmarkList(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkList.itemType = Connect2_LegacySharedModel.LocalBookmarkRec;
return LocalBookmarkList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalBookmarkList = LocalBookmarkList;

});
define("Connect2_LegacyShared.model$MemoryCacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_LegacyShared.model", "MemoryClientCache.model$MemoryCacheTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeList = (function (_super) {
__extends(MemoryCacheTypeList, _super);
function MemoryCacheTypeList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeList.itemType = MemoryClientCacheModel.MemoryCacheTypeRec;
return MemoryCacheTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemoryCacheTypeList = MemoryCacheTypeList;

});
define("Connect2_LegacyShared.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$ColorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ColorRec());
}, true, OutSystemsUI_2_23Model.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "b9ca3ce2-cce6-fb6c-6a64-3d347a5ec750";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ColorRecord = ColorRecord;

});
define("Connect2_LegacyShared.model$UBT_FontSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_FontSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeRecordList = (function (_super) {
__extends(UBT_FontSizeRecordList, _super);
function UBT_FontSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeRecordList.itemType = Connect2_LegacySharedModel.UBT_FontSizeRecord;
return UBT_FontSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_FontSizeRecordList = UBT_FontSizeRecordList;

});
define("Connect2_LegacyShared.model$MessageListItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageListItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageListItemRecordList = (function (_super) {
__extends(MessageListItemRecordList, _super);
function MessageListItemRecordList(defaults) {
_super.apply(this, arguments);
}
MessageListItemRecordList.itemType = Connect2_LegacySharedModel.MessageListItemRecord;
return MessageListItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageListItemRecordList = MessageListItemRecordList;

});
define("Connect2_LegacyShared.model$LocalBookmarkRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalBookmarkRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRecord = (function (_super) {
__extends(LocalBookmarkRecord, _super);
function LocalBookmarkRecord(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRecord.attributesToDeclare = function () {
return [
this.attr("LocalBookmark", "localBookmarkAttr", "LocalBookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalBookmarkRec());
}, true, Connect2_LegacySharedModel.LocalBookmarkRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalBookmarkRecord.fromStructure = function (str) {
return new LocalBookmarkRecord(new LocalBookmarkRecord.RecordClass({
localBookmarkAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalBookmarkRecord._isAnonymousRecord = true;
LocalBookmarkRecord.UniqueId = "b9fb5354-c450-4d8a-c89a-3d31a340832e";
LocalBookmarkRecord.init();
return LocalBookmarkRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalBookmarkRecord = LocalBookmarkRecord;

});
define("Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "ServiceCenter.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessagePriorityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Comms_CS.model$MessageContentRec", "Comms_CS.model$MessageTemplateRec", "Comms_CS.model$MessageSenderTargetRec", "Comms_CS.model$MessageInstanceRec", "Comms_CS.model$AdaptiveCardJSONRec", "ServiceCenter.model$UserRec", "Connect2_LegacyShared.referencesHealth$ServiceCenter"], function (exports, OutSystems, Comms_CSModel, ServiceCenterModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord = (function (_super) {
__extends(MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord, _super);
function MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord(defaults) {
_super.apply(this, arguments);
}
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord.attributesToDeclare = function () {
return [
this.attr("MessagePriority", "messagePriorityAttr", "MessagePriority", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessagePriorityRec());
}, true, Comms_CSModel.MessagePriorityRec), 
this.attr("MessageContent", "messageContentAttr", "MessageContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageContentRec());
}, true, Comms_CSModel.MessageContentRec), 
this.attr("MessageTemplate", "messageTemplateAttr", "MessageTemplate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTemplateRec());
}, true, Comms_CSModel.MessageTemplateRec), 
this.attr("MessageSenderTarget", "messageSenderTargetAttr", "MessageSenderTarget", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageSenderTargetRec());
}, true, Comms_CSModel.MessageSenderTargetRec), 
this.attr("MessageInstance", "messageInstanceAttr", "MessageInstance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInstanceRec());
}, true, Comms_CSModel.MessageInstanceRec), 
this.attr("AdaptiveCardJSON", "adaptiveCardJSONAttr", "AdaptiveCardJSON", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.AdaptiveCardJSONRec());
}, true, Comms_CSModel.AdaptiveCardJSONRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord._isAnonymousRecord = true;
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord.UniqueId = "ba34120d-09d3-1534-5787-18df0f80d3a9";
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord.init();
return MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord = MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord;

});
define("Connect2_LegacyShared.model$HallPhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HallPhotoList = (function (_super) {
__extends(HallPhotoList, _super);
function HallPhotoList(defaults) {
_super.apply(this, arguments);
}
HallPhotoList.itemType = APIDomain_Directory_ISModel.HallPhotoRec;
return HallPhotoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HallPhotoList = HallPhotoList;

});
define("Connect2_LegacyShared.model$AppManager_UserExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "Connect2_LegacyShared.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, Connect2_LegacySharedModel) {
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
Connect2_LegacySharedModel.AppManager_UserExtendedRecord = AppManager_UserExtendedRecord;

});
define("Connect2_LegacyShared.model$AppManager_UserExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AppManager_UserExtendedRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedRecordList = (function (_super) {
__extends(AppManager_UserExtendedRecordList, _super);
function AppManager_UserExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedRecordList.itemType = Connect2_LegacySharedModel.AppManager_UserExtendedRecord;
return AppManager_UserExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AppManager_UserExtendedRecordList = AppManager_UserExtendedRecordList;

});
define("Connect2_LegacyShared.model$InlineIconList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$InlineIconRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InlineIconList = (function (_super) {
__extends(InlineIconList, _super);
function InlineIconList(defaults) {
_super.apply(this, arguments);
}
InlineIconList.itemType = UBTConnectLibraryModel.InlineIconRec;
return InlineIconList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.InlineIconList = InlineIconList;

});
define("Connect2_LegacyShared.model$MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTypeList = (function (_super) {
__extends(MessageTypeList, _super);
function MessageTypeList(defaults) {
_super.apply(this, arguments);
}
MessageTypeList.itemType = Comms_CSModel.MessageTypeRec;
return MessageTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageTypeList = MessageTypeList;

});
define("Connect2_LegacyShared.model$CDNList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDNRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDNList = (function (_super) {
__extends(CDNList, _super);
function CDNList(defaults) {
_super.apply(this, arguments);
}
CDNList.itemType = APIDomain_Directory_ISModel.CDNRec;
return CDNList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CDNList = CDNList;

});
define("Connect2_LegacyShared.model$BackgroundImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BackgroundImageRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BackgroundImageRecordList = (function (_super) {
__extends(BackgroundImageRecordList, _super);
function BackgroundImageRecordList(defaults) {
_super.apply(this, arguments);
}
BackgroundImageRecordList.itemType = Connect2_LegacySharedModel.BackgroundImageRecord;
return BackgroundImageRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BackgroundImageRecordList = BackgroundImageRecordList;

});
define("Connect2_LegacyShared.model$Connect_EntityList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_EntityList = (function (_super) {
__extends(Connect_EntityList, _super);
function Connect_EntityList(defaults) {
_super.apply(this, arguments);
}
Connect_EntityList.itemType = Connect_CommonEntities_DBModel.Connect_EntityRec;
return Connect_EntityList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Connect_EntityList = Connect_EntityList;

});
define("Connect2_LegacyShared.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SideMenuBehaviorRec());
}, true, OutSystemsUI_2_23Model.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "fe000763-f33f-938a-1386-6f7b7df05be1";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("Connect2_LegacyShared.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SideMenuBehaviorRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = Connect2_LegacySharedModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("Connect2_LegacyShared.model$UBT_Icons2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_Icons2Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_Icons2RecordList = (function (_super) {
__extends(UBT_Icons2RecordList, _super);
function UBT_Icons2RecordList(defaults) {
_super.apply(this, arguments);
}
UBT_Icons2RecordList.itemType = Connect2_LegacySharedModel.UBT_Icons2Record;
return UBT_Icons2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_Icons2RecordList = UBT_Icons2RecordList;

});
define("Connect2_LegacyShared.model$MemoryCacheResultList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_LegacyShared.model", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultList = (function (_super) {
__extends(MemoryCacheResultList, _super);
function MemoryCacheResultList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultList.itemType = MemoryClientCacheModel.MemoryCacheResultRec;
return MemoryCacheResultList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemoryCacheResultList = MemoryCacheResultList;

});
define("Connect2_LegacyShared.model$Extension4RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Extension4Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Extension4RecordList = (function (_super) {
__extends(Extension4RecordList, _super);
function Extension4RecordList(defaults) {
_super.apply(this, arguments);
}
Extension4RecordList.itemType = Connect2_LegacySharedModel.Extension4Record;
return Extension4RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Extension4RecordList = Extension4RecordList;

});
define("Connect2_LegacyShared.model$ShareProfileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareProfileRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareProfileRecord = (function (_super) {
__extends(ShareProfileRecord, _super);
function ShareProfileRecord(defaults) {
_super.apply(this, arguments);
}
ShareProfileRecord.attributesToDeclare = function () {
return [
this.attr("ShareProfile", "shareProfileAttr", "ShareProfile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ShareProfileRec());
}, true, Connect2_LegacySharedModel.ShareProfileRec)
].concat(_super.attributesToDeclare.call(this));
};
ShareProfileRecord.fromStructure = function (str) {
return new ShareProfileRecord(new ShareProfileRecord.RecordClass({
shareProfileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShareProfileRecord._isAnonymousRecord = true;
ShareProfileRecord.UniqueId = "bf64eea5-72b0-ba6c-f29b-383cc24f1c92";
ShareProfileRecord.init();
return ShareProfileRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ShareProfileRecord = ShareProfileRecord;

});
define("Connect2_LegacyShared.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageStatusRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageStatusRec());
}, true, Comms_CSModel.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "d4e43f6c-a8a1-053c-6a54-37578b9cdd49";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageStatusRecord = MessageStatusRecord;

});
define("Connect2_LegacyShared.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageStatusRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = Connect2_LegacySharedModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("Connect2_LegacyShared.model$CacheableLocalityInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRecord = (function (_super) {
__extends(CacheableLocalityInformationRecord, _super);
function CacheableLocalityInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableLocalityInformation", "cacheableLocalityInformationAttr", "CacheableLocalityInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableLocalityInformationRec());
}, true, Connect2_LegacySharedModel.CacheableLocalityInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableLocalityInformationRecord.fromStructure = function (str) {
return new CacheableLocalityInformationRecord(new CacheableLocalityInformationRecord.RecordClass({
cacheableLocalityInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableLocalityInformationRecord._isAnonymousRecord = true;
CacheableLocalityInformationRecord.UniqueId = "bffb0164-d348-91fa-fe8a-679847f00fdc";
CacheableLocalityInformationRecord.init();
return CacheableLocalityInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CacheableLocalityInformationRecord = CacheableLocalityInformationRecord;

});
define("Connect2_LegacyShared.model$ImageErrorEventInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageErrorEventInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageErrorEventInfoRecord = (function (_super) {
__extends(ImageErrorEventInfoRecord, _super);
function ImageErrorEventInfoRecord(defaults) {
_super.apply(this, arguments);
}
ImageErrorEventInfoRecord.attributesToDeclare = function () {
return [
this.attr("ImageErrorEventInfo", "imageErrorEventInfoAttr", "ImageErrorEventInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ImageErrorEventInfoRec());
}, true, Connect2_LegacySharedModel.ImageErrorEventInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageErrorEventInfoRecord.fromStructure = function (str) {
return new ImageErrorEventInfoRecord(new ImageErrorEventInfoRecord.RecordClass({
imageErrorEventInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageErrorEventInfoRecord._isAnonymousRecord = true;
ImageErrorEventInfoRecord.UniqueId = "f3128631-553c-e985-7dc6-f4d4872a3733";
ImageErrorEventInfoRecord.init();
return ImageErrorEventInfoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageErrorEventInfoRecord = ImageErrorEventInfoRecord;

});
define("Connect2_LegacyShared.model$ImageErrorEventInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageErrorEventInfoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageErrorEventInfoRecordList = (function (_super) {
__extends(ImageErrorEventInfoRecordList, _super);
function ImageErrorEventInfoRecordList(defaults) {
_super.apply(this, arguments);
}
ImageErrorEventInfoRecordList.itemType = Connect2_LegacySharedModel.ImageErrorEventInfoRecord;
return ImageErrorEventInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageErrorEventInfoRecordList = ImageErrorEventInfoRecordList;

});
define("Connect2_LegacyShared.model$LocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$LocalityRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityRecord = (function (_super) {
__extends(LocalityRecord, _super);
function LocalityRecord(defaults) {
_super.apply(this, arguments);
}
LocalityRecord.attributesToDeclare = function () {
return [
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityRec());
}, true, APIDomain_Directory_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityRecord.fromStructure = function (str) {
return new LocalityRecord(new LocalityRecord.RecordClass({
localityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityRecord._isAnonymousRecord = true;
LocalityRecord.UniqueId = "c03dcc02-7922-03ee-9d9e-39e2c4d9e0e7";
LocalityRecord.init();
return LocalityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.LocalityRecord = LocalityRecord;

});
define("Connect2_LegacyShared.model$MyBookmarks_GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecord = (function (_super) {
__extends(MyBookmarks_GroupRecord, _super);
function MyBookmarks_GroupRecord(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecord.attributesToDeclare = function () {
return [
this.attr("MyBookmarks_Group", "myBookmarks_GroupAttr", "MyBookmarks_Group", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec());
}, true, Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_GroupRecord.fromStructure = function (str) {
return new MyBookmarks_GroupRecord(new MyBookmarks_GroupRecord.RecordClass({
myBookmarks_GroupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_GroupRecord._isAnonymousRecord = true;
MyBookmarks_GroupRecord.UniqueId = "d5562bf4-2fac-a49a-16aa-434ebfa850c3";
MyBookmarks_GroupRecord.init();
return MyBookmarks_GroupRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MyBookmarks_GroupRecord = MyBookmarks_GroupRecord;

});
define("Connect2_LegacyShared.model$MyBookmarks_GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MyBookmarks_GroupRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecordList = (function (_super) {
__extends(MyBookmarks_GroupRecordList, _super);
function MyBookmarks_GroupRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecordList.itemType = Connect2_LegacySharedModel.MyBookmarks_GroupRecord;
return MyBookmarks_GroupRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MyBookmarks_GroupRecordList = MyBookmarks_GroupRecordList;

});
define("Connect2_LegacyShared.model$UserContactRequestList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "Connect2_LegacyShared.model", "UBT_Email.model$UserContactRequestRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_Email"], function (exports, OutSystems, UBT_EmailModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UserContactRequestList = (function (_super) {
__extends(UserContactRequestList, _super);
function UserContactRequestList(defaults) {
_super.apply(this, arguments);
}
UserContactRequestList.itemType = UBT_EmailModel.UserContactRequestRec;
return UserContactRequestList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UserContactRequestList = UserContactRequestList;

});
define("Connect2_LegacyShared.model$SizeOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SizeOptionsRecord = (function (_super) {
__extends(SizeOptionsRecord, _super);
function SizeOptionsRecord(defaults) {
_super.apply(this, arguments);
}
SizeOptionsRecord.attributesToDeclare = function () {
return [
this.attr("SizeOptions", "sizeOptionsAttr", "SizeOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SizeOptionsRec());
}, true, UBTConnectLibraryModel.SizeOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeOptionsRecord.fromStructure = function (str) {
return new SizeOptionsRecord(new SizeOptionsRecord.RecordClass({
sizeOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeOptionsRecord._isAnonymousRecord = true;
SizeOptionsRecord.UniqueId = "c1394f27-ec54-dd8c-9b47-c3a83414e146";
SizeOptionsRecord.init();
return SizeOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SizeOptionsRecord = SizeOptionsRecord;

});
define("Connect2_LegacyShared.model$GetLocalityStatisticsResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$GetLocalityStatisticsResponseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRecordList = (function (_super) {
__extends(GetLocalityStatisticsResponseRecordList, _super);
function GetLocalityStatisticsResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRecordList.itemType = Connect2_LegacySharedModel.GetLocalityStatisticsResponseRecord;
return GetLocalityStatisticsResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetLocalityStatisticsResponseRecordList = GetLocalityStatisticsResponseRecordList;

});
define("Connect2_LegacyShared.model$OpeningHourItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$OpeningHourItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRecordList = (function (_super) {
__extends(OpeningHourItemRecordList, _super);
function OpeningHourItemRecordList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRecordList.itemType = Connect2_LegacySharedModel.OpeningHourItemRecord;
return OpeningHourItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.OpeningHourItemRecordList = OpeningHourItemRecordList;

});
define("Connect2_LegacyShared.model$DirectoryAPIFilterRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryAPIFilterRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterRecord = (function (_super) {
__extends(DirectoryAPIFilterRecord, _super);
function DirectoryAPIFilterRecord(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterRecord.attributesToDeclare = function () {
return [
this.attr("DirectoryAPIFilter", "directoryAPIFilterAttr", "DirectoryAPIFilter", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.DirectoryAPIFilterRec());
}, true, Connect2_LegacySharedModel.DirectoryAPIFilterRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryAPIFilterRecord.fromStructure = function (str) {
return new DirectoryAPIFilterRecord(new DirectoryAPIFilterRecord.RecordClass({
directoryAPIFilterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryAPIFilterRecord._isAnonymousRecord = true;
DirectoryAPIFilterRecord.UniqueId = "c1cc4b49-a8b1-f82c-9fa0-52b6facacf05";
DirectoryAPIFilterRecord.init();
return DirectoryAPIFilterRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DirectoryAPIFilterRecord = DirectoryAPIFilterRecord;

});
define("Connect2_LegacyShared.model$InterchangeItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$InterchangeItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var InterchangeItemRecordList = (function (_super) {
__extends(InterchangeItemRecordList, _super);
function InterchangeItemRecordList(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRecordList.itemType = Connect2_LegacySharedModel.InterchangeItemRecord;
return InterchangeItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.InterchangeItemRecordList = InterchangeItemRecordList;

});
define("Connect2_LegacyShared.model$UpdateItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model", "Connect2_LegacyShared.model", "Connect_Updates_CS.model$UpdateItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_Updates_CS"], function (exports, OutSystems, Connect_Updates_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UpdateItemList = (function (_super) {
__extends(UpdateItemList, _super);
function UpdateItemList(defaults) {
_super.apply(this, arguments);
}
UpdateItemList.itemType = Connect_Updates_CSModel.UpdateItemRec;
return UpdateItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UpdateItemList = UpdateItemList;

});
define("Connect2_LegacyShared.model$MessageInfoTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageInfoTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageInfoTypeRecordList = (function (_super) {
__extends(MessageInfoTypeRecordList, _super);
function MessageInfoTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MessageInfoTypeRecordList.itemType = Connect2_LegacySharedModel.MessageInfoTypeRecord;
return MessageInfoTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageInfoTypeRecordList = MessageInfoTypeRecordList;

});
define("Connect2_LegacyShared.model$SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SubscriptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubscriptionList = (function (_super) {
__extends(SubscriptionList, _super);
function SubscriptionList(defaults) {
_super.apply(this, arguments);
}
SubscriptionList.itemType = APIDomain_Directory_ISModel.SubscriptionRec;
return SubscriptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubscriptionList = SubscriptionList;

});
define("Connect2_LegacyShared.model$UBT_MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_MessageTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecordList = (function (_super) {
__extends(UBT_MessageTypeRecordList, _super);
function UBT_MessageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecordList.itemType = Connect2_LegacySharedModel.UBT_MessageTypeRecord;
return UBT_MessageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_MessageTypeRecordList = UBT_MessageTypeRecordList;

});
define("Connect2_LegacyShared.model$Connect_EntityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Connect_EntityRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_EntityRecordList = (function (_super) {
__extends(Connect_EntityRecordList, _super);
function Connect_EntityRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_EntityRecordList.itemType = Connect2_LegacySharedModel.Connect_EntityRecord;
return Connect_EntityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Connect_EntityRecordList = Connect_EntityRecordList;

});
define("Connect2_LegacyShared.model$CountryWithMapPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CountryWithMapPositionRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRecord = (function (_super) {
__extends(CountryWithMapPositionRecord, _super);
function CountryWithMapPositionRecord(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRecord.attributesToDeclare = function () {
return [
this.attr("CountryWithMapPosition", "countryWithMapPositionAttr", "CountryWithMapPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CountryWithMapPositionRec());
}, true, Connect2_LegacySharedModel.CountryWithMapPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
CountryWithMapPositionRecord.fromStructure = function (str) {
return new CountryWithMapPositionRecord(new CountryWithMapPositionRecord.RecordClass({
countryWithMapPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CountryWithMapPositionRecord._isAnonymousRecord = true;
CountryWithMapPositionRecord.UniqueId = "c720f651-2f17-9b7e-5b82-d2943e69a968";
CountryWithMapPositionRecord.init();
return CountryWithMapPositionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CountryWithMapPositionRecord = CountryWithMapPositionRecord;

});
define("Connect2_LegacyShared.model$ImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$ImageSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSizeList = (function (_super) {
__extends(ImageSizeList, _super);
function ImageSizeList(defaults) {
_super.apply(this, arguments);
}
ImageSizeList.itemType = Connect_CommonEntities_DBModel.ImageSizeRec;
return ImageSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageSizeList = ImageSizeList;

});
define("Connect2_LegacyShared.model$Directory_Subdivision_SimpleList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_Subdivision_SimpleRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_Subdivision_SimpleList = (function (_super) {
__extends(Directory_Subdivision_SimpleList, _super);
function Directory_Subdivision_SimpleList(defaults) {
_super.apply(this, arguments);
}
Directory_Subdivision_SimpleList.itemType = APIDomain_Directory_ISModel.Directory_Subdivision_SimpleRec;
return Directory_Subdivision_SimpleList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_Subdivision_SimpleList = Directory_Subdivision_SimpleList;

});
define("Connect2_LegacyShared.model$MyBookmarks_ObjectTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeRecord = (function (_super) {
__extends(MyBookmarks_ObjectTypeRecord, _super);
function MyBookmarks_ObjectTypeRecord(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeRecord.attributesToDeclare = function () {
return [
this.attr("MyBookmarks_ObjectType", "myBookmarks_ObjectTypeAttr", "MyBookmarks_ObjectType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec());
}, true, Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_ObjectTypeRecord.fromStructure = function (str) {
return new MyBookmarks_ObjectTypeRecord(new MyBookmarks_ObjectTypeRecord.RecordClass({
myBookmarks_ObjectTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_ObjectTypeRecord._isAnonymousRecord = true;
MyBookmarks_ObjectTypeRecord.UniqueId = "c8e45004-2c67-ba1f-8483-7a5a6c10d5bc";
MyBookmarks_ObjectTypeRecord.init();
return MyBookmarks_ObjectTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MyBookmarks_ObjectTypeRecord = MyBookmarks_ObjectTypeRecord;

});
define("Connect2_LegacyShared.model$PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhotoRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoRecordList = (function (_super) {
__extends(PhotoRecordList, _super);
function PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoRecordList.itemType = Connect2_LegacySharedModel.PhotoRecord;
return PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoRecordList = PhotoRecordList;

});
define("Connect2_LegacyShared.model$CountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryRecord = (function (_super) {
__extends(CountryRecord, _super);
function CountryRecord(defaults) {
_super.apply(this, arguments);
}
CountryRecord.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CountryRec());
}, true, APIDomain_Directory_ISModel.CountryRec)
].concat(_super.attributesToDeclare.call(this));
};
CountryRecord.fromStructure = function (str) {
return new CountryRecord(new CountryRecord.RecordClass({
countryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CountryRecord._isAnonymousRecord = true;
CountryRecord.UniqueId = "ca5bf4ee-fb3d-ba53-00f5-83305fe3b8e6";
CountryRecord.init();
return CountryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.CountryRecord = CountryRecord;

});
define("Connect2_LegacyShared.model$UBT_AvatarSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_AvatarSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeList = (function (_super) {
__extends(UBT_AvatarSizeList, _super);
function UBT_AvatarSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeList.itemType = UBTConnectLibraryModel.UBT_AvatarSizeRec;
return UBT_AvatarSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_AvatarSizeList = UBT_AvatarSizeList;

});
define("Connect2_LegacyShared.model$HostConfig_FontRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontRecordList = (function (_super) {
__extends(HostConfig_FontRecordList, _super);
function HostConfig_FontRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontRecordList.itemType = Connect2_LegacySharedModel.HostConfig_FontRecord;
return HostConfig_FontRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontRecordList = HostConfig_FontRecordList;

});
define("Connect2_LegacyShared.model$MemberContactWithTimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MemberContactWithTimezoneRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MemberContactWithTimezoneRecordList = (function (_super) {
__extends(MemberContactWithTimezoneRecordList, _super);
function MemberContactWithTimezoneRecordList(defaults) {
_super.apply(this, arguments);
}
MemberContactWithTimezoneRecordList.itemType = Connect2_LegacySharedModel.MemberContactWithTimezoneRecord;
return MemberContactWithTimezoneRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MemberContactWithTimezoneRecordList = MemberContactWithTimezoneRecordList;

});
define("Connect2_LegacyShared.model$Share_GetShare_GET_ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Share_GetShare_GET_ResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Share_GetShare_GET_ResponseRecord = (function (_super) {
__extends(Share_GetShare_GET_ResponseRecord, _super);
function Share_GetShare_GET_ResponseRecord(defaults) {
_super.apply(this, arguments);
}
Share_GetShare_GET_ResponseRecord.attributesToDeclare = function () {
return [
this.attr("Share_GetShare_GET_Response", "share_GetShare_GET_ResponseAttr", "Share_GetShare_GET_Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Share_GetShare_GET_ResponseRec());
}, true, APIDomain_Directory_ISModel.Share_GetShare_GET_ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Share_GetShare_GET_ResponseRecord.fromStructure = function (str) {
return new Share_GetShare_GET_ResponseRecord(new Share_GetShare_GET_ResponseRecord.RecordClass({
share_GetShare_GET_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Share_GetShare_GET_ResponseRecord._isAnonymousRecord = true;
Share_GetShare_GET_ResponseRecord.UniqueId = "e5c92139-4f60-c97a-616e-e191ee7bf0f7";
Share_GetShare_GET_ResponseRecord.init();
return Share_GetShare_GET_ResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Share_GetShare_GET_ResponseRecord = Share_GetShare_GET_ResponseRecord;

});
define("Connect2_LegacyShared.model$Share_GetShare_GET_ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Share_GetShare_GET_ResponseRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Share_GetShare_GET_ResponseRecordList = (function (_super) {
__extends(Share_GetShare_GET_ResponseRecordList, _super);
function Share_GetShare_GET_ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
Share_GetShare_GET_ResponseRecordList.itemType = Connect2_LegacySharedModel.Share_GetShare_GET_ResponseRecord;
return Share_GetShare_GET_ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Share_GetShare_GET_ResponseRecordList = Share_GetShare_GET_ResponseRecordList;

});
define("Connect2_LegacyShared.model$DurationObjectList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_LegacyShared.model", "FullCalendarReactive.model$DurationObjectRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DurationObjectList = (function (_super) {
__extends(DurationObjectList, _super);
function DurationObjectList(defaults) {
_super.apply(this, arguments);
}
DurationObjectList.itemType = FullCalendarReactiveModel.DurationObjectRec;
return DurationObjectList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DurationObjectList = DurationObjectList;

});
define("Connect2_LegacyShared.model$MyBookmarks_ObjectTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MyBookmarks_ObjectTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeRecordList = (function (_super) {
__extends(MyBookmarks_ObjectTypeRecordList, _super);
function MyBookmarks_ObjectTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeRecordList.itemType = Connect2_LegacySharedModel.MyBookmarks_ObjectTypeRecord;
return MyBookmarks_ObjectTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MyBookmarks_ObjectTypeRecordList = MyBookmarks_ObjectTypeRecordList;

});
define("Connect2_LegacyShared.model$UI_DisplayOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UI_DisplayOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_DisplayOptionsRecordList = (function (_super) {
__extends(UI_DisplayOptionsRecordList, _super);
function UI_DisplayOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
UI_DisplayOptionsRecordList.itemType = Connect2_LegacySharedModel.UI_DisplayOptionsRecord;
return UI_DisplayOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_DisplayOptionsRecordList = UI_DisplayOptionsRecordList;

});
define("Connect2_LegacyShared.model$Householder_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Householder_MemberRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Householder_MemberRecord = (function (_super) {
__extends(Householder_MemberRecord, _super);
function Householder_MemberRecord(defaults) {
_super.apply(this, arguments);
}
Householder_MemberRecord.attributesToDeclare = function () {
return [
this.attr("Householder_Member", "householder_MemberAttr", "Householder_Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Householder_MemberRec());
}, true, APIDomain_Directory_ISModel.Householder_MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
Householder_MemberRecord.fromStructure = function (str) {
return new Householder_MemberRecord(new Householder_MemberRecord.RecordClass({
householder_MemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Householder_MemberRecord._isAnonymousRecord = true;
Householder_MemberRecord.UniqueId = "cec076a0-962e-2e49-dcdc-340914fdcaa8";
Householder_MemberRecord.init();
return Householder_MemberRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.Householder_MemberRecord = Householder_MemberRecord;

});
define("Connect2_LegacyShared.model$SubdivisionExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SubdivisionExtendedRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRecordList = (function (_super) {
__extends(SubdivisionExtendedRecordList, _super);
function SubdivisionExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRecordList.itemType = Connect2_LegacySharedModel.SubdivisionExtendedRecord;
return SubdivisionExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SubdivisionExtendedRecordList = SubdivisionExtendedRecordList;

});
define("Connect2_LegacyShared.model$UI_ShareableObject_GenericList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericList = (function (_super) {
__extends(UI_ShareableObject_GenericList, _super);
function UI_ShareableObject_GenericList(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericList.itemType = Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec;
return UI_ShareableObject_GenericList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UI_ShareableObject_GenericList = UI_ShareableObject_GenericList;

});
define("Connect2_LegacyShared.model$GetSubdivisionHouseholdsV2ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$GetSubdivisionHouseholdsV2ResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholdsV2ResponseList = (function (_super) {
__extends(GetSubdivisionHouseholdsV2ResponseList, _super);
function GetSubdivisionHouseholdsV2ResponseList(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsV2ResponseList.itemType = APIDomain_Directory_ISModel.GetSubdivisionHouseholdsV2ResponseRec;
return GetSubdivisionHouseholdsV2ResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.GetSubdivisionHouseholdsV2ResponseList = GetSubdivisionHouseholdsV2ResponseList;

});
define("Connect2_LegacyShared.model$UBT_FlexDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_FlexDirectionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionList = (function (_super) {
__extends(UBT_FlexDirectionList, _super);
function UBT_FlexDirectionList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionList.itemType = UBTConnectLibraryModel.UBT_FlexDirectionRec;
return UBT_FlexDirectionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_FlexDirectionList = UBT_FlexDirectionList;

});
define("Connect2_LegacyShared.model$CacheControl_UserInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheControl_UserInformationRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationRecordList = (function (_super) {
__extends(CacheControl_UserInformationRecordList, _super);
function CacheControl_UserInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationRecordList.itemType = Connect2_LegacySharedModel.CacheControl_UserInformationRecord;
return CacheControl_UserInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheControl_UserInformationRecordList = CacheControl_UserInformationRecordList;

});
define("Connect2_LegacyShared.model$MessageTemplateMessageInstanceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageTemplateRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Comms_CS.model$MessageInstanceRec"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateMessageInstanceRecord = (function (_super) {
__extends(MessageTemplateMessageInstanceRecord, _super);
function MessageTemplateMessageInstanceRecord(defaults) {
_super.apply(this, arguments);
}
MessageTemplateMessageInstanceRecord.attributesToDeclare = function () {
return [
this.attr("MessageTemplate", "messageTemplateAttr", "MessageTemplate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageTemplateRec());
}, true, Comms_CSModel.MessageTemplateRec), 
this.attr("MessageInstance", "messageInstanceAttr", "MessageInstance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Comms_CSModel.MessageInstanceRec());
}, true, Comms_CSModel.MessageInstanceRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageTemplateMessageInstanceRecord._isAnonymousRecord = true;
MessageTemplateMessageInstanceRecord.UniqueId = "e24c5cb1-b69d-6bf3-c9b4-8447a4e225f9";
MessageTemplateMessageInstanceRecord.init();
return MessageTemplateMessageInstanceRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.MessageTemplateMessageInstanceRecord = MessageTemplateMessageInstanceRecord;

});
define("Connect2_LegacyShared.model$MessageTemplateMessageInstanceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageTemplateMessageInstanceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateMessageInstanceRecordList = (function (_super) {
__extends(MessageTemplateMessageInstanceRecordList, _super);
function MessageTemplateMessageInstanceRecordList(defaults) {
_super.apply(this, arguments);
}
MessageTemplateMessageInstanceRecordList.itemType = Connect2_LegacySharedModel.MessageTemplateMessageInstanceRecord;
return MessageTemplateMessageInstanceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageTemplateMessageInstanceRecordList = MessageTemplateMessageInstanceRecordList;

});
define("Connect2_LegacyShared.model$Directory_CountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_CountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_CountryList = (function (_super) {
__extends(Directory_CountryList, _super);
function Directory_CountryList(defaults) {
_super.apply(this, arguments);
}
Directory_CountryList.itemType = APIDomain_Directory_ISModel.Directory_CountryRec;
return Directory_CountryList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_CountryList = Directory_CountryList;

});
define("Connect2_LegacyShared.model$DirectoryCacheTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeRec = (function (_super) {
__extends(DirectoryCacheTypeRec, _super);
function DirectoryCacheTypeRec(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryCacheTypeRec.fromStructure = function (str) {
return new DirectoryCacheTypeRec(new DirectoryCacheTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryCacheTypeRec.init();
return DirectoryCacheTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DirectoryCacheTypeRec = DirectoryCacheTypeRec;

});
define("Connect2_LegacyShared.model$DirectoryCacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryCacheTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeRecord = (function (_super) {
__extends(DirectoryCacheTypeRecord, _super);
function DirectoryCacheTypeRecord(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeRecord.attributesToDeclare = function () {
return [
this.attr("DirectoryCacheType", "directoryCacheTypeAttr", "DirectoryCacheType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.DirectoryCacheTypeRec());
}, true, Connect2_LegacySharedModel.DirectoryCacheTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryCacheTypeRecord.fromStructure = function (str) {
return new DirectoryCacheTypeRecord(new DirectoryCacheTypeRecord.RecordClass({
directoryCacheTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryCacheTypeRecord._isAnonymousRecord = true;
DirectoryCacheTypeRecord.UniqueId = "d158adf1-bb7f-ea7a-8fc0-44933ba4220e";
DirectoryCacheTypeRecord.init();
return DirectoryCacheTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DirectoryCacheTypeRecord = DirectoryCacheTypeRecord;

});
define("Connect2_LegacyShared.model$Connect_Subscription_RegionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_LegacyShared.model", "Connect_CommonEntities_DB.model$Connect_Subscription_RegionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionList = (function (_super) {
__extends(Connect_Subscription_RegionList, _super);
function Connect_Subscription_RegionList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionList.itemType = Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec;
return Connect_Subscription_RegionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Connect_Subscription_RegionList = Connect_Subscription_RegionList;

});
define("Connect2_LegacyShared.model$SizeOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SizeOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SizeOptionsRecordList = (function (_super) {
__extends(SizeOptionsRecordList, _super);
function SizeOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
SizeOptionsRecordList.itemType = Connect2_LegacySharedModel.SizeOptionsRecord;
return SizeOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SizeOptionsRecordList = SizeOptionsRecordList;

});
define("Connect2_LegacyShared.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$PositionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.PositionRec());
}, true, OutSystemsUI_2_23Model.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "d2de5608-cd0b-09c9-dac8-81bb66d10271";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.PositionRecord = PositionRecord;

});
define("Connect2_LegacyShared.model$AppManager_DeviceContextList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "Connect2_LegacyShared.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextList = (function (_super) {
__extends(AppManager_DeviceContextList, _super);
function AppManager_DeviceContextList(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextList.itemType = UBT_AppManager_CSModel.AppManager_DeviceContextRec;
return AppManager_DeviceContextList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AppManager_DeviceContextList = AppManager_DeviceContextList;

});
define("Connect2_LegacyShared.model$ImageDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$ImageDataRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageDataRecord = (function (_super) {
__extends(ImageDataRecord, _super);
function ImageDataRecord(defaults) {
_super.apply(this, arguments);
}
ImageDataRecord.attributesToDeclare = function () {
return [
this.attr("ImageData", "imageDataAttr", "ImageData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ImageDataRec());
}, true, APIDomain_Directory_ISModel.ImageDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageDataRecord.fromStructure = function (str) {
return new ImageDataRecord(new ImageDataRecord.RecordClass({
imageDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageDataRecord._isAnonymousRecord = true;
ImageDataRecord.UniqueId = "f98be347-1fa7-061c-67b0-0d46eff090b4";
ImageDataRecord.init();
return ImageDataRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.ImageDataRecord = ImageDataRecord;

});
define("Connect2_LegacyShared.model$ImageDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageDataRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageDataRecordList = (function (_super) {
__extends(ImageDataRecordList, _super);
function ImageDataRecordList(defaults) {
_super.apply(this, arguments);
}
ImageDataRecordList.itemType = Connect2_LegacySharedModel.ImageDataRecord;
return ImageDataRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageDataRecordList = ImageDataRecordList;

});
define("Connect2_LegacyShared.model$TimezoneList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TimezoneList = (function (_super) {
__extends(TimezoneList, _super);
function TimezoneList(defaults) {
_super.apply(this, arguments);
}
TimezoneList.itemType = APIDomain_Directory_ISModel.TimezoneRec;
return TimezoneList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TimezoneList = TimezoneList;

});
define("Connect2_LegacyShared.model$Directory_PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_PhotoList = (function (_super) {
__extends(Directory_PhotoList, _super);
function Directory_PhotoList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoList.itemType = APIDomain_Directory_ISModel.Directory_PhotoRec;
return Directory_PhotoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_PhotoList = Directory_PhotoList;

});
define("Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList = (function (_super) {
__extends(MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList, _super);
function MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList(defaults) {
_super.apply(this, arguments);
}
MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList.itemType = Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecord;
return MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList = MessagePriorityMessageContentMessageTemplateMessageSenderTargetMessageInstanceAdaptiveCardJSONUserRecordList;

});
define("Connect2_LegacyShared.model$SpacingOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$SpacingOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpacingOptionsRecord = (function (_super) {
__extends(SpacingOptionsRecord, _super);
function SpacingOptionsRecord(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsRecord.attributesToDeclare = function () {
return [
this.attr("SpacingOptions", "spacingOptionsAttr", "SpacingOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, true, UBTConnectLibraryModel.SpacingOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
SpacingOptionsRecord.fromStructure = function (str) {
return new SpacingOptionsRecord(new SpacingOptionsRecord.RecordClass({
spacingOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpacingOptionsRecord._isAnonymousRecord = true;
SpacingOptionsRecord.UniqueId = "d5ed874f-6776-aae4-f3c6-1ea265e33181";
SpacingOptionsRecord.init();
return SpacingOptionsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.SpacingOptionsRecord = SpacingOptionsRecord;

});
define("Connect2_LegacyShared.model$SpacingOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SpacingOptionsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SpacingOptionsRecordList = (function (_super) {
__extends(SpacingOptionsRecordList, _super);
function SpacingOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsRecordList.itemType = Connect2_LegacySharedModel.SpacingOptionsRecord;
return SpacingOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SpacingOptionsRecordList = SpacingOptionsRecordList;

});
define("Connect2_LegacyShared.model$PhoneCallInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PhoneCallInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhoneCallInfoList = (function (_super) {
__extends(PhoneCallInfoList, _super);
function PhoneCallInfoList(defaults) {
_super.apply(this, arguments);
}
PhoneCallInfoList.itemType = Connect2_LegacySharedModel.PhoneCallInfoRec;
return PhoneCallInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhoneCallInfoList = PhoneCallInfoList;

});
define("Connect2_LegacyShared.model$ShareUserListTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareUserListTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareUserListTypeRecordList = (function (_super) {
__extends(ShareUserListTypeRecordList, _super);
function ShareUserListTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ShareUserListTypeRecordList.itemType = Connect2_LegacySharedModel.ShareUserListTypeRecord;
return ShareUserListTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ShareUserListTypeRecordList = ShareUserListTypeRecordList;

});
define("Connect2_LegacyShared.model$HouseholdListItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HouseholdListItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HouseholdListItemRecordList = (function (_super) {
__extends(HouseholdListItemRecordList, _super);
function HouseholdListItemRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdListItemRecordList.itemType = Connect2_LegacySharedModel.HouseholdListItemRecord;
return HouseholdListItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HouseholdListItemRecordList = HouseholdListItemRecordList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_UserCurrent_SubscriptionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecordList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecordList, _super);
function Directory_UserCurrent_SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecordList.itemType = Connect2_LegacySharedModel.Directory_UserCurrent_SubscriptionRecord;
return Directory_UserCurrent_SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_SubscriptionRecordList = Directory_UserCurrent_SubscriptionRecordList;

});
define("Connect2_LegacyShared.model$ShareProfileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareProfileRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareProfileRecordList = (function (_super) {
__extends(ShareProfileRecordList, _super);
function ShareProfileRecordList(defaults) {
_super.apply(this, arguments);
}
ShareProfileRecordList.itemType = Connect2_LegacySharedModel.ShareProfileRecord;
return ShareProfileRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ShareProfileRecordList = ShareProfileRecordList;

});
define("Connect2_LegacyShared.model$ParameterNameList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$ParameterNameRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ParameterNameList = (function (_super) {
__extends(ParameterNameList, _super);
function ParameterNameList(defaults) {
_super.apply(this, arguments);
}
ParameterNameList.itemType = Comms_CSModel.ParameterNameRec;
return ParameterNameList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ParameterNameList = ParameterNameList;

});
define("Connect2_LegacyShared.model$DefaultCountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$DefaultCountryRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DefaultCountryRecord = (function (_super) {
__extends(DefaultCountryRecord, _super);
function DefaultCountryRecord(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRecord.attributesToDeclare = function () {
return [
this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DefaultCountryRec());
}, true, APIDomain_Directory_ISModel.DefaultCountryRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultCountryRecord.fromStructure = function (str) {
return new DefaultCountryRecord(new DefaultCountryRecord.RecordClass({
defaultCountryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultCountryRecord._isAnonymousRecord = true;
DefaultCountryRecord.UniqueId = "f0cca3d9-97dc-9f7c-180c-008c0a8d209e";
DefaultCountryRecord.init();
return DefaultCountryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.DefaultCountryRecord = DefaultCountryRecord;

});
define("Connect2_LegacyShared.model$DefaultCountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DefaultCountryRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DefaultCountryRecordList = (function (_super) {
__extends(DefaultCountryRecordList, _super);
function DefaultCountryRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRecordList.itemType = Connect2_LegacySharedModel.DefaultCountryRecord;
return DefaultCountryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DefaultCountryRecordList = DefaultCountryRecordList;

});
define("Connect2_LegacyShared.model$MessageInstanceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageInstanceRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageInstanceRecordList = (function (_super) {
__extends(MessageInstanceRecordList, _super);
function MessageInstanceRecordList(defaults) {
_super.apply(this, arguments);
}
MessageInstanceRecordList.itemType = Connect2_LegacySharedModel.MessageInstanceRecord;
return MessageInstanceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageInstanceRecordList = MessageInstanceRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_SpacingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_SpacingRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingList = (function (_super) {
__extends(HostConfig_SpacingList, _super);
function HostConfig_SpacingList(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingList.itemType = Connect2_LegacySharedModel.HostConfig_SpacingRec;
return HostConfig_SpacingList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_SpacingList = HostConfig_SpacingList;

});
define("Connect2_LegacyShared.model$Directory_LocalityCommunityBusinessList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityCommunityBusinessRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityCommunityBusinessList = (function (_super) {
__extends(Directory_LocalityCommunityBusinessList, _super);
function Directory_LocalityCommunityBusinessList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityCommunityBusinessList.itemType = APIDomain_Directory_ISModel.Directory_LocalityCommunityBusinessRec;
return Directory_LocalityCommunityBusinessList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityCommunityBusinessList = Directory_LocalityCommunityBusinessList;

});
define("Connect2_LegacyShared.model$Directory_CountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_CountryRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_CountryRecordList = (function (_super) {
__extends(Directory_CountryRecordList, _super);
function Directory_CountryRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_CountryRecordList.itemType = Connect2_LegacySharedModel.Directory_CountryRecord;
return Directory_CountryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_CountryRecordList = Directory_CountryRecordList;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoResultList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedPhotoResultRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultList = (function (_super) {
__extends(BulkSignedPhotoResultList, _super);
function BulkSignedPhotoResultList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultList.itemType = Connect2_LegacySharedModel.BulkSignedPhotoResultRec;
return BulkSignedPhotoResultList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedPhotoResultList = BulkSignedPhotoResultList;

});
define("Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardActionSubmitDataRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardActionSubmitDataList = (function (_super) {
__extends(AdaptiveCardActionSubmitDataList, _super);
function AdaptiveCardActionSubmitDataList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardActionSubmitDataList.itemType = Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataRec;
return AdaptiveCardActionSubmitDataList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AdaptiveCardActionSubmitDataList = AdaptiveCardActionSubmitDataList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_UserCurrentRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecordList = (function (_super) {
__extends(Directory_UserCurrentRecordList, _super);
function Directory_UserCurrentRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecordList.itemType = Connect2_LegacySharedModel.Directory_UserCurrentRecord;
return Directory_UserCurrentRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrentRecordList = Directory_UserCurrentRecordList;

});
define("Connect2_LegacyShared.model$BulkSignedImagesParametersList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImagesParametersRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersList = (function (_super) {
__extends(BulkSignedImagesParametersList, _super);
function BulkSignedImagesParametersList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersList.itemType = Connect2_LegacySharedModel.BulkSignedImagesParametersRec;
return BulkSignedImagesParametersList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedImagesParametersList = BulkSignedImagesParametersList;

});
define("Connect2_LegacyShared.model$HallPhotoExtensiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRecord = (function (_super) {
__extends(HallPhotoExtensiveRecord, _super);
function HallPhotoExtensiveRecord(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRecord.attributesToDeclare = function () {
return [
this.attr("HallPhotoExtensive", "hallPhotoExtensiveAttr", "HallPhotoExtensive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoExtensiveRec());
}, true, APIDomain_Directory_ISModel.HallPhotoExtensiveRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoExtensiveRecord.fromStructure = function (str) {
return new HallPhotoExtensiveRecord(new HallPhotoExtensiveRecord.RecordClass({
hallPhotoExtensiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HallPhotoExtensiveRecord._isAnonymousRecord = true;
HallPhotoExtensiveRecord.UniqueId = "db3af86a-07d8-c8f8-d098-ed27ef4636ae";
HallPhotoExtensiveRecord.init();
return HallPhotoExtensiveRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HallPhotoExtensiveRecord = HallPhotoExtensiveRecord;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_GeographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Directory_UserCurrent_GeographyRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecordList = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecordList, _super);
function Directory_UserCurrent_GeographyRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecordList.itemType = Connect2_LegacySharedModel.Directory_UserCurrent_GeographyRecord;
return Directory_UserCurrent_GeographyRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_GeographyRecordList = Directory_UserCurrent_GeographyRecordList;

});
define("Connect2_LegacyShared.model$MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTypeRecordList = (function (_super) {
__extends(MessageTypeRecordList, _super);
function MessageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MessageTypeRecordList.itemType = Connect2_LegacySharedModel.MessageTypeRecord;
return MessageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageTypeRecordList = MessageTypeRecordList;

});
define("Connect2_LegacyShared.model$ImageBorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$ImageBorderOptionsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsList = (function (_super) {
__extends(ImageBorderOptionsList, _super);
function ImageBorderOptionsList(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsList.itemType = UBTConnectLibraryModel.ImageBorderOptionsRec;
return ImageBorderOptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageBorderOptionsList = ImageBorderOptionsList;

});
define("Connect2_LegacyShared.model$CDN4List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$CDN4Rec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDN4List = (function (_super) {
__extends(CDN4List, _super);
function CDN4List(defaults) {
_super.apply(this, arguments);
}
CDN4List.itemType = APIDomain_Directory_ISModel.CDN4Rec;
return CDN4List;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CDN4List = CDN4List;

});
define("Connect2_LegacyShared.model$UBT_Icons2izeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_IconSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_Icons2izeList = (function (_super) {
__extends(UBT_Icons2izeList, _super);
function UBT_Icons2izeList(defaults) {
_super.apply(this, arguments);
}
UBT_Icons2izeList.itemType = UBTConnectLibraryModel.UBT_IconSizeRec;
return UBT_Icons2izeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_Icons2izeList = UBT_Icons2izeList;

});
define("Connect2_LegacyShared.model$AdaptiveCardsConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardsConfigRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigRecordList = (function (_super) {
__extends(AdaptiveCardsConfigRecordList, _super);
function AdaptiveCardsConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigRecordList.itemType = Connect2_LegacySharedModel.AdaptiveCardsConfigRecord;
return AdaptiveCardsConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AdaptiveCardsConfigRecordList = AdaptiveCardsConfigRecordList;

});
define("Connect2_LegacyShared.model$SignedImagesList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$SignedImagesRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedImagesList = (function (_super) {
__extends(SignedImagesList, _super);
function SignedImagesList(defaults) {
_super.apply(this, arguments);
}
SignedImagesList.itemType = APIDomain_Directory_ISModel.SignedImagesRec;
return SignedImagesList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SignedImagesList = SignedImagesList;

});
define("Connect2_LegacyShared.model$UBT_Icons2izeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_IconSizeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_Icons2izeRecord = (function (_super) {
__extends(UBT_Icons2izeRecord, _super);
function UBT_Icons2izeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_Icons2izeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_IconSize", "uBT_IconSizeAttr", "UBT_Icons2ize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_IconSizeRec());
}, true, UBTConnectLibraryModel.UBT_IconSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_Icons2izeRecord.fromStructure = function (str) {
return new UBT_Icons2izeRecord(new UBT_Icons2izeRecord.RecordClass({
uBT_IconSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_Icons2izeRecord._isAnonymousRecord = true;
UBT_Icons2izeRecord.UniqueId = "f52b03bd-2c02-fa41-c893-23a4873ea1f7";
UBT_Icons2izeRecord.init();
return UBT_Icons2izeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.UBT_Icons2izeRecord = UBT_Icons2izeRecord;

});
define("Connect2_LegacyShared.model$UBT_Icons2izeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$UBT_Icons2izeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_Icons2izeRecordList = (function (_super) {
__extends(UBT_Icons2izeRecordList, _super);
function UBT_Icons2izeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_Icons2izeRecordList.itemType = Connect2_LegacySharedModel.UBT_Icons2izeRecord;
return UBT_Icons2izeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_Icons2izeRecordList = UBT_Icons2izeRecordList;

});
define("Connect2_LegacyShared.model$DirectoryAPIFilterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryAPIFilterRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterRecordList = (function (_super) {
__extends(DirectoryAPIFilterRecordList, _super);
function DirectoryAPIFilterRecordList(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterRecordList.itemType = Connect2_LegacySharedModel.DirectoryAPIFilterRecord;
return DirectoryAPIFilterRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DirectoryAPIFilterRecordList = DirectoryAPIFilterRecordList;

});
define("Connect2_LegacyShared.model$ImageSigningSizeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageSigningSizeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeList = (function (_super) {
__extends(ImageSigningSizeList, _super);
function ImageSigningSizeList(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeList.itemType = Connect2_LegacySharedModel.ImageSigningSizeRec;
return ImageSigningSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageSigningSizeList = ImageSigningSizeList;

});
define("Connect2_LegacyShared.model$TextTextText1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$TextTextTextRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var TextTextText1RecordList = (function (_super) {
__extends(TextTextText1RecordList, _super);
function TextTextText1RecordList(defaults) {
_super.apply(this, arguments);
}
TextTextText1RecordList.itemType = Connect2_LegacySharedModel.TextTextTextRecord;
return TextTextText1RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.TextTextText1RecordList = TextTextText1RecordList;

});
define("Connect2_LegacyShared.model$ApplicationEvents_AlphaRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ApplicationEvents_AlphaRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ApplicationEvents_AlphaRecordList = (function (_super) {
__extends(ApplicationEvents_AlphaRecordList, _super);
function ApplicationEvents_AlphaRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationEvents_AlphaRecordList.itemType = Connect2_LegacySharedModel.ApplicationEvents_AlphaRecord;
return ApplicationEvents_AlphaRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ApplicationEvents_AlphaRecordList = ApplicationEvents_AlphaRecordList;

});
define("Connect2_LegacyShared.model$CacheableLocalityInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationList = (function (_super) {
__extends(CacheableLocalityInformationList, _super);
function CacheableLocalityInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationList.itemType = Connect2_LegacySharedModel.CacheableLocalityInformationRec;
return CacheableLocalityInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableLocalityInformationList = CacheableLocalityInformationList;

});
define("Connect2_LegacyShared.model$SignedPhotoCacheRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$SignedPhotoCacheRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var SignedPhotoCacheRecordList = (function (_super) {
__extends(SignedPhotoCacheRecordList, _super);
function SignedPhotoCacheRecordList(defaults) {
_super.apply(this, arguments);
}
SignedPhotoCacheRecordList.itemType = Connect2_LegacySharedModel.SignedPhotoCacheRecord;
return SignedPhotoCacheRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.SignedPhotoCacheRecordList = SignedPhotoCacheRecordList;

});
define("Connect2_LegacyShared.model$MessageTemplateList", ["exports", "OutSystems/ClientRuntime/Main", "Comms_CS.model", "Connect2_LegacyShared.model", "Comms_CS.model$MessageTemplateRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Comms_CS"], function (exports, OutSystems, Comms_CSModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageTemplateList = (function (_super) {
__extends(MessageTemplateList, _super);
function MessageTemplateList(defaults) {
_super.apply(this, arguments);
}
MessageTemplateList.itemType = Comms_CSModel.MessageTemplateRec;
return MessageTemplateList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageTemplateList = MessageTemplateList;

});
define("Connect2_LegacyShared.model$HostConfig_SpacingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_SpacingRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingRecord = (function (_super) {
__extends(HostConfig_SpacingRecord, _super);
function HostConfig_SpacingRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_Spacing", "hostConfig_SpacingAttr", "HostConfig_Spacing", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfig_SpacingRec());
}, true, Connect2_LegacySharedModel.HostConfig_SpacingRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_SpacingRecord.fromStructure = function (str) {
return new HostConfig_SpacingRecord(new HostConfig_SpacingRecord.RecordClass({
hostConfig_SpacingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_SpacingRecord._isAnonymousRecord = true;
HostConfig_SpacingRecord.UniqueId = "e2c69ee1-4e9b-0024-db96-1f5a31fcd299";
HostConfig_SpacingRecord.init();
return HostConfig_SpacingRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.HostConfig_SpacingRecord = HostConfig_SpacingRecord;

});
define("Connect2_LegacyShared.model$AdaptiveCardJSONRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$AdaptiveCardJSONRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var AdaptiveCardJSONRecordList = (function (_super) {
__extends(AdaptiveCardJSONRecordList, _super);
function AdaptiveCardJSONRecordList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardJSONRecordList.itemType = Connect2_LegacySharedModel.AdaptiveCardJSONRecord;
return AdaptiveCardJSONRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.AdaptiveCardJSONRecordList = AdaptiveCardJSONRecordList;

});
define("Connect2_LegacyShared.model$CacheableLocalityInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRecordList = (function (_super) {
__extends(CacheableLocalityInformationRecordList, _super);
function CacheableLocalityInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRecordList.itemType = Connect2_LegacySharedModel.CacheableLocalityInformationRecord;
return CacheableLocalityInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CacheableLocalityInformationRecordList = CacheableLocalityInformationRecordList;

});
define("Connect2_LegacyShared.model$HostConfig_FontWeightsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_FontWeightsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsRecordList = (function (_super) {
__extends(HostConfig_FontWeightsRecordList, _super);
function HostConfig_FontWeightsRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsRecordList.itemType = Connect2_LegacySharedModel.HostConfig_FontWeightsRecord;
return HostConfig_FontWeightsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_FontWeightsRecordList = HostConfig_FontWeightsRecordList;

});
define("Connect2_LegacyShared.model$LocalConnectApplicationEventsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalConnectApplicationEventsList = (function (_super) {
__extends(LocalConnectApplicationEventsList, _super);
function LocalConnectApplicationEventsList(defaults) {
_super.apply(this, arguments);
}
LocalConnectApplicationEventsList.itemType = Connect2_LegacySharedModel.LocalConnectApplicationEventsRec;
return LocalConnectApplicationEventsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalConnectApplicationEventsList = LocalConnectApplicationEventsList;

});
define("Connect2_LegacyShared.model$CountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CountryRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryRecordList = (function (_super) {
__extends(CountryRecordList, _super);
function CountryRecordList(defaults) {
_super.apply(this, arguments);
}
CountryRecordList.itemType = Connect2_LegacySharedModel.CountryRecord;
return CountryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CountryRecordList = CountryRecordList;

});
define("Connect2_LegacyShared.model$LocalConnectApplicationEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalConnectApplicationEventsRecordList = (function (_super) {
__extends(LocalConnectApplicationEventsRecordList, _super);
function LocalConnectApplicationEventsRecordList(defaults) {
_super.apply(this, arguments);
}
LocalConnectApplicationEventsRecordList.itemType = Connect2_LegacySharedModel.LocalConnectApplicationEventsRecord;
return LocalConnectApplicationEventsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList = LocalConnectApplicationEventsRecordList;

});
define("Connect2_LegacyShared.model$DirectoryCacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryCacheTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeList = (function (_super) {
__extends(DirectoryCacheTypeList, _super);
function DirectoryCacheTypeList(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeList.itemType = Connect2_LegacySharedModel.DirectoryCacheTypeRec;
return DirectoryCacheTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DirectoryCacheTypeList = DirectoryCacheTypeList;

});
define("Connect2_LegacyShared.model$Connect_Subscription_PlanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Connect_Subscription_PlanRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanRecordList = (function (_super) {
__extends(Connect_Subscription_PlanRecordList, _super);
function Connect_Subscription_PlanRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanRecordList.itemType = Connect2_LegacySharedModel.Connect_Subscription_PlanRecord;
return Connect_Subscription_PlanRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Connect_Subscription_PlanRecordList = Connect_Subscription_PlanRecordList;

});
define("Connect2_LegacyShared.model$RecentSearchTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$RecentSearchTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var RecentSearchTypeRecordList = (function (_super) {
__extends(RecentSearchTypeRecordList, _super);
function RecentSearchTypeRecordList(defaults) {
_super.apply(this, arguments);
}
RecentSearchTypeRecordList.itemType = Connect2_LegacySharedModel.RecentSearchTypeRecord;
return RecentSearchTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.RecentSearchTypeRecordList = RecentSearchTypeRecordList;

});
define("Connect2_LegacyShared.model$CallbacksRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CallbacksRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallbacksRecordList = (function (_super) {
__extends(CallbacksRecordList, _super);
function CallbacksRecordList(defaults) {
_super.apply(this, arguments);
}
CallbacksRecordList.itemType = Connect2_LegacySharedModel.CallbacksRecord;
return CallbacksRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CallbacksRecordList = CallbacksRecordList;

});
define("Connect2_LegacyShared.model$ImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ImageSizeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ImageSizeRecordList = (function (_super) {
__extends(ImageSizeRecordList, _super);
function ImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
ImageSizeRecordList.itemType = Connect2_LegacySharedModel.ImageSizeRecord;
return ImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ImageSizeRecordList = ImageSizeRecordList;

});
define("Connect2_LegacyShared.model$MyBookmarks_GroupList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupList = (function (_super) {
__extends(MyBookmarks_GroupList, _super);
function MyBookmarks_GroupList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupList.itemType = Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec;
return MyBookmarks_GroupList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MyBookmarks_GroupList = MyBookmarks_GroupList;

});
define("Connect2_LegacyShared.model$UBT_VerticalAlignList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_VerticalAlignRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignList = (function (_super) {
__extends(UBT_VerticalAlignList, _super);
function UBT_VerticalAlignList(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignList.itemType = UBTConnectLibraryModel.UBT_VerticalAlignRec;
return UBT_VerticalAlignList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_VerticalAlignList = UBT_VerticalAlignList;

});
define("Connect2_LegacyShared.model$CallInfoStructureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CallInfoStructureRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CallInfoStructureRecordList = (function (_super) {
__extends(CallInfoStructureRecordList, _super);
function CallInfoStructureRecordList(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureRecordList.itemType = Connect2_LegacySharedModel.CallInfoStructureRecord;
return CallInfoStructureRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CallInfoStructureRecordList = CallInfoStructureRecordList;

});
define("Connect2_LegacyShared.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$PositionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = Connect2_LegacySharedModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PositionRecordList = PositionRecordList;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedPhotoParametersRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersRecord = (function (_super) {
__extends(BulkSignedPhotoParametersRecord, _super);
function BulkSignedPhotoParametersRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedPhotoParameters", "bulkSignedPhotoParametersAttr", "BulkSignedPhotoParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BulkSignedPhotoParametersRec());
}, true, Connect2_LegacySharedModel.BulkSignedPhotoParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedPhotoParametersRecord.fromStructure = function (str) {
return new BulkSignedPhotoParametersRecord(new BulkSignedPhotoParametersRecord.RecordClass({
bulkSignedPhotoParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedPhotoParametersRecord._isAnonymousRecord = true;
BulkSignedPhotoParametersRecord.UniqueId = "f4a323b9-d637-3d0a-e7c4-f8394442e901";
BulkSignedPhotoParametersRecord.init();
return BulkSignedPhotoParametersRecord;
})(OS.DataTypes.GenericRecord);
Connect2_LegacySharedModel.BulkSignedPhotoParametersRecord = BulkSignedPhotoParametersRecord;

});
define("Connect2_LegacyShared.model$BulkSignedPhotoParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedPhotoParametersRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersRecordList = (function (_super) {
__extends(BulkSignedPhotoParametersRecordList, _super);
function BulkSignedPhotoParametersRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersRecordList.itemType = Connect2_LegacySharedModel.BulkSignedPhotoParametersRecord;
return BulkSignedPhotoParametersRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BulkSignedPhotoParametersRecordList = BulkSignedPhotoParametersRecordList;

});
define("Connect2_LegacyShared.model$Directory_LocalityStatisticsList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_LocalityStatisticsRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_LocalityStatisticsList = (function (_super) {
__extends(Directory_LocalityStatisticsList, _super);
function Directory_LocalityStatisticsList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalityStatisticsList.itemType = APIDomain_Directory_ISModel.Directory_LocalityStatisticsRec;
return Directory_LocalityStatisticsList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_LocalityStatisticsList = Directory_LocalityStatisticsList;

});
define("Connect2_LegacyShared.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Connect2_LegacyShared.model", "ServiceCenter.model$UserRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UserList = UserList;

});
define("Connect2_LegacyShared.model$HostConfig_SpacingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HostConfig_SpacingRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingRecordList = (function (_super) {
__extends(HostConfig_SpacingRecordList, _super);
function HostConfig_SpacingRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingRecordList.itemType = Connect2_LegacySharedModel.HostConfig_SpacingRecord;
return HostConfig_SpacingRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HostConfig_SpacingRecordList = HostConfig_SpacingRecordList;

});
define("Connect2_LegacyShared.model$PhotoURLList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoURLList = (function (_super) {
__extends(PhotoURLList, _super);
function PhotoURLList(defaults) {
_super.apply(this, arguments);
}
PhotoURLList.itemType = APIDomain_Directory_ISModel.PhotoURLRec;
return PhotoURLList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoURLList = PhotoURLList;

});
define("Connect2_LegacyShared.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.model$MenuActionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUI_2_23Model.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MenuActionList = MenuActionList;

});
define("Connect2_LegacyShared.model$LocalBookmarkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalBookmarkRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRecordList = (function (_super) {
__extends(LocalBookmarkRecordList, _super);
function LocalBookmarkRecordList(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRecordList.itemType = Connect2_LegacySharedModel.LocalBookmarkRecord;
return LocalBookmarkRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalBookmarkRecordList = LocalBookmarkRecordList;

});
define("Connect2_LegacyShared.model$UBT_ColumnBehaviourList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_LegacyShared.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourList = (function (_super) {
__extends(UBT_ColumnBehaviourList, _super);
function UBT_ColumnBehaviourList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourList.itemType = UBTConnectLibraryModel.UBT_ColumnBehaviourRec;
return UBT_ColumnBehaviourList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_ColumnBehaviourList = UBT_ColumnBehaviourList;

});
define("Connect2_LegacyShared.model$ShareItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareItemRecordList = (function (_super) {
__extends(ShareItemRecordList, _super);
function ShareItemRecordList(defaults) {
_super.apply(this, arguments);
}
ShareItemRecordList.itemType = Connect2_LegacySharedModel.ShareItemRecord;
return ShareItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ShareItemRecordList = ShareItemRecordList;

});
define("Connect2_LegacyShared.model$LocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalityRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var LocalityRecordList = (function (_super) {
__extends(LocalityRecordList, _super);
function LocalityRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityRecordList.itemType = Connect2_LegacySharedModel.LocalityRecord;
return LocalityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.LocalityRecordList = LocalityRecordList;

});
define("Connect2_LegacyShared.model$CountryWithMapPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CountryWithMapPositionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRecordList = (function (_super) {
__extends(CountryWithMapPositionRecordList, _super);
function CountryWithMapPositionRecordList(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRecordList.itemType = Connect2_LegacySharedModel.CountryWithMapPositionRecord;
return CountryWithMapPositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CountryWithMapPositionRecordList = CountryWithMapPositionRecordList;

});
define("Connect2_LegacyShared.model$Options2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Options2Record"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Options2RecordList = (function (_super) {
__extends(Options2RecordList, _super);
function Options2RecordList(defaults) {
_super.apply(this, arguments);
}
Options2RecordList.itemType = Connect2_LegacySharedModel.Options2Record;
return Options2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Options2RecordList = Options2RecordList;

});
define("Connect2_LegacyShared.model$DirectoryCacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$DirectoryCacheTypeRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeRecordList = (function (_super) {
__extends(DirectoryCacheTypeRecordList, _super);
function DirectoryCacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeRecordList.itemType = Connect2_LegacySharedModel.DirectoryCacheTypeRecord;
return DirectoryCacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.DirectoryCacheTypeRecordList = DirectoryCacheTypeRecordList;

});
define("Connect2_LegacyShared.model$CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CDNRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CDNRecordList = (function (_super) {
__extends(CDNRecordList, _super);
function CDNRecordList(defaults) {
_super.apply(this, arguments);
}
CDNRecordList.itemType = Connect2_LegacySharedModel.CDNRecord;
return CDNRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CDNRecordList = CDNRecordList;

});
define("Connect2_LegacyShared.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MenuActionRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = Connect2_LegacySharedModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MenuActionRecordList = MenuActionRecordList;

});
define("Connect2_LegacyShared.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ColorRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = Connect2_LegacySharedModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ColorRecordList = ColorRecordList;

});
define("Connect2_LegacyShared.model$BookmarkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BookmarkItemRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecordList = (function (_super) {
__extends(BookmarkItemRecordList, _super);
function BookmarkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecordList.itemType = Connect2_LegacySharedModel.BookmarkItemRecord;
return BookmarkItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.BookmarkItemRecordList = BookmarkItemRecordList;

});
define("Connect2_LegacyShared.model$CommunityBusinessTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$CommunityBusinessTypeRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeList = (function (_super) {
__extends(CommunityBusinessTypeList, _super);
function CommunityBusinessTypeList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeList.itemType = Connect2_LegacySharedModel.CommunityBusinessTypeRec;
return CommunityBusinessTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.CommunityBusinessTypeList = CommunityBusinessTypeList;

});
define("Connect2_LegacyShared.model$MessageContentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$MessageContentRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var MessageContentRecordList = (function (_super) {
__extends(MessageContentRecordList, _super);
function MessageContentRecordList(defaults) {
_super.apply(this, arguments);
}
MessageContentRecordList.itemType = Connect2_LegacySharedModel.MessageContentRecord;
return MessageContentRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.MessageContentRecordList = MessageContentRecordList;

});
define("Connect2_LegacyShared.model$ShareProfileList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$ShareProfileRec"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var ShareProfileList = (function (_super) {
__extends(ShareProfileList, _super);
function ShareProfileList(defaults) {
_super.apply(this, arguments);
}
ShareProfileList.itemType = Connect2_LegacySharedModel.ShareProfileRec;
return ShareProfileList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.ShareProfileList = ShareProfileList;

});
define("Connect2_LegacyShared.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_LegacyShared.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("Connect2_LegacyShared.model$HallPhotoExtensiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$HallPhotoExtensiveRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRecordList = (function (_super) {
__extends(HallPhotoExtensiveRecordList, _super);
function HallPhotoExtensiveRecordList(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRecordList.itemType = Connect2_LegacySharedModel.HallPhotoExtensiveRecord;
return HallPhotoExtensiveRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.HallPhotoExtensiveRecordList = HallPhotoExtensiveRecordList;

});
define("Connect2_LegacyShared.model$Householder_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$Householder_MemberRecord"], function (exports, OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Householder_MemberRecordList = (function (_super) {
__extends(Householder_MemberRecordList, _super);
function Householder_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Householder_MemberRecordList.itemType = Connect2_LegacySharedModel.Householder_MemberRecord;
return Householder_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Householder_MemberRecordList = Householder_MemberRecordList;

});
define("Connect2_LegacyShared.model$UBT_MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "Connect2_LegacyShared.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeList = (function (_super) {
__extends(UBT_MessageTypeList, _super);
function UBT_MessageTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRec;
return UBT_MessageTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.UBT_MessageTypeList = UBT_MessageTypeList;

});
define("Connect2_LegacyShared.model$PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$PhotoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var PhotoList = (function (_super) {
__extends(PhotoList, _super);
function PhotoList(defaults) {
_super.apply(this, arguments);
}
PhotoList.itemType = APIDomain_Directory_ISModel.PhotoRec;
return PhotoList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.PhotoList = PhotoList;

});
define("Connect2_LegacyShared.model$Directory_UserCurrent_SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionList, _super);
function Directory_UserCurrent_SubscriptionList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec;
return Directory_UserCurrent_SubscriptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_LegacySharedModel.Directory_UserCurrent_SubscriptionList = Directory_UserCurrent_SubscriptionList;

});
define("Connect2_LegacyShared.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_LegacySharedModel = exports;
Object.defineProperty(Connect2_LegacySharedModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["3712370e-f7b5-4c2a-ade3-d8800219efd4"];
}
});

Connect2_LegacySharedModel.staticEntities = {};
Connect2_LegacySharedModel.staticEntities.directoryAPIFilter = {};
var getDirectoryAPIFilterRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["0b3c0a15-6a22-4b22-a157-fdd29626fa26"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryAPIFilter, "member", {
get: function () {
return getDirectoryAPIFilterRecord("15d2db03-aa2e-4571-b1d8-3e0821362249");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryAPIFilter, "locality", {
get: function () {
return getDirectoryAPIFilterRecord("a568bb58-25a5-40ad-9a1c-b9ddc90941fb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryAPIFilter, "subdivision", {
get: function () {
return getDirectoryAPIFilterRecord("c0ea9a35-2210-45b5-b7bf-b74085dd1969");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryAPIFilter, "household", {
get: function () {
return getDirectoryAPIFilterRecord("d61794a0-9ba6-4e37-a826-c3bdc5acf68b");
}
});

Connect2_LegacySharedModel.staticEntities.householdNavigationType = {};
var getHouseholdNavigationTypeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["2898cb48-d894-4bdb-9614-7aa388b5470a"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "myUpdateFeed", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("1773ae49-f1ee-47de-81ab-7c095438c5f7"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "advancedSearch", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("30dcaa9d-9da0-4f20-83c3-6c993f925bba"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "locality", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("75d262d7-279e-499d-984b-f1fc9854e3da"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "subdivisionCarousel", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("7e50f65e-69bd-47f9-bbe6-77822942c545"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "subdivision", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("af72d2f4-2fad-4ed8-bb39-ef160aa386ed"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "eventDetail", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("b263602e-bb7a-48b6-8a60-d8d5bf49eb94"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.householdNavigationType, "myBookmarks", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getHouseholdNavigationTypeRecord("dacdcedc-3e05-4190-a47c-77105f8fb76e"));
}
});

Connect2_LegacySharedModel.staticEntities.shareUserListType = {};
var getShareUserListTypeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["2af19486-bd71-4f23-a89b-e41c05f688e0"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.shareUserListType, "recentShared", {
get: function () {
return getShareUserListTypeRecord("21e34f21-11c2-4b26-bc0f-9ab30d404c1e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.shareUserListType, "searchResult", {
get: function () {
return getShareUserListTypeRecord("5cb5e571-d6e6-44bf-98bd-816047bf7e93");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.shareUserListType, "suggestion", {
get: function () {
return getShareUserListTypeRecord("b1cfeee0-ad8d-4be9-8b07-f0f5bedcfb7c");
}
});

Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit = {};
var getApplicationEvents_OrbitRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["2d016dbb-6e27-4cf6-a2e9-28bafc00c65f"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "contactHelpdesk", {
get: function () {
return getApplicationEvents_OrbitRecord("2601bd78-f502-41b8-856b-540f7fc29ed5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "switchMember", {
get: function () {
return getApplicationEvents_OrbitRecord("30f501a5-bb3a-4a15-8e3d-0f12ab4c0786");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "clickEvent", {
get: function () {
return getApplicationEvents_OrbitRecord("32f35a13-31fe-4d6a-89f8-97e2cde8a76f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "applyFilter", {
get: function () {
return getApplicationEvents_OrbitRecord("3bcbf505-5842-48c1-a7d1-92f364d8821b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "applySort", {
get: function () {
return getApplicationEvents_OrbitRecord("575f2290-3c62-4680-a0a1-df501bb6a3af");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "emailHost", {
get: function () {
return getApplicationEvents_OrbitRecord("710394ef-819c-49e0-99ea-e9ba89180993");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "viewHousehold", {
get: function () {
return getApplicationEvents_OrbitRecord("7297bb3c-6ebe-414d-8995-ce15830cece6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "callMember", {
get: function () {
return getApplicationEvents_OrbitRecord("84094f16-ef12-4b20-a170-abc2ed787023");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "launchQRCodeScanner", {
get: function () {
return getApplicationEvents_OrbitRecord("8b26b000-4381-46dd-8549-eaca9707be04");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "clickMilestone", {
get: function () {
return getApplicationEvents_OrbitRecord("93bbed40-c10c-46fe-aa80-f2c5b17e452b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "generateQRCode", {
get: function () {
return getApplicationEvents_OrbitRecord("ad292169-cc75-453d-8cf5-ba4a1b430eac");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Orbit, "qRCodeScanned", {
get: function () {
return getApplicationEvents_OrbitRecord("c5521735-f06d-4b50-9187-f45f2d8f00b6");
}
});

Connect2_LegacySharedModel.staticEntities.communityBusinessType = {};
var getCommunityBusinessTypeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["367e148b-069e-46a5-a4ba-61ce69cbf6dc"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.communityBusinessType, "campusCo", {
get: function () {
return getCommunityBusinessTypeRecord("235f6b9b-858d-40d7-a66a-129fdd1dcd2f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.communityBusinessType, "oneSchoolGlobal", {
get: function () {
return getCommunityBusinessTypeRecord("5b42e41f-3053-407d-8cb4-e7334ab49272");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.communityBusinessType, "commercial", {
get: function () {
return getCommunityBusinessTypeRecord("d5e44acc-a7a5-4f99-a52a-2cc127cdaa0f");
}
});

Connect2_LegacySharedModel.staticEntities.recentSearchType = {};
var getRecentSearchTypeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["53ca7ac1-2b86-49b0-881e-853e1bd5fa80"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.recentSearchType, "advSearch", {
get: function () {
return getRecentSearchTypeRecord("97d31b9c-3cb9-471d-b28b-9f0dd09174d1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.recentSearchType, "myNotifications", {
get: function () {
return getRecentSearchTypeRecord("d8cdd615-026c-4262-b51c-a224ef4bbd71");
}
});

Connect2_LegacySharedModel.staticEntities.imageSigningSize = {};
var getImageSigningSizeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["5ea4646e-dd05-4bcf-b1db-5a2ec0d4533d"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.imageSigningSize, "large", {
get: function () {
return getImageSigningSizeRecord("410ea4be-6364-441a-9b3a-67d10d79a2ec");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.imageSigningSize, "small", {
get: function () {
return getImageSigningSizeRecord("f5e5cb56-4104-4c04-b594-ec9e30b4fa8e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.imageSigningSize, "medium", {
get: function () {
return getImageSigningSizeRecord("fa7defd7-095a-4846-9ec2-2ea4261f8a05");
}
});

Connect2_LegacySharedModel.staticEntities.adaptiveCardsConfig = {};
var getAdaptiveCardsConfigRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["649652eb-b439-45e2-b380-0b149c9c82ba"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.adaptiveCardsConfig, "events", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAdaptiveCardsConfigRecord("d6370849-dc51-493a-b1d2-07f39f4ed18e"));
}
});

Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM = {};
var getApplicationEvents_LDMRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["6b727b30-20d3-4d06-a419-f2d15bb82bb5"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "notificationContactOrganiser", {
get: function () {
return getApplicationEvents_LDMRecord("0079639a-eca4-4acd-92cf-864e3c8dcd50");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineClearFilter", {
get: function () {
return getApplicationEvents_LDMRecord("0a0b1827-3cce-409f-a4e4-d8f95142713a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineneCallGuest", {
get: function () {
return getApplicationEvents_LDMRecord("0da21937-5a2e-4539-9077-0c81bc2cebf7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "requestAPI_EventDetail", {
get: function () {
return getApplicationEvents_LDMRecord("20410148-9d81-4647-bcc9-a774fedc6dc3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineHouseholdClicked", {
get: function () {
return getApplicationEvents_LDMRecord("2246164d-a237-48c9-9689-adf5d8cf499d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineEventClicked", {
get: function () {
return getApplicationEvents_LDMRecord("3367839b-71e0-476d-9321-2f341767f245");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineGuessCalled", {
get: function () {
return getApplicationEvents_LDMRecord("368fac4d-2f61-45a6-bfb1-2222c9b864d1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "notificationViewEvent", {
get: function () {
return getApplicationEvents_LDMRecord("3dc6264c-42d6-48cd-91b9-1d58bb862be4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineCoordinatorCalled", {
get: function () {
return getApplicationEvents_LDMRecord("3f7c98bc-462f-4bd2-bb14-db1709c22820");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineEmailHost", {
get: function () {
return getApplicationEvents_LDMRecord("41a17f8c-4c56-445d-82f4-a690a99d01c3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineApplyFilter", {
get: function () {
return getApplicationEvents_LDMRecord("5ebe7152-93a0-4dbf-83af-d5225bc8b557");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "hostClickedGuestHousehold", {
get: function () {
return getApplicationEvents_LDMRecord("62766327-20de-493b-ac6d-37f02b9c54cf");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineCallHost", {
get: function () {
return getApplicationEvents_LDMRecord("7860c9a9-89ca-4032-8746-e8a13ac48802");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineEmailGuest", {
get: function () {
return getApplicationEvents_LDMRecord("8b1fd024-ae3f-4495-a57c-af8de4ade90d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineCoordinatorEmailed", {
get: function () {
return getApplicationEvents_LDMRecord("8d524cf0-5515-4f66-92f4-657672212577");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "guestClickedOtherGuestHousehold", {
get: function () {
return getApplicationEvents_LDMRecord("91ae1e46-11f9-4496-9d36-d4cb91c45c61");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "guestClickedDistanceFromMainHall", {
get: function () {
return getApplicationEvents_LDMRecord("9b01d343-596f-448f-a434-d5555d0a9424");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "requestAPI_CalendarEvents", {
get: function () {
return getApplicationEvents_LDMRecord("a23c3324-8af5-492c-819e-1796b0b09709");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "requestAPI_EventLocalities", {
get: function () {
return getApplicationEvents_LDMRecord("b01ae228-faaf-43a2-9ade-eadc7dae8905");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineGuessEmailed", {
get: function () {
return getApplicationEvents_LDMRecord("c46a7460-3d68-4938-b63e-e762a12f5abd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineHostCalled", {
get: function () {
return getApplicationEvents_LDMRecord("ca225d97-e8c4-44dd-8129-5d4e3aeae852");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineGoogleMapsDirections", {
get: function () {
return getApplicationEvents_LDMRecord("d1022322-1902-4934-bb16-1eb62fb1e2d2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "calendarDateChanged", {
get: function () {
return getApplicationEvents_LDMRecord("d2744b0e-ff55-42ff-928b-3cbd23d3b9c4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "hostCallGuest", {
get: function () {
return getApplicationEvents_LDMRecord("e1fbd146-a0c2-47e2-a0ea-2e86e4f5db86");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "myTimelineHostEmailed", {
get: function () {
return getApplicationEvents_LDMRecord("e34f5ff9-f474-4b96-b7ca-019636842790");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "calendarViewChanged", {
get: function () {
return getApplicationEvents_LDMRecord("ec220640-7399-4e0f-8c8e-a217a0425df9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "calendarEventClicked", {
get: function () {
return getApplicationEvents_LDMRecord("eda3db52-8eca-4afb-9827-6bf907805553");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "hostContactOrganiserLink", {
get: function () {
return getApplicationEvents_LDMRecord("f749a4f5-2602-4d6f-8286-7a0d2bbc6a69");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "contactEventOrganiser", {
get: function () {
return getApplicationEvents_LDMRecord("fb88cbc6-339b-4247-aead-9a41861c0d74");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_LDM, "hostMessageGuest", {
get: function () {
return getApplicationEvents_LDMRecord("fd87eacf-4580-417d-b05e-846e8b0a6738");
}
});

Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory = {};
var getApplicationEvents_DirectoryRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["7135cb3f-7154-4f32-8efe-c36ec04964af"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "clickOutboundLink", {
get: function () {
return getApplicationEvents_DirectoryRecord("06623104-9d6c-4607-9643-6ed7fec8cbe0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "appMovedToForeground", {
get: function () {
return getApplicationEvents_DirectoryRecord("09782f21-ef81-4c08-8059-a209c8c4232e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "shareView", {
get: function () {
return getApplicationEvents_DirectoryRecord("0aeea4c4-5634-4f5d-ad4e-8a013b781d01");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "locality", {
get: function () {
return getApplicationEvents_DirectoryRecord("1984e427-d7de-4ef7-8847-990374ea6444");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "shareItem", {
get: function () {
return getApplicationEvents_DirectoryRecord("1b9157b8-efcc-43bf-b6a1-4bfa9a460435");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "country", {
get: function () {
return getApplicationEvents_DirectoryRecord("2b3ae623-40d5-453c-9034-8584dcdc4c0e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "menu_ContextMenuExpanded", {
get: function () {
return getApplicationEvents_DirectoryRecord("3395812b-15cb-41a3-9e27-e63393e3f918");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "accessViaDifferentDevice", {
get: function () {
return getApplicationEvents_DirectoryRecord("356b35a9-da26-49c5-bb5d-4b9deda27f70");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "policyAccepted", {
get: function () {
return getApplicationEvents_DirectoryRecord("3570b7d4-3e53-4524-8805-81733608d8b5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "updates", {
get: function () {
return getApplicationEvents_DirectoryRecord("35b4003d-c566-4310-bc10-0f0de787774c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "menu_Privacy", {
get: function () {
return getApplicationEvents_DirectoryRecord("3808c9c3-ef11-4da0-8586-adbcaae52fa5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "deceasedHousehold", {
get: function () {
return getApplicationEvents_DirectoryRecord("3cb17ed0-cdcf-485d-8644-46163e73bea8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "appMovedToBackground", {
get: function () {
return getApplicationEvents_DirectoryRecord("3e2ab468-3ff7-4908-9385-d7c7830d9929");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "defaultLocalityUpdated", {
get: function () {
return getApplicationEvents_DirectoryRecord("44767208-6235-49ee-a3c4-f6c0e122de28");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "newPinRegistered", {
get: function () {
return getApplicationEvents_DirectoryRecord("453fcb0f-bf87-4490-8854-ec5a8d93da71");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "oneSignalNotSubscribed", {
get: function () {
return getApplicationEvents_DirectoryRecord("47821145-1fc6-442f-ae9a-5254fe515ee2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "subscriptionRequired", {
get: function () {
return getApplicationEvents_DirectoryRecord("48a6ed4c-c666-4216-b64a-34b47cd3b6b9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "inactivityScreenPINEntered", {
get: function () {
return getApplicationEvents_DirectoryRecord("4f7a85bf-65ba-4ee5-8c78-9d0f5a861bb0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "ageVisibility_Change", {
get: function () {
return getApplicationEvents_DirectoryRecord("5076482b-4fd3-45b8-8274-2eedc01fbdde");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "menu_Terms", {
get: function () {
return getApplicationEvents_DirectoryRecord("561f3c4d-3a3f-407e-95ef-cebd1a2ecc5a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "menu_LogoutButton", {
get: function () {
return getApplicationEvents_DirectoryRecord("66c0e7f7-9f69-45a9-92d9-07f6b9dedc17");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "javascriptVersion", {
get: function () {
return getApplicationEvents_DirectoryRecord("6c923cc7-1e07-43ab-8626-f3b4e5a5461b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "debugLogEvent", {
get: function () {
return getApplicationEvents_DirectoryRecord("71d1c864-a4f0-48bb-b762-ad8ba37f6ebf");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "errorFromPhotoView", {
get: function () {
return getApplicationEvents_DirectoryRecord("9893e8f8-d778-4343-8742-fd7d66fee56c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "menu_OptionsButton", {
get: function () {
return getApplicationEvents_DirectoryRecord("9e116ea8-97fb-451b-8208-d0fdae632c88");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "emailHousehold", {
get: function () {
return getApplicationEvents_DirectoryRecord("a4b43615-4675-4209-8bdf-cc082a98eeea");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "changeRequest", {
get: function () {
return getApplicationEvents_DirectoryRecord("b4aa8d9f-d871-4d5f-b427-f6973156bd23");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "search", {
get: function () {
return getApplicationEvents_DirectoryRecord("ba0caa26-9a00-49da-a5f9-1e6a7cd45f53");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "subdivision", {
get: function () {
return getApplicationEvents_DirectoryRecord("c017f217-af03-436d-907f-b1c2fb4d0e43");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "household", {
get: function () {
return getApplicationEvents_DirectoryRecord("c20340df-3266-49cf-8f6c-368611b36dc2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "contact", {
get: function () {
return getApplicationEvents_DirectoryRecord("df9b82f8-44db-4ed2-a1dc-0960185099b0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory, "menu_Entity", {
get: function () {
return getApplicationEvents_DirectoryRecord("f83295c2-fc9e-4b88-8f39-2de51ac26880");
}
});

Connect2_LegacySharedModel.staticEntities.themeClass = {};
var getThemeClassRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["75fc7b26-e0be-442a-a4d6-81a54e234223"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.themeClass, "connect", {
get: function () {
return getThemeClassRecord("0704f44e-3a36-4d8d-8aa9-9377d347a36f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.themeClass, "orbit", {
get: function () {
return getThemeClassRecord("10c9f088-f10a-4602-99de-97590fc053f7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.themeClass, "mediaHub", {
get: function () {
return getThemeClassRecord("40ba9601-f49b-4797-8e26-2124014ba5ce");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.themeClass, "subscriptionsAndPayments", {
get: function () {
return getThemeClassRecord("da60f51a-8abd-4d1c-8237-68957a0b4f11");
}
});

Connect2_LegacySharedModel.staticEntities.resultListType = {};
var getResultListTypeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["ab5965c3-4530-48a3-9550-29933fbf4cdb"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.resultListType, "notification", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("1ce929a9-9861-4c7a-8395-db3e7abad9b7"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.resultListType, "household", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("2450795b-3f42-4957-9abd-6c0458007300"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.resultListType, "subdivision", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("24bfbfd0-7715-4194-8730-334d0ecd62a9"));
}
});

Connect2_LegacySharedModel.staticEntities.directoryCacheType = {};
var getDirectoryCacheTypeRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["d9c8f22a-41a2-42db-83de-b1e0315606ff"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "timezone", {
get: function () {
return getDirectoryCacheTypeRecord("07455651-9a36-4026-af5e-78f9032d5bc0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "search", {
get: function () {
return getDirectoryCacheTypeRecord("28cc2f00-bdda-4e5a-9132-65bf235d9093");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "households", {
get: function () {
return getDirectoryCacheTypeRecord("348dcf6c-a9c1-443e-afee-28c9b329d8c0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "memberContact", {
get: function () {
return getDirectoryCacheTypeRecord("36424840-76f1-425c-8349-289e9d18924d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "localities", {
get: function () {
return getDirectoryCacheTypeRecord("42116a0f-aaf7-416f-833a-78b8d8db4dec");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "subdivisions", {
get: function () {
return getDirectoryCacheTypeRecord("535e2fd4-1abb-406f-9bcf-181ad55fab8c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "imagesHousehold", {
get: function () {
return getDirectoryCacheTypeRecord("78208724-ae54-4f47-9ab2-535b7c71d537");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "userProfile", {
get: function () {
return getDirectoryCacheTypeRecord("7fd5b3b9-761b-4fbc-a718-18fabfdea46d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "myUpdateFeed", {
get: function () {
return getDirectoryCacheTypeRecord("814c1460-3894-44d3-b178-c0b1907a79a7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "user", {
get: function () {
return getDirectoryCacheTypeRecord("8abb6317-7792-438a-a87a-060a53562194");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "localitiesList", {
get: function () {
return getDirectoryCacheTypeRecord("968de58c-8283-41d4-8070-fc70372f8dee");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "assembleSubdivision", {
get: function () {
return getDirectoryCacheTypeRecord("9fe1b9a2-aaba-41b3-a773-b41cf55711f5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "imagesMember", {
get: function () {
return getDirectoryCacheTypeRecord("a8d216d6-5a47-4335-9013-f03538c4214c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "imagesLocalities", {
get: function () {
return getDirectoryCacheTypeRecord("a9e609e4-83a1-48c3-852a-2a2ec841917d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "regionSubscribedCountries", {
get: function () {
return getDirectoryCacheTypeRecord("b7845f17-935d-4f21-9684-3a3add1827ae");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "photos", {
get: function () {
return getDirectoryCacheTypeRecord("b991156d-2008-4258-9bff-21f32d4b30f4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "countries", {
get: function () {
return getDirectoryCacheTypeRecord("c2c3e595-13d5-49f3-85fd-fb329d97f3f0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "imagesSubdivision", {
get: function () {
return getDirectoryCacheTypeRecord("cd42492a-8d0a-4896-b73b-04442245db14");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "advancedSearch", {
get: function () {
return getDirectoryCacheTypeRecord("d22c3be1-764f-4309-bd24-b8b4229bbb8c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "myBookmarks", {
get: function () {
return getDirectoryCacheTypeRecord("d8b74ac1-23b9-49b4-a8b0-ad79148500a4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.directoryCacheType, "images", {
get: function () {
return getDirectoryCacheTypeRecord("faf29ef2-2e55-4f23-a8c4-786ee557b67f");
}
});

Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha = {};
var getApplicationEvents_AlphaRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["dc416517-72ea-445e-be72-d538df65b3c9"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "exception", {
get: function () {
return getApplicationEvents_AlphaRecord("08242879-4ad2-47fc-bec8-8e8c7effdd8f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "passwordResetRequest", {
get: function () {
return getApplicationEvents_AlphaRecord("111a4ed5-fd7e-46ca-b7d1-fca1d5d96acd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "sendEmailToAdmin", {
get: function () {
return getApplicationEvents_AlphaRecord("1d6691de-3086-40e0-99f4-c44bf9b4c396");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "passwordResetRequestExpired", {
get: function () {
return getApplicationEvents_AlphaRecord("44ff9256-1a85-4bcd-b87d-b7d686df9572");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "streamlineInstallationQuerySucceeded", {
get: function () {
return getApplicationEvents_AlphaRecord("5e6969a7-f54d-42c2-858d-1f5be0cd04e6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "signIn", {
get: function () {
return getApplicationEvents_AlphaRecord("6dde2da9-0538-443d-93db-66d4892adf1f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "passwordResetComplete", {
get: function () {
return getApplicationEvents_AlphaRecord("98203a1d-02ab-4f7d-8bac-711d6f5fef52");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "streamlineSerialNumberQuerySucceeded", {
get: function () {
return getApplicationEvents_AlphaRecord("aea0c3da-b9c9-4f1d-a409-8a8834a8c766");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "changeRequest", {
get: function () {
return getApplicationEvents_AlphaRecord("af541bb3-5bdc-400f-a732-fd7c82166ccc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "signOut", {
get: function () {
return getApplicationEvents_AlphaRecord("d28f8ccb-dd82-4566-b0df-e4c3044ee596");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "signInFailed", {
get: function () {
return getApplicationEvents_AlphaRecord("de69b50d-865b-4db6-ae99-6e66c54be913");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "streamlineInstallationQueryFailed", {
get: function () {
return getApplicationEvents_AlphaRecord("ec6edbe1-0b0e-4dd5-a99a-6bac926bde68");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.applicationEvents_Alpha, "streamlineSerialNumberQueryFailed", {
get: function () {
return getApplicationEvents_AlphaRecord("fc466f64-4064-4568-a73b-c04f01dff945");
}
});

Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect = {};
var getMapNavigationRedirectRecord = function (record) {
return Connect2_LegacySharedModel.module.staticEntities["ee7cfd75-0bfd-4ea6-ab8b-27d888db527d"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect, "iPhoneBrowser", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMapNavigationRedirectRecord("407e7546-4846-4a7a-9ced-85025fa3c146"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect, "androidNative", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMapNavigationRedirectRecord("81bd4fbf-8cc8-46e3-9d19-82c0bbd5aefa"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect, "androidBrowser", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMapNavigationRedirectRecord("9d683b79-1ece-4ab6-8fcf-457086872ce8"));
}
});

Connect2_LegacySharedModel.staticEntities.messagePriority = {};
var getMessagePriorityRecord = function (record) {
return OS.ApplicationInfo.getModules()["1ead1054-e761-4048-8aa9-2cf23d90b9e7"].staticEntities["00febaa6-400d-438d-9506-211ce392fc7a"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messagePriority, "normal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessagePriorityRecord("5e8688ca-47e4-488b-92b6-ad9aa8ba66d1"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messagePriority, "urgent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessagePriorityRecord("a8904aab-07f7-47c7-a341-9a322599d2d0"));
}
});

Connect2_LegacySharedModel.staticEntities.messageType = {};
var getMessageTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["1ead1054-e761-4048-8aa9-2cf23d90b9e7"].staticEntities["039838ee-3041-4d17-8b46-dd00bec0ece4"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageType, "private", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageTypeRecord("01c17993-78e9-4a11-bc55-111ebcf2c103"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageType, "public", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageTypeRecord("bfa78740-e96a-4fc8-87b7-fede04699da2"));
}
});

Connect2_LegacySharedModel.staticEntities.messageInfoType = {};
var getMessageInfoTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["1ead1054-e761-4048-8aa9-2cf23d90b9e7"].staticEntities["0f8d49bf-d55b-4a75-affb-9d5966653460"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageInfoType, "generalInformation", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageInfoTypeRecord("1a02759a-58a9-4729-a844-e94c2c961901"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageInfoType, "whatsNew", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageInfoTypeRecord("3b26e8f9-7c0f-4dac-8070-45a3b4374913"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageInfoType, "sharing", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageInfoTypeRecord("cf120104-5c23-4b29-bf9f-1b91cbf761db"));
}
});

Connect2_LegacySharedModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["1ead1054-e761-4048-8aa9-2cf23d90b9e7"].staticEntities["7d698f43-df0d-4cf1-9e37-3d9f41afe626"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "recalled", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("4a84459f-b7b0-45d6-b25e-e77573fce309"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "sent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("7e22bfb4-d3b8-47d0-b3fd-8a7fd1cc57c1"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "sending", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("8702b70b-f030-4ee2-a384-b6013dab5eff"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "skipSendPushNotification", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("8d2b0693-4738-4789-8dd9-29a86f9e74e1"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "draft", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("b186a21d-062b-4c82-b862-5c2d67605841"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "retractionInProgress", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("b7374b4a-9240-4801-8d8e-461035b5ed0f"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "retracted", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("c5b08d26-5bb6-43a5-beac-f93961a18743"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageStatus, "scheduled", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageStatusRecord("f5299086-a0ee-4055-a1de-1d6c5f67b214"));
}
});

Connect2_LegacySharedModel.staticEntities.messageSenderTarget = {};
var getMessageSenderTargetRecord = function (record) {
return OS.ApplicationInfo.getModules()["1ead1054-e761-4048-8aa9-2cf23d90b9e7"].staticEntities["889dcd3e-a0f3-4385-bdb7-46eea1464a15"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "gAP", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("041e1648-646f-497b-b2be-411d672cf091"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "orbitHostSurvey", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("07542b5f-1ae8-46a7-a6a0-abb7cbef9764"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "assemble", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("0906446e-97ed-4382-9bad-507635aa6995"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "connect", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("4913fe04-42b4-4458-9ecd-f34a853bed38"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "uBT", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("50978e1e-7c57-4998-9586-38dcd6f9ea7b"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "lordsDayMeal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("633166fe-9318-40b5-b7b5-319deaa75841"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "trove", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("68410198-ae79-43de-b3d6-eeebd49b89b2"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "orbit", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("8e69edd1-33d9-4044-aeef-99fb9b9d9f0b"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "communityHub", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("9506de13-c5aa-4ded-94e8-93fd50fa48c1"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "bGT", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("a8400912-18f9-4aa8-931d-bf444764a277"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "uBTA", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("a84d9f96-22ea-41e8-a2da-3f5d47775fdc"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "gFT", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("b8061ca1-1bd2-4ed7-83ec-66d6376a707f"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "campusTrading", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("b86e4891-dd10-4856-ac0d-e2c01bb21c0c"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "oSG", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("bceecba0-d71c-4f91-a706-feddb4df956d"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "hR100", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("d6e81be3-85ed-4bb3-8c6c-06c9105f7403"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "pBCC", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("daa937ec-0831-4445-a941-70965230dc38"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "rRT", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("ebb016a4-6f78-4ff9-80bd-467024e4c9d8"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "visionFoundation", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("fc6264fc-b93e-4afc-aaba-6184c4e70ac7"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.messageSenderTarget, "directory", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMessageSenderTargetRecord("fe118adb-cf02-4eb0-b3a2-ed8f31473265"));
}
});

Connect2_LegacySharedModel.staticEntities.parameterName = {};
var getParameterNameRecord = function (record) {
return OS.ApplicationInfo.getModules()["1ead1054-e761-4048-8aa9-2cf23d90b9e7"].staticEntities["eef250b9-fc12-4a1f-807a-70f0b874e102"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "shareId", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("09c0630b-0e91-4ee5-be70-4301dc263a3f"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "orbitStartDate", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("11203c6d-3e9f-4c18-9389-e63eedc9fefe"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventInstanceId", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("1999edc6-c9ca-400a-b37a-3145b2fa4172"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventHostingLocation", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("1ec17d5f-66aa-4bcf-aa4b-41bbb0b4ddea"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "orbitEventName", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("4bf5a820-7572-4ffa-97c4-6ac535f97fa6"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "orbitMilestoneId", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("4ca380a5-78ed-4032-8885-170cdce7b239"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventRecurrenceType", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("4d408903-0164-4b17-885a-857b6bfbacae"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "placeholderAddTop", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("821581cf-b9df-45fc-b097-af4d4a8a9fe0"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventAppliesToSequence", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("878a04d2-99b2-44ea-beee-4408c12dafe1"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventStartDate", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("8ece6785-52ac-412b-a016-d086d1dbbe6c"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventType", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("9f20fac2-e7c9-4ba4-ba94-2189ca5aef0c"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "orbitEndDate", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("a207913e-011e-45a7-8440-04091fcadd00"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventAction", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("c08dd859-15db-4efc-aef2-359ac4f5d873"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventIsVirtual", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("cd4c6b16-5dec-465e-85f0-e76dfca1ec86"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "orbitEventId", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("ecc8a7dc-e605-42cd-8915-8207d2f4b42f"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.parameterName, "assembleEventParentId", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getParameterNameRecord("f1e9131e-35c8-4ce7-8dca-9d34d4039c4c"));
}
});

Connect2_LegacySharedModel.staticEntities.uBT_MessageType = {};
var getUBT_MessageTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["2c2986c3-daaf-4dc5-a0c6-d9a75a42125d"].staticEntities["5a451e53-0d4f-4a13-8dcd-d2c12db5eb4f"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_MessageType, "error", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("11de012f-8214-4480-bc41-e674f8463a2a"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_MessageType, "success", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("232e2df8-4514-48c8-bd5d-136ff9bc8cf0"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_MessageType, "info", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("b69f4bc5-4211-4808-ae64-b62df5426873"));
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_MessageType, "warning", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("d02ae75c-15a9-4617-abb2-814d976949d2"));
}
});

Connect2_LegacySharedModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

Connect2_LegacySharedModel.staticEntities.type_ShareObject = {};
var getType_ShareObjectRecord = function (record) {
return OS.ApplicationInfo.getModules()["89a8b22b-4939-4962-ac03-ed124a10543f"].staticEntities["fdd27f53-9f9c-477e-8a4a-1dd00c45a277"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "communityNotice", {
get: function () {
return getType_ShareObjectRecord("3b68532c-c7a8-490d-84bd-fc1842d6f70a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "locality", {
get: function () {
return getType_ShareObjectRecord("50105edb-d74e-4da5-8518-19cff43aca1e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "myHousehold", {
get: function () {
return getType_ShareObjectRecord("62d133fd-03de-4a54-b6a9-41b45317bcd2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "supperMeeting", {
get: function () {
return getType_ShareObjectRecord("66862e7a-561e-4166-b594-860a0e00d015");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "update", {
get: function () {
return getType_ShareObjectRecord("804d78ff-a96b-43a0-88a9-9bac7e5923a9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "localityContact", {
get: function () {
return getType_ShareObjectRecord("8540a0c3-d763-43b9-aacb-4da071245b38");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "feed", {
get: function () {
return getType_ShareObjectRecord("9b83faac-3c6d-4a69-9be5-7c00c9ff787a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "household", {
get: function () {
return getType_ShareObjectRecord("be388807-f406-4e72-86b3-b4e136d63453");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "campusCo", {
get: function () {
return getType_ShareObjectRecord("c5cd2483-9015-4ddb-8878-3321d4f7cce3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.type_ShareObject, "oneSchoolGlobal", {
get: function () {
return getType_ShareObjectRecord("e62e5bba-01ff-40c5-abe9-333c594000a7");
}
});

Connect2_LegacySharedModel.staticEntities.target = {};
var getTargetRecord = function (record) {
return OS.ApplicationInfo.getModules()["acac34be-1dc3-4cf6-a5fb-be5250753606"].staticEntities["e529a639-4811-47de-b303-067304ae2970"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.target, "iN_APP_BROWSER", {
get: function () {
return getTargetRecord("043e7cf5-dce3-4925-aa89-30a680f08ce8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.target, "sYSTEM", {
get: function () {
return getTargetRecord("529d5240-d52b-44e1-a607-d6916b68a4e5");
}
});

Connect2_LegacySharedModel.staticEntities.memoryCacheType = {};
var getMemoryCacheTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["b7049202-6510-41f3-8209-f2425737f568"].staticEntities["167f45ab-d8e4-4848-97f6-852b13f63785"][record];
};
Connect2_LegacySharedModel.staticEntities.eventDescription = {};
var getEventDescriptionRecord = function (record) {
return OS.ApplicationInfo.getModules()["c8cc57fd-5df6-43cd-bbc2-3fd3d3eed17d"].staticEntities["b1baebc2-a64b-4f3a-a318-838a8d4d74cd"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.eventDescription, "alwaysShow", {
get: function () {
return getEventDescriptionRecord("2775272f-473d-4ed7-af24-8d85fff9c9a5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.eventDescription, "neverShow", {
get: function () {
return getEventDescriptionRecord("7acd1fff-d8d0-415b-8754-c63cc1c3be3c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.eventDescription, "showWhenAvailable", {
get: function () {
return getEventDescriptionRecord("b06a74b1-6ebc-43d1-b1ae-0e9037d14468");
}
});

Connect2_LegacySharedModel.staticEntities.myBookmarks_Group = {};
var getMyBookmarks_GroupRecord = function (record) {
return OS.ApplicationInfo.getModules()["ccacdbe8-c124-4e26-ac14-d39cf1b372dc"].staticEntities["d277c37a-277e-419f-81ea-0ffb36be8558"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_Group, "locations", {
get: function () {
return getMyBookmarks_GroupRecord("2860dbc3-b113-4f27-bf00-060398d4854a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_Group, "entities", {
get: function () {
return getMyBookmarks_GroupRecord("77369632-c604-40b2-872b-6218e0eed2b6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_Group, "contacts", {
get: function () {
return getMyBookmarks_GroupRecord("e247ecb6-1adf-4f59-9ec9-2683f67eb8cd");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_ImageSize = {};
var getUBT_ImageSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["07cee39a-18ef-4dbf-8471-ec7fcfedef5a"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "fullHeight_100_Percent", {
get: function () {
return getUBT_ImageSizeRecord("0323f7f5-c991-4653-8ef6-506692bdfc4b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "fullWidth_100_Percent", {
get: function () {
return getUBT_ImageSizeRecord("0f7c1d4a-dfe7-42a5-a4d4-7043e009450b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "medium_60", {
get: function () {
return getUBT_ImageSizeRecord("1b1aea95-ad82-4429-b68a-80820cf8fc1c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "extraSmall_32", {
get: function () {
return getUBT_ImageSizeRecord("22b961e4-50eb-4be4-b2e0-a450630f9091");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "large_65", {
get: function () {
return getUBT_ImageSizeRecord("306a3f94-642c-4c0f-bc20-cd559b261dbc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "small_40", {
get: function () {
return getUBT_ImageSizeRecord("388c970f-f6ab-40cc-a651-5f5c016da8b6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "listThumbnail_104", {
get: function () {
return getUBT_ImageSizeRecord("3ea349ce-8f4d-4c79-a02d-d10da50b8170");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "square", {
get: function () {
return getUBT_ImageSizeRecord("5fe1292f-fb79-4c0e-8275-31a50a05797b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "auto", {
get: function () {
return getUBT_ImageSizeRecord("6d5cd9e3-3b51-4955-bf2e-b2ce75fe3487");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "base_52", {
get: function () {
return getUBT_ImageSizeRecord("83108d3c-d465-43d3-a8be-9813f5299db9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "extraLarge_100", {
get: function () {
return getUBT_ImageSizeRecord("9b640159-8fa5-47a0-bafd-e56680d4258a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "halfWidth_50vw", {
get: function () {
return getUBT_ImageSizeRecord("a820108b-9612-4fbc-99ea-b622a04efe9d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "maxHeight_100vh", {
get: function () {
return getUBT_ImageSizeRecord("c61c2400-2aee-4b97-aae0-9a25a06a0beb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "quarterWidth_25vw", {
get: function () {
return getUBT_ImageSizeRecord("ca560d17-83a8-4050-8346-7872a1ebd03f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "maxWidth_100vw", {
get: function () {
return getUBT_ImageSizeRecord("cd58b82c-6f73-4350-834c-3962510a400d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "doubleExtraLarge_176", {
get: function () {
return getUBT_ImageSizeRecord("e366276e-e1d4-44fb-a3f2-b04d303b0669");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ImageSize, "thirdWidth_33vw", {
get: function () {
return getUBT_ImageSizeRecord("e79a4d16-4d28-4610-bbed-3079e45e639f");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_Color = {};
var getUBT_ColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["15a2eb42-4574-4866-81b1-27212b512e30"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleDarkest", {
get: function () {
return getUBT_ColorRecord("05830090-6546-41ec-bd4a-339f0bd9de3e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueDarkest", {
get: function () {
return getUBT_ColorRecord("08872960-e4ef-4ee6-87d2-ed3c25354046");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("0e45baea-3480-4314-a952-7426e2e48f07");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "tertiary", {
get: function () {
return getUBT_ColorRecord("13882892-29e0-4466-87d6-8bf6a647a5e6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueLightest", {
get: function () {
return getUBT_ColorRecord("164d1944-08b6-4ac1-86cb-3c7df3a2ac1e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("16d0c42f-008b-4dec-b157-bad1fe350783");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueLight", {
get: function () {
return getUBT_ColorRecord("184b3928-360f-4550-a484-b7ba3e58c2c5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanLighter", {
get: function () {
return getUBT_ColorRecord("185b2676-2026-47ee-a0b3-c75a1c8a1288");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachDarker", {
get: function () {
return getUBT_ColorRecord("1fda6565-fa77-4f73-9504-c6d831e41be6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellowDarkest", {
get: function () {
return getUBT_ColorRecord("21ec71cc-7550-4356-8cf8-a78054fac1b8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral8", {
get: function () {
return getUBT_ColorRecord("23e5ec91-9544-4fd5-89f8-b733bcd83734");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "pink", {
get: function () {
return getUBT_ColorRecord("2c310cbc-847b-4e25-8063-1c2ae12e1309");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "primaryGradientRadial", {
get: function () {
return getUBT_ColorRecord("2e7bb6b2-9912-43f7-9d2e-56944941a6e8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "redDarker", {
get: function () {
return getUBT_ColorRecord("31ac2430-9041-4ac7-8ce6-6a0d6f331045");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanLightest", {
get: function () {
return getUBT_ColorRecord("33117849-859f-436f-8e94-1b426720e0e6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyan", {
get: function () {
return getUBT_ColorRecord("342d31e3-5c19-4fe7-bcbc-86819dd070aa");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellowLighter", {
get: function () {
return getUBT_ColorRecord("3523291e-51ee-4f2b-89ab-2400cf943740");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanDarker", {
get: function () {
return getUBT_ColorRecord("3767d77b-68a6-411b-a176-c6a90cd3448d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "error", {
get: function () {
return getUBT_ColorRecord("3798cac6-af7e-46e9-acc2-9f8bea33fafa");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "grape", {
get: function () {
return getUBT_ColorRecord("3972a60d-06e5-444d-8237-d5a00416e8c2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "initial", {
get: function () {
return getUBT_ColorRecord("3d795492-e13d-4e93-9d76-19d01fb327e7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "inherit", {
get: function () {
return getUBT_ColorRecord("3f12e5fd-3aa8-4024-87e8-c5db6470f756");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral0", {
get: function () {
return getUBT_ColorRecord("4089faf6-2df0-4abd-a972-8887dbba8b5b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral4", {
get: function () {
return getUBT_ColorRecord("49cca530-5a45-4f7f-b2b2-57c33874ec1f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "primaryGradientLinear", {
get: function () {
return getUBT_ColorRecord("4ffa8385-a5e4-4b60-a516-fdfca21cd066");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachDarkest", {
get: function () {
return getUBT_ColorRecord("518e0c1d-595e-4dd5-b4c3-cfe77d842ebc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachLighter", {
get: function () {
return getUBT_ColorRecord("5753052b-e2f1-4b7c-bb19-0ccb1c5e7f79");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "greenLightest", {
get: function () {
return getUBT_ColorRecord("59e2d10f-4d67-4a69-900b-f413511b580c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueDark", {
get: function () {
return getUBT_ColorRecord("5c12954d-57e4-487a-a815-4cf7ed0c7598");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral6", {
get: function () {
return getUBT_ColorRecord("5f10c2b1-7b7f-4959-aba3-113716521d47");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "redDark", {
get: function () {
return getUBT_ColorRecord("607f3988-475c-43a0-aba4-2ba4b58907ea");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "pinkNonStandardDarker", {
get: function () {
return getUBT_ColorRecord("633662b9-2ea8-4041-b701-0536e9c42ff1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueNonStandard", {
get: function () {
return getUBT_ColorRecord("63bf24fc-38fc-4e0d-834f-1ce87dc0b10a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "warning", {
get: function () {
return getUBT_ColorRecord("65d4bf68-0e90-4cb7-a7b2-6ceb4f92c9df");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "revert", {
get: function () {
return getUBT_ColorRecord("67b0c706-c10c-4797-a007-9b1ce8545235");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blue", {
get: function () {
return getUBT_ColorRecord("71b82b5e-b87e-4b1b-b13b-835c761d99fc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleLightest", {
get: function () {
return getUBT_ColorRecord("78f36fed-68c7-4882-a056-b3fda622cb2c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleDark", {
get: function () {
return getUBT_ColorRecord("7b9fda54-5e8c-4b3d-aa35-9a511d69e5df");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral3", {
get: function () {
return getUBT_ColorRecord("7f4b5d80-4007-43d3-a275-e312abe700f4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellowLight", {
get: function () {
return getUBT_ColorRecord("845b1f32-a12e-4389-9f67-3ae2fa9b0d2b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("85b0a09c-16b7-44b4-96d8-1f9da2408dbb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "green", {
get: function () {
return getUBT_ColorRecord("85c37060-4326-44df-a0cc-5a13f69f26d5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "teal", {
get: function () {
return getUBT_ColorRecord("8edd2770-9752-4b46-a493-80e135e23644");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "unset", {
get: function () {
return getUBT_ColorRecord("9240137f-908b-42b0-bd3f-b800caf21763");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachDark", {
get: function () {
return getUBT_ColorRecord("938ec1e5-34f4-4467-aae5-fd7a89984c47");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral2", {
get: function () {
return getUBT_ColorRecord("95b3893d-02fc-429e-99f3-28f89b523a0e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueLighter", {
get: function () {
return getUBT_ColorRecord("9887169b-0ae7-49e6-96ac-4bd3af1178d4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachLigh", {
get: function () {
return getUBT_ColorRecord("9be02ce6-47be-414a-9c8b-ec370651dac3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "lime", {
get: function () {
return getUBT_ColorRecord("9d4aed3b-1f36-4052-9d5c-34e77a615615");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "pinkNonStandard", {
get: function () {
return getUBT_ColorRecord("a1e29ef9-84ed-49d3-826c-cc69c24c7db3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "greenDarker", {
get: function () {
return getUBT_ColorRecord("a50a3956-0ce6-4416-a796-667fe54fa4a6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellow", {
get: function () {
return getUBT_ColorRecord("a93a0099-6233-4cd9-9f24-63a491bef071");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "orange", {
get: function () {
return getUBT_ColorRecord("a947cac8-4262-401d-94b7-c31c42ba15bc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral5", {
get: function () {
return getUBT_ColorRecord("aa4cac98-190b-413a-8fc2-c21902ea6b5e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanDarkest", {
get: function () {
return getUBT_ColorRecord("ae936fa8-46e1-4945-ab06-297b1675d4c4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral1", {
get: function () {
return getUBT_ColorRecord("b16bdf21-ff3f-4360-a8a7-cb36698afaf3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "transparent", {
get: function () {
return getUBT_ColorRecord("b29917b7-38c4-47f2-be97-4515098cf2e2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral10", {
get: function () {
return getUBT_ColorRecord("b4537f80-ed23-4d32-aaef-8b9dd53be850");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleLighter", {
get: function () {
return getUBT_ColorRecord("b59d16dd-20dd-49a9-92fa-1db232143f8c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleDarker", {
get: function () {
return getUBT_ColorRecord("b7cfbe79-7a84-4f1b-9194-3a0e444d8c23");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "greenLighter", {
get: function () {
return getUBT_ColorRecord("b93c6fb3-b092-48cd-9840-9ca063748e80");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanDark", {
get: function () {
return getUBT_ColorRecord("bba397ea-8a54-4af2-95d2-a10e500fe97c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "success", {
get: function () {
return getUBT_ColorRecord("be151629-8a62-4b12-b1ea-563e8353213d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purpleLight", {
get: function () {
return getUBT_ColorRecord("c3edeafe-e2af-4517-a5b9-814d25f96fb3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral9", {
get: function () {
return getUBT_ColorRecord("c5289117-fd0c-46eb-b407-29ae599a70a8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueDarker", {
get: function () {
return getUBT_ColorRecord("c8ca8c59-c581-48f7-8e21-d0bff1f606b6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "violet", {
get: function () {
return getUBT_ColorRecord("cc5fce11-6caf-4f83-a062-3c87d045aa5b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellowLightest", {
get: function () {
return getUBT_ColorRecord("ccf99b97-b006-4cf3-838e-18a31ec7485f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peachLightest", {
get: function () {
return getUBT_ColorRecord("ce399b09-df7c-48f3-a796-ba35722697d5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "primary", {
get: function () {
return getUBT_ColorRecord("d27276c0-e4ce-4d45-b89c-7ada5a5874dd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "secondary", {
get: function () {
return getUBT_ColorRecord("dad810e5-c4ab-40dc-9ab3-63c043cfc5ae");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "neutral7", {
get: function () {
return getUBT_ColorRecord("dc618da1-29e1-4b32-b176-697d63ed0603");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueNonStandarDarker", {
get: function () {
return getUBT_ColorRecord("e1b590d2-5868-4575-8190-9c4d7021a27e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "greenDark", {
get: function () {
return getUBT_ColorRecord("e4297c8c-fbc1-45cf-bd37-26d5b41da6a9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellowDarker", {
get: function () {
return getUBT_ColorRecord("e757b4a0-7402-46d6-a00c-319209d8ff2d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "indigo", {
get: function () {
return getUBT_ColorRecord("e899a76a-b1ec-41b0-936d-e7ce2081a389");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "greenDarkest", {
get: function () {
return getUBT_ColorRecord("eb901679-daca-482b-bd68-c434c83479f2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "peach", {
get: function () {
return getUBT_ColorRecord("ebcf5343-615e-40cb-a2e8-0b5f747824d7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "cyanLight", {
get: function () {
return getUBT_ColorRecord("efd1b932-24d7-4d2c-8f21-3ef2c8c84edb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "greenLight", {
get: function () {
return getUBT_ColorRecord("f3e04b12-ec38-4c39-8bde-776328a69748");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "yellowDark", {
get: function () {
return getUBT_ColorRecord("f9715390-dae9-4684-b452-9e0145dfd68d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "blueDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("fc7450fa-8faa-48b1-90ea-02176cd11a23");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "purple", {
get: function () {
return getUBT_ColorRecord("fcbb74a3-797c-455c-87b4-d4465652e5e9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "info", {
get: function () {
return getUBT_ColorRecord("fdffead9-4f49-483a-9f70-991b0cf13531");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Color, "red", {
get: function () {
return getUBT_ColorRecord("fe45b252-bf2a-494a-9a8c-72adae48034a");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_Shape = {};
var getUBT_ShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["5950c080-6e4b-48f6-89fe-55655482924b"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Shape, "soft", {
get: function () {
return getUBT_ShapeRecord("0c36bb8f-4073-4775-8c28-eb1d30eed6aa");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Shape, "medium", {
get: function () {
return getUBT_ShapeRecord("4223ce2a-7c06-4b23-afcd-7841b7559881");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Shape, "circle", {
get: function () {
return getUBT_ShapeRecord("87962f03-f5ed-42ea-801f-b98f51cb559c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Shape, "large", {
get: function () {
return getUBT_ShapeRecord("d61799bc-5a05-4315-ac46-77c3b0504beb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Shape, "none", {
get: function () {
return getUBT_ShapeRecord("f37348d0-8b88-4a75-80a6-e76e86e9bc35");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Shape, "rounded", {
get: function () {
return getUBT_ShapeRecord("fb7c5397-3c16-44fd-b5ea-36a00efdcd7c");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize = {};
var getUBT_Icons2izeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["5c868b5a-3a9c-45fd-9724-88d7df3eaaec"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "small_12", {
get: function () {
return getUBT_Icons2izeRecord("43088cb2-1b1d-4f32-b2d3-65ba14737dcd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "nonStandard_32", {
get: function () {
return getUBT_Icons2izeRecord("51091809-5176-4669-8100-2874d9c94960");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "base_24", {
get: function () {
return getUBT_Icons2izeRecord("67a32265-0427-4e06-b7c6-496df135460e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "nonStandard_18", {
get: function () {
return getUBT_Icons2izeRecord("71843981-3f48-434e-9d09-0d92f60a2591");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "nonStandard_64", {
get: function () {
return getUBT_Icons2izeRecord("8512eb1f-1008-4d7c-b0a2-265a6aafacd0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "display_36", {
get: function () {
return getUBT_Icons2izeRecord("91f8ac4b-eec9-4927-b3c7-e0bd72444cf1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "medium_20", {
get: function () {
return getUBT_Icons2izeRecord("98d3467e-0017-4aa1-981f-929b030caf06");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "nonStandard_108", {
get: function () {
return getUBT_Icons2izeRecord("9b36044e-87d6-4e9f-a8c0-6664a6a827d0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "nonStandard_16", {
get: function () {
return getUBT_Icons2izeRecord("d36cf71f-f0ad-487a-8548-306c608b9f9c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2ize, "nonStandard_14", {
get: function () {
return getUBT_Icons2izeRecord("d7aa876d-cfd2-4e80-87dd-52eb44cd09ea");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_FlexDirection = {};
var getUBT_FlexDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["71ce133f-c7fd-4b8f-96ce-86fc9740c100"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FlexDirection, "column", {
get: function () {
return getUBT_FlexDirectionRecord("1f51bc5f-99a0-4784-a349-e3c46a68084c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FlexDirection, "columnReverse", {
get: function () {
return getUBT_FlexDirectionRecord("41228103-66c8-4179-b2eb-c6560a6a8d96");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FlexDirection, "row", {
get: function () {
return getUBT_FlexDirectionRecord("4894b1a7-e8a3-4e41-8f30-8ed20a221576");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FlexDirection, "rowReverse", {
get: function () {
return getUBT_FlexDirectionRecord("a8cb076a-720c-4ce5-9779-47108235f712");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_Icons2 = {};
var getUBT_Icons2Record = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["761dc95a-0f68-4160-83a0-143749383d08"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "marriage", {
get: function () {
return getUBT_Icons2Record("01967ad4-6bbf-443e-8285-e8e57b2b0632");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cottage", {
get: function () {
return getUBT_Icons2Record("01fd0b0c-e174-41e1-b88b-9df6517c95ce");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "group", {
get: function () {
return getUBT_Icons2Record("038a4fe0-799e-494a-ab3c-211c23271654");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowRight", {
get: function () {
return getUBT_Icons2Record("046695a9-b2b2-4670-a1a9-123ce6f5fd7f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "boy", {
get: function () {
return getUBT_Icons2Record("051f2c2a-d1ce-42f4-b09b-bd094bca02f8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "add", {
get: function () {
return getUBT_Icons2Record("0714fea8-7dea-4bcf-8671-f26dfb688cc0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "chevronDown", {
get: function () {
return getUBT_Icons2Record("08166391-4813-4ac9-b20b-b990cfe18ae0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "luggage", {
get: function () {
return getUBT_Icons2Record("08c8828f-9d45-4857-90df-6ab3793a846b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "myLocationFill", {
get: function () {
return getUBT_Icons2Record("0979fad9-693b-4810-a256-195cae4fb739");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "union", {
get: function () {
return getUBT_Icons2Record("09ae4e7b-1487-4dc7-9155-9a6e066300d3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "locationOn", {
get: function () {
return getUBT_Icons2Record("0c0a76dd-c942-4b57-9437-74976a916818");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "storefront", {
get: function () {
return getUBT_Icons2Record("0c519f0f-c843-4abc-941d-f6d9f4c12ea7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "whatsapp", {
get: function () {
return getUBT_Icons2Record("0d96f6ca-9cef-4ac1-843c-81ad4c237aa6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "visibilityFill", {
get: function () {
return getUBT_Icons2Record("0dfa82bd-c1ed-42fc-90e9-e5aa423bc16d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cancel", {
get: function () {
return getUBT_Icons2Record("0e32ef3f-efa3-48ea-a1b0-568f0ee4a6f5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "personAdd", {
get: function () {
return getUBT_Icons2Record("0ec699ba-0eaa-4ce6-83ad-00eb6adc1f2b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "password", {
get: function () {
return getUBT_Icons2Record("0ed02f7d-cad7-44c6-9e53-0f56734e0f07");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "dynamicFeed", {
get: function () {
return getUBT_Icons2Record("102b4b8c-bcd3-4011-9aaa-d7bfdd542433");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "iosShare", {
get: function () {
return getUBT_Icons2Record("10688e47-0812-45e3-9169-377f63e47c75");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "calendarAdd", {
get: function () {
return getUBT_Icons2Record("11e01581-c412-423e-824a-284305392186");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "gift", {
get: function () {
return getUBT_Icons2Record("1305faf0-5480-4bff-8141-7b23376d8b2c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "record1", {
get: function () {
return getUBT_Icons2Record("13861d84-80dc-4c04-9d63-1d770681dd5d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "lDM", {
get: function () {
return getUBT_Icons2Record("143fb3dc-b108-4637-a17b-408cc1a4fce5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "reply", {
get: function () {
return getUBT_Icons2Record("144c3c28-9950-4880-a721-f92fbe7c28ef");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "partnerExchange", {
get: function () {
return getUBT_Icons2Record("15867a0f-96f6-431f-b82c-0da4464c9c56");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowOutward", {
get: function () {
return getUBT_Icons2Record("1905fa31-1db8-4232-af51-113be9cccdd0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "home", {
get: function () {
return getUBT_Icons2Record("190939d9-36b6-4191-b454-90e31962ef06");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "globeUK", {
get: function () {
return getUBT_Icons2Record("1952ef28-39f3-4883-b47a-1394459997a0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "replay", {
get: function () {
return getUBT_Icons2Record("1a48b465-71e7-4d09-b5b9-f87f76144c8b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "explore", {
get: function () {
return getUBT_Icons2Record("1c2c7434-d5dd-4a2a-9eff-49d7063aa0cb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "connectLogo", {
get: function () {
return getUBT_Icons2Record("1c301095-4bf7-4096-beea-85decd0b8bcf");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "error", {
get: function () {
return getUBT_Icons2Record("1c71bc61-b231-4c87-922a-c313d6ddf3e0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "playArrow", {
get: function () {
return getUBT_Icons2Record("1cb80687-9552-4b2d-9939-3eec621500f9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkboxFill", {
get: function () {
return getUBT_Icons2Record("1d090f65-b6a8-4450-b31b-0430867aa2b7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_ElGusto", {
get: function () {
return getUBT_Icons2Record("1d1ff2cc-8c99-45de-81be-a6c5c0e5f764");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "openNew", {
get: function () {
return getUBT_Icons2Record("1dfd3b2f-914f-410a-b6be-633c5c93b53d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_PinOneSchool", {
get: function () {
return getUBT_Icons2Record("22660839-d944-4d18-ae82-7f7d8f853b9f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "orbit", {
get: function () {
return getUBT_Icons2Record("254d3ef1-005e-4355-8f1f-7df80a0468bc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "uBT", {
get: function () {
return getUBT_Icons2Record("2882a951-2fb4-479a-a87f-f327da1b192d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "policy", {
get: function () {
return getUBT_Icons2Record("28f8245a-3cd9-42e8-8aa8-de3cd49ef203");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "radioUnchecked", {
get: function () {
return getUBT_Icons2Record("2a358645-89a2-4b9e-9e77-44c270956f4b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "public", {
get: function () {
return getUBT_Icons2Record("2b09c68d-9361-4b85-ab9c-d74804f94e37");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "eventNote", {
get: function () {
return getUBT_Icons2Record("2bba9527-6d3e-4bd7-8380-0c2de4845d73");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "help", {
get: function () {
return getUBT_Icons2Record("2c71544f-d715-40b9-82fe-a8017341e7ec");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "trove", {
get: function () {
return getUBT_Icons2Record("2d018719-66ae-4989-9dbb-b54dde21349b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "gridView", {
get: function () {
return getUBT_Icons2Record("2e1c7b32-5180-4009-98e3-5da055ca9360");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "notificationsFill", {
get: function () {
return getUBT_Icons2Record("2e749a54-d19c-4362-80fe-82ffbbfd69ad");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "calendar", {
get: function () {
return getUBT_Icons2Record("307db9b8-6f77-44b6-a601-9587539d4d6c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "tune", {
get: function () {
return getUBT_Icons2Record("31aa6503-79ac-47bc-abc4-c1470a0f9abb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "enterprise", {
get: function () {
return getUBT_Icons2Record("31ec4566-40e0-459f-ba26-7c85f670a2d0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "myLocation", {
get: function () {
return getUBT_Icons2Record("32f51bcb-30ec-4970-b53b-2e44b60944da");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_PinLock", {
get: function () {
return getUBT_Icons2Record("337fcfdd-ec24-4706-af2a-c771796c4e90");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "contactsFill", {
get: function () {
return getUBT_Icons2Record("33c801dc-95ec-4700-afff-104ce126eaae");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "eventNoteFill", {
get: function () {
return getUBT_Icons2Record("33ca9fc2-4e5d-4755-b4d7-e0649b5c6f18");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "call", {
get: function () {
return getUBT_Icons2Record("3525444b-9d1f-4c52-a922-4723c0ce07c1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "notifications", {
get: function () {
return getUBT_Icons2Record("3a0d7a28-5f0e-41eb-8766-dd9bc984f8f0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sort", {
get: function () {
return getUBT_Icons2Record("3a730ce3-50a4-4f24-83c3-835105bfb19f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "aodFill", {
get: function () {
return getUBT_Icons2Record("3c668376-fac3-401a-9378-d97065bda812");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_CommunityTradelink", {
get: function () {
return getUBT_Icons2Record("3da48273-0ed5-4609-8dd3-f28f6190645b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "scheduleFill", {
get: function () {
return getUBT_Icons2Record("3fdd2f3c-4040-42bc-85e3-aefad039c432");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "homeFill", {
get: function () {
return getUBT_Icons2Record("40ad5a6b-25f8-442a-8b98-552823e3a567");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sendMoney", {
get: function () {
return getUBT_Icons2Record("4125d6a8-da17-457a-bda0-e29fe27cf556");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "mailFill", {
get: function () {
return getUBT_Icons2Record("41ac9174-8215-434f-b067-277c7ef0ebcb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "block", {
get: function () {
return getUBT_Icons2Record("41ae034e-150a-408a-8ed3-78f1db8ee7ea");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "errorFill", {
get: function () {
return getUBT_Icons2Record("4343b5c4-be73-485f-919a-8c42fb06c6f5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "tooltipFill", {
get: function () {
return getUBT_Icons2Record("442943e0-01d4-450e-9e62-d3c53fb66b0c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkbox", {
get: function () {
return getUBT_Icons2Record("450a7217-12f4-4df4-a15c-45504366d99d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowLeft", {
get: function () {
return getUBT_Icons2Record("47f4fbb7-f2e5-4745-b966-1120481fb8d4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "personPlay", {
get: function () {
return getUBT_Icons2Record("4b903c72-8b47-4ee9-b9d0-72da2e48e323");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "signal", {
get: function () {
return getUBT_Icons2Record("4ccb171d-6f30-4cfe-aadc-64fdab936092");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "tooltip", {
get: function () {
return getUBT_Icons2Record("4cd3ad41-b170-41e4-ae1f-43e4ae7b4928");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cardOff", {
get: function () {
return getUBT_Icons2Record("4e38fd3c-e33c-4acc-8f9c-c07b7101e7e2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "keep", {
get: function () {
return getUBT_Icons2Record("4e78cf1f-85dd-4fc6-b62d-37633c21d07f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "house", {
get: function () {
return getUBT_Icons2Record("4ecc405e-a68f-4163-85bf-483b529e8f55");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "homePinFill", {
get: function () {
return getUBT_Icons2Record("4fb8c000-c28e-49e5-93d6-1a46ca0dae15");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "backspace", {
get: function () {
return getUBT_Icons2Record("51e1ef34-4966-4668-872a-bc7313d34e4e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "stopCircle", {
get: function () {
return getUBT_Icons2Record("534a0f62-e9f9-4ffc-b39b-62df5c0bf951");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "pause", {
get: function () {
return getUBT_Icons2Record("549a714b-5fca-4863-b5c2-717ffd0324c9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "calendarBusy", {
get: function () {
return getUBT_Icons2Record("5565d93a-0fe1-4cf2-ab10-3173b7fa33fe");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "gifting", {
get: function () {
return getUBT_Icons2Record("55748e60-9192-4b5a-9686-cfedad3d3bfe");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cancelFill", {
get: function () {
return getUBT_Icons2Record("569668bf-eb84-4f5d-8896-18c59ea0af08");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "turnRight", {
get: function () {
return getUBT_Icons2Record("56df2e44-a1f2-432f-a49e-58d240f7757d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "globeAsia", {
get: function () {
return getUBT_Icons2Record("593bfdba-792d-4067-b38b-867e5201b476");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "eventFill", {
get: function () {
return getUBT_Icons2Record("5a54402e-02af-48c8-af0d-91d1bdb07781");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "girl", {
get: function () {
return getUBT_Icons2Record("5f2b16ea-8416-45b8-8f83-ccf1ee554f71");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "link", {
get: function () {
return getUBT_Icons2Record("5f373e28-f02b-4ed2-b64c-a051b5f34025");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cardGear", {
get: function () {
return getUBT_Icons2Record("606307c7-e8bd-4f7f-99ce-09a63426e795");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "expandLess", {
get: function () {
return getUBT_Icons2Record("609859bb-222b-4549-a272-0a7237537ce2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "share", {
get: function () {
return getUBT_Icons2Record("625b037d-b75b-49b0-8042-72853eec2389");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "check", {
get: function () {
return getUBT_Icons2Record("64173b93-10a3-4c59-af2c-c3b013998a03");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "chevronRight", {
get: function () {
return getUBT_Icons2Record("64f7fd47-fbb4-4889-94b3-990455d7dc86");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "directionsSubway", {
get: function () {
return getUBT_Icons2Record("651e0ad5-cae1-41a0-9b53-b2e1c59d26b9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "imageGallery", {
get: function () {
return getUBT_Icons2Record("65cbcd7b-8b1f-4718-8736-814742d65ba8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "borderColor", {
get: function () {
return getUBT_Icons2Record("67ff3648-c211-4e45-bfba-5049b13629b1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "fingerprint", {
get: function () {
return getUBT_Icons2Record("697e7e46-4ba7-4792-92cf-fd25c9e93d72");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "card", {
get: function () {
return getUBT_Icons2Record("6a0fdee2-65d5-4054-9a03-b301453b03ba");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkboxDash", {
get: function () {
return getUBT_Icons2Record("6bb67cbb-c4ca-4aaf-a89a-10e296b5394b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "warning", {
get: function () {
return getUBT_Icons2Record("6bf835d0-facb-4471-a254-68add2237f0b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkCircleFill", {
get: function () {
return getUBT_Icons2Record("6d436649-dabd-449e-afa9-16c39ded9c64");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "widgets", {
get: function () {
return getUBT_Icons2Record("6e7d0422-f469-49b8-9e4d-53e28142f342");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "calendarFill", {
get: function () {
return getUBT_Icons2Record("7061c91e-09a4-4726-990b-ccb38664b700");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "draft", {
get: function () {
return getUBT_Icons2Record("711f01ca-4b00-4edc-9037-fb5e5c68f506");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "delete", {
get: function () {
return getUBT_Icons2Record("7188c903-cd71-4d06-9573-14884be682dc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowDropDown", {
get: function () {
return getUBT_Icons2Record("74c4d722-5c41-474a-8a0d-bea8500220cf");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "listAlt", {
get: function () {
return getUBT_Icons2Record("76af9e65-b846-418b-a5bb-a3df0cec1d31");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "videocamFill", {
get: function () {
return getUBT_Icons2Record("7749b73a-3d4a-4e9a-86dd-6bcba267b08f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "photoCamera", {
get: function () {
return getUBT_Icons2Record("78042bd0-55fa-4f4f-b2e7-74cf164f05df");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "eventList", {
get: function () {
return getUBT_Icons2Record("783ea5b1-d0c2-4e5c-8a7b-b187e98130c3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "letter", {
get: function () {
return getUBT_Icons2Record("78de31ce-cd56-44bc-b094-721ad2786921");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "event", {
get: function () {
return getUBT_Icons2Record("78f1778a-8f97-4ef9-8c9c-50130bef4954");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "idCard", {
get: function () {
return getUBT_Icons2Record("7a2a42c6-cafc-41bb-a093-b2c5ff9a7cb8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "refresh", {
get: function () {
return getUBT_Icons2Record("7a36a0a7-591a-4442-9168-143af08ce314");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "login", {
get: function () {
return getUBT_Icons2Record("7c019819-fab5-4f1e-bece-4fcdade0e6af");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "schedule", {
get: function () {
return getUBT_Icons2Record("7ca2b35d-0a8d-454f-9fdc-763329ab10c1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "bookOpen", {
get: function () {
return getUBT_Icons2Record("7de9ad7a-96de-4a02-946b-d0d5466f2646");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "listAltFill", {
get: function () {
return getUBT_Icons2Record("7e16e742-d9f9-42c3-ade4-2d8d48c44c78");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "floatLandscape", {
get: function () {
return getUBT_Icons2Record("7e770565-6756-489c-861a-03aa64a06828");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "videocam", {
get: function () {
return getUBT_Icons2Record("8346d388-9271-49fa-9b2c-5a38911088a4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkboxOutlineBlank", {
get: function () {
return getUBT_Icons2Record("85518b22-ee0b-4246-b791-3c32802c4878");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "contacts", {
get: function () {
return getUBT_Icons2Record("85e10228-6778-48d1-8e84-227f094b6aba");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "edit", {
get: function () {
return getUBT_Icons2Record("86a23e9d-91f9-4fca-9354-a2ddc5b38457");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "expandMore", {
get: function () {
return getUBT_Icons2Record("88ecfd16-0c74-471a-9eb7-24ef16c673cb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "folder", {
get: function () {
return getUBT_Icons2Record("8af2a151-f264-4de2-b97e-b3027492d43b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "filterAlt", {
get: function () {
return getUBT_Icons2Record("8ed754ea-2b4c-48b5-939f-4ec30b7a7354");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "bookClosed", {
get: function () {
return getUBT_Icons2Record("8f9d52f6-785b-4315-9fb9-7dca224db806");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "quoteFill", {
get: function () {
return getUBT_Icons2Record("900a6e7d-3539-4ceb-b038-281a6b9ae564");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "menu", {
get: function () {
return getUBT_Icons2Record("913b1341-974f-41fa-b3d2-8c173d29ae47");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "notes", {
get: function () {
return getUBT_Icons2Record("9428e91a-7445-4eff-a625-6563174cfd8e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "callFill", {
get: function () {
return getUBT_Icons2Record("953d45c9-d5e1-4767-8b63-d2dcf0752f13");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "folderOpen", {
get: function () {
return getUBT_Icons2Record("97af837b-8428-4292-99c5-dd60bad9c300");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "bookmarkFill", {
get: function () {
return getUBT_Icons2Record("97dfc4b7-5c87-4cf2-b1a6-b740f5c1f486");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "close", {
get: function () {
return getUBT_Icons2Record("98231ddd-01a5-4cc5-99dd-758d32eef751");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "family", {
get: function () {
return getUBT_Icons2Record("98250881-935b-48c2-8d01-997c69c7c0a3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "playCircle", {
get: function () {
return getUBT_Icons2Record("9ed563f2-c328-44ee-8812-51d88f3862dd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "globe", {
get: function () {
return getUBT_Icons2Record("9f6709a5-3f25-4783-a603-09a816e52aa3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "schoolFill", {
get: function () {
return getUBT_Icons2Record("a014cf6f-cb89-49d6-80ad-8b1ee8dfa941");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "settings", {
get: function () {
return getUBT_Icons2Record("a3a8997b-297b-4ef1-aed0-2384be658ed2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkboxDashFill", {
get: function () {
return getUBT_Icons2Record("a618e000-d4f9-41e1-a33f-e2fb334b59e7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "bookmark", {
get: function () {
return getUBT_Icons2Record("a73519f3-9a59-4ca0-a7b3-502a2243eb9f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowRightAlt", {
get: function () {
return getUBT_Icons2Record("a8cf78de-1154-4db5-bffb-e06ad12e6056");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "remove", {
get: function () {
return getUBT_Icons2Record("aa6d64e1-b646-4687-9d76-b06980882167");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "homePIn", {
get: function () {
return getUBT_Icons2Record("ab0942f0-9de6-4f70-bd6f-384c28e09d87");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "nearMe", {
get: function () {
return getUBT_Icons2Record("adfcacc5-456f-4a69-84ed-970b9327d191");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "attachFile", {
get: function () {
return getUBT_Icons2Record("b27013a5-8612-4010-a849-44a7ff7cb50b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_OneSchoolGlobal", {
get: function () {
return getUBT_Icons2Record("b27cae42-c155-419b-9c52-a6ded1478bf8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "person", {
get: function () {
return getUBT_Icons2Record("b3936174-dfa9-4604-a4e7-d97c384c06da");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "repeat", {
get: function () {
return getUBT_Icons2Record("b62d5d0b-5744-47d6-8415-e22c79503f89");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "search", {
get: function () {
return getUBT_Icons2Record("b66c2fec-a1aa-4787-ba19-79a7993bb086");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "calendarBusyFill", {
get: function () {
return getUBT_Icons2Record("b91e1e92-44c2-42b6-8057-d2b67e6a3fce");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "personFill", {
get: function () {
return getUBT_Icons2Record("ba1e4aea-ea5c-4c90-90c4-7c69df1970ec");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "infoFill", {
get: function () {
return getUBT_Icons2Record("ba1ee3b1-9de8-41a7-9d41-d05eaabe60b1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "history", {
get: function () {
return getUBT_Icons2Record("ba3df0b5-1b83-4c43-aeaf-898b25db9f7c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "mail", {
get: function () {
return getUBT_Icons2Record("bbb1690b-a9c4-4329-8441-7aec6bffc14f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_PinCountry", {
get: function () {
return getUBT_Icons2Record("bc43fe1e-3e97-4b79-ad53-29dd65875a61");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "domain", {
get: function () {
return getUBT_Icons2Record("bc79bfae-bf5a-42e9-8a25-5f7ffb15643f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_PinMember", {
get: function () {
return getUBT_Icons2Record("be0942ca-62a0-4714-a777-e60d054467c1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "list", {
get: function () {
return getUBT_Icons2Record("bff74171-1624-46a3-a510-db5d33b7bf3e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "visibility", {
get: function () {
return getUBT_Icons2Record("c176e42d-75b8-4192-9fff-c442300a50c1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "payments", {
get: function () {
return getUBT_Icons2Record("c1af3a7c-8bc1-4c0e-b1e9-bd3828753c0d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "assemble", {
get: function () {
return getUBT_Icons2Record("c23327a4-3eaf-413a-9265-01d068aafec8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "accountCircleFill", {
get: function () {
return getUBT_Icons2Record("c46a02e3-6f2c-4460-abac-b5f48a644ea7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "locationOnFill", {
get: function () {
return getUBT_Icons2Record("c483fbf3-95c0-4401-8b6f-8543ee7c35d5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "checkCircle", {
get: function () {
return getUBT_Icons2Record("c60ed7fb-f4a1-4ba3-a1f1-e5db4b751804");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "removeFill", {
get: function () {
return getUBT_Icons2Record("c7de90b6-2331-4a23-8673-820f5111cca0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "addCircle", {
get: function () {
return getUBT_Icons2Record("c996fa79-7b40-4447-8652-c9e635d4741c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowLeftAlt", {
get: function () {
return getUBT_Icons2Record("cacda8b6-18de-4d1b-ade1-be59af00de52");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "flag", {
get: function () {
return getUBT_Icons2Record("cd219881-7949-49d3-bd88-91280e24a506");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "accountCircle", {
get: function () {
return getUBT_Icons2Record("ce22e045-ec31-4e83-b5f3-9b14f1eefcbb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "shoppingBasket", {
get: function () {
return getUBT_Icons2Record("ce7fab1d-5561-4ad4-9716-40090b87af51");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "contentCopy", {
get: function () {
return getUBT_Icons2Record("cf72d202-480f-4fe5-a8c8-7021673034f7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_HR100", {
get: function () {
return getUBT_Icons2Record("d00930ac-8425-4356-b7c6-4c55c910aea8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "visibilityOff", {
get: function () {
return getUBT_Icons2Record("d08478ad-9e1a-4c88-9dba-78eaea3cb291");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "school", {
get: function () {
return getUBT_Icons2Record("d15b6b62-6b8c-45d8-b8e4-142d44c83ec9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "houseFill", {
get: function () {
return getUBT_Icons2Record("d4413405-ebb2-4d3c-bbd2-43e489cb09e8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "arrowDropUp", {
get: function () {
return getUBT_Icons2Record("d4f63836-85a1-4f9a-9d57-4a324075707c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "shoppingCart", {
get: function () {
return getUBT_Icons2Record("d7863646-a37e-4bd6-aedc-72183f218a9e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cottageFill", {
get: function () {
return getUBT_Icons2Record("d8b16ffa-c27c-4afa-b73c-6c6949fc39c8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "orbitText", {
get: function () {
return getUBT_Icons2Record("d983ec69-df26-4a49-9482-4f7aa99ceebc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "feedItem", {
get: function () {
return getUBT_Icons2Record("d99f1b4c-3673-4cc0-a3ab-b01d6059e46c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "chevronLeft", {
get: function () {
return getUBT_Icons2Record("da912e1e-5017-423f-a27d-410797f75821");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "aod", {
get: function () {
return getUBT_Icons2Record("dc9e6375-f296-4eab-900b-33553d24fab7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "moreVertical", {
get: function () {
return getUBT_Icons2Record("ddfcefe1-b2ac-4720-98ee-28658e3f4177");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "quote", {
get: function () {
return getUBT_Icons2Record("deec24f4-831f-4b87-bc37-3f92ab62ef11");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sMS", {
get: function () {
return getUBT_Icons2Record("e2b0003e-25ec-41f2-9e14-00a2237353bc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "notificationsOff", {
get: function () {
return getUBT_Icons2Record("e4119eb7-0c25-419d-8340-568a03b0e1d6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "lock", {
get: function () {
return getUBT_Icons2Record("e493382b-67d4-42e6-91b9-db927bba8425");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "warningFill", {
get: function () {
return getUBT_Icons2Record("e5c898e5-4553-49d0-a045-8f7dab8084b2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_PinHouse", {
get: function () {
return getUBT_Icons2Record("e708de25-9eb6-45b0-8a99-597ce4fddba5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "download", {
get: function () {
return getUBT_Icons2Record("e86df772-a4d7-4eb9-b75e-7b91f89d6363");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "radioChecked", {
get: function () {
return getUBT_Icons2Record("f0ef9a69-7505-43c5-a83d-c9d3b456e780");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "moreHorizontal", {
get: function () {
return getUBT_Icons2Record("f3a35331-2768-478e-8d50-e1dce38559bc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "widgetsFill", {
get: function () {
return getUBT_Icons2Record("f3e18937-6a20-4f30-b105-b8edf0a3877e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "info", {
get: function () {
return getUBT_Icons2Record("f4cb4cb8-0378-49fb-bbf8-b3132e61c1ab");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "send", {
get: function () {
return getUBT_Icons2Record("f64340c2-0f84-4eed-b61c-a0142f3df5c6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "clock", {
get: function () {
return getUBT_Icons2Record("f6b5303c-159a-413e-9cac-f717149da346");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "household", {
get: function () {
return getUBT_Icons2Record("f70d86e0-1a95-49a7-acd6-38be58ffef5c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "sVG_PinLocality", {
get: function () {
return getUBT_Icons2Record("f919f6d4-df1b-45b3-8fae-789c332d6e6e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "autorenew", {
get: function () {
return getUBT_Icons2Record("f9654262-1712-4ec7-9486-0b4fa24e1d47");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "publish", {
get: function () {
return getUBT_Icons2Record("fa177ef4-da9a-4abb-8932-6242e54625f0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "inbox", {
get: function () {
return getUBT_Icons2Record("fada5b0e-d8d6-41af-b9d8-2be4a071cd75");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "dragIndicator", {
get: function () {
return getUBT_Icons2Record("fe74b0de-e2ce-4b19-9045-e594f412a630");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "logout", {
get: function () {
return getUBT_Icons2Record("fe7564bc-5ed5-45f4-aed5-4b2e1f5877fa");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Icons2, "cached", {
get: function () {
return getUBT_Icons2Record("fea2d750-e35b-49fd-9cd8-4eb34f32d8ca");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_ColumnBehaviour = {};
var getUBT_ColumnBehaviourRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["8df84da6-4ee7-4003-94fd-7fef40c0433b"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ColumnBehaviour, "reduceMiddle", {
get: function () {
return getUBT_ColumnBehaviourRecord("1f4d7dfe-7134-4548-9b8a-5766b2870b98");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ColumnBehaviour, "sameSize", {
get: function () {
return getUBT_ColumnBehaviourRecord("2db7368c-7964-4c69-9950-a7f9ed6ce605");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ColumnBehaviour, "reduceLast", {
get: function () {
return getUBT_ColumnBehaviourRecord("349bfed5-fcc6-458c-89d1-e664e87360ac");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ColumnBehaviour, "reduceFirst", {
get: function () {
return getUBT_ColumnBehaviourRecord("e05417aa-cf89-40fa-b522-fea8d6a24000");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_ColumnBehaviour, "expandMiddle", {
get: function () {
return getUBT_ColumnBehaviourRecord("e7f587ad-6cbb-4373-84c6-36e0711d9703");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_FontSize = {};
var getUBT_FontSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["b7b01d95-224a-4a59-8320-00ac87c8c15d"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "heading1", {
get: function () {
return getUBT_FontSizeRecord("1a0d6a49-f43e-40ee-a8fd-0066a663ecf2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "doubleExtraSmall", {
get: function () {
return getUBT_FontSizeRecord("4aec019d-0785-4536-8d5d-ccd64a8f1cb2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "heading6", {
get: function () {
return getUBT_FontSizeRecord("59c90066-6dc3-47f2-a136-b66c9b6a4769");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "heading3", {
get: function () {
return getUBT_FontSizeRecord("687365cc-97da-4fc7-ba13-59ec4b73f5e4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "heading2", {
get: function () {
return getUBT_FontSizeRecord("6ffca60c-607f-4ec0-8e6e-d7ebd942f6d4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "base", {
get: function () {
return getUBT_FontSizeRecord("81883c37-ffcd-4a9c-8214-da3cce9318e9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "label", {
get: function () {
return getUBT_FontSizeRecord("a2605a0a-6427-4966-adf2-667e245ccf2f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "extraSmall", {
get: function () {
return getUBT_FontSizeRecord("a87a69cd-c0ae-4561-9dd6-a8bdc20ca209");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "heading4", {
get: function () {
return getUBT_FontSizeRecord("caeebac3-8ee1-4b13-b099-5987cab93997");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "small", {
get: function () {
return getUBT_FontSizeRecord("d85f0341-b6d0-4460-b8f1-77218c0e044d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "heading5", {
get: function () {
return getUBT_FontSizeRecord("e9e010dd-3a7f-45c8-af50-6d1ca540a50c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_FontSize, "display", {
get: function () {
return getUBT_FontSizeRecord("e9eb6493-6ec3-431c-a967-b22b98eaca78");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize = {};
var getUBT_AvatarSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["cfc77058-26f2-42a2-b2c8-02a6d2a82a1d"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "smallBase_48", {
get: function () {
return getUBT_AvatarSizeRecord("078547e7-dd0c-40d7-a96e-130c2ab66af7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "doubleExtraLarge_176", {
get: function () {
return getUBT_AvatarSizeRecord("3365b541-7ef0-43d0-bb25-541ac5b7b0b9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "medium_60", {
get: function () {
return getUBT_AvatarSizeRecord("3f4ce68f-bfe8-4af0-8c73-f3e2b523859b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "large_65", {
get: function () {
return getUBT_AvatarSizeRecord("775b02bb-c577-4906-9f9e-33f8503674d1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "extraSmall_32", {
get: function () {
return getUBT_AvatarSizeRecord("823268fa-1c77-479d-afc0-3990a459ca05");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "fullHeight_100vh", {
get: function () {
return getUBT_AvatarSizeRecord("a9e89f87-bf60-49a3-9cba-ff640e2e10e0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "doubleExtraSmall_20", {
get: function () {
return getUBT_AvatarSizeRecord("c30f48f7-bbeb-4466-ae5d-74928ad7bf79");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "fullHeight_100PerCent", {
get: function () {
return getUBT_AvatarSizeRecord("d0112654-90f7-4a27-818b-f8c8de9f7705");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "small_40", {
get: function () {
return getUBT_AvatarSizeRecord("e01639de-7335-42dd-b592-54e53cfc36c9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "extraLarge_100", {
get: function () {
return getUBT_AvatarSizeRecord("e2286c5e-37fd-48ea-8200-8f3d7c5ae0fd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize, "base_52", {
get: function () {
return getUBT_AvatarSizeRecord("fe78b036-f038-442d-826b-7224a60e5a90");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_VerticalAlign = {};
var getUBT_VerticalAlignRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["dba31182-5195-4ea6-9502-37195d2de889"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_VerticalAlign, "top", {
get: function () {
return getUBT_VerticalAlignRecord("1d66013f-d870-4e82-8e8c-57001bd31586");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_VerticalAlign, "center", {
get: function () {
return getUBT_VerticalAlignRecord("2f06c740-a5bd-416a-8912-fe4d8341c208");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_VerticalAlign, "bottom", {
get: function () {
return getUBT_VerticalAlignRecord("b42c001f-fb60-41ed-9910-aa1792e5dd25");
}
});

Connect2_LegacySharedModel.staticEntities.uBT_Size = {};
var getUBT_SizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["e18a3aeb-48c0-4cfb-ae8a-f06bd2918ec5"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "doubleExtraLarge", {
get: function () {
return getUBT_SizeRecord("0844bebb-5226-468b-86e8-72f61a7f93e0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "none", {
get: function () {
return getUBT_SizeRecord("08be7f0b-cf16-46c6-b25c-3a0a6cb01158");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "medium", {
get: function () {
return getUBT_SizeRecord("355f0849-d9d4-4fec-872e-d4a426c7aada");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "extraLarge", {
get: function () {
return getUBT_SizeRecord("3615c822-6889-4ddd-abe2-01c202138a9e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "base", {
get: function () {
return getUBT_SizeRecord("531e9a8b-9545-4d16-84c5-d14341c81aeb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "extraSmall", {
get: function () {
return getUBT_SizeRecord("7a79672a-3f95-45d0-a13f-03aa177f7bc4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "smallBase", {
get: function () {
return getUBT_SizeRecord("8cf9b30a-d783-4182-a793-67935fb7ba2f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "large", {
get: function () {
return getUBT_SizeRecord("adc0cb24-0a84-47c6-b2ac-c842b0fdb94a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.uBT_Size, "small", {
get: function () {
return getUBT_SizeRecord("e7190f3c-0aab-4540-befc-7a7373406b70");
}
});

Connect2_LegacySharedModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

Connect2_LegacySharedModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

Connect2_LegacySharedModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

Connect2_LegacySharedModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

Connect2_LegacySharedModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

Connect2_LegacySharedModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

Connect2_LegacySharedModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

Connect2_LegacySharedModel.staticEntities.connect_Subscription_Plan = {};
var getConnect_Subscription_PlanRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["06b6584a-0314-473c-8c1d-a929de96e4f9"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Plan, "advancePlus", {
get: function () {
return getConnect_Subscription_PlanRecord("68628e63-2daa-461c-aa02-2117212bb30b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Plan, "regional", {
get: function () {
return getConnect_Subscription_PlanRecord("82025d29-22e5-4ff0-b37c-1e7af2af73c3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Plan, "global", {
get: function () {
return getConnect_Subscription_PlanRecord("9f199878-15ec-4c77-849b-b67c9871bc71");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Plan, "free", {
get: function () {
return getConnect_Subscription_PlanRecord("e6e49f5e-d53f-4f85-9578-85d71f32e6da");
}
});

Connect2_LegacySharedModel.staticEntities.contactBase_Country = {};
var getContactBase_CountryRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["06c475ae-db9a-496f-89d4-c0539e7f55d0"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "unitedStates", {
get: function () {
return getContactBase_CountryRecord("17e26d4b-d515-48e5-9831-b35636914273");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "switzerland", {
get: function () {
return getContactBase_CountryRecord("1c46ab4b-a6a3-4da1-9cb7-b2a4318c7454");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "trinidad", {
get: function () {
return getContactBase_CountryRecord("2412bcf7-6366-497d-9236-128d040026b9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "sweden", {
get: function () {
return getContactBase_CountryRecord("295a07e8-02cb-4146-93d3-774232b92aef");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "germany", {
get: function () {
return getContactBase_CountryRecord("2e567ff4-29af-4b05-9049-35b82a19ad1e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "unitedKingdom", {
get: function () {
return getContactBase_CountryRecord("36cceff9-5dea-49be-92a1-f1f42ee21b9b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "canada", {
get: function () {
return getContactBase_CountryRecord("4298e9d1-171f-4bf0-8cec-5f68a289c474");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "saintVincent", {
get: function () {
return getContactBase_CountryRecord("4d543049-402c-42e4-944f-d044b2e845bb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "australia", {
get: function () {
return getContactBase_CountryRecord("7160700d-69b1-4996-89d4-27d16cdf640c");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "netherlands", {
get: function () {
return getContactBase_CountryRecord("749aa609-f37f-4bec-997e-8f9596c69b9f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "denmark", {
get: function () {
return getContactBase_CountryRecord("7a6e1444-8114-4a88-aada-d91a292b3dc5");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "ireland", {
get: function () {
return getContactBase_CountryRecord("8dd4a233-cb41-4b49-86ad-930c53f88eb3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "argentina", {
get: function () {
return getContactBase_CountryRecord("9fce32a4-311b-42c8-9f1a-fc6cc7a37a23");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "france", {
get: function () {
return getContactBase_CountryRecord("c11fd0ca-a3fc-4df7-bee6-a2ac3c6b9a99");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "barbados", {
get: function () {
return getContactBase_CountryRecord("c4cf7b48-f30c-49d4-a240-7e4fff35d400");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "newZealand", {
get: function () {
return getContactBase_CountryRecord("db16461c-e22d-44a5-b3c8-0216b68bcf07");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "italy", {
get: function () {
return getContactBase_CountryRecord("ee9dd1c5-72d7-4324-9289-792183b6c9ec");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.contactBase_Country, "jamaica", {
get: function () {
return getContactBase_CountryRecord("f23421e6-2139-4945-b0c9-e6af43f7004c");
}
});

Connect2_LegacySharedModel.staticEntities.connect_Entity = {};
var getConnect_EntityRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["2710e296-7733-44ad-8ef9-bbcd4c4dd77c"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "household", {
get: function () {
return getConnect_EntityRecord("57dd184c-b9fc-4a7f-9f9a-f20e6e275fe3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "supperMeetings_aka_Subdivisions", {
get: function () {
return getConnect_EntityRecord("62a170b3-4134-43b4-a09f-3e030e687bfd");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "interchange", {
get: function () {
return getConnect_EntityRecord("6f037faf-a5dc-4f83-b491-b5a1af3012c2");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "locality", {
get: function () {
return getConnect_EntityRecord("78e8b5bb-7b51-447b-8f03-ac3f57c4bab3");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "country", {
get: function () {
return getConnect_EntityRecord("a35b9acc-2c9c-4d8c-95bf-3842b859880e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "oneSchoolGlobal", {
get: function () {
return getConnect_EntityRecord("a896e28c-f387-4cf4-93f1-7ba6b8f3ac64");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "member", {
get: function () {
return getConnect_EntityRecord("dbaf9275-057c-4718-b4fb-c4b31ae95ccc");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Entity, "feedItem", {
get: function () {
return getConnect_EntityRecord("e22d3178-31c6-411a-a572-083e8aa9db11");
}
});

Connect2_LegacySharedModel.staticEntities.imageSize = {};
var getImageSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["389ed431-2686-4fe1-9cf0-1e588caa7ea2"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.imageSize, "large", {
get: function () {
return getImageSizeRecord("b8989d10-6db9-4416-8ad1-cbc113960ae8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.imageSize, "medium", {
get: function () {
return getImageSizeRecord("df1b802e-04f6-49ad-aa61-46503f0ab877");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.imageSize, "small", {
get: function () {
return getImageSizeRecord("e8f0625e-a573-4bc8-a384-182271dcabf5");
}
});

Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region = {};
var getConnect_Subscription_RegionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["751b61ab-04b4-4254-a7d3-4d0e816e1965"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region, "newZealand", {
get: function () {
return getConnect_Subscription_RegionRecord("5a4b8c65-d4af-4953-9600-dd485ac25e4b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region, "australia", {
get: function () {
return getConnect_Subscription_RegionRecord("66652adc-ed9d-4e36-822f-949623c061d8");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region, "global", {
get: function () {
return getConnect_Subscription_RegionRecord("9122cb69-c4da-430f-8438-545b09affa2f");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region, "northAmerica_Caribbean_Argentina", {
get: function () {
return getConnect_Subscription_RegionRecord("a689ecde-6b84-4cd7-8edf-c91fccd1af9b");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region, "locality", {
get: function () {
return getConnect_Subscription_RegionRecord("a81f507c-5883-4873-93ed-1f35cb7473f9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.connect_Subscription_Region, "europe_UK_Ireland", {
get: function () {
return getConnect_Subscription_RegionRecord("d9cb4179-4977-4ae9-bfdb-e075def53ae1");
}
});

Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType = {};
var getMyBookmarks_ObjectTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["fe9b0d8f-ebbc-40ef-9656-bcd3ff4ff144"].staticEntities["fcd90c60-8ab8-4cbf-920e-b2bc935b5137"][record];
};
Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "oneSchoolGlobal", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("3a8efbd2-60e6-4ac0-9530-1f8aaf3fbfc0");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "contact", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("69c4b072-c8f1-45c3-b37a-fff8ae5d83bb");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "news", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("73375254-03da-429b-a414-55e045a7ffac");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "subdivision", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("dc61e1a2-7207-4e1e-8787-c36e87c4b7d9");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "campusCo", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("e5d1dd55-062c-4830-919d-c0546acff53e");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "communityBusiness", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("f9b3e1dc-f33f-4d84-89f5-95fe4af185df");
}
});

Object.defineProperty(Connect2_LegacySharedModel.staticEntities.myBookmarks_ObjectType, "locality", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("fd16c400-f618-4619-a8b9-0f6e084766cc");
}
});

});
