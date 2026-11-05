define("CameraPlugin.model$WarningRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CameraPlugin.model", "CommonPlugin.model$WarningRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, CameraPluginModel) {
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
CameraPluginModel.WarningRecord = WarningRecord;

});
define("CameraPlugin.model$WarningRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$WarningRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var WarningRecordList = (function (_super) {
__extends(WarningRecordList, _super);
function WarningRecordList(defaults) {
_super.apply(this, arguments);
}
WarningRecordList.itemType = CameraPluginModel.WarningRecord;
return WarningRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.WarningRecordList = WarningRecordList;

});
define("CameraPlugin.model$EncodingTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var EncodingTypeRec = (function (_super) {
__extends(EncodingTypeRec, _super);
function EncodingTypeRec(defaults) {
_super.apply(this, arguments);
}
EncodingTypeRec.attributesToDeclare = function () {
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
}, true), 
this.attr("IntValue", "intValueAttr", "IntValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EncodingTypeRec.init();
return EncodingTypeRec;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.EncodingTypeRec = EncodingTypeRec;

});
define("CameraPlugin.model$EncodingTypeList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$EncodingTypeRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var EncodingTypeList = (function (_super) {
__extends(EncodingTypeList, _super);
function EncodingTypeList(defaults) {
_super.apply(this, arguments);
}
EncodingTypeList.itemType = CameraPluginModel.EncodingTypeRec;
return EncodingTypeList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.EncodingTypeList = EncodingTypeList;

});
define("CameraPlugin.model$CameraDirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model"], function (exports, OutSystems, CameraPluginModel) {
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
}, true), 
this.attr("IntValue", "intValueAttr", "IntValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CameraDirectionRec.init();
return CameraDirectionRec;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.CameraDirectionRec = CameraDirectionRec;

});
define("CameraPlugin.model$CameraDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$CameraDirectionRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionRecord = (function (_super) {
__extends(CameraDirectionRecord, _super);
function CameraDirectionRecord(defaults) {
_super.apply(this, arguments);
}
CameraDirectionRecord.attributesToDeclare = function () {
return [
this.attr("CameraDirection", "cameraDirectionAttr", "CameraDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CameraPluginModel.CameraDirectionRec());
}, true, CameraPluginModel.CameraDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
CameraDirectionRecord.fromStructure = function (str) {
return new CameraDirectionRecord(new CameraDirectionRecord.RecordClass({
cameraDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CameraDirectionRecord._isAnonymousRecord = true;
CameraDirectionRecord.UniqueId = "9c3279c2-585d-0bd4-4b09-148e743c6870";
CameraDirectionRecord.init();
return CameraDirectionRecord;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.CameraDirectionRecord = CameraDirectionRecord;

});
define("CameraPlugin.model$CameraDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$CameraDirectionRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionRecordList = (function (_super) {
__extends(CameraDirectionRecordList, _super);
function CameraDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CameraDirectionRecordList.itemType = CameraPluginModel.CameraDirectionRecord;
return CameraDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.CameraDirectionRecordList = CameraDirectionRecordList;

});
define("CameraPlugin.model$CameraDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$CameraDirectionRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var CameraDirectionList = (function (_super) {
__extends(CameraDirectionList, _super);
function CameraDirectionList(defaults) {
_super.apply(this, arguments);
}
CameraDirectionList.itemType = CameraPluginModel.CameraDirectionRec;
return CameraDirectionList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.CameraDirectionList = CameraDirectionList;

});
define("CameraPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CameraPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, CameraPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.ErrorList = ErrorList;

});
define("CameraPlugin.model$MediaMetadataRec", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaMetadataRec = (function (_super) {
__extends(MediaMetadataRec, _super);
function MediaMetadataRec(defaults) {
_super.apply(this, arguments);
}
MediaMetadataRec.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "size", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Format", "formatAttr", "format", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resolution", "resolutionAttr", "resolution", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreationDate", "creationDateAttr", "creationDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MediaMetadataRec.init();
return MediaMetadataRec;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.MediaMetadataRec = MediaMetadataRec;

});
define("CameraPlugin.model$MediaResultRec", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaMetadataRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaResultRec = (function (_super) {
__extends(MediaResultRec, _super);
function MediaResultRec(defaults) {
_super.apply(this, arguments);
}
MediaResultRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("URI", "uRIAttr", "uri", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Thumbnail", "thumbnailAttr", "thumbnail", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Metadata", "metadataAttr", "metadata", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CameraPluginModel.MediaMetadataRec());
}, true, CameraPluginModel.MediaMetadataRec), 
this.attr("Saved", "savedAttr", "saved", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MediaResultRec.init();
return MediaResultRec;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.MediaResultRec = MediaResultRec;

});
define("CameraPlugin.model$MediaResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaResultRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaResultRecord = (function (_super) {
__extends(MediaResultRecord, _super);
function MediaResultRecord(defaults) {
_super.apply(this, arguments);
}
MediaResultRecord.attributesToDeclare = function () {
return [
this.attr("MediaResult", "mediaResultAttr", "MediaResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CameraPluginModel.MediaResultRec());
}, true, CameraPluginModel.MediaResultRec)
].concat(_super.attributesToDeclare.call(this));
};
MediaResultRecord.fromStructure = function (str) {
return new MediaResultRecord(new MediaResultRecord.RecordClass({
mediaResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MediaResultRecord._isAnonymousRecord = true;
MediaResultRecord.UniqueId = "86a3a31b-6177-deb3-bf9f-352d6c38bb01";
MediaResultRecord.init();
return MediaResultRecord;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.MediaResultRecord = MediaResultRecord;

});
define("CameraPlugin.model$MediaResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaResultRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaResultRecordList = (function (_super) {
__extends(MediaResultRecordList, _super);
function MediaResultRecordList(defaults) {
_super.apply(this, arguments);
}
MediaResultRecordList.itemType = CameraPluginModel.MediaResultRecord;
return MediaResultRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.MediaResultRecordList = MediaResultRecordList;

});
define("CameraPlugin.model$WarningList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CameraPlugin.model", "CommonPlugin.model$WarningRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, CameraPluginModel) {
var OS = OutSystems.Internal;
var WarningList = (function (_super) {
__extends(WarningList, _super);
function WarningList(defaults) {
_super.apply(this, arguments);
}
WarningList.itemType = CommonPluginModel.WarningRec;
return WarningList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.WarningList = WarningList;

});
define("CameraPlugin.model$MediaResultList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaResultRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaResultList = (function (_super) {
__extends(MediaResultList, _super);
function MediaResultList(defaults) {
_super.apply(this, arguments);
}
MediaResultList.itemType = CameraPluginModel.MediaResultRec;
return MediaResultList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.MediaResultList = MediaResultList;

});
define("CameraPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "CameraPlugin.model", "CommonPlugin.model$ErrorRec", "CameraPlugin.referencesHealth", "CameraPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, CameraPluginModel) {
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
CameraPluginModel.ErrorRecord = ErrorRecord;

});
define("CameraPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$ErrorRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = CameraPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.ErrorRecordList = ErrorRecordList;

});
define("CameraPlugin.model$EncodingTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$EncodingTypeRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var EncodingTypeRecord = (function (_super) {
__extends(EncodingTypeRecord, _super);
function EncodingTypeRecord(defaults) {
_super.apply(this, arguments);
}
EncodingTypeRecord.attributesToDeclare = function () {
return [
this.attr("EncodingType", "encodingTypeAttr", "EncodingType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CameraPluginModel.EncodingTypeRec());
}, true, CameraPluginModel.EncodingTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
EncodingTypeRecord.fromStructure = function (str) {
return new EncodingTypeRecord(new EncodingTypeRecord.RecordClass({
encodingTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EncodingTypeRecord._isAnonymousRecord = true;
EncodingTypeRecord.UniqueId = "6fc40d4c-b515-0d10-b224-9b46da89f72b";
EncodingTypeRecord.init();
return EncodingTypeRecord;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.EncodingTypeRecord = EncodingTypeRecord;

});
define("CameraPlugin.model$MediaMetadataList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaMetadataRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaMetadataList = (function (_super) {
__extends(MediaMetadataList, _super);
function MediaMetadataList(defaults) {
_super.apply(this, arguments);
}
MediaMetadataList.itemType = CameraPluginModel.MediaMetadataRec;
return MediaMetadataList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.MediaMetadataList = MediaMetadataList;

});
define("CameraPlugin.model$MediaTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaTypeRec = (function (_super) {
__extends(MediaTypeRec, _super);
function MediaTypeRec(defaults) {
_super.apply(this, arguments);
}
MediaTypeRec.attributesToDeclare = function () {
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
MediaTypeRec.init();
return MediaTypeRec;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.MediaTypeRec = MediaTypeRec;

});
define("CameraPlugin.model$MediaTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaTypeRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaTypeRecord = (function (_super) {
__extends(MediaTypeRecord, _super);
function MediaTypeRecord(defaults) {
_super.apply(this, arguments);
}
MediaTypeRecord.attributesToDeclare = function () {
return [
this.attr("MediaType", "mediaTypeAttr", "MediaType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CameraPluginModel.MediaTypeRec());
}, true, CameraPluginModel.MediaTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MediaTypeRecord.fromStructure = function (str) {
return new MediaTypeRecord(new MediaTypeRecord.RecordClass({
mediaTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MediaTypeRecord._isAnonymousRecord = true;
MediaTypeRecord.UniqueId = "9be6ce62-bba3-e851-25d6-54338327a188";
MediaTypeRecord.init();
return MediaTypeRecord;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.MediaTypeRecord = MediaTypeRecord;

});
define("CameraPlugin.model$MediaTypeList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaTypeRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaTypeList = (function (_super) {
__extends(MediaTypeList, _super);
function MediaTypeList(defaults) {
_super.apply(this, arguments);
}
MediaTypeList.itemType = CameraPluginModel.MediaTypeRec;
return MediaTypeList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.MediaTypeList = MediaTypeList;

});
define("CameraPlugin.model$EncodingTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$EncodingTypeRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var EncodingTypeRecordList = (function (_super) {
__extends(EncodingTypeRecordList, _super);
function EncodingTypeRecordList(defaults) {
_super.apply(this, arguments);
}
EncodingTypeRecordList.itemType = CameraPluginModel.EncodingTypeRecord;
return EncodingTypeRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.EncodingTypeRecordList = EncodingTypeRecordList;

});
define("CameraPlugin.model$MediaTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaTypeRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaTypeRecordList = (function (_super) {
__extends(MediaTypeRecordList, _super);
function MediaTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MediaTypeRecordList.itemType = CameraPluginModel.MediaTypeRecord;
return MediaTypeRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.MediaTypeRecordList = MediaTypeRecordList;

});
define("CameraPlugin.model$MediaMetadataRecord", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaMetadataRec"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaMetadataRecord = (function (_super) {
__extends(MediaMetadataRecord, _super);
function MediaMetadataRecord(defaults) {
_super.apply(this, arguments);
}
MediaMetadataRecord.attributesToDeclare = function () {
return [
this.attr("MediaMetadata", "mediaMetadataAttr", "MediaMetadata", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CameraPluginModel.MediaMetadataRec());
}, true, CameraPluginModel.MediaMetadataRec)
].concat(_super.attributesToDeclare.call(this));
};
MediaMetadataRecord.fromStructure = function (str) {
return new MediaMetadataRecord(new MediaMetadataRecord.RecordClass({
mediaMetadataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MediaMetadataRecord._isAnonymousRecord = true;
MediaMetadataRecord.UniqueId = "de40cc21-5bb8-2546-b017-913e885effac";
MediaMetadataRecord.init();
return MediaMetadataRecord;
})(OS.DataTypes.GenericRecord);
CameraPluginModel.MediaMetadataRecord = MediaMetadataRecord;

});
define("CameraPlugin.model$MediaMetadataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "CameraPlugin.model", "CameraPlugin.model$MediaMetadataRecord"], function (exports, OutSystems, CameraPluginModel) {
var OS = OutSystems.Internal;
var MediaMetadataRecordList = (function (_super) {
__extends(MediaMetadataRecordList, _super);
function MediaMetadataRecordList(defaults) {
_super.apply(this, arguments);
}
MediaMetadataRecordList.itemType = CameraPluginModel.MediaMetadataRecord;
return MediaMetadataRecordList;
})(OS.DataTypes.GenericRecordList);
CameraPluginModel.MediaMetadataRecordList = MediaMetadataRecordList;

});
define("CameraPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var CameraPluginModel = exports;
Object.defineProperty(CameraPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["f8b2d557-f7e5-452e-a135-3d45c70b104d"];
}
});

CameraPluginModel.staticEntities = {};
CameraPluginModel.staticEntities.encodingType = {};
var getEncodingTypeRecord = function (record) {
return CameraPluginModel.module.staticEntities["29470a26-5555-48d5-814d-83e1ced41bb0"][record];
};
Object.defineProperty(CameraPluginModel.staticEntities.encodingType, "jPEG", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getEncodingTypeRecord("56f6882a-1e2c-4563-8165-1b0efc3fa8f1"));
}
});

Object.defineProperty(CameraPluginModel.staticEntities.encodingType, "pNG", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getEncodingTypeRecord("bd70dce6-ee0d-408a-9240-c696d95a1daf"));
}
});

