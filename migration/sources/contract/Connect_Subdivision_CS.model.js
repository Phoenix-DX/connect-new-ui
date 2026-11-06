define("Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model"], function (exports, OutSystems, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var UI_Subdivision_Card_ContentRec = (function (_super) {
__extends(UI_Subdivision_Card_ContentRec, _super);
function UI_Subdivision_Card_ContentRec(defaults) {
_super.apply(this, arguments);
}
UI_Subdivision_Card_ContentRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BretherenCount", "bretherenCountAttr", "BretherenCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BrothersCount", "brothersCountAttr", "BrothersCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SistersCount", "sistersCountAttr", "SistersCount", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_Subdivision_Card_ContentRec.init();
return UI_Subdivision_Card_ContentRec;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.UI_Subdivision_Card_ContentRec = UI_Subdivision_Card_ContentRec;

});
define("Connect_Subdivision_CS.model$UI_Subdivision_CardRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec"], function (exports, OutSystems, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var UI_Subdivision_CardRec = (function (_super) {
__extends(UI_Subdivision_CardRec, _super);
function UI_Subdivision_CardRec(defaults) {
_super.apply(this, arguments);
}
UI_Subdivision_CardRec.attributesToDeclare = function () {
return [
this.attr("SubdivisionId", "subdivisionIdAttr", "SubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Subdivision_Card_Content", "subdivision_Card_ContentAttr", "Subdivision_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Subdivision_CSModel.UI_Subdivision_Card_ContentRec());
}, true, Connect_Subdivision_CSModel.UI_Subdivision_Card_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Subdivision_CardRec.init();
return UI_Subdivision_CardRec;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.UI_Subdivision_CardRec = UI_Subdivision_CardRec;

});
define("Connect_Subdivision_CS.model$UI_Screen_SubdivisionDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model", "UBTConnectLibrary.model", "Connect_Subdivision_CS.model$UI_Subdivision_CardRec", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "Connect_Subdivision_CS.referencesHealth", "Connect_Subdivision_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, Connect_Subdivision_CSModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UI_Screen_SubdivisionDetailsRec = (function (_super) {
__extends(UI_Screen_SubdivisionDetailsRec, _super);
function UI_Screen_SubdivisionDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_Screen_SubdivisionDetailsRec.attributesToDeclare = function () {
return [
this.attr("Subdivision_Card", "subdivision_CardAttr", "Subdivision_Card", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Subdivision_CSModel.UI_Subdivision_CardRec());
}, true, Connect_Subdivision_CSModel.UI_Subdivision_CardRec), 
this.attr("Subdivision_Actions", "subdivision_ActionsAttr", "Subdivision_Actions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuOptionsRec());
}, true, UBTConnectLibraryModel.ActionsMenuOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Screen_SubdivisionDetailsRec.init();
return UI_Screen_SubdivisionDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.UI_Screen_SubdivisionDetailsRec = UI_Screen_SubdivisionDetailsRec;

});
define("Connect_Subdivision_CS.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model"], function (exports, OutSystems, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord = (function (_super) {
__extends(TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord, _super);
function TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconColorId", "iconColorIdAttr", "IconColorId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord._isAnonymousRecord = true;
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord.UniqueId = "bce3aa6e-5ee7-c768-c6c5-f058021a7f2f";
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord.init();
return TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord = TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;

});
define("Connect_Subdivision_CS.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model", "Connect_Subdivision_CS.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord"], function (exports, OutSystems, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList = (function (_super) {
__extends(TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList, _super);
function TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList.itemType = Connect_Subdivision_CSModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;
return TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
Connect_Subdivision_CSModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList = TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList;

});
define("Connect_Subdivision_CS.model$UI_InterchangeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect_Subdivision_CS.model", "UBTConnectLibrary.model$StatisticsOptionsRec", "Connect_Subdivision_CS.referencesHealth", "Connect_Subdivision_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var UI_InterchangeRec = (function (_super) {
__extends(UI_InterchangeRec, _super);
function UI_InterchangeRec(defaults) {
_super.apply(this, arguments);
}
UI_InterchangeRec.attributesToDeclare = function () {
return [
this.attr("InterchangeLocalityId", "interchangeLocalityIdAttr", "InterchangeLocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("InterchangeStatistics", "interchangeStatisticsAttr", "InterchangeStatistics", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.StatisticsOptionsRec());
}, true, UBTConnectLibraryModel.StatisticsOptionsRec), 
this.attr("InterchangeDistance", "interchangeDistanceAttr", "InterchangeDistance", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("InterchangeLocalityName", "interchangeLocalityNameAttr", "InterchangeLocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterchangeCountryName", "interchangeCountryNameAttr", "InterchangeCountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_InterchangeRec.init();
return UI_InterchangeRec;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.UI_InterchangeRec = UI_InterchangeRec;

});
define("Connect_Subdivision_CS.model$UI_SubdivisionLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model"], function (exports, OutSystems, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var UI_SubdivisionLocationRec = (function (_super) {
__extends(UI_SubdivisionLocationRec, _super);
function UI_SubdivisionLocationRec(defaults) {
_super.apply(this, arguments);
}
UI_SubdivisionLocationRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_SubdivisionLocationRec.init();
return UI_SubdivisionLocationRec;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.UI_SubdivisionLocationRec = UI_SubdivisionLocationRec;

});
define("Connect_Subdivision_CS.model$UI_LocalityStatisticsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Subdivision_CS.model"], function (exports, OutSystems, Connect_Subdivision_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityStatisticsRec = (function (_super) {
__extends(UI_LocalityStatisticsRec, _super);
function UI_LocalityStatisticsRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityStatisticsRec.attributesToDeclare = function () {
return [
this.attr("BrethrenCount", "brethrenCountAttr", "BrethrenCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdsCount", "householdsCountAttr", "HouseholdsCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SupperMeetingsCount", "supperMeetingsCountAttr", "SupperMeetingsCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BrothersCount", "brothersCountAttr", "BrothersCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SistersCount", "sistersCountAttr", "SistersCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityStatisticsRec.init();
return UI_LocalityStatisticsRec;
})(OS.DataTypes.GenericRecord);
Connect_Subdivision_CSModel.UI_LocalityStatisticsRec = UI_LocalityStatisticsRec;

});
define("Connect_Subdivision_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Subdivision_CSModel = exports;
});
