define("Connect_Geography_CS.model$UI_OneSchoolGlobalRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_OneSchoolGlobalRec = (function (_super) {
__extends(UI_OneSchoolGlobalRec, _super);
function UI_OneSchoolGlobalRec(defaults) {
_super.apply(this, arguments);
}
UI_OneSchoolGlobalRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CommunityBusinessId", "communityBusinessIdAttr", "CommunityBusinessId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoSignedURL", "photoSignedURLAttr", "PhotoSignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_OneSchoolGlobalRec.init();
return UI_OneSchoolGlobalRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_OneSchoolGlobalRec = UI_OneSchoolGlobalRec;

});
define("Connect_Geography_CS.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord = (function (_super) {
__extends(TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord, _super);
function TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconColorId", "iconColorIdAttr", "IconColorId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord._isAnonymousRecord = true;
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord.UniqueId = "bce3aa6e-5ee7-c768-c6c5-f058021a7f2f";
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord.init();
return TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord = TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;

});
define("Connect_Geography_CS.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model", "Connect_Geography_CS.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList = (function (_super) {
__extends(TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList, _super);
function TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList.itemType = Connect_Geography_CSModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;
return TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
Connect_Geography_CSModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList = TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList;

});
define("Connect_Geography_CS.model$UI_StatisticsTextsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_StatisticsTextsRec = (function (_super) {
__extends(UI_StatisticsTextsRec, _super);
function UI_StatisticsTextsRec(defaults) {
_super.apply(this, arguments);
}
UI_StatisticsTextsRec.attributesToDeclare = function () {
return [
this.attr("Members", "membersAttr", "Members", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Households", "householdsAttr", "Households", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Localities", "localitiesAttr", "Localities", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Brothers", "brothersAttr", "Brothers", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Sisters", "sistersAttr", "Sisters", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SupperMeetings", "supperMeetingsAttr", "SupperMeetings", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Distance", "distanceAttr", "Distance", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_StatisticsTextsRec.init();
return UI_StatisticsTextsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_StatisticsTextsRec = UI_StatisticsTextsRec;

});
define("Connect_Geography_CS.model$UI_LocalityStatisticsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnectLibrary.model$StatisticsOptionsRec", "Connect_Geography_CS.referencesHealth", "Connect_Geography_CS.referencesHealth$UBTConnectLibrary", "Connect_Geography_CS.model$UI_StatisticsTextsRec"], function (exports, OutSystems, UBTConnectLibraryModel, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityStatisticsRec = (function (_super) {
__extends(UI_LocalityStatisticsRec, _super);
function UI_LocalityStatisticsRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityStatisticsRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Statistics", "statisticsAttr", "Statistics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.StatisticsOptionsRec());
}, true, UBTConnectLibraryModel.StatisticsOptionsRec), 
this.attr("UI_TypedStatisticsTexts", "uI_TypedStatisticsTextsAttr", "UI_TypedStatisticsTexts", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_StatisticsTextsRec());
}, true, Connect_Geography_CSModel.UI_StatisticsTextsRec), 
this.attr("MainHallSubdivisionId", "mainHallSubdivisionIdAttr", "MainHallSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityStatisticsRec.init();
return UI_LocalityStatisticsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_LocalityStatisticsRec = UI_LocalityStatisticsRec;

});
define("Connect_Geography_CS.model$UI_LocalityDetailsWithStatisticsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetailsWithStatisticsRec = (function (_super) {
__extends(UI_LocalityDetailsWithStatisticsRec, _super);
function UI_LocalityDetailsWithStatisticsRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetailsWithStatisticsRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Members", "membersAttr", "Members", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Households", "householdsAttr", "Households", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Brothers", "brothersAttr", "Brothers", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Sisters", "sistersAttr", "Sisters", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SupperMeetings", "supperMeetingsAttr", "SupperMeetings", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityDetailsWithStatisticsRec.init();
return UI_LocalityDetailsWithStatisticsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_LocalityDetailsWithStatisticsRec = UI_LocalityDetailsWithStatisticsRec;

});
define("Connect_Geography_CS.model$UI_LocalityDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetailsRec = (function (_super) {
__extends(UI_LocalityDetailsRec, _super);
function UI_LocalityDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetailsRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityDetailsRec.init();
return UI_LocalityDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_LocalityDetailsRec = UI_LocalityDetailsRec;

});
define("Connect_Geography_CS.model$UI_LocalityTimezoneRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityTimezoneRec = (function (_super) {
__extends(UI_LocalityTimezoneRec, _super);
function UI_LocalityTimezoneRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityTimezoneRec.attributesToDeclare = function () {
return [
this.attr("TimezoneName", "timezoneNameAttr", "TimezoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneOffset", "timezoneOffsetAttr", "TimezoneOffset", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityTimezoneRec.init();
return UI_LocalityTimezoneRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_LocalityTimezoneRec = UI_LocalityTimezoneRec;

});
define("Connect_Geography_CS.model$UI_LocalityDetails_ForHouseholdRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model", "Connect_Geography_CS.model$UI_LocalityDetailsRec", "Connect_Geography_CS.model$UI_LocalityTimezoneRec"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetails_ForHouseholdRec = (function (_super) {
__extends(UI_LocalityDetails_ForHouseholdRec, _super);
function UI_LocalityDetails_ForHouseholdRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetails_ForHouseholdRec.attributesToDeclare = function () {
return [
this.attr("BretherenCount", "bretherenCountAttr", "BretherenCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MaiinHallLatitude", "maiinHallLatitudeAttr", "MaiinHallLatitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MainHallLongitude", "mainHallLongitudeAttr", "MainHallLongitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("UI_LocalityDetails", "uI_LocalityDetailsAttr", "UI_LocalityDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_LocalityDetailsRec());
}, true, Connect_Geography_CSModel.UI_LocalityDetailsRec), 
this.attr("UI_LocalityTimezone", "uI_LocalityTimezoneAttr", "UI_LocalityTimezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_LocalityTimezoneRec());
}, true, Connect_Geography_CSModel.UI_LocalityTimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityDetails_ForHouseholdRec.init();
return UI_LocalityDetails_ForHouseholdRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_LocalityDetails_ForHouseholdRec = UI_LocalityDetails_ForHouseholdRec;

});
define("Connect_Geography_CS.model$Core_TimezoneRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var Core_TimezoneRec = (function (_super) {
__extends(Core_TimezoneRec, _super);
function Core_TimezoneRec(defaults) {
_super.apply(this, arguments);
}
Core_TimezoneRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "TZName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WindowsName", "windowsNameAttr", "WindowsName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OffsetSeconds", "offsetSecondsAttr", "OffsetSeconds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Abbreviation", "abbreviationAttr", "Abbreviation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Core_TimezoneRec.init();
return Core_TimezoneRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.Core_TimezoneRec = Core_TimezoneRec;

});
define("Connect_Geography_CS.model$Core_LocalityRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model", "Connect_Geography_CS.model$Core_TimezoneRec"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var Core_LocalityRec = (function (_super) {
__extends(Core_LocalityRec, _super);
function Core_LocalityRec(defaults) {
_super.apply(this, arguments);
}
Core_LocalityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallAddress", "mainHallAddressAttr", "MainHallAddress", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AddressForMap", "addressForMapAttr", "AddressForMap", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallLatitude", "mainHallLatitudeAttr", "MainHallLatitude", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MainHallLongitude", "mainHallLongitudeAttr", "MainHallLongitude", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Active", "activeAttr", "Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SubdivisionsCount", "subdivisionsCountAttr", "SubdivisionsCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BrothersCount", "brothersCountAttr", "BrothersCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SistersCount", "sistersCountAttr", "SistersCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Core_Timezone", "core_TimezoneAttr", "Core_Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.Core_TimezoneRec());
}, true, Connect_Geography_CSModel.Core_TimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
Core_LocalityRec.init();
return Core_LocalityRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.Core_LocalityRec = Core_LocalityRec;

});
define("Connect_Geography_CS.model$UI_CountryStatisticsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnectLibrary.model$StatisticsOptionsRec", "Connect_Geography_CS.referencesHealth", "Connect_Geography_CS.referencesHealth$UBTConnectLibrary", "Connect_Geography_CS.model$UI_StatisticsTextsRec"], function (exports, OutSystems, UBTConnectLibraryModel, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_CountryStatisticsRec = (function (_super) {
__extends(UI_CountryStatisticsRec, _super);
function UI_CountryStatisticsRec(defaults) {
_super.apply(this, arguments);
}
UI_CountryStatisticsRec.attributesToDeclare = function () {
return [
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Statistics", "statisticsAttr", "Statistics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.StatisticsOptionsRec());
}, true, UBTConnectLibraryModel.StatisticsOptionsRec), 
this.attr("UI_TypedStatisticsTexts", "uI_TypedStatisticsTextsAttr", "UI_TypedStatisticsTexts", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_StatisticsTextsRec());
}, true, Connect_Geography_CSModel.UI_StatisticsTextsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_CountryStatisticsRec.init();
return UI_CountryStatisticsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_CountryStatisticsRec = UI_CountryStatisticsRec;

});
define("Connect_Geography_CS.model$CS_CountryContactsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var CS_CountryContactsRec = (function (_super) {
__extends(CS_CountryContactsRec, _super);
function CS_CountryContactsRec(defaults) {
_super.apply(this, arguments);
}
CS_CountryContactsRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CS_CountryContactsRec.init();
return CS_CountryContactsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.CS_CountryContactsRec = CS_CountryContactsRec;

});
define("Connect_Geography_CS.model$CS_CountryNameRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var CS_CountryNameRec = (function (_super) {
__extends(CS_CountryNameRec, _super);
function CS_CountryNameRec(defaults) {
_super.apply(this, arguments);
}
CS_CountryNameRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CS_CountryNameRec.init();
return CS_CountryNameRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.CS_CountryNameRec = CS_CountryNameRec;

});
define("Connect_Geography_CS.model$UI_CommunityBusiness_ContactRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_CommunityBusiness_ContactRec = (function (_super) {
__extends(UI_CommunityBusiness_ContactRec, _super);
function UI_CommunityBusiness_ContactRec(defaults) {
_super.apply(this, arguments);
}
UI_CommunityBusiness_ContactRec.attributesToDeclare = function () {
return [
this.attr("Business_Id", "business_IdAttr", "Business_Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SignedBusnessURL", "signedBusnessURLAttr", "SignedBusnessURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Surname", "surnameAttr", "Surname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneName", "timezoneNameAttr", "TimezoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneOffset", "timezoneOffsetAttr", "TimezoneOffset", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_CommunityBusiness_ContactRec.init();
return UI_CommunityBusiness_ContactRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_CommunityBusiness_ContactRec = UI_CommunityBusiness_ContactRec;

});
define("Connect_Geography_CS.model$UI_CountryDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_CountryDetailsRec = (function (_super) {
__extends(UI_CountryDetailsRec, _super);
function UI_CountryDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_CountryDetailsRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_CountryDetailsRec.init();
return UI_CountryDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_CountryDetailsRec = UI_CountryDetailsRec;

});
define("Connect_Geography_CS.model$UI_CommunityBusinessRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_CommunityBusinessRec = (function (_super) {
__extends(UI_CommunityBusinessRec, _super);
function UI_CommunityBusinessRec(defaults) {
_super.apply(this, arguments);
}
UI_CommunityBusinessRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SignedBusnessURL", "signedBusnessURLAttr", "SignedBusnessURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Website", "websiteAttr", "Website", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Contact_Name", "contact_NameAttr", "Contact_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Contact_Surname", "contact_SurnameAttr", "Contact_Surname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Contact_Description", "contact_DescriptionAttr", "Contact_Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Contact_PhoneNumber", "contact_PhoneNumberAttr", "Contact_PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Contact_Email", "contact_EmailAttr", "Contact_Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneName", "timezoneNameAttr", "TimezoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneOffset", "timezoneOffsetAttr", "TimezoneOffset", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_CommunityBusinessRec.init();
return UI_CommunityBusinessRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_CommunityBusinessRec = UI_CommunityBusinessRec;

});
define("Connect_Geography_CS.model$UI_MembersStatisticsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Geography_CS.model"], function (exports, OutSystems, Connect_Geography_CSModel) {
var OS = OutSystems.Internal;
var UI_MembersStatisticsRec = (function (_super) {
__extends(UI_MembersStatisticsRec, _super);
function UI_MembersStatisticsRec(defaults) {
_super.apply(this, arguments);
}
UI_MembersStatisticsRec.attributesToDeclare = function () {
return [
this.attr("TotalNumberOfMembers", "totalNumberOfMembersAttr", "TotalNumberOfMembers", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TotalNumberOfHouseholds", "totalNumberOfHouseholdsAttr", "TotalNumberOfHouseholds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_MembersStatisticsRec.init();
return UI_MembersStatisticsRec;
})(OS.DataTypes.GenericRecord);
Connect_Geography_CSModel.UI_MembersStatisticsRec = UI_MembersStatisticsRec;

});
define("Connect_Geography_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Geography_CSModel = exports;
});
