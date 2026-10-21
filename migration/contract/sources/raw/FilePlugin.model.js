define("FilePlugin.model$WarningRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FilePlugin.model", "CommonPlugin.model$WarningRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FilePluginModel) {
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
FilePluginModel.WarningRecord = WarningRecord;

});
define("FilePlugin.model$WarningRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$WarningRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var WarningRecordList = (function (_super) {
__extends(WarningRecordList, _super);
function WarningRecordList(defaults) {
_super.apply(this, arguments);
}
WarningRecordList.itemType = FilePluginModel.WarningRecord;
return WarningRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.WarningRecordList = WarningRecordList;

});
define("FilePlugin.model$FileInfoPrivateRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoPrivateRec = (function (_super) {
__extends(FileInfoPrivateRec, _super);
function FileInfoPrivateRec(defaults) {
_super.apply(this, arguments);
}
FileInfoPrivateRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Ctime", "ctimeAttr", "ctime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Mtime", "mtimeAttr", "mtime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URI", "uRIAttr", "uri", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FileInfoPrivateRec.init();
return FileInfoPrivateRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.FileInfoPrivateRec = FileInfoPrivateRec;

});
define("FilePlugin.model$FileEncodingRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileEncodingRec = (function (_super) {
__extends(FileEncodingRec, _super);
function FileEncodingRec(defaults) {
_super.apply(this, arguments);
}
FileEncodingRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FileEncodingRec.init();
return FileEncodingRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.FileEncodingRec = FileEncodingRec;

});
define("FilePlugin.model$FileEncodingList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileEncodingRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileEncodingList = (function (_super) {
__extends(FileEncodingList, _super);
function FileEncodingList(defaults) {
_super.apply(this, arguments);
}
FileEncodingList.itemType = FilePluginModel.FileEncodingRec;
return FileEncodingList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.FileEncodingList = FileEncodingList;

});
define("FilePlugin.model$DEPRECATED_StorageTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StorageTypeRec = (function (_super) {
__extends(DEPRECATED_StorageTypeRec, _super);
function DEPRECATED_StorageTypeRec(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StorageTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_StorageTypeRec.init();
return DEPRECATED_StorageTypeRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.DEPRECATED_StorageTypeRec = DEPRECATED_StorageTypeRec;

});
define("FilePlugin.model$DEPRECATED_StorageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$DEPRECATED_StorageTypeRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StorageTypeRecord = (function (_super) {
__extends(DEPRECATED_StorageTypeRecord, _super);
function DEPRECATED_StorageTypeRecord(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StorageTypeRecord.attributesToDeclare = function () {
return [
this.attr("DEPRECATED_StorageType", "dEPRECATED_StorageTypeAttr", "DEPRECATED_StorageType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.DEPRECATED_StorageTypeRec());
}, true, FilePluginModel.DEPRECATED_StorageTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_StorageTypeRecord.fromStructure = function (str) {
return new DEPRECATED_StorageTypeRecord(new DEPRECATED_StorageTypeRecord.RecordClass({
dEPRECATED_StorageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_StorageTypeRecord._isAnonymousRecord = true;
DEPRECATED_StorageTypeRecord.UniqueId = "307a72dc-6a70-42ef-3c3f-cea28bdbf985";
DEPRECATED_StorageTypeRecord.init();
return DEPRECATED_StorageTypeRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.DEPRECATED_StorageTypeRecord = DEPRECATED_StorageTypeRecord;

});
define("FilePlugin.model$FileInfoPrivateList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileInfoPrivateRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoPrivateList = (function (_super) {
__extends(FileInfoPrivateList, _super);
function FileInfoPrivateList(defaults) {
_super.apply(this, arguments);
}
FileInfoPrivateList.itemType = FilePluginModel.FileInfoPrivateRec;
return FileInfoPrivateList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.FileInfoPrivateList = FileInfoPrivateList;

});
define("FilePlugin.model$FileInfoPrivateRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileInfoPrivateRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoPrivateRecord = (function (_super) {
__extends(FileInfoPrivateRecord, _super);
function FileInfoPrivateRecord(defaults) {
_super.apply(this, arguments);
}
FileInfoPrivateRecord.attributesToDeclare = function () {
return [
this.attr("FileInfoPrivate", "fileInfoPrivateAttr", "FileInfoPrivate", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.FileInfoPrivateRec());
}, true, FilePluginModel.FileInfoPrivateRec)
].concat(_super.attributesToDeclare.call(this));
};
FileInfoPrivateRecord.fromStructure = function (str) {
return new FileInfoPrivateRecord(new FileInfoPrivateRecord.RecordClass({
fileInfoPrivateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileInfoPrivateRecord._isAnonymousRecord = true;
FileInfoPrivateRecord.UniqueId = "3c29fe76-6cbb-5b00-9c0f-64b11e554e72";
FileInfoPrivateRecord.init();
return FileInfoPrivateRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.FileInfoPrivateRecord = FileInfoPrivateRecord;

});
define("FilePlugin.model$FileInfoPrivateRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileInfoPrivateRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoPrivateRecordList = (function (_super) {
__extends(FileInfoPrivateRecordList, _super);
function FileInfoPrivateRecordList(defaults) {
_super.apply(this, arguments);
}
FileInfoPrivateRecordList.itemType = FilePluginModel.FileInfoPrivateRecord;
return FileInfoPrivateRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.FileInfoPrivateRecordList = FileInfoPrivateRecordList;

});
define("FilePlugin.model$FileInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoRec = (function (_super) {
__extends(FileInfoRec, _super);
function FileInfoRec(defaults) {
_super.apply(this, arguments);
}
FileInfoRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreationTime", "creationTimeAttr", "creationTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ModificationTime", "modificationTimeAttr", "modificationTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("URI", "uRIAttr", "uri", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FileInfoRec.init();
return FileInfoRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.FileInfoRec = FileInfoRec;

});
define("FilePlugin.model$FileInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileInfoRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoRecord = (function (_super) {
__extends(FileInfoRecord, _super);
function FileInfoRecord(defaults) {
_super.apply(this, arguments);
}
FileInfoRecord.attributesToDeclare = function () {
return [
this.attr("FileInfo", "fileInfoAttr", "FileInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.FileInfoRec());
}, true, FilePluginModel.FileInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
FileInfoRecord.fromStructure = function (str) {
return new FileInfoRecord(new FileInfoRecord.RecordClass({
fileInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileInfoRecord._isAnonymousRecord = true;
FileInfoRecord.UniqueId = "cf5be720-e9e1-2ec0-2a4b-c8b9b8e044af";
FileInfoRecord.init();
return FileInfoRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.FileInfoRecord = FileInfoRecord;

});
define("FilePlugin.model$FileInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileInfoRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoRecordList = (function (_super) {
__extends(FileInfoRecordList, _super);
function FileInfoRecordList(defaults) {
_super.apply(this, arguments);
}
FileInfoRecordList.itemType = FilePluginModel.FileInfoRecord;
return FileInfoRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.FileInfoRecordList = FileInfoRecordList;

});
define("FilePlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FilePlugin.model", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FilePluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.ErrorList = ErrorList;

});
define("FilePlugin.model$WarningList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FilePlugin.model", "CommonPlugin.model$WarningRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FilePluginModel) {
var OS = OutSystems.Internal;
var WarningList = (function (_super) {
__extends(WarningList, _super);
function WarningList(defaults) {
_super.apply(this, arguments);
}
WarningList.itemType = CommonPluginModel.WarningRec;
return WarningList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.WarningList = WarningList;

});
define("FilePlugin.model$FileEncodingRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileEncodingRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileEncodingRecord = (function (_super) {
__extends(FileEncodingRecord, _super);
function FileEncodingRecord(defaults) {
_super.apply(this, arguments);
}
FileEncodingRecord.attributesToDeclare = function () {
return [
this.attr("FileEncoding", "fileEncodingAttr", "FileEncoding", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.FileEncodingRec());
}, true, FilePluginModel.FileEncodingRec)
].concat(_super.attributesToDeclare.call(this));
};
FileEncodingRecord.fromStructure = function (str) {
return new FileEncodingRecord(new FileEncodingRecord.RecordClass({
fileEncodingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileEncodingRecord._isAnonymousRecord = true;
FileEncodingRecord.UniqueId = "3fc856b8-041c-d480-b088-2155d7dec166";
FileEncodingRecord.init();
return FileEncodingRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.FileEncodingRecord = FileEncodingRecord;

});
define("FilePlugin.model$PathDirectoryRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathDirectoryRec = (function (_super) {
__extends(PathDirectoryRec, _super);
function PathDirectoryRec(defaults) {
_super.apply(this, arguments);
}
PathDirectoryRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PathDirectoryRec.init();
return PathDirectoryRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.PathDirectoryRec = PathDirectoryRec;

});
define("FilePlugin.model$PathDirectoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$PathDirectoryRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathDirectoryRecord = (function (_super) {
__extends(PathDirectoryRecord, _super);
function PathDirectoryRecord(defaults) {
_super.apply(this, arguments);
}
PathDirectoryRecord.attributesToDeclare = function () {
return [
this.attr("PathDirectory", "pathDirectoryAttr", "PathDirectory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.PathDirectoryRec());
}, true, FilePluginModel.PathDirectoryRec)
].concat(_super.attributesToDeclare.call(this));
};
PathDirectoryRecord.fromStructure = function (str) {
return new PathDirectoryRecord(new PathDirectoryRecord.RecordClass({
pathDirectoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PathDirectoryRecord._isAnonymousRecord = true;
PathDirectoryRecord.UniqueId = "40e07c31-c384-620a-749a-3b084b9943f8";
PathDirectoryRecord.init();
return PathDirectoryRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.PathDirectoryRecord = PathDirectoryRecord;

});
define("FilePlugin.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FilePlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FilePluginModel) {
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
FilePluginModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("FilePlugin.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = FilePluginModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("FilePlugin.model$PathTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathTypeRec = (function (_super) {
__extends(PathTypeRec, _super);
function PathTypeRec(defaults) {
_super.apply(this, arguments);
}
PathTypeRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PathTypeRec.init();
return PathTypeRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.PathTypeRec = PathTypeRec;

});
define("FilePlugin.model$PathTypeList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$PathTypeRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathTypeList = (function (_super) {
__extends(PathTypeList, _super);
function PathTypeList(defaults) {
_super.apply(this, arguments);
}
PathTypeList.itemType = FilePluginModel.PathTypeRec;
return PathTypeList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.PathTypeList = PathTypeList;

});
define("FilePlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FilePlugin.model", "CommonPlugin.model$ErrorRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FilePluginModel) {
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
FilePluginModel.ErrorRecord = ErrorRecord;

});
define("FilePlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$ErrorRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = FilePluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.ErrorRecordList = ErrorRecordList;

});
define("FilePlugin.model$PathDirectoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$PathDirectoryRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathDirectoryRecordList = (function (_super) {
__extends(PathDirectoryRecordList, _super);
function PathDirectoryRecordList(defaults) {
_super.apply(this, arguments);
}
PathDirectoryRecordList.itemType = FilePluginModel.PathDirectoryRecord;
return PathDirectoryRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.PathDirectoryRecordList = PathDirectoryRecordList;

});
define("FilePlugin.model$FileInfoList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileInfoRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileInfoList = (function (_super) {
__extends(FileInfoList, _super);
function FileInfoList(defaults) {
_super.apply(this, arguments);
}
FileInfoList.itemType = FilePluginModel.FileInfoRec;
return FileInfoList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.FileInfoList = FileInfoList;

});
define("FilePlugin.model$PathTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$PathTypeRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathTypeRecord = (function (_super) {
__extends(PathTypeRecord, _super);
function PathTypeRecord(defaults) {
_super.apply(this, arguments);
}
PathTypeRecord.attributesToDeclare = function () {
return [
this.attr("PathType", "pathTypeAttr", "PathType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.PathTypeRec());
}, true, FilePluginModel.PathTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
PathTypeRecord.fromStructure = function (str) {
return new PathTypeRecord(new PathTypeRecord.RecordClass({
pathTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PathTypeRecord._isAnonymousRecord = true;
PathTypeRecord.UniqueId = "78d4e78f-336a-6821-db9a-630108098ce3";
PathTypeRecord.init();
return PathTypeRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.PathTypeRecord = PathTypeRecord;

});
define("FilePlugin.model$DEPRECATED_StoragePersistencyRec", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StoragePersistencyRec = (function (_super) {
__extends(DEPRECATED_StoragePersistencyRec, _super);
function DEPRECATED_StoragePersistencyRec(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StoragePersistencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_StoragePersistencyRec.init();
return DEPRECATED_StoragePersistencyRec;
})(OS.DataTypes.GenericRecord);
FilePluginModel.DEPRECATED_StoragePersistencyRec = DEPRECATED_StoragePersistencyRec;

});
define("FilePlugin.model$DEPRECATED_StoragePersistencyRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$DEPRECATED_StoragePersistencyRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StoragePersistencyRecord = (function (_super) {
__extends(DEPRECATED_StoragePersistencyRecord, _super);
function DEPRECATED_StoragePersistencyRecord(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StoragePersistencyRecord.attributesToDeclare = function () {
return [
this.attr("DEPRECATED_StoragePersistency", "dEPRECATED_StoragePersistencyAttr", "DEPRECATED_StoragePersistency", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.DEPRECATED_StoragePersistencyRec());
}, true, FilePluginModel.DEPRECATED_StoragePersistencyRec)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_StoragePersistencyRecord.fromStructure = function (str) {
return new DEPRECATED_StoragePersistencyRecord(new DEPRECATED_StoragePersistencyRecord.RecordClass({
dEPRECATED_StoragePersistencyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_StoragePersistencyRecord._isAnonymousRecord = true;
DEPRECATED_StoragePersistencyRecord.UniqueId = "7d25d3b8-203c-1b5b-e0e2-ff0ae24b061f";
DEPRECATED_StoragePersistencyRecord.init();
return DEPRECATED_StoragePersistencyRecord;
})(OS.DataTypes.GenericRecord);
FilePluginModel.DEPRECATED_StoragePersistencyRecord = DEPRECATED_StoragePersistencyRecord;

});
define("FilePlugin.model$DEPRECATED_StoragePersistencyList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$DEPRECATED_StoragePersistencyRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StoragePersistencyList = (function (_super) {
__extends(DEPRECATED_StoragePersistencyList, _super);
function DEPRECATED_StoragePersistencyList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StoragePersistencyList.itemType = FilePluginModel.DEPRECATED_StoragePersistencyRec;
return DEPRECATED_StoragePersistencyList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.DEPRECATED_StoragePersistencyList = DEPRECATED_StoragePersistencyList;

});
define("FilePlugin.model$FileEncodingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$FileEncodingRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var FileEncodingRecordList = (function (_super) {
__extends(FileEncodingRecordList, _super);
function FileEncodingRecordList(defaults) {
_super.apply(this, arguments);
}
FileEncodingRecordList.itemType = FilePluginModel.FileEncodingRecord;
return FileEncodingRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.FileEncodingRecordList = FileEncodingRecordList;

});
define("FilePlugin.model$DEPRECATED_StorageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$DEPRECATED_StorageTypeRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StorageTypeRecordList = (function (_super) {
__extends(DEPRECATED_StorageTypeRecordList, _super);
function DEPRECATED_StorageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StorageTypeRecordList.itemType = FilePluginModel.DEPRECATED_StorageTypeRecord;
return DEPRECATED_StorageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.DEPRECATED_StorageTypeRecordList = DEPRECATED_StorageTypeRecordList;

});
define("FilePlugin.model$DEPRECATED_StorageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$DEPRECATED_StorageTypeRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StorageTypeList = (function (_super) {
__extends(DEPRECATED_StorageTypeList, _super);
function DEPRECATED_StorageTypeList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StorageTypeList.itemType = FilePluginModel.DEPRECATED_StorageTypeRec;
return DEPRECATED_StorageTypeList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.DEPRECATED_StorageTypeList = DEPRECATED_StorageTypeList;

});
define("FilePlugin.model$PathTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$PathTypeRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathTypeRecordList = (function (_super) {
__extends(PathTypeRecordList, _super);
function PathTypeRecordList(defaults) {
_super.apply(this, arguments);
}
PathTypeRecordList.itemType = FilePluginModel.PathTypeRecord;
return PathTypeRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.PathTypeRecordList = PathTypeRecordList;

});
define("FilePlugin.model$DEPRECATED_StoragePersistencyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$DEPRECATED_StoragePersistencyRecord"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var DEPRECATED_StoragePersistencyRecordList = (function (_super) {
__extends(DEPRECATED_StoragePersistencyRecordList, _super);
function DEPRECATED_StoragePersistencyRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_StoragePersistencyRecordList.itemType = FilePluginModel.DEPRECATED_StoragePersistencyRecord;
return DEPRECATED_StoragePersistencyRecordList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.DEPRECATED_StoragePersistencyRecordList = DEPRECATED_StoragePersistencyRecordList;

});
define("FilePlugin.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FilePlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "FilePlugin.referencesHealth", "FilePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FilePluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("FilePlugin.model$PathDirectoryList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "FilePlugin.model$PathDirectoryRec"], function (exports, OutSystems, FilePluginModel) {
var OS = OutSystems.Internal;
var PathDirectoryList = (function (_super) {
__extends(PathDirectoryList, _super);
function PathDirectoryList(defaults) {
_super.apply(this, arguments);
}
PathDirectoryList.itemType = FilePluginModel.PathDirectoryRec;
return PathDirectoryList;
})(OS.DataTypes.GenericRecordList);
FilePluginModel.PathDirectoryList = PathDirectoryList;

});
define("FilePlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var FilePluginModel = exports;
Object.defineProperty(FilePluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["dba29b2f-44a2-40ee-8034-35085b88a8fe"];
}
});

FilePluginModel.staticEntities = {};
FilePluginModel.staticEntities.dEPRECATED_StoragePersistency = {};
var getDEPRECATED_StoragePersistencyRecord = function (record) {
return FilePluginModel.module.staticEntities["29f7d101-d87f-44af-a057-473430079f37"][record];
};
Object.defineProperty(FilePluginModel.staticEntities.dEPRECATED_StoragePersistency, "temporary", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDEPRECATED_StoragePersistencyRecord("54228c30-0080-44f3-9400-6236fc11c1b8"));
}
});

Object.defineProperty(FilePluginModel.staticEntities.dEPRECATED_StoragePersistency, "persistent", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDEPRECATED_StoragePersistencyRecord("5663d228-1aa7-4034-a459-3c062ba2ea31"));
}
});

FilePluginModel.staticEntities.pathDirectory = {};
var getPathDirectoryRecord = function (record) {
return FilePluginModel.module.staticEntities["46b5dde7-52cd-4ab6-ba6e-c16b9d35db7c"][record];
};
Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "dATA", {
get: function () {
return getPathDirectoryRecord("22ecc6c4-dca2-4135-8edf-67736421e046");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "lIBRARY_NO_CLOUD", {
get: function () {
return getPathDirectoryRecord("27b05688-9763-4232-869b-52cd0343fa31");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "eXTERNAL_CACHE", {
get: function () {
return getPathDirectoryRecord("3bf19ff2-94c6-4ef1-b5ad-49ec839cb8e5");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "tEMPORARY", {
get: function () {
return getPathDirectoryRecord("40ab8fc1-58aa-4ea6-98a1-632612d89663");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "cACHE", {
get: function () {
return getPathDirectoryRecord("42583a34-2a85-4341-a81f-590064311e2a");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "lIBRARY", {
get: function () {
return getPathDirectoryRecord("4d780ed1-8703-48af-9773-d33f83143d46");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "dOCUMENTS", {
get: function () {
return getPathDirectoryRecord("69115c2e-fae4-47ca-99fc-7c120074c598");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "eXTERNAL", {
get: function () {
return getPathDirectoryRecord("79997370-82dd-4365-a801-6110a2f89b26");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathDirectory, "eXTERNAL_STORAGE", {
get: function () {
return getPathDirectoryRecord("c544e4c7-1f6d-41b7-b579-aaf4221aad57");
}
});

FilePluginModel.staticEntities.pathType = {};
var getPathTypeRecord = function (record) {
return FilePluginModel.module.staticEntities["5878c407-2712-4751-bf20-4ed70be65d8b"][record];
};
Object.defineProperty(FilePluginModel.staticEntities.pathType, "file", {
get: function () {
return getPathTypeRecord("73ea4a7c-54b9-4e21-ac51-b67e47c2f55f");
}
});

Object.defineProperty(FilePluginModel.staticEntities.pathType, "directory", {
get: function () {
return getPathTypeRecord("f44a81e1-d8d6-4639-adf0-a9ba82b8b614");
}
});

FilePluginModel.staticEntities.fileEncoding = {};
var getFileEncodingRecord = function (record) {
return FilePluginModel.module.staticEntities["b29daa54-50f9-45e4-a7b9-f6b8cd3decfc"][record];
};
Object.defineProperty(FilePluginModel.staticEntities.fileEncoding, "uTF8", {
get: function () {
return getFileEncodingRecord("25bac7f4-70c8-4e87-95c0-11eb24989428");
}
});

Object.defineProperty(FilePluginModel.staticEntities.fileEncoding, "uTF16", {
get: function () {
return getFileEncodingRecord("35ed148a-1ab8-4316-8a9e-0831879caf28");
}
});

Object.defineProperty(FilePluginModel.staticEntities.fileEncoding, "aSCII", {
get: function () {
return getFileEncodingRecord("4e3d4544-df2a-4f4a-a9e9-54cb7e181b3e");
}
});

FilePluginModel.staticEntities.dEPRECATED_StorageType = {};
var getDEPRECATED_StorageTypeRecord = function (record) {
return FilePluginModel.module.staticEntities["ce5288f5-7a74-4d79-ba18-a48c137bd489"][record];
};
Object.defineProperty(FilePluginModel.staticEntities.dEPRECATED_StorageType, "internal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDEPRECATED_StorageTypeRecord("7adf55e3-18d0-4074-8948-43dd54505f29"));
}
});

Object.defineProperty(FilePluginModel.staticEntities.dEPRECATED_StorageType, "external", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDEPRECATED_StorageTypeRecord("98071031-b214-4e31-b2cb-0148e4e230f4"));
}
});

FilePluginModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(FilePluginModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(FilePluginModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(FilePluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(FilePluginModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

});
