define("FileViewerPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileViewerPlugin.model", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.ErrorList = ErrorList;

});
define("FileViewerPlugin.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileViewerPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecord = (function (_super) {
__extends(Mobile_OperatingSystemRecord, _super);
function Mobile_OperatingSystemRecord(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecord.attributesToDeclare = function () {
return [
this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
}, true, CommonPluginModel.Mobile_OperatingSystemRec)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRecord.fromStructure = function (str) {
return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Mobile_OperatingSystemRecord._isAnonymousRecord = true;
Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
Mobile_OperatingSystemRecord.init();
return Mobile_OperatingSystemRecord;
})(OS.DataTypes.GenericRecord);
FileViewerPluginModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("FileViewerPlugin.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = FileViewerPluginModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("FileViewerPlugin.model$PluginLicenseRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileViewerPlugin.model", "CommonPlugin.model$PluginLicenseRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecord = (function (_super) {
__extends(PluginLicenseRecord, _super);
function PluginLicenseRecord(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecord.attributesToDeclare = function () {
return [
this.attr("PluginLicense", "pluginLicenseAttr", "PluginLicense", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.PluginLicenseRec());
}, true, CommonPluginModel.PluginLicenseRec)
].concat(_super.attributesToDeclare.call(this));
};
PluginLicenseRecord.fromStructure = function (str) {
return new PluginLicenseRecord(new PluginLicenseRecord.RecordClass({
pluginLicenseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PluginLicenseRecord._isAnonymousRecord = true;
PluginLicenseRecord.UniqueId = "4f3ba093-4c73-508e-cfa6-9aca510d9587";
PluginLicenseRecord.init();
return PluginLicenseRecord;
})(OS.DataTypes.GenericRecord);
FileViewerPluginModel.PluginLicenseRecord = PluginLicenseRecord;

});
define("FileViewerPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileViewerPlugin.model", "CommonPlugin.model$ErrorRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FileViewerPluginModel) {
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
FileViewerPluginModel.ErrorRecord = ErrorRecord;

});
define("FileViewerPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.model$ErrorRecord"], function (exports, OutSystems, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = FileViewerPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.ErrorRecordList = ErrorRecordList;

});
define("FileViewerPlugin.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "FileViewerPlugin.model", "ServiceCenter.model$UserRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, FileViewerPluginModel) {
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
FileViewerPluginModel.UserRecord = UserRecord;

});
define("FileViewerPlugin.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.model$UserRecord"], function (exports, OutSystems, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = FileViewerPluginModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.UserRecordList = UserRecordList;

});
define("FileViewerPlugin.model$PluginLicenseList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileViewerPlugin.model", "CommonPlugin.model$PluginLicenseRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseList = (function (_super) {
__extends(PluginLicenseList, _super);
function PluginLicenseList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseList.itemType = CommonPluginModel.PluginLicenseRec;
return PluginLicenseList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.PluginLicenseList = PluginLicenseList;

});
define("FileViewerPlugin.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "FileViewerPlugin.model", "ServiceCenter.model$UserRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.UserList = UserList;

});
define("FileViewerPlugin.model$PluginLicenseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileViewerPlugin.model", "FileViewerPlugin.model$PluginLicenseRecord"], function (exports, OutSystems, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecordList = (function (_super) {
__extends(PluginLicenseRecordList, _super);
function PluginLicenseRecordList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecordList.itemType = FileViewerPluginModel.PluginLicenseRecord;
return PluginLicenseRecordList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.PluginLicenseRecordList = PluginLicenseRecordList;

});
define("FileViewerPlugin.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileViewerPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "FileViewerPlugin.referencesHealth", "FileViewerPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FileViewerPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
FileViewerPluginModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("FileViewerPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var FileViewerPluginModel = exports;
Object.defineProperty(FileViewerPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["294f0e6b-cae1-4e61-a399-d2fe4181d0ed"];
}
});

FileViewerPluginModel.staticEntities = {};
FileViewerPluginModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(FileViewerPluginModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(FileViewerPluginModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(FileViewerPluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(FileViewerPluginModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

});
