define("Connect2_LegacyShared.aggregates.IDB", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.model$LocalBookmarkRecordList", "Connect2_LegacyShared.model$LocalSearchHistoryRecordList", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecordList", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_LegacyShared.model$LocalSearchHistoryRec", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRec"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedEntities) {
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
ClientAggregates.executeGetLocalBookmarkByObjectId$ClientAction$getLocalBookmarkByObjectIdAggr = function (qpinUserId, qploObjectId, qpstObjectType, maxRecords) {
var LocalBookmark_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "e31d7357-1200-4637-8763-eb33045702bf");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalBookmarkRecordList();
var GetLocalBookmarkByObjectId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarkByObjectId", "Executing Client Aggregate: executeGetLocalBookmarkByObjectId$ClientAction$getLocalBookmarkByObjectIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetLocalBookmarkByObjectId", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpinUserId, LocalBookmark_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalBookmarkByObjectId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalBookmarkByObjectId\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, Connect2_LegacySharedModel.LocalBookmarkRec);
if((LocalBookmark_Value.objectIdAttr.equals(qploObjectId) && (LocalBookmark_Value.objectTypeAttr === qpstObjectType))) {
var GetLocalBookmarkByObjectId_Result = new Connect2_LegacySharedModel.LocalBookmarkRecord();
GetLocalBookmarkByObjectId_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetLocalBookmarkByObjectId_Item) {
GetLocalBookmarkByObjectId_Result[key]=GetLocalBookmarkByObjectId_Item[key];
}

result.append(GetLocalBookmarkByObjectId_Result);
}

LocalBookmark_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarkByObjectId", "Executing outter Sorts");
resultList.sort(function (e) {
return {
lessThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res < 0);
} else {
i = (i + 1);
}

}

return false;
},
greaterThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res > 0);
} else {
i = (i + 1);
}

}

return false;
},
sorts: [].concat({
value: e.localBookmarkAttr.noteAttr,
isAscending: true
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarkByObjectId", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalBookmarkRecordList(),
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
ClientAggregates.executeGetLocalBookmarkByBookmarkId$ClientAction$getLocalBookmarksByUserIdAggr = function (qploBookmarkId, qpinUserId, maxRecords) {
var LocalBookmark_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "e31d7357-1200-4637-8763-eb33045702bf");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalBookmarkRecordList();
var GetLocalBookmarksByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Client Aggregate: executeGetLocalBookmarkByBookmarkId$ClientAction$getLocalBookmarksByUserIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpinUserId, LocalBookmark_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalBookmarksByUserId\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, Connect2_LegacySharedModel.LocalBookmarkRec);
if(LocalBookmark_Value.bookmarkIdAttr.equals(qploBookmarkId)) {
var GetLocalBookmarksByUserId_Result = new Connect2_LegacySharedModel.LocalBookmarkRecord();
GetLocalBookmarksByUserId_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetLocalBookmarksByUserId_Item) {
GetLocalBookmarksByUserId_Result[key]=GetLocalBookmarksByUserId_Item[key];
}

result.append(GetLocalBookmarksByUserId_Result);
}

LocalBookmark_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing outter Sorts");
resultList.sort(function (e) {
return {
lessThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res < 0);
} else {
i = (i + 1);
}

}

return false;
},
greaterThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res > 0);
} else {
i = (i + 1);
}

}

