define("UBTConnectLibrary.clientVariables", ["OutSystems/ClientRuntime/Main"], function (OutSystems) {
var OS = OutSystems.Internal;
var ClientVariables = (function (_super) {
var clientVarsService;
function ClientVariables() {
clientVarsService = OS.Injector.resolve(OS.ServiceNames.ClientVariablesService);
}
ClientVariables.prototype.getSVG_DefaultHeight = function () {
return clientVarsService.getVariable("SVG_DefaultHeight", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, 248);
};
ClientVariables.prototype.setSVG_DefaultHeight = function (value) {
return clientVarsService.setVariable("SVG_DefaultHeight", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getSVG_DefaultWidth = function () {
return clientVarsService.getVariable("SVG_DefaultWidth", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, 360);
};
ClientVariables.prototype.setSVG_DefaultWidth = function (value) {
return clientVarsService.setVariable("SVG_DefaultWidth", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getSVG_DefaultCurvePoint = function () {
return clientVarsService.getVariable("SVG_DefaultCurvePoint", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, 282);
};
ClientVariables.prototype.setSVG_DefaultCurvePoint = function (value) {
return clientVarsService.setVariable("SVG_DefaultCurvePoint", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.getSVG_DefaultBreakPoint = function () {
return clientVarsService.getVariable("SVG_DefaultBreakPoint", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, 214);
};
ClientVariables.prototype.setSVG_DefaultBreakPoint = function (value) {
return clientVarsService.setVariable("SVG_DefaultBreakPoint", "UBTConnectLibrary", OS.DataTypes.DataTypes.Integer, value);
};
ClientVariables.prototype.serialize = function () {
return {
SVG_DefaultHeight: OS.DataConversion.ServerDataConverter.to(this.getSVG_DefaultHeight(), OS.DataTypes.DataTypes.Integer),
SVG_DefaultWidth: OS.DataConversion.ServerDataConverter.to(this.getSVG_DefaultWidth(), OS.DataTypes.DataTypes.Integer),
SVG_DefaultCurvePoint: OS.DataConversion.ServerDataConverter.to(this.getSVG_DefaultCurvePoint(), OS.DataTypes.DataTypes.Integer),
SVG_DefaultBreakPoint: OS.DataConversion.ServerDataConverter.to(this.getSVG_DefaultBreakPoint(), OS.DataTypes.DataTypes.Integer)
};
};
return ClientVariables;
})();
return new ClientVariables();
});
