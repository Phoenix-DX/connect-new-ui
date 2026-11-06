define("ContactBase_IS.model$", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.LongIntegerList = LongIntegerList;

});
define("ContactBase_IS.model$ObjectsIdsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ObjectsIdsRec = (function (_super) {
__extends(ObjectsIdsRec, _super);
function ObjectsIdsRec(defaults) {
_super.apply(this, arguments);
}
ObjectsIdsRec.attributesToDeclare = function () {
return [
this.attr("IdList", "idListAttr", "IdList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("IncludeDeceased", "includeDeceasedAttr", "IncludeDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ObjectsIdsRec.init();
return ObjectsIdsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ObjectsIdsRec = ObjectsIdsRec;

});
define("ContactBase_IS.model$FormerSpouseItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FormerSpouseItemRec = (function (_super) {
__extends(FormerSpouseItemRec, _super);
function FormerSpouseItemRec(defaults) {
_super.apply(this, arguments);
}
FormerSpouseItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FormerSpouseItemRec.init();
return FormerSpouseItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.FormerSpouseItemRec = FormerSpouseItemRec;

});
define("ContactBase_IS.model$PostConnectConfigRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostConnectConfigRequestRec = (function (_super) {
__extends(PostConnectConfigRequestRec, _super);
function PostConnectConfigRequestRec(defaults) {
_super.apply(this, arguments);
}
PostConnectConfigRequestRec.attributesToDeclare = function () {
return [
this.attr("TermsAndConditions", "termsAndConditionsAttr", "TermsAndConditions", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TermsAndConditionsLastUpdated", "termsAndConditionsLastUpdatedAttr", "TermsAndConditionsLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ManageSubscriptionLink", "manageSubscriptionLinkAttr", "ManageSubscriptionLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalityIconColourHex", "localityIconColourHexAttr", "LocalityIconColourHex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryIconColourHex", "countryIconColourHexAttr", "CountryIconColourHex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostConnectConfigRequestRec.init();
return PostConnectConfigRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostConnectConfigRequestRec = PostConnectConfigRequestRec;

});
define("ContactBase_IS.model$SynchPhotoUrlRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchPhotoUrlRec = (function (_super) {
__extends(SynchPhotoUrlRec, _super);
function SynchPhotoUrlRec(defaults) {
_super.apply(this, arguments);
}
SynchPhotoUrlRec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CropX", "cropXAttr", "CropX", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CropY", "cropYAttr", "CropY", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CropW", "cropWAttr", "CropW", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CropH", "cropHAttr", "CropH", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SynchPhotoUrlRec.init();
return SynchPhotoUrlRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchPhotoUrlRec = SynchPhotoUrlRec;

});
define("ContactBase_IS.model$SynchHallPhotoRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchPhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchHallPhotoRec = (function (_super) {
__extends(SynchHallPhotoRec, _super);
function SynchHallPhotoRec(defaults) {
_super.apply(this, arguments);
}
SynchHallPhotoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec), 
this.attr("URL720", "uRL720Attr", "URL720", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec), 
this.attr("URL340", "uRL340Attr", "URL340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec)
].concat(_super.attributesToDeclare.call(this));
};
SynchHallPhotoRec.init();
return SynchHallPhotoRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchHallPhotoRec = SynchHallPhotoRec;

});
define("ContactBase_IS.model$SynchCountryRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchCountryRec = (function (_super) {
__extends(SynchCountryRec, _super);
function SynchCountryRec(defaults) {
_super.apply(this, arguments);
}
SynchCountryRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalitiesCount", "localitiesCountAttr", "LocalitiesCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RegionId", "regionIdAttr", "RegionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SynchCountryRec.init();
return SynchCountryRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchCountryRec = SynchCountryRec;

});
define("ContactBase_IS.model$SynchLocalityRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchHallPhotoRec", "ContactBase_IS.model$SynchCountryRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchLocalityRec = (function (_super) {
__extends(SynchLocalityRec, _super);
function SynchLocalityRec(defaults) {
_super.apply(this, arguments);
}
SynchLocalityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchHallPhotoRec());
}, true, ContactBase_ISModel.SynchHallPhotoRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchCountryRec());
}, true, ContactBase_ISModel.SynchCountryRec), 
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SynchLocalityRec.init();
return SynchLocalityRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchLocalityRec = SynchLocalityRec;

});
define("ContactBase_IS.model$SynchSubdivisionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchHallPhotoRec", "ContactBase_IS.model$SynchLocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchSubdivisionRec = (function (_super) {
__extends(SynchSubdivisionRec, _super);
function SynchSubdivisionRec(defaults) {
_super.apply(this, arguments);
}
SynchSubdivisionRec.attributesToDeclare = function () {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchHallPhotoRec());
}, true, ContactBase_ISModel.SynchHallPhotoRec), 
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchLocalityRec());
}, true, ContactBase_ISModel.SynchLocalityRec), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SynchSubdivisionRec.init();
return SynchSubdivisionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchSubdivisionRec = SynchSubdivisionRec;

});
define("ContactBase_IS.model$SynchPhotoRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchPhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchPhotoRec = (function (_super) {
__extends(SynchPhotoRec, _super);
function SynchPhotoRec(defaults) {
_super.apply(this, arguments);
}
SynchPhotoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec), 
this.attr("URL720", "uRL720Attr", "URL720", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec), 
this.attr("URL340", "uRL340Attr", "URL340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SynchPhotoRec.init();
return SynchPhotoRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchPhotoRec = SynchPhotoRec;

});
define("ContactBase_IS.model$SynchPhotoTagRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchPhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchPhotoTagRec = (function (_super) {
__extends(SynchPhotoTagRec, _super);
function SynchPhotoTagRec(defaults) {
_super.apply(this, arguments);
}
SynchPhotoTagRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoUrlRec());
}, true, ContactBase_ISModel.SynchPhotoUrlRec), 
this.attr("X", "xAttr", "X", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Y", "yAttr", "Y", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SynchPhotoTagRec.init();
return SynchPhotoTagRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SynchPhotoTagRec = SynchPhotoTagRec;

});
define("ContactBase_IS.model$HouseholderDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchPhotoTagRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholderDetailRec = (function (_super) {
__extends(HouseholderDetailRec, _super);
function HouseholderDetailRec(defaults) {
_super.apply(this, arguments);
}
HouseholderDetailRec.attributesToDeclare = function () {
return [
this.attr("DisplayType", "displayTypeAttr", "DisplayType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoTagRec());
}, true, ContactBase_ISModel.SynchPhotoTagRec), 
this.attr("Data", "dataAttr", "Data", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholderDetailRec.init();
return HouseholderDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HouseholderDetailRec = HouseholderDetailRec;

});
define("ContactBase_IS.model$HouseholderDetailList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HouseholderDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholderDetailList = (function (_super) {
__extends(HouseholderDetailList, _super);
function HouseholderDetailList(defaults) {
_super.apply(this, arguments);
}
HouseholderDetailList.itemType = ContactBase_ISModel.HouseholderDetailRec;
return HouseholderDetailList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.HouseholderDetailList = HouseholderDetailList;

});
define("ContactBase_IS.model$HouseholderRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchPhotoTagRec", "ContactBase_IS.model$HouseholderDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholderRec = (function (_super) {
__extends(HouseholderRec, _super);
function HouseholderRec(defaults) {
_super.apply(this, arguments);
}
HouseholderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoTagRec());
}, true, ContactBase_ISModel.SynchPhotoTagRec), 
this.attr("Details", "detailsAttr", "Details", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderDetailList());
}, true, ContactBase_ISModel.HouseholderDetailList), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholderRec.init();
return HouseholderRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HouseholderRec = HouseholderRec;

});
define("ContactBase_IS.model$HouseholderList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HouseholderRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholderList = (function (_super) {
__extends(HouseholderList, _super);
function HouseholderList(defaults) {
_super.apply(this, arguments);
}
HouseholderList.itemType = ContactBase_ISModel.HouseholderRec;
return HouseholderList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.HouseholderList = HouseholderList;

});
define("ContactBase_IS.model$GetHouseholdsFormattedResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchSubdivisionRec", "ContactBase_IS.model$SynchLocalityRec", "ContactBase_IS.model$SynchCountryRec", "ContactBase_IS.model$SynchPhotoRec", "ContactBase_IS.model$HouseholderRec", "ContactBase_IS.model$HouseholderList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdsFormattedResultItemRec = (function (_super) {
__extends(GetHouseholdsFormattedResultItemRec, _super);
function GetHouseholdsFormattedResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdsFormattedResultItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberNames", "memberNamesAttr", "MemberNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchSubdivisionRec());
}, true, ContactBase_ISModel.SynchSubdivisionRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchLocalityRec());
}, true, ContactBase_ISModel.SynchLocalityRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchCountryRec());
}, true, ContactBase_ISModel.SynchCountryRec), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchPhotoRec());
}, true, ContactBase_ISModel.SynchPhotoRec), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderRec());
}, true, ContactBase_ISModel.HouseholderRec), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderRec());
}, true, ContactBase_ISModel.HouseholderRec), 
this.attr("HouseholdChildren", "householdChildrenAttr", "HouseholdChildren", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderList());
}, true, ContactBase_ISModel.HouseholderList), 
this.attr("NonHouseholdChildren", "nonHouseholdChildrenAttr", "NonHouseholdChildren", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderList());
}, true, ContactBase_ISModel.HouseholderList), 
this.attr("HouseholdMembers", "householdMembersAttr", "HouseholdMembers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderList());
}, true, ContactBase_ISModel.HouseholderList), 
this.attr("NonHouseholdMembers", "nonHouseholdMembersAttr", "NonHouseholdMembers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholderList());
}, true, ContactBase_ISModel.HouseholderList)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdsFormattedResultItemRec.init();
return GetHouseholdsFormattedResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdsFormattedResultItemRec = GetHouseholdsFormattedResultItemRec;

});
define("ContactBase_IS.model$GetHouseholdsFormattedResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetHouseholdsFormattedResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdsFormattedResultItemList = (function (_super) {
__extends(GetHouseholdsFormattedResultItemList, _super);
function GetHouseholdsFormattedResultItemList(defaults) {
_super.apply(this, arguments);
}
GetHouseholdsFormattedResultItemList.itemType = ContactBase_ISModel.GetHouseholdsFormattedResultItemRec;
return GetHouseholdsFormattedResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetHouseholdsFormattedResultItemList = GetHouseholdsFormattedResultItemList;

});
define("ContactBase_IS.model$GetHouseholdsFormattedResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetHouseholdsFormattedResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdsFormattedResponseRec = (function (_super) {
__extends(GetHouseholdsFormattedResponseRec, _super);
function GetHouseholdsFormattedResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdsFormattedResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetHouseholdsFormattedResultItemList());
}, true, ContactBase_ISModel.GetHouseholdsFormattedResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdsFormattedResponseRec.init();
return GetHouseholdsFormattedResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdsFormattedResponseRec = GetHouseholdsFormattedResponseRec;

});
define("ContactBase_IS.model$TokenErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var TokenErrorRec = (function (_super) {
__extends(TokenErrorRec, _super);
function TokenErrorRec(defaults) {
_super.apply(this, arguments);
}
TokenErrorRec.attributesToDeclare = function () {
return [
this.attr("error", "errorAttr", "error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("error_description", "error_descriptionAttr", "error_description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TokenErrorRec.init();
return TokenErrorRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.TokenErrorRec = TokenErrorRec;

});
define("ContactBase_IS.model$ConnectConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ConnectConfigRec = (function (_super) {
__extends(ConnectConfigRec, _super);
function ConnectConfigRec(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRec.attributesToDeclare = function () {
return [
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TermsAndConditions", "termsAndConditionsAttr", "TermsAndConditions", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TermsAndConditionsLastUpdated", "termsAndConditionsLastUpdatedAttr", "TermsAndConditionsLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ManageSubscriptionLink", "manageSubscriptionLinkAttr", "ManageSubscriptionLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalityIconColourHex", "localityIconColourHexAttr", "LocalityIconColourHex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryIconColourHex", "countryIconColourHexAttr", "CountryIconColourHex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ConnectConfigRec.init();
return ConnectConfigRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ConnectConfigRec = ConnectConfigRec;

});
define("ContactBase_IS.model$DefaultCountryRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ConnectConfigRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DefaultCountryRec = (function (_super) {
__extends(DefaultCountryRec, _super);
function DefaultCountryRec(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRec.attributesToDeclare = function () {
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
this.attr("ConnectConfig", "connectConfigAttr", "ConnectConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ConnectConfigRec());
}, true, ContactBase_ISModel.ConnectConfigRec), 
this.attr("LocalitiesCount", "localitiesCountAttr", "LocalitiesCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DefaultCountryRec.init();
return DefaultCountryRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DefaultCountryRec = DefaultCountryRec;

});
define("ContactBase_IS.model$DefaultCountryList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$DefaultCountryRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DefaultCountryList = (function (_super) {
__extends(DefaultCountryList, _super);
function DefaultCountryList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryList.itemType = ContactBase_ISModel.DefaultCountryRec;
return DefaultCountryList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.DefaultCountryList = DefaultCountryList;

});
define("ContactBase_IS.model$GetCountriesResponseListRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$DefaultCountryList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetCountriesResponseListRec = (function (_super) {
__extends(GetCountriesResponseListRec, _super);
function GetCountriesResponseListRec(defaults) {
_super.apply(this, arguments);
}
GetCountriesResponseListRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryList());
}, true, ContactBase_ISModel.DefaultCountryList)
].concat(_super.attributesToDeclare.call(this));
};
GetCountriesResponseListRec.init();
return GetCountriesResponseListRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetCountriesResponseListRec = GetCountriesResponseListRec;

});
define("ContactBase_IS.model$GetSubdivisionResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionResponseRec = (function (_super) {
__extends(GetSubdivisionResponseRec, _super);
function GetSubdivisionResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "householdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BrotherCount", "brotherCountAttr", "brotherCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SisterCount", "sisterCountAttr", "sisterCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionResponseRec.init();
return GetSubdivisionResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionResponseRec = GetSubdivisionResponseRec;

});
define("ContactBase_IS.model$AdvancedSearch_BDMRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_BDMRec = (function (_super) {
__extends(AdvancedSearch_BDMRec, _super);
function AdvancedSearch_BDMRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_BDMRec.attributesToDeclare = function () {
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
AdvancedSearch_BDMRec.init();
return AdvancedSearch_BDMRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearch_BDMRec = AdvancedSearch_BDMRec;

});
define("ContactBase_IS.model$PartnerPhotoTagRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PartnerPhotoTagRec = (function (_super) {
__extends(PartnerPhotoTagRec, _super);
function PartnerPhotoTagRec(defaults) {
_super.apply(this, arguments);
}
PartnerPhotoTagRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "CdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnWidth", "cdnWidthAttr", "CdnWidth", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnHeight", "cdnHeightAttr", "CdnHeight", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnSize", "cdnSizeAttr", "CdnSize", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("XCoord", "xCoordAttr", "XCoord", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("YCoord", "yCoordAttr", "YCoord", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TextTag", "textTagAttr", "TextTag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PartnerPhotoTagRec.init();
return PartnerPhotoTagRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PartnerPhotoTagRec = PartnerPhotoTagRec;

});
define("ContactBase_IS.model$PartnerRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PartnerPhotoTagRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PartnerRec = (function (_super) {
__extends(PartnerRec, _super);
function PartnerRec(defaults) {
_super.apply(this, arguments);
}
PartnerRec.attributesToDeclare = function () {
return [
this.attr("PartnerName", "partnerNameAttr", "PartnerName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerUserName", "partnerUserNameAttr", "PartnerUserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerIconUrl", "partnerIconUrlAttr", "PartnerIconUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerCountry", "partnerCountryAttr", "PartnerCountry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerLocalitry", "partnerLocalitryAttr", "PartnerLocalitry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerSubdivision", "partnerSubdivisionAttr", "PartnerSubdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerPhotoTag", "partnerPhotoTagAttr", "PartnerPhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PartnerPhotoTagRec());
}, true, ContactBase_ISModel.PartnerPhotoTagRec), 
this.attr("PartnerUserId", "partnerUserIdAttr", "PartnerUserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerMemberId", "partnerMemberIdAttr", "PartnerMemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PartnerRec.init();
return PartnerRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PartnerRec = PartnerRec;

});
define("ContactBase_IS.model$GetInterchangesSynchResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchLocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchangesSynchResultItemRec = (function (_super) {
__extends(GetInterchangesSynchResultItemRec, _super);
function GetInterchangesSynchResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetInterchangesSynchResultItemRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocalityId", "interchangeLocalityIdAttr", "InterchangeLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InterchangeLocalityName", "interchangeLocalityNameAttr", "InterchangeLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Distance", "distanceAttr", "Distance", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocality", "interchangeLocalityAttr", "InterchangeLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchLocalityRec());
}, true, ContactBase_ISModel.SynchLocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
GetInterchangesSynchResultItemRec.init();
return GetInterchangesSynchResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetInterchangesSynchResultItemRec = GetInterchangesSynchResultItemRec;

});
define("ContactBase_IS.model$GetInterchangesSynchResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetInterchangesSynchResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchangesSynchResultItemList = (function (_super) {
__extends(GetInterchangesSynchResultItemList, _super);
function GetInterchangesSynchResultItemList(defaults) {
_super.apply(this, arguments);
}
GetInterchangesSynchResultItemList.itemType = ContactBase_ISModel.GetInterchangesSynchResultItemRec;
return GetInterchangesSynchResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetInterchangesSynchResultItemList = GetInterchangesSynchResultItemList;

});
define("ContactBase_IS.model$GetInterchangesSynchResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetInterchangesSynchResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchangesSynchResponseRec = (function (_super) {
__extends(GetInterchangesSynchResponseRec, _super);
function GetInterchangesSynchResponseRec(defaults) {
_super.apply(this, arguments);
}
GetInterchangesSynchResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetInterchangesSynchResultItemList());
}, true, ContactBase_ISModel.GetInterchangesSynchResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetInterchangesSynchResponseRec.init();
return GetInterchangesSynchResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetInterchangesSynchResponseRec = GetInterchangesSynchResponseRec;

});
define("ContactBase_IS.model$OpeningHourItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRec = (function (_super) {
__extends(OpeningHourItemRec, _super);
function OpeningHourItemRec(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRec.attributesToDeclare = function () {
return [
this.attr("Day", "dayAttr", "Day", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpenTime", "openTimeAttr", "OpenTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CloseTime", "closeTimeAttr", "CloseTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OpeningHourItemRec.init();
return OpeningHourItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.OpeningHourItemRec = OpeningHourItemRec;

});
define("ContactBase_IS.model$ImageSigningSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
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
ContactBase_ISModel.ImageSigningSizeRec = ImageSigningSizeRec;

});
define("ContactBase_IS.model$NonSubscribersRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var NonSubscribersRec = (function (_super) {
__extends(NonSubscribersRec, _super);
function NonSubscribersRec(defaults) {
_super.apply(this, arguments);
}
NonSubscribersRec.attributesToDeclare = function () {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegionName", "regionNameAttr", "RegionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TotalCount", "totalCountAttr", "TotalCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NonSubscribersRec.init();
return NonSubscribersRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.NonSubscribersRec = NonSubscribersRec;

});
define("ContactBase_IS.model$PhotoUrlRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PhotoUrlRec = (function (_super) {
__extends(PhotoUrlRec, _super);
function PhotoUrlRec(defaults) {
_super.apply(this, arguments);
}
PhotoUrlRec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CropX", "cropXAttr", "CropX", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CropY", "cropYAttr", "CropY", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CropW", "cropWAttr", "CropW", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CropH", "cropHAttr", "CropH", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhotoUrlRec.init();
return PhotoUrlRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PhotoUrlRec = PhotoUrlRec;

});
define("ContactBase_IS.model$HallPhotoRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HallPhotoRec = (function (_super) {
__extends(HallPhotoRec, _super);
function HallPhotoRec(defaults) {
_super.apply(this, arguments);
}
HallPhotoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL720", "signedURL720Attr", "SignedURL720", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL340", "signedURL340Attr", "SignedURL340", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("URL720", "uRL720Attr", "URL720", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("URL340", "uRL340Attr", "URL340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoRec.init();
return HallPhotoRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HallPhotoRec = HallPhotoRec;

});
define("ContactBase_IS.model$TimezoneRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var TimezoneRec = (function (_super) {
__extends(TimezoneRec, _super);
function TimezoneRec(defaults) {
_super.apply(this, arguments);
}
TimezoneRec.attributesToDeclare = function () {
return [
this.attr("TimezoneLabel", "timezoneLabelAttr", "TimezoneLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OffsetSeconds", "offsetSecondsAttr", "OffsetSeconds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimezoneRec.init();
return TimezoneRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.TimezoneRec = TimezoneRec;

});
define("ContactBase_IS.model$LocalityRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$TimezoneRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LocalityRec = (function (_super) {
__extends(LocalityRec, _super);
function LocalityRec(defaults) {
_super.apply(this, arguments);
}
LocalityRec.attributesToDeclare = function () {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
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
this.attr("AddressForMap", "addressForMapAttr", "AddressForMap", false, false, OS.DataTypes.DataTypes.Text, function () {
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
}, true), 
this.attr("TimeZone", "timeZoneAttr", "TimeZone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.TimezoneRec());
}, true, ContactBase_ISModel.TimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityRec.init();
return LocalityRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LocalityRec = LocalityRec;

});
define("ContactBase_IS.model$SubdivisionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubdivisionRec = (function (_super) {
__extends(SubdivisionRec, _super);
function SubdivisionRec(defaults) {
_super.apply(this, arguments);
}
SubdivisionRec.attributesToDeclare = function () {
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
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberCount", "memberCountAttr", "MemberCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionRec.init();
return SubdivisionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubdivisionRec = SubdivisionRec;

});
define("ContactBase_IS.model$CountryRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CountryRec = (function (_super) {
__extends(CountryRec, _super);
function CountryRec(defaults) {
_super.apply(this, arguments);
}
CountryRec.attributesToDeclare = function () {
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
this.attr("ConnectConfig", "connectConfigAttr", "ConnectConfig", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalitiesCount", "localitiesCountAttr", "LocalitiesCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Address1Label", "address1LabelAttr", "Address1Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address1Visible", "address1VisibleAttr", "Address1Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address1Required", "address1RequiredAttr", "Address1Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address2Label", "address2LabelAttr", "Address2Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address2Visible", "address2VisibleAttr", "Address2Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address2Required", "address2RequiredAttr", "Address2Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address3Label", "address3LabelAttr", "Address3Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address3Visible", "address3VisibleAttr", "Address3Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address3Required", "address3RequiredAttr", "Address3Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address4Label", "address4LabelAttr", "Address4Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address4Visible", "address4VisibleAttr", "Address4Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address4Required", "address4RequiredAttr", "Address4Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address5Label", "address5LabelAttr", "Address5Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address5Visible", "address5VisibleAttr", "Address5Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address5Required", "address5RequiredAttr", "Address5Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address6Label", "address6LabelAttr", "Address6Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address6Visible", "address6VisibleAttr", "Address6Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address6Required", "address6RequiredAttr", "Address6Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address7Label", "address7LabelAttr", "Address7Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address7Visible", "address7VisibleAttr", "Address7Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address7Required", "address7RequiredAttr", "Address7Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address8Label", "address8LabelAttr", "Address8Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address8Visible", "address8VisibleAttr", "Address8Visible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address8Required", "address8RequiredAttr", "Address8Required", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CountryRec.init();
return CountryRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CountryRec = CountryRec;

});
define("ContactBase_IS.model$DefaultLocalityRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$DefaultCountryRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DefaultLocalityRec = (function (_super) {
__extends(DefaultLocalityRec, _super);
function DefaultLocalityRec(defaults) {
_super.apply(this, arguments);
}
DefaultLocalityRec.attributesToDeclare = function () {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DefaultLocalityRec.init();
return DefaultLocalityRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DefaultLocalityRec = DefaultLocalityRec;

});
define("ContactBase_IS.model$FilterRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FilterRec = (function (_super) {
__extends(FilterRec, _super);
function FilterRec(defaults) {
_super.apply(this, arguments);
}
FilterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayName", "displayNameAttr", "DisplayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FilterRec.init();
return FilterRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.FilterRec = FilterRec;

});
define("ContactBase_IS.model$PhotoTagRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PhotoTagRec = (function (_super) {
__extends(PhotoTagRec, _super);
function PhotoTagRec(defaults) {
_super.apply(this, arguments);
}
PhotoTagRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("X", "xAttr", "X", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Y", "yAttr", "Y", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedUser", "lastUpdatedUserAttr", "LastUpdatedUser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhotoTagRec.init();
return PhotoTagRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PhotoTagRec = PhotoTagRec;

});
define("ContactBase_IS.model$FormerSpouseItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$FormerSpouseItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FormerSpouseItemList = (function (_super) {
__extends(FormerSpouseItemList, _super);
function FormerSpouseItemList(defaults) {
_super.apply(this, arguments);
}
FormerSpouseItemList.itemType = ContactBase_ISModel.FormerSpouseItemRec;
return FormerSpouseItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.FormerSpouseItemList = FormerSpouseItemList;

});
define("ContactBase_IS.model$FamilyMemberFormattedDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoTagRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDetailRec = (function (_super) {
__extends(FamilyMemberFormattedDetailRec, _super);
function FamilyMemberFormattedDetailRec(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDetailRec.attributesToDeclare = function () {
return [
this.attr("DisplayType", "displayTypeAttr", "DisplayType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("Data", "dataAttr", "Data", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Deceased", "deceasedAttr", "Deceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Hidden", "hiddenAttr", "Hidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FamilyMemberFormattedDetailRec.init();
return FamilyMemberFormattedDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.FamilyMemberFormattedDetailRec = FamilyMemberFormattedDetailRec;

});
define("ContactBase_IS.model$FamilyMemberFormattedDetailList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$FamilyMemberFormattedDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDetailList = (function (_super) {
__extends(FamilyMemberFormattedDetailList, _super);
function FamilyMemberFormattedDetailList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDetailList.itemType = ContactBase_ISModel.FamilyMemberFormattedDetailRec;
return FamilyMemberFormattedDetailList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.FamilyMemberFormattedDetailList = FamilyMemberFormattedDetailList;

});
define("ContactBase_IS.model$SpouseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$FilterRec", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$FormerSpouseItemList", "ContactBase_IS.model$FamilyMemberFormattedDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SpouseRec = (function (_super) {
__extends(SpouseRec, _super);
function SpouseRec(defaults) {
_super.apply(this, arguments);
}
SpouseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayName", "displayNameAttr", "DisplayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FilterRec());
}, true, ContactBase_ISModel.FilterRec), 
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("FathersName", "fathersNameAttr", "FathersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceased", "fatherDeceasedAttr", "FatherDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FatherDeceasedDate", "fatherDeceasedDateAttr", "FatherDeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FathersLocality", "fathersLocalityAttr", "FathersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherHouseholderId", "fatherHouseholderIdAttr", "FatherHouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MothersName", "mothersNameAttr", "MothersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersMaidenName", "mothersMaidenNameAttr", "MothersMaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceased", "motherDeceasedAttr", "MotherDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MotherDeceasedDate", "motherDeceasedDateAttr", "MotherDeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MothersLocality", "mothersLocalityAttr", "MothersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherHouseholderId", "motherHouseholderIdAttr", "MotherHouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FilterRec());
}, true, ContactBase_ISModel.FilterRec), 
this.attr("FormerSpouses", "formerSpousesAttr", "FormerSpouses", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FormerSpouseItemList());
}, true, ContactBase_ISModel.FormerSpouseItemList), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("Details", "detailsAttr", "Details", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDetailList());
}, true, ContactBase_ISModel.FamilyMemberFormattedDetailList), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpouseRec.init();
return SpouseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SpouseRec = SpouseRec;

});
define("ContactBase_IS.model$FamilyMemberFormattedRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$FamilyMemberFormattedDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedRec = (function (_super) {
__extends(FamilyMemberFormattedRec, _super);
function FamilyMemberFormattedRec(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "ParsedDateOfBirth", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UnparsedDateOfBirth", "unparsedDateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "ParsedDeceasedDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UnparsedDeceasedDate", "unparsedDeceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "Deceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Hidden", "hiddenAttr", "Hidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Details", "detailsAttr", "Details", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDetailList());
}, true, ContactBase_ISModel.FamilyMemberFormattedDetailList), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdNavigationFlag", "householdNavigationFlagAttr", "HouseholdNavigationFlag", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Disabled", "disabledAttr", "Disabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FamilyMemberFormattedRec.init();
return FamilyMemberFormattedRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.FamilyMemberFormattedRec = FamilyMemberFormattedRec;

});
define("ContactBase_IS.model$MemberHouseholderHouseholderRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$FamilyMemberFormattedRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var MemberHouseholderHouseholderRec = (function (_super) {
__extends(MemberHouseholderHouseholderRec, _super);
function MemberHouseholderHouseholderRec(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderHouseholderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhoneLastUpdated", "homePhoneLastUpdatedAttr", "HomePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhoneLastUpdated", "workPhoneLastUpdatedAttr", "WorkPhoneLastUpdated", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhoneLastUpdated", "mobilePhoneLastUpdatedAttr", "MobilePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedRec), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdPhoto", "householdPhotoAttr", "HouseholdPhoto", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
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
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FathersName", "fathersNameAttr", "FathersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceased", "fatherDeceasedAttr", "FatherDeceased", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceasedDate", "fatherDeceasedDateAttr", "FatherDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FathersLocality", "fathersLocalityAttr", "FathersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersName", "mothersNameAttr", "MothersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceased", "motherDeceasedAttr", "MotherDeceased", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceasedDate", "motherDeceasedDateAttr", "MotherDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersLocality", "mothersLocalityAttr", "MothersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longtitude", "longtitudeAttr", "Longtitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberHouseholderHouseholderRec.init();
return MemberHouseholderHouseholderRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.MemberHouseholderHouseholderRec = MemberHouseholderHouseholderRec;

});
define("ContactBase_IS.model$MemberHouseholderRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SpouseRec", "ContactBase_IS.model$MemberHouseholderHouseholderRec", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$CountryRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$SubdivisionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var MemberHouseholderRec = (function (_super) {
__extends(MemberHouseholderRec, _super);
function MemberHouseholderRec(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhoneLastUpdated", "homePhoneLastUpdatedAttr", "HomePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("WorkPhoneLastUpdated", "workPhoneLastUpdatedAttr", "WorkPhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MobilePhoneLastUpdated", "mobilePhoneLastUpdatedAttr", "MobilePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SpouseRec());
}, true, ContactBase_ISModel.SpouseRec), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberHouseholderHouseholderRec());
}, true, ContactBase_ISModel.MemberHouseholderHouseholderRec), 
this.attr("HouseholdPhoto", "householdPhotoAttr", "HouseholdPhoto", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
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
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryRec());
}, true, ContactBase_ISModel.CountryRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec), 
this.attr("FathersName", "fathersNameAttr", "FathersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceased", "fatherDeceasedAttr", "FatherDeceased", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceasedDate", "fatherDeceasedDateAttr", "FatherDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FathersLocality", "fathersLocalityAttr", "FathersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersName", "mothersNameAttr", "MothersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceased", "motherDeceasedAttr", "MotherDeceased", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceasedDate", "motherDeceasedDateAttr", "MotherDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersLocality", "mothersLocalityAttr", "MothersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longtitude", "longtitudeAttr", "Longtitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberHouseholderRec.init();
return MemberHouseholderRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.MemberHouseholderRec = MemberHouseholderRec;

});
define("ContactBase_IS.model$MemberRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SpouseRec", "ContactBase_IS.model$MemberHouseholderRec", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$CountryRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$SubdivisionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var MemberRec = (function (_super) {
__extends(MemberRec, _super);
function MemberRec(defaults) {
_super.apply(this, arguments);
}
MemberRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UbtAccountNumber", "ubtAccountNumberAttr", "UbtAccountNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhoneLastUpdated", "homePhoneLastUpdatedAttr", "HomePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("WorkPhoneLastUpdated", "workPhoneLastUpdatedAttr", "WorkPhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MobilePhoneLastUpdated", "mobilePhoneLastUpdatedAttr", "MobilePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SpouseRec());
}, true, ContactBase_ISModel.SpouseRec), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberHouseholderRec());
}, true, ContactBase_ISModel.MemberHouseholderRec), 
this.attr("HouseholdPhoto", "householdPhotoAttr", "HouseholdPhoto", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
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
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryRec());
}, true, ContactBase_ISModel.CountryRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec), 
this.attr("FathersName", "fathersNameAttr", "FathersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceased", "fatherDeceasedAttr", "FatherDeceased", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceasedDate", "fatherDeceasedDateAttr", "FatherDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FathersLocality", "fathersLocalityAttr", "FathersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersName", "mothersNameAttr", "MothersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceased", "motherDeceasedAttr", "MotherDeceased", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceasedDate", "motherDeceasedDateAttr", "MotherDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersLocality", "mothersLocalityAttr", "MothersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longtitude", "longtitudeAttr", "Longtitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberRec.init();
return MemberRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.MemberRec = MemberRec;

});
define("ContactBase_IS.model$RolesRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var RolesRec = (function (_super) {
__extends(RolesRec, _super);
function RolesRec(defaults) {
_super.apply(this, arguments);
}
RolesRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Claims", "claimsAttr", "Claims", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RolesRec.init();
return RolesRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.RolesRec = RolesRec;

});
define("ContactBase_IS.model$RolesList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$RolesRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var RolesList = (function (_super) {
__extends(RolesList, _super);
function RolesList(defaults) {
_super.apply(this, arguments);
}
RolesList.itemType = ContactBase_ISModel.RolesRec;
return RolesList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.RolesList = RolesList;

});
define("ContactBase_IS.model$SubscriptionRegionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionRegionRec = (function (_super) {
__extends(SubscriptionRegionRec, _super);
function SubscriptionRegionRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionRegionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isActive", "isActiveAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionRegionRec.init();
return SubscriptionRegionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionRegionRec = SubscriptionRegionRec;

});
define("ContactBase_IS.model$SubscriptionRegionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionRegionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionRegionList = (function (_super) {
__extends(SubscriptionRegionList, _super);
function SubscriptionRegionList(defaults) {
_super.apply(this, arguments);
}
SubscriptionRegionList.itemType = ContactBase_ISModel.SubscriptionRegionRec;
return SubscriptionRegionList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubscriptionRegionList = SubscriptionRegionList;

});
define("ContactBase_IS.model$CountryList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CountryRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CountryList = (function (_super) {
__extends(CountryList, _super);
function CountryList(defaults) {
_super.apply(this, arguments);
}
CountryList.itemType = ContactBase_ISModel.CountryRec;
return CountryList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.CountryList = CountryList;

});
define("ContactBase_IS.model$SubscriptionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionRegionList", "ContactBase_IS.model$CountryList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionRec = (function (_super) {
__extends(SubscriptionRec, _super);
function SubscriptionRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SubscribedRegions", "subscribedRegionsAttr", "SubscribedRegions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRegionList());
}, true, ContactBase_ISModel.SubscriptionRegionList), 
this.attr("SubscribedCountries", "subscribedCountriesAttr", "SubscribedCountries", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryList());
}, true, ContactBase_ISModel.CountryList), 
this.attr("IsSignUpUser", "isSignUpUserAttr", "IsSignUpUser", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AccountId", "accountIdAttr", "AccountId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionIntegrationConfigurationId", "subscriptionIntegrationConfigurationIdAttr", "SubscriptionIntegrationConfigurationId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PrimaryOrSecondary", "primaryOrSecondaryAttr", "PrimaryOrSecondary", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionConfigurationId", "subscriptionConfigurationIdAttr", "SubscriptionConfigurationId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionStartDate", "subscriptionStartDateAttr", "SubscriptionStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LinkedSubscriptionId", "linkedSubscriptionIdAttr", "LinkedSubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionRec.init();
return SubscriptionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionRec = SubscriptionRec;

});
define("ContactBase_IS.model$GetUserByIdResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubdivisionRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$CountryRec", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$DefaultLocalityRec", "ContactBase_IS.model$MemberRec", "ContactBase_IS.model$RolesList", "ContactBase_IS.model$SubscriptionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUserByIdResponseRec = (function (_super) {
__extends(GetUserByIdResponseRec, _super);
function GetUserByIdResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUserByIdResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberID", "memberIDAttr", "MemberID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryRec());
}, true, ContactBase_ISModel.CountryRec), 
this.attr("AcceptedTermsAndConditionsCountryCode", "acceptedTermsAndConditionsCountryCodeAttr", "AcceptedTermsAndConditionsCountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AcceptedTermsAndConditionsDateTime", "acceptedTermsAndConditionsDateTimeAttr", "AcceptedTermsAndConditionsDateTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("DefaultLocality", "defaultLocalityAttr", "DefaultLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultLocalityRec());
}, true, ContactBase_ISModel.DefaultLocalityRec), 
this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberRec());
}, true, ContactBase_ISModel.MemberRec), 
this.attr("HighestAdministratorLevel", "highestAdministratorLevelAttr", "HighestAdministratorLevel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EmailConfirmed", "emailConfirmedAttr", "EmailConfirmed", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.RolesList());
}, true, ContactBase_ISModel.RolesList), 
this.attr("CountryAdminLinks", "countryAdminLinksAttr", "CountryAdminLinks", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityAdminLinks", "localityAdminLinksAttr", "LocalityAdminLinks", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRec());
}, true, ContactBase_ISModel.SubscriptionRec), 
this.attr("AccessFailedCount", "accessFailedCountAttr", "AccessFailedCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetUserByIdResponseRec.init();
return GetUserByIdResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUserByIdResponseRec = GetUserByIdResponseRec;

});
define("ContactBase_IS.model$ValueItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ValueItemRec = (function (_super) {
__extends(ValueItemRec, _super);
function ValueItemRec(defaults) {
_super.apply(this, arguments);
}
ValueItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ValueItemRec.init();
return ValueItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ValueItemRec = ValueItemRec;

});
define("ContactBase_IS.model$ValueItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ValueItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ValueItemList = (function (_super) {
__extends(ValueItemList, _super);
function ValueItemList(defaults) {
_super.apply(this, arguments);
}
ValueItemList.itemType = ContactBase_ISModel.ValueItemRec;
return ValueItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.ValueItemList = ValueItemList;

});
define("ContactBase_IS.model$FilteredChannelRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ValueItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FilteredChannelRec = (function (_super) {
__extends(FilteredChannelRec, _super);
function FilteredChannelRec(defaults) {
_super.apply(this, arguments);
}
FilteredChannelRec.attributesToDeclare = function () {
return [
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Values", "valuesAttr", "Values", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ValueItemList());
}, true, ContactBase_ISModel.ValueItemList)
].concat(_super.attributesToDeclare.call(this));
};
FilteredChannelRec.init();
return FilteredChannelRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.FilteredChannelRec = FilteredChannelRec;

});
define("ContactBase_IS.model$GetSettingResponseDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSettingResponseDetailsRec = (function (_super) {
__extends(GetSettingResponseDetailsRec, _super);
function GetSettingResponseDetailsRec(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseDetailsRec.attributesToDeclare = function () {
return [
this.attr("ConnectionSetting", "connectionSettingAttr", "connectionSetting", false, false, OS.DataTypes.DataTypes.Text, function () {
return "online";
}, true), 
this.attr("LogLevel", "logLevelAttr", "logLevel", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Director", "directorAttr", "director", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSettingResponseDetailsRec.init();
return GetSettingResponseDetailsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSettingResponseDetailsRec = GetSettingResponseDetailsRec;

});
define("ContactBase_IS.model$GetSettingResponseParsedRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSettingResponseDetailsRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSettingResponseParsedRec = (function (_super) {
__extends(GetSettingResponseParsedRec, _super);
function GetSettingResponseParsedRec(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseParsedRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "userId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PrivacyPolicyAccepted", "privacyPolicyAcceptedAttr", "privecyPolicyAccepted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TermsAndConditionsAccepted", "termsAndConditionsAcceptedAttr", "termsAndConditionsAccepted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Settings", "settingsAttr", "settings", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSettingResponseDetailsRec());
}, true, ContactBase_ISModel.GetSettingResponseDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSettingResponseParsedRec.init();
return GetSettingResponseParsedRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSettingResponseParsedRec = GetSettingResponseParsedRec;

});
define("ContactBase_IS.model$AdvancedSearch_BirthdayRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_BirthdayRec = (function (_super) {
__extends(AdvancedSearch_BirthdayRec, _super);
function AdvancedSearch_BirthdayRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_BirthdayRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_BirthdayRec.fromStructure = function (str) {
return new AdvancedSearch_BirthdayRec(new AdvancedSearch_BirthdayRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_BirthdayRec.init();
return AdvancedSearch_BirthdayRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearch_BirthdayRec = AdvancedSearch_BirthdayRec;

});
define("ContactBase_IS.model$VisibilityPreferencesSingleCustomizedRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferencesSingleCustomizedRec = (function (_super) {
__extends(VisibilityPreferencesSingleCustomizedRec, _super);
function VisibilityPreferencesSingleCustomizedRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferencesSingleCustomizedRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isHouseholder", "isHouseholderAttr", "isHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHomePhone", "displayHomePhoneAttr", "DisplayHomePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnder21", "isUnder21Attr", "IsUnder21", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferencesSingleCustomizedRec.init();
return VisibilityPreferencesSingleCustomizedRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferencesSingleCustomizedRec = VisibilityPreferencesSingleCustomizedRec;

});
define("ContactBase_IS.model$VisibilityPreferencesSingleCustomizedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$VisibilityPreferencesSingleCustomizedRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferencesSingleCustomizedList = (function (_super) {
__extends(VisibilityPreferencesSingleCustomizedList, _super);
function VisibilityPreferencesSingleCustomizedList(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferencesSingleCustomizedList.itemType = ContactBase_ISModel.VisibilityPreferencesSingleCustomizedRec;
return VisibilityPreferencesSingleCustomizedList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.VisibilityPreferencesSingleCustomizedList = VisibilityPreferencesSingleCustomizedList;

});
define("ContactBase_IS.model$GetVisibilitypreferencesCustomizedResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$VisibilityPreferencesSingleCustomizedList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetVisibilitypreferencesCustomizedResponseRec = (function (_super) {
__extends(GetVisibilitypreferencesCustomizedResponseRec, _super);
function GetVisibilitypreferencesCustomizedResponseRec(defaults) {
_super.apply(this, arguments);
}
GetVisibilitypreferencesCustomizedResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.VisibilityPreferencesSingleCustomizedList());
}, true, ContactBase_ISModel.VisibilityPreferencesSingleCustomizedList)
].concat(_super.attributesToDeclare.call(this));
};
GetVisibilitypreferencesCustomizedResponseRec.init();
return GetVisibilitypreferencesCustomizedResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetVisibilitypreferencesCustomizedResponseRec = GetVisibilitypreferencesCustomizedResponseRec;

});
define("ContactBase_IS.model$PostFilterRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostFilterRequestRec = (function (_super) {
__extends(PostFilterRequestRec, _super);
function PostFilterRequestRec(defaults) {
_super.apply(this, arguments);
}
PostFilterRequestRec.attributesToDeclare = function () {
return [
this.attr("Scope", "scopeAttr", "scope", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("StartIndex", "startIndexAttr", "startIndex", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ScopeFilter", "scopeFilterAttr", "scopeFilter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Length", "lengthAttr", "length", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostFilterRequestRec.init();
return PostFilterRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostFilterRequestRec = PostFilterRequestRec;

});
define("ContactBase_IS.model$PostCreateRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostCreateRoleRec = (function (_super) {
__extends(PostCreateRoleRec, _super);
function PostCreateRoleRec(defaults) {
_super.apply(this, arguments);
}
PostCreateRoleRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostCreateRoleRec.init();
return PostCreateRoleRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostCreateRoleRec = PostCreateRoleRec;

});
define("ContactBase_IS.model$LinkedSubscriptionDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LinkedSubscriptionDetailRec = (function (_super) {
__extends(LinkedSubscriptionDetailRec, _super);
function LinkedSubscriptionDetailRec(defaults) {
_super.apply(this, arguments);
}
LinkedSubscriptionDetailRec.attributesToDeclare = function () {
return [
this.attr("MemberID", "memberIDAttr", "MemberID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InvoiceId", "invoiceIdAttr", "InvoiceId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LinkedSubscriptionDetailRec.init();
return LinkedSubscriptionDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LinkedSubscriptionDetailRec = LinkedSubscriptionDetailRec;

});
define("ContactBase_IS.model$SubSettingNodeItem3Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubSettingNodeItem3Rec = (function (_super) {
__extends(SubSettingNodeItem3Rec, _super);
function SubSettingNodeItem3Rec(defaults) {
_super.apply(this, arguments);
}
SubSettingNodeItem3Rec.attributesToDeclare = function () {
return [
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Selectable", "selectableAttr", "Selectable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubSettingNodeItem3Rec.init();
return SubSettingNodeItem3Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubSettingNodeItem3Rec = SubSettingNodeItem3Rec;

});
define("ContactBase_IS.model$SubSettingNodeItem3List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubSettingNodeItem3Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubSettingNodeItem3List = (function (_super) {
__extends(SubSettingNodeItem3List, _super);
function SubSettingNodeItem3List(defaults) {
_super.apply(this, arguments);
}
SubSettingNodeItem3List.itemType = ContactBase_ISModel.SubSettingNodeItem3Rec;
return SubSettingNodeItem3List;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubSettingNodeItem3List = SubSettingNodeItem3List;

});
define("ContactBase_IS.model$SubSettingNodeItem2Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubSettingNodeItem3List"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubSettingNodeItem2Rec = (function (_super) {
__extends(SubSettingNodeItem2Rec, _super);
function SubSettingNodeItem2Rec(defaults) {
_super.apply(this, arguments);
}
SubSettingNodeItem2Rec.attributesToDeclare = function () {
return [
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Selectable", "selectableAttr", "Selectable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubSettingNodes", "subSettingNodesAttr", "SubSettingNodes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubSettingNodeItem3List());
}, true, ContactBase_ISModel.SubSettingNodeItem3List)
].concat(_super.attributesToDeclare.call(this));
};
SubSettingNodeItem2Rec.init();
return SubSettingNodeItem2Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubSettingNodeItem2Rec = SubSettingNodeItem2Rec;

});
define("ContactBase_IS.model$VisibilityPreferencesUpdateRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferencesUpdateRec = (function (_super) {
__extends(VisibilityPreferencesUpdateRec, _super);
function VisibilityPreferencesUpdateRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferencesUpdateRec.attributesToDeclare = function () {
return [
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHomePhone", "displayHomePhoneAttr", "DisplayHomePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferencesUpdateRec.init();
return VisibilityPreferencesUpdateRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferencesUpdateRec = VisibilityPreferencesUpdateRec;

});
define("ContactBase_IS.model$SubscriptionIntegrationsConfigurationIdsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionIntegrationsConfigurationIdsRec = (function (_super) {
__extends(SubscriptionIntegrationsConfigurationIdsRec, _super);
function SubscriptionIntegrationsConfigurationIdsRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionIntegrationsConfigurationIdsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubsciptionPlanId", "subsciptionPlanIdAttr", "SubsciptionPlanId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
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
SubscriptionIntegrationsConfigurationIdsRec.init();
return SubscriptionIntegrationsConfigurationIdsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionIntegrationsConfigurationIdsRec = SubscriptionIntegrationsConfigurationIdsRec;

});
define("ContactBase_IS.model$AdvancedSearch_Category_APIRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_APIRec = (function (_super) {
__extends(AdvancedSearch_Category_APIRec, _super);
function AdvancedSearch_Category_APIRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_APIRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_Category_APIRec.fromStructure = function (str) {
return new AdvancedSearch_Category_APIRec(new AdvancedSearch_Category_APIRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_Category_APIRec.init();
return AdvancedSearch_Category_APIRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearch_Category_APIRec = AdvancedSearch_Category_APIRec;

});
define("ContactBase_IS.model$NonSubscribersList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$NonSubscribersRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var NonSubscribersList = (function (_super) {
__extends(NonSubscribersList, _super);
function NonSubscribersList(defaults) {
_super.apply(this, arguments);
}
NonSubscribersList.itemType = ContactBase_ISModel.NonSubscribersRec;
return NonSubscribersList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.NonSubscribersList = NonSubscribersList;

});
define("ContactBase_IS.model$GetNonSubscribersRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$NonSubscribersList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetNonSubscribersRec = (function (_super) {
__extends(GetNonSubscribersRec, _super);
function GetNonSubscribersRec(defaults) {
_super.apply(this, arguments);
}
GetNonSubscribersRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.NonSubscribersList());
}, true, ContactBase_ISModel.NonSubscribersList)
].concat(_super.attributesToDeclare.call(this));
};
GetNonSubscribersRec.init();
return GetNonSubscribersRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetNonSubscribersRec = GetNonSubscribersRec;

});
define("ContactBase_IS.model$HouseholdRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholdRec = (function (_super) {
__extends(HouseholdRec, _super);
function HouseholdRec(defaults) {
_super.apply(this, arguments);
}
HouseholdRec.attributesToDeclare = function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdRec.init();
return HouseholdRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HouseholdRec = HouseholdRec;

});
define("ContactBase_IS.model$GetUsersNotInRoleResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersNotInRoleResultItemRec = (function (_super) {
__extends(GetUsersNotInRoleResultItemRec, _super);
function GetUsersNotInRoleResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetUsersNotInRoleResultItemRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firstname", "firstnameAttr", "Firstname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Surname", "surnameAttr", "Surname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Age", "ageAttr", "Age", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Region", "regionAttr", "Region", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IconUrl", "iconUrlAttr", "IconUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "CdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoLastUpdated", "photoLastUpdatedAttr", "PhotoLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetUsersNotInRoleResultItemRec.init();
return GetUsersNotInRoleResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUsersNotInRoleResultItemRec = GetUsersNotInRoleResultItemRec;

});
define("ContactBase_IS.model$GetUsersNotInRoleResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetUsersNotInRoleResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersNotInRoleResultItemList = (function (_super) {
__extends(GetUsersNotInRoleResultItemList, _super);
function GetUsersNotInRoleResultItemList(defaults) {
_super.apply(this, arguments);
}
GetUsersNotInRoleResultItemList.itemType = ContactBase_ISModel.GetUsersNotInRoleResultItemRec;
return GetUsersNotInRoleResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetUsersNotInRoleResultItemList = GetUsersNotInRoleResultItemList;

});
define("ContactBase_IS.model$GetUsersNotInRoleResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetUsersNotInRoleResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersNotInRoleResponseRec = (function (_super) {
__extends(GetUsersNotInRoleResponseRec, _super);
function GetUsersNotInRoleResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUsersNotInRoleResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetUsersNotInRoleResultItemList());
}, true, ContactBase_ISModel.GetUsersNotInRoleResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetUsersNotInRoleResponseRec.init();
return GetUsersNotInRoleResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUsersNotInRoleResponseRec = GetUsersNotInRoleResponseRec;

});
define("ContactBase_IS.model$StatusesRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var StatusesRec = (function (_super) {
__extends(StatusesRec, _super);
function StatusesRec(defaults) {
_super.apply(this, arguments);
}
StatusesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StatusesRec.init();
return StatusesRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.StatusesRec = StatusesRec;

});
define("ContactBase_IS.model$UserDetail2Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserDetail2Rec = (function (_super) {
__extends(UserDetail2Rec, _super);
function UserDetail2Rec(defaults) {
_super.apply(this, arguments);
}
UserDetail2Rec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerName", "partnerNameAttr", "PartnerName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Plan", "planAttr", "Plan", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PandS", "pandSAttr", "PandS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdminLvl", "adminLvlAttr", "AdminLvl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsFree", "isFreeAttr", "IsFree", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isSelected", "isSelectedAttr", "isSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ActiveSubscription", "activeSubscriptionAttr", "isActiveSubscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SSO_Id", "sSO_IdAttr", "SSO_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SSO_Username", "sSO_UsernameAttr", "SSO_Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountType", "accountTypeAttr", "AccountType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserDetail2Rec.init();
return UserDetail2Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UserDetail2Rec = UserDetail2Rec;

});
define("ContactBase_IS.model$MemberSearchRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var MemberSearchRec = (function (_super) {
__extends(MemberSearchRec, _super);
function MemberSearchRec(defaults) {
_super.apply(this, arguments);
}
MemberSearchRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SpouseName", "spouseNameAttr", "SpouseName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberSearchRec.init();
return MemberSearchRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.MemberSearchRec = MemberSearchRec;

});
define("ContactBase_IS.model$MemberSearchList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$MemberSearchRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var MemberSearchList = (function (_super) {
__extends(MemberSearchList, _super);
function MemberSearchList(defaults) {
_super.apply(this, arguments);
}
MemberSearchList.itemType = ContactBase_ISModel.MemberSearchRec;
return MemberSearchList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.MemberSearchList = MemberSearchList;

});
define("ContactBase_IS.model$GetMemberSearchsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$MemberSearchList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetMemberSearchsResponseRec = (function (_super) {
__extends(GetMemberSearchsResponseRec, _super);
function GetMemberSearchsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMemberSearchsResponseRec.attributesToDeclare = function () {
return [
this.attr("Results", "resultsAttr", "value", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberSearchList());
}, true, ContactBase_ISModel.MemberSearchList), 
this.attr("Total", "totalAttr", "@odata.count", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetMemberSearchsResponseRec.init();
return GetMemberSearchsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetMemberSearchsResponseRec = GetMemberSearchsResponseRec;

});
define("ContactBase_IS.model$PostGetUserNamesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostGetUserNamesResponseRec = (function (_super) {
__extends(PostGetUserNamesResponseRec, _super);
function PostGetUserNamesResponseRec(defaults) {
_super.apply(this, arguments);
}
PostGetUserNamesResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostGetUserNamesResponseRec.init();
return PostGetUserNamesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostGetUserNamesResponseRec = PostGetUserNamesResponseRec;

});
define("ContactBase_IS.model$LocalitySimplestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LocalitySimplestRec = (function (_super) {
__extends(LocalitySimplestRec, _super);
function LocalitySimplestRec(defaults) {
_super.apply(this, arguments);
}
LocalitySimplestRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalitySimplestRec.init();
return LocalitySimplestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LocalitySimplestRec = LocalitySimplestRec;

});
define("ContactBase_IS.model$PostLocalitybyIdsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostLocalitybyIdsResponseRec = (function (_super) {
__extends(PostLocalitybyIdsResponseRec, _super);
function PostLocalitybyIdsResponseRec(defaults) {
_super.apply(this, arguments);
}
PostLocalitybyIdsResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostLocalitybyIdsResponseRec.init();
return PostLocalitybyIdsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostLocalitybyIdsResponseRec = PostLocalitybyIdsResponseRec;

});
define("ContactBase_IS.model$SubSettingNodeItem2List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubSettingNodeItem2Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubSettingNodeItem2List = (function (_super) {
__extends(SubSettingNodeItem2List, _super);
function SubSettingNodeItem2List(defaults) {
_super.apply(this, arguments);
}
SubSettingNodeItem2List.itemType = ContactBase_ISModel.SubSettingNodeItem2Rec;
return SubSettingNodeItem2List;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubSettingNodeItem2List = SubSettingNodeItem2List;

});
define("ContactBase_IS.model$SubSettingNodeItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubSettingNodeItem2List"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubSettingNodeItemRec = (function (_super) {
__extends(SubSettingNodeItemRec, _super);
function SubSettingNodeItemRec(defaults) {
_super.apply(this, arguments);
}
SubSettingNodeItemRec.attributesToDeclare = function () {
return [
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Selectable", "selectableAttr", "Selectable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubSettingNodes", "subSettingNodesAttr", "SubSettingNodes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubSettingNodeItem2List());
}, true, ContactBase_ISModel.SubSettingNodeItem2List)
].concat(_super.attributesToDeclare.call(this));
};
SubSettingNodeItemRec.init();
return SubSettingNodeItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubSettingNodeItemRec = SubSettingNodeItemRec;

});
define("ContactBase_IS.model$ChangeRequestsStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ChangeRequestsStatusRec = (function (_super) {
__extends(ChangeRequestsStatusRec, _super);
function ChangeRequestsStatusRec(defaults) {
_super.apply(this, arguments);
}
ChangeRequestsStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChangeRequestsStatusRec.init();
return ChangeRequestsStatusRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ChangeRequestsStatusRec = ChangeRequestsStatusRec;

});
define("ContactBase_IS.model$GetSearchMemberResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSearchMemberResponseRec = (function (_super) {
__extends(GetSearchMemberResponseRec, _super);
function GetSearchMemberResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSearchMemberResponseRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconUrl", "iconUrlAttr", "IconUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "CdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSearchMemberResponseRec.init();
return GetSearchMemberResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSearchMemberResponseRec = GetSearchMemberResponseRec;

});
define("ContactBase_IS.model$UserDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserDetailRec = (function (_super) {
__extends(UserDetailRec, _super);
function UserDetailRec(defaults) {
_super.apply(this, arguments);
}
UserDetailRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerName", "partnerNameAttr", "PartnerName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Plan", "planAttr", "Plan", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PandS", "pandSAttr", "PandS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdminLvl", "adminLvlAttr", "AdminLvl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsFree", "isFreeAttr", "IsFree", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isSelected", "isSelectedAttr", "isSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ActiveSubscription", "activeSubscriptionAttr", "isActiveSubscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SSO_Id", "sSO_IdAttr", "SSO_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SSO_Username", "sSO_UsernameAttr", "SSO_Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountType", "accountTypeAttr", "AccountType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailRec.init();
return UserDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UserDetailRec = UserDetailRec;

});
define("ContactBase_IS.model$UserDetailList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$UserDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserDetailList = (function (_super) {
__extends(UserDetailList, _super);
function UserDetailList(defaults) {
_super.apply(this, arguments);
}
UserDetailList.itemType = ContactBase_ISModel.UserDetailRec;
return UserDetailList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.UserDetailList = UserDetailList;

});
define("ContactBase_IS.model$GetUsersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$UserDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersResponseRec = (function (_super) {
__extends(GetUsersResponseRec, _super);
function GetUsersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUsersResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.UserDetailList());
}, true, ContactBase_ISModel.UserDetailList)
].concat(_super.attributesToDeclare.call(this));
};
GetUsersResponseRec.init();
return GetUsersResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUsersResponseRec = GetUsersResponseRec;

});
define("ContactBase_IS.model$PendingSubscriptionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PendingSubscriptionRec = (function (_super) {
__extends(PendingSubscriptionRec, _super);
function PendingSubscriptionRec(defaults) {
_super.apply(this, arguments);
}
PendingSubscriptionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountId", "accountIdAttr", "SubscriptionNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PurchaserName", "purchaserNameAttr", "PurchaserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PurchaserLocality", "purchaserLocalityAttr", "PurchaserLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionConfigurationId", "subscriptionConfigurationIdAttr", "SubscriptionConfigurationId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegionId", "subscriptionRegionIdAttr", "SubscriptionRegionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RequestStatus", "requestStatusAttr", "RequestsStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionStartDate", "subscriptionStartDateAttr", "SubscriptionStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SubscriberName", "subscriberNameAttr", "SubscriberName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriberEmailAddress", "subscriberEmailAddressAttr", "SubscriberEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriberLocality", "subscriberLocalityAttr", "SubscriberLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LinkedSubscriptionId", "linkedSubscriptionIdAttr", "LinkedSubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TotalCount", "totalCountAttr", "TotalCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RequestStatusId", "requestStatusIdAttr", "RequestStatusId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PendingSubscriptionRec.init();
return PendingSubscriptionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PendingSubscriptionRec = PendingSubscriptionRec;

});
define("ContactBase_IS.model$CDNRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CDNRec = (function (_super) {
__extends(CDNRec, _super);
function CDNRec(defaults) {
_super.apply(this, arguments);
}
CDNRec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPath", "signedPathAttr", "SignedPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CDNRec.init();
return CDNRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CDNRec = CDNRec;

});
define("ContactBase_IS.model$GetAdvancedSearchResultItemDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$CDNRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchResultItemDetailRec = (function (_super) {
__extends(GetAdvancedSearchResultItemDetailRec, _super);
function GetAdvancedSearchResultItemDetailRec(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchResultItemDetailRec.attributesToDeclare = function () {
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
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ChildrenNames", "childrenNamesAttr", "ChildrenNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("Photo340", "photo340Attr", "Photo340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("Disabled", "disabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAdvancedSearchResultItemDetailRec.init();
return GetAdvancedSearchResultItemDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAdvancedSearchResultItemDetailRec = GetAdvancedSearchResultItemDetailRec;

});
define("ContactBase_IS.model$GetAdvancedSearchResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetAdvancedSearchResultItemDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchResultItemRec = (function (_super) {
__extends(GetAdvancedSearchResultItemRec, _super);
function GetAdvancedSearchResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchResultItemRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetAdvancedSearchResultItemDetailRec());
}, true, ContactBase_ISModel.GetAdvancedSearchResultItemDetailRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdvancedSearchResultItemRec.init();
return GetAdvancedSearchResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAdvancedSearchResultItemRec = GetAdvancedSearchResultItemRec;

});
define("ContactBase_IS.model$GetAdvancedSearchResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetAdvancedSearchResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchResultItemList = (function (_super) {
__extends(GetAdvancedSearchResultItemList, _super);
function GetAdvancedSearchResultItemList(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchResultItemList.itemType = ContactBase_ISModel.GetAdvancedSearchResultItemRec;
return GetAdvancedSearchResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetAdvancedSearchResultItemList = GetAdvancedSearchResultItemList;

});
define("ContactBase_IS.model$AdvancedSearchRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetAdvancedSearchResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearchRec = (function (_super) {
__extends(AdvancedSearchRec, _super);
function AdvancedSearchRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetAdvancedSearchResultItemList());
}, true, ContactBase_ISModel.GetAdvancedSearchResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchRec.init();
return AdvancedSearchRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearchRec = AdvancedSearchRec;

});
define("ContactBase_IS.model$LocationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LocationRec = (function (_super) {
__extends(LocationRec, _super);
function LocationRec(defaults) {
_super.apply(this, arguments);
}
LocationRec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Localitry", "localitryAttr", "Localitry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocationRec.init();
return LocationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LocationRec = LocationRec;

});
define("ContactBase_IS.model$", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.TextList = TextList;

});
define("ContactBase_IS.model$GetHouseholdsResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoTagRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdsResultItemRec = (function (_super) {
__extends(GetHouseholdsResultItemRec, _super);
function GetHouseholdsResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdsResultItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("ChildrensFirstNames", "childrensFirstNamesAttr", "ChildrensFirstNames", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdsResultItemRec.init();
return GetHouseholdsResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdsResultItemRec = GetHouseholdsResultItemRec;

});
define("ContactBase_IS.model$GetHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetHouseholdsResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdsResultItemList = (function (_super) {
__extends(GetHouseholdsResultItemList, _super);
function GetHouseholdsResultItemList(defaults) {
_super.apply(this, arguments);
}
GetHouseholdsResultItemList.itemType = ContactBase_ISModel.GetHouseholdsResultItemRec;
return GetHouseholdsResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetHouseholdsResultItemList = GetHouseholdsResultItemList;

});
define("ContactBase_IS.model$GetHouseholdsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetHouseholdsResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdsResponseRec = (function (_super) {
__extends(GetHouseholdsResponseRec, _super);
function GetHouseholdsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetHouseholdsResultItemList());
}, true, ContactBase_ISModel.GetHouseholdsResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdsResponseRec.init();
return GetHouseholdsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdsResponseRec = GetHouseholdsResponseRec;

});
define("ContactBase_IS.model$PostTokenResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostTokenResponseRec = (function (_super) {
__extends(PostTokenResponseRec, _super);
function PostTokenResponseRec(defaults) {
_super.apply(this, arguments);
}
PostTokenResponseRec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Token_type", "token_typeAttr", "token_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("As_client_id", "as_client_idAttr", "as:client_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "userName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("issued", "issuedAttr", ".issued", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("expires", "expiresAttr", ".expires", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostTokenResponseRec.init();
return PostTokenResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostTokenResponseRec = PostTokenResponseRec;

});
define("ContactBase_IS.model$GetSearchFormattedResultItemDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoUrlRec", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$DefaultCountryRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSearchFormattedResultItemDetailRec = (function (_super) {
__extends(GetSearchFormattedResultItemDetailRec, _super);
function GetSearchFormattedResultItemDetailRec(defaults) {
_super.apply(this, arguments);
}
GetSearchFormattedResultItemDetailRec.attributesToDeclare = function () {
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
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HallPhotoRec());
}, true, ContactBase_ISModel.HallPhotoRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSearchFormattedResultItemDetailRec.init();
return GetSearchFormattedResultItemDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSearchFormattedResultItemDetailRec = GetSearchFormattedResultItemDetailRec;

});
define("ContactBase_IS.model$GetSearchFormattedResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSearchFormattedResultItemDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSearchFormattedResultItemRec = (function (_super) {
__extends(GetSearchFormattedResultItemRec, _super);
function GetSearchFormattedResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetSearchFormattedResultItemRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSearchFormattedResultItemDetailRec());
}, true, ContactBase_ISModel.GetSearchFormattedResultItemDetailRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSearchFormattedResultItemRec.init();
return GetSearchFormattedResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSearchFormattedResultItemRec = GetSearchFormattedResultItemRec;

});
define("ContactBase_IS.model$ChangeRequestsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ChangeRequestsRec = (function (_super) {
__extends(ChangeRequestsRec, _super);
function ChangeRequestsRec(defaults) {
_super.apply(this, arguments);
}
ChangeRequestsRec.attributesToDeclare = function () {
return [
this.attr("odata_context", "odata_contextAttr", "@odata.context", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
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
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
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
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate", "familyUpdateAttr", "FamilyUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FamilyUpdate_BirthDateDisplay", "familyUpdate_BirthDateDisplayAttr", "FamilyUpdate_BirthDateDisplay", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_BirthTimeDisplay", "familyUpdate_BirthTimeDisplayAttr", "FamilyUpdate_BirthTimeDisplay", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_Gender", "familyUpdate_GenderAttr", "FamilyUpdate_Gender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_Name", "familyUpdate_NameAttr", "FamilyUpdate_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoUpdate", "photoUpdateAttr", "PhotoUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CurrentFirstName", "currentFirstNameAttr", "CurrentFirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentLastName", "currentLastNameAttr", "CurrentLastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentFullName", "currentFullNameAttr", "CurrentFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentEmail", "currentEmailAttr", "CurrentEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentCountryCode", "currentCountryCodeAttr", "CurrentCountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentCountryName", "currentCountryNameAttr", "CurrentCountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentLocalityId", "currentLocalityIdAttr", "CurrentLocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentLocalityName", "currentLocalityNameAttr", "CurrentLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentSubdivisionId", "currentSubdivisionIdAttr", "CurrentSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrentSubdivisionName", "currentSubdivisionNameAttr", "CurrentSubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress1", "currentAddress1Attr", "CurrentAddress1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress2", "currentAddress2Attr", "CurrentAddress2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress3", "currentAddress3Attr", "CurrentAddress3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress4", "currentAddress4Attr", "CurrentAddress4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress5", "currentAddress5Attr", "CurrentAddress5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress6", "currentAddress6Attr", "CurrentAddress6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress7", "currentAddress7Attr", "CurrentAddress7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress8", "currentAddress8Attr", "CurrentAddress8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentHomePhone", "currentHomePhoneAttr", "CurrentHomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentWorkPhone", "currentWorkPhoneAttr", "CurrentWorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentMobilePhone", "currentMobilePhoneAttr", "CurrentMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentDisplayWorkPhone", "currentDisplayWorkPhoneAttr", "CurrentDisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CurrentDisplayMobilePhone", "currentDisplayMobilePhoneAttr", "CurrentDisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Hidden", "hiddenAttr", "Hidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Taken", "takenAttr", "Taken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastLogin", "lastLoginAttr", "LastLogin", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalEmail", "originalEmailAttr", "OriginalEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("OriginalLocalityId", "originalLocalityIdAttr", "OriginalLocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalLocalityName", "originalLocalityNameAttr", "OriginalLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalSubdivisionId", "originalSubdivisionIdAttr", "OriginalSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OriginalSubdivisionName", "originalSubdivisionNameAttr", "OriginalSubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalCountryCode", "originalCountryCodeAttr", "OriginalCountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalCountryName", "originalCountryNameAttr", "OriginalCountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress1", "originalAddress1Attr", "OriginalAddress1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress2", "originalAddress2Attr", "OriginalAddress2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress3", "originalAddress3Attr", "OriginalAddress3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress4", "originalAddress4Attr", "OriginalAddress4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress5", "originalAddress5Attr", "OriginalAddress5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress6", "originalAddress6Attr", "OriginalAddress6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress7", "originalAddress7Attr", "OriginalAddress7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalAddress8", "originalAddress8Attr", "OriginalAddress8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalHomePhone", "originalHomePhoneAttr", "OriginalHomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalWorkPhone", "originalWorkPhoneAttr", "OriginalWorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalMobilePhone", "originalMobilePhoneAttr", "OriginalMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChangeRequestsRec.init();
return ChangeRequestsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ChangeRequestsRec = ChangeRequestsRec;

});
define("ContactBase_IS.model$ChangeRequestsList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ChangeRequestsRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ChangeRequestsList = (function (_super) {
__extends(ChangeRequestsList, _super);
function ChangeRequestsList(defaults) {
_super.apply(this, arguments);
}
ChangeRequestsList.itemType = ContactBase_ISModel.ChangeRequestsRec;
return ChangeRequestsList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.ChangeRequestsList = ChangeRequestsList;

});
define("ContactBase_IS.model$GetMyDetailsChangeRequestsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ChangeRequestsList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetMyDetailsChangeRequestsResponseRec = (function (_super) {
__extends(GetMyDetailsChangeRequestsResponseRec, _super);
function GetMyDetailsChangeRequestsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMyDetailsChangeRequestsResponseRec.attributesToDeclare = function () {
return [
this.attr("odata_context", "odata_contextAttr", "@odata.context", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("odata_count", "odata_countAttr", "@odata.count", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ChangeRequestsList());
}, true, ContactBase_ISModel.ChangeRequestsList)
].concat(_super.attributesToDeclare.call(this));
};
GetMyDetailsChangeRequestsResponseRec.init();
return GetMyDetailsChangeRequestsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetMyDetailsChangeRequestsResponseRec = GetMyDetailsChangeRequestsResponseRec;

});
define("ContactBase_IS.model$CaptionItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CaptionItemRec = (function (_super) {
__extends(CaptionItemRec, _super);
function CaptionItemRec(defaults) {
_super.apply(this, arguments);
}
CaptionItemRec.attributesToDeclare = function () {
return [
this.attr("Addressbook", "addressbookAttr", "addressbook", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photobook", "photobookAttr", "photobook", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approved_on", "approved_onAttr", "approved_on", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CaptionItemRec.init();
return CaptionItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CaptionItemRec = CaptionItemRec;

});
define("ContactBase_IS.model$CaptionItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CaptionItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CaptionItemList = (function (_super) {
__extends(CaptionItemList, _super);
function CaptionItemList(defaults) {
_super.apply(this, arguments);
}
CaptionItemList.itemType = ContactBase_ISModel.CaptionItemRec;
return CaptionItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.CaptionItemList = CaptionItemList;

});
define("ContactBase_IS.model$GetCaptionResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CaptionItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetCaptionResponseRec = (function (_super) {
__extends(GetCaptionResponseRec, _super);
function GetCaptionResponseRec(defaults) {
_super.apply(this, arguments);
}
GetCaptionResponseRec.attributesToDeclare = function () {
return [
this.attr("Householder_id", "householder_idAttr", "householder_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entry_id", "entry_idAttr", "entry_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Captions", "captionsAttr", "captions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CaptionItemList());
}, true, ContactBase_ISModel.CaptionItemList), 
this.attr("Success", "successAttr", "success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Error_code", "error_codeAttr", "error_code", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetCaptionResponseRec.init();
return GetCaptionResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetCaptionResponseRec = GetCaptionResponseRec;

});
define("ContactBase_IS.model$GetAllCountriesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAllCountriesResponseRec = (function (_super) {
__extends(GetAllCountriesResponseRec, _super);
function GetAllCountriesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAllCountriesResponseRec.attributesToDeclare = function () {
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
GetAllCountriesResponseRec.init();
return GetAllCountriesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAllCountriesResponseRec = GetAllCountriesResponseRec;

});
define("ContactBase_IS.model$GetAutoSuggestResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAutoSuggestResponseRec = (function (_super) {
__extends(GetAutoSuggestResponseRec, _super);
function GetAutoSuggestResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAutoSuggestResponseRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAutoSuggestResponseRec.init();
return GetAutoSuggestResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAutoSuggestResponseRec = GetAutoSuggestResponseRec;

});
define("ContactBase_IS.model$DefaultCountry2Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ConnectConfigRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DefaultCountry2Rec = (function (_super) {
__extends(DefaultCountry2Rec, _super);
function DefaultCountry2Rec(defaults) {
_super.apply(this, arguments);
}
DefaultCountry2Rec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
this.attr("RegionId", "regionIdAttr", "RegionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Config", "configAttr", "Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ConnectConfigRec());
}, true, ContactBase_ISModel.ConnectConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultCountry2Rec.init();
return DefaultCountry2Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DefaultCountry2Rec = DefaultCountry2Rec;

});
define("ContactBase_IS.model$NonSubscribersByRegionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var NonSubscribersByRegionRec = (function (_super) {
__extends(NonSubscribersByRegionRec, _super);
function NonSubscribersByRegionRec(defaults) {
_super.apply(this, arguments);
}
NonSubscribersByRegionRec.attributesToDeclare = function () {
return [
this.attr("RegionName", "regionNameAttr", "RegionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Counter", "counterAttr", "Counter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NonSubscribersByRegionRec.init();
return NonSubscribersByRegionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.NonSubscribersByRegionRec = NonSubscribersByRegionRec;

});
define("ContactBase_IS.model$GetAdvancedSearchPresignedResultItemDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CDNRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemDetailRec = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemDetailRec, _super);
function GetAdvancedSearchPresignedResultItemDetailRec(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemDetailRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdID", "householdIDAttr", "HouseholdID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ChildrenNames", "childrenNamesAttr", "ChildrenNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("Disabled", "disabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAdvancedSearchPresignedResultItemDetailRec.init();
return GetAdvancedSearchPresignedResultItemDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAdvancedSearchPresignedResultItemDetailRec = GetAdvancedSearchPresignedResultItemDetailRec;

});
define("ContactBase_IS.model$GetAdvancedSearchPresignedResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemRec = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemRec, _super);
function GetAdvancedSearchPresignedResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetAdvancedSearchPresignedResultItemDetailRec());
}, true, ContactBase_ISModel.GetAdvancedSearchPresignedResultItemDetailRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdvancedSearchPresignedResultItemRec.init();
return GetAdvancedSearchPresignedResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAdvancedSearchPresignedResultItemRec = GetAdvancedSearchPresignedResultItemRec;

});
define("ContactBase_IS.model$GetAdvancedSearchPresignedResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemList = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemList, _super);
function GetAdvancedSearchPresignedResultItemList(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemList.itemType = ContactBase_ISModel.GetAdvancedSearchPresignedResultItemRec;
return GetAdvancedSearchPresignedResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetAdvancedSearchPresignedResultItemList = GetAdvancedSearchPresignedResultItemList;

});
define("ContactBase_IS.model$AdvancedSearchPresignedRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearchPresignedRec = (function (_super) {
__extends(AdvancedSearchPresignedRec, _super);
function AdvancedSearchPresignedRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchPresignedRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetAdvancedSearchPresignedResultItemList());
}, true, ContactBase_ISModel.GetAdvancedSearchPresignedResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchPresignedRec.init();
return AdvancedSearchPresignedRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearchPresignedRec = AdvancedSearchPresignedRec;

});
define("ContactBase_IS.model$OpeningHourItem_BusinessLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var OpeningHourItem_BusinessLocationRec = (function (_super) {
__extends(OpeningHourItem_BusinessLocationRec, _super);
function OpeningHourItem_BusinessLocationRec(defaults) {
_super.apply(this, arguments);
}
OpeningHourItem_BusinessLocationRec.attributesToDeclare = function () {
return [
this.attr("Day", "dayAttr", "Day", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpenTime", "openTimeAttr", "OpenTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CloseTime", "closeTimeAttr", "CloseTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OpeningHourItem_BusinessLocationRec.init();
return OpeningHourItem_BusinessLocationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.OpeningHourItem_BusinessLocationRec = OpeningHourItem_BusinessLocationRec;

});
define("ContactBase_IS.model$OpeningHourItem_BusinessLocationList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$OpeningHourItem_BusinessLocationRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var OpeningHourItem_BusinessLocationList = (function (_super) {
__extends(OpeningHourItem_BusinessLocationList, _super);
function OpeningHourItem_BusinessLocationList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItem_BusinessLocationList.itemType = ContactBase_ISModel.OpeningHourItem_BusinessLocationRec;
return OpeningHourItem_BusinessLocationList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.OpeningHourItem_BusinessLocationList = OpeningHourItem_BusinessLocationList;

});
define("ContactBase_IS.model$BusinessLinkItem_BusinessLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BusinessLinkItem_BusinessLocationRec = (function (_super) {
__extends(BusinessLinkItem_BusinessLocationRec, _super);
function BusinessLinkItem_BusinessLocationRec(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItem_BusinessLocationRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Link", "linkAttr", "Link", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID", "iDAttr", "ID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BusinessLinkItem_BusinessLocationRec.init();
return BusinessLinkItem_BusinessLocationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.BusinessLinkItem_BusinessLocationRec = BusinessLinkItem_BusinessLocationRec;

});
define("ContactBase_IS.model$BusinessLinkItem_BusinessLocationList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$BusinessLinkItem_BusinessLocationRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BusinessLinkItem_BusinessLocationList = (function (_super) {
__extends(BusinessLinkItem_BusinessLocationList, _super);
function BusinessLinkItem_BusinessLocationList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItem_BusinessLocationList.itemType = ContactBase_ISModel.BusinessLinkItem_BusinessLocationRec;
return BusinessLinkItem_BusinessLocationList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.BusinessLinkItem_BusinessLocationList = BusinessLinkItem_BusinessLocationList;

});
define("ContactBase_IS.model$Photo_CDNRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var Photo_CDNRec = (function (_super) {
__extends(Photo_CDNRec, _super);
function Photo_CDNRec(defaults) {
_super.apply(this, arguments);
}
Photo_CDNRec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPath", "signedPathAttr", "SignedPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Photo_CDNRec.init();
return Photo_CDNRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.Photo_CDNRec = Photo_CDNRec;

});
define("ContactBase_IS.model$CommunityBusinessRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$OpeningHourItem_BusinessLocationList", "ContactBase_IS.model$BusinessLinkItem_BusinessLocationList", "ContactBase_IS.model$Photo_CDNRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CommunityBusinessRec = (function (_super) {
__extends(CommunityBusinessRec, _super);
function CommunityBusinessRec(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessRec.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessID", "communityBusinessIDAttr", "CommunityBusinessID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Website", "websiteAttr", "Website", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailAddress", "emailAddressAttr", "EmailAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AreasServed", "areasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityIdList", "localityIdListAttr", "LocalityIdList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("OpeningHours", "openingHoursAttr", "OpeningHours", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.OpeningHourItem_BusinessLocationList());
}, true, ContactBase_ISModel.OpeningHourItem_BusinessLocationList), 
this.attr("BusinessLinks", "businessLinksAttr", "BusinessLinks", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.BusinessLinkItem_BusinessLocationList());
}, true, ContactBase_ISModel.BusinessLinkItem_BusinessLocationList), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.Photo_CDNRec());
}, true, ContactBase_ISModel.Photo_CDNRec), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessRec.init();
return CommunityBusinessRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CommunityBusinessRec = CommunityBusinessRec;

});
define("ContactBase_IS.model$ImagesByObjectTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ImagesByObjectTypeRec = (function (_super) {
__extends(ImagesByObjectTypeRec, _super);
function ImagesByObjectTypeRec(defaults) {
_super.apply(this, arguments);
}
ImagesByObjectTypeRec.attributesToDeclare = function () {
return [
this.attr("IdList", "idListAttr", "IdList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImagesByObjectTypeRec.init();
return ImagesByObjectTypeRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ImagesByObjectTypeRec = ImagesByObjectTypeRec;

});
define("ContactBase_IS.model$CountryConfigurationStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CountryConfigurationStatusRec = (function (_super) {
__extends(CountryConfigurationStatusRec, _super);
function CountryConfigurationStatusRec(defaults) {
_super.apply(this, arguments);
}
CountryConfigurationStatusRec.attributesToDeclare = function () {
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
CountryConfigurationStatusRec.init();
return CountryConfigurationStatusRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CountryConfigurationStatusRec = CountryConfigurationStatusRec;

});
define("ContactBase_IS.model$UserExistsCodeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserExistsCodeRec = (function (_super) {
__extends(UserExistsCodeRec, _super);
function UserExistsCodeRec(defaults) {
_super.apply(this, arguments);
}
UserExistsCodeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserExistsCodeRec.init();
return UserExistsCodeRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UserExistsCodeRec = UserExistsCodeRec;

});
define("ContactBase_IS.model$AdvancePlusSubscriberDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancePlusSubscriberDetailsRec = (function (_super) {
__extends(AdvancePlusSubscriberDetailsRec, _super);
function AdvancePlusSubscriberDetailsRec(defaults) {
_super.apply(this, arguments);
}
AdvancePlusSubscriberDetailsRec.attributesToDeclare = function () {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancePlusSubscriberDetailsRec.init();
return AdvancePlusSubscriberDetailsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancePlusSubscriberDetailsRec = AdvancePlusSubscriberDetailsRec;

});
define("ContactBase_IS.model$SubdivisionExtendedRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
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
ContactBase_ISModel.SubdivisionExtendedRec = SubdivisionExtendedRec;

});
define("ContactBase_IS.model$AccountTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AccountTypeRec = (function (_super) {
__extends(AccountTypeRec, _super);
function AccountTypeRec(defaults) {
_super.apply(this, arguments);
}
AccountTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccountTypeRec.init();
return AccountTypeRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AccountTypeRec = AccountTypeRec;

});
define("ContactBase_IS.model$InfoUBTResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var InfoUBTResponseRec = (function (_super) {
__extends(InfoUBTResponseRec, _super);
function InfoUBTResponseRec(defaults) {
_super.apply(this, arguments);
}
InfoUBTResponseRec.attributesToDeclare = function () {
return [
this.attr("ContactEmail", "contactEmailAttr", "ContactEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ContactNumber", "contactNumberAttr", "ContactNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InfoUBTResponseRec.init();
return InfoUBTResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.InfoUBTResponseRec = InfoUBTResponseRec;

});
define("ContactBase_IS.model$DetailsMappingRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DetailsMappingRec = (function (_super) {
__extends(DetailsMappingRec, _super);
function DetailsMappingRec(defaults) {
_super.apply(this, arguments);
}
DetailsMappingRec.attributesToDeclare = function () {
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
DetailsMappingRec.init();
return DetailsMappingRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DetailsMappingRec = DetailsMappingRec;

});
define("ContactBase_IS.model$NonSubscribersByCountryRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var NonSubscribersByCountryRec = (function (_super) {
__extends(NonSubscribersByCountryRec, _super);
function NonSubscribersByCountryRec(defaults) {
_super.apply(this, arguments);
}
NonSubscribersByCountryRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Counter", "counterAttr", "Counter", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RegionName", "regionNameAttr", "RegionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NonSubscribersByCountryRec.init();
return NonSubscribersByCountryRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.NonSubscribersByCountryRec = NonSubscribersByCountryRec;

});
define("ContactBase_IS.model$AdvancedSearch_HouseholdViewRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_HouseholdViewRec = (function (_super) {
__extends(AdvancedSearch_HouseholdViewRec, _super);
function AdvancedSearch_HouseholdViewRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_HouseholdViewRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("label", "labelAttr", "label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_HouseholdViewRec.init();
return AdvancedSearch_HouseholdViewRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearch_HouseholdViewRec = AdvancedSearch_HouseholdViewRec;

});
define("ContactBase_IS.model$GlobalRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GlobalRec = (function (_super) {
__extends(GlobalRec, _super);
function GlobalRec(defaults) {
_super.apply(this, arguments);
}
GlobalRec.attributesToDeclare = function () {
return [
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Effective", "effectiveAttr", "Effective", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StartDate", "startDateAttr", "StartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDate", "endDateAttr", "EndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Reason", "reasonAttr", "Reason", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PaymentStatus", "paymentStatusAttr", "PaymentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsCheckSubscription", "isCheckSubscriptionAttr", "IsCheckSubscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IdentifierSubscription", "identifierSubscriptionAttr", "IdentifierSubscription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReasonDetail", "reasonDetailAttr", "ReasonDetail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TerminateReason", "terminateReasonAttr", "TerminateReason", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GlobalRec.init();
return GlobalRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GlobalRec = GlobalRec;

});
define("ContactBase_IS.model$HouseholdTakenStatusItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholdTakenStatusItemRec = (function (_super) {
__extends(HouseholdTakenStatusItemRec, _super);
function HouseholdTakenStatusItemRec(defaults) {
_super.apply(this, arguments);
}
HouseholdTakenStatusItemRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsTaken", "isTakenAttr", "IsTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdTakenStatusItemRec.init();
return HouseholdTakenStatusItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HouseholdTakenStatusItemRec = HouseholdTakenStatusItemRec;

});
define("ContactBase_IS.model$HouseholdTakenStatusItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HouseholdTakenStatusItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholdTakenStatusItemList = (function (_super) {
__extends(HouseholdTakenStatusItemList, _super);
function HouseholdTakenStatusItemList(defaults) {
_super.apply(this, arguments);
}
HouseholdTakenStatusItemList.itemType = ContactBase_ISModel.HouseholdTakenStatusItemRec;
return HouseholdTakenStatusItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.HouseholdTakenStatusItemList = HouseholdTakenStatusItemList;

});
define("ContactBase_IS.model$GetHouseholdTakenStatusResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HouseholdTakenStatusItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdTakenStatusResponseRec = (function (_super) {
__extends(GetHouseholdTakenStatusResponseRec, _super);
function GetHouseholdTakenStatusResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdTakenStatusResponseRec.attributesToDeclare = function () {
return [
this.attr("HouseholdTakenStatusList", "householdTakenStatusListAttr", "Households", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholdTakenStatusItemList());
}, true, ContactBase_ISModel.HouseholdTakenStatusItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdTakenStatusResponseRec.fromStructure = function (str) {
return new GetHouseholdTakenStatusResponseRec(new GetHouseholdTakenStatusResponseRec.RecordClass({
householdTakenStatusListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetHouseholdTakenStatusResponseRec.init();
return GetHouseholdTakenStatusResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdTakenStatusResponseRec = GetHouseholdTakenStatusResponseRec;

});
define("ContactBase_IS.model$GlobalSubscriberDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GlobalSubscriberDetailsRec = (function (_super) {
__extends(GlobalSubscriberDetailsRec, _super);
function GlobalSubscriberDetailsRec(defaults) {
_super.apply(this, arguments);
}
GlobalSubscriberDetailsRec.attributesToDeclare = function () {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GlobalSubscriberDetailsRec.init();
return GlobalSubscriberDetailsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GlobalSubscriberDetailsRec = GlobalSubscriberDetailsRec;

});
define("ContactBase_IS.model$ElasticSearch_PlaceRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_PlaceRec = (function (_super) {
__extends(ElasticSearch_PlaceRec, _super);
function ElasticSearch_PlaceRec(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_PlaceRec.attributesToDeclare = function () {
return [
this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ElasticSearch_PlaceRec.init();
return ElasticSearch_PlaceRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ElasticSearch_PlaceRec = ElasticSearch_PlaceRec;

});
define("ContactBase_IS.model$LinkItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LinkItemRec = (function (_super) {
__extends(LinkItemRec, _super);
function LinkItemRec(defaults) {
_super.apply(this, arguments);
}
LinkItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Link", "linkAttr", "Link", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LinkItemRec.init();
return LinkItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LinkItemRec = LinkItemRec;

});
define("ContactBase_IS.model$PostAcceptPolicyRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostAcceptPolicyRec = (function (_super) {
__extends(PostAcceptPolicyRec, _super);
function PostAcceptPolicyRec(defaults) {
_super.apply(this, arguments);
}
PostAcceptPolicyRec.attributesToDeclare = function () {
return [
this.attr("Userid", "useridAttr", "Userid", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyName", "policyNameAttr", "PolicyName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyVersion", "policyVersionAttr", "PolicyVersion", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyAcceptanceDate", "policyAcceptanceDateAttr", "PolicyAcceptanceDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IPAddress", "iPAddressAttr", "IPAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobileNumber", "mobileNumberAttr", "MobileNumber", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("DeviceUsed", "deviceUsedAttr", "DeviceUsed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceDetails", "deviceDetailsAttr", "DeviceDetails", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostAcceptPolicyRec.init();
return PostAcceptPolicyRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostAcceptPolicyRec = PostAcceptPolicyRec;

});
define("ContactBase_IS.model$IntegrationRegionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var IntegrationRegionRec = (function (_super) {
__extends(IntegrationRegionRec, _super);
function IntegrationRegionRec(defaults) {
_super.apply(this, arguments);
}
IntegrationRegionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegrationRegionRec.init();
return IntegrationRegionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.IntegrationRegionRec = IntegrationRegionRec;

});
define("ContactBase_IS.model$HallPhotoExtensiveRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRec = (function (_super) {
__extends(HallPhotoExtensiveRec, _super);
function HallPhotoExtensiveRec(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ScaleFactor", "scaleFactorAttr", "ScaleFactor", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "CdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resize720CdnPath", "resize720CdnPathAttr", "Resize720CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resize720CdnWidth", "resize720CdnWidthAttr", "Resize720CdnWidth", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Resize720CdnHeight", "resize720CdnHeightAttr", "Resize720CdnHeight", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Resize720CdnSize", "resize720CdnSizeAttr", "Resize720CdnSize", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Resize340CdnPath", "resize340CdnPathAttr", "Resize340CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resize340CdnWidth", "resize340CdnWidthAttr", "Resize340CdnWidth", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Resize340CdnHeight", "resize340CdnHeightAttr", "Resize340CdnHeight", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Resize340CdnSize", "resize340CdnSizeAttr", "Resize340CdnSize", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoExtensiveRec.init();
return HallPhotoExtensiveRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HallPhotoExtensiveRec = HallPhotoExtensiveRec;

});
define("ContactBase_IS.model$SubscriptionPlanRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionPlanRec = (function (_super) {
__extends(SubscriptionPlanRec, _super);
function SubscriptionPlanRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionPlanRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApiAttributeValue", "apiAttributeValueAttr", "ApiAttributeValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Alias", "aliasAttr", "Alias", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionPlanRec.init();
return SubscriptionPlanRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionPlanRec = SubscriptionPlanRec;

});
define("ContactBase_IS.model$IntegrationConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var IntegrationConfigurationRec = (function (_super) {
__extends(IntegrationConfigurationRec, _super);
function IntegrationConfigurationRec(defaults) {
_super.apply(this, arguments);
}
IntegrationConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProductCode", "productCodeAttr", "ProductCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegionID", "subscriptionRegionIDAttr", "SubscriptionRegionID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegionName", "subscriptionRegionNameAttr", "SubscriptionRegionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegrationUserID", "integrationUserIDAttr", "IntegrationUserID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegrationUserFullName", "integrationUserFullNameAttr", "IntegrationUserFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SystemType", "systemTypeAttr", "SystemType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegrationConfigurationRec.init();
return IntegrationConfigurationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.IntegrationConfigurationRec = IntegrationConfigurationRec;

});
define("ContactBase_IS.model$IntegrationConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$IntegrationConfigurationRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var IntegrationConfigurationList = (function (_super) {
__extends(IntegrationConfigurationList, _super);
function IntegrationConfigurationList(defaults) {
_super.apply(this, arguments);
}
IntegrationConfigurationList.itemType = ContactBase_ISModel.IntegrationConfigurationRec;
return IntegrationConfigurationList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.IntegrationConfigurationList = IntegrationConfigurationList;

});
define("ContactBase_IS.model$GetIntegrationConfigurationsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$IntegrationConfigurationList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetIntegrationConfigurationsResponseRec = (function (_super) {
__extends(GetIntegrationConfigurationsResponseRec, _super);
function GetIntegrationConfigurationsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetIntegrationConfigurationsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.IntegrationConfigurationList());
}, true, ContactBase_ISModel.IntegrationConfigurationList)
].concat(_super.attributesToDeclare.call(this));
};
GetIntegrationConfigurationsResponseRec.init();
return GetIntegrationConfigurationsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetIntegrationConfigurationsResponseRec = GetIntegrationConfigurationsResponseRec;

});
define("ContactBase_IS.model$GetAutosuggestSearchResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAutosuggestSearchResponseRec = (function (_super) {
__extends(GetAutosuggestSearchResponseRec, _super);
function GetAutosuggestSearchResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAutosuggestSearchResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "firstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "lastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionId", "subdivisionIdAttr", "subdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FullName", "fullNameAttr", "fullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NameSuggest", "nameSuggestAttr", "nameSuggest", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NameSuggestPhonetic", "nameSuggestPhoneticAttr", "nameSuggestPhonetic", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("All", "allAttr", "all", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ImageUrl", "imageUrlAttr", "ImageUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "dateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAutosuggestSearchResponseRec.init();
return GetAutosuggestSearchResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAutosuggestSearchResponseRec = GetAutosuggestSearchResponseRec;

});
define("ContactBase_IS.model$PermissionsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PermissionsRec = (function (_super) {
__extends(PermissionsRec, _super);
function PermissionsRec(defaults) {
_super.apply(this, arguments);
}
PermissionsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ClaimValue", "claimValueAttr", "ClaimValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PermissionsRec.init();
return PermissionsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PermissionsRec = PermissionsRec;

});
define("ContactBase_IS.model$ClientsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ClientsRec = (function (_super) {
__extends(ClientsRec, _super);
function ClientsRec(defaults) {
_super.apply(this, arguments);
}
ClientsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ClientsRec.init();
return ClientsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ClientsRec = ClientsRec;

});
define("ContactBase_IS.model$BOmembersRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BOmembersRec = (function (_super) {
__extends(BOmembersRec, _super);
function BOmembersRec(defaults) {
_super.apply(this, arguments);
}
BOmembersRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Partner", "partnerAttr", "Partner", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BOmembersRec.init();
return BOmembersRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.BOmembersRec = BOmembersRec;

});
define("ContactBase_IS.model$BOmembersList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$BOmembersRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BOmembersList = (function (_super) {
__extends(BOmembersList, _super);
function BOmembersList(defaults) {
_super.apply(this, arguments);
}
BOmembersList.itemType = ContactBase_ISModel.BOmembersRec;
return BOmembersList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.BOmembersList = BOmembersList;

});
define("ContactBase_IS.model$GetBOmembersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$BOmembersList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetBOmembersResponseRec = (function (_super) {
__extends(GetBOmembersResponseRec, _super);
function GetBOmembersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetBOmembersResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.BOmembersList());
}, true, ContactBase_ISModel.BOmembersList)
].concat(_super.attributesToDeclare.call(this));
};
GetBOmembersResponseRec.init();
return GetBOmembersResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetBOmembersResponseRec = GetBOmembersResponseRec;

});
define("ContactBase_IS.model$PostMyDetailsChangeRequestsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostMyDetailsChangeRequestsRec = (function (_super) {
__extends(PostMyDetailsChangeRequestsRec, _super);
function PostMyDetailsChangeRequestsRec(defaults) {
_super.apply(this, arguments);
}
PostMyDetailsChangeRequestsRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionId", "subdivisionIdAttr", "SubdivisionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
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
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate", "familyUpdateAttr", "FamilyUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FamilyUpdate_BirthDateDisplay", "familyUpdate_BirthDateDisplayAttr", "FamilyUpdate_BirthDateDisplay", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_BirthTimeDisplay", "familyUpdate_BirthTimeDisplayAttr", "FamilyUpdate_BirthTimeDisplay", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_Gender", "familyUpdate_GenderAttr", "FamilyUpdate_Gender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_Name", "familyUpdate_NameAttr", "FamilyUpdate_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoUpdate", "photoUpdateAttr", "PhotoUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CurrentEmail", "currentEmailAttr", "CurrentEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentCountryCode", "currentCountryCodeAttr", "CurrentCountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentLocalityId", "currentLocalityIdAttr", "CurrentLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrentLocalityName", "currentLocalityNameAttr", "CurrentLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentSubdivisionId", "currentSubdivisionIdAttr", "CurrentSubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrentSubdivisionName", "currentSubdivisionNameAttr", "CurrentSubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress1", "currentAddress1Attr", "CurrentAddress1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress2", "currentAddress2Attr", "CurrentAddress2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress3", "currentAddress3Attr", "CurrentAddress3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress4", "currentAddress4Attr", "CurrentAddress4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress5", "currentAddress5Attr", "CurrentAddress5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress6", "currentAddress6Attr", "CurrentAddress6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress7", "currentAddress7Attr", "CurrentAddress7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentAddress8", "currentAddress8Attr", "CurrentAddress8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentHomePhone", "currentHomePhoneAttr", "CurrentHomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentWorkPhone", "currentWorkPhoneAttr", "CurrentWorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentMobilePhone", "currentMobilePhoneAttr", "CurrentMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentDisplayWorkPhone", "currentDisplayWorkPhoneAttr", "CurrentDisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CurrentDisplayMobilePhone", "currentDisplayMobilePhoneAttr", "CurrentDisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostMyDetailsChangeRequestsRec.init();
return PostMyDetailsChangeRequestsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostMyDetailsChangeRequestsRec = PostMyDetailsChangeRequestsRec;

});
define("ContactBase_IS.model$VisibilityPreferenceMemberRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferenceMemberRec = (function (_super) {
__extends(VisibilityPreferenceMemberRec, _super);
function VisibilityPreferenceMemberRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferenceMemberRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHomePhone", "displayHomePhoneAttr", "DisplayHomePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnder21", "isUnder21Attr", "IsUnder21", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferenceMemberRec.init();
return VisibilityPreferenceMemberRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferenceMemberRec = VisibilityPreferenceMemberRec;

});
define("ContactBase_IS.model$EmailResultRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var EmailResultRec = (function (_super) {
__extends(EmailResultRec, _super);
function EmailResultRec(defaults) {
_super.apply(this, arguments);
}
EmailResultRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EmailResultRec.init();
return EmailResultRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.EmailResultRec = EmailResultRec;

});
define("ContactBase_IS.model$EmailResultList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$EmailResultRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var EmailResultList = (function (_super) {
__extends(EmailResultList, _super);
function EmailResultList(defaults) {
_super.apply(this, arguments);
}
EmailResultList.itemType = ContactBase_ISModel.EmailResultRec;
return EmailResultList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.EmailResultList = EmailResultList;

});
define("ContactBase_IS.model$GetEmailSuggestionResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$EmailResultList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetEmailSuggestionResponseRec = (function (_super) {
__extends(GetEmailSuggestionResponseRec, _super);
function GetEmailSuggestionResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEmailSuggestionResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.EmailResultList());
}, true, ContactBase_ISModel.EmailResultList)
].concat(_super.attributesToDeclare.call(this));
};
GetEmailSuggestionResponseRec.init();
return GetEmailSuggestionResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetEmailSuggestionResponseRec = GetEmailSuggestionResponseRec;

});
define("ContactBase_IS.model$GetUsersInRoleResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersInRoleResponseRec = (function (_super) {
__extends(GetUsersInRoleResponseRec, _super);
function GetUsersInRoleResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUsersInRoleResponseRec.attributesToDeclare = function () {
return [
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetUsersInRoleResponseRec.init();
return GetUsersInRoleResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUsersInRoleResponseRec = GetUsersInRoleResponseRec;

});
define("ContactBase_IS.model$GetSearchNameWithSubdiviosnIdResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSearchNameWithSubdiviosnIdResponseRec = (function (_super) {
__extends(GetSearchNameWithSubdiviosnIdResponseRec, _super);
function GetSearchNameWithSubdiviosnIdResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSearchNameWithSubdiviosnIdResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "firstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "lastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionId", "subdivisionIdAttr", "subdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FullName", "fullNameAttr", "fullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "dateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSearchNameWithSubdiviosnIdResponseRec.init();
return GetSearchNameWithSubdiviosnIdResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSearchNameWithSubdiviosnIdResponseRec = GetSearchNameWithSubdiviosnIdResponseRec;

});
define("ContactBase_IS.model$ClaimRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ClaimRec = (function (_super) {
__extends(ClaimRec, _super);
function ClaimRec(defaults) {
_super.apply(this, arguments);
}
ClaimRec.attributesToDeclare = function () {
return [
this.attr("Attribute1", "attribute1Attr", "1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute2", "attribute2Attr", "2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute3", "attribute3Attr", "3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute4", "attribute4Attr", "4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute5", "attribute5Attr", "5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute6", "attribute6Attr", "6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute7", "attribute7Attr", "7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute8", "attribute8Attr", "8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute9", "attribute9Attr", "9", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute10", "attribute10Attr", "10", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute11", "attribute11Attr", "11", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute12", "attribute12Attr", "12", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute13", "attribute13Attr", "13", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attribute14", "attribute14Attr", "14", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ClaimRec.init();
return ClaimRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ClaimRec = ClaimRec;

});
define("ContactBase_IS.model$GetApplicationRoleStatRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ClaimRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetApplicationRoleStatRec = (function (_super) {
__extends(GetApplicationRoleStatRec, _super);
function GetApplicationRoleStatRec(defaults) {
_super.apply(this, arguments);
}
GetApplicationRoleStatRec.attributesToDeclare = function () {
return [
this.attr("RoleId", "roleIdAttr", "RoleId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Claims", "claimsAttr", "Claims", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ClaimRec());
}, true, ContactBase_ISModel.ClaimRec), 
this.attr("ClaimFormatName", "claimFormatNameAttr", "ClaimFormatName", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ClaimRec());
}, true, ContactBase_ISModel.ClaimRec), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumberOfUserInRole", "numberOfUserInRoleAttr", "NumberOfUserInRole", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetApplicationRoleStatRec.init();
return GetApplicationRoleStatRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetApplicationRoleStatRec = GetApplicationRoleStatRec;

});
define("ContactBase_IS.model$LocalityHouseholdsResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRec = (function (_super) {
__extends(LocalityHouseholdsResultItemRec, _super);
function LocalityHouseholdsResultItemRec(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRec.attributesToDeclare = function () {
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
LocalityHouseholdsResultItemRec.init();
return LocalityHouseholdsResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LocalityHouseholdsResultItemRec = LocalityHouseholdsResultItemRec;

});
define("ContactBase_IS.model$LocalityHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LocalityHouseholdsResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemList = (function (_super) {
__extends(LocalityHouseholdsResultItemList, _super);
function LocalityHouseholdsResultItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemList.itemType = ContactBase_ISModel.LocalityHouseholdsResultItemRec;
return LocalityHouseholdsResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.LocalityHouseholdsResultItemList = LocalityHouseholdsResultItemList;

});
define("ContactBase_IS.model$GetLocalityHouseholdsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LocalityHouseholdsResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetLocalityHouseholdsResponseRec = (function (_super) {
__extends(GetLocalityHouseholdsResponseRec, _super);
function GetLocalityHouseholdsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetLocalityHouseholdsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityHouseholdsResultItemList());
}, true, ContactBase_ISModel.LocalityHouseholdsResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalityHouseholdsResponseRec.init();
return GetLocalityHouseholdsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetLocalityHouseholdsResponseRec = GetLocalityHouseholdsResponseRec;

});
define("ContactBase_IS.model$UpdateFeedItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$SubdivisionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UpdateFeedItemRec = (function (_super) {
__extends(UpdateFeedItemRec, _super);
function UpdateFeedItemRec(defaults) {
_super.apply(this, arguments);
}
UpdateFeedItemRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Date", "dateAttr", "Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Gender", "genderAttr", "Gender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpdateFeedItemRec.init();
return UpdateFeedItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UpdateFeedItemRec = UpdateFeedItemRec;

});
define("ContactBase_IS.model$PhotoRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PhotoRec = (function (_super) {
__extends(PhotoRec, _super);
function PhotoRec(defaults) {
_super.apply(this, arguments);
}
PhotoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL720", "signedURL720Attr", "SignedURL720", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL340", "signedURL340Attr", "SignedURL340", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("URL720", "uRL720Attr", "URL720", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("URL340", "uRL340Attr", "URL340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("PublishedOn", "publishedOnAttr", "PublishedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedUser", "lastUpdatedUserAttr", "LastUpdatedUser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhotoRec.init();
return PhotoRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PhotoRec = PhotoRec;

});
define("ContactBase_IS.model$FamilyMemberFormattedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$FamilyMemberFormattedRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedList = (function (_super) {
__extends(FamilyMemberFormattedList, _super);
function FamilyMemberFormattedList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedList.itemType = ContactBase_ISModel.FamilyMemberFormattedRec;
return FamilyMemberFormattedList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.FamilyMemberFormattedList = FamilyMemberFormattedList;

});
define("ContactBase_IS.model$GetHouseholds_ConnectResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubdivisionExtendedRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$PhotoRec", "ContactBase_IS.model$FamilyMemberFormattedRec", "ContactBase_IS.model$FamilyMemberFormattedList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholds_ConnectResponseRec = (function (_super) {
__extends(GetHouseholds_ConnectResponseRec, _super);
function GetHouseholds_ConnectResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholds_ConnectResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberNames", "memberNamesAttr", "MemberNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Uselatlong", "uselatlongAttr", "Uselatlong", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionExtendedRec());
}, true, ContactBase_ISModel.SubdivisionExtendedRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoRec());
}, true, ContactBase_ISModel.PhotoRec), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedRec), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedRec), 
this.attr("HouseholdChildren", "householdChildrenAttr", "HouseholdChildren", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedList());
}, true, ContactBase_ISModel.FamilyMemberFormattedList), 
this.attr("NonHouseholdChildren", "nonHouseholdChildrenAttr", "NonHouseholdChildren", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedList());
}, true, ContactBase_ISModel.FamilyMemberFormattedList), 
this.attr("HouseholdMembers", "householdMembersAttr", "HouseholdMembers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedList());
}, true, ContactBase_ISModel.FamilyMemberFormattedList), 
this.attr("NonHouseholdMembers", "nonHouseholdMembersAttr", "NonHouseholdMembers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedList());
}, true, ContactBase_ISModel.FamilyMemberFormattedList), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NoData", "noDataAttr", "NoData", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholds_ConnectResponseRec.init();
return GetHouseholds_ConnectResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholds_ConnectResponseRec = GetHouseholds_ConnectResponseRec;

});
define("ContactBase_IS.model$GetInterchanges_ConnectResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchanges_ConnectResultItemRec = (function (_super) {
__extends(GetInterchanges_ConnectResultItemRec, _super);
function GetInterchanges_ConnectResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetInterchanges_ConnectResultItemRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocalityId", "interchangeLocalityIdAttr", "InterchangeLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InterchangeLocalityName", "interchangeLocalityNameAttr", "InterchangeLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Distance", "distanceAttr", "Distance", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocality", "interchangeLocalityAttr", "InterchangeLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
GetInterchanges_ConnectResultItemRec.init();
return GetInterchanges_ConnectResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetInterchanges_ConnectResultItemRec = GetInterchanges_ConnectResultItemRec;

});
define("ContactBase_IS.model$GetInterchanges_ConnectResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetInterchanges_ConnectResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchanges_ConnectResultItemList = (function (_super) {
__extends(GetInterchanges_ConnectResultItemList, _super);
function GetInterchanges_ConnectResultItemList(defaults) {
_super.apply(this, arguments);
}
GetInterchanges_ConnectResultItemList.itemType = ContactBase_ISModel.GetInterchanges_ConnectResultItemRec;
return GetInterchanges_ConnectResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetInterchanges_ConnectResultItemList = GetInterchanges_ConnectResultItemList;

});
define("ContactBase_IS.model$GetInterchanges_ConnectResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetInterchanges_ConnectResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchanges_ConnectResponseRec = (function (_super) {
__extends(GetInterchanges_ConnectResponseRec, _super);
function GetInterchanges_ConnectResponseRec(defaults) {
_super.apply(this, arguments);
}
GetInterchanges_ConnectResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetInterchanges_ConnectResultItemList());
}, true, ContactBase_ISModel.GetInterchanges_ConnectResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetInterchanges_ConnectResponseRec.init();
return GetInterchanges_ConnectResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetInterchanges_ConnectResponseRec = GetInterchanges_ConnectResponseRec;

});
define("ContactBase_IS.model$GetAgeGroupPlansResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAgeGroupPlansResponseRec = (function (_super) {
__extends(GetAgeGroupPlansResponseRec, _super);
function GetAgeGroupPlansResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAgeGroupPlansResponseRec.attributesToDeclare = function () {
return [
this.attr("AgeGroup", "ageGroupAttr", "AgeGroup", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdvancedPlusPlan", "advancedPlusPlanAttr", "AdvancedPlusPlan", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FreePlan", "freePlanAttr", "FreePlan", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GlobalPlan", "globalPlanAttr", "GlobalPlan", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RegionalPlan", "regionalPlanAttr", "RegionalPlan", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAgeGroupPlansResponseRec.init();
return GetAgeGroupPlansResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAgeGroupPlansResponseRec = GetAgeGroupPlansResponseRec;

});
define("ContactBase_IS.model$PostImagesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostImagesResponseRec = (function (_super) {
__extends(PostImagesResponseRec, _super);
function PostImagesResponseRec(defaults) {
_super.apply(this, arguments);
}
PostImagesResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ImageURL", "imageURLAttr", "imageURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostImagesResponseRec.init();
return PostImagesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostImagesResponseRec = PostImagesResponseRec;

});
define("ContactBase_IS.model$UpdateFeedItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$UpdateFeedItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UpdateFeedItemList = (function (_super) {
__extends(UpdateFeedItemList, _super);
function UpdateFeedItemList(defaults) {
_super.apply(this, arguments);
}
UpdateFeedItemList.itemType = ContactBase_ISModel.UpdateFeedItemRec;
return UpdateFeedItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.UpdateFeedItemList = UpdateFeedItemList;

});
define("ContactBase_IS.model$GetUpdateFeedResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$UpdateFeedItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUpdateFeedResponseRec = (function (_super) {
__extends(GetUpdateFeedResponseRec, _super);
function GetUpdateFeedResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUpdateFeedResponseRec.attributesToDeclare = function () {
return [
this.attr("TotalMembers", "totalMembersAttr", "TotalMembers", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TotalHouseholds", "totalHouseholdsAttr", "TotalHouseholds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Deaths", "deathsAttr", "Deaths", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.UpdateFeedItemList());
}, true, ContactBase_ISModel.UpdateFeedItemList), 
this.attr("Births", "birthsAttr", "Births", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.UpdateFeedItemList());
}, true, ContactBase_ISModel.UpdateFeedItemList), 
this.attr("Marriages", "marriagesAttr", "Marriages", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.UpdateFeedItemList());
}, true, ContactBase_ISModel.UpdateFeedItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetUpdateFeedResponseRec.init();
return GetUpdateFeedResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUpdateFeedResponseRec = GetUpdateFeedResponseRec;

});
define("ContactBase_IS.model$UserInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserInfoRec = (function (_super) {
__extends(UserInfoRec, _super);
function UserInfoRec(defaults) {
_super.apply(this, arguments);
}
UserInfoRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive_User", "isActive_UserAttr", "IsActive_User", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserInfoRec.init();
return UserInfoRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UserInfoRec = UserInfoRec;

});
define("ContactBase_IS.model$PermissionsList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PermissionsRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PermissionsList = (function (_super) {
__extends(PermissionsList, _super);
function PermissionsList(defaults) {
_super.apply(this, arguments);
}
PermissionsList.itemType = ContactBase_ISModel.PermissionsRec;
return PermissionsList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.PermissionsList = PermissionsList;

});
define("ContactBase_IS.model$GetCurrentUserResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubdivisionRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$DefaultLocalityRec", "ContactBase_IS.model$MemberRec", "ContactBase_IS.model$RolesList", "ContactBase_IS.model$PermissionsList", "ContactBase_IS.model$SubscriptionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetCurrentUserResponseRec = (function (_super) {
__extends(GetCurrentUserResponseRec, _super);
function GetCurrentUserResponseRec(defaults) {
_super.apply(this, arguments);
}
GetCurrentUserResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberID", "memberIDAttr", "MemberID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Uselatlong", "uselatlongAttr", "Uselatlong", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("DefaultLocality", "defaultLocalityAttr", "DefaultLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultLocalityRec());
}, true, ContactBase_ISModel.DefaultLocalityRec), 
this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberRec());
}, true, ContactBase_ISModel.MemberRec), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EmailConfirmed", "emailConfirmedAttr", "EmailConfirmed", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.RolesList());
}, true, ContactBase_ISModel.RolesList), 
this.attr("Claims", "claimsAttr", "Claims", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PermissionsList());
}, true, ContactBase_ISModel.PermissionsList), 
this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRec());
}, true, ContactBase_ISModel.SubscriptionRec), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetCurrentUserResponseRec.init();
return GetCurrentUserResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetCurrentUserResponseRec = GetCurrentUserResponseRec;

});
define("ContactBase_IS.model$GetSubscriptionReportSummaryResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubscriptionReportSummaryResponseRec = (function (_super) {
__extends(GetSubscriptionReportSummaryResponseRec, _super);
function GetSubscriptionReportSummaryResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubscriptionReportSummaryResponseRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PeopleNumbers", "peopleNumbersAttr", "PeopleNumbers", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HouseholdNumbers", "householdNumbersAttr", "HouseholdNumbers", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Target", "targetAttr", "Target", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GlobalPlan", "globalPlanAttr", "GlobalPlan", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RegionalPlan", "regionalPlanAttr", "RegionalPlan", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("FreePlan", "freePlanAttr", "FreePlan", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdvancePlusPlan", "advancePlusPlanAttr", "AdvancePlusPlan", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TotalSubscriptions", "totalSubscriptionsAttr", "TotalSubscriptions", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NonPaid", "nonPaidAttr", "NonPaid", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("VarianceToTarget", "varianceToTargetAttr", "VarianceToTarget", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSubscriptionReportSummaryResponseRec.init();
return GetSubscriptionReportSummaryResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubscriptionReportSummaryResponseRec = GetSubscriptionReportSummaryResponseRec;

});
define("ContactBase_IS.model$SubscriptionUpdateRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionUpdateRec = (function (_super) {
__extends(SubscriptionUpdateRec, _super);
function SubscriptionUpdateRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionUpdateRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionUpdateRec.init();
return SubscriptionUpdateRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionUpdateRec = SubscriptionUpdateRec;

});
define("ContactBase_IS.model$PendingSubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PendingSubscriptionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PendingSubscriptionList = (function (_super) {
__extends(PendingSubscriptionList, _super);
function PendingSubscriptionList(defaults) {
_super.apply(this, arguments);
}
PendingSubscriptionList.itemType = ContactBase_ISModel.PendingSubscriptionRec;
return PendingSubscriptionList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.PendingSubscriptionList = PendingSubscriptionList;

});
define("ContactBase_IS.model$PendingSubscriptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PendingSubscriptionList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PendingSubscriptionsRec = (function (_super) {
__extends(PendingSubscriptionsRec, _super);
function PendingSubscriptionsRec(defaults) {
_super.apply(this, arguments);
}
PendingSubscriptionsRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PendingSubscriptionList());
}, true, ContactBase_ISModel.PendingSubscriptionList)
].concat(_super.attributesToDeclare.call(this));
};
PendingSubscriptionsRec.init();
return PendingSubscriptionsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PendingSubscriptionsRec = PendingSubscriptionsRec;

});
define("ContactBase_IS.model$PostUpdateRolesRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostUpdateRolesRequestRec = (function (_super) {
__extends(PostUpdateRolesRequestRec, _super);
function PostUpdateRolesRequestRec(defaults) {
_super.apply(this, arguments);
}
PostUpdateRolesRequestRec.attributesToDeclare = function () {
return [
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
PostUpdateRolesRequestRec.fromStructure = function (str) {
return new PostUpdateRolesRequestRec(new PostUpdateRolesRequestRec.RecordClass({
rolesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostUpdateRolesRequestRec.init();
return PostUpdateRolesRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostUpdateRolesRequestRec = PostUpdateRolesRequestRec;

});
define("ContactBase_IS.model$GetDashboardNewsubsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetDashboardNewsubsResponseRec = (function (_super) {
__extends(GetDashboardNewsubsResponseRec, _super);
function GetDashboardNewsubsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetDashboardNewsubsResponseRec.attributesToDeclare = function () {
return [
this.attr("NumberOfSubs", "numberOfSubsAttr", "NumberOfSubs", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Date", "dateAttr", "Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetDashboardNewsubsResponseRec.init();
return GetDashboardNewsubsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetDashboardNewsubsResponseRec = GetDashboardNewsubsResponseRec;

});
define("ContactBase_IS.model$DefaultCountry2List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$DefaultCountry2Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DefaultCountry2List = (function (_super) {
__extends(DefaultCountry2List, _super);
function DefaultCountry2List(defaults) {
_super.apply(this, arguments);
}
DefaultCountry2List.itemType = ContactBase_ISModel.DefaultCountry2Rec;
return DefaultCountry2List;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.DefaultCountry2List = DefaultCountry2List;

});
define("ContactBase_IS.model$GetCountries2ResponseListRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$DefaultCountry2List"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetCountries2ResponseListRec = (function (_super) {
__extends(GetCountries2ResponseListRec, _super);
function GetCountries2ResponseListRec(defaults) {
_super.apply(this, arguments);
}
GetCountries2ResponseListRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountry2List());
}, true, ContactBase_ISModel.DefaultCountry2List)
].concat(_super.attributesToDeclare.call(this));
};
GetCountries2ResponseListRec.init();
return GetCountries2ResponseListRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetCountries2ResponseListRec = GetCountries2ResponseListRec;

});
define("ContactBase_IS.model$VisibilityPreferencesSingleMemberRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferencesSingleMemberRec = (function (_super) {
__extends(VisibilityPreferencesSingleMemberRec, _super);
function VisibilityPreferencesSingleMemberRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferencesSingleMemberRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isHouseholder", "isHouseholderAttr", "isHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHomePhone", "displayHomePhoneAttr", "DisplayHomePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnder21", "isUnder21Attr", "IsUnder21", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferencesSingleMemberRec.init();
return VisibilityPreferencesSingleMemberRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferencesSingleMemberRec = VisibilityPreferencesSingleMemberRec;

});
define("ContactBase_IS.model$MemberList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$MemberRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var MemberList = (function (_super) {
__extends(MemberList, _super);
function MemberList(defaults) {
_super.apply(this, arguments);
}
MemberList.itemType = ContactBase_ISModel.MemberRec;
return MemberList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.MemberList = MemberList;

});
define("ContactBase_IS.model$GetMembersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$MemberList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetMembersResponseRec = (function (_super) {
__extends(GetMembersResponseRec, _super);
function GetMembersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMembersResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberList());
}, true, ContactBase_ISModel.MemberList)
].concat(_super.attributesToDeclare.call(this));
};
GetMembersResponseRec.init();
return GetMembersResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetMembersResponseRec = GetMembersResponseRec;

});
define("ContactBase_IS.model$NonSubscribersByLocalityRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var NonSubscribersByLocalityRec = (function (_super) {
__extends(NonSubscribersByLocalityRec, _super);
function NonSubscribersByLocalityRec(defaults) {
_super.apply(this, arguments);
}
NonSubscribersByLocalityRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Counter", "counterAttr", "Counter", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NonSubscribersByLocalityRec.init();
return NonSubscribersByLocalityRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.NonSubscribersByLocalityRec = NonSubscribersByLocalityRec;

});
define("ContactBase_IS.model$GetSubdivisionsResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsResultItemRec = (function (_super) {
__extends(GetSubdivisionsResultItemRec, _super);
function GetSubdivisionsResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsResultItemRec.attributesToDeclare = function () {
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
this.attr("BrothersCount", "brothersCountAttr", "BrothersCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SistersCount", "sistersCountAttr", "SistersCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionsResultItemRec.init();
return GetSubdivisionsResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionsResultItemRec = GetSubdivisionsResultItemRec;

});
define("ContactBase_IS.model$ElasticSearch_HouseholdRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_HouseholdRec = (function (_super) {
__extends(ElasticSearch_HouseholdRec, _super);
function ElasticSearch_HouseholdRec(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_HouseholdRec.attributesToDeclare = function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ElasticSearch_HouseholdRec.init();
return ElasticSearch_HouseholdRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ElasticSearch_HouseholdRec = ElasticSearch_HouseholdRec;

});
define("ContactBase_IS.model$GetVisibilityPreferencesRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetVisibilityPreferencesRequestRec = (function (_super) {
__extends(GetVisibilityPreferencesRequestRec, _super);
function GetVisibilityPreferencesRequestRec(defaults) {
_super.apply(this, arguments);
}
GetVisibilityPreferencesRequestRec.attributesToDeclare = function () {
return [
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkphone", "displayWorkphoneAttr", "DisplayWorkphone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayHomephone", "displayHomephoneAttr", "DisplayHomephone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SearchTerm", "searchTermAttr", "SearchTerm", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Page", "pageAttr", "Page", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ItemsPerPage", "itemsPerPageAttr", "ItemsPerPage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SortBy", "sortByAttr", "SortBy", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isDescending", "isDescendingAttr", "isDescending", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetVisibilityPreferencesRequestRec.init();
return GetVisibilityPreferencesRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetVisibilityPreferencesRequestRec = GetVisibilityPreferencesRequestRec;

});
define("ContactBase_IS.model$CDN3Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CDN3Rec = (function (_super) {
__extends(CDN3Rec, _super);
function CDN3Rec(defaults) {
_super.apply(this, arguments);
}
CDN3Rec.attributesToDeclare = function () {
return [
this.attr("Path", "pathAttr", "path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bucket", "bucketAttr", "bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CDN3Rec.init();
return CDN3Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CDN3Rec = CDN3Rec;

});
define("ContactBase_IS.model$GetDirectoryimagesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetDirectoryimagesResponseRec = (function (_super) {
__extends(GetDirectoryimagesResponseRec, _super);
function GetDirectoryimagesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetDirectoryimagesResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedUrl", "signedUrlAttr", "SignedUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetDirectoryimagesResponseRec.init();
return GetDirectoryimagesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetDirectoryimagesResponseRec = GetDirectoryimagesResponseRec;

});
define("ContactBase_IS.model$PostRemoveUserFromRoleRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostRemoveUserFromRoleRequestRec = (function (_super) {
__extends(PostRemoveUserFromRoleRequestRec, _super);
function PostRemoveUserFromRoleRequestRec(defaults) {
_super.apply(this, arguments);
}
PostRemoveUserFromRoleRequestRec.attributesToDeclare = function () {
return [
this.attr("RoleId", "roleIdAttr", "roleId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "username", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
PostRemoveUserFromRoleRequestRec.init();
return PostRemoveUserFromRoleRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostRemoveUserFromRoleRequestRec = PostRemoveUserFromRoleRequestRec;

});
define("ContactBase_IS.model$PostSubdivisionbyIdsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostSubdivisionbyIdsResponseRec = (function (_super) {
__extends(PostSubdivisionbyIdsResponseRec, _super);
function PostSubdivisionbyIdsResponseRec(defaults) {
_super.apply(this, arguments);
}
PostSubdivisionbyIdsResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHall", "mainHallAttr", "MainHall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BrotherCount", "brotherCountAttr", "BrotherCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SisterCount", "sisterCountAttr", "SisterCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("UseCoordinates", "useCoordinatesAttr", "UseCoordinates", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostSubdivisionbyIdsResponseRec.init();
return PostSubdivisionbyIdsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostSubdivisionbyIdsResponseRec = PostSubdivisionbyIdsResponseRec;

});
define("ContactBase_IS.model$GetUserClaimsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUserClaimsResponseRec = (function (_super) {
__extends(GetUserClaimsResponseRec, _super);
function GetUserClaimsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUserClaimsResponseRec.attributesToDeclare = function () {
return [
this.attr("ConnectClaimId", "connectClaimIdAttr", "ConnectClaimId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetUserClaimsResponseRec.init();
return GetUserClaimsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUserClaimsResponseRec = GetUserClaimsResponseRec;

});
define("ContactBase_IS.model$DirectoryAccessRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DirectoryAccessRec = (function (_super) {
__extends(DirectoryAccessRec, _super);
function DirectoryAccessRec(defaults) {
_super.apply(this, arguments);
}
DirectoryAccessRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryAccessRec.init();
return DirectoryAccessRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DirectoryAccessRec = DirectoryAccessRec;

});
define("ContactBase_IS.model$GetSubdivisionHouseholds2ResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CDN3Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholds2ResponseRec = (function (_super) {
__extends(GetSubdivisionHouseholds2ResponseRec, _super);
function GetSubdivisionHouseholds2ResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholds2ResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Family", "familyAttr", "family", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDN3Rec());
}, true, ContactBase_ISModel.CDN3Rec), 
this.attr("Photo340", "photo340Attr", "photo340", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDN3Rec());
}, true, ContactBase_ISModel.CDN3Rec), 
this.attr("Latitude", "latitudeAttr", "latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionHouseholds2ResponseRec.init();
return GetSubdivisionHouseholds2ResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionHouseholds2ResponseRec = GetSubdivisionHouseholds2ResponseRec;

});
define("ContactBase_IS.model$AcountDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$PartnerRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AcountDetailRec = (function (_super) {
__extends(AcountDetailRec, _super);
function AcountDetailRec(defaults) {
_super.apply(this, arguments);
}
AcountDetailRec.attributesToDeclare = function () {
return [
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserEmail", "userEmailAttr", "UserEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PartnerName", "partnerNameAttr", "PartnerName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AccessFailedCount", "accessFailedCountAttr", "AccessFailedCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("IconUrl", "iconUrlAttr", "IconUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EmailConfirmed", "emailConfirmedAttr", "EmailConfirmed", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("note", "noteAttr", "note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHidden", "isHiddenAttr", "IsHidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsTaken", "isTakenAttr", "IsTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ObjectId", "objectIdAttr", "ObjectId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("B2CUserName", "b2CUserNameAttr", "B2CUserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Partner", "partnerAttr", "Partner", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PartnerRec());
}, true, ContactBase_ISModel.PartnerRec), 
this.attr("SuspendReason", "suspendReasonAttr", "SuspendReason", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AcountDetailRec.init();
return AcountDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AcountDetailRec = AcountDetailRec;

});
define("ContactBase_IS.model$CDN2Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CDN2Rec = (function (_super) {
__extends(CDN2Rec, _super);
function CDN2Rec(defaults) {
_super.apply(this, arguments);
}
CDN2Rec.attributesToDeclare = function () {
return [
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPath", "signedPathAttr", "SignedPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CDN2Rec.init();
return CDN2Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CDN2Rec = CDN2Rec;

});
define("ContactBase_IS.model$ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CDN2Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ResultRec = (function (_super) {
__extends(ResultRec, _super);
function ResultRec(defaults) {
_super.apply(this, arguments);
}
ResultRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdID", "householdIDAttr", "HouseholdID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ChildrenNames", "childrenNamesAttr", "ChildrenNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo340", "photo340Attr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDN2Rec());
}, true, ContactBase_ISModel.CDN2Rec), 
this.attr("SearchMode", "searchModeAttr", "SearchMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResultRec.init();
return ResultRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ResultRec = ResultRec;

});
define("ContactBase_IS.model$IndividualRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ResultRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var IndividualRec = (function (_super) {
__extends(IndividualRec, _super);
function IndividualRec(defaults) {
_super.apply(this, arguments);
}
IndividualRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ResultRec());
}, true, ContactBase_ISModel.ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
IndividualRec.init();
return IndividualRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.IndividualRec = IndividualRec;

});
define("ContactBase_IS.model$ExtensionRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ExtensionRec = (function (_super) {
__extends(ExtensionRec, _super);
function ExtensionRec(defaults) {
_super.apply(this, arguments);
}
ExtensionRec.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessId", "communityBusinessIdAttr", "CommunityBusinessId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BusinessType", "businessTypeAttr", "BusinessType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionRec.init();
return ExtensionRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ExtensionRec = ExtensionRec;

});
define("ContactBase_IS.model$GetLocalitiesByCountryResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoRec", "ContactBase_IS.model$DefaultCountryRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetLocalitiesByCountryResultItemRec = (function (_super) {
__extends(GetLocalitiesByCountryResultItemRec, _super);
function GetLocalitiesByCountryResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetLocalitiesByCountryResultItemRec.attributesToDeclare = function () {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
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
this.attr("AddressForMap", "addressForMapAttr", "AddressForMap", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallLatitude", "mainHallLatitudeAttr", "MainHallLatitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MainHallLongitude", "mainHallLongitudeAttr", "MainHallLongitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalitiesByCountryResultItemRec.init();
return GetLocalitiesByCountryResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetLocalitiesByCountryResultItemRec = GetLocalitiesByCountryResultItemRec;

});
define("ContactBase_IS.model$PrimarySecondaryRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PrimarySecondaryRec = (function (_super) {
__extends(PrimarySecondaryRec, _super);
function PrimarySecondaryRec(defaults) {
_super.apply(this, arguments);
}
PrimarySecondaryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PrimarySecondaryRec.init();
return PrimarySecondaryRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PrimarySecondaryRec = PrimarySecondaryRec;

});
define("ContactBase_IS.model$SubscriptionItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionItemRec = (function (_super) {
__extends(SubscriptionItemRec, _super);
function SubscriptionItemRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionItemRec.attributesToDeclare = function () {
return [
this.attr("UserID", "userIDAttr", "UserID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionID", "subscriptionIDAttr", "SubscriptionID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionPaid", "subscriptionPaidAttr", "SubscriptionPaid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PS", "pSAttr", "PS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionNotes", "subscriptionNotesAttr", "SubscriptionNotes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ConnectSubscription", "connectSubscriptionAttr", "ConnectSubscription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRow", "subscriptionRowAttr", "SubscriptionRow", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubscriptionStartDate", "subscriptionStartDateAttr", "SubscriptionStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsActive_Subscription", "isActive_SubscriptionAttr", "isActive_Subscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("InvoiceID", "invoiceIDAttr", "InvoiceID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MagentoAccountID", "magentoAccountIDAttr", "MagentoAccountID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subscription_Region", "subscription_RegionAttr", "Subscription_Region", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionEndDate", "subscriptionEndDateAttr", "SubscriptionEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SubscriptionExpiresInDays", "subscriptionExpiresInDaysAttr", "SubscriptionExpiresInDays", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionItemRec.init();
return SubscriptionItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionItemRec = SubscriptionItemRec;

});
define("ContactBase_IS.model$GetAllLocalitiesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAllLocalitiesResponseRec = (function (_super) {
__extends(GetAllLocalitiesResponseRec, _super);
function GetAllLocalitiesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAllLocalitiesResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "countryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAllLocalitiesResponseRec.init();
return GetAllLocalitiesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAllLocalitiesResponseRec = GetAllLocalitiesResponseRec;

});
define("ContactBase_IS.model$UserLogRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserLogRec = (function (_super) {
__extends(UserLogRec, _super);
function UserLogRec(defaults) {
_super.apply(this, arguments);
}
UserLogRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventCategory", "eventCategoryAttr", "EventCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobileTimeStamp", "mobileTimeStampAttr", "MobileTimeStamp", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeStamp", "timeStampAttr", "TimeStamp", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DeviceName", "deviceNameAttr", "DeviceName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceOSVersion", "deviceOSVersionAttr", "DeviceOSVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceSDKVersion", "deviceSDKVersionAttr", "DeviceSDKVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceUniqueId", "deviceUniqueIdAttr", "DeviceUniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CorrelationID", "correlationIDAttr", "CorrelationID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserLogRec.init();
return UserLogRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UserLogRec = UserLogRec;

});
define("ContactBase_IS.model$LinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LinkItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LinkItemList = (function (_super) {
__extends(LinkItemList, _super);
function LinkItemList(defaults) {
_super.apply(this, arguments);
}
LinkItemList.itemType = ContactBase_ISModel.LinkItemRec;
return LinkItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.LinkItemList = LinkItemList;

});
define("ContactBase_IS.model$BusinessRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CDNRec", "ContactBase_IS.model$LinkItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BusinessRec = (function (_super) {
__extends(BusinessRec, _super);
function BusinessRec(defaults) {
_super.apply(this, arguments);
}
BusinessRec.attributesToDeclare = function () {
return [
this.attr("BusinessID", "businessIDAttr", "BusinessID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BusinessName", "businessNameAttr", "BusinessName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Servicing", "servicingAttr", "Servicing", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Aboutdetails", "aboutdetailsAttr", "About details", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Links", "linksAttr", "Links", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LinkItemList());
}, true, ContactBase_ISModel.LinkItemList)
].concat(_super.attributesToDeclare.call(this));
};
BusinessRec.init();
return BusinessRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.BusinessRec = BusinessRec;

});
define("ContactBase_IS.model$SubscriptionStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionStatusRec = (function (_super) {
__extends(SubscriptionStatusRec, _super);
function SubscriptionStatusRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApiAttributeValue", "apiAttributeValueAttr", "ApiAttributeValue", false, false, OS.DataTypes.DataTypes.Text, function () {
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
SubscriptionStatusRec.init();
return SubscriptionStatusRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionStatusRec = SubscriptionStatusRec;

});
define("ContactBase_IS.model$GetHouseholdCoordinatesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdCoordinatesResponseRec = (function (_super) {
__extends(GetHouseholdCoordinatesResponseRec, _super);
function GetHouseholdCoordinatesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdCoordinatesResponseRec.attributesToDeclare = function () {
return [
this.attr("Longitude", "longitudeAttr", "longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Latitude", "latitudeAttr", "latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("UseCoordinates", "useCoordinatesAttr", "useCoordinates", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdCoordinatesResponseRec.init();
return GetHouseholdCoordinatesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdCoordinatesResponseRec = GetHouseholdCoordinatesResponseRec;

});
define("ContactBase_IS.model$CommunityBusinessTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
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
ContactBase_ISModel.CommunityBusinessTypeRec = CommunityBusinessTypeRec;

});
define("ContactBase_IS.model$PostImagesRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ImagesByObjectTypeRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostImagesRequestRec = (function (_super) {
__extends(PostImagesRequestRec, _super);
function PostImagesRequestRec(defaults) {
_super.apply(this, arguments);
}
PostImagesRequestRec.attributesToDeclare = function () {
return [
this.attr("ImageRequest", "imageRequestAttr", "imageRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ImagesByObjectTypeRec());
}, true, ContactBase_ISModel.ImagesByObjectTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
PostImagesRequestRec.fromStructure = function (str) {
return new PostImagesRequestRec(new PostImagesRequestRec.RecordClass({
imageRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostImagesRequestRec.init();
return PostImagesRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostImagesRequestRec = PostImagesRequestRec;

});
define("ContactBase_IS.model$ContactBaseCountryRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ContactBaseCountryRec = (function (_super) {
__extends(ContactBaseCountryRec, _super);
function ContactBaseCountryRec(defaults) {
_super.apply(this, arguments);
}
ContactBaseCountryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactBaseCountryRec.init();
return ContactBaseCountryRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ContactBaseCountryRec = ContactBaseCountryRec;

});
define("ContactBase_IS.model$ImagePathsItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ImagePathsItemRec = (function (_super) {
__extends(ImagePathsItemRec, _super);
function ImagePathsItemRec(defaults) {
_super.apply(this, arguments);
}
ImagePathsItemRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegionId", "subscriptionRegionIdAttr", "SubscriptionRegionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImagePathsItemRec.init();
return ImagePathsItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ImagePathsItemRec = ImagePathsItemRec;

});
define("ContactBase_IS.model$GetSubdivisionHouseholdsResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoUrlRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholdsResultItemRec = (function (_super) {
__extends(GetSubdivisionHouseholdsResultItemRec, _super);
function GetSubdivisionHouseholdsResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsResultItemRec.attributesToDeclare = function () {
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
}, true, ContactBase_ISModel.PhotoUrlRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionHouseholdsResultItemRec.init();
return GetSubdivisionHouseholdsResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionHouseholdsResultItemRec = GetSubdivisionHouseholdsResultItemRec;

});
define("ContactBase_IS.model$GetSubdivisionHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSubdivisionHouseholdsResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholdsResultItemList = (function (_super) {
__extends(GetSubdivisionHouseholdsResultItemList, _super);
function GetSubdivisionHouseholdsResultItemList(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsResultItemList.itemType = ContactBase_ISModel.GetSubdivisionHouseholdsResultItemRec;
return GetSubdivisionHouseholdsResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetSubdivisionHouseholdsResultItemList = GetSubdivisionHouseholdsResultItemList;

});
define("ContactBase_IS.model$GetSubdivisionHouseholdsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSubdivisionHouseholdsResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionHouseholdsResponseRec = (function (_super) {
__extends(GetSubdivisionHouseholdsResponseRec, _super);
function GetSubdivisionHouseholdsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSubdivisionHouseholdsResultItemList());
}, true, ContactBase_ISModel.GetSubdivisionHouseholdsResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionHouseholdsResponseRec.init();
return GetSubdivisionHouseholdsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionHouseholdsResponseRec = GetSubdivisionHouseholdsResponseRec;

});
define("ContactBase_IS.model$SubSettingNodeItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubSettingNodeItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubSettingNodeItemList = (function (_super) {
__extends(SubSettingNodeItemList, _super);
function SubSettingNodeItemList(defaults) {
_super.apply(this, arguments);
}
SubSettingNodeItemList.itemType = ContactBase_ISModel.SubSettingNodeItemRec;
return SubSettingNodeItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubSettingNodeItemList = SubSettingNodeItemList;

});
define("ContactBase_IS.model$GetDomainPermissionSettingResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubSettingNodeItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetDomainPermissionSettingResponseRec = (function (_super) {
__extends(GetDomainPermissionSettingResponseRec, _super);
function GetDomainPermissionSettingResponseRec(defaults) {
_super.apply(this, arguments);
}
GetDomainPermissionSettingResponseRec.attributesToDeclare = function () {
return [
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Selectable", "selectableAttr", "Selectable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubSettingNodes", "subSettingNodesAttr", "SubSettingNodes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubSettingNodeItemList());
}, true, ContactBase_ISModel.SubSettingNodeItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetDomainPermissionSettingResponseRec.init();
return GetDomainPermissionSettingResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetDomainPermissionSettingResponseRec = GetDomainPermissionSettingResponseRec;

});
define("ContactBase_IS.model$IntegrationusersRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var IntegrationusersRec = (function (_super) {
__extends(IntegrationusersRec, _super);
function IntegrationusersRec(defaults) {
_super.apply(this, arguments);
}
IntegrationusersRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegrationusersRec.init();
return IntegrationusersRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.IntegrationusersRec = IntegrationusersRec;

});
define("ContactBase_IS.model$SubscriptionIntegrationConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionRegionRec", "ContactBase_IS.model$IntegrationusersRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionIntegrationConfigurationRec = (function (_super) {
__extends(SubscriptionIntegrationConfigurationRec, _super);
function SubscriptionIntegrationConfigurationRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionIntegrationConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProductCode", "productCodeAttr", "ProductCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegionID", "subscriptionRegionIDAttr", "SubscriptionRegionID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegrationUserID", "integrationUserIDAttr", "IntegrationUserID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SystemType", "systemTypeAttr", "SystemType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedUser", "lastUpdatedUserAttr", "LastUpdatedUser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegion", "subscriptionRegionAttr", "SubscriptionRegion", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRegionRec());
}, true, ContactBase_ISModel.SubscriptionRegionRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.IntegrationusersRec());
}, true, ContactBase_ISModel.IntegrationusersRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionIntegrationConfigurationRec.init();
return SubscriptionIntegrationConfigurationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionIntegrationConfigurationRec = SubscriptionIntegrationConfigurationRec;

});
define("ContactBase_IS.model$SubscriptionIntegrationConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionIntegrationConfigurationRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionIntegrationConfigurationList = (function (_super) {
__extends(SubscriptionIntegrationConfigurationList, _super);
function SubscriptionIntegrationConfigurationList(defaults) {
_super.apply(this, arguments);
}
SubscriptionIntegrationConfigurationList.itemType = ContactBase_ISModel.SubscriptionIntegrationConfigurationRec;
return SubscriptionIntegrationConfigurationList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubscriptionIntegrationConfigurationList = SubscriptionIntegrationConfigurationList;

});
define("ContactBase_IS.model$GetSubscriptionIntegrationConfigurationsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionIntegrationConfigurationList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubscriptionIntegrationConfigurationsResponseRec = (function (_super) {
__extends(GetSubscriptionIntegrationConfigurationsResponseRec, _super);
function GetSubscriptionIntegrationConfigurationsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubscriptionIntegrationConfigurationsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "@odata.count", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "value", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionIntegrationConfigurationList());
}, true, ContactBase_ISModel.SubscriptionIntegrationConfigurationList)
].concat(_super.attributesToDeclare.call(this));
};
GetSubscriptionIntegrationConfigurationsResponseRec.init();
return GetSubscriptionIntegrationConfigurationsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubscriptionIntegrationConfigurationsResponseRec = GetSubscriptionIntegrationConfigurationsResponseRec;

});
define("ContactBase_IS.model$SynchSubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchSubdivisionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SynchSubdivisionList = (function (_super) {
__extends(SynchSubdivisionList, _super);
function SynchSubdivisionList(defaults) {
_super.apply(this, arguments);
}
SynchSubdivisionList.itemType = ContactBase_ISModel.SynchSubdivisionRec;
return SynchSubdivisionList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SynchSubdivisionList = SynchSubdivisionList;

});
define("ContactBase_IS.model$GetAllSubdivisionsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SynchSubdivisionList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetAllSubdivisionsResponseRec = (function (_super) {
__extends(GetAllSubdivisionsResponseRec, _super);
function GetAllSubdivisionsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAllSubdivisionsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SynchSubdivisionList());
}, true, ContactBase_ISModel.SynchSubdivisionList)
].concat(_super.attributesToDeclare.call(this));
};
GetAllSubdivisionsResponseRec.init();
return GetAllSubdivisionsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetAllSubdivisionsResponseRec = GetAllSubdivisionsResponseRec;

});
define("ContactBase_IS.model$ODataFieldsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ODataFieldsRec = (function (_super) {
__extends(ODataFieldsRec, _super);
function ODataFieldsRec(defaults) {
_super.apply(this, arguments);
}
ODataFieldsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ODataFieldsRec.init();
return ODataFieldsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ODataFieldsRec = ODataFieldsRec;

});
define("ContactBase_IS.model$GetContactdetailsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetContactdetailsResponseRec = (function (_super) {
__extends(GetContactdetailsResponseRec, _super);
function GetContactdetailsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetContactdetailsResponseRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "countryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "localityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "localityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HomePhone", "homePhoneAttr", "homePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "workPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "mobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "cdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "cdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnSize", "cdnSizeAttr", "cdnSize", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnType", "cdnTypeAttr", "cdnType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderId", "householderIdAttr", "householderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "memberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "countryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetContactdetailsResponseRec.init();
return GetContactdetailsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetContactdetailsResponseRec = GetContactdetailsResponseRec;

});
define("ContactBase_IS.model$ChangeStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ChangeStatusRec = (function (_super) {
__extends(ChangeStatusRec, _super);
function ChangeStatusRec(defaults) {
_super.apply(this, arguments);
}
ChangeStatusRec.attributesToDeclare = function () {
return [
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChangeStatusRec.fromStructure = function (str) {
return new ChangeStatusRec(new ChangeStatusRec.RecordClass({
statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChangeStatusRec.init();
return ChangeStatusRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ChangeStatusRec = ChangeStatusRec;

});
define("ContactBase_IS.model$AdvancedSearch_SearchModeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_SearchModeRec = (function (_super) {
__extends(AdvancedSearch_SearchModeRec, _super);
function AdvancedSearch_SearchModeRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_SearchModeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_SearchModeRec.fromStructure = function (str) {
return new AdvancedSearch_SearchModeRec(new AdvancedSearch_SearchModeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_SearchModeRec.init();
return AdvancedSearch_SearchModeRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearch_SearchModeRec = AdvancedSearch_SearchModeRec;

});
define("ContactBase_IS.model$Member2Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var Member2Rec = (function (_super) {
__extends(Member2Rec, _super);
function Member2Rec(defaults) {
_super.apply(this, arguments);
}
Member2Rec.attributesToDeclare = function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Member2Rec.init();
return Member2Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.Member2Rec = Member2Rec;

});
define("ContactBase_IS.model$GetSignURLResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSignURLResponseRec = (function (_super) {
__extends(GetSignURLResponseRec, _super);
function GetSignURLResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSignURLResponseRec.attributesToDeclare = function () {
return [
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSignURLResponseRec.fromStructure = function (str) {
return new GetSignURLResponseRec(new GetSignURLResponseRec.RecordClass({
signedURLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSignURLResponseRec.init();
return GetSignURLResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSignURLResponseRec = GetSignURLResponseRec;

});
define("ContactBase_IS.model$FamilyMemberFormattedDeceasedRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CDNRec", "ContactBase_IS.model$FamilyMemberFormattedDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDeceasedRec = (function (_super) {
__extends(FamilyMemberFormattedDeceasedRec, _super);
function FamilyMemberFormattedDeceasedRec(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDeceasedRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderID", "householderIDAttr", "HouseholderID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("IsHidden", "isHiddenAttr", "IsHidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsTaken", "isTakenAttr", "isTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "ParsedDateOfBirth", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UnparsedDateOfBirth", "unparsedDateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "ParsedDeceasedDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UnparsedDeceasedDate", "unparsedDeceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdNavigationFlag", "householdNavigationFlagAttr", "HouseholdNavigationFlag", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Details", "detailsAttr", "Details", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDetailList());
}, true, ContactBase_ISModel.FamilyMemberFormattedDetailList)
].concat(_super.attributesToDeclare.call(this));
};
FamilyMemberFormattedDeceasedRec.init();
return FamilyMemberFormattedDeceasedRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.FamilyMemberFormattedDeceasedRec = FamilyMemberFormattedDeceasedRec;

});
define("ContactBase_IS.model$GetLocalityStatisticsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRec = (function (_super) {
__extends(GetLocalityStatisticsResponseRec, _super);
function GetLocalityStatisticsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumHouseholders", "numHouseholdersAttr", "NumHouseholders", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NumMembers", "numMembersAttr", "NumMembers", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalityStatisticsResponseRec.init();
return GetLocalityStatisticsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetLocalityStatisticsResponseRec = GetLocalityStatisticsResponseRec;

});
define("ContactBase_IS.model$ConnectAdminsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ConnectAdminsRec = (function (_super) {
__extends(ConnectAdminsRec, _super);
function ConnectAdminsRec(defaults) {
_super.apply(this, arguments);
}
ConnectAdminsRec.attributesToDeclare = function () {
return [
this.attr("GetConnectAdminsResponse", "getConnectAdminsResponseAttr", "__singleArrayAttribute", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ConnectAdminsRec.fromStructure = function (str) {
return new ConnectAdminsRec(new ConnectAdminsRec.RecordClass({
getConnectAdminsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConnectAdminsRec.init();
return ConnectAdminsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ConnectAdminsRec = ConnectAdminsRec;

});
define("ContactBase_IS.model$SubdivisionsSimplestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LocalitySimplestRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubdivisionsSimplestRec = (function (_super) {
__extends(SubdivisionsSimplestRec, _super);
function SubdivisionsSimplestRec(defaults) {
_super.apply(this, arguments);
}
SubdivisionsSimplestRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalitySimplestRec());
}, true, ContactBase_ISModel.LocalitySimplestRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionsSimplestRec.init();
return SubdivisionsSimplestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubdivisionsSimplestRec = SubdivisionsSimplestRec;

});
define("ContactBase_IS.model$AddressDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AddressDetailRec = (function (_super) {
__extends(AddressDetailRec, _super);
function AddressDetailRec(defaults) {
_super.apply(this, arguments);
}
AddressDetailRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AddressDetailRec.init();
return AddressDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AddressDetailRec = AddressDetailRec;

});
define("ContactBase_IS.model$DefaultLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$DefaultCountryRec", "ContactBase_IS.model$DefaultLocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DefaultLocationRec = (function (_super) {
__extends(DefaultLocationRec, _super);
function DefaultLocationRec(defaults) {
_super.apply(this, arguments);
}
DefaultLocationRec.attributesToDeclare = function () {
return [
this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec), 
this.attr("DefaultLocality", "defaultLocalityAttr", "DefaultLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultLocalityRec());
}, true, ContactBase_ISModel.DefaultLocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultLocationRec.init();
return DefaultLocationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DefaultLocationRec = DefaultLocationRec;

});
define("ContactBase_IS.model$UserDetail2List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$UserDetail2Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserDetail2List = (function (_super) {
__extends(UserDetail2List, _super);
function UserDetail2List(defaults) {
_super.apply(this, arguments);
}
UserDetail2List.itemType = ContactBase_ISModel.UserDetail2Rec;
return UserDetail2List;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.UserDetail2List = UserDetail2List;

});
define("ContactBase_IS.model$GetUsersResponse2Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$UserDetail2List"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersResponse2Rec = (function (_super) {
__extends(GetUsersResponse2Rec, _super);
function GetUsersResponse2Rec(defaults) {
_super.apply(this, arguments);
}
GetUsersResponse2Rec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.UserDetail2List());
}, true, ContactBase_ISModel.UserDetail2List)
].concat(_super.attributesToDeclare.call(this));
};
GetUsersResponse2Rec.init();
return GetUsersResponse2Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUsersResponse2Rec = GetUsersResponse2Rec;

});
define("ContactBase_IS.model$GetHouseholdUsersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdUsersResponseRec = (function (_super) {
__extends(GetHouseholdUsersResponseRec, _super);
function GetHouseholdUsersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdUsersResponseRec.attributesToDeclare = function () {
return [
this.attr("MemberID", "memberIDAttr", "MemberID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsActive_User", "isActive_UserAttr", "IsActive_User", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubscriptionPaid", "subscriptionPaidAttr", "SubscriptionPaid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ConnectSubscription", "connectSubscriptionAttr", "ConnectSubscription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdUsersResponseRec.init();
return GetHouseholdUsersResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetHouseholdUsersResponseRec = GetHouseholdUsersResponseRec;

});
define("ContactBase_IS.model$ChangesRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ChangesRequestRec = (function (_super) {
__extends(ChangesRequestRec, _super);
function ChangesRequestRec(defaults) {
_super.apply(this, arguments);
}
ChangesRequestRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate", "familyUpdateAttr", "FamilyUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FamilyUpdate_BirthDateDisplay", "familyUpdate_BirthDateDisplayAttr", "BirthDateDisplay", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FamilyUpdate_BirthTimeDisplay", "familyUpdate_BirthTimeDisplayAttr", "FamilyUpdate_BirthTimeDisplay", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_Gender", "familyUpdate_GenderAttr", "FamilyUpdate_Gender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyUpdate_Name", "familyUpdate_NameAttr", "FamilyUpdate_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoUpdate", "photoUpdateAttr", "PhotoUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChangesRequestRec.init();
return ChangesRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ChangesRequestRec = ChangesRequestRec;

});
define("ContactBase_IS.model$GetContactPersonsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetContactPersonsResponseRec = (function (_super) {
__extends(GetContactPersonsResponseRec, _super);
function GetContactPersonsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetContactPersonsResponseRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberID", "memberIDAttr", "MemberID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetContactPersonsResponseRec.init();
return GetContactPersonsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetContactPersonsResponseRec = GetContactPersonsResponseRec;

});
define("ContactBase_IS.model$RegionSubscriptionResultRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionRegionList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var RegionSubscriptionResultRec = (function (_super) {
__extends(RegionSubscriptionResultRec, _super);
function RegionSubscriptionResultRec(defaults) {
_super.apply(this, arguments);
}
RegionSubscriptionResultRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SubscriptionRegion", "subscriptionRegionAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRegionList());
}, true, ContactBase_ISModel.SubscriptionRegionList)
].concat(_super.attributesToDeclare.call(this));
};
RegionSubscriptionResultRec.init();
return RegionSubscriptionResultRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.RegionSubscriptionResultRec = RegionSubscriptionResultRec;

});
define("ContactBase_IS.model$GetDevicehistoryResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetDevicehistoryResponseRec = (function (_super) {
__extends(GetDevicehistoryResponseRec, _super);
function GetDevicehistoryResponseRec(defaults) {
_super.apply(this, arguments);
}
GetDevicehistoryResponseRec.attributesToDeclare = function () {
return [
this.attr("ConnectAppVersion", "connectAppVersionAttr", "ConnectAppVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceName", "deviceNameAttr", "DeviceName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceOSVersion", "deviceOSVersionAttr", "DeviceOSVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceSdkVersion", "deviceSdkVersionAttr", "DeviceSdkVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceSpace", "deviceSpaceAttr", "DeviceSpace", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceUniqueId", "deviceUniqueIdAttr", "DeviceUniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetDevicehistoryResponseRec.init();
return GetDevicehistoryResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetDevicehistoryResponseRec = GetDevicehistoryResponseRec;

});
define("ContactBase_IS.model$VisibilityPreferenceSingleRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferenceSingleRec = (function (_super) {
__extends(VisibilityPreferenceSingleRec, _super);
function VisibilityPreferenceSingleRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferenceSingleRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferenceSingleRec.init();
return VisibilityPreferenceSingleRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferenceSingleRec = VisibilityPreferenceSingleRec;

});
define("ContactBase_IS.model$GetSubdivisionsInLocationResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsInLocationResponseRec = (function (_super) {
__extends(GetSubdivisionsInLocationResponseRec, _super);
function GetSubdivisionsInLocationResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsInLocationResponseRec.attributesToDeclare = function () {
return [
this.attr("SubdivisionId", "subdivisionIdAttr", "SubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionsInLocationResponseRec.init();
return GetSubdivisionsInLocationResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionsInLocationResponseRec = GetSubdivisionsInLocationResponseRec;

});
define("ContactBase_IS.model$GetMemberById_MobileResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetMemberById_MobileResponseRec = (function (_super) {
__extends(GetMemberById_MobileResponseRec, _super);
function GetMemberById_MobileResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMemberById_MobileResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Lastname", "lastnameAttr", "Lastname", false, false, OS.DataTypes.DataTypes.Text, function () {
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
GetMemberById_MobileResponseRec.init();
return GetMemberById_MobileResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetMemberById_MobileResponseRec = GetMemberById_MobileResponseRec;

});
define("ContactBase_IS.model$AddressDetailList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$AddressDetailRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AddressDetailList = (function (_super) {
__extends(AddressDetailList, _super);
function AddressDetailList(defaults) {
_super.apply(this, arguments);
}
AddressDetailList.itemType = ContactBase_ISModel.AddressDetailRec;
return AddressDetailList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.AddressDetailList = AddressDetailList;

});
define("ContactBase_IS.model$AddressRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$AddressDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AddressRec = (function (_super) {
__extends(AddressRec, _super);
function AddressRec(defaults) {
_super.apply(this, arguments);
}
AddressRec.attributesToDeclare = function () {
return [
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AddressDetailList());
}, true, ContactBase_ISModel.AddressDetailList), 
this.attr("AddressOneLiner", "addressOneLinerAttr", "AddressOneLiner", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PostalCode", "postalCodeAttr", "PostalCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Campus", "campusAttr", "Campus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AddressRec.init();
return AddressRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AddressRec = AddressRec;

});
define("ContactBase_IS.model$CountryConfigFilterRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CountryConfigFilterRequestRec = (function (_super) {
__extends(CountryConfigFilterRequestRec, _super);
function CountryConfigFilterRequestRec(defaults) {
_super.apply(this, arguments);
}
CountryConfigFilterRequestRec.attributesToDeclare = function () {
return [
this.attr("Page", "pageAttr", "Page", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ItemsPerPage", "itemsPerPageAttr", "ItemsPerPage", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SortBy", "sortByAttr", "SortBy", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Descending", "descendingAttr", "Descending", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ContactPhone", "contactPhoneAttr", "ContactPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ContactEmail", "contactEmailAttr", "ContactEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ManageSubscriptionLink", "manageSubscriptionLinkAttr", "ManageSubscriptionLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Text, function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SearchTerm", "searchTermAttr", "SearchTerm", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CountryConfigFilterRequestRec.init();
return CountryConfigFilterRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CountryConfigFilterRequestRec = CountryConfigFilterRequestRec;

});
define("ContactBase_IS.model$HouseholdList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HouseholdRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholdList = (function (_super) {
__extends(HouseholdList, _super);
function HouseholdList(defaults) {
_super.apply(this, arguments);
}
HouseholdList.itemType = ContactBase_ISModel.HouseholdRec;
return HouseholdList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.HouseholdList = HouseholdList;

});
define("ContactBase_IS.model$Member2List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$Member2Rec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var Member2List = (function (_super) {
__extends(Member2List, _super);
function Member2List(defaults) {
_super.apply(this, arguments);
}
Member2List.itemType = ContactBase_ISModel.Member2Rec;
return Member2List;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.Member2List = Member2List;

});
define("ContactBase_IS.model$PlaceRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PlaceRec = (function (_super) {
__extends(PlaceRec, _super);
function PlaceRec(defaults) {
_super.apply(this, arguments);
}
PlaceRec.attributesToDeclare = function () {
return [
this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceRec.init();
return PlaceRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PlaceRec = PlaceRec;

});
define("ContactBase_IS.model$PlaceList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PlaceRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PlaceList = (function (_super) {
__extends(PlaceList, _super);
function PlaceList(defaults) {
_super.apply(this, arguments);
}
PlaceList.itemType = ContactBase_ISModel.PlaceRec;
return PlaceList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.PlaceList = PlaceList;

});
define("ContactBase_IS.model$ElasticSearch_ResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HouseholdList", "ContactBase_IS.model$Member2List", "ContactBase_IS.model$PlaceList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_ResponseRec = (function (_super) {
__extends(ElasticSearch_ResponseRec, _super);
function ElasticSearch_ResponseRec(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_ResponseRec.attributesToDeclare = function () {
return [
this.attr("Households", "householdsAttr", "households", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholdList());
}, true, ContactBase_ISModel.HouseholdList), 
this.attr("Members", "membersAttr", "members", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.Member2List());
}, true, ContactBase_ISModel.Member2List), 
this.attr("Places", "placesAttr", "places", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PlaceList());
}, true, ContactBase_ISModel.PlaceList)
].concat(_super.attributesToDeclare.call(this));
};
ElasticSearch_ResponseRec.init();
return ElasticSearch_ResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ElasticSearch_ResponseRec = ElasticSearch_ResponseRec;

});
define("ContactBase_IS.model$PostHouseholdbyidsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostHouseholdbyidsResponseRec = (function (_super) {
__extends(PostHouseholdbyidsResponseRec, _super);
function PostHouseholdbyidsResponseRec(defaults) {
_super.apply(this, arguments);
}
PostHouseholdbyidsResponseRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "householdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdName", "householdNameAttr", "householdName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdMembers", "householdMembersAttr", "householdMembers", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "localityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "countryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Deceased", "deceasedAttr", "deceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "cdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "cdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostHouseholdbyidsResponseRec.init();
return PostHouseholdbyidsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostHouseholdbyidsResponseRec = PostHouseholdbyidsResponseRec;

});
define("ContactBase_IS.model$SubscriptionItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionItemList = (function (_super) {
__extends(SubscriptionItemList, _super);
function SubscriptionItemList(defaults) {
_super.apply(this, arguments);
}
SubscriptionItemList.itemType = ContactBase_ISModel.SubscriptionItemRec;
return SubscriptionItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubscriptionItemList = SubscriptionItemList;

});
define("ContactBase_IS.model$GetUsersSubscriptionResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubscriptionItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUsersSubscriptionResponseRec = (function (_super) {
__extends(GetUsersSubscriptionResponseRec, _super);
function GetUsersSubscriptionResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUsersSubscriptionResponseRec.attributesToDeclare = function () {
return [
this.attr("UserID", "userIDAttr", "UserID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive_User", "isActive_UserAttr", "IsActive_User", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountLocked", "accountLockedAttr", "AccountLocked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Subscriptions", "subscriptionsAttr", "Subscriptions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionItemList());
}, true, ContactBase_ISModel.SubscriptionItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetUsersSubscriptionResponseRec.init();
return GetUsersSubscriptionResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUsersSubscriptionResponseRec = GetUsersSubscriptionResponseRec;

});
define("ContactBase_IS.model$GetMemberByIdResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SpouseRec", "ContactBase_IS.model$MemberRec", "ContactBase_IS.model$PhotoRec", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$CountryRec", "ContactBase_IS.model$LocalityRec", "ContactBase_IS.model$SubdivisionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetMemberByIdResponseRec = (function (_super) {
__extends(GetMemberByIdResponseRec, _super);
function GetMemberByIdResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMemberByIdResponseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhoneLastUpdated", "homePhoneLastUpdatedAttr", "HomePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("WorkPhoneLastUpdated", "workPhoneLastUpdatedAttr", "WorkPhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MobilePhoneLastUpdated", "mobilePhoneLastUpdatedAttr", "MobilePhoneLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SpouseRec());
}, true, ContactBase_ISModel.SpouseRec), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberRec());
}, true, ContactBase_ISModel.MemberRec), 
this.attr("HouseholdPhoto", "householdPhotoAttr", "HouseholdPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoRec());
}, true, ContactBase_ISModel.PhotoRec), 
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
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
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryRec());
}, true, ContactBase_ISModel.CountryRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec), 
this.attr("FathersName", "fathersNameAttr", "FathersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FatherDeceased", "fatherDeceasedAttr", "FatherDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FatherDeceasedDate", "fatherDeceasedDateAttr", "FatherDeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FathersLocality", "fathersLocalityAttr", "FathersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MothersName", "mothersNameAttr", "MothersName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MotherDeceased", "motherDeceasedAttr", "MotherDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MotherDeceasedDate", "motherDeceasedDateAttr", "MotherDeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MothersLocality", "mothersLocalityAttr", "MothersLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Longtitude", "longtitudeAttr", "Longtitude", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("DisplayHomePhone", "displayHomePhoneAttr", "DisplayHomePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnder21", "isUnder21Attr", "IsUnder21", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetMemberByIdResponseRec.init();
return GetMemberByIdResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetMemberByIdResponseRec = GetMemberByIdResponseRec;

});
define("ContactBase_IS.model$OpeningHourItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$OpeningHourItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var OpeningHourItemList = (function (_super) {
__extends(OpeningHourItemList, _super);
function OpeningHourItemList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemList.itemType = ContactBase_ISModel.OpeningHourItemRec;
return OpeningHourItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.OpeningHourItemList = OpeningHourItemList;

});
define("ContactBase_IS.model$BusinessLinkItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRec = (function (_super) {
__extends(BusinessLinkItemRec, _super);
function BusinessLinkItemRec(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Link", "linkAttr", "Link", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID", "iDAttr", "ID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BusinessLinkItemRec.init();
return BusinessLinkItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.BusinessLinkItemRec = BusinessLinkItemRec;

});
define("ContactBase_IS.model$BusinessLinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$BusinessLinkItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemList = (function (_super) {
__extends(BusinessLinkItemList, _super);
function BusinessLinkItemList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemList.itemType = ContactBase_ISModel.BusinessLinkItemRec;
return BusinessLinkItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.BusinessLinkItemList = BusinessLinkItemList;

});
define("ContactBase_IS.model$LocalityCommunityBusinessRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$OpeningHourItemList", "ContactBase_IS.model$BusinessLinkItemList", "ContactBase_IS.model$CDNRec", "ContactBase_IS.model$ExtensionRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRec = (function (_super) {
__extends(LocalityCommunityBusinessRec, _super);
function LocalityCommunityBusinessRec(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityID", "localityIDAttr", "LocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CommunityBusinessID", "communityBusinessIDAttr", "CommunityBusinessID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Website", "websiteAttr", "Website", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailAddress", "emailAddressAttr", "EmailAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AreasServed", "areasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningHours", "openingHoursAttr", "OpeningHours", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.OpeningHourItemList());
}, true, ContactBase_ISModel.OpeningHourItemList), 
this.attr("BusinessLinks", "businessLinksAttr", "BusinessLinks", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.BusinessLinkItemList());
}, true, ContactBase_ISModel.BusinessLinkItemList), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ExtensionRec());
}, true, ContactBase_ISModel.ExtensionRec), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalityCommunityBusinessRec.init();
return LocalityCommunityBusinessRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.LocalityCommunityBusinessRec = LocalityCommunityBusinessRec;

});
define("ContactBase_IS.model$PostAddUsersToRoleRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostAddUsersToRoleRequestRec = (function (_super) {
__extends(PostAddUsersToRoleRequestRec, _super);
function PostAddUsersToRoleRequestRec(defaults) {
_super.apply(this, arguments);
}
PostAddUsersToRoleRequestRec.attributesToDeclare = function () {
return [
this.attr("RoleId", "roleIdAttr", "roleId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "userId", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
PostAddUsersToRoleRequestRec.init();
return PostAddUsersToRoleRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostAddUsersToRoleRequestRec = PostAddUsersToRoleRequestRec;

});
define("ContactBase_IS.model$ClaimScopeTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ClaimScopeTypeRec = (function (_super) {
__extends(ClaimScopeTypeRec, _super);
function ClaimScopeTypeRec(defaults) {
_super.apply(this, arguments);
}
ClaimScopeTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Key_Search", "key_SearchAttr", "Key_Search", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ClaimScopeTypeRec.init();
return ClaimScopeTypeRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ClaimScopeTypeRec = ClaimScopeTypeRec;

});
define("ContactBase_IS.model$GetLocalitiesByCountryResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetLocalitiesByCountryResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetLocalitiesByCountryResultItemList = (function (_super) {
__extends(GetLocalitiesByCountryResultItemList, _super);
function GetLocalitiesByCountryResultItemList(defaults) {
_super.apply(this, arguments);
}
GetLocalitiesByCountryResultItemList.itemType = ContactBase_ISModel.GetLocalitiesByCountryResultItemRec;
return GetLocalitiesByCountryResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetLocalitiesByCountryResultItemList = GetLocalitiesByCountryResultItemList;

});
define("ContactBase_IS.model$GetLocalitiesByCountryResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetLocalitiesByCountryResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetLocalitiesByCountryResponseRec = (function (_super) {
__extends(GetLocalitiesByCountryResponseRec, _super);
function GetLocalitiesByCountryResponseRec(defaults) {
_super.apply(this, arguments);
}
GetLocalitiesByCountryResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetLocalitiesByCountryResultItemList());
}, true, ContactBase_ISModel.GetLocalitiesByCountryResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalitiesByCountryResponseRec.init();
return GetLocalitiesByCountryResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetLocalitiesByCountryResponseRec = GetLocalitiesByCountryResponseRec;

});
define("ContactBase_IS.model$VisibilityPreferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferenceRec = (function (_super) {
__extends(VisibilityPreferenceRec, _super);
function VisibilityPreferenceRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferenceRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayWorkPhone", "displayWorkPhoneAttr", "DisplayWorkPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayMobilePhone", "displayMobilePhoneAttr", "DisplayMobilePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHousehold", "displayHouseholdAttr", "DisplayHousehold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayHomePhone", "displayHomePhoneAttr", "DisplayHomePhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayEmail", "displayEmailAttr", "DisplayEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferenceRec.init();
return VisibilityPreferenceRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferenceRec = VisibilityPreferenceRec;

});
define("ContactBase_IS.model$ConnectConfigList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ConnectConfigRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ConnectConfigList = (function (_super) {
__extends(ConnectConfigList, _super);
function ConnectConfigList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigList.itemType = ContactBase_ISModel.ConnectConfigRec;
return ConnectConfigList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.ConnectConfigList = ConnectConfigList;

});
define("ContactBase_IS.model$CountryConfigsGetListResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ConnectConfigList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CountryConfigsGetListResponseRec = (function (_super) {
__extends(CountryConfigsGetListResponseRec, _super);
function CountryConfigsGetListResponseRec(defaults) {
_super.apply(this, arguments);
}
CountryConfigsGetListResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ConnectConfigList());
}, true, ContactBase_ISModel.ConnectConfigList)
].concat(_super.attributesToDeclare.call(this));
};
CountryConfigsGetListResponseRec.init();
return CountryConfigsGetListResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CountryConfigsGetListResponseRec = CountryConfigsGetListResponseRec;

});
define("ContactBase_IS.model$CBUSerupdateRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$VisibilityPreferencesUpdateRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var CBUSerupdateRequestRec = (function (_super) {
__extends(CBUSerupdateRequestRec, _super);
function CBUSerupdateRequestRec(defaults) {
_super.apply(this, arguments);
}
CBUSerupdateRequestRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("note", "noteAttr", "note", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Visibility", "visibilityAttr", "Visibility", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.VisibilityPreferencesUpdateRec());
}, true, ContactBase_ISModel.VisibilityPreferencesUpdateRec), 
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ConfirmPassword", "confirmPasswordAttr", "ConfirmPassword", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdminCountryCodes", "adminCountryCodesAttr", "AdminCountryCodes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("AdminLocalityIds", "adminLocalityIdsAttr", "AdminLocalityIds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CBUSerupdateRequestRec.init();
return CBUSerupdateRequestRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.CBUSerupdateRequestRec = CBUSerupdateRequestRec;

});
define("ContactBase_IS.model$PhotoBookDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PhotoBookDetailsRec = (function (_super) {
__extends(PhotoBookDetailsRec, _super);
function PhotoBookDetailsRec(defaults) {
_super.apply(this, arguments);
}
PhotoBookDetailsRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Details", "detailsAttr", "Details", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhotoBookDetailsRec.init();
return PhotoBookDetailsRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PhotoBookDetailsRec = PhotoBookDetailsRec;

});
define("ContactBase_IS.model$PhotoBookDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoBookDetailsRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PhotoBookDetailsList = (function (_super) {
__extends(PhotoBookDetailsList, _super);
function PhotoBookDetailsList(defaults) {
_super.apply(this, arguments);
}
PhotoBookDetailsList.itemType = ContactBase_ISModel.PhotoBookDetailsRec;
return PhotoBookDetailsList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.PhotoBookDetailsList = PhotoBookDetailsList;

});
define("ContactBase_IS.model$GetPhotoBookDetailsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoBookDetailsList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetPhotoBookDetailsResponseRec = (function (_super) {
__extends(GetPhotoBookDetailsResponseRec, _super);
function GetPhotoBookDetailsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetPhotoBookDetailsResponseRec.attributesToDeclare = function () {
return [
this.attr("PhotoBookDetails", "photoBookDetailsAttr", "PhotoBookDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoBookDetailsList());
}, true, ContactBase_ISModel.PhotoBookDetailsList)
].concat(_super.attributesToDeclare.call(this));
};
GetPhotoBookDetailsResponseRec.fromStructure = function (str) {
return new GetPhotoBookDetailsResponseRec(new GetPhotoBookDetailsResponseRec.RecordClass({
photoBookDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetPhotoBookDetailsResponseRec.init();
return GetPhotoBookDetailsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetPhotoBookDetailsResponseRec = GetPhotoBookDetailsResponseRec;

});
define("ContactBase_IS.model$GetTimezoneResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetTimezoneResponseRec = (function (_super) {
__extends(GetTimezoneResponseRec, _super);
function GetTimezoneResponseRec(defaults) {
_super.apply(this, arguments);
}
GetTimezoneResponseRec.attributesToDeclare = function () {
return [
this.attr("TZName", "tZNameAttr", "TZName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
GetTimezoneResponseRec.init();
return GetTimezoneResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetTimezoneResponseRec = GetTimezoneResponseRec;

});
define("ContactBase_IS.model$PostSubscriptionIntegrationConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var PostSubscriptionIntegrationConfigurationRec = (function (_super) {
__extends(PostSubscriptionIntegrationConfigurationRec, _super);
function PostSubscriptionIntegrationConfigurationRec(defaults) {
_super.apply(this, arguments);
}
PostSubscriptionIntegrationConfigurationRec.attributesToDeclare = function () {
return [
this.attr("ProductCode", "productCodeAttr", "ProductCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRegionID", "subscriptionRegionIDAttr", "SubscriptionRegionID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegrationUserID", "integrationUserIDAttr", "IntegrationUserID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SystemType", "systemTypeAttr", "SystemType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedUser", "lastUpdatedUserAttr", "LastUpdatedUser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostSubscriptionIntegrationConfigurationRec.init();
return PostSubscriptionIntegrationConfigurationRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.PostSubscriptionIntegrationConfigurationRec = PostSubscriptionIntegrationConfigurationRec;

});
define("ContactBase_IS.model$APIErrorHeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var APIErrorHeaderRec = (function (_super) {
__extends(APIErrorHeaderRec, _super);
function APIErrorHeaderRec(defaults) {
_super.apply(this, arguments);
}
APIErrorHeaderRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
APIErrorHeaderRec.init();
return APIErrorHeaderRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.APIErrorHeaderRec = APIErrorHeaderRec;

});
define("ContactBase_IS.model$BaseMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var BaseMessageRec = (function (_super) {
__extends(BaseMessageRec, _super);
function BaseMessageRec(defaults) {
_super.apply(this, arguments);
}
BaseMessageRec.attributesToDeclare = function () {
return [
this.attr("IsSuccess", "isSuccessAttr", "IsSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BaseMessageRec.init();
return BaseMessageRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.BaseMessageRec = BaseMessageRec;

});
define("ContactBase_IS.model$GetEmailSearchResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$EmailResultList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetEmailSearchResponseRec = (function (_super) {
__extends(GetEmailSearchResponseRec, _super);
function GetEmailSearchResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEmailSearchResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.EmailResultList());
}, true, ContactBase_ISModel.EmailResultList)
].concat(_super.attributesToDeclare.call(this));
};
GetEmailSearchResponseRec.init();
return GetEmailSearchResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetEmailSearchResponseRec = GetEmailSearchResponseRec;

});
define("ContactBase_IS.model$ElasticSearch_HouseholdList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ElasticSearch_HouseholdRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_HouseholdList = (function (_super) {
__extends(ElasticSearch_HouseholdList, _super);
function ElasticSearch_HouseholdList(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_HouseholdList.itemType = ContactBase_ISModel.ElasticSearch_HouseholdRec;
return ElasticSearch_HouseholdList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.ElasticSearch_HouseholdList = ElasticSearch_HouseholdList;

});
define("ContactBase_IS.model$ElasticSearch_MemberRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_MemberRec = (function (_super) {
__extends(ElasticSearch_MemberRec, _super);
function ElasticSearch_MemberRec(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_MemberRec.attributesToDeclare = function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ElasticSearch_MemberRec.init();
return ElasticSearch_MemberRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ElasticSearch_MemberRec = ElasticSearch_MemberRec;

});
define("ContactBase_IS.model$ElasticSearch_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ElasticSearch_MemberRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_MemberList = (function (_super) {
__extends(ElasticSearch_MemberList, _super);
function ElasticSearch_MemberList(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_MemberList.itemType = ContactBase_ISModel.ElasticSearch_MemberRec;
return ElasticSearch_MemberList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.ElasticSearch_MemberList = ElasticSearch_MemberList;

});
define("ContactBase_IS.model$ElasticSearch_PlaceList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ElasticSearch_PlaceRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ElasticSearch_PlaceList = (function (_super) {
__extends(ElasticSearch_PlaceList, _super);
function ElasticSearch_PlaceList(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_PlaceList.itemType = ContactBase_ISModel.ElasticSearch_PlaceRec;
return ElasticSearch_PlaceList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.ElasticSearch_PlaceList = ElasticSearch_PlaceList;

});
define("ContactBase_IS.model$Result_ElasticSearch_Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$ElasticSearch_HouseholdList", "ContactBase_IS.model$ElasticSearch_MemberList", "ContactBase_IS.model$ElasticSearch_PlaceList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var Result_ElasticSearch_Rec = (function (_super) {
__extends(Result_ElasticSearch_Rec, _super);
function Result_ElasticSearch_Rec(defaults) {
_super.apply(this, arguments);
}
Result_ElasticSearch_Rec.attributesToDeclare = function () {
return [
this.attr("Households", "householdsAttr", "households", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ElasticSearch_HouseholdList());
}, true, ContactBase_ISModel.ElasticSearch_HouseholdList), 
this.attr("Members", "membersAttr", "members", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ElasticSearch_MemberList());
}, true, ContactBase_ISModel.ElasticSearch_MemberList), 
this.attr("Places", "placesAttr", "places", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ElasticSearch_PlaceList());
}, true, ContactBase_ISModel.ElasticSearch_PlaceList)
].concat(_super.attributesToDeclare.call(this));
};
Result_ElasticSearch_Rec.init();
return Result_ElasticSearch_Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.Result_ElasticSearch_Rec = Result_ElasticSearch_Rec;

});
define("ContactBase_IS.model$ParamSearchNonSubscribersRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ParamSearchNonSubscribersRec = (function (_super) {
__extends(ParamSearchNonSubscribersRec, _super);
function ParamSearchNonSubscribersRec(defaults) {
_super.apply(this, arguments);
}
ParamSearchNonSubscribersRec.attributesToDeclare = function () {
return [
this.attr("PageSize", "pageSizeAttr", "PageSize", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PageNumber", "pageNumberAttr", "PageNumber", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MinAge", "minAgeAttr", "MinAge", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("regionID", "regionIDAttr", "regionID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("localityID", "localityIDAttr", "localityID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrderByColumn", "orderByColumnAttr", "OrderByColumn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SortOrder", "sortOrderAttr", "SortOrder", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartWith", "startWithAttr", "StartWith", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SearchTerm", "searchTermAttr", "SearchTerm", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ParamSearchNonSubscribersRec.init();
return ParamSearchNonSubscribersRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ParamSearchNonSubscribersRec = ParamSearchNonSubscribersRec;

});
define("ContactBase_IS.model$SubscriptionInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubscriptionInfoRec = (function (_super) {
__extends(SubscriptionInfoRec, _super);
function SubscriptionInfoRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionInfoRec.attributesToDeclare = function () {
return [
this.attr("SubscriptionID", "subscriptionIDAttr", "SubscriptionID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionPaid", "subscriptionPaidAttr", "SubscriptionPaid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PS", "pSAttr", "PS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionNotes", "subscriptionNotesAttr", "SubscriptionNotes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ConnectSubscription", "connectSubscriptionAttr", "ConnectSubscription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionRow", "subscriptionRowAttr", "SubscriptionRow", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubscriptionStartDate", "subscriptionStartDateAttr", "SubscriptionStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SubscriptionLastUpdated", "subscriptionLastUpdatedAttr", "SubscriptionLastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsActive_Subscription", "isActive_SubscriptionAttr", "IsActive_Subscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Subscription_ExpiresinDays", "subscription_ExpiresinDaysAttr", "Subscription_ExpiresinDays", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InvoiceID", "invoiceIDAttr", "InvoiceID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MagentoAccountID", "magentoAccountIDAttr", "MagentoAccountID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subscription_Region", "subscription_RegionAttr", "Subscription_Region", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionInfoRec.init();
return SubscriptionInfoRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubscriptionInfoRec = SubscriptionInfoRec;

});
define("ContactBase_IS.model$SubdivisionsCountryLocalityRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubdivisionsCountryLocalityRec = (function (_super) {
__extends(SubdivisionsCountryLocalityRec, _super);
function SubdivisionsCountryLocalityRec(defaults) {
_super.apply(this, arguments);
}
SubdivisionsCountryLocalityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionsCountryLocalityRec.init();
return SubdivisionsCountryLocalityRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubdivisionsCountryLocalityRec = SubdivisionsCountryLocalityRec;

});
define("ContactBase_IS.model$GetSearchFormattedResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSearchFormattedResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSearchFormattedResultItemList = (function (_super) {
__extends(GetSearchFormattedResultItemList, _super);
function GetSearchFormattedResultItemList(defaults) {
_super.apply(this, arguments);
}
GetSearchFormattedResultItemList.itemType = ContactBase_ISModel.GetSearchFormattedResultItemRec;
return GetSearchFormattedResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetSearchFormattedResultItemList = GetSearchFormattedResultItemList;

});
define("ContactBase_IS.model$GetSearchFormattedResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSearchFormattedResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSearchFormattedResponseRec = (function (_super) {
__extends(GetSearchFormattedResponseRec, _super);
function GetSearchFormattedResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSearchFormattedResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSearchFormattedResultItemList());
}, true, ContactBase_ISModel.GetSearchFormattedResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetSearchFormattedResponseRec.init();
return GetSearchFormattedResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSearchFormattedResponseRec = GetSearchFormattedResponseRec;

});
define("ContactBase_IS.model$UserExportRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var UserExportRec = (function (_super) {
__extends(UserExportRec, _super);
function UserExportRec(defaults) {
_super.apply(this, arguments);
}
UserExportRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OriginalSubscriberEmail", "originalSubscriberEmailAttr", "OriginalSubscriberEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Purchaser", "purchaserAttr", "Purchaser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MagentoRegion", "magentoRegionAttr", "MagentoRegion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionStartDate", "subscriptionStartDateAttr", "SubscriptionStartDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionEndDate", "subscriptionEndDateAttr", "SubscriptionEndDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionActive", "subscriptionActiveAttr", "SubscriptionActive", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserExportRec.init();
return UserExportRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.UserExportRec = UserExportRec;

});
define("ContactBase_IS.model$SubdivisionItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubdivisionItemRec = (function (_super) {
__extends(SubdivisionItemRec, _super);
function SubdivisionItemRec(defaults) {
_super.apply(this, arguments);
}
SubdivisionItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaleCount", "maleCountAttr", "maleCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("FemaleCount", "femaleCountAttr", "femaleCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionItemRec.init();
return SubdivisionItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.SubdivisionItemRec = SubdivisionItemRec;

});
define("ContactBase_IS.model$SubdivisionItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubdivisionItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var SubdivisionItemList = (function (_super) {
__extends(SubdivisionItemList, _super);
function SubdivisionItemList(defaults) {
_super.apply(this, arguments);
}
SubdivisionItemList.itemType = ContactBase_ISModel.SubdivisionItemRec;
return SubdivisionItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.SubdivisionItemList = SubdivisionItemList;

});
define("ContactBase_IS.model$GetSubdivisionsGenderSplitResponse_Rec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$SubdivisionItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsGenderSplitResponse_Rec = (function (_super) {
__extends(GetSubdivisionsGenderSplitResponse_Rec, _super);
function GetSubdivisionsGenderSplitResponse_Rec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsGenderSplitResponse_Rec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivisions", "subdivisionsAttr", "subdivisions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionItemList());
}, true, ContactBase_ISModel.SubdivisionItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionsGenderSplitResponse_Rec.init();
return GetSubdivisionsGenderSplitResponse_Rec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionsGenderSplitResponse_Rec = GetSubdivisionsGenderSplitResponse_Rec;

});
define("ContactBase_IS.model$HouseholdChildItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$PhotoTagRec", "ContactBase_IS.model$FamilyMemberFormattedDetailList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var HouseholdChildItemRec = (function (_super) {
__extends(HouseholdChildItemRec, _super);
function HouseholdChildItemRec(defaults) {
_super.apply(this, arguments);
}
HouseholdChildItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec), 
this.attr("Details", "detailsAttr", "Details", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDetailList());
}, true, ContactBase_ISModel.FamilyMemberFormattedDetailList), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdChildItemRec.init();
return HouseholdChildItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.HouseholdChildItemRec = HouseholdChildItemRec;

});
define("ContactBase_IS.model$GetInterchangesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$HallPhotoExtensiveRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchangesResponseRec = (function (_super) {
__extends(GetInterchangesResponseRec, _super);
function GetInterchangesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetInterchangesResponseRec.attributesToDeclare = function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetInterchangesResponseRec.init();
return GetInterchangesResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetInterchangesResponseRec = GetInterchangesResponseRec;

});
define("ContactBase_IS.model$DashboardSubTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var DashboardSubTargetRec = (function (_super) {
__extends(DashboardSubTargetRec, _super);
function DashboardSubTargetRec(defaults) {
_super.apply(this, arguments);
}
DashboardSubTargetRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Target", "targetAttr", "Target", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Variance", "varianceAttr", "Variance", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DashboardSubTargetRec.init();
return DashboardSubTargetRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.DashboardSubTargetRec = DashboardSubTargetRec;

});
define("ContactBase_IS.model$GetSubdivisionsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSubdivisionsResultItemRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsResultItemList = (function (_super) {
__extends(GetSubdivisionsResultItemList, _super);
function GetSubdivisionsResultItemList(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsResultItemList.itemType = ContactBase_ISModel.GetSubdivisionsResultItemRec;
return GetSubdivisionsResultItemList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetSubdivisionsResultItemList = GetSubdivisionsResultItemList;

});
define("ContactBase_IS.model$GetSubdivisionsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetSubdivisionsResultItemList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsResponseRec = (function (_super) {
__extends(GetSubdivisionsResponseRec, _super);
function GetSubdivisionsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSubdivisionsResultItemList());
}, true, ContactBase_ISModel.GetSubdivisionsResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionsResponseRec.init();
return GetSubdivisionsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetSubdivisionsResponseRec = GetSubdivisionsResponseRec;

});
define("ContactBase_IS.model$ContactBaseUSStatesRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ContactBaseUSStatesRec = (function (_super) {
__extends(ContactBaseUSStatesRec, _super);
function ContactBaseUSStatesRec(defaults) {
_super.apply(this, arguments);
}
ContactBaseUSStatesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactBaseUSStatesRec.init();
return ContactBaseUSStatesRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ContactBaseUSStatesRec = ContactBaseUSStatesRec;

});
define("ContactBase_IS.model$RegistrationStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var RegistrationStatusRec = (function (_super) {
__extends(RegistrationStatusRec, _super);
function RegistrationStatusRec(defaults) {
_super.apply(this, arguments);
}
RegistrationStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RegistrationStatusRec.init();
return RegistrationStatusRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.RegistrationStatusRec = RegistrationStatusRec;

});
define("ContactBase_IS.model$AdvancedSearchParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearchParametersRec = (function (_super) {
__extends(AdvancedSearchParametersRec, _super);
function AdvancedSearchParametersRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchParametersRec.attributesToDeclare = function () {
return [
this.attr("SearchText", "searchTextAttr", "SearchText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SearchMode", "searchModeAttr", "SearchMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BDM", "bDMAttr", "BDM", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdView", "householdViewAttr", "HouseholdView", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchParametersRec.init();
return AdvancedSearchParametersRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearchParametersRec = AdvancedSearchParametersRec;

});
define("ContactBase_IS.model$VisibilityPreferenceList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$VisibilityPreferenceRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferenceList = (function (_super) {
__extends(VisibilityPreferenceList, _super);
function VisibilityPreferenceList(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferenceList.itemType = ContactBase_ISModel.VisibilityPreferenceRec;
return VisibilityPreferenceList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.VisibilityPreferenceList = VisibilityPreferenceList;

});
define("ContactBase_IS.model$VisibilityPreferencesGetResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$VisibilityPreferenceList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var VisibilityPreferencesGetResponseRec = (function (_super) {
__extends(VisibilityPreferencesGetResponseRec, _super);
function VisibilityPreferencesGetResponseRec(defaults) {
_super.apply(this, arguments);
}
VisibilityPreferencesGetResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("VisibilityPreference", "visibilityPreferenceAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.VisibilityPreferenceList());
}, true, ContactBase_ISModel.VisibilityPreferenceList)
].concat(_super.attributesToDeclare.call(this));
};
VisibilityPreferencesGetResponseRec.init();
return VisibilityPreferencesGetResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.VisibilityPreferencesGetResponseRec = VisibilityPreferencesGetResponseRec;

});
define("ContactBase_IS.model$AdvancedSearch_Category_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_ScreenRec = (function (_super) {
__extends(AdvancedSearch_Category_ScreenRec, _super);
function AdvancedSearch_Category_ScreenRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_ScreenRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_Category_ScreenRec.fromStructure = function (str) {
return new AdvancedSearch_Category_ScreenRec(new AdvancedSearch_Category_ScreenRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_Category_ScreenRec.init();
return AdvancedSearch_Category_ScreenRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AdvancedSearch_Category_ScreenRec = AdvancedSearch_Category_ScreenRec;

});
define("ContactBase_IS.model$GetApplicationRoleStatList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetApplicationRoleStatRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetApplicationRoleStatList = (function (_super) {
__extends(GetApplicationRoleStatList, _super);
function GetApplicationRoleStatList(defaults) {
_super.apply(this, arguments);
}
GetApplicationRoleStatList.itemType = ContactBase_ISModel.GetApplicationRoleStatRec;
return GetApplicationRoleStatList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GetApplicationRoleStatList = GetApplicationRoleStatList;

});
define("ContactBase_IS.model$GetApplicationRoleStatsListRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GetApplicationRoleStatList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetApplicationRoleStatsListRec = (function (_super) {
__extends(GetApplicationRoleStatsListRec, _super);
function GetApplicationRoleStatsListRec(defaults) {
_super.apply(this, arguments);
}
GetApplicationRoleStatsListRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetApplicationRoleStatList());
}, true, ContactBase_ISModel.GetApplicationRoleStatList)
].concat(_super.attributesToDeclare.call(this));
};
GetApplicationRoleStatsListRec.init();
return GetApplicationRoleStatsListRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetApplicationRoleStatsListRec = GetApplicationRoleStatsListRec;

});
define("ContactBase_IS.model$GlobalList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$GlobalRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GlobalList = (function (_super) {
__extends(GlobalList, _super);
function GlobalList(defaults) {
_super.apply(this, arguments);
}
GlobalList.itemType = ContactBase_ISModel.GlobalRec;
return GlobalList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.GlobalList = GlobalList;

});
define("ContactBase_IS.model$ContactDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var ContactDetailRec = (function (_super) {
__extends(ContactDetailRec, _super);
function ContactDetailRec(defaults) {
_super.apply(this, arguments);
}
ContactDetailRec.attributesToDeclare = function () {
return [
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactDetailRec.init();
return ContactDetailRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.ContactDetailRec = ContactDetailRec;

});
define("ContactBase_IS.model$GetUserDetailsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$AcountDetailRec", "ContactBase_IS.model$GlobalList", "ContactBase_IS.model$VisibilityPreferenceRec", "ContactBase_IS.model$AddressRec", "ContactBase_IS.model$ContactDetailRec", "ContactBase_IS.model$LocationRec", "ContactBase_IS.model$GlobalSubscriberDetailsRec", "ContactBase_IS.model$AdvancePlusSubscriberDetailsRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetUserDetailsResponseRec = (function (_super) {
__extends(GetUserDetailsResponseRec, _super);
function GetUserDetailsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetUserDetailsResponseRec.attributesToDeclare = function () {
return [
this.attr("AcountDetail", "acountDetailAttr", "AcountDetail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AcountDetailRec());
}, true, ContactBase_ISModel.AcountDetailRec), 
this.attr("ConnectSubscriptions", "connectSubscriptionsAttr", "ConnectSubscriptions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GlobalList());
}, true, ContactBase_ISModel.GlobalList), 
this.attr("VisiblityPreferences", "visiblityPreferencesAttr", "VisiblityPreferences", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.VisibilityPreferenceRec());
}, true, ContactBase_ISModel.VisibilityPreferenceRec), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AddressRec());
}, true, ContactBase_ISModel.AddressRec), 
this.attr("ContactDetail", "contactDetailAttr", "ContactDetail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ContactDetailRec());
}, true, ContactBase_ISModel.ContactDetailRec), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocationRec());
}, true, ContactBase_ISModel.LocationRec), 
this.attr("GlobalSubscriberDetails", "globalSubscriberDetailsAttr", "GlobalSubscriberDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GlobalSubscriberDetailsRec());
}, true, ContactBase_ISModel.GlobalSubscriberDetailsRec), 
this.attr("AdvancePlusSubscriberDetails", "advancePlusSubscriberDetailsAttr", "AdvancePlusSubscriberDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancePlusSubscriberDetailsRec());
}, true, ContactBase_ISModel.AdvancePlusSubscriberDetailsRec), 
this.attr("IsUnder21", "isUnder21Attr", "IsUnder21", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetUserDetailsResponseRec.init();
return GetUserDetailsResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetUserDetailsResponseRec = GetUserDetailsResponseRec;

});
define("ContactBase_IS.model$IndividualList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$IndividualRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var IndividualList = (function (_super) {
__extends(IndividualList, _super);
function IndividualList(defaults) {
_super.apply(this, arguments);
}
IndividualList.itemType = ContactBase_ISModel.IndividualRec;
return IndividualList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.IndividualList = IndividualList;

});
define("ContactBase_IS.model$GetDirectorysearchResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$IndividualList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetDirectorysearchResponseRec = (function (_super) {
__extends(GetDirectorysearchResponseRec, _super);
function GetDirectorysearchResponseRec(defaults) {
_super.apply(this, arguments);
}
GetDirectorysearchResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.IndividualList());
}, true, ContactBase_ISModel.IndividualList)
].concat(_super.attributesToDeclare.call(this));
};
GetDirectorysearchResponseRec.init();
return GetDirectorysearchResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetDirectorysearchResponseRec = GetDirectorysearchResponseRec;

});
define("ContactBase_IS.model$GetInterchangesResultItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$LocalityRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetInterchangesResultItemRec = (function (_super) {
__extends(GetInterchangesResultItemRec, _super);
function GetInterchangesResultItemRec(defaults) {
_super.apply(this, arguments);
}
GetInterchangesResultItemRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocalityId", "interchangeLocalityIdAttr", "InterchangeLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InterchangeLocalityName", "interchangeLocalityNameAttr", "InterchangeLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Distance", "distanceAttr", "Distance", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeLocality", "interchangeLocalityAttr", "InterchangeLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
GetInterchangesResultItemRec.init();
return GetInterchangesResultItemRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetInterchangesResultItemRec = GetInterchangesResultItemRec;

});
define("ContactBase_IS.model$AccountStatusesRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var AccountStatusesRec = (function (_super) {
__extends(AccountStatusesRec, _super);
function AccountStatusesRec(defaults) {
_super.apply(this, arguments);
}
AccountStatusesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccountStatusesRec.init();
return AccountStatusesRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.AccountStatusesRec = AccountStatusesRec;

});
define("ContactBase_IS.model$FamilyMemberFormattedDeceasedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$FamilyMemberFormattedDeceasedRec"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDeceasedList = (function (_super) {
__extends(FamilyMemberFormattedDeceasedList, _super);
function FamilyMemberFormattedDeceasedList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDeceasedList.itemType = ContactBase_ISModel.FamilyMemberFormattedDeceasedRec;
return FamilyMemberFormattedDeceasedList;
})(OS.DataTypes.GenericRecordList);
ContactBase_ISModel.FamilyMemberFormattedDeceasedList = FamilyMemberFormattedDeceasedList;

});
define("ContactBase_IS.model$GetDeceasedHouseholdResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "ContactBase_IS.model$CDNRec", "ContactBase_IS.model$FamilyMemberFormattedDeceasedRec", "ContactBase_IS.model$FamilyMemberFormattedDeceasedList"], function (exports, OutSystems, ContactBase_ISModel) {
var OS = OutSystems.Internal;
var GetDeceasedHouseholdResponseRec = (function (_super) {
__extends(GetDeceasedHouseholdResponseRec, _super);
function GetDeceasedHouseholdResponseRec(defaults) {
_super.apply(this, arguments);
}
GetDeceasedHouseholdResponseRec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec), 
this.attr("LocalityID", "localityIDAttr", "LocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Householder", "householderAttr", "Householder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDeceasedRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedDeceasedRec), 
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDeceasedRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedDeceasedRec), 
this.attr("Children", "childrenAttr", "Children", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDeceasedList());
}, true, ContactBase_ISModel.FamilyMemberFormattedDeceasedList), 
this.attr("NoData", "noDataAttr", "NoData", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetDeceasedHouseholdResponseRec.init();
return GetDeceasedHouseholdResponseRec;
})(OS.DataTypes.GenericRecord);
ContactBase_ISModel.GetDeceasedHouseholdResponseRec = GetDeceasedHouseholdResponseRec;

});
define("ContactBase_IS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ContactBase_ISModel = exports;
});