return false;
},
sorts: [].concat({
value: e.localBookmarkAttr.noteAttr,
isAscending: true
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalBookmarkRecordList(),
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
ClientAggregates.executeLocalSearchHistoryUpdate$ClientAction$getLocalSearchHistoryByIdAggr = function (qploId, maxRecords) {
var LocalSearchHistory_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "748f5a30-7632-461d-a01f-f53bb13dbffc");
})[0];
var aggrEntityInfos = [LocalSearchHistory_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalSearchHistoryRecordList();
var GetLocalSearchHistoryById_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalSearchHistoryById", "Executing Client Aggregate: executeLocalSearchHistoryUpdate$ClientAction$getLocalSearchHistoryByIdAggr");
var LocalSearchHistory_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALSEARCHHISTORY");
OS.Logger.trace("AggregatesModule_GetLocalSearchHistoryById", function () {
return "Opening store: " + LocalSearchHistory_ObjectStore.name;
});
var LocalSearchHistory_idxValue = serializer.serialize(qploId, LocalSearchHistory_Info.attributes.filter(function (e) {
return (e.name === "Id");
})[0]);
LocalSearchHistory_ObjectStore = LocalSearchHistory_ObjectStore.index(OS.TableInfoUtils.formatObjectName("Id"));
OS.Logger.trace("AggregatesModule_GetLocalSearchHistoryById", function () {
return "Using Index Attribute: Id; Column Name: " + OS.TableInfoUtils.formatObjectName("Id");
});
var LocalSearchHistory_GetRequest = LocalSearchHistory_ObjectStore.getAll(IDBKeyRange.only(LocalSearchHistory_idxValue));
LocalSearchHistory_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalSearchHistoryById\": " + LocalSearchHistory_GetRequest.error);
};
LocalSearchHistory_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalSearchHistory_Value) {
return new Promise(function (LocalSearchHistory_GetResolve, reject) {
LocalSearchHistory_Value = serializer.deserialize(LocalSearchHistory_Value, LocalSearchHistory_Info, Connect2_LegacySharedModel.LocalSearchHistoryRec);
var GetLocalSearchHistoryById_Result = new Connect2_LegacySharedModel.LocalSearchHistoryRecord();
GetLocalSearchHistoryById_Result.localSearchHistoryAttr = LocalSearchHistory_Value;
for (let key in GetLocalSearchHistoryById_Item) {
GetLocalSearchHistoryById_Result[key]=GetLocalSearchHistoryById_Item[key];
}

result.append(GetLocalSearchHistoryById_Result);
LocalSearchHistory_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalSearchHistoryById", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalSearchHistoryRecordList(),
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
ClientAggregates.executeGetLocalBookmarksByObjectType$ClientAction$getLocalBookmarksByObjectTypeAggr = function (qpinUserId, qpstObjectType, maxRecords) {
var LocalBookmark_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "e31d7357-1200-4637-8763-eb33045702bf");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalBookmarkRecordList();
var GetLocalBookmarksByObjectType_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectType", "Executing Client Aggregate: executeGetLocalBookmarksByObjectType$ClientAction$getLocalBookmarksByObjectTypeAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectType", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpinUserId, LocalBookmark_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectType", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalBookmarksByObjectType\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, Connect2_LegacySharedModel.LocalBookmarkRec);
if((LocalBookmark_Value.objectTypeAttr === qpstObjectType)) {
var GetLocalBookmarksByObjectType_Result = new Connect2_LegacySharedModel.LocalBookmarkRecord();
GetLocalBookmarksByObjectType_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetLocalBookmarksByObjectType_Item) {
GetLocalBookmarksByObjectType_Result[key]=GetLocalBookmarksByObjectType_Item[key];
}

result.append(GetLocalBookmarksByObjectType_Result);
}

LocalBookmark_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectType", "Executing outter Sorts");
resultList.sort(function (e) {
return {
lessThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res < 0);
} else {
i = (i + 1);
}

}

return false;
},
greaterThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res > 0);
} else {
i = (i + 1);
}

}

