define("UBT_AppManager.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getFirebase_ProjectId = function () {
return clientVarsService.getVariable("Firebase_ProjectId", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFirebase_ProjectId = function (value) {
return clientVarsService.setVariable("Firebase_ProjectId", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getOutSystems_Environment = function () {
return clientVarsService.getVariable("OutSystems_Environment", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setOutSystems_Environment = function (value) {
return clientVarsService.setVariable("OutSystems_Environment", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_Platform = function () {
return clientVarsService.getVariable("DeviceInfo_Platform", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_Platform = function (value) {
return clientVarsService.setVariable("DeviceInfo_Platform", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAppManager_OAuth_EndPoint = function () {
return clientVarsService.getVariable("AppManager_OAuth_EndPoint", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_OAuth_EndPoint = function (value) {
return clientVarsService.setVariable("AppManager_OAuth_EndPoint", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getMinWebViewVersion_Safari = function () {
return clientVarsService.getVariable("MinWebViewVersion_Safari", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setMinWebViewVersion_Safari = function (value) {
return clientVarsService.setVariable("MinWebViewVersion_Safari", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getOutSystems_LastURL = function () {
return clientVarsService.getVariable("OutSystems_LastURL", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setOutSystems_LastURL = function (value) {
return clientVarsService.setVariable("OutSystems_LastURL", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAppManager_ContactBaseId = function () {
return clientVarsService.getVariable("AppManager_ContactBaseId", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_ContactBaseId = function (value) {
return clientVarsService.setVariable("AppManager_ContactBaseId", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getFrontEgg_AppId = function () {
return clientVarsService.getVariable("FrontEgg_AppId", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFrontEgg_AppId = function (value) {
return clientVarsService.setVariable("FrontEgg_AppId", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getLicenses_List = function () {
return clientVarsService.getVariable("Licenses_List", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setLicenses_List = function (value) {
return clientVarsService.setVariable("Licenses_List", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_UserAgent = function () {
return clientVarsService.getVariable("DeviceInfo_UserAgent", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_UserAgent = function (value) {
return clientVarsService.setVariable("DeviceInfo_UserAgent", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAppManager_UserExternalId = function () {
return clientVarsService.getVariable("AppManager_UserExternalId", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_UserExternalId = function (value) {
return clientVarsService.setVariable("AppManager_UserExternalId", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAzureB2C_ClientId = function () {
return clientVarsService.getVariable("AzureB2C_ClientId", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAzureB2C_ClientId = function (value) {
return clientVarsService.setVariable("AzureB2C_ClientId", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_MobileVersion = function () {
return clientVarsService.getVariable("DeviceInfo_MobileVersion", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_MobileVersion = function (value) {
return clientVarsService.setVariable("DeviceInfo_MobileVersion", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_FingerprintReaderAvailable_IsPersistent = function () {
return clientVarsService.getVariable("PIN_FingerprintReaderAvailable_IsPersistent", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_FingerprintReaderAvailable_IsPersistent = function (value) {
return clientVarsService.setVariable("PIN_FingerprintReaderAvailable_IsPersistent", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getDeviceInfo_MobileBuild = function () {
return clientVarsService.getVariable("DeviceInfo_MobileBuild", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_MobileBuild = function (value) {
return clientVarsService.setVariable("DeviceInfo_MobileBuild", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getStreamline_SerialNumber = function () {
return clientVarsService.getVariable("Streamline_SerialNumber", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setStreamline_SerialNumber = function (value) {
return clientVarsService.setVariable("Streamline_SerialNumber", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAppManager_MemberId = function () {
return clientVarsService.getVariable("AppManager_MemberId", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_MemberId = function (value) {
return clientVarsService.setVariable("AppManager_MemberId", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getFirebase_RealtimeDatabase_Token = function () {
return clientVarsService.getVariable("Firebase_RealtimeDatabase_Token", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFirebase_RealtimeDatabase_Token = function (value) {
return clientVarsService.setVariable("Firebase_RealtimeDatabase_Token", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAppManager_AppBaseURL = function () {
return clientVarsService.getVariable("AppManager_AppBaseURL", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_AppBaseURL = function (value) {
return clientVarsService.setVariable("AppManager_AppBaseURL", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_UUID = function () {
return clientVarsService.getVariable("DeviceInfo_UUID", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_UUID = function (value) {
return clientVarsService.setVariable("DeviceInfo_UUID", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_IsLocked = function () {
return clientVarsService.getVariable("PIN_IsLocked", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, false);
};
ClientVariables.prototype.setPIN_IsLocked = function (value) {
return clientVarsService.setVariable("PIN_IsLocked", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getAppManager_UserExtended = function () {
return clientVarsService.getVariable("AppManager_UserExtended", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_UserExtended = function (value) {
return clientVarsService.setVariable("AppManager_UserExtended", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPermissions_List = function () {
return clientVarsService.getVariable("Permissions_List", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setPermissions_List = function (value) {
return clientVarsService.setVariable("Permissions_List", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_IsRegistering = function () {
return clientVarsService.getVariable("PIN_IsRegistering", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_IsRegistering = function (value) {
return clientVarsService.setVariable("PIN_IsRegistering", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getOutSystems_RuntimeVersion = function () {
return clientVarsService.getVariable("OutSystems_RuntimeVersion", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setOutSystems_RuntimeVersion = function (value) {
return clientVarsService.setVariable("OutSystems_RuntimeVersion", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_IsRunningAsPWA = function () {
return clientVarsService.getVariable("DeviceInfo_IsRunningAsPWA", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setDeviceInfo_IsRunningAsPWA = function (value) {
return clientVarsService.setVariable("DeviceInfo_IsRunningAsPWA", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getAppManager_EspaceName = function () {
return clientVarsService.getVariable("AppManager_EspaceName", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_EspaceName = function (value) {
return clientVarsService.setVariable("AppManager_EspaceName", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getFirebase_CloudMessage_Token = function () {
return clientVarsService.getVariable("Firebase_CloudMessage_Token", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFirebase_CloudMessage_Token = function (value) {
return clientVarsService.setVariable("Firebase_CloudMessage_Token", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getStreamline_TOTPOnLogin = function () {
return clientVarsService.getVariable("Streamline_TOTPOnLogin", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setStreamline_TOTPOnLogin = function (value) {
return clientVarsService.setVariable("Streamline_TOTPOnLogin", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getMinNativeAppVersion = function () {
return clientVarsService.getVariable("MinNativeAppVersion", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setMinNativeAppVersion = function (value) {
return clientVarsService.setVariable("MinNativeAppVersion", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_Use = function () {
return clientVarsService.getVariable("PIN_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_Use = function (value) {
return clientVarsService.setVariable("PIN_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getStreamline_IsInstalled = function () {
return clientVarsService.getVariable("Streamline_IsInstalled", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setStreamline_IsInstalled = function (value) {
return clientVarsService.setVariable("Streamline_IsInstalled", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getAzureB2C_ResetPassPolicy = function () {
return clientVarsService.getVariable("AzureB2C_ResetPassPolicy", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAzureB2C_ResetPassPolicy = function (value) {
return clientVarsService.setVariable("AzureB2C_ResetPassPolicy", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_PackageName = function () {
return clientVarsService.getVariable("DeviceInfo_PackageName", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_PackageName = function (value) {
return clientVarsService.setVariable("DeviceInfo_PackageName", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_EnforceOnReady = function () {
return clientVarsService.getVariable("PIN_EnforceOnReady", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_EnforceOnReady = function (value) {
return clientVarsService.setVariable("PIN_EnforceOnReady", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getAzureB2C_LoginPolicy = function () {
return clientVarsService.getVariable("AzureB2C_LoginPolicy", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAzureB2C_LoginPolicy = function (value) {
return clientVarsService.setVariable("AzureB2C_LoginPolicy", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDeviceInfo_Browser = function () {
return clientVarsService.getVariable("DeviceInfo_Browser", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setDeviceInfo_Browser = function (value) {
return clientVarsService.setVariable("DeviceInfo_Browser", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_SessionInactivity_Seconds = function () {
return clientVarsService.getVariable("PIN_SessionInactivity_Seconds", "UBT_AppManager", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setPIN_SessionInactivity_Seconds = function (value) {
return clientVarsService.setVariable("PIN_SessionInactivity_Seconds", "UBT_AppManager", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getPIN_EnableFingerprint = function () {
return clientVarsService.getVariable("PIN_EnableFingerprint", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_EnableFingerprint = function (value) {
return clientVarsService.setVariable("PIN_EnableFingerprint", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getDeviceInfo_IsNative = function () {
return clientVarsService.getVariable("DeviceInfo_IsNative", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setDeviceInfo_IsNative = function (value) {
return clientVarsService.setVariable("DeviceInfo_IsNative", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getPIN_SessionInactivity_Use = function () {
return clientVarsService.getVariable("PIN_SessionInactivity_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_SessionInactivity_Use = function (value) {
return clientVarsService.setVariable("PIN_SessionInactivity_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getPIN_SessionInactivity_Navigate = function () {
return clientVarsService.getVariable("PIN_SessionInactivity_Navigate", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setPIN_SessionInactivity_Navigate = function (value) {
return clientVarsService.setVariable("PIN_SessionInactivity_Navigate", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getAppManager_CustomCallback = function () {
return clientVarsService.getVariable("AppManager_CustomCallback", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_CustomCallback = function (value) {
return clientVarsService.setVariable("AppManager_CustomCallback", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getFirebase_RealtimeDatabase_Use = function () {
return clientVarsService.getVariable("Firebase_RealtimeDatabase_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFirebase_RealtimeDatabase_Use = function (value) {
return clientVarsService.setVariable("Firebase_RealtimeDatabase_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAppManager_Username = function () {
return clientVarsService.getVariable("AppManager_Username", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_Username = function (value) {
return clientVarsService.setVariable("AppManager_Username", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getPIN_HasUnlocked = function () {
return clientVarsService.getVariable("PIN_HasUnlocked", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, false);
};
ClientVariables.prototype.setPIN_HasUnlocked = function (value) {
return clientVarsService.setVariable("PIN_HasUnlocked", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getFirebase_RealtimeDatabase_StartedOn = function () {
return clientVarsService.getVariable("Firebase_RealtimeDatabase_StartedOn", "UBT_AppManager", OS.DataTypes.DataTypes.DateTime);
};
ClientVariables.prototype.setFirebase_RealtimeDatabase_StartedOn = function (value) {
return clientVarsService.setVariable("Firebase_RealtimeDatabase_StartedOn", "UBT_AppManager", OS.DataTypes.DataTypes.DateTime, value);
};
ClientVariables.prototype.getFrontEgg_CodeVerifier = function () {
return clientVarsService.getVariable("FrontEgg_CodeVerifier", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFrontEgg_CodeVerifier = function (value) {
return clientVarsService.setVariable("FrontEgg_CodeVerifier", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getMinWebViewVersion_Chrome = function () {
return clientVarsService.getVariable("MinWebViewVersion_Chrome", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setMinWebViewVersion_Chrome = function (value) {
return clientVarsService.setVariable("MinWebViewVersion_Chrome", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getAzureInsights_Use = function () {
return clientVarsService.getVariable("AzureInsights_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setAzureInsights_Use = function (value) {
return clientVarsService.setVariable("AzureInsights_Use", "UBT_AppManager", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getAppManager_IdPProviderId = function () {
return clientVarsService.getVariable("AppManager_IdPProviderId", "UBT_AppManager", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setAppManager_IdPProviderId = function (value) {
return clientVarsService.setVariable("AppManager_IdPProviderId", "UBT_AppManager", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getAppManager_DelayedMessage = function () {
return clientVarsService.getVariable("AppManager_DelayedMessage", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setAppManager_DelayedMessage = function (value) {
return clientVarsService.setVariable("AppManager_DelayedMessage", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getFrontEgg_CodeChallenge = function () {
return clientVarsService.getVariable("FrontEgg_CodeChallenge", "UBT_AppManager", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setFrontEgg_CodeChallenge = function (value) {
return clientVarsService.setVariable("FrontEgg_CodeChallenge", "UBT_AppManager", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.serialize = function () {
return {
Firebase_ProjectId: OS.DataConversion.ServerDataConverter.to(this.getFirebase_ProjectId(), OS.DataTypes.DataTypes.Text),
OutSystems_Environment: OS.DataConversion.ServerDataConverter.to(this.getOutSystems_Environment(), OS.DataTypes.DataTypes.Text),
DeviceInfo_Platform: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_Platform(), OS.DataTypes.DataTypes.Text),
AppManager_OAuth_EndPoint: OS.DataConversion.ServerDataConverter.to(this.getAppManager_OAuth_EndPoint(), OS.DataTypes.DataTypes.Text),
MinWebViewVersion_Safari: OS.DataConversion.ServerDataConverter.to(this.getMinWebViewVersion_Safari(), OS.DataTypes.DataTypes.Text),
OutSystems_LastURL: OS.DataConversion.ServerDataConverter.to(this.getOutSystems_LastURL(), OS.DataTypes.DataTypes.Text),
AppManager_ContactBaseId: OS.DataConversion.ServerDataConverter.to(this.getAppManager_ContactBaseId(), OS.DataTypes.DataTypes.Text),
FrontEgg_AppId: OS.DataConversion.ServerDataConverter.to(this.getFrontEgg_AppId(), OS.DataTypes.DataTypes.Text),
Licenses_List: OS.DataConversion.ServerDataConverter.to(this.getLicenses_List(), OS.DataTypes.DataTypes.Text),
DeviceInfo_UserAgent: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_UserAgent(), OS.DataTypes.DataTypes.Text),
AppManager_UserExternalId: OS.DataConversion.ServerDataConverter.to(this.getAppManager_UserExternalId(), OS.DataTypes.DataTypes.Text),
AzureB2C_ClientId: OS.DataConversion.ServerDataConverter.to(this.getAzureB2C_ClientId(), OS.DataTypes.DataTypes.Text),
DeviceInfo_MobileVersion: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_MobileVersion(), OS.DataTypes.DataTypes.Text),
PIN_FingerprintReaderAvailable_IsPersistent: OS.DataConversion.ServerDataConverter.to(this.getPIN_FingerprintReaderAvailable_IsPersistent(), OS.DataTypes.DataTypes.Boolean),
DeviceInfo_MobileBuild: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_MobileBuild(), OS.DataTypes.DataTypes.Text),
Streamline_SerialNumber: OS.DataConversion.ServerDataConverter.to(this.getStreamline_SerialNumber(), OS.DataTypes.DataTypes.Text),
AppManager_MemberId: OS.DataConversion.ServerDataConverter.to(this.getAppManager_MemberId(), OS.DataTypes.DataTypes.Text),
Firebase_RealtimeDatabase_Token: OS.DataConversion.ServerDataConverter.to(this.getFirebase_RealtimeDatabase_Token(), OS.DataTypes.DataTypes.Text),
AppManager_AppBaseURL: OS.DataConversion.ServerDataConverter.to(this.getAppManager_AppBaseURL(), OS.DataTypes.DataTypes.Text),
DeviceInfo_UUID: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_UUID(), OS.DataTypes.DataTypes.Text),
PIN_IsLocked: OS.DataConversion.ServerDataConverter.to(this.getPIN_IsLocked(), OS.DataTypes.DataTypes.Boolean),
AppManager_UserExtended: OS.DataConversion.ServerDataConverter.to(this.getAppManager_UserExtended(), OS.DataTypes.DataTypes.Text),
Permissions_List: OS.DataConversion.ServerDataConverter.to(this.getPermissions_List(), OS.DataTypes.DataTypes.Text),
PIN_IsRegistering: OS.DataConversion.ServerDataConverter.to(this.getPIN_IsRegistering(), OS.DataTypes.DataTypes.Boolean),
OutSystems_RuntimeVersion: OS.DataConversion.ServerDataConverter.to(this.getOutSystems_RuntimeVersion(), OS.DataTypes.DataTypes.Text),
DeviceInfo_IsRunningAsPWA: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_IsRunningAsPWA(), OS.DataTypes.DataTypes.Boolean),
AppManager_EspaceName: OS.DataConversion.ServerDataConverter.to(this.getAppManager_EspaceName(), OS.DataTypes.DataTypes.Text),
Firebase_CloudMessage_Token: OS.DataConversion.ServerDataConverter.to(this.getFirebase_CloudMessage_Token(), OS.DataTypes.DataTypes.Text),
Streamline_TOTPOnLogin: OS.DataConversion.ServerDataConverter.to(this.getStreamline_TOTPOnLogin(), OS.DataTypes.DataTypes.Boolean),
MinNativeAppVersion: OS.DataConversion.ServerDataConverter.to(this.getMinNativeAppVersion(), OS.DataTypes.DataTypes.Text),
PIN_Use: OS.DataConversion.ServerDataConverter.to(this.getPIN_Use(), OS.DataTypes.DataTypes.Boolean),
Streamline_IsInstalled: OS.DataConversion.ServerDataConverter.to(this.getStreamline_IsInstalled(), OS.DataTypes.DataTypes.Boolean),
AzureB2C_ResetPassPolicy: OS.DataConversion.ServerDataConverter.to(this.getAzureB2C_ResetPassPolicy(), OS.DataTypes.DataTypes.Text),
DeviceInfo_PackageName: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_PackageName(), OS.DataTypes.DataTypes.Text),
PIN_EnforceOnReady: OS.DataConversion.ServerDataConverter.to(this.getPIN_EnforceOnReady(), OS.DataTypes.DataTypes.Boolean),
AzureB2C_LoginPolicy: OS.DataConversion.ServerDataConverter.to(this.getAzureB2C_LoginPolicy(), OS.DataTypes.DataTypes.Text),
DeviceInfo_Browser: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_Browser(), OS.DataTypes.DataTypes.Text),
PIN_SessionInactivity_Seconds: OS.DataConversion.ServerDataConverter.to(this.getPIN_SessionInactivity_Seconds(), OS.DataTypes.DataTypes.Integer),
PIN_EnableFingerprint: OS.DataConversion.ServerDataConverter.to(this.getPIN_EnableFingerprint(), OS.DataTypes.DataTypes.Boolean),
DeviceInfo_IsNative: OS.DataConversion.ServerDataConverter.to(this.getDeviceInfo_IsNative(), OS.DataTypes.DataTypes.Boolean),
PIN_SessionInactivity_Use: OS.DataConversion.ServerDataConverter.to(this.getPIN_SessionInactivity_Use(), OS.DataTypes.DataTypes.Boolean),
PIN_SessionInactivity_Navigate: OS.DataConversion.ServerDataConverter.to(this.getPIN_SessionInactivity_Navigate(), OS.DataTypes.DataTypes.Boolean),
AppManager_CustomCallback: OS.DataConversion.ServerDataConverter.to(this.getAppManager_CustomCallback(), OS.DataTypes.DataTypes.Text),
Firebase_RealtimeDatabase_Use: OS.DataConversion.ServerDataConverter.to(this.getFirebase_RealtimeDatabase_Use(), OS.DataTypes.DataTypes.Text),
AppManager_Username: OS.DataConversion.ServerDataConverter.to(this.getAppManager_Username(), OS.DataTypes.DataTypes.Text),
PIN_HasUnlocked: OS.DataConversion.ServerDataConverter.to(this.getPIN_HasUnlocked(), OS.DataTypes.DataTypes.Boolean),
Firebase_RealtimeDatabase_StartedOn: OS.DataConversion.ServerDataConverter.to(this.getFirebase_RealtimeDatabase_StartedOn(), OS.DataTypes.DataTypes.DateTime),
FrontEgg_CodeVerifier: OS.DataConversion.ServerDataConverter.to(this.getFrontEgg_CodeVerifier(), OS.DataTypes.DataTypes.Text),
MinWebViewVersion_Chrome: OS.DataConversion.ServerDataConverter.to(this.getMinWebViewVersion_Chrome(), OS.DataTypes.DataTypes.Text),
AzureInsights_Use: OS.DataConversion.ServerDataConverter.to(this.getAzureInsights_Use(), OS.DataTypes.DataTypes.Boolean),
AppManager_IdPProviderId: OS.DataConversion.ServerDataConverter.to(this.getAppManager_IdPProviderId(), OS.DataTypes.DataTypes.Integer),
AppManager_DelayedMessage: OS.DataConversion.ServerDataConverter.to(this.getAppManager_DelayedMessage(), OS.DataTypes.DataTypes.Text),
FrontEgg_CodeChallenge: OS.DataConversion.ServerDataConverter.to(this.getFrontEgg_CodeChallenge(), OS.DataTypes.DataTypes.Text)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
