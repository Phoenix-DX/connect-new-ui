define("NavigationHandler.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var NavigationHandlerModel = exports;
Object.defineProperty(NavigationHandlerModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["889a08c1-6cca-4362-a5ec-3e033aa713dc"];
}
});

NavigationHandlerModel.staticEntities = {};
});
