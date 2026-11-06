define("Connect_Feed_CS.model$FeedItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Feed_CS.model"], function (exports, OutSystems, Connect_Feed_CSModel) {
var OS = OutSystems.Internal;
var FeedItemRec = (function (_super) {
__extends(FeedItemRec, _super);
function FeedItemRec(defaults) {
_super.apply(this, arguments);
}
FeedItemRec.attributesToDeclare = function () {
return [
this.attr("CategoryId", "categoryIdAttr", "CategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TemplateId", "templateIdAttr", "TemplateId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ImageURL", "imageURLAttr", "ImageURL", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("MainColor", "mainColorAttr", "MainColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SecondaryColor", "secondaryColorAttr", "SecondaryColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FeedItemRec.init();
return FeedItemRec;
})(OS.DataTypes.GenericRecord);
Connect_Feed_CSModel.FeedItemRec = FeedItemRec;

});
define("Connect_Feed_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Feed_CSModel = exports;
});
