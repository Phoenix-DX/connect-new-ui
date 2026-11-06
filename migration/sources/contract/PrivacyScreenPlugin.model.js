define("PrivacyScreenPlugin.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "PrivacyScreenPlugin.model", "ServiceCenter.model$UserRec", "PrivacyScreenPlugin.referencesHealth", "PrivacyScreenPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, PrivacyScreenPluginModel) {
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
PrivacyScreenPluginModel.UserRecord = UserRecord;

});
define("PrivacyScreenPlugin.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PrivacyScreenPlugin.model", "PrivacyScreenPlugin.model$UserRecord"], function (exports, OutSystems, PrivacyScreenPluginModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = PrivacyScreenPluginModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
PrivacyScreenPluginModel.UserRecordList = UserRecordList;

});
define("PrivacyScreenPlugin.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "PrivacyScreenPlugin.model", "ServiceCenter.model$UserRec", "PrivacyScreenPlugin.referencesHealth", "PrivacyScreenPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, PrivacyScreenPluginModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
PrivacyScreenPluginModel.UserList = UserList;

});
define("PrivacyScreenPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var PrivacyScreenPluginModel = exports;
Object.defineProperty(PrivacyScreenPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["93476175-05d4-4467-8316-eb6477c420d4"];
}
});

PrivacyScreenPluginModel.staticEntities = {};
});
