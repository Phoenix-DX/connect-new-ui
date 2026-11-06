define("Connect_Communication_CS.model$UI_ContactByEmailFormRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Communication_CS.model"], function (exports, OutSystems, Connect_Communication_CSModel) {
var OS = OutSystems.Internal;
var UI_ContactByEmailFormRec = (function (_super) {
__extends(UI_ContactByEmailFormRec, _super);
function UI_ContactByEmailFormRec(defaults) {
_super.apply(this, arguments);
}
UI_ContactByEmailFormRec.attributesToDeclare = function () {
return [
this.attr("Subject", "subjectAttr", "Subject", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailTo", "emailToAttr", "EmailTo", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("ContactMember", "contactMemberAttr", "ContactMember", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_ContactByEmailFormRec.init();
return UI_ContactByEmailFormRec;
})(OS.DataTypes.GenericRecord);
Connect_Communication_CSModel.UI_ContactByEmailFormRec = UI_ContactByEmailFormRec;

});
define("Connect_Communication_CS.model$UI_ContactUsFormRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Communication_CS.model"], function (exports, OutSystems, Connect_Communication_CSModel) {
var OS = OutSystems.Internal;
var UI_ContactUsFormRec = (function (_super) {
__extends(UI_ContactUsFormRec, _super);
function UI_ContactUsFormRec(defaults) {
_super.apply(this, arguments);
}
UI_ContactUsFormRec.attributesToDeclare = function () {
return [
this.attr("FullName", "fullNameAttr", "FullName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", true, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_ContactUsFormRec.init();
return UI_ContactUsFormRec;
})(OS.DataTypes.GenericRecord);
Connect_Communication_CSModel.UI_ContactUsFormRec = UI_ContactUsFormRec;

});
define("Connect_Communication_CS.model$Type_ContactSubjectRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Communication_CS.model"], function (exports, OutSystems, Connect_Communication_CSModel) {
var OS = OutSystems.Internal;
var Type_ContactSubjectRec = (function (_super) {
__extends(Type_ContactSubjectRec, _super);
function Type_ContactSubjectRec(defaults) {
_super.apply(this, arguments);
}
Type_ContactSubjectRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Type_ContactSubjectRec.init();
return Type_ContactSubjectRec;
})(OS.DataTypes.GenericRecord);
Connect_Communication_CSModel.Type_ContactSubjectRec = Type_ContactSubjectRec;

});
define("Connect_Communication_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Communication_CSModel = exports;
});
