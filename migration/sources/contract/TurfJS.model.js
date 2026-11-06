define("TurfJS.model$", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var DecimalList = (function (_super) {
__extends(DecimalList, _super);
function DecimalList(defaults) {
_super.apply(this, arguments);
}
DecimalList.itemType = OS.DataTypes.DataTypes.Decimal;
return DecimalList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.DecimalList = DecimalList;

});
define("TurfJS.model$CoordinateItem3Rec", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem3Rec = (function (_super) {
__extends(CoordinateItem3Rec, _super);
function CoordinateItem3Rec(defaults) {
_super.apply(this, arguments);
}
CoordinateItem3Rec.attributesToDeclare = function () {
return [
this.attr("CoordinateItem", "coordinateItemAttr", "__singleArrayAttribute", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList)
].concat(_super.attributesToDeclare.call(this));
};
CoordinateItem3Rec.fromStructure = function (str) {
return new CoordinateItem3Rec(new CoordinateItem3Rec.RecordClass({
coordinateItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinateItem3Rec.init();
return CoordinateItem3Rec;
})(OS.DataTypes.GenericRecord);
TurfJSModel.CoordinateItem3Rec = CoordinateItem3Rec;

});
define("TurfJS.model$CoordinateItem3Record", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem3Rec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem3Record = (function (_super) {
__extends(CoordinateItem3Record, _super);
function CoordinateItem3Record(defaults) {
_super.apply(this, arguments);
}
CoordinateItem3Record.attributesToDeclare = function () {
return [
this.attr("CoordinateItem3", "coordinateItem3Attr", "CoordinateItem3", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.CoordinateItem3Rec());
}, true, TurfJSModel.CoordinateItem3Rec)
].concat(_super.attributesToDeclare.call(this));
};
CoordinateItem3Record.fromStructure = function (str) {
return new CoordinateItem3Record(new CoordinateItem3Record.RecordClass({
coordinateItem3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinateItem3Record._isAnonymousRecord = true;
CoordinateItem3Record.UniqueId = "06f77b9b-97c5-7760-a31d-4eb654ce1dc9";
CoordinateItem3Record.init();
return CoordinateItem3Record;
})(OS.DataTypes.GenericRecord);
TurfJSModel.CoordinateItem3Record = CoordinateItem3Record;

});
define("TurfJS.model$LatLongRec", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var LatLongRec = (function (_super) {
__extends(LatLongRec, _super);
function LatLongRec(defaults) {
_super.apply(this, arguments);
}
LatLongRec.attributesToDeclare = function () {
return [
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LatLongRec.init();
return LatLongRec;
})(OS.DataTypes.GenericRecord);
TurfJSModel.LatLongRec = LatLongRec;

});
define("TurfJS.model$LatLongList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$LatLongRec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var LatLongList = (function (_super) {
__extends(LatLongList, _super);
function LatLongList(defaults) {
_super.apply(this, arguments);
}
LatLongList.itemType = TurfJSModel.LatLongRec;
return LatLongList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.LatLongList = LatLongList;

});
define("TurfJS.model$CoordinateItem3List", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem3Rec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem3List = (function (_super) {
__extends(CoordinateItem3List, _super);
function CoordinateItem3List(defaults) {
_super.apply(this, arguments);
}
CoordinateItem3List.itemType = TurfJSModel.CoordinateItem3Rec;
return CoordinateItem3List;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.CoordinateItem3List = CoordinateItem3List;

});
define("TurfJS.model$CoordinateItem2Rec", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem3List"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem2Rec = (function (_super) {
__extends(CoordinateItem2Rec, _super);
function CoordinateItem2Rec(defaults) {
_super.apply(this, arguments);
}
CoordinateItem2Rec.attributesToDeclare = function () {
return [
this.attr("CoordinateItem", "coordinateItemAttr", "__singleArrayAttribute", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.CoordinateItem3List());
}, true, TurfJSModel.CoordinateItem3List)
].concat(_super.attributesToDeclare.call(this));
};
CoordinateItem2Rec.fromStructure = function (str) {
return new CoordinateItem2Rec(new CoordinateItem2Rec.RecordClass({
coordinateItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinateItem2Rec.init();
return CoordinateItem2Rec;
})(OS.DataTypes.GenericRecord);
TurfJSModel.CoordinateItem2Rec = CoordinateItem2Rec;

});
define("TurfJS.model$CoordinateItem2Record", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem2Rec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem2Record = (function (_super) {
__extends(CoordinateItem2Record, _super);
function CoordinateItem2Record(defaults) {
_super.apply(this, arguments);
}
CoordinateItem2Record.attributesToDeclare = function () {
return [
this.attr("CoordinateItem2", "coordinateItem2Attr", "CoordinateItem2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.CoordinateItem2Rec());
}, true, TurfJSModel.CoordinateItem2Rec)
].concat(_super.attributesToDeclare.call(this));
};
CoordinateItem2Record.fromStructure = function (str) {
return new CoordinateItem2Record(new CoordinateItem2Record.RecordClass({
coordinateItem2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinateItem2Record._isAnonymousRecord = true;
CoordinateItem2Record.UniqueId = "1b2127b3-8b43-0502-c3c7-3483633d4814";
CoordinateItem2Record.init();
return CoordinateItem2Record;
})(OS.DataTypes.GenericRecord);
TurfJSModel.CoordinateItem2Record = CoordinateItem2Record;

});
define("TurfJS.model$CoordinateItem2List", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem2Rec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem2List = (function (_super) {
__extends(CoordinateItem2List, _super);
function CoordinateItem2List(defaults) {
_super.apply(this, arguments);
}
CoordinateItem2List.itemType = TurfJSModel.CoordinateItem2Rec;
return CoordinateItem2List;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.CoordinateItem2List = CoordinateItem2List;

});
define("TurfJS.model$CoordinateItemRec", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem2List"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItemRec = (function (_super) {
__extends(CoordinateItemRec, _super);
function CoordinateItemRec(defaults) {
_super.apply(this, arguments);
}
CoordinateItemRec.attributesToDeclare = function () {
return [
this.attr("CoordinateItem", "coordinateItemAttr", "__singleArrayAttribute", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.CoordinateItem2List());
}, true, TurfJSModel.CoordinateItem2List)
].concat(_super.attributesToDeclare.call(this));
};
CoordinateItemRec.fromStructure = function (str) {
return new CoordinateItemRec(new CoordinateItemRec.RecordClass({
coordinateItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinateItemRec.init();
return CoordinateItemRec;
})(OS.DataTypes.GenericRecord);
TurfJSModel.CoordinateItemRec = CoordinateItemRec;

});
define("TurfJS.model$CoordinateItemList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItemRec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItemList = (function (_super) {
__extends(CoordinateItemList, _super);
function CoordinateItemList(defaults) {
_super.apply(this, arguments);
}
CoordinateItemList.itemType = TurfJSModel.CoordinateItemRec;
return CoordinateItemList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.CoordinateItemList = CoordinateItemList;

});
define("TurfJS.model$MultiPolygonRec", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItemList"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var MultiPolygonRec = (function (_super) {
__extends(MultiPolygonRec, _super);
function MultiPolygonRec(defaults) {
_super.apply(this, arguments);
}
MultiPolygonRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Coordinates", "coordinatesAttr", "coordinates", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.CoordinateItemList());
}, true, TurfJSModel.CoordinateItemList)
].concat(_super.attributesToDeclare.call(this));
};
MultiPolygonRec.init();
return MultiPolygonRec;
})(OS.DataTypes.GenericRecord);
TurfJSModel.MultiPolygonRec = MultiPolygonRec;

});
define("TurfJS.model$LatLongRecord", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$LatLongRec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var LatLongRecord = (function (_super) {
__extends(LatLongRecord, _super);
function LatLongRecord(defaults) {
_super.apply(this, arguments);
}
LatLongRecord.attributesToDeclare = function () {
return [
this.attr("LatLong", "latLongAttr", "LatLong", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.LatLongRec());
}, true, TurfJSModel.LatLongRec)
].concat(_super.attributesToDeclare.call(this));
};
LatLongRecord.fromStructure = function (str) {
return new LatLongRecord(new LatLongRecord.RecordClass({
latLongAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LatLongRecord._isAnonymousRecord = true;
LatLongRecord.UniqueId = "590c54e8-a972-ec3f-704d-d3927f30b50e";
LatLongRecord.init();
return LatLongRecord;
})(OS.DataTypes.GenericRecord);
TurfJSModel.LatLongRecord = LatLongRecord;

});
define("TurfJS.model$CoordinateItem3RecordList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem3Record"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem3RecordList = (function (_super) {
__extends(CoordinateItem3RecordList, _super);
function CoordinateItem3RecordList(defaults) {
_super.apply(this, arguments);
}
CoordinateItem3RecordList.itemType = TurfJSModel.CoordinateItem3Record;
return CoordinateItem3RecordList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.CoordinateItem3RecordList = CoordinateItem3RecordList;

});
define("TurfJS.model$MultiPolygonList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$MultiPolygonRec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var MultiPolygonList = (function (_super) {
__extends(MultiPolygonList, _super);
function MultiPolygonList(defaults) {
_super.apply(this, arguments);
}
MultiPolygonList.itemType = TurfJSModel.MultiPolygonRec;
return MultiPolygonList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.MultiPolygonList = MultiPolygonList;

});
define("TurfJS.model$CoordinateItem2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItem2Record"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItem2RecordList = (function (_super) {
__extends(CoordinateItem2RecordList, _super);
function CoordinateItem2RecordList(defaults) {
_super.apply(this, arguments);
}
CoordinateItem2RecordList.itemType = TurfJSModel.CoordinateItem2Record;
return CoordinateItem2RecordList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.CoordinateItem2RecordList = CoordinateItem2RecordList;

});
define("TurfJS.model$MultiPolygonRecord", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$MultiPolygonRec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var MultiPolygonRecord = (function (_super) {
__extends(MultiPolygonRecord, _super);
function MultiPolygonRecord(defaults) {
_super.apply(this, arguments);
}
MultiPolygonRecord.attributesToDeclare = function () {
return [
this.attr("MultiPolygon", "multiPolygonAttr", "MultiPolygon", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.MultiPolygonRec());
}, true, TurfJSModel.MultiPolygonRec)
].concat(_super.attributesToDeclare.call(this));
};
MultiPolygonRecord.fromStructure = function (str) {
return new MultiPolygonRecord(new MultiPolygonRecord.RecordClass({
multiPolygonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MultiPolygonRecord._isAnonymousRecord = true;
MultiPolygonRecord.UniqueId = "7217f627-500e-e44d-9f9d-ed16a7f7c54b";
MultiPolygonRecord.init();
return MultiPolygonRecord;
})(OS.DataTypes.GenericRecord);
TurfJSModel.MultiPolygonRecord = MultiPolygonRecord;

});
define("TurfJS.model$LatLongRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$LatLongRecord"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var LatLongRecordList = (function (_super) {
__extends(LatLongRecordList, _super);
function LatLongRecordList(defaults) {
_super.apply(this, arguments);
}
LatLongRecordList.itemType = TurfJSModel.LatLongRecord;
return LatLongRecordList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.LatLongRecordList = LatLongRecordList;

});
define("TurfJS.model$CoordinateItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItemRec"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItemRecord = (function (_super) {
__extends(CoordinateItemRecord, _super);
function CoordinateItemRecord(defaults) {
_super.apply(this, arguments);
}
CoordinateItemRecord.attributesToDeclare = function () {
return [
this.attr("CoordinateItem", "coordinateItemAttr", "CoordinateItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TurfJSModel.CoordinateItemRec());
}, true, TurfJSModel.CoordinateItemRec)
].concat(_super.attributesToDeclare.call(this));
};
CoordinateItemRecord.fromStructure = function (str) {
return new CoordinateItemRecord(new CoordinateItemRecord.RecordClass({
coordinateItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CoordinateItemRecord._isAnonymousRecord = true;
CoordinateItemRecord.UniqueId = "a2362154-3eb5-f009-0211-cd4b40cee89e";
CoordinateItemRecord.init();
return CoordinateItemRecord;
})(OS.DataTypes.GenericRecord);
TurfJSModel.CoordinateItemRecord = CoordinateItemRecord;

});
define("TurfJS.model$CoordinateItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$CoordinateItemRecord"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var CoordinateItemRecordList = (function (_super) {
__extends(CoordinateItemRecordList, _super);
function CoordinateItemRecordList(defaults) {
_super.apply(this, arguments);
}
CoordinateItemRecordList.itemType = TurfJSModel.CoordinateItemRecord;
return CoordinateItemRecordList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.CoordinateItemRecordList = CoordinateItemRecordList;

});
define("TurfJS.model$MultiPolygonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TurfJS.model", "TurfJS.model$MultiPolygonRecord"], function (exports, OutSystems, TurfJSModel) {
var OS = OutSystems.Internal;
var MultiPolygonRecordList = (function (_super) {
__extends(MultiPolygonRecordList, _super);
function MultiPolygonRecordList(defaults) {
_super.apply(this, arguments);
}
MultiPolygonRecordList.itemType = TurfJSModel.MultiPolygonRecord;
return MultiPolygonRecordList;
})(OS.DataTypes.GenericRecordList);
TurfJSModel.MultiPolygonRecordList = MultiPolygonRecordList;

});
define("TurfJS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var TurfJSModel = exports;
Object.defineProperty(TurfJSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["f77da46b-6683-4e5c-90bc-6fb3430022e1"];
}
});

TurfJSModel.staticEntities = {};
});
