define("TouchIdPlugin.model$BiometricTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var BiometricTypeRec = (function (_super) {
__extends(BiometricTypeRec, _super);
function BiometricTypeRec(defaults) {
_super.apply(this, arguments);
}
BiometricTypeRec.attributesToDeclare = function () {
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
BiometricTypeRec.init();
return BiometricTypeRec;
})(OS.DataTypes.GenericRecord);
TouchIdPluginModel.BiometricTypeRec = BiometricTypeRec;

});
define("TouchIdPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "TouchIdPlugin.model", "CommonPlugin.model$ErrorRec", "TouchIdPlugin.referencesHealth", "TouchIdPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
TouchIdPluginModel.ErrorList = ErrorList;

});
define("TouchIdPlugin.model$TouchOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var TouchOptionsRec = (function (_super) {
__extends(TouchOptionsRec, _super);
function TouchOptionsRec(defaults) {
_super.apply(this, arguments);
}
TouchOptionsRec.attributesToDeclare = function () {
return [
this.attr("clientId", "clientIdAttr", "clientId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("disableBackup", "disableBackupAttr", "disableBackup", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("maxAttempts", "maxAttemptsAttr", "maxAttempts", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 5;
}, true), 
this.attr("locale", "localeAttr", "locale", false, false, OS.DataTypes.DataTypes.Text, function () {
return "en_US";
}, true), 
this.attr("userAuthRequired", "userAuthRequiredAttr", "userAuthRequired", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("description", "descriptionAttr", "description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subtitle", "subtitleAttr", "subtitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("cancelButtonTitle", "cancelButtonTitleAttr", "cancelButtonTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TouchOptionsRec.init();
return TouchOptionsRec;
})(OS.DataTypes.GenericRecord);
TouchIdPluginModel.TouchOptionsRec = TouchOptionsRec;

});
define("TouchIdPlugin.model$TouchOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$TouchOptionsRec"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var TouchOptionsRecord = (function (_super) {
__extends(TouchOptionsRecord, _super);
function TouchOptionsRecord(defaults) {
_super.apply(this, arguments);
}
TouchOptionsRecord.attributesToDeclare = function () {
return [
this.attr("TouchOptions", "touchOptionsAttr", "TouchOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TouchIdPluginModel.TouchOptionsRec());
}, true, TouchIdPluginModel.TouchOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TouchOptionsRecord.fromStructure = function (str) {
return new TouchOptionsRecord(new TouchOptionsRecord.RecordClass({
touchOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TouchOptionsRecord._isAnonymousRecord = true;
TouchOptionsRecord.UniqueId = "9d13e17b-36f8-87fc-3a83-6e0438f96f61";
TouchOptionsRecord.init();
return TouchOptionsRecord;
})(OS.DataTypes.GenericRecord);
TouchIdPluginModel.TouchOptionsRecord = TouchOptionsRecord;

});
define("TouchIdPlugin.model$TouchOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$TouchOptionsRecord"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var TouchOptionsRecordList = (function (_super) {
__extends(TouchOptionsRecordList, _super);
function TouchOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
TouchOptionsRecordList.itemType = TouchIdPluginModel.TouchOptionsRecord;
return TouchOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
TouchIdPluginModel.TouchOptionsRecordList = TouchOptionsRecordList;

});
define("TouchIdPlugin.model$BiometricTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$BiometricTypeRec"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var BiometricTypeRecord = (function (_super) {
__extends(BiometricTypeRecord, _super);
function BiometricTypeRecord(defaults) {
_super.apply(this, arguments);
}
BiometricTypeRecord.attributesToDeclare = function () {
return [
this.attr("BiometricType", "biometricTypeAttr", "BiometricType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TouchIdPluginModel.BiometricTypeRec());
}, true, TouchIdPluginModel.BiometricTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
BiometricTypeRecord.fromStructure = function (str) {
return new BiometricTypeRecord(new BiometricTypeRecord.RecordClass({
biometricTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BiometricTypeRecord._isAnonymousRecord = true;
BiometricTypeRecord.UniqueId = "3b6afe62-f50a-746d-2a0b-d591c33f48f6";
BiometricTypeRecord.init();
return BiometricTypeRecord;
})(OS.DataTypes.GenericRecord);
TouchIdPluginModel.BiometricTypeRecord = BiometricTypeRecord;

});
define("TouchIdPlugin.model$TouchOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$TouchOptionsRec"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var TouchOptionsList = (function (_super) {
__extends(TouchOptionsList, _super);
function TouchOptionsList(defaults) {
_super.apply(this, arguments);
}
TouchOptionsList.itemType = TouchIdPluginModel.TouchOptionsRec;
return TouchOptionsList;
})(OS.DataTypes.GenericRecordList);
TouchIdPluginModel.TouchOptionsList = TouchOptionsList;

});
define("TouchIdPlugin.model$BiometricTypeList", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$BiometricTypeRec"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var BiometricTypeList = (function (_super) {
__extends(BiometricTypeList, _super);
function BiometricTypeList(defaults) {
_super.apply(this, arguments);
}
BiometricTypeList.itemType = TouchIdPluginModel.BiometricTypeRec;
return BiometricTypeList;
})(OS.DataTypes.GenericRecordList);
TouchIdPluginModel.BiometricTypeList = BiometricTypeList;

});
define("TouchIdPlugin.model$BiometricTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$BiometricTypeRecord"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var BiometricTypeRecordList = (function (_super) {
__extends(BiometricTypeRecordList, _super);
function BiometricTypeRecordList(defaults) {
_super.apply(this, arguments);
}
BiometricTypeRecordList.itemType = TouchIdPluginModel.BiometricTypeRecord;
return BiometricTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TouchIdPluginModel.BiometricTypeRecordList = BiometricTypeRecordList;

});
define("TouchIdPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "TouchIdPlugin.model", "CommonPlugin.model$ErrorRec", "TouchIdPlugin.referencesHealth", "TouchIdPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, TouchIdPluginModel) {
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
TouchIdPluginModel.ErrorRecord = ErrorRecord;

});
define("TouchIdPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TouchIdPlugin.model", "TouchIdPlugin.model$ErrorRecord"], function (exports, OutSystems, TouchIdPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = TouchIdPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
TouchIdPluginModel.ErrorRecordList = ErrorRecordList;

});
define("TouchIdPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var TouchIdPluginModel = exports;
Object.defineProperty(TouchIdPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["93839ef8-5370-4753-85bc-c914b1d30715"];
}
});

TouchIdPluginModel.staticEntities = {};
TouchIdPluginModel.staticEntities.biometricType = {};
var getBiometricTypeRecord = function (record) {
return TouchIdPluginModel.module.staticEntities["f82ec23f-6361-40ee-ac71-79592d7efae3"][record];
};
Object.defineProperty(TouchIdPluginModel.staticEntities.biometricType, "fingerprint", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBiometricTypeRecord("4534b74b-9ef3-4cd2-b059-1fc87b8344a9"));
}
});

Object.defineProperty(TouchIdPluginModel.staticEntities.biometricType, "biometric", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBiometricTypeRecord("847899b8-2e0d-418c-babd-8d329c7c181c"));
}
});

Object.defineProperty(TouchIdPluginModel.staticEntities.biometricType, "faceId", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBiometricTypeRecord("c50ec269-59fa-4022-83df-5899e28d6b40"));
}
});

Object.defineProperty(TouchIdPluginModel.staticEntities.biometricType, "none", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBiometricTypeRecord("cb755f3d-c146-4a66-8910-57d1f7b25a32"));
}
});

});
