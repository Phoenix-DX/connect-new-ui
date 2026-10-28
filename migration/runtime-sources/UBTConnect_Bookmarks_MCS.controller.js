define("UBTConnect_Bookmarks_MCS.controller$AddBookmarkToCache", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.addBookmarkToCache$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:N3qfLCAVyUCVTwv4Vj3ZGQ:/ClientActionFlows.N3qfLCAVyUCVTwv4Vj3ZGQ:AsIyg425oQjeMXjph9sNHg", "UBTConnect_Bookmarks_MCS", "AddBookmarkToCache", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:5Ni4_XjIa0+AroK38ER0_A", callContext.id);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:Ynlz82c4cEK0rrEkNL7piQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:N3qfLCAVyUCVTwv4Vj3ZGQ", callContext.id);
}

};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.addBookmarkToCache$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.addBookmarkToCache$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$Create_LocalBookmark", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecord", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecordList"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.create_LocalBookmark$Action = function (in_ItemIdIn, in_BookmarkCategoryIdIn, in_BookmarkIdIn, in_DateCreatedUtcIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.Create_LocalBookmark$vars"))());
vars.value.in_ItemIdInLocal = in_ItemIdIn;
vars.value.in_BookmarkCategoryIdInLocal = in_BookmarkCategoryIdIn;
vars.value.in_BookmarkIdInLocal = in_BookmarkIdIn;
vars.value.in_DateCreatedUtcInLocal = in_DateCreatedUtcIn;
var createLocalBookmarkVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarksByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.Create_LocalBookmark$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createLocalBookmarkVar = createLocalBookmarkVar;
varBag.getLocalBookmarksByUserIdVar = getLocalBookmarksByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:tWWed5o_F0mCRaiO_duAGA:/ClientActionFlows.tWWed5o_F0mCRaiO_duAGA:txUpcOE1ocJMKxm0gU4E+g", "UBTConnect_Bookmarks_MCS", "Create_LocalBookmark", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:RJUd4mLXGUSbYCghdYGskA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:5ClorbPa_Ea1W71j4Ky+nA", callContext.id) && (vars.value.in_BookmarkCategoryIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:+HW7NTBTmUKmv1PJVHeuxw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:N0wvyoiwSkih+NqDW_t+dA", callContext.id);
// Aggregate: GetLocalBookmarksByUserId
var getLocalBookmarksByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList;
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

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"BookmarkCategoryId\" o3, \"ENLocalBookmark\".\"ItemId\" o4, \"ENLocalBookmark\".\"CreatedAtDateUtc\" o5";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hcr_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalBookmark\".\"ItemId\" = :qpstItemId)";
argsList.add("qpstItemId", /*TEXT*/ 0, qpstItemId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localBookmarkAttr",
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
require(["UBTConnect_Bookmarks_MCS.aggregates.IDB"], function (UBTConnect_Bookmarks_MCSAggregates_IDB) {
return UBTConnect_Bookmarks_MCSAggregates_IDB.executeCreateLocalBookmark$ClientAction$getLocalBookmarksByUserIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.in_ItemIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarksByUserIdVar.value;
});
};
return getLocalBookmarksByUserIdAggr().then(function () {
// Exist
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:vl5555knBUybyQfkiDwGDA", callContext.id) && !(getLocalBookmarksByUserIdVar.value.listOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:beqAm9crl0eMjCNRIDknFQ", callContext.id);
// LocalBookmarkId = GetLocalBookmarksByUserId.List.Current.LocalBookmark.Id
outVars.value.localBookmarkIdOut = getLocalBookmarksByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).localBookmarkAttr.idAttr;
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:HWco7CFdckm6jEZ9OxH4Zg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:o4UhUHIGcEm5OGwZrDdX2Q", callContext.id);
// Execute Action: CreateLocalBookmark
return UBTConnect_Bookmarks_MCSModel.entities.LocalBookmark.create(function () {
var rec = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord();
rec.localBookmarkAttr = function () {
var rec = new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec();
rec.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
rec.userIdAttr = OS.BuiltinFunctions.getUserId();
rec.bookmarkIdAttr = vars.value.in_BookmarkIdInLocal;
rec.bookmarkCategoryIdAttr = vars.value.in_BookmarkCategoryIdInLocal;
rec.itemIdAttr = vars.value.in_ItemIdInLocal;
rec.createdAtDateUtcAttr = vars.value.in_DateCreatedUtcInLocal;
return rec;
}();
return rec;
}(), callContext).then(function (value) {
createLocalBookmarkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:KOkwWmXLOUKBTuKwWMs67w", callContext.id);
// LocalBookmarkId = CreateLocalBookmark.Id
outVars.value.localBookmarkIdOut = createLocalBookmarkVar.value.idOut;
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:tQbB0ENUd0exfNRw8gcdIA", callContext.id);
});
}

});
});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:tWWed5o_F0mCRaiO_duAGA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:tWWed5o_F0mCRaiO_duAGA", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.Create_LocalBookmark$vars", [{
name: "In_ItemId",
attrName: "in_ItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_BookmarkCategoryId",
attrName: "in_BookmarkCategoryIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_BookmarkId",
attrName: "in_BookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_DateCreatedUtc",
attrName: "in_DateCreatedUtcInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.Create_LocalBookmark$outVars", [{
name: "LocalBookmarkId",
attrName: "localBookmarkIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.create_LocalBookmark$Action = function (in_ItemIdIn, in_BookmarkCategoryIdIn, in_BookmarkIdIn, in_DateCreatedUtcIn) {
in_ItemIdIn = (in_ItemIdIn === undefined) ? "" : in_ItemIdIn;
in_BookmarkCategoryIdIn = (in_BookmarkCategoryIdIn === undefined) ? "" : in_BookmarkCategoryIdIn;
in_BookmarkIdIn = (in_BookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_BookmarkIdIn;
in_DateCreatedUtcIn = (in_DateCreatedUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateCreatedUtcIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.create_LocalBookmark$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_ItemIdIn, OS.DataTypes.DataTypes.Text), in_BookmarkCategoryIdIn, OS.DataConversion.JSNodeParamConverter.from(in_BookmarkIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(in_DateCreatedUtcIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalBookmarkId: actionResults.localBookmarkIdOut
};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$Delete_LocalBookmarkByBookmarkId", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByBookmarkId", "UBTConnect_Bookmarks_MCS.controller$Delete_LocalBookmarkById"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.delete_LocalBookmarkByBookmarkId$Action = function (bookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.Delete_LocalBookmarkByBookmarkId$vars"))());
vars.value.bookmarkIdInLocal = bookmarkIdIn;
var getLocalBookmarkByBookmarkIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarkByBookmarkIdVar = getLocalBookmarkByBookmarkIdVar;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:NaY+5e2DDEm5opsnZdrK9g:/ClientActionFlows.NaY+5e2DDEm5opsnZdrK9g:mJGLPCczAx1KZPGRZR6WXg", "UBTConnect_Bookmarks_MCS", "Delete_LocalBookmarkByBookmarkId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:Wjqxum3OSkSopsRt4VBnEQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:qLpiKprtIkqOZJvOD9uFpw", callContext.id);
// Execute Action: GetLocalBookmarkByBookmarkId
return UBTConnect_Bookmarks_MCSController.default.getLocalBookmarkByBookmarkId$Action(vars.value.bookmarkIdInLocal, callContext).then(function (value) {
getLocalBookmarkByBookmarkIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:5Xd+b7_xS0GJz+qnBlIFgg", callContext.id);
// Execute Action: Delete_LocalBookmarkById
return UBTConnect_Bookmarks_MCSController.default.delete_LocalBookmarkById$Action(getLocalBookmarkByBookmarkIdVar.value.localBookmarkOut.idAttr, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:W84bQRjsXUS1_5lZ6nQYOQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:NaY+5e2DDEm5opsnZdrK9g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:NaY+5e2DDEm5opsnZdrK9g", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.Delete_LocalBookmarkByBookmarkId$vars", [{
name: "BookmarkId",
attrName: "bookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.delete_LocalBookmarkByBookmarkId$Action = function (bookmarkIdIn) {
bookmarkIdIn = (bookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : bookmarkIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.delete_LocalBookmarkByBookmarkId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$Delete_LocalBookmarkById", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.delete_LocalBookmarkById$Action = function (localBookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.Delete_LocalBookmarkById$vars"))());
vars.value.localBookmarkIdInLocal = localBookmarkIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:AZZz5eJBt0ivIM78MygkYw:/ClientActionFlows.AZZz5eJBt0ivIM78MygkYw:enNQLZzfdBqV5XAhI6CtOA", "UBTConnect_Bookmarks_MCS", "Delete_LocalBookmarkById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:fwicHI8YNUqJUUhlsS17UA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:A+7QKxelzkaUzT5aIaDRHQ", callContext.id);
// Execute Action: DeleteLocalBookmark
return UBTConnect_Bookmarks_MCSModel.entities.LocalBookmark.delete(vars.value.localBookmarkIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:h7loxtpsqEaRZ_f+OI6IWQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:AZZz5eJBt0ivIM78MygkYw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:AZZz5eJBt0ivIM78MygkYw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.Delete_LocalBookmarkById$vars", [{
name: "LocalBookmarkId",
attrName: "localBookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.delete_LocalBookmarkById$Action = function (localBookmarkIdIn) {
localBookmarkIdIn = (localBookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localBookmarkIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.delete_LocalBookmarkById$Action.bind(controller, localBookmarkIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$Get_LocalDynamicBookmarkPills", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillList", "UBTConnect_Bookmarks_MCS.controller$ServerAction.Get_BookmarkPills_ByBookmarkCategoryIds", "UBTConnect_Bookmarks_MCS.model$LongIntegerBookmarkCategoryIdentifierRecordList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.get_LocalDynamicBookmarkPills$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var get_BookmarkPills_ByBookmarkCategoryIdsVar = new OS.DataTypes.VariableHolder();
var getLocalBookmarkCategoryIds_ByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Bookmarks_MCSModel.LongIntegerBookmarkCategoryIdentifierRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.Get_LocalDynamicBookmarkPills$outVars"))());
varBag.callContext = callContext;
varBag.get_BookmarkPills_ByBookmarkCategoryIdsVar = get_BookmarkPills_ByBookmarkCategoryIdsVar;
varBag.getLocalBookmarkCategoryIds_ByUserIdVar = getLocalBookmarkCategoryIds_ByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:FKgov8gn0UygbE85+2Qi3A:/ClientActionFlows.FKgov8gn0UygbE85+2Qi3A:3Q1xWtN_1OkCIl9NzNimng", "UBTConnect_Bookmarks_MCS", "Get_LocalDynamicBookmarkPills", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:p46SbWVUakGA3jkHEILU_Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:mnonKyNBl0+fs2aGXQXkjA", callContext.id);
// Aggregate: GetLocalBookmarkCategoryIds_ByUserId
var getLocalBookmarkCategoryIds_ByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Bookmarks_MCSModel.LongIntegerBookmarkCategoryIdentifierRecordList;
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
selectSql += "\"ENLocalBookmark\".\"BookmarkCategoryId\" \"BookmarkCategoryId\", Count(\"ENLocalBookmark\".\"BookmarkId\") \"Count\"";
} else {
selectSql += "\"ENLocalBookmark\".\"BookmarkCategoryId\" \"BookmarkCategoryId\", Count(\"ENLocalBookmark\".\"BookmarkId\") \"Count\"";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hcr_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalBookmark\".\"BookmarkCategoryId\" IS NOT NULL)";
groupByAndHavingSql += " GROUP BY \"ENLocalBookmark\".\"BookmarkCategoryId\"";
orderBySql += " ORDER BY ";
var orderByColumns = [];
orderByColumns.push("\"Count\" DESC ");
orderByColumns.push("\"BookmarkCategoryId\" ASC ");
orderBySql += OS.Entities.webSQLStorageInstance.getOrderByColumnsWithoutDuplicates(orderByColumns);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Bookmarks_MCSModel.LongIntegerBookmarkCategoryIdentifierRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"bookmarkCategoryIdAttr",
"countAttr",
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
require(["UBTConnect_Bookmarks_MCS.aggregates.IDB"], function (UBTConnect_Bookmarks_MCSAggregates_IDB) {
return UBTConnect_Bookmarks_MCSAggregates_IDB.executeGetLocalDynamicBookmarkPills$ClientAction$getLocalBookmarkCategoryIds_ByUserIdAggr(OS.BuiltinFunctions.getUserId(), maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarkCategoryIds_ByUserIdVar.value;
});
};
return getLocalBookmarkCategoryIds_ByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:wgc7TrCPQkS5gtH6FurJyw", callContext.id);
// Execute Action: Get_BookmarkPills_ByBookmarkCategoryIds
return controller.get_BookmarkPills_ByBookmarkCategoryIds$ServerAction(OS.DataConversion.JSConversions.typeConvertRecordList(getLocalBookmarkCategoryIds_ByUserIdVar.value.listOut, new OS.DataTypes.TextList(), function (source, target) {
target = source.bookmarkCategoryIdAttr;
return target;
}), callContext).then(function (value) {
get_BookmarkPills_ByBookmarkCategoryIdsVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:ysbCKj+HoUuji3mR3rLrlg", callContext.id);
// Out_DynamicBookmark_Pills = Get_BookmarkPills_ByBookmarkCategoryIds.Out_BookmarkPills
outVars.value.out_DynamicBookmark_PillsOut = get_BookmarkPills_ByBookmarkCategoryIdsVar.value.out_BookmarkPillsOut;
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:5c93_Xuv5k+aBr7G0BfDsw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:FKgov8gn0UygbE85+2Qi3A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:FKgov8gn0UygbE85+2Qi3A", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.Get_LocalDynamicBookmarkPills$outVars", [{
name: "Out_DynamicBookmark_Pills",
attrName: "out_DynamicBookmark_PillsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillList();
},
complexType: UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillList
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.get_LocalDynamicBookmarkPills$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.get_LocalDynamicBookmarkPills$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_DynamicBookmark_Pills: actionResults.out_DynamicBookmark_PillsOut
};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$Get_LocalDynamicBookmarkYears", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$IntegerRecordList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.get_LocalDynamicBookmarkYears$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getLocalBookmarksByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Bookmarks_MCSModel.IntegerRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.Get_LocalDynamicBookmarkYears$outVars"))());
varBag.callContext = callContext;
varBag.getLocalBookmarksByUserIdVar = getLocalBookmarksByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:dKhCi+6g2US4CLssS+YSNw:/ClientActionFlows.dKhCi+6g2US4CLssS+YSNw:qNbC+Q0Pyu_91nocgJXAkw", "UBTConnect_Bookmarks_MCS", "Get_LocalDynamicBookmarkYears", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:w+M14R6dIkeajYV99Dg_ug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:kmQMjXkq5kOb3hHVIWBU9w", callContext.id);
// Aggregate: GetLocalBookmarksByUserId
var getLocalBookmarksByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Bookmarks_MCSModel.IntegerRecordList;
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
selectSql += "(CAST(Strftime('%Y', \"ENLocalBookmark\".\"CreatedAtDateUtc\") AS INTEGER)) \"GroupByYear\"";
} else {
selectSql += "(CAST(Strftime('%Y', \"ENLocalBookmark\".\"CreatedAtDateUtc\") AS INTEGER)) \"GroupByYear\"";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hcr_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
groupByAndHavingSql += " GROUP BY (CAST(Strftime('%Y', \"ENLocalBookmark\".\"CreatedAtDateUtc\") AS INTEGER))";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Bookmarks_MCSModel.IntegerRecordList, function (rec, r) {
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
require(["UBTConnect_Bookmarks_MCS.aggregates.IDB"], function (UBTConnect_Bookmarks_MCSAggregates_IDB) {
return UBTConnect_Bookmarks_MCSAggregates_IDB.executeGetLocalDynamicBookmarkYears$ClientAction$getLocalBookmarksByUserIdAggr(OS.BuiltinFunctions.getUserId(), maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarksByUserIdVar.value;
});
};
return getLocalBookmarksByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:nl3I_U45aUqMHfrgcg7AVA", callContext.id);
// Execute Action: ListAppendAllYears
OS.SystemActions.listAppendAll(outVars.value.yearsOut, OS.DataConversion.JSConversions.typeConvertRecordList(getLocalBookmarksByUserIdVar.value.listOut, new OS.DataTypes.TextList(), function (source, target) {
target = (source.groupByYearAttr).toString();
return target;
}), callContext);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:62tBdfJgekC9_Fqaw1kViQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:dKhCi+6g2US4CLssS+YSNw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:dKhCi+6g2US4CLssS+YSNw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.Get_LocalDynamicBookmarkYears$outVars", [{
name: "Years",
attrName: "yearsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.get_LocalDynamicBookmarkYears$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.get_LocalDynamicBookmarkYears$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Years: actionResults.yearsOut
};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$GetBookmarkCategoryLabel", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.getBookmarkCategoryLabel$Action = function (in_BookmarkCategoryIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.GetBookmarkCategoryLabel$vars"))());
vars.value.in_BookmarkCategoryIdInLocal = in_BookmarkCategoryIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.GetBookmarkCategoryLabel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:rJHbTDd1wkW8AwmKo05zyw:/ClientActionFlows.rJHbTDd1wkW8AwmKo05zyw:JSSKQlVfeD5JOp0nBdMs4A", "UBTConnect_Bookmarks_MCS", "GetBookmarkCategoryLabel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:vNb5H85rVUCinmqo3+ybOg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:_tZ2Ie4dzEWG6OROAyITDw", callContext.id) && (vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.assembleEvent))) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:ILhTjtOFrEOvFxsfeLAYgg", callContext.id);
// Out_Label = "Assemble"
outVars.value.out_LabelOut = "Assemble";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:Ckyhw6ljCkqd_IsdqlGaKQ", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.feedItem)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:7X3Poc3MkE+6_ilBOZifrA", callContext.id);
// Out_Label = "Feed"
outVars.value.out_LabelOut = "Feed";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:QysA5zSWkUmQYYK1uUR2Zg", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.household)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:3cKU+5DyKEma9FYL0mhILA", callContext.id);
// Out_Label = "Households"
outVars.value.out_LabelOut = "Households";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:kWY3bK9wOEq6f3udRmrcVQ", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.interchange)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:GysMJU0YIE+ohM48SRT0YA", callContext.id);
// Out_Label = "Interchange"
outVars.value.out_LabelOut = "Interchange";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:nECCzefh7EufJoHptpDoYw", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.lDMEvent)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:95JipFrPB0CBJ3HdTYBMBg", callContext.id);
// Out_Label = "LDM"
outVars.value.out_LabelOut = "LDM";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:jPs3SfsaxkGs_bm2FSTBjA", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.locality)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:_L1tGTHYBUCI2bgapCdaEg", callContext.id);
// Out_Label = "Localities"
outVars.value.out_LabelOut = "Localities";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:Y++LWBo0PUGawXnfiOMugw", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.localityContact)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:rUp_Q6qIwkGv_6jwgUXQIw", callContext.id);
// Out_Label = "Locality Contacts"
outVars.value.out_LabelOut = "Locality Contacts";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:kCK_HGchOkS7AriD0YRMCA", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.member)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:D3m2iimBQ0Wle6BkrPb5uQ", callContext.id);
// Out_Label = "Members"
outVars.value.out_LabelOut = "Members";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:K5L4O0zjkUqo6KH3tn6MZw", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.oneSchoolGlobal2)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:wnggfqOqakyLeT2zfDM4hw", callContext.id);
// Out_Label = ""
outVars.value.out_LabelOut = "";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:a3IDgJZOuk6Hv4I4w3tGBw", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.orbitEvent)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:avFiIEAvoU2PEC0Treg++g", callContext.id);
// Out_Label = "Orbit"
outVars.value.out_LabelOut = "Orbit";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:RIJobbrQx06GemRpeTECKg", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.personalEvent)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:Iihb2I64ykKZ0rTVhAppHQ", callContext.id);
// Out_Label = "Personal"
outVars.value.out_LabelOut = "Personal";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:tN0YX3TZYkiD40rJ1sTmUA", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.supperMeeting)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:VzJ1epse4kObY_18RkvHlQ", callContext.id);
// Out_Label = "Supper Mettings"
outVars.value.out_LabelOut = "Supper Mettings";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:jSfEWQXExECMpOLMtbvw_g", callContext.id);
} else {
if((vars.value.in_BookmarkCategoryIdInLocal === UBTConnect_Bookmarks_MCSModel.staticEntities.bookmarkCategory.update)) {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:a6JgIUmSfUyzdVmij9vkgg", callContext.id);
// Out_Label = "Updates"
outVars.value.out_LabelOut = "Updates";
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:GPg1S4F4ZU21W9DYmeVdNg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:cfYhVhEMIECT5iY2fiqNyg", callContext.id);
}

}

}

}

}

}

}

}

}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:rJHbTDd1wkW8AwmKo05zyw", callContext.id);
}

};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.GetBookmarkCategoryLabel$vars", [{
name: "In_BookmarkCategoryId",
attrName: "in_BookmarkCategoryIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.GetBookmarkCategoryLabel$outVars", [{
name: "Out_Label",
attrName: "out_LabelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.getBookmarkCategoryLabel$Action = function (in_BookmarkCategoryIdIn) {
in_BookmarkCategoryIdIn = (in_BookmarkCategoryIdIn === undefined) ? "" : in_BookmarkCategoryIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.getBookmarkCategoryLabel$Action.bind(controller, in_BookmarkCategoryIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Label: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_LabelOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByBookmarkId", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecordList"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.getLocalBookmarkByBookmarkId$Action = function (bookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByBookmarkId$vars"))());
vars.value.bookmarkIdInLocal = bookmarkIdIn;
var getLocalBookmarksByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByBookmarkId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarksByUserIdVar = getLocalBookmarksByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:FBJ7lQZ5AEywJkYYpPPj5A:/ClientActionFlows.FBJ7lQZ5AEywJkYYpPPj5A:MQuxnPVNQc+bBi_dn4IGmA", "UBTConnect_Bookmarks_MCS", "GetLocalBookmarkByBookmarkId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:K4qFUdnhmkO4hzjbq7qbmA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:vwGPGCjLvEyykqgK1fH+zA", callContext.id);
// Aggregate: GetLocalBookmarksByUserId
var getLocalBookmarksByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qploBookmarkId = vars.value.bookmarkIdInLocal;
var qpinUserId = OS.BuiltinFunctions.getUserId();

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"BookmarkCategoryId\" o3, \"ENLocalBookmark\".\"ItemId\" o4, \"ENLocalBookmark\".\"CreatedAtDateUtc\" o5";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"BookmarkCategoryId\" o3, \"ENLocalBookmark\".\"ItemId\" o4, \"ENLocalBookmark\".\"CreatedAtDateUtc\" o5";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hcr_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalBookmark\".\"BookmarkId\" = CAST(:qploBookmarkId AS INTEGER))";
argsList.add("qploBookmarkId", /*LONGINTEGER*/ 4, qploBookmarkId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localBookmarkAttr",
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
require(["UBTConnect_Bookmarks_MCS.aggregates.IDB"], function (UBTConnect_Bookmarks_MCSAggregates_IDB) {
return UBTConnect_Bookmarks_MCSAggregates_IDB.executeGetLocalBookmarkByBookmarkId$ClientAction$getLocalBookmarksByUserIdAggr(vars.value.bookmarkIdInLocal, OS.BuiltinFunctions.getUserId(), maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarksByUserIdVar.value;
});
};
return getLocalBookmarksByUserIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:88OLtLzS5EeccLFIKwATAA", callContext.id);
// LocalBookmark = GetLocalBookmarksByUserId.List.Current.LocalBookmark
outVars.value.localBookmarkOut = getLocalBookmarksByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).localBookmarkAttr;
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:eEkLkkjmp0GlvKOMOaus_Q", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:FBJ7lQZ5AEywJkYYpPPj5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:FBJ7lQZ5AEywJkYYpPPj5A", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByBookmarkId$vars", [{
name: "BookmarkId",
attrName: "bookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByBookmarkId$outVars", [{
name: "LocalBookmark",
attrName: "localBookmarkOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec();
},
complexType: UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.getLocalBookmarkByBookmarkId$Action = function (bookmarkIdIn) {
bookmarkIdIn = (bookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : bookmarkIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.getLocalBookmarkByBookmarkId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalBookmark: actionResults.localBookmarkOut
};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByObjectId", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecordList"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.getLocalBookmarkByObjectId$Action = function (itemIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByObjectId$vars"))());
vars.value.itemIdInLocal = itemIdIn;
var getLocalBookmarksByObjectIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByObjectId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarksByObjectIdVar = getLocalBookmarksByObjectIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:lqTee2pdOEWJYmXUw5UQPA:/ClientActionFlows.lqTee2pdOEWJYmXUw5UQPA:j22XsmVYTAXX3chz5FDp7g", "UBTConnect_Bookmarks_MCS", "GetLocalBookmarkByObjectId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:qii39VcGME+rNiSGPOjWeQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:n+Gdk4bo3kWCp5GV8yPJyQ", callContext.id);
// Aggregate: GetLocalBookmarksByObjectId
var getLocalBookmarksByObjectIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstItemId = vars.value.itemIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"BookmarkCategoryId\" o3, \"ENLocalBookmark\".\"ItemId\" o4, \"ENLocalBookmark\".\"CreatedAtDateUtc\" o5";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"BookmarkCategoryId\" o3, \"ENLocalBookmark\".\"ItemId\" o4, \"ENLocalBookmark\".\"CreatedAtDateUtc\" o5";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hcr_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE (\"ENLocalBookmark\".\"ItemId\" = :qpstItemId) AND ";
argsList.add("qpstItemId", /*TEXT*/ 0, qpstItemId);
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localBookmarkAttr",
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
require(["UBTConnect_Bookmarks_MCS.aggregates.IDB"], function (UBTConnect_Bookmarks_MCSAggregates_IDB) {
return UBTConnect_Bookmarks_MCSAggregates_IDB.executeGetLocalBookmarkByObjectId$ClientAction$getLocalBookmarksByObjectIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.itemIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarksByObjectIdVar.value;
});
};
return getLocalBookmarksByObjectIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:fTEgjKuPJESjnRct0hhOMw", callContext.id);
// LocalBookmark = GetLocalBookmarksByObjectId.List.Current.LocalBookmark
outVars.value.localBookmarkOut = getLocalBookmarksByObjectIdVar.value.listOut.getCurrent(callContext.iterationContext).localBookmarkAttr;
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:5EgMx_8RpEGYgs6IGEWWzA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:lqTee2pdOEWJYmXUw5UQPA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:lqTee2pdOEWJYmXUw5UQPA", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByObjectId$vars", [{
name: "ItemId",
attrName: "itemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.GetLocalBookmarkByObjectId$outVars", [{
name: "LocalBookmark",
attrName: "localBookmarkOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec();
},
complexType: UBTConnect_Bookmarks_MCSModel.LocalBookmarkRec
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.getLocalBookmarkByObjectId$Action = function (itemIdIn) {
itemIdIn = (itemIdIn === undefined) ? "" : itemIdIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.getLocalBookmarkByObjectId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(itemIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalBookmark: actionResults.localBookmarkOut
};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$RemoveBookmarkFromCache", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.removeBookmarkFromCache$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:kfX0nYSPXUqLDnkXE+kl0g:/ClientActionFlows.kfX0nYSPXUqLDnkXE+kl0g:f9o5Wjuzneod5C6zdv7NQw", "UBTConnect_Bookmarks_MCS", "RemoveBookmarkFromCache", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:nIwZljDf1kurOSzMaL0BJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:baKkycEOpE2dnookmxn+hw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:kfX0nYSPXUqLDnkXE+kl0g", callContext.id);
}

};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.removeBookmarkFromCache$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.removeBookmarkFromCache$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$SynchBookmarksC2", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.entities", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRecordList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnect_Bookmarks_MCSEntities) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.synchBookmarksC2$Action = function (in_UpdateBookmarksIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS.SynchBookmarksC2$vars"))());
vars.value.in_UpdateBookmarksInLocal = in_UpdateBookmarksIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("eIe57fGQl06d7_wNN6doow:T3VqpmXjmkeEBvEv5P4sxA:/ClientActionFlows.T3VqpmXjmkeEBvEv5P4sxA:c54zRmb+q0IiedH_zLvXKA", "UBTConnect_Bookmarks_MCS", "SynchBookmarksC2", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:a30HO9gCN0mFKze5aZPHjA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:DhPvWGQhAE2EMu68M2Q9kQ", callContext.id);
// Execute Action: DeleteAllLocalBookmark
return UBTConnect_Bookmarks_MCSModel.entities.LocalBookmark.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:O+ILTm60OUGNH5voTtK7xw", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalBookmark
return UBTConnect_Bookmarks_MCSModel.entities.LocalBookmark.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.in_UpdateBookmarksInLocal, new UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecordList(), function (source, target) {
target = UBTConnect_Bookmarks_MCSModel.LocalBookmarkRecord.fromStructure(source);
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("eIe57fGQl06d7_wNN6doow:wBiu7af6_0yhqnAfImRXPA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:T3VqpmXjmkeEBvEv5P4sxA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("eIe57fGQl06d7_wNN6doow:T3VqpmXjmkeEBvEv5P4sxA", callContext.id);
throw ex;

});
};
var controller = UBTConnect_Bookmarks_MCSController.default;
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS.SynchBookmarksC2$vars", [{
name: "In_UpdateBookmarks",
attrName: "in_UpdateBookmarksInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_Bookmarks_MCSModel.LocalBookmarkList();
},
complexType: UBTConnect_Bookmarks_MCSModel.LocalBookmarkList
}]);
UBTConnect_Bookmarks_MCSController.default.clientActionProxies.synchBookmarksC2$Action = function (in_UpdateBookmarksIn) {
in_UpdateBookmarksIn = (in_UpdateBookmarksIn === undefined) ? new UBTConnect_Bookmarks_MCSModel.LocalBookmarkList() : in_UpdateBookmarksIn;
return controller.executeActionInsideJSNode(UBTConnect_Bookmarks_MCSController.default.synchBookmarksC2$Action.bind(controller, in_UpdateBookmarksIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Bookmarks_MCS.controller$ServerAction.Get_BookmarkPills_ByBookmarkCategoryIds", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect_Bookmarks_MCS.model$DynamicBookmark_PillList"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController) {
var OS = OutSystems.Internal;
UBTConnect_Bookmarks_MCSController.default.get_BookmarkPills_ByBookmarkCategoryIds$ServerAction = function (in_BookmarkCategoryIdsIn, callContext) {
var controller = this.controller;
var inputs = {
In_BookmarkCategoryIds: OS.DataConversion.ServerDataConverter.to(in_BookmarkCategoryIdsIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("Get_BookmarkPills_ByBookmarkCategoryIds", "screenservices/UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds", "Dks837PNTa5PLvFtX3THEg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Bookmarks_MCS$ActionGet_BookmarkPills_ByBookmarkCategoryIds"))();
executeServerActionResult.out_BookmarkPillsOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_BookmarkPills, UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillList);
return executeServerActionResult;
});
};
UBTConnect_Bookmarks_MCSController.default.constructor.registerVariableGroupType("UBTConnect_Bookmarks_MCS$ActionGet_BookmarkPills_ByBookmarkCategoryIds", [{
name: "Out_BookmarkPills",
attrName: "out_BookmarkPillsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillList();
},
complexType: UBTConnect_Bookmarks_MCSModel.DynamicBookmark_PillList
}]);
});
define("UBTConnect_Bookmarks_MCS.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller$debugger"], function (exports, OutSystems, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCS_Controller_debugger) {
var OS = OutSystems.Internal;
var UBTConnect_Bookmarks_MCSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBTConnect_Bookmarks_MCSController.default.defaultTimeout;
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
UBTConnect_Bookmarks_MCSController.default = new Controller(null, "UBTConnect_Bookmarks_MCS");
});
define("UBTConnect_Bookmarks_MCS.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"g2mBBokdoEqE7ipNb3H4VQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BookmarkCategoryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_jjelpP_80Cn8ABoELUxoQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_LabelOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kWFYSzBf5Ey5ZX1DP4GZqw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IC_yHjM+YUyH3ZoY4C71hg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BookmarkCategoryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xfi2utlAtkeYWqhBSlJ+4g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"IOAKb8WwBU2v12xVtbYqjg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateCreatedUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"6RVICJUqVUSZIFZ3y15NHA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localBookmarkIdOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"o4UhUHIGcEm5OGwZrDdX2Q": {
getter: function (varBag, idService) {
return varBag.createLocalBookmarkVar.value;
}
},
"N0wvyoiwSkih+NqDW_t+dA": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByUserIdVar.value;
}
},
"FkV5plCNxEq4WBBz7xDrRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.itemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ycAEU6u9kkSW5_envOV+zg": {
getter: function (varBag, idService) {
return varBag.outVars.value.localBookmarkOut;
}
},
"n+Gdk4bo3kWCp5GV8yPJyQ": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByObjectIdVar.value;
}
},
"Hyvekz4wjkOkR6reHLAikQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.yearsOut;
}
},
"kmQMjXkq5kOb3hHVIWBU9w": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByUserIdVar.value;
}
},
"_uP2cHmPT02_9ZuAwyM3sg": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"2QNrJlweak2_e+hKgBf1XQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.localBookmarkOut;
}
},
"vwGPGCjLvEyykqgK1fH+zA": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByUserIdVar.value;
}
},
"Xh891jkb00+5579VPDUvYA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UpdateBookmarksInLocal;
}
},
"AGhHLPwX5EujjMLsRH6LZw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_DynamicBookmark_PillsOut;
}
},
"wgc7TrCPQkS5gtH6FurJyw": {
getter: function (varBag, idService) {
return varBag.get_BookmarkPills_ByBookmarkCategoryIdsVar.value;
}
},
"mnonKyNBl0+fs2aGXQXkjA": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarkCategoryIds_ByUserIdVar.value;
}
},
"csUGmH_JS02160Ayf2PHuw": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"qLpiKprtIkqOZJvOD9uFpw": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarkByBookmarkIdVar.value;
}
},
"cFU0Htdo+kaX5f1vnRbJgw": {
getter: function (varBag, idService) {
return varBag.vars.value.localBookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
