define("UBTConnect.aggregates.IDB", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model", "UBTConnect.entities", "UBTConnect.model$LocalBookmark2RecordList", "UBTConnect.model$ConnectSearch_RecentSearchTermRecordList", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecordList", "UBTConnect.model$Temp_PersonalEventIdsRecordList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.model$ConnectSearch_RecentSearchTermRec", "UBTConnect.model$ConnectSearch_RecentClickedResultsRec", "UBTConnect.model$Temp_PersonalEventIdsRec"], function (OutSystems, UBTConnectModel, UBTConnect_Bookmarks_MCSEntities, UBTConnect_Bookmarks_MCSModel, UBTConnectEntities) {
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
ClientAggregates.executeMap$ActionMapExploreItemsToBookmarkItems$Action$getMatchingBookmark_OneSchoolGlobalAggr = function (qpstItemId, qpstBookmarkCategoryId, qpinUserId, maxRecords) {
var LocalBookmark2_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark2_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.LocalBookmark2RecordList();
var GetMatchingBookmark_OneSchoolGlobal_Item = {};
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_OneSchoolGlobal", "Executing Client Aggregate: executeMap$ActionMapExploreItemsToBookmarkItems$Action$getMatchingBookmark_OneSchoolGlobalAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_OneSchoolGlobal", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpstItemId, LocalBookmark2_Info.attributes.filter(function (e) {
return (e.name === "ItemId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("ItemId"));
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_OneSchoolGlobal", function () {
return "Using Index Attribute: ItemId; Column Name: " + OS.TableInfoUtils.formatObjectName("ItemId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetMatchingBookmark_OneSchoolGlobal\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark2_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
if(((LocalBookmark_Value.bookmarkCategoryIdAttr === qpstBookmarkCategoryId) && (LocalBookmark_Value.userIdAttr === qpinUserId))) {
var GetMatchingBookmark_OneSchoolGlobal_Result = new UBTConnectModel.LocalBookmark2Record();
GetMatchingBookmark_OneSchoolGlobal_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetMatchingBookmark_OneSchoolGlobal_Item) {
GetMatchingBookmark_OneSchoolGlobal_Result[key]=GetMatchingBookmark_OneSchoolGlobal_Item[key];
}

result.append(GetMatchingBookmark_OneSchoolGlobal_Result);
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
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_OneSchoolGlobal", "Executing Max Records");
var result = {
list: new UBTConnectModel.LocalBookmark2RecordList(),
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
ClientAggregates.executeMap$ActionMapExploreItemsToBookmarkItems$Action$getMatchingBookmark_SupperMeetingsAggr = function (qpstItemId, qpstBookmarkCategoryId, qpinUserId, maxRecords) {
var LocalBookmark2_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark2_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.LocalBookmark2RecordList();
var GetMatchingBookmark_SupperMeetings_Item = {};
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_SupperMeetings", "Executing Client Aggregate: executeMap$ActionMapExploreItemsToBookmarkItems$Action$getMatchingBookmark_SupperMeetingsAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_SupperMeetings", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpstItemId, LocalBookmark2_Info.attributes.filter(function (e) {
return (e.name === "ItemId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("ItemId"));
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_SupperMeetings", function () {
return "Using Index Attribute: ItemId; Column Name: " + OS.TableInfoUtils.formatObjectName("ItemId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetMatchingBookmark_SupperMeetings\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark2_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
if(((LocalBookmark_Value.bookmarkCategoryIdAttr === qpstBookmarkCategoryId) && (LocalBookmark_Value.userIdAttr === qpinUserId))) {
var GetMatchingBookmark_SupperMeetings_Result = new UBTConnectModel.LocalBookmark2Record();
GetMatchingBookmark_SupperMeetings_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetMatchingBookmark_SupperMeetings_Item) {
GetMatchingBookmark_SupperMeetings_Result[key]=GetMatchingBookmark_SupperMeetings_Item[key];
}

result.append(GetMatchingBookmark_SupperMeetings_Result);
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
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_SupperMeetings", "Executing Max Records");
var result = {
list: new UBTConnectModel.LocalBookmark2RecordList(),
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
ClientAggregates.executeMap$ActionMapExploreItemsToBookmarkItems$Action$getMatchingBookmark_HouseholdsAggr = function (qpstItemId, qpstBookmarkCategoryId, qpinUserId, maxRecords) {
var LocalBookmark2_Info = UBTConnect_Bookmarks_MCSEntities.getEntityInfos().filter(function (info) {
return (info.key === "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c");
})[0];
var aggrEntityInfos = [LocalBookmark2_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.LocalBookmark2RecordList();
var GetMatchingBookmark_Households_Item = {};
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_Households", "Executing Client Aggregate: executeMap$ActionMapExploreItemsToBookmarkItems$Action$getMatchingBookmark_HouseholdsAggr");
var LocalBookmark_ObjectStore = transaction.objectStore("OSUSR_HCR_LOCALBOOKMARK");
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_Households", function () {
return "Opening store: " + LocalBookmark_ObjectStore.name;
});
var LocalBookmark_idxValue = serializer.serialize(qpstItemId, LocalBookmark2_Info.attributes.filter(function (e) {
return (e.name === "ItemId");
})[0]);
LocalBookmark_ObjectStore = LocalBookmark_ObjectStore.index(OS.TableInfoUtils.formatObjectName("ItemId"));
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_Households", function () {
return "Using Index Attribute: ItemId; Column Name: " + OS.TableInfoUtils.formatObjectName("ItemId");
});
var LocalBookmark_GetRequest = LocalBookmark_ObjectStore.getAll(IDBKeyRange.only(LocalBookmark_idxValue));
LocalBookmark_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetMatchingBookmark_Households\": " + LocalBookmark_GetRequest.error);
};
LocalBookmark_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (LocalBookmark_Value) {
return new Promise(function (LocalBookmark_GetResolve, reject) {
LocalBookmark_Value = serializer.deserialize(LocalBookmark_Value, LocalBookmark2_Info, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec);
if(((LocalBookmark_Value.bookmarkCategoryIdAttr === qpstBookmarkCategoryId) && (LocalBookmark_Value.userIdAttr === qpinUserId))) {
var GetMatchingBookmark_Households_Result = new UBTConnectModel.LocalBookmark2Record();
GetMatchingBookmark_Households_Result.localBookmarkAttr = LocalBookmark_Value;
for (let key in GetMatchingBookmark_Households_Item) {
GetMatchingBookmark_Households_Result[key]=GetMatchingBookmark_Households_Item[key];
}

result.append(GetMatchingBookmark_Households_Result);
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
OS.Logger.trace("AggregatesModule_GetMatchingBookmark_Households", "Executing Max Records");
var result = {
list: new UBTConnectModel.LocalBookmark2RecordList(),
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
ClientAggregates.executeScreenBlock_Search$OnClickRecentSearchRemoveAll$Action$getConnectSearchRecentSearchTermsByUserIdAggr = function (qpinUserId, qpstSearchTargetId, maxRecords) {
var ConnectSearch_RecentSearchTerm_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "b992bfa1-e231-4566-8b7a-a282933b94bd");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentSearchTerm_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentSearchTermRecordList();
var GetConnectSearchRecentSearchTermsByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentSearchTermsByUserId", "Executing Client Aggregate: executeScreenBlock_Search$OnClickRecentSearchRemoveAll$Action$getConnectSearchRecentSearchTermsByUserIdAggr");
var ConnectSearch_RecentSearchTerm_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM");
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentSearchTermsByUserId", function () {
return "Opening store: " + ConnectSearch_RecentSearchTerm_ObjectStore.name;
});
var ConnectSearch_RecentSearchTerm_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentSearchTerm_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentSearchTerm_ObjectStore = ConnectSearch_RecentSearchTerm_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentSearchTermsByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentSearchTerm_GetRequest = ConnectSearch_RecentSearchTerm_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentSearchTerm_idxValue));
ConnectSearch_RecentSearchTerm_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetConnectSearchRecentSearchTermsByUserId\": " + ConnectSearch_RecentSearchTerm_GetRequest.error);
};
ConnectSearch_RecentSearchTerm_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentSearchTerm_Value) {
return new Promise(function (ConnectSearch_RecentSearchTerm_GetResolve, reject) {
ConnectSearch_RecentSearchTerm_Value = serializer.deserialize(ConnectSearch_RecentSearchTerm_Value, ConnectSearch_RecentSearchTerm_Info, UBTConnectModel.ConnectSearch_RecentSearchTermRec);
if(((ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier())))) {
var GetConnectSearchRecentSearchTermsByUserId_Result = new UBTConnectModel.ConnectSearch_RecentSearchTermRecord();
GetConnectSearchRecentSearchTermsByUserId_Result.connectSearch_RecentSearchTermAttr = ConnectSearch_RecentSearchTerm_Value;
for (let key in GetConnectSearchRecentSearchTermsByUserId_Item) {
GetConnectSearchRecentSearchTermsByUserId_Result[key]=GetConnectSearchRecentSearchTermsByUserId_Item[key];
}

result.append(GetConnectSearchRecentSearchTermsByUserId_Result);
}

ConnectSearch_RecentSearchTerm_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentSearchTermsByUserId", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentSearchTermRecordList(),
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
ClientAggregates.executeScreenBlock_Search$OnClickRecentSearchRemoveAll$Action$getConnectSearchRecentClickedResultsByUserIdAggr = function (qpinUserId, qpstSearchTargetId, maxRecords) {
var ConnectSearch_RecentClickedResults_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentClickedResults_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList();
var GetConnectSearchRecentClickedResultsByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", "Executing Client Aggregate: executeScreenBlock_Search$OnClickRecentSearchRemoveAll$Action$getConnectSearchRecentClickedResultsByUserIdAggr");
var ConnectSearch_RecentClickedResults_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS");
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", function () {
return "Opening store: " + ConnectSearch_RecentClickedResults_ObjectStore.name;
});
var ConnectSearch_RecentClickedResults_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentClickedResults_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentClickedResults_ObjectStore = ConnectSearch_RecentClickedResults_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentClickedResults_GetRequest = ConnectSearch_RecentClickedResults_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentClickedResults_idxValue));
ConnectSearch_RecentClickedResults_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetConnectSearchRecentClickedResultsByUserId\": " + ConnectSearch_RecentClickedResults_GetRequest.error);
};
ConnectSearch_RecentClickedResults_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentClickedResults_Value) {
return new Promise(function (ConnectSearch_RecentClickedResults_GetResolve, reject) {
ConnectSearch_RecentClickedResults_Value = serializer.deserialize(ConnectSearch_RecentClickedResults_Value, ConnectSearch_RecentClickedResults_Info, UBTConnectModel.ConnectSearch_RecentClickedResultsRec);
if(((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier())))) {
var GetConnectSearchRecentClickedResultsByUserId_Result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecord();
GetConnectSearchRecentClickedResultsByUserId_Result.connectSearch_RecentClickedResultsAttr = ConnectSearch_RecentClickedResults_Value;
for (let key in GetConnectSearchRecentClickedResultsByUserId_Item) {
GetConnectSearchRecentClickedResultsByUserId_Result[key]=GetConnectSearchRecentClickedResultsByUserId_Item[key];
}

result.append(GetConnectSearchRecentClickedResultsByUserId_Result);
}

ConnectSearch_RecentClickedResults_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList(),
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
ClientAggregates.executeScreenBlock_Search$EventSectionOnItemClick$Action$getAllSearchRecentClickedResultsByUserIdAggr = function (qpinUserId, qpstSearchTargetId, qpstEntityType, maxRecords) {
var ConnectSearch_RecentClickedResults_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentClickedResults_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList();
var GetAllSearchRecentClickedResultsByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetAllSearchRecentClickedResultsByUserId", "Executing Client Aggregate: executeScreenBlock_Search$EventSectionOnItemClick$Action$getAllSearchRecentClickedResultsByUserIdAggr");
var ConnectSearch_RecentClickedResults_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS");
OS.Logger.trace("AggregatesModule_GetAllSearchRecentClickedResultsByUserId", function () {
return "Opening store: " + ConnectSearch_RecentClickedResults_ObjectStore.name;
});
var ConnectSearch_RecentClickedResults_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentClickedResults_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentClickedResults_ObjectStore = ConnectSearch_RecentClickedResults_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetAllSearchRecentClickedResultsByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentClickedResults_GetRequest = ConnectSearch_RecentClickedResults_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentClickedResults_idxValue));
ConnectSearch_RecentClickedResults_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetAllSearchRecentClickedResultsByUserId\": " + ConnectSearch_RecentClickedResults_GetRequest.error);
};
ConnectSearch_RecentClickedResults_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentClickedResults_Value) {
return new Promise(function (ConnectSearch_RecentClickedResults_GetResolve, reject) {
ConnectSearch_RecentClickedResults_Value = serializer.deserialize(ConnectSearch_RecentClickedResults_Value, ConnectSearch_RecentClickedResults_Info, UBTConnectModel.ConnectSearch_RecentClickedResultsRec);
if(((ConnectSearch_RecentClickedResults_Value.entityTypeAttr === qpstEntityType) && ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))))) {
var GetAllSearchRecentClickedResultsByUserId_Result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecord();
GetAllSearchRecentClickedResultsByUserId_Result.connectSearch_RecentClickedResultsAttr = ConnectSearch_RecentClickedResults_Value;
for (let key in GetAllSearchRecentClickedResultsByUserId_Item) {
GetAllSearchRecentClickedResultsByUserId_Result[key]=GetAllSearchRecentClickedResultsByUserId_Item[key];
}

result.append(GetAllSearchRecentClickedResultsByUserId_Result);
}

