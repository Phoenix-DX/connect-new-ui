define("PanZoom.model", ["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
    var OS = OutSystems.Internal;
    var PanZoomModel = exports;
    Object.defineProperty(PanZoomModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["9fe6106c-9914-4d7f-a3c4-eeb3b179abe8"];
        }
    });

    PanZoomModel.staticEntities = {};
});