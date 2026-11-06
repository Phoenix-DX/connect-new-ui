define("Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var UI_NoteCard_SourceHeaderRec = (function (_super) {
__extends(UI_NoteCard_SourceHeaderRec, _super);
function UI_NoteCard_SourceHeaderRec(defaults) {
_super.apply(this, arguments);
}
UI_NoteCard_SourceHeaderRec.attributesToDeclare = function () {
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
UI_NoteCard_SourceHeaderRec.init();
return UI_NoteCard_SourceHeaderRec;
})(OS.DataTypes.GenericRecord);
Connect_Notes_CSModel.UI_NoteCard_SourceHeaderRec = UI_NoteCard_SourceHeaderRec;

});
define("Connect_Notes_CS.model$Note_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTConnectLibrary.model$Note_ItemRec", "Connect_Notes_CS.referencesHealth", "Connect_Notes_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, UBTConnectLibraryModel, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var Note_ItemList = (function (_super) {
__extends(Note_ItemList, _super);
function Note_ItemList(defaults) {
_super.apply(this, arguments);
}
Note_ItemList.itemType = UBTConnectLibraryModel.Note_ItemRec;
return Note_ItemList;
})(OS.DataTypes.GenericRecordList);
Connect_Notes_CSModel.Note_ItemList = Note_ItemList;

});
define("Connect_Notes_CS.model$UI_Note_CardContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "Connect_Notes_CS.referencesHealth", "Connect_Notes_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, Connect_Notes_CSModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UI_Note_CardContentRec = (function (_super) {
__extends(UI_Note_CardContentRec, _super);
function UI_Note_CardContentRec(defaults) {
_super.apply(this, arguments);
}
UI_Note_CardContentRec.attributesToDeclare = function () {
return [
this.attr("SourceHeader", "sourceHeaderAttr", "SourceHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.UI_NoteCard_SourceHeaderRec());
}, true, Connect_Notes_CSModel.UI_NoteCard_SourceHeaderRec), 
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
UI_Note_CardContentRec.init();
return UI_Note_CardContentRec;
})(OS.DataTypes.GenericRecord);
Connect_Notes_CSModel.UI_Note_CardContentRec = UI_Note_CardContentRec;

});
define("Connect_Notes_CS.model$UI_Note_AddedRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var UI_Note_AddedRec = (function (_super) {
__extends(UI_Note_AddedRec, _super);
function UI_Note_AddedRec(defaults) {
_super.apply(this, arguments);
}
UI_Note_AddedRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NoteCategoryId", "noteCategoryIdAttr", "NoteCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateCreatedUtc", "dateCreatedUtcAttr", "DateCreatedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateEditedUtc", "dateEditedUtcAttr", "DateEditedUtc", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_Note_AddedRec.init();
return UI_Note_AddedRec;
})(OS.DataTypes.GenericRecord);
Connect_Notes_CSModel.UI_Note_AddedRec = UI_Note_AddedRec;

});
define("Connect_Notes_CS.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
Connect_Notes_CSModel.TextList = TextList;

});
define("Connect_Notes_CS.model$Notes_FilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var Notes_FilterRec = (function (_super) {
__extends(Notes_FilterRec, _super);
function Notes_FilterRec(defaults) {
_super.apply(this, arguments);
}
Notes_FilterRec.attributesToDeclare = function () {
return [
this.attr("NoteCategoryId", "noteCategoryIdAttr", "NoteCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SortByNewest", "sortByNewestAttr", "SortByNewest", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Years", "yearsAttr", "Years", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("SearchTerm", "searchTermAttr", "SearchTerm", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Notes_FilterRec.init();
return Notes_FilterRec;
})(OS.DataTypes.GenericRecord);
Connect_Notes_CSModel.Notes_FilterRec = Notes_FilterRec;

});
define("Connect_Notes_CS.model$UI_Note_CardItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model", "Connect_Notes_CS.model$UI_Note_CardContentRec"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var UI_Note_CardItemRec = (function (_super) {
__extends(UI_Note_CardItemRec, _super);
function UI_Note_CardItemRec(defaults) {
_super.apply(this, arguments);
}
UI_Note_CardItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NoteCategoryId", "noteCategoryIdAttr", "NoteCategoryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NoteCardContent", "noteCardContentAttr", "NoteCardContent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.UI_Note_CardContentRec());
}, true, Connect_Notes_CSModel.UI_Note_CardContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Note_CardItemRec.init();
return UI_Note_CardItemRec;
})(OS.DataTypes.GenericRecord);
Connect_Notes_CSModel.UI_Note_CardItemRec = UI_Note_CardItemRec;

});
define("Connect_Notes_CS.model$UI_Note_CardItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model", "Connect_Notes_CS.model$UI_Note_CardItemRec"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var UI_Note_CardItemList = (function (_super) {
__extends(UI_Note_CardItemList, _super);
function UI_Note_CardItemList(defaults) {
_super.apply(this, arguments);
}
UI_Note_CardItemList.itemType = Connect_Notes_CSModel.UI_Note_CardItemRec;
return UI_Note_CardItemList;
})(OS.DataTypes.GenericRecordList);
Connect_Notes_CSModel.UI_Note_CardItemList = UI_Note_CardItemList;

});
define("Connect_Notes_CS.model$UI_NotesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Notes_CS.model", "Connect_Notes_CS.model$UI_Note_CardItemList"], function (exports, OutSystems, Connect_Notes_CSModel) {
var OS = OutSystems.Internal;
var UI_NotesRec = (function (_super) {
__extends(UI_NotesRec, _super);
function UI_NotesRec(defaults) {
_super.apply(this, arguments);
}
UI_NotesRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NoteCardItem_List", "noteCardItem_ListAttr", "NoteCardItem_List", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.UI_Note_CardItemList());
}, true, Connect_Notes_CSModel.UI_Note_CardItemList)
].concat(_super.attributesToDeclare.call(this));
};
UI_NotesRec.init();
return UI_NotesRec;
})(OS.DataTypes.GenericRecord);
Connect_Notes_CSModel.UI_NotesRec = UI_NotesRec;

});
define("Connect_Notes_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Notes_CSModel = exports;
});
