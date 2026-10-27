define("PlaceholderLib.model$PlaceholderRec", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderRec = (function (_super) {
__extends(PlaceholderRec, _super);
function PlaceholderRec(defaults) {
_super.apply(this, arguments);
}
PlaceholderRec.attributesToDeclare = function () {
return [
this.attr("PlaceholderFunctionId", "placeholderFunctionIdAttr", "PlaceholderFunctionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Parameters", "parametersAttr", "Parameters", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderRec.init();
return PlaceholderRec;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.PlaceholderRec = PlaceholderRec;

});
define("PlaceholderLib.model$PlaceholderRecord", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderRec"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderRecord = (function (_super) {
__extends(PlaceholderRecord, _super);
function PlaceholderRecord(defaults) {
_super.apply(this, arguments);
}
PlaceholderRecord.attributesToDeclare = function () {
return [
this.attr("Placeholder", "placeholderAttr", "Placeholder", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PlaceholderLibModel.PlaceholderRec());
}, true, PlaceholderLibModel.PlaceholderRec)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderRecord.fromStructure = function (str) {
return new PlaceholderRecord(new PlaceholderRecord.RecordClass({
placeholderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlaceholderRecord._isAnonymousRecord = true;
PlaceholderRecord.UniqueId = "06a3d8b1-9c5f-6a18-0271-fce7660a7f40";
PlaceholderRecord.init();
return PlaceholderRecord;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.PlaceholderRecord = PlaceholderRecord;

});
define("PlaceholderLib.model$PlaceholderFunctionRec", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderFunctionRec = (function (_super) {
__extends(PlaceholderFunctionRec, _super);
function PlaceholderFunctionRec(defaults) {
_super.apply(this, arguments);
}
PlaceholderFunctionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NumberOfParameters", "numberOfParametersAttr", "NumberOfParameters", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderFunctionRec.init();
return PlaceholderFunctionRec;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.PlaceholderFunctionRec = PlaceholderFunctionRec;

});
define("PlaceholderLib.model$PlaceholderFunctionRecord", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderFunctionRec"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderFunctionRecord = (function (_super) {
__extends(PlaceholderFunctionRecord, _super);
function PlaceholderFunctionRecord(defaults) {
_super.apply(this, arguments);
}
PlaceholderFunctionRecord.attributesToDeclare = function () {
return [
this.attr("PlaceholderFunction", "placeholderFunctionAttr", "PlaceholderFunction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PlaceholderLibModel.PlaceholderFunctionRec());
}, true, PlaceholderLibModel.PlaceholderFunctionRec)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderFunctionRecord.fromStructure = function (str) {
return new PlaceholderFunctionRecord(new PlaceholderFunctionRecord.RecordClass({
placeholderFunctionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlaceholderFunctionRecord._isAnonymousRecord = true;
PlaceholderFunctionRecord.UniqueId = "15d3647b-2186-6618-cf90-91235171a856";
PlaceholderFunctionRecord.init();
return PlaceholderFunctionRecord;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.PlaceholderFunctionRecord = PlaceholderFunctionRecord;

});
define("PlaceholderLib.model$TextIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var TextIntegerIntegerRecord = (function (_super) {
__extends(TextIntegerIntegerRecord, _super);
function TextIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Index", "indexAttr", "Index", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Length", "lengthAttr", "Length", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextIntegerIntegerRecord._isAnonymousRecord = true;
TextIntegerIntegerRecord.UniqueId = "2e29fd90-bc5a-0b2c-452b-9b47658a3605";
TextIntegerIntegerRecord.init();
return TextIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.TextIntegerIntegerRecord = TextIntegerIntegerRecord;

});
define("PlaceholderLib.model$TextIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$TextIntegerIntegerRecord"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var TextIntegerIntegerRecordList = (function (_super) {
__extends(TextIntegerIntegerRecordList, _super);
function TextIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextIntegerIntegerRecordList.itemType = PlaceholderLibModel.TextIntegerIntegerRecord;
return TextIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.TextIntegerIntegerRecordList = TextIntegerIntegerRecordList;

});
define("PlaceholderLib.model$PlaceholderFunctionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderFunctionRecord"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderFunctionRecordList = (function (_super) {
__extends(PlaceholderFunctionRecordList, _super);
function PlaceholderFunctionRecordList(defaults) {
_super.apply(this, arguments);
}
PlaceholderFunctionRecordList.itemType = PlaceholderLibModel.PlaceholderFunctionRecord;
return PlaceholderFunctionRecordList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.PlaceholderFunctionRecordList = PlaceholderFunctionRecordList;

});
define("PlaceholderLib.model$PlaceholderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderRecord"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderRecordList = (function (_super) {
__extends(PlaceholderRecordList, _super);
function PlaceholderRecordList(defaults) {
_super.apply(this, arguments);
}
PlaceholderRecordList.itemType = PlaceholderLibModel.PlaceholderRecord;
return PlaceholderRecordList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.PlaceholderRecordList = PlaceholderRecordList;

});
define("PlaceholderLib.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "PlaceholderLib.model", "ServiceCenter.model$UserRec", "PlaceholderLib.referencesHealth", "PlaceholderLib.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, PlaceholderLibModel) {
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
PlaceholderLibModel.UserRecord = UserRecord;

});
define("PlaceholderLib.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$UserRecord"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = PlaceholderLibModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.UserRecordList = UserRecordList;

});
define("PlaceholderLib.model$PlaceholderParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderParametersRec = (function (_super) {
__extends(PlaceholderParametersRec, _super);
function PlaceholderParametersRec(defaults) {
_super.apply(this, arguments);
}
PlaceholderParametersRec.attributesToDeclare = function () {
return [
this.attr("Parameter1", "parameter1Attr", "Parameter1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Parameter2", "parameter2Attr", "Parameter2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderParametersRec.init();
return PlaceholderParametersRec;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.PlaceholderParametersRec = PlaceholderParametersRec;

});
define("PlaceholderLib.model$PlaceholderFunctionList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderFunctionRec"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderFunctionList = (function (_super) {
__extends(PlaceholderFunctionList, _super);
function PlaceholderFunctionList(defaults) {
_super.apply(this, arguments);
}
PlaceholderFunctionList.itemType = PlaceholderLibModel.PlaceholderFunctionRec;
return PlaceholderFunctionList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.PlaceholderFunctionList = PlaceholderFunctionList;

});
define("PlaceholderLib.model$PlaceholderParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderParametersRec"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderParametersRecord = (function (_super) {
__extends(PlaceholderParametersRecord, _super);
function PlaceholderParametersRecord(defaults) {
_super.apply(this, arguments);
}
PlaceholderParametersRecord.attributesToDeclare = function () {
return [
this.attr("PlaceholderParameters", "placeholderParametersAttr", "PlaceholderParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new PlaceholderLibModel.PlaceholderParametersRec());
}, true, PlaceholderLibModel.PlaceholderParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
PlaceholderParametersRecord.fromStructure = function (str) {
return new PlaceholderParametersRecord(new PlaceholderParametersRecord.RecordClass({
placeholderParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlaceholderParametersRecord._isAnonymousRecord = true;
PlaceholderParametersRecord.UniqueId = "c1ced256-3322-7ccd-cfea-5bb8b140bbd1";
PlaceholderParametersRecord.init();
return PlaceholderParametersRecord;
})(OS.DataTypes.GenericRecord);
PlaceholderLibModel.PlaceholderParametersRecord = PlaceholderParametersRecord;

});
define("PlaceholderLib.model$PlaceholderParametersList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderParametersRec"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderParametersList = (function (_super) {
__extends(PlaceholderParametersList, _super);
function PlaceholderParametersList(defaults) {
_super.apply(this, arguments);
}
PlaceholderParametersList.itemType = PlaceholderLibModel.PlaceholderParametersRec;
return PlaceholderParametersList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.PlaceholderParametersList = PlaceholderParametersList;

});
define("PlaceholderLib.model$PlaceholderParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderParametersRecord"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderParametersRecordList = (function (_super) {
__extends(PlaceholderParametersRecordList, _super);
function PlaceholderParametersRecordList(defaults) {
_super.apply(this, arguments);
}
PlaceholderParametersRecordList.itemType = PlaceholderLibModel.PlaceholderParametersRecord;
return PlaceholderParametersRecordList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.PlaceholderParametersRecordList = PlaceholderParametersRecordList;

});
define("PlaceholderLib.model$PlaceholderList", ["exports", "OutSystems/ClientRuntime/Main", "PlaceholderLib.model", "PlaceholderLib.model$PlaceholderRec"], function (exports, OutSystems, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var PlaceholderList = (function (_super) {
__extends(PlaceholderList, _super);
function PlaceholderList(defaults) {
_super.apply(this, arguments);
}
PlaceholderList.itemType = PlaceholderLibModel.PlaceholderRec;
return PlaceholderList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.PlaceholderList = PlaceholderList;

});
define("PlaceholderLib.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "PlaceholderLib.model", "ServiceCenter.model$UserRec", "PlaceholderLib.referencesHealth", "PlaceholderLib.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, PlaceholderLibModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
PlaceholderLibModel.UserList = UserList;

});
define("PlaceholderLib.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var PlaceholderLibModel = exports;
Object.defineProperty(PlaceholderLibModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["3f134ce7-4486-4727-864f-00f6c4d5d61d"];
}
});

PlaceholderLibModel.staticEntities = {};
PlaceholderLibModel.staticEntities.placeholderFunction = {};
var getPlaceholderFunctionRecord = function (record) {
return PlaceholderLibModel.module.staticEntities["fcecf404-2d85-4232-90c8-a98ed3ba6e04"][record];
};
Object.defineProperty(PlaceholderLibModel.staticEntities.placeholderFunction, "firstName", {
get: function () {
return getPlaceholderFunctionRecord("33bb0529-52ee-465c-8e2f-553c557d1178");
}
});

Object.defineProperty(PlaceholderLibModel.staticEntities.placeholderFunction, "localDateTime", {
get: function () {
return getPlaceholderFunctionRecord("d206a6f1-bdf1-47ec-a0d0-4d545bb87233");
}
});

});
