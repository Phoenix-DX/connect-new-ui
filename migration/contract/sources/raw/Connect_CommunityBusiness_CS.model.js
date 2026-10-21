define("Connect_CommunityBusiness_CS.model$UI_OneSchool_Card_ContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var UI_OneSchool_Card_ContentRec = (function (_super) {
__extends(UI_OneSchool_Card_ContentRec, _super);
function UI_OneSchool_Card_ContentRec(defaults) {
_super.apply(this, arguments);
}
UI_OneSchool_Card_ContentRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_OneSchool_Card_ContentRec.init();
return UI_OneSchool_Card_ContentRec;
})(OS.DataTypes.GenericRecord);
Connect_CommunityBusiness_CSModel.UI_OneSchool_Card_ContentRec = UI_OneSchool_Card_ContentRec;

});
define("Connect_CommunityBusiness_CS.model$BusinessLinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect_CommunityBusiness_CS.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect_CommunityBusiness_CS.referencesHealth", "Connect_CommunityBusiness_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var BusinessLinkItemList = (function (_super) {
__extends(BusinessLinkItemList, _super);
function BusinessLinkItemList(defaults) {
_super.apply(this, arguments);
}
BusinessLinkItemList.itemType = APIDomain_Directory_ISModel.BusinessLinkItemRec;
return BusinessLinkItemList;
})(OS.DataTypes.GenericRecordList);
Connect_CommunityBusiness_CSModel.BusinessLinkItemList = BusinessLinkItemList;

});
define("Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCard_ContentRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect_CommunityBusiness_CS.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect_CommunityBusiness_CS.referencesHealth", "Connect_CommunityBusiness_CS.referencesHealth$APIDomain_Directory_IS", "Connect_CommunityBusiness_CS.model$BusinessLinkItemList"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var UI_OneSchoolGlobal_DetailCard_ContentRec = (function (_super) {
__extends(UI_OneSchoolGlobal_DetailCard_ContentRec, _super);
function UI_OneSchoolGlobal_DetailCard_ContentRec(defaults) {
_super.apply(this, arguments);
}
UI_OneSchoolGlobal_DetailCard_ContentRec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AreasServed", "areasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BusinesLinks", "businesLinksAttr", "BusinesLinks", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.BusinessLinkItemList());
}, true, Connect_CommunityBusiness_CSModel.BusinessLinkItemList)
].concat(_super.attributesToDeclare.call(this));
};
UI_OneSchoolGlobal_DetailCard_ContentRec.init();
return UI_OneSchoolGlobal_DetailCard_ContentRec;
})(OS.DataTypes.GenericRecord);
Connect_CommunityBusiness_CSModel.UI_OneSchoolGlobal_DetailCard_ContentRec = UI_OneSchoolGlobal_DetailCard_ContentRec;

});
define("Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCardRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model", "Connect_CommunityBusiness_CS.model$UI_OneSchool_Card_ContentRec", "Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_DetailCard_ContentRec"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var UI_OneSchoolGlobal_DetailCardRec = (function (_super) {
__extends(UI_OneSchoolGlobal_DetailCardRec, _super);
function UI_OneSchoolGlobal_DetailCardRec(defaults) {
_super.apply(this, arguments);
}
UI_OneSchoolGlobal_DetailCardRec.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessId", "communityBusinessIdAttr", "CommunityBusinessId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UI_OneSchool_Card_Content", "uI_OneSchool_Card_ContentAttr", "UI_OneSchool_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.UI_OneSchool_Card_ContentRec());
}, true, Connect_CommunityBusiness_CSModel.UI_OneSchool_Card_ContentRec), 
this.attr("OneSchoolGlobal__DetailCard_Content", "oneSchoolGlobal__DetailCard_ContentAttr", "OneSchoolGlobal__DetailCard_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.UI_OneSchoolGlobal_DetailCard_ContentRec());
}, true, Connect_CommunityBusiness_CSModel.UI_OneSchoolGlobal_DetailCard_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_OneSchoolGlobal_DetailCardRec.init();
return UI_OneSchoolGlobal_DetailCardRec;
})(OS.DataTypes.GenericRecord);
Connect_CommunityBusiness_CSModel.UI_OneSchoolGlobal_DetailCardRec = UI_OneSchoolGlobal_DetailCardRec;

});
define("Connect_CommunityBusiness_CS.model$UI_OneSchoolGlobal_CopyRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var UI_OneSchoolGlobal_CopyRec = (function (_super) {
__extends(UI_OneSchoolGlobal_CopyRec, _super);
function UI_OneSchoolGlobal_CopyRec(defaults) {
_super.apply(this, arguments);
}
UI_OneSchoolGlobal_CopyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CommunityBusinessId", "communityBusinessIdAttr", "CommunityBusinessId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoSignedURL", "photoSignedURLAttr", "PhotoSignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_OneSchoolGlobal_CopyRec.init();
return UI_OneSchoolGlobal_CopyRec;
})(OS.DataTypes.GenericRecord);
Connect_CommunityBusiness_CSModel.UI_OneSchoolGlobal_CopyRec = UI_OneSchoolGlobal_CopyRec;

});
define("Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model", "Connect_CommunityBusiness_CS.model$UI_OneSchool_Card_ContentRec"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var UI_OneSchool_CardRec = (function (_super) {
__extends(UI_OneSchool_CardRec, _super);
function UI_OneSchool_CardRec(defaults) {
_super.apply(this, arguments);
}
UI_OneSchool_CardRec.attributesToDeclare = function () {
return [
this.attr("CommunityBusinessId", "communityBusinessIdAttr", "CommunityBusinessId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneSchool_Card_Content", "oneSchool_Card_ContentAttr", "OneSchool_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.UI_OneSchool_Card_ContentRec());
}, true, Connect_CommunityBusiness_CSModel.UI_OneSchool_Card_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_OneSchool_CardRec.init();
return UI_OneSchool_CardRec;
})(OS.DataTypes.GenericRecord);
Connect_CommunityBusiness_CSModel.UI_OneSchool_CardRec = UI_OneSchool_CardRec;

});
define("Connect_CommunityBusiness_CS.model$UI_CommunityBusiness_ShareCardRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommunityBusiness_CS.model"], function (exports, OutSystems, Connect_CommunityBusiness_CSModel) {
var OS = OutSystems.Internal;
var UI_CommunityBusiness_ShareCardRec = (function (_super) {
__extends(UI_CommunityBusiness_ShareCardRec, _super);
function UI_CommunityBusiness_ShareCardRec(defaults) {
_super.apply(this, arguments);
}
UI_CommunityBusiness_ShareCardRec.attributesToDeclare = function () {
return [
this.attr("PhotoBucket", "photoBucketAttr", "PhotoBucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoPath", "photoPathAttr", "PhotoPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoType", "photoTypeAttr", "PhotoType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoSignedPath", "photoSignedPathAttr", "PhotoSignedPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AreasServed", "areasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_CommunityBusiness_ShareCardRec.init();
return UI_CommunityBusiness_ShareCardRec;
})(OS.DataTypes.GenericRecord);
Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec = UI_CommunityBusiness_ShareCardRec;

});
define("Connect_CommunityBusiness_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_CommunityBusiness_CSModel = exports;
});
