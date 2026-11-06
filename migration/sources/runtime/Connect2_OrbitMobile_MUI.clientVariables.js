define("Connect2_OrbitMobile_MUI.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getBookletGuestsMaxRows = function () {
return clientVarsService.getVariable("BookletGuestsMaxRows", "Connect2_OrbitMobile_MUI", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setBookletGuestsMaxRows = function (value) {
return clientVarsService.setVariable("BookletGuestsMaxRows", "Connect2_OrbitMobile_MUI", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getBookletHelpersMaxRows = function () {
return clientVarsService.getVariable("BookletHelpersMaxRows", "Connect2_OrbitMobile_MUI", OS.DataTypes.DataTypes.Integer);
};
ClientVariables.prototype.setBookletHelpersMaxRows = function (value) {
return clientVarsService.setVariable("BookletHelpersMaxRows", "Connect2_OrbitMobile_MUI", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.serialize = function () {
return {
BookletGuestsMaxRows: OS.DataConversion.ServerDataConverter.to(this.getBookletGuestsMaxRows(), OS.DataTypes.DataTypes.Integer),
BookletHelpersMaxRows: OS.DataConversion.ServerDataConverter.to(this.getBookletHelpersMaxRows(), OS.DataTypes.DataTypes.Integer)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
