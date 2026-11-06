define("UBTConnect_Utils.model$Connect_SearchCategoriesRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_SearchCategoriesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_SearchCategoriesRecord = (function (_super) {
__extends(Connect_SearchCategoriesRecord, _super);
function Connect_SearchCategoriesRecord(defaults) {
_super.apply(this, arguments);
}
Connect_SearchCategoriesRecord.attributesToDeclare = function () {
return [
this.attr("Connect_SearchCategories", "connect_SearchCategoriesAttr", "Connect_SearchCategories", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_SearchCategoriesRec());
}, true, Connect_CommonEntities_DBModel.Connect_SearchCategoriesRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_SearchCategoriesRecord.fromStructure = function (str) {
return new Connect_SearchCategoriesRecord(new Connect_SearchCategoriesRecord.RecordClass({
connect_SearchCategoriesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_SearchCategoriesRecord._isAnonymousRecord = true;
Connect_SearchCategoriesRecord.UniqueId = "002298c9-2a61-2d93-05ee-d41454900bea";
Connect_SearchCategoriesRecord.init();
return Connect_SearchCategoriesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_SearchCategoriesRecord = Connect_SearchCategoriesRecord;

});
define("UBTConnect_Utils.model$ContactPopupDataRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupDataRec = (function (_super) {
__extends(ContactPopupDataRec, _super);
function ContactPopupDataRec(defaults) {
_super.apply(this, arguments);
}
ContactPopupDataRec.attributesToDeclare = function () {
return [
this.attr("ImageURL", "imageURLAttr", "ImageURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EntityTypeId", "entityTypeIdAttr", "EntityTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EntityId", "entityIdAttr", "EntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsAvatarImage", "isAvatarImageAttr", "IsAvatarImage", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ActionName", "actionNameAttr", "ActionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneName", "timezoneNameAttr", "TimezoneName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneOffset", "timezoneOffsetAttr", "TimezoneOffset", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ShowPopup", "showPopupAttr", "ShowPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayContactNumber", "displayContactNumberAttr", "DisplayContactNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsFetchingTimezone", "isFetchingTimezoneAttr", "IsFetchingTimezone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsLoading", "isLoadingAttr", "IsLoading", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowTimezone", "showTimezoneAttr", "ShowTimezone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ShowImage", "showImageAttr", "ShowImage", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TitleTerminator", "titleTerminatorAttr", "TitleTerminator", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopupDataRec.init();
return ContactPopupDataRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactPopupDataRec = ContactPopupDataRec;

});
define("UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_ContactByMessage_WrapperDataRec = (function (_super) {
__extends(UI_ContactByMessage_WrapperDataRec, _super);
function UI_ContactByMessage_WrapperDataRec(defaults) {
_super.apply(this, arguments);
}
UI_ContactByMessage_WrapperDataRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Phone", "phoneAttr", "Phone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("IsComboEmailAndPhone", "isComboEmailAndPhoneAttr", "IsComboEmailAndPhone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ContactPopupData", "contactPopupDataAttr", "ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
}, true, UBTConnect_UtilsModel.ContactPopupDataRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_ContactByMessage_WrapperDataRec.init();
return UI_ContactByMessage_WrapperDataRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec = UI_ContactByMessage_WrapperDataRec;

});
define("UBTConnect_Utils.model$BottomBar_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BottomBar_ItemRec = (function (_super) {
__extends(BottomBar_ItemRec, _super);
function BottomBar_ItemRec(defaults) {
_super.apply(this, arguments);
}
BottomBar_ItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UBTIcon", "uBTIconAttr", "UBTIcon", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UBTIconActive", "uBTIconActiveAttr", "UBTIconActive", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BottomBar_ItemRec.init();
return BottomBar_ItemRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.BottomBar_ItemRec = BottomBar_ItemRec;

});
define("UBTConnect_Utils.model$BottomBar_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BottomBar_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BottomBar_ItemRecord = (function (_super) {
__extends(BottomBar_ItemRecord, _super);
function BottomBar_ItemRecord(defaults) {
_super.apply(this, arguments);
}
BottomBar_ItemRecord.attributesToDeclare = function () {
return [
this.attr("BottomBar_Item", "bottomBar_ItemAttr", "BottomBar_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.BottomBar_ItemRec());
}, true, UBTConnect_UtilsModel.BottomBar_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
BottomBar_ItemRecord.fromStructure = function (str) {
return new BottomBar_ItemRecord(new BottomBar_ItemRecord.RecordClass({
bottomBar_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BottomBar_ItemRecord._isAnonymousRecord = true;
BottomBar_ItemRecord.UniqueId = "01c3a66b-ea57-e4c4-8d71-180af1458c37";
BottomBar_ItemRecord.init();
return BottomBar_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.BottomBar_ItemRecord = BottomBar_ItemRecord;

});
define("UBTConnect_Utils.model$UBT_ShadowRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ShadowRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ShadowRecord = (function (_super) {
__extends(UBT_ShadowRecord, _super);
function UBT_ShadowRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ShadowRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Shadow", "uBT_ShadowAttr", "UBT_Shadow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ShadowRec());
}, true, UBTConnectLibraryModel.UBT_ShadowRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ShadowRecord.fromStructure = function (str) {
return new UBT_ShadowRecord(new UBT_ShadowRecord.RecordClass({
uBT_ShadowAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ShadowRecord._isAnonymousRecord = true;
UBT_ShadowRecord.UniqueId = "19e47b10-93b2-c645-f4b6-6db6ce9a3d76";
UBT_ShadowRecord.init();
return UBT_ShadowRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ShadowRecord = UBT_ShadowRecord;

});
define("UBTConnect_Utils.model$UBT_ShadowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ShadowRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ShadowRecordList = (function (_super) {
__extends(UBT_ShadowRecordList, _super);
function UBT_ShadowRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ShadowRecordList.itemType = UBTConnect_UtilsModel.UBT_ShadowRecord;
return UBT_ShadowRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ShadowRecordList = UBT_ShadowRecordList;

});
define("UBTConnect_Utils.model$Directory_LocalitySubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_LocalitySubdivisionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_LocalitySubdivisionList = (function (_super) {
__extends(Directory_LocalitySubdivisionList, _super);
function Directory_LocalitySubdivisionList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalitySubdivisionList.itemType = APIDomain_Directory_ISModel.Directory_LocalitySubdivisionRec;
return Directory_LocalitySubdivisionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_LocalitySubdivisionList = Directory_LocalitySubdivisionList;

});
define("UBTConnect_Utils.model$CacheControl_AllSubdivionsRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_LocalitySubdivisionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS", "UBTConnect_Utils.model$Directory_LocalitySubdivisionList"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllSubdivionsRec = (function (_super) {
__extends(CacheControl_AllSubdivionsRec, _super);
function CacheControl_AllSubdivionsRec(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllSubdivionsRec.attributesToDeclare = function () {
return [
this.attr("SubdivionsList", "subdivionsListAttr", "SubdivionsList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Directory_LocalitySubdivisionList());
}, true, UBTConnect_UtilsModel.Directory_LocalitySubdivisionList)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_AllSubdivionsRec.fromStructure = function (str) {
return new CacheControl_AllSubdivionsRec(new CacheControl_AllSubdivionsRec.RecordClass({
subdivionsListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_AllSubdivionsRec.init();
return CacheControl_AllSubdivionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_AllSubdivionsRec = CacheControl_AllSubdivionsRec;

});
define("UBTConnect_Utils.model$APIM_CommonHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBTConnect_Utils.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderList = (function (_super) {
__extends(APIM_CommonHeaderList, _super);
function APIM_CommonHeaderList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderList.itemType = APIUtilitiesLibModel.APIM_CommonHeaderRec;
return APIM_CommonHeaderList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.APIM_CommonHeaderList = APIM_CommonHeaderList;

});
define("UBTConnect_Utils.model$UBT_DisplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_DisplayRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_DisplayRecord = (function (_super) {
__extends(UBT_DisplayRecord, _super);
function UBT_DisplayRecord(defaults) {
_super.apply(this, arguments);
}
UBT_DisplayRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Display", "uBT_DisplayAttr", "UBT_Display", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_DisplayRec());
}, true, UBTConnectLibraryModel.UBT_DisplayRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_DisplayRecord.fromStructure = function (str) {
return new UBT_DisplayRecord(new UBT_DisplayRecord.RecordClass({
uBT_DisplayAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_DisplayRecord._isAnonymousRecord = true;
UBT_DisplayRecord.UniqueId = "0363e913-b7a5-5372-0cdf-201d4842765b";
UBT_DisplayRecord.init();
return UBT_DisplayRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_DisplayRecord = UBT_DisplayRecord;

});
define("UBTConnect_Utils.model$UBT_ButtonTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ButtonTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ButtonTypeRecord = (function (_super) {
__extends(UBT_ButtonTypeRecord, _super);
function UBT_ButtonTypeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonTypeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ButtonType", "uBT_ButtonTypeAttr", "UBT_ButtonType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ButtonTypeRec());
}, true, UBTConnectLibraryModel.UBT_ButtonTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ButtonTypeRecord.fromStructure = function (str) {
return new UBT_ButtonTypeRecord(new UBT_ButtonTypeRecord.RecordClass({
uBT_ButtonTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ButtonTypeRecord._isAnonymousRecord = true;
UBT_ButtonTypeRecord.UniqueId = "03aaeef4-4934-5417-5875-bfe8c7c712ce";
UBT_ButtonTypeRecord.init();
return UBT_ButtonTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ButtonTypeRecord = UBT_ButtonTypeRecord;

});
define("UBTConnect_Utils.model$UBT_JustifyContentRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_JustifyContentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_JustifyContentRecord = (function (_super) {
__extends(UBT_JustifyContentRecord, _super);
function UBT_JustifyContentRecord(defaults) {
_super.apply(this, arguments);
}
UBT_JustifyContentRecord.attributesToDeclare = function () {
return [
this.attr("UBT_JustifyContent", "uBT_JustifyContentAttr", "UBT_JustifyContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_JustifyContentRec());
}, true, UBTConnectLibraryModel.UBT_JustifyContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_JustifyContentRecord.fromStructure = function (str) {
return new UBT_JustifyContentRecord(new UBT_JustifyContentRecord.RecordClass({
uBT_JustifyContentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_JustifyContentRecord._isAnonymousRecord = true;
UBT_JustifyContentRecord.UniqueId = "1e9fb37c-3bd9-613a-519e-3f88a78f2496";
UBT_JustifyContentRecord.init();
return UBT_JustifyContentRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_JustifyContentRecord = UBT_JustifyContentRecord;

});
define("UBTConnect_Utils.model$UBT_JustifyContentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_JustifyContentRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_JustifyContentRecordList = (function (_super) {
__extends(UBT_JustifyContentRecordList, _super);
function UBT_JustifyContentRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_JustifyContentRecordList.itemType = UBTConnect_UtilsModel.UBT_JustifyContentRecord;
return UBT_JustifyContentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_JustifyContentRecordList = UBT_JustifyContentRecordList;

});
define("UBTConnect_Utils.model$Connect_Subscription_PlanList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_Subscription_PlanRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanList = (function (_super) {
__extends(Connect_Subscription_PlanList, _super);
function Connect_Subscription_PlanList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanList.itemType = Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec;
return Connect_Subscription_PlanList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_Subscription_PlanList = Connect_Subscription_PlanList;

});
define("UBTConnect_Utils.model$UBT_FlexDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FlexDirectionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionRecord = (function (_super) {
__extends(UBT_FlexDirectionRecord, _super);
function UBT_FlexDirectionRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FlexDirection", "uBT_FlexDirectionAttr", "UBT_FlexDirection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FlexDirectionRec());
}, true, UBTConnectLibraryModel.UBT_FlexDirectionRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FlexDirectionRecord.fromStructure = function (str) {
return new UBT_FlexDirectionRecord(new UBT_FlexDirectionRecord.RecordClass({
uBT_FlexDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FlexDirectionRecord._isAnonymousRecord = true;
UBT_FlexDirectionRecord.UniqueId = "bd7e9f75-8e82-941f-5dc3-a5c9e5d3395e";
UBT_FlexDirectionRecord.init();
return UBT_FlexDirectionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_FlexDirectionRecord = UBT_FlexDirectionRecord;

});
define("UBTConnect_Utils.model$UBT_FlexDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_FlexDirectionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionRecordList = (function (_super) {
__extends(UBT_FlexDirectionRecordList, _super);
function UBT_FlexDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionRecordList.itemType = UBTConnect_UtilsModel.UBT_FlexDirectionRecord;
return UBT_FlexDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FlexDirectionRecordList = UBT_FlexDirectionRecordList;

});
define("UBTConnect_Utils.model$UBT_Size_ImageWidthRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_Size_ImageWidthRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_Size_ImageWidthRecord = (function (_super) {
__extends(UBT_Size_ImageWidthRecord, _super);
function UBT_Size_ImageWidthRecord(defaults) {
_super.apply(this, arguments);
}
UBT_Size_ImageWidthRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Size_ImageWidth", "uBT_Size_ImageWidthAttr", "UBT_Size_ImageWidth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_Size_ImageWidthRec());
}, true, UBTConnectLibraryModel.UBT_Size_ImageWidthRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_Size_ImageWidthRecord.fromStructure = function (str) {
return new UBT_Size_ImageWidthRecord(new UBT_Size_ImageWidthRecord.RecordClass({
uBT_Size_ImageWidthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_Size_ImageWidthRecord._isAnonymousRecord = true;
UBT_Size_ImageWidthRecord.UniqueId = "080591c6-081c-a91c-e0ed-8a8ee1f48965";
UBT_Size_ImageWidthRecord.init();
return UBT_Size_ImageWidthRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_Size_ImageWidthRecord = UBT_Size_ImageWidthRecord;

});
define("UBTConnect_Utils.model$APIM_CommonHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIUtilitiesLib.model", "UBTConnect_Utils.model", "APIUtilitiesLib.model$APIM_CommonHeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIUtilitiesLib"], function (exports, OutSystems, APIUtilitiesLibModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.APIM_CommonHeaderRecord = APIM_CommonHeaderRecord;

});
define("UBTConnect_Utils.model$APIM_CommonHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$APIM_CommonHeaderRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var APIM_CommonHeaderRecordList = (function (_super) {
__extends(APIM_CommonHeaderRecordList, _super);
function APIM_CommonHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
APIM_CommonHeaderRecordList.itemType = UBTConnect_UtilsModel.APIM_CommonHeaderRecord;
return APIM_CommonHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.APIM_CommonHeaderRecordList = APIM_CommonHeaderRecordList;

});
define("UBTConnect_Utils.model$UBT_FontSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FontSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeList = (function (_super) {
__extends(UBT_FontSizeList, _super);
function UBT_FontSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeList.itemType = UBTConnectLibraryModel.UBT_FontSizeRec;
return UBT_FontSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FontSizeList = UBT_FontSizeList;

});
define("UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalApp_PopUpInfoRec = (function (_super) {
__extends(ExternalApp_PopUpInfoRec, _super);
function ExternalApp_PopUpInfoRec(defaults) {
_super.apply(this, arguments);
}
ExternalApp_PopUpInfoRec.attributesToDeclare = function () {
return [
this.attr("AppName", "appNameAttr", "AppName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PackageName", "packageNameAttr", "PackageName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExternalApp_PopUpInfoRec.init();
return ExternalApp_PopUpInfoRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec = ExternalApp_PopUpInfoRec;

});
define("UBTConnect_Utils.model$MyBookmarks_ObjectTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "UBTConnect_Utils.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeList = (function (_super) {
__extends(MyBookmarks_ObjectTypeList, _super);
function MyBookmarks_ObjectTypeList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeList.itemType = Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec;
return MyBookmarks_ObjectTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MyBookmarks_ObjectTypeList = MyBookmarks_ObjectTypeList;

});
define("UBTConnect_Utils.model$ActionBarOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionBarOptionsList = (function (_super) {
__extends(ActionBarOptionsList, _super);
function ActionBarOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionBarOptionsList.itemType = UBTConnectLibraryModel.ActionBarOptionsRec;
return ActionBarOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ActionBarOptionsList = ActionBarOptionsList;

});
define("UBTConnect_Utils.model$", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TextList = TextList;

});
define("UBTConnect_Utils.model$WarningRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBTConnect_Utils.model", "CommonPlugin.model$WarningRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var WarningRecord = (function (_super) {
__extends(WarningRecord, _super);
function WarningRecord(defaults) {
_super.apply(this, arguments);
}
WarningRecord.attributesToDeclare = function () {
return [
this.attr("Warning", "warningAttr", "Warning", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.WarningRec());
}, true, CommonPluginModel.WarningRec)
].concat(_super.attributesToDeclare.call(this));
};
WarningRecord.fromStructure = function (str) {
return new WarningRecord(new WarningRecord.RecordClass({
warningAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WarningRecord._isAnonymousRecord = true;
WarningRecord.UniqueId = "1838e26c-3ba5-5f07-6914-2750034ccc7d";
WarningRecord.init();
return WarningRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.WarningRecord = WarningRecord;

});
define("UBTConnect_Utils.model$WarningRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$WarningRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var WarningRecordList = (function (_super) {
__extends(WarningRecordList, _super);
function WarningRecordList(defaults) {
_super.apply(this, arguments);
}
WarningRecordList.itemType = UBTConnect_UtilsModel.WarningRecord;
return WarningRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.WarningRecordList = WarningRecordList;

});
define("UBTConnect_Utils.model$IOSOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$IOSOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var IOSOptionsRecord = (function (_super) {
__extends(IOSOptionsRecord, _super);
function IOSOptionsRecord(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRecord.attributesToDeclare = function () {
return [
this.attr("IOSOptions", "iOSOptionsAttr", "IOSOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.IOSOptionsRec());
}, true, InAppBrowserPluginModel.IOSOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
IOSOptionsRecord.fromStructure = function (str) {
return new IOSOptionsRecord(new IOSOptionsRecord.RecordClass({
iOSOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IOSOptionsRecord._isAnonymousRecord = true;
IOSOptionsRecord.UniqueId = "0c270b9a-e7cb-7adc-70b9-1068cb7a9326";
IOSOptionsRecord.init();
return IOSOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.IOSOptionsRecord = IOSOptionsRecord;

});
define("UBTConnect_Utils.model$SearchCategory_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchCategory_ItemRec = (function (_super) {
__extends(SearchCategory_ItemRec, _super);
function SearchCategory_ItemRec(defaults) {
_super.apply(this, arguments);
}
SearchCategory_ItemRec.attributesToDeclare = function () {
return [
this.attr("SearchCategoryId", "searchCategoryIdAttr", "SearchCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UBTIcon", "uBTIconAttr", "UBTIcon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SearchCategory_ItemRec.init();
return SearchCategory_ItemRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SearchCategory_ItemRec = SearchCategory_ItemRec;

});
define("UBTConnect_Utils.model$SearchCategory_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SearchCategory_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchCategory_ItemRecord = (function (_super) {
__extends(SearchCategory_ItemRecord, _super);
function SearchCategory_ItemRecord(defaults) {
_super.apply(this, arguments);
}
SearchCategory_ItemRecord.attributesToDeclare = function () {
return [
this.attr("SearchCategory_Item", "searchCategory_ItemAttr", "SearchCategory_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SearchCategory_ItemRec());
}, true, UBTConnect_UtilsModel.SearchCategory_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SearchCategory_ItemRecord.fromStructure = function (str) {
return new SearchCategory_ItemRecord(new SearchCategory_ItemRecord.RecordClass({
searchCategory_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SearchCategory_ItemRecord._isAnonymousRecord = true;
SearchCategory_ItemRecord.UniqueId = "0c37727f-817a-fcf5-c494-32f0896da9b5";
SearchCategory_ItemRecord.init();
return SearchCategory_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SearchCategory_ItemRecord = SearchCategory_ItemRecord;

});
define("UBTConnect_Utils.model$CacheControl_AllSubdivionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllSubdivionsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllSubdivionsRecord = (function (_super) {
__extends(CacheControl_AllSubdivionsRecord, _super);
function CacheControl_AllSubdivionsRecord(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllSubdivionsRecord.attributesToDeclare = function () {
return [
this.attr("CacheControl_AllSubdivions", "cacheControl_AllSubdivionsAttr", "CacheControl_AllSubdivions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_AllSubdivionsRec());
}, true, UBTConnect_UtilsModel.CacheControl_AllSubdivionsRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_AllSubdivionsRecord.fromStructure = function (str) {
return new CacheControl_AllSubdivionsRecord(new CacheControl_AllSubdivionsRecord.RecordClass({
cacheControl_AllSubdivionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_AllSubdivionsRecord._isAnonymousRecord = true;
CacheControl_AllSubdivionsRecord.UniqueId = "0c9d0db1-f8c0-51c4-ac9d-0a33e0524a2d";
CacheControl_AllSubdivionsRecord.init();
return CacheControl_AllSubdivionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_AllSubdivionsRecord = CacheControl_AllSubdivionsRecord;

});
define("UBTConnect_Utils.model$UBT_BackgroundImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_BackgroundImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_BackgroundImageSizeRecord = (function (_super) {
__extends(UBT_BackgroundImageSizeRecord, _super);
function UBT_BackgroundImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_BackgroundImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_BackgroundImageSize", "uBT_BackgroundImageSizeAttr", "UBT_BackgroundImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_BackgroundImageSizeRec());
}, true, UBTConnectLibraryModel.UBT_BackgroundImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_BackgroundImageSizeRecord.fromStructure = function (str) {
return new UBT_BackgroundImageSizeRecord(new UBT_BackgroundImageSizeRecord.RecordClass({
uBT_BackgroundImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_BackgroundImageSizeRecord._isAnonymousRecord = true;
UBT_BackgroundImageSizeRecord.UniqueId = "a2837b83-d2e7-cb7e-1317-673996a94a65";
UBT_BackgroundImageSizeRecord.init();
return UBT_BackgroundImageSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_BackgroundImageSizeRecord = UBT_BackgroundImageSizeRecord;

});
define("UBTConnect_Utils.model$UBT_BackgroundImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_BackgroundImageSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_BackgroundImageSizeRecordList = (function (_super) {
__extends(UBT_BackgroundImageSizeRecordList, _super);
function UBT_BackgroundImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_BackgroundImageSizeRecordList.itemType = UBTConnect_UtilsModel.UBT_BackgroundImageSizeRecord;
return UBT_BackgroundImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_BackgroundImageSizeRecordList = UBT_BackgroundImageSizeRecordList;

});
define("UBTConnect_Utils.model$IntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerRecord = (function (_super) {
__extends(IntegerIntegerIntegerRecord, _super);
function IntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Left", "leftAttr", "Left", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Middle", "middleAttr", "Middle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Right", "rightAttr", "Right", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegerIntegerIntegerRecord._isAnonymousRecord = true;
IntegerIntegerIntegerRecord.UniqueId = "0fd2659c-7aa6-f339-f62a-c84d68866935";
IntegerIntegerIntegerRecord.init();
return IntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.IntegerIntegerIntegerRecord = IntegerIntegerIntegerRecord;

});
define("UBTConnect_Utils.model$UI_Note_AddedList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model", "UBTConnect_Utils.model", "Connect_Notes_CS.model$UI_Note_AddedRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Notes_CS"], function (exports, OutSystems, Connect_Notes_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Note_AddedList = (function (_super) {
__extends(UI_Note_AddedList, _super);
function UI_Note_AddedList(defaults) {
_super.apply(this, arguments);
}
UI_Note_AddedList.itemType = Connect_Notes_CSModel.UI_Note_AddedRec;
return UI_Note_AddedList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_Note_AddedList = UI_Note_AddedList;

});
define("UBTConnect_Utils.model$Type_MessageChannelList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$Type_MessageChannelRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_MessageChannelList = (function (_super) {
__extends(Type_MessageChannelList, _super);
function Type_MessageChannelList(defaults) {
_super.apply(this, arguments);
}
Type_MessageChannelList.itemType = UBTConnectLibraryModel.Type_MessageChannelRec;
return Type_MessageChannelList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_MessageChannelList = Type_MessageChannelList;

});
define("UBTConnect_Utils.model$UBT_BackgroundImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_BackgroundImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_BackgroundImageSizeList = (function (_super) {
__extends(UBT_BackgroundImageSizeList, _super);
function UBT_BackgroundImageSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_BackgroundImageSizeList.itemType = UBTConnectLibraryModel.UBT_BackgroundImageSizeRec;
return UBT_BackgroundImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_BackgroundImageSizeList = UBT_BackgroundImageSizeList;

});
define("UBTConnect_Utils.model$OptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$OptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var OptionsRecord = (function (_super) {
__extends(OptionsRecord, _super);
function OptionsRecord(defaults) {
_super.apply(this, arguments);
}
OptionsRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsAttr", "Options", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.OptionsRec());
}, true, InAppBrowserPluginModel.OptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionsRecord.fromStructure = function (str) {
return new OptionsRecord(new OptionsRecord.RecordClass({
optionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionsRecord._isAnonymousRecord = true;
OptionsRecord.UniqueId = "3345668e-036d-b903-ca5a-e74e58f9b56c";
OptionsRecord.init();
return OptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.OptionsRecord = OptionsRecord;

});
define("UBTConnect_Utils.model$OptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$OptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var OptionsRecordList = (function (_super) {
__extends(OptionsRecordList, _super);
function OptionsRecordList(defaults) {
_super.apply(this, arguments);
}
OptionsRecordList.itemType = UBTConnect_UtilsModel.OptionsRecord;
return OptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.OptionsRecordList = OptionsRecordList;

});
define("UBTConnect_Utils.model$UBT_IconsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_IconsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_IconsRecord = (function (_super) {
__extends(UBT_IconsRecord, _super);
function UBT_IconsRecord(defaults) {
_super.apply(this, arguments);
}
UBT_IconsRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Icons", "uBT_IconsAttr", "UBT_Icons", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_IconsRec());
}, true, UBTConnectLibraryModel.UBT_IconsRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_IconsRecord.fromStructure = function (str) {
return new UBT_IconsRecord(new UBT_IconsRecord.RecordClass({
uBT_IconsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_IconsRecord._isAnonymousRecord = true;
UBT_IconsRecord.UniqueId = "1231e4fe-de0a-eba3-623f-3a924dc07de7";
UBT_IconsRecord.init();
return UBT_IconsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_IconsRecord = UBT_IconsRecord;

});
define("UBTConnect_Utils.model$UBT_DisplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_DisplayRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_DisplayRecordList = (function (_super) {
__extends(UBT_DisplayRecordList, _super);
function UBT_DisplayRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_DisplayRecordList.itemType = UBTConnect_UtilsModel.UBT_DisplayRecord;
return UBT_DisplayRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_DisplayRecordList = UBT_DisplayRecordList;

});
define("UBTConnect_Utils.model$TextTextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecord = (function (_super) {
__extends(TextTextLongIntegerRecord, _super);
function TextTextLongIntegerRecord(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecord.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegionId", "regionIdAttr", "RegionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextLongIntegerRecord._isAnonymousRecord = true;
TextTextLongIntegerRecord.UniqueId = "e0513088-a367-43e6-cebf-843baa3a1a2d";
TextTextLongIntegerRecord.init();
return TextTextLongIntegerRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.TextTextLongIntegerRecord = TextTextLongIntegerRecord;

});
define("UBTConnect_Utils.model$TextTextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$TextTextLongIntegerRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextTextLongIntegerRecordList = (function (_super) {
__extends(TextTextLongIntegerRecordList, _super);
function TextTextLongIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextLongIntegerRecordList.itemType = UBTConnect_UtilsModel.TextTextLongIntegerRecord;
return TextTextLongIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TextTextLongIntegerRecordList = TextTextLongIntegerRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecord = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecord, _super);
function Directory_UserCurrent_SubscriptionRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Subscription", "directory_UserCurrent_SubscriptionAttr", "Directory_UserCurrent_Subscription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_SubscriptionRecord.fromStructure = function (str) {
return new Directory_UserCurrent_SubscriptionRecord(new Directory_UserCurrent_SubscriptionRecord.RecordClass({
directory_UserCurrent_SubscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_SubscriptionRecord._isAnonymousRecord = true;
Directory_UserCurrent_SubscriptionRecord.UniqueId = "12fffd2e-e48c-df0d-2451-c4a227301f67";
Directory_UserCurrent_SubscriptionRecord.init();
return Directory_UserCurrent_SubscriptionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_UserCurrent_SubscriptionRecord = Directory_UserCurrent_SubscriptionRecord;

});
define("UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopUp_OverrideOptionsRec = (function (_super) {
__extends(ContactPopUp_OverrideOptionsRec, _super);
function ContactPopUp_OverrideOptionsRec(defaults) {
_super.apply(this, arguments);
}
ContactPopUp_OverrideOptionsRec.attributesToDeclare = function () {
return [
this.attr("ImageURL", "imageURLAttr", "ImageURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopUp_OverrideOptionsRec.init();
return ContactPopUp_OverrideOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec = ContactPopUp_OverrideOptionsRec;

});
define("UBTConnect_Utils.model$ContactPopUp_OverrideOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopUp_OverrideOptionsList = (function (_super) {
__extends(ContactPopUp_OverrideOptionsList, _super);
function ContactPopUp_OverrideOptionsList(defaults) {
_super.apply(this, arguments);
}
ContactPopUp_OverrideOptionsList.itemType = UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec;
return ContactPopUp_OverrideOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsList = ContactPopUp_OverrideOptionsList;

});
define("UBTConnect_Utils.model$ContactByPhonePopupDataRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByPhonePopupDataRec = (function (_super) {
__extends(ContactByPhonePopupDataRec, _super);
function ContactByPhonePopupDataRec(defaults) {
_super.apply(this, arguments);
}
ContactByPhonePopupDataRec.attributesToDeclare = function () {
return [
this.attr("ContactPopupData", "contactPopupDataAttr", "ContactPopupData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
}, true, UBTConnect_UtilsModel.ContactPopupDataRec), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactByPhonePopupDataRec.init();
return ContactByPhonePopupDataRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactByPhonePopupDataRec = ContactByPhonePopupDataRec;

});
define("UBTConnect_Utils.model$ContactByPhonePopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactByPhonePopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByPhonePopupDataRecord = (function (_super) {
__extends(ContactByPhonePopupDataRecord, _super);
function ContactByPhonePopupDataRecord(defaults) {
_super.apply(this, arguments);
}
ContactByPhonePopupDataRecord.attributesToDeclare = function () {
return [
this.attr("ContactByPhonePopupData", "contactByPhonePopupDataAttr", "ContactByPhonePopupData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
}, true, UBTConnect_UtilsModel.ContactByPhonePopupDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactByPhonePopupDataRecord.fromStructure = function (str) {
return new ContactByPhonePopupDataRecord(new ContactByPhonePopupDataRecord.RecordClass({
contactByPhonePopupDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactByPhonePopupDataRecord._isAnonymousRecord = true;
ContactByPhonePopupDataRecord.UniqueId = "14372885-2691-d970-33e1-2ed0026f9173";
ContactByPhonePopupDataRecord.init();
return ContactByPhonePopupDataRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactByPhonePopupDataRecord = ContactByPhonePopupDataRecord;

});
define("UBTConnect_Utils.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemList = (function (_super) {
__extends(Custom_Address_ItemList, _super);
function Custom_Address_ItemList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
return Custom_Address_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("UBTConnect_Utils.model$UBT_ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ShapeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ShapeRecord = (function (_super) {
__extends(UBT_ShapeRecord, _super);
function UBT_ShapeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Shape", "uBT_ShapeAttr", "UBT_Shape", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ShapeRec());
}, true, UBTConnectLibraryModel.UBT_ShapeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ShapeRecord.fromStructure = function (str) {
return new UBT_ShapeRecord(new UBT_ShapeRecord.RecordClass({
uBT_ShapeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ShapeRecord._isAnonymousRecord = true;
UBT_ShapeRecord.UniqueId = "15ae935d-91c4-5b4d-4629-8b67f181820e";
UBT_ShapeRecord.init();
return UBT_ShapeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ShapeRecord = UBT_ShapeRecord;

});
define("UBTConnect_Utils.model$ContactByPhonePopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactByPhonePopupDataRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByPhonePopupDataRecordList = (function (_super) {
__extends(ContactByPhonePopupDataRecordList, _super);
function ContactByPhonePopupDataRecordList(defaults) {
_super.apply(this, arguments);
}
ContactByPhonePopupDataRecordList.itemType = UBTConnect_UtilsModel.ContactByPhonePopupDataRecord;
return ContactByPhonePopupDataRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactByPhonePopupDataRecordList = ContactByPhonePopupDataRecordList;

});
define("UBTConnect_Utils.model$LazyImageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageRec = (function (_super) {
__extends(LazyImageRec, _super);
function LazyImageRec(defaults) {
_super.apply(this, arguments);
}
LazyImageRec.attributesToDeclare = function () {
return [
this.attr("ImageURL", "imageURLAttr", "ImageURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EntityId", "entityIdAttr", "EntityId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EntityType", "entityTypeAttr", "EntityType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LazyImageRec.init();
return LazyImageRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.LazyImageRec = LazyImageRec;

});
define("UBTConnect_Utils.model$LazyImageIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LazyImageRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageIntegerRecord = (function (_super) {
__extends(LazyImageIntegerRecord, _super);
function LazyImageIntegerRecord(defaults) {
_super.apply(this, arguments);
}
LazyImageIntegerRecord.attributesToDeclare = function () {
return [
this.attr("LazyImage", "lazyImageAttr", "LazyImage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.LazyImageRec());
}, true, UBTConnect_UtilsModel.LazyImageRec), 
this.attr("ExtraNumber", "extraNumberAttr", "ExtraNumber", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LazyImageIntegerRecord._isAnonymousRecord = true;
LazyImageIntegerRecord.UniqueId = "b91cc408-6c8d-758f-e2bc-f54b860c76ee";
LazyImageIntegerRecord.init();
return LazyImageIntegerRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.LazyImageIntegerRecord = LazyImageIntegerRecord;

});
define("UBTConnect_Utils.model$LazyImageIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LazyImageIntegerRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageIntegerRecordList = (function (_super) {
__extends(LazyImageIntegerRecordList, _super);
function LazyImageIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
LazyImageIntegerRecordList.itemType = UBTConnect_UtilsModel.LazyImageIntegerRecord;
return LazyImageIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LazyImageIntegerRecordList = LazyImageIntegerRecordList;

});
define("UBTConnect_Utils.model$SearchInputRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchInputRecord = (function (_super) {
__extends(SearchInputRecord, _super);
function SearchInputRecord(defaults) {
_super.apply(this, arguments);
}
SearchInputRecord.attributesToDeclare = function () {
return [
this.attr("SearchInput", "searchInputAttr", "SearchInput", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SearchInputRec());
}, true, UBTConnectLibraryModel.SearchInputRec)
].concat(_super.attributesToDeclare.call(this));
};
SearchInputRecord.fromStructure = function (str) {
return new SearchInputRecord(new SearchInputRecord.RecordClass({
searchInputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SearchInputRecord._isAnonymousRecord = true;
SearchInputRecord.UniqueId = "18a02b4d-f1c3-c8a9-ddeb-2129145f50f3";
SearchInputRecord.init();
return SearchInputRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SearchInputRecord = SearchInputRecord;

});
define("UBTConnect_Utils.model$MemoryCacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "UBTConnect_Utils.model", "MemoryClientCache.model$MemoryCacheTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecord = (function (_super) {
__extends(MemoryCacheTypeRecord, _super);
function MemoryCacheTypeRecord(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecord.attributesToDeclare = function () {
return [
this.attr("MemoryCacheType", "memoryCacheTypeAttr", "MemoryCacheType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheTypeRec());
}, true, MemoryClientCacheModel.MemoryCacheTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MemoryCacheTypeRecord.fromStructure = function (str) {
return new MemoryCacheTypeRecord(new MemoryCacheTypeRecord.RecordClass({
memoryCacheTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MemoryCacheTypeRecord._isAnonymousRecord = true;
MemoryCacheTypeRecord.UniqueId = "22391bfc-4d63-db02-f78b-506be318c40d";
MemoryCacheTypeRecord.init();
return MemoryCacheTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.MemoryCacheTypeRecord = MemoryCacheTypeRecord;

});
define("UBTConnect_Utils.model$MemoryCacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$MemoryCacheTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeRecordList = (function (_super) {
__extends(MemoryCacheTypeRecordList, _super);
function MemoryCacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeRecordList.itemType = UBTConnect_UtilsModel.MemoryCacheTypeRecord;
return MemoryCacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MemoryCacheTypeRecordList = MemoryCacheTypeRecordList;

});
define("UBTConnect_Utils.model$PolicyInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformationRec = (function (_super) {
__extends(PolicyInformationRec, _super);
function PolicyInformationRec(defaults) {
_super.apply(this, arguments);
}
PolicyInformationRec.attributesToDeclare = function () {
return [
this.attr("Policy_ContentType", "policy_ContentTypeAttr", "Policy_ContentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Policy_FileName", "policy_FileNameAttr", "Policy_FileName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Policy_Url", "policy_UrlAttr", "Policy_Url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyInformationRec.init();
return PolicyInformationRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.PolicyInformationRec = PolicyInformationRec;

});
define("UBTConnect_Utils.model$PolicyInformationList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PolicyInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformationList = (function (_super) {
__extends(PolicyInformationList, _super);
function PolicyInformationList(defaults) {
_super.apply(this, arguments);
}
PolicyInformationList.itemType = UBTConnect_UtilsModel.PolicyInformationRec;
return PolicyInformationList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PolicyInformationList = PolicyInformationList;

});
define("UBTConnect_Utils.model$UI_CountryDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_CountryDetailsRec = (function (_super) {
__extends(UI_CountryDetailsRec, _super);
function UI_CountryDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_CountryDetailsRec.attributesToDeclare = function () {
return [
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
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
UI_CountryDetailsRec.init();
return UI_CountryDetailsRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_CountryDetailsRec = UI_CountryDetailsRec;

});
define("UBTConnect_Utils.model$UI_CountryDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_CountryDetailsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_CountryDetailsList = (function (_super) {
__extends(UI_CountryDetailsList, _super);
function UI_CountryDetailsList(defaults) {
_super.apply(this, arguments);
}
UI_CountryDetailsList.itemType = UBTConnect_UtilsModel.UI_CountryDetailsRec;
return UI_CountryDetailsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_CountryDetailsList = UI_CountryDetailsList;

});
define("UBTConnect_Utils.model$BottomBar_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BottomBar_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BottomBar_ItemList = (function (_super) {
__extends(BottomBar_ItemList, _super);
function BottomBar_ItemList(defaults) {
_super.apply(this, arguments);
}
BottomBar_ItemList.itemType = UBTConnect_UtilsModel.BottomBar_ItemRec;
return BottomBar_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BottomBar_ItemList = BottomBar_ItemList;

});
define("UBTConnect_Utils.model$RadiusOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var RadiusOptionsRecord = (function (_super) {
__extends(RadiusOptionsRecord, _super);
function RadiusOptionsRecord(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsRecord.attributesToDeclare = function () {
return [
this.attr("RadiusOptions", "radiusOptionsAttr", "RadiusOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.RadiusOptionsRec());
}, true, UBTConnectLibraryModel.RadiusOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
RadiusOptionsRecord.fromStructure = function (str) {
return new RadiusOptionsRecord(new RadiusOptionsRecord.RecordClass({
radiusOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RadiusOptionsRecord._isAnonymousRecord = true;
RadiusOptionsRecord.UniqueId = "1a7930e2-86c1-b24d-bc00-6d1f02a6993d";
RadiusOptionsRecord.init();
return RadiusOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.RadiusOptionsRecord = RadiusOptionsRecord;

});
define("UBTConnect_Utils.model$SearchResultList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model", "UBTConnect_Utils.model", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Search_CS"], function (exports, OutSystems, Connect_Search_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchResultList = (function (_super) {
__extends(SearchResultList, _super);
function SearchResultList(defaults) {
_super.apply(this, arguments);
}
SearchResultList.itemType = Connect_Search_CSModel.SearchResultRec;
return SearchResultList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchResultList = SearchResultList;

});
define("UBTConnect_Utils.model$UBT_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ColorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ColorList = (function (_super) {
__extends(UBT_ColorList, _super);
function UBT_ColorList(defaults) {
_super.apply(this, arguments);
}
UBT_ColorList.itemType = UBTConnectLibraryModel.UBT_ColorRec;
return UBT_ColorList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ColorList = UBT_ColorList;

});
define("UBTConnect_Utils.model$ExtrasList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model$ExtrasRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExtrasList = (function (_super) {
__extends(ExtrasList, _super);
function ExtrasList(defaults) {
_super.apply(this, arguments);
}
ExtrasList.itemType = Connect2_AppLauncherPluginModel.ExtrasRec;
return ExtrasList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ExtrasList = ExtrasList;

});
define("UBTConnect_Utils.model$UBT_ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ShapeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ShapeList = (function (_super) {
__extends(UBT_ShapeList, _super);
function UBT_ShapeList(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeList.itemType = UBTConnectLibraryModel.UBT_ShapeRec;
return UBT_ShapeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ShapeList = UBT_ShapeList;

});
define("UBTConnect_Utils.model$CacheControl_UserInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationRec = (function (_super) {
__extends(CacheControl_UserInformationRec, _super);
function CacheControl_UserInformationRec(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationRec.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent", "directory_UserCurrentAttr", "Directory_UserCurrent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrentRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrentRec), 
this.attr("HasPoliciesToAccept", "hasPoliciesToAcceptAttr", "HasPoliciesToAccept", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_UserInformationRec.init();
return CacheControl_UserInformationRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_UserInformationRec = CacheControl_UserInformationRec;

});
define("UBTConnect_Utils.model$CacheControl_UserInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_UserInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationRecord = (function (_super) {
__extends(CacheControl_UserInformationRecord, _super);
function CacheControl_UserInformationRecord(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationRecord.attributesToDeclare = function () {
return [
this.attr("CacheControl_UserInformation", "cacheControl_UserInformationAttr", "CacheControl_UserInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_UserInformationRec());
}, true, UBTConnect_UtilsModel.CacheControl_UserInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_UserInformationRecord.fromStructure = function (str) {
return new CacheControl_UserInformationRecord(new CacheControl_UserInformationRecord.RecordClass({
cacheControl_UserInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_UserInformationRecord._isAnonymousRecord = true;
CacheControl_UserInformationRecord.UniqueId = "1d61dbf6-1790-a772-b9fd-36988f57a53a";
CacheControl_UserInformationRecord.init();
return CacheControl_UserInformationRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_UserInformationRecord = CacheControl_UserInformationRecord;

});
define("UBTConnect_Utils.model$BulkSignedImageResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model$BulkSignedImageResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRecord = (function (_super) {
__extends(BulkSignedImageResultRecord, _super);
function BulkSignedImageResultRecord(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRecord.attributesToDeclare = function () {
return [
this.attr("BulkSignedImageResult", "bulkSignedImageResultAttr", "BulkSignedImageResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BulkSignedImageResultRec());
}, true, Connect2_LegacySharedModel.BulkSignedImageResultRec)
].concat(_super.attributesToDeclare.call(this));
};
BulkSignedImageResultRecord.fromStructure = function (str) {
return new BulkSignedImageResultRecord(new BulkSignedImageResultRecord.RecordClass({
bulkSignedImageResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BulkSignedImageResultRecord._isAnonymousRecord = true;
BulkSignedImageResultRecord.UniqueId = "1e07b509-843f-8871-52ff-521c088eb279";
BulkSignedImageResultRecord.init();
return BulkSignedImageResultRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.BulkSignedImageResultRecord = BulkSignedImageResultRecord;

});
define("UBTConnect_Utils.model$SignedImagesRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$SignedImagesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SignedImagesRecord = (function (_super) {
__extends(SignedImagesRecord, _super);
function SignedImagesRecord(defaults) {
_super.apply(this, arguments);
}
SignedImagesRecord.attributesToDeclare = function () {
return [
this.attr("SignedImages", "signedImagesAttr", "SignedImages", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SignedImagesRec());
}, true, APIDomain_Directory_ISModel.SignedImagesRec)
].concat(_super.attributesToDeclare.call(this));
};
SignedImagesRecord.fromStructure = function (str) {
return new SignedImagesRecord(new SignedImagesRecord.RecordClass({
signedImagesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SignedImagesRecord._isAnonymousRecord = true;
SignedImagesRecord.UniqueId = "4eed0783-13f9-4ddb-36fe-ee143e06fb56";
SignedImagesRecord.init();
return SignedImagesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SignedImagesRecord = SignedImagesRecord;

});
define("UBTConnect_Utils.model$SignedImagesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SignedImagesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SignedImagesRecordList = (function (_super) {
__extends(SignedImagesRecordList, _super);
function SignedImagesRecordList(defaults) {
_super.apply(this, arguments);
}
SignedImagesRecordList.itemType = UBTConnect_UtilsModel.SignedImagesRecord;
return SignedImagesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SignedImagesRecordList = SignedImagesRecordList;

});
define("UBTConnect_Utils.model$PolicyInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PolicyInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformationRecord = (function (_super) {
__extends(PolicyInformationRecord, _super);
function PolicyInformationRecord(defaults) {
_super.apply(this, arguments);
}
PolicyInformationRecord.attributesToDeclare = function () {
return [
this.attr("PolicyInformation", "policyInformationAttr", "PolicyInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.PolicyInformationRec());
}, true, UBTConnect_UtilsModel.PolicyInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyInformationRecord.fromStructure = function (str) {
return new PolicyInformationRecord(new PolicyInformationRecord.RecordClass({
policyInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyInformationRecord._isAnonymousRecord = true;
PolicyInformationRecord.UniqueId = "202fc2fb-50ee-b0c5-c68b-61120bd2e0cb";
PolicyInformationRecord.init();
return PolicyInformationRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.PolicyInformationRecord = PolicyInformationRecord;

});
define("UBTConnect_Utils.model$UBT_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ColorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ColorRecord = (function (_super) {
__extends(UBT_ColorRecord, _super);
function UBT_ColorRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ColorRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Color", "uBT_ColorAttr", "UBT_Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ColorRec());
}, true, UBTConnectLibraryModel.UBT_ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColorRecord.fromStructure = function (str) {
return new UBT_ColorRecord(new UBT_ColorRecord.RecordClass({
uBT_ColorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ColorRecord._isAnonymousRecord = true;
UBT_ColorRecord.UniqueId = "3490cded-94ee-8559-0813-5fa401213bc4";
UBT_ColorRecord.init();
return UBT_ColorRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ColorRecord = UBT_ColorRecord;

});
define("UBTConnect_Utils.model$UBT_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ColorRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ColorRecordList = (function (_super) {
__extends(UBT_ColorRecordList, _super);
function UBT_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColorRecordList.itemType = UBTConnect_UtilsModel.UBT_ColorRecord;
return UBT_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ColorRecordList = UBT_ColorRecordList;

});
define("UBTConnect_Utils.model$CacheControl_PoliciesRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PolicyInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_PoliciesRec = (function (_super) {
__extends(CacheControl_PoliciesRec, _super);
function CacheControl_PoliciesRec(defaults) {
_super.apply(this, arguments);
}
CacheControl_PoliciesRec.attributesToDeclare = function () {
return [
this.attr("PolicyInformation_TermsAndConditions", "policyInformation_TermsAndConditionsAttr", "PolicyInformation_TermsAndConditions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.PolicyInformationRec());
}, true, UBTConnect_UtilsModel.PolicyInformationRec), 
this.attr("PolicyInformation_PrivacyPolicy", "policyInformation_PrivacyPolicyAttr", "PolicyInformation_PrivacyPolicy", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.PolicyInformationRec());
}, true, UBTConnect_UtilsModel.PolicyInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_PoliciesRec.init();
return CacheControl_PoliciesRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_PoliciesRec = CacheControl_PoliciesRec;

});
define("UBTConnect_Utils.model$CacheControl_PoliciesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_PoliciesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_PoliciesRecord = (function (_super) {
__extends(CacheControl_PoliciesRecord, _super);
function CacheControl_PoliciesRecord(defaults) {
_super.apply(this, arguments);
}
CacheControl_PoliciesRecord.attributesToDeclare = function () {
return [
this.attr("CacheControl_Policies", "cacheControl_PoliciesAttr", "CacheControl_Policies", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_PoliciesRec());
}, true, UBTConnect_UtilsModel.CacheControl_PoliciesRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_PoliciesRecord.fromStructure = function (str) {
return new CacheControl_PoliciesRecord(new CacheControl_PoliciesRecord.RecordClass({
cacheControl_PoliciesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_PoliciesRecord._isAnonymousRecord = true;
CacheControl_PoliciesRecord.UniqueId = "20aa2f1f-d0d7-b05c-8779-b618f4354469";
CacheControl_PoliciesRecord.init();
return CacheControl_PoliciesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_PoliciesRecord = CacheControl_PoliciesRecord;

});
define("UBTConnect_Utils.model$PolicyInformation2Record", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "UBTConnect_Utils.model", "ApplicationPolicies.model$PolicyInformationRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformation2Record = (function (_super) {
__extends(PolicyInformation2Record, _super);
function PolicyInformation2Record(defaults) {
_super.apply(this, arguments);
}
PolicyInformation2Record.attributesToDeclare = function () {
return [
this.attr("PolicyInformation", "policyInformationAttr", "PolicyInformation2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyInformationRec());
}, true, ApplicationPoliciesModel.PolicyInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyInformation2Record.fromStructure = function (str) {
return new PolicyInformation2Record(new PolicyInformation2Record.RecordClass({
policyInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyInformation2Record._isAnonymousRecord = true;
PolicyInformation2Record.UniqueId = "210bca4b-0362-71bb-ca70-d0c0227256b6";
PolicyInformation2Record.init();
return PolicyInformation2Record;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.PolicyInformation2Record = PolicyInformation2Record;

});
define("UBTConnect_Utils.model$ContactPopupButtonRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupButtonRec = (function (_super) {
__extends(ContactPopupButtonRec, _super);
function ContactPopupButtonRec(defaults) {
_super.apply(this, arguments);
}
ContactPopupButtonRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UBT_IconId", "uBT_IconIdAttr", "UBT_IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopupButtonRec.init();
return ContactPopupButtonRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactPopupButtonRec = ContactPopupButtonRec;

});
define("UBTConnect_Utils.model$ContactPopupButtonList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupButtonList = (function (_super) {
__extends(ContactPopupButtonList, _super);
function ContactPopupButtonList(defaults) {
_super.apply(this, arguments);
}
ContactPopupButtonList.itemType = UBTConnect_UtilsModel.ContactPopupButtonRec;
return ContactPopupButtonList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopupButtonList = ContactPopupButtonList;

});
define("UBTConnect_Utils.model$ContactPopupButtonTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupButtonTextRecord = (function (_super) {
__extends(ContactPopupButtonTextRecord, _super);
function ContactPopupButtonTextRecord(defaults) {
_super.apply(this, arguments);
}
ContactPopupButtonTextRecord.attributesToDeclare = function () {
return [
this.attr("ContactPopupButton", "contactPopupButtonAttr", "ContactPopupButton", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonRec());
}, true, UBTConnect_UtilsModel.ContactPopupButtonRec), 
this.attr("Number", "numberAttr", "Number", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopupButtonTextRecord._isAnonymousRecord = true;
ContactPopupButtonTextRecord.UniqueId = "411c6cbe-5303-93ab-0445-3fa3d7353e52";
ContactPopupButtonTextRecord.init();
return ContactPopupButtonTextRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactPopupButtonTextRecord = ContactPopupButtonTextRecord;

});
define("UBTConnect_Utils.model$ContactPopupButtonTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupButtonTextRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupButtonTextRecordList = (function (_super) {
__extends(ContactPopupButtonTextRecordList, _super);
function ContactPopupButtonTextRecordList(defaults) {
_super.apply(this, arguments);
}
ContactPopupButtonTextRecordList.itemType = UBTConnect_UtilsModel.ContactPopupButtonTextRecord;
return ContactPopupButtonTextRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopupButtonTextRecordList = ContactPopupButtonTextRecordList;

});
define("UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_ContactByMessage_WrapperDataRecord = (function (_super) {
__extends(UI_ContactByMessage_WrapperDataRecord, _super);
function UI_ContactByMessage_WrapperDataRecord(defaults) {
_super.apply(this, arguments);
}
UI_ContactByMessage_WrapperDataRecord.attributesToDeclare = function () {
return [
this.attr("UI_ContactByMessage_WrapperData", "uI_ContactByMessage_WrapperDataAttr", "UI_ContactByMessage_WrapperData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec());
}, true, UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_ContactByMessage_WrapperDataRecord.fromStructure = function (str) {
return new UI_ContactByMessage_WrapperDataRecord(new UI_ContactByMessage_WrapperDataRecord.RecordClass({
uI_ContactByMessage_WrapperDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_ContactByMessage_WrapperDataRecord._isAnonymousRecord = true;
UI_ContactByMessage_WrapperDataRecord.UniqueId = "21be8117-2933-5bb8-1879-1c0f1eefd126";
UI_ContactByMessage_WrapperDataRecord.init();
return UI_ContactByMessage_WrapperDataRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRecord = UI_ContactByMessage_WrapperDataRecord;

});
define("UBTConnect_Utils.model$Menu_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Menu_ItemRec = (function (_super) {
__extends(Menu_ItemRec, _super);
function Menu_ItemRec(defaults) {
_super.apply(this, arguments);
}
Menu_ItemRec.attributesToDeclare = function () {
return [
this.attr("MenuItemId", "menuItemIdAttr", "MenuItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UBTIcon", "uBTIconAttr", "UBTIcon", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Menu_ItemRec.init();
return Menu_ItemRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Menu_ItemRec = Menu_ItemRec;

});
define("UBTConnect_Utils.model$Menu_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Menu_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Menu_ItemRecord = (function (_super) {
__extends(Menu_ItemRecord, _super);
function Menu_ItemRecord(defaults) {
_super.apply(this, arguments);
}
Menu_ItemRecord.attributesToDeclare = function () {
return [
this.attr("Menu_Item", "menu_ItemAttr", "Menu_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Menu_ItemRec());
}, true, UBTConnect_UtilsModel.Menu_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
Menu_ItemRecord.fromStructure = function (str) {
return new Menu_ItemRecord(new Menu_ItemRecord.RecordClass({
menu_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Menu_ItemRecord._isAnonymousRecord = true;
Menu_ItemRecord.UniqueId = "b561261a-1d42-9d47-d699-1c1077edcdef";
Menu_ItemRecord.init();
return Menu_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Menu_ItemRecord = Menu_ItemRecord;

});
define("UBTConnect_Utils.model$Menu_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Menu_ItemRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Menu_ItemRecordList = (function (_super) {
__extends(Menu_ItemRecordList, _super);
function Menu_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Menu_ItemRecordList.itemType = UBTConnect_UtilsModel.Menu_ItemRecord;
return Menu_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Menu_ItemRecordList = Menu_ItemRecordList;

});
define("UBTConnect_Utils.model$PolicyInformation2List", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "UBTConnect_Utils.model", "ApplicationPolicies.model$PolicyInformationRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformation2List = (function (_super) {
__extends(PolicyInformation2List, _super);
function PolicyInformation2List(defaults) {
_super.apply(this, arguments);
}
PolicyInformation2List.itemType = ApplicationPoliciesModel.PolicyInformationRec;
return PolicyInformation2List;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PolicyInformation2List = PolicyInformation2List;

});
define("UBTConnect_Utils.model$UBT_ImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeRecord = (function (_super) {
__extends(UBT_ImageSizeRecord, _super);
function UBT_ImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ImageSize", "uBT_ImageSizeAttr", "UBT_ImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ImageSizeRec());
}, true, UBTConnectLibraryModel.UBT_ImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ImageSizeRecord.fromStructure = function (str) {
return new UBT_ImageSizeRecord(new UBT_ImageSizeRecord.RecordClass({
uBT_ImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ImageSizeRecord._isAnonymousRecord = true;
UBT_ImageSizeRecord.UniqueId = "b63b1197-018d-6f35-ef1a-e2956550771d";
UBT_ImageSizeRecord.init();
return UBT_ImageSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ImageSizeRecord = UBT_ImageSizeRecord;

});
define("UBTConnect_Utils.model$UBT_ImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ImageSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeRecordList = (function (_super) {
__extends(UBT_ImageSizeRecordList, _super);
function UBT_ImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeRecordList.itemType = UBTConnect_UtilsModel.UBT_ImageSizeRecord;
return UBT_ImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ImageSizeRecordList = UBT_ImageSizeRecordList;

});
define("UBTConnect_Utils.model$CacheControl_AllCountriesRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_CountryDetailsList"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllCountriesRec = (function (_super) {
__extends(CacheControl_AllCountriesRec, _super);
function CacheControl_AllCountriesRec(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllCountriesRec.attributesToDeclare = function () {
return [
this.attr("CountryList", "countryListAttr", "CountryList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_CountryDetailsList());
}, true, UBTConnect_UtilsModel.UI_CountryDetailsList)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_AllCountriesRec.fromStructure = function (str) {
return new CacheControl_AllCountriesRec(new CacheControl_AllCountriesRec.RecordClass({
countryListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_AllCountriesRec.init();
return CacheControl_AllCountriesRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_AllCountriesRec = CacheControl_AllCountriesRec;

});
define("UBTConnect_Utils.model$CacheControl_AllCountriesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllCountriesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllCountriesRecord = (function (_super) {
__extends(CacheControl_AllCountriesRecord, _super);
function CacheControl_AllCountriesRecord(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllCountriesRecord.attributesToDeclare = function () {
return [
this.attr("CacheControl_AllCountries", "cacheControl_AllCountriesAttr", "CacheControl_AllCountries", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_AllCountriesRec());
}, true, UBTConnect_UtilsModel.CacheControl_AllCountriesRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_AllCountriesRecord.fromStructure = function (str) {
return new CacheControl_AllCountriesRecord(new CacheControl_AllCountriesRecord.RecordClass({
cacheControl_AllCountriesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_AllCountriesRecord._isAnonymousRecord = true;
CacheControl_AllCountriesRecord.UniqueId = "65c11a1b-3a75-d5d2-9f48-c42b736d709c";
CacheControl_AllCountriesRecord.init();
return CacheControl_AllCountriesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_AllCountriesRecord = CacheControl_AllCountriesRecord;

});
define("UBTConnect_Utils.model$CacheControl_AllCountriesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllCountriesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllCountriesRecordList = (function (_super) {
__extends(CacheControl_AllCountriesRecordList, _super);
function CacheControl_AllCountriesRecordList(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllCountriesRecordList.itemType = UBTConnect_UtilsModel.CacheControl_AllCountriesRecord;
return CacheControl_AllCountriesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_AllCountriesRecordList = CacheControl_AllCountriesRecordList;

});
define("UBTConnect_Utils.model$Custom_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecord = (function (_super) {
__extends(Custom_AddressRecord, _super);
function Custom_AddressRecord(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecord.attributesToDeclare = function () {
return [
this.attr("Custom_Address", "custom_AddressAttr", "Custom_Address", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_AddressRec());
}, true, APIDomain_Directory_ISModel.Custom_AddressRec)
].concat(_super.attributesToDeclare.call(this));
};
Custom_AddressRecord.fromStructure = function (str) {
return new Custom_AddressRecord(new Custom_AddressRecord.RecordClass({
custom_AddressAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Custom_AddressRecord._isAnonymousRecord = true;
Custom_AddressRecord.UniqueId = "c7712318-c19f-7cf6-b839-3659abfc25e9";
Custom_AddressRecord.init();
return Custom_AddressRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Custom_AddressRecord = Custom_AddressRecord;

});
define("UBTConnect_Utils.model$Custom_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Custom_AddressRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Custom_AddressRecordList = (function (_super) {
__extends(Custom_AddressRecordList, _super);
function Custom_AddressRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressRecordList.itemType = UBTConnect_UtilsModel.Custom_AddressRecord;
return Custom_AddressRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Custom_AddressRecordList = Custom_AddressRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecord = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecord, _super);
function Directory_UserCurrent_VisibilityRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Visibility", "directory_UserCurrent_VisibilityAttr", "Directory_UserCurrent_Visibility", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_VisibilityRecord.fromStructure = function (str) {
return new Directory_UserCurrent_VisibilityRecord(new Directory_UserCurrent_VisibilityRecord.RecordClass({
directory_UserCurrent_VisibilityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_VisibilityRecord._isAnonymousRecord = true;
Directory_UserCurrent_VisibilityRecord.UniqueId = "7b7e67a5-bdc1-86e0-8fe8-24efe525a0f9";
Directory_UserCurrent_VisibilityRecord.init();
return Directory_UserCurrent_VisibilityRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_UserCurrent_VisibilityRecord = Directory_UserCurrent_VisibilityRecord;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_UserCurrent_VisibilityRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityRecordList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityRecordList, _super);
function Directory_UserCurrent_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityRecordList.itemType = UBTConnect_UtilsModel.Directory_UserCurrent_VisibilityRecord;
return Directory_UserCurrent_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_VisibilityRecordList = Directory_UserCurrent_VisibilityRecordList;

});
define("UBTConnect_Utils.model$CacheControl_AllSubdivionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllSubdivionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllSubdivionsRecordList = (function (_super) {
__extends(CacheControl_AllSubdivionsRecordList, _super);
function CacheControl_AllSubdivionsRecordList(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllSubdivionsRecordList.itemType = UBTConnect_UtilsModel.CacheControl_AllSubdivionsRecord;
return CacheControl_AllSubdivionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_AllSubdivionsRecordList = CacheControl_AllSubdivionsRecordList;

});
define("UBTConnect_Utils.model$ContactPopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.ContactPopupDataRecord = ContactPopupDataRecord;

});
define("UBTConnect_Utils.model$ContactPopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupDataRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupDataRecordList = (function (_super) {
__extends(ContactPopupDataRecordList, _super);
function ContactPopupDataRecordList(defaults) {
_super.apply(this, arguments);
}
ContactPopupDataRecordList.itemType = UBTConnect_UtilsModel.ContactPopupDataRecord;
return ContactPopupDataRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopupDataRecordList = ContactPopupDataRecordList;

});
define("UBTConnect_Utils.model$LauncherParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LauncherParametersRecord = (function (_super) {
__extends(LauncherParametersRecord, _super);
function LauncherParametersRecord(defaults) {
_super.apply(this, arguments);
}
LauncherParametersRecord.attributesToDeclare = function () {
return [
this.attr("LauncherParameters", "launcherParametersAttr", "LauncherParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.LauncherParametersRec());
}, true, Connect2_AppLauncherPluginModel.LauncherParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
LauncherParametersRecord.fromStructure = function (str) {
return new LauncherParametersRecord(new LauncherParametersRecord.RecordClass({
launcherParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LauncherParametersRecord._isAnonymousRecord = true;
LauncherParametersRecord.UniqueId = "24d22ada-ffc3-dbcc-79b2-1df4fa733ab0";
LauncherParametersRecord.init();
return LauncherParametersRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.LauncherParametersRecord = LauncherParametersRecord;

});
define("UBTConnect_Utils.model$ActionBarOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionBarOptionsRecord = (function (_super) {
__extends(ActionBarOptionsRecord, _super);
function ActionBarOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ActionBarOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ActionBarOptions", "actionBarOptionsAttr", "ActionBarOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionBarOptionsRec());
}, true, UBTConnectLibraryModel.ActionBarOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionBarOptionsRecord.fromStructure = function (str) {
return new ActionBarOptionsRecord(new ActionBarOptionsRecord.RecordClass({
actionBarOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionBarOptionsRecord._isAnonymousRecord = true;
ActionBarOptionsRecord.UniqueId = "e6dab178-52e1-ec4a-1946-c48270768708";
ActionBarOptionsRecord.init();
return ActionBarOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ActionBarOptionsRecord = ActionBarOptionsRecord;

});
define("UBTConnect_Utils.model$ActionBarOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ActionBarOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionBarOptionsRecordList = (function (_super) {
__extends(ActionBarOptionsRecordList, _super);
function ActionBarOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionBarOptionsRecordList.itemType = UBTConnect_UtilsModel.ActionBarOptionsRecord;
return ActionBarOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ActionBarOptionsRecordList = ActionBarOptionsRecordList;

});
define("UBTConnect_Utils.model$ImagesParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImagesParametersRec = (function (_super) {
__extends(ImagesParametersRec, _super);
function ImagesParametersRec(defaults) {
_super.apply(this, arguments);
}
ImagesParametersRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImagesParametersRec.init();
return ImagesParametersRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ImagesParametersRec = ImagesParametersRec;

});
define("UBTConnect_Utils.model$UBT_ColumnBehaviourRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourRecord = (function (_super) {
__extends(UBT_ColumnBehaviourRecord, _super);
function UBT_ColumnBehaviourRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ColumnBehaviour", "uBT_ColumnBehaviourAttr", "UBT_ColumnBehaviour", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ColumnBehaviourRec());
}, true, UBTConnectLibraryModel.UBT_ColumnBehaviourRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColumnBehaviourRecord.fromStructure = function (str) {
return new UBT_ColumnBehaviourRecord(new UBT_ColumnBehaviourRecord.RecordClass({
uBT_ColumnBehaviourAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ColumnBehaviourRecord._isAnonymousRecord = true;
UBT_ColumnBehaviourRecord.UniqueId = "495adc17-750c-a588-7982-7ee722c028a5";
UBT_ColumnBehaviourRecord.init();
return UBT_ColumnBehaviourRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ColumnBehaviourRecord = UBT_ColumnBehaviourRecord;

});
define("UBTConnect_Utils.model$UBT_ColumnBehaviourRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ColumnBehaviourRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourRecordList = (function (_super) {
__extends(UBT_ColumnBehaviourRecordList, _super);
function UBT_ColumnBehaviourRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourRecordList.itemType = UBTConnect_UtilsModel.UBT_ColumnBehaviourRecord;
return UBT_ColumnBehaviourRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ColumnBehaviourRecordList = UBT_ColumnBehaviourRecordList;

});
define("UBTConnect_Utils.model$UBT_ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ShapeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ShapeRecordList = (function (_super) {
__extends(UBT_ShapeRecordList, _super);
function UBT_ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeRecordList.itemType = UBTConnect_UtilsModel.UBT_ShapeRecord;
return UBT_ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ShapeRecordList = UBT_ShapeRecordList;

});
define("UBTConnect_Utils.model$AvatarImageFallbackoptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsRecord = (function (_super) {
__extends(AvatarImageFallbackoptionsRecord, _super);
function AvatarImageFallbackoptionsRecord(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsRecord.attributesToDeclare = function () {
return [
this.attr("AvatarImageFallbackoptions", "avatarImageFallbackoptionsAttr", "AvatarImageFallbackoptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec());
}, true, UBTConnectLibraryModel.AvatarImageFallbackoptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarImageFallbackoptionsRecord.fromStructure = function (str) {
return new AvatarImageFallbackoptionsRecord(new AvatarImageFallbackoptionsRecord.RecordClass({
avatarImageFallbackoptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AvatarImageFallbackoptionsRecord._isAnonymousRecord = true;
AvatarImageFallbackoptionsRecord.UniqueId = "285ad076-c469-e14e-6a4f-adb5f1012e06";
AvatarImageFallbackoptionsRecord.init();
return AvatarImageFallbackoptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.AvatarImageFallbackoptionsRecord = AvatarImageFallbackoptionsRecord;

});
define("UBTConnect_Utils.model$UBT_ImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeList = (function (_super) {
__extends(UBT_ImageSizeList, _super);
function UBT_ImageSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeList.itemType = UBTConnectLibraryModel.UBT_ImageSizeRec;
return UBT_ImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ImageSizeList = UBT_ImageSizeList;

});
define("UBTConnect_Utils.model$Type_ExternalShareOptionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model$Type_ExternalShareOptionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ExternalShareOptionList = (function (_super) {
__extends(Type_ExternalShareOptionList, _super);
function Type_ExternalShareOptionList(defaults) {
_super.apply(this, arguments);
}
Type_ExternalShareOptionList.itemType = Connect2_Sharing_CSModel.Type_ExternalShareOptionRec;
return Type_ExternalShareOptionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_ExternalShareOptionList = Type_ExternalShareOptionList;

});
define("UBTConnect_Utils.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("UBTConnect_Utils.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ErrorMessageRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = UBTConnect_UtilsModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("UBTConnect_Utils.model$BackgroundOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsList = (function (_super) {
__extends(BackgroundOptionsList, _super);
function BackgroundOptionsList(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsList.itemType = UBTConnectLibraryModel.BackgroundOptionsRec;
return BackgroundOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BackgroundOptionsList = BackgroundOptionsList;

});
define("UBTConnect_Utils.model$Note_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Note_ItemList = (function (_super) {
__extends(Note_ItemList, _super);
function Note_ItemList(defaults) {
_super.apply(this, arguments);
}
Note_ItemList.itemType = UBTConnectLibraryModel.Note_ItemRec;
return Note_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Note_ItemList = Note_ItemList;

});
define("UBTConnect_Utils.model$UI_Bookmark_Card_ContentRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "UBTConnect_Utils.model", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Bookmarks_CS"], function (exports, OutSystems, Connect_Bookmarks_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_ContentRecord = (function (_super) {
__extends(UI_Bookmark_Card_ContentRecord, _super);
function UI_Bookmark_Card_ContentRecord(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_ContentRecord.attributesToDeclare = function () {
return [
this.attr("UI_Bookmark_Card_Content", "uI_Bookmark_Card_ContentAttr", "UI_Bookmark_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec());
}, true, Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_Card_ContentRecord.fromStructure = function (str) {
return new UI_Bookmark_Card_ContentRecord(new UI_Bookmark_Card_ContentRecord.RecordClass({
uI_Bookmark_Card_ContentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_Bookmark_Card_ContentRecord._isAnonymousRecord = true;
UI_Bookmark_Card_ContentRecord.UniqueId = "66e531c3-b431-6b3b-208e-49ffbe3d5b7d";
UI_Bookmark_Card_ContentRecord.init();
return UI_Bookmark_Card_ContentRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_Bookmark_Card_ContentRecord = UI_Bookmark_Card_ContentRecord;

});
define("UBTConnect_Utils.model$UI_Bookmark_Card_ContentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_Bookmark_Card_ContentRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_ContentRecordList = (function (_super) {
__extends(UI_Bookmark_Card_ContentRecordList, _super);
function UI_Bookmark_Card_ContentRecordList(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_ContentRecordList.itemType = UBTConnect_UtilsModel.UI_Bookmark_Card_ContentRecord;
return UI_Bookmark_Card_ContentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_Bookmark_Card_ContentRecordList = UI_Bookmark_Card_ContentRecordList;

});
define("UBTConnect_Utils.model$AndroidOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$AndroidOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRecord = (function (_super) {
__extends(AndroidOptionsRecord, _super);
function AndroidOptionsRecord(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRecord.attributesToDeclare = function () {
return [
this.attr("AndroidOptions", "androidOptionsAttr", "AndroidOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.AndroidOptionsRec());
}, true, InAppBrowserPluginModel.AndroidOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AndroidOptionsRecord.fromStructure = function (str) {
return new AndroidOptionsRecord(new AndroidOptionsRecord.RecordClass({
androidOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AndroidOptionsRecord._isAnonymousRecord = true;
AndroidOptionsRecord.UniqueId = "d46e748b-594b-42e4-f501-94e3f47f06cc";
AndroidOptionsRecord.init();
return AndroidOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.AndroidOptionsRecord = AndroidOptionsRecord;

});
define("UBTConnect_Utils.model$AndroidOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$AndroidOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsRecordList = (function (_super) {
__extends(AndroidOptionsRecordList, _super);
function AndroidOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsRecordList.itemType = UBTConnect_UtilsModel.AndroidOptionsRecord;
return AndroidOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AndroidOptionsRecordList = AndroidOptionsRecordList;

});
define("UBTConnect_Utils.model$SelectableSearchResultListRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model", "UBTConnect_Utils.model", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Search_CS"], function (exports, OutSystems, Connect_Search_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SelectableSearchResultListRec = (function (_super) {
__extends(SelectableSearchResultListRec, _super);
function SelectableSearchResultListRec(defaults) {
_super.apply(this, arguments);
}
SelectableSearchResultListRec.attributesToDeclare = function () {
return [
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsEnabled", "isEnabledAttr", "IsEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SearchResult", "searchResultAttr", "SearchResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Search_CSModel.SearchResultRec());
}, true, Connect_Search_CSModel.SearchResultRec)
].concat(_super.attributesToDeclare.call(this));
};
SelectableSearchResultListRec.init();
return SelectableSearchResultListRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SelectableSearchResultListRec = SelectableSearchResultListRec;

});
define("UBTConnect_Utils.model$SelectableSearchResultListRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SelectableSearchResultListRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SelectableSearchResultListRecord = (function (_super) {
__extends(SelectableSearchResultListRecord, _super);
function SelectableSearchResultListRecord(defaults) {
_super.apply(this, arguments);
}
SelectableSearchResultListRecord.attributesToDeclare = function () {
return [
this.attr("SelectableSearchResultList", "selectableSearchResultListAttr", "SelectableSearchResultList", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.SelectableSearchResultListRec());
}, true, UBTConnect_UtilsModel.SelectableSearchResultListRec)
].concat(_super.attributesToDeclare.call(this));
};
SelectableSearchResultListRecord.fromStructure = function (str) {
return new SelectableSearchResultListRecord(new SelectableSearchResultListRecord.RecordClass({
selectableSearchResultListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SelectableSearchResultListRecord._isAnonymousRecord = true;
SelectableSearchResultListRecord.UniqueId = "fb9afe9f-3f8d-d404-bc83-6aec159fecc0";
SelectableSearchResultListRecord.init();
return SelectableSearchResultListRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SelectableSearchResultListRecord = SelectableSearchResultListRecord;

});
define("UBTConnect_Utils.model$SelectableSearchResultListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SelectableSearchResultListRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SelectableSearchResultListRecordList = (function (_super) {
__extends(SelectableSearchResultListRecordList, _super);
function SelectableSearchResultListRecordList(defaults) {
_super.apply(this, arguments);
}
SelectableSearchResultListRecordList.itemType = UBTConnect_UtilsModel.SelectableSearchResultListRecord;
return SelectableSearchResultListRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SelectableSearchResultListRecordList = SelectableSearchResultListRecordList;

});
define("UBTConnect_Utils.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUI_2_23Model.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ErrorMessageList = ErrorMessageList;

});
define("UBTConnect_Utils.model$UBT_ButtonSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ButtonSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ButtonSizeRecord = (function (_super) {
__extends(UBT_ButtonSizeRecord, _super);
function UBT_ButtonSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ButtonSize", "uBT_ButtonSizeAttr", "UBT_ButtonSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ButtonSizeRec());
}, true, UBTConnectLibraryModel.UBT_ButtonSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ButtonSizeRecord.fromStructure = function (str) {
return new UBT_ButtonSizeRecord(new UBT_ButtonSizeRecord.RecordClass({
uBT_ButtonSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ButtonSizeRecord._isAnonymousRecord = true;
UBT_ButtonSizeRecord.UniqueId = "eea8ede2-e8df-93a4-9dcd-64752516fb6d";
UBT_ButtonSizeRecord.init();
return UBT_ButtonSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_ButtonSizeRecord = UBT_ButtonSizeRecord;

});
define("UBTConnect_Utils.model$UBT_ButtonSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ButtonSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ButtonSizeRecordList = (function (_super) {
__extends(UBT_ButtonSizeRecordList, _super);
function UBT_ButtonSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonSizeRecordList.itemType = UBTConnect_UtilsModel.UBT_ButtonSizeRecord;
return UBT_ButtonSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ButtonSizeRecordList = UBT_ButtonSizeRecordList;

});
define("UBTConnect_Utils.model$ImageBorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsRecord = (function (_super) {
__extends(ImageBorderOptionsRecord, _super);
function ImageBorderOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ImageBorderOptions", "imageBorderOptionsAttr", "ImageBorderOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ImageBorderOptionsRec());
}, true, UBTConnectLibraryModel.ImageBorderOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageBorderOptionsRecord.fromStructure = function (str) {
return new ImageBorderOptionsRecord(new ImageBorderOptionsRecord.RecordClass({
imageBorderOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageBorderOptionsRecord._isAnonymousRecord = true;
ImageBorderOptionsRecord.UniqueId = "f4ee7189-4cac-b1ec-c90f-31fe90073a0d";
ImageBorderOptionsRecord.init();
return ImageBorderOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ImageBorderOptionsRecord = ImageBorderOptionsRecord;

});
define("UBTConnect_Utils.model$ImageBorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ImageBorderOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsRecordList = (function (_super) {
__extends(ImageBorderOptionsRecordList, _super);
function ImageBorderOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsRecordList.itemType = UBTConnect_UtilsModel.ImageBorderOptionsRecord;
return ImageBorderOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ImageBorderOptionsRecordList = ImageBorderOptionsRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_GeographyList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyList = (function (_super) {
__extends(Directory_UserCurrent_GeographyList, _super);
function Directory_UserCurrent_GeographyList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec;
return Directory_UserCurrent_GeographyList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_GeographyList = Directory_UserCurrent_GeographyList;

});
define("UBTConnect_Utils.model$BulkSignedImageResultList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model$BulkSignedImageResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, Connect2_LegacySharedModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultList = (function (_super) {
__extends(BulkSignedImageResultList, _super);
function BulkSignedImageResultList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultList.itemType = Connect2_LegacySharedModel.BulkSignedImageResultRec;
return BulkSignedImageResultList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BulkSignedImageResultList = BulkSignedImageResultList;

});
define("UBTConnect_Utils.model$UI_Bookmark_Card_ContentList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "UBTConnect_Utils.model", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Bookmarks_CS"], function (exports, OutSystems, Connect_Bookmarks_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_ContentList = (function (_super) {
__extends(UI_Bookmark_Card_ContentList, _super);
function UI_Bookmark_Card_ContentList(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_ContentList.itemType = Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec;
return UI_Bookmark_Card_ContentList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_Bookmark_Card_ContentList = UI_Bookmark_Card_ContentList;

});
define("UBTConnect_Utils.model$Directory_LocationDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_LocationDetailsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_LocationDetailsRecord = (function (_super) {
__extends(Directory_LocationDetailsRecord, _super);
function Directory_LocationDetailsRecord(defaults) {
_super.apply(this, arguments);
}
Directory_LocationDetailsRecord.attributesToDeclare = function () {
return [
this.attr("Directory_LocationDetails", "directory_LocationDetailsAttr", "Directory_LocationDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocationDetailsRec());
}, true, APIDomain_Directory_ISModel.Directory_LocationDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_LocationDetailsRecord.fromStructure = function (str) {
return new Directory_LocationDetailsRecord(new Directory_LocationDetailsRecord.RecordClass({
directory_LocationDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_LocationDetailsRecord._isAnonymousRecord = true;
Directory_LocationDetailsRecord.UniqueId = "31d6f9ad-fa9e-66d7-e15b-0c2d2080de41";
Directory_LocationDetailsRecord.init();
return Directory_LocationDetailsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_LocationDetailsRecord = Directory_LocationDetailsRecord;

});
define("UBTConnect_Utils.model$BorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BorderOptionsRecord = (function (_super) {
__extends(BorderOptionsRecord, _super);
function BorderOptionsRecord(defaults) {
_super.apply(this, arguments);
}
BorderOptionsRecord.attributesToDeclare = function () {
return [
this.attr("BorderOptions", "borderOptionsAttr", "BorderOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BorderOptionsRec());
}, true, UBTConnectLibraryModel.BorderOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BorderOptionsRecord.fromStructure = function (str) {
return new BorderOptionsRecord(new BorderOptionsRecord.RecordClass({
borderOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BorderOptionsRecord._isAnonymousRecord = true;
BorderOptionsRecord.UniqueId = "7e6c94eb-ca32-af63-9cc6-1a2ebfc43a00";
BorderOptionsRecord.init();
return BorderOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.BorderOptionsRecord = BorderOptionsRecord;

});
define("UBTConnect_Utils.model$BorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BorderOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BorderOptionsRecordList = (function (_super) {
__extends(BorderOptionsRecordList, _super);
function BorderOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
BorderOptionsRecordList.itemType = UBTConnect_UtilsModel.BorderOptionsRecord;
return BorderOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BorderOptionsRecordList = BorderOptionsRecordList;

});
define("UBTConnect_Utils.model$Directory_ImageDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_ImageDetailsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_ImageDetailsRecord = (function (_super) {
__extends(Directory_ImageDetailsRecord, _super);
function Directory_ImageDetailsRecord(defaults) {
_super.apply(this, arguments);
}
Directory_ImageDetailsRecord.attributesToDeclare = function () {
return [
this.attr("Directory_ImageDetails", "directory_ImageDetailsAttr", "Directory_ImageDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_ImageDetailsRec());
}, true, APIDomain_Directory_ISModel.Directory_ImageDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_ImageDetailsRecord.fromStructure = function (str) {
return new Directory_ImageDetailsRecord(new Directory_ImageDetailsRecord.RecordClass({
directory_ImageDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_ImageDetailsRecord._isAnonymousRecord = true;
Directory_ImageDetailsRecord.UniqueId = "32702e53-7c0d-0246-6bbf-61449b05c203";
Directory_ImageDetailsRecord.init();
return Directory_ImageDetailsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_ImageDetailsRecord = Directory_ImageDetailsRecord;

});
define("UBTConnect_Utils.model$UBT_AvatarSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_AvatarSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeRecord = (function (_super) {
__extends(UBT_AvatarSizeRecord, _super);
function UBT_AvatarSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_AvatarSize", "uBT_AvatarSizeAttr", "UBT_AvatarSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_AvatarSizeRec());
}, true, UBTConnectLibraryModel.UBT_AvatarSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_AvatarSizeRecord.fromStructure = function (str) {
return new UBT_AvatarSizeRecord(new UBT_AvatarSizeRecord.RecordClass({
uBT_AvatarSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_AvatarSizeRecord._isAnonymousRecord = true;
UBT_AvatarSizeRecord.UniqueId = "eddff16b-8b32-809f-b4e4-7cbd636a62cf";
UBT_AvatarSizeRecord.init();
return UBT_AvatarSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_AvatarSizeRecord = UBT_AvatarSizeRecord;

});
define("UBTConnect_Utils.model$UBT_AvatarSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_AvatarSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeRecordList = (function (_super) {
__extends(UBT_AvatarSizeRecordList, _super);
function UBT_AvatarSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeRecordList.itemType = UBTConnect_UtilsModel.UBT_AvatarSizeRecord;
return UBT_AvatarSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_AvatarSizeRecordList = UBT_AvatarSizeRecordList;

});
define("UBTConnect_Utils.model$MemoryCacheResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "UBTConnect_Utils.model", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.MemoryCacheResultRecord = MemoryCacheResultRecord;

});
define("UBTConnect_Utils.model$MemoryCacheResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$MemoryCacheResultRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultRecordList = (function (_super) {
__extends(MemoryCacheResultRecordList, _super);
function MemoryCacheResultRecordList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultRecordList.itemType = UBTConnect_UtilsModel.MemoryCacheResultRecord;
return MemoryCacheResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MemoryCacheResultRecordList = MemoryCacheResultRecordList;

});
define("UBTConnect_Utils.model$Menu_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Menu_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Menu_ItemList = (function (_super) {
__extends(Menu_ItemList, _super);
function Menu_ItemList(defaults) {
_super.apply(this, arguments);
}
Menu_ItemList.itemType = UBTConnect_UtilsModel.Menu_ItemRec;
return Menu_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Menu_ItemList = Menu_ItemList;

});
define("UBTConnect_Utils.model$FileInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "UBTConnect_Utils.model", "FilePlugin.model$FileInfoRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FilePlugin"], function (exports, OutSystems, FilePluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var FileInfoRecord = (function (_super) {
__extends(FileInfoRecord, _super);
function FileInfoRecord(defaults) {
_super.apply(this, arguments);
}
FileInfoRecord.attributesToDeclare = function () {
return [
this.attr("FileInfo", "fileInfoAttr", "FileInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.FileInfoRec());
}, true, FilePluginModel.FileInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
FileInfoRecord.fromStructure = function (str) {
return new FileInfoRecord(new FileInfoRecord.RecordClass({
fileInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileInfoRecord._isAnonymousRecord = true;
FileInfoRecord.UniqueId = "cf5be720-e9e1-2ec0-2a4b-c8b9b8e044af";
FileInfoRecord.init();
return FileInfoRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.FileInfoRecord = FileInfoRecord;

});
define("UBTConnect_Utils.model$FileInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$FileInfoRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var FileInfoRecordList = (function (_super) {
__extends(FileInfoRecordList, _super);
function FileInfoRecordList(defaults) {
_super.apply(this, arguments);
}
FileInfoRecordList.itemType = UBTConnect_UtilsModel.FileInfoRecord;
return FileInfoRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.FileInfoRecordList = FileInfoRecordList;

});
define("UBTConnect_Utils.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBTConnect_Utils.model", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.itemType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ErrorList = ErrorList;

});
define("UBTConnect_Utils.model$Connect_EntityRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.Connect_EntityRecord = Connect_EntityRecord;

});
define("UBTConnect_Utils.model$Connect_Menu_ItemsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Menu_ItemsRec = (function (_super) {
__extends(Connect_Menu_ItemsRec, _super);
function Connect_Menu_ItemsRec(defaults) {
_super.apply(this, arguments);
}
Connect_Menu_ItemsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Menu_ItemsRec.fromStructure = function (str) {
return new Connect_Menu_ItemsRec(new Connect_Menu_ItemsRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_Menu_ItemsRec.init();
return Connect_Menu_ItemsRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_Menu_ItemsRec = Connect_Menu_ItemsRec;

});
define("UBTConnect_Utils.model$ImagesParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ImagesParametersRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImagesParametersRecord = (function (_super) {
__extends(ImagesParametersRecord, _super);
function ImagesParametersRecord(defaults) {
_super.apply(this, arguments);
}
ImagesParametersRecord.attributesToDeclare = function () {
return [
this.attr("ImagesParameters", "imagesParametersAttr", "ImagesParameters", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ImagesParametersRec());
}, true, UBTConnect_UtilsModel.ImagesParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
ImagesParametersRecord.fromStructure = function (str) {
return new ImagesParametersRecord(new ImagesParametersRecord.RecordClass({
imagesParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImagesParametersRecord._isAnonymousRecord = true;
ImagesParametersRecord.UniqueId = "c5e3ce2e-4244-1af1-5011-694bb7b8584e";
ImagesParametersRecord.init();
return ImagesParametersRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ImagesParametersRecord = ImagesParametersRecord;

});
define("UBTConnect_Utils.model$ImagesParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ImagesParametersRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImagesParametersRecordList = (function (_super) {
__extends(ImagesParametersRecordList, _super);
function ImagesParametersRecordList(defaults) {
_super.apply(this, arguments);
}
ImagesParametersRecordList.itemType = UBTConnect_UtilsModel.ImagesParametersRecord;
return ImagesParametersRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ImagesParametersRecordList = ImagesParametersRecordList;

});
define("UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_ContactByMessage_WrapperDataList = (function (_super) {
__extends(UI_ContactByMessage_WrapperDataList, _super);
function UI_ContactByMessage_WrapperDataList(defaults) {
_super.apply(this, arguments);
}
UI_ContactByMessage_WrapperDataList.itemType = UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec;
return UI_ContactByMessage_WrapperDataList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataList = UI_ContactByMessage_WrapperDataList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberList = (function (_super) {
__extends(Directory_UserCurrent_MemberList, _super);
function Directory_UserCurrent_MemberList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec;
return Directory_UserCurrent_MemberList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_MemberList = Directory_UserCurrent_MemberList;

});
define("UBTConnect_Utils.model$UBT_FlexBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FlexBehaviorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FlexBehaviorRecord = (function (_super) {
__extends(UBT_FlexBehaviorRecord, _super);
function UBT_FlexBehaviorRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FlexBehaviorRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FlexBehavior", "uBT_FlexBehaviorAttr", "UBT_FlexBehavior", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FlexBehaviorRec());
}, true, UBTConnectLibraryModel.UBT_FlexBehaviorRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FlexBehaviorRecord.fromStructure = function (str) {
return new UBT_FlexBehaviorRecord(new UBT_FlexBehaviorRecord.RecordClass({
uBT_FlexBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FlexBehaviorRecord._isAnonymousRecord = true;
UBT_FlexBehaviorRecord.UniqueId = "91316517-9fce-68cf-7932-c21ef4a73300";
UBT_FlexBehaviorRecord.init();
return UBT_FlexBehaviorRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_FlexBehaviorRecord = UBT_FlexBehaviorRecord;

});
define("UBTConnect_Utils.model$UBT_FlexBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_FlexBehaviorRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FlexBehaviorRecordList = (function (_super) {
__extends(UBT_FlexBehaviorRecordList, _super);
function UBT_FlexBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexBehaviorRecordList.itemType = UBTConnect_UtilsModel.UBT_FlexBehaviorRecord;
return UBT_FlexBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FlexBehaviorRecordList = UBT_FlexBehaviorRecordList;

});
define("UBTConnect_Utils.model$Share_AttributesRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Share_AttributesRec = (function (_super) {
__extends(Share_AttributesRec, _super);
function Share_AttributesRec(defaults) {
_super.apply(this, arguments);
}
Share_AttributesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Share_AttributesRec.init();
return Share_AttributesRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Share_AttributesRec = Share_AttributesRec;

});
define("UBTConnect_Utils.model$Share_AttributesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Share_AttributesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Share_AttributesList = (function (_super) {
__extends(Share_AttributesList, _super);
function Share_AttributesList(defaults) {
_super.apply(this, arguments);
}
Share_AttributesList.itemType = UBTConnect_UtilsModel.Share_AttributesRec;
return Share_AttributesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Share_AttributesList = Share_AttributesList;

});
define("UBTConnect_Utils.model$UBT_MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTConnect_Utils.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecord = (function (_super) {
__extends(UBT_MessageTypeRecord, _super);
function UBT_MessageTypeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_MessageType", "uBT_MessageTypeAttr", "UBT_MessageType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTJavaScriptUtilsModel.UBT_MessageTypeRec());
}, true, UBTJavaScriptUtilsModel.UBT_MessageTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_MessageTypeRecord.fromStructure = function (str) {
return new UBT_MessageTypeRecord(new UBT_MessageTypeRecord.RecordClass({
uBT_MessageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_MessageTypeRecord._isAnonymousRecord = true;
UBT_MessageTypeRecord.UniqueId = "39fb871d-a8eb-6e00-0e38-5ca7658159dc";
UBT_MessageTypeRecord.init();
return UBT_MessageTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_MessageTypeRecord = UBT_MessageTypeRecord;

});
define("UBTConnect_Utils.model$SearchCategory_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SearchCategory_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchCategory_ItemList = (function (_super) {
__extends(SearchCategory_ItemList, _super);
function SearchCategory_ItemList(defaults) {
_super.apply(this, arguments);
}
SearchCategory_ItemList.itemType = UBTConnect_UtilsModel.SearchCategory_ItemRec;
return SearchCategory_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchCategory_ItemList = SearchCategory_ItemList;

});
define("UBTConnect_Utils.model$LazyImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageSizeRecord = (function (_super) {
__extends(LazyImageSizeRecord, _super);
function LazyImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("LazyImageSize", "lazyImageSizeAttr", "LazyImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec());
}, true, UBTConnectLibraryModel.LazyImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
LazyImageSizeRecord.fromStructure = function (str) {
return new LazyImageSizeRecord(new LazyImageSizeRecord.RecordClass({
lazyImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LazyImageSizeRecord._isAnonymousRecord = true;
LazyImageSizeRecord.UniqueId = "4c061984-90a3-ec22-5824-8503ba6d4ff3";
LazyImageSizeRecord.init();
return LazyImageSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.LazyImageSizeRecord = LazyImageSizeRecord;

});
define("UBTConnect_Utils.model$LazyImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LazyImageSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageSizeRecordList = (function (_super) {
__extends(LazyImageSizeRecordList, _super);
function LazyImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeRecordList.itemType = UBTConnect_UtilsModel.LazyImageSizeRecord;
return LazyImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LazyImageSizeRecordList = LazyImageSizeRecordList;

});
define("UBTConnect_Utils.model$SenderList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$SenderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SenderList = (function (_super) {
__extends(SenderList, _super);
function SenderList(defaults) {
_super.apply(this, arguments);
}
SenderList.itemType = APIDomain_Directory_ISModel.SenderRec;
return SenderList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SenderList = SenderList;

});
define("UBTConnect_Utils.model$SizeOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SizeOptionsList = (function (_super) {
__extends(SizeOptionsList, _super);
function SizeOptionsList(defaults) {
_super.apply(this, arguments);
}
SizeOptionsList.itemType = UBTConnectLibraryModel.SizeOptionsRec;
return SizeOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SizeOptionsList = SizeOptionsList;

});
define("UBTConnect_Utils.model$WarningList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBTConnect_Utils.model", "CommonPlugin.model$WarningRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var WarningList = (function (_super) {
__extends(WarningList, _super);
function WarningList(defaults) {
_super.apply(this, arguments);
}
WarningList.itemType = CommonPluginModel.WarningRec;
return WarningList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.WarningList = WarningList;

});
define("UBTConnect_Utils.model$UBT_VerticalAlignRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_VerticalAlignRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignRecord = (function (_super) {
__extends(UBT_VerticalAlignRecord, _super);
function UBT_VerticalAlignRecord(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignRecord.attributesToDeclare = function () {
return [
this.attr("UBT_VerticalAlign", "uBT_VerticalAlignAttr", "UBT_VerticalAlign", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_VerticalAlignRec());
}, true, UBTConnectLibraryModel.UBT_VerticalAlignRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_VerticalAlignRecord.fromStructure = function (str) {
return new UBT_VerticalAlignRecord(new UBT_VerticalAlignRecord.RecordClass({
uBT_VerticalAlignAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_VerticalAlignRecord._isAnonymousRecord = true;
UBT_VerticalAlignRecord.UniqueId = "3f9b0d1b-e686-7544-49eb-690b722b94ea";
UBT_VerticalAlignRecord.init();
return UBT_VerticalAlignRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_VerticalAlignRecord = UBT_VerticalAlignRecord;

});
define("UBTConnect_Utils.model$DisplayOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var DisplayOptionsRecord = (function (_super) {
__extends(DisplayOptionsRecord, _super);
function DisplayOptionsRecord(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsRecord.attributesToDeclare = function () {
return [
this.attr("DisplayOptions", "displayOptionsAttr", "DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.DisplayOptionsRec());
}, true, UBTConnectLibraryModel.DisplayOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
DisplayOptionsRecord.fromStructure = function (str) {
return new DisplayOptionsRecord(new DisplayOptionsRecord.RecordClass({
displayOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DisplayOptionsRecord._isAnonymousRecord = true;
DisplayOptionsRecord.UniqueId = "de763328-7667-cb2f-9d07-694eace5c631";
DisplayOptionsRecord.init();
return DisplayOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.DisplayOptionsRecord = DisplayOptionsRecord;

});
define("UBTConnect_Utils.model$DisplayOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$DisplayOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var DisplayOptionsRecordList = (function (_super) {
__extends(DisplayOptionsRecordList, _super);
function DisplayOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsRecordList.itemType = UBTConnect_UtilsModel.DisplayOptionsRecord;
return DisplayOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.DisplayOptionsRecordList = DisplayOptionsRecordList;

});
define("UBTConnect_Utils.model$Note_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Note_ItemRecord = (function (_super) {
__extends(Note_ItemRecord, _super);
function Note_ItemRecord(defaults) {
_super.apply(this, arguments);
}
Note_ItemRecord.attributesToDeclare = function () {
return [
this.attr("Note_Item", "note_ItemAttr", "Note_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Note_ItemRec());
}, true, UBTConnectLibraryModel.Note_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
Note_ItemRecord.fromStructure = function (str) {
return new Note_ItemRecord(new Note_ItemRecord.RecordClass({
note_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Note_ItemRecord._isAnonymousRecord = true;
Note_ItemRecord.UniqueId = "40840cdc-a00c-a67b-3706-6e29081ba6ba";
Note_ItemRecord.init();
return Note_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Note_ItemRecord = Note_ItemRecord;

});
define("UBTConnect_Utils.model$PathDirectoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "UBTConnect_Utils.model", "FilePlugin.model$PathDirectoryRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FilePlugin"], function (exports, OutSystems, FilePluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PathDirectoryRecord = (function (_super) {
__extends(PathDirectoryRecord, _super);
function PathDirectoryRecord(defaults) {
_super.apply(this, arguments);
}
PathDirectoryRecord.attributesToDeclare = function () {
return [
this.attr("PathDirectory", "pathDirectoryAttr", "PathDirectory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.PathDirectoryRec());
}, true, FilePluginModel.PathDirectoryRec)
].concat(_super.attributesToDeclare.call(this));
};
PathDirectoryRecord.fromStructure = function (str) {
return new PathDirectoryRecord(new PathDirectoryRecord.RecordClass({
pathDirectoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PathDirectoryRecord._isAnonymousRecord = true;
PathDirectoryRecord.UniqueId = "40e07c31-c384-620a-749a-3b084b9943f8";
PathDirectoryRecord.init();
return PathDirectoryRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.PathDirectoryRecord = PathDirectoryRecord;

});
define("UBTConnect_Utils.model$UI_LocalityDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetailsRec = (function (_super) {
__extends(UI_LocalityDetailsRec, _super);
function UI_LocalityDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetailsRec.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
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
UI_LocalityDetailsRec.init();
return UI_LocalityDetailsRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_LocalityDetailsRec = UI_LocalityDetailsRec;

});
define("UBTConnect_Utils.model$UI_LocalityDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_LocalityDetailsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetailsList = (function (_super) {
__extends(UI_LocalityDetailsList, _super);
function UI_LocalityDetailsList(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetailsList.itemType = UBTConnect_UtilsModel.UI_LocalityDetailsRec;
return UI_LocalityDetailsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_LocalityDetailsList = UI_LocalityDetailsList;

});
define("UBTConnect_Utils.model$CacheControl_AllLocalitiesRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_LocalityDetailsList"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllLocalitiesRec = (function (_super) {
__extends(CacheControl_AllLocalitiesRec, _super);
function CacheControl_AllLocalitiesRec(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllLocalitiesRec.attributesToDeclare = function () {
return [
this.attr("LocalityList", "localityListAttr", "LocalityList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_LocalityDetailsList());
}, true, UBTConnect_UtilsModel.UI_LocalityDetailsList)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_AllLocalitiesRec.fromStructure = function (str) {
return new CacheControl_AllLocalitiesRec(new CacheControl_AllLocalitiesRec.RecordClass({
localityListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_AllLocalitiesRec.init();
return CacheControl_AllLocalitiesRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec = CacheControl_AllLocalitiesRec;

});
define("UBTConnect_Utils.model$CacheControl_AllLocalitiesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllLocalitiesRecord = (function (_super) {
__extends(CacheControl_AllLocalitiesRecord, _super);
function CacheControl_AllLocalitiesRecord(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllLocalitiesRecord.attributesToDeclare = function () {
return [
this.attr("CacheControl_AllLocalities", "cacheControl_AllLocalitiesAttr", "CacheControl_AllLocalities", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec());
}, true, UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec)
].concat(_super.attributesToDeclare.call(this));
};
CacheControl_AllLocalitiesRecord.fromStructure = function (str) {
return new CacheControl_AllLocalitiesRecord(new CacheControl_AllLocalitiesRecord.RecordClass({
cacheControl_AllLocalitiesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CacheControl_AllLocalitiesRecord._isAnonymousRecord = true;
CacheControl_AllLocalitiesRecord.UniqueId = "dcf22acc-78ab-95e4-046b-6637162e490a";
CacheControl_AllLocalitiesRecord.init();
return CacheControl_AllLocalitiesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CacheControl_AllLocalitiesRecord = CacheControl_AllLocalitiesRecord;

});
define("UBTConnect_Utils.model$CacheControl_AllLocalitiesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllLocalitiesRecordList = (function (_super) {
__extends(CacheControl_AllLocalitiesRecordList, _super);
function CacheControl_AllLocalitiesRecordList(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllLocalitiesRecordList.itemType = UBTConnect_UtilsModel.CacheControl_AllLocalitiesRecord;
return CacheControl_AllLocalitiesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_AllLocalitiesRecordList = CacheControl_AllLocalitiesRecordList;

});
define("UBTConnect_Utils.model$Espace_VersionList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$Espace_VersionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Espace_VersionList = (function (_super) {
__extends(Espace_VersionList, _super);
function Espace_VersionList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionList.itemType = ServiceCenterModel.Espace_VersionRec;
return Espace_VersionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Espace_VersionList = Espace_VersionList;

});
define("UBTConnect_Utils.model$ExtrasRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model$ExtrasRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExtrasRecord = (function (_super) {
__extends(ExtrasRecord, _super);
function ExtrasRecord(defaults) {
_super.apply(this, arguments);
}
ExtrasRecord.attributesToDeclare = function () {
return [
this.attr("Extras", "extrasAttr", "Extras", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.ExtrasRec());
}, true, Connect2_AppLauncherPluginModel.ExtrasRec)
].concat(_super.attributesToDeclare.call(this));
};
ExtrasRecord.fromStructure = function (str) {
return new ExtrasRecord(new ExtrasRecord.RecordClass({
extrasAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExtrasRecord._isAnonymousRecord = true;
ExtrasRecord.UniqueId = "a4a8de75-51f0-c077-7174-e0cca79bda91";
ExtrasRecord.init();
return ExtrasRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ExtrasRecord = ExtrasRecord;

});
define("UBTConnect_Utils.model$ExtrasRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExtrasRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExtrasRecordList = (function (_super) {
__extends(ExtrasRecordList, _super);
function ExtrasRecordList(defaults) {
_super.apply(this, arguments);
}
ExtrasRecordList.itemType = UBTConnect_UtilsModel.ExtrasRecord;
return ExtrasRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ExtrasRecordList = ExtrasRecordList;

});
define("UBTConnect_Utils.model$Connect_SearchCategoriesList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_SearchCategoriesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_SearchCategoriesList = (function (_super) {
__extends(Connect_SearchCategoriesList, _super);
function Connect_SearchCategoriesList(defaults) {
_super.apply(this, arguments);
}
Connect_SearchCategoriesList.itemType = Connect_CommonEntities_DBModel.Connect_SearchCategoriesRec;
return Connect_SearchCategoriesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_SearchCategoriesList = Connect_SearchCategoriesList;

});
define("UBTConnect_Utils.model$UBT_IconsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_IconsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_IconsList = (function (_super) {
__extends(UBT_IconsList, _super);
function UBT_IconsList(defaults) {
_super.apply(this, arguments);
}
UBT_IconsList.itemType = UBTConnectLibraryModel.UBT_IconsRec;
return UBT_IconsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_IconsList = UBT_IconsList;

});
define("UBTConnect_Utils.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBTConnect_Utils.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("UBTConnect_Utils.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.itemType = UBTConnect_UtilsModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentList = (function (_super) {
__extends(Directory_UserCurrentList, _super);
function Directory_UserCurrentList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrentRec;
return Directory_UserCurrentList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrentList = Directory_UserCurrentList;

});
define("UBTConnect_Utils.model$Connect_SearchCategoriesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_SearchCategoriesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_SearchCategoriesRecordList = (function (_super) {
__extends(Connect_SearchCategoriesRecordList, _super);
function Connect_SearchCategoriesRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_SearchCategoriesRecordList.itemType = UBTConnect_UtilsModel.Connect_SearchCategoriesRecord;
return Connect_SearchCategoriesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_SearchCategoriesRecordList = Connect_SearchCategoriesRecordList;

});
define("UBTConnect_Utils.model$RadiusOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$RadiusOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var RadiusOptionsRecordList = (function (_super) {
__extends(RadiusOptionsRecordList, _super);
function RadiusOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsRecordList.itemType = UBTConnect_UtilsModel.RadiusOptionsRecord;
return RadiusOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.RadiusOptionsRecordList = RadiusOptionsRecordList;

});
define("UBTConnect_Utils.model$Connect_BottomBar_ItemsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_BottomBar_ItemsRec = (function (_super) {
__extends(Connect_BottomBar_ItemsRec, _super);
function Connect_BottomBar_ItemsRec(defaults) {
_super.apply(this, arguments);
}
Connect_BottomBar_ItemsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_BottomBar_ItemsRec.fromStructure = function (str) {
return new Connect_BottomBar_ItemsRec(new Connect_BottomBar_ItemsRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_BottomBar_ItemsRec.init();
return Connect_BottomBar_ItemsRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_BottomBar_ItemsRec = Connect_BottomBar_ItemsRec;

});
define("UBTConnect_Utils.model$ColumnOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ColumnOptionsRecord = (function (_super) {
__extends(ColumnOptionsRecord, _super);
function ColumnOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ColumnOptions", "columnOptionsAttr", "ColumnOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColumnOptionsRec());
}, true, UBTConnectLibraryModel.ColumnOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ColumnOptionsRecord.fromStructure = function (str) {
return new ColumnOptionsRecord(new ColumnOptionsRecord.RecordClass({
columnOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColumnOptionsRecord._isAnonymousRecord = true;
ColumnOptionsRecord.UniqueId = "496d6673-ac98-746a-bcb5-762d76295284";
ColumnOptionsRecord.init();
return ColumnOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ColumnOptionsRecord = ColumnOptionsRecord;

});
define("UBTConnect_Utils.model$HeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "UBTConnect_Utils.model", "FileTransferPlugin.model$HeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FileTransferPlugin"], function (exports, OutSystems, FileTransferPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var HeaderRecord = (function (_super) {
__extends(HeaderRecord, _super);
function HeaderRecord(defaults) {
_super.apply(this, arguments);
}
HeaderRecord.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FileTransferPluginModel.HeaderRec());
}, true, FileTransferPluginModel.HeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
HeaderRecord.fromStructure = function (str) {
return new HeaderRecord(new HeaderRecord.RecordClass({
headerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HeaderRecord._isAnonymousRecord = true;
HeaderRecord.UniqueId = "9a85a264-9137-0598-52dd-56dd4c722fff";
HeaderRecord.init();
return HeaderRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.HeaderRecord = HeaderRecord;

});
define("UBTConnect_Utils.model$HeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$HeaderRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var HeaderRecordList = (function (_super) {
__extends(HeaderRecordList, _super);
function HeaderRecordList(defaults) {
_super.apply(this, arguments);
}
HeaderRecordList.itemType = UBTConnect_UtilsModel.HeaderRecord;
return HeaderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.HeaderRecordList = HeaderRecordList;

});
define("UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopUp_OverrideOptionsRecord = (function (_super) {
__extends(ContactPopUp_OverrideOptionsRecord, _super);
function ContactPopUp_OverrideOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ContactPopUp_OverrideOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ContactPopUp_OverrideOptions", "contactPopUp_OverrideOptionsAttr", "ContactPopUp_OverrideOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec());
}, true, UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopUp_OverrideOptionsRecord.fromStructure = function (str) {
return new ContactPopUp_OverrideOptionsRecord(new ContactPopUp_OverrideOptionsRecord.RecordClass({
contactPopUp_OverrideOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactPopUp_OverrideOptionsRecord._isAnonymousRecord = true;
ContactPopUp_OverrideOptionsRecord.UniqueId = "4a736fc4-fcf4-4afe-d12c-d35f91e90423";
ContactPopUp_OverrideOptionsRecord.init();
return ContactPopUp_OverrideOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRecord = ContactPopUp_OverrideOptionsRecord;

});
define("UBTConnect_Utils.model$SearchResult2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchResult2Record = (function (_super) {
__extends(SearchResult2Record, _super);
function SearchResult2Record(defaults) {
_super.apply(this, arguments);
}
SearchResult2Record.attributesToDeclare = function () {
return [
this.attr("SearchResult", "searchResultAttr", "SearchResult2", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SearchResultRec());
}, true, APIDomain_Directory_ISModel.SearchResultRec)
].concat(_super.attributesToDeclare.call(this));
};
SearchResult2Record.fromStructure = function (str) {
return new SearchResult2Record(new SearchResult2Record.RecordClass({
searchResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SearchResult2Record._isAnonymousRecord = true;
SearchResult2Record.UniqueId = "4b216680-645f-a870-125a-9289a4e38c87";
SearchResult2Record.init();
return SearchResult2Record;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SearchResult2Record = SearchResult2Record;

});
define("UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord = (function (_super) {
__extends(Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord, _super);
function Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("ExternalShareOptionId", "externalShareOptionIdAttr", "ExternalShareOptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord._isAnonymousRecord = true;
Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord.UniqueId = "4b8f60d6-6496-f9ac-95d0-449741728c9d";
Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord.init();
return Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord = Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord;

});
define("UBTConnect_Utils.model$Connect_Subscription_RegionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_Subscription_RegionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionRecord = (function (_super) {
__extends(Connect_Subscription_RegionRecord, _super);
function Connect_Subscription_RegionRecord(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Subscription_Region", "connect_Subscription_RegionAttr", "Connect_Subscription_Region", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec());
}, true, Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Subscription_RegionRecord.fromStructure = function (str) {
return new Connect_Subscription_RegionRecord(new Connect_Subscription_RegionRecord.RecordClass({
connect_Subscription_RegionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_Subscription_RegionRecord._isAnonymousRecord = true;
Connect_Subscription_RegionRecord.UniqueId = "b30e90cf-f405-3efa-584f-1492af623cf0";
Connect_Subscription_RegionRecord.init();
return Connect_Subscription_RegionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_Subscription_RegionRecord = Connect_Subscription_RegionRecord;

});
define("UBTConnect_Utils.model$Connect_Subscription_RegionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_Subscription_RegionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionRecordList = (function (_super) {
__extends(Connect_Subscription_RegionRecordList, _super);
function Connect_Subscription_RegionRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionRecordList.itemType = UBTConnect_UtilsModel.Connect_Subscription_RegionRecord;
return Connect_Subscription_RegionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_Subscription_RegionRecordList = Connect_Subscription_RegionRecordList;

});
define("UBTConnect_Utils.model$NotesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NotesList = (function (_super) {
__extends(NotesList, _super);
function NotesList(defaults) {
_super.apply(this, arguments);
}
NotesList.itemType = UBTConnectLibraryModel.NotesRec;
return NotesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.NotesList = NotesList;

});
define("UBTConnect_Utils.model$Directory_LocationDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_LocationDetailsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_LocationDetailsRecordList = (function (_super) {
__extends(Directory_LocationDetailsRecordList, _super);
function Directory_LocationDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_LocationDetailsRecordList.itemType = UBTConnect_UtilsModel.Directory_LocationDetailsRecord;
return Directory_LocationDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_LocationDetailsRecordList = Directory_LocationDetailsRecordList;

});
define("UBTConnect_Utils.model$SpacingOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SpacingOptionsList = (function (_super) {
__extends(SpacingOptionsList, _super);
function SpacingOptionsList(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsList.itemType = UBTConnectLibraryModel.SpacingOptionsRec;
return SpacingOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SpacingOptionsList = SpacingOptionsList;

});
define("UBTConnect_Utils.model$UI_ShareableObject_GenericRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.UI_ShareableObject_GenericRecord = UI_ShareableObject_GenericRecord;

});
define("UBTConnect_Utils.model$UI_ShareableObject_GenericRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_ShareableObject_GenericRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericRecordList = (function (_super) {
__extends(UI_ShareableObject_GenericRecordList, _super);
function UI_ShareableObject_GenericRecordList(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericRecordList.itemType = UBTConnect_UtilsModel.UI_ShareableObject_GenericRecord;
return UI_ShareableObject_GenericRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_ShareableObject_GenericRecordList = UI_ShareableObject_GenericRecordList;

});
define("UBTConnect_Utils.model$ExternalApp_PopUpInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalApp_PopUpInfoRecord = (function (_super) {
__extends(ExternalApp_PopUpInfoRecord, _super);
function ExternalApp_PopUpInfoRecord(defaults) {
_super.apply(this, arguments);
}
ExternalApp_PopUpInfoRecord.attributesToDeclare = function () {
return [
this.attr("ExternalApp_PopUpInfo", "externalApp_PopUpInfoAttr", "ExternalApp_PopUpInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec());
}, true, UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
ExternalApp_PopUpInfoRecord.fromStructure = function (str) {
return new ExternalApp_PopUpInfoRecord(new ExternalApp_PopUpInfoRecord.RecordClass({
externalApp_PopUpInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExternalApp_PopUpInfoRecord._isAnonymousRecord = true;
ExternalApp_PopUpInfoRecord.UniqueId = "7dcde55c-2366-162d-16be-662d6c02880b";
ExternalApp_PopUpInfoRecord.init();
return ExternalApp_PopUpInfoRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ExternalApp_PopUpInfoRecord = ExternalApp_PopUpInfoRecord;

});
define("UBTConnect_Utils.model$ExternalApp_PopUpInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalApp_PopUpInfoRecordList = (function (_super) {
__extends(ExternalApp_PopUpInfoRecordList, _super);
function ExternalApp_PopUpInfoRecordList(defaults) {
_super.apply(this, arguments);
}
ExternalApp_PopUpInfoRecordList.itemType = UBTConnect_UtilsModel.ExternalApp_PopUpInfoRecord;
return ExternalApp_PopUpInfoRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ExternalApp_PopUpInfoRecordList = ExternalApp_PopUpInfoRecordList;

});
define("UBTConnect_Utils.model$SystemPolicyTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "UBTConnect_Utils.model", "ApplicationPolicies.model$SystemPolicyTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SystemPolicyTypeRecord = (function (_super) {
__extends(SystemPolicyTypeRecord, _super);
function SystemPolicyTypeRecord(defaults) {
_super.apply(this, arguments);
}
SystemPolicyTypeRecord.attributesToDeclare = function () {
return [
this.attr("SystemPolicyType", "systemPolicyTypeAttr", "SystemPolicyType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.SystemPolicyTypeRec());
}, true, ApplicationPoliciesModel.SystemPolicyTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
SystemPolicyTypeRecord.fromStructure = function (str) {
return new SystemPolicyTypeRecord(new SystemPolicyTypeRecord.RecordClass({
systemPolicyTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SystemPolicyTypeRecord._isAnonymousRecord = true;
SystemPolicyTypeRecord.UniqueId = "8a290f91-3ca7-f5c0-89dd-8c8b37f4967e";
SystemPolicyTypeRecord.init();
return SystemPolicyTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SystemPolicyTypeRecord = SystemPolicyTypeRecord;

});
define("UBTConnect_Utils.model$SystemPolicyTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SystemPolicyTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SystemPolicyTypeRecordList = (function (_super) {
__extends(SystemPolicyTypeRecordList, _super);
function SystemPolicyTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SystemPolicyTypeRecordList.itemType = UBTConnect_UtilsModel.SystemPolicyTypeRecord;
return SystemPolicyTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SystemPolicyTypeRecordList = SystemPolicyTypeRecordList;

});
define("UBTConnect_Utils.model$Connect_BottomBar_ItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_BottomBar_ItemsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_BottomBar_ItemsRecord = (function (_super) {
__extends(Connect_BottomBar_ItemsRecord, _super);
function Connect_BottomBar_ItemsRecord(defaults) {
_super.apply(this, arguments);
}
Connect_BottomBar_ItemsRecord.attributesToDeclare = function () {
return [
this.attr("Connect_BottomBar_Items", "connect_BottomBar_ItemsAttr", "Connect_BottomBar_Items", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Connect_BottomBar_ItemsRec());
}, true, UBTConnect_UtilsModel.Connect_BottomBar_ItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_BottomBar_ItemsRecord.fromStructure = function (str) {
return new Connect_BottomBar_ItemsRecord(new Connect_BottomBar_ItemsRecord.RecordClass({
connect_BottomBar_ItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_BottomBar_ItemsRecord._isAnonymousRecord = true;
Connect_BottomBar_ItemsRecord.UniqueId = "74dcc786-852f-dac0-5260-ce611116dcc0";
Connect_BottomBar_ItemsRecord.init();
return Connect_BottomBar_ItemsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_BottomBar_ItemsRecord = Connect_BottomBar_ItemsRecord;

});
define("UBTConnect_Utils.model$Connect_BottomBar_ItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_BottomBar_ItemsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_BottomBar_ItemsRecordList = (function (_super) {
__extends(Connect_BottomBar_ItemsRecordList, _super);
function Connect_BottomBar_ItemsRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_BottomBar_ItemsRecordList.itemType = UBTConnect_UtilsModel.Connect_BottomBar_ItemsRecord;
return Connect_BottomBar_ItemsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_BottomBar_ItemsRecordList = Connect_BottomBar_ItemsRecordList;

});
define("UBTConnect_Utils.model$GetLightResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$GetLightResponseRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var GetLightResponseList = (function (_super) {
__extends(GetLightResponseList, _super);
function GetLightResponseList(defaults) {
_super.apply(this, arguments);
}
GetLightResponseList.itemType = APIDomain_Directory_ISModel.GetLightResponseRec;
return GetLightResponseList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.GetLightResponseList = GetLightResponseList;

});
define("UBTConnect_Utils.model$ImagesParametersList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ImagesParametersRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImagesParametersList = (function (_super) {
__extends(ImagesParametersList, _super);
function ImagesParametersList(defaults) {
_super.apply(this, arguments);
}
ImagesParametersList.itemType = UBTConnect_UtilsModel.ImagesParametersRec;
return ImagesParametersList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ImagesParametersList = ImagesParametersList;

});
define("UBTConnect_Utils.model$Connect_CacheTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_CacheTypeRec = (function (_super) {
__extends(Connect_CacheTypeRec, _super);
function Connect_CacheTypeRec(defaults) {
_super.apply(this, arguments);
}
Connect_CacheTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_CacheTypeRec.fromStructure = function (str) {
return new Connect_CacheTypeRec(new Connect_CacheTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_CacheTypeRec.init();
return Connect_CacheTypeRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_CacheTypeRec = Connect_CacheTypeRec;

});
define("UBTConnect_Utils.model$Espace_VersionEspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$Espace_VersionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter", "ServiceCenter.model$EspaceRec"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.Espace_VersionEspaceRecord = Espace_VersionEspaceRecord;

});
define("UBTConnect_Utils.model$PathTypeList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "UBTConnect_Utils.model", "FilePlugin.model$PathTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FilePlugin"], function (exports, OutSystems, FilePluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PathTypeList = (function (_super) {
__extends(PathTypeList, _super);
function PathTypeList(defaults) {
_super.apply(this, arguments);
}
PathTypeList.itemType = FilePluginModel.PathTypeRec;
return PathTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PathTypeList = PathTypeList;

});
define("UBTConnect_Utils.model$Connect_Menu_ItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_Menu_ItemsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Menu_ItemsRecord = (function (_super) {
__extends(Connect_Menu_ItemsRecord, _super);
function Connect_Menu_ItemsRecord(defaults) {
_super.apply(this, arguments);
}
Connect_Menu_ItemsRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Menu_Items", "connect_Menu_ItemsAttr", "Connect_Menu_Items", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Connect_Menu_ItemsRec());
}, true, UBTConnect_UtilsModel.Connect_Menu_ItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Menu_ItemsRecord.fromStructure = function (str) {
return new Connect_Menu_ItemsRecord(new Connect_Menu_ItemsRecord.RecordClass({
connect_Menu_ItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_Menu_ItemsRecord._isAnonymousRecord = true;
Connect_Menu_ItemsRecord.UniqueId = "a344a8ae-1d1e-5dc6-31f7-117cee4ebcfe";
Connect_Menu_ItemsRecord.init();
return Connect_Menu_ItemsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_Menu_ItemsRecord = Connect_Menu_ItemsRecord;

});
define("UBTConnect_Utils.model$Connect_Menu_ItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_Menu_ItemsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Menu_ItemsRecordList = (function (_super) {
__extends(Connect_Menu_ItemsRecordList, _super);
function Connect_Menu_ItemsRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_Menu_ItemsRecordList.itemType = UBTConnect_UtilsModel.Connect_Menu_ItemsRecord;
return Connect_Menu_ItemsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_Menu_ItemsRecordList = Connect_Menu_ItemsRecordList;

});
define("UBTConnect_Utils.model$CacheControl_AllSubdivionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllSubdivionsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllSubdivionsList = (function (_super) {
__extends(CacheControl_AllSubdivionsList, _super);
function CacheControl_AllSubdivionsList(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllSubdivionsList.itemType = UBTConnect_UtilsModel.CacheControl_AllSubdivionsRec;
return CacheControl_AllSubdivionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_AllSubdivionsList = CacheControl_AllSubdivionsList;

});
define("UBTConnect_Utils.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model$PositionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUI_2_23Model.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PositionList = PositionList;

});
define("UBTConnect_Utils.model$Connect_CacheTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_CacheTypeRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_CacheTypeRecord = (function (_super) {
__extends(Connect_CacheTypeRecord, _super);
function Connect_CacheTypeRecord(defaults) {
_super.apply(this, arguments);
}
Connect_CacheTypeRecord.attributesToDeclare = function () {
return [
this.attr("Connect_CacheType", "connect_CacheTypeAttr", "Connect_CacheType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Connect_CacheTypeRec());
}, true, UBTConnect_UtilsModel.Connect_CacheTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_CacheTypeRecord.fromStructure = function (str) {
return new Connect_CacheTypeRecord(new Connect_CacheTypeRecord.RecordClass({
connect_CacheTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_CacheTypeRecord._isAnonymousRecord = true;
Connect_CacheTypeRecord.UniqueId = "57c38537-e4b7-e154-ac26-c07f6a995111";
Connect_CacheTypeRecord.init();
return Connect_CacheTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_CacheTypeRecord = Connect_CacheTypeRecord;

});
define("UBTConnect_Utils.model$AndroidOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$AndroidOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AndroidOptionsList = (function (_super) {
__extends(AndroidOptionsList, _super);
function AndroidOptionsList(defaults) {
_super.apply(this, arguments);
}
AndroidOptionsList.itemType = InAppBrowserPluginModel.AndroidOptionsRec;
return AndroidOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AndroidOptionsList = AndroidOptionsList;

});
define("UBTConnect_Utils.model$SearchResult2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SearchResult2Record"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchResult2RecordList = (function (_super) {
__extends(SearchResult2RecordList, _super);
function SearchResult2RecordList(defaults) {
_super.apply(this, arguments);
}
SearchResult2RecordList.itemType = UBTConnect_UtilsModel.SearchResult2Record;
return SearchResult2RecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchResult2RecordList = SearchResult2RecordList;

});
define("UBTConnect_Utils.model$UI_Note_AddedRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model", "UBTConnect_Utils.model", "Connect_Notes_CS.model$UI_Note_AddedRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Notes_CS"], function (exports, OutSystems, Connect_Notes_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Note_AddedRecord = (function (_super) {
__extends(UI_Note_AddedRecord, _super);
function UI_Note_AddedRecord(defaults) {
_super.apply(this, arguments);
}
UI_Note_AddedRecord.attributesToDeclare = function () {
return [
this.attr("UI_Note_Added", "uI_Note_AddedAttr", "UI_Note_Added", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.UI_Note_AddedRec());
}, true, Connect_Notes_CSModel.UI_Note_AddedRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Note_AddedRecord.fromStructure = function (str) {
return new UI_Note_AddedRecord(new UI_Note_AddedRecord.RecordClass({
uI_Note_AddedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_Note_AddedRecord._isAnonymousRecord = true;
UI_Note_AddedRecord.UniqueId = "f1c4cc0b-49e4-755d-6a15-ece4438b631e";
UI_Note_AddedRecord.init();
return UI_Note_AddedRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_Note_AddedRecord = UI_Note_AddedRecord;

});
define("UBTConnect_Utils.model$UI_Note_AddedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_Note_AddedRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Note_AddedRecordList = (function (_super) {
__extends(UI_Note_AddedRecordList, _super);
function UI_Note_AddedRecordList(defaults) {
_super.apply(this, arguments);
}
UI_Note_AddedRecordList.itemType = UBTConnect_UtilsModel.UI_Note_AddedRecord;
return UI_Note_AddedRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_Note_AddedRecordList = UI_Note_AddedRecordList;

});
define("UBTConnect_Utils.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model$ShapeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUI_2_23Model.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ShapeList = ShapeList;

});
define("UBTConnect_Utils.model$LauncherParametersList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LauncherParametersList = (function (_super) {
__extends(LauncherParametersList, _super);
function LauncherParametersList(defaults) {
_super.apply(this, arguments);
}
LauncherParametersList.itemType = Connect2_AppLauncherPluginModel.LauncherParametersRec;
return LauncherParametersList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LauncherParametersList = LauncherParametersList;

});
define("UBTConnect_Utils.model$InlineIconRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var InlineIconRecord = (function (_super) {
__extends(InlineIconRecord, _super);
function InlineIconRecord(defaults) {
_super.apply(this, arguments);
}
InlineIconRecord.attributesToDeclare = function () {
return [
this.attr("InlineIcon", "inlineIconAttr", "InlineIcon", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec());
}, true, UBTConnectLibraryModel.InlineIconRec)
].concat(_super.attributesToDeclare.call(this));
};
InlineIconRecord.fromStructure = function (str) {
return new InlineIconRecord(new InlineIconRecord.RecordClass({
inlineIconAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InlineIconRecord._isAnonymousRecord = true;
InlineIconRecord.UniqueId = "c18918d2-8929-aa33-c454-b4c0f0c15d1c";
InlineIconRecord.init();
return InlineIconRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.InlineIconRecord = InlineIconRecord;

});
define("UBTConnect_Utils.model$InlineIconRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$InlineIconRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var InlineIconRecordList = (function (_super) {
__extends(InlineIconRecordList, _super);
function InlineIconRecordList(defaults) {
_super.apply(this, arguments);
}
InlineIconRecordList.itemType = UBTConnect_UtilsModel.InlineIconRecord;
return InlineIconRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.InlineIconRecordList = InlineIconRecordList;

});
define("UBTConnect_Utils.model$Type_ShareObjectList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectList = (function (_super) {
__extends(Type_ShareObjectList, _super);
function Type_ShareObjectList(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectList.itemType = Connect2_Sharing_CSModel.Type_ShareObjectRec;
return Type_ShareObjectList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_ShareObjectList = Type_ShareObjectList;

});
define("UBTConnect_Utils.model$UBT_FlexBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FlexBehaviorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FlexBehaviorList = (function (_super) {
__extends(UBT_FlexBehaviorList, _super);
function UBT_FlexBehaviorList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexBehaviorList.itemType = UBTConnectLibraryModel.UBT_FlexBehaviorRec;
return UBT_FlexBehaviorList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FlexBehaviorList = UBT_FlexBehaviorList;

});
define("UBTConnect_Utils.model$NoteActionTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$NoteActionTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NoteActionTypeList = (function (_super) {
__extends(NoteActionTypeList, _super);
function NoteActionTypeList(defaults) {
_super.apply(this, arguments);
}
NoteActionTypeList.itemType = Connect_CommonEntities_DBModel.NoteActionTypeRec;
return NoteActionTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.NoteActionTypeList = NoteActionTypeList;

});
define("UBTConnect_Utils.model$TargetRecord", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$TargetRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TargetRecord = (function (_super) {
__extends(TargetRecord, _super);
function TargetRecord(defaults) {
_super.apply(this, arguments);
}
TargetRecord.attributesToDeclare = function () {
return [
this.attr("Target", "targetAttr", "Target", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new InAppBrowserPluginModel.TargetRec());
}, true, InAppBrowserPluginModel.TargetRec)
].concat(_super.attributesToDeclare.call(this));
};
TargetRecord.fromStructure = function (str) {
return new TargetRecord(new TargetRecord.RecordClass({
targetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TargetRecord._isAnonymousRecord = true;
TargetRecord.UniqueId = "f83c2a2d-e7f3-9c90-b767-e99968f2cc70";
TargetRecord.init();
return TargetRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.TargetRecord = TargetRecord;

});
define("UBTConnect_Utils.model$TargetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$TargetRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TargetRecordList = (function (_super) {
__extends(TargetRecordList, _super);
function TargetRecordList(defaults) {
_super.apply(this, arguments);
}
TargetRecordList.itemType = UBTConnect_UtilsModel.TargetRecord;
return TargetRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TargetRecordList = TargetRecordList;

});
define("UBTConnect_Utils.model$SearchInputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SearchInputRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchInputRecordList = (function (_super) {
__extends(SearchInputRecordList, _super);
function SearchInputRecordList(defaults) {
_super.apply(this, arguments);
}
SearchInputRecordList.itemType = UBTConnect_UtilsModel.SearchInputRecord;
return SearchInputRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchInputRecordList = SearchInputRecordList;

});
define("UBTConnect_Utils.model$UI_HouseholdMemberList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "UBTConnect_Utils.model", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberList = (function (_super) {
__extends(UI_HouseholdMemberList, _super);
function UI_HouseholdMemberList(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberList.itemType = Connect_Household_CSModel.UI_HouseholdMemberRec;
return UI_HouseholdMemberList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_HouseholdMemberList = UI_HouseholdMemberList;

});
define("UBTConnect_Utils.model$UBT_SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_SizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_SizeRecord = (function (_super) {
__extends(UBT_SizeRecord, _super);
function UBT_SizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_SizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Size", "uBT_SizeAttr", "UBT_Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_SizeRec());
}, true, UBTConnectLibraryModel.UBT_SizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_SizeRecord.fromStructure = function (str) {
return new UBT_SizeRecord(new UBT_SizeRecord.RecordClass({
uBT_SizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_SizeRecord._isAnonymousRecord = true;
UBT_SizeRecord.UniqueId = "d61a9bac-e6f1-22f3-9bd7-e1f359bbbea3";
UBT_SizeRecord.init();
return UBT_SizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_SizeRecord = UBT_SizeRecord;

});
define("UBTConnect_Utils.model$UBT_SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_SizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_SizeRecordList = (function (_super) {
__extends(UBT_SizeRecordList, _super);
function UBT_SizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_SizeRecordList.itemType = UBTConnect_UtilsModel.UBT_SizeRecord;
return UBT_SizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_SizeRecordList = UBT_SizeRecordList;

});
define("UBTConnect_Utils.model$Type_ExternalShareOptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model$Type_ExternalShareOptionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ExternalShareOptionRecord = (function (_super) {
__extends(Type_ExternalShareOptionRecord, _super);
function Type_ExternalShareOptionRecord(defaults) {
_super.apply(this, arguments);
}
Type_ExternalShareOptionRecord.attributesToDeclare = function () {
return [
this.attr("Type_ExternalShareOption", "type_ExternalShareOptionAttr", "Type_ExternalShareOption", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.Type_ExternalShareOptionRec());
}, true, Connect2_Sharing_CSModel.Type_ExternalShareOptionRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_ExternalShareOptionRecord.fromStructure = function (str) {
return new Type_ExternalShareOptionRecord(new Type_ExternalShareOptionRecord.RecordClass({
type_ExternalShareOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_ExternalShareOptionRecord._isAnonymousRecord = true;
Type_ExternalShareOptionRecord.UniqueId = "62cdf342-485b-5ba7-ecdc-c7d0f9d9ad49";
Type_ExternalShareOptionRecord.init();
return Type_ExternalShareOptionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Type_ExternalShareOptionRecord = Type_ExternalShareOptionRecord;

});
define("UBTConnect_Utils.model$ContactByMessagePopupDataRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByMessagePopupDataRec = (function (_super) {
__extends(ContactByMessagePopupDataRec, _super);
function ContactByMessagePopupDataRec(defaults) {
_super.apply(this, arguments);
}
ContactByMessagePopupDataRec.attributesToDeclare = function () {
return [
this.attr("ContactPopupData", "contactPopupDataAttr", "ContactPopupData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
}, true, UBTConnect_UtilsModel.ContactPopupDataRec), 
this.attr("ShowEmail", "showEmailAttr", "ShowEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowWhatsapp", "showWhatsappAttr", "ShowWhatsapp", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowSignal", "showSignalAttr", "ShowSignal", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowCall", "showCallAttr", "ShowCall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactByMessagePopupDataRec.init();
return ContactByMessagePopupDataRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactByMessagePopupDataRec = ContactByMessagePopupDataRec;

});
define("UBTConnect_Utils.model$ContactByMessagePopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactByMessagePopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByMessagePopupDataList = (function (_super) {
__extends(ContactByMessagePopupDataList, _super);
function ContactByMessagePopupDataList(defaults) {
_super.apply(this, arguments);
}
ContactByMessagePopupDataList.itemType = UBTConnect_UtilsModel.ContactByMessagePopupDataRec;
return ContactByMessagePopupDataList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactByMessagePopupDataList = ContactByMessagePopupDataList;

});
define("UBTConnect_Utils.model$BackgroundImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BackgroundImageList = (function (_super) {
__extends(BackgroundImageList, _super);
function BackgroundImageList(defaults) {
_super.apply(this, arguments);
}
BackgroundImageList.itemType = UBTConnectLibraryModel.BackgroundImageRec;
return BackgroundImageList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BackgroundImageList = BackgroundImageList;

});
define("UBTConnect_Utils.model$EspaceList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$EspaceRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var EspaceList = (function (_super) {
__extends(EspaceList, _super);
function EspaceList(defaults) {
_super.apply(this, arguments);
}
EspaceList.itemType = ServiceCenterModel.EspaceRec;
return EspaceList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.EspaceList = EspaceList;

});
define("UBTConnect_Utils.model$UBT_FontWeightList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FontWeightRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FontWeightList = (function (_super) {
__extends(UBT_FontWeightList, _super);
function UBT_FontWeightList(defaults) {
_super.apply(this, arguments);
}
UBT_FontWeightList.itemType = UBTConnectLibraryModel.UBT_FontWeightRec;
return UBT_FontWeightList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FontWeightList = UBT_FontWeightList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_GeographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecord = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecord, _super);
function Directory_UserCurrent_GeographyRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Geography", "directory_UserCurrent_GeographyAttr", "Directory_UserCurrent_Geography", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_GeographyRecord.fromStructure = function (str) {
return new Directory_UserCurrent_GeographyRecord(new Directory_UserCurrent_GeographyRecord.RecordClass({
directory_UserCurrent_GeographyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_GeographyRecord._isAnonymousRecord = true;
Directory_UserCurrent_GeographyRecord.UniqueId = "66b448fa-1897-d2e2-a7fa-cc7c1440b306";
Directory_UserCurrent_GeographyRecord.init();
return Directory_UserCurrent_GeographyRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_UserCurrent_GeographyRecord = Directory_UserCurrent_GeographyRecord;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecord = (function (_super) {
__extends(Directory_UserCurrent_MemberRecord, _super);
function Directory_UserCurrent_MemberRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent_Member", "directory_UserCurrent_MemberAttr", "Directory_UserCurrent_Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrent_MemberRecord.fromStructure = function (str) {
return new Directory_UserCurrent_MemberRecord(new Directory_UserCurrent_MemberRecord.RecordClass({
directory_UserCurrent_MemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrent_MemberRecord._isAnonymousRecord = true;
Directory_UserCurrent_MemberRecord.UniqueId = "6d54e593-baa9-6db1-7764-3f7f0e4e3daf";
Directory_UserCurrent_MemberRecord.init();
return Directory_UserCurrent_MemberRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_UserCurrent_MemberRecord = Directory_UserCurrent_MemberRecord;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_UserCurrent_MemberRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_MemberRecordList = (function (_super) {
__extends(Directory_UserCurrent_MemberRecordList, _super);
function Directory_UserCurrent_MemberRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_MemberRecordList.itemType = UBTConnect_UtilsModel.Directory_UserCurrent_MemberRecord;
return Directory_UserCurrent_MemberRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_MemberRecordList = Directory_UserCurrent_MemberRecordList;

});
define("UBTConnect_Utils.model$Directory_PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecord = (function (_super) {
__extends(Directory_PhotoRecord, _super);
function Directory_PhotoRecord(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Photo", "directory_PhotoAttr", "Directory_Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_PhotoRec());
}, true, APIDomain_Directory_ISModel.Directory_PhotoRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_PhotoRecord.fromStructure = function (str) {
return new Directory_PhotoRecord(new Directory_PhotoRecord.RecordClass({
directory_PhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_PhotoRecord._isAnonymousRecord = true;
Directory_PhotoRecord.UniqueId = "e43a19ea-a4bc-4b65-a43c-963635eddccc";
Directory_PhotoRecord.init();
return Directory_PhotoRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_PhotoRecord = Directory_PhotoRecord;

});
define("UBTConnect_Utils.model$Directory_PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_PhotoRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_PhotoRecordList = (function (_super) {
__extends(Directory_PhotoRecordList, _super);
function Directory_PhotoRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoRecordList.itemType = UBTConnect_UtilsModel.Directory_PhotoRecord;
return Directory_PhotoRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_PhotoRecordList = Directory_PhotoRecordList;

});
define("UBTConnect_Utils.model$Connect_CacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_CacheTypeRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_CacheTypeList = (function (_super) {
__extends(Connect_CacheTypeList, _super);
function Connect_CacheTypeList(defaults) {
_super.apply(this, arguments);
}
Connect_CacheTypeList.itemType = UBTConnect_UtilsModel.Connect_CacheTypeRec;
return Connect_CacheTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_CacheTypeList = Connect_CacheTypeList;

});
define("UBTConnect_Utils.model$UBT_ButtonTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ButtonTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ButtonTypeList = (function (_super) {
__extends(UBT_ButtonTypeList, _super);
function UBT_ButtonTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonTypeList.itemType = UBTConnectLibraryModel.UBT_ButtonTypeRec;
return UBT_ButtonTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ButtonTypeList = UBT_ButtonTypeList;

});
define("UBTConnect_Utils.model$Directory_CoordinatesRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_CoordinatesRecord = (function (_super) {
__extends(Directory_CoordinatesRecord, _super);
function Directory_CoordinatesRecord(defaults) {
_super.apply(this, arguments);
}
Directory_CoordinatesRecord.attributesToDeclare = function () {
return [
this.attr("Directory_Coordinates", "directory_CoordinatesAttr", "Directory_Coordinates", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CoordinatesRec());
}, true, APIDomain_Directory_ISModel.Directory_CoordinatesRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_CoordinatesRecord.fromStructure = function (str) {
return new Directory_CoordinatesRecord(new Directory_CoordinatesRecord.RecordClass({
directory_CoordinatesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_CoordinatesRecord._isAnonymousRecord = true;
Directory_CoordinatesRecord.UniqueId = "ea75a8c2-2f01-b90c-ea03-497e94b45b3c";
Directory_CoordinatesRecord.init();
return Directory_CoordinatesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_CoordinatesRecord = Directory_CoordinatesRecord;

});
define("UBTConnect_Utils.model$Directory_CoordinatesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_CoordinatesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_CoordinatesRecordList = (function (_super) {
__extends(Directory_CoordinatesRecordList, _super);
function Directory_CoordinatesRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_CoordinatesRecordList.itemType = UBTConnect_UtilsModel.Directory_CoordinatesRecord;
return Directory_CoordinatesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_CoordinatesRecordList = Directory_CoordinatesRecordList;

});
define("UBTConnect_Utils.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBTConnect_Utils.model", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.ErrorRecord = ErrorRecord;

});
define("UBTConnect_Utils.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ErrorRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.itemType = UBTConnect_UtilsModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ErrorRecordList = ErrorRecordList;

});
define("UBTConnect_Utils.model$CDN4Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$CDN4Rec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CDN4Record = (function (_super) {
__extends(CDN4Record, _super);
function CDN4Record(defaults) {
_super.apply(this, arguments);
}
CDN4Record.attributesToDeclare = function () {
return [
this.attr("CDN4", "cDN4Attr", "CDN4", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDN4Rec());
}, true, APIDomain_Directory_ISModel.CDN4Rec)
].concat(_super.attributesToDeclare.call(this));
};
CDN4Record.fromStructure = function (str) {
return new CDN4Record(new CDN4Record.RecordClass({
cDN4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CDN4Record._isAnonymousRecord = true;
CDN4Record.UniqueId = "6a3f81b4-84b5-b27c-348d-ae4c32d9230f";
CDN4Record.init();
return CDN4Record;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.CDN4Record = CDN4Record;

});
define("UBTConnect_Utils.model$ActionsMenuEnableOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionsMenuEnableOptionsList = (function (_super) {
__extends(ActionsMenuEnableOptionsList, _super);
function ActionsMenuEnableOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuEnableOptionsList.itemType = UBTConnectLibraryModel.ActionsMenuEnableOptionsRec;
return ActionsMenuEnableOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ActionsMenuEnableOptionsList = ActionsMenuEnableOptionsList;

});
define("UBTConnect_Utils.model$Directory_CoordinatesList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_CoordinatesList = (function (_super) {
__extends(Directory_CoordinatesList, _super);
function Directory_CoordinatesList(defaults) {
_super.apply(this, arguments);
}
Directory_CoordinatesList.itemType = APIDomain_Directory_ISModel.Directory_CoordinatesRec;
return Directory_CoordinatesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_CoordinatesList = Directory_CoordinatesList;

});
define("UBTConnect_Utils.model$UBT_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_VisibilityRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_VisibilityList = (function (_super) {
__extends(UBT_VisibilityList, _super);
function UBT_VisibilityList(defaults) {
_super.apply(this, arguments);
}
UBT_VisibilityList.itemType = UBTConnectLibraryModel.UBT_VisibilityRec;
return UBT_VisibilityList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_VisibilityList = UBT_VisibilityList;

});
define("UBTConnect_Utils.model$ActionsMenuOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsRecord = (function (_super) {
__extends(ActionsMenuOptionsRecord, _super);
function ActionsMenuOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ActionsMenuOptions", "actionsMenuOptionsAttr", "ActionsMenuOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuOptionsRec());
}, true, UBTConnectLibraryModel.ActionsMenuOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionsMenuOptionsRecord.fromStructure = function (str) {
return new ActionsMenuOptionsRecord(new ActionsMenuOptionsRecord.RecordClass({
actionsMenuOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionsMenuOptionsRecord._isAnonymousRecord = true;
ActionsMenuOptionsRecord.UniqueId = "6e1fc01f-5ce9-a5aa-34e8-00543b0e34e2";
ActionsMenuOptionsRecord.init();
return ActionsMenuOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ActionsMenuOptionsRecord = ActionsMenuOptionsRecord;

});
define("UBTConnect_Utils.model$LazyImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LazyImageRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageList = (function (_super) {
__extends(LazyImageList, _super);
function LazyImageList(defaults) {
_super.apply(this, arguments);
}
LazyImageList.itemType = UBTConnect_UtilsModel.LazyImageRec;
return LazyImageList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LazyImageList = LazyImageList;

});
define("UBTConnect_Utils.model$ExternalAppPackageNameRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalAppPackageNameRec = (function (_super) {
__extends(ExternalAppPackageNameRec, _super);
function ExternalAppPackageNameRec(defaults) {
_super.apply(this, arguments);
}
ExternalAppPackageNameRec.attributesToDeclare = function () {
return [
this.attr("Whatsapp", "whatsappAttr", "Whatsapp", false, false, OS.DataTypes.DataTypes.Text, function () {
return "com.whatsapp";
}, true), 
this.attr("Signal", "signalAttr", "Signal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "org.thoughtcrime.securesms";
}, true), 
this.attr("Outlook", "outlookAttr", "Outlook", false, false, OS.DataTypes.DataTypes.Text, function () {
return "com.microsoft.office.outlook";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExternalAppPackageNameRec.init();
return ExternalAppPackageNameRec;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ExternalAppPackageNameRec = ExternalAppPackageNameRec;

});
define("UBTConnect_Utils.model$SearchCategory_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SearchCategory_ItemRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchCategory_ItemRecordList = (function (_super) {
__extends(SearchCategory_ItemRecordList, _super);
function SearchCategory_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
SearchCategory_ItemRecordList.itemType = UBTConnect_UtilsModel.SearchCategory_ItemRecord;
return SearchCategory_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchCategory_ItemRecordList = SearchCategory_ItemRecordList;

});
define("UBTConnect_Utils.model$Type_ShareObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.Type_ShareObjectRecord = Type_ShareObjectRecord;

});
define("UBTConnect_Utils.model$BulkSignedImageResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BulkSignedImageResultRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BulkSignedImageResultRecordList = (function (_super) {
__extends(BulkSignedImageResultRecordList, _super);
function BulkSignedImageResultRecordList(defaults) {
_super.apply(this, arguments);
}
BulkSignedImageResultRecordList.itemType = UBTConnect_UtilsModel.BulkSignedImageResultRecord;
return BulkSignedImageResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BulkSignedImageResultRecordList = BulkSignedImageResultRecordList;

});
define("UBTConnect_Utils.model$TextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextTextTextRecord = (function (_super) {
__extends(TextTextTextRecord, _super);
function TextTextTextRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextRecord.attributesToDeclare = function () {
return [
this.attr("CacheKey", "cacheKeyAttr", "CacheKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextRecord._isAnonymousRecord = true;
TextTextTextRecord.UniqueId = "e5932bd1-112d-f3d0-4655-a551a317a6aa";
TextTextTextRecord.init();
return TextTextTextRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.TextTextTextRecord = TextTextTextRecord;

});
define("UBTConnect_Utils.model$TextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$TextTextTextRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextTextTextRecordList = (function (_super) {
__extends(TextTextTextRecordList, _super);
function TextTextTextRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextTextRecordList.itemType = UBTConnect_UtilsModel.TextTextTextRecord;
return TextTextTextRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TextTextTextRecordList = TextTextTextRecordList;

});
define("UBTConnect_Utils.model$PathDirectoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PathDirectoryRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PathDirectoryRecordList = (function (_super) {
__extends(PathDirectoryRecordList, _super);
function PathDirectoryRecordList(defaults) {
_super.apply(this, arguments);
}
PathDirectoryRecordList.itemType = UBTConnect_UtilsModel.PathDirectoryRecord;
return PathDirectoryRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PathDirectoryRecordList = PathDirectoryRecordList;

});
define("UBTConnect_Utils.model$Connect_ApplicationsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_ApplicationsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_ApplicationsRecord = (function (_super) {
__extends(Connect_ApplicationsRecord, _super);
function Connect_ApplicationsRecord(defaults) {
_super.apply(this, arguments);
}
Connect_ApplicationsRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Applications", "connect_ApplicationsAttr", "Connect_Applications", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_ApplicationsRec());
}, true, Connect_CommonEntities_DBModel.Connect_ApplicationsRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_ApplicationsRecord.fromStructure = function (str) {
return new Connect_ApplicationsRecord(new Connect_ApplicationsRecord.RecordClass({
connect_ApplicationsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_ApplicationsRecord._isAnonymousRecord = true;
Connect_ApplicationsRecord.UniqueId = "73a19815-5d94-b151-fbb8-335efa825733";
Connect_ApplicationsRecord.init();
return Connect_ApplicationsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_ApplicationsRecord = Connect_ApplicationsRecord;

});
define("UBTConnect_Utils.model$BackgroundOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsRecord = (function (_super) {
__extends(BackgroundOptionsRecord, _super);
function BackgroundOptionsRecord(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsRecord.attributesToDeclare = function () {
return [
this.attr("BackgroundOptions", "backgroundOptionsAttr", "BackgroundOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundOptionsRec());
}, true, UBTConnectLibraryModel.BackgroundOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BackgroundOptionsRecord.fromStructure = function (str) {
return new BackgroundOptionsRecord(new BackgroundOptionsRecord.RecordClass({
backgroundOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BackgroundOptionsRecord._isAnonymousRecord = true;
BackgroundOptionsRecord.UniqueId = "8336cc9d-cd2e-7526-b001-3e8d028c81a3";
BackgroundOptionsRecord.init();
return BackgroundOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.BackgroundOptionsRecord = BackgroundOptionsRecord;

});
define("UBTConnect_Utils.model$BackgroundOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BackgroundOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsRecordList = (function (_super) {
__extends(BackgroundOptionsRecordList, _super);
function BackgroundOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsRecordList.itemType = UBTConnect_UtilsModel.BackgroundOptionsRecord;
return BackgroundOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BackgroundOptionsRecordList = BackgroundOptionsRecordList;

});
define("UBTConnect_Utils.model$SearchResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model", "UBTConnect_Utils.model", "Connect_Search_CS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Search_CS"], function (exports, OutSystems, Connect_Search_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchResultRecord = (function (_super) {
__extends(SearchResultRecord, _super);
function SearchResultRecord(defaults) {
_super.apply(this, arguments);
}
SearchResultRecord.attributesToDeclare = function () {
return [
this.attr("SearchResult", "searchResultAttr", "SearchResult", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Search_CSModel.SearchResultRec());
}, true, Connect_Search_CSModel.SearchResultRec)
].concat(_super.attributesToDeclare.call(this));
};
SearchResultRecord.fromStructure = function (str) {
return new SearchResultRecord(new SearchResultRecord.RecordClass({
searchResultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SearchResultRecord._isAnonymousRecord = true;
SearchResultRecord.UniqueId = "74dd7170-614c-350f-4a06-27002b400f27";
SearchResultRecord.init();
return SearchResultRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SearchResultRecord = SearchResultRecord;

});
define("UBTConnect_Utils.model$CacheControl_AllLocalitiesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllLocalitiesList = (function (_super) {
__extends(CacheControl_AllLocalitiesList, _super);
function CacheControl_AllLocalitiesList(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllLocalitiesList.itemType = UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec;
return CacheControl_AllLocalitiesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_AllLocalitiesList = CacheControl_AllLocalitiesList;

});
define("UBTConnect_Utils.model$ContactPopupButtonRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupButtonRecord = (function (_super) {
__extends(ContactPopupButtonRecord, _super);
function ContactPopupButtonRecord(defaults) {
_super.apply(this, arguments);
}
ContactPopupButtonRecord.attributesToDeclare = function () {
return [
this.attr("ContactPopupButton", "contactPopupButtonAttr", "ContactPopupButton", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonRec());
}, true, UBTConnect_UtilsModel.ContactPopupButtonRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactPopupButtonRecord.fromStructure = function (str) {
return new ContactPopupButtonRecord(new ContactPopupButtonRecord.RecordClass({
contactPopupButtonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactPopupButtonRecord._isAnonymousRecord = true;
ContactPopupButtonRecord.UniqueId = "d9433993-6812-6419-1875-ea7d6ef1d178";
ContactPopupButtonRecord.init();
return ContactPopupButtonRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactPopupButtonRecord = ContactPopupButtonRecord;

});
define("UBTConnect_Utils.model$ContactPopupButtonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupButtonRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupButtonRecordList = (function (_super) {
__extends(ContactPopupButtonRecordList, _super);
function ContactPopupButtonRecordList(defaults) {
_super.apply(this, arguments);
}
ContactPopupButtonRecordList.itemType = UBTConnect_UtilsModel.ContactPopupButtonRecord;
return ContactPopupButtonRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopupButtonRecordList = ContactPopupButtonRecordList;

});
define("UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList = (function (_super) {
__extends(Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList, _super);
function Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList.itemType = UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecord;
return Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList = Type_ExternalShareOptionIdentifierTextUBT_IconsIdentifierRecordList;

});
define("UBTConnect_Utils.model$ImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$ImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImageSizeRecord = (function (_super) {
__extends(ImageSizeRecord, _super);
function ImageSizeRecord(defaults) {
_super.apply(this, arguments);
}
ImageSizeRecord.attributesToDeclare = function () {
return [
this.attr("ImageSize", "imageSizeAttr", "ImageSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.ImageSizeRec());
}, true, Connect_CommonEntities_DBModel.ImageSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageSizeRecord.fromStructure = function (str) {
return new ImageSizeRecord(new ImageSizeRecord.RecordClass({
imageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageSizeRecord._isAnonymousRecord = true;
ImageSizeRecord.UniqueId = "75e61112-d52d-9f7a-c010-240bb39f50eb";
ImageSizeRecord.init();
return ImageSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ImageSizeRecord = ImageSizeRecord;

});
define("UBTConnect_Utils.model$UBT_VerticalAlignRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_VerticalAlignRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignRecordList = (function (_super) {
__extends(UBT_VerticalAlignRecordList, _super);
function UBT_VerticalAlignRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignRecordList.itemType = UBTConnect_UtilsModel.UBT_VerticalAlignRecord;
return UBT_VerticalAlignRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_VerticalAlignRecordList = UBT_VerticalAlignRecordList;

});
define("UBTConnect_Utils.model$FileInfoList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "UBTConnect_Utils.model", "FilePlugin.model$FileInfoRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FilePlugin"], function (exports, OutSystems, FilePluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var FileInfoList = (function (_super) {
__extends(FileInfoList, _super);
function FileInfoList(defaults) {
_super.apply(this, arguments);
}
FileInfoList.itemType = FilePluginModel.FileInfoRec;
return FileInfoList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.FileInfoList = FileInfoList;

});
define("UBTConnect_Utils.model$CDN4RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CDN4Record"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CDN4RecordList = (function (_super) {
__extends(CDN4RecordList, _super);
function CDN4RecordList(defaults) {
_super.apply(this, arguments);
}
CDN4RecordList.itemType = UBTConnect_UtilsModel.CDN4Record;
return CDN4RecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CDN4RecordList = CDN4RecordList;

});
define("UBTConnect_Utils.model$EspaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$EspaceRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.EspaceRecord = EspaceRecord;

});
define("UBTConnect_Utils.model$EspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$EspaceRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var EspaceRecordList = (function (_super) {
__extends(EspaceRecordList, _super);
function EspaceRecordList(defaults) {
_super.apply(this, arguments);
}
EspaceRecordList.itemType = UBTConnect_UtilsModel.EspaceRecord;
return EspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.EspaceRecordList = EspaceRecordList;

});
define("UBTConnect_Utils.model$PathTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "UBTConnect_Utils.model", "FilePlugin.model$PathTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FilePlugin"], function (exports, OutSystems, FilePluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PathTypeRecord = (function (_super) {
__extends(PathTypeRecord, _super);
function PathTypeRecord(defaults) {
_super.apply(this, arguments);
}
PathTypeRecord.attributesToDeclare = function () {
return [
this.attr("PathType", "pathTypeAttr", "PathType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FilePluginModel.PathTypeRec());
}, true, FilePluginModel.PathTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
PathTypeRecord.fromStructure = function (str) {
return new PathTypeRecord(new PathTypeRecord.RecordClass({
pathTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PathTypeRecord._isAnonymousRecord = true;
PathTypeRecord.UniqueId = "78d4e78f-336a-6821-db9a-630108098ce3";
PathTypeRecord.init();
return PathTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.PathTypeRecord = PathTypeRecord;

});
define("UBTConnect_Utils.model$TextOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextOptionsList = (function (_super) {
__extends(TextOptionsList, _super);
function TextOptionsList(defaults) {
_super.apply(this, arguments);
}
TextOptionsList.itemType = UBTConnectLibraryModel.TextOptionsRec;
return TextOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TextOptionsList = TextOptionsList;

});
define("UBTConnect_Utils.model$SenderRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$SenderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SenderRecord = (function (_super) {
__extends(SenderRecord, _super);
function SenderRecord(defaults) {
_super.apply(this, arguments);
}
SenderRecord.attributesToDeclare = function () {
return [
this.attr("Sender", "senderAttr", "Sender", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SenderRec());
}, true, APIDomain_Directory_ISModel.SenderRec)
].concat(_super.attributesToDeclare.call(this));
};
SenderRecord.fromStructure = function (str) {
return new SenderRecord(new SenderRecord.RecordClass({
senderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SenderRecord._isAnonymousRecord = true;
SenderRecord.UniqueId = "796fd20c-b813-cc5a-5da3-765d91f91a8c";
SenderRecord.init();
return SenderRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SenderRecord = SenderRecord;

});
define("UBTConnect_Utils.model$Directory_ImageDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_ImageDetailsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_ImageDetailsRecordList = (function (_super) {
__extends(Directory_ImageDetailsRecordList, _super);
function Directory_ImageDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_ImageDetailsRecordList.itemType = UBTConnect_UtilsModel.Directory_ImageDetailsRecord;
return Directory_ImageDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_ImageDetailsRecordList = Directory_ImageDetailsRecordList;

});
define("UBTConnect_Utils.model$BackgroundImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BackgroundImageRecord = (function (_super) {
__extends(BackgroundImageRecord, _super);
function BackgroundImageRecord(defaults) {
_super.apply(this, arguments);
}
BackgroundImageRecord.attributesToDeclare = function () {
return [
this.attr("BackgroundImage", "backgroundImageAttr", "BackgroundImage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundImageRec());
}, true, UBTConnectLibraryModel.BackgroundImageRec)
].concat(_super.attributesToDeclare.call(this));
};
BackgroundImageRecord.fromStructure = function (str) {
return new BackgroundImageRecord(new BackgroundImageRecord.RecordClass({
backgroundImageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BackgroundImageRecord._isAnonymousRecord = true;
BackgroundImageRecord.UniqueId = "7a12ce89-0c7a-ed80-58a6-dbda7d32eb72";
BackgroundImageRecord.init();
return BackgroundImageRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.BackgroundImageRecord = BackgroundImageRecord;

});
define("UBTConnect_Utils.model$UI_Bookmark_Card_SourceHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "UBTConnect_Utils.model", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Bookmarks_CS"], function (exports, OutSystems, Connect_Bookmarks_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_SourceHeaderRecord = (function (_super) {
__extends(UI_Bookmark_Card_SourceHeaderRecord, _super);
function UI_Bookmark_Card_SourceHeaderRecord(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_SourceHeaderRecord.attributesToDeclare = function () {
return [
this.attr("UI_Bookmark_Card_SourceHeader", "uI_Bookmark_Card_SourceHeaderAttr", "UI_Bookmark_Card_SourceHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_Bookmark_Card_SourceHeaderRec());
}, true, Connect_Bookmarks_CSModel.UI_Bookmark_Card_SourceHeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_Card_SourceHeaderRecord.fromStructure = function (str) {
return new UI_Bookmark_Card_SourceHeaderRecord(new UI_Bookmark_Card_SourceHeaderRecord.RecordClass({
uI_Bookmark_Card_SourceHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_Bookmark_Card_SourceHeaderRecord._isAnonymousRecord = true;
UI_Bookmark_Card_SourceHeaderRecord.UniqueId = "7b6484bd-da91-9fa6-e43a-23279169ba8e";
UI_Bookmark_Card_SourceHeaderRecord.init();
return UI_Bookmark_Card_SourceHeaderRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_Bookmark_Card_SourceHeaderRecord = UI_Bookmark_Card_SourceHeaderRecord;

});
define("UBTConnect_Utils.model$SenderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SenderRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SenderRecordList = (function (_super) {
__extends(SenderRecordList, _super);
function SenderRecordList(defaults) {
_super.apply(this, arguments);
}
SenderRecordList.itemType = UBTConnect_UtilsModel.SenderRecord;
return SenderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SenderRecordList = SenderRecordList;

});
define("UBTConnect_Utils.model$NoteCategoryList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Utils.model", "UBTConnect_Notes_MCS.model$NoteCategoryRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NoteCategoryList = (function (_super) {
__extends(NoteCategoryList, _super);
function NoteCategoryList(defaults) {
_super.apply(this, arguments);
}
NoteCategoryList.itemType = UBTConnect_Notes_MCSModel.NoteCategoryRec;
return NoteCategoryList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.NoteCategoryList = NoteCategoryList;

});
define("UBTConnect_Utils.model$IntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$IntegerIntegerIntegerRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerRecordList = (function (_super) {
__extends(IntegerIntegerIntegerRecordList, _super);
function IntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerRecordList.itemType = UBTConnect_UtilsModel.IntegerIntegerIntegerRecord;
return IntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.IntegerIntegerIntegerRecordList = IntegerIntegerIntegerRecordList;

});
define("UBTConnect_Utils.model$UBT_FontWeightRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FontWeightRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FontWeightRecord = (function (_super) {
__extends(UBT_FontWeightRecord, _super);
function UBT_FontWeightRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FontWeightRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FontWeight", "uBT_FontWeightAttr", "UBT_FontWeight", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FontWeightRec());
}, true, UBTConnectLibraryModel.UBT_FontWeightRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FontWeightRecord.fromStructure = function (str) {
return new UBT_FontWeightRecord(new UBT_FontWeightRecord.RecordClass({
uBT_FontWeightAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FontWeightRecord._isAnonymousRecord = true;
UBT_FontWeightRecord.UniqueId = "ebf4e21c-f96c-712c-486f-3ae7f9b2c7a7";
UBT_FontWeightRecord.init();
return UBT_FontWeightRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_FontWeightRecord = UBT_FontWeightRecord;

});
define("UBTConnect_Utils.model$UBT_FontWeightRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_FontWeightRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FontWeightRecordList = (function (_super) {
__extends(UBT_FontWeightRecordList, _super);
function UBT_FontWeightRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FontWeightRecordList.itemType = UBTConnect_UtilsModel.UBT_FontWeightRecord;
return UBT_FontWeightRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FontWeightRecordList = UBT_FontWeightRecordList;

});
define("UBTConnect_Utils.model$TextOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextOptionsRecord = (function (_super) {
__extends(TextOptionsRecord, _super);
function TextOptionsRecord(defaults) {
_super.apply(this, arguments);
}
TextOptionsRecord.attributesToDeclare = function () {
return [
this.attr("TextOptions", "textOptionsAttr", "TextOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
}, true, UBTConnectLibraryModel.TextOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
TextOptionsRecord.fromStructure = function (str) {
return new TextOptionsRecord(new TextOptionsRecord.RecordClass({
textOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextOptionsRecord._isAnonymousRecord = true;
TextOptionsRecord.UniqueId = "9f66f55c-798b-6cd3-7fb4-bedbd1a7c92a";
TextOptionsRecord.init();
return TextOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.TextOptionsRecord = TextOptionsRecord;

});
define("UBTConnect_Utils.model$TextOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$TextOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TextOptionsRecordList = (function (_super) {
__extends(TextOptionsRecordList, _super);
function TextOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
TextOptionsRecordList.itemType = UBTConnect_UtilsModel.TextOptionsRecord;
return TextOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TextOptionsRecordList = TextOptionsRecordList;

});
define("UBTConnect_Utils.model$LauncherReturnRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LauncherReturnRecord = (function (_super) {
__extends(LauncherReturnRecord, _super);
function LauncherReturnRecord(defaults) {
_super.apply(this, arguments);
}
LauncherReturnRecord.attributesToDeclare = function () {
return [
this.attr("LauncherReturn", "launcherReturnAttr", "LauncherReturn", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.LauncherReturnRec());
}, true, Connect2_AppLauncherPluginModel.LauncherReturnRec)
].concat(_super.attributesToDeclare.call(this));
};
LauncherReturnRecord.fromStructure = function (str) {
return new LauncherReturnRecord(new LauncherReturnRecord.RecordClass({
launcherReturnAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LauncherReturnRecord._isAnonymousRecord = true;
LauncherReturnRecord.UniqueId = "83a47c01-3304-94b9-4bc2-68927a20804d";
LauncherReturnRecord.init();
return LauncherReturnRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.LauncherReturnRecord = LauncherReturnRecord;

});
define("UBTConnect_Utils.model$UBT_DisplayList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_DisplayRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_DisplayList = (function (_super) {
__extends(UBT_DisplayList, _super);
function UBT_DisplayList(defaults) {
_super.apply(this, arguments);
}
UBT_DisplayList.itemType = UBTConnectLibraryModel.UBT_DisplayRec;
return UBT_DisplayList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_DisplayList = UBT_DisplayList;

});
define("UBTConnect_Utils.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$UserRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.UserRecord = UserRecord;

});
define("UBTConnect_Utils.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UserRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = UBTConnect_UtilsModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UserRecordList = UserRecordList;

});
define("UBTConnect_Utils.model$ActionsMenuOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsList = (function (_super) {
__extends(ActionsMenuOptionsList, _super);
function ActionsMenuOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsList.itemType = UBTConnectLibraryModel.ActionsMenuOptionsRec;
return ActionsMenuOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ActionsMenuOptionsList = ActionsMenuOptionsList;

});
define("UBTConnect_Utils.model$LazyImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageSizeList = (function (_super) {
__extends(LazyImageSizeList, _super);
function LazyImageSizeList(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeList.itemType = UBTConnectLibraryModel.LazyImageSizeRec;
return LazyImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LazyImageSizeList = LazyImageSizeList;

});
define("UBTConnect_Utils.model$SearchInputList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchInputList = (function (_super) {
__extends(SearchInputList, _super);
function SearchInputList(defaults) {
_super.apply(this, arguments);
}
SearchInputList.itemType = UBTConnectLibraryModel.SearchInputRec;
return SearchInputList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchInputList = SearchInputList;

});
define("UBTConnect_Utils.model$UI_CountryDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_CountryDetailsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_CountryDetailsRecord = (function (_super) {
__extends(UI_CountryDetailsRecord, _super);
function UI_CountryDetailsRecord(defaults) {
_super.apply(this, arguments);
}
UI_CountryDetailsRecord.attributesToDeclare = function () {
return [
this.attr("UI_CountryDetails", "uI_CountryDetailsAttr", "UI_CountryDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_CountryDetailsRec());
}, true, UBTConnect_UtilsModel.UI_CountryDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_CountryDetailsRecord.fromStructure = function (str) {
return new UI_CountryDetailsRecord(new UI_CountryDetailsRecord.RecordClass({
uI_CountryDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_CountryDetailsRecord._isAnonymousRecord = true;
UI_CountryDetailsRecord.UniqueId = "97982465-031f-f6c9-981b-da968a90a591";
UI_CountryDetailsRecord.init();
return UI_CountryDetailsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_CountryDetailsRecord = UI_CountryDetailsRecord;

});
define("UBTConnect_Utils.model$UI_CountryDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_CountryDetailsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_CountryDetailsRecordList = (function (_super) {
__extends(UI_CountryDetailsRecordList, _super);
function UI_CountryDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
UI_CountryDetailsRecordList.itemType = UBTConnect_UtilsModel.UI_CountryDetailsRecord;
return UI_CountryDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_CountryDetailsRecordList = UI_CountryDetailsRecordList;

});
define("UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopUp_OverrideOptionsRecordList = (function (_super) {
__extends(ContactPopUp_OverrideOptionsRecordList, _super);
function ContactPopUp_OverrideOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ContactPopUp_OverrideOptionsRecordList.itemType = UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRecord;
return ContactPopUp_OverrideOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRecordList = ContactPopUp_OverrideOptionsRecordList;

});
define("UBTConnect_Utils.model$UI_HouseholdMemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "UBTConnect_Utils.model", "Connect_Household_CS.model$UI_HouseholdMemberRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Household_CS"], function (exports, OutSystems, Connect_Household_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberRecord = (function (_super) {
__extends(UI_HouseholdMemberRecord, _super);
function UI_HouseholdMemberRecord(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberRecord.attributesToDeclare = function () {
return [
this.attr("UI_HouseholdMember", "uI_HouseholdMemberAttr", "UI_HouseholdMember", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMemberRec());
}, true, Connect_Household_CSModel.UI_HouseholdMemberRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdMemberRecord.fromStructure = function (str) {
return new UI_HouseholdMemberRecord(new UI_HouseholdMemberRecord.RecordClass({
uI_HouseholdMemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_HouseholdMemberRecord._isAnonymousRecord = true;
UI_HouseholdMemberRecord.UniqueId = "ae512bb4-86d5-b9f9-0e1f-5aa27193838f";
UI_HouseholdMemberRecord.init();
return UI_HouseholdMemberRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_HouseholdMemberRecord = UI_HouseholdMemberRecord;

});
define("UBTConnect_Utils.model$UI_HouseholdMemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_HouseholdMemberRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberRecordList = (function (_super) {
__extends(UI_HouseholdMemberRecordList, _super);
function UI_HouseholdMemberRecordList(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberRecordList.itemType = UBTConnect_UtilsModel.UI_HouseholdMemberRecord;
return UI_HouseholdMemberRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_HouseholdMemberRecordList = UI_HouseholdMemberRecordList;

});
define("UBTConnect_Utils.model$RadiusOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var RadiusOptionsList = (function (_super) {
__extends(RadiusOptionsList, _super);
function RadiusOptionsList(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsList.itemType = UBTConnectLibraryModel.RadiusOptionsRec;
return RadiusOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.RadiusOptionsList = RadiusOptionsList;

});
define("UBTConnect_Utils.model$Espace_VersionRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$Espace_VersionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.Espace_VersionRecord = Espace_VersionRecord;

});
define("UBTConnect_Utils.model$Espace_VersionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Espace_VersionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Espace_VersionRecordList = (function (_super) {
__extends(Espace_VersionRecordList, _super);
function Espace_VersionRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRecordList.itemType = UBTConnect_UtilsModel.Espace_VersionRecord;
return Espace_VersionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Espace_VersionRecordList = Espace_VersionRecordList;

});
define("UBTConnect_Utils.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model$ShapeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.ShapeRecord = ShapeRecord;

});
define("UBTConnect_Utils.model$AvatarImageFallbackoptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsList = (function (_super) {
__extends(AvatarImageFallbackoptionsList, _super);
function AvatarImageFallbackoptionsList(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsList.itemType = UBTConnectLibraryModel.AvatarImageFallbackoptionsRec;
return AvatarImageFallbackoptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AvatarImageFallbackoptionsList = AvatarImageFallbackoptionsList;

});
define("UBTConnect_Utils.model$Custom_Address_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecord = (function (_super) {
__extends(Custom_Address_ItemRecord, _super);
function Custom_Address_ItemRecord(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecord.attributesToDeclare = function () {
return [
this.attr("Custom_Address_Item", "custom_Address_ItemAttr", "Custom_Address_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_Address_ItemRec());
}, true, APIDomain_Directory_ISModel.Custom_Address_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
Custom_Address_ItemRecord.fromStructure = function (str) {
return new Custom_Address_ItemRecord(new Custom_Address_ItemRecord.RecordClass({
custom_Address_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Custom_Address_ItemRecord._isAnonymousRecord = true;
Custom_Address_ItemRecord.UniqueId = "90f1c8dc-e620-f415-cba4-5d8b6daf100b";
Custom_Address_ItemRecord.init();
return Custom_Address_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Custom_Address_ItemRecord = Custom_Address_ItemRecord;

});
define("UBTConnect_Utils.model$BorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BorderOptionsList = (function (_super) {
__extends(BorderOptionsList, _super);
function BorderOptionsList(defaults) {
_super.apply(this, arguments);
}
BorderOptionsList.itemType = UBTConnectLibraryModel.BorderOptionsRec;
return BorderOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BorderOptionsList = BorderOptionsList;

});
define("UBTConnect_Utils.model$Type_ShareObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Type_ShareObjectRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectRecordList = (function (_super) {
__extends(Type_ShareObjectRecordList, _super);
function Type_ShareObjectRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectRecordList.itemType = UBTConnect_UtilsModel.Type_ShareObjectRecord;
return Type_ShareObjectRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_ShareObjectRecordList = Type_ShareObjectRecordList;

});
define("UBTConnect_Utils.model$CacheControl_AllCountriesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_AllCountriesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_AllCountriesList = (function (_super) {
__extends(CacheControl_AllCountriesList, _super);
function CacheControl_AllCountriesList(defaults) {
_super.apply(this, arguments);
}
CacheControl_AllCountriesList.itemType = UBTConnect_UtilsModel.CacheControl_AllCountriesRec;
return CacheControl_AllCountriesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_AllCountriesList = CacheControl_AllCountriesList;

});
define("UBTConnect_Utils.model$UBT_ShadowList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ShadowRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ShadowList = (function (_super) {
__extends(UBT_ShadowList, _super);
function UBT_ShadowList(defaults) {
_super.apply(this, arguments);
}
UBT_ShadowList.itemType = UBTConnectLibraryModel.UBT_ShadowRec;
return UBT_ShadowList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ShadowList = UBT_ShadowList;

});
define("UBTConnect_Utils.model$LaunchDarkly_FFRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$LaunchDarkly_FFRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.LaunchDarkly_FFRecord = LaunchDarkly_FFRecord;

});
define("UBTConnect_Utils.model$LaunchDarkly_FFRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LaunchDarkly_FFRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LaunchDarkly_FFRecordList = (function (_super) {
__extends(LaunchDarkly_FFRecordList, _super);
function LaunchDarkly_FFRecordList(defaults) {
_super.apply(this, arguments);
}
LaunchDarkly_FFRecordList.itemType = UBTConnect_UtilsModel.LaunchDarkly_FFRecord;
return LaunchDarkly_FFRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LaunchDarkly_FFRecordList = LaunchDarkly_FFRecordList;

});
define("UBTConnect_Utils.model$Custom_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Custom_AddressList = (function (_super) {
__extends(Custom_AddressList, _super);
function Custom_AddressList(defaults) {
_super.apply(this, arguments);
}
Custom_AddressList.itemType = APIDomain_Directory_ISModel.Custom_AddressRec;
return Custom_AddressList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Custom_AddressList = Custom_AddressList;

});
define("UBTConnect_Utils.model$ExternalApp_PopUpInfoList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalApp_PopUpInfoList = (function (_super) {
__extends(ExternalApp_PopUpInfoList, _super);
function ExternalApp_PopUpInfoList(defaults) {
_super.apply(this, arguments);
}
ExternalApp_PopUpInfoList.itemType = UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec;
return ExternalApp_PopUpInfoList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ExternalApp_PopUpInfoList = ExternalApp_PopUpInfoList;

});
define("UBTConnect_Utils.model$Share_AttributesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Share_AttributesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Share_AttributesRecord = (function (_super) {
__extends(Share_AttributesRecord, _super);
function Share_AttributesRecord(defaults) {
_super.apply(this, arguments);
}
Share_AttributesRecord.attributesToDeclare = function () {
return [
this.attr("Share_Attributes", "share_AttributesAttr", "Share_Attributes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.Share_AttributesRec());
}, true, UBTConnect_UtilsModel.Share_AttributesRec)
].concat(_super.attributesToDeclare.call(this));
};
Share_AttributesRecord.fromStructure = function (str) {
return new Share_AttributesRecord(new Share_AttributesRecord.RecordClass({
share_AttributesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Share_AttributesRecord._isAnonymousRecord = true;
Share_AttributesRecord.UniqueId = "99dfba74-71fc-b7ba-c025-0cd88fc53369";
Share_AttributesRecord.init();
return Share_AttributesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Share_AttributesRecord = Share_AttributesRecord;

});
define("UBTConnect_Utils.model$DisplayOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var DisplayOptionsList = (function (_super) {
__extends(DisplayOptionsList, _super);
function DisplayOptionsList(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsList.itemType = UBTConnectLibraryModel.DisplayOptionsRec;
return DisplayOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.DisplayOptionsList = DisplayOptionsList;

});
define("UBTConnect_Utils.model$UBT_SizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_SizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_SizeList = (function (_super) {
__extends(UBT_SizeList, _super);
function UBT_SizeList(defaults) {
_super.apply(this, arguments);
}
UBT_SizeList.itemType = UBTConnectLibraryModel.UBT_SizeRec;
return UBT_SizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_SizeList = UBT_SizeList;

});
define("UBTConnect_Utils.model$SearchResult2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$SearchResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchResult2List = (function (_super) {
__extends(SearchResult2List, _super);
function SearchResult2List(defaults) {
_super.apply(this, arguments);
}
SearchResult2List.itemType = APIDomain_Directory_ISModel.SearchResultRec;
return SearchResult2List;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchResult2List = SearchResult2List;

});
define("UBTConnect_Utils.model$ContainerOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContainerOptionsRecord = (function (_super) {
__extends(ContainerOptionsRecord, _super);
function ContainerOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ContainerOptions", "containerOptionsAttr", "ContainerOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
}, true, UBTConnectLibraryModel.ContainerOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ContainerOptionsRecord.fromStructure = function (str) {
return new ContainerOptionsRecord(new ContainerOptionsRecord.RecordClass({
containerOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContainerOptionsRecord._isAnonymousRecord = true;
ContainerOptionsRecord.UniqueId = "ff143c1b-c1c5-0ea7-32ee-9d68318414e1";
ContainerOptionsRecord.init();
return ContainerOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContainerOptionsRecord = ContainerOptionsRecord;

});
define("UBTConnect_Utils.model$ContainerOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContainerOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContainerOptionsRecordList = (function (_super) {
__extends(ContainerOptionsRecordList, _super);
function ContainerOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsRecordList.itemType = UBTConnect_UtilsModel.ContainerOptionsRecord;
return ContainerOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContainerOptionsRecordList = ContainerOptionsRecordList;

});
define("UBTConnect_Utils.model$Custom_Address_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Custom_Address_ItemRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemRecordList = (function (_super) {
__extends(Custom_Address_ItemRecordList, _super);
function Custom_Address_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemRecordList.itemType = UBTConnect_UtilsModel.Custom_Address_ItemRecord;
return Custom_Address_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Custom_Address_ItemRecordList = Custom_Address_ItemRecordList;

});
define("UBTConnect_Utils.model$ColumnOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ColumnOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ColumnOptionsRecordList = (function (_super) {
__extends(ColumnOptionsRecordList, _super);
function ColumnOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsRecordList.itemType = UBTConnect_UtilsModel.ColumnOptionsRecord;
return ColumnOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ColumnOptionsRecordList = ColumnOptionsRecordList;

});
define("UBTConnect_Utils.model$AvatarImageFallbackoptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$AvatarImageFallbackoptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsRecordList = (function (_super) {
__extends(AvatarImageFallbackoptionsRecordList, _super);
function AvatarImageFallbackoptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsRecordList.itemType = UBTConnect_UtilsModel.AvatarImageFallbackoptionsRecord;
return AvatarImageFallbackoptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AvatarImageFallbackoptionsRecordList = AvatarImageFallbackoptionsRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecord = (function (_super) {
__extends(Directory_UserCurrentRecord, _super);
function Directory_UserCurrentRecord(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecord.attributesToDeclare = function () {
return [
this.attr("Directory_UserCurrent", "directory_UserCurrentAttr", "Directory_UserCurrent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrentRec());
}, true, APIDomain_Directory_ISModel.Directory_UserCurrentRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_UserCurrentRecord.fromStructure = function (str) {
return new Directory_UserCurrentRecord(new Directory_UserCurrentRecord.RecordClass({
directory_UserCurrentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_UserCurrentRecord._isAnonymousRecord = true;
Directory_UserCurrentRecord.UniqueId = "a1153076-039f-7703-4690-22ba35d61b2f";
Directory_UserCurrentRecord.init();
return Directory_UserCurrentRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_UserCurrentRecord = Directory_UserCurrentRecord;

});
define("UBTConnect_Utils.model$Connect_CacheTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_CacheTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_CacheTypeRecordList = (function (_super) {
__extends(Connect_CacheTypeRecordList, _super);
function Connect_CacheTypeRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_CacheTypeRecordList.itemType = UBTConnect_UtilsModel.Connect_CacheTypeRecord;
return Connect_CacheTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_CacheTypeRecordList = Connect_CacheTypeRecordList;

});
define("UBTConnect_Utils.model$CacheControl_PoliciesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_PoliciesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_PoliciesRecordList = (function (_super) {
__extends(CacheControl_PoliciesRecordList, _super);
function CacheControl_PoliciesRecordList(defaults) {
_super.apply(this, arguments);
}
CacheControl_PoliciesRecordList.itemType = UBTConnect_UtilsModel.CacheControl_PoliciesRecord;
return CacheControl_PoliciesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_PoliciesRecordList = CacheControl_PoliciesRecordList;

});
define("UBTConnect_Utils.model$UBT_FontSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FontSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeRecord = (function (_super) {
__extends(UBT_FontSizeRecord, _super);
function UBT_FontSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_FontSize", "uBT_FontSizeAttr", "UBT_FontSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FontSizeRec());
}, true, UBTConnectLibraryModel.UBT_FontSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FontSizeRecord.fromStructure = function (str) {
return new UBT_FontSizeRecord(new UBT_FontSizeRecord.RecordClass({
uBT_FontSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_FontSizeRecord._isAnonymousRecord = true;
UBT_FontSizeRecord.UniqueId = "a2254625-48b7-a75e-5fcf-c17f5bd21996";
UBT_FontSizeRecord.init();
return UBT_FontSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_FontSizeRecord = UBT_FontSizeRecord;

});
define("UBTConnect_Utils.model$UI_LocalityDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_LocalityDetailsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetailsRecord = (function (_super) {
__extends(UI_LocalityDetailsRecord, _super);
function UI_LocalityDetailsRecord(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetailsRecord.attributesToDeclare = function () {
return [
this.attr("UI_LocalityDetails", "uI_LocalityDetailsAttr", "UI_LocalityDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_LocalityDetailsRec());
}, true, UBTConnect_UtilsModel.UI_LocalityDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityDetailsRecord.fromStructure = function (str) {
return new UI_LocalityDetailsRecord(new UI_LocalityDetailsRecord.RecordClass({
uI_LocalityDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UI_LocalityDetailsRecord._isAnonymousRecord = true;
UI_LocalityDetailsRecord.UniqueId = "a4a620de-345e-b225-20c2-f38b67751057";
UI_LocalityDetailsRecord.init();
return UI_LocalityDetailsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UI_LocalityDetailsRecord = UI_LocalityDetailsRecord;

});
define("UBTConnect_Utils.model$AvatarIconOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsList = (function (_super) {
__extends(AvatarIconOptionsList, _super);
function AvatarIconOptionsList(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsList.itemType = UBTConnectLibraryModel.AvatarIconOptionsRec;
return AvatarIconOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AvatarIconOptionsList = AvatarIconOptionsList;

});
define("UBTConnect_Utils.model$AvatarImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarImageList = (function (_super) {
__extends(AvatarImageList, _super);
function AvatarImageList(defaults) {
_super.apply(this, arguments);
}
AvatarImageList.itemType = UBTConnectLibraryModel.AvatarImageRec;
return AvatarImageList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AvatarImageList = AvatarImageList;

});
define("UBTConnect_Utils.model$AvatarIconOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsRecord = (function (_super) {
__extends(AvatarIconOptionsRecord, _super);
function AvatarIconOptionsRecord(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsRecord.attributesToDeclare = function () {
return [
this.attr("AvatarIconOptions", "avatarIconOptionsAttr", "AvatarIconOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarIconOptionsRec());
}, true, UBTConnectLibraryModel.AvatarIconOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarIconOptionsRecord.fromStructure = function (str) {
return new AvatarIconOptionsRecord(new AvatarIconOptionsRecord.RecordClass({
avatarIconOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AvatarIconOptionsRecord._isAnonymousRecord = true;
AvatarIconOptionsRecord.UniqueId = "beb9e540-5f74-3f44-a08f-33c96a05671b";
AvatarIconOptionsRecord.init();
return AvatarIconOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.AvatarIconOptionsRecord = AvatarIconOptionsRecord;

});
define("UBTConnect_Utils.model$AvatarIconOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$AvatarIconOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsRecordList = (function (_super) {
__extends(AvatarIconOptionsRecordList, _super);
function AvatarIconOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsRecordList.itemType = UBTConnect_UtilsModel.AvatarIconOptionsRecord;
return AvatarIconOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AvatarIconOptionsRecordList = AvatarIconOptionsRecordList;

});
define("UBTConnect_Utils.model$GetLightResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$GetLightResponseRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var GetLightResponseRecord = (function (_super) {
__extends(GetLightResponseRecord, _super);
function GetLightResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetLightResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetLightResponse", "getLightResponseAttr", "GetLightResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetLightResponseRec());
}, true, APIDomain_Directory_ISModel.GetLightResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetLightResponseRecord.fromStructure = function (str) {
return new GetLightResponseRecord(new GetLightResponseRecord.RecordClass({
getLightResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetLightResponseRecord._isAnonymousRecord = true;
GetLightResponseRecord.UniqueId = "a8742f8b-4c0b-aa49-c994-f1dc84f395aa";
GetLightResponseRecord.init();
return GetLightResponseRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.GetLightResponseRecord = GetLightResponseRecord;

});
define("UBTConnect_Utils.model$UI_Bookmark_Card_SourceHeaderList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "UBTConnect_Utils.model", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_Bookmarks_CS"], function (exports, OutSystems, Connect_Bookmarks_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_SourceHeaderList = (function (_super) {
__extends(UI_Bookmark_Card_SourceHeaderList, _super);
function UI_Bookmark_Card_SourceHeaderList(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_SourceHeaderList.itemType = Connect_Bookmarks_CSModel.UI_Bookmark_Card_SourceHeaderRec;
return UI_Bookmark_Card_SourceHeaderList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_Bookmark_Card_SourceHeaderList = UI_Bookmark_Card_SourceHeaderList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_VisibilityList = (function (_super) {
__extends(Directory_UserCurrent_VisibilityList, _super);
function Directory_UserCurrent_VisibilityList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_VisibilityList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec;
return Directory_UserCurrent_VisibilityList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_VisibilityList = Directory_UserCurrent_VisibilityList;

});
define("UBTConnect_Utils.model$ActionsMenuEnableOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionsMenuEnableOptionsRecord = (function (_super) {
__extends(ActionsMenuEnableOptionsRecord, _super);
function ActionsMenuEnableOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ActionsMenuEnableOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ActionsMenuEnableOptions", "actionsMenuEnableOptionsAttr", "ActionsMenuEnableOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec());
}, true, UBTConnectLibraryModel.ActionsMenuEnableOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionsMenuEnableOptionsRecord.fromStructure = function (str) {
return new ActionsMenuEnableOptionsRecord(new ActionsMenuEnableOptionsRecord.RecordClass({
actionsMenuEnableOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionsMenuEnableOptionsRecord._isAnonymousRecord = true;
ActionsMenuEnableOptionsRecord.UniqueId = "f9b93a40-fc47-12f4-c337-862f1fa983ce";
ActionsMenuEnableOptionsRecord.init();
return ActionsMenuEnableOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ActionsMenuEnableOptionsRecord = ActionsMenuEnableOptionsRecord;

});
define("UBTConnect_Utils.model$ActionsMenuEnableOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ActionsMenuEnableOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionsMenuEnableOptionsRecordList = (function (_super) {
__extends(ActionsMenuEnableOptionsRecordList, _super);
function ActionsMenuEnableOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuEnableOptionsRecordList.itemType = UBTConnect_UtilsModel.ActionsMenuEnableOptionsRecord;
return ActionsMenuEnableOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ActionsMenuEnableOptionsRecordList = ActionsMenuEnableOptionsRecordList;

});
define("UBTConnect_Utils.model$CacheControl_UserInformationList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_UserInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationList = (function (_super) {
__extends(CacheControl_UserInformationList, _super);
function CacheControl_UserInformationList(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationList.itemType = UBTConnect_UtilsModel.CacheControl_UserInformationRec;
return CacheControl_UserInformationList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_UserInformationList = CacheControl_UserInformationList;

});
define("UBTConnect_Utils.model$BottomBar_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BottomBar_ItemRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BottomBar_ItemRecordList = (function (_super) {
__extends(BottomBar_ItemRecordList, _super);
function BottomBar_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
BottomBar_ItemRecordList.itemType = UBTConnect_UtilsModel.BottomBar_ItemRecord;
return BottomBar_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BottomBar_ItemRecordList = BottomBar_ItemRecordList;

});
define("UBTConnect_Utils.model$ColumnOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ColumnOptionsList = (function (_super) {
__extends(ColumnOptionsList, _super);
function ColumnOptionsList(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsList.itemType = UBTConnectLibraryModel.ColumnOptionsRec;
return ColumnOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ColumnOptionsList = ColumnOptionsList;

});
define("UBTConnect_Utils.model$ExternalAppPackageNameRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExternalAppPackageNameRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalAppPackageNameRecord = (function (_super) {
__extends(ExternalAppPackageNameRecord, _super);
function ExternalAppPackageNameRecord(defaults) {
_super.apply(this, arguments);
}
ExternalAppPackageNameRecord.attributesToDeclare = function () {
return [
this.attr("ExternalAppPackageName", "externalAppPackageNameAttr", "ExternalAppPackageName", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ExternalAppPackageNameRec());
}, true, UBTConnect_UtilsModel.ExternalAppPackageNameRec)
].concat(_super.attributesToDeclare.call(this));
};
ExternalAppPackageNameRecord.fromStructure = function (str) {
return new ExternalAppPackageNameRecord(new ExternalAppPackageNameRecord.RecordClass({
externalAppPackageNameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExternalAppPackageNameRecord._isAnonymousRecord = true;
ExternalAppPackageNameRecord.UniqueId = "b0c132ec-c0c3-a839-a114-92e65a4a124c";
ExternalAppPackageNameRecord.init();
return ExternalAppPackageNameRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ExternalAppPackageNameRecord = ExternalAppPackageNameRecord;

});
define("UBTConnect_Utils.model$ActionsMenuOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ActionsMenuOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsRecordList = (function (_super) {
__extends(ActionsMenuOptionsRecordList, _super);
function ActionsMenuOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsRecordList.itemType = UBTConnect_UtilsModel.ActionsMenuOptionsRecord;
return ActionsMenuOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ActionsMenuOptionsRecordList = ActionsMenuOptionsRecordList;

});
define("UBTConnect_Utils.model$Connect_Subscription_PlanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_Subscription_PlanRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanRecord = (function (_super) {
__extends(Connect_Subscription_PlanRecord, _super);
function Connect_Subscription_PlanRecord(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanRecord.attributesToDeclare = function () {
return [
this.attr("Connect_Subscription_Plan", "connect_Subscription_PlanAttr", "Connect_Subscription_Plan", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec());
}, true, Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Subscription_PlanRecord.fromStructure = function (str) {
return new Connect_Subscription_PlanRecord(new Connect_Subscription_PlanRecord.RecordClass({
connect_Subscription_PlanAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_Subscription_PlanRecord._isAnonymousRecord = true;
Connect_Subscription_PlanRecord.UniqueId = "b2d06068-8e84-3eb6-cc7f-cc4e6923baa6";
Connect_Subscription_PlanRecord.init();
return Connect_Subscription_PlanRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Connect_Subscription_PlanRecord = Connect_Subscription_PlanRecord;

});
define("UBTConnect_Utils.model$Connect_ApplicationsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_ApplicationsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_ApplicationsList = (function (_super) {
__extends(Connect_ApplicationsList, _super);
function Connect_ApplicationsList(defaults) {
_super.apply(this, arguments);
}
Connect_ApplicationsList.itemType = Connect_CommonEntities_DBModel.Connect_ApplicationsRec;
return Connect_ApplicationsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_ApplicationsList = Connect_ApplicationsList;

});
define("UBTConnect_Utils.model$ButtonOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ButtonOptionsList = (function (_super) {
__extends(ButtonOptionsList, _super);
function ButtonOptionsList(defaults) {
_super.apply(this, arguments);
}
ButtonOptionsList.itemType = UBTConnectLibraryModel.ButtonOptionsRec;
return ButtonOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ButtonOptionsList = ButtonOptionsList;

});
define("UBTConnect_Utils.model$AvatarImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarImageRecord = (function (_super) {
__extends(AvatarImageRecord, _super);
function AvatarImageRecord(defaults) {
_super.apply(this, arguments);
}
AvatarImageRecord.attributesToDeclare = function () {
return [
this.attr("AvatarImage", "avatarImageAttr", "AvatarImage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, true, UBTConnectLibraryModel.AvatarImageRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarImageRecord.fromStructure = function (str) {
return new AvatarImageRecord(new AvatarImageRecord.RecordClass({
avatarImageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AvatarImageRecord._isAnonymousRecord = true;
AvatarImageRecord.UniqueId = "b642e93b-4341-1c0a-26ab-f48505df22d9";
AvatarImageRecord.init();
return AvatarImageRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.AvatarImageRecord = AvatarImageRecord;

});
define("UBTConnect_Utils.model$AvatarImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$AvatarImageRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var AvatarImageRecordList = (function (_super) {
__extends(AvatarImageRecordList, _super);
function AvatarImageRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarImageRecordList.itemType = UBTConnect_UtilsModel.AvatarImageRecord;
return AvatarImageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.AvatarImageRecordList = AvatarImageRecordList;

});
define("UBTConnect_Utils.model$ContainerOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContainerOptionsList = (function (_super) {
__extends(ContainerOptionsList, _super);
function ContainerOptionsList(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsList.itemType = UBTConnectLibraryModel.ContainerOptionsRec;
return ContainerOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContainerOptionsList = ContainerOptionsList;

});
define("UBTConnect_Utils.model$MemoryCacheTypeList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "UBTConnect_Utils.model", "MemoryClientCache.model$MemoryCacheTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MemoryCacheTypeList = (function (_super) {
__extends(MemoryCacheTypeList, _super);
function MemoryCacheTypeList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheTypeList.itemType = MemoryClientCacheModel.MemoryCacheTypeRec;
return MemoryCacheTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MemoryCacheTypeList = MemoryCacheTypeList;

});
define("UBTConnect_Utils.model$ContactByMessagePopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactByMessagePopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByMessagePopupDataRecord = (function (_super) {
__extends(ContactByMessagePopupDataRecord, _super);
function ContactByMessagePopupDataRecord(defaults) {
_super.apply(this, arguments);
}
ContactByMessagePopupDataRecord.attributesToDeclare = function () {
return [
this.attr("ContactByMessagePopupData", "contactByMessagePopupDataAttr", "ContactByMessagePopupData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByMessagePopupDataRec());
}, true, UBTConnect_UtilsModel.ContactByMessagePopupDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactByMessagePopupDataRecord.fromStructure = function (str) {
return new ContactByMessagePopupDataRecord(new ContactByMessagePopupDataRecord.RecordClass({
contactByMessagePopupDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactByMessagePopupDataRecord._isAnonymousRecord = true;
ContactByMessagePopupDataRecord.UniqueId = "b8f83af3-009e-edbc-c436-a23ab699d981";
ContactByMessagePopupDataRecord.init();
return ContactByMessagePopupDataRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ContactByMessagePopupDataRecord = ContactByMessagePopupDataRecord;

});
define("UBTConnect_Utils.model$UBT_FontSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_FontSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeRecordList = (function (_super) {
__extends(UBT_FontSizeRecordList, _super);
function UBT_FontSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeRecordList.itemType = UBTConnect_UtilsModel.UBT_FontSizeRecord;
return UBT_FontSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FontSizeRecordList = UBT_FontSizeRecordList;

});
define("UBTConnect_Utils.model$InlineIconList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var InlineIconList = (function (_super) {
__extends(InlineIconList, _super);
function InlineIconList(defaults) {
_super.apply(this, arguments);
}
InlineIconList.itemType = UBTConnectLibraryModel.InlineIconRec;
return InlineIconList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.InlineIconList = InlineIconList;

});
define("UBTConnect_Utils.model$BackgroundImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$BackgroundImageRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var BackgroundImageRecordList = (function (_super) {
__extends(BackgroundImageRecordList, _super);
function BackgroundImageRecordList(defaults) {
_super.apply(this, arguments);
}
BackgroundImageRecordList.itemType = UBTConnect_UtilsModel.BackgroundImageRecord;
return BackgroundImageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.BackgroundImageRecordList = BackgroundImageRecordList;

});
define("UBTConnect_Utils.model$LazyImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LazyImageRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageRecord = (function (_super) {
__extends(LazyImageRecord, _super);
function LazyImageRecord(defaults) {
_super.apply(this, arguments);
}
LazyImageRecord.attributesToDeclare = function () {
return [
this.attr("LazyImage", "lazyImageAttr", "LazyImage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.LazyImageRec());
}, true, UBTConnect_UtilsModel.LazyImageRec)
].concat(_super.attributesToDeclare.call(this));
};
LazyImageRecord.fromStructure = function (str) {
return new LazyImageRecord(new LazyImageRecord.RecordClass({
lazyImageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LazyImageRecord._isAnonymousRecord = true;
LazyImageRecord.UniqueId = "e753dd52-02f7-dafb-02a8-ff17048ff8a9";
LazyImageRecord.init();
return LazyImageRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.LazyImageRecord = LazyImageRecord;

});
define("UBTConnect_Utils.model$LazyImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LazyImageRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LazyImageRecordList = (function (_super) {
__extends(LazyImageRecordList, _super);
function LazyImageRecordList(defaults) {
_super.apply(this, arguments);
}
LazyImageRecordList.itemType = UBTConnect_UtilsModel.LazyImageRecord;
return LazyImageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LazyImageRecordList = LazyImageRecordList;

});
define("UBTConnect_Utils.model$Note_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Note_ItemRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Note_ItemRecordList = (function (_super) {
__extends(Note_ItemRecordList, _super);
function Note_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Note_ItemRecordList.itemType = UBTConnect_UtilsModel.Note_ItemRecord;
return Note_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Note_ItemRecordList = Note_ItemRecordList;

});
define("UBTConnect_Utils.model$Connect_EntityList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_EntityList = (function (_super) {
__extends(Connect_EntityList, _super);
function Connect_EntityList(defaults) {
_super.apply(this, arguments);
}
Connect_EntityList.itemType = Connect_CommonEntities_DBModel.Connect_EntityRec;
return Connect_EntityList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_EntityList = Connect_EntityList;

});
define("UBTConnect_Utils.model$Connect_ApplicationsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_ApplicationsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_ApplicationsRecordList = (function (_super) {
__extends(Connect_ApplicationsRecordList, _super);
function Connect_ApplicationsRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_ApplicationsRecordList.itemType = UBTConnect_UtilsModel.Connect_ApplicationsRecord;
return Connect_ApplicationsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_ApplicationsRecordList = Connect_ApplicationsRecordList;

});
define("UBTConnect_Utils.model$UBT_IconsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_IconsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_IconsRecordList = (function (_super) {
__extends(UBT_IconsRecordList, _super);
function UBT_IconsRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_IconsRecordList.itemType = UBTConnect_UtilsModel.UBT_IconsRecord;
return UBT_IconsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_IconsRecordList = UBT_IconsRecordList;

});
define("UBTConnect_Utils.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ShapeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = UBTConnect_UtilsModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ShapeRecordList = ShapeRecordList;

});
define("UBTConnect_Utils.model$MemoryCacheResultList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "UBTConnect_Utils.model", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, MemoryClientCacheModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MemoryCacheResultList = (function (_super) {
__extends(MemoryCacheResultList, _super);
function MemoryCacheResultList(defaults) {
_super.apply(this, arguments);
}
MemoryCacheResultList.itemType = MemoryClientCacheModel.MemoryCacheResultRec;
return MemoryCacheResultList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MemoryCacheResultList = MemoryCacheResultList;

});
define("UBTConnect_Utils.model$UBT_JustifyContentList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_JustifyContentRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_JustifyContentList = (function (_super) {
__extends(UBT_JustifyContentList, _super);
function UBT_JustifyContentList(defaults) {
_super.apply(this, arguments);
}
UBT_JustifyContentList.itemType = UBTConnectLibraryModel.UBT_JustifyContentRec;
return UBT_JustifyContentList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_JustifyContentList = UBT_JustifyContentList;

});
define("UBTConnect_Utils.model$TargetList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$TargetRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var TargetList = (function (_super) {
__extends(TargetList, _super);
function TargetList(defaults) {
_super.apply(this, arguments);
}
TargetList.itemType = InAppBrowserPluginModel.TargetRec;
return TargetList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.TargetList = TargetList;

});
define("UBTConnect_Utils.model$UBT_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_VisibilityRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_VisibilityRecord = (function (_super) {
__extends(UBT_VisibilityRecord, _super);
function UBT_VisibilityRecord(defaults) {
_super.apply(this, arguments);
}
UBT_VisibilityRecord.attributesToDeclare = function () {
return [
this.attr("UBT_Visibility", "uBT_VisibilityAttr", "UBT_Visibility", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_VisibilityRec());
}, true, UBTConnectLibraryModel.UBT_VisibilityRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_VisibilityRecord.fromStructure = function (str) {
return new UBT_VisibilityRecord(new UBT_VisibilityRecord.RecordClass({
uBT_VisibilityAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_VisibilityRecord._isAnonymousRecord = true;
UBT_VisibilityRecord.UniqueId = "e5b5eb6a-efd3-f9f1-0dc9-1761b3f5b851";
UBT_VisibilityRecord.init();
return UBT_VisibilityRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_VisibilityRecord = UBT_VisibilityRecord;

});
define("UBTConnect_Utils.model$UBT_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_VisibilityRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_VisibilityRecordList = (function (_super) {
__extends(UBT_VisibilityRecordList, _super);
function UBT_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_VisibilityRecordList.itemType = UBTConnect_UtilsModel.UBT_VisibilityRecord;
return UBT_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_VisibilityRecordList = UBT_VisibilityRecordList;

});
define("UBTConnect_Utils.model$MyBookmarks_GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "UBTConnect_Utils.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.MyBookmarks_GroupRecord = MyBookmarks_GroupRecord;

});
define("UBTConnect_Utils.model$MyBookmarks_GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$MyBookmarks_GroupRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRecordList = (function (_super) {
__extends(MyBookmarks_GroupRecordList, _super);
function MyBookmarks_GroupRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRecordList.itemType = UBTConnect_UtilsModel.MyBookmarks_GroupRecord;
return MyBookmarks_GroupRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MyBookmarks_GroupRecordList = MyBookmarks_GroupRecordList;

});
define("UBTConnect_Utils.model$SizeOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SizeOptionsRecord = (function (_super) {
__extends(SizeOptionsRecord, _super);
function SizeOptionsRecord(defaults) {
_super.apply(this, arguments);
}
SizeOptionsRecord.attributesToDeclare = function () {
return [
this.attr("SizeOptions", "sizeOptionsAttr", "SizeOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SizeOptionsRec());
}, true, UBTConnectLibraryModel.SizeOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
SizeOptionsRecord.fromStructure = function (str) {
return new SizeOptionsRecord(new SizeOptionsRecord.RecordClass({
sizeOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SizeOptionsRecord._isAnonymousRecord = true;
SizeOptionsRecord.UniqueId = "c1394f27-ec54-dd8c-9b47-c3a83414e146";
SizeOptionsRecord.init();
return SizeOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SizeOptionsRecord = SizeOptionsRecord;

});
define("UBTConnect_Utils.model$ExternalAppPackageNameRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExternalAppPackageNameRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalAppPackageNameRecordList = (function (_super) {
__extends(ExternalAppPackageNameRecordList, _super);
function ExternalAppPackageNameRecordList(defaults) {
_super.apply(this, arguments);
}
ExternalAppPackageNameRecordList.itemType = UBTConnect_UtilsModel.ExternalAppPackageNameRecord;
return ExternalAppPackageNameRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ExternalAppPackageNameRecordList = ExternalAppPackageNameRecordList;

});
define("UBTConnect_Utils.model$NoteCategoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Utils.model", "UBTConnect_Notes_MCS.model$NoteCategoryRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NoteCategoryRecord = (function (_super) {
__extends(NoteCategoryRecord, _super);
function NoteCategoryRecord(defaults) {
_super.apply(this, arguments);
}
NoteCategoryRecord.attributesToDeclare = function () {
return [
this.attr("NoteCategory", "noteCategoryAttr", "NoteCategory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_Notes_MCSModel.NoteCategoryRec());
}, true, UBTConnect_Notes_MCSModel.NoteCategoryRec)
].concat(_super.attributesToDeclare.call(this));
};
NoteCategoryRecord.fromStructure = function (str) {
return new NoteCategoryRecord(new NoteCategoryRecord.RecordClass({
noteCategoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoteCategoryRecord._isAnonymousRecord = true;
NoteCategoryRecord.UniqueId = "ee169515-5a11-c7c5-e431-c9f43b89fe42";
NoteCategoryRecord.init();
return NoteCategoryRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.NoteCategoryRecord = NoteCategoryRecord;

});
define("UBTConnect_Utils.model$NoteCategoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$NoteCategoryRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NoteCategoryRecordList = (function (_super) {
__extends(NoteCategoryRecordList, _super);
function NoteCategoryRecordList(defaults) {
_super.apply(this, arguments);
}
NoteCategoryRecordList.itemType = UBTConnect_UtilsModel.NoteCategoryRecord;
return NoteCategoryRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.NoteCategoryRecordList = NoteCategoryRecordList;

});
define("UBTConnect_Utils.model$ContactByMessagePopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactByMessagePopupDataRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByMessagePopupDataRecordList = (function (_super) {
__extends(ContactByMessagePopupDataRecordList, _super);
function ContactByMessagePopupDataRecordList(defaults) {
_super.apply(this, arguments);
}
ContactByMessagePopupDataRecordList.itemType = UBTConnect_UtilsModel.ContactByMessagePopupDataRecord;
return ContactByMessagePopupDataRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactByMessagePopupDataRecordList = ContactByMessagePopupDataRecordList;

});
define("UBTConnect_Utils.model$UBT_MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_MessageTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecordList = (function (_super) {
__extends(UBT_MessageTypeRecordList, _super);
function UBT_MessageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecordList.itemType = UBTConnect_UtilsModel.UBT_MessageTypeRecord;
return UBT_MessageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_MessageTypeRecordList = UBT_MessageTypeRecordList;

});
define("UBTConnect_Utils.model$Connect_EntityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_EntityRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_EntityRecordList = (function (_super) {
__extends(Connect_EntityRecordList, _super);
function Connect_EntityRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_EntityRecordList.itemType = UBTConnect_UtilsModel.Connect_EntityRecord;
return Connect_EntityRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_EntityRecordList = Connect_EntityRecordList;

});
define("UBTConnect_Utils.model$LocationRecord", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model", "UBTConnect_Utils.model", "LocationPlugin.model$LocationRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$LocationPlugin"], function (exports, OutSystems, LocationPluginModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.LocationRecord = LocationRecord;

});
define("UBTConnect_Utils.model$LauncherParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LauncherParametersRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LauncherParametersRecordList = (function (_super) {
__extends(LauncherParametersRecordList, _super);
function LauncherParametersRecordList(defaults) {
_super.apply(this, arguments);
}
LauncherParametersRecordList.itemType = UBTConnect_UtilsModel.LauncherParametersRecord;
return LauncherParametersRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LauncherParametersRecordList = LauncherParametersRecordList;

});
define("UBTConnect_Utils.model$ImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$ImageSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImageSizeList = (function (_super) {
__extends(ImageSizeList, _super);
function ImageSizeList(defaults) {
_super.apply(this, arguments);
}
ImageSizeList.itemType = Connect_CommonEntities_DBModel.ImageSizeRec;
return ImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ImageSizeList = ImageSizeList;

});
define("UBTConnect_Utils.model$UBT_AlignItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_AlignItemsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_AlignItemsRecord = (function (_super) {
__extends(UBT_AlignItemsRecord, _super);
function UBT_AlignItemsRecord(defaults) {
_super.apply(this, arguments);
}
UBT_AlignItemsRecord.attributesToDeclare = function () {
return [
this.attr("UBT_AlignItems", "uBT_AlignItemsAttr", "UBT_AlignItems", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_AlignItemsRec());
}, true, UBTConnectLibraryModel.UBT_AlignItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_AlignItemsRecord.fromStructure = function (str) {
return new UBT_AlignItemsRecord(new UBT_AlignItemsRecord.RecordClass({
uBT_AlignItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_AlignItemsRecord._isAnonymousRecord = true;
UBT_AlignItemsRecord.UniqueId = "d332541b-a5f6-861c-dee7-4ce9f2e48289";
UBT_AlignItemsRecord.init();
return UBT_AlignItemsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_AlignItemsRecord = UBT_AlignItemsRecord;

});
define("UBTConnect_Utils.model$UBT_AlignItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_AlignItemsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_AlignItemsRecordList = (function (_super) {
__extends(UBT_AlignItemsRecordList, _super);
function UBT_AlignItemsRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_AlignItemsRecordList.itemType = UBTConnect_UtilsModel.UBT_AlignItemsRecord;
return UBT_AlignItemsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_AlignItemsRecordList = UBT_AlignItemsRecordList;

});
define("UBTConnect_Utils.model$NotesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NotesRecord = (function (_super) {
__extends(NotesRecord, _super);
function NotesRecord(defaults) {
_super.apply(this, arguments);
}
NotesRecord.attributesToDeclare = function () {
return [
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, true, UBTConnectLibraryModel.NotesRec)
].concat(_super.attributesToDeclare.call(this));
};
NotesRecord.fromStructure = function (str) {
return new NotesRecord(new NotesRecord.RecordClass({
notesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotesRecord._isAnonymousRecord = true;
NotesRecord.UniqueId = "c84c9882-6524-388c-39d8-99cc3e580925";
NotesRecord.init();
return NotesRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.NotesRecord = NotesRecord;

});
define("UBTConnect_Utils.model$MyBookmarks_ObjectTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "UBTConnect_Utils.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.MyBookmarks_ObjectTypeRecord = MyBookmarks_ObjectTypeRecord;

});
define("UBTConnect_Utils.model$Type_MessageChannelRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$Type_MessageChannelRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_MessageChannelRecord = (function (_super) {
__extends(Type_MessageChannelRecord, _super);
function Type_MessageChannelRecord(defaults) {
_super.apply(this, arguments);
}
Type_MessageChannelRecord.attributesToDeclare = function () {
return [
this.attr("Type_MessageChannel", "type_MessageChannelAttr", "Type_MessageChannel", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Type_MessageChannelRec());
}, true, UBTConnectLibraryModel.Type_MessageChannelRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_MessageChannelRecord.fromStructure = function (str) {
return new Type_MessageChannelRecord(new Type_MessageChannelRecord.RecordClass({
type_MessageChannelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_MessageChannelRecord._isAnonymousRecord = true;
Type_MessageChannelRecord.UniqueId = "c95ef679-ce46-fbde-789e-5b7070fd705a";
Type_MessageChannelRecord.init();
return Type_MessageChannelRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Type_MessageChannelRecord = Type_MessageChannelRecord;

});
define("UBTConnect_Utils.model$OutSystems_FFList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$OutSystems_FFRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var OutSystems_FFList = (function (_super) {
__extends(OutSystems_FFList, _super);
function OutSystems_FFList(defaults) {
_super.apply(this, arguments);
}
OutSystems_FFList.itemType = Connect_CommonEntities_DBModel.OutSystems_FFRec;
return OutSystems_FFList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.OutSystems_FFList = OutSystems_FFList;

});
define("UBTConnect_Utils.model$LaunchDarkly_FFList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$LaunchDarkly_FFRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LaunchDarkly_FFList = (function (_super) {
__extends(LaunchDarkly_FFList, _super);
function LaunchDarkly_FFList(defaults) {
_super.apply(this, arguments);
}
LaunchDarkly_FFList.itemType = Connect_CommonEntities_DBModel.LaunchDarkly_FFRec;
return LaunchDarkly_FFList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LaunchDarkly_FFList = LaunchDarkly_FFList;

});
define("UBTConnect_Utils.model$UBT_AvatarSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_AvatarSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeList = (function (_super) {
__extends(UBT_AvatarSizeList, _super);
function UBT_AvatarSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeList.itemType = UBTConnectLibraryModel.UBT_AvatarSizeRec;
return UBT_AvatarSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_AvatarSizeList = UBT_AvatarSizeList;

});
define("UBTConnect_Utils.model$Directory_ImageDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_ImageDetailsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_ImageDetailsList = (function (_super) {
__extends(Directory_ImageDetailsList, _super);
function Directory_ImageDetailsList(defaults) {
_super.apply(this, arguments);
}
Directory_ImageDetailsList.itemType = APIDomain_Directory_ISModel.Directory_ImageDetailsRec;
return Directory_ImageDetailsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_ImageDetailsList = Directory_ImageDetailsList;

});
define("UBTConnect_Utils.model$UBT_AlignItemsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_AlignItemsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_AlignItemsList = (function (_super) {
__extends(UBT_AlignItemsList, _super);
function UBT_AlignItemsList(defaults) {
_super.apply(this, arguments);
}
UBT_AlignItemsList.itemType = UBTConnectLibraryModel.UBT_AlignItemsRec;
return UBT_AlignItemsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_AlignItemsList = UBT_AlignItemsList;

});
define("UBTConnect_Utils.model$ButtonOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ButtonOptionsRecord = (function (_super) {
__extends(ButtonOptionsRecord, _super);
function ButtonOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ButtonOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ButtonOptions", "buttonOptionsAttr", "ButtonOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec());
}, true, UBTConnectLibraryModel.ButtonOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ButtonOptionsRecord.fromStructure = function (str) {
return new ButtonOptionsRecord(new ButtonOptionsRecord.RecordClass({
buttonOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ButtonOptionsRecord._isAnonymousRecord = true;
ButtonOptionsRecord.UniqueId = "d4c90a5a-3be4-5f6b-6fb0-bc159366ca1e";
ButtonOptionsRecord.init();
return ButtonOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.ButtonOptionsRecord = ButtonOptionsRecord;

});
define("UBTConnect_Utils.model$ButtonOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ButtonOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ButtonOptionsRecordList = (function (_super) {
__extends(ButtonOptionsRecordList, _super);
function ButtonOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ButtonOptionsRecordList.itemType = UBTConnect_UtilsModel.ButtonOptionsRecord;
return ButtonOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ButtonOptionsRecordList = ButtonOptionsRecordList;

});
define("UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_ContactByMessage_WrapperDataRecordList = (function (_super) {
__extends(UI_ContactByMessage_WrapperDataRecordList, _super);
function UI_ContactByMessage_WrapperDataRecordList(defaults) {
_super.apply(this, arguments);
}
UI_ContactByMessage_WrapperDataRecordList.itemType = UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRecord;
return UI_ContactByMessage_WrapperDataRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRecordList = UI_ContactByMessage_WrapperDataRecordList;

});
define("UBTConnect_Utils.model$CacheControl_PoliciesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_PoliciesRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_PoliciesList = (function (_super) {
__extends(CacheControl_PoliciesList, _super);
function CacheControl_PoliciesList(defaults) {
_super.apply(this, arguments);
}
CacheControl_PoliciesList.itemType = UBTConnect_UtilsModel.CacheControl_PoliciesRec;
return CacheControl_PoliciesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_PoliciesList = CacheControl_PoliciesList;

});
define("UBTConnect_Utils.model$UBT_Size_ImageWidthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_Size_ImageWidthRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_Size_ImageWidthRecordList = (function (_super) {
__extends(UBT_Size_ImageWidthRecordList, _super);
function UBT_Size_ImageWidthRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_Size_ImageWidthRecordList.itemType = UBTConnect_UtilsModel.UBT_Size_ImageWidthRecord;
return UBT_Size_ImageWidthRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_Size_ImageWidthRecordList = UBT_Size_ImageWidthRecordList;

});
define("UBTConnect_Utils.model$MyBookmarks_ObjectTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$MyBookmarks_ObjectTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeRecordList = (function (_super) {
__extends(MyBookmarks_ObjectTypeRecordList, _super);
function MyBookmarks_ObjectTypeRecordList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeRecordList.itemType = UBTConnect_UtilsModel.MyBookmarks_ObjectTypeRecord;
return MyBookmarks_ObjectTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MyBookmarks_ObjectTypeRecordList = MyBookmarks_ObjectTypeRecordList;

});
define("UBTConnect_Utils.model$IOSOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$IOSOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var IOSOptionsList = (function (_super) {
__extends(IOSOptionsList, _super);
function IOSOptionsList(defaults) {
_super.apply(this, arguments);
}
IOSOptionsList.itemType = InAppBrowserPluginModel.IOSOptionsRec;
return IOSOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.IOSOptionsList = IOSOptionsList;

});
define("UBTConnect_Utils.model$UI_ShareableObject_GenericList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS"], function (exports, OutSystems, Connect2_Sharing_CSModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericList = (function (_super) {
__extends(UI_ShareableObject_GenericList, _super);
function UI_ShareableObject_GenericList(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericList.itemType = Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec;
return UI_ShareableObject_GenericList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_ShareableObject_GenericList = UI_ShareableObject_GenericList;

});
define("UBTConnect_Utils.model$PolicyInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PolicyInformationRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformationRecordList = (function (_super) {
__extends(PolicyInformationRecordList, _super);
function PolicyInformationRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyInformationRecordList.itemType = UBTConnect_UtilsModel.PolicyInformationRecord;
return PolicyInformationRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PolicyInformationRecordList = PolicyInformationRecordList;

});
define("UBTConnect_Utils.model$UBT_FlexDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_FlexDirectionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionList = (function (_super) {
__extends(UBT_FlexDirectionList, _super);
function UBT_FlexDirectionList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionList.itemType = UBTConnectLibraryModel.UBT_FlexDirectionRec;
return UBT_FlexDirectionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_FlexDirectionList = UBT_FlexDirectionList;

});
define("UBTConnect_Utils.model$CacheControl_UserInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$CacheControl_UserInformationRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CacheControl_UserInformationRecordList = (function (_super) {
__extends(CacheControl_UserInformationRecordList, _super);
function CacheControl_UserInformationRecordList(defaults) {
_super.apply(this, arguments);
}
CacheControl_UserInformationRecordList.itemType = UBTConnect_UtilsModel.CacheControl_UserInformationRecord;
return CacheControl_UserInformationRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CacheControl_UserInformationRecordList = CacheControl_UserInformationRecordList;

});
define("UBTConnect_Utils.model$Type_MessageChannelRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Type_MessageChannelRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_MessageChannelRecordList = (function (_super) {
__extends(Type_MessageChannelRecordList, _super);
function Type_MessageChannelRecordList(defaults) {
_super.apply(this, arguments);
}
Type_MessageChannelRecordList.itemType = UBTConnect_UtilsModel.Type_MessageChannelRecord;
return Type_MessageChannelRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_MessageChannelRecordList = Type_MessageChannelRecordList;

});
define("UBTConnect_Utils.model$Connect_Subscription_RegionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$Connect_Subscription_RegionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionList = (function (_super) {
__extends(Connect_Subscription_RegionList, _super);
function Connect_Subscription_RegionList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionList.itemType = Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec;
return Connect_Subscription_RegionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_Subscription_RegionList = Connect_Subscription_RegionList;

});
define("UBTConnect_Utils.model$SizeOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SizeOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SizeOptionsRecordList = (function (_super) {
__extends(SizeOptionsRecordList, _super);
function SizeOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
SizeOptionsRecordList.itemType = UBTConnect_UtilsModel.SizeOptionsRecord;
return SizeOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SizeOptionsRecordList = SizeOptionsRecordList;

});
define("UBTConnect_Utils.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model$PositionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnect_UtilsModel) {
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
UBTConnect_UtilsModel.PositionRecord = PositionRecord;

});
define("UBTConnect_Utils.model$LocationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LocationRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LocationRecordList = (function (_super) {
__extends(LocationRecordList, _super);
function LocationRecordList(defaults) {
_super.apply(this, arguments);
}
LocationRecordList.itemType = UBTConnect_UtilsModel.LocationRecord;
return LocationRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LocationRecordList = LocationRecordList;

});
define("UBTConnect_Utils.model$Directory_PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_PhotoList = (function (_super) {
__extends(Directory_PhotoList, _super);
function Directory_PhotoList(defaults) {
_super.apply(this, arguments);
}
Directory_PhotoList.itemType = APIDomain_Directory_ISModel.Directory_PhotoRec;
return Directory_PhotoList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_PhotoList = Directory_PhotoList;

});
define("UBTConnect_Utils.model$SpacingOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SpacingOptionsRecord = (function (_super) {
__extends(SpacingOptionsRecord, _super);
function SpacingOptionsRecord(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsRecord.attributesToDeclare = function () {
return [
this.attr("SpacingOptions", "spacingOptionsAttr", "SpacingOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, true, UBTConnectLibraryModel.SpacingOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
SpacingOptionsRecord.fromStructure = function (str) {
return new SpacingOptionsRecord(new SpacingOptionsRecord.RecordClass({
spacingOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpacingOptionsRecord._isAnonymousRecord = true;
SpacingOptionsRecord.UniqueId = "d5ed874f-6776-aae4-f3c6-1ea265e33181";
SpacingOptionsRecord.init();
return SpacingOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.SpacingOptionsRecord = SpacingOptionsRecord;

});
define("UBTConnect_Utils.model$SpacingOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SpacingOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SpacingOptionsRecordList = (function (_super) {
__extends(SpacingOptionsRecordList, _super);
function SpacingOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsRecordList.itemType = UBTConnect_UtilsModel.SpacingOptionsRecord;
return SpacingOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SpacingOptionsRecordList = SpacingOptionsRecordList;

});
define("UBTConnect_Utils.model$Connect_BottomBar_ItemsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_BottomBar_ItemsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_BottomBar_ItemsList = (function (_super) {
__extends(Connect_BottomBar_ItemsList, _super);
function Connect_BottomBar_ItemsList(defaults) {
_super.apply(this, arguments);
}
Connect_BottomBar_ItemsList.itemType = UBTConnect_UtilsModel.Connect_BottomBar_ItemsRec;
return Connect_BottomBar_ItemsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_BottomBar_ItemsList = Connect_BottomBar_ItemsList;

});
define("UBTConnect_Utils.model$OutSystems_FFRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$OutSystems_FFRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var OutSystems_FFRecord = (function (_super) {
__extends(OutSystems_FFRecord, _super);
function OutSystems_FFRecord(defaults) {
_super.apply(this, arguments);
}
OutSystems_FFRecord.attributesToDeclare = function () {
return [
this.attr("OutSystems_FF", "outSystems_FFAttr", "OutSystems_FF", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.OutSystems_FFRec());
}, true, Connect_CommonEntities_DBModel.OutSystems_FFRec)
].concat(_super.attributesToDeclare.call(this));
};
OutSystems_FFRecord.fromStructure = function (str) {
return new OutSystems_FFRecord(new OutSystems_FFRecord.RecordClass({
outSystems_FFAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OutSystems_FFRecord._isAnonymousRecord = true;
OutSystems_FFRecord.UniqueId = "ec291ca1-9822-b7e1-e8b3-135c74ef6b17";
OutSystems_FFRecord.init();
return OutSystems_FFRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.OutSystems_FFRecord = OutSystems_FFRecord;

});
define("UBTConnect_Utils.model$OutSystems_FFRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$OutSystems_FFRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var OutSystems_FFRecordList = (function (_super) {
__extends(OutSystems_FFRecordList, _super);
function OutSystems_FFRecordList(defaults) {
_super.apply(this, arguments);
}
OutSystems_FFRecordList.itemType = UBTConnect_UtilsModel.OutSystems_FFRecord;
return OutSystems_FFRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.OutSystems_FFRecordList = OutSystems_FFRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_UserCurrent_SubscriptionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionRecordList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionRecordList, _super);
function Directory_UserCurrent_SubscriptionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionRecordList.itemType = UBTConnect_UtilsModel.Directory_UserCurrent_SubscriptionRecord;
return Directory_UserCurrent_SubscriptionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_SubscriptionRecordList = Directory_UserCurrent_SubscriptionRecordList;

});
define("UBTConnect_Utils.model$UI_LocalityDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_LocalityDetailsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_LocalityDetailsRecordList = (function (_super) {
__extends(UI_LocalityDetailsRecordList, _super);
function UI_LocalityDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
UI_LocalityDetailsRecordList.itemType = UBTConnect_UtilsModel.UI_LocalityDetailsRecord;
return UI_LocalityDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_LocalityDetailsRecordList = UI_LocalityDetailsRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_UserCurrentRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrentRecordList = (function (_super) {
__extends(Directory_UserCurrentRecordList, _super);
function Directory_UserCurrentRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrentRecordList.itemType = UBTConnect_UtilsModel.Directory_UserCurrentRecord;
return Directory_UserCurrentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrentRecordList = Directory_UserCurrentRecordList;

});
define("UBTConnect_Utils.model$LauncherReturnRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$LauncherReturnRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LauncherReturnRecordList = (function (_super) {
__extends(LauncherReturnRecordList, _super);
function LauncherReturnRecordList(defaults) {
_super.apply(this, arguments);
}
LauncherReturnRecordList.itemType = UBTConnect_UtilsModel.LauncherReturnRecord;
return LauncherReturnRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LauncherReturnRecordList = LauncherReturnRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_GeographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_UserCurrent_GeographyRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_GeographyRecordList = (function (_super) {
__extends(Directory_UserCurrent_GeographyRecordList, _super);
function Directory_UserCurrent_GeographyRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_GeographyRecordList.itemType = UBTConnect_UtilsModel.Directory_UserCurrent_GeographyRecord;
return Directory_UserCurrent_GeographyRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_GeographyRecordList = Directory_UserCurrent_GeographyRecordList;

});
define("UBTConnect_Utils.model$ImageBorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsList = (function (_super) {
__extends(ImageBorderOptionsList, _super);
function ImageBorderOptionsList(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsList.itemType = UBTConnectLibraryModel.ImageBorderOptionsRec;
return ImageBorderOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ImageBorderOptionsList = ImageBorderOptionsList;

});
define("UBTConnect_Utils.model$CDN4List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$CDN4Rec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var CDN4List = (function (_super) {
__extends(CDN4List, _super);
function CDN4List(defaults) {
_super.apply(this, arguments);
}
CDN4List.itemType = APIDomain_Directory_ISModel.CDN4Rec;
return CDN4List;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.CDN4List = CDN4List;

});
define("UBTConnect_Utils.model$Espace_VersionEspaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Espace_VersionEspaceRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Espace_VersionEspaceRecordList = (function (_super) {
__extends(Espace_VersionEspaceRecordList, _super);
function Espace_VersionEspaceRecordList(defaults) {
_super.apply(this, arguments);
}
Espace_VersionEspaceRecordList.itemType = UBTConnect_UtilsModel.Espace_VersionEspaceRecord;
return Espace_VersionEspaceRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Espace_VersionEspaceRecordList = Espace_VersionEspaceRecordList;

});
define("UBTConnect_Utils.model$UI_Bookmark_Card_SourceHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UI_Bookmark_Card_SourceHeaderRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_SourceHeaderRecordList = (function (_super) {
__extends(UI_Bookmark_Card_SourceHeaderRecordList, _super);
function UI_Bookmark_Card_SourceHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_SourceHeaderRecordList.itemType = UBTConnect_UtilsModel.UI_Bookmark_Card_SourceHeaderRecord;
return UI_Bookmark_Card_SourceHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UI_Bookmark_Card_SourceHeaderRecordList = UI_Bookmark_Card_SourceHeaderRecordList;

});
define("UBTConnect_Utils.model$UBT_IconSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_IconSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_IconSizeList = (function (_super) {
__extends(UBT_IconSizeList, _super);
function UBT_IconSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_IconSizeList.itemType = UBTConnectLibraryModel.UBT_IconSizeRec;
return UBT_IconSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_IconSizeList = UBT_IconSizeList;

});
define("UBTConnect_Utils.model$PathTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PathTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PathTypeRecordList = (function (_super) {
__extends(PathTypeRecordList, _super);
function PathTypeRecordList(defaults) {
_super.apply(this, arguments);
}
PathTypeRecordList.itemType = UBTConnect_UtilsModel.PathTypeRecord;
return PathTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PathTypeRecordList = PathTypeRecordList;

});
define("UBTConnect_Utils.model$ContactPopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactPopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactPopupDataList = (function (_super) {
__extends(ContactPopupDataList, _super);
function ContactPopupDataList(defaults) {
_super.apply(this, arguments);
}
ContactPopupDataList.itemType = UBTConnect_UtilsModel.ContactPopupDataRec;
return ContactPopupDataList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactPopupDataList = ContactPopupDataList;

});
define("UBTConnect_Utils.model$SignedImagesList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$SignedImagesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SignedImagesList = (function (_super) {
__extends(SignedImagesList, _super);
function SignedImagesList(defaults) {
_super.apply(this, arguments);
}
SignedImagesList.itemType = APIDomain_Directory_ISModel.SignedImagesRec;
return SignedImagesList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SignedImagesList = SignedImagesList;

});
define("UBTConnect_Utils.model$UBT_IconSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_IconSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_IconSizeRecord = (function (_super) {
__extends(UBT_IconSizeRecord, _super);
function UBT_IconSizeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_IconSizeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_IconSize", "uBT_IconSizeAttr", "UBT_IconSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_IconSizeRec());
}, true, UBTConnectLibraryModel.UBT_IconSizeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_IconSizeRecord.fromStructure = function (str) {
return new UBT_IconSizeRecord(new UBT_IconSizeRecord.RecordClass({
uBT_IconSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_IconSizeRecord._isAnonymousRecord = true;
UBT_IconSizeRecord.UniqueId = "f52b03bd-2c02-fa41-c893-23a4873ea1f7";
UBT_IconSizeRecord.init();
return UBT_IconSizeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.UBT_IconSizeRecord = UBT_IconSizeRecord;

});
define("UBTConnect_Utils.model$UBT_IconSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_IconSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_IconSizeRecordList = (function (_super) {
__extends(UBT_IconSizeRecordList, _super);
function UBT_IconSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_IconSizeRecordList.itemType = UBTConnect_UtilsModel.UBT_IconSizeRecord;
return UBT_IconSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_IconSizeRecordList = UBT_IconSizeRecordList;

});
define("UBTConnect_Utils.model$UBT_Size_ImageWidthList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_Size_ImageWidthRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_Size_ImageWidthList = (function (_super) {
__extends(UBT_Size_ImageWidthList, _super);
function UBT_Size_ImageWidthList(defaults) {
_super.apply(this, arguments);
}
UBT_Size_ImageWidthList.itemType = UBTConnectLibraryModel.UBT_Size_ImageWidthRec;
return UBT_Size_ImageWidthList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_Size_ImageWidthList = UBT_Size_ImageWidthList;

});
define("UBTConnect_Utils.model$LocationList", ["exports", "OutSystems/ClientRuntime/Main", "LocationPlugin.model", "UBTConnect_Utils.model", "LocationPlugin.model$LocationRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$LocationPlugin"], function (exports, OutSystems, LocationPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LocationList = (function (_super) {
__extends(LocationList, _super);
function LocationList(defaults) {
_super.apply(this, arguments);
}
LocationList.itemType = LocationPluginModel.LocationRec;
return LocationList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LocationList = LocationList;

});
define("UBTConnect_Utils.model$LauncherReturnList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "UBTConnect_Utils.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin"], function (exports, OutSystems, Connect2_AppLauncherPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var LauncherReturnList = (function (_super) {
__extends(LauncherReturnList, _super);
function LauncherReturnList(defaults) {
_super.apply(this, arguments);
}
LauncherReturnList.itemType = Connect2_AppLauncherPluginModel.LauncherReturnRec;
return LauncherReturnList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.LauncherReturnList = LauncherReturnList;

});
define("UBTConnect_Utils.model$PolicyInformation2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PolicyInformation2Record"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PolicyInformation2RecordList = (function (_super) {
__extends(PolicyInformation2RecordList, _super);
function PolicyInformation2RecordList(defaults) {
_super.apply(this, arguments);
}
PolicyInformation2RecordList.itemType = UBTConnect_UtilsModel.PolicyInformation2Record;
return PolicyInformation2RecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PolicyInformation2RecordList = PolicyInformation2RecordList;

});
define("UBTConnect_Utils.model$Connect_Subscription_PlanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_Subscription_PlanRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanRecordList = (function (_super) {
__extends(Connect_Subscription_PlanRecordList, _super);
function Connect_Subscription_PlanRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanRecordList.itemType = UBTConnect_UtilsModel.Connect_Subscription_PlanRecord;
return Connect_Subscription_PlanRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_Subscription_PlanRecordList = Connect_Subscription_PlanRecordList;

});
define("UBTConnect_Utils.model$OptionsList", ["exports", "OutSystems/ClientRuntime/Main", "InAppBrowserPlugin.model", "UBTConnect_Utils.model", "InAppBrowserPlugin.model$OptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin"], function (exports, OutSystems, InAppBrowserPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var OptionsList = (function (_super) {
__extends(OptionsList, _super);
function OptionsList(defaults) {
_super.apply(this, arguments);
}
OptionsList.itemType = InAppBrowserPluginModel.OptionsRec;
return OptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.OptionsList = OptionsList;

});
define("UBTConnect_Utils.model$Directory_LocationDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_LocationDetailsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_LocationDetailsList = (function (_super) {
__extends(Directory_LocationDetailsList, _super);
function Directory_LocationDetailsList(defaults) {
_super.apply(this, arguments);
}
Directory_LocationDetailsList.itemType = APIDomain_Directory_ISModel.Directory_LocationDetailsRec;
return Directory_LocationDetailsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_LocationDetailsList = Directory_LocationDetailsList;

});
define("UBTConnect_Utils.model$Share_AttributesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Share_AttributesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Share_AttributesRecordList = (function (_super) {
__extends(Share_AttributesRecordList, _super);
function Share_AttributesRecordList(defaults) {
_super.apply(this, arguments);
}
Share_AttributesRecordList.itemType = UBTConnect_UtilsModel.Share_AttributesRecord;
return Share_AttributesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Share_AttributesRecordList = Share_AttributesRecordList;

});
define("UBTConnect_Utils.model$NoteActionTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnect_Utils.model", "Connect_CommonEntities_DB.model$NoteActionTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NoteActionTypeRecord = (function (_super) {
__extends(NoteActionTypeRecord, _super);
function NoteActionTypeRecord(defaults) {
_super.apply(this, arguments);
}
NoteActionTypeRecord.attributesToDeclare = function () {
return [
this.attr("NoteActionType", "noteActionTypeAttr", "NoteActionType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.NoteActionTypeRec());
}, true, Connect_CommonEntities_DBModel.NoteActionTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
NoteActionTypeRecord.fromStructure = function (str) {
return new NoteActionTypeRecord(new NoteActionTypeRecord.RecordClass({
noteActionTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NoteActionTypeRecord._isAnonymousRecord = true;
NoteActionTypeRecord.UniqueId = "eac295cb-1a9c-436f-62b2-c17d8dfb9857";
NoteActionTypeRecord.init();
return NoteActionTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.NoteActionTypeRecord = NoteActionTypeRecord;

});
define("UBTConnect_Utils.model$ExternalAppPackageNameList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ExternalAppPackageNameRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ExternalAppPackageNameList = (function (_super) {
__extends(ExternalAppPackageNameList, _super);
function ExternalAppPackageNameList(defaults) {
_super.apply(this, arguments);
}
ExternalAppPackageNameList.itemType = UBTConnect_UtilsModel.ExternalAppPackageNameRec;
return ExternalAppPackageNameList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ExternalAppPackageNameList = ExternalAppPackageNameList;

});
define("UBTConnect_Utils.model$ImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ImageSizeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ImageSizeRecordList = (function (_super) {
__extends(ImageSizeRecordList, _super);
function ImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
ImageSizeRecordList.itemType = UBTConnect_UtilsModel.ImageSizeRecord;
return ImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ImageSizeRecordList = ImageSizeRecordList;

});
define("UBTConnect_Utils.model$UBT_ButtonTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$UBT_ButtonTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ButtonTypeRecordList = (function (_super) {
__extends(UBT_ButtonTypeRecordList, _super);
function UBT_ButtonTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonTypeRecordList.itemType = UBTConnect_UtilsModel.UBT_ButtonTypeRecord;
return UBT_ButtonTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ButtonTypeRecordList = UBT_ButtonTypeRecordList;

});
define("UBTConnect_Utils.model$MyBookmarks_GroupList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "UBTConnect_Utils.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_MyBookmarks_BL"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupList = (function (_super) {
__extends(MyBookmarks_GroupList, _super);
function MyBookmarks_GroupList(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupList.itemType = Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec;
return MyBookmarks_GroupList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.MyBookmarks_GroupList = MyBookmarks_GroupList;

});
define("UBTConnect_Utils.model$UBT_VerticalAlignList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_VerticalAlignRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignList = (function (_super) {
__extends(UBT_VerticalAlignList, _super);
function UBT_VerticalAlignList(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignList.itemType = UBTConnectLibraryModel.UBT_VerticalAlignRec;
return UBT_VerticalAlignList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_VerticalAlignList = UBT_VerticalAlignList;

});
define("UBTConnect_Utils.model$NotesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$NotesRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NotesRecordList = (function (_super) {
__extends(NotesRecordList, _super);
function NotesRecordList(defaults) {
_super.apply(this, arguments);
}
NotesRecordList.itemType = UBTConnect_UtilsModel.NotesRecord;
return NotesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.NotesRecordList = NotesRecordList;

});
define("UBTConnect_Utils.model$SystemPolicyTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "UBTConnect_Utils.model", "ApplicationPolicies.model$SystemPolicyTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SystemPolicyTypeList = (function (_super) {
__extends(SystemPolicyTypeList, _super);
function SystemPolicyTypeList(defaults) {
_super.apply(this, arguments);
}
SystemPolicyTypeList.itemType = ApplicationPoliciesModel.SystemPolicyTypeRec;
return SystemPolicyTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SystemPolicyTypeList = SystemPolicyTypeList;

});
define("UBTConnect_Utils.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$PositionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = UBTConnect_UtilsModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PositionRecordList = PositionRecordList;

});
define("UBTConnect_Utils.model$HeaderList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "UBTConnect_Utils.model", "FileTransferPlugin.model$HeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FileTransferPlugin"], function (exports, OutSystems, FileTransferPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var HeaderList = (function (_super) {
__extends(HeaderList, _super);
function HeaderList(defaults) {
_super.apply(this, arguments);
}
HeaderList.itemType = FileTransferPluginModel.HeaderRec;
return HeaderList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.HeaderList = HeaderList;

});
define("UBTConnect_Utils.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_Utils.model", "ServiceCenter.model$UserRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UserList = UserList;

});
define("UBTConnect_Utils.model$UBT_ColumnBehaviourList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourList = (function (_super) {
__extends(UBT_ColumnBehaviourList, _super);
function UBT_ColumnBehaviourList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourList.itemType = UBTConnectLibraryModel.UBT_ColumnBehaviourRec;
return UBT_ColumnBehaviourList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ColumnBehaviourList = UBT_ColumnBehaviourList;

});
define("UBTConnect_Utils.model$ContactByPhonePopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$ContactByPhonePopupDataRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var ContactByPhonePopupDataList = (function (_super) {
__extends(ContactByPhonePopupDataList, _super);
function ContactByPhonePopupDataList(defaults) {
_super.apply(this, arguments);
}
ContactByPhonePopupDataList.itemType = UBTConnect_UtilsModel.ContactByPhonePopupDataRec;
return ContactByPhonePopupDataList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.ContactByPhonePopupDataList = ContactByPhonePopupDataList;

});
define("UBTConnect_Utils.model$NoteActionTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$NoteActionTypeRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var NoteActionTypeRecordList = (function (_super) {
__extends(NoteActionTypeRecordList, _super);
function NoteActionTypeRecordList(defaults) {
_super.apply(this, arguments);
}
NoteActionTypeRecordList.itemType = UBTConnect_UtilsModel.NoteActionTypeRecord;
return NoteActionTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.NoteActionTypeRecordList = NoteActionTypeRecordList;

});
define("UBTConnect_Utils.model$UBT_ButtonSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model$UBT_ButtonSizeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_ButtonSizeList = (function (_super) {
__extends(UBT_ButtonSizeList, _super);
function UBT_ButtonSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonSizeList.itemType = UBTConnectLibraryModel.UBT_ButtonSizeRec;
return UBT_ButtonSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_ButtonSizeList = UBT_ButtonSizeList;

});
define("UBTConnect_Utils.model$IOSOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$IOSOptionsRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var IOSOptionsRecordList = (function (_super) {
__extends(IOSOptionsRecordList, _super);
function IOSOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
IOSOptionsRecordList.itemType = UBTConnect_UtilsModel.IOSOptionsRecord;
return IOSOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.IOSOptionsRecordList = IOSOptionsRecordList;

});
define("UBTConnect_Utils.model$Type_ExternalShareOptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Type_ExternalShareOptionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Type_ExternalShareOptionRecordList = (function (_super) {
__extends(Type_ExternalShareOptionRecordList, _super);
function Type_ExternalShareOptionRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ExternalShareOptionRecordList.itemType = UBTConnect_UtilsModel.Type_ExternalShareOptionRecord;
return Type_ExternalShareOptionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Type_ExternalShareOptionRecordList = Type_ExternalShareOptionRecordList;

});
define("UBTConnect_Utils.model$SelectableSearchResultListList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SelectableSearchResultListRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SelectableSearchResultListList = (function (_super) {
__extends(SelectableSearchResultListList, _super);
function SelectableSearchResultListList(defaults) {
_super.apply(this, arguments);
}
SelectableSearchResultListList.itemType = UBTConnect_UtilsModel.SelectableSearchResultListRec;
return SelectableSearchResultListList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SelectableSearchResultListList = SelectableSearchResultListList;

});
define("UBTConnect_Utils.model$Directory_LocalitySubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_LocalitySubdivisionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_LocalitySubdivisionRecord = (function (_super) {
__extends(Directory_LocalitySubdivisionRecord, _super);
function Directory_LocalitySubdivisionRecord(defaults) {
_super.apply(this, arguments);
}
Directory_LocalitySubdivisionRecord.attributesToDeclare = function () {
return [
this.attr("Directory_LocalitySubdivision", "directory_LocalitySubdivisionAttr", "Directory_LocalitySubdivision", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_LocalitySubdivisionRec());
}, true, APIDomain_Directory_ISModel.Directory_LocalitySubdivisionRec)
].concat(_super.attributesToDeclare.call(this));
};
Directory_LocalitySubdivisionRecord.fromStructure = function (str) {
return new Directory_LocalitySubdivisionRecord(new Directory_LocalitySubdivisionRecord.RecordClass({
directory_LocalitySubdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Directory_LocalitySubdivisionRecord._isAnonymousRecord = true;
Directory_LocalitySubdivisionRecord.UniqueId = "f8f192f9-017b-8fcb-317d-967ab34f3e3f";
Directory_LocalitySubdivisionRecord.init();
return Directory_LocalitySubdivisionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnect_UtilsModel.Directory_LocalitySubdivisionRecord = Directory_LocalitySubdivisionRecord;

});
define("UBTConnect_Utils.model$GetLightResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$GetLightResponseRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var GetLightResponseRecordList = (function (_super) {
__extends(GetLightResponseRecordList, _super);
function GetLightResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetLightResponseRecordList.itemType = UBTConnect_UtilsModel.GetLightResponseRecord;
return GetLightResponseRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.GetLightResponseRecordList = GetLightResponseRecordList;

});
define("UBTConnect_Utils.model$Connect_Menu_ItemsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Connect_Menu_ItemsRec"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Connect_Menu_ItemsList = (function (_super) {
__extends(Connect_Menu_ItemsList, _super);
function Connect_Menu_ItemsList(defaults) {
_super.apply(this, arguments);
}
Connect_Menu_ItemsList.itemType = UBTConnect_UtilsModel.Connect_Menu_ItemsRec;
return Connect_Menu_ItemsList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Connect_Menu_ItemsList = Connect_Menu_ItemsList;

});
define("UBTConnect_Utils.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "UBTConnect_Utils.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("UBTConnect_Utils.model$PathDirectoryList", ["exports", "OutSystems/ClientRuntime/Main", "FilePlugin.model", "UBTConnect_Utils.model", "FilePlugin.model$PathDirectoryRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FilePlugin"], function (exports, OutSystems, FilePluginModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var PathDirectoryList = (function (_super) {
__extends(PathDirectoryList, _super);
function PathDirectoryList(defaults) {
_super.apply(this, arguments);
}
PathDirectoryList.itemType = FilePluginModel.PathDirectoryRec;
return PathDirectoryList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.PathDirectoryList = PathDirectoryList;

});
define("UBTConnect_Utils.model$UBT_MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTConnect_Utils.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeList = (function (_super) {
__extends(UBT_MessageTypeList, _super);
function UBT_MessageTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRec;
return UBT_MessageTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.UBT_MessageTypeList = UBT_MessageTypeList;

});
define("UBTConnect_Utils.model$SearchResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$SearchResultRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var SearchResultRecordList = (function (_super) {
__extends(SearchResultRecordList, _super);
function SearchResultRecordList(defaults) {
_super.apply(this, arguments);
}
SearchResultRecordList.itemType = UBTConnect_UtilsModel.SearchResultRecord;
return SearchResultRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.SearchResultRecordList = SearchResultRecordList;

});
define("UBTConnect_Utils.model$Directory_LocalitySubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.model$Directory_LocalitySubdivisionRecord"], function (exports, OutSystems, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_LocalitySubdivisionRecordList = (function (_super) {
__extends(Directory_LocalitySubdivisionRecordList, _super);
function Directory_LocalitySubdivisionRecordList(defaults) {
_super.apply(this, arguments);
}
Directory_LocalitySubdivisionRecordList.itemType = UBTConnect_UtilsModel.Directory_LocalitySubdivisionRecord;
return Directory_LocalitySubdivisionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_LocalitySubdivisionRecordList = Directory_LocalitySubdivisionRecordList;

});
define("UBTConnect_Utils.model$Directory_UserCurrent_SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, UBTConnect_UtilsModel) {
var OS = OutSystems.Internal;
var Directory_UserCurrent_SubscriptionList = (function (_super) {
__extends(Directory_UserCurrent_SubscriptionList, _super);
function Directory_UserCurrent_SubscriptionList(defaults) {
_super.apply(this, arguments);
}
Directory_UserCurrent_SubscriptionList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec;
return Directory_UserCurrent_SubscriptionList;
})(OS.DataTypes.GenericRecordList);
UBTConnect_UtilsModel.Directory_UserCurrent_SubscriptionList = Directory_UserCurrent_SubscriptionList;

});
define("UBTConnect_Utils.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBTConnect_UtilsModel = exports;
Object.defineProperty(UBTConnect_UtilsModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["982fecfc-8f9a-41cf-b269-90455f8b8fc9"];
}
});

UBTConnect_UtilsModel.staticEntities = {};
UBTConnect_UtilsModel.staticEntities.connect_CacheType = {};
var getConnect_CacheTypeRecord = function (record) {
return UBTConnect_UtilsModel.module.staticEntities["89ba8432-7ef9-45e2-a1d0-062f91863b19"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "allSubdivisions", {
get: function () {
return getConnect_CacheTypeRecord("0f4a0774-b367-4162-9546-032ef993ae94");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "allLocalities", {
get: function () {
return getConnect_CacheTypeRecord("3efe1002-cfb1-45bd-95b4-76efca362bac");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "myCalendarEvents", {
get: function () {
return getConnect_CacheTypeRecord("475ca4f9-4265-426a-a2eb-6eaf7b42b589");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "policies", {
get: function () {
return getConnect_CacheTypeRecord("5325eef3-fdab-446f-87c8-7887296a3159");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "directoryUser", {
get: function () {
return getConnect_CacheTypeRecord("9aa59998-cc0d-4bd6-b154-44a47b14d68f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "allCountries", {
get: function () {
return getConnect_CacheTypeRecord("ba1319d0-8099-429d-b730-1ce3c0c245fc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_CacheType, "image", {
get: function () {
return getConnect_CacheTypeRecord("ec091ad3-59f2-40f4-8019-cbe1e30e48a9");
}
});

UBTConnect_UtilsModel.staticEntities.connect_Menu_Items = {};
var getConnect_Menu_ItemsRecord = function (record) {
return UBTConnect_UtilsModel.module.staticEntities["9823f4b0-a5a6-4e22-9948-ae0922309ca5"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "manageFeed", {
get: function () {
return getConnect_Menu_ItemsRecord("02e27b53-910b-4693-a1b7-a83d8da52152");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "manageWallet", {
get: function () {
return getConnect_Menu_ItemsRecord("1187aea1-5ace-4441-91fd-a95b59666ff6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "logOut", {
get: function () {
return getConnect_Menu_ItemsRecord("1c561f01-5f97-46a4-94b3-335eb1e557f3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "requestPhotoUpdate", {
get: function () {
return getConnect_Menu_ItemsRecord("5cb2964c-4a91-42e6-a21b-b99c56813fc7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "pINAndBiometrics", {
get: function () {
return getConnect_Menu_ItemsRecord("73aa9e8c-48af-4e32-82bb-037dc5e540fb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "contactUs", {
get: function () {
return getConnect_Menu_ItemsRecord("74ca020c-0f06-4e62-b97a-72696aa35e7e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "termsAndPolicies", {
get: function () {
return getConnect_Menu_ItemsRecord("a382fea7-e341-40b0-9b6d-c23493d4e3f8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Menu_Items, "subscriptionAndPayments", {
get: function () {
return getConnect_Menu_ItemsRecord("b97c7e82-a93f-4db8-9609-2a145c222a5d");
}
});

UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items = {};
var getConnect_BottomBar_ItemsRecord = function (record) {
return UBTConnect_UtilsModel.module.staticEntities["dc4cd729-8bdd-4222-9341-f1f7d7898aa9"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "home", {
get: function () {
return getConnect_BottomBar_ItemsRecord("0ea3391f-e98d-412c-9668-d4a9d7757c3f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "bookmarks", {
get: function () {
return getConnect_BottomBar_ItemsRecord("15051b70-14e6-42c4-a6cf-b122bde60fb1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "menu", {
get: function () {
return getConnect_BottomBar_ItemsRecord("303baa05-a584-4e09-ab2b-c19cbfcd0b0a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "settings", {
get: function () {
return getConnect_BottomBar_ItemsRecord("448a649b-b11e-45ed-8e1f-856676ad92b8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "updates", {
get: function () {
return getConnect_BottomBar_ItemsRecord("4ca5691f-496e-42db-a156-dc778beed4ec");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "directory", {
get: function () {
return getConnect_BottomBar_ItemsRecord("caac0aa2-5f7e-4e7d-a388-1ad4a8a385cb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "explore", {
get: function () {
return getConnect_BottomBar_ItemsRecord("e0ee4749-fe71-41ff-bac2-e4cc02d1b5cd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items, "bookmarked", {
get: function () {
return getConnect_BottomBar_ItemsRecord("f4ec370a-a77d-4e2a-b3c2-8b288a3864c6");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_MessageType = {};
var getUBT_MessageTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["2c2986c3-daaf-4dc5-a0c6-d9a75a42125d"].staticEntities["5a451e53-0d4f-4a13-8dcd-d2c12db5eb4f"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_MessageType, "error", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("11de012f-8214-4480-bc41-e674f8463a2a"));
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_MessageType, "success", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("232e2df8-4514-48c8-bd5d-136ff9bc8cf0"));
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_MessageType, "info", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("b69f4bc5-4211-4808-ae64-b62df5426873"));
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_MessageType, "warning", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("d02ae75c-15a9-4617-abb2-814d976949d2"));
}
});

UBTConnect_UtilsModel.staticEntities.systemPolicyType = {};
var getSystemPolicyTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["41127a3e-e405-4aa0-811c-14b06aacb8ef"].staticEntities["4e2ea4d4-2cf5-46cb-ad16-9422b5103304"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.systemPolicyType, "termsAndConditions", {
get: function () {
return getSystemPolicyTypeRecord("81acc485-059f-4000-8849-d6526a74a1af");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.systemPolicyType, "privacyPolicy", {
get: function () {
return getSystemPolicyTypeRecord("8d5328ad-93d0-41e1-8c18-4a60e524416f");
}
});

UBTConnect_UtilsModel.staticEntities.target = {};
var getTargetRecord = function (record) {
return OS.ApplicationInfo.getModules()["411582e0-1482-4652-8bb1-ff206acc32fc"].staticEntities["571957b2-a064-4298-b194-fd269b3c9073"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.target, "iN_APP_BROWSER", {
get: function () {
return getTargetRecord("2b573f5a-c9be-4fce-9c58-143fd1cd4286");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.target, "sYSTEM", {
get: function () {
return getTargetRecord("85ecde5b-e3d1-4a92-a878-5c3fead6481e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.target, "iN_APP_SYSTEM_BROWSER", {
get: function () {
return getTargetRecord("e02c5fb7-bd6c-469e-97f9-48a5b7952847");
}
});

UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption = {};
var getType_ExternalShareOptionRecord = function (record) {
return OS.ApplicationInfo.getModules()["89a8b22b-4939-4962-ac03-ed124a10543f"].staticEntities["aefe3940-e314-42d9-8b31-4852c5c81e24"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption, "copyLink", {
get: function () {
return getType_ExternalShareOptionRecord("02a46ba4-70e2-421f-886e-717f0c98e0f1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption, "signal", {
get: function () {
return getType_ExternalShareOptionRecord("0c898275-acff-40f9-ad0e-9f30aa86ded2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption, "outlook", {
get: function () {
return getType_ExternalShareOptionRecord("394f4bc4-e0fd-4d4f-ba40-b50e92baae3e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption, "whatsapp", {
get: function () {
return getType_ExternalShareOptionRecord("d2075e82-2522-4a80-849f-ded6191bf579");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption, "systemShare", {
get: function () {
return getType_ExternalShareOptionRecord("f248e77a-52f4-4fa5-8ee1-1537978d7e02");
}
});

UBTConnect_UtilsModel.staticEntities.type_ShareObject = {};
var getType_ShareObjectRecord = function (record) {
return OS.ApplicationInfo.getModules()["89a8b22b-4939-4962-ac03-ed124a10543f"].staticEntities["fdd27f53-9f9c-477e-8a4a-1dd00c45a277"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "communityNotice", {
get: function () {
return getType_ShareObjectRecord("3b68532c-c7a8-490d-84bd-fc1842d6f70a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "locality", {
get: function () {
return getType_ShareObjectRecord("50105edb-d74e-4da5-8518-19cff43aca1e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "myHousehold", {
get: function () {
return getType_ShareObjectRecord("62d133fd-03de-4a54-b6a9-41b45317bcd2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "supperMeeting", {
get: function () {
return getType_ShareObjectRecord("66862e7a-561e-4166-b594-860a0e00d015");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "update", {
get: function () {
return getType_ShareObjectRecord("804d78ff-a96b-43a0-88a9-9bac7e5923a9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "localityContact", {
get: function () {
return getType_ShareObjectRecord("8540a0c3-d763-43b9-aacb-4da071245b38");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "feed", {
get: function () {
return getType_ShareObjectRecord("9b83faac-3c6d-4a69-9be5-7c00c9ff787a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "household", {
get: function () {
return getType_ShareObjectRecord("be388807-f406-4e72-86b3-b4e136d63453");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "campusCo", {
get: function () {
return getType_ShareObjectRecord("c5cd2483-9015-4ddb-8878-3321d4f7cce3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_ShareObject, "oneSchoolGlobal", {
get: function () {
return getType_ShareObjectRecord("e62e5bba-01ff-40c5-abe9-333c594000a7");
}
});

UBTConnect_UtilsModel.staticEntities.memoryCacheType = {};
var getMemoryCacheTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["b7049202-6510-41f3-8209-f2425737f568"].staticEntities["167f45ab-d8e4-4848-97f6-852b13f63785"][record];
};
UBTConnect_UtilsModel.staticEntities.myBookmarks_Group = {};
var getMyBookmarks_GroupRecord = function (record) {
return OS.ApplicationInfo.getModules()["ccacdbe8-c124-4e26-ac14-d39cf1b372dc"].staticEntities["d277c37a-277e-419f-81ea-0ffb36be8558"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_Group, "locations", {
get: function () {
return getMyBookmarks_GroupRecord("2860dbc3-b113-4f27-bf00-060398d4854a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_Group, "entities", {
get: function () {
return getMyBookmarks_GroupRecord("77369632-c604-40b2-872b-6218e0eed2b6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_Group, "contacts", {
get: function () {
return getMyBookmarks_GroupRecord("e247ecb6-1adf-4f59-9ec9-2683f67eb8cd");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_ImageSize = {};
var getUBT_ImageSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["07cee39a-18ef-4dbf-8471-ec7fcfedef5a"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "fullHeight_100_Percent", {
get: function () {
return getUBT_ImageSizeRecord("0323f7f5-c991-4653-8ef6-506692bdfc4b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "fullWidth_100_Percent", {
get: function () {
return getUBT_ImageSizeRecord("0f7c1d4a-dfe7-42a5-a4d4-7043e009450b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "medium_60", {
get: function () {
return getUBT_ImageSizeRecord("1b1aea95-ad82-4429-b68a-80820cf8fc1c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "extraSmall_32", {
get: function () {
return getUBT_ImageSizeRecord("22b961e4-50eb-4be4-b2e0-a450630f9091");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "large_65", {
get: function () {
return getUBT_ImageSizeRecord("306a3f94-642c-4c0f-bc20-cd559b261dbc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "small_40", {
get: function () {
return getUBT_ImageSizeRecord("388c970f-f6ab-40cc-a651-5f5c016da8b6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "listThumbnail_104", {
get: function () {
return getUBT_ImageSizeRecord("3ea349ce-8f4d-4c79-a02d-d10da50b8170");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "square", {
get: function () {
return getUBT_ImageSizeRecord("5fe1292f-fb79-4c0e-8275-31a50a05797b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "auto", {
get: function () {
return getUBT_ImageSizeRecord("6d5cd9e3-3b51-4955-bf2e-b2ce75fe3487");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "base_52", {
get: function () {
return getUBT_ImageSizeRecord("83108d3c-d465-43d3-a8be-9813f5299db9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "extraLarge_100", {
get: function () {
return getUBT_ImageSizeRecord("9b640159-8fa5-47a0-bafd-e56680d4258a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "halfWidth_50vw", {
get: function () {
return getUBT_ImageSizeRecord("a820108b-9612-4fbc-99ea-b622a04efe9d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "maxHeight_100vh", {
get: function () {
return getUBT_ImageSizeRecord("c61c2400-2aee-4b97-aae0-9a25a06a0beb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "quarterWidth_25vw", {
get: function () {
return getUBT_ImageSizeRecord("ca560d17-83a8-4050-8346-7872a1ebd03f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "maxWidth_100vw", {
get: function () {
return getUBT_ImageSizeRecord("cd58b82c-6f73-4350-834c-3962510a400d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "doubleExtraLarge_176", {
get: function () {
return getUBT_ImageSizeRecord("e366276e-e1d4-44fb-a3f2-b04d303b0669");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ImageSize, "thirdWidth_33vw", {
get: function () {
return getUBT_ImageSizeRecord("e79a4d16-4d28-4610-bbed-3079e45e639f");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_BackgroundImageSize = {};
var getUBT_BackgroundImageSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["0d40b70b-8b2b-4ada-858a-a3ed34b83bc1"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_BackgroundImageSize, "intrinsicWidth_3_To_2", {
get: function () {
return getUBT_BackgroundImageSizeRecord("3fa39585-8f73-43bb-9ec2-529ec313539f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_BackgroundImageSize, "intrinsicHeight_2_To_3", {
get: function () {
return getUBT_BackgroundImageSizeRecord("49eca0a8-3232-4cd0-bb39-207bab1bc3ec");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Color = {};
var getUBT_ColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["15a2eb42-4574-4866-81b1-27212b512e30"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleDarkest", {
get: function () {
return getUBT_ColorRecord("05830090-6546-41ec-bd4a-339f0bd9de3e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueDarkest", {
get: function () {
return getUBT_ColorRecord("08872960-e4ef-4ee6-87d2-ed3c25354046");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("0e45baea-3480-4314-a952-7426e2e48f07");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "tertiary", {
get: function () {
return getUBT_ColorRecord("13882892-29e0-4466-87d6-8bf6a647a5e6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueLightest", {
get: function () {
return getUBT_ColorRecord("164d1944-08b6-4ac1-86cb-3c7df3a2ac1e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("16d0c42f-008b-4dec-b157-bad1fe350783");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueLight", {
get: function () {
return getUBT_ColorRecord("184b3928-360f-4550-a484-b7ba3e58c2c5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanLighter", {
get: function () {
return getUBT_ColorRecord("185b2676-2026-47ee-a0b3-c75a1c8a1288");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachDarker", {
get: function () {
return getUBT_ColorRecord("1fda6565-fa77-4f73-9504-c6d831e41be6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellowDarkest", {
get: function () {
return getUBT_ColorRecord("21ec71cc-7550-4356-8cf8-a78054fac1b8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral8", {
get: function () {
return getUBT_ColorRecord("23e5ec91-9544-4fd5-89f8-b733bcd83734");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "pink", {
get: function () {
return getUBT_ColorRecord("2c310cbc-847b-4e25-8063-1c2ae12e1309");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "primaryGradientRadial", {
get: function () {
return getUBT_ColorRecord("2e7bb6b2-9912-43f7-9d2e-56944941a6e8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "redDarker", {
get: function () {
return getUBT_ColorRecord("31ac2430-9041-4ac7-8ce6-6a0d6f331045");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanLightest", {
get: function () {
return getUBT_ColorRecord("33117849-859f-436f-8e94-1b426720e0e6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyan", {
get: function () {
return getUBT_ColorRecord("342d31e3-5c19-4fe7-bcbc-86819dd070aa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellowLighter", {
get: function () {
return getUBT_ColorRecord("3523291e-51ee-4f2b-89ab-2400cf943740");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanDarker", {
get: function () {
return getUBT_ColorRecord("3767d77b-68a6-411b-a176-c6a90cd3448d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "error", {
get: function () {
return getUBT_ColorRecord("3798cac6-af7e-46e9-acc2-9f8bea33fafa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "grape", {
get: function () {
return getUBT_ColorRecord("3972a60d-06e5-444d-8237-d5a00416e8c2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "initial", {
get: function () {
return getUBT_ColorRecord("3d795492-e13d-4e93-9d76-19d01fb327e7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "inherit", {
get: function () {
return getUBT_ColorRecord("3f12e5fd-3aa8-4024-87e8-c5db6470f756");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral0", {
get: function () {
return getUBT_ColorRecord("4089faf6-2df0-4abd-a972-8887dbba8b5b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral4", {
get: function () {
return getUBT_ColorRecord("49cca530-5a45-4f7f-b2b2-57c33874ec1f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "primaryGradientLinear", {
get: function () {
return getUBT_ColorRecord("4ffa8385-a5e4-4b60-a516-fdfca21cd066");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachDarkest", {
get: function () {
return getUBT_ColorRecord("518e0c1d-595e-4dd5-b4c3-cfe77d842ebc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachLighter", {
get: function () {
return getUBT_ColorRecord("5753052b-e2f1-4b7c-bb19-0ccb1c5e7f79");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "greenLightest", {
get: function () {
return getUBT_ColorRecord("59e2d10f-4d67-4a69-900b-f413511b580c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueDark", {
get: function () {
return getUBT_ColorRecord("5c12954d-57e4-487a-a815-4cf7ed0c7598");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral6", {
get: function () {
return getUBT_ColorRecord("5f10c2b1-7b7f-4959-aba3-113716521d47");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "redDark", {
get: function () {
return getUBT_ColorRecord("607f3988-475c-43a0-aba4-2ba4b58907ea");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "pinkNonStandardDarker", {
get: function () {
return getUBT_ColorRecord("633662b9-2ea8-4041-b701-0536e9c42ff1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueNonStandard", {
get: function () {
return getUBT_ColorRecord("63bf24fc-38fc-4e0d-834f-1ce87dc0b10a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "warning", {
get: function () {
return getUBT_ColorRecord("65d4bf68-0e90-4cb7-a7b2-6ceb4f92c9df");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "revert", {
get: function () {
return getUBT_ColorRecord("67b0c706-c10c-4797-a007-9b1ce8545235");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blue", {
get: function () {
return getUBT_ColorRecord("71b82b5e-b87e-4b1b-b13b-835c761d99fc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleLightest", {
get: function () {
return getUBT_ColorRecord("78f36fed-68c7-4882-a056-b3fda622cb2c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleDark", {
get: function () {
return getUBT_ColorRecord("7b9fda54-5e8c-4b3d-aa35-9a511d69e5df");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral3", {
get: function () {
return getUBT_ColorRecord("7f4b5d80-4007-43d3-a275-e312abe700f4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellowLight", {
get: function () {
return getUBT_ColorRecord("845b1f32-a12e-4389-9f67-3ae2fa9b0d2b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("85b0a09c-16b7-44b4-96d8-1f9da2408dbb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "green", {
get: function () {
return getUBT_ColorRecord("85c37060-4326-44df-a0cc-5a13f69f26d5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "teal", {
get: function () {
return getUBT_ColorRecord("8edd2770-9752-4b46-a493-80e135e23644");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "unset", {
get: function () {
return getUBT_ColorRecord("9240137f-908b-42b0-bd3f-b800caf21763");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachDark", {
get: function () {
return getUBT_ColorRecord("938ec1e5-34f4-4467-aae5-fd7a89984c47");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral2", {
get: function () {
return getUBT_ColorRecord("95b3893d-02fc-429e-99f3-28f89b523a0e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueLighter", {
get: function () {
return getUBT_ColorRecord("9887169b-0ae7-49e6-96ac-4bd3af1178d4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachLigh", {
get: function () {
return getUBT_ColorRecord("9be02ce6-47be-414a-9c8b-ec370651dac3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "lime", {
get: function () {
return getUBT_ColorRecord("9d4aed3b-1f36-4052-9d5c-34e77a615615");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "pinkNonStandard", {
get: function () {
return getUBT_ColorRecord("a1e29ef9-84ed-49d3-826c-cc69c24c7db3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "greenDarker", {
get: function () {
return getUBT_ColorRecord("a50a3956-0ce6-4416-a796-667fe54fa4a6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellow", {
get: function () {
return getUBT_ColorRecord("a93a0099-6233-4cd9-9f24-63a491bef071");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "orange", {
get: function () {
return getUBT_ColorRecord("a947cac8-4262-401d-94b7-c31c42ba15bc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral5", {
get: function () {
return getUBT_ColorRecord("aa4cac98-190b-413a-8fc2-c21902ea6b5e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanDarkest", {
get: function () {
return getUBT_ColorRecord("ae936fa8-46e1-4945-ab06-297b1675d4c4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral1", {
get: function () {
return getUBT_ColorRecord("b16bdf21-ff3f-4360-a8a7-cb36698afaf3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "transparent", {
get: function () {
return getUBT_ColorRecord("b29917b7-38c4-47f2-be97-4515098cf2e2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral10", {
get: function () {
return getUBT_ColorRecord("b4537f80-ed23-4d32-aaef-8b9dd53be850");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleLighter", {
get: function () {
return getUBT_ColorRecord("b59d16dd-20dd-49a9-92fa-1db232143f8c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleDarker", {
get: function () {
return getUBT_ColorRecord("b7cfbe79-7a84-4f1b-9194-3a0e444d8c23");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "greenLighter", {
get: function () {
return getUBT_ColorRecord("b93c6fb3-b092-48cd-9840-9ca063748e80");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanDark", {
get: function () {
return getUBT_ColorRecord("bba397ea-8a54-4af2-95d2-a10e500fe97c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "success", {
get: function () {
return getUBT_ColorRecord("be151629-8a62-4b12-b1ea-563e8353213d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purpleLight", {
get: function () {
return getUBT_ColorRecord("c3edeafe-e2af-4517-a5b9-814d25f96fb3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral9", {
get: function () {
return getUBT_ColorRecord("c5289117-fd0c-46eb-b407-29ae599a70a8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueDarker", {
get: function () {
return getUBT_ColorRecord("c8ca8c59-c581-48f7-8e21-d0bff1f606b6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "violet", {
get: function () {
return getUBT_ColorRecord("cc5fce11-6caf-4f83-a062-3c87d045aa5b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellowLightest", {
get: function () {
return getUBT_ColorRecord("ccf99b97-b006-4cf3-838e-18a31ec7485f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peachLightest", {
get: function () {
return getUBT_ColorRecord("ce399b09-df7c-48f3-a796-ba35722697d5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "primary", {
get: function () {
return getUBT_ColorRecord("d27276c0-e4ce-4d45-b89c-7ada5a5874dd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "secondary", {
get: function () {
return getUBT_ColorRecord("dad810e5-c4ab-40dc-9ab3-63c043cfc5ae");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "neutral7", {
get: function () {
return getUBT_ColorRecord("dc618da1-29e1-4b32-b176-697d63ed0603");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueNonStandarDarker", {
get: function () {
return getUBT_ColorRecord("e1b590d2-5868-4575-8190-9c4d7021a27e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "greenDark", {
get: function () {
return getUBT_ColorRecord("e4297c8c-fbc1-45cf-bd37-26d5b41da6a9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellowDarker", {
get: function () {
return getUBT_ColorRecord("e757b4a0-7402-46d6-a00c-319209d8ff2d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "indigo", {
get: function () {
return getUBT_ColorRecord("e899a76a-b1ec-41b0-936d-e7ce2081a389");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "greenDarkest", {
get: function () {
return getUBT_ColorRecord("eb901679-daca-482b-bd68-c434c83479f2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "peach", {
get: function () {
return getUBT_ColorRecord("ebcf5343-615e-40cb-a2e8-0b5f747824d7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "cyanLight", {
get: function () {
return getUBT_ColorRecord("efd1b932-24d7-4d2c-8f21-3ef2c8c84edb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "greenLight", {
get: function () {
return getUBT_ColorRecord("f3e04b12-ec38-4c39-8bde-776328a69748");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "yellowDark", {
get: function () {
return getUBT_ColorRecord("f9715390-dae9-4684-b452-9e0145dfd68d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "blueDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("fc7450fa-8faa-48b1-90ea-02176cd11a23");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "purple", {
get: function () {
return getUBT_ColorRecord("fcbb74a3-797c-455c-87b4-d4465652e5e9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "info", {
get: function () {
return getUBT_ColorRecord("fdffead9-4f49-483a-9f70-991b0cf13531");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Color, "red", {
get: function () {
return getUBT_ColorRecord("fe45b252-bf2a-494a-9a8c-72adae48034a");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize = {};
var getUBT_ButtonSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["2df4b04f-e905-4073-b8b8-d74ef76c6b57"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize, "small", {
get: function () {
return getUBT_ButtonSizeRecord("2babfcce-5958-43b9-8b0b-cacbb84c7977");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize, "extraSmall", {
get: function () {
return getUBT_ButtonSizeRecord("9968e63e-5da5-4f9d-9de3-38b18e670dd9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ButtonSize, "medium", {
get: function () {
return getUBT_ButtonSizeRecord("c4c7d199-18d4-4972-aa21-536229ce508c");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_ButtonType = {};
var getUBT_ButtonTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["360e9b7c-fb2c-4068-982b-6af26cc639ab"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ButtonType, "tertiary", {
get: function () {
return getUBT_ButtonTypeRecord("210ca79b-cfa5-40ab-9caf-27dc44367742");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ButtonType, "primary", {
get: function () {
return getUBT_ButtonTypeRecord("253d9808-b14e-44dd-8274-0323514a76f2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ButtonType, "scondary", {
get: function () {
return getUBT_ButtonTypeRecord("c655fdb2-64ce-4534-b473-073dd66d3b8c");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Visibility = {};
var getUBT_VisibilityRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["3c2ad8e8-4fff-4bab-92d7-f4537173fb98"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Visibility, "hidden", {
get: function () {
return getUBT_VisibilityRecord("4027d41a-6253-4622-a1db-be03a4d4fa71");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Visibility, "collapse", {
get: function () {
return getUBT_VisibilityRecord("42ed01be-b254-41cd-9cbe-93f86a88766e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Visibility, "visible", {
get: function () {
return getUBT_VisibilityRecord("57a2edaa-9a53-492b-800c-0dc74449ade6");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Shadow = {};
var getUBT_ShadowRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["570b9814-0389-4cd9-bbb9-4acd094b3497"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "extraSmall", {
get: function () {
return getUBT_ShadowRecord("10568518-f28e-44c9-90a1-00ea1ef439d5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "extraLarge", {
get: function () {
return getUBT_ShadowRecord("13a3d59d-9881-4dfa-ba79-414bdae40434");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "extraSmallTop", {
get: function () {
return getUBT_ShadowRecord("17931ee8-f67b-4f63-8ae1-e44850ff5ae3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "small", {
get: function () {
return getUBT_ShadowRecord("45284799-9fff-46c6-a55e-df5f061a7f7a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "s2", {
get: function () {
return getUBT_ShadowRecord("49722c94-3977-46ac-8e6c-9e4f88046065");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "large", {
get: function () {
return getUBT_ShadowRecord("5ff32da9-8ae9-4300-91f7-df57dc47dabd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "medium", {
get: function () {
return getUBT_ShadowRecord("77b641d5-115d-4141-95d7-a54ed168aaea");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shadow, "none", {
get: function () {
return getUBT_ShadowRecord("95d42ca8-3a28-4445-bc71-0ee98b56dca9");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Shape = {};
var getUBT_ShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["5950c080-6e4b-48f6-89fe-55655482924b"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shape, "soft", {
get: function () {
return getUBT_ShapeRecord("0c36bb8f-4073-4775-8c28-eb1d30eed6aa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shape, "medium", {
get: function () {
return getUBT_ShapeRecord("4223ce2a-7c06-4b23-afcd-7841b7559881");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shape, "circle", {
get: function () {
return getUBT_ShapeRecord("87962f03-f5ed-42ea-801f-b98f51cb559c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shape, "large", {
get: function () {
return getUBT_ShapeRecord("d61799bc-5a05-4315-ac46-77c3b0504beb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shape, "none", {
get: function () {
return getUBT_ShapeRecord("f37348d0-8b88-4a75-80a6-e76e86e9bc35");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Shape, "rounded", {
get: function () {
return getUBT_ShapeRecord("fb7c5397-3c16-44fd-b5ea-36a00efdcd7c");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_IconSize = {};
var getUBT_IconSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["5c868b5a-3a9c-45fd-9724-88d7df3eaaec"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "small_12", {
get: function () {
return getUBT_IconSizeRecord("43088cb2-1b1d-4f32-b2d3-65ba14737dcd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_32", {
get: function () {
return getUBT_IconSizeRecord("51091809-5176-4669-8100-2874d9c94960");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "base_24", {
get: function () {
return getUBT_IconSizeRecord("67a32265-0427-4e06-b7c6-496df135460e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_18", {
get: function () {
return getUBT_IconSizeRecord("71843981-3f48-434e-9d09-0d92f60a2591");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "extraSmall_10", {
get: function () {
return getUBT_IconSizeRecord("7adb5a43-441f-4ffb-a1ca-ed8abf3dfd88");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_64", {
get: function () {
return getUBT_IconSizeRecord("8512eb1f-1008-4d7c-b0a2-265a6aafacd0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "display_36", {
get: function () {
return getUBT_IconSizeRecord("91f8ac4b-eec9-4927-b3c7-e0bd72444cf1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "medium_20", {
get: function () {
return getUBT_IconSizeRecord("98d3467e-0017-4aa1-981f-929b030caf06");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_108", {
get: function () {
return getUBT_IconSizeRecord("9b36044e-87d6-4e9f-a8c0-6664a6a827d0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_40", {
get: function () {
return getUBT_IconSizeRecord("c2e3aa72-9dd6-4972-a40c-78d0acde17ff");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_16", {
get: function () {
return getUBT_IconSizeRecord("d36cf71f-f0ad-487a-8548-306c608b9f9c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_IconSize, "nonStandard_14", {
get: function () {
return getUBT_IconSizeRecord("d7aa876d-cfd2-4e80-87dd-52eb44cd09ea");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_FontWeight = {};
var getUBT_FontWeightRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["6024a623-26dc-4b80-8d13-c17d22458d47"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontWeight, "bold", {
get: function () {
return getUBT_FontWeightRecord("1886c4b9-8680-4707-b67d-ddcfc8a10146");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontWeight, "semiBold", {
get: function () {
return getUBT_FontWeightRecord("29004952-a085-4761-9daf-e1112e3eb0da");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontWeight, "regular", {
get: function () {
return getUBT_FontWeightRecord("709c6b9d-64e0-492f-89b5-bcd9f2919121");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontWeight, "medium", {
get: function () {
return getUBT_FontWeightRecord("a64fbd75-f7fd-4fd0-9eb8-8c3b09964ecc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontWeight, "light", {
get: function () {
return getUBT_FontWeightRecord("b14cf433-3d5e-49cb-abd3-89fa693d4b94");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection = {};
var getUBT_FlexDirectionRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["71ce133f-c7fd-4b8f-96ce-86fc9740c100"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection, "column", {
get: function () {
return getUBT_FlexDirectionRecord("1f51bc5f-99a0-4784-a349-e3c46a68084c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection, "columnReverse", {
get: function () {
return getUBT_FlexDirectionRecord("41228103-66c8-4179-b2eb-c6560a6a8d96");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection, "row", {
get: function () {
return getUBT_FlexDirectionRecord("4894b1a7-e8a3-4e41-8f30-8ed20a221576");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection, "rowReverse", {
get: function () {
return getUBT_FlexDirectionRecord("a8cb076a-720c-4ce5-9779-47108235f712");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Icons = {};
var getUBT_IconsRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["761dc95a-0f68-4160-83a0-143749383d08"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "marriage", {
get: function () {
return getUBT_IconsRecord("01967ad4-6bbf-443e-8285-e8e57b2b0632");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cottage", {
get: function () {
return getUBT_IconsRecord("01fd0b0c-e174-41e1-b88b-9df6517c95ce");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_CommunityCountries", {
get: function () {
return getUBT_IconsRecord("023e6a1c-c170-4b43-8324-297e10e0e896");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "group", {
get: function () {
return getUBT_IconsRecord("038a4fe0-799e-494a-ab3c-211c23271654");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowRight", {
get: function () {
return getUBT_IconsRecord("046695a9-b2b2-4670-a1a9-123ce6f5fd7f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "boy", {
get: function () {
return getUBT_IconsRecord("051f2c2a-d1ce-42f4-b09b-bd094bca02f8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "add", {
get: function () {
return getUBT_IconsRecord("0714fea8-7dea-4bcf-8671-f26dfb688cc0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_CommunityMembers", {
get: function () {
return getUBT_IconsRecord("07cd8dc1-ba67-43c5-8b4a-98ff341f6944");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "chevronDown", {
get: function () {
return getUBT_IconsRecord("08166391-4813-4ac9-b20b-b990cfe18ae0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "luggage", {
get: function () {
return getUBT_IconsRecord("08c8828f-9d45-4857-90df-6ab3793a846b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "myLocationFill", {
get: function () {
return getUBT_IconsRecord("0979fad9-693b-4810-a256-195cae4fb739");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "union", {
get: function () {
return getUBT_IconsRecord("09ae4e7b-1487-4dc7-9155-9a6e066300d3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "locationOn", {
get: function () {
return getUBT_IconsRecord("0c0a76dd-c942-4b57-9437-74976a916818");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "storefront", {
get: function () {
return getUBT_IconsRecord("0c519f0f-c843-4abc-941d-f6d9f4c12ea7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "whatsapp", {
get: function () {
return getUBT_IconsRecord("0d96f6ca-9cef-4ac1-843c-81ad4c237aa6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "visibilityFill", {
get: function () {
return getUBT_IconsRecord("0dfa82bd-c1ed-42fc-90e9-e5aa423bc16d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cancel", {
get: function () {
return getUBT_IconsRecord("0e32ef3f-efa3-48ea-a1b0-568f0ee4a6f5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "personAdd", {
get: function () {
return getUBT_IconsRecord("0ec699ba-0eaa-4ce6-83ad-00eb6adc1f2b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "password", {
get: function () {
return getUBT_IconsRecord("0ed02f7d-cad7-44c6-9e53-0f56734e0f07");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "dynamicFeed", {
get: function () {
return getUBT_IconsRecord("102b4b8c-bcd3-4011-9aaa-d7bfdd542433");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "iosShare", {
get: function () {
return getUBT_IconsRecord("10688e47-0812-45e3-9169-377f63e47c75");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "calendarAdd", {
get: function () {
return getUBT_IconsRecord("11e01581-c412-423e-824a-284305392186");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "gift", {
get: function () {
return getUBT_IconsRecord("1305faf0-5480-4bff-8141-7b23376d8b2c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "record1", {
get: function () {
return getUBT_IconsRecord("13861d84-80dc-4c04-9d63-1d770681dd5d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "lDM", {
get: function () {
return getUBT_IconsRecord("143fb3dc-b108-4637-a17b-408cc1a4fce5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "reply", {
get: function () {
return getUBT_IconsRecord("144c3c28-9950-4880-a721-f92fbe7c28ef");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "partnerExchange", {
get: function () {
return getUBT_IconsRecord("15867a0f-96f6-431f-b82c-0da4464c9c56");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowOutward", {
get: function () {
return getUBT_IconsRecord("1905fa31-1db8-4232-af51-113be9cccdd0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "home", {
get: function () {
return getUBT_IconsRecord("190939d9-36b6-4191-b454-90e31962ef06");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "globeUK", {
get: function () {
return getUBT_IconsRecord("1952ef28-39f3-4883-b47a-1394459997a0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "replay", {
get: function () {
return getUBT_IconsRecord("1a48b465-71e7-4d09-b5b9-f87f76144c8b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "explore", {
get: function () {
return getUBT_IconsRecord("1c2c7434-d5dd-4a2a-9eff-49d7063aa0cb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "connectLogo", {
get: function () {
return getUBT_IconsRecord("1c301095-4bf7-4096-beea-85decd0b8bcf");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "error", {
get: function () {
return getUBT_IconsRecord("1c71bc61-b231-4c87-922a-c313d6ddf3e0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "playArrow", {
get: function () {
return getUBT_IconsRecord("1cb80687-9552-4b2d-9939-3eec621500f9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkboxFill", {
get: function () {
return getUBT_IconsRecord("1d090f65-b6a8-4450-b31b-0430867aa2b7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_ElGusto", {
get: function () {
return getUBT_IconsRecord("1d1ff2cc-8c99-45de-81be-a6c5c0e5f764");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "openNew", {
get: function () {
return getUBT_IconsRecord("1dfd3b2f-914f-410a-b6be-633c5c93b53d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_PinOneSchool", {
get: function () {
return getUBT_IconsRecord("22660839-d944-4d18-ae82-7f7d8f853b9f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "orbit", {
get: function () {
return getUBT_IconsRecord("254d3ef1-005e-4355-8f1f-7df80a0468bc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "uBT", {
get: function () {
return getUBT_IconsRecord("2882a951-2fb4-479a-a87f-f327da1b192d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "policy", {
get: function () {
return getUBT_IconsRecord("28f8245a-3cd9-42e8-8aa8-de3cd49ef203");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "radioUnchecked", {
get: function () {
return getUBT_IconsRecord("2a358645-89a2-4b9e-9e77-44c270956f4b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "public", {
get: function () {
return getUBT_IconsRecord("2b09c68d-9361-4b85-ab9c-d74804f94e37");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "eventNote", {
get: function () {
return getUBT_IconsRecord("2bba9527-6d3e-4bd7-8380-0c2de4845d73");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "help", {
get: function () {
return getUBT_IconsRecord("2c71544f-d715-40b9-82fe-a8017341e7ec");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "trove", {
get: function () {
return getUBT_IconsRecord("2d018719-66ae-4989-9dbb-b54dde21349b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "gridView", {
get: function () {
return getUBT_IconsRecord("2e1c7b32-5180-4009-98e3-5da055ca9360");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "notificationsFill", {
get: function () {
return getUBT_IconsRecord("2e749a54-d19c-4362-80fe-82ffbbfd69ad");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "calendar", {
get: function () {
return getUBT_IconsRecord("307db9b8-6f77-44b6-a601-9587539d4d6c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "tune", {
get: function () {
return getUBT_IconsRecord("31aa6503-79ac-47bc-abc4-c1470a0f9abb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "enterprise", {
get: function () {
return getUBT_IconsRecord("31ec4566-40e0-459f-ba26-7c85f670a2d0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "myLocation", {
get: function () {
return getUBT_IconsRecord("32f51bcb-30ec-4970-b53b-2e44b60944da");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_PinLock", {
get: function () {
return getUBT_IconsRecord("337fcfdd-ec24-4706-af2a-c771796c4e90");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "contactsFill", {
get: function () {
return getUBT_IconsRecord("33c801dc-95ec-4700-afff-104ce126eaae");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "eventNoteFill", {
get: function () {
return getUBT_IconsRecord("33ca9fc2-4e5d-4755-b4d7-e0649b5c6f18");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "call", {
get: function () {
return getUBT_IconsRecord("3525444b-9d1f-4c52-a922-4723c0ce07c1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "notifications", {
get: function () {
return getUBT_IconsRecord("3a0d7a28-5f0e-41eb-8766-dd9bc984f8f0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sort", {
get: function () {
return getUBT_IconsRecord("3a730ce3-50a4-4f24-83c3-835105bfb19f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "aodFill", {
get: function () {
return getUBT_IconsRecord("3c668376-fac3-401a-9378-d97065bda812");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_CommunityTradelink", {
get: function () {
return getUBT_IconsRecord("3da48273-0ed5-4609-8dd3-f28f6190645b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "scheduleFill", {
get: function () {
return getUBT_IconsRecord("3fdd2f3c-4040-42bc-85e3-aefad039c432");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "homeFill", {
get: function () {
return getUBT_IconsRecord("40ad5a6b-25f8-442a-8b98-552823e3a567");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sendMoney", {
get: function () {
return getUBT_IconsRecord("4125d6a8-da17-457a-bda0-e29fe27cf556");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "mailFill", {
get: function () {
return getUBT_IconsRecord("41ac9174-8215-434f-b067-277c7ef0ebcb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "block", {
get: function () {
return getUBT_IconsRecord("41ae034e-150a-408a-8ed3-78f1db8ee7ea");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "errorFill", {
get: function () {
return getUBT_IconsRecord("4343b5c4-be73-485f-919a-8c42fb06c6f5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "tooltipFill", {
get: function () {
return getUBT_IconsRecord("442943e0-01d4-450e-9e62-d3c53fb66b0c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkbox", {
get: function () {
return getUBT_IconsRecord("450a7217-12f4-4df4-a15c-45504366d99d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowLeft", {
get: function () {
return getUBT_IconsRecord("47f4fbb7-f2e5-4745-b966-1120481fb8d4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "personPlay", {
get: function () {
return getUBT_IconsRecord("4b903c72-8b47-4ee9-b9d0-72da2e48e323");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "signal", {
get: function () {
return getUBT_IconsRecord("4ccb171d-6f30-4cfe-aadc-64fdab936092");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "tooltip", {
get: function () {
return getUBT_IconsRecord("4cd3ad41-b170-41e4-ae1f-43e4ae7b4928");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cardOff", {
get: function () {
return getUBT_IconsRecord("4e38fd3c-e33c-4acc-8f9c-c07b7101e7e2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "keep", {
get: function () {
return getUBT_IconsRecord("4e78cf1f-85dd-4fc6-b62d-37633c21d07f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "house", {
get: function () {
return getUBT_IconsRecord("4ecc405e-a68f-4163-85bf-483b529e8f55");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "homePinFill", {
get: function () {
return getUBT_IconsRecord("4fb8c000-c28e-49e5-93d6-1a46ca0dae15");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "backspace", {
get: function () {
return getUBT_IconsRecord("51e1ef34-4966-4668-872a-bc7313d34e4e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "stopCircle", {
get: function () {
return getUBT_IconsRecord("534a0f62-e9f9-4ffc-b39b-62df5c0bf951");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "pause", {
get: function () {
return getUBT_IconsRecord("549a714b-5fca-4863-b5c2-717ffd0324c9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "calendarBusy", {
get: function () {
return getUBT_IconsRecord("5565d93a-0fe1-4cf2-ab10-3173b7fa33fe");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "gifting", {
get: function () {
return getUBT_IconsRecord("55748e60-9192-4b5a-9686-cfedad3d3bfe");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cancelFill", {
get: function () {
return getUBT_IconsRecord("569668bf-eb84-4f5d-8896-18c59ea0af08");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "turnRight", {
get: function () {
return getUBT_IconsRecord("56df2e44-a1f2-432f-a49e-58d240f7757d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "globeAsia", {
get: function () {
return getUBT_IconsRecord("593bfdba-792d-4067-b38b-867e5201b476");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "eventFill", {
get: function () {
return getUBT_IconsRecord("5a54402e-02af-48c8-af0d-91d1bdb07781");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "girl", {
get: function () {
return getUBT_IconsRecord("5f2b16ea-8416-45b8-8f83-ccf1ee554f71");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "link", {
get: function () {
return getUBT_IconsRecord("5f373e28-f02b-4ed2-b64c-a051b5f34025");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cardGear", {
get: function () {
return getUBT_IconsRecord("606307c7-e8bd-4f7f-99ce-09a63426e795");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "expandLess", {
get: function () {
return getUBT_IconsRecord("609859bb-222b-4549-a272-0a7237537ce2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "share", {
get: function () {
return getUBT_IconsRecord("625b037d-b75b-49b0-8042-72853eec2389");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "check", {
get: function () {
return getUBT_IconsRecord("64173b93-10a3-4c59-af2c-c3b013998a03");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "chevronRight", {
get: function () {
return getUBT_IconsRecord("64f7fd47-fbb4-4889-94b3-990455d7dc86");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "directionsSubway", {
get: function () {
return getUBT_IconsRecord("651e0ad5-cae1-41a0-9b53-b2e1c59d26b9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "imageGallery", {
get: function () {
return getUBT_IconsRecord("65cbcd7b-8b1f-4718-8736-814742d65ba8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "borderColor", {
get: function () {
return getUBT_IconsRecord("67ff3648-c211-4e45-bfba-5049b13629b1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "fingerprint", {
get: function () {
return getUBT_IconsRecord("697e7e46-4ba7-4792-92cf-fd25c9e93d72");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "card", {
get: function () {
return getUBT_IconsRecord("6a0fdee2-65d5-4054-9a03-b301453b03ba");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkboxDash", {
get: function () {
return getUBT_IconsRecord("6bb67cbb-c4ca-4aaf-a89a-10e296b5394b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "warning", {
get: function () {
return getUBT_IconsRecord("6bf835d0-facb-4471-a254-68add2237f0b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkCircleFill", {
get: function () {
return getUBT_IconsRecord("6d436649-dabd-449e-afa9-16c39ded9c64");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "widgets", {
get: function () {
return getUBT_IconsRecord("6e7d0422-f469-49b8-9e4d-53e28142f342");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "calendarFill", {
get: function () {
return getUBT_IconsRecord("7061c91e-09a4-4726-990b-ccb38664b700");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "draft", {
get: function () {
return getUBT_IconsRecord("711f01ca-4b00-4edc-9037-fb5e5c68f506");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "delete", {
get: function () {
return getUBT_IconsRecord("7188c903-cd71-4d06-9573-14884be682dc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowDropDown", {
get: function () {
return getUBT_IconsRecord("74c4d722-5c41-474a-8a0d-bea8500220cf");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "listAlt", {
get: function () {
return getUBT_IconsRecord("76af9e65-b846-418b-a5bb-a3df0cec1d31");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "videocamFill", {
get: function () {
return getUBT_IconsRecord("7749b73a-3d4a-4e9a-86dd-6bcba267b08f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "photoCamera", {
get: function () {
return getUBT_IconsRecord("78042bd0-55fa-4f4f-b2e7-74cf164f05df");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "eventList", {
get: function () {
return getUBT_IconsRecord("783ea5b1-d0c2-4e5c-8a7b-b187e98130c3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "letter", {
get: function () {
return getUBT_IconsRecord("78de31ce-cd56-44bc-b094-721ad2786921");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "event", {
get: function () {
return getUBT_IconsRecord("78f1778a-8f97-4ef9-8c9c-50130bef4954");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "idCard", {
get: function () {
return getUBT_IconsRecord("7a2a42c6-cafc-41bb-a093-b2c5ff9a7cb8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "refresh", {
get: function () {
return getUBT_IconsRecord("7a36a0a7-591a-4442-9168-143af08ce314");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "login", {
get: function () {
return getUBT_IconsRecord("7c019819-fab5-4f1e-bece-4fcdade0e6af");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "schedule", {
get: function () {
return getUBT_IconsRecord("7ca2b35d-0a8d-454f-9fdc-763329ab10c1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "bookOpen", {
get: function () {
return getUBT_IconsRecord("7de9ad7a-96de-4a02-946b-d0d5466f2646");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "listAltFill", {
get: function () {
return getUBT_IconsRecord("7e16e742-d9f9-42c3-ade4-2d8d48c44c78");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "floatLandscape", {
get: function () {
return getUBT_IconsRecord("7e770565-6756-489c-861a-03aa64a06828");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowDown", {
get: function () {
return getUBT_IconsRecord("82678915-1fde-4af5-b771-5962b251de3e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "videocam", {
get: function () {
return getUBT_IconsRecord("8346d388-9271-49fa-9b2c-5a38911088a4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkboxOutlineBlank", {
get: function () {
return getUBT_IconsRecord("85518b22-ee0b-4246-b791-3c32802c4878");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "contacts", {
get: function () {
return getUBT_IconsRecord("85e10228-6778-48d1-8e84-227f094b6aba");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "edit", {
get: function () {
return getUBT_IconsRecord("86a23e9d-91f9-4fca-9354-a2ddc5b38457");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "expandMore", {
get: function () {
return getUBT_IconsRecord("88ecfd16-0c74-471a-9eb7-24ef16c673cb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "folder", {
get: function () {
return getUBT_IconsRecord("8af2a151-f264-4de2-b97e-b3027492d43b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "filterAlt", {
get: function () {
return getUBT_IconsRecord("8ed754ea-2b4c-48b5-939f-4ec30b7a7354");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "bookClosed", {
get: function () {
return getUBT_IconsRecord("8f9d52f6-785b-4315-9fb9-7dca224db806");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "quoteFill", {
get: function () {
return getUBT_IconsRecord("900a6e7d-3539-4ceb-b038-281a6b9ae564");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "menu", {
get: function () {
return getUBT_IconsRecord("913b1341-974f-41fa-b3d2-8c173d29ae47");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "notes", {
get: function () {
return getUBT_IconsRecord("9428e91a-7445-4eff-a625-6563174cfd8e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "callFill", {
get: function () {
return getUBT_IconsRecord("953d45c9-d5e1-4767-8b63-d2dcf0752f13");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "folderOpen", {
get: function () {
return getUBT_IconsRecord("97af837b-8428-4292-99c5-dd60bad9c300");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "bookmarkFill", {
get: function () {
return getUBT_IconsRecord("97dfc4b7-5c87-4cf2-b1a6-b740f5c1f486");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "close", {
get: function () {
return getUBT_IconsRecord("98231ddd-01a5-4cc5-99dd-758d32eef751");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "family", {
get: function () {
return getUBT_IconsRecord("98250881-935b-48c2-8d01-997c69c7c0a3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "playCircle", {
get: function () {
return getUBT_IconsRecord("9ed563f2-c328-44ee-8812-51d88f3862dd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "globe", {
get: function () {
return getUBT_IconsRecord("9f6709a5-3f25-4783-a603-09a816e52aa3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "schoolFill", {
get: function () {
return getUBT_IconsRecord("a014cf6f-cb89-49d6-80ad-8b1ee8dfa941");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "settings", {
get: function () {
return getUBT_IconsRecord("a3a8997b-297b-4ef1-aed0-2384be658ed2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkboxDashFill", {
get: function () {
return getUBT_IconsRecord("a618e000-d4f9-41e1-a33f-e2fb334b59e7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "bookmark", {
get: function () {
return getUBT_IconsRecord("a73519f3-9a59-4ca0-a7b3-502a2243eb9f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowRightAlt", {
get: function () {
return getUBT_IconsRecord("a8cf78de-1154-4db5-bffb-e06ad12e6056");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "remove", {
get: function () {
return getUBT_IconsRecord("aa6d64e1-b646-4687-9d76-b06980882167");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "homePIn", {
get: function () {
return getUBT_IconsRecord("ab0942f0-9de6-4f70-bd6f-384c28e09d87");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "nearMe", {
get: function () {
return getUBT_IconsRecord("adfcacc5-456f-4a69-84ed-970b9327d191");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_CommunityHouseholds", {
get: function () {
return getUBT_IconsRecord("b2215bc2-e092-417f-87f8-cb12b3a2b672");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "attachFile", {
get: function () {
return getUBT_IconsRecord("b27013a5-8612-4010-a849-44a7ff7cb50b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_OneSchoolGlobal", {
get: function () {
return getUBT_IconsRecord("b27cae42-c155-419b-9c52-a6ded1478bf8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "person", {
get: function () {
return getUBT_IconsRecord("b3936174-dfa9-4604-a4e7-d97c384c06da");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "repeat", {
get: function () {
return getUBT_IconsRecord("b62d5d0b-5744-47d6-8415-e22c79503f89");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "search", {
get: function () {
return getUBT_IconsRecord("b66c2fec-a1aa-4787-ba19-79a7993bb086");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "calendarBusyFill", {
get: function () {
return getUBT_IconsRecord("b91e1e92-44c2-42b6-8057-d2b67e6a3fce");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "personFill", {
get: function () {
return getUBT_IconsRecord("ba1e4aea-ea5c-4c90-90c4-7c69df1970ec");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "infoFill", {
get: function () {
return getUBT_IconsRecord("ba1ee3b1-9de8-41a7-9d41-d05eaabe60b1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "history", {
get: function () {
return getUBT_IconsRecord("ba3df0b5-1b83-4c43-aeaf-898b25db9f7c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "mail", {
get: function () {
return getUBT_IconsRecord("bbb1690b-a9c4-4329-8441-7aec6bffc14f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_PinCountry", {
get: function () {
return getUBT_IconsRecord("bc43fe1e-3e97-4b79-ad53-29dd65875a61");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "domain", {
get: function () {
return getUBT_IconsRecord("bc79bfae-bf5a-42e9-8a25-5f7ffb15643f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_PinMember", {
get: function () {
return getUBT_IconsRecord("be0942ca-62a0-4714-a777-e60d054467c1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "list", {
get: function () {
return getUBT_IconsRecord("bff74171-1624-46a3-a510-db5d33b7bf3e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "visibility", {
get: function () {
return getUBT_IconsRecord("c176e42d-75b8-4192-9fff-c442300a50c1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "payments", {
get: function () {
return getUBT_IconsRecord("c1af3a7c-8bc1-4c0e-b1e9-bd3828753c0d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "assemble", {
get: function () {
return getUBT_IconsRecord("c23327a4-3eaf-413a-9265-01d068aafec8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "accountCircleFill", {
get: function () {
return getUBT_IconsRecord("c46a02e3-6f2c-4460-abac-b5f48a644ea7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "locationOnFill", {
get: function () {
return getUBT_IconsRecord("c483fbf3-95c0-4401-8b6f-8543ee7c35d5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowUp", {
get: function () {
return getUBT_IconsRecord("c60b1b20-beb3-434e-98b8-70bf14ecb947");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "checkCircle", {
get: function () {
return getUBT_IconsRecord("c60ed7fb-f4a1-4ba3-a1f1-e5db4b751804");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "removeFill", {
get: function () {
return getUBT_IconsRecord("c7de90b6-2331-4a23-8673-820f5111cca0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "addCircle", {
get: function () {
return getUBT_IconsRecord("c996fa79-7b40-4447-8652-c9e635d4741c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowLeftAlt", {
get: function () {
return getUBT_IconsRecord("cacda8b6-18de-4d1b-ade1-be59af00de52");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "flag", {
get: function () {
return getUBT_IconsRecord("cd219881-7949-49d3-bd88-91280e24a506");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "accountCircle", {
get: function () {
return getUBT_IconsRecord("ce22e045-ec31-4e83-b5f3-9b14f1eefcbb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "shoppingBasket", {
get: function () {
return getUBT_IconsRecord("ce7fab1d-5561-4ad4-9716-40090b87af51");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "contentCopy", {
get: function () {
return getUBT_IconsRecord("cf72d202-480f-4fe5-a8c8-7021673034f7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_HR100", {
get: function () {
return getUBT_IconsRecord("d00930ac-8425-4356-b7c6-4c55c910aea8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "visibilityOff", {
get: function () {
return getUBT_IconsRecord("d08478ad-9e1a-4c88-9dba-78eaea3cb291");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "school", {
get: function () {
return getUBT_IconsRecord("d15b6b62-6b8c-45d8-b8e4-142d44c83ec9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_CommunityLocalities", {
get: function () {
return getUBT_IconsRecord("d2063973-e843-4517-a3fc-1a0a56fb1876");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "houseFill", {
get: function () {
return getUBT_IconsRecord("d4413405-ebb2-4d3c-bbd2-43e489cb09e8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "arrowDropUp", {
get: function () {
return getUBT_IconsRecord("d4f63836-85a1-4f9a-9d57-4a324075707c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "shoppingCart", {
get: function () {
return getUBT_IconsRecord("d7863646-a37e-4bd6-aedc-72183f218a9e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cottageFill", {
get: function () {
return getUBT_IconsRecord("d8b16ffa-c27c-4afa-b73c-6c6949fc39c8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "orbitText", {
get: function () {
return getUBT_IconsRecord("d983ec69-df26-4a49-9482-4f7aa99ceebc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "feedItem", {
get: function () {
return getUBT_IconsRecord("d99f1b4c-3673-4cc0-a3ab-b01d6059e46c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "chevronLeft", {
get: function () {
return getUBT_IconsRecord("da912e1e-5017-423f-a27d-410797f75821");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "aod", {
get: function () {
return getUBT_IconsRecord("dc9e6375-f296-4eab-900b-33553d24fab7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "moreVertical", {
get: function () {
return getUBT_IconsRecord("ddfcefe1-b2ac-4720-98ee-28658e3f4177");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "quote", {
get: function () {
return getUBT_IconsRecord("deec24f4-831f-4b87-bc37-3f92ab62ef11");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sMS", {
get: function () {
return getUBT_IconsRecord("e2b0003e-25ec-41f2-9e14-00a2237353bc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "notificationsOff", {
get: function () {
return getUBT_IconsRecord("e4119eb7-0c25-419d-8340-568a03b0e1d6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "lock", {
get: function () {
return getUBT_IconsRecord("e493382b-67d4-42e6-91b9-db927bba8425");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "warningFill", {
get: function () {
return getUBT_IconsRecord("e5c898e5-4553-49d0-a045-8f7dab8084b2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_PinHouse", {
get: function () {
return getUBT_IconsRecord("e708de25-9eb6-45b0-8a99-597ce4fddba5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "download", {
get: function () {
return getUBT_IconsRecord("e86df772-a4d7-4eb9-b75e-7b91f89d6363");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "radioChecked", {
get: function () {
return getUBT_IconsRecord("f0ef9a69-7505-43c5-a83d-c9d3b456e780");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "moreHorizontal", {
get: function () {
return getUBT_IconsRecord("f3a35331-2768-478e-8d50-e1dce38559bc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "widgetsFill", {
get: function () {
return getUBT_IconsRecord("f3e18937-6a20-4f30-b105-b8edf0a3877e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "info", {
get: function () {
return getUBT_IconsRecord("f4cb4cb8-0378-49fb-bbf8-b3132e61c1ab");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "send", {
get: function () {
return getUBT_IconsRecord("f64340c2-0f84-4eed-b61c-a0142f3df5c6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "clock", {
get: function () {
return getUBT_IconsRecord("f6b5303c-159a-413e-9cac-f717149da346");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "household", {
get: function () {
return getUBT_IconsRecord("f70d86e0-1a95-49a7-acd6-38be58ffef5c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "sVG_PinLocality", {
get: function () {
return getUBT_IconsRecord("f919f6d4-df1b-45b3-8fae-789c332d6e6e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "autorenew", {
get: function () {
return getUBT_IconsRecord("f9654262-1712-4ec7-9486-0b4fa24e1d47");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "publish", {
get: function () {
return getUBT_IconsRecord("fa177ef4-da9a-4abb-8932-6242e54625f0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "inbox", {
get: function () {
return getUBT_IconsRecord("fada5b0e-d8d6-41af-b9d8-2be4a071cd75");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "dragIndicator", {
get: function () {
return getUBT_IconsRecord("fe74b0de-e2ce-4b19-9045-e594f412a630");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "logout", {
get: function () {
return getUBT_IconsRecord("fe7564bc-5ed5-45f4-aed5-4b2e1f5877fa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Icons, "cached", {
get: function () {
return getUBT_IconsRecord("fea2d750-e35b-49fd-9cd8-4eb34f32d8ca");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Display = {};
var getUBT_DisplayRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["788d0279-278d-48a7-91e9-a8a2af957509"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "inline", {
get: function () {
return getUBT_DisplayRecord("10e95258-2621-48ba-a88c-83b65ad2b0c6");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "grid", {
get: function () {
return getUBT_DisplayRecord("15ac76a1-83d5-4756-9663-b009409c0e55");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "flex", {
get: function () {
return getUBT_DisplayRecord("1928ea7a-2e4d-4dae-93e9-9ea59a4437e4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "inlineFlex", {
get: function () {
return getUBT_DisplayRecord("5e6ea5f9-544c-40ad-b9bc-d4c5374045b7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "inlineBlock", {
get: function () {
return getUBT_DisplayRecord("99db3593-10b7-4b81-a3c8-aed6f3e0ed1b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "none", {
get: function () {
return getUBT_DisplayRecord("a16c3bc0-4369-4cd2-83b5-f2d8ffd33c01");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "contents", {
get: function () {
return getUBT_DisplayRecord("a2ba8d5d-fcfa-48de-8611-80115f286cc7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Display, "block", {
get: function () {
return getUBT_DisplayRecord("d8627c43-d0ab-4e4d-8127-84025e59be43");
}
});

UBTConnect_UtilsModel.staticEntities.type_MessageChannel = {};
var getType_MessageChannelRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["7aab0e64-b188-443b-a807-40c84989d671"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_MessageChannel, "whatsApp", {
get: function () {
return getType_MessageChannelRecord("193b810d-5a87-4949-ab54-6c8993dd28c1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_MessageChannel, "call", {
get: function () {
return getType_MessageChannelRecord("aeb98f54-fb5e-4d8c-b86d-1c6c40ebfdab");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_MessageChannel, "signal", {
get: function () {
return getType_MessageChannelRecord("b5ca8f01-9724-465f-b57d-5c3a641b7292");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.type_MessageChannel, "email", {
get: function () {
return getType_MessageChannelRecord("bb7fe6b7-2e5e-4f51-a1bf-332eeb5c3069");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour = {};
var getUBT_ColumnBehaviourRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["8df84da6-4ee7-4003-94fd-7fef40c0433b"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour, "reduceMiddle", {
get: function () {
return getUBT_ColumnBehaviourRecord("1f4d7dfe-7134-4548-9b8a-5766b2870b98");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour, "sameSize", {
get: function () {
return getUBT_ColumnBehaviourRecord("2db7368c-7964-4c69-9950-a7f9ed6ce605");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour, "reduceLast", {
get: function () {
return getUBT_ColumnBehaviourRecord("349bfed5-fcc6-458c-89d1-e664e87360ac");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour, "reduceFirst", {
get: function () {
return getUBT_ColumnBehaviourRecord("e05417aa-cf89-40fa-b522-fea8d6a24000");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_ColumnBehaviour, "expandMiddle", {
get: function () {
return getUBT_ColumnBehaviourRecord("e7f587ad-6cbb-4373-84c6-36e0711d9703");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_FlexBehavior = {};
var getUBT_FlexBehaviorRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["ae5365a0-b42f-49ae-9f26-116b862b9912"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexBehavior, "shrink", {
get: function () {
return getUBT_FlexBehaviorRecord("091380e0-d9e6-42a6-b0db-4c35c692e5b9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexBehavior, "grow", {
get: function () {
return getUBT_FlexBehaviorRecord("12a8fb9a-e089-4902-8bcd-b8c5efac7ece");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FlexBehavior, "none", {
get: function () {
return getUBT_FlexBehaviorRecord("c86cc291-c3c8-4b84-9f44-19682756ce38");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_FontSize = {};
var getUBT_FontSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["b7b01d95-224a-4a59-8320-00ac87c8c15d"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "heading1", {
get: function () {
return getUBT_FontSizeRecord("1a0d6a49-f43e-40ee-a8fd-0066a663ecf2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "doubleExtraSmall", {
get: function () {
return getUBT_FontSizeRecord("4aec019d-0785-4536-8d5d-ccd64a8f1cb2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "heading6", {
get: function () {
return getUBT_FontSizeRecord("59c90066-6dc3-47f2-a136-b66c9b6a4769");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "heading3", {
get: function () {
return getUBT_FontSizeRecord("687365cc-97da-4fc7-ba13-59ec4b73f5e4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "heading2", {
get: function () {
return getUBT_FontSizeRecord("6ffca60c-607f-4ec0-8e6e-d7ebd942f6d4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "base", {
get: function () {
return getUBT_FontSizeRecord("81883c37-ffcd-4a9c-8214-da3cce9318e9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "label", {
get: function () {
return getUBT_FontSizeRecord("a2605a0a-6427-4966-adf2-667e245ccf2f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "extraSmall", {
get: function () {
return getUBT_FontSizeRecord("a87a69cd-c0ae-4561-9dd6-a8bdc20ca209");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "heading4", {
get: function () {
return getUBT_FontSizeRecord("caeebac3-8ee1-4b13-b099-5987cab93997");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "small", {
get: function () {
return getUBT_FontSizeRecord("d85f0341-b6d0-4460-b8f1-77218c0e044d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "heading5", {
get: function () {
return getUBT_FontSizeRecord("e9e010dd-3a7f-45c8-af50-6d1ca540a50c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_FontSize, "display", {
get: function () {
return getUBT_FontSizeRecord("e9eb6493-6ec3-431c-a967-b22b98eaca78");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Size_ImageWidth = {};
var getUBT_Size_ImageWidthRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["ba77d040-3a01-407a-a210-5b36659443ff"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size_ImageWidth, "fullWidth_100Percent", {
get: function () {
return getUBT_Size_ImageWidthRecord("58e31eb9-0465-456c-b390-9caf980a7950");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size_ImageWidth, "square_SameHeight", {
get: function () {
return getUBT_Size_ImageWidthRecord("6897c545-f87e-4c85-ad1f-26b3de81a02e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size_ImageWidth, "maxWidth_100vw", {
get: function () {
return getUBT_Size_ImageWidthRecord("b38e655a-024f-470b-8209-a806d720ad6b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size_ImageWidth, "listThumbnail_104px", {
get: function () {
return getUBT_Size_ImageWidthRecord("b9facc48-6393-434f-a822-f377e6966291");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize = {};
var getUBT_AvatarSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["cfc77058-26f2-42a2-b2c8-02a6d2a82a1d"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "smallBase_48", {
get: function () {
return getUBT_AvatarSizeRecord("078547e7-dd0c-40d7-a96e-130c2ab66af7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "doubleExtraLarge_176", {
get: function () {
return getUBT_AvatarSizeRecord("3365b541-7ef0-43d0-bb25-541ac5b7b0b9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "medium_60", {
get: function () {
return getUBT_AvatarSizeRecord("3f4ce68f-bfe8-4af0-8c73-f3e2b523859b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "large_65", {
get: function () {
return getUBT_AvatarSizeRecord("775b02bb-c577-4906-9f9e-33f8503674d1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "extraSmall_32", {
get: function () {
return getUBT_AvatarSizeRecord("823268fa-1c77-479d-afc0-3990a459ca05");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "fullHeight_100vh", {
get: function () {
return getUBT_AvatarSizeRecord("a9e89f87-bf60-49a3-9cba-ff640e2e10e0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "doubleExtraSmall_20", {
get: function () {
return getUBT_AvatarSizeRecord("c30f48f7-bbeb-4466-ae5d-74928ad7bf79");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "fullHeight_100PerCent", {
get: function () {
return getUBT_AvatarSizeRecord("d0112654-90f7-4a27-818b-f8c8de9f7705");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "small_40", {
get: function () {
return getUBT_AvatarSizeRecord("e01639de-7335-42dd-b592-54e53cfc36c9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "extraLarge_100", {
get: function () {
return getUBT_AvatarSizeRecord("e2286c5e-37fd-48ea-8200-8f3d7c5ae0fd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize, "base_52", {
get: function () {
return getUBT_AvatarSizeRecord("fe78b036-f038-442d-826b-7224a60e5a90");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_VerticalAlign = {};
var getUBT_VerticalAlignRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["dba31182-5195-4ea6-9502-37195d2de889"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_VerticalAlign, "top", {
get: function () {
return getUBT_VerticalAlignRecord("1d66013f-d870-4e82-8e8c-57001bd31586");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_VerticalAlign, "center", {
get: function () {
return getUBT_VerticalAlignRecord("2f06c740-a5bd-416a-8912-fe4d8341c208");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_VerticalAlign, "bottom", {
get: function () {
return getUBT_VerticalAlignRecord("b42c001f-fb60-41ed-9910-aa1792e5dd25");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_Size = {};
var getUBT_SizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["e18a3aeb-48c0-4cfb-ae8a-f06bd2918ec5"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "doubleExtraLarge", {
get: function () {
return getUBT_SizeRecord("0844bebb-5226-468b-86e8-72f61a7f93e0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "none", {
get: function () {
return getUBT_SizeRecord("08be7f0b-cf16-46c6-b25c-3a0a6cb01158");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "medium", {
get: function () {
return getUBT_SizeRecord("355f0849-d9d4-4fec-872e-d4a426c7aada");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "extraLarge", {
get: function () {
return getUBT_SizeRecord("3615c822-6889-4ddd-abe2-01c202138a9e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "base", {
get: function () {
return getUBT_SizeRecord("531e9a8b-9545-4d16-84c5-d14341c81aeb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "extraSmall", {
get: function () {
return getUBT_SizeRecord("7a79672a-3f95-45d0-a13f-03aa177f7bc4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "smallBase", {
get: function () {
return getUBT_SizeRecord("8cf9b30a-d783-4182-a793-67935fb7ba2f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "large", {
get: function () {
return getUBT_SizeRecord("adc0cb24-0a84-47c6-b2ac-c842b0fdb94a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_Size, "small", {
get: function () {
return getUBT_SizeRecord("e7190f3c-0aab-4540-befc-7a7373406b70");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_AlignItems = {};
var getUBT_AlignItemsRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["ef20f8b6-ead3-41fd-a61c-6c26d63b6a09"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AlignItems, "baseline", {
get: function () {
return getUBT_AlignItemsRecord("451f3ad7-e7f7-4e98-9d62-07f2892ab3f5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AlignItems, "flexEnd", {
get: function () {
return getUBT_AlignItemsRecord("593674c7-eb16-4547-83f6-7d173ed68ccf");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AlignItems, "stretch", {
get: function () {
return getUBT_AlignItemsRecord("5a5836ac-05bb-46cb-bc00-0e8ef31058c3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AlignItems, "flexStart", {
get: function () {
return getUBT_AlignItemsRecord("9c4d4839-520e-4082-bb9d-dac54b468b14");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AlignItems, "initial", {
get: function () {
return getUBT_AlignItemsRecord("aacc2464-a262-4d71-9bbe-025928cf61cd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_AlignItems, "center", {
get: function () {
return getUBT_AlignItemsRecord("d779580f-949e-4fdb-961a-2274c3ded3df");
}
});

UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent = {};
var getUBT_JustifyContentRecord = function (record) {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["fccf52bc-cce2-4388-977f-e898cce5e19d"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent, "center", {
get: function () {
return getUBT_JustifyContentRecord("0d0a4d49-ec75-4b17-8c51-86a351b60e37");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent, "spaceBetween", {
get: function () {
return getUBT_JustifyContentRecord("14952e85-4de0-413d-b778-78560b8791f7");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent, "spaceEvenly", {
get: function () {
return getUBT_JustifyContentRecord("284e0a35-afe8-4267-85c5-1367e4e3532c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent, "flexStart", {
get: function () {
return getUBT_JustifyContentRecord("bd0d7542-c511-47d1-aedc-748f1295bf47");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent, "flexEnd", {
get: function () {
return getUBT_JustifyContentRecord("bdb75f84-82e3-4d56-a3ad-ef175be27eaa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent, "spaceAround", {
get: function () {
return getUBT_JustifyContentRecord("cf62fd88-4e8c-465c-878d-3996e2ae1e5d");
}
});

UBTConnect_UtilsModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

UBTConnect_UtilsModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan = {};
var getConnect_Subscription_PlanRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["06b6584a-0314-473c-8c1d-a929de96e4f9"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan, "advancePlus", {
get: function () {
return getConnect_Subscription_PlanRecord("68628e63-2daa-461c-aa02-2117212bb30b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan, "regional", {
get: function () {
return getConnect_Subscription_PlanRecord("82025d29-22e5-4ff0-b37c-1e7af2af73c3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan, "global", {
get: function () {
return getConnect_Subscription_PlanRecord("9f199878-15ec-4c77-849b-b67c9871bc71");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan, "free", {
get: function () {
return getConnect_Subscription_PlanRecord("e6e49f5e-d53f-4f85-9578-85d71f32e6da");
}
});

UBTConnect_UtilsModel.staticEntities.noteActionType = {};
var getNoteActionTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["17f04edb-fac6-4b0e-b13a-8c7ebb5c4424"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteActionType, "add", {
get: function () {
return getNoteActionTypeRecord("5eef9a30-62ac-4544-87d7-1b63939401fa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteActionType, "edit", {
get: function () {
return getNoteActionTypeRecord("9a035d7b-4cf8-4a81-b0e1-8310488c69bc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteActionType, "delete", {
get: function () {
return getNoteActionTypeRecord("f99c56a4-9645-4317-bab1-cd4678b96b30");
}
});

UBTConnect_UtilsModel.staticEntities.launchDarkly_FF = {};
var getLaunchDarkly_FFRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["24d864a8-0524-4378-b05b-81691f16e554"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileOrbitEventBooklet", {
get: function () {
return getLaunchDarkly_FFRecord("233728ad-021f-4feb-9206-eb4e8a0db1b8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileHasDeceasedPhotos", {
get: function () {
return getLaunchDarkly_FFRecord("3da821c6-6cc9-473b-9291-11e94a69f532");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileDirectoryHouseholdGallery", {
get: function () {
return getLaunchDarkly_FFRecord("4ab53042-7c90-44b2-8df8-324120f19c21");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileOrbitAccess", {
get: function () {
return getLaunchDarkly_FFRecord("4bde037a-0800-47eb-92d9-e95aab8d74e4");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileDirectoryLocalityContacts", {
get: function () {
return getLaunchDarkly_FFRecord("57339520-be2f-49e2-aa81-f58ddfef5537");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileDirectoryUpdateFeedDeceasedProfile", {
get: function () {
return getLaunchDarkly_FFRecord("5ab0321f-f714-446d-9af0-d4491ca95f1d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileOrbitHostSurvey", {
get: function () {
return getLaunchDarkly_FFRecord("629da211-7cde-4cfb-890a-528d4d0cda52");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileDirectoryBookmarkNote", {
get: function () {
return getLaunchDarkly_FFRecord("9057746d-5cf6-46d6-af20-e052ea5872a1");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileMemberAge", {
get: function () {
return getLaunchDarkly_FFRecord("9cf4f818-9b39-477b-9b3f-ffe9b9773d39");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileHasHiddenMembersAccess", {
get: function () {
return getLaunchDarkly_FFRecord("a7bcf50b-9e90-4182-826e-015a31034d02");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileDirectoryListVirtualization", {
get: function () {
return getLaunchDarkly_FFRecord("acc2be27-14d8-4671-9861-45e4aab6839f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileAssemble", {
get: function () {
return getLaunchDarkly_FFRecord("d0ec3150-4f09-4b02-bb6c-54b17e1d4ab9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileStudentInformation", {
get: function () {
return getLaunchDarkly_FFRecord("d762dbc4-6288-4348-8a07-613ca34e081e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobileHouseholdAncestry4thGen", {
get: function () {
return getLaunchDarkly_FFRecord("e2416af7-ce48-47d5-b693-7de6d9ab547c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF, "mobilePhotobook", {
get: function () {
return getLaunchDarkly_FFRecord("fdf84ca9-dce2-4407-b569-7a0f66320edc");
}
});

UBTConnect_UtilsModel.staticEntities.connect_Entity = {};
var getConnect_EntityRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["2710e296-7733-44ad-8ef9-bbcd4c4dd77c"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "household", {
get: function () {
return getConnect_EntityRecord("57dd184c-b9fc-4a7f-9f9a-f20e6e275fe3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "supperMeetings_aka_Subdivisions", {
get: function () {
return getConnect_EntityRecord("62a170b3-4134-43b4-a09f-3e030e687bfd");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "interchange", {
get: function () {
return getConnect_EntityRecord("6f037faf-a5dc-4f83-b491-b5a1af3012c2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "locality", {
get: function () {
return getConnect_EntityRecord("78e8b5bb-7b51-447b-8f03-ac3f57c4bab3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "country", {
get: function () {
return getConnect_EntityRecord("a35b9acc-2c9c-4d8c-95bf-3842b859880e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "oneSchoolGlobal", {
get: function () {
return getConnect_EntityRecord("a896e28c-f387-4cf4-93f1-7ba6b8f3ac64");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "member", {
get: function () {
return getConnect_EntityRecord("dbaf9275-057c-4718-b4fb-c4b31ae95ccc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Entity, "feedItem", {
get: function () {
return getConnect_EntityRecord("e22d3178-31c6-411a-a572-083e8aa9db11");
}
});

UBTConnect_UtilsModel.staticEntities.imageSize = {};
var getImageSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["389ed431-2686-4fe1-9cf0-1e588caa7ea2"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.imageSize, "large", {
get: function () {
return getImageSizeRecord("b8989d10-6db9-4416-8ad1-cbc113960ae8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.imageSize, "medium", {
get: function () {
return getImageSizeRecord("df1b802e-04f6-49ad-aa61-46503f0ab877");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.imageSize, "small", {
get: function () {
return getImageSizeRecord("e8f0625e-a573-4bc8-a384-182271dcabf5");
}
});

UBTConnect_UtilsModel.staticEntities.connect_Applications = {};
var getConnect_ApplicationsRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["38eb9cce-6a81-4de9-a821-d40e5c1b7e05"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Applications, "directory", {
get: function () {
return getConnect_ApplicationsRecord("7dcf9c3c-83ad-4610-9742-6e0905c90b09");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Applications, "orbit", {
get: function () {
return getConnect_ApplicationsRecord("ab282edb-f87a-4da8-9b6f-c625b052a534");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Applications, "connect", {
get: function () {
return getConnect_ApplicationsRecord("cda8bd84-b929-4372-ba1e-80c09740c1c8");
}
});

UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region = {};
var getConnect_Subscription_RegionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["751b61ab-04b4-4254-a7d3-4d0e816e1965"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region, "newZealand", {
get: function () {
return getConnect_Subscription_RegionRecord("5a4b8c65-d4af-4953-9600-dd485ac25e4b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region, "australia", {
get: function () {
return getConnect_Subscription_RegionRecord("66652adc-ed9d-4e36-822f-949623c061d8");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region, "global", {
get: function () {
return getConnect_Subscription_RegionRecord("9122cb69-c4da-430f-8438-545b09affa2f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region, "northAmerica_Caribbean_Argentina", {
get: function () {
return getConnect_Subscription_RegionRecord("a689ecde-6b84-4cd7-8edf-c91fccd1af9b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region, "locality", {
get: function () {
return getConnect_Subscription_RegionRecord("a81f507c-5883-4873-93ed-1f35cb7473f9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_Subscription_Region, "europe_UK_Ireland", {
get: function () {
return getConnect_Subscription_RegionRecord("d9cb4179-4977-4ae9-bfdb-e075def53ae1");
}
});

UBTConnect_UtilsModel.staticEntities.connect_SearchCategories = {};
var getConnect_SearchCategoriesRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["a2feb2ad-13f2-44aa-9759-710c980b0a4c"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_SearchCategories, "people", {
get: function () {
return getConnect_SearchCategoriesRecord("5b4a7a62-75fd-4c38-9224-4a1a7b4d485d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_SearchCategories, "all", {
get: function () {
return getConnect_SearchCategoriesRecord("659f7f79-b6be-448f-b64e-34018fee0fe0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_SearchCategories, "households", {
get: function () {
return getConnect_SearchCategoriesRecord("af1eb74c-7ce8-49b3-ba93-764b3dee6c55");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.connect_SearchCategories, "places", {
get: function () {
return getConnect_SearchCategoriesRecord("f5c0f43a-a899-4de8-aaa2-dbd6e1320bae");
}
});

UBTConnect_UtilsModel.staticEntities.outSystems_FF = {};
var getOutSystems_FFRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["af8c3da3-ea60-4966-8e9f-09a4a3b079e2"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnableSearchByBirthday", {
get: function () {
return getOutSystems_FFRecord("04574bf6-8c28-4740-9408-12eaa3c76f23");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnablePersonalEvents", {
get: function () {
return getOutSystems_FFRecord("1fb04872-d8f1-4caf-bef4-846ff2b4c1fa");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2ExtendedShare", {
get: function () {
return getOutSystems_FFRecord("1feb2c5d-1640-4776-8247-4461d8ce1eea");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2NewBookmarks", {
get: function () {
return getOutSystems_FFRecord("4e1d625a-dcac-493c-bbee-75a2f5f9077d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnableCarousel", {
get: function () {
return getOutSystems_FFRecord("4f7b8081-272b-48d1-b58a-f43bf6074b12");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2NewNotifications", {
get: function () {
return getOutSystems_FFRecord("6025cfee-068e-47da-8cdf-ced28a68682c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnableC1DirectoryView", {
get: function () {
return getOutSystems_FFRecord("7085ecf0-812a-44bf-84b0-b3a32ba6556f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnableMaps", {
get: function () {
return getOutSystems_FFRecord("7183da36-73b1-47e2-ace9-9c4bbc203734");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2NewLDM", {
get: function () {
return getOutSystems_FFRecord("b3b66593-204e-4989-b559-d8ad9a703c97");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnableFeed", {
get: function () {
return getOutSystems_FFRecord("c584ddd0-67c9-4b1b-9ada-4aa57f05ca0b");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.outSystems_FF, "c2EnableCustomServices", {
get: function () {
return getOutSystems_FFRecord("e60789db-1307-48cf-bf1b-75ce24600d9b");
}
});

UBTConnect_UtilsModel.staticEntities.pathDirectory = {};
var getPathDirectoryRecord = function (record) {
return OS.ApplicationInfo.getModules()["dba29b2f-44a2-40ee-8034-35085b88a8fe"].staticEntities["46b5dde7-52cd-4ab6-ba6e-c16b9d35db7c"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "dATA", {
get: function () {
return getPathDirectoryRecord("22ecc6c4-dca2-4135-8edf-67736421e046");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "lIBRARY_NO_CLOUD", {
get: function () {
return getPathDirectoryRecord("27b05688-9763-4232-869b-52cd0343fa31");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "eXTERNAL_CACHE", {
get: function () {
return getPathDirectoryRecord("3bf19ff2-94c6-4ef1-b5ad-49ec839cb8e5");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "tEMPORARY", {
get: function () {
return getPathDirectoryRecord("40ab8fc1-58aa-4ea6-98a1-632612d89663");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "cACHE", {
get: function () {
return getPathDirectoryRecord("42583a34-2a85-4341-a81f-590064311e2a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "lIBRARY", {
get: function () {
return getPathDirectoryRecord("4d780ed1-8703-48af-9773-d33f83143d46");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "dOCUMENTS", {
get: function () {
return getPathDirectoryRecord("69115c2e-fae4-47ca-99fc-7c120074c598");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "eXTERNAL", {
get: function () {
return getPathDirectoryRecord("79997370-82dd-4365-a801-6110a2f89b26");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathDirectory, "eXTERNAL_STORAGE", {
get: function () {
return getPathDirectoryRecord("c544e4c7-1f6d-41b7-b579-aaf4221aad57");
}
});

UBTConnect_UtilsModel.staticEntities.pathType = {};
var getPathTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["dba29b2f-44a2-40ee-8034-35085b88a8fe"].staticEntities["5878c407-2712-4751-bf20-4ed70be65d8b"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathType, "file", {
get: function () {
return getPathTypeRecord("73ea4a7c-54b9-4e21-ac51-b67e47c2f55f");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.pathType, "directory", {
get: function () {
return getPathTypeRecord("f44a81e1-d8d6-4639-adf0-a9ba82b8b614");
}
});

UBTConnect_UtilsModel.staticEntities.noteCategory = {};
var getNoteCategoryRecord = function (record) {
return OS.ApplicationInfo.getModules()["e3738a74-cdb5-4644-82df-e10898ce0aad"].staticEntities["860cdde9-73e7-4b61-af8a-c7b5e1fbe6cf"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "supperMeeting", {
get: function () {
return getNoteCategoryRecord("1d387917-d25b-46bb-94c4-7e05c179f36a");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "interchange", {
get: function () {
return getNoteCategoryRecord("203a58b1-fd96-4eef-9051-4df69ec34f8c");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "member", {
get: function () {
return getNoteCategoryRecord("290de723-67cc-4315-9fb7-55e8de76b1d2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "locality", {
get: function () {
return getNoteCategoryRecord("44874762-08a8-491b-93f8-aaab9b360bf3");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "lDMEvent", {
get: function () {
return getNoteCategoryRecord("44e5be1e-e26c-4094-9f63-b6651a5e8931");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "feedItem", {
get: function () {
return getNoteCategoryRecord("52aa2292-35fd-4eac-a2dc-774ccdcd6998");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "orbitEvent", {
get: function () {
return getNoteCategoryRecord("60453ebe-3eb7-4980-8853-20fad7601716");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "localityContact", {
get: function () {
return getNoteCategoryRecord("67475128-6d79-4e3f-b9ac-49af268ab9cc");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "assembleEvent", {
get: function () {
return getNoteCategoryRecord("89d4be3f-9021-4d80-9cc4-18e2720a8444");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "update", {
get: function () {
return getNoteCategoryRecord("a1337a2e-0b32-4674-a0bc-35debcf24c2d");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "personalEvent", {
get: function () {
return getNoteCategoryRecord("a2dac195-6210-4e40-8f7d-2369e4d17f50");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "household", {
get: function () {
return getNoteCategoryRecord("a68357cd-5e1d-4cc8-b579-a32dfa0976a2");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.noteCategory, "oneSchoolGlobal", {
get: function () {
return getNoteCategoryRecord("b835d35f-fbbb-4e59-9421-1b5110af8a5a");
}
});

UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType = {};
var getMyBookmarks_ObjectTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["fe9b0d8f-ebbc-40ef-9656-bcd3ff4ff144"].staticEntities["fcd90c60-8ab8-4cbf-920e-b2bc935b5137"][record];
};
Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "oneSchoolGlobal", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("3a8efbd2-60e6-4ac0-9530-1f8aaf3fbfc0");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "contact", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("69c4b072-c8f1-45c3-b37a-fff8ae5d83bb");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "news", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("73375254-03da-429b-a414-55e045a7ffac");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "subdivision", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("dc61e1a2-7207-4e1e-8787-c36e87c4b7d9");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "campusCo", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("e5d1dd55-062c-4830-919d-c0546acff53e");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "communityBusiness", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("f9b3e1dc-f33f-4d84-89f5-95fe4af185df");
}
});

Object.defineProperty(UBTConnect_UtilsModel.staticEntities.myBookmarks_ObjectType, "locality", {
get: function () {
return getMyBookmarks_ObjectTypeRecord("fd16c400-f618-4619-a8b9-0f6e084766cc");
}
});

});
