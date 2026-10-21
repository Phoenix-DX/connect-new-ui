define("Connect_Search_CS.model$SearchResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model"], function (exports, OutSystems, Connect_Search_CSModel) {
var OS = OutSystems.Internal;
var SearchResultRec = (function (_super) {
__extends(SearchResultRec, _super);
function SearchResultRec(defaults) {
_super.apply(this, arguments);
}
SearchResultRec.attributesToDeclare = function () {
return [
this.attr("Score", "scoreAttr", "score", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderId", "householderIdAttr", "householderId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdditionalInformation", "additionalInformationAttr", "additionalInformation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordDisabled", "recordDisabledAttr", "recordDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Latitude", "latitudeAttr", "Latitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Longitude", "longitudeAttr", "Longitude", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SearchResultRec.init();
return SearchResultRec;
})(OS.DataTypes.GenericRecord);
Connect_Search_CSModel.SearchResultRec = SearchResultRec;

});
define("Connect_Search_CS.model$Type_SearchTargetRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Search_CS.model"], function (exports, OutSystems, Connect_Search_CSModel) {
var OS = OutSystems.Internal;
var Type_SearchTargetRec = (function (_super) {
__extends(Type_SearchTargetRec, _super);
function Type_SearchTargetRec(defaults) {
_super.apply(this, arguments);
}
Type_SearchTargetRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_SearchTargetRec.init();
return Type_SearchTargetRec;
})(OS.DataTypes.GenericRecord);
Connect_Search_CSModel.Type_SearchTargetRec = Type_SearchTargetRec;

});
define("Connect_Search_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Search_CSModel = exports;
});
