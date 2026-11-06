define("UBT_AppManager_DB.model$SystemTokenRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var SystemTokenRec = (function (_super) {
__extends(SystemTokenRec, _super);
function SystemTokenRec(defaults) {
_super.apply(this, arguments);
}
SystemTokenRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SystemUsername", "systemUsernameAttr", "SystemUsername", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TokenType", "tokenTypeAttr", "TokenType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccessToken", "accessTokenAttr", "AccessToken", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RefreshToken", "refreshTokenAttr", "RefreshToken", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IssuedDateTime", "issuedDateTimeAttr", "IssuedDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ExpireDateTime", "expireDateTimeAttr", "ExpireDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsInvalidated", "isInvalidatedAttr", "IsInvalidated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SystemTokenRec.init();
return SystemTokenRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.SystemTokenRec = SystemTokenRec;

});
define("UBT_AppManager_DB.model$AppManager_UserTokenSyncConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_UserTokenSyncConfigRec = (function (_super) {
__extends(AppManager_UserTokenSyncConfigRec, _super);
function AppManager_UserTokenSyncConfigRec(defaults) {
_super.apply(this, arguments);
}
AppManager_UserTokenSyncConfigRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("JSONConfig", "jSONConfigAttr", "JSONConfig", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserTokenSyncConfigRec.init();
return AppManager_UserTokenSyncConfigRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_UserTokenSyncConfigRec = AppManager_UserTokenSyncConfigRec;

});
define("UBT_AppManager_DB.model$OperationOwnersRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var OperationOwnersRec = (function (_super) {
__extends(OperationOwnersRec, _super);
function OperationOwnersRec(defaults) {
_super.apply(this, arguments);
}
OperationOwnersRec.attributesToDeclare = function () {
return [
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OperationOwnersRec.init();
return OperationOwnersRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.OperationOwnersRec = OperationOwnersRec;

});
define("UBT_AppManager_DB.model$AppManager_AzureB2C_ConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_AzureB2C_ConfigRec = (function (_super) {
__extends(AppManager_AzureB2C_ConfigRec, _super);
function AppManager_AzureB2C_ConfigRec(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureB2C_ConfigRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AzureB2C_AppName", "azureB2C_AppNameAttr", "AzureB2C_AppName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AzureB2C_ClientId", "azureB2C_ClientIdAttr", "AzureB2C_ClientId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AzureB2C_ClientSecret", "azureB2C_ClientSecretAttr", "AzureB2C_ClientSecret", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AzureB2C_Policy_Login", "azureB2C_Policy_LoginAttr", "AzureB2C_Policy_Login", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AzureB2C_Policy_ResetPass", "azureB2C_Policy_ResetPassAttr", "AzureB2C_Policy_ResetPass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_AzureB2C_ConfigRec.init();
return AppManager_AzureB2C_ConfigRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_AzureB2C_ConfigRec = AppManager_AzureB2C_ConfigRec;

});
define("UBT_AppManager_DB.model$AppManager_UserExtendedRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_UserExtendedRec = (function (_super) {
__extends(AppManager_UserExtendedRec, _super);
function AppManager_UserExtendedRec(defaults) {
_super.apply(this, arguments);
}
AppManager_UserExtendedRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("isCommunityMember", "isCommunityMemberAttr", "isCommunityMember", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ContactBaseId", "contactBaseIdAttr", "ContactBaseId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
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
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserExtendedRec.init();
return AppManager_UserExtendedRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_UserExtendedRec = AppManager_UserExtendedRec;

});
define("UBT_AppManager_DB.model$AppManager_UserAppExtendedRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_UserAppExtendedRec = (function (_super) {
__extends(AppManager_UserAppExtendedRec, _super);
function AppManager_UserAppExtendedRec(defaults) {
_super.apply(this, arguments);
}
AppManager_UserAppExtendedRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("isLocked", "isLockedAttr", "isLocked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AppManagerApplicationId", "appManagerApplicationIdAttr", "AppManagerApplicationId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("FirebaseRealTimeDB_Token", "firebaseRealTimeDB_TokenAttr", "FirebaseRealTimeDB_Token", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExternalPermissionsListJSON", "externalPermissionsListJSONAttr", "ExternalPermissionsListJSON", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExternalLicenseListJSON", "externalLicenseListJSONAttr", "ExternalLicenseListJSON", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastLoginOperationGUID", "lastLoginOperationGUIDAttr", "LastLoginOperationGUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserAppExtendedRec.init();
return AppManager_UserAppExtendedRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_UserAppExtendedRec = AppManager_UserAppExtendedRec;

});
define("UBT_AppManager_DB.model$AppManager_AzureInsightsEventRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_AzureInsightsEventRec = (function (_super) {
__extends(AppManager_AzureInsightsEventRec, _super);
function AppManager_AzureInsightsEventRec(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureInsightsEventRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_AzureInsightsEventRec.fromStructure = function (str) {
return new AppManager_AzureInsightsEventRec(new AppManager_AzureInsightsEventRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_AzureInsightsEventRec.init();
return AppManager_AzureInsightsEventRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec = AppManager_AzureInsightsEventRec;

});
define("UBT_AppManager_DB.model$AppManager_IdpProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_IdpProviderRec = (function (_super) {
__extends(AppManager_IdpProviderRec, _super);
function AppManager_IdpProviderRec(defaults) {
_super.apply(this, arguments);
}
AppManager_IdpProviderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_IdpProviderRec.init();
return AppManager_IdpProviderRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_IdpProviderRec = AppManager_IdpProviderRec;

});
define("UBT_AppManager_DB.model$AppManager_Application_EspaceRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_Application_EspaceRec = (function (_super) {
__extends(AppManager_Application_EspaceRec, _super);
function AppManager_Application_EspaceRec(defaults) {
_super.apply(this, arguments);
}
AppManager_Application_EspaceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AppManagerApplicationId", "appManagerApplicationIdAttr", "AppManagerApplicationId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Application_EspaceRec.init();
return AppManager_Application_EspaceRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_Application_EspaceRec = AppManager_Application_EspaceRec;

});
define("UBT_AppManager_DB.model$UserTokenRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var UserTokenRec = (function (_super) {
__extends(UserTokenRec, _super);
function UserTokenRec(defaults) {
_super.apply(this, arguments);
}
UserTokenRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TokenType", "tokenTypeAttr", "TokenType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccessToken", "accessTokenAttr", "AccessToken", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IdToken", "idTokenAttr", "IdToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RefreshToken", "refreshTokenAttr", "RefreshToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IssuedDateTime", "issuedDateTimeAttr", "IssuedDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ExpireDateTime", "expireDateTimeAttr", "ExpireDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsInvalidated", "isInvalidatedAttr", "IsInvalidated", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserTokenRec.init();
return UserTokenRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.UserTokenRec = UserTokenRec;

});
define("UBT_AppManager_DB.model$AppManager_Firebase_Config_FileRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_Config_FileRec = (function (_super) {
__extends(AppManager_Firebase_Config_FileRec, _super);
function AppManager_Firebase_Config_FileRec(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_Config_FileRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Binary", "binaryAttr", "Binary", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Firebase_Config_FileRec.init();
return AppManager_Firebase_Config_FileRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_Firebase_Config_FileRec = AppManager_Firebase_Config_FileRec;

});
define("UBT_AppManager_DB.model$AppManager_Applications_ExpectedClaimRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedClaimRec = (function (_super) {
__extends(AppManager_Applications_ExpectedClaimRec, _super);
function AppManager_Applications_ExpectedClaimRec(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedClaimRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ClaimName", "claimNameAttr", "ClaimName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ClaimExpectedValue", "claimExpectedValueAttr", "ClaimExpectedValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AppManagerApplicationId", "appManagerApplicationIdAttr", "AppManagerApplicationId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Applications_ExpectedClaimRec.init();
return AppManager_Applications_ExpectedClaimRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_Applications_ExpectedClaimRec = AppManager_Applications_ExpectedClaimRec;

});
define("UBT_AppManager_DB.model$B2C_ErrorTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var B2C_ErrorTypeRec = (function (_super) {
__extends(B2C_ErrorTypeRec, _super);
function B2C_ErrorTypeRec(defaults) {
_super.apply(this, arguments);
}
B2C_ErrorTypeRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
B2C_ErrorTypeRec.init();
return B2C_ErrorTypeRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.B2C_ErrorTypeRec = B2C_ErrorTypeRec;

});
define("UBT_AppManager_DB.model$AppManager_UserDeviceRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_UserDeviceRec = (function (_super) {
__extends(AppManager_UserDeviceRec, _super);
function AppManager_UserDeviceRec(defaults) {
_super.apply(this, arguments);
}
AppManager_UserDeviceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AppManagerUserExtendedId", "appManagerUserExtendedIdAttr", "AppManagerUserExtendedId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UUID", "uUIDAttr", "UUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FCMToken", "fCMTokenAttr", "FCMToken", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
this.attr("Browser", "browserAttr", "Browser", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserAgent", "userAgentAttr", "UserAgent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegisteredOn", "registeredOnAttr", "RegisteredOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastCheckedOn", "lastCheckedOnAttr", "LastCheckedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("S3_TOTP_LastValidCheckOn", "s3_TOTP_LastValidCheckOnAttr", "S3_TOTP_LastValidCheckOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("S3_TOTP_LastFailedCheckOn", "s3_TOTP_LastFailedCheckOnAttr", "S3_TOTP_LastFailedCheckOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("S3_TOTP_ConsecutiveFailures", "s3_TOTP_ConsecutiveFailuresAttr", "S3_TOTP_ConsecutiveFailures", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("S3_TOTP_LastError", "s3_TOTP_LastErrorAttr", "S3_TOTP_LastError", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RemovedOn", "removedOnAttr", "RemovedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("isActive", "isActiveAttr", "isActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_UserDeviceRec.init();
return AppManager_UserDeviceRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_UserDeviceRec = AppManager_UserDeviceRec;

});
define("UBT_AppManager_DB.model$AppManager_Firebase_ConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_Firebase_ConfigRec = (function (_super) {
__extends(AppManager_Firebase_ConfigRec, _super);
function AppManager_Firebase_ConfigRec(defaults) {
_super.apply(this, arguments);
}
AppManager_Firebase_ConfigRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Firebase_AppName", "firebase_AppNameAttr", "Firebase_AppName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_ProjectId", "firebase_ProjectIdAttr", "Firebase_ProjectId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_ClientEmail", "firebase_ClientEmailAttr", "Firebase_ClientEmail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_RealTimeDB_URL", "firebase_RealTimeDB_URLAttr", "Firebase_RealTimeDB_URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_RealTimeDB_APIKey", "firebase_RealTimeDB_APIKeyAttr", "Firebase_RealTimeDB_APIKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Firebase_PrivateKey", "firebase_PrivateKeyAttr", "Firebase_PrivateKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Firebase_ConfigRec.init();
return AppManager_Firebase_ConfigRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_Firebase_ConfigRec = AppManager_Firebase_ConfigRec;

});
define("UBT_AppManager_DB.model$AppManager_Applications_ExpectedPermissionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_Applications_ExpectedPermissionsRec = (function (_super) {
__extends(AppManager_Applications_ExpectedPermissionsRec, _super);
function AppManager_Applications_ExpectedPermissionsRec(defaults) {
_super.apply(this, arguments);
}
AppManager_Applications_ExpectedPermissionsRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PermissionName", "permissionNameAttr", "PermissionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AppManagerApplicationId", "appManagerApplicationIdAttr", "AppManagerApplicationId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_Applications_ExpectedPermissionsRec.init();
return AppManager_Applications_ExpectedPermissionsRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_Applications_ExpectedPermissionsRec = AppManager_Applications_ExpectedPermissionsRec;

});
define("UBT_AppManager_DB.model$AppManager_ApplicationRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_ApplicationRec = (function (_super) {
__extends(AppManager_ApplicationRec, _super);
function AppManager_ApplicationRec(defaults) {
_super.apply(this, arguments);
}
AppManager_ApplicationRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ConfigurationName", "configurationNameAttr", "ConfigurationName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IdpProviderId", "idpProviderIdAttr", "IdpProviderId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AzureB2C_ConfigId", "azureB2C_ConfigIdAttr", "AzureB2C_ConfigId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Firebase_ConfigId", "firebase_ConfigIdAttr", "Firebase_ConfigId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BaseURL", "baseURLAttr", "BaseURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FrontEgg_AppId", "frontEgg_AppIdAttr", "FrontEgg_AppId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("APIM_SubscriptionKey", "aPIM_SubscriptionKeyAttr", "APIM_SubscriptionKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("APIM_SubscriptionKey_CB", "aPIM_SubscriptionKey_CBAttr", "APIM_SubscriptionKey_CB", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Streamline_ByPassClaim", "streamline_ByPassClaimAttr", "Streamline_ByPassClaim", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Streamline_IsEnforce", "streamline_IsEnforceAttr", "Streamline_IsEnforce", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Streamline_TOTP_LoginCheck", "streamline_TOTP_LoginCheckAttr", "Streamline_TOTP_LoginCheck", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Streamline_TOTP_LoginAttempt", "streamline_TOTP_LoginAttemptAttr", "Streamline_TOTP_LoginAttempt", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Streamline_TOTP_Debounce", "streamline_TOTP_DebounceAttr", "Streamline_TOTP_Debounce", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Streamline_TOTP_IgnoreAPIFai", "streamline_TOTP_IgnoreAPIFaiAttr", "Streamline_TOTP_IgnoreAPIFai", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeviceAwareness_IsEnforce", "deviceAwareness_IsEnforceAttr", "DeviceAwareness_IsEnforce", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeviceAwareness_MaxNumber", "deviceAwareness_MaxNumberAttr", "DeviceAwareness_MaxNumber", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DeviceAwareness_ByPassClaim", "deviceAwareness_ByPassClaimAttr", "DeviceAwareness_ByPassClaim", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Community_IsEnforce", "community_IsEnforceAttr", "Community_IsEnforce", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Firebase_RealTimeDB_Use", "firebase_RealTimeDB_UseAttr", "Firebase_RealTimeDB_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Firebase_CloudMsg_Use", "firebase_CloudMsg_UseAttr", "Firebase_CloudMsg_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AzureInsights_Use", "azureInsights_UseAttr", "AzureInsights_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AzureInsights_ConnString", "azureInsights_ConnStringAttr", "AzureInsights_ConnString", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AppManagerUserTokenSyncConfi", "appManagerUserTokenSyncConfiAttr", "AppManagerUserTokenSyncConfi", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SyncWithContactBase", "syncWithContactBaseAttr", "SyncWithContactBase", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SyncWithDirectory", "syncWithDirectoryAttr", "SyncWithDirectory", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_Use", "pIN_UseAttr", "PIN_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_SessionInactivity_Use", "pIN_SessionInactivity_UseAttr", "PIN_SessionInactivity_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_SessionInactivity_Second", "pIN_SessionInactivity_SecondAttr", "PIN_SessionInactivity_Second", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PIN_SessionInactivity_Naviga", "pIN_SessionInactivity_NavigaAttr", "PIN_SessionInactivity_Naviga", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_EnableFingerprint", "pIN_EnableFingerprintAttr", "PIN_EnableFingerprint", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PIN_EnforceOnReady", "pIN_EnforceOnReadyAttr", "PIN_EnforceOnReady", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LaunchDarkly_Use", "launchDarkly_UseAttr", "LaunchDarkly_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LaunchDarkly_APIKey", "launchDarkly_APIKeyAttr", "LaunchDarkly_APIKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LaunchDarkly_UseContactBaseI", "launchDarkly_UseContactBaseIAttr", "LaunchDarkly_UseContactBaseI", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PostLoginLogic_Use", "postLoginLogic_UseAttr", "PostLoginLogic_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PostLoginLogic_ModuleName", "postLoginLogic_ModuleNameAttr", "PostLoginLogic_ModuleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PostLoginLogic_ServiceAction", "postLoginLogic_ServiceActionAttr", "PostLoginLogic_ServiceAction", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SystemOperationsUsername", "systemOperationsUsernameAttr", "SystemOperationsUsername", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SystemOperationsPassword", "systemOperationsPasswordAttr", "SystemOperationsPassword", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CustomCallback", "customCallbackAttr", "CustomCallback", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FeatureToggle_Use", "featureToggle_UseAttr", "FeatureToggle_Use", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
this.attr("PrivacyScreen_ByPassClaim", "privacyScreen_ByPassClaimAttr", "PrivacyScreen_ByPassClaim", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdatedOn", "lastUpdatedOnAttr", "LastUpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ApplicationRec.init();
return AppManager_ApplicationRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_ApplicationRec = AppManager_ApplicationRec;

});
define("UBT_AppManager_DB.model$AppManager_FRD_EventRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model"], function (exports, OutSystems, UBT_AppManager_DBModel) {
var OS = OutSystems.Internal;
var AppManager_FRD_EventRec = (function (_super) {
__extends(AppManager_FRD_EventRec, _super);
function AppManager_FRD_EventRec(defaults) {
_super.apply(this, arguments);
}
AppManager_FRD_EventRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_FRD_EventRec.fromStructure = function (str) {
return new AppManager_FRD_EventRec(new AppManager_FRD_EventRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_FRD_EventRec.init();
return AppManager_FRD_EventRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_DBModel.AppManager_FRD_EventRec = AppManager_FRD_EventRec;

});
define("UBT_AppManager_DB.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBT_AppManager_DBModel = exports;
});
