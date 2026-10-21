define("Connect2_LegacyShared.controller$AddBookmarkToCache", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.clientVariables", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_LegacyShared.model$BookmarkItemList", "Connect2_LegacyShared.controller$GetCachedMyBookmarks", "Connect2_LegacyShared.controller$PutCachedMyBookmarks"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.addBookmarkToCache$Action = function (in_BookmarkIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AddBookmarkToCache$vars"))());
vars.value.in_BookmarkInLocal = in_BookmarkIn.clone();
var getCachedMyBookmarksVar = new OS.DataTypes.VariableHolder();
var listFilterCacheDuplicatesVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AddBookmarkToCache$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCachedMyBookmarksVar = getCachedMyBookmarksVar;
varBag.listFilterCacheDuplicatesVar = listFilterCacheDuplicatesVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:lbl_+ZROz0GjNoCK08vFWQ:/ClientActionFlows.lbl_+ZROz0GjNoCK08vFWQ:PvHx9oGBpDfMLlIhHe2d4Q", "Connect2_LegacyShared", "AddBookmarkToCache", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5+tC41ZXskOJpysPGwgNlw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2Hy5zi7GFkGORTHiD5zPLQ", callContext.id);
// BookmarkGroup = TextToIdentifier
vars.value.bookmarkGroupVar = OS.BuiltinFunctions.textToIdentifier(vars.value.in_BookmarkInLocal.groupAttr);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yz4Tgb2TH06CbvOR+g7zjg", callContext.id);
// Execute Action: GetCachedMyBookmarks
getCachedMyBookmarksVar.value = Connect2_LegacySharedController.default.getCachedMyBookmarks$Action(vars.value.bookmarkGroupVar, callContext);

// Cache Hit?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+XToO157oUqRhpVsJnmhxA", callContext.id) && getCachedMyBookmarksVar.value.cacheHitOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fMx1vZP+7kOEfxQvt12fSQ", callContext.id);
// Execute Action: ListFilterCacheDuplicates
listFilterCacheDuplicatesVar.value = OS.SystemActions.listFilter(getCachedMyBookmarksVar.value.bookmarksOut, function (p) {
return ((p.objectIdAttr) !== (vars.value.in_BookmarkInLocal.objectIdAttr));
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Mr0cfW7Vo0mYx2ZSM73nmg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(listFilterCacheDuplicatesVar.value.filteredListOut, vars.value.in_BookmarkInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZS_2VlzNUE6GFqhvFZgU0A", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(listFilterCacheDuplicatesVar.value.filteredListOut, function (p) {
return p.dateCreatedUtcAttr;
}, false, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EdmE3SjYKkemohKbEANk3Q", callContext.id);
// Execute Action: PutCachedMyBookmarks
Connect2_LegacySharedController.default.putCachedMyBookmarks$Action(vars.value.bookmarkGroupVar, listFilterCacheDuplicatesVar.value.filteredListOut, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:POuYtig5vk271h34c+6JvQ", callContext.id);
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+71GBRDgL0Wc6N5bG+_zQQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EV16BPaLO0G2oZEb2PDNMA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lbl_+ZROz0GjNoCK08vFWQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AddBookmarkToCache$vars", [{
name: "In_Bookmark",
attrName: "in_BookmarkInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_MyBookmarks_ISModel.BookmarkItemRec();
},
complexType: Connect2_MyBookmarks_ISModel.BookmarkItemRec
}, {
name: "BookmarkGroup",
attrName: "bookmarkGroupVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AddBookmarkToCache$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.addBookmarkToCache$Action = function (in_BookmarkIn) {
in_BookmarkIn = (in_BookmarkIn === undefined) ? new Connect2_MyBookmarks_ISModel.BookmarkItemRec() : in_BookmarkIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.addBookmarkToCache$Action.bind(controller, in_BookmarkIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_LegacyShared.controller$AddFirstSentence", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.addFirstSentence$Action = function (in_UserFirstNameIn, in_MessageContentIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AddFirstSentence$vars"))());
vars.value.in_UserFirstNameInLocal = in_UserFirstNameIn;
vars.value.in_MessageContentInLocal = in_MessageContentIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AddFirstSentence$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:T2TXU49S9UiCTDi6KMk93A:/ClientActionFlows.T2TXU49S9UiCTDi6KMk93A:UEOoYwvknFDXSw737lTq5A", "Connect2_LegacyShared", "AddFirstSentence", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EUOvzAfSyE2BmX26LD5paQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9q8ij5rmRUOFuL4706daYw", callContext.id);
// Out_MessageContent = "Hello " + In_UserFirstName + ", <br> <br>" + In_MessageContent
outVars.value.out_MessageContentOut = ((("Hello " + vars.value.in_UserFirstNameInLocal) + ", <br> <br>") + vars.value.in_MessageContentInLocal);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:j3kaEVgx406+UI8QvmmOlA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:T2TXU49S9UiCTDi6KMk93A", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AddFirstSentence$vars", [{
name: "In_UserFirstName",
attrName: "in_UserFirstNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_MessageContent",
attrName: "in_MessageContentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AddFirstSentence$outVars", [{
name: "Out_MessageContent",
attrName: "out_MessageContentOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.addFirstSentence$Action = function (in_UserFirstNameIn, in_MessageContentIn) {
in_UserFirstNameIn = (in_UserFirstNameIn === undefined) ? "" : in_UserFirstNameIn;
in_MessageContentIn = (in_MessageContentIn === undefined) ? "" : in_MessageContentIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.addFirstSentence$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_UserFirstNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_MessageContentIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_MessageContent: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_MessageContentOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_LegacyShared.controller$AddMetaTag", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$AddMetaTag.AddMetaTagJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_AddMetaTag_AddMetaTagJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.addMetaTag$Action = function (nameIn, contentIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AddMetaTag$vars"))());
vars.value.nameInLocal = nameIn;
vars.value.contentInLocal = contentIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:H+YHxLup9EKHvWy+PK30cA:/ClientActionFlows.H+YHxLup9EKHvWy+PK30cA:GRlQD24a9hVsoZQQPSDF8g", "Connect2_LegacyShared", "AddMetaTag", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ITyM8f4FP0WlUe_MPXoFKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PeSuAKHnY02cRqTIxswKTg", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_AddMetaTag_AddMetaTagJS, "AddMetaTag", "AddMetaTag", {
Content: OS.DataConversion.JSNodeParamConverter.to(vars.value.contentInLocal, OS.DataTypes.DataTypes.Text),
Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XE4dDUOcvkW11RfX+GPihQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:H+YHxLup9EKHvWy+PK30cA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AddMetaTag$vars", [{
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Content",
attrName: "contentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.addMetaTag$Action = function (nameIn, contentIn) {
nameIn = (nameIn === undefined) ? "" : nameIn;
contentIn = (contentIn === undefined) ? "" : contentIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.addMetaTag$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(contentIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$AddMetaTag.AddMetaTagJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var h = document.getElementsByTagName('head')[0];

var definedMeta = document.getElementsByTagName("meta")[$parameters.Name];

if(!definedMeta || definedMeta == "undefined"){
    var m = document.createElement('meta');
    m.name = $parameters.Name;
    m.content = $parameters.Content;
    h.appendChild(m);
}else{
    definedMeta.content = $parameters.Content;
}
};
});