ConnectSearch_RecentClickedResults_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetAllSearchRecentClickedResultsByUserId", "Executing outter Sorts");
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
value: e.connectSearch_RecentClickedResultsAttr.searchedOnAttr,
isAscending: false
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetAllSearchRecentClickedResultsByUserId", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList(),
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
ClientAggregates.executeScreenBlock_Search$EventSectionOnItemClick$Action$allRecenctClickedResultsAggr = function (qpinUserId, qpstSearchTargetId, qpstEntityType, maxRecords) {
var ConnectSearch_RecentClickedResults_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentClickedResults_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList();
var AllRecenctClickedResults_Item = {};
OS.Logger.trace("AggregatesModule_AllRecenctClickedResults", "Executing Client Aggregate: executeScreenBlock_Search$EventSectionOnItemClick$Action$allRecenctClickedResultsAggr");
var ConnectSearch_RecentClickedResults_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS");
OS.Logger.trace("AggregatesModule_AllRecenctClickedResults", function () {
return "Opening store: " + ConnectSearch_RecentClickedResults_ObjectStore.name;
});
var ConnectSearch_RecentClickedResults_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentClickedResults_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentClickedResults_ObjectStore = ConnectSearch_RecentClickedResults_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_AllRecenctClickedResults", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentClickedResults_GetRequest = ConnectSearch_RecentClickedResults_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentClickedResults_idxValue));
ConnectSearch_RecentClickedResults_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"AllRecenctClickedResults\": " + ConnectSearch_RecentClickedResults_GetRequest.error);
};
ConnectSearch_RecentClickedResults_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentClickedResults_Value) {
return new Promise(function (ConnectSearch_RecentClickedResults_GetResolve, reject) {
ConnectSearch_RecentClickedResults_Value = serializer.deserialize(ConnectSearch_RecentClickedResults_Value, ConnectSearch_RecentClickedResults_Info, UBTConnectModel.ConnectSearch_RecentClickedResultsRec);
if(((ConnectSearch_RecentClickedResults_Value.entityTypeAttr === qpstEntityType) && ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))))) {
var AllRecenctClickedResults_Result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecord();
AllRecenctClickedResults_Result.connectSearch_RecentClickedResultsAttr = ConnectSearch_RecentClickedResults_Value;
for (let key in AllRecenctClickedResults_Item) {
AllRecenctClickedResults_Result[key]=AllRecenctClickedResults_Item[key];
}

result.append(AllRecenctClickedResults_Result);
}

