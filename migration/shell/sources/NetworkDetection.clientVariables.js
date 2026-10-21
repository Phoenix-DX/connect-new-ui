define("NetworkDetection.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getNetworkDetection_UsingOfflineMode = function () {
return clientVarsService.getVariable("NetworkDetection_UsingOfflineMode", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, false);
};
ClientVariables.prototype.setNetworkDetection_UsingOfflineMode = function (value) {
return clientVarsService.setVariable("NetworkDetection_UsingOfflineMode", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getOffline_NetworkStatus_PendingPing_Check = function () {
return clientVarsService.getVariable("Offline_NetworkStatus_PendingPing_Check", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, true);
};
ClientVariables.prototype.setOffline_NetworkStatus_PendingPing_Check = function (value) {
return clientVarsService.setVariable("Offline_NetworkStatus_PendingPing_Check", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getNetworkDetection_ErrorMessage_GenericError = function () {
return clientVarsService.getVariable("NetworkDetection_ErrorMessage_GenericError", "NetworkDetection", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setNetworkDetection_ErrorMessage_GenericError = function (value) {
return clientVarsService.setVariable("NetworkDetection_ErrorMessage_GenericError", "NetworkDetection", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getNetworkDetection_StatusIsOnline_IsPersistent = function () {
return clientVarsService.getVariable("NetworkDetection_StatusIsOnline_IsPersistent", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, true);
};
ClientVariables.prototype.setNetworkDetection_StatusIsOnline_IsPersistent = function (value) {
return clientVarsService.setVariable("NetworkDetection_StatusIsOnline_IsPersistent", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.getNetworkDetection_ErrorMessage_NoInternet = function () {
return clientVarsService.getVariable("NetworkDetection_ErrorMessage_NoInternet", "NetworkDetection", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setNetworkDetection_ErrorMessage_NoInternet = function (value) {
return clientVarsService.setVariable("NetworkDetection_ErrorMessage_NoInternet", "NetworkDetection", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getOffline_NetworkStatus_PendingPing_Message = function () {
return clientVarsService.getVariable("Offline_NetworkStatus_PendingPing_Message", "NetworkDetection", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setOffline_NetworkStatus_PendingPing_Message = function (value) {
return clientVarsService.setVariable("Offline_NetworkStatus_PendingPing_Message", "NetworkDetection", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getNetworkDetection_VerboseMode = function () {
return clientVarsService.getVariable("NetworkDetection_VerboseMode", "NetworkDetection", OS.DataTypes.DataTypes.Boolean);
};
ClientVariables.prototype.setNetworkDetection_VerboseMode = function (value) {
return clientVarsService.setVariable("NetworkDetection_VerboseMode", "NetworkDetection", OS.DataTypes.DataTypes.Boolean, value);
};
ClientVariables.prototype.serialize = function () {
return {
NetworkDetection_UsingOfflineMode: OS.DataConversion.ServerDataConverter.to(this.getNetworkDetection_UsingOfflineMode(), OS.DataTypes.DataTypes.Boolean),
Offline_NetworkStatus_PendingPing_Check: OS.DataConversion.ServerDataConverter.to(this.getOffline_NetworkStatus_PendingPing_Check(), OS.DataTypes.DataTypes.Boolean),
NetworkDetection_ErrorMessage_GenericError: OS.DataConversion.ServerDataConverter.to(this.getNetworkDetection_ErrorMessage_GenericError(), OS.DataTypes.DataTypes.Text),
NetworkDetection_StatusIsOnline_IsPersistent: OS.DataConversion.ServerDataConverter.to(this.getNetworkDetection_StatusIsOnline_IsPersistent(), OS.DataTypes.DataTypes.Boolean),
NetworkDetection_ErrorMessage_NoInternet: OS.DataConversion.ServerDataConverter.to(this.getNetworkDetection_ErrorMessage_NoInternet(), OS.DataTypes.DataTypes.Text),
Offline_NetworkStatus_PendingPing_Message: OS.DataConversion.ServerDataConverter.to(this.getOffline_NetworkStatus_PendingPing_Message(), OS.DataTypes.DataTypes.Text),
NetworkDetection_VerboseMode: OS.DataConversion.ServerDataConverter.to(this.getNetworkDetection_VerboseMode(), OS.DataTypes.DataTypes.Boolean)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
