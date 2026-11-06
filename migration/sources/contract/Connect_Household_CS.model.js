define("Connect_Household_CS.model$UI_DisplayOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_DisplayOptionsRec = (function (_super) {
__extends(UI_DisplayOptionsRec, _super);
function UI_DisplayOptionsRec(defaults) {
_super.apply(this, arguments);
}
UI_DisplayOptionsRec.attributesToDeclare = function () {
return [
this.attr("IsHidden", "isHiddenAttr", "IsHidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsAncestry", "isAncestryAttr", "IsAncestry", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_DisplayOptionsRec.init();
return UI_DisplayOptionsRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_DisplayOptionsRec = UI_DisplayOptionsRec;

});
define("Connect_Household_CS.model$UI_Household_Card_ContentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_DisplayOptionsRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_Household_Card_ContentRec = (function (_super) {
__extends(UI_Household_Card_ContentRec, _super);
function UI_Household_Card_ContentRec(defaults) {
_super.apply(this, arguments);
}
UI_Household_Card_ContentRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyNames", "familyNamesAttr", "FamilyNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SupperMeetingId", "supperMeetingIdAttr", "SupperMeetingId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SupperMeetingName", "supperMeetingNameAttr", "SupperMeetingName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneName", "timezoneNameAttr", "TimezoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneOffset", "timezoneOffsetAttr", "TimezoneOffset", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Surname", "surnameAttr", "Surname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayOptions", "displayOptionsAttr", "DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_DisplayOptionsRec());
}, true, Connect_Household_CSModel.UI_DisplayOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Household_Card_ContentRec.init();
return UI_Household_Card_ContentRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_Household_Card_ContentRec = UI_Household_Card_ContentRec;

});
define("Connect_Household_CS.model$UI_Household_CardRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_Household_Card_ContentRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_Household_CardRec = (function (_super) {
__extends(UI_Household_CardRec, _super);
function UI_Household_CardRec(defaults) {
_super.apply(this, arguments);
}
UI_Household_CardRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Household_Card_Content", "household_Card_ContentAttr", "Household_Card_Content", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_Household_Card_ContentRec());
}, true, Connect_Household_CSModel.UI_Household_Card_ContentRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Household_CardRec.init();
return UI_Household_CardRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_Household_CardRec = UI_Household_CardRec;

});
define("Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "UBTConnectLibrary.model", "Connect_Household_CS.model$UI_Household_CardRec", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "Connect_Household_CS.referencesHealth", "Connect_Household_CS.referencesHealth$UBTConnectLibrary"], function (exports, OutSystems, Connect_Household_CSModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;
var UI_Screen_HouseholdDetailsRec = (function (_super) {
__extends(UI_Screen_HouseholdDetailsRec, _super);
function UI_Screen_HouseholdDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_Screen_HouseholdDetailsRec.attributesToDeclare = function () {
return [
this.attr("HouseholdCard", "householdCardAttr", "HouseholdCard", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_Household_CardRec());
}, true, Connect_Household_CSModel.UI_Household_CardRec), 
this.attr("Household_Actions", "household_ActionsAttr", "Household_Actions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuOptionsRec());
}, true, UBTConnectLibraryModel.ActionsMenuOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_Screen_HouseholdDetailsRec.init();
return UI_Screen_HouseholdDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec = UI_Screen_HouseholdDetailsRec;

});
define("Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_AccountForm_ContactInformationRec = (function (_super) {
__extends(UI_AccountForm_ContactInformationRec, _super);
function UI_AccountForm_ContactInformationRec(defaults) {
_super.apply(this, arguments);
}
UI_AccountForm_ContactInformationRec.attributesToDeclare = function () {
return [
this.attr("HomeNumber", "homeNumberAttr", "HomeNumber", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("MobileNumber", "mobileNumberAttr", "MobileNumber", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("WorkNumber", "workNumberAttr", "WorkNumber", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("ShowMobileNumber", "showMobileNumberAttr", "ShowMobileNumber", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShowWorkNumber", "showWorkNumberAttr", "ShowWorkNumber", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_AccountForm_ContactInformationRec.init();
return UI_AccountForm_ContactInformationRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_AccountForm_ContactInformationRec = UI_AccountForm_ContactInformationRec;

});
define("Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdTimelineImagesRec = (function (_super) {
__extends(UI_HouseholdTimelineImagesRec, _super);
function UI_HouseholdTimelineImagesRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdTimelineImagesRec.attributesToDeclare = function () {
return [
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Date", "dateAttr", "Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsCurrent", "isCurrentAttr", "IsCurrent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdTimelineImagesRec.init();
return UI_HouseholdTimelineImagesRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdTimelineImagesRec = UI_HouseholdTimelineImagesRec;

});
define("Connect_Household_CS.model$UI_LocalityHouseholdRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_LocalityHouseholdRec = (function (_super) {
__extends(UI_LocalityHouseholdRec, _super);
function UI_LocalityHouseholdRec(defaults) {
_super.apply(this, arguments);
}
UI_LocalityHouseholdRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdName", "householdNameAttr", "HouseholdName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ChildrenNames", "childrenNamesAttr", "ChildrenNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_LocalityHouseholdRec.init();
return UI_LocalityHouseholdRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_LocalityHouseholdRec = UI_LocalityHouseholdRec;

});
define("Connect_Household_CS.model$UI_HouseholdMemberRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMemberRec = (function (_super) {
__extends(UI_HouseholdMemberRec, _super);
function UI_HouseholdMemberRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMemberRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DescriptionHighlight", "descriptionHighlightAttr", "DescriptionHighlight", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HomePhone", "homePhoneAttr", "HomePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "WorkPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberRole", "memberRoleAttr", "MemberRole", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LifeCycleText", "lifeCycleTextAttr", "LifeCycleText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LifeCycleText_IsItallic", "lifeCycleText_IsItallicAttr", "LifeCycleText_IsItallic", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MarriageText", "marriageTextAttr", "MarriageText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MarriageHighlightText", "marriageHighlightTextAttr", "MarriageHighlightText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MarriagePartnerTakenText", "marriagePartnerTakenTextAttr", "MarriagePartnerTakenText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ContryCode", "contryCodeAttr", "ContryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FormattedLocality", "formattedLocalityAttr", "FormattedLocality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HasNavigation", "hasNavigationAttr", "HasNavigation", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("HasCTAs", "hasCTAsAttr", "HasCTAs", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Age", "ageAttr", "Age", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdMemberRec.init();
return UI_HouseholdMemberRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdMemberRec = UI_HouseholdMemberRec;

});
define("Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_AccountForm_IdentificationInformationRec = (function (_super) {
__extends(UI_AccountForm_IdentificationInformationRec, _super);
function UI_AccountForm_IdentificationInformationRec(defaults) {
_super.apply(this, arguments);
}
UI_AccountForm_IdentificationInformationRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_AccountForm_IdentificationInformationRec.init();
return UI_AccountForm_IdentificationInformationRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_AccountForm_IdentificationInformationRec = UI_AccountForm_IdentificationInformationRec;

});
define("Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_AccountForm_PersonalInformationRec = (function (_super) {
__extends(UI_AccountForm_PersonalInformationRec, _super);
function UI_AccountForm_PersonalInformationRec(defaults) {
_super.apply(this, arguments);
}
UI_AccountForm_PersonalInformationRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("ShowLifeCycleDates", "showLifeCycleDatesAttr", "ShowLifeCycleDates", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_AccountForm_PersonalInformationRec.init();
return UI_AccountForm_PersonalInformationRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_AccountForm_PersonalInformationRec = UI_AccountForm_PersonalInformationRec;

});
define("Connect_Household_CS.model$UI_HouseholdRelationsMemberRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdRelationsMemberRec = (function (_super) {
__extends(UI_HouseholdRelationsMemberRec, _super);
function UI_HouseholdRelationsMemberRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdRelationsMemberRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdId", "householdIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaidenName", "maidenNameAttr", "MaidenName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UnparsedDateOfBirth", "unparsedDateOfBirthAttr", "UnparsedDateOfBirth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayAge", "displayAgeAttr", "DisplayAge", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MemberRole", "memberRoleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayTitle", "displayTitleAttr", "DisplayTitle", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDeceased", "isDeceasedAttr", "IsDeceased", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DeceasedDate", "deceasedDateAttr", "DeceasedDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UnparsedDeceasedDate", "unparsedDeceasedDateAttr", "UnparsedDeceasedDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DisplayDescription", "displayDescriptionAttr", "DisplayDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdRelationsMemberRec.init();
return UI_HouseholdRelationsMemberRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdRelationsMemberRec = UI_HouseholdRelationsMemberRec;

});
define("Connect_Household_CS.model$UI_PhotobookHouseholdRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_PhotobookHouseholdRec = (function (_super) {
__extends(UI_PhotobookHouseholdRec, _super);
function UI_PhotobookHouseholdRec(defaults) {
_super.apply(this, arguments);
}
UI_PhotobookHouseholdRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdName", "householdNameAttr", "HouseholdName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_PhotobookHouseholdRec.init();
return UI_PhotobookHouseholdRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_PhotobookHouseholdRec = UI_PhotobookHouseholdRec;

});
define("Connect_Household_CS.model$MemberRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var MemberRoleRec = (function (_super) {
__extends(MemberRoleRec, _super);
function MemberRoleRec(defaults) {
_super.apply(this, arguments);
}
MemberRoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberRoleRec.init();
return MemberRoleRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.MemberRoleRec = MemberRoleRec;

});
define("Connect_Household_CS.model$UI_HouseholdDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_DisplayOptionsRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdDetailsRec = (function (_super) {
__extends(UI_HouseholdDetailsRec, _super);
function UI_HouseholdDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdDetailsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FamilyNames", "familyNamesAttr", "FamilyNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryName", "countryNameAttr", "CountryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholdSignedURL", "householdSignedURLAttr", "HouseholdSignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SupperMeetingId", "supperMeetingIdAttr", "SupperMeetingId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SupperMeetingName", "supperMeetingNameAttr", "SupperMeetingName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TimezoneName", "timezoneNameAttr", "TimezoneName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimezoneOffset", "timezoneOffsetAttr", "TimezoneOffset", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Surname", "surnameAttr", "Surname", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DisplayOptions", "displayOptionsAttr", "DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_DisplayOptionsRec());
}, true, Connect_Household_CSModel.UI_DisplayOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdDetailsRec.init();
return UI_HouseholdDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdDetailsRec = UI_HouseholdDetailsRec;

});
define("Connect_Household_CS.model$UI_HouseholdMember_ParentRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMember_ParentRec = (function (_super) {
__extends(UI_HouseholdMember_ParentRec, _super);
function UI_HouseholdMember_ParentRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMember_ParentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsAlive", "isAliveAttr", "IsAlive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsAway", "isAwayAttr", "IsAway", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdMember_ParentRec.init();
return UI_HouseholdMember_ParentRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdMember_ParentRec = UI_HouseholdMember_ParentRec;

});
define("Connect_Household_CS.model$UI_HouseholdRelationsMemberList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_HouseholdRelationsMemberRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdRelationsMemberList = (function (_super) {
__extends(UI_HouseholdRelationsMemberList, _super);
function UI_HouseholdRelationsMemberList(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdRelationsMemberList.itemType = Connect_Household_CSModel.UI_HouseholdRelationsMemberRec;
return UI_HouseholdRelationsMemberList;
})(OS.DataTypes.GenericRecordList);
Connect_Household_CSModel.UI_HouseholdRelationsMemberList = UI_HouseholdRelationsMemberList;

});
define("Connect_Household_CS.model$UI_MemberHouseholdContextRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_HouseholdMember_ParentRec", "Connect_Household_CS.model$UI_HouseholdRelationsMemberList"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_MemberHouseholdContextRec = (function (_super) {
__extends(UI_MemberHouseholdContextRec, _super);
function UI_MemberHouseholdContextRec(defaults) {
_super.apply(this, arguments);
}
UI_MemberHouseholdContextRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookmarked", "isBookmarkedAttr", "IsBookmarked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Father", "fatherAttr", "Father", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMember_ParentRec());
}, true, Connect_Household_CSModel.UI_HouseholdMember_ParentRec), 
this.attr("Mother", "motherAttr", "Mother", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMember_ParentRec());
}, true, Connect_Household_CSModel.UI_HouseholdMember_ParentRec), 
this.attr("IsAwayParents", "isAwayParentsAttr", "IsAwayParents", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSingleParentAndTaken", "isSingleParentAndTakenAttr", "IsSingleParentAndTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BothParentsTaken", "bothParentsTakenAttr", "BothParentsTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PreviousSpouses", "previousSpousesAttr", "PreviousSpouses", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdRelationsMemberList());
}, true, Connect_Household_CSModel.UI_HouseholdRelationsMemberList)
].concat(_super.attributesToDeclare.call(this));
};
UI_MemberHouseholdContextRec.init();
return UI_MemberHouseholdContextRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_MemberHouseholdContextRec = UI_MemberHouseholdContextRec;

});
define("Connect_Household_CS.model$UI_HouseholdMember_ParentsDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_HouseholdMember_ParentRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdMember_ParentsDetailRec = (function (_super) {
__extends(UI_HouseholdMember_ParentsDetailRec, _super);
function UI_HouseholdMember_ParentsDetailRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdMember_ParentsDetailRec.attributesToDeclare = function () {
return [
this.attr("Father", "fatherAttr", "Father", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMember_ParentRec());
}, true, Connect_Household_CSModel.UI_HouseholdMember_ParentRec), 
this.attr("Mother", "motherAttr", "Mother", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdMember_ParentRec());
}, true, Connect_Household_CSModel.UI_HouseholdMember_ParentRec), 
this.attr("IsAwayParents", "isAwayParentsAttr", "IsAwayParents", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSingleParentAndTaken", "isSingleParentAndTakenAttr", "IsSingleParentAndTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BothParentsTaken", "bothParentsTakenAttr", "BothParentsTaken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdMember_ParentsDetailRec.init();
return UI_HouseholdMember_ParentsDetailRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdMember_ParentsDetailRec = UI_HouseholdMember_ParentsDetailRec;

});
define("Connect_Household_CS.model$DetailsMappingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var DetailsMappingRec = (function (_super) {
__extends(DetailsMappingRec, _super);
function DetailsMappingRec(defaults) {
_super.apply(this, arguments);
}
DetailsMappingRec.attributesToDeclare = function () {
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
DetailsMappingRec.init();
return DetailsMappingRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.DetailsMappingRec = DetailsMappingRec;

});
define("Connect_Household_CS.model$UI_HouseholdTimelineImagesList", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdTimelineImagesList = (function (_super) {
__extends(UI_HouseholdTimelineImagesList, _super);
function UI_HouseholdTimelineImagesList(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdTimelineImagesList.itemType = Connect_Household_CSModel.UI_HouseholdTimelineImagesRec;
return UI_HouseholdTimelineImagesList;
})(OS.DataTypes.GenericRecordList);
Connect_Household_CSModel.UI_HouseholdTimelineImagesList = UI_HouseholdTimelineImagesList;

});
define("Connect_Household_CS.model$UI_HouseholdImagesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_HouseholdTimelineImagesList"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_HouseholdImagesRec = (function (_super) {
__extends(UI_HouseholdImagesRec, _super);
function UI_HouseholdImagesRec(defaults) {
_super.apply(this, arguments);
}
UI_HouseholdImagesRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrentImage", "currentImageAttr", "CurrentImage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimelineImages", "timelineImagesAttr", "TimelineImages", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_HouseholdTimelineImagesList());
}, true, Connect_Household_CSModel.UI_HouseholdTimelineImagesList)
].concat(_super.attributesToDeclare.call(this));
};
UI_HouseholdImagesRec.init();
return UI_HouseholdImagesRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_HouseholdImagesRec = UI_HouseholdImagesRec;

});
define("Connect_Household_CS.model$UI_SubdivisionHouseholdRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_SubdivisionHouseholdRec = (function (_super) {
__extends(UI_SubdivisionHouseholdRec, _super);
function UI_SubdivisionHouseholdRec(defaults) {
_super.apply(this, arguments);
}
UI_SubdivisionHouseholdRec.attributesToDeclare = function () {
return [
this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HouseholdName", "householdNameAttr", "HouseholdName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ChildrenNames", "childrenNamesAttr", "ChildrenNames", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_SubdivisionHouseholdRec.init();
return UI_SubdivisionHouseholdRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_SubdivisionHouseholdRec = UI_SubdivisionHouseholdRec;

});
define("Connect_Household_CS.model$UI_MemberContactDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_MemberContactDetailsRec = (function (_super) {
__extends(UI_MemberContactDetailsRec, _super);
function UI_MemberContactDetailsRec(defaults) {
_super.apply(this, arguments);
}
UI_MemberContactDetailsRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CountryName", "countryNameAttr", "countryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "localityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityId", "localityIdAttr", "localityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("HomePhone", "homePhoneAttr", "homePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkPhone", "workPhoneAttr", "workPhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "mobilePhone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HouseholderId", "householderIdAttr", "HouseholderId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UI_MemberContactDetailsRec.init();
return UI_MemberContactDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_MemberContactDetailsRec = UI_MemberContactDetailsRec;

});
define("Connect_Household_CS.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "Connect_Household_CS.referencesHealth", "Connect_Household_CS.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var Custom_Address_ItemList = (function (_super) {
__extends(Custom_Address_ItemList, _super);
function Custom_Address_ItemList(defaults) {
_super.apply(this, arguments);
}
Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
return Custom_Address_ItemList;
})(OS.DataTypes.GenericRecordList);
Connect_Household_CSModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("Connect_Household_CS.model$TextTextTextCustom_Address_ItemListRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "Connect_Household_CS.referencesHealth", "Connect_Household_CS.referencesHealth$APIDomain_Directory_IS", "Connect_Household_CS.model$Custom_Address_ItemList"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var TextTextTextCustom_Address_ItemListRecord = (function (_super) {
__extends(TextTextTextCustom_Address_ItemListRecord, _super);
function TextTextTextCustom_Address_ItemListRecord(defaults) {
_super.apply(this, arguments);
}
TextTextTextCustom_Address_ItemListRecord.attributesToDeclare = function () {
return [
this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalityName", "localityNameAttr", "LocalityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubdivionId", "subdivionIdAttr", "SubdivionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Custom_Address_ItemList", "custom_Address_ItemListAttr", "Custom_Address_ItemList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.Custom_Address_ItemList());
}, true, Connect_Household_CSModel.Custom_Address_ItemList)
].concat(_super.attributesToDeclare.call(this));
};
TextTextTextCustom_Address_ItemListRecord._isAnonymousRecord = true;
TextTextTextCustom_Address_ItemListRecord.UniqueId = "489a9f03-913f-a5e2-d0d9-598b06c3fcd7";
TextTextTextCustom_Address_ItemListRecord.init();
return TextTextTextCustom_Address_ItemListRecord;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.TextTextTextCustom_Address_ItemListRecord = TextTextTextCustom_Address_ItemListRecord;

});
define("Connect_Household_CS.model$UI_AccountFormRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_Household_CS.model", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "Connect_Household_CS.model$TextTextTextCustom_Address_ItemListRecord", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (exports, OutSystems, Connect_Household_CSModel) {
var OS = OutSystems.Internal;
var UI_AccountFormRec = (function (_super) {
__extends(UI_AccountFormRec, _super);
function UI_AccountFormRec(defaults) {
_super.apply(this, arguments);
}
UI_AccountFormRec.attributesToDeclare = function () {
return [
this.attr("AccountForm_PersonalInformation", "accountForm_PersonalInformationAttr", "AccountForm_PersonalInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_AccountForm_PersonalInformationRec());
}, true, Connect_Household_CSModel.UI_AccountForm_PersonalInformationRec), 
this.attr("AccountForm_AddressInformation", "accountForm_AddressInformationAttr", "AccountForm_AddressInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.TextTextTextCustom_Address_ItemListRecord());
}, true, Connect_Household_CSModel.TextTextTextCustom_Address_ItemListRecord), 
this.attr("AccountForm_ContactInformation", "accountForm_ContactInformationAttr", "AccountForm_ContactInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_AccountForm_ContactInformationRec());
}, true, Connect_Household_CSModel.UI_AccountForm_ContactInformationRec), 
this.attr("AccountForm_IdentificationInformation", "accountForm_IdentificationInformationAttr", "AccountForm_IdentificationInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_AccountForm_IdentificationInformationRec());
}, true, Connect_Household_CSModel.UI_AccountForm_IdentificationInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
UI_AccountFormRec.init();
return UI_AccountFormRec;
})(OS.DataTypes.GenericRecord);
Connect_Household_CSModel.UI_AccountFormRec = UI_AccountFormRec;

});
define("Connect_Household_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_Household_CSModel = exports;
});
