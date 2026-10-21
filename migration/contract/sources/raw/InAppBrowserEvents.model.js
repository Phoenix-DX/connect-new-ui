define("InAppBrowserEvents.model$IOSOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model"], function (exports, OutSystems, InAppBrowserEventsModel) {
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
this.attr("Disallowoverscroll", "disallowoverscrollAttr", "disallowoverscroll", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Toolbar", "toolbarAttr", "toolbar", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EnableViewportScale", "enableViewportScaleAttr", "enableViewportScale", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowInlineMediaPlayback", "allowInlineMediaPlaybackAttr", "allowInlineMediaPlayback", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("KeyboardDisplayRequiresUserAction", "keyboardDisplayRequiresUserActionAttr", "keyboardDisplayRequiresUserAction", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("SuppressesIncrementalRendering", "suppressesIncrementalRenderingAttr", "suppressesIncrementalRendering", true, false, OS.DataTypes.DataTypes.Boolean, function () {
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
this.attr("Fullscreen", "fullscreenAttr", "fullscreen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Hidden", "hiddenAttr", "hidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IOSOptionsRec.init();
return IOSOptionsRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.IOSOptionsRec = IOSOptionsRec;

});
define("InAppBrowserEvents.model$IOSOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$IOSOptionsRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var IOSOptionsList = (function (_super) {
__extends(IOSOptionsList, _super);
function IOSOptionsList(defaults) {
_super.apply(this, arguments);
}
IOSOptionsList.itemType = InAppBrowserEventsModel.IOSOptionsRec;
return IOSOptionsList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.IOSOptionsList = IOSOptionsList;

});
define("InAppBrowserEvents.model$WarningRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "InAppBrowserEvents.model", "CommonPlugin.model$WarningRec", "InAppBrowserEvents.referencesHealth", "InAppBrowserEvents.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var WarningRecord = (function (_super) {
__extends(WarningRecord, _super);
function WarningRecord(defaults) {
_super.apply(this, arguments);
}
WarningRecord.attributesToDeclare = function () {
return [
this.attr("Warning", "warningAttr", "Warning", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.WarningRec());
}, true, CommonPluginModel.WarningRec)
].concat(_super.attributesToDeclare.call(this));
};
WarningRecord.fromStructure = function (str) {
return new WarningRecord(new WarningRecord.RecordClass({
warningAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WarningRecord._isAnonymousRecord = true;
WarningRecord.UniqueId = "1838e26c-3ba5-5f07-6914-2750034ccc7d";
WarningRecord.init();
return WarningRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.WarningRecord = WarningRecord;

});
define("InAppBrowserEvents.model$WarningRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$WarningRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var WarningRecordList = (function (_super) {
__extends(WarningRecordList, _super);
function WarningRecordList(defaults) {
_super.apply(this, arguments);
}
WarningRecordList.itemType = InAppBrowserEventsModel.WarningRecord;
return WarningRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.WarningRecordList = WarningRecordList;

});
define("InAppBrowserEvents.model$TargetRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model"], function (exports, OutSystems, InAppBrowserEventsModel) {
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
InAppBrowserEventsModel.TargetRec = TargetRec;

});
define("InAppBrowserEvents.model$TargetRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$TargetRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var TargetRecord = (function (_super) {
__extends(TargetRecord, _super);
function TargetRecord(defaults) {
_super.apply(this, arguments);
}
TargetRecord.attributesToDeclare = function () {
return [
this.attr("Target", "targetAttr", "Target", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.TargetRec());
}, true, InAppBrowserEventsModel.TargetRec)
].concat(_super.attributesToDeclare.call(this));
};
TargetRecord.fromStructure = function (str) {
return new TargetRecord(new TargetRecord.RecordClass({
targetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TargetRecord._isAnonymousRecord = true;
TargetRecord.UniqueId = "a501c409-89b0-76f7-0161-5b24fea351b6";
TargetRecord.init();
return TargetRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.TargetRecord = TargetRecord;

});
define("InAppBrowserEvents.model$TargetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$TargetRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var TargetRecordList = (function (_super) {
__extends(TargetRecordList, _super);
function TargetRecordList(defaults) {
_super.apply(this, arguments);
}
TargetRecordList.itemType = InAppBrowserEventsModel.TargetRecord;
return TargetRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.TargetRecordList = TargetRecordList;

});
define("InAppBrowserEvents.model$AndroidOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRec = (function (_super) {
__extends(AndroidOptionsRec, _super);
function AndroidOptionsRec(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRec.attributesToDeclare = function () {
return [
this.attr("Zoom", "zoomAttr", "zoom", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Hardwareback", "hardwarebackAttr", "hardwareback", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ShouldPauseOnSuspend", "shouldPauseOnSuspendAttr", "shouldPauseOnSuspend", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Closebuttoncaption", "closebuttoncaptionAttr", "closebuttoncaption", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Fullscreen", "fullscreenAttr", "fullscreen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Hidden", "hiddenAttr", "hidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AndroidOptionsRec.init();
return AndroidOptionsRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.AndroidOptionsRec = AndroidOptionsRec;

});
define("InAppBrowserEvents.model$AndroidOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$AndroidOptionsRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRecord = (function (_super) {
__extends(AndroidOptionsRecord, _super);
function AndroidOptionsRecord(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRecord.attributesToDeclare = function () {
return [
this.attr("AndroidOptions", "androidOptionsAttr", "AndroidOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.AndroidOptionsRec());
}, true, InAppBrowserEventsModel.AndroidOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidOptionsRecord.fromStructure = function (str) {
return new AndroidOptionsRecord(new AndroidOptionsRecord.RecordClass({
androidOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidOptionsRecord._isAnonymousRecord = true;
AndroidOptionsRecord.UniqueId = "80291416-a09a-0e5b-77d3-9ce61054b4cc";
AndroidOptionsRecord.init();
return AndroidOptionsRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.AndroidOptionsRecord = AndroidOptionsRecord;

});
define("InAppBrowserEvents.model$AndroidOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$AndroidOptionsRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRecordList = (function (_super) {
__extends(AndroidOptionsRecordList, _super);
function AndroidOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRecordList.itemType = InAppBrowserEventsModel.AndroidOptionsRecord;
return AndroidOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.AndroidOptionsRecordList = AndroidOptionsRecordList;

});
define("InAppBrowserEvents.model$TargetList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$TargetRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var TargetList = (function (_super) {
__extends(TargetList, _super);
function TargetList(defaults) {
_super.apply(this, arguments);
}
TargetList.itemType = InAppBrowserEventsModel.TargetRec;
return TargetList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.TargetList = TargetList;

});
define("InAppBrowserEvents.model$OptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var OptionsRec = (function (_super) {
__extends(OptionsRec, _super);
function OptionsRec(defaults) {
_super.apply(this, arguments);
}
OptionsRec.attributesToDeclare = function () {
return [
this.attr("Location", "locationAttr", "location", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Clearcache", "clearcacheAttr", "clearcache", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Clearsessioncache", "clearsessioncacheAttr", "clearsessioncache", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("MediaPlaybackRequiresUserAction", "mediaPlaybackRequiresUserActionAttr", "mediaPlaybackRequiresUserAction", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OptionsRec.init();
return OptionsRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.OptionsRec = OptionsRec;

});
define("InAppBrowserEvents.model$OptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$OptionsRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var OptionsList = (function (_super) {
__extends(OptionsList, _super);
function OptionsList(defaults) {
_super.apply(this, arguments);
}
OptionsList.itemType = InAppBrowserEventsModel.OptionsRec;
return OptionsList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.OptionsList = OptionsList;

});
define("InAppBrowserEvents.model$IOSOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$IOSOptionsRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var IOSOptionsRecord = (function (_super) {
__extends(IOSOptionsRecord, _super);
function IOSOptionsRecord(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRecord.attributesToDeclare = function () {
return [
this.attr("IOSOptions", "iOSOptionsAttr", "IOSOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.IOSOptionsRec());
}, true, InAppBrowserEventsModel.IOSOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
IOSOptionsRecord.fromStructure = function (str) {
return new IOSOptionsRecord(new IOSOptionsRecord.RecordClass({
iOSOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IOSOptionsRecord._isAnonymousRecord = true;
IOSOptionsRecord.UniqueId = "2441d62d-48ea-2754-1500-449f24d0bf08";
IOSOptionsRecord.init();
return IOSOptionsRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.IOSOptionsRecord = IOSOptionsRecord;

});
define("InAppBrowserEvents.model$AndroidOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$AndroidOptionsRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsList = (function (_super) {
__extends(AndroidOptionsList, _super);
function AndroidOptionsList(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsList.itemType = InAppBrowserEventsModel.AndroidOptionsRec;
return AndroidOptionsList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.AndroidOptionsList = AndroidOptionsList;

});
define("InAppBrowserEvents.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "InAppBrowserEvents.model", "CommonPlugin.model$ErrorRec", "InAppBrowserEvents.referencesHealth", "InAppBrowserEvents.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.ErrorList = ErrorList;

});
define("InAppBrowserEvents.model$WarningList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "InAppBrowserEvents.model", "CommonPlugin.model$WarningRec", "InAppBrowserEvents.referencesHealth", "InAppBrowserEvents.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var WarningList = (function (_super) {
__extends(WarningList, _super);
function WarningList(defaults) {
_super.apply(this, arguments);
}
WarningList.itemType = CommonPluginModel.WarningRec;
return WarningList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.WarningList = WarningList;

});
define("InAppBrowserEvents.model$OptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$OptionsRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var OptionsRecord = (function (_super) {
__extends(OptionsRecord, _super);
function OptionsRecord(defaults) {
_super.apply(this, arguments);
}
OptionsRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsAttr", "Options", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.OptionsRec());
}, true, InAppBrowserEventsModel.OptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionsRecord.fromStructure = function (str) {
return new OptionsRecord(new OptionsRecord.RecordClass({
optionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionsRecord._isAnonymousRecord = true;
OptionsRecord.UniqueId = "41fe306d-2451-7238-045c-960d1c743b15";
OptionsRecord.init();
return OptionsRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.OptionsRecord = OptionsRecord;

});
define("InAppBrowserEvents.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "InAppBrowserEvents.model", "CommonPlugin.model$ErrorRec", "InAppBrowserEvents.referencesHealth", "InAppBrowserEvents.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, InAppBrowserEventsModel) {
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
InAppBrowserEventsModel.ErrorRecord = ErrorRecord;

});
define("InAppBrowserEvents.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$ErrorRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = InAppBrowserEventsModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.ErrorRecordList = ErrorRecordList;

});
define("InAppBrowserEvents.model$InAppBrowserEventRec", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var InAppBrowserEventRec = (function (_super) {
__extends(InAppBrowserEventRec, _super);
function InAppBrowserEventRec(defaults) {
_super.apply(this, arguments);
}
InAppBrowserEventRec.attributesToDeclare = function () {
return [
this.attr("type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("url", "urlAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InAppBrowserEventRec.init();
return InAppBrowserEventRec;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.InAppBrowserEventRec = InAppBrowserEventRec;

});
define("InAppBrowserEvents.model$IOSOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$IOSOptionsRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var IOSOptionsRecordList = (function (_super) {
__extends(IOSOptionsRecordList, _super);
function IOSOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRecordList.itemType = InAppBrowserEventsModel.IOSOptionsRecord;
return IOSOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.IOSOptionsRecordList = IOSOptionsRecordList;

});
define("InAppBrowserEvents.model$InAppBrowserEventList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$InAppBrowserEventRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var InAppBrowserEventList = (function (_super) {
__extends(InAppBrowserEventList, _super);
function InAppBrowserEventList(defaults) {
_super.apply(this, arguments);
}
InAppBrowserEventList.itemType = InAppBrowserEventsModel.InAppBrowserEventRec;
return InAppBrowserEventList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.InAppBrowserEventList = InAppBrowserEventList;

});
define("InAppBrowserEvents.model$InAppBrowserEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$InAppBrowserEventRec"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var InAppBrowserEventRecord = (function (_super) {
__extends(InAppBrowserEventRecord, _super);
function InAppBrowserEventRecord(defaults) {
_super.apply(this, arguments);
}
InAppBrowserEventRecord.attributesToDeclare = function () {
return [
this.attr("InAppBrowserEvent", "inAppBrowserEventAttr", "InAppBrowserEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserEventsModel.InAppBrowserEventRec());
}, true, InAppBrowserEventsModel.InAppBrowserEventRec)
].concat(_super.attributesToDeclare.call(this));
};
InAppBrowserEventRecord.fromStructure = function (str) {
return new InAppBrowserEventRecord(new InAppBrowserEventRecord.RecordClass({
inAppBrowserEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InAppBrowserEventRecord._isAnonymousRecord = true;
InAppBrowserEventRecord.UniqueId = "cd3fbdfc-33d8-d0d0-002f-1e471a10ba9d";
InAppBrowserEventRecord.init();
return InAppBrowserEventRecord;
})(OS.DataTypes.GenericRecord);
InAppBrowserEventsModel.InAppBrowserEventRecord = InAppBrowserEventRecord;

});
define("InAppBrowserEvents.model$OptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$OptionsRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var OptionsRecordList = (function (_super) {
__extends(OptionsRecordList, _super);
function OptionsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionsRecordList.itemType = InAppBrowserEventsModel.OptionsRecord;
return OptionsRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.OptionsRecordList = OptionsRecordList;

});
define("InAppBrowserEvents.model$InAppBrowserEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserEvents.model", "InAppBrowserEvents.model$InAppBrowserEventRecord"], function (exports, OutSystems, InAppBrowserEventsModel) {
var OS = OutSystems.Internal;
var InAppBrowserEventRecordList = (function (_super) {
__extends(InAppBrowserEventRecordList, _super);
function InAppBrowserEventRecordList(defaults) {
_super.apply(this, arguments);
}
InAppBrowserEventRecordList.itemType = InAppBrowserEventsModel.InAppBrowserEventRecord;
return InAppBrowserEventRecordList;
})(OS.DataTypes.GenericRecordList);
InAppBrowserEventsModel.InAppBrowserEventRecordList = InAppBrowserEventRecordList;

});
define("InAppBrowserEvents.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var InAppBrowserEventsModel = exports;
Object.defineProperty(InAppBrowserEventsModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["acac34be-1dc3-4cf6-a5fb-be5250753606"];
}
});

InAppBrowserEventsModel.staticEntities = {};
InAppBrowserEventsModel.staticEntities.target = {};
var getTargetRecord = function (record) {
return InAppBrowserEventsModel.module.staticEntities["e529a639-4811-47de-b303-067304ae2970"][record];
};
Object.defineProperty(InAppBrowserEventsModel.staticEntities.target, "iN_APP_BROWSER", {
get: function () {
return getTargetRecord("043e7cf5-dce3-4925-aa89-30a680f08ce8");
}
});

Object.defineProperty(InAppBrowserEventsModel.staticEntities.target, "sYSTEM", {
get: function () {
return getTargetRecord("529d5240-d52b-44e1-a607-d6916b68a4e5");
}
});

});
