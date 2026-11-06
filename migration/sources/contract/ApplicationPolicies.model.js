define("ApplicationPolicies.model$PolicyInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyInformationRec = (function (_super) {
__extends(PolicyInformationRec, _super);
function PolicyInformationRec(defaults) {
_super.apply(this, arguments);
}
PolicyInformationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyTypeId", "policyTypeIdAttr", "PolicyTypeId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PolicyTypeName", "policyTypeNameAttr", "PolicyTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Version", "versionAttr", "Version", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("PolicyContentFilename", "policyContentFilenameAttr", "PolicyContentFilename", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyContentType", "policyContentTypeAttr", "PolicyContentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyInformationRec.init();
return PolicyInformationRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyInformationRec = PolicyInformationRec;

});
define("ApplicationPolicies.model$RegisteredPolicyTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var RegisteredPolicyTypeRec = (function (_super) {
__extends(RegisteredPolicyTypeRec, _super);
function RegisteredPolicyTypeRec(defaults) {
_super.apply(this, arguments);
}
RegisteredPolicyTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GUID", "gUIDAttr", "GUID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegisteredFromEspaceId", "registeredFromEspaceIdAttr", "RegisteredFromEspaceId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredPolicyTypeRec.init();
return RegisteredPolicyTypeRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.RegisteredPolicyTypeRec = RegisteredPolicyTypeRec;

});
define("ApplicationPolicies.model$RegisteredApplicationRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var RegisteredApplicationRec = (function (_super) {
__extends(RegisteredApplicationRec, _super);
function RegisteredApplicationRec(defaults) {
_super.apply(this, arguments);
}
RegisteredApplicationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GUID", "gUIDAttr", "GUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegisteredFromEspaceId", "registeredFromEspaceIdAttr", "RegisteredFromEspaceId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredApplicationRec.init();
return RegisteredApplicationRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.RegisteredApplicationRec = RegisteredApplicationRec;

});
define("ApplicationPolicies.model$SegmentTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var SegmentTypeRec = (function (_super) {
__extends(SegmentTypeRec, _super);
function SegmentTypeRec(defaults) {
_super.apply(this, arguments);
}
SegmentTypeRec.attributesToDeclare = function () {
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
SegmentTypeRec.init();
return SegmentTypeRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.SegmentTypeRec = SegmentTypeRec;

});
define("ApplicationPolicies.model$PolicyAcceptanceRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceRec = (function (_super) {
__extends(PolicyAcceptanceRec, _super);
function PolicyAcceptanceRec(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PolicyId", "policyIdAttr", "PolicyId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DeviceDetailsJSON", "deviceDetailsJSONAttr", "DeviceDetailsJSON", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AcceptedOn", "acceptedOnAttr", "AcceptedOn", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyAcceptanceRec.init();
return PolicyAcceptanceRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyAcceptanceRec = PolicyAcceptanceRec;

});
define("ApplicationPolicies.model$SegmentRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var SegmentRec = (function (_super) {
__extends(SegmentRec, _super);
function SegmentRec(defaults) {
_super.apply(this, arguments);
}
SegmentRec.attributesToDeclare = function () {
return [
this.attr("SegmentTypeId", "segmentTypeIdAttr", "SegmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SegmentRec.init();
return SegmentRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.SegmentRec = SegmentRec;

});
define("ApplicationPolicies.model$PolicyApplicationAndNameRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyApplicationAndNameRec = (function (_super) {
__extends(PolicyApplicationAndNameRec, _super);
function PolicyApplicationAndNameRec(defaults) {
_super.apply(this, arguments);
}
PolicyApplicationAndNameRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyApplicationAndNameRec.init();
return PolicyApplicationAndNameRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyApplicationAndNameRec = PolicyApplicationAndNameRec;

});
define("ApplicationPolicies.model$PolicyAcceptanceDeviceDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceDeviceDetailsRec = (function (_super) {
__extends(PolicyAcceptanceDeviceDetailsRec, _super);
function PolicyAcceptanceDeviceDetailsRec(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceDeviceDetailsRec.attributesToDeclare = function () {
return [
this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Platform", "platformAttr", "Platform", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Manufacturer", "manufacturerAttr", "Manufacturer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Model", "modelAttr", "Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ClientIP", "clientIPAttr", "ClientIP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyAcceptanceDeviceDetailsRec.init();
return PolicyAcceptanceDeviceDetailsRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyAcceptanceDeviceDetailsRec = PolicyAcceptanceDeviceDetailsRec;

});
define("ApplicationPolicies.model$PolicyTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyTypeRec = (function (_super) {
__extends(PolicyTypeRec, _super);
function PolicyTypeRec(defaults) {
_super.apply(this, arguments);
}
PolicyTypeRec.attributesToDeclare = function () {
return [
this.attr("GUID", "gUIDAttr", "GUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyTypeRec.fromStructure = function (str) {
return new PolicyTypeRec(new PolicyTypeRec.RecordClass({
gUIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyTypeRec.init();
return PolicyTypeRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyTypeRec = PolicyTypeRec;

});
define("ApplicationPolicies.model$PolicyTypeAndNameRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyTypeAndNameRec = (function (_super) {
__extends(PolicyTypeAndNameRec, _super);
function PolicyTypeAndNameRec(defaults) {
_super.apply(this, arguments);
}
PolicyTypeAndNameRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyTypeAndNameRec.init();
return PolicyTypeAndNameRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyTypeAndNameRec = PolicyTypeAndNameRec;

});
define("ApplicationPolicies.model$PolicyTargetSegmentRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyTargetSegmentRec = (function (_super) {
__extends(PolicyTargetSegmentRec, _super);
function PolicyTargetSegmentRec(defaults) {
_super.apply(this, arguments);
}
PolicyTargetSegmentRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PolicyId", "policyIdAttr", "PolicyId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SegmentTypeId", "segmentTypeIdAttr", "SegmentTypeId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyTargetSegmentRec.init();
return PolicyTargetSegmentRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyTargetSegmentRec = PolicyTargetSegmentRec;

});
define("ApplicationPolicies.model$PolicyApplicationRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyApplicationRec = (function (_super) {
__extends(PolicyApplicationRec, _super);
function PolicyApplicationRec(defaults) {
_super.apply(this, arguments);
}
PolicyApplicationRec.attributesToDeclare = function () {
return [
this.attr("GUID", "gUIDAttr", "GUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyApplicationRec.fromStructure = function (str) {
return new PolicyApplicationRec(new PolicyApplicationRec.RecordClass({
gUIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyApplicationRec.init();
return PolicyApplicationRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyApplicationRec = PolicyApplicationRec;

});
define("ApplicationPolicies.model$SystemPolicyTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var SystemPolicyTypeRec = (function (_super) {
__extends(SystemPolicyTypeRec, _super);
function SystemPolicyTypeRec(defaults) {
_super.apply(this, arguments);
}
SystemPolicyTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
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
SystemPolicyTypeRec.init();
return SystemPolicyTypeRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.SystemPolicyTypeRec = SystemPolicyTypeRec;

});
define("ApplicationPolicies.model$PolicyRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model"], function (exports, OutSystems, ApplicationPoliciesModel) {
var OS = OutSystems.Internal;
var PolicyRec = (function (_super) {
__extends(PolicyRec, _super);
function PolicyRec(defaults) {
_super.apply(this, arguments);
}
PolicyRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PolicyTypeId", "policyTypeIdAttr", "PolicyTypeId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Version", "versionAttr", "Version", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true), 
this.attr("PreviousVersionId", "previousVersionIdAttr", "PreviousVersionId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PolicyContent", "policyContentAttr", "PolicyContent", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("PolicyContentFilename", "policyContentFilenameAttr", "PolicyContentFilename", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PolicyContentType", "policyContentTypeAttr", "PolicyContentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MustBeAccepted", "mustBeAcceptedAttr", "MustBeAccepted", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSegmented", "isSegmentedAttr", "IsSegmented", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsPublished", "isPublishedAttr", "IsPublished", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PublishedByUserId", "publishedByUserIdAttr", "PublishedByUserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PublishedDateTime", "publishedDateTimeAttr", "PublishedDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DisplayVersion", "displayVersionAttr", "DisplayVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsDeleted", "isDeletedAttr", "IsDeleted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyRec.init();
return PolicyRec;
})(OS.DataTypes.GenericRecord);
ApplicationPoliciesModel.PolicyRec = PolicyRec;

});
define("ApplicationPolicies.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ApplicationPoliciesModel = exports;
});
