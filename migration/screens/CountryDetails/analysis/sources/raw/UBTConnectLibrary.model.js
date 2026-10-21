define("UBTConnectLibrary.model$ActionBarOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionBarOptionsRec = (function (_super) {
__extends(ActionBarOptionsRec, _super);
function ActionBarOptionsRec(defaults) {
_super.apply(this, arguments);
}
ActionBarOptionsRec.attributesToDeclare = function () {
return [
this.attr("ShowUnbookmark", "showUnbookmarkAttr", "ShowUnbookmark", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnBookmarkEnabled", "isUnBookmarkEnabledAttr", "IsUnBookmarkEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ShowAddNote", "showAddNoteAttr", "ShowAddNote", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsAddNoteEnabled", "isAddNoteEnabledAttr", "IsAddNoteEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("ShowShare", "showShareAttr", "ShowShare", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsShareEnabled", "isShareEnabledAttr", "IsShareEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActionBarOptionsRec.init();
return ActionBarOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ActionBarOptionsRec = ActionBarOptionsRec;

});
define("UBTConnectLibrary.model$UBT_ShadowRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ShadowRec = (function (_super) {
__extends(UBT_ShadowRec, _super);
function UBT_ShadowRec(defaults) {
_super.apply(this, arguments);
}
UBT_ShadowRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ShadowRec.init();
return UBT_ShadowRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ShadowRec = UBT_ShadowRec;

});
define("UBTConnectLibrary.model$UBT_ShadowRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ShadowRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ShadowRecord = UBT_ShadowRecord;

});
define("UBTConnectLibrary.model$UBT_ShadowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ShadowRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ShadowRecordList = (function (_super) {
__extends(UBT_ShadowRecordList, _super);
function UBT_ShadowRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ShadowRecordList.itemType = UBTConnectLibraryModel.UBT_ShadowRecord;
return UBT_ShadowRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ShadowRecordList = UBT_ShadowRecordList;

});
define("UBTConnectLibrary.model$TextBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextBooleanRecord = (function (_super) {
__extends(TextBooleanRecord, _super);
function TextBooleanRecord(defaults) {
_super.apply(this, arguments);
}
TextBooleanRecord.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasEdit", "hasEditAttr", "HasEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextBooleanRecord._isAnonymousRecord = true;
TextBooleanRecord.UniqueId = "197de651-dcda-7e49-247d-ab8708c4d4b9";
TextBooleanRecord.init();
return TextBooleanRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.TextBooleanRecord = TextBooleanRecord;

});
define("UBTConnectLibrary.model$TextBoolean1Record", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextBoolean1Record = (function (_super) {
__extends(TextBoolean1Record, _super);
function TextBoolean1Record(defaults) {
_super.apply(this, arguments);
}
TextBoolean1Record.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasDelete", "hasDeleteAttr", "HasDelete", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextBoolean1Record._isAnonymousRecord = true;
TextBoolean1Record.UniqueId = "447c17de-ed00-c15f-c83f-947d05b6b75a";
TextBoolean1Record.init();
return TextBoolean1Record;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.TextBoolean1Record = TextBoolean1Record;

});
define("UBTConnectLibrary.model$ContextMenuOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContextMenuOptionsRec = (function (_super) {
__extends(ContextMenuOptionsRec, _super);
function ContextMenuOptionsRec(defaults) {
_super.apply(this, arguments);
}
ContextMenuOptionsRec.attributesToDeclare = function () {
return [
this.attr("HasSendGift", "hasSendGiftAttr", "HasSendGift", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasMarkAsRead", "hasMarkAsReadAttr", "HasMarkAsRead", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasMarkAsUnread", "hasMarkAsUnreadAttr", "HasMarkAsUnread", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasShare", "hasShareAttr", "HasShare", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Edit", "editAttr", "Edit", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextBooleanRecord());
}, true, UBTConnectLibraryModel.TextBooleanRecord), 
this.attr("Delete", "deleteAttr", "Delete", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextBoolean1Record());
}, true, UBTConnectLibraryModel.TextBoolean1Record)
].concat(_super.attributesToDeclare.call(this));
};
ContextMenuOptionsRec.init();
return ContextMenuOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ContextMenuOptionsRec = ContextMenuOptionsRec;

});
define("UBTConnectLibrary.model$ContextMenuOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContextMenuOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContextMenuOptionsList = (function (_super) {
__extends(ContextMenuOptionsList, _super);
function ContextMenuOptionsList(defaults) {
_super.apply(this, arguments);
}
ContextMenuOptionsList.itemType = UBTConnectLibraryModel.ContextMenuOptionsRec;
return ContextMenuOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ContextMenuOptionsList = ContextMenuOptionsList;

});
define("UBTConnectLibrary.model$UBT_DisplayRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_DisplayRec = (function (_super) {
__extends(UBT_DisplayRec, _super);
function UBT_DisplayRec(defaults) {
_super.apply(this, arguments);
}
UBT_DisplayRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_DisplayRec.init();
return UBT_DisplayRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_DisplayRec = UBT_DisplayRec;

});
define("UBTConnectLibrary.model$UBT_DisplayRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_DisplayRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_DisplayRecord = UBT_DisplayRecord;

});
define("UBTConnectLibrary.model$UBT_ButtonTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ButtonTypeRec = (function (_super) {
__extends(UBT_ButtonTypeRec, _super);
function UBT_ButtonTypeRec(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ButtonTypeRec.init();
return UBT_ButtonTypeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ButtonTypeRec = UBT_ButtonTypeRec;

});
define("UBTConnectLibrary.model$UBT_ButtonTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ButtonTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ButtonTypeRecord = UBT_ButtonTypeRecord;

});
define("UBTConnectLibrary.model$UBT_JustifyContentRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_JustifyContentRec = (function (_super) {
__extends(UBT_JustifyContentRec, _super);
function UBT_JustifyContentRec(defaults) {
_super.apply(this, arguments);
}
UBT_JustifyContentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_JustifyContentRec.init();
return UBT_JustifyContentRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_JustifyContentRec = UBT_JustifyContentRec;

});
define("UBTConnectLibrary.model$UBT_JustifyContentRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_JustifyContentRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_JustifyContentRecord = UBT_JustifyContentRecord;

});
define("UBTConnectLibrary.model$UBT_JustifyContentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_JustifyContentRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_JustifyContentRecordList = (function (_super) {
__extends(UBT_JustifyContentRecordList, _super);
function UBT_JustifyContentRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_JustifyContentRecordList.itemType = UBTConnectLibraryModel.UBT_JustifyContentRecord;
return UBT_JustifyContentRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_JustifyContentRecordList = UBT_JustifyContentRecordList;

});
define("UBTConnectLibrary.model$UBT_FlexDirectionRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionRec = (function (_super) {
__extends(UBT_FlexDirectionRec, _super);
function UBT_FlexDirectionRec(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FlexDirectionRec.init();
return UBT_FlexDirectionRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_FlexDirectionRec = UBT_FlexDirectionRec;

});
define("UBTConnectLibrary.model$UBT_FlexDirectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FlexDirectionRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_FlexDirectionRecord = UBT_FlexDirectionRecord;

});
define("UBTConnectLibrary.model$UBT_FlexDirectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FlexDirectionRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionRecordList = (function (_super) {
__extends(UBT_FlexDirectionRecordList, _super);
function UBT_FlexDirectionRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionRecordList.itemType = UBTConnectLibraryModel.UBT_FlexDirectionRecord;
return UBT_FlexDirectionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FlexDirectionRecordList = UBT_FlexDirectionRecordList;

});
define("UBTConnectLibrary.model$UBT_ColumnWidthRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnWidthRec = (function (_super) {
__extends(UBT_ColumnWidthRec, _super);
function UBT_ColumnWidthRec(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnWidthRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColumnWidthRec.init();
return UBT_ColumnWidthRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ColumnWidthRec = UBT_ColumnWidthRec;

});
define("UBTConnectLibrary.model$UBT_ColumnBehaviourRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourRec = (function (_super) {
__extends(UBT_ColumnBehaviourRec, _super);
function UBT_ColumnBehaviourRec(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColumnBehaviourRec.init();
return UBT_ColumnBehaviourRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ColumnBehaviourRec = UBT_ColumnBehaviourRec;

});
define("UBTConnectLibrary.model$LazyImageSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LazyImageSizeRec = (function (_super) {
__extends(LazyImageSizeRec, _super);
function LazyImageSizeRec(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeRec.attributesToDeclare = function () {
return [
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LazyImageSizeRec.init();
return LazyImageSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LazyImageSizeRec = LazyImageSizeRec;

});
define("UBTConnectLibrary.model$UBT_Size_ImageWidthRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_Size_ImageWidthRec = (function (_super) {
__extends(UBT_Size_ImageWidthRec, _super);
function UBT_Size_ImageWidthRec(defaults) {
_super.apply(this, arguments);
}
UBT_Size_ImageWidthRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_Size_ImageWidthRec.fromStructure = function (str) {
return new UBT_Size_ImageWidthRec(new UBT_Size_ImageWidthRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_Size_ImageWidthRec.init();
return UBT_Size_ImageWidthRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_Size_ImageWidthRec = UBT_Size_ImageWidthRec;

});
define("UBTConnectLibrary.model$UBT_Size_ImageWidthRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_Size_ImageWidthRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_Size_ImageWidthRecord = UBT_Size_ImageWidthRecord;

});
define("UBTConnectLibrary.model$BackgroundImageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BackgroundImageRec = (function (_super) {
__extends(BackgroundImageRec, _super);
function BackgroundImageRec(defaults) {
_super.apply(this, arguments);
}
BackgroundImageRec.attributesToDeclare = function () {
return [
this.attr("Image", "imageAttr", "Url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Repeat", "repeatAttr", "Repeat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Origin", "originAttr", "Origin", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Attachment", "attachmentAttr", "Attachment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BlendMode", "blendModeAttr", "BlendMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BackgroundImageRec.init();
return BackgroundImageRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.BackgroundImageRec = BackgroundImageRec;

});
define("UBTConnectLibrary.model$BackgroundOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsRec = (function (_super) {
__extends(BackgroundOptionsRec, _super);
function BackgroundOptionsRec(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsRec.attributesToDeclare = function () {
return [
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BackgroundImage", "backgroundImageAttr", "Background", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundImageRec());
}, true, UBTConnectLibraryModel.BackgroundImageRec)
].concat(_super.attributesToDeclare.call(this));
};
BackgroundOptionsRec.init();
return BackgroundOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.BackgroundOptionsRec = BackgroundOptionsRec;

});
define("UBTConnectLibrary.model$SpacingOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SpacingOptionsRec = (function (_super) {
__extends(SpacingOptionsRec, _super);
function SpacingOptionsRec(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsRec.attributesToDeclare = function () {
return [
this.attr("GeneralSizeId", "generalSizeIdAttr", "GeneralSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VerticalSizeId", "verticalSizeIdAttr", "VerticalSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HorizontalSizeId", "horizontalSizeIdAttr", "HorizontalSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TopSizeId", "topSizeIdAttr", "TopSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BottomSizeId", "bottomSizeIdAttr", "BottomSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LeftSizeId", "leftSizeIdAttr", "LeftSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RightSizeId", "rightSizeIdAttr", "RightSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SpacingOptionsRec.init();
return SpacingOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SpacingOptionsRec = SpacingOptionsRec;

});
define("UBTConnectLibrary.model$RadiusOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var RadiusOptionsRec = (function (_super) {
__extends(RadiusOptionsRec, _super);
function RadiusOptionsRec(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsRec.attributesToDeclare = function () {
return [
this.attr("GeneralSizeId", "generalSizeIdAttr", "GeneralSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TopLeftId", "topLeftIdAttr", "TopLeftId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TopRightId", "topRightIdAttr", "TopRightId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BottomRightId", "bottomRightIdAttr", "BottomRightId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BottomLeftId", "bottomLeftIdAttr", "BottomLeftId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RadiusOptionsRec.init();
return RadiusOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.RadiusOptionsRec = RadiusOptionsRec;

});
define("UBTConnectLibrary.model$BorderOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BorderOptionsRec = (function (_super) {
__extends(BorderOptionsRec, _super);
function BorderOptionsRec(defaults) {
_super.apply(this, arguments);
}
BorderOptionsRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, true, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("Radius", "radiusAttr", "Radius", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.RadiusOptionsRec());
}, true, UBTConnectLibraryModel.RadiusOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
BorderOptionsRec.init();
return BorderOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.BorderOptionsRec = BorderOptionsRec;

});
define("UBTConnectLibrary.model$TextOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextOptionsRec = (function (_super) {
__extends(TextOptionsRec, _super);
function TextOptionsRec(defaults) {
_super.apply(this, arguments);
}
TextOptionsRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FontSize", "fontSizeAttr", "FontSize", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FontWeight", "fontWeightAttr", "FontWeight", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsItalic", "isItalicAttr", "IsItalic", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnderlined", "isUnderlinedAttr", "IsUnderlined", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextOptionsRec.init();
return TextOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.TextOptionsRec = TextOptionsRec;

});
define("UBTConnectLibrary.model$DisplayOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DisplayOptionsRec = (function (_super) {
__extends(DisplayOptionsRec, _super);
function DisplayOptionsRec(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsRec.attributesToDeclare = function () {
return [
this.attr("Display", "displayAttr", "Display", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AlignItems", "alignItemsAttr", "AlignItems", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("JustifyContent", "justifyContentAttr", "JustifyContent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FlexDirection", "flexDirectionAttr", "FlexDirection", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DisplayOptionsRec.init();
return DisplayOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.DisplayOptionsRec = DisplayOptionsRec;

});
define("UBTConnectLibrary.model$SizeOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SizeOptionsRec = (function (_super) {
__extends(SizeOptionsRec, _super);
function SizeOptionsRec(defaults) {
_super.apply(this, arguments);
}
SizeOptionsRec.attributesToDeclare = function () {
return [
this.attr("Min", "minAttr", "Min", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Main", "mainAttr", "Main", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Max", "maxAttr", "Max", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SizeOptionsRec.init();
return SizeOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SizeOptionsRec = SizeOptionsRec;

});
define("UBTConnectLibrary.model$ContainerOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContainerOptionsRec = (function (_super) {
__extends(ContainerOptionsRec, _super);
function ContainerOptionsRec(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsRec.attributesToDeclare = function () {
return [
this.attr("Background", "backgroundAttr", "Background", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundOptionsRec());
}, true, UBTConnectLibraryModel.BackgroundOptionsRec), 
this.attr("PaddingSize", "paddingSizeAttr", "PaddingSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, true, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("MarginSize", "marginSizeAttr", "MarginSize", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, true, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("BorderOptions", "borderOptionsAttr", "BorderOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BorderOptionsRec());
}, true, UBTConnectLibraryModel.BorderOptionsRec), 
this.attr("TextOptions", "textOptionsAttr", "TextOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
}, true, UBTConnectLibraryModel.TextOptionsRec), 
this.attr("DisplayOptions", "displayOptionsAttr", "DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.DisplayOptionsRec());
}, true, UBTConnectLibraryModel.DisplayOptionsRec), 
this.attr("HeightOptions", "heightOptionsAttr", "HeightOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SizeOptionsRec());
}, true, UBTConnectLibraryModel.SizeOptionsRec), 
this.attr("WidthOptions", "widthOptionsAttr", "WidthOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SizeOptionsRec());
}, true, UBTConnectLibraryModel.SizeOptionsRec), 
this.attr("Visibility", "visibilityAttr", "Visibility", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShadowId", "shadowIdAttr", "ShadowId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSkeletonElement", "isSkeletonElementAttr", "IsSkeletonElement", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsInlineBlock", "isInlineBlockAttr", "IsInlineBlock", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContainerOptionsRec.init();
return ContainerOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ContainerOptionsRec = ContainerOptionsRec;

});
define("UBTConnectLibrary.model$LookupItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupItemRec = (function (_super) {
__extends(LookupItemRec, _super);
function LookupItemRec(defaults) {
_super.apply(this, arguments);
}
LookupItemRec.attributesToDeclare = function () {
return [
this.attr("Singular", "singularAttr", "Singular", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Plural", "pluralAttr", "Plural", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Icon", "iconAttr", "Icon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Icon_Color", "icon_ColorAttr", "Icon_Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LookupItemRec.init();
return LookupItemRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LookupItemRec = LookupItemRec;

});
define("UBTConnectLibrary.model$LookupConceptsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupConceptsRec = (function (_super) {
__extends(LookupConceptsRec, _super);
function LookupConceptsRec(defaults) {
_super.apply(this, arguments);
}
LookupConceptsRec.attributesToDeclare = function () {
return [
this.attr("Brethren", "brethrenAttr", "Brethren", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Household", "householdAttr", "Household", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Brother", "brotherAttr", "Brother", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Sister", "sisterAttr", "Sister", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Distance", "distanceAttr", "Distance", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("SupperMeeting", "supperMeetingAttr", "SupperMeeting", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LookupConceptsRec.init();
return LookupConceptsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LookupConceptsRec = LookupConceptsRec;

});
define("UBTConnectLibrary.model$LookupConceptsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupConceptsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupConceptsRecord = (function (_super) {
__extends(LookupConceptsRecord, _super);
function LookupConceptsRecord(defaults) {
_super.apply(this, arguments);
}
LookupConceptsRecord.attributesToDeclare = function () {
return [
this.attr("LookupConcepts", "lookupConceptsAttr", "LookupConcepts", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupConceptsRec());
}, true, UBTConnectLibraryModel.LookupConceptsRec)
].concat(_super.attributesToDeclare.call(this));
};
LookupConceptsRecord.fromStructure = function (str) {
return new LookupConceptsRecord(new LookupConceptsRecord.RecordClass({
lookupConceptsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LookupConceptsRecord._isAnonymousRecord = true;
LookupConceptsRecord.UniqueId = "0894bc4a-136d-7e11-52ae-7c966af007c6";
LookupConceptsRecord.init();
return LookupConceptsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LookupConceptsRecord = LookupConceptsRecord;

});
define("UBTConnectLibrary.model$TextGenderIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextGenderIdentifierRecord = (function (_super) {
__extends(TextGenderIdentifierRecord, _super);
function TextGenderIdentifierRecord(defaults) {
_super.apply(this, arguments);
}
TextGenderIdentifierRecord.attributesToDeclare = function () {
return [
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Gender", "genderAttr", "Gender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextGenderIdentifierRecord._isAnonymousRecord = true;
TextGenderIdentifierRecord.UniqueId = "39fe40df-7530-13b0-4c26-c0a6f956f767";
TextGenderIdentifierRecord.init();
return TextGenderIdentifierRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.TextGenderIdentifierRecord = TextGenderIdentifierRecord;

});
define("UBTConnectLibrary.model$TextGenderIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextGenderIdentifierRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextGenderIdentifierRecordList = (function (_super) {
__extends(TextGenderIdentifierRecordList, _super);
function TextGenderIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
TextGenderIdentifierRecordList.itemType = UBTConnectLibraryModel.TextGenderIdentifierRecord;
return TextGenderIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TextGenderIdentifierRecordList = TextGenderIdentifierRecordList;

});
define("UBTConnectLibrary.model$UBT_FontSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeRec = (function (_super) {
__extends(UBT_FontSizeRec, _super);
function UBT_FontSizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FontSizeRec.init();
return UBT_FontSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_FontSizeRec = UBT_FontSizeRec;

});
define("UBTConnectLibrary.model$UBT_FontSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FontSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeList = (function (_super) {
__extends(UBT_FontSizeList, _super);
function UBT_FontSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeList.itemType = UBTConnectLibraryModel.UBT_FontSizeRec;
return UBT_FontSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FontSizeList = UBT_FontSizeList;

});
define("UBTConnectLibrary.model$ActionBarOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionBarOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionBarOptionsList = (function (_super) {
__extends(ActionBarOptionsList, _super);
function ActionBarOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionBarOptionsList.itemType = UBTConnectLibraryModel.ActionBarOptionsRec;
return ActionBarOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ActionBarOptionsList = ActionBarOptionsList;

});
define("UBTConnectLibrary.model$BottomSheet_InternalConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRec = (function (_super) {
__extends(BottomSheet_InternalConfigRec, _super);
function BottomSheet_InternalConfigRec(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.shape.softRounded;
}, true), 
this.attr("ShowHandler", "showHandlerAttr", "ShowHandler", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BottomSheet_InternalConfigRec.init();
return BottomSheet_InternalConfigRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.BottomSheet_InternalConfigRec = BottomSheet_InternalConfigRec;

});
define("UBTConnectLibrary.model$BottomSheet_InternalConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BottomSheet_InternalConfigRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRecord = (function (_super) {
__extends(BottomSheet_InternalConfigRecord, _super);
function BottomSheet_InternalConfigRecord(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRecord.attributesToDeclare = function () {
return [
this.attr("BottomSheet_InternalConfig", "bottomSheet_InternalConfigAttr", "BottomSheet_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BottomSheet_InternalConfigRec());
}, true, UBTConnectLibraryModel.BottomSheet_InternalConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
BottomSheet_InternalConfigRecord.fromStructure = function (str) {
return new BottomSheet_InternalConfigRecord(new BottomSheet_InternalConfigRecord.RecordClass({
bottomSheet_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BottomSheet_InternalConfigRecord._isAnonymousRecord = true;
BottomSheet_InternalConfigRecord.UniqueId = "0d0790be-add8-b3d0-b93f-e9a7200ec836";
BottomSheet_InternalConfigRecord.init();
return BottomSheet_InternalConfigRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.BottomSheet_InternalConfigRecord = BottomSheet_InternalConfigRecord;

});
define("UBTConnectLibrary.model$UBT_BackgroundImageSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_BackgroundImageSizeRec = (function (_super) {
__extends(UBT_BackgroundImageSizeRec, _super);
function UBT_BackgroundImageSizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_BackgroundImageSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_BackgroundImageSizeRec.init();
return UBT_BackgroundImageSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_BackgroundImageSizeRec = UBT_BackgroundImageSizeRec;

});
define("UBTConnectLibrary.model$UBT_BackgroundImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_BackgroundImageSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_BackgroundImageSizeRecord = UBT_BackgroundImageSizeRecord;

});
define("UBTConnectLibrary.model$UBT_BackgroundImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_BackgroundImageSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_BackgroundImageSizeRecordList = (function (_super) {
__extends(UBT_BackgroundImageSizeRecordList, _super);
function UBT_BackgroundImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_BackgroundImageSizeRecordList.itemType = UBTConnectLibraryModel.UBT_BackgroundImageSizeRecord;
return UBT_BackgroundImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_BackgroundImageSizeRecordList = UBT_BackgroundImageSizeRecordList;

});
define("UBTConnectLibrary.model$IntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.IntegerIntegerIntegerRecord = IntegerIntegerIntegerRecord;

});
define("UBTConnectLibrary.model$UBT_SizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_SizeRec = (function (_super) {
__extends(UBT_SizeRec, _super);
function UBT_SizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_SizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_SizeRec.init();
return UBT_SizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_SizeRec = UBT_SizeRec;

});
define("UBTConnectLibrary.model$Type_MessageChannelRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_MessageChannelRec = (function (_super) {
__extends(Type_MessageChannelRec, _super);
function Type_MessageChannelRec(defaults) {
_super.apply(this, arguments);
}
Type_MessageChannelRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_MessageChannelRec.init();
return Type_MessageChannelRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_MessageChannelRec = Type_MessageChannelRec;

});
define("UBTConnectLibrary.model$Type_MessageChannelList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_MessageChannelRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_MessageChannelList = (function (_super) {
__extends(Type_MessageChannelList, _super);
function Type_MessageChannelList(defaults) {
_super.apply(this, arguments);
}
Type_MessageChannelList.itemType = UBTConnectLibraryModel.Type_MessageChannelRec;
return Type_MessageChannelList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_MessageChannelList = Type_MessageChannelList;

});
define("UBTConnectLibrary.model$UBT_BackgroundImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_BackgroundImageSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_BackgroundImageSizeList = (function (_super) {
__extends(UBT_BackgroundImageSizeList, _super);
function UBT_BackgroundImageSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_BackgroundImageSizeList.itemType = UBTConnectLibraryModel.UBT_BackgroundImageSizeRec;
return UBT_BackgroundImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_BackgroundImageSizeList = UBT_BackgroundImageSizeList;

});
define("UBTConnectLibrary.model$TagRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TagRec = (function (_super) {
__extends(TagRec, _super);
function TagRec(defaults) {
_super.apply(this, arguments);
}
TagRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Identifier", "identifierAttr", "Identifier", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Enabled", "enabledAttr", "Enabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TagRec.init();
return TagRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.TagRec = TagRec;

});
define("UBTConnectLibrary.model$TagList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TagRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TagList = (function (_super) {
__extends(TagList, _super);
function TagList(defaults) {
_super.apply(this, arguments);
}
TagList.itemType = UBTConnectLibraryModel.TagRec;
return TagList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TagList = TagList;

});
define("UBTConnectLibrary.model$UBT_IconsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_IconsRec = (function (_super) {
__extends(UBT_IconsRec, _super);
function UBT_IconsRec(defaults) {
_super.apply(this, arguments);
}
UBT_IconsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_IconsRec.init();
return UBT_IconsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_IconsRec = UBT_IconsRec;

});
define("UBTConnectLibrary.model$UBT_IconsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_IconsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_IconsRecord = UBT_IconsRecord;

});
define("UBTConnectLibrary.model$UBT_DisplayRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_DisplayRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_DisplayRecordList = (function (_super) {
__extends(UBT_DisplayRecordList, _super);
function UBT_DisplayRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_DisplayRecordList.itemType = UBTConnectLibraryModel.UBT_DisplayRecord;
return UBT_DisplayRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_DisplayRecordList = UBT_DisplayRecordList;

});
define("UBTConnectLibrary.model$UBT_ShapeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ShapeRec = (function (_super) {
__extends(UBT_ShapeRec, _super);
function UBT_ShapeRec(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ShapeRec.init();
return UBT_ShapeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ShapeRec = UBT_ShapeRec;

});
define("UBTConnectLibrary.model$UBT_ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ShapeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ShapeRecord = UBT_ShapeRecord;

});
define("UBTConnectLibrary.model$SelectionOption_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SelectionOption_ItemRec = (function (_super) {
__extends(SelectionOption_ItemRec, _super);
function SelectionOption_ItemRec(defaults) {
_super.apply(this, arguments);
}
SelectionOption_ItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayText", "displayTextAttr", "DisplayText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isSelected", "isSelectedAttr", "isSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isEnabled", "isEnabledAttr", "isEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SelectionOption_ItemRec.init();
return SelectionOption_ItemRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SelectionOption_ItemRec = SelectionOption_ItemRec;

});
define("UBTConnectLibrary.model$SelectionOption_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SelectionOption_ItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SelectionOption_ItemRecord = (function (_super) {
__extends(SelectionOption_ItemRecord, _super);
function SelectionOption_ItemRecord(defaults) {
_super.apply(this, arguments);
}
SelectionOption_ItemRecord.attributesToDeclare = function () {
return [
this.attr("SelectionOption_Item", "selectionOption_ItemAttr", "SelectionOption_Item", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SelectionOption_ItemRec());
}, true, UBTConnectLibraryModel.SelectionOption_ItemRec)
].concat(_super.attributesToDeclare.call(this));
};
SelectionOption_ItemRecord.fromStructure = function (str) {
return new SelectionOption_ItemRecord(new SelectionOption_ItemRecord.RecordClass({
selectionOption_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SelectionOption_ItemRecord._isAnonymousRecord = true;
SelectionOption_ItemRecord.UniqueId = "16b637ae-8781-d206-93fe-b0ae2457512b";
SelectionOption_ItemRecord.init();
return SelectionOption_ItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SelectionOption_ItemRecord = SelectionOption_ItemRecord;

});
define("UBTConnectLibrary.model$SearchInputRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SearchInputRec = (function (_super) {
__extends(SearchInputRec, _super);
function SearchInputRec(defaults) {
_super.apply(this, arguments);
}
SearchInputRec.attributesToDeclare = function () {
return [
this.attr("IsEnabled", "isEnabledAttr", "IsEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("IsMandatory", "isMandatoryAttr", "IsMandatory", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ValidationMessage", "validationMessageAttr", "ValidationMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Required";
}, true), 
this.attr("MaxLength", "maxLengthAttr", "MaxLength", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 50;
}, true), 
this.attr("InitalString", "initalStringAttr", "InitalString", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Search";
}, true), 
this.attr("IsForceInvalid", "isForceInvalidAttr", "IsForceInvalid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Debounce_DelayMS", "debounce_DelayMSAttr", "Debounce_DelayMS", false, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, true), 
this.attr("BorderRadius", "borderRadiusAttr", "BorderRadius", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.shape.softRounded;
}, true), 
this.attr("EnableAutocompleteHTML", "enableAutocompleteHTMLAttr", "EnableAutocompleteHTML", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("FocusOnReady", "focusOnReadyAttr", "FocusOnReady", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSyncValueWithInput", "isSyncValueWithInputAttr", "IsSyncValueWithInput", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SearchInputRec.init();
return SearchInputRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SearchInputRec = SearchInputRec;

});
define("UBTConnectLibrary.model$SearchInputRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SearchInputRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.SearchInputRecord = SearchInputRecord;

});
define("UBTConnectLibrary.model$HouseholdDetailTagsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdDetailTagsRec = (function (_super) {
__extends(HouseholdDetailTagsRec, _super);
function HouseholdDetailTagsRec(defaults) {
_super.apply(this, arguments);
}
HouseholdDetailTagsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("order", "orderAttr", "order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdDetailTagsRec.init();
return HouseholdDetailTagsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.HouseholdDetailTagsRec = HouseholdDetailTagsRec;

});
define("UBTConnectLibrary.model$HouseholdDetailTagsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$HouseholdDetailTagsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdDetailTagsRecord = (function (_super) {
__extends(HouseholdDetailTagsRecord, _super);
function HouseholdDetailTagsRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdDetailTagsRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdDetailTags", "householdDetailTagsAttr", "HouseholdDetailTags", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.HouseholdDetailTagsRec());
}, true, UBTConnectLibraryModel.HouseholdDetailTagsRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdDetailTagsRecord.fromStructure = function (str) {
return new HouseholdDetailTagsRecord(new HouseholdDetailTagsRecord.RecordClass({
householdDetailTagsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdDetailTagsRecord._isAnonymousRecord = true;
HouseholdDetailTagsRecord.UniqueId = "18a8216d-2212-efde-2aa9-2bb41f790cc1";
HouseholdDetailTagsRecord.init();
return HouseholdDetailTagsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.HouseholdDetailTagsRecord = HouseholdDetailTagsRecord;

});
define("UBTConnectLibrary.model$FeedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Feed_CS.model", "UBTConnectLibrary.model", "Connect_Feed_CS.model$FeedItemRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$Connect_Feed_CS"], function (exports, OutSystems, Connect_Feed_CSModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var FeedItemList = (function (_super) {
__extends(FeedItemList, _super);
function FeedItemList(defaults) {
_super.apply(this, arguments);
}
FeedItemList.itemType = Connect_Feed_CSModel.FeedItemRec;
return FeedItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.FeedItemList = FeedItemList;

});
define("UBTConnectLibrary.model$RadiusOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$RadiusOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.RadiusOptionsRecord = RadiusOptionsRecord;

});
define("UBTConnectLibrary.model$UBT_ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColorRec = (function (_super) {
__extends(UBT_ColorRec, _super);
function UBT_ColorRec(defaults) {
_super.apply(this, arguments);
}
UBT_ColorRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsBrand", "isBrandAttr", "IsBrand", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsExtended", "isExtendedAttr", "IsExtended", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsNeutral", "isNeutralAttr", "IsNeutral", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSemantic", "isSemanticAttr", "IsSemantic", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColorRec.init();
return UBT_ColorRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ColorRec = UBT_ColorRec;

});
define("UBTConnectLibrary.model$UBT_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColorRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColorList = (function (_super) {
__extends(UBT_ColorList, _super);
function UBT_ColorList(defaults) {
_super.apply(this, arguments);
}
UBT_ColorList.itemType = UBTConnectLibraryModel.UBT_ColorRec;
return UBT_ColorList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ColorList = UBT_ColorList;

});
define("UBTConnectLibrary.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$ColorRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.itemType = OutSystemsUI_2_23Model.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ColorList = ColorList;

});
define("UBTConnectLibrary.model$UBT_ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ShapeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ShapeList = (function (_super) {
__extends(UBT_ShapeList, _super);
function UBT_ShapeList(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeList.itemType = UBTConnectLibraryModel.UBT_ShapeRec;
return UBT_ShapeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ShapeList = UBT_ShapeList;

});
define("UBTConnectLibrary.model$UBT_ColumnWidthRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColumnWidthRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnWidthRecord = (function (_super) {
__extends(UBT_ColumnWidthRecord, _super);
function UBT_ColumnWidthRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnWidthRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ColumnWidth", "uBT_ColumnWidthAttr", "UBT_ColumnWidth", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ColumnWidthRec());
}, true, UBTConnectLibraryModel.UBT_ColumnWidthRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ColumnWidthRecord.fromStructure = function (str) {
return new UBT_ColumnWidthRecord(new UBT_ColumnWidthRecord.RecordClass({
uBT_ColumnWidthAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ColumnWidthRecord._isAnonymousRecord = true;
UBT_ColumnWidthRecord.UniqueId = "ced4383f-2596-a6c7-1b0a-030012f6b400";
UBT_ColumnWidthRecord.init();
return UBT_ColumnWidthRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ColumnWidthRecord = UBT_ColumnWidthRecord;

});
define("UBTConnectLibrary.model$UBT_ColumnWidthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColumnWidthRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnWidthRecordList = (function (_super) {
__extends(UBT_ColumnWidthRecordList, _super);
function UBT_ColumnWidthRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnWidthRecordList.itemType = UBTConnectLibraryModel.UBT_ColumnWidthRecord;
return UBT_ColumnWidthRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ColumnWidthRecordList = UBT_ColumnWidthRecordList;

});
define("UBTConnectLibrary.model$Type_ImageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageRec = (function (_super) {
__extends(Type_ImageRec, _super);
function Type_ImageRec(defaults) {
_super.apply(this, arguments);
}
Type_ImageRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_ImageRec.fromStructure = function (str) {
return new Type_ImageRec(new Type_ImageRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_ImageRec.init();
return Type_ImageRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_ImageRec = Type_ImageRec;

});
define("UBTConnectLibrary.model$Type_ImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_ImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageRecord = (function (_super) {
__extends(Type_ImageRecord, _super);
function Type_ImageRecord(defaults) {
_super.apply(this, arguments);
}
Type_ImageRecord.attributesToDeclare = function () {
return [
this.attr("Type_Image", "type_ImageAttr", "Type_Image", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Type_ImageRec());
}, true, UBTConnectLibraryModel.Type_ImageRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_ImageRecord.fromStructure = function (str) {
return new Type_ImageRecord(new Type_ImageRecord.RecordClass({
type_ImageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_ImageRecord._isAnonymousRecord = true;
Type_ImageRecord.UniqueId = "1f07c1fe-d18a-1af1-cd08-361eb7138cc7";
Type_ImageRecord.init();
return Type_ImageRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_ImageRecord = Type_ImageRecord;

});
define("UBTConnectLibrary.model$Type_ImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_ImageRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageRecordList = (function (_super) {
__extends(Type_ImageRecordList, _super);
function Type_ImageRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ImageRecordList.itemType = UBTConnectLibraryModel.Type_ImageRecord;
return Type_ImageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_ImageRecordList = Type_ImageRecordList;

});
define("UBTConnectLibrary.model$ButtonOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ButtonOptionsRec = (function (_super) {
__extends(ButtonOptionsRec, _super);
function ButtonOptionsRec(defaults) {
_super.apply(this, arguments);
}
ButtonOptionsRec.attributesToDeclare = function () {
return [
this.attr("UBT_ButtonSizeId", "uBT_ButtonSizeIdAttr", "UBT_ButtonSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_ButtonSize.medium;
}, true), 
this.attr("UBT_ButtonTypeId", "uBT_ButtonTypeIdAttr", "UBT_ButtonTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_ButtonType.primary;
}, true), 
this.attr("UBT_FlexBehavior", "uBT_FlexBehaviorAttr", "UBT_FlexBehavior", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_FlexBehavior.grow;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ButtonOptionsRec.init();
return ButtonOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ButtonOptionsRec = ButtonOptionsRec;

});
define("UBTConnectLibrary.model$DateComponentFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DateComponentFormatRec = (function (_super) {
__extends(DateComponentFormatRec, _super);
function DateComponentFormatRec(defaults) {
_super.apply(this, arguments);
}
DateComponentFormatRec.attributesToDeclare = function () {
return [
this.attr("DayFormat", "dayFormatAttr", "DayFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "d";
}, true), 
this.attr("MonthFormat", "monthFormatAttr", "MonthFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "MMM";
}, true), 
this.attr("YearFormat", "yearFormatAttr", "YearFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "yyyy";
}, true), 
this.attr("WeekDayFormat", "weekDayFormatAttr", "WeekDayFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "ddd";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DateComponentFormatRec.init();
return DateComponentFormatRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.DateComponentFormatRec = DateComponentFormatRec;

});
define("UBTConnectLibrary.model$DateComponentFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DateComponentFormatRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DateComponentFormatRecord = (function (_super) {
__extends(DateComponentFormatRecord, _super);
function DateComponentFormatRecord(defaults) {
_super.apply(this, arguments);
}
DateComponentFormatRecord.attributesToDeclare = function () {
return [
this.attr("DateComponentFormat", "dateComponentFormatAttr", "DateComponentFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.DateComponentFormatRec());
}, true, UBTConnectLibraryModel.DateComponentFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
DateComponentFormatRecord.fromStructure = function (str) {
return new DateComponentFormatRecord(new DateComponentFormatRecord.RecordClass({
dateComponentFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DateComponentFormatRecord._isAnonymousRecord = true;
DateComponentFormatRecord.UniqueId = "3029171a-1c96-5931-f110-7f4e2932ff76";
DateComponentFormatRecord.init();
return DateComponentFormatRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.DateComponentFormatRecord = DateComponentFormatRecord;

});
define("UBTConnectLibrary.model$DateComponentFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DateComponentFormatRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DateComponentFormatRecordList = (function (_super) {
__extends(DateComponentFormatRecordList, _super);
function DateComponentFormatRecordList(defaults) {
_super.apply(this, arguments);
}
DateComponentFormatRecordList.itemType = UBTConnectLibraryModel.DateComponentFormatRecord;
return DateComponentFormatRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.DateComponentFormatRecordList = DateComponentFormatRecordList;

});
define("UBTConnectLibrary.model$UBT_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColorRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ColorRecord = UBT_ColorRecord;

});
define("UBTConnectLibrary.model$UBT_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColorRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColorRecordList = (function (_super) {
__extends(UBT_ColorRecordList, _super);
function UBT_ColorRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColorRecordList.itemType = UBTConnectLibraryModel.UBT_ColorRecord;
return UBT_ColorRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ColorRecordList = UBT_ColorRecordList;

});
define("UBTConnectLibrary.model$UBT_ImageSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeRec = (function (_super) {
__extends(UBT_ImageSizeRec, _super);
function UBT_ImageSizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ImageSizeRec.init();
return UBT_ImageSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ImageSizeRec = UBT_ImageSizeRec;

});
define("UBTConnectLibrary.model$UBT_ImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ImageSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ImageSizeRecord = UBT_ImageSizeRecord;

});
define("UBTConnectLibrary.model$UBT_ImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ImageSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeRecordList = (function (_super) {
__extends(UBT_ImageSizeRecordList, _super);
function UBT_ImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeRecordList.itemType = UBTConnectLibraryModel.UBT_ImageSizeRecord;
return UBT_ImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ImageSizeRecordList = UBT_ImageSizeRecordList;

});
define("UBTConnectLibrary.model$ActionBarOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionBarOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ActionBarOptionsRecord = ActionBarOptionsRecord;

});
define("UBTConnectLibrary.model$ActionBarOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionBarOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionBarOptionsRecordList = (function (_super) {
__extends(ActionBarOptionsRecordList, _super);
function ActionBarOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionBarOptionsRecordList.itemType = UBTConnectLibraryModel.ActionBarOptionsRecord;
return ActionBarOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ActionBarOptionsRecordList = ActionBarOptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_ColumnBehaviourRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ColumnBehaviourRecord = UBT_ColumnBehaviourRecord;

});
define("UBTConnectLibrary.model$UBT_ColumnBehaviourRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourRecordList = (function (_super) {
__extends(UBT_ColumnBehaviourRecordList, _super);
function UBT_ColumnBehaviourRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourRecordList.itemType = UBTConnectLibraryModel.UBT_ColumnBehaviourRecord;
return UBT_ColumnBehaviourRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ColumnBehaviourRecordList = UBT_ColumnBehaviourRecordList;

});
define("UBTConnectLibrary.model$UBT_ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ShapeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ShapeRecordList = (function (_super) {
__extends(UBT_ShapeRecordList, _super);
function UBT_ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ShapeRecordList.itemType = UBTConnectLibraryModel.UBT_ShapeRecord;
return UBT_ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ShapeRecordList = UBT_ShapeRecordList;

});
define("UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsRec = (function (_super) {
__extends(AvatarImageFallbackoptionsRec, _super);
function AvatarImageFallbackoptionsRec(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsRec.attributesToDeclare = function () {
return [
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SVG", "sVGAttr", "SVG", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FontColor", "fontColorAttr", "FontColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FontSize", "fontSizeAttr", "FontSize", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
}, true), 
this.attr("BorderColor", "borderColorAttr", "BorderColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BorderSize", "borderSizeAttr", "BorderSize", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconSizeId", "iconSizeIdAttr", "IconSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AvatarImageFallbackoptionsRec.init();
return AvatarImageFallbackoptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.AvatarImageFallbackoptionsRec = AvatarImageFallbackoptionsRec;

});
define("UBTConnectLibrary.model$AvatarImageFallbackoptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.AvatarImageFallbackoptionsRecord = AvatarImageFallbackoptionsRecord;

});
define("UBTConnectLibrary.model$FeedItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Feed_CS.model", "UBTConnectLibrary.model", "Connect_Feed_CS.model$FeedItemRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$Connect_Feed_CS"], function (exports, OutSystems, Connect_Feed_CSModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var FeedItemRecord = (function (_super) {
__extends(FeedItemRecord, _super);
function FeedItemRecord(defaults) {
_super.apply(this, arguments);
}
FeedItemRecord.attributesToDeclare = function () {
return [
this.attr("FeedItem", "feedItemAttr", "FeedItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Feed_CSModel.FeedItemRec());
}, true, Connect_Feed_CSModel.FeedItemRec)
].concat(_super.attributesToDeclare.call(this));
};
FeedItemRecord.fromStructure = function (str) {
return new FeedItemRecord(new FeedItemRecord.RecordClass({
feedItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FeedItemRecord._isAnonymousRecord = true;
FeedItemRecord.UniqueId = "b98326aa-81b9-cdf8-d18b-1a0cd423e3ea";
FeedItemRecord.init();
return FeedItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.FeedItemRecord = FeedItemRecord;

});
define("UBTConnectLibrary.model$FeedItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$FeedItemRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var FeedItemRecordList = (function (_super) {
__extends(FeedItemRecordList, _super);
function FeedItemRecordList(defaults) {
_super.apply(this, arguments);
}
FeedItemRecordList.itemType = UBTConnectLibraryModel.FeedItemRecord;
return FeedItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.FeedItemRecordList = FeedItemRecordList;

});
define("UBTConnectLibrary.model$GutterSizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$GutterSizeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var GutterSizeList = (function (_super) {
__extends(GutterSizeList, _super);
function GutterSizeList(defaults) {
_super.apply(this, arguments);
}
GutterSizeList.itemType = OutSystemsUI_2_23Model.GutterSizeRec;
return GutterSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.GutterSizeList = GutterSizeList;

});
define("UBTConnectLibrary.model$UBT_ImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ImageSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageSizeList = (function (_super) {
__extends(UBT_ImageSizeList, _super);
function UBT_ImageSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageSizeList.itemType = UBTConnectLibraryModel.UBT_ImageSizeRec;
return UBT_ImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ImageSizeList = UBT_ImageSizeList;

});
define("UBTConnectLibrary.model$WeekdayLabelTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var WeekdayLabelTypeRec = (function (_super) {
__extends(WeekdayLabelTypeRec, _super);
function WeekdayLabelTypeRec(defaults) {
_super.apply(this, arguments);
}
WeekdayLabelTypeRec.attributesToDeclare = function () {
return [
this.attr("LongLabel", "longLabelAttr", "LongLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortLabel", "shortLabelAttr", "ShortLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Number", "numberAttr", "Number", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WeekdayLabelTypeRec.init();
return WeekdayLabelTypeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.WeekdayLabelTypeRec = WeekdayLabelTypeRec;

});
define("UBTConnectLibrary.model$WeekdayLabelTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$WeekdayLabelTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var WeekdayLabelTypeList = (function (_super) {
__extends(WeekdayLabelTypeList, _super);
function WeekdayLabelTypeList(defaults) {
_super.apply(this, arguments);
}
WeekdayLabelTypeList.itemType = UBTConnectLibraryModel.WeekdayLabelTypeRec;
return WeekdayLabelTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.WeekdayLabelTypeList = WeekdayLabelTypeList;

});
define("UBTConnectLibrary.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("UBTConnectLibrary.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ErrorMessageRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ErrorMessageRecordList = (function (_super) {
__extends(ErrorMessageRecordList, _super);
function ErrorMessageRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageRecordList.itemType = UBTConnectLibraryModel.ErrorMessageRecord;
return ErrorMessageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("UBTConnectLibrary.model$BackgroundOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsList = (function (_super) {
__extends(BackgroundOptionsList, _super);
function BackgroundOptionsList(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsList.itemType = UBTConnectLibraryModel.BackgroundOptionsRec;
return BackgroundOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BackgroundOptionsList = BackgroundOptionsList;

});
define("UBTConnectLibrary.model$LookupConceptsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupConceptsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupConceptsRecordList = (function (_super) {
__extends(LookupConceptsRecordList, _super);
function LookupConceptsRecordList(defaults) {
_super.apply(this, arguments);
}
LookupConceptsRecordList.itemType = UBTConnectLibraryModel.LookupConceptsRecord;
return LookupConceptsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LookupConceptsRecordList = LookupConceptsRecordList;

});
define("UBTConnectLibrary.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ErrorMessageList = (function (_super) {
__extends(ErrorMessageList, _super);
function ErrorMessageList(defaults) {
_super.apply(this, arguments);
}
ErrorMessageList.itemType = OutSystemsUI_2_23Model.ErrorMessageRec;
return ErrorMessageList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ErrorMessageList = ErrorMessageList;

});
define("UBTConnectLibrary.model$UBT_ButtonSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ButtonSizeRec = (function (_super) {
__extends(UBT_ButtonSizeRec, _super);
function UBT_ButtonSizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ButtonSizeRec.init();
return UBT_ButtonSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ButtonSizeRec = UBT_ButtonSizeRec;

});
define("UBTConnectLibrary.model$UBT_ButtonSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ButtonSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_ButtonSizeRecord = UBT_ButtonSizeRecord;

});
define("UBTConnectLibrary.model$UBT_ButtonSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ButtonSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ButtonSizeRecordList = (function (_super) {
__extends(UBT_ButtonSizeRecordList, _super);
function UBT_ButtonSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonSizeRecordList.itemType = UBTConnectLibraryModel.UBT_ButtonSizeRecord;
return UBT_ButtonSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ButtonSizeRecordList = UBT_ButtonSizeRecordList;

});
define("UBTConnectLibrary.model$ImageBorderOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsRec = (function (_super) {
__extends(ImageBorderOptionsRec, _super);
function ImageBorderOptionsRec(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsRec.attributesToDeclare = function () {
return [
this.attr("BorderRadius", "borderRadiusAttr", "BorderRadius", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Shape.circle;
}, true), 
this.attr("BorderColorId", "borderColorIdAttr", "BorderColorId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BorderSizeId", "borderSizeIdAttr", "BorderSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImageBorderOptionsRec.init();
return ImageBorderOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ImageBorderOptionsRec = ImageBorderOptionsRec;

});
define("UBTConnectLibrary.model$ImageBorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ImageBorderOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ImageBorderOptionsRecord = ImageBorderOptionsRecord;

});
define("UBTConnectLibrary.model$ImageBorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ImageBorderOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsRecordList = (function (_super) {
__extends(ImageBorderOptionsRecordList, _super);
function ImageBorderOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsRecordList.itemType = UBTConnectLibraryModel.ImageBorderOptionsRecord;
return ImageBorderOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ImageBorderOptionsRecordList = ImageBorderOptionsRecordList;

});
define("UBTConnectLibrary.model$BorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BorderOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.BorderOptionsRecord = BorderOptionsRecord;

});
define("UBTConnectLibrary.model$BorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BorderOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BorderOptionsRecordList = (function (_super) {
__extends(BorderOptionsRecordList, _super);
function BorderOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
BorderOptionsRecordList.itemType = UBTConnectLibraryModel.BorderOptionsRecord;
return BorderOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BorderOptionsRecordList = BorderOptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_AvatarSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeRec = (function (_super) {
__extends(UBT_AvatarSizeRec, _super);
function UBT_AvatarSizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_AvatarSizeRec.init();
return UBT_AvatarSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_AvatarSizeRec = UBT_AvatarSizeRec;

});
define("UBTConnectLibrary.model$UBT_AvatarSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_AvatarSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_AvatarSizeRecord = UBT_AvatarSizeRecord;

});
define("UBTConnectLibrary.model$UBT_AvatarSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_AvatarSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeRecordList = (function (_super) {
__extends(UBT_AvatarSizeRecordList, _super);
function UBT_AvatarSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeRecordList.itemType = UBTConnectLibraryModel.UBT_AvatarSizeRecord;
return UBT_AvatarSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_AvatarSizeRecordList = UBT_AvatarSizeRecordList;

});
define("UBTConnectLibrary.model$LookupActionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupActionsRec = (function (_super) {
__extends(LookupActionsRec, _super);
function LookupActionsRec(defaults) {
_super.apply(this, arguments);
}
LookupActionsRec.attributesToDeclare = function () {
return [
this.attr("Bookmark", "bookmarkAttr", "Bookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Unbookmark", "unbookmarkAttr", "Unbookmark", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Notes", "notesAttr", "Notes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Gift", "giftAttr", "Gift", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Share", "shareAttr", "Share", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Call", "callAttr", "Call", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec), 
this.attr("ViewDetails", "viewDetailsAttr", "ViewDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LookupActionsRec.init();
return LookupActionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LookupActionsRec = LookupActionsRec;

});
define("UBTConnectLibrary.model$LookupActionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupActionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupActionsList = (function (_super) {
__extends(LookupActionsList, _super);
function LookupActionsList(defaults) {
_super.apply(this, arguments);
}
LookupActionsList.itemType = UBTConnectLibraryModel.LookupActionsRec;
return LookupActionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LookupActionsList = LookupActionsList;

});
define("UBTConnectLibrary.model$ContextMenuOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContextMenuOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContextMenuOptionsRecord = (function (_super) {
__extends(ContextMenuOptionsRecord, _super);
function ContextMenuOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ContextMenuOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ContextMenuOptions", "contextMenuOptionsAttr", "ContextMenuOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContextMenuOptionsRec());
}, true, UBTConnectLibraryModel.ContextMenuOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ContextMenuOptionsRecord.fromStructure = function (str) {
return new ContextMenuOptionsRecord(new ContextMenuOptionsRecord.RecordClass({
contextMenuOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContextMenuOptionsRecord._isAnonymousRecord = true;
ContextMenuOptionsRecord.UniqueId = "352cb12e-faca-f153-b5e8-a06919022a1a";
ContextMenuOptionsRecord.init();
return ContextMenuOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ContextMenuOptionsRecord = ContextMenuOptionsRecord;

});
define("UBTConnectLibrary.model$ContactOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContactOptionsRec = (function (_super) {
__extends(ContactOptionsRec, _super);
function ContactOptionsRec(defaults) {
_super.apply(this, arguments);
}
ContactOptionsRec.attributesToDeclare = function () {
return [
this.attr("Is", "isAttr", "Is", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactOptionsRec.fromStructure = function (str) {
return new ContactOptionsRec(new ContactOptionsRec.RecordClass({
isAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactOptionsRec.init();
return ContactOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ContactOptionsRec = ContactOptionsRec;

});
define("UBTConnectLibrary.model$ContactOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContactOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContactOptionsRecord = (function (_super) {
__extends(ContactOptionsRecord, _super);
function ContactOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ContactOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ContactOptions", "contactOptionsAttr", "ContactOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContactOptionsRec());
}, true, UBTConnectLibraryModel.ContactOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactOptionsRecord.fromStructure = function (str) {
return new ContactOptionsRecord(new ContactOptionsRecord.RecordClass({
contactOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactOptionsRecord._isAnonymousRecord = true;
ContactOptionsRecord.UniqueId = "d6ed7e7f-bad3-3cfc-2a1b-5e2f475b3b1e";
ContactOptionsRecord.init();
return ContactOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ContactOptionsRecord = ContactOptionsRecord;

});
define("UBTConnectLibrary.model$ContactOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContactOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContactOptionsRecordList = (function (_super) {
__extends(ContactOptionsRecordList, _super);
function ContactOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ContactOptionsRecordList.itemType = UBTConnectLibraryModel.ContactOptionsRecord;
return ContactOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ContactOptionsRecordList = ContactOptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_FlexBehaviorRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FlexBehaviorRec = (function (_super) {
__extends(UBT_FlexBehaviorRec, _super);
function UBT_FlexBehaviorRec(defaults) {
_super.apply(this, arguments);
}
UBT_FlexBehaviorRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FlexBehaviorRec.init();
return UBT_FlexBehaviorRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_FlexBehaviorRec = UBT_FlexBehaviorRec;

});
define("UBTConnectLibrary.model$UBT_FlexBehaviorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FlexBehaviorRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_FlexBehaviorRecord = UBT_FlexBehaviorRecord;

});
define("UBTConnectLibrary.model$UBT_FlexBehaviorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FlexBehaviorRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FlexBehaviorRecordList = (function (_super) {
__extends(UBT_FlexBehaviorRecordList, _super);
function UBT_FlexBehaviorRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexBehaviorRecordList.itemType = UBTConnectLibraryModel.UBT_FlexBehaviorRecord;
return UBT_FlexBehaviorRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FlexBehaviorRecordList = UBT_FlexBehaviorRecordList;

});
define("UBTConnectLibrary.model$LookupConceptsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupConceptsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupConceptsList = (function (_super) {
__extends(LookupConceptsList, _super);
function LookupConceptsList(defaults) {
_super.apply(this, arguments);
}
LookupConceptsList.itemType = UBTConnectLibraryModel.LookupConceptsRec;
return LookupConceptsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LookupConceptsList = LookupConceptsList;

});
define("UBTConnectLibrary.model$CustomScrollListElementRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CustomScrollListElementRec = (function (_super) {
__extends(CustomScrollListElementRec, _super);
function CustomScrollListElementRec(defaults) {
_super.apply(this, arguments);
}
CustomScrollListElementRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CustomScrollListElementRec.init();
return CustomScrollListElementRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.CustomScrollListElementRec = CustomScrollListElementRec;

});
define("UBTConnectLibrary.model$UBT_MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_MessageTypeRecord = UBT_MessageTypeRecord;

});
define("UBTConnectLibrary.model$BottomSheet_InternalConfigList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BottomSheet_InternalConfigRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigList = (function (_super) {
__extends(BottomSheet_InternalConfigList, _super);
function BottomSheet_InternalConfigList(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigList.itemType = UBTConnectLibraryModel.BottomSheet_InternalConfigRec;
return BottomSheet_InternalConfigList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BottomSheet_InternalConfigList = BottomSheet_InternalConfigList;

});
define("UBTConnectLibrary.model$LazyImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LazyImageSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.LazyImageSizeRecord = LazyImageSizeRecord;

});
define("UBTConnectLibrary.model$LazyImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LazyImageSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LazyImageSizeRecordList = (function (_super) {
__extends(LazyImageSizeRecordList, _super);
function LazyImageSizeRecordList(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeRecordList.itemType = UBTConnectLibraryModel.LazyImageSizeRecord;
return LazyImageSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LazyImageSizeRecordList = LazyImageSizeRecordList;

});
define("UBTConnectLibrary.model$SizeOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SizeOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SizeOptionsList = (function (_super) {
__extends(SizeOptionsList, _super);
function SizeOptionsList(defaults) {
_super.apply(this, arguments);
}
SizeOptionsList.itemType = UBTConnectLibraryModel.SizeOptionsRec;
return SizeOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SizeOptionsList = SizeOptionsList;

});
define("UBTConnectLibrary.model$Note_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Note_ItemRec = (function (_super) {
__extends(Note_ItemRec, _super);
function Note_ItemRec(defaults) {
_super.apply(this, arguments);
}
Note_ItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Note", "noteAttr", "Note", false, false, OS.DataTypes.DataTypes.Text, function () {
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
Note_ItemRec.init();
return Note_ItemRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Note_ItemRec = Note_ItemRec;

});
define("UBTConnectLibrary.model$UBT_VerticalAlignRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignRec = (function (_super) {
__extends(UBT_VerticalAlignRec, _super);
function UBT_VerticalAlignRec(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_VerticalAlignRec.init();
return UBT_VerticalAlignRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_VerticalAlignRec = UBT_VerticalAlignRec;

});
define("UBTConnectLibrary.model$UBT_VerticalAlignRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_VerticalAlignRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_VerticalAlignRecord = UBT_VerticalAlignRecord;

});
define("UBTConnectLibrary.model$DisplayOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DisplayOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.DisplayOptionsRecord = DisplayOptionsRecord;

});
define("UBTConnectLibrary.model$DisplayOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DisplayOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DisplayOptionsRecordList = (function (_super) {
__extends(DisplayOptionsRecordList, _super);
function DisplayOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsRecordList.itemType = UBTConnectLibraryModel.DisplayOptionsRecord;
return DisplayOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.DisplayOptionsRecordList = DisplayOptionsRecordList;

});
define("UBTConnectLibrary.model$Note_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Note_ItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.Note_ItemRecord = Note_ItemRecord;

});
define("UBTConnectLibrary.model$BreakColumnsList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$BreakColumnsRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BreakColumnsList = (function (_super) {
__extends(BreakColumnsList, _super);
function BreakColumnsList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsList.itemType = OutSystemsUI_2_23Model.BreakColumnsRec;
return BreakColumnsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BreakColumnsList = BreakColumnsList;

});
define("UBTConnectLibrary.model$UBT_FontWeightRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FontWeightRec = (function (_super) {
__extends(UBT_FontWeightRec, _super);
function UBT_FontWeightRec(defaults) {
_super.apply(this, arguments);
}
UBT_FontWeightRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_FontWeightRec.init();
return UBT_FontWeightRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_FontWeightRec = UBT_FontWeightRec;

});
define("UBTConnectLibrary.model$HouseholdMemberTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdMemberTypeRec = (function (_super) {
__extends(HouseholdMemberTypeRec, _super);
function HouseholdMemberTypeRec(defaults) {
_super.apply(this, arguments);
}
HouseholdMemberTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
HouseholdMemberTypeRec.init();
return HouseholdMemberTypeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.HouseholdMemberTypeRec = HouseholdMemberTypeRec;

});
define("UBTConnectLibrary.model$HouseholdMemberTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$HouseholdMemberTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdMemberTypeList = (function (_super) {
__extends(HouseholdMemberTypeList, _super);
function HouseholdMemberTypeList(defaults) {
_super.apply(this, arguments);
}
HouseholdMemberTypeList.itemType = UBTConnectLibraryModel.HouseholdMemberTypeRec;
return HouseholdMemberTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.HouseholdMemberTypeList = HouseholdMemberTypeList;

});
define("UBTConnectLibrary.model$UBT_ImageCardTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageCardTypeRec = (function (_super) {
__extends(UBT_ImageCardTypeRec, _super);
function UBT_ImageCardTypeRec(defaults) {
_super.apply(this, arguments);
}
UBT_ImageCardTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ImageCardTypeRec.init();
return UBT_ImageCardTypeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ImageCardTypeRec = UBT_ImageCardTypeRec;

});
define("UBTConnectLibrary.model$AvatarIconOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsRec = (function (_super) {
__extends(AvatarIconOptionsRec, _super);
function AvatarIconOptionsRec(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsRec.attributesToDeclare = function () {
return [
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconColorId", "iconColorIdAttr", "IconColorId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconSizeId", "iconSizeIdAttr", "IconSizeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AvatarIconOptionsRec.init();
return AvatarIconOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.AvatarIconOptionsRec = AvatarIconOptionsRec;

});
define("UBTConnectLibrary.model$UBT_IconsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_IconsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_IconsList = (function (_super) {
__extends(UBT_IconsList, _super);
function UBT_IconsList(defaults) {
_super.apply(this, arguments);
}
UBT_IconsList.itemType = UBTConnectLibraryModel.UBT_IconsRec;
return UBT_IconsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_IconsList = UBT_IconsList;

});
define("UBTConnectLibrary.model$Connect_UpdateTypeIdRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model$Connect_UpdateTypeIdRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Connect_UpdateTypeIdRecord = (function (_super) {
__extends(Connect_UpdateTypeIdRecord, _super);
function Connect_UpdateTypeIdRecord(defaults) {
_super.apply(this, arguments);
}
Connect_UpdateTypeIdRecord.attributesToDeclare = function () {
return [
this.attr("Connect_UpdateTypeId", "connect_UpdateTypeIdAttr", "Connect_UpdateTypeId", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_UpdateTypeIdRec());
}, true, Connect_CommonEntities_DBModel.Connect_UpdateTypeIdRec)
].concat(_super.attributesToDeclare.call(this));
};
Connect_UpdateTypeIdRecord.fromStructure = function (str) {
return new Connect_UpdateTypeIdRecord(new Connect_UpdateTypeIdRecord.RecordClass({
connect_UpdateTypeIdAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_UpdateTypeIdRecord._isAnonymousRecord = true;
Connect_UpdateTypeIdRecord.UniqueId = "44c508f2-e1f3-7776-1a55-3f0eeab12e7b";
Connect_UpdateTypeIdRecord.init();
return Connect_UpdateTypeIdRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Connect_UpdateTypeIdRecord = Connect_UpdateTypeIdRecord;

});
define("UBTConnectLibrary.model$SignedURLRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SignedURLRec = (function (_super) {
__extends(SignedURLRec, _super);
function SignedURLRec(defaults) {
_super.apply(this, arguments);
}
SignedURLRec.attributesToDeclare = function () {
return [
this.attr("LowResolution", "lowResolutionAttr", "LowResolution", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediumResolution", "mediumResolutionAttr", "MediumResolution", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HighResolution", "highResolutionAttr", "HighResolution", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignedURLRec.init();
return SignedURLRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SignedURLRec = SignedURLRec;

});
define("UBTConnectLibrary.model$SignedURLList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SignedURLRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SignedURLList = (function (_super) {
__extends(SignedURLList, _super);
function SignedURLList(defaults) {
_super.apply(this, arguments);
}
SignedURLList.itemType = UBTConnectLibraryModel.SignedURLRec;
return SignedURLList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SignedURLList = SignedURLList;

});
define("UBTConnectLibrary.model$SignedURLRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SignedURLRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SignedURLRecord = (function (_super) {
__extends(SignedURLRecord, _super);
function SignedURLRecord(defaults) {
_super.apply(this, arguments);
}
SignedURLRecord.attributesToDeclare = function () {
return [
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SignedURLRec());
}, true, UBTConnectLibraryModel.SignedURLRec)
].concat(_super.attributesToDeclare.call(this));
};
SignedURLRecord.fromStructure = function (str) {
return new SignedURLRecord(new SignedURLRecord.RecordClass({
signedURLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SignedURLRecord._isAnonymousRecord = true;
SignedURLRecord.UniqueId = "4572e624-709c-c757-1340-666c463f7daa";
SignedURLRecord.init();
return SignedURLRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.SignedURLRecord = SignedURLRecord;

});
define("UBTConnectLibrary.model$RadiusOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$RadiusOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var RadiusOptionsRecordList = (function (_super) {
__extends(RadiusOptionsRecordList, _super);
function RadiusOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsRecordList.itemType = UBTConnectLibraryModel.RadiusOptionsRecord;
return RadiusOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.RadiusOptionsRecordList = RadiusOptionsRecordList;

});
define("UBTConnectLibrary.model$AvatarImageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarImageRec = (function (_super) {
__extends(AvatarImageRec, _super);
function AvatarImageRec(defaults) {
_super.apply(this, arguments);
}
AvatarImageRec.attributesToDeclare = function () {
return [
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FallbackOptions", "fallbackOptionsAttr", "FallbackOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec());
}, true, UBTConnectLibraryModel.AvatarImageFallbackoptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
AvatarImageRec.init();
return AvatarImageRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.AvatarImageRec = AvatarImageRec;

});
define("UBTConnectLibrary.model$ColumnOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColumnOptionsRec = (function (_super) {
__extends(ColumnOptionsRec, _super);
function ColumnOptionsRec(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsRec.attributesToDeclare = function () {
return [
this.attr("ColumnBehaviour", "columnBehaviourAttr", "ColumnBehaviour", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SpacingSize", "spacingSizeAttr", "SpacingSize", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VerticalAlign", "verticalAlignAttr", "VerticalAlign", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FlexDirection", "flexDirectionAttr", "FlexDirection", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ColumnSizes", "columnSizesAttr", "ColumnSizes", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.IntegerIntegerIntegerRecord());
}, true, UBTConnectLibraryModel.IntegerIntegerIntegerRecord)
].concat(_super.attributesToDeclare.call(this));
};
ColumnOptionsRec.init();
return ColumnOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ColumnOptionsRec = ColumnOptionsRec;

});
define("UBTConnectLibrary.model$ColumnOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColumnOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ColumnOptionsRecord = ColumnOptionsRecord;

});
define("UBTConnectLibrary.model$GenderRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model$GenderRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var GenderRecord = (function (_super) {
__extends(GenderRecord, _super);
function GenderRecord(defaults) {
_super.apply(this, arguments);
}
GenderRecord.attributesToDeclare = function () {
return [
this.attr("Gender", "genderAttr", "Gender", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.GenderRec());
}, true, Connect_CommonEntities_DBModel.GenderRec)
].concat(_super.attributesToDeclare.call(this));
};
GenderRecord.fromStructure = function (str) {
return new GenderRecord(new GenderRecord.RecordClass({
genderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GenderRecord._isAnonymousRecord = true;
GenderRecord.UniqueId = "4a264f0d-528c-ff0b-13f8-4a46a3c359c9";
GenderRecord.init();
return GenderRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.GenderRecord = GenderRecord;

});
define("UBTConnectLibrary.model$LookupActionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupActionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupActionsRecord = (function (_super) {
__extends(LookupActionsRecord, _super);
function LookupActionsRecord(defaults) {
_super.apply(this, arguments);
}
LookupActionsRecord.attributesToDeclare = function () {
return [
this.attr("LookupActions", "lookupActionsAttr", "LookupActions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupActionsRec());
}, true, UBTConnectLibraryModel.LookupActionsRec)
].concat(_super.attributesToDeclare.call(this));
};
LookupActionsRecord.fromStructure = function (str) {
return new LookupActionsRecord(new LookupActionsRecord.RecordClass({
lookupActionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LookupActionsRecord._isAnonymousRecord = true;
LookupActionsRecord.UniqueId = "bfbebdca-5f7c-e227-f0aa-20b2b6c0419f";
LookupActionsRecord.init();
return LookupActionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LookupActionsRecord = LookupActionsRecord;

});
define("UBTConnectLibrary.model$LookupActionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupActionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupActionsRecordList = (function (_super) {
__extends(LookupActionsRecordList, _super);
function LookupActionsRecordList(defaults) {
_super.apply(this, arguments);
}
LookupActionsRecordList.itemType = UBTConnectLibraryModel.LookupActionsRecord;
return LookupActionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LookupActionsRecordList = LookupActionsRecordList;

});
define("UBTConnectLibrary.model$Note_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Note_ItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Note_ItemList = (function (_super) {
__extends(Note_ItemList, _super);
function Note_ItemList(defaults) {
_super.apply(this, arguments);
}
Note_ItemList.itemType = UBTConnectLibraryModel.Note_ItemRec;
return Note_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Note_ItemList = Note_ItemList;

});
define("UBTConnectLibrary.model$NotesRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Note_ItemList"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var NotesRec = (function (_super) {
__extends(NotesRec, _super);
function NotesRec(defaults) {
_super.apply(this, arguments);
}
NotesRec.attributesToDeclare = function () {
return [
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Note_Item_List", "note_Item_ListAttr", "Note_Item_List", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Note_ItemList());
}, true, UBTConnectLibraryModel.Note_ItemList)
].concat(_super.attributesToDeclare.call(this));
};
NotesRec.init();
return NotesRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.NotesRec = NotesRec;

});
define("UBTConnectLibrary.model$NotesList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$NotesRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var NotesList = (function (_super) {
__extends(NotesList, _super);
function NotesList(defaults) {
_super.apply(this, arguments);
}
NotesList.itemType = UBTConnectLibraryModel.NotesRec;
return NotesList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.NotesList = NotesList;

});
define("UBTConnectLibrary.model$SpacingOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SpacingOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SpacingOptionsList = (function (_super) {
__extends(SpacingOptionsList, _super);
function SpacingOptionsList(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsList.itemType = UBTConnectLibraryModel.SpacingOptionsRec;
return SpacingOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SpacingOptionsList = SpacingOptionsList;

});
define("UBTConnectLibrary.model$CustomScrollListElementRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$CustomScrollListElementRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CustomScrollListElementRecord = (function (_super) {
__extends(CustomScrollListElementRecord, _super);
function CustomScrollListElementRecord(defaults) {
_super.apply(this, arguments);
}
CustomScrollListElementRecord.attributesToDeclare = function () {
return [
this.attr("CustomScrollListElement", "customScrollListElementAttr", "CustomScrollListElement", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.CustomScrollListElementRec());
}, true, UBTConnectLibraryModel.CustomScrollListElementRec)
].concat(_super.attributesToDeclare.call(this));
};
CustomScrollListElementRecord.fromStructure = function (str) {
return new CustomScrollListElementRecord(new CustomScrollListElementRecord.RecordClass({
customScrollListElementAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomScrollListElementRecord._isAnonymousRecord = true;
CustomScrollListElementRecord.UniqueId = "4feb662f-9169-225a-bcb8-c0b01e717519";
CustomScrollListElementRecord.init();
return CustomScrollListElementRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.CustomScrollListElementRecord = CustomScrollListElementRecord;

});
define("UBTConnectLibrary.model$ColorOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColorOptionsRec = (function (_super) {
__extends(ColorOptionsRec, _super);
function ColorOptionsRec(defaults) {
_super.apply(this, arguments);
}
ColorOptionsRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(1);
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ColorOptionsRec.init();
return ColorOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ColorOptionsRec = ColorOptionsRec;

});
define("UBTConnectLibrary.model$ColorOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColorOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColorOptionsRecord = (function (_super) {
__extends(ColorOptionsRecord, _super);
function ColorOptionsRecord(defaults) {
_super.apply(this, arguments);
}
ColorOptionsRecord.attributesToDeclare = function () {
return [
this.attr("ColorOptions", "colorOptionsAttr", "ColorOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ColorOptionsRec());
}, true, UBTConnectLibraryModel.ColorOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorOptionsRecord.fromStructure = function (str) {
return new ColorOptionsRecord(new ColorOptionsRecord.RecordClass({
colorOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorOptionsRecord._isAnonymousRecord = true;
ColorOptionsRecord.UniqueId = "f76f9d77-b4c6-03b4-fcf3-04832d3f2a71";
ColorOptionsRecord.init();
return ColorOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ColorOptionsRecord = ColorOptionsRecord;

});
define("UBTConnectLibrary.model$ColorOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColorOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColorOptionsRecordList = (function (_super) {
__extends(ColorOptionsRecordList, _super);
function ColorOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ColorOptionsRecordList.itemType = UBTConnectLibraryModel.ColorOptionsRecord;
return ColorOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ColorOptionsRecordList = ColorOptionsRecordList;

});
define("UBTConnectLibrary.model$LocalityContactOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LocalityContactOptionsRec = (function (_super) {
__extends(LocalityContactOptionsRec, _super);
function LocalityContactOptionsRec(defaults) {
_super.apply(this, arguments);
}
LocalityContactOptionsRec.attributesToDeclare = function () {
return [
this.attr("ContactName", "contactNameAttr", "ContactName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ContactRole", "contactRoleAttr", "ContactRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SVG", "sVGAttr", "SVG", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalityContactOptionsRec.init();
return LocalityContactOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LocalityContactOptionsRec = LocalityContactOptionsRec;

});
define("UBTConnectLibrary.model$LocalityContactOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LocalityContactOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LocalityContactOptionsList = (function (_super) {
__extends(LocalityContactOptionsList, _super);
function LocalityContactOptionsList(defaults) {
_super.apply(this, arguments);
}
LocalityContactOptionsList.itemType = UBTConnectLibraryModel.LocalityContactOptionsRec;
return LocalityContactOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LocalityContactOptionsList = LocalityContactOptionsList;

});
define("UBTConnectLibrary.model$UBT_ImageCardTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ImageCardTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageCardTypeList = (function (_super) {
__extends(UBT_ImageCardTypeList, _super);
function UBT_ImageCardTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageCardTypeList.itemType = UBTConnectLibraryModel.UBT_ImageCardTypeRec;
return UBT_ImageCardTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ImageCardTypeList = UBT_ImageCardTypeList;

});
define("UBTConnectLibrary.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$PositionRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var PositionList = (function (_super) {
__extends(PositionList, _super);
function PositionList(defaults) {
_super.apply(this, arguments);
}
PositionList.itemType = OutSystemsUI_2_23Model.PositionRec;
return PositionList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.PositionList = PositionList;

});
define("UBTConnectLibrary.model$CustomScrollListElementRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$CustomScrollListElementRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CustomScrollListElementRecordList = (function (_super) {
__extends(CustomScrollListElementRecordList, _super);
function CustomScrollListElementRecordList(defaults) {
_super.apply(this, arguments);
}
CustomScrollListElementRecordList.itemType = UBTConnectLibraryModel.CustomScrollListElementRecord;
return CustomScrollListElementRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.CustomScrollListElementRecordList = CustomScrollListElementRecordList;

});
define("UBTConnectLibrary.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$ShapeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ShapeList = (function (_super) {
__extends(ShapeList, _super);
function ShapeList(defaults) {
_super.apply(this, arguments);
}
ShapeList.itemType = OutSystemsUI_2_23Model.ShapeRec;
return ShapeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ShapeList = ShapeList;

});
define("UBTConnectLibrary.model$DetailDisplayTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DetailDisplayTypeRec = (function (_super) {
__extends(DetailDisplayTypeRec, _super);
function DetailDisplayTypeRec(defaults) {
_super.apply(this, arguments);
}
DetailDisplayTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
DetailDisplayTypeRec.init();
return DetailDisplayTypeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.DetailDisplayTypeRec = DetailDisplayTypeRec;

});
define("UBTConnectLibrary.model$DetailDisplayTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DetailDisplayTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DetailDisplayTypeRecord = (function (_super) {
__extends(DetailDisplayTypeRecord, _super);
function DetailDisplayTypeRecord(defaults) {
_super.apply(this, arguments);
}
DetailDisplayTypeRecord.attributesToDeclare = function () {
return [
this.attr("DetailDisplayType", "detailDisplayTypeAttr", "DetailDisplayType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.DetailDisplayTypeRec());
}, true, UBTConnectLibraryModel.DetailDisplayTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailDisplayTypeRecord.fromStructure = function (str) {
return new DetailDisplayTypeRecord(new DetailDisplayTypeRecord.RecordClass({
detailDisplayTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailDisplayTypeRecord._isAnonymousRecord = true;
DetailDisplayTypeRecord.UniqueId = "ba85f172-2c5c-e356-60ba-96b4da5787b5";
DetailDisplayTypeRecord.init();
return DetailDisplayTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.DetailDisplayTypeRecord = DetailDisplayTypeRecord;

});
define("UBTConnectLibrary.model$DetailDisplayTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DetailDisplayTypeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DetailDisplayTypeRecordList = (function (_super) {
__extends(DetailDisplayTypeRecordList, _super);
function DetailDisplayTypeRecordList(defaults) {
_super.apply(this, arguments);
}
DetailDisplayTypeRecordList.itemType = UBTConnectLibraryModel.DetailDisplayTypeRecord;
return DetailDisplayTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.DetailDisplayTypeRecordList = DetailDisplayTypeRecordList;

});
define("UBTConnectLibrary.model$InlineIconRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var InlineIconRec = (function (_super) {
__extends(InlineIconRec, _super);
function InlineIconRec(defaults) {
_super.apply(this, arguments);
}
InlineIconRec.attributesToDeclare = function () {
return [
this.attr("IconId", "iconIdAttr", "IconId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconSizeId", "iconSizeIdAttr", "IconSizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SpacingSize", "spacingSizeAttr", "SpacingSize", false, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
}, true), 
this.attr("IconColorId", "iconColorIdAttr", "IconColorId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InlineIconRec.init();
return InlineIconRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.InlineIconRec = InlineIconRec;

});
define("UBTConnectLibrary.model$InlineIconRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$InlineIconRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.InlineIconRecord = InlineIconRecord;

});
define("UBTConnectLibrary.model$InlineIconRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$InlineIconRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var InlineIconRecordList = (function (_super) {
__extends(InlineIconRecordList, _super);
function InlineIconRecordList(defaults) {
_super.apply(this, arguments);
}
InlineIconRecordList.itemType = UBTConnectLibraryModel.InlineIconRecord;
return InlineIconRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.InlineIconRecordList = InlineIconRecordList;

});
define("UBTConnectLibrary.model$CalendarViewRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CalendarViewRec = (function (_super) {
__extends(CalendarViewRec, _super);
function CalendarViewRec(defaults) {
_super.apply(this, arguments);
}
CalendarViewRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconClass", "iconClassAttr", "IconClass", false, false, OS.DataTypes.DataTypes.Text, function () {
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
CalendarViewRec.init();
return CalendarViewRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.CalendarViewRec = CalendarViewRec;

});
define("UBTConnectLibrary.model$CalendarViewRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$CalendarViewRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CalendarViewRecord = (function (_super) {
__extends(CalendarViewRecord, _super);
function CalendarViewRecord(defaults) {
_super.apply(this, arguments);
}
CalendarViewRecord.attributesToDeclare = function () {
return [
this.attr("CalendarView", "calendarViewAttr", "CalendarView", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.CalendarViewRec());
}, true, UBTConnectLibraryModel.CalendarViewRec)
].concat(_super.attributesToDeclare.call(this));
};
CalendarViewRecord.fromStructure = function (str) {
return new CalendarViewRecord(new CalendarViewRecord.RecordClass({
calendarViewAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CalendarViewRecord._isAnonymousRecord = true;
CalendarViewRecord.UniqueId = "bb2de4bc-8adf-f385-66d9-f0058ee9264b";
CalendarViewRecord.init();
return CalendarViewRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.CalendarViewRecord = CalendarViewRecord;

});
define("UBTConnectLibrary.model$CalendarViewRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$CalendarViewRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CalendarViewRecordList = (function (_super) {
__extends(CalendarViewRecordList, _super);
function CalendarViewRecordList(defaults) {
_super.apply(this, arguments);
}
CalendarViewRecordList.itemType = UBTConnectLibraryModel.CalendarViewRecord;
return CalendarViewRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.CalendarViewRecordList = CalendarViewRecordList;

});
define("UBTConnectLibrary.model$UBT_FlexBehaviorList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FlexBehaviorRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FlexBehaviorList = (function (_super) {
__extends(UBT_FlexBehaviorList, _super);
function UBT_FlexBehaviorList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexBehaviorList.itemType = UBTConnectLibraryModel.UBT_FlexBehaviorRec;
return UBT_FlexBehaviorList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FlexBehaviorList = UBT_FlexBehaviorList;

});
define("UBTConnectLibrary.model$SearchInputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SearchInputRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SearchInputRecordList = (function (_super) {
__extends(SearchInputRecordList, _super);
function SearchInputRecordList(defaults) {
_super.apply(this, arguments);
}
SearchInputRecordList.itemType = UBTConnectLibraryModel.SearchInputRecord;
return SearchInputRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SearchInputRecordList = SearchInputRecordList;

});
define("UBTConnectLibrary.model$UBT_SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_SizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_SizeRecord = UBT_SizeRecord;

});
define("UBTConnectLibrary.model$UBT_SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_SizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_SizeRecordList = (function (_super) {
__extends(UBT_SizeRecordList, _super);
function UBT_SizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_SizeRecordList.itemType = UBTConnectLibraryModel.UBT_SizeRecord;
return UBT_SizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_SizeRecordList = UBT_SizeRecordList;

});
define("UBTConnectLibrary.model$BackgroundImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BackgroundImageList = (function (_super) {
__extends(BackgroundImageList, _super);
function BackgroundImageList(defaults) {
_super.apply(this, arguments);
}
BackgroundImageList.itemType = UBTConnectLibraryModel.BackgroundImageRec;
return BackgroundImageList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BackgroundImageList = BackgroundImageList;

});
define("UBTConnectLibrary.model$UBT_FontWeightList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FontWeightRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FontWeightList = (function (_super) {
__extends(UBT_FontWeightList, _super);
function UBT_FontWeightList(defaults) {
_super.apply(this, arguments);
}
UBT_FontWeightList.itemType = UBTConnectLibraryModel.UBT_FontWeightRec;
return UBT_FontWeightList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FontWeightList = UBT_FontWeightList;

});
define("UBTConnectLibrary.model$IntegerIntegerIntegerIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerIntegerRecord = (function (_super) {
__extends(IntegerIntegerIntegerIntegerRecord, _super);
function IntegerIntegerIntegerIntegerRecord(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerIntegerRecord.attributesToDeclare = function () {
return [
this.attr("BreakPoint", "breakPointAttr", "BreakPoint", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CurvePoint", "curvePointAttr", "CurvePoint", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegerIntegerIntegerIntegerRecord._isAnonymousRecord = true;
IntegerIntegerIntegerIntegerRecord.UniqueId = "78f083b6-3a6f-0dca-97e3-a0a4ad15f0ac";
IntegerIntegerIntegerIntegerRecord.init();
return IntegerIntegerIntegerIntegerRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.IntegerIntegerIntegerIntegerRecord = IntegerIntegerIntegerIntegerRecord;

});
define("UBTConnectLibrary.model$IntegerIntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$IntegerIntegerIntegerIntegerRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerIntegerRecordList = (function (_super) {
__extends(IntegerIntegerIntegerIntegerRecordList, _super);
function IntegerIntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerIntegerRecordList.itemType = UBTConnectLibraryModel.IntegerIntegerIntegerIntegerRecord;
return IntegerIntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.IntegerIntegerIntegerIntegerRecordList = IntegerIntegerIntegerIntegerRecordList;

});
define("UBTConnectLibrary.model$UBT_ButtonTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ButtonTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ButtonTypeList = (function (_super) {
__extends(UBT_ButtonTypeList, _super);
function UBT_ButtonTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonTypeList.itemType = UBTConnectLibraryModel.UBT_ButtonTypeRec;
return UBT_ButtonTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ButtonTypeList = UBT_ButtonTypeList;

});
define("UBTConnectLibrary.model$LocalityContactOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LocalityContactOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LocalityContactOptionsRecord = (function (_super) {
__extends(LocalityContactOptionsRecord, _super);
function LocalityContactOptionsRecord(defaults) {
_super.apply(this, arguments);
}
LocalityContactOptionsRecord.attributesToDeclare = function () {
return [
this.attr("LocalityContactOptions", "localityContactOptionsAttr", "LocalityContactOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LocalityContactOptionsRec());
}, true, UBTConnectLibraryModel.LocalityContactOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalityContactOptionsRecord.fromStructure = function (str) {
return new LocalityContactOptionsRecord(new LocalityContactOptionsRecord.RecordClass({
localityContactOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalityContactOptionsRecord._isAnonymousRecord = true;
LocalityContactOptionsRecord.UniqueId = "69c42022-5632-c1f7-2139-cb088245efb1";
LocalityContactOptionsRecord.init();
return LocalityContactOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LocalityContactOptionsRecord = LocalityContactOptionsRecord;

});
define("UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionsMenuEnableOptionsRec = (function (_super) {
__extends(ActionsMenuEnableOptionsRec, _super);
function ActionsMenuEnableOptionsRec(defaults) {
_super.apply(this, arguments);
}
ActionsMenuEnableOptionsRec.attributesToDeclare = function () {
return [
this.attr("EnableBookmark", "enableBookmarkAttr", "EnableBookmark", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EnableNotes", "enableNotesAttr", "EnableNotes", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EnableGift", "enableGiftAttr", "EnableGift", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EnableShare", "enableShareAttr", "EnableShare", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EnableCall", "enableCallAttr", "EnableCall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EnableEmail", "enableEmailAttr", "EnableEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EnableViewDetails", "enableViewDetailsAttr", "EnableViewDetails", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActionsMenuEnableOptionsRec.init();
return ActionsMenuEnableOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ActionsMenuEnableOptionsRec = ActionsMenuEnableOptionsRec;

});
define("UBTConnectLibrary.model$ActionsMenuEnableOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionsMenuEnableOptionsList = (function (_super) {
__extends(ActionsMenuEnableOptionsList, _super);
function ActionsMenuEnableOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuEnableOptionsList.itemType = UBTConnectLibraryModel.ActionsMenuEnableOptionsRec;
return ActionsMenuEnableOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ActionsMenuEnableOptionsList = ActionsMenuEnableOptionsList;

});
define("UBTConnectLibrary.model$Type_NotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_NotificationRec = (function (_super) {
__extends(Type_NotificationRec, _super);
function Type_NotificationRec(defaults) {
_super.apply(this, arguments);
}
Type_NotificationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("StaticText", "staticTextAttr", "StaticText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_NotificationRec.init();
return Type_NotificationRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_NotificationRec = Type_NotificationRec;

});
define("UBTConnectLibrary.model$Type_NotificationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_NotificationRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_NotificationRecord = (function (_super) {
__extends(Type_NotificationRecord, _super);
function Type_NotificationRecord(defaults) {
_super.apply(this, arguments);
}
Type_NotificationRecord.attributesToDeclare = function () {
return [
this.attr("Type_Notification", "type_NotificationAttr", "Type_Notification", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Type_NotificationRec());
}, true, UBTConnectLibraryModel.Type_NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_NotificationRecord.fromStructure = function (str) {
return new Type_NotificationRecord(new Type_NotificationRecord.RecordClass({
type_NotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_NotificationRecord._isAnonymousRecord = true;
Type_NotificationRecord.UniqueId = "d0348da8-99bc-2421-eeb1-5591f562b459";
Type_NotificationRecord.init();
return Type_NotificationRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_NotificationRecord = Type_NotificationRecord;

});
define("UBTConnectLibrary.model$Type_NotificationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_NotificationRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_NotificationRecordList = (function (_super) {
__extends(Type_NotificationRecordList, _super);
function Type_NotificationRecordList(defaults) {
_super.apply(this, arguments);
}
Type_NotificationRecordList.itemType = UBTConnectLibraryModel.Type_NotificationRecord;
return Type_NotificationRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_NotificationRecordList = Type_NotificationRecordList;

});
define("UBTConnectLibrary.model$UBT_VisibilityRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_VisibilityRec = (function (_super) {
__extends(UBT_VisibilityRec, _super);
function UBT_VisibilityRec(defaults) {
_super.apply(this, arguments);
}
UBT_VisibilityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_VisibilityRec.init();
return UBT_VisibilityRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_VisibilityRec = UBT_VisibilityRec;

});
define("UBTConnectLibrary.model$UBT_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_VisibilityRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_VisibilityList = (function (_super) {
__extends(UBT_VisibilityList, _super);
function UBT_VisibilityList(defaults) {
_super.apply(this, arguments);
}
UBT_VisibilityList.itemType = UBTConnectLibraryModel.UBT_VisibilityRec;
return UBT_VisibilityList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_VisibilityList = UBT_VisibilityList;

});
define("UBTConnectLibrary.model$ActionsMenuOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsRec = (function (_super) {
__extends(ActionsMenuOptionsRec, _super);
function ActionsMenuOptionsRec(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsRec.attributesToDeclare = function () {
return [
this.attr("HasBookmark", "hasBookmarkAttr", "HasBookmark", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasUnbookmark", "hasUnbookmarkAttr", "HasUnbookmark", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasNotes", "hasNotesAttr", "HasNotes", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasGift", "hasGiftAttr", "HasGift", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasShare", "hasShareAttr", "HasShare", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasCall", "hasCallAttr", "HasCall", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasEmail", "hasEmailAttr", "HasEmail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasViewDetails", "hasViewDetailsAttr", "HasViewDetails", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActionsMenuOptionsRec.init();
return ActionsMenuOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.ActionsMenuOptionsRec = ActionsMenuOptionsRec;

});
define("UBTConnectLibrary.model$ActionsMenuOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionsMenuOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ActionsMenuOptionsRecord = ActionsMenuOptionsRecord;

});
define("UBTConnectLibrary.model$BreakColumnsRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$BreakColumnsRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.BreakColumnsRecord = BreakColumnsRecord;

});
define("UBTConnectLibrary.model$BackgroundOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.BackgroundOptionsRecord = BackgroundOptionsRecord;

});
define("UBTConnectLibrary.model$BackgroundOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BackgroundOptionsRecordList = (function (_super) {
__extends(BackgroundOptionsRecordList, _super);
function BackgroundOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
BackgroundOptionsRecordList.itemType = UBTConnectLibraryModel.BackgroundOptionsRecord;
return BackgroundOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BackgroundOptionsRecordList = BackgroundOptionsRecordList;

});
define("UBTConnectLibrary.model$WeekdayLabelTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$WeekdayLabelTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var WeekdayLabelTypeRecord = (function (_super) {
__extends(WeekdayLabelTypeRecord, _super);
function WeekdayLabelTypeRecord(defaults) {
_super.apply(this, arguments);
}
WeekdayLabelTypeRecord.attributesToDeclare = function () {
return [
this.attr("WeekdayLabelType", "weekdayLabelTypeAttr", "WeekdayLabelType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.WeekdayLabelTypeRec());
}, true, UBTConnectLibraryModel.WeekdayLabelTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
WeekdayLabelTypeRecord.fromStructure = function (str) {
return new WeekdayLabelTypeRecord(new WeekdayLabelTypeRecord.RecordClass({
weekdayLabelTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WeekdayLabelTypeRecord._isAnonymousRecord = true;
WeekdayLabelTypeRecord.UniqueId = "7621cfec-610e-0288-9069-98396b9c1518";
WeekdayLabelTypeRecord.init();
return WeekdayLabelTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.WeekdayLabelTypeRecord = WeekdayLabelTypeRecord;

});
define("UBTConnectLibrary.model$UBT_VerticalAlignRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_VerticalAlignRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignRecordList = (function (_super) {
__extends(UBT_VerticalAlignRecordList, _super);
function UBT_VerticalAlignRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignRecordList.itemType = UBTConnectLibraryModel.UBT_VerticalAlignRecord;
return UBT_VerticalAlignRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_VerticalAlignRecordList = UBT_VerticalAlignRecordList;

});
define("UBTConnectLibrary.model$HouseholdDetailTagsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$HouseholdDetailTagsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdDetailTagsList = (function (_super) {
__extends(HouseholdDetailTagsList, _super);
function HouseholdDetailTagsList(defaults) {
_super.apply(this, arguments);
}
HouseholdDetailTagsList.itemType = UBTConnectLibraryModel.HouseholdDetailTagsRec;
return HouseholdDetailTagsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.HouseholdDetailTagsList = HouseholdDetailTagsList;

});
define("UBTConnectLibrary.model$TextOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextOptionsList = (function (_super) {
__extends(TextOptionsList, _super);
function TextOptionsList(defaults) {
_super.apply(this, arguments);
}
TextOptionsList.itemType = UBTConnectLibraryModel.TextOptionsRec;
return TextOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TextOptionsList = TextOptionsList;

});
define("UBTConnectLibrary.model$BackgroundImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.BackgroundImageRecord = BackgroundImageRecord;

});
define("UBTConnectLibrary.model$IntegerIntegerIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var IntegerIntegerIntegerRecordList = (function (_super) {
__extends(IntegerIntegerIntegerRecordList, _super);
function IntegerIntegerIntegerRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerIntegerIntegerRecordList.itemType = UBTConnectLibraryModel.IntegerIntegerIntegerRecord;
return IntegerIntegerIntegerRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.IntegerIntegerIntegerRecordList = IntegerIntegerIntegerRecordList;

});
define("UBTConnectLibrary.model$SignedURLRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SignedURLRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SignedURLRecordList = (function (_super) {
__extends(SignedURLRecordList, _super);
function SignedURLRecordList(defaults) {
_super.apply(this, arguments);
}
SignedURLRecordList.itemType = UBTConnectLibraryModel.SignedURLRecord;
return SignedURLRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SignedURLRecordList = SignedURLRecordList;

});
define("UBTConnectLibrary.model$UBT_FontWeightRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FontWeightRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_FontWeightRecord = UBT_FontWeightRecord;

});
define("UBTConnectLibrary.model$UBT_FontWeightRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FontWeightRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FontWeightRecordList = (function (_super) {
__extends(UBT_FontWeightRecordList, _super);
function UBT_FontWeightRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FontWeightRecordList.itemType = UBTConnectLibraryModel.UBT_FontWeightRecord;
return UBT_FontWeightRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FontWeightRecordList = UBT_FontWeightRecordList;

});
define("UBTConnectLibrary.model$TagRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TagRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TagRecord = (function (_super) {
__extends(TagRecord, _super);
function TagRecord(defaults) {
_super.apply(this, arguments);
}
TagRecord.attributesToDeclare = function () {
return [
this.attr("Tag", "tagAttr", "Tag", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TagRec());
}, true, UBTConnectLibraryModel.TagRec)
].concat(_super.attributesToDeclare.call(this));
};
TagRecord.fromStructure = function (str) {
return new TagRecord(new TagRecord.RecordClass({
tagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TagRecord._isAnonymousRecord = true;
TagRecord.UniqueId = "b8d0836c-c561-5232-6e03-6319abff8ea2";
TagRecord.init();
return TagRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.TagRecord = TagRecord;

});
define("UBTConnectLibrary.model$TagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TagRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TagRecordList = (function (_super) {
__extends(TagRecordList, _super);
function TagRecordList(defaults) {
_super.apply(this, arguments);
}
TagRecordList.itemType = UBTConnectLibraryModel.TagRecord;
return TagRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TagRecordList = TagRecordList;

});
define("UBTConnectLibrary.model$TextOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.TextOptionsRecord = TextOptionsRecord;

});
define("UBTConnectLibrary.model$TextOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextOptionsRecordList = (function (_super) {
__extends(TextOptionsRecordList, _super);
function TextOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
TextOptionsRecordList.itemType = UBTConnectLibraryModel.TextOptionsRecord;
return TextOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TextOptionsRecordList = TextOptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_AlignItemsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_AlignItemsRec = (function (_super) {
__extends(UBT_AlignItemsRec, _super);
function UBT_AlignItemsRec(defaults) {
_super.apply(this, arguments);
}
UBT_AlignItemsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_AlignItemsRec.init();
return UBT_AlignItemsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_AlignItemsRec = UBT_AlignItemsRec;

});
define("UBTConnectLibrary.model$UBT_DisplayList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_DisplayRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_DisplayList = (function (_super) {
__extends(UBT_DisplayList, _super);
function UBT_DisplayList(defaults) {
_super.apply(this, arguments);
}
UBT_DisplayList.itemType = UBTConnectLibraryModel.UBT_DisplayRec;
return UBT_DisplayList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_DisplayList = UBT_DisplayList;

});
define("UBTConnectLibrary.model$ActionsMenuOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionsMenuOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsList = (function (_super) {
__extends(ActionsMenuOptionsList, _super);
function ActionsMenuOptionsList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsList.itemType = UBTConnectLibraryModel.ActionsMenuOptionsRec;
return ActionsMenuOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ActionsMenuOptionsList = ActionsMenuOptionsList;

});
define("UBTConnectLibrary.model$LazyImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LazyImageSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LazyImageSizeList = (function (_super) {
__extends(LazyImageSizeList, _super);
function LazyImageSizeList(defaults) {
_super.apply(this, arguments);
}
LazyImageSizeList.itemType = UBTConnectLibraryModel.LazyImageSizeRec;
return LazyImageSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LazyImageSizeList = LazyImageSizeList;

});
define("UBTConnectLibrary.model$BottomSheet_InternalConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BottomSheet_InternalConfigRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BottomSheet_InternalConfigRecordList = (function (_super) {
__extends(BottomSheet_InternalConfigRecordList, _super);
function BottomSheet_InternalConfigRecordList(defaults) {
_super.apply(this, arguments);
}
BottomSheet_InternalConfigRecordList.itemType = UBTConnectLibraryModel.BottomSheet_InternalConfigRecord;
return BottomSheet_InternalConfigRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BottomSheet_InternalConfigRecordList = BottomSheet_InternalConfigRecordList;

});
define("UBTConnectLibrary.model$LookupItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupItemList = (function (_super) {
__extends(LookupItemList, _super);
function LookupItemList(defaults) {
_super.apply(this, arguments);
}
LookupItemList.itemType = UBTConnectLibraryModel.LookupItemRec;
return LookupItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LookupItemList = LookupItemList;

});
define("UBTConnectLibrary.model$TextBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextBoolean1Record"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextBooleanRecordList = (function (_super) {
__extends(TextBooleanRecordList, _super);
function TextBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
TextBooleanRecordList.itemType = UBTConnectLibraryModel.TextBoolean1Record;
return TextBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TextBooleanRecordList = TextBooleanRecordList;

});
define("UBTConnectLibrary.model$SearchInputList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SearchInputRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SearchInputList = (function (_super) {
__extends(SearchInputList, _super);
function SearchInputList(defaults) {
_super.apply(this, arguments);
}
SearchInputList.itemType = UBTConnectLibraryModel.SearchInputRec;
return SearchInputList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SearchInputList = SearchInputList;

});
define("UBTConnectLibrary.model$RadiusOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$RadiusOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var RadiusOptionsList = (function (_super) {
__extends(RadiusOptionsList, _super);
function RadiusOptionsList(defaults) {
_super.apply(this, arguments);
}
RadiusOptionsList.itemType = UBTConnectLibraryModel.RadiusOptionsRec;
return RadiusOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.RadiusOptionsList = RadiusOptionsList;

});
define("UBTConnectLibrary.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord = TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;

});
define("UBTConnectLibrary.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList = (function (_super) {
__extends(TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList, _super);
function TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList(defaults) {
_super.apply(this, arguments);
}
TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList.itemType = UBTConnectLibraryModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecord;
return TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList = TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList;

});
define("UBTConnectLibrary.model$StatisticsOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var StatisticsOptionsRec = (function (_super) {
__extends(StatisticsOptionsRec, _super);
function StatisticsOptionsRec(defaults) {
_super.apply(this, arguments);
}
StatisticsOptionsRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subtitle", "subtitleAttr", "Subtitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AvatarURL", "avatarURLAttr", "AvatarURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Statistics", "statisticsAttr", "Statistics", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList());
}, true, UBTConnectLibraryModel.TextTextUBT_ColorIdentifierUBT_IconsIdentifierRecordList)
].concat(_super.attributesToDeclare.call(this));
};
StatisticsOptionsRec.init();
return StatisticsOptionsRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.StatisticsOptionsRec = StatisticsOptionsRec;

});
define("UBTConnectLibrary.model$StatisticsOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$StatisticsOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var StatisticsOptionsList = (function (_super) {
__extends(StatisticsOptionsList, _super);
function StatisticsOptionsList(defaults) {
_super.apply(this, arguments);
}
StatisticsOptionsList.itemType = UBTConnectLibraryModel.StatisticsOptionsRec;
return StatisticsOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.StatisticsOptionsList = StatisticsOptionsList;

});
define("UBTConnectLibrary.model$SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$SizeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.SizeRecord = SizeRecord;

});
define("UBTConnectLibrary.model$LookupItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupItemRecord = (function (_super) {
__extends(LookupItemRecord, _super);
function LookupItemRecord(defaults) {
_super.apply(this, arguments);
}
LookupItemRecord.attributesToDeclare = function () {
return [
this.attr("LookupItem", "lookupItemAttr", "LookupItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LookupItemRec());
}, true, UBTConnectLibraryModel.LookupItemRec)
].concat(_super.attributesToDeclare.call(this));
};
LookupItemRecord.fromStructure = function (str) {
return new LookupItemRecord(new LookupItemRecord.RecordClass({
lookupItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LookupItemRecord._isAnonymousRecord = true;
LookupItemRecord.UniqueId = "8d35e1ed-9535-41dc-15ed-39248856c536";
LookupItemRecord.init();
return LookupItemRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.LookupItemRecord = LookupItemRecord;

});
define("UBTConnectLibrary.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$ShapeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ShapeRecord = ShapeRecord;

});
define("UBTConnectLibrary.model$AvatarImageFallbackoptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsList = (function (_super) {
__extends(AvatarImageFallbackoptionsList, _super);
function AvatarImageFallbackoptionsList(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsList.itemType = UBTConnectLibraryModel.AvatarImageFallbackoptionsRec;
return AvatarImageFallbackoptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.AvatarImageFallbackoptionsList = AvatarImageFallbackoptionsList;

});
define("UBTConnectLibrary.model$BorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BorderOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BorderOptionsList = (function (_super) {
__extends(BorderOptionsList, _super);
function BorderOptionsList(defaults) {
_super.apply(this, arguments);
}
BorderOptionsList.itemType = UBTConnectLibraryModel.BorderOptionsRec;
return BorderOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BorderOptionsList = BorderOptionsList;

});
define("UBTConnectLibrary.model$StatisticsOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$StatisticsOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var StatisticsOptionsRecord = (function (_super) {
__extends(StatisticsOptionsRecord, _super);
function StatisticsOptionsRecord(defaults) {
_super.apply(this, arguments);
}
StatisticsOptionsRecord.attributesToDeclare = function () {
return [
this.attr("StatisticsOptions", "statisticsOptionsAttr", "StatisticsOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.StatisticsOptionsRec());
}, true, UBTConnectLibraryModel.StatisticsOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
StatisticsOptionsRecord.fromStructure = function (str) {
return new StatisticsOptionsRecord(new StatisticsOptionsRecord.RecordClass({
statisticsOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StatisticsOptionsRecord._isAnonymousRecord = true;
StatisticsOptionsRecord.UniqueId = "93a9bb41-d11a-4e4f-c5cb-67ac5c44489c";
StatisticsOptionsRecord.init();
return StatisticsOptionsRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.StatisticsOptionsRecord = StatisticsOptionsRecord;

});
define("UBTConnectLibrary.model$UBT_ImageCardTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ImageCardTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageCardTypeRecord = (function (_super) {
__extends(UBT_ImageCardTypeRecord, _super);
function UBT_ImageCardTypeRecord(defaults) {
_super.apply(this, arguments);
}
UBT_ImageCardTypeRecord.attributesToDeclare = function () {
return [
this.attr("UBT_ImageCardType", "uBT_ImageCardTypeAttr", "UBT_ImageCardType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ImageCardTypeRec());
}, true, UBTConnectLibraryModel.UBT_ImageCardTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
UBT_ImageCardTypeRecord.fromStructure = function (str) {
return new UBT_ImageCardTypeRecord(new UBT_ImageCardTypeRecord.RecordClass({
uBT_ImageCardTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UBT_ImageCardTypeRecord._isAnonymousRecord = true;
UBT_ImageCardTypeRecord.UniqueId = "a175b9e5-d753-063c-fd51-2a76ed0f1ca4";
UBT_ImageCardTypeRecord.init();
return UBT_ImageCardTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_ImageCardTypeRecord = UBT_ImageCardTypeRecord;

});
define("UBTConnectLibrary.model$UBT_ImageCardTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ImageCardTypeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ImageCardTypeRecordList = (function (_super) {
__extends(UBT_ImageCardTypeRecordList, _super);
function UBT_ImageCardTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ImageCardTypeRecordList.itemType = UBTConnectLibraryModel.UBT_ImageCardTypeRecord;
return UBT_ImageCardTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ImageCardTypeRecordList = UBT_ImageCardTypeRecordList;

});
define("UBTConnectLibrary.model$UBT_ShadowList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ShadowRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ShadowList = (function (_super) {
__extends(UBT_ShadowList, _super);
function UBT_ShadowList(defaults) {
_super.apply(this, arguments);
}
UBT_ShadowList.itemType = UBTConnectLibraryModel.UBT_ShadowRec;
return UBT_ShadowList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ShadowList = UBT_ShadowList;

});
define("UBTConnectLibrary.model$GenderList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model$GenderRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var GenderList = (function (_super) {
__extends(GenderList, _super);
function GenderList(defaults) {
_super.apply(this, arguments);
}
GenderList.itemType = Connect_CommonEntities_DBModel.GenderRec;
return GenderList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.GenderList = GenderList;

});
define("UBTConnectLibrary.model$LookupItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LookupItemRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LookupItemRecordList = (function (_super) {
__extends(LookupItemRecordList, _super);
function LookupItemRecordList(defaults) {
_super.apply(this, arguments);
}
LookupItemRecordList.itemType = UBTConnectLibraryModel.LookupItemRecord;
return LookupItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LookupItemRecordList = LookupItemRecordList;

});
define("UBTConnectLibrary.model$DateComponentFormatList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DateComponentFormatRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DateComponentFormatList = (function (_super) {
__extends(DateComponentFormatList, _super);
function DateComponentFormatList(defaults) {
_super.apply(this, arguments);
}
DateComponentFormatList.itemType = UBTConnectLibraryModel.DateComponentFormatRec;
return DateComponentFormatList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.DateComponentFormatList = DateComponentFormatList;

});
define("UBTConnectLibrary.model$DisplayOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DisplayOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DisplayOptionsList = (function (_super) {
__extends(DisplayOptionsList, _super);
function DisplayOptionsList(defaults) {
_super.apply(this, arguments);
}
DisplayOptionsList.itemType = UBTConnectLibraryModel.DisplayOptionsRec;
return DisplayOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.DisplayOptionsList = DisplayOptionsList;

});
define("UBTConnectLibrary.model$UBT_SizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_SizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_SizeList = (function (_super) {
__extends(UBT_SizeList, _super);
function UBT_SizeList(defaults) {
_super.apply(this, arguments);
}
UBT_SizeList.itemType = UBTConnectLibraryModel.UBT_SizeRec;
return UBT_SizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_SizeList = UBT_SizeList;

});
define("UBTConnectLibrary.model$ContainerOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContainerOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ContainerOptionsRecord = ContainerOptionsRecord;

});
define("UBTConnectLibrary.model$ContainerOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContainerOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContainerOptionsRecordList = (function (_super) {
__extends(ContainerOptionsRecordList, _super);
function ContainerOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsRecordList.itemType = UBTConnectLibraryModel.ContainerOptionsRecord;
return ContainerOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ContainerOptionsRecordList = ContainerOptionsRecordList;

});
define("UBTConnectLibrary.model$ColumnOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColumnOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColumnOptionsRecordList = (function (_super) {
__extends(ColumnOptionsRecordList, _super);
function ColumnOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsRecordList.itemType = UBTConnectLibraryModel.ColumnOptionsRecord;
return ColumnOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ColumnOptionsRecordList = ColumnOptionsRecordList;

});
define("UBTConnectLibrary.model$AvatarImageFallbackoptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarImageFallbackoptionsRecordList = (function (_super) {
__extends(AvatarImageFallbackoptionsRecordList, _super);
function AvatarImageFallbackoptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarImageFallbackoptionsRecordList.itemType = UBTConnectLibraryModel.AvatarImageFallbackoptionsRecord;
return AvatarImageFallbackoptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.AvatarImageFallbackoptionsRecordList = AvatarImageFallbackoptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_FontSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FontSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_FontSizeRecord = UBT_FontSizeRecord;

});
define("UBTConnectLibrary.model$SelectionOption_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SelectionOption_ItemRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SelectionOption_ItemList = (function (_super) {
__extends(SelectionOption_ItemList, _super);
function SelectionOption_ItemList(defaults) {
_super.apply(this, arguments);
}
SelectionOption_ItemList.itemType = UBTConnectLibraryModel.SelectionOption_ItemRec;
return SelectionOption_ItemList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SelectionOption_ItemList = SelectionOption_ItemList;

});
define("UBTConnectLibrary.model$ContextMenuOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContextMenuOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContextMenuOptionsRecordList = (function (_super) {
__extends(ContextMenuOptionsRecordList, _super);
function ContextMenuOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ContextMenuOptionsRecordList.itemType = UBTConnectLibraryModel.ContextMenuOptionsRecord;
return ContextMenuOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ContextMenuOptionsRecordList = ContextMenuOptionsRecordList;

});
define("UBTConnectLibrary.model$LocalityContactOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$LocalityContactOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var LocalityContactOptionsRecordList = (function (_super) {
__extends(LocalityContactOptionsRecordList, _super);
function LocalityContactOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
LocalityContactOptionsRecordList.itemType = UBTConnectLibraryModel.LocalityContactOptionsRecord;
return LocalityContactOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.LocalityContactOptionsRecordList = LocalityContactOptionsRecordList;

});
define("UBTConnectLibrary.model$AvatarIconOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarIconOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsList = (function (_super) {
__extends(AvatarIconOptionsList, _super);
function AvatarIconOptionsList(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsList.itemType = UBTConnectLibraryModel.AvatarIconOptionsRec;
return AvatarIconOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.AvatarIconOptionsList = AvatarIconOptionsList;

});
define("UBTConnectLibrary.model$AvatarImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarImageList = (function (_super) {
__extends(AvatarImageList, _super);
function AvatarImageList(defaults) {
_super.apply(this, arguments);
}
AvatarImageList.itemType = UBTConnectLibraryModel.AvatarImageRec;
return AvatarImageList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.AvatarImageList = AvatarImageList;

});
define("UBTConnectLibrary.model$ContactOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContactOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContactOptionsList = (function (_super) {
__extends(ContactOptionsList, _super);
function ContactOptionsList(defaults) {
_super.apply(this, arguments);
}
ContactOptionsList.itemType = UBTConnectLibraryModel.ContactOptionsRec;
return ContactOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ContactOptionsList = ContactOptionsList;

});
define("UBTConnectLibrary.model$CalendarViewList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$CalendarViewRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CalendarViewList = (function (_super) {
__extends(CalendarViewList, _super);
function CalendarViewList(defaults) {
_super.apply(this, arguments);
}
CalendarViewList.itemType = UBTConnectLibraryModel.CalendarViewRec;
return CalendarViewList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.CalendarViewList = CalendarViewList;

});
define("UBTConnectLibrary.model$AvatarIconOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarIconOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.AvatarIconOptionsRecord = AvatarIconOptionsRecord;

});
define("UBTConnectLibrary.model$AvatarIconOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarIconOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarIconOptionsRecordList = (function (_super) {
__extends(AvatarIconOptionsRecordList, _super);
function AvatarIconOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarIconOptionsRecordList.itemType = UBTConnectLibraryModel.AvatarIconOptionsRecord;
return AvatarIconOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.AvatarIconOptionsRecordList = AvatarIconOptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_ColumnWidthList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColumnWidthRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnWidthList = (function (_super) {
__extends(UBT_ColumnWidthList, _super);
function UBT_ColumnWidthList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnWidthList.itemType = UBTConnectLibraryModel.UBT_ColumnWidthRec;
return UBT_ColumnWidthList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ColumnWidthList = UBT_ColumnWidthList;

});
define("UBTConnectLibrary.model$ActionsMenuEnableOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ActionsMenuEnableOptionsRecord = ActionsMenuEnableOptionsRecord;

});
define("UBTConnectLibrary.model$ActionsMenuEnableOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionsMenuEnableOptionsRecordList = (function (_super) {
__extends(ActionsMenuEnableOptionsRecordList, _super);
function ActionsMenuEnableOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuEnableOptionsRecordList.itemType = UBTConnectLibraryModel.ActionsMenuEnableOptionsRecord;
return ActionsMenuEnableOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ActionsMenuEnableOptionsRecordList = ActionsMenuEnableOptionsRecordList;

});
define("UBTConnectLibrary.model$SelectionOption_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SelectionOption_ItemRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SelectionOption_ItemRecordList = (function (_super) {
__extends(SelectionOption_ItemRecordList, _super);
function SelectionOption_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
SelectionOption_ItemRecordList.itemType = UBTConnectLibraryModel.SelectionOption_ItemRecord;
return SelectionOption_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SelectionOption_ItemRecordList = SelectionOption_ItemRecordList;

});
define("UBTConnectLibrary.model$BreakColumnsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BreakColumnsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BreakColumnsRecordList = (function (_super) {
__extends(BreakColumnsRecordList, _super);
function BreakColumnsRecordList(defaults) {
_super.apply(this, arguments);
}
BreakColumnsRecordList.itemType = UBTConnectLibraryModel.BreakColumnsRecord;
return BreakColumnsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BreakColumnsRecordList = BreakColumnsRecordList;

});
define("UBTConnectLibrary.model$Type_ImageResolutionRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageResolutionRec = (function (_super) {
__extends(Type_ImageResolutionRec, _super);
function Type_ImageResolutionRec(defaults) {
_super.apply(this, arguments);
}
Type_ImageResolutionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Resolution", "resolutionAttr", "Resolution", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_ImageResolutionRec.init();
return Type_ImageResolutionRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_ImageResolutionRec = Type_ImageResolutionRec;

});
define("UBTConnectLibrary.model$Type_ImageResolutionList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_ImageResolutionRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageResolutionList = (function (_super) {
__extends(Type_ImageResolutionList, _super);
function Type_ImageResolutionList(defaults) {
_super.apply(this, arguments);
}
Type_ImageResolutionList.itemType = UBTConnectLibraryModel.Type_ImageResolutionRec;
return Type_ImageResolutionList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_ImageResolutionList = Type_ImageResolutionList;

});
define("UBTConnectLibrary.model$SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SizeRecordList = (function (_super) {
__extends(SizeRecordList, _super);
function SizeRecordList(defaults) {
_super.apply(this, arguments);
}
SizeRecordList.itemType = UBTConnectLibraryModel.SizeRecord;
return SizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SizeRecordList = SizeRecordList;

});
define("UBTConnectLibrary.model$ColumnOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColumnOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColumnOptionsList = (function (_super) {
__extends(ColumnOptionsList, _super);
function ColumnOptionsList(defaults) {
_super.apply(this, arguments);
}
ColumnOptionsList.itemType = UBTConnectLibraryModel.ColumnOptionsRec;
return ColumnOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ColumnOptionsList = ColumnOptionsList;

});
define("UBTConnectLibrary.model$ActionsMenuOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ActionsMenuOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ActionsMenuOptionsRecordList = (function (_super) {
__extends(ActionsMenuOptionsRecordList, _super);
function ActionsMenuOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ActionsMenuOptionsRecordList.itemType = UBTConnectLibraryModel.ActionsMenuOptionsRecord;
return ActionsMenuOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ActionsMenuOptionsRecordList = ActionsMenuOptionsRecordList;

});
define("UBTConnectLibrary.model$GenderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$GenderRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var GenderRecordList = (function (_super) {
__extends(GenderRecordList, _super);
function GenderRecordList(defaults) {
_super.apply(this, arguments);
}
GenderRecordList.itemType = UBTConnectLibraryModel.GenderRecord;
return GenderRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.GenderRecordList = GenderRecordList;

});
define("UBTConnectLibrary.model$HouseholdMemberTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$HouseholdMemberTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdMemberTypeRecord = (function (_super) {
__extends(HouseholdMemberTypeRecord, _super);
function HouseholdMemberTypeRecord(defaults) {
_super.apply(this, arguments);
}
HouseholdMemberTypeRecord.attributesToDeclare = function () {
return [
this.attr("HouseholdMemberType", "householdMemberTypeAttr", "HouseholdMemberType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.HouseholdMemberTypeRec());
}, true, UBTConnectLibraryModel.HouseholdMemberTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
HouseholdMemberTypeRecord.fromStructure = function (str) {
return new HouseholdMemberTypeRecord(new HouseholdMemberTypeRecord.RecordClass({
householdMemberTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HouseholdMemberTypeRecord._isAnonymousRecord = true;
HouseholdMemberTypeRecord.UniqueId = "b3601e1e-c450-a8da-5bd7-e0e6b1db1f9e";
HouseholdMemberTypeRecord.init();
return HouseholdMemberTypeRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.HouseholdMemberTypeRecord = HouseholdMemberTypeRecord;

});
define("UBTConnectLibrary.model$Type_NotificationList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_NotificationRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_NotificationList = (function (_super) {
__extends(Type_NotificationList, _super);
function Type_NotificationList(defaults) {
_super.apply(this, arguments);
}
Type_NotificationList.itemType = UBTConnectLibraryModel.Type_NotificationRec;
return Type_NotificationList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_NotificationList = Type_NotificationList;

});
define("UBTConnectLibrary.model$ButtonOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ButtonOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ButtonOptionsList = (function (_super) {
__extends(ButtonOptionsList, _super);
function ButtonOptionsList(defaults) {
_super.apply(this, arguments);
}
ButtonOptionsList.itemType = UBTConnectLibraryModel.ButtonOptionsRec;
return ButtonOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ButtonOptionsList = ButtonOptionsList;

});
define("UBTConnectLibrary.model$WeekdayLabelTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$WeekdayLabelTypeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var WeekdayLabelTypeRecordList = (function (_super) {
__extends(WeekdayLabelTypeRecordList, _super);
function WeekdayLabelTypeRecordList(defaults) {
_super.apply(this, arguments);
}
WeekdayLabelTypeRecordList.itemType = UBTConnectLibraryModel.WeekdayLabelTypeRecord;
return WeekdayLabelTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.WeekdayLabelTypeRecordList = WeekdayLabelTypeRecordList;

});
define("UBTConnectLibrary.model$AvatarImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.AvatarImageRecord = AvatarImageRecord;

});
define("UBTConnectLibrary.model$AvatarImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$AvatarImageRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var AvatarImageRecordList = (function (_super) {
__extends(AvatarImageRecordList, _super);
function AvatarImageRecordList(defaults) {
_super.apply(this, arguments);
}
AvatarImageRecordList.itemType = UBTConnectLibraryModel.AvatarImageRecord;
return AvatarImageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.AvatarImageRecordList = AvatarImageRecordList;

});
define("UBTConnectLibrary.model$ContainerOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContainerOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ContainerOptionsList = (function (_super) {
__extends(ContainerOptionsList, _super);
function ContainerOptionsList(defaults) {
_super.apply(this, arguments);
}
ContainerOptionsList.itemType = UBTConnectLibraryModel.ContainerOptionsRec;
return ContainerOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ContainerOptionsList = ContainerOptionsList;

});
define("UBTConnectLibrary.model$Type_ImageResolutionRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_ImageResolutionRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageResolutionRecord = (function (_super) {
__extends(Type_ImageResolutionRecord, _super);
function Type_ImageResolutionRecord(defaults) {
_super.apply(this, arguments);
}
Type_ImageResolutionRecord.attributesToDeclare = function () {
return [
this.attr("Type_ImageResolution", "type_ImageResolutionAttr", "Type_ImageResolution", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Type_ImageResolutionRec());
}, true, UBTConnectLibraryModel.Type_ImageResolutionRec)
].concat(_super.attributesToDeclare.call(this));
};
Type_ImageResolutionRecord.fromStructure = function (str) {
return new Type_ImageResolutionRecord(new Type_ImageResolutionRecord.RecordClass({
type_ImageResolutionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Type_ImageResolutionRecord._isAnonymousRecord = true;
Type_ImageResolutionRecord.UniqueId = "fd7b8eb6-cea0-a0dd-8aab-7e1d78e15c56";
Type_ImageResolutionRecord.init();
return Type_ImageResolutionRecord;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.Type_ImageResolutionRecord = Type_ImageResolutionRecord;

});
define("UBTConnectLibrary.model$Type_ImageResolutionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_ImageResolutionRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageResolutionRecordList = (function (_super) {
__extends(Type_ImageResolutionRecordList, _super);
function Type_ImageResolutionRecordList(defaults) {
_super.apply(this, arguments);
}
Type_ImageResolutionRecordList.itemType = UBTConnectLibraryModel.Type_ImageResolutionRecord;
return Type_ImageResolutionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_ImageResolutionRecordList = Type_ImageResolutionRecordList;

});
define("UBTConnectLibrary.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$ColorRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ColorRecord = ColorRecord;

});
define("UBTConnectLibrary.model$UBT_FontSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FontSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FontSizeRecordList = (function (_super) {
__extends(UBT_FontSizeRecordList, _super);
function UBT_FontSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_FontSizeRecordList.itemType = UBTConnectLibraryModel.UBT_FontSizeRecord;
return UBT_FontSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FontSizeRecordList = UBT_FontSizeRecordList;

});
define("UBTConnectLibrary.model$Type_ImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_ImageRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_ImageList = (function (_super) {
__extends(Type_ImageList, _super);
function Type_ImageList(defaults) {
_super.apply(this, arguments);
}
Type_ImageList.itemType = UBTConnectLibraryModel.Type_ImageRec;
return Type_ImageList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_ImageList = Type_ImageList;

});
define("UBTConnectLibrary.model$InlineIconList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$InlineIconRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var InlineIconList = (function (_super) {
__extends(InlineIconList, _super);
function InlineIconList(defaults) {
_super.apply(this, arguments);
}
InlineIconList.itemType = UBTConnectLibraryModel.InlineIconRec;
return InlineIconList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.InlineIconList = InlineIconList;

});
define("UBTConnectLibrary.model$BackgroundImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$BackgroundImageRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var BackgroundImageRecordList = (function (_super) {
__extends(BackgroundImageRecordList, _super);
function BackgroundImageRecordList(defaults) {
_super.apply(this, arguments);
}
BackgroundImageRecordList.itemType = UBTConnectLibraryModel.BackgroundImageRecord;
return BackgroundImageRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.BackgroundImageRecordList = BackgroundImageRecordList;

});
define("UBTConnectLibrary.model$Note_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Note_ItemRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Note_ItemRecordList = (function (_super) {
__extends(Note_ItemRecordList, _super);
function Note_ItemRecordList(defaults) {
_super.apply(this, arguments);
}
Note_ItemRecordList.itemType = UBTConnectLibraryModel.Note_ItemRecord;
return Note_ItemRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Note_ItemRecordList = Note_ItemRecordList;

});
define("UBTConnectLibrary.model$UBT_IconsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_IconsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_IconsRecordList = (function (_super) {
__extends(UBT_IconsRecordList, _super);
function UBT_IconsRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_IconsRecordList.itemType = UBTConnectLibraryModel.UBT_IconsRecord;
return UBT_IconsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_IconsRecordList = UBT_IconsRecordList;

});
define("UBTConnectLibrary.model$SizeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$SizeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SizeList = (function (_super) {
__extends(SizeList, _super);
function SizeList(defaults) {
_super.apply(this, arguments);
}
SizeList.itemType = OutSystemsUI_2_23Model.SizeRec;
return SizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SizeList = SizeList;

});
define("UBTConnectLibrary.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ShapeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ShapeRecordList = (function (_super) {
__extends(ShapeRecordList, _super);
function ShapeRecordList(defaults) {
_super.apply(this, arguments);
}
ShapeRecordList.itemType = UBTConnectLibraryModel.ShapeRecord;
return ShapeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ShapeRecordList = ShapeRecordList;

});
define("UBTConnectLibrary.model$UBT_JustifyContentList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_JustifyContentRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_JustifyContentList = (function (_super) {
__extends(UBT_JustifyContentList, _super);
function UBT_JustifyContentList(defaults) {
_super.apply(this, arguments);
}
UBT_JustifyContentList.itemType = UBTConnectLibraryModel.UBT_JustifyContentRec;
return UBT_JustifyContentList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_JustifyContentList = UBT_JustifyContentList;

});
define("UBTConnectLibrary.model$UBT_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_VisibilityRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_VisibilityRecord = UBT_VisibilityRecord;

});
define("UBTConnectLibrary.model$UBT_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_VisibilityRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_VisibilityRecordList = (function (_super) {
__extends(UBT_VisibilityRecordList, _super);
function UBT_VisibilityRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_VisibilityRecordList.itemType = UBTConnectLibraryModel.UBT_VisibilityRecord;
return UBT_VisibilityRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_VisibilityRecordList = UBT_VisibilityRecordList;

});
define("UBTConnectLibrary.model$SizeOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SizeOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.SizeOptionsRecord = SizeOptionsRecord;

});
define("UBTConnectLibrary.model$UBT_IconSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_IconSizeRec = (function (_super) {
__extends(UBT_IconSizeRec, _super);
function UBT_IconSizeRec(defaults) {
_super.apply(this, arguments);
}
UBT_IconSizeRec.attributesToDeclare = function () {
return [
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UBT_IconSizeRec.init();
return UBT_IconSizeRec;
})(OS.DataTypes.GenericRecord);
UBTConnectLibraryModel.UBT_IconSizeRec = UBT_IconSizeRec;

});
define("UBTConnectLibrary.model$UBT_MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_MessageTypeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeRecordList = (function (_super) {
__extends(UBT_MessageTypeRecordList, _super);
function UBT_MessageTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeRecordList.itemType = UBTConnectLibraryModel.UBT_MessageTypeRecord;
return UBT_MessageTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_MessageTypeRecordList = UBT_MessageTypeRecordList;

});
define("UBTConnectLibrary.model$Connect_UpdateTypeIdRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Connect_UpdateTypeIdRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Connect_UpdateTypeIdRecordList = (function (_super) {
__extends(Connect_UpdateTypeIdRecordList, _super);
function Connect_UpdateTypeIdRecordList(defaults) {
_super.apply(this, arguments);
}
Connect_UpdateTypeIdRecordList.itemType = UBTConnectLibraryModel.Connect_UpdateTypeIdRecord;
return Connect_UpdateTypeIdRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Connect_UpdateTypeIdRecordList = Connect_UpdateTypeIdRecordList;

});
define("UBTConnectLibrary.model$UBT_AlignItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_AlignItemsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_AlignItemsRecord = UBT_AlignItemsRecord;

});
define("UBTConnectLibrary.model$UBT_AlignItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_AlignItemsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_AlignItemsRecordList = (function (_super) {
__extends(UBT_AlignItemsRecordList, _super);
function UBT_AlignItemsRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_AlignItemsRecordList.itemType = UBTConnectLibraryModel.UBT_AlignItemsRecord;
return UBT_AlignItemsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_AlignItemsRecordList = UBT_AlignItemsRecordList;

});
define("UBTConnectLibrary.model$ColorOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColorOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColorOptionsList = (function (_super) {
__extends(ColorOptionsList, _super);
function ColorOptionsList(defaults) {
_super.apply(this, arguments);
}
ColorOptionsList.itemType = UBTConnectLibraryModel.ColorOptionsRec;
return ColorOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ColorOptionsList = ColorOptionsList;

});
define("UBTConnectLibrary.model$NotesRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$NotesRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.NotesRecord = NotesRecord;

});
define("UBTConnectLibrary.model$Type_MessageChannelRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_MessageChannelRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.Type_MessageChannelRecord = Type_MessageChannelRecord;

});
define("UBTConnectLibrary.model$UBT_AvatarSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_AvatarSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_AvatarSizeList = (function (_super) {
__extends(UBT_AvatarSizeList, _super);
function UBT_AvatarSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_AvatarSizeList.itemType = UBTConnectLibraryModel.UBT_AvatarSizeRec;
return UBT_AvatarSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_AvatarSizeList = UBT_AvatarSizeList;

});
define("UBTConnectLibrary.model$UBT_AlignItemsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_AlignItemsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_AlignItemsList = (function (_super) {
__extends(UBT_AlignItemsList, _super);
function UBT_AlignItemsList(defaults) {
_super.apply(this, arguments);
}
UBT_AlignItemsList.itemType = UBTConnectLibraryModel.UBT_AlignItemsRec;
return UBT_AlignItemsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_AlignItemsList = UBT_AlignItemsList;

});
define("UBTConnectLibrary.model$ButtonOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ButtonOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.ButtonOptionsRecord = ButtonOptionsRecord;

});
define("UBTConnectLibrary.model$ButtonOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ButtonOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ButtonOptionsRecordList = (function (_super) {
__extends(ButtonOptionsRecordList, _super);
function ButtonOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
ButtonOptionsRecordList.itemType = UBTConnectLibraryModel.ButtonOptionsRecord;
return ButtonOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ButtonOptionsRecordList = ButtonOptionsRecordList;

});
define("UBTConnectLibrary.model$UBT_Size_ImageWidthRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_Size_ImageWidthRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_Size_ImageWidthRecordList = (function (_super) {
__extends(UBT_Size_ImageWidthRecordList, _super);
function UBT_Size_ImageWidthRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_Size_ImageWidthRecordList.itemType = UBTConnectLibraryModel.UBT_Size_ImageWidthRecord;
return UBT_Size_ImageWidthRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_Size_ImageWidthRecordList = UBT_Size_ImageWidthRecordList;

});
define("UBTConnectLibrary.model$UBT_FlexDirectionList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_FlexDirectionRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_FlexDirectionList = (function (_super) {
__extends(UBT_FlexDirectionList, _super);
function UBT_FlexDirectionList(defaults) {
_super.apply(this, arguments);
}
UBT_FlexDirectionList.itemType = UBTConnectLibraryModel.UBT_FlexDirectionRec;
return UBT_FlexDirectionList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_FlexDirectionList = UBT_FlexDirectionList;

});
define("UBTConnectLibrary.model$Type_MessageChannelRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$Type_MessageChannelRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Type_MessageChannelRecordList = (function (_super) {
__extends(Type_MessageChannelRecordList, _super);
function Type_MessageChannelRecordList(defaults) {
_super.apply(this, arguments);
}
Type_MessageChannelRecordList.itemType = UBTConnectLibraryModel.Type_MessageChannelRecord;
return Type_MessageChannelRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Type_MessageChannelRecordList = Type_MessageChannelRecordList;

});
define("UBTConnectLibrary.model$SizeOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SizeOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SizeOptionsRecordList = (function (_super) {
__extends(SizeOptionsRecordList, _super);
function SizeOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
SizeOptionsRecordList.itemType = UBTConnectLibraryModel.SizeOptionsRecord;
return SizeOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SizeOptionsRecordList = SizeOptionsRecordList;

});
define("UBTConnectLibrary.model$StatisticsOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$StatisticsOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var StatisticsOptionsRecordList = (function (_super) {
__extends(StatisticsOptionsRecordList, _super);
function StatisticsOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
StatisticsOptionsRecordList.itemType = UBTConnectLibraryModel.StatisticsOptionsRecord;
return StatisticsOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.StatisticsOptionsRecordList = StatisticsOptionsRecordList;

});
define("UBTConnectLibrary.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$PositionRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.PositionRecord = PositionRecord;

});
define("UBTConnectLibrary.model$SpacingOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SpacingOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.SpacingOptionsRecord = SpacingOptionsRecord;

});
define("UBTConnectLibrary.model$SpacingOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$SpacingOptionsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var SpacingOptionsRecordList = (function (_super) {
__extends(SpacingOptionsRecordList, _super);
function SpacingOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
SpacingOptionsRecordList.itemType = UBTConnectLibraryModel.SpacingOptionsRecord;
return SpacingOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.SpacingOptionsRecordList = SpacingOptionsRecordList;

});
define("UBTConnectLibrary.model$HouseholdMemberTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$HouseholdMemberTypeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdMemberTypeRecordList = (function (_super) {
__extends(HouseholdMemberTypeRecordList, _super);
function HouseholdMemberTypeRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdMemberTypeRecordList.itemType = UBTConnectLibraryModel.HouseholdMemberTypeRecord;
return HouseholdMemberTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.HouseholdMemberTypeRecordList = HouseholdMemberTypeRecordList;

});
define("UBTConnectLibrary.model$HouseholdDetailTagsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$HouseholdDetailTagsRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var HouseholdDetailTagsRecordList = (function (_super) {
__extends(HouseholdDetailTagsRecordList, _super);
function HouseholdDetailTagsRecordList(defaults) {
_super.apply(this, arguments);
}
HouseholdDetailTagsRecordList.itemType = UBTConnectLibraryModel.HouseholdDetailTagsRecord;
return HouseholdDetailTagsRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.HouseholdDetailTagsRecordList = HouseholdDetailTagsRecordList;

});
define("UBTConnectLibrary.model$GutterSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model$GutterSizeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, OutSystemsUI_2_23Model, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.GutterSizeRecord = GutterSizeRecord;

});
define("UBTConnectLibrary.model$ImageBorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ImageBorderOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ImageBorderOptionsList = (function (_super) {
__extends(ImageBorderOptionsList, _super);
function ImageBorderOptionsList(defaults) {
_super.apply(this, arguments);
}
ImageBorderOptionsList.itemType = UBTConnectLibraryModel.ImageBorderOptionsRec;
return ImageBorderOptionsList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ImageBorderOptionsList = ImageBorderOptionsList;

});
define("UBTConnectLibrary.model$UBT_IconSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_IconSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_IconSizeList = (function (_super) {
__extends(UBT_IconSizeList, _super);
function UBT_IconSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_IconSizeList.itemType = UBTConnectLibraryModel.UBT_IconSizeRec;
return UBT_IconSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_IconSizeList = UBT_IconSizeList;

});
define("UBTConnectLibrary.model$UBT_IconSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_IconSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
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
UBTConnectLibraryModel.UBT_IconSizeRecord = UBT_IconSizeRecord;

});
define("UBTConnectLibrary.model$UBT_IconSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_IconSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_IconSizeRecordList = (function (_super) {
__extends(UBT_IconSizeRecordList, _super);
function UBT_IconSizeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_IconSizeRecordList.itemType = UBTConnectLibraryModel.UBT_IconSizeRecord;
return UBT_IconSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_IconSizeRecordList = UBT_IconSizeRecordList;

});
define("UBTConnectLibrary.model$UBT_Size_ImageWidthList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_Size_ImageWidthRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_Size_ImageWidthList = (function (_super) {
__extends(UBT_Size_ImageWidthList, _super);
function UBT_Size_ImageWidthList(defaults) {
_super.apply(this, arguments);
}
UBT_Size_ImageWidthList.itemType = UBTConnectLibraryModel.UBT_Size_ImageWidthRec;
return UBT_Size_ImageWidthList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_Size_ImageWidthList = UBT_Size_ImageWidthList;

});
define("UBTConnectLibrary.model$TextBoolean1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$TextBooleanRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var TextBoolean1RecordList = (function (_super) {
__extends(TextBoolean1RecordList, _super);
function TextBoolean1RecordList(defaults) {
_super.apply(this, arguments);
}
TextBoolean1RecordList.itemType = UBTConnectLibraryModel.TextBooleanRecord;
return TextBoolean1RecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.TextBoolean1RecordList = TextBoolean1RecordList;

});
define("UBTConnectLibrary.model$UBT_ButtonTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ButtonTypeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ButtonTypeRecordList = (function (_super) {
__extends(UBT_ButtonTypeRecordList, _super);
function UBT_ButtonTypeRecordList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonTypeRecordList.itemType = UBTConnectLibraryModel.UBT_ButtonTypeRecord;
return UBT_ButtonTypeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ButtonTypeRecordList = UBT_ButtonTypeRecordList;

});
define("UBTConnectLibrary.model$CustomScrollListElementList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$CustomScrollListElementRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var CustomScrollListElementList = (function (_super) {
__extends(CustomScrollListElementList, _super);
function CustomScrollListElementList(defaults) {
_super.apply(this, arguments);
}
CustomScrollListElementList.itemType = UBTConnectLibraryModel.CustomScrollListElementRec;
return CustomScrollListElementList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.CustomScrollListElementList = CustomScrollListElementList;

});
define("UBTConnectLibrary.model$UBT_VerticalAlignList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_VerticalAlignRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_VerticalAlignList = (function (_super) {
__extends(UBT_VerticalAlignList, _super);
function UBT_VerticalAlignList(defaults) {
_super.apply(this, arguments);
}
UBT_VerticalAlignList.itemType = UBTConnectLibraryModel.UBT_VerticalAlignRec;
return UBT_VerticalAlignList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_VerticalAlignList = UBT_VerticalAlignList;

});
define("UBTConnectLibrary.model$Connect_UpdateTypeIdList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "UBTConnectLibrary.model", "Connect_CommonEntities_DB.model$Connect_UpdateTypeIdRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$Connect_CommonEntities_DB"], function (exports, OutSystems, Connect_CommonEntities_DBModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var Connect_UpdateTypeIdList = (function (_super) {
__extends(Connect_UpdateTypeIdList, _super);
function Connect_UpdateTypeIdList(defaults) {
_super.apply(this, arguments);
}
Connect_UpdateTypeIdList.itemType = Connect_CommonEntities_DBModel.Connect_UpdateTypeIdRec;
return Connect_UpdateTypeIdList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.Connect_UpdateTypeIdList = Connect_UpdateTypeIdList;

});
define("UBTConnectLibrary.model$NotesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$NotesRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var NotesRecordList = (function (_super) {
__extends(NotesRecordList, _super);
function NotesRecordList(defaults) {
_super.apply(this, arguments);
}
NotesRecordList.itemType = UBTConnectLibraryModel.NotesRecord;
return NotesRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.NotesRecordList = NotesRecordList;

});
define("UBTConnectLibrary.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$PositionRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var PositionRecordList = (function (_super) {
__extends(PositionRecordList, _super);
function PositionRecordList(defaults) {
_super.apply(this, arguments);
}
PositionRecordList.itemType = UBTConnectLibraryModel.PositionRecord;
return PositionRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.PositionRecordList = PositionRecordList;

});
define("UBTConnectLibrary.model$UBT_ColumnBehaviourList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ColumnBehaviourList = (function (_super) {
__extends(UBT_ColumnBehaviourList, _super);
function UBT_ColumnBehaviourList(defaults) {
_super.apply(this, arguments);
}
UBT_ColumnBehaviourList.itemType = UBTConnectLibraryModel.UBT_ColumnBehaviourRec;
return UBT_ColumnBehaviourList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ColumnBehaviourList = UBT_ColumnBehaviourList;

});
define("UBTConnectLibrary.model$UBT_ButtonSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$UBT_ButtonSizeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_ButtonSizeList = (function (_super) {
__extends(UBT_ButtonSizeList, _super);
function UBT_ButtonSizeList(defaults) {
_super.apply(this, arguments);
}
UBT_ButtonSizeList.itemType = UBTConnectLibraryModel.UBT_ButtonSizeRec;
return UBT_ButtonSizeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_ButtonSizeList = UBT_ButtonSizeList;

});
define("UBTConnectLibrary.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ColorRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = UBTConnectLibraryModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.ColorRecordList = ColorRecordList;

});
define("UBTConnectLibrary.model$DetailDisplayTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$DetailDisplayTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var DetailDisplayTypeList = (function (_super) {
__extends(DetailDisplayTypeList, _super);
function DetailDisplayTypeList(defaults) {
_super.apply(this, arguments);
}
DetailDisplayTypeList.itemType = UBTConnectLibraryModel.DetailDisplayTypeRec;
return DetailDisplayTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.DetailDisplayTypeList = DetailDisplayTypeList;

});
define("UBTConnectLibrary.model$UBT_MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UBT_MessageTypeList = (function (_super) {
__extends(UBT_MessageTypeList, _super);
function UBT_MessageTypeList(defaults) {
_super.apply(this, arguments);
}
UBT_MessageTypeList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRec;
return UBT_MessageTypeList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.UBT_MessageTypeList = UBT_MessageTypeList;

});
define("UBTConnectLibrary.model$GutterSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$GutterSizeRecord"], function (exports, OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var GutterSizeRecordList = (function (_super) {
__extends(GutterSizeRecordList, _super);
function GutterSizeRecordList(defaults) {
_super.apply(this, arguments);
}
GutterSizeRecordList.itemType = UBTConnectLibraryModel.GutterSizeRecord;
return GutterSizeRecordList;
})(OS.DataTypes.GenericRecordList);
UBTConnectLibraryModel.GutterSizeRecordList = GutterSizeRecordList;

});
define("UBTConnectLibrary.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBTConnectLibraryModel = exports;
Object.defineProperty(UBTConnectLibraryModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"];
}
});

