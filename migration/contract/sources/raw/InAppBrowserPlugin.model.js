define("InAppBrowserPlugin.model$AndroidOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRec = (function (_super) {
__extends(AndroidOptionsRec, _super);
function AndroidOptionsRec(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRec.attributesToDeclare = function () {
return [
this.attr("Zoom", "zoomAttr", "zoom", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Hardwareback", "hardwarebackAttr", "hardwareback", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ShouldPauseOnSuspend", "shouldPauseOnSuspendAttr", "shouldPauseOnSuspend", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AndroidOptionsRec.init();
return AndroidOptionsRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.AndroidOptionsRec = AndroidOptionsRec;

});
define("InAppBrowserPlugin.model$IOSOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var IOSOptionsRec = (function (_super) {
__extends(IOSOptionsRec, _super);
function IOSOptionsRec(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRec.attributesToDeclare = function () {
return [
this.attr("Closebuttoncaption", "closebuttoncaptionAttr", "closebuttoncaption", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Disallowoverscroll", "disallowoverscrollAttr", "disallowoverscroll", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Toolbar", "toolbarAttr", "toolbar", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EnableViewportScale", "enableViewportScaleAttr", "enableViewportScale", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowInlineMediaPlayback", "allowInlineMediaPlaybackAttr", "allowInlineMediaPlayback", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("KeyboardDisplayRequiresUserAction", "keyboardDisplayRequiresUserActionAttr", "keyboardDisplayRequiresUserAction", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("SuppressesIncrementalRendering", "suppressesIncrementalRenderingAttr", "suppressesIncrementalRendering", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Presentationstyle", "presentationstyleAttr", "presentationstyle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "fullscreen";
}, true), 
this.attr("Transitionstyle", "transitionstyleAttr", "transitionstyle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "coververtical";
}, true), 
this.attr("Toolbarposition", "toolbarpositionAttr", "toolbarposition", false, false, OS.DataTypes.DataTypes.Text, function () {
return "bottom";
}, true), 
this.attr("BarsCollapsing", "barsCollapsingAttr", "BarsCollapsing", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ReadersMode", "readersModeAttr", "ReadersMode", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IOSOptionsRec.init();
return IOSOptionsRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.IOSOptionsRec = IOSOptionsRec;

});
define("InAppBrowserPlugin.model$OptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$AndroidOptionsRec", "InAppBrowserPlugin.model$IOSOptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var OptionsRec = (function (_super) {
__extends(OptionsRec, _super);
function OptionsRec(defaults) {
_super.apply(this, arguments);
}
OptionsRec.attributesToDeclare = function () {
return [
this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Clearcache", "clearcacheAttr", "clearcache", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Clearsessioncache", "clearsessioncacheAttr", "clearsessioncache", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("MediaPlaybackRequiresUserAction", "mediaPlaybackRequiresUserActionAttr", "mediaPlaybackRequiresUserAction", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Android", "androidAttr", "android", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.AndroidOptionsRec());
}, true, InAppBrowserPluginModel.AndroidOptionsRec), 
this.attr("Ios", "iosAttr", "ios", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.IOSOptionsRec());
}, true, InAppBrowserPluginModel.IOSOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionsRec.init();
return OptionsRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.OptionsRec = OptionsRec;

});
define("InAppBrowserPlugin.model$IOSOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$IOSOptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var IOSOptionsRecord = (function (_super) {
__extends(IOSOptionsRecord, _super);
function IOSOptionsRecord(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRecord.attributesToDeclare = function () {
return [
this.attr("IOSOptions", "iOSOptionsAttr", "IOSOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.IOSOptionsRec());
}, true, InAppBrowserPluginModel.IOSOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
IOSOptionsRecord.fromStructure = function (str) {
return new IOSOptionsRecord(new IOSOptionsRecord.RecordClass({
iOSOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IOSOptionsRecord._isAnonymousRecord = true;
IOSOptionsRecord.UniqueId = "0c270b9a-e7cb-7adc-70b9-1068cb7a9326";
IOSOptionsRecord.init();
return IOSOptionsRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.IOSOptionsRecord = IOSOptionsRecord;

});
define("InAppBrowserPlugin.model$OptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$OptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var OptionsRecord = (function (_super) {
__extends(OptionsRecord, _super);
function OptionsRecord(defaults) {
_super.apply(this, arguments);
}
OptionsRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsAttr", "Options", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.OptionsRec());
}, true, InAppBrowserPluginModel.OptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionsRecord.fromStructure = function (str) {
return new OptionsRecord(new OptionsRecord.RecordClass({
optionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionsRecord._isAnonymousRecord = true;
OptionsRecord.UniqueId = "3345668e-036d-b903-ca5a-e74e58f9b56c";
OptionsRecord.init();
return OptionsRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.OptionsRecord = OptionsRecord;

});
define("InAppBrowserPlugin.model$OptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$OptionsRecord"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var OptionsRecordList = (function (_super) {
__extends(OptionsRecordList, _super);
function OptionsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionsRecordList.itemType = InAppBrowserPluginModel.OptionsRecord;
return OptionsRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.OptionsRecordList = OptionsRecordList;

});
define("InAppBrowserPlugin.model$AndroidOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$AndroidOptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRecord = (function (_super) {
__extends(AndroidOptionsRecord, _super);
function AndroidOptionsRecord(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRecord.attributesToDeclare = function () {
return [
this.attr("AndroidOptions", "androidOptionsAttr", "AndroidOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.AndroidOptionsRec());
}, true, InAppBrowserPluginModel.AndroidOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidOptionsRecord.fromStructure = function (str) {
return new AndroidOptionsRecord(new AndroidOptionsRecord.RecordClass({
androidOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidOptionsRecord._isAnonymousRecord = true;
AndroidOptionsRecord.UniqueId = "d46e748b-594b-42e4-f501-94e3f47f06cc";
AndroidOptionsRecord.init();
return AndroidOptionsRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.AndroidOptionsRecord = AndroidOptionsRecord;

});
define("InAppBrowserPlugin.model$AndroidOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$AndroidOptionsRecord"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRecordList = (function (_super) {
__extends(AndroidOptionsRecordList, _super);
function AndroidOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRecordList.itemType = InAppBrowserPluginModel.AndroidOptionsRecord;
return AndroidOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.AndroidOptionsRecordList = AndroidOptionsRecordList;

});
define("InAppBrowserPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "InAppBrowserPlugin.model", "CommonPlugin.model$ErrorRec", "InAppBrowserPlugin.referencesHealth", "InAppBrowserPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.ErrorList = ErrorList;

});
define("InAppBrowserPlugin.model$AndroidOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$AndroidOptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var AndroidOptionsList = (function (_super) {
__extends(AndroidOptionsList, _super);
function AndroidOptionsList(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsList.itemType = InAppBrowserPluginModel.AndroidOptionsRec;
return AndroidOptionsList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.AndroidOptionsList = AndroidOptionsList;

});
define("InAppBrowserPlugin.model$TargetRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var TargetRec = (function (_super) {
__extends(TargetRec, _super);
function TargetRec(defaults) {
_super.apply(this, arguments);
}
TargetRec.attributesToDeclare = function () {
return [
this.attr("Target", "targetAttr", "Target", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TargetRec.fromStructure = function (str) {
return new TargetRec(new TargetRec.RecordClass({
targetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TargetRec.init();
return TargetRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.TargetRec = TargetRec;

});
define("InAppBrowserPlugin.model$TargetRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$TargetRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var TargetRecord = (function (_super) {
__extends(TargetRecord, _super);
function TargetRecord(defaults) {
_super.apply(this, arguments);
}
TargetRecord.attributesToDeclare = function () {
return [
this.attr("Target", "targetAttr", "Target", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.TargetRec());
}, true, InAppBrowserPluginModel.TargetRec)
].concat(_super.attributesToDeclare.call(this));
};
TargetRecord.fromStructure = function (str) {
return new TargetRecord(new TargetRecord.RecordClass({
targetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TargetRecord._isAnonymousRecord = true;
TargetRecord.UniqueId = "f83c2a2d-e7f3-9c90-b767-e99968f2cc70";
TargetRecord.init();
return TargetRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserPluginModel.TargetRecord = TargetRecord;

});
define("InAppBrowserPlugin.model$TargetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$TargetRecord"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var TargetRecordList = (function (_super) {
__extends(TargetRecordList, _super);
function TargetRecordList(defaults) {
_super.apply(this, arguments);
}
TargetRecordList.itemType = InAppBrowserPluginModel.TargetRecord;
return TargetRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.TargetRecordList = TargetRecordList;

});
define("InAppBrowserPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "InAppBrowserPlugin.model", "CommonPlugin.model$ErrorRec", "InAppBrowserPlugin.referencesHealth", "InAppBrowserPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, InAppBrowserPluginModel) {
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
InAppBrowserPluginModel.ErrorRecord = ErrorRecord;

});
define("InAppBrowserPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$ErrorRecord"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = InAppBrowserPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.ErrorRecordList = ErrorRecordList;

});
define("InAppBrowserPlugin.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "InAppBrowserPlugin.model", "ServiceCenter.model$UserRec", "InAppBrowserPlugin.referencesHealth", "InAppBrowserPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, InAppBrowserPluginModel) {
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
InAppBrowserPluginModel.UserRecord = UserRecord;

});
define("InAppBrowserPlugin.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$UserRecord"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = InAppBrowserPluginModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.UserRecordList = UserRecordList;

});
define("InAppBrowserPlugin.model$TargetList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$TargetRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var TargetList = (function (_super) {
__extends(TargetList, _super);
function TargetList(defaults) {
_super.apply(this, arguments);
}
TargetList.itemType = InAppBrowserPluginModel.TargetRec;
return TargetList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.TargetList = TargetList;

});
define("InAppBrowserPlugin.model$IOSOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$IOSOptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var IOSOptionsList = (function (_super) {
__extends(IOSOptionsList, _super);
function IOSOptionsList(defaults) {
_super.apply(this, arguments);
}
IOSOptionsList.itemType = InAppBrowserPluginModel.IOSOptionsRec;
return IOSOptionsList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.IOSOptionsList = IOSOptionsList;

});
define("InAppBrowserPlugin.model$OptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$OptionsRec"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var OptionsList = (function (_super) {
__extends(OptionsList, _super);
function OptionsList(defaults) {
_super.apply(this, arguments);
}
OptionsList.itemType = InAppBrowserPluginModel.OptionsRec;
return OptionsList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.OptionsList = OptionsList;

});
define("InAppBrowserPlugin.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "InAppBrowserPlugin.model", "ServiceCenter.model$UserRec", "InAppBrowserPlugin.referencesHealth", "InAppBrowserPlugin.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.UserList = UserList;

});
define("InAppBrowserPlugin.model$IOSOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "InAppBrowserPlugin.model$IOSOptionsRecord"], function (exports, OutSystems, InAppBrowserPluginModel) {
var OS = OutSystems.Internal;
var IOSOptionsRecordList = (function (_super) {
__extends(IOSOptionsRecordList, _super);
function IOSOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRecordList.itemType = InAppBrowserPluginModel.IOSOptionsRecord;
return IOSOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserPluginModel.IOSOptionsRecordList = IOSOptionsRecordList;

});
define("InAppBrowserPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var InAppBrowserPluginModel = exports;
Object.defineProperty(InAppBrowserPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["411582e0-1482-4652-8bb1-ff206acc32fc"];
}
});

InAppBrowserPluginModel.staticEntities = {};
InAppBrowserPluginModel.staticEntities.target = {};
var getTargetRecord = function (record) {
return InAppBrowserPluginModel.module.staticEntities["571957b2-a064-4298-b194-fd269b3c9073"][record];
};
Object.defineProperty(InAppBrowserPluginModel.staticEntities.target, "iN_APP_BROWSER", {
get: function () {
return getTargetRecord("2b573f5a-c9be-4fce-9c58-143fd1cd4286");
}
});

Object.defineProperty(InAppBrowserPluginModel.staticEntities.target, "sYSTEM", {
get: function () {
return getTargetRecord("85ecde5b-e3d1-4a92-a878-5c3fead6481e");
}
});

Object.defineProperty(InAppBrowserPluginModel.staticEntities.target, "iN_APP_SYSTEM_BROWSER", {
get: function () {
return getTargetRecord("e02c5fb7-bd6c-469e-97f9-48a5b7952847");
}
});

});
