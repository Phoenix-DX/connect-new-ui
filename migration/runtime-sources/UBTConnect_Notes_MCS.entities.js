define("UBTConnect_Notes_MCS.entities", ["OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.model$LocalNoteRecord"], function (OutSystems, UBTConnect_Notes_MCSModel) {
var OS = OutSystems.Internal;
var moduleKey = "e3738a74-cdb5-4644-82df-e10898ce0aad";
var infoLocalNote = {
key: "33971c5f-8dc6-4984-b811-3fdccecb57f5",
moduleKey: moduleKey,
name: "LocalNote",
implicitAnonymousType: UBTConnect_Notes_MCSModel.LocalNoteRecord,
tableName: "OSUSR_18U_LOCALNOTE",
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
sql: "ALTER TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" ADD \"UserId\" INTEGER DEFAULT NULL"
}
}, {
name: "NoteId",
columnName: "NOTEID",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" ADD \"NoteId\" BIGINT DEFAULT 0"
}
}, {
name: "NoteCategoryId",
columnName: "NOTECATEGORYID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" ADD \"NoteCategoryId\" TEXT(50) DEFAULT NULL"
}
}, {
name: "ItemId",
columnName: "ITEMID",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" ADD \"ItemId\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "DateCreatedUtc",
columnName: "DATECREATEDUTC",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" ADD \"DateCreatedUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "DateEditedUtc",
columnName: "DATEEDITEDUTC",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" ADD \"DateEditedUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "422191e9-3dd5-db72-2f7a-e92548a44146",
dbRecordToRecord: function (dbRecord) {
return new UBTConnect_Notes_MCSModel.LocalNoteRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, UBTConnect_Notes_MCSModel.LocalNoteRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_18U_LOCALNOTE\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"UserId\" INTEGER DEFAULT NULL, \"NoteId\" BIGINT DEFAULT 0, \"NoteCategoryId\" TEXT(50) DEFAULT NULL, \"ItemId\" TEXT(50) DEFAULT \'\', \"DateCreatedUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"DateEditedUtc\" DATETIME DEFAULT \'1900-01-01 00:00:00\')"
},
select: {
sql: "SELECT \"Id\" o0, \"UserId\" o1, \"NoteId\" o2, \"NoteCategoryId\" o3, \"ItemId\" o4, \"DateCreatedUtc\" o5, \"DateEditedUtc\" o6 FROM \"OSUSR_18U_LOCALNOTE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_18U_LOCALNOTE\" (\"Id\", \"UserId\", \"NoteId\", \"NoteCategoryId\", \"ItemId\", \"DateCreatedUtc\", \"DateEditedUtc\") VALUES (?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localNoteAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("NoteId", /*LONGINTEGER*/ 4, obj.noteIdAttr);
argsList.add("NoteCategoryId", /*TEXT*/ 0, obj.noteCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("DateEditedUtc", /*DATE_TIME*/ 6, obj.dateEditedUtcAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_18U_LOCALNOTE\" (\"Id\", \"UserId\", \"NoteId\", \"NoteCategoryId\", \"ItemId\", \"DateCreatedUtc\", \"DateEditedUtc\") VALUES (?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localNoteAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("NoteId", /*LONGINTEGER*/ 4, obj.noteIdAttr);
argsList.add("NoteCategoryId", /*TEXT*/ 0, obj.noteCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("DateEditedUtc", /*DATE_TIME*/ 6, obj.dateEditedUtcAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_18U_LOCALNOTE\" SET \"UserId\" = ?, \"NoteId\" = ?, \"NoteCategoryId\" = ?, \"ItemId\" = ?, \"DateCreatedUtc\" = ?, \"DateEditedUtc\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localNoteAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("NoteId", /*LONGINTEGER*/ 4, obj.noteIdAttr);
argsList.add("NoteCategoryId", /*TEXT*/ 0, obj.noteCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("DateEditedUtc", /*DATE_TIME*/ 6, obj.dateEditedUtcAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_18U_LOCALNOTE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_18U_LOCALNOTE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localNoteAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("NoteId", /*LONGINTEGER*/ 4, obj.noteIdAttr);
argsList.add("NoteCategoryId", /*TEXT*/ 0, obj.noteCategoryIdAttr, null, null, true);
argsList.add("ItemId", /*TEXT*/ 0, obj.itemIdAttr);
argsList.add("DateCreatedUtc", /*DATE_TIME*/ 6, obj.dateCreatedUtcAttr);
argsList.add("DateEditedUtc", /*DATE_TIME*/ 6, obj.dateEditedUtcAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localNoteAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.localNoteAttr;
return obj.idAttr;

}
};
var allEntityInfos = [infoLocalNote];
var entityService = OS.Injector.resolve(OS.ServiceNames.EntityService);
var browserDbInstance = OS.Settings.getEnvParams().IndexedDBOffline ? entityService : OS.Entities.webSQLStorageInstance;
var nativeDbInstance = OS.Settings.getEnvParams().UseNewWebSQLImpl ? entityService : OS.Entities.webSQLStorageInstance;
var dbInstance = OS.NativeHelper.isRunningOnNative() ? nativeDbInstance : browserDbInstance;
UBTConnect_Notes_MCSModel.entities = {
LocalNote: new OS.Entities.Entity(dbInstance, infoLocalNote, moduleKey)
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