ConnectSearch_RecentClickedResults_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_AllRecenctClickedResults", "Executing outter Sorts");
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
value: e.connectSearch_RecentClickedResultsAttr.searchedOnAttr,
isAscending: false
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_AllRecenctClickedResults", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList(),
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
ClientAggregates.executeScreenBlock_Search$EventSectionOnItemClick$Action$getConnectSearchRecentClickedResultsByUserIdAggr = function (qpinUserId, qpstSearchTargetId, qpstEntityId, qpstEntityType, maxRecords) {
var ConnectSearch_RecentClickedResults_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentClickedResults_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList();
var GetConnectSearchRecentClickedResultsByUserId_Item = {};
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", "Executing Client Aggregate: executeScreenBlock_Search$EventSectionOnItemClick$Action$getConnectSearchRecentClickedResultsByUserIdAggr");
var ConnectSearch_RecentClickedResults_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS");
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", function () {
return "Opening store: " + ConnectSearch_RecentClickedResults_ObjectStore.name;
});
var ConnectSearch_RecentClickedResults_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentClickedResults_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentClickedResults_ObjectStore = ConnectSearch_RecentClickedResults_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentClickedResults_GetRequest = ConnectSearch_RecentClickedResults_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentClickedResults_idxValue));
ConnectSearch_RecentClickedResults_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"GetConnectSearchRecentClickedResultsByUserId\": " + ConnectSearch_RecentClickedResults_GetRequest.error);
};
ConnectSearch_RecentClickedResults_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentClickedResults_Value) {
return new Promise(function (ConnectSearch_RecentClickedResults_GetResolve, reject) {
ConnectSearch_RecentClickedResults_Value = serializer.deserialize(ConnectSearch_RecentClickedResults_Value, ConnectSearch_RecentClickedResults_Info, UBTConnectModel.ConnectSearch_RecentClickedResultsRec);
if((((ConnectSearch_RecentClickedResults_Value.entityIdAttr === qpstEntityId) && (ConnectSearch_RecentClickedResults_Value.entityTypeAttr === qpstEntityType)) && ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))))) {
var GetConnectSearchRecentClickedResultsByUserId_Result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecord();
GetConnectSearchRecentClickedResultsByUserId_Result.connectSearch_RecentClickedResultsAttr = ConnectSearch_RecentClickedResults_Value;
for (let key in GetConnectSearchRecentClickedResultsByUserId_Item) {
GetConnectSearchRecentClickedResultsByUserId_Result[key]=GetConnectSearchRecentClickedResultsByUserId_Item[key];
}

result.append(GetConnectSearchRecentClickedResultsByUserId_Result);
}

