define("FirebaseCloudMessagingPlugin.model$ExtraDataElementRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataElementRec = (function (_super) {
__extends(ExtraDataElementRec, _super);
function ExtraDataElementRec(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExtraDataElementRec.init();
return ExtraDataElementRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ExtraDataElementRec = ExtraDataElementRec;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataElementList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataElementList = (function (_super) {
__extends(ExtraDataElementList, _super);
function ExtraDataElementList(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementList.itemType = FirebaseCloudMessagingPluginModel.ExtraDataElementRec;
return ExtraDataElementList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtraDataElementList = ExtraDataElementList;

});
define("FirebaseCloudMessagingPlugin.model$DefaultNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var DefaultNotificationRec = (function (_super) {
__extends(DefaultNotificationRec, _super);
function DefaultNotificationRec(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Body", "bodyAttr", "body", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Image", "imageAttr", "image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeepLink", "deepLinkAttr", "deepLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtraDataList", "extraDataListAttr", "extraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataElementList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataElementList)
].concat(_super.attributesToDeclare.call(this));
};
DefaultNotificationRec.init();
return DefaultNotificationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.DefaultNotificationRec = DefaultNotificationRec;

});
define("FirebaseCloudMessagingPlugin.model$DefaultNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$DefaultNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var DefaultNotificationRecord = (function (_super) {
__extends(DefaultNotificationRecord, _super);
function DefaultNotificationRecord(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationRecord.attributesToDeclare = function () {
return [
this.attr("DefaultNotification", "defaultNotificationAttr", "DefaultNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.DefaultNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.DefaultNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultNotificationRecord.fromStructure = function (str) {
return new DefaultNotificationRecord(new DefaultNotificationRecord.RecordClass({
defaultNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultNotificationRecord._isAnonymousRecord = true;
DefaultNotificationRecord.UniqueId = "0053401b-ede4-25a8-83bc-7ba1fa76e443";
DefaultNotificationRecord.init();
return DefaultNotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.DefaultNotificationRecord = DefaultNotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataItemRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataItemRec = (function (_super) {
__extends(ExtraDataItemRec, _super);
function ExtraDataItemRec(defaults) {
_super.apply(this, arguments);
}
ExtraDataItemRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExtraDataItemRec.init();
return ExtraDataItemRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ExtraDataItemRec = ExtraDataItemRec;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataItemList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataItemRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataItemList = (function (_super) {
__extends(ExtraDataItemList, _super);
function ExtraDataItemList(defaults) {
_super.apply(this, arguments);
}
ExtraDataItemList.itemType = FirebaseCloudMessagingPluginModel.ExtraDataItemRec;
return ExtraDataItemList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtraDataItemList = ExtraDataItemList;

});
define("FirebaseCloudMessagingPlugin.model$FallbackUrlRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FallbackUrlRec = (function (_super) {
__extends(FallbackUrlRec, _super);
function FallbackUrlRec(defaults) {
_super.apply(this, arguments);
}
FallbackUrlRec.attributesToDeclare = function () {
return [
this.attr("iOS", "iOSAttr", "iOS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Android", "androidAttr", "android", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FallbackUrlRec.init();
return FallbackUrlRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.FallbackUrlRec = FallbackUrlRec;

});
define("FirebaseCloudMessagingPlugin.model$RouteDataRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataItemList", "FirebaseCloudMessagingPlugin.model$FallbackUrlRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var RouteDataRec = (function (_super) {
__extends(RouteDataRec, _super);
function RouteDataRec(defaults) {
_super.apply(this, arguments);
}
RouteDataRec.attributesToDeclare = function () {
return [
this.attr("DeepLinkScheme", "deepLinkSchemeAttr", "deepLinkScheme", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Identifier", "identifierAttr", "identifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParameterData", "parameterDataAttr", "parameterData", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataItemList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataItemList), 
this.attr("FallbackUrl", "fallbackUrlAttr", "fallbackUrl", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.FallbackUrlRec());
}, true, FirebaseCloudMessagingPluginModel.FallbackUrlRec)
].concat(_super.attributesToDeclare.call(this));
};
RouteDataRec.init();
return RouteDataRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.RouteDataRec = RouteDataRec;

});
define("FirebaseCloudMessagingPlugin.model$RouteDataList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$RouteDataRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var RouteDataList = (function (_super) {
__extends(RouteDataList, _super);
function RouteDataList(defaults) {
_super.apply(this, arguments);
}
RouteDataList.itemType = FirebaseCloudMessagingPluginModel.RouteDataRec;
return RouteDataList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.RouteDataList = RouteDataList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotificationRec = (function (_super) {
__extends(AndroidNotificationRec, _super);
function AndroidNotificationRec(defaults) {
_super.apply(this, arguments);
}
AndroidNotificationRec.attributesToDeclare = function () {
return [
this.attr("Icon", "iconAttr", "icon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Color", "colorAttr", "color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AndroidNotificationRec.init();
return AndroidNotificationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.AndroidNotificationRec = AndroidNotificationRec;

});
define("FirebaseCloudMessagingPlugin.model$NotificationSimpleRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$AndroidNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationSimpleRec = (function (_super) {
__extends(NotificationSimpleRec, _super);
function NotificationSimpleRec(defaults) {
_super.apply(this, arguments);
}
NotificationSimpleRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Body", "bodyAttr", "Body", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeepLink", "deepLinkAttr", "DeepLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Android", "androidAttr", "android", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.AndroidNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.AndroidNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationSimpleRec.init();
return NotificationSimpleRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationSimpleRec = NotificationSimpleRec;

});
define("FirebaseCloudMessagingPlugin.model$NotificationSimpleList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationSimpleRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationSimpleList = (function (_super) {
__extends(NotificationSimpleList, _super);
function NotificationSimpleList(defaults) {
_super.apply(this, arguments);
}
NotificationSimpleList.itemType = FirebaseCloudMessagingPluginModel.NotificationSimpleRec;
return NotificationSimpleList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationSimpleList = NotificationSimpleList;

});
define("FirebaseCloudMessagingPlugin.model$", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TextList = TextList;

});
define("FirebaseCloudMessagingPlugin.model$TopicsInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TopicsInformationRec = (function (_super) {
__extends(TopicsInformationRec, _super);
function TopicsInformationRec(defaults) {
_super.apply(this, arguments);
}
TopicsInformationRec.attributesToDeclare = function () {
return [
this.attr("TopicList", "topicListAttr", "TopicList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Condition", "conditionAttr", "Condition", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TopicsInformationRec.init();
return TopicsInformationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.TopicsInformationRec = TopicsInformationRec;

});
define("FirebaseCloudMessagingPlugin.model$TimeToLiveRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeToLiveRec = (function (_super) {
__extends(TimeToLiveRec, _super);
function TimeToLiveRec(defaults) {
_super.apply(this, arguments);
}
TimeToLiveRec.attributesToDeclare = function () {
return [
this.attr("TimeUnit", "timeUnitAttr", "TimeUnit", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeValue", "timeValueAttr", "TimeValue", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TimeToLiveRec.init();
return TimeToLiveRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.TimeToLiveRec = TimeToLiveRec;

});
define("FirebaseCloudMessagingPlugin.model$SilentTopicNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TopicsInformationRec", "FirebaseCloudMessagingPlugin.model$ExtraDataItemList", "FirebaseCloudMessagingPlugin.model$TimeToLiveRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentTopicNotificationRec = (function (_super) {
__extends(SilentTopicNotificationRec, _super);
function SilentTopicNotificationRec(defaults) {
_super.apply(this, arguments);
}
SilentTopicNotificationRec.attributesToDeclare = function () {
return [
this.attr("ServiceAccountFile", "serviceAccountFileAttr", "ServiceAccountFile", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("SendToTopics", "sendToTopicsAttr", "SendToTopics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TopicsInformationRec());
}, true, FirebaseCloudMessagingPluginModel.TopicsInformationRec), 
this.attr("ExtraDataList", "extraDataListAttr", "ExtraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataItemList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataItemList), 
this.attr("TimeToLive", "timeToLiveAttr", "TimeToLive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TimeToLiveRec());
}, true, FirebaseCloudMessagingPluginModel.TimeToLiveRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentTopicNotificationRec.init();
return SilentTopicNotificationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentTopicNotificationRec = SilentTopicNotificationRec;

});
define("FirebaseCloudMessagingPlugin.model$NotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationRec = (function (_super) {
__extends(NotificationRec, _super);
function NotificationRec(defaults) {
_super.apply(this, arguments);
}
NotificationRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Body", "bodyAttr", "body", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Image", "imageAttr", "image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Sound", "soundAttr", "Sound", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NotificationRec.init();
return NotificationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationRec = NotificationRec;

});
define("FirebaseCloudMessagingPlugin.model$NotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationList = (function (_super) {
__extends(NotificationList, _super);
function NotificationList(defaults) {
_super.apply(this, arguments);
}
NotificationList.itemType = FirebaseCloudMessagingPluginModel.NotificationRec;
return NotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationList = NotificationList;

});
define("FirebaseCloudMessagingPlugin.model$ResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$ResultRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ResultRecord = (function (_super) {
__extends(ResultRecord, _super);
function ResultRecord(defaults) {
_super.apply(this, arguments);
}
ResultRecord.attributesToDeclare = function () {
return [
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.ResultRec());
}, true, Extension_CloudMessagingExtensionModel.ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
ResultRecord.fromStructure = function (str) {
return new ResultRecord(new ResultRecord.RecordClass({
resultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResultRecord._isAnonymousRecord = true;
ResultRecord.UniqueId = "c0d17e1f-ce02-90da-9fa7-9b740cf8f71d";
ResultRecord.init();
return ResultRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ResultRecord = ResultRecord;

});
define("FirebaseCloudMessagingPlugin.model$ResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ResultRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ResultRecordList = (function (_super) {
__extends(ResultRecordList, _super);
function ResultRecordList(defaults) {
_super.apply(this, arguments);
}
ResultRecordList.itemType = FirebaseCloudMessagingPluginModel.ResultRecord;
return ResultRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ResultRecordList = ResultRecordList;

});
define("FirebaseCloudMessagingPlugin.model$FirebaseResponseList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$FirebaseResponseRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FirebaseResponseList = (function (_super) {
__extends(FirebaseResponseList, _super);
function FirebaseResponseList(defaults) {
_super.apply(this, arguments);
}
FirebaseResponseList.itemType = Extension_CloudMessagingExtensionModel.FirebaseResponseRec;
return FirebaseResponseList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.FirebaseResponseList = FirebaseResponseList;

});
define("FirebaseCloudMessagingPlugin.model$SilentUserNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataItemList", "FirebaseCloudMessagingPlugin.model$TimeToLiveRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentUserNotificationRec = (function (_super) {
__extends(SilentUserNotificationRec, _super);
function SilentUserNotificationRec(defaults) {
_super.apply(this, arguments);
}
SilentUserNotificationRec.attributesToDeclare = function () {
return [
this.attr("ServiceAccountFile", "serviceAccountFileAttr", "ServiceAccountFile", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("SendToUsers", "sendToUsersAttr", "SendToUsers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("SendToPlatform", "sendToPlatformAttr", "SendToPlatform", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SenderID", "senderIDAttr", "SenderID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtraDataList", "extraDataListAttr", "ExtraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataItemList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataItemList), 
this.attr("TimeToLive", "timeToLiveAttr", "TimeToLive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TimeToLiveRec());
}, true, FirebaseCloudMessagingPluginModel.TimeToLiveRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentUserNotificationRec.init();
return SilentUserNotificationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentUserNotificationRec = SilentUserNotificationRec;

});
define("FirebaseCloudMessagingPlugin.model$SilentUserNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentUserNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentUserNotificationList = (function (_super) {
__extends(SilentUserNotificationList, _super);
function SilentUserNotificationList(defaults) {
_super.apply(this, arguments);
}
SilentUserNotificationList.itemType = FirebaseCloudMessagingPluginModel.SilentUserNotificationRec;
return SilentUserNotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentUserNotificationList = SilentUserNotificationList;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataElementRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataElementRecord = (function (_super) {
__extends(ExtraDataElementRecord, _super);
function ExtraDataElementRecord(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementRecord.attributesToDeclare = function () {
return [
this.attr("ExtraDataElement", "extraDataElementAttr", "ExtraDataElement", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataElementRec());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataElementRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtraDataElementRecord.fromStructure = function (str) {
return new ExtraDataElementRecord(new ExtraDataElementRecord.RecordClass({
extraDataElementAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtraDataElementRecord._isAnonymousRecord = true;
ExtraDataElementRecord.UniqueId = "34689f3e-8db5-373a-5637-34c8cbe59f7f";
ExtraDataElementRecord.init();
return ExtraDataElementRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ExtraDataElementRecord = ExtraDataElementRecord;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataElementRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataElementRecordList = (function (_super) {
__extends(ExtraDataElementRecordList, _super);
function ExtraDataElementRecordList(defaults) {
_super.apply(this, arguments);
}
ExtraDataElementRecordList.itemType = FirebaseCloudMessagingPluginModel.ExtraDataElementRecord;
return ExtraDataElementRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtraDataElementRecordList = ExtraDataElementRecordList;

});
define("FirebaseCloudMessagingPlugin.model$PlatformRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var PlatformRec = (function (_super) {
__extends(PlatformRec, _super);
function PlatformRec(defaults) {
_super.apply(this, arguments);
}
PlatformRec.attributesToDeclare = function () {
return [
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
PlatformRec.init();
return PlatformRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.PlatformRec = PlatformRec;

});
define("FirebaseCloudMessagingPlugin.model$PlatformRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$PlatformRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var PlatformRecord = (function (_super) {
__extends(PlatformRecord, _super);
function PlatformRecord(defaults) {
_super.apply(this, arguments);
}
PlatformRecord.attributesToDeclare = function () {
return [
this.attr("Platform", "platformAttr", "Platform", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.PlatformRec());
}, true, FirebaseCloudMessagingPluginModel.PlatformRec)
].concat(_super.attributesToDeclare.call(this));
};
PlatformRecord.fromStructure = function (str) {
return new PlatformRecord(new PlatformRecord.RecordClass({
platformAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PlatformRecord._isAnonymousRecord = true;
PlatformRecord.UniqueId = "19659b39-265b-dbd3-410a-0903d4f6c105";
PlatformRecord.init();
return PlatformRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.PlatformRecord = PlatformRecord;

});
define("FirebaseCloudMessagingPlugin.model$TimeToLiveList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TimeToLiveRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeToLiveList = (function (_super) {
__extends(TimeToLiveList, _super);
function TimeToLiveList(defaults) {
_super.apply(this, arguments);
}
TimeToLiveList.itemType = FirebaseCloudMessagingPluginModel.TimeToLiveRec;
return TimeToLiveList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TimeToLiveList = TimeToLiveList;

});
define("FirebaseCloudMessagingPlugin.model$TimeUnitRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeUnitRec = (function (_super) {
__extends(TimeUnitRec, _super);
function TimeUnitRec(defaults) {
_super.apply(this, arguments);
}
TimeUnitRec.attributesToDeclare = function () {
return [
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
TimeUnitRec.init();
return TimeUnitRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.TimeUnitRec = TimeUnitRec;

});
define("FirebaseCloudMessagingPlugin.model$ActionEventRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionEventRec = (function (_super) {
__extends(ActionEventRec, _super);
function ActionEventRec(defaults) {
_super.apply(this, arguments);
}
ActionEventRec.attributesToDeclare = function () {
return [
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
ActionEventRec.init();
return ActionEventRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionEventRec = ActionEventRec;

});
define("FirebaseCloudMessagingPlugin.model$ActionEventList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionEventRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionEventList = (function (_super) {
__extends(ActionEventList, _super);
function ActionEventList(defaults) {
_super.apply(this, arguments);
}
ActionEventList.itemType = FirebaseCloudMessagingPluginModel.ActionEventRec;
return ActionEventList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionEventList = ActionEventList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationRecord = (function (_super) {
__extends(NotificationRecord, _super);
function NotificationRecord(defaults) {
_super.apply(this, arguments);
}
NotificationRecord.attributesToDeclare = function () {
return [
this.attr("Notification", "notificationAttr", "Notification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.NotificationRec());
}, true, FirebaseCloudMessagingPluginModel.NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationRecord.fromStructure = function (str) {
return new NotificationRecord(new NotificationRecord.RecordClass({
notificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationRecord._isAnonymousRecord = true;
NotificationRecord.UniqueId = "27bde128-5c1c-dcc5-8366-ac1ff907b57b";
NotificationRecord.init();
return NotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationRecord = NotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$ActionTextFieldRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTextFieldRec = (function (_super) {
__extends(ActionTextFieldRec, _super);
function ActionTextFieldRec(defaults) {
_super.apply(this, arguments);
}
ActionTextFieldRec.attributesToDeclare = function () {
return [
this.attr("Placeholder", "placeholderAttr", "placeholder", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InputTextKey", "inputTextKeyAttr", "inputTextKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InputFeedback", "inputFeedbackAttr", "inputFeedback", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActionTextFieldRec.init();
return ActionTextFieldRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionTextFieldRec = ActionTextFieldRec;

});
define("FirebaseCloudMessagingPlugin.model$ActionRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTextFieldRec", "FirebaseCloudMessagingPlugin.model$RouteDataRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionRec = (function (_super) {
__extends(ActionRec, _super);
function ActionRec(defaults) {
_super.apply(this, arguments);
}
ActionRec.attributesToDeclare = function () {
return [
this.attr("Identifier", "identifierAttr", "identifier", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Event", "eventAttr", "event", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TextField", "textFieldAttr", "textField", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ActionTextFieldRec());
}, true, FirebaseCloudMessagingPluginModel.ActionTextFieldRec), 
this.attr("RouteData", "routeDataAttr", "routeData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.RouteDataRec());
}, true, FirebaseCloudMessagingPluginModel.RouteDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionRec.init();
return ActionRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionRec = ActionRec;

});
define("FirebaseCloudMessagingPlugin.model$ActionList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionList = (function (_super) {
__extends(ActionList, _super);
function ActionList(defaults) {
_super.apply(this, arguments);
}
ActionList.itemType = FirebaseCloudMessagingPluginModel.ActionRec;
return ActionList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionList = ActionList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationCustomRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionList", "FirebaseCloudMessagingPlugin.model$AndroidNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationCustomRec = (function (_super) {
__extends(NotificationCustomRec, _super);
function NotificationCustomRec(defaults) {
_super.apply(this, arguments);
}
NotificationCustomRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Body", "bodyAttr", "Body", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeepLink", "deepLinkAttr", "DeepLink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Sound", "soundAttr", "Sound", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ActionList", "actionListAttr", "ActionList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ActionList());
}, true, FirebaseCloudMessagingPluginModel.ActionList), 
this.attr("Android", "androidAttr", "Android", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.AndroidNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.AndroidNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationCustomRec.init();
return NotificationCustomRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationCustomRec = NotificationCustomRec;

});
define("FirebaseCloudMessagingPlugin.model$SendToTopicsRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TopicsInformationRec", "FirebaseCloudMessagingPlugin.model$NotificationCustomRec", "FirebaseCloudMessagingPlugin.model$ExtraDataItemList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToTopicsRec = (function (_super) {
__extends(SendToTopicsRec, _super);
function SendToTopicsRec(defaults) {
_super.apply(this, arguments);
}
SendToTopicsRec.attributesToDeclare = function () {
return [
this.attr("ServiceAccountFile", "serviceAccountFileAttr", "ServiceAccountFile", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("SendToTopics", "sendToTopicsAttr", "SendToTopics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TopicsInformationRec());
}, true, FirebaseCloudMessagingPluginModel.TopicsInformationRec), 
this.attr("Notification", "notificationAttr", "Notification", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.NotificationCustomRec());
}, true, FirebaseCloudMessagingPluginModel.NotificationCustomRec), 
this.attr("ExtraDataList", "extraDataListAttr", "ExtraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataItemList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataItemList), 
this.attr("ShowIfAppOpen", "showIfAppOpenAttr", "ShowIfAppOpen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SendToTopicsRec.init();
return SendToTopicsRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SendToTopicsRec = SendToTopicsRec;

});
define("FirebaseCloudMessagingPlugin.model$SendToTopicsRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SendToTopicsRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToTopicsRecord = (function (_super) {
__extends(SendToTopicsRecord, _super);
function SendToTopicsRecord(defaults) {
_super.apply(this, arguments);
}
SendToTopicsRecord.attributesToDeclare = function () {
return [
this.attr("SendToTopics", "sendToTopicsAttr", "SendToTopics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SendToTopicsRec());
}, true, FirebaseCloudMessagingPluginModel.SendToTopicsRec)
].concat(_super.attributesToDeclare.call(this));
};
SendToTopicsRecord.fromStructure = function (str) {
return new SendToTopicsRecord(new SendToTopicsRecord.RecordClass({
sendToTopicsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SendToTopicsRecord._isAnonymousRecord = true;
SendToTopicsRecord.UniqueId = "94ac41af-a79b-0ed6-d8da-867956a8840c";
SendToTopicsRecord.init();
return SendToTopicsRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SendToTopicsRecord = SendToTopicsRecord;

});
define("FirebaseCloudMessagingPlugin.model$SendToTopicsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SendToTopicsRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToTopicsRecordList = (function (_super) {
__extends(SendToTopicsRecordList, _super);
function SendToTopicsRecordList(defaults) {
_super.apply(this, arguments);
}
SendToTopicsRecordList.itemType = FirebaseCloudMessagingPluginModel.SendToTopicsRecord;
return SendToTopicsRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SendToTopicsRecordList = SendToTopicsRecordList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$AndroidNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotificationRecord = (function (_super) {
__extends(AndroidNotificationRecord, _super);
function AndroidNotificationRecord(defaults) {
_super.apply(this, arguments);
}
AndroidNotificationRecord.attributesToDeclare = function () {
return [
this.attr("AndroidNotification", "androidNotificationAttr", "AndroidNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.AndroidNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.AndroidNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidNotificationRecord.fromStructure = function (str) {
return new AndroidNotificationRecord(new AndroidNotificationRecord.RecordClass({
androidNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidNotificationRecord._isAnonymousRecord = true;
AndroidNotificationRecord.UniqueId = "2d28ca74-4b51-1dec-eea8-c5e698429160";
AndroidNotificationRecord.init();
return AndroidNotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.AndroidNotificationRecord = AndroidNotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$SendToUsersRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationCustomRec", "FirebaseCloudMessagingPlugin.model$ExtraDataItemList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToUsersRec = (function (_super) {
__extends(SendToUsersRec, _super);
function SendToUsersRec(defaults) {
_super.apply(this, arguments);
}
SendToUsersRec.attributesToDeclare = function () {
return [
this.attr("ServiceAccountFile", "serviceAccountFileAttr", "ServiceAccountFile", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("SendToPlatform", "sendToPlatformAttr", "SendToPlatform", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SendToUsers", "sendToUsersAttr", "SendToUsers", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("SenderID", "senderIDAttr", "SenderID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notification", "notificationAttr", "Notification", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.NotificationCustomRec());
}, true, FirebaseCloudMessagingPluginModel.NotificationCustomRec), 
this.attr("ExtraDataList", "extraDataListAttr", "ExtraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataItemList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataItemList), 
this.attr("ShowIfAppOpen", "showIfAppOpenAttr", "ShowIfAppOpen", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SendToUsersRec.init();
return SendToUsersRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SendToUsersRec = SendToUsersRec;

});
define("FirebaseCloudMessagingPlugin.model$SendToUsersRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SendToUsersRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToUsersRecord = (function (_super) {
__extends(SendToUsersRecord, _super);
function SendToUsersRecord(defaults) {
_super.apply(this, arguments);
}
SendToUsersRecord.attributesToDeclare = function () {
return [
this.attr("SendToUsers", "sendToUsersAttr", "SendToUsers", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SendToUsersRec());
}, true, FirebaseCloudMessagingPluginModel.SendToUsersRec)
].concat(_super.attributesToDeclare.call(this));
};
SendToUsersRecord.fromStructure = function (str) {
return new SendToUsersRecord(new SendToUsersRecord.RecordClass({
sendToUsersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SendToUsersRecord._isAnonymousRecord = true;
SendToUsersRecord.UniqueId = "2f76b7b5-30c2-dea6-4883-7e6279cdfe4a";
SendToUsersRecord.init();
return SendToUsersRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SendToUsersRecord = SendToUsersRecord;

});
define("FirebaseCloudMessagingPlugin.model$ActionTextFieldRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTextFieldRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTextFieldRecord = (function (_super) {
__extends(ActionTextFieldRecord, _super);
function ActionTextFieldRecord(defaults) {
_super.apply(this, arguments);
}
ActionTextFieldRecord.attributesToDeclare = function () {
return [
this.attr("ActionTextField", "actionTextFieldAttr", "ActionTextField", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ActionTextFieldRec());
}, true, FirebaseCloudMessagingPluginModel.ActionTextFieldRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionTextFieldRecord.fromStructure = function (str) {
return new ActionTextFieldRecord(new ActionTextFieldRecord.RecordClass({
actionTextFieldAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionTextFieldRecord._isAnonymousRecord = true;
ActionTextFieldRecord.UniqueId = "305c68ac-a8db-a37d-e865-4d49bb369ed0";
ActionTextFieldRecord.init();
return ActionTextFieldRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionTextFieldRecord = ActionTextFieldRecord;

});
define("FirebaseCloudMessagingPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.model", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ErrorList = ErrorList;

});
define("FirebaseCloudMessagingPlugin.model$TopicsInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TopicsInformationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TopicsInformationRecord = (function (_super) {
__extends(TopicsInformationRecord, _super);
function TopicsInformationRecord(defaults) {
_super.apply(this, arguments);
}
TopicsInformationRecord.attributesToDeclare = function () {
return [
this.attr("TopicsInformation", "topicsInformationAttr", "TopicsInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TopicsInformationRec());
}, true, FirebaseCloudMessagingPluginModel.TopicsInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
TopicsInformationRecord.fromStructure = function (str) {
return new TopicsInformationRecord(new TopicsInformationRecord.RecordClass({
topicsInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TopicsInformationRecord._isAnonymousRecord = true;
TopicsInformationRecord.UniqueId = "3511d6cc-46ed-e4e6-bce7-74027efb392b";
TopicsInformationRecord.init();
return TopicsInformationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.TopicsInformationRecord = TopicsInformationRecord;

});
define("FirebaseCloudMessagingPlugin.model$MessageRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$NotificationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension", "Extension.CloudMessagingExtension.model$ApnsConfigurationRec", "FirebaseCloudMessagingPlugin.model$AndroidNotificationRec"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var MessageRec = (function (_super) {
__extends(MessageRec, _super);
function MessageRec(defaults) {
_super.apply(this, arguments);
}
MessageRec.attributesToDeclare = function () {
return [
this.attr("TokenList", "tokenListAttr", "tokenList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Topic", "topicAttr", "topic", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Condition", "conditionAttr", "condition", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("notification", "notificationAttr", "notification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.NotificationRec());
}, true, Extension_CloudMessagingExtensionModel.NotificationRec), 
this.attr("Data", "dataAttr", "data", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApnsConfiguration", "apnsConfigurationAttr", "apns", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.ApnsConfigurationRec());
}, true, Extension_CloudMessagingExtensionModel.ApnsConfigurationRec), 
this.attr("Android", "androidAttr", "android", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.AndroidNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.AndroidNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageRec.init();
return MessageRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.MessageRec = MessageRec;

});
define("FirebaseCloudMessagingPlugin.model$MessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$MessageRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var MessageRecord = (function (_super) {
__extends(MessageRecord, _super);
function MessageRecord(defaults) {
_super.apply(this, arguments);
}
MessageRecord.attributesToDeclare = function () {
return [
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.MessageRec());
}, true, FirebaseCloudMessagingPluginModel.MessageRec)
].concat(_super.attributesToDeclare.call(this));
};
MessageRecord.fromStructure = function (str) {
return new MessageRecord(new MessageRecord.RecordClass({
messageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MessageRecord._isAnonymousRecord = true;
MessageRecord.UniqueId = "4eb6164e-c6c7-d4fe-51ca-b07b05764c4e";
MessageRecord.init();
return MessageRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.MessageRecord = MessageRecord;

});
define("FirebaseCloudMessagingPlugin.model$MessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$MessageRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var MessageRecordList = (function (_super) {
__extends(MessageRecordList, _super);
function MessageRecordList(defaults) {
_super.apply(this, arguments);
}
MessageRecordList.itemType = FirebaseCloudMessagingPluginModel.MessageRecord;
return MessageRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.MessageRecordList = MessageRecordList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationCustomList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationCustomRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationCustomList = (function (_super) {
__extends(NotificationCustomList, _super);
function NotificationCustomList(defaults) {
_super.apply(this, arguments);
}
NotificationCustomList.itemType = FirebaseCloudMessagingPluginModel.NotificationCustomRec;
return NotificationCustomList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationCustomList = NotificationCustomList;

});
define("FirebaseCloudMessagingPlugin.model$DefaultNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$DefaultNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var DefaultNotificationList = (function (_super) {
__extends(DefaultNotificationList, _super);
function DefaultNotificationList(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationList.itemType = FirebaseCloudMessagingPluginModel.DefaultNotificationRec;
return DefaultNotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.DefaultNotificationList = DefaultNotificationList;

});
define("FirebaseCloudMessagingPlugin.model$ExtensionNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$NotificationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtensionNotificationList = (function (_super) {
__extends(ExtensionNotificationList, _super);
function ExtensionNotificationList(defaults) {
_super.apply(this, arguments);
}
ExtensionNotificationList.itemType = Extension_CloudMessagingExtensionModel.NotificationRec;
return ExtensionNotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtensionNotificationList = ExtensionNotificationList;

});
define("FirebaseCloudMessagingPlugin.model$ActionEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionEventRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionEventRecord = (function (_super) {
__extends(ActionEventRecord, _super);
function ActionEventRecord(defaults) {
_super.apply(this, arguments);
}
ActionEventRecord.attributesToDeclare = function () {
return [
this.attr("ActionEvent", "actionEventAttr", "ActionEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ActionEventRec());
}, true, FirebaseCloudMessagingPluginModel.ActionEventRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionEventRecord.fromStructure = function (str) {
return new ActionEventRecord(new ActionEventRecord.RecordClass({
actionEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionEventRecord._isAnonymousRecord = true;
ActionEventRecord.UniqueId = "e02e6120-6c1e-7345-34a5-e28c0486d62b";
ActionEventRecord.init();
return ActionEventRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionEventRecord = ActionEventRecord;

});
define("FirebaseCloudMessagingPlugin.model$ActionEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionEventRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionEventRecordList = (function (_super) {
__extends(ActionEventRecordList, _super);
function ActionEventRecordList(defaults) {
_super.apply(this, arguments);
}
ActionEventRecordList.itemType = FirebaseCloudMessagingPluginModel.ActionEventRecord;
return ActionEventRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionEventRecordList = ActionEventRecordList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotification2Record", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$AndroidNotificationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotification2Record = (function (_super) {
__extends(AndroidNotification2Record, _super);
function AndroidNotification2Record(defaults) {
_super.apply(this, arguments);
}
AndroidNotification2Record.attributesToDeclare = function () {
return [
this.attr("AndroidNotification", "androidNotificationAttr", "AndroidNotification2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.AndroidNotificationRec());
}, true, Extension_CloudMessagingExtensionModel.AndroidNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidNotification2Record.fromStructure = function (str) {
return new AndroidNotification2Record(new AndroidNotification2Record.RecordClass({
androidNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidNotification2Record._isAnonymousRecord = true;
AndroidNotification2Record.UniqueId = "e2ff9775-fd7a-4f95-8eff-b78a892cfce8";
AndroidNotification2Record.init();
return AndroidNotification2Record;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.AndroidNotification2Record = AndroidNotification2Record;

});
define("FirebaseCloudMessagingPlugin.model$AndroidConfigList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$AndroidConfigRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidConfigList = (function (_super) {
__extends(AndroidConfigList, _super);
function AndroidConfigList(defaults) {
_super.apply(this, arguments);
}
AndroidConfigList.itemType = Extension_CloudMessagingExtensionModel.AndroidConfigRec;
return AndroidConfigList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.AndroidConfigList = AndroidConfigList;

});
define("FirebaseCloudMessagingPlugin.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecord = (function (_super) {
__extends(Mobile_OperatingSystemRecord, _super);
function Mobile_OperatingSystemRecord(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecord.attributesToDeclare = function () {
return [
this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
}, true, CommonPluginModel.Mobile_OperatingSystemRec)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRecord.fromStructure = function (str) {
return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Mobile_OperatingSystemRecord._isAnonymousRecord = true;
Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
Mobile_OperatingSystemRecord.init();
return Mobile_OperatingSystemRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("FirebaseCloudMessagingPlugin.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = FirebaseCloudMessagingPluginModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$AndroidConfigRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidConfigRecord = (function (_super) {
__extends(AndroidConfigRecord, _super);
function AndroidConfigRecord(defaults) {
_super.apply(this, arguments);
}
AndroidConfigRecord.attributesToDeclare = function () {
return [
this.attr("AndroidConfig", "androidConfigAttr", "AndroidConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.AndroidConfigRec());
}, true, Extension_CloudMessagingExtensionModel.AndroidConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidConfigRecord.fromStructure = function (str) {
return new AndroidConfigRecord(new AndroidConfigRecord.RecordClass({
androidConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidConfigRecord._isAnonymousRecord = true;
AndroidConfigRecord.UniqueId = "6873cf0c-20e1-4f67-0f50-81f6344abafa";
AndroidConfigRecord.init();
return AndroidConfigRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.AndroidConfigRecord = AndroidConfigRecord;

});
define("FirebaseCloudMessagingPlugin.model$AndroidConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$AndroidConfigRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidConfigRecordList = (function (_super) {
__extends(AndroidConfigRecordList, _super);
function AndroidConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AndroidConfigRecordList.itemType = FirebaseCloudMessagingPluginModel.AndroidConfigRecord;
return AndroidConfigRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.AndroidConfigRecordList = AndroidConfigRecordList;

});
define("FirebaseCloudMessagingPlugin.model$PlatformList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$PlatformRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var PlatformList = (function (_super) {
__extends(PlatformList, _super);
function PlatformList(defaults) {
_super.apply(this, arguments);
}
PlatformList.itemType = FirebaseCloudMessagingPluginModel.PlatformRec;
return PlatformList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.PlatformList = PlatformList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotification2List", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$AndroidNotificationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotification2List = (function (_super) {
__extends(AndroidNotification2List, _super);
function AndroidNotification2List(defaults) {
_super.apply(this, arguments);
}
AndroidNotification2List.itemType = Extension_CloudMessagingExtensionModel.AndroidNotificationRec;
return AndroidNotification2List;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.AndroidNotification2List = AndroidNotification2List;

});
define("FirebaseCloudMessagingPlugin.model$NotificationCustomRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationCustomRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationCustomRecord = (function (_super) {
__extends(NotificationCustomRecord, _super);
function NotificationCustomRecord(defaults) {
_super.apply(this, arguments);
}
NotificationCustomRecord.attributesToDeclare = function () {
return [
this.attr("NotificationCustom", "notificationCustomAttr", "NotificationCustom", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.NotificationCustomRec());
}, true, FirebaseCloudMessagingPluginModel.NotificationCustomRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationCustomRecord.fromStructure = function (str) {
return new NotificationCustomRecord(new NotificationCustomRecord.RecordClass({
notificationCustomAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationCustomRecord._isAnonymousRecord = true;
NotificationCustomRecord.UniqueId = "e7a3ac04-b71f-c8ca-67de-baf5bac96b21";
NotificationCustomRecord.init();
return NotificationCustomRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationCustomRecord = NotificationCustomRecord;

});
define("FirebaseCloudMessagingPlugin.model$NotificationCustomRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationCustomRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationCustomRecordList = (function (_super) {
__extends(NotificationCustomRecordList, _super);
function NotificationCustomRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationCustomRecordList.itemType = FirebaseCloudMessagingPluginModel.NotificationCustomRecord;
return NotificationCustomRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationCustomRecordList = NotificationCustomRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SilentTopicNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentTopicNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentTopicNotificationRecord = (function (_super) {
__extends(SilentTopicNotificationRecord, _super);
function SilentTopicNotificationRecord(defaults) {
_super.apply(this, arguments);
}
SilentTopicNotificationRecord.attributesToDeclare = function () {
return [
this.attr("SilentTopicNotification", "silentTopicNotificationAttr", "SilentTopicNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SilentTopicNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.SilentTopicNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentTopicNotificationRecord.fromStructure = function (str) {
return new SilentTopicNotificationRecord(new SilentTopicNotificationRecord.RecordClass({
silentTopicNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SilentTopicNotificationRecord._isAnonymousRecord = true;
SilentTopicNotificationRecord.UniqueId = "4d95ea56-b8d7-da35-23df-44b30a8f4b95";
SilentTopicNotificationRecord.init();
return SilentTopicNotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentTopicNotificationRecord = SilentTopicNotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataItemRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataItemRecord = (function (_super) {
__extends(ExtraDataItemRecord, _super);
function ExtraDataItemRecord(defaults) {
_super.apply(this, arguments);
}
ExtraDataItemRecord.attributesToDeclare = function () {
return [
this.attr("ExtraDataItem", "extraDataItemAttr", "ExtraDataItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataItemRec());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataItemRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtraDataItemRecord.fromStructure = function (str) {
return new ExtraDataItemRecord(new ExtraDataItemRecord.RecordClass({
extraDataItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtraDataItemRecord._isAnonymousRecord = true;
ExtraDataItemRecord.UniqueId = "5582984d-4b75-28a0-1e8a-59782483b54b";
ExtraDataItemRecord.init();
return ExtraDataItemRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ExtraDataItemRecord = ExtraDataItemRecord;

});
define("FirebaseCloudMessagingPlugin.model$MessageList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$MessageRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var MessageList = (function (_super) {
__extends(MessageList, _super);
function MessageList(defaults) {
_super.apply(this, arguments);
}
MessageList.itemType = FirebaseCloudMessagingPluginModel.MessageRec;
return MessageList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.MessageList = MessageList;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationTempRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationTempRec = (function (_super) {
__extends(SilentNotificationTempRec, _super);
function SilentNotificationTempRec(defaults) {
_super.apply(this, arguments);
}
SilentNotificationTempRec.attributesToDeclare = function () {
return [
this.attr("MessageID", "messageIDAttr", "messageID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeToLive", "timeToLiveAttr", "timeToLive", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtraDataList", "extraDataListAttr", "extraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataElementList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataElementList), 
this.attr("Timestamp", "timestampAttr", "timeStamp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SilentNotificationTempRec.init();
return SilentNotificationTempRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentNotificationTempRec = SilentNotificationTempRec;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationTempList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationTempRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationTempList = (function (_super) {
__extends(SilentNotificationTempList, _super);
function SilentNotificationTempList(defaults) {
_super.apply(this, arguments);
}
SilentNotificationTempList.itemType = FirebaseCloudMessagingPluginModel.SilentNotificationTempRec;
return SilentNotificationTempList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentNotificationTempList = SilentNotificationTempList;

});
define("FirebaseCloudMessagingPlugin.model$ResultList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$ResultRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ResultList = (function (_super) {
__extends(ResultList, _super);
function ResultList(defaults) {
_super.apply(this, arguments);
}
ResultList.itemType = Extension_CloudMessagingExtensionModel.ResultRec;
return ResultList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ResultList = ResultList;

});
define("FirebaseCloudMessagingPlugin.model$TimeUnitRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TimeUnitRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeUnitRecord = (function (_super) {
__extends(TimeUnitRecord, _super);
function TimeUnitRecord(defaults) {
_super.apply(this, arguments);
}
TimeUnitRecord.attributesToDeclare = function () {
return [
this.attr("TimeUnit", "timeUnitAttr", "TimeUnit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TimeUnitRec());
}, true, FirebaseCloudMessagingPluginModel.TimeUnitRec)
].concat(_super.attributesToDeclare.call(this));
};
TimeUnitRecord.fromStructure = function (str) {
return new TimeUnitRecord(new TimeUnitRecord.RecordClass({
timeUnitAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimeUnitRecord._isAnonymousRecord = true;
TimeUnitRecord.UniqueId = "a20e4d65-aa5f-a250-725d-e32e57e70e95";
TimeUnitRecord.init();
return TimeUnitRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.TimeUnitRecord = TimeUnitRecord;

});
define("FirebaseCloudMessagingPlugin.model$TimeUnitRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TimeUnitRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeUnitRecordList = (function (_super) {
__extends(TimeUnitRecordList, _super);
function TimeUnitRecordList(defaults) {
_super.apply(this, arguments);
}
TimeUnitRecordList.itemType = FirebaseCloudMessagingPluginModel.TimeUnitRecord;
return TimeUnitRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TimeUnitRecordList = TimeUnitRecordList;

});
define("FirebaseCloudMessagingPlugin.model$FirebaseResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$FirebaseResponseRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FirebaseResponseRecord = (function (_super) {
__extends(FirebaseResponseRecord, _super);
function FirebaseResponseRecord(defaults) {
_super.apply(this, arguments);
}
FirebaseResponseRecord.attributesToDeclare = function () {
return [
this.attr("FirebaseResponse", "firebaseResponseAttr", "FirebaseResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.FirebaseResponseRec());
}, true, Extension_CloudMessagingExtensionModel.FirebaseResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
FirebaseResponseRecord.fromStructure = function (str) {
return new FirebaseResponseRecord(new FirebaseResponseRecord.RecordClass({
firebaseResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FirebaseResponseRecord._isAnonymousRecord = true;
FirebaseResponseRecord.UniqueId = "65210e57-bfdb-e281-6024-e8f1ad12cc7f";
FirebaseResponseRecord.init();
return FirebaseResponseRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.FirebaseResponseRecord = FirebaseResponseRecord;

});
define("FirebaseCloudMessagingPlugin.model$ActionTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTypeRec = (function (_super) {
__extends(ActionTypeRec, _super);
function ActionTypeRec(defaults) {
_super.apply(this, arguments);
}
ActionTypeRec.attributesToDeclare = function () {
return [
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
ActionTypeRec.init();
return ActionTypeRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionTypeRec = ActionTypeRec;

});
define("FirebaseCloudMessagingPlugin.model$ActionTypeList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTypeRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTypeList = (function (_super) {
__extends(ActionTypeList, _super);
function ActionTypeList(defaults) {
_super.apply(this, arguments);
}
ActionTypeList.itemType = FirebaseCloudMessagingPluginModel.ActionTypeRec;
return ActionTypeList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionTypeList = ActionTypeList;

});
define("FirebaseCloudMessagingPlugin.model$DefaultNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$DefaultNotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var DefaultNotificationRecordList = (function (_super) {
__extends(DefaultNotificationRecordList, _super);
function DefaultNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultNotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.DefaultNotificationRecord;
return DefaultNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.DefaultNotificationRecordList = DefaultNotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ExtraDataItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataItemRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtraDataItemRecordList = (function (_super) {
__extends(ExtraDataItemRecordList, _super);
function ExtraDataItemRecordList(defaults) {
_super.apply(this, arguments);
}
ExtraDataItemRecordList.itemType = FirebaseCloudMessagingPluginModel.ExtraDataItemRecord;
return ExtraDataItemRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtraDataItemRecordList = ExtraDataItemRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.model", "CommonPlugin.model$ErrorRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FirebaseCloudMessagingPluginModel) {
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
FirebaseCloudMessagingPluginModel.ErrorRecord = ErrorRecord;

});
define("FirebaseCloudMessagingPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ErrorRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = FirebaseCloudMessagingPluginModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ErrorRecordList = ErrorRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ApnsConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ApnsConfigurationRec = (function (_super) {
__extends(ApnsConfigurationRec, _super);
function ApnsConfigurationRec(defaults) {
_super.apply(this, arguments);
}
ApnsConfigurationRec.attributesToDeclare = function () {
return [
this.attr("ContentAvailable", "contentAvailableAttr", "content_available", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ApnsConfigurationRec.fromStructure = function (str) {
return new ApnsConfigurationRec(new ApnsConfigurationRec.RecordClass({
contentAvailableAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApnsConfigurationRec.init();
return ApnsConfigurationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ApnsConfigurationRec = ApnsConfigurationRec;

});
define("FirebaseCloudMessagingPlugin.model$ApnsConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ApnsConfigurationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ApnsConfigurationRecord = (function (_super) {
__extends(ApnsConfigurationRecord, _super);
function ApnsConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
ApnsConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("ApnsConfiguration", "apnsConfigurationAttr", "ApnsConfiguration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ApnsConfigurationRec());
}, true, FirebaseCloudMessagingPluginModel.ApnsConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
ApnsConfigurationRecord.fromStructure = function (str) {
return new ApnsConfigurationRecord(new ApnsConfigurationRecord.RecordClass({
apnsConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ApnsConfigurationRecord._isAnonymousRecord = true;
ApnsConfigurationRecord.UniqueId = "6c6e4736-bf92-afab-06de-d29f4f1dfc22";
ApnsConfigurationRecord.init();
return ApnsConfigurationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ApnsConfigurationRecord = ApnsConfigurationRecord;

});
define("FirebaseCloudMessagingPlugin.model$ExtensionNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$NotificationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtensionNotificationRecord = (function (_super) {
__extends(ExtensionNotificationRecord, _super);
function ExtensionNotificationRecord(defaults) {
_super.apply(this, arguments);
}
ExtensionNotificationRecord.attributesToDeclare = function () {
return [
this.attr("Notification", "notificationAttr", "ExtensionNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.NotificationRec());
}, true, Extension_CloudMessagingExtensionModel.NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionNotificationRecord.fromStructure = function (str) {
return new ExtensionNotificationRecord(new ExtensionNotificationRecord.RecordClass({
notificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtensionNotificationRecord._isAnonymousRecord = true;
ExtensionNotificationRecord.UniqueId = "a961f953-6f15-bf76-5690-2eea438aa994";
ExtensionNotificationRecord.init();
return ExtensionNotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ExtensionNotificationRecord = ExtensionNotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$ExtensionApnsConfigurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$ApnsConfigurationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtensionApnsConfigurationRecord = (function (_super) {
__extends(ExtensionApnsConfigurationRecord, _super);
function ExtensionApnsConfigurationRecord(defaults) {
_super.apply(this, arguments);
}
ExtensionApnsConfigurationRecord.attributesToDeclare = function () {
return [
this.attr("ApnsConfiguration", "apnsConfigurationAttr", "ExtensionApnsConfiguration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.ApnsConfigurationRec());
}, true, Extension_CloudMessagingExtensionModel.ApnsConfigurationRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionApnsConfigurationRecord.fromStructure = function (str) {
return new ExtensionApnsConfigurationRecord(new ExtensionApnsConfigurationRecord.RecordClass({
apnsConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtensionApnsConfigurationRecord._isAnonymousRecord = true;
ExtensionApnsConfigurationRecord.UniqueId = "cd65b4fe-ec0b-bf10-591f-e599ea7ed776";
ExtensionApnsConfigurationRecord.init();
return ExtensionApnsConfigurationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ExtensionApnsConfigurationRecord = ExtensionApnsConfigurationRecord;

});
define("FirebaseCloudMessagingPlugin.model$NotificationRequestList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$NotificationRequestRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationRequestList = (function (_super) {
__extends(NotificationRequestList, _super);
function NotificationRequestList(defaults) {
_super.apply(this, arguments);
}
NotificationRequestList.itemType = Extension_CloudMessagingExtensionModel.NotificationRequestRec;
return NotificationRequestList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationRequestList = NotificationRequestList;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationTempRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationTempRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationTempRecord = (function (_super) {
__extends(SilentNotificationTempRecord, _super);
function SilentNotificationTempRecord(defaults) {
_super.apply(this, arguments);
}
SilentNotificationTempRecord.attributesToDeclare = function () {
return [
this.attr("SilentNotificationTemp", "silentNotificationTempAttr", "SilentNotificationTemp", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SilentNotificationTempRec());
}, true, FirebaseCloudMessagingPluginModel.SilentNotificationTempRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentNotificationTempRecord.fromStructure = function (str) {
return new SilentNotificationTempRecord(new SilentNotificationTempRecord.RecordClass({
silentNotificationTempAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SilentNotificationTempRecord._isAnonymousRecord = true;
SilentNotificationTempRecord.UniqueId = "70c6dd1c-190e-c57a-59bd-9103f8b0bb1a";
SilentNotificationTempRecord.init();
return SilentNotificationTempRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentNotificationTempRecord = SilentNotificationTempRecord;

});
define("FirebaseCloudMessagingPlugin.model$TimeToLiveRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TimeToLiveRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeToLiveRecord = (function (_super) {
__extends(TimeToLiveRecord, _super);
function TimeToLiveRecord(defaults) {
_super.apply(this, arguments);
}
TimeToLiveRecord.attributesToDeclare = function () {
return [
this.attr("TimeToLive", "timeToLiveAttr", "TimeToLive", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.TimeToLiveRec());
}, true, FirebaseCloudMessagingPluginModel.TimeToLiveRec)
].concat(_super.attributesToDeclare.call(this));
};
TimeToLiveRecord.fromStructure = function (str) {
return new TimeToLiveRecord(new TimeToLiveRecord.RecordClass({
timeToLiveAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TimeToLiveRecord._isAnonymousRecord = true;
TimeToLiveRecord.UniqueId = "fae2ee35-0563-6a2e-0c01-8b307a3442d0";
TimeToLiveRecord.init();
return TimeToLiveRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.TimeToLiveRecord = TimeToLiveRecord;

});
define("FirebaseCloudMessagingPlugin.model$TimeToLiveRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TimeToLiveRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeToLiveRecordList = (function (_super) {
__extends(TimeToLiveRecordList, _super);
function TimeToLiveRecordList(defaults) {
_super.apply(this, arguments);
}
TimeToLiveRecordList.itemType = FirebaseCloudMessagingPluginModel.TimeToLiveRecord;
return TimeToLiveRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TimeToLiveRecordList = TimeToLiveRecordList;

});
define("FirebaseCloudMessagingPlugin.model$TopicsInformationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TopicsInformationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TopicsInformationList = (function (_super) {
__extends(TopicsInformationList, _super);
function TopicsInformationList(defaults) {
_super.apply(this, arguments);
}
TopicsInformationList.itemType = FirebaseCloudMessagingPluginModel.TopicsInformationRec;
return TopicsInformationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TopicsInformationList = TopicsInformationList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationRequestRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$NotificationRequestRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationRequestRecord = (function (_super) {
__extends(NotificationRequestRecord, _super);
function NotificationRequestRecord(defaults) {
_super.apply(this, arguments);
}
NotificationRequestRecord.attributesToDeclare = function () {
return [
this.attr("NotificationRequest", "notificationRequestAttr", "NotificationRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CloudMessagingExtensionModel.NotificationRequestRec());
}, true, Extension_CloudMessagingExtensionModel.NotificationRequestRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationRequestRecord.fromStructure = function (str) {
return new NotificationRequestRecord(new NotificationRequestRecord.RecordClass({
notificationRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationRequestRecord._isAnonymousRecord = true;
NotificationRequestRecord.UniqueId = "96292c98-28fa-305e-1471-d5f644529f0d";
NotificationRequestRecord.init();
return NotificationRequestRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationRequestRecord = NotificationRequestRecord;

});
define("FirebaseCloudMessagingPlugin.model$NotificationRequestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationRequestRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationRequestRecordList = (function (_super) {
__extends(NotificationRequestRecordList, _super);
function NotificationRequestRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationRequestRecordList.itemType = FirebaseCloudMessagingPluginModel.NotificationRequestRecord;
return NotificationRequestRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationRequestRecordList = NotificationRequestRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ApnsConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ApnsConfigurationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ApnsConfigurationRecordList = (function (_super) {
__extends(ApnsConfigurationRecordList, _super);
function ApnsConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
ApnsConfigurationRecordList.itemType = FirebaseCloudMessagingPluginModel.ApnsConfigurationRecord;
return ApnsConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ApnsConfigurationRecordList = ApnsConfigurationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SendToUsersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SendToUsersRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToUsersRecordList = (function (_super) {
__extends(SendToUsersRecordList, _super);
function SendToUsersRecordList(defaults) {
_super.apply(this, arguments);
}
SendToUsersRecordList.itemType = FirebaseCloudMessagingPluginModel.SendToUsersRecord;
return SendToUsersRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SendToUsersRecordList = SendToUsersRecordList;

});
define("FirebaseCloudMessagingPlugin.model$FallbackUrlList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$FallbackUrlRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FallbackUrlList = (function (_super) {
__extends(FallbackUrlList, _super);
function FallbackUrlList(defaults) {
_super.apply(this, arguments);
}
FallbackUrlList.itemType = FirebaseCloudMessagingPluginModel.FallbackUrlRec;
return FallbackUrlList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.FallbackUrlList = FallbackUrlList;

});
define("FirebaseCloudMessagingPlugin.model$ActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionRecord = (function (_super) {
__extends(ActionRecord, _super);
function ActionRecord(defaults) {
_super.apply(this, arguments);
}
ActionRecord.attributesToDeclare = function () {
return [
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ActionRec());
}, true, FirebaseCloudMessagingPluginModel.ActionRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionRecord.fromStructure = function (str) {
return new ActionRecord(new ActionRecord.RecordClass({
actionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionRecord._isAnonymousRecord = true;
ActionRecord.UniqueId = "d2409a9e-4feb-32d0-f4d6-a73b461a655d";
ActionRecord.init();
return ActionRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionRecord = ActionRecord;

});
define("FirebaseCloudMessagingPlugin.model$ActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionRecordList = (function (_super) {
__extends(ActionRecordList, _super);
function ActionRecordList(defaults) {
_super.apply(this, arguments);
}
ActionRecordList.itemType = FirebaseCloudMessagingPluginModel.ActionRecord;
return ActionRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionRecordList = ActionRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationRec = (function (_super) {
__extends(SilentNotificationRec, _super);
function SilentNotificationRec(defaults) {
_super.apply(this, arguments);
}
SilentNotificationRec.attributesToDeclare = function () {
return [
this.attr("MessageID", "messageIDAttr", "messageID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeToLive", "timeToLiveAttr", "timeToLive", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ExtraDataList", "extraDataListAttr", "extraDataList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataElementList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataElementList), 
this.attr("Timestamp", "timestampAttr", "timeStamp", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SilentNotificationRec.init();
return SilentNotificationRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentNotificationRec = SilentNotificationRec;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationRecord = (function (_super) {
__extends(SilentNotificationRecord, _super);
function SilentNotificationRecord(defaults) {
_super.apply(this, arguments);
}
SilentNotificationRecord.attributesToDeclare = function () {
return [
this.attr("SilentNotification", "silentNotificationAttr", "SilentNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SilentNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.SilentNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentNotificationRecord.fromStructure = function (str) {
return new SilentNotificationRecord(new SilentNotificationRecord.RecordClass({
silentNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SilentNotificationRecord._isAnonymousRecord = true;
SilentNotificationRecord.UniqueId = "8c591730-f701-a3f5-cfb5-6d8732bbaf80";
SilentNotificationRecord.init();
return SilentNotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentNotificationRecord = SilentNotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$FallbackUrlRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$FallbackUrlRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FallbackUrlRecord = (function (_super) {
__extends(FallbackUrlRecord, _super);
function FallbackUrlRecord(defaults) {
_super.apply(this, arguments);
}
FallbackUrlRecord.attributesToDeclare = function () {
return [
this.attr("FallbackUrl", "fallbackUrlAttr", "FallbackUrl", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.FallbackUrlRec());
}, true, FirebaseCloudMessagingPluginModel.FallbackUrlRec)
].concat(_super.attributesToDeclare.call(this));
};
FallbackUrlRecord.fromStructure = function (str) {
return new FallbackUrlRecord(new FallbackUrlRecord.RecordClass({
fallbackUrlAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FallbackUrlRecord._isAnonymousRecord = true;
FallbackUrlRecord.UniqueId = "8e7eb0ac-8502-ae27-46de-6b8a5e34cb6d";
FallbackUrlRecord.init();
return FallbackUrlRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.FallbackUrlRecord = FallbackUrlRecord;

});
define("FirebaseCloudMessagingPlugin.model$InternalEventRec", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtraDataElementList"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var InternalEventRec = (function (_super) {
__extends(InternalEventRec, _super);
function InternalEventRec(defaults) {
_super.apply(this, arguments);
}
InternalEventRec.attributesToDeclare = function () {
return [
this.attr("ScreenName", "screenNameAttr", "screenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParameterList", "parameterListAttr", "parameterArray", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ExtraDataElementList());
}, true, FirebaseCloudMessagingPluginModel.ExtraDataElementList)
].concat(_super.attributesToDeclare.call(this));
};
InternalEventRec.init();
return InternalEventRec;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.InternalEventRec = InternalEventRec;

});
define("FirebaseCloudMessagingPlugin.model$InternalEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$InternalEventRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var InternalEventRecord = (function (_super) {
__extends(InternalEventRecord, _super);
function InternalEventRecord(defaults) {
_super.apply(this, arguments);
}
InternalEventRecord.attributesToDeclare = function () {
return [
this.attr("InternalEvent", "internalEventAttr", "InternalEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.InternalEventRec());
}, true, FirebaseCloudMessagingPluginModel.InternalEventRec)
].concat(_super.attributesToDeclare.call(this));
};
InternalEventRecord.fromStructure = function (str) {
return new InternalEventRecord(new InternalEventRecord.RecordClass({
internalEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InternalEventRecord._isAnonymousRecord = true;
InternalEventRecord.UniqueId = "9e1d4ade-f74a-4e47-ce37-f736ed8b9ef3";
InternalEventRecord.init();
return InternalEventRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.InternalEventRecord = InternalEventRecord;

});
define("FirebaseCloudMessagingPlugin.model$InternalEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$InternalEventRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var InternalEventRecordList = (function (_super) {
__extends(InternalEventRecordList, _super);
function InternalEventRecordList(defaults) {
_super.apply(this, arguments);
}
InternalEventRecordList.itemType = FirebaseCloudMessagingPluginModel.InternalEventRecord;
return InternalEventRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.InternalEventRecordList = InternalEventRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SendToTopicsList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SendToTopicsRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToTopicsList = (function (_super) {
__extends(SendToTopicsList, _super);
function SendToTopicsList(defaults) {
_super.apply(this, arguments);
}
SendToTopicsList.itemType = FirebaseCloudMessagingPluginModel.SendToTopicsRec;
return SendToTopicsList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SendToTopicsList = SendToTopicsList;

});
define("FirebaseCloudMessagingPlugin.model$PlatformRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$PlatformRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var PlatformRecordList = (function (_super) {
__extends(PlatformRecordList, _super);
function PlatformRecordList(defaults) {
_super.apply(this, arguments);
}
PlatformRecordList.itemType = FirebaseCloudMessagingPluginModel.PlatformRecord;
return PlatformRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.PlatformRecordList = PlatformRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ActionTextFieldList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTextFieldRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTextFieldList = (function (_super) {
__extends(ActionTextFieldList, _super);
function ActionTextFieldList(defaults) {
_super.apply(this, arguments);
}
ActionTextFieldList.itemType = FirebaseCloudMessagingPluginModel.ActionTextFieldRec;
return ActionTextFieldList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionTextFieldList = ActionTextFieldList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationSimpleRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationSimpleRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationSimpleRecord = (function (_super) {
__extends(NotificationSimpleRecord, _super);
function NotificationSimpleRecord(defaults) {
_super.apply(this, arguments);
}
NotificationSimpleRecord.attributesToDeclare = function () {
return [
this.attr("NotificationSimple", "notificationSimpleAttr", "NotificationSimple", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.NotificationSimpleRec());
}, true, FirebaseCloudMessagingPluginModel.NotificationSimpleRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationSimpleRecord.fromStructure = function (str) {
return new NotificationSimpleRecord(new NotificationSimpleRecord.RecordClass({
notificationSimpleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationSimpleRecord._isAnonymousRecord = true;
NotificationSimpleRecord.UniqueId = "a218d4d9-c1aa-3306-1b2e-0edde5fea5fa";
NotificationSimpleRecord.init();
return NotificationSimpleRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.NotificationSimpleRecord = NotificationSimpleRecord;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationRecordList = (function (_super) {
__extends(SilentNotificationRecordList, _super);
function SilentNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
SilentNotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.SilentNotificationRecord;
return SilentNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentNotificationRecordList = SilentNotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$InternalEventList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$InternalEventRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var InternalEventList = (function (_super) {
__extends(InternalEventList, _super);
function InternalEventList(defaults) {
_super.apply(this, arguments);
}
InternalEventList.itemType = FirebaseCloudMessagingPluginModel.InternalEventRec;
return InternalEventList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.InternalEventList = InternalEventList;

});
define("FirebaseCloudMessagingPlugin.model$FallbackUrlRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$FallbackUrlRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FallbackUrlRecordList = (function (_super) {
__extends(FallbackUrlRecordList, _super);
function FallbackUrlRecordList(defaults) {
_super.apply(this, arguments);
}
FallbackUrlRecordList.itemType = FirebaseCloudMessagingPluginModel.FallbackUrlRecord;
return FallbackUrlRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.FallbackUrlRecordList = FallbackUrlRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ApnsConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ApnsConfigurationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ApnsConfigurationList = (function (_super) {
__extends(ApnsConfigurationList, _super);
function ApnsConfigurationList(defaults) {
_super.apply(this, arguments);
}
ApnsConfigurationList.itemType = FirebaseCloudMessagingPluginModel.ApnsConfigurationRec;
return ApnsConfigurationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ApnsConfigurationList = ApnsConfigurationList;

});
define("FirebaseCloudMessagingPlugin.model$SilentUserNotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentUserNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentUserNotificationRecord = (function (_super) {
__extends(SilentUserNotificationRecord, _super);
function SilentUserNotificationRecord(defaults) {
_super.apply(this, arguments);
}
SilentUserNotificationRecord.attributesToDeclare = function () {
return [
this.attr("SilentUserNotification", "silentUserNotificationAttr", "SilentUserNotification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.SilentUserNotificationRec());
}, true, FirebaseCloudMessagingPluginModel.SilentUserNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
SilentUserNotificationRecord.fromStructure = function (str) {
return new SilentUserNotificationRecord(new SilentUserNotificationRecord.RecordClass({
silentUserNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SilentUserNotificationRecord._isAnonymousRecord = true;
SilentUserNotificationRecord.UniqueId = "c6a80a80-1cd3-fb97-52d7-163864f7abeb";
SilentUserNotificationRecord.init();
return SilentUserNotificationRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.SilentUserNotificationRecord = SilentUserNotificationRecord;

});
define("FirebaseCloudMessagingPlugin.model$SilentUserNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentUserNotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentUserNotificationRecordList = (function (_super) {
__extends(SilentUserNotificationRecordList, _super);
function SilentUserNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
SilentUserNotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.SilentUserNotificationRecord;
return SilentUserNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentUserNotificationRecordList = SilentUserNotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SilentTopicNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentTopicNotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentTopicNotificationRecordList = (function (_super) {
__extends(SilentTopicNotificationRecordList, _super);
function SilentTopicNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
SilentTopicNotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.SilentTopicNotificationRecord;
return SilentTopicNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentTopicNotificationRecordList = SilentTopicNotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotification2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$AndroidNotification2Record"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotification2RecordList = (function (_super) {
__extends(AndroidNotification2RecordList, _super);
function AndroidNotification2RecordList(defaults) {
_super.apply(this, arguments);
}
AndroidNotification2RecordList.itemType = FirebaseCloudMessagingPluginModel.AndroidNotification2Record;
return AndroidNotification2RecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.AndroidNotification2RecordList = AndroidNotification2RecordList;

});
define("FirebaseCloudMessagingPlugin.model$ActionTextFieldRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTextFieldRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTextFieldRecordList = (function (_super) {
__extends(ActionTextFieldRecordList, _super);
function ActionTextFieldRecordList(defaults) {
_super.apply(this, arguments);
}
ActionTextFieldRecordList.itemType = FirebaseCloudMessagingPluginModel.ActionTextFieldRecord;
return ActionTextFieldRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionTextFieldRecordList = ActionTextFieldRecordList;

});
define("FirebaseCloudMessagingPlugin.model$RouteDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$RouteDataRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var RouteDataRecord = (function (_super) {
__extends(RouteDataRecord, _super);
function RouteDataRecord(defaults) {
_super.apply(this, arguments);
}
RouteDataRecord.attributesToDeclare = function () {
return [
this.attr("RouteData", "routeDataAttr", "RouteData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.RouteDataRec());
}, true, FirebaseCloudMessagingPluginModel.RouteDataRec)
].concat(_super.attributesToDeclare.call(this));
};
RouteDataRecord.fromStructure = function (str) {
return new RouteDataRecord(new RouteDataRecord.RecordClass({
routeDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RouteDataRecord._isAnonymousRecord = true;
RouteDataRecord.UniqueId = "f174d612-fd46-1a54-d50f-0ec1a6a01412";
RouteDataRecord.init();
return RouteDataRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.RouteDataRecord = RouteDataRecord;

});
define("FirebaseCloudMessagingPlugin.model$RouteDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$RouteDataRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var RouteDataRecordList = (function (_super) {
__extends(RouteDataRecordList, _super);
function RouteDataRecordList(defaults) {
_super.apply(this, arguments);
}
RouteDataRecordList.itemType = FirebaseCloudMessagingPluginModel.RouteDataRecord;
return RouteDataRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.RouteDataRecordList = RouteDataRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ActionTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTypeRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTypeRecord = (function (_super) {
__extends(ActionTypeRecord, _super);
function ActionTypeRecord(defaults) {
_super.apply(this, arguments);
}
ActionTypeRecord.attributesToDeclare = function () {
return [
this.attr("ActionType", "actionTypeAttr", "ActionType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseCloudMessagingPluginModel.ActionTypeRec());
}, true, FirebaseCloudMessagingPluginModel.ActionTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionTypeRecord.fromStructure = function (str) {
return new ActionTypeRecord(new ActionTypeRecord.RecordClass({
actionTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionTypeRecord._isAnonymousRecord = true;
ActionTypeRecord.UniqueId = "d43a7f8d-7e99-bc50-3ad8-6d2c2232f24e";
ActionTypeRecord.init();
return ActionTypeRecord;
})(OS.DataTypes.GenericRecord);
FirebaseCloudMessagingPluginModel.ActionTypeRecord = ActionTypeRecord;

});
define("FirebaseCloudMessagingPlugin.model$ActionTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ActionTypeRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ActionTypeRecordList = (function (_super) {
__extends(ActionTypeRecordList, _super);
function ActionTypeRecordList(defaults) {
_super.apply(this, arguments);
}
ActionTypeRecordList.itemType = FirebaseCloudMessagingPluginModel.ActionTypeRecord;
return ActionTypeRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ActionTypeRecordList = ActionTypeRecordList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationSimpleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationSimpleRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationSimpleRecordList = (function (_super) {
__extends(NotificationSimpleRecordList, _super);
function NotificationSimpleRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationSimpleRecordList.itemType = FirebaseCloudMessagingPluginModel.NotificationSimpleRecord;
return NotificationSimpleRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationSimpleRecordList = NotificationSimpleRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ExtensionApnsConfigurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtensionApnsConfigurationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtensionApnsConfigurationRecordList = (function (_super) {
__extends(ExtensionApnsConfigurationRecordList, _super);
function ExtensionApnsConfigurationRecordList(defaults) {
_super.apply(this, arguments);
}
ExtensionApnsConfigurationRecordList.itemType = FirebaseCloudMessagingPluginModel.ExtensionApnsConfigurationRecord;
return ExtensionApnsConfigurationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtensionApnsConfigurationRecordList = ExtensionApnsConfigurationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$NotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$NotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var NotificationRecordList = (function (_super) {
__extends(NotificationRecordList, _super);
function NotificationRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.NotificationRecord;
return NotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.NotificationRecordList = NotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ExtensionNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$ExtensionNotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtensionNotificationRecordList = (function (_super) {
__extends(ExtensionNotificationRecordList, _super);
function ExtensionNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
ExtensionNotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.ExtensionNotificationRecord;
return ExtensionNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtensionNotificationRecordList = ExtensionNotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$AndroidNotificationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotificationRecordList = (function (_super) {
__extends(AndroidNotificationRecordList, _super);
function AndroidNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
AndroidNotificationRecordList.itemType = FirebaseCloudMessagingPluginModel.AndroidNotificationRecord;
return AndroidNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.AndroidNotificationRecordList = AndroidNotificationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SilentTopicNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentTopicNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentTopicNotificationList = (function (_super) {
__extends(SilentTopicNotificationList, _super);
function SilentTopicNotificationList(defaults) {
_super.apply(this, arguments);
}
SilentTopicNotificationList.itemType = FirebaseCloudMessagingPluginModel.SilentTopicNotificationRec;
return SilentTopicNotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentTopicNotificationList = SilentTopicNotificationList;

});
define("FirebaseCloudMessagingPlugin.model$FirebaseResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$FirebaseResponseRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var FirebaseResponseRecordList = (function (_super) {
__extends(FirebaseResponseRecordList, _super);
function FirebaseResponseRecordList(defaults) {
_super.apply(this, arguments);
}
FirebaseResponseRecordList.itemType = FirebaseCloudMessagingPluginModel.FirebaseResponseRecord;
return FirebaseResponseRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.FirebaseResponseRecordList = FirebaseResponseRecordList;

});
define("FirebaseCloudMessagingPlugin.model$AndroidNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$AndroidNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var AndroidNotificationList = (function (_super) {
__extends(AndroidNotificationList, _super);
function AndroidNotificationList(defaults) {
_super.apply(this, arguments);
}
AndroidNotificationList.itemType = FirebaseCloudMessagingPluginModel.AndroidNotificationRec;
return AndroidNotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.AndroidNotificationList = AndroidNotificationList;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationTempRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationTempRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationTempRecordList = (function (_super) {
__extends(SilentNotificationTempRecordList, _super);
function SilentNotificationTempRecordList(defaults) {
_super.apply(this, arguments);
}
SilentNotificationTempRecordList.itemType = FirebaseCloudMessagingPluginModel.SilentNotificationTempRecord;
return SilentNotificationTempRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentNotificationTempRecordList = SilentNotificationTempRecordList;

});
define("FirebaseCloudMessagingPlugin.model$ExtensionApnsConfigurationList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CloudMessagingExtension.model", "FirebaseCloudMessagingPlugin.model", "Extension.CloudMessagingExtension.model$ApnsConfigurationRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CloudMessagingExtension"], function (exports, OutSystems, Extension_CloudMessagingExtensionModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var ExtensionApnsConfigurationList = (function (_super) {
__extends(ExtensionApnsConfigurationList, _super);
function ExtensionApnsConfigurationList(defaults) {
_super.apply(this, arguments);
}
ExtensionApnsConfigurationList.itemType = Extension_CloudMessagingExtensionModel.ApnsConfigurationRec;
return ExtensionApnsConfigurationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.ExtensionApnsConfigurationList = ExtensionApnsConfigurationList;

});
define("FirebaseCloudMessagingPlugin.model$TopicsInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TopicsInformationRecord"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TopicsInformationRecordList = (function (_super) {
__extends(TopicsInformationRecordList, _super);
function TopicsInformationRecordList(defaults) {
_super.apply(this, arguments);
}
TopicsInformationRecordList.itemType = FirebaseCloudMessagingPluginModel.TopicsInformationRecord;
return TopicsInformationRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TopicsInformationRecordList = TopicsInformationRecordList;

});
define("FirebaseCloudMessagingPlugin.model$SilentNotificationList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SilentNotificationRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SilentNotificationList = (function (_super) {
__extends(SilentNotificationList, _super);
function SilentNotificationList(defaults) {
_super.apply(this, arguments);
}
SilentNotificationList.itemType = FirebaseCloudMessagingPluginModel.SilentNotificationRec;
return SilentNotificationList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SilentNotificationList = SilentNotificationList;

});
define("FirebaseCloudMessagingPlugin.model$TimeUnitList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$TimeUnitRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var TimeUnitList = (function (_super) {
__extends(TimeUnitList, _super);
function TimeUnitList(defaults) {
_super.apply(this, arguments);
}
TimeUnitList.itemType = FirebaseCloudMessagingPluginModel.TimeUnitRec;
return TimeUnitList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.TimeUnitList = TimeUnitList;

});
define("FirebaseCloudMessagingPlugin.model$SendToUsersList", ["exports", "OutSystems/ClientRuntime/Main", "FirebaseCloudMessagingPlugin.model", "FirebaseCloudMessagingPlugin.model$SendToUsersRec"], function (exports, OutSystems, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var SendToUsersList = (function (_super) {
__extends(SendToUsersList, _super);
function SendToUsersList(defaults) {
_super.apply(this, arguments);
}
SendToUsersList.itemType = FirebaseCloudMessagingPluginModel.SendToUsersRec;
return SendToUsersList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.SendToUsersList = SendToUsersList;

});
define("FirebaseCloudMessagingPlugin.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "FirebaseCloudMessagingPlugin.referencesHealth", "FirebaseCloudMessagingPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, FirebaseCloudMessagingPluginModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
FirebaseCloudMessagingPluginModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("FirebaseCloudMessagingPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var FirebaseCloudMessagingPluginModel = exports;
Object.defineProperty(FirebaseCloudMessagingPluginModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["298439d7-6632-4229-9629-8c473b698ca3"];
}
});

FirebaseCloudMessagingPluginModel.staticEntities = {};
FirebaseCloudMessagingPluginModel.staticEntities.actionType = {};
var getActionTypeRecord = function (record) {
return FirebaseCloudMessagingPluginModel.module.staticEntities["3d3510ec-7827-4135-9f10-a96238204ee5"][record];
};
Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.actionType, "destructive", {
get: function () {
return getActionTypeRecord("048d9a79-ad88-4d6b-b934-6878f9bd9af1");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.actionType, "standard", {
get: function () {
return getActionTypeRecord("9ae439b1-e49e-4269-9c26-ca2cc67587a8");
}
});

FirebaseCloudMessagingPluginModel.staticEntities.platform = {};
var getPlatformRecord = function (record) {
return FirebaseCloudMessagingPluginModel.module.staticEntities["90448876-1be3-4417-aef1-aa071abc9c31"][record];
};
Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.platform, "iOS", {
get: function () {
return getPlatformRecord("7df6a99b-8237-4b04-8939-b06e1a87f884");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.platform, "android", {
get: function () {
return getPlatformRecord("86282312-c264-4c78-8c4d-c5a0e9a4096c");
}
});

FirebaseCloudMessagingPluginModel.staticEntities.timeUnit = {};
var getTimeUnitRecord = function (record) {
return FirebaseCloudMessagingPluginModel.module.staticEntities["9e881adf-eca1-419c-b784-e2e289e67d9e"][record];
};
Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.timeUnit, "seconds", {
get: function () {
return getTimeUnitRecord("8bde29bd-cdf8-4862-b43a-2dfc0c9436cb");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.timeUnit, "none", {
get: function () {
return getTimeUnitRecord("ab07e145-fa1d-46cf-8324-768082cab6d3");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.timeUnit, "hours", {
get: function () {
return getTimeUnitRecord("d1391a49-6969-4263-9725-2ec738633c62");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.timeUnit, "days", {
get: function () {
return getTimeUnitRecord("dde751c3-ed0b-47b2-9828-da4461b43377");
}
});

FirebaseCloudMessagingPluginModel.staticEntities.actionEvent = {};
var getActionEventRecord = function (record) {
return FirebaseCloudMessagingPluginModel.module.staticEntities["bba89b84-1b0e-4590-97fb-3ff3649af3ad"][record];
};
Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.actionEvent, "appRoute", {
get: function () {
return getActionEventRecord("10923750-c714-4cfc-ae4e-87bca00a3055");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.actionEvent, "webRoute", {
get: function () {
return getActionEventRecord("bf5ab8eb-9933-443e-b2b9-c4f282d83744");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.actionEvent, "internalRoute", {
get: function () {
return getActionEventRecord("d9c9126a-a39a-4968-8cd7-bc3d44ada2c9");
}
});

FirebaseCloudMessagingPluginModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(FirebaseCloudMessagingPluginModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

});
