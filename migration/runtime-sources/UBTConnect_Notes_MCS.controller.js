define("UBTConnect_Notes_MCS.controller$Create_LocalNote", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecord", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect_Notes_MCS.model$LocalNoteRecordList"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.create_LocalNote$Action = function (in_NoteIdIn, in_NoteCategoryIdIn, in_ItemIdIn, in_DateCreatedUtcIn, in_DateEditedUtcIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Create_LocalNote$vars"))());
vars.value.in_NoteIdInLocal = in_NoteIdIn;
vars.value.in_NoteCategoryIdInLocal = in_NoteCategoryIdIn;
vars.value.in_ItemIdInLocal = in_ItemIdIn;
vars.value.in_DateCreatedUtcInLocal = in_DateCreatedUtcIn;
vars.value.in_DateEditedUtcInLocal = in_DateEditedUtcIn;
var createOrUpdateLocalNoteVar = new OS.DataTypes.VariableHolder();
var getLocalNotesByNoteIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.LocalNoteRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Create_LocalNote$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createOrUpdateLocalNoteVar = createOrUpdateLocalNoteVar;
varBag.getLocalNotesByNoteIdVar = getLocalNotesByNoteIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:JBIp9qwuZ0+5a6Vb0nZVJg:/ClientActionFlows.JBIp9qwuZ0+5a6Vb0nZVJg:MX0wvrR21aVqSAOLlrWjSQ", "UBTConnect_Notes_MCS", "Create_LocalNote", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:fxg52AufO0idFMVajbpKKA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:zA8gdQ2kuEmlxMS3v5uOiw", callContext.id) && (vars.value.in_NoteCategoryIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:4zZhhpcNVk6bTPLl8tArJQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:8Nuf97WvwkWKZktDVayM9w", callContext.id);
// Aggregate: GetLocalNotesByNoteId
var getLocalNotesByNoteIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.LocalNoteRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstItemId = vars.value.in_ItemIdInLocal;
var qpstNoteCategoryId = vars.value.in_NoteCategoryIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalNote\".\"Id\" o0, NULL o1, NULL o2, NULL o3, NULL o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, NULL o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
} else {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_18u_LocalNote\" \"ENLocalNote\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalNote\".\"UserId\" = :qpinUserId) AND (\"ENLocalNote\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstNoteCategoryId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalNote\".\"NoteCategoryId\" = :qpstNoteCategoryId) AND (\"ENLocalNote\".\"NoteCategoryId\" IS NOT NULL))";
argsList.add("qpstNoteCategoryId", /*TEXT*/ 0, qpstNoteCategoryId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"NoteCategoryId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalNote\".\"ItemId\" = :qpstItemId)";
argsList.add("qpstItemId", /*TEXT*/ 0, qpstItemId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.LocalNoteRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localNoteAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect_Notes_MCS.aggregates.IDB"], function (UBTConnect_Notes_MCSAggregates_IDB) {
return UBTConnect_Notes_MCSAggregates_IDB.executeCreateLocalNote$ClientAction$getLocalNotesByNoteIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.in_ItemIdInLocal, vars.value.in_NoteCategoryIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalNotesByNoteIdVar.value;
});
};
return getLocalNotesByNoteIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:SLdpH_2yTU+Zqo4hQFE9bA", callContext.id);
// Execute Action: CreateOrUpdateLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.createOrUpdate(function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
rec.localNoteAttr = function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRec();
rec.idAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr;
rec.userIdAttr = OS.BuiltinFunctions.getUserId();
rec.noteIdAttr = vars.value.in_NoteIdInLocal;
rec.noteCategoryIdAttr = vars.value.in_NoteCategoryIdInLocal;
rec.itemIdAttr = vars.value.in_ItemIdInLocal;
rec.dateCreatedUtcAttr = ((getLocalNotesByNoteIdVar.value.listOut.isEmpty) ? (vars.value.in_DateCreatedUtcInLocal) : (getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.dateCreatedUtcAttr));
rec.dateEditedUtcAttr = vars.value.in_DateEditedUtcInLocal;
rec.notesTotalCountAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.notesTotalCountAttr.add(OS.BuiltinFunctions.integerToLongInteger(1));
return rec;
}();
return rec;
}(), callContext).then(function (value) {
createOrUpdateLocalNoteVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:515Yy0Q22k+aaAduhlUFxA", callContext.id);
// LocalNoteId = CreateOrUpdateLocalNote.Id
outVars.value.localNoteIdOut = createOrUpdateLocalNoteVar.value.idOut;
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:rG3X04T4OEKcKwi02WQ33A", callContext.id);
});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:JBIp9qwuZ0+5a6Vb0nZVJg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:JBIp9qwuZ0+5a6Vb0nZVJg", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Create_LocalNote$vars", [{
name: "In_NoteId",
attrName: "in_NoteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_NoteCategoryId",
attrName: "in_NoteCategoryIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ItemId",
attrName: "in_ItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DateCreatedUtc",
attrName: "in_DateCreatedUtcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "In_DateEditedUtc",
attrName: "in_DateEditedUtcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Create_LocalNote$outVars", [{
name: "LocalNoteId",
attrName: "localNoteIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.create_LocalNote$Action = function (in_NoteIdIn, in_NoteCategoryIdIn, in_ItemIdIn, in_DateCreatedUtcIn, in_DateEditedUtcIn) {
in_NoteIdIn = (in_NoteIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_NoteIdIn;
in_NoteCategoryIdIn = (in_NoteCategoryIdIn === undefined) ? "" : in_NoteCategoryIdIn;
in_ItemIdIn = (in_ItemIdIn === undefined) ? "" : in_ItemIdIn;
in_DateCreatedUtcIn = (in_DateCreatedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateCreatedUtcIn;
in_DateEditedUtcIn = (in_DateEditedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateEditedUtcIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.create_LocalNote$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_NoteIdIn, OS.DataTypes.DataTypes.LongInteger), in_NoteCategoryIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ItemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_DateCreatedUtcIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(in_DateEditedUtcIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalNoteId: OS.DataConversion.JSNodeParamConverter.to(actionResults.localNoteIdOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});

define("UBTConnect_Notes_MCS.controller$Delete_LocalNote", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecord", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect_Notes_MCS.model$LocalNoteRecordList"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.delete_LocalNote$Action = function (in_NoteCategoryIdIn, in_ItemIdIn, in_DateEditedUtcIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Delete_LocalNote$vars"))());
vars.value.in_NoteCategoryIdInLocal = in_NoteCategoryIdIn;
vars.value.in_ItemIdInLocal = in_ItemIdIn;
vars.value.in_DateEditedUtcInLocal = in_DateEditedUtcIn;
var getLocalNotesByNoteIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.LocalNoteRecordList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalNotesByNoteIdVar = getLocalNotesByNoteIdVar;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:oWC9Xs6uOkmjS0Douuqhpw:/ClientActionFlows.oWC9Xs6uOkmjS0Douuqhpw:DmEC8PgidPwQGamH3kgphQ", "UBTConnect_Notes_MCS", "Delete_LocalNote", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:5e_f4U6W6UmEbHU7QPWPZw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:Y5Q4wH2mIUSHM+vYMxdpJQ", callContext.id) && (vars.value.in_NoteCategoryIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:cGpG6JZXyE2QfBGp3Fy8jA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:sudkVpKEYki1UkYNFxTCpg", callContext.id);
// Aggregate: GetLocalNotesByNoteId
var getLocalNotesByNoteIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.LocalNoteRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstItemId = vars.value.in_ItemIdInLocal;
var qpstNoteCategoryId = vars.value.in_NoteCategoryIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, NULL o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
} else {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_18u_LocalNote\" \"ENLocalNote\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalNote\".\"UserId\" = :qpinUserId) AND (\"ENLocalNote\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstNoteCategoryId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalNote\".\"NoteCategoryId\" = :qpstNoteCategoryId) AND (\"ENLocalNote\".\"NoteCategoryId\" IS NOT NULL))";
argsList.add("qpstNoteCategoryId", /*TEXT*/ 0, qpstNoteCategoryId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"NoteCategoryId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalNote\".\"ItemId\" = :qpstItemId)";
argsList.add("qpstItemId", /*TEXT*/ 0, qpstItemId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.LocalNoteRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localNoteAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect_Notes_MCS.aggregates.IDB"], function (UBTConnect_Notes_MCSAggregates_IDB) {
return UBTConnect_Notes_MCSAggregates_IDB.executeDeleteLocalNote$ClientAction$getLocalNotesByNoteIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.in_ItemIdInLocal, vars.value.in_NoteCategoryIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalNotesByNoteIdVar.value;
});
};
return getLocalNotesByNoteIdAggr().then(function () {
// Exists?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:fZS3911otEOShckcgAZe6w", callContext.id) && !(getLocalNotesByNoteIdVar.value.listOut.isEmpty))) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:opHfU7eA0Ua958WW+VcWVw", callContext.id) && getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.notesTotalCountAttr.lte(OS.BuiltinFunctions.integerToLongInteger(1)))) {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:nm6vhpe48ECn5mI1W4vxMA", callContext.id);
// Execute Action: DeleteLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.delete(getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:ICmaoJZ5dk+tp2vjTc5w5g", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:+Af2aIaUpUmr+0h91sUTTA", callContext.id);
// Execute Action: UpdateLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.update(function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
rec.localNoteAttr = function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRec();
rec.idAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr;
rec.userIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.userIdAttr;
rec.noteIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.noteIdAttr;
rec.noteCategoryIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.noteCategoryIdAttr;
rec.itemIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.itemIdAttr;
rec.dateCreatedUtcAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.dateCreatedUtcAttr;
rec.dateEditedUtcAttr = vars.value.in_DateEditedUtcInLocal;
rec.notesTotalCountAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.notesTotalCountAttr.sub(OS.BuiltinFunctions.integerToLongInteger(1));
return rec;
}();
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:cOeOoY61UU+_5JrBMPLGiw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:aVnL_v+Vgk+Ozzq6gzDPJQ", callContext.id);
}

});
});
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:oWC9Xs6uOkmjS0Douuqhpw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:oWC9Xs6uOkmjS0Douuqhpw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Delete_LocalNote$vars", [{
name: "In_NoteCategoryId",
attrName: "in_NoteCategoryIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ItemId",
attrName: "in_ItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DateEditedUtc",
attrName: "in_DateEditedUtcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.delete_LocalNote$Action = function (in_NoteCategoryIdIn, in_ItemIdIn, in_DateEditedUtcIn) {
in_NoteCategoryIdIn = (in_NoteCategoryIdIn === undefined) ? "" : in_NoteCategoryIdIn;
in_ItemIdIn = (in_ItemIdIn === undefined) ? "" : in_ItemIdIn;
in_DateEditedUtcIn = (in_DateEditedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateEditedUtcIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.delete_LocalNote$Action.bind(controller, in_NoteCategoryIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ItemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_DateEditedUtcIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Notes_MCS.controller$Get_LocalNoteByNoteId", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecord", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect_Notes_MCS.model$LocalNoteRecordList"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.get_LocalNoteByNoteId$Action = function (noteIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Get_LocalNoteByNoteId$vars"))());
vars.value.noteIdInLocal = noteIdIn;
var getLocalNotesByNoteIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.LocalNoteRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Get_LocalNoteByNoteId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalNotesByNoteIdVar = getLocalNotesByNoteIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:OjubQbudY0OcHzLRoAjMNQ:/ClientActionFlows.OjubQbudY0OcHzLRoAjMNQ:nPcQwrhXx0JdEYFdT1C1yw", "UBTConnect_Notes_MCS", "Get_LocalNoteByNoteId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:9Dw010joNEeG3S9JY2mf5w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:FEzOOF5NCU2aHJLGHOf_wg", callContext.id);
// Aggregate: GetLocalNotesByNoteId
var getLocalNotesByNoteIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.LocalNoteRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qploNoteId = vars.value.noteIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
} else {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_18u_LocalNote\" \"ENLocalNote\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalNote\".\"UserId\" = :qpinUserId) AND (\"ENLocalNote\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalNote\".\"NoteId\" = CAST(:qploNoteId AS INTEGER))";
argsList.add("qploNoteId", /*LONGINTEGER*/ 4, qploNoteId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.LocalNoteRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localNoteAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect_Notes_MCS.aggregates.IDB"], function (UBTConnect_Notes_MCSAggregates_IDB) {
return UBTConnect_Notes_MCSAggregates_IDB.executeGetLocalNoteByNoteId$ClientAction$getLocalNotesByNoteIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.noteIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalNotesByNoteIdVar.value;
});
};
return getLocalNotesByNoteIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:8usGyEl4nkirbwG_Q4yWNg", callContext.id);
// LocalNote = GetLocalNotesByNoteId.List.Current
outVars.value.localNoteOut = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr;
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:3YxO_qdoYES7Ed4_6bDCqA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:OjubQbudY0OcHzLRoAjMNQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:OjubQbudY0OcHzLRoAjMNQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Get_LocalNoteByNoteId$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Get_LocalNoteByNoteId$outVars", [{
name: "LocalNote",
attrName: "localNoteOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_Notes_MCSModel.LocalNoteRec();
},
complexType: UBTConnect_Notes_MCSModel.LocalNoteRec
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.get_LocalNoteByNoteId$Action = function (noteIdIn) {
noteIdIn = (noteIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : noteIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.get_LocalNoteByNoteId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(noteIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalNote: actionResults.localNoteOut
};
});
};
});