ConnectSearch_RecentClickedResults_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", "Executing outter Sorts");
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
value: e.connectSearch_RecentClickedResultsAttr.nameAttr,
isAscending: true
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetConnectSearchRecentClickedResultsByUserId", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList(),
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
ClientAggregates.executeScreenBlock_Search$ActionRefreshSearch$Action$checkIfSearchtermAlreadyExistAggr = function (qpinUserId, qpstSearchTargetId, qpstSearchedTerm, maxRecords) {
var ConnectSearch_RecentSearchTerm_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "b992bfa1-e231-4566-8b7a-a282933b94bd");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentSearchTerm_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentSearchTermRecordList();
var CheckIfSearchtermAlreadyExist_Item = {};
OS.Logger.trace("AggregatesModule_CheckIfSearchtermAlreadyExist", "Executing Client Aggregate: executeScreenBlock_Search$ActionRefreshSearch$Action$checkIfSearchtermAlreadyExistAggr");
var ConnectSearch_RecentSearchTerm_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM");
OS.Logger.trace("AggregatesModule_CheckIfSearchtermAlreadyExist", function () {
return "Opening store: " + ConnectSearch_RecentSearchTerm_ObjectStore.name;
});
var ConnectSearch_RecentSearchTerm_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentSearchTerm_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentSearchTerm_ObjectStore = ConnectSearch_RecentSearchTerm_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_CheckIfSearchtermAlreadyExist", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentSearchTerm_GetRequest = ConnectSearch_RecentSearchTerm_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentSearchTerm_idxValue));
ConnectSearch_RecentSearchTerm_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"CheckIfSearchtermAlreadyExist\": " + ConnectSearch_RecentSearchTerm_GetRequest.error);
};
ConnectSearch_RecentSearchTerm_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentSearchTerm_Value) {
return new Promise(function (ConnectSearch_RecentSearchTerm_GetResolve, reject) {
ConnectSearch_RecentSearchTerm_Value = serializer.deserialize(ConnectSearch_RecentSearchTerm_Value, ConnectSearch_RecentSearchTerm_Info, UBTConnectModel.ConnectSearch_RecentSearchTermRec);
if(((OS.BuiltinFunctions.trim(ConnectSearch_RecentSearchTerm_Value.searchedTermAttr) === OS.BuiltinFunctions.trim(qpstSearchedTerm)) && ((ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))))) {
var CheckIfSearchtermAlreadyExist_Result = new UBTConnectModel.ConnectSearch_RecentSearchTermRecord();
CheckIfSearchtermAlreadyExist_Result.connectSearch_RecentSearchTermAttr = ConnectSearch_RecentSearchTerm_Value;
for (let key in CheckIfSearchtermAlreadyExist_Item) {
CheckIfSearchtermAlreadyExist_Result[key]=CheckIfSearchtermAlreadyExist_Item[key];
}

result.append(CheckIfSearchtermAlreadyExist_Result);
}

ConnectSearch_RecentSearchTerm_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_CheckIfSearchtermAlreadyExist", "Executing outter Sorts");
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
value: e.connectSearch_RecentSearchTermAttr.searchedTermAttr,
isAscending: true
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_CheckIfSearchtermAlreadyExist", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentSearchTermRecordList(),
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
ClientAggregates.executeDirectory_Search_ScreenBlock_Search$Block$get_RecentClickedResultsAggr = function (qpinUserId, qpstSearchTargetId, qpstSearchKey_Current, qpstSelectedCategory, maxRecords) {
var ConnectSearch_RecentClickedResults_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentClickedResults_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList();
var Get_RecentClickedResults_Item = {};
OS.Logger.trace("AggregatesModule_Get_RecentClickedResults", "Executing Client Aggregate: executeDirectory_Search_ScreenBlock_Search$Block$get_RecentClickedResultsAggr");
var ConnectSearch_RecentClickedResults_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS");
OS.Logger.trace("AggregatesModule_Get_RecentClickedResults", function () {
return "Opening store: " + ConnectSearch_RecentClickedResults_ObjectStore.name;
});
var ConnectSearch_RecentClickedResults_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentClickedResults_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentClickedResults_ObjectStore = ConnectSearch_RecentClickedResults_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_Get_RecentClickedResults", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentClickedResults_GetRequest = ConnectSearch_RecentClickedResults_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentClickedResults_idxValue));
ConnectSearch_RecentClickedResults_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"Get_RecentClickedResults\": " + ConnectSearch_RecentClickedResults_GetRequest.error);
};
ConnectSearch_RecentClickedResults_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentClickedResults_Value) {
return new Promise(function (ConnectSearch_RecentClickedResults_GetResolve, reject) {
ConnectSearch_RecentClickedResults_Value = serializer.deserialize(ConnectSearch_RecentClickedResults_Value, ConnectSearch_RecentClickedResults_Info, UBTConnectModel.ConnectSearch_RecentClickedResultsRec);
if(((((((qpstSelectedCategory === UBTConnectModel.staticEntities.connect_SearchCategories.all) || ((qpstSelectedCategory === UBTConnectModel.staticEntities.connect_SearchCategories.households) && (ConnectSearch_RecentClickedResults_Value.entityTypeAttr === UBTConnectModel.staticEntities.connect_Entity.household))) || ((qpstSelectedCategory === UBTConnectModel.staticEntities.connect_SearchCategories.people) && (ConnectSearch_RecentClickedResults_Value.entityTypeAttr === UBTConnectModel.staticEntities.connect_Entity.member))) || ((qpstSelectedCategory === UBTConnectModel.staticEntities.connect_SearchCategories.places) && (ConnectSearch_RecentClickedResults_Value.entityTypeAttr === UBTConnectModel.staticEntities.connect_Entity.locality))) && ((((qpstSearchKey_Current === "") || OS.BuiltinFunctions.like(ConnectSearch_RecentClickedResults_Value.nameAttr, (("%" + qpstSearchKey_Current) + "%"))) || OS.BuiltinFunctions.like(ConnectSearch_RecentClickedResults_Value.additionalInformationAttr, (("%" + qpstSearchKey_Current) + "%"))) || OS.BuiltinFunctions.like(ConnectSearch_RecentClickedResults_Value.locationAttr, (("%" + qpstSearchKey_Current) + "%")))) && ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentClickedResults_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))))) {
var Get_RecentClickedResults_Result = new UBTConnectModel.ConnectSearch_RecentClickedResultsRecord();
Get_RecentClickedResults_Result.connectSearch_RecentClickedResultsAttr = ConnectSearch_RecentClickedResults_Value;
for (let key in Get_RecentClickedResults_Item) {
Get_RecentClickedResults_Result[key]=Get_RecentClickedResults_Item[key];
}

result.append(Get_RecentClickedResults_Result);
}