return false;
},
sorts: [].concat({
value: e.localBookmarkAttr.noteAttr,
isAscending: true
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectType", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalBookmarkRecordList(),
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
ClientAggregates.executeCreateLocalBookmark$ClientAction$checkForRepeatRecordAggr = function (qpinUserId, qpstGroup, qploObjectId, qpstObjectType, maxRecords) {
var LocalBookmark_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "e31d7357-1200-4637-8763-eb33045702bf");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalBookmarkRecordList();
var CheckForRepeatRecord_Item = {};
OS.Logger.trace("AggregatesModule_CheckForRepeatRecord", "Executing Client Aggregate: executeCreateLocalBookmark$ClientAction$checkForRepeatRecordAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_CheckForRepeatRecord", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpinUserId, LocalBookmark_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_CheckForRepeatRecord", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"CheckForRepeatRecord\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, Connect2_LegacySharedModel.LocalBookmarkRec);
if((((LocalBookmark_Value.objectTypeAttr === qpstObjectType) && LocalBookmark_Value.objectIdAttr.equals(qploObjectId)) && (LocalBookmark_Value.groupAttr === qpstGroup))) {
var CheckForRepeatRecord_Result = new Connect2_LegacySharedModel.LocalBookmarkRecord();
CheckForRepeatRecord_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in CheckForRepeatRecord_Item) {
CheckForRepeatRecord_Result[key]=CheckForRepeatRecord_Item[key];
}

result.append(CheckForRepeatRecord_Result);
}

LocalBookmark_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_CheckForRepeatRecord", "Executing outter Sorts");
resultList.sort(function (e) {
return {
lessThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res < 0);
} else {
i = (i + 1);
}

}

return false;
},
greaterThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res > 0);
} else {
i = (i + 1);
}

}

