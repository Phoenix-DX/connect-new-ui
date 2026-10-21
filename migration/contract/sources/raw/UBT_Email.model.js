define("UBT_Email.model$SubscriptionUserDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var SubscriptionUserDetailsRec = (function (_super) {
__extends(SubscriptionUserDetailsRec, _super);
function SubscriptionUserDetailsRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionUserDetailsRec.attributesToDeclare = function () {
return [
this.attr("end_date", "end_dateAttr", "end_date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionUserDetailsRec.init();
return SubscriptionUserDetailsRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.SubscriptionUserDetailsRec = SubscriptionUserDetailsRec;

});
define("UBT_Email.model$SignatureRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var SignatureRec = (function (_super) {
__extends(SignatureRec, _super);
function SignatureRec(defaults) {
_super.apply(this, arguments);
}
SignatureRec.attributesToDeclare = function () {
return [
this.attr("signature_website_link", "signature_website_linkAttr", "signature_website_link", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignatureRec.fromStructure = function (str) {
return new SignatureRec(new SignatureRec.RecordClass({
signature_website_linkAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SignatureRec.init();
return SignatureRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.SignatureRec = SignatureRec;

});
define("UBT_Email.model$CancelledUserRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SubscriptionUserDetailsRec", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var CancelledUserRequestRec = (function (_super) {
__extends(CancelledUserRequestRec, _super);
function CancelledUserRequestRec(defaults) {
_super.apply(this, arguments);
}
CancelledUserRequestRec.attributesToDeclare = function () {
return [
this.attr("SubscriptionDetails", "subscriptionDetailsAttr", "SubscriptionDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SubscriptionUserDetailsRec());
}, true, UBT_EmailModel.SubscriptionUserDetailsRec), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
CancelledUserRequestRec.init();
return CancelledUserRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.CancelledUserRequestRec = CancelledUserRequestRec;

});
define("UBT_Email.model$NewSignUpRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var NewSignUpRequestRec = (function (_super) {
__extends(NewSignUpRequestRec, _super);
function NewSignUpRequestRec(defaults) {
_super.apply(this, arguments);
}
NewSignUpRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec), 
this.attr("subscription_id", "subscription_idAttr", "subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscription_type", "subscription_typeAttr", "subscription_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NewSignUpRequestRec.init();
return NewSignUpRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.NewSignUpRequestRec = NewSignUpRequestRec;

});
define("UBT_Email.model$NoReplyRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var NoReplyRequestRec = (function (_super) {
__extends(NoReplyRequestRec, _super);
function NoReplyRequestRec(defaults) {
_super.apply(this, arguments);
}
NoReplyRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
NoReplyRequestRec.init();
return NoReplyRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.NoReplyRequestRec = NoReplyRequestRec;

});
define("UBT_Email.model$CommnunityMemberMessageRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var CommnunityMemberMessageRequestRec = (function (_super) {
__extends(CommnunityMemberMessageRequestRec, _super);
function CommnunityMemberMessageRequestRec(defaults) {
_super.apply(this, arguments);
}
CommnunityMemberMessageRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("full_name", "full_nameAttr", "full_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("message_content", "message_contentAttr", "message_content", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("sender_name", "sender_nameAttr", "sender_name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("display_entity", "display_entityAttr", "display_entity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("entity_logo", "entity_logoAttr", "entity_logo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("entity_name", "entity_nameAttr", "entity_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CommnunityMemberMessageRequestRec.init();
return CommnunityMemberMessageRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.CommnunityMemberMessageRequestRec = CommnunityMemberMessageRequestRec;

});
define("UBT_Email.model$UserContactRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var UserContactRequestRec = (function (_super) {
__extends(UserContactRequestRec, _super);
function UserContactRequestRec(defaults) {
_super.apply(this, arguments);
}
UserContactRequestRec.attributesToDeclare = function () {
return [
this.attr("EmailTo", "emailToAttr", "EmailTo", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("ContactMember", "contactMemberAttr", "ContactMember", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstNameSender", "firstNameSenderAttr", "FirstNameSender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastNameSender", "lastNameSenderAttr", "LastNameSender", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subject", "subjectAttr", "Subject", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailFrom", "emailFromAttr", "EmailFrom", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("SenderPhone", "senderPhoneAttr", "SenderPhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("SenderLocality", "senderLocalityAttr", "SenderLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SenderCountry", "senderCountryAttr", "SenderCountry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserContactRequestRec.init();
return UserContactRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.UserContactRequestRec = UserContactRequestRec;

});
define("UBT_Email.model$PasswordResetNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var PasswordResetNotificationRec = (function (_super) {
__extends(PasswordResetNotificationRec, _super);
function PasswordResetNotificationRec(defaults) {
_super.apply(this, arguments);
}
PasswordResetNotificationRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
PasswordResetNotificationRec.init();
return PasswordResetNotificationRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.PasswordResetNotificationRec = PasswordResetNotificationRec;

});
define("UBT_Email.model$AddUserRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var AddUserRec = (function (_super) {
__extends(AddUserRec, _super);
function AddUserRec(defaults) {
_super.apply(this, arguments);
}
AddUserRec.attributesToDeclare = function () {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionType", "subscriptionTypeAttr", "SubscriptionType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Reason", "reasonAttr", "Reason", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("FirstNameAdmin", "firstNameAdminAttr", "FirstNameAdmin", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApproverEmail", "approverEmailAttr", "ApproverEmail", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("IsAddUser", "isAddUserAttr", "IsAddUser", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("URL_External", "uRL_ExternalAttr", "URL_External", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastNameAdmin", "lastNameAdminAttr", "LastNameAdmin", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AddUserRec.init();
return AddUserRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.AddUserRec = AddUserRec;

});
define("UBT_Email.model$ChangeEmailRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ChangeEmailRequestRec = (function (_super) {
__extends(ChangeEmailRequestRec, _super);
function ChangeEmailRequestRec(defaults) {
_super.apply(this, arguments);
}
ChangeEmailRequestRec.attributesToDeclare = function () {
return [
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("confirm_email_url", "confirm_email_urlAttr", "confirm_email_url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
ChangeEmailRequestRec.init();
return ChangeEmailRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ChangeEmailRequestRec = ChangeEmailRequestRec;

});
define("UBT_Email.model$DowngradedUserRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var DowngradedUserRequestRec = (function (_super) {
__extends(DowngradedUserRequestRec, _super);
function DowngradedUserRequestRec(defaults) {
_super.apply(this, arguments);
}
DowngradedUserRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("full_name", "full_nameAttr", "full_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("old_subscription_id", "old_subscription_idAttr", "old_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_subscription_id", "new_subscription_idAttr", "new_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("old_Subscription_Type", "old_Subscription_TypeAttr", "old_Subscription_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_Subscription_Type", "new_Subscription_TypeAttr", "new_Subscription_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("start_date", "start_dateAttr", "start_date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
DowngradedUserRequestRec.init();
return DowngradedUserRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.DowngradedUserRequestRec = DowngradedUserRequestRec;

});
define("UBT_Email.model$OrbitEmailInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var OrbitEmailInformationRec = (function (_super) {
__extends(OrbitEmailInformationRec, _super);
function OrbitEmailInformationRec(defaults) {
_super.apply(this, arguments);
}
OrbitEmailInformationRec.attributesToDeclare = function () {
return [
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SenderFullName", "senderFullNameAttr", "SenderFullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SenderEmail", "senderEmailAttr", "SenderEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostName", "hostNameAttr", "HostName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HostEmail", "hostEmailAttr", "HostEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneName", "milestoneNameAttr", "MilestoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedDateTime", "formattedDateTimeAttr", "FormattedDateTime", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetHelpdeskEmail", "targetHelpdeskEmailAttr", "TargetHelpdeskEmail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrbitEmailInformationRec.init();
return OrbitEmailInformationRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.OrbitEmailInformationRec = OrbitEmailInformationRec;

});
define("UBT_Email.model$UpgradedAdminRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var UpgradedAdminRequestRec = (function (_super) {
__extends(UpgradedAdminRequestRec, _super);
function UpgradedAdminRequestRec(defaults) {
_super.apply(this, arguments);
}
UpgradedAdminRequestRec.attributesToDeclare = function () {
return [
this.attr("old_subscription_id", "old_subscription_idAttr", "old_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_subscription_id", "new_subscription_idAttr", "new_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("old_Subscription_Type", "old_Subscription_TypeAttr", "old_Subscription_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_Subscription_Type", "new_Subscription_TypeAttr", "new_Subscription_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("next_billing_date", "next_billing_dateAttr", "next_billing_date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("subscriber_first_name", "subscriber_first_nameAttr", "subscriber_first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_last_name", "subscriber_last_nameAttr", "subscriber_last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_email", "subscriber_emailAttr", "subscriber_email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("subscriber_locality", "subscriber_localityAttr", "subscriber_locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("home_phone", "home_phoneAttr", "home_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("mobile_phone", "mobile_phoneAttr", "mobile_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec), 
this.attr("To", "toAttr", "To", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpgradedAdminRequestRec.init();
return UpgradedAdminRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.UpgradedAdminRequestRec = UpgradedAdminRequestRec;

});
define("UBT_Email.model$HelpFeedbackInquireRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var HelpFeedbackInquireRec = (function (_super) {
__extends(HelpFeedbackInquireRec, _super);
function HelpFeedbackInquireRec(defaults) {
_super.apply(this, arguments);
}
HelpFeedbackInquireRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HelpFeedbackInquireRec.init();
return HelpFeedbackInquireRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.HelpFeedbackInquireRec = HelpFeedbackInquireRec;

});
define("UBT_Email.model$DowngradedAdminRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var DowngradedAdminRequestRec = (function (_super) {
__extends(DowngradedAdminRequestRec, _super);
function DowngradedAdminRequestRec(defaults) {
_super.apply(this, arguments);
}
DowngradedAdminRequestRec.attributesToDeclare = function () {
return [
this.attr("old_subscription_id", "old_subscription_idAttr", "old_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_subscription_id", "new_subscription_idAttr", "new_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("old_Subscription_Type", "old_Subscription_TypeAttr", "old_Subscription_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_Subscription_Type", "new_Subscription_TypeAttr", "new_Subscription_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("start_date", "start_dateAttr", "start_date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("next_billing_date", "next_billing_dateAttr", "next_billing_date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("subscriber_first_name", "subscriber_first_nameAttr", "subscriber_first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_last_name", "subscriber_last_nameAttr", "subscriber_last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_email", "subscriber_emailAttr", "subscriber_email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("subscriber_locality", "subscriber_localityAttr", "subscriber_locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("home_phone", "home_phoneAttr", "home_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("mobile_phone", "mobile_phoneAttr", "mobile_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec), 
this.attr("To", "toAttr", "To", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DowngradedAdminRequestRec.init();
return DowngradedAdminRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.DowngradedAdminRequestRec = DowngradedAdminRequestRec;

});
define("UBT_Email.model$SubscriberRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var SubscriberRec = (function (_super) {
__extends(SubscriberRec, _super);
function SubscriberRec(defaults) {
_super.apply(this, arguments);
}
SubscriberRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriberRec.fromStructure = function (str) {
return new SubscriberRec(new SubscriberRec.RecordClass({
emailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SubscriberRec.init();
return SubscriberRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.SubscriberRec = SubscriberRec;

});
define("UBT_Email.model$SubscriptionAdminDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var SubscriptionAdminDetailsRec = (function (_super) {
__extends(SubscriptionAdminDetailsRec, _super);
function SubscriptionAdminDetailsRec(defaults) {
_super.apply(this, arguments);
}
SubscriptionAdminDetailsRec.attributesToDeclare = function () {
return [
this.attr("subscription_id", "subscription_idAttr", "subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("end_date", "end_dateAttr", "end_date", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("subscriber_first_name", "subscriber_first_nameAttr", "subscriber_first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_last_name", "subscriber_last_nameAttr", "subscriber_last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_email", "subscriber_emailAttr", "subscriber_email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("subscriber_locality", "subscriber_localityAttr", "subscriber_locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("home_phone", "home_phoneAttr", "home_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("mobile_phone", "mobile_phoneAttr", "mobile_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("to", "toAttr", "to", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SubscriptionAdminDetailsRec.init();
return SubscriptionAdminDetailsRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.SubscriptionAdminDetailsRec = SubscriptionAdminDetailsRec;

});
define("UBT_Email.model$SuspendedUserRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var SuspendedUserRequestRec = (function (_super) {
__extends(SuspendedUserRequestRec, _super);
function SuspendedUserRequestRec(defaults) {
_super.apply(this, arguments);
}
SuspendedUserRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
SuspendedUserRequestRec.init();
return SuspendedUserRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.SuspendedUserRequestRec = SuspendedUserRequestRec;

});
define("UBT_Email.model$EmailUserRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var EmailUserRequestRec = (function (_super) {
__extends(EmailUserRequestRec, _super);
function EmailUserRequestRec(defaults) {
_super.apply(this, arguments);
}
EmailUserRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("message_content", "message_contentAttr", "message_content", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
EmailUserRequestRec.init();
return EmailUserRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.EmailUserRequestRec = EmailUserRequestRec;

});
define("UBT_Email.model$EmailTemplateRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var EmailTemplateRec = (function (_super) {
__extends(EmailTemplateRec, _super);
function EmailTemplateRec(defaults) {
_super.apply(this, arguments);
}
EmailTemplateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
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
EmailTemplateRec.init();
return EmailTemplateRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.EmailTemplateRec = EmailTemplateRec;

});
define("UBT_Email.model$CancelledAdminRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SubscriptionAdminDetailsRec", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var CancelledAdminRequestRec = (function (_super) {
__extends(CancelledAdminRequestRec, _super);
function CancelledAdminRequestRec(defaults) {
_super.apply(this, arguments);
}
CancelledAdminRequestRec.attributesToDeclare = function () {
return [
this.attr("SubscriptionDetails", "subscriptionDetailsAttr", "SubscriptionDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SubscriptionAdminDetailsRec());
}, true, UBT_EmailModel.SubscriptionAdminDetailsRec), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
CancelledAdminRequestRec.init();
return CancelledAdminRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.CancelledAdminRequestRec = CancelledAdminRequestRec;

});
define("UBT_Email.model$ContactUBTRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ContactUBTRequestRec = (function (_super) {
__extends(ContactUBTRequestRec, _super);
function ContactUBTRequestRec(defaults) {
_super.apply(this, arguments);
}
ContactUBTRequestRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("users_name", "users_nameAttr", "users_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("message_text", "message_textAttr", "message_text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactUBTRequestRec.init();
return ContactUBTRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ContactUBTRequestRec = ContactUBTRequestRec;

});
define("UBT_Email.model$ChangeRequestRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ChangeRequestRequestRec = (function (_super) {
__extends(ChangeRequestRequestRec, _super);
function ChangeRequestRequestRec(defaults) {
_super.apply(this, arguments);
}
ChangeRequestRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("requesters_name", "requesters_nameAttr", "requesters_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("members_name", "members_nameAttr", "members_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("change_items_list", "change_items_listAttr", "change_items_list", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("comments_text", "comments_textAttr", "comments_text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
ChangeRequestRequestRec.init();
return ChangeRequestRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ChangeRequestRequestRec = ChangeRequestRequestRec;

});
define("UBT_Email.model$MessageMemberRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var MessageMemberRequestRec = (function (_super) {
__extends(MessageMemberRequestRec, _super);
function MessageMemberRequestRec(defaults) {
_super.apply(this, arguments);
}
MessageMemberRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("message_content", "message_contentAttr", "message_content", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("sender_name", "sender_nameAttr", "sender_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("sender_email", "sender_emailAttr", "sender_email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MessageMemberRequestRec.init();
return MessageMemberRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.MessageMemberRequestRec = MessageMemberRequestRec;

});
define("UBT_Email.model$PasswordResetRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var PasswordResetRequestRec = (function (_super) {
__extends(PasswordResetRequestRec, _super);
function PasswordResetRequestRec(defaults) {
_super.apply(this, arguments);
}
PasswordResetRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("password_reset_url", "password_reset_urlAttr", "password_reset_url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
PasswordResetRequestRec.init();
return PasswordResetRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.PasswordResetRequestRec = PasswordResetRequestRec;

});
define("UBT_Email.model$NewSignupNotificationRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var NewSignupNotificationRequestRec = (function (_super) {
__extends(NewSignupNotificationRequestRec, _super);
function NewSignupNotificationRequestRec(defaults) {
_super.apply(this, arguments);
}
NewSignupNotificationRequestRec.attributesToDeclare = function () {
return [
this.attr("subscription_id", "subscription_idAttr", "subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscription_type", "subscription_typeAttr", "subscription_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_first_name", "subscriber_first_nameAttr", "subscriber_first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_last_name", "subscriber_last_nameAttr", "subscriber_last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscriber_email", "subscriber_emailAttr", "subscriber_email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("subscriber_locality", "subscriber_localityAttr", "subscriber_locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("home_phone", "home_phoneAttr", "home_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("mobile_phone", "mobile_phoneAttr", "mobile_phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("country", "countryAttr", "country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("connect_website_url", "connect_website_urlAttr", "connect_website_url", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec), 
this.attr("To", "toAttr", "To", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NewSignupNotificationRequestRec.init();
return NewSignupNotificationRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.NewSignupNotificationRequestRec = NewSignupNotificationRequestRec;

});
define("UBT_Email.model$ResetDeviceRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ResetDeviceRec = (function (_super) {
__extends(ResetDeviceRec, _super);
function ResetDeviceRec(defaults) {
_super.apply(this, arguments);
}
ResetDeviceRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Url", "urlAttr", "Url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResetDeviceRec.init();
return ResetDeviceRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ResetDeviceRec = ResetDeviceRec;

});
define("UBT_Email.model$ChangeFieldRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ChangeFieldRec = (function (_super) {
__extends(ChangeFieldRec, _super);
function ChangeFieldRec(defaults) {
_super.apply(this, arguments);
}
ChangeFieldRec.attributesToDeclare = function () {
return [
this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsChange", "isChangeAttr", "IsChange", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChangeFieldRec.init();
return ChangeFieldRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ChangeFieldRec = ChangeFieldRec;

});
define("UBT_Email.model$RequestReportEmailRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var RequestReportEmailRec = (function (_super) {
__extends(RequestReportEmailRec, _super);
function RequestReportEmailRec(defaults) {
_super.apply(this, arguments);
}
RequestReportEmailRec.attributesToDeclare = function () {
return [
this.attr("EmailFrom", "emailFromAttr", "EmailFrom", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTimeSubmitted", "dateTimeSubmittedAttr", "DateTimeSubmitted", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Username", "usernameAttr", "Username", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("UserLocality", "userLocalityAttr", "UserLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaItemID", "mediaItemIDAttr", "MediaItemID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaItemName", "mediaItemNameAttr", "MediaItemName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaItemType", "mediaItemTypeAttr", "MediaItemType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Reason", "reasonAttr", "Reason", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RequestReportEmailRec.init();
return RequestReportEmailRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.RequestReportEmailRec = RequestReportEmailRec;

});
define("UBT_Email.model$FullAddressRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var FullAddressRec = (function (_super) {
__extends(FullAddressRec, _super);
function FullAddressRec(defaults) {
_super.apply(this, arguments);
}
FullAddressRec.attributesToDeclare = function () {
return [
this.attr("Address1", "address1Attr", "Address1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address2", "address2Attr", "Address2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address3", "address3Attr", "Address3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address4", "address4Attr", "Address4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address5", "address5Attr", "Address5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address6", "address6Attr", "Address6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address7", "address7Attr", "Address7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address8", "address8Attr", "Address8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FullAddressRec.init();
return FullAddressRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.FullAddressRec = FullAddressRec;

});
define("UBT_Email.model$PhotoApprovalRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$FullAddressRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var PhotoApprovalRequestRec = (function (_super) {
__extends(PhotoApprovalRequestRec, _super);
function PhotoApprovalRequestRec(defaults) {
_super.apply(this, arguments);
}
PhotoApprovalRequestRec.attributesToDeclare = function () {
return [
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Fulladdress", "fulladdressAttr", "Fulladdress", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.FullAddressRec());
}, true, UBT_EmailModel.FullAddressRec), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("HouseholderName", "householderNameAttr", "HouseholderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PhotoApprovalRequestRec.init();
return PhotoApprovalRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.PhotoApprovalRequestRec = PhotoApprovalRequestRec;

});
define("UBT_Email.model$ContactTroveRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ContactTroveRequestRec = (function (_super) {
__extends(ContactTroveRequestRec, _super);
function ContactTroveRequestRec(defaults) {
_super.apply(this, arguments);
}
ContactTroveRequestRec.attributesToDeclare = function () {
return [
this.attr("EmailFrom", "emailFromAttr", "EmailFrom", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportType", "reportTypeAttr", "ReportType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaId", "mediaIdAttr", "MediaId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaName", "mediaNameAttr", "MediaName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaType", "mediaTypeAttr", "MediaType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MediaItemType", "mediaItemTypeAttr", "MediaItemType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Reason", "reasonAttr", "Reason", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReasonId", "reasonIdAttr", "ReasonId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactTroveRequestRec.init();
return ContactTroveRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ContactTroveRequestRec = ContactTroveRequestRec;

});
define("UBT_Email.model$UserNameChangeRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var UserNameChangeRequestRec = (function (_super) {
__extends(UserNameChangeRequestRec, _super);
function UserNameChangeRequestRec(defaults) {
_super.apply(this, arguments);
}
UserNameChangeRequestRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserNameChangeUrl", "userNameChangeUrlAttr", "UserNameChangeUrl", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserNameChangeRequestRec.init();
return UserNameChangeRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.UserNameChangeRequestRec = UserNameChangeRequestRec;

});
define("UBT_Email.model$UserRateAppRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var UserRateAppRequestRec = (function (_super) {
__extends(UserRateAppRequestRec, _super);
function UserRateAppRequestRec(defaults) {
_super.apply(this, arguments);
}
UserRateAppRequestRec.attributesToDeclare = function () {
return [
this.attr("EmailFrom", "emailFromAttr", "EmailFrom", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("EmailTo", "emailToAttr", "EmailTo", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Rate", "rateAttr", "Rate", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserRateAppRequestRec.init();
return UserRateAppRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.UserRateAppRequestRec = UserRateAppRequestRec;

});
define("UBT_Email.model$NewUserRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var NewUserRequestRec = (function (_super) {
__extends(NewUserRequestRec, _super);
function NewUserRequestRec(defaults) {
_super.apply(this, arguments);
}
NewUserRequestRec.attributesToDeclare = function () {
return [
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("username", "usernameAttr", "username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("member_id", "member_idAttr", "member_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
NewUserRequestRec.init();
return NewUserRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.NewUserRequestRec = NewUserRequestRec;

});
define("UBT_Email.model$NewUserRequestWithExternalURLRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var NewUserRequestWithExternalURLRec = (function (_super) {
__extends(NewUserRequestWithExternalURLRec, _super);
function NewUserRequestWithExternalURLRec(defaults) {
_super.apply(this, arguments);
}
NewUserRequestWithExternalURLRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("last_name", "last_nameAttr", "last_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("username", "usernameAttr", "username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("subscription_plan", "subscription_planAttr", "subscription_plan", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("confirm_email_url", "confirm_email_urlAttr", "confirm_email_url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec)
].concat(_super.attributesToDeclare.call(this));
};
NewUserRequestWithExternalURLRec.init();
return NewUserRequestWithExternalURLRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.NewUserRequestWithExternalURLRec = NewUserRequestWithExternalURLRec;

});
define("UBT_Email.model$UpgradedUserRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model", "UBT_Email.model$SignatureRec"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var UpgradedUserRequestRec = (function (_super) {
__extends(UpgradedUserRequestRec, _super);
function UpgradedUserRequestRec(defaults) {
_super.apply(this, arguments);
}
UpgradedUserRequestRec.attributesToDeclare = function () {
return [
this.attr("email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("first_name", "first_nameAttr", "first_name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("old_subscription_id", "old_subscription_idAttr", "old_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_subscription_id", "new_subscription_idAttr", "new_subscription_id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_EmailModel.SignatureRec());
}, true, UBT_EmailModel.SignatureRec), 
this.attr("old_subscription_type", "old_subscription_typeAttr", "old_subscription_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("new_subscription_type", "new_subscription_typeAttr", "new_subscription_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UpgradedUserRequestRec.init();
return UpgradedUserRequestRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.UpgradedUserRequestRec = UpgradedUserRequestRec;

});
define("UBT_Email.model$ContactUsDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_Email.model"], function (exports, OutSystems, UBT_EmailModel) {
var OS = OutSystems.Internal;
var ContactUsDetailRec = (function (_super) {
__extends(ContactUsDetailRec, _super);
function ContactUsDetailRec(defaults) {
_super.apply(this, arguments);
}
ContactUsDetailRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("EmailTo", "emailToAttr", "EmailTo", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactUsDetailRec.init();
return ContactUsDetailRec;
})(OS.DataTypes.GenericRecord);
UBT_EmailModel.ContactUsDetailRec = ContactUsDetailRec;

});
define("UBT_Email.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var UBT_EmailModel = exports;
});
