try {require(["es6-promise", "tslib"], function (es6promise, tslib) {
require(["OutSystems/ClientRuntime/Main", "UBTConnect.appDefinition"], function (OutSystems, UBTConnectAppDefinition) {
var OS = OutSystems.Internal;
OS.Settings.setPlatformSettings({
IndexedDBOffline: true,
UseNewWebSQLImpl: false,
SendEnvParamOnManifestRequest: true
});
OS.ErrorScreen.initializeErrorPage(UBTConnectAppDefinition, OS.Application.default);
});
});
} catch (ex) {
console.error(ex);
}

