define("Connect_CommonEntities_DB.model$Connect_Subscription_PlanRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_PlanRec = (function (_super) {
__extends(Connect_Subscription_PlanRec, _super);
function Connect_Subscription_PlanRec(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_PlanRec.attributesToDeclare = function () {
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
Connect_Subscription_PlanRec.init();
return Connect_Subscription_PlanRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_Subscription_PlanRec = Connect_Subscription_PlanRec;

});
define("Connect_CommonEntities_DB.model$Connect_EntityRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_EntityRec = (function (_super) {
__extends(Connect_EntityRec, _super);
function Connect_EntityRec(defaults) {
_super.apply(this, arguments);
}
Connect_EntityRec.attributesToDeclare = function () {
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
this.attr("APIKey", "aPIKeyAttr", "APIKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_EntityRec.init();
return Connect_EntityRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_EntityRec = Connect_EntityRec;

});
define("Connect_CommonEntities_DB.model$Connect_UpdateTypeIdRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_UpdateTypeIdRec = (function (_super) {
__extends(Connect_UpdateTypeIdRec, _super);
function Connect_UpdateTypeIdRec(defaults) {
_super.apply(this, arguments);
}
Connect_UpdateTypeIdRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_UpdateTypeIdRec.fromStructure = function (str) {
return new Connect_UpdateTypeIdRec(new Connect_UpdateTypeIdRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_UpdateTypeIdRec.init();
return Connect_UpdateTypeIdRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_UpdateTypeIdRec = Connect_UpdateTypeIdRec;

});
define("Connect_CommonEntities_DB.model$Connect_SearchCategoriesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_SearchCategoriesRec = (function (_super) {
__extends(Connect_SearchCategoriesRec, _super);
function Connect_SearchCategoriesRec(defaults) {
_super.apply(this, arguments);
}
Connect_SearchCategoriesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_SearchCategoriesRec.fromStructure = function (str) {
return new Connect_SearchCategoriesRec(new Connect_SearchCategoriesRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Connect_SearchCategoriesRec.init();
return Connect_SearchCategoriesRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_SearchCategoriesRec = Connect_SearchCategoriesRec;

});
define("Connect_CommonEntities_DB.model$Connect_CommunityBusinessTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_CommunityBusinessTypeRec = (function (_super) {
__extends(Connect_CommunityBusinessTypeRec, _super);
function Connect_CommunityBusinessTypeRec(defaults) {
_super.apply(this, arguments);
}
Connect_CommunityBusinessTypeRec.attributesToDeclare = function () {
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
Connect_CommunityBusinessTypeRec.init();
return Connect_CommunityBusinessTypeRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_CommunityBusinessTypeRec = Connect_CommunityBusinessTypeRec;

});
define("Connect_CommonEntities_DB.model$Connect_SearchBirthdayOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_SearchBirthdayOptionsRec = (function (_super) {
__extends(Connect_SearchBirthdayOptionsRec, _super);
function Connect_SearchBirthdayOptionsRec(defaults) {
_super.apply(this, arguments);
}
Connect_SearchBirthdayOptionsRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SearchName", "searchNameAttr", "SearchName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_SearchBirthdayOptionsRec.init();
return Connect_SearchBirthdayOptionsRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_SearchBirthdayOptionsRec = Connect_SearchBirthdayOptionsRec;

});
define("Connect_CommonEntities_DB.model$Connect_PoliceTypesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_PoliceTypesRec = (function (_super) {
__extends(Connect_PoliceTypesRec, _super);
function Connect_PoliceTypesRec(defaults) {
_super.apply(this, arguments);
}
Connect_PoliceTypesRec.attributesToDeclare = function () {
return [
this.attr("GUID", "gUIDAttr", "GUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_PoliceTypesRec.init();
return Connect_PoliceTypesRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_PoliceTypesRec = Connect_PoliceTypesRec;

});
define("Connect_CommonEntities_DB.model$Connect_HouseholdDetailsMappingRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_HouseholdDetailsMappingRec = (function (_super) {
__extends(Connect_HouseholdDetailsMappingRec, _super);
function Connect_HouseholdDetailsMappingRec(defaults) {
_super.apply(this, arguments);
}
Connect_HouseholdDetailsMappingRec.attributesToDeclare = function () {
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
Connect_HouseholdDetailsMappingRec.init();
return Connect_HouseholdDetailsMappingRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_HouseholdDetailsMappingRec = Connect_HouseholdDetailsMappingRec;

});
define("Connect_CommonEntities_DB.model$Connect_ApplicationsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_ApplicationsRec = (function (_super) {
__extends(Connect_ApplicationsRec, _super);
function Connect_ApplicationsRec(defaults) {
_super.apply(this, arguments);
}
Connect_ApplicationsRec.attributesToDeclare = function () {
return [
this.attr("GUID", "gUIDAttr", "GUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Connect_ApplicationsRec.init();
return Connect_ApplicationsRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_ApplicationsRec = Connect_ApplicationsRec;

});
define("Connect_CommonEntities_DB.model$LaunchDarkly_FFRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var LaunchDarkly_FFRec = (function (_super) {
__extends(LaunchDarkly_FFRec, _super);
function LaunchDarkly_FFRec(defaults) {
_super.apply(this, arguments);
}
LaunchDarkly_FFRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LaunchDarkly_FFRec.fromStructure = function (str) {
return new LaunchDarkly_FFRec(new LaunchDarkly_FFRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LaunchDarkly_FFRec.init();
return LaunchDarkly_FFRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.LaunchDarkly_FFRec = LaunchDarkly_FFRec;

});
define("Connect_CommonEntities_DB.model$NoteActionTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var NoteActionTypeRec = (function (_super) {
__extends(NoteActionTypeRec, _super);
function NoteActionTypeRec(defaults) {
_super.apply(this, arguments);
}
NoteActionTypeRec.attributesToDeclare = function () {
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
NoteActionTypeRec.init();
return NoteActionTypeRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.NoteActionTypeRec = NoteActionTypeRec;

});
define("Connect_CommonEntities_DB.model$Connect_AuditEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_AuditEventRec = (function (_super) {
__extends(Connect_AuditEventRec, _super);
function Connect_AuditEventRec(defaults) {
_super.apply(this, arguments);
}
Connect_AuditEventRec.attributesToDeclare = function () {
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
Connect_AuditEventRec.init();
return Connect_AuditEventRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_AuditEventRec = Connect_AuditEventRec;

});
define("Connect_CommonEntities_DB.model$ChoiceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var ChoiceRec = (function (_super) {
__extends(ChoiceRec, _super);
function ChoiceRec(defaults) {
_super.apply(this, arguments);
}
ChoiceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ChoiceRec.fromStructure = function (str) {
return new ChoiceRec(new ChoiceRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChoiceRec.init();
return ChoiceRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.ChoiceRec = ChoiceRec;

});
define("Connect_CommonEntities_DB.model$ImageSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var ImageSizeRec = (function (_super) {
__extends(ImageSizeRec, _super);
function ImageSizeRec(defaults) {
_super.apply(this, arguments);
}
ImageSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImageSizeRec.fromStructure = function (str) {
return new ImageSizeRec(new ImageSizeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageSizeRec.init();
return ImageSizeRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.ImageSizeRec = ImageSizeRec;

});
define("Connect_CommonEntities_DB.model$Connect_Subscription_RegionRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_Subscription_RegionRec = (function (_super) {
__extends(Connect_Subscription_RegionRec, _super);
function Connect_Subscription_RegionRec(defaults) {
_super.apply(this, arguments);
}
Connect_Subscription_RegionRec.attributesToDeclare = function () {
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
Connect_Subscription_RegionRec.init();
return Connect_Subscription_RegionRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_Subscription_RegionRec = Connect_Subscription_RegionRec;

});
define("Connect_CommonEntities_DB.model$GenderRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var GenderRec = (function (_super) {
__extends(GenderRec, _super);
function GenderRec(defaults) {
_super.apply(this, arguments);
}
GenderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GenderRec.fromStructure = function (str) {
return new GenderRec(new GenderRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GenderRec.init();
return GenderRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.GenderRec = GenderRec;

});
define("Connect_CommonEntities_DB.model$ContactBase_CountryRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var ContactBase_CountryRec = (function (_super) {
__extends(ContactBase_CountryRec, _super);
function ContactBase_CountryRec(defaults) {
_super.apply(this, arguments);
}
ContactBase_CountryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Lat", "latAttr", "Lat", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Long", "longAttr", "Long", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("GeoJSON", "geoJSONAttr", "GeoJSON", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContactBase_CountryRec.init();
return ContactBase_CountryRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.ContactBase_CountryRec = ContactBase_CountryRec;

});
define("Connect_CommonEntities_DB.model$Connect_HouseholdMemberRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var Connect_HouseholdMemberRoleRec = (function (_super) {
__extends(Connect_HouseholdMemberRoleRec, _super);
function Connect_HouseholdMemberRoleRec(defaults) {
_super.apply(this, arguments);
}
Connect_HouseholdMemberRoleRec.attributesToDeclare = function () {
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
Connect_HouseholdMemberRoleRec.init();
return Connect_HouseholdMemberRoleRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.Connect_HouseholdMemberRoleRec = Connect_HouseholdMemberRoleRec;

});
define("Connect_CommonEntities_DB.model$OutSystems_FFRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model"], function (exports, OutSystems, Connect_CommonEntities_DBModel) {
var OS = OutSystems.Internal;
var OutSystems_FFRec = (function (_super) {
__extends(OutSystems_FFRec, _super);
function OutSystems_FFRec(defaults) {
_super.apply(this, arguments);
}
OutSystems_FFRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OutSystems_FFRec.fromStructure = function (str) {
return new OutSystems_FFRec(new OutSystems_FFRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OutSystems_FFRec.init();
return OutSystems_FFRec;
})(OS.DataTypes.GenericRecord);
Connect_CommonEntities_DBModel.OutSystems_FFRec = OutSystems_FFRec;

});
define("Connect_CommonEntities_DB.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect_CommonEntities_DBModel = exports;
});