define("UBTConnect_Notes_MCS.controller$Get_Note_DynamicFilter_YearOptions", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$IntegerRecordList", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.get_Note_DynamicFilter_YearOptions$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getLocalNotesByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.IntegerRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Get_Note_DynamicFilter_YearOptions$outVars"))());
varBag.callContext = callContext;
varBag.getLocalNotesByUserIdVar = getLocalNotesByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:VxdnHdSuYEaiZY8A7OLgOQ:/ClientActionFlows.VxdnHdSuYEaiZY8A7OLgOQ:2UP1xCLu5FbU_MM0+v1bGg", "UBTConnect_Notes_MCS", "Get_Note_DynamicFilter_YearOptions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:mEG+JoAVq0u1FeqoG+s_JA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:YXKE_O4QbE6E2wiL9NSEug", callContext.id);
// Aggregate: GetLocalNotesByUserId
var getLocalNotesByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.IntegerRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "(CASE WHEN (\"ENLocalNote\".\"DateEditedUtc\" = DateTime((Date('1900-01-01')))) THEN (CAST(Strftime('%Y', \"ENLocalNote\".\"DateCreatedUtc\") AS INTEGER)) ELSE (CAST(Strftime('%Y', \"ENLocalNote\".\"DateEditedUtc\") AS INTEGER)) END) \"GroupByYear\"";
} else {
selectSql += "(CASE WHEN (\"ENLocalNote\".\"DateEditedUtc\" = DateTime((Date('1900-01-01')))) THEN (CAST(Strftime('%Y', \"ENLocalNote\".\"DateCreatedUtc\") AS INTEGER)) ELSE (CAST(Strftime('%Y', \"ENLocalNote\".\"DateEditedUtc\") AS INTEGER)) END) \"GroupByYear\"";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_18u_LocalNote\" \"ENLocalNote\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalNote\".\"UserId\" = :qpinUserId) AND (\"ENLocalNote\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"UserId\" IS NULL)";
}
groupByAndHavingSql += " GROUP BY (CASE WHEN (\"ENLocalNote\".\"DateEditedUtc\" = DateTime((Date('1900-01-01')))) THEN (CAST(Strftime('%Y', \"ENLocalNote\".\"DateCreatedUtc\") AS INTEGER)) ELSE (CAST(Strftime('%Y', \"ENLocalNote\".\"DateEditedUtc\") AS INTEGER)) END)";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.IntegerRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"groupByYearAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect_Notes_MCS.aggregates.IDB"], function (UBTConnect_Notes_MCSAggregates_IDB) {
return UBTConnect_Notes_MCSAggregates_IDB.executeGetNoteDynamicFilterYearOptions$ClientAction$getLocalNotesByUserIdAggr(OS.BuiltinFunctions.getUserId(), maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalNotesByUserIdVar.value;
});
};
return getLocalNotesByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:typDS7nUQkagRkYa8E0scQ", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(outVars.value.yearsOut, OS.DataConversion.JSConversions.typeConvertRecordList(getLocalNotesByUserIdVar.value.listOut, new OS.DataTypes.TextList(), function (source, target) {
target = (source.groupByYearAttr).toString();
return target;
}), callContext);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:6wyHIm0V4EGX+icS9RHWiw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:VxdnHdSuYEaiZY8A7OLgOQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:VxdnHdSuYEaiZY8A7OLgOQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Get_Note_DynamicFilter_YearOptions$outVars", [{
name: "Years",
attrName: "yearsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.get_Note_DynamicFilter_YearOptions$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.get_Note_DynamicFilter_YearOptions$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Years: actionResults.yearsOut
};
});
};
});

