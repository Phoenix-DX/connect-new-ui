define("ContentProviderPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ContentProviderPluginModel = exports;
Object.defineProperty(ContentProviderPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["917faf3b-10e8-4b75-b931-b6f4d1e0c4c1"];
}
});

ContentProviderPluginModel.staticEntities = {};
});
