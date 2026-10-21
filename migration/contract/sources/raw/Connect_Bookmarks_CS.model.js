define("Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_SourceHeaderRec = (function (_super) {
__extends(UI_Bookmark_Card_SourceHeaderRec, _super);
function UI_Bookmark_Card_SourceHeaderRec(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_SourceHeaderRec.attributesToDeclare = function () {
return [
this.attr("ImageURL", "imageURLAttr", "ImageURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_Card_SourceHeaderRec.init();
return UI_Bookmark_Card_SourceHeaderRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.UI_Bookmark_Card_SourceHeaderRec = UI_Bookmark_Card_SourceHeaderRec;

});
define("Connect_Bookmarks_CS.model$Note_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model$Note_ItemRec", "Connect_Bookmarks_CS.referencesHealth", "Connect_Bookmarks_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var Note_ItemList = (function (_super) {
__extends(Note_ItemList, _super);
function Note_ItemList(defaults) {
_super.apply(this, arguments);
}
Note_ItemList.itemType = UBTConnectLibraryModel.Note_ItemRec;
return Note_ItemList;
})(OS.DataTypes.GenericRecordList);
Connect_Bookmarks_CSModel.Note_ItemList = Note_ItemList;

});
define("Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "Connect_Bookmarks_CS.referencesHealth", "Connect_Bookmarks_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, Connect_Bookmarks_CSModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_Card_ContentRec = (function (_super) {
__extends(UI_Bookmark_Card_ContentRec, _super);
function UI_Bookmark_Card_ContentRec(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_Card_ContentRec.attributesToDeclare = function () {
return [
this.attr("SourceHeader", "sourceHeaderAttr", "SourceHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_Bookmark_Card_SourceHeaderRec());
}, true, Connect_Bookmarks_CSModel.UI_Bookmark_Card_SourceHeaderRec), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subtitle", "subtitleAttr", "Subtitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, true, UBTConnectLibraryModel.NotesRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_Card_ContentRec.init();
return UI_Bookmark_Card_ContentRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec = UI_Bookmark_Card_ContentRec;

});
define("Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_CardItemRec = (function (_super) {
__extends(UI_Bookmark_CardItemRec, _super);
function UI_Bookmark_CardItemRec(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_CardItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BookmarkCategoryId", "bookmarkCategoryIdAttr", "BookmarkCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bookmark_Card_Content", "bookmark_Card_ContentAttr", "Bookmark_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec());
}, true, Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_CardItemRec.init();
return UI_Bookmark_CardItemRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec = UI_Bookmark_CardItemRec;

});
define("Connect_Bookmarks_CS.model$UI_Bookmark_List_APIRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_List_APIRec = (function (_super) {
__extends(UI_Bookmark_List_APIRec, _super);
function UI_Bookmark_List_APIRec(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_List_APIRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ItemType", "itemTypeAttr", "ItemType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_List_APIRec.init();
return UI_Bookmark_List_APIRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.UI_Bookmark_List_APIRec = UI_Bookmark_List_APIRec;

});
define("Connect_Bookmarks_CS.model$UI_Bookmark_CardItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_CardItemList = (function (_super) {
__extends(UI_Bookmark_CardItemList, _super);
function UI_Bookmark_CardItemList(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_CardItemList.itemType = Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec;
return UI_Bookmark_CardItemList;
})(OS.DataTypes.GenericRecordList);
Connect_Bookmarks_CSModel.UI_Bookmark_CardItemList = UI_Bookmark_CardItemList;

});
define("Connect_Bookmarks_CS.model$UI_BookmarksRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemList"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var UI_BookmarksRec = (function (_super) {
__extends(UI_BookmarksRec, _super);
function UI_BookmarksRec(defaults) {
_super.apply(this, arguments);
}
UI_BookmarksRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BookmarkCardItemList", "bookmarkCardItemListAttr", "BookmarkCardItemList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemList());
}, true, Connect_Bookmarks_CSModel.UI_Bookmark_CardItemList)
].concat(_super.attributesToDeclare.call(this));
};
UI_BookmarksRec.init();
return UI_BookmarksRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.UI_BookmarksRec = UI_BookmarksRec;

});
define("Connect_Bookmarks_CS.model$UI_Bookmark_AddedRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var UI_Bookmark_AddedRec = (function (_super) {
__extends(UI_Bookmark_AddedRec, _super);
function UI_Bookmark_AddedRec(defaults) {
_super.apply(this, arguments);
}
UI_Bookmark_AddedRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BookmarkCategoryId", "bookmarkCategoryIdAttr", "BookmarkCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_Bookmark_AddedRec.init();
return UI_Bookmark_AddedRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.UI_Bookmark_AddedRec = UI_Bookmark_AddedRec;

});
define("Connect_Bookmarks_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect_Bookmarks_CSModel.TextList = TextList;

});
define("Connect_Bookmarks_CS.model$Filter_BookmarkRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Bookmarks_CS.model"], function (exports, OutSystems, Connect_Bookmarks_CSModel) {
var OS = OutSystems.Internal;
var Filter_BookmarkRec = (function (_super) {
__extends(Filter_BookmarkRec, _super);
function Filter_BookmarkRec(defaults) {
_super.apply(this, arguments);
}
Filter_BookmarkRec.attributesToDeclare = function () {
return [
this.attr("BookmarkTypeId", "bookmarkTypeIdAttr", "BookmarkTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SortByNewest", "sortByNewestAttr", "SortByNewest", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Years", "yearsAttr", "Years", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("SearchText", "searchTextAttr", "SearchText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Filter_BookmarkRec.init();
return Filter_BookmarkRec;
})(OS.DataTypes.GenericRecord);
Connect_Bookmarks_CSModel.Filter_BookmarkRec = Filter_BookmarkRec;

});
define("Connect_Bookmarks_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Bookmarks_CSModel = exports;
});
