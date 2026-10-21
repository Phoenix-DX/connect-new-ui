define("UBTConnect_Bookmarks_MCS.aggregates.IDB", ["OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$BookmarkCategoryIdentifierRecordList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecordList", "UBTConnect_Bookmarks_MCS.model$IntegerRecordList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSEntities) {
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
ClientAggregates.executeGetLocalDynamicBookmarkPills$ClientAction$getLocalBookmarkCategoryIds_ByUserIdAggr = function (qpinUserId, maxRecords) {
var LocalBookmark_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Bookmarks_MCSModel.BookmarkCategoryIdentifierRecordList();
var GetLocalBookmarkCategoryIds_ByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarkCategoryIds_ByUserId", "Executing Client Aggregate: executeGetLocalDynamicBookmarkPills$ClientAction$getLocalBookmarkCategoryIds_ByUserIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetLocalBookmarkCategoryIds_ByUserId", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpinUserId, LocalBookmark_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetLocalBookmarkCategoryIds_ByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalBookmarkCategoryIds_ByUserId\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
OS.Logger.trace("AggregatesModule_GetLocalBookmarkCategoryIds_ByUserId", "Executing Groupbys");
var keyObject = {
BookmarkCategoryId: LocalBookmark_Value.bookmarkCategoryIdAttr
};
var key = JSON.stringify(keyObject);
var group = groups[key];
if(!(group)) {
group = {};
group.bookmarkCategoryIdAttr = LocalBookmark_Value.bookmarkCategoryIdAttr;
groups[key]=group;
}

LocalBookmark_GetResolve();
});
})).then(function () {
var GetLocalBookmarkCategoryIds_ByUserId_Result = new UBTConnect_Bookmarks_MCSModel.BookmarkCategoryIdentifierRecord();
for (let groupKey in groups) {
var GetLocalBookmarkCategoryIds_ByUserId_Result = new UBTConnect_Bookmarks_MCSModel.BookmarkCategoryIdentifierRecord();
for (let key in groups[groupKey]) {
GetLocalBookmarkCategoryIds_ByUserId_Result[key]=groups[groupKey][key];
}

result.append(GetLocalBookmarkCategoryIds_ByUserId_Result);
}

resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarkCategoryIds_ByUserId", "Executing Max Records");
var result = {
list: new UBTConnect_Bookmarks_MCSModel.BookmarkCategoryIdentifierRecordList(),
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
var LocalBookmark_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList();
var GetLocalBookmarksByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Client Aggregate: executeGetLocalBookmarkByBookmarkId$ClientAction$getLocalBookmarksByUserIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
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
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
if(LocalBookmark_Value.bookmarkIdAttr.equals(qploBookmarkId)) {
var GetLocalBookmarksByUserId_Result = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord();
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
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Max Records");
var result = {
list: new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList(),
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
ClientAggregates.executeGetLocalDynamicBookmarkYears$ClientAction$getLocalBookmarksByUserIdAggr = function (qpinUserId, maxRecords) {
var LocalBookmark_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Bookmarks_MCSModel.IntegerRecordList();
var GetLocalBookmarksByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Client Aggregate: executeGetLocalDynamicBookmarkYears$ClientAction$getLocalBookmarksByUserIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
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
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
GetLocalBookmarksByUserId_Item["yearAttr"]=OS.BuiltinFunctions.year(LocalBookmark_Value.createdAtDateUtcAttr);
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Groupbys");
var keyObject = {
Year: GetLocalBookmarksByUserId_Item.yearAttr
};
var key = JSON.stringify(keyObject);
var group = groups[key];
if(!(group)) {
group = {};
group.yearAttr = GetLocalBookmarksByUserId_Item.yearAttr;
groups[key]=group;
}

LocalBookmark_GetResolve();
});
})).then(function () {
var GetLocalBookmarksByUserId_Result = new UBTConnect_Bookmarks_MCSModel.IntegerRecord();
for (let groupKey in groups) {
var GetLocalBookmarksByUserId_Result = new UBTConnect_Bookmarks_MCSModel.IntegerRecord();
for (let key in groups[groupKey]) {
GetLocalBookmarksByUserId_Result[key]=groups[groupKey][key];
}

result.append(GetLocalBookmarksByUserId_Result);
}

resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Max Records");
var result = {
list: new UBTConnect_Bookmarks_MCSModel.IntegerRecordList(),
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
ClientAggregates.executeGetLocalBookmarkByObjectId$ClientAction$getLocalBookmarksByObjectIdAggr = function (qpinUserId, qploObjectId, maxRecords) {
var LocalBookmark_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList();
var GetLocalBookmarksByObjectId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectId", "Executing Client Aggregate: executeGetLocalBookmarkByObjectId$ClientAction$getLocalBookmarksByObjectIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectId", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qploObjectId, LocalBookmark_Info.attributes.filter(function (e) {
return (e.name === "ItemId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("ItemId"));
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectId", function () {
return "Using Index Attribute: ItemId; Column Name: " + OS.TableInfoUtils.formatObjectName("ItemId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetLocalBookmarksByObjectId\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
if((LocalBookmark_Value.userIdAttr === qpinUserId)) {
var GetLocalBookmarksByObjectId_Result = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord();
GetLocalBookmarksByObjectId_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetLocalBookmarksByObjectId_Item) {
GetLocalBookmarksByObjectId_Result[key]=GetLocalBookmarksByObjectId_Item[key];
}

result.append(GetLocalBookmarksByObjectId_Result);
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
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByObjectId", "Executing Max Records");
var result = {
list: new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList(),
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
ClientAggregates.executeCreateLocalBookmark$ClientAction$getLocalBookmarksByUserIdAggr = function (qpinUserId, qploItemId, maxRecords) {
var LocalBookmark_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList();
var GetLocalBookmarksByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Client Aggregate: executeCreateLocalBookmark$ClientAction$getLocalBookmarksByUserIdAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
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
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
if(LocalBookmark_Value.itemIdAttr.equals(qploItemId)) {
var GetLocalBookmarksByUserId_Result = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord();
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
OS.Logger.trace("AggregatesModule_GetLocalBookmarksByUserId", "Executing Max Records");
var result = {
list: new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList(),
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