define("UBTConnect_Notes_MCS.controller$Get_Note_DynamicPills", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$DynamicPillList", "UBTConnect_Notes_MCS.controller$ServerAction.Get_NotePills_ByNoteCategoryIds", "UBTConnect_Notes_MCS.model$LongIntegerNoteCategoryIdentifierRecordList", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.get_Note_DynamicPills$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var get_NotePills_ByNoteCategoryIdsVar = new OS.DataTypes.VariableHolder();
var getLocalNotesCategoryIds_ByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.LongIntegerNoteCategoryIdentifierRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Get_Note_DynamicPills$outVars"))());
varBag.callContext = callContext;
varBag.get_NotePills_ByNoteCategoryIdsVar = get_NotePills_ByNoteCategoryIdsVar;
varBag.getLocalNotesCategoryIds_ByUserIdVar = getLocalNotesCategoryIds_ByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:yDn5Kp3Ff0ScZeedsCGM7g:/ClientActionFlows.yDn5Kp3Ff0ScZeedsCGM7g:VF3Ezo6Iy5AXxV7Ao0rNzQ", "UBTConnect_Notes_MCS", "Get_Note_DynamicPills", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:G_c84UudIU29H67rjmBJQA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:hlDFgg58mk2BMrH2HmDDog", callContext.id);
// Aggregate: GetLocalNotesCategoryIds_ByUserId
var getLocalNotesCategoryIds_ByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.LongIntegerNoteCategoryIdentifierRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalNote\".\"NoteCategoryId\" \"NoteCategoryId\", Sum(\"ENLocalNote\".\"NotesTotalCount\") \"NotesTotalCountSum\"";
} else {
selectSql += "\"ENLocalNote\".\"NoteCategoryId\" \"NoteCategoryId\", Sum(\"ENLocalNote\".\"NotesTotalCount\") \"NotesTotalCountSum\"";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_18u_LocalNote\" \"ENLocalNote\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalNote\".\"UserId\" = :qpinUserId) AND (\"ENLocalNote\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalNote\".\"NoteCategoryId\" IS NOT NULL)";
groupByAndHavingSql += " GROUP BY \"ENLocalNote\".\"NoteCategoryId\"";
orderBySql += " ORDER BY ";
var orderByColumns = [];
orderByColumns.push("\"NotesTotalCountSum\" DESC ");
orderByColumns.push("\"NoteCategoryId\" ASC ");
orderBySql += OS.Entities.webSQLStorageInstance.getOrderByColumnsWithoutDuplicates(orderByColumns);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.LongIntegerNoteCategoryIdentifierRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"noteCategoryIdAttr",
"notesTotalCountSumAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect_Notes_MCS.aggregates.IDB"], function (UBTConnect_Notes_MCSAggregates_IDB) {
return UBTConnect_Notes_MCSAggregates_IDB.executeGetNoteDynamicPills$ClientAction$getLocalNotesCategoryIds_ByUserIdAggr(OS.BuiltinFunctions.getUserId(), maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalNotesCategoryIds_ByUserIdVar.value;
});
};
return getLocalNotesCategoryIds_ByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:m6OG30qv9E+hUpud2pHiKA", callContext.id);
// Execute Action: Get_NotePills_ByNoteCategoryIds
return controller.get_NotePills_ByNoteCategoryIds$ServerAction(OS.DataConversion.JSConversions.typeConvertRecordList(getLocalNotesCategoryIds_ByUserIdVar.value.listOut, new OS.DataTypes.TextList(), function (source, target) {
target = source.noteCategoryIdAttr;
return target;
}), callContext).then(function (value) {
get_NotePills_ByNoteCategoryIdsVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:u9nNOGUUXk2pqJcZM0Obxg", callContext.id);
// Out_NotePills = Get_NotePills_ByNoteCategoryIds.Out_NotePills
outVars.value.out_NotePillsOut = get_NotePills_ByNoteCategoryIdsVar.value.out_NotePillsOut;
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:Cav3REdJGkiE1X_UKkYnVQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:yDn5Kp3Ff0ScZeedsCGM7g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:yDn5Kp3Ff0ScZeedsCGM7g", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Get_Note_DynamicPills$outVars", [{
name: "Out_NotePills",
attrName: "out_NotePillsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_Notes_MCSModel.DynamicPillList();
},
complexType: UBTConnect_Notes_MCSModel.DynamicPillList
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.get_Note_DynamicPills$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.get_Note_DynamicPills$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_NotePills: actionResults.out_NotePillsOut
};
});
};
});