CameraPluginModel.staticEntities.cameraDirection = {};
var getCameraDirectionRecord = function (record) {
return CameraPluginModel.module.staticEntities["9cdc9cce-2573-40f6-a3ac-73db3ecb0fb6"][record];
};
Object.defineProperty(CameraPluginModel.staticEntities.cameraDirection, "backCamera", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCameraDirectionRecord("63ede315-74ee-4d61-893c-fe32e89464e3"));
}
});

Object.defineProperty(CameraPluginModel.staticEntities.cameraDirection, "frontCamera", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getCameraDirectionRecord("f2d1444a-7057-4b80-9ff2-d4f8cb315c37"));
}
});

CameraPluginModel.staticEntities.mediaType = {};
var getMediaTypeRecord = function (record) {
return CameraPluginModel.module.staticEntities["fc0247a4-764c-4667-a60b-4ba2eeba7d30"][record];
};
Object.defineProperty(CameraPluginModel.staticEntities.mediaType, "both", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMediaTypeRecord("65c06e2e-8212-4108-879f-d5207f10aeff"));
}
});

Object.defineProperty(CameraPluginModel.staticEntities.mediaType, "video", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMediaTypeRecord("cc5aeab4-8e2e-4653-9451-ced8427de96f"));
}
});

Object.defineProperty(CameraPluginModel.staticEntities.mediaType, "photo", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getMediaTypeRecord("e2bdaa94-086a-4f03-a411-a3f0f0228412"));
}
});

});
