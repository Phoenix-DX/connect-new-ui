define("LocationPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "LocationPlugin.model", "CommonPlugin.model$ErrorRec", "LocationPlugin.referencesHealth", "LocationPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, LocationPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
LocationPluginModel.ErrorList = ErrorList;

});
define("LocationPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "LocationPlugin.model", "CommonPlugin.model$ErrorRec", "LocationPlugin.referencesHealth", "LocationPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, LocationPluginModel) {
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
LocationPluginModel.ErrorRecord = ErrorRecord;

});
define("LocationPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model", "LocationPlugin.model$ErrorRecord"], function (exports, OutSystems, LocationPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = LocationPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
LocationPluginModel.ErrorRecordList = ErrorRecordList;

});
define("LocationPlugin.model$LocationRec", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model"], function (exports, OutSystems, LocationPluginModel) {
var OS = OutSystems.Internal;
var LocationRec = (function (_super) {
__extends(LocationRec, _super);
function LocationRec(defaults) {
_super.apply(this, arguments);
}
LocationRec.attributesToDeclare = function () {
return [
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Altitude", "altitudeAttr", "Altitude", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Accuracy", "accuracyAttr", "Accuracy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AltitudeAccuracy", "altitudeAccuracyAttr", "AltitudeAccuracy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Heading", "headingAttr", "Heading", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TimeStamp", "timeStampAttr", "TimeStamp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocationRec.init();
return LocationRec;
})(OS.DataTypes.GenericRecord);
LocationPluginModel.LocationRec = LocationRec;

});
define("LocationPlugin.model$LocationRecord", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model", "LocationPlugin.model$LocationRec"], function (exports, OutSystems, LocationPluginModel) {
var OS = OutSystems.Internal;
var LocationRecord = (function (_super) {
__extends(LocationRecord, _super);
function LocationRecord(defaults) {
_super.apply(this, arguments);
}
LocationRecord.attributesToDeclare = function () {
return [
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LocationPluginModel.LocationRec());
}, true, LocationPluginModel.LocationRec)
].concat(_super.attributesToDeclare.call(this));
};
LocationRecord.fromStructure = function (str) {
return new LocationRecord(new LocationRecord.RecordClass({
locationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocationRecord._isAnonymousRecord = true;
LocationRecord.UniqueId = "c6f9e1e6-90ab-57c3-dd10-b83e356e67ed";
LocationRecord.init();
return LocationRecord;
})(OS.DataTypes.GenericRecord);
LocationPluginModel.LocationRecord = LocationRecord;

});
define("LocationPlugin.model$LocationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model", "LocationPlugin.model$LocationRecord"], function (exports, OutSystems, LocationPluginModel) {
var OS = OutSystems.Internal;
var LocationRecordList = (function (_super) {
__extends(LocationRecordList, _super);
function LocationRecordList(defaults) {
_super.apply(this, arguments);
}
LocationRecordList.itemType = LocationPluginModel.LocationRecord;
return LocationRecordList;
})(OS.DataTypes.GenericRecordList);
LocationPluginModel.LocationRecordList = LocationRecordList;

});
define("LocationPlugin.model$LocationList", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model", "LocationPlugin.model$LocationRec"], function (exports, OutSystems, LocationPluginModel) {
var OS = OutSystems.Internal;
var LocationList = (function (_super) {
__extends(LocationList, _super);
function LocationList(defaults) {
_super.apply(this, arguments);
}
LocationList.itemType = LocationPluginModel.LocationRec;
return LocationList;
})(OS.DataTypes.GenericRecordList);
LocationPluginModel.LocationList = LocationList;

});
define("LocationPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LocationPluginModel = exports;
Object.defineProperty(LocationPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["f62ccb55-3517-4b82-bc4f-7ece46a0f19c"];
}
});

LocationPluginModel.staticEntities = {};
});
