define("Firebase.model$FirebaseEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventRec = (function (_super) {
__extends(FirebaseEventRec, _super);
function FirebaseEventRec(defaults) {
_super.apply(this, arguments);
}
FirebaseEventRec.attributesToDeclare = function () {
return [
this.attr("EventIdentifier", "eventIdentifierAttr", "EventIdentifier", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EventDateTime", "eventDateTimeAttr", "EventDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventType", "eventTypeAttr", "EventType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventText", "eventTextAttr", "EventText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdvancedJSON", "advancedJSONAttr", "AdvancedJSON", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FirebaseEventRec.init();
return FirebaseEventRec;
})(OS.DataTypes.GenericRecord);
FirebaseModel.FirebaseEventRec = FirebaseEventRec;

});
define("Firebase.model$FirebaseEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FirebaseEventRec"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventRecord = (function (_super) {
__extends(FirebaseEventRecord, _super);
function FirebaseEventRecord(defaults) {
_super.apply(this, arguments);
}
FirebaseEventRecord.attributesToDeclare = function () {
return [
this.attr("FirebaseEvent", "firebaseEventAttr", "FirebaseEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseModel.FirebaseEventRec());
}, true, FirebaseModel.FirebaseEventRec)
].concat(_super.attributesToDeclare.call(this));
};
FirebaseEventRecord.fromStructure = function (str) {
return new FirebaseEventRecord(new FirebaseEventRecord.RecordClass({
firebaseEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FirebaseEventRecord._isAnonymousRecord = true;
FirebaseEventRecord.UniqueId = "c8201267-45ce-8e1f-e229-a7336ffdc0d0";
FirebaseEventRecord.init();
return FirebaseEventRecord;
})(OS.DataTypes.GenericRecord);
FirebaseModel.FirebaseEventRecord = FirebaseEventRecord;

});
define("Firebase.model$FirebaseEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FirebaseEventRecord"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventRecordList = (function (_super) {
__extends(FirebaseEventRecordList, _super);
function FirebaseEventRecordList(defaults) {
_super.apply(this, arguments);
}
FirebaseEventRecordList.itemType = FirebaseModel.FirebaseEventRecord;
return FirebaseEventRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseModel.FirebaseEventRecordList = FirebaseEventRecordList;

});
define("Firebase.model$FBAuthenticationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FBAuthenticationTypeRec = (function (_super) {
__extends(FBAuthenticationTypeRec, _super);
function FBAuthenticationTypeRec(defaults) {
_super.apply(this, arguments);
}
FBAuthenticationTypeRec.attributesToDeclare = function () {
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
FBAuthenticationTypeRec.init();
return FBAuthenticationTypeRec;
})(OS.DataTypes.GenericRecord);
FirebaseModel.FBAuthenticationTypeRec = FBAuthenticationTypeRec;

});
define("Firebase.model$FBAuthenticationTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FBAuthenticationTypeRec"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FBAuthenticationTypeRecord = (function (_super) {
__extends(FBAuthenticationTypeRecord, _super);
function FBAuthenticationTypeRecord(defaults) {
_super.apply(this, arguments);
}
FBAuthenticationTypeRecord.attributesToDeclare = function () {
return [
this.attr("FBAuthenticationType", "fBAuthenticationTypeAttr", "FBAuthenticationType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseModel.FBAuthenticationTypeRec());
}, true, FirebaseModel.FBAuthenticationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
FBAuthenticationTypeRecord.fromStructure = function (str) {
return new FBAuthenticationTypeRecord(new FBAuthenticationTypeRecord.RecordClass({
fBAuthenticationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FBAuthenticationTypeRecord._isAnonymousRecord = true;
FBAuthenticationTypeRecord.UniqueId = "8df25686-369c-4e4b-2455-306a0536463c";
FBAuthenticationTypeRecord.init();
return FBAuthenticationTypeRecord;
})(OS.DataTypes.GenericRecord);
FirebaseModel.FBAuthenticationTypeRecord = FBAuthenticationTypeRecord;

});
define("Firebase.model$FBAuthenticationTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FBAuthenticationTypeRecord"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FBAuthenticationTypeRecordList = (function (_super) {
__extends(FBAuthenticationTypeRecordList, _super);
function FBAuthenticationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
FBAuthenticationTypeRecordList.itemType = FirebaseModel.FBAuthenticationTypeRecord;
return FBAuthenticationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseModel.FBAuthenticationTypeRecordList = FBAuthenticationTypeRecordList;

});
define("Firebase.model$FirebaseEventTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventTypeRec = (function (_super) {
__extends(FirebaseEventTypeRec, _super);
function FirebaseEventTypeRec(defaults) {
_super.apply(this, arguments);
}
FirebaseEventTypeRec.attributesToDeclare = function () {
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
FirebaseEventTypeRec.init();
return FirebaseEventTypeRec;
})(OS.DataTypes.GenericRecord);
FirebaseModel.FirebaseEventTypeRec = FirebaseEventTypeRec;

});
define("Firebase.model$FirebaseEventTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FirebaseEventTypeRec"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventTypeRecord = (function (_super) {
__extends(FirebaseEventTypeRecord, _super);
function FirebaseEventTypeRecord(defaults) {
_super.apply(this, arguments);
}
FirebaseEventTypeRecord.attributesToDeclare = function () {
return [
this.attr("FirebaseEventType", "firebaseEventTypeAttr", "FirebaseEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FirebaseModel.FirebaseEventTypeRec());
}, true, FirebaseModel.FirebaseEventTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
FirebaseEventTypeRecord.fromStructure = function (str) {
return new FirebaseEventTypeRecord(new FirebaseEventTypeRecord.RecordClass({
firebaseEventTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FirebaseEventTypeRecord._isAnonymousRecord = true;
FirebaseEventTypeRecord.UniqueId = "d368e5cd-eff2-ecaf-bb44-af199f8ce55d";
FirebaseEventTypeRecord.init();
return FirebaseEventTypeRecord;
})(OS.DataTypes.GenericRecord);
FirebaseModel.FirebaseEventTypeRecord = FirebaseEventTypeRecord;

});
define("Firebase.model$FirebaseEventTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FirebaseEventTypeRecord"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventTypeRecordList = (function (_super) {
__extends(FirebaseEventTypeRecordList, _super);
function FirebaseEventTypeRecordList(defaults) {
_super.apply(this, arguments);
}
FirebaseEventTypeRecordList.itemType = FirebaseModel.FirebaseEventTypeRecord;
return FirebaseEventTypeRecordList;
})(OS.DataTypes.GenericRecordList);
FirebaseModel.FirebaseEventTypeRecordList = FirebaseEventTypeRecordList;

});
define("Firebase.model$FirebaseEventTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FirebaseEventTypeRec"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventTypeList = (function (_super) {
__extends(FirebaseEventTypeList, _super);
function FirebaseEventTypeList(defaults) {
_super.apply(this, arguments);
}
FirebaseEventTypeList.itemType = FirebaseModel.FirebaseEventTypeRec;
return FirebaseEventTypeList;
})(OS.DataTypes.GenericRecordList);
FirebaseModel.FirebaseEventTypeList = FirebaseEventTypeList;

});
define("Firebase.model$FirebaseEventList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FirebaseEventRec"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FirebaseEventList = (function (_super) {
__extends(FirebaseEventList, _super);
function FirebaseEventList(defaults) {
_super.apply(this, arguments);
}
FirebaseEventList.itemType = FirebaseModel.FirebaseEventRec;
return FirebaseEventList;
})(OS.DataTypes.GenericRecordList);
FirebaseModel.FirebaseEventList = FirebaseEventList;

});
define("Firebase.model$FBAuthenticationTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "Firebase.model$FBAuthenticationTypeRec"], function (exports, OutSystems, FirebaseModel) {
var OS = OutSystems.Internal;
var FBAuthenticationTypeList = (function (_super) {
__extends(FBAuthenticationTypeList, _super);
function FBAuthenticationTypeList(defaults) {
_super.apply(this, arguments);
}
FBAuthenticationTypeList.itemType = FirebaseModel.FBAuthenticationTypeRec;
return FBAuthenticationTypeList;
})(OS.DataTypes.GenericRecordList);
FirebaseModel.FBAuthenticationTypeList = FBAuthenticationTypeList;

});
define("Firebase.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var FirebaseModel = exports;
Object.defineProperty(FirebaseModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["157b7c0f-d120-41d2-a1f5-8b257d7eb769"];
}
});

FirebaseModel.staticEntities = {};
FirebaseModel.staticEntities.firebaseEventType = {};
var getFirebaseEventTypeRecord = function (record) {
return FirebaseModel.module.staticEntities["315452ae-59ed-4a1e-b708-caea1e024e9a"][record];
};
Object.defineProperty(FirebaseModel.staticEntities.firebaseEventType, "eventReceived", {
get: function () {
return getFirebaseEventTypeRecord("ddeed887-cb64-4080-a211-717aef1d6ba8");
}
});

FirebaseModel.staticEntities.fBAuthenticationType = {};
var getFBAuthenticationTypeRecord = function (record) {
return FirebaseModel.module.staticEntities["319bbcff-8c85-40f4-a618-11abaaff59b8"][record];
};
Object.defineProperty(FirebaseModel.staticEntities.fBAuthenticationType, "emailAndPassword", {
get: function () {
return getFBAuthenticationTypeRecord("56686e4e-969e-486f-b3ca-19d1715c3abe");
}
});

Object.defineProperty(FirebaseModel.staticEntities.fBAuthenticationType, "none", {
get: function () {
return getFBAuthenticationTypeRecord("bfae01ce-796b-4361-9cdf-cce3e8a0d857");
}
});

Object.defineProperty(FirebaseModel.staticEntities.fBAuthenticationType, "anonymous", {
get: function () {
return getFBAuthenticationTypeRecord("d0231e51-ea28-438a-99ed-61a8255b17a3");
}
});

Object.defineProperty(FirebaseModel.staticEntities.fBAuthenticationType, "jWTToken", {
get: function () {
return getFBAuthenticationTypeRecord("e1db53d3-fb41-4234-b7db-3f4e91491699");
}
});

});
