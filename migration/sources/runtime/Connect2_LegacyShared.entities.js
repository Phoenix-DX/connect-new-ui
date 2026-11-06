define("Connect2_LegacyShared.entities", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecord", "Connect2_LegacyShared.model$LocalSearchHistoryRecord", "Connect2_LegacyShared.model$LocalBookmarkRecord"], function (OutSystems, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
var moduleKey = "3712370e-f7b5-4c2a-ade3-d8800219efd4";
var infoLocalConnectApplicationEvents = {
key: "5ee3d87c-7789-4e2e-a90a-5f861a7cd228",
moduleKey: moduleKey,
name: "LocalConnectApplicationEvents",
implicitAnonymousType: Connect2_LegacySharedModel.LocalConnectApplicationEventsRecord,
tableName: "OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS",
attributes: [{
name: "Id",
columnName: "ID",
type: /*TEXT*/ 0,
length: 50,
isPrimaryKey: true
}, {
name: "Name",
columnName: "NAME",
type: /*TEXT*/ 0,
length: 150,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" ADD \"Name\" TEXT(150) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*No*/ 0,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "fce8fc82-c764-112a-6fb9-518b3671a18b",
dbRecordToRecord: function (dbRecord) {
return new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_LegacySharedModel.LocalConnectApplicationEventsRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" (\"Id\" TEXT(50) PRIMARY KEY NOT NULL, \"Name\" TEXT(150) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Name\" o1 FROM \"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" (\"Id\", \"Name\") VALUES (?, ?)",
getArguments: function (record) {
var obj = record.localConnectApplicationEventsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" (\"Id\", \"Name\") VALUES (?, ?)",
getArguments: function (record) {
var obj = record.localConnectApplicationEventsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" SET \"Name\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localConnectApplicationEventsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_B3N_LOCALCONNECTAPPLICATIONEVENTS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localConnectApplicationEventsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localConnectApplicationEventsAttr;
return false;

},
getIdFromRecord: function (record) {
var obj = record.localConnectApplicationEventsAttr;
return obj.idAttr;

}
};
var infoLocalSearchHistory = {
key: "748f5a30-7632-461d-a01f-f53bb13dbffc",
moduleKey: moduleKey,
name: "LocalSearchHistory",
implicitAnonymousType: Connect2_LegacySharedModel.LocalSearchHistoryRecord,
tableName: "OSUSR_B3N_LOCALSEARCHHISTORY",
attributes: [{
name: "Id",
columnName: "ID",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "UserId",
columnName: "USERID",
type: /*INTEGER*/ 3,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALSEARCHHISTORY\" ADD \"UserId\" INTEGER DEFAULT NULL"
}
}, {
name: "SearchedString",
columnName: "SEARCHEDSTRING",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALSEARCHHISTORY\" ADD \"SearchedString\" TEXT(100) DEFAULT \'\'"
}
}, {
name: "CreatedOn",
columnName: "CREATEDON",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALSEARCHHISTORY\" ADD \"CreatedOn\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "RecentSearchTypeId",
columnName: "RECENTSEARCHTYPEID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALSEARCHHISTORY\" ADD \"RecentSearchTypeId\" TEXT(50) DEFAULT NULL"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "e2a5ca48-c198-16de-3891-ac8c141bbc3c",
dbRecordToRecord: function (dbRecord) {
return new Connect2_LegacySharedModel.LocalSearchHistoryRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_LegacySharedModel.LocalSearchHistoryRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_B3N_LOCALSEARCHHISTORY\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"UserId\" INTEGER DEFAULT NULL, \"SearchedString\" TEXT(100) DEFAULT \'\', \"CreatedOn\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"RecentSearchTypeId\" TEXT(50) DEFAULT NULL)"
},
select: {
sql: "SELECT \"Id\" o0, \"UserId\" o1, \"SearchedString\" o2, \"CreatedOn\" o3, \"RecentSearchTypeId\" o4 FROM \"OSUSR_B3N_LOCALSEARCHHISTORY\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_B3N_LOCALSEARCHHISTORY\" (\"Id\", \"UserId\", \"SearchedString\", \"CreatedOn\", \"RecentSearchTypeId\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localSearchHistoryAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedString", /*TEXT*/ 0, obj.searchedStringAttr);
argsList.add("CreatedOn", /*DATE_TIME*/ 6, obj.createdOnAttr);
argsList.add("RecentSearchTypeId", /*TEXT*/ 0, obj.recentSearchTypeIdAttr, null, null, true);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_B3N_LOCALSEARCHHISTORY\" (\"Id\", \"UserId\", \"SearchedString\", \"CreatedOn\", \"RecentSearchTypeId\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localSearchHistoryAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedString", /*TEXT*/ 0, obj.searchedStringAttr);
argsList.add("CreatedOn", /*DATE_TIME*/ 6, obj.createdOnAttr);
argsList.add("RecentSearchTypeId", /*TEXT*/ 0, obj.recentSearchTypeIdAttr, null, null, true);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_B3N_LOCALSEARCHHISTORY\" SET \"UserId\" = ?, \"SearchedString\" = ?, \"CreatedOn\" = ?, \"RecentSearchTypeId\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localSearchHistoryAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedString", /*TEXT*/ 0, obj.searchedStringAttr);
argsList.add("CreatedOn", /*DATE_TIME*/ 6, obj.createdOnAttr);
argsList.add("RecentSearchTypeId", /*TEXT*/ 0, obj.recentSearchTypeIdAttr, null, null, true);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_B3N_LOCALSEARCHHISTORY\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_B3N_LOCALSEARCHHISTORY\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localSearchHistoryAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedString", /*TEXT*/ 0, obj.searchedStringAttr);
argsList.add("CreatedOn", /*DATE_TIME*/ 6, obj.createdOnAttr);
argsList.add("RecentSearchTypeId", /*TEXT*/ 0, obj.recentSearchTypeIdAttr, null, null, true);

return argsList;
},
hasNullId: function (record) {
var obj = record.localSearchHistoryAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.localSearchHistoryAttr;
return obj.idAttr;

}
};
var infoLocalBookmark = {
key: "e31d7357-1200-4637-8763-eb33045702bf",
moduleKey: moduleKey,
name: "LocalBookmark",
implicitAnonymousType: Connect2_LegacySharedModel.LocalBookmarkRecord,
tableName: "OSUSR_B3N_LOCALBOOKMARK",
attributes: [{
name: "Id",
columnName: "ID",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "UserId",
columnName: "USERID",
type: /*INTEGER*/ 3,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"UserId\" INTEGER DEFAULT NULL"
}
}, {
name: "BookmarkId",
columnName: "BOOKMARKID",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"BookmarkId\" BIGINT DEFAULT 0"
}
}, {
name: "ObjectType",
columnName: "OBJECTTYPE",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"ObjectType\" TEXT(50) DEFAULT NULL"
}
}, {
name: "ObjectId",
columnName: "OBJECTID",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"ObjectId\" BIGINT DEFAULT 0"
}
}, {
name: "Group",
columnName: "GROUP",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"Group\" TEXT(50) DEFAULT NULL"
}
}, {
name: "DateCreatedUtc",
columnName: "DATECREATEDUTC",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"DateCreatedUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "Note",
columnName: "NOTE",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" ADD \"Note\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "13ed8c05-caee-7c9e-4fa8-3f4b47c2fdff",
dbRecordToRecord: function (dbRecord) {
return new Connect2_LegacySharedModel.LocalBookmarkRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_LegacySharedModel.LocalBookmarkRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_B3N_LOCALBOOKMARK\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"UserId\" INTEGER DEFAULT NULL, \"BookmarkId\" BIGINT DEFAULT 0, \"ObjectType\" TEXT(50) DEFAULT NULL, \"ObjectId\" BIGINT DEFAULT 0, \"Group\" TEXT(50) DEFAULT NULL, \"DateCreatedUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"Note\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"UserId\" o1, \"BookmarkId\" o2, \"ObjectType\" o3, \"ObjectId\" o4, \"Group\" o5, \"DateCreatedUtc\" o6, \"Note\" o7 FROM \"OSUSR_B3N_LOCALBOOKMARK\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_B3N_LOCALBOOKMARK\" (\"Id\", \"UserId\", \"BookmarkId\", \"ObjectType\", \"ObjectId\", \"Group\", \"DateCreatedUtc\", \"Note\") VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("ObjectType", /*TEXT*/ 0, obj.objectTypeAttr, null, null, true);
argsList.add("ObjectId", /*LONGINTEGER*/ 4, obj.objectIdAttr);
argsList.add("Group", /*TEXT*/ 0, obj.groupAttr, null, null, true);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("Note", /*TEXT*/ 0, obj.noteAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_B3N_LOCALBOOKMARK\" (\"Id\", \"UserId\", \"BookmarkId\", \"ObjectType\", \"ObjectId\", \"Group\", \"DateCreatedUtc\", \"Note\") VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("ObjectType", /*TEXT*/ 0, obj.objectTypeAttr, null, null, true);
argsList.add("ObjectId", /*LONGINTEGER*/ 4, obj.objectIdAttr);
argsList.add("Group", /*TEXT*/ 0, obj.groupAttr, null, null, true);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("Note", /*TEXT*/ 0, obj.noteAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_B3N_LOCALBOOKMARK\" SET \"UserId\" = ?, \"BookmarkId\" = ?, \"ObjectType\" = ?, \"ObjectId\" = ?, \"Group\" = ?, \"DateCreatedUtc\" = ?, \"Note\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("ObjectType", /*TEXT*/ 0, obj.objectTypeAttr, null, null, true);
argsList.add("ObjectId", /*LONGINTEGER*/ 4, obj.objectIdAttr);
argsList.add("Group", /*TEXT*/ 0, obj.groupAttr, null, null, true);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("Note", /*TEXT*/ 0, obj.noteAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_B3N_LOCALBOOKMARK\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_B3N_LOCALBOOKMARK\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("ObjectType", /*TEXT*/ 0, obj.objectTypeAttr, null, null, true);
argsList.add("ObjectId", /*LONGINTEGER*/ 4, obj.objectIdAttr);
argsList.add("Group", /*TEXT*/ 0, obj.groupAttr, null, null, true);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("Note", /*TEXT*/ 0, obj.noteAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localBookmarkAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.localBookmarkAttr;
return obj.idAttr;

}
};
var allEntityInfos = [infoLocalConnectApplicationEvents, infoLocalSearchHistory, infoLocalBookmark];
var entityService = OS.Injector.resolve(OS.ServiceNames.EntityService);
var browserDbInstance = OS.Settings.getEnvParams().IndexedDBOffline ? entityService : OS.Entities.webSQLStorageInstance;
var nativeDbInstance = OS.Settings.getEnvParams().UseNewWebSQLImpl ? entityService : OS.Entities.webSQLStorageInstance;
var dbInstance = OS.NativeHelper.isRunningOnNative() ? nativeDbInstance : browserDbInstance;
Connect2_LegacySharedModel.entities = {
LocalConnectApplicationEvents: new OS.Entities.Entity(dbInstance, infoLocalConnectApplicationEvents, moduleKey),
LocalSearchHistory: new OS.Entities.Entity(dbInstance, infoLocalSearchHistory, moduleKey),
LocalBookmark: new OS.Entities.Entity(dbInstance, infoLocalBookmark, moduleKey)
};
return {
getEntityInfos: function () {
return allEntityInfos;
},
init: function (runner) {
return OS.Entities.webSQLStorageInstance.initModule(allEntityInfos, runner, moduleKey);
},
switch: function (runner) {
return OS.Entities.webSQLStorageInstance.switchModule(runner, moduleKey);
}
};
});
