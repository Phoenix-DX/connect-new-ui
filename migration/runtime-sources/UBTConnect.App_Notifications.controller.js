define("UBTConnect.App_Notifications.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.App_Common.controller", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.controller$debugger"], function (exports, OutSystems, UBTConnectModel, UBTConnectController, _flow_UBTConnect_App_CommonController, UBTConnectClientVariables, UBTConnect_App_Notifications_Controller_debugger) {
var OS = OutSystems.Internal;
var _flow_UBTConnect_App_NotificationsController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
Controller.prototype.handleError = function (ex, callContext) {
var varBag = {};
var controller = this.controller;
OS.Logger.trace("App_Notifications", OS.Exceptions.getMessage(ex), ex.name);
return _flow_UBTConnect_App_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
_flow_UBTConnect_App_NotificationsController.default = new Controller();
});

define("UBTConnect.App_Notifications.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});
