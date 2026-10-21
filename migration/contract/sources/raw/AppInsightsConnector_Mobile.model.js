define("AppInsightsConnector_Mobile.model$LocalCustomLogsRec", ["exports", "OutSystems/ClientRuntime/Main", "AppInsightsConnector_Mobile.model"], function (exports, OutSystems, AppInsightsConnector_MobileModel) {
var OS = OutSystems.Internal;
var LocalCustomLogsRec = (function (_super) {
__extends(LocalCustomLogsRec, _super);
function LocalCustomLogsRec(defaults) {
_super.apply(this, arguments);
}
LocalCustomLogsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LocalCustomLogsRec.init();
return LocalCustomLogsRec;
})(OS.DataTypes.GenericRecord);
AppInsightsConnector_MobileModel.LocalCustomLogsRec = LocalCustomLogsRec;

});
define("AppInsightsConnector_Mobile.model$LocalCustomLogsRecord", ["exports", "OutSystems/ClientRuntime/Main", "AppInsightsConnector_Mobile.model", "AppInsightsConnector_Mobile.model$LocalCustomLogsRec"], function (exports, OutSystems, AppInsightsConnector_MobileModel) {
var OS = OutSystems.Internal;
var LocalCustomLogsRecord = (function (_super) {
__extends(LocalCustomLogsRecord, _super);
function LocalCustomLogsRecord(defaults) {
_super.apply(this, arguments);
}
LocalCustomLogsRecord.attributesToDeclare = function () {
return [
this.attr("LocalCustomLogs", "localCustomLogsAttr", "LocalCustomLogs", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new AppInsightsConnector_MobileModel.LocalCustomLogsRec());
}, true, AppInsightsConnector_MobileModel.LocalCustomLogsRec)
].concat(_super.attributesToDeclare.call(this));
};
LocalCustomLogsRecord.fromStructure = function (str) {
return new LocalCustomLogsRecord(new LocalCustomLogsRecord.RecordClass({
localCustomLogsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LocalCustomLogsRecord._isAnonymousRecord = true;
LocalCustomLogsRecord.UniqueId = "310450b6-5da9-d077-768b-3f5bdf5cc894";
LocalCustomLogsRecord.init();
return LocalCustomLogsRecord;
})(OS.DataTypes.GenericRecord);
AppInsightsConnector_MobileModel.LocalCustomLogsRecord = LocalCustomLogsRecord;

});
define("AppInsightsConnector_Mobile.model$LocalCustomLogsList", ["exports", "OutSystems/ClientRuntime/Main", "AppInsightsConnector_Mobile.model", "AppInsightsConnector_Mobile.model$LocalCustomLogsRec"], function (exports, OutSystems, AppInsightsConnector_MobileModel) {
var OS = OutSystems.Internal;
var LocalCustomLogsList = (function (_super) {
__extends(LocalCustomLogsList, _super);
function LocalCustomLogsList(defaults) {
_super.apply(this, arguments);
}
LocalCustomLogsList.itemType = AppInsightsConnector_MobileModel.LocalCustomLogsRec;
return LocalCustomLogsList;
})(OS.DataTypes.GenericRecordList);
AppInsightsConnector_MobileModel.LocalCustomLogsList = LocalCustomLogsList;

});
define("AppInsightsConnector_Mobile.model$LocalCustomLogsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "AppInsightsConnector_Mobile.model", "AppInsightsConnector_Mobile.model$LocalCustomLogsRecord"], function (exports, OutSystems, AppInsightsConnector_MobileModel) {
var OS = OutSystems.Internal;
var LocalCustomLogsRecordList = (function (_super) {
__extends(LocalCustomLogsRecordList, _super);
function LocalCustomLogsRecordList(defaults) {
_super.apply(this, arguments);
}
LocalCustomLogsRecordList.itemType = AppInsightsConnector_MobileModel.LocalCustomLogsRecord;
return LocalCustomLogsRecordList;
})(OS.DataTypes.GenericRecordList);
AppInsightsConnector_MobileModel.LocalCustomLogsRecordList = LocalCustomLogsRecordList;

});
define("AppInsightsConnector_Mobile.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var AppInsightsConnector_MobileModel = exports;
Object.defineProperty(AppInsightsConnector_MobileModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["9e57e21b-26c3-448d-93e5-81b23885ff9c"];
}
});

AppInsightsConnector_MobileModel.staticEntities = {};
});
