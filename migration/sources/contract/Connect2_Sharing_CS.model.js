define("Connect2_Sharing_CS.model$Type_ExternalShareOptionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model"], function (exports, OutSystems, Connect2_Sharing_CSModel) {
var OS = OutSystems.Internal;
var Type_ExternalShareOptionRec = (function (_super) {
__extends(Type_ExternalShareOptionRec, _super);
function Type_ExternalShareOptionRec(defaults) {
_super.apply(this, arguments);
}
Type_ExternalShareOptionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_ExternalShareOptionRec.init();
return Type_ExternalShareOptionRec;
})(OS.DataTypes.GenericRecord);
Connect2_Sharing_CSModel.Type_ExternalShareOptionRec = Type_ExternalShareOptionRec;

});
define("Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model"], function (exports, OutSystems, Connect2_Sharing_CSModel) {
var OS = OutSystems.Internal;
var UI_ShareableObject_GenericRec = (function (_super) {
__extends(UI_ShareableObject_GenericRec, _super);
function UI_ShareableObject_GenericRec(defaults) {
_super.apply(this, arguments);
}
UI_ShareableObject_GenericRec.attributesToDeclare = function () {
return [
this.attr("ConnectEntityTypeId", "connectEntityTypeIdAttr", "ConnectEntityTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subtitle", "subtitleAttr", "Subtitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_ShareableObject_GenericRec.init();
return UI_ShareableObject_GenericRec;
})(OS.DataTypes.GenericRecord);
Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec = UI_ShareableObject_GenericRec;

});
define("Connect2_Sharing_CS.model$Type_ShareObjectRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model"], function (exports, OutSystems, Connect2_Sharing_CSModel) {
var OS = OutSystems.Internal;
var Type_ShareObjectRec = (function (_super) {
__extends(Type_ShareObjectRec, _super);
function Type_ShareObjectRec(defaults) {
_super.apply(this, arguments);
}
Type_ShareObjectRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LabelPrefix", "labelPrefixAttr", "LabelPrefix", false, false, OS.DataTypes.DataTypes.Text, function () {
return "this";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NotificationTitle", "notificationTitleAttr", "NotificationTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("APIKey", "aPIKeyAttr", "APIKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_ShareObjectRec.init();
return Type_ShareObjectRec;
})(OS.DataTypes.GenericRecord);
Connect2_Sharing_CSModel.Type_ShareObjectRec = Type_ShareObjectRec;

});
define("Connect2_Sharing_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_Sharing_CSModel = exports;
});
