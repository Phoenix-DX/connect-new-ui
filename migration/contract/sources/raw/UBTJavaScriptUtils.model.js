define("UBTJavaScriptUtils.model$UBT_MessageTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRec = (function (_super) {
__extends(UBT_MessageTypeRec, _super);
function UBT_MessageTypeRec(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_MessageTypeRec.init();
return UBT_MessageTypeRec;
})(OS.DataTypes.GenericRecord);
UBTJavaScriptUtilsModel.UBT_MessageTypeRec = UBT_MessageTypeRec;

});
define("UBTJavaScriptUtils.model$UBT_MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecord = (function (_super) {
__extends(UBT_MessageTypeRecord, _super);
function UBT_MessageTypeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_MessageType", "uBT_MessageTypeAttr", "UBT_MessageType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTJavaScriptUtilsModel.UBT_MessageTypeRec());
}, true, UBTJavaScriptUtilsModel.UBT_MessageTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_MessageTypeRecord.fromStructure = function (str) {
return new UBT_MessageTypeRecord(new UBT_MessageTypeRecord.RecordClass({
uBT_MessageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_MessageTypeRecord._isAnonymousRecord = true;
UBT_MessageTypeRecord.UniqueId = "39fb871d-a8eb-6e00-0e38-5ca7658159dc";
UBT_MessageTypeRecord.init();
return UBT_MessageTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTJavaScriptUtilsModel.UBT_MessageTypeRecord = UBT_MessageTypeRecord;

});
define("UBTJavaScriptUtils.model$UBT_SystemExceptionTypesRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_SystemExceptionTypesRec = (function (_super) {
__extends(UBT_SystemExceptionTypesRec, _super);
function UBT_SystemExceptionTypesRec(defaults) {
_super.apply(this, arguments);
}
UBT_SystemExceptionTypesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_SystemExceptionTypesRec.fromStructure = function (str) {
return new UBT_SystemExceptionTypesRec(new UBT_SystemExceptionTypesRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_SystemExceptionTypesRec.init();
return UBT_SystemExceptionTypesRec;
})(OS.DataTypes.GenericRecord);
UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRec = UBT_SystemExceptionTypesRec;

});
define("UBTJavaScriptUtils.model$UBT_SystemExceptionTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.model$UBT_SystemExceptionTypesRec"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_SystemExceptionTypesRecord = (function (_super) {
__extends(UBT_SystemExceptionTypesRecord, _super);
function UBT_SystemExceptionTypesRecord(defaults) {
_super.apply(this, arguments);
}
UBT_SystemExceptionTypesRecord.attributesToDeclare = function () {
return [
this.attr("UBT_SystemExceptionTypes", "uBT_SystemExceptionTypesAttr", "UBT_SystemExceptionTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRec());
}, true, UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_SystemExceptionTypesRecord.fromStructure = function (str) {
return new UBT_SystemExceptionTypesRecord(new UBT_SystemExceptionTypesRecord.RecordClass({
uBT_SystemExceptionTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_SystemExceptionTypesRecord._isAnonymousRecord = true;
UBT_SystemExceptionTypesRecord.UniqueId = "3dc01646-39c0-3523-b215-5c8021a461f9";
UBT_SystemExceptionTypesRecord.init();
return UBT_SystemExceptionTypesRecord;
})(OS.DataTypes.GenericRecord);
UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRecord = UBT_SystemExceptionTypesRecord;

});
define("UBTJavaScriptUtils.model$UBT_MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRecord"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecordList = (function (_super) {
__extends(UBT_MessageTypeRecordList, _super);
function UBT_MessageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecordList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRecord;
return UBT_MessageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTJavaScriptUtilsModel.UBT_MessageTypeRecordList = UBT_MessageTypeRecordList;

});
define("UBTJavaScriptUtils.model$UBT_SystemExceptionTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.model$UBT_SystemExceptionTypesRecord"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_SystemExceptionTypesRecordList = (function (_super) {
__extends(UBT_SystemExceptionTypesRecordList, _super);
function UBT_SystemExceptionTypesRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_SystemExceptionTypesRecordList.itemType = UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRecord;
return UBT_SystemExceptionTypesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRecordList = UBT_SystemExceptionTypesRecordList;

});
define("UBTJavaScriptUtils.model$UBT_SystemExceptionTypesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.model$UBT_SystemExceptionTypesRec"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_SystemExceptionTypesList = (function (_super) {
__extends(UBT_SystemExceptionTypesList, _super);
function UBT_SystemExceptionTypesList(defaults) {
_super.apply(this, arguments);
}
UBT_SystemExceptionTypesList.itemType = UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesRec;
return UBT_SystemExceptionTypesList;
})(OS.DataTypes.GenericRecordList);
UBTJavaScriptUtilsModel.UBT_SystemExceptionTypesList = UBT_SystemExceptionTypesList;

});
define("UBTJavaScriptUtils.model$UBT_MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec"], function (exports, OutSystems, UBTJavaScriptUtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeList = (function (_super) {
__extends(UBT_MessageTypeList, _super);
function UBT_MessageTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRec;
return UBT_MessageTypeList;
})(OS.DataTypes.GenericRecordList);
UBTJavaScriptUtilsModel.UBT_MessageTypeList = UBT_MessageTypeList;

});
define("UBTJavaScriptUtils.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBTJavaScriptUtilsModel = exports;
Object.defineProperty(UBTJavaScriptUtilsModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["2c2986c3-daaf-4dc5-a0c6-d9a75a42125d"];
}
});

UBTJavaScriptUtilsModel.staticEntities = {};
UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType = {};
var getUBT_MessageTypeRecord = function (record) {
return UBTJavaScriptUtilsModel.module.staticEntities["5a451e53-0d4f-4a13-8dcd-d2c12db5eb4f"][record];
};
Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType, "error", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("11de012f-8214-4480-bc41-e674f8463a2a"));
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType, "success", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("232e2df8-4514-48c8-bd5d-136ff9bc8cf0"));
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType, "info", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("b69f4bc5-4211-4808-ae64-b62df5426873"));
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType, "warning", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("d02ae75c-15a9-4617-abb2-814d976949d2"));
}
});

UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes = {};
var getUBT_SystemExceptionTypesRecord = function (record) {
return UBTJavaScriptUtilsModel.module.staticEntities["e3283720-2ffa-44d3-9d56-c017b38dbbda"][record];
};
Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "outOfContextException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("01903f04-bf31-4221-8168-a76d7177e61d");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "numberOverflowException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("0c2c01b8-8a42-4f7d-8f81-8091ec2b1006");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "communicationException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("15f18fbb-cc1a-4b9e-ab81-df4a3fcd72ee");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "incompatibleProducerException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("20151e87-5eaf-4586-a8e0-539894a7fa16");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "serverException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("2a21dd45-a953-4244-a381-484ab948950b");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "applicationBackendUnavailableException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("2b3d379d-49db-4628-801d-baaf581534a4");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "systemException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("50990b44-42ec-4b52-9dc2-62c603bb6bfa");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "viewHasChangedException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("52a4b005-3383-4413-8a07-7abbe05f8df5");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "openDatabaseException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("5ade099a-e063-45a2-978b-e6c1b751f1fb");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "licensingException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("613ffb59-dfdb-413b-95a1-21000386c968");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "notRegisteredException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("632163c7-d9c0-40f9-b238-5e82e1833ea1");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "abortActivityChangeException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("722f3abd-ef21-4740-b040-34616c80e3a3");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "userException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("7f553bf7-c82a-4db2-b2bc-d6cd1d810d9b");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "invalidLoginException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("817cb3fe-6286-42fe-b9df-3545d7e57521");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "securityException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("8dd57171-2c7d-49d8-90e4-e00bc3284345");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "unhandledOrIgnoredErrorInEventException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("95c16178-4386-4c4b-83b2-297176fabe3a");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "dataBaseException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("b666b504-5161-44bb-bd48-ed2e011671c4");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "outOfOrderException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("bc1e1c8c-6e7d-4089-8018-9f99d6508b99");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "exception", {
get: function () {
return getUBT_SystemExceptionTypesRecord("c9536b05-8511-4007-a27e-58e64fe14c37");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "ignorableSystemException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("d46b04d3-be22-4370-8f6c-f71cf27d832c");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "redirectOccurredException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("d702a2d5-9c90-444e-aab3-9ef02865f33f");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "controllerDisposedException", {
get: function () {
return getUBT_SystemExceptionTypesRecord("d9a03bb3-fb91-4d21-aa5c-f41fb0caf330");
}
});

Object.defineProperty(UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes, "invalidJavascriptType", {
get: function () {
return getUBT_SystemExceptionTypesRecord("e59877ec-a2e0-4453-9e5b-6f7af461913c");
}
});

});
