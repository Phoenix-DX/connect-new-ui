define("SocialSharingPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "SocialSharingPlugin.model", "CommonPlugin.model$ErrorRec", "SocialSharingPlugin.referencesHealth", "SocialSharingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
SocialSharingPluginModel.ErrorList = ErrorList;

});
define("SocialSharingPlugin.model$SocialTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "SocialSharingPlugin.model"], function (exports, OutSystems, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var SocialTypeRec = (function (_super) {
__extends(SocialTypeRec, _super);
function SocialTypeRec(defaults) {
_super.apply(this, arguments);
}
SocialTypeRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SocialTypeRec.fromStructure = function (str) {
return new SocialTypeRec(new SocialTypeRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SocialTypeRec.init();
return SocialTypeRec;
})(OS.DataTypes.GenericRecord);
SocialSharingPluginModel.SocialTypeRec = SocialTypeRec;

});
define("SocialSharingPlugin.model$SocialTypeList", ["exports", "OutSystems/ClientRuntime/Main", "SocialSharingPlugin.model", "SocialSharingPlugin.model$SocialTypeRec"], function (exports, OutSystems, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var SocialTypeList = (function (_super) {
__extends(SocialTypeList, _super);
function SocialTypeList(defaults) {
_super.apply(this, arguments);
}
SocialTypeList.itemType = SocialSharingPluginModel.SocialTypeRec;
return SocialTypeList;
})(OS.DataTypes.GenericRecordList);
SocialSharingPluginModel.SocialTypeList = SocialTypeList;

});
define("SocialSharingPlugin.model$SocialTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "SocialSharingPlugin.model", "SocialSharingPlugin.model$SocialTypeRec"], function (exports, OutSystems, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var SocialTypeRecord = (function (_super) {
__extends(SocialTypeRecord, _super);
function SocialTypeRecord(defaults) {
_super.apply(this, arguments);
}
SocialTypeRecord.attributesToDeclare = function () {
return [
this.attr("SocialType", "socialTypeAttr", "SocialType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new SocialSharingPluginModel.SocialTypeRec());
}, true, SocialSharingPluginModel.SocialTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
SocialTypeRecord.fromStructure = function (str) {
return new SocialTypeRecord(new SocialTypeRecord.RecordClass({
socialTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SocialTypeRecord._isAnonymousRecord = true;
SocialTypeRecord.UniqueId = "af8f9e3e-3e83-1623-f01d-185c5189b64f";
SocialTypeRecord.init();
return SocialTypeRecord;
})(OS.DataTypes.GenericRecord);
SocialSharingPluginModel.SocialTypeRecord = SocialTypeRecord;

});
define("SocialSharingPlugin.model$SocialTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "SocialSharingPlugin.model", "SocialSharingPlugin.model$SocialTypeRecord"], function (exports, OutSystems, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var SocialTypeRecordList = (function (_super) {
__extends(SocialTypeRecordList, _super);
function SocialTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SocialTypeRecordList.itemType = SocialSharingPluginModel.SocialTypeRecord;
return SocialTypeRecordList;
})(OS.DataTypes.GenericRecordList);
SocialSharingPluginModel.SocialTypeRecordList = SocialTypeRecordList;

});
define("SocialSharingPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "SocialSharingPlugin.model", "CommonPlugin.model$ErrorRec", "SocialSharingPlugin.referencesHealth", "SocialSharingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, SocialSharingPluginModel) {
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
SocialSharingPluginModel.ErrorRecord = ErrorRecord;

});
define("SocialSharingPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "SocialSharingPlugin.model", "SocialSharingPlugin.model$ErrorRecord"], function (exports, OutSystems, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = SocialSharingPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
SocialSharingPluginModel.ErrorRecordList = ErrorRecordList;

});
define("SocialSharingPlugin.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "SocialSharingPlugin.model", "ServiceCenter.model$UserRec", "SocialSharingPlugin.referencesHealth", "SocialSharingPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, SocialSharingPluginModel) {
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
SocialSharingPluginModel.UserRecord = UserRecord;

});
define("SocialSharingPlugin.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "SocialSharingPlugin.model", "SocialSharingPlugin.model$UserRecord"], function (exports, OutSystems, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = SocialSharingPluginModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
SocialSharingPluginModel.UserRecordList = UserRecordList;

});
define("SocialSharingPlugin.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "SocialSharingPlugin.model", "ServiceCenter.model$UserRec", "SocialSharingPlugin.referencesHealth", "SocialSharingPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, SocialSharingPluginModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
SocialSharingPluginModel.UserList = UserList;

});
define("SocialSharingPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var SocialSharingPluginModel = exports;
Object.defineProperty(SocialSharingPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["4882e7e1-0f75-414d-aded-37a6a27afbf0"];
}
});

SocialSharingPluginModel.staticEntities = {};
SocialSharingPluginModel.staticEntities.socialType = {};
var getSocialTypeRecord = function (record) {
return SocialSharingPluginModel.module.staticEntities["c92de3f3-8bfa-4d27-bd3b-48789b455e53"][record];
};
Object.defineProperty(SocialSharingPluginModel.staticEntities.socialType, "twitter", {
get: function () {
return getSocialTypeRecord("148e6093-9de5-42b3-8cbd-769d5d3e1ecd");
}
});

Object.defineProperty(SocialSharingPluginModel.staticEntities.socialType, "all", {
get: function () {
return getSocialTypeRecord("7da121c0-800a-4105-b458-14ddd8259b09");
}
});

Object.defineProperty(SocialSharingPluginModel.staticEntities.socialType, "facebook", {
get: function () {
return getSocialTypeRecord("b4233c9c-e593-404d-94ed-edea885dd7b3");
}
});

});