define("UBTConnect_Notes_MCS.controller$SyncNotes", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecordList", "UBTConnect_Notes_MCS.model$LocalNoteList", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.syncNotes$Action = function (in_NotesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.SyncNotes$vars"))());
vars.value.in_NotesInLocal = in_NotesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:WcTShUc+4UCmykZO0_Uy5Q:/ClientActionFlows.WcTShUc+4UCmykZO0_Uy5Q:L+j1WADhtl99eWV+b09ozg", "UBTConnect_Notes_MCS", "SyncNotes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:El3hRVqnvEOsx6DAEe6W_w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:hjA5N12HAUir_ACJi7F8zQ", callContext.id);
// Execute Action: DeleteAllLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:VIGFRNG8UUCbzwSRCfIrog", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.in_NotesInLocal, new UBTConnect_Notes_MCSModel.LocalNoteRecordList(), function (source, target) {
target = UBTConnect_Notes_MCSModel.LocalNoteRecord.fromStructure(source);
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:qBgitNox7k+W0ncCxkkZHw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:WcTShUc+4UCmykZO0_Uy5Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:WcTShUc+4UCmykZO0_Uy5Q", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.SyncNotes$vars", [{
name: "In_Notes",
attrName: "in_NotesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_Notes_MCSModel.LocalNoteList();
},
complexType: UBTConnect_Notes_MCSModel.LocalNoteList
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.syncNotes$Action = function (in_NotesIn) {
in_NotesIn = (in_NotesIn === undefined) ? new UBTConnect_Notes_MCSModel.LocalNoteList() : in_NotesIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.syncNotes$Action.bind(controller, in_NotesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Notes_MCS.controller$Update_LocalNote", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecord", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect_Notes_MCS.model$LocalNoteRecordList"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.update_LocalNote$Action = function (in_NoteCategoryIdIn, in_ItemIdIn, in_DateEditedUtcIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Update_LocalNote$vars"))());
vars.value.in_NoteCategoryIdInLocal = in_NoteCategoryIdIn;
vars.value.in_ItemIdInLocal = in_ItemIdIn;
vars.value.in_DateEditedUtcInLocal = in_DateEditedUtcIn;
var getLocalNotesByNoteIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.LocalNoteRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Update_LocalNote$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalNotesByNoteIdVar = getLocalNotesByNoteIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:E6P+D_dCHk+_UitdxnQUNw:/ClientActionFlows.E6P+D_dCHk+_UitdxnQUNw:V80yn5CyTR+ym3LJqBtxuw", "UBTConnect_Notes_MCS", "Update_LocalNote", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:ljjsHKjOGUCpXPaulKx3iA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:CCiqrnCHykSDXfbI_W0C9Q", callContext.id) && (vars.value.in_NoteCategoryIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:lwqIBuOyn0eZnLHDFgQ5MA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:VRtcZZEhy0ugBEJADLAugw", callContext.id);
// Aggregate: GetLocalNotesByNoteId
var getLocalNotesByNoteIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.LocalNoteRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstItemId = vars.value.in_ItemIdInLocal;
var qpstNoteCategoryId = vars.value.in_NoteCategoryIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, NULL o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
} else {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6, \"ENLocalNote\".\"NotesTotalCount\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_18u_LocalNote\" \"ENLocalNote\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalNote\".\"UserId\" = :qpinUserId) AND (\"ENLocalNote\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstNoteCategoryId.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalNote\".\"NoteCategoryId\" = :qpstNoteCategoryId) AND (\"ENLocalNote\".\"NoteCategoryId\" IS NOT NULL))";
argsList.add("qpstNoteCategoryId", /*TEXT*/ 0, qpstNoteCategoryId);
} else {
fromAndWhereSql += "(\"ENLocalNote\".\"NoteCategoryId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalNote\".\"ItemId\" = :qpstItemId)";
argsList.add("qpstItemId", /*TEXT*/ 0, qpstItemId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.LocalNoteRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localNoteAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 0;
}

return new Promise(function (resolve, reject) {
require(["UBTConnect_Notes_MCS.aggregates.IDB"], function (UBTConnect_Notes_MCSAggregates_IDB) {
return UBTConnect_Notes_MCSAggregates_IDB.executeUpdateLocalNote$ClientAction$getLocalNotesByNoteIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.in_ItemIdInLocal, vars.value.in_NoteCategoryIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalNotesByNoteIdVar.value;
});
};
return getLocalNotesByNoteIdAggr().then(function () {
// Exists?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:CQRzJKQGdkKLQor9wF+wLQ", callContext.id) && !(getLocalNotesByNoteIdVar.value.listOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:dmvh2BvluUeUWdljHmYB3g", callContext.id);
// Execute Action: UpdateLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.update(function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
rec.localNoteAttr = function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRec();
rec.idAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr;
rec.userIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.userIdAttr;
rec.noteIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.noteIdAttr;
rec.noteCategoryIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.noteCategoryIdAttr;
rec.itemIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.itemIdAttr;
rec.dateCreatedUtcAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.dateCreatedUtcAttr;
rec.dateEditedUtcAttr = vars.value.in_DateEditedUtcInLocal;
rec.notesTotalCountAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.notesTotalCountAttr;
return rec;
}();
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:BOjhMVg+akGa8_gQmUMUwg", callContext.id);
// LocalNoteId = GetLocalNotesByNoteId.List.Current.LocalNote.Id
outVars.value.localNoteIdOut = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr;
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:f7GPV4YuMUy15xy9EtmlPQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:f_FaTlEDXUGJ1WQ9t0WWmA", callContext.id);
}

});
});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:E6P+D_dCHk+_UitdxnQUNw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:E6P+D_dCHk+_UitdxnQUNw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Update_LocalNote$vars", [{
name: "In_NoteCategoryId",
attrName: "in_NoteCategoryIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ItemId",
attrName: "in_ItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DateEditedUtc",
attrName: "in_DateEditedUtcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Update_LocalNote$outVars", [{
name: "LocalNoteId",
attrName: "localNoteIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.update_LocalNote$Action = function (in_NoteCategoryIdIn, in_ItemIdIn, in_DateEditedUtcIn) {
in_NoteCategoryIdIn = (in_NoteCategoryIdIn === undefined) ? "" : in_NoteCategoryIdIn;
in_ItemIdIn = (in_ItemIdIn === undefined) ? "" : in_ItemIdIn;
in_DateEditedUtcIn = (in_DateEditedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateEditedUtcIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.update_LocalNote$Action.bind(controller, in_NoteCategoryIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ItemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_DateEditedUtcIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalNoteId: OS.DataConversion.JSNodeParamConverter.to(actionResults.localNoteIdOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});

define("UBTConnect_Notes_MCS.controller$ServerAction.Get_NotePills_ByNoteCategoryIds", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.model$DynamicPillList"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.get_NotePills_ByNoteCategoryIds$ServerAction = function (in_NoteCategoryIdsIn, callContext) {
var controller = this.controller;
var inputs = {
In_NoteCategoryIds: OS.DataConversion.ServerDataConverter.to(in_NoteCategoryIdsIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("Get_NotePills_ByNoteCategoryIds", "screenservices/UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds", "zIp++aF3DEd1KlqolnoAKA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS$ActionGet_NotePills_ByNoteCategoryIds"))();
executeServerActionResult.out_NotePillsOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_NotePills, UBTConnect_Notes_MCSModel.DynamicPillList);
return executeServerActionResult;
});
};
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS$ActionGet_NotePills_ByNoteCategoryIds", [{
name: "Out_NotePills",
attrName: "out_NotePillsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_Notes_MCSModel.DynamicPillList();
},
complexType: UBTConnect_Notes_MCSModel.DynamicPillList
}]);
});
define("UBTConnect_Notes_MCS.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller$debugger"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCS_Controller_debugger) {
var OS = OutSystems.Internal;
var UBTConnect_Notes_MCSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBTConnect_Notes_MCSController.default.defaultTimeout;
};
Controller.prototype.getClientActionProxies = function (controller) {
var _this = this;
var thisController = controller;
return Object.keys(this.clientActionProxies).reduce(function (acc, actionName) {
acc[actionName] = function () {
if(thisController.isActive()) {
return _this.clientActionProxies[actionName].apply(thisController, arguments);
}

return Promise.resolve();
};
return acc;
}, {});
};
return Controller;
})(OS.Controller.BaseModuleController);
UBTConnect_Notes_MCSController.default = new Controller(null, "UBTConnect_Notes_MCS");
});
define("UBTConnect_Notes_MCS.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"SSUzYCj8VU2Bab4pJARDrg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NoteCategoryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dcBOCWYO7ESZig8e8BRKyA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6Gr0Ps95tUCeu7IGq6Grxg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateEditedUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"GZ+N0EphZEO1itp8VirTXA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localNoteIdOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"VRtcZZEhy0ugBEJADLAugw": {
getter: function (varBag, idService) {
return varBag.getLocalNotesByNoteIdVar.value;
}
},
"3cwF9NIrVUaIKpxb3fvJLw": {
getter: function (varBag, idService) {
return varBag.outVars.value.yearsOut;
}
},
"YXKE_O4QbE6E2wiL9NSEug": {
getter: function (varBag, idService) {
return varBag.getLocalNotesByUserIdVar.value;
}
},
"W6FKTwtRNU+3vK75TROBdg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_NotePillsOut;
}
},
"m6OG30qv9E+hUpud2pHiKA": {
getter: function (varBag, idService) {
return varBag.get_NotePills_ByNoteCategoryIdsVar.value;
}
},
"hlDFgg58mk2BMrH2HmDDog": {
getter: function (varBag, idService) {
return varBag.getLocalNotesCategoryIds_ByUserIdVar.value;
}
},
"RndpZLIx7UWDOQomAO_UiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"hQRs2P33GkScOgY+VScUhA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localNoteOut;
}
},
"FEzOOF5NCU2aHJLGHOf_wg": {
getter: function (varBag, idService) {
return varBag.getLocalNotesByNoteIdVar.value;
}
},
"pgwxhAjl3kGA+9_zm0jr8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NoteCategoryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sERsGlVUkE+wZi71xfCTRw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bJBysPlwK0usZQD6hkBApA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateEditedUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"sudkVpKEYki1UkYNFxTCpg": {
getter: function (varBag, idService) {
return varBag.getLocalNotesByNoteIdVar.value;
}
},
"I0T3b9TTbk68Kld7GG6TyA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NotesInLocal;
}
},
"DiRUDrqxUkCIRrHBPGfDig": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NoteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ONoy6AEiCk+T1G07ovb6GQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NoteCategoryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GNdw_M6DyEydbSXZlFJjig": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"igBqW3E_XUeQqy7MgEeQxg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateCreatedUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"Qpm2PCm5CUmeEzD6v5Crhw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateEditedUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"xQ3qPnmXZkGNdUH8t_gmgw": {
getter: function (varBag, idService) {
return varBag.outVars.value.localNoteIdOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"SLdpH_2yTU+Zqo4hQFE9bA": {
getter: function (varBag, idService) {
return varBag.createOrUpdateLocalNoteVar.value;
}
},
"8Nuf97WvwkWKZktDVayM9w": {
getter: function (varBag, idService) {
return varBag.getLocalNotesByNoteIdVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
