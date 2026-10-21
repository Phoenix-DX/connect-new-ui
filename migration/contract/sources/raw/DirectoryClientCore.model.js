define("DirectoryClientCore.model$GetTimezoneResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetTimezoneResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetTimezoneResponseRecord = (function (_super) {
__extends(GetTimezoneResponseRecord, _super);
function GetTimezoneResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetTimezoneResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetTimezoneResponse", "getTimezoneResponseAttr", "GetTimezoneResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetTimezoneResponseRec());
}, true, ContactBase_ISModel.GetTimezoneResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetTimezoneResponseRecord.fromStructure = function (str) {
return new GetTimezoneResponseRecord(new GetTimezoneResponseRecord.RecordClass({
getTimezoneResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetTimezoneResponseRecord._isAnonymousRecord = true;
GetTimezoneResponseRecord.UniqueId = "3938c92c-4c69-0e6a-b492-e98397708f8c";
GetTimezoneResponseRecord.init();
return GetTimezoneResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetTimezoneResponseRecord = GetTimezoneResponseRecord;

});
define("DirectoryClientCore.model$GetTimezoneResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetTimezoneResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetTimezoneResponseRecordList = (function (_super) {
__extends(GetTimezoneResponseRecordList, _super);
function GetTimezoneResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetTimezoneResponseRecordList.itemType = DirectoryClientCoreModel.GetTimezoneResponseRecord;
return GetTimezoneResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetTimezoneResponseRecordList = GetTimezoneResponseRecordList;

});
define("DirectoryClientCore.model$SubdivisionExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionExtendedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRecord = (function (_super) {
__extends(SubdivisionExtendedRecord, _super);
function SubdivisionExtendedRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionExtended", "subdivisionExtendedAttr", "SubdivisionExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionExtendedRec());
}, true, ContactBase_ISModel.SubdivisionExtendedRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionExtendedRecord.fromStructure = function (str) {
return new SubdivisionExtendedRecord(new SubdivisionExtendedRecord.RecordClass({
subdivisionExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionExtendedRecord._isAnonymousRecord = true;
SubdivisionExtendedRecord.UniqueId = "00a8b034-784e-f4ff-a81e-2c9646128099";
SubdivisionExtendedRecord.init();
return SubdivisionExtendedRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubdivisionExtendedRecord = SubdivisionExtendedRecord;

});
define("DirectoryClientCore.model$FormerSpouseItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FormerSpouseItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FormerSpouseItemList = (function (_super) {
__extends(FormerSpouseItemList, _super);
function FormerSpouseItemList(defaults) {
_super.apply(this, arguments);
}
FormerSpouseItemList.itemType = ContactBase_ISModel.FormerSpouseItemRec;
return FormerSpouseItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FormerSpouseItemList = FormerSpouseItemList;

});
define("DirectoryClientCore.model$FamilyMemberFormattedDetailList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FamilyMemberFormattedDetailRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDetailList = (function (_super) {
__extends(FamilyMemberFormattedDetailList, _super);
function FamilyMemberFormattedDetailList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDetailList.itemType = ContactBase_ISModel.FamilyMemberFormattedDetailRec;
return FamilyMemberFormattedDetailList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FamilyMemberFormattedDetailList = FamilyMemberFormattedDetailList;

});
define("DirectoryClientCore.model$MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$MemberRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberRecord = (function (_super) {
__extends(MemberRecord, _super);
function MemberRecord(defaults) {
_super.apply(this, arguments);
}
MemberRecord.attributesToDeclare = function () {
return [
this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberRec());
}, true, ContactBase_ISModel.MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberRecord.fromStructure = function (str) {
return new MemberRecord(new MemberRecord.RecordClass({
memberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberRecord._isAnonymousRecord = true;
MemberRecord.UniqueId = "010671ad-cf1b-713f-05ca-b9ee282b9ce8";
MemberRecord.init();
return MemberRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.MemberRecord = MemberRecord;

});
define("DirectoryClientCore.model$PolicyActivationRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PolicyActivationRec = (function (_super) {
__extends(PolicyActivationRec, _super);
function PolicyActivationRec(defaults) {
_super.apply(this, arguments);
}
PolicyActivationRec.attributesToDeclare = function () {
return [
this.attr("IsPolicyActivated", "isPolicyActivatedAttr", "IsPolicyActivated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsTermsActivated", "isTermsActivatedAttr", "IsTermsActivated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSecurityActivated", "isSecurityActivatedAttr", "IsSecurityActivated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsFAQActivated", "isFAQActivatedAttr", "IsFAQActivated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyActivationRec.init();
return PolicyActivationRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PolicyActivationRec = PolicyActivationRec;

});
define("DirectoryClientCore.model$PolicyActivationRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PolicyActivationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PolicyActivationRecord = (function (_super) {
__extends(PolicyActivationRecord, _super);
function PolicyActivationRecord(defaults) {
_super.apply(this, arguments);
}
PolicyActivationRecord.attributesToDeclare = function () {
return [
this.attr("PolicyActivation", "policyActivationAttr", "PolicyActivation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.PolicyActivationRec());
}, true, DirectoryClientCoreModel.PolicyActivationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyActivationRecord.fromStructure = function (str) {
return new PolicyActivationRecord(new PolicyActivationRecord.RecordClass({
policyActivationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyActivationRecord._isAnonymousRecord = true;
PolicyActivationRecord.UniqueId = "01ee98e9-3feb-f886-de04-a215ebcdad12";
PolicyActivationRecord.init();
return PolicyActivationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PolicyActivationRecord = PolicyActivationRecord;

});
define("DirectoryClientCore.model$FamilyMemberFormattedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FamilyMemberFormattedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedList = (function (_super) {
__extends(FamilyMemberFormattedList, _super);
function FamilyMemberFormattedList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedList.itemType = ContactBase_ISModel.FamilyMemberFormattedRec;
return FamilyMemberFormattedList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FamilyMemberFormattedList = FamilyMemberFormattedList;

});
define("DirectoryClientCore.model$TextTextGetHouseholds_ConnectResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetHouseholds_ConnectResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextTextGetHouseholds_ConnectResponseRecord = (function (_super) {
__extends(TextTextGetHouseholds_ConnectResponseRecord, _super);
function TextTextGetHouseholds_ConnectResponseRecord(defaults) {
_super.apply(this, arguments);
}
TextTextGetHouseholds_ConnectResponseRecord.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetHouseholds_ConnectResponseRec());
}, true, ContactBase_ISModel.GetHouseholds_ConnectResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
TextTextGetHouseholds_ConnectResponseRecord._isAnonymousRecord = true;
TextTextGetHouseholds_ConnectResponseRecord.UniqueId = "03bc8524-149c-a6a0-2b9b-8391dc09268c";
TextTextGetHouseholds_ConnectResponseRecord.init();
return TextTextGetHouseholds_ConnectResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.TextTextGetHouseholds_ConnectResponseRecord = TextTextGetHouseholds_ConnectResponseRecord;

});
define("DirectoryClientCore.model$LocalityHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$LocalityHouseholdsResultItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemList = (function (_super) {
__extends(LocalityHouseholdsResultItemList, _super);
function LocalityHouseholdsResultItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemList.itemType = ContactBase_ISModel.LocalityHouseholdsResultItemRec;
return LocalityHouseholdsResultItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityHouseholdsResultItemList = LocalityHouseholdsResultItemList;

});
define("DirectoryClientCore.model$CacheableSubdivisionInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionExtendedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS", "ContactBase_IS.model$LocalityHouseholdsResultItemRec", "DirectoryClientCore.model$LocalityHouseholdsResultItemList"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRec = (function (_super) {
__extends(CacheableSubdivisionInformationRec, _super);
function CacheableSubdivisionInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRec.attributesToDeclare = function () {
return [
this.attr("Subdivision", "subdivisionAttr", "subdivision", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionExtendedRec());
}, true, ContactBase_ISModel.SubdivisionExtendedRec), 
this.attr("HouseholdListResponse", "householdListResponseAttr", "HouseholdListResponse", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.LocalityHouseholdsResultItemList());
}, true, DirectoryClientCoreModel.LocalityHouseholdsResultItemList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationRec.init();
return CacheableSubdivisionInformationRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableSubdivisionInformationRec = CacheableSubdivisionInformationRec;

});
define("DirectoryClientCore.model$CacheableSubdivisionInformationTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationTextTextRecord = (function (_super) {
__extends(CacheableSubdivisionInformationTextTextRecord, _super);
function CacheableSubdivisionInformationTextTextRecord(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationTextTextRecord.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableSubdivisionInformationRec());
}, true, DirectoryClientCoreModel.CacheableSubdivisionInformationRec), 
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationTextTextRecord._isAnonymousRecord = true;
CacheableSubdivisionInformationTextTextRecord.UniqueId = "040ccf15-ee94-4af7-9ce1-2137e86afd5a";
CacheableSubdivisionInformationTextTextRecord.init();
return CacheableSubdivisionInformationTextTextRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableSubdivisionInformationTextTextRecord = CacheableSubdivisionInformationTextTextRecord;

});
define("DirectoryClientCore.model$HallPhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$HallPhotoRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HallPhotoRecord = (function (_super) {
__extends(HallPhotoRecord, _super);
function HallPhotoRecord(defaults) {
_super.apply(this, arguments);
}
HallPhotoRecord.attributesToDeclare = function () {
return [
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HallPhotoRec());
}, true, ContactBase_ISModel.HallPhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoRecord.fromStructure = function (str) {
return new HallPhotoRecord(new HallPhotoRecord.RecordClass({
hallPhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HallPhotoRecord._isAnonymousRecord = true;
HallPhotoRecord.UniqueId = "04bf4c71-7c0b-bbb7-2b8d-48c4afab29c3";
HallPhotoRecord.init();
return HallPhotoRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.HallPhotoRecord = HallPhotoRecord;

});
define("DirectoryClientCore.model$SubdivisionExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubdivisionExtendedRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRecordList = (function (_super) {
__extends(SubdivisionExtendedRecordList, _super);
function SubdivisionExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRecordList.itemType = DirectoryClientCoreModel.SubdivisionExtendedRecord;
return SubdivisionExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionExtendedRecordList = SubdivisionExtendedRecordList;

});
define("DirectoryClientCore.model$BookmarkItemList", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_IS.model", "DirectoryClientCore.model", "MyBookmarks_IS.model$BookmarkItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_IS"], function (exports, OutSystems, MyBookmarks_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BookmarkItemList = (function (_super) {
__extends(BookmarkItemList, _super);
function BookmarkItemList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemList.itemType = MyBookmarks_ISModel.BookmarkItemRec;
return BookmarkItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BookmarkItemList = BookmarkItemList;

});
define("DirectoryClientCore.model$BulkSignedPhotoParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.BulkSignedPhotoParametersRec = BulkSignedPhotoParametersRec;

});
define("DirectoryClientCore.model$BulkSignedPhotoParametersList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedPhotoParametersRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersList = (function (_super) {
__extends(BulkSignedPhotoParametersList, _super);
function BulkSignedPhotoParametersList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersList.itemType = DirectoryClientCoreModel.BulkSignedPhotoParametersRec;
return BulkSignedPhotoParametersList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedPhotoParametersList = BulkSignedPhotoParametersList;

});
define("DirectoryClientCore.model$LocalityHouseholdsResultItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$LocalityHouseholdsResultItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRecord = (function (_super) {
__extends(LocalityHouseholdsResultItemRecord, _super);
function LocalityHouseholdsResultItemRecord(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRecord.attributesToDeclare = function () {
return [
this.attr("LocalityHouseholdsResultItem", "localityHouseholdsResultItemAttr", "LocalityHouseholdsResultItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityHouseholdsResultItemRec());
}, true, ContactBase_ISModel.LocalityHouseholdsResultItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsResultItemRecord.fromStructure = function (str) {
return new LocalityHouseholdsResultItemRecord(new LocalityHouseholdsResultItemRecord.RecordClass({
localityHouseholdsResultItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityHouseholdsResultItemRecord._isAnonymousRecord = true;
LocalityHouseholdsResultItemRecord.UniqueId = "0c8166d5-c518-1373-740d-1dce41ee0538";
LocalityHouseholdsResultItemRecord.init();
return LocalityHouseholdsResultItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.LocalityHouseholdsResultItemRecord = LocalityHouseholdsResultItemRecord;

});
define("DirectoryClientCore.model$OpeningHourItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$OpeningHourItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var OpeningHourItemList = (function (_super) {
__extends(OpeningHourItemList, _super);
function OpeningHourItemList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemList.itemType = ContactBase_ISModel.OpeningHourItemRec;
return OpeningHourItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.OpeningHourItemList = OpeningHourItemList;

});
define("DirectoryClientCore.model$RolesList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$RolesRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var RolesList = (function (_super) {
__extends(RolesList, _super);
function RolesList(defaults) {
_super.apply(this, arguments);
}
RolesList.itemType = ContactBase_ISModel.RolesRec;
return RolesList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.RolesList = RolesList;

});
define("DirectoryClientCore.model$SubscriptionRegionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubscriptionRegionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionRegionList = (function (_super) {
__extends(SubscriptionRegionList, _super);
function SubscriptionRegionList(defaults) {
_super.apply(this, arguments);
}
SubscriptionRegionList.itemType = ContactBase_ISModel.SubscriptionRegionRec;
return SubscriptionRegionList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubscriptionRegionList = SubscriptionRegionList;

});
define("DirectoryClientCore.model$CountryList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$CountryRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CountryList = (function (_super) {
__extends(CountryList, _super);
function CountryList(defaults) {
_super.apply(this, arguments);
}
CountryList.itemType = ContactBase_ISModel.CountryRec;
return CountryList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CountryList = CountryList;

});
define("DirectoryClientCore.model$BulkSignedPhotoParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedPhotoParametersRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersRecord = (function (_super) {
__extends(BulkSignedPhotoParametersRecord, _super);
function BulkSignedPhotoParametersRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedPhotoParameters", "bulkSignedPhotoParametersAttr", "BulkSignedPhotoParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.BulkSignedPhotoParametersRec());
}, true, DirectoryClientCoreModel.BulkSignedPhotoParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedPhotoParametersRecord.fromStructure = function (str) {
return new BulkSignedPhotoParametersRecord(new BulkSignedPhotoParametersRecord.RecordClass({
bulkSignedPhotoParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedPhotoParametersRecord._isAnonymousRecord = true;
BulkSignedPhotoParametersRecord.UniqueId = "0deb2578-a4fa-4216-e834-088e667ae346";
BulkSignedPhotoParametersRecord.init();
return BulkSignedPhotoParametersRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.BulkSignedPhotoParametersRecord = BulkSignedPhotoParametersRecord;

});
define("DirectoryClientCore.model$HouseholdList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$HouseholdRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HouseholdList = (function (_super) {
__extends(HouseholdList, _super);
function HouseholdList(defaults) {
_super.apply(this, arguments);
}
HouseholdList.itemType = ContactBase_ISModel.HouseholdRec;
return HouseholdList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.HouseholdList = HouseholdList;

});
define("DirectoryClientCore.model$Member2List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$Member2Rec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var Member2List = (function (_super) {
__extends(Member2List, _super);
function Member2List(defaults) {
_super.apply(this, arguments);
}
Member2List.itemType = ContactBase_ISModel.Member2Rec;
return Member2List;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.Member2List = Member2List;

});
define("DirectoryClientCore.model$PlaceList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PlaceRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PlaceList = (function (_super) {
__extends(PlaceList, _super);
function PlaceList(defaults) {
_super.apply(this, arguments);
}
PlaceList.itemType = ContactBase_ISModel.PlaceRec;
return PlaceList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PlaceList = PlaceList;

});
define("DirectoryClientCore.model$ElasticSearch_ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ElasticSearch_ResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ElasticSearch_ResponseRecord = (function (_super) {
__extends(ElasticSearch_ResponseRecord, _super);
function ElasticSearch_ResponseRecord(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_ResponseRecord.attributesToDeclare = function () {
return [
this.attr("ElasticSearch_Response", "elasticSearch_ResponseAttr", "ElasticSearch_Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ElasticSearch_ResponseRec());
}, true, ContactBase_ISModel.ElasticSearch_ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
ElasticSearch_ResponseRecord.fromStructure = function (str) {
return new ElasticSearch_ResponseRecord(new ElasticSearch_ResponseRecord.RecordClass({
elasticSearch_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ElasticSearch_ResponseRecord._isAnonymousRecord = true;
ElasticSearch_ResponseRecord.UniqueId = "3dd686ad-fc0d-1e90-d2c6-fa2fd9c2d1ea";
ElasticSearch_ResponseRecord.init();
return ElasticSearch_ResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.ElasticSearch_ResponseRecord = ElasticSearch_ResponseRecord;

});
define("DirectoryClientCore.model$ElasticSearch_ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$ElasticSearch_ResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ElasticSearch_ResponseRecordList = (function (_super) {
__extends(ElasticSearch_ResponseRecordList, _super);
function ElasticSearch_ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_ResponseRecordList.itemType = DirectoryClientCoreModel.ElasticSearch_ResponseRecord;
return ElasticSearch_ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ElasticSearch_ResponseRecordList = ElasticSearch_ResponseRecordList;

});
define("DirectoryClientCore.model$CommunityBusinessTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$CommunityBusinessTypeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeList = (function (_super) {
__extends(CommunityBusinessTypeList, _super);
function CommunityBusinessTypeList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeList.itemType = ContactBase_ISModel.CommunityBusinessTypeRec;
return CommunityBusinessTypeList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CommunityBusinessTypeList = CommunityBusinessTypeList;

});
define("DirectoryClientCore.model$CacheableSubdivisionInformationList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationList = (function (_super) {
__extends(CacheableSubdivisionInformationList, _super);
function CacheableSubdivisionInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationList.itemType = DirectoryClientCoreModel.CacheableSubdivisionInformationRec;
return CacheableSubdivisionInformationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableSubdivisionInformationList = CacheableSubdivisionInformationList;

});
define("DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemDetailList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemDetailRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemDetailList = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemDetailList, _super);
function GetAdvancedSearchPresignedResultItemDetailList(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemDetailList.itemType = ContactBase_ISModel.GetAdvancedSearchPresignedResultItemDetailRec;
return GetAdvancedSearchPresignedResultItemDetailList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList = GetAdvancedSearchPresignedResultItemDetailList;

});
define("DirectoryClientCore.model$CacheableAdvancedSearchResultsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemDetailRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS", "DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemDetailList"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableAdvancedSearchResultsRec = (function (_super) {
__extends(CacheableAdvancedSearchResultsRec, _super);
function CacheableAdvancedSearchResultsRec(defaults) {
_super.apply(this, arguments);
}
CacheableAdvancedSearchResultsRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("People", "peopleAttr", "People", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList());
}, true, DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList), 
this.attr("Places", "placesAttr", "Places", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList());
}, true, DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableAdvancedSearchResultsRec.init();
return CacheableAdvancedSearchResultsRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableAdvancedSearchResultsRec = CacheableAdvancedSearchResultsRec;

});
define("DirectoryClientCore.model$CacheableAdvancedSearchResultsRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableAdvancedSearchResultsRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableAdvancedSearchResultsRecord = (function (_super) {
__extends(CacheableAdvancedSearchResultsRecord, _super);
function CacheableAdvancedSearchResultsRecord(defaults) {
_super.apply(this, arguments);
}
CacheableAdvancedSearchResultsRecord.attributesToDeclare = function () {
return [
this.attr("CacheableAdvancedSearchResults", "cacheableAdvancedSearchResultsAttr", "CacheableAdvancedSearchResults", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableAdvancedSearchResultsRec());
}, true, DirectoryClientCoreModel.CacheableAdvancedSearchResultsRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableAdvancedSearchResultsRecord.fromStructure = function (str) {
return new CacheableAdvancedSearchResultsRecord(new CacheableAdvancedSearchResultsRecord.RecordClass({
cacheableAdvancedSearchResultsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableAdvancedSearchResultsRecord._isAnonymousRecord = true;
CacheableAdvancedSearchResultsRecord.UniqueId = "12658429-10e8-8c2f-c7f4-634d191867fa";
CacheableAdvancedSearchResultsRecord.init();
return CacheableAdvancedSearchResultsRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableAdvancedSearchResultsRecord = CacheableAdvancedSearchResultsRecord;

});
define("DirectoryClientCore.model$FamilyMemberFormattedRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FamilyMemberFormattedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedRecord = (function (_super) {
__extends(FamilyMemberFormattedRecord, _super);
function FamilyMemberFormattedRecord(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedRecord.attributesToDeclare = function () {
return [
this.attr("FamilyMemberFormatted", "familyMemberFormattedAttr", "FamilyMemberFormatted", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedRec)
].concat(_super.attributesToDeclare.call(this));
};
FamilyMemberFormattedRecord.fromStructure = function (str) {
return new FamilyMemberFormattedRecord(new FamilyMemberFormattedRecord.RecordClass({
familyMemberFormattedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FamilyMemberFormattedRecord._isAnonymousRecord = true;
FamilyMemberFormattedRecord.UniqueId = "53161015-816a-7b22-b946-27bd3a779d70";
FamilyMemberFormattedRecord.init();
return FamilyMemberFormattedRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.FamilyMemberFormattedRecord = FamilyMemberFormattedRecord;

});
define("DirectoryClientCore.model$FamilyMemberFormattedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$FamilyMemberFormattedRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedRecordList = (function (_super) {
__extends(FamilyMemberFormattedRecordList, _super);
function FamilyMemberFormattedRecordList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedRecordList.itemType = DirectoryClientCoreModel.FamilyMemberFormattedRecord;
return FamilyMemberFormattedRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FamilyMemberFormattedRecordList = FamilyMemberFormattedRecordList;

});
define("DirectoryClientCore.model$LocalityHouseholdsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$LocalityHouseholdsItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRecord = (function (_super) {
__extends(LocalityHouseholdsItemRecord, _super);
function LocalityHouseholdsItemRecord(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRecord.attributesToDeclare = function () {
return [
this.attr("LocalityHouseholdsItem", "localityHouseholdsItemAttr", "LocalityHouseholdsItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.LocalityHouseholdsItemRec());
}, true, Directory_BLModel.LocalityHouseholdsItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsItemRecord.fromStructure = function (str) {
return new LocalityHouseholdsItemRecord(new LocalityHouseholdsItemRecord.RecordClass({
localityHouseholdsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityHouseholdsItemRecord._isAnonymousRecord = true;
LocalityHouseholdsItemRecord.UniqueId = "162ebab6-0f01-f4b7-0298-729693b2c86a";
LocalityHouseholdsItemRecord.init();
return LocalityHouseholdsItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.LocalityHouseholdsItemRecord = LocalityHouseholdsItemRecord;

});
define("DirectoryClientCore.model$DetailsJsonRecord", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_IS.model", "DirectoryClientCore.model", "MyBookmarks_IS.model$DetailsJsonRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_IS"], function (exports, OutSystems, MyBookmarks_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DetailsJsonRecord = (function (_super) {
__extends(DetailsJsonRecord, _super);
function DetailsJsonRecord(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRecord.attributesToDeclare = function () {
return [
this.attr("DetailsJson", "detailsJsonAttr", "DetailsJson", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MyBookmarks_ISModel.DetailsJsonRec());
}, true, MyBookmarks_ISModel.DetailsJsonRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailsJsonRecord.fromStructure = function (str) {
return new DetailsJsonRecord(new DetailsJsonRecord.RecordClass({
detailsJsonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailsJsonRecord._isAnonymousRecord = true;
DetailsJsonRecord.UniqueId = "16ee8be4-e0ee-a6dd-a7ce-a4db8999af6e";
DetailsJsonRecord.init();
return DetailsJsonRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.DetailsJsonRecord = DetailsJsonRecord;

});
define("DirectoryClientCore.model$TextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextLongIntegerRecord = (function (_super) {
__extends(TextLongIntegerRecord, _super);
function TextLongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextLongIntegerRecord._isAnonymousRecord = true;
TextLongIntegerRecord.UniqueId = "1721ddb3-5950-7d02-caf1-b85fcb630be3";
TextLongIntegerRecord.init();
return TextLongIntegerRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.TextLongIntegerRecord = TextLongIntegerRecord;

});
define("DirectoryClientCore.model$GetSettingResponseDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSettingResponseDetailsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSettingResponseDetailsRecord = (function (_super) {
__extends(GetSettingResponseDetailsRecord, _super);
function GetSettingResponseDetailsRecord(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseDetailsRecord.attributesToDeclare = function () {
return [
this.attr("GetSettingResponseDetails", "getSettingResponseDetailsAttr", "GetSettingResponseDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSettingResponseDetailsRec());
}, true, ContactBase_ISModel.GetSettingResponseDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSettingResponseDetailsRecord.fromStructure = function (str) {
return new GetSettingResponseDetailsRecord(new GetSettingResponseDetailsRecord.RecordClass({
getSettingResponseDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSettingResponseDetailsRecord._isAnonymousRecord = true;
GetSettingResponseDetailsRecord.UniqueId = "177f67c8-6de6-63c5-3166-3f50ecc6c0be";
GetSettingResponseDetailsRecord.init();
return GetSettingResponseDetailsRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetSettingResponseDetailsRecord = GetSettingResponseDetailsRecord;

});
define("DirectoryClientCore.model$CacheableSearchResultsRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemDetailRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS", "DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemDetailList"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSearchResultsRec = (function (_super) {
__extends(CacheableSearchResultsRec, _super);
function CacheableSearchResultsRec(defaults) {
_super.apply(this, arguments);
}
CacheableSearchResultsRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SearchResponsePeople", "searchResponsePeopleAttr", "SearchResponsePeople", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList());
}, true, DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList), 
this.attr("SearchResponsePlaces", "searchResponsePlacesAttr", "SearchResponsePlaces", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList());
}, true, DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSearchResultsRec.init();
return CacheableSearchResultsRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableSearchResultsRec = CacheableSearchResultsRec;

});
define("DirectoryClientCore.model$CacheableSearchResultsRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSearchResultsRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSearchResultsRecord = (function (_super) {
__extends(CacheableSearchResultsRecord, _super);
function CacheableSearchResultsRecord(defaults) {
_super.apply(this, arguments);
}
CacheableSearchResultsRecord.attributesToDeclare = function () {
return [
this.attr("CacheableSearchResults", "cacheableSearchResultsAttr", "CacheableSearchResults", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableSearchResultsRec());
}, true, DirectoryClientCoreModel.CacheableSearchResultsRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSearchResultsRecord.fromStructure = function (str) {
return new CacheableSearchResultsRecord(new CacheableSearchResultsRecord.RecordClass({
cacheableSearchResultsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableSearchResultsRecord._isAnonymousRecord = true;
CacheableSearchResultsRecord.UniqueId = "1813ef03-a4aa-45bd-f6e8-3a13cf494bc1";
CacheableSearchResultsRecord.init();
return CacheableSearchResultsRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableSearchResultsRecord = CacheableSearchResultsRecord;

});
define("DirectoryClientCore.model$DefaultLocalityList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$DefaultLocalityRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DefaultLocalityList = (function (_super) {
__extends(DefaultLocalityList, _super);
function DefaultLocalityList(defaults) {
_super.apply(this, arguments);
}
DefaultLocalityList.itemType = ContactBase_ISModel.DefaultLocalityRec;
return DefaultLocalityList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DefaultLocalityList = DefaultLocalityList;

});
define("DirectoryClientCore.model$MemoryCacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "DirectoryClientCore.model", "MemoryClientCache.model$MemoryCacheTypeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.MemoryCacheTypeRecord = MemoryCacheTypeRecord;

});
define("DirectoryClientCore.model$MemoryCacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$MemoryCacheTypeRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecordList = (function (_super) {
__extends(MemoryCacheTypeRecordList, _super);
function MemoryCacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecordList.itemType = DirectoryClientCoreModel.MemoryCacheTypeRecord;
return MemoryCacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemoryCacheTypeRecordList = MemoryCacheTypeRecordList;

});
define("DirectoryClientCore.model$PolicyActivationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PolicyActivationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PolicyActivationRecordList = (function (_super) {
__extends(PolicyActivationRecordList, _super);
function PolicyActivationRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyActivationRecordList.itemType = DirectoryClientCoreModel.PolicyActivationRecord;
return PolicyActivationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PolicyActivationRecordList = PolicyActivationRecordList;

});
define("DirectoryClientCore.model$CacheableSearchResultsList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSearchResultsRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSearchResultsList = (function (_super) {
__extends(CacheableSearchResultsList, _super);
function CacheableSearchResultsList(defaults) {
_super.apply(this, arguments);
}
CacheableSearchResultsList.itemType = DirectoryClientCoreModel.CacheableSearchResultsRec;
return CacheableSearchResultsList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableSearchResultsList = CacheableSearchResultsList;

});
define("DirectoryClientCore.model$GetDirectoryimagesResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetDirectoryimagesResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetDirectoryimagesResponseRecord = (function (_super) {
__extends(GetDirectoryimagesResponseRecord, _super);
function GetDirectoryimagesResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetDirectoryimagesResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetDirectoryimagesResponse", "getDirectoryimagesResponseAttr", "GetDirectoryimagesResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetDirectoryimagesResponseRec());
}, true, ContactBase_ISModel.GetDirectoryimagesResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetDirectoryimagesResponseRecord.fromStructure = function (str) {
return new GetDirectoryimagesResponseRecord(new GetDirectoryimagesResponseRecord.RecordClass({
getDirectoryimagesResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetDirectoryimagesResponseRecord._isAnonymousRecord = true;
GetDirectoryimagesResponseRecord.UniqueId = "1b845bab-dd9a-0491-791d-c7001a64a3ec";
GetDirectoryimagesResponseRecord.init();
return GetDirectoryimagesResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetDirectoryimagesResponseRecord = GetDirectoryimagesResponseRecord;

});
define("DirectoryClientCore.model$LocalityResultItemWithGPSRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$LocalityResultItemWithGPSRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRecord = (function (_super) {
__extends(LocalityResultItemWithGPSRecord, _super);
function LocalityResultItemWithGPSRecord(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRecord.attributesToDeclare = function () {
return [
this.attr("LocalityResultItemWithGPS", "localityResultItemWithGPSAttr", "LocalityResultItemWithGPS", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.LocalityResultItemWithGPSRec());
}, true, Directory_BLModel.LocalityResultItemWithGPSRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityResultItemWithGPSRecord.fromStructure = function (str) {
return new LocalityResultItemWithGPSRecord(new LocalityResultItemWithGPSRecord.RecordClass({
localityResultItemWithGPSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityResultItemWithGPSRecord._isAnonymousRecord = true;
LocalityResultItemWithGPSRecord.UniqueId = "1c9cea8a-720f-4179-3f2e-926763312a80";
LocalityResultItemWithGPSRecord.init();
return LocalityResultItemWithGPSRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.LocalityResultItemWithGPSRecord = LocalityResultItemWithGPSRecord;

});
define("DirectoryClientCore.model$OpeningHourItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$OpeningHourItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRecord = (function (_super) {
__extends(OpeningHourItemRecord, _super);
function OpeningHourItemRecord(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRecord.attributesToDeclare = function () {
return [
this.attr("OpeningHourItem", "openingHourItemAttr", "OpeningHourItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.OpeningHourItemRec());
}, true, ContactBase_ISModel.OpeningHourItemRec)
].concat(_super.attributesToDeclare.call(this));
};
OpeningHourItemRecord.fromStructure = function (str) {
return new OpeningHourItemRecord(new OpeningHourItemRecord.RecordClass({
openingHourItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OpeningHourItemRecord._isAnonymousRecord = true;
OpeningHourItemRecord.UniqueId = "a7f9143c-2b9d-1c73-a682-df80694235b1";
OpeningHourItemRecord.init();
return OpeningHourItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.OpeningHourItemRecord = OpeningHourItemRecord;

});
define("DirectoryClientCore.model$OpeningHourItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$OpeningHourItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRecordList = (function (_super) {
__extends(OpeningHourItemRecordList, _super);
function OpeningHourItemRecordList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRecordList.itemType = DirectoryClientCoreModel.OpeningHourItemRecord;
return OpeningHourItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.OpeningHourItemRecordList = OpeningHourItemRecordList;

});
define("DirectoryClientCore.model$BulkSignedPhotoParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedPhotoParametersRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoParametersRecordList = (function (_super) {
__extends(BulkSignedPhotoParametersRecordList, _super);
function BulkSignedPhotoParametersRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoParametersRecordList.itemType = DirectoryClientCoreModel.BulkSignedPhotoParametersRecord;
return BulkSignedPhotoParametersRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedPhotoParametersRecordList = BulkSignedPhotoParametersRecordList;

});
define("DirectoryClientCore.model$BulkSignedImagesParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.BulkSignedImagesParametersRec = BulkSignedImagesParametersRec;

});
define("DirectoryClientCore.model$BulkSignedImagesParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedImagesParametersRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersRecord = (function (_super) {
__extends(BulkSignedImagesParametersRecord, _super);
function BulkSignedImagesParametersRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedImagesParameters", "bulkSignedImagesParametersAttr", "BulkSignedImagesParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.BulkSignedImagesParametersRec());
}, true, DirectoryClientCoreModel.BulkSignedImagesParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImagesParametersRecord.fromStructure = function (str) {
return new BulkSignedImagesParametersRecord(new BulkSignedImagesParametersRecord.RecordClass({
bulkSignedImagesParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedImagesParametersRecord._isAnonymousRecord = true;
BulkSignedImagesParametersRecord.UniqueId = "20a6907d-102f-19f5-da54-4addf2f00023";
BulkSignedImagesParametersRecord.init();
return BulkSignedImagesParametersRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.BulkSignedImagesParametersRecord = BulkSignedImagesParametersRecord;

});
define("DirectoryClientCore.model$AdvancedSearch_SearchModeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_SearchModeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_SearchModeRecord = (function (_super) {
__extends(AdvancedSearch_SearchModeRecord, _super);
function AdvancedSearch_SearchModeRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_SearchModeRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearch_SearchMode", "advancedSearch_SearchModeAttr", "AdvancedSearch_SearchMode", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearch_SearchModeRec());
}, true, ContactBase_ISModel.AdvancedSearch_SearchModeRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_SearchModeRecord.fromStructure = function (str) {
return new AdvancedSearch_SearchModeRecord(new AdvancedSearch_SearchModeRecord.RecordClass({
advancedSearch_SearchModeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_SearchModeRecord._isAnonymousRecord = true;
AdvancedSearch_SearchModeRecord.UniqueId = "20e8526e-a210-a2a5-90a7-0cddee63a688";
AdvancedSearch_SearchModeRecord.init();
return AdvancedSearch_SearchModeRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearch_SearchModeRecord = AdvancedSearch_SearchModeRecord;

});
define("DirectoryClientCore.model$PhotoTagRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PhotoTagRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoTagRecord = (function (_super) {
__extends(PhotoTagRecord, _super);
function PhotoTagRecord(defaults) {
_super.apply(this, arguments);
}
PhotoTagRecord.attributesToDeclare = function () {
return [
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoTagRec());
}, true, ContactBase_ISModel.PhotoTagRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoTagRecord.fromStructure = function (str) {
return new PhotoTagRecord(new PhotoTagRecord.RecordClass({
photoTagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoTagRecord._isAnonymousRecord = true;
PhotoTagRecord.UniqueId = "20fee28b-3c7f-ea5c-4304-e469befb98a2";
PhotoTagRecord.init();
return PhotoTagRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PhotoTagRecord = PhotoTagRecord;

});
define("DirectoryClientCore.model$TimezoneList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$TimezoneRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TimezoneList = (function (_super) {
__extends(TimezoneList, _super);
function TimezoneList(defaults) {
_super.apply(this, arguments);
}
TimezoneList.itemType = ContactBase_ISModel.TimezoneRec;
return TimezoneList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TimezoneList = TimezoneList;

});
define("DirectoryClientCore.model$BulkSignedPhotoResultRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.BulkSignedPhotoResultRec = BulkSignedPhotoResultRec;

});
define("DirectoryClientCore.model$ApplicationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Policies_CS.model", "DirectoryClientCore.model", "Policies_CS.model$ApplicationRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Policies_CS"], function (exports, OutSystems, Policies_CSModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ApplicationRecord = (function (_super) {
__extends(ApplicationRecord, _super);
function ApplicationRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationRecord.attributesToDeclare = function () {
return [
this.attr("Application", "applicationAttr", "Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Policies_CSModel.ApplicationRec());
}, true, Policies_CSModel.ApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationRecord.fromStructure = function (str) {
return new ApplicationRecord(new ApplicationRecord.RecordClass({
applicationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationRecord._isAnonymousRecord = true;
ApplicationRecord.UniqueId = "abd5e56b-4de3-5d44-1d02-a8c9d5b82bc2";
ApplicationRecord.init();
return ApplicationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.ApplicationRecord = ApplicationRecord;

});
define("DirectoryClientCore.model$ApplicationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$ApplicationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ApplicationRecordList = (function (_super) {
__extends(ApplicationRecordList, _super);
function ApplicationRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationRecordList.itemType = DirectoryClientCoreModel.ApplicationRecord;
return ApplicationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ApplicationRecordList = ApplicationRecordList;

});
define("DirectoryClientCore.model$CacheableGeocodeInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$CacheableGeocodeInformationRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRecord = (function (_super) {
__extends(CacheableGeocodeInformationRecord, _super);
function CacheableGeocodeInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableGeocodeInformation", "cacheableGeocodeInformationAttr", "CacheableGeocodeInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.CacheableGeocodeInformationRec());
}, true, Directory_BLModel.CacheableGeocodeInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableGeocodeInformationRecord.fromStructure = function (str) {
return new CacheableGeocodeInformationRecord(new CacheableGeocodeInformationRecord.RecordClass({
cacheableGeocodeInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableGeocodeInformationRecord._isAnonymousRecord = true;
CacheableGeocodeInformationRecord.UniqueId = "f2a5706a-acee-02ce-14a7-bf863ff7c3ab";
CacheableGeocodeInformationRecord.init();
return CacheableGeocodeInformationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableGeocodeInformationRecord = CacheableGeocodeInformationRecord;

});
define("DirectoryClientCore.model$CacheableGeocodeInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableGeocodeInformationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRecordList = (function (_super) {
__extends(CacheableGeocodeInformationRecordList, _super);
function CacheableGeocodeInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRecordList.itemType = DirectoryClientCoreModel.CacheableGeocodeInformationRecord;
return CacheableGeocodeInformationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableGeocodeInformationRecordList = CacheableGeocodeInformationRecordList;

});
define("DirectoryClientCore.model$FormerSpouseItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FormerSpouseItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FormerSpouseItemRecord = (function (_super) {
__extends(FormerSpouseItemRecord, _super);
function FormerSpouseItemRecord(defaults) {
_super.apply(this, arguments);
}
FormerSpouseItemRecord.attributesToDeclare = function () {
return [
this.attr("FormerSpouseItem", "formerSpouseItemAttr", "FormerSpouseItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FormerSpouseItemRec());
}, true, ContactBase_ISModel.FormerSpouseItemRec)
].concat(_super.attributesToDeclare.call(this));
};
FormerSpouseItemRecord.fromStructure = function (str) {
return new FormerSpouseItemRecord(new FormerSpouseItemRecord.RecordClass({
formerSpouseItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FormerSpouseItemRecord._isAnonymousRecord = true;
FormerSpouseItemRecord.UniqueId = "26480892-2036-a9ae-6f3a-1739d0e73452";
FormerSpouseItemRecord.init();
return FormerSpouseItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.FormerSpouseItemRecord = FormerSpouseItemRecord;

});
define("DirectoryClientCore.model$Member2Record", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$Member2Rec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var Member2Record = (function (_super) {
__extends(Member2Record, _super);
function Member2Record(defaults) {
_super.apply(this, arguments);
}
Member2Record.attributesToDeclare = function () {
return [
this.attr("Member2", "member2Attr", "Member2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.Member2Rec());
}, true, ContactBase_ISModel.Member2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Member2Record.fromStructure = function (str) {
return new Member2Record(new Member2Record.RecordClass({
member2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Member2Record._isAnonymousRecord = true;
Member2Record.UniqueId = "26cb77be-9408-0898-54ac-71031c843da6";
Member2Record.init();
return Member2Record;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.Member2Record = Member2Record;

});
define("DirectoryClientCore.model$GetSignURLResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSignURLResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSignURLResponseRecord = (function (_super) {
__extends(GetSignURLResponseRecord, _super);
function GetSignURLResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetSignURLResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetSignURLResponse", "getSignURLResponseAttr", "GetSignURLResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSignURLResponseRec());
}, true, ContactBase_ISModel.GetSignURLResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSignURLResponseRecord.fromStructure = function (str) {
return new GetSignURLResponseRecord(new GetSignURLResponseRecord.RecordClass({
getSignURLResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSignURLResponseRecord._isAnonymousRecord = true;
GetSignURLResponseRecord.UniqueId = "90ad68eb-e845-86ed-8171-bfa7914b1f44";
GetSignURLResponseRecord.init();
return GetSignURLResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetSignURLResponseRecord = GetSignURLResponseRecord;

});
define("DirectoryClientCore.model$GetSignURLResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetSignURLResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSignURLResponseRecordList = (function (_super) {
__extends(GetSignURLResponseRecordList, _super);
function GetSignURLResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetSignURLResponseRecordList.itemType = DirectoryClientCoreModel.GetSignURLResponseRecord;
return GetSignURLResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSignURLResponseRecordList = GetSignURLResponseRecordList;

});
define("DirectoryClientCore.model$Member2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$Member2Record"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var Member2RecordList = (function (_super) {
__extends(Member2RecordList, _super);
function Member2RecordList(defaults) {
_super.apply(this, arguments);
}
Member2RecordList.itemType = DirectoryClientCoreModel.Member2Record;
return Member2RecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.Member2RecordList = Member2RecordList;

});
define("DirectoryClientCore.model$CacheableGeocodeInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$CacheableGeocodeInformationRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationList = (function (_super) {
__extends(CacheableGeocodeInformationList, _super);
function CacheableGeocodeInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationList.itemType = Directory_BLModel.CacheableGeocodeInformationRec;
return CacheableGeocodeInformationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableGeocodeInformationList = CacheableGeocodeInformationList;

});
define("DirectoryClientCore.model$SubdivisionItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionItemList = (function (_super) {
__extends(SubdivisionItemList, _super);
function SubdivisionItemList(defaults) {
_super.apply(this, arguments);
}
SubdivisionItemList.itemType = ContactBase_ISModel.SubdivisionItemRec;
return SubdivisionItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionItemList = SubdivisionItemList;

});
define("DirectoryClientCore.model$GetSubdivisionsGenderSplitResponse_Record", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSubdivisionsGenderSplitResponse_Rec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsGenderSplitResponse_Record = (function (_super) {
__extends(GetSubdivisionsGenderSplitResponse_Record, _super);
function GetSubdivisionsGenderSplitResponse_Record(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsGenderSplitResponse_Record.attributesToDeclare = function () {
return [
this.attr("GetSubdivisionsGenderSplitResponse_", "getSubdivisionsGenderSplitResponse_Attr", "GetSubdivisionsGenderSplitResponse_", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSubdivisionsGenderSplitResponse_Rec());
}, true, ContactBase_ISModel.GetSubdivisionsGenderSplitResponse_Rec)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionsGenderSplitResponse_Record.fromStructure = function (str) {
return new GetSubdivisionsGenderSplitResponse_Record(new GetSubdivisionsGenderSplitResponse_Record.RecordClass({
getSubdivisionsGenderSplitResponse_Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSubdivisionsGenderSplitResponse_Record._isAnonymousRecord = true;
GetSubdivisionsGenderSplitResponse_Record.UniqueId = "290baa1a-1ed4-1149-a7c0-443942d96644";
GetSubdivisionsGenderSplitResponse_Record.init();
return GetSubdivisionsGenderSplitResponse_Record;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetSubdivisionsGenderSplitResponse_Record = GetSubdivisionsGenderSplitResponse_Record;

});
define("DirectoryClientCore.model$TextLongIntegerLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextLongIntegerLongIntegerRecord = (function (_super) {
__extends(TextLongIntegerLongIntegerRecord, _super);
function TextLongIntegerLongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerLongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventHostId", "eventHostIdAttr", "EventHostId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextLongIntegerLongIntegerRecord._isAnonymousRecord = true;
TextLongIntegerLongIntegerRecord.UniqueId = "2b989a08-6b0a-7cc9-fb02-4732d9a67425";
TextLongIntegerLongIntegerRecord.init();
return TextLongIntegerLongIntegerRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.TextLongIntegerLongIntegerRecord = TextLongIntegerLongIntegerRecord;

});
define("DirectoryClientCore.model$SubdivisionsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$SubdivisionsItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRecord = (function (_super) {
__extends(SubdivisionsItemRecord, _super);
function SubdivisionsItemRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionsItem", "subdivisionsItemAttr", "SubdivisionsItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.SubdivisionsItemRec());
}, true, Directory_BLModel.SubdivisionsItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionsItemRecord.fromStructure = function (str) {
return new SubdivisionsItemRecord(new SubdivisionsItemRecord.RecordClass({
subdivisionsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionsItemRecord._isAnonymousRecord = true;
SubdivisionsItemRecord.UniqueId = "2c9388e7-1500-2427-a92d-92e7ba302315";
SubdivisionsItemRecord.init();
return SubdivisionsItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubdivisionsItemRecord = SubdivisionsItemRecord;

});
define("DirectoryClientCore.model$InterchangeItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$InterchangeItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var InterchangeItemRecord = (function (_super) {
__extends(InterchangeItemRecord, _super);
function InterchangeItemRecord(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRecord.attributesToDeclare = function () {
return [
this.attr("InterchangeItem", "interchangeItemAttr", "InterchangeItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.InterchangeItemRec());
}, true, Directory_BLModel.InterchangeItemRec)
].concat(_super.attributesToDeclare.call(this));
};
InterchangeItemRecord.fromStructure = function (str) {
return new InterchangeItemRecord(new InterchangeItemRecord.RecordClass({
interchangeItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InterchangeItemRecord._isAnonymousRecord = true;
InterchangeItemRecord.UniqueId = "8d74d960-1229-287d-c6f7-265f7b9d2b73";
InterchangeItemRecord.init();
return InterchangeItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.InterchangeItemRecord = InterchangeItemRecord;

});
define("DirectoryClientCore.model$InterchangeItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$InterchangeItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var InterchangeItemRecordList = (function (_super) {
__extends(InterchangeItemRecordList, _super);
function InterchangeItemRecordList(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRecordList.itemType = DirectoryClientCoreModel.InterchangeItemRecord;
return InterchangeItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.InterchangeItemRecordList = InterchangeItemRecordList;

});
define("DirectoryClientCore.model$AdvancedSearch_Category_APIRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_Category_APIRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_APIRecord = (function (_super) {
__extends(AdvancedSearch_Category_APIRecord, _super);
function AdvancedSearch_Category_APIRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_APIRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearch_Category_API", "advancedSearch_Category_APIAttr", "AdvancedSearch_Category_API", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearch_Category_APIRec());
}, true, ContactBase_ISModel.AdvancedSearch_Category_APIRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_Category_APIRecord.fromStructure = function (str) {
return new AdvancedSearch_Category_APIRecord(new AdvancedSearch_Category_APIRecord.RecordClass({
advancedSearch_Category_APIAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_Category_APIRecord._isAnonymousRecord = true;
AdvancedSearch_Category_APIRecord.UniqueId = "3891ab33-2cee-b570-2d1e-3b612414cc2a";
AdvancedSearch_Category_APIRecord.init();
return AdvancedSearch_Category_APIRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearch_Category_APIRecord = AdvancedSearch_Category_APIRecord;

});
define("DirectoryClientCore.model$AdvancedSearch_Category_APIRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearch_Category_APIRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_APIRecordList = (function (_super) {
__extends(AdvancedSearch_Category_APIRecordList, _super);
function AdvancedSearch_Category_APIRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_APIRecordList.itemType = DirectoryClientCoreModel.AdvancedSearch_Category_APIRecord;
return AdvancedSearch_Category_APIRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_Category_APIRecordList = AdvancedSearch_Category_APIRecordList;

});
define("DirectoryClientCore.model$LocalityHouseholdsResultItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$LocalityHouseholdsResultItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRecordList = (function (_super) {
__extends(LocalityHouseholdsResultItemRecordList, _super);
function LocalityHouseholdsResultItemRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRecordList.itemType = DirectoryClientCoreModel.LocalityHouseholdsResultItemRecord;
return LocalityHouseholdsResultItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityHouseholdsResultItemRecordList = LocalityHouseholdsResultItemRecordList;

});
define("DirectoryClientCore.model$PermissionsList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PermissionsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PermissionsList = (function (_super) {
__extends(PermissionsList, _super);
function PermissionsList(defaults) {
_super.apply(this, arguments);
}
PermissionsList.itemType = ContactBase_ISModel.PermissionsRec;
return PermissionsList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PermissionsList = PermissionsList;

});
define("DirectoryClientCore.model$GetCurrentUserResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetCurrentUserResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetCurrentUserResponseRecord = (function (_super) {
__extends(GetCurrentUserResponseRecord, _super);
function GetCurrentUserResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetCurrentUserResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetCurrentUserResponse", "getCurrentUserResponseAttr", "GetCurrentUserResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetCurrentUserResponseRec());
}, true, ContactBase_ISModel.GetCurrentUserResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCurrentUserResponseRecord.fromStructure = function (str) {
return new GetCurrentUserResponseRecord(new GetCurrentUserResponseRecord.RecordClass({
getCurrentUserResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetCurrentUserResponseRecord._isAnonymousRecord = true;
GetCurrentUserResponseRecord.UniqueId = "301e253b-1743-abe3-28b5-1ff6cedc8f87";
GetCurrentUserResponseRecord.init();
return GetCurrentUserResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetCurrentUserResponseRecord = GetCurrentUserResponseRecord;

});
define("DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemList = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemList, _super);
function GetAdvancedSearchPresignedResultItemList(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemList.itemType = ContactBase_ISModel.GetAdvancedSearchPresignedResultItemRec;
return GetAdvancedSearchPresignedResultItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemList = GetAdvancedSearchPresignedResultItemList;

});
define("DirectoryClientCore.model$UpdateFeedDirectoryItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$UpdateFeedDirectoryItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UpdateFeedDirectoryItemRecord = (function (_super) {
__extends(UpdateFeedDirectoryItemRecord, _super);
function UpdateFeedDirectoryItemRecord(defaults) {
_super.apply(this, arguments);
}
UpdateFeedDirectoryItemRecord.attributesToDeclare = function () {
return [
this.attr("UpdateFeedDirectoryItem", "updateFeedDirectoryItemAttr", "UpdateFeedDirectoryItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.UpdateFeedDirectoryItemRec());
}, true, Directory_BLModel.UpdateFeedDirectoryItemRec)
].concat(_super.attributesToDeclare.call(this));
};
UpdateFeedDirectoryItemRecord.fromStructure = function (str) {
return new UpdateFeedDirectoryItemRecord(new UpdateFeedDirectoryItemRecord.RecordClass({
updateFeedDirectoryItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UpdateFeedDirectoryItemRecord._isAnonymousRecord = true;
UpdateFeedDirectoryItemRecord.UniqueId = "30c53e3e-b18d-a871-4461-a4fc054f1c2e";
UpdateFeedDirectoryItemRecord.init();
return UpdateFeedDirectoryItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.UpdateFeedDirectoryItemRecord = UpdateFeedDirectoryItemRecord;

});
define("DirectoryClientCore.model$MemberHouseholderList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$MemberHouseholderRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberHouseholderList = (function (_super) {
__extends(MemberHouseholderList, _super);
function MemberHouseholderList(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderList.itemType = ContactBase_ISModel.MemberHouseholderRec;
return MemberHouseholderList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemberHouseholderList = MemberHouseholderList;

});
define("DirectoryClientCore.model$PermissionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PermissionsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PermissionsRecord = (function (_super) {
__extends(PermissionsRecord, _super);
function PermissionsRecord(defaults) {
_super.apply(this, arguments);
}
PermissionsRecord.attributesToDeclare = function () {
return [
this.attr("Permissions", "permissionsAttr", "Permissions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PermissionsRec());
}, true, ContactBase_ISModel.PermissionsRec)
].concat(_super.attributesToDeclare.call(this));
};
PermissionsRecord.fromStructure = function (str) {
return new PermissionsRecord(new PermissionsRecord.RecordClass({
permissionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PermissionsRecord._isAnonymousRecord = true;
PermissionsRecord.UniqueId = "329706fe-d7b4-c12c-f5e6-dabe0ab0274a";
PermissionsRecord.init();
return PermissionsRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PermissionsRecord = PermissionsRecord;

});
define("DirectoryClientCore.model$MemoryCacheResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "DirectoryClientCore.model", "MemoryClientCache.model$MemoryCacheResultRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.MemoryCacheResultRecord = MemoryCacheResultRecord;

});
define("DirectoryClientCore.model$MemoryCacheResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$MemoryCacheResultRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecordList = (function (_super) {
__extends(MemoryCacheResultRecordList, _super);
function MemoryCacheResultRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecordList.itemType = DirectoryClientCoreModel.MemoryCacheResultRecord;
return MemoryCacheResultRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemoryCacheResultRecordList = MemoryCacheResultRecordList;

});
define("DirectoryClientCore.model$DirectoryCacheTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.DirectoryCacheTypeRec = DirectoryCacheTypeRec;

});
define("DirectoryClientCore.model$DirectoryCacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DirectoryCacheTypeRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeRecord = (function (_super) {
__extends(DirectoryCacheTypeRecord, _super);
function DirectoryCacheTypeRecord(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeRecord.attributesToDeclare = function () {
return [
this.attr("DirectoryCacheType", "directoryCacheTypeAttr", "DirectoryCacheType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.DirectoryCacheTypeRec());
}, true, DirectoryClientCoreModel.DirectoryCacheTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryCacheTypeRecord.fromStructure = function (str) {
return new DirectoryCacheTypeRecord(new DirectoryCacheTypeRecord.RecordClass({
directoryCacheTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryCacheTypeRecord._isAnonymousRecord = true;
DirectoryCacheTypeRecord.UniqueId = "347b93df-40bf-bb58-e378-9671b44cc22d";
DirectoryCacheTypeRecord.init();
return DirectoryCacheTypeRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.DirectoryCacheTypeRecord = DirectoryCacheTypeRecord;

});
define("DirectoryClientCore.model$BulkSignedImageResultRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.BulkSignedImageResultRec = BulkSignedImageResultRec;

});
define("DirectoryClientCore.model$BulkSignedImageResultList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedImageResultRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultList = (function (_super) {
__extends(BulkSignedImageResultList, _super);
function BulkSignedImageResultList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultList.itemType = DirectoryClientCoreModel.BulkSignedImageResultRec;
return BulkSignedImageResultList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedImageResultList = BulkSignedImageResultList;

});
define("DirectoryClientCore.model$ExtensionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ExtensionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ExtensionRecord = (function (_super) {
__extends(ExtensionRecord, _super);
function ExtensionRecord(defaults) {
_super.apply(this, arguments);
}
ExtensionRecord.attributesToDeclare = function () {
return [
this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ExtensionRec());
}, true, ContactBase_ISModel.ExtensionRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionRecord.fromStructure = function (str) {
return new ExtensionRecord(new ExtensionRecord.RecordClass({
extensionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtensionRecord._isAnonymousRecord = true;
ExtensionRecord.UniqueId = "368d76e0-b426-5891-7b6d-b2e8dac6eb70";
ExtensionRecord.init();
return ExtensionRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.ExtensionRecord = ExtensionRecord;

});
define("DirectoryClientCore.model$SubdivisionsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubdivisionsItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRecordList = (function (_super) {
__extends(SubdivisionsItemRecordList, _super);
function SubdivisionsItemRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRecordList.itemType = DirectoryClientCoreModel.SubdivisionsItemRecord;
return SubdivisionsItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionsItemRecordList = SubdivisionsItemRecordList;

});
define("DirectoryClientCore.model$PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PhotoRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoRecord = (function (_super) {
__extends(PhotoRecord, _super);
function PhotoRecord(defaults) {
_super.apply(this, arguments);
}
PhotoRecord.attributesToDeclare = function () {
return [
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoRec());
}, true, ContactBase_ISModel.PhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoRecord.fromStructure = function (str) {
return new PhotoRecord(new PhotoRecord.RecordClass({
photoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoRecord._isAnonymousRecord = true;
PhotoRecord.UniqueId = "377362b9-38c9-4dbd-2b45-ab603bf4fc65";
PhotoRecord.init();
return PhotoRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PhotoRecord = PhotoRecord;

});
define("DirectoryClientCore.model$AdvancedSearchFiltersRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchFiltersRec = (function (_super) {
__extends(AdvancedSearchFiltersRec, _super);
function AdvancedSearchFiltersRec(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchFiltersRec.attributesToDeclare = function () {
return [
this.attr("SearchMode", "searchModeAttr", "SearchMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return DirectoryClientCoreModel.staticEntities.advancedSearch_SearchMode.near;
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return DirectoryClientCoreModel.staticEntities.advancedSearch_Category_Screen.all;
}, true), 
this.attr("HouseholdView", "householdViewAttr", "HouseholdView", false, false, OS.DataTypes.DataTypes.Text, function () {
return DirectoryClientCoreModel.staticEntities.advancedSearch_HouseholdView.household;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceHardwareId", "deviceHardwareIdAttr", "DeviceHardwareId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchFiltersRec.init();
return AdvancedSearchFiltersRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearchFiltersRec = AdvancedSearchFiltersRec;

});
define("DirectoryClientCore.model$AdvancedSearchFiltersRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearchFiltersRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchFiltersRecord = (function (_super) {
__extends(AdvancedSearchFiltersRecord, _super);
function AdvancedSearchFiltersRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchFiltersRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearchFilters", "advancedSearchFiltersAttr", "AdvancedSearchFilters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.AdvancedSearchFiltersRec());
}, true, DirectoryClientCoreModel.AdvancedSearchFiltersRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchFiltersRecord.fromStructure = function (str) {
return new AdvancedSearchFiltersRecord(new AdvancedSearchFiltersRecord.RecordClass({
advancedSearchFiltersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearchFiltersRecord._isAnonymousRecord = true;
AdvancedSearchFiltersRecord.UniqueId = "b489f5b9-b1e3-3f9e-06b6-68c4208fdb6d";
AdvancedSearchFiltersRecord.init();
return AdvancedSearchFiltersRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearchFiltersRecord = AdvancedSearchFiltersRecord;

});
define("DirectoryClientCore.model$AdvancedSearchFiltersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearchFiltersRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchFiltersRecordList = (function (_super) {
__extends(AdvancedSearchFiltersRecordList, _super);
function AdvancedSearchFiltersRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchFiltersRecordList.itemType = DirectoryClientCoreModel.AdvancedSearchFiltersRecord;
return AdvancedSearchFiltersRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearchFiltersRecordList = AdvancedSearchFiltersRecordList;

});
define("DirectoryClientCore.model$CacheableUserProfileInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserProfileInformationRec = (function (_super) {
__extends(CacheableUserProfileInformationRec, _super);
function CacheableUserProfileInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheableUserProfileInformationRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoSignedURL", "photoSignedURLAttr", "PhotoSignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CacheableUserProfileInformationRec.init();
return CacheableUserProfileInformationRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableUserProfileInformationRec = CacheableUserProfileInformationRec;

});
define("DirectoryClientCore.model$CacheableUserProfileInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableUserProfileInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserProfileInformationRecord = (function (_super) {
__extends(CacheableUserProfileInformationRecord, _super);
function CacheableUserProfileInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableUserProfileInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableUserProfileInformation", "cacheableUserProfileInformationAttr", "CacheableUserProfileInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableUserProfileInformationRec());
}, true, DirectoryClientCoreModel.CacheableUserProfileInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableUserProfileInformationRecord.fromStructure = function (str) {
return new CacheableUserProfileInformationRecord(new CacheableUserProfileInformationRecord.RecordClass({
cacheableUserProfileInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableUserProfileInformationRecord._isAnonymousRecord = true;
CacheableUserProfileInformationRecord.UniqueId = "68caa4ae-2646-5b39-1b50-f618106e2619";
CacheableUserProfileInformationRecord.init();
return CacheableUserProfileInformationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableUserProfileInformationRecord = CacheableUserProfileInformationRecord;

});
define("DirectoryClientCore.model$CacheableUserProfileInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableUserProfileInformationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserProfileInformationRecordList = (function (_super) {
__extends(CacheableUserProfileInformationRecordList, _super);
function CacheableUserProfileInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableUserProfileInformationRecordList.itemType = DirectoryClientCoreModel.CacheableUserProfileInformationRecord;
return CacheableUserProfileInformationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableUserProfileInformationRecordList = CacheableUserProfileInformationRecordList;

});
define("DirectoryClientCore.model$DetailsJsonList", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_IS.model", "DirectoryClientCore.model", "MyBookmarks_IS.model$DetailsJsonRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_IS"], function (exports, OutSystems, MyBookmarks_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DetailsJsonList = (function (_super) {
__extends(DetailsJsonList, _super);
function DetailsJsonList(defaults) {
_super.apply(this, arguments);
}
DetailsJsonList.itemType = MyBookmarks_ISModel.DetailsJsonRec;
return DetailsJsonList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DetailsJsonList = DetailsJsonList;

});
define("DirectoryClientCore.model$GetDirectoryimagesResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetDirectoryimagesResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetDirectoryimagesResponseList = (function (_super) {
__extends(GetDirectoryimagesResponseList, _super);
function GetDirectoryimagesResponseList(defaults) {
_super.apply(this, arguments);
}
GetDirectoryimagesResponseList.itemType = ContactBase_ISModel.GetDirectoryimagesResponseRec;
return GetDirectoryimagesResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetDirectoryimagesResponseList = GetDirectoryimagesResponseList;

});
define("DirectoryClientCore.model$UpdateFeedDirectoryItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$UpdateFeedDirectoryItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UpdateFeedDirectoryItemRecordList = (function (_super) {
__extends(UpdateFeedDirectoryItemRecordList, _super);
function UpdateFeedDirectoryItemRecordList(defaults) {
_super.apply(this, arguments);
}
UpdateFeedDirectoryItemRecordList.itemType = DirectoryClientCoreModel.UpdateFeedDirectoryItemRecord;
return UpdateFeedDirectoryItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.UpdateFeedDirectoryItemRecordList = UpdateFeedDirectoryItemRecordList;

});
define("DirectoryClientCore.model$ImageSigningSizeList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ImageSigningSizeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeList = (function (_super) {
__extends(ImageSigningSizeList, _super);
function ImageSigningSizeList(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeList.itemType = ContactBase_ISModel.ImageSigningSizeRec;
return ImageSigningSizeList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ImageSigningSizeList = ImageSigningSizeList;

});
define("DirectoryClientCore.model$AdvancedSearchPresignedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearchPresignedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchPresignedList = (function (_super) {
__extends(AdvancedSearchPresignedList, _super);
function AdvancedSearchPresignedList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchPresignedList.itemType = ContactBase_ISModel.AdvancedSearchPresignedRec;
return AdvancedSearchPresignedList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearchPresignedList = AdvancedSearchPresignedList;

});
define("DirectoryClientCore.model$RolesRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$RolesRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var RolesRecord = (function (_super) {
__extends(RolesRecord, _super);
function RolesRecord(defaults) {
_super.apply(this, arguments);
}
RolesRecord.attributesToDeclare = function () {
return [
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.RolesRec());
}, true, ContactBase_ISModel.RolesRec)
].concat(_super.attributesToDeclare.call(this));
};
RolesRecord.fromStructure = function (str) {
return new RolesRecord(new RolesRecord.RecordClass({
rolesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RolesRecord._isAnonymousRecord = true;
RolesRecord.UniqueId = "411e348d-e5b9-2a7e-8865-3f536a894814";
RolesRecord.init();
return RolesRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.RolesRecord = RolesRecord;

});
define("DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemDetailRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemDetailRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemDetailRecord = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemDetailRecord, _super);
function GetAdvancedSearchPresignedResultItemDetailRecord(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemDetailRecord.attributesToDeclare = function () {
return [
this.attr("GetAdvancedSearchPresignedResultItemDetail", "getAdvancedSearchPresignedResultItemDetailAttr", "GetAdvancedSearchPresignedResultItemDetail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetAdvancedSearchPresignedResultItemDetailRec());
}, true, ContactBase_ISModel.GetAdvancedSearchPresignedResultItemDetailRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdvancedSearchPresignedResultItemDetailRecord.fromStructure = function (str) {
return new GetAdvancedSearchPresignedResultItemDetailRecord(new GetAdvancedSearchPresignedResultItemDetailRecord.RecordClass({
getAdvancedSearchPresignedResultItemDetailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetAdvancedSearchPresignedResultItemDetailRecord._isAnonymousRecord = true;
GetAdvancedSearchPresignedResultItemDetailRecord.UniqueId = "42286a7f-4e4a-337e-a974-1281c401f8cf";
GetAdvancedSearchPresignedResultItemDetailRecord.init();
return GetAdvancedSearchPresignedResultItemDetailRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailRecord = GetAdvancedSearchPresignedResultItemDetailRecord;

});
define("DirectoryClientCore.model$GetLocalityStatisticsResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetLocalityStatisticsResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRecord = (function (_super) {
__extends(GetLocalityStatisticsResponseRecord, _super);
function GetLocalityStatisticsResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetLocalityStatisticsResponse", "getLocalityStatisticsResponseAttr", "GetLocalityStatisticsResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetLocalityStatisticsResponseRec());
}, true, ContactBase_ISModel.GetLocalityStatisticsResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalityStatisticsResponseRecord.fromStructure = function (str) {
return new GetLocalityStatisticsResponseRecord(new GetLocalityStatisticsResponseRecord.RecordClass({
getLocalityStatisticsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetLocalityStatisticsResponseRecord._isAnonymousRecord = true;
GetLocalityStatisticsResponseRecord.UniqueId = "426d733e-3620-da30-ce9c-257c8a31bf20";
GetLocalityStatisticsResponseRecord.init();
return GetLocalityStatisticsResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetLocalityStatisticsResponseRecord = GetLocalityStatisticsResponseRecord;

});
define("DirectoryClientCore.model$FilterRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FilterRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FilterRecord = (function (_super) {
__extends(FilterRecord, _super);
function FilterRecord(defaults) {
_super.apply(this, arguments);
}
FilterRecord.attributesToDeclare = function () {
return [
this.attr("Filter", "filterAttr", "Filter", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FilterRec());
}, true, ContactBase_ISModel.FilterRec)
].concat(_super.attributesToDeclare.call(this));
};
FilterRecord.fromStructure = function (str) {
return new FilterRecord(new FilterRecord.RecordClass({
filterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FilterRecord._isAnonymousRecord = true;
FilterRecord.UniqueId = "43eabd2c-b8d3-11c4-fbe2-e2e05b57487a";
FilterRecord.init();
return FilterRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.FilterRecord = FilterRecord;

});
define("DirectoryClientCore.model$LocalityResultItemWithGPSRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$LocalityResultItemWithGPSRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRecordList = (function (_super) {
__extends(LocalityResultItemWithGPSRecordList, _super);
function LocalityResultItemWithGPSRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRecordList.itemType = DirectoryClientCoreModel.LocalityResultItemWithGPSRecord;
return LocalityResultItemWithGPSRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityResultItemWithGPSRecordList = LocalityResultItemWithGPSRecordList;

});
define("DirectoryClientCore.model$CountryWithMapPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$CountryWithMapPositionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRecord = (function (_super) {
__extends(CountryWithMapPositionRecord, _super);
function CountryWithMapPositionRecord(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRecord.attributesToDeclare = function () {
return [
this.attr("CountryWithMapPosition", "countryWithMapPositionAttr", "CountryWithMapPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.CountryWithMapPositionRec());
}, true, Directory_BLModel.CountryWithMapPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
CountryWithMapPositionRecord.fromStructure = function (str) {
return new CountryWithMapPositionRecord(new CountryWithMapPositionRecord.RecordClass({
countryWithMapPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CountryWithMapPositionRecord._isAnonymousRecord = true;
CountryWithMapPositionRecord.UniqueId = "45a7d8ed-0944-314f-cdd6-f2acc8b3070c";
CountryWithMapPositionRecord.init();
return CountryWithMapPositionRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CountryWithMapPositionRecord = CountryWithMapPositionRecord;

});
define("DirectoryClientCore.model$ClientsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ClientsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ClientsRecord = (function (_super) {
__extends(ClientsRecord, _super);
function ClientsRecord(defaults) {
_super.apply(this, arguments);
}
ClientsRecord.attributesToDeclare = function () {
return [
this.attr("Clients", "clientsAttr", "Clients", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ClientsRec());
}, true, ContactBase_ISModel.ClientsRec)
].concat(_super.attributesToDeclare.call(this));
};
ClientsRecord.fromStructure = function (str) {
return new ClientsRecord(new ClientsRecord.RecordClass({
clientsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ClientsRecord._isAnonymousRecord = true;
ClientsRecord.UniqueId = "45b632ba-ddcf-3d45-83e2-f662317bf3e9";
ClientsRecord.init();
return ClientsRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.ClientsRecord = ClientsRecord;

});
define("DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemDetailRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemDetailRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemDetailRecordList = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemDetailRecordList, _super);
function GetAdvancedSearchPresignedResultItemDetailRecordList(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemDetailRecordList.itemType = DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailRecord;
return GetAdvancedSearchPresignedResultItemDetailRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemDetailRecordList = GetAdvancedSearchPresignedResultItemDetailRecordList;

});
define("DirectoryClientCore.model$SubscriptionRegionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubscriptionRegionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionRegionRecord = (function (_super) {
__extends(SubscriptionRegionRecord, _super);
function SubscriptionRegionRecord(defaults) {
_super.apply(this, arguments);
}
SubscriptionRegionRecord.attributesToDeclare = function () {
return [
this.attr("SubscriptionRegion", "subscriptionRegionAttr", "SubscriptionRegion", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRegionRec());
}, true, ContactBase_ISModel.SubscriptionRegionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionRegionRecord.fromStructure = function (str) {
return new SubscriptionRegionRecord(new SubscriptionRegionRecord.RecordClass({
subscriptionRegionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscriptionRegionRecord._isAnonymousRecord = true;
SubscriptionRegionRecord.UniqueId = "c1e8a122-3431-6da8-6e92-63b893660e02";
SubscriptionRegionRecord.init();
return SubscriptionRegionRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubscriptionRegionRecord = SubscriptionRegionRecord;

});
define("DirectoryClientCore.model$SubscriptionRegionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubscriptionRegionRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionRegionRecordList = (function (_super) {
__extends(SubscriptionRegionRecordList, _super);
function SubscriptionRegionRecordList(defaults) {
_super.apply(this, arguments);
}
SubscriptionRegionRecordList.itemType = DirectoryClientCoreModel.SubscriptionRegionRecord;
return SubscriptionRegionRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubscriptionRegionRecordList = SubscriptionRegionRecordList;

});
define("DirectoryClientCore.model$CommunityBusinessTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$CommunityBusinessTypeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeRecord = (function (_super) {
__extends(CommunityBusinessTypeRecord, _super);
function CommunityBusinessTypeRecord(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeRecord.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessType", "communityBusinessTypeAttr", "CommunityBusinessType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CommunityBusinessTypeRec());
}, true, ContactBase_ISModel.CommunityBusinessTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessTypeRecord.fromStructure = function (str) {
return new CommunityBusinessTypeRecord(new CommunityBusinessTypeRecord.RecordClass({
communityBusinessTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessTypeRecord._isAnonymousRecord = true;
CommunityBusinessTypeRecord.UniqueId = "a257d944-3e97-be1e-9b5c-8599b4a5d90c";
CommunityBusinessTypeRecord.init();
return CommunityBusinessTypeRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CommunityBusinessTypeRecord = CommunityBusinessTypeRecord;

});
define("DirectoryClientCore.model$CommunityBusinessTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CommunityBusinessTypeRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CommunityBusinessTypeRecordList = (function (_super) {
__extends(CommunityBusinessTypeRecordList, _super);
function CommunityBusinessTypeRecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessTypeRecordList.itemType = DirectoryClientCoreModel.CommunityBusinessTypeRecord;
return CommunityBusinessTypeRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CommunityBusinessTypeRecordList = CommunityBusinessTypeRecordList;

});
define("DirectoryClientCore.model$AdvancedSearch_Category_ScreenRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_Category_ScreenRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_ScreenRecord = (function (_super) {
__extends(AdvancedSearch_Category_ScreenRecord, _super);
function AdvancedSearch_Category_ScreenRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_ScreenRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearch_Category_Screen", "advancedSearch_Category_ScreenAttr", "AdvancedSearch_Category_Screen", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearch_Category_ScreenRec());
}, true, ContactBase_ISModel.AdvancedSearch_Category_ScreenRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_Category_ScreenRecord.fromStructure = function (str) {
return new AdvancedSearch_Category_ScreenRecord(new AdvancedSearch_Category_ScreenRecord.RecordClass({
advancedSearch_Category_ScreenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_Category_ScreenRecord._isAnonymousRecord = true;
AdvancedSearch_Category_ScreenRecord.UniqueId = "7c9ad942-d5d3-4364-f5e4-d291db298724";
AdvancedSearch_Category_ScreenRecord.init();
return AdvancedSearch_Category_ScreenRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearch_Category_ScreenRecord = AdvancedSearch_Category_ScreenRecord;

});
define("DirectoryClientCore.model$AdvancedSearch_Category_ScreenRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearch_Category_ScreenRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_ScreenRecordList = (function (_super) {
__extends(AdvancedSearch_Category_ScreenRecordList, _super);
function AdvancedSearch_Category_ScreenRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_ScreenRecordList.itemType = DirectoryClientCoreModel.AdvancedSearch_Category_ScreenRecord;
return AdvancedSearch_Category_ScreenRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_Category_ScreenRecordList = AdvancedSearch_Category_ScreenRecordList;

});
define("DirectoryClientCore.model$TextTextGetHouseholds_ConnectResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TextTextGetHouseholds_ConnectResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextTextGetHouseholds_ConnectResponseRecordList = (function (_super) {
__extends(TextTextGetHouseholds_ConnectResponseRecordList, _super);
function TextTextGetHouseholds_ConnectResponseRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextGetHouseholds_ConnectResponseRecordList.itemType = DirectoryClientCoreModel.TextTextGetHouseholds_ConnectResponseRecord;
return TextTextGetHouseholds_ConnectResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TextTextGetHouseholds_ConnectResponseRecordList = TextTextGetHouseholds_ConnectResponseRecordList;

});
define("DirectoryClientCore.model$CacheableAdvancedSearchResultsList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableAdvancedSearchResultsRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableAdvancedSearchResultsList = (function (_super) {
__extends(CacheableAdvancedSearchResultsList, _super);
function CacheableAdvancedSearchResultsList(defaults) {
_super.apply(this, arguments);
}
CacheableAdvancedSearchResultsList.itemType = DirectoryClientCoreModel.CacheableAdvancedSearchResultsRec;
return CacheableAdvancedSearchResultsList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableAdvancedSearchResultsList = CacheableAdvancedSearchResultsList;

});
define("DirectoryClientCore.model$PermissionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PermissionsRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PermissionsRecordList = (function (_super) {
__extends(PermissionsRecordList, _super);
function PermissionsRecordList(defaults) {
_super.apply(this, arguments);
}
PermissionsRecordList.itemType = DirectoryClientCoreModel.PermissionsRecord;
return PermissionsRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PermissionsRecordList = PermissionsRecordList;

});
define("DirectoryClientCore.model$DirectoryCacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DirectoryCacheTypeRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeList = (function (_super) {
__extends(DirectoryCacheTypeList, _super);
function DirectoryCacheTypeList(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeList.itemType = DirectoryClientCoreModel.DirectoryCacheTypeRec;
return DirectoryCacheTypeList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DirectoryCacheTypeList = DirectoryCacheTypeList;

});
define("DirectoryClientCore.model$UserSubscriptionRec", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UserSubscriptionRec = (function (_super) {
__extends(UserSubscriptionRec, _super);
function UserSubscriptionRec(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionRec.attributesToDeclare = function () {
return [
this.attr("IsFreeSubscription", "isFreeSubscriptionAttr", "IsFreeSubscription", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UserSubscriptionPlanId", "userSubscriptionPlanIdAttr", "UserSubscriptionPlanId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SubscribedRegionId", "subscribedRegionIdAttr", "SubscribedRegionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionLink", "subscriptionLinkAttr", "SubscriptionLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserSubscriptionRec.init();
return UserSubscriptionRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.UserSubscriptionRec = UserSubscriptionRec;

});
define("DirectoryClientCore.model$CountryWithMapPositionList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$CountryWithMapPositionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionList = (function (_super) {
__extends(CountryWithMapPositionList, _super);
function CountryWithMapPositionList(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionList.itemType = Directory_BLModel.CountryWithMapPositionRec;
return CountryWithMapPositionList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CountryWithMapPositionList = CountryWithMapPositionList;

});
define("DirectoryClientCore.model$CacheableUserInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "Directory_BL.model", "ContactBase_IS.model$GetCurrentUserResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS", "DirectoryClientCore.model$UserSubscriptionRec", "ContactBase_IS.model$GetSettingResponseParsedRec", "Directory_BL.model$CountryWithMapPositionRec", "DirectoryClientCore.referencesHealth$Directory_BL", "DirectoryClientCore.model$CountryWithMapPositionList", "DirectoryClientCore.model$PolicyActivationRec"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel, Directory_BLModel) {
var OS = OutSystems.Internal;
var CacheableUserInformationRec = (function (_super) {
__extends(CacheableUserInformationRec, _super);
function CacheableUserInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheableUserInformationRec.attributesToDeclare = function () {
return [
this.attr("UserInformation", "userInformationAttr", "UserInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetCurrentUserResponseRec());
}, true, ContactBase_ISModel.GetCurrentUserResponseRec), 
this.attr("UserSubscription", "userSubscriptionAttr", "UserSubscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.UserSubscriptionRec());
}, true, DirectoryClientCoreModel.UserSubscriptionRec), 
this.attr("UserSettings", "userSettingsAttr", "UserSettings", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSettingResponseParsedRec());
}, true, ContactBase_ISModel.GetSettingResponseParsedRec), 
this.attr("SubscribedCountriesWithMapPosition", "subscribedCountriesWithMapPositionAttr", "SubscribedCountriesWithMapPosition", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CountryWithMapPositionList());
}, true, DirectoryClientCoreModel.CountryWithMapPositionList), 
this.attr("PolicyActivation", "policyActivationAttr", "PolicyActivation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.PolicyActivationRec());
}, true, DirectoryClientCoreModel.PolicyActivationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableUserInformationRec.init();
return CacheableUserInformationRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableUserInformationRec = CacheableUserInformationRec;

});
define("DirectoryClientCore.model$CacheableUserInformationList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableUserInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserInformationList = (function (_super) {
__extends(CacheableUserInformationList, _super);
function CacheableUserInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableUserInformationList.itemType = DirectoryClientCoreModel.CacheableUserInformationRec;
return CacheableUserInformationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableUserInformationList = CacheableUserInformationList;

});
define("DirectoryClientCore.model$MyBookmarks_GroupList", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_BL.model", "DirectoryClientCore.model", "MyBookmarks_BL.model$MyBookmarks_GroupRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_BL"], function (exports, OutSystems, MyBookmarks_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupList = (function (_super) {
__extends(MyBookmarks_GroupList, _super);
function MyBookmarks_GroupList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupList.itemType = MyBookmarks_BLModel.MyBookmarks_GroupRec;
return MyBookmarks_GroupList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MyBookmarks_GroupList = MyBookmarks_GroupList;

});
define("DirectoryClientCore.model$ElasticSearch_ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ElasticSearch_ResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ElasticSearch_ResponseList = (function (_super) {
__extends(ElasticSearch_ResponseList, _super);
function ElasticSearch_ResponseList(defaults) {
_super.apply(this, arguments);
}
ElasticSearch_ResponseList.itemType = ContactBase_ISModel.ElasticSearch_ResponseRec;
return ElasticSearch_ResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ElasticSearch_ResponseList = ElasticSearch_ResponseList;

});
define("DirectoryClientCore.model$SpouseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SpouseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SpouseList = (function (_super) {
__extends(SpouseList, _super);
function SpouseList(defaults) {
_super.apply(this, arguments);
}
SpouseList.itemType = ContactBase_ISModel.SpouseRec;
return SpouseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SpouseList = SpouseList;

});
define("DirectoryClientCore.model$GetHouseholds_ConnectResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetHouseholds_ConnectResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetHouseholds_ConnectResponseList = (function (_super) {
__extends(GetHouseholds_ConnectResponseList, _super);
function GetHouseholds_ConnectResponseList(defaults) {
_super.apply(this, arguments);
}
GetHouseholds_ConnectResponseList.itemType = ContactBase_ISModel.GetHouseholds_ConnectResponseRec;
return GetHouseholds_ConnectResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetHouseholds_ConnectResponseList = GetHouseholds_ConnectResponseList;

});
define("DirectoryClientCore.model$SubdivisionItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionItemRecord = (function (_super) {
__extends(SubdivisionItemRecord, _super);
function SubdivisionItemRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionItemRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionItem", "subdivisionItemAttr", "SubdivisionItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionItemRec());
}, true, ContactBase_ISModel.SubdivisionItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionItemRecord.fromStructure = function (str) {
return new SubdivisionItemRecord(new SubdivisionItemRecord.RecordClass({
subdivisionItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionItemRecord._isAnonymousRecord = true;
SubdivisionItemRecord.UniqueId = "54e42542-03a9-5976-42c8-ad281ea5adda";
SubdivisionItemRecord.init();
return SubdivisionItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubdivisionItemRecord = SubdivisionItemRecord;

});
define("DirectoryClientCore.model$ApplicationList", ["exports", "OutSystems/ClientRuntime/Main", "Policies_CS.model", "DirectoryClientCore.model", "Policies_CS.model$ApplicationRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Policies_CS"], function (exports, OutSystems, Policies_CSModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ApplicationList = (function (_super) {
__extends(ApplicationList, _super);
function ApplicationList(defaults) {
_super.apply(this, arguments);
}
ApplicationList.itemType = Policies_CSModel.ApplicationRec;
return ApplicationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ApplicationList = ApplicationList;

});
define("DirectoryClientCore.model$CountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$CountryRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CountryRecord = (function (_super) {
__extends(CountryRecord, _super);
function CountryRecord(defaults) {
_super.apply(this, arguments);
}
CountryRecord.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CountryRec());
}, true, ContactBase_ISModel.CountryRec)
].concat(_super.attributesToDeclare.call(this));
};
CountryRecord.fromStructure = function (str) {
return new CountryRecord(new CountryRecord.RecordClass({
countryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CountryRecord._isAnonymousRecord = true;
CountryRecord.UniqueId = "8bcd7014-47e3-9c2e-7074-7b8c12bbb165";
CountryRecord.init();
return CountryRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CountryRecord = CountryRecord;

});
define("DirectoryClientCore.model$CountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CountryRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CountryRecordList = (function (_super) {
__extends(CountryRecordList, _super);
function CountryRecordList(defaults) {
_super.apply(this, arguments);
}
CountryRecordList.itemType = DirectoryClientCoreModel.CountryRecord;
return CountryRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CountryRecordList = CountryRecordList;

});
define("DirectoryClientCore.model$GetLocalityStatisticsResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetLocalityStatisticsResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseList = (function (_super) {
__extends(GetLocalityStatisticsResponseList, _super);
function GetLocalityStatisticsResponseList(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseList.itemType = ContactBase_ISModel.GetLocalityStatisticsResponseRec;
return GetLocalityStatisticsResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetLocalityStatisticsResponseList = GetLocalityStatisticsResponseList;

});
define("DirectoryClientCore.model$FamilyMemberFormattedDetailRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FamilyMemberFormattedDetailRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDetailRecord = (function (_super) {
__extends(FamilyMemberFormattedDetailRecord, _super);
function FamilyMemberFormattedDetailRecord(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDetailRecord.attributesToDeclare = function () {
return [
this.attr("FamilyMemberFormattedDetail", "familyMemberFormattedDetailAttr", "FamilyMemberFormattedDetail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.FamilyMemberFormattedDetailRec());
}, true, ContactBase_ISModel.FamilyMemberFormattedDetailRec)
].concat(_super.attributesToDeclare.call(this));
};
FamilyMemberFormattedDetailRecord.fromStructure = function (str) {
return new FamilyMemberFormattedDetailRecord(new FamilyMemberFormattedDetailRecord.RecordClass({
familyMemberFormattedDetailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FamilyMemberFormattedDetailRecord._isAnonymousRecord = true;
FamilyMemberFormattedDetailRecord.UniqueId = "9afbbd71-2ad8-2cbe-b5da-613640a95511";
FamilyMemberFormattedDetailRecord.init();
return FamilyMemberFormattedDetailRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.FamilyMemberFormattedDetailRecord = FamilyMemberFormattedDetailRecord;

});
define("DirectoryClientCore.model$FamilyMemberFormattedDetailRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$FamilyMemberFormattedDetailRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FamilyMemberFormattedDetailRecordList = (function (_super) {
__extends(FamilyMemberFormattedDetailRecordList, _super);
function FamilyMemberFormattedDetailRecordList(defaults) {
_super.apply(this, arguments);
}
FamilyMemberFormattedDetailRecordList.itemType = DirectoryClientCoreModel.FamilyMemberFormattedDetailRecord;
return FamilyMemberFormattedDetailRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FamilyMemberFormattedDetailRecordList = FamilyMemberFormattedDetailRecordList;

});
define("DirectoryClientCore.model$TextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TextLongIntegerRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextLongIntegerRecordList = (function (_super) {
__extends(TextLongIntegerRecordList, _super);
function TextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerRecordList.itemType = DirectoryClientCoreModel.TextLongIntegerRecord;
return TextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TextLongIntegerRecordList = TextLongIntegerRecordList;

});
define("DirectoryClientCore.model$AdvancedSearchParametersList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearchParametersRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchParametersList = (function (_super) {
__extends(AdvancedSearchParametersList, _super);
function AdvancedSearchParametersList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchParametersList.itemType = ContactBase_ISModel.AdvancedSearchParametersRec;
return AdvancedSearchParametersList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearchParametersList = AdvancedSearchParametersList;

});
define("DirectoryClientCore.model$DirectoryAPIFilterRecord", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$DirectoryAPIFilterRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterRecord = (function (_super) {
__extends(DirectoryAPIFilterRecord, _super);
function DirectoryAPIFilterRecord(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterRecord.attributesToDeclare = function () {
return [
this.attr("DirectoryAPIFilter", "directoryAPIFilterAttr", "DirectoryAPIFilter", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.DirectoryAPIFilterRec());
}, true, Directory_BLModel.DirectoryAPIFilterRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryAPIFilterRecord.fromStructure = function (str) {
return new DirectoryAPIFilterRecord(new DirectoryAPIFilterRecord.RecordClass({
directoryAPIFilterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryAPIFilterRecord._isAnonymousRecord = true;
DirectoryAPIFilterRecord.UniqueId = "6011ef74-30be-a426-17c3-7fa8697456b1";
DirectoryAPIFilterRecord.init();
return DirectoryAPIFilterRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.DirectoryAPIFilterRecord = DirectoryAPIFilterRecord;

});
define("DirectoryClientCore.model$AdvancedSearchParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearchParametersRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchParametersRecord = (function (_super) {
__extends(AdvancedSearchParametersRecord, _super);
function AdvancedSearchParametersRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchParametersRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearchParameters", "advancedSearchParametersAttr", "AdvancedSearchParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearchParametersRec());
}, true, ContactBase_ISModel.AdvancedSearchParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchParametersRecord.fromStructure = function (str) {
return new AdvancedSearchParametersRecord(new AdvancedSearchParametersRecord.RecordClass({
advancedSearchParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearchParametersRecord._isAnonymousRecord = true;
AdvancedSearchParametersRecord.UniqueId = "9ff653a1-305b-988d-ef88-f3d77b9ec2b8";
AdvancedSearchParametersRecord.init();
return AdvancedSearchParametersRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearchParametersRecord = AdvancedSearchParametersRecord;

});
define("DirectoryClientCore.model$AdvancedSearchParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearchParametersRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchParametersRecordList = (function (_super) {
__extends(AdvancedSearchParametersRecordList, _super);
function AdvancedSearchParametersRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchParametersRecordList.itemType = DirectoryClientCoreModel.AdvancedSearchParametersRecord;
return AdvancedSearchParametersRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearchParametersRecordList = AdvancedSearchParametersRecordList;

});
define("DirectoryClientCore.model$AdvancedSearch_HouseholdViewRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_HouseholdViewRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_HouseholdViewRecord = (function (_super) {
__extends(AdvancedSearch_HouseholdViewRecord, _super);
function AdvancedSearch_HouseholdViewRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_HouseholdViewRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearch_HouseholdView", "advancedSearch_HouseholdViewAttr", "AdvancedSearch_HouseholdView", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearch_HouseholdViewRec());
}, true, ContactBase_ISModel.AdvancedSearch_HouseholdViewRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_HouseholdViewRecord.fromStructure = function (str) {
return new AdvancedSearch_HouseholdViewRecord(new AdvancedSearch_HouseholdViewRecord.RecordClass({
advancedSearch_HouseholdViewAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_HouseholdViewRecord._isAnonymousRecord = true;
AdvancedSearch_HouseholdViewRecord.UniqueId = "9c080fad-b0cc-6959-b224-79afcf13334f";
AdvancedSearch_HouseholdViewRecord.init();
return AdvancedSearch_HouseholdViewRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearch_HouseholdViewRecord = AdvancedSearch_HouseholdViewRecord;

});
define("DirectoryClientCore.model$AdvancedSearch_HouseholdViewRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearch_HouseholdViewRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_HouseholdViewRecordList = (function (_super) {
__extends(AdvancedSearch_HouseholdViewRecordList, _super);
function AdvancedSearch_HouseholdViewRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_HouseholdViewRecordList.itemType = DirectoryClientCoreModel.AdvancedSearch_HouseholdViewRecord;
return AdvancedSearch_HouseholdViewRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_HouseholdViewRecordList = AdvancedSearch_HouseholdViewRecordList;

});
define("DirectoryClientCore.model$SubscriptionPlanRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubscriptionPlanRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionPlanRecord = (function (_super) {
__extends(SubscriptionPlanRecord, _super);
function SubscriptionPlanRecord(defaults) {
_super.apply(this, arguments);
}
SubscriptionPlanRecord.attributesToDeclare = function () {
return [
this.attr("SubscriptionPlan", "subscriptionPlanAttr", "SubscriptionPlan", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionPlanRec());
}, true, ContactBase_ISModel.SubscriptionPlanRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionPlanRecord.fromStructure = function (str) {
return new SubscriptionPlanRecord(new SubscriptionPlanRecord.RecordClass({
subscriptionPlanAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscriptionPlanRecord._isAnonymousRecord = true;
SubscriptionPlanRecord.UniqueId = "61b5e7ef-87a6-8696-58c3-e7c3f127509a";
SubscriptionPlanRecord.init();
return SubscriptionPlanRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubscriptionPlanRecord = SubscriptionPlanRecord;

});
define("DirectoryClientCore.model$GetCurrentUserResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetCurrentUserResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetCurrentUserResponseRecordList = (function (_super) {
__extends(GetCurrentUserResponseRecordList, _super);
function GetCurrentUserResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetCurrentUserResponseRecordList.itemType = DirectoryClientCoreModel.GetCurrentUserResponseRecord;
return GetCurrentUserResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetCurrentUserResponseRecordList = GetCurrentUserResponseRecordList;

});
define("DirectoryClientCore.model$MemberHouseholderHouseholderRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$MemberHouseholderHouseholderRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberHouseholderHouseholderRecord = (function (_super) {
__extends(MemberHouseholderHouseholderRecord, _super);
function MemberHouseholderHouseholderRecord(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderHouseholderRecord.attributesToDeclare = function () {
return [
this.attr("MemberHouseholderHouseholder", "memberHouseholderHouseholderAttr", "MemberHouseholderHouseholder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberHouseholderHouseholderRec());
}, true, ContactBase_ISModel.MemberHouseholderHouseholderRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberHouseholderHouseholderRecord.fromStructure = function (str) {
return new MemberHouseholderHouseholderRecord(new MemberHouseholderHouseholderRecord.RecordClass({
memberHouseholderHouseholderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberHouseholderHouseholderRecord._isAnonymousRecord = true;
MemberHouseholderHouseholderRecord.UniqueId = "63ff5dc2-ad52-5b51-d600-12fd1d0cfd43";
MemberHouseholderHouseholderRecord.init();
return MemberHouseholderHouseholderRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.MemberHouseholderHouseholderRecord = MemberHouseholderHouseholderRecord;

});
define("DirectoryClientCore.model$CacheableUserProfileInformationList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableUserProfileInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserProfileInformationList = (function (_super) {
__extends(CacheableUserProfileInformationList, _super);
function CacheableUserProfileInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableUserProfileInformationList.itemType = DirectoryClientCoreModel.CacheableUserProfileInformationRec;
return CacheableUserProfileInformationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableUserProfileInformationList = CacheableUserProfileInformationList;

});
define("DirectoryClientCore.model$BulkSignedImagesParametersList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedImagesParametersRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersList = (function (_super) {
__extends(BulkSignedImagesParametersList, _super);
function BulkSignedImagesParametersList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersList.itemType = DirectoryClientCoreModel.BulkSignedImagesParametersRec;
return BulkSignedImagesParametersList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedImagesParametersList = BulkSignedImagesParametersList;

});
define("DirectoryClientCore.model$BulkSignedImagesParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedImagesParametersRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedImagesParametersRecordList = (function (_super) {
__extends(BulkSignedImagesParametersRecordList, _super);
function BulkSignedImagesParametersRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImagesParametersRecordList.itemType = DirectoryClientCoreModel.BulkSignedImagesParametersRecord;
return BulkSignedImagesParametersRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedImagesParametersRecordList = BulkSignedImagesParametersRecordList;

});
define("DirectoryClientCore.model$UserSubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$UserSubscriptionRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UserSubscriptionList = (function (_super) {
__extends(UserSubscriptionList, _super);
function UserSubscriptionList(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionList.itemType = DirectoryClientCoreModel.UserSubscriptionRec;
return UserSubscriptionList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.UserSubscriptionList = UserSubscriptionList;

});
define("DirectoryClientCore.model$GetSettingResponseParsedRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSettingResponseParsedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSettingResponseParsedRecord = (function (_super) {
__extends(GetSettingResponseParsedRecord, _super);
function GetSettingResponseParsedRecord(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseParsedRecord.attributesToDeclare = function () {
return [
this.attr("GetSettingResponseParsed", "getSettingResponseParsedAttr", "GetSettingResponseParsed", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetSettingResponseParsedRec());
}, true, ContactBase_ISModel.GetSettingResponseParsedRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSettingResponseParsedRecord.fromStructure = function (str) {
return new GetSettingResponseParsedRecord(new GetSettingResponseParsedRecord.RecordClass({
getSettingResponseParsedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSettingResponseParsedRecord._isAnonymousRecord = true;
GetSettingResponseParsedRecord.UniqueId = "fdc2a182-44e9-e1dd-a12a-7a7a551d01a7";
GetSettingResponseParsedRecord.init();
return GetSettingResponseParsedRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetSettingResponseParsedRecord = GetSettingResponseParsedRecord;

});
define("DirectoryClientCore.model$GetSettingResponseParsedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetSettingResponseParsedRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSettingResponseParsedRecordList = (function (_super) {
__extends(GetSettingResponseParsedRecordList, _super);
function GetSettingResponseParsedRecordList(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseParsedRecordList.itemType = DirectoryClientCoreModel.GetSettingResponseParsedRecord;
return GetSettingResponseParsedRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSettingResponseParsedRecordList = GetSettingResponseParsedRecordList;

});
define("DirectoryClientCore.model$GetSignURLResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSignURLResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSignURLResponseList = (function (_super) {
__extends(GetSignURLResponseList, _super);
function GetSignURLResponseList(defaults) {
_super.apply(this, arguments);
}
GetSignURLResponseList.itemType = ContactBase_ISModel.GetSignURLResponseRec;
return GetSignURLResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSignURLResponseList = GetSignURLResponseList;

});
define("DirectoryClientCore.model$SubdivisionsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$SubdivisionsItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemList = (function (_super) {
__extends(SubdivisionsItemList, _super);
function SubdivisionsItemList(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemList.itemType = Directory_BLModel.SubdivisionsItemRec;
return SubdivisionsItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionsItemList = SubdivisionsItemList;

});
define("DirectoryClientCore.model$DefaultLocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$DefaultLocalityRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DefaultLocalityRecord = (function (_super) {
__extends(DefaultLocalityRecord, _super);
function DefaultLocalityRecord(defaults) {
_super.apply(this, arguments);
}
DefaultLocalityRecord.attributesToDeclare = function () {
return [
this.attr("DefaultLocality", "defaultLocalityAttr", "DefaultLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultLocalityRec());
}, true, ContactBase_ISModel.DefaultLocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultLocalityRecord.fromStructure = function (str) {
return new DefaultLocalityRecord(new DefaultLocalityRecord.RecordClass({
defaultLocalityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultLocalityRecord._isAnonymousRecord = true;
DefaultLocalityRecord.UniqueId = "d9880970-9108-9f19-b524-2c8eb22ffdf0";
DefaultLocalityRecord.init();
return DefaultLocalityRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.DefaultLocalityRecord = DefaultLocalityRecord;

});
define("DirectoryClientCore.model$DefaultLocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DefaultLocalityRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DefaultLocalityRecordList = (function (_super) {
__extends(DefaultLocalityRecordList, _super);
function DefaultLocalityRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultLocalityRecordList.itemType = DirectoryClientCoreModel.DefaultLocalityRecord;
return DefaultLocalityRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DefaultLocalityRecordList = DefaultLocalityRecordList;

});
define("DirectoryClientCore.model$BulkSignedPhotoResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedPhotoResultRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultRecord = (function (_super) {
__extends(BulkSignedPhotoResultRecord, _super);
function BulkSignedPhotoResultRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedPhotoResult", "bulkSignedPhotoResultAttr", "BulkSignedPhotoResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.BulkSignedPhotoResultRec());
}, true, DirectoryClientCoreModel.BulkSignedPhotoResultRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedPhotoResultRecord.fromStructure = function (str) {
return new BulkSignedPhotoResultRecord(new BulkSignedPhotoResultRecord.RecordClass({
bulkSignedPhotoResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedPhotoResultRecord._isAnonymousRecord = true;
BulkSignedPhotoResultRecord.UniqueId = "a28f6938-4570-14dc-a6c5-f3c8f2e9e5a7";
BulkSignedPhotoResultRecord.init();
return BulkSignedPhotoResultRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.BulkSignedPhotoResultRecord = BulkSignedPhotoResultRecord;

});
define("DirectoryClientCore.model$BulkSignedPhotoResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedPhotoResultRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultRecordList = (function (_super) {
__extends(BulkSignedPhotoResultRecordList, _super);
function BulkSignedPhotoResultRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultRecordList.itemType = DirectoryClientCoreModel.BulkSignedPhotoResultRecord;
return BulkSignedPhotoResultRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedPhotoResultRecordList = BulkSignedPhotoResultRecordList;

});
define("DirectoryClientCore.model$BulkSignedPhotoResultList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedPhotoResultRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedPhotoResultList = (function (_super) {
__extends(BulkSignedPhotoResultList, _super);
function BulkSignedPhotoResultList(defaults) {
_super.apply(this, arguments);
}
BulkSignedPhotoResultList.itemType = DirectoryClientCoreModel.BulkSignedPhotoResultRec;
return BulkSignedPhotoResultList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedPhotoResultList = BulkSignedPhotoResultList;

});
define("DirectoryClientCore.model$TimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$TimezoneRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TimezoneRecord = (function (_super) {
__extends(TimezoneRecord, _super);
function TimezoneRecord(defaults) {
_super.apply(this, arguments);
}
TimezoneRecord.attributesToDeclare = function () {
return [
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.TimezoneRec());
}, true, ContactBase_ISModel.TimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
TimezoneRecord.fromStructure = function (str) {
return new TimezoneRecord(new TimezoneRecord.RecordClass({
timezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimezoneRecord._isAnonymousRecord = true;
TimezoneRecord.UniqueId = "6c01928a-9223-2067-aa7f-dfb292703859";
TimezoneRecord.init();
return TimezoneRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.TimezoneRecord = TimezoneRecord;

});
define("DirectoryClientCore.model$PhotoUrlRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PhotoUrlRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoUrlRecord = (function (_super) {
__extends(PhotoUrlRecord, _super);
function PhotoUrlRecord(defaults) {
_super.apply(this, arguments);
}
PhotoUrlRecord.attributesToDeclare = function () {
return [
this.attr("PhotoUrl", "photoUrlAttr", "PhotoUrl", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PhotoUrlRec());
}, true, ContactBase_ISModel.PhotoUrlRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoUrlRecord.fromStructure = function (str) {
return new PhotoUrlRecord(new PhotoUrlRecord.RecordClass({
photoUrlAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoUrlRecord._isAnonymousRecord = true;
PhotoUrlRecord.UniqueId = "6f382051-bdb2-ccaf-bf6d-cac7a41f0a52";
PhotoUrlRecord.init();
return PhotoUrlRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PhotoUrlRecord = PhotoUrlRecord;

});
define("DirectoryClientCore.model$BusinessLinkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$BusinessLinkItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRecord = (function (_super) {
__extends(BusinessLinkItemRecord, _super);
function BusinessLinkItemRecord(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRecord.attributesToDeclare = function () {
return [
this.attr("BusinessLinkItem", "businessLinkItemAttr", "BusinessLinkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.BusinessLinkItemRec());
}, true, ContactBase_ISModel.BusinessLinkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BusinessLinkItemRecord.fromStructure = function (str) {
return new BusinessLinkItemRecord(new BusinessLinkItemRecord.RecordClass({
businessLinkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BusinessLinkItemRecord._isAnonymousRecord = true;
BusinessLinkItemRecord.UniqueId = "6f509992-e0c0-bd43-3bdd-5e77013568d8";
BusinessLinkItemRecord.init();
return BusinessLinkItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.BusinessLinkItemRecord = BusinessLinkItemRecord;

});
define("DirectoryClientCore.model$DefaultCountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$DefaultCountryRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DefaultCountryRecord = (function (_super) {
__extends(DefaultCountryRecord, _super);
function DefaultCountryRecord(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRecord.attributesToDeclare = function () {
return [
this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.DefaultCountryRec());
}, true, ContactBase_ISModel.DefaultCountryRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultCountryRecord.fromStructure = function (str) {
return new DefaultCountryRecord(new DefaultCountryRecord.RecordClass({
defaultCountryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultCountryRecord._isAnonymousRecord = true;
DefaultCountryRecord.UniqueId = "709d4487-fc90-0da1-fe40-4702c458e3e5";
DefaultCountryRecord.init();
return DefaultCountryRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.DefaultCountryRecord = DefaultCountryRecord;

});
define("DirectoryClientCore.model$LocalityHouseholdsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$LocalityHouseholdsItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemList = (function (_super) {
__extends(LocalityHouseholdsItemList, _super);
function LocalityHouseholdsItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemList.itemType = Directory_BLModel.LocalityHouseholdsItemRec;
return LocalityHouseholdsItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityHouseholdsItemList = LocalityHouseholdsItemList;

});
define("DirectoryClientCore.model$InterchangeItemList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$InterchangeItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var InterchangeItemList = (function (_super) {
__extends(InterchangeItemList, _super);
function InterchangeItemList(defaults) {
_super.apply(this, arguments);
}
InterchangeItemList.itemType = Directory_BLModel.InterchangeItemRec;
return InterchangeItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.InterchangeItemList = InterchangeItemList;

});
define("DirectoryClientCore.model$BusinessLinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$BusinessLinkItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemList = (function (_super) {
__extends(BusinessLinkItemList, _super);
function BusinessLinkItemList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemList.itemType = ContactBase_ISModel.BusinessLinkItemRec;
return BusinessLinkItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BusinessLinkItemList = BusinessLinkItemList;

});
define("DirectoryClientCore.model$LocalityCommunityBusinessList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$LocalityCommunityBusinessRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessList = (function (_super) {
__extends(LocalityCommunityBusinessList, _super);
function LocalityCommunityBusinessList(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessList.itemType = ContactBase_ISModel.LocalityCommunityBusinessRec;
return LocalityCommunityBusinessList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityCommunityBusinessList = LocalityCommunityBusinessList;

});
define("DirectoryClientCore.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.TextRecord = TextRecord;

});
define("DirectoryClientCore.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TextRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.itemType = DirectoryClientCoreModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TextRecordList = TextRecordList;

});
define("DirectoryClientCore.model$CacheableLocalityInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "Directory_BL.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetLocalityStatisticsResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS", "Directory_BL.model$LocalityHouseholdsItemRec", "DirectoryClientCore.referencesHealth$Directory_BL", "DirectoryClientCore.model$LocalityHouseholdsItemList", "Directory_BL.model$SubdivisionsItemRec", "DirectoryClientCore.model$SubdivisionsItemList", "Directory_BL.model$InterchangeItemRec", "DirectoryClientCore.model$InterchangeItemList", "ContactBase_IS.model$LocalityCommunityBusinessRec", "DirectoryClientCore.model$LocalityCommunityBusinessList", "Directory_BL.model$CacheableGeocodeInformationRec", "ContactBase_IS.model$TimezoneRec", "DirectoryClientCore.model$TextRecordList"], function (exports, OutSystems, ContactBase_ISModel, Directory_BLModel, DirectoryClientCoreModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetLocalityStatisticsResponseRec());
}, true, ContactBase_ISModel.GetLocalityStatisticsResponseRec), 
this.attr("LocalityHouseholdsList", "localityHouseholdsListAttr", "LocalityHouseholdsList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.LocalityHouseholdsItemList());
}, true, DirectoryClientCoreModel.LocalityHouseholdsItemList), 
this.attr("LocalitySubdivisionsList", "localitySubdivisionsListAttr", "LocalitySubdivisionsList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.SubdivisionsItemList());
}, true, DirectoryClientCoreModel.SubdivisionsItemList), 
this.attr("LocalityInterchanges", "localityInterchangesAttr", "LocalityInterchanges", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.InterchangeItemList());
}, true, DirectoryClientCoreModel.InterchangeItemList), 
this.attr("LocalitySchools", "localitySchoolsAttr", "LocalitySchools", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.LocalityCommunityBusinessList());
}, true, DirectoryClientCoreModel.LocalityCommunityBusinessList), 
this.attr("LocalityStores", "localityStoresAttr", "LocalityStores", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.LocalityCommunityBusinessList());
}, true, DirectoryClientCoreModel.LocalityCommunityBusinessList), 
this.attr("LocalityGeocodeInformation", "localityGeocodeInformationAttr", "LocalityGeocodeInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Directory_BLModel.CacheableGeocodeInformationRec());
}, true, Directory_BLModel.CacheableGeocodeInformationRec), 
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.TimezoneRec());
}, true, ContactBase_ISModel.TimezoneRec), 
this.attr("AssembleMeetingTypes", "assembleMeetingTypesAttr", "AssembleMeetingTypes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.TextRecordList());
}, true, DirectoryClientCoreModel.TextRecordList)
].concat(_super.attributesToDeclare.call(this));
};
CacheableLocalityInformationRec.init();
return CacheableLocalityInformationRec;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableLocalityInformationRec = CacheableLocalityInformationRec;

});
define("DirectoryClientCore.model$CacheableLocalityInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableLocalityInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRecord = (function (_super) {
__extends(CacheableLocalityInformationRecord, _super);
function CacheableLocalityInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableLocalityInformation", "cacheableLocalityInformationAttr", "CacheableLocalityInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableLocalityInformationRec());
}, true, DirectoryClientCoreModel.CacheableLocalityInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableLocalityInformationRecord.fromStructure = function (str) {
return new CacheableLocalityInformationRecord(new CacheableLocalityInformationRecord.RecordClass({
cacheableLocalityInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableLocalityInformationRecord._isAnonymousRecord = true;
CacheableLocalityInformationRecord.UniqueId = "71c87e49-7940-81f8-d099-8231f8245e42";
CacheableLocalityInformationRecord.init();
return CacheableLocalityInformationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableLocalityInformationRecord = CacheableLocalityInformationRecord;

});
define("DirectoryClientCore.model$SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubscriptionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionRecord = (function (_super) {
__extends(SubscriptionRecord, _super);
function SubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
SubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubscriptionRec());
}, true, ContactBase_ISModel.SubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionRecord.fromStructure = function (str) {
return new SubscriptionRecord(new SubscriptionRecord.RecordClass({
subscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscriptionRecord._isAnonymousRecord = true;
SubscriptionRecord.UniqueId = "72c286f0-9901-fadf-0dd5-1329b5367cb2";
SubscriptionRecord.init();
return SubscriptionRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubscriptionRecord = SubscriptionRecord;

});
define("DirectoryClientCore.model$TextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextTextTextRecord = (function (_super) {
__extends(TextTextTextRecord, _super);
function TextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextRecord.attributesToDeclare = function () {
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
TextTextTextRecord._isAnonymousRecord = true;
TextTextTextRecord.UniqueId = "e5932bd1-112d-f3d0-4655-a551a317a6aa";
TextTextTextRecord.init();
return TextTextTextRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.TextTextTextRecord = TextTextTextRecord;

});
define("DirectoryClientCore.model$TextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TextTextTextRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextTextTextRecordList = (function (_super) {
__extends(TextTextTextRecordList, _super);
function TextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextRecordList.itemType = DirectoryClientCoreModel.TextTextTextRecord;
return TextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TextTextTextRecordList = TextTextTextRecordList;

});
define("DirectoryClientCore.model$AdvancedSearch_BDMList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_BDMRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_BDMList = (function (_super) {
__extends(AdvancedSearch_BDMList, _super);
function AdvancedSearch_BDMList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_BDMList.itemType = ContactBase_ISModel.AdvancedSearch_BDMRec;
return AdvancedSearch_BDMList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_BDMList = AdvancedSearch_BDMList;

});
define("DirectoryClientCore.model$ImageSigningSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ImageSigningSizeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeRecord = (function (_super) {
__extends(ImageSigningSizeRecord, _super);
function ImageSigningSizeRecord(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeRecord.attributesToDeclare = function () {
return [
this.attr("ImageSigningSize", "imageSigningSizeAttr", "ImageSigningSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ImageSigningSizeRec());
}, true, ContactBase_ISModel.ImageSigningSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageSigningSizeRecord.fromStructure = function (str) {
return new ImageSigningSizeRecord(new ImageSigningSizeRecord.RecordClass({
imageSigningSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageSigningSizeRecord._isAnonymousRecord = true;
ImageSigningSizeRecord.UniqueId = "f2ddeccb-1426-71f8-25fb-3f002892e80c";
ImageSigningSizeRecord.init();
return ImageSigningSizeRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.ImageSigningSizeRecord = ImageSigningSizeRecord;

});
define("DirectoryClientCore.model$ImageSigningSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$ImageSigningSizeRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ImageSigningSizeRecordList = (function (_super) {
__extends(ImageSigningSizeRecordList, _super);
function ImageSigningSizeRecordList(defaults) {
_super.apply(this, arguments);
}
ImageSigningSizeRecordList.itemType = DirectoryClientCoreModel.ImageSigningSizeRecord;
return ImageSigningSizeRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ImageSigningSizeRecordList = ImageSigningSizeRecordList;

});
define("DirectoryClientCore.model$AdvancedSearch_BDMRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_BDMRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_BDMRecord = (function (_super) {
__extends(AdvancedSearch_BDMRecord, _super);
function AdvancedSearch_BDMRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_BDMRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearch_BDM", "advancedSearch_BDMAttr", "AdvancedSearch_BDM", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearch_BDMRec());
}, true, ContactBase_ISModel.AdvancedSearch_BDMRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearch_BDMRecord.fromStructure = function (str) {
return new AdvancedSearch_BDMRecord(new AdvancedSearch_BDMRecord.RecordClass({
advancedSearch_BDMAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearch_BDMRecord._isAnonymousRecord = true;
AdvancedSearch_BDMRecord.UniqueId = "ac7dd85e-fd20-ca8a-1147-f6d82c36d322";
AdvancedSearch_BDMRecord.init();
return AdvancedSearch_BDMRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearch_BDMRecord = AdvancedSearch_BDMRecord;

});
define("DirectoryClientCore.model$AdvancedSearch_BDMRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearch_BDMRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_BDMRecordList = (function (_super) {
__extends(AdvancedSearch_BDMRecordList, _super);
function AdvancedSearch_BDMRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_BDMRecordList.itemType = DirectoryClientCoreModel.AdvancedSearch_BDMRecord;
return AdvancedSearch_BDMRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_BDMRecordList = AdvancedSearch_BDMRecordList;

});
define("DirectoryClientCore.model$PhotoUrlList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PhotoUrlRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoUrlList = (function (_super) {
__extends(PhotoUrlList, _super);
function PhotoUrlList(defaults) {
_super.apply(this, arguments);
}
PhotoUrlList.itemType = ContactBase_ISModel.PhotoUrlRec;
return PhotoUrlList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoUrlList = PhotoUrlList;

});
define("DirectoryClientCore.model$LocalityHouseholdsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$LocalityHouseholdsItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRecordList = (function (_super) {
__extends(LocalityHouseholdsItemRecordList, _super);
function LocalityHouseholdsItemRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRecordList.itemType = DirectoryClientCoreModel.LocalityHouseholdsItemRecord;
return LocalityHouseholdsItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityHouseholdsItemRecordList = LocalityHouseholdsItemRecordList;

});
define("DirectoryClientCore.model$DirectoryCacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DirectoryCacheTypeRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DirectoryCacheTypeRecordList = (function (_super) {
__extends(DirectoryCacheTypeRecordList, _super);
function DirectoryCacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DirectoryCacheTypeRecordList.itemType = DirectoryClientCoreModel.DirectoryCacheTypeRecord;
return DirectoryCacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DirectoryCacheTypeRecordList = DirectoryCacheTypeRecordList;

});
define("DirectoryClientCore.model$LocalityResultItemWithGPSList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$LocalityResultItemWithGPSRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSList = (function (_super) {
__extends(LocalityResultItemWithGPSList, _super);
function LocalityResultItemWithGPSList(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSList.itemType = Directory_BLModel.LocalityResultItemWithGPSRec;
return LocalityResultItemWithGPSList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityResultItemWithGPSList = LocalityResultItemWithGPSList;

});
define("DirectoryClientCore.model$MyBookmarks_GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_BL.model", "DirectoryClientCore.model", "MyBookmarks_BL.model$MyBookmarks_GroupRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_BL"], function (exports, OutSystems, MyBookmarks_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecord = (function (_super) {
__extends(MyBookmarks_GroupRecord, _super);
function MyBookmarks_GroupRecord(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecord.attributesToDeclare = function () {
return [
this.attr("MyBookmarks_Group", "myBookmarks_GroupAttr", "MyBookmarks_Group", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MyBookmarks_BLModel.MyBookmarks_GroupRec());
}, true, MyBookmarks_BLModel.MyBookmarks_GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_GroupRecord.fromStructure = function (str) {
return new MyBookmarks_GroupRecord(new MyBookmarks_GroupRecord.RecordClass({
myBookmarks_GroupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_GroupRecord._isAnonymousRecord = true;
MyBookmarks_GroupRecord.UniqueId = "7ff65f03-a54a-5fb3-4608-a9a62e32b2a6";
MyBookmarks_GroupRecord.init();
return MyBookmarks_GroupRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.MyBookmarks_GroupRecord = MyBookmarks_GroupRecord;

});
define("DirectoryClientCore.model$GetUserByIdResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetUserByIdResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetUserByIdResponseList = (function (_super) {
__extends(GetUserByIdResponseList, _super);
function GetUserByIdResponseList(defaults) {
_super.apply(this, arguments);
}
GetUserByIdResponseList.itemType = ContactBase_ISModel.GetUserByIdResponseRec;
return GetUserByIdResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetUserByIdResponseList = GetUserByIdResponseList;

});
define("DirectoryClientCore.model$PhotoDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_IS.model", "DirectoryClientCore.model", "MyBookmarks_IS.model$PhotoDetailsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_IS"], function (exports, OutSystems, MyBookmarks_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRecord = (function (_super) {
__extends(PhotoDetailsRecord, _super);
function PhotoDetailsRecord(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRecord.attributesToDeclare = function () {
return [
this.attr("PhotoDetails", "photoDetailsAttr", "PhotoDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MyBookmarks_ISModel.PhotoDetailsRec());
}, true, MyBookmarks_ISModel.PhotoDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoDetailsRecord.fromStructure = function (str) {
return new PhotoDetailsRecord(new PhotoDetailsRecord.RecordClass({
photoDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoDetailsRecord._isAnonymousRecord = true;
PhotoDetailsRecord.UniqueId = "d768b661-84ac-ab46-6e89-ec74938a835a";
PhotoDetailsRecord.init();
return PhotoDetailsRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PhotoDetailsRecord = PhotoDetailsRecord;

});
define("DirectoryClientCore.model$PhotoDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PhotoDetailsRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRecordList = (function (_super) {
__extends(PhotoDetailsRecordList, _super);
function PhotoDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRecordList.itemType = DirectoryClientCoreModel.PhotoDetailsRecord;
return PhotoDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoDetailsRecordList = PhotoDetailsRecordList;

});
define("DirectoryClientCore.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "DirectoryClientCore.model", "ServiceCenter.model$UserRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.UserRecord = UserRecord;

});
define("DirectoryClientCore.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$UserRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = DirectoryClientCoreModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.UserRecordList = UserRecordList;

});
define("DirectoryClientCore.model$ExtensionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ExtensionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ExtensionList = (function (_super) {
__extends(ExtensionList, _super);
function ExtensionList(defaults) {
_super.apply(this, arguments);
}
ExtensionList.itemType = ContactBase_ISModel.ExtensionRec;
return ExtensionList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ExtensionList = ExtensionList;

});
define("DirectoryClientCore.model$CountryWithMapPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CountryWithMapPositionRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRecordList = (function (_super) {
__extends(CountryWithMapPositionRecordList, _super);
function CountryWithMapPositionRecordList(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRecordList.itemType = DirectoryClientCoreModel.CountryWithMapPositionRecord;
return CountryWithMapPositionRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CountryWithMapPositionRecordList = CountryWithMapPositionRecordList;

});
define("DirectoryClientCore.model$FilterList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$FilterRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FilterList = (function (_super) {
__extends(FilterList, _super);
function FilterList(defaults) {
_super.apply(this, arguments);
}
FilterList.itemType = ContactBase_ISModel.FilterRec;
return FilterList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FilterList = FilterList;

});
define("DirectoryClientCore.model$AdvancedSearch_Category_ScreenList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_Category_ScreenRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_ScreenList = (function (_super) {
__extends(AdvancedSearch_Category_ScreenList, _super);
function AdvancedSearch_Category_ScreenList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_ScreenList.itemType = ContactBase_ISModel.AdvancedSearch_Category_ScreenRec;
return AdvancedSearch_Category_ScreenList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_Category_ScreenList = AdvancedSearch_Category_ScreenList;

});
define("DirectoryClientCore.model$ConnectConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ConnectConfigRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ConnectConfigRecord = (function (_super) {
__extends(ConnectConfigRecord, _super);
function ConnectConfigRecord(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRecord.attributesToDeclare = function () {
return [
this.attr("ConnectConfig", "connectConfigAttr", "ConnectConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.ConnectConfigRec());
}, true, ContactBase_ISModel.ConnectConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ConnectConfigRecord.fromStructure = function (str) {
return new ConnectConfigRecord(new ConnectConfigRecord.RecordClass({
connectConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConnectConfigRecord._isAnonymousRecord = true;
ConnectConfigRecord.UniqueId = "88e155f6-cc7d-58fd-e636-1920a272ee72";
ConnectConfigRecord.init();
return ConnectConfigRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.ConnectConfigRecord = ConnectConfigRecord;

});
define("DirectoryClientCore.model$GetLocalityStatisticsResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetLocalityStatisticsResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRecordList = (function (_super) {
__extends(GetLocalityStatisticsResponseRecordList, _super);
function GetLocalityStatisticsResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRecordList.itemType = DirectoryClientCoreModel.GetLocalityStatisticsResponseRecord;
return GetLocalityStatisticsResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetLocalityStatisticsResponseRecordList = GetLocalityStatisticsResponseRecordList;

});
define("DirectoryClientCore.model$PhotoTagList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PhotoTagRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoTagList = (function (_super) {
__extends(PhotoTagList, _super);
function PhotoTagList(defaults) {
_super.apply(this, arguments);
}
PhotoTagList.itemType = ContactBase_ISModel.PhotoTagRec;
return PhotoTagList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoTagList = PhotoTagList;

});
define("DirectoryClientCore.model$MemberHouseholderHouseholderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$MemberHouseholderHouseholderRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberHouseholderHouseholderRecordList = (function (_super) {
__extends(MemberHouseholderHouseholderRecordList, _super);
function MemberHouseholderHouseholderRecordList(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderHouseholderRecordList.itemType = DirectoryClientCoreModel.MemberHouseholderHouseholderRecord;
return MemberHouseholderHouseholderRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemberHouseholderHouseholderRecordList = MemberHouseholderHouseholderRecordList;

});
define("DirectoryClientCore.model$SubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionRecord = (function (_super) {
__extends(SubdivisionRecord, _super);
function SubdivisionRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionRecord.attributesToDeclare = function () {
return [
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SubdivisionRec());
}, true, ContactBase_ISModel.SubdivisionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionRecord.fromStructure = function (str) {
return new SubdivisionRecord(new SubdivisionRecord.RecordClass({
subdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionRecord._isAnonymousRecord = true;
SubdivisionRecord.UniqueId = "908992d6-ee84-83ba-24b2-0e71ddbe7580";
SubdivisionRecord.init();
return SubdivisionRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SubdivisionRecord = SubdivisionRecord;

});
define("DirectoryClientCore.model$CacheableLocalityInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableLocalityInformationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRecordList = (function (_super) {
__extends(CacheableLocalityInformationRecordList, _super);
function CacheableLocalityInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRecordList.itemType = DirectoryClientCoreModel.CacheableLocalityInformationRecord;
return CacheableLocalityInformationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableLocalityInformationRecordList = CacheableLocalityInformationRecordList;

});
define("DirectoryClientCore.model$GetDirectoryimagesResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetDirectoryimagesResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetDirectoryimagesResponseRecordList = (function (_super) {
__extends(GetDirectoryimagesResponseRecordList, _super);
function GetDirectoryimagesResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetDirectoryimagesResponseRecordList.itemType = DirectoryClientCoreModel.GetDirectoryimagesResponseRecord;
return GetDirectoryimagesResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetDirectoryimagesResponseRecordList = GetDirectoryimagesResponseRecordList;

});
define("DirectoryClientCore.model$ConnectConfigList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ConnectConfigRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ConnectConfigList = (function (_super) {
__extends(ConnectConfigList, _super);
function ConnectConfigList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigList.itemType = ContactBase_ISModel.ConnectConfigRec;
return ConnectConfigList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ConnectConfigList = ConnectConfigList;

});
define("DirectoryClientCore.model$AdvancedSearch_SearchModeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearch_SearchModeRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_SearchModeRecordList = (function (_super) {
__extends(AdvancedSearch_SearchModeRecordList, _super);
function AdvancedSearch_SearchModeRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_SearchModeRecordList.itemType = DirectoryClientCoreModel.AdvancedSearch_SearchModeRecord;
return AdvancedSearch_SearchModeRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_SearchModeRecordList = AdvancedSearch_SearchModeRecordList;

});
define("DirectoryClientCore.model$LocalityCommunityBusinessRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$LocalityCommunityBusinessRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRecord = (function (_super) {
__extends(LocalityCommunityBusinessRecord, _super);
function LocalityCommunityBusinessRecord(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRecord.attributesToDeclare = function () {
return [
this.attr("LocalityCommunityBusiness", "localityCommunityBusinessAttr", "LocalityCommunityBusiness", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityCommunityBusinessRec());
}, true, ContactBase_ISModel.LocalityCommunityBusinessRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityCommunityBusinessRecord.fromStructure = function (str) {
return new LocalityCommunityBusinessRecord(new LocalityCommunityBusinessRecord.RecordClass({
localityCommunityBusinessAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityCommunityBusinessRecord._isAnonymousRecord = true;
LocalityCommunityBusinessRecord.UniqueId = "990f9f29-26c1-babb-3cb3-a614f83184e2";
LocalityCommunityBusinessRecord.init();
return LocalityCommunityBusinessRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.LocalityCommunityBusinessRecord = LocalityCommunityBusinessRecord;

});
define("DirectoryClientCore.model$MemberList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$MemberRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberList = (function (_super) {
__extends(MemberList, _super);
function MemberList(defaults) {
_super.apply(this, arguments);
}
MemberList.itemType = ContactBase_ISModel.MemberRec;
return MemberList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemberList = MemberList;

});
define("DirectoryClientCore.model$PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PhotoRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoRecordList = (function (_super) {
__extends(PhotoRecordList, _super);
function PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoRecordList.itemType = DirectoryClientCoreModel.PhotoRecord;
return PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoRecordList = PhotoRecordList;

});
define("DirectoryClientCore.model$HallPhotoExtensiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$HallPhotoExtensiveRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRecord = (function (_super) {
__extends(HallPhotoExtensiveRecord, _super);
function HallPhotoExtensiveRecord(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRecord.attributesToDeclare = function () {
return [
this.attr("HallPhotoExtensive", "hallPhotoExtensiveAttr", "HallPhotoExtensive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HallPhotoExtensiveRec());
}, true, ContactBase_ISModel.HallPhotoExtensiveRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoExtensiveRecord.fromStructure = function (str) {
return new HallPhotoExtensiveRecord(new HallPhotoExtensiveRecord.RecordClass({
hallPhotoExtensiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HallPhotoExtensiveRecord._isAnonymousRecord = true;
HallPhotoExtensiveRecord.UniqueId = "9cff6b67-597f-5de4-a9ae-ffcf6521e258";
HallPhotoExtensiveRecord.init();
return HallPhotoExtensiveRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.HallPhotoExtensiveRecord = HallPhotoExtensiveRecord;

});
define("DirectoryClientCore.model$TextLongInteger1Record", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model"], function (exports, OutSystems, DirectoryClientCoreModel) {
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
DirectoryClientCoreModel.TextLongInteger1Record = TextLongInteger1Record;

});
define("DirectoryClientCore.model$TextLongInteger1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TextLongInteger1Record"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextLongInteger1RecordList = (function (_super) {
__extends(TextLongInteger1RecordList, _super);
function TextLongInteger1RecordList(defaults) {
_super.apply(this, arguments);
}
TextLongInteger1RecordList.itemType = DirectoryClientCoreModel.TextLongInteger1Record;
return TextLongInteger1RecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TextLongInteger1RecordList = TextLongInteger1RecordList;

});
define("DirectoryClientCore.model$GetUserByIdResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetUserByIdResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetUserByIdResponseRecord = (function (_super) {
__extends(GetUserByIdResponseRecord, _super);
function GetUserByIdResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetUserByIdResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetUserByIdResponse", "getUserByIdResponseAttr", "GetUserByIdResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetUserByIdResponseRec());
}, true, ContactBase_ISModel.GetUserByIdResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetUserByIdResponseRecord.fromStructure = function (str) {
return new GetUserByIdResponseRecord(new GetUserByIdResponseRecord.RecordClass({
getUserByIdResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetUserByIdResponseRecord._isAnonymousRecord = true;
GetUserByIdResponseRecord.UniqueId = "c121868b-3ae9-caa5-ab58-3f53225bb63b";
GetUserByIdResponseRecord.init();
return GetUserByIdResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetUserByIdResponseRecord = GetUserByIdResponseRecord;

});
define("DirectoryClientCore.model$GetUserByIdResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetUserByIdResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetUserByIdResponseRecordList = (function (_super) {
__extends(GetUserByIdResponseRecordList, _super);
function GetUserByIdResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetUserByIdResponseRecordList.itemType = DirectoryClientCoreModel.GetUserByIdResponseRecord;
return GetUserByIdResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetUserByIdResponseRecordList = GetUserByIdResponseRecordList;

});
define("DirectoryClientCore.model$MyBookmarks_GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$MyBookmarks_GroupRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecordList = (function (_super) {
__extends(MyBookmarks_GroupRecordList, _super);
function MyBookmarks_GroupRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecordList.itemType = DirectoryClientCoreModel.MyBookmarks_GroupRecord;
return MyBookmarks_GroupRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MyBookmarks_GroupRecordList = MyBookmarks_GroupRecordList;

});
define("DirectoryClientCore.model$CacheableUserInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableUserInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserInformationRecord = (function (_super) {
__extends(CacheableUserInformationRecord, _super);
function CacheableUserInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableUserInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableUserInformation", "cacheableUserInformationAttr", "CacheableUserInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableUserInformationRec());
}, true, DirectoryClientCoreModel.CacheableUserInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableUserInformationRecord.fromStructure = function (str) {
return new CacheableUserInformationRecord(new CacheableUserInformationRecord.RecordClass({
cacheableUserInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableUserInformationRecord._isAnonymousRecord = true;
CacheableUserInformationRecord.UniqueId = "bcdff191-48ff-c0a4-6eb7-e74bfbc7d007";
CacheableUserInformationRecord.init();
return CacheableUserInformationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableUserInformationRecord = CacheableUserInformationRecord;

});
define("DirectoryClientCore.model$CacheableUserInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableUserInformationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableUserInformationRecordList = (function (_super) {
__extends(CacheableUserInformationRecordList, _super);
function CacheableUserInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableUserInformationRecordList.itemType = DirectoryClientCoreModel.CacheableUserInformationRecord;
return CacheableUserInformationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableUserInformationRecordList = CacheableUserInformationRecordList;

});
define("DirectoryClientCore.model$LocalityCommunityBusinessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$LocalityCommunityBusinessRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRecordList = (function (_super) {
__extends(LocalityCommunityBusinessRecordList, _super);
function LocalityCommunityBusinessRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRecordList.itemType = DirectoryClientCoreModel.LocalityCommunityBusinessRecord;
return LocalityCommunityBusinessRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityCommunityBusinessRecordList = LocalityCommunityBusinessRecordList;

});
define("DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetAdvancedSearchPresignedResultItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemRecord = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemRecord, _super);
function GetAdvancedSearchPresignedResultItemRecord(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemRecord.attributesToDeclare = function () {
return [
this.attr("GetAdvancedSearchPresignedResultItem", "getAdvancedSearchPresignedResultItemAttr", "GetAdvancedSearchPresignedResultItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetAdvancedSearchPresignedResultItemRec());
}, true, ContactBase_ISModel.GetAdvancedSearchPresignedResultItemRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdvancedSearchPresignedResultItemRecord.fromStructure = function (str) {
return new GetAdvancedSearchPresignedResultItemRecord(new GetAdvancedSearchPresignedResultItemRecord.RecordClass({
getAdvancedSearchPresignedResultItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetAdvancedSearchPresignedResultItemRecord._isAnonymousRecord = true;
GetAdvancedSearchPresignedResultItemRecord.UniqueId = "a56f5376-24c6-046f-c76b-eb9eff33438f";
GetAdvancedSearchPresignedResultItemRecord.init();
return GetAdvancedSearchPresignedResultItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemRecord = GetAdvancedSearchPresignedResultItemRecord;

});
define("DirectoryClientCore.model$GetSettingResponseDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSettingResponseDetailsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSettingResponseDetailsList = (function (_super) {
__extends(GetSettingResponseDetailsList, _super);
function GetSettingResponseDetailsList(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseDetailsList.itemType = ContactBase_ISModel.GetSettingResponseDetailsRec;
return GetSettingResponseDetailsList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSettingResponseDetailsList = GetSettingResponseDetailsList;

});
define("DirectoryClientCore.model$MemberHouseholderRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$MemberHouseholderRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberHouseholderRecord = (function (_super) {
__extends(MemberHouseholderRecord, _super);
function MemberHouseholderRecord(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderRecord.attributesToDeclare = function () {
return [
this.attr("MemberHouseholder", "memberHouseholderAttr", "MemberHouseholder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.MemberHouseholderRec());
}, true, ContactBase_ISModel.MemberHouseholderRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberHouseholderRecord.fromStructure = function (str) {
return new MemberHouseholderRecord(new MemberHouseholderRecord.RecordClass({
memberHouseholderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberHouseholderRecord._isAnonymousRecord = true;
MemberHouseholderRecord.UniqueId = "b6b5d540-36da-54d2-9062-83f410ea14a4";
MemberHouseholderRecord.init();
return MemberHouseholderRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.MemberHouseholderRecord = MemberHouseholderRecord;

});
define("DirectoryClientCore.model$MemberHouseholderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$MemberHouseholderRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberHouseholderRecordList = (function (_super) {
__extends(MemberHouseholderRecordList, _super);
function MemberHouseholderRecordList(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderRecordList.itemType = DirectoryClientCoreModel.MemberHouseholderRecord;
return MemberHouseholderRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemberHouseholderRecordList = MemberHouseholderRecordList;

});
define("DirectoryClientCore.model$ConnectConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$ConnectConfigRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ConnectConfigRecordList = (function (_super) {
__extends(ConnectConfigRecordList, _super);
function ConnectConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRecordList.itemType = DirectoryClientCoreModel.ConnectConfigRecord;
return ConnectConfigRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ConnectConfigRecordList = ConnectConfigRecordList;

});
define("DirectoryClientCore.model$MemberHouseholderHouseholderList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$MemberHouseholderHouseholderRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberHouseholderHouseholderList = (function (_super) {
__extends(MemberHouseholderHouseholderList, _super);
function MemberHouseholderHouseholderList(defaults) {
_super.apply(this, arguments);
}
MemberHouseholderHouseholderList.itemType = ContactBase_ISModel.MemberHouseholderHouseholderRec;
return MemberHouseholderHouseholderList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemberHouseholderHouseholderList = MemberHouseholderHouseholderList;

});
define("DirectoryClientCore.model$DefaultCountryList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$DefaultCountryRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DefaultCountryList = (function (_super) {
__extends(DefaultCountryList, _super);
function DefaultCountryList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryList.itemType = ContactBase_ISModel.DefaultCountryRec;
return DefaultCountryList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DefaultCountryList = DefaultCountryList;

});
define("DirectoryClientCore.model$GetHouseholds_ConnectResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetHouseholds_ConnectResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetHouseholds_ConnectResponseRecord = (function (_super) {
__extends(GetHouseholds_ConnectResponseRecord, _super);
function GetHouseholds_ConnectResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetHouseholds_ConnectResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetHouseholds_ConnectResponse", "getHouseholds_ConnectResponseAttr", "GetHouseholds_ConnectResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.GetHouseholds_ConnectResponseRec());
}, true, ContactBase_ISModel.GetHouseholds_ConnectResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetHouseholds_ConnectResponseRecord.fromStructure = function (str) {
return new GetHouseholds_ConnectResponseRecord(new GetHouseholds_ConnectResponseRecord.RecordClass({
getHouseholds_ConnectResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetHouseholds_ConnectResponseRecord._isAnonymousRecord = true;
GetHouseholds_ConnectResponseRecord.UniqueId = "e5d02b71-e640-e151-741f-7d1abfae5811";
GetHouseholds_ConnectResponseRecord.init();
return GetHouseholds_ConnectResponseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.GetHouseholds_ConnectResponseRecord = GetHouseholds_ConnectResponseRecord;

});
define("DirectoryClientCore.model$GetHouseholds_ConnectResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetHouseholds_ConnectResponseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetHouseholds_ConnectResponseRecordList = (function (_super) {
__extends(GetHouseholds_ConnectResponseRecordList, _super);
function GetHouseholds_ConnectResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetHouseholds_ConnectResponseRecordList.itemType = DirectoryClientCoreModel.GetHouseholds_ConnectResponseRecord;
return GetHouseholds_ConnectResponseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetHouseholds_ConnectResponseRecordList = GetHouseholds_ConnectResponseRecordList;

});
define("DirectoryClientCore.model$DirectoryAPIFilterList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$DirectoryAPIFilterRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterList = (function (_super) {
__extends(DirectoryAPIFilterList, _super);
function DirectoryAPIFilterList(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterList.itemType = Directory_BLModel.DirectoryAPIFilterRec;
return DirectoryAPIFilterList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DirectoryAPIFilterList = DirectoryAPIFilterList;

});
define("DirectoryClientCore.model$GetSettingResponseParsedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSettingResponseParsedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSettingResponseParsedList = (function (_super) {
__extends(GetSettingResponseParsedList, _super);
function GetSettingResponseParsedList(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseParsedList.itemType = ContactBase_ISModel.GetSettingResponseParsedRec;
return GetSettingResponseParsedList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSettingResponseParsedList = GetSettingResponseParsedList;

});
define("DirectoryClientCore.model$GetCurrentUserResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetCurrentUserResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetCurrentUserResponseList = (function (_super) {
__extends(GetCurrentUserResponseList, _super);
function GetCurrentUserResponseList(defaults) {
_super.apply(this, arguments);
}
GetCurrentUserResponseList.itemType = ContactBase_ISModel.GetCurrentUserResponseRec;
return GetCurrentUserResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetCurrentUserResponseList = GetCurrentUserResponseList;

});
define("DirectoryClientCore.model$HallPhotoList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$HallPhotoRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HallPhotoList = (function (_super) {
__extends(HallPhotoList, _super);
function HallPhotoList(defaults) {
_super.apply(this, arguments);
}
HallPhotoList.itemType = ContactBase_ISModel.HallPhotoRec;
return HallPhotoList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.HallPhotoList = HallPhotoList;

});
define("DirectoryClientCore.model$DefaultCountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DefaultCountryRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DefaultCountryRecordList = (function (_super) {
__extends(DefaultCountryRecordList, _super);
function DefaultCountryRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRecordList.itemType = DirectoryClientCoreModel.DefaultCountryRecord;
return DefaultCountryRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DefaultCountryRecordList = DefaultCountryRecordList;

});
define("DirectoryClientCore.model$CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$CDNRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CDNRecord = (function (_super) {
__extends(CDNRecord, _super);
function CDNRecord(defaults) {
_super.apply(this, arguments);
}
CDNRecord.attributesToDeclare = function () {
return [
this.attr("CDN", "cDNAttr", "CDN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.CDNRec());
}, true, ContactBase_ISModel.CDNRec)
].concat(_super.attributesToDeclare.call(this));
};
CDNRecord.fromStructure = function (str) {
return new CDNRecord(new CDNRecord.RecordClass({
cDNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDNRecord._isAnonymousRecord = true;
CDNRecord.UniqueId = "ca238324-29fc-a1d1-a63a-cc9c723388ec";
CDNRecord.init();
return CDNRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CDNRecord = CDNRecord;

});
define("DirectoryClientCore.model$CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CDNRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CDNRecordList = (function (_super) {
__extends(CDNRecordList, _super);
function CDNRecordList(defaults) {
_super.apply(this, arguments);
}
CDNRecordList.itemType = DirectoryClientCoreModel.CDNRecord;
return CDNRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CDNRecordList = CDNRecordList;

});
define("DirectoryClientCore.model$SubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubdivisionRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionRecordList = (function (_super) {
__extends(SubdivisionRecordList, _super);
function SubdivisionRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionRecordList.itemType = DirectoryClientCoreModel.SubdivisionRecord;
return SubdivisionRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionRecordList = SubdivisionRecordList;

});
define("DirectoryClientCore.model$HallPhotoExtensiveList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$HallPhotoExtensiveRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveList = (function (_super) {
__extends(HallPhotoExtensiveList, _super);
function HallPhotoExtensiveList(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveList.itemType = ContactBase_ISModel.HallPhotoExtensiveRec;
return HallPhotoExtensiveList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.HallPhotoExtensiveList = HallPhotoExtensiveList;

});
define("DirectoryClientCore.model$LocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$LocalityRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityRecord = (function (_super) {
__extends(LocalityRecord, _super);
function LocalityRecord(defaults) {
_super.apply(this, arguments);
}
LocalityRecord.attributesToDeclare = function () {
return [
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.LocalityRec());
}, true, ContactBase_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityRecord.fromStructure = function (str) {
return new LocalityRecord(new LocalityRecord.RecordClass({
localityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityRecord._isAnonymousRecord = true;
LocalityRecord.UniqueId = "b69fced6-2251-c2ef-f9bc-e0cc53f92f3d";
LocalityRecord.init();
return LocalityRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.LocalityRecord = LocalityRecord;

});
define("DirectoryClientCore.model$MemoryCacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "DirectoryClientCore.model", "MemoryClientCache.model$MemoryCacheTypeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeList = (function (_super) {
__extends(MemoryCacheTypeList, _super);
function MemoryCacheTypeList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeList.itemType = MemoryClientCacheModel.MemoryCacheTypeRec;
return MemoryCacheTypeList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemoryCacheTypeList = MemoryCacheTypeList;

});
define("DirectoryClientCore.model$UpdateFeedDirectoryItemList", ["exports", "OutSystems/ClientRuntime/Main", "Directory_BL.model", "DirectoryClientCore.model", "Directory_BL.model$UpdateFeedDirectoryItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$Directory_BL"], function (exports, OutSystems, Directory_BLModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UpdateFeedDirectoryItemList = (function (_super) {
__extends(UpdateFeedDirectoryItemList, _super);
function UpdateFeedDirectoryItemList(defaults) {
_super.apply(this, arguments);
}
UpdateFeedDirectoryItemList.itemType = Directory_BLModel.UpdateFeedDirectoryItemRec;
return UpdateFeedDirectoryItemList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.UpdateFeedDirectoryItemList = UpdateFeedDirectoryItemList;

});
define("DirectoryClientCore.model$MemoryCacheResultList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "DirectoryClientCore.model", "MemoryClientCache.model$MemoryCacheResultRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultList = (function (_super) {
__extends(MemoryCacheResultList, _super);
function MemoryCacheResultList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultList.itemType = MemoryClientCacheModel.MemoryCacheResultRec;
return MemoryCacheResultList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemoryCacheResultList = MemoryCacheResultList;

});
define("DirectoryClientCore.model$SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubscriptionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionList = (function (_super) {
__extends(SubscriptionList, _super);
function SubscriptionList(defaults) {
_super.apply(this, arguments);
}
SubscriptionList.itemType = ContactBase_ISModel.SubscriptionRec;
return SubscriptionList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubscriptionList = SubscriptionList;

});
define("DirectoryClientCore.model$SpouseRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SpouseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SpouseRecord = (function (_super) {
__extends(SpouseRecord, _super);
function SpouseRecord(defaults) {
_super.apply(this, arguments);
}
SpouseRecord.attributesToDeclare = function () {
return [
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.SpouseRec());
}, true, ContactBase_ISModel.SpouseRec)
].concat(_super.attributesToDeclare.call(this));
};
SpouseRecord.fromStructure = function (str) {
return new SpouseRecord(new SpouseRecord.RecordClass({
spouseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpouseRecord._isAnonymousRecord = true;
SpouseRecord.UniqueId = "c00b45d7-e93c-7003-b19c-5e78fe69488d";
SpouseRecord.init();
return SpouseRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.SpouseRecord = SpouseRecord;

});
define("DirectoryClientCore.model$CacheableSubdivisionInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRecord = (function (_super) {
__extends(CacheableSubdivisionInformationRecord, _super);
function CacheableSubdivisionInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableSubdivisionInformation", "cacheableSubdivisionInformationAttr", "CacheableSubdivisionInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.CacheableSubdivisionInformationRec());
}, true, DirectoryClientCoreModel.CacheableSubdivisionInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationRecord.fromStructure = function (str) {
return new CacheableSubdivisionInformationRecord(new CacheableSubdivisionInformationRecord.RecordClass({
cacheableSubdivisionInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableSubdivisionInformationRecord._isAnonymousRecord = true;
CacheableSubdivisionInformationRecord.UniqueId = "d2ff8845-e9a9-68bc-e490-14d93b628f48";
CacheableSubdivisionInformationRecord.init();
return CacheableSubdivisionInformationRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.CacheableSubdivisionInformationRecord = CacheableSubdivisionInformationRecord;

});
define("DirectoryClientCore.model$CacheableSubdivisionInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSubdivisionInformationRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRecordList = (function (_super) {
__extends(CacheableSubdivisionInformationRecordList, _super);
function CacheableSubdivisionInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRecordList.itemType = DirectoryClientCoreModel.CacheableSubdivisionInformationRecord;
return CacheableSubdivisionInformationRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableSubdivisionInformationRecordList = CacheableSubdivisionInformationRecordList;

});
define("DirectoryClientCore.model$TimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TimezoneRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TimezoneRecordList = (function (_super) {
__extends(TimezoneRecordList, _super);
function TimezoneRecordList(defaults) {
_super.apply(this, arguments);
}
TimezoneRecordList.itemType = DirectoryClientCoreModel.TimezoneRecord;
return TimezoneRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TimezoneRecordList = TimezoneRecordList;

});
define("DirectoryClientCore.model$UserSubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$UserSubscriptionRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UserSubscriptionRecord = (function (_super) {
__extends(UserSubscriptionRecord, _super);
function UserSubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("UserSubscription", "userSubscriptionAttr", "UserSubscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.UserSubscriptionRec());
}, true, DirectoryClientCoreModel.UserSubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
UserSubscriptionRecord.fromStructure = function (str) {
return new UserSubscriptionRecord(new UserSubscriptionRecord.RecordClass({
userSubscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserSubscriptionRecord._isAnonymousRecord = true;
UserSubscriptionRecord.UniqueId = "e7c19f78-907b-4217-d008-28c49c95c048";
UserSubscriptionRecord.init();
return UserSubscriptionRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.UserSubscriptionRecord = UserSubscriptionRecord;

});
define("DirectoryClientCore.model$UserSubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$UserSubscriptionRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UserSubscriptionRecordList = (function (_super) {
__extends(UserSubscriptionRecordList, _super);
function UserSubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionRecordList.itemType = DirectoryClientCoreModel.UserSubscriptionRecord;
return UserSubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.UserSubscriptionRecordList = UserSubscriptionRecordList;

});
define("DirectoryClientCore.model$SubscriptionPlanList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubscriptionPlanRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionPlanList = (function (_super) {
__extends(SubscriptionPlanList, _super);
function SubscriptionPlanList(defaults) {
_super.apply(this, arguments);
}
SubscriptionPlanList.itemType = ContactBase_ISModel.SubscriptionPlanRec;
return SubscriptionPlanList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubscriptionPlanList = SubscriptionPlanList;

});
define("DirectoryClientCore.model$HouseholdRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$HouseholdRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HouseholdRecord = (function (_super) {
__extends(HouseholdRecord, _super);
function HouseholdRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdRecord.attributesToDeclare = function () {
return [
this.attr("Household", "householdAttr", "Household", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.HouseholdRec());
}, true, ContactBase_ISModel.HouseholdRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdRecord.fromStructure = function (str) {
return new HouseholdRecord(new HouseholdRecord.RecordClass({
householdAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdRecord._isAnonymousRecord = true;
HouseholdRecord.UniqueId = "e0a7a834-129d-1bff-cb7e-df2eb0e4c6c7";
HouseholdRecord.init();
return HouseholdRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.HouseholdRecord = HouseholdRecord;

});
define("DirectoryClientCore.model$HouseholdRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$HouseholdRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HouseholdRecordList = (function (_super) {
__extends(HouseholdRecordList, _super);
function HouseholdRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdRecordList.itemType = DirectoryClientCoreModel.HouseholdRecord;
return HouseholdRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.HouseholdRecordList = HouseholdRecordList;

});
define("DirectoryClientCore.model$PhotoTagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PhotoTagRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoTagRecordList = (function (_super) {
__extends(PhotoTagRecordList, _super);
function PhotoTagRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoTagRecordList.itemType = DirectoryClientCoreModel.PhotoTagRecord;
return PhotoTagRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoTagRecordList = PhotoTagRecordList;

});
define("DirectoryClientCore.model$PolicyActivationList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PolicyActivationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PolicyActivationList = (function (_super) {
__extends(PolicyActivationList, _super);
function PolicyActivationList(defaults) {
_super.apply(this, arguments);
}
PolicyActivationList.itemType = DirectoryClientCoreModel.PolicyActivationRec;
return PolicyActivationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PolicyActivationList = PolicyActivationList;

});
define("DirectoryClientCore.model$AdvancedSearch_SearchModeList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_SearchModeRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_SearchModeList = (function (_super) {
__extends(AdvancedSearch_SearchModeList, _super);
function AdvancedSearch_SearchModeList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_SearchModeList.itemType = ContactBase_ISModel.AdvancedSearch_SearchModeRec;
return AdvancedSearch_SearchModeList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_SearchModeList = AdvancedSearch_SearchModeList;

});
define("DirectoryClientCore.model$BookmarkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_IS.model", "DirectoryClientCore.model", "MyBookmarks_IS.model$BookmarkItemRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_IS"], function (exports, OutSystems, MyBookmarks_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecord = (function (_super) {
__extends(BookmarkItemRecord, _super);
function BookmarkItemRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkItem", "bookmarkItemAttr", "BookmarkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MyBookmarks_ISModel.BookmarkItemRec());
}, true, MyBookmarks_ISModel.BookmarkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkItemRecord.fromStructure = function (str) {
return new BookmarkItemRecord(new BookmarkItemRecord.RecordClass({
bookmarkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkItemRecord._isAnonymousRecord = true;
BookmarkItemRecord.UniqueId = "efaf0f24-af5b-88ea-1e26-c469240ba70e";
BookmarkItemRecord.init();
return BookmarkItemRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.BookmarkItemRecord = BookmarkItemRecord;

});
define("DirectoryClientCore.model$BookmarkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BookmarkItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecordList = (function (_super) {
__extends(BookmarkItemRecordList, _super);
function BookmarkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecordList.itemType = DirectoryClientCoreModel.BookmarkItemRecord;
return BookmarkItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BookmarkItemRecordList = BookmarkItemRecordList;

});
define("DirectoryClientCore.model$SubscriptionPlanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubscriptionPlanRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionPlanRecordList = (function (_super) {
__extends(SubscriptionPlanRecordList, _super);
function SubscriptionPlanRecordList(defaults) {
_super.apply(this, arguments);
}
SubscriptionPlanRecordList.itemType = DirectoryClientCoreModel.SubscriptionPlanRecord;
return SubscriptionPlanRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubscriptionPlanRecordList = SubscriptionPlanRecordList;

});
define("DirectoryClientCore.model$ExtensionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$ExtensionRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ExtensionRecordList = (function (_super) {
__extends(ExtensionRecordList, _super);
function ExtensionRecordList(defaults) {
_super.apply(this, arguments);
}
ExtensionRecordList.itemType = DirectoryClientCoreModel.ExtensionRecord;
return ExtensionRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ExtensionRecordList = ExtensionRecordList;

});
define("DirectoryClientCore.model$SubdivisionItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubdivisionItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionItemRecordList = (function (_super) {
__extends(SubdivisionItemRecordList, _super);
function SubdivisionItemRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionItemRecordList.itemType = DirectoryClientCoreModel.SubdivisionItemRecord;
return SubdivisionItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionItemRecordList = SubdivisionItemRecordList;

});
define("DirectoryClientCore.model$SpouseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SpouseRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SpouseRecordList = (function (_super) {
__extends(SpouseRecordList, _super);
function SpouseRecordList(defaults) {
_super.apply(this, arguments);
}
SpouseRecordList.itemType = DirectoryClientCoreModel.SpouseRecord;
return SpouseRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SpouseRecordList = SpouseRecordList;

});
define("DirectoryClientCore.model$SubdivisionExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionExtendedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedList = (function (_super) {
__extends(SubdivisionExtendedList, _super);
function SubdivisionExtendedList(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedList.itemType = ContactBase_ISModel.SubdivisionExtendedRec;
return SubdivisionExtendedList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionExtendedList = SubdivisionExtendedList;

});
define("DirectoryClientCore.model$CacheableLocalityInformationList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableLocalityInformationRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationList = (function (_super) {
__extends(CacheableLocalityInformationList, _super);
function CacheableLocalityInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationList.itemType = DirectoryClientCoreModel.CacheableLocalityInformationRec;
return CacheableLocalityInformationList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableLocalityInformationList = CacheableLocalityInformationList;

});
define("DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetAdvancedSearchPresignedResultItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetAdvancedSearchPresignedResultItemRecordList = (function (_super) {
__extends(GetAdvancedSearchPresignedResultItemRecordList, _super);
function GetAdvancedSearchPresignedResultItemRecordList(defaults) {
_super.apply(this, arguments);
}
GetAdvancedSearchPresignedResultItemRecordList.itemType = DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemRecord;
return GetAdvancedSearchPresignedResultItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetAdvancedSearchPresignedResultItemRecordList = GetAdvancedSearchPresignedResultItemRecordList;

});
define("DirectoryClientCore.model$AdvancedSearchPresignedRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearchPresignedRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchPresignedRecord = (function (_super) {
__extends(AdvancedSearchPresignedRecord, _super);
function AdvancedSearchPresignedRecord(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchPresignedRecord.attributesToDeclare = function () {
return [
this.attr("AdvancedSearchPresigned", "advancedSearchPresignedAttr", "AdvancedSearchPresigned", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.AdvancedSearchPresignedRec());
}, true, ContactBase_ISModel.AdvancedSearchPresignedRec)
].concat(_super.attributesToDeclare.call(this));
};
AdvancedSearchPresignedRecord.fromStructure = function (str) {
return new AdvancedSearchPresignedRecord(new AdvancedSearchPresignedRecord.RecordClass({
advancedSearchPresignedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdvancedSearchPresignedRecord._isAnonymousRecord = true;
AdvancedSearchPresignedRecord.UniqueId = "e27a7f92-a9e4-306d-c4cc-0901704433f3";
AdvancedSearchPresignedRecord.init();
return AdvancedSearchPresignedRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.AdvancedSearchPresignedRecord = AdvancedSearchPresignedRecord;

});
define("DirectoryClientCore.model$AdvancedSearchPresignedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearchPresignedRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchPresignedRecordList = (function (_super) {
__extends(AdvancedSearchPresignedRecordList, _super);
function AdvancedSearchPresignedRecordList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchPresignedRecordList.itemType = DirectoryClientCoreModel.AdvancedSearchPresignedRecord;
return AdvancedSearchPresignedRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearchPresignedRecordList = AdvancedSearchPresignedRecordList;

});
define("DirectoryClientCore.model$RolesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$RolesRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var RolesRecordList = (function (_super) {
__extends(RolesRecordList, _super);
function RolesRecordList(defaults) {
_super.apply(this, arguments);
}
RolesRecordList.itemType = DirectoryClientCoreModel.RolesRecord;
return RolesRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.RolesRecordList = RolesRecordList;

});
define("DirectoryClientCore.model$PhotoUrlRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PhotoUrlRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoUrlRecordList = (function (_super) {
__extends(PhotoUrlRecordList, _super);
function PhotoUrlRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoUrlRecordList.itemType = DirectoryClientCoreModel.PhotoUrlRecord;
return PhotoUrlRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoUrlRecordList = PhotoUrlRecordList;

});
define("DirectoryClientCore.model$DirectoryAPIFilterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DirectoryAPIFilterRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DirectoryAPIFilterRecordList = (function (_super) {
__extends(DirectoryAPIFilterRecordList, _super);
function DirectoryAPIFilterRecordList(defaults) {
_super.apply(this, arguments);
}
DirectoryAPIFilterRecordList.itemType = DirectoryClientCoreModel.DirectoryAPIFilterRecord;
return DirectoryAPIFilterRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DirectoryAPIFilterRecordList = DirectoryAPIFilterRecordList;

});
define("DirectoryClientCore.model$PhotoDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "MyBookmarks_IS.model", "DirectoryClientCore.model", "MyBookmarks_IS.model$PhotoDetailsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$MyBookmarks_IS"], function (exports, OutSystems, MyBookmarks_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoDetailsList = (function (_super) {
__extends(PhotoDetailsList, _super);
function PhotoDetailsList(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsList.itemType = MyBookmarks_ISModel.PhotoDetailsRec;
return PhotoDetailsList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoDetailsList = PhotoDetailsList;

});
define("DirectoryClientCore.model$GetTimezoneResponseList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetTimezoneResponseRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetTimezoneResponseList = (function (_super) {
__extends(GetTimezoneResponseList, _super);
function GetTimezoneResponseList(defaults) {
_super.apply(this, arguments);
}
GetTimezoneResponseList.itemType = ContactBase_ISModel.GetTimezoneResponseRec;
return GetTimezoneResponseList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetTimezoneResponseList = GetTimezoneResponseList;

});
define("DirectoryClientCore.model$GetSubdivisionsGenderSplitResponse_List", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$GetSubdivisionsGenderSplitResponse_Rec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsGenderSplitResponse_List = (function (_super) {
__extends(GetSubdivisionsGenderSplitResponse_List, _super);
function GetSubdivisionsGenderSplitResponse_List(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsGenderSplitResponse_List.itemType = ContactBase_ISModel.GetSubdivisionsGenderSplitResponse_Rec;
return GetSubdivisionsGenderSplitResponse_List;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSubdivisionsGenderSplitResponse_List = GetSubdivisionsGenderSplitResponse_List;

});
define("DirectoryClientCore.model$CDNList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$CDNRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CDNList = (function (_super) {
__extends(CDNList, _super);
function CDNList(defaults) {
_super.apply(this, arguments);
}
CDNList.itemType = ContactBase_ISModel.CDNRec;
return CDNList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CDNList = CDNList;

});
define("DirectoryClientCore.model$AdvancedSearch_Category_APIList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_Category_APIRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_Category_APIList = (function (_super) {
__extends(AdvancedSearch_Category_APIList, _super);
function AdvancedSearch_Category_APIList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_Category_APIList.itemType = ContactBase_ISModel.AdvancedSearch_Category_APIRec;
return AdvancedSearch_Category_APIList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_Category_APIList = AdvancedSearch_Category_APIList;

});
define("DirectoryClientCore.model$DetailsJsonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$DetailsJsonRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var DetailsJsonRecordList = (function (_super) {
__extends(DetailsJsonRecordList, _super);
function DetailsJsonRecordList(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRecordList.itemType = DirectoryClientCoreModel.DetailsJsonRecord;
return DetailsJsonRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.DetailsJsonRecordList = DetailsJsonRecordList;

});
define("DirectoryClientCore.model$CacheableAdvancedSearchResultsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableAdvancedSearchResultsRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableAdvancedSearchResultsRecordList = (function (_super) {
__extends(CacheableAdvancedSearchResultsRecordList, _super);
function CacheableAdvancedSearchResultsRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableAdvancedSearchResultsRecordList.itemType = DirectoryClientCoreModel.CacheableAdvancedSearchResultsRecord;
return CacheableAdvancedSearchResultsRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableAdvancedSearchResultsRecordList = CacheableAdvancedSearchResultsRecordList;

});
define("DirectoryClientCore.model$HallPhotoExtensiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$HallPhotoExtensiveRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRecordList = (function (_super) {
__extends(HallPhotoExtensiveRecordList, _super);
function HallPhotoExtensiveRecordList(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRecordList.itemType = DirectoryClientCoreModel.HallPhotoExtensiveRecord;
return HallPhotoExtensiveRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.HallPhotoExtensiveRecordList = HallPhotoExtensiveRecordList;

});
define("DirectoryClientCore.model$PlaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PlaceRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PlaceRecord = (function (_super) {
__extends(PlaceRecord, _super);
function PlaceRecord(defaults) {
_super.apply(this, arguments);
}
PlaceRecord.attributesToDeclare = function () {
return [
this.attr("Place", "placeAttr", "Place", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ContactBase_ISModel.PlaceRec());
}, true, ContactBase_ISModel.PlaceRec)
].concat(_super.attributesToDeclare.call(this));
};
PlaceRecord.fromStructure = function (str) {
return new PlaceRecord(new PlaceRecord.RecordClass({
placeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlaceRecord._isAnonymousRecord = true;
PlaceRecord.UniqueId = "df5b58be-bd41-e2ca-c3c8-09c133e71576";
PlaceRecord.init();
return PlaceRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.PlaceRecord = PlaceRecord;

});
define("DirectoryClientCore.model$HallPhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$HallPhotoRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var HallPhotoRecordList = (function (_super) {
__extends(HallPhotoRecordList, _super);
function HallPhotoRecordList(defaults) {
_super.apply(this, arguments);
}
HallPhotoRecordList.itemType = DirectoryClientCoreModel.HallPhotoRecord;
return HallPhotoRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.HallPhotoRecordList = HallPhotoRecordList;

});
define("DirectoryClientCore.model$LocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$LocalityRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityRecordList = (function (_super) {
__extends(LocalityRecordList, _super);
function LocalityRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityRecordList.itemType = DirectoryClientCoreModel.LocalityRecord;
return LocalityRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityRecordList = LocalityRecordList;

});
define("DirectoryClientCore.model$MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$MemberRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var MemberRecordList = (function (_super) {
__extends(MemberRecordList, _super);
function MemberRecordList(defaults) {
_super.apply(this, arguments);
}
MemberRecordList.itemType = DirectoryClientCoreModel.MemberRecord;
return MemberRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.MemberRecordList = MemberRecordList;

});
define("DirectoryClientCore.model$SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$SubscriptionRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubscriptionRecordList = (function (_super) {
__extends(SubscriptionRecordList, _super);
function SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
SubscriptionRecordList.itemType = DirectoryClientCoreModel.SubscriptionRecord;
return SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubscriptionRecordList = SubscriptionRecordList;

});
define("DirectoryClientCore.model$PlaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$PlaceRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PlaceRecordList = (function (_super) {
__extends(PlaceRecordList, _super);
function PlaceRecordList(defaults) {
_super.apply(this, arguments);
}
PlaceRecordList.itemType = DirectoryClientCoreModel.PlaceRecord;
return PlaceRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PlaceRecordList = PlaceRecordList;

});
define("DirectoryClientCore.model$GetSettingResponseDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetSettingResponseDetailsRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSettingResponseDetailsRecordList = (function (_super) {
__extends(GetSettingResponseDetailsRecordList, _super);
function GetSettingResponseDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
GetSettingResponseDetailsRecordList.itemType = DirectoryClientCoreModel.GetSettingResponseDetailsRecord;
return GetSettingResponseDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSettingResponseDetailsRecordList = GetSettingResponseDetailsRecordList;

});
define("DirectoryClientCore.model$TextLongIntegerLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$TextLongIntegerLongIntegerRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var TextLongIntegerLongIntegerRecordList = (function (_super) {
__extends(TextLongIntegerLongIntegerRecordList, _super);
function TextLongIntegerLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextLongIntegerLongIntegerRecordList.itemType = DirectoryClientCoreModel.TextLongIntegerLongIntegerRecord;
return TextLongIntegerLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.TextLongIntegerLongIntegerRecordList = TextLongIntegerLongIntegerRecordList;

});
define("DirectoryClientCore.model$FilterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$FilterRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FilterRecordList = (function (_super) {
__extends(FilterRecordList, _super);
function FilterRecordList(defaults) {
_super.apply(this, arguments);
}
FilterRecordList.itemType = DirectoryClientCoreModel.FilterRecord;
return FilterRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FilterRecordList = FilterRecordList;

});
define("DirectoryClientCore.model$PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$PhotoRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var PhotoList = (function (_super) {
__extends(PhotoList, _super);
function PhotoList(defaults) {
_super.apply(this, arguments);
}
PhotoList.itemType = ContactBase_ISModel.PhotoRec;
return PhotoList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.PhotoList = PhotoList;

});
define("DirectoryClientCore.model$CacheableSearchResultsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSearchResultsRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSearchResultsRecordList = (function (_super) {
__extends(CacheableSearchResultsRecordList, _super);
function CacheableSearchResultsRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableSearchResultsRecordList.itemType = DirectoryClientCoreModel.CacheableSearchResultsRecord;
return CacheableSearchResultsRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableSearchResultsRecordList = CacheableSearchResultsRecordList;

});
define("DirectoryClientCore.model$BulkSignedImageResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedImageResultRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRecord = (function (_super) {
__extends(BulkSignedImageResultRecord, _super);
function BulkSignedImageResultRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedImageResult", "bulkSignedImageResultAttr", "BulkSignedImageResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.BulkSignedImageResultRec());
}, true, DirectoryClientCoreModel.BulkSignedImageResultRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImageResultRecord.fromStructure = function (str) {
return new BulkSignedImageResultRecord(new BulkSignedImageResultRecord.RecordClass({
bulkSignedImageResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedImageResultRecord._isAnonymousRecord = true;
BulkSignedImageResultRecord.UniqueId = "ee837a67-eec6-ff95-a844-21b9aa0e7193";
BulkSignedImageResultRecord.init();
return BulkSignedImageResultRecord;
})(OS.DataTypes.GenericRecord);
DirectoryClientCoreModel.BulkSignedImageResultRecord = BulkSignedImageResultRecord;

});
define("DirectoryClientCore.model$LocalityList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$LocalityRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var LocalityList = (function (_super) {
__extends(LocalityList, _super);
function LocalityList(defaults) {
_super.apply(this, arguments);
}
LocalityList.itemType = ContactBase_ISModel.LocalityRec;
return LocalityList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.LocalityList = LocalityList;

});
define("DirectoryClientCore.model$AdvancedSearchFiltersList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$AdvancedSearchFiltersRec"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearchFiltersList = (function (_super) {
__extends(AdvancedSearchFiltersList, _super);
function AdvancedSearchFiltersList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearchFiltersList.itemType = DirectoryClientCoreModel.AdvancedSearchFiltersRec;
return AdvancedSearchFiltersList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearchFiltersList = AdvancedSearchFiltersList;

});
define("DirectoryClientCore.model$ClientsList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$ClientsRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ClientsList = (function (_super) {
__extends(ClientsList, _super);
function ClientsList(defaults) {
_super.apply(this, arguments);
}
ClientsList.itemType = ContactBase_ISModel.ClientsRec;
return ClientsList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ClientsList = ClientsList;

});
define("DirectoryClientCore.model$FormerSpouseItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$FormerSpouseItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var FormerSpouseItemRecordList = (function (_super) {
__extends(FormerSpouseItemRecordList, _super);
function FormerSpouseItemRecordList(defaults) {
_super.apply(this, arguments);
}
FormerSpouseItemRecordList.itemType = DirectoryClientCoreModel.FormerSpouseItemRecord;
return FormerSpouseItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.FormerSpouseItemRecordList = FormerSpouseItemRecordList;

});
define("DirectoryClientCore.model$ClientsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$ClientsRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var ClientsRecordList = (function (_super) {
__extends(ClientsRecordList, _super);
function ClientsRecordList(defaults) {
_super.apply(this, arguments);
}
ClientsRecordList.itemType = DirectoryClientCoreModel.ClientsRecord;
return ClientsRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.ClientsRecordList = ClientsRecordList;

});
define("DirectoryClientCore.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "DirectoryClientCore.model", "ServiceCenter.model$UserRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.UserList = UserList;

});
define("DirectoryClientCore.model$GetSubdivisionsGenderSplitResponse_RecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$GetSubdivisionsGenderSplitResponse_Record"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var GetSubdivisionsGenderSplitResponse_RecordList = (function (_super) {
__extends(GetSubdivisionsGenderSplitResponse_RecordList, _super);
function GetSubdivisionsGenderSplitResponse_RecordList(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionsGenderSplitResponse_RecordList.itemType = DirectoryClientCoreModel.GetSubdivisionsGenderSplitResponse_Record;
return GetSubdivisionsGenderSplitResponse_RecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.GetSubdivisionsGenderSplitResponse_RecordList = GetSubdivisionsGenderSplitResponse_RecordList;

});
define("DirectoryClientCore.model$BulkSignedImageResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BulkSignedImageResultRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRecordList = (function (_super) {
__extends(BulkSignedImageResultRecordList, _super);
function BulkSignedImageResultRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRecordList.itemType = DirectoryClientCoreModel.BulkSignedImageResultRecord;
return BulkSignedImageResultRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BulkSignedImageResultRecordList = BulkSignedImageResultRecordList;

});
define("DirectoryClientCore.model$SubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$SubdivisionRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var SubdivisionList = (function (_super) {
__extends(SubdivisionList, _super);
function SubdivisionList(defaults) {
_super.apply(this, arguments);
}
SubdivisionList.itemType = ContactBase_ISModel.SubdivisionRec;
return SubdivisionList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.SubdivisionList = SubdivisionList;

});
define("DirectoryClientCore.model$BusinessLinkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$BusinessLinkItemRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRecordList = (function (_super) {
__extends(BusinessLinkItemRecordList, _super);
function BusinessLinkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRecordList.itemType = DirectoryClientCoreModel.BusinessLinkItemRecord;
return BusinessLinkItemRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.BusinessLinkItemRecordList = BusinessLinkItemRecordList;

});
define("DirectoryClientCore.model$AdvancedSearch_HouseholdViewList", ["exports", "OutSystems/ClientRuntime/Main", "ContactBase_IS.model", "DirectoryClientCore.model", "ContactBase_IS.model$AdvancedSearch_HouseholdViewRec", "DirectoryClientCore.referencesHealth", "DirectoryClientCore.referencesHealth$ContactBase_IS"], function (exports, OutSystems, ContactBase_ISModel, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var AdvancedSearch_HouseholdViewList = (function (_super) {
__extends(AdvancedSearch_HouseholdViewList, _super);
function AdvancedSearch_HouseholdViewList(defaults) {
_super.apply(this, arguments);
}
AdvancedSearch_HouseholdViewList.itemType = ContactBase_ISModel.AdvancedSearch_HouseholdViewRec;
return AdvancedSearch_HouseholdViewList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.AdvancedSearch_HouseholdViewList = AdvancedSearch_HouseholdViewList;

});
define("DirectoryClientCore.model$CacheableSubdivisionInformationTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "DirectoryClientCore.model$CacheableSubdivisionInformationTextTextRecord"], function (exports, OutSystems, DirectoryClientCoreModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationTextTextRecordList = (function (_super) {
__extends(CacheableSubdivisionInformationTextTextRecordList, _super);
function CacheableSubdivisionInformationTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationTextTextRecordList.itemType = DirectoryClientCoreModel.CacheableSubdivisionInformationTextTextRecord;
return CacheableSubdivisionInformationTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
DirectoryClientCoreModel.CacheableSubdivisionInformationTextTextRecordList = CacheableSubdivisionInformationTextTextRecordList;

});
define("DirectoryClientCore.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var DirectoryClientCoreModel = exports;
Object.defineProperty(DirectoryClientCoreModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["32fde8e1-a8b3-4cd5-afe0-1d3d33c20a02"];
}
});

DirectoryClientCoreModel.staticEntities = {};
DirectoryClientCoreModel.staticEntities.directoryCacheType = {};
var getDirectoryCacheTypeRecord = function (record) {
return DirectoryClientCoreModel.module.staticEntities["4a9e1123-be0d-4695-aed0-9015c5c8c963"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "localities", {
get: function () {
return getDirectoryCacheTypeRecord("0271e4c1-50ca-44d3-bfee-76749ba4fe49");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "imagesHousehold", {
get: function () {
return getDirectoryCacheTypeRecord("04977294-d168-4f13-85d3-0ea76aab4e0f");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "assembleSubdivision", {
get: function () {
return getDirectoryCacheTypeRecord("125ee4a6-e404-439c-90ac-42655c8538d6");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "userProfile", {
get: function () {
return getDirectoryCacheTypeRecord("442b3493-b82b-4320-a1b4-a67ee2151a4d");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "localitiesList", {
get: function () {
return getDirectoryCacheTypeRecord("4ff9d832-6161-4332-9528-35a07169ba2d");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "households", {
get: function () {
return getDirectoryCacheTypeRecord("63d160e9-f385-4e28-91c5-18eb20d422b3");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "myUpdateFeed", {
get: function () {
return getDirectoryCacheTypeRecord("6f5ebcdc-decc-49c6-b5d6-1ff0fe308f35");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "timezone", {
get: function () {
return getDirectoryCacheTypeRecord("8242aaa4-b44d-43a7-be6a-b2f089874172");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "countries", {
get: function () {
return getDirectoryCacheTypeRecord("96f6dac3-e1c3-4219-9d62-4e3084e092f1");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "user", {
get: function () {
return getDirectoryCacheTypeRecord("a16616d0-447b-4113-8967-a6af5e5a2c55");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "imagesMember", {
get: function () {
return getDirectoryCacheTypeRecord("a7131f0b-9e31-413a-93f4-c3b5283ff503");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "myBookmarks", {
get: function () {
return getDirectoryCacheTypeRecord("b6a1de00-07c4-44e3-b9e6-e80a2443a9df");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "photos", {
get: function () {
return getDirectoryCacheTypeRecord("b97577bf-1de7-48ce-b313-39e49c4f95f1");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "search", {
get: function () {
return getDirectoryCacheTypeRecord("c174742d-3bf0-461e-badb-842701840e94");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "advancedSearch", {
get: function () {
return getDirectoryCacheTypeRecord("c1f04970-0e16-4b85-ab21-c75dd88fbb73");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "images", {
get: function () {
return getDirectoryCacheTypeRecord("d96f71cf-60c2-4609-ad79-c9bcc3934b0a");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "subdivisions", {
get: function () {
return getDirectoryCacheTypeRecord("ef46b642-371d-41fa-8084-7076fc226fc6");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "imagesSubdivision", {
get: function () {
return getDirectoryCacheTypeRecord("f9ff3390-c12f-4db1-acaf-798519de3a13");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryCacheType, "imagesLocalities", {
get: function () {
return getDirectoryCacheTypeRecord("fac73eb6-9965-46a1-899d-0fa1028cddba");
}
});

DirectoryClientCoreModel.staticEntities.directoryAPIFilter = {};
var getDirectoryAPIFilterRecord = function (record) {
return OS.ApplicationInfo.getModules()["55823456-1d76-4515-b5b7-15c8712f275e"].staticEntities["70ab6c88-7804-44ec-8e89-c963bad46ef0"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryAPIFilter, "subdivision", {
get: function () {
return getDirectoryAPIFilterRecord("174f10d9-f8cd-4c58-b162-ccd2f159ebc3");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryAPIFilter, "household", {
get: function () {
return getDirectoryAPIFilterRecord("35f95d5b-6b6b-4d7b-91c9-102b1023ff7a");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryAPIFilter, "member", {
get: function () {
return getDirectoryAPIFilterRecord("515ac745-cabb-49b9-a444-a708c97e4d45");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.directoryAPIFilter, "locality", {
get: function () {
return getDirectoryAPIFilterRecord("68ead271-b6f2-47f7-913d-cd2460036de8");
}
});

DirectoryClientCoreModel.staticEntities.application = {};
var getApplicationRecord = function (record) {
return OS.ApplicationInfo.getModules()["57659a73-ab3a-4cfb-bcbb-07a0f2700213"].staticEntities["353cd460-3004-411f-a8ba-2a52b1d984fd"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "connect", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("0c7f7114-6167-4132-8637-aeb8448021b4"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "connectBackoffice", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("2ca2cc58-ea75-47f6-ad5c-f86d1aa9717e"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "communityHub", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("302fc3d7-242e-41c8-a7f5-5c301b21cdcc"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "d4B", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("315bb979-d039-47f8-999e-a34bde1396ae"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "audioBible", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("31a390fe-f68d-4850-be17-42c031c9764a"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "mediaHub", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("575d2178-aa06-42ef-abac-1120829fa8a8"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "subscriptionsAndPayments", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("6183edef-b3a5-4153-807f-888016d3e523"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "lDM", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("6e7d0036-61f0-40cf-97e7-8835974f214f"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "trove", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("7548a61b-36ae-4a77-ad8e-b050a997eb8c"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "directory", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("7c9cd426-fc03-46be-829b-83b21979c944"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "frankNews", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("88472f2b-7677-4d0e-bc8a-5ad4d1e23618"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.application, "orbit", {
get: function () {
return OS.BuiltinFunctions.textToLongInteger(getApplicationRecord("91424c8d-46f5-431b-a250-53c6eeb9bf34"));
}
});

DirectoryClientCoreModel.staticEntities.myBookmarks_Group = {};
var getMyBookmarks_GroupRecord = function (record) {
return OS.ApplicationInfo.getModules()["6d6a02d8-a2e3-4fc3-95b7-d090d2f0b8f3"].staticEntities["d277c37a-277e-419f-81ea-0ffb36be8558"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.myBookmarks_Group, "locations", {
get: function () {
return getMyBookmarks_GroupRecord("2860dbc3-b113-4f27-bf00-060398d4854a");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.myBookmarks_Group, "entities", {
get: function () {
return getMyBookmarks_GroupRecord("77369632-c604-40b2-872b-6218e0eed2b6");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.myBookmarks_Group, "contacts", {
get: function () {
return getMyBookmarks_GroupRecord("e247ecb6-1adf-4f59-9ec9-2683f67eb8cd");
}
});

DirectoryClientCoreModel.staticEntities.memoryCacheType = {};
var getMemoryCacheTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["b7049202-6510-41f3-8209-f2425737f568"].staticEntities["167f45ab-d8e4-4848-97f6-852b13f63785"][record];
};
DirectoryClientCoreModel.staticEntities.subscriptionPlan = {};
var getSubscriptionPlanRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["14e4f628-7e6a-4cdf-8a8a-c0a4ee8262cc"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.subscriptionPlan, "advancedPlus", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSubscriptionPlanRecord("270236cb-ba2d-46ff-8224-814f4d62d17b"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.subscriptionPlan, "free", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSubscriptionPlanRecord("3f7cf360-7cc1-4405-b18b-f334549cfc6c"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.subscriptionPlan, "global", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSubscriptionPlanRecord("82cc01c7-c45f-40cf-9465-687c4cf6cb77"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.subscriptionPlan, "regional", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getSubscriptionPlanRecord("c8de9485-2d42-4739-911f-265cce900960"));
}
});

DirectoryClientCoreModel.staticEntities.communityBusinessType = {};
var getCommunityBusinessTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["508a4f4c-8922-4fc3-a719-423a8584f855"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.communityBusinessType, "oneSchoolGlobal", {
get: function () {
return getCommunityBusinessTypeRecord("2bd2046b-8f47-4659-abc1-be09e9a13270");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.communityBusinessType, "campusCo", {
get: function () {
return getCommunityBusinessTypeRecord("5ce6f056-451e-4833-8b1f-c4b7d014bc6b");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.communityBusinessType, "commercial", {
get: function () {
return getCommunityBusinessTypeRecord("8396dc16-206b-44fa-a923-1b8400c4b36b");
}
});

DirectoryClientCoreModel.staticEntities.advancedSearch_HouseholdView = {};
var getAdvancedSearch_HouseholdViewRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["5c7a6618-175a-413d-ab05-a29dfdbf781f"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_HouseholdView, "household", {
get: function () {
return getAdvancedSearch_HouseholdViewRecord("84b135f6-22e0-4098-9780-926146ad4f73");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_HouseholdView, "individual", {
get: function () {
return getAdvancedSearch_HouseholdViewRecord("b8b68d27-d8dd-4c56-b305-382e6cbac364");
}
});

DirectoryClientCoreModel.staticEntities.advancedSearch_BDM = {};
var getAdvancedSearch_BDMRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["7e8d5717-cebb-4972-b38b-a40720d6211a"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_BDM, "married", {
get: function () {
return getAdvancedSearch_BDMRecord("2a4730ff-5c98-4638-96ab-81e083ff3605");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_BDM, "born", {
get: function () {
return getAdvancedSearch_BDMRecord("762f144e-b7c0-45ed-aa0a-048c13b9f2f6");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_BDM, "all", {
get: function () {
return getAdvancedSearch_BDMRecord("7d5dbb0d-9859-4128-ae15-997dc71ebd0f");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_BDM, "taken", {
get: function () {
return getAdvancedSearch_BDMRecord("82937b7d-2b84-4652-b101-c3a83e3a96ed");
}
});

DirectoryClientCoreModel.staticEntities.imageSigningSize = {};
var getImageSigningSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["875db175-64d3-4089-a0db-ddeb4ec520e1"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.imageSigningSize, "medium", {
get: function () {
return getImageSigningSizeRecord("8085e6e1-523e-4ac7-9e17-9f22db67470c");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.imageSigningSize, "large", {
get: function () {
return getImageSigningSizeRecord("b034da2e-cd76-4e4b-ad69-554c035a91b0");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.imageSigningSize, "small", {
get: function () {
return getImageSigningSizeRecord("f176a2f8-d908-4c3e-a475-2dd9d2061e66");
}
});

DirectoryClientCoreModel.staticEntities.clients = {};
var getClientsRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["a085314d-4819-4090-a0a6-77170d394361"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "rRTMobile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("07ca1c0c-4f6a-4fc6-ac72-f98d4f34b35c"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "rRTWeb", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("0800e5b7-0dab-441f-b497-a452774b980d"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "troveBackoffice", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("2536da9a-b620-4944-98bd-a311e805c5e8"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "connectMobile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("49d6f666-23e7-4b4a-b3c5-fbcb621f9468"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "alphaBackoffice", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("4aee66a6-66b4-4569-bf3d-a3b4ced1b403"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "troveMobile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("9b947838-7e86-4714-a235-3027b3ee5632"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "subscriptionsAndPayments", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("b16a519b-0ccf-4cb5-b71b-aed3c7c89211"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "hR100Mobile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("b66752a4-c03f-4114-a3a1-72e262702dc3"));
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.clients, "hR100Web", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getClientsRecord("e495bcc9-abd7-4246-8b81-7a99a84bacea"));
}
});

DirectoryClientCoreModel.staticEntities.advancedSearch_Category_Screen = {};
var getAdvancedSearch_Category_ScreenRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["ad359630-e2fa-454d-a348-e6f21c770d24"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_Screen, "places", {
get: function () {
return getAdvancedSearch_Category_ScreenRecord("001245d1-bda5-446d-a0e6-c2303aba9a35");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_Screen, "all", {
get: function () {
return getAdvancedSearch_Category_ScreenRecord("78971ae0-d416-4bc2-bddb-fb7d649afc65");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_Screen, "notifications", {
get: function () {
return getAdvancedSearch_Category_ScreenRecord("a9408483-779a-4e20-8561-6f3dc8557885");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_Screen, "people", {
get: function () {
return getAdvancedSearch_Category_ScreenRecord("cc996428-3110-40cd-ba14-f1fbd76a3202");
}
});

DirectoryClientCoreModel.staticEntities.advancedSearch_SearchMode = {};
var getAdvancedSearch_SearchModeRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["e6110304-09a9-45e9-b506-92df9ff063a6"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_SearchMode, "near", {
get: function () {
return getAdvancedSearch_SearchModeRecord("2ad952b2-ded1-4804-9d4d-d9c182f87a6d");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_SearchMode, "fuzzy", {
get: function () {
return getAdvancedSearch_SearchModeRecord("91707d33-707c-4bda-95ac-9ba7f3ca3990");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_SearchMode, "exact", {
get: function () {
return getAdvancedSearch_SearchModeRecord("b2a1e7c1-07b4-46bb-832b-357395625531");
}
});

DirectoryClientCoreModel.staticEntities.advancedSearch_Category_API = {};
var getAdvancedSearch_Category_APIRecord = function (record) {
return OS.ApplicationInfo.getModules()["da986718-6b39-4978-8cd9-1e166b827735"].staticEntities["fec2a1d6-844d-4fc0-b312-50b120108694"][record];
};
Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_API, "household", {
get: function () {
return getAdvancedSearch_Category_APIRecord("9dede67c-519d-41b2-9593-beb0eae71323");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_API, "member", {
get: function () {
return getAdvancedSearch_Category_APIRecord("a878148d-9224-40fe-8353-32953229eff5");
}
});

Object.defineProperty(DirectoryClientCoreModel.staticEntities.advancedSearch_Category_API, "locality", {
get: function () {
return getAdvancedSearch_Category_APIRecord("fb105e26-4009-459a-90c3-4dec02b54bbf");
}
});

});
