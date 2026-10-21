define("Connect_Map_CS.model$CacheableMapObjectsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Map_CS.model"], function (exports, OutSystems, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var CacheableMapObjectsRec = (function (_super) {
__extends(CacheableMapObjectsRec, _super);
function CacheableMapObjectsRec(defaults) {
_super.apply(this, arguments);
}
CacheableMapObjectsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CacheableMapObjectsRec.init();
return CacheableMapObjectsRec;
})(OS.DataTypes.GenericRecord);
Connect_Map_CSModel.CacheableMapObjectsRec = CacheableMapObjectsRec;

});
define("Connect_Map_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Map_CS.model"], function (exports, OutSystems, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var DecimalList = (function (_super) {
__extends(DecimalList, _super);
function DecimalList(defaults) {
_super.apply(this, arguments);
}
DecimalList.itemType = OS.DataTypes.DataTypes.Decimal;
return DecimalList;
})(OS.DataTypes.GenericRecordList);
Connect_Map_CSModel.DecimalList = DecimalList;

});
define("Connect_Map_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Map_CS.model"], function (exports, OutSystems, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
Connect_Map_CSModel.LongIntegerList = LongIntegerList;

});
define("Connect_Map_CS.model$Map_MarkersStructureRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Connect_Map_CS.model", "Leaflet.model$MarkerWithWindowRec", "Connect_Map_CS.referencesHealth", "Connect_Map_CS.referencesHealth$Leaflet"], function (exports, OutSystems, LeafletModel, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var Map_MarkersStructureRec = (function (_super) {
__extends(Map_MarkersStructureRec, _super);
function Map_MarkersStructureRec(defaults) {
_super.apply(this, arguments);
}
Map_MarkersStructureRec.attributesToDeclare = function () {
return [
this.attr("MarkerWithWindow", "markerWithWindowAttr", "MarkerWithWindow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerWithWindowRec());
}, true, LeafletModel.MarkerWithWindowRec), 
this.attr("IsLocked", "isLockedAttr", "IsLocked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Map_MarkersStructureRec.init();
return Map_MarkersStructureRec;
})(OS.DataTypes.GenericRecord);
Connect_Map_CSModel.Map_MarkersStructureRec = Map_MarkersStructureRec;

});
define("Connect_Map_CS.model$Map_GeoJSONStructureRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Connect_Map_CS.model", "Leaflet.model$GeoJSONFeatureRec", "Connect_Map_CS.referencesHealth", "Connect_Map_CS.referencesHealth$Leaflet"], function (exports, OutSystems, LeafletModel, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var Map_GeoJSONStructureRec = (function (_super) {
__extends(Map_GeoJSONStructureRec, _super);
function Map_GeoJSONStructureRec(defaults) {
_super.apply(this, arguments);
}
Map_GeoJSONStructureRec.attributesToDeclare = function () {
return [
this.attr("GeoJSONFeatureList", "geoJSONFeatureListAttr", "GeoJSONFeatureList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.GeoJSONFeatureRec());
}, true, LeafletModel.GeoJSONFeatureRec), 
this.attr("IsLocked", "isLockedAttr", "IsLocked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Map_GeoJSONStructureRec.init();
return Map_GeoJSONStructureRec;
})(OS.DataTypes.GenericRecord);
Connect_Map_CSModel.Map_GeoJSONStructureRec = Map_GeoJSONStructureRec;

});
define("Connect_Map_CS.model$Locality_GeoJasonRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Map_CS.model"], function (exports, OutSystems, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var Locality_GeoJasonRec = (function (_super) {
__extends(Locality_GeoJasonRec, _super);
function Locality_GeoJasonRec(defaults) {
_super.apply(this, arguments);
}
Locality_GeoJasonRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GeoJSONFeature", "geoJSONFeatureAttr", "GeoJSONFeature", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Locality_GeoJasonRec.init();
return Locality_GeoJasonRec;
})(OS.DataTypes.GenericRecord);
Connect_Map_CSModel.Locality_GeoJasonRec = Locality_GeoJasonRec;

});
define("Connect_Map_CS.model$UI_Map_VisibilityPreferencesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Map_CS.model"], function (exports, OutSystems, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var UI_Map_VisibilityPreferencesRec = (function (_super) {
__extends(UI_Map_VisibilityPreferencesRec, _super);
function UI_Map_VisibilityPreferencesRec(defaults) {
_super.apply(this, arguments);
}
UI_Map_VisibilityPreferencesRec.attributesToDeclare = function () {
return [
this.attr("DisplayHouseholdName", "displayHouseholdNameAttr", "displayHouseholdName", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayAddress", "displayAddressAttr", "displayAddress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_Map_VisibilityPreferencesRec.init();
return UI_Map_VisibilityPreferencesRec;
})(OS.DataTypes.GenericRecord);
Connect_Map_CSModel.UI_Map_VisibilityPreferencesRec = UI_Map_VisibilityPreferencesRec;

});
define("Connect_Map_CS.model$MapExploreItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Map_CS.model"], function (exports, OutSystems, Connect_Map_CSModel) {
var OS = OutSystems.Internal;
var MapExploreItemRec = (function (_super) {
__extends(MapExploreItemRec, _super);
function MapExploreItemRec(defaults) {
_super.apply(this, arguments);
}
MapExploreItemRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoURL2", "photoURL2Attr", "PhotoURL2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MapExploreItemRec.init();
return MapExploreItemRec;
})(OS.DataTypes.GenericRecord);
Connect_Map_CSModel.MapExploreItemRec = MapExploreItemRec;

});
define("Connect_Map_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Map_CSModel = exports;
});
