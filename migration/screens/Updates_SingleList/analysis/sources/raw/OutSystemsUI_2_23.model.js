define("OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigRec = (function (_super) {
__extends(RangeSlider_InternalConfigRec, _super);
function RangeSlider_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("StartingValueFrom", "startingValueFromAttr", "StartingValueFrom", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("StartingValueTo", "startingValueToAttr", "StartingValueTo", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(1);
}, true), 
this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.orientation.horizontal;
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "100%";
}, true), 
this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("InitialValueFrom", "initialValueFromAttr", "InitialValueFrom", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InitialValueTo", "initialValueToAttr", "InitialValueTo", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSlider_InternalConfigRec.init();
return RangeSlider_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSlider_InternalConfigRec = RangeSlider_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$RangeSlider_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigRecord = (function (_super) {
__extends(RangeSlider_InternalConfigRecord, _super);
function RangeSlider_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("RangeSlider_InternalConfig", "rangeSlider_InternalConfigAttr", "RangeSlider_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RangeSlider_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.RangeSlider_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSlider_InternalConfigRecord.fromStructure = function (str) {
return new RangeSlider_InternalConfigRecord(new RangeSlider_InternalConfigRecord.RecordClass({
rangeSlider_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSlider_InternalConfigRecord._isAnonymousRecord = true;
RangeSlider_InternalConfigRecord.UniqueId = "934d38fd-f2a7-58a2-8806-9624e0bf9f61";
RangeSlider_InternalConfigRecord.init();
return RangeSlider_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSlider_InternalConfigRecord = RangeSlider_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$RangeSlider_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigRecordList = (function (_super) {
__extends(RangeSlider_InternalConfigRecordList, _super);
function RangeSlider_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.RangeSlider_InternalConfigRecord;
return RangeSlider_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSlider_InternalConfigRecordList = RangeSlider_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsRec = (function (_super) {
__extends(AccordionItem_InternalConfigsRec, _super);
function AccordionItem_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartsExpanded", "startsExpandedAttr", "StartsExpanded", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Icon", "iconAttr", "Icon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconPosition", "iconPositionAttr", "IconPosition", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccordionItem_InternalConfigsRec.init();
return AccordionItem_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec = AccordionItem_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsRecord = (function (_super) {
__extends(AccordionItem_InternalConfigsRecord, _super);
function AccordionItem_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("AccordionItem_InternalConfigs", "accordionItem_InternalConfigsAttr", "AccordionItem_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionItem_InternalConfigsRecord.fromStructure = function (str) {
return new AccordionItem_InternalConfigsRecord(new AccordionItem_InternalConfigsRecord.RecordClass({
accordionItem_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionItem_InternalConfigsRecord._isAnonymousRecord = true;
AccordionItem_InternalConfigsRecord.UniqueId = "0223c4cd-725c-44af-0a49-80e742f6fe29";
AccordionItem_InternalConfigsRecord.init();
return AccordionItem_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRecord = AccordionItem_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$CarouselNavigationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselNavigationRec = (function (_super) {
__extends(CarouselNavigationRec, _super);
function CarouselNavigationRec(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselNavigationRec.fromStructure = function (str) {
return new CarouselNavigationRec(new CarouselNavigationRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselNavigationRec.init();
return CarouselNavigationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselNavigationRec = CarouselNavigationRec;

});
define("OutSystemsUI_2_23.model$CarouselNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselNavigationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselNavigationRecord = (function (_super) {
__extends(CarouselNavigationRecord, _super);
function CarouselNavigationRecord(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecord.attributesToDeclare = function () {
return [
this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselNavigationRec());
}, true, OutSystemsUI_2_23Model.CarouselNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselNavigationRecord.fromStructure = function (str) {
return new CarouselNavigationRecord(new CarouselNavigationRecord.RecordClass({
carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselNavigationRecord._isAnonymousRecord = true;
CarouselNavigationRecord.UniqueId = "028f51a0-0fe2-311d-d7c5-f7c724b87880";
CarouselNavigationRecord.init();
return CarouselNavigationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselNavigationRecord = CarouselNavigationRecord;

});
define("OutSystemsUI_2_23.model$AccordionIconTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeRec = (function (_super) {
__extends(AccordionIconTypeRec, _super);
function AccordionIconTypeRec(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRec.fromStructure = function (str) {
return new AccordionIconTypeRec(new AccordionIconTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRec.init();
return AccordionIconTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AccordionIconTypeRec = AccordionIconTypeRec;

});
define("OutSystemsUI_2_23.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionIconTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUI_2_23Model.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AccordionIconTypeList = AccordionIconTypeList;

});
define("OutSystemsUI_2_23.model$CarouselProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselProviderRec = (function (_super) {
__extends(CarouselProviderRec, _super);
function CarouselProviderRec(defaults) {
_super.apply(this, arguments);
}
CarouselProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselProviderRec.fromStructure = function (str) {
return new CarouselProviderRec(new CarouselProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselProviderRec.init();
return CarouselProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselProviderRec = CarouselProviderRec;

});
define("OutSystemsUI_2_23.model$CarouselProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselProviderList = (function (_super) {
__extends(CarouselProviderList, _super);
function CarouselProviderList(defaults) {
_super.apply(this, arguments);
}
CarouselProviderList.itemType = OutSystemsUI_2_23Model.CarouselProviderRec;
return CarouselProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselProviderList = CarouselProviderList;

});
define("OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigRec = (function (_super) {
__extends(ButtonLoading_InternalConfigRec, _super);
function ButtonLoading_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsLoading", "isLoadingAttr", "IsLoading", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowLoadingAndLabel", "showLoadingAndLabelAttr", "ShowLoadingAndLabel", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ButtonLoading_InternalConfigRec.init();
return ButtonLoading_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec = ButtonLoading_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigRecord = (function (_super) {
__extends(ButtonLoading_InternalConfigRecord, _super);
function ButtonLoading_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("ButtonLoading_InternalConfig", "buttonLoading_InternalConfigAttr", "ButtonLoading_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ButtonLoading_InternalConfigRecord.fromStructure = function (str) {
return new ButtonLoading_InternalConfigRecord(new ButtonLoading_InternalConfigRecord.RecordClass({
buttonLoading_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ButtonLoading_InternalConfigRecord._isAnonymousRecord = true;
ButtonLoading_InternalConfigRecord.UniqueId = "305d91d3-ab32-1f5d-9021-d40e0f8fe16a";
ButtonLoading_InternalConfigRecord.init();
return ButtonLoading_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRecord = ButtonLoading_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigRecordList = (function (_super) {
__extends(ButtonLoading_InternalConfigRecordList, _super);
function ButtonLoading_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRecord;
return ButtonLoading_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRecordList = ButtonLoading_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$VideoStateRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoStateRec = (function (_super) {
__extends(VideoStateRec, _super);
function VideoStateRec(defaults) {
_super.apply(this, arguments);
}
VideoStateRec.attributesToDeclare = function () {
return [
this.attr("State", "stateAttr", "State", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VideoStateRec.fromStructure = function (str) {
return new VideoStateRec(new VideoStateRec.RecordClass({
stateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VideoStateRec.init();
return VideoStateRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VideoStateRec = VideoStateRec;

});
define("OutSystemsUI_2_23.model$VideoStateRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoStateRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoStateRecord = (function (_super) {
__extends(VideoStateRecord, _super);
function VideoStateRecord(defaults) {
_super.apply(this, arguments);
}
VideoStateRecord.attributesToDeclare = function () {
return [
this.attr("VideoState", "videoStateAttr", "VideoState", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.VideoStateRec());
}, true, OutSystemsUI_2_23Model.VideoStateRec)
].concat(_super.attributesToDeclare.call(this));
};
VideoStateRecord.fromStructure = function (str) {
return new VideoStateRecord(new VideoStateRecord.RecordClass({
videoStateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VideoStateRecord._isAnonymousRecord = true;
VideoStateRecord.UniqueId = "06751501-8500-bc52-bee8-624fc5612b0f";
VideoStateRecord.init();
return VideoStateRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VideoStateRecord = VideoStateRecord;

});
define("OutSystemsUI_2_23.model$AutoplayRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AutoplayRec = (function (_super) {
__extends(AutoplayRec, _super);
function AutoplayRec(defaults) {
_super.apply(this, arguments);
}
AutoplayRec.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRec.fromStructure = function (str) {
return new AutoplayRec(new AutoplayRec.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRec.init();
return AutoplayRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AutoplayRec = AutoplayRec;

});
define("OutSystemsUI_2_23.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AutoplayRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AutoplayRecord = (function (_super) {
__extends(AutoplayRecord, _super);
function AutoplayRecord(defaults) {
_super.apply(this, arguments);
}
AutoplayRecord.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AutoplayRec());
}, true, OutSystemsUI_2_23Model.AutoplayRec)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRecord.fromStructure = function (str) {
return new AutoplayRecord(new AutoplayRecord.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRecord._isAnonymousRecord = true;
AutoplayRecord.UniqueId = "4d8d02fe-2a37-026e-c58d-2baee78c65a9";
AutoplayRecord.init();
return AutoplayRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AutoplayRecord = AutoplayRecord;

});
define("OutSystemsUI_2_23.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AutoplayRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = OutSystemsUI_2_23Model.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AutoplayRecordList = AutoplayRecordList;

});
define("OutSystemsUI_2_23.model$Search_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Search_InternalConfigRec = (function (_super) {
__extends(Search_InternalConfigRec, _super);
function Search_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Search_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Search_InternalConfigRec.init();
return Search_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Search_InternalConfigRec = Search_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$RangeSliderTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderTypeRec = (function (_super) {
__extends(RangeSliderTypeRec, _super);
function RangeSliderTypeRec(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeRec.attributesToDeclare = function () {
return [
this.attr("Mode", "modeAttr", "Mode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderTypeRec.fromStructure = function (str) {
return new RangeSliderTypeRec(new RangeSliderTypeRec.RecordClass({
modeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderTypeRec.init();
return RangeSliderTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSliderTypeRec = RangeSliderTypeRec;

});
define("OutSystemsUI_2_23.model$RangeSliderTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderTypeRecord = (function (_super) {
__extends(RangeSliderTypeRecord, _super);
function RangeSliderTypeRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderType", "rangeSliderTypeAttr", "RangeSliderType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RangeSliderTypeRec());
}, true, OutSystemsUI_2_23Model.RangeSliderTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderTypeRecord.fromStructure = function (str) {
return new RangeSliderTypeRecord(new RangeSliderTypeRecord.RecordClass({
rangeSliderTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderTypeRecord._isAnonymousRecord = true;
RangeSliderTypeRecord.UniqueId = "07138dcb-9102-935e-02e3-cdaaa16b32dc";
RangeSliderTypeRecord.init();
return RangeSliderTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSliderTypeRecord = RangeSliderTypeRecord;

});
define("OutSystemsUI_2_23.model$NotificationOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRec = (function (_super) {
__extends(NotificationOptionalConfigsRec, _super);
function NotificationOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NotificationOptionalConfigsRec.init();
return NotificationOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.NotificationOptionalConfigsRec = NotificationOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$NotificationOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NotificationOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecord = (function (_super) {
__extends(NotificationOptionalConfigsRecord, _super);
function NotificationOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.NotificationOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.NotificationOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationOptionalConfigsRecord.fromStructure = function (str) {
return new NotificationOptionalConfigsRecord(new NotificationOptionalConfigsRecord.RecordClass({
notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationOptionalConfigsRecord._isAnonymousRecord = true;
NotificationOptionalConfigsRecord.UniqueId = "0725f99b-e0dc-e885-bf1d-7878b44e5fe9";
NotificationOptionalConfigsRecord.init();
return NotificationOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.NotificationOptionalConfigsRecord = NotificationOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$DatePickerWeekDayRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRec = (function (_super) {
__extends(DatePickerWeekDayRec, _super);
function DatePickerWeekDayRec(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRec.attributesToDeclare = function () {
return [
this.attr("WeekDay", "weekDayAttr", "WeekDay", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerWeekDayRec.fromStructure = function (str) {
return new DatePickerWeekDayRec(new DatePickerWeekDayRec.RecordClass({
weekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerWeekDayRec.init();
return DatePickerWeekDayRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerWeekDayRec = DatePickerWeekDayRec;

});
define("OutSystemsUI_2_23.model$DatePickerWeekDayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerWeekDayRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecord = (function (_super) {
__extends(DatePickerWeekDayRecord, _super);
function DatePickerWeekDayRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerWeekDayRec());
}, true, OutSystemsUI_2_23Model.DatePickerWeekDayRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerWeekDayRecord.fromStructure = function (str) {
return new DatePickerWeekDayRecord(new DatePickerWeekDayRecord.RecordClass({
datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerWeekDayRecord._isAnonymousRecord = true;
DatePickerWeekDayRecord.UniqueId = "cf12da95-3fe9-1e89-7854-7510d8f66759";
DatePickerWeekDayRecord.init();
return DatePickerWeekDayRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerWeekDayRecord = DatePickerWeekDayRecord;

});
define("OutSystemsUI_2_23.model$DatePickerWeekDayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerWeekDayRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecordList = (function (_super) {
__extends(DatePickerWeekDayRecordList, _super);
function DatePickerWeekDayRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecordList.itemType = OutSystemsUI_2_23Model.DatePickerWeekDayRecord;
return DatePickerWeekDayRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerWeekDayRecordList = DatePickerWeekDayRecordList;

});
define("OutSystemsUI_2_23.model$Accordion_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsRec = (function (_super) {
__extends(Accordion_InternalConfigsRec, _super);
function Accordion_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MultipleItems", "multipleItemsAttr", "MultipleItems", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Accordion_InternalConfigsRec.init();
return Accordion_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Accordion_InternalConfigsRec = Accordion_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$Accordion_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsRecord = (function (_super) {
__extends(Accordion_InternalConfigsRecord, _super);
function Accordion_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("Accordion_InternalConfigs", "accordion_InternalConfigsAttr", "Accordion_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Accordion_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.Accordion_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
Accordion_InternalConfigsRecord.fromStructure = function (str) {
return new Accordion_InternalConfigsRecord(new Accordion_InternalConfigsRecord.RecordClass({
accordion_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Accordion_InternalConfigsRecord._isAnonymousRecord = true;
Accordion_InternalConfigsRecord.UniqueId = "07de4d23-2068-1075-d33f-5d4d03088155";
Accordion_InternalConfigsRecord.init();
return Accordion_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Accordion_InternalConfigsRecord = Accordion_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$Tabs_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigRec = (function (_super) {
__extends(Tabs_InternalConfigRec, _super);
function Tabs_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartingTab", "startingTabAttr", "StartingTab", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TabsOrientation", "tabsOrientationAttr", "TabsOrientation", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.orientation.horizontal;
}, true), 
this.attr("TabsVerticalPosition", "tabsVerticalPositionAttr", "TabsVerticalPosition", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.direction.left;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function () {
return "auto";
}, true), 
this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Tabs_InternalConfigRec.init();
return Tabs_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Tabs_InternalConfigRec = Tabs_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$AnimationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimationTypeRec = (function (_super) {
__extends(AnimationTypeRec, _super);
function AnimationTypeRec(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRec.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRec.fromStructure = function (str) {
return new AnimationTypeRec(new AnimationTypeRec.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRec.init();
return AnimationTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AnimationTypeRec = AnimationTypeRec;

});
define("OutSystemsUI_2_23.model$Accordion_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsRecordList = (function (_super) {
__extends(Accordion_InternalConfigsRecordList, _super);
function Accordion_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.Accordion_InternalConfigsRecord;
return Accordion_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Accordion_InternalConfigsRecordList = Accordion_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$Gallery_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigRec = (function (_super) {
__extends(Gallery_InternalConfigRec, _super);
function Gallery_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RowItemsPhone", "rowItemsPhoneAttr", "RowItemsPhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("RowItemsTablet", "rowItemsTabletAttr", "RowItemsTablet", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RowItemsDesktop", "rowItemsDesktopAttr", "RowItemsDesktop", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Gallery_InternalConfigRec.init();
return Gallery_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Gallery_InternalConfigRec = Gallery_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$Gallery_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Gallery_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigRecord = (function (_super) {
__extends(Gallery_InternalConfigRecord, _super);
function Gallery_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Gallery_InternalConfig", "gallery_InternalConfigAttr", "Gallery_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Gallery_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Gallery_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Gallery_InternalConfigRecord.fromStructure = function (str) {
return new Gallery_InternalConfigRecord(new Gallery_InternalConfigRecord.RecordClass({
gallery_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Gallery_InternalConfigRecord._isAnonymousRecord = true;
Gallery_InternalConfigRecord.UniqueId = "0b46d5bf-65a5-fae3-b129-cb774515df5a";
Gallery_InternalConfigRecord.init();
return Gallery_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Gallery_InternalConfigRecord = Gallery_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$RangeSliderProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderProviderRec = (function (_super) {
__extends(RangeSliderProviderRec, _super);
function RangeSliderProviderRec(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderProviderRec.fromStructure = function (str) {
return new RangeSliderProviderRec(new RangeSliderProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderProviderRec.init();
return RangeSliderProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSliderProviderRec = RangeSliderProviderRec;

});
define("OutSystemsUI_2_23.model$DropdownItemRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownItemRec = (function (_super) {
__extends(DropdownItemRec, _super);
function DropdownItemRec(defaults) {
_super.apply(this, arguments);
}
DropdownItemRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRec.init();
return DropdownItemRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownItemRec = DropdownItemRec;

});
define("OutSystemsUI_2_23.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownItemRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownItemRecord = (function (_super) {
__extends(DropdownItemRecord, _super);
function DropdownItemRecord(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecord.attributesToDeclare = function () {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownItemRec());
}, true, OutSystemsUI_2_23Model.DropdownItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRecord.fromStructure = function (str) {
return new DropdownItemRecord(new DropdownItemRecord.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownItemRecord._isAnonymousRecord = true;
DropdownItemRecord.UniqueId = "836e37bf-e317-8abb-66d9-af9883b74be2";
DropdownItemRecord.init();
return DropdownItemRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownItemRecord = DropdownItemRecord;

});
define("OutSystemsUI_2_23.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownItemRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = OutSystemsUI_2_23Model.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownItemRecordList = DropdownItemRecordList;

});
define("OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigRec = (function (_super) {
__extends(AnimatedLabel_InternalConfigRec, _super);
function AnimatedLabel_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AnimatedLabel_InternalConfigRec.init();
return AnimatedLabel_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRec = AnimatedLabel_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigRecord = (function (_super) {
__extends(AnimatedLabel_InternalConfigRecord, _super);
function AnimatedLabel_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("AnimatedLabel_InternalConfig", "animatedLabel_InternalConfigAttr", "AnimatedLabel_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimatedLabel_InternalConfigRecord.fromStructure = function (str) {
return new AnimatedLabel_InternalConfigRecord(new AnimatedLabel_InternalConfigRecord.RecordClass({
animatedLabel_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimatedLabel_InternalConfigRecord._isAnonymousRecord = true;
AnimatedLabel_InternalConfigRecord.UniqueId = "0ef20299-7c1b-4604-ab7f-5c9e92c8cfa1";
AnimatedLabel_InternalConfigRecord.init();
return AnimatedLabel_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRecord = AnimatedLabel_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$DatePickerProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerProviderRec = (function (_super) {
__extends(DatePickerProviderRec, _super);
function DatePickerProviderRec(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerProviderRec.fromStructure = function (str) {
return new DatePickerProviderRec(new DatePickerProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerProviderRec.init();
return DatePickerProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerProviderRec = DatePickerProviderRec;

});
define("OutSystemsUI_2_23.model$DatePickerProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerProviderRecord = (function (_super) {
__extends(DatePickerProviderRecord, _super);
function DatePickerProviderRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerProvider", "datePickerProviderAttr", "DatePickerProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerProviderRec());
}, true, OutSystemsUI_2_23Model.DatePickerProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerProviderRecord.fromStructure = function (str) {
return new DatePickerProviderRecord(new DatePickerProviderRecord.RecordClass({
datePickerProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerProviderRecord._isAnonymousRecord = true;
DatePickerProviderRecord.UniqueId = "442570bc-8367-732c-04d9-adbad324d9c1";
DatePickerProviderRecord.init();
return DatePickerProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerProviderRecord = DatePickerProviderRecord;

});
define("OutSystemsUI_2_23.model$DatePickerProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerProviderRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerProviderRecordList = (function (_super) {
__extends(DatePickerProviderRecordList, _super);
function DatePickerProviderRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderRecordList.itemType = OutSystemsUI_2_23Model.DatePickerProviderRecord;
return DatePickerProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerProviderRecordList = DatePickerProviderRecordList;

});
define("OutSystemsUI_2_23.model$MonthYearRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthYearRec = (function (_super) {
__extends(MonthYearRec, _super);
function MonthYearRec(defaults) {
_super.apply(this, arguments);
}
MonthYearRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthYearRec.init();
return MonthYearRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthYearRec = MonthYearRec;

});
define("OutSystemsUI_2_23.model$MonthYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthYearRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthYearRecord = (function (_super) {
__extends(MonthYearRecord, _super);
function MonthYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthYearRec());
}, true, OutSystemsUI_2_23Model.MonthYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthYearRecord.fromStructure = function (str) {
return new MonthYearRecord(new MonthYearRecord.RecordClass({
monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthYearRecord._isAnonymousRecord = true;
MonthYearRecord.UniqueId = "bba6f7c5-dd8b-a4ef-c410-e03b838bb02a";
MonthYearRecord.init();
return MonthYearRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthYearRecord = MonthYearRecord;

});
define("OutSystemsUI_2_23.model$MonthYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthYearRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthYearRecordList = (function (_super) {
__extends(MonthYearRecordList, _super);
function MonthYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthYearRecordList.itemType = OutSystemsUI_2_23Model.MonthYearRecord;
return MonthYearRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthYearRecordList = MonthYearRecordList;

});
define("OutSystemsUI_2_23.model$Carousel_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigRec = (function (_super) {
__extends(Carousel_InternalConfigRec, _super);
function Carousel_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Navigation", "navigationAttr", "Navigation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemsDesktop", "itemsDesktopAttr", "ItemsDesktop", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("ItemsTablet", "itemsTabletAttr", "ItemsTablet", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("ItemsPhone", "itemsPhoneAttr", "ItemsPhone", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Padding", "paddingAttr", "Padding", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, true), 
this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Carousel_InternalConfigRec.init();
return Carousel_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Carousel_InternalConfigRec = Carousel_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$Carousel_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Carousel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigRecord = (function (_super) {
__extends(Carousel_InternalConfigRecord, _super);
function Carousel_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Carousel_InternalConfig", "carousel_InternalConfigAttr", "Carousel_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Carousel_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Carousel_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Carousel_InternalConfigRecord.fromStructure = function (str) {
return new Carousel_InternalConfigRecord(new Carousel_InternalConfigRecord.RecordClass({
carousel_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Carousel_InternalConfigRecord._isAnonymousRecord = true;
Carousel_InternalConfigRecord.UniqueId = "61b73c91-9ddf-616e-204a-dec213d593b1";
Carousel_InternalConfigRecord.init();
return Carousel_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Carousel_InternalConfigRecord = Carousel_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$Carousel_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Carousel_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigRecordList = (function (_super) {
__extends(Carousel_InternalConfigRecordList, _super);
function Carousel_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Carousel_InternalConfigRecord;
return Carousel_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Carousel_InternalConfigRecordList = Carousel_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRec = (function (_super) {
__extends(BottomSheet_InternalConfigRec, _super);
function BottomSheet_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.shape.softRounded;
}, true), 
this.attr("ShowHandler", "showHandlerAttr", "ShowHandler", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BottomSheet_InternalConfigRec.init();
return BottomSheet_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec = BottomSheet_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$BottomSheet_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRecord = (function (_super) {
__extends(BottomSheet_InternalConfigRecord, _super);
function BottomSheet_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("BottomSheet_InternalConfig", "bottomSheet_InternalConfigAttr", "BottomSheet_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
BottomSheet_InternalConfigRecord.fromStructure = function (str) {
return new BottomSheet_InternalConfigRecord(new BottomSheet_InternalConfigRecord.RecordClass({
bottomSheet_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BottomSheet_InternalConfigRecord._isAnonymousRecord = true;
BottomSheet_InternalConfigRecord.UniqueId = "152ef76f-736e-4d20-0799-a81c32df70db";
BottomSheet_InternalConfigRecord.init();
return BottomSheet_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BottomSheet_InternalConfigRecord = BottomSheet_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$BottomSheet_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRecordList = (function (_super) {
__extends(BottomSheet_InternalConfigRecordList, _super);
function BottomSheet_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.BottomSheet_InternalConfigRecord;
return BottomSheet_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BottomSheet_InternalConfigRecordList = BottomSheet_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$DropdownOptionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionRec = (function (_super) {
__extends(DropdownOptionRec, _super);
function DropdownOptionRec(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ImageUrlOrIconClass", "imageUrlOrIconClassAttr", "image_url_or_class", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GroupName", "groupNameAttr", "group_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionRec.init();
return DropdownOptionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownOptionRec = DropdownOptionRec;

});
define("OutSystemsUI_2_23.model$DropdownOptionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionList = (function (_super) {
__extends(DropdownOptionList, _super);
function DropdownOptionList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionList.itemType = OutSystemsUI_2_23Model.DropdownOptionRec;
return DropdownOptionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownOptionList = DropdownOptionList;

});
define("OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionList"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsRec = (function (_super) {
__extends(DropdownSearch_InternalConfigsRec, _super);
function DropdownSearch_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OptionsList", "optionsListAttr", "OptionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionList());
}, true, OutSystemsUI_2_23Model.DropdownOptionList), 
this.attr("StartingSelection", "startingSelectionAttr", "StartingSelection", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionList());
}, true, OutSystemsUI_2_23Model.DropdownOptionList), 
this.attr("Prompt", "promptAttr", "Prompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Select an item";
}, true), 
this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SanitizeDropdownValues", "sanitizeDropdownValuesAttr", "SanitizeDropdownValues", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownSearch_InternalConfigsRec.init();
return DropdownSearch_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRec = DropdownSearch_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsList = (function (_super) {
__extends(DropdownSearch_InternalConfigsList, _super);
function DropdownSearch_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRec;
return DropdownSearch_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsList = DropdownSearch_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AnimationTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AnimationTypeRec());
}, true, OutSystemsUI_2_23Model.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "e1fd020e-ccea-bd6a-c94e-23efd9509c58";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AnimationTypeRecord = AnimationTypeRecord;

});
define("OutSystemsUI_2_23.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AnimationTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = OutSystemsUI_2_23Model.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("OutSystemsUI_2_23.model$FlatpickrConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRec = (function (_super) {
__extends(FlatpickrConfigsRec, _super);
function FlatpickrConfigsRec(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRec.attributesToDeclare = function () {
return [
this.attr("altInputClass", "altInputClassAttr", "altInputClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true), 
this.attr("allowInvalidPreload", "allowInvalidPreloadAttr", "allowInvalidPreload", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("ariaDateFormat", "ariaDateFormatAttr", "ariaDateFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true), 
this.attr("clickOpens", "clickOpensAttr", "clickOpens", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("enableSeconds", "enableSecondsAttr", "enableSeconds", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("hourIncrement", "hourIncrementAttr", "hourIncrement", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("inline", "inlineAttr", "inline", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("minuteIncrement", "minuteIncrementAttr", "minuteIncrement", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("nextArrow", "nextArrowAttr", "nextArrow", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true), 
this.attr("position", "positionAttr", "position", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true), 
this.attr("positionElement", "positionElementAttr", "positionElement", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true), 
this.attr("prevArrow", "prevArrowAttr", "prevArrow", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true), 
this.attr("shorthandCurrentMonth", "shorthandCurrentMonthAttr", "shorthandCurrentMonth", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("static", "staticAttr", "static", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("showMonths", "showMonthsAttr", "showMonths", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("wrap", "wrapAttr", "wrap", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("monthSelectorType", "monthSelectorTypeAttr", "monthSelectorType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "undefined";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FlatpickrConfigsRec.init();
return FlatpickrConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.FlatpickrConfigsRec = FlatpickrConfigsRec;

});
define("OutSystemsUI_2_23.model$FlatpickrConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FlatpickrConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecord = (function (_super) {
__extends(FlatpickrConfigsRecord, _super);
function FlatpickrConfigsRecord(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecord.attributesToDeclare = function () {
return [
this.attr("FlatpickrConfigs", "flatpickrConfigsAttr", "FlatpickrConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.FlatpickrConfigsRec());
}, true, OutSystemsUI_2_23Model.FlatpickrConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
FlatpickrConfigsRecord.fromStructure = function (str) {
return new FlatpickrConfigsRecord(new FlatpickrConfigsRecord.RecordClass({
flatpickrConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FlatpickrConfigsRecord._isAnonymousRecord = true;
FlatpickrConfigsRecord.UniqueId = "13610d0b-a387-96eb-61d8-bc85795e3de9";
FlatpickrConfigsRecord.init();
return FlatpickrConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.FlatpickrConfigsRecord = FlatpickrConfigsRecord;

});
define("OutSystemsUI_2_23.model$MenuActionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MenuActionRec = (function (_super) {
__extends(MenuActionRec, _super);
function MenuActionRec(defaults) {
_super.apply(this, arguments);
}
MenuActionRec.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRec.fromStructure = function (str) {
return new MenuActionRec(new MenuActionRec.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRec.init();
return MenuActionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MenuActionRec = MenuActionRec;

});
define("OutSystemsUI_2_23.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MenuActionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MenuActionRec());
}, true, OutSystemsUI_2_23Model.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "152b85d3-e824-823c-c634-7a228030f9b6";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MenuActionRecord = MenuActionRecord;

});
define("OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRec = (function (_super) {
__extends(DropdownOptionalConfigsRec, _super);
function DropdownOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "There are no options to show.";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Search...";
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "There are no options to show.";
}, true), 
this.attr("SanitizeDropdownValues", "sanitizeDropdownValuesAttr", "SanitizeDropdownValues", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionalConfigsRec.init();
return DropdownOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownOptionalConfigsRec = DropdownOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$DropdownOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsList = (function (_super) {
__extends(DropdownOptionalConfigsList, _super);
function DropdownOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownOptionalConfigsRec;
return DropdownOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownOptionalConfigsList = DropdownOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OverflowMenu_InternalConfigsRec = (function (_super) {
__extends(OverflowMenu_InternalConfigsRec, _super);
function OverflowMenu_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
OverflowMenu_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BalloonPosition", "balloonPositionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.floatingPosition.auto;
}, true), 
this.attr("BalloonShape", "balloonShapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.shape.softRounded;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OverflowMenu_InternalConfigsRec.init();
return OverflowMenu_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRec = OverflowMenu_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OverflowMenu_InternalConfigsRecord = (function (_super) {
__extends(OverflowMenu_InternalConfigsRecord, _super);
function OverflowMenu_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
OverflowMenu_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("OverflowMenu_InternalConfigs", "overflowMenu_InternalConfigsAttr", "OverflowMenu_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
OverflowMenu_InternalConfigsRecord.fromStructure = function (str) {
return new OverflowMenu_InternalConfigsRecord(new OverflowMenu_InternalConfigsRecord.RecordClass({
overflowMenu_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OverflowMenu_InternalConfigsRecord._isAnonymousRecord = true;
OverflowMenu_InternalConfigsRecord.UniqueId = "15f7afe3-0cbb-45c4-3c7b-10de9340e90d";
OverflowMenu_InternalConfigsRecord.init();
return OverflowMenu_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRecord = OverflowMenu_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$MonthOrderYearRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthOrderYearRec = (function (_super) {
__extends(MonthOrderYearRec, _super);
function MonthOrderYearRec(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MonthOrder", "monthOrderAttr", "MonthOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthOrderYearRec.init();
return MonthOrderYearRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthOrderYearRec = MonthOrderYearRec;

});
define("OutSystemsUI_2_23.model$MonthOrderYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthOrderYearRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthOrderYearList = (function (_super) {
__extends(MonthOrderYearList, _super);
function MonthOrderYearList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearList.itemType = OutSystemsUI_2_23Model.MonthOrderYearRec;
return MonthOrderYearList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthOrderYearList = MonthOrderYearList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextText1Record", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextText1Record = (function (_super) {
__extends(TextTextTextTextTextTextText1Record, _super);
function TextTextTextTextTextTextText1Record(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextText1Record.attributesToDeclare = function () {
return [
this.attr("Weekday1", "weekday1Attr", "Weekday1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekday2", "weekday2Attr", "Weekday2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekday3", "weekday3Attr", "Weekday3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekday4", "weekday4Attr", "Weekday4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekday5", "weekday5Attr", "Weekday5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekday6", "weekday6Attr", "Weekday6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekday7", "weekday7Attr", "Weekday7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextText1Record._isAnonymousRecord = true;
TextTextTextTextTextTextText1Record.UniqueId = "d3d7d244-571e-d038-dbfe-e008e77e8c11";
TextTextTextTextTextTextText1Record.init();
return TextTextTextTextTextTextText1Record;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextTextTextTextTextTextText1Record = TextTextTextTextTextTextText1Record;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextText1Record"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextRecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextRecordList, _super);
function TextTextTextTextTextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextRecordList.itemType = OutSystemsUI_2_23Model.TextTextTextTextTextTextText1Record;
return TextTextTextTextTextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextRecordList = TextTextTextTextTextTextTextRecordList;

});
define("OutSystemsUI_2_23.model$Notification_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Notification_InternalConfigRec = (function (_super) {
__extends(Notification_InternalConfigRec, _super);
function Notification_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartsOpen", "startsOpenAttr", "StartsOpen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Notification_InternalConfigRec.init();
return Notification_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Notification_InternalConfigRec = Notification_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$NotificationOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NotificationOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsList = (function (_super) {
__extends(NotificationOptionalConfigsList, _super);
function NotificationOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsList.itemType = OutSystemsUI_2_23Model.NotificationOptionalConfigsRec;
return NotificationOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.NotificationOptionalConfigsList = NotificationOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$SpeedRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpeedRec = (function (_super) {
__extends(SpeedRec, _super);
function SpeedRec(defaults) {
_super.apply(this, arguments);
}
SpeedRec.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRec.fromStructure = function (str) {
return new SpeedRec(new SpeedRec.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRec.init();
return SpeedRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SpeedRec = SpeedRec;

});
define("OutSystemsUI_2_23.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SpeedRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SpeedRec());
}, true, OutSystemsUI_2_23Model.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "a0f9b9f4-249b-a56a-b8b1-fc85548aeb7f";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SpeedRecord = SpeedRecord;

});
define("OutSystemsUI_2_23.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SpeedRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = OutSystemsUI_2_23Model.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SpeedRecordList = SpeedRecordList;

});
define("OutSystemsUI_2_23.model$GradientRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientRec = (function (_super) {
__extends(GradientRec, _super);
function GradientRec(defaults) {
_super.apply(this, arguments);
}
GradientRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GradientRec.fromStructure = function (str) {
return new GradientRec(new GradientRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientRec.init();
return GradientRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.GradientRec = GradientRec;

});
define("OutSystemsUI_2_23.model$GradientRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GradientRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientRecord = (function (_super) {
__extends(GradientRecord, _super);
function GradientRecord(defaults) {
_super.apply(this, arguments);
}
GradientRecord.attributesToDeclare = function () {
return [
this.attr("Gradient", "gradientAttr", "Gradient", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.GradientRec());
}, true, OutSystemsUI_2_23Model.GradientRec)
].concat(_super.attributesToDeclare.call(this));
};
GradientRecord.fromStructure = function (str) {
return new GradientRecord(new GradientRecord.RecordClass({
gradientAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientRecord._isAnonymousRecord = true;
GradientRecord.UniqueId = "18ec3ef7-706f-2e36-3ef2-4d8d4e2fbbe3";
GradientRecord.init();
return GradientRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.GradientRecord = GradientRecord;

});
define("OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OverflowMenu_InternalConfigsList = (function (_super) {
__extends(OverflowMenu_InternalConfigsList, _super);
function OverflowMenu_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
OverflowMenu_InternalConfigsList.itemType = OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRec;
return OverflowMenu_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsList = OverflowMenu_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$AlertRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AlertRec = (function (_super) {
__extends(AlertRec, _super);
function AlertRec(defaults) {
_super.apply(this, arguments);
}
AlertRec.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AlertRec.fromStructure = function (str) {
return new AlertRec(new AlertRec.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRec.init();
return AlertRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AlertRec = AlertRec;

});
define("OutSystemsUI_2_23.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AlertRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUI_2_23Model.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AlertList = AlertList;

});
define("OutSystemsUI_2_23.model$DatePicker_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigRec = (function (_super) {
__extends(DatePicker_InternalConfigRec, _super);
function DatePicker_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialDate", "initialDateAttr", "InitialDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeFormat", "timeFormatAttr", "TimeFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.datePickerTimeFormat.disabled;
}, true), 
this.attr("ShowTodayButton", "showTodayButtonAttr", "ShowTodayButton", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePicker_InternalConfigRec.init();
return DatePicker_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePicker_InternalConfigRec = DatePicker_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$DatePicker_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigRecord = (function (_super) {
__extends(DatePicker_InternalConfigRecord, _super);
function DatePicker_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("DatePicker_InternalConfig", "datePicker_InternalConfigAttr", "DatePicker_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePicker_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.DatePicker_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePicker_InternalConfigRecord.fromStructure = function (str) {
return new DatePicker_InternalConfigRecord(new DatePicker_InternalConfigRecord.RecordClass({
datePicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePicker_InternalConfigRecord._isAnonymousRecord = true;
DatePicker_InternalConfigRecord.UniqueId = "c18bbbae-fe70-7f39-9fea-138031b57931";
DatePicker_InternalConfigRecord.init();
return DatePicker_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePicker_InternalConfigRecord = DatePicker_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$DatePicker_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePicker_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigRecordList = (function (_super) {
__extends(DatePicker_InternalConfigRecordList, _super);
function DatePicker_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.DatePicker_InternalConfigRecord;
return DatePicker_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePicker_InternalConfigRecordList = DatePicker_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColorRec = (function (_super) {
__extends(ColorRec, _super);
function ColorRec(defaults) {
_super.apply(this, arguments);
}
ColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ColorRec.init();
return ColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ColorRec = ColorRec;

});
define("OutSystemsUI_2_23.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ColorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUI_2_23Model.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ColorList = ColorList;

});
define("OutSystemsUI_2_23.model$SplideConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideConfigsRec = (function (_super) {
__extends(SplideConfigsRec, _super);
function SplideConfigsRec(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRec.attributesToDeclare = function () {
return [
this.attr("role", "roleAttr", "role", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("label", "labelAttr", "label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("labelledby", "labelledbyAttr", "labelledby", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("rewind", "rewindAttr", "rewind", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("speed", "speedAttr", "speed", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("rewindSpeed", "rewindSpeedAttr", "rewindSpeed", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("rewindByDrag", "rewindByDragAttr", "rewindByDrag", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("width", "widthAttr", "width", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("fixedWidth", "fixedWidthAttr", "fixedWidth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("fixedHeight", "fixedHeightAttr", "fixedHeight", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("autoWidth", "autoWidthAttr", "autoWidth", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("perMove", "perMoveAttr", "perMove", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("clones", "clonesAttr", "clones", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("cloneStatus", "cloneStatusAttr", "cloneStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("paginationDirection", "paginationDirectionAttr", "paginationDirection", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("easing", "easingAttr", "easing", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("noDrag", "noDragAttr", "noDrag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("flickPower", "flickPowerAttr", "flickPower", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("flickMaxPages", "flickMaxPagesAttr", "flickMaxPages", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("waitForTransition", "waitForTransitionAttr", "waitForTransition", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("arrowPath", "arrowPathAttr", "arrowPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("interval", "intervalAttr", "interval", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("pauseOnHover", "pauseOnHoverAttr", "pauseOnHover", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("pauseOnFocus", "pauseOnFocusAttr", "pauseOnFocus", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("resetProgress", "resetProgressAttr", "resetProgress", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("lazyLoad", "lazyLoadAttr", "lazyLoad", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("preloadPages", "preloadPagesAttr", "preloadPages", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("wheel", "wheelAttr", "wheel", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("wheelMinThreshold", "wheelMinThresholdAttr", "wheelMinThreshold", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("wheelSleep", "wheelSleepAttr", "wheelSleep", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("releaseWheel", "releaseWheelAttr", "releaseWheel", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("slideFocus", "slideFocusAttr", "slideFocus", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("focusableNodes", "focusableNodesAttr", "focusableNodes", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isNavigation", "isNavigationAttr", "isNavigation", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("trimSpace", "trimSpaceAttr", "trimSpace", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("updateOnMove", "updateOnMoveAttr", "updateOnMove", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("mediaQuery", "mediaQueryAttr", "mediaQuery", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("live", "liveAttr", "live", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("destroy", "destroyAttr", "destroy", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("omitEnd", "omitEndAttr", "omitEnd", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SplideConfigsRec.init();
return SplideConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SplideConfigsRec = SplideConfigsRec;

});
define("OutSystemsUI_2_23.model$SplideConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideConfigsRecord = (function (_super) {
__extends(SplideConfigsRecord, _super);
function SplideConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SplideConfigs", "splideConfigsAttr", "SplideConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SplideConfigsRec());
}, true, OutSystemsUI_2_23Model.SplideConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideConfigsRecord.fromStructure = function (str) {
return new SplideConfigsRecord(new SplideConfigsRecord.RecordClass({
splideConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideConfigsRecord._isAnonymousRecord = true;
SplideConfigsRecord.UniqueId = "b477490e-7b02-6d75-67b8-8d2606fc73aa";
SplideConfigsRecord.init();
return SplideConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SplideConfigsRecord = SplideConfigsRecord;

});
define("OutSystemsUI_2_23.model$SplideConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideConfigsRecordList = (function (_super) {
__extends(SplideConfigsRecordList, _super);
function SplideConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecordList.itemType = OutSystemsUI_2_23Model.SplideConfigsRecord;
return SplideConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SplideConfigsRecordList = SplideConfigsRecordList;

});
define("OutSystemsUI_2_23.model$Rating_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Rating_InternalConfigRec = (function (_super) {
__extends(Rating_InternalConfigRec, _super);
function Rating_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RatingValue", "ratingValueAttr", "RatingValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RatingScale", "ratingScaleAttr", "RatingScale", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Rating_InternalConfigRec.init();
return Rating_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Rating_InternalConfigRec = Rating_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$Rating_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Rating_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Rating_InternalConfigRecord = (function (_super) {
__extends(Rating_InternalConfigRecord, _super);
function Rating_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Rating_InternalConfig", "rating_InternalConfigAttr", "Rating_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Rating_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Rating_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Rating_InternalConfigRecord.fromStructure = function (str) {
return new Rating_InternalConfigRecord(new Rating_InternalConfigRecord.RecordClass({
rating_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Rating_InternalConfigRecord._isAnonymousRecord = true;
Rating_InternalConfigRecord.UniqueId = "1c5ecea3-5cb3-359e-39dd-72265072c682";
Rating_InternalConfigRecord.init();
return Rating_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Rating_InternalConfigRecord = Rating_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$Gallery_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Gallery_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigList = (function (_super) {
__extends(Gallery_InternalConfigList, _super);
function Gallery_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigList.itemType = OutSystemsUI_2_23Model.Gallery_InternalConfigRec;
return Gallery_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Gallery_InternalConfigList = Gallery_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRec = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRec, _super);
function DatePickerRangeOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRangeOptionalConfigsRec.init();
return DatePickerRangeOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRec = DatePickerRangeOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsList, _super);
function DatePickerRangeOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRec;
return DatePickerRangeOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsList = DatePickerRangeOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$SpaceRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpaceRec = (function (_super) {
__extends(SpaceRec, _super);
function SpaceRec(defaults) {
_super.apply(this, arguments);
}
SpaceRec.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRec.init();
return SpaceRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SpaceRec = SpaceRec;

});
define("OutSystemsUI_2_23.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SpaceRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUI_2_23Model.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SpaceList = SpaceList;

});
define("OutSystemsUI_2_23.model$ErrorMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ErrorMessageRec = (function (_super) {
__extends(ErrorMessageRec, _super);
function ErrorMessageRec(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRec.init();
return ErrorMessageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ErrorMessageRec = ErrorMessageRec;

});
define("OutSystemsUI_2_23.model$DatePickerLanguageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageRec = (function (_super) {
__extends(DatePickerLanguageRec, _super);
function DatePickerLanguageRec(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRec.attributesToDeclare = function () {
return [
this.attr("Alpha2Code", "alpha2CodeAttr", "Alpha2Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LanguageName", "languageNameAttr", "LanguageName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerLanguageRec.init();
return DatePickerLanguageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerLanguageRec = DatePickerLanguageRec;

});
define("OutSystemsUI_2_23.model$DatePickerLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerLanguageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecord = (function (_super) {
__extends(DatePickerLanguageRecord, _super);
function DatePickerLanguageRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerLanguageRec());
}, true, OutSystemsUI_2_23Model.DatePickerLanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerLanguageRecord.fromStructure = function (str) {
return new DatePickerLanguageRecord(new DatePickerLanguageRecord.RecordClass({
datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerLanguageRecord._isAnonymousRecord = true;
DatePickerLanguageRecord.UniqueId = "217bb5e7-981c-04d1-c545-9d9a3c6ad430";
DatePickerLanguageRecord.init();
return DatePickerLanguageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerLanguageRecord = DatePickerLanguageRecord;

});
define("OutSystemsUI_2_23.model$OrientationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OrientationRec = (function (_super) {
__extends(OrientationRec, _super);
function OrientationRec(defaults) {
_super.apply(this, arguments);
}
OrientationRec.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRec.fromStructure = function (str) {
return new OrientationRec(new OrientationRec.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRec.init();
return OrientationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.OrientationRec = OrientationRec;

});
define("OutSystemsUI_2_23.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$OrientationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OrientationRecord = (function (_super) {
__extends(OrientationRecord, _super);
function OrientationRecord(defaults) {
_super.apply(this, arguments);
}
OrientationRecord.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.OrientationRec());
}, true, OutSystemsUI_2_23Model.OrientationRec)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRecord.fromStructure = function (str) {
return new OrientationRecord(new OrientationRecord.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRecord._isAnonymousRecord = true;
OrientationRecord.UniqueId = "e7796563-0002-7348-8338-f0d776a3e2d5";
OrientationRecord.init();
return OrientationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.OrientationRecord = OrientationRecord;

});
define("OutSystemsUI_2_23.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$OrientationRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = OutSystemsUI_2_23Model.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.OrientationRecordList = OrientationRecordList;

});
define("OutSystemsUI_2_23.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SpeedRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUI_2_23Model.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SpeedList = SpeedList;

});
define("OutSystemsUI_2_23.model$ProgressBar_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigRec = (function (_super) {
__extends(ProgressBar_InternalConfigRec, _super);
function ProgressBar_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Progress", "progressAttr", "Progress", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProgressColor", "progressColorAttr", "ProgressColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TrailColor", "trailColorAttr", "TrailColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Thickness", "thicknessAttr", "Thickness", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialProgress", "initialProgressAttr", "InitialProgress", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBar_InternalConfigRec.init();
return ProgressBar_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressBar_InternalConfigRec = ProgressBar_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$ProgressBar_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressBar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigRecord = (function (_super) {
__extends(ProgressBar_InternalConfigRecord, _super);
function ProgressBar_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("ProgressBar_InternalConfig", "progressBar_InternalConfigAttr", "ProgressBar_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ProgressBar_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.ProgressBar_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBar_InternalConfigRecord.fromStructure = function (str) {
return new ProgressBar_InternalConfigRecord(new ProgressBar_InternalConfigRecord.RecordClass({
progressBar_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressBar_InternalConfigRecord._isAnonymousRecord = true;
ProgressBar_InternalConfigRecord.UniqueId = "bd39ef57-d3cb-18d6-a234-c49bf01a6694";
ProgressBar_InternalConfigRecord.init();
return ProgressBar_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressBar_InternalConfigRecord = ProgressBar_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$ProgressBar_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressBar_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigRecordList = (function (_super) {
__extends(ProgressBar_InternalConfigRecordList, _super);
function ProgressBar_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.ProgressBar_InternalConfigRecord;
return ProgressBar_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressBar_InternalConfigRecordList = ProgressBar_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$AccordionIconPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionRec = (function (_super) {
__extends(AccordionIconPositionRec, _super);
function AccordionIconPositionRec(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRec.fromStructure = function (str) {
return new AccordionIconPositionRec(new AccordionIconPositionRec.RecordClass({
labelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRec.init();
return AccordionIconPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AccordionIconPositionRec = AccordionIconPositionRec;

});
define("OutSystemsUI_2_23.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionIconPositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecord = (function (_super) {
__extends(AccordionIconPositionRecord, _super);
function AccordionIconPositionRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AccordionIconPositionRec());
}, true, OutSystemsUI_2_23Model.AccordionIconPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRecord.fromStructure = function (str) {
return new AccordionIconPositionRecord(new AccordionIconPositionRecord.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRecord._isAnonymousRecord = true;
AccordionIconPositionRecord.UniqueId = "25dc8978-a634-f485-1539-aa78f9aeea85";
AccordionIconPositionRecord.init();
return AccordionIconPositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("OutSystemsUI_2_23.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionIconPositionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = OutSystemsUI_2_23Model.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("OutSystemsUI_2_23.model$StackedCardsPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionRec = (function (_super) {
__extends(StackedCardsPositionRec, _super);
function StackedCardsPositionRec(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRec.fromStructure = function (str) {
return new StackedCardsPositionRec(new StackedCardsPositionRec.RecordClass({
labelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRec.init();
return StackedCardsPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.StackedCardsPositionRec = StackedCardsPositionRec;

});
define("OutSystemsUI_2_23.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$StackedCardsPositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecord = (function (_super) {
__extends(StackedCardsPositionRecord, _super);
function StackedCardsPositionRecord(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecord.attributesToDeclare = function () {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.StackedCardsPositionRec());
}, true, OutSystemsUI_2_23Model.StackedCardsPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRecord.fromStructure = function (str) {
return new StackedCardsPositionRecord(new StackedCardsPositionRecord.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRecord._isAnonymousRecord = true;
StackedCardsPositionRecord.UniqueId = "24053833-2c1a-a971-8075-762e531aae7c";
StackedCardsPositionRecord.init();
return StackedCardsPositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("OutSystemsUI_2_23.model$ReturnMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ReturnMessageRec = (function (_super) {
__extends(ReturnMessageRec, _super);
function ReturnMessageRec(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRec.attributesToDeclare = function () {
return [
this.attr("IsSuccess", "isSuccessAttr", "isSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ReturnMessageRec.init();
return ReturnMessageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ReturnMessageRec = ReturnMessageRec;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRec = (function (_super) {
__extends(NoUiSliderConfigs_RangeRec, _super);
function NoUiSliderConfigs_RangeRec(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRec.attributesToDeclare = function () {
return [
this.attr("key", "keyAttr", "key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigs_RangeRec.init();
return NoUiSliderConfigs_RangeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRec = NoUiSliderConfigs_RangeRec;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeList = (function (_super) {
__extends(NoUiSliderConfigs_RangeList, _super);
function NoUiSliderConfigs_RangeList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeList.itemType = OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRec;
return NoUiSliderConfigs_RangeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeList = NoUiSliderConfigs_RangeList;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeList"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRec = (function (_super) {
__extends(NoUiSliderConfigsRec, _super);
function NoUiSliderConfigsRec(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRec.attributesToDeclare = function () {
return [
this.attr("animate", "animateAttr", "animate", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("animationDuration", "animationDurationAttr", "animationDuration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 300;
}, true), 
this.attr("behaviour", "behaviourAttr", "behaviour", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("cssPrefix", "cssPrefixAttr", "cssPrefix", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("keyboardMultiplier", "keyboardMultiplierAttr", "keyboardMultiplier", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("keyboardPageMultiplier", "keyboardPageMultiplierAttr", "keyboardPageMultiplier", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 5;
}, true), 
this.attr("keyboardSupport", "keyboardSupportAttr", "keyboardSupport", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("limit", "limitAttr", "limit", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("margin", "marginAttr", "margin", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("padding", "paddingAttr", "padding", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("range", "rangeAttr", "range", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeList());
}, true, OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeList), 
this.attr("snap", "snapAttr", "snap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigsRec.init();
return NoUiSliderConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.NoUiSliderConfigsRec = NoUiSliderConfigsRec;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecord = (function (_super) {
__extends(NoUiSliderConfigsRecord, _super);
function NoUiSliderConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs", "noUiSliderConfigsAttr", "NoUiSliderConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.NoUiSliderConfigsRec());
}, true, OutSystemsUI_2_23Model.NoUiSliderConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigsRecord.fromStructure = function (str) {
return new NoUiSliderConfigsRecord(new NoUiSliderConfigsRecord.RecordClass({
noUiSliderConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigsRecord._isAnonymousRecord = true;
NoUiSliderConfigsRecord.UniqueId = "255a449d-0b5a-20de-85e9-28c6fbe17277";
NoUiSliderConfigsRecord.init();
return NoUiSliderConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.NoUiSliderConfigsRecord = NoUiSliderConfigsRecord;

});
define("OutSystemsUI_2_23.model$FloatingPositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FloatingPositionRec = (function (_super) {
__extends(FloatingPositionRec, _super);
function FloatingPositionRec(defaults) {
_super.apply(this, arguments);
}
FloatingPositionRec.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FloatingPositionRec.fromStructure = function (str) {
return new FloatingPositionRec(new FloatingPositionRec.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FloatingPositionRec.init();
return FloatingPositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.FloatingPositionRec = FloatingPositionRec;

});
define("OutSystemsUI_2_23.model$FloatingPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FloatingPositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FloatingPositionRecord = (function (_super) {
__extends(FloatingPositionRecord, _super);
function FloatingPositionRecord(defaults) {
_super.apply(this, arguments);
}
FloatingPositionRecord.attributesToDeclare = function () {
return [
this.attr("FloatingPosition", "floatingPositionAttr", "FloatingPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.FloatingPositionRec());
}, true, OutSystemsUI_2_23Model.FloatingPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
FloatingPositionRecord.fromStructure = function (str) {
return new FloatingPositionRecord(new FloatingPositionRecord.RecordClass({
floatingPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FloatingPositionRecord._isAnonymousRecord = true;
FloatingPositionRecord.UniqueId = "6fec86d8-92f8-c8ca-4083-665c990ff66e";
FloatingPositionRecord.init();
return FloatingPositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.FloatingPositionRecord = FloatingPositionRecord;

});
define("OutSystemsUI_2_23.model$FloatingPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FloatingPositionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FloatingPositionRecordList = (function (_super) {
__extends(FloatingPositionRecordList, _super);
function FloatingPositionRecordList(defaults) {
_super.apply(this, arguments);
}
FloatingPositionRecordList.itemType = OutSystemsUI_2_23Model.FloatingPositionRecord;
return FloatingPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.FloatingPositionRecordList = FloatingPositionRecordList;

});
define("OutSystemsUI_2_23.model$RangeSliderProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderProviderList = (function (_super) {
__extends(RangeSliderProviderList, _super);
function RangeSliderProviderList(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderList.itemType = OutSystemsUI_2_23Model.RangeSliderProviderRec;
return RangeSliderProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSliderProviderList = RangeSliderProviderList;

});
define("OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$OverflowMenu_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OverflowMenu_InternalConfigsRecordList = (function (_super) {
__extends(OverflowMenu_InternalConfigsRecordList, _super);
function OverflowMenu_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
OverflowMenu_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRecord;
return OverflowMenu_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.OverflowMenu_InternalConfigsRecordList = OverflowMenu_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$CarouselItemsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselItemsRec = (function (_super) {
__extends(CarouselItemsRec, _super);
function CarouselItemsRec(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRec.attributesToDeclare = function () {
return [
this.attr("Desktop", "desktopAttr", "Desktop", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("Tablet", "tabletAttr", "Tablet", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselItemsRec.init();
return CarouselItemsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselItemsRec = CarouselItemsRec;

});
define("OutSystemsUI_2_23.model$DropdownTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTypeRec = (function (_super) {
__extends(DropdownTypeRec, _super);
function DropdownTypeRec(defaults) {
_super.apply(this, arguments);
}
DropdownTypeRec.attributesToDeclare = function () {
return [
this.attr("Mode", "modeAttr", "Mode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTypeRec.fromStructure = function (str) {
return new DropdownTypeRec(new DropdownTypeRec.RecordClass({
modeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTypeRec.init();
return DropdownTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownTypeRec = DropdownTypeRec;

});
define("OutSystemsUI_2_23.model$TabsContentItem_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigRec = (function (_super) {
__extends(TabsContentItem_InternalConfigRec, _super);
function TabsContentItem_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TabsContentItem_InternalConfigRec.init();
return TabsContentItem_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRec = TabsContentItem_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$TabsContentItem_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsContentItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigRecord = (function (_super) {
__extends(TabsContentItem_InternalConfigRecord, _super);
function TabsContentItem_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("TabsContentItem_InternalConfig", "tabsContentItem_InternalConfigAttr", "TabsContentItem_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsContentItem_InternalConfigRecord.fromStructure = function (str) {
return new TabsContentItem_InternalConfigRecord(new TabsContentItem_InternalConfigRecord.RecordClass({
tabsContentItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsContentItem_InternalConfigRecord._isAnonymousRecord = true;
TabsContentItem_InternalConfigRecord.UniqueId = "4145d023-40fa-6cfb-5479-85df92595483";
TabsContentItem_InternalConfigRecord.init();
return TabsContentItem_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRecord = TabsContentItem_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$TabsContentItem_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsContentItem_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigRecordList = (function (_super) {
__extends(TabsContentItem_InternalConfigRecordList, _super);
function TabsContentItem_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRecord;
return TabsContentItem_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRecordList = TabsContentItem_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$BulkActionsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BulkActionsRec = (function (_super) {
__extends(BulkActionsRec, _super);
function BulkActionsRec(defaults) {
_super.apply(this, arguments);
}
BulkActionsRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRec.fromStructure = function (str) {
return new BulkActionsRec(new BulkActionsRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRec.init();
return BulkActionsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BulkActionsRec = BulkActionsRec;

});
define("OutSystemsUI_2_23.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BulkActionsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BulkActionsRecord = (function (_super) {
__extends(BulkActionsRecord, _super);
function BulkActionsRecord(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecord.attributesToDeclare = function () {
return [
this.attr("BulkActions", "bulkActionsAttr", "BulkActions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.BulkActionsRec());
}, true, OutSystemsUI_2_23Model.BulkActionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRecord.fromStructure = function (str) {
return new BulkActionsRecord(new BulkActionsRecord.RecordClass({
bulkActionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRecord._isAnonymousRecord = true;
BulkActionsRecord.UniqueId = "286fe503-981a-1e3c-0d94-0a47722fbee5";
BulkActionsRecord.init();
return BulkActionsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BulkActionsRecord = BulkActionsRecord;

});
define("OutSystemsUI_2_23.model$GutterSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GutterSizeRec = (function (_super) {
__extends(GutterSizeRec, _super);
function GutterSizeRec(defaults) {
_super.apply(this, arguments);
}
GutterSizeRec.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRec.init();
return GutterSizeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.GutterSizeRec = GutterSizeRec;

});
define("OutSystemsUI_2_23.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GutterSizeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUI_2_23Model.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.GutterSizeList = GutterSizeList;

});
define("OutSystemsUI_2_23.model$DatePickerCalendarTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeRec = (function (_super) {
__extends(DatePickerCalendarTypeRec, _super);
function DatePickerCalendarTypeRec(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeRec.attributesToDeclare = function () {
return [
this.attr("Mode", "modeAttr", "Mode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerCalendarTypeRec.fromStructure = function (str) {
return new DatePickerCalendarTypeRec(new DatePickerCalendarTypeRec.RecordClass({
modeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerCalendarTypeRec.init();
return DatePickerCalendarTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerCalendarTypeRec = DatePickerCalendarTypeRec;

});
define("OutSystemsUI_2_23.model$DatePickerCalendarTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerCalendarTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeList = (function (_super) {
__extends(DatePickerCalendarTypeList, _super);
function DatePickerCalendarTypeList(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeList.itemType = OutSystemsUI_2_23Model.DatePickerCalendarTypeRec;
return DatePickerCalendarTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerCalendarTypeList = DatePickerCalendarTypeList;

});
define("OutSystemsUI_2_23.model$VideoStateList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoStateRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoStateList = (function (_super) {
__extends(VideoStateList, _super);
function VideoStateList(defaults) {
_super.apply(this, arguments);
}
VideoStateList.itemType = OutSystemsUI_2_23Model.VideoStateRec;
return VideoStateList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VideoStateList = VideoStateList;

});
define("OutSystemsUI_2_23.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ErrorMessageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ErrorMessageRec());
}, true, OutSystemsUI_2_23Model.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "a82b48d6-38f9-1d56-04e3-2c713e6d5950";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ErrorMessageRecord = ErrorMessageRecord;

});
define("OutSystemsUI_2_23.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ErrorMessageRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = OutSystemsUI_2_23Model.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("OutSystemsUI_2_23.model$RangeSliderProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderProviderRecord = (function (_super) {
__extends(RangeSliderProviderRecord, _super);
function RangeSliderProviderRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderProvider", "rangeSliderProviderAttr", "RangeSliderProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RangeSliderProviderRec());
}, true, OutSystemsUI_2_23Model.RangeSliderProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderProviderRecord.fromStructure = function (str) {
return new RangeSliderProviderRecord(new RangeSliderProviderRecord.RecordClass({
rangeSliderProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderProviderRecord._isAnonymousRecord = true;
RangeSliderProviderRecord.UniqueId = "9ed563cd-43ce-0126-6c97-86267d985604";
RangeSliderProviderRecord.init();
return RangeSliderProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSliderProviderRecord = RangeSliderProviderRecord;

});
define("OutSystemsUI_2_23.model$RangeSliderProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderProviderRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderProviderRecordList = (function (_super) {
__extends(RangeSliderProviderRecordList, _super);
function RangeSliderProviderRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderProviderRecordList.itemType = OutSystemsUI_2_23Model.RangeSliderProviderRecord;
return RangeSliderProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSliderProviderRecordList = RangeSliderProviderRecordList;

});
define("OutSystemsUI_2_23.model$FlipContent_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigRec = (function (_super) {
__extends(FlipContent_InternalConfigRec, _super);
function FlipContent_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsFlipped", "isFlippedAttr", "IsFlipped", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FlipSelf", "flipSelfAttr", "FlipSelf", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FlipContent_InternalConfigRec.init();
return FlipContent_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.FlipContent_InternalConfigRec = FlipContent_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$FlipContent_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FlipContent_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigRecord = (function (_super) {
__extends(FlipContent_InternalConfigRecord, _super);
function FlipContent_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("FlipContent_InternalConfig", "flipContent_InternalConfigAttr", "FlipContent_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.FlipContent_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.FlipContent_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
FlipContent_InternalConfigRecord.fromStructure = function (str) {
return new FlipContent_InternalConfigRecord(new FlipContent_InternalConfigRecord.RecordClass({
flipContent_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FlipContent_InternalConfigRecord._isAnonymousRecord = true;
FlipContent_InternalConfigRecord.UniqueId = "9c0a7b08-6b1a-3809-38e2-ae242166cad5";
FlipContent_InternalConfigRecord.init();
return FlipContent_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.FlipContent_InternalConfigRecord = FlipContent_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$FlipContent_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FlipContent_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigRecordList = (function (_super) {
__extends(FlipContent_InternalConfigRecordList, _super);
function FlipContent_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.FlipContent_InternalConfigRecord;
return FlipContent_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.FlipContent_InternalConfigRecordList = FlipContent_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$CarouselItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselItemsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselItemsRecord = (function (_super) {
__extends(CarouselItemsRecord, _super);
function CarouselItemsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselItemsRec());
}, true, OutSystemsUI_2_23Model.CarouselItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselItemsRecord.fromStructure = function (str) {
return new CarouselItemsRecord(new CarouselItemsRecord.RecordClass({
carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselItemsRecord._isAnonymousRecord = true;
CarouselItemsRecord.UniqueId = "2bfa82e8-ed46-812f-9c17-1b6408c24d2e";
CarouselItemsRecord.init();
return CarouselItemsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselItemsRecord = CarouselItemsRecord;

});
define("OutSystemsUI_2_23.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionIconTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecord = (function (_super) {
__extends(AccordionIconTypeRecord, _super);
function AccordionIconTypeRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AccordionIconTypeRec());
}, true, OutSystemsUI_2_23Model.AccordionIconTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRecord.fromStructure = function (str) {
return new AccordionIconTypeRecord(new AccordionIconTypeRecord.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRecord._isAnonymousRecord = true;
AccordionIconTypeRecord.UniqueId = "4d0bb3d7-df5b-cfe1-edef-0eabc2c9727b";
AccordionIconTypeRecord.init();
return AccordionIconTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("OutSystemsUI_2_23.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionIconTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = OutSystemsUI_2_23Model.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("OutSystemsUI_2_23.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ErrorMessageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUI_2_23Model.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ErrorMessageList = ErrorMessageList;

});
define("OutSystemsUI_2_23.model$LogTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LogTypeRec = (function (_super) {
__extends(LogTypeRec, _super);
function LogTypeRec(defaults) {
_super.apply(this, arguments);
}
LogTypeRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LogTypeRec.init();
return LogTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.LogTypeRec = LogTypeRec;

});
define("OutSystemsUI_2_23.model$LogTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$LogTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LogTypeRecord = (function (_super) {
__extends(LogTypeRecord, _super);
function LogTypeRecord(defaults) {
_super.apply(this, arguments);
}
LogTypeRecord.attributesToDeclare = function () {
return [
this.attr("LogType", "logTypeAttr", "LogType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.LogTypeRec());
}, true, OutSystemsUI_2_23Model.LogTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
LogTypeRecord.fromStructure = function (str) {
return new LogTypeRecord(new LogTypeRecord.RecordClass({
logTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LogTypeRecord._isAnonymousRecord = true;
LogTypeRecord.UniqueId = "c443b8b2-baa4-978c-549e-8ea1381d4ca9";
LogTypeRecord.init();
return LogTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.LogTypeRecord = LogTypeRecord;

});
define("OutSystemsUI_2_23.model$LogTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$LogTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LogTypeRecordList = (function (_super) {
__extends(LogTypeRecordList, _super);
function LogTypeRecordList(defaults) {
_super.apply(this, arguments);
}
LogTypeRecordList.itemType = OutSystemsUI_2_23Model.LogTypeRecord;
return LogTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.LogTypeRecordList = LogTypeRecordList;

});
define("OutSystemsUI_2_23.model$DeviceConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationRec = (function (_super) {
__extends(DeviceConfigurationRec, _super);
function DeviceConfigurationRec(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRec.attributesToDeclare = function () {
return [
this.attr("PhoneWidth", "phoneWidthAttr", "PhoneWidth", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 767;
}, true), 
this.attr("TabletWidth", "tabletWidthAttr", "TabletWidth", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1024;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRec.init();
return DeviceConfigurationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DeviceConfigurationRec = DeviceConfigurationRec;

});
define("OutSystemsUI_2_23.model$GradientColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientColorRec = (function (_super) {
__extends(GradientColorRec, _super);
function GradientColorRec(defaults) {
_super.apply(this, arguments);
}
GradientColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Percentage", "percentageAttr", "Percentage", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(-1);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GradientColorRec.init();
return GradientColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.GradientColorRec = GradientColorRec;

});
define("OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRec = (function (_super) {
__extends(CarouselOptionalConfigsRec, _super);
function CarouselOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Padding", "paddingAttr", "Padding", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselOptionalConfigsRec.init();
return CarouselOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselOptionalConfigsRec = CarouselOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$MonthRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthRec = (function (_super) {
__extends(MonthRec, _super);
function MonthRec(defaults) {
_super.apply(this, arguments);
}
MonthRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthRec.init();
return MonthRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthRec = MonthRec;

});
define("OutSystemsUI_2_23.model$MonthRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthRecord = (function (_super) {
__extends(MonthRecord, _super);
function MonthRecord(defaults) {
_super.apply(this, arguments);
}
MonthRecord.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthRec());
}, true, OutSystemsUI_2_23Model.MonthRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthRecord.fromStructure = function (str) {
return new MonthRecord(new MonthRecord.RecordClass({
monthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthRecord._isAnonymousRecord = true;
MonthRecord.UniqueId = "2ecf0f7d-f6f6-c50e-1ee5-c9cd991d7214";
MonthRecord.init();
return MonthRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthRecord = MonthRecord;

});
define("OutSystemsUI_2_23.model$DatePicker_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePicker_InternalConfigList = (function (_super) {
__extends(DatePicker_InternalConfigList, _super);
function DatePicker_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
DatePicker_InternalConfigList.itemType = OutSystemsUI_2_23Model.DatePicker_InternalConfigRec;
return DatePicker_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePicker_InternalConfigList = DatePicker_InternalConfigList;

});
define("OutSystemsUI_2_23.model$BooleanTypesRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanTypesRec = (function (_super) {
__extends(BooleanTypesRec, _super);
function BooleanTypesRec(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanTypesRec.init();
return BooleanTypesRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BooleanTypesRec = BooleanTypesRec;

});
define("OutSystemsUI_2_23.model$BooleanTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BooleanTypesRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanTypesRecord = (function (_super) {
__extends(BooleanTypesRecord, _super);
function BooleanTypesRecord(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecord.attributesToDeclare = function () {
return [
this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.BooleanTypesRec());
}, true, OutSystemsUI_2_23Model.BooleanTypesRec)
].concat(_super.attributesToDeclare.call(this));
};
BooleanTypesRecord.fromStructure = function (str) {
return new BooleanTypesRecord(new BooleanTypesRecord.RecordClass({
booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BooleanTypesRecord._isAnonymousRecord = true;
BooleanTypesRecord.UniqueId = "2f12a4c6-33ae-ba60-4012-5c988511a9f5";
BooleanTypesRecord.init();
return BooleanTypesRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BooleanTypesRecord = BooleanTypesRecord;

});
define("OutSystemsUI_2_23.model$DEPRECATED_ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRec = (function (_super) {
__extends(DEPRECATED_ColorRec, _super);
function DEPRECATED_ColorRec(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_ColorRec.fromStructure = function (str) {
return new DEPRECATED_ColorRec(new DEPRECATED_ColorRec.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_ColorRec.init();
return DEPRECATED_ColorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DEPRECATED_ColorRec = DEPRECATED_ColorRec;

});
define("OutSystemsUI_2_23.model$Tooltip_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigRec = (function (_super) {
__extends(Tooltip_InternalConfigRec, _super);
function Tooltip_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartVisible", "startVisibleAttr", "StartVisible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsHover", "isHoverAttr", "IsHover", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Tooltip_InternalConfigRec.init();
return Tooltip_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Tooltip_InternalConfigRec = Tooltip_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$Tooltip_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigList = (function (_super) {
__extends(Tooltip_InternalConfigList, _super);
function Tooltip_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigList.itemType = OutSystemsUI_2_23Model.Tooltip_InternalConfigRec;
return Tooltip_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Tooltip_InternalConfigList = Tooltip_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DropdownTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTypeRecord = (function (_super) {
__extends(DropdownTypeRecord, _super);
function DropdownTypeRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTypeRecord.attributesToDeclare = function () {
return [
this.attr("DropdownType", "dropdownTypeAttr", "DropdownType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownTypeRec());
}, true, OutSystemsUI_2_23Model.DropdownTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTypeRecord.fromStructure = function (str) {
return new DropdownTypeRecord(new DropdownTypeRecord.RecordClass({
dropdownTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTypeRecord._isAnonymousRecord = true;
DropdownTypeRecord.UniqueId = "30d29f95-4cbb-c62d-1d77-54ee1fb03136";
DropdownTypeRecord.init();
return DropdownTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownTypeRecord = DropdownTypeRecord;

});
define("OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsRec = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsRec, _super);
function DropdownServerSideItem_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSideItem_InternalConfigsRec.init();
return DropdownServerSideItem_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRec = DropdownServerSideItem_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRec = (function (_super) {
__extends(DropdownTagsOptionalConfigsRec, _super);
function DropdownTagsOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "There are no options to show.";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Search...";
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "There are no options to show.";
}, true), 
this.attr("SanitizeDropdownValues", "sanitizeDropdownValuesAttr", "SanitizeDropdownValues", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTagsOptionalConfigsRec.init();
return DropdownTagsOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec = DropdownTagsOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecord = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecord, _super);
function DropdownTagsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTagsOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownTagsOptionalConfigsRecord(new DropdownTagsOptionalConfigsRecord.RecordClass({
dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTagsOptionalConfigsRecord._isAnonymousRecord = true;
DropdownTagsOptionalConfigsRecord.UniqueId = "34c3fbde-21d2-2a85-6f2e-eab1b25b12f7";
DropdownTagsOptionalConfigsRecord.init();
return DropdownTagsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRecord = DropdownTagsOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextRecord, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("Month1", "month1Attr", "Month1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month10", "month10Attr", "Month10", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month11", "month11Attr", "Month11", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month12", "month12Attr", "Month12", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month2", "month2Attr", "Month2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month3", "month3Attr", "Month3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month4", "month4Attr", "Month4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month5", "month5Attr", "Month5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month6", "month6Attr", "Month6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month7", "month7Attr", "Month7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month8", "month8Attr", "Month8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month9", "month9Attr", "Month9", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextTextTextTextTextTextRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextTextTextTextTextTextRecord.UniqueId = "35ce9df1-ad7a-8953-3b2e-8a49a8413520";
TextTextTextTextTextTextTextTextTextTextTextTextRecord.init();
return TextTextTextTextTextTextTextTextTextTextTextTextRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextRecord = TextTextTextTextTextTextTextTextTextTextTextTextRecord;

});
define("OutSystemsUI_2_23.model$DeviceResponsiveRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveRec = (function (_super) {
__extends(DeviceResponsiveRec, _super);
function DeviceResponsiveRec(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
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
DeviceResponsiveRec.init();
return DeviceResponsiveRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DeviceResponsiveRec = DeviceResponsiveRec;

});
define("OutSystemsUI_2_23.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DeviceResponsiveRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecord = (function (_super) {
__extends(DeviceResponsiveRecord, _super);
function DeviceResponsiveRecord(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecord.attributesToDeclare = function () {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DeviceResponsiveRec());
}, true, OutSystemsUI_2_23Model.DeviceResponsiveRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceResponsiveRecord.fromStructure = function (str) {
return new DeviceResponsiveRecord(new DeviceResponsiveRecord.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceResponsiveRecord._isAnonymousRecord = true;
DeviceResponsiveRecord.UniqueId = "371993e1-17b6-132c-2539-271b970c8be1";
DeviceResponsiveRecord.init();
return DeviceResponsiveRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("OutSystemsUI_2_23.model$ReturnMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ReturnMessageRecord = (function (_super) {
__extends(ReturnMessageRecord, _super);
function ReturnMessageRecord(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRecord.attributesToDeclare = function () {
return [
this.attr("ReturnMessage", "returnMessageAttr", "ReturnMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ReturnMessageRec());
}, true, OutSystemsUI_2_23Model.ReturnMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ReturnMessageRecord.fromStructure = function (str) {
return new ReturnMessageRecord(new ReturnMessageRecord.RecordClass({
returnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ReturnMessageRecord._isAnonymousRecord = true;
ReturnMessageRecord.UniqueId = "386276dc-e7dd-a208-a5d9-1840fb66e11f";
ReturnMessageRecord.init();
return ReturnMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ReturnMessageRecord = ReturnMessageRecord;

});
define("OutSystemsUI_2_23.model$MonthPicker_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthYearRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigRec = (function (_super) {
__extends(MonthPicker_InternalConfigRec, _super);
function MonthPicker_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MinMonth", "minMonthAttr", "MinMonth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthYearRec());
}, true, OutSystemsUI_2_23Model.MonthYearRec), 
this.attr("InitialMonth", "initialMonthAttr", "InitialMonth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthYearRec());
}, true, OutSystemsUI_2_23Model.MonthYearRec), 
this.attr("MaxMonth", "maxMonthAttr", "MaxMonth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthYearRec());
}, true, OutSystemsUI_2_23Model.MonthYearRec), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthPicker_InternalConfigRec.init();
return MonthPicker_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthPicker_InternalConfigRec = MonthPicker_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$MonthPicker_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthPicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigList = (function (_super) {
__extends(MonthPicker_InternalConfigList, _super);
function MonthPicker_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigList.itemType = OutSystemsUI_2_23Model.MonthPicker_InternalConfigRec;
return MonthPicker_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthPicker_InternalConfigList = MonthPicker_InternalConfigList;

});
define("OutSystemsUI_2_23.model$MessageStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MessageStatusRec = (function (_super) {
__extends(MessageStatusRec, _super);
function MessageStatusRec(defaults) {
_super.apply(this, arguments);
}
MessageStatusRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRec.init();
return MessageStatusRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MessageStatusRec = MessageStatusRec;

});
define("OutSystemsUI_2_23.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MessageStatusRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MessageStatusRec());
}, true, OutSystemsUI_2_23Model.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "4094e778-49d5-6cdd-6165-0d2bec08ccb1";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MessageStatusRecord = MessageStatusRecord;

});
define("OutSystemsUI_2_23.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MessageStatusRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = OutSystemsUI_2_23Model.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MessageStatusRecordList = MessageStatusRecordList;

});
define("OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsRecordList = (function (_super) {
__extends(AccordionItem_InternalConfigsRecordList, _super);
function AccordionItem_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRecord;
return AccordionItem_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRecordList = AccordionItem_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigRec = (function (_super) {
__extends(SectionIndexItem_InternalConfigRec, _super);
function SectionIndexItem_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ScrollToWidgetId", "scrollToWidgetIdAttr", "ScrollToWidgetId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndexItem_InternalConfigRec.init();
return SectionIndexItem_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRec = SectionIndexItem_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$ProviderEventReturnMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageRec = (function (_super) {
__extends(ProviderEventReturnMessageRec, _super);
function ProviderEventReturnMessageRec(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageRec.attributesToDeclare = function () {
return [
this.attr("ProviderEventId", "providerEventIdAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSuccess", "isSuccessAttr", "isSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProviderEventReturnMessageRec.init();
return ProviderEventReturnMessageRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProviderEventReturnMessageRec = ProviderEventReturnMessageRec;

});
define("OutSystemsUI_2_23.model$", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextList = TextList;

});
define("OutSystemsUI_2_23.model$VirtualSelectConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRec = (function (_super) {
__extends(VirtualSelectConfigsRec, _super);
function VirtualSelectConfigsRec(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRec.attributesToDeclare = function () {
return [
this.attr("additionalClasses", "additionalClassesAttr", "additionalClasses", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("aliasKey", "aliasKeyAttr", "aliasKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("allOptionsSelectedText", "allOptionsSelectedTextAttr", "allOptionsSelectedText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("allowNewOption", "allowNewOptionAttr", "allowNewOption", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("alwaysShowSelectedOptionsCount", "alwaysShowSelectedOptionsCountAttr", "alwaysShowSelectedOptionsCount", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("alwaysShowSelectedOptionsLabel", "alwaysShowSelectedOptionsLabelAttr", "alwaysShowSelectedOptionsLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.false;
}, true), 
this.attr("ariaLabelClearButtonText", "ariaLabelClearButtonTextAttr", "ariaLabelClearButtonText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ariaLabelledby", "ariaLabelledbyAttr", "ariaLabelledby", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ariaLabelSearchClearButtonText", "ariaLabelSearchClearButtonTextAttr", "ariaLabelSearchClearButtonText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ariaLabelTagClearButtonText", "ariaLabelTagClearButtonTextAttr", "ariaLabelTagClearButtonText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ariaLabelText", "ariaLabelTextAttr", "ariaLabelText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("autofocus", "autofocusAttr", "autofocus", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("autoSelectFirstOption", "autoSelectFirstOptionAttr", "autoSelectFirstOption", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("clearButtonText", "clearButtonTextAttr", "clearButtonText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("descriptionKey", "descriptionKeyAttr", "descriptionKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("disableSelectAll", "disableSelectAllAttr", "disableSelectAll", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disableAllOptionsSelectedText", "disableAllOptionsSelectedTextAttr", "disableAllOptionsSelectedText", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disabledOptions", "disabledOptionsAttr", "disabledOptions", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("disableOptionGroupCheckbox", "disableOptionGroupCheckboxAttr", "disableOptionGroupCheckbox", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("disableValidation", "disableValidationAttr", "disableValidation", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("dropboxWidth", "dropboxWidthAttr", "dropboxWidth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("emptyValue", "emptyValueAttr", "emptyValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("enableSecureText", "enableSecureTextAttr", "enableSecureText", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("focusSelectedOptionOnOpen", "focusSelectedOptionOnOpenAttr", "focusSelectedOptionOnOpen", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("hideClearButton", "hideClearButtonAttr", "hideClearButton", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("markSearchResults", "markSearchResultsAttr", "markSearchResults", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("keepAlwaysOpen", "keepAlwaysOpenAttr", "keepAlwaysOpen", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("labelKey", "labelKeyAttr", "labelKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("maxValues", "maxValuesAttr", "maxValues", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("maxWidth", "maxWidthAttr", "maxWidth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("minValues", "minValuesAttr", "minValues", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("moreText", "moreTextAttr", "moreText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("noOfDisplayValues", "noOfDisplayValuesAttr", "noOfDisplayValues", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("optionsCount", "optionsCountAttr", "optionsCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("optionHeight", "optionHeightAttr", "optionHeight", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("optionSelectedText", "optionSelectedTextAttr", "optionSelectedText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("optionsSelectedText", "optionsSelectedTextAttr", "optionsSelectedText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("popupDropboxBreakpoint", "popupDropboxBreakpointAttr", "popupDropboxBreakpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("popupPosition", "popupPositionAttr", "popupPosition", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("position", "positionAttr", "position", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("required", "requiredAttr", "required", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("search", "searchAttr", "search", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("searchByStartsWith", "searchByStartsWithAttr", "searchByStartsWith", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("searchFormLabel", "searchFormLabelAttr", "searchFormLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("searchGroup", "searchGroupAttr", "searchGroup", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("searchNormalize", "searchNormalizeAttr", "searchNormalize", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("selectAllOnlyVisible", "selectAllOnlyVisibleAttr", "selectAllOnlyVisible", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("selectAllText", "selectAllTextAttr", "selectAllText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("showDropboxAsPopup", "showDropboxAsPopupAttr", "showDropboxAsPopup", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("showOptionsOnlyOnSearch", "showOptionsOnlyOnSearchAttr", "showOptionsOnlyOnSearch", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("showDuration", "showDurationAttr", "showDuration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("showSelectedOptionsFirst", "showSelectedOptionsFirstAttr", "showSelectedOptionsFirst", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.booleanTypes.unset;
}, true), 
this.attr("textDirection", "textDirectionAttr", "textDirection", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("valueKey", "valueKeyAttr", "valueKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("zIndex", "zIndexAttr", "zIndex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("hideDuration", "hideDurationAttr", "hideDuration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VirtualSelectConfigsRec.init();
return VirtualSelectConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VirtualSelectConfigsRec = VirtualSelectConfigsRec;

});
define("OutSystemsUI_2_23.model$VirtualSelectConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VirtualSelectConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsList = (function (_super) {
__extends(VirtualSelectConfigsList, _super);
function VirtualSelectConfigsList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsList.itemType = OutSystemsUI_2_23Model.VirtualSelectConfigsRec;
return VirtualSelectConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VirtualSelectConfigsList = VirtualSelectConfigsList;

});
define("OutSystemsUI_2_23.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SpaceRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SpaceRec());
}, true, OutSystemsUI_2_23Model.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "de422bca-c75e-499b-55e3-ff48fdab55f6";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SpaceRecord = SpaceRecord;

});
define("OutSystemsUI_2_23.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SpaceRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = OutSystemsUI_2_23Model.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SpaceRecordList = SpaceRecordList;

});
define("OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRec = (function (_super) {
__extends(RangeSliderOptionalConfigsRec, _super);
function RangeSliderOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(1);
}, true), 
this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderOptionalConfigsRec.init();
return RangeSliderOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec = RangeSliderOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecord = (function (_super) {
__extends(RangeSliderOptionalConfigsRecord, _super);
function RangeSliderOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderOptionalConfigsRecord.fromStructure = function (str) {
return new RangeSliderOptionalConfigsRecord(new RangeSliderOptionalConfigsRecord.RecordClass({
rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderOptionalConfigsRecord._isAnonymousRecord = true;
RangeSliderOptionalConfigsRecord.UniqueId = "6ea57b8f-1631-cae7-7a81-231c38e0b8a3";
RangeSliderOptionalConfigsRecord.init();
return RangeSliderOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRecord = RangeSliderOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecordList = (function (_super) {
__extends(RangeSliderOptionalConfigsRecordList, _super);
function RangeSliderOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRecord;
return RangeSliderOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRecordList = RangeSliderOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$BreakColumnsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BreakColumnsRec = (function (_super) {
__extends(BreakColumnsRec, _super);
function BreakColumnsRec(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRec.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRec.fromStructure = function (str) {
return new BreakColumnsRec(new BreakColumnsRec.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRec.init();
return BreakColumnsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BreakColumnsRec = BreakColumnsRec;

});
define("OutSystemsUI_2_23.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BreakColumnsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUI_2_23Model.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BreakColumnsList = BreakColumnsList;

});
define("OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsList = (function (_super) {
__extends(DropdownTagsOptionalConfigsList, _super);
function DropdownTagsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec;
return DropdownTagsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsList = DropdownTagsOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextRecord, _super);
function TextTextTextTextTextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("WeekdayShort1", "weekdayShort1Attr", "WeekdayShort1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort2", "weekdayShort2Attr", "WeekdayShort2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort3", "weekdayShort3Attr", "WeekdayShort3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort4", "weekdayShort4Attr", "WeekdayShort4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort5", "weekdayShort5Attr", "WeekdayShort5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort6", "weekdayShort6Attr", "WeekdayShort6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WeekdayShort7", "weekdayShort7Attr", "WeekdayShort7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextRecord.UniqueId = "bbab5f70-da1d-7251-909f-44ce9efe20fa";
TextTextTextTextTextTextTextRecord.init();
return TextTextTextTextTextTextTextRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextRecord = TextTextTextTextTextTextTextRecord;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextText1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextText1RecordList = (function (_super) {
__extends(TextTextTextTextTextTextText1RecordList, _super);
function TextTextTextTextTextTextText1RecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextText1RecordList.itemType = OutSystemsUI_2_23Model.TextTextTextTextTextTextTextRecord;
return TextTextTextTextTextTextText1RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextTextTextTextTextTextText1RecordList = TextTextTextTextTextTextText1RecordList;

});
define("OutSystemsUI_2_23.model$FlipContent_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FlipContent_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlipContent_InternalConfigList = (function (_super) {
__extends(FlipContent_InternalConfigList, _super);
function FlipContent_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
FlipContent_InternalConfigList.itemType = OutSystemsUI_2_23Model.FlipContent_InternalConfigRec;
return FlipContent_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.FlipContent_InternalConfigList = FlipContent_InternalConfigList;

});
define("OutSystemsUI_2_23.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AlertRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AlertRecord = (function (_super) {
__extends(AlertRecord, _super);
function AlertRecord(defaults) {
_super.apply(this, arguments);
}
AlertRecord.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AlertRec());
}, true, OutSystemsUI_2_23Model.AlertRec)
].concat(_super.attributesToDeclare.call(this));
};
AlertRecord.fromStructure = function (str) {
return new AlertRecord(new AlertRecord.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRecord._isAnonymousRecord = true;
AlertRecord.UniqueId = "44c8aa48-676d-e50f-e7a4-79075b9fd630";
AlertRecord.init();
return AlertRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.AlertRecord = AlertRecord;

});
define("OutSystemsUI_2_23.model$Sidebar_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigRec = (function (_super) {
__extends(Sidebar_InternalConfigRec, _super);
function Sidebar_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartsOpen", "startsOpenAttr", "StartsOpen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasOverlay", "hasOverlayAttr", "HasOverlay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Sidebar_InternalConfigRec.init();
return Sidebar_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Sidebar_InternalConfigRec = Sidebar_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$SectionIndex_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigRec = (function (_super) {
__extends(SectionIndex_InternalConfigRec, _super);
function SectionIndex_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SmoothScrolling", "smoothScrollingAttr", "SmoothScrolling", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsFixed", "isFixedAttr", "IsFixed", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndex_InternalConfigRec.init();
return SectionIndex_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SectionIndex_InternalConfigRec = SectionIndex_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRec = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRec, _super);
function DEPRECATED_MasterDetailItemRec(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ImageUrl", "imageUrlAttr", "ImageUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_MasterDetailItemRec.init();
return DEPRECATED_MasterDetailItemRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRec = DEPRECATED_MasterDetailItemRec;

});
define("OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRecord = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRecord, _super);
function DEPRECATED_MasterDetailItemRecord(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRecord.attributesToDeclare = function () {
return [
this.attr("DEPRECATED_MasterDetailItem", "dEPRECATED_MasterDetailItemAttr", "DEPRECATED_MasterDetailItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRec());
}, true, OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_MasterDetailItemRecord.fromStructure = function (str) {
return new DEPRECATED_MasterDetailItemRecord(new DEPRECATED_MasterDetailItemRecord.RecordClass({
dEPRECATED_MasterDetailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_MasterDetailItemRecord._isAnonymousRecord = true;
DEPRECATED_MasterDetailItemRecord.UniqueId = "476cc574-8391-5757-fa42-bcf20eac7d76";
DEPRECATED_MasterDetailItemRecord.init();
return DEPRECATED_MasterDetailItemRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRecord = DEPRECATED_MasterDetailItemRecord;

});
define("OutSystemsUI_2_23.model$InlineSVG_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var InlineSVG_InternalConfigRec = (function (_super) {
__extends(InlineSVG_InternalConfigRec, _super);
function InlineSVG_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
InlineSVG_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SVGCode", "sVGCodeAttr", "SVGCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InlineSVG_InternalConfigRec.init();
return InlineSVG_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.InlineSVG_InternalConfigRec = InlineSVG_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$InlineSVG_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$InlineSVG_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var InlineSVG_InternalConfigRecord = (function (_super) {
__extends(InlineSVG_InternalConfigRecord, _super);
function InlineSVG_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
InlineSVG_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("InlineSVG_InternalConfig", "inlineSVG_InternalConfigAttr", "InlineSVG_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.InlineSVG_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.InlineSVG_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
InlineSVG_InternalConfigRecord.fromStructure = function (str) {
return new InlineSVG_InternalConfigRecord(new InlineSVG_InternalConfigRecord.RecordClass({
inlineSVG_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InlineSVG_InternalConfigRecord._isAnonymousRecord = true;
InlineSVG_InternalConfigRecord.UniqueId = "5459a116-00a3-2c30-600a-0b69ff5b7676";
InlineSVG_InternalConfigRecord.init();
return InlineSVG_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.InlineSVG_InternalConfigRecord = InlineSVG_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$InlineSVG_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$InlineSVG_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var InlineSVG_InternalConfigRecordList = (function (_super) {
__extends(InlineSVG_InternalConfigRecordList, _super);
function InlineSVG_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
InlineSVG_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.InlineSVG_InternalConfigRecord;
return InlineSVG_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.InlineSVG_InternalConfigRecordList = InlineSVG_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$TriggerRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TriggerRec = (function (_super) {
__extends(TriggerRec, _super);
function TriggerRec(defaults) {
_super.apply(this, arguments);
}
TriggerRec.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRec.fromStructure = function (str) {
return new TriggerRec(new TriggerRec.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRec.init();
return TriggerRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TriggerRec = TriggerRec;

});
define("OutSystemsUI_2_23.model$SplideProviderClassesRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesRec = (function (_super) {
__extends(SplideProviderClassesRec, _super);
function SplideProviderClassesRec(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRec.attributesToDeclare = function () {
return [
this.attr("Element", "elementAttr", "Element", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Class", "classAttr", "Class", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SplideProviderClassesRec.init();
return SplideProviderClassesRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SplideProviderClassesRec = SplideProviderClassesRec;

});
define("OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRec = (function (_super) {
__extends(ProgressCircleOptionalConfigsRec, _super);
function ProgressCircleOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircleOptionalConfigsRec.init();
return ProgressCircleOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRec = ProgressCircleOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecord = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecord, _super);
function ProgressCircleOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircleOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressCircleOptionalConfigsRecord(new ProgressCircleOptionalConfigsRecord.RecordClass({
progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressCircleOptionalConfigsRecord._isAnonymousRecord = true;
ProgressCircleOptionalConfigsRecord.UniqueId = "4a5616da-c118-9ce5-027a-3dea98170209";
ProgressCircleOptionalConfigsRecord.init();
return ProgressCircleOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRecord = ProgressCircleOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LightboxImageOptionalConfigsRec = (function (_super) {
__extends(LightboxImageOptionalConfigsRec, _super);
function LightboxImageOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
LightboxImageOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("DialogAccessibleName", "dialogAccessibleNameAttr", "dialogA11yName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LightboxImageOptionalConfigsRec.fromStructure = function (str) {
return new LightboxImageOptionalConfigsRec(new LightboxImageOptionalConfigsRec.RecordClass({
dialogAccessibleNameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LightboxImageOptionalConfigsRec.init();
return LightboxImageOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRec = LightboxImageOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$LightboxImageOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LightboxImageOptionalConfigsList = (function (_super) {
__extends(LightboxImageOptionalConfigsList, _super);
function LightboxImageOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
LightboxImageOptionalConfigsList.itemType = OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRec;
return LightboxImageOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.LightboxImageOptionalConfigsList = LightboxImageOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$AccordionItem_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionItem_InternalConfigsList = (function (_super) {
__extends(AccordionItem_InternalConfigsList, _super);
function AccordionItem_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
AccordionItem_InternalConfigsList.itemType = OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec;
return AccordionItem_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AccordionItem_InternalConfigsList = AccordionItem_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsRecord = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsRecord, _super);
function DropdownServerSideItem_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownServerSideItem_InternalConfigs", "dropdownServerSideItem_InternalConfigsAttr", "DropdownServerSideItem_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSideItem_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownServerSideItem_InternalConfigsRecord(new DropdownServerSideItem_InternalConfigsRecord.RecordClass({
dropdownServerSideItem_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownServerSideItem_InternalConfigsRecord._isAnonymousRecord = true;
DropdownServerSideItem_InternalConfigsRecord.UniqueId = "4b7ddf2c-f288-7bb9-e727-747e20481182";
DropdownServerSideItem_InternalConfigsRecord.init();
return DropdownServerSideItem_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRecord = DropdownServerSideItem_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$TimePickerOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRec = (function (_super) {
__extends(TimePickerOptionalConfigsRec, _super);
function TimePickerOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("MinTime", "minTimeAttr", "MinTime", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxTime", "maxTimeAttr", "MaxTime", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimePickerOptionalConfigsRec.init();
return TimePickerOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TimePickerOptionalConfigsRec = TimePickerOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextTextRecord, _super);
function TextTextTextTextTextTextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("ShortcutsDialog1", "shortcutsDialog1Attr", "ShortcutsDialog1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog2", "shortcutsDialog2Attr", "ShortcutsDialog2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog3", "shortcutsDialog3Attr", "ShortcutsDialog3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog4", "shortcutsDialog4Attr", "ShortcutsDialog4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog5", "shortcutsDialog5Attr", "ShortcutsDialog5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog6", "shortcutsDialog6Attr", "ShortcutsDialog6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog7", "shortcutsDialog7Attr", "ShortcutsDialog7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog8", "shortcutsDialog8Attr", "ShortcutsDialog8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextTextRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextTextRecord.UniqueId = "4c3ee0d0-ad51-4546-e234-95b0186f9086";
TextTextTextTextTextTextTextTextRecord.init();
return TextTextTextTextTextTextTextTextRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextRecord = TextTextTextTextTextTextTextTextRecord;

});
define("OutSystemsUI_2_23.model$ProgressTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressTypeRec = (function (_super) {
__extends(ProgressTypeRec, _super);
function ProgressTypeRec(defaults) {
_super.apply(this, arguments);
}
ProgressTypeRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressTypeRec.fromStructure = function (str) {
return new ProgressTypeRec(new ProgressTypeRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressTypeRec.init();
return ProgressTypeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressTypeRec = ProgressTypeRec;

});
define("OutSystemsUI_2_23.model$ProgressTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressTypeList = (function (_super) {
__extends(ProgressTypeList, _super);
function ProgressTypeList(defaults) {
_super.apply(this, arguments);
}
ProgressTypeList.itemType = OutSystemsUI_2_23Model.ProgressTypeRec;
return ProgressTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressTypeList = ProgressTypeList;

});
define("OutSystemsUI_2_23.model$ScrollbarStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleRec = (function (_super) {
__extends(ScrollbarStyleRec, _super);
function ScrollbarStyleRec(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRec.attributesToDeclare = function () {
return [
this.attr("Style", "styleAttr", "Style", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRec.fromStructure = function (str) {
return new ScrollbarStyleRec(new ScrollbarStyleRec.RecordClass({
styleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRec.init();
return ScrollbarStyleRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ScrollbarStyleRec = ScrollbarStyleRec;

});
define("OutSystemsUI_2_23.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ScrollbarStyleRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUI_2_23Model.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ScrollbarStyleList = ScrollbarStyleList;

});
define("OutSystemsUI_2_23.model$ColumnBreakRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColumnBreakRec = (function (_super) {
__extends(ColumnBreakRec, _super);
function ColumnBreakRec(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRec.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRec.fromStructure = function (str) {
return new ColumnBreakRec(new ColumnBreakRec.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRec.init();
return ColumnBreakRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ColumnBreakRec = ColumnBreakRec;

});
define("OutSystemsUI_2_23.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ColumnBreakRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColumnBreakRecord = (function (_super) {
__extends(ColumnBreakRecord, _super);
function ColumnBreakRecord(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecord.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ColumnBreakRec());
}, true, OutSystemsUI_2_23Model.ColumnBreakRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRecord.fromStructure = function (str) {
return new ColumnBreakRecord(new ColumnBreakRecord.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRecord._isAnonymousRecord = true;
ColumnBreakRecord.UniqueId = "d3d78035-82fe-d1e8-12b7-5b0477b02bb3";
ColumnBreakRecord.init();
return ColumnBreakRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ColumnBreakRecord = ColumnBreakRecord;

});
define("OutSystemsUI_2_23.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ColumnBreakRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = OutSystemsUI_2_23Model.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("OutSystemsUI_2_23.model$ButtonLoading_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ButtonLoading_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ButtonLoading_InternalConfigList = (function (_super) {
__extends(ButtonLoading_InternalConfigList, _super);
function ButtonLoading_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
ButtonLoading_InternalConfigList.itemType = OutSystemsUI_2_23Model.ButtonLoading_InternalConfigRec;
return ButtonLoading_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ButtonLoading_InternalConfigList = ButtonLoading_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DropdownOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecord = (function (_super) {
__extends(DropdownOptionalConfigsRecord, _super);
function DropdownOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.DropdownOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownOptionalConfigsRecord(new DropdownOptionalConfigsRecord.RecordClass({
dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionalConfigsRecord._isAnonymousRecord = true;
DropdownOptionalConfigsRecord.UniqueId = "eeaf98d6-9259-b8fa-2fd4-f446eb5f6e38";
DropdownOptionalConfigsRecord.init();
return DropdownOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownOptionalConfigsRecord = DropdownOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$DropdownOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecordList = (function (_super) {
__extends(DropdownOptionalConfigsRecordList, _super);
function DropdownOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DropdownOptionalConfigsRecord;
return DropdownOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownOptionalConfigsRecordList = DropdownOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$StackedCardsPositionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = OutSystemsUI_2_23Model.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextRecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextTextRecordList, _super);
function TextTextTextTextTextTextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextRecordList.itemType = OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextRecord;
return TextTextTextTextTextTextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextRecordList = TextTextTextTextTextTextTextTextRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerRange_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigRec = (function (_super) {
__extends(DatePickerRange_InternalConfigRec, _super);
function DatePickerRange_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ShowTodayButton", "showTodayButtonAttr", "ShowTodayButton", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRange_InternalConfigRec.init();
return DatePickerRange_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRec = DatePickerRange_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$DatePickerRange_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerRange_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigList = (function (_super) {
__extends(DatePickerRange_InternalConfigList, _super);
function DatePickerRange_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigList.itemType = OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRec;
return DatePickerRange_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerRange_InternalConfigList = DatePickerRange_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DirectionRec = (function (_super) {
__extends(DirectionRec, _super);
function DirectionRec(defaults) {
_super.apply(this, arguments);
}
DirectionRec.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRec.init();
return DirectionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DirectionRec = DirectionRec;

});
define("OutSystemsUI_2_23.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DirectionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DirectionRecord = (function (_super) {
__extends(DirectionRecord, _super);
function DirectionRecord(defaults) {
_super.apply(this, arguments);
}
DirectionRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DirectionRec());
}, true, OutSystemsUI_2_23Model.DirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRecord.fromStructure = function (str) {
return new DirectionRecord(new DirectionRecord.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectionRecord._isAnonymousRecord = true;
DirectionRecord.UniqueId = "6aed9ecf-d8b8-7494-1860-97c460601de6";
DirectionRecord.init();
return DirectionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DirectionRecord = DirectionRecord;

});
define("OutSystemsUI_2_23.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DirectionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = OutSystemsUI_2_23Model.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DirectionRecordList = DirectionRecordList;

});
define("OutSystemsUI_2_23.model$Notification_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Notification_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Notification_InternalConfigRecord = (function (_super) {
__extends(Notification_InternalConfigRecord, _super);
function Notification_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Notification_InternalConfig", "notification_InternalConfigAttr", "Notification_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Notification_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Notification_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Notification_InternalConfigRecord.fromStructure = function (str) {
return new Notification_InternalConfigRecord(new Notification_InternalConfigRecord.RecordClass({
notification_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Notification_InternalConfigRecord._isAnonymousRecord = true;
Notification_InternalConfigRecord.UniqueId = "595ef614-18fa-7ba0-6c7e-35967a6a68bb";
Notification_InternalConfigRecord.init();
return Notification_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Notification_InternalConfigRecord = Notification_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$Notification_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Notification_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Notification_InternalConfigRecordList = (function (_super) {
__extends(Notification_InternalConfigRecordList, _super);
function Notification_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Notification_InternalConfigRecord;
return Notification_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Notification_InternalConfigRecordList = Notification_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$DropdownProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownProviderRec = (function (_super) {
__extends(DropdownProviderRec, _super);
function DropdownProviderRec(defaults) {
_super.apply(this, arguments);
}
DropdownProviderRec.attributesToDeclare = function () {
return [
this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownProviderRec.fromStructure = function (str) {
return new DropdownProviderRec(new DropdownProviderRec.RecordClass({
providerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownProviderRec.init();
return DropdownProviderRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownProviderRec = DropdownProviderRec;

});
define("OutSystemsUI_2_23.model$DropdownProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownProviderRecord = (function (_super) {
__extends(DropdownProviderRecord, _super);
function DropdownProviderRecord(defaults) {
_super.apply(this, arguments);
}
DropdownProviderRecord.attributesToDeclare = function () {
return [
this.attr("DropdownProvider", "dropdownProviderAttr", "DropdownProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownProviderRec());
}, true, OutSystemsUI_2_23Model.DropdownProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownProviderRecord.fromStructure = function (str) {
return new DropdownProviderRecord(new DropdownProviderRecord.RecordClass({
dropdownProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownProviderRecord._isAnonymousRecord = true;
DropdownProviderRecord.UniqueId = "555ed978-71b6-48ab-ca3f-c6373918ed04";
DropdownProviderRecord.init();
return DropdownProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownProviderRecord = DropdownProviderRecord;

});
define("OutSystemsUI_2_23.model$PositionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var PositionRec = (function (_super) {
__extends(PositionRec, _super);
function PositionRec(defaults) {
_super.apply(this, arguments);
}
PositionRec.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PositionRec.fromStructure = function (str) {
return new PositionRec(new PositionRec.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRec.init();
return PositionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.PositionRec = PositionRec;

});
define("OutSystemsUI_2_23.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$PositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUI_2_23Model.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.PositionList = PositionList;

});
define("OutSystemsUI_2_23.model$CarouselItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselItemsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselItemsRecordList = (function (_super) {
__extends(CarouselItemsRecordList, _super);
function CarouselItemsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecordList.itemType = OutSystemsUI_2_23Model.CarouselItemsRecord;
return CarouselItemsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselItemsRecordList = CarouselItemsRecordList;

});
define("OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsList = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsList, _super);
function DropdownServerSideItem_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRec;
return DropdownServerSideItem_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsList = DropdownServerSideItem_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemList, _super);
function DEPRECATED_MasterDetailItemList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemList.itemType = OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRec;
return DEPRECATED_MasterDetailItemList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemList = DEPRECATED_MasterDetailItemList;

});
define("OutSystemsUI_2_23.model$FlatpickrConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FlatpickrConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecordList = (function (_super) {
__extends(FlatpickrConfigsRecordList, _super);
function FlatpickrConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecordList.itemType = OutSystemsUI_2_23Model.FlatpickrConfigsRecord;
return FlatpickrConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.FlatpickrConfigsRecordList = FlatpickrConfigsRecordList;

});
define("OutSystemsUI_2_23.model$ShapeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ShapeRec = (function (_super) {
__extends(ShapeRec, _super);
function ShapeRec(defaults) {
_super.apply(this, arguments);
}
ShapeRec.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRec.init();
return ShapeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ShapeRec = ShapeRec;

});
define("OutSystemsUI_2_23.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ShapeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUI_2_23Model.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ShapeList = ShapeList;

});
define("OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRec = (function (_super) {
__extends(ProgressBarOptionalConfigsRec, _super);
function ProgressBarOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBarOptionalConfigsRec.init();
return ProgressBarOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRec = ProgressBarOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$ProgressBarOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsList = (function (_super) {
__extends(ProgressBarOptionalConfigsList, _super);
function ProgressBarOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsList.itemType = OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRec;
return ProgressBarOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressBarOptionalConfigsList = ProgressBarOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$Gallery_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Gallery_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Gallery_InternalConfigRecordList = (function (_super) {
__extends(Gallery_InternalConfigRecordList, _super);
function Gallery_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Gallery_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Gallery_InternalConfigRecord;
return Gallery_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Gallery_InternalConfigRecordList = Gallery_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$Carousel_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Carousel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Carousel_InternalConfigList = (function (_super) {
__extends(Carousel_InternalConfigList, _super);
function Carousel_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Carousel_InternalConfigList.itemType = OutSystemsUI_2_23Model.Carousel_InternalConfigRec;
return Carousel_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Carousel_InternalConfigList = Carousel_InternalConfigList;

});
define("OutSystemsUI_2_23.model$BooleanTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BooleanTypesRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanTypesRecordList = (function (_super) {
__extends(BooleanTypesRecordList, _super);
function BooleanTypesRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecordList.itemType = OutSystemsUI_2_23Model.BooleanTypesRecord;
return BooleanTypesRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BooleanTypesRecordList = BooleanTypesRecordList;

});
define("OutSystemsUI_2_23.model$TimePicker_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigRec = (function (_super) {
__extends(TimePicker_InternalConfigRec, _super);
function TimePicker_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeFormat", "timeFormatAttr", "TimeFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is24Hours", "is24HoursAttr", "Is24Hours", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("InitialTime", "initialTimeAttr", "InitialTime", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MinTime", "minTimeAttr", "MinTime", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxTime", "maxTimeAttr", "MaxTime", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimePicker_InternalConfigRec.init();
return TimePicker_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TimePicker_InternalConfigRec = TimePicker_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$TimePicker_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TimePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigRecord = (function (_super) {
__extends(TimePicker_InternalConfigRecord, _super);
function TimePicker_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("TimePicker_InternalConfig", "timePicker_InternalConfigAttr", "TimePicker_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TimePicker_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.TimePicker_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
TimePicker_InternalConfigRecord.fromStructure = function (str) {
return new TimePicker_InternalConfigRecord(new TimePicker_InternalConfigRecord.RecordClass({
timePicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimePicker_InternalConfigRecord._isAnonymousRecord = true;
TimePicker_InternalConfigRecord.UniqueId = "9d2e2f22-7673-adca-e3a8-ffd5372e9ee6";
TimePicker_InternalConfigRecord.init();
return TimePicker_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TimePicker_InternalConfigRecord = TimePicker_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$TimePicker_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TimePicker_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigRecordList = (function (_super) {
__extends(TimePicker_InternalConfigRecordList, _super);
function TimePicker_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.TimePicker_InternalConfigRecord;
return TimePicker_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TimePicker_InternalConfigRecordList = TimePicker_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionList"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsRec = (function (_super) {
__extends(DropdownTags_InternalConfigsRec, _super);
function DropdownTags_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OptionsList", "optionsListAttr", "OptionsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionList());
}, true, OutSystemsUI_2_23Model.DropdownOptionList), 
this.attr("StartingSelection", "startingSelectionAttr", "StartingSelection", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionList());
}, true, OutSystemsUI_2_23Model.DropdownOptionList), 
this.attr("Prompt", "promptAttr", "Prompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Select an item";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, true), 
this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SanitizeDropdownValues", "sanitizeDropdownValuesAttr", "SanitizeDropdownValues", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTags_InternalConfigsRec.init();
return DropdownTags_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRec = DropdownTags_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$DropdownTags_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsList = (function (_super) {
__extends(DropdownTags_InternalConfigsList, _super);
function DropdownTags_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRec;
return DropdownTags_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownTags_InternalConfigsList = DropdownTags_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$CarouselProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselProviderRecord = (function (_super) {
__extends(CarouselProviderRecord, _super);
function CarouselProviderRecord(defaults) {
_super.apply(this, arguments);
}
CarouselProviderRecord.attributesToDeclare = function () {
return [
this.attr("CarouselProvider", "carouselProviderAttr", "CarouselProvider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselProviderRec());
}, true, OutSystemsUI_2_23Model.CarouselProviderRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselProviderRecord.fromStructure = function (str) {
return new CarouselProviderRecord(new CarouselProviderRecord.RecordClass({
carouselProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselProviderRecord._isAnonymousRecord = true;
CarouselProviderRecord.UniqueId = "5de78923-37e1-8f9b-3df5-288a2c31a1df";
CarouselProviderRecord.init();
return CarouselProviderRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselProviderRecord = CarouselProviderRecord;

});
define("OutSystemsUI_2_23.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AutoplayRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUI_2_23Model.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AutoplayList = AutoplayList;

});
define("OutSystemsUI_2_23.model$FloatingPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FloatingPositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FloatingPositionList = (function (_super) {
__extends(FloatingPositionList, _super);
function FloatingPositionList(defaults) {
_super.apply(this, arguments);
}
FloatingPositionList.itemType = OutSystemsUI_2_23Model.FloatingPositionRec;
return FloatingPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.FloatingPositionList = FloatingPositionList;

});
define("OutSystemsUI_2_23.model$DateTypePartsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DateTypePartsRec = (function (_super) {
__extends(DateTypePartsRec, _super);
function DateTypePartsRec(defaults) {
_super.apply(this, arguments);
}
DateTypePartsRec.attributesToDeclare = function () {
return [
this.attr("Day", "dayAttr", "day", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Month", "monthAttr", "month", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Year", "yearAttr", "year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Hours", "hoursAttr", "hours", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Minutes", "minutesAttr", "minutes", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Seconds", "secondsAttr", "seconds", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DateTypePartsRec.init();
return DateTypePartsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DateTypePartsRec = DateTypePartsRec;

});
define("OutSystemsUI_2_23.model$DateTypePartsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DateTypePartsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DateTypePartsRecord = (function (_super) {
__extends(DateTypePartsRecord, _super);
function DateTypePartsRecord(defaults) {
_super.apply(this, arguments);
}
DateTypePartsRecord.attributesToDeclare = function () {
return [
this.attr("DateTypeParts", "dateTypePartsAttr", "DateTypeParts", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DateTypePartsRec());
}, true, OutSystemsUI_2_23Model.DateTypePartsRec)
].concat(_super.attributesToDeclare.call(this));
};
DateTypePartsRecord.fromStructure = function (str) {
return new DateTypePartsRecord(new DateTypePartsRecord.RecordClass({
dateTypePartsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DateTypePartsRecord._isAnonymousRecord = true;
DateTypePartsRecord.UniqueId = "5e39848e-fe7e-9629-296e-9ee302ea007b";
DateTypePartsRecord.init();
return DateTypePartsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DateTypePartsRecord = DateTypePartsRecord;

});
define("OutSystemsUI_2_23.model$VideoCaptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoCaptionsRec = (function (_super) {
__extends(VideoCaptionsRec, _super);
function VideoCaptionsRec(defaults) {
_super.apply(this, arguments);
}
VideoCaptionsRec.attributesToDeclare = function () {
return [
this.attr("LanguageCode", "languageCodeAttr", "LanguageCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SourceFile", "sourceFileAttr", "SourceFile", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VideoCaptionsRec.init();
return VideoCaptionsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VideoCaptionsRec = VideoCaptionsRec;

});
define("OutSystemsUI_2_23.model$VideoCaptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoCaptionsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoCaptionsRecord = (function (_super) {
__extends(VideoCaptionsRecord, _super);
function VideoCaptionsRecord(defaults) {
_super.apply(this, arguments);
}
VideoCaptionsRecord.attributesToDeclare = function () {
return [
this.attr("VideoCaptions", "videoCaptionsAttr", "VideoCaptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.VideoCaptionsRec());
}, true, OutSystemsUI_2_23Model.VideoCaptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
VideoCaptionsRecord.fromStructure = function (str) {
return new VideoCaptionsRecord(new VideoCaptionsRecord.RecordClass({
videoCaptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VideoCaptionsRecord._isAnonymousRecord = true;
VideoCaptionsRecord.UniqueId = "b1b0de8f-b68d-a44c-bd6f-b93318d438cd";
VideoCaptionsRecord.init();
return VideoCaptionsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VideoCaptionsRecord = VideoCaptionsRecord;

});
define("OutSystemsUI_2_23.model$VideoCaptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoCaptionsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoCaptionsRecordList = (function (_super) {
__extends(VideoCaptionsRecordList, _super);
function VideoCaptionsRecordList(defaults) {
_super.apply(this, arguments);
}
VideoCaptionsRecordList.itemType = OutSystemsUI_2_23Model.VideoCaptionsRecord;
return VideoCaptionsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VideoCaptionsRecordList = VideoCaptionsRecordList;

});
define("OutSystemsUI_2_23.model$GradientColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GradientColorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientColorList = (function (_super) {
__extends(GradientColorList, _super);
function GradientColorList(defaults) {
_super.apply(this, arguments);
}
GradientColorList.itemType = OutSystemsUI_2_23Model.GradientColorRec;
return GradientColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.GradientColorList = GradientColorList;

});
define("OutSystemsUI_2_23.model$Submenu_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigRec = (function (_super) {
__extends(Submenu_InternalConfigRec, _super);
function Submenu_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Submenu_InternalConfigRec.init();
return Submenu_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Submenu_InternalConfigRec = Submenu_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$TabsContentItem_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsContentItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsContentItem_InternalConfigList = (function (_super) {
__extends(TabsContentItem_InternalConfigList, _super);
function TabsContentItem_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
TabsContentItem_InternalConfigList.itemType = OutSystemsUI_2_23Model.TabsContentItem_InternalConfigRec;
return TabsContentItem_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TabsContentItem_InternalConfigList = TabsContentItem_InternalConfigList;

});
define("OutSystemsUI_2_23.model$MonthList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthList = (function (_super) {
__extends(MonthList, _super);
function MonthList(defaults) {
_super.apply(this, arguments);
}
MonthList.itemType = OutSystemsUI_2_23Model.MonthRec;
return MonthList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthList = MonthList;

});
define("OutSystemsUI_2_23.model$DropdownProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownProviderList = (function (_super) {
__extends(DropdownProviderList, _super);
function DropdownProviderList(defaults) {
_super.apply(this, arguments);
}
DropdownProviderList.itemType = OutSystemsUI_2_23Model.DropdownProviderRec;
return DropdownProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownProviderList = DropdownProviderList;

});
define("OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsRecord = (function (_super) {
__extends(DropdownTags_InternalConfigsRecord, _super);
function DropdownTags_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownTags_InternalConfigs", "dropdownTags_InternalConfigsAttr", "DropdownTags_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTags_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownTags_InternalConfigsRecord(new DropdownTags_InternalConfigsRecord.RecordClass({
dropdownTags_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTags_InternalConfigsRecord._isAnonymousRecord = true;
DropdownTags_InternalConfigsRecord.UniqueId = "60dd8e45-a468-d310-f640-092e44284cd4";
DropdownTags_InternalConfigsRecord.init();
return DropdownTags_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRecord = DropdownTags_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$ProgressCircle_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigRec = (function (_super) {
__extends(ProgressCircle_InternalConfigRec, _super);
function ProgressCircle_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Progress", "progressAttr", "Progress", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProgressColor", "progressColorAttr", "ProgressColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProgressCircleSize", "progressCircleSizeAttr", "ProgressCircleSize", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TrailColor", "trailColorAttr", "TrailColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Thickness", "thicknessAttr", "Thickness", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.shape.rounded;
}, true), 
this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialProgress", "initialProgressAttr", "InitialProgress", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircle_InternalConfigRec.init();
return ProgressCircle_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRec = ProgressCircle_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$ProgressCircle_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressCircle_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigList = (function (_super) {
__extends(ProgressCircle_InternalConfigList, _super);
function ProgressCircle_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigList.itemType = OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRec;
return ProgressCircle_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressCircle_InternalConfigList = ProgressCircle_InternalConfigList;

});
define("OutSystemsUI_2_23.model$CarouselOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsList = (function (_super) {
__extends(CarouselOptionalConfigsList, _super);
function CarouselOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsList.itemType = OutSystemsUI_2_23Model.CarouselOptionalConfigsRec;
return CarouselOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselOptionalConfigsList = CarouselOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$Tooltip_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigRecord = (function (_super) {
__extends(Tooltip_InternalConfigRecord, _super);
function Tooltip_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Tooltip_InternalConfig", "tooltip_InternalConfigAttr", "Tooltip_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Tooltip_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Tooltip_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Tooltip_InternalConfigRecord.fromStructure = function (str) {
return new Tooltip_InternalConfigRecord(new Tooltip_InternalConfigRecord.RecordClass({
tooltip_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Tooltip_InternalConfigRecord._isAnonymousRecord = true;
Tooltip_InternalConfigRecord.UniqueId = "6ab5e6b4-174a-cf50-b235-43176d86ee5b";
Tooltip_InternalConfigRecord.init();
return Tooltip_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Tooltip_InternalConfigRecord = Tooltip_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$Tooltip_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Tooltip_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tooltip_InternalConfigRecordList = (function (_super) {
__extends(Tooltip_InternalConfigRecordList, _super);
function Tooltip_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Tooltip_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Tooltip_InternalConfigRecord;
return Tooltip_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Tooltip_InternalConfigRecordList = Tooltip_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecord = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecord, _super);
function NoUiSliderConfigs_RangeRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs_Range", "noUiSliderConfigs_RangeAttr", "NoUiSliderConfigs_Range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRec());
}, true, OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigs_RangeRecord.fromStructure = function (str) {
return new NoUiSliderConfigs_RangeRecord(new NoUiSliderConfigs_RangeRecord.RecordClass({
noUiSliderConfigs_RangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigs_RangeRecord._isAnonymousRecord = true;
NoUiSliderConfigs_RangeRecord.UniqueId = "f5a4b730-026a-0e1a-254b-a192b86617da";
NoUiSliderConfigs_RangeRecord.init();
return NoUiSliderConfigs_RangeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRecord = NoUiSliderConfigs_RangeRecord;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecordList = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecordList, _super);
function NoUiSliderConfigs_RangeRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecordList.itemType = OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRecord;
return NoUiSliderConfigs_RangeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRecordList = NoUiSliderConfigs_RangeRecordList;

});
define("OutSystemsUI_2_23.model$ProgressTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressTypeRecord = (function (_super) {
__extends(ProgressTypeRecord, _super);
function ProgressTypeRecord(defaults) {
_super.apply(this, arguments);
}
ProgressTypeRecord.attributesToDeclare = function () {
return [
this.attr("ProgressType", "progressTypeAttr", "ProgressType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ProgressTypeRec());
}, true, OutSystemsUI_2_23Model.ProgressTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressTypeRecord.fromStructure = function (str) {
return new ProgressTypeRecord(new ProgressTypeRecord.RecordClass({
progressTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressTypeRecord._isAnonymousRecord = true;
ProgressTypeRecord.UniqueId = "b74e1d6b-9301-4098-3e9c-be4ec0769dfc";
ProgressTypeRecord.init();
return ProgressTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressTypeRecord = ProgressTypeRecord;

});
define("OutSystemsUI_2_23.model$ProgressTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressTypeRecordList = (function (_super) {
__extends(ProgressTypeRecordList, _super);
function ProgressTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressTypeRecordList.itemType = OutSystemsUI_2_23Model.ProgressTypeRecord;
return ProgressTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressTypeRecordList = ProgressTypeRecordList;

});
define("OutSystemsUI_2_23.model$VideoStateRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoStateRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoStateRecordList = (function (_super) {
__extends(VideoStateRecordList, _super);
function VideoStateRecordList(defaults) {
_super.apply(this, arguments);
}
VideoStateRecordList.itemType = OutSystemsUI_2_23Model.VideoStateRecord;
return VideoStateRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VideoStateRecordList = VideoStateRecordList;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsList = (function (_super) {
__extends(NoUiSliderConfigsList, _super);
function NoUiSliderConfigsList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsList.itemType = OutSystemsUI_2_23Model.NoUiSliderConfigsRec;
return NoUiSliderConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.NoUiSliderConfigsList = NoUiSliderConfigsList;

});
define("OutSystemsUI_2_23.model$DatePickerOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRec = (function (_super) {
__extends(DatePickerOptionalConfigsRec, _super);
function DatePickerOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("InitialDate", "initialDateAttr", "InitialDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay.sunday;
}, true), 
this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerOptionalConfigsRec.init();
return DatePickerOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerOptionalConfigsRec = DatePickerOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$ListNavigationRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ListNavigationRec = (function (_super) {
__extends(ListNavigationRec, _super);
function ListNavigationRec(defaults) {
_super.apply(this, arguments);
}
ListNavigationRec.attributesToDeclare = function () {
return [
this.attr("Page", "pageAttr", "Page", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("StartIndex", "startIndexAttr", "StartIndex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ListNavigationRec.init();
return ListNavigationRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ListNavigationRec = ListNavigationRec;

});
define("OutSystemsUI_2_23.model$DatePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecord = (function (_super) {
__extends(DatePickerOptionalConfigsRecord, _super);
function DatePickerOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.DatePickerOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerOptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerOptionalConfigsRecord(new DatePickerOptionalConfigsRecord.RecordClass({
datePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerOptionalConfigsRecord._isAnonymousRecord = true;
DatePickerOptionalConfigsRecord.UniqueId = "6a89adb4-22bf-41d9-be58-bda75b7f87a6";
DatePickerOptionalConfigsRecord.init();
return DatePickerOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerOptionalConfigsRecord = DatePickerOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$TimePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TimePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecord = (function (_super) {
__extends(TimePickerOptionalConfigsRecord, _super);
function TimePickerOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TimePickerOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.TimePickerOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TimePickerOptionalConfigsRecord.fromStructure = function (str) {
return new TimePickerOptionalConfigsRecord(new TimePickerOptionalConfigsRecord.RecordClass({
timePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimePickerOptionalConfigsRecord._isAnonymousRecord = true;
TimePickerOptionalConfigsRecord.UniqueId = "ec609986-1c02-786b-0405-4ee96cbd436f";
TimePickerOptionalConfigsRecord.init();
return TimePickerOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TimePickerOptionalConfigsRecord = TimePickerOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$TimePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TimePickerOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecordList = (function (_super) {
__extends(TimePickerOptionalConfigsRecordList, _super);
function TimePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.TimePickerOptionalConfigsRecord;
return TimePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TimePickerOptionalConfigsRecordList = TimePickerOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord, _super);
function TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialIntervalEnd", "initialIntervalEndAttr", "InitialIntervalEnd", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InitialIntervalStart", "initialIntervalStartAttr", "InitialIntervalStart", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsVertical", "isVerticalAttr", "IsVertical", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("VerticalHeight", "verticalHeightAttr", "VerticalHeight", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord._isAnonymousRecord = true;
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.UniqueId = "f01d650d-b89c-bacd-8f4a-32786da5428e";
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.init();
return TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;

});
define("OutSystemsUI_2_23.model$TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList, _super);
function TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList.itemType = OutSystemsUI_2_23Model.TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
return TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = TextDecimalDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerCalendarTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerCalendarTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeRecord = (function (_super) {
__extends(DatePickerCalendarTypeRecord, _super);
function DatePickerCalendarTypeRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerCalendarType", "datePickerCalendarTypeAttr", "DatePickerCalendarType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerCalendarTypeRec());
}, true, OutSystemsUI_2_23Model.DatePickerCalendarTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerCalendarTypeRecord.fromStructure = function (str) {
return new DatePickerCalendarTypeRecord(new DatePickerCalendarTypeRecord.RecordClass({
datePickerCalendarTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerCalendarTypeRecord._isAnonymousRecord = true;
DatePickerCalendarTypeRecord.UniqueId = "a68b0c52-181c-17c8-135d-53e3df5380f5";
DatePickerCalendarTypeRecord.init();
return DatePickerCalendarTypeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerCalendarTypeRecord = DatePickerCalendarTypeRecord;

});
define("OutSystemsUI_2_23.model$DatePickerCalendarTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerCalendarTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerCalendarTypeRecordList = (function (_super) {
__extends(DatePickerCalendarTypeRecordList, _super);
function DatePickerCalendarTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerCalendarTypeRecordList.itemType = OutSystemsUI_2_23Model.DatePickerCalendarTypeRecord;
return DatePickerCalendarTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerCalendarTypeRecordList = DatePickerCalendarTypeRecordList;

});
define("OutSystemsUI_2_23.model$StepsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StepsRec = (function (_super) {
__extends(StepsRec, _super);
function StepsRec(defaults) {
_super.apply(this, arguments);
}
StepsRec.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StepsRec.fromStructure = function (str) {
return new StepsRec(new StepsRec.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRec.init();
return StepsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.StepsRec = StepsRec;

});
define("OutSystemsUI_2_23.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$StepsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StepsRecord = (function (_super) {
__extends(StepsRecord, _super);
function StepsRecord(defaults) {
_super.apply(this, arguments);
}
StepsRecord.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.StepsRec());
}, true, OutSystemsUI_2_23Model.StepsRec)
].concat(_super.attributesToDeclare.call(this));
};
StepsRecord.fromStructure = function (str) {
return new StepsRecord(new StepsRecord.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRecord._isAnonymousRecord = true;
StepsRecord.UniqueId = "6e480941-4b51-c709-4e00-1aee6d7251db";
StepsRecord.init();
return StepsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.StepsRecord = StepsRecord;

});
define("OutSystemsUI_2_23.model$DEPRECATED_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DEPRECATED_ColorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorList = (function (_super) {
__extends(DEPRECATED_ColorList, _super);
function DEPRECATED_ColorList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorList.itemType = OutSystemsUI_2_23Model.DEPRECATED_ColorRec;
return DEPRECATED_ColorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DEPRECATED_ColorList = DEPRECATED_ColorList;

});
define("OutSystemsUI_2_23.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BulkActionsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = OutSystemsUI_2_23Model.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BulkActionsRecordList = BulkActionsRecordList;

});
define("OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsRec = (function (_super) {
__extends(DropdownServerSide_InternalConfigsRec, _super);
function DropdownServerSide_InternalConfigsRec(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "1";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSide_InternalConfigsRec.init();
return DropdownServerSide_InternalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRec = DropdownServerSide_InternalConfigsRec;

});
define("OutSystemsUI_2_23.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ColumnBreakRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUI_2_23Model.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ColumnBreakList = ColumnBreakList;

});
define("OutSystemsUI_2_23.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BreakColumnsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BreakColumnsRecord = (function (_super) {
__extends(BreakColumnsRecord, _super);
function BreakColumnsRecord(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecord.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.BreakColumnsRec());
}, true, OutSystemsUI_2_23Model.BreakColumnsRec)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRecord.fromStructure = function (str) {
return new BreakColumnsRecord(new BreakColumnsRecord.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRecord._isAnonymousRecord = true;
BreakColumnsRecord.UniqueId = "72da9d72-c426-0481-87dc-a8f61afdc9fd";
BreakColumnsRecord.init();
return BreakColumnsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BreakColumnsRecord = BreakColumnsRecord;

});
define("OutSystemsUI_2_23.model$DropdownProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownProviderRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownProviderRecordList = (function (_super) {
__extends(DropdownProviderRecordList, _super);
function DropdownProviderRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownProviderRecordList.itemType = OutSystemsUI_2_23Model.DropdownProviderRecord;
return DropdownProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownProviderRecordList = DropdownProviderRecordList;

});
define("OutSystemsUI_2_23.model$ReturnMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ReturnMessageRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ReturnMessageRecordList = (function (_super) {
__extends(ReturnMessageRecordList, _super);
function ReturnMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ReturnMessageRecordList.itemType = OutSystemsUI_2_23Model.ReturnMessageRecord;
return ReturnMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ReturnMessageRecordList = ReturnMessageRecordList;

});
define("OutSystemsUI_2_23.model$VirtualSelectConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VirtualSelectConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecord = (function (_super) {
__extends(VirtualSelectConfigsRecord, _super);
function VirtualSelectConfigsRecord(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecord.attributesToDeclare = function () {
return [
this.attr("VirtualSelectConfigs", "virtualSelectConfigsAttr", "VirtualSelectConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.VirtualSelectConfigsRec());
}, true, OutSystemsUI_2_23Model.VirtualSelectConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
VirtualSelectConfigsRecord.fromStructure = function (str) {
return new VirtualSelectConfigsRecord(new VirtualSelectConfigsRecord.RecordClass({
virtualSelectConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VirtualSelectConfigsRecord._isAnonymousRecord = true;
VirtualSelectConfigsRecord.UniqueId = "89e8412f-0895-e1c7-3aa7-502629d4decd";
VirtualSelectConfigsRecord.init();
return VirtualSelectConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VirtualSelectConfigsRecord = VirtualSelectConfigsRecord;

});
define("OutSystemsUI_2_23.model$VirtualSelectConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VirtualSelectConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecordList = (function (_super) {
__extends(VirtualSelectConfigsRecordList, _super);
function VirtualSelectConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecordList.itemType = OutSystemsUI_2_23Model.VirtualSelectConfigsRecord;
return VirtualSelectConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VirtualSelectConfigsRecordList = VirtualSelectConfigsRecordList;

});
define("OutSystemsUI_2_23.model$TabsOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRec = (function (_super) {
__extends(TabsOptionalConfigsRec, _super);
function TabsOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TabsOptionalConfigsRec.init();
return TabsOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TabsOptionalConfigsRec = TabsOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$TabsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecord = (function (_super) {
__extends(TabsOptionalConfigsRecord, _super);
function TabsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TabsOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.TabsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsOptionalConfigsRecord.fromStructure = function (str) {
return new TabsOptionalConfigsRecord(new TabsOptionalConfigsRecord.RecordClass({
tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsOptionalConfigsRecord._isAnonymousRecord = true;
TabsOptionalConfigsRecord.UniqueId = "9b4e76bf-be29-0fa4-57c0-950458b81c24";
TabsOptionalConfigsRecord.init();
return TabsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TabsOptionalConfigsRecord = TabsOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$TabsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecordList = (function (_super) {
__extends(TabsOptionalConfigsRecordList, _super);
function TabsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.TabsOptionalConfigsRecord;
return TabsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TabsOptionalConfigsRecordList = TabsOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$VideoOptionalConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoOptionalConfigsRec = (function (_super) {
__extends(VideoOptionalConfigsRec, _super);
function VideoOptionalConfigsRec(defaults) {
_super.apply(this, arguments);
}
VideoOptionalConfigsRec.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Muted", "mutedAttr", "Muted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PosterURL", "posterURLAttr", "PosterURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VideoOptionalConfigsRec.init();
return VideoOptionalConfigsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VideoOptionalConfigsRec = VideoOptionalConfigsRec;

});
define("OutSystemsUI_2_23.model$VideoOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoOptionalConfigsRecord = (function (_super) {
__extends(VideoOptionalConfigsRecord, _super);
function VideoOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
VideoOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("VideoOptionalConfigs", "videoOptionalConfigsAttr", "VideoOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.VideoOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.VideoOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
VideoOptionalConfigsRecord.fromStructure = function (str) {
return new VideoOptionalConfigsRecord(new VideoOptionalConfigsRecord.RecordClass({
videoOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VideoOptionalConfigsRecord._isAnonymousRecord = true;
VideoOptionalConfigsRecord.UniqueId = "75a2ccfc-d8d8-8c9b-6804-79fdded2d1d8";
VideoOptionalConfigsRecord.init();
return VideoOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.VideoOptionalConfigsRecord = VideoOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$CarouselItemsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselItemsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselItemsList = (function (_super) {
__extends(CarouselItemsList, _super);
function CarouselItemsList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsList.itemType = OutSystemsUI_2_23Model.CarouselItemsRec;
return CarouselItemsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselItemsList = CarouselItemsList;

});
define("OutSystemsUI_2_23.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("InitialIntervalEnd", "initialIntervalEndAttr", "InitialIntervalEnd", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("InitialIntervalStart", "initialIntervalStartAttr", "InitialIntervalStart", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.UniqueId = "845b5f28-a6e4-8277-561b-d4b51c5e965a";
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord.init();
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord = BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;

});
define("OutSystemsUI_2_23.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList.itemType = OutSystemsUI_2_23Model.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecord;
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList = BooleanBooleanIntegerIntegerIntegerIntegerIntegerIntegerRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerRange_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerRange_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigRecord = (function (_super) {
__extends(DatePickerRange_InternalConfigRecord, _super);
function DatePickerRange_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerRange_InternalConfig", "datePickerRange_InternalConfigAttr", "DatePickerRange_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRange_InternalConfigRecord.fromStructure = function (str) {
return new DatePickerRange_InternalConfigRecord(new DatePickerRange_InternalConfigRecord.RecordClass({
datePickerRange_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerRange_InternalConfigRecord._isAnonymousRecord = true;
DatePickerRange_InternalConfigRecord.UniqueId = "be925aec-1254-84b1-efdb-15c0335eaf79";
DatePickerRange_InternalConfigRecord.init();
return DatePickerRange_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRecord = DatePickerRange_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$DatePickerRange_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerRange_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRange_InternalConfigRecordList = (function (_super) {
__extends(DatePickerRange_InternalConfigRecordList, _super);
function DatePickerRange_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRecord;
return DatePickerRange_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerRange_InternalConfigRecordList = DatePickerRange_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$StackedCardsPositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUI_2_23Model.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.StackedCardsPositionList = StackedCardsPositionList;

});
define("OutSystemsUI_2_23.model$DEPRECATED_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DEPRECATED_ColorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRecord = (function (_super) {
__extends(DEPRECATED_ColorRecord, _super);
function DEPRECATED_ColorRecord(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRecord.attributesToDeclare = function () {
return [
this.attr("DEPRECATED_Color", "dEPRECATED_ColorAttr", "DEPRECATED_Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DEPRECATED_ColorRec());
}, true, OutSystemsUI_2_23Model.DEPRECATED_ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
DEPRECATED_ColorRecord.fromStructure = function (str) {
return new DEPRECATED_ColorRecord(new DEPRECATED_ColorRecord.RecordClass({
dEPRECATED_ColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DEPRECATED_ColorRecord._isAnonymousRecord = true;
DEPRECATED_ColorRecord.UniqueId = "9ae44cb9-236e-acfd-2feb-57725a752af2";
DEPRECATED_ColorRecord.init();
return DEPRECATED_ColorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DEPRECATED_ColorRecord = DEPRECATED_ColorRecord;

});
define("OutSystemsUI_2_23.model$DEPRECATED_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DEPRECATED_ColorRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRecordList = (function (_super) {
__extends(DEPRECATED_ColorRecordList, _super);
function DEPRECATED_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRecordList.itemType = OutSystemsUI_2_23Model.DEPRECATED_ColorRecord;
return DEPRECATED_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DEPRECATED_ColorRecordList = DEPRECATED_ColorRecordList;

});
define("OutSystemsUI_2_23.model$CarouselDirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselDirectionRec = (function (_super) {
__extends(CarouselDirectionRec, _super);
function CarouselDirectionRec(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRec.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CarouselDirectionRec.fromStructure = function (str) {
return new CarouselDirectionRec(new CarouselDirectionRec.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselDirectionRec.init();
return CarouselDirectionRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselDirectionRec = CarouselDirectionRec;

});
define("OutSystemsUI_2_23.model$CarouselDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselDirectionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselDirectionRecord = (function (_super) {
__extends(CarouselDirectionRecord, _super);
function CarouselDirectionRecord(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecord.attributesToDeclare = function () {
return [
this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselDirectionRec());
}, true, OutSystemsUI_2_23Model.CarouselDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselDirectionRecord.fromStructure = function (str) {
return new CarouselDirectionRecord(new CarouselDirectionRecord.RecordClass({
carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselDirectionRecord._isAnonymousRecord = true;
CarouselDirectionRecord.UniqueId = "7ab034d1-5012-634d-9942-ba9399c94ade";
CarouselDirectionRecord.init();
return CarouselDirectionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselDirectionRecord = CarouselDirectionRecord;

});
define("OutSystemsUI_2_23.model$RegisteredCallbackEventsRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RegisteredCallbackEventsRec = (function (_super) {
__extends(RegisteredCallbackEventsRec, _super);
function RegisteredCallbackEventsRec(defaults) {
_super.apply(this, arguments);
}
RegisteredCallbackEventsRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredCallbackEventsRec.fromStructure = function (str) {
return new RegisteredCallbackEventsRec(new RegisteredCallbackEventsRec.RecordClass({
nameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RegisteredCallbackEventsRec.init();
return RegisteredCallbackEventsRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RegisteredCallbackEventsRec = RegisteredCallbackEventsRec;

});
define("OutSystemsUI_2_23.model$RegisteredCallbackEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RegisteredCallbackEventsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RegisteredCallbackEventsRecord = (function (_super) {
__extends(RegisteredCallbackEventsRecord, _super);
function RegisteredCallbackEventsRecord(defaults) {
_super.apply(this, arguments);
}
RegisteredCallbackEventsRecord.attributesToDeclare = function () {
return [
this.attr("RegisteredCallbackEvents", "registeredCallbackEventsAttr", "RegisteredCallbackEvents", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.RegisteredCallbackEventsRec());
}, true, OutSystemsUI_2_23Model.RegisteredCallbackEventsRec)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredCallbackEventsRecord.fromStructure = function (str) {
return new RegisteredCallbackEventsRecord(new RegisteredCallbackEventsRecord.RecordClass({
registeredCallbackEventsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RegisteredCallbackEventsRecord._isAnonymousRecord = true;
RegisteredCallbackEventsRecord.UniqueId = "975e2d45-5475-7c73-ab9c-6898861f1a85";
RegisteredCallbackEventsRecord.init();
return RegisteredCallbackEventsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.RegisteredCallbackEventsRecord = RegisteredCallbackEventsRecord;

});
define("OutSystemsUI_2_23.model$RegisteredCallbackEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RegisteredCallbackEventsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RegisteredCallbackEventsRecordList = (function (_super) {
__extends(RegisteredCallbackEventsRecordList, _super);
function RegisteredCallbackEventsRecordList(defaults) {
_super.apply(this, arguments);
}
RegisteredCallbackEventsRecordList.itemType = OutSystemsUI_2_23Model.RegisteredCallbackEventsRecord;
return RegisteredCallbackEventsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RegisteredCallbackEventsRecordList = RegisteredCallbackEventsRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerTimeFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRec = (function (_super) {
__extends(DatePickerTimeFormatRec, _super);
function DatePickerTimeFormatRec(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRec.attributesToDeclare = function () {
return [
this.attr("Timeformat", "timeformatAttr", "Timeformat", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerTimeFormatRec.fromStructure = function (str) {
return new DatePickerTimeFormatRec(new DatePickerTimeFormatRec.RecordClass({
timeformatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerTimeFormatRec.init();
return DatePickerTimeFormatRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerTimeFormatRec = DatePickerTimeFormatRec;

});
define("OutSystemsUI_2_23.model$DatePickerTimeFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerTimeFormatRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatList = (function (_super) {
__extends(DatePickerTimeFormatList, _super);
function DatePickerTimeFormatList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatList.itemType = OutSystemsUI_2_23Model.DatePickerTimeFormatRec;
return DatePickerTimeFormatList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerTimeFormatList = DatePickerTimeFormatList;

});
define("OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsRecord = (function (_super) {
__extends(DropdownServerSide_InternalConfigsRecord, _super);
function DropdownServerSide_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownServerSide_InternalConfigs", "dropdownServerSide_InternalConfigsAttr", "DropdownServerSide_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownServerSide_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownServerSide_InternalConfigsRecord(new DropdownServerSide_InternalConfigsRecord.RecordClass({
dropdownServerSide_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownServerSide_InternalConfigsRecord._isAnonymousRecord = true;
DropdownServerSide_InternalConfigsRecord.UniqueId = "7eca2e19-855a-94fa-e39c-9110dcf5a15e";
DropdownServerSide_InternalConfigsRecord.init();
return DropdownServerSide_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRecord = DropdownServerSide_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$MonthPicker_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthPicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigRecord = (function (_super) {
__extends(MonthPicker_InternalConfigRecord, _super);
function MonthPicker_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("MonthPicker_InternalConfig", "monthPicker_InternalConfigAttr", "MonthPicker_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthPicker_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.MonthPicker_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthPicker_InternalConfigRecord.fromStructure = function (str) {
return new MonthPicker_InternalConfigRecord(new MonthPicker_InternalConfigRecord.RecordClass({
monthPicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthPicker_InternalConfigRecord._isAnonymousRecord = true;
MonthPicker_InternalConfigRecord.UniqueId = "7f46553e-2e41-f4fa-5d32-b4008892af54";
MonthPicker_InternalConfigRecord.init();
return MonthPicker_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthPicker_InternalConfigRecord = MonthPicker_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MessageStatusRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUI_2_23Model.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MessageStatusList = MessageStatusList;

});
define("OutSystemsUI_2_23.model$GradientColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GradientColorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientColorRecord = (function (_super) {
__extends(GradientColorRecord, _super);
function GradientColorRecord(defaults) {
_super.apply(this, arguments);
}
GradientColorRecord.attributesToDeclare = function () {
return [
this.attr("GradientColor", "gradientColorAttr", "GradientColor", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.GradientColorRec());
}, true, OutSystemsUI_2_23Model.GradientColorRec)
].concat(_super.attributesToDeclare.call(this));
};
GradientColorRecord.fromStructure = function (str) {
return new GradientColorRecord(new GradientColorRecord.RecordClass({
gradientColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GradientColorRecord._isAnonymousRecord = true;
GradientColorRecord.UniqueId = "b418b758-6a79-4cce-f5d4-9778f78afd34";
GradientColorRecord.init();
return GradientColorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.GradientColorRecord = GradientColorRecord;

});
define("OutSystemsUI_2_23.model$GradientColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GradientColorRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientColorRecordList = (function (_super) {
__extends(GradientColorRecordList, _super);
function GradientColorRecordList(defaults) {
_super.apply(this, arguments);
}
GradientColorRecordList.itemType = OutSystemsUI_2_23Model.GradientColorRecord;
return GradientColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.GradientColorRecordList = GradientColorRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecord = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecord, _super);
function DatePickerRangeOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRangeOptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerRangeOptionalConfigsRecord(new DatePickerRangeOptionalConfigsRecord.RecordClass({
datePickerRangeOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerRangeOptionalConfigsRecord._isAnonymousRecord = true;
DatePickerRangeOptionalConfigsRecord.UniqueId = "80a59626-8197-ce6d-64a5-0f8d87f1d01d";
DatePickerRangeOptionalConfigsRecord.init();
return DatePickerRangeOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRecord = DatePickerRangeOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$SizeRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SizeRec = (function (_super) {
__extends(SizeRec, _super);
function SizeRec(defaults) {
_super.apply(this, arguments);
}
SizeRec.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SizeRec.fromStructure = function (str) {
return new SizeRec(new SizeRec.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRec.init();
return SizeRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SizeRec = SizeRec;

});
define("OutSystemsUI_2_23.model$CarouselOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecord = (function (_super) {
__extends(CarouselOptionalConfigsRecord, _super);
function CarouselOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.CarouselOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.CarouselOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselOptionalConfigsRecord.fromStructure = function (str) {
return new CarouselOptionalConfigsRecord(new CarouselOptionalConfigsRecord.RecordClass({
carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselOptionalConfigsRecord._isAnonymousRecord = true;
CarouselOptionalConfigsRecord.UniqueId = "ae280ef2-6555-7803-628d-6c1ccf56b4c5";
CarouselOptionalConfigsRecord.init();
return CarouselOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.CarouselOptionalConfigsRecord = CarouselOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$CarouselOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecordList = (function (_super) {
__extends(CarouselOptionalConfigsRecordList, _super);
function CarouselOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.CarouselOptionalConfigsRecord;
return CarouselOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselOptionalConfigsRecordList = CarouselOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$Submenu_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Submenu_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigList = (function (_super) {
__extends(Submenu_InternalConfigList, _super);
function Submenu_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigList.itemType = OutSystemsUI_2_23Model.Submenu_InternalConfigRec;
return Submenu_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Submenu_InternalConfigList = Submenu_InternalConfigList;

});
define("OutSystemsUI_2_23.model$RegisteredCallbackEventsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RegisteredCallbackEventsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RegisteredCallbackEventsList = (function (_super) {
__extends(RegisteredCallbackEventsList, _super);
function RegisteredCallbackEventsList(defaults) {
_super.apply(this, arguments);
}
RegisteredCallbackEventsList.itemType = OutSystemsUI_2_23Model.RegisteredCallbackEventsRec;
return RegisteredCallbackEventsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RegisteredCallbackEventsList = RegisteredCallbackEventsList;

});
define("OutSystemsUI_2_23.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AnimationTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUI_2_23Model.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AnimationTypeList = AnimationTypeList;

});
define("OutSystemsUI_2_23.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DirectionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUI_2_23Model.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DirectionList = DirectionList;

});
define("OutSystemsUI_2_23.model$BooleanBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanBooleanRecord = (function (_super) {
__extends(BooleanBooleanRecord, _super);
function BooleanBooleanRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanRecord.attributesToDeclare = function () {
return [
this.attr("IsDisable", "isDisableAttr", "IsDisable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsRemoveItems", "isRemoveItemsAttr", "IsRemoveItems", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanRecord._isAnonymousRecord = true;
BooleanBooleanRecord.UniqueId = "98ce383a-bd92-f0f4-c51d-49a4fcc3bfcc";
BooleanBooleanRecord.init();
return BooleanBooleanRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BooleanBooleanRecord = BooleanBooleanRecord;

});
define("OutSystemsUI_2_23.model$BooleanBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BooleanBooleanRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanBooleanRecordList = (function (_super) {
__extends(BooleanBooleanRecordList, _super);
function BooleanBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanRecordList.itemType = OutSystemsUI_2_23Model.BooleanBooleanRecord;
return BooleanBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BooleanBooleanRecordList = BooleanBooleanRecordList;

});
define("OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LightboxImageOptionalConfigsRecord = (function (_super) {
__extends(LightboxImageOptionalConfigsRecord, _super);
function LightboxImageOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
LightboxImageOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("LightboxImageOptionalConfigs", "lightboxImageOptionalConfigsAttr", "LightboxImageOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
LightboxImageOptionalConfigsRecord.fromStructure = function (str) {
return new LightboxImageOptionalConfigsRecord(new LightboxImageOptionalConfigsRecord.RecordClass({
lightboxImageOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LightboxImageOptionalConfigsRecord._isAnonymousRecord = true;
LightboxImageOptionalConfigsRecord.UniqueId = "c6d0f936-e90a-33e1-30b3-52c3e680d86a";
LightboxImageOptionalConfigsRecord.init();
return LightboxImageOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRecord = LightboxImageOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LightboxImageOptionalConfigsRecordList = (function (_super) {
__extends(LightboxImageOptionalConfigsRecordList, _super);
function LightboxImageOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
LightboxImageOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRecord;
return LightboxImageOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRecordList = LightboxImageOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$MonthOrderYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthOrderYearRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthOrderYearRecord = (function (_super) {
__extends(MonthOrderYearRecord, _super);
function MonthOrderYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MonthOrderYearRec());
}, true, OutSystemsUI_2_23Model.MonthOrderYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthOrderYearRecord.fromStructure = function (str) {
return new MonthOrderYearRecord(new MonthOrderYearRecord.RecordClass({
monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthOrderYearRecord._isAnonymousRecord = true;
MonthOrderYearRecord.UniqueId = "8c661ca7-f9ce-c62c-9d78-3c82b217e82e";
MonthOrderYearRecord.init();
return MonthOrderYearRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.MonthOrderYearRecord = MonthOrderYearRecord;

});
define("OutSystemsUI_2_23.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SizeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SizeRecord = (function (_super) {
__extends(SizeRecord, _super);
function SizeRecord(defaults) {
_super.apply(this, arguments);
}
SizeRecord.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SizeRec());
}, true, OutSystemsUI_2_23Model.SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeRecord.fromStructure = function (str) {
return new SizeRecord(new SizeRecord.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRecord._isAnonymousRecord = true;
SizeRecord.UniqueId = "8cbcface-9be7-496c-aa8d-8dd1e9fde0a1";
SizeRecord.init();
return SizeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SizeRecord = SizeRecord;

});
define("OutSystemsUI_2_23.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ShapeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ShapeRecord = (function (_super) {
__extends(ShapeRecord, _super);
function ShapeRecord(defaults) {
_super.apply(this, arguments);
}
ShapeRecord.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ShapeRec());
}, true, OutSystemsUI_2_23Model.ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRecord.fromStructure = function (str) {
return new ShapeRecord(new ShapeRecord.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShapeRecord._isAnonymousRecord = true;
ShapeRecord.UniqueId = "8e0376cf-909c-4f58-31a5-283a541cbb6b";
ShapeRecord.init();
return ShapeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ShapeRecord = ShapeRecord;

});
define("OutSystemsUI_2_23.model$DatePickerTimeFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerTimeFormatRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecord = (function (_super) {
__extends(DatePickerTimeFormatRecord, _super);
function DatePickerTimeFormatRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DatePickerTimeFormatRec());
}, true, OutSystemsUI_2_23Model.DatePickerTimeFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerTimeFormatRecord.fromStructure = function (str) {
return new DatePickerTimeFormatRecord(new DatePickerTimeFormatRecord.RecordClass({
datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerTimeFormatRecord._isAnonymousRecord = true;
DatePickerTimeFormatRecord.UniqueId = "8e28066a-2c5e-4ebf-de61-6af9f09223f9";
DatePickerTimeFormatRecord.init();
return DatePickerTimeFormatRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DatePickerTimeFormatRecord = DatePickerTimeFormatRecord;

});
define("OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsList = (function (_super) {
__extends(ProgressCircleOptionalConfigsList, _super);
function ProgressCircleOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsList.itemType = OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRec;
return ProgressCircleOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsList = ProgressCircleOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$Search_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Search_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Search_InternalConfigRecord = (function (_super) {
__extends(Search_InternalConfigRecord, _super);
function Search_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Search_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Search_InternalConfig", "search_InternalConfigAttr", "Search_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Search_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Search_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Search_InternalConfigRecord.fromStructure = function (str) {
return new Search_InternalConfigRecord(new Search_InternalConfigRecord.RecordClass({
search_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Search_InternalConfigRecord._isAnonymousRecord = true;
Search_InternalConfigRecord.UniqueId = "8ff60e1e-818a-f440-625a-78d951d41990";
Search_InternalConfigRecord.init();
return Search_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Search_InternalConfigRecord = Search_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsRecord = (function (_super) {
__extends(DropdownSearch_InternalConfigsRecord, _super);
function DropdownSearch_InternalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownSearch_InternalConfigs", "dropdownSearch_InternalConfigsAttr", "DropdownSearch_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRec());
}, true, OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownSearch_InternalConfigsRecord.fromStructure = function (str) {
return new DropdownSearch_InternalConfigsRecord(new DropdownSearch_InternalConfigsRecord.RecordClass({
dropdownSearch_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownSearch_InternalConfigsRecord._isAnonymousRecord = true;
DropdownSearch_InternalConfigsRecord.UniqueId = "9058e588-76cd-f656-8780-75a9ac9f7c60";
DropdownSearch_InternalConfigsRecord.init();
return DropdownSearch_InternalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRecord = DropdownSearch_InternalConfigsRecord;

});
define("OutSystemsUI_2_23.model$TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord, _super);
function TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsVertical", "isVerticalAttr", "IsVertical", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("VerticalHeight", "verticalHeightAttr", "VerticalHeight", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord._isAnonymousRecord = true;
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.UniqueId = "c3613394-da5e-a68f-3021-77112ad784ed";
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.init();
return TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;

});
define("OutSystemsUI_2_23.model$TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = (function (_super) {
__extends(TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList, _super);
function TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList.itemType = OutSystemsUI_2_23Model.TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
return TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = TextDecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;

});
define("OutSystemsUI_2_23.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TriggerRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TriggerRecord = (function (_super) {
__extends(TriggerRecord, _super);
function TriggerRecord(defaults) {
_super.apply(this, arguments);
}
TriggerRecord.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TriggerRec());
}, true, OutSystemsUI_2_23Model.TriggerRec)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRecord.fromStructure = function (str) {
return new TriggerRecord(new TriggerRecord.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRecord._isAnonymousRecord = true;
TriggerRecord.UniqueId = "c8facdbe-22df-1984-fe61-afa4b2a9126a";
TriggerRecord.init();
return TriggerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TriggerRecord = TriggerRecord;

});
define("OutSystemsUI_2_23.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TriggerRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = OutSystemsUI_2_23Model.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TriggerRecordList = TriggerRecordList;

});
define("OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecord = (function (_super) {
__extends(ProgressBarOptionalConfigsRecord, _super);
function ProgressBarOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRec());
}, true, OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBarOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressBarOptionalConfigsRecord(new ProgressBarOptionalConfigsRecord.RecordClass({
progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressBarOptionalConfigsRecord._isAnonymousRecord = true;
ProgressBarOptionalConfigsRecord.UniqueId = "924c8ff0-0206-e8d2-8f2c-dc4fc1e29db4";
ProgressBarOptionalConfigsRecord.init();
return ProgressBarOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRecord = ProgressBarOptionalConfigsRecord;

});
define("OutSystemsUI_2_23.model$DropdownOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionRecord = (function (_super) {
__extends(DropdownOptionRecord, _super);
function DropdownOptionRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DropdownOptionRec());
}, true, OutSystemsUI_2_23Model.DropdownOptionRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionRecord.fromStructure = function (str) {
return new DropdownOptionRecord(new DropdownOptionRecord.RecordClass({
dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionRecord._isAnonymousRecord = true;
DropdownOptionRecord.UniqueId = "b5da876d-8b83-75a6-45e5-44a6bb467ac8";
DropdownOptionRecord.init();
return DropdownOptionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DropdownOptionRecord = DropdownOptionRecord;

});
define("OutSystemsUI_2_23.model$DropdownOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownOptionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownOptionRecordList = (function (_super) {
__extends(DropdownOptionRecordList, _super);
function DropdownOptionRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecordList.itemType = OutSystemsUI_2_23Model.DropdownOptionRecord;
return DropdownOptionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownOptionRecordList = DropdownOptionRecordList;

});
define("OutSystemsUI_2_23.model$ProviderEventReturnMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProviderEventReturnMessageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageRecord = (function (_super) {
__extends(ProviderEventReturnMessageRecord, _super);
function ProviderEventReturnMessageRecord(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageRecord.attributesToDeclare = function () {
return [
this.attr("ProviderEventReturnMessage", "providerEventReturnMessageAttr", "ProviderEventReturnMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ProviderEventReturnMessageRec());
}, true, OutSystemsUI_2_23Model.ProviderEventReturnMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ProviderEventReturnMessageRecord.fromStructure = function (str) {
return new ProviderEventReturnMessageRecord(new ProviderEventReturnMessageRecord.RecordClass({
providerEventReturnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProviderEventReturnMessageRecord._isAnonymousRecord = true;
ProviderEventReturnMessageRecord.UniqueId = "92f4e810-0990-bd52-eb45-01be55f36def";
ProviderEventReturnMessageRecord.init();
return ProviderEventReturnMessageRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProviderEventReturnMessageRecord = ProviderEventReturnMessageRecord;

});
define("OutSystemsUI_2_23.model$SplideProviderClassesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideProviderClassesRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesList = (function (_super) {
__extends(SplideProviderClassesList, _super);
function SplideProviderClassesList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesList.itemType = OutSystemsUI_2_23Model.SplideProviderClassesRec;
return SplideProviderClassesList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SplideProviderClassesList = SplideProviderClassesList;

});
define("OutSystemsUI_2_23.model$MonthYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthYearRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthYearList = (function (_super) {
__extends(MonthYearList, _super);
function MonthYearList(defaults) {
_super.apply(this, arguments);
}
MonthYearList.itemType = OutSystemsUI_2_23Model.MonthYearRec;
return MonthYearList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthYearList = MonthYearList;

});
define("OutSystemsUI_2_23.model$Video_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Video_InternalConfigRec = (function (_super) {
__extends(Video_InternalConfigRec, _super);
function Video_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
Video_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Captions", "captionsAttr", "Captions", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Controls", "controlsAttr", "Controls", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Muted", "mutedAttr", "Muted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PosterURL", "posterURLAttr", "PosterURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Video_InternalConfigRec.init();
return Video_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Video_InternalConfigRec = Video_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$Video_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Video_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Video_InternalConfigList = (function (_super) {
__extends(Video_InternalConfigList, _super);
function Video_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Video_InternalConfigList.itemType = OutSystemsUI_2_23Model.Video_InternalConfigRec;
return Video_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Video_InternalConfigList = Video_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DeviceResponsiveRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUI_2_23Model.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DeviceResponsiveList = DeviceResponsiveList;

});
define("OutSystemsUI_2_23.model$RangeSliderTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderTypeRecordList = (function (_super) {
__extends(RangeSliderTypeRecordList, _super);
function RangeSliderTypeRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeRecordList.itemType = OutSystemsUI_2_23Model.RangeSliderTypeRecord;
return RangeSliderTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSliderTypeRecordList = RangeSliderTypeRecordList;

});
define("OutSystemsUI_2_23.model$RangeSliderOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsList = (function (_super) {
__extends(RangeSliderOptionalConfigsList, _super);
function RangeSliderOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsList.itemType = OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec;
return RangeSliderOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSliderOptionalConfigsList = RangeSliderOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$DateTypePartsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DateTypePartsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DateTypePartsRecordList = (function (_super) {
__extends(DateTypePartsRecordList, _super);
function DateTypePartsRecordList(defaults) {
_super.apply(this, arguments);
}
DateTypePartsRecordList.itemType = OutSystemsUI_2_23Model.DateTypePartsRecord;
return DateTypePartsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DateTypePartsRecordList = DateTypePartsRecordList;

});
define("OutSystemsUI_2_23.model$InlineSVG_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$InlineSVG_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var InlineSVG_InternalConfigList = (function (_super) {
__extends(InlineSVG_InternalConfigList, _super);
function InlineSVG_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
InlineSVG_InternalConfigList.itemType = OutSystemsUI_2_23Model.InlineSVG_InternalConfigRec;
return InlineSVG_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.InlineSVG_InternalConfigList = InlineSVG_InternalConfigList;

});
define("OutSystemsUI_2_23.model$Search_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Search_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Search_InternalConfigList = (function (_super) {
__extends(Search_InternalConfigList, _super);
function Search_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Search_InternalConfigList.itemType = OutSystemsUI_2_23Model.Search_InternalConfigRec;
return Search_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Search_InternalConfigList = Search_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsRecordList = (function (_super) {
__extends(DropdownServerSide_InternalConfigsRecordList, _super);
function DropdownServerSide_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRecord;
return DropdownServerSide_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRecordList = DropdownServerSide_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$DropdownTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTypeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTypeRecordList = (function (_super) {
__extends(DropdownTypeRecordList, _super);
function DropdownTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTypeRecordList.itemType = OutSystemsUI_2_23Model.DropdownTypeRecord;
return DropdownTypeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownTypeRecordList = DropdownTypeRecordList;

});
define("OutSystemsUI_2_23.model$SideMenuBehaviorRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRec = (function (_super) {
__extends(SideMenuBehaviorRec, _super);
function SideMenuBehaviorRec(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRec.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRec.fromStructure = function (str) {
return new SideMenuBehaviorRec(new SideMenuBehaviorRec.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRec.init();
return SideMenuBehaviorRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SideMenuBehaviorRec = SideMenuBehaviorRec;

});
define("OutSystemsUI_2_23.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUI_2_23Model.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("OutSystemsUI_2_23.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DeviceConfigurationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUI_2_23Model.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DeviceConfigurationList = DeviceConfigurationList;

});
define("OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigList = (function (_super) {
__extends(SectionIndexItem_InternalConfigList, _super);
function SectionIndexItem_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigList.itemType = OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRec;
return SectionIndexItem_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigList = SectionIndexItem_InternalConfigList;

});
define("OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigRecordList = (function (_super) {
__extends(AnimatedLabel_InternalConfigRecordList, _super);
function AnimatedLabel_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRecord;
return AnimatedLabel_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRecordList = AnimatedLabel_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRecordList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRecordList, _super);
function DEPRECATED_MasterDetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRecordList.itemType = OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRecord;
return DEPRECATED_MasterDetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRecordList = DEPRECATED_MasterDetailItemRecordList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextRecordList"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord.attributesToDeclare = function () {
return [
this.attr("Calendar", "calendarAttr", "Calendar", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CalendarDates", "calendarDatesAttr", "CalendarDates", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CloseCalendar", "closeCalendarAttr", "CloseCalendar", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateSelected", "dateSelectedAttr", "DateSelected", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DaySelected", "daySelectedAttr", "DaySelected", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DaysInRange", "daysInRangeAttr", "DaysInRange", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DialogButton", "dialogButtonAttr", "DialogButton", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EndRange", "endRangeAttr", "EndRange", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EnterCalendar", "enterCalendarAttr", "EnterCalendar", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GoToToday", "goToTodayAttr", "GoToToday", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasEvent", "hasEventAttr", "HasEvent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsToday", "isTodayAttr", "IsToday", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KeyboardShortcuts", "keyboardShortcutsAttr", "KeyboardShortcuts", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MonthNext", "monthNextAttr", "MonthNext", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MonthPrevious", "monthPreviousAttr", "MonthPrevious", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Navigation", "navigationAttr", "Navigation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpenCalendar", "openCalendarAttr", "OpenCalendar", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StartRange", "startRangeAttr", "StartRange", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortcutsDialog", "shortcutsDialogAttr", "ShortcutsDialog", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextRecordList());
}, true, OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextRecordList)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord._isAnonymousRecord = true;
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord.UniqueId = "aa6f2a46-9018-f204-49b5-2bedd4074e46";
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord.init();
return TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord = TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord;

});
define("OutSystemsUI_2_23.model$ListNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ListNavigationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ListNavigationRecord = (function (_super) {
__extends(ListNavigationRecord, _super);
function ListNavigationRecord(defaults) {
_super.apply(this, arguments);
}
ListNavigationRecord.attributesToDeclare = function () {
return [
this.attr("ListNavigation", "listNavigationAttr", "ListNavigation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ListNavigationRec());
}, true, OutSystemsUI_2_23Model.ListNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
ListNavigationRecord.fromStructure = function (str) {
return new ListNavigationRecord(new ListNavigationRecord.RecordClass({
listNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ListNavigationRecord._isAnonymousRecord = true;
ListNavigationRecord.UniqueId = "ab40b169-ed0e-d874-9cfa-144758466a3a";
ListNavigationRecord.init();
return ListNavigationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ListNavigationRecord = ListNavigationRecord;

});
define("OutSystemsUI_2_23.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BreakColumnsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = OutSystemsUI_2_23Model.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecordList, _super);
function DatePickerRangeOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRecord;
return DatePickerRangeOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRecordList = DatePickerRangeOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AccordionIconPositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUI_2_23Model.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AccordionIconPositionList = AccordionIconPositionList;

});
define("OutSystemsUI_2_23.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SizeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = OutSystemsUI_2_23Model.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SizeRecordList = SizeRecordList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextRecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextRecordList, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextRecordList.itemType = OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextRecord;
return TextTextTextTextTextTextTextTextTextTextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextRecordList = TextTextTextTextTextTextTextTextTextTextTextTextRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerWeekDayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerWeekDayRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayList = (function (_super) {
__extends(DatePickerWeekDayList, _super);
function DatePickerWeekDayList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayList.itemType = OutSystemsUI_2_23Model.DatePickerWeekDayRec;
return DatePickerWeekDayList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerWeekDayList = DatePickerWeekDayList;

});
define("OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigRec = (function (_super) {
__extends(TabsHeaderItem_InternalConfigRec, _super);
function TabsHeaderItem_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TabsHeaderItem_InternalConfigRec.init();
return TabsHeaderItem_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRec = TabsHeaderItem_InternalConfigRec;

});
define("OutSystemsUI_2_23.model$TabsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsList = (function (_super) {
__extends(TabsOptionalConfigsList, _super);
function TabsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsList.itemType = OutSystemsUI_2_23Model.TabsOptionalConfigsRec;
return TabsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TabsOptionalConfigsList = TabsOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$ProviderEventReturnMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProviderEventReturnMessageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageList = (function (_super) {
__extends(ProviderEventReturnMessageList, _super);
function ProviderEventReturnMessageList(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageList.itemType = OutSystemsUI_2_23Model.ProviderEventReturnMessageRec;
return ProviderEventReturnMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProviderEventReturnMessageList = ProviderEventReturnMessageList;

});
define("OutSystemsUI_2_23.model$CarouselDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselDirectionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselDirectionRecordList = (function (_super) {
__extends(CarouselDirectionRecordList, _super);
function CarouselDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecordList.itemType = OutSystemsUI_2_23Model.CarouselDirectionRecord;
return CarouselDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselDirectionRecordList = CarouselDirectionRecordList;

});
define("OutSystemsUI_2_23.model$DatePickerLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerLanguageRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecordList = (function (_super) {
__extends(DatePickerLanguageRecordList, _super);
function DatePickerLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecordList.itemType = OutSystemsUI_2_23Model.DatePickerLanguageRecord;
return DatePickerLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerLanguageRecordList = DatePickerLanguageRecordList;

});
define("OutSystemsUI_2_23.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BulkActionsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUI_2_23Model.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BulkActionsList = BulkActionsList;

});
define("OutSystemsUI_2_23.model$MonthOrderYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthOrderYearRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthOrderYearRecordList = (function (_super) {
__extends(MonthOrderYearRecordList, _super);
function MonthOrderYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecordList.itemType = OutSystemsUI_2_23Model.MonthOrderYearRecord;
return MonthOrderYearRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthOrderYearRecordList = MonthOrderYearRecordList;

});
define("OutSystemsUI_2_23.model$Sidebar_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Sidebar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigRecord = (function (_super) {
__extends(Sidebar_InternalConfigRecord, _super);
function Sidebar_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Sidebar_InternalConfig", "sidebar_InternalConfigAttr", "Sidebar_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Sidebar_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Sidebar_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Sidebar_InternalConfigRecord.fromStructure = function (str) {
return new Sidebar_InternalConfigRecord(new Sidebar_InternalConfigRecord.RecordClass({
sidebar_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Sidebar_InternalConfigRecord._isAnonymousRecord = true;
Sidebar_InternalConfigRecord.UniqueId = "b40a2b66-0773-0011-59c8-51dcf9282308";
Sidebar_InternalConfigRecord.init();
return Sidebar_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Sidebar_InternalConfigRecord = Sidebar_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigList = (function (_super) {
__extends(TabsHeaderItem_InternalConfigList, _super);
function TabsHeaderItem_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigList.itemType = OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRec;
return TabsHeaderItem_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigList = TabsHeaderItem_InternalConfigList;

});
define("OutSystemsUI_2_23.model$ProgressCircle_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressCircle_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigRecord = (function (_super) {
__extends(ProgressCircle_InternalConfigRecord, _super);
function ProgressCircle_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("ProgressCircle_InternalConfig", "progressCircle_InternalConfigAttr", "ProgressCircle_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircle_InternalConfigRecord.fromStructure = function (str) {
return new ProgressCircle_InternalConfigRecord(new ProgressCircle_InternalConfigRecord.RecordClass({
progressCircle_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressCircle_InternalConfigRecord._isAnonymousRecord = true;
ProgressCircle_InternalConfigRecord.UniqueId = "f7ce149a-6500-f51e-ea7f-9a7e569054d8";
ProgressCircle_InternalConfigRecord.init();
return ProgressCircle_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRecord = ProgressCircle_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$ProgressCircle_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressCircle_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircle_InternalConfigRecordList = (function (_super) {
__extends(ProgressCircle_InternalConfigRecordList, _super);
function ProgressCircle_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircle_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRecord;
return ProgressCircle_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressCircle_InternalConfigRecordList = ProgressCircle_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ScrollbarStyleRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecord = (function (_super) {
__extends(ScrollbarStyleRecord, _super);
function ScrollbarStyleRecord(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecord.attributesToDeclare = function () {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ScrollbarStyleRec());
}, true, OutSystemsUI_2_23Model.ScrollbarStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRecord.fromStructure = function (str) {
return new ScrollbarStyleRecord(new ScrollbarStyleRecord.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRecord._isAnonymousRecord = true;
ScrollbarStyleRecord.UniqueId = "c4895c4b-cf23-2dfd-eb61-729631f0b322";
ScrollbarStyleRecord.init();
return ScrollbarStyleRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("OutSystemsUI_2_23.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ScrollbarStyleRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = OutSystemsUI_2_23Model.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("OutSystemsUI_2_23.model$SplideProvideri18nRec", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nRec = (function (_super) {
__extends(SplideProvideri18nRec, _super);
function SplideProvideri18nRec(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SplideProvideri18nRec.init();
return SplideProvideri18nRec;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SplideProvideri18nRec = SplideProvideri18nRec;

});
define("OutSystemsUI_2_23.model$SplideProvideri18nRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideProvideri18nRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecord = (function (_super) {
__extends(SplideProvideri18nRecord, _super);
function SplideProvideri18nRecord(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecord.attributesToDeclare = function () {
return [
this.attr("SplideProvideri18n", "splideProvideri18nAttr", "SplideProvideri18n", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SplideProvideri18nRec());
}, true, OutSystemsUI_2_23Model.SplideProvideri18nRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProvideri18nRecord.fromStructure = function (str) {
return new SplideProvideri18nRecord(new SplideProvideri18nRecord.RecordClass({
splideProvideri18nAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProvideri18nRecord._isAnonymousRecord = true;
SplideProvideri18nRecord.UniqueId = "b89921b7-5982-ec0d-bdde-4c9d0526b757";
SplideProvideri18nRecord.init();
return SplideProvideri18nRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SplideProvideri18nRecord = SplideProvideri18nRecord;

});
define("OutSystemsUI_2_23.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ColorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ColorRec());
}, true, OutSystemsUI_2_23Model.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "b9ca3ce2-cce6-fb6c-6a64-3d347a5ec750";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.ColorRecord = ColorRecord;

});
define("OutSystemsUI_2_23.model$Submenu_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Submenu_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigRecord = (function (_super) {
__extends(Submenu_InternalConfigRecord, _super);
function Submenu_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Submenu_InternalConfig", "submenu_InternalConfigAttr", "Submenu_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Submenu_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Submenu_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Submenu_InternalConfigRecord.fromStructure = function (str) {
return new Submenu_InternalConfigRecord(new Submenu_InternalConfigRecord.RecordClass({
submenu_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Submenu_InternalConfigRecord._isAnonymousRecord = true;
Submenu_InternalConfigRecord.UniqueId = "ba19ba24-5e31-8c7e-d851-30a7a1470fd6";
Submenu_InternalConfigRecord.init();
return Submenu_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Submenu_InternalConfigRecord = Submenu_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$FlatpickrConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$FlatpickrConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsList = (function (_super) {
__extends(FlatpickrConfigsList, _super);
function FlatpickrConfigsList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsList.itemType = OutSystemsUI_2_23Model.FlatpickrConfigsRec;
return FlatpickrConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.FlatpickrConfigsList = FlatpickrConfigsList;

});
define("OutSystemsUI_2_23.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DeviceResponsiveRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = OutSystemsUI_2_23Model.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("OutSystemsUI_2_23.model$ListNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ListNavigationRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ListNavigationRecordList = (function (_super) {
__extends(ListNavigationRecordList, _super);
function ListNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
ListNavigationRecordList.itemType = OutSystemsUI_2_23Model.ListNavigationRecord;
return ListNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ListNavigationRecordList = ListNavigationRecordList;

});
define("OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigRecord = (function (_super) {
__extends(SectionIndexItem_InternalConfigRecord, _super);
function SectionIndexItem_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("SectionIndexItem_InternalConfig", "sectionIndexItem_InternalConfigAttr", "SectionIndexItem_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndexItem_InternalConfigRecord.fromStructure = function (str) {
return new SectionIndexItem_InternalConfigRecord(new SectionIndexItem_InternalConfigRecord.RecordClass({
sectionIndexItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SectionIndexItem_InternalConfigRecord._isAnonymousRecord = true;
SectionIndexItem_InternalConfigRecord.UniqueId = "e09dfcc2-3ae7-d89e-d7d5-af2cda420ae9";
SectionIndexItem_InternalConfigRecord.init();
return SectionIndexItem_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRecord = SectionIndexItem_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SectionIndexItem_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndexItem_InternalConfigRecordList = (function (_super) {
__extends(SectionIndexItem_InternalConfigRecordList, _super);
function SectionIndexItem_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
SectionIndexItem_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRecord;
return SectionIndexItem_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SectionIndexItem_InternalConfigRecordList = SectionIndexItem_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SideMenuBehaviorRec());
}, true, OutSystemsUI_2_23Model.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "fe000763-f33f-938a-1386-6f7b7df05be1";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("OutSystemsUI_2_23.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = OutSystemsUI_2_23Model.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("OutSystemsUI_2_23.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SizeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUI_2_23Model.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SizeList = SizeList;

});
define("OutSystemsUI_2_23.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ShapeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = OutSystemsUI_2_23Model.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ShapeRecordList = ShapeRecordList;

});
define("OutSystemsUI_2_23.model$MonthPicker_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthPicker_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthPicker_InternalConfigRecordList = (function (_super) {
__extends(MonthPicker_InternalConfigRecordList, _super);
function MonthPicker_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
MonthPicker_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.MonthPicker_InternalConfigRecord;
return MonthPicker_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthPicker_InternalConfigRecordList = MonthPicker_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$NotificationOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NotificationOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecordList = (function (_super) {
__extends(NotificationOptionalConfigsRecordList, _super);
function NotificationOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.NotificationOptionalConfigsRecord;
return NotificationOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.NotificationOptionalConfigsRecordList = NotificationOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DeviceConfigurationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecord = (function (_super) {
__extends(DeviceConfigurationRecord, _super);
function DeviceConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.DeviceConfigurationRec());
}, true, OutSystemsUI_2_23Model.DeviceConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRecord.fromStructure = function (str) {
return new DeviceConfigurationRecord(new DeviceConfigurationRecord.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceConfigurationRecord._isAnonymousRecord = true;
DeviceConfigurationRecord.UniqueId = "c0d14e4a-54be-64c7-fe3a-2bd0d5f79d83";
DeviceConfigurationRecord.init();
return DeviceConfigurationRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("OutSystemsUI_2_23.model$CarouselProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselProviderRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselProviderRecordList = (function (_super) {
__extends(CarouselProviderRecordList, _super);
function CarouselProviderRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselProviderRecordList.itemType = OutSystemsUI_2_23Model.CarouselProviderRecord;
return CarouselProviderRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselProviderRecordList = CarouselProviderRecordList;

});
define("OutSystemsUI_2_23.model$SectionIndex_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SectionIndex_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigRecord = (function (_super) {
__extends(SectionIndex_InternalConfigRecord, _super);
function SectionIndex_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("SectionIndex_InternalConfig", "sectionIndex_InternalConfigAttr", "SectionIndex_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SectionIndex_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.SectionIndex_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
SectionIndex_InternalConfigRecord.fromStructure = function (str) {
return new SectionIndex_InternalConfigRecord(new SectionIndex_InternalConfigRecord.RecordClass({
sectionIndex_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SectionIndex_InternalConfigRecord._isAnonymousRecord = true;
SectionIndex_InternalConfigRecord.UniqueId = "c14885b1-5fd3-09bd-154b-0259cecb4704";
SectionIndex_InternalConfigRecord.init();
return SectionIndex_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SectionIndex_InternalConfigRecord = SectionIndex_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecordList = (function (_super) {
__extends(ProgressBarOptionalConfigsRecordList, _super);
function ProgressBarOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRecord;
return ProgressBarOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRecordList = ProgressBarOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$ProviderEventReturnMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProviderEventReturnMessageRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProviderEventReturnMessageRecordList = (function (_super) {
__extends(ProviderEventReturnMessageRecordList, _super);
function ProviderEventReturnMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ProviderEventReturnMessageRecordList.itemType = OutSystemsUI_2_23Model.ProviderEventReturnMessageRecord;
return ProviderEventReturnMessageRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProviderEventReturnMessageRecordList = ProviderEventReturnMessageRecordList;

});
define("OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownServerSide_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSide_InternalConfigsList = (function (_super) {
__extends(DropdownServerSide_InternalConfigsList, _super);
function DropdownServerSide_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSide_InternalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsRec;
return DropdownServerSide_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownServerSide_InternalConfigsList = DropdownServerSide_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DeviceConfigurationRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = OutSystemsUI_2_23Model.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("OutSystemsUI_2_23.model$ProgressBar_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressBar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressBar_InternalConfigList = (function (_super) {
__extends(ProgressBar_InternalConfigList, _super);
function ProgressBar_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
ProgressBar_InternalConfigList.itemType = OutSystemsUI_2_23Model.ProgressBar_InternalConfigRec;
return ProgressBar_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressBar_InternalConfigList = ProgressBar_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DatePickerLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerLanguageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageList = (function (_super) {
__extends(DatePickerLanguageList, _super);
function DatePickerLanguageList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageList.itemType = OutSystemsUI_2_23Model.DatePickerLanguageRec;
return DatePickerLanguageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerLanguageList = DatePickerLanguageList;

});
define("OutSystemsUI_2_23.model$Video_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Video_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Video_InternalConfigRecord = (function (_super) {
__extends(Video_InternalConfigRecord, _super);
function Video_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Video_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Video_InternalConfig", "video_InternalConfigAttr", "Video_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Video_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Video_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Video_InternalConfigRecord.fromStructure = function (str) {
return new Video_InternalConfigRecord(new Video_InternalConfigRecord.RecordClass({
video_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Video_InternalConfigRecord._isAnonymousRecord = true;
Video_InternalConfigRecord.UniqueId = "ca027f2e-63f4-0192-bde0-7fe43bdefdb5";
Video_InternalConfigRecord.init();
return Video_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Video_InternalConfigRecord = Video_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$Accordion_InternalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Accordion_InternalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Accordion_InternalConfigsList = (function (_super) {
__extends(Accordion_InternalConfigsList, _super);
function Accordion_InternalConfigsList(defaults) {
_super.apply(this, arguments);
}
Accordion_InternalConfigsList.itemType = OutSystemsUI_2_23Model.Accordion_InternalConfigsRec;
return Accordion_InternalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Accordion_InternalConfigsList = Accordion_InternalConfigsList;

});
define("OutSystemsUI_2_23.model$DatePickerProviderList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerProviderRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerProviderList = (function (_super) {
__extends(DatePickerProviderList, _super);
function DatePickerProviderList(defaults) {
_super.apply(this, arguments);
}
DatePickerProviderList.itemType = OutSystemsUI_2_23Model.DatePickerProviderRec;
return DatePickerProviderList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerProviderList = DatePickerProviderList;

});
define("OutSystemsUI_2_23.model$CarouselNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselNavigationRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselNavigationRecordList = (function (_super) {
__extends(CarouselNavigationRecordList, _super);
function CarouselNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecordList.itemType = OutSystemsUI_2_23Model.CarouselNavigationRecord;
return CarouselNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselNavigationRecordList = CarouselNavigationRecordList;

});
define("OutSystemsUI_2_23.model$Video_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Video_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Video_InternalConfigRecordList = (function (_super) {
__extends(Video_InternalConfigRecordList, _super);
function Video_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Video_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Video_InternalConfigRecord;
return Video_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Video_InternalConfigRecordList = Video_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$StepsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = OutSystemsUI_2_23Model.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.StepsRecordList = StepsRecordList;

});
define("OutSystemsUI_2_23.model$VideoOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoOptionalConfigsRecordList = (function (_super) {
__extends(VideoOptionalConfigsRecordList, _super);
function VideoOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VideoOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.VideoOptionalConfigsRecord;
return VideoOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VideoOptionalConfigsRecordList = VideoOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigRecord = (function (_super) {
__extends(TabsHeaderItem_InternalConfigRecord, _super);
function TabsHeaderItem_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("TabsHeaderItem_InternalConfig", "tabsHeaderItem_InternalConfigAttr", "TabsHeaderItem_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsHeaderItem_InternalConfigRecord.fromStructure = function (str) {
return new TabsHeaderItem_InternalConfigRecord(new TabsHeaderItem_InternalConfigRecord.RecordClass({
tabsHeaderItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsHeaderItem_InternalConfigRecord._isAnonymousRecord = true;
TabsHeaderItem_InternalConfigRecord.UniqueId = "e03f0d2a-68da-d8eb-3b7e-b06175ccf23e";
TabsHeaderItem_InternalConfigRecord.init();
return TabsHeaderItem_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRecord = TabsHeaderItem_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TabsHeaderItem_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TabsHeaderItem_InternalConfigRecordList = (function (_super) {
__extends(TabsHeaderItem_InternalConfigRecordList, _super);
function TabsHeaderItem_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
TabsHeaderItem_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRecord;
return TabsHeaderItem_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TabsHeaderItem_InternalConfigRecordList = TabsHeaderItem_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$PositionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.PositionRec());
}, true, OutSystemsUI_2_23Model.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "d2de5608-cd0b-09c9-dac8-81bb66d10271";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.PositionRecord = PositionRecord;

});
define("OutSystemsUI_2_23.model$Submenu_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Submenu_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Submenu_InternalConfigRecordList = (function (_super) {
__extends(Submenu_InternalConfigRecordList, _super);
function Submenu_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Submenu_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Submenu_InternalConfigRecord;
return Submenu_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Submenu_InternalConfigRecordList = Submenu_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$LogTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$LogTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var LogTypeList = (function (_super) {
__extends(LogTypeList, _super);
function LogTypeList(defaults) {
_super.apply(this, arguments);
}
LogTypeList.itemType = OutSystemsUI_2_23Model.LogTypeRec;
return LogTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.LogTypeList = LogTypeList;

});
define("OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AnimatedLabel_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AnimatedLabel_InternalConfigList = (function (_super) {
__extends(AnimatedLabel_InternalConfigList, _super);
function AnimatedLabel_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
AnimatedLabel_InternalConfigList.itemType = OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigRec;
return AnimatedLabel_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AnimatedLabel_InternalConfigList = AnimatedLabel_InternalConfigList;

});
define("OutSystemsUI_2_23.model$CarouselDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselDirectionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselDirectionList = (function (_super) {
__extends(CarouselDirectionList, _super);
function CarouselDirectionList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionList.itemType = OutSystemsUI_2_23Model.CarouselDirectionRec;
return CarouselDirectionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselDirectionList = CarouselDirectionList;

});
define("OutSystemsUI_2_23.model$VideoCaptionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoCaptionsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoCaptionsList = (function (_super) {
__extends(VideoCaptionsList, _super);
function VideoCaptionsList(defaults) {
_super.apply(this, arguments);
}
VideoCaptionsList.itemType = OutSystemsUI_2_23Model.VideoCaptionsRec;
return VideoCaptionsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VideoCaptionsList = VideoCaptionsList;

});
define("OutSystemsUI_2_23.model$TimePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TimePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsList = (function (_super) {
__extends(TimePickerOptionalConfigsList, _super);
function TimePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsList.itemType = OutSystemsUI_2_23Model.TimePickerOptionalConfigsRec;
return TimePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TimePickerOptionalConfigsList = TimePickerOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownSearch_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownSearch_InternalConfigsRecordList = (function (_super) {
__extends(DropdownSearch_InternalConfigsRecordList, _super);
function DropdownSearch_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownSearch_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRecord;
return DropdownSearch_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownSearch_InternalConfigsRecordList = DropdownSearch_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GutterSizeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GutterSizeRecord = (function (_super) {
__extends(GutterSizeRecord, _super);
function GutterSizeRecord(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.GutterSizeRec());
}, true, OutSystemsUI_2_23Model.GutterSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRecord.fromStructure = function (str) {
return new GutterSizeRecord(new GutterSizeRecord.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GutterSizeRecord._isAnonymousRecord = true;
GutterSizeRecord.UniqueId = "d917c91f-99d2-5cec-3e11-588a7fd9b0e9";
GutterSizeRecord.init();
return GutterSizeRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.GutterSizeRecord = GutterSizeRecord;

});
define("OutSystemsUI_2_23.model$DatePickerTimeFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerTimeFormatRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecordList = (function (_super) {
__extends(DatePickerTimeFormatRecordList, _super);
function DatePickerTimeFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecordList.itemType = OutSystemsUI_2_23Model.DatePickerTimeFormatRecord;
return DatePickerTimeFormatRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerTimeFormatRecordList = DatePickerTimeFormatRecordList;

});
define("OutSystemsUI_2_23.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TriggerRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUI_2_23Model.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TriggerList = TriggerList;

});
define("OutSystemsUI_2_23.model$SplideProvideri18nRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideProvideri18nRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecordList = (function (_super) {
__extends(SplideProvideri18nRecordList, _super);
function SplideProvideri18nRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecordList.itemType = OutSystemsUI_2_23Model.SplideProvideri18nRecord;
return SplideProvideri18nRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SplideProvideri18nRecordList = SplideProvideri18nRecordList;

});
define("OutSystemsUI_2_23.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$StepsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUI_2_23Model.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.StepsList = StepsList;

});
define("OutSystemsUI_2_23.model$Search_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Search_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Search_InternalConfigRecordList = (function (_super) {
__extends(Search_InternalConfigRecordList, _super);
function Search_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Search_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Search_InternalConfigRecord;
return Search_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Search_InternalConfigRecordList = Search_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$MonthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MonthRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MonthRecordList = (function (_super) {
__extends(MonthRecordList, _super);
function MonthRecordList(defaults) {
_super.apply(this, arguments);
}
MonthRecordList.itemType = OutSystemsUI_2_23Model.MonthRecord;
return MonthRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MonthRecordList = MonthRecordList;

});
define("OutSystemsUI_2_23.model$RangeSlider_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSlider_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSlider_InternalConfigList = (function (_super) {
__extends(RangeSlider_InternalConfigList, _super);
function RangeSlider_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
RangeSlider_InternalConfigList.itemType = OutSystemsUI_2_23Model.RangeSlider_InternalConfigRec;
return RangeSlider_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSlider_InternalConfigList = RangeSlider_InternalConfigList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextRecordList", "OutSystemsUI_2_23.model$TextTextTextTextTextTextText1RecordList", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextRecordList"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord = (function (_super) {
__extends(TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord, _super);
function TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord.attributesToDeclare = function () {
return [
this.attr("Midnight", "midnightAttr", "Midnight", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NextMonth", "nextMonthAttr", "NextMonth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Noon", "noonAttr", "Noon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PreviousMonth", "previousMonthAttr", "PreviousMonth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TodayButton", "todayButtonAttr", "TodayButton", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Weekdays", "weekdaysAttr", "Weekdays", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TextTextTextTextTextTextTextRecordList());
}, true, OutSystemsUI_2_23Model.TextTextTextTextTextTextTextRecordList), 
this.attr("WeekdaysShort", "weekdaysShortAttr", "WeekdaysShort", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TextTextTextTextTextTextText1RecordList());
}, true, OutSystemsUI_2_23Model.TextTextTextTextTextTextText1RecordList), 
this.attr("Months", "monthsAttr", "Months", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextRecordList());
}, true, OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextRecordList)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord._isAnonymousRecord = true;
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord.UniqueId = "edb48204-5d64-b0cb-bcbf-62278fb73c32";
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord.init();
return TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord = TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList = (function (_super) {
__extends(TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList, _super);
function TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList.itemType = OutSystemsUI_2_23Model.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekdaySRecord;
return TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList = TextTextTextTextTextWeekday1Weekday2Weekday3Weekday4Weekday5Weekday6Weekday7RecordListWeekdayShort1WeekdayShort2WeekRecordList;

});
define("OutSystemsUI_2_23.model$SplideProviderClassesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideProviderClassesRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecord = (function (_super) {
__extends(SplideProviderClassesRecord, _super);
function SplideProviderClassesRecord(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecord.attributesToDeclare = function () {
return [
this.attr("SplideProviderClasses", "splideProviderClassesAttr", "SplideProviderClasses", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SplideProviderClassesRec());
}, true, OutSystemsUI_2_23Model.SplideProviderClassesRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProviderClassesRecord.fromStructure = function (str) {
return new SplideProviderClassesRecord(new SplideProviderClassesRecord.RecordClass({
splideProviderClassesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProviderClassesRecord._isAnonymousRecord = true;
SplideProviderClassesRecord.UniqueId = "e67ade1a-2e1d-25b3-4e8f-7b2cbcc91307";
SplideProviderClassesRecord.init();
return SplideProviderClassesRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.SplideProviderClassesRecord = SplideProviderClassesRecord;

});
define("OutSystemsUI_2_23.model$SplideProviderClassesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideProviderClassesRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecordList = (function (_super) {
__extends(SplideProviderClassesRecordList, _super);
function SplideProviderClassesRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecordList.itemType = OutSystemsUI_2_23Model.SplideProviderClassesRecord;
return SplideProviderClassesRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SplideProviderClassesRecordList = SplideProviderClassesRecordList;

});
define("OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecordList = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecordList, _super);
function ProgressCircleOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRecord;
return ProgressCircleOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRecordList = ProgressCircleOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$SectionIndex_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SectionIndex_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigRecordList = (function (_super) {
__extends(SectionIndex_InternalConfigRecordList, _super);
function SectionIndex_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.SectionIndex_InternalConfigRecord;
return SectionIndex_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SectionIndex_InternalConfigRecordList = SectionIndex_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$VideoOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$VideoOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var VideoOptionalConfigsList = (function (_super) {
__extends(VideoOptionalConfigsList, _super);
function VideoOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
VideoOptionalConfigsList.itemType = OutSystemsUI_2_23Model.VideoOptionalConfigsRec;
return VideoOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.VideoOptionalConfigsList = VideoOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$TimePicker_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TimePicker_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TimePicker_InternalConfigList = (function (_super) {
__extends(TimePicker_InternalConfigList, _super);
function TimePicker_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
TimePicker_InternalConfigList.itemType = OutSystemsUI_2_23Model.TimePicker_InternalConfigRec;
return TimePicker_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TimePicker_InternalConfigList = TimePicker_InternalConfigList;

});
define("OutSystemsUI_2_23.model$Sidebar_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Sidebar_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigList = (function (_super) {
__extends(Sidebar_InternalConfigList, _super);
function Sidebar_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigList.itemType = OutSystemsUI_2_23Model.Sidebar_InternalConfigRec;
return Sidebar_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Sidebar_InternalConfigList = Sidebar_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecordList = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecordList, _super);
function DropdownTagsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRecord;
return DropdownTagsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRecordList = DropdownTagsOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$SplideConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideConfigsList = (function (_super) {
__extends(SplideConfigsList, _super);
function SplideConfigsList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsList.itemType = OutSystemsUI_2_23Model.SplideConfigsRec;
return SplideConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SplideConfigsList = SplideConfigsList;

});
define("OutSystemsUI_2_23.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownItemRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUI_2_23Model.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownItemList = DropdownItemList;

});
define("OutSystemsUI_2_23.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.UniqueId = "e57d7c30-9592-d9b0-9e76-04ad507fe534";
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord.init();
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord = BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;

});
define("OutSystemsUI_2_23.model$DateTypePartsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DateTypePartsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DateTypePartsList = (function (_super) {
__extends(DateTypePartsList, _super);
function DateTypePartsList(defaults) {
_super.apply(this, arguments);
}
DateTypePartsList.itemType = OutSystemsUI_2_23Model.DateTypePartsRec;
return DateTypePartsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DateTypePartsList = DateTypePartsList;

});
define("OutSystemsUI_2_23.model$Rating_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Rating_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Rating_InternalConfigRecordList = (function (_super) {
__extends(Rating_InternalConfigRecordList, _super);
function Rating_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Rating_InternalConfigRecord;
return Rating_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Rating_InternalConfigRecordList = Rating_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$SplideProvideri18nList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SplideProvideri18nRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nList = (function (_super) {
__extends(SplideProvideri18nList, _super);
function SplideProvideri18nList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nList.itemType = OutSystemsUI_2_23Model.SplideProvideri18nRec;
return SplideProvideri18nList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SplideProvideri18nList = SplideProvideri18nList;

});
define("OutSystemsUI_2_23.model$NoUiSliderConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$NoUiSliderConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecordList = (function (_super) {
__extends(NoUiSliderConfigsRecordList, _super);
function NoUiSliderConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecordList.itemType = OutSystemsUI_2_23Model.NoUiSliderConfigsRecord;
return NoUiSliderConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.NoUiSliderConfigsRecordList = NoUiSliderConfigsRecordList;

});
define("OutSystemsUI_2_23.model$Notification_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Notification_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Notification_InternalConfigList = (function (_super) {
__extends(Notification_InternalConfigList, _super);
function Notification_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Notification_InternalConfigList.itemType = OutSystemsUI_2_23Model.Notification_InternalConfigRec;
return Notification_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Notification_InternalConfigList = Notification_InternalConfigList;

});
define("OutSystemsUI_2_23.model$Tabs_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Tabs_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigRecord = (function (_super) {
__extends(Tabs_InternalConfigRecord, _super);
function Tabs_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("Tabs_InternalConfig", "tabs_InternalConfigAttr", "Tabs_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Tabs_InternalConfigRec());
}, true, OutSystemsUI_2_23Model.Tabs_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
Tabs_InternalConfigRecord.fromStructure = function (str) {
return new Tabs_InternalConfigRecord(new Tabs_InternalConfigRecord.RecordClass({
tabs_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Tabs_InternalConfigRecord._isAnonymousRecord = true;
Tabs_InternalConfigRecord.UniqueId = "f403189c-4dda-5441-cbfd-129fff4a65a0";
Tabs_InternalConfigRecord.init();
return Tabs_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
OutSystemsUI_2_23Model.Tabs_InternalConfigRecord = Tabs_InternalConfigRecord;

});
define("OutSystemsUI_2_23.model$Tabs_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Tabs_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigRecordList = (function (_super) {
__extends(Tabs_InternalConfigRecordList, _super);
function Tabs_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Tabs_InternalConfigRecord;
return Tabs_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Tabs_InternalConfigRecordList = Tabs_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$BottomSheet_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BottomSheet_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigList = (function (_super) {
__extends(BottomSheet_InternalConfigList, _super);
function BottomSheet_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigList.itemType = OutSystemsUI_2_23Model.BottomSheet_InternalConfigRec;
return BottomSheet_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BottomSheet_InternalConfigList = BottomSheet_InternalConfigList;

});
define("OutSystemsUI_2_23.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList, _super);
function BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList.itemType = OutSystemsUI_2_23Model.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecord;
return BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList = BooleanBooleanIntegerIntegerIntegerIntegerIntegerRecordList;

});
define("OutSystemsUI_2_23.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$PositionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = OutSystemsUI_2_23Model.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.PositionRecordList = PositionRecordList;

});
define("OutSystemsUI_2_23.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MenuActionRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUI_2_23Model.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MenuActionList = MenuActionList;

});
define("OutSystemsUI_2_23.model$Tabs_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Tabs_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Tabs_InternalConfigList = (function (_super) {
__extends(Tabs_InternalConfigList, _super);
function Tabs_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Tabs_InternalConfigList.itemType = OutSystemsUI_2_23Model.Tabs_InternalConfigRec;
return Tabs_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Tabs_InternalConfigList = Tabs_InternalConfigList;

});
define("OutSystemsUI_2_23.model$ListNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ListNavigationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ListNavigationList = (function (_super) {
__extends(ListNavigationList, _super);
function ListNavigationList(defaults) {
_super.apply(this, arguments);
}
ListNavigationList.itemType = OutSystemsUI_2_23Model.ListNavigationRec;
return ListNavigationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ListNavigationList = ListNavigationList;

});
define("OutSystemsUI_2_23.model$DropdownTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTypeList = (function (_super) {
__extends(DropdownTypeList, _super);
function DropdownTypeList(defaults) {
_super.apply(this, arguments);
}
DropdownTypeList.itemType = OutSystemsUI_2_23Model.DropdownTypeRec;
return DropdownTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownTypeList = DropdownTypeList;

});
define("OutSystemsUI_2_23.model$ReturnMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ReturnMessageRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ReturnMessageList = (function (_super) {
__extends(ReturnMessageList, _super);
function ReturnMessageList(defaults) {
_super.apply(this, arguments);
}
ReturnMessageList.itemType = OutSystemsUI_2_23Model.ReturnMessageRec;
return ReturnMessageList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ReturnMessageList = ReturnMessageList;

});
define("OutSystemsUI_2_23.model$CarouselNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$CarouselNavigationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var CarouselNavigationList = (function (_super) {
__extends(CarouselNavigationList, _super);
function CarouselNavigationList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationList.itemType = OutSystemsUI_2_23Model.CarouselNavigationRec;
return CarouselNavigationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.CarouselNavigationList = CarouselNavigationList;

});
define("OutSystemsUI_2_23.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$OrientationRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUI_2_23Model.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.OrientationList = OrientationList;

});
define("OutSystemsUI_2_23.model$DatePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerOptionalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerOptionalConfigsRecordList, _super);
function DatePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DatePickerOptionalConfigsRecord;
return DatePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerOptionalConfigsRecordList = DatePickerOptionalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$AlertRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = OutSystemsUI_2_23Model.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.AlertRecordList = AlertRecordList;

});
define("OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownTags_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownTags_InternalConfigsRecordList = (function (_super) {
__extends(DropdownTags_InternalConfigsRecordList, _super);
function DropdownTags_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTags_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRecord;
return DropdownTags_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownTags_InternalConfigsRecordList = DropdownTags_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList = (function (_super) {
__extends(TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList, _super);
function TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList.itemType = OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2ShorRecord;
return TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList = TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextShortcutsDialog1ShortcutsDialog2RecordList;

});
define("OutSystemsUI_2_23.model$Sidebar_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Sidebar_InternalConfigRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Sidebar_InternalConfigRecordList = (function (_super) {
__extends(Sidebar_InternalConfigRecordList, _super);
function Sidebar_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
Sidebar_InternalConfigRecordList.itemType = OutSystemsUI_2_23Model.Sidebar_InternalConfigRecord;
return Sidebar_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Sidebar_InternalConfigRecordList = Sidebar_InternalConfigRecordList;

});
define("OutSystemsUI_2_23.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$MenuActionRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = OutSystemsUI_2_23Model.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.MenuActionRecordList = MenuActionRecordList;

});
define("OutSystemsUI_2_23.model$GradientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GradientRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientRecordList = (function (_super) {
__extends(GradientRecordList, _super);
function GradientRecordList(defaults) {
_super.apply(this, arguments);
}
GradientRecordList.itemType = OutSystemsUI_2_23Model.GradientRecord;
return GradientRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.GradientRecordList = GradientRecordList;

});
define("OutSystemsUI_2_23.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$ColorRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = OutSystemsUI_2_23Model.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.ColorRecordList = ColorRecordList;

});
define("OutSystemsUI_2_23.model$SectionIndex_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$SectionIndex_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var SectionIndex_InternalConfigList = (function (_super) {
__extends(SectionIndex_InternalConfigList, _super);
function SectionIndex_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
SectionIndex_InternalConfigList.itemType = OutSystemsUI_2_23Model.SectionIndex_InternalConfigRec;
return SectionIndex_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.SectionIndex_InternalConfigList = SectionIndex_InternalConfigList;

});
define("OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DropdownServerSideItem_InternalConfigsRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DropdownServerSideItem_InternalConfigsRecordList = (function (_super) {
__extends(DropdownServerSideItem_InternalConfigsRecordList, _super);
function DropdownServerSideItem_InternalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownServerSideItem_InternalConfigsRecordList.itemType = OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRecord;
return DropdownServerSideItem_InternalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DropdownServerSideItem_InternalConfigsRecordList = DropdownServerSideItem_InternalConfigsRecordList;

});
define("OutSystemsUI_2_23.model$RangeSliderTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$RangeSliderTypeRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var RangeSliderTypeList = (function (_super) {
__extends(RangeSliderTypeList, _super);
function RangeSliderTypeList(defaults) {
_super.apply(this, arguments);
}
RangeSliderTypeList.itemType = OutSystemsUI_2_23Model.RangeSliderTypeRec;
return RangeSliderTypeList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.RangeSliderTypeList = RangeSliderTypeList;

});
define("OutSystemsUI_2_23.model$Rating_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$Rating_InternalConfigRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var Rating_InternalConfigList = (function (_super) {
__extends(Rating_InternalConfigList, _super);
function Rating_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
Rating_InternalConfigList.itemType = OutSystemsUI_2_23Model.Rating_InternalConfigRec;
return Rating_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.Rating_InternalConfigList = Rating_InternalConfigList;

});
define("OutSystemsUI_2_23.model$GradientList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GradientRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GradientList = (function (_super) {
__extends(GradientList, _super);
function GradientList(defaults) {
_super.apply(this, arguments);
}
GradientList.itemType = OutSystemsUI_2_23Model.GradientRec;
return GradientList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.GradientList = GradientList;

});
define("OutSystemsUI_2_23.model$BooleanTypesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$BooleanTypesRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var BooleanTypesList = (function (_super) {
__extends(BooleanTypesList, _super);
function BooleanTypesList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesList.itemType = OutSystemsUI_2_23Model.BooleanTypesRec;
return BooleanTypesList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.BooleanTypesList = BooleanTypesList;

});
define("OutSystemsUI_2_23.model$DatePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$DatePickerOptionalConfigsRec"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsList = (function (_super) {
__extends(DatePickerOptionalConfigsList, _super);
function DatePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DatePickerOptionalConfigsRec;
return DatePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.DatePickerOptionalConfigsList = DatePickerOptionalConfigsList;

});
define("OutSystemsUI_2_23.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.model$GutterSizeRecord"], function (exports, OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = OutSystemsUI_2_23Model.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
OutSystemsUI_2_23Model.GutterSizeRecordList = GutterSizeRecordList;

});
define("OutSystemsUI_2_23.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var OutSystemsUI_2_23Model = exports;
Object.defineProperty(OutSystemsUI_2_23Model, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"];
}
});

OutSystemsUI_2_23Model.staticEntities = {};
OutSystemsUI_2_23Model.staticEntities.carouselProvider = {};
var getCarouselProviderRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["01addca3-86ba-436f-950e-e48d74ea2cac"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselProvider, "splide", {
get: function () {
return getCarouselProviderRecord("1b7b1d33-be2e-419f-aa5b-54c1b5e805df");
}
});

OutSystemsUI_2_23Model.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

OutSystemsUI_2_23Model.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

OutSystemsUI_2_23Model.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

OutSystemsUI_2_23Model.staticEntities.gradient = {};
var getGradientRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["15f4b55e-c9e8-4f0d-a043-0093e17fa04d"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gradient, "linearHorizontal", {
get: function () {
return getGradientRecord("8d250673-5528-403b-9e7b-d1717a98219c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gradient, "radial", {
get: function () {
return getGradientRecord("b9ce4df8-c39e-4a3a-84d9-35dbc79e82fc");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gradient, "linearDiagonally", {
get: function () {
return getGradientRecord("cef16d35-677a-4002-8d53-7b385be0011d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gradient, "linearVertical", {
get: function () {
return getGradientRecord("f128b147-c173-4df8-a624-d01eab01c46c");
}
});

OutSystemsUI_2_23Model.staticEntities.size = {};
var getSizeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

OutSystemsUI_2_23Model.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

OutSystemsUI_2_23Model.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

OutSystemsUI_2_23Model.staticEntities.month = {};
var getMonthRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "june", {
get: function () {
return getMonthRecord("02cb1fff-a143-48c1-8922-5b2c562e1939");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "march", {
get: function () {
return getMonthRecord("29858d6e-705a-4cfd-a9e2-f9dc6bda346c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "december", {
get: function () {
return getMonthRecord("5b0eff8b-b2df-4e9a-80a5-eac51617cdc3");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "february", {
get: function () {
return getMonthRecord("6b6caf1c-eadb-4b30-96ec-84b225feb1a5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "may", {
get: function () {
return getMonthRecord("76cd9430-f4f8-4b0d-8a72-ddcac3928aeb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "april", {
get: function () {
return getMonthRecord("7c425633-4e80-4f7a-a119-c21d82820511");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "november", {
get: function () {
return getMonthRecord("86e22632-bb44-42ad-8589-0b6aadda9dd4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "august", {
get: function () {
return getMonthRecord("896ff549-7e70-48af-b967-31ea68b73891");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "january", {
get: function () {
return getMonthRecord("8d3840f5-6ae6-4899-960d-3e215342e2e3");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "july", {
get: function () {
return getMonthRecord("ac483ea0-4423-404a-a61d-8d6bce0ee39e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "september", {
get: function () {
return getMonthRecord("c858ebfd-c9fe-49b6-bbfc-57c28c895b26");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.month, "october", {
get: function () {
return getMonthRecord("e01b8055-99c6-4096-bc7d-5f0c825b7692");
}
});

OutSystemsUI_2_23Model.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return getDatePickerLanguageRecord("0041af3b-505e-48b8-8d79-b0a00aeeb4de");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return getDatePickerLanguageRecord("05968754-a438-40c9-860d-0775c7618c80");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "czech", {
get: function () {
return getDatePickerLanguageRecord("0c6d79c7-6773-4d9e-a914-ad7246505aa8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return getDatePickerLanguageRecord("0e659962-b0fb-4486-9f33-997cf5a00f33");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return getDatePickerLanguageRecord("10fba89e-f9ea-46da-a114-849a4891c4dd");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return getDatePickerLanguageRecord("11a9c498-65e3-4074-bd4c-16266288a9e4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return getDatePickerLanguageRecord("186d2cd3-7b9d-464a-b31e-b4548b9a80c0");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "polish", {
get: function () {
return getDatePickerLanguageRecord("198c5c59-d610-4e52-b4ed-9fb38c21b3b7");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return getDatePickerLanguageRecord("1e9dd8a1-ab24-4849-ab74-b65b2a2974a5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return getDatePickerLanguageRecord("1efa117c-f1b9-4ae7-94ad-814a752e4864");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "malay", {
get: function () {
return getDatePickerLanguageRecord("242628f3-22b6-4713-8118-7921abd00ad2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return getDatePickerLanguageRecord("286e49ad-5406-4f42-a9c4-bcc4adc64d17");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return getDatePickerLanguageRecord("2df37c1e-5431-4849-9f0b-405b43fed188");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "danish", {
get: function () {
return getDatePickerLanguageRecord("34689962-0ccc-46dc-bc43-e6bc7716784c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "english", {
get: function () {
return getDatePickerLanguageRecord("37430fa0-8882-4f69-afde-41c27de03a5f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return getDatePickerLanguageRecord("3854d57f-f8bd-4024-8664-6353d552d8f2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return getDatePickerLanguageRecord("459a4a75-fb85-40e0-96b2-f08df284da41");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "norwegianBokmal", {
get: function () {
return getDatePickerLanguageRecord("530131bd-1b82-495b-a9c5-710d8bc4a642");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return getDatePickerLanguageRecord("530ceb8f-1ff1-44a7-aed5-e0af45b941cb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return getDatePickerLanguageRecord("58eb18a6-11fe-4a8b-bb96-7ed1057b16f5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return getDatePickerLanguageRecord("5e341bb3-0fc7-4f59-a426-00dcd4b2fabf");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return getDatePickerLanguageRecord("62e038a6-8d72-4484-b278-a883b004b3f2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return getDatePickerLanguageRecord("6bb7b0e2-bad8-4f58-801b-4ca0e9e699a7");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return getDatePickerLanguageRecord("6f9fd262-32f0-4726-ab3e-5d7bb6916892");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return getDatePickerLanguageRecord("7b29c19f-82dd-4e0b-8f5b-9004ca7d24fc");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return getDatePickerLanguageRecord("7def49c8-f1a0-4600-ae56-53e9471634a2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return getDatePickerLanguageRecord("80601fbd-e190-49be-90dd-6964171d5292");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "korean", {
get: function () {
return getDatePickerLanguageRecord("82a53bc2-f8d7-4c5d-bb70-5651a4713880");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "thai", {
get: function () {
return getDatePickerLanguageRecord("84a8de9c-6f4d-4077-9391-98d66414bf4e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return getDatePickerLanguageRecord("872b0db9-d9b4-49d4-b2ae-028122cbd448");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return getDatePickerLanguageRecord("8c2fe645-d925-42ea-9819-4a1ac3a340e4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return getDatePickerLanguageRecord("930b417d-72aa-4b39-a3b9-3b9821bf1d4b");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return getDatePickerLanguageRecord("992f2c99-b122-49f6-bc7b-75d242dcb9bb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return getDatePickerLanguageRecord("9d702f7b-360d-46bb-9b6e-0e020a5f6385");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "french", {
get: function () {
return getDatePickerLanguageRecord("9dffbcdd-25c4-44e2-9f6a-d19b9f758ad8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return getDatePickerLanguageRecord("9f260686-51cd-40d2-bf26-a09165b213ba");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "russian", {
get: function () {
return getDatePickerLanguageRecord("ad00c2b1-c380-4bf7-b5f4-173b40594bd5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return getDatePickerLanguageRecord("b2957404-0007-4b47-a798-dd114894c7e3");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return getDatePickerLanguageRecord("b3519d98-660c-43ed-aee9-bb76e32dcafb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return getDatePickerLanguageRecord("b4e4a5fb-10ef-4d66-84bd-96dddb9d3b3c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return getDatePickerLanguageRecord("b60ef392-7715-437f-a4a9-b89a2128e49c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return getDatePickerLanguageRecord("b6fa2f75-12b9-4973-9027-b4866be01621");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return getDatePickerLanguageRecord("b719cb40-621d-4610-b16f-f42caad493d4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "italian", {
get: function () {
return getDatePickerLanguageRecord("ba077ace-9423-401f-88fc-1fff8d7872a0");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return getDatePickerLanguageRecord("bb85f008-2154-44ee-9199-9e0e19497c47");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return getDatePickerLanguageRecord("bce28cae-e6f9-4988-97a8-8b0e17ea6703");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return getDatePickerLanguageRecord("bd68a245-146e-45c9-8dc0-26419cbe5c85");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return getDatePickerLanguageRecord("c1e7d993-22fe-452a-9754-6a48ac03e6d4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return getDatePickerLanguageRecord("c356a48b-0411-4b54-b7a3-dd7fa4368645");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return getDatePickerLanguageRecord("c38dac5a-7528-4647-96e6-887c0c9da82e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "persian", {
get: function () {
return getDatePickerLanguageRecord("d1bf9a10-3760-41c7-94eb-e24707993416");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return getDatePickerLanguageRecord("d8f987cd-d08c-40b3-b19b-b60b508cf03d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "german", {
get: function () {
return getDatePickerLanguageRecord("da3038a7-779c-4599-b0b7-99557f688365");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return getDatePickerLanguageRecord("df311624-2b4a-410a-bf54-de447886e3a3");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return getDatePickerLanguageRecord("dfb449d3-ec70-458e-9f37-89e8f9c207fb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return getDatePickerLanguageRecord("f6d8b648-df67-4449-934a-bd03dff4c50c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return getDatePickerLanguageRecord("fad657c3-4b13-4163-8e21-84c60b6810ee");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return getDatePickerLanguageRecord("ffb560d6-c067-42e5-bdd8-0de808acff0a");
}
});

OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color = {};
var getDEPRECATED_ColorRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "white", {
get: function () {
return getDEPRECATED_ColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "blue", {
get: function () {
return getDEPRECATED_ColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "black", {
get: function () {
return getDEPRECATED_ColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "violet", {
get: function () {
return getDEPRECATED_ColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "none", {
get: function () {
return getDEPRECATED_ColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "orange", {
get: function () {
return getDEPRECATED_ColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "red", {
get: function () {
return getDEPRECATED_ColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "primaryColor", {
get: function () {
return getDEPRECATED_ColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "green", {
get: function () {
return getDEPRECATED_ColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dEPRECATED_Color, "grey", {
get: function () {
return getDEPRECATED_ColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

OutSystemsUI_2_23Model.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

OutSystemsUI_2_23Model.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return getDatePickerTimeFormatRecord("48213c15-538b-4222-a3ea-d136e608a57d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("ce1a9924-35ee-4a25-87ae-81f2a97bdf20");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("e1aba689-db52-4dba-9eef-b5980b3e4fa0");
}
});

OutSystemsUI_2_23Model.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

OutSystemsUI_2_23Model.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

OutSystemsUI_2_23Model.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

OutSystemsUI_2_23Model.staticEntities.rangeSliderType = {};
var getRangeSliderTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["6f4436fe-d69a-4b09-8cc9-abddba377729"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.rangeSliderType, "single", {
get: function () {
return getRangeSliderTypeRecord("55e7cf26-5f3d-4d94-9cfc-8258ae2af12b");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.rangeSliderType, "interval", {
get: function () {
return getRangeSliderTypeRecord("d01ad14d-cf37-47ae-8a95-6fbf379558d0");
}
});

OutSystemsUI_2_23Model.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

OutSystemsUI_2_23Model.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

OutSystemsUI_2_23Model.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return getCarouselDirectionRecord("4b5575cd-7598-420a-97db-5088d4d86a4d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return getCarouselDirectionRecord("a05b6420-43c5-4660-9526-95e2052a45a8");
}
});

OutSystemsUI_2_23Model.staticEntities.rangeSliderProvider = {};
var getRangeSliderProviderRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["76a8780c-9acf-4be3-949d-c5bb30052481"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.rangeSliderProvider, "noUiSlider", {
get: function () {
return getRangeSliderProviderRecord("5ba5cdf9-a83b-439a-9315-1c857eb9fc08");
}
});

OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents = {};
var getRegisteredCallbackEventsRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["8292d703-2455-4daf-9574-a852dc42baff"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents, "carousel_OnSlideMoved", {
get: function () {
return getRegisteredCallbackEventsRecord("0b93de32-3205-42d0-b874-abafc9221c09");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents, "onChange", {
get: function () {
return getRegisteredCallbackEventsRecord("24ff52ea-dced-421a-9ba9-cc0ade648dce");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents, "initialized", {
get: function () {
return getRegisteredCallbackEventsRecord("657dbd86-23d4-4132-9acc-01c9f7d47ed7");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents, "rangeSlider_OnValueChange", {
get: function () {
return getRegisteredCallbackEventsRecord("b6957b89-cd1c-4aa7-a28b-786dbcc167cb");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents, "onSelected", {
get: function () {
return getRegisteredCallbackEventsRecord("c5b265c4-3734-4503-8112-fd5d484e16a6");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents, "onToggle", {
get: function () {
return getRegisteredCallbackEventsRecord("da8d5bce-e4b0-44dd-8705-b8269639d13c");
}
});

OutSystemsUI_2_23Model.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

OutSystemsUI_2_23Model.staticEntities.position = {};
var getPositionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

OutSystemsUI_2_23Model.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

OutSystemsUI_2_23Model.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

OutSystemsUI_2_23Model.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

OutSystemsUI_2_23Model.staticEntities.floatingPosition = {};
var getFloatingPositionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["926b8b2a-0906-4e6f-8ef5-e18fdce4b5af"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "leftStart", {
get: function () {
return getFloatingPositionRecord("09fcc011-5125-4c7d-94ca-22a0f483efc2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "topEnd", {
get: function () {
return getFloatingPositionRecord("25ae0a5b-a407-43f8-a96f-9a25b99af253");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "right", {
get: function () {
return getFloatingPositionRecord("2d99f1c3-c47c-4930-a6d9-efbd5af9473e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "top", {
get: function () {
return getFloatingPositionRecord("4359167c-25c4-4631-a2fd-4d68844bf776");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "bottomEnd", {
get: function () {
return getFloatingPositionRecord("55c6fc8a-e632-4396-a0f3-b304774d404d");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "auto", {
get: function () {
return getFloatingPositionRecord("5c2f7889-a754-4e76-9202-74e1adf64aa8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "leftEnd", {
get: function () {
return getFloatingPositionRecord("690b2443-cd21-4c15-a480-db654387e5be");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "bottomStart", {
get: function () {
return getFloatingPositionRecord("75a49894-ed1b-4565-ab88-3ce67cb1f202");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "rightEnd", {
get: function () {
return getFloatingPositionRecord("76a41993-ef72-4903-a435-b457b14f95e8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "topStart", {
get: function () {
return getFloatingPositionRecord("93f00bb4-849c-4652-a3a6-95ff356afc41");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "left", {
get: function () {
return getFloatingPositionRecord("b927b967-e9ed-4b25-8c9b-75e59651f486");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "rightStart", {
get: function () {
return getFloatingPositionRecord("d18e4169-5259-469b-9bc5-c7251b07c3a5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "center", {
get: function () {
return getFloatingPositionRecord("f3246aa9-3097-4498-8418-d48d0eaa3e6e");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.floatingPosition, "bottom", {
get: function () {
return getFloatingPositionRecord("f7d9dd9e-b33c-42b6-b32d-29b0ae5b6adc");
}
});

OutSystemsUI_2_23Model.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.booleanTypes, "true", {
get: function () {
return getBooleanTypesRecord("58ea7788-cac7-4f50-8ef1-ba8e1661b632");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.booleanTypes, "unset", {
get: function () {
return getBooleanTypesRecord("bf11a159-3707-4888-8e86-c3b0c78bc889");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.booleanTypes, "false", {
get: function () {
return getBooleanTypesRecord("df5af092-2604-4409-ae7d-b86d2bcef9fb");
}
});

OutSystemsUI_2_23Model.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

OutSystemsUI_2_23Model.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

OutSystemsUI_2_23Model.staticEntities.datePickerCalendarType = {};
var getDatePickerCalendarTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["a8849efb-7aa4-4297-971f-db5b0c65fbfa"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerCalendarType, "single", {
get: function () {
return getDatePickerCalendarTypeRecord("15fce8a0-e229-43e7-ba47-f120ed66c001");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerCalendarType, "range", {
get: function () {
return getDatePickerCalendarTypeRecord("c6b4024d-2477-4cef-8c35-be6b1cf28589");
}
});

OutSystemsUI_2_23Model.staticEntities.logType = {};
var getLogTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["ac429394-d435-4e1c-8f83-8ec82b367ec9"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.logType, "performance", {
get: function () {
return getLogTypeRecord("0bea3145-4e41-4ff2-8d1a-2cbdd96891d8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.logType, "debug", {
get: function () {
return getLogTypeRecord("50a3abe9-d7b5-4893-aa9f-6a1571f5f311");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.logType, "error", {
get: function () {
return getLogTypeRecord("9533f0d7-e35b-462f-ac7e-79ae80720888");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.logType, "general", {
get: function () {
return getLogTypeRecord("9562bd04-4fca-4dda-833a-cede0ade14c1");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.logType, "warning", {
get: function () {
return getLogTypeRecord("b84d842f-ae75-493b-9903-9307d627c4d8");
}
});

OutSystemsUI_2_23Model.staticEntities.progressType = {};
var getProgressTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["b1c32742-606e-4e3e-9923-1c2e6e69ab6c"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.progressType, "bar", {
get: function () {
return getProgressTypeRecord("2af86c9e-6b2d-46e7-8952-13c649cd474a");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.progressType, "circle", {
get: function () {
return getProgressTypeRecord("383be685-2962-457b-aacf-8950e604937c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.progressType, "circleFraction", {
get: function () {
return getProgressTypeRecord("4fecd2a8-bf10-456e-af62-a97fbf4d9ca4");
}
});

OutSystemsUI_2_23Model.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

OutSystemsUI_2_23Model.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

OutSystemsUI_2_23Model.staticEntities.dropdownProvider = {};
var getDropdownProviderRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["c432b13a-7b10-4a88-993c-71748f34d7ff"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dropdownProvider, "oSUIComponents", {
get: function () {
return getDropdownProviderRecord("9122fc07-c39c-45f6-8347-0b84ea60be1c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dropdownProvider, "virtualSelect", {
get: function () {
return getDropdownProviderRecord("f3edfcf9-5799-472f-8188-937724619a57");
}
});

OutSystemsUI_2_23Model.staticEntities.color = {};
var getColorRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

OutSystemsUI_2_23Model.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

OutSystemsUI_2_23Model.staticEntities.dropdownType = {};
var getDropdownTypeRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["e225f392-825d-442c-ac1f-b4b08d829a5d"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dropdownType, "tags", {
get: function () {
return getDropdownTypeRecord("6c56830e-14f4-418c-bd2d-4d2e0544348f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dropdownType, "serverSide", {
get: function () {
return getDropdownTypeRecord("97ff04ac-884e-423d-b756-072fe85a7f03");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.dropdownType, "search", {
get: function () {
return getDropdownTypeRecord("b9ab0f97-c2cd-4696-977e-70b7362f3f15");
}
});

OutSystemsUI_2_23Model.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

OutSystemsUI_2_23Model.staticEntities.datePickerProvider = {};
var getDatePickerProviderRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["eba14106-529d-4e9d-9ca0-fdb74716d75f"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerProvider, "flatpickr", {
get: function () {
return getDatePickerProviderRecord("ed9187c5-7e7e-405e-affc-79f4c04cf540");
}
});

OutSystemsUI_2_23Model.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselNavigation, "dots", {
get: function () {
return getCarouselNavigationRecord("2ba3836f-3d61-4868-b949-fb01a4e0d441");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselNavigation, "none", {
get: function () {
return getCarouselNavigationRecord("367fee69-dc95-4624-9ba5-da687d881886");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselNavigation, "arrows", {
get: function () {
return getCarouselNavigationRecord("3ae78a75-4c85-4aaa-ba2d-12c24902a7cf");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.carouselNavigation, "both", {
get: function () {
return getCarouselNavigationRecord("59a3f653-ff1d-49a0-ad2f-dda725b1352b");
}
});

OutSystemsUI_2_23Model.staticEntities.videoState = {};
var getVideoStateRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["f1508f37-01a7-456d-9dd0-64dff62f6d39"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.videoState, "unstarted", {
get: function () {
return getVideoStateRecord("3948508f-0ce3-4ba8-8cec-c1ed62cdcd2f");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.videoState, "paused", {
get: function () {
return getVideoStateRecord("6b958f67-1dfb-4f07-8729-6f2c4ffcaa11");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.videoState, "ended", {
get: function () {
return getVideoStateRecord("b01a6f85-e735-402f-9502-80ca6f782af5");
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.videoState, "playing", {
get: function () {
return getVideoStateRecord("e0a42fb3-336d-496b-b5c4-dde95cc7880a");
}
});

OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OutSystemsUI_2_23Model.module.staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("2fc656af-35c9-4cc8-94f7-cd7970e5afe4"));
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("55758641-50ed-4a93-bb39-a86c02e8782c"));
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("570f21d0-bdbe-4bbe-a452-02e3376f69d8"));
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("87ec7c5b-52ec-4dae-82e3-f6f08edd3a2e"));
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("c59d1722-cbb1-453b-9a29-4fbb246756cd"));
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f06c120a-c368-4568-9216-42f7c8a60d8c"));
}
});

Object.defineProperty(OutSystemsUI_2_23Model.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f19cb895-a764-44e0-90e8-00bacb84e134"));
}
});

});
