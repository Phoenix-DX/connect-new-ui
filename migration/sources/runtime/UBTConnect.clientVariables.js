define("UBTConnect.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getApp_PIN_Header_FinalHeightPercentage = function () {
return clientVarsService.getVariable("App_PIN_Header_FinalHeightPercentage", "UBTConnect", OS.DataTypes.DataTypes.Decimal, OS.BuiltinFunctions.integerToDecimal(90));
};
ClientVariables.prototype.setApp_PIN_Header_FinalHeightPercentage = function (value) {
return clientVarsService.setVariable("App_PIN_Header_FinalHeightPercentage", "UBTConnect", OS.DataTypes.DataTypes.Decimal, value);
};
ClientVariables.prototype.getApp_NetworkStatus_IsOnline_IsPersistent = function () {
return clientVarsService.getVariable("App_NetworkStatus_IsOnline_IsPersistent", "UBTConnect", OS.DataTypes.DataTypes.Boolean, true);
};
ClientVariables.prototype.setApp_NetworkStatus_IsOnline_IsPersistent = function (value) {
return clientVarsService.setVariable("App_NetworkStatus_IsOnline_IsPersistent", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getApp_Policies_HasPolicyToAccept = function () {
return clientVarsService.getVariable("App_Policies_HasPolicyToAccept", "UBTConnect", OS.DataTypes.DataTypes.Boolean, false);
};
ClientVariables.prototype.setApp_Policies_HasPolicyToAccept = function (value) {
return clientVarsService.setVariable("App_Policies_HasPolicyToAccept", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getPhotobookCarousel_SelectedSpeed = function () {
return clientVarsService.getVariable("PhotobookCarousel_SelectedSpeed", "UBTConnect", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setPhotobookCarousel_SelectedSpeed = function (value) {
return clientVarsService.setVariable("PhotobookCarousel_SelectedSpeed", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getApp_PIN_Header_FinalCurvaturePercentage = function () {
return clientVarsService.getVariable("App_PIN_Header_FinalCurvaturePercentage", "UBTConnect", OS.DataTypes.DataTypes.Decimal, OS.BuiltinFunctions.integerToDecimal(105));
};
ClientVariables.prototype.setApp_PIN_Header_FinalCurvaturePercentage = function (value) {
return clientVarsService.setVariable("App_PIN_Header_FinalCurvaturePercentage", "UBTConnect", OS.DataTypes.DataTypes.Decimal, value);
};
ClientVariables.prototype.getNotifications_LastChecked = function () {
return clientVarsService.getVariable("Notifications_LastChecked", "UBTConnect", OS.DataTypes.DataTypes.DateTime);
};
ClientVariables.prototype.setNotifications_LastChecked = function (value) {
return clientVarsService.setVariable("Notifications_LastChecked", "UBTConnect", OS.DataTypes.DataTypes.DateTime, value);
};
ClientVariables.prototype.getColumnsPerView = function () {
return clientVarsService.getVariable("ColumnsPerView", "UBTConnect", OS.DataTypes.DataTypes.Integer, 7);
};
ClientVariables.prototype.setColumnsPerView = function (value) {
return clientVarsService.setVariable("ColumnsPerView", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getApp_PIN_BiometricEnabled = function () {
return clientVarsService.getVariable("App_PIN_BiometricEnabled", "UBTConnect", OS.DataTypes.DataTypes.Boolean, true);
};
ClientVariables.prototype.setApp_PIN_BiometricEnabled = function (value) {
return clientVarsService.setVariable("App_PIN_BiometricEnabled", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getRowsPerMonth = function () {
return clientVarsService.getVariable("RowsPerMonth", "UBTConnect", OS.DataTypes.DataTypes.Integer, 5);
};
ClientVariables.prototype.setRowsPerMonth = function (value) {
return clientVarsService.setVariable("RowsPerMonth", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getDirectory_Updates_UnreadCount = function () {
return clientVarsService.getVariable("Directory_Updates_UnreadCount", "UBTConnect", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setDirectory_Updates_UnreadCount = function (value) {
return clientVarsService.setVariable("Directory_Updates_UnreadCount", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getIsNavigateToHomeOnBack = function () {
return clientVarsService.getVariable("IsNavigateToHomeOnBack", "UBTConnect", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setIsNavigateToHomeOnBack = function (value) {
return clientVarsService.setVariable("IsNavigateToHomeOnBack", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getSearch_RecenctClickedResultsLimit = function () {
return clientVarsService.getVariable("Search_RecenctClickedResultsLimit", "UBTConnect", OS.DataTypes.DataTypes.Integer, 10);
};
ClientVariables.prototype.setSearch_RecenctClickedResultsLimit = function (value) {
return clientVarsService.setVariable("Search_RecenctClickedResultsLimit", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getDaysBuffer = function () {
return clientVarsService.getVariable("DaysBuffer", "UBTConnect", OS.DataTypes.DataTypes.Integer, 2);
};
ClientVariables.prototype.setDaysBuffer = function (value) {
return clientVarsService.setVariable("DaysBuffer", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getWeeksBuffer = function () {
return clientVarsService.getVariable("WeeksBuffer", "UBTConnect", OS.DataTypes.DataTypes.Integer, 2);
};
ClientVariables.prototype.setWeeksBuffer = function (value) {
return clientVarsService.setVariable("WeeksBuffer", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getMonthsBuffer = function () {
return clientVarsService.getVariable("MonthsBuffer", "UBTConnect", OS.DataTypes.DataTypes.Integer, 2);
};
ClientVariables.prototype.setMonthsBuffer = function (value) {
return clientVarsService.setVariable("MonthsBuffer", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getLastURL = function () {
return clientVarsService.getVariable("LastURL", "UBTConnect", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setLastURL = function (value) {
return clientVarsService.setVariable("LastURL", "UBTConnect", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getDirectory_Updates_MonthsToShow = function () {
return clientVarsService.getVariable("Directory_Updates_MonthsToShow", "UBTConnect", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setDirectory_Updates_MonthsToShow = function (value) {
return clientVarsService.setVariable("Directory_Updates_MonthsToShow", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getNotes_IsSynched = function () {
return clientVarsService.getVariable("Notes_IsSynched", "UBTConnect", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setNotes_IsSynched = function (value) {
return clientVarsService.setVariable("Notes_IsSynched", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getMinimumDate = function () {
return clientVarsService.getVariable("MinimumDate", "UBTConnect", OS.DataTypes.DataTypes.Date, (new OS.DataTypes.DateTime(2022, 1, 1, 0, 0, 0)));
};
ClientVariables.prototype.setMinimumDate = function (value) {
return clientVarsService.setVariable("MinimumDate", "UBTConnect", OS.DataTypes.DataTypes.Date, value);
};
ClientVariables.prototype.getBookmarks_IsSynched = function () {
return clientVarsService.getVariable("Bookmarks_IsSynched", "UBTConnect", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setBookmarks_IsSynched = function (value) {
return clientVarsService.setVariable("Bookmarks_IsSynched", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getDirectory_Updates_UnreadCount_CheckFrequency_Minut = function () {
return clientVarsService.getVariable("Directory_Updates_UnreadCount_CheckFrequency_Minut", "UBTConnect", OS.DataTypes.DataTypes.Integer, 5);
};
ClientVariables.prototype.setDirectory_Updates_UnreadCount_CheckFrequency_Minut = function (value) {
return clientVarsService.setVariable("Directory_Updates_UnreadCount_CheckFrequency_Minut", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getApp_Notifications_MonthsToShow = function () {
return clientVarsService.getVariable("App_Notifications_MonthsToShow", "UBTConnect", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setApp_Notifications_MonthsToShow = function (value) {
return clientVarsService.setVariable("App_Notifications_MonthsToShow", "UBTConnect", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getNotifications_IsSynched = function () {
return clientVarsService.getVariable("Notifications_IsSynched", "UBTConnect", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setNotifications_IsSynched = function (value) {
return clientVarsService.setVariable("Notifications_IsSynched", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getDirectory_Updates_UnreadCount_LastCheck = function () {
return clientVarsService.getVariable("Directory_Updates_UnreadCount_LastCheck", "UBTConnect", OS.DataTypes.DataTypes.DateTime);
};
ClientVariables.prototype.setDirectory_Updates_UnreadCount_LastCheck = function (value) {
return clientVarsService.setVariable("Directory_Updates_UnreadCount_LastCheck", "UBTConnect", OS.DataTypes.DataTypes.DateTime, value);
};
ClientVariables.prototype.getApp_Policies_RedirectURL = function () {
return clientVarsService.getVariable("App_Policies_RedirectURL", "UBTConnect", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setApp_Policies_RedirectURL = function (value) {
return clientVarsService.setVariable("App_Policies_RedirectURL", "UBTConnect", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getEmbedd_B2CTenant = function () {
return clientVarsService.getVariable("Embedd_B2CTenant", "UBTConnect", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setEmbedd_B2CTenant = function (value) {
return clientVarsService.setVariable("Embedd_B2CTenant", "UBTConnect", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getUsername = function () {
return clientVarsService.getVariable("Username", "UBTConnect", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setUsername = function (value) {
return clientVarsService.setVariable("Username", "UBTConnect", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getTest_Remove_UseCachedMap = function () {
return clientVarsService.getVariable("Test_Remove_UseCachedMap", "UBTConnect", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setTest_Remove_UseCachedMap = function (value) {
return clientVarsService.setVariable("Test_Remove_UseCachedMap", "UBTConnect", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.serialize = function () {
return {
App_PIN_Header_FinalHeightPercentage: OS.DataConversion.ServerDataConverter.to(this.getApp_PIN_Header_FinalHeightPercentage(), OS.DataTypes.DataTypes.Decimal),
App_NetworkStatus_IsOnline_IsPersistent: OS.DataConversion.ServerDataConverter.to(this.getApp_NetworkStatus_IsOnline_IsPersistent(), OS.DataTypes.DataTypes.Boolean),
App_Policies_HasPolicyToAccept: OS.DataConversion.ServerDataConverter.to(this.getApp_Policies_HasPolicyToAccept(), OS.DataTypes.DataTypes.Boolean),
PhotobookCarousel_SelectedSpeed: OS.DataConversion.ServerDataConverter.to(this.getPhotobookCarousel_SelectedSpeed(), OS.DataTypes.DataTypes.Integer),
App_PIN_Header_FinalCurvaturePercentage: OS.DataConversion.ServerDataConverter.to(this.getApp_PIN_Header_FinalCurvaturePercentage(), OS.DataTypes.DataTypes.Decimal),
Notifications_LastChecked: OS.DataConversion.ServerDataConverter.to(this.getNotifications_LastChecked(), OS.DataTypes.DataTypes.DateTime),
ColumnsPerView: OS.DataConversion.ServerDataConverter.to(this.getColumnsPerView(), OS.DataTypes.DataTypes.Integer),
App_PIN_BiometricEnabled: OS.DataConversion.ServerDataConverter.to(this.getApp_PIN_BiometricEnabled(), OS.DataTypes.DataTypes.Boolean),
RowsPerMonth: OS.DataConversion.ServerDataConverter.to(this.getRowsPerMonth(), OS.DataTypes.DataTypes.Integer),
Directory_Updates_UnreadCount: OS.DataConversion.ServerDataConverter.to(this.getDirectory_Updates_UnreadCount(), OS.DataTypes.DataTypes.Integer),
IsNavigateToHomeOnBack: OS.DataConversion.ServerDataConverter.to(this.getIsNavigateToHomeOnBack(), OS.DataTypes.DataTypes.Boolean),
Search_RecenctClickedResultsLimit: OS.DataConversion.ServerDataConverter.to(this.getSearch_RecenctClickedResultsLimit(), OS.DataTypes.DataTypes.Integer),
DaysBuffer: OS.DataConversion.ServerDataConverter.to(this.getDaysBuffer(), OS.DataTypes.DataTypes.Integer),
WeeksBuffer: OS.DataConversion.ServerDataConverter.to(this.getWeeksBuffer(), OS.DataTypes.DataTypes.Integer),
MonthsBuffer: OS.DataConversion.ServerDataConverter.to(this.getMonthsBuffer(), OS.DataTypes.DataTypes.Integer),
LastURL: OS.DataConversion.ServerDataConverter.to(this.getLastURL(), OS.DataTypes.DataTypes.Text),
Directory_Updates_MonthsToShow: OS.DataConversion.ServerDataConverter.to(this.getDirectory_Updates_MonthsToShow(), OS.DataTypes.DataTypes.Integer),
Notes_IsSynched: OS.DataConversion.ServerDataConverter.to(this.getNotes_IsSynched(), OS.DataTypes.DataTypes.Boolean),
MinimumDate: OS.DataConversion.ServerDataConverter.to(this.getMinimumDate(), OS.DataTypes.DataTypes.Date),
Bookmarks_IsSynched: OS.DataConversion.ServerDataConverter.to(this.getBookmarks_IsSynched(), OS.DataTypes.DataTypes.Boolean),
Directory_Updates_UnreadCount_CheckFrequency_Minut: OS.DataConversion.ServerDataConverter.to(this.getDirectory_Updates_UnreadCount_CheckFrequency_Minut(), OS.DataTypes.DataTypes.Integer),
App_Notifications_MonthsToShow: OS.DataConversion.ServerDataConverter.to(this.getApp_Notifications_MonthsToShow(), OS.DataTypes.DataTypes.Integer),
Notifications_IsSynched: OS.DataConversion.ServerDataConverter.to(this.getNotifications_IsSynched(), OS.DataTypes.DataTypes.Boolean),
Directory_Updates_UnreadCount_LastCheck: OS.DataConversion.ServerDataConverter.to(this.getDirectory_Updates_UnreadCount_LastCheck(), OS.DataTypes.DataTypes.DateTime),
App_Policies_RedirectURL: OS.DataConversion.ServerDataConverter.to(this.getApp_Policies_RedirectURL(), OS.DataTypes.DataTypes.Text),
Embedd_B2CTenant: OS.DataConversion.ServerDataConverter.to(this.getEmbedd_B2CTenant(), OS.DataTypes.DataTypes.Text),
Username: OS.DataConversion.ServerDataConverter.to(this.getUsername(), OS.DataTypes.DataTypes.Text),
Test_Remove_UseCachedMap: OS.DataConversion.ServerDataConverter.to(this.getTest_Remove_UseCachedMap(), OS.DataTypes.DataTypes.Boolean)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
