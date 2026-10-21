define("UBTConnect.entities", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.model$Temp_PersonalEventIdsRecord", "UBTConnect.model$ConnectSearch_RecentSearchTermRecord", "UBTConnect.model$UpdateFeed_ReadStatusRecord", "UBTConnect.model$ConnectSearch_RecentClickedResultsRecord"], function (OutSystems, UBTConnectModel) {
var OS = OutSystems.Internal;
var moduleKey = "0811ae64-4efe-4b74-a7b5-8236551a7004";
var infoTemp_PersonalEventIds = {
key: "35334a1b-e30d-4f4e-8587-5b2348f72797",
moduleKey: moduleKey,
name: "Temp_PersonalEventIds",
implicitAnonymousType: UBTConnectModel.Temp_PersonalEventIdsRecord,
tableName: "OSUSR_YDE_TEMP_PERSONALEVENTIDS",
attributes: [{
name: "Id",
columnName: "ID",
type: /*TEXT*/ 0,
length: 500,
isPrimaryKey: true
}],
idIsAutoNumber: /*No*/ 0,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "1286f151-263d-406d-a647-27298c889db6",
dbRecordToRecord: function (dbRecord) {
return new UBTConnectModel.Temp_PersonalEventIdsRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, UBTConnectModel.Temp_PersonalEventIdsRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_YDE_TEMP_PERSONALEVENTIDS\" (\"Id\" TEXT(500) PRIMARY KEY NOT NULL)"
},
select: {
sql: "SELECT \"Id\" o0 FROM \"OSUSR_YDE_TEMP_PERSONALEVENTIDS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_YDE_TEMP_PERSONALEVENTIDS\" (\"Id\") VALUES (?)",
getArguments: function (record) {
var obj = record.temp_PersonalEventIdsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_YDE_TEMP_PERSONALEVENTIDS\" (\"Id\") VALUES (?)",
getArguments: function (record) {
var obj = record.temp_PersonalEventIdsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_YDE_TEMP_PERSONALEVENTIDS\" SET  WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.temp_PersonalEventIdsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_YDE_TEMP_PERSONALEVENTIDS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_YDE_TEMP_PERSONALEVENTIDS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.temp_PersonalEventIdsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.temp_PersonalEventIdsAttr;
return false;

},
getIdFromRecord: function (record) {
var obj = record.temp_PersonalEventIdsAttr;
return obj.idAttr;

}
};
var infoConnectSearch_RecentSearchTerm = {
key: "b992bfa1-e231-4566-8b7a-a282933b94bd",
moduleKey: moduleKey,
name: "ConnectSearch_RecentSearchTerm",
implicitAnonymousType: UBTConnectModel.ConnectSearch_RecentSearchTermRecord,
tableName: "OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM",
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
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" ADD \"UserId\" INTEGER DEFAULT NULL"
}
}, {
name: "SearchedTerm",
columnName: "SEARCHEDTERM",
type: /*TEXT*/ 0,
length: 250,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" ADD \"SearchedTerm\" TEXT(250) DEFAULT \'\'"
}
}, {
name: "SearchedOn",
columnName: "SEARCHEDON",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" ADD \"SearchedOn\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "SearchTargetId",
columnName: "SEARCHTARGETID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" ADD \"SearchTargetId\" TEXT(50) DEFAULT NULL"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "d7eb77bc-435b-b8bb-74c9-50d032289bac",
dbRecordToRecord: function (dbRecord) {
return new UBTConnectModel.ConnectSearch_RecentSearchTermRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, UBTConnectModel.ConnectSearch_RecentSearchTermRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"UserId\" INTEGER DEFAULT NULL, \"SearchedTerm\" TEXT(250) DEFAULT \'\', \"SearchedOn\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"SearchTargetId\" TEXT(50) DEFAULT NULL)"
},
select: {
sql: "SELECT \"Id\" o0, \"UserId\" o1, \"SearchedTerm\" o2, \"SearchedOn\" o3, \"SearchTargetId\" o4 FROM \"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" (\"Id\", \"UserId\", \"SearchedTerm\", \"SearchedOn\", \"SearchTargetId\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.connectSearch_RecentSearchTermAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedTerm", /*TEXT*/ 0, obj.searchedTermAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" (\"Id\", \"UserId\", \"SearchedTerm\", \"SearchedOn\", \"SearchTargetId\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.connectSearch_RecentSearchTermAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedTerm", /*TEXT*/ 0, obj.searchedTermAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" SET \"UserId\" = ?, \"SearchedTerm\" = ?, \"SearchedOn\" = ?, \"SearchTargetId\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.connectSearch_RecentSearchTermAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedTerm", /*TEXT*/ 0, obj.searchedTermAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_YDE_CONNECTSEARCH_RECENTSEARCHTERM\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.connectSearch_RecentSearchTermAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("SearchedTerm", /*TEXT*/ 0, obj.searchedTermAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);

return argsList;
},
hasNullId: function (record) {
var obj = record.connectSearch_RecentSearchTermAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.connectSearch_RecentSearchTermAttr;
return obj.idAttr;

}
};
var infoUpdateFeed_ReadStatus = {
key: "d6f6222a-d3fb-4576-81cb-983704670d42",
moduleKey: moduleKey,
name: "UpdateFeed_ReadStatus",
implicitAnonymousType: UBTConnectModel.UpdateFeed_ReadStatusRecord,
tableName: "OSUSR_YDE_UPDATEFEED_READSTATUS",
attributes: [{
name: "Id",
columnName: "ID",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "IsRead",
columnName: "ISREAD",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_UPDATEFEED_READSTATUS\" ADD \"IsRead\" BOOLEAN DEFAULT 0"
}
}],
idIsAutoNumber: /*No*/ 0,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "b46885f6-ff75-5e8f-8c78-d6020dee7afa",
dbRecordToRecord: function (dbRecord) {
return new UBTConnectModel.UpdateFeed_ReadStatusRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, UBTConnectModel.UpdateFeed_ReadStatusRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_YDE_UPDATEFEED_READSTATUS\" (\"Id\" BIGINT PRIMARY KEY NOT NULL, \"IsRead\" BOOLEAN DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"IsRead\" o1 FROM \"OSUSR_YDE_UPDATEFEED_READSTATUS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_YDE_UPDATEFEED_READSTATUS\" (\"Id\", \"IsRead\") VALUES (?, ?)",
getArguments: function (record) {
var obj = record.updateFeed_ReadStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("IsRead", /*BOOLEAN*/ 2, obj.isReadAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_YDE_UPDATEFEED_READSTATUS\" (\"Id\", \"IsRead\") VALUES (?, ?)",
getArguments: function (record) {
var obj = record.updateFeed_ReadStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("IsRead", /*BOOLEAN*/ 2, obj.isReadAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_YDE_UPDATEFEED_READSTATUS\" SET \"IsRead\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.updateFeed_ReadStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("IsRead", /*BOOLEAN*/ 2, obj.isReadAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_YDE_UPDATEFEED_READSTATUS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_YDE_UPDATEFEED_READSTATUS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.updateFeed_ReadStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("IsRead", /*BOOLEAN*/ 2, obj.isReadAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.updateFeed_ReadStatusAttr;
return false;

},
getIdFromRecord: function (record) {
var obj = record.updateFeed_ReadStatusAttr;
return obj.idAttr;

}
};
var infoConnectSearch_RecentClickedResults = {
key: "ded8ed8a-eedc-4ce6-9fb9-94b1ae9857eb",
moduleKey: moduleKey,
name: "ConnectSearch_RecentClickedResults",
implicitAnonymousType: UBTConnectModel.ConnectSearch_RecentClickedResultsRecord,
tableName: "OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS",
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
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"UserId\" INTEGER DEFAULT NULL"
}
}, {
name: "EntityId",
columnName: "ENTITYID",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"EntityId\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "EntityType",
columnName: "ENTITYTYPE",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"EntityType\" TEXT(50) DEFAULT NULL"
}
}, {
name: "HouseholderId",
columnName: "HOUSEHOLDERID",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"HouseholderId\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Name",
columnName: "NAME",
type: /*TEXT*/ 0,
length: 150,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"Name\" TEXT(150) DEFAULT \'\'"
}
}, {
name: "AdditionalInformation",
columnName: "ADDITIONALINFORMATION",
type: /*TEXT*/ 0,
length: 500,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"AdditionalInformation\" TEXT(500) DEFAULT \'\'"
}
}, {
name: "Location",
columnName: "LOCATION",
type: /*TEXT*/ 0,
length: 150,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"Location\" TEXT(150) DEFAULT \'\'"
}
}, {
name: "SearchedOn",
columnName: "SEARCHEDON",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"SearchedOn\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "Latitude",
columnName: "LATITUDE",
type: /*DECIMAL*/ 5,
length: 15,
decimals: 5,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"Latitude\" REAL(15,5) DEFAULT 0"
}
}, {
name: "Longitude",
columnName: "LONGITUDE",
type: /*DECIMAL*/ 5,
length: 15,
decimals: 5,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"Longitude\" REAL(15,5) DEFAULT 0"
}
}, {
name: "SearchTargetId",
columnName: "SEARCHTARGETID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" ADD \"SearchTargetId\" TEXT(50) DEFAULT NULL"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "62b7c947-31e2-ac57-8d17-692ac1fb9fcb",
dbRecordToRecord: function (dbRecord) {
return new UBTConnectModel.ConnectSearch_RecentClickedResultsRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, UBTConnectModel.ConnectSearch_RecentClickedResultsRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"UserId\" INTEGER DEFAULT NULL, \"EntityId\" TEXT(50) DEFAULT \'\', \"EntityType\" TEXT(50) DEFAULT NULL, \"HouseholderId\" TEXT(50) DEFAULT \'\', \"Name\" TEXT(150) DEFAULT \'\', \"AdditionalInformation\" TEXT(500) DEFAULT \'\', \"Location\" TEXT(150) DEFAULT \'\', \"SearchedOn\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"Latitude\" REAL(15,5) DEFAULT 0, \"Longitude\" REAL(15,5) DEFAULT 0, \"SearchTargetId\" TEXT(50) DEFAULT NULL)"
},
select: {
sql: "SELECT \"Id\" o0, \"UserId\" o1, \"EntityId\" o2, \"EntityType\" o3, \"HouseholderId\" o4, \"Name\" o5, \"AdditionalInformation\" o6, \"Location\" o7, \"SearchedOn\" o8, \"Latitude\" o9, \"Longitude\" o10, \"SearchTargetId\" o11 FROM \"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" (\"Id\", \"UserId\", \"EntityId\", \"EntityType\", \"HouseholderId\", \"Name\", \"AdditionalInformation\", \"Location\", \"SearchedOn\", \"Latitude\", \"Longitude\", \"SearchTargetId\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.connectSearch_RecentClickedResultsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("EntityId", /*TEXT*/ 0, obj.entityIdAttr);
argsList.add("EntityType", /*TEXT*/ 0, obj.entityTypeAttr, null, null, true);
argsList.add("HouseholderId", /*TEXT*/ 0, obj.householderIdAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("AdditionalInformation", /*TEXT*/ 0, obj.additionalInformationAttr);
argsList.add("Location", /*TEXT*/ 0, obj.locationAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("Latitude", /*DECIMAL*/ 5, obj.latitudeAttr, 15, 5);
argsList.add("Longitude", /*DECIMAL*/ 5, obj.longitudeAttr, 15, 5);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" (\"Id\", \"UserId\", \"EntityId\", \"EntityType\", \"HouseholderId\", \"Name\", \"AdditionalInformation\", \"Location\", \"SearchedOn\", \"Latitude\", \"Longitude\", \"SearchTargetId\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.connectSearch_RecentClickedResultsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("EntityId", /*TEXT*/ 0, obj.entityIdAttr);
argsList.add("EntityType", /*TEXT*/ 0, obj.entityTypeAttr, null, null, true);
argsList.add("HouseholderId", /*TEXT*/ 0, obj.householderIdAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("AdditionalInformation", /*TEXT*/ 0, obj.additionalInformationAttr);
argsList.add("Location", /*TEXT*/ 0, obj.locationAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("Latitude", /*DECIMAL*/ 5, obj.latitudeAttr, 15, 5);
argsList.add("Longitude", /*DECIMAL*/ 5, obj.longitudeAttr, 15, 5);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?,?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" SET \"UserId\" = ?, \"EntityId\" = ?, \"EntityType\" = ?, \"HouseholderId\" = ?, \"Name\" = ?, \"AdditionalInformation\" = ?, \"Location\" = ?, \"SearchedOn\" = ?, \"Latitude\" = ?, \"Longitude\" = ?, \"SearchTargetId\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.connectSearch_RecentClickedResultsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("EntityId", /*TEXT*/ 0, obj.entityIdAttr);
argsList.add("EntityType", /*TEXT*/ 0, obj.entityTypeAttr, null, null, true);
argsList.add("HouseholderId", /*TEXT*/ 0, obj.householderIdAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("AdditionalInformation", /*TEXT*/ 0, obj.additionalInformationAttr);
argsList.add("Location", /*TEXT*/ 0, obj.locationAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("Latitude", /*DECIMAL*/ 5, obj.latitudeAttr, 15, 5);
argsList.add("Longitude", /*DECIMAL*/ 5, obj.longitudeAttr, 15, 5);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_YDE_CONNECTSEARCH_RECENTCLICKEDRESULTS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.connectSearch_RecentClickedResultsAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("UserId", /*INTEGER*/ 3, obj.userIdAttr, null, null, true);
argsList.add("EntityId", /*TEXT*/ 0, obj.entityIdAttr);
argsList.add("EntityType", /*TEXT*/ 0, obj.entityTypeAttr, null, null, true);
argsList.add("HouseholderId", /*TEXT*/ 0, obj.householderIdAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("AdditionalInformation", /*TEXT*/ 0, obj.additionalInformationAttr);
argsList.add("Location", /*TEXT*/ 0, obj.locationAttr);
argsList.add("SearchedOn", /*DATE_TIME*/ 6, obj.searchedOnAttr);
argsList.add("Latitude", /*DECIMAL*/ 5, obj.latitudeAttr, 15, 5);
argsList.add("Longitude", /*DECIMAL*/ 5, obj.longitudeAttr, 15, 5);
argsList.add("SearchTargetId", /*TEXT*/ 0, obj.searchTargetIdAttr, null, null, true);

return argsList;
},
hasNullId: function (record) {
var obj = record.connectSearch_RecentClickedResultsAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.connectSearch_RecentClickedResultsAttr;
return obj.idAttr;

}
};
var allEntityInfos = [infoTemp_PersonalEventIds, infoConnectSearch_RecentSearchTerm, infoUpdateFeed_ReadStatus, infoConnectSearch_RecentClickedResults];
var entityService = OS.Injector.resolve(OS.ServiceNames.EntityService);
var browserDbInstance = OS.Settings.getEnvParams().IndexedDBOffline ? entityService : OS.Entities.webSQLStorageInstance;
var nativeDbInstance = OS.Settings.getEnvParams().UseNewWebSQLImpl ? entityService : OS.Entities.webSQLStorageInstance;
var dbInstance = OS.NativeHelper.isRunningOnNative() ? nativeDbInstance : browserDbInstance;
UBTConnectModel.entities = {
Temp_PersonalEventIds: new OS.Entities.Entity(dbInstance, infoTemp_PersonalEventIds, moduleKey),
ConnectSearch_RecentSearchTerm: new OS.Entities.Entity(dbInstance, infoConnectSearch_RecentSearchTerm, moduleKey),
UpdateFeed_ReadStatus: new OS.Entities.Entity(dbInstance, infoUpdateFeed_ReadStatus, moduleKey),
ConnectSearch_RecentClickedResults: new OS.Entities.Entity(dbInstance, infoConnectSearch_RecentClickedResults, moduleKey)
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
