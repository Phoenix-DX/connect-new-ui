define("UBT_AppManager_Mobile.model$ExtraDataElementList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var ExtraDataElementList = (function (_super) {
__extends(ExtraDataElementList, _super);
function ExtraDataElementList(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementList.itemType = FirebaseCloudMessagingPluginModel.ExtraDataElementRec;
return ExtraDataElementList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.ExtraDataElementList = ExtraDataElementList;

});
define("UBT_AppManager_Mobile.model$DefaultNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$DefaultNotificationRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var DefaultNotificationRecord = (function (_super) {
__extends(DefaultNotificationRecord, _super);
function DefaultNotificationRecord(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationRecord.attributesToDeclare = function () {
return [
this.attr("DefaultNotification", "defaultNotificationAttr", "DefaultNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.DefaultNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.DefaultNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultNotificationRecord.fromStructure = function (str) {
return new DefaultNotificationRecord(new DefaultNotificationRecord.RecordClass({
defaultNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultNotificationRecord._isAnonymousRecord = true;
DefaultNotificationRecord.UniqueId = "0053401b-ede4-25a8-83bc-7ba1fa76e443";
DefaultNotificationRecord.init();
return DefaultNotificationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.DefaultNotificationRecord = DefaultNotificationRecord;

});
define("UBT_AppManager_Mobile.model$UBT_FCM_EventsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var UBT_FCM_EventsRec = (function (_super) {
__extends(UBT_FCM_EventsRec, _super);
function UBT_FCM_EventsRec(defaults) {
_super.apply(this, arguments);
}
UBT_FCM_EventsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FCM_EventsRec.fromStructure = function (str) {
return new UBT_FCM_EventsRec(new UBT_FCM_EventsRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FCM_EventsRec.init();
return UBT_FCM_EventsRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.UBT_FCM_EventsRec = UBT_FCM_EventsRec;

});
define("UBT_AppManager_Mobile.model$UBT_FCM_EventsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$UBT_FCM_EventsRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var UBT_FCM_EventsList = (function (_super) {
__extends(UBT_FCM_EventsList, _super);
function UBT_FCM_EventsList(defaults) {
_super.apply(this, arguments);
}
UBT_FCM_EventsList.itemType = UBT_AppManager_MobileModel.UBT_FCM_EventsRec;
return UBT_FCM_EventsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.UBT_FCM_EventsList = UBT_FCM_EventsList;

});
define("UBT_AppManager_Mobile.model$AppManager_JSUtils_ElementCache_PropertyRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_JSUtils_ElementCache_PropertyRecord = (function (_super) {
__extends(AppManager_JSUtils_ElementCache_PropertyRecord, _super);
function AppManager_JSUtils_ElementCache_PropertyRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_JSUtils_ElementCache_PropertyRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_JSUtils_ElementCache_Property", "appManager_JSUtils_ElementCache_PropertyAttr", "AppManager_JSUtils_ElementCache_Property", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec());
}, true, UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_JSUtils_ElementCache_PropertyRecord.fromStructure = function (str) {
return new AppManager_JSUtils_ElementCache_PropertyRecord(new AppManager_JSUtils_ElementCache_PropertyRecord.RecordClass({
appManager_JSUtils_ElementCache_PropertyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_JSUtils_ElementCache_PropertyRecord._isAnonymousRecord = true;
AppManager_JSUtils_ElementCache_PropertyRecord.UniqueId = "1e38f0ed-146d-f39b-9c8f-a564b5ae46e2";
AppManager_JSUtils_ElementCache_PropertyRecord.init();
return AppManager_JSUtils_ElementCache_PropertyRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.AppManager_JSUtils_ElementCache_PropertyRecord = AppManager_JSUtils_ElementCache_PropertyRecord;

});
define("UBT_AppManager_Mobile.model$AppManager_JSUtils_ElementCache_PropertyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$AppManager_JSUtils_ElementCache_PropertyRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_JSUtils_ElementCache_PropertyRecordList = (function (_super) {
__extends(AppManager_JSUtils_ElementCache_PropertyRecordList, _super);
function AppManager_JSUtils_ElementCache_PropertyRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_JSUtils_ElementCache_PropertyRecordList.itemType = UBT_AppManager_MobileModel.AppManager_JSUtils_ElementCache_PropertyRecord;
return AppManager_JSUtils_ElementCache_PropertyRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_JSUtils_ElementCache_PropertyRecordList = AppManager_JSUtils_ElementCache_PropertyRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_DeviceContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextRecord = (function (_super) {
__extends(AppManager_DeviceContextRecord, _super);
function AppManager_DeviceContextRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_DeviceContext", "appManager_DeviceContextAttr", "AppManager_DeviceContext", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_DeviceContextRec());
}, true, UBT_AppManager_CSModel.AppManager_DeviceContextRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_DeviceContextRecord.fromStructure = function (str) {
return new AppManager_DeviceContextRecord(new AppManager_DeviceContextRecord.RecordClass({
appManager_DeviceContextAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_DeviceContextRecord._isAnonymousRecord = true;
AppManager_DeviceContextRecord.UniqueId = "e046fbad-9b16-97b9-a3a8-12797a167da9";
AppManager_DeviceContextRecord.init();
return AppManager_DeviceContextRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.AppManager_DeviceContextRecord = AppManager_DeviceContextRecord;

});
define("UBT_AppManager_Mobile.model$AppManager_DeviceContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$AppManager_DeviceContextRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextRecordList = (function (_super) {
__extends(AppManager_DeviceContextRecordList, _super);
function AppManager_DeviceContextRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextRecordList.itemType = UBT_AppManager_MobileModel.AppManager_DeviceContextRecord;
return AppManager_DeviceContextRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_DeviceContextRecordList = AppManager_DeviceContextRecordList;

});
define("UBT_AppManager_Mobile.model$ExtraDataElementRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var ExtraDataElementRecord = (function (_super) {
__extends(ExtraDataElementRecord, _super);
function ExtraDataElementRecord(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementRecord.attributesToDeclare = function () {
return [
this.attr("ExtraDataElement", "extraDataElementAttr", "ExtraDataElement", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataElementRec());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataElementRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtraDataElementRecord.fromStructure = function (str) {
return new ExtraDataElementRecord(new ExtraDataElementRecord.RecordClass({
extraDataElementAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtraDataElementRecord._isAnonymousRecord = true;
ExtraDataElementRecord.UniqueId = "34689f3e-8db5-373a-5637-34c8cbe59f7f";
ExtraDataElementRecord.init();
return ExtraDataElementRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.ExtraDataElementRecord = ExtraDataElementRecord;

});
define("UBT_AppManager_Mobile.model$ExtraDataElementRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$ExtraDataElementRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var ExtraDataElementRecordList = (function (_super) {
__extends(ExtraDataElementRecordList, _super);
function ExtraDataElementRecordList(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementRecordList.itemType = UBT_AppManager_MobileModel.ExtraDataElementRecord;
return ExtraDataElementRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.ExtraDataElementRecordList = ExtraDataElementRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_ConfigClientCacheList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheList = (function (_super) {
__extends(AppManager_ConfigClientCacheList, _super);
function AppManager_ConfigClientCacheList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec;
return AppManager_ConfigClientCacheList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_ConfigClientCacheList = AppManager_ConfigClientCacheList;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintReadCallback_ResponseList = (function (_super) {
__extends(PIN_FingerprintReadCallback_ResponseList, _super);
function PIN_FingerprintReadCallback_ResponseList(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintReadCallback_ResponseList.itemType = UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec;
return PIN_FingerprintReadCallback_ResponseList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_ResponseList = PIN_FingerprintReadCallback_ResponseList;

});
define("UBT_AppManager_Mobile.model$Streamline_ContentProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var Streamline_ContentProviderRec = (function (_super) {
__extends(Streamline_ContentProviderRec, _super);
function Streamline_ContentProviderRec(defaults) {
_super.apply(this, arguments);
}
Streamline_ContentProviderRec.attributesToDeclare = function () {
return [
this.attr("SerialNumber", "serialNumberAttr", "serialNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TOTP", "tOTPAttr", "totp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Streamline_ContentProviderRec.init();
return Streamline_ContentProviderRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.Streamline_ContentProviderRec = Streamline_ContentProviderRec;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_InputRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintReadCallback_InputRecord = (function (_super) {
__extends(PIN_FingerprintReadCallback_InputRecord, _super);
function PIN_FingerprintReadCallback_InputRecord(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintReadCallback_InputRecord.attributesToDeclare = function () {
return [
this.attr("PIN_FingerprintReadCallback_Input", "pIN_FingerprintReadCallback_InputAttr", "PIN_FingerprintReadCallback_Input", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec());
}, true, UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec)
].concat(_super.attributesToDeclare.call(this));
};
PIN_FingerprintReadCallback_InputRecord.fromStructure = function (str) {
return new PIN_FingerprintReadCallback_InputRecord(new PIN_FingerprintReadCallback_InputRecord.RecordClass({
pIN_FingerprintReadCallback_InputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PIN_FingerprintReadCallback_InputRecord._isAnonymousRecord = true;
PIN_FingerprintReadCallback_InputRecord.UniqueId = "65a5d941-1742-a5d2-b95e-e0ca0d501d92";
PIN_FingerprintReadCallback_InputRecord.init();
return PIN_FingerprintReadCallback_InputRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_InputRecord = PIN_FingerprintReadCallback_InputRecord;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_InputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_InputRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintReadCallback_InputRecordList = (function (_super) {
__extends(PIN_FingerprintReadCallback_InputRecordList, _super);
function PIN_FingerprintReadCallback_InputRecordList(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintReadCallback_InputRecordList.itemType = UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_InputRecord;
return PIN_FingerprintReadCallback_InputRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_InputRecordList = PIN_FingerprintReadCallback_InputRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_ConfigClientCacheRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheRecord = (function (_super) {
__extends(AppManager_ConfigClientCacheRecord, _super);
function AppManager_ConfigClientCacheRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_ConfigClientCache", "appManager_ConfigClientCacheAttr", "AppManager_ConfigClientCache", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigClientCacheRecord.fromStructure = function (str) {
return new AppManager_ConfigClientCacheRecord(new AppManager_ConfigClientCacheRecord.RecordClass({
appManager_ConfigClientCacheAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ConfigClientCacheRecord._isAnonymousRecord = true;
AppManager_ConfigClientCacheRecord.UniqueId = "2bdc8a79-52bb-5aaa-40a9-71d785a17ccb";
AppManager_ConfigClientCacheRecord.init();
return AppManager_ConfigClientCacheRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.AppManager_ConfigClientCacheRecord = AppManager_ConfigClientCacheRecord;

});
define("UBT_AppManager_Mobile.model$", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.TextList = TextList;

});
define("UBT_AppManager_Mobile.model$PermissionListRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PermissionListRecord = (function (_super) {
__extends(PermissionListRecord, _super);
function PermissionListRecord(defaults) {
_super.apply(this, arguments);
}
PermissionListRecord.attributesToDeclare = function () {
return [
this.attr("PermissionList", "permissionListAttr", "PermissionList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.PermissionListRec());
}, true, UBT_AppManager_CSModel.PermissionListRec)
].concat(_super.attributesToDeclare.call(this));
};
PermissionListRecord.fromStructure = function (str) {
return new PermissionListRecord(new PermissionListRecord.RecordClass({
permissionListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PermissionListRecord._isAnonymousRecord = true;
PermissionListRecord.UniqueId = "304118b3-0081-145d-2b8f-19893b827812";
PermissionListRecord.init();
return PermissionListRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.PermissionListRecord = PermissionListRecord;

});
define("UBT_AppManager_Mobile.model$Streamline_ContentProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$Streamline_ContentProviderRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var Streamline_ContentProviderRecord = (function (_super) {
__extends(Streamline_ContentProviderRecord, _super);
function Streamline_ContentProviderRecord(defaults) {
_super.apply(this, arguments);
}
Streamline_ContentProviderRecord.attributesToDeclare = function () {
return [
this.attr("Streamline_ContentProvider", "streamline_ContentProviderAttr", "Streamline_ContentProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_MobileModel.Streamline_ContentProviderRec());
}, true, UBT_AppManager_MobileModel.Streamline_ContentProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
Streamline_ContentProviderRecord.fromStructure = function (str) {
return new Streamline_ContentProviderRecord(new Streamline_ContentProviderRecord.RecordClass({
streamline_ContentProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Streamline_ContentProviderRecord._isAnonymousRecord = true;
Streamline_ContentProviderRecord.UniqueId = "3119ff81-fd52-0d81-95b2-3b95fe5dbaa1";
Streamline_ContentProviderRecord.init();
return Streamline_ContentProviderRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.Streamline_ContentProviderRecord = Streamline_ContentProviderRecord;

});
define("UBT_AppManager_Mobile.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBT_AppManager_Mobile.model", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.ErrorList = ErrorList;

});
define("UBT_AppManager_Mobile.model$Streamline_ContentProviderList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$Streamline_ContentProviderRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var Streamline_ContentProviderList = (function (_super) {
__extends(Streamline_ContentProviderList, _super);
function Streamline_ContentProviderList(defaults) {
_super.apply(this, arguments);
}
Streamline_ContentProviderList.itemType = UBT_AppManager_MobileModel.Streamline_ContentProviderRec;
return Streamline_ContentProviderList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.Streamline_ContentProviderList = Streamline_ContentProviderList;

});
define("UBT_AppManager_Mobile.model$AppManager_ConfigClientRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientRecord = (function (_super) {
__extends(AppManager_ConfigClientRecord, _super);
function AppManager_ConfigClientRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_ConfigClient", "appManager_ConfigClientAttr", "AppManager_ConfigClient", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientRec());
}, true, UBT_AppManager_CSModel.AppManager_ConfigClientRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_ConfigClientRecord.fromStructure = function (str) {
return new AppManager_ConfigClientRecord(new AppManager_ConfigClientRecord.RecordClass({
appManager_ConfigClientAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_ConfigClientRecord._isAnonymousRecord = true;
AppManager_ConfigClientRecord.UniqueId = "39b57c01-5c22-cd1f-f995-b55082c7573a";
AppManager_ConfigClientRecord.init();
return AppManager_ConfigClientRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.AppManager_ConfigClientRecord = AppManager_ConfigClientRecord;

});
define("UBT_AppManager_Mobile.model$DefaultNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$DefaultNotificationRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var DefaultNotificationList = (function (_super) {
__extends(DefaultNotificationList, _super);
function DefaultNotificationList(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationList.itemType = FirebaseCloudMessagingPluginModel.DefaultNotificationRec;
return DefaultNotificationList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.DefaultNotificationList = DefaultNotificationList;

});
define("UBT_AppManager_Mobile.model$AppManager_AzureInsightsEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_DB.model$AppManager_AzureInsightsEventRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_AzureInsightsEventsRecord = (function (_super) {
__extends(AppManager_AzureInsightsEventsRecord, _super);
function AppManager_AzureInsightsEventsRecord(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureInsightsEventsRecord.attributesToDeclare = function () {
return [
this.attr("AppManager_AzureInsightsEvent", "appManager_AzureInsightsEventAttr", "AppManager_AzureInsightsEvents", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec());
}, true, UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec)
].concat(_super.attributesToDeclare.call(this));
};
AppManager_AzureInsightsEventsRecord.fromStructure = function (str) {
return new AppManager_AzureInsightsEventsRecord(new AppManager_AzureInsightsEventsRecord.RecordClass({
appManager_AzureInsightsEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AppManager_AzureInsightsEventsRecord._isAnonymousRecord = true;
AppManager_AzureInsightsEventsRecord.UniqueId = "3ed99897-a250-ef48-9daf-3a285f01c395";
AppManager_AzureInsightsEventsRecord.init();
return AppManager_AzureInsightsEventsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.AppManager_AzureInsightsEventsRecord = AppManager_AzureInsightsEventsRecord;

});
define("UBT_AppManager_Mobile.model$LocalPinRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var LocalPinRec = (function (_super) {
__extends(LocalPinRec, _super);
function LocalPinRec(defaults) {
_super.apply(this, arguments);
}
LocalPinRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PINCode", "pINCodeAttr", "PINCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AppId", "appIdAttr", "AppId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalPinRec.init();
return LocalPinRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.LocalPinRec = LocalPinRec;

});
define("UBT_AppManager_Mobile.model$Streamline_ContentProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$Streamline_ContentProviderRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var Streamline_ContentProviderRecordList = (function (_super) {
__extends(Streamline_ContentProviderRecordList, _super);
function Streamline_ContentProviderRecordList(defaults) {
_super.apply(this, arguments);
}
Streamline_ContentProviderRecordList.itemType = UBT_AppManager_MobileModel.Streamline_ContentProviderRecord;
return Streamline_ContentProviderRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.Streamline_ContentProviderRecordList = Streamline_ContentProviderRecordList;

});
define("UBT_AppManager_Mobile.model$FCM_NotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin", "UBT_AppManager_Mobile.model$ExtraDataElementList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var FCM_NotificationRec = (function (_super) {
__extends(FCM_NotificationRec, _super);
function FCM_NotificationRec(defaults) {
_super.apply(this, arguments);
}
FCM_NotificationRec.attributesToDeclare = function () {
return [
this.attr("Body", "bodyAttr", "body", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MessageID", "messageIDAttr", "messageID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeToLive", "timeToLiveAttr", "timeToLive", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timestamp", "timestampAttr", "timeStamp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Image", "imageAttr", "image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeepLink", "deepLinkAttr", "deepLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtraDataList", "extraDataListAttr", "extraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_MobileModel.ExtraDataElementList());
}, true, UBT_AppManager_MobileModel.ExtraDataElementList), 
this.attr("ScreenName", "screenNameAttr", "screenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParameterList", "parameterListAttr", "parameterArray", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_MobileModel.ExtraDataElementList());
}, true, UBT_AppManager_MobileModel.ExtraDataElementList)
].concat(_super.attributesToDeclare.call(this));
};
FCM_NotificationRec.init();
return FCM_NotificationRec;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.FCM_NotificationRec = FCM_NotificationRec;

});
define("UBT_AppManager_Mobile.model$FCM_NotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$FCM_NotificationRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var FCM_NotificationRecord = (function (_super) {
__extends(FCM_NotificationRecord, _super);
function FCM_NotificationRecord(defaults) {
_super.apply(this, arguments);
}
FCM_NotificationRecord.attributesToDeclare = function () {
return [
this.attr("FCM_Notification", "fCM_NotificationAttr", "FCM_Notification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_MobileModel.FCM_NotificationRec());
}, true, UBT_AppManager_MobileModel.FCM_NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
FCM_NotificationRecord.fromStructure = function (str) {
return new FCM_NotificationRecord(new FCM_NotificationRecord.RecordClass({
fCM_NotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FCM_NotificationRecord._isAnonymousRecord = true;
FCM_NotificationRecord.UniqueId = "52f4e31d-2ba9-f194-b61e-5c262087dd11";
FCM_NotificationRecord.init();
return FCM_NotificationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.FCM_NotificationRecord = FCM_NotificationRecord;

});
define("UBT_AppManager_Mobile.model$PermissionListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$PermissionListRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PermissionListRecordList = (function (_super) {
__extends(PermissionListRecordList, _super);
function PermissionListRecordList(defaults) {
_super.apply(this, arguments);
}
PermissionListRecordList.itemType = UBT_AppManager_MobileModel.PermissionListRecord;
return PermissionListRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PermissionListRecordList = PermissionListRecordList;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintAvailableCallback_ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintAvailableCallback_ResponseRecord = (function (_super) {
__extends(PIN_FingerprintAvailableCallback_ResponseRecord, _super);
function PIN_FingerprintAvailableCallback_ResponseRecord(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintAvailableCallback_ResponseRecord.attributesToDeclare = function () {
return [
this.attr("PIN_FingerprintAvailableCallback_Response", "pIN_FingerprintAvailableCallback_ResponseAttr", "PIN_FingerprintAvailableCallback_Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec());
}, true, UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
PIN_FingerprintAvailableCallback_ResponseRecord.fromStructure = function (str) {
return new PIN_FingerprintAvailableCallback_ResponseRecord(new PIN_FingerprintAvailableCallback_ResponseRecord.RecordClass({
pIN_FingerprintAvailableCallback_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PIN_FingerprintAvailableCallback_ResponseRecord._isAnonymousRecord = true;
PIN_FingerprintAvailableCallback_ResponseRecord.UniqueId = "d39eed69-c6cc-8dfe-9675-90de333afef1";
PIN_FingerprintAvailableCallback_ResponseRecord.init();
return PIN_FingerprintAvailableCallback_ResponseRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.PIN_FingerprintAvailableCallback_ResponseRecord = PIN_FingerprintAvailableCallback_ResponseRecord;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintAvailableCallback_ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$PIN_FingerprintAvailableCallback_ResponseRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintAvailableCallback_ResponseRecordList = (function (_super) {
__extends(PIN_FingerprintAvailableCallback_ResponseRecordList, _super);
function PIN_FingerprintAvailableCallback_ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintAvailableCallback_ResponseRecordList.itemType = UBT_AppManager_MobileModel.PIN_FingerprintAvailableCallback_ResponseRecord;
return PIN_FingerprintAvailableCallback_ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PIN_FingerprintAvailableCallback_ResponseRecordList = PIN_FingerprintAvailableCallback_ResponseRecordList;

});
define("UBT_AppManager_Mobile.model$DefaultNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$DefaultNotificationRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var DefaultNotificationRecordList = (function (_super) {
__extends(DefaultNotificationRecordList, _super);
function DefaultNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationRecordList.itemType = UBT_AppManager_MobileModel.DefaultNotificationRecord;
return DefaultNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.DefaultNotificationRecordList = DefaultNotificationRecordList;

});
define("UBT_AppManager_Mobile.model$FCM_NotificationList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$FCM_NotificationRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var FCM_NotificationList = (function (_super) {
__extends(FCM_NotificationList, _super);
function FCM_NotificationList(defaults) {
_super.apply(this, arguments);
}
FCM_NotificationList.itemType = UBT_AppManager_MobileModel.FCM_NotificationRec;
return FCM_NotificationList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.FCM_NotificationList = FCM_NotificationList;

});
define("UBT_AppManager_Mobile.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBT_AppManager_Mobile.model", "CommonPlugin.model$ErrorRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBT_AppManager_MobileModel) {
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
UBT_AppManager_MobileModel.ErrorRecord = ErrorRecord;

});
define("UBT_AppManager_Mobile.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$ErrorRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = UBT_AppManager_MobileModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.ErrorRecordList = ErrorRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_ConfigClientList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientList = (function (_super) {
__extends(AppManager_ConfigClientList, _super);
function AppManager_ConfigClientList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientRec;
return AppManager_ConfigClientList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_ConfigClientList = AppManager_ConfigClientList;

});
define("UBT_AppManager_Mobile.model$PermissionListList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PermissionListList = (function (_super) {
__extends(PermissionListList, _super);
function PermissionListList(defaults) {
_super.apply(this, arguments);
}
PermissionListList.itemType = UBT_AppManager_CSModel.PermissionListRec;
return PermissionListList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PermissionListList = PermissionListList;

});
define("UBT_AppManager_Mobile.model$AppManager_ConfigClientCacheRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$AppManager_ConfigClientCacheRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientCacheRecordList = (function (_super) {
__extends(AppManager_ConfigClientCacheRecordList, _super);
function AppManager_ConfigClientCacheRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientCacheRecordList.itemType = UBT_AppManager_MobileModel.AppManager_ConfigClientCacheRecord;
return AppManager_ConfigClientCacheRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_ConfigClientCacheRecordList = AppManager_ConfigClientCacheRecordList;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintReadCallback_ResponseRecord = (function (_super) {
__extends(PIN_FingerprintReadCallback_ResponseRecord, _super);
function PIN_FingerprintReadCallback_ResponseRecord(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintReadCallback_ResponseRecord.attributesToDeclare = function () {
return [
this.attr("PIN_FingerprintReadCallback_Response", "pIN_FingerprintReadCallback_ResponseAttr", "PIN_FingerprintReadCallback_Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec());
}, true, UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
PIN_FingerprintReadCallback_ResponseRecord.fromStructure = function (str) {
return new PIN_FingerprintReadCallback_ResponseRecord(new PIN_FingerprintReadCallback_ResponseRecord.RecordClass({
pIN_FingerprintReadCallback_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PIN_FingerprintReadCallback_ResponseRecord._isAnonymousRecord = true;
PIN_FingerprintReadCallback_ResponseRecord.UniqueId = "d01f939e-1fb5-40c9-78c2-888de49f88d5";
PIN_FingerprintReadCallback_ResponseRecord.init();
return PIN_FingerprintReadCallback_ResponseRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_ResponseRecord = PIN_FingerprintReadCallback_ResponseRecord;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_ResponseRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintReadCallback_ResponseRecordList = (function (_super) {
__extends(PIN_FingerprintReadCallback_ResponseRecordList, _super);
function PIN_FingerprintReadCallback_ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintReadCallback_ResponseRecordList.itemType = UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_ResponseRecord;
return PIN_FingerprintReadCallback_ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_ResponseRecordList = PIN_FingerprintReadCallback_ResponseRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_JSUtils_ElementCache_PropertyList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_JSUtils_ElementCache_PropertyList = (function (_super) {
__extends(AppManager_JSUtils_ElementCache_PropertyList, _super);
function AppManager_JSUtils_ElementCache_PropertyList(defaults) {
_super.apply(this, arguments);
}
AppManager_JSUtils_ElementCache_PropertyList.itemType = UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec;
return AppManager_JSUtils_ElementCache_PropertyList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_JSUtils_ElementCache_PropertyList = AppManager_JSUtils_ElementCache_PropertyList;

});
define("UBT_AppManager_Mobile.model$SilentNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var SilentNotificationRecord = (function (_super) {
__extends(SilentNotificationRecord, _super);
function SilentNotificationRecord(defaults) {
_super.apply(this, arguments);
}
SilentNotificationRecord.attributesToDeclare = function () {
return [
this.attr("SilentNotification", "silentNotificationAttr", "SilentNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SilentNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.SilentNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentNotificationRecord.fromStructure = function (str) {
return new SilentNotificationRecord(new SilentNotificationRecord.RecordClass({
silentNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SilentNotificationRecord._isAnonymousRecord = true;
SilentNotificationRecord.UniqueId = "8c591730-f701-a3f5-cfb5-6d8732bbaf80";
SilentNotificationRecord.init();
return SilentNotificationRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.SilentNotificationRecord = SilentNotificationRecord;

});
define("UBT_AppManager_Mobile.model$AppManager_AzureInsightsEventsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_DB.model$AppManager_AzureInsightsEventRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_DB"], function (exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_AzureInsightsEventsList = (function (_super) {
__extends(AppManager_AzureInsightsEventsList, _super);
function AppManager_AzureInsightsEventsList(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureInsightsEventsList.itemType = UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec;
return AppManager_AzureInsightsEventsList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_AzureInsightsEventsList = AppManager_AzureInsightsEventsList;

});
define("UBT_AppManager_Mobile.model$UBT_FCM_EventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$UBT_FCM_EventsRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var UBT_FCM_EventsRecord = (function (_super) {
__extends(UBT_FCM_EventsRecord, _super);
function UBT_FCM_EventsRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FCM_EventsRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FCM_Events", "uBT_FCM_EventsAttr", "UBT_FCM_Events", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_MobileModel.UBT_FCM_EventsRec());
}, true, UBT_AppManager_MobileModel.UBT_FCM_EventsRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FCM_EventsRecord.fromStructure = function (str) {
return new UBT_FCM_EventsRecord(new UBT_FCM_EventsRecord.RecordClass({
uBT_FCM_EventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FCM_EventsRecord._isAnonymousRecord = true;
UBT_FCM_EventsRecord.UniqueId = "9a5934a8-f09f-9195-7e67-5add3c4d847c";
UBT_FCM_EventsRecord.init();
return UBT_FCM_EventsRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.UBT_FCM_EventsRecord = UBT_FCM_EventsRecord;

});
define("UBT_AppManager_Mobile.model$SilentNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$SilentNotificationRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var SilentNotificationRecordList = (function (_super) {
__extends(SilentNotificationRecordList, _super);
function SilentNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
SilentNotificationRecordList.itemType = UBT_AppManager_MobileModel.SilentNotificationRecord;
return SilentNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.SilentNotificationRecordList = SilentNotificationRecordList;

});
define("UBT_AppManager_Mobile.model$LocalPinRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$LocalPinRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var LocalPinRecord = (function (_super) {
__extends(LocalPinRecord, _super);
function LocalPinRecord(defaults) {
_super.apply(this, arguments);
}
LocalPinRecord.attributesToDeclare = function () {
return [
this.attr("LocalPin", "localPinAttr", "LocalPin", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_MobileModel.LocalPinRec());
}, true, UBT_AppManager_MobileModel.LocalPinRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalPinRecord.fromStructure = function (str) {
return new LocalPinRecord(new LocalPinRecord.RecordClass({
localPinAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalPinRecord._isAnonymousRecord = true;
LocalPinRecord.UniqueId = "d4518a49-83bf-63f0-6571-60d348b98ff0";
LocalPinRecord.init();
return LocalPinRecord;
})(OS.DataTypes.GenericRecord);
UBT_AppManager_MobileModel.LocalPinRecord = LocalPinRecord;

});
define("UBT_AppManager_Mobile.model$LocalPinRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$LocalPinRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var LocalPinRecordList = (function (_super) {
__extends(LocalPinRecordList, _super);
function LocalPinRecordList(defaults) {
_super.apply(this, arguments);
}
LocalPinRecordList.itemType = UBT_AppManager_MobileModel.LocalPinRecord;
return LocalPinRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.LocalPinRecordList = LocalPinRecordList;

});
define("UBT_AppManager_Mobile.model$LocalPinList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$LocalPinRec"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var LocalPinList = (function (_super) {
__extends(LocalPinList, _super);
function LocalPinList(defaults) {
_super.apply(this, arguments);
}
LocalPinList.itemType = UBT_AppManager_MobileModel.LocalPinRec;
return LocalPinList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.LocalPinList = LocalPinList;

});
define("UBT_AppManager_Mobile.model$FCM_NotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$FCM_NotificationRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var FCM_NotificationRecordList = (function (_super) {
__extends(FCM_NotificationRecordList, _super);
function FCM_NotificationRecordList(defaults) {
_super.apply(this, arguments);
}
FCM_NotificationRecordList.itemType = UBT_AppManager_MobileModel.FCM_NotificationRecord;
return FCM_NotificationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.FCM_NotificationRecordList = FCM_NotificationRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_ConfigClientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$AppManager_ConfigClientRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_ConfigClientRecordList = (function (_super) {
__extends(AppManager_ConfigClientRecordList, _super);
function AppManager_ConfigClientRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_ConfigClientRecordList.itemType = UBT_AppManager_MobileModel.AppManager_ConfigClientRecord;
return AppManager_ConfigClientRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_ConfigClientRecordList = AppManager_ConfigClientRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_DeviceContextList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager_Mobile.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager_CS"], function (exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_DeviceContextList = (function (_super) {
__extends(AppManager_DeviceContextList, _super);
function AppManager_DeviceContextList(defaults) {
_super.apply(this, arguments);
}
AppManager_DeviceContextList.itemType = UBT_AppManager_CSModel.AppManager_DeviceContextRec;
return AppManager_DeviceContextList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_DeviceContextList = AppManager_DeviceContextList;

});
define("UBT_AppManager_Mobile.model$UBT_FCM_EventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$UBT_FCM_EventsRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var UBT_FCM_EventsRecordList = (function (_super) {
__extends(UBT_FCM_EventsRecordList, _super);
function UBT_FCM_EventsRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FCM_EventsRecordList.itemType = UBT_AppManager_MobileModel.UBT_FCM_EventsRecord;
return UBT_FCM_EventsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.UBT_FCM_EventsRecordList = UBT_FCM_EventsRecordList;

});
define("UBT_AppManager_Mobile.model$AppManager_AzureInsightsEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.model$AppManager_AzureInsightsEventsRecord"], function (exports, OutSystems, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var AppManager_AzureInsightsEventsRecordList = (function (_super) {
__extends(AppManager_AzureInsightsEventsRecordList, _super);
function AppManager_AzureInsightsEventsRecordList(defaults) {
_super.apply(this, arguments);
}
AppManager_AzureInsightsEventsRecordList.itemType = UBT_AppManager_MobileModel.AppManager_AzureInsightsEventsRecord;
return AppManager_AzureInsightsEventsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.AppManager_AzureInsightsEventsRecordList = AppManager_AzureInsightsEventsRecordList;

});
define("UBT_AppManager_Mobile.model$SilentNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "UBT_AppManager_Mobile.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$FirebaseCloudMessagingPlugin"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var SilentNotificationList = (function (_super) {
__extends(SilentNotificationList, _super);
function SilentNotificationList(defaults) {
_super.apply(this, arguments);
}
SilentNotificationList.itemType = FirebaseCloudMessagingPluginModel.SilentNotificationRec;
return SilentNotificationList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.SilentNotificationList = SilentNotificationList;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintReadCallback_InputList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintReadCallback_InputList = (function (_super) {
__extends(PIN_FingerprintReadCallback_InputList, _super);
function PIN_FingerprintReadCallback_InputList(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintReadCallback_InputList.itemType = UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec;
return PIN_FingerprintReadCallback_InputList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PIN_FingerprintReadCallback_InputList = PIN_FingerprintReadCallback_InputList;

});
define("UBT_AppManager_Mobile.model$PIN_FingerprintAvailableCallback_ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager_Mobile.model", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBT_AppManagerModel, UBT_AppManager_MobileModel) {
var OS = OutSystems.Internal;
var PIN_FingerprintAvailableCallback_ResponseList = (function (_super) {
__extends(PIN_FingerprintAvailableCallback_ResponseList, _super);
function PIN_FingerprintAvailableCallback_ResponseList(defaults) {
_super.apply(this, arguments);
}
PIN_FingerprintAvailableCallback_ResponseList.itemType = UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec;
return PIN_FingerprintAvailableCallback_ResponseList;
})(OS.DataTypes.GenericRecordList);
UBT_AppManager_MobileModel.PIN_FingerprintAvailableCallback_ResponseList = PIN_FingerprintAvailableCallback_ResponseList;

});
define("UBT_AppManager_Mobile.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBT_AppManager_MobileModel = exports;
Object.defineProperty(UBT_AppManager_MobileModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["94638f05-5e6e-45c5-bfbd-1b49f28679d4"];
}
});

UBT_AppManager_MobileModel.staticEntities = {};
UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events = {};
var getUBT_FCM_EventsRecord = function (record) {
return UBT_AppManager_MobileModel.module.staticEntities["a1657c41-79e1-4cb6-b028-ebb2da09b945"][record];
};
Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events, "internalRouteActionClick", {
get: function () {
return getUBT_FCM_EventsRecord("0e003d75-0eb6-48f2-9e1a-9a041aaffde5");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events, "notificationClick", {
get: function () {
return getUBT_FCM_EventsRecord("7f641c08-b289-4727-b6d3-5b56f35350ee");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events, "defaultNotification", {
get: function () {
return getUBT_FCM_EventsRecord("887eb4ec-71c1-4509-94bd-d6076846ed3d");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events, "silentNotification", {
get: function () {
return getUBT_FCM_EventsRecord("c846a2ea-34a7-4122-8f09-81fc39a2095f");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.uBT_FCM_Events, "notificationClickV2", {
get: function () {
return getUBT_FCM_EventsRecord("f985ec5d-72fd-4b2a-af49-129daefd2b47");
}
});

UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents = {};
var getAppManager_AzureInsightsEventsRecord = function (record) {
return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["d6d99a73-592f-470c-926e-4a8e608b3913"][record];
};
Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "fCM_ReceivedPushNotification", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("299cee48-8b1b-4cdf-873b-10e886183939");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "invalidDeviceLogin_Identified", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("29c405a5-08d5-48bc-b351-cea0e6b096c2");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "fRD_ReceivedSignal", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("42495ad4-3c2f-4438-a90a-7bc6afd3bba6");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "auth_Logout", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("4822a98c-d431-41ed-b160-159ea0701025");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "invalidDeviceLogin_Continued", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("81b511d9-09d6-4f43-8d5c-5a6ff0492a33");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "auth_Login", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("b8ec143a-6455-4e19-a8d5-4b0c4354f4f3");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "auth_ResetPassword", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("bc456877-6435-4344-b659-1bf98673c584");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_AzureInsightsEvents, "invalidDeviceLogin_Cancelled", {
get: function () {
return getAppManager_AzureInsightsEventsRecord("c9895955-8c58-489d-a298-42fe352edcde");
}
});

UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property = {};
var getAppManager_JSUtils_ElementCache_PropertyRecord = function (record) {
return OS.ApplicationInfo.getModules()["4ea8e953-0b8c-47e1-a2fa-1fb452518d3d"].staticEntities["8c811931-66f8-490a-afa8-27d697715a54"][record];
};
Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_FirebaseUserCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("0e7f941b-d6fb-4ded-aa95-4ad891121420");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "id_ResetPasswordPopUp", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("1977d134-e812-44cb-82b1-575b35fa52d4");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_UserOfflineCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("2c8c7be8-8911-4954-95ca-0ff1ec7ef4e8");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_FirebaseCloudMessageDeeplinkCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("3249686c-d579-4bd4-a19b-080192625b1f");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_SessionInactivityDestroyCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("48630982-aa3a-4ead-9fca-939e0dd8de70");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "date_SessionInactivityLastDate", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("5d7d4b0a-7555-44a5-9eb2-1a6297189f1a");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_OnAfterInitializeCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("779c3f9a-f3d0-4179-a8e2-0fc522ec362c");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_PinUnlockCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("95980a2d-e966-49d8-ac1c-6379986cf11a");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_StreamlineTOTPCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("ae1953ae-4f81-4da6-bb14-d59daeaade1c");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_UserPendingPingCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("b28c3e56-6b57-42c5-90c0-5fee5e6a22bf");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_MobileAfterLogin", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("b5a7fe50-04ef-4a67-a532-cd8e25107f78");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_FirebaseCloudMessageNotificationCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("c62f7698-e5e9-4e81-bb3e-b3ff4513b23a");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "localStorageKey_Pin", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("d8d77c29-f500-4f84-b909-11974e31f1f0");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_UserOnlineCallback", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("dbd1c320-e8e3-42a9-908f-7b262270ed67");
}
});

Object.defineProperty(UBT_AppManager_MobileModel.staticEntities.appManager_JSUtils_ElementCache_Property, "text_OnReadyChecker", {
get: function () {
return getAppManager_JSUtils_ElementCache_PropertyRecord("fe58bf26-deb1-4d8f-97e7-1b4135908a37");
}
});

});
