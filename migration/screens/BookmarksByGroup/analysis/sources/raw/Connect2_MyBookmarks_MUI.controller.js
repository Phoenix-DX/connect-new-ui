define("Connect2_MyBookmarks_MUI.controller$GetBookmarkById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "UBTConnect_Utils.controller", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.controller$ServerAction.GetBookmarkById", "UBTConnect_Utils.controller$GetHasBookmarNote", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "Connect2_MyBookmarks_MUI.controller$ServerAction.New_GetBookmarkById"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel, UBTConnect_UtilsController) {
var OS = OutSystems.Internal;
Connect2_MyBookmarks_MUIController.default.getBookmarkById$Action = function (in_BookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.GetBookmarkById$vars"))());
vars.value.in_BookmarkIdInLocal = in_BookmarkIdIn;
var getBookmarkByIdVar = new OS.DataTypes.VariableHolder();
var new_GetBookmarkByIdVar = new OS.DataTypes.VariableHolder();
var getHasBookmarNoteVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.GetBookmarkById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getBookmarkByIdVar = getBookmarkByIdVar;
varBag.new_GetBookmarkByIdVar = new_GetBookmarkByIdVar;
varBag.getHasBookmarNoteVar = getHasBookmarNoteVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:74FBxYAAA02OdybXRrc84Q:/ClientActionFlows.74FBxYAAA02OdybXRrc84Q:LQ5eQvBzIF40jlNMIgVG9A", "Connect2_MyBookmarks_MUI", "GetBookmarkById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ocyJNOTszUCDWItzTe1rFg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:2nQBZBt4fk2aYFYhKi5q_A", callContext.id);
// Execute Action: GetHasBookmarNote
getHasBookmarNoteVar.value = UBTConnect_UtilsController.default.getHasBookmarNote$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NVFFXrA59Uia7xnZv2RhbA", callContext.id) && getHasBookmarNoteVar.value.hasBookmarkNoteAccessOut)) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:b4Uao_mYx0ieNWqbjS4NEA", callContext.id);
// Execute Action: New_GetBookmarkById
return controller.new_GetBookmarkById$ServerAction(vars.value.in_BookmarkIdInLocal, callContext).then(function (value) {
new_GetBookmarkByIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:eZpUJUPYPEq+MO6LVuO3rg", callContext.id);
// Out_BookmarkItem = New_GetBookmarkById.GetBookmarkByIdResponse
outVars.value.out_BookmarkItemOut = new_GetBookmarkByIdVar.value.getBookmarkByIdResponseOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:eZpUJUPYPEq+MO6LVuO3rg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsBookmarkFound = New_GetBookmarkById.IsBookmarkFound
outVars.value.isBookmarkFoundOut = new_GetBookmarkByIdVar.value.isBookmarkFoundOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:08Sbi0TyikiurxTS8+AF8w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:4lt0SXmSv0GBEeSH57urlA", callContext.id);
// Execute Action: GetBookmarkById
return controller.getBookmarkById$ServerAction(vars.value.in_BookmarkIdInLocal, callContext).then(function (value) {
getBookmarkByIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:i4HXBsXFbk6cybjUD5j_dQ", callContext.id);
// Out_BookmarkItem = GetBookmarkById.GetBookmarkByIdResponse
outVars.value.out_BookmarkItemOut = getBookmarkByIdVar.value.getBookmarkByIdResponseOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:i4HXBsXFbk6cybjUD5j_dQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsBookmarkFound = GetBookmarkById.IsBookmarkFound
outVars.value.isBookmarkFoundOut = getBookmarkByIdVar.value.isBookmarkFoundOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:g76FKCXgxkWVFeoeeP6U6A", callContext.id);
});
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:74FBxYAAA02OdybXRrc84Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:74FBxYAAA02OdybXRrc84Q", callContext.id);
throw ex;

});
};
var controller = Connect2_MyBookmarks_MUIController.default;
Connect2_MyBookmarks_MUIController.default.constructor.registerVariableGroupType("Connect2_MyBookmarks_MUI.GetBookmarkById$vars", [{
name: "In_BookmarkId",
attrName: "in_BookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_MyBookmarks_MUIController.default.constructor.registerVariableGroupType("Connect2_MyBookmarks_MUI.GetBookmarkById$outVars", [{
name: "Out_BookmarkItem",
attrName: "out_BookmarkItemOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_MyBookmarks_ISModel.BookmarkItemRec();
},
complexType: Connect2_MyBookmarks_ISModel.BookmarkItemRec
}, {
name: "IsBookmarkFound",
attrName: "isBookmarkFoundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_MyBookmarks_MUIController.default.clientActionProxies.getBookmarkById$Action = function (in_BookmarkIdIn) {
in_BookmarkIdIn = (in_BookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_BookmarkIdIn;
return controller.executeActionInsideJSNode(Connect2_MyBookmarks_MUIController.default.getBookmarkById$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_BookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_BookmarkItem: actionResults.out_BookmarkItemOut,
IsBookmarkFound: OS.DataConversion.JSNodeParamConverter.to(actionResults.isBookmarkFoundOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_MyBookmarks_MUI.controller$SendBookmarkedFeedbackMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController) {
var OS = OutSystems.Internal;
Connect2_MyBookmarks_MUIController.default.sendBookmarkedFeedbackMessage$Action = function (isCreateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.SendBookmarkedFeedbackMessage$vars"))());
vars.value.isCreateInLocal = isCreateIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:vxkwvC1qe06mfiT6_DebzA:/ClientActionFlows.vxkwvC1qe06mfiT6_DebzA:DUaPvjIa5AbmKdRIQ6q6Og", "Connect2_MyBookmarks_MUI", "SendBookmarkedFeedbackMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:DyOlnBMlP0uzA70rP_TyZQ", callContext.id);
// Bookmark Feedback
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:mrPmSiHa1Uy_mpB3q2XBQg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(((vars.value.isCreateInLocal) ? ("Added to your Bookmarks") : ("Removed from your Bookmarks")), /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:gsZYOcJr+067xuiEd21vqg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:vxkwvC1qe06mfiT6_DebzA", callContext.id);
}

};
var controller = Connect2_MyBookmarks_MUIController.default;
Connect2_MyBookmarks_MUIController.default.constructor.registerVariableGroupType("Connect2_MyBookmarks_MUI.SendBookmarkedFeedbackMessage$vars", [{
name: "IsCreate",
attrName: "isCreateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_MyBookmarks_MUIController.default.clientActionProxies.sendBookmarkedFeedbackMessage$Action = function (isCreateIn) {
isCreateIn = (isCreateIn === undefined) ? false : isCreateIn;
return controller.executeActionInsideJSNode(Connect2_MyBookmarks_MUIController.default.sendBookmarkedFeedbackMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isCreateIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController) {
var OS = OutSystems.Internal;
Connect2_MyBookmarks_MUIController.default.sendBookmarkedHiddenFeedbackMessage$Action = function (objectTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.SendBookmarkedHiddenFeedbackMessage$vars"))());
vars.value.objectTypeInLocal = objectTypeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:ObP1bDmIBkm637uQxDXNmQ:/ClientActionFlows.ObP1bDmIBkm637uQxDXNmQ:OxEstB1f0Bpyt6Ke7BnBkA", "Connect2_MyBookmarks_MUI", "SendBookmarkedHiddenFeedbackMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dBg0xJHDRU6WsVW3OQAl+A", callContext.id);
// Bookmark Hidden Feedback
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:oa51DkDdDkKhHk3YhRqWqQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage((("This" + (((vars.value.objectTypeInLocal === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.contact)) ? (" household ") : ((((vars.value.objectTypeInLocal === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.locality)) ? (" locality ") : ((((vars.value.objectTypeInLocal === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.subdivision)) ? (" Supper Meeting ") : (((((vars.value.objectTypeInLocal === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo) || (vars.value.objectTypeInLocal === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal))) ? (" entity ") : (" "))))))))) + "is no longer available."), /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:BrmiyJdvokyeQYjTsUquvQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:ObP1bDmIBkm637uQxDXNmQ", callContext.id);
}

};
var controller = Connect2_MyBookmarks_MUIController.default;
Connect2_MyBookmarks_MUIController.default.constructor.registerVariableGroupType("Connect2_MyBookmarks_MUI.SendBookmarkedHiddenFeedbackMessage$vars", [{
name: "ObjectType",
attrName: "objectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_MyBookmarks_MUIController.default.clientActionProxies.sendBookmarkedHiddenFeedbackMessage$Action = function (objectTypeIn) {
objectTypeIn = (objectTypeIn === undefined) ? "" : objectTypeIn;
return controller.executeActionInsideJSNode(Connect2_MyBookmarks_MUIController.default.sendBookmarkedHiddenFeedbackMessage$Action.bind(controller, objectTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_MyBookmarks_MUI.controller$ServerAction.GetBookmarkById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
Connect2_MyBookmarks_MUIController.default.getBookmarkById$ServerAction = function (bookmarkIdIn, callContext) {
var controller = this.controller;
var inputs = {
BookmarkId: OS.DataConversion.ServerDataConverter.to(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("GetBookmarkById", "screenservices/Connect2_MyBookmarks_MUI/ActionGetBookmarkById", "tn8UYYran4tzhS7mX+ei1w", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI$rssespaceconnect2_mybookmarks_bl_ActionGetBookmarkById"))();
executeServerActionResult.getBookmarkByIdResponseOut = OS.DataConversion.ServerDataConverter.from(outputs.GetBookmarkByIdResponse, Connect2_MyBookmarks_ISModel.BookmarkItemRec);
executeServerActionResult.isBookmarkFoundOut = OS.DataConversion.ServerDataConverter.from(outputs.IsBookmarkFound, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Connect2_MyBookmarks_MUIController.default.constructor.registerVariableGroupType("Connect2_MyBookmarks_MUI$rssespaceconnect2_mybookmarks_bl_ActionGetBookmarkById", [{
name: "GetBookmarkByIdResponse",
attrName: "getBookmarkByIdResponseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_MyBookmarks_ISModel.BookmarkItemRec();
},
complexType: Connect2_MyBookmarks_ISModel.BookmarkItemRec
}, {
name: "IsBookmarkFound",
attrName: "isBookmarkFoundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("Connect2_MyBookmarks_MUI.controller$ServerAction.New_GetBookmarkById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel) {
var OS = OutSystems.Internal;
Connect2_MyBookmarks_MUIController.default.new_GetBookmarkById$ServerAction = function (bookmarkIdIn, callContext) {
var controller = this.controller;
var inputs = {
BookmarkId: OS.DataConversion.ServerDataConverter.to(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("New_GetBookmarkById", "screenservices/Connect2_MyBookmarks_MUI/ActionNew_GetBookmarkById", "1b3GaI4xublAiZGO1oxD2A", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI$rssespaceconnect2_mybookmarks_bl_ActionNew_GetBookmarkById"))();
executeServerActionResult.getBookmarkByIdResponseOut = OS.DataConversion.ServerDataConverter.from(outputs.GetBookmarkByIdResponse, Connect2_MyBookmarks_ISModel.BookmarkItemRec);
executeServerActionResult.isBookmarkFoundOut = OS.DataConversion.ServerDataConverter.from(outputs.IsBookmarkFound, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Connect2_MyBookmarks_MUIController.default.constructor.registerVariableGroupType("Connect2_MyBookmarks_MUI$rssespaceconnect2_mybookmarks_bl_ActionNew_GetBookmarkById", [{
name: "GetBookmarkByIdResponse",
attrName: "getBookmarkByIdResponseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_MyBookmarks_ISModel.BookmarkItemRec();
},
complexType: Connect2_MyBookmarks_ISModel.BookmarkItemRec
}, {
name: "IsBookmarkFound",
attrName: "isBookmarkFoundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("Connect2_MyBookmarks_MUI.controller", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller$debugger"], function (exports, OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUI_Controller_debugger) {
var OS = OutSystems.Internal;
var Connect2_MyBookmarks_MUIController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Connect2_MyBookmarks_MUIController.default.defaultTimeout;
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
Connect2_MyBookmarks_MUIController.default = new Controller(null, "Connect2_MyBookmarks_MUI");
});
define("Connect2_MyBookmarks_MUI.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"+0iZPJcT7kmrsJ1Fyh1e4A": {
getter: function (varBag, idService) {
return varBag.vars.value.objectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u8QEem8scUK1oC2RYbYCCg": {
getter: function (varBag, idService) {
return varBag.vars.value.isCreateInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"shIF89ucVEWneI7iSu8VHw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"+j4CP7zzwU26gfgAqIoyAw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_BookmarkItemOut;
}
},
"PW4jVFMBoEmvATkzKYp5Tg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isBookmarkFoundOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4lt0SXmSv0GBEeSH57urlA": {
getter: function (varBag, idService) {
return varBag.getBookmarkByIdVar.value;
}
},
"b4Uao_mYx0ieNWqbjS4NEA": {
getter: function (varBag, idService) {
return varBag.new_GetBookmarkByIdVar.value;
}
},
"2nQBZBt4fk2aYFYhKi5q_A": {
getter: function (varBag, idService) {
return varBag.getHasBookmarNoteVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
