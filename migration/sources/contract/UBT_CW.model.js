define("UBT_CW.model$DurationObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$DurationObjectRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var DurationObjectRecord = (function (_super) {
__extends(DurationObjectRecord, _super);
function DurationObjectRecord(defaults) {
_super.apply(this, arguments);
}
DurationObjectRecord.attributesToDeclare = function () {
return [
this.attr("DurationObject", "durationObjectAttr", "DurationObject", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationObjectRec());
}, true, FullCalendarReactiveModel.DurationObjectRec)
].concat(_super.attributesToDeclare.call(this));
};
DurationObjectRecord.fromStructure = function (str) {
return new DurationObjectRecord(new DurationObjectRecord.RecordClass({
durationObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DurationObjectRecord._isAnonymousRecord = true;
DurationObjectRecord.UniqueId = "1027d800-24ba-ccdd-0cc3-b07718eb43e4";
DurationObjectRecord.init();
return DurationObjectRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.DurationObjectRecord = DurationObjectRecord;

});
define("UBT_CW.model$DurationObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$DurationObjectRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var DurationObjectRecordList = (function (_super) {
__extends(DurationObjectRecordList, _super);
function DurationObjectRecordList(defaults) {
_super.apply(this, arguments);
}
DurationObjectRecordList.itemType = UBT_CWModel.DurationObjectRecord;
return DurationObjectRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.DurationObjectRecordList = DurationObjectRecordList;

});
define("UBT_CW.model$HostConfig_SpacingRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingRec = (function (_super) {
__extends(HostConfig_SpacingRec, _super);
function HostConfig_SpacingRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingRec.attributesToDeclare = function () {
return [
this.attr("Small", "smallAttr", "small", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(3);
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(8);
}, true), 
this.attr("Medium", "mediumAttr", "medium", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(20);
}, true), 
this.attr("Large", "largeAttr", "large", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(30);
}, true), 
this.attr("ExtraLarge", "extraLargeAttr", "extraLarge", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(40);
}, true), 
this.attr("Padding", "paddingAttr", "padding", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(20);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_SpacingRec.init();
return HostConfig_SpacingRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_SpacingRec = HostConfig_SpacingRec;

});
define("UBT_CW.model$HostConfig_FontSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeRec = (function (_super) {
__extends(HostConfig_FontSizeRec, _super);
function HostConfig_FontSizeRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeRec.attributesToDeclare = function () {
return [
this.attr("Small", "smallAttr", "small", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(10);
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(12);
}, true), 
this.attr("Medium", "mediumAttr", "medium", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(14);
}, true), 
this.attr("Large", "largeAttr", "large", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(17);
}, true), 
this.attr("ExtraLarge", "extraLargeAttr", "extraLarge", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(20);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontSizeRec.init();
return HostConfig_FontSizeRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontSizeRec = HostConfig_FontSizeRec;

});
define("UBT_CW.model$HostConfig_FontWeightsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsRec = (function (_super) {
__extends(HostConfig_FontWeightsRec, _super);
function HostConfig_FontWeightsRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsRec.attributesToDeclare = function () {
return [
this.attr("Lighter", "lighterAttr", "lighter", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(200);
}, true), 
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(400);
}, true), 
this.attr("Bolder", "bolderAttr", "bolder", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(800);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontWeightsRec.init();
return HostConfig_FontWeightsRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontWeightsRec = HostConfig_FontWeightsRec;

});
define("UBT_CW.model$HostConfig_FontRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontSizeRec", "UBT_CW.model$HostConfig_FontWeightsRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontRec = (function (_super) {
__extends(HostConfig_FontRec, _super);
function HostConfig_FontRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontRec.attributesToDeclare = function () {
return [
this.attr("FontFamily", "fontFamilyAttr", "fontFamily", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Roboto";
}, true), 
this.attr("FontSizes", "fontSizesAttr", "fontSizes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontSizeRec());
}, true, UBT_CWModel.HostConfig_FontSizeRec), 
this.attr("FontWeight", "fontWeightAttr", "fontWeights", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontWeightsRec());
}, true, UBT_CWModel.HostConfig_FontWeightsRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontRec.init();
return HostConfig_FontRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontRec = HostConfig_FontRec;

});
define("UBT_CW.model$HostConfig_FontTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeRec = (function (_super) {
__extends(HostConfig_FontTypeRec, _super);
function HostConfig_FontTypeRec(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeRec.attributesToDeclare = function () {
return [
this.attr("Default", "defaultAttr", "default", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontRec());
}, true, UBT_CWModel.HostConfig_FontRec), 
this.attr("Monospace", "monospaceAttr", "monospace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontRec());
}, true, UBT_CWModel.HostConfig_FontRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontTypeRec.init();
return HostConfig_FontTypeRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontTypeRec = HostConfig_FontTypeRec;

});
define("UBT_CW.model$HostConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_SpacingRec", "UBT_CW.model$HostConfig_FontTypeRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfigRec = (function (_super) {
__extends(HostConfigRec, _super);
function HostConfigRec(defaults) {
_super.apply(this, arguments);
}
HostConfigRec.attributesToDeclare = function () {
return [
this.attr("Spacing", "spacingAttr", "spacing", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_SpacingRec());
}, true, UBT_CWModel.HostConfig_SpacingRec), 
this.attr("FontTypes", "fontTypesAttr", "fontTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontTypeRec());
}, true, UBT_CWModel.HostConfig_FontTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfigRec.init();
return HostConfigRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfigRec = HostConfigRec;

});
define("UBT_CW.model$HostConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfigRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfigRecord = (function (_super) {
__extends(HostConfigRecord, _super);
function HostConfigRecord(defaults) {
_super.apply(this, arguments);
}
HostConfigRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig", "hostConfigAttr", "HostConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfigRec());
}, true, UBT_CWModel.HostConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfigRecord.fromStructure = function (str) {
return new HostConfigRecord(new HostConfigRecord.RecordClass({
hostConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfigRecord._isAnonymousRecord = true;
HostConfigRecord.UniqueId = "0d79c116-7838-558e-ee60-b190e2aae094";
HostConfigRecord.init();
return HostConfigRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfigRecord = HostConfigRecord;

});
define("UBT_CW.model$ThemeClassRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ThemeClassRec = (function (_super) {
__extends(ThemeClassRec, _super);
function ThemeClassRec(defaults) {
_super.apply(this, arguments);
}
ThemeClassRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StylesheetName", "stylesheetNameAttr", "StylesheetName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ThemeClassRec.init();
return ThemeClassRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ThemeClassRec = ThemeClassRec;

});
define("UBT_CW.model$SliderColorRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderColorRec = (function (_super) {
__extends(SliderColorRec, _super);
function SliderColorRec(defaults) {
_super.apply(this, arguments);
}
SliderColorRec.attributesToDeclare = function () {
return [
this.attr("Unselected", "unselectedAttr", "unselected", false, false, OS.DataTypes.DataTypes.Text, function () {
return "var(--color-neutral-6)";
}, true), 
this.attr("Selected", "selectedAttr", "selected", false, false, OS.DataTypes.DataTypes.Text, function () {
return "var(--color-primary)";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SliderColorRec.init();
return SliderColorRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.SliderColorRec = SliderColorRec;

});
define("UBT_CW.model$SliderRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderColorRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderRec = (function (_super) {
__extends(SliderRec, _super);
function SliderRec(defaults) {
_super.apply(this, arguments);
}
SliderRec.attributesToDeclare = function () {
return [
this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(1);
}, true), 
this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(4);
}, true), 
this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(4);
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("NumberOfPips", "numberOfPipsAttr", "NumberOfPips", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 4;
}, true), 
this.attr("SliderColor", "sliderColorAttr", "SliderColor", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.SliderColorRec());
}, true, UBT_CWModel.SliderColorRec)
].concat(_super.attributesToDeclare.call(this));
};
SliderRec.init();
return SliderRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.SliderRec = SliderRec;

});
define("UBT_CW.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$AnimationTypeRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AnimationTypeRec());
}, true, OutSystemsUIModel.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord._isAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("UBT_CW.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$AnimationTypeRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = UBT_CWModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("UBT_CW.model$EventDescriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$EventDescriptionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventDescriptionRecord = (function (_super) {
__extends(EventDescriptionRecord, _super);
function EventDescriptionRecord(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRecord.attributesToDeclare = function () {
return [
this.attr("EventDescription", "eventDescriptionAttr", "EventDescription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventDescriptionRec());
}, true, FullCalendarReactiveModel.EventDescriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
EventDescriptionRecord.fromStructure = function (str) {
return new EventDescriptionRecord(new EventDescriptionRecord.RecordClass({
eventDescriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventDescriptionRecord._isAnonymousRecord = true;
EventDescriptionRecord.UniqueId = "234667c3-0054-b3c7-4132-7888daa9bd1a";
EventDescriptionRecord.init();
return EventDescriptionRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.EventDescriptionRecord = EventDescriptionRecord;

});
define("UBT_CW.model$EventList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$EventRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventList = (function (_super) {
__extends(EventList, _super);
function EventList(defaults) {
_super.apply(this, arguments);
}
EventList.itemType = FullCalendarReactiveModel.EventRec;
return EventList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EventList = EventList;

});
define("UBT_CW.model$EventSourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$EventSourceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventSourceList = (function (_super) {
__extends(EventSourceList, _super);
function EventSourceList(defaults) {
_super.apply(this, arguments);
}
EventSourceList.itemType = FullCalendarReactiveModel.EventSourceRec;
return EventSourceList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EventSourceList = EventSourceList;

});
define("UBT_CW.model$ListNavigationRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
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
UBT_CWModel.ListNavigationRec = ListNavigationRec;

});
define("UBT_CW.model$EventDescriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$EventDescriptionRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventDescriptionRecordList = (function (_super) {
__extends(EventDescriptionRecordList, _super);
function EventDescriptionRecordList(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRecordList.itemType = UBT_CWModel.EventDescriptionRecord;
return EventDescriptionRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EventDescriptionRecordList = EventDescriptionRecordList;

});
define("UBT_CW.model$AdaptiveCardsConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigRec = (function (_super) {
__extends(AdaptiveCardsConfigRec, _super);
function AdaptiveCardsConfigRec(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardsConfigRec.init();
return AdaptiveCardsConfigRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.AdaptiveCardsConfigRec = AdaptiveCardsConfigRec;

});
define("UBT_CW.model$AdaptiveCardsConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$AdaptiveCardsConfigRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigRecord = (function (_super) {
__extends(AdaptiveCardsConfigRecord, _super);
function AdaptiveCardsConfigRecord(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigRecord.attributesToDeclare = function () {
return [
this.attr("AdaptiveCardsConfig", "adaptiveCardsConfigAttr", "AdaptiveCardsConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.AdaptiveCardsConfigRec());
}, true, UBT_CWModel.AdaptiveCardsConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AdaptiveCardsConfigRecord.fromStructure = function (str) {
return new AdaptiveCardsConfigRecord(new AdaptiveCardsConfigRecord.RecordClass({
adaptiveCardsConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AdaptiveCardsConfigRecord._isAnonymousRecord = true;
AdaptiveCardsConfigRecord.UniqueId = "c00d14ff-545a-f77e-3622-3dba862824d6";
AdaptiveCardsConfigRecord.init();
return AdaptiveCardsConfigRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.AdaptiveCardsConfigRecord = AdaptiveCardsConfigRecord;

});
define("UBT_CW.model$AdaptiveCardsConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$AdaptiveCardsConfigRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigRecordList = (function (_super) {
__extends(AdaptiveCardsConfigRecordList, _super);
function AdaptiveCardsConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigRecordList.itemType = UBT_CWModel.AdaptiveCardsConfigRecord;
return AdaptiveCardsConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.AdaptiveCardsConfigRecordList = AdaptiveCardsConfigRecordList;

});
define("UBT_CW.model$EventSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$EventSourceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventSourceRecord = (function (_super) {
__extends(EventSourceRecord, _super);
function EventSourceRecord(defaults) {
_super.apply(this, arguments);
}
EventSourceRecord.attributesToDeclare = function () {
return [
this.attr("EventSource", "eventSourceAttr", "EventSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventSourceRec());
}, true, FullCalendarReactiveModel.EventSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
EventSourceRecord.fromStructure = function (str) {
return new EventSourceRecord(new EventSourceRecord.RecordClass({
eventSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventSourceRecord._isAnonymousRecord = true;
EventSourceRecord.UniqueId = "9915d00f-8bb7-2a7c-8636-c92c5eed36cf";
EventSourceRecord.init();
return EventSourceRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.EventSourceRecord = EventSourceRecord;

});
define("UBT_CW.model$EventSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$EventSourceRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventSourceRecordList = (function (_super) {
__extends(EventSourceRecordList, _super);
function EventSourceRecordList(defaults) {
_super.apply(this, arguments);
}
EventSourceRecordList.itemType = UBT_CWModel.EventSourceRecord;
return EventSourceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EventSourceRecordList = EventSourceRecordList;

});
define("UBT_CW.model$", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.TextList = TextList;

});
define("UBT_CW.model$RangeList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$RangeRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var RangeList = (function (_super) {
__extends(RangeList, _super);
function RangeList(defaults) {
_super.apply(this, arguments);
}
RangeList.itemType = FullCalendarReactiveModel.RangeRec;
return RangeList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.RangeList = RangeList;

});
define("UBT_CW.model$ApplicationMenuRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationMenuRec = (function (_super) {
__extends(ApplicationMenuRec, _super);
function ApplicationMenuRec(defaults) {
_super.apply(this, arguments);
}
ApplicationMenuRec.attributesToDeclare = function () {
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
this.attr("IsApplication", "isApplicationAttr", "IsApplication", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IconClass", "iconClassAttr", "IconClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ColorVar", "colorVarAttr", "ColorVar", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ColorIcon", "colorIconAttr", "ColorIcon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShowEntities", "showEntitiesAttr", "ShowEntities", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasBadge", "hasBadgeAttr", "HasBadge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowInConnectApp", "showInConnectAppAttr", "ShowInConnectApp", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowInTroveApp", "showInTroveAppAttr", "ShowInTroveApp", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationMenuRec.init();
return ApplicationMenuRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ApplicationMenuRec = ApplicationMenuRec;

});
define("UBT_CW.model$ApplicationMenuRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ApplicationMenuRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationMenuRecord = (function (_super) {
__extends(ApplicationMenuRecord, _super);
function ApplicationMenuRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationMenuRecord.attributesToDeclare = function () {
return [
this.attr("ApplicationMenu", "applicationMenuAttr", "ApplicationMenu", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.ApplicationMenuRec());
}, true, UBT_CWModel.ApplicationMenuRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationMenuRecord.fromStructure = function (str) {
return new ApplicationMenuRecord(new ApplicationMenuRecord.RecordClass({
applicationMenuAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationMenuRecord._isAnonymousRecord = true;
ApplicationMenuRecord.UniqueId = "5cbc28ff-c98c-8229-784b-c3c5dc5f4644";
ApplicationMenuRecord.init();
return ApplicationMenuRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ApplicationMenuRecord = ApplicationMenuRecord;

});
define("UBT_CW.model$ApplicationMenuRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ApplicationMenuRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationMenuRecordList = (function (_super) {
__extends(ApplicationMenuRecordList, _super);
function ApplicationMenuRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationMenuRecordList.itemType = UBT_CWModel.ApplicationMenuRecord;
return ApplicationMenuRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ApplicationMenuRecordList = ApplicationMenuRecordList;

});
define("UBT_CW.model$BottomBarItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var BottomBarItemRec = (function (_super) {
__extends(BottomBarItemRec, _super);
function BottomBarItemRec(defaults) {
_super.apply(this, arguments);
}
BottomBarItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BottomBarItemRec.init();
return BottomBarItemRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.BottomBarItemRec = BottomBarItemRec;

});
define("UBT_CW.model$HostConfig_FontSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontSizeRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeRecord = (function (_super) {
__extends(HostConfig_FontSizeRecord, _super);
function HostConfig_FontSizeRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_FontSize", "hostConfig_FontSizeAttr", "HostConfig_FontSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontSizeRec());
}, true, UBT_CWModel.HostConfig_FontSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontSizeRecord.fromStructure = function (str) {
return new HostConfig_FontSizeRecord(new HostConfig_FontSizeRecord.RecordClass({
hostConfig_FontSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontSizeRecord._isAnonymousRecord = true;
HostConfig_FontSizeRecord.UniqueId = "e0b40cfb-4e89-a85a-1e2a-d51536204abb";
HostConfig_FontSizeRecord.init();
return HostConfig_FontSizeRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontSizeRecord = HostConfig_FontSizeRecord;

});
define("UBT_CW.model$HostConfig_FontSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontSizeRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeRecordList = (function (_super) {
__extends(HostConfig_FontSizeRecordList, _super);
function HostConfig_FontSizeRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeRecordList.itemType = UBT_CWModel.HostConfig_FontSizeRecord;
return HostConfig_FontSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontSizeRecordList = HostConfig_FontSizeRecordList;

});
define("UBT_CW.model$HostConfig_FontWeightsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontWeightsRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsRecord = (function (_super) {
__extends(HostConfig_FontWeightsRecord, _super);
function HostConfig_FontWeightsRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_FontWeights", "hostConfig_FontWeightsAttr", "HostConfig_FontWeights", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontWeightsRec());
}, true, UBT_CWModel.HostConfig_FontWeightsRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontWeightsRecord.fromStructure = function (str) {
return new HostConfig_FontWeightsRecord(new HostConfig_FontWeightsRecord.RecordClass({
hostConfig_FontWeightsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontWeightsRecord._isAnonymousRecord = true;
HostConfig_FontWeightsRecord.UniqueId = "b94d3213-38ce-2d69-df58-784c9d08c5f9";
HostConfig_FontWeightsRecord.init();
return HostConfig_FontWeightsRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontWeightsRecord = HostConfig_FontWeightsRecord;

});
define("UBT_CW.model$HostConfig_FontWeightsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontWeightsRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsRecordList = (function (_super) {
__extends(HostConfig_FontWeightsRecordList, _super);
function HostConfig_FontWeightsRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsRecordList.itemType = UBT_CWModel.HostConfig_FontWeightsRecord;
return HostConfig_FontWeightsRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontWeightsRecordList = HostConfig_FontWeightsRecordList;

});
define("UBT_CW.model$EventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$EventRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventRecord = (function (_super) {
__extends(EventRecord, _super);
function EventRecord(defaults) {
_super.apply(this, arguments);
}
EventRecord.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventRec());
}, true, FullCalendarReactiveModel.EventRec)
].concat(_super.attributesToDeclare.call(this));
};
EventRecord.fromStructure = function (str) {
return new EventRecord(new EventRecord.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventRecord._isAnonymousRecord = true;
EventRecord.UniqueId = "40643c74-d700-6f27-beec-e247aa9fc5fc";
EventRecord.init();
return EventRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.EventRecord = EventRecord;

});
define("UBT_CW.model$EventDescriptionList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$EventDescriptionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventDescriptionList = (function (_super) {
__extends(EventDescriptionList, _super);
function EventDescriptionList(defaults) {
_super.apply(this, arguments);
}
EventDescriptionList.itemType = FullCalendarReactiveModel.EventDescriptionRec;
return EventDescriptionList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EventDescriptionList = EventDescriptionList;

});
define("UBT_CW.model$Espace_VersionList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$Espace_VersionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var Espace_VersionList = (function (_super) {
__extends(Espace_VersionList, _super);
function Espace_VersionList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionList.itemType = ServiceCenterModel.Espace_VersionRec;
return Espace_VersionList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.Espace_VersionList = Espace_VersionList;

});
define("UBT_CW.model$DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = (function (_super) {
__extends(DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord, _super);
function DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.attributesToDeclare = function () {
return [
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
DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord._isAnonymousRecord = true;
DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.UniqueId = "d15fadd2-5007-c90e-8853-101274438864";
DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord.init();
return DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord = DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;

});
define("UBT_CW.model$DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = (function (_super) {
__extends(DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList, _super);
function DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList.itemType = UBT_CWModel.DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecord;
return DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList = DecimalDecimalDecimalDecimalBooleanBooleanBooleanBooleanIntegerIntegerRecordList;

});
define("UBT_CW.model$DurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$DurationRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var DurationRecord = (function (_super) {
__extends(DurationRecord, _super);
function DurationRecord(defaults) {
_super.apply(this, arguments);
}
DurationRecord.attributesToDeclare = function () {
return [
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationRec());
}, true, FullCalendarReactiveModel.DurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DurationRecord.fromStructure = function (str) {
return new DurationRecord(new DurationRecord.RecordClass({
durationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DurationRecord._isAnonymousRecord = true;
DurationRecord.UniqueId = "cd2a7371-8736-29ca-16d7-c7dd0cd180d7";
DurationRecord.init();
return DurationRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.DurationRecord = DurationRecord;

});
define("UBT_CW.model$DurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$DurationRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var DurationRecordList = (function (_super) {
__extends(DurationRecordList, _super);
function DurationRecordList(defaults) {
_super.apply(this, arguments);
}
DurationRecordList.itemType = UBT_CWModel.DurationRecord;
return DurationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.DurationRecordList = DurationRecordList;

});
define("UBT_CW.model$LayerAccessRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var LayerAccessRec = (function (_super) {
__extends(LayerAccessRec, _super);
function LayerAccessRec(defaults) {
_super.apply(this, arguments);
}
LayerAccessRec.attributesToDeclare = function () {
return [
this.attr("GlobalSelected", "globalSelectedAttr", "GlobalSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RegionSelected", "regionSelectedAttr", "RegionSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CountrySelected", "countrySelectedAttr", "CountrySelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalitySelected", "localitySelectedAttr", "LocalitySelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SubDivisionSelected", "subDivisionSelectedAttr", "SubDivisionSelected", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LayerAccessRec.init();
return LayerAccessRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.LayerAccessRec = LayerAccessRec;

});
define("UBT_CW.model$LayerAccessRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$LayerAccessRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var LayerAccessRecord = (function (_super) {
__extends(LayerAccessRecord, _super);
function LayerAccessRecord(defaults) {
_super.apply(this, arguments);
}
LayerAccessRecord.attributesToDeclare = function () {
return [
this.attr("LayerAccess", "layerAccessAttr", "LayerAccess", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.LayerAccessRec());
}, true, UBT_CWModel.LayerAccessRec)
].concat(_super.attributesToDeclare.call(this));
};
LayerAccessRecord.fromStructure = function (str) {
return new LayerAccessRecord(new LayerAccessRecord.RecordClass({
layerAccessAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LayerAccessRecord._isAnonymousRecord = true;
LayerAccessRecord.UniqueId = "f0e6a184-1c5e-7041-9cfb-29b6880d724f";
LayerAccessRecord.init();
return LayerAccessRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.LayerAccessRecord = LayerAccessRecord;

});
define("UBT_CW.model$LayerAccessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$LayerAccessRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var LayerAccessRecordList = (function (_super) {
__extends(LayerAccessRecordList, _super);
function LayerAccessRecordList(defaults) {
_super.apply(this, arguments);
}
LayerAccessRecordList.itemType = UBT_CWModel.LayerAccessRecord;
return LayerAccessRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.LayerAccessRecordList = LayerAccessRecordList;

});
define("UBT_CW.model$HostConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfigRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfigList = (function (_super) {
__extends(HostConfigList, _super);
function HostConfigList(defaults) {
_super.apply(this, arguments);
}
HostConfigList.itemType = UBT_CWModel.HostConfigRec;
return HostConfigList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfigList = HostConfigList;

});
define("UBT_CW.model$SliderColorList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderColorRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderColorList = (function (_super) {
__extends(SliderColorList, _super);
function SliderColorList(defaults) {
_super.apply(this, arguments);
}
SliderColorList.itemType = UBT_CWModel.SliderColorRec;
return SliderColorList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.SliderColorList = SliderColorList;

});
define("UBT_CW.model$MenuUserDataRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var MenuUserDataRec = (function (_super) {
__extends(MenuUserDataRec, _super);
function MenuUserDataRec(defaults) {
_super.apply(this, arguments);
}
MenuUserDataRec.attributesToDeclare = function () {
return [
this.attr("RuntimeDateTime", "runtimeDateTimeAttr", "RuntimeDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserPhotoSignedURL", "userPhotoSignedURLAttr", "UserPhotoSignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MenuUserDataRec.init();
return MenuUserDataRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.MenuUserDataRec = MenuUserDataRec;

});
define("UBT_CW.model$MenuUserDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$MenuUserDataRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var MenuUserDataRecord = (function (_super) {
__extends(MenuUserDataRecord, _super);
function MenuUserDataRecord(defaults) {
_super.apply(this, arguments);
}
MenuUserDataRecord.attributesToDeclare = function () {
return [
this.attr("MenuUserData", "menuUserDataAttr", "MenuUserData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.MenuUserDataRec());
}, true, UBT_CWModel.MenuUserDataRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuUserDataRecord.fromStructure = function (str) {
return new MenuUserDataRecord(new MenuUserDataRecord.RecordClass({
menuUserDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuUserDataRecord._isAnonymousRecord = true;
MenuUserDataRecord.UniqueId = "e5b595b7-3a4a-2d8f-73a1-b2d6bdf45a21";
MenuUserDataRecord.init();
return MenuUserDataRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.MenuUserDataRecord = MenuUserDataRecord;

});
define("UBT_CW.model$MenuUserDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$MenuUserDataRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var MenuUserDataRecordList = (function (_super) {
__extends(MenuUserDataRecordList, _super);
function MenuUserDataRecordList(defaults) {
_super.apply(this, arguments);
}
MenuUserDataRecordList.itemType = UBT_CWModel.MenuUserDataRecord;
return MenuUserDataRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.MenuUserDataRecordList = MenuUserDataRecordList;

});
define("UBT_CW.model$ListNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ListNavigationRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ListNavigationRecord = (function (_super) {
__extends(ListNavigationRecord, _super);
function ListNavigationRecord(defaults) {
_super.apply(this, arguments);
}
ListNavigationRecord.attributesToDeclare = function () {
return [
this.attr("ListNavigation", "listNavigationAttr", "ListNavigation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.ListNavigationRec());
}, true, UBT_CWModel.ListNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
ListNavigationRecord.fromStructure = function (str) {
return new ListNavigationRecord(new ListNavigationRecord.RecordClass({
listNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ListNavigationRecord._isAnonymousRecord = true;
ListNavigationRecord.UniqueId = "8278d031-757c-8a65-1021-d113482f098c";
ListNavigationRecord.init();
return ListNavigationRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ListNavigationRecord = ListNavigationRecord;

});
define("UBT_CW.model$ListNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ListNavigationRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ListNavigationRecordList = (function (_super) {
__extends(ListNavigationRecordList, _super);
function ListNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
ListNavigationRecordList.itemType = UBT_CWModel.ListNavigationRecord;
return ListNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ListNavigationRecordList = ListNavigationRecordList;

});
define("UBT_CW.model$ApplicationSubMenuRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationSubMenuRec = (function (_super) {
__extends(ApplicationSubMenuRec, _super);
function ApplicationSubMenuRec(defaults) {
_super.apply(this, arguments);
}
ApplicationSubMenuRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApplicationMenuId", "applicationMenuIdAttr", "ApplicationMenuId", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
ApplicationSubMenuRec.init();
return ApplicationSubMenuRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ApplicationSubMenuRec = ApplicationSubMenuRec;

});
define("UBT_CW.model$ApplicationSubMenuList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ApplicationSubMenuRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationSubMenuList = (function (_super) {
__extends(ApplicationSubMenuList, _super);
function ApplicationSubMenuList(defaults) {
_super.apply(this, arguments);
}
ApplicationSubMenuList.itemType = UBT_CWModel.ApplicationSubMenuRec;
return ApplicationSubMenuList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ApplicationSubMenuList = ApplicationSubMenuList;

});
define("UBT_CW.model$Espace_VersionEspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$Espace_VersionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter", "ServiceCenter.model$EspaceRec"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var Espace_VersionEspaceRecord = (function (_super) {
__extends(Espace_VersionEspaceRecord, _super);
function Espace_VersionEspaceRecord(defaults) {
_super.apply(this, arguments);
}
Espace_VersionEspaceRecord.attributesToDeclare = function () {
return [
this.attr("Espace_Version", "espace_VersionAttr", "Espace_Version", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.Espace_VersionRec());
}, true, ServiceCenterModel.Espace_VersionRec), 
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.EspaceRec());
}, true, ServiceCenterModel.EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionEspaceRecord._isAnonymousRecord = true;
Espace_VersionEspaceRecord.UniqueId = "5467a00b-059c-fbf4-68e1-bd8959c2471e";
Espace_VersionEspaceRecord.init();
return Espace_VersionEspaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.Espace_VersionEspaceRecord = Espace_VersionEspaceRecord;

});
define("UBT_CW.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$PositionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var PositionRecord = (function (_super) {
__extends(PositionRecord, _super);
function PositionRecord(defaults) {
_super.apply(this, arguments);
}
PositionRecord.attributesToDeclare = function () {
return [
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.PositionRec());
}, true, OutSystemsUIModel.PositionRec)
].concat(_super.attributesToDeclare.call(this));
};
PositionRecord.fromStructure = function (str) {
return new PositionRecord(new PositionRecord.RecordClass({
positionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PositionRecord._isAnonymousRecord = true;
PositionRecord.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
PositionRecord.init();
return PositionRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.PositionRecord = PositionRecord;

});
define("UBT_CW.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$PositionRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = UBT_CWModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.PositionRecordList = PositionRecordList;

});
define("UBT_CW.model$ResourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$ResourceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var ResourceList = (function (_super) {
__extends(ResourceList, _super);
function ResourceList(defaults) {
_super.apply(this, arguments);
}
ResourceList.itemType = FullCalendarReactiveModel.ResourceRec;
return ResourceList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ResourceList = ResourceList;

});
define("UBT_CW.model$ResourceSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$ResourceSourceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var ResourceSourceRecord = (function (_super) {
__extends(ResourceSourceRecord, _super);
function ResourceSourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRecord.attributesToDeclare = function () {
return [
this.attr("ResourceSource", "resourceSourceAttr", "ResourceSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceSourceRec());
}, true, FullCalendarReactiveModel.ResourceSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceSourceRecord.fromStructure = function (str) {
return new ResourceSourceRecord(new ResourceSourceRecord.RecordClass({
resourceSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceSourceRecord._isAnonymousRecord = true;
ResourceSourceRecord.UniqueId = "5bb69d1c-29b1-20b3-47ed-c0d48a5388df";
ResourceSourceRecord.init();
return ResourceSourceRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ResourceSourceRecord = ResourceSourceRecord;

});
define("UBT_CW.model$EspaceList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$EspaceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EspaceList = (function (_super) {
__extends(EspaceList, _super);
function EspaceList(defaults) {
_super.apply(this, arguments);
}
EspaceList.itemType = ServiceCenterModel.EspaceRec;
return EspaceList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EspaceList = EspaceList;

});
define("UBT_CW.model$EventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$EventRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var EventRecordList = (function (_super) {
__extends(EventRecordList, _super);
function EventRecordList(defaults) {
_super.apply(this, arguments);
}
EventRecordList.itemType = UBT_CWModel.EventRecord;
return EventRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EventRecordList = EventRecordList;

});
define("UBT_CW.model$SliderList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderList = (function (_super) {
__extends(SliderList, _super);
function SliderList(defaults) {
_super.apply(this, arguments);
}
SliderList.itemType = UBT_CWModel.SliderRec;
return SliderList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.SliderList = SliderList;

});
define("UBT_CW.model$CallbacksRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$CallbacksRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var CallbacksRecord = (function (_super) {
__extends(CallbacksRecord, _super);
function CallbacksRecord(defaults) {
_super.apply(this, arguments);
}
CallbacksRecord.attributesToDeclare = function () {
return [
this.attr("Callbacks", "callbacksAttr", "Callbacks", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.CallbacksRec());
}, true, FullCalendarReactiveModel.CallbacksRec)
].concat(_super.attributesToDeclare.call(this));
};
CallbacksRecord.fromStructure = function (str) {
return new CallbacksRecord(new CallbacksRecord.RecordClass({
callbacksAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CallbacksRecord._isAnonymousRecord = true;
CallbacksRecord.UniqueId = "770c33a2-9787-a079-ca18-f2c69a1986aa";
CallbacksRecord.init();
return CallbacksRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.CallbacksRecord = CallbacksRecord;

});
define("UBT_CW.model$EspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$EspaceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var EspaceRecord = (function (_super) {
__extends(EspaceRecord, _super);
function EspaceRecord(defaults) {
_super.apply(this, arguments);
}
EspaceRecord.attributesToDeclare = function () {
return [
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.EspaceRec());
}, true, ServiceCenterModel.EspaceRec)
].concat(_super.attributesToDeclare.call(this));
};
EspaceRecord.fromStructure = function (str) {
return new EspaceRecord(new EspaceRecord.RecordClass({
espaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EspaceRecord._isAnonymousRecord = true;
EspaceRecord.UniqueId = "a702e171-772a-9b89-c17e-2544ab6d1d29";
EspaceRecord.init();
return EspaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.EspaceRecord = EspaceRecord;

});
define("UBT_CW.model$EspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$EspaceRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var EspaceRecordList = (function (_super) {
__extends(EspaceRecordList, _super);
function EspaceRecordList(defaults) {
_super.apply(this, arguments);
}
EspaceRecordList.itemType = UBT_CWModel.EspaceRecord;
return EspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.EspaceRecordList = EspaceRecordList;

});
define("UBT_CW.model$ResourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$ResourceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var ResourceRecord = (function (_super) {
__extends(ResourceRecord, _super);
function ResourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceRecord.attributesToDeclare = function () {
return [
this.attr("Resource", "resourceAttr", "Resource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceRec());
}, true, FullCalendarReactiveModel.ResourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceRecord.fromStructure = function (str) {
return new ResourceRecord(new ResourceRecord.RecordClass({
resourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceRecord._isAnonymousRecord = true;
ResourceRecord.UniqueId = "7810c21d-d757-4dc9-3bb0-9743aa9a452f";
ResourceRecord.init();
return ResourceRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ResourceRecord = ResourceRecord;

});
define("UBT_CW.model$HostConfig_FontTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontTypeRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeRecord = (function (_super) {
__extends(HostConfig_FontTypeRecord, _super);
function HostConfig_FontTypeRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_FontType", "hostConfig_FontTypeAttr", "HostConfig_FontType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontTypeRec());
}, true, UBT_CWModel.HostConfig_FontTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontTypeRecord.fromStructure = function (str) {
return new HostConfig_FontTypeRecord(new HostConfig_FontTypeRecord.RecordClass({
hostConfig_FontTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontTypeRecord._isAnonymousRecord = true;
HostConfig_FontTypeRecord.UniqueId = "79445e6f-bd11-c56f-f4b3-d25325ab8e9f";
HostConfig_FontTypeRecord.init();
return HostConfig_FontTypeRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontTypeRecord = HostConfig_FontTypeRecord;

});
define("UBT_CW.model$HostConfig_FontSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontSizeRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontSizeList = (function (_super) {
__extends(HostConfig_FontSizeList, _super);
function HostConfig_FontSizeList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontSizeList.itemType = UBT_CWModel.HostConfig_FontSizeRec;
return HostConfig_FontSizeList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontSizeList = HostConfig_FontSizeList;

});
define("UBT_CW.model$HostConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfigRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfigRecordList = (function (_super) {
__extends(HostConfigRecordList, _super);
function HostConfigRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfigRecordList.itemType = UBT_CWModel.HostConfigRecord;
return HostConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfigRecordList = HostConfigRecordList;

});
define("UBT_CW.model$SliderRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderRecord = (function (_super) {
__extends(SliderRecord, _super);
function SliderRecord(defaults) {
_super.apply(this, arguments);
}
SliderRecord.attributesToDeclare = function () {
return [
this.attr("Slider", "sliderAttr", "Slider", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.SliderRec());
}, true, UBT_CWModel.SliderRec)
].concat(_super.attributesToDeclare.call(this));
};
SliderRecord.fromStructure = function (str) {
return new SliderRecord(new SliderRecord.RecordClass({
sliderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SliderRecord._isAnonymousRecord = true;
SliderRecord.UniqueId = "80c8e613-9352-2bc8-5d3b-7f4d6f68e32d";
SliderRecord.init();
return SliderRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.SliderRecord = SliderRecord;

});
define("UBT_CW.model$CallbacksList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$CallbacksRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var CallbacksList = (function (_super) {
__extends(CallbacksList, _super);
function CallbacksList(defaults) {
_super.apply(this, arguments);
}
CallbacksList.itemType = FullCalendarReactiveModel.CallbacksRec;
return CallbacksList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.CallbacksList = CallbacksList;

});
define("UBT_CW.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$UserRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
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
UBT_CWModel.UserRecord = UserRecord;

});
define("UBT_CW.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$UserRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = UBT_CWModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.UserRecordList = UserRecordList;

});
define("UBT_CW.model$BottomBarItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$BottomBarItemRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var BottomBarItemRecord = (function (_super) {
__extends(BottomBarItemRecord, _super);
function BottomBarItemRecord(defaults) {
_super.apply(this, arguments);
}
BottomBarItemRecord.attributesToDeclare = function () {
return [
this.attr("BottomBarItem", "bottomBarItemAttr", "BottomBarItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.BottomBarItemRec());
}, true, UBT_CWModel.BottomBarItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BottomBarItemRecord.fromStructure = function (str) {
return new BottomBarItemRecord(new BottomBarItemRecord.RecordClass({
bottomBarItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BottomBarItemRecord._isAnonymousRecord = true;
BottomBarItemRecord.UniqueId = "df4725a8-b4eb-c3fe-37a2-6557380d4fd9";
BottomBarItemRecord.init();
return BottomBarItemRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.BottomBarItemRecord = BottomBarItemRecord;

});
define("UBT_CW.model$BottomBarItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$BottomBarItemRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var BottomBarItemRecordList = (function (_super) {
__extends(BottomBarItemRecordList, _super);
function BottomBarItemRecordList(defaults) {
_super.apply(this, arguments);
}
BottomBarItemRecordList.itemType = UBT_CWModel.BottomBarItemRecord;
return BottomBarItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.BottomBarItemRecordList = BottomBarItemRecordList;

});
define("UBT_CW.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$ColorRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColorRec());
}, true, OutSystemsUIModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ColorRecord = ColorRecord;

});
define("UBT_CW.model$HostConfig_FontTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontTypeRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeRecordList = (function (_super) {
__extends(HostConfig_FontTypeRecordList, _super);
function HostConfig_FontTypeRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeRecordList.itemType = UBT_CWModel.HostConfig_FontTypeRecord;
return HostConfig_FontTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontTypeRecordList = HostConfig_FontTypeRecordList;

});
define("UBT_CW.model$Espace_VersionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$Espace_VersionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecord = (function (_super) {
__extends(Espace_VersionRecord, _super);
function Espace_VersionRecord(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecord.attributesToDeclare = function () {
return [
this.attr("Espace_Version", "espace_VersionAttr", "Espace_Version", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.Espace_VersionRec());
}, true, ServiceCenterModel.Espace_VersionRec)
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionRecord.fromStructure = function (str) {
return new Espace_VersionRecord(new Espace_VersionRecord.RecordClass({
espace_VersionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Espace_VersionRecord._isAnonymousRecord = true;
Espace_VersionRecord.UniqueId = "a30dbf03-0b81-3bab-70c6-b26430e8789b";
Espace_VersionRecord.init();
return Espace_VersionRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.Espace_VersionRecord = Espace_VersionRecord;

});
define("UBT_CW.model$Espace_VersionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$Espace_VersionRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecordList = (function (_super) {
__extends(Espace_VersionRecordList, _super);
function Espace_VersionRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecordList.itemType = UBT_CWModel.Espace_VersionRecord;
return Espace_VersionRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.Espace_VersionRecordList = Espace_VersionRecordList;

});
define("UBT_CW.model$SliderColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderColorRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderColorRecord = (function (_super) {
__extends(SliderColorRecord, _super);
function SliderColorRecord(defaults) {
_super.apply(this, arguments);
}
SliderColorRecord.attributesToDeclare = function () {
return [
this.attr("SliderColor", "sliderColorAttr", "SliderColor", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.SliderColorRec());
}, true, UBT_CWModel.SliderColorRec)
].concat(_super.attributesToDeclare.call(this));
};
SliderColorRecord.fromStructure = function (str) {
return new SliderColorRecord(new SliderColorRecord.RecordClass({
sliderColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SliderColorRecord._isAnonymousRecord = true;
SliderColorRecord.UniqueId = "c221cab7-939a-91e0-a696-3110b6ff9258";
SliderColorRecord.init();
return SliderColorRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.SliderColorRecord = SliderColorRecord;

});
define("UBT_CW.model$SliderColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderColorRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderColorRecordList = (function (_super) {
__extends(SliderColorRecordList, _super);
function SliderColorRecordList(defaults) {
_super.apply(this, arguments);
}
SliderColorRecordList.itemType = UBT_CWModel.SliderColorRecord;
return SliderColorRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.SliderColorRecordList = SliderColorRecordList;

});
define("UBT_CW.model$RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$RangeRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var RangeRecord = (function (_super) {
__extends(RangeRecord, _super);
function RangeRecord(defaults) {
_super.apply(this, arguments);
}
RangeRecord.attributesToDeclare = function () {
return [
this.attr("Range", "rangeAttr", "Range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.RangeRec());
}, true, FullCalendarReactiveModel.RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeRecord.fromStructure = function (str) {
return new RangeRecord(new RangeRecord.RecordClass({
rangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeRecord._isAnonymousRecord = true;
RangeRecord.UniqueId = "955c9088-bb27-57cb-e1ea-0efd52bf1f7b";
RangeRecord.init();
return RangeRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.RangeRecord = RangeRecord;

});
define("UBT_CW.model$RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$RangeRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var RangeRecordList = (function (_super) {
__extends(RangeRecordList, _super);
function RangeRecordList(defaults) {
_super.apply(this, arguments);
}
RangeRecordList.itemType = UBT_CWModel.RangeRecord;
return RangeRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.RangeRecordList = RangeRecordList;

});
define("UBT_CW.model$MenuUserDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$MenuUserDataRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var MenuUserDataList = (function (_super) {
__extends(MenuUserDataList, _super);
function MenuUserDataList(defaults) {
_super.apply(this, arguments);
}
MenuUserDataList.itemType = UBT_CWModel.MenuUserDataRec;
return MenuUserDataList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.MenuUserDataList = MenuUserDataList;

});
define("UBT_CW.model$ResourceSourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$ResourceSourceRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var ResourceSourceList = (function (_super) {
__extends(ResourceSourceList, _super);
function ResourceSourceList(defaults) {
_super.apply(this, arguments);
}
ResourceSourceList.itemType = FullCalendarReactiveModel.ResourceSourceRec;
return ResourceSourceList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ResourceSourceList = ResourceSourceList;

});
define("UBT_CW.model$ThemeClassRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ThemeClassRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ThemeClassRecord = (function (_super) {
__extends(ThemeClassRecord, _super);
function ThemeClassRecord(defaults) {
_super.apply(this, arguments);
}
ThemeClassRecord.attributesToDeclare = function () {
return [
this.attr("ThemeClass", "themeClassAttr", "ThemeClass", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.ThemeClassRec());
}, true, UBT_CWModel.ThemeClassRec)
].concat(_super.attributesToDeclare.call(this));
};
ThemeClassRecord.fromStructure = function (str) {
return new ThemeClassRecord(new ThemeClassRecord.RecordClass({
themeClassAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ThemeClassRecord._isAnonymousRecord = true;
ThemeClassRecord.UniqueId = "f19899b9-7248-fe13-a6a1-665639f633dd";
ThemeClassRecord.init();
return ThemeClassRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ThemeClassRecord = ThemeClassRecord;

});
define("UBT_CW.model$ThemeClassRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ThemeClassRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ThemeClassRecordList = (function (_super) {
__extends(ThemeClassRecordList, _super);
function ThemeClassRecordList(defaults) {
_super.apply(this, arguments);
}
ThemeClassRecordList.itemType = UBT_CWModel.ThemeClassRecord;
return ThemeClassRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ThemeClassRecordList = ThemeClassRecordList;

});
define("UBT_CW.model$BottomBarItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$BottomBarItemRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var BottomBarItemList = (function (_super) {
__extends(BottomBarItemList, _super);
function BottomBarItemList(defaults) {
_super.apply(this, arguments);
}
BottomBarItemList.itemType = UBT_CWModel.BottomBarItemRec;
return BottomBarItemList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.BottomBarItemList = BottomBarItemList;

});
define("UBT_CW.model$LayerAccessList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$LayerAccessRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var LayerAccessList = (function (_super) {
__extends(LayerAccessList, _super);
function LayerAccessList(defaults) {
_super.apply(this, arguments);
}
LayerAccessList.itemType = UBT_CWModel.LayerAccessRec;
return LayerAccessList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.LayerAccessList = LayerAccessList;

});
define("UBT_CW.model$HostConfig_SpacingRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_SpacingRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingRecord = (function (_super) {
__extends(HostConfig_SpacingRecord, _super);
function HostConfig_SpacingRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_Spacing", "hostConfig_SpacingAttr", "HostConfig_Spacing", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_SpacingRec());
}, true, UBT_CWModel.HostConfig_SpacingRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_SpacingRecord.fromStructure = function (str) {
return new HostConfig_SpacingRecord(new HostConfig_SpacingRecord.RecordClass({
hostConfig_SpacingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_SpacingRecord._isAnonymousRecord = true;
HostConfig_SpacingRecord.UniqueId = "ecc3f0b7-8d87-dedb-c3a9-97f242a496d7";
HostConfig_SpacingRecord.init();
return HostConfig_SpacingRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_SpacingRecord = HostConfig_SpacingRecord;

});
define("UBT_CW.model$HostConfig_SpacingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_SpacingRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingRecordList = (function (_super) {
__extends(HostConfig_SpacingRecordList, _super);
function HostConfig_SpacingRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingRecordList.itemType = UBT_CWModel.HostConfig_SpacingRecord;
return HostConfig_SpacingRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_SpacingRecordList = HostConfig_SpacingRecordList;

});
define("UBT_CW.model$ApplicationSubMenuRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ApplicationSubMenuRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationSubMenuRecord = (function (_super) {
__extends(ApplicationSubMenuRecord, _super);
function ApplicationSubMenuRecord(defaults) {
_super.apply(this, arguments);
}
ApplicationSubMenuRecord.attributesToDeclare = function () {
return [
this.attr("ApplicationSubMenu", "applicationSubMenuAttr", "ApplicationSubMenu", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.ApplicationSubMenuRec());
}, true, UBT_CWModel.ApplicationSubMenuRec)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationSubMenuRecord.fromStructure = function (str) {
return new ApplicationSubMenuRecord(new ApplicationSubMenuRecord.RecordClass({
applicationSubMenuAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApplicationSubMenuRecord._isAnonymousRecord = true;
ApplicationSubMenuRecord.UniqueId = "c101af55-2c05-277d-488a-a910e05fe526";
ApplicationSubMenuRecord.init();
return ApplicationSubMenuRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.ApplicationSubMenuRecord = ApplicationSubMenuRecord;

});
define("UBT_CW.model$ApplicationSubMenuRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ApplicationSubMenuRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationSubMenuRecordList = (function (_super) {
__extends(ApplicationSubMenuRecordList, _super);
function ApplicationSubMenuRecordList(defaults) {
_super.apply(this, arguments);
}
ApplicationSubMenuRecordList.itemType = UBT_CWModel.ApplicationSubMenuRecord;
return ApplicationSubMenuRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ApplicationSubMenuRecordList = ApplicationSubMenuRecordList;

});
define("UBT_CW.model$PlaceRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var PlaceRec = (function (_super) {
__extends(PlaceRec, _super);
function PlaceRec(defaults) {
_super.apply(this, arguments);
}
PlaceRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsEnabled", "isEnabledAttr", "IsEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isSelected", "isSelectedAttr", "isSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PlaceRec.init();
return PlaceRec;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.PlaceRec = PlaceRec;

});
define("UBT_CW.model$PlaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$PlaceRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var PlaceRecord = (function (_super) {
__extends(PlaceRecord, _super);
function PlaceRecord(defaults) {
_super.apply(this, arguments);
}
PlaceRecord.attributesToDeclare = function () {
return [
this.attr("Place", "placeAttr", "Place", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.PlaceRec());
}, true, UBT_CWModel.PlaceRec)
].concat(_super.attributesToDeclare.call(this));
};
PlaceRecord.fromStructure = function (str) {
return new PlaceRecord(new PlaceRecord.RecordClass({
placeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlaceRecord._isAnonymousRecord = true;
PlaceRecord.UniqueId = "d489bd73-06fb-ad5e-d780-b477e881f5e1";
PlaceRecord.init();
return PlaceRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.PlaceRecord = PlaceRecord;

});
define("UBT_CW.model$PlaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$PlaceRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var PlaceRecordList = (function (_super) {
__extends(PlaceRecordList, _super);
function PlaceRecordList(defaults) {
_super.apply(this, arguments);
}
PlaceRecordList.itemType = UBT_CWModel.PlaceRecord;
return PlaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.PlaceRecordList = PlaceRecordList;

});
define("UBT_CW.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ColorRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = UBT_CWModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ColorRecordList = ColorRecordList;

});
define("UBT_CW.model$ResourceSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ResourceSourceRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ResourceSourceRecordList = (function (_super) {
__extends(ResourceSourceRecordList, _super);
function ResourceSourceRecordList(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRecordList.itemType = UBT_CWModel.ResourceSourceRecord;
return ResourceSourceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ResourceSourceRecordList = ResourceSourceRecordList;

});
define("UBT_CW.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$AnimationTypeRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.AnimationTypeList = AnimationTypeList;

});
define("UBT_CW.model$HostConfig_FontTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontTypeRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontTypeList = (function (_super) {
__extends(HostConfig_FontTypeList, _super);
function HostConfig_FontTypeList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontTypeList.itemType = UBT_CWModel.HostConfig_FontTypeRec;
return HostConfig_FontTypeList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontTypeList = HostConfig_FontTypeList;

});
define("UBT_CW.model$PlaceList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$PlaceRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var PlaceList = (function (_super) {
__extends(PlaceList, _super);
function PlaceList(defaults) {
_super.apply(this, arguments);
}
PlaceList.itemType = UBT_CWModel.PlaceRec;
return PlaceList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.PlaceList = PlaceList;

});
define("UBT_CW.model$ResourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ResourceRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ResourceRecordList = (function (_super) {
__extends(ResourceRecordList, _super);
function ResourceRecordList(defaults) {
_super.apply(this, arguments);
}
ResourceRecordList.itemType = UBT_CWModel.ResourceRecord;
return ResourceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ResourceRecordList = ResourceRecordList;

});
define("UBT_CW.model$DurationList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$DurationRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var DurationList = (function (_super) {
__extends(DurationList, _super);
function DurationList(defaults) {
_super.apply(this, arguments);
}
DurationList.itemType = FullCalendarReactiveModel.DurationRec;
return DurationList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.DurationList = DurationList;

});
define("UBT_CW.model$HostConfig_FontList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontList = (function (_super) {
__extends(HostConfig_FontList, _super);
function HostConfig_FontList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontList.itemType = UBT_CWModel.HostConfig_FontRec;
return HostConfig_FontList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontList = HostConfig_FontList;

});
define("UBT_CW.model$ApplicationMenuList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ApplicationMenuRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ApplicationMenuList = (function (_super) {
__extends(ApplicationMenuList, _super);
function ApplicationMenuList(defaults) {
_super.apply(this, arguments);
}
ApplicationMenuList.itemType = UBT_CWModel.ApplicationMenuRec;
return ApplicationMenuList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ApplicationMenuList = ApplicationMenuList;

});
define("UBT_CW.model$DurationObjectList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "UBT_CW.model", "FullCalendarReactive.model$DurationObjectRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var DurationObjectList = (function (_super) {
__extends(DurationObjectList, _super);
function DurationObjectList(defaults) {
_super.apply(this, arguments);
}
DurationObjectList.itemType = FullCalendarReactiveModel.DurationObjectRec;
return DurationObjectList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.DurationObjectList = DurationObjectList;

});
define("UBT_CW.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$SpeedRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpeedRec());
}, true, OutSystemsUIModel.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord._isAnonymousRecord = true;
SpeedRecord.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.SpeedRecord = SpeedRecord;

});
define("UBT_CW.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$ColorRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ColorList = ColorList;

});
define("UBT_CW.model$AdaptiveCardsConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$AdaptiveCardsConfigRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var AdaptiveCardsConfigList = (function (_super) {
__extends(AdaptiveCardsConfigList, _super);
function AdaptiveCardsConfigList(defaults) {
_super.apply(this, arguments);
}
AdaptiveCardsConfigList.itemType = UBT_CWModel.AdaptiveCardsConfigRec;
return AdaptiveCardsConfigList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.AdaptiveCardsConfigList = AdaptiveCardsConfigList;

});
define("UBT_CW.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$PositionRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.PositionList = PositionList;

});
define("UBT_CW.model$HostConfig_FontRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontRecord = (function (_super) {
__extends(HostConfig_FontRecord, _super);
function HostConfig_FontRecord(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontRecord.attributesToDeclare = function () {
return [
this.attr("HostConfig_Font", "hostConfig_FontAttr", "HostConfig_Font", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_CWModel.HostConfig_FontRec());
}, true, UBT_CWModel.HostConfig_FontRec)
].concat(_super.attributesToDeclare.call(this));
};
HostConfig_FontRecord.fromStructure = function (str) {
return new HostConfig_FontRecord(new HostConfig_FontRecord.RecordClass({
hostConfig_FontAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostConfig_FontRecord._isAnonymousRecord = true;
HostConfig_FontRecord.UniqueId = "dc40e6c3-0e4c-c69a-a862-d24a808ef35d";
HostConfig_FontRecord.init();
return HostConfig_FontRecord;
})(OS.DataTypes.GenericRecord);
UBT_CWModel.HostConfig_FontRecord = HostConfig_FontRecord;

});
define("UBT_CW.model$HostConfig_FontRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontRecordList = (function (_super) {
__extends(HostConfig_FontRecordList, _super);
function HostConfig_FontRecordList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontRecordList.itemType = UBT_CWModel.HostConfig_FontRecord;
return HostConfig_FontRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontRecordList = HostConfig_FontRecordList;

});
define("UBT_CW.model$Espace_VersionEspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$Espace_VersionEspaceRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var Espace_VersionEspaceRecordList = (function (_super) {
__extends(Espace_VersionEspaceRecordList, _super);
function Espace_VersionEspaceRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionEspaceRecordList.itemType = UBT_CWModel.Espace_VersionEspaceRecord;
return Espace_VersionEspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.Espace_VersionEspaceRecordList = Espace_VersionEspaceRecordList;

});
define("UBT_CW.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "UBT_CW.model", "OutSystemsUI.model$SpeedRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.SpeedList = SpeedList;

});
define("UBT_CW.model$CallbacksRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$CallbacksRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var CallbacksRecordList = (function (_super) {
__extends(CallbacksRecordList, _super);
function CallbacksRecordList(defaults) {
_super.apply(this, arguments);
}
CallbacksRecordList.itemType = UBT_CWModel.CallbacksRecord;
return CallbacksRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.CallbacksRecordList = CallbacksRecordList;

});
define("UBT_CW.model$HostConfig_SpacingList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_SpacingRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_SpacingList = (function (_super) {
__extends(HostConfig_SpacingList, _super);
function HostConfig_SpacingList(defaults) {
_super.apply(this, arguments);
}
HostConfig_SpacingList.itemType = UBT_CWModel.HostConfig_SpacingRec;
return HostConfig_SpacingList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_SpacingList = HostConfig_SpacingList;

});
define("UBT_CW.model$ThemeClassList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ThemeClassRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ThemeClassList = (function (_super) {
__extends(ThemeClassList, _super);
function ThemeClassList(defaults) {
_super.apply(this, arguments);
}
ThemeClassList.itemType = UBT_CWModel.ThemeClassRec;
return ThemeClassList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ThemeClassList = ThemeClassList;

});
define("UBT_CW.model$HostConfig_FontWeightsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$HostConfig_FontWeightsRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var HostConfig_FontWeightsList = (function (_super) {
__extends(HostConfig_FontWeightsList, _super);
function HostConfig_FontWeightsList(defaults) {
_super.apply(this, arguments);
}
HostConfig_FontWeightsList.itemType = UBT_CWModel.HostConfig_FontWeightsRec;
return HostConfig_FontWeightsList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.HostConfig_FontWeightsList = HostConfig_FontWeightsList;

});
define("UBT_CW.model$SliderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SliderRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SliderRecordList = (function (_super) {
__extends(SliderRecordList, _super);
function SliderRecordList(defaults) {
_super.apply(this, arguments);
}
SliderRecordList.itemType = UBT_CWModel.SliderRecord;
return SliderRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.SliderRecordList = SliderRecordList;

});
define("UBT_CW.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBT_CW.model", "ServiceCenter.model$UserRec", "UBT_CW.referencesHealth", "UBT_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBT_CWModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.UserList = UserList;

});
define("UBT_CW.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$SpeedRecord"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = UBT_CWModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.SpeedRecordList = SpeedRecordList;

});
define("UBT_CW.model$ListNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_CW.model", "UBT_CW.model$ListNavigationRec"], function (exports, OutSystems, UBT_CWModel) {
var OS = OutSystems.Internal;
var ListNavigationList = (function (_super) {
__extends(ListNavigationList, _super);
function ListNavigationList(defaults) {
_super.apply(this, arguments);
}
ListNavigationList.itemType = UBT_CWModel.ListNavigationRec;
return ListNavigationList;
})(OS.DataTypes.GenericRecordList);
UBT_CWModel.ListNavigationList = ListNavigationList;

});
define("UBT_CW.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBT_CWModel = exports;
Object.defineProperty(UBT_CWModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["3a5f5418-1790-4025-8c00-e38cafdcb0dc"];
}
});

UBT_CWModel.staticEntities = {};
UBT_CWModel.staticEntities.adaptiveCardsConfig = {};
var getAdaptiveCardsConfigRecord = function (record) {
return UBT_CWModel.module.staticEntities["30781c32-b9ad-4df5-abe1-e5050da495cd"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.adaptiveCardsConfig, "events", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getAdaptiveCardsConfigRecord("06fcfdba-69fb-4897-98a2-840606f478a8"));
}
});

UBT_CWModel.staticEntities.applicationMenu = {};
var getApplicationMenuRecord = function (record) {
return UBT_CWModel.module.staticEntities["89ddd799-5df3-4a62-9262-556a92d6198d"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "directory", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("07225fcb-d826-4fe3-af5b-9ebcbecc6f6e"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "elGusto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("218f5926-1344-4d37-972f-fc2317b5a06c"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "campusandCoGiftPortal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("27351674-e42e-4461-a632-7726808995cf"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "trove", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("27c855c2-46f5-4f01-bc36-c8b66ba27a7c"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "communityTradeLink", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("34888e7c-b7a3-4aa1-a102-1859b06c3a0c"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "hR100", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("35244546-d2d8-41cd-9d1d-4817a4531b8d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "connect", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("3d5da984-b2dc-4517-80c5-33c51627c59d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "photoBook", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("45bf864e-a70b-41e8-bf8b-9169c46bfa1a"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "orbit", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("4a739dab-16fd-4cfa-bda3-de81ce2866f0"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "profile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("5e55faac-c4ff-4532-9f4f-4c428ff3bc26"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "audioBible", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("641d9f58-6455-45ed-93f1-1625a85ba12f"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "newsFeed", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("8619db27-f9dc-4044-ad8e-0f1fee8af8e8"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "notifications", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("86c97b74-1399-41bf-acf4-39d0aa62739d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "helpAndSupport", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("870ca368-4e09-4aab-af5b-3bc2766d1ba0"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "assemble", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("b216f957-eaf2-446b-bfbf-812e473a4ae6"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "bookmarks", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("b9855be6-b3e6-4e7c-b943-5f04f0c922e7"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "lDM", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("d55c929d-494a-47f6-9caf-8a278feb780f"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationMenu, "mediaHub", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationMenuRecord("d5907c0b-d9fc-46fb-8a46-4772bbaf5c44"));
}
});

UBT_CWModel.staticEntities.themeClass = {};
var getThemeClassRecord = function (record) {
return UBT_CWModel.module.staticEntities["e8f612ed-bcbc-4d47-b3e4-6a95afea2088"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.themeClass, "orbit", {
get: function () {
return getThemeClassRecord("6209f4b5-10cb-4e4a-82d1-7ffef92b578f");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.themeClass, "mediaHub", {
get: function () {
return getThemeClassRecord("77d03076-c3cc-43ea-a6f4-0ed397bd4794");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.themeClass, "connect", {
get: function () {
return getThemeClassRecord("9d807e12-2726-42b8-b084-be282df22840");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.themeClass, "subscriptionsAndPayments", {
get: function () {
return getThemeClassRecord("fbc06091-ac55-4634-9153-ab022117d9a2");
}
});

UBT_CWModel.staticEntities.applicationSubMenu = {};
var getApplicationSubMenuRecord = function (record) {
return UBT_CWModel.module.staticEntities["f204f743-57f2-4fbf-9e14-9e53bc2fa774"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "gift", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("14018f03-4c49-4b19-9664-8cc4ef8395a1"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "orbitAdmin", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("1a65de29-9bee-4540-ba6b-61b2408d4aaa"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "browsePhotobook", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("2c32ed57-c4d5-4eda-84c2-ebdb643ce230"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myBookmarks", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("5a84b809-fa5f-4bf2-b890-d1e4dabc36f3"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "directorySearch", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("5ad7bb58-c042-474a-84ec-9ac3e1aeb2a9"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "whatsNew", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("674ae8b0-d463-446d-9eb7-c08e548562e4"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myProfile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("674eadbd-f406-4db2-a9e8-be916eecc7ff"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myCalendar", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("7346d6c5-20fa-4582-8bbf-d97775e71ed1"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "subscriptionsAndPayments", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("83a8aad5-4574-426b-97e7-cb27c138b70c"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "assemble", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("971df2d4-56d0-4b50-bd9d-02d46617b42c"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "mYLDMs", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("af309f1d-4e47-4108-83ff-c6dc5d22812b"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myNewsFeed", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("b179bc97-d319-4bdd-b959-518f5f3cd534"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "helpAndSupport", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("b5078ff8-f722-4947-95a1-33bb4f24406d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myDirectory", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("b82b843b-63bb-4a89-93a1-3a5af2d58fff"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myCalendar_Orbit", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("c7d65c30-5b63-4d84-928a-2ae189b46b33"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myCalendar_LDM", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("d333ec94-17cd-462a-a050-5c09ce381d5f"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "wallet", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("e22aa0e0-9575-4295-8201-e1a9444c652a"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "myNotifications", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("e8a122f3-2bf1-4504-84a4-aee4aebf43cf"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "updateFeed", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("e9c46228-1f8c-40af-a979-19ed56547bf8"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.applicationSubMenu, "orbitEvents", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getApplicationSubMenuRecord("f0e7fbe8-8630-4632-88df-a58a8543f483"));
}
});

UBT_CWModel.staticEntities.bottomBarItem = {};
var getBottomBarItemRecord = function (record) {
return UBT_CWModel.module.staticEntities["fe9c5647-55a2-42ad-bbf1-215b003bf7cb"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "lDM", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("07dc1bf9-ffdb-4d9b-a192-7888a1bb8beb"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "communityTradelink", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("12b0ae7d-41b1-4a7e-9e32-1867a94a28f2"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "search", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("1fbaa0ef-e6e8-4812-801f-8398912af77e"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "notifications", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("3919ae62-12a2-4f0c-913d-10ac911461c6"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "subscriptions", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("40193981-c337-4083-94ea-5e0d2870d3f6"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "home", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("51983ee1-afc8-451d-a6cd-83559ee2646a"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "wallet", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("547d491c-04ec-46a7-8a94-e5d9db3d169d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "myEvents", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("58625a88-02d3-4ff3-b801-238a64d4cc8f"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "mediaHub", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("62e3e3d1-5aea-425b-91cc-291e52f66089"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "orbit", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("78ff57e3-0f1a-4520-a7ad-9685ff945c2d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "chat", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("7bdb3f7a-d812-400d-a933-dd438649f21d"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "assemble", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("7ca66c48-c1d4-4b2a-8ed7-c98fdd35e601"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "bookmarks", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("9434ea2f-530e-4e16-867e-ce1983d9a756"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "hR100", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("c1caaf71-7eea-462c-8d7e-eb57a83159ce"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "campusandCoGiftPortal", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("cb21b601-5f1e-47bf-b909-76a1f15e92d0"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "elGusto", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("cf3b2405-dddd-454f-b57d-27ec339e68a2"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "myProfile", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("dbb14749-37bb-46cd-8619-27597cc43712"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "rateExperience", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("e0fc3000-7df1-4719-8944-214325f27d9e"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "myCalendar", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("e3fdd52b-7c1a-4ad7-9288-fea88b614e24"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "newsFeed", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("f70b0126-f64f-4238-b759-6bafb127edc6"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "d4B", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("f960f535-1090-42f1-af16-d876e4fcbc03"));
}
});

Object.defineProperty(UBT_CWModel.staticEntities.bottomBarItem, "updates", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getBottomBarItemRecord("fb32074a-e15c-424b-8bc4-f81bb9a27253"));
}
});

UBT_CWModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

UBT_CWModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

UBT_CWModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

UBT_CWModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

UBT_CWModel.staticEntities.eventDescription = {};
var getEventDescriptionRecord = function (record) {
return OS.ApplicationInfo.getModules()["c8cc57fd-5df6-43cd-bbc2-3fd3d3eed17d"].staticEntities["b1baebc2-a64b-4f3a-a318-838a8d4d74cd"][record];
};
Object.defineProperty(UBT_CWModel.staticEntities.eventDescription, "alwaysShow", {
get: function () {
return getEventDescriptionRecord("2775272f-473d-4ed7-af24-8d85fff9c9a5");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.eventDescription, "neverShow", {
get: function () {
return getEventDescriptionRecord("7acd1fff-d8d0-415b-8754-c63cc1c3be3c");
}
});

Object.defineProperty(UBT_CWModel.staticEntities.eventDescription, "showWhenAvailable", {
get: function () {
return getEventDescriptionRecord("b06a74b1-6ebc-43d1-b1ae-0e9037d14468");
}
});

});
