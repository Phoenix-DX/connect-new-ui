define("Connect2_LegacyShared.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getUnreadNotificationsNumber = function () {
return clientVarsService.getVariable("UnreadNotificationsNumber", "Connect2_LegacyShared", OS.DataTypes.DataTypes.LongInteger);
};
ClientVariables.prototype.setUnreadNotificationsNumber = function (value) {
return clientVarsService.setVariable("UnreadNotificationsNumber", "Connect2_LegacyShared", OS.DataTypes.DataTypes.LongInteger, value);
};
ClientVariables.prototype.getUnreadPublicMessagesNumber = function () {
return clientVarsService.getVariable("UnreadPublicMessagesNumber", "Connect2_LegacyShared", OS.DataTypes.DataTypes.LongInteger);
};
ClientVariables.prototype.setUnreadPublicMessagesNumber = function (value) {
return clientVarsService.setVariable("UnreadPublicMessagesNumber", "Connect2_LegacyShared", OS.DataTypes.DataTypes.LongInteger, value);
};
ClientVariables.prototype.getUnreadWhatsNewsNumber = function () {
return clientVarsService.getVariable("UnreadWhatsNewsNumber", "Connect2_LegacyShared", OS.DataTypes.DataTypes.LongInteger);
};
ClientVariables.prototype.setUnreadWhatsNewsNumber = function (value) {
return clientVarsService.setVariable("UnreadWhatsNewsNumber", "Connect2_LegacyShared", OS.DataTypes.DataTypes.LongInteger, value);
};
ClientVariables.prototype.serialize = function () {
return {
UnreadNotificationsNumber: OS.DataConversion.ServerDataConverter.to(this.getUnreadNotificationsNumber(), OS.DataTypes.DataTypes.LongInteger),
UnreadPublicMessagesNumber: OS.DataConversion.ServerDataConverter.to(this.getUnreadPublicMessagesNumber(), OS.DataTypes.DataTypes.LongInteger),
UnreadWhatsNewsNumber: OS.DataConversion.ServerDataConverter.to(this.getUnreadWhatsNewsNumber(), OS.DataTypes.DataTypes.LongInteger)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
