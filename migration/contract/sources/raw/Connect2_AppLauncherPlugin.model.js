define("Connect2_AppLauncherPlugin.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.TextList = TextList;

});
define("Connect2_AppLauncherPlugin.model$ExtrasRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var ExtrasRec = (function (_super) {
__extends(ExtrasRec, _super);
function ExtrasRec(defaults) {
_super.apply(this, arguments);
}
ExtrasRec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("dataType", "dataTypeAttr", "dataType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList)
].concat(_super.attributesToDeclare.call(this));
};
ExtrasRec.init();
return ExtrasRec;
})(OS.DataTypes.GenericRecord);
Connect2_AppLauncherPluginModel.ExtrasRec = ExtrasRec;

});
define("Connect2_AppLauncherPlugin.model$ExtrasList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$ExtrasRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var ExtrasList = (function (_super) {
__extends(ExtrasList, _super);
function ExtrasList(defaults) {
_super.apply(this, arguments);
}
ExtrasList.itemType = Connect2_AppLauncherPluginModel.ExtrasRec;
return ExtrasList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.ExtrasList = ExtrasList;

});
define("Connect2_AppLauncherPlugin.model$LauncherParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$ExtrasList"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherParametersRec = (function (_super) {
__extends(LauncherParametersRec, _super);
function LauncherParametersRec(defaults) {
_super.apply(this, arguments);
}
LauncherParametersRec.attributesToDeclare = function () {
return [
this.attr("packageName", "packageNameAttr", "packageName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("actionName", "actionNameAttr", "actionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("uri", "uriAttr", "uri", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("dataType", "dataTypeAttr", "dataType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subActivity", "subActivityAttr", "subActivity", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("flags", "flagsAttr", "flags", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("extras", "extrasAttr", "extras", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.ExtrasList());
}, true, Connect2_AppLauncherPluginModel.ExtrasList)
].concat(_super.attributesToDeclare.call(this));
};
LauncherParametersRec.init();
return LauncherParametersRec;
})(OS.DataTypes.GenericRecord);
Connect2_AppLauncherPluginModel.LauncherParametersRec = LauncherParametersRec;

});
define("Connect2_AppLauncherPlugin.model$LauncherParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherParametersRecord = (function (_super) {
__extends(LauncherParametersRecord, _super);
function LauncherParametersRecord(defaults) {
_super.apply(this, arguments);
}
LauncherParametersRecord.attributesToDeclare = function () {
return [
this.attr("LauncherParameters", "launcherParametersAttr", "LauncherParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.LauncherParametersRec());
}, true, Connect2_AppLauncherPluginModel.LauncherParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
LauncherParametersRecord.fromStructure = function (str) {
return new LauncherParametersRecord(new LauncherParametersRecord.RecordClass({
launcherParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LauncherParametersRecord._isAnonymousRecord = true;
LauncherParametersRecord.UniqueId = "24d22ada-ffc3-dbcc-79b2-1df4fa733ab0";
LauncherParametersRecord.init();
return LauncherParametersRecord;
})(OS.DataTypes.GenericRecord);
Connect2_AppLauncherPluginModel.LauncherParametersRecord = LauncherParametersRecord;

});
define("Connect2_AppLauncherPlugin.model$ExtrasRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$ExtrasRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var ExtrasRecord = (function (_super) {
__extends(ExtrasRecord, _super);
function ExtrasRecord(defaults) {
_super.apply(this, arguments);
}
ExtrasRecord.attributesToDeclare = function () {
return [
this.attr("Extras", "extrasAttr", "Extras", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.ExtrasRec());
}, true, Connect2_AppLauncherPluginModel.ExtrasRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtrasRecord.fromStructure = function (str) {
return new ExtrasRecord(new ExtrasRecord.RecordClass({
extrasAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtrasRecord._isAnonymousRecord = true;
ExtrasRecord.UniqueId = "a4a8de75-51f0-c077-7174-e0cca79bda91";
ExtrasRecord.init();
return ExtrasRecord;
})(OS.DataTypes.GenericRecord);
Connect2_AppLauncherPluginModel.ExtrasRecord = ExtrasRecord;

});
define("Connect2_AppLauncherPlugin.model$ExtrasRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$ExtrasRecord"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var ExtrasRecordList = (function (_super) {
__extends(ExtrasRecordList, _super);
function ExtrasRecordList(defaults) {
_super.apply(this, arguments);
}
ExtrasRecordList.itemType = Connect2_AppLauncherPluginModel.ExtrasRecord;
return ExtrasRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.ExtrasRecordList = ExtrasRecordList;

});
define("Connect2_AppLauncherPlugin.model$LauncherReturnRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$ExtrasRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherReturnRec = (function (_super) {
__extends(LauncherReturnRec, _super);
function LauncherReturnRec(defaults) {
_super.apply(this, arguments);
}
LauncherReturnRec.attributesToDeclare = function () {
return [
this.attr("isLaunched", "isLaunchedAttr", "isLaunched", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isActivityDone", "isActivityDoneAttr", "isActivityDone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("data", "dataAttr", "data", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("extras", "extrasAttr", "extras", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.ExtrasRec());
}, true, Connect2_AppLauncherPluginModel.ExtrasRec)
].concat(_super.attributesToDeclare.call(this));
};
LauncherReturnRec.init();
return LauncherReturnRec;
})(OS.DataTypes.GenericRecord);
Connect2_AppLauncherPluginModel.LauncherReturnRec = LauncherReturnRec;

});
define("Connect2_AppLauncherPlugin.model$LauncherParametersList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherParametersList = (function (_super) {
__extends(LauncherParametersList, _super);
function LauncherParametersList(defaults) {
_super.apply(this, arguments);
}
LauncherParametersList.itemType = Connect2_AppLauncherPluginModel.LauncherParametersRec;
return LauncherParametersList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.LauncherParametersList = LauncherParametersList;

});
define("Connect2_AppLauncherPlugin.model$LauncherReturnRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherReturnRecord = (function (_super) {
__extends(LauncherReturnRecord, _super);
function LauncherReturnRecord(defaults) {
_super.apply(this, arguments);
}
LauncherReturnRecord.attributesToDeclare = function () {
return [
this.attr("LauncherReturn", "launcherReturnAttr", "LauncherReturn", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.LauncherReturnRec());
}, true, Connect2_AppLauncherPluginModel.LauncherReturnRec)
].concat(_super.attributesToDeclare.call(this));
};
LauncherReturnRecord.fromStructure = function (str) {
return new LauncherReturnRecord(new LauncherReturnRecord.RecordClass({
launcherReturnAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LauncherReturnRecord._isAnonymousRecord = true;
LauncherReturnRecord.UniqueId = "83a47c01-3304-94b9-4bc2-68927a20804d";
LauncherReturnRecord.init();
return LauncherReturnRecord;
})(OS.DataTypes.GenericRecord);
Connect2_AppLauncherPluginModel.LauncherReturnRecord = LauncherReturnRecord;

});
define("Connect2_AppLauncherPlugin.model$LauncherParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRecord"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherParametersRecordList = (function (_super) {
__extends(LauncherParametersRecordList, _super);
function LauncherParametersRecordList(defaults) {
_super.apply(this, arguments);
}
LauncherParametersRecordList.itemType = Connect2_AppLauncherPluginModel.LauncherParametersRecord;
return LauncherParametersRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.LauncherParametersRecordList = LauncherParametersRecordList;

});
define("Connect2_AppLauncherPlugin.model$LauncherReturnRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRecord"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherReturnRecordList = (function (_super) {
__extends(LauncherReturnRecordList, _super);
function LauncherReturnRecordList(defaults) {
_super.apply(this, arguments);
}
LauncherReturnRecordList.itemType = Connect2_AppLauncherPluginModel.LauncherReturnRecord;
return LauncherReturnRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.LauncherReturnRecordList = LauncherReturnRecordList;

});
define("Connect2_AppLauncherPlugin.model$LauncherReturnList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRec"], function (exports, OutSystems, Connect2_AppLauncherPluginModel) {
var OS = OutSystems.Internal;
var LauncherReturnList = (function (_super) {
__extends(LauncherReturnList, _super);
function LauncherReturnList(defaults) {
_super.apply(this, arguments);
}
LauncherReturnList.itemType = Connect2_AppLauncherPluginModel.LauncherReturnRec;
return LauncherReturnList;
})(OS.DataTypes.GenericRecordList);
Connect2_AppLauncherPluginModel.LauncherReturnList = LauncherReturnList;

});
define("Connect2_AppLauncherPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_AppLauncherPluginModel = exports;
Object.defineProperty(Connect2_AppLauncherPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["8ac23e2f-9f10-490e-b212-5a61c98d446f"];
}
});

Connect2_AppLauncherPluginModel.staticEntities = {};
});
