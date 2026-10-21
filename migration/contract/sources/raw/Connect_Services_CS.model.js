define("Connect_Services_CS.model$Connect_ServicesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Services_CS.model"], function (exports, OutSystems, Connect_Services_CSModel) {
var OS = OutSystems.Internal;
var Connect_ServicesRec = (function (_super) {
__extends(Connect_ServicesRec, _super);
function Connect_ServicesRec(defaults) {
_super.apply(this, arguments);
}
Connect_ServicesRec.attributesToDeclare = function () {
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
}, true), 
this.attr("IconId", "iconIdAttr", "IconId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isMandatory", "isMandatoryAttr", "isMandatory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StartAsDefault", "startAsDefaultAttr", "StartAsDefault", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_ServicesRec.init();
return Connect_ServicesRec;
})(OS.DataTypes.GenericRecord);
Connect_Services_CSModel.Connect_ServicesRec = Connect_ServicesRec;

});
define("Connect_Services_CS.model$Connect_Service_UserRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Services_CS.model"], function (exports, OutSystems, Connect_Services_CSModel) {
var OS = OutSystems.Internal;
var Connect_Service_UserRec = (function (_super) {
__extends(Connect_Service_UserRec, _super);
function Connect_Service_UserRec(defaults) {
_super.apply(this, arguments);
}
Connect_Service_UserRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ConnectServiceId", "connectServiceIdAttr", "ConnectServiceId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastChangedOn", "lastChangedOnAttr", "LastChangedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_Service_UserRec.init();
return Connect_Service_UserRec;
})(OS.DataTypes.GenericRecord);
Connect_Services_CSModel.Connect_Service_UserRec = Connect_Service_UserRec;

});
define("Connect_Services_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Services_CSModel = exports;
});
