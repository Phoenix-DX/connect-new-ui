define("UBTConnect_Utils.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getApp_SubscriptionPopUp = function () {
return clientVarsService.getVariable("App_SubscriptionPopUp", "UBTConnect_Utils", OS.DataTypes.DataTypes.Text);
};
ClientVariables.prototype.setApp_SubscriptionPopUp = function (value) {
return clientVarsService.setVariable("App_SubscriptionPopUp", "UBTConnect_Utils", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.getUniqueCacheKey = function () {
return clientVarsService.getVariable("UniqueCacheKey", "UBTConnect_Utils", OS.DataTypes.DataTypes.Text, "Unique");
};
ClientVariables.prototype.setUniqueCacheKey = function (value) {
return clientVarsService.setVariable("UniqueCacheKey", "UBTConnect_Utils", OS.DataTypes.DataTypes.Text, value);
};
ClientVariables.prototype.serialize = function () {
return {
App_SubscriptionPopUp: OS.DataConversion.ServerDataConverter.to(this.getApp_SubscriptionPopUp(), OS.DataTypes.DataTypes.Text),
UniqueCacheKey: OS.DataConversion.ServerDataConverter.to(this.getUniqueCacheKey(), OS.DataTypes.DataTypes.Text)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