UBTConnectLibraryModel.staticEntities = {};
UBTConnectLibraryModel.staticEntities.householdDetailTags = {};
var getHouseholdDetailTagsRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["02376ee1-6f2c-41b8-8cd0-d6ffe5b539fa"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdDetailTags, "photos", {
get: function () {
return getHouseholdDetailTagsRecord("0485ecd2-03f0-403b-94a8-55cbce0cc4c8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdDetailTags, "about", {
get: function () {
return getHouseholdDetailTagsRecord("17e9e808-8284-4bb0-a7bf-4c4e63de939c");
}
});

UBTConnectLibraryModel.staticEntities.detailDisplayType = {};
var getDetailDisplayTypeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["073319c3-3e2c-4cc7-b5c9-8d21ac130c43"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "contactPhoneMobile", {
get: function () {
return getDetailDisplayTypeRecord("1b893c42-0b66-419a-ae1b-348d1f3a7540");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "awayFather", {
get: function () {
return getDetailDisplayTypeRecord("4b4aa8fc-f00d-4b8a-806e-5826c920903c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "contactPhoneWork", {
get: function () {
return getDetailDisplayTypeRecord("4f8a3c41-d420-4432-8185-db85e1ecf860");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "normal", {
get: function () {
return getDetailDisplayTypeRecord("a3008fd3-5f0f-40ef-9455-e39575604908");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "awayMother", {
get: function () {
return getDetailDisplayTypeRecord("c902324a-83c7-41df-bccc-0f53f8d7f19d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "relationshipFather", {
get: function () {
return getDetailDisplayTypeRecord("d433b9d9-bff5-4372-a28f-f45b0ccbe9c3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "relationshipMother", {
get: function () {
return getDetailDisplayTypeRecord("e0d161eb-36f4-42f8-bae3-b994aac5fb92");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "relationshipFormerSpouse", {
get: function () {
return getDetailDisplayTypeRecord("ed698ba3-0478-49c2-aff3-ea3590205ada");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.detailDisplayType, "birth", {
get: function () {
return getDetailDisplayTypeRecord("f3a20456-696e-466a-b616-b4f25e70248e");
}
});

UBTConnectLibraryModel.staticEntities.uBT_ImageSize = {};
var getUBT_ImageSizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["07cee39a-18ef-4dbf-8471-ec7fcfedef5a"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "fullHeight_100_Percent", {
get: function () {
return getUBT_ImageSizeRecord("0323f7f5-c991-4653-8ef6-506692bdfc4b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "fullWidth_100_Percent", {
get: function () {
return getUBT_ImageSizeRecord("0f7c1d4a-dfe7-42a5-a4d4-7043e009450b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "medium_60", {
get: function () {
return getUBT_ImageSizeRecord("1b1aea95-ad82-4429-b68a-80820cf8fc1c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "extraSmall_32", {
get: function () {
return getUBT_ImageSizeRecord("22b961e4-50eb-4be4-b2e0-a450630f9091");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "large_65", {
get: function () {
return getUBT_ImageSizeRecord("306a3f94-642c-4c0f-bc20-cd559b261dbc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "small_40", {
get: function () {
return getUBT_ImageSizeRecord("388c970f-f6ab-40cc-a651-5f5c016da8b6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "listThumbnail_104", {
get: function () {
return getUBT_ImageSizeRecord("3ea349ce-8f4d-4c79-a02d-d10da50b8170");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "square", {
get: function () {
return getUBT_ImageSizeRecord("5fe1292f-fb79-4c0e-8275-31a50a05797b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "auto", {
get: function () {
return getUBT_ImageSizeRecord("6d5cd9e3-3b51-4955-bf2e-b2ce75fe3487");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "base_52", {
get: function () {
return getUBT_ImageSizeRecord("83108d3c-d465-43d3-a8be-9813f5299db9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "extraLarge_100", {
get: function () {
return getUBT_ImageSizeRecord("9b640159-8fa5-47a0-bafd-e56680d4258a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "halfWidth_50vw", {
get: function () {
return getUBT_ImageSizeRecord("a820108b-9612-4fbc-99ea-b622a04efe9d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "maxHeight_100vh", {
get: function () {
return getUBT_ImageSizeRecord("c61c2400-2aee-4b97-aae0-9a25a06a0beb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "quarterWidth_25vw", {
get: function () {
return getUBT_ImageSizeRecord("ca560d17-83a8-4050-8346-7872a1ebd03f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "maxWidth_100vw", {
get: function () {
return getUBT_ImageSizeRecord("cd58b82c-6f73-4350-834c-3962510a400d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "doubleExtraLarge_176", {
get: function () {
return getUBT_ImageSizeRecord("e366276e-e1d4-44fb-a3f2-b04d303b0669");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageSize, "thirdWidth_33vw", {
get: function () {
return getUBT_ImageSizeRecord("e79a4d16-4d28-4610-bbed-3079e45e639f");
}
});

UBTConnectLibraryModel.staticEntities.uBT_BackgroundImageSize = {};
var getUBT_BackgroundImageSizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["0d40b70b-8b2b-4ada-858a-a3ed34b83bc1"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_BackgroundImageSize, "intrinsicWidth_3_To_2", {
get: function () {
return getUBT_BackgroundImageSizeRecord("3fa39585-8f73-43bb-9ec2-529ec313539f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_BackgroundImageSize, "intrinsicHeight_2_To_3", {
get: function () {
return getUBT_BackgroundImageSizeRecord("49eca0a8-3232-4cd0-bb39-207bab1bc3ec");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Color = {};
var getUBT_ColorRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["15a2eb42-4574-4866-81b1-27212b512e30"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleDarkest", {
get: function () {
return getUBT_ColorRecord("05830090-6546-41ec-bd4a-339f0bd9de3e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueDarkest", {
get: function () {
return getUBT_ColorRecord("08872960-e4ef-4ee6-87d2-ed3c25354046");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("0e45baea-3480-4314-a952-7426e2e48f07");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "tertiary", {
get: function () {
return getUBT_ColorRecord("13882892-29e0-4466-87d6-8bf6a647a5e6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueLightest", {
get: function () {
return getUBT_ColorRecord("164d1944-08b6-4ac1-86cb-3c7df3a2ac1e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("16d0c42f-008b-4dec-b157-bad1fe350783");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueLight", {
get: function () {
return getUBT_ColorRecord("184b3928-360f-4550-a484-b7ba3e58c2c5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanLighter", {
get: function () {
return getUBT_ColorRecord("185b2676-2026-47ee-a0b3-c75a1c8a1288");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachDarker", {
get: function () {
return getUBT_ColorRecord("1fda6565-fa77-4f73-9504-c6d831e41be6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellowDarkest", {
get: function () {
return getUBT_ColorRecord("21ec71cc-7550-4356-8cf8-a78054fac1b8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral8", {
get: function () {
return getUBT_ColorRecord("23e5ec91-9544-4fd5-89f8-b733bcd83734");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "pink", {
get: function () {
return getUBT_ColorRecord("2c310cbc-847b-4e25-8063-1c2ae12e1309");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "primaryGradientRadial", {
get: function () {
return getUBT_ColorRecord("2e7bb6b2-9912-43f7-9d2e-56944941a6e8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "redDarker", {
get: function () {
return getUBT_ColorRecord("31ac2430-9041-4ac7-8ce6-6a0d6f331045");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanLightest", {
get: function () {
return getUBT_ColorRecord("33117849-859f-436f-8e94-1b426720e0e6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyan", {
get: function () {
return getUBT_ColorRecord("342d31e3-5c19-4fe7-bcbc-86819dd070aa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellowLighter", {
get: function () {
return getUBT_ColorRecord("3523291e-51ee-4f2b-89ab-2400cf943740");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanDarker", {
get: function () {
return getUBT_ColorRecord("3767d77b-68a6-411b-a176-c6a90cd3448d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "error", {
get: function () {
return getUBT_ColorRecord("3798cac6-af7e-46e9-acc2-9f8bea33fafa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "grape", {
get: function () {
return getUBT_ColorRecord("3972a60d-06e5-444d-8237-d5a00416e8c2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "initial", {
get: function () {
return getUBT_ColorRecord("3d795492-e13d-4e93-9d76-19d01fb327e7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "inherit", {
get: function () {
return getUBT_ColorRecord("3f12e5fd-3aa8-4024-87e8-c5db6470f756");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral0", {
get: function () {
return getUBT_ColorRecord("4089faf6-2df0-4abd-a972-8887dbba8b5b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral4", {
get: function () {
return getUBT_ColorRecord("49cca530-5a45-4f7f-b2b2-57c33874ec1f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "primaryGradientLinear", {
get: function () {
return getUBT_ColorRecord("4ffa8385-a5e4-4b60-a516-fdfca21cd066");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachDarkest", {
get: function () {
return getUBT_ColorRecord("518e0c1d-595e-4dd5-b4c3-cfe77d842ebc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachLighter", {
get: function () {
return getUBT_ColorRecord("5753052b-e2f1-4b7c-bb19-0ccb1c5e7f79");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "greenLightest", {
get: function () {
return getUBT_ColorRecord("59e2d10f-4d67-4a69-900b-f413511b580c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueDark", {
get: function () {
return getUBT_ColorRecord("5c12954d-57e4-487a-a815-4cf7ed0c7598");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral6", {
get: function () {
return getUBT_ColorRecord("5f10c2b1-7b7f-4959-aba3-113716521d47");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "redDark", {
get: function () {
return getUBT_ColorRecord("607f3988-475c-43a0-aba4-2ba4b58907ea");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "pinkNonStandardDarker", {
get: function () {
return getUBT_ColorRecord("633662b9-2ea8-4041-b701-0536e9c42ff1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueNonStandard", {
get: function () {
return getUBT_ColorRecord("63bf24fc-38fc-4e0d-834f-1ce87dc0b10a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "warning", {
get: function () {
return getUBT_ColorRecord("65d4bf68-0e90-4cb7-a7b2-6ceb4f92c9df");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "revert", {
get: function () {
return getUBT_ColorRecord("67b0c706-c10c-4797-a007-9b1ce8545235");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blue", {
get: function () {
return getUBT_ColorRecord("71b82b5e-b87e-4b1b-b13b-835c761d99fc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleLightest", {
get: function () {
return getUBT_ColorRecord("78f36fed-68c7-4882-a056-b3fda622cb2c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleDark", {
get: function () {
return getUBT_ColorRecord("7b9fda54-5e8c-4b3d-aa35-9a511d69e5df");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral3", {
get: function () {
return getUBT_ColorRecord("7f4b5d80-4007-43d3-a275-e312abe700f4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellowLight", {
get: function () {
return getUBT_ColorRecord("845b1f32-a12e-4389-9f67-3ae2fa9b0d2b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("85b0a09c-16b7-44b4-96d8-1f9da2408dbb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "green", {
get: function () {
return getUBT_ColorRecord("85c37060-4326-44df-a0cc-5a13f69f26d5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "teal", {
get: function () {
return getUBT_ColorRecord("8edd2770-9752-4b46-a493-80e135e23644");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "unset", {
get: function () {
return getUBT_ColorRecord("9240137f-908b-42b0-bd3f-b800caf21763");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachDark", {
get: function () {
return getUBT_ColorRecord("938ec1e5-34f4-4467-aae5-fd7a89984c47");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral2", {
get: function () {
return getUBT_ColorRecord("95b3893d-02fc-429e-99f3-28f89b523a0e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueLighter", {
get: function () {
return getUBT_ColorRecord("9887169b-0ae7-49e6-96ac-4bd3af1178d4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachLigh", {
get: function () {
return getUBT_ColorRecord("9be02ce6-47be-414a-9c8b-ec370651dac3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "lime", {
get: function () {
return getUBT_ColorRecord("9d4aed3b-1f36-4052-9d5c-34e77a615615");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "pinkNonStandard", {
get: function () {
return getUBT_ColorRecord("a1e29ef9-84ed-49d3-826c-cc69c24c7db3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "greenDarker", {
get: function () {
return getUBT_ColorRecord("a50a3956-0ce6-4416-a796-667fe54fa4a6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellow", {
get: function () {
return getUBT_ColorRecord("a93a0099-6233-4cd9-9f24-63a491bef071");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "orange", {
get: function () {
return getUBT_ColorRecord("a947cac8-4262-401d-94b7-c31c42ba15bc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral5", {
get: function () {
return getUBT_ColorRecord("aa4cac98-190b-413a-8fc2-c21902ea6b5e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanDarkest", {
get: function () {
return getUBT_ColorRecord("ae936fa8-46e1-4945-ab06-297b1675d4c4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral1", {
get: function () {
return getUBT_ColorRecord("b16bdf21-ff3f-4360-a8a7-cb36698afaf3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "transparent", {
get: function () {
return getUBT_ColorRecord("b29917b7-38c4-47f2-be97-4515098cf2e2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral10", {
get: function () {
return getUBT_ColorRecord("b4537f80-ed23-4d32-aaef-8b9dd53be850");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleLighter", {
get: function () {
return getUBT_ColorRecord("b59d16dd-20dd-49a9-92fa-1db232143f8c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleDarker", {
get: function () {
return getUBT_ColorRecord("b7cfbe79-7a84-4f1b-9194-3a0e444d8c23");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "greenLighter", {
get: function () {
return getUBT_ColorRecord("b93c6fb3-b092-48cd-9840-9ca063748e80");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanDark", {
get: function () {
return getUBT_ColorRecord("bba397ea-8a54-4af2-95d2-a10e500fe97c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "success", {
get: function () {
return getUBT_ColorRecord("be151629-8a62-4b12-b1ea-563e8353213d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purpleLight", {
get: function () {
return getUBT_ColorRecord("c3edeafe-e2af-4517-a5b9-814d25f96fb3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral9", {
get: function () {
return getUBT_ColorRecord("c5289117-fd0c-46eb-b407-29ae599a70a8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueDarker", {
get: function () {
return getUBT_ColorRecord("c8ca8c59-c581-48f7-8e21-d0bff1f606b6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "violet", {
get: function () {
return getUBT_ColorRecord("cc5fce11-6caf-4f83-a062-3c87d045aa5b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellowLightest", {
get: function () {
return getUBT_ColorRecord("ccf99b97-b006-4cf3-838e-18a31ec7485f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peachLightest", {
get: function () {
return getUBT_ColorRecord("ce399b09-df7c-48f3-a796-ba35722697d5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "primary", {
get: function () {
return getUBT_ColorRecord("d27276c0-e4ce-4d45-b89c-7ada5a5874dd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "secondary", {
get: function () {
return getUBT_ColorRecord("dad810e5-c4ab-40dc-9ab3-63c043cfc5ae");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "neutral7", {
get: function () {
return getUBT_ColorRecord("dc618da1-29e1-4b32-b176-697d63ed0603");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueNonStandarDarker", {
get: function () {
return getUBT_ColorRecord("e1b590d2-5868-4575-8190-9c4d7021a27e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "greenDark", {
get: function () {
return getUBT_ColorRecord("e4297c8c-fbc1-45cf-bd37-26d5b41da6a9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellowDarker", {
get: function () {
return getUBT_ColorRecord("e757b4a0-7402-46d6-a00c-319209d8ff2d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "indigo", {
get: function () {
return getUBT_ColorRecord("e899a76a-b1ec-41b0-936d-e7ce2081a389");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "greenDarkest", {
get: function () {
return getUBT_ColorRecord("eb901679-daca-482b-bd68-c434c83479f2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "peach", {
get: function () {
return getUBT_ColorRecord("ebcf5343-615e-40cb-a2e8-0b5f747824d7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "cyanLight", {
get: function () {
return getUBT_ColorRecord("efd1b932-24d7-4d2c-8f21-3ef2c8c84edb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "greenLight", {
get: function () {
return getUBT_ColorRecord("f3e04b12-ec38-4c39-8bde-776328a69748");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "yellowDark", {
get: function () {
return getUBT_ColorRecord("f9715390-dae9-4684-b452-9e0145dfd68d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "blueDarkGradientLinear", {
get: function () {
return getUBT_ColorRecord("fc7450fa-8faa-48b1-90ea-02176cd11a23");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "purple", {
get: function () {
return getUBT_ColorRecord("fcbb74a3-797c-455c-87b4-d4465652e5e9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "info", {
get: function () {
return getUBT_ColorRecord("fdffead9-4f49-483a-9f70-991b0cf13531");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Color, "red", {
get: function () {
return getUBT_ColorRecord("fe45b252-bf2a-494a-9a8c-72adae48034a");
}
});

UBTConnectLibraryModel.staticEntities.uBT_ButtonSize = {};
var getUBT_ButtonSizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["2df4b04f-e905-4073-b8b8-d74ef76c6b57"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ButtonSize, "small", {
get: function () {
return getUBT_ButtonSizeRecord("2babfcce-5958-43b9-8b0b-cacbb84c7977");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ButtonSize, "extraSmall", {
get: function () {
return getUBT_ButtonSizeRecord("9968e63e-5da5-4f9d-9de3-38b18e670dd9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ButtonSize, "medium", {
get: function () {
return getUBT_ButtonSizeRecord("c4c7d199-18d4-4972-aa21-536229ce508c");
}
});

UBTConnectLibraryModel.staticEntities.uBT_ButtonType = {};
var getUBT_ButtonTypeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["360e9b7c-fb2c-4068-982b-6af26cc639ab"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ButtonType, "tertiary", {
get: function () {
return getUBT_ButtonTypeRecord("210ca79b-cfa5-40ab-9caf-27dc44367742");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ButtonType, "primary", {
get: function () {
return getUBT_ButtonTypeRecord("253d9808-b14e-44dd-8274-0323514a76f2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ButtonType, "scondary", {
get: function () {
return getUBT_ButtonTypeRecord("c655fdb2-64ce-4534-b473-073dd66d3b8c");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Visibility = {};
var getUBT_VisibilityRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["3c2ad8e8-4fff-4bab-92d7-f4537173fb98"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Visibility, "hidden", {
get: function () {
return getUBT_VisibilityRecord("4027d41a-6253-4622-a1db-be03a4d4fa71");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Visibility, "collapse", {
get: function () {
return getUBT_VisibilityRecord("42ed01be-b254-41cd-9cbe-93f86a88766e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Visibility, "visible", {
get: function () {
return getUBT_VisibilityRecord("57a2edaa-9a53-492b-800c-0dc74449ade6");
}
});

UBTConnectLibraryModel.staticEntities.uBT_ImageCardType = {};
var getUBT_ImageCardTypeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["3e361abb-27ad-4722-8048-474cfa276638"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageCardType, "detail", {
get: function () {
return getUBT_ImageCardTypeRecord("09d81a96-e0e7-4021-99d8-6b4a2ddbe80d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageCardType, "sublist", {
get: function () {
return getUBT_ImageCardTypeRecord("1652dde5-396b-43a7-9080-76d71ec1f4e7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageCardType, "gallery", {
get: function () {
return getUBT_ImageCardTypeRecord("629a6493-7460-4b82-895c-98375fe0d216");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageCardType, "list", {
get: function () {
return getUBT_ImageCardTypeRecord("6bf0b5a8-8ba8-45f7-b735-7df4a87fac70");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ImageCardType, "listWithImages", {
get: function () {
return getUBT_ImageCardTypeRecord("f000ac07-4c7d-4be2-94f6-7bd9fd7982a5");
}
});

UBTConnectLibraryModel.staticEntities.householdMemberType = {};
var getHouseholdMemberTypeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["416249bc-e036-4cde-b88c-afb2e04c1e45"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdMemberType, "non_HouseholdMembers", {
get: function () {
return getHouseholdMemberTypeRecord("041d2323-e750-47b1-afb9-9f71923fee6f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdMemberType, "householder", {
get: function () {
return getHouseholdMemberTypeRecord("9e34bc7f-9455-464a-b57d-cfa87fc7518a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdMemberType, "householdMembers", {
get: function () {
return getHouseholdMemberTypeRecord("a2641e6d-6c39-4ecc-a2ad-f82c16c299e0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdMemberType, "non_HouseholdChildren", {
get: function () {
return getHouseholdMemberTypeRecord("b1d03663-9683-4960-8c5d-1226a5577f9f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdMemberType, "children", {
get: function () {
return getHouseholdMemberTypeRecord("ec9771df-04a6-4952-b34b-67e901f1bfaa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.householdMemberType, "spouse", {
get: function () {
return getHouseholdMemberTypeRecord("fc788a95-257b-4d26-9a5e-76bdac4d0645");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Shadow = {};
var getUBT_ShadowRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["570b9814-0389-4cd9-bbb9-4acd094b3497"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "extraSmall", {
get: function () {
return getUBT_ShadowRecord("10568518-f28e-44c9-90a1-00ea1ef439d5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "extraLarge", {
get: function () {
return getUBT_ShadowRecord("13a3d59d-9881-4dfa-ba79-414bdae40434");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "extraSmallTop", {
get: function () {
return getUBT_ShadowRecord("17931ee8-f67b-4f63-8ae1-e44850ff5ae3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "small", {
get: function () {
return getUBT_ShadowRecord("45284799-9fff-46c6-a55e-df5f061a7f7a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "s2", {
get: function () {
return getUBT_ShadowRecord("49722c94-3977-46ac-8e6c-9e4f88046065");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "large", {
get: function () {
return getUBT_ShadowRecord("5ff32da9-8ae9-4300-91f7-df57dc47dabd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "medium", {
get: function () {
return getUBT_ShadowRecord("77b641d5-115d-4141-95d7-a54ed168aaea");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shadow, "none", {
get: function () {
return getUBT_ShadowRecord("95d42ca8-3a28-4445-bc71-0ee98b56dca9");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Shape = {};
var getUBT_ShapeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["5950c080-6e4b-48f6-89fe-55655482924b"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shape, "soft", {
get: function () {
return getUBT_ShapeRecord("0c36bb8f-4073-4775-8c28-eb1d30eed6aa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shape, "medium", {
get: function () {
return getUBT_ShapeRecord("4223ce2a-7c06-4b23-afcd-7841b7559881");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shape, "circle", {
get: function () {
return getUBT_ShapeRecord("87962f03-f5ed-42ea-801f-b98f51cb559c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shape, "large", {
get: function () {
return getUBT_ShapeRecord("d61799bc-5a05-4315-ac46-77c3b0504beb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shape, "none", {
get: function () {
return getUBT_ShapeRecord("f37348d0-8b88-4a75-80a6-e76e86e9bc35");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Shape, "rounded", {
get: function () {
return getUBT_ShapeRecord("fb7c5397-3c16-44fd-b5ea-36a00efdcd7c");
}
});

UBTConnectLibraryModel.staticEntities.uBT_IconSize = {};
var getUBT_IconSizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["5c868b5a-3a9c-45fd-9724-88d7df3eaaec"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "small_12", {
get: function () {
return getUBT_IconSizeRecord("43088cb2-1b1d-4f32-b2d3-65ba14737dcd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "nonStandard_32", {
get: function () {
return getUBT_IconSizeRecord("51091809-5176-4669-8100-2874d9c94960");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "base_24", {
get: function () {
return getUBT_IconSizeRecord("67a32265-0427-4e06-b7c6-496df135460e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "nonStandard_18", {
get: function () {
return getUBT_IconSizeRecord("71843981-3f48-434e-9d09-0d92f60a2591");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "nonStandard_64", {
get: function () {
return getUBT_IconSizeRecord("8512eb1f-1008-4d7c-b0a2-265a6aafacd0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "display_36", {
get: function () {
return getUBT_IconSizeRecord("91f8ac4b-eec9-4927-b3c7-e0bd72444cf1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "medium_20", {
get: function () {
return getUBT_IconSizeRecord("98d3467e-0017-4aa1-981f-929b030caf06");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "nonStandard_108", {
get: function () {
return getUBT_IconSizeRecord("9b36044e-87d6-4e9f-a8c0-6664a6a827d0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "nonStandard_16", {
get: function () {
return getUBT_IconSizeRecord("d36cf71f-f0ad-487a-8548-306c608b9f9c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_IconSize, "nonStandard_14", {
get: function () {
return getUBT_IconSizeRecord("d7aa876d-cfd2-4e80-87dd-52eb44cd09ea");
}
});

UBTConnectLibraryModel.staticEntities.uBT_FontWeight = {};
var getUBT_FontWeightRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["6024a623-26dc-4b80-8d13-c17d22458d47"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontWeight, "bold", {
get: function () {
return getUBT_FontWeightRecord("1886c4b9-8680-4707-b67d-ddcfc8a10146");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontWeight, "semiBold", {
get: function () {
return getUBT_FontWeightRecord("29004952-a085-4761-9daf-e1112e3eb0da");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontWeight, "regular", {
get: function () {
return getUBT_FontWeightRecord("709c6b9d-64e0-492f-89b5-bcd9f2919121");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontWeight, "medium", {
get: function () {
return getUBT_FontWeightRecord("a64fbd75-f7fd-4fd0-9eb8-8c3b09964ecc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontWeight, "light", {
get: function () {
return getUBT_FontWeightRecord("b14cf433-3d5e-49cb-abd3-89fa693d4b94");
}
});

UBTConnectLibraryModel.staticEntities.calendarView = {};
var getCalendarViewRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["67892b4c-a8dd-4716-81b5-ab4975814dc2"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.calendarView, "week", {
get: function () {
return getCalendarViewRecord("27e1b624-61d0-42fc-a9c3-501bad5c8a26");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.calendarView, "month", {
get: function () {
return getCalendarViewRecord("5c4da21d-2c61-4fbf-b269-6fdfc58db253");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.calendarView, "day", {
get: function () {
return getCalendarViewRecord("832ae2fc-1871-499c-b465-ef9dde6dab1b");
}
});

UBTConnectLibraryModel.staticEntities.type_ImageResolution = {};
var getType_ImageResolutionRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["682e0cc7-f38d-4e2e-bc59-7bf9ea5be4e1"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_ImageResolution, "high", {
get: function () {
return getType_ImageResolutionRecord("1428a4f9-556b-4713-8bf2-ea9dacdbc645");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_ImageResolution, "medium", {
get: function () {
return getType_ImageResolutionRecord("2178523b-248f-41b2-80ef-19a2c0a81d1d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_ImageResolution, "low", {
get: function () {
return getType_ImageResolutionRecord("506f9e34-30e5-44fd-bbd4-5c73944520d4");
}
});

UBTConnectLibraryModel.staticEntities.uBT_FlexDirection = {};
var getUBT_FlexDirectionRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["71ce133f-c7fd-4b8f-96ce-86fc9740c100"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexDirection, "column", {
get: function () {
return getUBT_FlexDirectionRecord("1f51bc5f-99a0-4784-a349-e3c46a68084c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexDirection, "columnReverse", {
get: function () {
return getUBT_FlexDirectionRecord("41228103-66c8-4179-b2eb-c6560a6a8d96");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexDirection, "row", {
get: function () {
return getUBT_FlexDirectionRecord("4894b1a7-e8a3-4e41-8f30-8ed20a221576");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexDirection, "rowReverse", {
get: function () {
return getUBT_FlexDirectionRecord("a8cb076a-720c-4ce5-9779-47108235f712");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Icons = {};
var getUBT_IconsRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["761dc95a-0f68-4160-83a0-143749383d08"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "marriage", {
get: function () {
return getUBT_IconsRecord("01967ad4-6bbf-443e-8285-e8e57b2b0632");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cottage", {
get: function () {
return getUBT_IconsRecord("01fd0b0c-e174-41e1-b88b-9df6517c95ce");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "group", {
get: function () {
return getUBT_IconsRecord("038a4fe0-799e-494a-ab3c-211c23271654");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowRight", {
get: function () {
return getUBT_IconsRecord("046695a9-b2b2-4670-a1a9-123ce6f5fd7f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "boy", {
get: function () {
return getUBT_IconsRecord("051f2c2a-d1ce-42f4-b09b-bd094bca02f8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "add", {
get: function () {
return getUBT_IconsRecord("0714fea8-7dea-4bcf-8671-f26dfb688cc0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "chevronDown", {
get: function () {
return getUBT_IconsRecord("08166391-4813-4ac9-b20b-b990cfe18ae0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "luggage", {
get: function () {
return getUBT_IconsRecord("08c8828f-9d45-4857-90df-6ab3793a846b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "myLocationFill", {
get: function () {
return getUBT_IconsRecord("0979fad9-693b-4810-a256-195cae4fb739");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "union", {
get: function () {
return getUBT_IconsRecord("09ae4e7b-1487-4dc7-9155-9a6e066300d3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "locationOn", {
get: function () {
return getUBT_IconsRecord("0c0a76dd-c942-4b57-9437-74976a916818");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "storefront", {
get: function () {
return getUBT_IconsRecord("0c519f0f-c843-4abc-941d-f6d9f4c12ea7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "whatsapp", {
get: function () {
return getUBT_IconsRecord("0d96f6ca-9cef-4ac1-843c-81ad4c237aa6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "visibilityFill", {
get: function () {
return getUBT_IconsRecord("0dfa82bd-c1ed-42fc-90e9-e5aa423bc16d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cancel", {
get: function () {
return getUBT_IconsRecord("0e32ef3f-efa3-48ea-a1b0-568f0ee4a6f5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "personAdd", {
get: function () {
return getUBT_IconsRecord("0ec699ba-0eaa-4ce6-83ad-00eb6adc1f2b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "password", {
get: function () {
return getUBT_IconsRecord("0ed02f7d-cad7-44c6-9e53-0f56734e0f07");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "dynamicFeed", {
get: function () {
return getUBT_IconsRecord("102b4b8c-bcd3-4011-9aaa-d7bfdd542433");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "iosShare", {
get: function () {
return getUBT_IconsRecord("10688e47-0812-45e3-9169-377f63e47c75");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "calendarAdd", {
get: function () {
return getUBT_IconsRecord("11e01581-c412-423e-824a-284305392186");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "gift", {
get: function () {
return getUBT_IconsRecord("1305faf0-5480-4bff-8141-7b23376d8b2c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "record1", {
get: function () {
return getUBT_IconsRecord("13861d84-80dc-4c04-9d63-1d770681dd5d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "lDM", {
get: function () {
return getUBT_IconsRecord("143fb3dc-b108-4637-a17b-408cc1a4fce5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "reply", {
get: function () {
return getUBT_IconsRecord("144c3c28-9950-4880-a721-f92fbe7c28ef");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "partnerExchange", {
get: function () {
return getUBT_IconsRecord("15867a0f-96f6-431f-b82c-0da4464c9c56");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowOutward", {
get: function () {
return getUBT_IconsRecord("1905fa31-1db8-4232-af51-113be9cccdd0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "home", {
get: function () {
return getUBT_IconsRecord("190939d9-36b6-4191-b454-90e31962ef06");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "globeUK", {
get: function () {
return getUBT_IconsRecord("1952ef28-39f3-4883-b47a-1394459997a0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "replay", {
get: function () {
return getUBT_IconsRecord("1a48b465-71e7-4d09-b5b9-f87f76144c8b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "explore", {
get: function () {
return getUBT_IconsRecord("1c2c7434-d5dd-4a2a-9eff-49d7063aa0cb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "connectLogo", {
get: function () {
return getUBT_IconsRecord("1c301095-4bf7-4096-beea-85decd0b8bcf");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "error", {
get: function () {
return getUBT_IconsRecord("1c71bc61-b231-4c87-922a-c313d6ddf3e0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "playArrow", {
get: function () {
return getUBT_IconsRecord("1cb80687-9552-4b2d-9939-3eec621500f9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkboxFill", {
get: function () {
return getUBT_IconsRecord("1d090f65-b6a8-4450-b31b-0430867aa2b7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_ElGusto", {
get: function () {
return getUBT_IconsRecord("1d1ff2cc-8c99-45de-81be-a6c5c0e5f764");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "openNew", {
get: function () {
return getUBT_IconsRecord("1dfd3b2f-914f-410a-b6be-633c5c93b53d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_PinOneSchool", {
get: function () {
return getUBT_IconsRecord("22660839-d944-4d18-ae82-7f7d8f853b9f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "orbit", {
get: function () {
return getUBT_IconsRecord("254d3ef1-005e-4355-8f1f-7df80a0468bc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "uBT", {
get: function () {
return getUBT_IconsRecord("2882a951-2fb4-479a-a87f-f327da1b192d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "policy", {
get: function () {
return getUBT_IconsRecord("28f8245a-3cd9-42e8-8aa8-de3cd49ef203");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "radioUnchecked", {
get: function () {
return getUBT_IconsRecord("2a358645-89a2-4b9e-9e77-44c270956f4b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "public", {
get: function () {
return getUBT_IconsRecord("2b09c68d-9361-4b85-ab9c-d74804f94e37");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "eventNote", {
get: function () {
return getUBT_IconsRecord("2bba9527-6d3e-4bd7-8380-0c2de4845d73");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "help", {
get: function () {
return getUBT_IconsRecord("2c71544f-d715-40b9-82fe-a8017341e7ec");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "trove", {
get: function () {
return getUBT_IconsRecord("2d018719-66ae-4989-9dbb-b54dde21349b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "gridView", {
get: function () {
return getUBT_IconsRecord("2e1c7b32-5180-4009-98e3-5da055ca9360");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "notificationsFill", {
get: function () {
return getUBT_IconsRecord("2e749a54-d19c-4362-80fe-82ffbbfd69ad");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "calendar", {
get: function () {
return getUBT_IconsRecord("307db9b8-6f77-44b6-a601-9587539d4d6c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "tune", {
get: function () {
return getUBT_IconsRecord("31aa6503-79ac-47bc-abc4-c1470a0f9abb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "enterprise", {
get: function () {
return getUBT_IconsRecord("31ec4566-40e0-459f-ba26-7c85f670a2d0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "myLocation", {
get: function () {
return getUBT_IconsRecord("32f51bcb-30ec-4970-b53b-2e44b60944da");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_PinLock", {
get: function () {
return getUBT_IconsRecord("337fcfdd-ec24-4706-af2a-c771796c4e90");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "contactsFill", {
get: function () {
return getUBT_IconsRecord("33c801dc-95ec-4700-afff-104ce126eaae");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "eventNoteFill", {
get: function () {
return getUBT_IconsRecord("33ca9fc2-4e5d-4755-b4d7-e0649b5c6f18");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "call", {
get: function () {
return getUBT_IconsRecord("3525444b-9d1f-4c52-a922-4723c0ce07c1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "notifications", {
get: function () {
return getUBT_IconsRecord("3a0d7a28-5f0e-41eb-8766-dd9bc984f8f0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sort", {
get: function () {
return getUBT_IconsRecord("3a730ce3-50a4-4f24-83c3-835105bfb19f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "aodFill", {
get: function () {
return getUBT_IconsRecord("3c668376-fac3-401a-9378-d97065bda812");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_CommunityTradelink", {
get: function () {
return getUBT_IconsRecord("3da48273-0ed5-4609-8dd3-f28f6190645b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "scheduleFill", {
get: function () {
return getUBT_IconsRecord("3fdd2f3c-4040-42bc-85e3-aefad039c432");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "homeFill", {
get: function () {
return getUBT_IconsRecord("40ad5a6b-25f8-442a-8b98-552823e3a567");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sendMoney", {
get: function () {
return getUBT_IconsRecord("4125d6a8-da17-457a-bda0-e29fe27cf556");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "mailFill", {
get: function () {
return getUBT_IconsRecord("41ac9174-8215-434f-b067-277c7ef0ebcb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "block", {
get: function () {
return getUBT_IconsRecord("41ae034e-150a-408a-8ed3-78f1db8ee7ea");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "errorFill", {
get: function () {
return getUBT_IconsRecord("4343b5c4-be73-485f-919a-8c42fb06c6f5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "tooltipFill", {
get: function () {
return getUBT_IconsRecord("442943e0-01d4-450e-9e62-d3c53fb66b0c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkbox", {
get: function () {
return getUBT_IconsRecord("450a7217-12f4-4df4-a15c-45504366d99d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowLeft", {
get: function () {
return getUBT_IconsRecord("47f4fbb7-f2e5-4745-b966-1120481fb8d4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "personPlay", {
get: function () {
return getUBT_IconsRecord("4b903c72-8b47-4ee9-b9d0-72da2e48e323");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "signal", {
get: function () {
return getUBT_IconsRecord("4ccb171d-6f30-4cfe-aadc-64fdab936092");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "tooltip", {
get: function () {
return getUBT_IconsRecord("4cd3ad41-b170-41e4-ae1f-43e4ae7b4928");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cardOff", {
get: function () {
return getUBT_IconsRecord("4e38fd3c-e33c-4acc-8f9c-c07b7101e7e2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "keep", {
get: function () {
return getUBT_IconsRecord("4e78cf1f-85dd-4fc6-b62d-37633c21d07f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "house", {
get: function () {
return getUBT_IconsRecord("4ecc405e-a68f-4163-85bf-483b529e8f55");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "homePinFill", {
get: function () {
return getUBT_IconsRecord("4fb8c000-c28e-49e5-93d6-1a46ca0dae15");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "backspace", {
get: function () {
return getUBT_IconsRecord("51e1ef34-4966-4668-872a-bc7313d34e4e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "stopCircle", {
get: function () {
return getUBT_IconsRecord("534a0f62-e9f9-4ffc-b39b-62df5c0bf951");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "pause", {
get: function () {
return getUBT_IconsRecord("549a714b-5fca-4863-b5c2-717ffd0324c9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "calendarBusy", {
get: function () {
return getUBT_IconsRecord("5565d93a-0fe1-4cf2-ab10-3173b7fa33fe");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "gifting", {
get: function () {
return getUBT_IconsRecord("55748e60-9192-4b5a-9686-cfedad3d3bfe");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cancelFill", {
get: function () {
return getUBT_IconsRecord("569668bf-eb84-4f5d-8896-18c59ea0af08");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "turnRight", {
get: function () {
return getUBT_IconsRecord("56df2e44-a1f2-432f-a49e-58d240f7757d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "globeAsia", {
get: function () {
return getUBT_IconsRecord("593bfdba-792d-4067-b38b-867e5201b476");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "eventFill", {
get: function () {
return getUBT_IconsRecord("5a54402e-02af-48c8-af0d-91d1bdb07781");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "girl", {
get: function () {
return getUBT_IconsRecord("5f2b16ea-8416-45b8-8f83-ccf1ee554f71");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "link", {
get: function () {
return getUBT_IconsRecord("5f373e28-f02b-4ed2-b64c-a051b5f34025");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cardGear", {
get: function () {
return getUBT_IconsRecord("606307c7-e8bd-4f7f-99ce-09a63426e795");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "expandLess", {
get: function () {
return getUBT_IconsRecord("609859bb-222b-4549-a272-0a7237537ce2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "share", {
get: function () {
return getUBT_IconsRecord("625b037d-b75b-49b0-8042-72853eec2389");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "check", {
get: function () {
return getUBT_IconsRecord("64173b93-10a3-4c59-af2c-c3b013998a03");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "chevronRight", {
get: function () {
return getUBT_IconsRecord("64f7fd47-fbb4-4889-94b3-990455d7dc86");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "directionsSubway", {
get: function () {
return getUBT_IconsRecord("651e0ad5-cae1-41a0-9b53-b2e1c59d26b9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "imageGallery", {
get: function () {
return getUBT_IconsRecord("65cbcd7b-8b1f-4718-8736-814742d65ba8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "borderColor", {
get: function () {
return getUBT_IconsRecord("67ff3648-c211-4e45-bfba-5049b13629b1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "fingerprint", {
get: function () {
return getUBT_IconsRecord("697e7e46-4ba7-4792-92cf-fd25c9e93d72");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "card", {
get: function () {
return getUBT_IconsRecord("6a0fdee2-65d5-4054-9a03-b301453b03ba");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkboxDash", {
get: function () {
return getUBT_IconsRecord("6bb67cbb-c4ca-4aaf-a89a-10e296b5394b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "warning", {
get: function () {
return getUBT_IconsRecord("6bf835d0-facb-4471-a254-68add2237f0b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkCircleFill", {
get: function () {
return getUBT_IconsRecord("6d436649-dabd-449e-afa9-16c39ded9c64");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "widgets", {
get: function () {
return getUBT_IconsRecord("6e7d0422-f469-49b8-9e4d-53e28142f342");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "calendarFill", {
get: function () {
return getUBT_IconsRecord("7061c91e-09a4-4726-990b-ccb38664b700");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "draft", {
get: function () {
return getUBT_IconsRecord("711f01ca-4b00-4edc-9037-fb5e5c68f506");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "delete", {
get: function () {
return getUBT_IconsRecord("7188c903-cd71-4d06-9573-14884be682dc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowDropDown", {
get: function () {
return getUBT_IconsRecord("74c4d722-5c41-474a-8a0d-bea8500220cf");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "listAlt", {
get: function () {
return getUBT_IconsRecord("76af9e65-b846-418b-a5bb-a3df0cec1d31");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "videocamFill", {
get: function () {
return getUBT_IconsRecord("7749b73a-3d4a-4e9a-86dd-6bcba267b08f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "photoCamera", {
get: function () {
return getUBT_IconsRecord("78042bd0-55fa-4f4f-b2e7-74cf164f05df");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "eventList", {
get: function () {
return getUBT_IconsRecord("783ea5b1-d0c2-4e5c-8a7b-b187e98130c3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "letter", {
get: function () {
return getUBT_IconsRecord("78de31ce-cd56-44bc-b094-721ad2786921");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "event", {
get: function () {
return getUBT_IconsRecord("78f1778a-8f97-4ef9-8c9c-50130bef4954");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "idCard", {
get: function () {
return getUBT_IconsRecord("7a2a42c6-cafc-41bb-a093-b2c5ff9a7cb8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "refresh", {
get: function () {
return getUBT_IconsRecord("7a36a0a7-591a-4442-9168-143af08ce314");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "login", {
get: function () {
return getUBT_IconsRecord("7c019819-fab5-4f1e-bece-4fcdade0e6af");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "schedule", {
get: function () {
return getUBT_IconsRecord("7ca2b35d-0a8d-454f-9fdc-763329ab10c1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "bookOpen", {
get: function () {
return getUBT_IconsRecord("7de9ad7a-96de-4a02-946b-d0d5466f2646");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "listAltFill", {
get: function () {
return getUBT_IconsRecord("7e16e742-d9f9-42c3-ade4-2d8d48c44c78");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "floatLandscape", {
get: function () {
return getUBT_IconsRecord("7e770565-6756-489c-861a-03aa64a06828");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "videocam", {
get: function () {
return getUBT_IconsRecord("8346d388-9271-49fa-9b2c-5a38911088a4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkboxOutlineBlank", {
get: function () {
return getUBT_IconsRecord("85518b22-ee0b-4246-b791-3c32802c4878");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "contacts", {
get: function () {
return getUBT_IconsRecord("85e10228-6778-48d1-8e84-227f094b6aba");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "edit", {
get: function () {
return getUBT_IconsRecord("86a23e9d-91f9-4fca-9354-a2ddc5b38457");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "expandMore", {
get: function () {
return getUBT_IconsRecord("88ecfd16-0c74-471a-9eb7-24ef16c673cb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "folder", {
get: function () {
return getUBT_IconsRecord("8af2a151-f264-4de2-b97e-b3027492d43b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "filterAlt", {
get: function () {
return getUBT_IconsRecord("8ed754ea-2b4c-48b5-939f-4ec30b7a7354");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "bookClosed", {
get: function () {
return getUBT_IconsRecord("8f9d52f6-785b-4315-9fb9-7dca224db806");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "quoteFill", {
get: function () {
return getUBT_IconsRecord("900a6e7d-3539-4ceb-b038-281a6b9ae564");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "menu", {
get: function () {
return getUBT_IconsRecord("913b1341-974f-41fa-b3d2-8c173d29ae47");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "notes", {
get: function () {
return getUBT_IconsRecord("9428e91a-7445-4eff-a625-6563174cfd8e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "callFill", {
get: function () {
return getUBT_IconsRecord("953d45c9-d5e1-4767-8b63-d2dcf0752f13");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "folderOpen", {
get: function () {
return getUBT_IconsRecord("97af837b-8428-4292-99c5-dd60bad9c300");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "bookmarkFill", {
get: function () {
return getUBT_IconsRecord("97dfc4b7-5c87-4cf2-b1a6-b740f5c1f486");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "close", {
get: function () {
return getUBT_IconsRecord("98231ddd-01a5-4cc5-99dd-758d32eef751");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "family", {
get: function () {
return getUBT_IconsRecord("98250881-935b-48c2-8d01-997c69c7c0a3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "playCircle", {
get: function () {
return getUBT_IconsRecord("9ed563f2-c328-44ee-8812-51d88f3862dd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "globe", {
get: function () {
return getUBT_IconsRecord("9f6709a5-3f25-4783-a603-09a816e52aa3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "schoolFill", {
get: function () {
return getUBT_IconsRecord("a014cf6f-cb89-49d6-80ad-8b1ee8dfa941");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "settings", {
get: function () {
return getUBT_IconsRecord("a3a8997b-297b-4ef1-aed0-2384be658ed2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkboxDashFill", {
get: function () {
return getUBT_IconsRecord("a618e000-d4f9-41e1-a33f-e2fb334b59e7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "bookmark", {
get: function () {
return getUBT_IconsRecord("a73519f3-9a59-4ca0-a7b3-502a2243eb9f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowRightAlt", {
get: function () {
return getUBT_IconsRecord("a8cf78de-1154-4db5-bffb-e06ad12e6056");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "remove", {
get: function () {
return getUBT_IconsRecord("aa6d64e1-b646-4687-9d76-b06980882167");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "homePIn", {
get: function () {
return getUBT_IconsRecord("ab0942f0-9de6-4f70-bd6f-384c28e09d87");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "nearMe", {
get: function () {
return getUBT_IconsRecord("adfcacc5-456f-4a69-84ed-970b9327d191");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "attachFile", {
get: function () {
return getUBT_IconsRecord("b27013a5-8612-4010-a849-44a7ff7cb50b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_OneSchoolGlobal", {
get: function () {
return getUBT_IconsRecord("b27cae42-c155-419b-9c52-a6ded1478bf8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "person", {
get: function () {
return getUBT_IconsRecord("b3936174-dfa9-4604-a4e7-d97c384c06da");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "repeat", {
get: function () {
return getUBT_IconsRecord("b62d5d0b-5744-47d6-8415-e22c79503f89");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "search", {
get: function () {
return getUBT_IconsRecord("b66c2fec-a1aa-4787-ba19-79a7993bb086");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "calendarBusyFill", {
get: function () {
return getUBT_IconsRecord("b91e1e92-44c2-42b6-8057-d2b67e6a3fce");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "personFill", {
get: function () {
return getUBT_IconsRecord("ba1e4aea-ea5c-4c90-90c4-7c69df1970ec");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "infoFill", {
get: function () {
return getUBT_IconsRecord("ba1ee3b1-9de8-41a7-9d41-d05eaabe60b1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "history", {
get: function () {
return getUBT_IconsRecord("ba3df0b5-1b83-4c43-aeaf-898b25db9f7c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "mail", {
get: function () {
return getUBT_IconsRecord("bbb1690b-a9c4-4329-8441-7aec6bffc14f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_PinCountry", {
get: function () {
return getUBT_IconsRecord("bc43fe1e-3e97-4b79-ad53-29dd65875a61");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "domain", {
get: function () {
return getUBT_IconsRecord("bc79bfae-bf5a-42e9-8a25-5f7ffb15643f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_PinMember", {
get: function () {
return getUBT_IconsRecord("be0942ca-62a0-4714-a777-e60d054467c1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "list", {
get: function () {
return getUBT_IconsRecord("bff74171-1624-46a3-a510-db5d33b7bf3e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "visibility", {
get: function () {
return getUBT_IconsRecord("c176e42d-75b8-4192-9fff-c442300a50c1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "payments", {
get: function () {
return getUBT_IconsRecord("c1af3a7c-8bc1-4c0e-b1e9-bd3828753c0d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "assemble", {
get: function () {
return getUBT_IconsRecord("c23327a4-3eaf-413a-9265-01d068aafec8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "accountCircleFill", {
get: function () {
return getUBT_IconsRecord("c46a02e3-6f2c-4460-abac-b5f48a644ea7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "locationOnFill", {
get: function () {
return getUBT_IconsRecord("c483fbf3-95c0-4401-8b6f-8543ee7c35d5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "checkCircle", {
get: function () {
return getUBT_IconsRecord("c60ed7fb-f4a1-4ba3-a1f1-e5db4b751804");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "removeFill", {
get: function () {
return getUBT_IconsRecord("c7de90b6-2331-4a23-8673-820f5111cca0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "addCircle", {
get: function () {
return getUBT_IconsRecord("c996fa79-7b40-4447-8652-c9e635d4741c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowLeftAlt", {
get: function () {
return getUBT_IconsRecord("cacda8b6-18de-4d1b-ade1-be59af00de52");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "flag", {
get: function () {
return getUBT_IconsRecord("cd219881-7949-49d3-bd88-91280e24a506");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "accountCircle", {
get: function () {
return getUBT_IconsRecord("ce22e045-ec31-4e83-b5f3-9b14f1eefcbb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "shoppingBasket", {
get: function () {
return getUBT_IconsRecord("ce7fab1d-5561-4ad4-9716-40090b87af51");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "contentCopy", {
get: function () {
return getUBT_IconsRecord("cf72d202-480f-4fe5-a8c8-7021673034f7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_HR100", {
get: function () {
return getUBT_IconsRecord("d00930ac-8425-4356-b7c6-4c55c910aea8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "visibilityOff", {
get: function () {
return getUBT_IconsRecord("d08478ad-9e1a-4c88-9dba-78eaea3cb291");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "school", {
get: function () {
return getUBT_IconsRecord("d15b6b62-6b8c-45d8-b8e4-142d44c83ec9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "houseFill", {
get: function () {
return getUBT_IconsRecord("d4413405-ebb2-4d3c-bbd2-43e489cb09e8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "arrowDropUp", {
get: function () {
return getUBT_IconsRecord("d4f63836-85a1-4f9a-9d57-4a324075707c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "shoppingCart", {
get: function () {
return getUBT_IconsRecord("d7863646-a37e-4bd6-aedc-72183f218a9e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cottageFill", {
get: function () {
return getUBT_IconsRecord("d8b16ffa-c27c-4afa-b73c-6c6949fc39c8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "orbitText", {
get: function () {
return getUBT_IconsRecord("d983ec69-df26-4a49-9482-4f7aa99ceebc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "feedItem", {
get: function () {
return getUBT_IconsRecord("d99f1b4c-3673-4cc0-a3ab-b01d6059e46c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "chevronLeft", {
get: function () {
return getUBT_IconsRecord("da912e1e-5017-423f-a27d-410797f75821");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "aod", {
get: function () {
return getUBT_IconsRecord("dc9e6375-f296-4eab-900b-33553d24fab7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "moreVertical", {
get: function () {
return getUBT_IconsRecord("ddfcefe1-b2ac-4720-98ee-28658e3f4177");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "quote", {
get: function () {
return getUBT_IconsRecord("deec24f4-831f-4b87-bc37-3f92ab62ef11");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sMS", {
get: function () {
return getUBT_IconsRecord("e2b0003e-25ec-41f2-9e14-00a2237353bc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "notificationsOff", {
get: function () {
return getUBT_IconsRecord("e4119eb7-0c25-419d-8340-568a03b0e1d6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "lock", {
get: function () {
return getUBT_IconsRecord("e493382b-67d4-42e6-91b9-db927bba8425");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "warningFill", {
get: function () {
return getUBT_IconsRecord("e5c898e5-4553-49d0-a045-8f7dab8084b2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_PinHouse", {
get: function () {
return getUBT_IconsRecord("e708de25-9eb6-45b0-8a99-597ce4fddba5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "download", {
get: function () {
return getUBT_IconsRecord("e86df772-a4d7-4eb9-b75e-7b91f89d6363");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "radioChecked", {
get: function () {
return getUBT_IconsRecord("f0ef9a69-7505-43c5-a83d-c9d3b456e780");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "moreHorizontal", {
get: function () {
return getUBT_IconsRecord("f3a35331-2768-478e-8d50-e1dce38559bc");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "widgetsFill", {
get: function () {
return getUBT_IconsRecord("f3e18937-6a20-4f30-b105-b8edf0a3877e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "info", {
get: function () {
return getUBT_IconsRecord("f4cb4cb8-0378-49fb-bbf8-b3132e61c1ab");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "send", {
get: function () {
return getUBT_IconsRecord("f64340c2-0f84-4eed-b61c-a0142f3df5c6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "clock", {
get: function () {
return getUBT_IconsRecord("f6b5303c-159a-413e-9cac-f717149da346");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "household", {
get: function () {
return getUBT_IconsRecord("f70d86e0-1a95-49a7-acd6-38be58ffef5c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "sVG_PinLocality", {
get: function () {
return getUBT_IconsRecord("f919f6d4-df1b-45b3-8fae-789c332d6e6e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "autorenew", {
get: function () {
return getUBT_IconsRecord("f9654262-1712-4ec7-9486-0b4fa24e1d47");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "publish", {
get: function () {
return getUBT_IconsRecord("fa177ef4-da9a-4abb-8932-6242e54625f0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "inbox", {
get: function () {
return getUBT_IconsRecord("fada5b0e-d8d6-41af-b9d8-2be4a071cd75");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "dragIndicator", {
get: function () {
return getUBT_IconsRecord("fe74b0de-e2ce-4b19-9045-e594f412a630");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "logout", {
get: function () {
return getUBT_IconsRecord("fe7564bc-5ed5-45f4-aed5-4b2e1f5877fa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Icons, "cached", {
get: function () {
return getUBT_IconsRecord("fea2d750-e35b-49fd-9cd8-4eb34f32d8ca");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Display = {};
var getUBT_DisplayRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["788d0279-278d-48a7-91e9-a8a2af957509"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "inline", {
get: function () {
return getUBT_DisplayRecord("10e95258-2621-48ba-a88c-83b65ad2b0c6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "grid", {
get: function () {
return getUBT_DisplayRecord("15ac76a1-83d5-4756-9663-b009409c0e55");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "flex", {
get: function () {
return getUBT_DisplayRecord("1928ea7a-2e4d-4dae-93e9-9ea59a4437e4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "inlineFlex", {
get: function () {
return getUBT_DisplayRecord("5e6ea5f9-544c-40ad-b9bc-d4c5374045b7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "inlineBlock", {
get: function () {
return getUBT_DisplayRecord("99db3593-10b7-4b81-a3c8-aed6f3e0ed1b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "none", {
get: function () {
return getUBT_DisplayRecord("a16c3bc0-4369-4cd2-83b5-f2d8ffd33c01");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "contents", {
get: function () {
return getUBT_DisplayRecord("a2ba8d5d-fcfa-48de-8611-80115f286cc7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Display, "block", {
get: function () {
return getUBT_DisplayRecord("d8627c43-d0ab-4e4d-8127-84025e59be43");
}
});

UBTConnectLibraryModel.staticEntities.type_MessageChannel = {};
var getType_MessageChannelRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["7aab0e64-b188-443b-a807-40c84989d671"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_MessageChannel, "whatsApp", {
get: function () {
return getType_MessageChannelRecord("193b810d-5a87-4949-ab54-6c8993dd28c1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_MessageChannel, "call", {
get: function () {
return getType_MessageChannelRecord("aeb98f54-fb5e-4d8c-b86d-1c6c40ebfdab");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_MessageChannel, "signal", {
get: function () {
return getType_MessageChannelRecord("b5ca8f01-9724-465f-b57d-5c3a641b7292");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_MessageChannel, "email", {
get: function () {
return getType_MessageChannelRecord("bb7fe6b7-2e5e-4f51-a1bf-332eeb5c3069");
}
});

UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour = {};
var getUBT_ColumnBehaviourRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["8df84da6-4ee7-4003-94fd-7fef40c0433b"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour, "reduceMiddle", {
get: function () {
return getUBT_ColumnBehaviourRecord("1f4d7dfe-7134-4548-9b8a-5766b2870b98");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour, "sameSize", {
get: function () {
return getUBT_ColumnBehaviourRecord("2db7368c-7964-4c69-9950-a7f9ed6ce605");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour, "reduceLast", {
get: function () {
return getUBT_ColumnBehaviourRecord("349bfed5-fcc6-458c-89d1-e664e87360ac");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour, "reduceFirst", {
get: function () {
return getUBT_ColumnBehaviourRecord("e05417aa-cf89-40fa-b522-fea8d6a24000");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour, "expandMiddle", {
get: function () {
return getUBT_ColumnBehaviourRecord("e7f587ad-6cbb-4373-84c6-36e0711d9703");
}
});

UBTConnectLibraryModel.staticEntities.uBT_FlexBehavior = {};
var getUBT_FlexBehaviorRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["ae5365a0-b42f-49ae-9f26-116b862b9912"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexBehavior, "shrink", {
get: function () {
return getUBT_FlexBehaviorRecord("091380e0-d9e6-42a6-b0db-4c35c692e5b9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexBehavior, "grow", {
get: function () {
return getUBT_FlexBehaviorRecord("12a8fb9a-e089-4902-8bcd-b8c5efac7ece");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FlexBehavior, "none", {
get: function () {
return getUBT_FlexBehaviorRecord("c86cc291-c3c8-4b84-9f44-19682756ce38");
}
});

UBTConnectLibraryModel.staticEntities.type_Image = {};
var getType_ImageRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["af008a0c-4062-496b-84b9-510199a9ebfc"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Image, "oneSchool", {
get: function () {
return getType_ImageRecord("373dbe9b-ed49-482a-9ce9-29fcbd5cbf77");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Image, "household", {
get: function () {
return getType_ImageRecord("89a81a9f-2d48-4566-a4ad-bf9678c2a62a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Image, "subdivision", {
get: function () {
return getType_ImageRecord("fa600723-bbd4-47de-b2cd-dfe7c363988c");
}
});

UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth = {};
var getUBT_ColumnWidthRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["b3a04f0b-8e5c-46b6-a4ca-3c135a120966"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns6", {
get: function () {
return getUBT_ColumnWidthRecord("099efb8a-e76f-4d4d-8730-3dd5a53ba205");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns9", {
get: function () {
return getUBT_ColumnWidthRecord("0ee93f51-4ab7-44ce-ac71-d09754b29303");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns5", {
get: function () {
return getUBT_ColumnWidthRecord("15660474-b9b0-4ebc-bcf4-8a228405fc48");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns11", {
get: function () {
return getUBT_ColumnWidthRecord("185760a4-0903-4875-9bbc-9c949ab2c031");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "fill", {
get: function () {
return getUBT_ColumnWidthRecord("41cfcd34-b853-4a27-bba8-3d1e01a98901");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns4", {
get: function () {
return getUBT_ColumnWidthRecord("697b9395-be51-49fd-85e2-a89bec9575b0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns7", {
get: function () {
return getUBT_ColumnWidthRecord("826877a2-01e6-4625-9b3c-52d66203aebf");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns1", {
get: function () {
return getUBT_ColumnWidthRecord("a30e72c5-8f98-449b-af01-356772eb19f2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns3", {
get: function () {
return getUBT_ColumnWidthRecord("ab9d9ace-44b1-4db6-a52d-2db3a28100b6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns8", {
get: function () {
return getUBT_ColumnWidthRecord("c36c011d-60bc-41d9-8d5c-afbe9781d13b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns10", {
get: function () {
return getUBT_ColumnWidthRecord("c4f3b2c5-85ff-45ee-bf9b-68cf5fe2b1e8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth, "columns2", {
get: function () {
return getUBT_ColumnWidthRecord("e35fa3fb-026b-4ea7-bede-2e337f84f600");
}
});

UBTConnectLibraryModel.staticEntities.uBT_FontSize = {};
var getUBT_FontSizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["b7b01d95-224a-4a59-8320-00ac87c8c15d"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "heading1", {
get: function () {
return getUBT_FontSizeRecord("1a0d6a49-f43e-40ee-a8fd-0066a663ecf2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "doubleExtraSmall", {
get: function () {
return getUBT_FontSizeRecord("4aec019d-0785-4536-8d5d-ccd64a8f1cb2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "heading6", {
get: function () {
return getUBT_FontSizeRecord("59c90066-6dc3-47f2-a136-b66c9b6a4769");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "heading3", {
get: function () {
return getUBT_FontSizeRecord("687365cc-97da-4fc7-ba13-59ec4b73f5e4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "heading2", {
get: function () {
return getUBT_FontSizeRecord("6ffca60c-607f-4ec0-8e6e-d7ebd942f6d4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "base", {
get: function () {
return getUBT_FontSizeRecord("81883c37-ffcd-4a9c-8214-da3cce9318e9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "label", {
get: function () {
return getUBT_FontSizeRecord("a2605a0a-6427-4966-adf2-667e245ccf2f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "extraSmall", {
get: function () {
return getUBT_FontSizeRecord("a87a69cd-c0ae-4561-9dd6-a8bdc20ca209");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "heading4", {
get: function () {
return getUBT_FontSizeRecord("caeebac3-8ee1-4b13-b099-5987cab93997");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "small", {
get: function () {
return getUBT_FontSizeRecord("d85f0341-b6d0-4460-b8f1-77218c0e044d");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "heading5", {
get: function () {
return getUBT_FontSizeRecord("e9e010dd-3a7f-45c8-af50-6d1ca540a50c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_FontSize, "display", {
get: function () {
return getUBT_FontSizeRecord("e9eb6493-6ec3-431c-a967-b22b98eaca78");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Size_ImageWidth = {};
var getUBT_Size_ImageWidthRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["ba77d040-3a01-407a-a210-5b36659443ff"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size_ImageWidth, "fullWidth_100Percent", {
get: function () {
return getUBT_Size_ImageWidthRecord("58e31eb9-0465-456c-b390-9caf980a7950");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size_ImageWidth, "square_SameHeight", {
get: function () {
return getUBT_Size_ImageWidthRecord("6897c545-f87e-4c85-ad1f-26b3de81a02e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size_ImageWidth, "maxWidth_100vw", {
get: function () {
return getUBT_Size_ImageWidthRecord("b38e655a-024f-470b-8209-a806d720ad6b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size_ImageWidth, "listThumbnail_104px", {
get: function () {
return getUBT_Size_ImageWidthRecord("b9facc48-6393-434f-a822-f377e6966291");
}
});

UBTConnectLibraryModel.staticEntities.type_Notification = {};
var getType_NotificationRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["cf027ab4-3ca6-4a7b-9bef-0ca2a0b01bcd"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Notification, "lDM_Upcoming", {
get: function () {
return getType_NotificationRecord("03d04a04-e7df-4060-84bf-29dbff218fdb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Notification, "household_Bookmarked", {
get: function () {
return getType_NotificationRecord("12802c59-cdc5-49b5-9fe2-71431eee2895");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Notification, "assemble_Canceled", {
get: function () {
return getType_NotificationRecord("3bacdb58-8ebc-460e-ae43-99f833228845");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.type_Notification, "orbit_Booked", {
get: function () {
return getType_NotificationRecord("a5893e69-2b6a-4a1c-989c-14d1a7e9cb0a");
}
});

UBTConnectLibraryModel.staticEntities.uBT_AvatarSize = {};
var getUBT_AvatarSizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["cfc77058-26f2-42a2-b2c8-02a6d2a82a1d"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "smallBase_48", {
get: function () {
return getUBT_AvatarSizeRecord("078547e7-dd0c-40d7-a96e-130c2ab66af7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "doubleExtraLarge_176", {
get: function () {
return getUBT_AvatarSizeRecord("3365b541-7ef0-43d0-bb25-541ac5b7b0b9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "medium_60", {
get: function () {
return getUBT_AvatarSizeRecord("3f4ce68f-bfe8-4af0-8c73-f3e2b523859b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "large_65", {
get: function () {
return getUBT_AvatarSizeRecord("775b02bb-c577-4906-9f9e-33f8503674d1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "extraSmall_32", {
get: function () {
return getUBT_AvatarSizeRecord("823268fa-1c77-479d-afc0-3990a459ca05");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "fullHeight_100vh", {
get: function () {
return getUBT_AvatarSizeRecord("a9e89f87-bf60-49a3-9cba-ff640e2e10e0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "doubleExtraSmall_20", {
get: function () {
return getUBT_AvatarSizeRecord("c30f48f7-bbeb-4466-ae5d-74928ad7bf79");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "fullHeight_100PerCent", {
get: function () {
return getUBT_AvatarSizeRecord("d0112654-90f7-4a27-818b-f8c8de9f7705");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "small_40", {
get: function () {
return getUBT_AvatarSizeRecord("e01639de-7335-42dd-b592-54e53cfc36c9");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "extraLarge_100", {
get: function () {
return getUBT_AvatarSizeRecord("e2286c5e-37fd-48ea-8200-8f3d7c5ae0fd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AvatarSize, "base_52", {
get: function () {
return getUBT_AvatarSizeRecord("fe78b036-f038-442d-826b-7224a60e5a90");
}
});

UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign = {};
var getUBT_VerticalAlignRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["dba31182-5195-4ea6-9502-37195d2de889"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign, "top", {
get: function () {
return getUBT_VerticalAlignRecord("1d66013f-d870-4e82-8e8c-57001bd31586");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign, "center", {
get: function () {
return getUBT_VerticalAlignRecord("2f06c740-a5bd-416a-8912-fe4d8341c208");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign, "bottom", {
get: function () {
return getUBT_VerticalAlignRecord("b42c001f-fb60-41ed-9910-aa1792e5dd25");
}
});

UBTConnectLibraryModel.staticEntities.uBT_Size = {};
var getUBT_SizeRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["e18a3aeb-48c0-4cfb-ae8a-f06bd2918ec5"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "doubleExtraLarge", {
get: function () {
return getUBT_SizeRecord("0844bebb-5226-468b-86e8-72f61a7f93e0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "none", {
get: function () {
return getUBT_SizeRecord("08be7f0b-cf16-46c6-b25c-3a0a6cb01158");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "medium", {
get: function () {
return getUBT_SizeRecord("355f0849-d9d4-4fec-872e-d4a426c7aada");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "extraLarge", {
get: function () {
return getUBT_SizeRecord("3615c822-6889-4ddd-abe2-01c202138a9e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "base", {
get: function () {
return getUBT_SizeRecord("531e9a8b-9545-4d16-84c5-d14341c81aeb");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "extraSmall", {
get: function () {
return getUBT_SizeRecord("7a79672a-3f95-45d0-a13f-03aa177f7bc4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "smallBase", {
get: function () {
return getUBT_SizeRecord("8cf9b30a-d783-4182-a793-67935fb7ba2f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "large", {
get: function () {
return getUBT_SizeRecord("adc0cb24-0a84-47c6-b2ac-c842b0fdb94a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_Size, "small", {
get: function () {
return getUBT_SizeRecord("e7190f3c-0aab-4540-befc-7a7373406b70");
}
});

UBTConnectLibraryModel.staticEntities.uBT_AlignItems = {};
var getUBT_AlignItemsRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["ef20f8b6-ead3-41fd-a61c-6c26d63b6a09"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AlignItems, "baseline", {
get: function () {
return getUBT_AlignItemsRecord("451f3ad7-e7f7-4e98-9d62-07f2892ab3f5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AlignItems, "flexEnd", {
get: function () {
return getUBT_AlignItemsRecord("593674c7-eb16-4547-83f6-7d173ed68ccf");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AlignItems, "stretch", {
get: function () {
return getUBT_AlignItemsRecord("5a5836ac-05bb-46cb-bc00-0e8ef31058c3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AlignItems, "flexStart", {
get: function () {
return getUBT_AlignItemsRecord("9c4d4839-520e-4082-bb9d-dac54b468b14");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AlignItems, "initial", {
get: function () {
return getUBT_AlignItemsRecord("aacc2464-a262-4d71-9bbe-025928cf61cd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_AlignItems, "center", {
get: function () {
return getUBT_AlignItemsRecord("d779580f-949e-4fdb-961a-2274c3ded3df");
}
});

UBTConnectLibraryModel.staticEntities.uBT_JustifyContent = {};
var getUBT_JustifyContentRecord = function (record) {
return UBTConnectLibraryModel.module.staticEntities["fccf52bc-cce2-4388-977f-e898cce5e19d"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_JustifyContent, "center", {
get: function () {
return getUBT_JustifyContentRecord("0d0a4d49-ec75-4b17-8c51-86a351b60e37");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_JustifyContent, "spaceBetween", {
get: function () {
return getUBT_JustifyContentRecord("14952e85-4de0-413d-b778-78560b8791f7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_JustifyContent, "spaceEvenly", {
get: function () {
return getUBT_JustifyContentRecord("284e0a35-afe8-4267-85c5-1367e4e3532c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_JustifyContent, "flexStart", {
get: function () {
return getUBT_JustifyContentRecord("bd0d7542-c511-47d1-aedc-748f1295bf47");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_JustifyContent, "flexEnd", {
get: function () {
return getUBT_JustifyContentRecord("bdb75f84-82e3-4d56-a3ad-ef175be27eaa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_JustifyContent, "spaceAround", {
get: function () {
return getUBT_JustifyContentRecord("cf62fd88-4e8c-465c-878d-3996e2ae1e5d");
}
});

UBTConnectLibraryModel.staticEntities.uBT_MessageType = {};
var getUBT_MessageTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["2c2986c3-daaf-4dc5-a0c6-d9a75a42125d"].staticEntities["5a451e53-0d4f-4a13-8dcd-d2c12db5eb4f"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_MessageType, "error", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("11de012f-8214-4480-bc41-e674f8463a2a"));
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_MessageType, "success", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("232e2df8-4514-48c8-bd5d-136ff9bc8cf0"));
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_MessageType, "info", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("b69f4bc5-4211-4808-ae64-b62df5426873"));
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.uBT_MessageType, "warning", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("d02ae75c-15a9-4617-abb2-814d976949d2"));
}
});

UBTConnectLibraryModel.staticEntities.size = {};
var getSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.size, "medium", {
get: function () {
return getSizeRecord("0f4cba2c-32d2-4bef-b0e8-0ecd7eadbffa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.size, "small", {
get: function () {
return getSizeRecord("9133cb8a-ca17-4e39-a9fd-4a07cf123c82");
}
});

UBTConnectLibraryModel.staticEntities.gutterSize = {};
var getGutterSizeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "xXLarge", {
get: function () {
return getGutterSizeRecord("087ea4c4-96ff-4fc5-87c9-70e35c61fe6e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "medium", {
get: function () {
return getGutterSizeRecord("12874371-fb77-4707-afda-cdddbba81173");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "none", {
get: function () {
return getGutterSizeRecord("1a6cb2a2-b448-4f08-ba92-5bd24d30a422");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "extraLarge", {
get: function () {
return getGutterSizeRecord("8d669ecd-b220-4b80-b57b-4700987734dd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "small", {
get: function () {
return getGutterSizeRecord("96f816b9-2511-49f9-8e9c-c6ab4ff8683e");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "large", {
get: function () {
return getGutterSizeRecord("a9dce78b-0487-49ef-b5c0-d3054293816b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "base", {
get: function () {
return getGutterSizeRecord("b7549354-102c-45e6-8c2e-b171c6f589c5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gutterSize, "extraSmall", {
get: function () {
return getGutterSizeRecord("b8734df5-7557-4609-a566-cf5c35a6dade");
}
});

UBTConnectLibraryModel.staticEntities.breakColumns = {};
var getBreakColumnsRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.breakColumns, "none", {
get: function () {
return getBreakColumnsRecord("0712904e-03be-4b5f-9b9e-ecc640f84913");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.breakColumns, "first", {
get: function () {
return getBreakColumnsRecord("3d55ca44-9c70-4bd4-bf96-7d0a7ec1c3b6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.breakColumns, "all", {
get: function () {
return getBreakColumnsRecord("63e0af38-8b6c-4970-b96a-acd8c6d863e4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.breakColumns, "middle", {
get: function () {
return getBreakColumnsRecord("694d423c-ce17-45a1-9993-cb57c30ec674");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.breakColumns, "last", {
get: function () {
return getBreakColumnsRecord("6c98320a-c178-4925-b42b-7165ed805ea0");
}
});

UBTConnectLibraryModel.staticEntities.shape = {};
var getShapeRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.shape, "sharp", {
get: function () {
return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.shape, "softRounded", {
get: function () {
return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.shape, "rounded", {
get: function () {
return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
}
});

UBTConnectLibraryModel.staticEntities.position = {};
var getPositionRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "top", {
get: function () {
return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "left", {
get: function () {
return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "bottomRight", {
get: function () {
return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "bottomLeft", {
get: function () {
return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "right", {
get: function () {
return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "topLeft", {
get: function () {
return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "topRight", {
get: function () {
return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "center", {
get: function () {
return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.position, "bottom", {
get: function () {
return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
}
});

UBTConnectLibraryModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral9", {
get: function () {
return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "grape", {
get: function () {
return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral7", {
get: function () {
return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral10", {
get: function () {
return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "teal", {
get: function () {
return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "primary", {
get: function () {
return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral4", {
get: function () {
return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral8", {
get: function () {
return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "indigo", {
get: function () {
return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "lime", {
get: function () {
return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "cyan", {
get: function () {
return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "secondary", {
get: function () {
return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral6", {
get: function () {
return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "yellow", {
get: function () {
return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral2", {
get: function () {
return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral1", {
get: function () {
return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral3", {
get: function () {
return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "transparent", {
get: function () {
return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral5", {
get: function () {
return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "pink", {
get: function () {
return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.color, "neutral0", {
get: function () {
return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
}
});

UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId = {};
var getConnect_UpdateTypeIdRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["24c050e5-7f40-4850-a421-d01b448ced19"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId, "birth", {
get: function () {
return getConnect_UpdateTypeIdRecord("63333b01-0f51-4174-9cda-c15731e66075");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId, "marriage", {
get: function () {
return getConnect_UpdateTypeIdRecord("b7d823ee-1bb4-49ba-85ac-3e707804a5aa");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId, "taken", {
get: function () {
return getConnect_UpdateTypeIdRecord("fe340bb6-94a0-40cf-b19e-7508ad0b862c");
}
});

UBTConnectLibraryModel.staticEntities.gender = {};
var getGenderRecord = function (record) {
return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["ab1ec29b-f00e-4ce6-b34d-08a06292a2b7"][record];
};
Object.defineProperty(UBTConnectLibraryModel.staticEntities.gender, "mALE", {
get: function () {
return getGenderRecord("5e6c743b-4fda-434f-9f40-1b12af24f119");
}
});

Object.defineProperty(UBTConnectLibraryModel.staticEntities.gender, "fEMALE", {
get: function () {
return getGenderRecord("b3e7a95d-c88b-4bae-800c-70a03882e45a");
}
});

});
