define("Leaflet.model$", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TextList = TextList;

});
define("Leaflet.model$TileLayerOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerOptionsRec = (function (_super) {
__extends(TileLayerOptionsRec, _super);
function TileLayerOptionsRec(defaults) {
_super.apply(this, arguments);
}
TileLayerOptionsRec.attributesToDeclare = function () {
return [
this.attr("MinZoom", "minZoomAttr", "minZoom", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MaxZoom", "maxZoomAttr", "maxZoom", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(19);
}, true), 
this.attr("MaxNativeZoom", "maxNativeZoomAttr", "maxNativeZoom", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(19);
}, true), 
this.attr("Subdomains", "subdomainsAttr", "subdomains", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("ErrorTileUrl", "errorTileUrlAttr", "errorTileUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tms", "tmsAttr", "tms", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ZoomOffset", "zoomOffsetAttr", "zoomOffset", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ZoomReverse", "zoomReverseAttr", "zoomReverse", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DetectRetina", "detectRetinaAttr", "detectRetina", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Attribution", "attributionAttr", "attribution", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("noWrap", "noWrapAttr", "noWrap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("KeepBuffer", "keepBufferAttr", "keepBuffer", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UpdateWhenIdle", "updateWhenIdleAttr", "updateWhenIdle", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EnableParentTileFallback", "enableParentTileFallbackAttr", "EnableParentTileFallback", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TileLayerOptionsRec.init();
return TileLayerOptionsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.TileLayerOptionsRec = TileLayerOptionsRec;

});
define("Leaflet.model$", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var DecimalList = (function (_super) {
__extends(DecimalList, _super);
function DecimalList(defaults) {
_super.apply(this, arguments);
}
DecimalList.itemType = OS.DataTypes.DataTypes.Decimal;
return DecimalList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.DecimalList = DecimalList;

});
define("Leaflet.model$IconRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var IconRec = (function (_super) {
__extends(IconRec, _super);
function IconRec(defaults) {
_super.apply(this, arguments);
}
IconRec.attributesToDeclare = function () {
return [
this.attr("iconUrl", "iconUrlAttr", "iconUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("iconRetinaUrl", "iconRetinaUrlAttr", "iconRetinaUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("iconSize", "iconSizeAttr", "iconSize", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("iconAnchor", "iconAnchorAttr", "iconAnchor", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("popupAnchor", "popupAnchorAttr", "popupAnchor", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("tooltipAnchor", "tooltipAnchorAttr", "tooltipAnchor", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("shadowUrl", "shadowUrlAttr", "shadowUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("shadowRetinaUrl", "shadowRetinaUrlAttr", "shadowRetinaUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("shadowSize", "shadowSizeAttr", "shadowSize", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("shadowAnchor", "shadowAnchorAttr", "shadowAnchor", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("className", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("crossOrigin", "crossOriginAttr", "crossOrigin", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isTextIcon", "isTextIconAttr", "isTextIcon", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IconRec.init();
return IconRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.IconRec = IconRec;

});
define("Leaflet.model$IconRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$IconRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var IconRecord = (function (_super) {
__extends(IconRecord, _super);
function IconRecord(defaults) {
_super.apply(this, arguments);
}
IconRecord.attributesToDeclare = function () {
return [
this.attr("Icon", "iconAttr", "Icon", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.IconRec());
}, true, LeafletModel.IconRec)
].concat(_super.attributesToDeclare.call(this));
};
IconRecord.fromStructure = function (str) {
return new IconRecord(new IconRecord.RecordClass({
iconAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IconRecord._isAnonymousRecord = true;
IconRecord.UniqueId = "04430d29-673b-db1e-ae04-f745a826803e";
IconRecord.init();
return IconRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.IconRecord = IconRecord;

});
define("Leaflet.model$", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.LongIntegerList = LongIntegerList;

});
define("Leaflet.model$TooltipOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipOptionsRec = (function (_super) {
__extends(TooltipOptionsRec, _super);
function TooltipOptionsRec(defaults) {
_super.apply(this, arguments);
}
TooltipOptionsRec.attributesToDeclare = function () {
return [
this.attr("Pane", "paneAttr", "pane", false, false, OS.DataTypes.DataTypes.Text, function () {
return "tooltipPane";
}, true), 
this.attr("Offset", "offsetAttr", "offset", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("Direction", "directionAttr", "direction", false, false, OS.DataTypes.DataTypes.Text, function () {
return "top";
}, true), 
this.attr("Permanent", "permanentAttr", "permanent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Sticky", "stickyAttr", "sticky", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Interactive", "interactiveAttr", "interactive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Opacity", "opacityAttr", "opacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return (new OS.DataTypes.Decimal("0.9"));
}, true), 
this.attr("ClassName", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TooltipOptionsRec.init();
return TooltipOptionsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.TooltipOptionsRec = TooltipOptionsRec;

});
define("Leaflet.model$TooltipRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipRec = (function (_super) {
__extends(TooltipRec, _super);
function TooltipRec(defaults) {
_super.apply(this, arguments);
}
TooltipRec.attributesToDeclare = function () {
return [
this.attr("Content", "contentAttr", "content", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Options", "optionsAttr", "options", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TooltipOptionsRec());
}, true, LeafletModel.TooltipOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TooltipRec.init();
return TooltipRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.TooltipRec = TooltipRec;

});
define("Leaflet.model$TooltipList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipList = (function (_super) {
__extends(TooltipList, _super);
function TooltipList(defaults) {
_super.apply(this, arguments);
}
TooltipList.itemType = LeafletModel.TooltipRec;
return TooltipList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TooltipList = TooltipList;

});
define("Leaflet.model$OffsetRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var OffsetRec = (function (_super) {
__extends(OffsetRec, _super);
function OffsetRec(defaults) {
_super.apply(this, arguments);
}
OffsetRec.attributesToDeclare = function () {
return [
this.attr("X", "xAttr", "x", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Y", "yAttr", "y", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OffsetRec.init();
return OffsetRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.OffsetRec = OffsetRec;

});
define("Leaflet.model$OffsetList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$OffsetRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var OffsetList = (function (_super) {
__extends(OffsetList, _super);
function OffsetList(defaults) {
_super.apply(this, arguments);
}
OffsetList.itemType = LeafletModel.OffsetRec;
return OffsetList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.OffsetList = OffsetList;

});
define("Leaflet.model$MarkerOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$IconRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerOptionsRec = (function (_super) {
__extends(MarkerOptionsRec, _super);
function MarkerOptionsRec(defaults) {
_super.apply(this, arguments);
}
MarkerOptionsRec.attributesToDeclare = function () {
return [
this.attr("Icon", "iconAttr", "icon", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.IconRec());
}, true, LeafletModel.IconRec), 
this.attr("Draggable", "draggableAttr", "draggable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Keyboard", "keyboardAttr", "keyboard", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Alt", "altAttr", "alt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ZIndexOffset", "zIndexOffsetAttr", "zIndexOffset", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Opacity", "opacityAttr", "opacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiseOnHover", "riseOnHoverAttr", "riseOnHover", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RiseOffset", "riseOffsetAttr", "riseOffset", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MarkerOptionsRec.init();
return MarkerOptionsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.MarkerOptionsRec = MarkerOptionsRec;

});
define("Leaflet.model$MarkerRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerRec = (function (_super) {
__extends(MarkerRec, _super);
function MarkerRec(defaults) {
_super.apply(this, arguments);
}
MarkerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtraData", "extraDataAttr", "ExtraData", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Latlng", "latlngAttr", "latlng", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("Options", "optionsAttr", "options", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerOptionsRec());
}, true, LeafletModel.MarkerOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerRec.init();
return MarkerRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.MarkerRec = MarkerRec;

});
define("Leaflet.model$PopUpRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$OffsetRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PopUpRec = (function (_super) {
__extends(PopUpRec, _super);
function PopUpRec(defaults) {
_super.apply(this, arguments);
}
PopUpRec.attributesToDeclare = function () {
return [
this.attr("Pane", "paneAttr", "pane", false, false, OS.DataTypes.DataTypes.Text, function () {
return "popupPane";
}, true), 
this.attr("MaxWidth", "maxWidthAttr", "maxWidth", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(300);
}, true), 
this.attr("MinWidth", "minWidthAttr", "minWidth", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(50);
}, true), 
this.attr("AutoPan", "autoPanAttr", "autoPan", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AutoPanPadding", "autoPanPaddingAttr", "autoPanPadding", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.OffsetRec());
}, true, LeafletModel.OffsetRec), 
this.attr("KeepInView", "keepInViewAttr", "keepInView", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CloseButton", "closeButtonAttr", "closeButton", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AutoClose", "autoCloseAttr", "autoClose", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CloseOnEscapeKey", "closeOnEscapeKeyAttr", "closeOnEscapeKey", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ClassName", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Interactive", "interactiveAttr", "interactive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Content", "contentAttr", "content", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PopUpRec.init();
return PopUpRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.PopUpRec = PopUpRec;

});
define("Leaflet.model$MarkerWithWindowRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerRec", "Leaflet.model$TooltipRec", "Leaflet.model$PopUpRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerWithWindowRec = (function (_super) {
__extends(MarkerWithWindowRec, _super);
function MarkerWithWindowRec(defaults) {
_super.apply(this, arguments);
}
MarkerWithWindowRec.attributesToDeclare = function () {
return [
this.attr("Marker", "markerAttr", "Marker", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerRec());
}, true, LeafletModel.MarkerRec), 
this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TooltipRec());
}, true, LeafletModel.TooltipRec), 
this.attr("Popup", "popupAttr", "Popup", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.PopUpRec());
}, true, LeafletModel.PopUpRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerWithWindowRec.init();
return MarkerWithWindowRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.MarkerWithWindowRec = MarkerWithWindowRec;

});
define("Leaflet.model$MarkerWithWindowRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerWithWindowRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerWithWindowRecord = (function (_super) {
__extends(MarkerWithWindowRecord, _super);
function MarkerWithWindowRecord(defaults) {
_super.apply(this, arguments);
}
MarkerWithWindowRecord.attributesToDeclare = function () {
return [
this.attr("MarkerWithWindow", "markerWithWindowAttr", "MarkerWithWindow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerWithWindowRec());
}, true, LeafletModel.MarkerWithWindowRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerWithWindowRecord.fromStructure = function (str) {
return new MarkerWithWindowRecord(new MarkerWithWindowRecord.RecordClass({
markerWithWindowAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerWithWindowRecord._isAnonymousRecord = true;
MarkerWithWindowRecord.UniqueId = "7e321065-c1ab-d6ed-6514-b500b76bb9a9";
MarkerWithWindowRecord.init();
return MarkerWithWindowRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.MarkerWithWindowRecord = MarkerWithWindowRecord;

});
define("Leaflet.model$MarkerWithWindowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerWithWindowRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerWithWindowRecordList = (function (_super) {
__extends(MarkerWithWindowRecordList, _super);
function MarkerWithWindowRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerWithWindowRecordList.itemType = LeafletModel.MarkerWithWindowRecord;
return MarkerWithWindowRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MarkerWithWindowRecordList = MarkerWithWindowRecordList;

});
define("Leaflet.model$MaxBoundsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MaxBoundsRec = (function (_super) {
__extends(MaxBoundsRec, _super);
function MaxBoundsRec(defaults) {
_super.apply(this, arguments);
}
MaxBoundsRec.attributesToDeclare = function () {
return [
this.attr("Max_Lat", "max_LatAttr", "Max_Lat", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 90;
}, true), 
this.attr("Min_Lat", "min_LatAttr", "Min_Lat", false, false, OS.DataTypes.DataTypes.Integer, function () {
return -90;
}, true), 
this.attr("Max_Long", "max_LongAttr", "Max_Long", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 180;
}, true), 
this.attr("Min_Long", "min_LongAttr", "Min_Long", false, false, OS.DataTypes.DataTypes.Integer, function () {
return -180;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MaxBoundsRec.init();
return MaxBoundsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.MaxBoundsRec = MaxBoundsRec;

});
define("Leaflet.model$MapOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MaxBoundsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapOptionsRec = (function (_super) {
__extends(MapOptionsRec, _super);
function MapOptionsRec(defaults) {
_super.apply(this, arguments);
}
MapOptionsRec.attributesToDeclare = function () {
return [
this.attr("Center", "centerAttr", "center", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, true, OS.DataTypes.DecimalList), 
this.attr("Zoom", "zoomAttr", "zoom", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(13);
}, true), 
this.attr("MinZoom", "minZoomAttr", "minZoom", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}, true), 
this.attr("MaxZoom", "maxZoomAttr", "maxZoom", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(19);
}, true), 
this.attr("MaxBounds", "maxBoundsAttr", "maxBounds", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MaxBoundsRec());
}, true, LeafletModel.MaxBoundsRec), 
this.attr("ZoomSnap", "zoomSnapAttr", "zoomSnap", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(1);
}, true), 
this.attr("ZoomDelta", "zoomDeltaAttr", "zoomDelta", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(1);
}, true), 
this.attr("WheelPxPerZoomLevel", "wheelPxPerZoomLevelAttr", "wheelPxPerZoomLevel", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(60);
}, true), 
this.attr("ClosePopupOnClick", "closePopupOnClickAttr", "closePopupOnClick", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("defaultZoomControl", "defaultZoomControlAttr", "zoomControl", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AttributionControl", "attributionControlAttr", "attributionControl", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("FadeAnimation", "fadeAnimationAttr", "fadeAnimation", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ZoomAnimation", "zoomAnimationAttr", "zoomAnimation", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("MarkerZoomAnimation", "markerZoomAnimationAttr", "markerZoomAnimation", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Inertia", "inertiaAttr", "inertia", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("InertiaDeceleration", "inertiaDecelerationAttr", "inertiaDeceleration", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(3000);
}, true), 
this.attr("InertiaMaxSpeed", "inertiaMaxSpeedAttr", "inertiaMaxSpeed", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(1500);
}, true), 
this.attr("EaseLinearity", "easeLinearityAttr", "easeLinearity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return (new OS.DataTypes.Decimal("0.25"));
}, true), 
this.attr("WorldCopyJump", "worldCopyJumpAttr", "worldCopyJump", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MaxBoundsViscosity", "maxBoundsViscosityAttr", "maxBoundsViscosity", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}, true), 
this.attr("Keyboard", "keyboardAttr", "keyboard", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("KeyboardPanDelta", "keyboardPanDeltaAttr", "keyboardPanDelta", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(80);
}, true), 
this.attr("ScrollWheelZoom", "scrollWheelZoomAttr", "scrollWheelZoom", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("DoubleClickZoom", "doubleClickZoomAttr", "doubleClickZoom", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("BoxZoom", "boxZoomAttr", "boxZoom", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Tap", "tapAttr", "tap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("TouchZoom", "touchZoomAttr", "touchZoom", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("PreferCanvas", "preferCanvasAttr", "preferCanvas", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MapOptionsRec.init();
return MapOptionsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.MapOptionsRec = MapOptionsRec;

});
define("Leaflet.model$MapOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MapOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapOptionsList = (function (_super) {
__extends(MapOptionsList, _super);
function MapOptionsList(defaults) {
_super.apply(this, arguments);
}
MapOptionsList.itemType = LeafletModel.MapOptionsRec;
return MapOptionsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MapOptionsList = MapOptionsList;

});
define("Leaflet.model$MarkerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerRecord = (function (_super) {
__extends(MarkerRecord, _super);
function MarkerRecord(defaults) {
_super.apply(this, arguments);
}
MarkerRecord.attributesToDeclare = function () {
return [
this.attr("Marker", "markerAttr", "Marker", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerRec());
}, true, LeafletModel.MarkerRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerRecord.fromStructure = function (str) {
return new MarkerRecord(new MarkerRecord.RecordClass({
markerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerRecord._isAnonymousRecord = true;
MarkerRecord.UniqueId = "12ec02f0-a050-6a80-beca-716bfab38924";
MarkerRecord.init();
return MarkerRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.MarkerRecord = MarkerRecord;

});
define("Leaflet.model$MaxBoundsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MaxBoundsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MaxBoundsRecord = (function (_super) {
__extends(MaxBoundsRecord, _super);
function MaxBoundsRecord(defaults) {
_super.apply(this, arguments);
}
MaxBoundsRecord.attributesToDeclare = function () {
return [
this.attr("MaxBounds", "maxBoundsAttr", "MaxBounds", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MaxBoundsRec());
}, true, LeafletModel.MaxBoundsRec)
].concat(_super.attributesToDeclare.call(this));
};
MaxBoundsRecord.fromStructure = function (str) {
return new MaxBoundsRecord(new MaxBoundsRecord.RecordClass({
maxBoundsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MaxBoundsRecord._isAnonymousRecord = true;
MaxBoundsRecord.UniqueId = "7151995e-279c-26a3-fd7c-c9e248dd6b36";
MaxBoundsRecord.init();
return MaxBoundsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.MaxBoundsRecord = MaxBoundsRecord;

});
define("Leaflet.model$MaxBoundsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MaxBoundsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MaxBoundsRecordList = (function (_super) {
__extends(MaxBoundsRecordList, _super);
function MaxBoundsRecordList(defaults) {
_super.apply(this, arguments);
}
MaxBoundsRecordList.itemType = LeafletModel.MaxBoundsRecord;
return MaxBoundsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MaxBoundsRecordList = MaxBoundsRecordList;

});
define("Leaflet.model$MapVisibleBoundariesRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapVisibleBoundariesRec = (function (_super) {
__extends(MapVisibleBoundariesRec, _super);
function MapVisibleBoundariesRec(defaults) {
_super.apply(this, arguments);
}
MapVisibleBoundariesRec.attributesToDeclare = function () {
return [
this.attr("MaxLat", "maxLatAttr", "MaxLat", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MinLat", "minLatAttr", "MinLat", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxLong", "maxLongAttr", "MaxLong", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MinLong", "minLongAttr", "MinLong", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MapVisibleBoundariesRec.init();
return MapVisibleBoundariesRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.MapVisibleBoundariesRec = MapVisibleBoundariesRec;

});
define("Leaflet.model$ZoomControlOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var ZoomControlOptionsRec = (function (_super) {
__extends(ZoomControlOptionsRec, _super);
function ZoomControlOptionsRec(defaults) {
_super.apply(this, arguments);
}
ZoomControlOptionsRec.attributesToDeclare = function () {
return [
this.attr("position", "positionAttr", "position", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zoomInText", "zoomInTextAttr", "zoomInText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zoomInTitle", "zoomInTitleAttr", "zoomInTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zoomInClass", "zoomInClassAttr", "zoomInClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zoomOutText", "zoomOutTextAttr", "zoomOutText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zoomOutTitle", "zoomOutTitleAttr", "zoomOutTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zoomOutClass", "zoomOutClassAttr", "zoomOutClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isAddGoToMyLocationButton", "isAddGoToMyLocationButtonAttr", "isAddGoToMyLocationButton", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MyLocationButtonClass", "myLocationButtonClassAttr", "MyLocationButtonClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MyLocationButtonText", "myLocationButtonTextAttr", "MyLocationButtonText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MyLocationButtonTitle", "myLocationButtonTitleAttr", "MyLocationButtonTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("useCustomZoomControl", "useCustomZoomControlAttr", "useCustomZoomControl", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ZoomControlOptionsRec.init();
return ZoomControlOptionsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.ZoomControlOptionsRec = ZoomControlOptionsRec;

});
define("Leaflet.model$ZoomControlOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$ZoomControlOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var ZoomControlOptionsRecord = (function (_super) {
__extends(ZoomControlOptionsRecord, _super);
function ZoomControlOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ZoomControlOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ZoomControlOptions", "zoomControlOptionsAttr", "ZoomControlOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.ZoomControlOptionsRec());
}, true, LeafletModel.ZoomControlOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ZoomControlOptionsRecord.fromStructure = function (str) {
return new ZoomControlOptionsRecord(new ZoomControlOptionsRecord.RecordClass({
zoomControlOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ZoomControlOptionsRecord._isAnonymousRecord = true;
ZoomControlOptionsRecord.UniqueId = "5950e92a-4b54-0f58-69d5-d795a8401fed";
ZoomControlOptionsRecord.init();
return ZoomControlOptionsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.ZoomControlOptionsRecord = ZoomControlOptionsRecord;

});
define("Leaflet.model$ZoomControlOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$ZoomControlOptionsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var ZoomControlOptionsRecordList = (function (_super) {
__extends(ZoomControlOptionsRecordList, _super);
function ZoomControlOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ZoomControlOptionsRecordList.itemType = LeafletModel.ZoomControlOptionsRecord;
return ZoomControlOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.ZoomControlOptionsRecordList = ZoomControlOptionsRecordList;

});
define("Leaflet.model$PathOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PathOptionsRec = (function (_super) {
__extends(PathOptionsRec, _super);
function PathOptionsRec(defaults) {
_super.apply(this, arguments);
}
PathOptionsRec.attributesToDeclare = function () {
return [
this.attr("stroke", "strokeAttr", "stroke", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("color", "colorAttr", "color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("weight", "weightAttr", "weight", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("opacity", "opacityAttr", "opacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("lineCap", "lineCapAttr", "lineCap", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("lineJoin", "lineJoinAttr", "lineJoin", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("dashArray", "dashArrayAttr", "dashArray", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("dashOffset", "dashOffsetAttr", "dashOffset", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("fill", "fillAttr", "fill", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("fillColor", "fillColorAttr", "fillColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("fillOpacity", "fillOpacityAttr", "fillOpacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("fillRule", "fillRuleAttr", "fillRule", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("bubblingMouseEvents", "bubblingMouseEventsAttr", "bubblingMouseEvents", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("className", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("interactive", "interactiveAttr", "interactive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("pane", "paneAttr", "pane", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("attribution", "attributionAttr", "attribution", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PathOptionsRec.init();
return PathOptionsRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.PathOptionsRec = PathOptionsRec;

});
define("Leaflet.model$PathOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PathOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PathOptionsRecord = (function (_super) {
__extends(PathOptionsRecord, _super);
function PathOptionsRecord(defaults) {
_super.apply(this, arguments);
}
PathOptionsRecord.attributesToDeclare = function () {
return [
this.attr("PathOptions", "pathOptionsAttr", "PathOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.PathOptionsRec());
}, true, LeafletModel.PathOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
PathOptionsRecord.fromStructure = function (str) {
return new PathOptionsRecord(new PathOptionsRecord.RecordClass({
pathOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PathOptionsRecord._isAnonymousRecord = true;
PathOptionsRecord.UniqueId = "a42285f3-e4e9-891b-85f0-9848b3147b60";
PathOptionsRecord.init();
return PathOptionsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.PathOptionsRecord = PathOptionsRecord;

});
define("Leaflet.model$PathOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PathOptionsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PathOptionsRecordList = (function (_super) {
__extends(PathOptionsRecordList, _super);
function PathOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
PathOptionsRecordList.itemType = LeafletModel.PathOptionsRecord;
return PathOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.PathOptionsRecordList = PathOptionsRecordList;

});
define("Leaflet.model$OffsetRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$OffsetRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var OffsetRecord = (function (_super) {
__extends(OffsetRecord, _super);
function OffsetRecord(defaults) {
_super.apply(this, arguments);
}
OffsetRecord.attributesToDeclare = function () {
return [
this.attr("Offset", "offsetAttr", "Offset", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.OffsetRec());
}, true, LeafletModel.OffsetRec)
].concat(_super.attributesToDeclare.call(this));
};
OffsetRecord.fromStructure = function (str) {
return new OffsetRecord(new OffsetRecord.RecordClass({
offsetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OffsetRecord._isAnonymousRecord = true;
OffsetRecord.UniqueId = "2efed7eb-fa6a-aa86-9bf9-31e714f5ed57";
OffsetRecord.init();
return OffsetRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.OffsetRecord = OffsetRecord;

});
define("Leaflet.model$MarkerWithWindowList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerWithWindowRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerWithWindowList = (function (_super) {
__extends(MarkerWithWindowList, _super);
function MarkerWithWindowList(defaults) {
_super.apply(this, arguments);
}
MarkerWithWindowList.itemType = LeafletModel.MarkerWithWindowRec;
return MarkerWithWindowList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MarkerWithWindowList = MarkerWithWindowList;

});
define("Leaflet.model$GeoJSONFeatureRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PathOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var GeoJSONFeatureRec = (function (_super) {
__extends(GeoJSONFeatureRec, _super);
function GeoJSONFeatureRec(defaults) {
_super.apply(this, arguments);
}
GeoJSONFeatureRec.attributesToDeclare = function () {
return [
this.attr("FeatureJSON", "featureJSONAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtraData", "extraDataAttr", "ExtraData", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PathOptions", "pathOptionsAttr", "PathOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.PathOptionsRec());
}, true, LeafletModel.PathOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
GeoJSONFeatureRec.init();
return GeoJSONFeatureRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.GeoJSONFeatureRec = GeoJSONFeatureRec;

});
define("Leaflet.model$GeoJSONFeatureList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$GeoJSONFeatureRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var GeoJSONFeatureList = (function (_super) {
__extends(GeoJSONFeatureList, _super);
function GeoJSONFeatureList(defaults) {
_super.apply(this, arguments);
}
GeoJSONFeatureList.itemType = LeafletModel.GeoJSONFeatureRec;
return GeoJSONFeatureList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.GeoJSONFeatureList = GeoJSONFeatureList;

});
define("Leaflet.model$MarkerOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerOptionsList = (function (_super) {
__extends(MarkerOptionsList, _super);
function MarkerOptionsList(defaults) {
_super.apply(this, arguments);
}
MarkerOptionsList.itemType = LeafletModel.MarkerOptionsRec;
return MarkerOptionsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MarkerOptionsList = MarkerOptionsList;

});
define("Leaflet.model$ZoomControlOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$ZoomControlOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var ZoomControlOptionsList = (function (_super) {
__extends(ZoomControlOptionsList, _super);
function ZoomControlOptionsList(defaults) {
_super.apply(this, arguments);
}
ZoomControlOptionsList.itemType = LeafletModel.ZoomControlOptionsRec;
return ZoomControlOptionsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.ZoomControlOptionsList = ZoomControlOptionsList;

});
define("Leaflet.model$TooltipOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipOptionsList = (function (_super) {
__extends(TooltipOptionsList, _super);
function TooltipOptionsList(defaults) {
_super.apply(this, arguments);
}
TooltipOptionsList.itemType = LeafletModel.TooltipOptionsRec;
return TooltipOptionsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TooltipOptionsList = TooltipOptionsList;

});
define("Leaflet.model$OffsetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$OffsetRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var OffsetRecordList = (function (_super) {
__extends(OffsetRecordList, _super);
function OffsetRecordList(defaults) {
_super.apply(this, arguments);
}
OffsetRecordList.itemType = LeafletModel.OffsetRecord;
return OffsetRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.OffsetRecordList = OffsetRecordList;

});
define("Leaflet.model$TileLayerRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerRec = (function (_super) {
__extends(TileLayerRec, _super);
function TileLayerRec(defaults) {
_super.apply(this, arguments);
}
TileLayerRec.attributesToDeclare = function () {
return [
this.attr("Url", "urlAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
}, true), 
this.attr("Options", "optionsAttr", "options", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TileLayerOptionsRec());
}, true, LeafletModel.TileLayerOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TileLayerRec.init();
return TileLayerRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.TileLayerRec = TileLayerRec;

});
define("Leaflet.model$TileLayerList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerList = (function (_super) {
__extends(TileLayerList, _super);
function TileLayerList(defaults) {
_super.apply(this, arguments);
}
TileLayerList.itemType = LeafletModel.TileLayerRec;
return TileLayerList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TileLayerList = TileLayerList;

});
define("Leaflet.model$MapVisibleBoundariesList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MapVisibleBoundariesRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapVisibleBoundariesList = (function (_super) {
__extends(MapVisibleBoundariesList, _super);
function MapVisibleBoundariesList(defaults) {
_super.apply(this, arguments);
}
MapVisibleBoundariesList.itemType = LeafletModel.MapVisibleBoundariesRec;
return MapVisibleBoundariesList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MapVisibleBoundariesList = MapVisibleBoundariesList;

});
define("Leaflet.model$IconRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$IconRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var IconRecordList = (function (_super) {
__extends(IconRecordList, _super);
function IconRecordList(defaults) {
_super.apply(this, arguments);
}
IconRecordList.itemType = LeafletModel.IconRecord;
return IconRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.IconRecordList = IconRecordList;

});
define("Leaflet.model$IconList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$IconRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var IconList = (function (_super) {
__extends(IconList, _super);
function IconList(defaults) {
_super.apply(this, arguments);
}
IconList.itemType = LeafletModel.IconRec;
return IconList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.IconList = IconList;

});
define("Leaflet.model$TooltipRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipRecord = (function (_super) {
__extends(TooltipRecord, _super);
function TooltipRecord(defaults) {
_super.apply(this, arguments);
}
TooltipRecord.attributesToDeclare = function () {
return [
this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TooltipRec());
}, true, LeafletModel.TooltipRec)
].concat(_super.attributesToDeclare.call(this));
};
TooltipRecord.fromStructure = function (str) {
return new TooltipRecord(new TooltipRecord.RecordClass({
tooltipAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TooltipRecord._isAnonymousRecord = true;
TooltipRecord.UniqueId = "b0f747a0-ab87-0277-164f-65ed549cdb7d";
TooltipRecord.init();
return TooltipRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.TooltipRecord = TooltipRecord;

});
define("Leaflet.model$TooltipRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipRecordList = (function (_super) {
__extends(TooltipRecordList, _super);
function TooltipRecordList(defaults) {
_super.apply(this, arguments);
}
TooltipRecordList.itemType = LeafletModel.TooltipRecord;
return TooltipRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TooltipRecordList = TooltipRecordList;

});
define("Leaflet.model$StyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var StyleRec = (function (_super) {
__extends(StyleRec, _super);
function StyleRec(defaults) {
_super.apply(this, arguments);
}
StyleRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weight", "weightAttr", "weight", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Opacity", "opacityAttr", "opacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StyleRec.init();
return StyleRec;
})(OS.DataTypes.GenericRecord);
LeafletModel.StyleRec = StyleRec;

});
define("Leaflet.model$StyleList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$StyleRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var StyleList = (function (_super) {
__extends(StyleList, _super);
function StyleList(defaults) {
_super.apply(this, arguments);
}
StyleList.itemType = LeafletModel.StyleRec;
return StyleList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.StyleList = StyleList;

});
define("Leaflet.model$GeoJSONFeatureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$GeoJSONFeatureRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var GeoJSONFeatureRecord = (function (_super) {
__extends(GeoJSONFeatureRecord, _super);
function GeoJSONFeatureRecord(defaults) {
_super.apply(this, arguments);
}
GeoJSONFeatureRecord.attributesToDeclare = function () {
return [
this.attr("GeoJSONFeature", "geoJSONFeatureAttr", "GeoJSONFeature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.GeoJSONFeatureRec());
}, true, LeafletModel.GeoJSONFeatureRec)
].concat(_super.attributesToDeclare.call(this));
};
GeoJSONFeatureRecord.fromStructure = function (str) {
return new GeoJSONFeatureRecord(new GeoJSONFeatureRecord.RecordClass({
geoJSONFeatureAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GeoJSONFeatureRecord._isAnonymousRecord = true;
GeoJSONFeatureRecord.UniqueId = "7b12ca66-45f1-8326-a2bd-c01b71f04823";
GeoJSONFeatureRecord.init();
return GeoJSONFeatureRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.GeoJSONFeatureRecord = GeoJSONFeatureRecord;

});
define("Leaflet.model$TileLayerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerRecord = (function (_super) {
__extends(TileLayerRecord, _super);
function TileLayerRecord(defaults) {
_super.apply(this, arguments);
}
TileLayerRecord.attributesToDeclare = function () {
return [
this.attr("TileLayer", "tileLayerAttr", "TileLayer", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TileLayerRec());
}, true, LeafletModel.TileLayerRec)
].concat(_super.attributesToDeclare.call(this));
};
TileLayerRecord.fromStructure = function (str) {
return new TileLayerRecord(new TileLayerRecord.RecordClass({
tileLayerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TileLayerRecord._isAnonymousRecord = true;
TileLayerRecord.UniqueId = "8339c447-3f56-c1a3-e476-ce803bad388b";
TileLayerRecord.init();
return TileLayerRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.TileLayerRecord = TileLayerRecord;

});
define("Leaflet.model$PopUpList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PopUpRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PopUpList = (function (_super) {
__extends(PopUpList, _super);
function PopUpList(defaults) {
_super.apply(this, arguments);
}
PopUpList.itemType = LeafletModel.PopUpRec;
return PopUpList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.PopUpList = PopUpList;

});
define("Leaflet.model$TileLayerOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerOptionsRecord = (function (_super) {
__extends(TileLayerOptionsRecord, _super);
function TileLayerOptionsRecord(defaults) {
_super.apply(this, arguments);
}
TileLayerOptionsRecord.attributesToDeclare = function () {
return [
this.attr("TileLayerOptions", "tileLayerOptionsAttr", "TileLayerOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TileLayerOptionsRec());
}, true, LeafletModel.TileLayerOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TileLayerOptionsRecord.fromStructure = function (str) {
return new TileLayerOptionsRecord(new TileLayerOptionsRecord.RecordClass({
tileLayerOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TileLayerOptionsRecord._isAnonymousRecord = true;
TileLayerOptionsRecord.UniqueId = "cdde03a7-06dd-0eb7-4993-798b4145d578";
TileLayerOptionsRecord.init();
return TileLayerOptionsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.TileLayerOptionsRecord = TileLayerOptionsRecord;

});
define("Leaflet.model$TileLayerOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerOptionsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerOptionsRecordList = (function (_super) {
__extends(TileLayerOptionsRecordList, _super);
function TileLayerOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
TileLayerOptionsRecordList.itemType = LeafletModel.TileLayerOptionsRecord;
return TileLayerOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TileLayerOptionsRecordList = TileLayerOptionsRecordList;

});
define("Leaflet.model$MapVisibleBoundariesRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MapVisibleBoundariesRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapVisibleBoundariesRecord = (function (_super) {
__extends(MapVisibleBoundariesRecord, _super);
function MapVisibleBoundariesRecord(defaults) {
_super.apply(this, arguments);
}
MapVisibleBoundariesRecord.attributesToDeclare = function () {
return [
this.attr("MapVisibleBoundaries", "mapVisibleBoundariesAttr", "MapVisibleBoundaries", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MapVisibleBoundariesRec());
}, true, LeafletModel.MapVisibleBoundariesRec)
].concat(_super.attributesToDeclare.call(this));
};
MapVisibleBoundariesRecord.fromStructure = function (str) {
return new MapVisibleBoundariesRecord(new MapVisibleBoundariesRecord.RecordClass({
mapVisibleBoundariesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapVisibleBoundariesRecord._isAnonymousRecord = true;
MapVisibleBoundariesRecord.UniqueId = "89475f5d-e408-b10b-32d1-7ef45525ad31";
MapVisibleBoundariesRecord.init();
return MapVisibleBoundariesRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.MapVisibleBoundariesRecord = MapVisibleBoundariesRecord;

});
define("Leaflet.model$TileLayerOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerOptionsList = (function (_super) {
__extends(TileLayerOptionsList, _super);
function TileLayerOptionsList(defaults) {
_super.apply(this, arguments);
}
TileLayerOptionsList.itemType = LeafletModel.TileLayerOptionsRec;
return TileLayerOptionsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TileLayerOptionsList = TileLayerOptionsList;

});
define("Leaflet.model$MapOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MapOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapOptionsRecord = (function (_super) {
__extends(MapOptionsRecord, _super);
function MapOptionsRecord(defaults) {
_super.apply(this, arguments);
}
MapOptionsRecord.attributesToDeclare = function () {
return [
this.attr("MapOptions", "mapOptionsAttr", "MapOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MapOptionsRec());
}, true, LeafletModel.MapOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
MapOptionsRecord.fromStructure = function (str) {
return new MapOptionsRecord(new MapOptionsRecord.RecordClass({
mapOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MapOptionsRecord._isAnonymousRecord = true;
MapOptionsRecord.UniqueId = "c8f9a0db-599a-9ec5-64eb-e0c0b1a4d7e9";
MapOptionsRecord.init();
return MapOptionsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.MapOptionsRecord = MapOptionsRecord;

});
define("Leaflet.model$MapOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MapOptionsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapOptionsRecordList = (function (_super) {
__extends(MapOptionsRecordList, _super);
function MapOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
MapOptionsRecordList.itemType = LeafletModel.MapOptionsRecord;
return MapOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MapOptionsRecordList = MapOptionsRecordList;

});
define("Leaflet.model$MarkerList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerList = (function (_super) {
__extends(MarkerList, _super);
function MarkerList(defaults) {
_super.apply(this, arguments);
}
MarkerList.itemType = LeafletModel.MarkerRec;
return MarkerList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MarkerList = MarkerList;

});
define("Leaflet.model$StyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$StyleRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var StyleRecord = (function (_super) {
__extends(StyleRecord, _super);
function StyleRecord(defaults) {
_super.apply(this, arguments);
}
StyleRecord.attributesToDeclare = function () {
return [
this.attr("Style", "styleAttr", "Style", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.StyleRec());
}, true, LeafletModel.StyleRec)
].concat(_super.attributesToDeclare.call(this));
};
StyleRecord.fromStructure = function (str) {
return new StyleRecord(new StyleRecord.RecordClass({
styleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StyleRecord._isAnonymousRecord = true;
StyleRecord.UniqueId = "b6ac4767-8da9-12d9-c4cb-33ce020eccab";
StyleRecord.init();
return StyleRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.StyleRecord = StyleRecord;

});
define("Leaflet.model$StyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$StyleRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var StyleRecordList = (function (_super) {
__extends(StyleRecordList, _super);
function StyleRecordList(defaults) {
_super.apply(this, arguments);
}
StyleRecordList.itemType = LeafletModel.StyleRecord;
return StyleRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.StyleRecordList = StyleRecordList;

});
define("Leaflet.model$TooltipOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipOptionsRecord = (function (_super) {
__extends(TooltipOptionsRecord, _super);
function TooltipOptionsRecord(defaults) {
_super.apply(this, arguments);
}
TooltipOptionsRecord.attributesToDeclare = function () {
return [
this.attr("TooltipOptions", "tooltipOptionsAttr", "TooltipOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TooltipOptionsRec());
}, true, LeafletModel.TooltipOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TooltipOptionsRecord.fromStructure = function (str) {
return new TooltipOptionsRecord(new TooltipOptionsRecord.RecordClass({
tooltipOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TooltipOptionsRecord._isAnonymousRecord = true;
TooltipOptionsRecord.UniqueId = "e77568d0-be24-6395-27a5-9d50988ad103";
TooltipOptionsRecord.init();
return TooltipOptionsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.TooltipOptionsRecord = TooltipOptionsRecord;

});
define("Leaflet.model$TooltipOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TooltipOptionsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TooltipOptionsRecordList = (function (_super) {
__extends(TooltipOptionsRecordList, _super);
function TooltipOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
TooltipOptionsRecordList.itemType = LeafletModel.TooltipOptionsRecord;
return TooltipOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TooltipOptionsRecordList = TooltipOptionsRecordList;

});
define("Leaflet.model$MapVisibleBoundariesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MapVisibleBoundariesRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MapVisibleBoundariesRecordList = (function (_super) {
__extends(MapVisibleBoundariesRecordList, _super);
function MapVisibleBoundariesRecordList(defaults) {
_super.apply(this, arguments);
}
MapVisibleBoundariesRecordList.itemType = LeafletModel.MapVisibleBoundariesRecord;
return MapVisibleBoundariesRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MapVisibleBoundariesRecordList = MapVisibleBoundariesRecordList;

});
define("Leaflet.model$GeoJSONFeatureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$GeoJSONFeatureRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var GeoJSONFeatureRecordList = (function (_super) {
__extends(GeoJSONFeatureRecordList, _super);
function GeoJSONFeatureRecordList(defaults) {
_super.apply(this, arguments);
}
GeoJSONFeatureRecordList.itemType = LeafletModel.GeoJSONFeatureRecord;
return GeoJSONFeatureRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.GeoJSONFeatureRecordList = GeoJSONFeatureRecordList;

});
define("Leaflet.model$TileLayerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$TileLayerRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var TileLayerRecordList = (function (_super) {
__extends(TileLayerRecordList, _super);
function TileLayerRecordList(defaults) {
_super.apply(this, arguments);
}
TileLayerRecordList.itemType = LeafletModel.TileLayerRecord;
return TileLayerRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.TileLayerRecordList = TileLayerRecordList;

});
define("Leaflet.model$MarkerOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerOptionsRecord = (function (_super) {
__extends(MarkerOptionsRecord, _super);
function MarkerOptionsRecord(defaults) {
_super.apply(this, arguments);
}
MarkerOptionsRecord.attributesToDeclare = function () {
return [
this.attr("MarkerOptions", "markerOptionsAttr", "MarkerOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerOptionsRec());
}, true, LeafletModel.MarkerOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
MarkerOptionsRecord.fromStructure = function (str) {
return new MarkerOptionsRecord(new MarkerOptionsRecord.RecordClass({
markerOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarkerOptionsRecord._isAnonymousRecord = true;
MarkerOptionsRecord.UniqueId = "f27cacd7-6863-2abb-bfe6-32539764fb7e";
MarkerOptionsRecord.init();
return MarkerOptionsRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.MarkerOptionsRecord = MarkerOptionsRecord;

});
define("Leaflet.model$MarkerOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerOptionsRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerOptionsRecordList = (function (_super) {
__extends(MarkerOptionsRecordList, _super);
function MarkerOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerOptionsRecordList.itemType = LeafletModel.MarkerOptionsRecord;
return MarkerOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MarkerOptionsRecordList = MarkerOptionsRecordList;

});
define("Leaflet.model$PopUpRecord", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PopUpRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PopUpRecord = (function (_super) {
__extends(PopUpRecord, _super);
function PopUpRecord(defaults) {
_super.apply(this, arguments);
}
PopUpRecord.attributesToDeclare = function () {
return [
this.attr("PopUp", "popUpAttr", "PopUp", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.PopUpRec());
}, true, LeafletModel.PopUpRec)
].concat(_super.attributesToDeclare.call(this));
};
PopUpRecord.fromStructure = function (str) {
return new PopUpRecord(new PopUpRecord.RecordClass({
popUpAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PopUpRecord._isAnonymousRecord = true;
PopUpRecord.UniqueId = "bc943b01-07ea-1a37-6078-1c8487f1c981";
PopUpRecord.init();
return PopUpRecord;
})(OS.DataTypes.GenericRecord);
LeafletModel.PopUpRecord = PopUpRecord;

});
define("Leaflet.model$MaxBoundsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MaxBoundsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MaxBoundsList = (function (_super) {
__extends(MaxBoundsList, _super);
function MaxBoundsList(defaults) {
_super.apply(this, arguments);
}
MaxBoundsList.itemType = LeafletModel.MaxBoundsRec;
return MaxBoundsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MaxBoundsList = MaxBoundsList;

});
define("Leaflet.model$PopUpRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PopUpRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PopUpRecordList = (function (_super) {
__extends(PopUpRecordList, _super);
function PopUpRecordList(defaults) {
_super.apply(this, arguments);
}
PopUpRecordList.itemType = LeafletModel.PopUpRecord;
return PopUpRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.PopUpRecordList = PopUpRecordList;

});
define("Leaflet.model$PathOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$PathOptionsRec"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var PathOptionsList = (function (_super) {
__extends(PathOptionsList, _super);
function PathOptionsList(defaults) {
_super.apply(this, arguments);
}
PathOptionsList.itemType = LeafletModel.PathOptionsRec;
return PathOptionsList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.PathOptionsList = PathOptionsList;

});
define("Leaflet.model$MarkerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.model$MarkerRecord"], function (exports, OutSystems, LeafletModel) {
var OS = OutSystems.Internal;
var MarkerRecordList = (function (_super) {
__extends(MarkerRecordList, _super);
function MarkerRecordList(defaults) {
_super.apply(this, arguments);
}
MarkerRecordList.itemType = LeafletModel.MarkerRecord;
return MarkerRecordList;
})(OS.DataTypes.GenericRecordList);
LeafletModel.MarkerRecordList = MarkerRecordList;

});
define("Leaflet.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LeafletModel = exports;
Object.defineProperty(LeafletModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["8f4c2781-a82b-4ebc-8d2b-11db8f2a1464"];
}
});

LeafletModel.staticEntities = {};
});
