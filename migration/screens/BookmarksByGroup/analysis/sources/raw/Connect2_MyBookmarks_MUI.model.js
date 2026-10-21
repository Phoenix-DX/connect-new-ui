define("Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemList, _super);
function CommunityBusinessCarouselPreloadedItemList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemList.itemType = Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec;
return CommunityBusinessCarouselPreloadedItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadedItemList = CommunityBusinessCarouselPreloadedItemList;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingList, _super);
function CommunityBusinessCarouselPreloadingList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingList.itemType = Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec;
return CommunityBusinessCarouselPreloadingList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadingList = CommunityBusinessCarouselPreloadingList;

});
define("Connect2_MyBookmarks_MUI.model$PolicyActivationRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "Connect2_MyBookmarks_MUI.model", "DirectoryClientCore.model$PolicyActivationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$DirectoryClientCore"], function (exports, OutSystems, DirectoryClientCoreModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PolicyActivationRecord = (function (_super) {
__extends(PolicyActivationRecord, _super);
function PolicyActivationRecord(defaults) {
_super.apply(this, arguments);
}
PolicyActivationRecord.attributesToDeclare = function () {
return [
this.attr("PolicyActivation", "policyActivationAttr", "PolicyActivation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.PolicyActivationRec());
}, true, DirectoryClientCoreModel.PolicyActivationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyActivationRecord.fromStructure = function (str) {
return new PolicyActivationRecord(new PolicyActivationRecord.RecordClass({
policyActivationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyActivationRecord._isAnonymousRecord = true;
PolicyActivationRecord.UniqueId = "01ee98e9-3feb-f886-de04-a215ebcdad12";
PolicyActivationRecord.init();
return PolicyActivationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.PolicyActivationRecord = PolicyActivationRecord;

});
define("Connect2_MyBookmarks_MUI.model$PhotoURLRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoURLRecord = (function (_super) {
__extends(PhotoURLRecord, _super);
function PhotoURLRecord(defaults) {
_super.apply(this, arguments);
}
PhotoURLRecord.attributesToDeclare = function () {
return [
this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoURLRec());
}, true, APIDomain_Directory_ISModel.PhotoURLRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoURLRecord.fromStructure = function (str) {
return new PhotoURLRecord(new PhotoURLRecord.RecordClass({
photoURLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoURLRecord._isAnonymousRecord = true;
PhotoURLRecord.UniqueId = "3336d11f-19ec-3217-4cb5-a1a019564a43";
PhotoURLRecord.init();
return PhotoURLRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.PhotoURLRecord = PhotoURLRecord;

});
define("Connect2_MyBookmarks_MUI.model$PhotoURLRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$PhotoURLRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoURLRecordList = (function (_super) {
__extends(PhotoURLRecordList, _super);
function PhotoURLRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoURLRecordList.itemType = Connect2_MyBookmarks_MUIModel.PhotoURLRecord;
return PhotoURLRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoURLRecordList = PhotoURLRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselNavigationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselNavigationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.CarouselNavigationRecord = CarouselNavigationRecord;

});
define("Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemRecord = (function (_super) {
__extends(HouseholdCarouselPreloadedItemRecord, _super);
function HouseholdCarouselPreloadedItemRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdCarouselPreloadedItem", "householdCarouselPreloadedItemAttr", "HouseholdCarouselPreloadedItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec());
}, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdCarouselPreloadedItemRecord.fromStructure = function (str) {
return new HouseholdCarouselPreloadedItemRecord(new HouseholdCarouselPreloadedItemRecord.RecordClass({
householdCarouselPreloadedItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdCarouselPreloadedItemRecord._isAnonymousRecord = true;
HouseholdCarouselPreloadedItemRecord.UniqueId = "5e9ee544-55d6-6991-9128-d7b2c27f33b8";
HouseholdCarouselPreloadedItemRecord.init();
return HouseholdCarouselPreloadedItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadedItemRecord = HouseholdCarouselPreloadedItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemRecordList = (function (_super) {
__extends(HouseholdCarouselPreloadedItemRecordList, _super);
function HouseholdCarouselPreloadedItemRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadedItemRecord;
return HouseholdCarouselPreloadedItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadedItemRecordList = HouseholdCarouselPreloadedItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$APIM_CommonHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "Connect2_MyBookmarks_MUI.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderList = (function (_super) {
__extends(APIM_CommonHeaderList, _super);
function APIM_CommonHeaderList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderList.itemType = APIUtilitiesLibModel.APIM_CommonHeaderRec;
return APIM_CommonHeaderList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.APIM_CommonHeaderList = APIM_CommonHeaderList;

});
define("Connect2_MyBookmarks_MUI.model$AccordionIconTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AccordionIconTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeList = (function (_super) {
__extends(AccordionIconTypeList, _super);
function AccordionIconTypeList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeList.itemType = OutSystemsUI_2_23Model.AccordionIconTypeRec;
return AccordionIconTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AccordionIconTypeList = AccordionIconTypeList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityResultItemWithGPSList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSList = (function (_super) {
__extends(LocalityResultItemWithGPSList, _super);
function LocalityResultItemWithGPSList(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSList.itemType = Connect2_LegacySharedModel.LocalityResultItemWithGPSRec;
return LocalityResultItemWithGPSList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityResultItemWithGPSList = LocalityResultItemWithGPSList;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_SortColumnList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_SortColumnRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_SortColumnList = (function (_super) {
__extends(MyBookmarks_SortColumnList, _super);
function MyBookmarks_SortColumnList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_SortColumnList.itemType = Connect2_MyBookmarks_BLModel.MyBookmarks_SortColumnRec;
return MyBookmarks_SortColumnList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MyBookmarks_SortColumnList = MyBookmarks_SortColumnList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkItemList = (function (_super) {
__extends(BookmarkItemList, _super);
function BookmarkItemList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemList.itemType = Connect2_MyBookmarks_ISModel.BookmarkItemRec;
return BookmarkItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkItemList = BookmarkItemList;

});
define("Connect2_MyBookmarks_MUI.model$GetBookmarksByGroupResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$GetBookmarksByGroupResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetBookmarksByGroupResponseRecord = (function (_super) {
__extends(GetBookmarksByGroupResponseRecord, _super);
function GetBookmarksByGroupResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetBookmarksByGroupResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetBookmarksByGroupResponse", "getBookmarksByGroupResponseAttr", "GetBookmarksByGroupResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec());
}, true, Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetBookmarksByGroupResponseRecord.fromStructure = function (str) {
return new GetBookmarksByGroupResponseRecord(new GetBookmarksByGroupResponseRecord.RecordClass({
getBookmarksByGroupResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetBookmarksByGroupResponseRecord._isAnonymousRecord = true;
GetBookmarksByGroupResponseRecord.UniqueId = "79441c6e-fcc5-24f6-7ab2-8288da802328";
GetBookmarksByGroupResponseRecord.init();
return GetBookmarksByGroupResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.GetBookmarksByGroupResponseRecord = GetBookmarksByGroupResponseRecord;

});
define("Connect2_MyBookmarks_MUI.model$GetBookmarksByGroupResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GetBookmarksByGroupResponseRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetBookmarksByGroupResponseRecordList = (function (_super) {
__extends(GetBookmarksByGroupResponseRecordList, _super);
function GetBookmarksByGroupResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetBookmarksByGroupResponseRecordList.itemType = Connect2_MyBookmarks_MUIModel.GetBookmarksByGroupResponseRecord;
return GetBookmarksByGroupResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetBookmarksByGroupResponseRecordList = GetBookmarksByGroupResponseRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoStateRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VideoStateRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.VideoStateRecord = VideoStateRecord;

});
define("Connect2_MyBookmarks_MUI.model$AutoplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AutoplayRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.AutoplayRecord = AutoplayRecord;

});
define("Connect2_MyBookmarks_MUI.model$AutoplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$AutoplayRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AutoplayRecordList = (function (_super) {
__extends(AutoplayRecordList, _super);
function AutoplayRecordList(defaults) {
_super.apply(this, arguments);
}
AutoplayRecordList.itemType = Connect2_MyBookmarks_MUIModel.AutoplayRecord;
return AutoplayRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AutoplayRecordList = AutoplayRecordList;

});
define("Connect2_MyBookmarks_MUI.model$NotificationOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$NotificationOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.NotificationOptionalConfigsRecord = NotificationOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerWeekDayRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerWeekDayRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DatePickerWeekDayRecord = DatePickerWeekDayRecord;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerWeekDayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DatePickerWeekDayRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayRecordList = (function (_super) {
__extends(DatePickerWeekDayRecordList, _super);
function DatePickerWeekDayRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayRecordList.itemType = Connect2_MyBookmarks_MUIModel.DatePickerWeekDayRecord;
return DatePickerWeekDayRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerWeekDayRecordList = DatePickerWeekDayRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkByIdList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkById2Rec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkByIdList = (function (_super) {
__extends(BookmarkByIdList, _super);
function BookmarkByIdList(defaults) {
_super.apply(this, arguments);
}
BookmarkByIdList.itemType = Connect2_MyBookmarks_ISModel.BookmarkById2Rec;
return BookmarkByIdList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkByIdList = BookmarkByIdList;

});
define("Connect2_MyBookmarks_MUI.model$GetSummariesResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$GetSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetSummariesResponseRecord = (function (_super) {
__extends(GetSummariesResponseRecord, _super);
function GetSummariesResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetSummariesResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetSummariesResponse", "getSummariesResponseAttr", "GetSummariesResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetSummariesResponseRec());
}, true, Connect2_MyBookmarks_ISModel.GetSummariesResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSummariesResponseRecord.fromStructure = function (str) {
return new GetSummariesResponseRecord(new GetSummariesResponseRecord.RecordClass({
getSummariesResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSummariesResponseRecord._isAnonymousRecord = true;
GetSummariesResponseRecord.UniqueId = "36aa1247-147d-4f56-b0c4-25bb3e38a3bd";
GetSummariesResponseRecord.init();
return GetSummariesResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.GetSummariesResponseRecord = GetSummariesResponseRecord;

});
define("Connect2_MyBookmarks_MUI.model$GetSummariesResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GetSummariesResponseRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetSummariesResponseRecordList = (function (_super) {
__extends(GetSummariesResponseRecordList, _super);
function GetSummariesResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetSummariesResponseRecordList.itemType = Connect2_MyBookmarks_MUIModel.GetSummariesResponseRecord;
return GetSummariesResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetSummariesResponseRecordList = GetSummariesResponseRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CDNList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$CDNRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CDNList = (function (_super) {
__extends(CDNList, _super);
function CDNList(defaults) {
_super.apply(this, arguments);
}
CDNList.itemType = Connect2_MyBookmarks_ISModel.CDNRec;
return CDNList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CDNList = CDNList;

});
define("Connect2_MyBookmarks_MUI.model$APIM_CommonHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "Connect2_MyBookmarks_MUI.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecord = (function (_super) {
__extends(APIM_CommonHeaderRecord, _super);
function APIM_CommonHeaderRecord(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecord.attributesToDeclare = function () {
return [
this.attr("APIM_CommonHeader", "aPIM_CommonHeaderAttr", "APIM_CommonHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIUtilitiesLibModel.APIM_CommonHeaderRec());
}, true, APIUtilitiesLibModel.APIM_CommonHeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
APIM_CommonHeaderRecord.fromStructure = function (str) {
return new APIM_CommonHeaderRecord(new APIM_CommonHeaderRecord.RecordClass({
aPIM_CommonHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
APIM_CommonHeaderRecord._isAnonymousRecord = true;
APIM_CommonHeaderRecord.UniqueId = "5dc44aad-4907-be05-45c7-1d99f5a99386";
APIM_CommonHeaderRecord.init();
return APIM_CommonHeaderRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.APIM_CommonHeaderRecord = APIM_CommonHeaderRecord;

});
define("Connect2_MyBookmarks_MUI.model$APIM_CommonHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$APIM_CommonHeaderRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecordList = (function (_super) {
__extends(APIM_CommonHeaderRecordList, _super);
function APIM_CommonHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecordList.itemType = Connect2_MyBookmarks_MUIModel.APIM_CommonHeaderRecord;
return APIM_CommonHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.APIM_CommonHeaderRecordList = APIM_CommonHeaderRecordList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityHouseholdsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRecord = (function (_super) {
__extends(LocalityHouseholdsItemRecord, _super);
function LocalityHouseholdsItemRecord(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRecord.attributesToDeclare = function () {
return [
this.attr("LocalityHouseholdsItem", "localityHouseholdsItemAttr", "LocalityHouseholdsItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityHouseholdsItemRec());
}, true, Connect2_LegacySharedModel.LocalityHouseholdsItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsItemRecord.fromStructure = function (str) {
return new LocalityHouseholdsItemRecord(new LocalityHouseholdsItemRecord.RecordClass({
localityHouseholdsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityHouseholdsItemRecord._isAnonymousRecord = true;
LocalityHouseholdsItemRecord.UniqueId = "0a65ad3f-8ebb-cdea-b78b-ada7665f83ff";
LocalityHouseholdsItemRecord.init();
return LocalityHouseholdsItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LocalityHouseholdsItemRecord = LocalityHouseholdsItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_ObjectTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeList = (function (_super) {
__extends(MyBookmarks_ObjectTypeList, _super);
function MyBookmarks_ObjectTypeList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeList.itemType = Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec;
return MyBookmarks_ObjectTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MyBookmarks_ObjectTypeList = MyBookmarks_ObjectTypeList;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemRecord = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemRecord, _super);
function CommunityBusinessCarouselPreloadedItemRecord(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemRecord.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessCarouselPreloadedItem", "communityBusinessCarouselPreloadedItemAttr", "CommunityBusinessCarouselPreloadedItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec());
}, true, Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadedItemRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessCarouselPreloadedItemRecord.fromStructure = function (str) {
return new CommunityBusinessCarouselPreloadedItemRecord(new CommunityBusinessCarouselPreloadedItemRecord.RecordClass({
communityBusinessCarouselPreloadedItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessCarouselPreloadedItemRecord._isAnonymousRecord = true;
CommunityBusinessCarouselPreloadedItemRecord.UniqueId = "5dfec7a8-b6e2-d362-474b-2c6b0ab93fbb";
CommunityBusinessCarouselPreloadedItemRecord.init();
return CommunityBusinessCarouselPreloadedItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadedItemRecord = CommunityBusinessCarouselPreloadedItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadedItemRecordList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadedItemRecordList, _super);
function CommunityBusinessCarouselPreloadedItemRecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadedItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadedItemRecord;
return CommunityBusinessCarouselPreloadedItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadedItemRecordList = CommunityBusinessCarouselPreloadedItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LongIntegerList = LongIntegerList;

});
define("Connect2_MyBookmarks_MUI.model$OneSchoolGlobalRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$OneSchoolGlobalRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OneSchoolGlobalRecord = (function (_super) {
__extends(OneSchoolGlobalRecord, _super);
function OneSchoolGlobalRecord(defaults) {
_super.apply(this, arguments);
}
OneSchoolGlobalRecord.attributesToDeclare = function () {
return [
this.attr("OneSchoolGlobal", "oneSchoolGlobalAttr", "OneSchoolGlobal", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.OneSchoolGlobalRec());
}, true, Connect2_MyBookmarks_ISModel.OneSchoolGlobalRec)
].concat(_super.attributesToDeclare.call(this));
};
OneSchoolGlobalRecord.fromStructure = function (str) {
return new OneSchoolGlobalRecord(new OneSchoolGlobalRecord.RecordClass({
oneSchoolGlobalAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OneSchoolGlobalRecord._isAnonymousRecord = true;
OneSchoolGlobalRecord.UniqueId = "ee70948e-a50a-0291-4b9e-610282abfb0a";
OneSchoolGlobalRecord.init();
return OneSchoolGlobalRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.OneSchoolGlobalRecord = OneSchoolGlobalRecord;

});
define("Connect2_MyBookmarks_MUI.model$OneSchoolGlobalRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$OneSchoolGlobalRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OneSchoolGlobalRecordList = (function (_super) {
__extends(OneSchoolGlobalRecordList, _super);
function OneSchoolGlobalRecordList(defaults) {
_super.apply(this, arguments);
}
OneSchoolGlobalRecordList.itemType = Connect2_MyBookmarks_MUIModel.OneSchoolGlobalRecord;
return OneSchoolGlobalRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.OneSchoolGlobalRecordList = OneSchoolGlobalRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SpouseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SpouseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpouseRecord = (function (_super) {
__extends(SpouseRecord, _super);
function SpouseRecord(defaults) {
_super.apply(this, arguments);
}
SpouseRecord.attributesToDeclare = function () {
return [
this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SpouseRec());
}, true, APIDomain_Directory_ISModel.SpouseRec)
].concat(_super.attributesToDeclare.call(this));
};
SpouseRecord.fromStructure = function (str) {
return new SpouseRecord(new SpouseRecord.RecordClass({
spouseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpouseRecord._isAnonymousRecord = true;
SpouseRecord.UniqueId = "2951b8ee-54c1-e6a9-6ae3-32884c27e410";
SpouseRecord.init();
return SpouseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SpouseRecord = SpouseRecord;

});
define("Connect2_MyBookmarks_MUI.model$SpouseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SpouseRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpouseRecordList = (function (_super) {
__extends(SpouseRecordList, _super);
function SpouseRecordList(defaults) {
_super.apply(this, arguments);
}
SpouseRecordList.itemType = Connect2_MyBookmarks_MUIModel.SpouseRecord;
return SpouseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SpouseRecordList = SpouseRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DropdownItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DropdownItemRecord = DropdownItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$DropdownItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DropdownItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownItemRecordList = (function (_super) {
__extends(DropdownItemRecordList, _super);
function DropdownItemRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.DropdownItemRecord;
return DropdownItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownItemRecordList = DropdownItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRecord = (function (_super) {
__extends(PhotoDetailsRecord, _super);
function PhotoDetailsRecord(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRecord.attributesToDeclare = function () {
return [
this.attr("PhotoDetails", "photoDetailsAttr", "PhotoDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.PhotoDetailsRec());
}, true, Connect2_MyBookmarks_ISModel.PhotoDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoDetailsRecord.fromStructure = function (str) {
return new PhotoDetailsRecord(new PhotoDetailsRecord.RecordClass({
photoDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoDetailsRecord._isAnonymousRecord = true;
PhotoDetailsRecord.UniqueId = "0ed98616-7a81-527b-25bb-07fcbdb2d01d";
PhotoDetailsRecord.init();
return PhotoDetailsRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.PhotoDetailsRecord = PhotoDetailsRecord;

});
define("Connect2_MyBookmarks_MUI.model$MonthYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MonthYearRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.MonthYearRecord = MonthYearRecord;

});
define("Connect2_MyBookmarks_MUI.model$MonthYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MonthYearRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MonthYearRecordList = (function (_super) {
__extends(MonthYearRecordList, _super);
function MonthYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthYearRecordList.itemType = Connect2_MyBookmarks_MUIModel.MonthYearRecord;
return MonthYearRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MonthYearRecordList = MonthYearRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ConnectConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ConnectConfigRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ConnectConfigRecord = (function (_super) {
__extends(ConnectConfigRecord, _super);
function ConnectConfigRecord(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRecord.attributesToDeclare = function () {
return [
this.attr("ConnectConfig", "connectConfigAttr", "ConnectConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ConnectConfigRec());
}, true, APIDomain_Directory_ISModel.ConnectConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ConnectConfigRecord.fromStructure = function (str) {
return new ConnectConfigRecord(new ConnectConfigRecord.RecordClass({
connectConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConnectConfigRecord._isAnonymousRecord = true;
ConnectConfigRecord.UniqueId = "102f7240-4699-1795-0378-75c37cf47e99";
ConnectConfigRecord.init();
return ConnectConfigRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ConnectConfigRecord = ConnectConfigRecord;

});
define("Connect2_MyBookmarks_MUI.model$AnimationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AnimationTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("Connect2_MyBookmarks_MUI.model$AnimationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$AnimationTypeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.itemType = Connect2_MyBookmarks_MUIModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$FlatpickrConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$FlatpickrConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.FlatpickrConfigsRecord = FlatpickrConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$GetSummariesResponseList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$GetSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetSummariesResponseList = (function (_super) {
__extends(GetSummariesResponseList, _super);
function GetSummariesResponseList(defaults) {
_super.apply(this, arguments);
}
GetSummariesResponseList.itemType = Connect2_MyBookmarks_ISModel.GetSummariesResponseRec;
return GetSummariesResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetSummariesResponseList = GetSummariesResponseList;

});
define("Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadedItemList = (function (_super) {
__extends(HouseholdCarouselPreloadedItemList, _super);
function HouseholdCarouselPreloadedItemList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadedItemList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec;
return HouseholdCarouselPreloadedItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadedItemList = HouseholdCarouselPreloadedItemList;

});
define("Connect2_MyBookmarks_MUI.model$OneSchoolGlobalList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$OneSchoolGlobalRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OneSchoolGlobalList = (function (_super) {
__extends(OneSchoolGlobalList, _super);
function OneSchoolGlobalList(defaults) {
_super.apply(this, arguments);
}
OneSchoolGlobalList.itemType = Connect2_MyBookmarks_ISModel.OneSchoolGlobalRec;
return OneSchoolGlobalList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.OneSchoolGlobalList = OneSchoolGlobalList;

});
define("Connect2_MyBookmarks_MUI.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MenuActionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.MenuActionRecord = MenuActionRecord;

});
define("Connect2_MyBookmarks_MUI.model$DropdownOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsList = (function (_super) {
__extends(DropdownOptionalConfigsList, _super);
function DropdownOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownOptionalConfigsRec;
return DropdownOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownOptionalConfigsList = DropdownOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$ExtensionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ExtensionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ExtensionRecord = (function (_super) {
__extends(ExtensionRecord, _super);
function ExtensionRecord(defaults) {
_super.apply(this, arguments);
}
ExtensionRecord.attributesToDeclare = function () {
return [
this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ExtensionRec());
}, true, APIDomain_Directory_ISModel.ExtensionRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionRecord.fromStructure = function (str) {
return new ExtensionRecord(new ExtensionRecord.RecordClass({
extensionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtensionRecord._isAnonymousRecord = true;
ExtensionRecord.UniqueId = "2f628101-99f9-bea6-abdb-ea7bac9b6c95";
ExtensionRecord.init();
return ExtensionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ExtensionRecord = ExtensionRecord;

});
define("Connect2_MyBookmarks_MUI.model$ExtensionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ExtensionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ExtensionRecordList = (function (_super) {
__extends(ExtensionRecordList, _super);
function ExtensionRecordList(defaults) {
_super.apply(this, arguments);
}
ExtensionRecordList.itemType = Connect2_MyBookmarks_MUIModel.ExtensionRecord;
return ExtensionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ExtensionRecordList = ExtensionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$MonthOrderYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MonthOrderYearRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearList = (function (_super) {
__extends(MonthOrderYearList, _super);
function MonthOrderYearList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearList.itemType = OutSystemsUI_2_23Model.MonthOrderYearRec;
return MonthOrderYearList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MonthOrderYearList = MonthOrderYearList;

});
define("Connect2_MyBookmarks_MUI.model$ResultListTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$ResultListTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ResultListTypeRecord = (function (_super) {
__extends(ResultListTypeRecord, _super);
function ResultListTypeRecord(defaults) {
_super.apply(this, arguments);
}
ResultListTypeRecord.attributesToDeclare = function () {
return [
this.attr("ResultListType", "resultListTypeAttr", "ResultListType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ResultListTypeRec());
}, true, Connect2_LegacySharedModel.ResultListTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ResultListTypeRecord.fromStructure = function (str) {
return new ResultListTypeRecord(new ResultListTypeRecord.RecordClass({
resultListTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResultListTypeRecord._isAnonymousRecord = true;
ResultListTypeRecord.UniqueId = "1727d670-aab8-02be-6977-7527394b45ff";
ResultListTypeRecord.init();
return ResultListTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ResultListTypeRecord = ResultListTypeRecord;

});
define("Connect2_MyBookmarks_MUI.model$NotificationOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$NotificationOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsList = (function (_super) {
__extends(NotificationOptionalConfigsList, _super);
function NotificationOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsList.itemType = OutSystemsUI_2_23Model.NotificationOptionalConfigsRec;
return NotificationOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.NotificationOptionalConfigsList = NotificationOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$GetCountriesBySubscriptionIdList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$GetCountriesBySubscriptionIdRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetCountriesBySubscriptionIdList = (function (_super) {
__extends(GetCountriesBySubscriptionIdList, _super);
function GetCountriesBySubscriptionIdList(defaults) {
_super.apply(this, arguments);
}
GetCountriesBySubscriptionIdList.itemType = APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec;
return GetCountriesBySubscriptionIdList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetCountriesBySubscriptionIdList = GetCountriesBySubscriptionIdList;

});
define("Connect2_MyBookmarks_MUI.model$SpeedRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SpeedRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SpeedRecord = SpeedRecord;

});
define("Connect2_MyBookmarks_MUI.model$SpeedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SpeedRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.itemType = Connect2_MyBookmarks_MUIModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SpeedRecordList = SpeedRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GradientRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$GradientRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.GradientRecord = GradientRecord;

});
define("Connect2_MyBookmarks_MUI.model$PolicyActivationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$PolicyActivationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PolicyActivationRecordList = (function (_super) {
__extends(PolicyActivationRecordList, _super);
function PolicyActivationRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyActivationRecordList.itemType = Connect2_MyBookmarks_MUIModel.PolicyActivationRecord;
return PolicyActivationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PolicyActivationRecordList = PolicyActivationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubscribedRegionItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubscribedRegionItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubscribedRegionItemRecord = (function (_super) {
__extends(SubscribedRegionItemRecord, _super);
function SubscribedRegionItemRecord(defaults) {
_super.apply(this, arguments);
}
SubscribedRegionItemRecord.attributesToDeclare = function () {
return [
this.attr("SubscribedRegionItem", "subscribedRegionItemAttr", "SubscribedRegionItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubscribedRegionItemRec());
}, true, APIDomain_Directory_ISModel.SubscribedRegionItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscribedRegionItemRecord.fromStructure = function (str) {
return new SubscribedRegionItemRecord(new SubscribedRegionItemRecord.RecordClass({
subscribedRegionItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscribedRegionItemRecord._isAnonymousRecord = true;
SubscribedRegionItemRecord.UniqueId = "1921ca2f-d18a-3f6d-6b70-956d59ff6afa";
SubscribedRegionItemRecord.init();
return SubscribedRegionItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SubscribedRegionItemRecord = SubscribedRegionItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$AlertList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AlertRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AlertList = (function (_super) {
__extends(AlertList, _super);
function AlertList(defaults) {
_super.apply(this, arguments);
}
AlertList.itemType = OutSystemsUI_2_23Model.AlertRec;
return AlertList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AlertList = AlertList;

});
define("Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingList = (function (_super) {
__extends(HouseholdCarouselPreloadingList, _super);
function HouseholdCarouselPreloadingList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec;
return HouseholdCarouselPreloadingList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadingList = HouseholdCarouselPreloadingList;

});
define("Connect2_MyBookmarks_MUI.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ColorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUI_2_23Model.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ColorList = ColorList;

});
define("Connect2_MyBookmarks_MUI.model$SplideConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SplideConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SplideConfigsRecord = SplideConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$SplideConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SplideConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsRecordList = (function (_super) {
__extends(SplideConfigsRecordList, _super);
function SplideConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.SplideConfigsRecord;
return SplideConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SplideConfigsRecordList = SplideConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerRangeOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsList, _super);
function DatePickerRangeOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DatePickerRangeOptionalConfigsRec;
return DatePickerRangeOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerRangeOptionalConfigsList = DatePickerRangeOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$DetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$DetailItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DetailItemRecord = (function (_super) {
__extends(DetailItemRecord, _super);
function DetailItemRecord(defaults) {
_super.apply(this, arguments);
}
DetailItemRecord.attributesToDeclare = function () {
return [
this.attr("DetailItem", "detailItemAttr", "DetailItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DetailItemRec());
}, true, APIDomain_Directory_ISModel.DetailItemRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailItemRecord.fromStructure = function (str) {
return new DetailItemRecord(new DetailItemRecord.RecordClass({
detailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailItemRecord._isAnonymousRecord = true;
DetailItemRecord.UniqueId = "21139b78-aae6-baae-441d-3bf905184a63";
DetailItemRecord.init();
return DetailItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.DetailItemRecord = DetailItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$DetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DetailItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DetailItemRecordList = (function (_super) {
__extends(DetailItemRecordList, _super);
function DetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DetailItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.DetailItemRecord;
return DetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DetailItemRecordList = DetailItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SpaceRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpaceList = (function (_super) {
__extends(SpaceList, _super);
function SpaceList(defaults) {
_super.apply(this, arguments);
}
SpaceList.itemType = OutSystemsUI_2_23Model.SpaceRec;
return SpaceList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SpaceList = SpaceList;

});
define("Connect2_MyBookmarks_MUI.model$AddBookmarkRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$AddBookmarkRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AddBookmarkRecord = (function (_super) {
__extends(AddBookmarkRecord, _super);
function AddBookmarkRecord(defaults) {
_super.apply(this, arguments);
}
AddBookmarkRecord.attributesToDeclare = function () {
return [
this.attr("AddBookmark", "addBookmarkAttr", "AddBookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.AddBookmarkRec());
}, true, Connect2_MyBookmarks_ISModel.AddBookmarkRec)
].concat(_super.attributesToDeclare.call(this));
};
AddBookmarkRecord.fromStructure = function (str) {
return new AddBookmarkRecord(new AddBookmarkRecord.RecordClass({
addBookmarkAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AddBookmarkRecord._isAnonymousRecord = true;
AddBookmarkRecord.UniqueId = "2162b4a7-d578-071e-d217-695e94b1bc29";
AddBookmarkRecord.init();
return AddBookmarkRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.AddBookmarkRecord = AddBookmarkRecord;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerLanguageRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DatePickerLanguageRecord = DatePickerLanguageRecord;

});
define("Connect2_MyBookmarks_MUI.model$OrientationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$OrientationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.OrientationRecord = OrientationRecord;

});
define("Connect2_MyBookmarks_MUI.model$OrientationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$OrientationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OrientationRecordList = (function (_super) {
__extends(OrientationRecordList, _super);
function OrientationRecordList(defaults) {
_super.apply(this, arguments);
}
OrientationRecordList.itemType = Connect2_MyBookmarks_MUIModel.OrientationRecord;
return OrientationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.OrientationRecordList = OrientationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SpeedList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SpeedRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.itemType = OutSystemsUI_2_23Model.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SpeedList = SpeedList;

});
define("Connect2_MyBookmarks_MUI.model$GetGroupSummariesResponseList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$GetGroupSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetGroupSummariesResponseList = (function (_super) {
__extends(GetGroupSummariesResponseList, _super);
function GetGroupSummariesResponseList(defaults) {
_super.apply(this, arguments);
}
GetGroupSummariesResponseList.itemType = Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec;
return GetGroupSummariesResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetGroupSummariesResponseList = GetGroupSummariesResponseList;

});
define("Connect2_MyBookmarks_MUI.model$AccordionIconPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AccordionIconPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.AccordionIconPositionRecord = AccordionIconPositionRecord;

});
define("Connect2_MyBookmarks_MUI.model$AccordionIconPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$AccordionIconPositionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionRecordList = (function (_super) {
__extends(AccordionIconPositionRecordList, _super);
function AccordionIconPositionRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionRecordList.itemType = Connect2_MyBookmarks_MUIModel.AccordionIconPositionRecord;
return AccordionIconPositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AccordionIconPositionRecordList = AccordionIconPositionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$StackedCardsPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$StackedCardsPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.StackedCardsPositionRecord = StackedCardsPositionRecord;

});
define("Connect2_MyBookmarks_MUI.model$ContactPopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_MyBookmarks_MUI.model", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils"], function (exports, OutSystems, UBTConnect_UtilsModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ContactPopupDataRecord = (function (_super) {
__extends(ContactPopupDataRecord, _super);
function ContactPopupDataRecord(defaults) {
_super.apply(this, arguments);
}
ContactPopupDataRecord.attributesToDeclare = function () {
return [
this.attr("ContactPopupData", "contactPopupDataAttr", "ContactPopupData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
}, true, UBTConnect_UtilsModel.ContactPopupDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopupDataRecord.fromStructure = function (str) {
return new ContactPopupDataRecord(new ContactPopupDataRecord.RecordClass({
contactPopupDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactPopupDataRecord._isAnonymousRecord = true;
ContactPopupDataRecord.UniqueId = "38712f2e-67bf-7c5e-1879-85b5070e6b5f";
ContactPopupDataRecord.init();
return ContactPopupDataRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ContactPopupDataRecord = ContactPopupDataRecord;

});
define("Connect2_MyBookmarks_MUI.model$ContactPopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ContactPopupDataRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ContactPopupDataRecordList = (function (_super) {
__extends(ContactPopupDataRecordList, _super);
function ContactPopupDataRecordList(defaults) {
_super.apply(this, arguments);
}
ContactPopupDataRecordList.itemType = Connect2_MyBookmarks_MUIModel.ContactPopupDataRecord;
return ContactPopupDataRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ContactPopupDataRecordList = ContactPopupDataRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRecord = (function (_super) {
__extends(SubdivisionExtendedRecord, _super);
function SubdivisionExtendedRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionExtended", "subdivisionExtendedAttr", "SubdivisionExtended", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionExtendedRec());
}, true, Connect2_LegacySharedModel.SubdivisionExtendedRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionExtendedRecord.fromStructure = function (str) {
return new SubdivisionExtendedRecord(new SubdivisionExtendedRecord.RecordClass({
subdivisionExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionExtendedRecord._isAnonymousRecord = true;
SubdivisionExtendedRecord.UniqueId = "248396bb-674f-a463-d311-7d043b091947";
SubdivisionExtendedRecord.init();
return SubdivisionExtendedRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SubdivisionExtendedRecord = SubdivisionExtendedRecord;

});
define("Connect2_MyBookmarks_MUI.model$DetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$DetailItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DetailItemList = (function (_super) {
__extends(DetailItemList, _super);
function DetailItemList(defaults) {
_super.apply(this, arguments);
}
DetailItemList.itemType = APIDomain_Directory_ISModel.DetailItemRec;
return DetailItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DetailItemList = DetailItemList;

});
define("Connect2_MyBookmarks_MUI.model$MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$MemberRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MemberRecord = (function (_super) {
__extends(MemberRecord, _super);
function MemberRecord(defaults) {
_super.apply(this, arguments);
}
MemberRecord.attributesToDeclare = function () {
return [
this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.MemberRec());
}, true, APIDomain_Directory_ISModel.MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
MemberRecord.fromStructure = function (str) {
return new MemberRecord(new MemberRecord.RecordClass({
memberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemberRecord._isAnonymousRecord = true;
MemberRecord.UniqueId = "e80aede2-6a26-4d55-fb4a-cc4adf664f2d";
MemberRecord.init();
return MemberRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.MemberRecord = MemberRecord;

});
define("Connect2_MyBookmarks_MUI.model$MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MemberRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MemberRecordList = (function (_super) {
__extends(MemberRecordList, _super);
function MemberRecordList(defaults) {
_super.apply(this, arguments);
}
MemberRecordList.itemType = Connect2_MyBookmarks_MUIModel.MemberRecord;
return MemberRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MemberRecordList = MemberRecordList;

});
define("Connect2_MyBookmarks_MUI.model$NoUiSliderConfigs_RangeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeList = (function (_super) {
__extends(NoUiSliderConfigs_RangeList, _super);
function NoUiSliderConfigs_RangeList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeList.itemType = OutSystemsUI_2_23Model.NoUiSliderConfigs_RangeRec;
return NoUiSliderConfigs_RangeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.NoUiSliderConfigs_RangeList = NoUiSliderConfigs_RangeList;

});
define("Connect2_MyBookmarks_MUI.model$NoUiSliderConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$NoUiSliderConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.NoUiSliderConfigsRecord = NoUiSliderConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$FloatingPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$FloatingPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.FloatingPositionRecord = FloatingPositionRecord;

});
define("Connect2_MyBookmarks_MUI.model$FloatingPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$FloatingPositionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var FloatingPositionRecordList = (function (_super) {
__extends(FloatingPositionRecordList, _super);
function FloatingPositionRecordList(defaults) {
_super.apply(this, arguments);
}
FloatingPositionRecordList.itemType = Connect2_MyBookmarks_MUIModel.FloatingPositionRecord;
return FloatingPositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.FloatingPositionRecordList = FloatingPositionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRecord = (function (_super) {
__extends(SubdivisionsItemRecord, _super);
function SubdivisionsItemRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionsItem", "subdivisionsItemAttr", "SubdivisionsItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionsItemRec());
}, true, Connect2_LegacySharedModel.SubdivisionsItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionsItemRecord.fromStructure = function (str) {
return new SubdivisionsItemRecord(new SubdivisionsItemRecord.RecordClass({
subdivisionsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionsItemRecord._isAnonymousRecord = true;
SubdivisionsItemRecord.UniqueId = "28142865-55f2-2039-3ef9-4835efca9c66";
SubdivisionsItemRecord.init();
return SubdivisionsItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SubdivisionsItemRecord = SubdivisionsItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$BulkActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$BulkActionsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.BulkActionsRecord = BulkActionsRecord;

});
define("Connect2_MyBookmarks_MUI.model$SubscribedRegionItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubscribedRegionItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubscribedRegionItemList = (function (_super) {
__extends(SubscribedRegionItemList, _super);
function SubscribedRegionItemList(defaults) {
_super.apply(this, arguments);
}
SubscribedRegionItemList.itemType = APIDomain_Directory_ISModel.SubscribedRegionItemRec;
return SubscribedRegionItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubscribedRegionItemList = SubscribedRegionItemList;

});
define("Connect2_MyBookmarks_MUI.model$CountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CountryList = (function (_super) {
__extends(CountryList, _super);
function CountryList(defaults) {
_super.apply(this, arguments);
}
CountryList.itemType = APIDomain_Directory_ISModel.CountryRec;
return CountryList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CountryList = CountryList;

});
define("Connect2_MyBookmarks_MUI.model$SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubscriptionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubscriptionRecord = (function (_super) {
__extends(SubscriptionRecord, _super);
function SubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
SubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubscriptionRec());
}, true, APIDomain_Directory_ISModel.SubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionRecord.fromStructure = function (str) {
return new SubscriptionRecord(new SubscriptionRecord.RecordClass({
subscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscriptionRecord._isAnonymousRecord = true;
SubscriptionRecord.UniqueId = "f464bee9-2374-b4c4-ec54-7f38fcbc899d";
SubscriptionRecord.init();
return SubscriptionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SubscriptionRecord = SubscriptionRecord;

});
define("Connect2_MyBookmarks_MUI.model$SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SubscriptionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubscriptionRecordList = (function (_super) {
__extends(SubscriptionRecordList, _super);
function SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
SubscriptionRecordList.itemType = Connect2_MyBookmarks_MUIModel.SubscriptionRecord;
return SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubscriptionRecordList = SubscriptionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$GutterSizeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUI_2_23Model.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GutterSizeList = GutterSizeList;

});
define("Connect2_MyBookmarks_MUI.model$TagRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$TagRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TagRecord = (function (_super) {
__extends(TagRecord, _super);
function TagRecord(defaults) {
_super.apply(this, arguments);
}
TagRecord.attributesToDeclare = function () {
return [
this.attr("Tag", "tagAttr", "Tag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TagRec());
}, true, Connect2_LegacySharedModel.TagRec)
].concat(_super.attributesToDeclare.call(this));
};
TagRecord.fromStructure = function (str) {
return new TagRecord(new TagRecord.RecordClass({
tagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TagRecord._isAnonymousRecord = true;
TagRecord.UniqueId = "8af9eea0-f56d-3d06-32fd-7ee9ac8f14fe";
TagRecord.init();
return TagRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.TagRecord = TagRecord;

});
define("Connect2_MyBookmarks_MUI.model$TagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$TagRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TagRecordList = (function (_super) {
__extends(TagRecordList, _super);
function TagRecordList(defaults) {
_super.apply(this, arguments);
}
TagRecordList.itemType = Connect2_MyBookmarks_MUIModel.TagRecord;
return TagRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TagRecordList = TagRecordList;

});
define("Connect2_MyBookmarks_MUI.model$Directory_CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Directory_CDNRecord = (function (_super) {
__extends(Directory_CDNRecord, _super);
function Directory_CDNRecord(defaults) {
_super.apply(this, arguments);
}
Directory_CDNRecord.attributesToDeclare = function () {
return [
this.attr("Directory_CDN", "directory_CDNAttr", "Directory_CDN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CDNRec());
}, true, APIDomain_Directory_ISModel.Directory_CDNRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_CDNRecord.fromStructure = function (str) {
return new Directory_CDNRecord(new Directory_CDNRecord.RecordClass({
directory_CDNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_CDNRecord._isAnonymousRecord = true;
Directory_CDNRecord.UniqueId = "ec2fcf22-c891-8e93-ddf0-a8ea0d45dbd4";
Directory_CDNRecord.init();
return Directory_CDNRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.Directory_CDNRecord = Directory_CDNRecord;

});
define("Connect2_MyBookmarks_MUI.model$Directory_CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$Directory_CDNRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Directory_CDNRecordList = (function (_super) {
__extends(Directory_CDNRecordList, _super);
function Directory_CDNRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_CDNRecordList.itemType = Connect2_MyBookmarks_MUIModel.Directory_CDNRecord;
return Directory_CDNRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Directory_CDNRecordList = Directory_CDNRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoStateList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VideoStateRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VideoStateList = (function (_super) {
__extends(VideoStateList, _super);
function VideoStateList(defaults) {
_super.apply(this, arguments);
}
VideoStateList.itemType = OutSystemsUI_2_23Model.VideoStateRec;
return VideoStateList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VideoStateList = VideoStateList;

});
define("Connect2_MyBookmarks_MUI.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("Connect2_MyBookmarks_MUI.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ErrorMessageRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = Connect2_MyBookmarks_MUIModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselItemsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.CarouselItemsRecord = CarouselItemsRecord;

});
define("Connect2_MyBookmarks_MUI.model$AccordionIconTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AccordionIconTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.AccordionIconTypeRecord = AccordionIconTypeRecord;

});
define("Connect2_MyBookmarks_MUI.model$AccordionIconTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$AccordionIconTypeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AccordionIconTypeRecordList = (function (_super) {
__extends(AccordionIconTypeRecordList, _super);
function AccordionIconTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AccordionIconTypeRecordList.itemType = Connect2_MyBookmarks_MUIModel.AccordionIconTypeRecord;
return AccordionIconTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AccordionIconTypeRecordList = AccordionIconTypeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SpouseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SpouseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpouseList = (function (_super) {
__extends(SpouseList, _super);
function SpouseList(defaults) {
_super.apply(this, arguments);
}
SpouseList.itemType = APIDomain_Directory_ISModel.SpouseRec;
return SpouseList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SpouseList = SpouseList;

});
define("Connect2_MyBookmarks_MUI.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUI_2_23Model.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ErrorMessageList = ErrorMessageList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SubdivisionsItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemRecordList = (function (_super) {
__extends(SubdivisionsItemRecordList, _super);
function SubdivisionsItemRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.SubdivisionsItemRecord;
return SubdivisionsItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionsItemRecordList = SubdivisionsItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingRecord = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingRecord, _super);
function CommunityBusinessCarouselPreloadingRecord(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingRecord.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessCarouselPreloading", "communityBusinessCarouselPreloadingAttr", "CommunityBusinessCarouselPreloading", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec());
}, true, Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessCarouselPreloadingRecord.fromStructure = function (str) {
return new CommunityBusinessCarouselPreloadingRecord(new CommunityBusinessCarouselPreloadingRecord.RecordClass({
communityBusinessCarouselPreloadingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessCarouselPreloadingRecord._isAnonymousRecord = true;
CommunityBusinessCarouselPreloadingRecord.UniqueId = "2d518419-9bd0-f684-7aec-5bce682e6b24";
CommunityBusinessCarouselPreloadingRecord.init();
return CommunityBusinessCarouselPreloadingRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadingRecord = CommunityBusinessCarouselPreloadingRecord;

});
define("Connect2_MyBookmarks_MUI.model$MonthRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MonthRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.MonthRecord = MonthRecord;

});
define("Connect2_MyBookmarks_MUI.model$RoleItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$RoleItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var RoleItemRecord = (function (_super) {
__extends(RoleItemRecord, _super);
function RoleItemRecord(defaults) {
_super.apply(this, arguments);
}
RoleItemRecord.attributesToDeclare = function () {
return [
this.attr("RoleItem", "roleItemAttr", "RoleItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.RoleItemRec());
}, true, APIDomain_Directory_ISModel.RoleItemRec)
].concat(_super.attributesToDeclare.call(this));
};
RoleItemRecord.fromStructure = function (str) {
return new RoleItemRecord(new RoleItemRecord.RecordClass({
roleItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RoleItemRecord._isAnonymousRecord = true;
RoleItemRecord.UniqueId = "980a77b3-9862-6d8b-f223-f418a93bde51";
RoleItemRecord.init();
return RoleItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.RoleItemRecord = RoleItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$RoleItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$RoleItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var RoleItemRecordList = (function (_super) {
__extends(RoleItemRecordList, _super);
function RoleItemRecordList(defaults) {
_super.apply(this, arguments);
}
RoleItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.RoleItemRecord;
return RoleItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.RoleItemRecordList = RoleItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BooleanTypesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$BooleanTypesRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.BooleanTypesRecord = BooleanTypesRecord;

});
define("Connect2_MyBookmarks_MUI.model$DropdownOptionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionList = (function (_super) {
__extends(DropdownOptionList, _super);
function DropdownOptionList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionList.itemType = OutSystemsUI_2_23Model.DropdownOptionRec;
return DropdownOptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownOptionList = DropdownOptionList;

});
define("Connect2_MyBookmarks_MUI.model$AddBookmarkList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$AddBookmarkRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AddBookmarkList = (function (_super) {
__extends(AddBookmarkList, _super);
function AddBookmarkList(defaults) {
_super.apply(this, arguments);
}
AddBookmarkList.itemType = Connect2_MyBookmarks_ISModel.AddBookmarkRec;
return AddBookmarkList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AddBookmarkList = AddBookmarkList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoTagList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$PhotoTagRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoTagList = (function (_super) {
__extends(PhotoTagList, _super);
function PhotoTagList(defaults) {
_super.apply(this, arguments);
}
PhotoTagList.itemType = APIDomain_Directory_ISModel.PhotoTagRec;
return PhotoTagList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoTagList = PhotoTagList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubdivisionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionRecord = (function (_super) {
__extends(SubdivisionRecord, _super);
function SubdivisionRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionRecord.attributesToDeclare = function () {
return [
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubdivisionRec());
}, true, APIDomain_Directory_ISModel.SubdivisionRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionRecord.fromStructure = function (str) {
return new SubdivisionRecord(new SubdivisionRecord.RecordClass({
subdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionRecord._isAnonymousRecord = true;
SubdivisionRecord.UniqueId = "326a465d-a961-7533-0340-7b556923bc4e";
SubdivisionRecord.init();
return SubdivisionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SubdivisionRecord = SubdivisionRecord;

});
define("Connect2_MyBookmarks_MUI.model$MemoryCacheResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_MyBookmarks_MUI.model", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecord = (function (_super) {
__extends(MemoryCacheResultRecord, _super);
function MemoryCacheResultRecord(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecord.attributesToDeclare = function () {
return [
this.attr("MemoryCacheResult", "memoryCacheResultAttr", "MemoryCacheResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheResultRec());
}, true, MemoryClientCacheModel.MemoryCacheResultRec)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheResultRecord.fromStructure = function (str) {
return new MemoryCacheResultRecord(new MemoryCacheResultRecord.RecordClass({
memoryCacheResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheResultRecord._isAnonymousRecord = true;
MemoryCacheResultRecord.UniqueId = "9c1b9e17-cba5-5973-e862-979a81a4f983";
MemoryCacheResultRecord.init();
return MemoryCacheResultRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.MemoryCacheResultRecord = MemoryCacheResultRecord;

});
define("Connect2_MyBookmarks_MUI.model$MemoryCacheResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MemoryCacheResultRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecordList = (function (_super) {
__extends(MemoryCacheResultRecordList, _super);
function MemoryCacheResultRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecordList.itemType = Connect2_MyBookmarks_MUIModel.MemoryCacheResultRecord;
return MemoryCacheResultRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MemoryCacheResultRecordList = MemoryCacheResultRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DropdownTagsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DropdownTagsOptionalConfigsRecord = DropdownTagsOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$Connect_EntityRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_MyBookmarks_MUI.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Connect_EntityRecord = (function (_super) {
__extends(Connect_EntityRecord, _super);
function Connect_EntityRecord(defaults) {
_super.apply(this, arguments);
}
Connect_EntityRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Entity", "connect_EntityAttr", "Connect_Entity", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_EntityRec());
}, true, Connect_CommonEntities_DBModel.Connect_EntityRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_EntityRecord.fromStructure = function (str) {
return new Connect_EntityRecord(new Connect_EntityRecord.RecordClass({
connect_EntityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_EntityRecord._isAnonymousRecord = true;
Connect_EntityRecord.UniqueId = "3514ce6c-0a23-b49d-ae55-1b6dcb4baa9d";
Connect_EntityRecord.init();
return Connect_EntityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.Connect_EntityRecord = Connect_EntityRecord;

});
define("Connect2_MyBookmarks_MUI.model$DeviceResponsiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DeviceResponsiveRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DeviceResponsiveRecord = DeviceResponsiveRecord;

});
define("Connect2_MyBookmarks_MUI.model$GetLocalityStatisticsResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRecord = (function (_super) {
__extends(GetLocalityStatisticsResponseRecord, _super);
function GetLocalityStatisticsResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetLocalityStatisticsResponse", "getLocalityStatisticsResponseAttr", "GetLocalityStatisticsResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec());
}, true, APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalityStatisticsResponseRecord.fromStructure = function (str) {
return new GetLocalityStatisticsResponseRecord(new GetLocalityStatisticsResponseRecord.RecordClass({
getLocalityStatisticsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetLocalityStatisticsResponseRecord._isAnonymousRecord = true;
GetLocalityStatisticsResponseRecord.UniqueId = "377ab4ef-a0d2-cdcd-0077-9cbf3aecb441";
GetLocalityStatisticsResponseRecord.init();
return GetLocalityStatisticsResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.GetLocalityStatisticsResponseRecord = GetLocalityStatisticsResponseRecord;

});
define("Connect2_MyBookmarks_MUI.model$MessageStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MessageStatusRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.MessageStatusRecord = MessageStatusRecord;

});
define("Connect2_MyBookmarks_MUI.model$MessageStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MessageStatusRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MessageStatusRecordList = (function (_super) {
__extends(MessageStatusRecordList, _super);
function MessageStatusRecordList(defaults) {
_super.apply(this, arguments);
}
MessageStatusRecordList.itemType = Connect2_MyBookmarks_MUIModel.MessageStatusRecord;
return MessageStatusRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MessageStatusRecordList = MessageStatusRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GetCountriesBySubscriptionIdRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$GetCountriesBySubscriptionIdRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetCountriesBySubscriptionIdRecord = (function (_super) {
__extends(GetCountriesBySubscriptionIdRecord, _super);
function GetCountriesBySubscriptionIdRecord(defaults) {
_super.apply(this, arguments);
}
GetCountriesBySubscriptionIdRecord.attributesToDeclare = function () {
return [
this.attr("GetCountriesBySubscriptionId", "getCountriesBySubscriptionIdAttr", "GetCountriesBySubscriptionId", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec());
}, true, APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCountriesBySubscriptionIdRecord.fromStructure = function (str) {
return new GetCountriesBySubscriptionIdRecord(new GetCountriesBySubscriptionIdRecord.RecordClass({
getCountriesBySubscriptionIdAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetCountriesBySubscriptionIdRecord._isAnonymousRecord = true;
GetCountriesBySubscriptionIdRecord.UniqueId = "59d6e874-9908-ef8c-164d-9869b8c4df71";
GetCountriesBySubscriptionIdRecord.init();
return GetCountriesBySubscriptionIdRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.GetCountriesBySubscriptionIdRecord = GetCountriesBySubscriptionIdRecord;

});
define("Connect2_MyBookmarks_MUI.model$GetCountriesBySubscriptionIdRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GetCountriesBySubscriptionIdRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetCountriesBySubscriptionIdRecordList = (function (_super) {
__extends(GetCountriesBySubscriptionIdRecordList, _super);
function GetCountriesBySubscriptionIdRecordList(defaults) {
_super.apply(this, arguments);
}
GetCountriesBySubscriptionIdRecordList.itemType = Connect2_MyBookmarks_MUIModel.GetCountriesBySubscriptionIdRecord;
return GetCountriesBySubscriptionIdRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetCountriesBySubscriptionIdRecordList = GetCountriesBySubscriptionIdRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GetLocalityStatisticsResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseList = (function (_super) {
__extends(GetLocalityStatisticsResponseList, _super);
function GetLocalityStatisticsResponseList(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseList.itemType = APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec;
return GetLocalityStatisticsResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetLocalityStatisticsResponseList = GetLocalityStatisticsResponseList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkImagesByObjectTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkImagesByObjectTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkImagesByObjectTypeRecord = (function (_super) {
__extends(BookmarkImagesByObjectTypeRecord, _super);
function BookmarkImagesByObjectTypeRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkImagesByObjectTypeRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkImagesByObjectType", "bookmarkImagesByObjectTypeAttr", "BookmarkImagesByObjectType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkImagesByObjectTypeRec());
}, true, Connect2_MyBookmarks_ISModel.BookmarkImagesByObjectTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkImagesByObjectTypeRecord.fromStructure = function (str) {
return new BookmarkImagesByObjectTypeRecord(new BookmarkImagesByObjectTypeRecord.RecordClass({
bookmarkImagesByObjectTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkImagesByObjectTypeRecord._isAnonymousRecord = true;
BookmarkImagesByObjectTypeRecord.UniqueId = "bdcf96f7-490b-1ab6-f08f-d132c0121dbe";
BookmarkImagesByObjectTypeRecord.init();
return BookmarkImagesByObjectTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.BookmarkImagesByObjectTypeRecord = BookmarkImagesByObjectTypeRecord;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkImagesByObjectTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BookmarkImagesByObjectTypeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkImagesByObjectTypeRecordList = (function (_super) {
__extends(BookmarkImagesByObjectTypeRecordList, _super);
function BookmarkImagesByObjectTypeRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkImagesByObjectTypeRecordList.itemType = Connect2_MyBookmarks_MUIModel.BookmarkImagesByObjectTypeRecord;
return BookmarkImagesByObjectTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkImagesByObjectTypeRecordList = BookmarkImagesByObjectTypeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingRecord = (function (_super) {
__extends(HouseholdCarouselPreloadingRecord, _super);
function HouseholdCarouselPreloadingRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdCarouselPreloading", "householdCarouselPreloadingAttr", "HouseholdCarouselPreloading", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec());
}, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdCarouselPreloadingRecord.fromStructure = function (str) {
return new HouseholdCarouselPreloadingRecord(new HouseholdCarouselPreloadingRecord.RecordClass({
householdCarouselPreloadingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdCarouselPreloadingRecord._isAnonymousRecord = true;
HouseholdCarouselPreloadingRecord.UniqueId = "e8b31aec-a385-e7d7-39ea-50dc6bde6880";
HouseholdCarouselPreloadingRecord.init();
return HouseholdCarouselPreloadingRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadingRecord = HouseholdCarouselPreloadingRecord;

});
define("Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadingRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HouseholdCarouselPreloadingRecordList = (function (_super) {
__extends(HouseholdCarouselPreloadingRecordList, _super);
function HouseholdCarouselPreloadingRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdCarouselPreloadingRecordList.itemType = Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadingRecord;
return HouseholdCarouselPreloadingRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadingRecordList = HouseholdCarouselPreloadingRecordList;

});
define("Connect2_MyBookmarks_MUI.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TextList = TextList;

});
define("Connect2_MyBookmarks_MUI.model$VirtualSelectConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VirtualSelectConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsList = (function (_super) {
__extends(VirtualSelectConfigsList, _super);
function VirtualSelectConfigsList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsList.itemType = OutSystemsUI_2_23Model.VirtualSelectConfigsRec;
return VirtualSelectConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VirtualSelectConfigsList = VirtualSelectConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemList = (function (_super) {
__extends(LocalityHouseholdsResultItemList, _super);
function LocalityHouseholdsResultItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemList.itemType = APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec;
return LocalityHouseholdsResultItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityHouseholdsResultItemList = LocalityHouseholdsResultItemList;

});
define("Connect2_MyBookmarks_MUI.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SpaceRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SpaceRecord = SpaceRecord;

});
define("Connect2_MyBookmarks_MUI.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SpaceRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SpaceRecordList = (function (_super) {
__extends(SpaceRecordList, _super);
function SpaceRecordList(defaults) {
_super.apply(this, arguments);
}
SpaceRecordList.itemType = Connect2_MyBookmarks_MUIModel.SpaceRecord;
return SpaceRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SpaceRecordList = SpaceRecordList;

});
define("Connect2_MyBookmarks_MUI.model$EventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_MyBookmarks_MUI.model", "FullCalendarReactive.model$EventRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.EventRecord = EventRecord;

});
define("Connect2_MyBookmarks_MUI.model$RangeSliderOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.RangeSliderOptionalConfigsRecord = RangeSliderOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$RangeSliderOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$RangeSliderOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsRecordList = (function (_super) {
__extends(RangeSliderOptionalConfigsRecordList, _super);
function RangeSliderOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.RangeSliderOptionalConfigsRecord;
return RangeSliderOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.RangeSliderOptionalConfigsRecordList = RangeSliderOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$BreakColumnsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUI_2_23Model.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BreakColumnsList = BreakColumnsList;

});
define("Connect2_MyBookmarks_MUI.model$DropdownTagsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownTagsOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsList = (function (_super) {
__extends(DropdownTagsOptionalConfigsList, _super);
function DropdownTagsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DropdownTagsOptionalConfigsRec;
return DropdownTagsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownTagsOptionalConfigsList = DropdownTagsOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$AlertRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AlertRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.AlertRecord = AlertRecord;

});
define("Connect2_MyBookmarks_MUI.model$OpeningHourItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$OpeningHourItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OpeningHourItemList = (function (_super) {
__extends(OpeningHourItemList, _super);
function OpeningHourItemList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemList.itemType = APIDomain_Directory_ISModel.OpeningHourItemRec;
return OpeningHourItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.OpeningHourItemList = OpeningHourItemList;

});
define("Connect2_MyBookmarks_MUI.model$BusinessLinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemList = (function (_super) {
__extends(BusinessLinkItemList, _super);
function BusinessLinkItemList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemList.itemType = APIDomain_Directory_ISModel.BusinessLinkItemRec;
return BusinessLinkItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BusinessLinkItemList = BusinessLinkItemList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityCommunityBusinessRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRecord = (function (_super) {
__extends(LocalityCommunityBusinessRecord, _super);
function LocalityCommunityBusinessRecord(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRecord.attributesToDeclare = function () {
return [
this.attr("LocalityCommunityBusiness", "localityCommunityBusinessAttr", "LocalityCommunityBusiness", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityCommunityBusinessRec());
}, true, APIDomain_Directory_ISModel.LocalityCommunityBusinessRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityCommunityBusinessRecord.fromStructure = function (str) {
return new LocalityCommunityBusinessRecord(new LocalityCommunityBusinessRecord.RecordClass({
localityCommunityBusinessAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityCommunityBusinessRecord._isAnonymousRecord = true;
LocalityCommunityBusinessRecord.UniqueId = "98cc55f1-9ff6-a6be-7673-76b0be00be87";
LocalityCommunityBusinessRecord.init();
return LocalityCommunityBusinessRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LocalityCommunityBusinessRecord = LocalityCommunityBusinessRecord;

});
define("Connect2_MyBookmarks_MUI.model$LocalityCommunityBusinessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LocalityCommunityBusinessRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessRecordList = (function (_super) {
__extends(LocalityCommunityBusinessRecordList, _super);
function LocalityCommunityBusinessRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessRecordList.itemType = Connect2_MyBookmarks_MUIModel.LocalityCommunityBusinessRecord;
return LocalityCommunityBusinessRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityCommunityBusinessRecordList = LocalityCommunityBusinessRecordList;

});
define("Connect2_MyBookmarks_MUI.model$TimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TimezoneRecord = (function (_super) {
__extends(TimezoneRecord, _super);
function TimezoneRecord(defaults) {
_super.apply(this, arguments);
}
TimezoneRecord.attributesToDeclare = function () {
return [
this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.TimezoneRec());
}, true, APIDomain_Directory_ISModel.TimezoneRec)
].concat(_super.attributesToDeclare.call(this));
};
TimezoneRecord.fromStructure = function (str) {
return new TimezoneRecord(new TimezoneRecord.RecordClass({
timezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimezoneRecord._isAnonymousRecord = true;
TimezoneRecord.UniqueId = "7c1edbba-89c5-49b8-58cc-f493f35403b0";
TimezoneRecord.init();
return TimezoneRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.TimezoneRecord = TimezoneRecord;

});
define("Connect2_MyBookmarks_MUI.model$TimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$TimezoneRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TimezoneRecordList = (function (_super) {
__extends(TimezoneRecordList, _super);
function TimezoneRecordList(defaults) {
_super.apply(this, arguments);
}
TimezoneRecordList.itemType = Connect2_MyBookmarks_MUIModel.TimezoneRecord;
return TimezoneRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TimezoneRecordList = TimezoneRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DEPRECATED_MasterDetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DEPRECATED_MasterDetailItemRecord = DEPRECATED_MasterDetailItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_SortColumnRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_SortColumnRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_SortColumnRecord = (function (_super) {
__extends(MyBookmarks_SortColumnRecord, _super);
function MyBookmarks_SortColumnRecord(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_SortColumnRecord.attributesToDeclare = function () {
return [
this.attr("MyBookmarks_SortColumn", "myBookmarks_SortColumnAttr", "MyBookmarks_SortColumn", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_BLModel.MyBookmarks_SortColumnRec());
}, true, Connect2_MyBookmarks_BLModel.MyBookmarks_SortColumnRec)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_SortColumnRecord.fromStructure = function (str) {
return new MyBookmarks_SortColumnRecord(new MyBookmarks_SortColumnRecord.RecordClass({
myBookmarks_SortColumnAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_SortColumnRecord._isAnonymousRecord = true;
MyBookmarks_SortColumnRecord.UniqueId = "e44a4a64-42bc-dca9-82f6-69643df98de7";
MyBookmarks_SortColumnRecord.init();
return MyBookmarks_SortColumnRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.MyBookmarks_SortColumnRecord = MyBookmarks_SortColumnRecord;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_SortColumnRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MyBookmarks_SortColumnRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_SortColumnRecordList = (function (_super) {
__extends(MyBookmarks_SortColumnRecordList, _super);
function MyBookmarks_SortColumnRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_SortColumnRecordList.itemType = Connect2_MyBookmarks_MUIModel.MyBookmarks_SortColumnRecord;
return MyBookmarks_SortColumnRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MyBookmarks_SortColumnRecordList = MyBookmarks_SortColumnRecordList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$PhotoRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoRecord = (function (_super) {
__extends(PhotoRecord, _super);
function PhotoRecord(defaults) {
_super.apply(this, arguments);
}
PhotoRecord.attributesToDeclare = function () {
return [
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoRec());
}, true, APIDomain_Directory_ISModel.PhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoRecord.fromStructure = function (str) {
return new PhotoRecord(new PhotoRecord.RecordClass({
photoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoRecord._isAnonymousRecord = true;
PhotoRecord.UniqueId = "485e1dda-923d-9b35-8659-101d2907ffd5";
PhotoRecord.init();
return PhotoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.PhotoRecord = PhotoRecord;

});
define("Connect2_MyBookmarks_MUI.model$HallPhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HallPhotoRecord = (function (_super) {
__extends(HallPhotoRecord, _super);
function HallPhotoRecord(defaults) {
_super.apply(this, arguments);
}
HallPhotoRecord.attributesToDeclare = function () {
return [
this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoRec());
}, true, APIDomain_Directory_ISModel.HallPhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoRecord.fromStructure = function (str) {
return new HallPhotoRecord(new HallPhotoRecord.RecordClass({
hallPhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HallPhotoRecord._isAnonymousRecord = true;
HallPhotoRecord.UniqueId = "87a95065-ca87-86bc-4360-fc71fc41409c";
HallPhotoRecord.init();
return HallPhotoRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.HallPhotoRecord = HallPhotoRecord;

});
define("Connect2_MyBookmarks_MUI.model$HallPhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$HallPhotoRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HallPhotoRecordList = (function (_super) {
__extends(HallPhotoRecordList, _super);
function HallPhotoRecordList(defaults) {
_super.apply(this, arguments);
}
HallPhotoRecordList.itemType = Connect2_MyBookmarks_MUIModel.HallPhotoRecord;
return HallPhotoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HallPhotoRecordList = HallPhotoRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ProgressCircleOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ProgressCircleOptionalConfigsRecord = ProgressCircleOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$LightboxImageOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LightboxImageOptionalConfigsList = (function (_super) {
__extends(LightboxImageOptionalConfigsList, _super);
function LightboxImageOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
LightboxImageOptionalConfigsList.itemType = OutSystemsUI_2_23Model.LightboxImageOptionalConfigsRec;
return LightboxImageOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LightboxImageOptionalConfigsList = LightboxImageOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedList = (function (_super) {
__extends(SubdivisionExtendedList, _super);
function SubdivisionExtendedList(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedList.itemType = Connect2_LegacySharedModel.SubdivisionExtendedRec;
return SubdivisionExtendedList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionExtendedList = SubdivisionExtendedList;

});
define("Connect2_MyBookmarks_MUI.model$MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$MemberRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MemberList = (function (_super) {
__extends(MemberList, _super);
function MemberList(defaults) {
_super.apply(this, arguments);
}
MemberList.itemType = APIDomain_Directory_ISModel.MemberRec;
return MemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MemberList = MemberList;

});
define("Connect2_MyBookmarks_MUI.model$OpeningHourItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$OpeningHourItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRecord = (function (_super) {
__extends(OpeningHourItemRecord, _super);
function OpeningHourItemRecord(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRecord.attributesToDeclare = function () {
return [
this.attr("OpeningHourItem", "openingHourItemAttr", "OpeningHourItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.OpeningHourItemRec());
}, true, APIDomain_Directory_ISModel.OpeningHourItemRec)
].concat(_super.attributesToDeclare.call(this));
};
OpeningHourItemRecord.fromStructure = function (str) {
return new OpeningHourItemRecord(new OpeningHourItemRecord.RecordClass({
openingHourItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OpeningHourItemRecord._isAnonymousRecord = true;
OpeningHourItemRecord.UniqueId = "4c08221b-cd76-ea64-bfea-6bcc5dae54fa";
OpeningHourItemRecord.init();
return OpeningHourItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.OpeningHourItemRecord = OpeningHourItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$CDN2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$CDNRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CDN2Record = (function (_super) {
__extends(CDN2Record, _super);
function CDN2Record(defaults) {
_super.apply(this, arguments);
}
CDN2Record.attributesToDeclare = function () {
return [
this.attr("CDN", "cDNAttr", "CDN2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDNRec());
}, true, APIDomain_Directory_ISModel.CDNRec)
].concat(_super.attributesToDeclare.call(this));
};
CDN2Record.fromStructure = function (str) {
return new CDN2Record(new CDN2Record.RecordClass({
cDNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDN2Record._isAnonymousRecord = true;
CDN2Record.UniqueId = "4dcfb80a-1587-3f18-b937-819347fc346c";
CDN2Record.init();
return CDN2Record;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CDN2Record = CDN2Record;

});
define("Connect2_MyBookmarks_MUI.model$ScrollbarStyleList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ScrollbarStyleRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleList = (function (_super) {
__extends(ScrollbarStyleList, _super);
function ScrollbarStyleList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleList.itemType = OutSystemsUI_2_23Model.ScrollbarStyleRec;
return ScrollbarStyleList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ScrollbarStyleList = ScrollbarStyleList;

});
define("Connect2_MyBookmarks_MUI.model$ColumnBreakRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ColumnBreakRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ColumnBreakRecord = ColumnBreakRecord;

});
define("Connect2_MyBookmarks_MUI.model$ColumnBreakRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ColumnBreakRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakRecordList = (function (_super) {
__extends(ColumnBreakRecordList, _super);
function ColumnBreakRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakRecordList.itemType = Connect2_MyBookmarks_MUIModel.ColumnBreakRecord;
return ColumnBreakRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ColumnBreakRecordList = ColumnBreakRecordList;

});
define("Connect2_MyBookmarks_MUI.model$UI_ShareableObject_GenericRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericRecord = (function (_super) {
__extends(UI_ShareableObject_GenericRecord, _super);
function UI_ShareableObject_GenericRecord(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericRecord.attributesToDeclare = function () {
return [
this.attr("UI_ShareableObject_Generic", "uI_ShareableObject_GenericAttr", "UI_ShareableObject_Generic", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec());
}, true, Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_ShareableObject_GenericRecord.fromStructure = function (str) {
return new UI_ShareableObject_GenericRecord(new UI_ShareableObject_GenericRecord.RecordClass({
uI_ShareableObject_GenericAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_ShareableObject_GenericRecord._isAnonymousRecord = true;
UI_ShareableObject_GenericRecord.UniqueId = "7e260f1d-2814-5f62-7edf-596a63247ddd";
UI_ShareableObject_GenericRecord.init();
return UI_ShareableObject_GenericRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.UI_ShareableObject_GenericRecord = UI_ShareableObject_GenericRecord;

});
define("Connect2_MyBookmarks_MUI.model$UI_ShareableObject_GenericRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$UI_ShareableObject_GenericRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericRecordList = (function (_super) {
__extends(UI_ShareableObject_GenericRecordList, _super);
function UI_ShareableObject_GenericRecordList(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericRecordList.itemType = Connect2_MyBookmarks_MUIModel.UI_ShareableObject_GenericRecord;
return UI_ShareableObject_GenericRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.UI_ShareableObject_GenericRecordList = UI_ShareableObject_GenericRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DropdownOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DropdownOptionalConfigsRecord = DropdownOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$DropdownOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DropdownOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionalConfigsRecordList = (function (_super) {
__extends(DropdownOptionalConfigsRecordList, _super);
function DropdownOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.DropdownOptionalConfigsRecord;
return DropdownOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownOptionalConfigsRecordList = DropdownOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$StackedCardsPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$StackedCardsPositionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionRecordList = (function (_super) {
__extends(StackedCardsPositionRecordList, _super);
function StackedCardsPositionRecordList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionRecordList.itemType = Connect2_MyBookmarks_MUIModel.StackedCardsPositionRecord;
return StackedCardsPositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.StackedCardsPositionRecordList = StackedCardsPositionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$TagList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$TagRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TagList = (function (_super) {
__extends(TagList, _super);
function TagList(defaults) {
_super.apply(this, arguments);
}
TagList.itemType = Connect2_LegacySharedModel.TagRec;
return TagList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TagList = TagList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityHouseholdsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemList = (function (_super) {
__extends(LocalityHouseholdsItemList, _super);
function LocalityHouseholdsItemList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemList.itemType = Connect2_LegacySharedModel.LocalityHouseholdsItemRec;
return LocalityHouseholdsItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityHouseholdsItemList = LocalityHouseholdsItemList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionsItemList = (function (_super) {
__extends(SubdivisionsItemList, _super);
function SubdivisionsItemList(defaults) {
_super.apply(this, arguments);
}
SubdivisionsItemList.itemType = Connect2_LegacySharedModel.SubdivisionsItemRec;
return SubdivisionsItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionsItemList = SubdivisionsItemList;

});
define("Connect2_MyBookmarks_MUI.model$InterchangeItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$InterchangeItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var InterchangeItemList = (function (_super) {
__extends(InterchangeItemList, _super);
function InterchangeItemList(defaults) {
_super.apply(this, arguments);
}
InterchangeItemList.itemType = Connect2_LegacySharedModel.InterchangeItemRec;
return InterchangeItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.InterchangeItemList = InterchangeItemList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityCommunityBusinessList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityCommunityBusinessList = (function (_super) {
__extends(LocalityCommunityBusinessList, _super);
function LocalityCommunityBusinessList(defaults) {
_super.apply(this, arguments);
}
LocalityCommunityBusinessList.itemType = APIDomain_Directory_ISModel.LocalityCommunityBusinessRec;
return LocalityCommunityBusinessList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityCommunityBusinessList = LocalityCommunityBusinessList;

});
define("Connect2_MyBookmarks_MUI.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
typeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord._isAnonymousRecord = true;
TextRecord.UniqueId = "b8a6ca99-92f4-9590-1043-ce69fd76d10e";
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.TextRecord = TextRecord;

});
define("Connect2_MyBookmarks_MUI.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$TextRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.itemType = Connect2_MyBookmarks_MUIModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TextRecordList = TextRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SubdivisionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionRecordList = (function (_super) {
__extends(SubdivisionRecordList, _super);
function SubdivisionRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionRecordList.itemType = Connect2_MyBookmarks_MUIModel.SubdivisionRecord;
return SubdivisionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionRecordList = SubdivisionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DirectionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DirectionRecord = DirectionRecord;

});
define("Connect2_MyBookmarks_MUI.model$DirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DirectionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DirectionRecordList = (function (_super) {
__extends(DirectionRecordList, _super);
function DirectionRecordList(defaults) {
_super.apply(this, arguments);
}
DirectionRecordList.itemType = Connect2_MyBookmarks_MUIModel.DirectionRecord;
return DirectionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DirectionRecordList = DirectionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DetailsJsonList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DetailsJsonList = (function (_super) {
__extends(DetailsJsonList, _super);
function DetailsJsonList(defaults) {
_super.apply(this, arguments);
}
DetailsJsonList.itemType = Connect2_MyBookmarks_ISModel.DetailsJsonRec;
return DetailsJsonList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DetailsJsonList = DetailsJsonList;

});
define("Connect2_MyBookmarks_MUI.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$PositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUI_2_23Model.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PositionList = PositionList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CarouselItemsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsRecordList = (function (_super) {
__extends(CarouselItemsRecordList, _super);
function CarouselItemsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsRecordList.itemType = Connect2_MyBookmarks_MUIModel.CarouselItemsRecord;
return CarouselItemsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselItemsRecordList = CarouselItemsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubdivisionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionList = (function (_super) {
__extends(SubdivisionList, _super);
function SubdivisionList(defaults) {
_super.apply(this, arguments);
}
SubdivisionList.itemType = APIDomain_Directory_ISModel.SubdivisionRec;
return SubdivisionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionList = SubdivisionList;

});
define("Connect2_MyBookmarks_MUI.model$DEPRECATED_MasterDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DEPRECATED_MasterDetailItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemList, _super);
function DEPRECATED_MasterDetailItemList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemList.itemType = OutSystemsUI_2_23Model.DEPRECATED_MasterDetailItemRec;
return DEPRECATED_MasterDetailItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DEPRECATED_MasterDetailItemList = DEPRECATED_MasterDetailItemList;

});
define("Connect2_MyBookmarks_MUI.model$FlatpickrConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$FlatpickrConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsRecordList = (function (_super) {
__extends(FlatpickrConfigsRecordList, _super);
function FlatpickrConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.FlatpickrConfigsRecord;
return FlatpickrConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.FlatpickrConfigsRecordList = FlatpickrConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ShapeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUI_2_23Model.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ShapeList = ShapeList;

});
define("Connect2_MyBookmarks_MUI.model$ProgressBarOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsList = (function (_super) {
__extends(ProgressBarOptionalConfigsList, _super);
function ProgressBarOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsList.itemType = OutSystemsUI_2_23Model.ProgressBarOptionalConfigsRec;
return ProgressBarOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ProgressBarOptionalConfigsList = ProgressBarOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$SubscribedRegionItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SubscribedRegionItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubscribedRegionItemRecordList = (function (_super) {
__extends(SubscribedRegionItemRecordList, _super);
function SubscribedRegionItemRecordList(defaults) {
_super.apply(this, arguments);
}
SubscribedRegionItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.SubscribedRegionItemRecord;
return SubscribedRegionItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubscribedRegionItemRecordList = SubscribedRegionItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BooleanTypesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BooleanTypesRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesRecordList = (function (_super) {
__extends(BooleanTypesRecordList, _super);
function BooleanTypesRecordList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesRecordList.itemType = Connect2_MyBookmarks_MUIModel.BooleanTypesRecord;
return BooleanTypesRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BooleanTypesRecordList = BooleanTypesRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkNoteRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkNoteRecord = (function (_super) {
__extends(BookmarkNoteRecord, _super);
function BookmarkNoteRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkNote", "bookmarkNoteAttr", "BookmarkNote", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec());
}, true, Connect2_LegacySharedModel.BookmarkNoteRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkNoteRecord.fromStructure = function (str) {
return new BookmarkNoteRecord(new BookmarkNoteRecord.RecordClass({
bookmarkNoteAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkNoteRecord._isAnonymousRecord = true;
BookmarkNoteRecord.UniqueId = "5d0ccedf-5d4b-1826-c884-1c206f184db9";
BookmarkNoteRecord.init();
return BookmarkNoteRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.BookmarkNoteRecord = BookmarkNoteRecord;

});
define("Connect2_MyBookmarks_MUI.model$Type_ShareObjectList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectList = (function (_super) {
__extends(Type_ShareObjectList, _super);
function Type_ShareObjectList(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectList.itemType = Connect2_Sharing_CSModel.Type_ShareObjectRec;
return Type_ShareObjectList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Type_ShareObjectList = Type_ShareObjectList;

});
define("Connect2_MyBookmarks_MUI.model$AutoplayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AutoplayRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AutoplayList = (function (_super) {
__extends(AutoplayList, _super);
function AutoplayList(defaults) {
_super.apply(this, arguments);
}
AutoplayList.itemType = OutSystemsUI_2_23Model.AutoplayRec;
return AutoplayList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AutoplayList = AutoplayList;

});
define("Connect2_MyBookmarks_MUI.model$FloatingPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$FloatingPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var FloatingPositionList = (function (_super) {
__extends(FloatingPositionList, _super);
function FloatingPositionList(defaults) {
_super.apply(this, arguments);
}
FloatingPositionList.itemType = OutSystemsUI_2_23Model.FloatingPositionRec;
return FloatingPositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.FloatingPositionList = FloatingPositionList;

});
define("Connect2_MyBookmarks_MUI.model$VideoCaptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VideoCaptionsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.VideoCaptionsRecord = VideoCaptionsRecord;

});
define("Connect2_MyBookmarks_MUI.model$VideoCaptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$VideoCaptionsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VideoCaptionsRecordList = (function (_super) {
__extends(VideoCaptionsRecordList, _super);
function VideoCaptionsRecordList(defaults) {
_super.apply(this, arguments);
}
VideoCaptionsRecordList.itemType = Connect2_MyBookmarks_MUIModel.VideoCaptionsRecord;
return VideoCaptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VideoCaptionsRecordList = VideoCaptionsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GradientColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$GradientColorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GradientColorList = (function (_super) {
__extends(GradientColorList, _super);
function GradientColorList(defaults) {
_super.apply(this, arguments);
}
GradientColorList.itemType = OutSystemsUI_2_23Model.GradientColorRec;
return GradientColorList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GradientColorList = GradientColorList;

});
define("Connect2_MyBookmarks_MUI.model$ImageDataList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ImageDataRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ImageDataList = (function (_super) {
__extends(ImageDataList, _super);
function ImageDataList(defaults) {
_super.apply(this, arguments);
}
ImageDataList.itemType = APIDomain_Directory_ISModel.ImageDataRec;
return ImageDataList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ImageDataList = ImageDataList;

});
define("Connect2_MyBookmarks_MUI.model$MonthList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MonthRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MonthList = (function (_super) {
__extends(MonthList, _super);
function MonthList(defaults) {
_super.apply(this, arguments);
}
MonthList.itemType = OutSystemsUI_2_23Model.MonthRec;
return MonthList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MonthList = MonthList;

});
define("Connect2_MyBookmarks_MUI.model$Householder_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$Householder_MemberRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Householder_MemberList = (function (_super) {
__extends(Householder_MemberList, _super);
function Householder_MemberList(defaults) {
_super.apply(this, arguments);
}
Householder_MemberList.itemType = APIDomain_Directory_ISModel.Householder_MemberRec;
return Householder_MemberList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Householder_MemberList = Householder_MemberList;

});
define("Connect2_MyBookmarks_MUI.model$RoleItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$RoleItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var RoleItemList = (function (_super) {
__extends(RoleItemList, _super);
function RoleItemList(defaults) {
_super.apply(this, arguments);
}
RoleItemList.itemType = APIDomain_Directory_ISModel.RoleItemRec;
return RoleItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.RoleItemList = RoleItemList;

});
define("Connect2_MyBookmarks_MUI.model$ClaimItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ClaimItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ClaimItemList = (function (_super) {
__extends(ClaimItemList, _super);
function ClaimItemList(defaults) {
_super.apply(this, arguments);
}
ClaimItemList.itemType = APIDomain_Directory_ISModel.ClaimItemRec;
return ClaimItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ClaimItemList = ClaimItemList;

});
define("Connect2_MyBookmarks_MUI.model$Users_Current_GETResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Users_Current_GETResponseRecord = (function (_super) {
__extends(Users_Current_GETResponseRecord, _super);
function Users_Current_GETResponseRecord(defaults) {
_super.apply(this, arguments);
}
Users_Current_GETResponseRecord.attributesToDeclare = function () {
return [
this.attr("Users_Current_GETResponse", "users_Current_GETResponseAttr", "Users_Current_GETResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Users_Current_GETResponseRec());
}, true, APIDomain_Directory_ISModel.Users_Current_GETResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
Users_Current_GETResponseRecord.fromStructure = function (str) {
return new Users_Current_GETResponseRecord(new Users_Current_GETResponseRecord.RecordClass({
users_Current_GETResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Users_Current_GETResponseRecord._isAnonymousRecord = true;
Users_Current_GETResponseRecord.UniqueId = "e8058748-3b5b-98ac-9328-6803f9adbf4f";
Users_Current_GETResponseRecord.init();
return Users_Current_GETResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.Users_Current_GETResponseRecord = Users_Current_GETResponseRecord;

});
define("Connect2_MyBookmarks_MUI.model$Users_Current_GETResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$Users_Current_GETResponseRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Users_Current_GETResponseRecordList = (function (_super) {
__extends(Users_Current_GETResponseRecordList, _super);
function Users_Current_GETResponseRecordList(defaults) {
_super.apply(this, arguments);
}
Users_Current_GETResponseRecordList.itemType = Connect2_MyBookmarks_MUIModel.Users_Current_GETResponseRecord;
return Users_Current_GETResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Users_Current_GETResponseRecordList = Users_Current_GETResponseRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsList = (function (_super) {
__extends(CarouselOptionalConfigsList, _super);
function CarouselOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsList.itemType = OutSystemsUI_2_23Model.CarouselOptionalConfigsRec;
return CarouselOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselOptionalConfigsList = CarouselOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$NoUiSliderConfigs_RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$NoUiSliderConfigs_RangeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.NoUiSliderConfigs_RangeRecord = NoUiSliderConfigs_RangeRecord;

});
define("Connect2_MyBookmarks_MUI.model$NoUiSliderConfigs_RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$NoUiSliderConfigs_RangeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigs_RangeRecordList = (function (_super) {
__extends(NoUiSliderConfigs_RangeRecordList, _super);
function NoUiSliderConfigs_RangeRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigs_RangeRecordList.itemType = Connect2_MyBookmarks_MUIModel.NoUiSliderConfigs_RangeRecord;
return NoUiSliderConfigs_RangeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.NoUiSliderConfigs_RangeRecordList = NoUiSliderConfigs_RangeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoStateRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$VideoStateRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VideoStateRecordList = (function (_super) {
__extends(VideoStateRecordList, _super);
function VideoStateRecordList(defaults) {
_super.apply(this, arguments);
}
VideoStateRecordList.itemType = Connect2_MyBookmarks_MUIModel.VideoStateRecord;
return VideoStateRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VideoStateRecordList = VideoStateRecordList;

});
define("Connect2_MyBookmarks_MUI.model$EventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$EventRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var EventRecordList = (function (_super) {
__extends(EventRecordList, _super);
function EventRecordList(defaults) {
_super.apply(this, arguments);
}
EventRecordList.itemType = Connect2_MyBookmarks_MUIModel.EventRecord;
return EventRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.EventRecordList = EventRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableGeocodeInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRecord = (function (_super) {
__extends(CacheableGeocodeInformationRecord, _super);
function CacheableGeocodeInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableGeocodeInformation", "cacheableGeocodeInformationAttr", "CacheableGeocodeInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableGeocodeInformationRec());
}, true, Connect2_LegacySharedModel.CacheableGeocodeInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableGeocodeInformationRecord.fromStructure = function (str) {
return new CacheableGeocodeInformationRecord(new CacheableGeocodeInformationRecord.RecordClass({
cacheableGeocodeInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableGeocodeInformationRecord._isAnonymousRecord = true;
CacheableGeocodeInformationRecord.UniqueId = "65ef38fa-aecf-f49a-0b38-7001769f5f61";
CacheableGeocodeInformationRecord.init();
return CacheableGeocodeInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CacheableGeocodeInformationRecord = CacheableGeocodeInformationRecord;

});
define("Connect2_MyBookmarks_MUI.model$NoUiSliderConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$NoUiSliderConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsList = (function (_super) {
__extends(NoUiSliderConfigsList, _super);
function NoUiSliderConfigsList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsList.itemType = OutSystemsUI_2_23Model.NoUiSliderConfigsRec;
return NoUiSliderConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.NoUiSliderConfigsList = NoUiSliderConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$DefaultCountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$DefaultCountryRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DefaultCountryList = (function (_super) {
__extends(DefaultCountryList, _super);
function DefaultCountryList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryList.itemType = APIDomain_Directory_ISModel.DefaultCountryRec;
return DefaultCountryList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DefaultCountryList = DefaultCountryList;

});
define("Connect2_MyBookmarks_MUI.model$CountryWithMapPositionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionList = (function (_super) {
__extends(CountryWithMapPositionList, _super);
function CountryWithMapPositionList(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionList.itemType = Connect2_LegacySharedModel.CountryWithMapPositionRec;
return CountryWithMapPositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CountryWithMapPositionList = CountryWithMapPositionList;

});
define("Connect2_MyBookmarks_MUI.model$UserSubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "Connect2_MyBookmarks_MUI.model", "DirectoryClientCore.model$UserSubscriptionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$DirectoryClientCore"], function (exports, OutSystems, DirectoryClientCoreModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UserSubscriptionList = (function (_super) {
__extends(UserSubscriptionList, _super);
function UserSubscriptionList(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionList.itemType = DirectoryClientCoreModel.UserSubscriptionRec;
return UserSubscriptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.UserSubscriptionList = UserSubscriptionList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DatePickerOptionalConfigsRecord = DatePickerOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$TimePickerOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$TimePickerOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.TimePickerOptionalConfigsRecord = TimePickerOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$TimePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$TimePickerOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsRecordList = (function (_super) {
__extends(TimePickerOptionalConfigsRecordList, _super);
function TimePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.TimePickerOptionalConfigsRecord;
return TimePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TimePickerOptionalConfigsRecordList = TimePickerOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkNoteList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkNoteList = (function (_super) {
__extends(BookmarkNoteList, _super);
function BookmarkNoteList(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteList.itemType = Connect2_LegacySharedModel.BookmarkNoteRec;
return BookmarkNoteList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkNoteList = BookmarkNoteList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionLocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubdivisionLocalityRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionLocalityRecord = (function (_super) {
__extends(SubdivisionLocalityRecord, _super);
function SubdivisionLocalityRecord(defaults) {
_super.apply(this, arguments);
}
SubdivisionLocalityRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionLocality", "subdivisionLocalityAttr", "SubdivisionLocality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubdivisionLocalityRec());
}, true, APIDomain_Directory_ISModel.SubdivisionLocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
SubdivisionLocalityRecord.fromStructure = function (str) {
return new SubdivisionLocalityRecord(new SubdivisionLocalityRecord.RecordClass({
subdivisionLocalityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubdivisionLocalityRecord._isAnonymousRecord = true;
SubdivisionLocalityRecord.UniqueId = "6c342559-8de7-cd37-faae-f1d49edb49d7";
SubdivisionLocalityRecord.init();
return SubdivisionLocalityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.SubdivisionLocalityRecord = SubdivisionLocalityRecord;

});
define("Connect2_MyBookmarks_MUI.model$LocalityHouseholdsResultItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRecord = (function (_super) {
__extends(LocalityHouseholdsResultItemRecord, _super);
function LocalityHouseholdsResultItemRecord(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRecord.attributesToDeclare = function () {
return [
this.attr("LocalityHouseholdsResultItem", "localityHouseholdsResultItemAttr", "LocalityHouseholdsResultItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec());
}, true, APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityHouseholdsResultItemRecord.fromStructure = function (str) {
return new LocalityHouseholdsResultItemRecord(new LocalityHouseholdsResultItemRecord.RecordClass({
localityHouseholdsResultItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityHouseholdsResultItemRecord._isAnonymousRecord = true;
LocalityHouseholdsResultItemRecord.UniqueId = "734c73b9-3c8b-11d6-a804-6fbab9485f47";
LocalityHouseholdsResultItemRecord.init();
return LocalityHouseholdsResultItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LocalityHouseholdsResultItemRecord = LocalityHouseholdsResultItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$LocalityHouseholdsResultItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LocalityHouseholdsResultItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsResultItemRecordList = (function (_super) {
__extends(LocalityHouseholdsResultItemRecordList, _super);
function LocalityHouseholdsResultItemRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsResultItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.LocalityHouseholdsResultItemRecord;
return LocalityHouseholdsResultItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityHouseholdsResultItemRecordList = LocalityHouseholdsResultItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$StepsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$StepsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.StepsRecord = StepsRecord;

});
define("Connect2_MyBookmarks_MUI.model$DEPRECATED_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DEPRECATED_ColorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorList = (function (_super) {
__extends(DEPRECATED_ColorList, _super);
function DEPRECATED_ColorList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorList.itemType = OutSystemsUI_2_23Model.DEPRECATED_ColorRec;
return DEPRECATED_ColorList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DEPRECATED_ColorList = DEPRECATED_ColorList;

});
define("Connect2_MyBookmarks_MUI.model$BulkActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BulkActionsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BulkActionsRecordList = (function (_super) {
__extends(BulkActionsRecordList, _super);
function BulkActionsRecordList(defaults) {
_super.apply(this, arguments);
}
BulkActionsRecordList.itemType = Connect2_MyBookmarks_MUIModel.BulkActionsRecord;
return BulkActionsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BulkActionsRecordList = BulkActionsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ColumnBreakList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ColumnBreakRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ColumnBreakList = (function (_super) {
__extends(ColumnBreakList, _super);
function ColumnBreakList(defaults) {
_super.apply(this, arguments);
}
ColumnBreakList.itemType = OutSystemsUI_2_23Model.ColumnBreakRec;
return ColumnBreakList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ColumnBreakList = ColumnBreakList;

});
define("Connect2_MyBookmarks_MUI.model$Type_ShareObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectRecord = (function (_super) {
__extends(Type_ShareObjectRecord, _super);
function Type_ShareObjectRecord(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectRecord.attributesToDeclare = function () {
return [
this.attr("Type_ShareObject", "type_ShareObjectAttr", "Type_ShareObject", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.Type_ShareObjectRec());
}, true, Connect2_Sharing_CSModel.Type_ShareObjectRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_ShareObjectRecord.fromStructure = function (str) {
return new Type_ShareObjectRecord(new Type_ShareObjectRecord.RecordClass({
type_ShareObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_ShareObjectRecord._isAnonymousRecord = true;
Type_ShareObjectRecord.UniqueId = "718078dc-4cf8-be0d-3e09-e6c98c787d90";
Type_ShareObjectRecord.init();
return Type_ShareObjectRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.Type_ShareObjectRecord = Type_ShareObjectRecord;

});
define("Connect2_MyBookmarks_MUI.model$ResultListTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ResultListTypeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ResultListTypeRecordList = (function (_super) {
__extends(ResultListTypeRecordList, _super);
function ResultListTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ResultListTypeRecordList.itemType = Connect2_MyBookmarks_MUIModel.ResultListTypeRecord;
return ResultListTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ResultListTypeRecordList = ResultListTypeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$BreakColumnsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("Connect2_MyBookmarks_MUI.model$VirtualSelectConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VirtualSelectConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.VirtualSelectConfigsRecord = VirtualSelectConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$VirtualSelectConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$VirtualSelectConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VirtualSelectConfigsRecordList = (function (_super) {
__extends(VirtualSelectConfigsRecordList, _super);
function VirtualSelectConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VirtualSelectConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.VirtualSelectConfigsRecord;
return VirtualSelectConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VirtualSelectConfigsRecordList = VirtualSelectConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$TabsOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$TabsOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.TabsOptionalConfigsRecord = TabsOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$TabsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$TabsOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsRecordList = (function (_super) {
__extends(TabsOptionalConfigsRecordList, _super);
function TabsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.TabsOptionalConfigsRecord;
return TabsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TabsOptionalConfigsRecordList = TabsOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VideoOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.VideoOptionalConfigsRecord = VideoOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$CarouselItemsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselItemsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselItemsList = (function (_super) {
__extends(CarouselItemsList, _super);
function CarouselItemsList(defaults) {
_super.apply(this, arguments);
}
CarouselItemsList.itemType = OutSystemsUI_2_23Model.CarouselItemsRec;
return CarouselItemsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselItemsList = CarouselItemsList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkNoteRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BookmarkNoteRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkNoteRecordList = (function (_super) {
__extends(BookmarkNoteRecordList, _super);
function BookmarkNoteRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkNoteRecordList.itemType = Connect2_MyBookmarks_MUIModel.BookmarkNoteRecord;
return BookmarkNoteRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkNoteRecordList = BookmarkNoteRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ConfigRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ConfigRecord = (function (_super) {
__extends(ConfigRecord, _super);
function ConfigRecord(defaults) {
_super.apply(this, arguments);
}
ConfigRecord.attributesToDeclare = function () {
return [
this.attr("Config", "configAttr", "Config", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ConfigRec());
}, true, APIDomain_Directory_ISModel.ConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ConfigRecord.fromStructure = function (str) {
return new ConfigRecord(new ConfigRecord.RecordClass({
configAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConfigRecord._isAnonymousRecord = true;
ConfigRecord.UniqueId = "fd3c1f4d-91bb-e25c-7c0b-799b4aee3ac3";
ConfigRecord.init();
return ConfigRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ConfigRecord = ConfigRecord;

});
define("Connect2_MyBookmarks_MUI.model$ConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ConfigRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ConfigRecordList = (function (_super) {
__extends(ConfigRecordList, _super);
function ConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ConfigRecordList.itemType = Connect2_MyBookmarks_MUIModel.ConfigRecord;
return ConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ConfigRecordList = ConfigRecordList;

});
define("Connect2_MyBookmarks_MUI.model$StackedCardsPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$StackedCardsPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var StackedCardsPositionList = (function (_super) {
__extends(StackedCardsPositionList, _super);
function StackedCardsPositionList(defaults) {
_super.apply(this, arguments);
}
StackedCardsPositionList.itemType = OutSystemsUI_2_23Model.StackedCardsPositionRec;
return StackedCardsPositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.StackedCardsPositionList = StackedCardsPositionList;

});
define("Connect2_MyBookmarks_MUI.model$DEPRECATED_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DEPRECATED_ColorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DEPRECATED_ColorRecord = DEPRECATED_ColorRecord;

});
define("Connect2_MyBookmarks_MUI.model$DEPRECATED_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DEPRECATED_ColorRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_ColorRecordList = (function (_super) {
__extends(DEPRECATED_ColorRecordList, _super);
function DEPRECATED_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_ColorRecordList.itemType = Connect2_MyBookmarks_MUIModel.DEPRECATED_ColorRecord;
return DEPRECATED_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DEPRECATED_ColorRecordList = DEPRECATED_ColorRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselDirectionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.CarouselDirectionRecord = CarouselDirectionRecord;

});
define("Connect2_MyBookmarks_MUI.model$GetGroupSummariesResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$GetGroupSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetGroupSummariesResponseRecord = (function (_super) {
__extends(GetGroupSummariesResponseRecord, _super);
function GetGroupSummariesResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetGroupSummariesResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetGroupSummariesResponse", "getGroupSummariesResponseAttr", "GetGroupSummariesResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, true, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetGroupSummariesResponseRecord.fromStructure = function (str) {
return new GetGroupSummariesResponseRecord(new GetGroupSummariesResponseRecord.RecordClass({
getGroupSummariesResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetGroupSummariesResponseRecord._isAnonymousRecord = true;
GetGroupSummariesResponseRecord.UniqueId = "7ad94c67-7e58-7571-d574-bdecc6efbf61";
GetGroupSummariesResponseRecord.init();
return GetGroupSummariesResponseRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.GetGroupSummariesResponseRecord = GetGroupSummariesResponseRecord;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerTimeFormatList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerTimeFormatRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatList = (function (_super) {
__extends(DatePickerTimeFormatList, _super);
function DatePickerTimeFormatList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatList.itemType = OutSystemsUI_2_23Model.DatePickerTimeFormatRec;
return DatePickerTimeFormatList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerTimeFormatList = DatePickerTimeFormatList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityHouseholdsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LocalityHouseholdsItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityHouseholdsItemRecordList = (function (_super) {
__extends(LocalityHouseholdsItemRecordList, _super);
function LocalityHouseholdsItemRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityHouseholdsItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.LocalityHouseholdsItemRecord;
return LocalityHouseholdsItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityHouseholdsItemRecordList = LocalityHouseholdsItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkByIdRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkById2Rec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkByIdRecord = (function (_super) {
__extends(BookmarkByIdRecord, _super);
function BookmarkByIdRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkByIdRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkById2", "bookmarkById2Attr", "BookmarkById", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkById2Rec());
}, true, Connect2_MyBookmarks_ISModel.BookmarkById2Rec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkByIdRecord.fromStructure = function (str) {
return new BookmarkByIdRecord(new BookmarkByIdRecord.RecordClass({
bookmarkById2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkByIdRecord._isAnonymousRecord = true;
BookmarkByIdRecord.UniqueId = "7d6ad901-feb6-9ffc-f579-70fae29946b3";
BookmarkByIdRecord.init();
return BookmarkByIdRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.BookmarkByIdRecord = BookmarkByIdRecord;

});
define("Connect2_MyBookmarks_MUI.model$PhotoTagRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$PhotoTagRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoTagRecord = (function (_super) {
__extends(PhotoTagRecord, _super);
function PhotoTagRecord(defaults) {
_super.apply(this, arguments);
}
PhotoTagRecord.attributesToDeclare = function () {
return [
this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoTagRec());
}, true, APIDomain_Directory_ISModel.PhotoTagRec)
].concat(_super.attributesToDeclare.call(this));
};
PhotoTagRecord.fromStructure = function (str) {
return new PhotoTagRecord(new PhotoTagRecord.RecordClass({
photoTagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PhotoTagRecord._isAnonymousRecord = true;
PhotoTagRecord.UniqueId = "9a4052d6-eddc-b349-3edd-3b1a292fc7cc";
PhotoTagRecord.init();
return PhotoTagRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.PhotoTagRecord = PhotoTagRecord;

});
define("Connect2_MyBookmarks_MUI.model$PhotoTagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$PhotoTagRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoTagRecordList = (function (_super) {
__extends(PhotoTagRecordList, _super);
function PhotoTagRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoTagRecordList.itemType = Connect2_MyBookmarks_MUIModel.PhotoTagRecord;
return PhotoTagRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoTagRecordList = PhotoTagRecordList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoDetailsList = (function (_super) {
__extends(PhotoDetailsList, _super);
function PhotoDetailsList(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsList.itemType = Connect2_MyBookmarks_ISModel.PhotoDetailsRec;
return PhotoDetailsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoDetailsList = PhotoDetailsList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityResultItemWithGPSRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRecord = (function (_super) {
__extends(LocalityResultItemWithGPSRecord, _super);
function LocalityResultItemWithGPSRecord(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRecord.attributesToDeclare = function () {
return [
this.attr("LocalityResultItemWithGPS", "localityResultItemWithGPSAttr", "LocalityResultItemWithGPS", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityResultItemWithGPSRec());
}, true, Connect2_LegacySharedModel.LocalityResultItemWithGPSRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityResultItemWithGPSRecord.fromStructure = function (str) {
return new LocalityResultItemWithGPSRecord(new LocalityResultItemWithGPSRecord.RecordClass({
localityResultItemWithGPSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityResultItemWithGPSRecord._isAnonymousRecord = true;
LocalityResultItemWithGPSRecord.UniqueId = "7f1607e2-9c98-4abd-bed7-733843c41cd8";
LocalityResultItemWithGPSRecord.init();
return LocalityResultItemWithGPSRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LocalityResultItemWithGPSRecord = LocalityResultItemWithGPSRecord;

});
define("Connect2_MyBookmarks_MUI.model$MessageStatusList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MessageStatusRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MessageStatusList = (function (_super) {
__extends(MessageStatusList, _super);
function MessageStatusList(defaults) {
_super.apply(this, arguments);
}
MessageStatusList.itemType = OutSystemsUI_2_23Model.MessageStatusRec;
return MessageStatusList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MessageStatusList = MessageStatusList;

});
define("Connect2_MyBookmarks_MUI.model$GradientColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$GradientColorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.GradientColorRecord = GradientColorRecord;

});
define("Connect2_MyBookmarks_MUI.model$GradientColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GradientColorRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GradientColorRecordList = (function (_super) {
__extends(GradientColorRecordList, _super);
function GradientColorRecordList(defaults) {
_super.apply(this, arguments);
}
GradientColorRecordList.itemType = Connect2_MyBookmarks_MUIModel.GradientColorRecord;
return GradientColorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GradientColorRecordList = GradientColorRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerRangeOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerRangeOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DatePickerRangeOptionalConfigsRecord = DatePickerRangeOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$ResultListTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$ResultListTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ResultListTypeList = (function (_super) {
__extends(ResultListTypeList, _super);
function ResultListTypeList(defaults) {
_super.apply(this, arguments);
}
ResultListTypeList.itemType = Connect2_LegacySharedModel.ResultListTypeRec;
return ResultListTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ResultListTypeList = ResultListTypeList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$LocalityRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityList = (function (_super) {
__extends(LocalityList, _super);
function LocalityList(defaults) {
_super.apply(this, arguments);
}
LocalityList.itemType = APIDomain_Directory_ISModel.LocalityRec;
return LocalityList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityList = LocalityList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.CarouselOptionalConfigsRecord = CarouselOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$CarouselOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CarouselOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselOptionalConfigsRecordList = (function (_super) {
__extends(CarouselOptionalConfigsRecordList, _super);
function CarouselOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.CarouselOptionalConfigsRecord;
return CarouselOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselOptionalConfigsRecordList = CarouselOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Connect2_MyBookmarks_MUI.model", "ServiceCenter.model$UserRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.UserRecord = UserRecord;

});
define("Connect2_MyBookmarks_MUI.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$UserRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = Connect2_MyBookmarks_MUIModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.UserRecordList = UserRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkImagesByObjectTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkImagesByObjectTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkImagesByObjectTypeList = (function (_super) {
__extends(BookmarkImagesByObjectTypeList, _super);
function BookmarkImagesByObjectTypeList(defaults) {
_super.apply(this, arguments);
}
BookmarkImagesByObjectTypeList.itemType = Connect2_MyBookmarks_ISModel.BookmarkImagesByObjectTypeRec;
return BookmarkImagesByObjectTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkImagesByObjectTypeList = BookmarkImagesByObjectTypeList;

});
define("Connect2_MyBookmarks_MUI.model$AnimationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AnimationTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.itemType = OutSystemsUI_2_23Model.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AnimationTypeList = AnimationTypeList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableSubdivisionInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRecord = (function (_super) {
__extends(CacheableSubdivisionInformationRecord, _super);
function CacheableSubdivisionInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableSubdivisionInformation", "cacheableSubdivisionInformationAttr", "CacheableSubdivisionInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableSubdivisionInformationRec());
}, true, Connect2_LegacySharedModel.CacheableSubdivisionInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableSubdivisionInformationRecord.fromStructure = function (str) {
return new CacheableSubdivisionInformationRecord(new CacheableSubdivisionInformationRecord.RecordClass({
cacheableSubdivisionInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableSubdivisionInformationRecord._isAnonymousRecord = true;
CacheableSubdivisionInformationRecord.UniqueId = "86b4e397-dd34-0cf3-bbb9-68d527e0da47";
CacheableSubdivisionInformationRecord.init();
return CacheableSubdivisionInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CacheableSubdivisionInformationRecord = CacheableSubdivisionInformationRecord;

});
define("Connect2_MyBookmarks_MUI.model$InterchangeItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$InterchangeItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var InterchangeItemRecord = (function (_super) {
__extends(InterchangeItemRecord, _super);
function InterchangeItemRecord(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRecord.attributesToDeclare = function () {
return [
this.attr("InterchangeItem", "interchangeItemAttr", "InterchangeItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.InterchangeItemRec());
}, true, Connect2_LegacySharedModel.InterchangeItemRec)
].concat(_super.attributesToDeclare.call(this));
};
InterchangeItemRecord.fromStructure = function (str) {
return new InterchangeItemRecord(new InterchangeItemRecord.RecordClass({
interchangeItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InterchangeItemRecord._isAnonymousRecord = true;
InterchangeItemRecord.UniqueId = "891e87ec-01d7-4677-e5e1-efd7f783ec6e";
InterchangeItemRecord.init();
return InterchangeItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.InterchangeItemRecord = InterchangeItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$DirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DirectionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DirectionList = (function (_super) {
__extends(DirectionList, _super);
function DirectionList(defaults) {
_super.apply(this, arguments);
}
DirectionList.itemType = OutSystemsUI_2_23Model.DirectionRec;
return DirectionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DirectionList = DirectionList;

});
define("Connect2_MyBookmarks_MUI.model$LightboxImageOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$LightboxImageOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.LightboxImageOptionalConfigsRecord = LightboxImageOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$LightboxImageOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LightboxImageOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LightboxImageOptionalConfigsRecordList = (function (_super) {
__extends(LightboxImageOptionalConfigsRecordList, _super);
function LightboxImageOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
LightboxImageOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.LightboxImageOptionalConfigsRecord;
return LightboxImageOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LightboxImageOptionalConfigsRecordList = LightboxImageOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadingRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessCarouselPreloadingRecordList = (function (_super) {
__extends(CommunityBusinessCarouselPreloadingRecordList, _super);
function CommunityBusinessCarouselPreloadingRecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessCarouselPreloadingRecordList.itemType = Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadingRecord;
return CommunityBusinessCarouselPreloadingRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadingRecordList = CommunityBusinessCarouselPreloadingRecordList;

});
define("Connect2_MyBookmarks_MUI.model$MonthOrderYearRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MonthOrderYearRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.MonthOrderYearRecord = MonthOrderYearRecord;

});
define("Connect2_MyBookmarks_MUI.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SizeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SizeRecord = SizeRecord;

});
define("Connect2_MyBookmarks_MUI.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ShapeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ShapeRecord = ShapeRecord;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerTimeFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerTimeFormatRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DatePickerTimeFormatRecord = DatePickerTimeFormatRecord;

});
define("Connect2_MyBookmarks_MUI.model$ProgressCircleOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ProgressCircleOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsList = (function (_super) {
__extends(ProgressCircleOptionalConfigsList, _super);
function ProgressCircleOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsList.itemType = OutSystemsUI_2_23Model.ProgressCircleOptionalConfigsRec;
return ProgressCircleOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ProgressCircleOptionalConfigsList = ProgressCircleOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$BusinessLinkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRecord = (function (_super) {
__extends(BusinessLinkItemRecord, _super);
function BusinessLinkItemRecord(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRecord.attributesToDeclare = function () {
return [
this.attr("BusinessLinkItem", "businessLinkItemAttr", "BusinessLinkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.BusinessLinkItemRec());
}, true, APIDomain_Directory_ISModel.BusinessLinkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BusinessLinkItemRecord.fromStructure = function (str) {
return new BusinessLinkItemRecord(new BusinessLinkItemRecord.RecordClass({
businessLinkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BusinessLinkItemRecord._isAnonymousRecord = true;
BusinessLinkItemRecord.UniqueId = "90f765c9-b98a-5cfb-2d9a-31039302f82b";
BusinessLinkItemRecord.init();
return BusinessLinkItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.BusinessLinkItemRecord = BusinessLinkItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$TriggerRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$TriggerRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.TriggerRecord = TriggerRecord;

});
define("Connect2_MyBookmarks_MUI.model$TriggerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$TriggerRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TriggerRecordList = (function (_super) {
__extends(TriggerRecordList, _super);
function TriggerRecordList(defaults) {
_super.apply(this, arguments);
}
TriggerRecordList.itemType = Connect2_MyBookmarks_MUIModel.TriggerRecord;
return TriggerRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TriggerRecordList = TriggerRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionLocalityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubdivisionLocalityRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionLocalityList = (function (_super) {
__extends(SubdivisionLocalityList, _super);
function SubdivisionLocalityList(defaults) {
_super.apply(this, arguments);
}
SubdivisionLocalityList.itemType = APIDomain_Directory_ISModel.SubdivisionLocalityRec;
return SubdivisionLocalityList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionLocalityList = SubdivisionLocalityList;

});
define("Connect2_MyBookmarks_MUI.model$ProgressBarOptionalConfigsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ProgressBarOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ProgressBarOptionalConfigsRecord = ProgressBarOptionalConfigsRecord;

});
define("Connect2_MyBookmarks_MUI.model$DropdownOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownOptionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DropdownOptionRecord = DropdownOptionRecord;

});
define("Connect2_MyBookmarks_MUI.model$DropdownOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DropdownOptionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownOptionRecordList = (function (_super) {
__extends(DropdownOptionRecordList, _super);
function DropdownOptionRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownOptionRecordList.itemType = Connect2_MyBookmarks_MUIModel.DropdownOptionRecord;
return DropdownOptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownOptionRecordList = DropdownOptionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ClaimItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ClaimItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ClaimItemRecord = (function (_super) {
__extends(ClaimItemRecord, _super);
function ClaimItemRecord(defaults) {
_super.apply(this, arguments);
}
ClaimItemRecord.attributesToDeclare = function () {
return [
this.attr("ClaimItem", "claimItemAttr", "ClaimItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ClaimItemRec());
}, true, APIDomain_Directory_ISModel.ClaimItemRec)
].concat(_super.attributesToDeclare.call(this));
};
ClaimItemRecord.fromStructure = function (str) {
return new ClaimItemRecord(new ClaimItemRecord.RecordClass({
claimItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ClaimItemRecord._isAnonymousRecord = true;
ClaimItemRecord.UniqueId = "9ddedd14-dd5c-9f7c-7e82-41f7477b78d4";
ClaimItemRecord.init();
return ClaimItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ClaimItemRecord = ClaimItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$ClaimItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ClaimItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ClaimItemRecordList = (function (_super) {
__extends(ClaimItemRecordList, _super);
function ClaimItemRecordList(defaults) {
_super.apply(this, arguments);
}
ClaimItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.ClaimItemRecord;
return ClaimItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ClaimItemRecordList = ClaimItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$Type_ShareObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$Type_ShareObjectRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectRecordList = (function (_super) {
__extends(Type_ShareObjectRecordList, _super);
function Type_ShareObjectRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectRecordList.itemType = Connect2_MyBookmarks_MUIModel.Type_ShareObjectRecord;
return Type_ShareObjectRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Type_ShareObjectRecordList = Type_ShareObjectRecordList;

});
define("Connect2_MyBookmarks_MUI.model$LaunchDarkly_FFRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_MyBookmarks_MUI.model", "Connect_CommonEntities_DB.model$LaunchDarkly_FFRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LaunchDarkly_FFRecord = (function (_super) {
__extends(LaunchDarkly_FFRecord, _super);
function LaunchDarkly_FFRecord(defaults) {
_super.apply(this, arguments);
}
LaunchDarkly_FFRecord.attributesToDeclare = function () {
return [
this.attr("LaunchDarkly_FF", "launchDarkly_FFAttr", "LaunchDarkly_FF", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.LaunchDarkly_FFRec());
}, true, Connect_CommonEntities_DBModel.LaunchDarkly_FFRec)
].concat(_super.attributesToDeclare.call(this));
};
LaunchDarkly_FFRecord.fromStructure = function (str) {
return new LaunchDarkly_FFRecord(new LaunchDarkly_FFRecord.RecordClass({
launchDarkly_FFAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LaunchDarkly_FFRecord._isAnonymousRecord = true;
LaunchDarkly_FFRecord.UniqueId = "fb52a23f-dace-b93e-2dcf-050be155d4f9";
LaunchDarkly_FFRecord.init();
return LaunchDarkly_FFRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LaunchDarkly_FFRecord = LaunchDarkly_FFRecord;

});
define("Connect2_MyBookmarks_MUI.model$LaunchDarkly_FFRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LaunchDarkly_FFRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LaunchDarkly_FFRecordList = (function (_super) {
__extends(LaunchDarkly_FFRecordList, _super);
function LaunchDarkly_FFRecordList(defaults) {
_super.apply(this, arguments);
}
LaunchDarkly_FFRecordList.itemType = Connect2_MyBookmarks_MUIModel.LaunchDarkly_FFRecord;
return LaunchDarkly_FFRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LaunchDarkly_FFRecordList = LaunchDarkly_FFRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SplideProviderClassesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SplideProviderClassesRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesList = (function (_super) {
__extends(SplideProviderClassesList, _super);
function SplideProviderClassesList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesList.itemType = OutSystemsUI_2_23Model.SplideProviderClassesRec;
return SplideProviderClassesList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SplideProviderClassesList = SplideProviderClassesList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableSubdivisionInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationList = (function (_super) {
__extends(CacheableSubdivisionInformationList, _super);
function CacheableSubdivisionInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationList.itemType = Connect2_LegacySharedModel.CacheableSubdivisionInformationRec;
return CacheableSubdivisionInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CacheableSubdivisionInformationList = CacheableSubdivisionInformationList;

});
define("Connect2_MyBookmarks_MUI.model$DetailsJsonRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DetailsJsonRecord = (function (_super) {
__extends(DetailsJsonRecord, _super);
function DetailsJsonRecord(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRecord.attributesToDeclare = function () {
return [
this.attr("DetailsJson", "detailsJsonAttr", "DetailsJson", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.DetailsJsonRec());
}, true, Connect2_MyBookmarks_ISModel.DetailsJsonRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailsJsonRecord.fromStructure = function (str) {
return new DetailsJsonRecord(new DetailsJsonRecord.RecordClass({
detailsJsonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailsJsonRecord._isAnonymousRecord = true;
DetailsJsonRecord.UniqueId = "e5c679bb-91b8-85c7-2973-16a31f6d9560";
DetailsJsonRecord.init();
return DetailsJsonRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.DetailsJsonRecord = DetailsJsonRecord;

});
define("Connect2_MyBookmarks_MUI.model$DetailsJsonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DetailsJsonRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DetailsJsonRecordList = (function (_super) {
__extends(DetailsJsonRecordList, _super);
function DetailsJsonRecordList(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRecordList.itemType = Connect2_MyBookmarks_MUIModel.DetailsJsonRecord;
return DetailsJsonRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DetailsJsonRecordList = DetailsJsonRecordList;

});
define("Connect2_MyBookmarks_MUI.model$MonthYearList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MonthYearRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MonthYearList = (function (_super) {
__extends(MonthYearList, _super);
function MonthYearList(defaults) {
_super.apply(this, arguments);
}
MonthYearList.itemType = OutSystemsUI_2_23Model.MonthYearRec;
return MonthYearList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MonthYearList = MonthYearList;

});
define("Connect2_MyBookmarks_MUI.model$ConnectConfigList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ConnectConfigRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ConnectConfigList = (function (_super) {
__extends(ConnectConfigList, _super);
function ConnectConfigList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigList.itemType = APIDomain_Directory_ISModel.ConnectConfigRec;
return ConnectConfigList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ConnectConfigList = ConnectConfigList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableGeocodeInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationList = (function (_super) {
__extends(CacheableGeocodeInformationList, _super);
function CacheableGeocodeInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationList.itemType = Connect2_LegacySharedModel.CacheableGeocodeInformationRec;
return CacheableGeocodeInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CacheableGeocodeInformationList = CacheableGeocodeInformationList;

});
define("Connect2_MyBookmarks_MUI.model$CallInfoStructureList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CallInfoStructureRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CallInfoStructureList = (function (_super) {
__extends(CallInfoStructureList, _super);
function CallInfoStructureList(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureList.itemType = Connect2_LegacySharedModel.CallInfoStructureRec;
return CallInfoStructureList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CallInfoStructureList = CallInfoStructureList;

});
define("Connect2_MyBookmarks_MUI.model$DeviceResponsiveList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DeviceResponsiveRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveList = (function (_super) {
__extends(DeviceResponsiveList, _super);
function DeviceResponsiveList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveList.itemType = OutSystemsUI_2_23Model.DeviceResponsiveRec;
return DeviceResponsiveList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DeviceResponsiveList = DeviceResponsiveList;

});
define("Connect2_MyBookmarks_MUI.model$ExtensionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ExtensionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ExtensionList = (function (_super) {
__extends(ExtensionList, _super);
function ExtensionList(defaults) {
_super.apply(this, arguments);
}
ExtensionList.itemType = APIDomain_Directory_ISModel.ExtensionRec;
return ExtensionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ExtensionList = ExtensionList;

});
define("Connect2_MyBookmarks_MUI.model$RangeSliderOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$RangeSliderOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var RangeSliderOptionalConfigsList = (function (_super) {
__extends(RangeSliderOptionalConfigsList, _super);
function RangeSliderOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
RangeSliderOptionalConfigsList.itemType = OutSystemsUI_2_23Model.RangeSliderOptionalConfigsRec;
return RangeSliderOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.RangeSliderOptionalConfigsList = RangeSliderOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$BusinessLinkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BusinessLinkItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemRecordList = (function (_super) {
__extends(BusinessLinkItemRecordList, _super);
function BusinessLinkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.BusinessLinkItemRecord;
return BusinessLinkItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BusinessLinkItemRecordList = BusinessLinkItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ConnectConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ConnectConfigRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ConnectConfigRecordList = (function (_super) {
__extends(ConnectConfigRecordList, _super);
function ConnectConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ConnectConfigRecordList.itemType = Connect2_MyBookmarks_MUIModel.ConnectConfigRecord;
return ConnectConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ConnectConfigRecordList = ConnectConfigRecordList;

});
define("Connect2_MyBookmarks_MUI.model$Directory_CDNList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Directory_CDNList = (function (_super) {
__extends(Directory_CDNList, _super);
function Directory_CDNList(defaults) {
_super.apply(this, arguments);
}
Directory_CDNList.itemType = APIDomain_Directory_ISModel.Directory_CDNRec;
return Directory_CDNList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Directory_CDNList = Directory_CDNList;

});
define("Connect2_MyBookmarks_MUI.model$SideMenuBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorList = (function (_super) {
__extends(SideMenuBehaviorList, _super);
function SideMenuBehaviorList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorList.itemType = OutSystemsUI_2_23Model.SideMenuBehaviorRec;
return SideMenuBehaviorList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SideMenuBehaviorList = SideMenuBehaviorList;

});
define("Connect2_MyBookmarks_MUI.model$DeviceConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DeviceConfigurationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationList = (function (_super) {
__extends(DeviceConfigurationList, _super);
function DeviceConfigurationList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationList.itemType = OutSystemsUI_2_23Model.DeviceConfigurationRec;
return DeviceConfigurationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DeviceConfigurationList = DeviceConfigurationList;

});
define("Connect2_MyBookmarks_MUI.model$ConfigList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ConfigRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ConfigList = (function (_super) {
__extends(ConfigList, _super);
function ConfigList(defaults) {
_super.apply(this, arguments);
}
ConfigList.itemType = APIDomain_Directory_ISModel.ConfigRec;
return ConfigList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ConfigList = ConfigList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$PhotoDetailsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRecordList = (function (_super) {
__extends(PhotoDetailsRecordList, _super);
function PhotoDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRecordList.itemType = Connect2_MyBookmarks_MUIModel.PhotoDetailsRecord;
return PhotoDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoDetailsRecordList = PhotoDetailsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DEPRECATED_MasterDetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DEPRECATED_MasterDetailItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DEPRECATED_MasterDetailItemRecordList = (function (_super) {
__extends(DEPRECATED_MasterDetailItemRecordList, _super);
function DEPRECATED_MasterDetailItemRecordList(defaults) {
_super.apply(this, arguments);
}
DEPRECATED_MasterDetailItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.DEPRECATED_MasterDetailItemRecord;
return DEPRECATED_MasterDetailItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DEPRECATED_MasterDetailItemRecordList = DEPRECATED_MasterDetailItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityResultItemWithGPSRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LocalityResultItemWithGPSRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityResultItemWithGPSRecordList = (function (_super) {
__extends(LocalityResultItemWithGPSRecordList, _super);
function LocalityResultItemWithGPSRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityResultItemWithGPSRecordList.itemType = Connect2_MyBookmarks_MUIModel.LocalityResultItemWithGPSRecord;
return LocalityResultItemWithGPSRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityResultItemWithGPSRecordList = LocalityResultItemWithGPSRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableSubdivisionInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CacheableSubdivisionInformationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableSubdivisionInformationRecordList = (function (_super) {
__extends(CacheableSubdivisionInformationRecordList, _super);
function CacheableSubdivisionInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableSubdivisionInformationRecordList.itemType = Connect2_MyBookmarks_MUIModel.CacheableSubdivisionInformationRecord;
return CacheableSubdivisionInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CacheableSubdivisionInformationRecordList = CacheableSubdivisionInformationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$Users_Current_GETResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Users_Current_GETResponseList = (function (_super) {
__extends(Users_Current_GETResponseList, _super);
function Users_Current_GETResponseList(defaults) {
_super.apply(this, arguments);
}
Users_Current_GETResponseList.itemType = APIDomain_Directory_ISModel.Users_Current_GETResponseRec;
return Users_Current_GETResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Users_Current_GETResponseList = Users_Current_GETResponseList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecord = (function (_super) {
__extends(BookmarkItemRecord, _super);
function BookmarkItemRecord(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkItem", "bookmarkItemAttr", "BookmarkItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkItemRec());
}, true, Connect2_MyBookmarks_ISModel.BookmarkItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkItemRecord.fromStructure = function (str) {
return new BookmarkItemRecord(new BookmarkItemRecord.RecordClass({
bookmarkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BookmarkItemRecord._isAnonymousRecord = true;
BookmarkItemRecord.UniqueId = "aba0b140-6102-15e5-c64e-80ff3532321e";
BookmarkItemRecord.init();
return BookmarkItemRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.BookmarkItemRecord = BookmarkItemRecord;

});
define("Connect2_MyBookmarks_MUI.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BreakColumnsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = Connect2_MyBookmarks_MUIModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GetGroupSummariesResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GetGroupSummariesResponseRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetGroupSummariesResponseRecordList = (function (_super) {
__extends(GetGroupSummariesResponseRecordList, _super);
function GetGroupSummariesResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetGroupSummariesResponseRecordList.itemType = Connect2_MyBookmarks_MUIModel.GetGroupSummariesResponseRecord;
return GetGroupSummariesResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetGroupSummariesResponseRecordList = GetGroupSummariesResponseRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerRangeOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DatePickerRangeOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerRangeOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerRangeOptionalConfigsRecordList, _super);
function DatePickerRangeOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerRangeOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.DatePickerRangeOptionalConfigsRecord;
return DatePickerRangeOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerRangeOptionalConfigsRecordList = DatePickerRangeOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$CDNRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CDNRecord = (function (_super) {
__extends(CDNRecord, _super);
function CDNRecord(defaults) {
_super.apply(this, arguments);
}
CDNRecord.attributesToDeclare = function () {
return [
this.attr("CDN", "cDNAttr", "CDN", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.CDNRec());
}, true, Connect2_MyBookmarks_ISModel.CDNRec)
].concat(_super.attributesToDeclare.call(this));
};
CDNRecord.fromStructure = function (str) {
return new CDNRecord(new CDNRecord.RecordClass({
cDNAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDNRecord._isAnonymousRecord = true;
CDNRecord.UniqueId = "ad3e09fe-4a6f-49b6-f78a-381a75da4321";
CDNRecord.init();
return CDNRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CDNRecord = CDNRecord;

});
define("Connect2_MyBookmarks_MUI.model$AccordionIconPositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$AccordionIconPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AccordionIconPositionList = (function (_super) {
__extends(AccordionIconPositionList, _super);
function AccordionIconPositionList(defaults) {
_super.apply(this, arguments);
}
AccordionIconPositionList.itemType = OutSystemsUI_2_23Model.AccordionIconPositionRec;
return AccordionIconPositionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AccordionIconPositionList = AccordionIconPositionList;

});
define("Connect2_MyBookmarks_MUI.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SizeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = Connect2_MyBookmarks_MUIModel.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SizeRecordList = SizeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CallInfoStructureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CallInfoStructureRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CallInfoStructureRecord = (function (_super) {
__extends(CallInfoStructureRecord, _super);
function CallInfoStructureRecord(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureRecord.attributesToDeclare = function () {
return [
this.attr("CallInfoStructure", "callInfoStructureAttr", "CallInfoStructure", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CallInfoStructureRec());
}, true, Connect2_LegacySharedModel.CallInfoStructureRec)
].concat(_super.attributesToDeclare.call(this));
};
CallInfoStructureRecord.fromStructure = function (str) {
return new CallInfoStructureRecord(new CallInfoStructureRecord.RecordClass({
callInfoStructureAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CallInfoStructureRecord._isAnonymousRecord = true;
CallInfoStructureRecord.UniqueId = "af7a59d3-772a-48fc-effb-de854a8b9fd8";
CallInfoStructureRecord.init();
return CallInfoStructureRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CallInfoStructureRecord = CallInfoStructureRecord;

});
define("Connect2_MyBookmarks_MUI.model$CacheableGeocodeInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CacheableGeocodeInformationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableGeocodeInformationRecordList = (function (_super) {
__extends(CacheableGeocodeInformationRecordList, _super);
function CacheableGeocodeInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableGeocodeInformationRecordList.itemType = Connect2_MyBookmarks_MUIModel.CacheableGeocodeInformationRecord;
return CacheableGeocodeInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CacheableGeocodeInformationRecordList = CacheableGeocodeInformationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionLocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SubdivisionLocalityRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionLocalityRecordList = (function (_super) {
__extends(SubdivisionLocalityRecordList, _super);
function SubdivisionLocalityRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionLocalityRecordList.itemType = Connect2_MyBookmarks_MUIModel.SubdivisionLocalityRecord;
return SubdivisionLocalityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionLocalityRecordList = SubdivisionLocalityRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerWeekDayList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerWeekDayRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerWeekDayList = (function (_super) {
__extends(DatePickerWeekDayList, _super);
function DatePickerWeekDayList(defaults) {
_super.apply(this, arguments);
}
DatePickerWeekDayList.itemType = OutSystemsUI_2_23Model.DatePickerWeekDayRec;
return DatePickerWeekDayList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerWeekDayList = DatePickerWeekDayList;

});
define("Connect2_MyBookmarks_MUI.model$TabsOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$TabsOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TabsOptionalConfigsList = (function (_super) {
__extends(TabsOptionalConfigsList, _super);
function TabsOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TabsOptionalConfigsList.itemType = OutSystemsUI_2_23Model.TabsOptionalConfigsRec;
return TabsOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TabsOptionalConfigsList = TabsOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CarouselDirectionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionRecordList = (function (_super) {
__extends(CarouselDirectionRecordList, _super);
function CarouselDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionRecordList.itemType = Connect2_MyBookmarks_MUIModel.CarouselDirectionRecord;
return CarouselDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselDirectionRecordList = CarouselDirectionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DatePickerLanguageRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageRecordList = (function (_super) {
__extends(DatePickerLanguageRecordList, _super);
function DatePickerLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageRecordList.itemType = Connect2_MyBookmarks_MUIModel.DatePickerLanguageRecord;
return DatePickerLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerLanguageRecordList = DatePickerLanguageRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BulkActionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$BulkActionsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BulkActionsList = (function (_super) {
__extends(BulkActionsList, _super);
function BulkActionsList(defaults) {
_super.apply(this, arguments);
}
BulkActionsList.itemType = OutSystemsUI_2_23Model.BulkActionsRec;
return BulkActionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BulkActionsList = BulkActionsList;

});
define("Connect2_MyBookmarks_MUI.model$MonthOrderYearRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MonthOrderYearRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MonthOrderYearRecordList = (function (_super) {
__extends(MonthOrderYearRecordList, _super);
function MonthOrderYearRecordList(defaults) {
_super.apply(this, arguments);
}
MonthOrderYearRecordList.itemType = Connect2_MyBookmarks_MUIModel.MonthOrderYearRecord;
return MonthOrderYearRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MonthOrderYearRecordList = MonthOrderYearRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessType2Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CommunityBusinessTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessType2Record = (function (_super) {
__extends(CommunityBusinessType2Record, _super);
function CommunityBusinessType2Record(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessType2Record.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessType", "communityBusinessTypeAttr", "CommunityBusinessType2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CommunityBusinessTypeRec());
}, true, Connect2_LegacySharedModel.CommunityBusinessTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
CommunityBusinessType2Record.fromStructure = function (str) {
return new CommunityBusinessType2Record(new CommunityBusinessType2Record.RecordClass({
communityBusinessTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommunityBusinessType2Record._isAnonymousRecord = true;
CommunityBusinessType2Record.UniqueId = "bbd63b99-8aca-5910-ddf7-b72027415e79";
CommunityBusinessType2Record.init();
return CommunityBusinessType2Record;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CommunityBusinessType2Record = CommunityBusinessType2Record;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessType2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CommunityBusinessType2Record"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessType2RecordList = (function (_super) {
__extends(CommunityBusinessType2RecordList, _super);
function CommunityBusinessType2RecordList(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessType2RecordList.itemType = Connect2_MyBookmarks_MUIModel.CommunityBusinessType2Record;
return CommunityBusinessType2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CommunityBusinessType2RecordList = CommunityBusinessType2RecordList;

});
define("Connect2_MyBookmarks_MUI.model$HallPhotoExtensiveList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveList = (function (_super) {
__extends(HallPhotoExtensiveList, _super);
function HallPhotoExtensiveList(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveList.itemType = APIDomain_Directory_ISModel.HallPhotoExtensiveRec;
return HallPhotoExtensiveList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HallPhotoExtensiveList = HallPhotoExtensiveList;

});
define("Connect2_MyBookmarks_MUI.model$EventList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "Connect2_MyBookmarks_MUI.model", "FullCalendarReactive.model$EventRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$FullCalendarReactive"], function (exports, OutSystems, FullCalendarReactiveModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var EventList = (function (_super) {
__extends(EventList, _super);
function EventList(defaults) {
_super.apply(this, arguments);
}
EventList.itemType = FullCalendarReactiveModel.EventRec;
return EventList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.EventList = EventList;

});
define("Connect2_MyBookmarks_MUI.model$ScrollbarStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ScrollbarStyleRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ScrollbarStyleRecord = ScrollbarStyleRecord;

});
define("Connect2_MyBookmarks_MUI.model$ScrollbarStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ScrollbarStyleRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ScrollbarStyleRecordList = (function (_super) {
__extends(ScrollbarStyleRecordList, _super);
function ScrollbarStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ScrollbarStyleRecordList.itemType = Connect2_MyBookmarks_MUIModel.ScrollbarStyleRecord;
return ScrollbarStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ScrollbarStyleRecordList = ScrollbarStyleRecordList;

});
define("Connect2_MyBookmarks_MUI.model$LocalBookmarkList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalBookmarkList = (function (_super) {
__extends(LocalBookmarkList, _super);
function LocalBookmarkList(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkList.itemType = Connect2_LegacySharedModel.LocalBookmarkRec;
return LocalBookmarkList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalBookmarkList = LocalBookmarkList;

});
define("Connect2_MyBookmarks_MUI.model$SplideProvideri18nRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SplideProvideri18nRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SplideProvideri18nRecord = SplideProvideri18nRecord;

});
define("Connect2_MyBookmarks_MUI.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$ColorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.ColorRecord = ColorRecord;

});
define("Connect2_MyBookmarks_MUI.model$LocalBookmarkRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRecord = (function (_super) {
__extends(LocalBookmarkRecord, _super);
function LocalBookmarkRecord(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRecord.attributesToDeclare = function () {
return [
this.attr("LocalBookmark", "localBookmarkAttr", "LocalBookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalBookmarkRec());
}, true, Connect2_LegacySharedModel.LocalBookmarkRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalBookmarkRecord.fromStructure = function (str) {
return new LocalBookmarkRecord(new LocalBookmarkRecord.RecordClass({
localBookmarkAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalBookmarkRecord._isAnonymousRecord = true;
LocalBookmarkRecord.UniqueId = "b9fb5354-c450-4d8a-c89a-3d31a340832e";
LocalBookmarkRecord.init();
return LocalBookmarkRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LocalBookmarkRecord = LocalBookmarkRecord;

});
define("Connect2_MyBookmarks_MUI.model$FlatpickrConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$FlatpickrConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var FlatpickrConfigsList = (function (_super) {
__extends(FlatpickrConfigsList, _super);
function FlatpickrConfigsList(defaults) {
_super.apply(this, arguments);
}
FlatpickrConfigsList.itemType = OutSystemsUI_2_23Model.FlatpickrConfigsRec;
return FlatpickrConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.FlatpickrConfigsList = FlatpickrConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$HallPhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HallPhotoList = (function (_super) {
__extends(HallPhotoList, _super);
function HallPhotoList(defaults) {
_super.apply(this, arguments);
}
HallPhotoList.itemType = APIDomain_Directory_ISModel.HallPhotoRec;
return HallPhotoList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HallPhotoList = HallPhotoList;

});
define("Connect2_MyBookmarks_MUI.model$DeviceResponsiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DeviceResponsiveRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DeviceResponsiveRecordList = (function (_super) {
__extends(DeviceResponsiveRecordList, _super);
function DeviceResponsiveRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceResponsiveRecordList.itemType = Connect2_MyBookmarks_MUIModel.DeviceResponsiveRecord;
return DeviceResponsiveRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DeviceResponsiveRecordList = DeviceResponsiveRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CDN2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$CDNRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CDN2List = (function (_super) {
__extends(CDN2List, _super);
function CDN2List(defaults) {
_super.apply(this, arguments);
}
CDN2List.itemType = APIDomain_Directory_ISModel.CDNRec;
return CDN2List;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CDN2List = CDN2List;

});
define("Connect2_MyBookmarks_MUI.model$Connect_EntityList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_MyBookmarks_MUI.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Connect_EntityList = (function (_super) {
__extends(Connect_EntityList, _super);
function Connect_EntityList(defaults) {
_super.apply(this, arguments);
}
Connect_EntityList.itemType = Connect_CommonEntities_DBModel.Connect_EntityRec;
return Connect_EntityList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Connect_EntityList = Connect_EntityList;

});
define("Connect2_MyBookmarks_MUI.model$SideMenuBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SideMenuBehaviorRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SideMenuBehaviorRecord = SideMenuBehaviorRecord;

});
define("Connect2_MyBookmarks_MUI.model$SideMenuBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SideMenuBehaviorRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SideMenuBehaviorRecordList = (function (_super) {
__extends(SideMenuBehaviorRecordList, _super);
function SideMenuBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
SideMenuBehaviorRecordList.itemType = Connect2_MyBookmarks_MUIModel.SideMenuBehaviorRecord;
return SideMenuBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SideMenuBehaviorRecordList = SideMenuBehaviorRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SizeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUI_2_23Model.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SizeList = SizeList;

});
define("Connect2_MyBookmarks_MUI.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ShapeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = Connect2_MyBookmarks_MUIModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ShapeRecordList = ShapeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$MemoryCacheResultList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_MyBookmarks_MUI.model", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultList = (function (_super) {
__extends(MemoryCacheResultList, _super);
function MemoryCacheResultList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultList.itemType = MemoryClientCacheModel.MemoryCacheResultRec;
return MemoryCacheResultList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MemoryCacheResultList = MemoryCacheResultList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableLocalityInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRecord = (function (_super) {
__extends(CacheableLocalityInformationRecord, _super);
function CacheableLocalityInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheableLocalityInformation", "cacheableLocalityInformationAttr", "CacheableLocalityInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableLocalityInformationRec());
}, true, Connect2_LegacySharedModel.CacheableLocalityInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheableLocalityInformationRecord.fromStructure = function (str) {
return new CacheableLocalityInformationRecord(new CacheableLocalityInformationRecord.RecordClass({
cacheableLocalityInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheableLocalityInformationRecord._isAnonymousRecord = true;
CacheableLocalityInformationRecord.UniqueId = "bffb0164-d348-91fa-fe8a-679847f00fdc";
CacheableLocalityInformationRecord.init();
return CacheableLocalityInformationRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CacheableLocalityInformationRecord = CacheableLocalityInformationRecord;

});
define("Connect2_MyBookmarks_MUI.model$NotificationOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$NotificationOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var NotificationOptionalConfigsRecordList = (function (_super) {
__extends(NotificationOptionalConfigsRecordList, _super);
function NotificationOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.NotificationOptionalConfigsRecord;
return NotificationOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.NotificationOptionalConfigsRecordList = NotificationOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$LocalityRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityRecord = (function (_super) {
__extends(LocalityRecord, _super);
function LocalityRecord(defaults) {
_super.apply(this, arguments);
}
LocalityRecord.attributesToDeclare = function () {
return [
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityRec());
}, true, APIDomain_Directory_ISModel.LocalityRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityRecord.fromStructure = function (str) {
return new LocalityRecord(new LocalityRecord.RecordClass({
localityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityRecord._isAnonymousRecord = true;
LocalityRecord.UniqueId = "c03dcc02-7922-03ee-9d9e-39e2c4d9e0e7";
LocalityRecord.init();
return LocalityRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.LocalityRecord = LocalityRecord;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecord = (function (_super) {
__extends(MyBookmarks_GroupRecord, _super);
function MyBookmarks_GroupRecord(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecord.attributesToDeclare = function () {
return [
this.attr("MyBookmarks_Group", "myBookmarks_GroupAttr", "MyBookmarks_Group", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec());
}, true, Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_GroupRecord.fromStructure = function (str) {
return new MyBookmarks_GroupRecord(new MyBookmarks_GroupRecord.RecordClass({
myBookmarks_GroupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_GroupRecord._isAnonymousRecord = true;
MyBookmarks_GroupRecord.UniqueId = "d5562bf4-2fac-a49a-16aa-434ebfa850c3";
MyBookmarks_GroupRecord.init();
return MyBookmarks_GroupRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.MyBookmarks_GroupRecord = MyBookmarks_GroupRecord;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MyBookmarks_GroupRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecordList = (function (_super) {
__extends(MyBookmarks_GroupRecordList, _super);
function MyBookmarks_GroupRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecordList.itemType = Connect2_MyBookmarks_MUIModel.MyBookmarks_GroupRecord;
return MyBookmarks_GroupRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MyBookmarks_GroupRecordList = MyBookmarks_GroupRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DeviceConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DeviceConfigurationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.DeviceConfigurationRecord = DeviceConfigurationRecord;

});
define("Connect2_MyBookmarks_MUI.model$UserSubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "Connect2_MyBookmarks_MUI.model", "DirectoryClientCore.model$UserSubscriptionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$DirectoryClientCore"], function (exports, OutSystems, DirectoryClientCoreModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UserSubscriptionRecord = (function (_super) {
__extends(UserSubscriptionRecord, _super);
function UserSubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("UserSubscription", "userSubscriptionAttr", "UserSubscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new DirectoryClientCoreModel.UserSubscriptionRec());
}, true, DirectoryClientCoreModel.UserSubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
UserSubscriptionRecord.fromStructure = function (str) {
return new UserSubscriptionRecord(new UserSubscriptionRecord.RecordClass({
userSubscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserSubscriptionRecord._isAnonymousRecord = true;
UserSubscriptionRecord.UniqueId = "e7c19f78-907b-4217-d008-28c49c95c048";
UserSubscriptionRecord.init();
return UserSubscriptionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.UserSubscriptionRecord = UserSubscriptionRecord;

});
define("Connect2_MyBookmarks_MUI.model$UserSubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$UserSubscriptionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UserSubscriptionRecordList = (function (_super) {
__extends(UserSubscriptionRecordList, _super);
function UserSubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
UserSubscriptionRecordList.itemType = Connect2_MyBookmarks_MUIModel.UserSubscriptionRecord;
return UserSubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.UserSubscriptionRecordList = UserSubscriptionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GetLocalityStatisticsResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GetLocalityStatisticsResponseRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetLocalityStatisticsResponseRecordList = (function (_super) {
__extends(GetLocalityStatisticsResponseRecordList, _super);
function GetLocalityStatisticsResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsResponseRecordList.itemType = Connect2_MyBookmarks_MUIModel.GetLocalityStatisticsResponseRecord;
return GetLocalityStatisticsResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetLocalityStatisticsResponseRecordList = GetLocalityStatisticsResponseRecordList;

});
define("Connect2_MyBookmarks_MUI.model$OpeningHourItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$OpeningHourItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OpeningHourItemRecordList = (function (_super) {
__extends(OpeningHourItemRecordList, _super);
function OpeningHourItemRecordList(defaults) {
_super.apply(this, arguments);
}
OpeningHourItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.OpeningHourItemRecord;
return OpeningHourItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.OpeningHourItemRecordList = OpeningHourItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ProgressBarOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ProgressBarOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ProgressBarOptionalConfigsRecordList = (function (_super) {
__extends(ProgressBarOptionalConfigsRecordList, _super);
function ProgressBarOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressBarOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.ProgressBarOptionalConfigsRecord;
return ProgressBarOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ProgressBarOptionalConfigsRecordList = ProgressBarOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$InterchangeItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$InterchangeItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var InterchangeItemRecordList = (function (_super) {
__extends(InterchangeItemRecordList, _super);
function InterchangeItemRecordList(defaults) {
_super.apply(this, arguments);
}
InterchangeItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.InterchangeItemRecord;
return InterchangeItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.InterchangeItemRecordList = InterchangeItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$SubscriptionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubscriptionList = (function (_super) {
__extends(SubscriptionList, _super);
function SubscriptionList(defaults) {
_super.apply(this, arguments);
}
SubscriptionList.itemType = APIDomain_Directory_ISModel.SubscriptionRec;
return SubscriptionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubscriptionList = SubscriptionList;

});
define("Connect2_MyBookmarks_MUI.model$PolicyActivationList", ["exports", "OutSystems/ClientRuntime/Main", "DirectoryClientCore.model", "Connect2_MyBookmarks_MUI.model", "DirectoryClientCore.model$PolicyActivationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$DirectoryClientCore"], function (exports, OutSystems, DirectoryClientCoreModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PolicyActivationList = (function (_super) {
__extends(PolicyActivationList, _super);
function PolicyActivationList(defaults) {
_super.apply(this, arguments);
}
PolicyActivationList.itemType = DirectoryClientCoreModel.PolicyActivationRec;
return PolicyActivationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PolicyActivationList = PolicyActivationList;

});
define("Connect2_MyBookmarks_MUI.model$Connect_EntityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$Connect_EntityRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Connect_EntityRecordList = (function (_super) {
__extends(Connect_EntityRecordList, _super);
function Connect_EntityRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_EntityRecordList.itemType = Connect2_MyBookmarks_MUIModel.Connect_EntityRecord;
return Connect_EntityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Connect_EntityRecordList = Connect_EntityRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DeviceConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DeviceConfigurationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DeviceConfigurationRecordList = (function (_super) {
__extends(DeviceConfigurationRecordList, _super);
function DeviceConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
DeviceConfigurationRecordList.itemType = Connect2_MyBookmarks_MUIModel.DeviceConfigurationRecord;
return DeviceConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DeviceConfigurationRecordList = DeviceConfigurationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CountryWithMapPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRecord = (function (_super) {
__extends(CountryWithMapPositionRecord, _super);
function CountryWithMapPositionRecord(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRecord.attributesToDeclare = function () {
return [
this.attr("CountryWithMapPosition", "countryWithMapPositionAttr", "CountryWithMapPosition", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CountryWithMapPositionRec());
}, true, Connect2_LegacySharedModel.CountryWithMapPositionRec)
].concat(_super.attributesToDeclare.call(this));
};
CountryWithMapPositionRecord.fromStructure = function (str) {
return new CountryWithMapPositionRecord(new CountryWithMapPositionRecord.RecordClass({
countryWithMapPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CountryWithMapPositionRecord._isAnonymousRecord = true;
CountryWithMapPositionRecord.UniqueId = "c720f651-2f17-9b7e-5b82-d2943e69a968";
CountryWithMapPositionRecord.init();
return CountryWithMapPositionRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CountryWithMapPositionRecord = CountryWithMapPositionRecord;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_ObjectTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeRecord = (function (_super) {
__extends(MyBookmarks_ObjectTypeRecord, _super);
function MyBookmarks_ObjectTypeRecord(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeRecord.attributesToDeclare = function () {
return [
this.attr("MyBookmarks_ObjectType", "myBookmarks_ObjectTypeAttr", "MyBookmarks_ObjectType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec());
}, true, Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_ObjectTypeRecord.fromStructure = function (str) {
return new MyBookmarks_ObjectTypeRecord(new MyBookmarks_ObjectTypeRecord.RecordClass({
myBookmarks_ObjectTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_ObjectTypeRecord._isAnonymousRecord = true;
MyBookmarks_ObjectTypeRecord.UniqueId = "c8e45004-2c67-ba1f-8483-7a5a6c10d5bc";
MyBookmarks_ObjectTypeRecord.init();
return MyBookmarks_ObjectTypeRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.MyBookmarks_ObjectTypeRecord = MyBookmarks_ObjectTypeRecord;

});
define("Connect2_MyBookmarks_MUI.model$PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$PhotoRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoRecordList = (function (_super) {
__extends(PhotoRecordList, _super);
function PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
PhotoRecordList.itemType = Connect2_MyBookmarks_MUIModel.PhotoRecord;
return PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoRecordList = PhotoRecordList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerLanguageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerLanguageRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerLanguageList = (function (_super) {
__extends(DatePickerLanguageList, _super);
function DatePickerLanguageList(defaults) {
_super.apply(this, arguments);
}
DatePickerLanguageList.itemType = OutSystemsUI_2_23Model.DatePickerLanguageRec;
return DatePickerLanguageList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerLanguageList = DatePickerLanguageList;

});
define("Connect2_MyBookmarks_MUI.model$CountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CountryRecord = (function (_super) {
__extends(CountryRecord, _super);
function CountryRecord(defaults) {
_super.apply(this, arguments);
}
CountryRecord.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CountryRec());
}, true, APIDomain_Directory_ISModel.CountryRec)
].concat(_super.attributesToDeclare.call(this));
};
CountryRecord.fromStructure = function (str) {
return new CountryRecord(new CountryRecord.RecordClass({
countryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CountryRecord._isAnonymousRecord = true;
CountryRecord.UniqueId = "ca5bf4ee-fb3d-ba53-00f5-83305fe3b8e6";
CountryRecord.init();
return CountryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.CountryRecord = CountryRecord;

});
define("Connect2_MyBookmarks_MUI.model$LaunchDarkly_FFList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_MyBookmarks_MUI.model", "Connect_CommonEntities_DB.model$LaunchDarkly_FFRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LaunchDarkly_FFList = (function (_super) {
__extends(LaunchDarkly_FFList, _super);
function LaunchDarkly_FFList(defaults) {
_super.apply(this, arguments);
}
LaunchDarkly_FFList.itemType = Connect_CommonEntities_DBModel.LaunchDarkly_FFRec;
return LaunchDarkly_FFList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LaunchDarkly_FFList = LaunchDarkly_FFList;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_ObjectTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MyBookmarks_ObjectTypeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeRecordList = (function (_super) {
__extends(MyBookmarks_ObjectTypeRecordList, _super);
function MyBookmarks_ObjectTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeRecordList.itemType = Connect2_MyBookmarks_MUIModel.MyBookmarks_ObjectTypeRecord;
return MyBookmarks_ObjectTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MyBookmarks_ObjectTypeRecordList = MyBookmarks_ObjectTypeRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselNavigationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CarouselNavigationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationRecordList = (function (_super) {
__extends(CarouselNavigationRecordList, _super);
function CarouselNavigationRecordList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationRecordList.itemType = Connect2_MyBookmarks_MUIModel.CarouselNavigationRecord;
return CarouselNavigationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselNavigationRecordList = CarouselNavigationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$Householder_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$Householder_MemberRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Householder_MemberRecord = (function (_super) {
__extends(Householder_MemberRecord, _super);
function Householder_MemberRecord(defaults) {
_super.apply(this, arguments);
}
Householder_MemberRecord.attributesToDeclare = function () {
return [
this.attr("Householder_Member", "householder_MemberAttr", "Householder_Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Householder_MemberRec());
}, true, APIDomain_Directory_ISModel.Householder_MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
Householder_MemberRecord.fromStructure = function (str) {
return new Householder_MemberRecord(new Householder_MemberRecord.RecordClass({
householder_MemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Householder_MemberRecord._isAnonymousRecord = true;
Householder_MemberRecord.UniqueId = "cec076a0-962e-2e49-dcdc-340914fdcaa8";
Householder_MemberRecord.init();
return Householder_MemberRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.Householder_MemberRecord = Householder_MemberRecord;

});
define("Connect2_MyBookmarks_MUI.model$SubdivisionExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SubdivisionExtendedRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SubdivisionExtendedRecordList = (function (_super) {
__extends(SubdivisionExtendedRecordList, _super);
function SubdivisionExtendedRecordList(defaults) {
_super.apply(this, arguments);
}
SubdivisionExtendedRecordList.itemType = Connect2_MyBookmarks_MUIModel.SubdivisionExtendedRecord;
return SubdivisionExtendedRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SubdivisionExtendedRecordList = SubdivisionExtendedRecordList;

});
define("Connect2_MyBookmarks_MUI.model$UI_ShareableObject_GenericList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericList = (function (_super) {
__extends(UI_ShareableObject_GenericList, _super);
function UI_ShareableObject_GenericList(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericList.itemType = Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec;
return UI_ShareableObject_GenericList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.UI_ShareableObject_GenericList = UI_ShareableObject_GenericList;

});
define("Connect2_MyBookmarks_MUI.model$StepsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$StepsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var StepsRecordList = (function (_super) {
__extends(StepsRecordList, _super);
function StepsRecordList(defaults) {
_super.apply(this, arguments);
}
StepsRecordList.itemType = Connect2_MyBookmarks_MUIModel.StepsRecord;
return StepsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.StepsRecordList = StepsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$VideoOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VideoOptionalConfigsRecordList = (function (_super) {
__extends(VideoOptionalConfigsRecordList, _super);
function VideoOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
VideoOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.VideoOptionalConfigsRecord;
return VideoOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VideoOptionalConfigsRecordList = VideoOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$PositionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.PositionRecord = PositionRecord;

});
define("Connect2_MyBookmarks_MUI.model$ImageDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$ImageDataRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ImageDataRecord = (function (_super) {
__extends(ImageDataRecord, _super);
function ImageDataRecord(defaults) {
_super.apply(this, arguments);
}
ImageDataRecord.attributesToDeclare = function () {
return [
this.attr("ImageData", "imageDataAttr", "ImageData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ImageDataRec());
}, true, APIDomain_Directory_ISModel.ImageDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageDataRecord.fromStructure = function (str) {
return new ImageDataRecord(new ImageDataRecord.RecordClass({
imageDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageDataRecord._isAnonymousRecord = true;
ImageDataRecord.UniqueId = "f98be347-1fa7-061c-67b0-0d46eff090b4";
ImageDataRecord.init();
return ImageDataRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.ImageDataRecord = ImageDataRecord;

});
define("Connect2_MyBookmarks_MUI.model$ImageDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ImageDataRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ImageDataRecordList = (function (_super) {
__extends(ImageDataRecordList, _super);
function ImageDataRecordList(defaults) {
_super.apply(this, arguments);
}
ImageDataRecordList.itemType = Connect2_MyBookmarks_MUIModel.ImageDataRecord;
return ImageDataRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ImageDataRecordList = ImageDataRecordList;

});
define("Connect2_MyBookmarks_MUI.model$TimezoneList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TimezoneList = (function (_super) {
__extends(TimezoneList, _super);
function TimezoneList(defaults) {
_super.apply(this, arguments);
}
TimezoneList.itemType = APIDomain_Directory_ISModel.TimezoneRec;
return TimezoneList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TimezoneList = TimezoneList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselDirectionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselDirectionList = (function (_super) {
__extends(CarouselDirectionList, _super);
function CarouselDirectionList(defaults) {
_super.apply(this, arguments);
}
CarouselDirectionList.itemType = OutSystemsUI_2_23Model.CarouselDirectionRec;
return CarouselDirectionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselDirectionList = CarouselDirectionList;

});
define("Connect2_MyBookmarks_MUI.model$DefaultCountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$DefaultCountryRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DefaultCountryRecord = (function (_super) {
__extends(DefaultCountryRecord, _super);
function DefaultCountryRecord(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRecord.attributesToDeclare = function () {
return [
this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DefaultCountryRec());
}, true, APIDomain_Directory_ISModel.DefaultCountryRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultCountryRecord.fromStructure = function (str) {
return new DefaultCountryRecord(new DefaultCountryRecord.RecordClass({
defaultCountryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultCountryRecord._isAnonymousRecord = true;
DefaultCountryRecord.UniqueId = "f0cca3d9-97dc-9f7c-180c-008c0a8d209e";
DefaultCountryRecord.init();
return DefaultCountryRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.DefaultCountryRecord = DefaultCountryRecord;

});
define("Connect2_MyBookmarks_MUI.model$DefaultCountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DefaultCountryRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DefaultCountryRecordList = (function (_super) {
__extends(DefaultCountryRecordList, _super);
function DefaultCountryRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultCountryRecordList.itemType = Connect2_MyBookmarks_MUIModel.DefaultCountryRecord;
return DefaultCountryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DefaultCountryRecordList = DefaultCountryRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoCaptionsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VideoCaptionsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VideoCaptionsList = (function (_super) {
__extends(VideoCaptionsList, _super);
function VideoCaptionsList(defaults) {
_super.apply(this, arguments);
}
VideoCaptionsList.itemType = OutSystemsUI_2_23Model.VideoCaptionsRec;
return VideoCaptionsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VideoCaptionsList = VideoCaptionsList;

});
define("Connect2_MyBookmarks_MUI.model$TimePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$TimePickerOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TimePickerOptionalConfigsList = (function (_super) {
__extends(TimePickerOptionalConfigsList, _super);
function TimePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
TimePickerOptionalConfigsList.itemType = OutSystemsUI_2_23Model.TimePickerOptionalConfigsRec;
return TimePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TimePickerOptionalConfigsList = TimePickerOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$GutterSizeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.GutterSizeRecord = GutterSizeRecord;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerTimeFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DatePickerTimeFormatRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerTimeFormatRecordList = (function (_super) {
__extends(DatePickerTimeFormatRecordList, _super);
function DatePickerTimeFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerTimeFormatRecordList.itemType = Connect2_MyBookmarks_MUIModel.DatePickerTimeFormatRecord;
return DatePickerTimeFormatRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerTimeFormatRecordList = DatePickerTimeFormatRecordList;

});
define("Connect2_MyBookmarks_MUI.model$TriggerList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$TriggerRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var TriggerList = (function (_super) {
__extends(TriggerList, _super);
function TriggerList(defaults) {
_super.apply(this, arguments);
}
TriggerList.itemType = OutSystemsUI_2_23Model.TriggerRec;
return TriggerList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.TriggerList = TriggerList;

});
define("Connect2_MyBookmarks_MUI.model$HallPhotoExtensiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRecord = (function (_super) {
__extends(HallPhotoExtensiveRecord, _super);
function HallPhotoExtensiveRecord(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRecord.attributesToDeclare = function () {
return [
this.attr("HallPhotoExtensive", "hallPhotoExtensiveAttr", "HallPhotoExtensive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoExtensiveRec());
}, true, APIDomain_Directory_ISModel.HallPhotoExtensiveRec)
].concat(_super.attributesToDeclare.call(this));
};
HallPhotoExtensiveRecord.fromStructure = function (str) {
return new HallPhotoExtensiveRecord(new HallPhotoExtensiveRecord.RecordClass({
hallPhotoExtensiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HallPhotoExtensiveRecord._isAnonymousRecord = true;
HallPhotoExtensiveRecord.UniqueId = "db3af86a-07d8-c8f8-d098-ed27ef4636ae";
HallPhotoExtensiveRecord.init();
return HallPhotoExtensiveRecord;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_MUIModel.HallPhotoExtensiveRecord = HallPhotoExtensiveRecord;

});
define("Connect2_MyBookmarks_MUI.model$SplideProvideri18nRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SplideProvideri18nRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nRecordList = (function (_super) {
__extends(SplideProvideri18nRecordList, _super);
function SplideProvideri18nRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nRecordList.itemType = Connect2_MyBookmarks_MUIModel.SplideProvideri18nRecord;
return SplideProvideri18nRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SplideProvideri18nRecordList = SplideProvideri18nRecordList;

});
define("Connect2_MyBookmarks_MUI.model$StepsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$StepsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var StepsList = (function (_super) {
__extends(StepsList, _super);
function StepsList(defaults) {
_super.apply(this, arguments);
}
StepsList.itemType = OutSystemsUI_2_23Model.StepsRec;
return StepsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.StepsList = StepsList;

});
define("Connect2_MyBookmarks_MUI.model$CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CDNRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CDNRecordList = (function (_super) {
__extends(CDNRecordList, _super);
function CDNRecordList(defaults) {
_super.apply(this, arguments);
}
CDNRecordList.itemType = Connect2_MyBookmarks_MUIModel.CDNRecord;
return CDNRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CDNRecordList = CDNRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ContactPopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_MyBookmarks_MUI.model", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils"], function (exports, OutSystems, UBTConnect_UtilsModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ContactPopupDataList = (function (_super) {
__extends(ContactPopupDataList, _super);
function ContactPopupDataList(defaults) {
_super.apply(this, arguments);
}
ContactPopupDataList.itemType = UBTConnect_UtilsModel.ContactPopupDataRec;
return ContactPopupDataList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ContactPopupDataList = ContactPopupDataList;

});
define("Connect2_MyBookmarks_MUI.model$MonthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MonthRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MonthRecordList = (function (_super) {
__extends(MonthRecordList, _super);
function MonthRecordList(defaults) {
_super.apply(this, arguments);
}
MonthRecordList.itemType = Connect2_MyBookmarks_MUIModel.MonthRecord;
return MonthRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MonthRecordList = MonthRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SplideProviderClassesRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SplideProviderClassesRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
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
Connect2_MyBookmarks_MUIModel.SplideProviderClassesRecord = SplideProviderClassesRecord;

});
define("Connect2_MyBookmarks_MUI.model$SplideProviderClassesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$SplideProviderClassesRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SplideProviderClassesRecordList = (function (_super) {
__extends(SplideProviderClassesRecordList, _super);
function SplideProviderClassesRecordList(defaults) {
_super.apply(this, arguments);
}
SplideProviderClassesRecordList.itemType = Connect2_MyBookmarks_MUIModel.SplideProviderClassesRecord;
return SplideProviderClassesRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SplideProviderClassesRecordList = SplideProviderClassesRecordList;

});
define("Connect2_MyBookmarks_MUI.model$ProgressCircleOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ProgressCircleOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ProgressCircleOptionalConfigsRecordList = (function (_super) {
__extends(ProgressCircleOptionalConfigsRecordList, _super);
function ProgressCircleOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
ProgressCircleOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.ProgressCircleOptionalConfigsRecord;
return ProgressCircleOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ProgressCircleOptionalConfigsRecordList = ProgressCircleOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$VideoOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$VideoOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var VideoOptionalConfigsList = (function (_super) {
__extends(VideoOptionalConfigsList, _super);
function VideoOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
VideoOptionalConfigsList.itemType = OutSystemsUI_2_23Model.VideoOptionalConfigsRec;
return VideoOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.VideoOptionalConfigsList = VideoOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableLocalityInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationList = (function (_super) {
__extends(CacheableLocalityInformationList, _super);
function CacheableLocalityInformationList(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationList.itemType = Connect2_LegacySharedModel.CacheableLocalityInformationRec;
return CacheableLocalityInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CacheableLocalityInformationList = CacheableLocalityInformationList;

});
define("Connect2_MyBookmarks_MUI.model$DropdownTagsOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DropdownTagsOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownTagsOptionalConfigsRecordList = (function (_super) {
__extends(DropdownTagsOptionalConfigsRecordList, _super);
function DropdownTagsOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DropdownTagsOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.DropdownTagsOptionalConfigsRecord;
return DropdownTagsOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownTagsOptionalConfigsRecordList = DropdownTagsOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SplideConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SplideConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SplideConfigsList = (function (_super) {
__extends(SplideConfigsList, _super);
function SplideConfigsList(defaults) {
_super.apply(this, arguments);
}
SplideConfigsList.itemType = OutSystemsUI_2_23Model.SplideConfigsRec;
return SplideConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SplideConfigsList = SplideConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$DropdownItemList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DropdownItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DropdownItemList = (function (_super) {
__extends(DropdownItemList, _super);
function DropdownItemList(defaults) {
_super.apply(this, arguments);
}
DropdownItemList.itemType = OutSystemsUI_2_23Model.DropdownItemRec;
return DropdownItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DropdownItemList = DropdownItemList;

});
define("Connect2_MyBookmarks_MUI.model$CacheableLocalityInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CacheableLocalityInformationRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CacheableLocalityInformationRecordList = (function (_super) {
__extends(CacheableLocalityInformationRecordList, _super);
function CacheableLocalityInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheableLocalityInformationRecordList.itemType = Connect2_MyBookmarks_MUIModel.CacheableLocalityInformationRecord;
return CacheableLocalityInformationRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CacheableLocalityInformationRecordList = CacheableLocalityInformationRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CountryRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CountryRecordList = (function (_super) {
__extends(CountryRecordList, _super);
function CountryRecordList(defaults) {
_super.apply(this, arguments);
}
CountryRecordList.itemType = Connect2_MyBookmarks_MUIModel.CountryRecord;
return CountryRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CountryRecordList = CountryRecordList;

});
define("Connect2_MyBookmarks_MUI.model$SplideProvideri18nList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$SplideProvideri18nRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var SplideProvideri18nList = (function (_super) {
__extends(SplideProvideri18nList, _super);
function SplideProvideri18nList(defaults) {
_super.apply(this, arguments);
}
SplideProvideri18nList.itemType = OutSystemsUI_2_23Model.SplideProvideri18nRec;
return SplideProvideri18nList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.SplideProvideri18nList = SplideProvideri18nList;

});
define("Connect2_MyBookmarks_MUI.model$NoUiSliderConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$NoUiSliderConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var NoUiSliderConfigsRecordList = (function (_super) {
__extends(NoUiSliderConfigsRecordList, _super);
function NoUiSliderConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
NoUiSliderConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.NoUiSliderConfigsRecord;
return NoUiSliderConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.NoUiSliderConfigsRecordList = NoUiSliderConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$MyBookmarks_GroupList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupList = (function (_super) {
__extends(MyBookmarks_GroupList, _super);
function MyBookmarks_GroupList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupList.itemType = Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec;
return MyBookmarks_GroupList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MyBookmarks_GroupList = MyBookmarks_GroupList;

});
define("Connect2_MyBookmarks_MUI.model$CallInfoStructureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CallInfoStructureRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CallInfoStructureRecordList = (function (_super) {
__extends(CallInfoStructureRecordList, _super);
function CallInfoStructureRecordList(defaults) {
_super.apply(this, arguments);
}
CallInfoStructureRecordList.itemType = Connect2_MyBookmarks_MUIModel.CallInfoStructureRecord;
return CallInfoStructureRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CallInfoStructureRecordList = CallInfoStructureRecordList;

});
define("Connect2_MyBookmarks_MUI.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$PositionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = Connect2_MyBookmarks_MUIModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PositionRecordList = PositionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Connect2_MyBookmarks_MUI.model", "ServiceCenter.model$UserRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.UserList = UserList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoURLList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoURLList = (function (_super) {
__extends(PhotoURLList, _super);
function PhotoURLList(defaults) {
_super.apply(this, arguments);
}
PhotoURLList.itemType = APIDomain_Directory_ISModel.PhotoURLRec;
return PhotoURLList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoURLList = PhotoURLList;

});
define("Connect2_MyBookmarks_MUI.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$MenuActionRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.itemType = OutSystemsUI_2_23Model.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MenuActionList = MenuActionList;

});
define("Connect2_MyBookmarks_MUI.model$LocalBookmarkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LocalBookmarkRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalBookmarkRecordList = (function (_super) {
__extends(LocalBookmarkRecordList, _super);
function LocalBookmarkRecordList(defaults) {
_super.apply(this, arguments);
}
LocalBookmarkRecordList.itemType = Connect2_MyBookmarks_MUIModel.LocalBookmarkRecord;
return LocalBookmarkRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalBookmarkRecordList = LocalBookmarkRecordList;

});
define("Connect2_MyBookmarks_MUI.model$LocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$LocalityRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var LocalityRecordList = (function (_super) {
__extends(LocalityRecordList, _super);
function LocalityRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityRecordList.itemType = Connect2_MyBookmarks_MUIModel.LocalityRecord;
return LocalityRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.LocalityRecordList = LocalityRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CountryWithMapPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CountryWithMapPositionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CountryWithMapPositionRecordList = (function (_super) {
__extends(CountryWithMapPositionRecordList, _super);
function CountryWithMapPositionRecordList(defaults) {
_super.apply(this, arguments);
}
CountryWithMapPositionRecordList.itemType = Connect2_MyBookmarks_MUIModel.CountryWithMapPositionRecord;
return CountryWithMapPositionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CountryWithMapPositionRecordList = CountryWithMapPositionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CDN2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$CDN2Record"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CDN2RecordList = (function (_super) {
__extends(CDN2RecordList, _super);
function CDN2RecordList(defaults) {
_super.apply(this, arguments);
}
CDN2RecordList.itemType = Connect2_MyBookmarks_MUIModel.CDN2Record;
return CDN2RecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CDN2RecordList = CDN2RecordList;

});
define("Connect2_MyBookmarks_MUI.model$CarouselNavigationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$CarouselNavigationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CarouselNavigationList = (function (_super) {
__extends(CarouselNavigationList, _super);
function CarouselNavigationList(defaults) {
_super.apply(this, arguments);
}
CarouselNavigationList.itemType = OutSystemsUI_2_23Model.CarouselNavigationRec;
return CarouselNavigationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CarouselNavigationList = CarouselNavigationList;

});
define("Connect2_MyBookmarks_MUI.model$OrientationList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$OrientationRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var OrientationList = (function (_super) {
__extends(OrientationList, _super);
function OrientationList(defaults) {
_super.apply(this, arguments);
}
OrientationList.itemType = OutSystemsUI_2_23Model.OrientationRec;
return OrientationList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.OrientationList = OrientationList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerOptionalConfigsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$DatePickerOptionalConfigsRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsRecordList = (function (_super) {
__extends(DatePickerOptionalConfigsRecordList, _super);
function DatePickerOptionalConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsRecordList.itemType = Connect2_MyBookmarks_MUIModel.DatePickerOptionalConfigsRecord;
return DatePickerOptionalConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerOptionalConfigsRecordList = DatePickerOptionalConfigsRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkByIdRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BookmarkByIdRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkByIdRecordList = (function (_super) {
__extends(BookmarkByIdRecordList, _super);
function BookmarkByIdRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkByIdRecordList.itemType = Connect2_MyBookmarks_MUIModel.BookmarkByIdRecord;
return BookmarkByIdRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkByIdRecordList = BookmarkByIdRecordList;

});
define("Connect2_MyBookmarks_MUI.model$AlertRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$AlertRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AlertRecordList = (function (_super) {
__extends(AlertRecordList, _super);
function AlertRecordList(defaults) {
_super.apply(this, arguments);
}
AlertRecordList.itemType = Connect2_MyBookmarks_MUIModel.AlertRecord;
return AlertRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AlertRecordList = AlertRecordList;

});
define("Connect2_MyBookmarks_MUI.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$MenuActionRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.itemType = Connect2_MyBookmarks_MUIModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.MenuActionRecordList = MenuActionRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GradientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GradientRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GradientRecordList = (function (_super) {
__extends(GradientRecordList, _super);
function GradientRecordList(defaults) {
_super.apply(this, arguments);
}
GradientRecordList.itemType = Connect2_MyBookmarks_MUIModel.GradientRecord;
return GradientRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GradientRecordList = GradientRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GetBookmarksByGroupResponseList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model$GetBookmarksByGroupResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GetBookmarksByGroupResponseList = (function (_super) {
__extends(GetBookmarksByGroupResponseList, _super);
function GetBookmarksByGroupResponseList(defaults) {
_super.apply(this, arguments);
}
GetBookmarksByGroupResponseList.itemType = Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec;
return GetBookmarksByGroupResponseList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GetBookmarksByGroupResponseList = GetBookmarksByGroupResponseList;

});
define("Connect2_MyBookmarks_MUI.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$ColorRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = Connect2_MyBookmarks_MUIModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.ColorRecordList = ColorRecordList;

});
define("Connect2_MyBookmarks_MUI.model$BookmarkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$BookmarkItemRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BookmarkItemRecordList = (function (_super) {
__extends(BookmarkItemRecordList, _super);
function BookmarkItemRecordList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRecordList.itemType = Connect2_MyBookmarks_MUIModel.BookmarkItemRecord;
return BookmarkItemRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BookmarkItemRecordList = BookmarkItemRecordList;

});
define("Connect2_MyBookmarks_MUI.model$CommunityBusinessType2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model$CommunityBusinessTypeRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var CommunityBusinessType2List = (function (_super) {
__extends(CommunityBusinessType2List, _super);
function CommunityBusinessType2List(defaults) {
_super.apply(this, arguments);
}
CommunityBusinessType2List.itemType = Connect2_LegacySharedModel.CommunityBusinessTypeRec;
return CommunityBusinessType2List;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.CommunityBusinessType2List = CommunityBusinessType2List;

});
define("Connect2_MyBookmarks_MUI.model$AddBookmarkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$AddBookmarkRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var AddBookmarkRecordList = (function (_super) {
__extends(AddBookmarkRecordList, _super);
function AddBookmarkRecordList(defaults) {
_super.apply(this, arguments);
}
AddBookmarkRecordList.itemType = Connect2_MyBookmarks_MUIModel.AddBookmarkRecord;
return AddBookmarkRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.AddBookmarkRecordList = AddBookmarkRecordList;

});
define("Connect2_MyBookmarks_MUI.model$GradientList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$GradientRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GradientList = (function (_super) {
__extends(GradientList, _super);
function GradientList(defaults) {
_super.apply(this, arguments);
}
GradientList.itemType = OutSystemsUI_2_23Model.GradientRec;
return GradientList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GradientList = GradientList;

});
define("Connect2_MyBookmarks_MUI.model$BooleanTypesList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$BooleanTypesRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var BooleanTypesList = (function (_super) {
__extends(BooleanTypesList, _super);
function BooleanTypesList(defaults) {
_super.apply(this, arguments);
}
BooleanTypesList.itemType = OutSystemsUI_2_23Model.BooleanTypesRec;
return BooleanTypesList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.BooleanTypesList = BooleanTypesList;

});
define("Connect2_MyBookmarks_MUI.model$HallPhotoExtensiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$HallPhotoExtensiveRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var HallPhotoExtensiveRecordList = (function (_super) {
__extends(HallPhotoExtensiveRecordList, _super);
function HallPhotoExtensiveRecordList(defaults) {
_super.apply(this, arguments);
}
HallPhotoExtensiveRecordList.itemType = Connect2_MyBookmarks_MUIModel.HallPhotoExtensiveRecord;
return HallPhotoExtensiveRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.HallPhotoExtensiveRecordList = HallPhotoExtensiveRecordList;

});
define("Connect2_MyBookmarks_MUI.model$Householder_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$Householder_MemberRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var Householder_MemberRecordList = (function (_super) {
__extends(Householder_MemberRecordList, _super);
function Householder_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Householder_MemberRecordList.itemType = Connect2_MyBookmarks_MUIModel.Householder_MemberRecord;
return Householder_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.Householder_MemberRecordList = Householder_MemberRecordList;

});
define("Connect2_MyBookmarks_MUI.model$PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_MyBookmarks_MUI.model", "APIDomain_Directory_IS.model$PhotoRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var PhotoList = (function (_super) {
__extends(PhotoList, _super);
function PhotoList(defaults) {
_super.apply(this, arguments);
}
PhotoList.itemType = APIDomain_Directory_ISModel.PhotoRec;
return PhotoList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.PhotoList = PhotoList;

});
define("Connect2_MyBookmarks_MUI.model$DatePickerOptionalConfigsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_MyBookmarks_MUI.model", "OutSystemsUI_2_23.model$DatePickerOptionalConfigsRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var DatePickerOptionalConfigsList = (function (_super) {
__extends(DatePickerOptionalConfigsList, _super);
function DatePickerOptionalConfigsList(defaults) {
_super.apply(this, arguments);
}
DatePickerOptionalConfigsList.itemType = OutSystemsUI_2_23Model.DatePickerOptionalConfigsRec;
return DatePickerOptionalConfigsList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.DatePickerOptionalConfigsList = DatePickerOptionalConfigsList;

});
define("Connect2_MyBookmarks_MUI.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.model$GutterSizeRecord"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = Connect2_MyBookmarks_MUIModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_MUIModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("Connect2_MyBookmarks_MUI.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_MyBookmarks_MUIModel = exports;
Object.defineProperty(Connect2_MyBookmarks_MUIModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["35e5e952-a30d-4ac8-bacb-2f73230e9b1c"];
}
});

Connect2_MyBookmarks_MUIModel.staticEntities = {};
Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2 = {};
var getCommunityBusinessType2Record = function (record) {
return OS.ApplicationInfo.getModules()["3712370e-f7b5-4c2a-ade3-d8800219efd4"].staticEntities["367e148b-069e-46a5-a4ba-61ce69cbf6dc"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2, "campusCo", {
get: function () {
return getCommunityBusinessType2Record("235f6b9b-858d-40d7-a66a-129fdd1dcd2f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2, "oneSchoolGlobal", {
get: function () {
return getCommunityBusinessType2Record("5b42e41f-3053-407d-8cb4-e7334ab49272");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2, "commercial", {
get: function () {
return getCommunityBusinessType2Record("d5e44acc-a7a5-4f99-a52a-2cc127cdaa0f");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.resultListType = {};
var getResultListTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["3712370e-f7b5-4c2a-ade3-d8800219efd4"].staticEntities["ab5965c3-4530-48a3-9550-29933fbf4cdb"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.resultListType, "notification", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("1ce929a9-9861-4c7a-8395-db3e7abad9b7"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.resultListType, "household", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("2450795b-3f42-4957-9abd-6c0458007300"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.resultListType, "subdivision", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("24bfbfd0-7715-4194-8730-334d0ecd62a9"));
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject = {};
var getType_ShareObjectRecord = function (record) {
return OS.ApplicationInfo.getModules()["89a8b22b-4939-4962-ac03-ed124a10543f"].staticEntities["fdd27f53-9f9c-477e-8a4a-1dd00c45a277"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "communityNotice", {
get: function () {
return getType_ShareObjectRecord("3b68532c-c7a8-490d-84bd-fc1842d6f70a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "locality", {
get: function () {
return getType_ShareObjectRecord("50105edb-d74e-4da5-8518-19cff43aca1e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "myHousehold", {
get: function () {
return getType_ShareObjectRecord("62d133fd-03de-4a54-b6a9-41b45317bcd2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "supperMeeting", {
get: function () {
return getType_ShareObjectRecord("66862e7a-561e-4166-b594-860a0e00d015");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "update", {
get: function () {
return getType_ShareObjectRecord("804d78ff-a96b-43a0-88a9-9bac7e5923a9");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "localityContact", {
get: function () {
return getType_ShareObjectRecord("8540a0c3-d763-43b9-aacb-4da071245b38");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "feed", {
get: function () {
return getType_ShareObjectRecord("9b83faac-3c6d-4a69-9be5-7c00c9ff787a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "household", {
get: function () {
return getType_ShareObjectRecord("be388807-f406-4e72-86b3-b4e136d63453");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "campusCo", {
get: function () {
return getType_ShareObjectRecord("c5cd2483-9015-4ddb-8878-3321d4f7cce3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject, "oneSchoolGlobal", {
get: function () {
return getType_ShareObjectRecord("e62e5bba-01ff-40c5-abe9-333c594000a7");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_SortColumn = {};
var getMyBookmarks_SortColumnRecord = function (record) {
return OS.ApplicationInfo.getModules()["ccacdbe8-c124-4e26-ac14-d39cf1b372dc"].staticEntities["46dd13c7-ea75-44e4-9d69-0c8aab3db17f"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_SortColumn, "title", {
get: function () {
return getMyBookmarks_SortColumnRecord("a5d5a71c-9366-4c8e-8cfd-2ac4de599bf3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_SortColumn, "dateCreated", {
get: function () {
return getMyBookmarks_SortColumnRecord("b43fed79-65b7-465f-b0cb-5d0654275bfd");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group = {};
var getMyBookmarks_GroupRecord = function (record) {
return OS.ApplicationInfo.getModules()["ccacdbe8-c124-4e26-ac14-d39cf1b372dc"].staticEntities["d277c37a-277e-419f-81ea-0ffb36be8558"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group, "locations", {
get: function () {
return getMyBookmarks_GroupRecord("2860dbc3-b113-4f27-bf00-060398d4854a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group, "entities", {
get: function () {
return getMyBookmarks_GroupRecord("77369632-c604-40b2-872b-6218e0eed2b6");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group, "contacts", {
get: function () {
return getMyBookmarks_GroupRecord("e247ecb6-1adf-4f59-9ec9-2683f67eb8cd");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.sideMenuBehavior = {};
var getSideMenuBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.sideMenuBehavior, "visible", {
get: function () {
return getSideMenuBehaviorRecord("25b95337-61e5-4cc7-95a0-fb2bee22c75f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.sideMenuBehavior, "expandable", {
get: function () {
return getSideMenuBehaviorRecord("db935269-7a37-40aa-898b-e17e546a932a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.sideMenuBehavior, "overlay", {
get: function () {
return getSideMenuBehaviorRecord("f194be06-0135-4afc-9be2-3f9a7ecd107c");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.gradient = {};
var getGradientRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["15f4b55e-c9e8-4f0d-a043-0093e17fa04d"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gradient, "linearHorizontal", {
get: function () {
return getGradientRecord("8d250673-5528-403b-9e7b-d1717a98219c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gradient, "radial", {
get: function () {
return getGradientRecord("b9ce4df8-c39e-4a3a-84d9-35dbc79e82fc");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gradient, "linearDiagonally", {
get: function () {
return getGradientRecord("cef16d35-677a-4002-8d53-7b385be0011d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gradient, "linearVertical", {
get: function () {
return getGradientRecord("f128b147-c173-4df8-a624-d01eab01c46c");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive = {};
var getDeviceResponsiveRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive, "desktopAndTablet", {
get: function () {
return getDeviceResponsiveRecord("0a533047-a7d6-4897-bfb2-140047b8fccd");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive, "tabletOnly", {
get: function () {
return getDeviceResponsiveRecord("4164cab0-7b05-43a4-9c78-e81a53431a7d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive, "allDevices", {
get: function () {
return getDeviceResponsiveRecord("5283ef6e-84da-42b1-b937-5efa0ee1a6b0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive, "phoneOnly", {
get: function () {
return getDeviceResponsiveRecord("a671987e-7b94-462a-9685-e6bcf890454e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive, "tabletAndPhone", {
get: function () {
return getDeviceResponsiveRecord("e04f86d2-6c26-47db-9e53-434eb6386498");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.deviceResponsive, "desktopOnly", {
get: function () {
return getDeviceResponsiveRecord("ebed41f5-fbac-4f23-9ae0-429c2e439ff2");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.month = {};
var getMonthRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "june", {
get: function () {
return getMonthRecord("02cb1fff-a143-48c1-8922-5b2c562e1939");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "march", {
get: function () {
return getMonthRecord("29858d6e-705a-4cfd-a9e2-f9dc6bda346c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "december", {
get: function () {
return getMonthRecord("5b0eff8b-b2df-4e9a-80a5-eac51617cdc3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "february", {
get: function () {
return getMonthRecord("6b6caf1c-eadb-4b30-96ec-84b225feb1a5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "may", {
get: function () {
return getMonthRecord("76cd9430-f4f8-4b0d-8a72-ddcac3928aeb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "april", {
get: function () {
return getMonthRecord("7c425633-4e80-4f7a-a119-c21d82820511");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "november", {
get: function () {
return getMonthRecord("86e22632-bb44-42ad-8589-0b6aadda9dd4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "august", {
get: function () {
return getMonthRecord("896ff549-7e70-48af-b967-31ea68b73891");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "january", {
get: function () {
return getMonthRecord("8d3840f5-6ae6-4899-960d-3e215342e2e3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "july", {
get: function () {
return getMonthRecord("ac483ea0-4423-404a-a61d-8d6bce0ee39e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "september", {
get: function () {
return getMonthRecord("c858ebfd-c9fe-49b6-bbfc-57c28c895b26");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.month, "october", {
get: function () {
return getMonthRecord("e01b8055-99c6-4096-bc7d-5f0c825b7692");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage = {};
var getDatePickerLanguageRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "japanese", {
get: function () {
return getDatePickerLanguageRecord("0041af3b-505e-48b8-8d79-b0a00aeeb4de");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "dutchFlemish", {
get: function () {
return getDatePickerLanguageRecord("05968754-a438-40c9-860d-0775c7618c80");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "czech", {
get: function () {
return getDatePickerLanguageRecord("0c6d79c7-6773-4d9e-a914-ad7246505aa8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "indonesian", {
get: function () {
return getDatePickerLanguageRecord("0e659962-b0fb-4486-9f33-997cf5a00f33");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
get: function () {
return getDatePickerLanguageRecord("10fba89e-f9ea-46da-a114-849a4891c4dd");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "latvian", {
get: function () {
return getDatePickerLanguageRecord("11a9c498-65e3-4074-bd4c-16266288a9e4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "chinese", {
get: function () {
return getDatePickerLanguageRecord("186d2cd3-7b9d-464a-b31e-b4548b9a80c0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "polish", {
get: function () {
return getDatePickerLanguageRecord("198c5c59-d610-4e52-b4ed-9fb38c21b3b7");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "estonian", {
get: function () {
return getDatePickerLanguageRecord("1e9dd8a1-ab24-4849-ab74-b65b2a2974a5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "catalanValencian", {
get: function () {
return getDatePickerLanguageRecord("1efa117c-f1b9-4ae7-94ad-814a752e4864");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "malay", {
get: function () {
return getDatePickerLanguageRecord("242628f3-22b6-4713-8118-7921abd00ad2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "slovak", {
get: function () {
return getDatePickerLanguageRecord("286e49ad-5406-4f42-a9c4-bcc4adc64d17");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
get: function () {
return getDatePickerLanguageRecord("2df37c1e-5431-4849-9f0b-405b43fed188");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "danish", {
get: function () {
return getDatePickerLanguageRecord("34689962-0ccc-46dc-bc43-e6bc7716784c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "english", {
get: function () {
return getDatePickerLanguageRecord("37430fa0-8882-4f69-afde-41c27de03a5f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "hungarian", {
get: function () {
return getDatePickerLanguageRecord("3854d57f-f8bd-4024-8664-6353d552d8f2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
get: function () {
return getDatePickerLanguageRecord("459a4a75-fb85-40e0-96b2-f08df284da41");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "norwegianBokmal", {
get: function () {
return getDatePickerLanguageRecord("530131bd-1b82-495b-a9c5-710d8bc4a642");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "arabic", {
get: function () {
return getDatePickerLanguageRecord("530ceb8f-1ff1-44a7-aed5-e0af45b941cb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "faroese", {
get: function () {
return getDatePickerLanguageRecord("58eb18a6-11fe-4a8b-bb96-7ed1057b16f5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "centralKhmer", {
get: function () {
return getDatePickerLanguageRecord("5e341bb3-0fc7-4f59-a426-00dcd4b2fabf");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
get: function () {
return getDatePickerLanguageRecord("62e038a6-8d72-4484-b278-a883b004b3f2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "chineseTraditional", {
get: function () {
return getDatePickerLanguageRecord("6bb7b0e2-bad8-4f58-801b-4ca0e9e699a7");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "norwegian", {
get: function () {
return getDatePickerLanguageRecord("6f9fd262-32f0-4726-ab3e-5d7bb6916892");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "esperanto", {
get: function () {
return getDatePickerLanguageRecord("7b29c19f-82dd-4e0b-8f5b-9004ca7d24fc");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "croatian", {
get: function () {
return getDatePickerLanguageRecord("7def49c8-f1a0-4600-ae56-53e9471634a2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "albanian", {
get: function () {
return getDatePickerLanguageRecord("80601fbd-e190-49be-90dd-6964171d5292");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "korean", {
get: function () {
return getDatePickerLanguageRecord("82a53bc2-f8d7-4c5d-bb70-5651a4713880");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "thai", {
get: function () {
return getDatePickerLanguageRecord("84a8de9c-6f4d-4077-9391-98d66414bf4e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "mongolian", {
get: function () {
return getDatePickerLanguageRecord("872b0db9-d9b4-49d4-b2ae-028122cbd448");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "spanishCastilian", {
get: function () {
return getDatePickerLanguageRecord("8c2fe645-d925-42ea-9819-4a1ac3a340e4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "slovenian", {
get: function () {
return getDatePickerLanguageRecord("930b417d-72aa-4b39-a3b9-3b9821bf1d4b");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "vietnamese", {
get: function () {
return getDatePickerLanguageRecord("992f2c99-b122-49f6-bc7b-75d242dcb9bb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "bosnian", {
get: function () {
return getDatePickerLanguageRecord("9d702f7b-360d-46bb-9b6e-0e020a5f6385");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "french", {
get: function () {
return getDatePickerLanguageRecord("9dffbcdd-25c4-44e2-9f6a-d19b9f758ad8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "turkish", {
get: function () {
return getDatePickerLanguageRecord("9f260686-51cd-40d2-bf26-a09165b213ba");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "russian", {
get: function () {
return getDatePickerLanguageRecord("ad00c2b1-c380-4bf7-b5f4-173b40594bd5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "serbian", {
get: function () {
return getDatePickerLanguageRecord("b2957404-0007-4b47-a798-dd114894c7e3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "lithuanian", {
get: function () {
return getDatePickerLanguageRecord("b3519d98-660c-43ed-aee9-bb76e32dcafb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "portuguese", {
get: function () {
return getDatePickerLanguageRecord("b4e4a5fb-10ef-4d66-84bd-96dddb9d3b3c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "hebrew", {
get: function () {
return getDatePickerLanguageRecord("b60ef392-7715-437f-a4a9-b89a2128e49c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "uzbek", {
get: function () {
return getDatePickerLanguageRecord("b6fa2f75-12b9-4973-9027-b4866be01621");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "burmese", {
get: function () {
return getDatePickerLanguageRecord("b719cb40-621d-4610-b16f-f42caad493d4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "italian", {
get: function () {
return getDatePickerLanguageRecord("ba077ace-9423-401f-88fc-1fff8d7872a0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "georgian", {
get: function () {
return getDatePickerLanguageRecord("bb85f008-2154-44ee-9199-9e0e19497c47");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "swedish", {
get: function () {
return getDatePickerLanguageRecord("bce28cae-e6f9-4988-97a8-8b0e17ea6703");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "azerbaijani", {
get: function () {
return getDatePickerLanguageRecord("bd68a245-146e-45c9-8dc0-26419cbe5c85");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "hindi", {
get: function () {
return getDatePickerLanguageRecord("c1e7d993-22fe-452a-9754-6a48ac03e6d4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "bulgarian", {
get: function () {
return getDatePickerLanguageRecord("c356a48b-0411-4b54-b7a3-dd7fa4368645");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "finnish", {
get: function () {
return getDatePickerLanguageRecord("c38dac5a-7528-4647-96e6-887c0c9da82e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "persian", {
get: function () {
return getDatePickerLanguageRecord("d1bf9a10-3760-41c7-94eb-e24707993416");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "armenian", {
get: function () {
return getDatePickerLanguageRecord("d8f987cd-d08c-40b3-b19b-b60b508cf03d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "german", {
get: function () {
return getDatePickerLanguageRecord("da3038a7-779c-4599-b0b7-99557f688365");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "belarusian", {
get: function () {
return getDatePickerLanguageRecord("df311624-2b4a-410a-bf54-de447886e3a3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "welsh", {
get: function () {
return getDatePickerLanguageRecord("dfb449d3-ec70-458e-9f37-89e8f9c207fb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "ukrainian", {
get: function () {
return getDatePickerLanguageRecord("f6d8b648-df67-4449-934a-bd03dff4c50c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "bengali", {
get: function () {
return getDatePickerLanguageRecord("fad657c3-4b13-4163-8e21-84c60b6810ee");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerLanguage, "macedonian", {
get: function () {
return getDatePickerLanguageRecord("ffb560d6-c067-42e5-bdd8-0de808acff0a");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color = {};
var getDEPRECATED_ColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "white", {
get: function () {
return getDEPRECATED_ColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "blue", {
get: function () {
return getDEPRECATED_ColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "black", {
get: function () {
return getDEPRECATED_ColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "violet", {
get: function () {
return getDEPRECATED_ColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "none", {
get: function () {
return getDEPRECATED_ColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "orange", {
get: function () {
return getDEPRECATED_ColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "red", {
get: function () {
return getDEPRECATED_ColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "primaryColor", {
get: function () {
return getDEPRECATED_ColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "green", {
get: function () {
return getDEPRECATED_ColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.dEPRECATED_Color, "grey", {
get: function () {
return getDEPRECATED_ColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.orientation = {};
var getOrientationRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.orientation, "horizontal", {
get: function () {
return getOrientationRecord("7cb45416-3c4a-4178-9c5b-87eccf6ffae8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.orientation, "vertical", {
get: function () {
return getOrientationRecord("dab877c1-e4a2-43a9-b211-3bb9167dace9");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.datePickerTimeFormat = {};
var getDatePickerTimeFormatRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerTimeFormat, "disabled", {
get: function () {
return getDatePickerTimeFormatRecord("48213c15-538b-4222-a3ea-d136e608a57d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("ce1a9924-35ee-4a25-87ae-81f2a97bdf20");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
get: function () {
return getDatePickerTimeFormatRecord("e1aba689-db52-4dba-9eef-b5980b3e4fa0");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconType = {};
var getAccordionIconTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconType, "custom", {
get: function () {
return getAccordionIconTypeRecord("586a9223-5e9e-44d2-9405-4a511c4928ee");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconType, "plusMinus", {
get: function () {
return getAccordionIconTypeRecord("a4609550-92ab-4e3b-bb2b-7e1f9759b5ed");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconType, "caret", {
get: function () {
return getAccordionIconTypeRecord("b16c3109-4152-4df5-a403-ebb92631443c");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.direction = {};
var getDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.direction, "left", {
get: function () {
return getDirectionRecord("67c53875-4631-4b77-b5bf-704f63fe5068");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.direction, "right", {
get: function () {
return getDirectionRecord("d4664682-120b-47de-963c-f7e0e2c432e9");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.stackedCardsPosition = {};
var getStackedCardsPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.stackedCardsPosition, "bottom", {
get: function () {
return getStackedCardsPositionRecord("2e9dd7c6-b9a7-404f-b207-9a3da7fb05ed");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.stackedCardsPosition, "top", {
get: function () {
return getStackedCardsPositionRecord("5766b18f-82ef-49f1-9476-cf8f49249f25");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.stackedCardsPosition, "none", {
get: function () {
return getStackedCardsPositionRecord("89cf1ed9-b6fd-4e0a-af41-cfd79db935d7");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.carouselDirection = {};
var getCarouselDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.carouselDirection, "rightToLeft", {
get: function () {
return getCarouselDirectionRecord("4b5575cd-7598-420a-97db-5088d4d86a4d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.carouselDirection, "leftToRight", {
get: function () {
return getCarouselDirectionRecord("a05b6420-43c5-4660-9526-95e2052a45a8");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.autoplay = {};
var getAutoplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.autoplay, "disabled", {
get: function () {
return getAutoplayRecord("1ffcca5d-17d0-492e-9e9e-b8addde7fd80");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.autoplay, "slow", {
get: function () {
return getAutoplayRecord("4167f601-5731-452d-9653-1be7f25199f1");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.autoplay, "fast", {
get: function () {
return getAutoplayRecord("41b9ec04-2023-4f87-b953-0c01713d1992");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.autoplay, "normal", {
get: function () {
return getAutoplayRecord("e3033046-77ba-49cd-928a-5d831105f349");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.trigger = {};
var getTriggerRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.trigger, "onClick", {
get: function () {
return getTriggerRecord("19fabbad-c01d-41a3-bdbb-f4f1d87b8042");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.trigger, "onHover", {
get: function () {
return getTriggerRecord("b60aa471-1556-46df-bc15-585543a2a05d");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.space = {};
var getSpaceRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "large", {
get: function () {
return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "medium", {
get: function () {
return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "xXLarge", {
get: function () {
return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "extraSmall", {
get: function () {
return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "small", {
get: function () {
return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "base", {
get: function () {
return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "extraLarge", {
get: function () {
return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.space, "none", {
get: function () {
return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.alert = {};
var getAlertRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.alert, "success", {
get: function () {
return getAlertRecord("4aac6381-179c-477f-a0d2-8aa7c0e2ece5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.alert, "error", {
get: function () {
return getAlertRecord("85c06001-4d3a-4a08-b18f-4f9ebdc60d33");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.alert, "info", {
get: function () {
return getAlertRecord("e7c6b907-0f56-481e-b267-eb69bd92ed26");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.alert, "warning", {
get: function () {
return getAlertRecord("ed710523-9de5-47b6-b3ac-736fb4848c04");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition = {};
var getFloatingPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["926b8b2a-0906-4e6f-8ef5-e18fdce4b5af"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "leftStart", {
get: function () {
return getFloatingPositionRecord("09fcc011-5125-4c7d-94ca-22a0f483efc2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "topEnd", {
get: function () {
return getFloatingPositionRecord("25ae0a5b-a407-43f8-a96f-9a25b99af253");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "right", {
get: function () {
return getFloatingPositionRecord("2d99f1c3-c47c-4930-a6d9-efbd5af9473e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "top", {
get: function () {
return getFloatingPositionRecord("4359167c-25c4-4631-a2fd-4d68844bf776");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "bottomEnd", {
get: function () {
return getFloatingPositionRecord("55c6fc8a-e632-4396-a0f3-b304774d404d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "auto", {
get: function () {
return getFloatingPositionRecord("5c2f7889-a754-4e76-9202-74e1adf64aa8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "leftEnd", {
get: function () {
return getFloatingPositionRecord("690b2443-cd21-4c15-a480-db654387e5be");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "bottomStart", {
get: function () {
return getFloatingPositionRecord("75a49894-ed1b-4565-ab88-3ce67cb1f202");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "rightEnd", {
get: function () {
return getFloatingPositionRecord("76a41993-ef72-4903-a435-b457b14f95e8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "topStart", {
get: function () {
return getFloatingPositionRecord("93f00bb4-849c-4652-a3a6-95ff356afc41");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "left", {
get: function () {
return getFloatingPositionRecord("b927b967-e9ed-4b25-8c9b-75e59651f486");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "rightStart", {
get: function () {
return getFloatingPositionRecord("d18e4169-5259-469b-9bc5-c7251b07c3a5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "center", {
get: function () {
return getFloatingPositionRecord("f3246aa9-3097-4498-8418-d48d0eaa3e6e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.floatingPosition, "bottom", {
get: function () {
return getFloatingPositionRecord("f7d9dd9e-b33c-42b6-b32d-29b0ae5b6adc");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.booleanTypes = {};
var getBooleanTypesRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.booleanTypes, "true", {
get: function () {
return getBooleanTypesRecord("58ea7788-cac7-4f50-8ef1-ba8e1661b632");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.booleanTypes, "unset", {
get: function () {
return getBooleanTypesRecord("bf11a159-3707-4888-8e86-c3b0c78bc889");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.booleanTypes, "false", {
get: function () {
return getBooleanTypesRecord("df5af092-2604-4409-ae7d-b86d2bcef9fb");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconPosition = {};
var getAccordionIconPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconPosition, "left", {
get: function () {
return getAccordionIconPositionRecord("0395cba2-9124-4125-ad88-d6bab39b2253");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.accordionIconPosition, "right", {
get: function () {
return getAccordionIconPositionRecord("8532648f-6556-4b3b-a42c-a3ba091d5efd");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.messageStatus = {};
var getMessageStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.messageStatus, "hidden", {
get: function () {
return getMessageStatusRecord("2f2266ed-167a-45db-ac12-ca1e3cfa0fd2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.messageStatus, "read", {
get: function () {
return getMessageStatusRecord("34f4ff93-8e4e-4933-baae-8b9f122eb3cc");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.messageStatus, "sent", {
get: function () {
return getMessageStatusRecord("a1f1ba89-bd84-4943-a94c-a84ea4a142bf");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.messageStatus, "received", {
get: function () {
return getMessageStatusRecord("c90b88d0-8f7d-484a-8d17-b0d1b9795a94");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.scrollbarStyle = {};
var getScrollbarStyleRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.scrollbarStyle, "none", {
get: function () {
return getScrollbarStyleRecord("576d66f7-5b65-4e48-a694-eadecda4ff3a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.scrollbarStyle, "default", {
get: function () {
return getScrollbarStyleRecord("d0f8c46d-762f-47a5-9572-945ac1dbbe7f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.scrollbarStyle, "compact", {
get: function () {
return getScrollbarStyleRecord("e9191c43-63ef-4469-beac-2b1335aab932");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.columnBreak = {};
var getColumnBreakRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.columnBreak, "breakMiddle", {
get: function () {
return getColumnBreakRecord("3b01fc99-ef23-4043-8771-f88660720e01");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.columnBreak, "breakAll", {
get: function () {
return getColumnBreakRecord("43788f73-6893-4396-b67a-04a6ff690e74");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.columnBreak, "breakNone", {
get: function () {
return getColumnBreakRecord("69e6c609-9e8a-45a7-b006-45b92275ec49");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.columnBreak, "breakLast", {
get: function () {
return getColumnBreakRecord("6b3725c8-8951-48ed-a977-cbfaf003c896");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.columnBreak, "breakFirst", {
get: function () {
return getColumnBreakRecord("8c8b45b6-c1af-4b11-907e-3c8a5ce161e2");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.steps = {};
var getStepsRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.steps, "next", {
get: function () {
return getStepsRecord("03e9ec31-9b26-4304-b532-29aa077d99ea");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.steps, "past", {
get: function () {
return getStepsRecord("5452e8a1-02ca-4ff2-8d74-bff1512fc4a3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.steps, "active", {
get: function () {
return getStepsRecord("dbde9903-8367-49e7-8302-f6758c190844");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.carouselNavigation = {};
var getCarouselNavigationRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.carouselNavigation, "dots", {
get: function () {
return getCarouselNavigationRecord("2ba3836f-3d61-4868-b949-fb01a4e0d441");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.carouselNavigation, "none", {
get: function () {
return getCarouselNavigationRecord("367fee69-dc95-4624-9ba5-da687d881886");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.carouselNavigation, "arrows", {
get: function () {
return getCarouselNavigationRecord("3ae78a75-4c85-4aaa-ba2d-12c24902a7cf");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.carouselNavigation, "both", {
get: function () {
return getCarouselNavigationRecord("59a3f653-ff1d-49a0-ad2f-dda725b1352b");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.videoState = {};
var getVideoStateRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["f1508f37-01a7-456d-9dd0-64dff62f6d39"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.videoState, "unstarted", {
get: function () {
return getVideoStateRecord("3948508f-0ce3-4ba8-8cec-c1ed62cdcd2f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.videoState, "paused", {
get: function () {
return getVideoStateRecord("6b958f67-1dfb-4f07-8729-6f2c4ffcaa11");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.videoState, "ended", {
get: function () {
return getVideoStateRecord("b01a6f85-e735-402f-9502-80ca6f782af5");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.videoState, "playing", {
get: function () {
return getVideoStateRecord("e0a42fb3-336d-496b-b5c4-dde95cc7880a");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay = {};
var getDatePickerWeekDayRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "monday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("2fc656af-35c9-4cc8-94f7-cd7970e5afe4"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "saturday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("55758641-50ed-4a93-bb39-a86c02e8782c"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "sunday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("570f21d0-bdbe-4bbe-a452-02e3376f69d8"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "friday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("87ec7c5b-52ec-4dae-82e3-f6f08edd3a2e"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "tuesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("c59d1722-cbb1-453b-9a29-4fbb246756cd"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "thursday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f06c120a-c368-4568-9216-42f7c8a60d8c"));
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.datePickerWeekDay, "wednesday", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getDatePickerWeekDayRecord("f19cb895-a764-44e0-90e8-00bacb84e134"));
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF = {};
var getLaunchDarkly_FFRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["24d864a8-0524-4378-b05b-81691f16e554"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileOrbitEventBooklet", {
get: function () {
return getLaunchDarkly_FFRecord("233728ad-021f-4feb-9206-eb4e8a0db1b8");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileHasDeceasedPhotos", {
get: function () {
return getLaunchDarkly_FFRecord("3da821c6-6cc9-473b-9291-11e94a69f532");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileOrbitAccess", {
get: function () {
return getLaunchDarkly_FFRecord("4bde037a-0800-47eb-92d9-e95aab8d74e4");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileDirectoryUpdateFeedDeceasedProfile", {
get: function () {
return getLaunchDarkly_FFRecord("5ab0321f-f714-446d-9af0-d4491ca95f1d");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileOrbitHostSurvey", {
get: function () {
return getLaunchDarkly_FFRecord("629da211-7cde-4cfb-890a-528d4d0cda52");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileDirectoryBookmarkNote", {
get: function () {
return getLaunchDarkly_FFRecord("9057746d-5cf6-46d6-af20-e052ea5872a1");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileMemberAge", {
get: function () {
return getLaunchDarkly_FFRecord("9cf4f818-9b39-477b-9b3f-ffe9b9773d39");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileHasHiddenMembersAccess", {
get: function () {
return getLaunchDarkly_FFRecord("a7bcf50b-9e90-4182-826e-015a31034d02");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileDirectoryListVirtualization", {
get: function () {
return getLaunchDarkly_FFRecord("acc2be27-14d8-4671-9861-45e4aab6839f");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileAssemble", {
get: function () {
return getLaunchDarkly_FFRecord("d0ec3150-4f09-4b02-bb6c-54b17e1d4ab9");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileStudentInformation", {
get: function () {
return getLaunchDarkly_FFRecord("d762dbc4-6288-4348-8a07-613ca34e081e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobileHouseholdAncestry4thGen", {
get: function () {
return getLaunchDarkly_FFRecord("e2416af7-ce48-47d5-b693-7de6d9ab547c");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.launchDarkly_FF, "mobilePhotobook", {
get: function () {
return getLaunchDarkly_FFRecord("fdf84ca9-dce2-4407-b569-7a0f66320edc");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity = {};
var getConnect_EntityRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["2710e296-7733-44ad-8ef9-bbcd4c4dd77c"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "household", {
get: function () {
return getConnect_EntityRecord("57dd184c-b9fc-4a7f-9f9a-f20e6e275fe3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "supperMeetings_aka_Subdivisions", {
get: function () {
return getConnect_EntityRecord("62a170b3-4134-43b4-a09f-3e030e687bfd");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "interchange", {
get: function () {
return getConnect_EntityRecord("6f037faf-a5dc-4f83-b491-b5a1af3012c2");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "locality", {
get: function () {
return getConnect_EntityRecord("78e8b5bb-7b51-447b-8f03-ac3f57c4bab3");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "country", {
get: function () {
return getConnect_EntityRecord("a35b9acc-2c9c-4d8c-95bf-3842b859880e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "oneSchoolGlobal", {
get: function () {
return getConnect_EntityRecord("a896e28c-f387-4cf4-93f1-7ba6b8f3ac64");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "member", {
get: function () {
return getConnect_EntityRecord("dbaf9275-057c-4718-b4fb-c4b31ae95ccc");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity, "feedItem", {
get: function () {
return getConnect_EntityRecord("e22d3178-31c6-411a-a572-083e8aa9db11");
}
});

Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType = {};
var getMyBookmarks_ObjectTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["fe9b0d8f-ebbc-40ef-9656-bcd3ff4ff144"].staticEntities["fcd90c60-8ab8-4cbf-920e-b2bc935b5137"][record];
};
Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "oneSchoolGlobal", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("3a8efbd2-60e6-4ac0-9530-1f8aaf3fbfc0");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "contact", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("69c4b072-c8f1-45c3-b37a-fff8ae5d83bb");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "news", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("73375254-03da-429b-a414-55e045a7ffac");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "subdivision", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("dc61e1a2-7207-4e1e-8787-c36e87c4b7d9");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "campusCo", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("e5d1dd55-062c-4830-919d-c0546acff53e");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "communityBusiness", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("f9b3e1dc-f33f-4d84-89f5-95fe4af185df");
}
});

Object.defineProperty(Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType, "locality", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("fd16c400-f618-4619-a8b9-0f6e084766cc");
}
});

});
