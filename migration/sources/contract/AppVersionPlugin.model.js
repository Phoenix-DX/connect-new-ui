define("AppVersionPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AppVersionPlugin.model", "CommonPlugin.model$ErrorRec", "AppVersionPlugin.referencesHealth", "AppVersionPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AppVersionPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
AppVersionPluginModel.ErrorList = ErrorList;

});
define("AppVersionPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "AppVersionPlugin.model", "CommonPlugin.model$ErrorRec", "AppVersionPlugin.referencesHealth", "AppVersionPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, AppVersionPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, true, CommonPluginModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "cbbd7d57-66e1-86ff-28ab-3b75adf75b93";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
AppVersionPluginModel.ErrorRecord = ErrorRecord;

});
define("AppVersionPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AppVersionPlugin.model", "AppVersionPlugin.model$ErrorRecord"], function (exports, OutSystems, AppVersionPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = AppVersionPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
AppVersionPluginModel.ErrorRecordList = ErrorRecordList;

});
define("AppVersionPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var AppVersionPluginModel = exports;
Object.defineProperty(AppVersionPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["d3188bcd-cbd3-47d9-903c-ed0bfc66164d"];
}
});

AppVersionPluginModel.staticEntities = {};
});
