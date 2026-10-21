define("Connect2_OrbitMobile_IS.model$PostHostSurvey_HelperItemInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_HelperItemInfoRec = (function (_super) {
__extends(PostHostSurvey_HelperItemInfoRec, _super);
function PostHostSurvey_HelperItemInfoRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_HelperItemInfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("HelperRole", "helperRoleAttr", "HelperRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelperStatus", "helperStatusAttr", "HelperStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
PostHostSurvey_HelperItemInfoRec.init();
return PostHostSurvey_HelperItemInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemInfoRec = PostHostSurvey_HelperItemInfoRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_HelperItemInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_HelperItemInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_HelperItemInfoList = (function (_super) {
__extends(PostHostSurvey_HelperItemInfoList, _super);
function PostHostSurvey_HelperItemInfoList(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_HelperItemInfoList.itemType = Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemInfoRec;
return PostHostSurvey_HelperItemInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemInfoList = PostHostSurvey_HelperItemInfoList;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_HelperItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_HelperItemInfoList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_HelperItemRec = (function (_super) {
__extends(PostHostSurvey_HelperItemRec, _super);
function PostHostSurvey_HelperItemRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_HelperItemRec.attributesToDeclare = function () {
return [
this.attr("HelperNote", "helperNoteAttr", "HelperNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelperItemInfo", "helperItemInfoAttr", "HelperItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemInfoList());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemInfoList)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_HelperItemRec.init();
return PostHostSurvey_HelperItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemRec = PostHostSurvey_HelperItemRec;

});
define("Connect2_OrbitMobile_IS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.TextList = TextList;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_RoomItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_RoomItemRec = (function (_super) {
__extends(PostHostSurvey_RoomItemRec, _super);
function PostHostSurvey_RoomItemRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_RoomItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GenderPreference", "genderPreferenceAttr", "GenderPreference", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumberOfBeds", "numberOfBedsAttr", "NumberOfBeds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("Floor", "floorAttr", "Floor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasBasin", "hasBasinAttr", "HasBasin", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasEnsuite", "hasEnsuiteAttr", "HasEnsuite", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasToilet", "hasToiletAttr", "HasToilet", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasShower", "hasShowerAttr", "HasShower", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RoomNote", "roomNoteAttr", "RoomNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Beds", "bedsAttr", "Beds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_RoomItemRec.init();
return PostHostSurvey_RoomItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomItemRec = PostHostSurvey_RoomItemRec;

});
define("Connect2_OrbitMobile_IS.model$EventDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventDetailsRec = (function (_super) {
__extends(EventDetailsRec, _super);
function EventDetailsRec(defaults) {
_super.apply(this, arguments);
}
EventDetailsRec.attributesToDeclare = function () {
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
this.attr("StartDate", "startDateAttr", "StartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDate", "endDateAttr", "EndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventDetailsRec.init();
return EventDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventDetailsRec = EventDetailsRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsRec = (function (_super) {
__extends(SpecialNeedsRec, _super);
function SpecialNeedsRec(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsRec.attributesToDeclare = function () {
return [
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpecialNeedsRec.init();
return SpecialNeedsRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SpecialNeedsRec = SpecialNeedsRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsList = (function (_super) {
__extends(SpecialNeedsList, _super);
function SpecialNeedsList(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsList.itemType = Connect2_OrbitMobile_ISModel.SpecialNeedsRec;
return SpecialNeedsList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.SpecialNeedsList = SpecialNeedsList;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItemRec = (function (_super) {
__extends(SpecialNeedsItemRec, _super);
function SpecialNeedsItemRec(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItemRec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPhotoURL", "signedPhotoURLAttr", "SignedPhotoURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsList)
].concat(_super.attributesToDeclare.call(this));
};
SpecialNeedsItemRec.init();
return SpecialNeedsItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SpecialNeedsItemRec = SpecialNeedsItemRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItemList = (function (_super) {
__extends(SpecialNeedsItemList, _super);
function SpecialNeedsItemList(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItemList.itemType = Connect2_OrbitMobile_ISModel.SpecialNeedsItemRec;
return SpecialNeedsItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.SpecialNeedsItemList = SpecialNeedsItemList;

});
define("Connect2_OrbitMobile_IS.model$MemberAccommodationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MemberAccommodationRec = (function (_super) {
__extends(MemberAccommodationRec, _super);
function MemberAccommodationRec(defaults) {
_super.apply(this, arguments);
}
MemberAccommodationRec.attributesToDeclare = function () {
return [
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberAccommodationRec.init();
return MemberAccommodationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MemberAccommodationRec = MemberAccommodationRec;

});
define("Connect2_OrbitMobile_IS.model$MemberInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MemberInformationRec = (function (_super) {
__extends(MemberInformationRec, _super);
function MemberInformationRec(defaults) {
_super.apply(this, arguments);
}
MemberInformationRec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSpouse", "isSpouseAttr", "IsSpouse", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Age", "ageAttr", "Age", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MiddayMeal", "middayMealAttr", "MiddayMeal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EveningMeal", "eveningMealAttr", "EveningMeal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Accommodation", "accommodationAttr", "Accommodation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MemberAccommodationRec());
}, true, Connect2_OrbitMobile_ISModel.MemberAccommodationRec), 
this.attr("HasGuestArrangements", "hasGuestArrangementsAttr", "HasGuestArrangements", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasOrbitAdminRole", "hasOrbitAdminRoleAttr", "HasOrbitAdminRole", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SignedPhotoURL", "signedPhotoURLAttr", "SignedPhotoURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseHolderId2", "houseHolderId2Attr", "HouseHolderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberInformationRec.init();
return MemberInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MemberInformationRec = MemberInformationRec;

});
define("Connect2_OrbitMobile_IS.model$MemberInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MemberInformationRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MemberInformationList = (function (_super) {
__extends(MemberInformationList, _super);
function MemberInformationList(defaults) {
_super.apply(this, arguments);
}
MemberInformationList.itemType = Connect2_OrbitMobile_ISModel.MemberInformationRec;
return MemberInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.MemberInformationList = MemberInformationList;

});
define("Connect2_OrbitMobile_IS.model$HelperItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MemberInformationList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HelperItemRec = (function (_super) {
__extends(HelperItemRec, _super);
function HelperItemRec(defaults) {
_super.apply(this, arguments);
}
HelperItemRec.attributesToDeclare = function () {
return [
this.attr("Role", "roleAttr", "Role", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberInformation", "memberInformationAttr", "MemberInformation", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MemberInformationList());
}, true, Connect2_OrbitMobile_ISModel.MemberInformationList)
].concat(_super.attributesToDeclare.call(this));
};
HelperItemRec.init();
return HelperItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HelperItemRec = HelperItemRec;

});
define("Connect2_OrbitMobile_IS.model$HelperItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HelperItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HelperItemList = (function (_super) {
__extends(HelperItemList, _super);
function HelperItemList(defaults) {
_super.apply(this, arguments);
}
HelperItemList.itemType = Connect2_OrbitMobile_ISModel.HelperItemRec;
return HelperItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.HelperItemList = HelperItemList;

});
define("Connect2_OrbitMobile_IS.model$GuestItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MemberInformationList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GuestItemRec = (function (_super) {
__extends(GuestItemRec, _super);
function GuestItemRec(defaults) {
_super.apply(this, arguments);
}
GuestItemRec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdName", "householdNameAttr", "HouseholdName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayDot", "displayDotAttr", "DisplayDot", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MemberInformation", "memberInformationAttr", "MemberInformation", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MemberInformationList());
}, true, Connect2_OrbitMobile_ISModel.MemberInformationList)
].concat(_super.attributesToDeclare.call(this));
};
GuestItemRec.init();
return GuestItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GuestItemRec = GuestItemRec;

});
define("Connect2_OrbitMobile_IS.model$GuestItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$GuestItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GuestItemList = (function (_super) {
__extends(GuestItemList, _super);
function GuestItemList(defaults) {
_super.apply(this, arguments);
}
GuestItemList.itemType = Connect2_OrbitMobile_ISModel.GuestItemRec;
return GuestItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.GuestItemList = GuestItemList;

});
define("Connect2_OrbitMobile_IS.model$GetMealHostResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemList", "Connect2_OrbitMobile_IS.model$HelperItemList", "Connect2_OrbitMobile_IS.model$GuestItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetMealHostResponseRec = (function (_super) {
__extends(GetMealHostResponseRec, _super);
function GetMealHostResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMealHostResponseRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("AllocatedGuests", "allocatedGuestsAttr", "AllocatedGuests", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItemList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItemList), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GuestItemList());
}, true, Connect2_OrbitMobile_ISModel.GuestItemList), 
this.attr("Meals", "mealsAttr", "Meals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SetUpMeals", "setUpMealsAttr", "SetUpMeals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetMealHostResponseRec.init();
return GetMealHostResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetMealHostResponseRec = GetMealHostResponseRec;

});
define("Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var QRCodeSeatItemRec = (function (_super) {
__extends(QRCodeSeatItemRec, _super);
function QRCodeSeatItemRec(defaults) {
_super.apply(this, arguments);
}
QRCodeSeatItemRec.attributesToDeclare = function () {
return [
this.attr("MilestoneName", "milestoneNameAttr", "milestoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeatAllocation", "seatAllocationAttr", "seatAllocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
QRCodeSeatItemRec.init();
return QRCodeSeatItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.QRCodeSeatItemRec = QRCodeSeatItemRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_InfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_InfoRec = (function (_super) {
__extends(PostHostSurvey_InfoRec, _super);
function PostHostSurvey_InfoRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_InfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}, true), 
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventStartDateTime", "eventStartDateTimeAttr", "EventStartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.BuiltinFunctions.nullDate();
}, true), 
this.attr("EventEndDateTime", "eventEndDateTimeAttr", "EventEndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.BuiltinFunctions.nullDate();
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostProfileSurveyStatus", "hostProfileSurveyStatusAttr", "HostProfileSurveyStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccommodationSurvey", "accommodationSurveyAttr", "AccommodationSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MealSurvey", "mealSurveyAttr", "MealSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HelperSurvey", "helperSurveyAttr", "HelperSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("VehicleSurvey", "vehicleSurveyAttr", "VehicleSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HostSurveyNote", "hostSurveyNoteAttr", "HostSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccommodationSurveyNote", "accommodationSurveyNoteAttr", "AccommodationSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MealSurveyNote", "mealSurveyNoteAttr", "MealSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelperSurveyNote", "helperSurveyNoteAttr", "HelperSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleSurveyNote", "vehicleSurveyNoteAttr", "VehicleSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_InfoRec.init();
return PostHostSurvey_InfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_InfoRec = PostHostSurvey_InfoRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_RoomItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_RoomItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_RoomItemList = (function (_super) {
__extends(PostHostSurvey_RoomItemList, _super);
function PostHostSurvey_RoomItemList(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_RoomItemList.itemType = Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomItemRec;
return PostHostSurvey_RoomItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomItemList = PostHostSurvey_RoomItemList;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_RoomInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_RoomItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_RoomInfoRec = (function (_super) {
__extends(PostHostSurvey_RoomInfoRec, _super);
function PostHostSurvey_RoomInfoRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_RoomInfoRec.attributesToDeclare = function () {
return [
this.attr("AccommodationNote", "accommodationNoteAttr", "AccommodationNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostSurvey_RoomItem", "hostSurvey_RoomItemAttr", "RoomItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomItemList());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomItemList)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_RoomInfoRec.init();
return PostHostSurvey_RoomInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomInfoRec = PostHostSurvey_RoomInfoRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_MealItemInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_MealItemInfoRec = (function (_super) {
__extends(PostHostSurvey_MealItemInfoRec, _super);
function PostHostSurvey_MealItemInfoRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_MealItemInfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDescription", "milestoneDescriptionAttr", "MilestoneDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.BuiltinFunctions.nullDate();
}, true), 
this.attr("IsPreferred", "isPreferredAttr", "IsPreferred", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ComfortableCapacity", "comfortableCapacityAttr", "ComfortableCapacity", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("StretchCapacity", "stretchCapacityAttr", "StretchCapacity", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_MealItemInfoRec.init();
return PostHostSurvey_MealItemInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemInfoRec = PostHostSurvey_MealItemInfoRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_MealItemInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_MealItemInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_MealItemInfoList = (function (_super) {
__extends(PostHostSurvey_MealItemInfoList, _super);
function PostHostSurvey_MealItemInfoList(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_MealItemInfoList.itemType = Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemInfoRec;
return PostHostSurvey_MealItemInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemInfoList = PostHostSurvey_MealItemInfoList;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_MealItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_MealItemInfoList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_MealItemRec = (function (_super) {
__extends(PostHostSurvey_MealItemRec, _super);
function PostHostSurvey_MealItemRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_MealItemRec.attributesToDeclare = function () {
return [
this.attr("MealNote", "mealNoteAttr", "MealNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MealItemInfo", "mealItemInfoAttr", "MealItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemInfoList());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemInfoList)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_MealItemRec.init();
return PostHostSurvey_MealItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemRec = PostHostSurvey_MealItemRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_VehicleItemInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_VehicleItemInfoRec = (function (_super) {
__extends(PostHostSurvey_VehicleItemInfoRec, _super);
function PostHostSurvey_VehicleItemInfoRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_VehicleItemInfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("VehicleId", "vehicleIdAttr", "VehicleId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("OwnerType", "ownerTypeAttr", "OwnerType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleType", "vehicleTypeAttr", "VehicleType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleMakeAndModel", "vehicleMakeAndModelAttr", "VehicleMakeAndModel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegistrationNumber", "registrationNumberAttr", "RegistrationNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TotalSeats", "totalSeatsAttr", "TotalSeats", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_VehicleItemInfoRec.init();
return PostHostSurvey_VehicleItemInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemInfoRec = PostHostSurvey_VehicleItemInfoRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_VehicleItemInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_VehicleItemInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_VehicleItemInfoList = (function (_super) {
__extends(PostHostSurvey_VehicleItemInfoList, _super);
function PostHostSurvey_VehicleItemInfoList(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_VehicleItemInfoList.itemType = Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemInfoRec;
return PostHostSurvey_VehicleItemInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemInfoList = PostHostSurvey_VehicleItemInfoList;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurvey_VehicleItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_VehicleItemInfoList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurvey_VehicleItemRec = (function (_super) {
__extends(PostHostSurvey_VehicleItemRec, _super);
function PostHostSurvey_VehicleItemRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurvey_VehicleItemRec.attributesToDeclare = function () {
return [
this.attr("HasVehicles", "hasVehiclesAttr", "HasVehicles", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("VehicleItemInfo", "vehicleItemInfoAttr", "VehicleItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemInfoList());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemInfoList)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurvey_VehicleItemRec.init();
return PostHostSurvey_VehicleItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemRec = PostHostSurvey_VehicleItemRec;

});
define("Connect2_OrbitMobile_IS.model$PostHostSurveyResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PostHostSurvey_InfoRec", "Connect2_OrbitMobile_IS.model$PostHostSurvey_RoomInfoRec", "Connect2_OrbitMobile_IS.model$PostHostSurvey_MealItemRec", "Connect2_OrbitMobile_IS.model$PostHostSurvey_HelperItemRec", "Connect2_OrbitMobile_IS.model$PostHostSurvey_VehicleItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PostHostSurveyResponseRec = (function (_super) {
__extends(PostHostSurveyResponseRec, _super);
function PostHostSurveyResponseRec(defaults) {
_super.apply(this, arguments);
}
PostHostSurveyResponseRec.attributesToDeclare = function () {
return [
this.attr("SurveyInfo", "surveyInfoAttr", "SurveyInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_InfoRec());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_InfoRec), 
this.attr("Rooms", "roomsAttr", "Rooms", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomInfoRec());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_RoomInfoRec), 
this.attr("Meals", "mealsAttr", "Meals", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemRec());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_MealItemRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemRec());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_HelperItemRec), 
this.attr("Vehicles", "vehiclesAttr", "Vehicles", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemRec());
}, true, Connect2_OrbitMobile_ISModel.PostHostSurvey_VehicleItemRec)
].concat(_super.attributesToDeclare.call(this));
};
PostHostSurveyResponseRec.init();
return PostHostSurveyResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PostHostSurveyResponseRec = PostHostSurveyResponseRec;

});
define("Connect2_OrbitMobile_IS.model$HostInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostInformationRec = (function (_super) {
__extends(HostInformationRec, _super);
function HostInformationRec(defaults) {
_super.apply(this, arguments);
}
HostInformationRec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdName", "householdNameAttr", "HouseholdName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdSurname", "householdSurnameAttr", "HouseholdSurname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPhotoURL", "signedPhotoURLAttr", "SignedPhotoURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostInformationRec.init();
return HostInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostInformationRec = HostInformationRec;

});
define("Connect2_OrbitMobile_IS.model$GetMealGuestResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$HelperItemList", "Connect2_OrbitMobile_IS.model$GuestItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetMealGuestResponseRec = (function (_super) {
__extends(GetMealGuestResponseRec, _super);
function GetMealGuestResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMealGuestResponseRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("HostInformation", "hostInformationAttr", "HostInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostInformationRec());
}, true, Connect2_OrbitMobile_ISModel.HostInformationRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GuestItemList());
}, true, Connect2_OrbitMobile_ISModel.GuestItemList), 
this.attr("Meals", "mealsAttr", "Meals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SetUpMeals", "setUpMealsAttr", "SetUpMeals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetMealGuestResponseRec.init();
return GetMealGuestResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetMealGuestResponseRec = GetMealGuestResponseRec;

});
define("Connect2_OrbitMobile_IS.model$MilestoneTransportInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MilestoneTransportInfoRec = (function (_super) {
__extends(MilestoneTransportInfoRec, _super);
function MilestoneTransportInfoRec(defaults) {
_super.apply(this, arguments);
}
MilestoneTransportInfoRec.attributesToDeclare = function () {
return [
this.attr("DepartureLocation", "departureLocationAttr", "DepartureLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ArrivalLocation", "arrivalLocationAttr", "ArrivalLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneStartDateTime", "milestoneStartDateTimeAttr", "MilestoneStartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneEndDateTime", "milestoneEndDateTimeAttr", "MilestoneEndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MilestoneTransportInfoRec.init();
return MilestoneTransportInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MilestoneTransportInfoRec = MilestoneTransportInfoRec;

});
define("Connect2_OrbitMobile_IS.model$MilestoneTransportRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MilestoneTransportInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MilestoneTransportRec = (function (_super) {
__extends(MilestoneTransportRec, _super);
function MilestoneTransportRec(defaults) {
_super.apply(this, arguments);
}
MilestoneTransportRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "SequenceNo", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TravelIdentifier", "travelIdentifierAttr", "TravelIdentifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneInfo", "milestoneInfoAttr", "MilestoneInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneTransportInfoRec());
}, true, Connect2_OrbitMobile_ISModel.MilestoneTransportInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
MilestoneTransportRec.init();
return MilestoneTransportRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MilestoneTransportRec = MilestoneTransportRec;

});
define("Connect2_OrbitMobile_IS.model$TransportLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var TransportLocationRec = (function (_super) {
__extends(TransportLocationRec, _super);
function TransportLocationRec(defaults) {
_super.apply(this, arguments);
}
TransportLocationRec.attributesToDeclare = function () {
return [
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Terminal", "terminalAttr", "Terminal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TransportLocationRec.init();
return TransportLocationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.TransportLocationRec = TransportLocationRec;

});
define("Connect2_OrbitMobile_IS.model$TravelInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var TravelInfoRec = (function (_super) {
__extends(TravelInfoRec, _super);
function TravelInfoRec(defaults) {
_super.apply(this, arguments);
}
TravelInfoRec.attributesToDeclare = function () {
return [
this.attr("CodeShareFlight", "codeShareFlightAttr", "CodeShareFlight", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CodeShareName", "codeShareNameAttr", "CodeShareName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DriverName", "driverNameAttr", "DriverName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleName", "vehicleNameAttr", "VehicleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BookingReference", "bookingReferenceAttr", "BookingReference", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FareType", "fareTypeAttr", "FareType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OnboardMeal", "onboardMealAttr", "OnboardMeal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Class", "classAttr", "Class", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TravelInfoRec.init();
return TravelInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.TravelInfoRec = TravelInfoRec;

});
define("Connect2_OrbitMobile_IS.model$TripDurationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var TripDurationRec = (function (_super) {
__extends(TripDurationRec, _super);
function TripDurationRec(defaults) {
_super.apply(this, arguments);
}
TripDurationRec.attributesToDeclare = function () {
return [
this.attr("TripDurationHours", "tripDurationHoursAttr", "TripDurationHours", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TripDurationMinutes", "tripDurationMinutesAttr", "TripDurationMinutes", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TripDurationRec.init();
return TripDurationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.TripDurationRec = TripDurationRec;

});
define("Connect2_OrbitMobile_IS.model$StopItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$TransportLocationRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var StopItemRec = (function (_super) {
__extends(StopItemRec, _super);
function StopItemRec(defaults) {
_super.apply(this, arguments);
}
StopItemRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StopDurationTime", "stopDurationTimeAttr", "StopDurationTime", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ArrivalLocation", "arrivalLocationAttr", "ArrivalLocation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TransportLocationRec());
}, true, Connect2_OrbitMobile_ISModel.TransportLocationRec), 
this.attr("DepartureLocation", "departureLocationAttr", "DepartureLocation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TransportLocationRec());
}, true, Connect2_OrbitMobile_ISModel.TransportLocationRec)
].concat(_super.attributesToDeclare.call(this));
};
StopItemRec.init();
return StopItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.StopItemRec = StopItemRec;

});
define("Connect2_OrbitMobile_IS.model$StopItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$StopItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var StopItemList = (function (_super) {
__extends(StopItemList, _super);
function StopItemList(defaults) {
_super.apply(this, arguments);
}
StopItemList.itemType = Connect2_OrbitMobile_ISModel.StopItemRec;
return StopItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.StopItemList = StopItemList;

});
define("Connect2_OrbitMobile_IS.model$SeatItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SeatItemRec = (function (_super) {
__extends(SeatItemRec, _super);
function SeatItemRec(defaults) {
_super.apply(this, arguments);
}
SeatItemRec.attributesToDeclare = function () {
return [
this.attr("Departure", "departureAttr", "Departure", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Arrival", "arrivalAttr", "Arrival", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeatNumber", "seatNumberAttr", "SeatNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeatItemRec.init();
return SeatItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SeatItemRec = SeatItemRec;

});
define("Connect2_OrbitMobile_IS.model$SeatItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SeatItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SeatItemList = (function (_super) {
__extends(SeatItemList, _super);
function SeatItemList(defaults) {
_super.apply(this, arguments);
}
SeatItemList.itemType = Connect2_OrbitMobile_ISModel.SeatItemRec;
return SeatItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.SeatItemList = SeatItemList;

});
define("Connect2_OrbitMobile_IS.model$BaggageAllowanceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var BaggageAllowanceRec = (function (_super) {
__extends(BaggageAllowanceRec, _super);
function BaggageAllowanceRec(defaults) {
_super.apply(this, arguments);
}
BaggageAllowanceRec.attributesToDeclare = function () {
return [
this.attr("CarryOnBaggage", "carryOnBaggageAttr", "CarryOnBaggage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CheckedBaggage", "checkedBaggageAttr", "CheckedBaggage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BaggageAllowanceRec.init();
return BaggageAllowanceRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.BaggageAllowanceRec = BaggageAllowanceRec;

});
define("Connect2_OrbitMobile_IS.model$GetTransportDetail_ResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$TransportLocationRec", "Connect2_OrbitMobile_IS.model$TravelInfoRec", "Connect2_OrbitMobile_IS.model$TripDurationRec", "Connect2_OrbitMobile_IS.model$StopItemList", "Connect2_OrbitMobile_IS.model$SeatItemList", "Connect2_OrbitMobile_IS.model$BaggageAllowanceRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetTransportDetail_ResponseRec = (function (_super) {
__extends(GetTransportDetail_ResponseRec, _super);
function GetTransportDetail_ResponseRec(defaults) {
_super.apply(this, arguments);
}
GetTransportDetail_ResponseRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Operator", "operatorAttr", "Operator", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TransportType", "transportTypeAttr", "TransportType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TravelIdentifier", "travelIdentifierAttr", "TravelIdentifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DepartureLocation", "departureLocationAttr", "DepartureLocation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TransportLocationRec());
}, true, Connect2_OrbitMobile_ISModel.TransportLocationRec), 
this.attr("ArrivalLocation", "arrivalLocationAttr", "ArrivalLocation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TransportLocationRec());
}, true, Connect2_OrbitMobile_ISModel.TransportLocationRec), 
this.attr("TravelInfo", "travelInfoAttr", "TravelInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TravelInfoRec());
}, true, Connect2_OrbitMobile_ISModel.TravelInfoRec), 
this.attr("TripDuration", "tripDurationAttr", "TripDuration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TripDurationRec());
}, true, Connect2_OrbitMobile_ISModel.TripDurationRec), 
this.attr("Stops", "stopsAttr", "Stops", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.StopItemList());
}, true, Connect2_OrbitMobile_ISModel.StopItemList), 
this.attr("Seats", "seatsAttr", "Seats", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SeatItemList());
}, true, Connect2_OrbitMobile_ISModel.SeatItemList), 
this.attr("BaggageAllowance", "baggageAllowanceAttr", "BaggageAllowance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.BaggageAllowanceRec());
}, true, Connect2_OrbitMobile_ISModel.BaggageAllowanceRec)
].concat(_super.attributesToDeclare.call(this));
};
GetTransportDetail_ResponseRec.init();
return GetTransportDetail_ResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetTransportDetail_ResponseRec = GetTransportDetail_ResponseRec;

});
define("Connect2_OrbitMobile_IS.model$Timezone_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var Timezone_V2Rec = (function (_super) {
__extends(Timezone_V2Rec, _super);
function Timezone_V2Rec(defaults) {
_super.apply(this, arguments);
}
Timezone_V2Rec.attributesToDeclare = function () {
return [
this.attr("TimezoneLabel", "timezoneLabelAttr", "TimezoneLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OffsetSeconds", "offsetSecondsAttr", "OffsetSeconds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Timezone_V2Rec.init();
return Timezone_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.Timezone_V2Rec = Timezone_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$DetailGuestItem_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$Timezone_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var DetailGuestItem_V2Rec = (function (_super) {
__extends(DetailGuestItem_V2Rec, _super);
function DetailGuestItem_V2Rec(defaults) {
_super.apply(this, arguments);
}
DetailGuestItem_V2Rec.attributesToDeclare = function () {
return [
this.attr("EventGuestID", "eventGuestIDAttr", "EventGuestID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderID", "householderIDAttr", "HouseholderID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "CdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resize340CdnPath", "resize340CdnPathAttr", "Resize340CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NonAttending", "nonAttendingAttr", "NonAttending", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Including", "includingAttr", "Including", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Adults", "adultsAttr", "Adults", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Children", "childrenAttr", "Children", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.Timezone_V2Rec());
}, true, Connect2_OrbitMobile_ISModel.Timezone_V2Rec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderSignedImagePath", "householderSignedImagePathAttr", "HouseholderSignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderFirstName", "householderFirstNameAttr", "HouseholderFirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DetailGuestItem_V2Rec.init();
return DetailGuestItem_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.DetailGuestItem_V2Rec = DetailGuestItem_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$StatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var StatusRec = (function (_super) {
__extends(StatusRec, _super);
function StatusRec(defaults) {
_super.apply(this, arguments);
}
StatusRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StatusRec.init();
return StatusRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.StatusRec = StatusRec;

});
define("Connect2_OrbitMobile_IS.model$RoomInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var RoomInformationRec = (function (_super) {
__extends(RoomInformationRec, _super);
function RoomInformationRec(defaults) {
_super.apply(this, arguments);
}
RoomInformationRec.attributesToDeclare = function () {
return [
this.attr("Floor", "floorAttr", "Floor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Beds", "bedsAttr", "Beds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RoomInformationRec.init();
return RoomInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.RoomInformationRec = RoomInformationRec;

});
define("Connect2_OrbitMobile_IS.model$RoomItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$RoomInformationRec", "Connect2_OrbitMobile_IS.model$GuestItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var RoomItemRec = (function (_super) {
__extends(RoomItemRec, _super);
function RoomItemRec(defaults) {
_super.apply(this, arguments);
}
RoomItemRec.attributesToDeclare = function () {
return [
this.attr("RoomId", "roomIdAttr", "RoomId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RoomName", "roomNameAttr", "RoomName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RoomInformation", "roomInformationAttr", "RoomInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.RoomInformationRec());
}, true, Connect2_OrbitMobile_ISModel.RoomInformationRec), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GuestItemList());
}, true, Connect2_OrbitMobile_ISModel.GuestItemList)
].concat(_super.attributesToDeclare.call(this));
};
RoomItemRec.init();
return RoomItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.RoomItemRec = RoomItemRec;

});
define("Connect2_OrbitMobile_IS.model$RoomItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$RoomItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var RoomItemList = (function (_super) {
__extends(RoomItemList, _super);
function RoomItemList(defaults) {
_super.apply(this, arguments);
}
RoomItemList.itemType = Connect2_OrbitMobile_ISModel.RoomItemRec;
return RoomItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.RoomItemList = RoomItemList;

});
define("Connect2_OrbitMobile_IS.model$AccommodationHelperRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$HelperItemList", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemList", "Connect2_OrbitMobile_IS.model$RoomItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AccommodationHelperRec = (function (_super) {
__extends(AccommodationHelperRec, _super);
function AccommodationHelperRec(defaults) {
_super.apply(this, arguments);
}
AccommodationHelperRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("HostInformation", "hostInformationAttr", "HostInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostInformationRec());
}, true, Connect2_OrbitMobile_ISModel.HostInformationRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItemList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItemList), 
this.attr("Rooms", "roomsAttr", "Rooms", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.RoomItemList());
}, true, Connect2_OrbitMobile_ISModel.RoomItemList)
].concat(_super.attributesToDeclare.call(this));
};
AccommodationHelperRec.init();
return AccommodationHelperRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.AccommodationHelperRec = AccommodationHelperRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_HelperItemInfoRec = (function (_super) {
__extends(HostSurvey_HelperItemInfoRec, _super);
function HostSurvey_HelperItemInfoRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_HelperItemInfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HelperRole", "helperRoleAttr", "HelperRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelperStatus", "helperStatusAttr", "HelperStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_HelperItemInfoRec.init();
return HostSurvey_HelperItemInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec = HostSurvey_HelperItemInfoRec;

});
define("Connect2_OrbitMobile_IS.model$GuestPhotoItem_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GuestPhotoItem_V2Rec = (function (_super) {
__extends(GuestPhotoItem_V2Rec, _super);
function GuestPhotoItem_V2Rec(defaults) {
_super.apply(this, arguments);
}
GuestPhotoItem_V2Rec.attributesToDeclare = function () {
return [
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedImagePath", "signedImagePathAttr", "SignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GuestPhotoItem_V2Rec.init();
return GuestPhotoItem_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GuestPhotoItem_V2Rec = GuestPhotoItem_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$QRCodeStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var QRCodeStatusRec = (function (_super) {
__extends(QRCodeStatusRec, _super);
function QRCodeStatusRec(defaults) {
_super.apply(this, arguments);
}
QRCodeStatusRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "errorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
QRCodeStatusRec.init();
return QRCodeStatusRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.QRCodeStatusRec = QRCodeStatusRec;

});
define("Connect2_OrbitMobile_IS.model$QRCodeSeatItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var QRCodeSeatItemList = (function (_super) {
__extends(QRCodeSeatItemList, _super);
function QRCodeSeatItemList(defaults) {
_super.apply(this, arguments);
}
QRCodeSeatItemList.itemType = Connect2_OrbitMobile_ISModel.QRCodeSeatItemRec;
return QRCodeSeatItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.QRCodeSeatItemList = QRCodeSeatItemList;

});
define("Connect2_OrbitMobile_IS.model$GetScanEventQRCodeResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetScanEventQRCodeResponseRec = (function (_super) {
__extends(GetScanEventQRCodeResponseRec, _super);
function GetScanEventQRCodeResponseRec(defaults) {
_super.apply(this, arguments);
}
GetScanEventQRCodeResponseRec.attributesToDeclare = function () {
return [
this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeStatusRec());
}, true, Connect2_OrbitMobile_ISModel.QRCodeStatusRec), 
this.attr("UserRole", "userRoleAttr", "userRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Seats", "seatsAttr", "seats", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeSeatItemList());
}, true, Connect2_OrbitMobile_ISModel.QRCodeSeatItemList), 
this.attr("Tag", "tagAttr", "tag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestRole", "guestRoleAttr", "guestRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetScanEventQRCodeResponseRec.init();
return GetScanEventQRCodeResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetScanEventQRCodeResponseRec = GetScanEventQRCodeResponseRec;

});
define("Connect2_OrbitMobile_IS.model$BedItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var BedItemRec = (function (_super) {
__extends(BedItemRec, _super);
function BedItemRec(defaults) {
_super.apply(this, arguments);
}
BedItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BedItemRec.init();
return BedItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.BedItemRec = BedItemRec;

});
define("Connect2_OrbitMobile_IS.model$EventItem_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventItem_V2Rec = (function (_super) {
__extends(EventItem_V2Rec, _super);
function EventItem_V2Rec(defaults) {
_super.apply(this, arguments);
}
EventItem_V2Rec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HostLocality", "hostLocalityAttr", "HostLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostFullName", "hostFullNameAttr", "HostFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
this.attr("GuestCount", "guestCountAttr", "GuestCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventItem_V2Rec.init();
return EventItem_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventItem_V2Rec = EventItem_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetEventLocalitiesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventLocalitiesResponseRec = (function (_super) {
__extends(GetEventLocalitiesResponseRec, _super);
function GetEventLocalitiesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventLocalitiesResponseRec.attributesToDeclare = function () {
return [
this.attr("LocalityID", "localityIDAttr", "LocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetEventLocalitiesResponseRec.init();
return GetEventLocalitiesResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventLocalitiesResponseRec = GetEventLocalitiesResponseRec;

});
define("Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
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
Connect2_OrbitMobile_ISModel.GetTimezoneResponseRec = GetTimezoneResponseRec;

});
define("Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var CalendarGuestItemRec = (function (_super) {
__extends(CalendarGuestItemRec, _super);
function CalendarGuestItemRec(defaults) {
_super.apply(this, arguments);
}
CalendarGuestItemRec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventGuestId", "eventGuestIdAttr", "EventGuestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedImagePath", "signedImagePathAttr", "SignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeZone", "timeZoneAttr", "TimeZone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetTimezoneResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetTimezoneResponseRec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderSignedImagePath", "householderSignedImagePathAttr", "HouseholderSignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderFirstName", "householderFirstNameAttr", "HouseholderFirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CalendarGuestItemRec.init();
return CalendarGuestItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.CalendarGuestItemRec = CalendarGuestItemRec;

});
define("Connect2_OrbitMobile_IS.model$EventDocumentItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventDocumentItemRec = (function (_super) {
__extends(EventDocumentItemRec, _super);
function EventDocumentItemRec(defaults) {
_super.apply(this, arguments);
}
EventDocumentItemRec.attributesToDeclare = function () {
return [
this.attr("DocumentURL", "documentURLAttr", "documentURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DocumentName", "documentNameAttr", "documentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "lastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "lastUpdatedBy", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventDocumentItemRec.init();
return EventDocumentItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventDocumentItemRec = EventDocumentItemRec;

});
define("Connect2_OrbitMobile_IS.model$EventDocumentItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDocumentItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventDocumentItemList = (function (_super) {
__extends(EventDocumentItemList, _super);
function EventDocumentItemList(defaults) {
_super.apply(this, arguments);
}
EventDocumentItemList.itemType = Connect2_OrbitMobile_ISModel.EventDocumentItemRec;
return EventDocumentItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.EventDocumentItemList = EventDocumentItemList;

});
define("Connect2_OrbitMobile_IS.model$GetEventDocumentsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDocumentItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventDocumentsResponseRec = (function (_super) {
__extends(GetEventDocumentsResponseRec, _super);
function GetEventDocumentsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventDocumentsResponseRec.attributesToDeclare = function () {
return [
this.attr("EventDocuments", "eventDocumentsAttr", "EventDocuments", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDocumentItemList());
}, true, Connect2_OrbitMobile_ISModel.EventDocumentItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetEventDocumentsResponseRec.fromStructure = function (str) {
return new GetEventDocumentsResponseRec(new GetEventDocumentsResponseRec.RecordClass({
eventDocumentsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetEventDocumentsResponseRec.init();
return GetEventDocumentsResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventDocumentsResponseRec = GetEventDocumentsResponseRec;

});
define("Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetTimezoneResponse_V2Rec = (function (_super) {
__extends(GetTimezoneResponse_V2Rec, _super);
function GetTimezoneResponse_V2Rec(defaults) {
_super.apply(this, arguments);
}
GetTimezoneResponse_V2Rec.attributesToDeclare = function () {
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
GetTimezoneResponse_V2Rec.init();
return GetTimezoneResponse_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetTimezoneResponse_V2Rec = GetTimezoneResponse_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$CalendarGuestItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var CalendarGuestItemList = (function (_super) {
__extends(CalendarGuestItemList, _super);
function CalendarGuestItemList(defaults) {
_super.apply(this, arguments);
}
CalendarGuestItemList.itemType = Connect2_OrbitMobile_ISModel.CalendarGuestItemRec;
return CalendarGuestItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.CalendarGuestItemList = CalendarGuestItemList;

});
define("Connect2_OrbitMobile_IS.model$EventCalendarRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$CalendarGuestItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventCalendarRec = (function (_super) {
__extends(EventCalendarRec, _super);
function EventCalendarRec(defaults) {
_super.apply(this, arguments);
}
EventCalendarRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventLocalityId", "eventLocalityIdAttr", "EventLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestCount", "guestCountAttr", "GuestCount", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostId", "hostIdAttr", "HostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HostFullName", "hostFullNameAttr", "HostFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostLocality", "hostLocalityAttr", "HostLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Hosting", "hostingAttr", "Hosting", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.CalendarGuestItemList());
}, true, Connect2_OrbitMobile_ISModel.CalendarGuestItemList)
].concat(_super.attributesToDeclare.call(this));
};
EventCalendarRec.init();
return EventCalendarRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventCalendarRec = EventCalendarRec;

});
define("Connect2_OrbitMobile_IS.model$SessionItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SessionItemRec = (function (_super) {
__extends(SessionItemRec, _super);
function SessionItemRec(defaults) {
_super.apply(this, arguments);
}
SessionItemRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "milestoneId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneRef", "milestoneRefAttr", "milestoneRef", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneName", "milestoneNameAttr", "milestoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "milestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDate", "eventDateAttr", "eventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("StartDate", "startDateAttr", "startDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDate", "endDateAttr", "endDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsEligible", "isEligibleAttr", "isEligible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsCheckedIn", "isCheckedInAttr", "isCheckedIn", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastCheckInUTC", "lastCheckInUTCAttr", "lastCheckInUTC", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastCheckInLocal", "lastCheckInLocalAttr", "lastCheckInLocal", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("RowAllocation", "rowAllocationAttr", "rowAllocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeatingPlanName", "seatingPlanNameAttr", "seatingPlanName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeRegistered", "isDeRegisteredAttr", "isDeRegistered", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SessionItemRec.init();
return SessionItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SessionItemRec = SessionItemRec;

});
define("Connect2_OrbitMobile_IS.model$PriorCheckInItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PriorCheckInItemRec = (function (_super) {
__extends(PriorCheckInItemRec, _super);
function PriorCheckInItemRec(defaults) {
_super.apply(this, arguments);
}
PriorCheckInItemRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "milestoneId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneRef", "milestoneRefAttr", "milestoneRef", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneName", "milestoneNameAttr", "milestoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CheckInDateTimeUTC", "checkInDateTimeUTCAttr", "checkInDateTimeUTC", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PriorCheckInItemRec.init();
return PriorCheckInItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.PriorCheckInItemRec = PriorCheckInItemRec;

});
define("Connect2_OrbitMobile_IS.model$PriorCheckInItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$PriorCheckInItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var PriorCheckInItemList = (function (_super) {
__extends(PriorCheckInItemList, _super);
function PriorCheckInItemList(defaults) {
_super.apply(this, arguments);
}
PriorCheckInItemList.itemType = Connect2_OrbitMobile_ISModel.PriorCheckInItemRec;
return PriorCheckInItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.PriorCheckInItemList = PriorCheckInItemList;

});
define("Connect2_OrbitMobile_IS.model$GetScanMilestoneQRCodeResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_IS.model$PriorCheckInItemList", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetScanMilestoneQRCodeResponseRec = (function (_super) {
__extends(GetScanMilestoneQRCodeResponseRec, _super);
function GetScanMilestoneQRCodeResponseRec(defaults) {
_super.apply(this, arguments);
}
GetScanMilestoneQRCodeResponseRec.attributesToDeclare = function () {
return [
this.attr("Status", "statusAttr", "status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeStatusRec());
}, true, Connect2_OrbitMobile_ISModel.QRCodeStatusRec), 
this.attr("Result", "resultAttr", "result", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "memberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventId", "eventIdAttr", "eventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneId", "milestoneIdAttr", "milestoneId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneRef", "milestoneRefAttr", "milestoneRef", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneName", "milestoneNameAttr", "milestoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RowAllocation", "rowAllocationAttr", "rowAllocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeatingPlanName", "seatingPlanNameAttr", "seatingPlanName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PriorCheckIns", "priorCheckInsAttr", "priorCheckIns", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.PriorCheckInItemList());
}, true, Connect2_OrbitMobile_ISModel.PriorCheckInItemList), 
this.attr("UserRole", "userRoleAttr", "userRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestRole", "guestRoleAttr", "guestRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tag", "tagAttr", "tag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Seats", "seatsAttr", "seats", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeSeatItemList());
}, true, Connect2_OrbitMobile_ISModel.QRCodeSeatItemList), 
this.attr("ScanDate", "scanDateAttr", "scanDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetScanMilestoneQRCodeResponseRec.init();
return GetScanMilestoneQRCodeResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetScanMilestoneQRCodeResponseRec = GetScanMilestoneQRCodeResponseRec;

});
define("Connect2_OrbitMobile_IS.model$TimezoneRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
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
Connect2_OrbitMobile_ISModel.TimezoneRec = TimezoneRec;

});
define("Connect2_OrbitMobile_IS.model$DetailGuestItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$TimezoneRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var DetailGuestItemRec = (function (_super) {
__extends(DetailGuestItemRec, _super);
function DetailGuestItemRec(defaults) {
_super.apply(this, arguments);
}
DetailGuestItemRec.attributesToDeclare = function () {
return [
this.attr("EventGuestID", "eventGuestIDAttr", "EventGuestID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderID", "householderIDAttr", "HouseholderID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "CdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resize340CdnPath", "resize340CdnPathAttr", "Resize340CdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NonAttending", "nonAttendingAttr", "NonAttending", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Including", "includingAttr", "Including", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Adults", "adultsAttr", "Adults", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Children", "childrenAttr", "Children", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TimezoneRec());
}, true, Connect2_OrbitMobile_ISModel.TimezoneRec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderSignedImagePath", "householderSignedImagePathAttr", "HouseholderSignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderFirstName", "householderFirstNameAttr", "HouseholderFirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DetailGuestItemRec.init();
return DetailGuestItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.DetailGuestItemRec = DetailGuestItemRec;

});
define("Connect2_OrbitMobile_IS.model$EventInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventInfoRec = (function (_super) {
__extends(EventInfoRec, _super);
function EventInfoRec(defaults) {
_super.apply(this, arguments);
}
EventInfoRec.attributesToDeclare = function () {
return [
this.attr("StartEventDate", "startEventDateAttr", "StartEventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndEventDate", "endEventDateAttr", "EndEventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventLocation", "eventLocationAttr", "EventLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventInfoRec.init();
return EventInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventInfoRec = EventInfoRec;

});
define("Connect2_OrbitMobile_IS.model$AdminOrbitSummaryItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AdminOrbitSummaryItemRec = (function (_super) {
__extends(AdminOrbitSummaryItemRec, _super);
function AdminOrbitSummaryItemRec(defaults) {
_super.apply(this, arguments);
}
AdminOrbitSummaryItemRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeFriendly", "typeFriendlyAttr", "TypeFriendly", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "SequenceNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventInfo", "eventInfoAttr", "EventInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventInfoRec());
}, true, Connect2_OrbitMobile_ISModel.EventInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
AdminOrbitSummaryItemRec.init();
return AdminOrbitSummaryItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemRec = AdminOrbitSummaryItemRec;

});
define("Connect2_OrbitMobile_IS.model$AdminOrbitSummaryItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$AdminOrbitSummaryItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AdminOrbitSummaryItemList = (function (_super) {
__extends(AdminOrbitSummaryItemList, _super);
function AdminOrbitSummaryItemList(defaults) {
_super.apply(this, arguments);
}
AdminOrbitSummaryItemList.itemType = Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemRec;
return AdminOrbitSummaryItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemList = AdminOrbitSummaryItemList;

});
define("Connect2_OrbitMobile_IS.model$AdminEventsListRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$AdminOrbitSummaryItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AdminEventsListRec = (function (_super) {
__extends(AdminEventsListRec, _super);
function AdminEventsListRec(defaults) {
_super.apply(this, arguments);
}
AdminEventsListRec.attributesToDeclare = function () {
return [
this.attr("OrbitSummaryItems", "orbitSummaryItemsAttr", "AdminOrbitEvents", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemList());
}, true, Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemList)
].concat(_super.attributesToDeclare.call(this));
};
AdminEventsListRec.fromStructure = function (str) {
return new AdminEventsListRec(new AdminEventsListRec.RecordClass({
orbitSummaryItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdminEventsListRec.init();
return AdminEventsListRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.AdminEventsListRec = AdminEventsListRec;

});
define("Connect2_OrbitMobile_IS.model$OrbitSurveyHelperRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var OrbitSurveyHelperRec = (function (_super) {
__extends(OrbitSurveyHelperRec, _super);
function OrbitSurveyHelperRec(defaults) {
_super.apply(this, arguments);
}
OrbitSurveyHelperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Surname", "surnameAttr", "Surname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Age", "ageAttr", "Age", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrbitSurveyHelperRec.init();
return OrbitSurveyHelperRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.OrbitSurveyHelperRec = OrbitSurveyHelperRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_VehicleItemInfoRec = (function (_super) {
__extends(HostSurvey_VehicleItemInfoRec, _super);
function HostSurvey_VehicleItemInfoRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_VehicleItemInfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("VehicleId", "vehicleIdAttr", "VehicleId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OwnerType", "ownerTypeAttr", "OwnerType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleType", "vehicleTypeAttr", "VehicleType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleMakeAndModel", "vehicleMakeAndModelAttr", "VehicleMakeAndModel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegistrationNumber", "registrationNumberAttr", "RegistrationNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TotalSeats", "totalSeatsAttr", "TotalSeats", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_VehicleItemInfoRec.init();
return HostSurvey_VehicleItemInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec = HostSurvey_VehicleItemInfoRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_VehicleItemInfoList = (function (_super) {
__extends(HostSurvey_VehicleItemInfoList, _super);
function HostSurvey_VehicleItemInfoList(defaults) {
_super.apply(this, arguments);
}
HostSurvey_VehicleItemInfoList.itemType = Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec;
return HostSurvey_VehicleItemInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoList = HostSurvey_VehicleItemInfoList;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_VehicleItemRec = (function (_super) {
__extends(HostSurvey_VehicleItemRec, _super);
function HostSurvey_VehicleItemRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_VehicleItemRec.attributesToDeclare = function () {
return [
this.attr("HasVehicles", "hasVehiclesAttr", "HasVehicles", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("VehicleItemInfo", "vehicleItemInfoAttr", "VehicleItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoList());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoList)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_VehicleItemRec.init();
return HostSurvey_VehicleItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemRec = HostSurvey_VehicleItemRec;

});
define("Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var CalendarGuestItem_V2Rec = (function (_super) {
__extends(CalendarGuestItem_V2Rec, _super);
function CalendarGuestItem_V2Rec(defaults) {
_super.apply(this, arguments);
}
CalendarGuestItem_V2Rec.attributesToDeclare = function () {
return [
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventGuestId", "eventGuestIdAttr", "EventGuestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedImagePath", "signedImagePathAttr", "SignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeZone", "timeZoneAttr", "TimeZone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetTimezoneResponse_V2Rec());
}, true, Connect2_OrbitMobile_ISModel.GetTimezoneResponse_V2Rec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderSignedImagePath", "householderSignedImagePathAttr", "HouseholderSignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderFirstName", "householderFirstNameAttr", "HouseholderFirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CalendarGuestItem_V2Rec.init();
return CalendarGuestItem_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.CalendarGuestItem_V2Rec = CalendarGuestItem_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetEventQRCodeResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventQRCodeResponseRec = (function (_super) {
__extends(GetEventQRCodeResponseRec, _super);
function GetEventQRCodeResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventQRCodeResponseRec.attributesToDeclare = function () {
return [
this.attr("QrCodeImage", "qrCodeImageAttr", "qrCodeImage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Seats", "seatsAttr", "seats", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeSeatItemList());
}, true, Connect2_OrbitMobile_ISModel.QRCodeSeatItemList), 
this.attr("Tag", "tagAttr", "tag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestRole", "guestRoleAttr", "guestRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetEventQRCodeResponseRec.init();
return GetEventQRCodeResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventQRCodeResponseRec = GetEventQRCodeResponseRec;

});
define("Connect2_OrbitMobile_IS.model$MealDetailItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MealDetailItemRec = (function (_super) {
__extends(MealDetailItemRec, _super);
function MealDetailItemRec(defaults) {
_super.apply(this, arguments);
}
MealDetailItemRec.attributesToDeclare = function () {
return [
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MiddayMeal", "middayMealAttr", "MiddayMeal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EveningMeal", "eveningMealAttr", "EveningMeal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MealDetailItemRec.init();
return MealDetailItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MealDetailItemRec = MealDetailItemRec;

});
define("Connect2_OrbitMobile_IS.model$MealDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MealDetailItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MealDetailItemList = (function (_super) {
__extends(MealDetailItemList, _super);
function MealDetailItemList(defaults) {
_super.apply(this, arguments);
}
MealDetailItemList.itemType = Connect2_OrbitMobile_ISModel.MealDetailItemRec;
return MealDetailItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.MealDetailItemList = MealDetailItemList;

});
define("Connect2_OrbitMobile_IS.model$MilestoneTransportList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MilestoneTransportRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MilestoneTransportList = (function (_super) {
__extends(MilestoneTransportList, _super);
function MilestoneTransportList(defaults) {
_super.apply(this, arguments);
}
MilestoneTransportList.itemType = Connect2_OrbitMobile_ISModel.MilestoneTransportRec;
return MilestoneTransportList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.MilestoneTransportList = MilestoneTransportList;

});
define("Connect2_OrbitMobile_IS.model$GetGuestArrangementsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemList", "Connect2_OrbitMobile_IS.model$MealDetailItemList", "Connect2_OrbitMobile_IS.model$MilestoneTransportList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetGuestArrangementsResponseRec = (function (_super) {
__extends(GetGuestArrangementsResponseRec, _super);
function GetGuestArrangementsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetGuestArrangementsResponseRec.attributesToDeclare = function () {
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
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItemList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItemList), 
this.attr("MealDetails", "mealDetailsAttr", "MealDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MealDetailItemList());
}, true, Connect2_OrbitMobile_ISModel.MealDetailItemList), 
this.attr("ArrivalDetails", "arrivalDetailsAttr", "ArrivalDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneTransportList());
}, true, Connect2_OrbitMobile_ISModel.MilestoneTransportList), 
this.attr("DepartureDetails", "departureDetailsAttr", "DepartureDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneTransportList());
}, true, Connect2_OrbitMobile_ISModel.MilestoneTransportList)
].concat(_super.attributesToDeclare.call(this));
};
GetGuestArrangementsResponseRec.init();
return GetGuestArrangementsResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetGuestArrangementsResponseRec = GetGuestArrangementsResponseRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDMRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItem_LDMRec = (function (_super) {
__extends(SpecialNeedsItem_LDMRec, _super);
function SpecialNeedsItem_LDMRec(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItem_LDMRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Memberid", "memberidAttr", "Memberid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Eventid", "eventidAttr", "Eventid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Eventguestid", "eventguestidAttr", "eventguestid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "cdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "cdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedUrl", "signedUrlAttr", "SignedUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpecialNeedsItem_LDMRec.init();
return SpecialNeedsItem_LDMRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMRec = SpecialNeedsItem_LDMRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDMList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDMRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItem_LDMList = (function (_super) {
__extends(SpecialNeedsItem_LDMList, _super);
function SpecialNeedsItem_LDMList(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItem_LDMList.itemType = Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMRec;
return SpecialNeedsItem_LDMList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList = SpecialNeedsItem_LDMList;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeeds_LDMRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDMList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeeds_LDMRec = (function (_super) {
__extends(SpecialNeeds_LDMRec, _super);
function SpecialNeeds_LDMRec(defaults) {
_super.apply(this, arguments);
}
SpecialNeeds_LDMRec.attributesToDeclare = function () {
return [
this.attr("Mobility", "mobilityAttr", "Mobility", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList), 
this.attr("Diet", "dietAttr", "Diet", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDMList)
].concat(_super.attributesToDeclare.call(this));
};
SpecialNeeds_LDMRec.init();
return SpecialNeeds_LDMRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SpecialNeeds_LDMRec = SpecialNeeds_LDMRec;

});
define("Connect2_OrbitMobile_IS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.LongIntegerList = LongIntegerList;

});
define("Connect2_OrbitMobile_IS.model$EventCalendarFiltersRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventCalendarFiltersRec = (function (_super) {
__extends(EventCalendarFiltersRec, _super);
function EventCalendarFiltersRec(defaults) {
_super.apply(this, arguments);
}
EventCalendarFiltersRec.attributesToDeclare = function () {
return [
this.attr("Localities", "localitiesAttr", "localities", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("FromDate", "fromDateAttr", "from", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ToDate", "toDateAttr", "to", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventCalendarFiltersRec.init();
return EventCalendarFiltersRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventCalendarFiltersRec = EventCalendarFiltersRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_InfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_InfoRec = (function (_super) {
__extends(HostSurvey_InfoRec, _super);
function HostSurvey_InfoRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_InfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventStartDateTime", "eventStartDateTimeAttr", "EventStartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventEndDateTime", "eventEndDateTimeAttr", "EventEndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostProfileSurveyStatus", "hostProfileSurveyStatusAttr", "HostProfileSurveyStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccommodationSurvey", "accommodationSurveyAttr", "AccommodationSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MealSurvey", "mealSurveyAttr", "MealSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HelperSurvey", "helperSurveyAttr", "HelperSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("VehicleSurvey", "vehicleSurveyAttr", "VehicleSurvey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AccommodationSurveyUpdate", "accommodationSurveyUpdateAttr", "AccommodationSurveyUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MealSurveyUpdate", "mealSurveyUpdateAttr", "MealSurveyUpdate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HostSurveyNote", "hostSurveyNoteAttr", "HostSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccommodationSurveyNote", "accommodationSurveyNoteAttr", "AccommodationSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MealSurveyNote", "mealSurveyNoteAttr", "MealSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelperSurveyNote", "helperSurveyNoteAttr", "HelperSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VehicleSurveyNote", "vehicleSurveyNoteAttr", "VehicleSurveyNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_InfoRec.init();
return HostSurvey_InfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_InfoRec = HostSurvey_InfoRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDM_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItem_LDM_V2Rec = (function (_super) {
__extends(SpecialNeedsItem_LDM_V2Rec, _super);
function SpecialNeedsItem_LDM_V2Rec(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItem_LDM_V2Rec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Memberid", "memberidAttr", "Memberid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Eventid", "eventidAttr", "Eventid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Eventguestid", "eventguestidAttr", "eventguestid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnBucket", "cdnBucketAttr", "cdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CdnPath", "cdnPathAttr", "cdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedUrl", "signedUrlAttr", "SignedUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpecialNeedsItem_LDM_V2Rec.init();
return SpecialNeedsItem_LDM_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2Rec = SpecialNeedsItem_LDM_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_RoomItemRec = (function (_super) {
__extends(HostSurvey_RoomItemRec, _super);
function HostSurvey_RoomItemRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_RoomItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GenderPreference", "genderPreferenceAttr", "GenderPreference", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumberOfBeds", "numberOfBedsAttr", "NumberOfBeds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Floor", "floorAttr", "Floor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasBasin", "hasBasinAttr", "HasBasin", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasEnsuite", "hasEnsuiteAttr", "HasEnsuite", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasToilet", "hasToiletAttr", "HasToilet", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasShower", "hasShowerAttr", "HasShower", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RoomNote", "roomNoteAttr", "RoomNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Beds", "bedsAttr", "Beds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_RoomItemRec.init();
return HostSurvey_RoomItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec = HostSurvey_RoomItemRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurveyRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurveyRec = (function (_super) {
__extends(HostSurveyRec, _super);
function HostSurveyRec(defaults) {
_super.apply(this, arguments);
}
HostSurveyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurveyRec.init();
return HostSurveyRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurveyRec = HostSurveyRec;

});
define("Connect2_OrbitMobile_IS.model$EventItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventItemRec = (function (_super) {
__extends(EventItemRec, _super);
function EventItemRec(defaults) {
_super.apply(this, arguments);
}
EventItemRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HostLocality", "hostLocalityAttr", "HostLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostFullName", "hostFullNameAttr", "HostFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
this.attr("GuestCount", "guestCountAttr", "GuestCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventItemRec.init();
return EventItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventItemRec = EventItemRec;

});
define("Connect2_OrbitMobile_IS.model$GetCoordinatorDetailsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$TimezoneRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetCoordinatorDetailsResponseRec = (function (_super) {
__extends(GetCoordinatorDetailsResponseRec, _super);
function GetCoordinatorDetailsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetCoordinatorDetailsResponseRec.attributesToDeclare = function () {
return [
this.attr("CoordinatorName", "coordinatorNameAttr", "CoordinatorName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CoordinatorEmail", "coordinatorEmailAttr", "CoordinatorEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CoordinatorPhoneNumber", "coordinatorPhoneNumberAttr", "CoordinatorPhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LDMEventName", "lDMEventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TimezoneRec());
}, true, Connect2_OrbitMobile_ISModel.TimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCoordinatorDetailsResponseRec.init();
return GetCoordinatorDetailsResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetCoordinatorDetailsResponseRec = GetCoordinatorDetailsResponseRec;

});
define("Connect2_OrbitMobile_IS.model$GuestPhotoItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GuestPhotoItemRec = (function (_super) {
__extends(GuestPhotoItemRec, _super);
function GuestPhotoItemRec(defaults) {
_super.apply(this, arguments);
}
GuestPhotoItemRec.attributesToDeclare = function () {
return [
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedImagePath", "signedImagePathAttr", "SignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GuestPhotoItemRec.init();
return GuestPhotoItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GuestPhotoItemRec = GuestPhotoItemRec;

});
define("Connect2_OrbitMobile_IS.model$GetEventLocalitiesResponseList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$GetEventLocalitiesResponseRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventLocalitiesResponseList = (function (_super) {
__extends(GetEventLocalitiesResponseList, _super);
function GetEventLocalitiesResponseList(defaults) {
_super.apply(this, arguments);
}
GetEventLocalitiesResponseList.itemType = Connect2_OrbitMobile_ISModel.GetEventLocalitiesResponseRec;
return GetEventLocalitiesResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.GetEventLocalitiesResponseList = GetEventLocalitiesResponseList;

});
define("Connect2_OrbitMobile_IS.model$GetEventLocalitiesOutputRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$GetEventLocalitiesResponseList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventLocalitiesOutputRec = (function (_super) {
__extends(GetEventLocalitiesOutputRec, _super);
function GetEventLocalitiesOutputRec(defaults) {
_super.apply(this, arguments);
}
GetEventLocalitiesOutputRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GetEventLocalitiesResponse", "getEventLocalitiesResponseAttr", "GetEventLocalitiesResponse", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetEventLocalitiesResponseList());
}, true, Connect2_OrbitMobile_ISModel.GetEventLocalitiesResponseList)
].concat(_super.attributesToDeclare.call(this));
};
GetEventLocalitiesOutputRec.init();
return GetEventLocalitiesOutputRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventLocalitiesOutputRec = GetEventLocalitiesOutputRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_MealItemInfoRec = (function (_super) {
__extends(HostSurvey_MealItemInfoRec, _super);
function HostSurvey_MealItemInfoRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_MealItemInfoRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDescription", "milestoneDescriptionAttr", "MilestoneDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsPreferred", "isPreferredAttr", "IsPreferred", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ComfortableCapacity", "comfortableCapacityAttr", "ComfortableCapacity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StretchCapacity", "stretchCapacityAttr", "StretchCapacity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ResetMealData", "resetMealDataAttr", "ResetMealData", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "SequenceNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_MealItemInfoRec.init();
return HostSurvey_MealItemInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec = HostSurvey_MealItemInfoRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_MealItemInfoList = (function (_super) {
__extends(HostSurvey_MealItemInfoList, _super);
function HostSurvey_MealItemInfoList(defaults) {
_super.apply(this, arguments);
}
HostSurvey_MealItemInfoList.itemType = Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec;
return HostSurvey_MealItemInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoList = HostSurvey_MealItemInfoList;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_MealItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_MealItemRec = (function (_super) {
__extends(HostSurvey_MealItemRec, _super);
function HostSurvey_MealItemRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_MealItemRec.attributesToDeclare = function () {
return [
this.attr("MealNote", "mealNoteAttr", "MealNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MealItemInfo", "mealItemInfoAttr", "MealItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoList());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoList)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_MealItemRec.init();
return HostSurvey_MealItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_MealItemRec = HostSurvey_MealItemRec;

});
define("Connect2_OrbitMobile_IS.model$HostRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$TimezoneRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostRec = (function (_super) {
__extends(HostRec, _super);
function HostRec(defaults) {
_super.apply(this, arguments);
}
HostRec.attributesToDeclare = function () {
return [
this.attr("IsPublished", "isPublishedAttr", "IsPublished", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Hosting", "hostingAttr", "Hosting", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
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
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CDNbucket", "cDNbucketAttr", "CDNbucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CDNPath", "cDNPathAttr", "CDNPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventID", "eventIDAttr", "EventID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventLocalityID", "eventLocalityIDAttr", "EventLocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventLocalityName", "eventLocalityNameAttr", "EventLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HallPhotosCdnBucket", "hallPhotosCdnBucketAttr", "HallPhotosCdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HallphotosCdnPath", "hallphotosCdnPathAttr", "HallphotosCdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedHallPhoto", "signedHallPhotoAttr", "SignedHallPhoto", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallName", "mainHallNameAttr", "MainHallName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallFormattedAddress", "mainHallFormattedAddressAttr", "MainHallFormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallUseLatLong", "mainHallUseLatLongAttr", "MainHallUseLatLong", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MainHallLongititude", "mainHallLongititudeAttr", "MainHallLongititude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallLatitude", "mainHallLatitudeAttr", "MainHallLatitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrganiserName", "organiserNameAttr", "OrganiserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrganiserEmail", "organiserEmailAttr", "OrganiserEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Adults", "adultsAttr", "Adults", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Children", "childrenAttr", "Children", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.TimezoneRec());
}, true, Connect2_OrbitMobile_ISModel.TimezoneRec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderSignedImagePath", "householderSignedImagePathAttr", "HouseholderSignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostRec.init();
return HostRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostRec = HostRec;

});
define("Connect2_OrbitMobile_IS.model$GetAccomodationHostDocumentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetAccomodationHostDocumentRec = (function (_super) {
__extends(GetAccomodationHostDocumentRec, _super);
function GetAccomodationHostDocumentRec(defaults) {
_super.apply(this, arguments);
}
GetAccomodationHostDocumentRec.attributesToDeclare = function () {
return [
this.attr("DocumentURL", "documentURLAttr", "DocumentURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DocumentName", "documentNameAttr", "DocumentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetAccomodationHostDocumentRec.init();
return GetAccomodationHostDocumentRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetAccomodationHostDocumentRec = GetAccomodationHostDocumentRec;

});
define("Connect2_OrbitMobile_IS.model$Host_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$Timezone_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var Host_V2Rec = (function (_super) {
__extends(Host_V2Rec, _super);
function Host_V2Rec(defaults) {
_super.apply(this, arguments);
}
Host_V2Rec.attributesToDeclare = function () {
return [
this.attr("IsPublished", "isPublishedAttr", "IsPublished", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Hosting", "hostingAttr", "Hosting", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
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
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CDNbucket", "cDNbucketAttr", "CDNbucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CDNPath", "cDNPathAttr", "CDNPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventID", "eventIDAttr", "EventID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventLocalityID", "eventLocalityIDAttr", "EventLocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventLocalityName", "eventLocalityNameAttr", "EventLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HallPhotosCdnBucket", "hallPhotosCdnBucketAttr", "HallPhotosCdnBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HallphotosCdnPath", "hallphotosCdnPathAttr", "HallphotosCdnPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedHallPhoto", "signedHallPhotoAttr", "SignedHallPhoto", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallName", "mainHallNameAttr", "MainHallName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallFormattedAddress", "mainHallFormattedAddressAttr", "MainHallFormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallUseLatLong", "mainHallUseLatLongAttr", "MainHallUseLatLong", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MainHallLongititude", "mainHallLongititudeAttr", "MainHallLongititude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainHallLatitude", "mainHallLatitudeAttr", "MainHallLatitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrganiserName", "organiserNameAttr", "OrganiserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrganiserEmail", "organiserEmailAttr", "OrganiserEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Adults", "adultsAttr", "Adults", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Children", "childrenAttr", "Children", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.Timezone_V2Rec());
}, true, Connect2_OrbitMobile_ISModel.Timezone_V2Rec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderSignedImagePath", "householderSignedImagePathAttr", "HouseholderSignedImagePath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Host_V2Rec.init();
return Host_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.Host_V2Rec = Host_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetAccommodationHostResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemList", "Connect2_OrbitMobile_IS.model$HelperItemList", "Connect2_OrbitMobile_IS.model$RoomItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetAccommodationHostResponseRec = (function (_super) {
__extends(GetAccommodationHostResponseRec, _super);
function GetAccommodationHostResponseRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationHostResponseRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItemList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItemList), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList), 
this.attr("Rooms", "roomsAttr", "Rooms", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.RoomItemList());
}, true, Connect2_OrbitMobile_ISModel.RoomItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationHostResponseRec.init();
return GetAccommodationHostResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetAccommodationHostResponseRec = GetAccommodationHostResponseRec;

});
define("Connect2_OrbitMobile_IS.model$MilestoneInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MilestoneInfoRec = (function (_super) {
__extends(MilestoneInfoRec, _super);
function MilestoneInfoRec(defaults) {
_super.apply(this, arguments);
}
MilestoneInfoRec.attributesToDeclare = function () {
return [
this.attr("HostId", "hostIdAttr", "Hostid", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Seating", "seatingAttr", "Seating", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneStartDateTime", "milestoneStartDateTimeAttr", "MilestoneStartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneEndDateTime", "milestoneEndDateTimeAttr", "MilestoneEndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DepartureLocation", "departureLocationAttr", "DepartureLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ArrivalLocation", "arrivalLocationAttr", "ArrivalLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneHost", "milestoneHostAttr", "MilestoneHost", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MilestoneInfoRec.init();
return MilestoneInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MilestoneInfoRec = MilestoneInfoRec;

});
define("Connect2_OrbitMobile_IS.model$OrbitSummaryItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_IS.model$EventInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var OrbitSummaryItemRec = (function (_super) {
__extends(OrbitSummaryItemRec, _super);
function OrbitSummaryItemRec(defaults) {
_super.apply(this, arguments);
}
OrbitSummaryItemRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "SequenceNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneInfo", "milestoneInfoAttr", "MilestoneInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneInfoRec());
}, true, Connect2_OrbitMobile_ISModel.MilestoneInfoRec), 
this.attr("EventInfo", "eventInfoAttr", "EventInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventInfoRec());
}, true, Connect2_OrbitMobile_ISModel.EventInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
OrbitSummaryItemRec.init();
return OrbitSummaryItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.OrbitSummaryItemRec = OrbitSummaryItemRec;

});
define("Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var CalendarGuestItem_V2List = (function (_super) {
__extends(CalendarGuestItem_V2List, _super);
function CalendarGuestItem_V2List(defaults) {
_super.apply(this, arguments);
}
CalendarGuestItem_V2List.itemType = Connect2_OrbitMobile_ISModel.CalendarGuestItem_V2Rec;
return CalendarGuestItem_V2List;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.CalendarGuestItem_V2List = CalendarGuestItem_V2List;

});
define("Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2List"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventCalendar_V2Rec = (function (_super) {
__extends(EventCalendar_V2Rec, _super);
function EventCalendar_V2Rec(defaults) {
_super.apply(this, arguments);
}
EventCalendar_V2Rec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventLocalityId", "eventLocalityIdAttr", "EventLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestCount", "guestCountAttr", "GuestCount", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostId", "hostIdAttr", "HostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HostFullName", "hostFullNameAttr", "HostFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostLocality", "hostLocalityAttr", "HostLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Hosting", "hostingAttr", "Hosting", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdDisplay", "householdDisplayAttr", "HouseholdDisplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.CalendarGuestItem_V2List());
}, true, Connect2_OrbitMobile_ISModel.CalendarGuestItem_V2List)
].concat(_super.attributesToDeclare.call(this));
};
EventCalendar_V2Rec.init();
return EventCalendar_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventCalendar_V2Rec = EventCalendar_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetMealHelperResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$HelperItemList", "Connect2_OrbitMobile_IS.model$GuestItemList", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetMealHelperResponseRec = (function (_super) {
__extends(GetMealHelperResponseRec, _super);
function GetMealHelperResponseRec(defaults) {
_super.apply(this, arguments);
}
GetMealHelperResponseRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("HelperCount", "helperCountAttr", "HelperCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GuestCount", "guestCountAttr", "GuestCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HostInformation", "hostInformationAttr", "HostInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostInformationRec());
}, true, Connect2_OrbitMobile_ISModel.HostInformationRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GuestItemList());
}, true, Connect2_OrbitMobile_ISModel.GuestItemList), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItemList());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetMealHelperResponseRec.init();
return GetMealHelperResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetMealHelperResponseRec = GetMealHelperResponseRec;

});
define("Connect2_OrbitMobile_IS.model$AdminMilestoneRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AdminMilestoneRec = (function (_super) {
__extends(AdminMilestoneRec, _super);
function AdminMilestoneRec(defaults) {
_super.apply(this, arguments);
}
AdminMilestoneRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "milestoneId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneRef", "milestoneRefAttr", "milestoneRef", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "milestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventId", "eventIdAttr", "eventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneName", "milestoneNameAttr", "milestoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDate", "eventDateAttr", "eventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("StartDate", "startDateAttr", "startDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDate", "endDateAttr", "endDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("StartDateUTC", "startDateUTCAttr", "startDateUTC", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDateUTC", "endDateUTCAttr", "endDateUTC", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "sequenceNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TimeZoneId", "timeZoneIdAttr", "timeZoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "localityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "localityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAllocated", "isAllocatedAttr", "isAllocated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllocatedGuestCount", "allocatedGuestCountAttr", "allocatedGuestCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdminMilestoneRec.init();
return AdminMilestoneRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.AdminMilestoneRec = AdminMilestoneRec;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDM_V2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDM_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItem_LDM_V2List = (function (_super) {
__extends(SpecialNeedsItem_LDM_V2List, _super);
function SpecialNeedsItem_LDM_V2List(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItem_LDM_V2List.itemType = Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2Rec;
return SpecialNeedsItem_LDM_V2List;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List = SpecialNeedsItem_LDM_V2List;

});
define("Connect2_OrbitMobile_IS.model$SpecialNeeds_LDM_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsItem_LDM_V2List"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SpecialNeeds_LDM_V2Rec = (function (_super) {
__extends(SpecialNeeds_LDM_V2Rec, _super);
function SpecialNeeds_LDM_V2Rec(defaults) {
_super.apply(this, arguments);
}
SpecialNeeds_LDM_V2Rec.attributesToDeclare = function () {
return [
this.attr("Mobility", "mobilityAttr", "Mobility", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List), 
this.attr("Diet", "dietAttr", "Diet", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeedsItem_LDM_V2List)
].concat(_super.attributesToDeclare.call(this));
};
SpecialNeeds_LDM_V2Rec.init();
return SpecialNeeds_LDM_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.SpecialNeeds_LDM_V2Rec = SpecialNeeds_LDM_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetHouseholdMembersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetHouseholdMembersResponseRec = (function (_super) {
__extends(GetHouseholdMembersResponseRec, _super);
function GetHouseholdMembersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHouseholdMembersResponseRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholdMembersResponseRec.init();
return GetHouseholdMembersResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetHouseholdMembersResponseRec = GetHouseholdMembersResponseRec;

});
define("Connect2_OrbitMobile_IS.model$EventBooklet_EventInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventBooklet_EventInfoRec = (function (_super) {
__extends(EventBooklet_EventInfoRec, _super);
function EventBooklet_EventInfoRec(defaults) {
_super.apply(this, arguments);
}
EventBooklet_EventInfoRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventLocation", "eventLocationAttr", "EventLocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventLocationId", "eventLocationIdAttr", "EventLocationId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventCountry", "eventCountryAttr", "EventCountry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventCountryCode", "eventCountryCodeAttr", "EventCountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventStartDateTime", "eventStartDateTimeAttr", "EventStartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventEndDateTime", "eventEndDateTimeAttr", "EventEndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventBooklet_EventInfoRec.init();
return EventBooklet_EventInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventBooklet_EventInfoRec = EventBooklet_EventInfoRec;

});
define("Connect2_OrbitMobile_IS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var DateList = (function (_super) {
__extends(DateList, _super);
function DateList(defaults) {
_super.apply(this, arguments);
}
DateList.itemType = OS.DataTypes.DataTypes.Date;
return DateList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.DateList = DateList;

});
define("Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventBooklet_CountryItemRec = (function (_super) {
__extends(EventBooklet_CountryItemRec, _super);
function EventBooklet_CountryItemRec(defaults) {
_super.apply(this, arguments);
}
EventBooklet_CountryItemRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Localities", "localitiesAttr", "Localities", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
EventBooklet_CountryItemRec.init();
return EventBooklet_CountryItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventBooklet_CountryItemRec = EventBooklet_CountryItemRec;

});
define("Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventBooklet_CountryItemList = (function (_super) {
__extends(EventBooklet_CountryItemList, _super);
function EventBooklet_CountryItemList(defaults) {
_super.apply(this, arguments);
}
EventBooklet_CountryItemList.itemType = Connect2_OrbitMobile_ISModel.EventBooklet_CountryItemRec;
return EventBooklet_CountryItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.EventBooklet_CountryItemList = EventBooklet_CountryItemList;

});
define("Connect2_OrbitMobile_IS.model$EventBooklet_FiltersRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventBooklet_CountryItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventBooklet_FiltersRec = (function (_super) {
__extends(EventBooklet_FiltersRec, _super);
function EventBooklet_FiltersRec(defaults) {
_super.apply(this, arguments);
}
EventBooklet_FiltersRec.attributesToDeclare = function () {
return [
this.attr("EventDays", "eventDaysAttr", "EventDays", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DateList());
}, true, OS.DataTypes.DateList), 
this.attr("HelperRoles", "helperRolesAttr", "HelperRoles", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Countries", "countriesAttr", "Countries", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventBooklet_CountryItemList());
}, true, Connect2_OrbitMobile_ISModel.EventBooklet_CountryItemList)
].concat(_super.attributesToDeclare.call(this));
};
EventBooklet_FiltersRec.init();
return EventBooklet_FiltersRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventBooklet_FiltersRec = EventBooklet_FiltersRec;

});
define("Connect2_OrbitMobile_IS.model$GetEventBookletFiltersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventBooklet_EventInfoRec", "Connect2_OrbitMobile_IS.model$EventBooklet_FiltersRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventBookletFiltersResponseRec = (function (_super) {
__extends(GetEventBookletFiltersResponseRec, _super);
function GetEventBookletFiltersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventBookletFiltersResponseRec.attributesToDeclare = function () {
return [
this.attr("EventInfo", "eventInfoAttr", "EventInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventBooklet_EventInfoRec());
}, true, Connect2_OrbitMobile_ISModel.EventBooklet_EventInfoRec), 
this.attr("Filters", "filtersAttr", "Filters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventBooklet_FiltersRec());
}, true, Connect2_OrbitMobile_ISModel.EventBooklet_FiltersRec)
].concat(_super.attributesToDeclare.call(this));
};
GetEventBookletFiltersResponseRec.init();
return GetEventBookletFiltersResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventBookletFiltersResponseRec = GetEventBookletFiltersResponseRec;

});
define("Connect2_OrbitMobile_IS.model$AccommodationGuestRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_IS.model$HelperItemList", "Connect2_OrbitMobile_IS.model$GuestItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AccommodationGuestRec = (function (_super) {
__extends(AccommodationGuestRec, _super);
function AccommodationGuestRec(defaults) {
_super.apply(this, arguments);
}
AccommodationGuestRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("HostInformation", "hostInformationAttr", "HostInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostInformationRec());
}, true, Connect2_OrbitMobile_ISModel.HostInformationRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GuestItemList());
}, true, Connect2_OrbitMobile_ISModel.GuestItemList), 
this.attr("HelperCount", "helperCountAttr", "HelperCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GuestCount", "guestCountAttr", "GuestCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccommodationGuestRec.init();
return AccommodationGuestRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.AccommodationGuestRec = AccommodationGuestRec;

});
define("Connect2_OrbitMobile_IS.model$MilestoneRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MilestoneRec = (function (_super) {
__extends(MilestoneRec, _super);
function MilestoneRec(defaults) {
_super.apply(this, arguments);
}
MilestoneRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeType", "timeTypeAttr", "TimeType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "SequenceNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneInfo", "milestoneInfoAttr", "MilestoneInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneInfoRec());
}, true, Connect2_OrbitMobile_ISModel.MilestoneInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
MilestoneRec.init();
return MilestoneRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.MilestoneRec = MilestoneRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_RoomItemList = (function (_super) {
__extends(HostSurvey_RoomItemList, _super);
function HostSurvey_RoomItemList(defaults) {
_super.apply(this, arguments);
}
HostSurvey_RoomItemList.itemType = Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec;
return HostSurvey_RoomItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemList = HostSurvey_RoomItemList;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_RoomInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_RoomInfoRec = (function (_super) {
__extends(HostSurvey_RoomInfoRec, _super);
function HostSurvey_RoomInfoRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_RoomInfoRec.attributesToDeclare = function () {
return [
this.attr("AccommodationNote", "accommodationNoteAttr", "AccommodationNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostSurvey_RoomItem", "hostSurvey_RoomItemAttr", "RoomItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemList());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemList)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_RoomInfoRec.init();
return HostSurvey_RoomInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_RoomInfoRec = HostSurvey_RoomInfoRec;

});
define("Connect2_OrbitMobile_IS.model$AmenityItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var AmenityItemRec = (function (_super) {
__extends(AmenityItemRec, _super);
function AmenityItemRec(defaults) {
_super.apply(this, arguments);
}
AmenityItemRec.attributesToDeclare = function () {
return [
this.attr("Amenity", "amenityAttr", "Amenity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AmenityItemRec.init();
return AmenityItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.AmenityItemRec = AmenityItemRec;

});
define("Connect2_OrbitMobile_IS.model$GetCoordinatorDetailsResponse_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$Timezone_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetCoordinatorDetailsResponse_V2Rec = (function (_super) {
__extends(GetCoordinatorDetailsResponse_V2Rec, _super);
function GetCoordinatorDetailsResponse_V2Rec(defaults) {
_super.apply(this, arguments);
}
GetCoordinatorDetailsResponse_V2Rec.attributesToDeclare = function () {
return [
this.attr("CoordinatorName", "coordinatorNameAttr", "CoordinatorName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CoordinatorEmail", "coordinatorEmailAttr", "CoordinatorEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CoordinatorPhoneNumber", "coordinatorPhoneNumberAttr", "CoordinatorPhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDate", "eventDateAttr", "EventDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LDMEventName", "lDMEventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.Timezone_V2Rec());
}, true, Connect2_OrbitMobile_ISModel.Timezone_V2Rec)
].concat(_super.attributesToDeclare.call(this));
};
GetCoordinatorDetailsResponse_V2Rec.init();
return GetCoordinatorDetailsResponse_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetCoordinatorDetailsResponse_V2Rec = GetCoordinatorDetailsResponse_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$DetailGuestItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var DetailGuestItemList = (function (_super) {
__extends(DetailGuestItemList, _super);
function DetailGuestItemList(defaults) {
_super.apply(this, arguments);
}
DetailGuestItemList.itemType = Connect2_OrbitMobile_ISModel.DetailGuestItemRec;
return DetailGuestItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.DetailGuestItemList = DetailGuestItemList;

});
define("Connect2_OrbitMobile_IS.model$GetEventCalendarDetailResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostRec", "Connect2_OrbitMobile_IS.model$DetailGuestItemList", "Connect2_OrbitMobile_IS.model$SpecialNeeds_LDMRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventCalendarDetailResponseRec = (function (_super) {
__extends(GetEventCalendarDetailResponseRec, _super);
function GetEventCalendarDetailResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventCalendarDetailResponseRec.attributesToDeclare = function () {
return [
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostRec());
}, true, Connect2_OrbitMobile_ISModel.HostRec), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.DetailGuestItemList());
}, true, Connect2_OrbitMobile_ISModel.DetailGuestItemList), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeeds_LDMRec());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeeds_LDMRec)
].concat(_super.attributesToDeclare.call(this));
};
GetEventCalendarDetailResponseRec.init();
return GetEventCalendarDetailResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventCalendarDetailResponseRec = GetEventCalendarDetailResponseRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_HelperMemberRec = (function (_super) {
__extends(HostSurvey_HelperMemberRec, _super);
function HostSurvey_HelperMemberRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_HelperMemberRec.attributesToDeclare = function () {
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
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsEventLocality", "isEventLocalityAttr", "IsEventLocality", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsEventCountry", "isEventCountryAttr", "IsEventCountry", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SortOrder", "sortOrderAttr", "SortOrder", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_HelperMemberRec.init();
return HostSurvey_HelperMemberRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_HelperMemberRec = HostSurvey_HelperMemberRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_HelperMemberList = (function (_super) {
__extends(HostSurvey_HelperMemberList, _super);
function HostSurvey_HelperMemberList(defaults) {
_super.apply(this, arguments);
}
HostSurvey_HelperMemberList.itemType = Connect2_OrbitMobile_ISModel.HostSurvey_HelperMemberRec;
return HostSurvey_HelperMemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.HostSurvey_HelperMemberList = HostSurvey_HelperMemberList;

});
define("Connect2_OrbitMobile_IS.model$GetSurveyHelpersResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetSurveyHelpersResponseRec = (function (_super) {
__extends(GetSurveyHelpersResponseRec, _super);
function GetSurveyHelpersResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSurveyHelpersResponseRec.attributesToDeclare = function () {
return [
this.attr("HelperMembers", "helperMembersAttr", "HelperMembers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_HelperMemberList());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_HelperMemberList)
].concat(_super.attributesToDeclare.call(this));
};
GetSurveyHelpersResponseRec.fromStructure = function (str) {
return new GetSurveyHelpersResponseRec(new GetSurveyHelpersResponseRec.RecordClass({
helperMembersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSurveyHelpersResponseRec.init();
return GetSurveyHelpersResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetSurveyHelpersResponseRec = GetSurveyHelpersResponseRec;

});
define("Connect2_OrbitMobile_IS.model$DetailGuestItem_V2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$DetailGuestItem_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var DetailGuestItem_V2List = (function (_super) {
__extends(DetailGuestItem_V2List, _super);
function DetailGuestItem_V2List(defaults) {
_super.apply(this, arguments);
}
DetailGuestItem_V2List.itemType = Connect2_OrbitMobile_ISModel.DetailGuestItem_V2Rec;
return DetailGuestItem_V2List;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.DetailGuestItem_V2List = DetailGuestItem_V2List;

});
define("Connect2_OrbitMobile_IS.model$GetEventCalendarDetailResponse_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$Host_V2Rec", "Connect2_OrbitMobile_IS.model$DetailGuestItem_V2List", "Connect2_OrbitMobile_IS.model$SpecialNeeds_LDM_V2Rec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventCalendarDetailResponse_V2Rec = (function (_super) {
__extends(GetEventCalendarDetailResponse_V2Rec, _super);
function GetEventCalendarDetailResponse_V2Rec(defaults) {
_super.apply(this, arguments);
}
GetEventCalendarDetailResponse_V2Rec.attributesToDeclare = function () {
return [
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.Host_V2Rec());
}, true, Connect2_OrbitMobile_ISModel.Host_V2Rec), 
this.attr("Guests", "guestsAttr", "Guests", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.DetailGuestItem_V2List());
}, true, Connect2_OrbitMobile_ISModel.DetailGuestItem_V2List), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SpecialNeeds_LDM_V2Rec());
}, true, Connect2_OrbitMobile_ISModel.SpecialNeeds_LDM_V2Rec)
].concat(_super.attributesToDeclare.call(this));
};
GetEventCalendarDetailResponse_V2Rec.init();
return GetEventCalendarDetailResponse_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventCalendarDetailResponse_V2Rec = GetEventCalendarDetailResponse_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetHelperDetailsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_IS.model$HelperItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetHelperDetailsResponseRec = (function (_super) {
__extends(GetHelperDetailsResponseRec, _super);
function GetHelperDetailsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHelperDetailsResponseRec.attributesToDeclare = function () {
return [
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HelperItemList());
}, true, Connect2_OrbitMobile_ISModel.HelperItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetHelperDetailsResponseRec.init();
return GetHelperDetailsResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetHelperDetailsResponseRec = GetHelperDetailsResponseRec;

});
define("Connect2_OrbitMobile_IS.model$OrbitSummaryItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$OrbitSummaryItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var OrbitSummaryItemList = (function (_super) {
__extends(OrbitSummaryItemList, _super);
function OrbitSummaryItemList(defaults) {
_super.apply(this, arguments);
}
OrbitSummaryItemList.itemType = Connect2_OrbitMobile_ISModel.OrbitSummaryItemRec;
return OrbitSummaryItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.OrbitSummaryItemList = OrbitSummaryItemList;

});
define("Connect2_OrbitMobile_IS.model$GetEventsSummaryResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$OrbitSummaryItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventsSummaryResponseRec = (function (_super) {
__extends(GetEventsSummaryResponseRec, _super);
function GetEventsSummaryResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventsSummaryResponseRec.attributesToDeclare = function () {
return [
this.attr("OrbitSummaryItems", "orbitSummaryItemsAttr", "OrbitEvents", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.OrbitSummaryItemList());
}, true, Connect2_OrbitMobile_ISModel.OrbitSummaryItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetEventsSummaryResponseRec.fromStructure = function (str) {
return new GetEventsSummaryResponseRec(new GetEventsSummaryResponseRec.RecordClass({
orbitSummaryItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetEventsSummaryResponseRec.init();
return GetEventsSummaryResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventsSummaryResponseRec = GetEventsSummaryResponseRec;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_HelperItemInfoList = (function (_super) {
__extends(HostSurvey_HelperItemInfoList, _super);
function HostSurvey_HelperItemInfoList(defaults) {
_super.apply(this, arguments);
}
HostSurvey_HelperItemInfoList.itemType = Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec;
return HostSurvey_HelperItemInfoList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoList = HostSurvey_HelperItemInfoList;

});
define("Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var HostSurvey_HelperItemRec = (function (_super) {
__extends(HostSurvey_HelperItemRec, _super);
function HostSurvey_HelperItemRec(defaults) {
_super.apply(this, arguments);
}
HostSurvey_HelperItemRec.attributesToDeclare = function () {
return [
this.attr("HelperNote", "helperNoteAttr", "HelperNote", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelperItemInfo", "helperItemInfoAttr", "HelperItem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoList());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoList)
].concat(_super.attributesToDeclare.call(this));
};
HostSurvey_HelperItemRec.init();
return HostSurvey_HelperItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemRec = HostSurvey_HelperItemRec;

});
define("Connect2_OrbitMobile_IS.model$GetHostSurveyResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurvey_InfoRec", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomInfoRec", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemRec", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetHostSurveyResponseRec = (function (_super) {
__extends(GetHostSurveyResponseRec, _super);
function GetHostSurveyResponseRec(defaults) {
_super.apply(this, arguments);
}
GetHostSurveyResponseRec.attributesToDeclare = function () {
return [
this.attr("SurveyInfo", "surveyInfoAttr", "SurveyInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_InfoRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_InfoRec), 
this.attr("Rooms", "roomsAttr", "Rooms", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_RoomInfoRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_RoomInfoRec), 
this.attr("Meals", "mealsAttr", "Meals", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_MealItemRec), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemRec), 
this.attr("Vehicles", "vehiclesAttr", "Vehicles", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemRec)
].concat(_super.attributesToDeclare.call(this));
};
GetHostSurveyResponseRec.init();
return GetHostSurveyResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec = GetHostSurveyResponseRec;

});
define("Connect2_OrbitMobile_IS.model$GetEventLocalitiesResponse_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventLocalitiesResponse_V2Rec = (function (_super) {
__extends(GetEventLocalitiesResponse_V2Rec, _super);
function GetEventLocalitiesResponse_V2Rec(defaults) {
_super.apply(this, arguments);
}
GetEventLocalitiesResponse_V2Rec.attributesToDeclare = function () {
return [
this.attr("LocalityID", "localityIDAttr", "LocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetEventLocalitiesResponse_V2Rec.init();
return GetEventLocalitiesResponse_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventLocalitiesResponse_V2Rec = GetEventLocalitiesResponse_V2Rec;

});
define("Connect2_OrbitMobile_IS.model$GetGmpMilestoneHostResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$StatusRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetGmpMilestoneHostResponseRec = (function (_super) {
__extends(GetGmpMilestoneHostResponseRec, _super);
function GetGmpMilestoneHostResponseRec(defaults) {
_super.apply(this, arguments);
}
GetGmpMilestoneHostResponseRec.attributesToDeclare = function () {
return [
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.StatusRec());
}, true, Connect2_OrbitMobile_ISModel.StatusRec), 
this.attr("HostId", "hostIdAttr", "HostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneTitle", "milestoneTitleAttr", "MilestoneTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetGmpMilestoneHostResponseRec.init();
return GetGmpMilestoneHostResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetGmpMilestoneHostResponseRec = GetGmpMilestoneHostResponseRec;

});
define("Connect2_OrbitMobile_IS.model$EventBookletMembersRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var EventBookletMembersRec = (function (_super) {
__extends(EventBookletMembersRec, _super);
function EventBookletMembersRec(defaults) {
_super.apply(this, arguments);
}
EventBookletMembersRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
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
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostHouseholderId", "hostHouseholderIdAttr", "HostHouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Role", "roleAttr", "Role", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Days", "daysAttr", "Days", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DateList());
}, true, OS.DataTypes.DateList), 
this.attr("OrderNo", "orderNoAttr", "OrderNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsHouseholder", "isHouseholderAttr", "IsHouseholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Age", "ageAttr", "Age", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsHostLocality", "isHostLocalityAttr", "IsHostLocality", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventBookletMembersRec.init();
return EventBookletMembersRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.EventBookletMembersRec = EventBookletMembersRec;

});
define("Connect2_OrbitMobile_IS.model$MilestoneList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$MilestoneRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var MilestoneList = (function (_super) {
__extends(MilestoneList, _super);
function MilestoneList(defaults) {
_super.apply(this, arguments);
}
MilestoneList.itemType = Connect2_OrbitMobile_ISModel.MilestoneRec;
return MilestoneList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.MilestoneList = MilestoneList;

});
define("Connect2_OrbitMobile_IS.model$GetEventDetailsResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$HostSurveyRec", "Connect2_OrbitMobile_IS.model$MilestoneList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetEventDetailsResponseRec = (function (_super) {
__extends(GetEventDetailsResponseRec, _super);
function GetEventDetailsResponseRec(defaults) {
_super.apply(this, arguments);
}
GetEventDetailsResponseRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventType", "eventTypeAttr", "EventType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventStartDate", "eventStartDateAttr", "EventStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventEndDate", "eventEndDateAttr", "EventEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeOfEvent", "typeOfEventAttr", "TypeOfEvent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookletVisible", "isBookletVisibleAttr", "IsBookletVisible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SetUpMeals", "setUpMealsAttr", "SetUpMeals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Meals", "mealsAttr", "Meals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Accommodations", "accommodationsAttr", "Accommodations", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Transport", "transportAttr", "Transport", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("GuestTransport", "guestTransportAttr", "GuestTransport", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HostSurvey", "hostSurveyAttr", "HostSurvey", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurveyRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurveyRec), 
this.attr("Milestones", "milestonesAttr", "Milestones", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneList());
}, true, Connect2_OrbitMobile_ISModel.MilestoneList)
].concat(_super.attributesToDeclare.call(this));
};
GetEventDetailsResponseRec.init();
return GetEventDetailsResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetEventDetailsResponseRec = GetEventDetailsResponseRec;

});
define("Connect2_OrbitMobile_IS.model$SessionItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SessionItemRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var SessionItemList = (function (_super) {
__extends(SessionItemList, _super);
function SessionItemList(defaults) {
_super.apply(this, arguments);
}
SessionItemList.itemType = Connect2_OrbitMobile_ISModel.SessionItemRec;
return SessionItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_ISModel.SessionItemList = SessionItemList;

});
define("Connect2_OrbitMobile_IS.model$GetCheckInSummaryResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_IS.model$SessionItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetCheckInSummaryResponseRec = (function (_super) {
__extends(GetCheckInSummaryResponseRec, _super);
function GetCheckInSummaryResponseRec(defaults) {
_super.apply(this, arguments);
}
GetCheckInSummaryResponseRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "memberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EligibleCount", "eligibleCountAttr", "eligibleCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CheckedInCount", "checkedInCountAttr", "checkedInCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HasEventLevelCheckIn", "hasEventLevelCheckInAttr", "hasEventLevelCheckIn", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Sessions", "sessionsAttr", "sessions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.SessionItemList());
}, true, Connect2_OrbitMobile_ISModel.SessionItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetCheckInSummaryResponseRec.init();
return GetCheckInSummaryResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_ISModel.GetCheckInSummaryResponseRec = GetCheckInSummaryResponseRec;

});
define("Connect2_OrbitMobile_IS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_OrbitMobile_ISModel = exports;
});
