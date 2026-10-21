define("Connect2_MyBookmarks_IS.model$PhotoDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var PhotoDetailsRec = (function (_super) {
__extends(PhotoDetailsRec, _super);
function PhotoDetailsRec(defaults) {
_super.apply(this, arguments);
}
PhotoDetailsRec.attributesToDeclare = function () {
return [
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPath", "signedPathAttr", "SignedPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhotoDetailsRec.init();
return PhotoDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.PhotoDetailsRec = PhotoDetailsRec;

});
define("Connect2_MyBookmarks_IS.model$CDNRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var CDNRec = (function (_super) {
__extends(CDNRec, _super);
function CDNRec(defaults) {
_super.apply(this, arguments);
}
CDNRec.attributesToDeclare = function () {
return [
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bucket", "bucketAttr", "Bucket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedPath", "signedPathAttr", "SignedPath", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CDNRec.init();
return CDNRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.CDNRec = CDNRec;

});
define("Connect2_MyBookmarks_IS.model$DetailsJsonRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var DetailsJsonRec = (function (_super) {
__extends(DetailsJsonRec, _super);
function DetailsJsonRec(defaults) {
_super.apply(this, arguments);
}
DetailsJsonRec.attributesToDeclare = function () {
return [
this.attr("ServiceType", "serviceTypeAttr", "ServiceType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityID", "localityIDAttr", "LocalityID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdCount", "householdCountAttr", "HouseholdCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SubdivisionName", "subdivisionNameAttr", "SubdivisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsMainHall", "isMainHallAttr", "IsMainHall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MemberID", "memberIDAttr", "MemberID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseHolderId", "houseHolderIdAttr", "HouseHolderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ChildrenNames", "childrenNamesAttr", "ChildrenNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShareObjectTypeId", "shareObjectTypeIdAttr", "ShareObjectTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AreasServed", "areasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivisionID", "subdivisionIDAttr", "SubdivisionID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DetailsJsonRec.init();
return DetailsJsonRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.DetailsJsonRec = DetailsJsonRec;

});
define("Connect2_MyBookmarks_IS.model$BookmarkItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_MyBookmarks_IS.model$DetailsJsonRec"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var BookmarkItemRec = (function (_super) {
__extends(BookmarkItemRec, _super);
function BookmarkItemRec(defaults) {
_super.apply(this, arguments);
}
BookmarkItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectType", "objectTypeAttr", "ObjectType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectId", "objectIdAttr", "ObjectId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhotoDetails", "photoDetailsAttr", "PhotoDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.PhotoDetailsRec());
}, true, Connect2_MyBookmarks_ISModel.PhotoDetailsRec), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RecordNotAvailable", "recordNotAvailableAttr", "RecordNotAvailable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailsJson", "detailsJsonAttr", "DetailsJson", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.DetailsJsonRec());
}, true, Connect2_MyBookmarks_ISModel.DetailsJsonRec), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkItemRec.init();
return BookmarkItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.BookmarkItemRec = BookmarkItemRec;

});
define("Connect2_MyBookmarks_IS.model$BookmarkItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var BookmarkItemList = (function (_super) {
__extends(BookmarkItemList, _super);
function BookmarkItemList(defaults) {
_super.apply(this, arguments);
}
BookmarkItemList.itemType = Connect2_MyBookmarks_ISModel.BookmarkItemRec;
return BookmarkItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_ISModel.BookmarkItemList = BookmarkItemList;

});
define("Connect2_MyBookmarks_IS.model$GetGroupSummariesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkItemList"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var GetGroupSummariesResponseRec = (function (_super) {
__extends(GetGroupSummariesResponseRec, _super);
function GetGroupSummariesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetGroupSummariesResponseRec.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TotalCount", "totalCountAttr", "TotalCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Bookmarks", "bookmarksAttr", "Bookmarks", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkItemList());
}, true, Connect2_MyBookmarks_ISModel.BookmarkItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetGroupSummariesResponseRec.init();
return GetGroupSummariesResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec = GetGroupSummariesResponseRec;

});
define("Connect2_MyBookmarks_IS.model$BookmarkById2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var BookmarkById2Rec = (function (_super) {
__extends(BookmarkById2Rec, _super);
function BookmarkById2Rec(defaults) {
_super.apply(this, arguments);
}
BookmarkById2Rec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectType", "objectTypeAttr", "ObjectType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectId", "objectIdAttr", "ObjectId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RecordNotAvailable", "recordNotAvailableAttr", "RecordNotAvailable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkById2Rec.init();
return BookmarkById2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.BookmarkById2Rec = BookmarkById2Rec;

});
define("Connect2_MyBookmarks_IS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var LongIntegerList = (function (_super) {
__extends(LongIntegerList, _super);
function LongIntegerList(defaults) {
_super.apply(this, arguments);
}
LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
return LongIntegerList;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_ISModel.LongIntegerList = LongIntegerList;

});
define("Connect2_MyBookmarks_IS.model$OneSchoolGlobalRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$CDNRec"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var OneSchoolGlobalRec = (function (_super) {
__extends(OneSchoolGlobalRec, _super);
function OneSchoolGlobalRec(defaults) {
_super.apply(this, arguments);
}
OneSchoolGlobalRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailAddress", "emailAddressAttr", "EmailAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedAddress", "formattedAddressAttr", "FormattedAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CommunityBusinessID", "communityBusinessIDAttr", "CommunityBusinessID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AreasServed", "areasServedAttr", "AreasServed", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityIdList", "localityIdListAttr", "LocalityIdList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.CDNRec());
}, true, Connect2_MyBookmarks_ISModel.CDNRec), 
this.attr("RecordDisabled", "recordDisabledAttr", "RecordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OneSchoolGlobalRec.init();
return OneSchoolGlobalRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.OneSchoolGlobalRec = OneSchoolGlobalRec;

});
define("Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var MyBookmarks_ObjectTypeRec = (function (_super) {
__extends(MyBookmarks_ObjectTypeRec, _super);
function MyBookmarks_ObjectTypeRec(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_ObjectTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_ObjectTypeRec.init();
return MyBookmarks_ObjectTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec = MyBookmarks_ObjectTypeRec;

});
define("Connect2_MyBookmarks_IS.model$GetBookmarksByGroupResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkItemList"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var GetBookmarksByGroupResponseRec = (function (_super) {
__extends(GetBookmarksByGroupResponseRec, _super);
function GetBookmarksByGroupResponseRec(defaults) {
_super.apply(this, arguments);
}
GetBookmarksByGroupResponseRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Results", "resultsAttr", "Results", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkItemList());
}, true, Connect2_MyBookmarks_ISModel.BookmarkItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetBookmarksByGroupResponseRec.init();
return GetBookmarksByGroupResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec = GetBookmarksByGroupResponseRec;

});
define("Connect2_MyBookmarks_IS.model$AddBookmarkRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var AddBookmarkRec = (function (_super) {
__extends(AddBookmarkRec, _super);
function AddBookmarkRec(defaults) {
_super.apply(this, arguments);
}
AddBookmarkRec.attributesToDeclare = function () {
return [
this.attr("ObjectType", "objectTypeAttr", "ObjectType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectId", "objectIdAttr", "ObjectId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ObjectGroup", "objectGroupAttr", "Group", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AddBookmarkRec.init();
return AddBookmarkRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.AddBookmarkRec = AddBookmarkRec;

});
define("Connect2_MyBookmarks_IS.model$BookmarkById2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkById2Rec"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var BookmarkById2List = (function (_super) {
__extends(BookmarkById2List, _super);
function BookmarkById2List(defaults) {
_super.apply(this, arguments);
}
BookmarkById2List.itemType = Connect2_MyBookmarks_ISModel.BookmarkById2Rec;
return BookmarkById2List;
})(OS.DataTypes.GenericRecordList);
Connect2_MyBookmarks_ISModel.BookmarkById2List = BookmarkById2List;

});
define("Connect2_MyBookmarks_IS.model$GetSummariesResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkById2List"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var GetSummariesResponseRec = (function (_super) {
__extends(GetSummariesResponseRec, _super);
function GetSummariesResponseRec(defaults) {
_super.apply(this, arguments);
}
GetSummariesResponseRec.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TotalCount", "totalCountAttr", "TotalCount", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Bookmarks", "bookmarksAttr", "Bookmarks", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkById2List());
}, true, Connect2_MyBookmarks_ISModel.BookmarkById2List)
].concat(_super.attributesToDeclare.call(this));
};
GetSummariesResponseRec.init();
return GetSummariesResponseRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.GetSummariesResponseRec = GetSummariesResponseRec;

});
define("Connect2_MyBookmarks_IS.model$BookmarkImagesByObjectTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model"], function (exports, OutSystems, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
var BookmarkImagesByObjectTypeRec = (function (_super) {
__extends(BookmarkImagesByObjectTypeRec, _super);
function BookmarkImagesByObjectTypeRec(defaults) {
_super.apply(this, arguments);
}
BookmarkImagesByObjectTypeRec.attributesToDeclare = function () {
return [
this.attr("IdList", "idListAttr", "IdList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, true, OS.DataTypes.LongIntegerList), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BookmarkImagesByObjectTypeRec.init();
return BookmarkImagesByObjectTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_ISModel.BookmarkImagesByObjectTypeRec = BookmarkImagesByObjectTypeRec;

});
define("Connect2_MyBookmarks_IS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_MyBookmarks_ISModel = exports;
});
