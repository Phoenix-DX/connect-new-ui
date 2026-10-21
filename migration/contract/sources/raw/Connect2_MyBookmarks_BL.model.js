define("Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel) {
var OS = OutSystems.Internal;
var MyBookmarks_GroupRec = (function (_super) {
__extends(MyBookmarks_GroupRec, _super);
function MyBookmarks_GroupRec(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_GroupRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("SynchOrder", "synchOrderAttr", "SynchOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_GroupRec.init();
return MyBookmarks_GroupRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec = MyBookmarks_GroupRec;

});
define("Connect2_MyBookmarks_BL.model$MyBookmarks_SortColumnRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model"], function (exports, OutSystems, Connect2_MyBookmarks_BLModel) {
var OS = OutSystems.Internal;
var MyBookmarks_SortColumnRec = (function (_super) {
__extends(MyBookmarks_SortColumnRec, _super);
function MyBookmarks_SortColumnRec(defaults) {
_super.apply(this, arguments);
}
MyBookmarks_SortColumnRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MyBookmarks_SortColumnRec.fromStructure = function (str) {
return new MyBookmarks_SortColumnRec(new MyBookmarks_SortColumnRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MyBookmarks_SortColumnRec.init();
return MyBookmarks_SortColumnRec;
})(OS.DataTypes.GenericRecord);
Connect2_MyBookmarks_BLModel.MyBookmarks_SortColumnRec = MyBookmarks_SortColumnRec;

});
define("Connect2_MyBookmarks_BL.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_MyBookmarks_BLModel = exports;
});
