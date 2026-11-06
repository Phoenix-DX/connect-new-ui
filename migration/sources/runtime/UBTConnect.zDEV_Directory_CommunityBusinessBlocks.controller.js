define("UBTConnect.zDEV_Directory_CommunityBusinessBlocks.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.App_Common.controller", "UBTConnect.clientVariables", "UBTConnect.zDEV_Directory_CommunityBusinessBlocks.controller$debugger"], function (exports, OutSystems, UBTConnectModel, UBTConnectController, _flow_UBTConnect_App_CommonController, UBTConnectClientVariables, UBTConnect_zDEV_Directory_CommunityBusinessBlocks_Controller_debugger) {
var OS = OutSystems.Internal;
var _flow_UBTConnect_zDEV_Directory_CommunityBusinessBlocksController = exports;
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
OS.Logger.trace("zDEV_Directory_CommunityBusinessBlocks", OS.Exceptions.getMessage(ex), ex.name);
return _flow_UBTConnect_App_CommonController.default.handleError(ex, callContext);


};
return Controller;
})(OS.Controller.BaseController);
_flow_UBTConnect_zDEV_Directory_CommunityBusinessBlocksController.default = new Controller();
});

define("UBTConnect.zDEV_Directory_CommunityBusinessBlocks.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
});
