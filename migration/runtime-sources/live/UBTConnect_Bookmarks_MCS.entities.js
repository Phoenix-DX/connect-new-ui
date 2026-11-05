define("UBTConnect_Bookmarks_MCS.entities", ["OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecord"], function (OutSystems, UBTConnect_Bookmarks_MCSModel) {
var OS = OutSystems.Internal;
var moduleKey = "edb98778-90f1-4e97-9def-fc0d37a768a3";
var infoLocalBookmark = {
key: "d8bbc5bd-997c-4686-a8a5-b4c5ce905b7c",
moduleKey: moduleKey,
name: "LocalBookmark",
implicitAnonymousType: UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord,
tableName: "OSUSR_HCR_LOCALBOOKMARK",
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
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HCR_LOCALBOOKMARK\" ADD \"UserId\" INTEGER DEFAULT NULL"
}
}, {
name: "BookmarkId",
columnName: "BOOKMARKID",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HCR_LOCALBOOKMARK\" ADD \"BookmarkId\" BIGINT DEFAULT 0"
}
}, {
name: "BookmarkCategoryId",
columnName: "BOOKMARKCATEGORYID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HCR_LOCALBOOKMARK\" ADD \"BookmarkCategoryId\" TEXT(50) DEFAULT NULL"
}
}, {
name: "ItemId",
columnName: "ITEMID",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HCR_LOCALBOOKMARK\" ADD \"ItemId\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "CreatedAtDateUtc",
columnName: "CREATEDATDATEUTC",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HCR_LOCALBOOKMARK\" ADD \"CreatedAtDateUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "62b1ea55-5978-cd2b-e5a9-7c6efd6e866c",
dbRecordToRecord: function (dbRecord) {
return new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HCR_LOCALBOOKMARK\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"UserId\" INTEGER DEFAULT NULL, \"BookmarkId\" BIGINT DEFAULT 0, \"BookmarkCategoryId\" TEXT(50) DEFAULT NULL, \"ItemId\" TEXT(50) DEFAULT \'\', \"CreatedAtDateUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\')"
},
select: {
sql: "SELECT \"Id\" o0, \"UserId\" o1, \"BookmarkId\" o2, \"BookmarkCategoryId\" o3, \"ItemId\" o4, \"CreatedAtDateUtc\" o5 FROM \"OSUSR_HCR_LOCALBOOKMARK\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HCR_LOCALBOOKMARK\" (\"Id\", \"UserId\", \"BookmarkId\", \"BookmarkCategoryId\", \"ItemId\", \"CreatedAtDateUtc\") VALUES (?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("BookmarkCategoryId", /*TEXT*/ 0, obj.bookmarkCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("CreatedAtDateUtc", /*DATE_TIME*/ 6, obj.createdAtDateUtcAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HCR_LOCALBOOKMARK\" (\"Id\", \"UserId\", \"BookmarkId\", \"BookmarkCategoryId\", \"ItemId\", \"CreatedAtDateUtc\") VALUES (?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("BookmarkCategoryId", /*TEXT*/ 0, obj.bookmarkCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("CreatedAtDateUtc", /*DATE_TIME*/ 6, obj.createdAtDateUtcAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HCR_LOCALBOOKMARK\" SET \"UserId\" = ?, \"BookmarkId\" = ?, \"BookmarkCategoryId\" = ?, \"ItemId\" = ?, \"CreatedAtDateUtc\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("BookmarkCategoryId", /*TEXT*/ 0, obj.bookmarkCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("CreatedAtDateUtc", /*DATE_TIME*/ 6, obj.createdAtDateUtcAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HCR_LOCALBOOKMARK\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HCR_LOCALBOOKMARK\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localBookmarkAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("BookmarkId", /*LONGINTEGER*/ 4, obj.bookmarkIdAttr);
argsList.add("BookmarkCategoryId", /*TEXT*/ 0, obj.bookmarkCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("CreatedAtDateUtc", /*DATE_TIME*/ 6, obj.createdAtDateUtcAttr);

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
var allEntityInfos = [infoLocalBookmark];
var entityService = OS.Injector.resolve(OS.ServiceNames.EntityService);
var browserDbInstance = OS.Settings.getEnvParams().IndexedDBOffline ? entityService : OS.Entities.webSQLStorageInstance;
var nativeDbInstance = OS.Settings.getEnvParams().UseNewWebSQLImpl ? entityService : OS.Entities.webSQLStorageInstance;
var dbInstance = OS.NativeHelper.isRunningOnNative() ? nativeDbInstance : browserDbInstance;
UBTConnect_Bookmarks_MCSModel.entities = {
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