define("Connect2_LegacyShared.controller$AddThemeClassToBody", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$AddThemeClassToBody.AddThemeJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_AddThemeClassToBody_AddThemeJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.addThemeClassToBody$Action = function (themeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AddThemeClassToBody$vars"))());
vars.value.themeInLocal = themeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:+yOHXa0ZnEajRCsMTTRGiw:/ClientActionFlows.+yOHXa0ZnEajRCsMTTRGiw:M1Qe0oiowCpLSYJdO8EsDQ", "Connect2_LegacyShared", "AddThemeClassToBody", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CxpmWnbyxkCQFLaYeHMvkw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0AeVo0HsCECzGghLDa6NFw", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_AddThemeClassToBody_AddThemeJS, "AddTheme", "AddThemeClassToBody", {
ThemeName: OS.DataConversion.JSNodeParamConverter.to(vars.value.themeInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GpmK_p5T8EG+S2qPxSvYvw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:+yOHXa0ZnEajRCsMTTRGiw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AddThemeClassToBody$vars", [{
name: "Theme",
attrName: "themeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.addThemeClassToBody$Action = function (themeIn) {
themeIn = (themeIn === undefined) ? "" : themeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.addThemeClassToBody$Action.bind(controller, themeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$AddThemeClassToBody.AddThemeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.getElementsByTagName('body')[0];
body.classList.add($parameters.ThemeName);
};
});

define("Connect2_LegacyShared.controller$AuditBookmarkSubscriptionEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_LegacyShared.model$TextLongIntegerLongIntegerLongIntegerRecord"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.auditBookmarkSubscriptionEvent$Action = function (householdIdIn, localityIdIn, countryCodeIn, entityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AuditBookmarkSubscriptionEvent$vars"))());
vars.value.householdIdInLocal = householdIdIn;
vars.value.localityIdInLocal = localityIdIn;
vars.value.countryCodeInLocal = countryCodeIn;
vars.value.entityIdInLocal = entityIdIn;
var subscriptionEventSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.subscriptionEventSerializeVar = subscriptionEventSerializeVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:smQv65VNnkmcwDvOFfqd2A:/ClientActionFlows.smQv65VNnkmcwDvOFfqd2A:XfrB4wVoiPeLAF1+9O7E5w", "Connect2_LegacyShared", "AuditBookmarkSubscriptionEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:caz9ZhK7lkC19sStwXsKEQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zd+KjZf66UaqH61ECxoMig", callContext.id);
// SubscriptionEventInfo.LocalityId = LocalityId
vars.value.subscriptionEventInfoVar.localityIdAttr = vars.value.localityIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zd+KjZf66UaqH61ECxoMig", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SubscriptionEventInfo.HouseholdId = HouseholdId
vars.value.subscriptionEventInfoVar.householdIdAttr = vars.value.householdIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zd+KjZf66UaqH61ECxoMig", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SubscriptionEventInfo.CountryCode = CountryCode
vars.value.subscriptionEventInfoVar.countryCodeAttr = vars.value.countryCodeInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zd+KjZf66UaqH61ECxoMig", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// SubscriptionEventInfo.EntityId = EntityId
vars.value.subscriptionEventInfoVar.entityIdAttr = vars.value.entityIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EMlX6D1eMkGxmx7ts6vhdA", callContext.id);
// JSON Serialize: SubscriptionEventSerialize
subscriptionEventSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.subscriptionEventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NV4cHUdJvkGfAIIfKHnUfA", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory.subscriptionRequired, subscriptionEventSerializeVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QCfYvszZOUatjTLb1Ihb2Q", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:smQv65VNnkmcwDvOFfqd2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:smQv65VNnkmcwDvOFfqd2A", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AuditBookmarkSubscriptionEvent$vars", [{
name: "HouseholdId",
attrName: "householdIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CountryCode",
attrName: "countryCodeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EntityId",
attrName: "entityIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "SubscriptionEventInfo",
attrName: "subscriptionEventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.TextLongIntegerLongIntegerLongIntegerRecord();
},
complexType: Connect2_LegacySharedModel.TextLongIntegerLongIntegerLongIntegerRecord
}]);
Connect2_LegacySharedController.default.clientActionProxies.auditBookmarkSubscriptionEvent$Action = function (householdIdIn, localityIdIn, countryCodeIn, entityIdIn) {
householdIdIn = (householdIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : householdIdIn;
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
entityIdIn = (entityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : entityIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.auditBookmarkSubscriptionEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(householdIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(entityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$AuditShareEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_LegacyShared.model$AuditLog_ShareEventInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.auditShareEvent$Action = function (shareIdIn, sharingMemberIdIn, targetUserIdIn, targetAppIn, shareObjectTypeIdIn, objectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AuditShareEvent$vars"))());
vars.value.shareIdInLocal = shareIdIn;
vars.value.sharingMemberIdInLocal = sharingMemberIdIn;
vars.value.targetUserIdInLocal = targetUserIdIn;
vars.value.targetAppInLocal = targetAppIn;
vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
vars.value.objectIdInLocal = objectIdIn;
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:05GC9nMtDkaF+E0lIss70A:/ClientActionFlows.05GC9nMtDkaF+E0lIss70A:iy+YtsXig2DbfisI3+gfyQ", "Connect2_LegacyShared", "AuditShareEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HpUdu3iFtUS045sdgP0CUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// AuditLog_ShareEventInfo
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tyHuHRMr2EaqJc2eP2R7iQ", callContext.id);
// AuditLog_ShareEventInfo.ShareId = ShareId
vars.value.auditLog_ShareEventInfoVar.shareIdAttr = vars.value.shareIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tyHuHRMr2EaqJc2eP2R7iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AuditLog_ShareEventInfo.SharingMemberId = SharingMemberId
vars.value.auditLog_ShareEventInfoVar.sharingMemberIdAttr = vars.value.sharingMemberIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tyHuHRMr2EaqJc2eP2R7iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AuditLog_ShareEventInfo.TargetUserId = TargetUserId
vars.value.auditLog_ShareEventInfoVar.targetUserIdAttr = vars.value.targetUserIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tyHuHRMr2EaqJc2eP2R7iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AuditLog_ShareEventInfo.TargetApp = TargetApp
vars.value.auditLog_ShareEventInfoVar.targetAppAttr = vars.value.targetAppInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tyHuHRMr2EaqJc2eP2R7iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AuditLog_ShareEventInfo.ShareObjectTypeId = ShareObjectTypeId
vars.value.auditLog_ShareEventInfoVar.shareObjectTypeIdAttr = vars.value.shareObjectTypeIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tyHuHRMr2EaqJc2eP2R7iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// AuditLog_ShareEventInfo.ObjectId = ObjectId
vars.value.auditLog_ShareEventInfoVar.objectIdAttr = vars.value.objectIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m+a9_mkdYk+nMSNoCOa1sw", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditLog_ShareEventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uyH6Qkk70k+K8Uvvpmxg5A", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory.shareItem, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_PnjxT_rN0+RV5fTVgifNw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:05GC9nMtDkaF+E0lIss70A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:05GC9nMtDkaF+E0lIss70A", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AuditShareEvent$vars", [{
name: "ShareId",
attrName: "shareIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SharingMemberId",
attrName: "sharingMemberIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TargetUserId",
attrName: "targetUserIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TargetApp",
attrName: "targetAppInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShareObjectTypeId",
attrName: "shareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AuditLog_ShareEventInfo",
attrName: "auditLog_ShareEventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec();
},
complexType: Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.auditShareEvent$Action = function (shareIdIn, sharingMemberIdIn, targetUserIdIn, targetAppIn, shareObjectTypeIdIn, objectIdIn) {
shareIdIn = (shareIdIn === undefined) ? "" : shareIdIn;
sharingMemberIdIn = (sharingMemberIdIn === undefined) ? "" : sharingMemberIdIn;
targetUserIdIn = (targetUserIdIn === undefined) ? "" : targetUserIdIn;
targetAppIn = (targetAppIn === undefined) ? "" : targetAppIn;
shareObjectTypeIdIn = (shareObjectTypeIdIn === undefined) ? "" : shareObjectTypeIdIn;
objectIdIn = (objectIdIn === undefined) ? "" : objectIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.auditShareEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shareIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(sharingMemberIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(targetUserIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(targetAppIn, OS.DataTypes.DataTypes.Text), shareObjectTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$AuditShareViewEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.clientVariables", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_LegacyShared.model$AuditLog_ShareEventInfoRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.auditShareViewEvent$Action = function (shareIdIn, sharingUserIdIn, targetUserIdIn, targetAppIn, shareObjectTypeIdIn, objectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.AuditShareViewEvent$vars"))());
vars.value.shareIdInLocal = shareIdIn;
vars.value.sharingUserIdInLocal = sharingUserIdIn;
vars.value.targetUserIdInLocal = targetUserIdIn;
vars.value.targetAppInLocal = targetAppIn;
vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
vars.value.objectIdInLocal = objectIdIn;
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var eventInfoJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.eventInfoJSONVar = eventInfoJSONVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:RbuVBgEWs0qFaVEh93drng:/ClientActionFlows.RbuVBgEWs0qFaVEh93drng:TpHUjnWgVcAaNDooMj5dTA", "Connect2_LegacyShared", "AuditShareViewEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Zza_JpMfiEagqgweDle_Ow", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mebZX4ACF0uTtiDcIPNakA", callContext.id) && (vars.value.targetUserIdInLocal === ""))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Kv42XG86kEuy9OuWnkbeGw", callContext.id);
// Execute Action: Cache_UserInfo_Get
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kOhoPiKt0Uea9yRL4VY4hw", callContext.id);
// TargetUserId = Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Id
vars.value.targetUserIdInLocal = cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.idAttr;
});
}

}).then(function () {
// AuditLog_ShareEventInfo
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t+Rw+QNs4k+xAXz4xvjD7g", callContext.id);
// AuditLog_ShareEventInfo.ShareId = ShareId
vars.value.auditLog_ShareEventInfoVar.shareIdAttr = vars.value.shareIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t+Rw+QNs4k+xAXz4xvjD7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// AuditLog_ShareEventInfo.SharingMemberId = SharingUserId
vars.value.auditLog_ShareEventInfoVar.sharingMemberIdAttr = vars.value.sharingUserIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t+Rw+QNs4k+xAXz4xvjD7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// AuditLog_ShareEventInfo.TargetUserId = TargetUserId
vars.value.auditLog_ShareEventInfoVar.targetUserIdAttr = vars.value.targetUserIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t+Rw+QNs4k+xAXz4xvjD7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AuditLog_ShareEventInfo.TargetApp = TargetApp
vars.value.auditLog_ShareEventInfoVar.targetAppAttr = vars.value.targetAppInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t+Rw+QNs4k+xAXz4xvjD7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AuditLog_ShareEventInfo.ShareObjectTypeId = ShareObjectTypeId
vars.value.auditLog_ShareEventInfoVar.shareObjectTypeIdAttr = vars.value.shareObjectTypeIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t+Rw+QNs4k+xAXz4xvjD7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// AuditLog_ShareEventInfo.ObjectId = ObjectId
vars.value.auditLog_ShareEventInfoVar.objectIdAttr = vars.value.objectIdInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dPWkPi_phUC5kKJRntH2pQ", callContext.id);
// JSON Serialize: EventInfoJSON
eventInfoJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.auditLog_ShareEventInfoVar, false, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:X6fQqVirs0qfVGz_TszM2A", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory.shareView, eventInfoJSONVar.value.jSONOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UT0zxgyNQEuBl+XWi025NQ", callContext.id);
});
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RbuVBgEWs0qFaVEh93drng", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RbuVBgEWs0qFaVEh93drng", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.AuditShareViewEvent$vars", [{
name: "ShareId",
attrName: "shareIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SharingUserId",
attrName: "sharingUserIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TargetUserId",
attrName: "targetUserIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TargetApp",
attrName: "targetAppInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShareObjectTypeId",
attrName: "shareObjectTypeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AuditLog_ShareEventInfo",
attrName: "auditLog_ShareEventInfoVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec();
},
complexType: Connect2_LegacySharedModel.AuditLog_ShareEventInfoRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.auditShareViewEvent$Action = function (shareIdIn, sharingUserIdIn, targetUserIdIn, targetAppIn, shareObjectTypeIdIn, objectIdIn) {
shareIdIn = (shareIdIn === undefined) ? "" : shareIdIn;
sharingUserIdIn = (sharingUserIdIn === undefined) ? "" : sharingUserIdIn;
targetUserIdIn = (targetUserIdIn === undefined) ? "" : targetUserIdIn;
targetAppIn = (targetAppIn === undefined) ? "" : targetAppIn;
shareObjectTypeIdIn = (shareObjectTypeIdIn === undefined) ? "" : shareObjectTypeIdIn;
objectIdIn = (objectIdIn === undefined) ? "" : objectIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.auditShareViewEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shareIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(sharingUserIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(targetUserIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(targetAppIn, OS.DataTypes.DataTypes.Text), shareObjectTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$BuildAssembleNotificationContent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "PlaceholderLib.controller", "UBTConnect_Utils.model", "MemoryClientCache.model", "UBTConnect_Utils.controller", "Comms_CS.model", "Connect2_LegacyShared.clientVariables", "PlaceholderLib.controller$SetTextPlaceholdersValue", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$PlaceholderLib", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "Comms_CS.model$MessageParameterRec", "Connect2_LegacyShared.referencesHealth$Comms_CS", "Connect2_LegacyShared.model$MessageParameterList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, PlaceholderLibController, UBTConnect_UtilsModel, MemoryClientCacheModel, UBTConnect_UtilsController, Comms_CSModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.buildAssembleNotificationContent$Action = function (listOfMessageParametersIn, originalContentIn, delimiter_PlaceholderIn, delimiter_FunctionIn, delimiter_ParameterIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.BuildAssembleNotificationContent$vars"))());
vars.value.listOfMessageParametersInLocal = listOfMessageParametersIn.clone();
vars.value.originalContentInLocal = originalContentIn;
vars.value.delimiter_PlaceholderInLocal = delimiter_PlaceholderIn;
vars.value.delimiter_FunctionInLocal = delimiter_FunctionIn;
vars.value.delimiter_ParameterInLocal = delimiter_ParameterIn;
var setTextPlaceholdersValueVar = new OS.DataTypes.VariableHolder();
var listIndexOf_TypeVar = new OS.DataTypes.VariableHolder();
var listIndexOf_HostingLocationVar = new OS.DataTypes.VariableHolder();
var listIndexOf_IsVirtualVar = new OS.DataTypes.VariableHolder();
var listIndexOf_SequenceVar = new OS.DataTypes.VariableHolder();
var listIndexOf_StartDateVar = new OS.DataTypes.VariableHolder();
var listIndexOf_RecurrenceVar = new OS.DataTypes.VariableHolder();
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.BuildAssembleNotificationContent$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setTextPlaceholdersValueVar = setTextPlaceholdersValueVar;
varBag.listIndexOf_TypeVar = listIndexOf_TypeVar;
varBag.listIndexOf_HostingLocationVar = listIndexOf_HostingLocationVar;
varBag.listIndexOf_IsVirtualVar = listIndexOf_IsVirtualVar;
varBag.listIndexOf_SequenceVar = listIndexOf_SequenceVar;
varBag.listIndexOf_StartDateVar = listIndexOf_StartDateVar;
varBag.listIndexOf_RecurrenceVar = listIndexOf_RecurrenceVar;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:dWlwpJI4W0ClAXaGLnozjA:/ClientActionFlows.dWlwpJI4W0ClAXaGLnozjA:D7_FndxFQEhbt0mwPcMtHA", "Connect2_LegacyShared", "BuildAssembleNotificationContent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FDjP2TJ6_0aeBKhZ6sbsYA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fqGcg2uqF0CcYVpN8mIEjw", callContext.id) && true)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eVml+UzJ20+zdoYTuLnRdw", callContext.id);
// Execute Action: Cache_UserInfo_Get
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0WVXG7vaJUO1aPH8YLpPGA", callContext.id);
// Execute Action: SetTextPlaceholdersValue
setTextPlaceholdersValueVar.value = PlaceholderLibController.default.setTextPlaceholdersValue$Action(vars.value.originalContentInLocal, vars.value.delimiter_PlaceholderInLocal, vars.value.delimiter_FunctionInLocal, vars.value.delimiter_ParameterInLocal, cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.firstNameAttr, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0JQMtAhzokKQVht9cecQDw", callContext.id);
// Content = SetTextPlaceholdersValue.ProcessedText
outVars.value.contentOut = setTextPlaceholdersValueVar.value.processedTextOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GanLQ4uNbk+Rbt+EDpKkyA", callContext.id);
});
} else {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YHd7RfYkWk6HFe7uVT8jsg", callContext.id) && vars.value.listOfMessageParametersInLocal.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Bchi8N9pMES+3DQ+Z0QeWg", callContext.id);
// Content = OriginalContent
outVars.value.contentOut = vars.value.originalContentInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GanLQ4uNbk+Rbt+EDpKkyA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZYWxRhTzk0SCeO8VOg3uew", callContext.id);
// Execute Action: ListIndexOf_Type
listIndexOf_TypeVar.value = OS.SystemActions.listIndexOf(vars.value.listOfMessageParametersInLocal, function (p) {
return (p.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventType);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5zoig8K+M02_YbrS7m2Asg", callContext.id);
// Execute Action: ListIndexOf_Sequence
listIndexOf_SequenceVar.value = OS.SystemActions.listIndexOf(vars.value.listOfMessageParametersInLocal, function (p) {
return (p.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventAppliesToSequence);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ln40oryK5UeSlJ_LXs85rA", callContext.id);
// Execute Action: ListIndexOf_StartDate
listIndexOf_StartDateVar.value = OS.SystemActions.listIndexOf(vars.value.listOfMessageParametersInLocal, function (p) {
return (p.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventStartDate);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sx6+fbY58U6R9JDnvezV1g", callContext.id);
// Execute Action: ListIndexOf_IsVirtual
listIndexOf_IsVirtualVar.value = OS.SystemActions.listIndexOf(vars.value.listOfMessageParametersInLocal, function (p) {
return (p.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventIsVirtual);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2muFdBBcn0afgEQmeitqkg", callContext.id);
// Execute Action: ListIndexOf_HostingLocation
listIndexOf_HostingLocationVar.value = OS.SystemActions.listIndexOf(vars.value.listOfMessageParametersInLocal, function (p) {
return (p.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventHostingLocation);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZELn1n2b10msLw_6oQgN9g", callContext.id);
// Execute Action: ListIndexOf_Recurrence
listIndexOf_RecurrenceVar.value = OS.SystemActions.listIndexOf(vars.value.listOfMessageParametersInLocal, function (p) {
return (p.parameterNameIdAttr === Connect2_LegacySharedModel.staticEntities.parameterName.assembleEventRecurrenceType);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eN_Cxsg3EEqbqCBwlu57Uw", callContext.id);
// Type = ListOfMessageParameters[ListIndexOf_Type.Position].ParameterValue
vars.value.typeVar = vars.value.listOfMessageParametersInLocal.getItem(listIndexOf_TypeVar.value.positionOut).parameterValueAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eN_Cxsg3EEqbqCBwlu57Uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsEventSequence = If
vars.value.isEventSequenceVar = (((vars.value.listOfMessageParametersInLocal.getItem(listIndexOf_SequenceVar.value.positionOut).parameterValueAttr === "True")) ? (true) : (false));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eN_Cxsg3EEqbqCBwlu57Uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HostingLocation = ListOfMessageParameters[ListIndexOf_HostingLocation.Position].ParameterValue
vars.value.hostingLocationVar = vars.value.listOfMessageParametersInLocal.getItem(listIndexOf_HostingLocationVar.value.positionOut).parameterValueAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eN_Cxsg3EEqbqCBwlu57Uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// StartDate = TextToDateTime
vars.value.startDateVar = OS.BuiltinFunctions.textToDateTime(vars.value.listOfMessageParametersInLocal.getItem(listIndexOf_StartDateVar.value.positionOut).parameterValueAttr);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eN_Cxsg3EEqbqCBwlu57Uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// IsVirtual = If
vars.value.isVirtualVar = (((vars.value.listOfMessageParametersInLocal.getItem(listIndexOf_IsVirtualVar.value.positionOut).parameterValueAttr === "True")) ? (true) : (false));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eN_Cxsg3EEqbqCBwlu57Uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Recurrence = ListOfMessageParameters[ListIndexOf_Recurrence.Position].ParameterValue
vars.value.recurrenceVar = vars.value.listOfMessageParametersInLocal.getItem(listIndexOf_RecurrenceVar.value.positionOut).parameterValueAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EsuMdQ2ktEqus_HBvBXl8w", callContext.id);
// Content = "We are writing to inform you that we must cancel our " + Type + " meeting scheduled " + If + If + If + FormatDateTime + If + If + "<br>" + "We understand the inconvenience this may cause and sincerely apologize for any disruption to your plans." + "<br>" + "Kind Regards," + "<br>" + "Assemble Team."
outVars.value.contentOut = (((((((((((((("We are writing to inform you that we must cancel our " + vars.value.typeVar) + " meeting scheduled ") + ((vars.value.isEventSequenceVar) ? (((" " + OS.BuiltinFunctions.toLower(vars.value.recurrenceVar)) + " ")) : (""))) + ((vars.value.isVirtualVar) ? ("virtually") : (""))) + ((!(vars.value.isEventSequenceVar)) ? (" for ") : (" from "))) + OS.BuiltinFunctions.formatDateTime(vars.value.startDateVar, "d/M/yyyy - h:mm tt")) + ((!(vars.value.isEventSequenceVar)) ? ("") : (" to the following meetings"))) + ((vars.value.isVirtualVar) ? (".") : (((" at " + vars.value.hostingLocationVar) + ".")))) + "<br>") + "We understand the inconvenience this may cause and sincerely apologize for any disruption to your plans.") + "<br>") + "Kind Regards,") + "<br>") + "Assemble Team.");
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Cg_4M4Fax0CBvGrt39cU+A", callContext.id);
}

}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:dWlwpJI4W0ClAXaGLnozjA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:dWlwpJI4W0ClAXaGLnozjA", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.BuildAssembleNotificationContent$vars", [{
name: "ListOfMessageParameters",
attrName: "listOfMessageParametersInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.MessageParameterList();
},
complexType: Connect2_LegacySharedModel.MessageParameterList
}, {
name: "OriginalContent",
attrName: "originalContentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delimiter_Placeholder",
attrName: "delimiter_PlaceholderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delimiter_Function",
attrName: "delimiter_FunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Delimiter_Parameter",
attrName: "delimiter_ParameterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsEventSequence",
attrName: "isEventSequenceVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HostingLocation",
attrName: "hostingLocationVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StartDate",
attrName: "startDateVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "IsVirtual",
attrName: "isVirtualVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Recurrence",
attrName: "recurrenceVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.BuildAssembleNotificationContent$outVars", [{
name: "Content",
attrName: "contentOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.buildAssembleNotificationContent$Action = function (listOfMessageParametersIn, originalContentIn, delimiter_PlaceholderIn, delimiter_FunctionIn, delimiter_ParameterIn) {
listOfMessageParametersIn = (listOfMessageParametersIn === undefined) ? new Connect2_LegacySharedModel.MessageParameterList() : listOfMessageParametersIn;
originalContentIn = (originalContentIn === undefined) ? "" : originalContentIn;
delimiter_PlaceholderIn = (delimiter_PlaceholderIn === undefined) ? "" : delimiter_PlaceholderIn;
delimiter_FunctionIn = (delimiter_FunctionIn === undefined) ? "" : delimiter_FunctionIn;
delimiter_ParameterIn = (delimiter_ParameterIn === undefined) ? "" : delimiter_ParameterIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.buildAssembleNotificationContent$Action.bind(controller, listOfMessageParametersIn, OS.DataConversion.JSNodeParamConverter.from(originalContentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delimiter_PlaceholderIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delimiter_FunctionIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delimiter_ParameterIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Content: OS.DataConversion.JSNodeParamConverter.to(actionResults.contentOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_LegacyShared.controller$BuildMemberContactsCacheKey", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.buildMemberContactsCacheKey$Action = function (memberIdListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.BuildMemberContactsCacheKey$vars"))());
vars.value.memberIdListInLocal = memberIdListIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.BuildMemberContactsCacheKey$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4TLVINQHEUKVbSHzX6fCKA:/ClientActionFlows.4TLVINQHEUKVbSHzX6fCKA:amq67DMJ22gkrWJ_mwek+g", "Connect2_LegacyShared", "BuildMemberContactsCacheKey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PYiv1yiYAkq7FFYs_8WHYA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qVnSkZEUrES0p5lTEQ6Fcg", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(vars.value.memberIdListInLocal, function (p) {
return p;
}, true, callContext);
// Foreach MemberIdList
callContext.iterationContext.registerIterationStart(vars.value.memberIdListInLocal);
try {var memberIdListIterator = callContext.iterationContext.getIterator(vars.value.memberIdListInLocal);
var memberIdListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FhNDJoQbYkK3YReSOKf9lQ", callContext.id) && (memberIdListIndex < vars.value.memberIdListInLocal.length))) {
memberIdListIterator.currentRowNumber = memberIdListIndex;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KRhk0ZyDmEell7gWSH11Wg", callContext.id);
// CacheKey = CacheKey + MemberIdList.Current + If
outVars.value.cacheKeyOut = ((outVars.value.cacheKeyOut + OS.BuiltinFunctions.longIntegerToText(vars.value.memberIdListInLocal.getItem(memberIdListIndex.valueOf()))) + (((vars.value.memberIdListInLocal.getCurrentRowNumber(callContext.iterationContext) < (vars.value.memberIdListInLocal.length - 1))) ? (",") : ("")));
memberIdListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.memberIdListInLocal);
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BfeU5JOq70awUVzcLQGYbQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4TLVINQHEUKVbSHzX6fCKA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.BuildMemberContactsCacheKey$vars", [{
name: "MemberIdList",
attrName: "memberIdListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.LongIntegerList();
},
complexType: OS.DataTypes.LongIntegerList
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.BuildMemberContactsCacheKey$outVars", [{
name: "CacheKey",
attrName: "cacheKeyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.buildMemberContactsCacheKey$Action = function (memberIdListIn) {
memberIdListIn = (memberIdListIn === undefined) ? new OS.DataTypes.LongIntegerList() : memberIdListIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.buildMemberContactsCacheKey$Action.bind(controller, memberIdListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheKey: OS.DataConversion.JSNodeParamConverter.to(actionResults.cacheKeyOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_LegacyShared.controller$CacheLocalApplicationEvents", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecordList", "Connect2_LegacyShared.controller$ServerAction.GetAllApplicationEvents", "Connect2_LegacyShared.controller$CreateOrUpdate_SomeApplicationEvents"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.cacheLocalApplicationEvents$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getAllApplicationEventsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getAllApplicationEventsVar = getAllApplicationEventsVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:nh8pmIoJd0ulJId+jyxMsA:/ClientActionFlows.nh8pmIoJd0ulJId+jyxMsA:zTDREpGcvGtxz3pOumd8UA", "Connect2_LegacyShared", "CacheLocalApplicationEvents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ByjcM9DoyESg64X9cwWJ4g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kI2bnIU3WkatbkIHR3C0SA", callContext.id);
// Execute Action: GetAllApplicationEvents
return controller.getAllApplicationEvents$ServerAction(callContext).then(function (value) {
getAllApplicationEventsVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XWb48LIVgU6RXwYf7z1E9w", callContext.id);
// Execute Action: CreateOrUpdate_SomeApplicationEvents
return Connect2_LegacySharedController.default.createOrUpdate_SomeApplicationEvents$Action(getAllApplicationEventsVar.value.eventListOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PRzHnl6QyUCZhA_uKh2vlw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:nh8pmIoJd0ulJId+jyxMsA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:nh8pmIoJd0ulJId+jyxMsA", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.clientActionProxies.cacheLocalApplicationEvents$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.cacheLocalApplicationEvents$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.controller", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.NativeChromeVersionJS", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.SafariVersionJS", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.ChromeVersionJS", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.ChromeIOSJS", "Connect2_LegacyShared.clientVariables", "CommonPlugin.controller$IsCordovaDefined", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginController, Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_NativeChromeVersionJS, Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_SafariVersionJS, Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_ChromeVersionJS, Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_ChromeIOSJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.checkSupportedBrowserVersion$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$vars"))());
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var nativeChromeVersionJSResult = new OS.DataTypes.VariableHolder();
var safariVersionJSResult = new OS.DataTypes.VariableHolder();
var chromeVersionJSResult = new OS.DataTypes.VariableHolder();
var chromeIOSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.nativeChromeVersionJSResult = nativeChromeVersionJSResult;
varBag.safariVersionJSResult = safariVersionJSResult;
varBag.chromeVersionJSResult = chromeVersionJSResult;
varBag.chromeIOSJSResult = chromeIOSJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:gNgz_S1aAUmnaEvApnbxPw:/ClientActionFlows.gNgz_S1aAUmnaEvApnbxPw:MyCgqyTAa_22Am0VVV4Piw", "Connect2_LegacyShared", "CheckSupportedBrowserVersion", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:a0IWm8bvQkemI8qRg1h1JQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:q4Ee3IxBgUqAmMFY_4dfMA", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XSDNuhkzPkWCx49aKMdhxw", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KwtOAm9yyUu+G2pWLv0UHA", callContext.id);
nativeChromeVersionJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_NativeChromeVersionJS, "NativeChromeVersion", "CheckSupportedBrowserVersion", {
IsChrome: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$nativeChromeVersionJSResult"))();
jsNodeResult.isChromeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsChrome, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zfBRsS_qVU264HVfRFv1cQ", callContext.id);
// IsSupported = notNativeChromeVersion.IsChrome or NativeChromeVersion.Major > ChromeMajor or NativeChromeVersion.Major = ChromeMajor and NativeChromeVersion.Minor >= ChromeMinor
outVars.value.isSupportedOut = ((!(nativeChromeVersionJSResult.value.isChromeOut) || (nativeChromeVersionJSResult.value.majorOut > vars.value.chromeMajorVar)) || ((nativeChromeVersionJSResult.value.majorOut === vars.value.chromeMajorVar) && (nativeChromeVersionJSResult.value.minorOut >= vars.value.chromeMinorVar)));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zfBRsS_qVU264HVfRFv1cQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAndroid = True
outVars.value.isAndroidOut = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hIg1GBG3TEKhC3P8T1M2lw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:agC7dzj1pECl_UhHvIMVsQ", callContext.id);
chromeVersionJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_ChromeVersionJS, "ChromeVersion", "CheckSupportedBrowserVersion", {
IsChrome: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$chromeVersionJSResult"))();
jsNodeResult.isChromeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsChrome, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vab59s_dE0u0V5ScGH+QmQ", callContext.id) && chromeVersionJSResult.value.isChromeOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0biusU80vUue7aPdSr78sw", callContext.id);
// IsSupported = ChromeVersion.Major > ChromeMajor or ChromeVersion.Major = ChromeMajor and ChromeVersion.Minor >= ChromeMinor
outVars.value.isSupportedOut = ((chromeVersionJSResult.value.majorOut > vars.value.chromeMajorVar) || ((chromeVersionJSResult.value.majorOut === vars.value.chromeMajorVar) && (chromeVersionJSResult.value.minorOut >= vars.value.chromeMinorVar)));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0hxjxDmGBE2QV2f1_PLc2A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lIU3bxr2iUO_X4vbPcD+OQ", callContext.id);
safariVersionJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_SafariVersionJS, "SafariVersion", "CheckSupportedBrowserVersion", {
IsSafari: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$safariVersionJSResult"))();
jsNodeResult.isSafariOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSafari, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ywx+sKYRIEa8JiHESCsRzQ", callContext.id) && safariVersionJSResult.value.isSafariOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DL3nSKK06UujiQsCab0EzA", callContext.id);
// IsSupported = SafariVersion.Major > SafariMajor or SafariVersion.Major = SafariMajor and SafariVersion.Minor >= SafariMinor
outVars.value.isSupportedOut = ((safariVersionJSResult.value.majorOut > vars.value.safariMajorVar) || ((safariVersionJSResult.value.majorOut === vars.value.safariMajorVar) && (safariVersionJSResult.value.minorOut >= vars.value.safariMinorVar)));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DL3nSKK06UujiQsCab0EzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsApple = True
outVars.value.isAppleOut = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TGqMV+QSSEevZ5RL1q5hew", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XPNYo8uVHku7hTHlOfrHbA", callContext.id);
chromeIOSJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_CheckSupportedBrowserVersion_ChromeIOSJS, "ChromeIOS", "CheckSupportedBrowserVersion", {
IsIOS: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Major: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Minor: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$chromeIOSJSResult"))();
jsNodeResult.isIOSOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsIOS, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.majorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Major, OS.DataTypes.DataTypes.Integer);
jsNodeResult.minorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Minor, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qGztKQLYxkGqdAVNB3cFsw", callContext.id) && chromeIOSJSResult.value.isIOSOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:97ONQ86o60mXnJk6WoTesQ", callContext.id);
// IsSupported = ChromeIOS.Major > SafariMajor or ChromeIOS.Major = SafariMajor and ChromeIOS.Minor >= SafariMinor
outVars.value.isSupportedOut = ((chromeIOSJSResult.value.majorOut > vars.value.safariMajorVar) || ((chromeIOSJSResult.value.majorOut === vars.value.safariMajorVar) && (chromeIOSJSResult.value.minorOut >= vars.value.safariMinorVar)));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:97ONQ86o60mXnJk6WoTesQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsApple = True
outVars.value.isAppleOut = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DV7zuav4PEqxn9IIVyFn_Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:d0yzp85iSkW0nELG0mzeeA", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:gNgz_S1aAUmnaEvApnbxPw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$vars", [{
name: "ChromeMajor",
attrName: "chromeMajorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 96;
}
}, {
name: "ChromeMinor",
attrName: "chromeMinorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "SafariMajor",
attrName: "safariMajorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 16;
}
}, {
name: "SafariMinor",
attrName: "safariMinorVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 6;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$nativeChromeVersionJSResult", [{
name: "IsChrome",
attrName: "isChromeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$safariVersionJSResult", [{
name: "IsSafari",
attrName: "isSafariOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$chromeVersionJSResult", [{
name: "IsChrome",
attrName: "isChromeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$chromeIOSJSResult", [{
name: "IsIOS",
attrName: "isIOSOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Major",
attrName: "majorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Minor",
attrName: "minorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CheckSupportedBrowserVersion$outVars", [{
name: "IsSupported",
attrName: "isSupportedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsAndroid",
attrName: "isAndroidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsApple",
attrName: "isAppleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.checkSupportedBrowserVersion$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.checkSupportedBrowserVersion$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSupported: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSupportedOut, OS.DataTypes.DataTypes.Boolean),
IsAndroid: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAndroidOut, OS.DataTypes.DataTypes.Boolean),
IsApple: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAppleOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.NativeChromeVersionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// WebView version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var matches = userAgent.match(/Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/);

if (matches) {
    $parameters.IsChrome = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
} else {
    // Can happen with other browsers - namely Safari
    $parameters.IsChrome = false;
}
};
});
define("Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.SafariVersionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Safari version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var matches = userAgent.match(/Version\/(\d+)\.(\d+).* Safari\//);

if (matches) {
    $parameters.IsSafari = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
}
};
});
define("Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.ChromeVersionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Chrome version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var matches = userAgent.match(/Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/);

if (matches) {
    $parameters.IsChrome = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
}
};
});
define("Connect2_LegacyShared.controller$CheckSupportedBrowserVersion.ChromeIOSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Safari version is exposed in the userAgent string

var userAgent = window.navigator.userAgent;
var isChromeIOS = userAgent.match(/CriOS\//);
var matches = null;

if (isChromeIOS) {
    matches = userAgent.match(/OS (\d+)\_(\d+)/);
}

if (matches) {
    $parameters.IsIOS = true;
    $parameters.Major = Number(matches[1]);
    $parameters.Minor = Number(matches[2]);
}
};
});

define("Connect2_LegacyShared.controller$CleanAddressForMaps", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$CleanAddressForMaps.CleanAddressJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_CleanAddressForMaps_CleanAddressJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.cleanAddressForMaps$Action = function (addressIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CleanAddressForMaps$vars"))());
vars.value.addressInLocal = addressIn;
var cleanAddressJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CleanAddressForMaps$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.cleanAddressJSResult = cleanAddressJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:tHzx8tPxWUOOgp8TZfP7Lg:/ClientActionFlows.tHzx8tPxWUOOgp8TZfP7Lg:2Yqpr4xknMgtPeyryph1Hw", "Connect2_LegacyShared", "CleanAddressForMaps", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HhsPlL8ATUGrvZS1+hDObA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ry7FbUCfEEaQS3iCp3UxFg", callContext.id);
cleanAddressJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_CleanAddressForMaps_CleanAddressJS, "CleanAddress", "CleanAddressForMaps", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.addressInLocal, OS.DataTypes.DataTypes.Text),
SafeText: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CleanAddressForMaps$cleanAddressJSResult"))();
jsNodeResult.safeTextOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SafeText, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7uPyoa3bk0G_q6cm5f+I+w", callContext.id);
// AddressSafe = CleanAddress.SafeText
outVars.value.addressSafeOut = cleanAddressJSResult.value.safeTextOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7Lu0d7MAcUG7tcPNao+dNA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:tHzx8tPxWUOOgp8TZfP7Lg", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CleanAddressForMaps$vars", [{
name: "Address",
attrName: "addressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CleanAddressForMaps$cleanAddressJSResult", [{
name: "SafeText",
attrName: "safeTextOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CleanAddressForMaps$outVars", [{
name: "AddressSafe",
attrName: "addressSafeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.cleanAddressForMaps$Action = function (addressIn) {
addressIn = (addressIn === undefined) ? "" : addressIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.cleanAddressForMaps$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(addressIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AddressSafe: OS.DataConversion.JSNodeParamConverter.to(actionResults.addressSafeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$CleanAddressForMaps.CleanAddressJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Define the regular expressions
const newlineRegexp = new RegExp('(\\n|\\r)+', 'g');
const spaceRegexp = new RegExp('\\s+', 'g');

// Replace newlines and carriage returns with a single space
$parameters.SafeText = $parameters.Text.replace(newlineRegexp, ' ');

// Replace multiple spaces with a single space
$parameters.SafeText = $parameters.SafeText.replace(spaceRegexp, ' ');

};
});

define("Connect2_LegacyShared.controller$CopyClassesAcrossPortal", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal.CopyClassesAcrossPortalJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_CopyClassesAcrossPortal_CopyClassesAcrossPortalJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action = function (rootWidgetIdIn, popupWidgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CopyClassesAcrossPortal$vars"))());
vars.value.rootWidgetIdInLocal = rootWidgetIdIn;
vars.value.popupWidgetIdInLocal = popupWidgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:HRiUYsHItUGUaEJCVAdeKg:/ClientActionFlows.HRiUYsHItUGUaEJCVAdeKg:3YAimenUpzTpUNK0syORBQ", "Connect2_LegacyShared", "CopyClassesAcrossPortal", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YtH9oGZnX02vuiBkr7jTXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QAzKi4xfVUab9sIJD2a1Ww", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_CopyClassesAcrossPortal_CopyClassesAcrossPortalJS, "CopyClassesAcrossPortal", "CopyClassesAcrossPortal", {
RootWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.rootWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PopupWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.popupWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dyMY+gW8WU6Ve6HR4XZJtQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:HRiUYsHItUGUaEJCVAdeKg", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CopyClassesAcrossPortal$vars", [{
name: "RootWidgetId",
attrName: "rootWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PopupWidgetId",
attrName: "popupWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.copyClassesAcrossPortal$Action = function (rootWidgetIdIn, popupWidgetIdIn) {
rootWidgetIdIn = (rootWidgetIdIn === undefined) ? "" : rootWidgetIdIn;
popupWidgetIdIn = (popupWidgetIdIn === undefined) ? "" : popupWidgetIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(rootWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(popupWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$CopyClassesAcrossPortal.CopyClassesAcrossPortalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var root = document.getElementById($parameters.RootWidgetId);
var popup = document.getElementById($parameters.PopupWidgetId);

if (root && popup) {
    var rootParent = root.parentNode.parentNode;

    var portalRoot = popup.parentNode.parentNode;
    var portalParent = portalRoot.parentNode;


    portalRoot.className = root.className;
    portalParent.className = "portal-class" + (rootParent.className? " " + rootParent.className: "");

    // Portals are rendered with "display: inline;" style, but we remove it to not interfere with any CSS rules
    portalParent.removeAttribute("style");
}
};
});

define("Connect2_LegacyShared.controller$Create_LocalBookmark", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalBookmarkRecord", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_LegacyShared.model$LocalBookmarkRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.create_LocalBookmark$Action = function (objectTypeIn, objectIdIn, groupIn, bookmarkIdIn, noteIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Create_LocalBookmark$vars"))());
vars.value.objectTypeInLocal = objectTypeIn;
vars.value.objectIdInLocal = objectIdIn;
vars.value.groupInLocal = groupIn;
vars.value.bookmarkIdInLocal = bookmarkIdIn;
vars.value.noteInLocal = noteIn;
var createLocalBookmarkVar = new OS.DataTypes.VariableHolder();
var checkForRepeatRecordVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_LegacySharedModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Create_LocalBookmark$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createLocalBookmarkVar = createLocalBookmarkVar;
varBag.checkForRepeatRecordVar = checkForRepeatRecordVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:pxlERQqRfk27ovBTV8x_5A:/ClientActionFlows.pxlERQqRfk27ovBTV8x_5A:jyZ6Smqx3r5lx26Vssatyg", "Connect2_LegacyShared", "Create_LocalBookmark", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Xq2vnEmh30iX+UXhZwAI3Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HkAwEanGSk+no7AwvBBRWQ", callContext.id);
// Aggregate: CheckForRepeatRecord
var checkForRepeatRecordAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_LegacySharedModel.LocalBookmarkRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstGroup = vars.value.groupInLocal;
var qploObjectId = vars.value.objectIdInLocal;
var qpstObjectType = vars.value.objectTypeInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_b3n_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstObjectType.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"ObjectType\" = :qpstObjectType) AND (\"ENLocalBookmark\".\"ObjectType\" IS NOT NULL))";
argsList.add("qpstObjectType", /*TEXT*/ 0, qpstObjectType);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"ObjectType\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalBookmark\".\"ObjectId\" = CAST(:qploObjectId AS INTEGER)) AND ";
argsList.add("qploObjectId", /*LONGINTEGER*/ 4, qploObjectId);
if (((qpstGroup.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"Group\" = :qpstGroup) AND (\"ENLocalBookmark\".\"Group\" IS NOT NULL))";
argsList.add("qpstGroup", /*TEXT*/ 0, qpstGroup);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"Group\" IS NULL)";
}
orderBySql += " ORDER BY \"ENLocalBookmark\".\"Note\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_LegacySharedModel.LocalBookmarkRecordList, function (rec, r) {
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
require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
return Connect2_LegacySharedAggregates_IDB.executeCreateLocalBookmark$ClientAction$checkForRepeatRecordAggr(OS.BuiltinFunctions.getUserId(), vars.value.groupInLocal, vars.value.objectIdInLocal, vars.value.objectTypeInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return checkForRepeatRecordVar.value;
});
};
return checkForRepeatRecordAggr().then(function () {
// No Record?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2Oq3CmKF2UCKLwp2QAnyBg", callContext.id) && checkForRepeatRecordVar.value.listOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gr42V4E2cEitsAuS3OuZ3g", callContext.id);
// Execute Action: CreateLocalBookmark
return Connect2_LegacySharedModel.entities.LocalBookmark.create(function () {
var rec = new Connect2_LegacySharedModel.LocalBookmarkRecord();
rec.localBookmarkAttr = function () {
var rec = new Connect2_LegacySharedModel.LocalBookmarkRec();
rec.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
rec.userIdAttr = OS.BuiltinFunctions.getUserId();
rec.bookmarkIdAttr = vars.value.bookmarkIdInLocal;
rec.objectTypeAttr = vars.value.objectTypeInLocal;
rec.objectIdAttr = vars.value.objectIdInLocal;
rec.groupAttr = vars.value.groupInLocal;
rec.dateCreatedUtcAttr = OS.BuiltinFunctions.currDateTime();
rec.noteAttr = vars.value.noteInLocal;
return rec;
}();
return rec;
}(), callContext).then(function (value) {
createLocalBookmarkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bB1iVY_C5EqFXqp3XpheeQ", callContext.id);
// LocalBookmarkId = CreateLocalBookmark.Id
outVars.value.localBookmarkIdOut = createLocalBookmarkVar.value.idOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:H19vEJpuSEmtBKpsLbN0sQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XUWKpqZIS0O3Pbe1n804LA", callContext.id);
// LocalBookmarkId = CheckForRepeatRecord.List.Current.LocalBookmark.Id
outVars.value.localBookmarkIdOut = checkForRepeatRecordVar.value.listOut.getCurrent(callContext.iterationContext).localBookmarkAttr.idAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hbsdxh8EhEK0NS5v00idow", callContext.id);
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pxlERQqRfk27ovBTV8x_5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pxlERQqRfk27ovBTV8x_5A", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Create_LocalBookmark$vars", [{
name: "ObjectType",
attrName: "objectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Group",
attrName: "groupInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "BookmarkId",
attrName: "bookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Note",
attrName: "noteInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Create_LocalBookmark$outVars", [{
name: "LocalBookmarkId",
attrName: "localBookmarkIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.create_LocalBookmark$Action = function (objectTypeIn, objectIdIn, groupIn, bookmarkIdIn, noteIn) {
objectTypeIn = (objectTypeIn === undefined) ? "" : objectTypeIn;
objectIdIn = (objectIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : objectIdIn;
groupIn = (groupIn === undefined) ? "" : groupIn;
bookmarkIdIn = (bookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : bookmarkIdIn;
noteIn = (noteIn === undefined) ? "" : noteIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.create_LocalBookmark$Action.bind(controller, objectTypeIn, OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.LongInteger), groupIn, OS.DataConversion.JSNodeParamConverter.from(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(noteIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalBookmarkId: actionResults.localBookmarkIdOut
};
});
};
});

define("Connect2_LegacyShared.controller$CreateOrUpdate_SomeApplicationEvents", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecordList", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.createOrUpdate_SomeApplicationEvents$Action = function (sourceListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.CreateOrUpdate_SomeApplicationEvents$vars"))());
vars.value.sourceListInLocal = sourceListIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:CdWlky1KoE+EdEZNGFAEaw:/ClientActionFlows.CdWlky1KoE+EdEZNGFAEaw:IrYwdUs4xLwXwUnMRCLU+w", "Connect2_LegacyShared", "CreateOrUpdate_SomeApplicationEvents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:24xVzdiEHE630qOlhF3VPw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8eAYW6jsDUmADJJZ93b_uA", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalConnectApplicationEvents
return Connect2_LegacySharedModel.entities.LocalConnectApplicationEvents.createOrUpdateAll(vars.value.sourceListInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BV1Xvi5WPEWZgrK_Mrx0JQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:CdWlky1KoE+EdEZNGFAEaw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:CdWlky1KoE+EdEZNGFAEaw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.CreateOrUpdate_SomeApplicationEvents$vars", [{
name: "SourceList",
attrName: "sourceListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList();
},
complexType: Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList
}]);
Connect2_LegacySharedController.default.clientActionProxies.createOrUpdate_SomeApplicationEvents$Action = function (sourceListIn) {
sourceListIn = (sourceListIn === undefined) ? new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList() : sourceListIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.createOrUpdate_SomeApplicationEvents$Action.bind(controller, sourceListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$DecrementReadMessagesCounter", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.decrementReadMessagesCounter$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.DecrementReadMessagesCounter$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:phFseEhDskORPxNoZz+_yA:/ClientActionFlows.phFseEhDskORPxNoZz+_yA:7+BmubfCPYmlQE_KP20aKg", "Connect2_LegacyShared", "DecrementReadMessagesCounter", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_ruVOb0mFEaNs7cpGwoq9A", callContext.id);
// Client.UnreadMessagesNumber
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lmX9Zc0MxEijsph+w65SIg", callContext.id);
// UnreadNotificationsNumber = If
vars.value.unreadNotificationsNumberVar = ((Connect2_LegacySharedClientVariables.getUnreadNotificationsNumber().gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (Connect2_LegacySharedClientVariables.getUnreadNotificationsNumber().sub(OS.BuiltinFunctions.integerToLongInteger(1))) : (OS.BuiltinFunctions.integerToLongInteger(0)));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lmX9Zc0MxEijsph+w65SIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UnreadNotificationsNumber = UnreadNotificationsNumber
Connect2_LegacySharedClientVariables.setUnreadNotificationsNumber(vars.value.unreadNotificationsNumberVar);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lmX9Zc0MxEijsph+w65SIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// UnreadPublicMessagesNumber = UnreadNotificationsNumber
Connect2_LegacySharedClientVariables.setUnreadPublicMessagesNumber(vars.value.unreadNotificationsNumberVar);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zT4yLzH3t0uoWTwlzeL3ZQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:phFseEhDskORPxNoZz+_yA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.DecrementReadMessagesCounter$vars", [{
name: "UnreadNotificationsNumber",
attrName: "unreadNotificationsNumberVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.decrementReadMessagesCounter$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.decrementReadMessagesCounter$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$DecrementReadWhatsNewsCounter", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.decrementReadWhatsNewsCounter$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4SJMosdlqk2FYCOCckIJXA:/ClientActionFlows.4SJMosdlqk2FYCOCckIJXA:tAK1bDuJvRILnvJZiz4hBg", "Connect2_LegacyShared", "DecrementReadWhatsNewsCounter", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oXgdWBCHZ0+DE3rw5NGdmA", callContext.id);
// Client.UnreadMessagesNumber
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:f_7mrp51wECR6sf_gDNc_g", callContext.id);
// UnreadWhatsNewsNumber = If
Connect2_LegacySharedClientVariables.setUnreadWhatsNewsNumber(((Connect2_LegacySharedClientVariables.getUnreadWhatsNewsNumber().gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (Connect2_LegacySharedClientVariables.getUnreadWhatsNewsNumber().sub(OS.BuiltinFunctions.integerToLongInteger(1))) : (OS.BuiltinFunctions.integerToLongInteger(0))));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:52bVv4MFpkyZ4LEHQKnI2w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4SJMosdlqk2FYCOCckIJXA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.clientActionProxies.decrementReadWhatsNewsCounter$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.decrementReadWhatsNewsCounter$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$Delete_LocalBookmarkByBookmarkId", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$Delete_LocalBookmarkById", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_LegacyShared.controller$Get_LocalBookmarkByBookmarkId"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.delete_LocalBookmarkByBookmarkId$Action = function (bookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Delete_LocalBookmarkByBookmarkId$vars"))());
vars.value.bookmarkIdInLocal = bookmarkIdIn;
var get_LocalBookmarkByBookmarkIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.get_LocalBookmarkByBookmarkIdVar = get_LocalBookmarkByBookmarkIdVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:CkhhN690rk+CgWcqRHEXPQ:/ClientActionFlows.CkhhN690rk+CgWcqRHEXPQ:c2LNgKNS7CNn3wyCyGG8JA", "Connect2_LegacyShared", "Delete_LocalBookmarkByBookmarkId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:J9bb8YDNmEO6eo1UtCxhyQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bWiP7xTNg0+mBmiNhkBk_Q", callContext.id);
// Execute Action: Get_LocalBookmarkByBookmarkId
return Connect2_LegacySharedController.default.get_LocalBookmarkByBookmarkId$Action(vars.value.bookmarkIdInLocal, callContext).then(function (value) {
get_LocalBookmarkByBookmarkIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8oHHRNRBFEeTcNNQX_0sBQ", callContext.id);
// Execute Action: Delete_LocalBookmarkById
return Connect2_LegacySharedController.default.delete_LocalBookmarkById$Action(get_LocalBookmarkByBookmarkIdVar.value.localBookmarkOut.idAttr, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:M2Whk2EemkqDqX8J9X_X8g", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:CkhhN690rk+CgWcqRHEXPQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:CkhhN690rk+CgWcqRHEXPQ", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Delete_LocalBookmarkByBookmarkId$vars", [{
name: "BookmarkId",
attrName: "bookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.delete_LocalBookmarkByBookmarkId$Action = function (bookmarkIdIn) {
bookmarkIdIn = (bookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : bookmarkIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.delete_LocalBookmarkByBookmarkId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$Delete_LocalBookmarkById", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalBookmarkRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.delete_LocalBookmarkById$Action = function (localBookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Delete_LocalBookmarkById$vars"))());
vars.value.localBookmarkIdInLocal = localBookmarkIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:owqV51whqUuN8BO09D1y6w:/ClientActionFlows.owqV51whqUuN8BO09D1y6w:4bdI5vMB8tlXqMm+mDbyhA", "Connect2_LegacyShared", "Delete_LocalBookmarkById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mDJ3tF6b5Uan8tVHQ_OYFA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:cm4LL0p3Uk+ireTJouroyQ", callContext.id);
// Execute Action: DeleteLocalBookmark
return Connect2_LegacySharedModel.entities.LocalBookmark.delete(vars.value.localBookmarkIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xjGrCsNRj0KvZuYmYOYoQQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:owqV51whqUuN8BO09D1y6w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:owqV51whqUuN8BO09D1y6w", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Delete_LocalBookmarkById$vars", [{
name: "LocalBookmarkId",
attrName: "localBookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.delete_LocalBookmarkById$Action = function (localBookmarkIdIn) {
localBookmarkIdIn = (localBookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localBookmarkIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.delete_LocalBookmarkById$Action.bind(controller, localBookmarkIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition.ScheduleFeedbackMessageAfterTransitionJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_FeedbackMessageAfterTransition_ScheduleFeedbackMessageAfterTransitionJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action = function (messageIn, messageTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.FeedbackMessageAfterTransition$vars"))());
vars.value.messageInLocal = messageIn;
vars.value.messageTypeIdInLocal = messageTypeIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:xjhBEGSjEk6yO2rneODfug:/ClientActionFlows.xjhBEGSjEk6yO2rneODfug:FQkwhaqMWrl8Gu5GWIxCGQ", "Connect2_LegacyShared", "FeedbackMessageAfterTransition", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CXatQLk4PEy4dQLpFXkMPg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0Pp3dRN800acHbVTCrfR4g", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_FeedbackMessageAfterTransition_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "FeedbackMessageAfterTransition", {
MessageType: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageTypeIdInLocal, OS.DataTypes.DataTypes.Integer),
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:M4ToZd+BjkKQd4XDxU0Cag", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:xjhBEGSjEk6yO2rneODfug", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.FeedbackMessageAfterTransition$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageTypeId",
attrName: "messageTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.feedbackMessageAfterTransition$Action = function (messageIn, messageTypeIdIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
messageTypeIdIn = (messageTypeIdIn === undefined) ? 0 : messageTypeIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text), messageTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$FeedbackMessageAfterTransition.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, $parameters.MessageType);
}, 500);
};
});

define("Connect2_LegacyShared.controller$FlipHouseholdName", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$FlipHouseholdName.FlipHouseholdNameJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_FlipHouseholdName_FlipHouseholdNameJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.flipHouseholdName$Action = function (in_HouseholdNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.FlipHouseholdName$vars"))());
vars.value.in_HouseholdNameInLocal = in_HouseholdNameIn;
var flipHouseholdNameJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.FlipHouseholdName$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.flipHouseholdNameJSResult = flipHouseholdNameJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:WrGfHjMH5kam+5CVheyi+g:/ClientActionFlows.WrGfHjMH5kam+5CVheyi+g:YDWeH_JqCRdCndFPpd8eDQ", "Connect2_LegacyShared", "FlipHouseholdName", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fGGuE5ulYUq7KKCvVa0pxw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aTSZmWm+X06m79+6LoNl_g", callContext.id);
flipHouseholdNameJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_FlipHouseholdName_FlipHouseholdNameJS, "FlipHouseholdName", "FlipHouseholdName", {
In_OriginalName: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_HouseholdNameInLocal, OS.DataTypes.DataTypes.Text),
Out_FixedName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.FlipHouseholdName$flipHouseholdNameJSResult"))();
jsNodeResult.out_FixedNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FixedName, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:78mNdsh1xkerih6bsmuClw", callContext.id);
// Out_HouseholdNameFixed = FlipHouseholdName.Out_FixedName
outVars.value.out_HouseholdNameFixedOut = flipHouseholdNameJSResult.value.out_FixedNameOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sa4boSmd1kWXfdUmia7hdQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:WrGfHjMH5kam+5CVheyi+g", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.FlipHouseholdName$vars", [{
name: "In_HouseholdName",
attrName: "in_HouseholdNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.FlipHouseholdName$flipHouseholdNameJSResult", [{
name: "Out_FixedName",
attrName: "out_FixedNameOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.FlipHouseholdName$outVars", [{
name: "Out_HouseholdNameFixed",
attrName: "out_HouseholdNameFixedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.flipHouseholdName$Action = function (in_HouseholdNameIn) {
in_HouseholdNameIn = (in_HouseholdNameIn === undefined) ? "" : in_HouseholdNameIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.flipHouseholdName$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_HouseholdNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HouseholdNameFixed: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_HouseholdNameFixedOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$FlipHouseholdName.FlipHouseholdNameJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function nameManip(name){
    var originalName = name;
    var split = originalName.split(",");
    if(split.length > 1){
        var lastName = split[0].trim();
        var split2 = split[1].split("&");
        var householderName = split2[0].trim();
        if(!!split2[1]){
            var spouseName = split2[1].trim();
        }
        if(!!spouseName){
           $parameters.Out_FixedName = householderName + " & " + spouseName + " " + lastName;
        }
        else{
            $parameters.Out_FixedName = householderName+ " " + lastName;
        }
    }
    else{
        $parameters.Out_FixedName = $parameters.In_OriginalName
        
    }
}

nameManip($parameters.In_OriginalName);
};
});

define("Connect2_LegacyShared.controller$Get_LocalBookmarkByBookmarkId", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_LegacyShared.model$LocalBookmarkRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.get_LocalBookmarkByBookmarkId$Action = function (bookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByBookmarkId$vars"))());
vars.value.bookmarkIdInLocal = bookmarkIdIn;
var getLocalBookmarksByUserIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_LegacySharedModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByBookmarkId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarksByUserIdVar = getLocalBookmarksByUserIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:SrvtgBG9LE+KxseMxjD_Hg:/ClientActionFlows.SrvtgBG9LE+KxseMxjD_Hg:UeBWvZ+VCv_ipu8aZibzKQ", "Connect2_LegacyShared", "Get_LocalBookmarkByBookmarkId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:V4UPCYCfLEK8Qr+6yuZKlg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m8w80KXUAE+oRbM0a24Nkw", callContext.id);
// Aggregate: GetLocalBookmarksByUserId
var getLocalBookmarksByUserIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_LegacySharedModel.LocalBookmarkRecordList;
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
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_b3n_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalBookmark\".\"BookmarkId\" = CAST(:qploBookmarkId AS INTEGER))";
orderBySql += " ORDER BY \"ENLocalBookmark\".\"Note\" ASC ";
argsList.add("qploBookmarkId", /*LONGINTEGER*/ 4, qploBookmarkId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_LegacySharedModel.LocalBookmarkRecordList, function (rec, r) {
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
require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
return Connect2_LegacySharedAggregates_IDB.executeGetLocalBookmarkByBookmarkId$ClientAction$getLocalBookmarksByUserIdAggr(vars.value.bookmarkIdInLocal, OS.BuiltinFunctions.getUserId(), maxRecords).then(function (result) {
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
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:v8tOvPAYVUuXCF8VH0UIuQ", callContext.id);
// LocalBookmark = GetLocalBookmarksByUserId.List.Current.LocalBookmark
outVars.value.localBookmarkOut = getLocalBookmarksByUserIdVar.value.listOut.getCurrent(callContext.iterationContext).localBookmarkAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:o_7yE5ZkY0uBUy77SU660g", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:SrvtgBG9LE+KxseMxjD_Hg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:SrvtgBG9LE+KxseMxjD_Hg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByBookmarkId$vars", [{
name: "BookmarkId",
attrName: "bookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByBookmarkId$outVars", [{
name: "LocalBookmark",
attrName: "localBookmarkOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalBookmarkRec();
},
complexType: Connect2_LegacySharedModel.LocalBookmarkRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.get_LocalBookmarkByBookmarkId$Action = function (bookmarkIdIn) {
bookmarkIdIn = (bookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : bookmarkIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.get_LocalBookmarkByBookmarkId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalBookmark: actionResults.localBookmarkOut
};
});
};
});

define("Connect2_LegacyShared.controller$Get_LocalBookmarkByObjectId", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_LegacyShared.model$LocalBookmarkRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.get_LocalBookmarkByObjectId$Action = function (objectTypeIn, objectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByObjectId$vars"))());
vars.value.objectTypeInLocal = objectTypeIn;
vars.value.objectIdInLocal = objectIdIn;
var getLocalBookmarkByObjectIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_LegacySharedModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByObjectId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarkByObjectIdVar = getLocalBookmarkByObjectIdVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:KEd70GH_bkavFr+1rqJ3Dg:/ClientActionFlows.KEd70GH_bkavFr+1rqJ3Dg:CIw5gyu_HLySiJ29hchchw", "Connect2_LegacyShared", "Get_LocalBookmarkByObjectId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:h4VG9RKpekep_gPZCAUfTg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HsnVYj1CIkeNoSMcku_ChA", callContext.id);
// Aggregate: GetLocalBookmarkByObjectId
var getLocalBookmarkByObjectIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_LegacySharedModel.LocalBookmarkRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qploObjectId = vars.value.objectIdInLocal;
var qpstObjectType = vars.value.objectTypeInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_b3n_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND (\"ENLocalBookmark\".\"ObjectId\" = CAST(:qploObjectId AS INTEGER)) AND ";
argsList.add("qploObjectId", /*LONGINTEGER*/ 4, qploObjectId);
if (((qpstObjectType.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"ObjectType\" = :qpstObjectType) AND (\"ENLocalBookmark\".\"ObjectType\" IS NOT NULL))";
argsList.add("qpstObjectType", /*TEXT*/ 0, qpstObjectType);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"ObjectType\" IS NULL)";
}
orderBySql += " ORDER BY \"ENLocalBookmark\".\"Note\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_LegacySharedModel.LocalBookmarkRecordList, function (rec, r) {
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
require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
return Connect2_LegacySharedAggregates_IDB.executeGetLocalBookmarkByObjectId$ClientAction$getLocalBookmarkByObjectIdAggr(OS.BuiltinFunctions.getUserId(), vars.value.objectIdInLocal, vars.value.objectTypeInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarkByObjectIdVar.value;
});
};
return getLocalBookmarkByObjectIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Km3TsE6Ph0azUTWhhfJXtA", callContext.id);
// LocalBookmark = GetLocalBookmarkByObjectId.List.Current.LocalBookmark
outVars.value.localBookmarkOut = getLocalBookmarkByObjectIdVar.value.listOut.getCurrent(callContext.iterationContext).localBookmarkAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HW5EYBFr_UCrgPBvcX4HCw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:KEd70GH_bkavFr+1rqJ3Dg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:KEd70GH_bkavFr+1rqJ3Dg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByObjectId$vars", [{
name: "ObjectType",
attrName: "objectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.Get_LocalBookmarkByObjectId$outVars", [{
name: "LocalBookmark",
attrName: "localBookmarkOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalBookmarkRec();
},
complexType: Connect2_LegacySharedModel.LocalBookmarkRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.get_LocalBookmarkByObjectId$Action = function (objectTypeIn, objectIdIn) {
objectTypeIn = (objectTypeIn === undefined) ? "" : objectTypeIn;
objectIdIn = (objectIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : objectIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.get_LocalBookmarkByObjectId$Action.bind(controller, objectTypeIn, OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalBookmark: actionResults.localBookmarkOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetAdjustedScrollTime", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getAdjustedScrollTime$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetAdjustedScrollTime$vars"))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetAdjustedScrollTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:tf0DvWbsHUOHIr2oAzyl9Q:/ClientActionFlows.tf0DvWbsHUOHIr2oAzyl9Q:MK03RNv5VmgSwltYOZxI9g", "Connect2_LegacyShared", "GetAdjustedScrollTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aqGZ167Jj0Oss7PS4xWt7g", callContext.id);
// Calculate Scroll Time
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FgdOmWZ2aEmdIfOO_fVkRA", callContext.id);
// Out_ScrollTime = If
outVars.value.out_ScrollTimeOut = OS.BuiltinFunctions.dateTimeToTime(((OS.BuiltinFunctions.currTime().gte(OS.BuiltinFunctions.newTime(0, vars.value.thresholdInMinutesVar, 0))) ? (OS.BuiltinFunctions.addMinutes(OS.BuiltinFunctions.currTime(), -vars.value.thresholdInMinutesVar)) : (OS.BuiltinFunctions.currTime())));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RK_613LuHkyvfzfbY_lxHQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:tf0DvWbsHUOHIr2oAzyl9Q", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetAdjustedScrollTime$vars", [{
name: "ThresholdInMinutes",
attrName: "thresholdInMinutesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 30;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetAdjustedScrollTime$outVars", [{
name: "Out_ScrollTime",
attrName: "out_ScrollTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Time,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getAdjustedScrollTime$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getAdjustedScrollTime$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ScrollTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ScrollTimeOut, OS.DataTypes.DataTypes.Time)
};
});
};
});

define("Connect2_LegacyShared.controller$GetAppEventName", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$CacheLocalApplicationEvents", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecordList", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getAppEventName$Action = function (eventIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetAppEventName$vars"))());
vars.value.eventIdInLocal = eventIdIn;
var getLocalConnectApplicationEventsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetAppEventName$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalConnectApplicationEventsVar = getLocalConnectApplicationEventsVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:aDMbOzGgNUmeaUYWRY0LJg:/ClientActionFlows.aDMbOzGgNUmeaUYWRY0LJg:SMO5KN6v0U3QshSBQvLeZA", "Connect2_LegacyShared", "GetAppEventName", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_IJeExtd_EmCclYWTkh1tw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.whileTrueAsync(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:R0Iu5matT0inZP4cDnGPXA", callContext.id);
// Aggregate: GetLocalConnectApplicationEvents
var getLocalConnectApplicationEventsAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstId = vars.value.eventIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalConnectApplicationEvents\".\"Id\" o0, \"ENLocalConnectApplicationEvents\".\"Name\" o1";
} else {
selectSql += "\"ENLocalConnectApplicationEvents\".\"Id\" o0, \"ENLocalConnectApplicationEvents\".\"Name\" o1";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_b3n_LocalConnectApplicationEvents\" \"ENLocalConnectApplicationEvents\"";
fromAndWhereSql += " WHERE (\"ENLocalConnectApplicationEvents\".\"Id\" = (:qpstId))";
argsList.add("qpstId", /*TEXT*/ 0, qpstId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localConnectApplicationEventsAttr",
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
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
return Connect2_LegacySharedAggregates_IDB.executeGetAppEventName$ClientAction$getLocalConnectApplicationEventsAggr(vars.value.eventIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalConnectApplicationEventsVar.value;
});
};
return getLocalConnectApplicationEventsAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:cI602A0elE6IqbS+SieNRw", callContext.id);
// Name = If
outVars.value.nameOut = (((getLocalConnectApplicationEventsVar.value.listOut.getCurrent(callContext.iterationContext).localConnectApplicationEventsAttr.nameAttr === "")) ? (getLocalConnectApplicationEventsVar.value.listOut.getCurrent(callContext.iterationContext).localConnectApplicationEventsAttr.idAttr) : (getLocalConnectApplicationEventsVar.value.listOut.getCurrent(callContext.iterationContext).localConnectApplicationEventsAttr.nameAttr));
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kUeguXJlRUqSAD7GwyM8Eg", callContext.id) && (getLocalConnectApplicationEventsVar.value.listOut.isEmpty && !(vars.value.isRetryVar)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dghRHNCXm0+lq4EAd9xWFA", callContext.id);
// isRetry = True
vars.value.isRetryVar = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NTchZ_Oh3UW4yKtH_vk2lg", callContext.id);
// Execute Action: CacheLocalApplicationEvents
return Connect2_LegacySharedController.default.cacheLocalApplicationEvents$Action(callContext);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:E4HRf1AgQ06fSceLYoG5lg", callContext.id);
return OS.Flow.returnAsync(outVars.value);

}

});
});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aDMbOzGgNUmeaUYWRY0LJg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aDMbOzGgNUmeaUYWRY0LJg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetAppEventName$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "isRetry",
attrName: "isRetryVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetAppEventName$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getAppEventName$Action = function (eventIdIn) {
eventIdIn = (eventIdIn === undefined) ? "" : eventIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getAppEventName$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_LegacyShared.controller$GetBulkSignedImageParameters", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.controller$GetCacheKeyParts", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.model$BulkSignedImagesParametersRec", "Connect2_LegacyShared.model$BulkSignedImagesParametersList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getBulkSignedImageParameters$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageParameters$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getCacheKeyPartsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageParameters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheKeyPartsVar = getCacheKeyPartsVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:qX+eZ7PZsE+7LB_ZnLPkUw:/ClientActionFlows.qX+eZ7PZsE+7LB_ZnLPkUw:vZi6z6tXQcCOIJAMsAx8vA", "Connect2_LegacyShared", "GetBulkSignedImageParameters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EXxTe00qvEC7BXkXLO_ywg", callContext.id);
// Foreach CacheKeys
callContext.iterationContext.registerIterationStart(vars.value.cacheKeysInLocal);
try {var cacheKeysIterator = callContext.iterationContext.getIterator(vars.value.cacheKeysInLocal);
var cacheKeysIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:w5eKn2v84UmlYsKBcp9W3g", callContext.id) && (cacheKeysIndex < vars.value.cacheKeysInLocal.length))) {
cacheKeysIterator.currentRowNumber = cacheKeysIndex;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nw1KHyTMBkegDz1TZnpsYg", callContext.id);
// Execute Action: GetCacheKeyParts
getCacheKeyPartsVar.value = MemoryClientCacheController.default.getCacheKeyParts$Action(vars.value.cacheKeysInLocal.getItem(cacheKeysIndex.valueOf()), callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Kp_8IHmXOEWpXDi0mhC7yg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.parametersOut, function () {
var rec = new Connect2_LegacySharedModel.BulkSignedImagesParametersRec();
rec.idAttr = OS.BuiltinFunctions.textToLongInteger(getCacheKeyPartsVar.value.keyPartsOut.getItem(0));
rec.typeAttr = getCacheKeyPartsVar.value.keyPartsOut.getItem(1);
rec.sizeAttr = OS.BuiltinFunctions.textToIdentifier(getCacheKeyPartsVar.value.keyPartsOut.getItem(2));
return rec;
}(), callContext);
cacheKeysIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.cacheKeysInLocal);
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hGKp_pQDvE2sAZ5tG61JzQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:qX+eZ7PZsE+7LB_ZnLPkUw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageParameters$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageParameters$outVars", [{
name: "Parameters",
attrName: "parametersOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BulkSignedImagesParametersList();
},
complexType: Connect2_LegacySharedModel.BulkSignedImagesParametersList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getBulkSignedImageParameters$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getBulkSignedImageParameters$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Parameters: actionResults.parametersOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetBulkSignedImageURL", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$BulkSignedImagesParametersList", "Connect2_LegacyShared.controller$GetBulkSignedImageParameters", "Connect2_LegacyShared.model$BulkSignedImageResultList", "Connect2_LegacyShared.controller$ServerAction.GetSignedImagesInBulk", "MemoryClientCache.controller$CacheKeyPart", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.model$TextTextTextRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getBulkSignedImageURL$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageURL$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getSignedImagesInBulkVar = new OS.DataTypes.VariableHolder();
var getBulkSignedImageParametersVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSignedImagesInBulkVar = getSignedImagesInBulkVar;
varBag.getBulkSignedImageParametersVar = getBulkSignedImageParametersVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:9bDQlMg9F0GS77OGIViTQw:/ClientActionFlows.9bDQlMg9F0GS77OGIViTQw:MSqGfG_GRUTrqq0eAhk1hg", "Connect2_LegacyShared", "GetBulkSignedImageURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:V+lqpmEBJU64rjuyVdMtKA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lb8lLWe0s06_FlOM0HkIHQ", callContext.id);
// Execute Action: GetBulkSignedImageParameters
getBulkSignedImageParametersVar.value = Connect2_LegacySharedController.default.getBulkSignedImageParameters$Action(vars.value.cacheKeysInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ONN18DD+1kCrq34bG04zGg", callContext.id);
// Execute Action: GetSignedImagesInBulk
return controller.getSignedImagesInBulk$ServerAction(getBulkSignedImageParametersVar.value.parametersOut, callContext).then(function (value) {
getSignedImagesInBulkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:X5REl+Mc8EGpiggKsuUe+A", callContext.id);
// Results = GetSignedImagesInBulk.Results
outVars.value.resultsOut = OS.DataConversion.JSConversions.typeConvertRecordList(getSignedImagesInBulkVar.value.resultsOut, new Connect2_LegacySharedModel.TextTextTextRecordList(), function (source, target) {
target.cacheKeyAttr = ((OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(OS.BuiltinFunctions.longIntegerToText(source.idAttr), callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(source.typeAttr, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(source.sizeAttr, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
target.errorAttr = source.errorAttr;
target.valueAttr = source.signedURLAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sbymgKG3J0GMZpRT1kxUlA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:9bDQlMg9F0GS77OGIViTQw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:9bDQlMg9F0GS77OGIViTQw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageURL$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedImageURL$outVars", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.TextTextTextRecordList();
},
complexType: Connect2_LegacySharedModel.TextTextTextRecordList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getBulkSignedImageURL$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getBulkSignedImageURL$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Results: actionResults.resultsOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetBulkSignedPhotosParameters", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.controller$GetCacheKeyParts", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.model$BulkSignedPhotoParametersList", "Connect2_LegacyShared.model$BulkSignedPhotoParametersRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getBulkSignedPhotosParameters$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosParameters$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getCacheKeyPartsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosParameters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheKeyPartsVar = getCacheKeyPartsVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Dodw5ObawU6Ahy1mpF9q+Q:/ClientActionFlows.Dodw5ObawU6Ahy1mpF9q+Q:327hOsCB9sa3TQEjON58Ig", "Connect2_LegacyShared", "GetBulkSignedPhotosParameters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DHEEkW08b0mpMJ18Sez5gg", callContext.id);
// Foreach CacheKeys
callContext.iterationContext.registerIterationStart(vars.value.cacheKeysInLocal);
try {var cacheKeysIterator = callContext.iterationContext.getIterator(vars.value.cacheKeysInLocal);
var cacheKeysIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:W0qx8BwevEuDfb+86N_X5Q", callContext.id) && (cacheKeysIndex < vars.value.cacheKeysInLocal.length))) {
cacheKeysIterator.currentRowNumber = cacheKeysIndex;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F4HLDKAdA0ucXbgBl4oEPQ", callContext.id);
// Execute Action: GetCacheKeyParts
getCacheKeyPartsVar.value = MemoryClientCacheController.default.getCacheKeyParts$Action(vars.value.cacheKeysInLocal.getItem(cacheKeysIndex.valueOf()), callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZVj_hIcR+kmB2VuhpbJ9cA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.parametersOut, function () {
var rec = new Connect2_LegacySharedModel.BulkSignedPhotoParametersRec();
rec.bucketAttr = getCacheKeyPartsVar.value.keyPartsOut.getItem(0);
rec.pathAttr = getCacheKeyPartsVar.value.keyPartsOut.getItem(1);
rec.typeAttr = getCacheKeyPartsVar.value.keyPartsOut.getItem(2);
return rec;
}(), callContext);
cacheKeysIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.cacheKeysInLocal);
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LuLuaN0oLEOe6qBFweXVrw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Dodw5ObawU6Ahy1mpF9q+Q", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosParameters$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosParameters$outVars", [{
name: "Parameters",
attrName: "parametersOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BulkSignedPhotoParametersList();
},
complexType: Connect2_LegacySharedModel.BulkSignedPhotoParametersList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getBulkSignedPhotosParameters$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getBulkSignedPhotosParameters$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Parameters: actionResults.parametersOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetBulkSignedPhotosURL", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$BulkSignedPhotoParametersList", "Connect2_LegacyShared.controller$GetBulkSignedPhotosParameters", "Connect2_LegacyShared.model$BulkSignedPhotoResultList", "Connect2_LegacyShared.controller$ServerAction.GetSignedPhotosInBulk", "MemoryClientCache.controller$CacheKeyPart", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.model$TextTextTextRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getBulkSignedPhotosURL$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosURL$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getBulkSignedPhotosURLVar = new OS.DataTypes.VariableHolder();
var getBulkSignedPhotosParametersVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getBulkSignedPhotosURLVar = getBulkSignedPhotosURLVar;
varBag.getBulkSignedPhotosParametersVar = getBulkSignedPhotosParametersVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:BfQdk605tkuAnef6JDPJiw:/ClientActionFlows.BfQdk605tkuAnef6JDPJiw:j4XFsf+4v4Kt_n4HlchwtQ", "Connect2_LegacyShared", "GetBulkSignedPhotosURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lkUb8A9b2EO9SSYla9mLfA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Zj4hMTwuYkyHNlmHaDCB_A", callContext.id);
// Execute Action: GetBulkSignedPhotosParameters
getBulkSignedPhotosParametersVar.value = Connect2_LegacySharedController.default.getBulkSignedPhotosParameters$Action(vars.value.cacheKeysInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JJwScN40XE2L3hsSz9ul2Q", callContext.id);
// Execute Action: GetBulkSignedPhotosURL
return controller.getSignedPhotosInBulk$ServerAction(getBulkSignedPhotosParametersVar.value.parametersOut, callContext).then(function (value) {
getBulkSignedPhotosURLVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bGXDxJXvCE6MhX4ZkqE1zA", callContext.id);
// Results = GetBulkSignedPhotosURL.Results
outVars.value.resultsOut = OS.DataConversion.JSConversions.typeConvertRecordList(getBulkSignedPhotosURLVar.value.resultsOut, new Connect2_LegacySharedModel.TextTextTextRecordList(), function (source, target) {
target.cacheKeyAttr = ((OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(source.bucketAttr, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(source.pathAttr, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(source.typeAttr, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
target.errorAttr = source.errorAttr;
target.valueAttr = source.signedURLAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9y62Wvl+D0WOrYHEWxhjTg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:BfQdk605tkuAnef6JDPJiw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:BfQdk605tkuAnef6JDPJiw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosURL$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSignedPhotosURL$outVars", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.TextTextTextRecordList();
},
complexType: Connect2_LegacySharedModel.TextTextTextRecordList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getBulkSignedPhotosURL$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getBulkSignedPhotosURL$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Results: actionResults.resultsOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetBulkSubdivision_V2", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$CacheableSubdivisionInformationTextTextRecordList", "Connect2_LegacyShared.controller$ServerAction.GetBulkSubdivisions_V2"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getBulkSubdivision_V2$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSubdivision_V2$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getBulkSubdivisions_V2Var = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetBulkSubdivision_V2$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getBulkSubdivisions_V2Var = getBulkSubdivisions_V2Var;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:k7r41oppM0ioIBLSDkYFhg:/ClientActionFlows.k7r41oppM0ioIBLSDkYFhg:kg2XAFCjYXU+I01k72sNyA", "Connect2_LegacyShared", "GetBulkSubdivision_V2", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gNWVNl47206+c2EB3rWeZw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_ASdT5r96U+doKgLPLFjBw", callContext.id);
// Execute Action: GetBulkSubdivisions_V2
return controller.getBulkSubdivisions_V2$ServerAction(vars.value.cacheKeysInLocal, callContext).then(function (value) {
getBulkSubdivisions_V2Var.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0dr1r2QNW0G0_zLotaxKIg", callContext.id);
// Results = GetBulkSubdivisions_V2.Results
outVars.value.resultsOut = getBulkSubdivisions_V2Var.value.resultsOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0W+Sg3xG+Eeo1mO2dB_GeA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:k7r41oppM0ioIBLSDkYFhg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:k7r41oppM0ioIBLSDkYFhg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSubdivision_V2$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetBulkSubdivision_V2$outVars", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecordList();
},
complexType: Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecordList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getBulkSubdivision_V2$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getBulkSubdivision_V2$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Results: actionResults.resultsOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetCacheableCountryInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller$GetCacheableCountryInfo.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$LocalityResultItemWithGPSList", "Connect2_LegacyShared.controller$GetCountryInformation"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, Connect2_LegacyShared_controller_GetCacheableCountryInfo_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableCountryInfo$Action = function (countryCodeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableCountryInfo$vars"))());
vars.value.countryCodeInLocal = countryCodeIn;
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableCountryInfo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:pGbqy+duOkCcnrRxux72Hw:/ClientActionFlows.pGbqy+duOkCcnrRxux72Hw:GsNanNfNjJ7W5pMfbBc_TQ", "Connect2_LegacyShared", "GetCacheableCountryInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:cV7DYy8PGUKMV534JtQe4Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DRUpbu3QyUWZ7nBg7IC_cw", callContext.id) && ((vars.value.countryCodeInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WT3F6bRfs0+e8bGtbXZj6g", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableCountryInfo_CallbacksJS, "Callbacks", "GetCacheableCountryInfo", {
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableCountryInfo$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetCountryInformation: Connect2_LegacySharedController.default.getClientActionProxies(controller).getCountryInformation$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FgZJUL8s5U2KO+a0ztxS0A", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.countries), vars.value.countryCodeInLocal, vars.value.timeToLiveSecondsVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PWxdrDLFYkWa+AfNfEwZFQ", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.localitiesListOut), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iwzDPbi6lUOvvJz9tTCP+g", callContext.id);
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KIO1P7m1GUiHg2SCIS6eEQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4ir2d6vdzUGuGTyqxHK9nQ", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.ObjectNotFound", "Invalid country id");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pGbqy+duOkCcnrRxux72Hw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pGbqy+duOkCcnrRxux72Hw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableCountryInfo$vars", [{
name: "CountryCode",
attrName: "countryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1200;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableCountryInfo$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableCountryInfo$outVars", [{
name: "LocalitiesList",
attrName: "localitiesListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalityResultItemWithGPSList();
},
complexType: Connect2_LegacySharedModel.LocalityResultItemWithGPSList
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableCountryInfo$Action = function (countryCodeIn) {
countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableCountryInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalitiesList: actionResults.localitiesListOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableCountryInfo.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = $actions.GetCountryInformation;
};
});

define("Connect2_LegacyShared.controller$GetCacheableLocality", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller$GetCacheableLocality.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_LegacyShared.controller$GetLocalityInformation"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, Connect2_LegacyShared_controller_GetCacheableLocality_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableLocality$Action = function (localityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableLocality$vars"))());
vars.value.localityIdInLocal = localityIdIn;
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableLocality$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:PmuYtIk2W0SqbG13VOXVlA:/ClientActionFlows.PmuYtIk2W0SqbG13VOXVlA:hbzOhKK9X5fRAN3ZYpc8Dw", "Connect2_LegacyShared", "GetCacheableLocality", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3GXSLkxIY0uTkG9Y98kEVw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jeyPMXMmKE6RvBguXMiePQ", callContext.id) && !(vars.value.localityIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8Dm1jySmt06FTUMrBF52Vg", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableLocality_CallbacksJS, "Callbacks", "GetCacheableLocality", {
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableLocality$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetLocalityInformation: Connect2_LegacySharedController.default.getClientActionProxies(controller).getLocalityInformation$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LEhQghAZjUWMSz4eEi4U3w", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.localities), OS.BuiltinFunctions.longIntegerToText(vars.value.localityIdInLocal), vars.value.timeToLiveSecondsVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:798Y1XnkZ0GQwfJhJhDVOw", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.localityInformationOut), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ug+124pB7UevdBcgOkyAKg", callContext.id);
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:s5wgMZRkd0ONm69JO+PDGA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uOpr11CMJkKQtAuLvMh7Vw", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.ObjectNotFound", "Invalid locality id");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:PmuYtIk2W0SqbG13VOXVlA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:PmuYtIk2W0SqbG13VOXVlA", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableLocality$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1200;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableLocality$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableLocality$outVars", [{
name: "LocalityInformation",
attrName: "localityInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableLocalityInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableLocalityInformationRec
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableLocality$Action = function (localityIdIn) {
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableLocality$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalityInformation: actionResults.localityInformationOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableLocality.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = function(localityId) {
    return $actions.GetLocalityInformation(Number(localityId));
};
};
});

define("Connect2_LegacyShared.controller$GetCacheableMemberContactList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller$GetCacheableMemberContactList.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "Connect2_LegacyShared.controller$BuildMemberContactsCacheKey", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$GetMemberContactList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, Connect2_LegacyShared_controller_GetCacheableMemberContactList_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableMemberContactList$Action = function (memberIdListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableMemberContactList$vars"))());
vars.value.memberIdListInLocal = memberIdListIn.clone();
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var buildMemberContactsCacheKeysVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableMemberContactList$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.buildMemberContactsCacheKeysVar = buildMemberContactsCacheKeysVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:BjwPGi7Hp0KoLkzw6GPVUg:/ClientActionFlows.BjwPGi7Hp0KoLkzw6GPVUg:nXMaegvqSoJuF6Pny1ckyw", "Connect2_LegacyShared", "GetCacheableMemberContactList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Eor2G1ARK02einR2oXCcig", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9ketND3DNEytC_bmRrdxmA", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableMemberContactList_CallbacksJS, "Callbacks", "GetCacheableMemberContactList", {
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableMemberContactList$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetMemberContactList: Connect2_LegacySharedController.default.getClientActionProxies(controller).getMemberContactList$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Nu0zhvpdvUqSP8qVOoeKXg", callContext.id);
// Execute Action: BuildMemberContactsCacheKeys
buildMemberContactsCacheKeysVar.value = Connect2_LegacySharedController.default.buildMemberContactsCacheKey$Action(vars.value.memberIdListInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZuadfissJUC8b3g9GMjMIg", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.memberContact), buildMemberContactsCacheKeysVar.value.cacheKeyOut, vars.value.timeToLiveVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+rpCtSLjRE292bJektGW2A", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.memberContactListOut), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HscFQveSUkeD9gQRLHnbXQ", callContext.id);
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vhhrQAcOsEeL5QmWM1A97w", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:BjwPGi7Hp0KoLkzw6GPVUg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:BjwPGi7Hp0KoLkzw6GPVUg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableMemberContactList$vars", [{
name: "MemberIdList",
attrName: "memberIdListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.LongIntegerList();
},
complexType: OS.DataTypes.LongIntegerList
}, {
name: "TimeToLive",
attrName: "timeToLiveVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 300;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableMemberContactList$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableMemberContactList$outVars", [{
name: "MemberContactList",
attrName: "memberContactListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.MemberContactWithTimezoneList();
},
complexType: Connect2_LegacySharedModel.MemberContactWithTimezoneList
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableMemberContactList$Action = function (memberIdListIn) {
memberIdListIn = (memberIdListIn === undefined) ? new OS.DataTypes.LongIntegerList() : memberIdListIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableMemberContactList$Action.bind(controller, memberIdListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MemberContactList: actionResults.memberContactListOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableMemberContactList.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = $actions.GetMemberContactList;

};
});

define("Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$CountryWithMapPositionList", "Connect2_LegacyShared.controller$GetRegionSubscribedCountries"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, Connect2_LegacyShared_controller_GetCacheableRegionSubscribedCountries_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableRegionSubscribedCountries$Action = function (subscriptionRegionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableRegionSubscribedCountries$vars"))());
vars.value.subscriptionRegionIdInLocal = subscriptionRegionIdIn;
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableRegionSubscribedCountries$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:2Y38d8CR1USoux1ue6Gpew:/ClientActionFlows.2Y38d8CR1USoux1ue6Gpew:AwW6qUqj61ICXYsishrHcw", "Connect2_LegacyShared", "GetCacheableRegionSubscribedCountries", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:p8S_9C1QXUy35eFDoTJ9Bw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PVJoJdSYJ0+Pw5r8KjlGhg", callContext.id) && ((vars.value.subscriptionRegionIdInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hiaFHPzlo0mWS3QAH_wkhA", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableRegionSubscribedCountries_CallbacksJS, "Callbacks", "GetCacheableRegionSubscribedCountries", {
SubscriptionRegionId: OS.DataConversion.JSNodeParamConverter.to(vars.value.subscriptionRegionIdInLocal, OS.DataTypes.DataTypes.Text),
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableRegionSubscribedCountries$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetRegionSubscribedCountries: Connect2_LegacySharedController.default.getClientActionProxies(controller).getRegionSubscribedCountries$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XVpbL8wxT0Gfr6av5yXLUA", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.regionSubscribedCountries), vars.value.subscriptionRegionIdInLocal, vars.value.timeToLiveSecondsVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CAYRod2RdUqDOJndxJ6Erw", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.countryWithMapPositionOut), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2qFuZ4e4m0eHnQnZUCZxxw", callContext.id);
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F_RxT2V+u02soveBfeH9Rg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wOj2PO+mP0mvUncV8W4a1w", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.ObjectNotFound", "Invalid country id");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:2Y38d8CR1USoux1ue6Gpew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:2Y38d8CR1USoux1ue6Gpew", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableRegionSubscribedCountries$vars", [{
name: "SubscriptionRegionId",
attrName: "subscriptionRegionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1200;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableRegionSubscribedCountries$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableRegionSubscribedCountries$outVars", [{
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}, {
name: "CountryWithMapPosition",
attrName: "countryWithMapPositionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.CountryWithMapPositionList();
},
complexType: Connect2_LegacySharedModel.CountryWithMapPositionList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableRegionSubscribedCountries$Action = function (subscriptionRegionIdIn) {
subscriptionRegionIdIn = (subscriptionRegionIdIn === undefined) ? "" : subscriptionRegionIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableRegionSubscribedCountries$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(subscriptionRegionIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheResult: actionResults.cacheResultOut,
CountryWithMapPosition: actionResults.countryWithMapPositionOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableRegionSubscribedCountries.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = $actions.GetRegionSubscribedCountries;

$parameters.GetObjectCallback = function() { 
    return $actions.GetRegionSubscribedCountries($parameters.SubscriptionRegionId); 
};
};
});

define("Connect2_LegacyShared.controller$GetCacheableSignedImageURL", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL.CallbacksJS", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL.ResultURLJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObjectInBulk", "MemoryClientCache.controller$CacheKeyPart", "Connect2_LegacyShared.controller$GetCacheableSignedImageURLCacheKey", "Connect2_LegacyShared.model$TextTextTextRecordList", "Connect2_LegacyShared.controller$GetBulkSignedImageURL"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, Connect2_LegacyShared_controller_GetCacheableSignedImageURL_CallbacksJS, Connect2_LegacyShared_controller_GetCacheableSignedImageURL_ResultURLJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action = function (entityIdIn, typeIn, sizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$vars"))());
vars.value.entityIdInLocal = entityIdIn;
vars.value.typeInLocal = typeIn;
vars.value.sizeInLocal = sizeIn;
var getCacheableObjectInBulkVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var resultURLJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectInBulkVar = getCacheableObjectInBulkVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.resultURLJSResult = resultURLJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:I3yGjiPwAEe7_FItyrXAug:/ClientActionFlows.I3yGjiPwAEe7_FItyrXAug:EIcVB1kEz9qm0yDJlmveLQ", "Connect2_LegacyShared", "GetCacheableSignedImageURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zfGfx5iaO0K3LE7F_MAyBg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PPTAFXNaB06mvBGpuhwO3Q", callContext.id) && (!(vars.value.entityIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) && ((vars.value.typeInLocal) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NQQWC2jBCUGjtOmSSs3pcQ", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableSignedImageURL_CallbacksJS, "Callbacks", "GetCacheableSignedImageURL", {
GetObjectBulkCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$callbacksJSResult"))();
jsNodeResult.getObjectBulkCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectBulkCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetBulkSignedImageURL: Connect2_LegacySharedController.default.getClientActionProxies(controller).getBulkSignedImageURL$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:P6951floRkG7NC8zzp5G9Q", callContext.id);
// Execute Action: GetCacheableObjectInBulk
return MemoryClientCacheController.default.getCacheableObjectInBulk$Action(OS.BuiltinFunctions.textToIdentifier(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.getCacheableSignedImageURLCacheKey$Action(vars.value.typeInLocal, callContext).cacheKeyOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)), ((OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(OS.BuiltinFunctions.longIntegerToText(vars.value.entityIdInLocal), callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.typeInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.sizeInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)), vars.value.timeToLiveVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectBulkCallbackOut, OS.BuiltinFunctions.integerToLongInteger(15), callContext).then(function (value) {
getCacheableObjectInBulkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aBbJ6R1_vUaeD3rZj5rStw", callContext.id);
resultURLJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableSignedImageURL_ResultURLJS, "ResultURL", "GetCacheableSignedImageURL", {
Object: OS.DataConversion.JSNodeParamConverter.to(getCacheableObjectInBulkVar.value.objectOut, OS.DataTypes.DataTypes.Object),
URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$resultURLJSResult"))();
jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:x7yA1xEvV0eQRNO7G1lh3Q", callContext.id);
// URL = ResultURL.URL
outVars.value.uRLOut = resultURLJSResult.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:x6ixkjBoT0qnmaqlncFHfQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tgoftIcOxUa6sqmJamXWMA", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:I3yGjiPwAEe7_FItyrXAug", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:I3yGjiPwAEe7_FItyrXAug", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$vars", [{
name: "EntityId",
attrName: "entityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Size",
attrName: "sizeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TimeToLive",
attrName: "timeToLiveVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 300;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$callbacksJSResult", [{
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$resultURLJSResult", [{
name: "URL",
attrName: "uRLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURL$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableSignedImageURL$Action = function (entityIdIn, typeIn, sizeIn) {
entityIdIn = (entityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : entityIdIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
sizeIn = (sizeIn === undefined) ? "" : sizeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(entityIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), sizeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableSignedImageURL.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectBulkCallback = $actions.GetBulkSignedImageURL;
};
});
define("Connect2_LegacyShared.controller$GetCacheableSignedImageURL.ResultURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.URL = $parameters.Object  || "";
};
});

define("Connect2_LegacyShared.controller$GetCacheableSignedImageURLCacheKey", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableSignedImageURLCacheKey$Action = function (typeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURLCacheKey$vars"))());
vars.value.typeInLocal = typeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURLCacheKey$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:aNtG266odkCxCiTT_4xKaQ:/ClientActionFlows.aNtG266odkCxCiTT_4xKaQ:V+hsFXqzskpHVc+W1X4YpQ", "Connect2_LegacyShared", "GetCacheableSignedImageURLCacheKey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rf87rOUv50OMFShhc7tkPw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nkQwDOCnwEeDMUiDEvZxUw", callContext.id) && (vars.value.typeInLocal === Connect2_LegacySharedModel.staticEntities.directoryAPIFilter.household))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uycHfrUfuEiIVZV0NvN0kA", callContext.id);
// CacheKey = ImagesHousehold
outVars.value.cacheKeyOut = Connect2_LegacySharedModel.staticEntities.directoryCacheType.imagesHousehold;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F6j_LlkxkUyX5lIgRMoEFg", callContext.id);
} else {
if((vars.value.typeInLocal === Connect2_LegacySharedModel.staticEntities.directoryAPIFilter.member)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bVJEhC3iPU+tAeD_0Gkzsg", callContext.id);
// CacheKey = ImagesMember
outVars.value.cacheKeyOut = Connect2_LegacySharedModel.staticEntities.directoryCacheType.imagesMember;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F6j_LlkxkUyX5lIgRMoEFg", callContext.id);
} else {
if((vars.value.typeInLocal === Connect2_LegacySharedModel.staticEntities.directoryAPIFilter.locality)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BqD_Xs7O+kyrnYhO76qmPA", callContext.id);
// CacheKey = ImagesLocalities
outVars.value.cacheKeyOut = Connect2_LegacySharedModel.staticEntities.directoryCacheType.imagesLocalities;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F6j_LlkxkUyX5lIgRMoEFg", callContext.id);
} else {
if((vars.value.typeInLocal === Connect2_LegacySharedModel.staticEntities.directoryAPIFilter.subdivision)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EkibQWYehEi+sHU0UDBXfQ", callContext.id);
// CacheKey = ImagesSubdivision
outVars.value.cacheKeyOut = Connect2_LegacySharedModel.staticEntities.directoryCacheType.imagesSubdivision;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F6j_LlkxkUyX5lIgRMoEFg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YPS3JOs2DEmiOfIPrKjDGQ", callContext.id);
// CacheKey = Images
outVars.value.cacheKeyOut = Connect2_LegacySharedModel.staticEntities.directoryCacheType.images;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MratKOhwD0eGs733JBKXQA", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aNtG266odkCxCiTT_4xKaQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURLCacheKey$vars", [{
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedImageURLCacheKey$outVars", [{
name: "CacheKey",
attrName: "cacheKeyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableSignedImageURLCacheKey$Action = function (typeIn) {
typeIn = (typeIn === undefined) ? "" : typeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableSignedImageURLCacheKey$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheKey: OS.DataConversion.JSNodeParamConverter.to(actionResults.cacheKeyOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL.ResultURLJS", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObjectInBulk", "MemoryClientCache.controller$CacheKeyPart", "Connect2_LegacyShared.model$TextTextTextRecordList", "Connect2_LegacyShared.controller$GetBulkSignedPhotosURL"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, Connect2_LegacyShared_controller_GetCacheableSignedPhotoURL_ResultURLJS, Connect2_LegacyShared_controller_GetCacheableSignedPhotoURL_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableSignedPhotoURL$Action = function (bucketIn, pathIn, typeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$vars"))());
vars.value.bucketInLocal = bucketIn;
vars.value.pathInLocal = pathIn;
vars.value.typeInLocal = typeIn;
var getCacheableObjectInBulkVar = new OS.DataTypes.VariableHolder();
var resultURLJSResult = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectInBulkVar = getCacheableObjectInBulkVar;
varBag.resultURLJSResult = resultURLJSResult;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:M1v_7efOtk6Kr9_YJOvuYg:/ClientActionFlows.M1v_7efOtk6Kr9_YJOvuYg:0gs9Yz8CDwHzXBgkWU3AVw", "Connect2_LegacyShared", "GetCacheableSignedPhotoURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:g3PIQtjKQEqPJnBo5Z+xFw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:v9yE8u1GL0GMUSS52hh2Og", callContext.id) && ((((vars.value.bucketInLocal) !== ("")) && ((vars.value.pathInLocal) !== (""))) && ((vars.value.typeInLocal) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Z8Am2MrZTU6SRrwsDK_FFw", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableSignedPhotoURL_CallbacksJS, "Callbacks", "GetCacheableSignedPhotoURL", {
GetObjectBulkCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$callbacksJSResult"))();
jsNodeResult.getObjectBulkCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectBulkCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetBulkSignedPhotosURL: Connect2_LegacySharedController.default.getClientActionProxies(controller).getBulkSignedPhotosURL$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PjnnEeE2SkiIvEZTdkeY_w", callContext.id);
// Execute Action: GetCacheableObjectInBulk
return MemoryClientCacheController.default.getCacheableObjectInBulk$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.photos), ((OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.bucketInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.pathInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.typeInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)), vars.value.timeToLiveVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectBulkCallbackOut, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectInBulkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_2jDS6mPDkK9neT5_ZimkA", callContext.id);
resultURLJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableSignedPhotoURL_ResultURLJS, "ResultURL", "GetCacheableSignedPhotoURL", {
Object: OS.DataConversion.JSNodeParamConverter.to(getCacheableObjectInBulkVar.value.objectOut, OS.DataTypes.DataTypes.Object),
URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$resultURLJSResult"))();
jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ezSy0TwWYEe_q5Tae0FLGg", callContext.id);
// URL = ResultURL.URL
outVars.value.uRLOut = resultURLJSResult.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:J3EQ7DBca0aweWMDiroUxw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zfNbsvxaLEaZSi2JHrOEfA", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:M1v_7efOtk6Kr9_YJOvuYg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:M1v_7efOtk6Kr9_YJOvuYg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$vars", [{
name: "Bucket",
attrName: "bucketInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TimeToLive",
attrName: "timeToLiveVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 300;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$resultURLJSResult", [{
name: "URL",
attrName: "uRLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$callbacksJSResult", [{
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSignedPhotoURL$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableSignedPhotoURL$Action = function (bucketIn, pathIn, typeIn) {
bucketIn = (bucketIn === undefined) ? "" : bucketIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableSignedPhotoURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bucketIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL.ResultURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.URL = $parameters.Object || "";
};
});
define("Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectBulkCallback = $actions.GetBulkSignedPhotosURL;
};
});

define("Connect2_LegacyShared.controller$GetCacheableSubdivision_V2", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "Connect2_LegacyShared.controller$GetCacheableSubdivision_V2.CallbacksJS", "Connect2_LegacyShared.clientVariables", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObjectInBulk", "Connect2_LegacyShared.model$CacheableSubdivisionInformationTextTextRecordList", "Connect2_LegacyShared.controller$GetBulkSubdivision_V2", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, NavigationHandlerController, MemoryClientCacheModel, MemoryClientCacheController, Connect2_LegacyShared_controller_GetCacheableSubdivision_V2_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableSubdivision_V2$Action = function (subdivisionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSubdivision_V2$vars"))());
vars.value.subdivisionIdInLocal = subdivisionIdIn;
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var getCacheableObjectInBulkVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSubdivision_V2$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.getCacheableObjectInBulkVar = getCacheableObjectInBulkVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Om9LW041tEOu0KnScvbfcg:/ClientActionFlows.Om9LW041tEOu0KnScvbfcg:LgnwOKyIYAKE_nh2Dfp_Eg", "Connect2_LegacyShared", "GetCacheableSubdivision_V2", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:S+VHdbtnW0Sril4GHQJ4MA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uQyA5K5CSEqHLi58RR+I6w", callContext.id) && !(vars.value.subdivisionIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fdC2JZ32xkGmfJwAukXXaw", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableSubdivision_V2_CallbacksJS, "Callbacks", "GetCacheableSubdivision_V2", {
GetObjectBulkCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableSubdivision_V2$callbacksJSResult"))();
jsNodeResult.getObjectBulkCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectBulkCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetBulkSubdivision_V2: Connect2_LegacySharedController.default.getClientActionProxies(controller).getBulkSubdivision_V2$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UKbdzxREt0mCG3v1sQ1nTA", callContext.id);
// Execute Action: GetCacheableObjectInBulk
return MemoryClientCacheController.default.getCacheableObjectInBulk$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.assembleSubdivision), OS.BuiltinFunctions.longIntegerToText(vars.value.subdivisionIdInLocal), vars.value.timeToLiveVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectBulkCallbackOut, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectInBulkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iecxrqvAt0+I7UHAwusX+g", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.subdivisionInformationOut), getCacheableObjectInBulkVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LWSKeynid0mWXxhx5orDPw", callContext.id);
// CacheResult = GetCacheableObjectInBulk.CacheResult
outVars.value.cacheResultOut = getCacheableObjectInBulkVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LYUqBJY3c06phLWYT_9srw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+NQMvuBQTUS_p8OT50UO5A", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.ObjectNotFound", "Invalid subdivision id");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Om9LW041tEOu0KnScvbfcg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Om9LW041tEOu0KnScvbfcg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSubdivision_V2$vars", [{
name: "SubdivisionId",
attrName: "subdivisionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "TimeToLive",
attrName: "timeToLiveVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 300;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSubdivision_V2$callbacksJSResult", [{
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableSubdivision_V2$outVars", [{
name: "SubdivisionInformation",
attrName: "subdivisionInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableSubdivisionInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableSubdivisionInformationRec
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableSubdivision_V2$Action = function (subdivisionIdIn) {
subdivisionIdIn = (subdivisionIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : subdivisionIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableSubdivision_V2$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(subdivisionIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SubdivisionInformation: actionResults.subdivisionInformationOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableSubdivision_V2.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectBulkCallback = $actions.GetBulkSubdivision_V2;
};
});

define("Connect2_LegacyShared.controller$GetCacheableTimezoneInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.controller$GetCacheableTimezoneInfo.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$GetTimezoneInformation"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, APIDomain_Directory_ISModel, Connect2_LegacyShared_controller_GetCacheableTimezoneInfo_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action = function (localityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableTimezoneInfo$vars"))());
vars.value.localityIdInLocal = localityIdIn;
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableTimezoneInfo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ZVeOcpLEd0iScjqEX4lHJg:/ClientActionFlows.ZVeOcpLEd0iScjqEX4lHJg:94BCemrIumSbyzh+rKxmow", "Connect2_LegacyShared", "GetCacheableTimezoneInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:c+tefYVUEUG6BgAezFrBgw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OkaTAzt_bES+Y+gsGZ0dHA", callContext.id) && !(vars.value.localityIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vacJq0MfHkire8SLZvTTvQ", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableTimezoneInfo_CallbacksJS, "Callbacks", "GetCacheableTimezoneInfo", {
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableTimezoneInfo$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetTimezoneInformation: Connect2_LegacySharedController.default.getClientActionProxies(controller).getTimezoneInformation$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QTJNUvM5R0aoeZ3c1u0QDg", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.timezone), OS.BuiltinFunctions.longIntegerToText(vars.value.localityIdInLocal), vars.value.timeToLiveSecondsVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:r6jJrLKTD0G80ARZWlmu6w", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.timezoneResponseOut), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:obHq6rtZqkmdaa8CxEu1Cg", callContext.id);
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AhYg09wf40iQ5dHv2rbSWw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_t6wYx81yU2QJLyDqRf0+Q", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.ObjectNotFound", "Invalid country id");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ZVeOcpLEd0iScjqEX4lHJg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ZVeOcpLEd0iScjqEX4lHJg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableTimezoneInfo$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1200;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableTimezoneInfo$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableTimezoneInfo$outVars", [{
name: "TimezoneResponse",
attrName: "timezoneResponseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.TimezoneRec();
},
complexType: APIDomain_Directory_ISModel.TimezoneRec
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableTimezoneInfo$Action = function (localityIdIn) {
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableTimezoneInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TimezoneResponse: actionResults.timezoneResponseOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableTimezoneInfo.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = function(localityId) {
    return $actions.GetTimezoneInformation(Number(localityId));
};
};
});

define("Connect2_LegacyShared.controller$GetCacheableUserInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.controller$GetCacheableUserInfo.CallbacksJS", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$GetUserInformation"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, APIDomain_Directory_ISModel, Connect2_LegacyShared_controller_GetCacheableUserInfo_CallbacksJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCacheableUserInfo$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableUserInfo$vars"))());
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableUserInfo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:_BviJu2xEE6g_TzQcC1KUA:/ClientActionFlows._BviJu2xEE6g_TzQcC1KUA:G+PUsbSi0L3KQolT9yndMQ", "Connect2_LegacyShared", "GetCacheableUserInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vsjYg7y1SEOha4XXykS7lQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wLniiGX9R06s1AnBDvwrjw", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kl1wZ5Mb6UGDDNQr5ZS76A", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetCacheableUserInfo_CallbacksJS, "Callbacks", "GetCacheableUserInfo", {
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCacheableUserInfo$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
GetUserInformation: Connect2_LegacySharedController.default.getClientActionProxies(controller).getUserInformation$Action
}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:g8ofYCzgcUuO7cq3p42QYA", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.user), "UserInfo", vars.value.timeToLiveSecondsVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MvQd9l3_IUS1DpOssSpigQ", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(vars.value.cacheableUserDetailsVar), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fp+yJUCLS06DKCwXi5uEiA", callContext.id);
// UserInformation = CacheableUserDetails
outVars.value.userInformationOut = vars.value.cacheableUserDetailsVar;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fp+yJUCLS06DKCwXi5uEiA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vCpu3Lep70OG1g7OQzysTg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tVNSUzrl1EKUVNSZxwWJjA", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.ObjectNotFound", "User is not logged in");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_BviJu2xEE6g_TzQcC1KUA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_BviJu2xEE6g_TzQcC1KUA", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableUserInfo$vars", [{
name: "CacheableUserDetails",
attrName: "cacheableUserDetailsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Users_Current_GETResponseRec();
},
complexType: APIDomain_Directory_ISModel.Users_Current_GETResponseRec
}, {
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 7200;
}
}, {
name: "Timeout",
attrName: "timeoutVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 10;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableUserInfo$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCacheableUserInfo$outVars", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Users_Current_GETResponseRec();
},
complexType: APIDomain_Directory_ISModel.Users_Current_GETResponseRec
}, {
name: "CacheResult",
attrName: "cacheResultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new MemoryClientCacheModel.MemoryCacheResultRec();
},
complexType: MemoryClientCacheModel.MemoryCacheResultRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCacheableUserInfo$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCacheableUserInfo$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UserInformation: actionResults.userInformationOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("Connect2_LegacyShared.controller$GetCacheableUserInfo.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = function() {
    return $actions.GetUserInformation();
};
};
});

define("Connect2_LegacyShared.controller$GetCachedMyBookmarks", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "NavigationHandler.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.controller$GetCachedObject", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "NavigationHandler.controller$AssignFromObject", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_LegacyShared.model$BookmarkItemList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, NavigationHandlerController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCachedMyBookmarks$Action = function (groupIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCachedMyBookmarks$vars"))());
vars.value.groupInLocal = groupIn;
var getCachedObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCachedMyBookmarks$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCachedObjectVar = getCachedObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:RpydS0hKZkuECG_SsUeE4A:/ClientActionFlows.RpydS0hKZkuECG_SsUeE4A:_AEaCSppCT8fjKUS44yE4w", "Connect2_LegacyShared", "GetCachedMyBookmarks", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UFOsJaciDEeWW2ED085YXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:laHhR5luFE+S4+OumgXqZQ", callContext.id);
// Execute Action: GetCachedObject
getCachedObjectVar.value = MemoryClientCacheController.default.getCachedObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.myBookmarks), vars.value.groupInLocal, callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Pil7cz6UHkSURnvU+UAnGg", callContext.id) && getCachedObjectVar.value.cacheHitOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:yD_gytfiz0ayp7BmQrD5aw", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(outVars.value.bookmarksOut), getCachedObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lZ175uqv9ES2aYmaT_5+UQ", callContext.id);
// CacheHit = True
outVars.value.cacheHitOut = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RcvpGBxxs0mA7p9Hy9AxxA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6uHNeeWuNUyNv7SSTAZvmA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RpydS0hKZkuECG_SsUeE4A", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCachedMyBookmarks$vars", [{
name: "Group",
attrName: "groupInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCachedMyBookmarks$outVars", [{
name: "Bookmarks",
attrName: "bookmarksOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BookmarkItemList();
},
complexType: Connect2_LegacySharedModel.BookmarkItemList
}, {
name: "CacheHit",
attrName: "cacheHitOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCachedMyBookmarks$Action = function (groupIn) {
groupIn = (groupIn === undefined) ? "" : groupIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCachedMyBookmarks$Action.bind(controller, groupIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Bookmarks: actionResults.bookmarksOut,
CacheHit: OS.DataConversion.JSNodeParamConverter.to(actionResults.cacheHitOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_LegacyShared.controller$GetCallPopupReadyInfo", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$GetTargetLocalTimeByCalculatedOffset", "Connect2_LegacyShared.controller$PrefixToCallName", "Connect2_LegacyShared.model$CallInfoStructureRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCallPopupReadyInfo$Action = function (in_PhoneNumberIn, in_CallNameIn, in_TimezoneLabelIn, in_TimezoneOffsetInSecondsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCallPopupReadyInfo$vars"))());
vars.value.in_PhoneNumberInLocal = in_PhoneNumberIn;
vars.value.in_CallNameInLocal = in_CallNameIn;
vars.value.in_TimezoneLabelInLocal = in_TimezoneLabelIn;
vars.value.in_TimezoneOffsetInSecondsInLocal = in_TimezoneOffsetInSecondsIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCallPopupReadyInfo$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:WhuV4p0INkuMumudOHlUhA:/ClientActionFlows.WhuV4p0INkuMumudOHlUhA:MPABMMZTBH1_wOAm6Im1Uw", "Connect2_LegacyShared", "GetCallPopupReadyInfo", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wRY39KE7k0GSbeyC1EV72A", callContext.id);
// ShowCallInfo
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yk1OK7nl70uvnJMAgBrzTQ", callContext.id);
// Out_CallInfoStructure.CallPhone = In_PhoneNumber
outVars.value.out_CallInfoStructureOut.callPhoneAttr = vars.value.in_PhoneNumberInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yk1OK7nl70uvnJMAgBrzTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_CallInfoStructure.CallName = PrefixToCallName(In_CallName)
outVars.value.out_CallInfoStructureOut.callNameAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.prefixToCallName$Action(vars.value.in_CallNameInLocal, callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yk1OK7nl70uvnJMAgBrzTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_CallInfoStructure.LocalTimezoneLabel = In_TimezoneLabel
outVars.value.out_CallInfoStructureOut.localTimezoneLabelAttr = vars.value.in_TimezoneLabelInLocal;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yk1OK7nl70uvnJMAgBrzTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_CallInfoStructure.LocalTime = GetTargetLocalTimeByCalculatedOffset(In_TimezoneOffsetInSeconds)
outVars.value.out_CallInfoStructureOut.localTimeAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.getTargetLocalTimeByCalculatedOffset$Action(vars.value.in_TimezoneOffsetInSecondsInLocal, callContext).out_FormattedTargetTimezoneLocalTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yk1OK7nl70uvnJMAgBrzTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Out_CallInfoStructure.ShowCallPopup = False
outVars.value.out_CallInfoStructureOut.showCallPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Har59NimrEqorBgz_5APUA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:WhuV4p0INkuMumudOHlUhA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCallPopupReadyInfo$vars", [{
name: "In_PhoneNumber",
attrName: "in_PhoneNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_CallName",
attrName: "in_CallNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_TimezoneLabel",
attrName: "in_TimezoneLabelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_TimezoneOffsetInSeconds",
attrName: "in_TimezoneOffsetInSecondsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCallPopupReadyInfo$outVars", [{
name: "Out_CallInfoStructure",
attrName: "out_CallInfoStructureOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CallInfoStructureRec();
},
complexType: Connect2_LegacySharedModel.CallInfoStructureRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCallPopupReadyInfo$Action = function (in_PhoneNumberIn, in_CallNameIn, in_TimezoneLabelIn, in_TimezoneOffsetInSecondsIn) {
in_PhoneNumberIn = (in_PhoneNumberIn === undefined) ? "" : in_PhoneNumberIn;
in_CallNameIn = (in_CallNameIn === undefined) ? "" : in_CallNameIn;
in_TimezoneLabelIn = (in_TimezoneLabelIn === undefined) ? "" : in_TimezoneLabelIn;
in_TimezoneOffsetInSecondsIn = (in_TimezoneOffsetInSecondsIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_TimezoneOffsetInSecondsIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCallPopupReadyInfo$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_PhoneNumberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_CallNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_TimezoneLabelIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_TimezoneOffsetInSecondsIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_CallInfoStructure: actionResults.out_CallInfoStructureOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetCountryInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalityResultItemWithGPSList", "Connect2_LegacyShared.controller$ServerAction.GetUserLocalitiesForCountryCodeWithGPS"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCountryInformation$Action = function (countryCodeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCountryInformation$vars"))());
vars.value.countryCodeInLocal = countryCodeIn;
var getUserLocalitiesForCountryCodeWithGPSVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetCountryInformation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getUserLocalitiesForCountryCodeWithGPSVar = getUserLocalitiesForCountryCodeWithGPSVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Nja+WGieIEKXqRiZqDj2_A:/ClientActionFlows.Nja+WGieIEKXqRiZqDj2_A:C31Cv9WZxQUUm5R5UK+o4Q", "Connect2_LegacyShared", "GetCountryInformation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1HcdafUjf0uCM8WHBP0_FA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3_uHn9FJ50mo5QETM+4vGA", callContext.id);
// Execute Action: GetUserLocalitiesForCountryCodeWithGPS
return controller.getUserLocalitiesForCountryCodeWithGPS$ServerAction(vars.value.countryCodeInLocal, callContext).then(function (value) {
getUserLocalitiesForCountryCodeWithGPSVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NdHa5ubOL0G3QdE_UN48UQ", callContext.id);
// LocalitiesList = GetUserLocalitiesForCountryCodeWithGPS.Results
outVars.value.localitiesListOut = getUserLocalitiesForCountryCodeWithGPSVar.value.resultsOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jU85mYYOrUeHLANzG44GCA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Nja+WGieIEKXqRiZqDj2_A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Nja+WGieIEKXqRiZqDj2_A", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCountryInformation$vars", [{
name: "CountryCode",
attrName: "countryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetCountryInformation$outVars", [{
name: "LocalitiesList",
attrName: "localitiesListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalityResultItemWithGPSList();
},
complexType: Connect2_LegacySharedModel.LocalityResultItemWithGPSList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getCountryInformation$Action = function (countryCodeIn) {
countryCodeIn = (countryCodeIn === undefined) ? "" : countryCodeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getCountryInformation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countryCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalitiesList: actionResults.localitiesListOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetHostConfigByConfigId", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfigRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getHostConfigByConfigId$Action = function (in_ConfigIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetHostConfigByConfigId$vars"))());
vars.value.in_ConfigIdInLocal = in_ConfigIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetHostConfigByConfigId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4MYr_I_waUeLk+HnxiOX7Q:/ClientActionFlows.4MYr_I_waUeLk+HnxiOX7Q:_EqGHr+CaM7xAAsTmUQxsQ", "Connect2_LegacyShared", "GetHostConfigByConfigId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:efg2wJ4tt0COqrX713KiRQ", callContext.id);
// Check Config Id
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wfALuKOH606OH6rmwNqVhw", callContext.id) && (vars.value.in_ConfigIdInLocal === Connect2_LegacySharedModel.staticEntities.adaptiveCardsConfig.events))) {
// Events Config
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id);
// Out_HostConfig.Spacing.Small = 8
outVars.value.out_HostConfigOut.spacingAttr.smallAttr = OS.BuiltinFunctions.integerToLongInteger(8);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_HostConfig.Spacing.Default = 12
outVars.value.out_HostConfigOut.spacingAttr.defaultAttr = OS.BuiltinFunctions.integerToLongInteger(12);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_HostConfig.Spacing.Medium = 17
outVars.value.out_HostConfigOut.spacingAttr.mediumAttr = OS.BuiltinFunctions.integerToLongInteger(17);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_HostConfig.Spacing.Large = 23
outVars.value.out_HostConfigOut.spacingAttr.largeAttr = OS.BuiltinFunctions.integerToLongInteger(23);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Out_HostConfig.Spacing.ExtraLarge = 27
outVars.value.out_HostConfigOut.spacingAttr.extraLargeAttr = OS.BuiltinFunctions.integerToLongInteger(27);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Out_HostConfig.Spacing.Padding = 12
outVars.value.out_HostConfigOut.spacingAttr.paddingAttr = OS.BuiltinFunctions.integerToLongInteger(12);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// Out_HostConfig.FontTypes.Default.FontFamily = "Roboto"
outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontFamilyAttr = "Roboto";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// Out_HostConfig.FontTypes.Default.FontSizes.Small = 12
outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontSizesAttr.smallAttr = OS.BuiltinFunctions.integerToLongInteger(12);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// Out_HostConfig.FontTypes.Default.FontSizes.Default = 14
outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontSizesAttr.defaultAttr = OS.BuiltinFunctions.integerToLongInteger(14);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// Out_HostConfig.FontTypes.Default.FontSizes.Medium = 16
outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontSizesAttr.mediumAttr = OS.BuiltinFunctions.integerToLongInteger(16);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
// Out_HostConfig.FontTypes.Default.FontSizes.Large = 18
outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontSizesAttr.largeAttr = OS.BuiltinFunctions.integerToLongInteger(18);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "12");
// Out_HostConfig.FontTypes.Default.FontSizes.ExtraLarge = 20
outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontSizesAttr.extraLargeAttr = OS.BuiltinFunctions.integerToLongInteger(20);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "13");
// Out_HostConfig.FontTypes.Monospace.FontFamily = "Roboto Mono"
outVars.value.out_HostConfigOut.fontTypesAttr.monospaceAttr.fontFamilyAttr = "Roboto Mono";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_UsaDCqd5kq4m7Rv9pClFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "14");
// Out_HostConfig.FontTypes.Monospace.FontSizes = Out_HostConfig.FontTypes.Default.FontSizes
outVars.value.out_HostConfigOut.fontTypesAttr.monospaceAttr.fontSizesAttr = outVars.value.out_HostConfigOut.fontTypesAttr.defaultAttr.fontSizesAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2Nx3GUyhg06jX0uifprUiA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1rTKl7IiDkWbaR2SS75zoQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4MYr_I_waUeLk+HnxiOX7Q", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetHostConfigByConfigId$vars", [{
name: "In_ConfigId",
attrName: "in_ConfigIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetHostConfigByConfigId$outVars", [{
name: "Out_HostConfig",
attrName: "out_HostConfigOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.HostConfigRec();
},
complexType: Connect2_LegacySharedModel.HostConfigRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getHostConfigByConfigId$Action = function (in_ConfigIdIn) {
in_ConfigIdIn = (in_ConfigIdIn === undefined) ? 0 : in_ConfigIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getHostConfigByConfigId$Action.bind(controller, in_ConfigIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HostConfig: actionResults.out_HostConfigOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetIOSPlatform", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$GetIOSPlatform.GetPlatformIOS_PreventSwipeJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_GetIOSPlatform_GetPlatformIOS_PreventSwipeJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getIOSPlatform$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getPlatformIOS_PreventSwipeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetIOSPlatform$outVars"))());
varBag.callContext = callContext;
varBag.getPlatformIOS_PreventSwipeJSResult = getPlatformIOS_PreventSwipeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:0LKASPorV0ynQNwnfKubRQ:/ClientActionFlows.0LKASPorV0ynQNwnfKubRQ:9dkzMxd0YRN5HWP1irrjyQ", "Connect2_LegacyShared", "GetIOSPlatform", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:D2maPjsXjUOc4YkL1ksWdA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dK9UlmX0wEWIS0cn_judNA", callContext.id);
getPlatformIOS_PreventSwipeJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetIOSPlatform_GetPlatformIOS_PreventSwipeJS, "GetPlatformIOS_PreventSwipe", "GetIOSPlatform", {
IsApple: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetIOSPlatform$getPlatformIOS_PreventSwipeJSResult"))();
jsNodeResult.isAppleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsApple, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iqlIGJSjpEm35aOB9ra4UQ", callContext.id);
// IsApple = GetPlatformIOS_PreventSwipe.IsApple
outVars.value.isAppleOut = getPlatformIOS_PreventSwipeJSResult.value.isAppleOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:c11ceRcQTEuRmw+T4o1Rqw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:0LKASPorV0ynQNwnfKubRQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetIOSPlatform$getPlatformIOS_PreventSwipeJSResult", [{
name: "IsApple",
attrName: "isAppleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetIOSPlatform$outVars", [{
name: "IsApple",
attrName: "isAppleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getIOSPlatform$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getIOSPlatform$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsApple: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAppleOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("Connect2_LegacyShared.controller$GetIOSPlatform.GetPlatformIOS_PreventSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var os = navigator.platform;
var browser = navigator.appCodeName;

    if((navigator.platform.toLowerCase().indexOf("iphone") != -1) || 
     (navigator.platform.toLowerCase().indexOf("ipad") != -1) || 
     (navigator.platform.toLowerCase().indexOf("ipod") != -1))
    {
        $parameters.IsApple = true;
    }
    else
    {
        $parameters.IsApple = false;
    }

};
});

define("Connect2_LegacyShared.controller$GetLocalBookmarksByObjectType", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalBookmarkRecordList", "Connect2_LegacyShared.model$LocalBookmarkList", "Connect2_LegacyShared.model$LocalBookmarkRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action = function (objectTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetLocalBookmarksByObjectType$vars"))());
vars.value.objectTypeInLocal = objectTypeIn;
var getLocalBookmarksByObjectTypeVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_LegacySharedModel.LocalBookmarkRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetLocalBookmarksByObjectType$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalBookmarksByObjectTypeVar = getLocalBookmarksByObjectTypeVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NpOPWNqg50e7YAI+eyqZ4Q:/ClientActionFlows.NpOPWNqg50e7YAI+eyqZ4Q:iHTCye_xuo6h3vEnAto15w", "Connect2_LegacyShared", "GetLocalBookmarksByObjectType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TkMbVg+9TUuUAPVV3f6Gfw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NnCgeK7WAEGs3Oa8OaL06w", callContext.id);
// Aggregate: GetLocalBookmarksByObjectType
var getLocalBookmarksByObjectTypeAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_LegacySharedModel.LocalBookmarkRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpinUserId = OS.BuiltinFunctions.getUserId();
var qpstObjectType = vars.value.objectTypeInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
} else {
selectSql += "\"ENLocalBookmark\".\"Id\" o0, \"ENLocalBookmark\".\"UserId\" o1, \"ENLocalBookmark\".\"BookmarkId\" o2, \"ENLocalBookmark\".\"ObjectType\" o3, \"ENLocalBookmark\".\"ObjectId\" o4, \"ENLocalBookmark\".\"Group\" o5, \"ENLocalBookmark\".\"DateCreatedUtc\" o6, \"ENLocalBookmark\".\"Note\" o7";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_b3n_LocalBookmark\" \"ENLocalBookmark\"";
fromAndWhereSql += " WHERE ";
if (qpinUserId != 0) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"UserId\" = :qpinUserId) AND (\"ENLocalBookmark\".\"UserId\" IS NOT NULL))";
argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"UserId\" IS NULL)";
}
fromAndWhereSql += " AND ";
if (((qpstObjectType.trim()) !== (""))) {
fromAndWhereSql += "((\"ENLocalBookmark\".\"ObjectType\" = :qpstObjectType) AND (\"ENLocalBookmark\".\"ObjectType\" IS NOT NULL))";
argsList.add("qpstObjectType", /*TEXT*/ 0, qpstObjectType);
} else {
fromAndWhereSql += "(\"ENLocalBookmark\".\"ObjectType\" IS NULL)";
}
orderBySql += " ORDER BY \"ENLocalBookmark\".\"Note\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_LegacySharedModel.LocalBookmarkRecordList, function (rec, r) {
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
require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
return Connect2_LegacySharedAggregates_IDB.executeGetLocalBookmarksByObjectType$ClientAction$getLocalBookmarksByObjectTypeAggr(OS.BuiltinFunctions.getUserId(), vars.value.objectTypeInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalBookmarksByObjectTypeVar.value;
});
};
return getLocalBookmarksByObjectTypeAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KE93jQTbr0Cr9VYBl1ts6Q", callContext.id);
// MyBookmarksList = GetLocalBookmarksByObjectType.List
outVars.value.myBookmarksListOut = OS.DataConversion.JSConversions.typeConvertRecordList(getLocalBookmarksByObjectTypeVar.value.listOut, new Connect2_LegacySharedModel.LocalBookmarkList(), function (source, target) {
target = source.localBookmarkAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9DMeXTk7QkGri6d1q1m1SA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NpOPWNqg50e7YAI+eyqZ4Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NpOPWNqg50e7YAI+eyqZ4Q", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetLocalBookmarksByObjectType$vars", [{
name: "ObjectType",
attrName: "objectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetLocalBookmarksByObjectType$outVars", [{
name: "MyBookmarksList",
attrName: "myBookmarksListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalBookmarkList();
},
complexType: Connect2_LegacySharedModel.LocalBookmarkList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getLocalBookmarksByObjectType$Action = function (objectTypeIn) {
objectTypeIn = (objectTypeIn === undefined) ? "" : objectTypeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getLocalBookmarksByObjectType$Action.bind(controller, objectTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MyBookmarksList: actionResults.myBookmarksListOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetLocalityInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$PutCachedSignedPhotoURL", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_LegacyShared.model$BulkSignedPhotoResultList", "Connect2_LegacyShared.controller$ServerAction.GetLocalityInformation"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getLocalityInformation$Action = function (localityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetLocalityInformation$vars"))());
vars.value.localityIdInLocal = localityIdIn;
var getLocalityInformationVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetLocalityInformation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalityInformationVar = getLocalityInformationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:EICWAHCm90qmBQN76jZDuw:/ClientActionFlows.EICWAHCm90qmBQN76jZDuw:Alx3+tmuE6NH05db3dnMXA", "Connect2_LegacyShared", "GetLocalityInformation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ngHpPzuM+kilDID735hdGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IEi48U9JoE+yPZBMnCLC8A", callContext.id);
// Execute Action: GetLocalityInformation
return controller.getLocalityInformation$ServerAction(vars.value.localityIdInLocal, callContext).then(function (value) {
getLocalityInformationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oVj6ejp7BEGLNiEO2tYzQA", callContext.id);
// LocalityInformation = GetLocalityInformation.CacheableLocalityInformation
outVars.value.localityInformationOut = getLocalityInformationVar.value.cacheableLocalityInformationOut;
// Foreach GetLocalityInformation.SignedPhotosPreload
callContext.iterationContext.registerIterationStart(getLocalityInformationVar.value.signedPhotosPreloadOut);
}).then(function () {
try {var signedPhotosPreloadIterator = callContext.iterationContext.getIterator(getLocalityInformationVar.value.signedPhotosPreloadOut);
var signedPhotosPreloadIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KKXHJHgEqk+9F0ffnsbnhA", callContext.id) && (signedPhotosPreloadIndex < getLocalityInformationVar.value.signedPhotosPreloadOut.length))) {
signedPhotosPreloadIterator.currentRowNumber = signedPhotosPreloadIndex;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nhc4GDnDS0WaBsSNyVWqjg", callContext.id);
// Execute Action: PutCachedSignedPhotoURL
Connect2_LegacySharedController.default.putCachedSignedPhotoURL$Action(getLocalityInformationVar.value.signedPhotosPreloadOut.getItem(signedPhotosPreloadIndex.valueOf()).bucketAttr, getLocalityInformationVar.value.signedPhotosPreloadOut.getItem(signedPhotosPreloadIndex.valueOf()).pathAttr, getLocalityInformationVar.value.signedPhotosPreloadOut.getItem(signedPhotosPreloadIndex.valueOf()).typeAttr, getLocalityInformationVar.value.signedPhotosPreloadOut.getItem(signedPhotosPreloadIndex.valueOf()).signedURLAttr, callContext);
signedPhotosPreloadIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(getLocalityInformationVar.value.signedPhotosPreloadOut);
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jD5G4zoK30C4pyiK1VjrcQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EICWAHCm90qmBQN76jZDuw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EICWAHCm90qmBQN76jZDuw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetLocalityInformation$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetLocalityInformation$outVars", [{
name: "LocalityInformation",
attrName: "localityInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableLocalityInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableLocalityInformationRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getLocalityInformation$Action = function (localityIdIn) {
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getLocalityInformation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalityInformation: actionResults.localityInformationOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetMemberContactList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$MemberContactWithTimezoneList", "Connect2_LegacyShared.controller$ServerAction.GetMemberContactByCacheKey"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getMemberContactList$Action = function (cacheKeyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetMemberContactList$vars"))());
vars.value.cacheKeyInLocal = cacheKeyIn;
var getMemberContactByCacheKeyVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetMemberContactList$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getMemberContactByCacheKeyVar = getMemberContactByCacheKeyVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:U0VB1Zy8wkWN0iEqulJ0GA:/ClientActionFlows.U0VB1Zy8wkWN0iEqulJ0GA:FIo1W+6u2FxTWUkXJGQfDw", "Connect2_LegacyShared", "GetMemberContactList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fj2S6oaLqkudQsJI+LKspg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kVFK1c9QwkSLZH8s27JEpQ", callContext.id);
// Execute Action: GetMemberContactByCacheKey
return controller.getMemberContactByCacheKey$ServerAction(vars.value.cacheKeyInLocal, callContext).then(function (value) {
getMemberContactByCacheKeyVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lYMqyHg7xUiO8SlG+8ddjA", callContext.id);
// CacheableAssembleEventContactList = GetMemberContactByCacheKey.MemberContactList
outVars.value.cacheableAssembleEventContactListOut = getMemberContactByCacheKeyVar.value.memberContactListOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fOOYkeOH1kCyx1sOKrnYbQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:U0VB1Zy8wkWN0iEqulJ0GA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:U0VB1Zy8wkWN0iEqulJ0GA", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetMemberContactList$vars", [{
name: "CacheKey",
attrName: "cacheKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetMemberContactList$outVars", [{
name: "CacheableAssembleEventContactList",
attrName: "cacheableAssembleEventContactListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.MemberContactWithTimezoneList();
},
complexType: Connect2_LegacySharedModel.MemberContactWithTimezoneList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getMemberContactList$Action = function (cacheKeyIn) {
cacheKeyIn = (cacheKeyIn === undefined) ? "" : cacheKeyIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getMemberContactList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cacheKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheableAssembleEventContactList: actionResults.cacheableAssembleEventContactListOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetRegionSubscribedCountries", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$CountryWithMapPositionList", "Connect2_LegacyShared.controller$ServerAction.GetCountriesBySubscription"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getRegionSubscribedCountries$Action = function (subscriptionRegionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetRegionSubscribedCountries$vars"))());
vars.value.subscriptionRegionIdInLocal = subscriptionRegionIdIn;
var getCountriesBySubscriptionVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetRegionSubscribedCountries$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCountriesBySubscriptionVar = getCountriesBySubscriptionVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:_gUr65E3I0adxDWaS+EWeg:/ClientActionFlows._gUr65E3I0adxDWaS+EWeg:oPk6tm95EI_dqPU69WWc6g", "Connect2_LegacyShared", "GetRegionSubscribedCountries", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tjl+AynhzU+bsub5ctfXYg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Rfa8U2fzO0C6iTKzXG9bfA", callContext.id);
// Execute Action: GetCountriesBySubscription
return controller.getCountriesBySubscription$ServerAction(vars.value.subscriptionRegionIdInLocal, callContext).then(function (value) {
getCountriesBySubscriptionVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4RIhZ3K7EUeHJSvCHC8Okg", callContext.id);
// CountryWithMapPosition = GetCountriesBySubscription.Countries
outVars.value.countryWithMapPositionOut = getCountriesBySubscriptionVar.value.countriesOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gxqtWm9X4k2ntsmsTryG7Q", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_gUr65E3I0adxDWaS+EWeg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_gUr65E3I0adxDWaS+EWeg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetRegionSubscribedCountries$vars", [{
name: "SubscriptionRegionId",
attrName: "subscriptionRegionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetRegionSubscribedCountries$outVars", [{
name: "CountryWithMapPosition",
attrName: "countryWithMapPositionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.CountryWithMapPositionList();
},
complexType: Connect2_LegacySharedModel.CountryWithMapPositionList
}]);
Connect2_LegacySharedController.default.clientActionProxies.getRegionSubscribedCountries$Action = function (subscriptionRegionIdIn) {
subscriptionRegionIdIn = (subscriptionRegionIdIn === undefined) ? "" : subscriptionRegionIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getRegionSubscribedCountries$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(subscriptionRegionIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CountryWithMapPosition: actionResults.countryWithMapPositionOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetTargetLocalTimeByCalculatedOffset", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$GetTargetLocalTimeByCalculatedOffset.GetUnixEpochTimestampJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_GetTargetLocalTimeByCalculatedOffset_GetUnixEpochTimestampJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getTargetLocalTimeByCalculatedOffset$Action = function (in_CalculatedOffsetIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetTargetLocalTimeByCalculatedOffset$vars"))());
vars.value.in_CalculatedOffsetInLocal = in_CalculatedOffsetIn;
var getUnixEpochTimestampJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetTargetLocalTimeByCalculatedOffset$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getUnixEpochTimestampJSResult = getUnixEpochTimestampJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:n8KvWlf_wkCaFNYoZ289cg:/ClientActionFlows.n8KvWlf_wkCaFNYoZ289cg:Ge2VnVE8Fxa_J2l6l1eikA", "Connect2_LegacyShared", "GetTargetLocalTimeByCalculatedOffset", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:p4musmv4K0KA3jtvTY4jNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XdMTXdPWk0C9_YTTTQnJ5g", callContext.id);
getUnixEpochTimestampJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_GetTargetLocalTimeByCalculatedOffset_GetUnixEpochTimestampJS, "GetUnixEpochTimestamp", "GetTargetLocalTimeByCalculatedOffset", {
In_CalculatedOffsetInSeconds: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_CalculatedOffsetInLocal, OS.DataTypes.DataTypes.LongInteger),
Out_LocalTime: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.DateTime.defaultValue, OS.DataTypes.DataTypes.DateTime),
Out_FormattedLocalTime: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetTargetLocalTimeByCalculatedOffset$getUnixEpochTimestampJSResult"))();
jsNodeResult.out_LocalTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_LocalTime, OS.DataTypes.DataTypes.DateTime);
jsNodeResult.out_FormattedLocalTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_FormattedLocalTime, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FoYza5OAHEGL8No3SFoTvA", callContext.id);
// Out_FormattedTargetTimezoneLocalTime = GetUnixEpochTimestamp.Out_FormattedLocalTime
outVars.value.out_FormattedTargetTimezoneLocalTimeOut = getUnixEpochTimestampJSResult.value.out_FormattedLocalTimeOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IDKgu2cs3EqXF9M0roZBcQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:n8KvWlf_wkCaFNYoZ289cg", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetTargetLocalTimeByCalculatedOffset$vars", [{
name: "In_CalculatedOffset",
attrName: "in_CalculatedOffsetInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetTargetLocalTimeByCalculatedOffset$getUnixEpochTimestampJSResult", [{
name: "Out_LocalTime",
attrName: "out_LocalTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Out_FormattedLocalTime",
attrName: "out_FormattedLocalTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetTargetLocalTimeByCalculatedOffset$outVars", [{
name: "Out_FormattedTargetTimezoneLocalTime",
attrName: "out_FormattedTargetTimezoneLocalTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getTargetLocalTimeByCalculatedOffset$Action = function (in_CalculatedOffsetIn) {
in_CalculatedOffsetIn = (in_CalculatedOffsetIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_CalculatedOffsetIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getTargetLocalTimeByCalculatedOffset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CalculatedOffsetIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedTargetTimezoneLocalTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedTargetTimezoneLocalTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$GetTargetLocalTimeByCalculatedOffset.GetUnixEpochTimestampJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getWeekDay(number){
    var day = "";
    
    switch (number) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }
    
    return day;
}

function fixTime(number){
    return number >= 0 && number <= 9 ? "0" + number : number;
}

function formatH(hour,isSlot){
    if(hour == 0){
		return isSlot ? " AM" : fixTime(12);
    }else if(hour >= 1 && hour <= 11){
		return isSlot ? " AM" : fixTime(hour);
    }else if(hour == 12){
		return isSlot ? " PM" : fixTime(hour);
    }else if(hour >= 13 && hour <= 23){
		return isSlot ? " PM" : fixTime(hour - 12);
    }
}

function getLocalTime(){
    //Get current Unix Epoch time and convert to seconds, given JS returns in milliseconds
    var unix = Math.floor(Date.now() / 1000);
    
    //Add both offsets to get the correct Unix Epoch time
    var totalUnix = unix + $parameters.In_CalculatedOffsetInSeconds;
    
    //Convert back to date time before outputting the result
    var finalDate = new Date(totalUnix * 1000);
    $parameters.Out_LocalTime = finalDate;
    
    //Convert back to date time before outputting the result
    var formattedDate = getWeekDay(finalDate.getUTCDay()) + ", " + formatH(finalDate.getUTCHours(),false) + ":" + fixTime(finalDate.getUTCMinutes()) + formatH(finalDate.getUTCHours(),true);
    $parameters.Out_FormattedLocalTime = formattedDate;
}

getLocalTime();
};
});

define("Connect2_LegacyShared.controller$GetTimezoneInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.clientVariables", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$ServerAction.GetTimezoneInformation"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getTimezoneInformation$Action = function (localityIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetTimezoneInformation$vars"))());
vars.value.localityIdInLocal = localityIdIn;
var getTimezoneInformationVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetTimezoneInformation$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getTimezoneInformationVar = getTimezoneInformationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:pvsXIIyiAEGXcULmzNqCiw:/ClientActionFlows.pvsXIIyiAEGXcULmzNqCiw:TkraggGLZakVHC62UNNp4Q", "Connect2_LegacyShared", "GetTimezoneInformation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0BpVo1VBs0GTjvLRF1+RiQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aUCN1DH8PESygoO_hMV+Vw", callContext.id);
// Execute Action: GetTimezoneInformation
return controller.getTimezoneInformation$ServerAction(vars.value.localityIdInLocal, callContext).then(function (value) {
getTimezoneInformationVar.value = value;
}).then(function () {
// Set Timezone
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L6aBN61rCkKVtUnuHXgePA", callContext.id);
// TimezoneInformation.TimezoneLabel = GetTimezoneInformation.TimezoneInformation.TimezoneLabel
outVars.value.timezoneInformationOut.timezoneLabelAttr = getTimezoneInformationVar.value.timezoneInformationOut.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L6aBN61rCkKVtUnuHXgePA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TimezoneInformation.OffsetSeconds = GetTimezoneInformation.TimezoneInformation.OffsetSeconds
outVars.value.timezoneInformationOut.offsetSecondsAttr = getTimezoneInformationVar.value.timezoneInformationOut.offsetSecondsAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L6aBN61rCkKVtUnuHXgePA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// TimezoneInformation.TimezoneAbreviation = GetTimezoneInformation.TimezoneInformation.TimezoneAbreviation
outVars.value.timezoneInformationOut.timezoneAbreviationAttr = getTimezoneInformationVar.value.timezoneInformationOut.timezoneAbreviationAttr;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jkJxGotIdE+9pbq3Y7UMuw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pvsXIIyiAEGXcULmzNqCiw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pvsXIIyiAEGXcULmzNqCiw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetTimezoneInformation$vars", [{
name: "LocalityId",
attrName: "localityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetTimezoneInformation$outVars", [{
name: "TimezoneInformation",
attrName: "timezoneInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.TimezoneRec();
},
complexType: APIDomain_Directory_ISModel.TimezoneRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getTimezoneInformation$Action = function (localityIdIn) {
localityIdIn = (localityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localityIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getTimezoneInformation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(localityIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TimezoneInformation: actionResults.timezoneInformationOut
};
});
};
});

define("Connect2_LegacyShared.controller$GetUnreadNotificationNumber", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getUnreadNotificationNumber$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetUnreadNotificationNumber$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:SxXmQJzaHU+6mfenrWE5mQ:/ClientActionFlows.SxXmQJzaHU+6mfenrWE5mQ:m3SdZCkuP_HUGx3t+VkFTQ", "Connect2_LegacyShared", "GetUnreadNotificationNumber", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HL+Fp_yoXEON4GygwUb_vw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VFnDbMeck0647oETDqW6sg", callContext.id);
// UnreadNotifications = UnreadNotificationsNumber
outVars.value.unreadNotificationsOut = Connect2_LegacySharedClientVariables.getUnreadNotificationsNumber();
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:04Gvlz0YuU2RNF4Ou218pQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:SxXmQJzaHU+6mfenrWE5mQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetUnreadNotificationNumber$outVars", [{
name: "UnreadNotifications",
attrName: "unreadNotificationsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.getUnreadNotificationNumber$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getUnreadNotificationNumber$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UnreadNotifications: OS.DataConversion.JSNodeParamConverter.to(actionResults.unreadNotificationsOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});

define("Connect2_LegacyShared.controller$GetUserInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.clientVariables", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.controller$ServerAction.GetUserInformation", "Connect2_LegacyShared.controller$PutCachedSignedPhotoURL"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getUserInformation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getUserInformationVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.GetUserInformation$outVars"))());
varBag.callContext = callContext;
varBag.getUserInformationVar = getUserInformationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:fnCdxHnp4E6Be5RDmX8I9Q:/ClientActionFlows.fnCdxHnp4E6Be5RDmX8I9Q:z+yAA_b2sGl0G1Jm1jG5EQ", "Connect2_LegacyShared", "GetUserInformation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OeyTqyti30ubZTexZebkCw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i5H4KGkK3kOc6GoNpfZzkA", callContext.id);
// Execute Action: GetUserInformation
return controller.getUserInformation$ServerAction(callContext).then(function (value) {
getUserInformationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zM3Bt51RLk6lA83hH7Tmpg", callContext.id);
// UserInformation = GetUserInformation.UserInformation
outVars.value.userInformationOut = getUserInformationVar.value.userInformationOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wNr1kptzSE+Gnfef_uImnA", callContext.id);
// Execute Action: PutCachedSignedPhotoURL
Connect2_LegacySharedController.default.putCachedSignedPhotoURL$Action(getUserInformationVar.value.userInformationOut.memberAttr.photoTagAttr.uRLAttr.bucketAttr, getUserInformationVar.value.userInformationOut.memberAttr.photoTagAttr.uRLAttr.pathAttr, getUserInformationVar.value.userInformationOut.memberAttr.photoTagAttr.uRLAttr.typeAttr, getUserInformationVar.value.userInformationOut.memberAttr.photoTagAttr.signedURLAttr, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:M+Y9m5kRZ0CHmv+MmZh4bQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:fnCdxHnp4E6Be5RDmX8I9Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:fnCdxHnp4E6Be5RDmX8I9Q", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.GetUserInformation$outVars", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Users_Current_GETResponseRec();
},
complexType: APIDomain_Directory_ISModel.Users_Current_GETResponseRec
}]);
Connect2_LegacySharedController.default.clientActionProxies.getUserInformation$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.getUserInformation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UserInformation: actionResults.userInformationOut
};
});
};
});

define("Connect2_LegacyShared.controller$IOSMetaTags", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$GetIOSPlatform", "Connect2_LegacyShared.controller$AddMetaTag"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.iOSMetaTags$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getIOSPlatformVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getIOSPlatformVar = getIOSPlatformVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:V0MVBgO3dUG7ceRnB2yqAg:/ClientActionFlows.V0MVBgO3dUG7ceRnB2yqAg:kLfxW1hl6sw2EoceTnDfeQ", "Connect2_LegacyShared", "IOSMetaTags", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XZ161riA5kisCQmEfy+f6g", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mp9CD+RkTkuorfC0mjoFPA", callContext.id);
// Execute Action: GetIOSPlatform
getIOSPlatformVar.value = Connect2_LegacySharedController.default.getIOSPlatform$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MURyEUch8UiDu_1kVW6Lvw", callContext.id) && getIOSPlatformVar.value.isAppleOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:I7iy3g9Cy02oJuUK9+vcJQ", callContext.id);
// Execute Action: AddMetaTag
Connect2_LegacySharedController.default.addMetaTag$Action("viewport", "viewport-fit=cover, width=device-width, initial-scale=1.0, \r\nminimum-scale=1.0, maximum-scale=1.0, user-scalable=no", callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Cj2bX61DZ0SPtIIZgFMBZg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Cj2bX61DZ0SPtIIZgFMBZg", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:V0MVBgO3dUG7ceRnB2yqAg", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.clientActionProxies.iOSMetaTags$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.iOSMetaTags$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$IOSPreventSwipe", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$IOSPreventSwipe.GetPlatformIOS_PreventSwipeJS", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$GetIOSPlatform"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_IOSPreventSwipe_GetPlatformIOS_PreventSwipeJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.iOSPreventSwipe$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getIOSPlatformVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getIOSPlatformVar = getIOSPlatformVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NCvYBjIFTUGVVpXwOmgFNA:/ClientActionFlows.NCvYBjIFTUGVVpXwOmgFNA:OXLouGkYH6rsEgXXv82rYA", "Connect2_LegacyShared", "IOSPreventSwipe", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dLyAWM6tXUCY+txCGCsuYA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7ScxfC7iVEuB+iWHkhuRrA", callContext.id);
// Execute Action: GetIOSPlatform
getIOSPlatformVar.value = Connect2_LegacySharedController.default.getIOSPlatform$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:K6kxuTIY2kGvvX0jvZKmpA", callContext.id) && getIOSPlatformVar.value.isAppleOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0tWQJWll6U+m+OOTmuFHug", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_IOSPreventSwipe_GetPlatformIOS_PreventSwipeJS, "GetPlatformIOS_PreventSwipe", "IOSPreventSwipe", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5AMNIWeGJEWUANWkLqJzSw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5AMNIWeGJEWUANWkLqJzSw", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NCvYBjIFTUGVVpXwOmgFNA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.clientActionProxies.iOSPreventSwipe$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.iOSPreventSwipe$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$IOSPreventSwipe.GetPlatformIOS_PreventSwipeJS", [], function () {
return function ($actions, $roles, $public) {
var edge = 20;
var element = document.getElementById("reactContainer");

element.addEventListener("touchstart", function fun(e){
    // is not near edge of view, exit
    if (e.pageX > edge && e.pageX < window.innerWidth - edge) return;
    
    // prevent swipe to navigate back gesture
    e.preventDefault();
});
};
});

define("Connect2_LegacyShared.controller$IsJsonValid", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$IsJsonValid.IsJsonValidJavascriptJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_IsJsonValid_IsJsonValidJavascriptJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.isJsonValid$Action = function (jsonIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsJsonValid$vars"))());
vars.value.jsonInLocal = jsonIn;
var isJsonValidJavascriptJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsJsonValid$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.isJsonValidJavascriptJSResult = isJsonValidJavascriptJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wZqEvFb0Tkmo_4lD6H44HQ:/ClientActionFlows.wZqEvFb0Tkmo_4lD6H44HQ:KBX__oDcRmy+zUmn4v_urw", "Connect2_LegacyShared", "IsJsonValid", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hQ+BD3eiaU6rRa9KADBEGw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QTSEXI3luU2Rg7XpAgLH9Q", callContext.id);
isJsonValidJavascriptJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_IsJsonValid_IsJsonValidJavascriptJS, "IsJsonValidJavascript", "IsJsonValid", {
JsonValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.jsonInLocal, OS.DataTypes.DataTypes.Text),
IsValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsJsonValid$isJsonValidJavascriptJSResult"))();
jsNodeResult.isValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsValid, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:viM8zoJYlk2cW0UdyGsbhw", callContext.id);
// IsJsonValid = IsJsonValidJavascript.IsValid
outVars.value.isJsonValidOut = isJsonValidJavascriptJSResult.value.isValidOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dUCkjof1bUyVSnefQVkvnA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wZqEvFb0Tkmo_4lD6H44HQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsJsonValid$vars", [{
name: "Json",
attrName: "jsonInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsJsonValid$isJsonValidJavascriptJSResult", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsJsonValid$outVars", [{
name: "IsJsonValid",
attrName: "isJsonValidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.isJsonValid$Action = function (jsonIn) {
jsonIn = (jsonIn === undefined) ? "" : jsonIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.isJsonValid$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(jsonIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsJsonValid: OS.DataConversion.JSNodeParamConverter.to(actionResults.isJsonValidOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("Connect2_LegacyShared.controller$IsJsonValid.IsJsonValidJavascriptJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function isJSON(input){
    
    try{
        var parsed = JSON.parse(input);
        return true;
    }
    catch(error){return false;}
    
}

$parameters.IsValid = isJSON($parameters.JsonValue)
};
});

define("Connect2_LegacyShared.controller$IsRequestFailedExceptionMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.isRequestFailedExceptionMessage$Action = function (exceptionMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsRequestFailedExceptionMessage$vars"))());
vars.value.exceptionMessageInLocal = exceptionMessageIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsRequestFailedExceptionMessage$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:6M+JYv7dDkiNAeM47LEMQQ:/ClientActionFlows.6M+JYv7dDkiNAeM47LEMQQ:RsDXa7M8UBfAWZ03P3JcSw", "Connect2_LegacyShared", "IsRequestFailedExceptionMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:orKRSQstWkCdiFg6WBv2mA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:07PwYxBGcEGg9ht3VmPAFQ", callContext.id);
// IsRequestFailedExceptionMessage = ExceptionMessage = "Request failed with an error"
outVars.value.isRequestFailedExceptionMessageOut = (vars.value.exceptionMessageInLocal === "Request failed with an error");
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DP5Jpn_1p06l9l3VS+OZfg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:6M+JYv7dDkiNAeM47LEMQQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsRequestFailedExceptionMessage$vars", [{
name: "ExceptionMessage",
attrName: "exceptionMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsRequestFailedExceptionMessage$outVars", [{
name: "IsRequestFailedExceptionMessage",
attrName: "isRequestFailedExceptionMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.isRequestFailedExceptionMessage$Action = function (exceptionMessageIn) {
exceptionMessageIn = (exceptionMessageIn === undefined) ? "" : exceptionMessageIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.isRequestFailedExceptionMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(exceptionMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsRequestFailedExceptionMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.isRequestFailedExceptionMessageOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_LegacyShared.controller$IsTimeoutExceptionMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.isTimeoutExceptionMessage$Action = function (exceptionMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsTimeoutExceptionMessage$vars"))());
vars.value.exceptionMessageInLocal = exceptionMessageIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.IsTimeoutExceptionMessage$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:QGEhsJb_AUaTBo1lZQWqmw:/ClientActionFlows.QGEhsJb_AUaTBo1lZQWqmw:oXidqdIXvoN+OxukafX7xw", "Connect2_LegacyShared", "IsTimeoutExceptionMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iWzx_KAvVUmQhMHJXXSYWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Fazf_QIOGk6Siv42uQMl9g", callContext.id);
// IsTimeoutExceptionMessage = ExceptionMessage = "The operation has timed out" or ExceptionMessage = "The connection has timed out"
outVars.value.isTimeoutExceptionMessageOut = ((vars.value.exceptionMessageInLocal === "The operation has timed out") || (vars.value.exceptionMessageInLocal === "The connection has timed out"));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PGUcmAotHUyf_Ysap+KBJQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:QGEhsJb_AUaTBo1lZQWqmw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsTimeoutExceptionMessage$vars", [{
name: "ExceptionMessage",
attrName: "exceptionMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.IsTimeoutExceptionMessage$outVars", [{
name: "IsTimeoutExceptionMessage",
attrName: "isTimeoutExceptionMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.isTimeoutExceptionMessage$Action = function (exceptionMessageIn) {
exceptionMessageIn = (exceptionMessageIn === undefined) ? "" : exceptionMessageIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.isTimeoutExceptionMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(exceptionMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsTimeoutExceptionMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.isTimeoutExceptionMessageOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_LegacyShared.controller$LocalSearchHistory_Update", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalSearchHistoryRecord", "Connect2_LegacyShared.model$LocalSearchHistoryRecordList", "Connect2_LegacyShared.model$LocalSearchHistoryRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.localSearchHistory_Update$Action = function (localSearchHistoryIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.LocalSearchHistory_Update$vars"))());
vars.value.localSearchHistoryIdInLocal = localSearchHistoryIdIn;
var getLocalSearchHistoryByIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(Connect2_LegacySharedModel.LocalSearchHistoryRecordList))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalSearchHistoryByIdVar = getLocalSearchHistoryByIdVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:KDwHcHpLP0+Jz85wuOk5qg:/ClientActionFlows.KDwHcHpLP0+Jz85wuOk5qg:Rxbn+VKpeDhxkaWgpYESBA", "Connect2_LegacyShared", "LocalSearchHistory_Update", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_MgOZbewVk6AHa9X8rg4gA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+A7eLrJIlkauSOE4gK_dzw", callContext.id);
// Aggregate: GetLocalSearchHistoryById
var getLocalSearchHistoryByIdAggr = function (maxRecords) {
var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_LegacySharedModel.LocalSearchHistoryRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qploId = vars.value.localSearchHistoryIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalSearchHistory\".\"Id\" o0, \"ENLocalSearchHistory\".\"UserId\" o1, \"ENLocalSearchHistory\".\"SearchedString\" o2, \"ENLocalSearchHistory\".\"CreatedOn\" o3, \"ENLocalSearchHistory\".\"RecentSearchTypeId\" o4";
} else {
selectSql += "\"ENLocalSearchHistory\".\"Id\" o0, \"ENLocalSearchHistory\".\"UserId\" o1, \"ENLocalSearchHistory\".\"SearchedString\" o2, \"ENLocalSearchHistory\".\"CreatedOn\" o3, \"ENLocalSearchHistory\".\"RecentSearchTypeId\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_b3n_LocalSearchHistory\" \"ENLocalSearchHistory\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocalSearchHistory\".\"Id\" = :qploId) AND (\"ENLocalSearchHistory\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocalSearchHistory\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_LegacySharedModel.LocalSearchHistoryRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localSearchHistoryAttr",
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
require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
return Connect2_LegacySharedAggregates_IDB.executeLocalSearchHistoryUpdate$ClientAction$getLocalSearchHistoryByIdAggr(vars.value.localSearchHistoryIdInLocal, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return controller.executeClientAggregate(executeQuery, function () {
return getLocalSearchHistoryByIdVar.value;
});
};
return getLocalSearchHistoryByIdAggr().then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+2Svh4WkgkinpN4GPB2XrQ", callContext.id);
// GetLocalSearchHistoryById.List.Current.LocalSearchHistory.CreatedOn = CurrDateTime
getLocalSearchHistoryByIdVar.value.listOut.getCurrent(callContext.iterationContext).localSearchHistoryAttr.createdOnAttr = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SzpZVNKMUk66ebAnXmDXFg", callContext.id);
// Execute Action: UpdateLocalSearchHistory
return Connect2_LegacySharedModel.entities.LocalSearchHistory.update(getLocalSearchHistoryByIdVar.value.listOut.getCurrent(callContext.iterationContext), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NqPD6qkQSUuUDyo_98Nqeg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:KDwHcHpLP0+Jz85wuOk5qg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:KDwHcHpLP0+Jz85wuOk5qg", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.LocalSearchHistory_Update$vars", [{
name: "LocalSearchHistoryId",
attrName: "localSearchHistoryIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.localSearchHistory_Update$Action = function (localSearchHistoryIdIn) {
localSearchHistoryIdIn = (localSearchHistoryIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : localSearchHistoryIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.localSearchHistory_Update$Action.bind(controller, localSearchHistoryIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$NavigateToMaps", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.controller", "Connect2_AppLauncherPlugin.controller", "OutSystemsUI_2_23.controller", "Connect2_LegacyShared.controller$NavigateToMaps.GetPlatformIOSJS", "Connect2_LegacyShared.clientVariables", "CommonPlugin.controller$GetOperatingSystem", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_LegacyShared.referencesHealth$Connect2_AppLauncherPlugin", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginController, Connect2_AppLauncherPluginController, OutSystemsUI_2_23Controller, Connect2_LegacyShared_controller_NavigateToMaps_GetPlatformIOSJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.navigateToMaps$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getPlatformIOSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.NavigateToMaps$outVars"))());
varBag.callContext = callContext;
varBag.getOperatingSystemVar = getOperatingSystemVar;
varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
varBag.getNetworkStatusVar = getNetworkStatusVar;
varBag.getPlatformIOSJSResult = getPlatformIOSJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:_F45Q+p5I0+sFrAPan8BUA:/ClientActionFlows._F45Q+p5I0+sFrAPan8BUA:xrZe7UEIoxjqH3rq2K6Yiw", "Connect2_LegacyShared", "NavigateToMaps", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:98exZiVYq0ef2k+RsTOJsA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fnNTi7Tjy0Cg05E2F9doTA", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext);

// IsOnline?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ib7_1NMYsEen8uWz+1wD6A", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:234KFkQy60uPb0tF38Mnmw", callContext.id);
// Execute Action: GetOperatingSystem
getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2A9XPipt70GVjXZCZW_S9Q", callContext.id) && (getOperatingSystemVar.value.operatingSystemsIdOut === Connect2_LegacySharedModel.staticEntities.mobile_OperatingSystem.android))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5vzjZse44EaxcQGxP4hR8A", callContext.id);
// Execute Action: CheckAppLauncherPlugin
checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YJ8YDgfeOEipBtmr4FPMsA", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
// MapNavigationRedirectId
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:osYi3byRN0myv86xnfRzwg", callContext.id);
// MapNavigationRedirectId = AndroidNative
outVars.value.mapNavigationRedirectIdOut = Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect.androidNative;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:cEpePArWRky4o9YZs_p0hA", callContext.id);
} else {
// MapNavigationRedirectId
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5J1mVVKt+k+ltXUKim50uw", callContext.id);
// MapNavigationRedirectId = AndroidBrowser
outVars.value.mapNavigationRedirectIdOut = Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect.androidBrowser;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:b0icv17wxE2_nMoWkU_eTA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AavR+ExKFk2Lcs2IuH6kBA", callContext.id);
getPlatformIOSJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_NavigateToMaps_GetPlatformIOSJS, "GetPlatformIOS", "NavigateToMaps", {
Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Browser: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
IsApple: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.NavigateToMaps$getPlatformIOSJSResult"))();
jsNodeResult.platformOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Platform, OS.DataTypes.DataTypes.Text);
jsNodeResult.browserOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Browser, OS.DataTypes.DataTypes.Text);
jsNodeResult.isAppleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsApple, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GpJnxjwym0G18h6SZzS80A", callContext.id) && getPlatformIOSJSResult.value.isAppleOut)) {
// MapNavigationRedirectId
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:10JaF0CrFUS69otgJSryDA", callContext.id);
// MapNavigationRedirectId = IPhoneBrowser
outVars.value.mapNavigationRedirectIdOut = Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect.iPhoneBrowser;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sxH0tDTO8EieuzdismD1Ow", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6e3ACEKnA06c67olj0mIYA", callContext.id);
// Execute Action: LogMessage
OS.SystemActions.logMessage(((("User accessed Map with: " + getPlatformIOSJSResult.value.platformOut) + " ") + getPlatformIOSJSResult.value.browserOut), "Directory_MUI", callContext);
// MapNavigationRedirectId
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7ZbPhnKiUU2BWJgKEVuTDA", callContext.id);
// MapNavigationRedirectId = AndroidBrowser
outVars.value.mapNavigationRedirectIdOut = Connect2_LegacySharedModel.staticEntities.mapNavigationRedirect.androidBrowser;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sxH0tDTO8EieuzdismD1Ow", callContext.id);
}

}

} else {
// Network
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4sD3UhRi0UeJBd_1VM0vfA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your network connection and try again", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:I8P27KL_mk+HKwqS9e+1Mg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_F45Q+p5I0+sFrAPan8BUA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.NavigateToMaps$getPlatformIOSJSResult", [{
name: "Platform",
attrName: "platformOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Browser",
attrName: "browserOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsApple",
attrName: "isAppleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.NavigateToMaps$outVars", [{
name: "MapNavigationRedirectId",
attrName: "mapNavigationRedirectIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.navigateToMaps$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.navigateToMaps$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MapNavigationRedirectId: actionResults.mapNavigationRedirectIdOut
};
});
};
});
define("Connect2_LegacyShared.controller$NavigateToMaps.GetPlatformIOSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var os = navigator.platform;
var browser = navigator.appCodeName;

if((navigator.platform.toLowerCase().indexOf("iphone") != -1) || 
     (navigator.platform.toLowerCase().indexOf("ipad") != -1) || 
     (navigator.platform.toLowerCase().indexOf("ipod") != -1)){
         
        $parameters.IsApple = true;
     }
     else{
         $parameters.IsApple = false;
     }
$parameters.Platform = os.toLowerCase();
$parameters.Browser = browser;
};
});

define("Connect2_LegacyShared.controller$OpenExternalURL", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.model", "InAppBrowserEvents.controller", "InAppBrowserEvents.model", "Connect2_LegacyShared.controller$OpenExternalURL.OpenInNewWindowJS", "Connect2_LegacyShared.clientVariables", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "InAppBrowserEvents.controller$CheckInAppBrowserPlugin", "Connect2_LegacyShared.referencesHealth$InAppBrowserEvents", "InAppBrowserEvents.model$OptionsRec", "InAppBrowserEvents.model$AndroidOptionsRec", "InAppBrowserEvents.model$IOSOptionsRec", "InAppBrowserEvents.controller$Open"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginModel, InAppBrowserEventsController, InAppBrowserEventsModel, Connect2_LegacyShared_controller_OpenExternalURL_OpenInNewWindowJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.openExternalURL$Action = function (uRLIn, isSelfIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.OpenExternalURL$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.isSelfInLocal = isSelfIn;
var checkInAppBrowserPluginVar = new OS.DataTypes.VariableHolder();
var openVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkInAppBrowserPluginVar = checkInAppBrowserPluginVar;
varBag.openVar = openVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:aUjJ6QW1aEW1qQAzXD_gWA:/ClientActionFlows.aUjJ6QW1aEW1qQAzXD_gWA:DC+qeYoMV8RWxxY2xTEUOA", "Connect2_LegacyShared", "OpenExternalURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zCiP7409102zDN430PMmPQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Bj18IT_xlkWrcrA0JB4DuA", callContext.id);
// Execute Action: CheckInAppBrowserPlugin
checkInAppBrowserPluginVar.value = InAppBrowserEventsController.default.checkInAppBrowserPlugin$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eavNvdwOxkmI1jnBn0a1Og", callContext.id) && checkInAppBrowserPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UGxHNv1l5Ui39Ge3vX1DVQ", callContext.id);
// Execute Action: Open
openVar.value = InAppBrowserEventsController.default.open$Action(vars.value.uRLInLocal, Connect2_LegacySharedModel.staticEntities.target.sYSTEM, new InAppBrowserEventsModel.OptionsRec(), new InAppBrowserEventsModel.AndroidOptionsRec(), new InAppBrowserEventsModel.IOSOptionsRec(), callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+lRCPAIoQ0ypOxIFQJDQhQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+mxOWx8PFUyW7RqzfFO1DA", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_OpenExternalURL_OpenInNewWindowJS, "OpenInNewWindow", "OpenExternalURL", {
IsSelf: OS.DataConversion.JSNodeParamConverter.to(vars.value.isSelfInLocal, OS.DataTypes.DataTypes.Boolean),
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+lRCPAIoQ0ypOxIFQJDQhQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aUjJ6QW1aEW1qQAzXD_gWA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.OpenExternalURL$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsSelf",
attrName: "isSelfInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.openExternalURL$Action = function (uRLIn, isSelfIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
isSelfIn = (isSelfIn === undefined) ? false : isSelfIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.openExternalURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isSelfIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$OpenExternalURL.OpenInNewWindowJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.IsSelf) {
    window.open($parameters.URL, '_self');
} else {
    window.open($parameters.URL, '_blank');
}
};
});

define("Connect2_LegacyShared.controller$PrefixToCallName", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.prefixToCallName$Action = function (in_NameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.PrefixToCallName$vars"))());
vars.value.in_NameInLocal = in_NameIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.PrefixToCallName$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wkGK9fuSt0CWQ4oIDu4UOg:/ClientActionFlows.wkGK9fuSt0CWQ4oIDu4UOg:zBlwwMizJO3xd2g_fjaQvw", "Connect2_LegacyShared", "PrefixToCallName", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m6VJwKCMuEyGk4yI25zPHw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kPyLsD2MPkC+FhM+VbC4Iw", callContext.id) && (OS.BuiltinFunctions.length(vars.value.in_NameInLocal) === 0))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UaKBHCrgrEOfglUbCIl27w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:a01sLFC6QUKMN_OWq90K8A", callContext.id);
// Name = "Calling " + Trim
outVars.value.nameOut = ("Calling " + OS.BuiltinFunctions.trim(vars.value.in_NameInLocal));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RBq9gG_wtE+Fl7PIZsq7aw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wkGK9fuSt0CWQ4oIDu4UOg", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.PrefixToCallName$vars", [{
name: "In_Name",
attrName: "in_NameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.PrefixToCallName$outVars", [{
name: "Name",
attrName: "nameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.prefixToCallName$Action = function (in_NameIn) {
in_NameIn = (in_NameIn === undefined) ? "" : in_NameIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.prefixToCallName$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_NameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Name: OS.DataConversion.JSNodeParamConverter.to(actionResults.nameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("Connect2_LegacyShared.controller$PutCachedMyBookmarks", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.controller$PutCacheableObject", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$UnlimitedTimeToLiveSeconds", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_LegacyShared.model$BookmarkItemList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.putCachedMyBookmarks$Action = function (groupIn, bookmarksIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.PutCachedMyBookmarks$vars"))());
vars.value.groupInLocal = groupIn;
vars.value.bookmarksInLocal = bookmarksIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:0olqAbXqz0mcq9Jp+u3R1w:/ClientActionFlows.0olqAbXqz0mcq9Jp+u3R1w:oRS4Q+xkZ3SKCLrb9ukWeQ", "Connect2_LegacyShared", "PutCachedMyBookmarks", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LbRW25nwrUuc+bQw7yP8pw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AM3wpTABp0K22Yh7lwbddA", callContext.id);
// Execute Action: PutCacheableObject
MemoryClientCacheController.default.putCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.myBookmarks), vars.value.groupInLocal, OS.BuiltinFunctions.toObject(vars.value.bookmarksInLocal), OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.unlimitedTimeToLiveSeconds$Action(callContext).timeToLiveSecondsOut;
}, OS.DataTypes.DataTypes.Integer, callContext.id), callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:M8WLMWDrLEafra_uNG+dsg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:0olqAbXqz0mcq9Jp+u3R1w", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.PutCachedMyBookmarks$vars", [{
name: "Group",
attrName: "groupInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Bookmarks",
attrName: "bookmarksInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BookmarkItemList();
},
complexType: Connect2_LegacySharedModel.BookmarkItemList
}]);
Connect2_LegacySharedController.default.clientActionProxies.putCachedMyBookmarks$Action = function (groupIn, bookmarksIn) {
groupIn = (groupIn === undefined) ? "" : groupIn;
bookmarksIn = (bookmarksIn === undefined) ? new Connect2_LegacySharedModel.BookmarkItemList() : bookmarksIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.putCachedMyBookmarks$Action.bind(controller, groupIn, bookmarksIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$PutCachedSignedPhotoURL", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "MemoryClientCache.controller", "Connect2_LegacyShared.clientVariables", "MemoryClientCache.controller$PutCacheableObject", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$CacheKeyPart"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, MemoryClientCacheController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.putCachedSignedPhotoURL$Action = function (bucketIn, pathIn, typeIn, uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.PutCachedSignedPhotoURL$vars"))());
vars.value.bucketInLocal = bucketIn;
vars.value.pathInLocal = pathIn;
vars.value.typeInLocal = typeIn;
vars.value.uRLInLocal = uRLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:LeV9sTxub0OgvpowX6XujA:/ClientActionFlows.LeV9sTxub0OgvpowX6XujA:6n1pf+Y6S320cIlSun+ang", "Connect2_LegacyShared", "PutCachedSignedPhotoURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hszKysrL+UiLKpvs3oRnIQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:p5kO13PE5UuffXlD2vzk7g", callContext.id);
// Execute Action: PutCacheableObject
MemoryClientCacheController.default.putCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(Connect2_LegacySharedModel.staticEntities.directoryCacheType.photos), ((OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.bucketInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.pathInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.typeInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)), OS.BuiltinFunctions.toObject(vars.value.uRLInLocal), vars.value.timeToLiveSecondsVar, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5RZtuqAe30ixU258wGq3VA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:LeV9sTxub0OgvpowX6XujA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.PutCachedSignedPhotoURL$vars", [{
name: "Bucket",
attrName: "bucketInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Path",
attrName: "pathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TimeToLiveSeconds",
attrName: "timeToLiveSecondsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 300;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.putCachedSignedPhotoURL$Action = function (bucketIn, pathIn, typeIn, uRLIn) {
bucketIn = (bucketIn === undefined) ? "" : bucketIn;
pathIn = (pathIn === undefined) ? "" : pathIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.putCachedSignedPhotoURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bucketIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pathIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$RemoveAllThemeClassesFromBody", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$RemoveThemeClassFromBody"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.removeAllThemeClassesFromBody$Action = function (exceptThemeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveAllThemeClassesFromBody$vars"))());
vars.value.exceptThemeInLocal = exceptThemeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:midzcXhnbEiL2yINhyQo2w:/ClientActionFlows.midzcXhnbEiL2yINhyQo2w:kN9qH9X12lOQ7_DT787j+w", "Connect2_LegacyShared", "RemoveAllThemeClassesFromBody", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UALLDOUq2kG+Y4fnR8t42g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YVGcraekkEuReX4yF5NW3Q", callContext.id) && ((vars.value.exceptThemeInLocal) !== (Connect2_LegacySharedModel.staticEntities.themeClass.mediaHub)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nF+mUxUpLkuPhd+J5Q8wVw", callContext.id);
// Execute Action: RemoveMediaHubThemeFromBody
Connect2_LegacySharedController.default.removeThemeClassFromBody$Action(Connect2_LegacySharedModel.staticEntities.themeClass.mediaHub, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uuBhRCMkg0OJR2e8WIORpA", callContext.id) && ((vars.value.exceptThemeInLocal) !== (Connect2_LegacySharedModel.staticEntities.themeClass.connect)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9KVhBkIXBU6XQUiEiuLpWg", callContext.id);
// Execute Action: RemoveConnectThemeFromBody
Connect2_LegacySharedController.default.removeThemeClassFromBody$Action(Connect2_LegacySharedModel.staticEntities.themeClass.connect, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xwQr29Hv0U+SBkSAXeforw", callContext.id) && ((vars.value.exceptThemeInLocal) !== (Connect2_LegacySharedModel.staticEntities.themeClass.orbit)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:l6Z6M_Az_kq++dH7vbZs9g", callContext.id);
// Execute Action: RemoveOrbitThemeFromBody
Connect2_LegacySharedController.default.removeThemeClassFromBody$Action(Connect2_LegacySharedModel.staticEntities.themeClass.orbit, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IOyIgSora0KqzsQ7WPPtLw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IOyIgSora0KqzsQ7WPPtLw", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:midzcXhnbEiL2yINhyQo2w", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveAllThemeClassesFromBody$vars", [{
name: "ExceptTheme",
attrName: "exceptThemeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.removeAllThemeClassesFromBody$Action = function (exceptThemeIn) {
exceptThemeIn = (exceptThemeIn === undefined) ? "" : exceptThemeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.removeAllThemeClassesFromBody$Action.bind(controller, exceptThemeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$RemoveBookmarkFromCache", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.clientVariables", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_LegacyShared.model$BookmarkItemList", "Connect2_LegacyShared.controller$GetCachedMyBookmarks", "Connect2_LegacyShared.controller$PutCachedMyBookmarks"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.removeBookmarkFromCache$Action = function (in_GroupIn, in_BookmarkIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveBookmarkFromCache$vars"))());
vars.value.in_GroupInLocal = in_GroupIn;
vars.value.in_BookmarkIdInLocal = in_BookmarkIdIn;
var getCachedMyBookmarksVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveBookmarkFromCache$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCachedMyBookmarksVar = getCachedMyBookmarksVar;
varBag.listIndexOfVar = listIndexOfVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:XlSZ0wJr+U+4DhKNzbBTsQ:/ClientActionFlows.XlSZ0wJr+U+4DhKNzbBTsQ:yzrpD9PF1FozO7eqvUMHZg", "Connect2_LegacyShared", "RemoveBookmarkFromCache", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nF68loaSSEievHhNPvlEqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QD6WLkZRL0Kqy_HuX6tqzw", callContext.id);
// Execute Action: GetCachedMyBookmarks
getCachedMyBookmarksVar.value = Connect2_LegacySharedController.default.getCachedMyBookmarks$Action(vars.value.in_GroupInLocal, callContext);

// Cache Hit?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+Oo+TVm4zkGUV2J2fi8YKQ", callContext.id) && getCachedMyBookmarksVar.value.cacheHitOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:yYr1vAQMPE6sGv12BhB9eA", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(getCachedMyBookmarksVar.value.bookmarksOut, function (p) {
return (p.objectIdAttr === OS.BuiltinFunctions.longIntegerToText(vars.value.in_BookmarkIdInLocal));
}, callContext);

// Exists?
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:J8XE0CNII0Kqp3zmjJXQeg", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zzh1jkG7d0alSU_i+MI+Jw", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(getCachedMyBookmarksVar.value.bookmarksOut, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2JR5UMaVO0CQsr9RHdcdwg", callContext.id);
// Execute Action: PutCachedMyBookmarks
Connect2_LegacySharedController.default.putCachedMyBookmarks$Action(vars.value.in_GroupInLocal, getCachedMyBookmarksVar.value.bookmarksOut, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nb0Sa4HSpESxWYOweJ70jQ", callContext.id);
// Success = True
outVars.value.successOut = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WF8moL4u_02u8dee_7gQuA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4YD6052RVUK_089Qk8urgA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:r62cQoUcRUCRHZw86BJjKw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:XlSZ0wJr+U+4DhKNzbBTsQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveBookmarkFromCache$vars", [{
name: "In_Group",
attrName: "in_GroupInLocal",
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
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveBookmarkFromCache$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.removeBookmarkFromCache$Action = function (in_GroupIn, in_BookmarkIdIn) {
in_GroupIn = (in_GroupIn === undefined) ? "" : in_GroupIn;
in_BookmarkIdIn = (in_BookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_BookmarkIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.removeBookmarkFromCache$Action.bind(controller, in_GroupIn, OS.DataConversion.JSNodeParamConverter.from(in_BookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("Connect2_LegacyShared.controller$RemoveDiacritics", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$RemoveDiacritics.RemoveDiacriticsJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_RemoveDiacritics_RemoveDiacriticsJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.removeDiacritics$Action = function (textIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveDiacritics$vars"))());
vars.value.textInLocal = textIn;
var removeDiacriticsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveDiacritics$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.removeDiacriticsJSResult = removeDiacriticsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:jzYgB+7LC0CksI+ZnXloZw:/ClientActionFlows.jzYgB+7LC0CksI+ZnXloZw:p3LJXdS9K6RLSTrpHeppSQ", "Connect2_LegacyShared", "RemoveDiacritics", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:yL3WwLYDGkecvlZ4ozD3ag", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MTgMN9guEES6yyrhp6naaQ", callContext.id);
removeDiacriticsJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_RemoveDiacritics_RemoveDiacriticsJS, "RemoveDiacritics", "RemoveDiacritics", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text),
ProcessedText: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveDiacritics$removeDiacriticsJSResult"))();
jsNodeResult.processedTextOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ProcessedText, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vEsF5lpoykartbHeF0HzHw", callContext.id);
// ProcessedText = RemoveDiacritics.ProcessedText
outVars.value.processedTextOut = removeDiacriticsJSResult.value.processedTextOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CaWzVKtM_0ecqbANICx5Bg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:jzYgB+7LC0CksI+ZnXloZw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveDiacritics$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveDiacritics$removeDiacriticsJSResult", [{
name: "ProcessedText",
attrName: "processedTextOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveDiacritics$outVars", [{
name: "ProcessedText",
attrName: "processedTextOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.removeDiacritics$Action = function (textIn) {
textIn = (textIn === undefined) ? "" : textIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.removeDiacritics$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ProcessedText: OS.DataConversion.JSNodeParamConverter.to(actionResults.processedTextOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$RemoveDiacritics.RemoveDiacriticsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ProcessedText = $parameters.Text.normalize('NFD').replace(/\p{Diacritic}/gu, '');
};
});

define("Connect2_LegacyShared.controller$RemoveRegexSpecialCharacters", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$RemoveRegexSpecialCharacters.RemoveRegexSpecialCharactersJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_RemoveRegexSpecialCharacters_RemoveRegexSpecialCharactersJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.removeRegexSpecialCharacters$Action = function (textIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveRegexSpecialCharacters$vars"))());
vars.value.textInLocal = textIn;
var removeRegexSpecialCharactersJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveRegexSpecialCharacters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.removeRegexSpecialCharactersJSResult = removeRegexSpecialCharactersJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:13oi2WOG2Ei_JiZESSEjtA:/ClientActionFlows.13oi2WOG2Ei_JiZESSEjtA:oglVyuCpbMlWZGlolWUZcA", "Connect2_LegacyShared", "RemoveRegexSpecialCharacters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NlVxO71OcEODsJjfbTA5aA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Y0AGssyPrESPc2IL1kBG5w", callContext.id);
removeRegexSpecialCharactersJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_controller_RemoveRegexSpecialCharacters_RemoveRegexSpecialCharactersJS, "RemoveRegexSpecialCharacters", "RemoveRegexSpecialCharacters", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveRegexSpecialCharacters$removeRegexSpecialCharactersJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// TextRegexSafe
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xnS_xPffJ06M2z2m2E_bpQ", callContext.id);
// TextRegexSafe = RemoveRegexSpecialCharacters.Result
outVars.value.textRegexSafeOut = removeRegexSpecialCharactersJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rPq5CdnrzUa7z_beVCb3Tw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:13oi2WOG2Ei_JiZESSEjtA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveRegexSpecialCharacters$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveRegexSpecialCharacters$removeRegexSpecialCharactersJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveRegexSpecialCharacters$outVars", [{
name: "TextRegexSafe",
attrName: "textRegexSafeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.removeRegexSpecialCharacters$Action = function (textIn) {
textIn = (textIn === undefined) ? "" : textIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.removeRegexSpecialCharacters$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TextRegexSafe: OS.DataConversion.JSNodeParamConverter.to(actionResults.textRegexSafeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Connect2_LegacyShared.controller$RemoveRegexSpecialCharacters.RemoveRegexSpecialCharactersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.Text)
    $parameters.Result = $parameters.Text.replace(/[.,#*+?^$&{}()%@|[\-\]\\]/g, ' ')
};
});

define("Connect2_LegacyShared.controller$RemoveThemeClassFromBody", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$RemoveThemeClassFromBody.RemoveThemeJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_RemoveThemeClassFromBody_RemoveThemeJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.removeThemeClassFromBody$Action = function (themeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.RemoveThemeClassFromBody$vars"))());
vars.value.themeInLocal = themeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:CY25VQhN60eZxcofD5eACg:/ClientActionFlows.CY25VQhN60eZxcofD5eACg:bvkOwO+IJrypFzRTUt+ugw", "Connect2_LegacyShared", "RemoveThemeClassFromBody", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JzNvyQ3ZVkWgX3KHsG54Pg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F+aW4DMzUEaJSCDuF_yEzg", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_RemoveThemeClassFromBody_RemoveThemeJS, "RemoveTheme", "RemoveThemeClassFromBody", {
ThemeName: OS.DataConversion.JSNodeParamConverter.to(vars.value.themeInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PNml+SDaLU638vcIzhx1mw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:CY25VQhN60eZxcofD5eACg", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.RemoveThemeClassFromBody$vars", [{
name: "Theme",
attrName: "themeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.removeThemeClassFromBody$Action = function (themeIn) {
themeIn = (themeIn === undefined) ? "" : themeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.removeThemeClassFromBody$Action.bind(controller, themeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$RemoveThemeClassFromBody.RemoveThemeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.getElementsByTagName('body')[0];
try{body.classList.remove($parameters.ThemeName);}
catch(err){}
};
});

define("Connect2_LegacyShared.controller$SendBookmarkedFeedbackMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.sendBookmarkedFeedbackMessage$Action = function (isCreateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.SendBookmarkedFeedbackMessage$vars"))());
vars.value.isCreateInLocal = isCreateIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:mwx5ZCSR0k+8tWzlc98sPA:/ClientActionFlows.mwx5ZCSR0k+8tWzlc98sPA:6dyKTTJKWdIgU1S3sMHp2A", "Connect2_LegacyShared", "SendBookmarkedFeedbackMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eLp8cqSqzUi49RuXD88bHQ", callContext.id);
// Bookmark Feedback
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iH+uxxzq90mXIo8sfqYpFA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(((vars.value.isCreateInLocal) ? ("Added to your Bookmarks") : ("Removed from your Bookmarks")), /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jObWyxAVwEaGCzUzf5EDAw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:mwx5ZCSR0k+8tWzlc98sPA", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.SendBookmarkedFeedbackMessage$vars", [{
name: "IsCreate",
attrName: "isCreateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.sendBookmarkedFeedbackMessage$Action = function (isCreateIn) {
isCreateIn = (isCreateIn === undefined) ? false : isCreateIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.sendBookmarkedFeedbackMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isCreateIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$SetThemeClassToBody", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$AddThemeClassToBody", "Connect2_LegacyShared.controller$RemoveAllThemeClassesFromBody"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.setThemeClassToBody$Action = function (themeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.SetThemeClassToBody$vars"))());
vars.value.themeInLocal = themeIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:5azTUE+fAUK9vkVmxzX5Vw:/ClientActionFlows.5azTUE+fAUK9vkVmxzX5Vw:JL6mrP_SAM_hKE41+8jVwg", "Connect2_LegacyShared", "SetThemeClassToBody", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LAI+ANY7ik+DHU2I1bcyjQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:g3l1o2UTxUurypmLvD305g", callContext.id);
// Execute Action: RemoveAllThemeClassesFromBody
Connect2_LegacySharedController.default.removeAllThemeClassesFromBody$Action(vars.value.themeInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GOnEguNaXEm+X3mgtyWQ9Q", callContext.id);
// Execute Action: AddThemeClassToBody
Connect2_LegacySharedController.default.addThemeClassToBody$Action(vars.value.themeInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:j1SaDWn8Nk6CnqEYjQstSQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:5azTUE+fAUK9vkVmxzX5Vw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.SetThemeClassToBody$vars", [{
name: "Theme",
attrName: "themeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.setThemeClassToBody$Action = function (themeIn) {
themeIn = (themeIn === undefined) ? "" : themeIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.setThemeClassToBody$Action.bind(controller, themeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$SetUnreadNotificationsNumber", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.setUnreadNotificationsNumber$Action = function (unreadNotificationsNumberIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.SetUnreadNotificationsNumber$vars"))());
vars.value.unreadNotificationsNumberInLocal = unreadNotificationsNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:UrAqFPEFiEyZdcbYk+PePw:/ClientActionFlows.UrAqFPEFiEyZdcbYk+PePw:+w+EahhPQREt3QzDnHKQ3Q", "Connect2_LegacyShared", "SetUnreadNotificationsNumber", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SjBWgOfq5k+CmAVGZqTh+g", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:85ZnpsbdE06DqBOgsQk2Ag", callContext.id);
// UnreadNotificationsNumber = UnreadNotificationsNumber
Connect2_LegacySharedClientVariables.setUnreadNotificationsNumber(vars.value.unreadNotificationsNumberInLocal);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kKv_eNbqpESjv5yPg8oT8w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:UrAqFPEFiEyZdcbYk+PePw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.SetUnreadNotificationsNumber$vars", [{
name: "UnreadNotificationsNumber",
attrName: "unreadNotificationsNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.setUnreadNotificationsNumber$Action = function (unreadNotificationsNumberIn) {
unreadNotificationsNumberIn = (unreadNotificationsNumberIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : unreadNotificationsNumberIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.setUnreadNotificationsNumber$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(unreadNotificationsNumberIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$ShareProfileToOther", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$AuditShareEvent", "Connect2_LegacyShared.controller$ServerAction.CS_CreateShareProfileLink", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$SocialSharing", "Connect2_LegacyShared.referencesHealth$SocialSharingPlugin"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, CommonPluginModel, SocialSharingPluginController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.shareProfileToOther$Action = function (sharingMemberIDIn, shareObjectTypeIdIn, objectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.ShareProfileToOther$vars"))());
vars.value.sharingMemberIDInLocal = sharingMemberIDIn;
vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
vars.value.objectIdInLocal = objectIdIn;
var sharePluginErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var cS_CreateShareProfileLinkVar = new OS.DataTypes.VariableHolder();
var socialSharingVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sharePluginErrorVar = sharePluginErrorVar;
varBag.cS_CreateShareProfileLinkVar = cS_CreateShareProfileLinkVar;
varBag.socialSharingVar = socialSharingVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:XTeAEtMTuEa9V7kiEChQOw:/ClientActionFlows.XTeAEtMTuEa9V7kiEChQOw:Rfc5g8aQ7k6wwswf0qbf9A", "Connect2_LegacyShared", "ShareProfileToOther", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Qjk3WA6qi0CCdz0NdqVVHw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FTipdCHik0iqhOnZoPYekw", callContext.id);
// Execute Action: CS_CreateShareProfileLink
return controller.cS_CreateShareProfileLink$ServerAction(vars.value.shareObjectTypeIdInLocal, OS.BuiltinFunctions.longIntegerToText(vars.value.objectIdInLocal), "", OS.DataTypes.DateTime.defaultValue, callContext).then(function (value) {
cS_CreateShareProfileLinkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rYpC8GRrL0+chuqHzkkdlQ", callContext.id);
// Execute Action: SocialSharing
return SocialSharingPluginController.default.socialSharing$Action(cS_CreateShareProfileLinkVar.value.uRLOut, "", OS.BuiltinFunctions.nullTextIdentifier(), callContext).then(function (value) {
socialSharingVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:am4b2nuEL0ylGPkq5O7x1Q", callContext.id) && socialSharingVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LCbmPypEr0+8mGCaequdnQ", callContext.id);
// Execute Action: AuditShareEvent
return Connect2_LegacySharedController.default.auditShareEvent$Action(OS.BuiltinFunctions.longIntegerToText(cS_CreateShareProfileLinkVar.value.shareIdOut), vars.value.sharingMemberIDInLocal, "", "Others", vars.value.shareObjectTypeIdInLocal, OS.BuiltinFunctions.longIntegerToText(vars.value.objectIdInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2GWG9Y6DNkmuqOW74CtpBw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mDWawoP_30aJbJ0n3qrsiw", callContext.id);
// Raise Error: SharePluginError
throw new OS.Exceptions.Exceptions.UserException("Connect2_LegacyShared.SharePluginError", ((socialSharingVar.value.errorOut.errorCodeAttr + " - ") + socialSharingVar.value.errorOut.errorMessageAttr));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ShareProfileToOther.ShareProfileToOther", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SharePluginError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_LegacyShared.SharePluginError")) {
OS.Logger.error(null, ex);
sharePluginErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(sharePluginErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t1109V8FoU25VXrtaq_7hQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aOKPRX3a60y8mLdVH4XnuQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(sharePluginErrorVar.value.exceptionMessageAttr, /*Warning*/ 2);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:b1f3trQNwkyxRgvS8D0bMQ", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:XTeAEtMTuEa9V7kiEChQOw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:XTeAEtMTuEa9V7kiEChQOw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.ShareProfileToOther$vars", [{
name: "SharingMemberID",
attrName: "sharingMemberIDInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShareObjectTypeId",
attrName: "shareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.shareProfileToOther$Action = function (sharingMemberIDIn, shareObjectTypeIdIn, objectIdIn) {
sharingMemberIDIn = (sharingMemberIDIn === undefined) ? "" : sharingMemberIDIn;
shareObjectTypeIdIn = (shareObjectTypeIdIn === undefined) ? "" : shareObjectTypeIdIn;
objectIdIn = (objectIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : objectIdIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.shareProfileToOther$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(sharingMemberIDIn, OS.DataTypes.DataTypes.Text), shareObjectTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$ShowCustomFeedbackMessageAndTitle", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$ShowCustomFeedbackMessageAndTitle.ShowCustomFeedbackMessageWithTitleJS", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_ShowCustomFeedbackMessageAndTitle_ShowCustomFeedbackMessageWithTitleJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.showCustomFeedbackMessageAndTitle$Action = function (titleIn, messageIn, messageTypeIn, isEncodeHTMLIn, extraCssClassesIn, isCloseOnClickIn, imageURLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.ShowCustomFeedbackMessageAndTitle$vars"))());
vars.value.titleInLocal = titleIn;
vars.value.messageInLocal = messageIn;
vars.value.messageTypeInLocal = messageTypeIn;
vars.value.isEncodeHTMLInLocal = isEncodeHTMLIn;
vars.value.extraCssClassesInLocal = extraCssClassesIn;
vars.value.isCloseOnClickInLocal = isCloseOnClickIn;
vars.value.imageURLInLocal = imageURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Syu_3hzCTkKZUtOqbfPnEw:/ClientActionFlows.Syu_3hzCTkKZUtOqbfPnEw:14qfRqC58rgsTA3PkBA8ow", "Connect2_LegacyShared", "ShowCustomFeedbackMessageAndTitle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oBdvwjm8gEatoVuVVpHLyA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qXM8knNaMECex7QlcW3hmA", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_ShowCustomFeedbackMessageAndTitle_ShowCustomFeedbackMessageWithTitleJS, "ShowCustomFeedbackMessageWithTitle", "ShowCustomFeedbackMessageAndTitle", {
CloseOnClick: OS.DataConversion.JSNodeParamConverter.to(vars.value.isCloseOnClickInLocal, OS.DataTypes.DataTypes.Boolean),
MessageType: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageTypeInLocal, OS.DataTypes.DataTypes.Integer),
ExtraCssClasses: OS.DataConversion.JSNodeParamConverter.to(vars.value.extraCssClassesInLocal, OS.DataTypes.DataTypes.Text),
Title: OS.DataConversion.JSNodeParamConverter.to(vars.value.titleInLocal, OS.DataTypes.DataTypes.Text),
ImageURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.imageURLInLocal, OS.DataTypes.DataTypes.Text),
EncodeHTML: OS.DataConversion.JSNodeParamConverter.to(vars.value.isEncodeHTMLInLocal, OS.DataTypes.DataTypes.Boolean),
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ipED8OfiAka__2AEmIgUug", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Syu_3hzCTkKZUtOqbfPnEw", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.ShowCustomFeedbackMessageAndTitle$vars", [{
name: "Title",
attrName: "titleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageType",
attrName: "messageTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IsEncodeHTML",
attrName: "isEncodeHTMLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "ExtraCssClasses",
attrName: "extraCssClassesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsCloseOnClick",
attrName: "isCloseOnClickInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "ImageURL",
attrName: "imageURLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.showCustomFeedbackMessageAndTitle$Action = function (titleIn, messageIn, messageTypeIn, isEncodeHTMLIn, extraCssClassesIn, isCloseOnClickIn, imageURLIn) {
titleIn = (titleIn === undefined) ? "" : titleIn;
messageIn = (messageIn === undefined) ? "" : messageIn;
messageTypeIn = (messageTypeIn === undefined) ? 0 : messageTypeIn;
isEncodeHTMLIn = (isEncodeHTMLIn === undefined) ? true : isEncodeHTMLIn;
extraCssClassesIn = (extraCssClassesIn === undefined) ? "" : extraCssClassesIn;
isCloseOnClickIn = (isCloseOnClickIn === undefined) ? true : isCloseOnClickIn;
imageURLIn = (imageURLIn === undefined) ? "" : imageURLIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.showCustomFeedbackMessageAndTitle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(titleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(messageTypeIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(isEncodeHTMLIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(extraCssClassesIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isCloseOnClickIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(imageURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$ShowCustomFeedbackMessageAndTitle.ShowCustomFeedbackMessageWithTitleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var htmlContent = "<div class='title'>" + $parameters.Title + "</div>" +
                  "<div class='message-body'>" + $parameters.Message + "</div>";

if ($parameters.ImageURL) {
    var feedbackLogo = new Image();
    feedbackLogo.src = $parameters.ImageURL;
    feedbackLogo.onload = function () {
        $public.FeedbackMessage.showFeedbackMessage(
            htmlContent,
            $parameters.MessageType,
            $parameters.EncodeHTML,
            $parameters.ExtraCssClasses,
            $parameters.CloseOnClick
        );
    };
} else {
    $public.FeedbackMessage.showFeedbackMessage(
        htmlContent,
        $parameters.MessageType,
        $parameters.EncodeHTML,
        $parameters.ExtraCssClasses,
        $parameters.CloseOnClick
    );
}

};
});

define("Connect2_LegacyShared.controller$ShowUnknownErrorMessage", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$ShowUnknownErrorMessage.DispatchErrorMessageJS", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$ShowCustomFeedbackMessageAndTitle"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacyShared_controller_ShowUnknownErrorMessage_DispatchErrorMessageJS, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.showUnknownErrorMessage$Action = function (mainMessageIn, errorMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.ShowUnknownErrorMessage$vars"))());
vars.value.mainMessageInLocal = mainMessageIn;
vars.value.errorMessageInLocal = errorMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:51Be2u2JvkexJK96R8OmpQ:/ClientActionFlows.51Be2u2JvkexJK96R8OmpQ:FSJkuIjvj3n9TrPqhtVpBw", "Connect2_LegacyShared", "ShowUnknownErrorMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ScKkgZOG6kmHV0mK94BM8A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:r0nFXwdSSkKHPo9Br0Yl_Q", callContext.id) && ((OS.BuiltinFunctions.index(vars.value.errorMessageInLocal, "An error has occurred.", 0, false, false)) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rAPZ6OaH_kqhnu8F8spHQQ", callContext.id);
// Execute Action: ShowCustomFeedbackMessageAndTitle
Connect2_LegacySharedController.default.showCustomFeedbackMessageAndTitle$Action("Service Interruption", "We’re currently experiencing unusually high traffic, which may affect access to some services.<br>\r\nOur team is working to restore full functionality as quickly as possible.<br>\r\nThank you for your patience and understanding.", 0, false, "feedback-with-title", true, "", callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:N8Bl2VDqOUqZmzIssWCo_Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:99ctn4WHK0GIMYHSVBSNqw", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_controller_ShowUnknownErrorMessage_DispatchErrorMessageJS, "DispatchErrorMessage", "ShowUnknownErrorMessage", {
MainMessage: OS.DataConversion.JSNodeParamConverter.to(vars.value.mainMessageInLocal, OS.DataTypes.DataTypes.Text),
ErrorMesage: OS.DataConversion.JSNodeParamConverter.to(vars.value.errorMessageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GP33dWWEM0ORU5Kn_sL0Ng", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:51Be2u2JvkexJK96R8OmpQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.ShowUnknownErrorMessage$vars", [{
name: "MainMessage",
attrName: "mainMessageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.showUnknownErrorMessage$Action = function (mainMessageIn, errorMessageIn) {
mainMessageIn = (mainMessageIn === undefined) ? "" : mainMessageIn;
errorMessageIn = (errorMessageIn === undefined) ? "" : errorMessageIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.showUnknownErrorMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mainMessageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Connect2_LegacyShared.controller$ShowUnknownErrorMessage.DispatchErrorMessageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.dispatchEvent(new CustomEvent("show-common-error-message",{detail: {message: $parameters.ErrorMesage, mainMessage: $parameters.MainMessage}}));
};
});

define("Connect2_LegacyShared.controller$StoreNumberUnreadMessages", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.clientVariables"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.storeNumberUnreadMessages$Action = function (numberPublicUnreadMessagesIn, numberPrivateUnreadMessagesIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.StoreNumberUnreadMessages$vars"))());
vars.value.numberPublicUnreadMessagesInLocal = numberPublicUnreadMessagesIn;
vars.value.numberPrivateUnreadMessagesInLocal = numberPrivateUnreadMessagesIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:xSwtaohfekebf8HJWmy8YQ:/ClientActionFlows.xSwtaohfekebf8HJWmy8YQ:K7M800RS7bboVYZnOuI0hA", "Connect2_LegacyShared", "StoreNumberUnreadMessages", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wSFSPgCC0Uycbu_XJDhhDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qd+vYSwD8kGuypis4Tpk2g", callContext.id);
// UnreadNotificationsNumber = NumberPublicUnreadMessages + NumberPrivateUnreadMessages
Connect2_LegacySharedClientVariables.setUnreadNotificationsNumber(vars.value.numberPublicUnreadMessagesInLocal.add(vars.value.numberPrivateUnreadMessagesInLocal));
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qd+vYSwD8kGuypis4Tpk2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UnreadPublicMessagesNumber = NumberPublicUnreadMessages
Connect2_LegacySharedClientVariables.setUnreadPublicMessagesNumber(vars.value.numberPublicUnreadMessagesInLocal);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:871icm9uQkeCe5KJW77ewg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:xSwtaohfekebf8HJWmy8YQ", callContext.id);
}

};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.StoreNumberUnreadMessages$vars", [{
name: "NumberPublicUnreadMessages",
attrName: "numberPublicUnreadMessagesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "NumberPrivateUnreadMessages",
attrName: "numberPrivateUnreadMessagesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.storeNumberUnreadMessages$Action = function (numberPublicUnreadMessagesIn, numberPrivateUnreadMessagesIn) {
numberPublicUnreadMessagesIn = (numberPublicUnreadMessagesIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : numberPublicUnreadMessagesIn;
numberPrivateUnreadMessagesIn = (numberPrivateUnreadMessagesIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : numberPrivateUnreadMessagesIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.storeNumberUnreadMessages$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(numberPublicUnreadMessagesIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(numberPrivateUnreadMessagesIn, OS.DataTypes.DataTypes.LongInteger)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$SynchBookmarks", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.entities", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.model$LocalBookmarkRecordList", "Connect2_LegacyShared.model$LocalBookmarkList", "Connect2_LegacyShared.model$LocalBookmarkRec"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.synchBookmarks$Action = function (updatedBookmarksIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.SynchBookmarks$vars"))());
vars.value.updatedBookmarksInLocal = updatedBookmarksIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:5K0xjFQH6U6ZEsOGELxeFw:/ClientActionFlows.5K0xjFQH6U6ZEsOGELxeFw:58WP+064CYZfbbYtB7b12w", "Connect2_LegacyShared", "SynchBookmarks", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:N7CanE3gekyVCXl8vev4MQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NGBEoqjmZU6wZwdQpYR6lQ", callContext.id);
// Execute Action: DeleteAllLocalBookmark
return Connect2_LegacySharedModel.entities.LocalBookmark.deleteAll(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fabiUJPpiESwQuHXIdj9TA", callContext.id);
// Execute Action: CreateOrUpdateSomeLocalBookmark
return Connect2_LegacySharedModel.entities.LocalBookmark.createOrUpdateAll(OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.updatedBookmarksInLocal, new Connect2_LegacySharedModel.LocalBookmarkRecordList(), function (source, target) {
target = Connect2_LegacySharedModel.LocalBookmarkRecord.fromStructure(source);
return target;
}), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pY+fL+gNfUml4fq7C8BXxg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:5K0xjFQH6U6ZEsOGELxeFw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:5K0xjFQH6U6ZEsOGELxeFw", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.SynchBookmarks$vars", [{
name: "UpdatedBookmarks",
attrName: "updatedBookmarksInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalBookmarkList();
},
complexType: Connect2_LegacySharedModel.LocalBookmarkList
}]);
Connect2_LegacySharedController.default.clientActionProxies.synchBookmarks$Action = function (updatedBookmarksIn) {
updatedBookmarksIn = (updatedBookmarksIn === undefined) ? new Connect2_LegacySharedModel.LocalBookmarkList() : updatedBookmarksIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.synchBookmarks$Action.bind(controller, updatedBookmarksIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$SynchronizeNumberUnreadMessages", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.controller$ServerAction.GetNumberUnreadMessages", "Connect2_LegacyShared.controller$StoreNumberUnreadMessages", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManager_CSModel, UBT_AppManagerController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.synchronizeNumberUnreadMessages$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var onlineCommunicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getNumberUnreadMessagesVar = new OS.DataTypes.VariableHolder();
var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.onlineCommunicationExceptionVar = onlineCommunicationExceptionVar;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.getNumberUnreadMessagesVar = getNumberUnreadMessagesVar;
varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:FGfkvK6JmEif4DEJ5IHMlQ:/ClientActionFlows.FGfkvK6JmEif4DEJ5IHMlQ:1M1UXTX7QJn1LXd0UmxZYQ", "Connect2_LegacyShared", "SynchronizeNumberUnreadMessages", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EvABjgO9s0mnwSQUP_Qlsg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EvFpk4KwvEOsyeJTM7EaXg", callContext.id);
// Execute Action: AppManager_GetDeviceContext
appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MCTjvTLdakGnaEsu0RVEaQ", callContext.id) && ((appManager_GetDeviceContextVar.value.appManager_MobileContextOut.uUIDAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:b93AO9gUdUepAdxQAHuF1w", callContext.id);
// Execute Action: GetNumberUnreadMessages
return controller.getNumberUnreadMessages$ServerAction(appManager_GetDeviceContextVar.value.appManager_MobileContextOut.uUIDAttr, callContext).then(function (value) {
getNumberUnreadMessagesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AX4tXANcsUCUzje3bXBwAA", callContext.id);
// Execute Action: StoreNumberUnreadMessages
Connect2_LegacySharedController.default.storeNumberUnreadMessages$Action(getNumberUnreadMessagesVar.value.numberPublicUnreadMessagesOut, getNumberUnreadMessagesVar.value.numberPrivateUnreadMessagesOut, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m1j72FJ4F0CdkCIm3k2IwQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sGIcLYfqeUyrGdYfbv91nQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("SynchronizeNumberUnreadMessages.SynchronizeNumberUnreadMessages", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: OnlineCommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_LegacyShared.OnlineCommunicationException")) {
OS.Logger.error(null, ex);
onlineCommunicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(onlineCommunicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OzuoLIaLhkKUHI878_mrzg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:45EnReiLkEWOqFkUYNWpYA", callContext.id);
return OS.Flow.returnAsync();

});
}

// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OSffh87440mFwS5YZYmkCA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qXfYY+xsoUesfo_jzA4zfQ", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:FGfkvK6JmEif4DEJ5IHMlQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:FGfkvK6JmEif4DEJ5IHMlQ", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.clientActionProxies.synchronizeNumberUnreadMessages$Action = function () {
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.synchronizeNumberUnreadMessages$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager.controller", "Connect2_LegacyShared.clientVariables", "UBT_AppManager.controller$AzureInsights_CreateCustomEvent", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.controller$GetAppEventName"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManagerController, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action = function (eventIdIn, attachmentJSONIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.zOnApplicationEvent_Wrapper$vars"))());
vars.value.eventIdInLocal = eventIdIn;
vars.value.attachmentJSONInLocal = attachmentJSONIn;
var getAppEventNameVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAppEventNameVar = getAppEventNameVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:tTkKJIsFOEiB3OgmOqN8lA:/ClientActionFlows.tTkKJIsFOEiB3OgmOqN8lA:Q5ekTPMR0iTxeA313VmcLQ", "Connect2_LegacyShared", "zOnApplicationEvent_Wrapper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_5XXrz6t_0iPiNOA7+RuiQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iEyXpQDI7UqKXjyf4HqcBw", callContext.id);
// Execute Action: GetAppEventName
return Connect2_LegacySharedController.default.getAppEventName$Action(vars.value.eventIdInLocal, callContext).then(function (value) {
getAppEventNameVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:maAEIBdE5UuBOlTbm6pl8g", callContext.id);
// Execute Action: Create_InsightsCustomEvent
return UBT_AppManagerController.default.azureInsights_CreateCustomEvent$Action(getAppEventNameVar.value.nameOut, vars.value.attachmentJSONInLocal, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5AeebiyaQ0CRTpVRunGbwQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:tTkKJIsFOEiB3OgmOqN8lA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:tTkKJIsFOEiB3OgmOqN8lA", callContext.id);
throw ex;

});
};
var controller = Connect2_LegacySharedController.default;
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared.zOnApplicationEvent_Wrapper$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AttachmentJSON",
attrName: "attachmentJSONInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Connect2_LegacySharedController.default.clientActionProxies.zOnApplicationEvent_Wrapper$Action = function (eventIdIn, attachmentJSONIn) {
eventIdIn = (eventIdIn === undefined) ? "" : eventIdIn;
attachmentJSONIn = (attachmentJSONIn === undefined) ? "" : attachmentJSONIn;
return controller.executeActionInsideJSNode(Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(attachmentJSONIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Connect2_LegacyShared.controller$ServerAction.CS_CreateShareProfileLink", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.cS_CreateShareProfileLink$ServerAction = function (in_ShareObjectTypeIdIn, in_SharedObjectIdIn, in_UpdateTypeIn, in_UpdateDateIn, callContext) {
var controller = this.controller;
var inputs = {
In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.to(in_ShareObjectTypeIdIn, OS.DataTypes.DataTypes.Text),
In_SharedObjectId: OS.DataConversion.ServerDataConverter.to(in_SharedObjectIdIn, OS.DataTypes.DataTypes.Text),
In_UpdateType: OS.DataConversion.ServerDataConverter.to(in_UpdateTypeIn, OS.DataTypes.DataTypes.Text),
In_UpdateDate: OS.DataConversion.ServerDataConverter.to(in_UpdateDateIn, OS.DataTypes.DataTypes.Date)
};
return controller.callServerAction("CS_CreateShareProfileLink", "screenservices/Connect2_LegacyShared/ActionCS_CreateShareProfileLink", "UnQ0SEgT2Lrob8+5UkXk5g", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$rssespaceconnect2_sharing_cs_ActionCS_CreateShareProfileLink"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.DataTypes.DataTypes.Text);
executeServerActionResult.shareIdOut = OS.DataConversion.ServerDataConverter.from(outputs.ShareId, OS.DataTypes.DataTypes.LongInteger);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$rssespaceconnect2_sharing_cs_ActionCS_CreateShareProfileLink", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShareId",
attrName: "shareIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetAllApplicationEvents", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$LocalConnectApplicationEventsRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getAllApplicationEvents$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetAllApplicationEvents", "screenservices/Connect2_LegacyShared/ActionGetAllApplicationEvents", "gfEwfoUJxsEnedoibXNBaA", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetAllApplicationEvents"))();
executeServerActionResult.eventListOut = OS.DataConversion.ServerDataConverter.from(outputs.EventList, Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetAllApplicationEvents", [{
name: "EventList",
attrName: "eventListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList();
},
complexType: Connect2_LegacySharedModel.LocalConnectApplicationEventsRecordList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetBulkSubdivisions_V2", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$CacheableSubdivisionInformationTextTextRecordList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getBulkSubdivisions_V2$ServerAction = function (cacheKeysIn, callContext) {
var controller = this.controller;
var inputs = {
CacheKeys: OS.DataConversion.ServerDataConverter.to(cacheKeysIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("GetBulkSubdivisions_V2", "screenservices/Connect2_LegacyShared/ActionGetBulkSubdivisions_V2", "MWSmmZCoLP1HkQyjTRx13A", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetBulkSubdivisions_V2"))();
executeServerActionResult.resultsOut = OS.DataConversion.ServerDataConverter.from(outputs.Results, Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecordList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetBulkSubdivisions_V2", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecordList();
},
complexType: Connect2_LegacySharedModel.CacheableSubdivisionInformationTextTextRecordList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetCountriesBySubscription", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$CountryWithMapPositionList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getCountriesBySubscription$ServerAction = function (subscriptionRegionIdIn, callContext) {
var controller = this.controller;
var inputs = {
SubscriptionRegionId: OS.DataConversion.ServerDataConverter.to(subscriptionRegionIdIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("GetCountriesBySubscription", "screenservices/Connect2_LegacyShared/ActionGetCountriesBySubscription", "wf465+mRDSGhvmOi9QNQlg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetCountriesBySubscription"))();
executeServerActionResult.countriesOut = OS.DataConversion.ServerDataConverter.from(outputs.Countries, Connect2_LegacySharedModel.CountryWithMapPositionList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetCountriesBySubscription", [{
name: "Countries",
attrName: "countriesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.CountryWithMapPositionList();
},
complexType: Connect2_LegacySharedModel.CountryWithMapPositionList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetLocalityInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_LegacyShared.model$BulkSignedPhotoResultList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getLocalityInformation$ServerAction = function (localityIdIn, callContext) {
var controller = this.controller;
var inputs = {
LocalityId: OS.DataConversion.ServerDataConverter.to(localityIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("GetLocalityInformation", "screenservices/Connect2_LegacyShared/ActionGetLocalityInformation", "WKHAwH4mY8UEI0YQ+1VaQw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetLocalityInformation"))();
executeServerActionResult.cacheableLocalityInformationOut = OS.DataConversion.ServerDataConverter.from(outputs.CacheableLocalityInformation, Connect2_LegacySharedModel.CacheableLocalityInformationRec);
executeServerActionResult.signedPhotosPreloadOut = OS.DataConversion.ServerDataConverter.from(outputs.SignedPhotosPreload, Connect2_LegacySharedModel.BulkSignedPhotoResultList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetLocalityInformation", [{
name: "CacheableLocalityInformation",
attrName: "cacheableLocalityInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CacheableLocalityInformationRec();
},
complexType: Connect2_LegacySharedModel.CacheableLocalityInformationRec
}, {
name: "SignedPhotosPreload",
attrName: "signedPhotosPreloadOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BulkSignedPhotoResultList();
},
complexType: Connect2_LegacySharedModel.BulkSignedPhotoResultList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetMemberContactByCacheKey", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$MemberContactWithTimezoneList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getMemberContactByCacheKey$ServerAction = function (cacheKeyIn, callContext) {
var controller = this.controller;
var inputs = {
CacheKey: OS.DataConversion.ServerDataConverter.to(cacheKeyIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("GetMemberContactByCacheKey", "screenservices/Connect2_LegacyShared/ActionGetMemberContactByCacheKey", "+iucy51ULRY13DHBmAttlw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetMemberContactByCacheKey"))();
executeServerActionResult.memberContactListOut = OS.DataConversion.ServerDataConverter.from(outputs.MemberContactList, Connect2_LegacySharedModel.MemberContactWithTimezoneList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetMemberContactByCacheKey", [{
name: "MemberContactList",
attrName: "memberContactListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.MemberContactWithTimezoneList();
},
complexType: Connect2_LegacySharedModel.MemberContactWithTimezoneList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetNumberUnreadMessages", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getNumberUnreadMessages$ServerAction = function (deviceIdIn, callContext) {
var controller = this.controller;
var inputs = {
DeviceId: OS.DataConversion.ServerDataConverter.to(deviceIdIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("GetNumberUnreadMessages", "screenservices/Connect2_LegacyShared/ActionGetNumberUnreadMessages", "sLEdrwtehYjPsYxifRz4NA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetNumberUnreadMessages"))();
executeServerActionResult.numberPublicUnreadMessagesOut = OS.DataConversion.ServerDataConverter.from(outputs.NumberPublicUnreadMessages, OS.DataTypes.DataTypes.LongInteger);
executeServerActionResult.numberPrivateUnreadMessagesOut = OS.DataConversion.ServerDataConverter.from(outputs.NumberPrivateUnreadMessages, OS.DataTypes.DataTypes.LongInteger);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetNumberUnreadMessages", [{
name: "NumberPublicUnreadMessages",
attrName: "numberPublicUnreadMessagesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "NumberPrivateUnreadMessages",
attrName: "numberPrivateUnreadMessagesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetSignedImagesInBulk", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$BulkSignedImageResultList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getSignedImagesInBulk$ServerAction = function (bulkSignedImagesParametersIn, callContext) {
var controller = this.controller;
var inputs = {
BulkSignedImagesParameters: OS.DataConversion.ServerDataConverter.to(bulkSignedImagesParametersIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("GetSignedImagesInBulk", "screenservices/Connect2_LegacyShared/ActionGetSignedImagesInBulk", "IxfDq7je7gGhWyb1lRjAkw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetSignedImagesInBulk"))();
executeServerActionResult.resultsOut = OS.DataConversion.ServerDataConverter.from(outputs.Results, Connect2_LegacySharedModel.BulkSignedImageResultList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetSignedImagesInBulk", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BulkSignedImageResultList();
},
complexType: Connect2_LegacySharedModel.BulkSignedImageResultList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetSignedPhotosInBulk", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$BulkSignedPhotoResultList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getSignedPhotosInBulk$ServerAction = function (parametersIn, callContext) {
var controller = this.controller;
var inputs = {
Parameters: OS.DataConversion.ServerDataConverter.to(parametersIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("GetSignedPhotosInBulk", "screenservices/Connect2_LegacyShared/ActionGetSignedPhotosInBulk", "kFOITH10ufvcmpXXcdbtCg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetSignedPhotosInBulk"))();
executeServerActionResult.resultsOut = OS.DataConversion.ServerDataConverter.from(outputs.Results, Connect2_LegacySharedModel.BulkSignedPhotoResultList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetSignedPhotosInBulk", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.BulkSignedPhotoResultList();
},
complexType: Connect2_LegacySharedModel.BulkSignedPhotoResultList
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetTimezoneInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getTimezoneInformation$ServerAction = function (localityIdIn, callContext) {
var controller = this.controller;
var inputs = {
LocalityId: OS.DataConversion.ServerDataConverter.to(localityIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("GetTimezoneInformation", "screenservices/Connect2_LegacyShared/ActionGetTimezoneInformation", "8P5Yi844uKRdXg2RswHeCQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetTimezoneInformation"))();
executeServerActionResult.timezoneInformationOut = OS.DataConversion.ServerDataConverter.from(outputs.TimezoneInformation, APIDomain_Directory_ISModel.TimezoneRec);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetTimezoneInformation", [{
name: "TimezoneInformation",
attrName: "timezoneInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.TimezoneRec();
},
complexType: APIDomain_Directory_ISModel.TimezoneRec
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetUserInformation", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "APIDomain_Directory_IS.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, APIDomain_Directory_ISModel) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getUserInformation$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetUserInformation", "screenservices/Connect2_LegacyShared/ActionGetUserInformation", "GN8x3RejglUHUc+WcngqLQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetUserInformation"))();
executeServerActionResult.userInformationOut = OS.DataConversion.ServerDataConverter.from(outputs.UserInformation, APIDomain_Directory_ISModel.Users_Current_GETResponseRec);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetUserInformation", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Users_Current_GETResponseRec();
},
complexType: APIDomain_Directory_ISModel.Users_Current_GETResponseRec
}]);
});
define("Connect2_LegacyShared.controller$ServerAction.GetUserLocalitiesForCountryCodeWithGPS", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.model$LocalityResultItemWithGPSList"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;
Connect2_LegacySharedController.default.getUserLocalitiesForCountryCodeWithGPS$ServerAction = function (countryCodeIn, callContext) {
var controller = this.controller;
var inputs = {
CountryCode: OS.DataConversion.ServerDataConverter.to(countryCodeIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("GetUserLocalitiesForCountryCodeWithGPS", "screenservices/Connect2_LegacyShared/ActionGetUserLocalitiesForCountryCodeWithGPS", "JdZx0PUO_TOLlv4DC0mJTg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared$ActionGetUserLocalitiesForCountryCodeWithGPS"))();
executeServerActionResult.resultsOut = OS.DataConversion.ServerDataConverter.from(outputs.Results, Connect2_LegacySharedModel.LocalityResultItemWithGPSList);
return executeServerActionResult;
});
};
Connect2_LegacySharedController.default.constructor.registerVariableGroupType("Connect2_LegacyShared$ActionGetUserLocalitiesForCountryCodeWithGPS", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_LegacySharedModel.LocalityResultItemWithGPSList();
},
complexType: Connect2_LegacySharedModel.LocalityResultItemWithGPSList
}]);
});
define("Connect2_LegacyShared.controller", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller$debugger"], function (exports, OutSystems, Connect2_LegacySharedModel, Connect2_LegacyShared_Controller_debugger) {
var OS = OutSystems.Internal;
var Connect2_LegacySharedController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Connect2_LegacySharedController.default.defaultTimeout;
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
Connect2_LegacySharedController.default = new Controller(null, "Connect2_LegacyShared");
});
define("Connect2_LegacyShared.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.clientVariables"], function (exports, Debugger, OutSystems, Connect2_LegacySharedClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"8CvTrqxkAUqJrbx1efjAQw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"+2DGv2Mb1EO18VXk4CFJ3g": {
getter: function (varBag, idService) {
return varBag.outVars.value.localityInformationOut;
}
},
"IEi48U9JoE+yPZBMnCLC8A": {
getter: function (varBag, idService) {
return varBag.getLocalityInformationVar.value;
}
},
"r7++yx+H50KsRpjkiUDbQg": {
getter: function (varBag, idService) {
return varBag.vars.value.groupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pHszGDinsUaIrclwYK_M0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarksInLocal;
}
},
"mp9CD+RkTkuorfC0mjoFPA": {
getter: function (varBag, idService) {
return varBag.getIOSPlatformVar.value;
}
},
"rb50WcsC0U6b5Vn0zygYcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.auditLog_ShareEventInfoVar;
}
},
"VNrsMWHxskyMgkQTX8jJEg": {
getter: function (varBag, idService) {
return varBag.vars.value.shareIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FBa4I+HyN0ya+GT1exQ4TQ": {
getter: function (varBag, idService) {
return varBag.vars.value.sharingUserIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YmfUXeRuWEW2ddJhhFyykQ": {
getter: function (varBag, idService) {
return varBag.vars.value.targetUserIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b0OvuqYnq0KF4QmcMFUurg": {
getter: function (varBag, idService) {
return varBag.vars.value.targetAppInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4oSgKVEW_k+cLEQNkDDjgw": {
getter: function (varBag, idService) {
return varBag.vars.value.shareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"d+kZGotJ2UegUPbNvlC7TA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Kv42XG86kEuy9OuWnkbeGw": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"dPWkPi_phUC5kKJRntH2pQ": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"7ScxfC7iVEuB+iWHkhuRrA": {
getter: function (varBag, idService) {
return varBag.getIOSPlatformVar.value;
}
},
"0tWQJWll6U+m+OOTmuFHug": {
getter: function (varBag, idService) {
return varBag.getPlatformIOS_PreventSwipeJSResult.value;
}
},
"IuIfnpuaYkillFuvyzn6MQ": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UnuoA1j8i0uzKLMaoDJTLA": {
getter: function (varBag, idService) {
return varBag.outVars.value.processedTextOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MTgMN9guEES6yyrhp6naaQ": {
getter: function (varBag, idService) {
return varBag.removeDiacriticsJSResult.value;
}
},
"wqC17HCKv0alrvMTKibAmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VIj44egzUEydHOS+RGXvPA": {
getter: function (varBag, idService) {
return varBag.vars.value.messageTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0Pp3dRN800acHbVTCrfR4g": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"h0B4JhTLY0igd+F4nZQPhQ": {
getter: function (varBag, idService) {
return varBag.vars.value.sharingMemberIDInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8mBGxIp05ECz_tWtOwmRaA": {
getter: function (varBag, idService) {
return varBag.vars.value.shareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OlLD65Z9B0ygXR6bkVJOPw": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"t1109V8FoU25VXrtaq_7hQ": {
getter: function (varBag, idService) {
return varBag.sharePluginErrorVar.value;
}
},
"FTipdCHik0iqhOnZoPYekw": {
getter: function (varBag, idService) {
return varBag.cS_CreateShareProfileLinkVar.value;
}
},
"rYpC8GRrL0+chuqHzkkdlQ": {
getter: function (varBag, idService) {
return varBag.socialSharingVar.value;
}
},
"atbc87TfOEy7G09ppSKoQg": {
getter: function (varBag, idService) {
return varBag.vars.value.unreadNotificationsNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"3Lg2skuliEGo0Y1WXTDMtA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"chJrwjjXAE+eVXym9yy06g": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"UgafbHTfEEmn7sXDHd_jqw": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdListInLocal;
}
},
"WvCl+9a9OEO5v6H_aG58Mw": {
getter: function (varBag, idService) {
return varBag.outVars.value.memberContactListOut;
}
},
"YyKxVl1cG0SjtgAjaN2T6g": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"ZuadfissJUC8b3g9GMjMIg": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"Nu0zhvpdvUqSP8qVOoeKXg": {
getter: function (varBag, idService) {
return varBag.buildMemberContactsCacheKeysVar.value;
}
},
"+rpCtSLjRE292bJektGW2A": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"9ketND3DNEytC_bmRrdxmA": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"HfZtaeQA_km4m6dw6rEeEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HouseholdNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"L3emkiGQP0SCBPDvS6uK6w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HouseholdNameFixedOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aTSZmWm+X06m79+6LoNl_g": {
getter: function (varBag, idService) {
return varBag.flipHouseholdNameJSResult.value;
}
},
"QZ_7Ya8CUUGgOAGsyZIo8A": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"4TjuNb2A3U6NSi+kAb4uug": {
getter: function (varBag, idService) {
return varBag.outVars.value.timezoneInformationOut;
}
},
"aUCN1DH8PESygoO_hMV+Vw": {
getter: function (varBag, idService) {
return varBag.getTimezoneInformationVar.value;
}
},
"hCwJlh1TKEeBZ+BnqCwwgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdListInLocal;
}
},
"wthDGO8EDU6CJd+tG0FyLA": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheKeyOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8SdddC7edkCq5z9NURYeZw": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_7T5Ad40uUOUfakmcS4bTg": {
getter: function (varBag, idService) {
return varBag.vars.value.attachmentJSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iEyXpQDI7UqKXjyf4HqcBw": {
getter: function (varBag, idService) {
return varBag.getAppEventNameVar.value;
}
},
"ClDfUK_eH0Kf8UEoG_b_PQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheableUserDetailsVar;
}
},
"MFKs+z5pIEC1EIrrO0hmmA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"GUt6KcNSKkuINIWSbE+rGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"oVXvfeetJESwdHPpsJ60mA": {
getter: function (varBag, idService) {
return varBag.outVars.value.userInformationOut;
}
},
"48Z_SEVAnE+IoMQPFxcasQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"g8ofYCzgcUuO7cq3p42QYA": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"MvQd9l3_IUS1DpOssSpigQ": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"kl1wZ5Mb6UGDDNQr5ZS76A": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"QkGQL_5eD0q0W9YOwvT9DQ": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"bWiP7xTNg0+mBmiNhkBk_Q": {
getter: function (varBag, idService) {
return varBag.get_LocalBookmarkByBookmarkIdVar.value;
}
},
"YOSUHTbawE+8KWpPBujpbw": {
getter: function (varBag, idService) {
return varBag.vars.value.isRetryVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+IDMv1BgX02yyHck+yEW5w": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"90rGBz2gD0yJgUD_pQfjoQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"R0Iu5matT0inZP4cDnGPXA": {
getter: function (varBag, idService) {
return varBag.getLocalConnectApplicationEventsVar.value;
}
},
"V5_Eqy5HI0m1D_SZ5FVQNw": {
getter: function (varBag, idService) {
return varBag.outVars.value.unreadNotificationsOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Xj6T0_ylNUCRCFdrGksg3A": {
getter: function (varBag, idService) {
return varBag.outVars.value.mapNavigationRedirectIdOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"234KFkQy60uPb0tF38Mnmw": {
getter: function (varBag, idService) {
return varBag.getOperatingSystemVar.value;
}
},
"5vzjZse44EaxcQGxP4hR8A": {
getter: function (varBag, idService) {
return varBag.checkAppLauncherPluginVar.value;
}
},
"fnNTi7Tjy0Cg05E2F9doTA": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"AavR+ExKFk2Lcs2IuH6kBA": {
getter: function (varBag, idService) {
return varBag.getPlatformIOSJSResult.value;
}
},
"Wp9+Q1OziUmoFcya844WQA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zIn1VM_pDkyUK49NxW+b3w": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"NcZ2hRgpdUi_6JFxMI7MBg": {
getter: function (varBag, idService) {
return varBag.vars.value.groupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jaC0VIlUcUGHWll_VqoV5g": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"CiM3IwM42kydmSjfThhgzA": {
getter: function (varBag, idService) {
return varBag.vars.value.noteInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rsgj7koDuUWgj+Jnw+SVWg": {
getter: function (varBag, idService) {
return varBag.outVars.value.localBookmarkIdOut;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"gr42V4E2cEitsAuS3OuZ3g": {
getter: function (varBag, idService) {
return varBag.createLocalBookmarkVar.value;
}
},
"HkAwEanGSk+no7AwvBBRWQ": {
getter: function (varBag, idService) {
return varBag.checkForRepeatRecordVar.value;
}
},
"_ppmyq2cYkS3zbemrEZn_A": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAppleOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"dK9UlmX0wEWIS0cn_judNA": {
getter: function (varBag, idService) {
return varBag.getPlatformIOS_PreventSwipeJSResult.value;
}
},
"NjV9r4jy20+Kg5MOdiavEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.groupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b8V+fcZLVE6qgaNP+OLnjQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.bookmarksOut;
}
},
"H2EXxAtI+0eMXXFb39OlZQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheHitOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"laHhR5luFE+S4+OumgXqZQ": {
getter: function (varBag, idService) {
return varBag.getCachedObjectVar.value;
}
},
"yD_gytfiz0ayp7BmQrD5aw": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"1wmjcStqnkif0x66uZCQfw": {
getter: function (varBag, idService) {
return varBag.vars.value.themeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"w2HC0YNZNEamrowK+WfrJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UserFirstNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E3yfjmb5Z0aKlW7MM9e_YQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageContentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NfCIx1qRX0+ghpux8Z2r2w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_MessageContentOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"y68ou3OW9EGgAKL89fmZUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.themeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"F+aW4DMzUEaJSCDuF_yEzg": {
getter: function (varBag, idService) {
return varBag.removeThemeJSResult.value;
}
},
"SEd8jjSxRE2qoXK06fEOuA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xVFPLHMsEkCd8I2fKZPn9w": {
getter: function (varBag, idService) {
return varBag.outVars.value.myBookmarksListOut;
}
},
"NnCgeK7WAEGs3Oa8OaL06w": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByObjectTypeVar.value;
}
},
"Ss9ITuDbLEemyzuIz9uzBQ": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QAUKdj5cz0GRzcmLDQF0Aw": {
getter: function (varBag, idService) {
return varBag.outVars.value.localitiesListOut;
}
},
"3_uHn9FJ50mo5QETM+4vGA": {
getter: function (varBag, idService) {
return varBag.getUserLocalitiesForCountryCodeWithGPSVar.value;
}
},
"2fqytk73mkSOGA9LZ3d5wQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CalculatedOffsetInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"v1pIlHOSM06EK1XaOk2cbQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedTargetTimezoneLocalTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XdMTXdPWk0C9_YTTTQnJ5g": {
getter: function (varBag, idService) {
return varBag.getUnixEpochTimestampJSResult.value;
}
},
"yBcmktnqSE+PSY6OoVWwCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"NXw8x2ofqE63hP3i1tY8eg": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"EaTBYEuySUuyuQX17lAjuA": {
getter: function (varBag, idService) {
return varBag.vars.value.subdivisionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"SUEmxLtdKkak05mhwX35mg": {
getter: function (varBag, idService) {
return varBag.outVars.value.subdivisionInformationOut;
}
},
"PpdfV_GH3E6NnMAABfRXhw": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"iecxrqvAt0+I7UHAwusX+g": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"UKbdzxREt0mCG3v1sQ1nTA": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectInBulkVar.value;
}
},
"fdC2JZ32xkGmfJwAukXXaw": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"6UJ_9v2EfUqH0ISUG3AIyg": {
getter: function (varBag, idService) {
return varBag.vars.value.themeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0AeVo0HsCECzGghLDa6NFw": {
getter: function (varBag, idService) {
return varBag.addThemeJSResult.value;
}
},
"gdKp4Mo5wkKtapXrHFrKiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.exceptionMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vu5_C9_wBEGpJS37QKUu+g": {
getter: function (varBag, idService) {
return varBag.outVars.value.isRequestFailedExceptionMessageOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"t4Hi7W12QU28kiaCIGp8NQ": {
getter: function (varBag, idService) {
return varBag.vars.value.rootWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GWurL2fKIUySZl3ljASF9A": {
getter: function (varBag, idService) {
return varBag.vars.value.popupWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QAzKi4xfVUab9sIJD2a1Ww": {
getter: function (varBag, idService) {
return varBag.copyClassesAcrossPortalJSResult.value;
}
},
"xV4QDtZwm0mrOZKpomTGQg": {
getter: function (varBag, idService) {
return varBag.vars.value.isCreateInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EC62VMBm8UWPKBTB3R+dEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"r+aPqI5jokuu++NnDzChGQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.parametersOut;
}
},
"nw1KHyTMBkegDz1TZnpsYg": {
getter: function (varBag, idService) {
return varBag.getCacheKeyPartsVar.value;
}
},
"bEy7vKRbpE2g_ofs74mdYg": {
getter: function (varBag, idService) {
return varBag.vars.value.numberPublicUnreadMessagesInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"tb8Jn64CtUSOESvmgZ_DuA": {
getter: function (varBag, idService) {
return varBag.vars.value.numberPrivateUnreadMessagesInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"zeclY9MNM0SyGtKxNEQKzw": {
getter: function (varBag, idService) {
return varBag.vars.value.localSearchHistoryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"+A7eLrJIlkauSOE4gK_dzw": {
getter: function (varBag, idService) {
return varBag.getLocalSearchHistoryByIdVar.value;
}
},
"8d2fOjoY0kyoRcknlr1_yA": {
getter: function (varBag, idService) {
return varBag.vars.value.exceptThemeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dHu0tHsjo0m6LJPTwwNxlw": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"qbZCxyAOBkaAwoKU3W4F8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ApWW6KvJUUWzlXW6Ykj13g": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"lU6bXi0Y3UaiwYQTGAcGhQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.timezoneResponseOut;
}
},
"3o1QIQcUZUmli_vunsspvg": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"QTJNUvM5R0aoeZ3c1u0QDg": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"r6jJrLKTD0G80ARZWlmu6w": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"vacJq0MfHkire8SLZvTTvQ": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"AbN+7_BBvEe95TSuK4YGpA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"dO379bKbt0KRT9VrB4YJuA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"D+xrsCRTokeSLhmfaqdcXg": {
getter: function (varBag, idService) {
return varBag.vars.value.subscriptionRegionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NADYoU1GDEKicMU+n60pzw": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"8yQGV02hDEOcH9bqwQDCtw": {
getter: function (varBag, idService) {
return varBag.outVars.value.countryWithMapPositionOut;
}
},
"XVpbL8wxT0Gfr6av5yXLUA": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"CAYRod2RdUqDOJndxJ6Erw": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"hiaFHPzlo0mWS3QAH_wkhA": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"71wtIn2sYk6beOF1uBlJUA": {
getter: function (varBag, idService) {
return varBag.vars.value.unreadNotificationsNumberVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"cFA2me6cD0eYNlMNqK5W5w": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"QZY5Sn9pY0Gxoxp4TTL8pg": {
getter: function (varBag, idService) {
return varBag.outVars.value.localBookmarkOut;
}
},
"m8w80KXUAE+oRbM0a24Nkw": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarksByUserIdVar.value;
}
},
"hxeMSRhWOk2tRur_wmF5oQ": {
getter: function (varBag, idService) {
return varBag.vars.value.updatedBookmarksInLocal;
}
},
"m0Qy32e0f0S3RchbSQe3bw": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"F4QbfYqws06gyYmih9C0xg": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lCfg8hPdQ0WVkV17WTnCkg": {
getter: function (varBag, idService) {
return varBag.vars.value.entityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"LAYXpQNolE2b3XOGxILV2g": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QWLyKJLK2E2o3QVJWn564w": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5PyNt1sRnkCYacVidDeoAA": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"P6951floRkG7NC8zzp5G9Q": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectInBulkVar.value;
}
},
"NQQWC2jBCUGjtOmSSs3pcQ": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"aBbJ6R1_vUaeD3rZj5rStw": {
getter: function (varBag, idService) {
return varBag.resultURLJSResult.value;
}
},
"VxhwCEr__UuRD_V5PVM5gQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"KAAuwJgRLkaCMz4hshJyAA": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultsOut;
}
},
"JJwScN40XE2L3hsSz9ul2Q": {
getter: function (varBag, idService) {
return varBag.getBulkSignedPhotosURLVar.value;
}
},
"Zj4hMTwuYkyHNlmHaDCB_A": {
getter: function (varBag, idService) {
return varBag.getBulkSignedPhotosParametersVar.value;
}
},
"hBzO9igoYEOkS63LSjvdXA": {
getter: function (varBag, idService) {
return varBag.vars.value.sourceListInLocal;
}
},
"u00_VgjwxUmrBM9Ju_ck+w": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"m16qyl2qcUCiUmZ0qUJseg": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultsOut;
}
},
"ONN18DD+1kCrq34bG04zGg": {
getter: function (varBag, idService) {
return varBag.getSignedImagesInBulkVar.value;
}
},
"lb8lLWe0s06_FlOM0HkIHQ": {
getter: function (varBag, idService) {
return varBag.getBulkSignedImageParametersVar.value;
}
},
"kI2bnIU3WkatbkIHR3C0SA": {
getter: function (varBag, idService) {
return varBag.getAllApplicationEventsVar.value;
}
},
"hMuHRLQ62km8YfPSXzvSNg": {
getter: function (varBag, idService) {
return varBag.vars.value.typeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"16h0lWg_fkaN0OcihxRqmg": {
getter: function (varBag, idService) {
return varBag.vars.value.isEventSequenceVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"giHXMDS0NkWndqBM4BdFrw": {
getter: function (varBag, idService) {
return varBag.vars.value.hostingLocationVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6lkiavA9dkmI4k3XVmjB2Q": {
getter: function (varBag, idService) {
return varBag.vars.value.startDateVar;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"cqyDGNNdLUWe5zPjEMQYwA": {
getter: function (varBag, idService) {
return varBag.vars.value.isVirtualVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Ix5MaNinI0WHOTufH_z+yg": {
getter: function (varBag, idService) {
return varBag.vars.value.recurrenceVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"izHZLy4sI0aaXew8ZHXINg": {
getter: function (varBag, idService) {
return varBag.vars.value.listOfMessageParametersInLocal;
}
},
"pb56Zpu0nU2lD6ZqETV8YA": {
getter: function (varBag, idService) {
return varBag.vars.value.originalContentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Tuj66zHCT0mUlcL3GldUdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.delimiter_PlaceholderInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q82xL5OmN06xX5Mu1Lw3mQ": {
getter: function (varBag, idService) {
return varBag.vars.value.delimiter_FunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8gWLEKbKiEqSsKhk7wrNhA": {
getter: function (varBag, idService) {
return varBag.vars.value.delimiter_ParameterInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"G2b1bpizykqbrsTXpmzPkA": {
getter: function (varBag, idService) {
return varBag.outVars.value.contentOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0WVXG7vaJUO1aPH8YLpPGA": {
getter: function (varBag, idService) {
return varBag.setTextPlaceholdersValueVar.value;
}
},
"ZYWxRhTzk0SCeO8VOg3uew": {
getter: function (varBag, idService) {
return varBag.listIndexOf_TypeVar.value;
}
},
"2muFdBBcn0afgEQmeitqkg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_HostingLocationVar.value;
}
},
"sx6+fbY58U6R9JDnvezV1g": {
getter: function (varBag, idService) {
return varBag.listIndexOf_IsVirtualVar.value;
}
},
"5zoig8K+M02_YbrS7m2Asg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SequenceVar.value;
}
},
"ln40oryK5UeSlJ_LXs85rA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_StartDateVar.value;
}
},
"ZELn1n2b10msLw_6oQgN9g": {
getter: function (varBag, idService) {
return varBag.listIndexOf_RecurrenceVar.value;
}
},
"eVml+UzJ20+zdoYTuLnRdw": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"6V0xG5qBCU6jCnf9eIPL6w": {
getter: function (varBag, idService) {
return varBag.vars.value.exceptionMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XNayNu99xUyuzrVKytInAg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isTimeoutExceptionMessageOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bM5NXRpU2E+zSxxpRtSgTw": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"APwEc0xkMkeVlHChyTkNUg": {
getter: function (varBag, idService) {
return varBag.vars.value.bucketInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O1fLtoiL8UiLtikcUNmnDA": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xsbhjgMjvE+w7sqlz_N2Fg": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"v47RinS97Ui+A6SQQHu0wA": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ra9tjaJBg0+4UCXlVX7CkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9v6eLr_zy0yAj1bv+OwdRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"t_bqS__nIUy5W2k2901loQ": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Btr55VVrZkaemF3ZuWnaIA": {
getter: function (varBag, idService) {
return varBag.outVars.value.localityInformationOut;
}
},
"CdYcWPmpQEmiYrNWZgqt0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"LEhQghAZjUWMSz4eEi4U3w": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"798Y1XnkZ0GQwfJhJhDVOw": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"8Dm1jySmt06FTUMrBF52Vg": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"O0UMRCvRj0CY6Gb86vIgdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.jsonInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"llAtitAfHkiOkL1_ZIG9BQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isJsonValidOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QTSEXI3luU2Rg7XpAgLH9Q": {
getter: function (varBag, idService) {
return varBag.isJsonValidJavascriptJSResult.value;
}
},
"OzuoLIaLhkKUHI878_mrzg": {
getter: function (varBag, idService) {
return varBag.onlineCommunicationExceptionVar.value;
}
},
"OSffh87440mFwS5YZYmkCA": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"b93AO9gUdUepAdxQAHuF1w": {
getter: function (varBag, idService) {
return varBag.getNumberUnreadMessagesVar.value;
}
},
"EvFpk4KwvEOsyeJTM7EaXg": {
getter: function (varBag, idService) {
return varBag.appManager_GetDeviceContextVar.value;
}
},
"_ljogNfxa0aj1x4uTBQx+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.thresholdInMinutesVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"dFKorzpkx0Wz9G8C1e0jpA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ScrollTimeOut;
},
dataType: OS.DataTypes.DataTypes.Time
},
"rIdCs1W+lEWMGRlggfUXDg": {
getter: function (varBag, idService) {
return varBag.vars.value.nameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Qeyr9iRoiUGsBDDtq+U1uA": {
getter: function (varBag, idService) {
return varBag.vars.value.contentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PeSuAKHnY02cRqTIxswKTg": {
getter: function (varBag, idService) {
return varBag.addMetaTagJSResult.value;
}
},
"racfjqsOL0Sh8YiBuDqtcw": {
getter: function (varBag, idService) {
return varBag.outVars.value.userInformationOut;
}
},
"i5H4KGkK3kOc6GoNpfZzkA": {
getter: function (varBag, idService) {
return varBag.getUserInformationVar.value;
}
},
"eLOb5TE0T0mooq9gkMRD7w": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"CxAvPcS+kU2RVECLa1OHLA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"3GPI3G8cskKAFRpF6pn5Tw": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uVRyVoFRwkuAWUVgu+s7uQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.localitiesListOut;
}
},
"utkRaOTpV0CJrcB4KIs3KQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"FgZJUL8s5U2KO+a0ztxS0A": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"PWxdrDLFYkWa+AfNfEwZFQ": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"WT3F6bRfs0+e8bGtbXZj6g": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"bI_xccu4_EygLHe0QA1fIQ": {
getter: function (varBag, idService) {
return varBag.vars.value.objectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Df5w_CWo9EWmwqH23t6eZw": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"0FE6V_17NEeOh7p03H6KFw": {
getter: function (varBag, idService) {
return varBag.outVars.value.localBookmarkOut;
}
},
"HsnVYj1CIkeNoSMcku_ChA": {
getter: function (varBag, idService) {
return varBag.getLocalBookmarkByObjectIdVar.value;
}
},
"9p6F0JjihEiAkMZsd6YiPw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_GroupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KLm8DpQhn06sZBPP3WjKmw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"4_3zJ4oBWkuWm4vHSdgh2Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QD6WLkZRL0Kqy_HuX6tqzw": {
getter: function (varBag, idService) {
return varBag.getCachedMyBookmarksVar.value;
}
},
"yYr1vAQMPE6sGv12BhB9eA": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"UkiGO87OmEKN9fXNGPfpag": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"U1kgQL5RNk6kMikJDfUagw": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheableAssembleEventContactListOut;
}
},
"kVFK1c9QwkSLZH8s27JEpQ": {
getter: function (varBag, idService) {
return varBag.getMemberContactByCacheKeyVar.value;
}
},
"4z0_azyCWkK+H90SX3aU5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"uDMQuHY1GEKIgWS9SVWytw": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultsOut;
}
},
"_ASdT5r96U+doKgLPLFjBw": {
getter: function (varBag, idService) {
return varBag.getBulkSubdivisions_V2Var.value;
}
},
"41S2YcOKcUynJE6YNcsUbw": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_u1fU3UzO0KyoMsfzI7Xpw": {
getter: function (varBag, idService) {
return varBag.outVars.value.textRegexSafeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y0AGssyPrESPc2IL1kBG5w": {
getter: function (varBag, idService) {
return varBag.removeRegexSpecialCharactersJSResult.value;
}
},
"2EMGGpkJ00e6+6YJrCrLrQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mainMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IomPbB8VzUOjnsi+6imuNA": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"99ctn4WHK0GIMYHSVBSNqw": {
getter: function (varBag, idService) {
return varBag.dispatchErrorMessageJSResult.value;
}
},
"r9vCazmCE0SuDU0FXTd4Lg": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wXftw7FDCEGkqDr2YpJkeg": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheKeyOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rRkvjSCEhkmZzXKastb65g": {
getter: function (varBag, idService) {
return varBag.vars.value.titleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"epS94od3TEaf2QAjTM3BXQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"64Oavg1v1E28U2EzuT9QKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ZpqOevtfUkuovQVBebYYnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isEncodeHTMLInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tZknpOck8k6tJKFbMiyVtA": {
getter: function (varBag, idService) {
return varBag.vars.value.extraCssClassesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Uny3NKcaDESKmKMFHkbKWw": {
getter: function (varBag, idService) {
return varBag.vars.value.isCloseOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+YgFDZ6PQUeuIlG_aQoePw": {
getter: function (varBag, idService) {
return varBag.vars.value.imageURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qXM8knNaMECex7QlcW3hmA": {
getter: function (varBag, idService) {
return varBag.showCustomFeedbackMessageWithTitleJSResult.value;
}
},
"RlaKpNw5V0uA_k6pHhdXqg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_PhoneNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yTYxiVtgL0i9E00t9adecQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CallNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qFSZ_m4D6UGpNVJRY6hF9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimezoneLabelInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qpdhCp_A7EGJg2XDSEleHw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimezoneOffsetInSecondsInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Piik1C6F902TDSwd4rQBbQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_CallInfoStructureOut;
}
},
"ZuQEvKH5YUGBZJ2mwwCAYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"3cIm5H4yXkaM5XdsGKndmw": {
getter: function (varBag, idService) {
return varBag.outVars.value.parametersOut;
}
},
"F4HLDKAdA0ucXbgBl4oEPQ": {
getter: function (varBag, idService) {
return varBag.getCacheKeyPartsVar.value;
}
},
"oGTH7AWQ1EObEJwzqX3OHA": {
getter: function (varBag, idService) {
return varBag.vars.value.localBookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"LVz7bB84_U+I8zV5CLUZFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DLIXo17kx0qlWashq9CJZw": {
getter: function (varBag, idService) {
return varBag.vars.value.isSelfInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Bj18IT_xlkWrcrA0JB4DuA": {
getter: function (varBag, idService) {
return varBag.checkInAppBrowserPluginVar.value;
}
},
"UGxHNv1l5Ui39Ge3vX1DVQ": {
getter: function (varBag, idService) {
return varBag.openVar.value;
}
},
"+mxOWx8PFUyW7RqzfFO1DA": {
getter: function (varBag, idService) {
return varBag.openInNewWindowJSResult.value;
}
},
"Oc7ET9pvakKVEi1wToHRag": {
getter: function (varBag, idService) {
return varBag.vars.value.subscriptionRegionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u4WZjI0iAEypPdgxQs71rg": {
getter: function (varBag, idService) {
return varBag.outVars.value.countryWithMapPositionOut;
}
},
"Rfa8U2fzO0C6iTKzXG9bfA": {
getter: function (varBag, idService) {
return varBag.getCountriesBySubscriptionVar.value;
}
},
"98dTOKTWeUSZsiG76Def+g": {
getter: function (varBag, idService) {
return varBag.vars.value.subscriptionEventInfoVar;
}
},
"jkcvWKzlNEa4H1J0S8EFSw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"o_YbAdAl90SOsq9BZhj7Kw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"z30GL2jc3kaid8RFNgv8Cg": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"i0CcRwoFfUqr2Bwy9o8d6A": {
getter: function (varBag, idService) {
return varBag.vars.value.entityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"EMlX6D1eMkGxmx7ts6vhdA": {
getter: function (varBag, idService) {
return varBag.subscriptionEventSerializeVar.value;
}
},
"5gm5e7K+ykG4FRXvfZNiiw": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"fNt+aUQ7PUqrrCKCNS3CWA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"2477mdXmA0y5sCTYCdSsKw": {
getter: function (varBag, idService) {
return varBag.vars.value.bucketInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ENEFll6k+Eitk0iOvh5f5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.pathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WGslMgXzSUmnUHusFSvvrQ": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"neXqzUw4ykeJDeoFiRaH9Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PjnnEeE2SkiIvEZTdkeY_w": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectInBulkVar.value;
}
},
"_2jDS6mPDkK9neT5_ZimkA": {
getter: function (varBag, idService) {
return varBag.resultURLJSResult.value;
}
},
"Z8Am2MrZTU6SRrwsDK_FFw": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"fQvoTODe_EaqpRCKfwCtfQ": {
getter: function (varBag, idService) {
return varBag.vars.value.addressInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tGYzXdTUGkeslu4SdmZW4g": {
getter: function (varBag, idService) {
return varBag.outVars.value.addressSafeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ry7FbUCfEEaQS3iCp3UxFg": {
getter: function (varBag, idService) {
return varBag.cleanAddressJSResult.value;
}
},
"9NKaSQsJi0eH8K1qDN+cDQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8DJUgMLDJEe7fbNxP+fYwQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.nameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j97+1LH96USFOMDDHHqBXg": {
getter: function (varBag, idService) {
return varBag.vars.value.auditLog_ShareEventInfoVar;
}
},
"Kr4PWI1BAEO3u7OdwxTIsA": {
getter: function (varBag, idService) {
return varBag.vars.value.shareIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YwHL10tFgEi6vLapQGhlIw": {
getter: function (varBag, idService) {
return varBag.vars.value.sharingMemberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jMgcF8hgl0WGwUIv3GF9AQ": {
getter: function (varBag, idService) {
return varBag.vars.value.targetUserIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tRX9DlMWEkm4uAtFvTzwMw": {
getter: function (varBag, idService) {
return varBag.vars.value.targetAppInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"H2yo7HKez0yKi1hgGA++_g": {
getter: function (varBag, idService) {
return varBag.vars.value.shareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7qs+Oau7zkur6Ekux40qiA": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"m+a9_mkdYk+nMSNoCOa1sw": {
getter: function (varBag, idService) {
return varBag.eventInfoJSONVar.value;
}
},
"_utFgJBedEWI9GRJ9xqowg": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkGroupVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kWp3VIPoWUu8DokDAv2M6A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BookmarkInLocal;
}
},
"_fMnOh3oR06gsFFtXTlL0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Yz4Tgb2TH06CbvOR+g7zjg": {
getter: function (varBag, idService) {
return varBag.getCachedMyBookmarksVar.value;
}
},
"fMx1vZP+7kOEfxQvt12fSQ": {
getter: function (varBag, idService) {
return varBag.listFilterCacheDuplicatesVar.value;
}
},
"74Arik5Bqke9r3yUs_Orlg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ConfigIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"QHKgbtY1u0OtqPeJge402Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HostConfigOut;
}
},
"GGR7IA9GdUKk1KH_X0KRMA": {
getter: function (varBag, idService) {
return varBag.vars.value.chromeMajorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"k2p5gFDmF0+NVGaMGRSOow": {
getter: function (varBag, idService) {
return varBag.vars.value.chromeMinorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"y+m3r1hnc0WFAycqSKe_jA": {
getter: function (varBag, idService) {
return varBag.vars.value.safariMajorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"wK_MwSEWIUOV0yWIX8ZHdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.safariMinorVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"4hbaXcMcGk6PzC30K_cMlA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSupportedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"GySjp0HRlkGAQSokxMOWmw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAndroidOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bsEZVe3ZTUaUU+Rf3T6A7g": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAppleOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"q4Ee3IxBgUqAmMFY_4dfMA": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"KwtOAm9yyUu+G2pWLv0UHA": {
getter: function (varBag, idService) {
return varBag.nativeChromeVersionJSResult.value;
}
},
"lIU3bxr2iUO_X4vbPcD+OQ": {
getter: function (varBag, idService) {
return varBag.safariVersionJSResult.value;
}
},
"agC7dzj1pECl_UhHvIMVsQ": {
getter: function (varBag, idService) {
return varBag.chromeVersionJSResult.value;
}
},
"XPNYo8uVHku7hTHlOfrHbA": {
getter: function (varBag, idService) {
return varBag.chromeIOSJSResult.value;
}
},
"RPEgchxIf0SucAbc28Eq6Q": {
getter: function (varBag, idService) {
return Connect2_LegacySharedClientVariables.getUnreadNotificationsNumber();
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"s5LkoMyDQ0CMCx4PPNElow": {
getter: function (varBag, idService) {
return Connect2_LegacySharedClientVariables.getUnreadPublicMessagesNumber();
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"fiWzvIxliUuCl3VY7rV+1Q": {
getter: function (varBag, idService) {
return Connect2_LegacySharedClientVariables.getUnreadWhatsNewsNumber();
},
dataType: OS.DataTypes.DataTypes.LongInteger
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
