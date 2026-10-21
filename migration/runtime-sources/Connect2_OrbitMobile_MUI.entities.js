define("Connect2_OrbitMobile_MUI.entities", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRecord", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRecord", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecord", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRecord", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRecord", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecord", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecord", "Connect2_OrbitMobile_MUI.model$LocalOrbitEventTypeRecord", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRecord", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRecord", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRecord", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecord"], function (OutSystems, Connect2_OrbitMobile_MUIModel) {
var OS = OutSystems.Internal;
var moduleKey = "9be6ccac-528f-40c3-ac29-97356c967d0d";
var infoLocalBedSize = {
key: "09eba2e8-9d0e-46d1-b547-8ac59b49ba69",
moduleKey: moduleKey,
name: "LocalBedSize",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalBedSizeRecord,
tableName: "OSUSR_HQ9_LOCALBEDSIZE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*LONGINTEGER*/ 4,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALBEDSIZE\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALBEDSIZE\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALBEDSIZE\" ADD \"Order\" INTEGER DEFAULT 0"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "846dc6df-f8f0-2c47-31a7-6e5bd11ae7a6",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalBedSizeRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalBedSizeRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALBEDSIZE\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"JSON_Name\" TEXT(100) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"JSON_Name\" o2, \"Order\" o3 FROM \"OSUSR_HQ9_LOCALBEDSIZE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALBEDSIZE\" (\"Id\", \"Label\", \"JSON_Name\", \"Order\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localBedSizeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALBEDSIZE\" (\"Id\", \"Label\", \"JSON_Name\", \"Order\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localBedSizeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALBEDSIZE\" SET \"Label\" = ?, \"JSON_Name\" = ?, \"Order\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localBedSizeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALBEDSIZE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALBEDSIZE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localBedSizeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localBedSizeAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.localBedSizeAttr;
return obj.idAttr;

}
};
var infoLocalVehicleOwner = {
key: "0f4cf5ca-f8fe-459f-b3a7-0b06f90504f9",
moduleKey: moduleKey,
name: "LocalVehicleOwner",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecord,
tableName: "OSUSR_HQ9_LOCALVEHICLEOWNER",
attributes: [{
name: "Id",
columnName: "ID",
type: /*LONGINTEGER*/ 4,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLEOWNER\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLEOWNER\" ADD \"Order\" INTEGER DEFAULT 0"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLEOWNER\" ADD \"JSON_Name\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "3087f1ad-6ea1-a27a-2ce2-62f83e4ca7c2",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLEOWNER\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0, \"JSON_Name\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"Order\" o2, \"JSON_Name\" o3 FROM \"OSUSR_HQ9_LOCALVEHICLEOWNER\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALVEHICLEOWNER\" (\"Id\", \"Label\", \"Order\", \"JSON_Name\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localVehicleOwnerAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALVEHICLEOWNER\" (\"Id\", \"Label\", \"Order\", \"JSON_Name\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localVehicleOwnerAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALVEHICLEOWNER\" SET \"Label\" = ?, \"Order\" = ?, \"JSON_Name\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localVehicleOwnerAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALVEHICLEOWNER\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALVEHICLEOWNER\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localVehicleOwnerAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localVehicleOwnerAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.localVehicleOwnerAttr;
return obj.idAttr;

}
};
var infoLocalHelperStatus = {
key: "24520b9b-b56a-4a6a-8953-499e4f5baeba",
moduleKey: moduleKey,
name: "LocalHelperStatus",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecord,
tableName: "OSUSR_HQ9_LOCALHELPERSTATUS",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERSTATUS\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERSTATUS\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "cbaf9695-294f-b566-1c5c-73c0dd44a85c",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERSTATUS\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"JSON_Name\" TEXT(100) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"JSON_Name\" o2 FROM \"OSUSR_HQ9_LOCALHELPERSTATUS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALHELPERSTATUS\" (\"Id\", \"Label\", \"JSON_Name\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.localHelperStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALHELPERSTATUS\" (\"Id\", \"Label\", \"JSON_Name\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.localHelperStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALHELPERSTATUS\" SET \"Label\" = ?, \"JSON_Name\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localHelperStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHELPERSTATUS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHELPERSTATUS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localHelperStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localHelperStatusAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localHelperStatusAttr;
return obj.idAttr;

}
};
var infoLocalVehicleType = {
key: "29d797e6-79c3-4479-8998-5e2bdf684870",
moduleKey: moduleKey,
name: "LocalVehicleType",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecord,
tableName: "OSUSR_HQ9_LOCALVEHICLETYPE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*LONGINTEGER*/ 4,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLETYPE\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLETYPE\" ADD \"Order\" INTEGER DEFAULT 0"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLETYPE\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "9a3fd083-8101-59c9-37dc-4222546e71de",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALVEHICLETYPE\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0, \"JSON_Name\" TEXT(100) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"Order\" o2, \"JSON_Name\" o3 FROM \"OSUSR_HQ9_LOCALVEHICLETYPE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALVEHICLETYPE\" (\"Id\", \"Label\", \"Order\", \"JSON_Name\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localVehicleTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALVEHICLETYPE\" (\"Id\", \"Label\", \"Order\", \"JSON_Name\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localVehicleTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALVEHICLETYPE\" SET \"Label\" = ?, \"Order\" = ?, \"JSON_Name\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localVehicleTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALVEHICLETYPE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALVEHICLETYPE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localVehicleTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localVehicleTypeAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.localVehicleTypeAttr;
return obj.idAttr;

}
};
var infoLocalGenderPreference = {
key: "2d7daecb-87b1-45d7-bb2c-c902057bdef9",
moduleKey: moduleKey,
name: "LocalGenderPreference",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecord,
tableName: "OSUSR_HQ9_LOCALGENDERPREFERENCE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALGENDERPREFERENCE\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALGENDERPREFERENCE\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALGENDERPREFERENCE\" ADD \"Order\" INTEGER DEFAULT 0"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "e81d407f-48a2-4853-3024-5007277cc2e2",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALGENDERPREFERENCE\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"JSON_Name\" TEXT(100) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"JSON_Name\" o2, \"Order\" o3 FROM \"OSUSR_HQ9_LOCALGENDERPREFERENCE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALGENDERPREFERENCE\" (\"Id\", \"Label\", \"JSON_Name\", \"Order\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localGenderPreferenceAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALGENDERPREFERENCE\" (\"Id\", \"Label\", \"JSON_Name\", \"Order\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localGenderPreferenceAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALGENDERPREFERENCE\" SET \"Label\" = ?, \"JSON_Name\" = ?, \"Order\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localGenderPreferenceAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALGENDERPREFERENCE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALGENDERPREFERENCE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localGenderPreferenceAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localGenderPreferenceAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localGenderPreferenceAttr;
return obj.idAttr;

}
};
var infoLocalHelperRole = {
key: "3b5a4778-45a2-4423-8df4-bddc01873eac",
moduleKey: moduleKey,
name: "LocalHelperRole",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecord,
tableName: "OSUSR_HQ9_LOCALHELPERROLE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERROLE\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERROLE\" ADD \"Order\" INTEGER DEFAULT 0"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERROLE\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}, {
name: "isReadOnly",
columnName: "ISREADONLY",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERROLE\" ADD \"isReadOnly\" BOOLEAN DEFAULT 0"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "24c69e86-b5f0-923b-0dc1-9d6bb050318c",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHELPERROLE\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0, \"JSON_Name\" TEXT(100) DEFAULT \'\', \"isReadOnly\" BOOLEAN DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"Order\" o2, \"JSON_Name\" o3, \"isReadOnly\" o4 FROM \"OSUSR_HQ9_LOCALHELPERROLE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALHELPERROLE\" (\"Id\", \"Label\", \"Order\", \"JSON_Name\", \"isReadOnly\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localHelperRoleAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("isReadOnly", /*BOOLEAN*/ 2, obj.isReadOnlyAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALHELPERROLE\" (\"Id\", \"Label\", \"Order\", \"JSON_Name\", \"isReadOnly\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localHelperRoleAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("isReadOnly", /*BOOLEAN*/ 2, obj.isReadOnlyAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALHELPERROLE\" SET \"Label\" = ?, \"Order\" = ?, \"JSON_Name\" = ?, \"isReadOnly\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localHelperRoleAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("isReadOnly", /*BOOLEAN*/ 2, obj.isReadOnlyAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHELPERROLE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHELPERROLE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localHelperRoleAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("isReadOnly", /*BOOLEAN*/ 2, obj.isReadOnlyAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localHelperRoleAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localHelperRoleAttr;
return obj.idAttr;

}
};
var infoLocalHostSurveyStep = {
key: "4790655c-0f3a-4a66-b421-5ca86b492eef",
moduleKey: moduleKey,
name: "LocalHostSurveyStep",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecord,
tableName: "OSUSR_HQ9_LOCALHOSTSURVEYSTEP",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "HeaderLabel",
columnName: "HEADERLABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" ADD \"HeaderLabel\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "AddLabel",
columnName: "ADDLABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" ADD \"AddLabel\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" ADD \"Order\" INTEGER DEFAULT 0"
}
}, {
name: "IsDataStep",
columnName: "ISDATASTEP",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" ADD \"IsDataStep\" BOOLEAN DEFAULT 0"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "570ab0f2-2691-972e-7a67-5505e02f9333",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"HeaderLabel\" TEXT(50) DEFAULT \'\', \"AddLabel\" TEXT(50) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0, \"IsDataStep\" BOOLEAN DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"HeaderLabel\" o1, \"AddLabel\" o2, \"Order\" o3, \"IsDataStep\" o4 FROM \"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" (\"Id\", \"HeaderLabel\", \"AddLabel\", \"Order\", \"IsDataStep\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localHostSurveyStepAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("HeaderLabel", /*TEXT*/ 0, obj.headerLabelAttr);
argsList.add("AddLabel", /*TEXT*/ 0, obj.addLabelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("IsDataStep", /*BOOLEAN*/ 2, obj.isDataStepAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" (\"Id\", \"HeaderLabel\", \"AddLabel\", \"Order\", \"IsDataStep\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localHostSurveyStepAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("HeaderLabel", /*TEXT*/ 0, obj.headerLabelAttr);
argsList.add("AddLabel", /*TEXT*/ 0, obj.addLabelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("IsDataStep", /*BOOLEAN*/ 2, obj.isDataStepAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" SET \"HeaderLabel\" = ?, \"AddLabel\" = ?, \"Order\" = ?, \"IsDataStep\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localHostSurveyStepAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("HeaderLabel", /*TEXT*/ 0, obj.headerLabelAttr);
argsList.add("AddLabel", /*TEXT*/ 0, obj.addLabelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("IsDataStep", /*BOOLEAN*/ 2, obj.isDataStepAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHOSTSURVEYSTEP\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localHostSurveyStepAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("HeaderLabel", /*TEXT*/ 0, obj.headerLabelAttr);
argsList.add("AddLabel", /*TEXT*/ 0, obj.addLabelAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("IsDataStep", /*BOOLEAN*/ 2, obj.isDataStepAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localHostSurveyStepAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localHostSurveyStepAttr;
return obj.idAttr;

}
};
var infoLocalOrbitEventType = {
key: "5226d8d9-65b0-4c58-ad8e-c79268d38411",
moduleKey: moduleKey,
name: "LocalOrbitEventType",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalOrbitEventTypeRecord,
tableName: "OSUSR_HQ9_LOCALORBITEVENTTYPE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Type",
columnName: "TYPE",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITEVENTTYPE\" ADD \"Type\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Name",
columnName: "NAME",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITEVENTTYPE\" ADD \"Name\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "MainColorVar",
columnName: "MAINCOLORVAR",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITEVENTTYPE\" ADD \"MainColorVar\" TEXT(50) DEFAULT NULL"
}
}, {
name: "MainIcon",
columnName: "MAINICON",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITEVENTTYPE\" ADD \"MainIcon\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*No*/ 0,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "e985fd4a-638c-fbf7-078f-0a3f8574fe36",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalOrbitEventTypeRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalOrbitEventTypeRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITEVENTTYPE\" (\"Id\" TEXT(50) PRIMARY KEY NOT NULL, \"Type\" TEXT(50) DEFAULT \'\', \"Name\" TEXT(50) DEFAULT \'\', \"MainColorVar\" TEXT(50) DEFAULT NULL, \"MainIcon\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Type\" o1, \"Name\" o2, \"MainColorVar\" o3, \"MainIcon\" o4 FROM \"OSUSR_HQ9_LOCALORBITEVENTTYPE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALORBITEVENTTYPE\" (\"Id\", \"Type\", \"Name\", \"MainColorVar\", \"MainIcon\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localOrbitEventTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALORBITEVENTTYPE\" (\"Id\", \"Type\", \"Name\", \"MainColorVar\", \"MainIcon\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localOrbitEventTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALORBITEVENTTYPE\" SET \"Type\" = ?, \"Name\" = ?, \"MainColorVar\" = ?, \"MainIcon\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localOrbitEventTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALORBITEVENTTYPE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALORBITEVENTTYPE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localOrbitEventTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localOrbitEventTypeAttr;
return false;

},
getIdFromRecord: function (record) {
var obj = record.localOrbitEventTypeAttr;
return obj.idAttr;

}
};
var infoLocalHouseFloor = {
key: "6c838b7b-1274-46db-8b29-a4c68e2cd3dd",
moduleKey: moduleKey,
name: "LocalHouseFloor",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecord,
tableName: "OSUSR_HQ9_LOCALHOUSEFLOOR",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOUSEFLOOR\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOUSEFLOOR\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOUSEFLOOR\" ADD \"Order\" INTEGER DEFAULT 0"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "bb82d4e0-4ce1-8b08-17e5-18ce437ea438",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALHOUSEFLOOR\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"JSON_Name\" TEXT(100) DEFAULT \'\', \"Order\" INTEGER DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"JSON_Name\" o2, \"Order\" o3 FROM \"OSUSR_HQ9_LOCALHOUSEFLOOR\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALHOUSEFLOOR\" (\"Id\", \"Label\", \"JSON_Name\", \"Order\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localHouseFloorAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALHOUSEFLOOR\" (\"Id\", \"Label\", \"JSON_Name\", \"Order\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localHouseFloorAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALHOUSEFLOOR\" SET \"Label\" = ?, \"JSON_Name\" = ?, \"Order\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localHouseFloorAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHOUSEFLOOR\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALHOUSEFLOOR\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localHouseFloorAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localHouseFloorAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localHouseFloorAttr;
return obj.idAttr;

}
};
var infoLocalMealType = {
key: "b9a9de01-25c3-4b39-adc3-afaa9d0391be",
moduleKey: moduleKey,
name: "LocalMealType",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalMealTypeRecord,
tableName: "OSUSR_HQ9_LOCALMEALTYPE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALMEALTYPE\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 100,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALMEALTYPE\" ADD \"JSON_Name\" TEXT(100) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "b431c5b1-b9d6-3e8c-5218-d3ec7c97f99b",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalMealTypeRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalMealTypeRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALMEALTYPE\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"JSON_Name\" TEXT(100) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"JSON_Name\" o2 FROM \"OSUSR_HQ9_LOCALMEALTYPE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALMEALTYPE\" (\"Id\", \"Label\", \"JSON_Name\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.localMealTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALMEALTYPE\" (\"Id\", \"Label\", \"JSON_Name\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.localMealTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALMEALTYPE\" SET \"Label\" = ?, \"JSON_Name\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localMealTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALMEALTYPE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALMEALTYPE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localMealTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localMealTypeAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localMealTypeAttr;
return obj.idAttr;

}
};
var infoLocalOrbitMilestoneType = {
key: "de744672-4c15-4953-88e6-a924d90d3500",
moduleKey: moduleKey,
name: "LocalOrbitMilestoneType",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecord,
tableName: "OSUSR_HQ9_LOCALORBITMILESTONETYPE",
attributes: [{
name: "Id",
columnName: "ID",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Order",
columnName: "ORDER",
type: /*INTEGER*/ 3,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"Order\" INTEGER DEFAULT 0"
}
}, {
name: "Type",
columnName: "TYPE",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"Type\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Name",
columnName: "NAME",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"Name\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "MainColorVar",
columnName: "MAINCOLORVAR",
type: /*TEXT*/ 0,
length: 50,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"MainColorVar\" TEXT(50) DEFAULT NULL"
}
}, {
name: "MainIcon",
columnName: "MAINICON",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"MainIcon\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "CanHost",
columnName: "CANHOST",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"CanHost\" BOOLEAN DEFAULT 0"
}
}, {
name: "IsTransportMilestone",
columnName: "ISTRANSPORTMILESTONE",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"IsTransportMilestone\" BOOLEAN DEFAULT 0"
}
}, {
name: "IconTransportDeparture",
columnName: "ICONTRANSPORTDEPARTURE",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"IconTransportDeparture\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "IconTransportArrival",
columnName: "ICONTRANSPORTARRIVAL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"IconTransportArrival\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "TransportHeaderClass",
columnName: "TRANSPORTHEADERCLASS",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"TransportHeaderClass\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "TravelInfoHeader",
columnName: "TRAVELINFOHEADER",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" ADD \"TravelInfoHeader\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*No*/ 0,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "ea5da0cc-d8ef-c6c8-f25c-10fdeb6c3fd9",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" (\"Id\" TEXT(50) PRIMARY KEY NOT NULL, \"Order\" INTEGER DEFAULT 0, \"Type\" TEXT(50) DEFAULT \'\', \"Name\" TEXT(50) DEFAULT \'\', \"MainColorVar\" TEXT(50) DEFAULT NULL, \"MainIcon\" TEXT(50) DEFAULT \'\', \"CanHost\" BOOLEAN DEFAULT 0, \"IsTransportMilestone\" BOOLEAN DEFAULT 0, \"IconTransportDeparture\" TEXT(50) DEFAULT \'\', \"IconTransportArrival\" TEXT(50) DEFAULT \'\', \"TransportHeaderClass\" TEXT(50) DEFAULT \'\', \"TravelInfoHeader\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Order\" o1, \"Type\" o2, \"Name\" o3, \"MainColorVar\" o4, \"MainIcon\" o5, \"CanHost\" o6, \"IsTransportMilestone\" o7, \"IconTransportDeparture\" o8, \"IconTransportArrival\" o9, \"TransportHeaderClass\" o10, \"TravelInfoHeader\" o11 FROM \"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" (\"Id\", \"Order\", \"Type\", \"Name\", \"MainColorVar\", \"MainIcon\", \"CanHost\", \"IsTransportMilestone\", \"IconTransportDeparture\", \"IconTransportArrival\", \"TransportHeaderClass\", \"TravelInfoHeader\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localOrbitMilestoneTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);
argsList.add("CanHost", /*BOOLEAN*/ 2, obj.canHostAttr);
argsList.add("IsTransportMilestone", /*BOOLEAN*/ 2, obj.isTransportMilestoneAttr);
argsList.add("IconTransportDeparture", /*TEXT*/ 0, obj.iconTransportDepartureAttr);
argsList.add("IconTransportArrival", /*TEXT*/ 0, obj.iconTransportArrivalAttr);
argsList.add("TransportHeaderClass", /*TEXT*/ 0, obj.transportHeaderClassAttr);
argsList.add("TravelInfoHeader", /*TEXT*/ 0, obj.travelInfoHeaderAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" (\"Id\", \"Order\", \"Type\", \"Name\", \"MainColorVar\", \"MainIcon\", \"CanHost\", \"IsTransportMilestone\", \"IconTransportDeparture\", \"IconTransportArrival\", \"TransportHeaderClass\", \"TravelInfoHeader\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.localOrbitMilestoneTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);
argsList.add("CanHost", /*BOOLEAN*/ 2, obj.canHostAttr);
argsList.add("IsTransportMilestone", /*BOOLEAN*/ 2, obj.isTransportMilestoneAttr);
argsList.add("IconTransportDeparture", /*TEXT*/ 0, obj.iconTransportDepartureAttr);
argsList.add("IconTransportArrival", /*TEXT*/ 0, obj.iconTransportArrivalAttr);
argsList.add("TransportHeaderClass", /*TEXT*/ 0, obj.transportHeaderClassAttr);
argsList.add("TravelInfoHeader", /*TEXT*/ 0, obj.travelInfoHeaderAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?,?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" SET \"Order\" = ?, \"Type\" = ?, \"Name\" = ?, \"MainColorVar\" = ?, \"MainIcon\" = ?, \"CanHost\" = ?, \"IsTransportMilestone\" = ?, \"IconTransportDeparture\" = ?, \"IconTransportArrival\" = ?, \"TransportHeaderClass\" = ?, \"TravelInfoHeader\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localOrbitMilestoneTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);
argsList.add("CanHost", /*BOOLEAN*/ 2, obj.canHostAttr);
argsList.add("IsTransportMilestone", /*BOOLEAN*/ 2, obj.isTransportMilestoneAttr);
argsList.add("IconTransportDeparture", /*TEXT*/ 0, obj.iconTransportDepartureAttr);
argsList.add("IconTransportArrival", /*TEXT*/ 0, obj.iconTransportArrivalAttr);
argsList.add("TransportHeaderClass", /*TEXT*/ 0, obj.transportHeaderClassAttr);
argsList.add("TravelInfoHeader", /*TEXT*/ 0, obj.travelInfoHeaderAttr);
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALORBITMILESTONETYPE\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALORBITMILESTONETYPE\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localOrbitMilestoneTypeAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*TEXT*/ 0, obj.idAttr, null, null, true);
argsList.add("Order", /*INTEGER*/ 3, obj.orderAttr);
argsList.add("Type", /*TEXT*/ 0, obj.typeAttr);
argsList.add("Name", /*TEXT*/ 0, obj.nameAttr);
argsList.add("MainColorVar", /*TEXT*/ 0, obj.mainColorVarAttr, null, null, true);
argsList.add("MainIcon", /*TEXT*/ 0, obj.mainIconAttr);
argsList.add("CanHost", /*BOOLEAN*/ 2, obj.canHostAttr);
argsList.add("IsTransportMilestone", /*BOOLEAN*/ 2, obj.isTransportMilestoneAttr);
argsList.add("IconTransportDeparture", /*TEXT*/ 0, obj.iconTransportDepartureAttr);
argsList.add("IconTransportArrival", /*TEXT*/ 0, obj.iconTransportArrivalAttr);
argsList.add("TransportHeaderClass", /*TEXT*/ 0, obj.transportHeaderClassAttr);
argsList.add("TravelInfoHeader", /*TEXT*/ 0, obj.travelInfoHeaderAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localOrbitMilestoneTypeAttr;
return false;

},
getIdFromRecord: function (record) {
var obj = record.localOrbitMilestoneTypeAttr;
return obj.idAttr;

}
};
var infoLocalSurveyStatus = {
key: "ea64deda-3c5c-4dbf-b5e0-9ae85f5f143b",
moduleKey: moduleKey,
name: "LocalSurveyStatus",
implicitAnonymousType: Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecord,
tableName: "OSUSR_HQ9_LOCALSURVEYSTATUS",
attributes: [{
name: "Id",
columnName: "ID",
type: /*INTEGER*/ 3,
isEntityReference: true,
isPrimaryKey: true
}, {
name: "Label",
columnName: "LABEL",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALSURVEYSTATUS\" ADD \"Label\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "JSON_Name",
columnName: "JSON_NAME",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HQ9_LOCALSURVEYSTATUS\" ADD \"JSON_Name\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "b4efad82-5867-539f-5f91-fc73c44c981a",
dbRecordToRecord: function (dbRecord) {
return new Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecord(OS.DataConversion.LocalStorageConverter.from(dbRecord, Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HQ9_LOCALSURVEYSTATUS\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Label\" TEXT(50) DEFAULT \'\', \"JSON_Name\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Label\" o1, \"JSON_Name\" o2 FROM \"OSUSR_HQ9_LOCALSURVEYSTATUS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HQ9_LOCALSURVEYSTATUS\" (\"Id\", \"Label\", \"JSON_Name\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.localSurveyStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HQ9_LOCALSURVEYSTATUS\" (\"Id\", \"Label\", \"JSON_Name\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.localSurveyStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, (obj.idAttr === 0) ? null : obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HQ9_LOCALSURVEYSTATUS\" SET \"Label\" = ?, \"JSON_Name\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.localSurveyStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALSURVEYSTATUS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HQ9_LOCALSURVEYSTATUS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.localSurveyStatusAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*INTEGER*/ 3, obj.idAttr, null, null, true);
argsList.add("Label", /*TEXT*/ 0, obj.labelAttr);
argsList.add("JSON_Name", /*TEXT*/ 0, obj.jSON_NameAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.localSurveyStatusAttr;
return (obj.idAttr === 0);

},
getIdFromRecord: function (record) {
var obj = record.localSurveyStatusAttr;
return obj.idAttr;

}
};
var allEntityInfos = [infoLocalBedSize, infoLocalVehicleOwner, infoLocalHelperStatus, infoLocalVehicleType, infoLocalGenderPreference, infoLocalHelperRole, infoLocalHostSurveyStep, infoLocalOrbitEventType, infoLocalHouseFloor, infoLocalMealType, infoLocalOrbitMilestoneType, infoLocalSurveyStatus];
var entityService = OS.Injector.resolve(OS.ServiceNames.EntityService);
var browserDbInstance = OS.Settings.getEnvParams().IndexedDBOffline ? entityService : OS.Entities.webSQLStorageInstance;
var nativeDbInstance = OS.Settings.getEnvParams().UseNewWebSQLImpl ? entityService : OS.Entities.webSQLStorageInstance;
var dbInstance = OS.NativeHelper.isRunningOnNative() ? nativeDbInstance : browserDbInstance;
Connect2_OrbitMobile_MUIModel.entities = {
LocalBedSize: new OS.Entities.Entity(dbInstance, infoLocalBedSize, moduleKey),
LocalVehicleOwner: new OS.Entities.Entity(dbInstance, infoLocalVehicleOwner, moduleKey),
LocalHelperStatus: new OS.Entities.Entity(dbInstance, infoLocalHelperStatus, moduleKey),
LocalVehicleType: new OS.Entities.Entity(dbInstance, infoLocalVehicleType, moduleKey),
LocalGenderPreference: new OS.Entities.Entity(dbInstance, infoLocalGenderPreference, moduleKey),
LocalHelperRole: new OS.Entities.Entity(dbInstance, infoLocalHelperRole, moduleKey),
LocalHostSurveyStep: new OS.Entities.Entity(dbInstance, infoLocalHostSurveyStep, moduleKey),
LocalOrbitEventType: new OS.Entities.Entity(dbInstance, infoLocalOrbitEventType, moduleKey),
LocalHouseFloor: new OS.Entities.Entity(dbInstance, infoLocalHouseFloor, moduleKey),
LocalMealType: new OS.Entities.Entity(dbInstance, infoLocalMealType, moduleKey),
LocalOrbitMilestoneType: new OS.Entities.Entity(dbInstance, infoLocalOrbitMilestoneType, moduleKey),
LocalSurveyStatus: new OS.Entities.Entity(dbInstance, infoLocalSurveyStatus, moduleKey)
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
