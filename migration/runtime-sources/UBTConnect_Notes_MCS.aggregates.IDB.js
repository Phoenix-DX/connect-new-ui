define("UBTConnect_Notes_MCS.aggregates.IDB", ["OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecordList", "UBTConnect_Notes_MCS.model$NoteCategoryIdentifierRecordList", "UBTConnect_Notes_MCS.model$IntegerRecordList", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
var serializer = new OS.IndexedDBSerializer.default();
function ClientAggregates() {
}
function executeTransaction(body, entityInfos) {
var dbServ = OS.Injector.resolve(OS.ServiceNames.EntityService);
return dbServ.executeAggregate(function (transaction) {
return body(transaction);
}, entityInfos);
}
function compare(v1, v2) {
if(( typeof v1 === "string")) {
return (v1.toLocaleLowerCase() > v2.toLocaleLowerCase()) ? 1 : (v1.toLocaleLowerCase() < v2.toLocaleLowerCase()) ? -1 : 0;
}

return OS.DataTypes.compare(v1, v2);
}
ClientAggregates.executeCreateOrUpdateLocalNote$ClientAction$getLocalNotesByNoteIdAggr = function (qpinUserId, qploNoteId, maxRecords) {
var LocalNote_Info = UBTConnect_Notes_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "33971c5f-8dc6-4984-b811-3fdccecb57f5");
})[0];
var aggrEntityInfos = [LocalNote_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Notes_MCSModel.LocalNoteRecordList();
var GetLocalNotesByNoteId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", "Executing Client Aggregate: executeCreateOrUpdateLocalNote$ClientAction$getLocalNotesByNoteIdAggr");
var LocalNote_ObjectStore = transaction.objectStore("OSUSR_18U_LOCALNOTE");
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", function () {
return "Opening store: " + LocalNote_ObjectStore.name;
});
var LocalNote_idxValue = serializer.serialize(qpinUserId, LocalNote_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalNote_ObjectStore = LocalNote_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalNote_GetRequest = LocalNote_ObjectStore.getAll(IDBKeyRange.only(LocalNote_idxValue));
LocalNote_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalNotesByNoteId\": " + LocalNote_GetRequest.error);
};
LocalNote_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalNote_Value) {
return new Promise(function (LocalNote_GetResolve, reject) {
LocalNote_Value = serializer.deserialize(LocalNote_Value, LocalNote_Info, UBTConnect_Notes_MCSModel.LocalNoteRec);
if(LocalNote_Value.noteIdAttr.equals(qploNoteId)) {
var GetLocalNotesByNoteId_Result = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
GetLocalNotesByNoteId_Result.localNoteAttr = LocalNote_Value;
for (let key in GetLocalNotesByNoteId_Item) {
GetLocalNotesByNoteId_Result[key]=GetLocalNotesByNoteId_Item[key];
}

result.append(GetLocalNotesByNoteId_Result);
}

LocalNote_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", "Executing Max Records");
var result = {
list: new UBTConnect_Notes_MCSModel.LocalNoteRecordList(),
count: OS.BuiltinFunctions.integerToLongInteger(resultList.length)
};
if((!(maxRecords) || (maxRecords >= resultList.length))) {
result.list = resultList;
return result;
}

for (let i = 0; i < maxRecords; i++) {
var newResultItem = resultList.getItem(i);
result.list.append(newResultItem);
}

return result;
});
};
ClientAggregates.executeGetLocalNoteByNoteId$ClientAction$getLocalNotesByNoteIdAggr = function (qpinUserId, qploNoteId, maxRecords) {
var LocalNote_Info = UBTConnect_Notes_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "33971c5f-8dc6-4984-b811-3fdccecb57f5");
})[0];
var aggrEntityInfos = [LocalNote_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Notes_MCSModel.LocalNoteRecordList();
var GetLocalNotesByNoteId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", "Executing Client Aggregate: executeGetLocalNoteByNoteId$ClientAction$getLocalNotesByNoteIdAggr");
var LocalNote_ObjectStore = transaction.objectStore("OSUSR_18U_LOCALNOTE");
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", function () {
return "Opening store: " + LocalNote_ObjectStore.name;
});
var LocalNote_idxValue = serializer.serialize(qpinUserId, LocalNote_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalNote_ObjectStore = LocalNote_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalNote_GetRequest = LocalNote_ObjectStore.getAll(IDBKeyRange.only(LocalNote_idxValue));
LocalNote_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalNotesByNoteId\": " + LocalNote_GetRequest.error);
};
LocalNote_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalNote_Value) {
return new Promise(function (LocalNote_GetResolve, reject) {
LocalNote_Value = serializer.deserialize(LocalNote_Value, LocalNote_Info, UBTConnect_Notes_MCSModel.LocalNoteRec);
if(LocalNote_Value.noteIdAttr.equals(qploNoteId)) {
var GetLocalNotesByNoteId_Result = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
GetLocalNotesByNoteId_Result.localNoteAttr = LocalNote_Value;
for (let key in GetLocalNotesByNoteId_Item) {
GetLocalNotesByNoteId_Result[key]=GetLocalNotesByNoteId_Item[key];
}

result.append(GetLocalNotesByNoteId_Result);
}

LocalNote_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalNotesByNoteId", "Executing Max Records");
var result = {
list: new UBTConnect_Notes_MCSModel.LocalNoteRecordList(),
count: OS.BuiltinFunctions.integerToLongInteger(resultList.length)
};
if((!(maxRecords) || (maxRecords >= resultList.length))) {
result.list = resultList;
return result;
}

for (let i = 0; i < maxRecords; i++) {
var newResultItem = resultList.getItem(i);
result.list.append(newResultItem);
}

return result;
});
};
ClientAggregates.executeGetNoteDynamicPills$ClientAction$getLocalNotesCategoryIds_ByUserIdAggr = function (qpinUserId, maxRecords) {
var LocalNote_Info = UBTConnect_Notes_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "33971c5f-8dc6-4984-b811-3fdccecb57f5");
})[0];
var aggrEntityInfos = [LocalNote_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecordList();
var GetLocalNotesCategoryIds_ByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalNotesCategoryIds_ByUserId", "Executing Client Aggregate: executeGetNoteDynamicPills$ClientAction$getLocalNotesCategoryIds_ByUserIdAggr");
var LocalNote_ObjectStore = transaction.objectStore("OSUSR_18U_LOCALNOTE");
OS.Logger.trace("AggregatesModule_GetLocalNotesCategoryIds_ByUserId", function () {
return "Opening store: " + LocalNote_ObjectStore.name;
});
var LocalNote_idxValue = serializer.serialize(qpinUserId, LocalNote_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalNote_ObjectStore = LocalNote_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalNotesCategoryIds_ByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalNote_GetRequest = LocalNote_ObjectStore.getAll(IDBKeyRange.only(LocalNote_idxValue));
LocalNote_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalNotesCategoryIds_ByUserId\": " + LocalNote_GetRequest.error);
};
LocalNote_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalNote_Value) {
return new Promise(function (LocalNote_GetResolve, reject) {
LocalNote_Value = serializer.deserialize(LocalNote_Value, LocalNote_Info, UBTConnect_Notes_MCSModel.LocalNoteRec);
if(((LocalNote_Value.noteCategoryIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) {
OS.Logger.trace("AggregatesModule_GetLocalNotesCategoryIds_ByUserId", "Executing Groupbys");
var keyObject = {
NoteCategoryId: LocalNote_Value.noteCategoryIdAttr
};
var key = JSON.stringify(keyObject);
var group = groups[key];
if(!(group)) {
group = {};
group.noteCategoryIdAttr = LocalNote_Value.noteCategoryIdAttr;
groups[key]=group;
}

}

LocalNote_GetResolve();
});
})).then(function () {
var GetLocalNotesCategoryIds_ByUserId_Result = new UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecord();
for (let groupKey in groups) {
var GetLocalNotesCategoryIds_ByUserId_Result = new UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecord();
for (let key in groups[groupKey]) {
GetLocalNotesCategoryIds_ByUserId_Result[key]=groups[groupKey][key];
}

result.append(GetLocalNotesCategoryIds_ByUserId_Result);
}

resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalNotesCategoryIds_ByUserId", "Executing Max Records");
var result = {
list: new UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecordList(),
count: OS.BuiltinFunctions.integerToLongInteger(resultList.length)
};
if((!(maxRecords) || (maxRecords >= resultList.length))) {
result.list = resultList;
return result;
}

for (let i = 0; i < maxRecords; i++) {
var newResultItem = resultList.getItem(i);
result.list.append(newResultItem);
}

return result;
});
};
ClientAggregates.executeGetNoteDynamicFilterYearOptions$ClientAction$getLocalNotesByUserIdAggr = function (qpinUserId, maxRecords) {
var LocalNote_Info = UBTConnect_Notes_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "33971c5f-8dc6-4984-b811-3fdccecb57f5");
})[0];
var aggrEntityInfos = [LocalNote_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Notes_MCSModel.IntegerRecordList();
var GetLocalNotesByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalNotesByUserId", "Executing Client Aggregate: executeGetNoteDynamicFilterYearOptions$ClientAction$getLocalNotesByUserIdAggr");
var LocalNote_ObjectStore = transaction.objectStore("OSUSR_18U_LOCALNOTE");
OS.Logger.trace("AggregatesModule_GetLocalNotesByUserId", function () {
return "Opening store: " + LocalNote_ObjectStore.name;
});
var LocalNote_idxValue = serializer.serialize(qpinUserId, LocalNote_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalNote_ObjectStore = LocalNote_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalNotesByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalNote_GetRequest = LocalNote_ObjectStore.getAll(IDBKeyRange.only(LocalNote_idxValue));
LocalNote_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalNotesByUserId\": " + LocalNote_GetRequest.error);
};
LocalNote_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalNote_Value) {
return new Promise(function (LocalNote_GetResolve, reject) {
LocalNote_Value = serializer.deserialize(LocalNote_Value, LocalNote_Info, UBTConnect_Notes_MCSModel.LocalNoteRec);
GetLocalNotesByUserId_Item["attribute1Attr"]=((LocalNote_Value.dateEditedUtcAttr.equals(OS.BuiltinFunctions.nullDate())) ? (OS.BuiltinFunctions.year(LocalNote_Value.dateCreatedUtcAttr)) : (OS.BuiltinFunctions.year(LocalNote_Value.dateEditedUtcAttr)));
OS.Logger.trace("AggregatesModule_GetLocalNotesByUserId", "Executing Groupbys");
var keyObject = {
GroupByYear: GetLocalNotesByUserId_Item.attribute1Attr
};
var key = JSON.stringify(keyObject);
var group = groups[key];
if(!(group)) {
group = {};
group.groupByYearAttr = GetLocalNotesByUserId_Item.attribute1Attr;
groups[key]=group;
}

LocalNote_GetResolve();
});
})).then(function () {
var GetLocalNotesByUserId_Result = new UBTConnect_Notes_MCSModel.IntegerRecord();
for (let groupKey in groups) {
var GetLocalNotesByUserId_Result = new UBTConnect_Notes_MCSModel.IntegerRecord();
for (let key in groups[groupKey]) {
GetLocalNotesByUserId_Result[key]=groups[groupKey][key];
}

result.append(GetLocalNotesByUserId_Result);
}

resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalNotesByUserId", "Executing Max Records");
var result = {
list: new UBTConnect_Notes_MCSModel.IntegerRecordList(),
count: OS.BuiltinFunctions.integerToLongInteger(resultList.length)
};
if((!(maxRecords) || (maxRecords >= resultList.length))) {
result.list = resultList;
return result;
}

for (let i = 0; i < maxRecords; i++) {
var newResultItem = resultList.getItem(i);
result.list.append(newResultItem);
}

return result;
});
};
return ClientAggregates;
});
