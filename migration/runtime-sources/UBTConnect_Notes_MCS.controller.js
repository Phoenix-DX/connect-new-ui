define("UBTConnect_Notes_MCS.controller$CreateOrUpdate_LocalNote", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRecord", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect_Notes_MCS.model$LocalNoteRecordList"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.createOrUpdate_LocalNote$Action = function (in_NoteIdIn, in_NoteCategoryIdIn, in_ItemIdIn, in_DateCreatedUtcIn, in_DateEditedUtcIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.CreateOrUpdate_LocalNote$vars"))());
vars.value.in_NoteIdInLocal = in_NoteIdIn;
vars.value.in_NoteCategoryIdInLocal = in_NoteCategoryIdIn;
vars.value.in_ItemIdInLocal = in_ItemIdIn;
vars.value.in_DateCreatedUtcInLocal = in_DateCreatedUtcIn;
vars.value.in_DateEditedUtcInLocal = in_DateEditedUtcIn;
var createLocalNoteVar = new OS.DataTypes.VariableHolder();
var getLocalNotesByNoteIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.LocalNoteRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.CreateOrUpdate_LocalNote$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createLocalNoteVar = createLocalNoteVar;
varBag.getLocalNotesByNoteIdVar = getLocalNotesByNoteIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:JBIp9qwuZ0+5a6Vb0nZVJg:/ClientActionFlows.JBIp9qwuZ0+5a6Vb0nZVJg:dWflMNL95r0H8iszGmQnYQ", "UBTConnect_Notes_MCS", "CreateOrUpdate_LocalNote", "NRFlows.ClientActionFlow", callContext.id, varBag);
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
var qploNoteId = vars.value.in_NoteIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, NULL o3, NULL o4, NULL o5, NULL o6";
} else {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6";
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
return UBTConnect_Notes_MCSAggregates_IDB.executeCreateOrUpdateLocalNote$ClientAction$getLocalNotesByNoteIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.in_NoteIdInLocal, maxRecords).then(function (result) {
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
if((OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:clLVuHhVRkqvXy01Xdwrrg", callContext.id) && !(getLocalNotesByNoteIdVar.value.listOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:rA4L9_Zchkq53V55De52Dw", callContext.id);
// Execute Action: UpdateLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.update(function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
rec.localNoteAttr = function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRec();
rec.idAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr;
rec.userIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.userIdAttr;
rec.noteIdAttr = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.noteIdAttr;
rec.noteCategoryIdAttr = vars.value.in_NoteCategoryIdInLocal;
rec.itemIdAttr = vars.value.in_ItemIdInLocal;
rec.dateCreatedUtcAttr = vars.value.in_DateCreatedUtcInLocal;
rec.dateEditedUtcAttr = vars.value.in_DateEditedUtcInLocal;
return rec;
}();
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:zVI4m_xSCU6AxabSL9s7Fw", callContext.id);
// LocalNoteId = GetLocalNotesByNoteId.List.Current.LocalNote.Id
outVars.value.localNoteIdOut = getLocalNotesByNoteIdVar.value.listOut.getCurrent(callContext.iterationContext).localNoteAttr.idAttr;
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:QJcLvsd8GEihoOc+RU87rw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:SLdpH_2yTU+Zqo4hQFE9bA", callContext.id);
// Execute Action: CreateLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.create(function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRecord();
rec.localNoteAttr = function () {
var rec = new UBTConnect_Notes_MCSModel.LocalNoteRec();
rec.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
rec.userIdAttr = OS.BuiltinFunctions.getUserId();
rec.noteIdAttr = vars.value.in_NoteIdInLocal;
rec.noteCategoryIdAttr = vars.value.in_NoteCategoryIdInLocal;
rec.itemIdAttr = vars.value.in_ItemIdInLocal;
rec.dateCreatedUtcAttr = vars.value.in_DateCreatedUtcInLocal;
rec.dateEditedUtcAttr = vars.value.in_DateEditedUtcInLocal;
return rec;
}();
return rec;
}(), callContext).then(function (value) {
createLocalNoteVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:515Yy0Q22k+aaAduhlUFxA", callContext.id);
// LocalNoteId = CreateLocalNote.Id
outVars.value.localNoteIdOut = createLocalNoteVar.value.idOut;
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:rG3X04T4OEKcKwi02WQ33A", callContext.id);
});
}

});
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
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.CreateOrUpdate_LocalNote$vars", [{
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
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.CreateOrUpdate_LocalNote$outVars", [{
name: "LocalNoteId",
attrName: "localNoteIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.createOrUpdate_LocalNote$Action = function (in_NoteIdIn, in_NoteCategoryIdIn, in_ItemIdIn, in_DateCreatedUtcIn, in_DateEditedUtcIn) {
in_NoteIdIn = (in_NoteIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_NoteIdIn;
in_NoteCategoryIdIn = (in_NoteCategoryIdIn === undefined) ? "" : in_NoteCategoryIdIn;
in_ItemIdIn = (in_ItemIdIn === undefined) ? "" : in_ItemIdIn;
in_DateCreatedUtcIn = (in_DateCreatedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateCreatedUtcIn;
in_DateEditedUtcIn = (in_DateEditedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateEditedUtcIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.createOrUpdate_LocalNote$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_NoteIdIn, OS.DataTypes.DataTypes.LongInteger), in_NoteCategoryIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ItemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_DateCreatedUtcIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(in_DateEditedUtcIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalNoteId: OS.DataConversion.JSNodeParamConverter.to(actionResults.localNoteIdOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});

define("UBTConnect_Notes_MCS.controller$Delete_LocalNoteById", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.delete_LocalNoteById$Action = function (localNoteIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Delete_LocalNoteById$vars"))());
vars.value.localNoteIdInLocal = localNoteIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:imzk8DNww0SRzsqlBJOm_A:/ClientActionFlows.imzk8DNww0SRzsqlBJOm_A:MY3jjzY3LdauPRAGHejdBQ", "UBTConnect_Notes_MCS", "Delete_LocalNoteById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:8r16BelRvUqERbSLapyC0w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:sDhTvySeN0SRw3UsDkENiQ", callContext.id);
// Execute Action: DeleteLocalNote
return UBTConnect_Notes_MCSModel.entities.LocalNote.delete(vars.value.localNoteIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:ZjPqDUv3gEe0YVJBH9CX5Q", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:imzk8DNww0SRzsqlBJOm_A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:imzk8DNww0SRzsqlBJOm_A", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Delete_LocalNoteById$vars", [{
name: "LocalNoteId",
attrName: "localNoteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.delete_LocalNoteById$Action = function (localNoteIdIn) {
localNoteIdIn = (localNoteIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localNoteIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.delete_LocalNoteById$Action.bind(controller, localNoteIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Notes_MCS.controller$Delete_LocalNoteByNoteId", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.controller$Delete_LocalNoteById", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect_Notes_MCS.controller$Get_LocalNoteByNoteId"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.delete_LocalNoteByNoteId$Action = function (noteIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Delete_LocalNoteByNoteId$vars"))());
vars.value.noteIdInLocal = noteIdIn;
var get_LocalNoteByNoteIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.get_LocalNoteByNoteIdVar = get_LocalNoteByNoteIdVar;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:okgY+PJ_SkiVxbPc8UR7Ng:/ClientActionFlows.okgY+PJ_SkiVxbPc8UR7Ng:LGA25udfEdtCCYQMvspSRA", "UBTConnect_Notes_MCS", "Delete_LocalNoteByNoteId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:pLvucykZ4kKcy8eAfYGzNA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:zBrNwXsWpUCgIa3z_9WKXA", callContext.id);
// Execute Action: Get_LocalNoteByNoteId
return UBTConnect_Notes_MCSController.default.get_LocalNoteByNoteId$Action(vars.value.noteIdInLocal, callContext).then(function (value) {
get_LocalNoteByNoteIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:5UcBqJWXJUakQSduxnvwgA", callContext.id);
// Execute Action: Delete_LocalNoteById
return UBTConnect_Notes_MCSController.default.delete_LocalNoteById$Action(get_LocalNoteByNoteIdVar.value.localNoteOut.idAttr, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:BH1XUBKtqkuAuahIflxBAg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:okgY+PJ_SkiVxbPc8UR7Ng", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("dIpz47XNREaC3+EImM4KrQ:okgY+PJ_SkiVxbPc8UR7Ng", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Notes_MCSController.default;
UBTConnect_Notes_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Notes_MCS.Delete_LocalNoteByNoteId$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Notes_MCSController.default.clientActionProxies.delete_LocalNoteByNoteId$Action = function (noteIdIn) {
noteIdIn = (noteIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : noteIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Notes_MCSController.default.delete_LocalNoteByNoteId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(noteIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
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
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:OjubQbudY0OcHzLRoAjMNQ:/ClientActionFlows.OjubQbudY0OcHzLRoAjMNQ:iAFJqvsK3Trz0+KvGegH1Q", "UBTConnect_Notes_MCS", "Get_LocalNoteByNoteId", "NRFlows.ClientActionFlow", callContext.id, varBag);
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
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6";
} else {
selectSql += "\"ENLocalNote\".\"Id\" o0, \"ENLocalNote\".\"UserId\" o1, \"ENLocalNote\".\"NoteId\" o2, \"ENLocalNote\".\"NoteCategoryId\" o3, \"ENLocalNote\".\"ItemId\" o4, \"ENLocalNote\".\"DateCreatedUtc\" o5, \"ENLocalNote\".\"DateEditedUtc\" o6";
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
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:VxdnHdSuYEaiZY8A7OLgOQ:/ClientActionFlows.VxdnHdSuYEaiZY8A7OLgOQ:xBczw2dxooRv+6PC9VnxOA", "UBTConnect_Notes_MCS", "Get_Note_DynamicFilter_YearOptions", "NRFlows.ClientActionFlow", callContext.id, varBag);
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

define("UBTConnect_Notes_MCS.controller$Get_Note_DynamicPills", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Notes_MCS.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Notes_MCS.entities", "UBTConnect_Notes_MCS.model$DynamicPillList", "UBTConnect_Notes_MCS.controller$ServerAction.Get_NotePills_ByNoteCategoryIds", "UBTConnect_Notes_MCS.model$NoteCategoryIdentifierRecordList", "UBTConnect_Notes_MCS.model$LocalNoteRec"], function (exports, OutSystems, UBTConnect_Notes_MCSModel, UBTConnect_Notes_MCSController, UBTConnect_Notes_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Notes_MCSController.default.get_Note_DynamicPills$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var get_NotePills_ByNoteCategoryIdsVar = new OS.DataTypes.VariableHolder();
var getLocalNotesCategoryIds_ByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Notes_MCS.Get_Note_DynamicPills$outVars"))());
varBag.callContext = callContext;
varBag.get_NotePills_ByNoteCategoryIdsVar = get_NotePills_ByNoteCategoryIdsVar;
varBag.getLocalNotesCategoryIds_ByUserIdVar = getLocalNotesCategoryIds_ByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("dIpz47XNREaC3+EImM4KrQ:yDn5Kp3Ff0ScZeedsCGM7g:/ClientActionFlows.yDn5Kp3Ff0ScZeedsCGM7g:X5TKrTVv_YP3SelOYHas7w", "UBTConnect_Notes_MCS", "Get_Note_DynamicPills", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:G_c84UudIU29H67rjmBJQA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("dIpz47XNREaC3+EImM4KrQ:hlDFgg58mk2BMrH2HmDDog", callContext.id);
// Aggregate: GetLocalNotesCategoryIds_ByUserId
var getLocalNotesCategoryIds_ByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecordList;
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
selectSql += "\"ENLocalNote\".\"NoteCategoryId\" \"NoteCategoryId\"";
} else {
selectSql += "\"ENLocalNote\".\"NoteCategoryId\" \"NoteCategoryId\"";
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
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Notes_MCSModel.NoteCategoryIdentifierRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"noteCategoryIdAttr",
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
"I0T3b9TTbk68Kld7GG6TyA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NotesInLocal;
}
},
"+Rxi+KYocUSDR8+0iLPeGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localNoteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
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
return varBag.createLocalNoteVar.value;
}
},
"8Nuf97WvwkWKZktDVayM9w": {
getter: function (varBag, idService) {
return varBag.getLocalNotesByNoteIdVar.value;
}
},
"o9nDKV9XbkW7k2oOvLJLdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"zBrNwXsWpUCgIa3z_9WKXA": {
getter: function (varBag, idService) {
return varBag.get_LocalNoteByNoteIdVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
