define("UBT_AppManager_CS.model$AppManager_UserExtendedAppManager_UserAppExtendedUserRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "ServiceCenter.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_DB.model$AppManager_UserAppExtendedRec", "ServiceCenter.model$UserRec", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, UBT_AppManager_DBModel, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedAppManager_UserAppExtendedUserRecord = (function (_super) {
__extends(AppManager_UserExtendedAppManager_UserAppExtendedUserRecord, _super);
function AppManager_UserExtendedAppManager_UserAppExtendedUserRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedAppManager_UserAppExtendedUserRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserExtended", "appManager_UserExtendedAttr", "AppManager_UserExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec), 
this.attr("AppManager_UserAppExtended", "appManager_UserAppExtendedAttr", "AppManager_UserAppExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserAppExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserAppExtendedRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserExtendedAppManager_UserAppExtendedUserRecord._isAnonymousRecord = true;
AppManager_UserExtendedAppManager_UserAppExtendedUserRecord.UniqueId = "01caf52c-60cc-9339-9e44-c7b57b6303dd";
AppManager_UserExtendedAppManager_UserAppExtendedUserRecord.init();
return AppManager_UserExtendedAppManager_UserAppExtendedUserRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserExtendedAppManager_UserAppExtendedUserRecord = AppManager_UserExtendedAppManager_UserAppExtendedUserRecord;

});
define("UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ClientExceptionMessageRec = (function (_super) {
__extends(AppManager_ClientExceptionMessageRec, _super);
function AppManager_ClientExceptionMessageRec(defaults) {
_super.apply(this, arguments);
}
AppManager_ClientExceptionMessageRec.attributesToDeclare = function () {
return [
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageTitle", "messageTitleAttr", "MessageTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageType", "messageTypeAttr", "MessageType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return UBT_AppManager_CSModel.staticEntities.uBT_MessageType.error;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ClientExceptionMessageRec.init();
return AppManager_ClientExceptionMessageRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec = AppManager_ClientExceptionMessageRec;

});
define("UBT_AppManager_CS.model$APIM_CommonHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBT_AppManager_CS.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderList = (function (_super) {
__extends(APIM_CommonHeaderList, _super);
function APIM_CommonHeaderList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderList.itemType = APIUtilitiesLibModel.APIM_CommonHeaderRec;
return APIM_CommonHeaderList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.APIM_CommonHeaderList = APIM_CommonHeaderList;

});
define("UBT_AppManager_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TextList = TextList;

});
define("UBT_AppManager_CS.model$PermissionListRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PermissionListRec = (function (_super) {
__extends(PermissionListRec, _super);
function PermissionListRec(defaults) {
_super.apply(this, arguments);
}
PermissionListRec.attributesToDeclare = function () {
return [
this.attr("List", "listAttr", "List", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
PermissionListRec.fromStructure = function (str) {
return new PermissionListRec(new PermissionListRec.RecordClass({
listAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PermissionListRec.init();
return PermissionListRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PermissionListRec = PermissionListRec;

});
define("UBT_AppManager_CS.model$LicenseListRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var LicenseListRec = (function (_super) {
__extends(LicenseListRec, _super);
function LicenseListRec(defaults) {
_super.apply(this, arguments);
}
LicenseListRec.attributesToDeclare = function () {
return [
this.attr("List", "listAttr", "List", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
LicenseListRec.fromStructure = function (str) {
return new LicenseListRec(new LicenseListRec.RecordClass({
listAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LicenseListRec.init();
return LicenseListRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.LicenseListRec = LicenseListRec;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoClientRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager_CS.model$LicenseListRec"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoClientRec = (function (_super) {
__extends(AppManager_UserInfoClientRec, _super);
function AppManager_UserInfoClientRec(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoClientRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("FirbaseRealTimeDabase_Token", "firbaseRealTimeDabase_TokenAttr", "FirbaseRealTimeDabase_Token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LoginOperationGUID", "loginOperationGUIDAttr", "LoginOperationGUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserExtended", "userExtendedAttr", "UserExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec), 
this.attr("PermissionList", "permissionListAttr", "PermissionList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.PermissionListRec());
}, true, UBT_AppManager_CSModel.PermissionListRec), 
this.attr("LicenseList", "licenseListAttr", "LicenseList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.LicenseListRec());
}, true, UBT_AppManager_CSModel.LicenseListRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserInfoClientRec.init();
return AppManager_UserInfoClientRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserInfoClientRec = AppManager_UserInfoClientRec;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoClientList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoClientList = (function (_super) {
__extends(AppManager_UserInfoClientList, _super);
function AppManager_UserInfoClientList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoClientList.itemType = UBT_AppManager_CSModel.AppManager_UserInfoClientRec;
return AppManager_UserInfoClientList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserInfoClientList = AppManager_UserInfoClientList;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_Config_FileRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Firebase_Config_FileRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_Config_FileRecord = (function (_super) {
__extends(AppManager_Firebase_Config_FileRecord, _super);
function AppManager_Firebase_Config_FileRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_Config_FileRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Firebase_Config_File", "appManager_Firebase_Config_FileAttr", "AppManager_Firebase_Config_File", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Firebase_Config_FileRec());
}, true, UBT_AppManager_DBModel.AppManager_Firebase_Config_FileRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Firebase_Config_FileRecord.fromStructure = function (str) {
return new AppManager_Firebase_Config_FileRecord(new AppManager_Firebase_Config_FileRecord.RecordClass({
appManager_Firebase_Config_FileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_Firebase_Config_FileRecord._isAnonymousRecord = true;
AppManager_Firebase_Config_FileRecord.UniqueId = "fe4d8d07-7d05-da67-43ba-8c024fd9153f";
AppManager_Firebase_Config_FileRecord.init();
return AppManager_Firebase_Config_FileRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Firebase_Config_FileRecord = AppManager_Firebase_Config_FileRecord;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_Config_FileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Firebase_Config_FileRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_Config_FileRecordList = (function (_super) {
__extends(AppManager_Firebase_Config_FileRecordList, _super);
function AppManager_Firebase_Config_FileRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_Config_FileRecordList.itemType = UBT_AppManager_CSModel.AppManager_Firebase_Config_FileRecord;
return AppManager_Firebase_Config_FileRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Firebase_Config_FileRecordList = AppManager_Firebase_Config_FileRecordList;

});
define("UBT_AppManager_CS.model$AppManager_Applications_ExpectedPermissionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Applications_ExpectedPermissionsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedPermissionsList = (function (_super) {
__extends(AppManager_Applications_ExpectedPermissionsList, _super);
function AppManager_Applications_ExpectedPermissionsList(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedPermissionsList.itemType = UBT_AppManager_DBModel.AppManager_Applications_ExpectedPermissionsRec;
return AppManager_Applications_ExpectedPermissionsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Applications_ExpectedPermissionsList = AppManager_Applications_ExpectedPermissionsList;

});
define("UBT_AppManager_CS.model$EntityMetadataRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UBTAppManager_AtomicTokenStore.model", "UBT_AppManager_CS.model", "Extension.UBTAppManager_AtomicTokenStore.model$EntityMetadataRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTAppManager_AtomicTokenStore"], function (exports, OutSystems, Extension_UBTAppManager_AtomicTokenStoreModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var EntityMetadataRecord = (function (_super) {
__extends(EntityMetadataRecord, _super);
function EntityMetadataRecord(defaults) {
_super.apply(this, arguments);
}
EntityMetadataRecord.attributesToDeclare = function () {
return [
this.attr("EntityMetadata", "entityMetadataAttr", "EntityMetadata", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_UBTAppManager_AtomicTokenStoreModel.EntityMetadataRec());
}, true, Extension_UBTAppManager_AtomicTokenStoreModel.EntityMetadataRec)
].concat(_super.attributesToDeclare.call(this));
};
EntityMetadataRecord.fromStructure = function (str) {
return new EntityMetadataRecord(new EntityMetadataRecord.RecordClass({
entityMetadataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EntityMetadataRecord._isAnonymousRecord = true;
EntityMetadataRecord.UniqueId = "0857b945-79fe-fc8d-e310-72eec1e99d0c";
EntityMetadataRecord.init();
return EntityMetadataRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.EntityMetadataRecord = EntityMetadataRecord;

});
define("UBT_AppManager_CS.model$B2C_ErrorTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$B2C_ErrorTypeRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var B2C_ErrorTypeList = (function (_super) {
__extends(B2C_ErrorTypeList, _super);
function B2C_ErrorTypeList(defaults) {
_super.apply(this, arguments);
}
B2C_ErrorTypeList.itemType = UBT_AppManager_DBModel.B2C_ErrorTypeRec;
return B2C_ErrorTypeList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.B2C_ErrorTypeList = B2C_ErrorTypeList;

});
define("UBT_AppManager_CS.model$APIM_CommonHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBT_AppManager_CS.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.APIM_CommonHeaderRecord = APIM_CommonHeaderRecord;

});
define("UBT_AppManager_CS.model$APIM_CommonHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$APIM_CommonHeaderRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecordList = (function (_super) {
__extends(APIM_CommonHeaderRecordList, _super);
function APIM_CommonHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecordList.itemType = UBT_AppManager_CSModel.APIM_CommonHeaderRecord;
return APIM_CommonHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.APIM_CommonHeaderRecordList = APIM_CommonHeaderRecordList;

});
define("UBT_AppManager_CS.model$PostTokenResponse_B2CList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_IS.model", "UBT_AppManager_CS.model", "UBT_AppManager_IS.model$PostTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_IS"], function (exports, OutSystems, UBT_AppManager_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostTokenResponse_B2CList = (function (_super) {
__extends(PostTokenResponse_B2CList, _super);
function PostTokenResponse_B2CList(defaults) {
_super.apply(this, arguments);
}
PostTokenResponse_B2CList.itemType = UBT_AppManager_ISModel.PostTokenResponse_B2CRec;
return PostTokenResponse_B2CList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostTokenResponse_B2CList = PostTokenResponse_B2CList;

});
define("UBT_AppManager_CS.model$PostTokenResponse_B2CRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_IS.model", "UBT_AppManager_CS.model", "UBT_AppManager_IS.model$PostTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_IS"], function (exports, OutSystems, UBT_AppManager_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostTokenResponse_B2CRecord = (function (_super) {
__extends(PostTokenResponse_B2CRecord, _super);
function PostTokenResponse_B2CRecord(defaults) {
_super.apply(this, arguments);
}
PostTokenResponse_B2CRecord.attributesToDeclare = function () {
return [
this.attr("PostTokenResponse_B2C", "postTokenResponse_B2CAttr", "PostTokenResponse_B2C", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_ISModel.PostTokenResponse_B2CRec());
}, true, UBT_AppManager_ISModel.PostTokenResponse_B2CRec)
].concat(_super.attributesToDeclare.call(this));
};
PostTokenResponse_B2CRecord.fromStructure = function (str) {
return new PostTokenResponse_B2CRecord(new PostTokenResponse_B2CRecord.RecordClass({
postTokenResponse_B2CAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostTokenResponse_B2CRecord._isAnonymousRecord = true;
PostTokenResponse_B2CRecord.UniqueId = "b5a21de8-e122-7668-c040-6b14cbe3a230";
PostTokenResponse_B2CRecord.init();
return PostTokenResponse_B2CRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PostTokenResponse_B2CRecord = PostTokenResponse_B2CRecord;

});
define("UBT_AppManager_CS.model$PostTokenResponse_B2CRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PostTokenResponse_B2CRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostTokenResponse_B2CRecordList = (function (_super) {
__extends(PostTokenResponse_B2CRecordList, _super);
function PostTokenResponse_B2CRecordList(defaults) {
_super.apply(this, arguments);
}
PostTokenResponse_B2CRecordList.itemType = UBT_AppManager_CSModel.PostTokenResponse_B2CRecord;
return PostTokenResponse_B2CRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostTokenResponse_B2CRecordList = PostTokenResponse_B2CRecordList;

});
define("UBT_AppManager_CS.model$User_SyncInfo_ClaimItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfo_ClaimItemRec = (function (_super) {
__extends(User_SyncInfo_ClaimItemRec, _super);
function User_SyncInfo_ClaimItemRec(defaults) {
_super.apply(this, arguments);
}
User_SyncInfo_ClaimItemRec.attributesToDeclare = function () {
return [
this.attr("Priority", "priorityAttr", "Priority", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ClaimName", "claimNameAttr", "ClaimName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_SyncInfo_ClaimItemRec.init();
return User_SyncInfo_ClaimItemRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRec = User_SyncInfo_ClaimItemRec;

});
define("UBT_AppManager_CS.model$User_SyncInfo_ClaimItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfo_ClaimItemRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfo_ClaimItemList = (function (_super) {
__extends(User_SyncInfo_ClaimItemList, _super);
function User_SyncInfo_ClaimItemList(defaults) {
_super.apply(this, arguments);
}
User_SyncInfo_ClaimItemList.itemType = UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRec;
return User_SyncInfo_ClaimItemList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList = User_SyncInfo_ClaimItemList;

});
define("UBT_AppManager_CS.model$User_SyncInfoClaimsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfo_ClaimItemList"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoClaimsRec = (function (_super) {
__extends(User_SyncInfoClaimsRec, _super);
function User_SyncInfoClaimsRec(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoClaimsRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("ExternalId", "externalIdAttr", "ExternalId", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("ContactBaseId", "contactBaseIdAttr", "ContactBaseId", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("isCommunityMember", "isCommunityMemberAttr", "isCommunityMember", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemList)
].concat(_super.attributesToDeclare.call(this));
};
User_SyncInfoClaimsRec.init();
return User_SyncInfoClaimsRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_SyncInfoClaimsRec = User_SyncInfoClaimsRec;

});
define("UBT_AppManager_CS.model$User_SyncInfoClaimsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfoClaimsRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoClaimsRecord = (function (_super) {
__extends(User_SyncInfoClaimsRecord, _super);
function User_SyncInfoClaimsRecord(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoClaimsRecord.attributesToDeclare = function () {
return [
this.attr("User_SyncInfoClaims", "user_SyncInfoClaimsAttr", "User_SyncInfoClaims", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfoClaimsRec());
}, true, UBT_AppManager_CSModel.User_SyncInfoClaimsRec)
].concat(_super.attributesToDeclare.call(this));
};
User_SyncInfoClaimsRecord.fromStructure = function (str) {
return new User_SyncInfoClaimsRecord(new User_SyncInfoClaimsRecord.RecordClass({
user_SyncInfoClaimsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
User_SyncInfoClaimsRecord._isAnonymousRecord = true;
User_SyncInfoClaimsRecord.UniqueId = "2977e1eb-9d06-71a6-ca2e-c2636888d602";
User_SyncInfoClaimsRecord.init();
return User_SyncInfoClaimsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_SyncInfoClaimsRecord = User_SyncInfoClaimsRecord;

});
define("UBT_AppManager_CS.model$User_SyncInfoClaimsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfoClaimsRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoClaimsRecordList = (function (_super) {
__extends(User_SyncInfoClaimsRecordList, _super);
function User_SyncInfoClaimsRecordList(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoClaimsRecordList.itemType = UBT_AppManager_CSModel.User_SyncInfoClaimsRecord;
return User_SyncInfoClaimsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_SyncInfoClaimsRecordList = User_SyncInfoClaimsRecordList;

});
define("UBT_AppManager_CS.model$AppManager_Application_EspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Application_EspaceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Application_EspaceRecord = (function (_super) {
__extends(AppManager_Application_EspaceRecord, _super);
function AppManager_Application_EspaceRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Application_EspaceRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Application_Espace", "appManager_Application_EspaceAttr", "AppManager_Application_Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Application_EspaceRec());
}, true, UBT_AppManager_DBModel.AppManager_Application_EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Application_EspaceRecord.fromStructure = function (str) {
return new AppManager_Application_EspaceRecord(new AppManager_Application_EspaceRecord.RecordClass({
appManager_Application_EspaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_Application_EspaceRecord._isAnonymousRecord = true;
AppManager_Application_EspaceRecord.UniqueId = "a85dd51d-390b-52a4-a01d-45dde24edd43";
AppManager_Application_EspaceRecord.init();
return AppManager_Application_EspaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Application_EspaceRecord = AppManager_Application_EspaceRecord;

});
define("UBT_AppManager_CS.model$AppManager_Application_EspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Application_EspaceRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Application_EspaceRecordList = (function (_super) {
__extends(AppManager_Application_EspaceRecordList, _super);
function AppManager_Application_EspaceRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Application_EspaceRecordList.itemType = UBT_AppManager_CSModel.AppManager_Application_EspaceRecord;
return AppManager_Application_EspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Application_EspaceRecordList = AppManager_Application_EspaceRecordList;

});
define("UBT_AppManager_CS.model$TokenValidationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model$TokenValidationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils"], function (exports, OutSystems, Extension_JWT_TokenUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenValidationRecord = (function (_super) {
__extends(TokenValidationRecord, _super);
function TokenValidationRecord(defaults) {
_super.apply(this, arguments);
}
TokenValidationRecord.attributesToDeclare = function () {
return [
this.attr("TokenValidation", "tokenValidationAttr", "TokenValidation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_JWT_TokenUtilsModel.TokenValidationRec());
}, true, Extension_JWT_TokenUtilsModel.TokenValidationRec)
].concat(_super.attributesToDeclare.call(this));
};
TokenValidationRecord.fromStructure = function (str) {
return new TokenValidationRecord(new TokenValidationRecord.RecordClass({
tokenValidationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TokenValidationRecord._isAnonymousRecord = true;
TokenValidationRecord.UniqueId = "af64c705-e596-1ff3-05da-ab983e89c2da";
TokenValidationRecord.init();
return TokenValidationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.TokenValidationRecord = TokenValidationRecord;

});
define("UBT_AppManager_CS.model$ClaimRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model$ClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils"], function (exports, OutSystems, Extension_JWT_TokenUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ClaimRecord = (function (_super) {
__extends(ClaimRecord, _super);
function ClaimRecord(defaults) {
_super.apply(this, arguments);
}
ClaimRecord.attributesToDeclare = function () {
return [
this.attr("Claim", "claimAttr", "Claim", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_JWT_TokenUtilsModel.ClaimRec());
}, true, Extension_JWT_TokenUtilsModel.ClaimRec)
].concat(_super.attributesToDeclare.call(this));
};
ClaimRecord.fromStructure = function (str) {
return new ClaimRecord(new ClaimRecord.RecordClass({
claimAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ClaimRecord._isAnonymousRecord = true;
ClaimRecord.UniqueId = "126aa544-2dbe-0916-9874-b190bcc398c4";
ClaimRecord.init();
return ClaimRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ClaimRecord = ClaimRecord;

});
define("UBT_AppManager_CS.model$ClaimRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ClaimRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ClaimRecordList = (function (_super) {
__extends(ClaimRecordList, _super);
function ClaimRecordList(defaults) {
_super.apply(this, arguments);
}
ClaimRecordList.itemType = UBT_AppManager_CSModel.ClaimRecord;
return ClaimRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ClaimRecordList = ClaimRecordList;

});
define("UBT_AppManager_CS.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Text.model", "UBT_AppManager_CS.model", "Extension.Text.model$TextRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_TextModel.TextRec());
}, true, Extension_TextModel.TextRec)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord._isAnonymousRecord = true;
TextRecord.UniqueId = "0d84b59e-ff89-87c4-71ae-b49dfa9f2c39";
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.TextRecord = TextRecord;

});
define("UBT_AppManager_CS.model$User_ToUpdateInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "ServiceCenter.model$UserRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_ToUpdateInfoRec = (function (_super) {
__extends(User_ToUpdateInfoRec, _super);
function User_ToUpdateInfoRec(defaults) {
_super.apply(this, arguments);
}
User_ToUpdateInfoRec.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec), 
this.attr("UserExtended", "userExtendedAttr", "UserExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec), 
this.attr("NeedsPersistUser", "needsPersistUserAttr", "NeedsPersistUser", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NeedsPersistUserExtended", "needsPersistUserExtendedAttr", "NeedsPersistUserExtended", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_ToUpdateInfoRec.init();
return User_ToUpdateInfoRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_ToUpdateInfoRec = User_ToUpdateInfoRec;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model$User_ToUpdateInfoRec", "UBT_AppManager_DB.model$AppManager_UserAppExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_CS.model$LicenseListRec", "UBT_AppManager_CS.model$PermissionListRec"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoRec = (function (_super) {
__extends(AppManager_UserInfoRec, _super);
function AppManager_UserInfoRec(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoRec.attributesToDeclare = function () {
return [
this.attr("User_ToUpdateInfo", "user_ToUpdateInfoAttr", "User_ToUpdateInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_ToUpdateInfoRec());
}, true, UBT_AppManager_CSModel.User_ToUpdateInfoRec), 
this.attr("AppManager_UserAppExtended", "appManager_UserAppExtendedAttr", "AppManager_UserAppExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserAppExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserAppExtendedRec), 
this.attr("LicenseList", "licenseListAttr", "LicenseList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.LicenseListRec());
}, true, UBT_AppManager_CSModel.LicenseListRec), 
this.attr("PermissionList", "permissionListAttr", "PermissionList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.PermissionListRec());
}, true, UBT_AppManager_CSModel.PermissionListRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserInfoRec.init();
return AppManager_UserInfoRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserInfoRec = AppManager_UserInfoRec;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoList = (function (_super) {
__extends(AppManager_UserInfoList, _super);
function AppManager_UserInfoList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoList.itemType = UBT_AppManager_CSModel.AppManager_UserInfoRec;
return AppManager_UserInfoList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserInfoList = AppManager_UserInfoList;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_ConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Firebase_ConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_ConfigRecord = (function (_super) {
__extends(AppManager_Firebase_ConfigRecord, _super);
function AppManager_Firebase_ConfigRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_ConfigRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Firebase_Config", "appManager_Firebase_ConfigAttr", "AppManager_Firebase_Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Firebase_ConfigRecord.fromStructure = function (str) {
return new AppManager_Firebase_ConfigRecord(new AppManager_Firebase_ConfigRecord.RecordClass({
appManager_Firebase_ConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_Firebase_ConfigRecord._isAnonymousRecord = true;
AppManager_Firebase_ConfigRecord.UniqueId = "499b417e-635b-329b-7a29-d6c2c2d5cb39";
AppManager_Firebase_ConfigRecord.init();
return AppManager_Firebase_ConfigRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Firebase_ConfigRecord = AppManager_Firebase_ConfigRecord;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_ConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Firebase_ConfigRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_ConfigRecordList = (function (_super) {
__extends(AppManager_Firebase_ConfigRecordList, _super);
function AppManager_Firebase_ConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_ConfigRecordList.itemType = UBT_AppManager_CSModel.AppManager_Firebase_ConfigRecord;
return AppManager_Firebase_ConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Firebase_ConfigRecordList = AppManager_Firebase_ConfigRecordList;

});
define("UBT_AppManager_CS.model$JWT_TokenKeysConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_TokenKeysConfigRec = (function (_super) {
__extends(JWT_TokenKeysConfigRec, _super);
function JWT_TokenKeysConfigRec(defaults) {
_super.apply(this, arguments);
}
JWT_TokenKeysConfigRec.attributesToDeclare = function () {
return [
this.attr("BaseURL", "baseURLAttr", "BaseURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyId", "policyIdAttr", "PolicyId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KeySuffixURL", "keySuffixURLAttr", "KeySuffixURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
JWT_TokenKeysConfigRec.init();
return JWT_TokenKeysConfigRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.JWT_TokenKeysConfigRec = JWT_TokenKeysConfigRec;

});
define("UBT_AppManager_CS.model$JWT_TokenKeysConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$JWT_TokenKeysConfigRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_TokenKeysConfigRecord = (function (_super) {
__extends(JWT_TokenKeysConfigRecord, _super);
function JWT_TokenKeysConfigRecord(defaults) {
_super.apply(this, arguments);
}
JWT_TokenKeysConfigRecord.attributesToDeclare = function () {
return [
this.attr("JWT_TokenKeysConfig", "jWT_TokenKeysConfigAttr", "JWT_TokenKeysConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.JWT_TokenKeysConfigRec());
}, true, UBT_AppManager_CSModel.JWT_TokenKeysConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
JWT_TokenKeysConfigRecord.fromStructure = function (str) {
return new JWT_TokenKeysConfigRecord(new JWT_TokenKeysConfigRecord.RecordClass({
jWT_TokenKeysConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
JWT_TokenKeysConfigRecord._isAnonymousRecord = true;
JWT_TokenKeysConfigRecord.UniqueId = "224a1c9c-1fa0-a009-6cf0-09e41e2bba09";
JWT_TokenKeysConfigRecord.init();
return JWT_TokenKeysConfigRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.JWT_TokenKeysConfigRecord = JWT_TokenKeysConfigRecord;

});
define("UBT_AppManager_CS.model$JWT_TokenKeysConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$JWT_TokenKeysConfigRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_TokenKeysConfigRecordList = (function (_super) {
__extends(JWT_TokenKeysConfigRecordList, _super);
function JWT_TokenKeysConfigRecordList(defaults) {
_super.apply(this, arguments);
}
JWT_TokenKeysConfigRecordList.itemType = UBT_AppManager_CSModel.JWT_TokenKeysConfigRecord;
return JWT_TokenKeysConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.JWT_TokenKeysConfigRecordList = JWT_TokenKeysConfigRecordList;

});
define("UBT_AppManager_CS.model$AppManager_AzureB2C_ConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_AzureB2C_ConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_AzureB2C_ConfigRecord = (function (_super) {
__extends(AppManager_AzureB2C_ConfigRecord, _super);
function AppManager_AzureB2C_ConfigRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureB2C_ConfigRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_AzureB2C_Config", "appManager_AzureB2C_ConfigAttr", "AppManager_AzureB2C_Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_AzureB2C_ConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_AzureB2C_ConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_AzureB2C_ConfigRecord.fromStructure = function (str) {
return new AppManager_AzureB2C_ConfigRecord(new AppManager_AzureB2C_ConfigRecord.RecordClass({
appManager_AzureB2C_ConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_AzureB2C_ConfigRecord._isAnonymousRecord = true;
AppManager_AzureB2C_ConfigRecord.UniqueId = "318675ff-0e89-3a3d-48d1-ffddc55a32dc";
AppManager_AzureB2C_ConfigRecord.init();
return AppManager_AzureB2C_ConfigRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_AzureB2C_ConfigRecord = AppManager_AzureB2C_ConfigRecord;

});
define("UBT_AppManager_CS.model$AppManager_AzureB2C_ConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_AzureB2C_ConfigRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_AzureB2C_ConfigRecordList = (function (_super) {
__extends(AppManager_AzureB2C_ConfigRecordList, _super);
function AppManager_AzureB2C_ConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureB2C_ConfigRecordList.itemType = UBT_AppManager_CSModel.AppManager_AzureB2C_ConfigRecord;
return AppManager_AzureB2C_ConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_AzureB2C_ConfigRecordList = AppManager_AzureB2C_ConfigRecordList;

});
define("UBT_AppManager_CS.model$FieldViolationItemList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$FieldViolationItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FieldViolationItemList = (function (_super) {
__extends(FieldViolationItemList, _super);
function FieldViolationItemList(defaults) {
_super.apply(this, arguments);
}
FieldViolationItemList.itemType = FirebaseCloudMessageSenderModel.FieldViolationItemRec;
return FieldViolationItemList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FieldViolationItemList = FieldViolationItemList;

});
define("UBT_AppManager_CS.model$TextTextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.TextTextLongIntegerRecord = TextTextLongIntegerRecord;

});
define("UBT_AppManager_CS.model$TextTextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$TextTextLongIntegerRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecordList = (function (_super) {
__extends(TextTextLongIntegerRecordList, _super);
function TextTextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecordList.itemType = UBT_AppManager_CSModel.TextTextLongIntegerRecord;
return TextTextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TextTextLongIntegerRecordList = TextTextLongIntegerRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Directory_UserCurrent_SubscriptionRecord = Directory_UserCurrent_SubscriptionRecord;

});
define("UBT_AppManager_CS.model$TokenRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenRec = (function (_super) {
__extends(TokenRec, _super);
function TokenRec(defaults) {
_super.apply(this, arguments);
}
TokenRec.attributesToDeclare = function () {
return [
this.attr("TokenType", "tokenTypeAttr", "TokenType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccessToken", "accessTokenAttr", "AccessToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IdToken", "idTokenAttr", "IdToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TokenRec.init();
return TokenRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.TokenRec = TokenRec;

});
define("UBT_AppManager_CS.model$TokenRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$TokenRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenRecord = (function (_super) {
__extends(TokenRecord, _super);
function TokenRecord(defaults) {
_super.apply(this, arguments);
}
TokenRecord.attributesToDeclare = function () {
return [
this.attr("Token", "tokenAttr", "Token", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.TokenRec());
}, true, UBT_AppManager_CSModel.TokenRec)
].concat(_super.attributesToDeclare.call(this));
};
TokenRecord.fromStructure = function (str) {
return new TokenRecord(new TokenRecord.RecordClass({
tokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TokenRecord._isAnonymousRecord = true;
TokenRecord.UniqueId = "85846050-06ea-8150-62d9-587d353f7847";
TokenRecord.init();
return TokenRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.TokenRecord = TokenRecord;

});
define("UBT_AppManager_CS.model$TokenRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$TokenRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenRecordList = (function (_super) {
__extends(TokenRecordList, _super);
function TokenRecordList(defaults) {
_super.apply(this, arguments);
}
TokenRecordList.itemType = UBT_AppManager_CSModel.TokenRecord;
return TokenRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TokenRecordList = TokenRecordList;

});
define("UBT_AppManager_CS.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemList = (function (_super) {
__extends(Custom_Address_ItemList, _super);
function Custom_Address_ItemList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
return Custom_Address_ItemList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("UBT_AppManager_CS.model$AppManager_AzureB2C_ConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_AzureB2C_ConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_AzureB2C_ConfigList = (function (_super) {
__extends(AppManager_AzureB2C_ConfigList, _super);
function AppManager_AzureB2C_ConfigList(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureB2C_ConfigList.itemType = UBT_AppManager_DBModel.AppManager_AzureB2C_ConfigRec;
return AppManager_AzureB2C_ConfigList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_AzureB2C_ConfigList = AppManager_AzureB2C_ConfigList;

});
define("UBT_AppManager_CS.model$AppManager_DeviceContextRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextRec = (function (_super) {
__extends(AppManager_DeviceContextRec, _super);
function AppManager_DeviceContextRec(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextRec.attributesToDeclare = function () {
return [
this.attr("UUID", "uUIDAttr", "UUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FCMToken", "fCMTokenAttr", "FCMToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Streamline_IsInstalled", "streamline_IsInstalledAttr", "Streamline_IsInstalled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Streamline_SerialNumber", "streamline_SerialNumberAttr", "Streamline_SerialNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DevicePlatform", "devicePlatformAttr", "DevicePlatform", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isNativeDevice", "isNativeDeviceAttr", "isNativeDevice", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MobileBuild", "mobileBuildAttr", "MobileBuild", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("MobileVersion", "mobileVersionAttr", "MobileVersion", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("iaRunningAsPWA", "iaRunningAsPWAAttr", "iaRunningAsPWA", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UserAgent", "userAgentAttr", "UserAgent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Browser", "browserAttr", "Browser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PackageName", "packageNameAttr", "PackageName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_DeviceContextRec.init();
return AppManager_DeviceContextRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_DeviceContextRec = AppManager_DeviceContextRec;

});
define("UBT_AppManager_CS.model$AppManager_DeviceContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.AppManager_DeviceContextRecord = AppManager_DeviceContextRecord;

});
define("UBT_AppManager_CS.model$AppManager_DeviceContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextRecordList = (function (_super) {
__extends(AppManager_DeviceContextRecordList, _super);
function AppManager_DeviceContextRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextRecordList.itemType = UBT_AppManager_CSModel.AppManager_DeviceContextRecord;
return AppManager_DeviceContextRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_DeviceContextRecordList = AppManager_DeviceContextRecordList;

});
define("UBT_AppManager_CS.model$ExtraDataItem2Record", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$ExtraDataItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ExtraDataItem2Record = (function (_super) {
__extends(ExtraDataItem2Record, _super);
function ExtraDataItem2Record(defaults) {
_super.apply(this, arguments);
}
ExtraDataItem2Record.attributesToDeclare = function () {
return [
this.attr("ExtraDataItem", "extraDataItemAttr", "ExtraDataItem2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessageSenderModel.ExtraDataItemRec());
}, true, FirebaseCloudMessageSenderModel.ExtraDataItemRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtraDataItem2Record.fromStructure = function (str) {
return new ExtraDataItem2Record(new ExtraDataItem2Record.RecordClass({
extraDataItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtraDataItem2Record._isAnonymousRecord = true;
ExtraDataItem2Record.UniqueId = "c5946965-a132-45fd-87b2-941b7e0ec682";
ExtraDataItem2Record.init();
return ExtraDataItem2Record;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ExtraDataItem2Record = ExtraDataItem2Record;

});
define("UBT_AppManager_CS.model$ExtraDataItem2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ExtraDataItem2Record"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ExtraDataItem2RecordList = (function (_super) {
__extends(ExtraDataItem2RecordList, _super);
function ExtraDataItem2RecordList(defaults) {
_super.apply(this, arguments);
}
ExtraDataItem2RecordList.itemType = UBT_AppManager_CSModel.ExtraDataItem2Record;
return ExtraDataItem2RecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ExtraDataItem2RecordList = ExtraDataItem2RecordList;

});
define("UBT_AppManager_CS.model$Directory_MemberProfileRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_MemberProfileRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_MemberProfileRecord = (function (_super) {
__extends(Directory_MemberProfileRecord, _super);
function Directory_MemberProfileRecord(defaults) {
_super.apply(this, arguments);
}
Directory_MemberProfileRecord.attributesToDeclare = function () {
return [
this.attr("Directory_MemberProfile", "directory_MemberProfileAttr", "Directory_MemberProfile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_MemberProfileRec());
}, true, APIDomain_Directory_ISModel.Directory_MemberProfileRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_MemberProfileRecord.fromStructure = function (str) {
return new Directory_MemberProfileRecord(new Directory_MemberProfileRecord.RecordClass({
directory_MemberProfileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_MemberProfileRecord._isAnonymousRecord = true;
Directory_MemberProfileRecord.UniqueId = "1810a3a7-2819-c4d8-60d8-e244c38654d0";
Directory_MemberProfileRecord.init();
return Directory_MemberProfileRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Directory_MemberProfileRecord = Directory_MemberProfileRecord;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheRec = (function (_super) {
__extends(AppManager_ConfigClientCacheRec, _super);
function AppManager_ConfigClientCacheRec(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheRec.attributesToDeclare = function () {
return [
this.attr("BaseURL", "baseURLAttr", "BaseURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Environment", "environmentAttr", "Environment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IdpProviderId", "idpProviderIdAttr", "IdpProviderId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AzureB2C_Policy_Login", "azureB2C_Policy_LoginAttr", "AzureB2C_Policy_Login", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AzureB2C_Policy_ResetPass", "azureB2C_Policy_ResetPassAttr", "AzureB2C_Policy_ResetPass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AzureB2C_ClientId", "azureB2C_ClientIdAttr", "AzureB2C_ClientId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FrontEgg_AppId", "frontEgg_AppIdAttr", "FrontEgg_AppId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FrontEgg_CodeVerifier", "frontEgg_CodeVerifierAttr", "FrontEgg_CodeVerifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FrontEgg_CodeChallenge", "frontEgg_CodeChallengeAttr", "FrontEgg_CodeChallenge", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_ProjectId", "firebase_ProjectIdAttr", "Firebase_ProjectId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_RealTimeDatabase_Use", "firebase_RealTimeDatabase_UseAttr", "Firebase_RealTimeDatabase_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AzureInsights_Use", "azureInsights_UseAttr", "AzureInsights_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_Use", "pIN_UseAttr", "PIN_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_SessionInactivity_Use", "pIN_SessionInactivity_UseAttr", "PIN_SessionInactivity_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_SessionInactivity_Seconds", "pIN_SessionInactivity_SecondsAttr", "PIN_SessionInactivity_Seconds", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PIN_SessionInactivity_Navigate", "pIN_SessionInactivity_NavigateAttr", "PIN_SessionInactivity_Navigate", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_EnableFingerprint", "pIN_EnableFingerprintAttr", "PIN_EnableFingerprint", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_EnforceOnReady", "pIN_EnforceOnReadyAttr", "PIN_EnforceOnReady", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CustomCallback", "customCallbackAttr", "CustomCallback", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MinWebViewVersion_Chrome", "minWebViewVersion_ChromeAttr", "MinWebViewVersion_Chrome", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MinWebViewVersion_Safari", "minWebViewVersion_SafariAttr", "MinWebViewVersion_Safari", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MinNativeAppVersion", "minNativeAppVersionAttr", "MinNativeAppVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PackageName", "packageNameAttr", "PackageName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AndroidAppId", "androidAppIdAttr", "AndroidAppId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EnableFrameworkExtension", "enableFrameworkExtensionAttr", "EnableFrameworkExtension", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PluginUse_PrivacyScreen", "pluginUse_PrivacyScreenAttr", "PluginUse_PrivacyScreen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Streamline_TOTP_LoginCheck", "streamline_TOTP_LoginCheckAttr", "Streamline_TOTP_LoginCheck", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigClientCacheRec.init();
return AppManager_ConfigClientCacheRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec = AppManager_ConfigClientCacheRec;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientRec = (function (_super) {
__extends(AppManager_ConfigClientRec, _super);
function AppManager_ConfigClientRec(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientRec.attributesToDeclare = function () {
return [
this.attr("AppManager_ClientCache", "appManager_ClientCacheAttr", "AppManager_ClientCache", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec), 
this.attr("EspaceName", "espaceNameAttr", "EspaceName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrentUTCTime", "currentUTCTimeAttr", "CurrentUTCTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Firebase_RealTimeDatabase_URL", "firebase_RealTimeDatabase_URLAttr", "Firebase_RealTimeDatabase_URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_RealTimeDatabase_APIKey", "firebase_RealTimeDatabase_APIKeyAttr", "Firebase_RealTimeDatabase_APIKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_CloudMessage_Use", "firebase_CloudMessage_UseAttr", "Firebase_CloudMessage_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AzureInsights_ConnectionString", "azureInsights_ConnectionStringAttr", "AzureInsights_ConnectionString", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceAwareness_Use", "deviceAwareness_UseAttr", "DeviceAwareness_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Streamline_Use", "streamline_UseAttr", "Streamline_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CheckDeviceOnReady", "checkDeviceOnReadyAttr", "CheckDeviceOnReady", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigClientRec.init();
return AppManager_ConfigClientRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ConfigClientRec = AppManager_ConfigClientRec;

});
define("UBT_AppManager_CS.model$FirebaseRD_EventJSONRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FirebaseRD_EventJSONRec = (function (_super) {
__extends(FirebaseRD_EventJSONRec, _super);
function FirebaseRD_EventJSONRec(defaults) {
_super.apply(this, arguments);
}
FirebaseRD_EventJSONRec.attributesToDeclare = function () {
return [
this.attr("UUID", "uUIDAttr", "uuid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "errorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessageTitle", "errorMessageTitleAttr", "ErrorMessageTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FirebaseRD_EventJSONRec.init();
return FirebaseRD_EventJSONRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.FirebaseRD_EventJSONRec = FirebaseRD_EventJSONRec;

});
define("UBT_AppManager_CS.model$FirebaseRD_EventJSONList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FirebaseRD_EventJSONRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FirebaseRD_EventJSONList = (function (_super) {
__extends(FirebaseRD_EventJSONList, _super);
function FirebaseRD_EventJSONList(defaults) {
_super.apply(this, arguments);
}
FirebaseRD_EventJSONList.itemType = UBT_AppManager_CSModel.FirebaseRD_EventJSONRec;
return FirebaseRD_EventJSONList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FirebaseRD_EventJSONList = FirebaseRD_EventJSONList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigSecretRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_ApplicationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_CS.model$AppManager_ConfigClientRec"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigSecretRec = (function (_super) {
__extends(AppManager_ConfigSecretRec, _super);
function AppManager_ConfigSecretRec(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigSecretRec.attributesToDeclare = function () {
return [
this.attr("ClientSecret", "clientSecretAttr", "ClientSecret", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_PrivateKey", "firebase_PrivateKeyAttr", "Firebase_PrivateKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_ClientEmail", "firebase_ClientEmailAttr", "Firebase_ClientEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("AppManager_Application", "appManager_ApplicationAttr", "AppManager_Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_ApplicationRec());
}, true, UBT_AppManager_DBModel.AppManager_ApplicationRec), 
this.attr("AppManager_ClientConfig", "appManager_ClientConfigAttr", "AppManager_ClientConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigClientRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigSecretRec.init();
return AppManager_ConfigSecretRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ConfigSecretRec = AppManager_ConfigSecretRec;

});
define("UBT_AppManager_CS.model$AppManager_ConfigSecretList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigSecretRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigSecretList = (function (_super) {
__extends(AppManager_ConfigSecretList, _super);
function AppManager_ConfigSecretList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigSecretList.itemType = UBT_AppManager_CSModel.AppManager_ConfigSecretRec;
return AppManager_ConfigSecretList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ConfigSecretList = AppManager_ConfigSecretList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientCacheList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheList = (function (_super) {
__extends(AppManager_ConfigClientCacheList, _super);
function AppManager_ConfigClientCacheList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec;
return AppManager_ConfigClientCacheList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ConfigClientCacheList = AppManager_ConfigClientCacheList;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_ResultRec = (function (_super) {
__extends(AppManager_PostLogin_ResultRec, _super);
function AppManager_PostLogin_ResultRec(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_ResultRec.attributesToDeclare = function () {
return [
this.attr("IsError", "isErrorAttr", "IsError", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_PostLogin_ResultRec.init();
return AppManager_PostLogin_ResultRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_PostLogin_ResultRec = AppManager_PostLogin_ResultRec;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_ResultList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_ResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_ResultList = (function (_super) {
__extends(AppManager_PostLogin_ResultList, _super);
function AppManager_PostLogin_ResultList(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_ResultList.itemType = UBT_AppManager_CSModel.AppManager_PostLogin_ResultRec;
return AppManager_PostLogin_ResultList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_PostLogin_ResultList = AppManager_PostLogin_ResultList;

});
define("UBT_AppManager_CS.model$IntegerLiteralRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model", "UBT_AppManager_CS.model", "Extension.Sanitization.model$IntegerLiteralRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$Sanitization"], function (exports, OutSystems, Extension_SanitizationModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var IntegerLiteralRecord = (function (_super) {
__extends(IntegerLiteralRecord, _super);
function IntegerLiteralRecord(defaults) {
_super.apply(this, arguments);
}
IntegerLiteralRecord.attributesToDeclare = function () {
return [
this.attr("IntegerLiteral", "integerLiteralAttr", "IntegerLiteral", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SanitizationModel.IntegerLiteralRec());
}, true, Extension_SanitizationModel.IntegerLiteralRec)
].concat(_super.attributesToDeclare.call(this));
};
IntegerLiteralRecord.fromStructure = function (str) {
return new IntegerLiteralRecord(new IntegerLiteralRecord.RecordClass({
integerLiteralAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IntegerLiteralRecord._isAnonymousRecord = true;
IntegerLiteralRecord.UniqueId = "501f23bc-6d75-0fe0-b76b-3bfaa246f6ae";
IntegerLiteralRecord.init();
return IntegerLiteralRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.IntegerLiteralRecord = IntegerLiteralRecord;

});
define("UBT_AppManager_CS.model$IntegerLiteralRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$IntegerLiteralRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var IntegerLiteralRecordList = (function (_super) {
__extends(IntegerLiteralRecordList, _super);
function IntegerLiteralRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerLiteralRecordList.itemType = UBT_AppManager_CSModel.IntegerLiteralRecord;
return IntegerLiteralRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.IntegerLiteralRecordList = IntegerLiteralRecordList;

});
define("UBT_AppManager_CS.model$PushNotication_BulkRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PushNotication_BulkRec = (function (_super) {
__extends(PushNotication_BulkRec, _super);
function PushNotication_BulkRec(defaults) {
_super.apply(this, arguments);
}
PushNotication_BulkRec.attributesToDeclare = function () {
return [
this.attr("FCMToken", "fCMTokenAttr", "FCMToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DevicePlatform", "devicePlatformAttr", "DevicePlatform", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserAppExtendedId", "userAppExtendedIdAttr", "UserAppExtendedId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UUID", "uUIDAttr", "UUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PushNotication_BulkRec.init();
return PushNotication_BulkRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PushNotication_BulkRec = PushNotication_BulkRec;

});
define("UBT_AppManager_CS.model$PushNotication_BulkList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PushNotication_BulkRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PushNotication_BulkList = (function (_super) {
__extends(PushNotication_BulkList, _super);
function PushNotication_BulkList(defaults) {
_super.apply(this, arguments);
}
PushNotication_BulkList.itemType = UBT_AppManager_CSModel.PushNotication_BulkRec;
return PushNotication_BulkList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PushNotication_BulkList = PushNotication_BulkList;

});
define("UBT_AppManager_CS.model$TextList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Text.model", "UBT_AppManager_CS.model", "Extension.Text.model$TextRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = Extension_TextModel.TextRec;
return TextList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TextList = TextList;

});
define("UBT_AppManager_CS.model$JWKRecord", ["exports", "OutSystems/ClientRuntime/Main", "JWT.model", "UBT_AppManager_CS.model", "JWT.model$JWKRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT"], function (exports, OutSystems, JWTModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWKRecord = (function (_super) {
__extends(JWKRecord, _super);
function JWKRecord(defaults) {
_super.apply(this, arguments);
}
JWKRecord.attributesToDeclare = function () {
return [
this.attr("JWK", "jWKAttr", "JWK", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new JWTModel.JWKRec());
}, true, JWTModel.JWKRec)
].concat(_super.attributesToDeclare.call(this));
};
JWKRecord.fromStructure = function (str) {
return new JWKRecord(new JWKRecord.RecordClass({
jWKAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
JWKRecord._isAnonymousRecord = true;
JWKRecord.UniqueId = "217ba255-685a-cbad-d4b7-50088632a7e5";
JWKRecord.init();
return JWKRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.JWKRecord = JWKRecord;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_ConfigAppManager_ApplicationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Firebase_ConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_DB.model$AppManager_ApplicationRec"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_ConfigAppManager_ApplicationRecord = (function (_super) {
__extends(AppManager_Firebase_ConfigAppManager_ApplicationRecord, _super);
function AppManager_Firebase_ConfigAppManager_ApplicationRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_ConfigAppManager_ApplicationRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Firebase_Config", "appManager_Firebase_ConfigAttr", "AppManager_Firebase_Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec), 
this.attr("AppManager_Application", "appManager_ApplicationAttr", "AppManager_Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_ApplicationRec());
}, true, UBT_AppManager_DBModel.AppManager_ApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Firebase_ConfigAppManager_ApplicationRecord._isAnonymousRecord = true;
AppManager_Firebase_ConfigAppManager_ApplicationRecord.UniqueId = "2299da0e-e15b-7169-4514-2742a97a04e4";
AppManager_Firebase_ConfigAppManager_ApplicationRecord.init();
return AppManager_Firebase_ConfigAppManager_ApplicationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Firebase_ConfigAppManager_ApplicationRecord = AppManager_Firebase_ConfigAppManager_ApplicationRecord;

});
define("UBT_AppManager_CS.model$JWT_ClaimRecord", ["exports", "OutSystems/ClientRuntime/Main", "JWT.model", "UBT_AppManager_CS.model", "JWT.model$JWT_ClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT"], function (exports, OutSystems, JWTModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_ClaimRecord = (function (_super) {
__extends(JWT_ClaimRecord, _super);
function JWT_ClaimRecord(defaults) {
_super.apply(this, arguments);
}
JWT_ClaimRecord.attributesToDeclare = function () {
return [
this.attr("JWT_Claim", "jWT_ClaimAttr", "JWT_Claim", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new JWTModel.JWT_ClaimRec());
}, true, JWTModel.JWT_ClaimRec)
].concat(_super.attributesToDeclare.call(this));
};
JWT_ClaimRecord.fromStructure = function (str) {
return new JWT_ClaimRecord(new JWT_ClaimRecord.RecordClass({
jWT_ClaimAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
JWT_ClaimRecord._isAnonymousRecord = true;
JWT_ClaimRecord.UniqueId = "22bcab61-13ec-2fd1-800f-faebe406e5f5";
JWT_ClaimRecord.init();
return JWT_ClaimRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.JWT_ClaimRecord = JWT_ClaimRecord;

});
define("UBT_AppManager_CS.model$Custom_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Custom_AddressRecord = Custom_AddressRecord;

});
define("UBT_AppManager_CS.model$Custom_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Custom_AddressRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecordList = (function (_super) {
__extends(Custom_AddressRecordList, _super);
function Custom_AddressRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecordList.itemType = UBT_AppManager_CSModel.Custom_AddressRecord;
return Custom_AddressRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Custom_AddressRecordList = Custom_AddressRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Directory_UserCurrent_VisibilityRecord = Directory_UserCurrent_VisibilityRecord;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_UserCurrent_VisibilityRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecordList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecordList, _super);
function Directory_UserCurrent_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecordList.itemType = UBT_AppManager_CSModel.Directory_UserCurrent_VisibilityRecord;
return Directory_UserCurrent_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_VisibilityRecordList = Directory_UserCurrent_VisibilityRecordList;

});
define("UBT_AppManager_CS.model$DetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$DetailItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var DetailItemList = (function (_super) {
__extends(DetailItemList, _super);
function DetailItemList(defaults) {
_super.apply(this, arguments);
}
DetailItemList.itemType = FirebaseCloudMessageSenderModel.DetailItemRec;
return DetailItemList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.DetailItemList = DetailItemList;

});
define("UBT_AppManager_CS.model$User_ToUpdateInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_ToUpdateInfoRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_ToUpdateInfoRecord = (function (_super) {
__extends(User_ToUpdateInfoRecord, _super);
function User_ToUpdateInfoRecord(defaults) {
_super.apply(this, arguments);
}
User_ToUpdateInfoRecord.attributesToDeclare = function () {
return [
this.attr("User_ToUpdateInfo", "user_ToUpdateInfoAttr", "User_ToUpdateInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_ToUpdateInfoRec());
}, true, UBT_AppManager_CSModel.User_ToUpdateInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
User_ToUpdateInfoRecord.fromStructure = function (str) {
return new User_ToUpdateInfoRecord(new User_ToUpdateInfoRecord.RecordClass({
user_ToUpdateInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
User_ToUpdateInfoRecord._isAnonymousRecord = true;
User_ToUpdateInfoRecord.UniqueId = "e8c22eba-287f-8ad4-c6bd-cab55c840c9b";
User_ToUpdateInfoRecord.init();
return User_ToUpdateInfoRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_ToUpdateInfoRecord = User_ToUpdateInfoRecord;

});
define("UBT_AppManager_CS.model$User_ToUpdateInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_ToUpdateInfoRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_ToUpdateInfoRecordList = (function (_super) {
__extends(User_ToUpdateInfoRecordList, _super);
function User_ToUpdateInfoRecordList(defaults) {
_super.apply(this, arguments);
}
User_ToUpdateInfoRecordList.itemType = UBT_AppManager_CSModel.User_ToUpdateInfoRecord;
return User_ToUpdateInfoRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_ToUpdateInfoRecordList = User_ToUpdateInfoRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserAppExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserAppExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserAppExtendedRecord = (function (_super) {
__extends(AppManager_UserAppExtendedRecord, _super);
function AppManager_UserAppExtendedRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserAppExtendedRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserAppExtended", "appManager_UserAppExtendedAttr", "AppManager_UserAppExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserAppExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserAppExtendedRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserAppExtendedRecord.fromStructure = function (str) {
return new AppManager_UserAppExtendedRecord(new AppManager_UserAppExtendedRecord.RecordClass({
appManager_UserAppExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_UserAppExtendedRecord._isAnonymousRecord = true;
AppManager_UserAppExtendedRecord.UniqueId = "3f4c547f-f07a-918e-e34e-17dc45c3bd3f";
AppManager_UserAppExtendedRecord.init();
return AppManager_UserAppExtendedRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserAppExtendedRecord = AppManager_UserAppExtendedRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserAppExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserAppExtendedRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserAppExtendedRecordList = (function (_super) {
__extends(AppManager_UserAppExtendedRecordList, _super);
function AppManager_UserAppExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserAppExtendedRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserAppExtendedRecord;
return AppManager_UserAppExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserAppExtendedRecordList = AppManager_UserAppExtendedRecordList;

});
define("UBT_AppManager_CS.model$IntegerLiteralList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model", "UBT_AppManager_CS.model", "Extension.Sanitization.model$IntegerLiteralRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$Sanitization"], function (exports, OutSystems, Extension_SanitizationModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var IntegerLiteralList = (function (_super) {
__extends(IntegerLiteralList, _super);
function IntegerLiteralList(defaults) {
_super.apply(this, arguments);
}
IntegerLiteralList.itemType = Extension_SanitizationModel.IntegerLiteralRec;
return IntegerLiteralList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.IntegerLiteralList = IntegerLiteralList;

});
define("UBT_AppManager_CS.model$DetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$DetailItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var DetailItemRecord = (function (_super) {
__extends(DetailItemRecord, _super);
function DetailItemRecord(defaults) {
_super.apply(this, arguments);
}
DetailItemRecord.attributesToDeclare = function () {
return [
this.attr("DetailItem", "detailItemAttr", "DetailItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessageSenderModel.DetailItemRec());
}, true, FirebaseCloudMessageSenderModel.DetailItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailItemRecord.fromStructure = function (str) {
return new DetailItemRecord(new DetailItemRecord.RecordClass({
detailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailItemRecord._isAnonymousRecord = true;
DetailItemRecord.UniqueId = "9754d031-a450-a4d0-0d96-3db45e58fe07";
DetailItemRecord.init();
return DetailItemRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.DetailItemRecord = DetailItemRecord;

});
define("UBT_AppManager_CS.model$DetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$DetailItemRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var DetailItemRecordList = (function (_super) {
__extends(DetailItemRecordList, _super);
function DetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DetailItemRecordList.itemType = UBT_AppManager_CSModel.DetailItemRecord;
return DetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.DetailItemRecordList = DetailItemRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientCacheRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheRecord = (function (_super) {
__extends(AppManager_ConfigClientCacheRecord, _super);
function AppManager_ConfigClientCacheRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_ConfigClientCache", "appManager_ConfigClientCacheAttr", "AppManager_ConfigClientCache", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigClientCacheRecord.fromStructure = function (str) {
return new AppManager_ConfigClientCacheRecord(new AppManager_ConfigClientCacheRecord.RecordClass({
appManager_ConfigClientCacheAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ConfigClientCacheRecord._isAnonymousRecord = true;
AppManager_ConfigClientCacheRecord.UniqueId = "2bdc8a79-52bb-5aaa-40a9-71d785a17ccb";
AppManager_ConfigClientCacheRecord.init();
return AppManager_ConfigClientCacheRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ConfigClientCacheRecord = AppManager_ConfigClientCacheRecord;

});
define("UBT_AppManager_CS.model$AppManager_Applications_ExpectedPermissionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Applications_ExpectedPermissionsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedPermissionsRecord = (function (_super) {
__extends(AppManager_Applications_ExpectedPermissionsRecord, _super);
function AppManager_Applications_ExpectedPermissionsRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedPermissionsRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Applications_ExpectedPermissions", "appManager_Applications_ExpectedPermissionsAttr", "AppManager_Applications_ExpectedPermissions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Applications_ExpectedPermissionsRec());
}, true, UBT_AppManager_DBModel.AppManager_Applications_ExpectedPermissionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Applications_ExpectedPermissionsRecord.fromStructure = function (str) {
return new AppManager_Applications_ExpectedPermissionsRecord(new AppManager_Applications_ExpectedPermissionsRecord.RecordClass({
appManager_Applications_ExpectedPermissionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_Applications_ExpectedPermissionsRecord._isAnonymousRecord = true;
AppManager_Applications_ExpectedPermissionsRecord.UniqueId = "2c5c709e-61ed-216e-9022-3227ab090590";
AppManager_Applications_ExpectedPermissionsRecord.init();
return AppManager_Applications_ExpectedPermissionsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Applications_ExpectedPermissionsRecord = AppManager_Applications_ExpectedPermissionsRecord;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_GeographyList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyList = (function (_super) {
__extends(Directory_UserCurrent_GeographyList, _super);
function Directory_UserCurrent_GeographyList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec;
return Directory_UserCurrent_GeographyList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_GeographyList = Directory_UserCurrent_GeographyList;

});
define("UBT_AppManager_CS.model$JWKList", ["exports", "OutSystems/ClientRuntime/Main", "JWT.model", "UBT_AppManager_CS.model", "JWT.model$JWKRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT"], function (exports, OutSystems, JWTModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWKList = (function (_super) {
__extends(JWKList, _super);
function JWKList(defaults) {
_super.apply(this, arguments);
}
JWKList.itemType = JWTModel.JWKRec;
return JWKList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.JWKList = JWKList;

});
define("UBT_AppManager_CS.model$PermissionListRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PermissionListRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PermissionListRecord = (function (_super) {
__extends(PermissionListRecord, _super);
function PermissionListRecord(defaults) {
_super.apply(this, arguments);
}
PermissionListRecord.attributesToDeclare = function () {
return [
this.attr("PermissionList", "permissionListAttr", "PermissionList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.PermissionListRec());
}, true, UBT_AppManager_CSModel.PermissionListRec)
].concat(_super.attributesToDeclare.call(this));
};
PermissionListRecord.fromStructure = function (str) {
return new PermissionListRecord(new PermissionListRecord.RecordClass({
permissionListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PermissionListRecord._isAnonymousRecord = true;
PermissionListRecord.UniqueId = "304118b3-0081-145d-2b8f-19893b827812";
PermissionListRecord.init();
return PermissionListRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PermissionListRecord = PermissionListRecord;

});
define("UBT_AppManager_CS.model$SystemTokenFieldsList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UBTAppManager_AtomicTokenStore.model", "UBT_AppManager_CS.model", "Extension.UBTAppManager_AtomicTokenStore.model$SystemTokenFieldsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTAppManager_AtomicTokenStore"], function (exports, OutSystems, Extension_UBTAppManager_AtomicTokenStoreModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SystemTokenFieldsList = (function (_super) {
__extends(SystemTokenFieldsList, _super);
function SystemTokenFieldsList(defaults) {
_super.apply(this, arguments);
}
SystemTokenFieldsList.itemType = Extension_UBTAppManager_AtomicTokenStoreModel.SystemTokenFieldsRec;
return SystemTokenFieldsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SystemTokenFieldsList = SystemTokenFieldsList;

});
define("UBT_AppManager_CS.model$SystemTokenList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$SystemTokenRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SystemTokenList = (function (_super) {
__extends(SystemTokenList, _super);
function SystemTokenList(defaults) {
_super.apply(this, arguments);
}
SystemTokenList.itemType = UBT_AppManager_DBModel.SystemTokenRec;
return SystemTokenList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SystemTokenList = SystemTokenList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberList = (function (_super) {
__extends(Directory_UserCurrent_MemberList, _super);
function Directory_UserCurrent_MemberList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec;
return Directory_UserCurrent_MemberList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_MemberList = Directory_UserCurrent_MemberList;

});
define("UBT_AppManager_CS.model$PostROPCTokenResponse_B2C2Record", ["exports", "OutSystems/ClientRuntime/Main", "AzureB2C_IS.model", "UBT_AppManager_CS.model", "AzureB2C_IS.model$PostROPCTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$AzureB2C_IS"], function (exports, OutSystems, AzureB2C_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostROPCTokenResponse_B2C2Record = (function (_super) {
__extends(PostROPCTokenResponse_B2C2Record, _super);
function PostROPCTokenResponse_B2C2Record(defaults) {
_super.apply(this, arguments);
}
PostROPCTokenResponse_B2C2Record.attributesToDeclare = function () {
return [
this.attr("PostROPCTokenResponse_B2C", "postROPCTokenResponse_B2CAttr", "PostROPCTokenResponse_B2C2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new AzureB2C_ISModel.PostROPCTokenResponse_B2CRec());
}, true, AzureB2C_ISModel.PostROPCTokenResponse_B2CRec)
].concat(_super.attributesToDeclare.call(this));
};
PostROPCTokenResponse_B2C2Record.fromStructure = function (str) {
return new PostROPCTokenResponse_B2C2Record(new PostROPCTokenResponse_B2C2Record.RecordClass({
postROPCTokenResponse_B2CAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostROPCTokenResponse_B2C2Record._isAnonymousRecord = true;
PostROPCTokenResponse_B2C2Record.UniqueId = "455ed0c4-d79e-4499-775f-7f70d53a63bb";
PostROPCTokenResponse_B2C2Record.init();
return PostROPCTokenResponse_B2C2Record;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PostROPCTokenResponse_B2C2Record = PostROPCTokenResponse_B2C2Record;

});
define("UBT_AppManager_CS.model$PostROPCTokenResponse_B2C2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PostROPCTokenResponse_B2C2Record"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostROPCTokenResponse_B2C2RecordList = (function (_super) {
__extends(PostROPCTokenResponse_B2C2RecordList, _super);
function PostROPCTokenResponse_B2C2RecordList(defaults) {
_super.apply(this, arguments);
}
PostROPCTokenResponse_B2C2RecordList.itemType = UBT_AppManager_CSModel.PostROPCTokenResponse_B2C2Record;
return PostROPCTokenResponse_B2C2RecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostROPCTokenResponse_B2C2RecordList = PostROPCTokenResponse_B2C2RecordList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientRecord = (function (_super) {
__extends(AppManager_ConfigClientRecord, _super);
function AppManager_ConfigClientRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_ConfigClient", "appManager_ConfigClientAttr", "AppManager_ConfigClient", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigClientRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigClientRecord.fromStructure = function (str) {
return new AppManager_ConfigClientRecord(new AppManager_ConfigClientRecord.RecordClass({
appManager_ConfigClientAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ConfigClientRecord._isAnonymousRecord = true;
AppManager_ConfigClientRecord.UniqueId = "39b57c01-5c22-cd1f-f995-b55082c7573a";
AppManager_ConfigClientRecord.init();
return AppManager_ConfigClientRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ConfigClientRecord = AppManager_ConfigClientRecord;

});
define("UBT_AppManager_CS.model$UBT_MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBT_AppManager_CS.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.UBT_MessageTypeRecord = UBT_MessageTypeRecord;

});
define("UBT_AppManager_CS.model$AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "ServiceCenter.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Application_EspaceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_DB.model$AppManager_Firebase_ConfigRec", "UBT_AppManager_DB.model$AppManager_AzureB2C_ConfigRec", "UBT_AppManager_DB.model$AppManager_ApplicationRec", "ServiceCenter.model$EspaceRec", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, UBT_AppManager_DBModel, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord = (function (_super) {
__extends(AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord, _super);
function AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Application_Espace", "appManager_Application_EspaceAttr", "AppManager_Application_Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Application_EspaceRec());
}, true, UBT_AppManager_DBModel.AppManager_Application_EspaceRec), 
this.attr("AppManager_Firebase_Config", "appManager_Firebase_ConfigAttr", "AppManager_Firebase_Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec), 
this.attr("AppManager_AzureB2C_Config", "appManager_AzureB2C_ConfigAttr", "AppManager_AzureB2C_Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_AzureB2C_ConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_AzureB2C_ConfigRec), 
this.attr("AppManager_Application", "appManager_ApplicationAttr", "AppManager_Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_ApplicationRec());
}, true, UBT_AppManager_DBModel.AppManager_ApplicationRec), 
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.EspaceRec());
}, true, ServiceCenterModel.EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord._isAnonymousRecord = true;
AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord.UniqueId = "5df4adaf-fe95-a07d-f951-47d8da2984bc";
AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord.init();
return AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord = AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord;

});
define("UBT_AppManager_CS.model$AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList = (function (_super) {
__extends(AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList, _super);
function AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList.itemType = UBT_AppManager_CSModel.AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecord;
return AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList = AppManager_Application_EspaceAppManager_Firebase_ConfigAppManager_AzureB2C_ConfigAppManager_ApplicationEspaceRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserTokenSyncConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserTokenSyncConfigRecord = (function (_super) {
__extends(AppManager_UserTokenSyncConfigRecord, _super);
function AppManager_UserTokenSyncConfigRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserTokenSyncConfigRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserTokenSyncConfig", "appManager_UserTokenSyncConfigAttr", "AppManager_UserTokenSyncConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserTokenSyncConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_UserTokenSyncConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserTokenSyncConfigRecord.fromStructure = function (str) {
return new AppManager_UserTokenSyncConfigRecord(new AppManager_UserTokenSyncConfigRecord.RecordClass({
appManager_UserTokenSyncConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_UserTokenSyncConfigRecord._isAnonymousRecord = true;
AppManager_UserTokenSyncConfigRecord.UniqueId = "4117fb0d-9cbe-62af-078f-6414fedc0b2e";
AppManager_UserTokenSyncConfigRecord.init();
return AppManager_UserTokenSyncConfigRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigRecord = AppManager_UserTokenSyncConfigRecord;

});
define("UBT_AppManager_CS.model$UserTokenRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$UserTokenRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserTokenRecord = (function (_super) {
__extends(UserTokenRecord, _super);
function UserTokenRecord(defaults) {
_super.apply(this, arguments);
}
UserTokenRecord.attributesToDeclare = function () {
return [
this.attr("UserToken", "userTokenAttr", "UserToken", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.UserTokenRec());
}, true, UBT_AppManager_DBModel.UserTokenRec)
].concat(_super.attributesToDeclare.call(this));
};
UserTokenRecord.fromStructure = function (str) {
return new UserTokenRecord(new UserTokenRecord.RecordClass({
userTokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserTokenRecord._isAnonymousRecord = true;
UserTokenRecord.UniqueId = "836af5f5-9e33-762f-48b0-cf4eaf7e3b6b";
UserTokenRecord.init();
return UserTokenRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.UserTokenRecord = UserTokenRecord;

});
define("UBT_AppManager_CS.model$UserTokenRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$UserTokenRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserTokenRecordList = (function (_super) {
__extends(UserTokenRecordList, _super);
function UserTokenRecordList(defaults) {
_super.apply(this, arguments);
}
UserTokenRecordList.itemType = UBT_AppManager_CSModel.UserTokenRecord;
return UserTokenRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UserTokenRecordList = UserTokenRecordList;

});
define("UBT_AppManager_CS.model$Espace_VersionList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$Espace_VersionRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Espace_VersionList = (function (_super) {
__extends(Espace_VersionList, _super);
function Espace_VersionList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionList.itemType = ServiceCenterModel.Espace_VersionRec;
return Espace_VersionList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Espace_VersionList = Espace_VersionList;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model$TokenRec", "UBT_AppManager_DB.model$AppManager_ApplicationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_CustomParametersRec = (function (_super) {
__extends(AppManager_PostLogin_CustomParametersRec, _super);
function AppManager_PostLogin_CustomParametersRec(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_CustomParametersRec.attributesToDeclare = function () {
return [
this.attr("AuthToken", "authTokenAttr", "AuthToken", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.TokenRec());
}, true, UBT_AppManager_CSModel.TokenRec), 
this.attr("AppManager_Application", "appManager_ApplicationAttr", "AppManager_Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_ApplicationRec());
}, true, UBT_AppManager_DBModel.AppManager_ApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_PostLogin_CustomParametersRec.init();
return AppManager_PostLogin_CustomParametersRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRec = AppManager_PostLogin_CustomParametersRec;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_CustomParametersRecord = (function (_super) {
__extends(AppManager_PostLogin_CustomParametersRecord, _super);
function AppManager_PostLogin_CustomParametersRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_CustomParametersRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_PostLogin_CustomParameters", "appManager_PostLogin_CustomParametersAttr", "AppManager_PostLogin_CustomParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRec());
}, true, UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_PostLogin_CustomParametersRecord.fromStructure = function (str) {
return new AppManager_PostLogin_CustomParametersRecord(new AppManager_PostLogin_CustomParametersRecord.RecordClass({
appManager_PostLogin_CustomParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_PostLogin_CustomParametersRecord._isAnonymousRecord = true;
AppManager_PostLogin_CustomParametersRecord.UniqueId = "75bbe58f-1f07-3cfa-a34f-1ea3f39db334";
AppManager_PostLogin_CustomParametersRecord.init();
return AppManager_PostLogin_CustomParametersRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRecord = AppManager_PostLogin_CustomParametersRecord;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_CustomParametersRecordList = (function (_super) {
__extends(AppManager_PostLogin_CustomParametersRecordList, _super);
function AppManager_PostLogin_CustomParametersRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_CustomParametersRecordList.itemType = UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRecord;
return AppManager_PostLogin_CustomParametersRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRecordList = AppManager_PostLogin_CustomParametersRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigSecretRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigSecretRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigSecretRecord = (function (_super) {
__extends(AppManager_ConfigSecretRecord, _super);
function AppManager_ConfigSecretRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigSecretRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_ConfigSecret", "appManager_ConfigSecretAttr", "AppManager_ConfigSecret", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigSecretRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigSecretRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigSecretRecord.fromStructure = function (str) {
return new AppManager_ConfigSecretRecord(new AppManager_ConfigSecretRecord.RecordClass({
appManager_ConfigSecretAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ConfigSecretRecord._isAnonymousRecord = true;
AppManager_ConfigSecretRecord.UniqueId = "5d6ee665-785b-6d92-b3b4-a0954d44bea7";
AppManager_ConfigSecretRecord.init();
return AppManager_ConfigSecretRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ConfigSecretRecord = AppManager_ConfigSecretRecord;

});
define("UBT_AppManager_CS.model$AppManager_ConfigSecretRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigSecretRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigSecretRecordList = (function (_super) {
__extends(AppManager_ConfigSecretRecordList, _super);
function AppManager_ConfigSecretRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigSecretRecordList.itemType = UBT_AppManager_CSModel.AppManager_ConfigSecretRecord;
return AppManager_ConfigSecretRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ConfigSecretRecordList = AppManager_ConfigSecretRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentList = (function (_super) {
__extends(Directory_UserCurrentList, _super);
function Directory_UserCurrentList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrentRec;
return Directory_UserCurrentList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrentList = Directory_UserCurrentList;

});
define("UBT_AppManager_CS.model$AppManager_Applications_ExpectedPermissionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Applications_ExpectedPermissionsRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedPermissionsRecordList = (function (_super) {
__extends(AppManager_Applications_ExpectedPermissionsRecordList, _super);
function AppManager_Applications_ExpectedPermissionsRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedPermissionsRecordList.itemType = UBT_AppManager_CSModel.AppManager_Applications_ExpectedPermissionsRecord;
return AppManager_Applications_ExpectedPermissionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Applications_ExpectedPermissionsRecordList = AppManager_Applications_ExpectedPermissionsRecordList;

});
define("UBT_AppManager_CS.model$UserTokenFieldsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UBTAppManager_AtomicTokenStore.model", "UBT_AppManager_CS.model", "Extension.UBTAppManager_AtomicTokenStore.model$UserTokenFieldsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTAppManager_AtomicTokenStore"], function (exports, OutSystems, Extension_UBTAppManager_AtomicTokenStoreModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserTokenFieldsRecord = (function (_super) {
__extends(UserTokenFieldsRecord, _super);
function UserTokenFieldsRecord(defaults) {
_super.apply(this, arguments);
}
UserTokenFieldsRecord.attributesToDeclare = function () {
return [
this.attr("UserTokenFields", "userTokenFieldsAttr", "UserTokenFields", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_UBTAppManager_AtomicTokenStoreModel.UserTokenFieldsRec());
}, true, Extension_UBTAppManager_AtomicTokenStoreModel.UserTokenFieldsRec)
].concat(_super.attributesToDeclare.call(this));
};
UserTokenFieldsRecord.fromStructure = function (str) {
return new UserTokenFieldsRecord(new UserTokenFieldsRecord.RecordClass({
userTokenFieldsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserTokenFieldsRecord._isAnonymousRecord = true;
UserTokenFieldsRecord.UniqueId = "4c01599c-6cab-6236-a2cb-f0916897480a";
UserTokenFieldsRecord.init();
return UserTokenFieldsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.UserTokenFieldsRecord = UserTokenFieldsRecord;

});
define("UBT_AppManager_CS.model$UserTokenFieldsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$UserTokenFieldsRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserTokenFieldsRecordList = (function (_super) {
__extends(UserTokenFieldsRecordList, _super);
function UserTokenFieldsRecordList(defaults) {
_super.apply(this, arguments);
}
UserTokenFieldsRecordList.itemType = UBT_AppManager_CSModel.UserTokenFieldsRecord;
return UserTokenFieldsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UserTokenFieldsRecordList = UserTokenFieldsRecordList;

});
define("UBT_AppManager_CS.model$FeatureToggleValuesList", ["exports", "OutSystems/ClientRuntime/Main", "FeatureToggle_Lib.model", "UBT_AppManager_CS.model", "FeatureToggle_Lib.model$FeatureToggleValuesRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FeatureToggle_Lib"], function (exports, OutSystems, FeatureToggle_LibModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FeatureToggleValuesList = (function (_super) {
__extends(FeatureToggleValuesList, _super);
function FeatureToggleValuesList(defaults) {
_super.apply(this, arguments);
}
FeatureToggleValuesList.itemType = FeatureToggle_LibModel.FeatureToggleValuesRec;
return FeatureToggleValuesList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FeatureToggleValuesList = FeatureToggleValuesList;

});
define("UBT_AppManager_CS.model$User_SyncInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoRec = (function (_super) {
__extends(User_SyncInfoRec, _super);
function User_SyncInfoRec(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExternalId", "externalIdAttr", "ExternalId", false, false, OS.DataTypes.DataTypes.Text, function () {
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
this.attr("isCommunityMember", "isCommunityMemberAttr", "isCommunityMember", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ContactBaseId", "contactBaseIdAttr", "ContactBaseId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_SyncInfoRec.init();
return User_SyncInfoRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_SyncInfoRec = User_SyncInfoRec;

});
define("UBT_AppManager_CS.model$User_SyncInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfoRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoRecord = (function (_super) {
__extends(User_SyncInfoRecord, _super);
function User_SyncInfoRecord(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoRecord.attributesToDeclare = function () {
return [
this.attr("User_SyncInfo", "user_SyncInfoAttr", "User_SyncInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfoRec());
}, true, UBT_AppManager_CSModel.User_SyncInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
User_SyncInfoRecord.fromStructure = function (str) {
return new User_SyncInfoRecord(new User_SyncInfoRecord.RecordClass({
user_SyncInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
User_SyncInfoRecord._isAnonymousRecord = true;
User_SyncInfoRecord.UniqueId = "c3145e50-7656-eb9a-c8a9-a77037c7cd64";
User_SyncInfoRecord.init();
return User_SyncInfoRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_SyncInfoRecord = User_SyncInfoRecord;

});
define("UBT_AppManager_CS.model$User_SyncInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfoRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoRecordList = (function (_super) {
__extends(User_SyncInfoRecordList, _super);
function User_SyncInfoRecordList(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoRecordList.itemType = UBT_AppManager_CSModel.User_SyncInfoRecord;
return User_SyncInfoRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_SyncInfoRecordList = User_SyncInfoRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ClientExceptionMessageRecord = (function (_super) {
__extends(AppManager_ClientExceptionMessageRecord, _super);
function AppManager_ClientExceptionMessageRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ClientExceptionMessageRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_ClientExceptionMessage", "appManager_ClientExceptionMessageAttr", "AppManager_ClientExceptionMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec());
}, true, UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ClientExceptionMessageRecord.fromStructure = function (str) {
return new AppManager_ClientExceptionMessageRecord(new AppManager_ClientExceptionMessageRecord.RecordClass({
appManager_ClientExceptionMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ClientExceptionMessageRecord._isAnonymousRecord = true;
AppManager_ClientExceptionMessageRecord.UniqueId = "4e441ecb-c848-28cd-047c-861c32db9f61";
AppManager_ClientExceptionMessageRecord.init();
return AppManager_ClientExceptionMessageRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRecord = AppManager_ClientExceptionMessageRecord;

});
define("UBT_AppManager_CS.model$Firebase_Configuration_FileRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Firebase_Configuration_FileRec = (function (_super) {
__extends(Firebase_Configuration_FileRec, _super);
function Firebase_Configuration_FileRec(defaults) {
_super.apply(this, arguments);
}
Firebase_Configuration_FileRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Project_id", "project_idAttr", "project_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Private_key_id", "private_key_idAttr", "private_key_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Private_key", "private_keyAttr", "private_key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_email", "client_emailAttr", "client_email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_id", "client_idAttr", "client_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Auth_uri", "auth_uriAttr", "auth_uri", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Token_uri", "token_uriAttr", "token_uri", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Auth_provider_x509_cert_url", "auth_provider_x509_cert_urlAttr", "auth_provider_x509_cert_url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_x509_cert_url", "client_x509_cert_urlAttr", "client_x509_cert_url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Universe_domain", "universe_domainAttr", "universe_domain", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Firebase_Configuration_FileRec.init();
return Firebase_Configuration_FileRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Firebase_Configuration_FileRec = Firebase_Configuration_FileRec;

});
define("UBT_AppManager_CS.model$Firebase_Configuration_FileRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Firebase_Configuration_FileRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Firebase_Configuration_FileRecord = (function (_super) {
__extends(Firebase_Configuration_FileRecord, _super);
function Firebase_Configuration_FileRecord(defaults) {
_super.apply(this, arguments);
}
Firebase_Configuration_FileRecord.attributesToDeclare = function () {
return [
this.attr("Firebase_Configuration_File", "firebase_Configuration_FileAttr", "Firebase_Configuration_File", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.Firebase_Configuration_FileRec());
}, true, UBT_AppManager_CSModel.Firebase_Configuration_FileRec)
].concat(_super.attributesToDeclare.call(this));
};
Firebase_Configuration_FileRecord.fromStructure = function (str) {
return new Firebase_Configuration_FileRecord(new Firebase_Configuration_FileRecord.RecordClass({
firebase_Configuration_FileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Firebase_Configuration_FileRecord._isAnonymousRecord = true;
Firebase_Configuration_FileRecord.UniqueId = "4f07c9f4-d81d-8ed8-d05a-364f1bc17ef0";
Firebase_Configuration_FileRecord.init();
return Firebase_Configuration_FileRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Firebase_Configuration_FileRecord = Firebase_Configuration_FileRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoClientRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoClientRecord = (function (_super) {
__extends(AppManager_UserInfoClientRecord, _super);
function AppManager_UserInfoClientRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoClientRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserInfoClient", "appManager_UserInfoClientAttr", "AppManager_UserInfoClient", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_UserInfoClientRec());
}, true, UBT_AppManager_CSModel.AppManager_UserInfoClientRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserInfoClientRecord.fromStructure = function (str) {
return new AppManager_UserInfoClientRecord(new AppManager_UserInfoClientRecord.RecordClass({
appManager_UserInfoClientAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_UserInfoClientRecord._isAnonymousRecord = true;
AppManager_UserInfoClientRecord.UniqueId = "501536c8-c756-d806-5637-928f4a5a9a93";
AppManager_UserInfoClientRecord.init();
return AppManager_UserInfoClientRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserInfoClientRecord = AppManager_UserInfoClientRecord;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_CustomParametersRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_CustomParametersList = (function (_super) {
__extends(AppManager_PostLogin_CustomParametersList, _super);
function AppManager_PostLogin_CustomParametersList(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_CustomParametersList.itemType = UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersRec;
return AppManager_PostLogin_CustomParametersList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_PostLogin_CustomParametersList = AppManager_PostLogin_CustomParametersList;

});
define("UBT_AppManager_CS.model$Espace_VersionEspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$Espace_VersionRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter", "ServiceCenter.model$EspaceRec"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Espace_VersionEspaceRecord = (function (_super) {
__extends(Espace_VersionEspaceRecord, _super);
function Espace_VersionEspaceRecord(defaults) {
_super.apply(this, arguments);
}
Espace_VersionEspaceRecord.attributesToDeclare = function () {
return [
this.attr("Espace_Version", "espace_VersionAttr", "Espace_Version", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.Espace_VersionRec());
}, true, ServiceCenterModel.Espace_VersionRec), 
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.EspaceRec());
}, true, ServiceCenterModel.EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionEspaceRecord._isAnonymousRecord = true;
Espace_VersionEspaceRecord.UniqueId = "5467a00b-059c-fbf4-68e1-bd8959c2471e";
Espace_VersionEspaceRecord.init();
return Espace_VersionEspaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Espace_VersionEspaceRecord = Espace_VersionEspaceRecord;

});
define("UBT_AppManager_CS.model$AppManager_ApplicationList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_ApplicationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ApplicationList = (function (_super) {
__extends(AppManager_ApplicationList, _super);
function AppManager_ApplicationList(defaults) {
_super.apply(this, arguments);
}
AppManager_ApplicationList.itemType = UBT_AppManager_DBModel.AppManager_ApplicationRec;
return AppManager_ApplicationList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ApplicationList = AppManager_ApplicationList;

});
define("UBT_AppManager_CS.model$SendFCMNotification_V1ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$SendFCMNotification_V1ResponseRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SendFCMNotification_V1ResponseRecord = (function (_super) {
__extends(SendFCMNotification_V1ResponseRecord, _super);
function SendFCMNotification_V1ResponseRecord(defaults) {
_super.apply(this, arguments);
}
SendFCMNotification_V1ResponseRecord.attributesToDeclare = function () {
return [
this.attr("SendFCMNotification_V1Response", "sendFCMNotification_V1ResponseAttr", "SendFCMNotification_V1Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessageSenderModel.SendFCMNotification_V1ResponseRec());
}, true, FirebaseCloudMessageSenderModel.SendFCMNotification_V1ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
SendFCMNotification_V1ResponseRecord.fromStructure = function (str) {
return new SendFCMNotification_V1ResponseRecord(new SendFCMNotification_V1ResponseRecord.RecordClass({
sendFCMNotification_V1ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SendFCMNotification_V1ResponseRecord._isAnonymousRecord = true;
SendFCMNotification_V1ResponseRecord.UniqueId = "5635698f-bfda-70a4-59f4-6f35899e00f8";
SendFCMNotification_V1ResponseRecord.init();
return SendFCMNotification_V1ResponseRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.SendFCMNotification_V1ResponseRecord = SendFCMNotification_V1ResponseRecord;

});
define("UBT_AppManager_CS.model$PermissionListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PermissionListRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PermissionListRecordList = (function (_super) {
__extends(PermissionListRecordList, _super);
function PermissionListRecordList(defaults) {
_super.apply(this, arguments);
}
PermissionListRecordList.itemType = UBT_AppManager_CSModel.PermissionListRecord;
return PermissionListRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PermissionListRecordList = PermissionListRecordList;

});
define("UBT_AppManager_CS.model$AppManager_Applications_ExpectedClaimRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Applications_ExpectedClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedClaimRecord = (function (_super) {
__extends(AppManager_Applications_ExpectedClaimRecord, _super);
function AppManager_Applications_ExpectedClaimRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedClaimRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Applications_ExpectedClaim", "appManager_Applications_ExpectedClaimAttr", "AppManager_Applications_ExpectedClaim", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_Applications_ExpectedClaimRec());
}, true, UBT_AppManager_DBModel.AppManager_Applications_ExpectedClaimRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Applications_ExpectedClaimRecord.fromStructure = function (str) {
return new AppManager_Applications_ExpectedClaimRecord(new AppManager_Applications_ExpectedClaimRecord.RecordClass({
appManager_Applications_ExpectedClaimAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_Applications_ExpectedClaimRecord._isAnonymousRecord = true;
AppManager_Applications_ExpectedClaimRecord.UniqueId = "5a2ccb3a-3298-7669-9cc8-c724db49e561";
AppManager_Applications_ExpectedClaimRecord.init();
return AppManager_Applications_ExpectedClaimRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_Applications_ExpectedClaimRecord = AppManager_Applications_ExpectedClaimRecord;

});
define("UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ClientExceptionMessageRecordList = (function (_super) {
__extends(AppManager_ClientExceptionMessageRecordList, _super);
function AppManager_ClientExceptionMessageRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ClientExceptionMessageRecordList.itemType = UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRecord;
return AppManager_ClientExceptionMessageRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRecordList = AppManager_ClientExceptionMessageRecordList;

});
define("UBT_AppManager_CS.model$Directory_MemberDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_MemberDetailsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_MemberDetailsRecord = (function (_super) {
__extends(Directory_MemberDetailsRecord, _super);
function Directory_MemberDetailsRecord(defaults) {
_super.apply(this, arguments);
}
Directory_MemberDetailsRecord.attributesToDeclare = function () {
return [
this.attr("Directory_MemberDetails", "directory_MemberDetailsAttr", "Directory_MemberDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_MemberDetailsRec());
}, true, APIDomain_Directory_ISModel.Directory_MemberDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_MemberDetailsRecord.fromStructure = function (str) {
return new Directory_MemberDetailsRecord(new Directory_MemberDetailsRecord.RecordClass({
directory_MemberDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_MemberDetailsRecord._isAnonymousRecord = true;
Directory_MemberDetailsRecord.UniqueId = "e6dd06d4-6502-0193-0489-7fac9ad3ca64";
Directory_MemberDetailsRecord.init();
return Directory_MemberDetailsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Directory_MemberDetailsRecord = Directory_MemberDetailsRecord;

});
define("UBT_AppManager_CS.model$Directory_MemberDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_MemberDetailsRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_MemberDetailsRecordList = (function (_super) {
__extends(Directory_MemberDetailsRecordList, _super);
function Directory_MemberDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_MemberDetailsRecordList.itemType = UBT_AppManager_CSModel.Directory_MemberDetailsRecord;
return Directory_MemberDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_MemberDetailsRecordList = Directory_MemberDetailsRecordList;

});
define("UBT_AppManager_CS.model$AppManager_Applications_ExpectedClaimRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Applications_ExpectedClaimRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedClaimRecordList = (function (_super) {
__extends(AppManager_Applications_ExpectedClaimRecordList, _super);
function AppManager_Applications_ExpectedClaimRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedClaimRecordList.itemType = UBT_AppManager_CSModel.AppManager_Applications_ExpectedClaimRecord;
return AppManager_Applications_ExpectedClaimRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Applications_ExpectedClaimRecordList = AppManager_Applications_ExpectedClaimRecordList;

});
define("UBT_AppManager_CS.model$SystemTokenRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$SystemTokenRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SystemTokenRecord = (function (_super) {
__extends(SystemTokenRecord, _super);
function SystemTokenRecord(defaults) {
_super.apply(this, arguments);
}
SystemTokenRecord.attributesToDeclare = function () {
return [
this.attr("SystemToken", "systemTokenAttr", "SystemToken", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.SystemTokenRec());
}, true, UBT_AppManager_DBModel.SystemTokenRec)
].concat(_super.attributesToDeclare.call(this));
};
SystemTokenRecord.fromStructure = function (str) {
return new SystemTokenRecord(new SystemTokenRecord.RecordClass({
systemTokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SystemTokenRecord._isAnonymousRecord = true;
SystemTokenRecord.UniqueId = "61ae1bbb-d03d-c4f3-c6ee-b000574c4fd8";
SystemTokenRecord.init();
return SystemTokenRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.SystemTokenRecord = SystemTokenRecord;

});
define("UBT_AppManager_CS.model$Directory_MemberProfileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_MemberProfileRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_MemberProfileRecordList = (function (_super) {
__extends(Directory_MemberProfileRecordList, _super);
function Directory_MemberProfileRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_MemberProfileRecordList.itemType = UBT_AppManager_CSModel.Directory_MemberProfileRecord;
return Directory_MemberProfileRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_MemberProfileRecordList = Directory_MemberProfileRecordList;

});
define("UBT_AppManager_CS.model$Firebase_Configuration_FileList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Firebase_Configuration_FileRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Firebase_Configuration_FileList = (function (_super) {
__extends(Firebase_Configuration_FileList, _super);
function Firebase_Configuration_FileList(defaults) {
_super.apply(this, arguments);
}
Firebase_Configuration_FileList.itemType = UBT_AppManager_CSModel.Firebase_Configuration_FileRec;
return Firebase_Configuration_FileList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Firebase_Configuration_FileList = Firebase_Configuration_FileList;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_ConfigAppManager_ApplicationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_Firebase_ConfigAppManager_ApplicationRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_ConfigAppManager_ApplicationRecordList = (function (_super) {
__extends(AppManager_Firebase_ConfigAppManager_ApplicationRecordList, _super);
function AppManager_Firebase_ConfigAppManager_ApplicationRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_ConfigAppManager_ApplicationRecordList.itemType = UBT_AppManager_CSModel.AppManager_Firebase_ConfigAppManager_ApplicationRecord;
return AppManager_Firebase_ConfigAppManager_ApplicationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Firebase_ConfigAppManager_ApplicationRecordList = AppManager_Firebase_ConfigAppManager_ApplicationRecordList;

});
define("UBT_AppManager_CS.model$EspaceList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$EspaceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var EspaceList = (function (_super) {
__extends(EspaceList, _super);
function EspaceList(defaults) {
_super.apply(this, arguments);
}
EspaceList.itemType = ServiceCenterModel.EspaceRec;
return EspaceList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.EspaceList = EspaceList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_GeographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Directory_UserCurrent_GeographyRecord = Directory_UserCurrent_GeographyRecord;

});
define("UBT_AppManager_CS.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$TextRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.itemType = UBT_AppManager_CSModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TextRecordList = TextRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigAppManager_ApplicationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserTokenSyncConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_DB.model$AppManager_ApplicationRec"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserTokenSyncConfigAppManager_ApplicationRecord = (function (_super) {
__extends(AppManager_UserTokenSyncConfigAppManager_ApplicationRecord, _super);
function AppManager_UserTokenSyncConfigAppManager_ApplicationRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserTokenSyncConfigAppManager_ApplicationRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserTokenSyncConfig", "appManager_UserTokenSyncConfigAttr", "AppManager_UserTokenSyncConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserTokenSyncConfigRec());
}, true, UBT_AppManager_DBModel.AppManager_UserTokenSyncConfigRec), 
this.attr("AppManager_Application", "appManager_ApplicationAttr", "AppManager_Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_ApplicationRec());
}, true, UBT_AppManager_DBModel.AppManager_ApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserTokenSyncConfigAppManager_ApplicationRecord._isAnonymousRecord = true;
AppManager_UserTokenSyncConfigAppManager_ApplicationRecord.UniqueId = "67142103-a54c-ebd9-b4a4-7662ad65e72f";
AppManager_UserTokenSyncConfigAppManager_ApplicationRecord.init();
return AppManager_UserTokenSyncConfigAppManager_ApplicationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigAppManager_ApplicationRecord = AppManager_UserTokenSyncConfigAppManager_ApplicationRecord;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Directory_UserCurrent_MemberRecord = Directory_UserCurrent_MemberRecord;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_UserCurrent_MemberRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecordList = (function (_super) {
__extends(Directory_UserCurrent_MemberRecordList, _super);
function Directory_UserCurrent_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecordList.itemType = UBT_AppManager_CSModel.Directory_UserCurrent_MemberRecord;
return Directory_UserCurrent_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_MemberRecordList = Directory_UserCurrent_MemberRecordList;

});
define("UBT_AppManager_CS.model$Directory_PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Directory_PhotoRecord = Directory_PhotoRecord;

});
define("UBT_AppManager_CS.model$Directory_PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_PhotoRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecordList = (function (_super) {
__extends(Directory_PhotoRecordList, _super);
function Directory_PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecordList.itemType = UBT_AppManager_CSModel.Directory_PhotoRecord;
return Directory_PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_PhotoRecordList = Directory_PhotoRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserDeviceAppManager_UserAppExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserDeviceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "UBT_AppManager_DB.model$AppManager_UserAppExtendedRec"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserDeviceAppManager_UserAppExtendedRecord = (function (_super) {
__extends(AppManager_UserDeviceAppManager_UserAppExtendedRecord, _super);
function AppManager_UserDeviceAppManager_UserAppExtendedRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserDeviceAppManager_UserAppExtendedRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserDevice", "appManager_UserDeviceAttr", "AppManager_UserDevice", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserDeviceRec());
}, true, UBT_AppManager_DBModel.AppManager_UserDeviceRec), 
this.attr("AppManager_UserAppExtended", "appManager_UserAppExtendedAttr", "AppManager_UserAppExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserAppExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserAppExtendedRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserDeviceAppManager_UserAppExtendedRecord._isAnonymousRecord = true;
AppManager_UserDeviceAppManager_UserAppExtendedRecord.UniqueId = "6946d8e9-58d0-c1ec-14f6-8665380edb46";
AppManager_UserDeviceAppManager_UserAppExtendedRecord.init();
return AppManager_UserDeviceAppManager_UserAppExtendedRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserDeviceAppManager_UserAppExtendedRecord = AppManager_UserDeviceAppManager_UserAppExtendedRecord;

});
define("UBT_AppManager_CS.model$FeatureToggleValuesRecord", ["exports", "OutSystems/ClientRuntime/Main", "FeatureToggle_Lib.model", "UBT_AppManager_CS.model", "FeatureToggle_Lib.model$FeatureToggleValuesRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FeatureToggle_Lib"], function (exports, OutSystems, FeatureToggle_LibModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FeatureToggleValuesRecord = (function (_super) {
__extends(FeatureToggleValuesRecord, _super);
function FeatureToggleValuesRecord(defaults) {
_super.apply(this, arguments);
}
FeatureToggleValuesRecord.attributesToDeclare = function () {
return [
this.attr("FeatureToggleValues", "featureToggleValuesAttr", "FeatureToggleValues", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FeatureToggle_LibModel.FeatureToggleValuesRec());
}, true, FeatureToggle_LibModel.FeatureToggleValuesRec)
].concat(_super.attributesToDeclare.call(this));
};
FeatureToggleValuesRecord.fromStructure = function (str) {
return new FeatureToggleValuesRecord(new FeatureToggleValuesRecord.RecordClass({
featureToggleValuesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FeatureToggleValuesRecord._isAnonymousRecord = true;
FeatureToggleValuesRecord.UniqueId = "9f6b2b10-a8a4-7ebf-9d19-1732dc2a7857";
FeatureToggleValuesRecord.init();
return FeatureToggleValuesRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.FeatureToggleValuesRecord = FeatureToggleValuesRecord;

});
define("UBT_AppManager_CS.model$FeatureToggleValuesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FeatureToggleValuesRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FeatureToggleValuesRecordList = (function (_super) {
__extends(FeatureToggleValuesRecordList, _super);
function FeatureToggleValuesRecordList(defaults) {
_super.apply(this, arguments);
}
FeatureToggleValuesRecordList.itemType = UBT_AppManager_CSModel.FeatureToggleValuesRecord;
return FeatureToggleValuesRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FeatureToggleValuesRecordList = FeatureToggleValuesRecordList;

});
define("UBT_AppManager_CS.model$PushNotication_BulkRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PushNotication_BulkRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PushNotication_BulkRecord = (function (_super) {
__extends(PushNotication_BulkRecord, _super);
function PushNotication_BulkRecord(defaults) {
_super.apply(this, arguments);
}
PushNotication_BulkRecord.attributesToDeclare = function () {
return [
this.attr("PushNotication_Bulk", "pushNotication_BulkAttr", "PushNotication_Bulk", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.PushNotication_BulkRec());
}, true, UBT_AppManager_CSModel.PushNotication_BulkRec)
].concat(_super.attributesToDeclare.call(this));
};
PushNotication_BulkRecord.fromStructure = function (str) {
return new PushNotication_BulkRecord(new PushNotication_BulkRecord.RecordClass({
pushNotication_BulkAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PushNotication_BulkRecord._isAnonymousRecord = true;
PushNotication_BulkRecord.UniqueId = "f0b66e92-ff34-3010-aa31-7f8963eb080d";
PushNotication_BulkRecord.init();
return PushNotication_BulkRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PushNotication_BulkRecord = PushNotication_BulkRecord;

});
define("UBT_AppManager_CS.model$PushNotication_BulkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PushNotication_BulkRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PushNotication_BulkRecordList = (function (_super) {
__extends(PushNotication_BulkRecordList, _super);
function PushNotication_BulkRecordList(defaults) {
_super.apply(this, arguments);
}
PushNotication_BulkRecordList.itemType = UBT_AppManager_CSModel.PushNotication_BulkRecord;
return PushNotication_BulkRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PushNotication_BulkRecordList = PushNotication_BulkRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientList = (function (_super) {
__extends(AppManager_ConfigClientList, _super);
function AppManager_ConfigClientList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientRec;
return AppManager_ConfigClientList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ConfigClientList = AppManager_ConfigClientList;

});
define("UBT_AppManager_CS.model$ServiceActionInfoList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ServiceAction_Utils.model", "UBT_AppManager_CS.model", "Extension.ServiceAction_Utils.model$ServiceActionInfoRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceAction_Utils"], function (exports, OutSystems, Extension_ServiceAction_UtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceActionInfoList = (function (_super) {
__extends(ServiceActionInfoList, _super);
function ServiceActionInfoList(defaults) {
_super.apply(this, arguments);
}
ServiceActionInfoList.itemType = Extension_ServiceAction_UtilsModel.ServiceActionInfoRec;
return ServiceActionInfoList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ServiceActionInfoList = ServiceActionInfoList;

});
define("UBT_AppManager_CS.model$PermissionListList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PermissionListRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PermissionListList = (function (_super) {
__extends(PermissionListList, _super);
function PermissionListList(defaults) {
_super.apply(this, arguments);
}
PermissionListList.itemType = UBT_AppManager_CSModel.PermissionListRec;
return PermissionListList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PermissionListList = PermissionListList;

});
define("UBT_AppManager_CS.model$JWT_ClaimList", ["exports", "OutSystems/ClientRuntime/Main", "JWT.model", "UBT_AppManager_CS.model", "JWT.model$JWT_ClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT"], function (exports, OutSystems, JWTModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_ClaimList = (function (_super) {
__extends(JWT_ClaimList, _super);
function JWT_ClaimList(defaults) {
_super.apply(this, arguments);
}
JWT_ClaimList.itemType = JWTModel.JWT_ClaimRec;
return JWT_ClaimList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.JWT_ClaimList = JWT_ClaimList;

});
define("UBT_AppManager_CS.model$PostTokenResponse_B2C2List", ["exports", "OutSystems/ClientRuntime/Main", "AzureB2C_IS.model", "UBT_AppManager_CS.model", "AzureB2C_IS.model$PostTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$AzureB2C_IS"], function (exports, OutSystems, AzureB2C_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostTokenResponse_B2C2List = (function (_super) {
__extends(PostTokenResponse_B2C2List, _super);
function PostTokenResponse_B2C2List(defaults) {
_super.apply(this, arguments);
}
PostTokenResponse_B2C2List.itemType = AzureB2C_ISModel.PostTokenResponse_B2CRec;
return PostTokenResponse_B2C2List;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostTokenResponse_B2C2List = PostTokenResponse_B2C2List;

});
define("UBT_AppManager_CS.model$PostTokenResponse_B2C2Record", ["exports", "OutSystems/ClientRuntime/Main", "AzureB2C_IS.model", "UBT_AppManager_CS.model", "AzureB2C_IS.model$PostTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$AzureB2C_IS"], function (exports, OutSystems, AzureB2C_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostTokenResponse_B2C2Record = (function (_super) {
__extends(PostTokenResponse_B2C2Record, _super);
function PostTokenResponse_B2C2Record(defaults) {
_super.apply(this, arguments);
}
PostTokenResponse_B2C2Record.attributesToDeclare = function () {
return [
this.attr("PostTokenResponse_B2C", "postTokenResponse_B2CAttr", "PostTokenResponse_B2C2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new AzureB2C_ISModel.PostTokenResponse_B2CRec());
}, true, AzureB2C_ISModel.PostTokenResponse_B2CRec)
].concat(_super.attributesToDeclare.call(this));
};
PostTokenResponse_B2C2Record.fromStructure = function (str) {
return new PostTokenResponse_B2C2Record(new PostTokenResponse_B2C2Record.RecordClass({
postTokenResponse_B2CAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostTokenResponse_B2C2Record._isAnonymousRecord = true;
PostTokenResponse_B2C2Record.UniqueId = "7347f963-bfb2-4326-7c93-8c05c6a97427";
PostTokenResponse_B2C2Record.init();
return PostTokenResponse_B2C2Record;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PostTokenResponse_B2C2Record = PostTokenResponse_B2C2Record;

});
define("UBT_AppManager_CS.model$AppManager_FRD_EventList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_FRD_EventRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_FRD_EventList = (function (_super) {
__extends(AppManager_FRD_EventList, _super);
function AppManager_FRD_EventList(defaults) {
_super.apply(this, arguments);
}
AppManager_FRD_EventList.itemType = UBT_AppManager_DBModel.AppManager_FRD_EventRec;
return AppManager_FRD_EventList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_FRD_EventList = AppManager_FRD_EventList;

});
define("UBT_AppManager_CS.model$Directory_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_AddressRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_AddressList = (function (_super) {
__extends(Directory_AddressList, _super);
function Directory_AddressList(defaults) {
_super.apply(this, arguments);
}
Directory_AddressList.itemType = APIDomain_Directory_ISModel.Directory_AddressRec;
return Directory_AddressList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_AddressList = Directory_AddressList;

});
define("UBT_AppManager_CS.model$SendFCMNotification_V1ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$SendFCMNotification_V1ResponseRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SendFCMNotification_V1ResponseRecordList = (function (_super) {
__extends(SendFCMNotification_V1ResponseRecordList, _super);
function SendFCMNotification_V1ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
SendFCMNotification_V1ResponseRecordList.itemType = UBT_AppManager_CSModel.SendFCMNotification_V1ResponseRecord;
return SendFCMNotification_V1ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SendFCMNotification_V1ResponseRecordList = SendFCMNotification_V1ResponseRecordList;

});
define("UBT_AppManager_CS.model$EspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$EspaceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var EspaceRecord = (function (_super) {
__extends(EspaceRecord, _super);
function EspaceRecord(defaults) {
_super.apply(this, arguments);
}
EspaceRecord.attributesToDeclare = function () {
return [
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.EspaceRec());
}, true, ServiceCenterModel.EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
EspaceRecord.fromStructure = function (str) {
return new EspaceRecord(new EspaceRecord.RecordClass({
espaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EspaceRecord._isAnonymousRecord = true;
EspaceRecord.UniqueId = "a702e171-772a-9b89-c17e-2544ab6d1d29";
EspaceRecord.init();
return EspaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.EspaceRecord = EspaceRecord;

});
define("UBT_AppManager_CS.model$EspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$EspaceRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var EspaceRecordList = (function (_super) {
__extends(EspaceRecordList, _super);
function EspaceRecordList(defaults) {
_super.apply(this, arguments);
}
EspaceRecordList.itemType = UBT_AppManager_CSModel.EspaceRecord;
return EspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.EspaceRecordList = EspaceRecordList;

});
define("UBT_AppManager_CS.model$TokenList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$TokenRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenList = (function (_super) {
__extends(TokenList, _super);
function TokenList(defaults) {
_super.apply(this, arguments);
}
TokenList.itemType = UBT_AppManager_CSModel.TokenRec;
return TokenList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TokenList = TokenList;

});
define("UBT_AppManager_CS.model$User_SyncInfo_ClaimItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfo_ClaimItemRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfo_ClaimItemRecord = (function (_super) {
__extends(User_SyncInfo_ClaimItemRecord, _super);
function User_SyncInfo_ClaimItemRecord(defaults) {
_super.apply(this, arguments);
}
User_SyncInfo_ClaimItemRecord.attributesToDeclare = function () {
return [
this.attr("User_SyncInfo_ClaimItem", "user_SyncInfo_ClaimItemAttr", "User_SyncInfo_ClaimItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRec());
}, true, UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRec)
].concat(_super.attributesToDeclare.call(this));
};
User_SyncInfo_ClaimItemRecord.fromStructure = function (str) {
return new User_SyncInfo_ClaimItemRecord(new User_SyncInfo_ClaimItemRecord.RecordClass({
user_SyncInfo_ClaimItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
User_SyncInfo_ClaimItemRecord._isAnonymousRecord = true;
User_SyncInfo_ClaimItemRecord.UniqueId = "8fb90bab-7f46-d04e-0a2e-85c39e4a569c";
User_SyncInfo_ClaimItemRecord.init();
return User_SyncInfo_ClaimItemRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRecord = User_SyncInfo_ClaimItemRecord;

});
define("UBT_AppManager_CS.model$User_SyncInfo_ClaimItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfo_ClaimItemRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfo_ClaimItemRecordList = (function (_super) {
__extends(User_SyncInfo_ClaimItemRecordList, _super);
function User_SyncInfo_ClaimItemRecordList(defaults) {
_super.apply(this, arguments);
}
User_SyncInfo_ClaimItemRecordList.itemType = UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRecord;
return User_SyncInfo_ClaimItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_SyncInfo_ClaimItemRecordList = User_SyncInfo_ClaimItemRecordList;

});
define("UBT_AppManager_CS.model$FederatedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_IS.model", "UBT_AppManager_CS.model", "UBT_AppManager_IS.model$FederatedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_IS"], function (exports, OutSystems, UBT_AppManager_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FederatedRecord = (function (_super) {
__extends(FederatedRecord, _super);
function FederatedRecord(defaults) {
_super.apply(this, arguments);
}
FederatedRecord.attributesToDeclare = function () {
return [
this.attr("Federated", "federatedAttr", "Federated", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_ISModel.FederatedRec());
}, true, UBT_AppManager_ISModel.FederatedRec)
].concat(_super.attributesToDeclare.call(this));
};
FederatedRecord.fromStructure = function (str) {
return new FederatedRecord(new FederatedRecord.RecordClass({
federatedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FederatedRecord._isAnonymousRecord = true;
FederatedRecord.UniqueId = "7a35b503-e1c6-a4cf-7896-6173092a46fc";
FederatedRecord.init();
return FederatedRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.FederatedRecord = FederatedRecord;

});
define("UBT_AppManager_CS.model$JWT_ClaimRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$JWT_ClaimRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_ClaimRecordList = (function (_super) {
__extends(JWT_ClaimRecordList, _super);
function JWT_ClaimRecordList(defaults) {
_super.apply(this, arguments);
}
JWT_ClaimRecordList.itemType = UBT_AppManager_CSModel.JWT_ClaimRecord;
return JWT_ClaimRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.JWT_ClaimRecordList = JWT_ClaimRecordList;

});
define("UBT_AppManager_CS.model$SystemTokenFieldsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UBTAppManager_AtomicTokenStore.model", "UBT_AppManager_CS.model", "Extension.UBTAppManager_AtomicTokenStore.model$SystemTokenFieldsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTAppManager_AtomicTokenStore"], function (exports, OutSystems, Extension_UBTAppManager_AtomicTokenStoreModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SystemTokenFieldsRecord = (function (_super) {
__extends(SystemTokenFieldsRecord, _super);
function SystemTokenFieldsRecord(defaults) {
_super.apply(this, arguments);
}
SystemTokenFieldsRecord.attributesToDeclare = function () {
return [
this.attr("SystemTokenFields", "systemTokenFieldsAttr", "SystemTokenFields", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_UBTAppManager_AtomicTokenStoreModel.SystemTokenFieldsRec());
}, true, Extension_UBTAppManager_AtomicTokenStoreModel.SystemTokenFieldsRec)
].concat(_super.attributesToDeclare.call(this));
};
SystemTokenFieldsRecord.fromStructure = function (str) {
return new SystemTokenFieldsRecord(new SystemTokenFieldsRecord.RecordClass({
systemTokenFieldsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SystemTokenFieldsRecord._isAnonymousRecord = true;
SystemTokenFieldsRecord.UniqueId = "7aef2a1a-48a9-8204-5bf4-3c50afa07394";
SystemTokenFieldsRecord.init();
return SystemTokenFieldsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.SystemTokenFieldsRecord = SystemTokenFieldsRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserAppExtendedUserRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "ServiceCenter.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserAppExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "ServiceCenter.model$UserRec", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, UBT_AppManager_DBModel, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserAppExtendedUserRecord = (function (_super) {
__extends(AppManager_UserAppExtendedUserRecord, _super);
function AppManager_UserAppExtendedUserRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserAppExtendedUserRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserAppExtended", "appManager_UserAppExtendedAttr", "AppManager_UserAppExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserAppExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserAppExtendedRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserAppExtendedUserRecord._isAnonymousRecord = true;
AppManager_UserAppExtendedUserRecord.UniqueId = "cfca5e74-9a29-558c-a7c1-8c4d96c92650";
AppManager_UserAppExtendedUserRecord.init();
return AppManager_UserAppExtendedUserRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserAppExtendedUserRecord = AppManager_UserAppExtendedUserRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserAppExtendedUserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserAppExtendedUserRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserAppExtendedUserRecordList = (function (_super) {
__extends(AppManager_UserAppExtendedUserRecordList, _super);
function AppManager_UserAppExtendedUserRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserAppExtendedUserRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserAppExtendedUserRecord;
return AppManager_UserAppExtendedUserRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserAppExtendedUserRecordList = AppManager_UserAppExtendedUserRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientCacheRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheRecordList = (function (_super) {
__extends(AppManager_ConfigClientCacheRecordList, _super);
function AppManager_ConfigClientCacheRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheRecordList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientCacheRecord;
return AppManager_ConfigClientCacheRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ConfigClientCacheRecordList = AppManager_ConfigClientCacheRecordList;

});
define("UBT_AppManager_CS.model$ClaimList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model$ClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils"], function (exports, OutSystems, Extension_JWT_TokenUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ClaimList = (function (_super) {
__extends(ClaimList, _super);
function ClaimList(defaults) {
_super.apply(this, arguments);
}
ClaimList.itemType = Extension_JWT_TokenUtilsModel.ClaimRec;
return ClaimList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ClaimList = ClaimList;

});
define("UBT_AppManager_CS.model$AppManager_LoginResultRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model$TokenRec", "Extension.JWT_TokenUtils.model$ClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils", "UBT_AppManager_CS.model$ClaimList"], function (exports, OutSystems, UBT_AppManager_CSModel, Extension_JWT_TokenUtilsModel) {
var OS = OutSystems.Internal;
var AppManager_LoginResultRec = (function (_super) {
__extends(AppManager_LoginResultRec, _super);
function AppManager_LoginResultRec(defaults) {
_super.apply(this, arguments);
}
AppManager_LoginResultRec.attributesToDeclare = function () {
return [
this.attr("Token", "tokenAttr", "Token", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.TokenRec());
}, true, UBT_AppManager_CSModel.TokenRec), 
this.attr("RefreshToken", "refreshTokenAttr", "RefreshToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Claims", "claimsAttr", "Claims", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.ClaimList());
}, true, UBT_AppManager_CSModel.ClaimList), 
this.attr("IssuedDateTime", "issuedDateTimeAttr", "IssuedDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ExpireDateTime", "expireDateTimeAttr", "ExpireDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_LoginResultRec.init();
return AppManager_LoginResultRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_LoginResultRec = AppManager_LoginResultRec;

});
define("UBT_AppManager_CS.model$AppManager_LoginResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_LoginResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_LoginResultRecord = (function (_super) {
__extends(AppManager_LoginResultRecord, _super);
function AppManager_LoginResultRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_LoginResultRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_LoginResult", "appManager_LoginResultAttr", "AppManager_LoginResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_LoginResultRec());
}, true, UBT_AppManager_CSModel.AppManager_LoginResultRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_LoginResultRecord.fromStructure = function (str) {
return new AppManager_LoginResultRecord(new AppManager_LoginResultRecord.RecordClass({
appManager_LoginResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_LoginResultRecord._isAnonymousRecord = true;
AppManager_LoginResultRecord.UniqueId = "7d244960-6a45-b844-0773-82c67e85e4df";
AppManager_LoginResultRecord.init();
return AppManager_LoginResultRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_LoginResultRecord = AppManager_LoginResultRecord;

});
define("UBT_AppManager_CS.model$SendFirebaseServerNotificationRequestList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseWeb.model", "UBT_AppManager_CS.model", "FirebaseWeb.model$SendFirebaseServerNotificationRequestRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseWeb"], function (exports, OutSystems, FirebaseWebModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SendFirebaseServerNotificationRequestList = (function (_super) {
__extends(SendFirebaseServerNotificationRequestList, _super);
function SendFirebaseServerNotificationRequestList(defaults) {
_super.apply(this, arguments);
}
SendFirebaseServerNotificationRequestList.itemType = FirebaseWebModel.SendFirebaseServerNotificationRequestRec;
return SendFirebaseServerNotificationRequestList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SendFirebaseServerNotificationRequestList = SendFirebaseServerNotificationRequestList;

});
define("UBT_AppManager_CS.model$SendFirebaseServerNotificationRequestRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseWeb.model", "UBT_AppManager_CS.model", "FirebaseWeb.model$SendFirebaseServerNotificationRequestRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseWeb"], function (exports, OutSystems, FirebaseWebModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SendFirebaseServerNotificationRequestRecord = (function (_super) {
__extends(SendFirebaseServerNotificationRequestRecord, _super);
function SendFirebaseServerNotificationRequestRecord(defaults) {
_super.apply(this, arguments);
}
SendFirebaseServerNotificationRequestRecord.attributesToDeclare = function () {
return [
this.attr("SendFirebaseServerNotificationRequest", "sendFirebaseServerNotificationRequestAttr", "SendFirebaseServerNotificationRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseWebModel.SendFirebaseServerNotificationRequestRec());
}, true, FirebaseWebModel.SendFirebaseServerNotificationRequestRec)
].concat(_super.attributesToDeclare.call(this));
};
SendFirebaseServerNotificationRequestRecord.fromStructure = function (str) {
return new SendFirebaseServerNotificationRequestRecord(new SendFirebaseServerNotificationRequestRecord.RecordClass({
sendFirebaseServerNotificationRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SendFirebaseServerNotificationRequestRecord._isAnonymousRecord = true;
SendFirebaseServerNotificationRequestRecord.UniqueId = "81b4cba9-c63d-0409-6fdf-c06cd0a0266e";
SendFirebaseServerNotificationRequestRecord.init();
return SendFirebaseServerNotificationRequestRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.SendFirebaseServerNotificationRequestRecord = SendFirebaseServerNotificationRequestRecord;

});
define("UBT_AppManager_CS.model$SendFCMNotification_V1ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$SendFCMNotification_V1ResponseRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SendFCMNotification_V1ResponseList = (function (_super) {
__extends(SendFCMNotification_V1ResponseList, _super);
function SendFCMNotification_V1ResponseList(defaults) {
_super.apply(this, arguments);
}
SendFCMNotification_V1ResponseList.itemType = FirebaseCloudMessageSenderModel.SendFCMNotification_V1ResponseRec;
return SendFCMNotification_V1ResponseList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SendFCMNotification_V1ResponseList = SendFCMNotification_V1ResponseList;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_ConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Firebase_ConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_ConfigList = (function (_super) {
__extends(AppManager_Firebase_ConfigList, _super);
function AppManager_Firebase_ConfigList(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_ConfigList.itemType = UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec;
return AppManager_Firebase_ConfigList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Firebase_ConfigList = AppManager_Firebase_ConfigList;

});
define("UBT_AppManager_CS.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$UserRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.UserRecord = UserRecord;

});
define("UBT_AppManager_CS.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$UserRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = UBT_AppManager_CSModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UserRecordList = UserRecordList;

});
define("UBT_AppManager_CS.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$ErrorRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessageSenderModel.ErrorRec());
}, true, FirebaseCloudMessageSenderModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "84c556d2-fa79-061c-9b5c-17185ed50412";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ErrorRecord = ErrorRecord;

});
define("UBT_AppManager_CS.model$User_SyncInfoClaimsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfoClaimsRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoClaimsList = (function (_super) {
__extends(User_SyncInfoClaimsList, _super);
function User_SyncInfoClaimsList(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoClaimsList.itemType = UBT_AppManager_CSModel.User_SyncInfoClaimsRec;
return User_SyncInfoClaimsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_SyncInfoClaimsList = User_SyncInfoClaimsList;

});
define("UBT_AppManager_CS.model$AppManager_IdpProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_IdpProviderRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_IdpProviderRecord = (function (_super) {
__extends(AppManager_IdpProviderRecord, _super);
function AppManager_IdpProviderRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_IdpProviderRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_IdpProvider", "appManager_IdpProviderAttr", "AppManager_IdpProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_IdpProviderRec());
}, true, UBT_AppManager_DBModel.AppManager_IdpProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_IdpProviderRecord.fromStructure = function (str) {
return new AppManager_IdpProviderRecord(new AppManager_IdpProviderRecord.RecordClass({
appManager_IdpProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_IdpProviderRecord._isAnonymousRecord = true;
AppManager_IdpProviderRecord.UniqueId = "856224dd-c23d-4f9f-c3f0-2629953056a7";
AppManager_IdpProviderRecord.init();
return AppManager_IdpProviderRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_IdpProviderRecord = AppManager_IdpProviderRecord;

});
define("UBT_AppManager_CS.model$FieldViolationItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$FieldViolationItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FieldViolationItemRecord = (function (_super) {
__extends(FieldViolationItemRecord, _super);
function FieldViolationItemRecord(defaults) {
_super.apply(this, arguments);
}
FieldViolationItemRecord.attributesToDeclare = function () {
return [
this.attr("FieldViolationItem", "fieldViolationItemAttr", "FieldViolationItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessageSenderModel.FieldViolationItemRec());
}, true, FirebaseCloudMessageSenderModel.FieldViolationItemRec)
].concat(_super.attributesToDeclare.call(this));
};
FieldViolationItemRecord.fromStructure = function (str) {
return new FieldViolationItemRecord(new FieldViolationItemRecord.RecordClass({
fieldViolationItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FieldViolationItemRecord._isAnonymousRecord = true;
FieldViolationItemRecord.UniqueId = "ecd11039-a98c-8a53-5160-4f5814c27687";
FieldViolationItemRecord.init();
return FieldViolationItemRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.FieldViolationItemRecord = FieldViolationItemRecord;

});
define("UBT_AppManager_CS.model$FieldViolationItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FieldViolationItemRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FieldViolationItemRecordList = (function (_super) {
__extends(FieldViolationItemRecordList, _super);
function FieldViolationItemRecordList(defaults) {
_super.apply(this, arguments);
}
FieldViolationItemRecordList.itemType = UBT_AppManager_CSModel.FieldViolationItemRecord;
return FieldViolationItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FieldViolationItemRecordList = FieldViolationItemRecordList;

});
define("UBT_AppManager_CS.model$JWT_TokenKeysConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$JWT_TokenKeysConfigRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWT_TokenKeysConfigList = (function (_super) {
__extends(JWT_TokenKeysConfigList, _super);
function JWT_TokenKeysConfigList(defaults) {
_super.apply(this, arguments);
}
JWT_TokenKeysConfigList.itemType = UBT_AppManager_CSModel.JWT_TokenKeysConfigRec;
return JWT_TokenKeysConfigList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.JWT_TokenKeysConfigList = JWT_TokenKeysConfigList;

});
define("UBT_AppManager_CS.model$FirebaseRD_EventJSONRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FirebaseRD_EventJSONRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FirebaseRD_EventJSONRecord = (function (_super) {
__extends(FirebaseRD_EventJSONRecord, _super);
function FirebaseRD_EventJSONRecord(defaults) {
_super.apply(this, arguments);
}
FirebaseRD_EventJSONRecord.attributesToDeclare = function () {
return [
this.attr("FirebaseRD_EventJSON", "firebaseRD_EventJSONAttr", "FirebaseRD_EventJSON", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.FirebaseRD_EventJSONRec());
}, true, UBT_AppManager_CSModel.FirebaseRD_EventJSONRec)
].concat(_super.attributesToDeclare.call(this));
};
FirebaseRD_EventJSONRecord.fromStructure = function (str) {
return new FirebaseRD_EventJSONRecord(new FirebaseRD_EventJSONRecord.RecordClass({
firebaseRD_EventJSONAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FirebaseRD_EventJSONRecord._isAnonymousRecord = true;
FirebaseRD_EventJSONRecord.UniqueId = "e6f676ad-1d80-eda2-b613-78d9b34fbb24";
FirebaseRD_EventJSONRecord.init();
return FirebaseRD_EventJSONRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.FirebaseRD_EventJSONRecord = FirebaseRD_EventJSONRecord;

});
define("UBT_AppManager_CS.model$FirebaseRD_EventJSONRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FirebaseRD_EventJSONRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FirebaseRD_EventJSONRecordList = (function (_super) {
__extends(FirebaseRD_EventJSONRecordList, _super);
function FirebaseRD_EventJSONRecordList(defaults) {
_super.apply(this, arguments);
}
FirebaseRD_EventJSONRecordList.itemType = UBT_AppManager_CSModel.FirebaseRD_EventJSONRecord;
return FirebaseRD_EventJSONRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FirebaseRD_EventJSONRecordList = FirebaseRD_EventJSONRecordList;

});
define("UBT_AppManager_CS.model$AppManager_FRD_EventRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_FRD_EventRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_FRD_EventRecord = (function (_super) {
__extends(AppManager_FRD_EventRecord, _super);
function AppManager_FRD_EventRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_FRD_EventRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_FRD_Event", "appManager_FRD_EventAttr", "AppManager_FRD_Event", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_FRD_EventRec());
}, true, UBT_AppManager_DBModel.AppManager_FRD_EventRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_FRD_EventRecord.fromStructure = function (str) {
return new AppManager_FRD_EventRecord(new AppManager_FRD_EventRecord.RecordClass({
appManager_FRD_EventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_FRD_EventRecord._isAnonymousRecord = true;
AppManager_FRD_EventRecord.UniqueId = "abaab225-8030-09a3-c89b-f88eb84adda8";
AppManager_FRD_EventRecord.init();
return AppManager_FRD_EventRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_FRD_EventRecord = AppManager_FRD_EventRecord;

});
define("UBT_AppManager_CS.model$AppManager_FRD_EventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_FRD_EventRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_FRD_EventRecordList = (function (_super) {
__extends(AppManager_FRD_EventRecordList, _super);
function AppManager_FRD_EventRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_FRD_EventRecordList.itemType = UBT_AppManager_CSModel.AppManager_FRD_EventRecord;
return AppManager_FRD_EventRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_FRD_EventRecordList = AppManager_FRD_EventRecordList;

});
define("UBT_AppManager_CS.model$ServiceAction_CallResultRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_ResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_CallResultRec = (function (_super) {
__extends(ServiceAction_CallResultRec, _super);
function ServiceAction_CallResultRec(defaults) {
_super.apply(this, arguments);
}
ServiceAction_CallResultRec.attributesToDeclare = function () {
return [
this.attr("AppManager_PostLogin_Result", "appManager_PostLogin_ResultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_PostLogin_ResultRec());
}, true, UBT_AppManager_CSModel.AppManager_PostLogin_ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAction_CallResultRec.fromStructure = function (str) {
return new ServiceAction_CallResultRec(new ServiceAction_CallResultRec.RecordClass({
appManager_PostLogin_ResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAction_CallResultRec.init();
return ServiceAction_CallResultRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ServiceAction_CallResultRec = ServiceAction_CallResultRec;

});
define("UBT_AppManager_CS.model$ServiceAction_CallResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_CallResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_CallResultRecord = (function (_super) {
__extends(ServiceAction_CallResultRecord, _super);
function ServiceAction_CallResultRecord(defaults) {
_super.apply(this, arguments);
}
ServiceAction_CallResultRecord.attributesToDeclare = function () {
return [
this.attr("ServiceAction_CallResult", "serviceAction_CallResultAttr", "ServiceAction_CallResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.ServiceAction_CallResultRec());
}, true, UBT_AppManager_CSModel.ServiceAction_CallResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAction_CallResultRecord.fromStructure = function (str) {
return new ServiceAction_CallResultRecord(new ServiceAction_CallResultRecord.RecordClass({
serviceAction_CallResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAction_CallResultRecord._isAnonymousRecord = true;
ServiceAction_CallResultRecord.UniqueId = "8cd3c85b-6368-1734-7431-25fb7ce493c0";
ServiceAction_CallResultRecord.init();
return ServiceAction_CallResultRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ServiceAction_CallResultRecord = ServiceAction_CallResultRecord;

});
define("UBT_AppManager_CS.model$ServiceAction_CallResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_CallResultRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_CallResultRecordList = (function (_super) {
__extends(ServiceAction_CallResultRecordList, _super);
function ServiceAction_CallResultRecordList(defaults) {
_super.apply(this, arguments);
}
ServiceAction_CallResultRecordList.itemType = UBT_AppManager_CSModel.ServiceAction_CallResultRecord;
return ServiceAction_CallResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ServiceAction_CallResultRecordList = ServiceAction_CallResultRecordList;

});
define("UBT_AppManager_CS.model$ServiceAction_CallResultList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_CallResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_CallResultList = (function (_super) {
__extends(ServiceAction_CallResultList, _super);
function ServiceAction_CallResultList(defaults) {
_super.apply(this, arguments);
}
ServiceAction_CallResultList.itemType = UBT_AppManager_CSModel.ServiceAction_CallResultRec;
return ServiceAction_CallResultList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ServiceAction_CallResultList = ServiceAction_CallResultList;

});
define("UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserTokenSyncConfigRecordList = (function (_super) {
__extends(AppManager_UserTokenSyncConfigRecordList, _super);
function AppManager_UserTokenSyncConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserTokenSyncConfigRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigRecord;
return AppManager_UserTokenSyncConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigRecordList = AppManager_UserTokenSyncConfigRecordList;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_ResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_ResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_ResultRecord = (function (_super) {
__extends(AppManager_PostLogin_ResultRecord, _super);
function AppManager_PostLogin_ResultRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_ResultRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_PostLogin_Result", "appManager_PostLogin_ResultAttr", "AppManager_PostLogin_Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_PostLogin_ResultRec());
}, true, UBT_AppManager_CSModel.AppManager_PostLogin_ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_PostLogin_ResultRecord.fromStructure = function (str) {
return new AppManager_PostLogin_ResultRecord(new AppManager_PostLogin_ResultRecord.RecordClass({
appManager_PostLogin_ResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_PostLogin_ResultRecord._isAnonymousRecord = true;
AppManager_PostLogin_ResultRecord.UniqueId = "8a9e8d2d-e4d1-88f7-a49a-9cab6aa46d9b";
AppManager_PostLogin_ResultRecord.init();
return AppManager_PostLogin_ResultRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_PostLogin_ResultRecord = AppManager_PostLogin_ResultRecord;

});
define("UBT_AppManager_CS.model$Directory_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_AddressRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_AddressRecord = (function (_super) {
__extends(Directory_AddressRecord, _super);
function Directory_AddressRecord(defaults) {
_super.apply(this, arguments);
}
Directory_AddressRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Address", "directory_AddressAttr", "Directory_Address", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_AddressRec());
}, true, APIDomain_Directory_ISModel.Directory_AddressRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_AddressRecord.fromStructure = function (str) {
return new Directory_AddressRecord(new Directory_AddressRecord.RecordClass({
directory_AddressAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_AddressRecord._isAnonymousRecord = true;
Directory_AddressRecord.UniqueId = "b9434c95-3c85-cf2b-e3c0-822e0fe29ac6";
Directory_AddressRecord.init();
return Directory_AddressRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Directory_AddressRecord = Directory_AddressRecord;

});
define("UBT_AppManager_CS.model$Directory_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_AddressRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_AddressRecordList = (function (_super) {
__extends(Directory_AddressRecordList, _super);
function Directory_AddressRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_AddressRecordList.itemType = UBT_AppManager_CSModel.Directory_AddressRecord;
return Directory_AddressRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_AddressRecordList = Directory_AddressRecordList;

});
define("UBT_AppManager_CS.model$JWKRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$JWKRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var JWKRecordList = (function (_super) {
__extends(JWKRecordList, _super);
function JWKRecordList(defaults) {
_super.apply(this, arguments);
}
JWKRecordList.itemType = UBT_AppManager_CSModel.JWKRecord;
return JWKRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.JWKRecordList = JWKRecordList;

});
define("UBT_AppManager_CS.model$SendFirebaseServerNotificationRequestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$SendFirebaseServerNotificationRequestRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SendFirebaseServerNotificationRequestRecordList = (function (_super) {
__extends(SendFirebaseServerNotificationRequestRecordList, _super);
function SendFirebaseServerNotificationRequestRecordList(defaults) {
_super.apply(this, arguments);
}
SendFirebaseServerNotificationRequestRecordList.itemType = UBT_AppManager_CSModel.SendFirebaseServerNotificationRequestRecord;
return SendFirebaseServerNotificationRequestRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SendFirebaseServerNotificationRequestRecordList = SendFirebaseServerNotificationRequestRecordList;

});
define("UBT_AppManager_CS.model$Espace_VersionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$Espace_VersionRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecord = (function (_super) {
__extends(Espace_VersionRecord, _super);
function Espace_VersionRecord(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecord.attributesToDeclare = function () {
return [
this.attr("Espace_Version", "espace_VersionAttr", "Espace_Version", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.Espace_VersionRec());
}, true, ServiceCenterModel.Espace_VersionRec)
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionRecord.fromStructure = function (str) {
return new Espace_VersionRecord(new Espace_VersionRecord.RecordClass({
espace_VersionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Espace_VersionRecord._isAnonymousRecord = true;
Espace_VersionRecord.UniqueId = "a30dbf03-0b81-3bab-70c6-b26430e8789b";
Espace_VersionRecord.init();
return Espace_VersionRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Espace_VersionRecord = Espace_VersionRecord;

});
define("UBT_AppManager_CS.model$Espace_VersionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Espace_VersionRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecordList = (function (_super) {
__extends(Espace_VersionRecordList, _super);
function Espace_VersionRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecordList.itemType = UBT_AppManager_CSModel.Espace_VersionRecord;
return Espace_VersionRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Espace_VersionRecordList = Espace_VersionRecordList;

});
define("UBT_AppManager_CS.model$User_ToUpdateInfoList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_ToUpdateInfoRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_ToUpdateInfoList = (function (_super) {
__extends(User_ToUpdateInfoList, _super);
function User_ToUpdateInfoList(defaults) {
_super.apply(this, arguments);
}
User_ToUpdateInfoList.itemType = UBT_AppManager_CSModel.User_ToUpdateInfoRec;
return User_ToUpdateInfoList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_ToUpdateInfoList = User_ToUpdateInfoList;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoRecord = (function (_super) {
__extends(AppManager_UserInfoRecord, _super);
function AppManager_UserInfoRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserInfo", "appManager_UserInfoAttr", "AppManager_UserInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_UserInfoRec());
}, true, UBT_AppManager_CSModel.AppManager_UserInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserInfoRecord.fromStructure = function (str) {
return new AppManager_UserInfoRecord(new AppManager_UserInfoRecord.RecordClass({
appManager_UserInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_UserInfoRecord._isAnonymousRecord = true;
AppManager_UserInfoRecord.UniqueId = "c866bd7a-7ffc-6dea-1f67-96e9c2ea87fc";
AppManager_UserInfoRecord.init();
return AppManager_UserInfoRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserInfoRecord = AppManager_UserInfoRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoRecordList = (function (_super) {
__extends(AppManager_UserInfoRecordList, _super);
function AppManager_UserInfoRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserInfoRecord;
return AppManager_UserInfoRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserInfoRecordList = AppManager_UserInfoRecordList;

});
define("UBT_AppManager_CS.model$LicenseListList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$LicenseListRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var LicenseListList = (function (_super) {
__extends(LicenseListList, _super);
function LicenseListList(defaults) {
_super.apply(this, arguments);
}
LicenseListList.itemType = UBT_AppManager_CSModel.LicenseListRec;
return LicenseListList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.LicenseListList = LicenseListList;

});
define("UBT_AppManager_CS.model$Custom_Address_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Custom_Address_ItemRecord = Custom_Address_ItemRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserExtendedAppManager_UserAppExtendedUserRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList = (function (_super) {
__extends(AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList, _super);
function AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserExtendedAppManager_UserAppExtendedUserRecord;
return AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList = AppManager_UserExtendedAppManager_UserAppExtendedUserRecordList;

});
define("UBT_AppManager_CS.model$Custom_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Custom_AddressList = (function (_super) {
__extends(Custom_AddressList, _super);
function Custom_AddressList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressList.itemType = APIDomain_Directory_ISModel.Custom_AddressRec;
return Custom_AddressList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Custom_AddressList = Custom_AddressList;

});
define("UBT_AppManager_CS.model$AppManager_UserExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedList = (function (_super) {
__extends(AppManager_UserExtendedList, _super);
function AppManager_UserExtendedList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedList.itemType = UBT_AppManager_DBModel.AppManager_UserExtendedRec;
return AppManager_UserExtendedList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserExtendedList = AppManager_UserExtendedList;

});
define("UBT_AppManager_CS.model$Custom_Address_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Custom_Address_ItemRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecordList = (function (_super) {
__extends(Custom_Address_ItemRecordList, _super);
function Custom_Address_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecordList.itemType = UBT_AppManager_CSModel.Custom_Address_ItemRecord;
return Custom_Address_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Custom_Address_ItemRecordList = Custom_Address_ItemRecordList;

});
define("UBT_AppManager_CS.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ErrorRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = UBT_AppManager_CSModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ErrorRecordList = ErrorRecordList;

});
define("UBT_AppManager_CS.model$UserTokenFieldsList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UBTAppManager_AtomicTokenStore.model", "UBT_AppManager_CS.model", "Extension.UBTAppManager_AtomicTokenStore.model$UserTokenFieldsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTAppManager_AtomicTokenStore"], function (exports, OutSystems, Extension_UBTAppManager_AtomicTokenStoreModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserTokenFieldsList = (function (_super) {
__extends(UserTokenFieldsList, _super);
function UserTokenFieldsList(defaults) {
_super.apply(this, arguments);
}
UserTokenFieldsList.itemType = Extension_UBTAppManager_AtomicTokenStoreModel.UserTokenFieldsRec;
return UserTokenFieldsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UserTokenFieldsList = UserTokenFieldsList;

});
define("UBT_AppManager_CS.model$PostTokenResponse_B2C2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PostTokenResponse_B2C2Record"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostTokenResponse_B2C2RecordList = (function (_super) {
__extends(PostTokenResponse_B2C2RecordList, _super);
function PostTokenResponse_B2C2RecordList(defaults) {
_super.apply(this, arguments);
}
PostTokenResponse_B2C2RecordList.itemType = UBT_AppManager_CSModel.PostTokenResponse_B2C2Record;
return PostTokenResponse_B2C2RecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostTokenResponse_B2C2RecordList = PostTokenResponse_B2C2RecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.Directory_UserCurrentRecord = Directory_UserCurrentRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserTokenSyncConfigRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserTokenSyncConfigList = (function (_super) {
__extends(AppManager_UserTokenSyncConfigList, _super);
function AppManager_UserTokenSyncConfigList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserTokenSyncConfigList.itemType = UBT_AppManager_DBModel.AppManager_UserTokenSyncConfigRec;
return AppManager_UserTokenSyncConfigList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigList = AppManager_UserTokenSyncConfigList;

});
define("UBT_AppManager_CS.model$Directory_MemberProfileList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_MemberProfileRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_MemberProfileList = (function (_super) {
__extends(Directory_MemberProfileList, _super);
function Directory_MemberProfileList(defaults) {
_super.apply(this, arguments);
}
Directory_MemberProfileList.itemType = APIDomain_Directory_ISModel.Directory_MemberProfileRec;
return Directory_MemberProfileList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_MemberProfileList = Directory_MemberProfileList;

});
define("UBT_AppManager_CS.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$ErrorRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = FirebaseCloudMessageSenderModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ErrorList = ErrorList;

});
define("UBT_AppManager_CS.model$Type_FCMExtraParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Type_FCMExtraParameterRec = (function (_super) {
__extends(Type_FCMExtraParameterRec, _super);
function Type_FCMExtraParameterRec(defaults) {
_super.apply(this, arguments);
}
Type_FCMExtraParameterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_FCMExtraParameterRec.init();
return Type_FCMExtraParameterRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Type_FCMExtraParameterRec = Type_FCMExtraParameterRec;

});
define("UBT_AppManager_CS.model$Type_FCMExtraParameterRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Type_FCMExtraParameterRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Type_FCMExtraParameterRecord = (function (_super) {
__extends(Type_FCMExtraParameterRecord, _super);
function Type_FCMExtraParameterRecord(defaults) {
_super.apply(this, arguments);
}
Type_FCMExtraParameterRecord.attributesToDeclare = function () {
return [
this.attr("Type_FCMExtraParameter", "type_FCMExtraParameterAttr", "Type_FCMExtraParameter", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.Type_FCMExtraParameterRec());
}, true, UBT_AppManager_CSModel.Type_FCMExtraParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_FCMExtraParameterRecord.fromStructure = function (str) {
return new Type_FCMExtraParameterRecord(new Type_FCMExtraParameterRecord.RecordClass({
type_FCMExtraParameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_FCMExtraParameterRecord._isAnonymousRecord = true;
Type_FCMExtraParameterRecord.UniqueId = "b7afde7b-9f48-6cee-75f8-cb611cdfc971";
Type_FCMExtraParameterRecord.init();
return Type_FCMExtraParameterRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Type_FCMExtraParameterRecord = Type_FCMExtraParameterRecord;

});
define("UBT_AppManager_CS.model$Type_FCMExtraParameterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Type_FCMExtraParameterRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Type_FCMExtraParameterRecordList = (function (_super) {
__extends(Type_FCMExtraParameterRecordList, _super);
function Type_FCMExtraParameterRecordList(defaults) {
_super.apply(this, arguments);
}
Type_FCMExtraParameterRecordList.itemType = UBT_AppManager_CSModel.Type_FCMExtraParameterRecord;
return Type_FCMExtraParameterRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Type_FCMExtraParameterRecordList = Type_FCMExtraParameterRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityList, _super);
function Directory_UserCurrent_VisibilityList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec;
return Directory_UserCurrent_VisibilityList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_VisibilityList = Directory_UserCurrent_VisibilityList;

});
define("UBT_AppManager_CS.model$AppManager_Applications_ExpectedClaimList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Applications_ExpectedClaimRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedClaimList = (function (_super) {
__extends(AppManager_Applications_ExpectedClaimList, _super);
function AppManager_Applications_ExpectedClaimList(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedClaimList.itemType = UBT_AppManager_DBModel.AppManager_Applications_ExpectedClaimRec;
return AppManager_Applications_ExpectedClaimList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Applications_ExpectedClaimList = AppManager_Applications_ExpectedClaimList;

});
define("UBT_AppManager_CS.model$EntityMetadataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$EntityMetadataRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var EntityMetadataRecordList = (function (_super) {
__extends(EntityMetadataRecordList, _super);
function EntityMetadataRecordList(defaults) {
_super.apply(this, arguments);
}
EntityMetadataRecordList.itemType = UBT_AppManager_CSModel.EntityMetadataRecord;
return EntityMetadataRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.EntityMetadataRecordList = EntityMetadataRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserDeviceRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserDeviceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserDeviceRecord = (function (_super) {
__extends(AppManager_UserDeviceRecord, _super);
function AppManager_UserDeviceRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserDeviceRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserDevice", "appManager_UserDeviceAttr", "AppManager_UserDevice", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserDeviceRec());
}, true, UBT_AppManager_DBModel.AppManager_UserDeviceRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserDeviceRecord.fromStructure = function (str) {
return new AppManager_UserDeviceRecord(new AppManager_UserDeviceRecord.RecordClass({
appManager_UserDeviceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_UserDeviceRecord._isAnonymousRecord = true;
AppManager_UserDeviceRecord.UniqueId = "d072d38f-b484-266f-f149-b86b8e0f3bd8";
AppManager_UserDeviceRecord.init();
return AppManager_UserDeviceRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserDeviceRecord = AppManager_UserDeviceRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserDeviceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserDeviceRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserDeviceRecordList = (function (_super) {
__extends(AppManager_UserDeviceRecordList, _super);
function AppManager_UserDeviceRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserDeviceRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserDeviceRecord;
return AppManager_UserDeviceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserDeviceRecordList = AppManager_UserDeviceRecordList;

});
define("UBT_AppManager_CS.model$AppManager_PostLogin_ResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_PostLogin_ResultRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_PostLogin_ResultRecordList = (function (_super) {
__extends(AppManager_PostLogin_ResultRecordList, _super);
function AppManager_PostLogin_ResultRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_PostLogin_ResultRecordList.itemType = UBT_AppManager_CSModel.AppManager_PostLogin_ResultRecord;
return AppManager_PostLogin_ResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_PostLogin_ResultRecordList = AppManager_PostLogin_ResultRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserDeviceList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserDeviceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserDeviceList = (function (_super) {
__extends(AppManager_UserDeviceList, _super);
function AppManager_UserDeviceList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserDeviceList.itemType = UBT_AppManager_DBModel.AppManager_UserDeviceRec;
return AppManager_UserDeviceList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserDeviceList = AppManager_UserDeviceList;

});
define("UBT_AppManager_CS.model$AppManager_UserAppExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserAppExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserAppExtendedList = (function (_super) {
__extends(AppManager_UserAppExtendedList, _super);
function AppManager_UserAppExtendedList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserAppExtendedList.itemType = UBT_AppManager_DBModel.AppManager_UserAppExtendedRec;
return AppManager_UserAppExtendedList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserAppExtendedList = AppManager_UserAppExtendedList;

});
define("UBT_AppManager_CS.model$AppManager_Application_EspaceList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Application_EspaceRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Application_EspaceList = (function (_super) {
__extends(AppManager_Application_EspaceList, _super);
function AppManager_Application_EspaceList(defaults) {
_super.apply(this, arguments);
}
AppManager_Application_EspaceList.itemType = UBT_AppManager_DBModel.AppManager_Application_EspaceRec;
return AppManager_Application_EspaceList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Application_EspaceList = AppManager_Application_EspaceList;

});
define("UBT_AppManager_CS.model$User_SyncInfoList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$User_SyncInfoRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var User_SyncInfoList = (function (_super) {
__extends(User_SyncInfoList, _super);
function User_SyncInfoList(defaults) {
_super.apply(this, arguments);
}
User_SyncInfoList.itemType = UBT_AppManager_CSModel.User_SyncInfoRec;
return User_SyncInfoList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.User_SyncInfoList = User_SyncInfoList;

});
define("UBT_AppManager_CS.model$Firebase_Configuration_FileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Firebase_Configuration_FileRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Firebase_Configuration_FileRecordList = (function (_super) {
__extends(Firebase_Configuration_FileRecordList, _super);
function Firebase_Configuration_FileRecordList(defaults) {
_super.apply(this, arguments);
}
Firebase_Configuration_FileRecordList.itemType = UBT_AppManager_CSModel.Firebase_Configuration_FileRecord;
return Firebase_Configuration_FileRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Firebase_Configuration_FileRecordList = Firebase_Configuration_FileRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
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
UBT_AppManager_CSModel.AppManager_UserExtendedRecord = AppManager_UserExtendedRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserExtendedRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedRecordList = (function (_super) {
__extends(AppManager_UserExtendedRecordList, _super);
function AppManager_UserExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserExtendedRecord;
return AppManager_UserExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserExtendedRecordList = AppManager_UserExtendedRecordList;

});
define("UBT_AppManager_CS.model$AppManager_Firebase_Config_FileList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_Firebase_Config_FileRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_Config_FileList = (function (_super) {
__extends(AppManager_Firebase_Config_FileList, _super);
function AppManager_Firebase_Config_FileList(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_Config_FileList.itemType = UBT_AppManager_DBModel.AppManager_Firebase_Config_FileRec;
return AppManager_Firebase_Config_FileList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_Firebase_Config_FileList = AppManager_Firebase_Config_FileList;

});
define("UBT_AppManager_CS.model$TokenValidationList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model$TokenValidationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils"], function (exports, OutSystems, Extension_JWT_TokenUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenValidationList = (function (_super) {
__extends(TokenValidationList, _super);
function TokenValidationList(defaults) {
_super.apply(this, arguments);
}
TokenValidationList.itemType = Extension_JWT_TokenUtilsModel.TokenValidationRec;
return TokenValidationList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TokenValidationList = TokenValidationList;

});
define("UBT_AppManager_CS.model$SystemTokenFieldsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$SystemTokenFieldsRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SystemTokenFieldsRecordList = (function (_super) {
__extends(SystemTokenFieldsRecordList, _super);
function SystemTokenFieldsRecordList(defaults) {
_super.apply(this, arguments);
}
SystemTokenFieldsRecordList.itemType = UBT_AppManager_CSModel.SystemTokenFieldsRecord;
return SystemTokenFieldsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SystemTokenFieldsRecordList = SystemTokenFieldsRecordList;

});
define("UBT_AppManager_CS.model$LicenseListRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$LicenseListRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var LicenseListRecord = (function (_super) {
__extends(LicenseListRecord, _super);
function LicenseListRecord(defaults) {
_super.apply(this, arguments);
}
LicenseListRecord.attributesToDeclare = function () {
return [
this.attr("LicenseList", "licenseListAttr", "LicenseList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.LicenseListRec());
}, true, UBT_AppManager_CSModel.LicenseListRec)
].concat(_super.attributesToDeclare.call(this));
};
LicenseListRecord.fromStructure = function (str) {
return new LicenseListRecord(new LicenseListRecord.RecordClass({
licenseListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LicenseListRecord._isAnonymousRecord = true;
LicenseListRecord.UniqueId = "bdb3ec26-59c4-537b-4e08-49aae2f65236";
LicenseListRecord.init();
return LicenseListRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.LicenseListRecord = LicenseListRecord;

});
define("UBT_AppManager_CS.model$FeatureFlagRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.LaunchDarkly_SDK.model", "UBT_AppManager_CS.model", "Extension.LaunchDarkly_SDK.model$FeatureFlagRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$LaunchDarkly_SDK"], function (exports, OutSystems, Extension_LaunchDarkly_SDKModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FeatureFlagRecord = (function (_super) {
__extends(FeatureFlagRecord, _super);
function FeatureFlagRecord(defaults) {
_super.apply(this, arguments);
}
FeatureFlagRecord.attributesToDeclare = function () {
return [
this.attr("FeatureFlag", "featureFlagAttr", "FeatureFlag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_LaunchDarkly_SDKModel.FeatureFlagRec());
}, true, Extension_LaunchDarkly_SDKModel.FeatureFlagRec)
].concat(_super.attributesToDeclare.call(this));
};
FeatureFlagRecord.fromStructure = function (str) {
return new FeatureFlagRecord(new FeatureFlagRecord.RecordClass({
featureFlagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FeatureFlagRecord._isAnonymousRecord = true;
FeatureFlagRecord.UniqueId = "c157e885-dd8b-e206-e398-f2bda76f87c0";
FeatureFlagRecord.init();
return FeatureFlagRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.FeatureFlagRecord = FeatureFlagRecord;

});
define("UBT_AppManager_CS.model$UBT_MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$UBT_MessageTypeRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecordList = (function (_super) {
__extends(UBT_MessageTypeRecordList, _super);
function UBT_MessageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecordList.itemType = UBT_AppManager_CSModel.UBT_MessageTypeRecord;
return UBT_MessageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UBT_MessageTypeRecordList = UBT_MessageTypeRecordList;

});
define("UBT_AppManager_CS.model$Token2List", ["exports", "OutSystems/ClientRuntime/Main", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model$TokenRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils"], function (exports, OutSystems, Extension_JWT_TokenUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Token2List = (function (_super) {
__extends(Token2List, _super);
function Token2List(defaults) {
_super.apply(this, arguments);
}
Token2List.itemType = Extension_JWT_TokenUtilsModel.TokenRec;
return Token2List;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Token2List = Token2List;

});
define("UBT_AppManager_CS.model$FeatureFlagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FeatureFlagRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FeatureFlagRecordList = (function (_super) {
__extends(FeatureFlagRecordList, _super);
function FeatureFlagRecordList(defaults) {
_super.apply(this, arguments);
}
FeatureFlagRecordList.itemType = UBT_AppManager_CSModel.FeatureFlagRecord;
return FeatureFlagRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FeatureFlagRecordList = FeatureFlagRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ClientExceptionMessageList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ClientExceptionMessageList = (function (_super) {
__extends(AppManager_ClientExceptionMessageList, _super);
function AppManager_ClientExceptionMessageList(defaults) {
_super.apply(this, arguments);
}
AppManager_ClientExceptionMessageList.itemType = UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec;
return AppManager_ClientExceptionMessageList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ClientExceptionMessageList = AppManager_ClientExceptionMessageList;

});
define("UBT_AppManager_CS.model$ServiceActionInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ServiceAction_Utils.model", "UBT_AppManager_CS.model", "Extension.ServiceAction_Utils.model$ServiceActionInfoRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceAction_Utils"], function (exports, OutSystems, Extension_ServiceAction_UtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceActionInfoRecord = (function (_super) {
__extends(ServiceActionInfoRecord, _super);
function ServiceActionInfoRecord(defaults) {
_super.apply(this, arguments);
}
ServiceActionInfoRecord.attributesToDeclare = function () {
return [
this.attr("ServiceActionInfo", "serviceActionInfoAttr", "ServiceActionInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ServiceAction_UtilsModel.ServiceActionInfoRec());
}, true, Extension_ServiceAction_UtilsModel.ServiceActionInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceActionInfoRecord.fromStructure = function (str) {
return new ServiceActionInfoRecord(new ServiceActionInfoRecord.RecordClass({
serviceActionInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceActionInfoRecord._isAnonymousRecord = true;
ServiceActionInfoRecord.UniqueId = "eb392f1a-0001-63b3-821b-21d3e67f6455";
ServiceActionInfoRecord.init();
return ServiceActionInfoRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ServiceActionInfoRecord = ServiceActionInfoRecord;

});
define("UBT_AppManager_CS.model$ServiceActionInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceActionInfoRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceActionInfoRecordList = (function (_super) {
__extends(ServiceActionInfoRecordList, _super);
function ServiceActionInfoRecordList(defaults) {
_super.apply(this, arguments);
}
ServiceActionInfoRecordList.itemType = UBT_AppManager_CSModel.ServiceActionInfoRecord;
return ServiceActionInfoRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ServiceActionInfoRecordList = ServiceActionInfoRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserExtendedUserRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "ServiceCenter.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB", "ServiceCenter.model$UserRec", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, UBT_AppManager_DBModel, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedUserRecord = (function (_super) {
__extends(AppManager_UserExtendedUserRecord, _super);
function AppManager_UserExtendedUserRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedUserRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_UserExtended", "appManager_UserExtendedAttr", "AppManager_UserExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
}, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec), 
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserExtendedUserRecord._isAnonymousRecord = true;
AppManager_UserExtendedUserRecord.UniqueId = "fa2a07cd-169c-781b-ffc2-332ef028300a";
AppManager_UserExtendedUserRecord.init();
return AppManager_UserExtendedUserRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_UserExtendedUserRecord = AppManager_UserExtendedUserRecord;

});
define("UBT_AppManager_CS.model$AppManager_UserExtendedUserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserExtendedUserRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedUserRecordList = (function (_super) {
__extends(AppManager_UserExtendedUserRecordList, _super);
function AppManager_UserExtendedUserRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedUserRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserExtendedUserRecord;
return AppManager_UserExtendedUserRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserExtendedUserRecordList = AppManager_UserExtendedUserRecordList;

});
define("UBT_AppManager_CS.model$PostROPCTokenResponse_B2CRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_IS.model", "UBT_AppManager_CS.model", "UBT_AppManager_IS.model$PostROPCTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_IS"], function (exports, OutSystems, UBT_AppManager_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostROPCTokenResponse_B2CRecord = (function (_super) {
__extends(PostROPCTokenResponse_B2CRecord, _super);
function PostROPCTokenResponse_B2CRecord(defaults) {
_super.apply(this, arguments);
}
PostROPCTokenResponse_B2CRecord.attributesToDeclare = function () {
return [
this.attr("PostROPCTokenResponse_B2C", "postROPCTokenResponse_B2CAttr", "PostROPCTokenResponse_B2C", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_ISModel.PostROPCTokenResponse_B2CRec());
}, true, UBT_AppManager_ISModel.PostROPCTokenResponse_B2CRec)
].concat(_super.attributesToDeclare.call(this));
};
PostROPCTokenResponse_B2CRecord.fromStructure = function (str) {
return new PostROPCTokenResponse_B2CRecord(new PostROPCTokenResponse_B2CRecord.RecordClass({
postROPCTokenResponse_B2CAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostROPCTokenResponse_B2CRecord._isAnonymousRecord = true;
PostROPCTokenResponse_B2CRecord.UniqueId = "eb468ccb-3f59-50ea-eaf3-f6911132e92b";
PostROPCTokenResponse_B2CRecord.init();
return PostROPCTokenResponse_B2CRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.PostROPCTokenResponse_B2CRecord = PostROPCTokenResponse_B2CRecord;

});
define("UBT_AppManager_CS.model$PostROPCTokenResponse_B2CRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$PostROPCTokenResponse_B2CRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostROPCTokenResponse_B2CRecordList = (function (_super) {
__extends(PostROPCTokenResponse_B2CRecordList, _super);
function PostROPCTokenResponse_B2CRecordList(defaults) {
_super.apply(this, arguments);
}
PostROPCTokenResponse_B2CRecordList.itemType = UBT_AppManager_CSModel.PostROPCTokenResponse_B2CRecord;
return PostROPCTokenResponse_B2CRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostROPCTokenResponse_B2CRecordList = PostROPCTokenResponse_B2CRecordList;

});
define("UBT_AppManager_CS.model$AppManager_ConfigClientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientRecordList = (function (_super) {
__extends(AppManager_ConfigClientRecordList, _super);
function AppManager_ConfigClientRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientRecordList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientRecord;
return AppManager_ConfigClientRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ConfigClientRecordList = AppManager_ConfigClientRecordList;

});
define("UBT_AppManager_CS.model$EntityMetadataList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.UBTAppManager_AtomicTokenStore.model", "UBT_AppManager_CS.model", "Extension.UBTAppManager_AtomicTokenStore.model$EntityMetadataRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTAppManager_AtomicTokenStore"], function (exports, OutSystems, Extension_UBTAppManager_AtomicTokenStoreModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var EntityMetadataList = (function (_super) {
__extends(EntityMetadataList, _super);
function EntityMetadataList(defaults) {
_super.apply(this, arguments);
}
EntityMetadataList.itemType = Extension_UBTAppManager_AtomicTokenStoreModel.EntityMetadataRec;
return EntityMetadataList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.EntityMetadataList = EntityMetadataList;

});
define("UBT_AppManager_CS.model$AppManager_DeviceContextList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextList = (function (_super) {
__extends(AppManager_DeviceContextList, _super);
function AppManager_DeviceContextList(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextList.itemType = UBT_AppManager_CSModel.AppManager_DeviceContextRec;
return AppManager_DeviceContextList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_DeviceContextList = AppManager_DeviceContextList;

});
define("UBT_AppManager_CS.model$Directory_PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_PhotoList = (function (_super) {
__extends(Directory_PhotoList, _super);
function Directory_PhotoList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoList.itemType = APIDomain_Directory_ISModel.Directory_PhotoRec;
return Directory_PhotoList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_PhotoList = Directory_PhotoList;

});
define("UBT_AppManager_CS.model$AppManager_ApplicationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_ApplicationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ApplicationRecord = (function (_super) {
__extends(AppManager_ApplicationRecord, _super);
function AppManager_ApplicationRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ApplicationRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_Application", "appManager_ApplicationAttr", "AppManager_Application", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_ApplicationRec());
}, true, UBT_AppManager_DBModel.AppManager_ApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ApplicationRecord.fromStructure = function (str) {
return new AppManager_ApplicationRecord(new AppManager_ApplicationRecord.RecordClass({
appManager_ApplicationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ApplicationRecord._isAnonymousRecord = true;
AppManager_ApplicationRecord.UniqueId = "d53c5321-af24-39ba-124b-3c5caf3976a2";
AppManager_ApplicationRecord.init();
return AppManager_ApplicationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.AppManager_ApplicationRecord = AppManager_ApplicationRecord;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_UserCurrent_SubscriptionRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecordList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecordList, _super);
function Directory_UserCurrent_SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecordList.itemType = UBT_AppManager_CSModel.Directory_UserCurrent_SubscriptionRecord;
return Directory_UserCurrent_SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_SubscriptionRecordList = Directory_UserCurrent_SubscriptionRecordList;

});
define("UBT_AppManager_CS.model$Token2Record", ["exports", "OutSystems/ClientRuntime/Main", "Extension.JWT_TokenUtils.model", "UBT_AppManager_CS.model", "Extension.JWT_TokenUtils.model$TokenRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$JWT_TokenUtils"], function (exports, OutSystems, Extension_JWT_TokenUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Token2Record = (function (_super) {
__extends(Token2Record, _super);
function Token2Record(defaults) {
_super.apply(this, arguments);
}
Token2Record.attributesToDeclare = function () {
return [
this.attr("Token", "tokenAttr", "Token2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_JWT_TokenUtilsModel.TokenRec());
}, true, Extension_JWT_TokenUtilsModel.TokenRec)
].concat(_super.attributesToDeclare.call(this));
};
Token2Record.fromStructure = function (str) {
return new Token2Record(new Token2Record.RecordClass({
tokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Token2Record._isAnonymousRecord = true;
Token2Record.UniqueId = "d67d00ee-9c2b-7c24-9c81-bca258186103";
Token2Record.init();
return Token2Record;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Token2Record = Token2Record;

});
define("UBT_AppManager_CS.model$ServiceAction_OutputResultRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_CallResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_OutputResultRec = (function (_super) {
__extends(ServiceAction_OutputResultRec, _super);
function ServiceAction_OutputResultRec(defaults) {
_super.apply(this, arguments);
}
ServiceAction_OutputResultRec.attributesToDeclare = function () {
return [
this.attr("ServiceAction_CallResult", "serviceAction_CallResultAttr", "outputParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.ServiceAction_CallResultRec());
}, true, UBT_AppManager_CSModel.ServiceAction_CallResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAction_OutputResultRec.fromStructure = function (str) {
return new ServiceAction_OutputResultRec(new ServiceAction_OutputResultRec.RecordClass({
serviceAction_CallResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAction_OutputResultRec.init();
return ServiceAction_OutputResultRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ServiceAction_OutputResultRec = ServiceAction_OutputResultRec;

});
define("UBT_AppManager_CS.model$ServiceAction_OutputResultList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_OutputResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_OutputResultList = (function (_super) {
__extends(ServiceAction_OutputResultList, _super);
function ServiceAction_OutputResultList(defaults) {
_super.apply(this, arguments);
}
ServiceAction_OutputResultList.itemType = UBT_AppManager_CSModel.ServiceAction_OutputResultRec;
return ServiceAction_OutputResultList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ServiceAction_OutputResultList = ServiceAction_OutputResultList;

});
define("UBT_AppManager_CS.model$UserTokenList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$UserTokenRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserTokenList = (function (_super) {
__extends(UserTokenList, _super);
function UserTokenList(defaults) {
_super.apply(this, arguments);
}
UserTokenList.itemType = UBT_AppManager_DBModel.UserTokenRec;
return UserTokenList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UserTokenList = UserTokenList;

});
define("UBT_AppManager_CS.model$B2C_ErrorTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$B2C_ErrorTypeRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var B2C_ErrorTypeRecord = (function (_super) {
__extends(B2C_ErrorTypeRecord, _super);
function B2C_ErrorTypeRecord(defaults) {
_super.apply(this, arguments);
}
B2C_ErrorTypeRecord.attributesToDeclare = function () {
return [
this.attr("B2C_ErrorType", "b2C_ErrorTypeAttr", "B2C_ErrorType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.B2C_ErrorTypeRec());
}, true, UBT_AppManager_DBModel.B2C_ErrorTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
B2C_ErrorTypeRecord.fromStructure = function (str) {
return new B2C_ErrorTypeRecord(new B2C_ErrorTypeRecord.RecordClass({
b2C_ErrorTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
B2C_ErrorTypeRecord._isAnonymousRecord = true;
B2C_ErrorTypeRecord.UniqueId = "f1cc2d18-7c50-7d21-5a17-9137d99ab2cd";
B2C_ErrorTypeRecord.init();
return B2C_ErrorTypeRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.B2C_ErrorTypeRecord = B2C_ErrorTypeRecord;

});
define("UBT_AppManager_CS.model$B2C_ErrorTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$B2C_ErrorTypeRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var B2C_ErrorTypeRecordList = (function (_super) {
__extends(B2C_ErrorTypeRecordList, _super);
function B2C_ErrorTypeRecordList(defaults) {
_super.apply(this, arguments);
}
B2C_ErrorTypeRecordList.itemType = UBT_AppManager_CSModel.B2C_ErrorTypeRecord;
return B2C_ErrorTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.B2C_ErrorTypeRecordList = B2C_ErrorTypeRecordList;

});
define("UBT_AppManager_CS.model$AppManager_LoginResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_LoginResultRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_LoginResultRecordList = (function (_super) {
__extends(AppManager_LoginResultRecordList, _super);
function AppManager_LoginResultRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_LoginResultRecordList.itemType = UBT_AppManager_CSModel.AppManager_LoginResultRecord;
return AppManager_LoginResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_LoginResultRecordList = AppManager_LoginResultRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_UserCurrentRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecordList = (function (_super) {
__extends(Directory_UserCurrentRecordList, _super);
function Directory_UserCurrentRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecordList.itemType = UBT_AppManager_CSModel.Directory_UserCurrentRecord;
return Directory_UserCurrentRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrentRecordList = Directory_UserCurrentRecordList;

});
define("UBT_AppManager_CS.model$TokenValidationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$TokenValidationRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var TokenValidationRecordList = (function (_super) {
__extends(TokenValidationRecordList, _super);
function TokenValidationRecordList(defaults) {
_super.apply(this, arguments);
}
TokenValidationRecordList.itemType = UBT_AppManager_CSModel.TokenValidationRecord;
return TokenValidationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.TokenValidationRecordList = TokenValidationRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_GeographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Directory_UserCurrent_GeographyRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecordList = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecordList, _super);
function Directory_UserCurrent_GeographyRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecordList.itemType = UBT_AppManager_CSModel.Directory_UserCurrent_GeographyRecord;
return Directory_UserCurrent_GeographyRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_GeographyRecordList = Directory_UserCurrent_GeographyRecordList;

});
define("UBT_AppManager_CS.model$AppManager_IdpProviderList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_CS.model", "UBT_AppManager_DB.model$AppManager_IdpProviderRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_IdpProviderList = (function (_super) {
__extends(AppManager_IdpProviderList, _super);
function AppManager_IdpProviderList(defaults) {
_super.apply(this, arguments);
}
AppManager_IdpProviderList.itemType = UBT_AppManager_DBModel.AppManager_IdpProviderRec;
return AppManager_IdpProviderList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_IdpProviderList = AppManager_IdpProviderList;

});
define("UBT_AppManager_CS.model$FederatedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$FederatedRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FederatedRecordList = (function (_super) {
__extends(FederatedRecordList, _super);
function FederatedRecordList(defaults) {
_super.apply(this, arguments);
}
FederatedRecordList.itemType = UBT_AppManager_CSModel.FederatedRecord;
return FederatedRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FederatedRecordList = FederatedRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserDeviceAppManager_UserAppExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserDeviceAppManager_UserAppExtendedRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserDeviceAppManager_UserAppExtendedRecordList = (function (_super) {
__extends(AppManager_UserDeviceAppManager_UserAppExtendedRecordList, _super);
function AppManager_UserDeviceAppManager_UserAppExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserDeviceAppManager_UserAppExtendedRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserDeviceAppManager_UserAppExtendedRecord;
return AppManager_UserDeviceAppManager_UserAppExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserDeviceAppManager_UserAppExtendedRecordList = AppManager_UserDeviceAppManager_UserAppExtendedRecordList;

});
define("UBT_AppManager_CS.model$Espace_VersionEspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Espace_VersionEspaceRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Espace_VersionEspaceRecordList = (function (_super) {
__extends(Espace_VersionEspaceRecordList, _super);
function Espace_VersionEspaceRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionEspaceRecordList.itemType = UBT_AppManager_CSModel.Espace_VersionEspaceRecord;
return Espace_VersionEspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Espace_VersionEspaceRecordList = Espace_VersionEspaceRecordList;

});
define("UBT_AppManager_CS.model$Directory_MemberDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_MemberDetailsRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_MemberDetailsList = (function (_super) {
__extends(Directory_MemberDetailsList, _super);
function Directory_MemberDetailsList(defaults) {
_super.apply(this, arguments);
}
Directory_MemberDetailsList.itemType = APIDomain_Directory_ISModel.Directory_MemberDetailsRec;
return Directory_MemberDetailsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_MemberDetailsList = Directory_MemberDetailsList;

});
define("UBT_AppManager_CS.model$AppManager_ApplicationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_ApplicationRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_ApplicationRecordList = (function (_super) {
__extends(AppManager_ApplicationRecordList, _super);
function AppManager_ApplicationRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ApplicationRecordList.itemType = UBT_AppManager_CSModel.AppManager_ApplicationRecord;
return AppManager_ApplicationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_ApplicationRecordList = AppManager_ApplicationRecordList;

});
define("UBT_AppManager_CS.model$AppManager_UserInfoClientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserInfoClientRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserInfoClientRecordList = (function (_super) {
__extends(AppManager_UserInfoClientRecordList, _super);
function AppManager_UserInfoClientRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserInfoClientRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserInfoClientRecord;
return AppManager_UserInfoClientRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserInfoClientRecordList = AppManager_UserInfoClientRecordList;

});
define("UBT_AppManager_CS.model$Notification2Record", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$NotificationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Notification2Record = (function (_super) {
__extends(Notification2Record, _super);
function Notification2Record(defaults) {
_super.apply(this, arguments);
}
Notification2Record.attributesToDeclare = function () {
return [
this.attr("Notification", "notificationAttr", "Notification2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessageSenderModel.NotificationRec());
}, true, FirebaseCloudMessageSenderModel.NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
Notification2Record.fromStructure = function (str) {
return new Notification2Record(new Notification2Record.RecordClass({
notificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Notification2Record._isAnonymousRecord = true;
Notification2Record.UniqueId = "e3d19e00-ade7-6ded-0852-7031b8a08fba";
Notification2Record.init();
return Notification2Record;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.Notification2Record = Notification2Record;

});
define("UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_UserTokenSyncConfigAppManager_ApplicationRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList = (function (_super) {
__extends(AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList, _super);
function AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList.itemType = UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigAppManager_ApplicationRecord;
return AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList = AppManager_UserTokenSyncConfigAppManager_ApplicationRecordList;

});
define("UBT_AppManager_CS.model$ServiceAction_OutputResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_OutputResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_OutputResultRecord = (function (_super) {
__extends(ServiceAction_OutputResultRecord, _super);
function ServiceAction_OutputResultRecord(defaults) {
_super.apply(this, arguments);
}
ServiceAction_OutputResultRecord.attributesToDeclare = function () {
return [
this.attr("ServiceAction_OutputResult", "serviceAction_OutputResultAttr", "ServiceAction_OutputResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.ServiceAction_OutputResultRec());
}, true, UBT_AppManager_CSModel.ServiceAction_OutputResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAction_OutputResultRecord.fromStructure = function (str) {
return new ServiceAction_OutputResultRecord(new ServiceAction_OutputResultRecord.RecordClass({
serviceAction_OutputResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAction_OutputResultRecord._isAnonymousRecord = true;
ServiceAction_OutputResultRecord.UniqueId = "e6b992b1-8b89-395b-0716-f0bc7ad5bcea";
ServiceAction_OutputResultRecord.init();
return ServiceAction_OutputResultRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_CSModel.ServiceAction_OutputResultRecord = ServiceAction_OutputResultRecord;

});
define("UBT_AppManager_CS.model$FeatureFlagList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.LaunchDarkly_SDK.model", "UBT_AppManager_CS.model", "Extension.LaunchDarkly_SDK.model$FeatureFlagRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$LaunchDarkly_SDK"], function (exports, OutSystems, Extension_LaunchDarkly_SDKModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FeatureFlagList = (function (_super) {
__extends(FeatureFlagList, _super);
function FeatureFlagList(defaults) {
_super.apply(this, arguments);
}
FeatureFlagList.itemType = Extension_LaunchDarkly_SDKModel.FeatureFlagRec;
return FeatureFlagList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FeatureFlagList = FeatureFlagList;

});
define("UBT_AppManager_CS.model$Token2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Token2Record"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Token2RecordList = (function (_super) {
__extends(Token2RecordList, _super);
function Token2RecordList(defaults) {
_super.apply(this, arguments);
}
Token2RecordList.itemType = UBT_AppManager_CSModel.Token2Record;
return Token2RecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Token2RecordList = Token2RecordList;

});
define("UBT_AppManager_CS.model$PostROPCTokenResponse_B2C2List", ["exports", "OutSystems/ClientRuntime/Main", "AzureB2C_IS.model", "UBT_AppManager_CS.model", "AzureB2C_IS.model$PostROPCTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$AzureB2C_IS"], function (exports, OutSystems, AzureB2C_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostROPCTokenResponse_B2C2List = (function (_super) {
__extends(PostROPCTokenResponse_B2C2List, _super);
function PostROPCTokenResponse_B2C2List(defaults) {
_super.apply(this, arguments);
}
PostROPCTokenResponse_B2C2List.itemType = AzureB2C_ISModel.PostROPCTokenResponse_B2CRec;
return PostROPCTokenResponse_B2C2List;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostROPCTokenResponse_B2C2List = PostROPCTokenResponse_B2C2List;

});
define("UBT_AppManager_CS.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_AppManager_CS.model", "ServiceCenter.model$UserRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UserList = UserList;

});
define("UBT_AppManager_CS.model$ServiceAction_OutputResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$ServiceAction_OutputResultRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ServiceAction_OutputResultRecordList = (function (_super) {
__extends(ServiceAction_OutputResultRecordList, _super);
function ServiceAction_OutputResultRecordList(defaults) {
_super.apply(this, arguments);
}
ServiceAction_OutputResultRecordList.itemType = UBT_AppManager_CSModel.ServiceAction_OutputResultRecord;
return ServiceAction_OutputResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ServiceAction_OutputResultRecordList = ServiceAction_OutputResultRecordList;

});
define("UBT_AppManager_CS.model$Notification2List", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$NotificationRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Notification2List = (function (_super) {
__extends(Notification2List, _super);
function Notification2List(defaults) {
_super.apply(this, arguments);
}
Notification2List.itemType = FirebaseCloudMessageSenderModel.NotificationRec;
return Notification2List;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Notification2List = Notification2List;

});
define("UBT_AppManager_CS.model$Type_FCMExtraParameterList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Type_FCMExtraParameterRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Type_FCMExtraParameterList = (function (_super) {
__extends(Type_FCMExtraParameterList, _super);
function Type_FCMExtraParameterList(defaults) {
_super.apply(this, arguments);
}
Type_FCMExtraParameterList.itemType = UBT_AppManager_CSModel.Type_FCMExtraParameterRec;
return Type_FCMExtraParameterList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Type_FCMExtraParameterList = Type_FCMExtraParameterList;

});
define("UBT_AppManager_CS.model$FederatedList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_IS.model", "UBT_AppManager_CS.model", "UBT_AppManager_IS.model$FederatedRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_IS"], function (exports, OutSystems, UBT_AppManager_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var FederatedList = (function (_super) {
__extends(FederatedList, _super);
function FederatedList(defaults) {
_super.apply(this, arguments);
}
FederatedList.itemType = UBT_AppManager_ISModel.FederatedRec;
return FederatedList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.FederatedList = FederatedList;

});
define("UBT_AppManager_CS.model$SystemTokenRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$SystemTokenRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var SystemTokenRecordList = (function (_super) {
__extends(SystemTokenRecordList, _super);
function SystemTokenRecordList(defaults) {
_super.apply(this, arguments);
}
SystemTokenRecordList.itemType = UBT_AppManager_CSModel.SystemTokenRecord;
return SystemTokenRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.SystemTokenRecordList = SystemTokenRecordList;

});
define("UBT_AppManager_CS.model$PostROPCTokenResponse_B2CList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_IS.model", "UBT_AppManager_CS.model", "UBT_AppManager_IS.model$PostROPCTokenResponse_B2CRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBT_AppManager_IS"], function (exports, OutSystems, UBT_AppManager_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var PostROPCTokenResponse_B2CList = (function (_super) {
__extends(PostROPCTokenResponse_B2CList, _super);
function PostROPCTokenResponse_B2CList(defaults) {
_super.apply(this, arguments);
}
PostROPCTokenResponse_B2CList.itemType = UBT_AppManager_ISModel.PostROPCTokenResponse_B2CRec;
return PostROPCTokenResponse_B2CList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.PostROPCTokenResponse_B2CList = PostROPCTokenResponse_B2CList;

});
define("UBT_AppManager_CS.model$ExtraDataItem2List", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessageSender.model", "UBT_AppManager_CS.model", "FirebaseCloudMessageSender.model$ExtraDataItemRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$FirebaseCloudMessageSender"], function (exports, OutSystems, FirebaseCloudMessageSenderModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var ExtraDataItem2List = (function (_super) {
__extends(ExtraDataItem2List, _super);
function ExtraDataItem2List(defaults) {
_super.apply(this, arguments);
}
ExtraDataItem2List.itemType = FirebaseCloudMessageSenderModel.ExtraDataItemRec;
return ExtraDataItem2List;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.ExtraDataItem2List = ExtraDataItem2List;

});
define("UBT_AppManager_CS.model$Notification2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$Notification2Record"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Notification2RecordList = (function (_super) {
__extends(Notification2RecordList, _super);
function Notification2RecordList(defaults) {
_super.apply(this, arguments);
}
Notification2RecordList.itemType = UBT_AppManager_CSModel.Notification2Record;
return Notification2RecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Notification2RecordList = Notification2RecordList;

});
define("UBT_AppManager_CS.model$UBT_MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBT_AppManager_CS.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeList = (function (_super) {
__extends(UBT_MessageTypeList, _super);
function UBT_MessageTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRec;
return UBT_MessageTypeList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.UBT_MessageTypeList = UBT_MessageTypeList;

});
define("UBT_AppManager_CS.model$AppManager_IdpProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_IdpProviderRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_IdpProviderRecordList = (function (_super) {
__extends(AppManager_IdpProviderRecordList, _super);
function AppManager_IdpProviderRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_IdpProviderRecordList.itemType = UBT_AppManager_CSModel.AppManager_IdpProviderRecord;
return AppManager_IdpProviderRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_IdpProviderRecordList = AppManager_IdpProviderRecordList;

});
define("UBT_AppManager_CS.model$Directory_UserCurrent_SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBT_AppManager_CS.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBT_AppManager_CS.referencesHealth", "UBT_AppManager_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionList, _super);
function Directory_UserCurrent_SubscriptionList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec;
return Directory_UserCurrent_SubscriptionList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.Directory_UserCurrent_SubscriptionList = Directory_UserCurrent_SubscriptionList;

});
define("UBT_AppManager_CS.model$AppManager_LoginResultList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$AppManager_LoginResultRec"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var AppManager_LoginResultList = (function (_super) {
__extends(AppManager_LoginResultList, _super);
function AppManager_LoginResultList(defaults) {
_super.apply(this, arguments);
}
AppManager_LoginResultList.itemType = UBT_AppManager_CSModel.AppManager_LoginResultRec;
return AppManager_LoginResultList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.AppManager_LoginResultList = AppManager_LoginResultList;

});
define("UBT_AppManager_CS.model$LicenseListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_CS.model$LicenseListRecord"], function (exports, OutSystems, UBT_AppManager_CSModel) {
var OS = OutSystems.Internal;
var LicenseListRecordList = (function (_super) {
__extends(LicenseListRecordList, _super);
function LicenseListRecordList(defaults) {
_super.apply(this, arguments);
}
LicenseListRecordList.itemType = UBT_AppManager_CSModel.LicenseListRecord;
return LicenseListRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_CSModel.LicenseListRecordList = LicenseListRecordList;

});
define("UBT_AppManager_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBT_AppManager_CSModel = exports;
Object.defineProperty(UBT_AppManager_CSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["6ee4de6d-f81b-4152-a030-1ece7292942b"];
}
});

UBT_AppManager_CSModel.staticEntities = {};
UBT_AppManager_CSModel.staticEntities.type_FCMExtraParameter = {};
var getType_FCMExtraParameterRecord = function (record) {
return UBT_AppManager_CSModel.module.staticEntities["f462f851-d1df-417b-b038-a20db61e5ac1"][record];
};
Object.defineProperty(UBT_AppManager_CSModel.staticEntities.type_FCMExtraParameter, "notificationIcon", {
get: function () {
return getType_FCMExtraParameterRecord("4b81e811-b85a-4f36-b72a-bc4cf87c5ffe");
}
});

UBT_AppManager_CSModel.staticEntities.uBT_MessageType = {};
var getUBT_MessageTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["2c2986c3-daaf-4dc5-a0c6-d9a75a42125d"].staticEntities["5a451e53-0d4f-4a13-8dcd-d2c12db5eb4f"][record];
};
Object.defineProperty(UBT_AppManager_CSModel.staticEntities.uBT_MessageType, "error", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("11de012f-8214-4480-bc41-e674f8463a2a"));
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.uBT_MessageType, "success", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("232e2df8-4514-48c8-bd5d-136ff9bc8cf0"));
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.uBT_MessageType, "info", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("b69f4bc5-4211-4808-ae64-b62df5426873"));
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.uBT_MessageType, "warning", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("d02ae75c-15a9-4617-abb2-814d976949d2"));
}
});

UBT_AppManager_CSModel.staticEntities.b2C_ErrorType = {};
var getB2C_ErrorTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["0d4b5083-219c-4320-8402-e1910aa4e5b0"][record];
};
Object.defineProperty(UBT_AppManager_CSModel.staticEntities.b2C_ErrorType, "resetPassword", {
get: function () {
return getB2C_ErrorTypeRecord("01c98835-d48f-4cc6-ba02-a2c377330a10");
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.b2C_ErrorType, "scriptError", {
get: function () {
return getB2C_ErrorTypeRecord("1c36b345-eab9-466d-9bf0-cfc2abe014a5");
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.b2C_ErrorType, "invalidPolicyForToken", {
get: function () {
return getB2C_ErrorTypeRecord("3c6db2c7-331d-4ac1-9eaf-790be61ed602");
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.b2C_ErrorType, "cancelled", {
get: function () {
return getB2C_ErrorTypeRecord("4d5cf0b5-8582-4ad4-af1e-a04fba4a1b71");
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.b2C_ErrorType, "unkown", {
get: function () {
return getB2C_ErrorTypeRecord("cdc77697-fff2-40cf-bacd-912ef4f807f3");
}
});

UBT_AppManager_CSModel.staticEntities.appManager_FRD_Event = {};
var getAppManager_FRD_EventRecord = function (record) {
return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["34f7f12d-fd7a-488d-8468-963e690bf256"][record];
};
Object.defineProperty(UBT_AppManager_CSModel.staticEntities.appManager_FRD_Event, "logOut", {
get: function () {
return getAppManager_FRD_EventRecord("3b5b8939-2eb7-4180-bf27-9968950b6e9f");
}
});

UBT_AppManager_CSModel.staticEntities.appManager_IdpProvider = {};
var getAppManager_IdpProviderRecord = function (record) {
return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["a8868974-edc4-4d46-8929-9e794aaeeb1e"][record];
};
Object.defineProperty(UBT_AppManager_CSModel.staticEntities.appManager_IdpProvider, "azureB2C", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAppManager_IdpProviderRecord("55b1849e-1a70-47ed-a3cd-ed55369e7fae"));
}
});

Object.defineProperty(UBT_AppManager_CSModel.staticEntities.appManager_IdpProvider, "frontEgg", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAppManager_IdpProviderRecord("efadda25-9a40-4a8b-a349-84f6be74bc82"));
}
});

});
