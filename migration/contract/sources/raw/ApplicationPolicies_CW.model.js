define("ApplicationPolicies_CW.model$PolicyTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyTypeRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyTypeList = (function (_super) {
__extends(PolicyTypeList, _super);
function PolicyTypeList(defaults) {
_super.apply(this, arguments);
}
PolicyTypeList.itemType = ApplicationPoliciesModel.PolicyTypeRec;
return PolicyTypeList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyTypeList = PolicyTypeList;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyInformationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceInformationRec = (function (_super) {
__extends(PolicyAcceptanceInformationRec, _super);
function PolicyAcceptanceInformationRec(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceInformationRec.attributesToDeclare = function () {
return [
this.attr("PolicyInformation", "policyInformationAttr", "PolicyInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyInformationRec());
}, true, ApplicationPoliciesModel.PolicyInformationRec), 
this.attr("Url", "urlAttr", "Url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PolicyAcceptanceInformationRec.init();
return PolicyAcceptanceInformationRec;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyAcceptanceInformationRec = PolicyAcceptanceInformationRec;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceInformationList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyAcceptanceInformationRec"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceInformationList = (function (_super) {
__extends(PolicyAcceptanceInformationList, _super);
function PolicyAcceptanceInformationList(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceInformationList.itemType = ApplicationPolicies_CWModel.PolicyAcceptanceInformationRec;
return PolicyAcceptanceInformationList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyAcceptanceInformationList = PolicyAcceptanceInformationList;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceDeviceDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyAcceptanceDeviceDetailsRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceDeviceDetailsList = (function (_super) {
__extends(PolicyAcceptanceDeviceDetailsList, _super);
function PolicyAcceptanceDeviceDetailsList(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceDeviceDetailsList.itemType = ApplicationPoliciesModel.PolicyAcceptanceDeviceDetailsRec;
return PolicyAcceptanceDeviceDetailsList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyAcceptanceDeviceDetailsList = PolicyAcceptanceDeviceDetailsList;

});
define("ApplicationPolicies_CW.model$PolicyInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyInformationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyInformationRecord = (function (_super) {
__extends(PolicyInformationRecord, _super);
function PolicyInformationRecord(defaults) {
_super.apply(this, arguments);
}
PolicyInformationRecord.attributesToDeclare = function () {
return [
this.attr("PolicyInformation", "policyInformationAttr", "PolicyInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyInformationRec());
}, true, ApplicationPoliciesModel.PolicyInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyInformationRecord.fromStructure = function (str) {
return new PolicyInformationRecord(new PolicyInformationRecord.RecordClass({
policyInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyInformationRecord._isAnonymousRecord = true;
PolicyInformationRecord.UniqueId = "210bca4b-0362-71bb-ca70-d0c0227256b6";
PolicyInformationRecord.init();
return PolicyInformationRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyInformationRecord = PolicyInformationRecord;

});
define("ApplicationPolicies_CW.model$SegmentRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$SegmentRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var SegmentRecord = (function (_super) {
__extends(SegmentRecord, _super);
function SegmentRecord(defaults) {
_super.apply(this, arguments);
}
SegmentRecord.attributesToDeclare = function () {
return [
this.attr("Segment", "segmentAttr", "Segment", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.SegmentRec());
}, true, ApplicationPoliciesModel.SegmentRec)
].concat(_super.attributesToDeclare.call(this));
};
SegmentRecord.fromStructure = function (str) {
return new SegmentRecord(new SegmentRecord.RecordClass({
segmentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SegmentRecord._isAnonymousRecord = true;
SegmentRecord.UniqueId = "6bed8ed2-a997-68dd-4cdf-fba6b23f27a1";
SegmentRecord.init();
return SegmentRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.SegmentRecord = SegmentRecord;

});
define("ApplicationPolicies_CW.model$SegmentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$SegmentRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var SegmentRecordList = (function (_super) {
__extends(SegmentRecordList, _super);
function SegmentRecordList(defaults) {
_super.apply(this, arguments);
}
SegmentRecordList.itemType = ApplicationPolicies_CWModel.SegmentRecord;
return SegmentRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.SegmentRecordList = SegmentRecordList;

});
define("ApplicationPolicies_CW.model$PolicyInformationList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyInformationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyInformationList = (function (_super) {
__extends(PolicyInformationList, _super);
function PolicyInformationList(defaults) {
_super.apply(this, arguments);
}
PolicyInformationList.itemType = ApplicationPoliciesModel.PolicyInformationRec;
return PolicyInformationList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyInformationList = PolicyInformationList;

});
define("ApplicationPolicies_CW.model$PolicyRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyRecord = (function (_super) {
__extends(PolicyRecord, _super);
function PolicyRecord(defaults) {
_super.apply(this, arguments);
}
PolicyRecord.attributesToDeclare = function () {
return [
this.attr("Policy", "policyAttr", "Policy", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyRec());
}, true, ApplicationPoliciesModel.PolicyRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyRecord.fromStructure = function (str) {
return new PolicyRecord(new PolicyRecord.RecordClass({
policyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyRecord._isAnonymousRecord = true;
PolicyRecord.UniqueId = "dedbaaa4-0254-292c-700a-edee65dd8a13";
PolicyRecord.init();
return PolicyRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyRecord = PolicyRecord;

});
define("ApplicationPolicies_CW.model$PolicyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyRecordList = (function (_super) {
__extends(PolicyRecordList, _super);
function PolicyRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyRecordList.itemType = ApplicationPolicies_CWModel.PolicyRecord;
return PolicyRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyRecordList = PolicyRecordList;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceDeviceDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyAcceptanceDeviceDetailsRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceDeviceDetailsRecord = (function (_super) {
__extends(PolicyAcceptanceDeviceDetailsRecord, _super);
function PolicyAcceptanceDeviceDetailsRecord(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceDeviceDetailsRecord.attributesToDeclare = function () {
return [
this.attr("PolicyAcceptanceDeviceDetails", "policyAcceptanceDeviceDetailsAttr", "PolicyAcceptanceDeviceDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyAcceptanceDeviceDetailsRec());
}, true, ApplicationPoliciesModel.PolicyAcceptanceDeviceDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyAcceptanceDeviceDetailsRecord.fromStructure = function (str) {
return new PolicyAcceptanceDeviceDetailsRecord(new PolicyAcceptanceDeviceDetailsRecord.RecordClass({
policyAcceptanceDeviceDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyAcceptanceDeviceDetailsRecord._isAnonymousRecord = true;
PolicyAcceptanceDeviceDetailsRecord.UniqueId = "32fe567e-1c2b-7bd4-bea3-1587ab6637cc";
PolicyAcceptanceDeviceDetailsRecord.init();
return PolicyAcceptanceDeviceDetailsRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyAcceptanceDeviceDetailsRecord = PolicyAcceptanceDeviceDetailsRecord;

});
define("ApplicationPolicies_CW.model$PolicyTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyTypeRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyTypeRecord = (function (_super) {
__extends(PolicyTypeRecord, _super);
function PolicyTypeRecord(defaults) {
_super.apply(this, arguments);
}
PolicyTypeRecord.attributesToDeclare = function () {
return [
this.attr("PolicyType", "policyTypeAttr", "PolicyType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyTypeRec());
}, true, ApplicationPoliciesModel.PolicyTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyTypeRecord.fromStructure = function (str) {
return new PolicyTypeRecord(new PolicyTypeRecord.RecordClass({
policyTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyTypeRecord._isAnonymousRecord = true;
PolicyTypeRecord.UniqueId = "3547d40c-9f22-e9ed-a39d-3df7e4f00425";
PolicyTypeRecord.init();
return PolicyTypeRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyTypeRecord = PolicyTypeRecord;

});
define("ApplicationPolicies_CW.model$RegisteredApplicationRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$RegisteredApplicationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var RegisteredApplicationRecord = (function (_super) {
__extends(RegisteredApplicationRecord, _super);
function RegisteredApplicationRecord(defaults) {
_super.apply(this, arguments);
}
RegisteredApplicationRecord.attributesToDeclare = function () {
return [
this.attr("RegisteredApplication", "registeredApplicationAttr", "RegisteredApplication", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.RegisteredApplicationRec());
}, true, ApplicationPoliciesModel.RegisteredApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredApplicationRecord.fromStructure = function (str) {
return new RegisteredApplicationRecord(new RegisteredApplicationRecord.RecordClass({
registeredApplicationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RegisteredApplicationRecord._isAnonymousRecord = true;
RegisteredApplicationRecord.UniqueId = "6c8a0177-6dc4-dfa9-c78b-febdfb2bb708";
RegisteredApplicationRecord.init();
return RegisteredApplicationRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.RegisteredApplicationRecord = RegisteredApplicationRecord;

});
define("ApplicationPolicies_CW.model$RegisteredApplicationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$RegisteredApplicationRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var RegisteredApplicationRecordList = (function (_super) {
__extends(RegisteredApplicationRecordList, _super);
function RegisteredApplicationRecordList(defaults) {
_super.apply(this, arguments);
}
RegisteredApplicationRecordList.itemType = ApplicationPolicies_CWModel.RegisteredApplicationRecord;
return RegisteredApplicationRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.RegisteredApplicationRecordList = RegisteredApplicationRecordList;

});
define("ApplicationPolicies_CW.model$PolicyApplicationRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyApplicationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyApplicationRecord = (function (_super) {
__extends(PolicyApplicationRecord, _super);
function PolicyApplicationRecord(defaults) {
_super.apply(this, arguments);
}
PolicyApplicationRecord.attributesToDeclare = function () {
return [
this.attr("PolicyApplication", "policyApplicationAttr", "PolicyApplication", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.PolicyApplicationRec());
}, true, ApplicationPoliciesModel.PolicyApplicationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyApplicationRecord.fromStructure = function (str) {
return new PolicyApplicationRecord(new PolicyApplicationRecord.RecordClass({
policyApplicationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyApplicationRecord._isAnonymousRecord = true;
PolicyApplicationRecord.UniqueId = "3d7e4130-98ee-23db-c2ba-ac996b07cab1";
PolicyApplicationRecord.init();
return PolicyApplicationRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyApplicationRecord = PolicyApplicationRecord;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceDeviceDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyAcceptanceDeviceDetailsRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceDeviceDetailsRecordList = (function (_super) {
__extends(PolicyAcceptanceDeviceDetailsRecordList, _super);
function PolicyAcceptanceDeviceDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceDeviceDetailsRecordList.itemType = ApplicationPolicies_CWModel.PolicyAcceptanceDeviceDetailsRecord;
return PolicyAcceptanceDeviceDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyAcceptanceDeviceDetailsRecordList = PolicyAcceptanceDeviceDetailsRecordList;

});
define("ApplicationPolicies_CW.model$PolicyList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyList = (function (_super) {
__extends(PolicyList, _super);
function PolicyList(defaults) {
_super.apply(this, arguments);
}
PolicyList.itemType = ApplicationPoliciesModel.PolicyRec;
return PolicyList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyList = PolicyList;

});
define("ApplicationPolicies_CW.model$PolicyTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyTypeRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyTypeRecordList = (function (_super) {
__extends(PolicyTypeRecordList, _super);
function PolicyTypeRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyTypeRecordList.itemType = ApplicationPolicies_CWModel.PolicyTypeRecord;
return PolicyTypeRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyTypeRecordList = PolicyTypeRecordList;

});
define("ApplicationPolicies_CW.model$SegmentList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$SegmentRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var SegmentList = (function (_super) {
__extends(SegmentList, _super);
function SegmentList(defaults) {
_super.apply(this, arguments);
}
SegmentList.itemType = ApplicationPoliciesModel.SegmentRec;
return SegmentList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.SegmentList = SegmentList;

});
define("ApplicationPolicies_CW.model$PolicyApplicationList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$PolicyApplicationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyApplicationList = (function (_super) {
__extends(PolicyApplicationList, _super);
function PolicyApplicationList(defaults) {
_super.apply(this, arguments);
}
PolicyApplicationList.itemType = ApplicationPoliciesModel.PolicyApplicationRec;
return PolicyApplicationList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyApplicationList = PolicyApplicationList;

});
define("ApplicationPolicies_CW.model$RegisteredPolicyTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$RegisteredPolicyTypeRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var RegisteredPolicyTypeRecord = (function (_super) {
__extends(RegisteredPolicyTypeRecord, _super);
function RegisteredPolicyTypeRecord(defaults) {
_super.apply(this, arguments);
}
RegisteredPolicyTypeRecord.attributesToDeclare = function () {
return [
this.attr("RegisteredPolicyType", "registeredPolicyTypeAttr", "RegisteredPolicyType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPoliciesModel.RegisteredPolicyTypeRec());
}, true, ApplicationPoliciesModel.RegisteredPolicyTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
RegisteredPolicyTypeRecord.fromStructure = function (str) {
return new RegisteredPolicyTypeRecord(new RegisteredPolicyTypeRecord.RecordClass({
registeredPolicyTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RegisteredPolicyTypeRecord._isAnonymousRecord = true;
RegisteredPolicyTypeRecord.UniqueId = "9dc44059-f043-1857-820e-74056ad6ad51";
RegisteredPolicyTypeRecord.init();
return RegisteredPolicyTypeRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.RegisteredPolicyTypeRecord = RegisteredPolicyTypeRecord;

});
define("ApplicationPolicies_CW.model$RegisteredPolicyTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$RegisteredPolicyTypeRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var RegisteredPolicyTypeRecordList = (function (_super) {
__extends(RegisteredPolicyTypeRecordList, _super);
function RegisteredPolicyTypeRecordList(defaults) {
_super.apply(this, arguments);
}
RegisteredPolicyTypeRecordList.itemType = ApplicationPolicies_CWModel.RegisteredPolicyTypeRecord;
return RegisteredPolicyTypeRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.RegisteredPolicyTypeRecordList = RegisteredPolicyTypeRecordList;

});
define("ApplicationPolicies_CW.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "ApplicationPolicies_CW.model", "ServiceCenter.model$UserRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, true, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.UserRecord = UserRecord;

});
define("ApplicationPolicies_CW.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$UserRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = ApplicationPolicies_CWModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.UserRecordList = UserRecordList;

});
define("ApplicationPolicies_CW.model$RegisteredApplicationList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$RegisteredApplicationRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var RegisteredApplicationList = (function (_super) {
__extends(RegisteredApplicationList, _super);
function RegisteredApplicationList(defaults) {
_super.apply(this, arguments);
}
RegisteredApplicationList.itemType = ApplicationPoliciesModel.RegisteredApplicationRec;
return RegisteredApplicationList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.RegisteredApplicationList = RegisteredApplicationList;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyAcceptanceInformationRec"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceInformationRecord = (function (_super) {
__extends(PolicyAcceptanceInformationRecord, _super);
function PolicyAcceptanceInformationRecord(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceInformationRecord.attributesToDeclare = function () {
return [
this.attr("PolicyAcceptanceInformation", "policyAcceptanceInformationAttr", "PolicyAcceptanceInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ApplicationPolicies_CWModel.PolicyAcceptanceInformationRec());
}, true, ApplicationPolicies_CWModel.PolicyAcceptanceInformationRec)
].concat(_super.attributesToDeclare.call(this));
};
PolicyAcceptanceInformationRecord.fromStructure = function (str) {
return new PolicyAcceptanceInformationRecord(new PolicyAcceptanceInformationRecord.RecordClass({
policyAcceptanceInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PolicyAcceptanceInformationRecord._isAnonymousRecord = true;
PolicyAcceptanceInformationRecord.UniqueId = "97e0c9d3-cd9b-7814-bbea-69706cb1e204";
PolicyAcceptanceInformationRecord.init();
return PolicyAcceptanceInformationRecord;
})(OS.DataTypes.GenericRecord);
ApplicationPolicies_CWModel.PolicyAcceptanceInformationRecord = PolicyAcceptanceInformationRecord;

});
define("ApplicationPolicies_CW.model$PolicyAcceptanceInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyAcceptanceInformationRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyAcceptanceInformationRecordList = (function (_super) {
__extends(PolicyAcceptanceInformationRecordList, _super);
function PolicyAcceptanceInformationRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyAcceptanceInformationRecordList.itemType = ApplicationPolicies_CWModel.PolicyAcceptanceInformationRecord;
return PolicyAcceptanceInformationRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyAcceptanceInformationRecordList = PolicyAcceptanceInformationRecordList;

});
define("ApplicationPolicies_CW.model$PolicyInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyInformationRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyInformationRecordList = (function (_super) {
__extends(PolicyInformationRecordList, _super);
function PolicyInformationRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyInformationRecordList.itemType = ApplicationPolicies_CWModel.PolicyInformationRecord;
return PolicyInformationRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyInformationRecordList = PolicyInformationRecordList;

});
define("ApplicationPolicies_CW.model$PolicyApplicationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.model$PolicyApplicationRecord"], function (exports, OutSystems, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var PolicyApplicationRecordList = (function (_super) {
__extends(PolicyApplicationRecordList, _super);
function PolicyApplicationRecordList(defaults) {
_super.apply(this, arguments);
}
PolicyApplicationRecordList.itemType = ApplicationPolicies_CWModel.PolicyApplicationRecord;
return PolicyApplicationRecordList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.PolicyApplicationRecordList = PolicyApplicationRecordList;

});
define("ApplicationPolicies_CW.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "ApplicationPolicies_CW.model", "ServiceCenter.model$UserRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.itemType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.UserList = UserList;

});
define("ApplicationPolicies_CW.model$RegisteredPolicyTypeList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies.model$RegisteredPolicyTypeRec", "ApplicationPolicies_CW.referencesHealth", "ApplicationPolicies_CW.referencesHealth$ApplicationPolicies"], function (exports, OutSystems, ApplicationPoliciesModel, ApplicationPolicies_CWModel) {
var OS = OutSystems.Internal;
var RegisteredPolicyTypeList = (function (_super) {
__extends(RegisteredPolicyTypeList, _super);
function RegisteredPolicyTypeList(defaults) {
_super.apply(this, arguments);
}
RegisteredPolicyTypeList.itemType = ApplicationPoliciesModel.RegisteredPolicyTypeRec;
return RegisteredPolicyTypeList;
})(OS.DataTypes.GenericRecordList);
ApplicationPolicies_CWModel.RegisteredPolicyTypeList = RegisteredPolicyTypeList;

});
define("ApplicationPolicies_CW.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ApplicationPolicies_CWModel = exports;
Object.defineProperty(ApplicationPolicies_CWModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["977342de-c002-43af-b359-b19093ed2543"];
}
});

ApplicationPolicies_CWModel.staticEntities = {};
ApplicationPolicies_CWModel.staticEntities.policyType = {};
var getPolicyTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["41127a3e-e405-4aa0-811c-14b06aacb8ef"].staticEntities["74e14211-802c-42c0-8c70-b54e8b716772"][record];
};
ApplicationPolicies_CWModel.staticEntities.policyApplication = {};
var getPolicyApplicationRecord = function (record) {
return OS.ApplicationInfo.getModules()["41127a3e-e405-4aa0-811c-14b06aacb8ef"].staticEntities["d51e99a8-c297-4c03-834b-a9a1b38c0996"][record];
};
});
