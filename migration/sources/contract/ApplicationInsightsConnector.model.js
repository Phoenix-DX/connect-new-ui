define("ApplicationInsightsConnector.model$DeviceInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var DeviceInfoRec = (function (_super) {
__extends(DeviceInfoRec, _super);
function DeviceInfoRec(defaults) {
_super.apply(this, arguments);
}
DeviceInfoRec.attributesToDeclare = function () {
return [
this.attr("DeviceUniqueId", "deviceUniqueIdAttr", "deviceUniqueId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceName", "deviceNameAttr", "deviceName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceOSVersion", "deviceOSVersionAttr", "deviceOSVersion", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceSdkVersion", "deviceSdkVersionAttr", "deviceSdkVersion", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserAgent", "userAgentAttr", "userAgent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NetworkConnectionType", "networkConnectionTypeAttr", "NetworkConnectionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AppVersion", "appVersionAttr", "appVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsVirtual", "isVirtualAttr", "isVirtual", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Manufacturer", "manufacturerAttr", "manufacturer", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Platform", "platformAttr", "platform", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Serial", "serialAttr", "serial", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DeviceInfoRec.init();
return DeviceInfoRec;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.DeviceInfoRec = DeviceInfoRec;

});
define("ApplicationInsightsConnector.model$AppInsightsUserLogEventRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$DeviceInfoRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var AppInsightsUserLogEventRec = (function (_super) {
__extends(AppInsightsUserLogEventRec, _super);
function AppInsightsUserLogEventRec(defaults) {
_super.apply(this, arguments);
}
AppInsightsUserLogEventRec.attributesToDeclare = function () {
return [
this.attr("EventCategory", "eventCategoryAttr", "EventCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserExternalId", "userExternalIdAttr", "UserExternalId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserContactBaseId", "userContactBaseIdAttr", "UserContactBaseId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeviceInfo", "deviceInfoAttr", "DeviceInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.DeviceInfoRec());
}, true, ApplicationInsightsConnectorModel.DeviceInfoRec), 
this.attr("EventInfo", "eventInfoAttr", "EventInfo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobileTimeStamp", "mobileTimeStampAttr", "MobileTimeStamp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InternalGUID", "internalGUIDAttr", "InternalGUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppInsightsUserLogEventRec.init();
return AppInsightsUserLogEventRec;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.AppInsightsUserLogEventRec = AppInsightsUserLogEventRec;

});
define("ApplicationInsightsConnector.model$AppInsightsUserLogEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$AppInsightsUserLogEventRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var AppInsightsUserLogEventRecord = (function (_super) {
__extends(AppInsightsUserLogEventRecord, _super);
function AppInsightsUserLogEventRecord(defaults) {
_super.apply(this, arguments);
}
AppInsightsUserLogEventRecord.attributesToDeclare = function () {
return [
this.attr("AppInsightsUserLogEvent", "appInsightsUserLogEventAttr", "AppInsightsUserLogEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.AppInsightsUserLogEventRec());
}, true, ApplicationInsightsConnectorModel.AppInsightsUserLogEventRec)
].concat(_super.attributesToDeclare.call(this));
};
AppInsightsUserLogEventRecord.fromStructure = function (str) {
return new AppInsightsUserLogEventRecord(new AppInsightsUserLogEventRecord.RecordClass({
appInsightsUserLogEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppInsightsUserLogEventRecord._isAnonymousRecord = true;
AppInsightsUserLogEventRecord.UniqueId = "a8c06e8d-7b3b-ca03-297d-421ce805c21e";
AppInsightsUserLogEventRecord.init();
return AppInsightsUserLogEventRecord;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.AppInsightsUserLogEventRecord = AppInsightsUserLogEventRecord;

});
define("ApplicationInsightsConnector.model$AppInsightsUserLogEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$AppInsightsUserLogEventRecord"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var AppInsightsUserLogEventRecordList = (function (_super) {
__extends(AppInsightsUserLogEventRecordList, _super);
function AppInsightsUserLogEventRecordList(defaults) {
_super.apply(this, arguments);
}
AppInsightsUserLogEventRecordList.itemType = ApplicationInsightsConnectorModel.AppInsightsUserLogEventRecord;
return AppInsightsUserLogEventRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.AppInsightsUserLogEventRecordList = AppInsightsUserLogEventRecordList;

});
define("ApplicationInsightsConnector.model$AppInsightsUserLogEventList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$AppInsightsUserLogEventRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var AppInsightsUserLogEventList = (function (_super) {
__extends(AppInsightsUserLogEventList, _super);
function AppInsightsUserLogEventList(defaults) {
_super.apply(this, arguments);
}
AppInsightsUserLogEventList.itemType = ApplicationInsightsConnectorModel.AppInsightsUserLogEventRec;
return AppInsightsUserLogEventList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.AppInsightsUserLogEventList = AppInsightsUserLogEventList;

});
define("ApplicationInsightsConnector.model$EventNameRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var EventNameRec = (function (_super) {
__extends(EventNameRec, _super);
function EventNameRec(defaults) {
_super.apply(this, arguments);
}
EventNameRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventNameRec.fromStructure = function (str) {
return new EventNameRec(new EventNameRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventNameRec.init();
return EventNameRec;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.EventNameRec = EventNameRec;

});
define("ApplicationInsightsConnector.model$EventNameRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$EventNameRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var EventNameRecord = (function (_super) {
__extends(EventNameRecord, _super);
function EventNameRecord(defaults) {
_super.apply(this, arguments);
}
EventNameRecord.attributesToDeclare = function () {
return [
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.EventNameRec());
}, true, ApplicationInsightsConnectorModel.EventNameRec)
].concat(_super.attributesToDeclare.call(this));
};
EventNameRecord.fromStructure = function (str) {
return new EventNameRecord(new EventNameRecord.RecordClass({
eventNameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventNameRecord._isAnonymousRecord = true;
EventNameRecord.UniqueId = "65fa8884-02f3-a63a-26ab-988606502084";
EventNameRecord.init();
return EventNameRecord;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.EventNameRecord = EventNameRecord;

});
define("ApplicationInsightsConnector.model$EventNameRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$EventNameRecord"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var EventNameRecordList = (function (_super) {
__extends(EventNameRecordList, _super);
function EventNameRecordList(defaults) {
_super.apply(this, arguments);
}
EventNameRecordList.itemType = ApplicationInsightsConnectorModel.EventNameRecord;
return EventNameRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.EventNameRecordList = EventNameRecordList;

});
define("ApplicationInsightsConnector.model$VersionContextRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var VersionContextRec = (function (_super) {
__extends(VersionContextRec, _super);
function VersionContextRec(defaults) {
_super.apply(this, arguments);
}
VersionContextRec.attributesToDeclare = function () {
return [
this.attr("Environment", "environmentAttr", "Environment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RuntimeVersion", "runtimeVersionAttr", "RuntimeVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Build", "buildAttr", "Build", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Version", "versionAttr", "Version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VersionContextRec.init();
return VersionContextRec;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.VersionContextRec = VersionContextRec;

});
define("ApplicationInsightsConnector.model$EventNameList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$EventNameRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var EventNameList = (function (_super) {
__extends(EventNameList, _super);
function EventNameList(defaults) {
_super.apply(this, arguments);
}
EventNameList.itemType = ApplicationInsightsConnectorModel.EventNameRec;
return EventNameList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.EventNameList = EventNameList;

});
define("ApplicationInsightsConnector.model$DeviceInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$DeviceInfoRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var DeviceInfoRecord = (function (_super) {
__extends(DeviceInfoRecord, _super);
function DeviceInfoRecord(defaults) {
_super.apply(this, arguments);
}
DeviceInfoRecord.attributesToDeclare = function () {
return [
this.attr("DeviceInfo", "deviceInfoAttr", "DeviceInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.DeviceInfoRec());
}, true, ApplicationInsightsConnectorModel.DeviceInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceInfoRecord.fromStructure = function (str) {
return new DeviceInfoRecord(new DeviceInfoRecord.RecordClass({
deviceInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceInfoRecord._isAnonymousRecord = true;
DeviceInfoRecord.UniqueId = "7fbd0dbd-63e0-ca14-2334-b413aa9161bd";
DeviceInfoRecord.init();
return DeviceInfoRecord;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.DeviceInfoRecord = DeviceInfoRecord;

});
define("ApplicationInsightsConnector.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "ApplicationInsightsConnector.model", "ServiceCenter.model$UserRec", "ApplicationInsightsConnector.referencesHealth", "ApplicationInsightsConnector.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, ApplicationInsightsConnectorModel) {
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
ApplicationInsightsConnectorModel.UserRecord = UserRecord;

});
define("ApplicationInsightsConnector.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$UserRecord"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = ApplicationInsightsConnectorModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.UserRecordList = UserRecordList;

});
define("ApplicationInsightsConnector.model$DeviceInfoList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$DeviceInfoRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var DeviceInfoList = (function (_super) {
__extends(DeviceInfoList, _super);
function DeviceInfoList(defaults) {
_super.apply(this, arguments);
}
DeviceInfoList.itemType = ApplicationInsightsConnectorModel.DeviceInfoRec;
return DeviceInfoList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.DeviceInfoList = DeviceInfoList;

});
define("ApplicationInsightsConnector.model$VersionContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$VersionContextRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var VersionContextRecord = (function (_super) {
__extends(VersionContextRecord, _super);
function VersionContextRecord(defaults) {
_super.apply(this, arguments);
}
VersionContextRecord.attributesToDeclare = function () {
return [
this.attr("VersionContext", "versionContextAttr", "VersionContext", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.VersionContextRec());
}, true, ApplicationInsightsConnectorModel.VersionContextRec)
].concat(_super.attributesToDeclare.call(this));
};
VersionContextRecord.fromStructure = function (str) {
return new VersionContextRecord(new VersionContextRecord.RecordClass({
versionContextAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VersionContextRecord._isAnonymousRecord = true;
VersionContextRecord.UniqueId = "9f68c1dc-1501-10f3-5bf4-f96b5ac359e7";
VersionContextRecord.init();
return VersionContextRecord;
})(OS.DataTypes.GenericRecord);
ApplicationInsightsConnectorModel.VersionContextRecord = VersionContextRecord;

});
define("ApplicationInsightsConnector.model$DeviceInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$DeviceInfoRecord"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var DeviceInfoRecordList = (function (_super) {
__extends(DeviceInfoRecordList, _super);
function DeviceInfoRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceInfoRecordList.itemType = ApplicationInsightsConnectorModel.DeviceInfoRecord;
return DeviceInfoRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.DeviceInfoRecordList = DeviceInfoRecordList;

});
define("ApplicationInsightsConnector.model$VersionContextList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$VersionContextRec"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var VersionContextList = (function (_super) {
__extends(VersionContextList, _super);
function VersionContextList(defaults) {
_super.apply(this, arguments);
}
VersionContextList.itemType = ApplicationInsightsConnectorModel.VersionContextRec;
return VersionContextList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.VersionContextList = VersionContextList;

});
define("ApplicationInsightsConnector.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "ApplicationInsightsConnector.model", "ServiceCenter.model$UserRec", "ApplicationInsightsConnector.referencesHealth", "ApplicationInsightsConnector.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.UserList = UserList;

});
define("ApplicationInsightsConnector.model$VersionContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "ApplicationInsightsConnector.model$VersionContextRecord"], function (exports, OutSystems, ApplicationInsightsConnectorModel) {
var OS = OutSystems.Internal;
var VersionContextRecordList = (function (_super) {
__extends(VersionContextRecordList, _super);
function VersionContextRecordList(defaults) {
_super.apply(this, arguments);
}
VersionContextRecordList.itemType = ApplicationInsightsConnectorModel.VersionContextRecord;
return VersionContextRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationInsightsConnectorModel.VersionContextRecordList = VersionContextRecordList;

});
define("ApplicationInsightsConnector.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ApplicationInsightsConnectorModel = exports;
Object.defineProperty(ApplicationInsightsConnectorModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["982994be-5970-4d2e-bb6c-c16726d306a9"];
}
});

ApplicationInsightsConnectorModel.staticEntities = {};
ApplicationInsightsConnectorModel.staticEntities.eventName = {};
var getEventNameRecord = function (record) {
return ApplicationInsightsConnectorModel.module.staticEntities["97e8f099-b1c4-4ee4-a1a2-2327f39ded3a"][record];
};
Object.defineProperty(ApplicationInsightsConnectorModel.staticEntities.eventName, "functional", {
get: function () {
return getEventNameRecord("373ef48f-d1c8-44af-bd3b-65d4d4708357");
}
});

Object.defineProperty(ApplicationInsightsConnectorModel.staticEntities.eventName, "error", {
get: function () {
return getEventNameRecord("ad7baeb9-2d06-4f45-a7b6-9ca899a93cc7");
}
});

Object.defineProperty(ApplicationInsightsConnectorModel.staticEntities.eventName, "system", {
get: function () {
return getEventNameRecord("ee38a478-98aa-4725-9e4b-37665203496e");
}
});

});
