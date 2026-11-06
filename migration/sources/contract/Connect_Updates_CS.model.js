define("Connect_Updates_CS.model$SyncLogOperationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var SyncLogOperationRec = (function (_super) {
__extends(SyncLogOperationRec, _super);
function SyncLogOperationRec(defaults) {
_super.apply(this, arguments);
}
SyncLogOperationRec.attributesToDeclare = function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SyncLogOperationRec.init();
return SyncLogOperationRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.SyncLogOperationRec = SyncLogOperationRec;

});
define("Connect_Updates_CS.model$UI_UpdateItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var UI_UpdateItemRec = (function (_super) {
__extends(UI_UpdateItemRec, _super);
function UI_UpdateItemRec(defaults) {
_super.apply(this, arguments);
}
UI_UpdateItemRec.attributesToDeclare = function () {
return [
this.attr("UpdateItemId", "updateItemIdAttr", "UpdateItemId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UpdateItemTypeId", "updateItemTypeIdAttr", "UpdateItemTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("GenderId", "genderIdAttr", "GenderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocationString", "locationStringAttr", "LocationString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsRead", "isReadAttr", "IsRead", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasAccess", "hasAccessAttr", "HasAccess", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasShare", "hasShareAttr", "HasShare", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ParentsNames", "parentsNamesAttr", "ParentsNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BirthType", "birthTypeAttr", "BirthType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_UpdateItemRec.init();
return UI_UpdateItemRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.UI_UpdateItemRec = UI_UpdateItemRec;

});
define("Connect_Updates_CS.model$Filter_DateRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var Filter_DateRec = (function (_super) {
__extends(Filter_DateRec, _super);
function Filter_DateRec(defaults) {
_super.apply(this, arguments);
}
Filter_DateRec.attributesToDeclare = function () {
return [
this.attr("Date_From", "date_FromAttr", "Date_From", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Date_To", "date_ToAttr", "Date_To", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Filter_DateRec.init();
return Filter_DateRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.Filter_DateRec = Filter_DateRec;

});
define("Connect_Updates_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect_Updates_CSModel.TextList = TextList;

});
define("Connect_Updates_CS.model$Filter_UpdatesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model", "Connect_Updates_CS.model$Filter_DateRec"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var Filter_UpdatesRec = (function (_super) {
__extends(Filter_UpdatesRec, _super);
function Filter_UpdatesRec(defaults) {
_super.apply(this, arguments);
}
Filter_UpdatesRec.attributesToDeclare = function () {
return [
this.attr("Filter_Date", "filter_DateAttr", "Filter_Date", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.Filter_DateRec());
}, true, Connect_Updates_CSModel.Filter_DateRec), 
this.attr("Filter_SearchText", "filter_SearchTextAttr", "Filter_SearchText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Filter_UpdateTypeId", "filter_UpdateTypeIdAttr", "Filter_UpdateTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryIds", "countryIdsAttr", "CountryIds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("LocalitiesIds", "localitiesIdsAttr", "LocalitiesIds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("Filter_ReadOnly", "filter_ReadOnlyAttr", "Filter_ReadOnly", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Sort_ByNewest", "sort_ByNewestAttr", "Sort_ByNewest", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Filter_UpdatesRec.init();
return Filter_UpdatesRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.Filter_UpdatesRec = Filter_UpdatesRec;

});
define("Connect_Updates_CS.model$UpdateItem_ReadStateRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var UpdateItem_ReadStateRec = (function (_super) {
__extends(UpdateItem_ReadStateRec, _super);
function UpdateItem_ReadStateRec(defaults) {
_super.apply(this, arguments);
}
UpdateItem_ReadStateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UpdateItemId", "updateItemIdAttr", "UpdateItemId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpdateItem_ReadStateRec.init();
return UpdateItem_ReadStateRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.UpdateItem_ReadStateRec = UpdateItem_ReadStateRec;

});
define("Connect_Updates_CS.model$UpdateItem_RegionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var UpdateItem_RegionRec = (function (_super) {
__extends(UpdateItem_RegionRec, _super);
function UpdateItem_RegionRec(defaults) {
_super.apply(this, arguments);
}
UpdateItem_RegionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UpdateItemId", "updateItemIdAttr", "UpdateItemId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubscriptionRegionId", "subscriptionRegionIdAttr", "SubscriptionRegionId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdateDateTime", "lastUpdateDateTimeAttr", "LastUpdateDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpdateItem_RegionRec.init();
return UpdateItem_RegionRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.UpdateItem_RegionRec = UpdateItem_RegionRec;

});
define("Connect_Updates_CS.model$UpdateItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var UpdateItemRec = (function (_super) {
__extends(UpdateItemRec, _super);
function UpdateItemRec(defaults) {
_super.apply(this, arguments);
}
UpdateItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("TypeId", "typeIdAttr", "TypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GenderId", "genderIdAttr", "GenderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionId", "subdivisionIdAttr", "SubdivisionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isHidden", "isHiddenAttr", "isHidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isActive", "isActiveAttr", "isActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("isHouseholdDeceased", "isHouseholdDeceasedAttr", "isHouseholdDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastUpdateDateTime", "lastUpdateDateTimeAttr", "LastUpdateDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ParentsNames", "parentsNamesAttr", "ParentsNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BirthType", "birthTypeAttr", "BirthType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpdateItemRec.init();
return UpdateItemRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.UpdateItemRec = UpdateItemRec;

});
define("Connect_Updates_CS.model$UpdateItem_SyncLogRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Updates_CS.model"], function (exports, OutSystems, Connect_Updates_CSModel) {
var OS = OutSystems.Internal;
var UpdateItem_SyncLogRec = (function (_super) {
__extends(UpdateItem_SyncLogRec, _super);
function UpdateItem_SyncLogRec(defaults) {
_super.apply(this, arguments);
}
UpdateItem_SyncLogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("OperationId", "operationIdAttr", "OperationId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ContactBaseUpdateFeedId", "contactBaseUpdateFeedIdAttr", "ContactBaseUpdateFeedId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpdateItem_SyncLogRec.init();
return UpdateItem_SyncLogRec;
})(OS.DataTypes.GenericRecord);
Connect_Updates_CSModel.UpdateItem_SyncLogRec = UpdateItem_SyncLogRec;

});
define("Connect_Updates_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Updates_CSModel = exports;
});
