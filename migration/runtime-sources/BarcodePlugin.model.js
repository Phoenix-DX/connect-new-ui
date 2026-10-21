define("BarcodePlugin.model$ScanOrientationRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanOrientationRec = (function (_super) {
__extends(ScanOrientationRec, _super);
function ScanOrientationRec(defaults) {
_super.apply(this, arguments);
}
ScanOrientationRec.attributesToDeclare = function () {
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
ScanOrientationRec.init();
return ScanOrientationRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.ScanOrientationRec = ScanOrientationRec;

});
define("BarcodePlugin.model$ScanOrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScanOrientationRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanOrientationRecord = (function (_super) {
__extends(ScanOrientationRecord, _super);
function ScanOrientationRecord(defaults) {
_super.apply(this, arguments);
}
ScanOrientationRecord.attributesToDeclare = function () {
return [
this.attr("ScanOrientation", "scanOrientationAttr", "ScanOrientation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.ScanOrientationRec());
}, true, BarcodePluginModel.ScanOrientationRec)
].concat(_super.attributesToDeclare.call(this));
};
ScanOrientationRecord.fromStructure = function (str) {
return new ScanOrientationRecord(new ScanOrientationRecord.RecordClass({
scanOrientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScanOrientationRecord._isAnonymousRecord = true;
ScanOrientationRecord.UniqueId = "0401b41c-21a1-1e8c-9eef-bb80c3c0c090";
ScanOrientationRecord.init();
return ScanOrientationRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.ScanOrientationRecord = ScanOrientationRecord;

});
define("BarcodePlugin.model$ScanResultRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanResultRec = (function (_super) {
__extends(ScanResultRec, _super);
function ScanResultRec(defaults) {
_super.apply(this, arguments);
}
ScanResultRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "ScanResult", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Format", "formatAttr", "format", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScanResultRec.init();
return ScanResultRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.ScanResultRec = ScanResultRec;

});
define("BarcodePlugin.model$ScanResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScanResultRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanResultRecord = (function (_super) {
__extends(ScanResultRecord, _super);
function ScanResultRecord(defaults) {
_super.apply(this, arguments);
}
ScanResultRecord.attributesToDeclare = function () {
return [
this.attr("ScanResult", "scanResultAttr", "ScanResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.ScanResultRec());
}, true, BarcodePluginModel.ScanResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ScanResultRecord.fromStructure = function (str) {
return new ScanResultRecord(new ScanResultRecord.RecordClass({
scanResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScanResultRecord._isAnonymousRecord = true;
ScanResultRecord.UniqueId = "fb30db96-afd9-a117-057d-4309610a24bd";
ScanResultRecord.init();
return ScanResultRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.ScanResultRecord = ScanResultRecord;

});
define("BarcodePlugin.model$ScanResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScanResultRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanResultRecordList = (function (_super) {
__extends(ScanResultRecordList, _super);
function ScanResultRecordList(defaults) {
_super.apply(this, arguments);
}
ScanResultRecordList.itemType = BarcodePluginModel.ScanResultRecord;
return ScanResultRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ScanResultRecordList = ScanResultRecordList;

});
define("BarcodePlugin.model$ScannerResultInternalRec", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "BarcodePlugin.model", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScannerResultInternalRec = (function (_super) {
__extends(ScannerResultInternalRec, _super);
function ScannerResultInternalRec(defaults) {
_super.apply(this, arguments);
}
ScannerResultInternalRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ScanResultObjectString", "scanResultObjectStringAttr", "ScanResultObjectString", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, true, CommonPluginModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ScannerResultInternalRec.init();
return ScannerResultInternalRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.ScannerResultInternalRec = ScannerResultInternalRec;

});
define("BarcodePlugin.model$ScannerResultInternalRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScannerResultInternalRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScannerResultInternalRecord = (function (_super) {
__extends(ScannerResultInternalRecord, _super);
function ScannerResultInternalRecord(defaults) {
_super.apply(this, arguments);
}
ScannerResultInternalRecord.attributesToDeclare = function () {
return [
this.attr("ScannerResultInternal", "scannerResultInternalAttr", "ScannerResultInternal", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.ScannerResultInternalRec());
}, true, BarcodePluginModel.ScannerResultInternalRec)
].concat(_super.attributesToDeclare.call(this));
};
ScannerResultInternalRecord.fromStructure = function (str) {
return new ScannerResultInternalRecord(new ScannerResultInternalRecord.RecordClass({
scannerResultInternalAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScannerResultInternalRecord._isAnonymousRecord = true;
ScannerResultInternalRecord.UniqueId = "1241b0df-8d4c-bfb6-9136-06d9cc545914";
ScannerResultInternalRecord.init();
return ScannerResultInternalRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.ScannerResultInternalRecord = ScannerResultInternalRecord;

});
define("BarcodePlugin.model$FormatRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var FormatRec = (function (_super) {
__extends(FormatRec, _super);
function FormatRec(defaults) {
_super.apply(this, arguments);
}
FormatRec.attributesToDeclare = function () {
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
FormatRec.init();
return FormatRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.FormatRec = FormatRec;

});
define("BarcodePlugin.model$FormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$FormatRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var FormatRecord = (function (_super) {
__extends(FormatRecord, _super);
function FormatRecord(defaults) {
_super.apply(this, arguments);
}
FormatRecord.attributesToDeclare = function () {
return [
this.attr("Format", "formatAttr", "Format", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.FormatRec());
}, true, BarcodePluginModel.FormatRec)
].concat(_super.attributesToDeclare.call(this));
};
FormatRecord.fromStructure = function (str) {
return new FormatRecord(new FormatRecord.RecordClass({
formatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FormatRecord._isAnonymousRecord = true;
FormatRecord.UniqueId = "173418a4-d167-33dc-cc02-b1e9996a9085";
FormatRecord.init();
return FormatRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.FormatRecord = FormatRecord;

});
define("BarcodePlugin.model$SettingsRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsRec = (function (_super) {
__extends(SettingsRec, _super);
function SettingsRec(defaults) {
_super.apply(this, arguments);
}
SettingsRec.attributesToDeclare = function () {
return [
this.attr("Camera", "cameraAttr", "Camera", false, false, OS.DataTypes.DataTypes.Text, function () {
return "back";
}, true), 
this.attr("Flash", "flashAttr", "Flash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "auto";
}, true), 
this.attr("DrawSight", "drawSightAttr", "DrawSight", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SettingsRec.init();
return SettingsRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.SettingsRec = SettingsRec;

});
define("BarcodePlugin.model$SettingsRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$SettingsRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsRecord = (function (_super) {
__extends(SettingsRecord, _super);
function SettingsRecord(defaults) {
_super.apply(this, arguments);
}
SettingsRecord.attributesToDeclare = function () {
return [
this.attr("Settings", "settingsAttr", "Settings", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.SettingsRec());
}, true, BarcodePluginModel.SettingsRec)
].concat(_super.attributesToDeclare.call(this));
};
SettingsRecord.fromStructure = function (str) {
return new SettingsRecord(new SettingsRecord.RecordClass({
settingsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SettingsRecord._isAnonymousRecord = true;
SettingsRecord.UniqueId = "1977d006-50cb-a056-3f3d-25050260ab8f";
SettingsRecord.init();
return SettingsRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.SettingsRecord = SettingsRecord;

});
define("BarcodePlugin.model$FormatList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$FormatRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var FormatList = (function (_super) {
__extends(FormatList, _super);
function FormatList(defaults) {
_super.apply(this, arguments);
}
FormatList.itemType = BarcodePluginModel.FormatRec;
return FormatList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.FormatList = FormatList;

});
define("BarcodePlugin.model$SettingsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$SettingsRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsRecordList = (function (_super) {
__extends(SettingsRecordList, _super);
function SettingsRecordList(defaults) {
_super.apply(this, arguments);
}
SettingsRecordList.itemType = BarcodePluginModel.SettingsRecord;
return SettingsRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.SettingsRecordList = SettingsRecordList;

});
define("BarcodePlugin.model$AndroidScanningLibraryRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var AndroidScanningLibraryRec = (function (_super) {
__extends(AndroidScanningLibraryRec, _super);
function AndroidScanningLibraryRec(defaults) {
_super.apply(this, arguments);
}
AndroidScanningLibraryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
AndroidScanningLibraryRec.init();
return AndroidScanningLibraryRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.AndroidScanningLibraryRec = AndroidScanningLibraryRec;

});
define("BarcodePlugin.model$AndroidScanningLibraryRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$AndroidScanningLibraryRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var AndroidScanningLibraryRecord = (function (_super) {
__extends(AndroidScanningLibraryRecord, _super);
function AndroidScanningLibraryRecord(defaults) {
_super.apply(this, arguments);
}
AndroidScanningLibraryRecord.attributesToDeclare = function () {
return [
this.attr("AndroidScanningLibrary", "androidScanningLibraryAttr", "AndroidScanningLibrary", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.AndroidScanningLibraryRec());
}, true, BarcodePluginModel.AndroidScanningLibraryRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidScanningLibraryRecord.fromStructure = function (str) {
return new AndroidScanningLibraryRecord(new AndroidScanningLibraryRecord.RecordClass({
androidScanningLibraryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidScanningLibraryRecord._isAnonymousRecord = true;
AndroidScanningLibraryRecord.UniqueId = "64b9258a-c2fd-253f-9689-9bc159d71d74";
AndroidScanningLibraryRecord.init();
return AndroidScanningLibraryRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.AndroidScanningLibraryRecord = AndroidScanningLibraryRecord;

});
define("BarcodePlugin.model$AndroidScanningLibraryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$AndroidScanningLibraryRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var AndroidScanningLibraryRecordList = (function (_super) {
__extends(AndroidScanningLibraryRecordList, _super);
function AndroidScanningLibraryRecordList(defaults) {
_super.apply(this, arguments);
}
AndroidScanningLibraryRecordList.itemType = BarcodePluginModel.AndroidScanningLibraryRecord;
return AndroidScanningLibraryRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.AndroidScanningLibraryRecordList = AndroidScanningLibraryRecordList;

});
define("BarcodePlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "BarcodePlugin.model", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ErrorList = ErrorList;

});
define("BarcodePlugin.model$CameraDirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionRec = (function (_super) {
__extends(CameraDirectionRec, _super);
function CameraDirectionRec(defaults) {
_super.apply(this, arguments);
}
CameraDirectionRec.attributesToDeclare = function () {
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
CameraDirectionRec.init();
return CameraDirectionRec;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.CameraDirectionRec = CameraDirectionRec;

});
define("BarcodePlugin.model$CameraDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$CameraDirectionRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionRecord = (function (_super) {
__extends(CameraDirectionRecord, _super);
function CameraDirectionRecord(defaults) {
_super.apply(this, arguments);
}
CameraDirectionRecord.attributesToDeclare = function () {
return [
this.attr("CameraDirection", "cameraDirectionAttr", "CameraDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BarcodePluginModel.CameraDirectionRec());
}, true, BarcodePluginModel.CameraDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
CameraDirectionRecord.fromStructure = function (str) {
return new CameraDirectionRecord(new CameraDirectionRecord.RecordClass({
cameraDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CameraDirectionRecord._isAnonymousRecord = true;
CameraDirectionRecord.UniqueId = "eafc6e33-d795-1bc3-0127-a7fdcf1bd2af";
CameraDirectionRecord.init();
return CameraDirectionRecord;
})(OS.DataTypes.GenericRecord);
BarcodePluginModel.CameraDirectionRecord = CameraDirectionRecord;

});
define("BarcodePlugin.model$CameraDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$CameraDirectionRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionRecordList = (function (_super) {
__extends(CameraDirectionRecordList, _super);
function CameraDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CameraDirectionRecordList.itemType = BarcodePluginModel.CameraDirectionRecord;
return CameraDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.CameraDirectionRecordList = CameraDirectionRecordList;

});
define("BarcodePlugin.model$ScanOrientationList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScanOrientationRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanOrientationList = (function (_super) {
__extends(ScanOrientationList, _super);
function ScanOrientationList(defaults) {
_super.apply(this, arguments);
}
ScanOrientationList.itemType = BarcodePluginModel.ScanOrientationRec;
return ScanOrientationList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ScanOrientationList = ScanOrientationList;

});
define("BarcodePlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "BarcodePlugin.model", "CommonPlugin.model$ErrorRec", "BarcodePlugin.referencesHealth", "BarcodePlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, BarcodePluginModel) {
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
BarcodePluginModel.ErrorRecord = ErrorRecord;

});
define("BarcodePlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ErrorRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = BarcodePluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ErrorRecordList = ErrorRecordList;

});
define("BarcodePlugin.model$ScannerResultInternalList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScannerResultInternalRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScannerResultInternalList = (function (_super) {
__extends(ScannerResultInternalList, _super);
function ScannerResultInternalList(defaults) {
_super.apply(this, arguments);
}
ScannerResultInternalList.itemType = BarcodePluginModel.ScannerResultInternalRec;
return ScannerResultInternalList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ScannerResultInternalList = ScannerResultInternalList;

});
define("BarcodePlugin.model$AndroidScanningLibraryList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$AndroidScanningLibraryRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var AndroidScanningLibraryList = (function (_super) {
__extends(AndroidScanningLibraryList, _super);
function AndroidScanningLibraryList(defaults) {
_super.apply(this, arguments);
}
AndroidScanningLibraryList.itemType = BarcodePluginModel.AndroidScanningLibraryRec;
return AndroidScanningLibraryList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.AndroidScanningLibraryList = AndroidScanningLibraryList;

});
define("BarcodePlugin.model$ScanOrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScanOrientationRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanOrientationRecordList = (function (_super) {
__extends(ScanOrientationRecordList, _super);
function ScanOrientationRecordList(defaults) {
_super.apply(this, arguments);
}
ScanOrientationRecordList.itemType = BarcodePluginModel.ScanOrientationRecord;
return ScanOrientationRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ScanOrientationRecordList = ScanOrientationRecordList;

});
define("BarcodePlugin.model$CameraDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$CameraDirectionRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionList = (function (_super) {
__extends(CameraDirectionList, _super);
function CameraDirectionList(defaults) {
_super.apply(this, arguments);
}
CameraDirectionList.itemType = BarcodePluginModel.CameraDirectionRec;
return CameraDirectionList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.CameraDirectionList = CameraDirectionList;

});
define("BarcodePlugin.model$FormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$FormatRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var FormatRecordList = (function (_super) {
__extends(FormatRecordList, _super);
function FormatRecordList(defaults) {
_super.apply(this, arguments);
}
FormatRecordList.itemType = BarcodePluginModel.FormatRecord;
return FormatRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.FormatRecordList = FormatRecordList;

});
define("BarcodePlugin.model$ScannerResultInternalRecordList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScannerResultInternalRecord"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScannerResultInternalRecordList = (function (_super) {
__extends(ScannerResultInternalRecordList, _super);
function ScannerResultInternalRecordList(defaults) {
_super.apply(this, arguments);
}
ScannerResultInternalRecordList.itemType = BarcodePluginModel.ScannerResultInternalRecord;
return ScannerResultInternalRecordList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ScannerResultInternalRecordList = ScannerResultInternalRecordList;

});
define("BarcodePlugin.model$SettingsList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$SettingsRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var SettingsList = (function (_super) {
__extends(SettingsList, _super);
function SettingsList(defaults) {
_super.apply(this, arguments);
}
SettingsList.itemType = BarcodePluginModel.SettingsRec;
return SettingsList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.SettingsList = SettingsList;

});
define("BarcodePlugin.model$ScanResultList", ["exports", "OutSystems/ClientRuntime/Main", "BarcodePlugin.model", "BarcodePlugin.model$ScanResultRec"], function (exports, OutSystems, BarcodePluginModel) {
var OS = OutSystems.Internal;
var ScanResultList = (function (_super) {
__extends(ScanResultList, _super);
function ScanResultList(defaults) {
_super.apply(this, arguments);
}
ScanResultList.itemType = BarcodePluginModel.ScanResultRec;
return ScanResultList;
})(OS.DataTypes.GenericRecordList);
BarcodePluginModel.ScanResultList = ScanResultList;

});
define("BarcodePlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var BarcodePluginModel = exports;
Object.defineProperty(BarcodePluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["b8b551da-aebd-4a2d-80c8-28ff1ea1bf98"];
}
});

BarcodePluginModel.staticEntities = {};
BarcodePluginModel.staticEntities.format = {};
var getFormatRecord = function (record) {
return BarcodePluginModel.module.staticEntities["06af823e-218f-467b-9b15-ad8c2346bd7f"][record];
};
Object.defineProperty(BarcodePluginModel.staticEntities.format, "mAXICODE", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("1fdfe65d-00f3-44f1-9389-786caa21636d"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "uPC_EAN_EXTENSION", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("31add716-e54c-47d3-ae78-b38100587e76"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "eAN_13", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("6febe728-2ce4-42c4-8eef-891a75f6db32"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "cODABAR", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("74c42bbd-0871-4345-b021-8241f949f0f2"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "rSS_EXPANDED", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("79453eef-72b8-4d4e-960a-4262e9da92b4"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "pDF_417", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("7b00f9e1-1084-4794-bad7-906f0fc77909"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "uPC_A", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("7ead4d46-303d-4711-9690-081c9c759775"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "cODE_93", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("8708d290-bba5-4f64-a94f-c07da3f29ec6"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "qR_CODE", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("98e9bc94-2e78-4b6b-8484-cb93605632d8"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "cODE_39", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("9b74aabd-e4f9-4b92-bd7c-0fff52861e4e"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "dATA_MATRIX", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("ae10ea18-50d4-4d42-ba6f-7078844eeede"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "uPC_E", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("b0640b78-b660-40d3-bc65-46e140f4b761"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "iTF", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("b441532c-dfa9-4832-ab00-abcc2ebb9b45"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "rSS_14", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("bbdf3f01-5bae-42a3-8b38-b9ace3581b86"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "eAN_8", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("c4e07517-71b3-4eb2-be07-47ef334649e0"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "aLL", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("c4eb2a1f-79fb-45ea-b3f4-fa180d0705ac"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "cODE_128", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("e4801b14-02a1-4228-b10e-5263f0c5b02c"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.format, "aZTEC", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getFormatRecord("eb903213-cade-4509-9122-acd4cadaed77"));
}
});

BarcodePluginModel.staticEntities.scanOrientation = {};
var getScanOrientationRecord = function (record) {
return BarcodePluginModel.module.staticEntities["2033648e-e889-432a-a8d0-196a70246d82"][record];
};
Object.defineProperty(BarcodePluginModel.staticEntities.scanOrientation, "landscape", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getScanOrientationRecord("4edc8880-2cdb-4fdc-ad5e-1cdc328f7cc2"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.scanOrientation, "portrait", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getScanOrientationRecord("ad2128c4-9dcf-4035-acb7-79c9575f47d1"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.scanOrientation, "adaptive", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getScanOrientationRecord("d55e6de1-9d78-4690-a711-5ddb0f8858c9"));
}
});

BarcodePluginModel.staticEntities.androidScanningLibrary = {};
var getAndroidScanningLibraryRecord = function (record) {
return BarcodePluginModel.module.staticEntities["6c2df8d5-6632-43f4-90db-cad16f8e8efb"][record];
};
Object.defineProperty(BarcodePluginModel.staticEntities.androidScanningLibrary, "zXing", {
get: function () {
return getAndroidScanningLibraryRecord("77f03f21-3ef1-4548-99cd-ed121e84396d");
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.androidScanningLibrary, "mLKit", {
get: function () {
return getAndroidScanningLibraryRecord("ca7621b9-7056-4d52-9514-41d554452f3d");
}
});

BarcodePluginModel.staticEntities.cameraDirection = {};
var getCameraDirectionRecord = function (record) {
return BarcodePluginModel.module.staticEntities["b3b4d250-60c9-4c1d-abbd-9c74bb0d7873"][record];
};
Object.defineProperty(BarcodePluginModel.staticEntities.cameraDirection, "frontCamera", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCameraDirectionRecord("54122f81-faf7-49d0-adaa-d0bdca981a80"));
}
});

Object.defineProperty(BarcodePluginModel.staticEntities.cameraDirection, "backCamera", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCameraDirectionRecord("c02f9b17-1dba-4d75-abca-5bef60f097c6"));
}
});

});