ConnectSearch_RecentClickedResults_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_Get_RecentClickedResults", "Executing outter Sorts");
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
value: e.connectSearch_RecentClickedResultsAttr.searchedOnAttr,
isAscending: false
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_Get_RecentClickedResults", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentClickedResultsRecordList(),
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
ClientAggregates.executeDirectory_Search_ScreenBlock_Search$Block$get_RecentSearchTermsAggr = function (qpinUserId, qpstSearchTargetId, qpstSearchKey_Current, qpstSearchedTerm, maxRecords) {
var ConnectSearch_RecentSearchTerm_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "b992bfa1-e231-4566-8b7a-a282933b94bd");
})[0];
var aggrEntityInfos = [ConnectSearch_RecentSearchTerm_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.ConnectSearch_RecentSearchTermRecordList();
var Get_RecentSearchTerms_Item = {};
OS.Logger.trace("AggregatesModule_Get_RecentSearchTerms", "Executing Client Aggregate: executeDirectory_Search_ScreenBlock_Search$Block$get_RecentSearchTermsAggr");
var ConnectSearch_RecentSearchTerm_ObjectStore = transaction.objectStore("OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM");
OS.Logger.trace("AggregatesModule_Get_RecentSearchTerms", function () {
return "Opening store: " + ConnectSearch_RecentSearchTerm_ObjectStore.name;
});
var ConnectSearch_RecentSearchTerm_idxValue = serializer.serialize(qpinUserId, ConnectSearch_RecentSearchTerm_Info.attributes.filter(function (e) {
return (e.name === "UserId");
})[0]);
ConnectSearch_RecentSearchTerm_ObjectStore = ConnectSearch_RecentSearchTerm_ObjectStore.index(OS.TableInfoUtils.formatObjectName("UserId"));
OS.Logger.trace("AggregatesModule_Get_RecentSearchTerms", function () {
return "Using Index Attribute: UserId; Column Name: " + OS.TableInfoUtils.formatObjectName("UserId");
});
var ConnectSearch_RecentSearchTerm_GetRequest = ConnectSearch_RecentSearchTerm_ObjectStore.getAll(IDBKeyRange.only(ConnectSearch_RecentSearchTerm_idxValue));
ConnectSearch_RecentSearchTerm_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
reject("Error executing Aggregate \"Get_RecentSearchTerms\": " + ConnectSearch_RecentSearchTerm_GetRequest.error);
};
ConnectSearch_RecentSearchTerm_GetRequest.onsuccess = function (event) {
Promise.all(event.target.result.map(function (ConnectSearch_RecentSearchTerm_Value) {
return new Promise(function (ConnectSearch_RecentSearchTerm_GetResolve, reject) {
ConnectSearch_RecentSearchTerm_Value = serializer.deserialize(ConnectSearch_RecentSearchTerm_Value, ConnectSearch_RecentSearchTerm_Info, UBTConnectModel.ConnectSearch_RecentSearchTermRec);
if(((((qpstSearchKey_Current === "") || OS.BuiltinFunctions.like(ConnectSearch_RecentSearchTerm_Value.searchedTermAttr, (("%" + qpstSearchKey_Current) + "%"))) && ((ConnectSearch_RecentSearchTerm_Value.searchedTermAttr) !== (qpstSearchedTerm))) && ((ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === qpstSearchTargetId) || ((ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === UBTConnectModel.staticEntities.type_SearchTarget.global) && (ConnectSearch_RecentSearchTerm_Value.searchTargetIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))))) {
var Get_RecentSearchTerms_Result = new UBTConnectModel.ConnectSearch_RecentSearchTermRecord();
Get_RecentSearchTerms_Result.connectSearch_RecentSearchTermAttr = ConnectSearch_RecentSearchTerm_Value;
for (let key in Get_RecentSearchTerms_Item) {
Get_RecentSearchTerms_Result[key]=Get_RecentSearchTerms_Item[key];
}

result.append(Get_RecentSearchTerms_Result);
}

ConnectSearch_RecentSearchTerm_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
};
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_Get_RecentSearchTerms", "Executing outter Sorts");
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
value: e.connectSearch_RecentSearchTermAttr.searchedOnAttr,
isAscending: false
})
};
}, true);
return resultList;
}).then(function (resultList) {
OS.Logger.trace("AggregatesModule_Get_RecentSearchTerms", "Executing Max Records");
var result = {
list: new UBTConnectModel.ConnectSearch_RecentSearchTermRecordList(),
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
ClientAggregates.executeViewEventList$Screen$getTempPersonalEventIdsAggr = function (maxRecords) {
var Temp_PersonalEventIds_Info = UBTConnectEntities.getEntityInfos().filter(function (info) {
return (info.key === "35334a1b-e30d-4f4e-8587-5b2348f72797");
})[0];
var aggrEntityInfos = [Temp_PersonalEventIds_Info];

var resultsPromisesCache = {};
return executeTransaction(function (transaction) {
return new Promise(function (resolve, reject) {
var groups = {};
var result = new UBTConnectModel.Temp_PersonalEventIdsRecordList();
var GetTempPersonalEventIds_Item = {};
OS.Logger.trace("AggregatesModule_GetTempPersonalEventIds", "Executing Client Aggregate: executeViewEventList$Screen$getTempPersonalEventIdsAggr");
if(!(resultsPromisesCache["OSUSR_YDE_TEMP_PERSONALEVENTIDS"])) {
resultsPromisesCache["OSUSR_YDE_TEMP_PERSONALEVENTIDS"]=new Promise(function (Temp_PersonalEventIds_getAllResolve, Temp_PersonalEventIds_getAllReject) {
var Temp_PersonalEventIds_ObjectStore = transaction.objectStore("OSUSR_YDE_TEMP_PERSONALEVENTIDS");
var Temp_PersonalEventIds_GetRequest = Temp_PersonalEventIds_ObjectStore.getAll();
Temp_PersonalEventIds_GetRequest.onerror = function (event) {
event.stopPropagation();
event.preventDefault();
Temp_PersonalEventIds_getAllReject("Error executing Aggregate \"GetTempPersonalEventIds\": " + Temp_PersonalEventIds_GetRequest.error);
};
Temp_PersonalEventIds_GetRequest.onsuccess = function (event) {
Temp_PersonalEventIds_getAllResolve(event);
};
});
}

resultsPromisesCache["OSUSR_YDE_TEMP_PERSONALEVENTIDS"].then(function (event) {
return Promise.all(event.target.result.map(function (Temp_PersonalEventIds_Value) {
return new Promise(function (Temp_PersonalEventIds_GetResolve, reject) {
Temp_PersonalEventIds_Value = serializer.deserialize(Temp_PersonalEventIds_Value, Temp_PersonalEventIds_Info, UBTConnectModel.Temp_PersonalEventIdsRec);
var GetTempPersonalEventIds_Result = new UBTConnectModel.Temp_PersonalEventIdsRecord();
GetTempPersonalEventIds_Result.temp_PersonalEventIdsAttr = Temp_PersonalEventIds_Value;
for (let key in GetTempPersonalEventIds_Item) {
GetTempPersonalEventIds_Result[key]=GetTempPersonalEventIds_Item[key];
}

result.append(GetTempPersonalEventIds_Result);
Temp_PersonalEventIds_GetResolve();
});
})).then(function () {
resolve(result);
}).catch(function (error) {
reject(error);
});
}).catch(function (error) {
reject(error);
});
});
}, aggrEntityInfos).then(function (resultList) {
OS.Logger.trace("AggregatesModule_GetTempPersonalEventIds", "Executing Max Records");
var result = {
list: new UBTConnectModel.Temp_PersonalEventIdsRecordList(),
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
