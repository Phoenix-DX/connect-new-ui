define("ScreenOrientationPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "ScreenOrientationPlugin.model", "CommonPlugin.model$ErrorRec", "ScreenOrientationPlugin.referencesHealth", "ScreenOrientationPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, ScreenOrientationPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
ScreenOrientationPluginModel.ErrorList = ErrorList;

});
define("ScreenOrientationPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "ScreenOrientationPlugin.model", "CommonPlugin.model$ErrorRec", "ScreenOrientationPlugin.referencesHealth", "ScreenOrientationPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, ScreenOrientationPluginModel) {
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
ScreenOrientationPluginModel.ErrorRecord = ErrorRecord;

});
define("ScreenOrientationPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ScreenOrientationPlugin.model", "ScreenOrientationPlugin.model$ErrorRecord"], function (exports, OutSystems, ScreenOrientationPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = ScreenOrientationPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
ScreenOrientationPluginModel.ErrorRecordList = ErrorRecordList;

});
define("ScreenOrientationPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ScreenOrientationPluginModel = exports;
Object.defineProperty(ScreenOrientationPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["1d226b76-eaa3-4741-9002-62339b62a991"];
}
});

ScreenOrientationPluginModel.staticEntities = {};
});
