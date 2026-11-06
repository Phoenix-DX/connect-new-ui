define("TempC11382.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SpaceRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SpaceRecord = (function (_super) {
__extends(SpaceRecord, _super);
function SpaceRecord(defaults) {
_super.apply(this, arguments);
}
SpaceRecord.attributesToDeclare = function () {
return [
this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SpaceRec());
}, true, OutSystemsUIModel.SpaceRec)
].concat(_super.attributesToDeclare.call(this));
};
SpaceRecord.fromStructure = function (str) {
return new SpaceRecord(new SpaceRecord.RecordClass({
spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpaceRecord._isAnonymousRecord = true;
SpaceRecord.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
SpaceRecord.init();
return SpaceRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.SpaceRecord = SpaceRecord;

});
define("TempC11382.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SpaceRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = TempC11382Model.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SpaceRecordList = SpaceRecordList;

});
define("TempC11382.model$BooleanTypesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$BooleanTypesRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var BooleanTypesList = (function (_super) {
__extends(BooleanTypesList, _super);
function BooleanTypesList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesList.itemType = OutSystemsUIModel.BooleanTypesRec;
return BooleanTypesList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.BooleanTypesList = BooleanTypesList;

});
define("TempC11382.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$OrientationRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUIModel.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.OrientationList = OrientationList;

});
define("TempC11382.model$CarouselDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselDirectionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselDirectionRecord = (function (_super) {
__extends(CarouselDirectionRecord, _super);
function CarouselDirectionRecord(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecord.attributesToDeclare = function () {
return [
this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselDirectionRec());
}, true, OutSystemsUIModel.CarouselDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselDirectionRecord.fromStructure = function (str) {
return new CarouselDirectionRecord(new CarouselDirectionRecord.RecordClass({
carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselDirectionRecord._isAnonymousRecord = true;
CarouselDirectionRecord.UniqueId = "fb5d22b1-003c-ff23-4a58-8ab54b5367f0";
CarouselDirectionRecord.init();
return CarouselDirectionRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.CarouselDirectionRecord = CarouselDirectionRecord;

});
define("TempC11382.model$CarouselDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$CarouselDirectionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselDirectionRecordList = (function (_super) {
__extends(CarouselDirectionRecordList, _super);
function CarouselDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecordList.itemType = TempC11382Model.CarouselDirectionRecord;
return CarouselDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselDirectionRecordList = CarouselDirectionRecordList;

});
define("TempC11382.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DirectionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DirectionRecord = (function (_super) {
__extends(DirectionRecord, _super);
function DirectionRecord(defaults) {
_super.apply(this, arguments);
}
DirectionRecord.attributesToDeclare = function () {
return [
this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DirectionRec());
}, true, OutSystemsUIModel.DirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectionRecord.fromStructure = function (str) {
return new DirectionRecord(new DirectionRecord.RecordClass({
directionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectionRecord._isAnonymousRecord = true;
DirectionRecord.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
DirectionRecord.init();
return DirectionRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DirectionRecord = DirectionRecord;

});
define("TempC11382.model$DatePickerWeekDayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerWeekDayRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecord = (function (_super) {
__extends(DatePickerWeekDayRecord, _super);
function DatePickerWeekDayRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerWeekDayRec());
}, true, OutSystemsUIModel.DatePickerWeekDayRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerWeekDayRecord.fromStructure = function (str) {
return new DatePickerWeekDayRecord(new DatePickerWeekDayRecord.RecordClass({
datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerWeekDayRecord._isAnonymousRecord = true;
DatePickerWeekDayRecord.UniqueId = "210f541f-43ec-6384-ba59-bfd8fe4b8837";
DatePickerWeekDayRecord.init();
return DatePickerWeekDayRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DatePickerWeekDayRecord = DatePickerWeekDayRecord;

});
define("TempC11382.model$DatePickerWeekDayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DatePickerWeekDayRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecordList = (function (_super) {
__extends(DatePickerWeekDayRecordList, _super);
function DatePickerWeekDayRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecordList.itemType = TempC11382Model.DatePickerWeekDayRecord;
return DatePickerWeekDayRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerWeekDayRecordList = DatePickerWeekDayRecordList;

});
define("TempC11382.model$ErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorRec = (function (_super) {
__extends(ErrorRec, _super);
function ErrorRec(defaults) {
_super.apply(this, arguments);
}
ErrorRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRec.fromStructure = function (str) {
return new ErrorRec(new ErrorRec.RecordClass({
codeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRec.init();
return ErrorRec;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ErrorRec = ErrorRec;

});
define("TempC11382.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ErrorRec"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new TempC11382Model.ErrorRec());
}, true, TempC11382Model.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord._isAnonymousRecord = true;
ErrorRecord.UniqueId = "3715c5e6-a4fc-b83c-49a1-380684a63b62";
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ErrorRecord = ErrorRecord;

});
define("TempC11382.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ErrorRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = TempC11382Model.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ErrorRecordList = ErrorRecordList;

});
define("TempC11382.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ErrorRec"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = TempC11382Model.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ErrorList = ErrorList;

});
define("TempC11382.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ShapeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ShapeRecord = (function (_super) {
__extends(ShapeRecord, _super);
function ShapeRecord(defaults) {
_super.apply(this, arguments);
}
ShapeRecord.attributesToDeclare = function () {
return [
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ShapeRec());
}, true, OutSystemsUIModel.ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
ShapeRecord.fromStructure = function (str) {
return new ShapeRecord(new ShapeRecord.RecordClass({
shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ShapeRecord._isAnonymousRecord = true;
ShapeRecord.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
ShapeRecord.init();
return ShapeRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ShapeRecord = ShapeRecord;

});
define("TempC11382.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$BulkActionsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUIModel.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.BulkActionsList = BulkActionsList;

});
define("TempC11382.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$StepsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var StepsRecord = (function (_super) {
__extends(StepsRecord, _super);
function StepsRecord(defaults) {
_super.apply(this, arguments);
}
StepsRecord.attributesToDeclare = function () {
return [
this.attr("Steps", "stepsAttr", "Steps", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StepsRec());
}, true, OutSystemsUIModel.StepsRec)
].concat(_super.attributesToDeclare.call(this));
};
StepsRecord.fromStructure = function (str) {
return new StepsRecord(new StepsRecord.RecordClass({
stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StepsRecord._isAnonymousRecord = true;
StepsRecord.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
StepsRecord.init();
return StepsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.StepsRecord = StepsRecord;

});
define("TempC11382.model$NoUiSliderConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$NoUiSliderConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecord = (function (_super) {
__extends(NoUiSliderConfigsRecord, _super);
function NoUiSliderConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NoUiSliderConfigs", "noUiSliderConfigsAttr", "NoUiSliderConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NoUiSliderConfigsRec());
}, true, OutSystemsUIModel.NoUiSliderConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NoUiSliderConfigsRecord.fromStructure = function (str) {
return new NoUiSliderConfigsRecord(new NoUiSliderConfigsRecord.RecordClass({
noUiSliderConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoUiSliderConfigsRecord._isAnonymousRecord = true;
NoUiSliderConfigsRecord.UniqueId = "1310596a-4ac4-ae2b-0319-b38dd9472639";
NoUiSliderConfigsRecord.init();
return NoUiSliderConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.NoUiSliderConfigsRecord = NoUiSliderConfigsRecord;

});
define("TempC11382.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AnimationTypeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
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
TempC11382Model.AnimationTypeRecord = AnimationTypeRecord;

});
define("TempC11382.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$AnimationTypeRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = TempC11382Model.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("TempC11382.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SpaceRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUIModel.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SpaceList = SpaceList;

});
define("TempC11382.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DeviceResponsiveRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecord = (function (_super) {
__extends(DeviceResponsiveRecord, _super);
function DeviceResponsiveRecord(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecord.attributesToDeclare = function () {
return [
this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceResponsiveRec());
}, true, OutSystemsUIModel.DeviceResponsiveRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceResponsiveRecord.fromStructure = function (str) {
return new DeviceResponsiveRecord(new DeviceResponsiveRecord.RecordClass({
deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceResponsiveRecord._isAnonymousRecord = true;
DeviceResponsiveRecord.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
DeviceResponsiveRecord.init();
return DeviceResponsiveRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("TempC11382.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$OrientationRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var OrientationRecord = (function (_super) {
__extends(OrientationRecord, _super);
function OrientationRecord(defaults) {
_super.apply(this, arguments);
}
OrientationRecord.attributesToDeclare = function () {
return [
this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.OrientationRec());
}, true, OutSystemsUIModel.OrientationRec)
].concat(_super.attributesToDeclare.call(this));
};
OrientationRecord.fromStructure = function (str) {
return new OrientationRecord(new OrientationRecord.RecordClass({
orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrientationRecord._isAnonymousRecord = true;
OrientationRecord.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
OrientationRecord.init();
return OrientationRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.OrientationRecord = OrientationRecord;

});
define("TempC11382.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$OrientationRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = TempC11382Model.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.OrientationRecordList = OrientationRecordList;

});
define("TempC11382.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$TriggerRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUIModel.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.TriggerList = TriggerList;

});
define("TempC11382.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AutoplayRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AutoplayRecord = (function (_super) {
__extends(AutoplayRecord, _super);
function AutoplayRecord(defaults) {
_super.apply(this, arguments);
}
AutoplayRecord.attributesToDeclare = function () {
return [
this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AutoplayRec());
}, true, OutSystemsUIModel.AutoplayRec)
].concat(_super.attributesToDeclare.call(this));
};
AutoplayRecord.fromStructure = function (str) {
return new AutoplayRecord(new AutoplayRecord.RecordClass({
autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AutoplayRecord._isAnonymousRecord = true;
AutoplayRecord.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
AutoplayRecord.init();
return AutoplayRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.AutoplayRecord = AutoplayRecord;

});
define("TempC11382.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$AutoplayRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = TempC11382Model.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AutoplayRecordList = AutoplayRecordList;

});
define("TempC11382.model$BooleanTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$BooleanTypesRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var BooleanTypesRecord = (function (_super) {
__extends(BooleanTypesRecord, _super);
function BooleanTypesRecord(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecord.attributesToDeclare = function () {
return [
this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BooleanTypesRec());
}, true, OutSystemsUIModel.BooleanTypesRec)
].concat(_super.attributesToDeclare.call(this));
};
BooleanTypesRecord.fromStructure = function (str) {
return new BooleanTypesRecord(new BooleanTypesRecord.RecordClass({
booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BooleanTypesRecord._isAnonymousRecord = true;
BooleanTypesRecord.UniqueId = "1ea63146-d7f1-d969-afc2-06832e751192";
BooleanTypesRecord.init();
return BooleanTypesRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.BooleanTypesRecord = BooleanTypesRecord;

});
define("TempC11382.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AccordionIconPositionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUIModel.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AccordionIconPositionList = AccordionIconPositionList;

});
define("TempC11382.model$NoUiSliderConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$NoUiSliderConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsList = (function (_super) {
__extends(NoUiSliderConfigsList, _super);
function NoUiSliderConfigsList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsList.itemType = OutSystemsUIModel.NoUiSliderConfigsRec;
return NoUiSliderConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.NoUiSliderConfigsList = NoUiSliderConfigsList;

});
define("TempC11382.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$BulkActionsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var BulkActionsRecord = (function (_super) {
__extends(BulkActionsRecord, _super);
function BulkActionsRecord(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecord.attributesToDeclare = function () {
return [
this.attr("BulkActions", "bulkActionsAttr", "BulkActions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BulkActionsRec());
}, true, OutSystemsUIModel.BulkActionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkActionsRecord.fromStructure = function (str) {
return new BulkActionsRecord(new BulkActionsRecord.RecordClass({
bulkActionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkActionsRecord._isAnonymousRecord = true;
BulkActionsRecord.UniqueId = "dedbf5dd-d64a-7345-04bf-3fd84b1363ec";
BulkActionsRecord.init();
return BulkActionsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.BulkActionsRecord = BulkActionsRecord;

});
define("TempC11382.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$BulkActionsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = TempC11382Model.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.BulkActionsRecordList = BulkActionsRecordList;

});
define("TempC11382.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$BreakColumnsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var BreakColumnsRecord = (function (_super) {
__extends(BreakColumnsRecord, _super);
function BreakColumnsRecord(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecord.attributesToDeclare = function () {
return [
this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.BreakColumnsRec());
}, true, OutSystemsUIModel.BreakColumnsRec)
].concat(_super.attributesToDeclare.call(this));
};
BreakColumnsRecord.fromStructure = function (str) {
return new BreakColumnsRecord(new BreakColumnsRecord.RecordClass({
breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BreakColumnsRecord._isAnonymousRecord = true;
BreakColumnsRecord.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
BreakColumnsRecord.init();
return BreakColumnsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.BreakColumnsRecord = BreakColumnsRecord;

});
define("TempC11382.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SizeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SizeRecord = (function (_super) {
__extends(SizeRecord, _super);
function SizeRecord(defaults) {
_super.apply(this, arguments);
}
SizeRecord.attributesToDeclare = function () {
return [
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SizeRec());
}, true, OutSystemsUIModel.SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeRecord.fromStructure = function (str) {
return new SizeRecord(new SizeRecord.RecordClass({
sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeRecord._isAnonymousRecord = true;
SizeRecord.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
SizeRecord.init();
return SizeRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.SizeRecord = SizeRecord;

});
define("TempC11382.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SizeRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = TempC11382Model.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SizeRecordList = SizeRecordList;

});
define("TempC11382.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ErrorMessageRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorMessageRecord = (function (_super) {
__extends(ErrorMessageRecord, _super);
function ErrorMessageRecord(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecord.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ErrorMessageRec());
}, true, OutSystemsUIModel.ErrorMessageRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorMessageRecord.fromStructure = function (str) {
return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorMessageRecord._isAnonymousRecord = true;
ErrorMessageRecord.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
ErrorMessageRecord.init();
return ErrorMessageRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ErrorMessageRecord = ErrorMessageRecord;

});
define("TempC11382.model$DropdownOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecord = (function (_super) {
__extends(DropdownOptionalConfigsRecord, _super);
function DropdownOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionalConfigsRec());
}, true, OutSystemsUIModel.DropdownOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownOptionalConfigsRecord(new DropdownOptionalConfigsRecord.RecordClass({
dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionalConfigsRecord._isAnonymousRecord = true;
DropdownOptionalConfigsRecord.UniqueId = "2ac88c51-f2d9-ed90-8454-e6a06ffe188e";
DropdownOptionalConfigsRecord.init();
return DropdownOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DropdownOptionalConfigsRecord = DropdownOptionalConfigsRecord;

});
define("TempC11382.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MessageStatusRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MessageStatusRecord = (function (_super) {
__extends(MessageStatusRecord, _super);
function MessageStatusRecord(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecord.attributesToDeclare = function () {
return [
this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MessageStatusRec());
}, true, OutSystemsUIModel.MessageStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageStatusRecord.fromStructure = function (str) {
return new MessageStatusRecord(new MessageStatusRecord.RecordClass({
messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageStatusRecord._isAnonymousRecord = true;
MessageStatusRecord.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
MessageStatusRecord.init();
return MessageStatusRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.MessageStatusRecord = MessageStatusRecord;

});
define("TempC11382.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$MessageStatusRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = TempC11382Model.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MessageStatusRecordList = MessageStatusRecordList;

});
define("TempC11382.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MenuActionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MenuActionRec());
}, true, OutSystemsUIModel.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord._isAnonymousRecord = true;
MenuActionRecord.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.MenuActionRecord = MenuActionRecord;

});
define("TempC11382.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$MenuActionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = TempC11382Model.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MenuActionRecordList = MenuActionRecordList;

});
define("TempC11382.model$DatePickerRange_OptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerRange_OptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerRange_OptionalConfigsRecord = (function (_super) {
__extends(DatePickerRange_OptionalConfigsRecord, _super);
function DatePickerRange_OptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_OptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerRange_OptionalConfigs", "datePickerRange_OptionalConfigsAttr", "DatePickerRange_OptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerRange_OptionalConfigsRec());
}, true, OutSystemsUIModel.DatePickerRange_OptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerRange_OptionalConfigsRecord.fromStructure = function (str) {
return new DatePickerRange_OptionalConfigsRecord(new DatePickerRange_OptionalConfigsRecord.RecordClass({
datePickerRange_OptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerRange_OptionalConfigsRecord._isAnonymousRecord = true;
DatePickerRange_OptionalConfigsRecord.UniqueId = "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e";
DatePickerRange_OptionalConfigsRecord.init();
return DatePickerRange_OptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DatePickerRange_OptionalConfigsRecord = DatePickerRange_OptionalConfigsRecord;

});
define("TempC11382.model$DropdownTagsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecord = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecord, _super);
function DropdownTagsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownTagsOptionalConfigsRec());
}, true, OutSystemsUIModel.DropdownTagsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownTagsOptionalConfigsRecord.fromStructure = function (str) {
return new DropdownTagsOptionalConfigsRecord(new DropdownTagsOptionalConfigsRecord.RecordClass({
dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownTagsOptionalConfigsRecord._isAnonymousRecord = true;
DropdownTagsOptionalConfigsRecord.UniqueId = "4d01ba74-7615-bc6d-c01c-586f0b43450a";
DropdownTagsOptionalConfigsRecord.init();
return DropdownTagsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DropdownTagsOptionalConfigsRecord = DropdownTagsOptionalConfigsRecord;

});
define("TempC11382.model$DropdownTagsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DropdownTagsOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecordList = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecordList, _super);
function DropdownTagsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecordList.itemType = TempC11382Model.DropdownTagsOptionalConfigsRecord;
return DropdownTagsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownTagsOptionalConfigsRecordList = DropdownTagsOptionalConfigsRecordList;

});
define("TempC11382.model$DatePicker_OptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePicker_OptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePicker_OptionalConfigsRecord = (function (_super) {
__extends(DatePicker_OptionalConfigsRecord, _super);
function DatePicker_OptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
DatePicker_OptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("DatePicker_OptionalConfigs", "datePicker_OptionalConfigsAttr", "DatePicker_OptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePicker_OptionalConfigsRec());
}, true, OutSystemsUIModel.DatePicker_OptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePicker_OptionalConfigsRecord.fromStructure = function (str) {
return new DatePicker_OptionalConfigsRecord(new DatePicker_OptionalConfigsRecord.RecordClass({
datePicker_OptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePicker_OptionalConfigsRecord._isAnonymousRecord = true;
DatePicker_OptionalConfigsRecord.UniqueId = "327e36bc-408e-dd04-6ca4-0df8a4e734bb";
DatePicker_OptionalConfigsRecord.init();
return DatePicker_OptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DatePicker_OptionalConfigsRecord = DatePicker_OptionalConfigsRecord;

});
define("TempC11382.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$StackedCardsPositionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUIModel.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.StackedCardsPositionList = StackedCardsPositionList;

});
define("TempC11382.model$SplideProviderClassesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SplideProviderClassesRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesList = (function (_super) {
__extends(SplideProviderClassesList, _super);
function SplideProviderClassesList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesList.itemType = OutSystemsUIModel.SplideProviderClassesRec;
return SplideProviderClassesList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SplideProviderClassesList = SplideProviderClassesList;

});
define("TempC11382.model$ProgressBarOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecord = (function (_super) {
__extends(ProgressBarOptionalConfigsRecord, _super);
function ProgressBarOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressBarOptionalConfigsRec());
}, true, OutSystemsUIModel.ProgressBarOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressBarOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressBarOptionalConfigsRecord(new ProgressBarOptionalConfigsRecord.RecordClass({
progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressBarOptionalConfigsRecord._isAnonymousRecord = true;
ProgressBarOptionalConfigsRecord.UniqueId = "3554b1e2-806a-5b82-7c45-7cdecc492d4a";
ProgressBarOptionalConfigsRecord.init();
return ProgressBarOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ProgressBarOptionalConfigsRecord = ProgressBarOptionalConfigsRecord;

});
define("TempC11382.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ColumnBreakRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUIModel.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ColumnBreakList = ColumnBreakList;

});
define("TempC11382.model$CarouselNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselNavigationRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselNavigationRecord = (function (_super) {
__extends(CarouselNavigationRecord, _super);
function CarouselNavigationRecord(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecord.attributesToDeclare = function () {
return [
this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselNavigationRec());
}, true, OutSystemsUIModel.CarouselNavigationRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselNavigationRecord.fromStructure = function (str) {
return new CarouselNavigationRecord(new CarouselNavigationRecord.RecordClass({
carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselNavigationRecord._isAnonymousRecord = true;
CarouselNavigationRecord.UniqueId = "373fec8a-2329-a8b1-ecd5-5cf717893131";
CarouselNavigationRecord.init();
return CarouselNavigationRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.CarouselNavigationRecord = CarouselNavigationRecord;

});
define("TempC11382.model$ProgressBarOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ProgressBarOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsList = (function (_super) {
__extends(ProgressBarOptionalConfigsList, _super);
function ProgressBarOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsList.itemType = OutSystemsUIModel.ProgressBarOptionalConfigsRec;
return ProgressBarOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ProgressBarOptionalConfigsList = ProgressBarOptionalConfigsList;

});
define("TempC11382.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ScrollbarStyleRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecord = (function (_super) {
__extends(ScrollbarStyleRecord, _super);
function ScrollbarStyleRecord(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecord.attributesToDeclare = function () {
return [
this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ScrollbarStyleRec());
}, true, OutSystemsUIModel.ScrollbarStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ScrollbarStyleRecord.fromStructure = function (str) {
return new ScrollbarStyleRecord(new ScrollbarStyleRecord.RecordClass({
scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ScrollbarStyleRecord._isAnonymousRecord = true;
ScrollbarStyleRecord.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
ScrollbarStyleRecord.init();
return ScrollbarStyleRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("TempC11382.model$CarouselOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecord = (function (_super) {
__extends(CarouselOptionalConfigsRecord, _super);
function CarouselOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselOptionalConfigsRec());
}, true, OutSystemsUIModel.CarouselOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselOptionalConfigsRecord.fromStructure = function (str) {
return new CarouselOptionalConfigsRecord(new CarouselOptionalConfigsRecord.RecordClass({
carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselOptionalConfigsRecord._isAnonymousRecord = true;
CarouselOptionalConfigsRecord.UniqueId = "4028c834-35ff-8f3f-a19c-27e5a3252dd5";
CarouselOptionalConfigsRecord.init();
return CarouselOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.CarouselOptionalConfigsRecord = CarouselOptionalConfigsRecord;

});
define("TempC11382.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AccordionIconTypeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecord = (function (_super) {
__extends(AccordionIconTypeRecord, _super);
function AccordionIconTypeRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconTypeRec());
}, true, OutSystemsUIModel.AccordionIconTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconTypeRecord.fromStructure = function (str) {
return new AccordionIconTypeRecord(new AccordionIconTypeRecord.RecordClass({
accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconTypeRecord._isAnonymousRecord = true;
AccordionIconTypeRecord.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
AccordionIconTypeRecord.init();
return AccordionIconTypeRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("TempC11382.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$AccordionIconTypeRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = TempC11382Model.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("TempC11382.model$DropdownOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DropdownOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecordList = (function (_super) {
__extends(DropdownOptionalConfigsRecordList, _super);
function DropdownOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecordList.itemType = TempC11382Model.DropdownOptionalConfigsRecord;
return DropdownOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownOptionalConfigsRecordList = DropdownOptionalConfigsRecordList;

});
define("TempC11382.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ErrorMessageRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUIModel.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ErrorMessageList = ErrorMessageList;

});
define("TempC11382.model$FlatpickrConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$FlatpickrConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecord = (function (_super) {
__extends(FlatpickrConfigsRecord, _super);
function FlatpickrConfigsRecord(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecord.attributesToDeclare = function () {
return [
this.attr("FlatpickrConfigs", "flatpickrConfigsAttr", "FlatpickrConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.FlatpickrConfigsRec());
}, true, OutSystemsUIModel.FlatpickrConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
FlatpickrConfigsRecord.fromStructure = function (str) {
return new FlatpickrConfigsRecord(new FlatpickrConfigsRecord.RecordClass({
flatpickrConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FlatpickrConfigsRecord._isAnonymousRecord = true;
FlatpickrConfigsRecord.UniqueId = "f3c2b7b3-f72a-bb11-5f72-c934f4368624";
FlatpickrConfigsRecord.init();
return FlatpickrConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.FlatpickrConfigsRecord = FlatpickrConfigsRecord;

});
define("TempC11382.model$FlatpickrConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$FlatpickrConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecordList = (function (_super) {
__extends(FlatpickrConfigsRecordList, _super);
function FlatpickrConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecordList.itemType = TempC11382Model.FlatpickrConfigsRecord;
return FlatpickrConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.FlatpickrConfigsRecordList = FlatpickrConfigsRecordList;

});
define("TempC11382.model$MonthYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MonthYearRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthYearRecord = (function (_super) {
__extends(MonthYearRecord, _super);
function MonthYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthYearRec());
}, true, OutSystemsUIModel.MonthYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthYearRecord.fromStructure = function (str) {
return new MonthYearRecord(new MonthYearRecord.RecordClass({
monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthYearRecord._isAnonymousRecord = true;
MonthYearRecord.UniqueId = "4835a3b0-a2d4-ab28-e154-f8a8831a00ef";
MonthYearRecord.init();
return MonthYearRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.MonthYearRecord = MonthYearRecord;

});
define("TempC11382.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MenuActionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUIModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MenuActionList = MenuActionList;

});
define("TempC11382.model$DatePickerTimeFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerTimeFormatRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatList = (function (_super) {
__extends(DatePickerTimeFormatList, _super);
function DatePickerTimeFormatList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatList.itemType = OutSystemsUIModel.DatePickerTimeFormatRec;
return DatePickerTimeFormatList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerTimeFormatList = DatePickerTimeFormatList;

});
define("TempC11382.model$DatePickerRange_OptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerRange_OptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerRange_OptionalConfigsList = (function (_super) {
__extends(DatePickerRange_OptionalConfigsList, _super);
function DatePickerRange_OptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_OptionalConfigsList.itemType = OutSystemsUIModel.DatePickerRange_OptionalConfigsRec;
return DatePickerRange_OptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerRange_OptionalConfigsList = DatePickerRange_OptionalConfigsList;

});
define("TempC11382.model$DatePickerWeekDayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerWeekDayRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerWeekDayList = (function (_super) {
__extends(DatePickerWeekDayList, _super);
function DatePickerWeekDayList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayList.itemType = OutSystemsUIModel.DatePickerWeekDayRec;
return DatePickerWeekDayList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerWeekDayList = DatePickerWeekDayList;

});
define("TempC11382.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$BreakColumnsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = TempC11382Model.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("TempC11382.model$RangeSliderOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecord = (function (_super) {
__extends(RangeSliderOptionalConfigsRecord, _super);
function RangeSliderOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RangeSliderOptionalConfigsRec());
}, true, OutSystemsUIModel.RangeSliderOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeSliderOptionalConfigsRecord.fromStructure = function (str) {
return new RangeSliderOptionalConfigsRecord(new RangeSliderOptionalConfigsRecord.RecordClass({
rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeSliderOptionalConfigsRecord._isAnonymousRecord = true;
RangeSliderOptionalConfigsRecord.UniqueId = "4fc16da6-9510-8ad1-b034-b7256ffa868d";
RangeSliderOptionalConfigsRecord.init();
return RangeSliderOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.RangeSliderOptionalConfigsRecord = RangeSliderOptionalConfigsRecord;

});
define("TempC11382.model$CarouselNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$CarouselNavigationRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselNavigationRecordList = (function (_super) {
__extends(CarouselNavigationRecordList, _super);
function CarouselNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecordList.itemType = TempC11382Model.CarouselNavigationRecord;
return CarouselNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselNavigationRecordList = CarouselNavigationRecordList;

});
define("TempC11382.model$NoUiSliderConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$NoUiSliderConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecordList = (function (_super) {
__extends(NoUiSliderConfigsRecordList, _super);
function NoUiSliderConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecordList.itemType = TempC11382Model.NoUiSliderConfigsRecord;
return NoUiSliderConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.NoUiSliderConfigsRecordList = NoUiSliderConfigsRecordList;

});
define("TempC11382.model$CarouselOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsList = (function (_super) {
__extends(CarouselOptionalConfigsList, _super);
function CarouselOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsList.itemType = OutSystemsUIModel.CarouselOptionalConfigsRec;
return CarouselOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselOptionalConfigsList = CarouselOptionalConfigsList;

});
define("TempC11382.model$DatePickerTimeFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerTimeFormatRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecord = (function (_super) {
__extends(DatePickerTimeFormatRecord, _super);
function DatePickerTimeFormatRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerTimeFormatRec());
}, true, OutSystemsUIModel.DatePickerTimeFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerTimeFormatRecord.fromStructure = function (str) {
return new DatePickerTimeFormatRecord(new DatePickerTimeFormatRecord.RecordClass({
datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerTimeFormatRecord._isAnonymousRecord = true;
DatePickerTimeFormatRecord.UniqueId = "51b1c159-4930-8af5-f9b2-dba7043d5ae6";
DatePickerTimeFormatRecord.init();
return DatePickerTimeFormatRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DatePickerTimeFormatRecord = DatePickerTimeFormatRecord;

});
define("TempC11382.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ShapeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUIModel.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ShapeList = ShapeList;

});
define("TempC11382.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownItemRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownItemRecord = (function (_super) {
__extends(DropdownItemRecord, _super);
function DropdownItemRecord(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecord.attributesToDeclare = function () {
return [
this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownItemRec());
}, true, OutSystemsUIModel.DropdownItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownItemRecord.fromStructure = function (str) {
return new DropdownItemRecord(new DropdownItemRecord.RecordClass({
dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownItemRecord._isAnonymousRecord = true;
DropdownItemRecord.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
DropdownItemRecord.init();
return DropdownItemRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DropdownItemRecord = DropdownItemRecord;

});
define("TempC11382.model$SplideProvideri18nRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SplideProvideri18nRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecord = (function (_super) {
__extends(SplideProvideri18nRecord, _super);
function SplideProvideri18nRecord(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecord.attributesToDeclare = function () {
return [
this.attr("SplideProvideri18n", "splideProvideri18nAttr", "SplideProvideri18n", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideProvideri18nRec());
}, true, OutSystemsUIModel.SplideProvideri18nRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProvideri18nRecord.fromStructure = function (str) {
return new SplideProvideri18nRecord(new SplideProvideri18nRecord.RecordClass({
splideProvideri18nAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProvideri18nRecord._isAnonymousRecord = true;
SplideProvideri18nRecord.UniqueId = "8f521ae5-ef17-d239-3da4-331384c022c2";
SplideProvideri18nRecord.init();
return SplideProvideri18nRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.SplideProvideri18nRecord = SplideProvideri18nRecord;

});
define("TempC11382.model$SplideProvideri18nRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SplideProvideri18nRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecordList = (function (_super) {
__extends(SplideProvideri18nRecordList, _super);
function SplideProvideri18nRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecordList.itemType = TempC11382Model.SplideProvideri18nRecord;
return SplideProvideri18nRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SplideProvideri18nRecordList = SplideProvideri18nRecordList;

});
define("TempC11382.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$PositionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
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
TempC11382Model.PositionRecord = PositionRecord;

});
define("TempC11382.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$PositionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = TempC11382Model.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.PositionRecordList = PositionRecordList;

});
define("TempC11382.model$TimePicker_OptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$TimePicker_OptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var TimePicker_OptionalConfigsList = (function (_super) {
__extends(TimePicker_OptionalConfigsList, _super);
function TimePicker_OptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TimePicker_OptionalConfigsList.itemType = OutSystemsUIModel.TimePicker_OptionalConfigsRec;
return TimePicker_OptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.TimePicker_OptionalConfigsList = TimePicker_OptionalConfigsList;

});
define("TempC11382.model$ProgressCircleOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecord = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecord, _super);
function ProgressCircleOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ProgressCircleOptionalConfigsRec());
}, true, OutSystemsUIModel.ProgressCircleOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
ProgressCircleOptionalConfigsRecord.fromStructure = function (str) {
return new ProgressCircleOptionalConfigsRecord(new ProgressCircleOptionalConfigsRecord.RecordClass({
progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProgressCircleOptionalConfigsRecord._isAnonymousRecord = true;
ProgressCircleOptionalConfigsRecord.UniqueId = "646e6c02-297b-69c2-ac89-36bd87cff545";
ProgressCircleOptionalConfigsRecord.init();
return ProgressCircleOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ProgressCircleOptionalConfigsRecord = ProgressCircleOptionalConfigsRecord;

});
define("TempC11382.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$TriggerRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var TriggerRecord = (function (_super) {
__extends(TriggerRecord, _super);
function TriggerRecord(defaults) {
_super.apply(this, arguments);
}
TriggerRecord.attributesToDeclare = function () {
return [
this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TriggerRec());
}, true, OutSystemsUIModel.TriggerRec)
].concat(_super.attributesToDeclare.call(this));
};
TriggerRecord.fromStructure = function (str) {
return new TriggerRecord(new TriggerRecord.RecordClass({
triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TriggerRecord._isAnonymousRecord = true;
TriggerRecord.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
TriggerRecord.init();
return TriggerRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.TriggerRecord = TriggerRecord;

});
define("TempC11382.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$TriggerRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = TempC11382Model.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.TriggerRecordList = TriggerRecordList;

});
define("TempC11382.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AccordionIconTypeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUIModel.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AccordionIconTypeList = AccordionIconTypeList;

});
define("TempC11382.model$DatePickerRange_OptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DatePickerRange_OptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerRange_OptionalConfigsRecordList = (function (_super) {
__extends(DatePickerRange_OptionalConfigsRecordList, _super);
function DatePickerRange_OptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRange_OptionalConfigsRecordList.itemType = TempC11382Model.DatePickerRange_OptionalConfigsRecord;
return DatePickerRange_OptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerRange_OptionalConfigsRecordList = DatePickerRange_OptionalConfigsRecordList;

});
define("TempC11382.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$BreakColumnsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUIModel.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.BreakColumnsList = BreakColumnsList;

});
define("TempC11382.model$DatePickerLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerLanguageRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecord = (function (_super) {
__extends(DatePickerLanguageRecord, _super);
function DatePickerLanguageRecord(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecord.attributesToDeclare = function () {
return [
this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DatePickerLanguageRec());
}, true, OutSystemsUIModel.DatePickerLanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
DatePickerLanguageRecord.fromStructure = function (str) {
return new DatePickerLanguageRecord(new DatePickerLanguageRecord.RecordClass({
datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DatePickerLanguageRecord._isAnonymousRecord = true;
DatePickerLanguageRecord.UniqueId = "673cc0a6-3dbc-3f58-36f7-732ba0712544";
DatePickerLanguageRecord.init();
return DatePickerLanguageRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DatePickerLanguageRecord = DatePickerLanguageRecord;

});
define("TempC11382.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ShapeRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = TempC11382Model.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ShapeRecordList = ShapeRecordList;

});
define("TempC11382.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DeviceConfigurationRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecord = (function (_super) {
__extends(DeviceConfigurationRecord, _super);
function DeviceConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DeviceConfigurationRec());
}, true, OutSystemsUIModel.DeviceConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceConfigurationRecord.fromStructure = function (str) {
return new DeviceConfigurationRecord(new DeviceConfigurationRecord.RecordClass({
deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceConfigurationRecord._isAnonymousRecord = true;
DeviceConfigurationRecord.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
DeviceConfigurationRecord.init();
return DeviceConfigurationRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("TempC11382.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DeviceConfigurationRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = TempC11382Model.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("TempC11382.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MessageStatusRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUIModel.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MessageStatusList = MessageStatusList;

});
define("TempC11382.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$StackedCardsPositionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecord = (function (_super) {
__extends(StackedCardsPositionRecord, _super);
function StackedCardsPositionRecord(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecord.attributesToDeclare = function () {
return [
this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.StackedCardsPositionRec());
}, true, OutSystemsUIModel.StackedCardsPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
StackedCardsPositionRecord.fromStructure = function (str) {
return new StackedCardsPositionRecord(new StackedCardsPositionRecord.RecordClass({
stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StackedCardsPositionRecord._isAnonymousRecord = true;
StackedCardsPositionRecord.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
StackedCardsPositionRecord.init();
return StackedCardsPositionRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("TempC11382.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$StackedCardsPositionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = TempC11382Model.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("TempC11382.model$MonthOrderYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MonthOrderYearRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthOrderYearRecord = (function (_super) {
__extends(MonthOrderYearRecord, _super);
function MonthOrderYearRecord(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecord.attributesToDeclare = function () {
return [
this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthOrderYearRec());
}, true, OutSystemsUIModel.MonthOrderYearRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthOrderYearRecord.fromStructure = function (str) {
return new MonthOrderYearRecord(new MonthOrderYearRecord.RecordClass({
monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthOrderYearRecord._isAnonymousRecord = true;
MonthOrderYearRecord.UniqueId = "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1";
MonthOrderYearRecord.init();
return MonthOrderYearRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.MonthOrderYearRecord = MonthOrderYearRecord;

});
define("TempC11382.model$MonthOrderYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$MonthOrderYearRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthOrderYearRecordList = (function (_super) {
__extends(MonthOrderYearRecordList, _super);
function MonthOrderYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecordList.itemType = TempC11382Model.MonthOrderYearRecord;
return MonthOrderYearRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MonthOrderYearRecordList = MonthOrderYearRecordList;

});
define("TempC11382.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DirectionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUIModel.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DirectionList = DirectionList;

});
define("TempC11382.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DeviceResponsiveRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = TempC11382Model.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("TempC11382.model$CarouselNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselNavigationRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselNavigationList = (function (_super) {
__extends(CarouselNavigationList, _super);
function CarouselNavigationList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationList.itemType = OutSystemsUIModel.CarouselNavigationRec;
return CarouselNavigationList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselNavigationList = CarouselNavigationList;

});
define("TempC11382.model$NotificationOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$NotificationOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecord = (function (_super) {
__extends(NotificationOptionalConfigsRecord, _super);
function NotificationOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.NotificationOptionalConfigsRec());
}, true, OutSystemsUIModel.NotificationOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationOptionalConfigsRecord.fromStructure = function (str) {
return new NotificationOptionalConfigsRecord(new NotificationOptionalConfigsRecord.RecordClass({
notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationOptionalConfigsRecord._isAnonymousRecord = true;
NotificationOptionalConfigsRecord.UniqueId = "e5ad8f04-c380-4744-1643-c6868992c277";
NotificationOptionalConfigsRecord.init();
return NotificationOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.NotificationOptionalConfigsRecord = NotificationOptionalConfigsRecord;

});
define("TempC11382.model$NotificationOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$NotificationOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecordList = (function (_super) {
__extends(NotificationOptionalConfigsRecordList, _super);
function NotificationOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecordList.itemType = TempC11382Model.NotificationOptionalConfigsRecord;
return NotificationOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.NotificationOptionalConfigsRecordList = NotificationOptionalConfigsRecordList;

});
define("TempC11382.model$DeviceInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "TempC11382.model", "ApplicationInsightsConnector.model$DeviceInfoRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$ApplicationInsightsConnector"], function (exports, OutSystems, ApplicationInsightsConnectorModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceInfoRecord = (function (_super) {
__extends(DeviceInfoRecord, _super);
function DeviceInfoRecord(defaults) {
_super.apply(this, arguments);
}
DeviceInfoRecord.attributesToDeclare = function () {
return [
this.attr("DeviceInfo", "deviceInfoAttr", "DeviceInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.DeviceInfoRec());
}, true, ApplicationInsightsConnectorModel.DeviceInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
DeviceInfoRecord.fromStructure = function (str) {
return new DeviceInfoRecord(new DeviceInfoRecord.RecordClass({
deviceInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DeviceInfoRecord._isAnonymousRecord = true;
DeviceInfoRecord.UniqueId = "7fbd0dbd-63e0-ca14-2334-b413aa9161bd";
DeviceInfoRecord.init();
return DeviceInfoRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DeviceInfoRecord = DeviceInfoRecord;

});
define("TempC11382.model$DatePicker_OptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePicker_OptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePicker_OptionalConfigsList = (function (_super) {
__extends(DatePicker_OptionalConfigsList, _super);
function DatePicker_OptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePicker_OptionalConfigsList.itemType = OutSystemsUIModel.DatePicker_OptionalConfigsRec;
return DatePicker_OptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePicker_OptionalConfigsList = DatePicker_OptionalConfigsList;

});
define("TempC11382.model$RangeSliderOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$RangeSliderOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecordList = (function (_super) {
__extends(RangeSliderOptionalConfigsRecordList, _super);
function RangeSliderOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecordList.itemType = TempC11382Model.RangeSliderOptionalConfigsRecord;
return RangeSliderOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.RangeSliderOptionalConfigsRecordList = RangeSliderOptionalConfigsRecordList;

});
define("TempC11382.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "TempC11382.model", "ServiceCenter.model$UserRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, TempC11382Model) {
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
TempC11382Model.UserRecord = UserRecord;

});
define("TempC11382.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$UserRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = TempC11382Model.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.UserRecordList = UserRecordList;

});
define("TempC11382.model$DropdownTagsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownTagsOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsList = (function (_super) {
__extends(DropdownTagsOptionalConfigsList, _super);
function DropdownTagsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsList.itemType = OutSystemsUIModel.DropdownTagsOptionalConfigsRec;
return DropdownTagsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownTagsOptionalConfigsList = DropdownTagsOptionalConfigsList;

});
define("TempC11382.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ColorRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
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
TempC11382Model.ColorRecord = ColorRecord;

});
define("TempC11382.model$DeviceInfoList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "TempC11382.model", "ApplicationInsightsConnector.model$DeviceInfoRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$ApplicationInsightsConnector"], function (exports, OutSystems, ApplicationInsightsConnectorModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceInfoList = (function (_super) {
__extends(DeviceInfoList, _super);
function DeviceInfoList(defaults) {
_super.apply(this, arguments);
}
DeviceInfoList.itemType = ApplicationInsightsConnectorModel.DeviceInfoRec;
return DeviceInfoList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DeviceInfoList = DeviceInfoList;

});
define("TempC11382.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SizeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUIModel.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SizeList = SizeList;

});
define("TempC11382.model$BooleanTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$BooleanTypesRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var BooleanTypesRecordList = (function (_super) {
__extends(BooleanTypesRecordList, _super);
function BooleanTypesRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecordList.itemType = TempC11382Model.BooleanTypesRecord;
return BooleanTypesRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.BooleanTypesRecordList = BooleanTypesRecordList;

});
define("TempC11382.model$MonthYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MonthYearRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthYearList = (function (_super) {
__extends(MonthYearList, _super);
function MonthYearList(defaults) {
_super.apply(this, arguments);
}
MonthYearList.itemType = OutSystemsUIModel.MonthYearRec;
return MonthYearList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MonthYearList = MonthYearList;

});
define("TempC11382.model$CarouselOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$CarouselOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecordList = (function (_super) {
__extends(CarouselOptionalConfigsRecordList, _super);
function CarouselOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecordList.itemType = TempC11382Model.CarouselOptionalConfigsRecord;
return CarouselOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselOptionalConfigsRecordList = CarouselOptionalConfigsRecordList;

});
define("TempC11382.model$ProgressCircleOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ProgressCircleOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecordList = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecordList, _super);
function ProgressCircleOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecordList.itemType = TempC11382Model.ProgressCircleOptionalConfigsRecord;
return ProgressCircleOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ProgressCircleOptionalConfigsRecordList = ProgressCircleOptionalConfigsRecordList;

});
define("TempC11382.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AccordionIconPositionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecord = (function (_super) {
__extends(AccordionIconPositionRecord, _super);
function AccordionIconPositionRecord(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecord.attributesToDeclare = function () {
return [
this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AccordionIconPositionRec());
}, true, OutSystemsUIModel.AccordionIconPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
AccordionIconPositionRecord.fromStructure = function (str) {
return new AccordionIconPositionRecord(new AccordionIconPositionRecord.RecordClass({
accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccordionIconPositionRecord._isAnonymousRecord = true;
AccordionIconPositionRecord.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
AccordionIconPositionRecord.init();
return AccordionIconPositionRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("TempC11382.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$AccordionIconPositionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = TempC11382Model.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("TempC11382.model$FlatpickrConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$FlatpickrConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var FlatpickrConfigsList = (function (_super) {
__extends(FlatpickrConfigsList, _super);
function FlatpickrConfigsList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsList.itemType = OutSystemsUIModel.FlatpickrConfigsRec;
return FlatpickrConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.FlatpickrConfigsList = FlatpickrConfigsList;

});
define("TempC11382.model$ProgressBarOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ProgressBarOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecordList = (function (_super) {
__extends(ProgressBarOptionalConfigsRecordList, _super);
function ProgressBarOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecordList.itemType = TempC11382Model.ProgressBarOptionalConfigsRecord;
return ProgressBarOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ProgressBarOptionalConfigsRecordList = ProgressBarOptionalConfigsRecordList;

});
define("TempC11382.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AlertRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AlertRecord = (function (_super) {
__extends(AlertRecord, _super);
function AlertRecord(defaults) {
_super.apply(this, arguments);
}
AlertRecord.attributesToDeclare = function () {
return [
this.attr("Alert", "alertAttr", "Alert", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.AlertRec());
}, true, OutSystemsUIModel.AlertRec)
].concat(_super.attributesToDeclare.call(this));
};
AlertRecord.fromStructure = function (str) {
return new AlertRecord(new AlertRecord.RecordClass({
alertAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AlertRecord._isAnonymousRecord = true;
AlertRecord.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
AlertRecord.init();
return AlertRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.AlertRecord = AlertRecord;

});
define("TempC11382.model$TabsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$TabsOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecord = (function (_super) {
__extends(TabsOptionalConfigsRecord, _super);
function TabsOptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TabsOptionalConfigsRec());
}, true, OutSystemsUIModel.TabsOptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TabsOptionalConfigsRecord.fromStructure = function (str) {
return new TabsOptionalConfigsRecord(new TabsOptionalConfigsRecord.RecordClass({
tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TabsOptionalConfigsRecord._isAnonymousRecord = true;
TabsOptionalConfigsRecord.UniqueId = "b7283e2c-6e9c-6bcb-5286-d1ae04959554";
TabsOptionalConfigsRecord.init();
return TabsOptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.TabsOptionalConfigsRecord = TabsOptionalConfigsRecord;

});
define("TempC11382.model$TabsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$TabsOptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecordList = (function (_super) {
__extends(TabsOptionalConfigsRecordList, _super);
function TabsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecordList.itemType = TempC11382Model.TabsOptionalConfigsRecord;
return TabsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.TabsOptionalConfigsRecordList = TabsOptionalConfigsRecordList;

});
define("TempC11382.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ColorRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = TempC11382Model.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ColorRecordList = ColorRecordList;

});
define("TempC11382.model$VersionContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "TempC11382.model", "ApplicationInsightsConnector.model$VersionContextRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$ApplicationInsightsConnector"], function (exports, OutSystems, ApplicationInsightsConnectorModel, TempC11382Model) {
var OS = OutSystems.Internal;
var VersionContextRecord = (function (_super) {
__extends(VersionContextRecord, _super);
function VersionContextRecord(defaults) {
_super.apply(this, arguments);
}
VersionContextRecord.attributesToDeclare = function () {
return [
this.attr("VersionContext", "versionContextAttr", "VersionContext", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.VersionContextRec());
}, true, ApplicationInsightsConnectorModel.VersionContextRec)
].concat(_super.attributesToDeclare.call(this));
};
VersionContextRecord.fromStructure = function (str) {
return new VersionContextRecord(new VersionContextRecord.RecordClass({
versionContextAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VersionContextRecord._isAnonymousRecord = true;
VersionContextRecord.UniqueId = "9f68c1dc-1501-10f3-5bf4-f96b5ac359e7";
VersionContextRecord.init();
return VersionContextRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.VersionContextRecord = VersionContextRecord;

});
define("TempC11382.model$VirtualSelectConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$VirtualSelectConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecord = (function (_super) {
__extends(VirtualSelectConfigsRecord, _super);
function VirtualSelectConfigsRecord(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecord.attributesToDeclare = function () {
return [
this.attr("VirtualSelectConfigs", "virtualSelectConfigsAttr", "VirtualSelectConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.VirtualSelectConfigsRec());
}, true, OutSystemsUIModel.VirtualSelectConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
VirtualSelectConfigsRecord.fromStructure = function (str) {
return new VirtualSelectConfigsRecord(new VirtualSelectConfigsRecord.RecordClass({
virtualSelectConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
VirtualSelectConfigsRecord._isAnonymousRecord = true;
VirtualSelectConfigsRecord.UniqueId = "a34c0295-79f8-72c2-fbb9-0741544ea7c6";
VirtualSelectConfigsRecord.init();
return VirtualSelectConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.VirtualSelectConfigsRecord = VirtualSelectConfigsRecord;

});
define("TempC11382.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AnimationTypeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUIModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AnimationTypeList = AnimationTypeList;

});
define("TempC11382.model$MonthRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MonthRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthRecord = (function (_super) {
__extends(MonthRecord, _super);
function MonthRecord(defaults) {
_super.apply(this, arguments);
}
MonthRecord.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.MonthRec());
}, true, OutSystemsUIModel.MonthRec)
].concat(_super.attributesToDeclare.call(this));
};
MonthRecord.fromStructure = function (str) {
return new MonthRecord(new MonthRecord.RecordClass({
monthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MonthRecord._isAnonymousRecord = true;
MonthRecord.UniqueId = "e092deac-f9bc-8885-dd34-714ac00f33e4";
MonthRecord.init();
return MonthRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.MonthRecord = MonthRecord;

});
define("TempC11382.model$MonthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$MonthRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthRecordList = (function (_super) {
__extends(MonthRecordList, _super);
function MonthRecordList(defaults) {
_super.apply(this, arguments);
}
MonthRecordList.itemType = TempC11382Model.MonthRecord;
return MonthRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MonthRecordList = MonthRecordList;

});
define("TempC11382.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$GutterSizeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var GutterSizeRecord = (function (_super) {
__extends(GutterSizeRecord, _super);
function GutterSizeRecord(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecord.attributesToDeclare = function () {
return [
this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.GutterSizeRec());
}, true, OutSystemsUIModel.GutterSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
GutterSizeRecord.fromStructure = function (str) {
return new GutterSizeRecord(new GutterSizeRecord.RecordClass({
gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GutterSizeRecord._isAnonymousRecord = true;
GutterSizeRecord.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
GutterSizeRecord.init();
return GutterSizeRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.GutterSizeRecord = GutterSizeRecord;

});
define("TempC11382.model$SplideProvideri18nList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SplideProvideri18nRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideProvideri18nList = (function (_super) {
__extends(SplideProvideri18nList, _super);
function SplideProvideri18nList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nList.itemType = OutSystemsUIModel.SplideProvideri18nRec;
return SplideProvideri18nList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SplideProvideri18nList = SplideProvideri18nList;

});
define("TempC11382.model$SplideConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SplideConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideConfigsRecord = (function (_super) {
__extends(SplideConfigsRecord, _super);
function SplideConfigsRecord(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecord.attributesToDeclare = function () {
return [
this.attr("SplideConfigs", "splideConfigsAttr", "SplideConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideConfigsRec());
}, true, OutSystemsUIModel.SplideConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideConfigsRecord.fromStructure = function (str) {
return new SplideConfigsRecord(new SplideConfigsRecord.RecordClass({
splideConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideConfigsRecord._isAnonymousRecord = true;
SplideConfigsRecord.UniqueId = "a784fb81-6324-58d6-6903-27bfa77675d9";
SplideConfigsRecord.init();
return SplideConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.SplideConfigsRecord = SplideConfigsRecord;

});
define("TempC11382.model$CarouselDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselDirectionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselDirectionList = (function (_super) {
__extends(CarouselDirectionList, _super);
function CarouselDirectionList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionList.itemType = OutSystemsUIModel.CarouselDirectionRec;
return CarouselDirectionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselDirectionList = CarouselDirectionList;

});
define("TempC11382.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AlertRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUIModel.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AlertList = AlertList;

});
define("TempC11382.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DeviceConfigurationRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUIModel.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DeviceConfigurationList = DeviceConfigurationList;

});
define("TempC11382.model$DropdownOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownOptionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownOptionRecord = (function (_super) {
__extends(DropdownOptionRecord, _super);
function DropdownOptionRecord(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecord.attributesToDeclare = function () {
return [
this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.DropdownOptionRec());
}, true, OutSystemsUIModel.DropdownOptionRec)
].concat(_super.attributesToDeclare.call(this));
};
DropdownOptionRecord.fromStructure = function (str) {
return new DropdownOptionRecord(new DropdownOptionRecord.RecordClass({
dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DropdownOptionRecord._isAnonymousRecord = true;
DropdownOptionRecord.UniqueId = "e03a4930-8bfa-ca02-257d-451178bbf041";
DropdownOptionRecord.init();
return DropdownOptionRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.DropdownOptionRecord = DropdownOptionRecord;

});
define("TempC11382.model$DropdownOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DropdownOptionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownOptionRecordList = (function (_super) {
__extends(DropdownOptionRecordList, _super);
function DropdownOptionRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecordList.itemType = TempC11382Model.DropdownOptionRecord;
return DropdownOptionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownOptionRecordList = DropdownOptionRecordList;

});
define("TempC11382.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ColumnBreakRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ColumnBreakRecord = (function (_super) {
__extends(ColumnBreakRecord, _super);
function ColumnBreakRecord(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecord.attributesToDeclare = function () {
return [
this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ColumnBreakRec());
}, true, OutSystemsUIModel.ColumnBreakRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnBreakRecord.fromStructure = function (str) {
return new ColumnBreakRecord(new ColumnBreakRecord.RecordClass({
columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnBreakRecord._isAnonymousRecord = true;
ColumnBreakRecord.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
ColumnBreakRecord.init();
return ColumnBreakRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.ColumnBreakRecord = ColumnBreakRecord;

});
define("TempC11382.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ColumnBreakRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = TempC11382Model.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("TempC11382.model$TabsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$TabsOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsList = (function (_super) {
__extends(TabsOptionalConfigsList, _super);
function TabsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsList.itemType = OutSystemsUIModel.TabsOptionalConfigsRec;
return TabsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.TabsOptionalConfigsList = TabsOptionalConfigsList;

});
define("TempC11382.model$SplideConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SplideConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideConfigsRecordList = (function (_super) {
__extends(SplideConfigsRecordList, _super);
function SplideConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecordList.itemType = TempC11382Model.SplideConfigsRecord;
return SplideConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SplideConfigsRecordList = SplideConfigsRecordList;

});
define("TempC11382.model$DeviceInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DeviceInfoRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceInfoRecordList = (function (_super) {
__extends(DeviceInfoRecordList, _super);
function DeviceInfoRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceInfoRecordList.itemType = TempC11382Model.DeviceInfoRecord;
return DeviceInfoRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DeviceInfoRecordList = DeviceInfoRecordList;

});
define("TempC11382.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownItemRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUIModel.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownItemList = DropdownItemList;

});
define("TempC11382.model$TimePicker_OptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$TimePicker_OptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var TimePicker_OptionalConfigsRecord = (function (_super) {
__extends(TimePicker_OptionalConfigsRecord, _super);
function TimePicker_OptionalConfigsRecord(defaults) {
_super.apply(this, arguments);
}
TimePicker_OptionalConfigsRecord.attributesToDeclare = function () {
return [
this.attr("TimePicker_OptionalConfigs", "timePicker_OptionalConfigsAttr", "TimePicker_OptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.TimePicker_OptionalConfigsRec());
}, true, OutSystemsUIModel.TimePicker_OptionalConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
TimePicker_OptionalConfigsRecord.fromStructure = function (str) {
return new TimePicker_OptionalConfigsRecord(new TimePicker_OptionalConfigsRecord.RecordClass({
timePicker_OptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimePicker_OptionalConfigsRecord._isAnonymousRecord = true;
TimePicker_OptionalConfigsRecord.UniqueId = "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88";
TimePicker_OptionalConfigsRecord.init();
return TimePicker_OptionalConfigsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.TimePicker_OptionalConfigsRecord = TimePicker_OptionalConfigsRecord;

});
define("TempC11382.model$DatePicker_OptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DatePicker_OptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePicker_OptionalConfigsRecordList = (function (_super) {
__extends(DatePicker_OptionalConfigsRecordList, _super);
function DatePicker_OptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePicker_OptionalConfigsRecordList.itemType = TempC11382Model.DatePicker_OptionalConfigsRecord;
return DatePicker_OptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePicker_OptionalConfigsRecordList = DatePicker_OptionalConfigsRecordList;

});
define("TempC11382.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ErrorMessageRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = TempC11382Model.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("TempC11382.model$DropdownOptionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownOptionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownOptionList = (function (_super) {
__extends(DropdownOptionList, _super);
function DropdownOptionList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionList.itemType = OutSystemsUIModel.DropdownOptionRec;
return DropdownOptionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownOptionList = DropdownOptionList;

});
define("TempC11382.model$VirtualSelectConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$VirtualSelectConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecordList = (function (_super) {
__extends(VirtualSelectConfigsRecordList, _super);
function VirtualSelectConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecordList.itemType = TempC11382Model.VirtualSelectConfigsRecord;
return VirtualSelectConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.VirtualSelectConfigsRecordList = VirtualSelectConfigsRecordList;

});
define("TempC11382.model$MonthOrderYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MonthOrderYearRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthOrderYearList = (function (_super) {
__extends(MonthOrderYearList, _super);
function MonthOrderYearList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearList.itemType = OutSystemsUIModel.MonthOrderYearRec;
return MonthOrderYearList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MonthOrderYearList = MonthOrderYearList;

});
define("TempC11382.model$DatePickerTimeFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DatePickerTimeFormatRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecordList = (function (_super) {
__extends(DatePickerTimeFormatRecordList, _super);
function DatePickerTimeFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecordList.itemType = TempC11382Model.DatePickerTimeFormatRecord;
return DatePickerTimeFormatRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerTimeFormatRecordList = DatePickerTimeFormatRecordList;

});
define("TempC11382.model$ProgressCircleOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ProgressCircleOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsList = (function (_super) {
__extends(ProgressCircleOptionalConfigsList, _super);
function ProgressCircleOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsList.itemType = OutSystemsUIModel.ProgressCircleOptionalConfigsRec;
return ProgressCircleOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ProgressCircleOptionalConfigsList = ProgressCircleOptionalConfigsList;

});
define("TempC11382.model$RangeSliderOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$RangeSliderOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsList = (function (_super) {
__extends(RangeSliderOptionalConfigsList, _super);
function RangeSliderOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsList.itemType = OutSystemsUIModel.RangeSliderOptionalConfigsRec;
return RangeSliderOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.RangeSliderOptionalConfigsList = RangeSliderOptionalConfigsList;

});
define("TempC11382.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$StepsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUIModel.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.StepsList = StepsList;

});
define("TempC11382.model$SplideConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SplideConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideConfigsList = (function (_super) {
__extends(SplideConfigsList, _super);
function SplideConfigsList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsList.itemType = OutSystemsUIModel.SplideConfigsRec;
return SplideConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SplideConfigsList = SplideConfigsList;

});
define("TempC11382.model$VirtualSelectConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$VirtualSelectConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsList = (function (_super) {
__extends(VirtualSelectConfigsList, _super);
function VirtualSelectConfigsList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsList.itemType = OutSystemsUIModel.VirtualSelectConfigsRec;
return VirtualSelectConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.VirtualSelectConfigsList = VirtualSelectConfigsList;

});
define("TempC11382.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SpeedRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
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
TempC11382Model.SpeedRecord = SpeedRecord;

});
define("TempC11382.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DeviceResponsiveRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUIModel.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DeviceResponsiveList = DeviceResponsiveList;

});
define("TempC11382.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SideMenuBehaviorRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUIModel.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("TempC11382.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ColorRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUIModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ColorList = ColorList;

});
define("TempC11382.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$GutterSizeRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUIModel.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.GutterSizeList = GutterSizeList;

});
define("TempC11382.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$ScrollbarStyleRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUIModel.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ScrollbarStyleList = ScrollbarStyleList;

});
define("TempC11382.model$DatePickerLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DatePickerLanguageRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageList = (function (_super) {
__extends(DatePickerLanguageList, _super);
function DatePickerLanguageList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageList.itemType = OutSystemsUIModel.DatePickerLanguageRec;
return DatePickerLanguageList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerLanguageList = DatePickerLanguageList;

});
define("TempC11382.model$NotificationOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$NotificationOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsList = (function (_super) {
__extends(NotificationOptionalConfigsList, _super);
function NotificationOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsList.itemType = OutSystemsUIModel.NotificationOptionalConfigsRec;
return NotificationOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.NotificationOptionalConfigsList = NotificationOptionalConfigsList;

});
define("TempC11382.model$SplideProviderClassesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SplideProviderClassesRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecord = (function (_super) {
__extends(SplideProviderClassesRecord, _super);
function SplideProviderClassesRecord(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecord.attributesToDeclare = function () {
return [
this.attr("SplideProviderClasses", "splideProviderClassesAttr", "SplideProviderClasses", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SplideProviderClassesRec());
}, true, OutSystemsUIModel.SplideProviderClassesRec)
].concat(_super.attributesToDeclare.call(this));
};
SplideProviderClassesRecord.fromStructure = function (str) {
return new SplideProviderClassesRecord(new SplideProviderClassesRecord.RecordClass({
splideProviderClassesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SplideProviderClassesRecord._isAnonymousRecord = true;
SplideProviderClassesRecord.UniqueId = "dc356367-93ab-1ffb-95f0-eb8bb907f022";
SplideProviderClassesRecord.init();
return SplideProviderClassesRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.SplideProviderClassesRecord = SplideProviderClassesRecord;

});
define("TempC11382.model$SplideProviderClassesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SplideProviderClassesRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecordList = (function (_super) {
__extends(SplideProviderClassesRecordList, _super);
function SplideProviderClassesRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecordList.itemType = TempC11382Model.SplideProviderClassesRecord;
return SplideProviderClassesRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SplideProviderClassesRecordList = SplideProviderClassesRecordList;

});
define("TempC11382.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$PositionRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUIModel.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.PositionList = PositionList;

});
define("TempC11382.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DropdownItemRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = TempC11382Model.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownItemRecordList = DropdownItemRecordList;

});
define("TempC11382.model$CarouselItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselItemsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselItemsRecord = (function (_super) {
__extends(CarouselItemsRecord, _super);
function CarouselItemsRecord(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecord.attributesToDeclare = function () {
return [
this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.CarouselItemsRec());
}, true, OutSystemsUIModel.CarouselItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
CarouselItemsRecord.fromStructure = function (str) {
return new CarouselItemsRecord(new CarouselItemsRecord.RecordClass({
carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CarouselItemsRecord._isAnonymousRecord = true;
CarouselItemsRecord.UniqueId = "dac62773-434c-f92b-5236-8fd089bbfc2a";
CarouselItemsRecord.init();
return CarouselItemsRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.CarouselItemsRecord = CarouselItemsRecord;

});
define("TempC11382.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$AutoplayRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUIModel.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AutoplayList = AutoplayList;

});
define("TempC11382.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SideMenuBehaviorRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecord = (function (_super) {
__extends(SideMenuBehaviorRecord, _super);
function SideMenuBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.SideMenuBehaviorRec());
}, true, OutSystemsUIModel.SideMenuBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
SideMenuBehaviorRecord.fromStructure = function (str) {
return new SideMenuBehaviorRecord(new SideMenuBehaviorRecord.RecordClass({
sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SideMenuBehaviorRecord._isAnonymousRecord = true;
SideMenuBehaviorRecord.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
SideMenuBehaviorRecord.init();
return SideMenuBehaviorRecord;
})(OS.DataTypes.GenericRecord);
TempC11382Model.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("TempC11382.model$CarouselItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$CarouselItemsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselItemsRecordList = (function (_super) {
__extends(CarouselItemsRecordList, _super);
function CarouselItemsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecordList.itemType = TempC11382Model.CarouselItemsRecord;
return CarouselItemsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselItemsRecordList = CarouselItemsRecordList;

});
define("TempC11382.model$VersionContextList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "TempC11382.model", "ApplicationInsightsConnector.model$VersionContextRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$ApplicationInsightsConnector"], function (exports, OutSystems, ApplicationInsightsConnectorModel, TempC11382Model) {
var OS = OutSystems.Internal;
var VersionContextList = (function (_super) {
__extends(VersionContextList, _super);
function VersionContextList(defaults) {
_super.apply(this, arguments);
}
VersionContextList.itemType = ApplicationInsightsConnectorModel.VersionContextRec;
return VersionContextList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.VersionContextList = VersionContextList;

});
define("TempC11382.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$SpeedRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUIModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SpeedList = SpeedList;

});
define("TempC11382.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$StepsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = TempC11382Model.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.StepsRecordList = StepsRecordList;

});
define("TempC11382.model$DatePickerLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DatePickerLanguageRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecordList = (function (_super) {
__extends(DatePickerLanguageRecordList, _super);
function DatePickerLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecordList.itemType = TempC11382Model.DatePickerLanguageRecord;
return DatePickerLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DatePickerLanguageRecordList = DatePickerLanguageRecordList;

});
define("TempC11382.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$GutterSizeRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = TempC11382Model.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.GutterSizeRecordList = GutterSizeRecordList;

});
define("TempC11382.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SideMenuBehaviorRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = TempC11382Model.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("TempC11382.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "TempC11382.model", "ServiceCenter.model$UserRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, TempC11382Model) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.UserList = UserList;

});
define("TempC11382.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$AlertRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = TempC11382Model.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.AlertRecordList = AlertRecordList;

});
define("TempC11382.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$SpeedRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = TempC11382Model.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.SpeedRecordList = SpeedRecordList;

});
define("TempC11382.model$TimePicker_OptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$TimePicker_OptionalConfigsRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var TimePicker_OptionalConfigsRecordList = (function (_super) {
__extends(TimePicker_OptionalConfigsRecordList, _super);
function TimePicker_OptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TimePicker_OptionalConfigsRecordList.itemType = TempC11382Model.TimePicker_OptionalConfigsRecord;
return TimePicker_OptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.TimePicker_OptionalConfigsRecordList = TimePicker_OptionalConfigsRecordList;

});
define("TempC11382.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$DirectionRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = TempC11382Model.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DirectionRecordList = DirectionRecordList;

});
define("TempC11382.model$MonthYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$MonthYearRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthYearRecordList = (function (_super) {
__extends(MonthYearRecordList, _super);
function MonthYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthYearRecordList.itemType = TempC11382Model.MonthYearRecord;
return MonthYearRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MonthYearRecordList = MonthYearRecordList;

});
define("TempC11382.model$MonthList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$MonthRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var MonthList = (function (_super) {
__extends(MonthList, _super);
function MonthList(defaults) {
_super.apply(this, arguments);
}
MonthList.itemType = OutSystemsUIModel.MonthRec;
return MonthList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.MonthList = MonthList;

});
define("TempC11382.model$CarouselItemsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$CarouselItemsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var CarouselItemsList = (function (_super) {
__extends(CarouselItemsList, _super);
function CarouselItemsList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsList.itemType = OutSystemsUIModel.CarouselItemsRec;
return CarouselItemsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.CarouselItemsList = CarouselItemsList;

});
define("TempC11382.model$VersionContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$VersionContextRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var VersionContextRecordList = (function (_super) {
__extends(VersionContextRecordList, _super);
function VersionContextRecordList(defaults) {
_super.apply(this, arguments);
}
VersionContextRecordList.itemType = TempC11382Model.VersionContextRecord;
return VersionContextRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.VersionContextRecordList = VersionContextRecordList;

});
define("TempC11382.model$DropdownOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI.model", "TempC11382.model", "OutSystemsUI.model$DropdownOptionalConfigsRec", "TempC11382.referencesHealth", "TempC11382.referencesHealth$OutSystemsUI"], function (exports, OutSystems, OutSystemsUIModel, TempC11382Model) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsList = (function (_super) {
__extends(DropdownOptionalConfigsList, _super);
function DropdownOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsList.itemType = OutSystemsUIModel.DropdownOptionalConfigsRec;
return DropdownOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.DropdownOptionalConfigsList = DropdownOptionalConfigsList;

});
define("TempC11382.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "TempC11382.model", "TempC11382.model$ScrollbarStyleRecord"], function (exports, OutSystems, TempC11382Model) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = TempC11382Model.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
TempC11382Model.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("TempC11382.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var TempC11382Model = exports;
Object.defineProperty(TempC11382Model, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["1036833f-c6a2-47c6-98cd-1523acac679f"];
}
});

TempC11382Model.staticEntities = {};
TempC11382Model.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(TempC11382Model.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

TempC11382Model.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(TempC11382Model.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

TempC11382Model.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(TempC11382Model.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(TempC11382Model.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

TempC11382Model.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(TempC11382Model.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

TempC11382Model.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(TempC11382Model.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(TempC11382Model.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(TempC11382Model.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(TempC11382Model.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(TempC11382Model.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

TempC11382Model.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

TempC11382Model.staticEntities.month = {};
var getMonthRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.month, "june", {
get: function () {
return getMonthRecord("02cb1fff-a143-48c1-8922-5b2c562e1939");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "march", {
get: function () {
return getMonthRecord("29858d6e-705a-4cfd-a9e2-f9dc6bda346c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "december", {
get: function () {
return getMonthRecord("5b0eff8b-b2df-4e9a-80a5-eac51617cdc3");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "february", {
get: function () {
return getMonthRecord("6b6caf1c-eadb-4b30-96ec-84b225feb1a5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "may", {
get: function () {
return getMonthRecord("76cd9430-f4f8-4b0d-8a72-ddcac3928aeb");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "april", {
get: function () {
return getMonthRecord("7c425633-4e80-4f7a-a119-c21d82820511");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "november", {
get: function () {
return getMonthRecord("86e22632-bb44-42ad-8589-0b6aadda9dd4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "august", {
get: function () {
return getMonthRecord("896ff549-7e70-48af-b967-31ea68b73891");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "january", {
get: function () {
return getMonthRecord("8d3840f5-6ae6-4899-960d-3e215342e2e3");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "july", {
get: function () {
return getMonthRecord("ac483ea0-4423-404a-a61d-8d6bce0ee39e");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "september", {
get: function () {
return getMonthRecord("c858ebfd-c9fe-49b6-bbfc-57c28c895b26");
}
});

Object.defineProperty(TempC11382Model.staticEntities.month, "october", {
get: function () {
return getMonthRecord("e01b8055-99c6-4096-bc7d-5f0c825b7692");
}
});

TempC11382Model.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return getDatePickerLanguageRecord("0041af3b-505e-48b8-8d79-b0a00aeeb4de");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return getDatePickerLanguageRecord("05968754-a438-40c9-860d-0775c7618c80");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "czech", {
get: function () {
return getDatePickerLanguageRecord("0c6d79c7-6773-4d9e-a914-ad7246505aa8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return getDatePickerLanguageRecord("0e659962-b0fb-4486-9f33-997cf5a00f33");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return getDatePickerLanguageRecord("10fba89e-f9ea-46da-a114-849a4891c4dd");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return getDatePickerLanguageRecord("11a9c498-65e3-4074-bd4c-16266288a9e4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return getDatePickerLanguageRecord("186d2cd3-7b9d-464a-b31e-b4548b9a80c0");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "polish", {
get: function () {
return getDatePickerLanguageRecord("198c5c59-d610-4e52-b4ed-9fb38c21b3b7");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return getDatePickerLanguageRecord("1e9dd8a1-ab24-4849-ab74-b65b2a2974a5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return getDatePickerLanguageRecord("1efa117c-f1b9-4ae7-94ad-814a752e4864");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "malay", {
get: function () {
return getDatePickerLanguageRecord("242628f3-22b6-4713-8118-7921abd00ad2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return getDatePickerLanguageRecord("286e49ad-5406-4f42-a9c4-bcc4adc64d17");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return getDatePickerLanguageRecord("2df37c1e-5431-4849-9f0b-405b43fed188");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "danish", {
get: function () {
return getDatePickerLanguageRecord("34689962-0ccc-46dc-bc43-e6bc7716784c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "english", {
get: function () {
return getDatePickerLanguageRecord("37430fa0-8882-4f69-afde-41c27de03a5f");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return getDatePickerLanguageRecord("3854d57f-f8bd-4024-8664-6353d552d8f2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return getDatePickerLanguageRecord("459a4a75-fb85-40e0-96b2-f08df284da41");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return getDatePickerLanguageRecord("530ceb8f-1ff1-44a7-aed5-e0af45b941cb");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return getDatePickerLanguageRecord("58eb18a6-11fe-4a8b-bb96-7ed1057b16f5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return getDatePickerLanguageRecord("5e341bb3-0fc7-4f59-a426-00dcd4b2fabf");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return getDatePickerLanguageRecord("62e038a6-8d72-4484-b278-a883b004b3f2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return getDatePickerLanguageRecord("6bb7b0e2-bad8-4f58-801b-4ca0e9e699a7");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return getDatePickerLanguageRecord("6f9fd262-32f0-4726-ab3e-5d7bb6916892");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return getDatePickerLanguageRecord("7b29c19f-82dd-4e0b-8f5b-9004ca7d24fc");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return getDatePickerLanguageRecord("7def49c8-f1a0-4600-ae56-53e9471634a2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return getDatePickerLanguageRecord("80601fbd-e190-49be-90dd-6964171d5292");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "korean", {
get: function () {
return getDatePickerLanguageRecord("82a53bc2-f8d7-4c5d-bb70-5651a4713880");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "thai", {
get: function () {
return getDatePickerLanguageRecord("84a8de9c-6f4d-4077-9391-98d66414bf4e");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return getDatePickerLanguageRecord("872b0db9-d9b4-49d4-b2ae-028122cbd448");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return getDatePickerLanguageRecord("8c2fe645-d925-42ea-9819-4a1ac3a340e4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return getDatePickerLanguageRecord("930b417d-72aa-4b39-a3b9-3b9821bf1d4b");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return getDatePickerLanguageRecord("9d702f7b-360d-46bb-9b6e-0e020a5f6385");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "french", {
get: function () {
return getDatePickerLanguageRecord("9dffbcdd-25c4-44e2-9f6a-d19b9f758ad8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return getDatePickerLanguageRecord("9f260686-51cd-40d2-bf26-a09165b213ba");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "russian", {
get: function () {
return getDatePickerLanguageRecord("ad00c2b1-c380-4bf7-b5f4-173b40594bd5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return getDatePickerLanguageRecord("b2957404-0007-4b47-a798-dd114894c7e3");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return getDatePickerLanguageRecord("b3519d98-660c-43ed-aee9-bb76e32dcafb");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return getDatePickerLanguageRecord("b4e4a5fb-10ef-4d66-84bd-96dddb9d3b3c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return getDatePickerLanguageRecord("b60ef392-7715-437f-a4a9-b89a2128e49c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return getDatePickerLanguageRecord("b6fa2f75-12b9-4973-9027-b4866be01621");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return getDatePickerLanguageRecord("b719cb40-621d-4610-b16f-f42caad493d4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "italian", {
get: function () {
return getDatePickerLanguageRecord("ba077ace-9423-401f-88fc-1fff8d7872a0");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return getDatePickerLanguageRecord("bb85f008-2154-44ee-9199-9e0e19497c47");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return getDatePickerLanguageRecord("bce28cae-e6f9-4988-97a8-8b0e17ea6703");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return getDatePickerLanguageRecord("bd68a245-146e-45c9-8dc0-26419cbe5c85");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return getDatePickerLanguageRecord("c1e7d993-22fe-452a-9754-6a48ac03e6d4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return getDatePickerLanguageRecord("c356a48b-0411-4b54-b7a3-dd7fa4368645");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return getDatePickerLanguageRecord("c38dac5a-7528-4647-96e6-887c0c9da82e");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "persian", {
get: function () {
return getDatePickerLanguageRecord("d1bf9a10-3760-41c7-94eb-e24707993416");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return getDatePickerLanguageRecord("d8f987cd-d08c-40b3-b19b-b60b508cf03d");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "german", {
get: function () {
return getDatePickerLanguageRecord("da3038a7-779c-4599-b0b7-99557f688365");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return getDatePickerLanguageRecord("df311624-2b4a-410a-bf54-de447886e3a3");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return getDatePickerLanguageRecord("dfb449d3-ec70-458e-9f37-89e8f9c207fb");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return getDatePickerLanguageRecord("f6d8b648-df67-4449-934a-bd03dff4c50c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return getDatePickerLanguageRecord("fad657c3-4b13-4163-8e21-84c60b6810ee");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return getDatePickerLanguageRecord("ffb560d6-c067-42e5-bdd8-0de808acff0a");
}
});

TempC11382Model.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

TempC11382Model.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return getDatePickerTimeFormatRecord("48213c15-538b-4222-a3ea-d136e608a57d");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("ce1a9924-35ee-4a25-87ae-81f2a97bdf20");
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("e1aba689-db52-4dba-9eef-b5980b3e4fa0");
}
});

TempC11382Model.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(TempC11382Model.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(TempC11382Model.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

TempC11382Model.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(TempC11382Model.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

TempC11382Model.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(TempC11382Model.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(TempC11382Model.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(TempC11382Model.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

TempC11382Model.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(TempC11382Model.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(TempC11382Model.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

TempC11382Model.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(TempC11382Model.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(TempC11382Model.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

TempC11382Model.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return getCarouselDirectionRecord("4b5575cd-7598-420a-97db-5088d4d86a4d");
}
});

Object.defineProperty(TempC11382Model.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return getCarouselDirectionRecord("a05b6420-43c5-4660-9526-95e2052a45a8");
}
});

TempC11382Model.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(TempC11382Model.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(TempC11382Model.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(TempC11382Model.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

TempC11382Model.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(TempC11382Model.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

TempC11382Model.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(TempC11382Model.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

TempC11382Model.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(TempC11382Model.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

TempC11382Model.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(TempC11382Model.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(TempC11382Model.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

TempC11382Model.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.booleanTypes, "true", {
get: function () {
return getBooleanTypesRecord("58ea7788-cac7-4f50-8ef1-ba8e1661b632");
}
});

Object.defineProperty(TempC11382Model.staticEntities.booleanTypes, "unset", {
get: function () {
return getBooleanTypesRecord("bf11a159-3707-4888-8e86-c3b0c78bc889");
}
});

Object.defineProperty(TempC11382Model.staticEntities.booleanTypes, "false", {
get: function () {
return getBooleanTypesRecord("df5af092-2604-4409-ae7d-b86d2bcef9fb");
}
});

TempC11382Model.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(TempC11382Model.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(TempC11382Model.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(TempC11382Model.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

TempC11382Model.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(TempC11382Model.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

TempC11382Model.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(TempC11382Model.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(TempC11382Model.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

TempC11382Model.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(TempC11382Model.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(TempC11382Model.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

TempC11382Model.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(TempC11382Model.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

TempC11382Model.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(TempC11382Model.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(TempC11382Model.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(TempC11382Model.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(TempC11382Model.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

TempC11382Model.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(TempC11382Model.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(TempC11382Model.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

TempC11382Model.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.carouselNavigation, "dots", {
get: function () {
return getCarouselNavigationRecord("2ba3836f-3d61-4868-b949-fb01a4e0d441");
}
});

Object.defineProperty(TempC11382Model.staticEntities.carouselNavigation, "none", {
get: function () {
return getCarouselNavigationRecord("367fee69-dc95-4624-9ba5-da687d881886");
}
});

Object.defineProperty(TempC11382Model.staticEntities.carouselNavigation, "arrows", {
get: function () {
return getCarouselNavigationRecord("3ae78a75-4c85-4aaa-ba2d-12c24902a7cf");
}
});

Object.defineProperty(TempC11382Model.staticEntities.carouselNavigation, "both", {
get: function () {
return getCarouselNavigationRecord("59a3f653-ff1d-49a0-ad2f-dda725b1352b");
}
});

TempC11382Model.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("2fc656af-35c9-4cc8-94f7-cd7970e5afe4"));
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("55758641-50ed-4a93-bb39-a86c02e8782c"));
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("570f21d0-bdbe-4bbe-a452-02e3376f69d8"));
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("87ec7c5b-52ec-4dae-82e3-f6f08edd3a2e"));
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("c59d1722-cbb1-453b-9a29-4fbb246756cd"));
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f06c120a-c368-4568-9216-42f7c8a60d8c"));
}
});

Object.defineProperty(TempC11382Model.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f19cb895-a764-44e0-90e8-00bacb84e134"));
}
});

});
