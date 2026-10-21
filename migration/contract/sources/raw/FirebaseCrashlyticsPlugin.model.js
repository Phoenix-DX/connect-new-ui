define("FirebaseCrashlyticsPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FirebaseCrashlyticsPlugin.model", "CommonPlugin.model$ErrorRec", "FirebaseCrashlyticsPlugin.referencesHealth", "FirebaseCrashlyticsPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FirebaseCrashlyticsPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
FirebaseCrashlyticsPluginModel.ErrorList = ErrorList;

});
define("FirebaseCrashlyticsPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FirebaseCrashlyticsPlugin.model", "CommonPlugin.model$ErrorRec", "FirebaseCrashlyticsPlugin.referencesHealth", "FirebaseCrashlyticsPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FirebaseCrashlyticsPluginModel) {
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
FirebaseCrashlyticsPluginModel.ErrorRecord = ErrorRecord;

});
define("FirebaseCrashlyticsPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCrashlyticsPlugin.model", "FirebaseCrashlyticsPlugin.model$ErrorRecord"], function (exports, OutSystems, FirebaseCrashlyticsPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = FirebaseCrashlyticsPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCrashlyticsPluginModel.ErrorRecordList = ErrorRecordList;

});
define("FirebaseCrashlyticsPlugin.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "FirebaseCrashlyticsPlugin.model", "ServiceCenter.model$UserRec", "FirebaseCrashlyticsPlugin.referencesHealth", "FirebaseCrashlyticsPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, FirebaseCrashlyticsPluginModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCrashlyticsPluginModel.UserRecord = UserRecord;

});
define("FirebaseCrashlyticsPlugin.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCrashlyticsPlugin.model", "FirebaseCrashlyticsPlugin.model$UserRecord"], function (exports, OutSystems, FirebaseCrashlyticsPluginModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = FirebaseCrashlyticsPluginModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCrashlyticsPluginModel.UserRecordList = UserRecordList;

});
define("FirebaseCrashlyticsPlugin.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "FirebaseCrashlyticsPlugin.model", "ServiceCenter.model$UserRec", "FirebaseCrashlyticsPlugin.referencesHealth", "FirebaseCrashlyticsPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, FirebaseCrashlyticsPluginModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
FirebaseCrashlyticsPluginModel.UserList = UserList;

});
define("FirebaseCrashlyticsPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var FirebaseCrashlyticsPluginModel = exports;
Object.defineProperty(FirebaseCrashlyticsPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["dc9ebf26-0abf-435b-92d7-ee675b5d1864"];
}
});

FirebaseCrashlyticsPluginModel.staticEntities = {};
});
