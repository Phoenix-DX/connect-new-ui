define("PanZoom.controller", ["exports", "OutSystems/ClientRuntime/Main", "PanZoom.model", "PanZoom.controller$debugger"], function(exports, OutSystems, PanZoomModel, PanZoom_Controller_debugger) {
    var OS = OutSystems.Internal;
    var PanZoomController = exports;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
        }
        Controller.prototype.clientActionProxies = {};
        Controller.prototype.roles = {};
        Controller.prototype.defaultTimeout = 10;
        Controller.prototype.getDefaultTimeout = function() {
            return PanZoomController.default.defaultTimeout;
        };
        Controller.prototype.getClientActionProxies = function(controller) {
            var _this = this;
            var thisController = controller;
            return Object.keys(this.clientActionProxies).reduce(function(acc, actionName) {
                acc[actionName] = function() {
                    if (thisController.isActive()) {
                        return _this.clientActionProxies[actionName].apply(thisController, arguments);
                    }

                    return Promise.resolve();
                };
                return acc;
            }, {});
        };
        return Controller;
    })(OS.Controller.BaseModuleController);
    PanZoomController.default = new Controller(null, "PanZoom");
});
define("PanZoom.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {};
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});