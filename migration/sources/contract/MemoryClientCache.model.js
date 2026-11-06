define("MemoryClientCache.model$MemoryCacheTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRec = (function (_super) {
__extends(MemoryCacheTypeRec, _super);
function MemoryCacheTypeRec(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheTypeRec.fromStructure = function (str) {
return new MemoryCacheTypeRec(new MemoryCacheTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheTypeRec.init();
return MemoryCacheTypeRec;
})(OS.DataTypes.GenericRecord);
MemoryClientCacheModel.MemoryCacheTypeRec = MemoryCacheTypeRec;

});
define("MemoryClientCache.model$MemoryCacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$MemoryCacheTypeRec"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecord = (function (_super) {
__extends(MemoryCacheTypeRecord, _super);
function MemoryCacheTypeRecord(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecord.attributesToDeclare = function () {
return [
this.attr("MemoryCacheType", "memoryCacheTypeAttr", "MemoryCacheType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheTypeRec());
}, true, MemoryClientCacheModel.MemoryCacheTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheTypeRecord.fromStructure = function (str) {
return new MemoryCacheTypeRecord(new MemoryCacheTypeRecord.RecordClass({
memoryCacheTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheTypeRecord._isAnonymousRecord = true;
MemoryCacheTypeRecord.UniqueId = "22391bfc-4d63-db02-f78b-506be318c40d";
MemoryCacheTypeRecord.init();
return MemoryCacheTypeRecord;
})(OS.DataTypes.GenericRecord);
MemoryClientCacheModel.MemoryCacheTypeRecord = MemoryCacheTypeRecord;

});
define("MemoryClientCache.model$MemoryCacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$MemoryCacheTypeRecord"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecordList = (function (_super) {
__extends(MemoryCacheTypeRecordList, _super);
function MemoryCacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecordList.itemType = MemoryClientCacheModel.MemoryCacheTypeRecord;
return MemoryCacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
MemoryClientCacheModel.MemoryCacheTypeRecordList = MemoryCacheTypeRecordList;

});
define("MemoryClientCache.model$CacheKeyPartRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.MemoryCacheUtils.model", "MemoryClientCache.model", "Extension.MemoryCacheUtils.model$CacheKeyPartRec", "MemoryClientCache.referencesHealth", "MemoryClientCache.referencesHealth$MemoryCacheUtils"], function (exports, OutSystems, Extension_MemoryCacheUtilsModel, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var CacheKeyPartRecord = (function (_super) {
__extends(CacheKeyPartRecord, _super);
function CacheKeyPartRecord(defaults) {
_super.apply(this, arguments);
}
CacheKeyPartRecord.attributesToDeclare = function () {
return [
this.attr("CacheKeyPart", "cacheKeyPartAttr", "CacheKeyPart", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_MemoryCacheUtilsModel.CacheKeyPartRec());
}, true, Extension_MemoryCacheUtilsModel.CacheKeyPartRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheKeyPartRecord.fromStructure = function (str) {
return new CacheKeyPartRecord(new CacheKeyPartRecord.RecordClass({
cacheKeyPartAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheKeyPartRecord._isAnonymousRecord = true;
CacheKeyPartRecord.UniqueId = "6c719bec-3c3d-91f1-4c4d-07c6d60e3ba5";
CacheKeyPartRecord.init();
return CacheKeyPartRecord;
})(OS.DataTypes.GenericRecord);
MemoryClientCacheModel.CacheKeyPartRecord = CacheKeyPartRecord;

});
define("MemoryClientCache.model$CacheKeyPartRecordList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$CacheKeyPartRecord"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var CacheKeyPartRecordList = (function (_super) {
__extends(CacheKeyPartRecordList, _super);
function CacheKeyPartRecordList(defaults) {
_super.apply(this, arguments);
}
CacheKeyPartRecordList.itemType = MemoryClientCacheModel.CacheKeyPartRecord;
return CacheKeyPartRecordList;
})(OS.DataTypes.GenericRecordList);
MemoryClientCacheModel.CacheKeyPartRecordList = CacheKeyPartRecordList;

});
define("MemoryClientCache.model$MemoryCacheResultRec", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRec = (function (_super) {
__extends(MemoryCacheResultRec, _super);
function MemoryCacheResultRec(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRec.attributesToDeclare = function () {
return [
this.attr("CacheHit", "cacheHitAttr", "CacheHit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Started", "startedAttr", "Started", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Finished", "finishedAttr", "Finished", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Milliseconds", "millisecondsAttr", "Milliseconds", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheResultRec.init();
return MemoryCacheResultRec;
})(OS.DataTypes.GenericRecord);
MemoryClientCacheModel.MemoryCacheResultRec = MemoryCacheResultRec;

});
define("MemoryClientCache.model$MemoryCacheResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecord = (function (_super) {
__extends(MemoryCacheResultRecord, _super);
function MemoryCacheResultRecord(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecord.attributesToDeclare = function () {
return [
this.attr("MemoryCacheResult", "memoryCacheResultAttr", "MemoryCacheResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheResultRec());
}, true, MemoryClientCacheModel.MemoryCacheResultRec)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheResultRecord.fromStructure = function (str) {
return new MemoryCacheResultRecord(new MemoryCacheResultRecord.RecordClass({
memoryCacheResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheResultRecord._isAnonymousRecord = true;
MemoryCacheResultRecord.UniqueId = "9c1b9e17-cba5-5973-e862-979a81a4f983";
MemoryCacheResultRecord.init();
return MemoryCacheResultRecord;
})(OS.DataTypes.GenericRecord);
MemoryClientCacheModel.MemoryCacheResultRecord = MemoryCacheResultRecord;

});
define("MemoryClientCache.model$MemoryCacheResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$MemoryCacheResultRecord"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecordList = (function (_super) {
__extends(MemoryCacheResultRecordList, _super);
function MemoryCacheResultRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecordList.itemType = MemoryClientCacheModel.MemoryCacheResultRecord;
return MemoryCacheResultRecordList;
})(OS.DataTypes.GenericRecordList);
MemoryClientCacheModel.MemoryCacheResultRecordList = MemoryCacheResultRecordList;

});
define("MemoryClientCache.model$CacheKeyPartList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.MemoryCacheUtils.model", "MemoryClientCache.model", "Extension.MemoryCacheUtils.model$CacheKeyPartRec", "MemoryClientCache.referencesHealth", "MemoryClientCache.referencesHealth$MemoryCacheUtils"], function (exports, OutSystems, Extension_MemoryCacheUtilsModel, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var CacheKeyPartList = (function (_super) {
__extends(CacheKeyPartList, _super);
function CacheKeyPartList(defaults) {
_super.apply(this, arguments);
}
CacheKeyPartList.itemType = Extension_MemoryCacheUtilsModel.CacheKeyPartRec;
return CacheKeyPartList;
})(OS.DataTypes.GenericRecordList);
MemoryClientCacheModel.CacheKeyPartList = CacheKeyPartList;

});
define("MemoryClientCache.model$MemoryCacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$MemoryCacheTypeRec"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeList = (function (_super) {
__extends(MemoryCacheTypeList, _super);
function MemoryCacheTypeList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeList.itemType = MemoryClientCacheModel.MemoryCacheTypeRec;
return MemoryCacheTypeList;
})(OS.DataTypes.GenericRecordList);
MemoryClientCacheModel.MemoryCacheTypeList = MemoryCacheTypeList;

});
define("MemoryClientCache.model$MemoryCacheResultList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "MemoryClientCache.model$MemoryCacheResultRec"], function (exports, OutSystems, MemoryClientCacheModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultList = (function (_super) {
__extends(MemoryCacheResultList, _super);
function MemoryCacheResultList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultList.itemType = MemoryClientCacheModel.MemoryCacheResultRec;
return MemoryCacheResultList;
})(OS.DataTypes.GenericRecordList);
MemoryClientCacheModel.MemoryCacheResultList = MemoryCacheResultList;

});
define("MemoryClientCache.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var MemoryClientCacheModel = exports;
Object.defineProperty(MemoryClientCacheModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["b7049202-6510-41f3-8209-f2425737f568"];
}
});

MemoryClientCacheModel.staticEntities = {};
MemoryClientCacheModel.staticEntities.memoryCacheType = {};
var getMemoryCacheTypeRecord = function (record) {
return MemoryClientCacheModel.module.staticEntities["167f45ab-d8e4-4848-97f6-852b13f63785"][record];
};
});