return false;
},
sorts: [].concat({
value: e.localBookmarkAttr.noteAttr,
isAscending: true
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_CheckForRepeatRecord", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalBookmarkRecordList(),
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
ClientAggregates.executeGetAppEventName$ClientAction$getLocalConnectApplicationEventsAggr = function (qpstId, maxRecords) {
var LocalConnectApplicationEvents_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "5ee3d87c-7789-4e2e-a90a-5f861a7cd228");
})[0];
var aggrEntityInfos = [LocalConnectApplicationEvents_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList();
var GetLocalConnectApplicationEvents_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalConnectApplicationEvents", "Executing Client Aggregate: executeGetAppEventName$ClientAction$getLocalConnectApplicationEventsAggr");
var LocalConnectApplicationEvents_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS");
OS.Logger.trace("AggregatesModule_GetLocalConnectApplicationEvents", function () {
return "Opening store: " + LocalConnectApplicationEvents_ObjectStore.name;
});
var LocalConnectApplicationEvents_idxValue = serializer.serialize(OS.BuiltinFunctions.textToIdentifier(qpstId), LocalConnectApplicationEvents_Info.attributes.filter(function (e) {
return (e.name === "Id");
})[0]);
LocalConnectApplicationEvents_ObjectStore = LocalConnectApplicationEvents_ObjectStore.index(OS.TableInfoUtils.formatObjectName("Id"));
OS.Logger.trace("AggregatesModule_GetLocalConnectApplicationEvents", function () {
return "Using Index Attribute: Id; Column Name: " + OS.TableInfoUtils.formatObjectName("Id");
});
var LocalConnectApplicationEvents_GetRequest = LocalConnectApplicationEvents_ObjectStore.getAll(IDBKeyRange.only(LocalConnectApplicationEvents_idxValue));
LocalConnectApplicationEvents_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalConnectApplicationEvents\": " + LocalConnectApplicationEvents_GetRequest.error);
};
LocalConnectApplicationEvents_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalConnectApplicationEvents_Value) {
return new Promise(function (LocalConnectApplicationEvents_GetResolve, reject) {
LocalConnectApplicationEvents_Value = serializer.deserialize(LocalConnectApplicationEvents_Value, LocalConnectApplicationEvents_Info, Connect2_LegacySharedModel.LocalConnectApplicationEventsRec);
var GetLocalConnectApplicationEvents_Result = new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecord();
GetLocalConnectApplicationEvents_Result.localConnectApplicationEventsAttr = LocalConnectApplicationEvents_Value;
for (let key in GetLocalConnectApplicationEvents_Item) {
GetLocalConnectApplicationEvents_Result[key]=GetLocalConnectApplicationEvents_Item[key];
}

result.append(GetLocalConnectApplicationEvents_Result);
LocalConnectApplicationEvents_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalConnectApplicationEvents", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList(),
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
ClientAggregates.executeUtilityFlow_MessageSearchHistory$Block$getFilteredUserSearchHistoryAggr = function (qpinUserId, qpstRecentSearchTypeId, qpstSearchString, qpboShowOnlyOnCorrectTerm, maxRecords) {
var LocalSearchHistory_Info = Connect2_LegacySharedEntities.getEntityInfos().filter(function (info) {
return (info.key === "748f5a30-7632-461d-a01f-f53bb13dbffc");
})[0];
var aggrEntityInfos = [LocalSearchHistory_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new Connect2_LegacySharedModel.LocalSearchHistoryRecordList();
var GetFilteredUserSearchHistory_Item = {};
OS.Logger.trace("AggregatesModule_GetFilteredUserSearchHistory", "Executing Client Aggregate: executeUtilityFlow_MessageSearchHistory$Block$getFilteredUserSearchHistoryAggr");
var LocalSearchHistory_ObjectStore = transaction.objectStore("OSUSR_B3N_LOCALSEARCHHISTORY");
OS.Logger.trace("AggregatesModule_GetFilteredUserSearchHistory", function () {
return "Opening store: " + LocalSearchHistory_ObjectStore.name;
});
var LocalSearchHistory_idxValue = serializer.serialize(qpinUserId, LocalSearchHistory_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalSearchHistory_ObjectStore = LocalSearchHistory_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetFilteredUserSearchHistory", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalSearchHistory_GetRequest = LocalSearchHistory_ObjectStore.getAll(IDBKeyRange.only(LocalSearchHistory_idxValue));
LocalSearchHistory_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetFilteredUserSearchHistory\": " + LocalSearchHistory_GetRequest.error);
};
LocalSearchHistory_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalSearchHistory_Value) {
return new Promise(function (LocalSearchHistory_GetResolve, reject) {
LocalSearchHistory_Value = serializer.deserialize(LocalSearchHistory_Value, LocalSearchHistory_Info, Connect2_LegacySharedModel.LocalSearchHistoryRec);
if(((!(qpboShowOnlyOnCorrectTerm) || (OS.BuiltinFunctions.like(LocalSearchHistory_Value.searchedStringAttr, (("%" + qpstSearchString) + "%")) && ((qpstSearchString) !== ("")))) && (LocalSearchHistory_Value.recentSearchTypeIdAttr === qpstRecentSearchTypeId))) {
var GetFilteredUserSearchHistory_Result = new Connect2_LegacySharedModel.LocalSearchHistoryRecord();
GetFilteredUserSearchHistory_Result.localSearchHistoryAttr = LocalSearchHistory_Value;
for (let key in GetFilteredUserSearchHistory_Item) {
GetFilteredUserSearchHistory_Result[key]=GetFilteredUserSearchHistory_Item[key];
}

result.append(GetFilteredUserSearchHistory_Result);
}

LocalSearchHistory_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetFilteredUserSearchHistory", "Executing outter Sorts");
resultList.sort(function (e) {
return {
lessThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res < 0);
} else {
i = (i + 1);
}

}

return false;
},
greaterThan: function (other) {
var i = 0;
while ((i < this.sorts.length)) {
var res = compare(this.sorts[i].value, other.sorts[i].value);
res = this.sorts[i].isAscending ? res : -res;
if(((res) !== (0))) {
return (res > 0);
} else {
i = (i + 1);
}

}

return false;
},
sorts: [].concat({
value: e.localSearchHistoryAttr.createdOnAttr,
isAscending: false
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetFilteredUserSearchHistory", "Executing Max Records");
var result = {
list: new Connect2_LegacySharedModel.LocalSearchHistoryRecordList(),
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
