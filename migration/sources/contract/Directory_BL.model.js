define("Directory_BL.model$ContentEmailRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var ContentEmailRec = (function (_super) {
__extends(ContentEmailRec, _super);
function ContentEmailRec(defaults) {
_super.apply(this, arguments);
}
ContentEmailRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("EmailTo", "emailToAttr", "EmailTo", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContentEmailRec.init();
return ContentEmailRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.ContentEmailRec = ContentEmailRec;

});
define("Directory_BL.model$LocalityHouseholdsItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "Directory_BL.model", "ContactBase_IS.model$PhotoUrlRec", "Directory_BL.referencesHealth", "Directory_BL.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, Directory_BLModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("Photo340", "photo340Attr", "Photo340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsItemRec.init();
return LocalityHouseholdsItemRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.LocalityHouseholdsItemRec = LocalityHouseholdsItemRec;

});
define("Directory_BL.model$CacheableGeocodeInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
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
Directory_BLModel.CacheableGeocodeInformationRec = CacheableGeocodeInformationRec;

});
define("Directory_BL.model$SyncLogOperationRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var SyncLogOperationRec = (function (_super) {
__extends(SyncLogOperationRec, _super);
function SyncLogOperationRec(defaults) {
_super.apply(this, arguments);
}
SyncLogOperationRec.attributesToDeclare = function () {
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
SyncLogOperationRec.init();
return SyncLogOperationRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.SyncLogOperationRec = SyncLogOperationRec;

});
define("Directory_BL.model$SubdivisionsItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "Directory_BL.model", "ContactBase_IS.model$HallPhotoRec", "Directory_BL.referencesHealth", "Directory_BL.referencesHealth$ContactBase_IS", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel, Directory_BLModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HallPhotoRec());
}, true, ContactBase_ISModel.HallPhotoRec), 
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
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
Directory_BLModel.SubdivisionsItemRec = SubdivisionsItemRec;

});
define("Directory_BL.model$UpdateFeedDirectoryItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var UpdateFeedDirectoryItemRec = (function (_super) {
__extends(UpdateFeedDirectoryItemRec, _super);
function UpdateFeedDirectoryItemRec(defaults) {
_super.apply(this, arguments);
}
UpdateFeedDirectoryItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TypeId", "typeIdAttr", "TypeId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GenderId", "genderIdAttr", "GenderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdateDateTime", "lastUpdateDateTimeAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BadgeFirstLetter", "badgeFirstLetterAttr", "BadgeFirstLetter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BadgeSecondLetter", "badgeSecondLetterAttr", "BadgeSecondLetter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BadgeColour", "badgeColourAttr", "BadgeColour", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsRead", "isReadAttr", "IsRead", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdersTaken", "householdersTakenAttr", "HouseholdersTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpdateFeedDirectoryItemRec.init();
return UpdateFeedDirectoryItemRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.UpdateFeedDirectoryItemRec = UpdateFeedDirectoryItemRec;

});
define("Directory_BL.model$GenderRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var GenderRec = (function (_super) {
__extends(GenderRec, _super);
function GenderRec(defaults) {
_super.apply(this, arguments);
}
GenderRec.attributesToDeclare = function () {
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
GenderRec.init();
return GenderRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.GenderRec = GenderRec;

});
define("Directory_BL.model$ContactBaseUpdateFeedSyncLogRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var ContactBaseUpdateFeedSyncLogRec = (function (_super) {
__extends(ContactBaseUpdateFeedSyncLogRec, _super);
function ContactBaseUpdateFeedSyncLogRec(defaults) {
_super.apply(this, arguments);
}
ContactBaseUpdateFeedSyncLogRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OperationId", "operationIdAttr", "OperationId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ContactBaseUpdateFeedId", "contactBaseUpdateFeedIdAttr", "ContactBaseUpdateFeedId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactBaseUpdateFeedSyncLogRec.init();
return ContactBaseUpdateFeedSyncLogRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.ContactBaseUpdateFeedSyncLogRec = ContactBaseUpdateFeedSyncLogRec;

});
define("Directory_BL.model$DirectoryEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var DirectoryEventRec = (function (_super) {
__extends(DirectoryEventRec, _super);
function DirectoryEventRec(defaults) {
_super.apply(this, arguments);
}
DirectoryEventRec.attributesToDeclare = function () {
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
DirectoryEventRec.init();
return DirectoryEventRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.DirectoryEventRec = DirectoryEventRec;

});
define("Directory_BL.model$LocalityResultItemWithGPSRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "Directory_BL.model", "ContactBase_IS.model$HallPhotoRec", "Directory_BL.referencesHealth", "Directory_BL.referencesHealth$ContactBase_IS", "ContactBase_IS.model$CountryRec"], function (exports, OutSystems, ContactBase_ISModel, Directory_BLModel) {
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
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HallPhotoRec());
}, true, ContactBase_ISModel.HallPhotoRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryRec());
}, true, ContactBase_ISModel.CountryRec), 
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
Directory_BLModel.LocalityResultItemWithGPSRec = LocalityResultItemWithGPSRec;

});
define("Directory_BL.model$DirectoryAPIFilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
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
Directory_BLModel.DirectoryAPIFilterRec = DirectoryAPIFilterRec;

});
define("Directory_BL.model$FeedUpdateTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var FeedUpdateTypeRec = (function (_super) {
__extends(FeedUpdateTypeRec, _super);
function FeedUpdateTypeRec(defaults) {
_super.apply(this, arguments);
}
FeedUpdateTypeRec.attributesToDeclare = function () {
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
FeedUpdateTypeRec.init();
return FeedUpdateTypeRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.FeedUpdateTypeRec = FeedUpdateTypeRec;

});
define("Directory_BL.model$ContactBaseUpdateFeedReadStateRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var ContactBaseUpdateFeedReadStateRec = (function (_super) {
__extends(ContactBaseUpdateFeedReadStateRec, _super);
function ContactBaseUpdateFeedReadStateRec(defaults) {
_super.apply(this, arguments);
}
ContactBaseUpdateFeedReadStateRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ContactBaseUpdateFeedId", "contactBaseUpdateFeedIdAttr", "ContactBaseUpdateFeedId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactBaseUpdateFeedReadStateRec.init();
return ContactBaseUpdateFeedReadStateRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.ContactBaseUpdateFeedReadStateRec = ContactBaseUpdateFeedReadStateRec;

});
define("Directory_BL.model$CountryWithMapPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
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
Directory_BLModel.CountryWithMapPositionRec = CountryWithMapPositionRec;

});
define("Directory_BL.model$ContactBaseUpdateFeedRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var ContactBaseUpdateFeedRec = (function (_super) {
__extends(ContactBaseUpdateFeedRec, _super);
function ContactBaseUpdateFeedRec(defaults) {
_super.apply(this, arguments);
}
ContactBaseUpdateFeedRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TypeId", "typeIdAttr", "TypeId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GenderId", "genderIdAttr", "GenderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionId", "subdivisionIdAttr", "SubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdateDateTime", "lastUpdateDateTimeAttr", "LastUpdateDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactBaseUpdateFeedRec.init();
return ContactBaseUpdateFeedRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.ContactBaseUpdateFeedRec = ContactBaseUpdateFeedRec;

});
define("Directory_BL.model$RecurrenceTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
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
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RecurrenceTypeRec.init();
return RecurrenceTypeRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.RecurrenceTypeRec = RecurrenceTypeRec;

});
define("Directory_BL.model$InterchangeItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "Directory_BL.model", "ContactBase_IS.model$HallPhotoExtensiveRec", "Directory_BL.referencesHealth", "Directory_BL.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, Directory_BLModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HallPhotoExtensiveRec());
}, true, ContactBase_ISModel.HallPhotoExtensiveRec), 
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
Directory_BLModel.InterchangeItemRec = InterchangeItemRec;

});
define("Directory_BL.model$LocalityMenuRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var LocalityMenuRec = (function (_super) {
__extends(LocalityMenuRec, _super);
function LocalityMenuRec(defaults) {
_super.apply(this, arguments);
}
LocalityMenuRec.attributesToDeclare = function () {
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
LocalityMenuRec.init();
return LocalityMenuRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.LocalityMenuRec = LocalityMenuRec;

});
define("Directory_BL.model$AdvancedSearch_FilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model"], function (exports, OutSystems, Directory_BLModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_FilterRec = (function (_super) {
__extends(AdvancedSearch_FilterRec, _super);
function AdvancedSearch_FilterRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_FilterRec.attributesToDeclare = function () {
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
AdvancedSearch_FilterRec.init();
return AdvancedSearch_FilterRec;
})(OS.DataTypes.GenericRecord);
Directory_BLModel.AdvancedSearch_FilterRec = AdvancedSearch_FilterRec;

});
define("Directory_BL.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Directory_BLModel = exports;
});
