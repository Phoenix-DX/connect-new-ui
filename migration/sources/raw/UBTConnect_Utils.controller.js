define("UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Cache_UserInfo_Invalidate", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.app_Subscription_NavigateToUpgrade$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:dXhoLnFWykiH6hJ66tDNIA:/ClientActionFlows.dXhoLnFWykiH6hJ66tDNIA:6YL2qgksQ3dSWRWNmWLRvA", "UBTConnect_Utils", "App_Subscription_NavigateToUpgrade", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VG0w4wk8lkyq5FG_G3ooug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DM77vqbtnEeEyeNrgjhMBQ", callContext.id);
// Execute Action: Cache_UserInfo_Get
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qBB6FJlpiE2YmXxN7HXi5g", callContext.id);
// Execute Action: Cache_UserInfo_Invalidate
UBTConnect_UtilsController.default.cache_UserInfo_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZCqGxd2qR0eQgp2A5_F6QA", callContext.id);
// Execute Action: OpenInApp_OpenExternalLink
UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action(cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionManageLinkAttr, true, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BHVbJPjAtEehKkpyESRVgQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:dXhoLnFWykiH6hJ66tDNIA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:dXhoLnFWykiH6hJ66tDNIA", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.app_Subscription_NavigateToUpgrade$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.app_Subscription_NavigateToUpgrade$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect_Utils.clientVariables", "NavigationHandler.controller$ConfirmAction", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$NavigationHandler"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var confirmActionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.confirmActionVar = confirmActionVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:boQGa8qQZkK7nH3C_VG6Xw:/ClientActionFlows.boQGa8qQZkK7nH3C_VG6Xw:chftiXr7hD_QbaiN5DDRgA", "UBTConnect_Utils", "App_Subscription_ShowUpgradePopUp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ut14tUEMJEaU+T6+e4GRbw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yu6fCMMIcUuN5pgmQS4u0g", callContext.id) && ((UBTConnect_UtilsClientVariables.getApp_SubscriptionPopUp()) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+qbMuPEAv0GzE91zJZtgSw", callContext.id);
// Execute Action: ConfirmAction
return NavigationHandlerController.default.confirmAction$Action(UBTConnect_UtilsClientVariables.getApp_SubscriptionPopUp(), callContext).then(function (value) {
confirmActionVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LrC8NxN2sECPP9_piNqRaQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nZfV7tQN3USJzq+i7mXUYA", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:boQGa8qQZkK7nH3C_VG6Xw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:boQGa8qQZkK7nH3C_VG6Xw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.app_Subscription_ShowUpgradePopUp$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Bookmark_SendFeedbackMessage", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.bookmark_SendFeedbackMessage$Action = function (isCreateIn, isErrorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Bookmark_SendFeedbackMessage$vars"))());
vars.value.isCreateInLocal = isCreateIn;
vars.value.isErrorInLocal = isErrorIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:viZjaAAktUGcnSdCxtU_gQ:/ClientActionFlows.viZjaAAktUGcnSdCxtU_gQ:_2q8W7D65VrCkIi2F3cNSA", "UBTConnect_Utils", "Bookmark_SendFeedbackMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:d7n_xoZoS0yCn5V0zZIdeA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HbW9V_d2l0iogeCEp5HQXg", callContext.id) && vars.value.isErrorInLocal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IKZAb56IrUakd2a_pxWmSg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(((vars.value.isCreateInLocal) ? ("Bookmark could not be added. Please try again later.") : ("Bookmark could not be removed. Please try again later.")), /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pz0ptuQQ+kejDRmvqATNnw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PVmJjfy8KkqyLYPzQeGbEg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(((vars.value.isCreateInLocal) ? ("Added to your Bookmarks") : ("Removed from your Bookmarks")), /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yhk3zimUJEqgyB4wo_7JhQ", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:viZjaAAktUGcnSdCxtU_gQ", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Bookmark_SendFeedbackMessage$vars", [{
name: "IsCreate",
attrName: "isCreateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isError",
attrName: "isErrorInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.bookmark_SendFeedbackMessage$Action = function (isCreateIn, isErrorIn) {
isCreateIn = (isCreateIn === undefined) ? false : isCreateIn;
isErrorIn = (isErrorIn === undefined) ? false : isErrorIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.bookmark_SendFeedbackMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isCreateIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(isErrorIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$BottomBar_GetList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$BottomBar_ItemRec", "UBTConnect_Utils.model$BottomBar_ItemList"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.bottomBar_GetList$Action = function (useMapsItemsIn, isHouseholderIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.BottomBar_GetList$vars"))());
vars.value.useMapsItemsInLocal = useMapsItemsIn;
vars.value.isHouseholderInLocal = isHouseholderIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.BottomBar_GetList$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:RpGXRZxrJk+fHgJA89Qn3w:/ClientActionFlows.RpGXRZxrJk+fHgJA89Qn3w:fNNz+aIRyAEzmxBN7dKqPw", "UBTConnect_Utils", "BottomBar_GetList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:79b0cIWWv0OUO6eayCuIeA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lR_YCR+PjkOe+P8KywkWaw", callContext.id) && vars.value.useMapsItemsInLocal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:UGkrDXVfHUu1YkzCNCLnxQ", callContext.id);
// Execute Action: NearMe
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.explore;
rec.orderAttr = 1;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.explore;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.locationOn;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.locationOnFill;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:37MmFuPXHUyQf5f6Wy+36Q", callContext.id);
// Execute Action: Bookmarked
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.bookmarked;
rec.orderAttr = 2;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.bookmarked;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.bookmark;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.bookmarkFill;
return rec;
}(), callContext);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qKkH_8BxokqOgk+8ZCrnng", callContext.id) && vars.value.isHouseholderInLocal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vX_P+EcAtUmFoyJkJIP2TA", callContext.id);
// Execute Action: Settings
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.settings;
rec.orderAttr = 3;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.settings;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.settings;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.settings;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TfQWwS40ZkyMImm+9VTDqQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IUZyTJw3UUqBLdbZs_iXNA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DFQSiYKNt0KBSZOsmsuVyA", callContext.id);
// Execute Action: Home
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.home;
rec.orderAttr = 1;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.home;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.home;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.homeFill;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eWl1U1G0Z0STUc6fDbWXxA", callContext.id);
// Execute Action: Directory
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.directory;
rec.orderAttr = 2;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.directory;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.union;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.union;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PQlWhBNXdUG9nFmxu0d1Aw", callContext.id);
// Execute Action: Updates
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.updates;
rec.orderAttr = 3;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.updates;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.listAlt;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.listAltFill;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aOVMRty0tEOPzc0Z_YveEA", callContext.id);
// Execute Action: Bookmarks
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.bookmarks;
rec.orderAttr = 5;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.bookmarks;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.contacts;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.contactsFill;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2yw4tVXjOkCykkzrd6iDYw", callContext.id);
// Execute Action: Menu
OS.SystemActions.listAppend(outVars.value.bottomBar_ItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.BottomBar_ItemRec();
rec.idAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.menu;
rec.orderAttr = 5;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_BottomBar_Items.menu;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.widgets;
rec.uBTIconActiveAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.widgetsFill;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oigNziSP4EmXDTxUJCh3eg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:RpGXRZxrJk+fHgJA89Qn3w", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.BottomBar_GetList$vars", [{
name: "useMapsItems",
attrName: "useMapsItemsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "isHouseholder",
attrName: "isHouseholderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.BottomBar_GetList$outVars", [{
name: "BottomBar_ItemsList",
attrName: "bottomBar_ItemsListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_UtilsModel.BottomBar_ItemList();
},
complexType: UBTConnect_UtilsModel.BottomBar_ItemList
}]);
UBTConnect_UtilsController.default.clientActionProxies.bottomBar_GetList$Action = function (useMapsItemsIn, isHouseholderIn) {
useMapsItemsIn = (useMapsItemsIn === undefined) ? false : useMapsItemsIn;
isHouseholderIn = (isHouseholderIn === undefined) ? false : isHouseholderIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.bottomBar_GetList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(useMapsItemsIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(isHouseholderIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BottomBar_ItemsList: actionResults.bottomBar_ItemsListOut
};
});
};
});

define("UBTConnect_Utils.controller$Cache_AllCountries_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_AllCountries_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:65kI2VYqEU6EA0hPAvKm4g:/ClientActionFlows.65kI2VYqEU6EA0hPAvKm4g:M8MtcGFu+WKJgHXRJ1erRA", "UBTConnect_Utils", "Cache_AllCountries_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:F9vIlCX0YUyEMRr8gnG3oQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:myq426IKKUS0X73oFXYmuQ", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.allCountries), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:v41hlzbwDU68_4I_8ZPRwQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:65kI2VYqEU6EA0hPAvKm4g", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_AllCountries_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_AllCountries_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_AllLocalities_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_AllLocalities_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:9CkZONUJEE2UHxlqlHImFA:/ClientActionFlows.9CkZONUJEE2UHxlqlHImFA:ceBE4U1k+M6sXozh3GTIcQ", "UBTConnect_Utils", "Cache_AllLocalities_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DYROWHjev06uVcXqAK4pkw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uYhYyQspQ0yKFA1i9sGcCA", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.allLocalities), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LK89KE0FzUKQIqEGa_mv7Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:9CkZONUJEE2UHxlqlHImFA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_AllLocalities_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_AllLocalities_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_AllSubdivisions_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_AllSubdivisions_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:23FY_Cz6zUGVTgDElsgXHQ:/ClientActionFlows.23FY_Cz6zUGVTgDElsgXHQ:rID5SS67ZClBQYImRLfumw", "UBTConnect_Utils", "Cache_AllSubdivisions_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Xw8eSJ2pQEayOoAW6_KRpg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1ox1NmZohkGKtASnCz2_xA", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.allSubdivisions), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rMSjRxSbSEORb+eirZ_Zzg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:23FY_Cz6zUGVTgDElsgXHQ", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_AllSubdivisions_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_AllSubdivisions_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_Image_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_Image_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:oMYTiio8Rk+HmekzQsDs6g:/ClientActionFlows.oMYTiio8Rk+HmekzQsDs6g:G_IOImOTznuo2YmcaxTiVg", "UBTConnect_Utils", "Cache_Image_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MTAkGJdXa0i70flD+eZrDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQn2IEEBSUCa9jwqcmlYdg", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.image), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RLJCAtyCkkaesHoxHxpunA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:oMYTiio8Rk+HmekzQsDs6g", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_Image_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_Image_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_InvalidateEverything", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Cache_Policies_Invalidate", "UBTConnect_Utils.controller$Cache_MyCalendarEvents_Invalidate", "UBTConnect_Utils.controller$Cache_AllLocalities_Invalidate", "UBTConnect_Utils.controller$Cache_UserInfo_Invalidate", "UBTConnect_Utils.controller$Cache_Image_Invalidate", "UBTConnect_Utils.controller$Cache_AllSubdivisions_Invalidate", "UBTConnect_Utils.controller$Cache_AllCountries_Invalidate"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_InvalidateEverything$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:sKQK562taUWlPY9ws2xo3Q:/ClientActionFlows.sKQK562taUWlPY9ws2xo3Q:_mphEDcHMi5mkAa3I+Dl8A", "UBTConnect_Utils", "Cache_InvalidateEverything", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Pv5N6iuOAUKia_c5VJA3MA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_Jt4jTYDo0SuyTs_piKfVQ", callContext.id);
// Execute Action: Cache_UserInfo_Invalidate
UBTConnect_UtilsController.default.cache_UserInfo_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8Uig+vaiYk+GfAdcmqBvfg", callContext.id);
// Execute Action: Cache_AllCountries_Invalidate
UBTConnect_UtilsController.default.cache_AllCountries_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_HY5gqLs50Sjq9O03xLmDA", callContext.id);
// Execute Action: Cache_AllLocalities_Invalidate
UBTConnect_UtilsController.default.cache_AllLocalities_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vQ4xyjesN0yo4STBF6iNlQ", callContext.id);
// Execute Action: Cache_AllSubdivisions_Invalidate
UBTConnect_UtilsController.default.cache_AllSubdivisions_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sx7QjfpHykqw_5O5Za7Xyg", callContext.id);
// Execute Action: Cache_Image_Invalidate
UBTConnect_UtilsController.default.cache_Image_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GduJBx8mKkyN9SRVK52RXw", callContext.id);
// Execute Action: Cache_MyCalendarEvents_Invalidate
UBTConnect_UtilsController.default.cache_MyCalendarEvents_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xPENA7pn+EWjeC93RxcLIA", callContext.id);
// Execute Action: Cache_Policies_Invalidate
UBTConnect_UtilsController.default.cache_Policies_Invalidate$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_z2_EzjeW0SRKCtCL48qfg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:sKQK562taUWlPY9ws2xo3Q", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_InvalidateEverything$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_InvalidateEverything$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_MyCalendarEvents_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_MyCalendarEvents_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:JXhaemGT9EeWsb1msvHGEw:/ClientActionFlows.JXhaemGT9EeWsb1msvHGEw:2q5k0LWN_oLu4lHz7XCFxA", "UBTConnect_Utils", "Cache_MyCalendarEvents_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DvujuI1K_0eW1KSImH5eFQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9VZqnng1UUqhg3p+tWDjUg", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.myCalendarEvents), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wMVAfubkEU6MgiMwnjRh4Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:JXhaemGT9EeWsb1msvHGEw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_MyCalendarEvents_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_MyCalendarEvents_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_Policies_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_Policies_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:QzRuvSaxDEme9jYbw7qAoA:/ClientActionFlows.QzRuvSaxDEme9jYbw7qAoA:feQHoqaRZ3TwtxkiwZ2E5A", "UBTConnect_Utils", "Cache_Policies_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5BY51g_ED0eVZ3hrWEdxsw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MrZd0fKMaUG9oKCdld_gVQ", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.policies), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2N98sTPu4k6io7R3rOH2nA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:QzRuvSaxDEme9jYbw7qAoA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_Policies_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_Policies_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Cache_SignedImageURL_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get.ResultURLJS", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get.CallbacksJS", "UBTConnect_Utils.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObjectInBulk", "MemoryClientCache.controller$CacheKeyPart", "UBTConnect_Utils.controller$Cache_SignedImageURL_GetCacheKey", "UBTConnect_Utils.model$TextTextTextRecordList", "UBTConnect_Utils.controller$Cache_SignedImageURL_GetCallback"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, MemoryClientCacheController, UBTConnect_Utils_controller_Cache_SignedImageURL_Get_ResultURLJS, UBTConnect_Utils_controller_Cache_SignedImageURL_Get_CallbacksJS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action = function (entityIdIn, typeIn, sizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$vars"))());
vars.value.entityIdInLocal = entityIdIn;
vars.value.typeInLocal = typeIn;
vars.value.sizeInLocal = sizeIn;
var getCacheableObjectInBulkVar = new OS.DataTypes.VariableHolder();
var resultURLJSResult = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectInBulkVar = getCacheableObjectInBulkVar;
varBag.resultURLJSResult = resultURLJSResult;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:nqgUXZhe3EqtCZn24ApiLQ:/ClientActionFlows.nqgUXZhe3EqtCZn24ApiLQ:WVwV54ibgK5xskus6V9mTw", "UBTConnect_Utils", "Cache_SignedImageURL_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mR8qelXNeUObsqjC3vdXQA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r6GhiNKwMECLh4pibO7Wyg", callContext.id) && (!(vars.value.entityIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) && ((vars.value.typeInLocal) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gdSYYbqtjUu1AgPCCC8kaQ", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_controller_Cache_SignedImageURL_Get_CallbacksJS, "Callbacks", "Cache_SignedImageURL_Get", {
GetObjectBulkCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$callbacksJSResult"))();
jsNodeResult.getObjectBulkCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectBulkCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Cache_SignedImageURL_GetCallback: UBTConnect_UtilsController.default.getClientActionProxies(controller).cache_SignedImageURL_GetCallback$Action
}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5CUv_UrgNEmHIPG55sP17A", callContext.id);
// Execute Action: GetCacheableObjectInBulk
return MemoryClientCacheController.default.getCacheableObjectInBulk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.cache_SignedImageURL_GetCacheKey$Action(vars.value.typeInLocal, callContext).cacheKeyOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), ((OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(OS.BuiltinFunctions.longIntegerToText(vars.value.entityIdInLocal), callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.typeInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + OutSystemsDebugger.handleFunctionCall(function () {
return MemoryClientCacheController.default.cacheKeyPart$Action(vars.value.sizeInLocal, callContext).keyPartOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)), vars.value.timeToLiveVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectBulkCallbackOut, OS.BuiltinFunctions.integerToLongInteger(15), callContext).then(function (value) {
getCacheableObjectInBulkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sXPJJgzD602dbJS9jGvztg", callContext.id);
resultURLJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_controller_Cache_SignedImageURL_Get_ResultURLJS, "ResultURL", "Cache_SignedImageURL_Get", {
Object: OS.DataConversion.JSNodeParamConverter.to(getCacheableObjectInBulkVar.value.objectOut, OS.DataTypes.DataTypes.Object),
URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$resultURLJSResult"))();
jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZPTyipXAI0WC3JwrTKsnPg", callContext.id);
// URL = ResultURL.URL
outVars.value.uRLOut = resultURLJSResult.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:K1yYVlBNskmRpT3CGXrY2A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lF5ChDbFskmGsxHVbxDjAw", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:nqgUXZhe3EqtCZn24ApiLQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:nqgUXZhe3EqtCZn24ApiLQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$vars", [{
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
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$resultURLJSResult", [{
name: "URL",
attrName: "uRLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$callbacksJSResult", [{
name: "GetObjectBulkCallback",
attrName: "getObjectBulkCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_Get$outVars", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.cache_SignedImageURL_Get$Action = function (entityIdIn, typeIn, sizeIn) {
entityIdIn = (entityIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : entityIdIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
sizeIn = (sizeIn === undefined) ? "" : sizeIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(entityIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), sizeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnect_Utils.controller$Cache_SignedImageURL_Get.ResultURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.URL = $parameters.Object  || "";
};
});
define("UBTConnect_Utils.controller$Cache_SignedImageURL_Get.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectBulkCallback = $actions.Cache_SignedImageURL_GetCallback;
};
});

define("UBTConnect_Utils.controller$Cache_SignedImageURL_GetCacheKey", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_SignedImageURL_GetCacheKey$Action = function (typeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCacheKey$vars"))());
vars.value.typeInLocal = typeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCacheKey$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:ZQeg67EOJ0amn7dR_fO2iA:/ClientActionFlows.ZQeg67EOJ0amn7dR_fO2iA:iWMZreMkWh+o_a5vcdsrCg", "UBTConnect_Utils", "Cache_SignedImageURL_GetCacheKey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3DMw6B8bbkmfsZumb4e8vw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:f4hhW+Ix3UuIChFUQbqxmQ", callContext.id);
// CacheKey = Image + IdentifierToText
outVars.value.cacheKeyOut = (UBTConnect_UtilsModel.staticEntities.connect_CacheType.image + OS.BuiltinFunctions.identifierToText(vars.value.typeInLocal));
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Pf9Yk3oxC0yu3UHNN6cEZw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:ZQeg67EOJ0amn7dR_fO2iA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCacheKey$vars", [{
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCacheKey$outVars", [{
name: "CacheKey",
attrName: "cacheKeyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.cache_SignedImageURL_GetCacheKey$Action = function (typeIn) {
typeIn = (typeIn === undefined) ? "" : typeIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_SignedImageURL_GetCacheKey$Action.bind(controller, typeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheKey: OS.DataConversion.JSNodeParamConverter.to(actionResults.cacheKeyOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$Cache_SignedImageURL_GetCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.model", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$ImagesParametersList", "Connect2_LegacyShared.model$BulkSignedImageResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$BulkSignedImageResultList", "UBTConnect_Utils.controller$ServerAction.GetSignedImagesInBulk", "UBTConnect_Utils.controller$Cache_SignedImageURL_GetParameters", "MemoryClientCache.controller$CacheKeyPart", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$TextTextTextRecordList"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_LegacySharedModel, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_SignedImageURL_GetCallback$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCallback$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getSignedImagesInBulkVar = new OS.DataTypes.VariableHolder();
var cache_SignedImageURL_GetParametersVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCallback$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getSignedImagesInBulkVar = getSignedImagesInBulkVar;
varBag.cache_SignedImageURL_GetParametersVar = cache_SignedImageURL_GetParametersVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:lWz1dXYetUOfkss7MMXQWQ:/ClientActionFlows.lWz1dXYetUOfkss7MMXQWQ:dtPluIm5GEgbDeRQHeBBrQ", "UBTConnect_Utils", "Cache_SignedImageURL_GetCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XvWkQnCAPkSKxr8pKOU9ug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5luvqqd3vEex2QkK6XDEmQ", callContext.id);
// Execute Action: Cache_SignedImageURL_GetParameters
cache_SignedImageURL_GetParametersVar.value = UBTConnect_UtilsController.default.cache_SignedImageURL_GetParameters$Action(vars.value.cacheKeysInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Jac6Gbl4SECVbIA6uehiZw", callContext.id);
// Execute Action: GetSignedImagesInBulk
return controller.getSignedImagesInBulk$ServerAction(cache_SignedImageURL_GetParametersVar.value.parametersOut, callContext).then(function (value) {
getSignedImagesInBulkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KoOiTD_F5km6Hp7lvK+kQw", callContext.id);
// Results = GetSignedImagesInBulk.Results
outVars.value.resultsOut = OS.DataConversion.JSConversions.typeConvertRecordList(getSignedImagesInBulkVar.value.resultsOut, new UBTConnect_UtilsModel.TextTextTextRecordList(), function (source, target) {
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
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oJTHAJ8ezUK5Z+QaJ1DJiQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:lWz1dXYetUOfkss7MMXQWQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:lWz1dXYetUOfkss7MMXQWQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCallback$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetCallback$outVars", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_UtilsModel.TextTextTextRecordList();
},
complexType: UBTConnect_UtilsModel.TextTextTextRecordList
}]);
UBTConnect_UtilsController.default.clientActionProxies.cache_SignedImageURL_GetCallback$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_SignedImageURL_GetCallback$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Results: actionResults.resultsOut
};
});
};
});

define("UBTConnect_Utils.controller$Cache_SignedImageURL_GetParameters", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$GetCacheKeyParts", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.model$ImagesParametersList", "UBTConnect_Utils.model$ImagesParametersRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_SignedImageURL_GetParameters$Action = function (cacheKeysIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetParameters$vars"))());
vars.value.cacheKeysInLocal = cacheKeysIn.clone();
var getCacheKeyPartsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetParameters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheKeyPartsVar = getCacheKeyPartsVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:SB8R8Ww+l0WENZf1hd3jVA:/ClientActionFlows.SB8R8Ww+l0WENZf1hd3jVA:5k9buxUprgyQkdiFtQleLQ", "UBTConnect_Utils", "Cache_SignedImageURL_GetParameters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r_xHOu6_h0CdEk8CLs9bkA", callContext.id);
// Foreach CacheKeys
callContext.iterationContext.registerIterationStart(vars.value.cacheKeysInLocal);
try {var cacheKeysIterator = callContext.iterationContext.getIterator(vars.value.cacheKeysInLocal);
var cacheKeysIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JzWrnxyDt0qRGHcJLsZT6g", callContext.id) && (cacheKeysIndex < vars.value.cacheKeysInLocal.length))) {
cacheKeysIterator.currentRowNumber = cacheKeysIndex;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1Zny7qaNBkCr1vGzd+vmzQ", callContext.id);
// Execute Action: GetCacheKeyParts
getCacheKeyPartsVar.value = MemoryClientCacheController.default.getCacheKeyParts$Action(vars.value.cacheKeysInLocal.getItem(cacheKeysIndex.valueOf()), callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VmN38AbdGE+6P0Ai0jxekQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.parametersOut, function () {
var rec = new UBTConnect_UtilsModel.ImagesParametersRec();
rec.idAttr = OS.BuiltinFunctions.textToLongInteger(getCacheKeyPartsVar.value.keyPartsOut.getItem(0));
rec.typeAttr = getCacheKeyPartsVar.value.keyPartsOut.getItem(1);
rec.sizeAttr = getCacheKeyPartsVar.value.keyPartsOut.getItem(2);
return rec;
}(), callContext);
cacheKeysIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.cacheKeysInLocal);
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Tdc_buHesUar1q5LEpm7+g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:SB8R8Ww+l0WENZf1hd3jVA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetParameters$vars", [{
name: "CacheKeys",
attrName: "cacheKeysInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_SignedImageURL_GetParameters$outVars", [{
name: "Parameters",
attrName: "parametersOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_UtilsModel.ImagesParametersList();
},
complexType: UBTConnect_UtilsModel.ImagesParametersList
}]);
UBTConnect_UtilsController.default.clientActionProxies.cache_SignedImageURL_GetParameters$Action = function (cacheKeysIn) {
cacheKeysIn = (cacheKeysIn === undefined) ? new OS.DataTypes.TextList() : cacheKeysIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_SignedImageURL_GetParameters$Action.bind(controller, cacheKeysIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Parameters: actionResults.parametersOut
};
});
};
});

define("UBTConnect_Utils.controller$Cache_UserInfo_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "MemoryClientCache.controller", "NavigationHandler.controller", "UBTConnect_Utils.controller$Cache_UserInfo_Get.CallbacksJS", "UBTConnect_Utils.clientVariables", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "MemoryClientCache.controller$GetCacheableObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect_Utils.referencesHealth$NavigationHandler", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect_Utils.controller$Cache_UserInfo_GetCallback"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, MemoryClientCacheController, NavigationHandlerController, UBTConnect_Utils_controller_Cache_UserInfo_Get_CallbacksJS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_UserInfo_Get$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_UserInfo_Get$vars"))());
var getCacheableObjectVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var callbacksJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_UserInfo_Get$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCacheableObjectVar = getCacheableObjectVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.callbacksJSResult = callbacksJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:hqkdd1SnAUSbtZDrJi8TOQ:/ClientActionFlows.hqkdd1SnAUSbtZDrJi8TOQ:+eY3S4O7cj8hek8twWAfeQ", "UBTConnect_Utils", "Cache_UserInfo_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3tUgCaAw70evRW28kb6c_g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tKZekz+eSEeI7xBABajSig", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sRFROi7Lu0yzQTjszp5RnA", callContext.id);
callbacksJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_controller_Cache_UserInfo_Get_CallbacksJS, "Callbacks", "Cache_UserInfo_Get", {
GetObjectCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_UserInfo_Get$callbacksJSResult"))();
jsNodeResult.getObjectCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.GetObjectCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Cache_UserInfo_GetCallback: UBTConnect_UtilsController.default.getClientActionProxies(controller).cache_UserInfo_GetCallback$Action
}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_PbSRJy5bUG59jHJl24c2Q", callContext.id);
// Execute Action: GetCacheableObject
return MemoryClientCacheController.default.getCacheableObject$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.directoryUser), UBTConnect_UtilsClientVariables.getUniqueCacheKey(), vars.value.timeToLiveSecondsVar, vars.value.timeoutVar, callbacksJSResult.value.getObjectCallbackOut, null, OS.DataTypes.LongInteger.defaultValue, callContext).then(function (value) {
getCacheableObjectVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:17tjc3bFFEGRVTem2uHMpg", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(vars.value.cacheableUserDetailsVar), getCacheableObjectVar.value.objectOut, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tRPKF5TOvk+1DLZLVP+zCQ", callContext.id);
// UserInformation = CacheableUserDetails
outVars.value.userInformationOut = vars.value.cacheableUserDetailsVar;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tRPKF5TOvk+1DLZLVP+zCQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CacheResult = GetCacheableObject.CacheResult
outVars.value.cacheResultOut = getCacheableObjectVar.value.cacheResultOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Hej5VDOw5kyDGgyvbELAsQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k0c5lHqy_0yaQ3jRwIgCig", callContext.id);
// Raise Error: ObjectNotFound
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.ObjectNotFound", "User is not logged in");
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hqkdd1SnAUSbtZDrJi8TOQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hqkdd1SnAUSbtZDrJi8TOQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_UserInfo_Get$vars", [{
name: "CacheableUserDetails",
attrName: "cacheableUserDetailsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_UserInformationRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_UserInformationRec
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
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_UserInfo_Get$callbacksJSResult", [{
name: "GetObjectCallback",
attrName: "getObjectCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_UserInfo_Get$outVars", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_UserInformationRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_UserInformationRec
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
UBTConnect_UtilsController.default.clientActionProxies.cache_UserInfo_Get$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_UserInfo_Get$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UserInformation: actionResults.userInformationOut,
CacheResult: actionResults.cacheResultOut
};
});
};
});
define("UBTConnect_Utils.controller$Cache_UserInfo_Get.CallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.GetObjectCallback = function() {
    return $actions.Cache_UserInfo_GetCallback();
};
};
});

define("UBTConnect_Utils.controller$Cache_UserInfo_GetCallback", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "UBTConnect_Utils.controller$ServerAction.GetUserInformation"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_UserInfo_GetCallback$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getUserInformationVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Cache_UserInfo_GetCallback$outVars"))());
varBag.callContext = callContext;
varBag.getUserInformationVar = getUserInformationVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:g9DnYrOlK0i6ngR1vrEmqQ:/ClientActionFlows.g9DnYrOlK0i6ngR1vrEmqQ:Rb1lTPOkijOMzgYDd0KHMg", "UBTConnect_Utils", "Cache_UserInfo_GetCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wD0RJaxEVkSOJ0q2CRvqFw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lJeP9dkCJUmn96QDYE5icg", callContext.id);
// Execute Action: GetUserInformation
return controller.getUserInformation$ServerAction(callContext).then(function (value) {
getUserInformationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oAbR0RYQbEiXB+dvVcL+0A", callContext.id);
// UserInformation = GetUserInformation.UserInformation
outVars.value.userInformationOut = getUserInformationVar.value.userInformationOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ru_ewPlxYk2GeMSvO_z_lg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:g9DnYrOlK0i6ngR1vrEmqQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:g9DnYrOlK0i6ngR1vrEmqQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Cache_UserInfo_GetCallback$outVars", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_UserInformationRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_UserInformationRec
}]);
UBTConnect_UtilsController.default.clientActionProxies.cache_UserInfo_GetCallback$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_UserInfo_GetCallback$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UserInformation: actionResults.userInformationOut
};
});
};
});

define("UBTConnect_Utils.controller$Cache_UserInfo_Invalidate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.controller", "UBTConnect_Utils.clientVariables", "MemoryClientCache.controller$RemoveCacheableObject_ByType", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cache_UserInfo_Invalidate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:13B5pWhaJ0C5hyBcVQei9Q:/ClientActionFlows.13B5pWhaJ0C5hyBcVQei9Q:VXDbL5bQSEBpJqF8pL10YA", "UBTConnect_Utils", "Cache_UserInfo_Invalidate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MApp74NKP0a26oOCEtTNdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:SooejfvkeUm7EV0BNKUOOQ", callContext.id);
// Execute Action: RemoveCacheableObject_ByType
MemoryClientCacheController.default.removeCacheableObject_ByType$Action(OS.BuiltinFunctions.textToIdentifier(UBTConnect_UtilsModel.staticEntities.connect_CacheType.directoryUser), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2izVTrH6B0OtDyjgcbVVwA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:13B5pWhaJ0C5hyBcVQei9Q", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.cache_UserInfo_Invalidate$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cache_UserInfo_Invalidate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$CleanAddressForMaps", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.controller$CleanAddressForMaps.CleanAddressJS", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_Utils_controller_CleanAddressForMaps_CleanAddressJS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cleanAddressForMaps$Action = function (addressIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CleanAddressForMaps$vars"))());
vars.value.addressInLocal = addressIn;
var cleanAddressJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CleanAddressForMaps$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.cleanAddressJSResult = cleanAddressJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:qjwspCcj20S9to_+IktxVA:/ClientActionFlows.qjwspCcj20S9to_+IktxVA:BDhgTtI7FEJlUimfyfwRPQ", "UBTConnect_Utils", "CleanAddressForMaps", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hgyjPoREjEeBd_sBph0xBQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NKktXZGe2E2YaCUK+B9zDw", callContext.id);
cleanAddressJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_controller_CleanAddressForMaps_CleanAddressJS, "CleanAddress", "CleanAddressForMaps", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.addressInLocal, OS.DataTypes.DataTypes.Text),
SafeText: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CleanAddressForMaps$cleanAddressJSResult"))();
jsNodeResult.safeTextOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SafeText, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:flnt_daplECy1R13exeA6g", callContext.id);
// AddressSafe = CleanAddress.SafeText
outVars.value.addressSafeOut = cleanAddressJSResult.value.safeTextOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7md4TMLJ3U2o3Vtu44Bmcw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:qjwspCcj20S9to_+IktxVA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.CleanAddressForMaps$vars", [{
name: "Address",
attrName: "addressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.CleanAddressForMaps$cleanAddressJSResult", [{
name: "SafeText",
attrName: "safeTextOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.CleanAddressForMaps$outVars", [{
name: "AddressSafe",
attrName: "addressSafeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.cleanAddressForMaps$Action = function (addressIn) {
addressIn = (addressIn === undefined) ? "" : addressIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.cleanAddressForMaps$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(addressIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AddressSafe: OS.DataConversion.JSNodeParamConverter.to(actionResults.addressSafeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnect_Utils.controller$CleanAddressForMaps.CleanAddressJS", [], function () {
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

define("UBTConnect_Utils.controller$ClearAllNotifications", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "CommonPlugin.model", "FirebaseCloudMessagingPlugin.controller", "UBTConnect_Utils.clientVariables", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin", "FirebaseCloudMessagingPlugin.controller$ClearNotifications", "UBTConnect_Utils.referencesHealth$FirebaseCloudMessagingPlugin", "FirebaseCloudMessagingPlugin.controller$CheckCloudMessagingPlugin"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, CommonPluginModel, FirebaseCloudMessagingPluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.clearAllNotifications$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var clearNotificationsVar = new OS.DataTypes.VariableHolder();
var checkCloudMessagingPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.clearNotificationsVar = clearNotificationsVar;
varBag.checkCloudMessagingPluginVar = checkCloudMessagingPluginVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Bk3mu+YS4EOE_529m9tyww:/ClientActionFlows.Bk3mu+YS4EOE_529m9tyww:ceOTpZD0bfraojg4_K_9Ew", "UBTConnect_Utils", "ClearAllNotifications", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KG6ALBqEPUySjirddXI_Cw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:atV9zy_2bECA++hZjex34Q", callContext.id);
// Execute Action: CheckCloudMessagingPlugin
checkCloudMessagingPluginVar.value = FirebaseCloudMessagingPluginController.default.checkCloudMessagingPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oAhJHAT900ibae0yjMZhiQ", callContext.id) && checkCloudMessagingPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZGrQtfGez0mxZvRvkrxsXg", callContext.id);
// Execute Action: ClearNotifications
return FirebaseCloudMessagingPluginController.default.clearNotifications$Action(callContext).then(function (value) {
clearNotificationsVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uEBQMw3Bq0WK9p6rtZVgeA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uEBQMw3Bq0WK9p6rtZVgeA", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Bk3mu+YS4EOE_529m9tyww", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Bk3mu+YS4EOE_529m9tyww", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.clearAllNotifications$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.clearAllNotifications$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnect_Utils.clientVariables", "UBT_AppManager.controller$Permissions_Check", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action = function (launchDarkly_FFIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Connect_LaunchDarkly_PermissionCheck$vars"))());
vars.value.launchDarkly_FFInLocal = launchDarkly_FFIn;
var permissions_CheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Connect_LaunchDarkly_PermissionCheck$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.permissions_CheckVar = permissions_CheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:1DeSqwMkfE+9WaJ4Gm0jLA:/ClientActionFlows.1DeSqwMkfE+9WaJ4Gm0jLA:adyyW7JUVanjOs9j4LlRxQ", "UBTConnect_Utils", "Connect_LaunchDarkly_PermissionCheck", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wjYFdkb5hUqOHF2ZInPAkw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WHN0CRxNYUCqQ_NZmgMw6A", callContext.id);
// Execute Action: Permissions_Check
permissions_CheckVar.value = UBT_AppManagerController.default.permissions_Check$Action(vars.value.launchDarkly_FFInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gAf1ZAnXZ0ua5r3Z55DKiA", callContext.id);
// HasAccess = Permissions_Check.HasPermission
outVars.value.hasAccessOut = permissions_CheckVar.value.hasPermissionOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:H8vEos9VIE2XJr0oT79IKw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:1DeSqwMkfE+9WaJ4Gm0jLA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Connect_LaunchDarkly_PermissionCheck$vars", [{
name: "LaunchDarkly_FF",
attrName: "launchDarkly_FFInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Connect_LaunchDarkly_PermissionCheck$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.connect_LaunchDarkly_PermissionCheck$Action = function (launchDarkly_FFIn) {
launchDarkly_FFIn = (launchDarkly_FFIn === undefined) ? "" : launchDarkly_FFIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action.bind(controller, launchDarkly_FFIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnect_Utils.clientVariables", "UBT_AppManager.controller$Permissions_Check", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action = function (outSystems_FFIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Connect_OutSystems_PermissionCheck$vars"))());
vars.value.outSystems_FFInLocal = outSystems_FFIn;
var permissions_CheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Connect_OutSystems_PermissionCheck$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.permissions_CheckVar = permissions_CheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:LUYmhBLz8ESqUS9lPysTVw:/ClientActionFlows.LUYmhBLz8ESqUS9lPysTVw:Xasjf7jV43btNDatCqhJfQ", "UBTConnect_Utils", "Connect_OutSystems_PermissionCheck", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:avbe2daJhkGcg5VEHYSnoA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oQm7AQOnM0uRN0U_rE4xlw", callContext.id);
// Execute Action: Permissions_Check
permissions_CheckVar.value = UBT_AppManagerController.default.permissions_Check$Action(vars.value.outSystems_FFInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sjx5c9QtC0udG7rtGsoaSw", callContext.id);
// HasAccess = Permissions_Check.HasPermission
outVars.value.hasAccessOut = permissions_CheckVar.value.hasPermissionOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WRvvqvhxT0W1wLUhXMFTBQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:LUYmhBLz8ESqUS9lPysTVw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Connect_OutSystems_PermissionCheck$vars", [{
name: "OutSystems_FF",
attrName: "outSystems_FFInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Connect_OutSystems_PermissionCheck$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.connect_OutSystems_PermissionCheck$Action = function (outSystems_FFIn) {
outSystems_FFIn = (outSystems_FFIn === undefined) ? "" : outSystems_FFIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action.bind(controller, outSystems_FFIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$DropdownSearch_ForceResizeOnOpen", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.controller$DropdownSearch_ForceResizeOnOpen.JavaScript1JS", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_Utils_controller_DropdownSearch_ForceResizeOnOpen_JavaScript1JS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.dropdownSearch_ForceResizeOnOpen$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:sEqtlSmWfk+2a0dcxRiHJw:/ClientActionFlows.sEqtlSmWfk+2a0dcxRiHJw:s2QxoVtQLXv235W56gEPZA", "UBTConnect_Utils", "DropdownSearch_ForceResizeOnOpen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dXHHzmV4G0axxYoHmAJQKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:I2Zh4IvigUyhzt+r+q648g", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Utils_controller_DropdownSearch_ForceResizeOnOpen_JavaScript1JS, "JavaScript1", "DropdownSearch_ForceResizeOnOpen", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rI9usY2510COgKuQK6qV8w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:sEqtlSmWfk+2a0dcxRiHJw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.dropdownSearch_ForceResizeOnOpen$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.dropdownSearch_ForceResizeOnOpen$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnect_Utils.controller$DropdownSearch_ForceResizeOnOpen.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
var elements = document.querySelectorAll('.osui-dropdown-search');

elements.forEach(function (el) {

    if (!el.dataset.resizeListenerAdded) {

        el.dataset.resizeListenerAdded = "true";

        el.addEventListener("afterOpen", function () {
            el.virtualSelect.onResize();
        });

    }

});
};
});

define("UBTConnect_Utils.controller$DropdownTags_CloseOtherOnClick", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.controller$DropdownTags_CloseOtherOnClick.JavaScript1JS", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_Utils_controller_DropdownTags_CloseOtherOnClick_JavaScript1JS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.dropdownTags_CloseOtherOnClick$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:FiPnp++kfUuc0sCxdocjqg:/ClientActionFlows.FiPnp++kfUuc0sCxdocjqg:uPFMImQEuswgVMi8lzfesg", "UBTConnect_Utils", "DropdownTags_CloseOtherOnClick", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eMh8lo7Fm0imuEzSlKDfjA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PzEGPEzRwkWFMiZzDc+R8w", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Utils_controller_DropdownTags_CloseOtherOnClick_JavaScript1JS, "JavaScript1", "DropdownTags_CloseOtherOnClick", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wK5NIToV1UCd_gV1RXXGTg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:FiPnp++kfUuc0sCxdocjqg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.dropdownTags_CloseOtherOnClick$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.dropdownTags_CloseOtherOnClick$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnect_Utils.controller$DropdownTags_CloseOtherOnClick.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
var elements = document.querySelectorAll('.osui-dropdown-tags');

elements.forEach(function (el) {

    el.addEventListener('click', function () {

        elements.forEach(function (other) {

            if (other !== el) {

                var elementName = other.getAttribute('name');

                if (elementName) {
                    OutSystems.OSUI.Patterns.DropdownAPI.Close(elementName);
                }

            }

        });

    }, true); // <- capture phase

});
};
});

define("UBTConnect_Utils.controller$ExternalShare", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.clientVariables", "UBT_AppManager.controller$AppManager_GetMemberId", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.controller$ExternalShare_WhatsApp", "UBTConnect_Utils.controller$ExternalShare_Signal", "Connect2_LegacyShared.controller$AuditShareEvent", "UBTConnect_Utils.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.controller$ExternalShare_CopyLink", "UBTConnect_Utils.controller$ExternalShare_Outlook", "UBTConnect_Utils.controller$ExternalShare_SocialSharing", "UBTConnect_Utils.controller$ExternalShare_GetEmailSubject"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, Connect2_LegacySharedController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare$Action = function (in_ShareIdIn, in_ShareObjectTypeIdIn, in_ShareableObjectIdIn, in_ShareMessageIn, in_ExternalShareOptionTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare$vars"))());
vars.value.in_ShareIdInLocal = in_ShareIdIn;
vars.value.in_ShareObjectTypeIdInLocal = in_ShareObjectTypeIdIn;
vars.value.in_ShareableObjectIdInLocal = in_ShareableObjectIdIn;
vars.value.in_ShareMessageInLocal = in_ShareMessageIn;
vars.value.in_ExternalShareOptionTypeIdInLocal = in_ExternalShareOptionTypeIdIn;
var appManager_GetMemberIdVar = new OS.DataTypes.VariableHolder();
var externalShare_SocialSharingVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetMemberIdVar = appManager_GetMemberIdVar;
varBag.externalShare_SocialSharingVar = externalShare_SocialSharingVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:0uvpKfsO8U2RJSze10LW1w:/ClientActionFlows.0uvpKfsO8U2RJSze10LW1w:luLl+M6hoJUCRMhvsVAIxg", "UBTConnect_Utils", "ExternalShare", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:068_3j7xo0+VYlBxXy60bg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZQA6luarMU2dBAUEwl7c2Q", callContext.id) && (vars.value.in_ExternalShareOptionTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.systemShare))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MpwM8NEzW0ON8hagrvj50A", callContext.id);
// Execute Action: ExternalShare_SocialSharing
return UBTConnect_UtilsController.default.externalShare_SocialSharing$Action(vars.value.in_ShareMessageInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.externalShare_GetEmailSubject$Action(vars.value.in_ShareObjectTypeIdInLocal, callContext).out_SubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).then(function (value) {
externalShare_SocialSharingVar.value = value;
}).then(function () {
// Error sharing?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xwb8f3hAyk2CHDHM84+w8Q", callContext.id) && !(externalShare_SocialSharingVar.value.out_IsErrorOut))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FDtgBOwCUEWLu3YbSo3HpA", callContext.id);
// Execute Action: AppManager_GetMemberId
appManager_GetMemberIdVar.value = UBT_AppManagerController.default.appManager_GetMemberId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GBIqu1_BRkWwJh3tnekpkQ", callContext.id);
// Execute Action: AuditShareEvent
return Connect2_LegacySharedController.default.auditShareEvent$Action(OS.BuiltinFunctions.longIntegerToText(vars.value.in_ShareIdInLocal), appManager_GetMemberIdVar.value.memberIdOut, "", "Others", vars.value.in_ShareObjectTypeIdInLocal, vars.value.in_ShareableObjectIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LBqq2l_FQ0KY8SAB0e9jWg", callContext.id);
return OS.Flow.returnAsync();

});
}

});
});
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.in_ExternalShareOptionTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.copyLink)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:85b+4MeJMEKVyXrlaKHJDg", callContext.id);
// Execute Action: ExternalShare_CopyLink
return UBTConnect_UtilsController.default.externalShare_CopyLink$Action(vars.value.in_ShareMessageInLocal, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.in_ExternalShareOptionTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.whatsapp)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MMn+lLNFf0KyogVvGkE9Tg", callContext.id);
// Execute Action: ExternalShare_WhatsApp
return UBTConnect_UtilsController.default.externalShare_WhatsApp$Action(vars.value.in_ShareMessageInLocal, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.in_ExternalShareOptionTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.signal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:M6dfrZv1Ekmgz4lvf_jT8A", callContext.id);
// Execute Action: ExternalShare_Signal
return UBTConnect_UtilsController.default.externalShare_Signal$Action(vars.value.in_ShareMessageInLocal, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.in_ExternalShareOptionTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.type_ExternalShareOption.outlook)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EJnh7zvoKkGRxMWWtCLkVg", callContext.id);
// Execute Action: ExternalShare_Outlook
return UBTConnect_UtilsController.default.externalShare_Outlook$Action(vars.value.in_ShareMessageInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.externalShare_GetEmailSubject$Action(vars.value.in_ShareObjectTypeIdInLocal, callContext).out_SubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0a8cV+__GkmTb591RG5ueQ", callContext.id);
return OS.Flow.returnAsync();

}

});
}

});
}

});
}

});
}

}).then(function () {
// >>
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VTF97lo5NU2FcnHTzpuyoQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+V2_+rEvYEy2gfpNNzy1rQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0uvpKfsO8U2RJSze10LW1w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0uvpKfsO8U2RJSze10LW1w", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare$vars", [{
name: "In_ShareId",
attrName: "in_ShareIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "In_ShareObjectTypeId",
attrName: "in_ShareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ShareableObjectId",
attrName: "in_ShareableObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ShareMessage",
attrName: "in_ShareMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ExternalShareOptionTypeId",
attrName: "in_ExternalShareOptionTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare$Action = function (in_ShareIdIn, in_ShareObjectTypeIdIn, in_ShareableObjectIdIn, in_ShareMessageIn, in_ExternalShareOptionTypeIdIn) {
in_ShareIdIn = (in_ShareIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : in_ShareIdIn;
in_ShareObjectTypeIdIn = (in_ShareObjectTypeIdIn === undefined) ? "" : in_ShareObjectTypeIdIn;
in_ShareableObjectIdIn = (in_ShareableObjectIdIn === undefined) ? "" : in_ShareableObjectIdIn;
in_ShareMessageIn = (in_ShareMessageIn === undefined) ? "" : in_ShareMessageIn;
in_ExternalShareOptionTypeIdIn = (in_ExternalShareOptionTypeIdIn === undefined) ? "" : in_ExternalShareOptionTypeIdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_ShareIdIn, OS.DataTypes.DataTypes.LongInteger), in_ShareObjectTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ShareableObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_ShareMessageIn, OS.DataTypes.DataTypes.Text), in_ExternalShareOptionTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ExternalShare_CopyLink", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare_CopyLink$Action = function (in_MessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_CopyLink$vars"))());
vars.value.in_MessageInLocal = in_MessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:OJ9LoT8CBEaby_cWLeEG0A:/ClientActionFlows.OJ9LoT8CBEaby_cWLeEG0A:EyDbMyPe_HUGlV7eFdHHpw", "UBTConnect_Utils", "ExternalShare_CopyLink", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4+_OgI40dkS6RPtere8n2w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gyTuUih2p0myzu2QtcxH+w", callContext.id);
// Execute Action: JSUtils_CopyToClipboard
return UBTJavaScriptUtilsController.default.jSUtils_CopyToClipboard$Action(vars.value.in_MessageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rtWScJEeOk+3zzjm8W8uCw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:OJ9LoT8CBEaby_cWLeEG0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:OJ9LoT8CBEaby_cWLeEG0A", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_CopyLink$vars", [{
name: "In_Message",
attrName: "in_MessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare_CopyLink$Action = function (in_MessageIn) {
in_MessageIn = (in_MessageIn === undefined) ? "" : in_MessageIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare_CopyLink$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ExternalShare_GetEmailSubject", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare_GetEmailSubject$Action = function (in_ShareObjectTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_GetEmailSubject$vars"))());
vars.value.in_ShareObjectTypeIdInLocal = in_ShareObjectTypeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_GetEmailSubject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:NFivJmE390WbtBSC1EJ7lA:/ClientActionFlows.NFivJmE390WbtBSC1EJ7lA:_co3JLB0zujD2mlXiK89Yg", "UBTConnect_Utils", "ExternalShare_GetEmailSubject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:48X_IMTp+k6Ahmmca9nIKQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GYvvacHSYEuA8DW5OSWGlQ", callContext.id) && (vars.value.in_ShareObjectTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.myHousehold))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9GKLE2bztEadZ6albUuq4A", callContext.id);
// Prefix = "my"
vars.value.prefixVar = "my";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9GKLE2bztEadZ6albUuq4A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// In_ShareObjectTypeId = Household
vars.value.in_ShareObjectTypeIdInLocal = UBTConnect_UtilsModel.staticEntities.type_ShareObject.household;
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VBPp5yZQiUCWRbOPxv0v8g", callContext.id);
// Out_Subject = "I'd like to share " + Prefix + " " + In_ShareObjectTypeId + " with you."
outVars.value.out_SubjectOut = (((("I\'d like to share " + vars.value.prefixVar) + " ") + vars.value.in_ShareObjectTypeIdInLocal) + " with you.");
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZI0+24xCuEGGWJwPfJIFcg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:NFivJmE390WbtBSC1EJ7lA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_GetEmailSubject$vars", [{
name: "In_ShareObjectTypeId",
attrName: "in_ShareObjectTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Prefix",
attrName: "prefixVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "this";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_GetEmailSubject$outVars", [{
name: "Out_Subject",
attrName: "out_SubjectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare_GetEmailSubject$Action = function (in_ShareObjectTypeIdIn) {
in_ShareObjectTypeIdIn = (in_ShareObjectTypeIdIn === undefined) ? "" : in_ShareObjectTypeIdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare_GetEmailSubject$Action.bind(controller, in_ShareObjectTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Subject: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_SubjectOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$ExternalShare_Outlook", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBTConnect_Utils.clientVariables", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "Connect2_AppLauncherPlugin.model$ExtrasRec", "UBTConnect_Utils.model$ExtrasList", "UBTConnect_Utils.model$ExternalAppPackageNameRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare_Outlook$Action = function (in_MessageIn, in_SubjectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_Outlook$vars"))());
vars.value.in_MessageInLocal = in_MessageIn;
vars.value.in_SubjectInLocal = in_SubjectIn;
var launchWithDataVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.launchWithDataVar = launchWithDataVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:CbYDCuOAjUySrVuAXcTqJg:/ClientActionFlows.CbYDCuOAjUySrVuAXcTqJg:VmezOCYiZ5tu1EQ+p2F_sw", "UBTConnect_Utils", "ExternalShare_Outlook", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Z6DO3wLuuk+TzSZPlkNVTA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:czw23AdxBUOni7n7S9jr9A", callContext.id);
// Data.packageName = ExternalAppPackageName.Outlook
vars.value.dataVar.packageNameAttr = vars.value.externalAppPackageNameVar.outlookAttr;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:czw23AdxBUOni7n7S9jr9A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Data.actionName = "android.intent.action.SEND"
vars.value.dataVar.actionNameAttr = "android.intent.action.SEND";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:czw23AdxBUOni7n7S9jr9A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Data.dataType = "text/plain"
vars.value.dataVar.dataTypeAttr = "text/plain";
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cQN6FESuqUWHd7+AtWt8KQ", callContext.id) && ((vars.value.in_MessageInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:j_oPu6BbsUSjpF_ZgDZRnA", callContext.id);
// Execute Action: ListAppend_Text
OS.SystemActions.listAppend(vars.value.dataVar.extrasAttr, function () {
var rec = new Connect2_AppLauncherPluginModel.ExtrasRec();
rec.nameAttr = "android.intent.extra.TEXT";
rec.dataTypeAttr = "String";
rec.valueAttr = function () {
var list = new OS.DataTypes.TextList();
list.pushAll([vars.value.in_MessageInLocal]);
return list;
}();
return rec;
}(), callContext);
}

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:p9aEKLVVCUyE1Rj2t8y62A", callContext.id) && ((vars.value.in_SubjectInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r8R47Y3HF0ekBGjBqY8xDA", callContext.id);
// Execute Action: ListAppend_Subject
OS.SystemActions.listAppend(vars.value.dataVar.extrasAttr, function () {
var rec = new Connect2_AppLauncherPluginModel.ExtrasRec();
rec.nameAttr = "android.intent.extra.SUBJECT";
rec.dataTypeAttr = "String";
rec.valueAttr = function () {
var list = new OS.DataTypes.TextList();
list.pushAll([vars.value.in_SubjectInLocal]);
return list;
}();
return rec;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tUDu9EqLRUm97DM4zDeL4Q", callContext.id);
// Execute Action: LaunchWithData
return Connect2_AppLauncherPluginController.default.launchWithData$Action(vars.value.dataVar, callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PnCgKeG7XUKZSCRizFb5cw", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:CbYDCuOAjUySrVuAXcTqJg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:CbYDCuOAjUySrVuAXcTqJg", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_Outlook$vars", [{
name: "In_Message",
attrName: "in_MessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Subject",
attrName: "in_SubjectInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExternalAppPackageName",
attrName: "externalAppPackageNameVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.ExternalAppPackageNameRec();
},
complexType: UBTConnect_UtilsModel.ExternalAppPackageNameRec
}, {
name: "Data",
attrName: "dataVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_AppLauncherPluginModel.LauncherParametersRec();
},
complexType: Connect2_AppLauncherPluginModel.LauncherParametersRec
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare_Outlook$Action = function (in_MessageIn, in_SubjectIn) {
in_MessageIn = (in_MessageIn === undefined) ? "" : in_MessageIn;
in_SubjectIn = (in_SubjectIn === undefined) ? "" : in_SubjectIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare_Outlook$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MessageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_SubjectIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ExternalShare_Signal", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBTConnect_Utils.clientVariables", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "Connect2_AppLauncherPlugin.model$ExtrasRec", "UBTConnect_Utils.model$ExtrasList", "UBTConnect_Utils.model$ExternalAppPackageNameRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare_Signal$Action = function (in_MessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_Signal$vars"))());
vars.value.in_MessageInLocal = in_MessageIn;
var launchWithDataVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.launchWithDataVar = launchWithDataVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:3+r+8yM6MEWYjtogxW4+IA:/ClientActionFlows.3+r+8yM6MEWYjtogxW4+IA:K+RBCJAsYmmXtXVXEZT_Sg", "UBTConnect_Utils", "ExternalShare_Signal", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_s37ENQVi0aqwq_oKPV1UA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7NwhBa57AEebsbLMSQEj6Q", callContext.id);
// Execute Action: LaunchWithData
return Connect2_AppLauncherPluginController.default.launchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = vars.value.externalAppPackageNameVar.signalAttr;
rec.actionNameAttr = "android.intent.action.SEND";
rec.dataTypeAttr = "text/plain";
rec.extrasAttr = function () {
var list = new UBTConnect_UtilsModel.ExtrasList();
list.pushAll([function () {
var rec = new Connect2_AppLauncherPluginModel.ExtrasRec();
rec.nameAttr = "android.intent.extra.TEXT";
rec.dataTypeAttr = "String";
rec.valueAttr = function () {
var list = new OS.DataTypes.TextList();
list.pushAll([vars.value.in_MessageInLocal]);
return list;
}();
return rec;
}()]);
return list;
}();
return rec;
}(), callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Z5++U8kxIE6yko26OvnH8g", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:3+r+8yM6MEWYjtogxW4+IA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:3+r+8yM6MEWYjtogxW4+IA", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_Signal$vars", [{
name: "In_Message",
attrName: "in_MessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExternalAppPackageName",
attrName: "externalAppPackageNameVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.ExternalAppPackageNameRec();
},
complexType: UBTConnect_UtilsModel.ExternalAppPackageNameRec
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare_Signal$Action = function (in_MessageIn) {
in_MessageIn = (in_MessageIn === undefined) ? "" : in_MessageIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare_Signal$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ExternalShare_SocialSharing", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "UBTConnect_Utils.clientVariables", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$SocialSharing_WithSubject", "UBTConnect_Utils.referencesHealth$SocialSharingPlugin"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, CommonPluginModel, SocialSharingPluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare_SocialSharing$Action = function (in_MessageIn, in_SubjectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_SocialSharing$vars"))());
vars.value.in_MessageInLocal = in_MessageIn;
vars.value.in_SubjectInLocal = in_SubjectIn;
var sharePluginErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var socialSharing_WithSubject2Var = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_SocialSharing$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sharePluginErrorVar = sharePluginErrorVar;
varBag.socialSharing_WithSubject2Var = socialSharing_WithSubject2Var;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:TIoz_ap+M0OZD4RLbZFUUw:/ClientActionFlows.TIoz_ap+M0OZD4RLbZFUUw:szhGKzWu+T3Ym_M9l55HFw", "UBTConnect_Utils", "ExternalShare_SocialSharing", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yIjc_X2xRU6+8mzG3utnpQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MDc6D9Ev3EGgW92IuG0MVg", callContext.id);
// Execute Action: SocialSharing_WithSubject2
return SocialSharingPluginController.default.socialSharing_WithSubject$Action(vars.value.in_MessageInLocal, vars.value.in_SubjectInLocal, "", OS.BuiltinFunctions.nullTextIdentifier(), callContext).then(function (value) {
socialSharing_WithSubject2Var.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qxTKlGPsMUyLbhmI1c6muA", callContext.id) && socialSharing_WithSubject2Var.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WW0dc6rV_kSxy0Su+NCmhw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:V7CrJ+L7b0C5Kw0C3PczHA", callContext.id);
// Out_IsError = True
outVars.value.out_IsErrorOut = true;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wbNWbRG8eUqFhua4cVyUCQ", callContext.id);
// Raise Error: SharePluginError
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.SharePluginError", ((socialSharing_WithSubject2Var.value.errorOut.errorCodeAttr + " - ") + socialSharing_WithSubject2Var.value.errorOut.errorMessageAttr));
}

});
}).catch(function (ex) {
OS.Logger.trace("ExternalShare_SocialSharing.ExternalShare_SocialSharing", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SharePluginError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "UBTConnect_Utils.SharePluginError")) {
OS.Logger.error(null, ex);
sharePluginErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(sharePluginErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Cej0r5oUMkK5+WjRW6sy1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VBaPhOQ96UW3Go9szhyIHg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(sharePluginErrorVar.value.exceptionMessageAttr, /*Warning*/ 2);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vfGTYF0y00iv+R9SbD_5BQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TIoz_ap+M0OZD4RLbZFUUw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TIoz_ap+M0OZD4RLbZFUUw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_SocialSharing$vars", [{
name: "In_Message",
attrName: "in_MessageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Subject",
attrName: "in_SubjectInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_SocialSharing$outVars", [{
name: "Out_IsError",
attrName: "out_IsErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare_SocialSharing$Action = function (in_MessageIn, in_SubjectIn) {
in_MessageIn = (in_MessageIn === undefined) ? "" : in_MessageIn;
in_SubjectIn = (in_SubjectIn === undefined) ? "" : in_SubjectIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare_SocialSharing$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MessageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_SubjectIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_IsErrorOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$ExternalShare_WhatsApp", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBTConnect_Utils.clientVariables", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "Connect2_AppLauncherPlugin.model$ExtrasRec", "UBTConnect_Utils.model$ExtrasList", "UBTConnect_Utils.model$ExternalAppPackageNameRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.externalShare_WhatsApp$Action = function (in_MessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ExternalShare_WhatsApp$vars"))());
vars.value.in_MessageInLocal = in_MessageIn;
var launchWithDataVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.launchWithDataVar = launchWithDataVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:GgLfhCvmNkWT5xPFTyFTfQ:/ClientActionFlows.GgLfhCvmNkWT5xPFTyFTfQ:CK0ZbFE7_QTFk_q3aoX9HQ", "UBTConnect_Utils", "ExternalShare_WhatsApp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yr1wAqOuKE+bJQOFxAeSWQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lBbX9ZJXcEe_1u0M4ZsZYw", callContext.id);
// Execute Action: LaunchWithData
return Connect2_AppLauncherPluginController.default.launchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = vars.value.externalAppPackageNameVar.whatsappAttr;
rec.actionNameAttr = "android.intent.action.SEND";
rec.dataTypeAttr = "text/plain";
rec.subActivityAttr = false;
rec.extrasAttr = function () {
var list = new UBTConnect_UtilsModel.ExtrasList();
list.pushAll([function () {
var rec = new Connect2_AppLauncherPluginModel.ExtrasRec();
rec.nameAttr = "android.intent.extra.TEXT";
rec.dataTypeAttr = "String";
rec.valueAttr = function () {
var list = new OS.DataTypes.TextList();
list.pushAll([vars.value.in_MessageInLocal]);
return list;
}();
return rec;
}()]);
return list;
}();
return rec;
}(), callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FzR8EW75lkulshVetzM81g", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:GgLfhCvmNkWT5xPFTyFTfQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:GgLfhCvmNkWT5xPFTyFTfQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ExternalShare_WhatsApp$vars", [{
name: "In_Message",
attrName: "in_MessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExternalAppPackageName",
attrName: "externalAppPackageNameVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.ExternalAppPackageNameRec();
},
complexType: UBTConnect_UtilsModel.ExternalAppPackageNameRec
}]);
UBTConnect_UtilsController.default.clientActionProxies.externalShare_WhatsApp$Action = function (in_MessageIn) {
in_MessageIn = (in_MessageIn === undefined) ? "" : in_MessageIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.externalShare_WhatsApp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ForceListUpdateOnScrollEnd", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller$ForceListUpdateOnScrollEnd.JavaScript1JS", "UBTConnect_Utils.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnect_Utils_controller_ForceListUpdateOnScrollEnd_JavaScript1JS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.forceListUpdateOnScrollEnd$Action = function (listIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ForceListUpdateOnScrollEnd$vars"))());
vars.value.listIdInLocal = listIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:4l+wxTJkD0i0P1Vk9Qfi+Q:/ClientActionFlows.4l+wxTJkD0i0P1Vk9Qfi+Q:21Hx7y9Sn7tCJO5qtpBBiQ", "UBTConnect_Utils", "ForceListUpdateOnScrollEnd", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uJCzUI1OH0KnAfzVHDEEYw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WmTZ5fVO3UuNK9DPsAqgmg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Utils_controller_ForceListUpdateOnScrollEnd_JavaScript1JS, "JavaScript1", "ForceListUpdateOnScrollEnd", {
ListId: OS.DataConversion.JSNodeParamConverter.to(vars.value.listIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
JSUtils_Element_Operations_GetElementById: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Element_Operations_GetElementById$Action,
ReactiveInstance_ForceUpdate: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).reactiveInstance_ForceUpdate$Action
}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fyXcL05tqEq5GH9fB7XY+g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:4l+wxTJkD0i0P1Vk9Qfi+Q", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ForceListUpdateOnScrollEnd$vars", [{
name: "ListId",
attrName: "listIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.forceListUpdateOnScrollEnd$Action = function (listIdIn) {
listIdIn = (listIdIn === undefined) ? "" : listIdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.forceListUpdateOnScrollEnd$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnect_Utils.controller$ForceListUpdateOnScrollEnd.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var list = $actions.JSUtils_Element_Operations_GetElementById($parameters.ListId).Element

if (list) {

    // Remove previous listener if this element was already initialized
    if (list._scrollEndCleanup) {
        list._scrollEndCleanup();
    }

    var scrollTimeout;

    function onScroll() {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(function () {
            $actions.ReactiveInstance_ForceUpdate(list);
        }, 150);
    }

    list.addEventListener("scroll", onScroll, { passive: true });

    // Store cleanup on the element
    list._scrollEndCleanup = function () {
        clearTimeout(scrollTimeout);
        list.removeEventListener("scroll", onScroll);
        list._scrollEndCleanup = null;
    };
}
};
});

define("UBTConnect_Utils.controller$Get_ConnectVersionDetails", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "AppVersionPlugin.controller", "UBTConnect_Utils.clientVariables", "UBT_AppManager.controller$AppManager_GetEnvironment", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.controller$ServerAction.Get_RuntimeVersion", "AppVersionPlugin.controller$GetVersionNumber", "UBTConnect_Utils.referencesHealth$AppVersionPlugin"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, AppVersionPluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.get_ConnectVersionDetails$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var get_RuntimeVersionVar = new OS.DataTypes.VariableHolder();
var appManager_GetEnvironmentVar = new OS.DataTypes.VariableHolder();
var getVersionNumberVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Get_ConnectVersionDetails$outVars"))());
varBag.callContext = callContext;
varBag.get_RuntimeVersionVar = get_RuntimeVersionVar;
varBag.appManager_GetEnvironmentVar = appManager_GetEnvironmentVar;
varBag.getVersionNumberVar = getVersionNumberVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:97T8WlwMZkCwcWhjhHEI7Q:/ClientActionFlows.97T8WlwMZkCwcWhjhHEI7Q:NhpETvAO07B3x9cG7k3rJQ", "UBTConnect_Utils", "Get_ConnectVersionDetails", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ijBkKBGFJ0qQsxPzeTCEYw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nRsbCkZTCkK3YbtB2PoN+Q", callContext.id);
// Execute Action: Get_RuntimeVersion
return controller.get_RuntimeVersion$ServerAction(callContext).then(function (value) {
get_RuntimeVersionVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k0QyAY1A0k2PUNWHyYVWPg", callContext.id);
// Execute Action: AppManager_GetEnvironment
appManager_GetEnvironmentVar.value = UBT_AppManagerController.default.appManager_GetEnvironment$Action(callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kE6w74aQoEu2QdRAHEN98Q", callContext.id);
// Execute Action: GetVersionNumber
getVersionNumberVar.value = AppVersionPluginController.default.getVersionNumber$Action(callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fAb1tqOHPkaa8+YTOxPoVA", callContext.id);
// Out_RuntimeVersion = Get_RuntimeVersion.Out_RuntimeVersion
outVars.value.out_RuntimeVersionOut = get_RuntimeVersionVar.value.out_RuntimeVersionOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fAb1tqOHPkaa8+YTOxPoVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Environment = AppManager_GetEnvironment.Environment
outVars.value.out_EnvironmentOut = appManager_GetEnvironmentVar.value.environmentOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fAb1tqOHPkaa8+YTOxPoVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_NativeVersion = GetVersionNumber.Version
outVars.value.out_NativeVersionOut = getVersionNumberVar.value.versionOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rCp9RuM6ZUu6lLsgAgLEiQ", callContext.id) && (((getVersionNumberVar.value.versionOut) !== ("")) && ((getVersionNumberVar.value.buildOut) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hbQu2TD2CEiKGmMN1iZn0g", callContext.id);
// Out_NativeVersion = Out_NativeVersion + "."
outVars.value.out_NativeVersionOut = (outVars.value.out_NativeVersionOut + ".");
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sooOkSSIE0CqNivcSWTWog", callContext.id);
// Out_NativeVersion = Out_NativeVersion + GetVersionNumber.Build
outVars.value.out_NativeVersionOut = (outVars.value.out_NativeVersionOut + getVersionNumberVar.value.buildOut);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nxn2DOl4XU6ne0tJd0dCtQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:97T8WlwMZkCwcWhjhHEI7Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:97T8WlwMZkCwcWhjhHEI7Q", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Get_ConnectVersionDetails$outVars", [{
name: "Out_RuntimeVersion",
attrName: "out_RuntimeVersionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Out_Environment",
attrName: "out_EnvironmentOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Out_NativeVersion",
attrName: "out_NativeVersionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.get_ConnectVersionDetails$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.get_ConnectVersionDetails$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_RuntimeVersion: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_RuntimeVersionOut, OS.DataTypes.DataTypes.Integer),
Out_Environment: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_EnvironmentOut, OS.DataTypes.DataTypes.Text),
Out_NativeVersion: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_NativeVersionOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$Get_MemoryCacheKey_UniqueKey", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.get_MemoryCacheKey_UniqueKey$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Get_MemoryCacheKey_UniqueKey$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:NLF54wSF9U62cFX_TznZ0w:/ClientActionFlows.NLF54wSF9U62cFX_TznZ0w:B6xYFkO5TSDFYNaNnE5asg", "UBTConnect_Utils", "Get_MemoryCacheKey_UniqueKey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fvDU3qEG5EGL_x2fxqZlkw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BRAkMGVhbkG7EtNt3_sq0w", callContext.id);
// Key = UniqueCacheKey
outVars.value.keyOut = UBTConnect_UtilsClientVariables.getUniqueCacheKey();
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+LTczKZxDkSPycvluQODfQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:NLF54wSF9U62cFX_TznZ0w", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Get_MemoryCacheKey_UniqueKey$outVars", [{
name: "Key",
attrName: "keyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.get_MemoryCacheKey_UniqueKey$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.get_MemoryCacheKey_UniqueKey$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Key: OS.DataConversion.JSNodeParamConverter.to(actionResults.keyOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$Get_NoteCategoryId_ByEntityTypeId", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.get_NoteCategoryId_ByEntityTypeId$Action = function (entityTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Get_NoteCategoryId_ByEntityTypeId$vars"))());
vars.value.entityTypeIdInLocal = entityTypeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Get_NoteCategoryId_ByEntityTypeId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:LDvKvmEKSE+xkorZsXFMQg:/ClientActionFlows.LDvKvmEKSE+xkorZsXFMQg:8I0wn8X5w8P5O8N9nixhfg", "UBTConnect_Utils", "Get_NoteCategoryId_ByEntityTypeId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gwPpEck5AEClBnM9E_nH_w", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nFaBRnLJhUS4kI_YACgbxw", callContext.id) && (vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.household))) {
// Household Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZcojOk4j_U6BxqOPLT5cDw", callContext.id);
// Out_NoteCategoryId = Household
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.household;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
if((vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions)) {
// Supper Metting Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Tsa9Rkq_+US3fufB14Sfug", callContext.id);
// Out_NoteCategoryId = SupperMeeting
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.supperMeeting;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
if((vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.interchange)) {
// Interchange Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1OAzAM61tUaDalamvbjRJg", callContext.id);
// Out_NoteCategoryId = Interchange
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.interchange;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
if((vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.member)) {
// Member Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EppicKjr+kir4tTIR8HfRA", callContext.id);
// Out_NoteCategoryId = Member
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.member;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
if((vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.locality)) {
// Loclity Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AM0+HnkVtESLJ07d0NYP9g", callContext.id);
// Out_NoteCategoryId = Locality
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.locality;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
if((vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.oneSchoolGlobal)) {
// OneSchool Global Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+_3Z8jDK3EiO9Kb5Y7L7OA", callContext.id);
// Out_NoteCategoryId = OneSchoolGlobal
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.oneSchoolGlobal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
if((vars.value.entityTypeIdInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.feedItem)) {
// Feed Item Note
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HJhCrBo0P0OCm2sFRkN+rg", callContext.id);
// Out_NoteCategoryId = FeedItem
outVars.value.out_NoteCategoryIdOut = UBTConnect_UtilsModel.staticEntities.noteCategory.feedItem;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wLeyFNcEREiSVIsARuJF4g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QJTMFd02sUuwVuVYx1Z+SA", callContext.id);
// Raise Error: InvalidAction
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.InvalidAction", "Notes not available");
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
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:LDvKvmEKSE+xkorZsXFMQg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Get_NoteCategoryId_ByEntityTypeId$vars", [{
name: "EntityTypeId",
attrName: "entityTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Get_NoteCategoryId_ByEntityTypeId$outVars", [{
name: "Out_NoteCategoryId",
attrName: "out_NoteCategoryIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.get_NoteCategoryId_ByEntityTypeId$Action = function (entityTypeIdIn) {
entityTypeIdIn = (entityTypeIdIn === undefined) ? "" : entityTypeIdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.get_NoteCategoryId_ByEntityTypeId$Action.bind(controller, entityTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_NoteCategoryId: actionResults.out_NoteCategoryIdOut
};
});
};
});

define("UBTConnect_Utils.controller$GetComingSoonMessage", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getComingSoonMessage$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetComingSoonMessage$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:f+mvZUCe8UyQ9oUlfyo0MA:/ClientActionFlows.f+mvZUCe8UyQ9oUlfyo0MA:WOxhU6XtGETBiUd9w+w7Sw", "UBTConnect_Utils", "GetComingSoonMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jBlMbl4jBU+E+qrzq38VMw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:v9ztQihPV0ah08uimfhf6A", callContext.id);
// Out_ComingSoonMessage = "This feature will be available soon"
outVars.value.out_ComingSoonMessageOut = "This feature will be available soon";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_6Rx4wkUFk2dfjj8l55xmg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:f+mvZUCe8UyQ9oUlfyo0MA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetComingSoonMessage$outVars", [{
name: "Out_ComingSoonMessage",
attrName: "out_ComingSoonMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getComingSoonMessage$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getComingSoonMessage$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ComingSoonMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ComingSoonMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$GetConnectEntity_ByShareType", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getConnectEntity_ByShareType$Action = function (shareTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetConnectEntity_ByShareType$vars"))());
vars.value.shareTypeInLocal = shareTypeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetConnectEntity_ByShareType$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:iqA6GEzoQUCZ8T4onlB6+w:/ClientActionFlows.iqA6GEzoQUCZ8T4onlB6+w:PDTj_MnbrtoUzAVCGZDepA", "UBTConnect_Utils", "GetConnectEntity_ByShareType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:o4mXifbvmk2Moism7yp6ng", callContext.id);
// Type
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:owKFSWU+aUek2X9yEhs3Ew", callContext.id) && (vars.value.shareTypeInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.locality))) {
// Locality
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:b1+0sX4K00eiurT9+hq96w", callContext.id);
// EntityType = Locality
outVars.value.entityTypeOut = UBTConnect_UtilsModel.staticEntities.connect_Entity.locality;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vE13rP6aHEqSzD2TZqKtmQ", callContext.id);
} else {
if(((vars.value.shareTypeInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.household) || (vars.value.shareTypeInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.myHousehold))) {
// Household
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:H6itXXEnT0iP3Q5y39z2Sw", callContext.id);
// EntityType = Household
outVars.value.entityTypeOut = UBTConnect_UtilsModel.staticEntities.connect_Entity.household;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vE13rP6aHEqSzD2TZqKtmQ", callContext.id);
} else {
if((vars.value.shareTypeInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.supperMeeting)) {
// Supper Meeting
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2Gz5177OHUq6P92SjG9tEg", callContext.id);
// EntityType = SupperMeetings_aka_Subdivisions
outVars.value.entityTypeOut = UBTConnect_UtilsModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vE13rP6aHEqSzD2TZqKtmQ", callContext.id);
} else {
if((vars.value.shareTypeInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.oneSchoolGlobal)) {
// School
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CSAcHQyqEEuToXIojTDVSg", callContext.id);
// EntityType = OneSchoolGlobal
outVars.value.entityTypeOut = UBTConnect_UtilsModel.staticEntities.connect_Entity.oneSchoolGlobal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vE13rP6aHEqSzD2TZqKtmQ", callContext.id);
} else {
if((vars.value.shareTypeInLocal === UBTConnect_UtilsModel.staticEntities.type_ShareObject.feed)) {
// FeedItem
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HI+usEp8gkCNQbNOVOC_nA", callContext.id);
// EntityType = FeedItem
outVars.value.entityTypeOut = UBTConnect_UtilsModel.staticEntities.connect_Entity.feedItem;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vE13rP6aHEqSzD2TZqKtmQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:T2CbVuCN4kGML4_w9SVM2Q", callContext.id);
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
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:iqA6GEzoQUCZ8T4onlB6+w", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetConnectEntity_ByShareType$vars", [{
name: "ShareType",
attrName: "shareTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetConnectEntity_ByShareType$outVars", [{
name: "EntityType",
attrName: "entityTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getConnectEntity_ByShareType$Action = function (shareTypeIn) {
shareTypeIn = (shareTypeIn === undefined) ? "" : shareTypeIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getConnectEntity_ByShareType$Action.bind(controller, shareTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
EntityType: actionResults.entityTypeOut
};
});
};
});

define("UBTConnect_Utils.controller$GetEntityType_Icon", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getEntityType_Icon$Action = function (entityTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetEntityType_Icon$vars"))());
vars.value.entityTypeInLocal = entityTypeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetEntityType_Icon$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:D9lQQLwIEkSgwUsk7wuYjw:/ClientActionFlows.D9lQQLwIEkSgwUsk7wuYjw:WthduRsAGuv_83RjFg7kXA", "UBTConnect_Utils", "GetEntityType_Icon", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:80EmSkTRv0mIGZx0mYVcGg", callContext.id);
// Type
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GuVTLTq+e0S9o7XnQfkhkQ", callContext.id) && (vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.member))) {
// Person
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nDSLk6CCRkKhJiiA1PSkSQ", callContext.id);
// IconId = PersonFill
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.personFill;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.locality)) {
// Locality
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yJplPECx3UGXvfI1F0qFKQ", callContext.id);
// IconId = HomePIn
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.homePIn;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.household)) {
// Household
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:c8q+uR8LeUyCcCuhB0a72w", callContext.id);
// IconId = Home
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.home;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.interchange)) {
// Interchange
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4uigrqe9b0Wt+0mbBxDiRg", callContext.id);
// IconId = PartnerExchange
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.partnerExchange;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions)) {
// Supper Meeting
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xk6zlD1o10WadwYi6zCL1w", callContext.id);
// IconId = HouseFill
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.houseFill;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.oneSchoolGlobal)) {
// School
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:UTHmYZy2MUy0OeZ3Jnlwxg", callContext.id);
// IconId = SchoolFill
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.schoolFill;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.feedItem)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:As41dVbSN0+zSFJ_EkIDEQ", callContext.id);
// IconId = FeedItem
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.feedItem;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fCStLalEIU++PfOwfiujfw", callContext.id);
} else {
// Fallback IconId
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MPdSFRxFqEmtGo+plnI0wQ", callContext.id);
// IconId = ImageGallery
outVars.value.iconIdOut = UBTConnect_UtilsModel.staticEntities.uBT_Icons.imageGallery;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3gNBisweA02nssHcft4D8w", callContext.id);
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
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:D9lQQLwIEkSgwUsk7wuYjw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetEntityType_Icon$vars", [{
name: "EntityType",
attrName: "entityTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetEntityType_Icon$outVars", [{
name: "IconId",
attrName: "iconIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getEntityType_Icon$Action = function (entityTypeIn) {
entityTypeIn = (entityTypeIn === undefined) ? "" : entityTypeIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getEntityType_Icon$Action.bind(controller, entityTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IconId: actionResults.iconIdOut
};
});
};
});

define("UBTConnect_Utils.controller$GetHasAncestry4thGenerationAccess", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasAncestry4thGenerationAccess$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasAncestry4thGenerationAccess$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:czo4i5ddvEWzaaR3lB5y7w:/ClientActionFlows.czo4i5ddvEWzaaR3lB5y7w:ffKToGezQPOzicAfwrMmsA", "UBTConnect_Utils", "GetHasAncestry4thGenerationAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pkKtHbmZdU6XEqJzEkrVAQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:s3selLMXXUypdJObtmWeWQ", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileHouseholdAncestry4thGen, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:i5sf24vNLUOTZSFIw9c3kA", callContext.id);
// HasAncestry4thGenAccess = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasAncestry4thGenAccessOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:S0sWKBr9Zkq5cZrGZdhmpw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:czo4i5ddvEWzaaR3lB5y7w", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasAncestry4thGenerationAccess$outVars", [{
name: "HasAncestry4thGenAccess",
attrName: "hasAncestry4thGenAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasAncestry4thGenerationAccess$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasAncestry4thGenerationAccess$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAncestry4thGenAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAncestry4thGenAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasAssemble", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasAssemble$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasAssemble$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:K2rFpyNIuEm21J_w7+f8og:/ClientActionFlows.K2rFpyNIuEm21J_w7+f8og:HPeI08SY2M596IEZG7eOkg", "UBTConnect_Utils", "GetHasAssemble", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bBFUCDtp8Ea4YCg1uEli4w", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fPJiuRisLkm7tPmEtGg9uQ", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileAssemble, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FAQJPcSV5UuQv483urfXlw", callContext.id);
// HasAssemble = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasAssembleOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:agep09si6kOuR_HOfg57oA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:K2rFpyNIuEm21J_w7+f8og", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasAssemble$outVars", [{
name: "HasAssemble",
attrName: "hasAssembleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasAssemble$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasAssemble$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAssemble: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAssembleOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasBookmarNote", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasBookmarNote$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasBookmarNote$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:KKlrdRsNYUaGGRyqMzdArA:/ClientActionFlows.KKlrdRsNYUaGGRyqMzdArA:RPR0h7fJlfSeTBbPKnjpGQ", "UBTConnect_Utils", "GetHasBookmarNote", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HtBIjR_tl0GRrsnHs4Z90g", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0GFeZjvhT0Oh_ai16_zJLA", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileDirectoryBookmarkNote, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:v0Ma31WDbEqAoxMfiT66og", callContext.id);
// HasBookmarkNoteAccess = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasBookmarkNoteAccessOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bwtSHYeZfkOuozI+Js15pw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:KKlrdRsNYUaGGRyqMzdArA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasBookmarNote$outVars", [{
name: "HasBookmarkNoteAccess",
attrName: "hasBookmarkNoteAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasBookmarNote$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasBookmarNote$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasBookmarkNoteAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasBookmarkNoteAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasC1DirectoryView", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasC1DirectoryView$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasC1DirectoryView$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:wqZr1xR45ky7U2rQyp8_VQ:/ClientActionFlows.wqZr1xR45ky7U2rQyp8_VQ:OEHdkAYKDlMqLY85QVIOsA", "UBTConnect_Utils", "GetHasC1DirectoryView", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1HLtAZ8UEkC_ncD_ynau0A", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:iLfH3owCwkyDlDfy2pwbqw", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2EnableC1DirectoryView, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:z0_vBfvA6UK5TtPdgHuc5g", callContext.id);
// HasC1DirectoryView = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasC1DirectoryViewOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AviLuL3NAkyQipjFF4_wuA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:wqZr1xR45ky7U2rQyp8_VQ", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasC1DirectoryView$outVars", [{
name: "HasC1DirectoryView",
attrName: "hasC1DirectoryViewOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasC1DirectoryView$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasC1DirectoryView$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasC1DirectoryView: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasC1DirectoryViewOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasCarouselEnabled", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasCarouselEnabled$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasCarouselEnabled$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:HCGe1AccvE+l0OFhlujZMw:/ClientActionFlows.HCGe1AccvE+l0OFhlujZMw:Eqqo7q_CYghWntZ6mzbFdA", "UBTConnect_Utils", "GetHasCarouselEnabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TjMmdzNeCkqOlTK7LsiGrw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:iDo89TwbskqAHaCwecUGoA", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2EnableCarousel, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MWY1RsqsGUGypflINM1_XA", callContext.id);
// HasCarouselEnabled = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasCarouselEnabledOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bfwmusX2606771eD47dz8Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:HCGe1AccvE+l0OFhlujZMw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasCarouselEnabled$outVars", [{
name: "HasCarouselEnabled",
attrName: "hasCarouselEnabledOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasCarouselEnabled$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasCarouselEnabled$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasCarouselEnabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasCarouselEnabledOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasCustomEvents", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasCustomEvents$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasCustomEvents$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:HIQ6ytcwLUKEyrgnayog9Q:/ClientActionFlows.HIQ6ytcwLUKEyrgnayog9Q:vczDLdzkF2KNXmodmhkF5A", "UBTConnect_Utils", "GetHasCustomEvents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:SY6spbH6qE+ZnuDQq5+Acg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3XjPvMpgL0e3j2I2IJXmiA", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2EnableCustomServices, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BvsDu9posU+8AWl7cKYRPQ", callContext.id);
// HasCustomEvents = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasCustomEventsOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Bf4tmxDQq0uyFkpWSgP7jg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:HIQ6ytcwLUKEyrgnayog9Q", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasCustomEvents$outVars", [{
name: "HasCustomEvents",
attrName: "hasCustomEventsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasCustomEvents$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasCustomEvents$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasCustomEvents: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasCustomEventsOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasDeceasedProfileAccess", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasDeceasedProfileAccess$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasDeceasedProfileAccess$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:x_d9ri2Rg0aqh1h+AXGHPg:/ClientActionFlows.x_d9ri2Rg0aqh1h+AXGHPg:oUrlR0veGSO5vziFfE_qeQ", "UBTConnect_Utils", "GetHasDeceasedProfileAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HylpQZYllUmy8PC8Oo3JiA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ygoSjUPeVU+5iWwC+9TlcQ", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileDirectoryUpdateFeedDeceasedProfile, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mvXlLWmVlkGPzHqvP9RXCg", callContext.id);
// HasDeceasedProfileAccess = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasDeceasedProfileAccessOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fHLO6nrsB0SRbUv2yDuNqw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:x_d9ri2Rg0aqh1h+AXGHPg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasDeceasedProfileAccess$outVars", [{
name: "HasDeceasedProfileAccess",
attrName: "hasDeceasedProfileAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasDeceasedProfileAccess$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasDeceasedProfileAccess$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasDeceasedProfileAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasDeceasedProfileAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasExtendedShare", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasExtendedShare$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasExtendedShare$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:oOG3MnmS3kKIT9IAuOnuLg:/ClientActionFlows.oOG3MnmS3kKIT9IAuOnuLg:2nYUMuCPTQ1GDCZWhaFStA", "UBTConnect_Utils", "GetHasExtendedShare", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Gk_HFblMzUusH4L7z0olWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oltAGgqh0k+iHIc9UBE1gw", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2ExtendedShare, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jzt+h9JT6Uy2bhiHVWn7fQ", callContext.id);
// HasExtendedShare = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasExtendedShareOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:B9xfUhcRA0GwfgmvKYnE7g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:oOG3MnmS3kKIT9IAuOnuLg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasExtendedShare$outVars", [{
name: "HasExtendedShare",
attrName: "hasExtendedShareOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasExtendedShare$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasExtendedShare$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasExtendedShare: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasExtendedShareOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasFeedEnabled", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasFeedEnabled$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasFeedEnabled$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:aJe1Nl6BdUen8dtob+0ZOA:/ClientActionFlows.aJe1Nl6BdUen8dtob+0ZOA:KcTUU0AL3HrvAugTi5aTNw", "UBTConnect_Utils", "GetHasFeedEnabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u_1SqTxcEE6Y3vis52qp8w", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wAzok43h10Wnv_oNsJJdvQ", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2EnableFeed, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cfQfalUwH0CU3_iaJ86fsA", callContext.id);
// HasAccess = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasAccessOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:l+yYYIgCjkq0+5oytFMnxg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:aJe1Nl6BdUen8dtob+0ZOA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasFeedEnabled$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasFeedEnabled$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasFeedEnabled$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasHiddenMembersAccess", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasHiddenMembersAccess$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasHiddenMembersAccess$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:J9QProsgGUumhaZFSGA_Tg:/ClientActionFlows.J9QProsgGUumhaZFSGA_Tg:s1U3FrhEkRtU7AUvGG83UQ", "UBTConnect_Utils", "GetHasHiddenMembersAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KZ5IC+qyDkW7lY_2EWGUjQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RZ9mhELlHEGv4CK55w56xA", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileHasHiddenMembersAccess, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zPLdfzjwqECaxKS46SafWQ", callContext.id);
// HasHiddenMemberAcces = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasHiddenMemberAccesOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wjVNR9CklEWwpA+pNOWmsA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:J9QProsgGUumhaZFSGA_Tg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasHiddenMembersAccess$outVars", [{
name: "HasHiddenMemberAcces",
attrName: "hasHiddenMemberAccesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasHiddenMembersAccess$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasHiddenMembersAccess$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasHiddenMemberAcces: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasHiddenMemberAccesOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasMapsEnabled", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasMapsEnabled$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasMapsEnabled$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:L2owTetE4kysGZbjze5+bw:/ClientActionFlows.L2owTetE4kysGZbjze5+bw:VkY0YZeYuxyQhhvwbgCWtQ", "UBTConnect_Utils", "GetHasMapsEnabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Qz8oKPZ4Ikq3HuQRc7uzMQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_fEDUOooIk+LwI4L4zTJug", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2EnableMaps, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:F4eiiTHEBkCzjjXw43Y4GQ", callContext.id);
// HasAccess = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasAccessOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eSY3gPkx70mQKey9ijW5jg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:L2owTetE4kysGZbjze5+bw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasMapsEnabled$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasMapsEnabled$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasMapsEnabled$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasNewBookmarks", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasNewBookmarks$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasNewBookmarks$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:C576j57T6UGvE96z314mPw:/ClientActionFlows.C576j57T6UGvE96z314mPw:9pwQHzr_9t0yK846+nsP1g", "UBTConnect_Utils", "GetHasNewBookmarks", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hi8UUMbpL0CT7GrU4SSKkw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QbKzthnpTky8o_HlgxVy+w", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2NewBookmarks, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_291EfyEnUeyPa54nbZy7Q", callContext.id);
// Out_HasNewBookmarks = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.out_HasNewBookmarksOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hkEK3WQBOUuH0EeMq7MAVA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:C576j57T6UGvE96z314mPw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasNewBookmarks$outVars", [{
name: "Out_HasNewBookmarks",
attrName: "out_HasNewBookmarksOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasNewBookmarks$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasNewBookmarks$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HasNewBookmarks: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_HasNewBookmarksOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasNewLDM", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasNewLDM$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasNewLDM$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:5lMeCzqSKUuoyzSz+fnIMg:/ClientActionFlows.5lMeCzqSKUuoyzSz+fnIMg:1KZJj7rkpjr3a_JFPxdLMw", "UBTConnect_Utils", "GetHasNewLDM", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yZtsRk0k2kaZBQAeRE53yw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ir85JIEax0mIiN5M2ikCMw", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2NewLDM, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tR7n2LtXsEal4lkwLKif6w", callContext.id);
// Out_HasNewLDM = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.out_HasNewLDMOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ct0pCgruf0C80aEmq6hmJA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:5lMeCzqSKUuoyzSz+fnIMg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasNewLDM$outVars", [{
name: "Out_HasNewLDM",
attrName: "out_HasNewLDMOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasNewLDM$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasNewLDM$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HasNewLDM: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_HasNewLDMOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasNewNotifications", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasNewNotifications$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasNewNotifications$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:+EX7ESGPAka9RUOTDNGkEg:/ClientActionFlows.+EX7ESGPAka9RUOTDNGkEg:ZsH3pPR_CBVgpRNq8638zw", "UBTConnect_Utils", "GetHasNewNotifications", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4Z2BlDEJkkaNyqChAg0fRw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2nwLztLFpUC1_OfHBC46tw", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2NewNotifications, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Tgt1Gz8F+0mbAbwC12QNPA", callContext.id);
// Out_HasNewNotifications = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.out_HasNewNotificationsOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jwwjNcNCo0WcvLQQlgUi5g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:+EX7ESGPAka9RUOTDNGkEg", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasNewNotifications$outVars", [{
name: "Out_HasNewNotifications",
attrName: "out_HasNewNotificationsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasNewNotifications$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasNewNotifications$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_HasNewNotifications: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_HasNewNotificationsOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasOrbitAccess", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasOrbitAccess$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasOrbitAccess$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:YbuWNinRz0COC9o_23M8Iw:/ClientActionFlows.YbuWNinRz0COC9o_23M8Iw:3l2M_TTZqtRerH_rawN72g", "UBTConnect_Utils", "GetHasOrbitAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:agJGDJ4takmE9kbiYLobug", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:455pFxHsh0KQUNY184z88w", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileOrbitAccess, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Js2tzp5wqEyeL4KRpJfqzg", callContext.id);
// HasOrbitAccess = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasOrbitAccessOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gn1KoACpo0SSCJPHOirc+w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:YbuWNinRz0COC9o_23M8Iw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasOrbitAccess$outVars", [{
name: "HasOrbitAccess",
attrName: "hasOrbitAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasOrbitAccess$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasOrbitAccess$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasOrbitAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasOrbitAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasOrbitEventBooklet", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasOrbitEventBooklet$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasOrbitEventBooklet$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:eGLAGMZBBU+UuKhj9TlSkw:/ClientActionFlows.eGLAGMZBBU+UuKhj9TlSkw:viDvBC31zj8De3PVjnVM7Q", "UBTConnect_Utils", "GetHasOrbitEventBooklet", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rBe8hNdBXkONEx4CNDNq3w", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+ozKwVK80kmHXAIoFxdT2g", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileOrbitEventBooklet, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:16AcwNn2oUKlvcNw5N9aZA", callContext.id);
// HasOrbitEventBooklet = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasOrbitEventBookletOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xwa+zDXbbU6SpnmOI44MsA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:eGLAGMZBBU+UuKhj9TlSkw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasOrbitEventBooklet$outVars", [{
name: "HasOrbitEventBooklet",
attrName: "hasOrbitEventBookletOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasOrbitEventBooklet$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasOrbitEventBooklet$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasOrbitEventBooklet: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasOrbitEventBookletOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasOrbitHostSurvey", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasOrbitHostSurvey$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasOrbitHostSurvey$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:rZ_Y7PBuGUyL_qOBJp9AvA:/ClientActionFlows.rZ_Y7PBuGUyL_qOBJp9AvA:qdRJkuQ9svJPkvaNi5HjXw", "UBTConnect_Utils", "GetHasOrbitHostSurvey", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lY7H6IJb90yNwSGNXX2NhA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+fHLVf_ts0GRbXRaaILQww", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileOrbitHostSurvey, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TOwSZyIw0k6WeKrLA0uOwA", callContext.id);
// HasOrbitHostSurvey = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasOrbitHostSurveyOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:OISFYxmPeEm+IDoEaBpREg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:rZ_Y7PBuGUyL_qOBJp9AvA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasOrbitHostSurvey$outVars", [{
name: "HasOrbitHostSurvey",
attrName: "hasOrbitHostSurveyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasOrbitHostSurvey$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasOrbitHostSurvey$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasOrbitHostSurvey: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasOrbitHostSurveyOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasPersonalEvents", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_OutSystems_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasPersonalEvents$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_OutSystems_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasPersonalEvents$outVars"))());
varBag.callContext = callContext;
varBag.connect_OutSystems_PermissionCheckVar = connect_OutSystems_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:heF7xp6sL0e3keXPE8pPUw:/ClientActionFlows.heF7xp6sL0e3keXPE8pPUw:yqjZUSWGnpeYZiUHPouoXg", "UBTConnect_Utils", "GetHasPersonalEvents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u9Gyxs9sika0uxXK2oteUA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HdYlaZd_BU+R0uyk+Fdjcg", callContext.id);
// Execute Action: Connect_OutSystems_PermissionCheck
connect_OutSystems_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_OutSystems_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.outSystems_FF.c2EnablePersonalEvents, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xELbgR6r9kOK0zX1Y7+ylQ", callContext.id);
// HasPersonalEvents = Connect_OutSystems_PermissionCheck.HasAccess
outVars.value.hasPersonalEventsOut = connect_OutSystems_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:F8oFrYLd7kuq74zDYfyOew", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:heF7xp6sL0e3keXPE8pPUw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasPersonalEvents$outVars", [{
name: "HasPersonalEvents",
attrName: "hasPersonalEventsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasPersonalEvents$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasPersonalEvents$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasPersonalEvents: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasPersonalEventsOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasPhotobookAccess", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasPhotobookAccess$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasPhotobookAccess$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:oKvlzrmrzkqVvFJYJHdQLQ:/ClientActionFlows.oKvlzrmrzkqVvFJYJHdQLQ:6AC19wMRyXeZYRaS48WGjQ", "UBTConnect_Utils", "GetHasPhotobookAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8VN9hGvabU2dsKqHQ6ff+A", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2TD_u+AcEUqJzev62oX_ng", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobilePhotobook, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mXGPKoeHgkijPEdUD8j7ew", callContext.id);
// HasPhotobookAccess = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasPhotobookAccessOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IA_k1aRWo0eU3p_Aob_Ysw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:oKvlzrmrzkqVvFJYJHdQLQ", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasPhotobookAccess$outVars", [{
name: "HasPhotobookAccess",
attrName: "hasPhotobookAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasPhotobookAccess$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasPhotobookAccess$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasPhotobookAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasPhotobookAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetHasWalletAccess", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getHasWalletAccess$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetHasWalletAccess$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:5LoxeIerqEWI2+j_4lT90A:/ClientActionFlows.5LoxeIerqEWI2+j_4lT90A:jpcOqSoeNy+nrA5z4J5GBQ", "UBTConnect_Utils", "GetHasWalletAccess", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fvRYtx1gFUi6gDVMIhcpSQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pQIEz7l+Dk2aPdE1_eJYGg", callContext.id);
// HasAccess = False
outVars.value.hasAccessOut = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RAyyPlvJD0efdHIm059X5A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:5LoxeIerqEWI2+j_4lT90A", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetHasWalletAccess$outVars", [{
name: "HasAccess",
attrName: "hasAccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getHasWalletAccess$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getHasWalletAccess$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasAccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasAccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$GetImageType_FromEntity", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getImageType_FromEntity$Action = function (entityTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetImageType_FromEntity$vars"))());
vars.value.entityTypeInLocal = entityTypeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetImageType_FromEntity$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Rouy1EMA3EWzaq8k0+GvbQ:/ClientActionFlows.Rouy1EMA3EWzaq8k0+GvbQ:FeS_VK64Y1v8u2yyE2UVGw", "UBTConnect_Utils", "GetImageType_FromEntity", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_Zh_GD5jk0GyA9MVxOXPIA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4Q1R1h1P4U+yYAXcCXA92w", callContext.id);
// Type = EntityType
outVars.value.typeOut = vars.value.entityTypeInLocal;
// Type
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fkqlPYUUUE+mvnnTS9JWuA", callContext.id) && (vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.locality))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_PE5NgtZpE62sGw8Cu0iDg", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.household)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HBMFWw_ZyEeJvF0FH8eoyQ", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.interchange)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Bktvi+IJaEOsfUmislwMlg", callContext.id);
// Type = ""
outVars.value.typeOut = "";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DTFzZS5wVkuy1B1wu8h+3g", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AUYkc6Jrwki5rFA6WBYwKA", callContext.id);
// Type = "Subdivision"
outVars.value.typeOut = "Subdivision";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Y1sVHpm_7U6F_OPAkWeJOg", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.oneSchoolGlobal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nmyQiVTCPEerPQUACk8_Tg", callContext.id);
// Type = ""
outVars.value.typeOut = "";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:w8oklviAJE2vtQYjGYWeUA", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.member)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7lF79JGpKUu1jAPRe8HdfA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2X_s_+bGQ0G8gZxCcMUkBQ", callContext.id);
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
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Rouy1EMA3EWzaq8k0+GvbQ", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetImageType_FromEntity$vars", [{
name: "EntityType",
attrName: "entityTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetImageType_FromEntity$outVars", [{
name: "Type",
attrName: "typeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getImageType_FromEntity$Action = function (entityTypeIn) {
entityTypeIn = (entityTypeIn === undefined) ? "" : entityTypeIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getImageType_FromEntity$Action.bind(controller, entityTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Type: OS.DataConversion.JSNodeParamConverter.to(actionResults.typeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$GetShareTypeBy_ConnectEntityType", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getShareTypeBy_ConnectEntityType$Action = function (entityTypeIn, isMyHouseholdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetShareTypeBy_ConnectEntityType$vars"))());
vars.value.entityTypeInLocal = entityTypeIn;
vars.value.isMyHouseholdInLocal = isMyHouseholdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetShareTypeBy_ConnectEntityType$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:TCk0xEzFoUWUwkCqBU49sA:/ClientActionFlows.TCk0xEzFoUWUwkCqBU49sA:resJF7H_L5wSOpQnr3ddNg", "UBTConnect_Utils", "GetShareTypeBy_ConnectEntityType", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:e1GuQz_SM068sEY7ToYH1w", callContext.id);
// Type
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lHB08GE1uUKdQz6Fj_V6mQ", callContext.id) && (vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.member))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8Fu1rWdJH0mJ2Sx6Ia2e1A", callContext.id);
// Raise Error: InvalidAction
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.InvalidAction", "Share not available");
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.locality)) {
// Locality
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PUhpkH9B1kKBDhPabQuIiA", callContext.id);
// ShareType = Locality
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.locality;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.household)) {
// Household
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xuYpcbSe706PsgyXp8eA0A", callContext.id);
// ShareType = Household
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.household;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.interchange)) {
// Interchange
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3UaG9oQZmUC2dZhc1Y+VoQ", callContext.id);
// ShareType = Locality
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.locality;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions)) {
// Partner Exchange
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NdA_2Z7aTUaa1Gx9pEEiRw", callContext.id);
// ShareType = SupperMeeting
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.supperMeeting;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.oneSchoolGlobal)) {
// School
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RvONdOCQ706c6609uY_hAg", callContext.id);
// ShareType = OneSchoolGlobal
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.oneSchoolGlobal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
if((vars.value.entityTypeInLocal === UBTConnect_UtilsModel.staticEntities.connect_Entity.feedItem)) {
// FeedItem
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GfcdLLRbd0edKGWTfI9Dqw", callContext.id);
// ShareType = Feed
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.feed;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
if(vars.value.isMyHouseholdInLocal) {
// My Household
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:UGEmSZTxB0uAgJP2_vJd1Q", callContext.id);
// ShareType = MyHousehold
outVars.value.shareTypeOut = UBTConnect_UtilsModel.staticEntities.type_ShareObject.myHousehold;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BfZh3jntJ0ysWDDEz_CjGA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aHUtm04lmEWeSgwI2aSuow", callContext.id);
// Raise Error: InvalidAction
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.InvalidAction", "Share not available");
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
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TCk0xEzFoUWUwkCqBU49sA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetShareTypeBy_ConnectEntityType$vars", [{
name: "EntityType",
attrName: "entityTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsMyHousehold",
attrName: "isMyHouseholdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetShareTypeBy_ConnectEntityType$outVars", [{
name: "ShareType",
attrName: "shareTypeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getShareTypeBy_ConnectEntityType$Action = function (entityTypeIn, isMyHouseholdIn) {
entityTypeIn = (entityTypeIn === undefined) ? "" : entityTypeIn;
isMyHouseholdIn = (isMyHouseholdIn === undefined) ? false : isMyHouseholdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getShareTypeBy_ConnectEntityType$Action.bind(controller, entityTypeIn, OS.DataConversion.JSNodeParamConverter.from(isMyHouseholdIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ShareType: actionResults.shareTypeOut
};
});
};
});

define("UBTConnect_Utils.controller$GetUserCurrentGeoLocation", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "LocationPlugin.model", "CommonPlugin.model", "LocationPlugin.controller", "UBTConnect_Utils.controller$GetUserCurrentGeoLocation.JavaScript1JS", "UBTConnect_Utils.clientVariables", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "LocationPlugin.model$LocationRec", "UBTConnect_Utils.referencesHealth$LocationPlugin", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth$CommonPlugin", "LocationPlugin.controller$GetLocation", "LocationPlugin.controller$CheckLocationPlugin"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, LocationPluginModel, CommonPluginModel, LocationPluginController, UBTConnect_Utils_controller_GetUserCurrentGeoLocation_JavaScript1JS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getUserCurrentGeoLocation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var appManager_GetIsNativeVar = new OS.DataTypes.VariableHolder();
var getLocationVar = new OS.DataTypes.VariableHolder();
var checkLocationPluginVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetUserCurrentGeoLocation$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.appManager_GetIsNativeVar = appManager_GetIsNativeVar;
varBag.getLocationVar = getLocationVar;
varBag.checkLocationPluginVar = checkLocationPluginVar;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:H8subAGZfkCVSlWzDpLAyw:/ClientActionFlows.H8subAGZfkCVSlWzDpLAyw:ox8q8noAc9WLooDaHDhWhA", "UBTConnect_Utils", "GetUserCurrentGeoLocation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NSi2EFINyEeiW4XWPn9V4Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fn3jRJZC6EOxcJE1ihEuWQ", callContext.id);
// Execute Action: AppManager_GetIsNative
appManager_GetIsNativeVar.value = UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tCsRaXn2ZUOYsNfXjaQLnQ", callContext.id) && appManager_GetIsNativeVar.value.isNativeOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Xx2R9G+nbkGKUY2sJaZMWg", callContext.id);
// Execute Action: CheckLocationPlugin
checkLocationPluginVar.value = LocationPluginController.default.checkLocationPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NuLyzDvo1kifkLj5zcjj8g", callContext.id) && checkLocationPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:O6phWUDLcUikF6sbrYIlLQ", callContext.id);
// Execute Action: GetLocation
return LocationPluginController.default.getLocation$Action(2000000, 3000, true, callContext).then(function (value) {
getLocationVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EG22acSnMkuUVVHdugjUTg", callContext.id);
// Latitude = GetLocation.Location.Latitude
outVars.value.latitudeOut = getLocationVar.value.locationOut.latitudeAttr;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EG22acSnMkuUVVHdugjUTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Longitude = GetLocation.Location.Longitude
outVars.value.longitudeOut = getLocationVar.value.locationOut.longitudeAttr;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EG22acSnMkuUVVHdugjUTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// isSuccess = GetLocation.Success
outVars.value.isSuccessOut = getLocationVar.value.successOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IFLAk3cQh0SO8hO8PtT7dA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qYcC_AnrfUSh60nf1isjBQ", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTConnect_Utils_controller_GetUserCurrentGeoLocation_JavaScript1JS, "JavaScript1", "GetUserCurrentGeoLocation", {
Latitude: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
isSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.GetUserCurrentGeoLocation$javaScript1JSResult"))();
jsNodeResult.latitudeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Latitude, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.longitudeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Longitude, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isSuccess, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
javaScript1JSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Vf38NPekQ0+WUw5XYHWMsQ", callContext.id);
// Latitude = JavaScript1.Latitude
outVars.value.latitudeOut = javaScript1JSResult.value.latitudeOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Vf38NPekQ0+WUw5XYHWMsQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Longitude = JavaScript1.Longitude
outVars.value.longitudeOut = javaScript1JSResult.value.longitudeOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Vf38NPekQ0+WUw5XYHWMsQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// isSuccess = JavaScript1.isSuccess
outVars.value.isSuccessOut = javaScript1JSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IFLAk3cQh0SO8hO8PtT7dA", callContext.id);
});
});
}).catch(function (ex) {
OS.Logger.trace("GetUserCurrentGeoLocation.GetUserCurrentGeoLocation", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FFidByYDukS4LG3b2vQ8Qw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:OuJK1ea09kSxiRvyDwjOqg", callContext.id);
// isSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yReFyzZOAEiNPKUvUIYA8A", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:H8subAGZfkCVSlWzDpLAyw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:H8subAGZfkCVSlWzDpLAyw", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetUserCurrentGeoLocation$javaScript1JSResult", [{
name: "Latitude",
attrName: "latitudeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "isSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.GetUserCurrentGeoLocation$outVars", [{
name: "Latitude",
attrName: "latitudeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Longitude",
attrName: "longitudeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "isSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.getUserCurrentGeoLocation$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.getUserCurrentGeoLocation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Latitude: OS.DataConversion.JSNodeParamConverter.to(actionResults.latitudeOut, OS.DataTypes.DataTypes.Decimal),
Longitude: OS.DataConversion.JSNodeParamConverter.to(actionResults.longitudeOut, OS.DataTypes.DataTypes.Decimal),
isSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTConnect_Utils.controller$GetUserCurrentGeoLocation.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    $parameters.isSuccess = false
    $resolve();
}

function success(position) {
  
    $parameters.Latitude =  position.coords.latitude;
    $parameters.Longitude =  position.coords.longitude;
    $parameters.isSuccess = true;
    $resolve();
}

function error() {
    $parameters.isSuccess = false;
    $resolve();
}
});
};
});

define("UBTConnect_Utils.controller$IsFreeSubscriptionPlan", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.isFreeSubscriptionPlan$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.IsFreeSubscriptionPlan$outVars"))());
varBag.callContext = callContext;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:E8LfkbP9bEeIVotJnTueHQ:/ClientActionFlows.E8LfkbP9bEeIVotJnTueHQ:bzoeUIN3s6eHh7ppRNg+0g", "UBTConnect_Utils", "IsFreeSubscriptionPlan", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QH3yaNxZZ0OtThSVo+PQBQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0dPhzMujSEaoTUaSQBmQpg", callContext.id);
// Execute Action: Cache_UserInfo_Get
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:j+kwX9mKNEOsXr0DqtjUzw", callContext.id);
// IsFreeSubscriptionPlan = Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = Free
outVars.value.isFreeSubscriptionPlanOut = (cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr === UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan.free);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:b++1o0rd0UytOM0ZIYSSZA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:E8LfkbP9bEeIVotJnTueHQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:E8LfkbP9bEeIVotJnTueHQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.IsFreeSubscriptionPlan$outVars", [{
name: "IsFreeSubscriptionPlan",
attrName: "isFreeSubscriptionPlanOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.isFreeSubscriptionPlan$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.isFreeSubscriptionPlan$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsFreeSubscriptionPlan: OS.DataConversion.JSNodeParamConverter.to(actionResults.isFreeSubscriptionPlanOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$IsListVirtualizationDisabled", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.IsListVirtualizationDisabled$outVars"))());
varBag.callContext = callContext;
varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:lpOotngHiECvLoquXRj7Rw:/ClientActionFlows.lpOotngHiECvLoquXRj7Rw:ek7d_iY9tb1UcekPdYlZKg", "UBTConnect_Utils", "IsListVirtualizationDisabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8GSkKX7g70CPbTu6tzYf8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ojWea+hGCkyU_7yjOM9_6Q", callContext.id);
// Execute Action: Connect_LaunchDarkly_PermissionCheck
connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnect_UtilsModel.staticEntities.launchDarkly_FF.mobileDirectoryListVirtualization, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Tm6rVDpQWEmStx6dL4J6Gw", callContext.id);
// HasListVirtualizationDisabled = Connect_LaunchDarkly_PermissionCheck.HasAccess
outVars.value.hasListVirtualizationDisabledOut = connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:M5rChRYk+ki7b+uBnQmTWA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:lpOotngHiECvLoquXRj7Rw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.IsListVirtualizationDisabled$outVars", [{
name: "HasListVirtualizationDisabled",
attrName: "hasListVirtualizationDisabledOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.isListVirtualizationDisabled$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasListVirtualizationDisabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasListVirtualizationDisabledOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "MemoryClientCache.model", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "MemoryClientCache.model$MemoryCacheResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$MemoryClientCache", "UBTConnect_Utils.controller$Cache_UserInfo_Get"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, MemoryClientCacheModel, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.isRegionalSubscriptionPlan$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var cache_UserInfo_GetVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.IsRegionalSubscriptionPlan$outVars"))());
varBag.callContext = callContext;
varBag.cache_UserInfo_GetVar = cache_UserInfo_GetVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:XTJr3Td5ckyOf42Gsnjb2Q:/ClientActionFlows.XTJr3Td5ckyOf42Gsnjb2Q:Vo4Tz67V__MM7IinahkrJw", "UBTConnect_Utils", "IsRegionalSubscriptionPlan", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:I_KwnoNdTEWh4fqvqs2SUA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jb1xPldhR0i_FynOzzOgyg", callContext.id);
// Execute Action: Cache_UserInfo_Get
return UBTConnect_UtilsController.default.cache_UserInfo_Get$Action(callContext).then(function (value) {
cache_UserInfo_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0EVJZ5lY10mdRkxuCGASWQ", callContext.id);
// IsRegionalSubscriptionPlan = Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = Regional
outVars.value.isRegionalSubscriptionPlanOut = (cache_UserInfo_GetVar.value.userInformationOut.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr === UBTConnect_UtilsModel.staticEntities.connect_Subscription_Plan.regional);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wr3sSlE8kESVhCsPs4AUGw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XTJr3Td5ckyOf42Gsnjb2Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XTJr3Td5ckyOf42Gsnjb2Q", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.IsRegionalSubscriptionPlan$outVars", [{
name: "IsRegionalSubscriptionPlan",
attrName: "isRegionalSubscriptionPlanOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.isRegionalSubscriptionPlan$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.isRegionalSubscriptionPlan$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsRegionalSubscriptionPlan: OS.DataConversion.JSNodeParamConverter.to(actionResults.isRegionalSubscriptionPlanOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$Menu_GetList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$Menu_ItemList", "UBTConnect_Utils.model$Menu_ItemRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.menu_GetList$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Menu_GetList$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:IR85RpTQDEKv9vi95PgqfA:/ClientActionFlows.IR85RpTQDEKv9vi95PgqfA:n_zY6qdzha82wxflbJG7DA", "UBTConnect_Utils", "Menu_GetList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:91deW+WkwUGNRI3BtupooQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XHmsJWtNE0yb9rQ5lV+0lQ", callContext.id);
// Execute Action: PINBiometrics
OS.SystemActions.listAppend(outVars.value.menuItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.Menu_ItemRec();
rec.menuItemIdAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.pINAndBiometrics;
rec.orderAttr = 2;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.pINAndBiometrics;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.password;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:py2+Ot5leUKxfndtaro4PQ", callContext.id);
// Execute Action: ContactUs
OS.SystemActions.listAppend(outVars.value.menuItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.Menu_ItemRec();
rec.menuItemIdAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.contactUs;
rec.orderAttr = 4;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.contactUs;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.help;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DfLDDAFiREOclKtdU7kriA", callContext.id);
// Execute Action: SubscriptionAndPayments
OS.SystemActions.listAppend(outVars.value.menuItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.Menu_ItemRec();
rec.menuItemIdAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.subscriptionAndPayments;
rec.orderAttr = 5;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.subscriptionAndPayments;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.shoppingBasket;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WDncQcTtiUGF3icffnStXA", callContext.id);
// Execute Action: RequestPhotoUpdate
OS.SystemActions.listAppend(outVars.value.menuItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.Menu_ItemRec();
rec.menuItemIdAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.requestPhotoUpdate;
rec.orderAttr = 6;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.requestPhotoUpdate;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.imageGallery;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NdM5wGT9uEa7tGkjI0ezig", callContext.id);
// Execute Action: TermsAndPolicies
OS.SystemActions.listAppend(outVars.value.menuItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.Menu_ItemRec();
rec.menuItemIdAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.termsAndPolicies;
rec.orderAttr = 6;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.termsAndPolicies;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.bookOpen;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:g8HVA8WsREmk6+M0JAqCfQ", callContext.id);
// Execute Action: LogOut
OS.SystemActions.listAppend(outVars.value.menuItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.Menu_ItemRec();
rec.menuItemIdAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.logOut;
rec.orderAttr = 7;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_Menu_Items.logOut;
rec.uBTIconAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.logout;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XEg4Ledam06Iu0M5ho5ZMQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:IR85RpTQDEKv9vi95PgqfA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Menu_GetList$outVars", [{
name: "MenuItemsList",
attrName: "menuItemsListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_UtilsModel.Menu_ItemList();
},
complexType: UBTConnect_UtilsModel.Menu_ItemList
}]);
UBTConnect_UtilsController.default.clientActionProxies.menu_GetList$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.menu_GetList$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MenuItemsList: actionResults.menuItemsListOut
};
});
};
});

define("UBTConnect_Utils.controller$Note_SendFeedbackMessages", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action = function (actionTypeIn, isSuccessIn, isNotFoundIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.Note_SendFeedbackMessages$vars"))());
vars.value.actionTypeInLocal = actionTypeIn;
vars.value.isSuccessInLocal = isSuccessIn;
vars.value.isNotFoundInLocal = isNotFoundIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:OU6ff4IO5UW0SxeJIq4qcA:/ClientActionFlows.OU6ff4IO5UW0SxeJIq4qcA:VYUp1NAM8dJGWad407cAug", "UBTConnect_Utils", "Note_SendFeedbackMessages", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pHfsdaGve0SvtJujU6saeg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:F6D13dWmqUW+e1zMDK1HSA", callContext.id) && (vars.value.actionTypeInLocal === UBTConnect_UtilsModel.staticEntities.noteActionType.add))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pVtRTHQa1Uqj5EWvgn2MdA", callContext.id);
// Message = If
vars.value.messageVar = ((vars.value.isSuccessInLocal) ? ("Note added") : ("Couldn\'t add note. Please try again."));
} else {
if((vars.value.actionTypeInLocal === UBTConnect_UtilsModel.staticEntities.noteActionType.edit)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ze9Ke0SMJU2zmEArXj2hLA", callContext.id);
// Message = If
vars.value.messageVar = ((vars.value.isSuccessInLocal) ? ("Note updated") : (((vars.value.isNotFoundInLocal) ? ("This note no longer exists") : ("Couldn\'t save your changes. Please try again."))));
} else {
if((vars.value.actionTypeInLocal === UBTConnect_UtilsModel.staticEntities.noteActionType.delete)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wKMItAaJxEWvT4nuUntJoQ", callContext.id);
// Message = If
vars.value.messageVar = ((vars.value.isSuccessInLocal) ? ("Note deleted") : ("Couldn\'t delete note. Please try again."));
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3m_oEjKawUapd5_YhayDNQ", callContext.id);
return ;

}

}

}

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u+Rm6YtNNE6yvt1ulfNbew", callContext.id) && vars.value.isSuccessInLocal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Y1ycuWfk+EKycjhHb10ERg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(vars.value.messageVar, /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tHDLv4qA50qcjRHC3d2w3A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GmLpy9BocUun6F1LdP7JLg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(vars.value.messageVar, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_mkrpklSzkWJlTzbCPT_Ew", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:OU6ff4IO5UW0SxeJIq4qcA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.Note_SendFeedbackMessages$vars", [{
name: "ActionType",
attrName: "actionTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsSuccess",
attrName: "isSuccessInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsNotFound",
attrName: "isNotFoundInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Message",
attrName: "messageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.note_SendFeedbackMessages$Action = function (actionTypeIn, isSuccessIn, isNotFoundIn) {
actionTypeIn = (actionTypeIn === undefined) ? "" : actionTypeIn;
isSuccessIn = (isSuccessIn === undefined) ? false : isSuccessIn;
isNotFoundIn = (isNotFoundIn === undefined) ? false : isNotFoundIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action.bind(controller, actionTypeIn, OS.DataConversion.JSNodeParamConverter.from(isSuccessIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(isNotFoundIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$OpenInApp_AddExtensionToFile", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.openInApp_AddExtensionToFile$Action = function (fileNameIn, fileExtensionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_AddExtensionToFile$vars"))());
vars.value.fileNameInLocal = fileNameIn;
vars.value.fileExtensionIdInLocal = fileExtensionIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_AddExtensionToFile$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Bxz21Ta9EUOkHwu09sN_LA:/ClientActionFlows.Bxz21Ta9EUOkHwu09sN_LA:ZkLIt4o5Kv4ErMv01BelKw", "UBTConnect_Utils", "OpenInApp_AddExtensionToFile", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6x6PKkW0v0SeBnVJ60HR+w", callContext.id);
// Add dot to extension
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TXY36P3_KEuxh7hFRok7YQ", callContext.id);
// FileExtensionId = "." + FileExtensionId
vars.value.fileExtensionIdInLocal = ("." + vars.value.fileExtensionIdInLocal);
// Already has same extension?
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:su0gGL6Hvki16rLmwNFUiw", callContext.id) && (OS.BuiltinFunctions.substr(vars.value.fileNameInLocal, (OS.BuiltinFunctions.length(vars.value.fileNameInLocal) - OS.BuiltinFunctions.length(vars.value.fileExtensionIdInLocal)), OS.BuiltinFunctions.length(vars.value.fileExtensionIdInLocal)) === vars.value.fileExtensionIdInLocal))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CIux8f3lgUm8fmBaIO58JA", callContext.id);
// FileWithExtension = Trim
outVars.value.fileWithExtensionOut = OS.BuiltinFunctions.trim(vars.value.fileNameInLocal);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tcCGHy8UHUaAfHIPNFbI+g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5qck2vLx606e_VuwriMw_g", callContext.id);
// FileWithExtension = Trim + FileExtensionId
outVars.value.fileWithExtensionOut = (OS.BuiltinFunctions.trim(vars.value.fileNameInLocal) + vars.value.fileExtensionIdInLocal);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tcCGHy8UHUaAfHIPNFbI+g", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Bxz21Ta9EUOkHwu09sN_LA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_AddExtensionToFile$vars", [{
name: "FileName",
attrName: "fileNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileExtensionId",
attrName: "fileExtensionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_AddExtensionToFile$outVars", [{
name: "FileWithExtension",
attrName: "fileWithExtensionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.openInApp_AddExtensionToFile$Action = function (fileNameIn, fileExtensionIdIn) {
fileNameIn = (fileNameIn === undefined) ? "" : fileNameIn;
fileExtensionIdIn = (fileExtensionIdIn === undefined) ? "" : fileExtensionIdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.openInApp_AddExtensionToFile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileExtensionIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
FileWithExtension: OS.DataConversion.JSNodeParamConverter.to(actionResults.fileWithExtensionOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnect_Utils.controller$OpenInApp_OpenApp", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_AppLauncherPlugin.controller", "CommonPlugin.controller", "Connect2_AppLauncherPlugin.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.clientVariables", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "CommonPlugin.controller$IsCordovaDefined", "UBTConnect_Utils.referencesHealth$CommonPlugin", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", "CommonPlugin.controller$GetOperatingSystem"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_AppLauncherPluginController, CommonPluginController, Connect2_AppLauncherPluginModel, UBTJavaScriptUtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.openInApp_OpenApp$Action = function (packageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_OpenApp$vars"))());
vars.value.packageInLocal = packageIn;
var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var canLaunchWithDataVar = new OS.DataTypes.VariableHolder();
var launchWithDataVar = new OS.DataTypes.VariableHolder();
var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
varBag.isCordovaDefinedVar = isCordovaDefinedVar;
varBag.canLaunchWithDataVar = canLaunchWithDataVar;
varBag.launchWithDataVar = launchWithDataVar;
varBag.getOperatingSystemVar = getOperatingSystemVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:OW5mJ4o3mE+JZizJYEJMyg:/ClientActionFlows.OW5mJ4o3mE+JZizJYEJMyg:lQ2OBaGuVvEMYFsH5A9Mqg", "UBTConnect_Utils", "OpenInApp_OpenApp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:h8I4RRVkAk6M7zyBvLKBkg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9Fl9Aozny0+Kp0plFGZu4A", callContext.id);
// Execute Action: CheckAppLauncherPlugin
checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5gSNrlJbe06f7uJSo0FPcg", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PfGOnqwOAk6OMuKi3S8kEg", callContext.id);
// Execute Action: CanLaunchWithData
return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = vars.value.packageInLocal;
return rec;
}(), callContext).then(function (value) {
canLaunchWithDataVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bvyCVbS3L0ieET8ZrV+zKw", callContext.id) && canLaunchWithDataVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CrKHu53nKEmNS2JSX_ncjA", callContext.id);
// Execute Action: LaunchWithData
return Connect2_AppLauncherPluginController.default.launchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = vars.value.packageInLocal;
return rec;
}(), callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:j_pccdQJKEeQQP3U7zN7lA", callContext.id);
return OS.Flow.returnAsync();

});
}

});
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pq7nfyjENkuSKFiBb_H71w", callContext.id);
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:goT0u2qg5kqz_zwReYFC4Q", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xe3hRToE5E+YWZoGgXmjDw", callContext.id);
// URL = "market://details?id=" + Package
vars.value.uRLVar = ("market://details?id=" + vars.value.packageInLocal);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:D39W3ygp50Gp9T8L0aQc2w", callContext.id);
// Execute Action: GetOperatingSystem
getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4bzM+i2yWES4SJWBlfg+qw", callContext.id) && ((getOperatingSystemVar.value.operatingSystemsIdOut === UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem.android) || (getOperatingSystemVar.value.operatingSystemsIdOut === UBTConnect_UtilsModel.staticEntities.mobile_OperatingSystem.windows)))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CEWF6mFl2EOvRG3pHMBm0g", callContext.id);
// URL = "https://play.google.com/store/apps/details?id=" + Package
vars.value.uRLVar = ("https://play.google.com/store/apps/details?id=" + vars.value.packageInLocal);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:UNiPodLpOEOomi4puY7eMw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("Not available", "Sorry, this app is not available in the platform you are using", OS.BuiltinFunctions.textToInteger("Entities.UBT_MessageType.Error"), true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2p9ks4tJ50aTQ6JvA8_QuQ", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HZtg2wl0_kuayRxMZ78nYg", callContext.id);
// Execute Action: OpenInApp_URL
UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action(vars.value.uRLVar, true, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2p9ks4tJ50aTQ6JvA8_QuQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:OW5mJ4o3mE+JZizJYEJMyg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:OW5mJ4o3mE+JZizJYEJMyg", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_OpenApp$vars", [{
name: "Package",
attrName: "packageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "URL",
attrName: "uRLVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.openInApp_OpenApp$Action = function (packageIn) {
packageIn = (packageIn === undefined) ? "" : packageIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.openInApp_OpenApp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(packageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$OpenInApp_OpenExternalLink", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "InAppBrowserPlugin.model", "CommonPlugin.model", "InAppBrowserPlugin.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.clientVariables", "InAppBrowserPlugin.model$OptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth$CommonPlugin", "InAppBrowserPlugin.controller$Open", "InAppBrowserPlugin.controller$CheckInAppBrowserPlugin", "UBTJavaScriptUtils.controller$JSUtils_PageRedirect", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, InAppBrowserPluginModel, CommonPluginModel, InAppBrowserPluginController, UBTJavaScriptUtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action = function (urlIn, inNewTabIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_OpenExternalLink$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.inNewTabInLocal = inNewTabIn;
var openVar = new OS.DataTypes.VariableHolder();
var checkInAppBrowserPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openVar = openVar;
varBag.checkInAppBrowserPluginVar = checkInAppBrowserPluginVar;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:2aKKpZNaMUm4jpWhk7AedA:/ClientActionFlows.2aKKpZNaMUm4jpWhk7AedA:Yr+VGTWiLNIP6BFnEobjLw", "UBTConnect_Utils", "OpenInApp_OpenExternalLink", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:q1YN9HG460aWuiQ00VzloQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kmVpR5eejkqMc+BTflXDaw", callContext.id);
// Execute Action: CheckInAppBrowserPlugin
checkInAppBrowserPluginVar.value = InAppBrowserPluginController.default.checkInAppBrowserPlugin$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:iRvJ6Iu8N0+s+epIpIdGGg", callContext.id) && (checkInAppBrowserPluginVar.value.isAvailableOut && !(((OS.BuiltinFunctions.index(vars.value.urlInLocal, "http://", 0, false, true) === -1) && (OS.BuiltinFunctions.index(vars.value.urlInLocal, "https://", 0, false, true) === -1)))))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yt+BEnJWrE6d_UE2VTvsWg", callContext.id);
// Execute Action: Open
openVar.value = InAppBrowserPluginController.default.open$Action(vars.value.urlInLocal, ((vars.value.inNewTabInLocal) ? (UBTConnect_UtilsModel.staticEntities.target.sYSTEM) : (UBTConnect_UtilsModel.staticEntities.target.iN_APP_BROWSER)), function () {
var rec = new InAppBrowserPluginModel.OptionsRec();
rec.clearcacheAttr = false;
rec.clearsessioncacheAttr = false;
return rec;
}(), callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+qrXidq7bEO9xBs+FUs2vw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PvImBDf0mE+5QdI0I0Iy1A", callContext.id) && vars.value.inNewTabInLocal)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:e3Es6jrFMk+9rfVMauQU5Q", callContext.id);
// Execute Action: JSUtils_PageOpenInNewTab
UBTJavaScriptUtilsController.default.jSUtils_PageOpenInNewTab$Action(vars.value.urlInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:flmvVRzcqkuO7f8yv826mw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZseVn_XGNkivW1p32Wve7g", callContext.id);
// Execute Action: JSUtils_PageRedirect
UBTJavaScriptUtilsController.default.jSUtils_PageRedirect$Action(vars.value.urlInLocal, true, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cOb1iaJ1nUyTqzbVH43Neg", callContext.id);
}

}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:2aKKpZNaMUm4jpWhk7AedA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_OpenExternalLink$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "InNewTab",
attrName: "inNewTabInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.openInApp_OpenExternalLink$Action = function (urlIn, inNewTabIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
inNewTabIn = (inNewTabIn === undefined) ? false : inNewTabIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(urlIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(inNewTabIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "FileTransferPlugin.model", "CommonPlugin.model", "FileTransferPlugin.controller", "FilePlugin.model", "FilePlugin.controller", "FileViewerPlugin.controller", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp.Get_FileExtensionJS", "UBTConnect_Utils.clientVariables", "FileTransferPlugin.model$HeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FileTransferPlugin", "UBTConnect_Utils.model$HeaderList", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth$CommonPlugin", "FileTransferPlugin.controller$DownloadFile", "FilePlugin.model$FileInfoRec", "UBTConnect_Utils.referencesHealth$FilePlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$GetMetadata", "FilePlugin.controller$CheckFilePlugin", "FileTransferPlugin.controller$CheckFileTransferPlugin", "FilePlugin.controller$CreateDirectory", "FileViewerPlugin.controller$CheckFileViewerPlugin", "UBTConnect_Utils.referencesHealth$FileViewerPlugin", "UBTConnect_Utils.controller$OpenInApp_ViewFile_Fallback", "UBTConnect_Utils.controller$OpenInApp_AddExtensionToFile"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, FileTransferPluginModel, CommonPluginModel, FileTransferPluginController, FilePluginModel, FilePluginController, FileViewerPluginController, UBTConnect_Utils_controller_OpenInApp_TryOpenFileInApp_Get_FileExtensionJS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.openInApp_TryOpenFileInApp$Action = function (filenameIn, downloadUrlIn, folderToSaveIn, fileExtensionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_TryOpenFileInApp$vars"))());
vars.value.filenameInLocal = filenameIn;
vars.value.downloadUrlInLocal = downloadUrlIn;
vars.value.folderToSaveInLocal = folderToSaveIn;
vars.value.fileExtensionInLocal = fileExtensionIn;
var downloadFileVar = new OS.DataTypes.VariableHolder();
var getMetadata_DownloadFolderVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var checkFileTransferPluginVar = new OS.DataTypes.VariableHolder();
var getMetadataVar = new OS.DataTypes.VariableHolder();
var createDirectoryVar = new OS.DataTypes.VariableHolder();
var checkFileViewerPluginVar = new OS.DataTypes.VariableHolder();
var downloadFile2Var = new OS.DataTypes.VariableHolder();
var get_FileExtensionJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_TryOpenFileInApp$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.downloadFileVar = downloadFileVar;
varBag.getMetadata_DownloadFolderVar = getMetadata_DownloadFolderVar;
varBag.checkFilePluginVar = checkFilePluginVar;
varBag.checkFileTransferPluginVar = checkFileTransferPluginVar;
varBag.getMetadataVar = getMetadataVar;
varBag.createDirectoryVar = createDirectoryVar;
varBag.checkFileViewerPluginVar = checkFileViewerPluginVar;
varBag.downloadFile2Var = downloadFile2Var;
varBag.get_FileExtensionJSResult = get_FileExtensionJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:sDYe+uyenk29Suz3pXx9gQ:/ClientActionFlows.sDYe+uyenk29Suz3pXx9gQ:f7f7B+mcJlvk0IDaRosFkA", "UBTConnect_Utils", "OpenInApp_TryOpenFileInApp", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kNXD1FOWGEG4R7Jc2YogFA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CeTP9QU3CE2Pf_XmLDrcCA", callContext.id);
get_FileExtensionJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_controller_OpenInApp_TryOpenFileInApp_Get_FileExtensionJS, "Get_FileExtension", "OpenInApp_TryOpenFileInApp", {
Filename: OS.DataConversion.JSNodeParamConverter.to(vars.value.filenameInLocal, OS.DataTypes.DataTypes.Text),
Extension: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Filename_WithoutExtension: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_TryOpenFileInApp$get_FileExtensionJSResult"))();
jsNodeResult.extensionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Extension, OS.DataTypes.DataTypes.Text);
jsNodeResult.filename_WithoutExtensionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Filename_WithoutExtension, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uxlIqDpHxkm6WmEVAAao9g", callContext.id);
// Filename = Get_FileExtension.Filename_WithoutExtension
vars.value.filenameInLocal = get_FileExtensionJSResult.value.filename_WithoutExtensionOut;
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:esExKWdmbE+61OwGTrXUvA", callContext.id) && ((get_FileExtensionJSResult.value.extensionOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:O_5Ab0Kh70CSEkdlnEKPJA", callContext.id);
// FileExtension = Get_FileExtension.Extension
vars.value.fileExtensionInLocal = get_FileExtensionJSResult.value.extensionOut;
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FuOYVf7KpkSY6lCtx6qNxg", callContext.id);
// Execute Action: CheckFileTransferPlugin
return FileTransferPluginController.default.checkFileTransferPlugin$Action(callContext).then(function (value) {
checkFileTransferPluginVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k66iUCf7Q0aWKgu1sXz_Dg", callContext.id);
// Execute Action: CheckFilePlugin
return FilePluginController.default.checkFilePlugin$Action(callContext).then(function (value) {
checkFilePluginVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VyH0jR74ykeEaUrSEbWo7Q", callContext.id);
// Execute Action: CheckFileViewerPlugin
return FileViewerPluginController.default.checkFileViewerPlugin$Action(callContext).then(function (value) {
checkFileViewerPluginVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:iPpgWKMx1E2BTde1HuIauQ", callContext.id) && ((checkFileTransferPluginVar.value.isAvailableOut && checkFilePluginVar.value.isAvailableOut) && checkFileViewerPluginVar.value.isAvailableOut))) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2JZS7CCyMEKhgkd6Dba7iQ", callContext.id) && (OS.BuiltinFunctions.toLower(vars.value.fileExtensionInLocal) === "pdf"))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3RpChbmhPUKcsilpMv_bjw", callContext.id);
// Execute Action: CreateDirectory
return FilePluginController.default.createDirectory$Action(vars.value.folderToSaveInLocal, UBTConnect_UtilsModel.staticEntities.pathDirectory.cACHE, true, callContext).then(function (value) {
createDirectoryVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+XnBjZGVfEC5hYDW5tYTyg", callContext.id) && !((((createDirectoryVar.value.errorOut.errorCodeAttr === "") || (createDirectoryVar.value.errorOut.errorCodeAttr === "0")) && (createDirectoryVar.value.errorOut.errorMessageAttr === ""))))) {
// ErrorDirectoryExist?
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u4kck1u+bEqrMedKvyIvNA", callContext.id) && !((createDirectoryVar.value.errorOut.errorCodeAttr === "OS-PLUG-FILE-0010")))) {
return OS.Flow.breakAsync();
}

}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XzSkWIA90EuPZYcCl_IQnA", callContext.id);
// Execute Action: GetMetadata
return FilePluginController.default.getMetadata$Action(vars.value.folderToSaveInLocal, UBTConnect_UtilsModel.staticEntities.pathDirectory.cACHE, callContext).then(function (value) {
getMetadataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dOgasZUWv0y08DuY2v9ZJg", callContext.id);
// Filepath = GetMetadata.Result.URI + "/" + OpenInApp_AddExtensionToFile(Filename, FileExtension)
outVars.value.filepathOut = ((getMetadataVar.value.resultOut.uRIAttr + "/") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.openInApp_AddExtensionToFile$Action(vars.value.filenameInLocal, vars.value.fileExtensionInLocal, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:37xtB5lp2EyOlvLYFhVdHA", callContext.id);
// Execute Action: DownloadFile
return FileTransferPluginController.default.downloadFile$Action(vars.value.downloadUrlInLocal, outVars.value.filepathOut, new UBTConnect_UtilsModel.HeaderList(), callContext).then(function (value) {
downloadFileVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:f5ULOa6IV06Z1e4lvBIW0A", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:izeiNRx0rku_tIG5GRbuvQ", callContext.id);
// Execute Action: GetMetadata_DownloadFolder
return FilePluginController.default.getMetadata$Action("download", UBTConnect_UtilsModel.staticEntities.pathDirectory.eXTERNAL_STORAGE, callContext).then(function (value) {
getMetadata_DownloadFolderVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xFQpp8Lr+Ea6RLnB7gtNMw", callContext.id);
// Filepath = GetMetadata_DownloadFolder.Result.URI + "/" + OpenInApp_AddExtensionToFile(Filename, FileExtension)
outVars.value.filepathOut = ((getMetadata_DownloadFolderVar.value.resultOut.uRIAttr + "/") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.openInApp_AddExtensionToFile$Action(vars.value.filenameInLocal, vars.value.fileExtensionInLocal, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:T_3WtRylkkC5biEOG5GD5g", callContext.id);
// Execute Action: DownloadFile2
return FileTransferPluginController.default.downloadFile$Action(vars.value.downloadUrlInLocal, outVars.value.filepathOut, new UBTConnect_UtilsModel.HeaderList(), callContext).then(function (value) {
downloadFile2Var.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:j+euUmR6N0KOLQHt0J7uRw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your downloads folder", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HGVDVCe2OkS0Zp53stu0fA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

});
} else {
// >>
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NiibtXreFESDAfLNFkIhvA", callContext.id);
}

});
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:27Jmkjtr3EqG7zmqssigPg", callContext.id);
// Execute Action: OpenInApp_ViewFile_Fallback
UBTConnect_UtilsController.default.openInApp_ViewFile_Fallback$Action(vars.value.downloadUrlInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Re15kU_5ckq9P6TJIzPEeg", callContext.id);
// isInApp = False
outVars.value.isInAppOut = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kPc6ZC75_EOTMJJUSR+TVg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:sDYe+uyenk29Suz3pXx9gQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:sDYe+uyenk29Suz3pXx9gQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_TryOpenFileInApp$vars", [{
name: "Filename",
attrName: "filenameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DownloadUrl",
attrName: "downloadUrlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FolderToSave",
attrName: "folderToSaveInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileExtension",
attrName: "fileExtensionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "pdf";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_TryOpenFileInApp$get_FileExtensionJSResult", [{
name: "Extension",
attrName: "extensionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filename_WithoutExtension",
attrName: "filename_WithoutExtensionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_TryOpenFileInApp$outVars", [{
name: "Filepath",
attrName: "filepathOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "isInApp",
attrName: "isInAppOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.openInApp_TryOpenFileInApp$Action = function (filenameIn, downloadUrlIn, folderToSaveIn, fileExtensionIn) {
filenameIn = (filenameIn === undefined) ? "" : filenameIn;
downloadUrlIn = (downloadUrlIn === undefined) ? "" : downloadUrlIn;
folderToSaveIn = (folderToSaveIn === undefined) ? "" : folderToSaveIn;
fileExtensionIn = (fileExtensionIn === undefined) ? "pdf" : fileExtensionIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.openInApp_TryOpenFileInApp$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(downloadUrlIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(folderToSaveIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(fileExtensionIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Filepath: OS.DataConversion.JSNodeParamConverter.to(actionResults.filepathOut, OS.DataTypes.DataTypes.Text),
isInApp: OS.DataConversion.JSNodeParamConverter.to(actionResults.isInAppOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp.Get_FileExtensionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getFileInfo(filename) {
  const match = filename.match(/^(.+?)(\.[^.]+)?$/);
    $parameters.Filename_WithoutExtension = match[1],
    $parameters.Extension = match[2] ? match[2].slice(1).toLowerCase() : ""
};

getFileInfo($parameters.Filename);

};
});

define("UBTConnect_Utils.controller$OpenInApp_ViewFile_Fallback", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "CommonPlugin.model", "InAppBrowserPlugin.controller", "InAppBrowserPlugin.model", "UBTConnect_Utils.controller$OpenInApp_ViewFile_Fallback.JavaScript1JS", "UBTConnect_Utils.clientVariables", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin", "InAppBrowserPlugin.controller$CheckInAppBrowserPlugin", "UBTConnect_Utils.referencesHealth$InAppBrowserPlugin", "InAppBrowserPlugin.model$OptionsRec", "InAppBrowserPlugin.controller$Open"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, CommonPluginModel, InAppBrowserPluginController, InAppBrowserPluginModel, UBTConnect_Utils_controller_OpenInApp_ViewFile_Fallback_JavaScript1JS, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.openInApp_ViewFile_Fallback$Action = function (downloadUrlIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenInApp_ViewFile_Fallback$vars"))());
vars.value.downloadUrlInLocal = downloadUrlIn;
var checkInAppBrowserPluginVar = new OS.DataTypes.VariableHolder();
var openVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkInAppBrowserPluginVar = checkInAppBrowserPluginVar;
varBag.openVar = openVar;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:C66h9G5AAkCMQdc3Btp+CA:/ClientActionFlows.C66h9G5AAkCMQdc3Btp+CA:8GV1XkrYv5xCT_cRXjggXA", "UBTConnect_Utils", "OpenInApp_ViewFile_Fallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wxFWDV2KJ0y4cy5vcRwT4Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:59rSgQxEHUiG0TgwOUvgUw", callContext.id);
// Execute Action: CheckInAppBrowserPlugin
checkInAppBrowserPluginVar.value = InAppBrowserPluginController.default.checkInAppBrowserPlugin$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:e8LDaNwlGk+vndUMYVrF+A", callContext.id) && checkInAppBrowserPluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wj0QnvcjBEetLsojJIdHbQ", callContext.id);
// Execute Action: Open
openVar.value = InAppBrowserPluginController.default.open$Action(vars.value.downloadUrlInLocal, UBTConnect_UtilsModel.staticEntities.target.sYSTEM, new InAppBrowserPluginModel.OptionsRec(), callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GTnJI+tLoUikJdbaxMqHHw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MA5S0Xutr0ekVMA916S39w", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Utils_controller_OpenInApp_ViewFile_Fallback_JavaScript1JS, "JavaScript1", "OpenInApp_ViewFile_Fallback", {
DownloadUrl: OS.DataConversion.JSNodeParamConverter.to(vars.value.downloadUrlInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GTnJI+tLoUikJdbaxMqHHw", callContext.id);
}

return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:C66h9G5AAkCMQdc3Btp+CA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenInApp_ViewFile_Fallback$vars", [{
name: "DownloadUrl",
attrName: "downloadUrlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.openInApp_ViewFile_Fallback$Action = function (downloadUrlIn) {
downloadUrlIn = (downloadUrlIn === undefined) ? "" : downloadUrlIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.openInApp_ViewFile_Fallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(downloadUrlIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnect_Utils.controller$OpenInApp_ViewFile_Fallback.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() { window.open($parameters.DownloadUrl, "_blank"); });
};
});

define("UBTConnect_Utils.controller$OpenPolicy", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "ApplicationPolicies_CW.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.clientVariables", "ApplicationPolicies_CW.controller$OpenApplicationPolicy", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$ApplicationPolicies_CW", "ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl", "UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$PolicyInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, ApplicationPolicies_CWController, UBTJavaScriptUtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.openPolicy$Action = function (policyInformationIn, errorMessageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.OpenPolicy$vars"))());
vars.value.policyInformationInLocal = policyInformationIn.clone();
vars.value.errorMessageInLocal = errorMessageIn;
var openApplicationPolicyVar = new OS.DataTypes.VariableHolder();
var canOpenApplicationPolicyDirectlyViaUrlVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openApplicationPolicyVar = openApplicationPolicyVar;
varBag.canOpenApplicationPolicyDirectlyViaUrlVar = canOpenApplicationPolicyDirectlyViaUrlVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:iHt6tSZeNEqiO5SbvxCR6Q:/ClientActionFlows.iHt6tSZeNEqiO5SbvxCR6Q:HG6AfqV_v2HHeH6BALVIiQ", "UBTConnect_Utils", "OpenPolicy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Q8G9pfp_7U+zgvqN+xhdSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9p+0X5kV5UKJa620DSpkZw", callContext.id) && ((vars.value.policyInformationInLocal.policy_UrlAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YMnpJ1RXbUeCgY6Rv2Uh5w", callContext.id);
// Execute Action: CanOpenApplicationPolicyDirectlyViaUrl
canOpenApplicationPolicyDirectlyViaUrlVar.value = ApplicationPolicies_CWController.default.canOpenApplicationPolicyDirectlyViaUrl$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Lxf8AO5vvUqoKOZUeQTA_A", callContext.id) && canOpenApplicationPolicyDirectlyViaUrlVar.value.canOpenDirectlyOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pgj0hmwYKki4Wqn+KKV4FA", callContext.id);
// Execute Action: JSUtils_PageOpenInNewTab
UBTJavaScriptUtilsController.default.jSUtils_PageOpenInNewTab$Action(vars.value.policyInformationInLocal.policy_UrlAttr, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xEDPMU6ri0GT+KwwgskhkA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:io5vIbhCMkKpJZEFtEdfqA", callContext.id);
// Execute Action: OpenApplicationPolicy
return ApplicationPolicies_CWController.default.openApplicationPolicy$Action(vars.value.policyInformationInLocal.policy_UrlAttr, vars.value.policyInformationInLocal.policy_FileNameAttr, vars.value.policyInformationInLocal.policy_ContentTypeAttr, callContext).then(function (value) {
openApplicationPolicyVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TiuUpLxiekiZWDMqKwzdGw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:E87fxKBD0Eyj6ufohQhUpw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(vars.value.errorMessageInLocal, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:h+UmMntMXEmOWLcVj6FDtA", callContext.id);
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:iHt6tSZeNEqiO5SbvxCR6Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:iHt6tSZeNEqiO5SbvxCR6Q", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.OpenPolicy$vars", [{
name: "PolicyInformation",
attrName: "policyInformationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.PolicyInformationRec();
},
complexType: UBTConnect_UtilsModel.PolicyInformationRec
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "This policy couldn\'t be found.";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.openPolicy$Action = function (policyInformationIn, errorMessageIn) {
policyInformationIn = (policyInformationIn === undefined) ? new UBTConnect_UtilsModel.PolicyInformationRec() : policyInformationIn;
errorMessageIn = (errorMessageIn === undefined) ? "This policy couldn\'t be found." : errorMessageIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.openPolicy$Action.bind(controller, policyInformationIn, OS.DataConversion.JSNodeParamConverter.from(errorMessageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$SearchCategory_GetList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.model$SearchCategory_ItemRec", "UBTConnect_Utils.model$SearchCategory_ItemList"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.searchCategory_GetList$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.SearchCategory_GetList$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:7SOXUq_SSkisLBg6_F3gMA:/ClientActionFlows.7SOXUq_SSkisLBg6_F3gMA:a8Mmy52SjaePXXIqKPBTLw", "UBTConnect_Utils", "SearchCategory_GetList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kwgwlz+2CkKxbqMni_DVig", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4MaAhsw1yUOS6pCNu8mzeA", callContext.id);
// Execute Action: All
OS.SystemActions.listAppend(outVars.value.searchCategoryItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.SearchCategory_ItemRec();
rec.searchCategoryIdAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.all;
rec.orderAttr = 1;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.all;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CFLnkLyMFEiQQiBDfaoXJw", callContext.id);
// Execute Action: Households
OS.SystemActions.listAppend(outVars.value.searchCategoryItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.SearchCategory_ItemRec();
rec.searchCategoryIdAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.households;
rec.orderAttr = 2;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.households;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KoCHC7gui0+SR8RVn6ahDw", callContext.id);
// Execute Action: Members
OS.SystemActions.listAppend(outVars.value.searchCategoryItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.SearchCategory_ItemRec();
rec.searchCategoryIdAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.people;
rec.orderAttr = 3;
rec.labelAttr = "Members";
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ioVAIe1ik0GLZt7p5zFf8A", callContext.id);
// Execute Action: Places
OS.SystemActions.listAppend(outVars.value.searchCategoryItemsListOut, function () {
var rec = new UBTConnect_UtilsModel.SearchCategory_ItemRec();
rec.searchCategoryIdAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.places;
rec.orderAttr = 4;
rec.labelAttr = UBTConnect_UtilsModel.staticEntities.connect_SearchCategories.places;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2eFZpwNqbUOfT0xO5BeJSA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:7SOXUq_SSkisLBg6_F3gMA", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.SearchCategory_GetList$outVars", [{
name: "SearchCategoryItemsList",
attrName: "searchCategoryItemsListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_UtilsModel.SearchCategory_ItemList();
},
complexType: UBTConnect_UtilsModel.SearchCategory_ItemList
}]);
UBTConnect_UtilsController.default.clientActionProxies.searchCategory_GetList$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.searchCategory_GetList$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SearchCategoryItemsList: actionResults.searchCategoryItemsListOut
};
});
};
});

define("UBTConnect_Utils.controller$ShareEntity_ByURL", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "UBTConnect_Utils.clientVariables", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$SocialSharing", "UBTConnect_Utils.referencesHealth$SocialSharingPlugin", "UBTConnect_Utils.controller$ServerAction.CS_CreateShareProfileLink", "UBT_AppManager.controller$AppManager_GetMemberId", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.controller$AuditShareEvent", "UBTConnect_Utils.referencesHealth$Connect2_LegacyShared"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, CommonPluginModel, SocialSharingPluginController, UBT_AppManagerController, Connect2_LegacySharedController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.shareEntity_ByURL$Action = function (in_ShareTypeIdIn, in_ShareableObjectIdIn, in_UpdateTypeIn, in_UpdateDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ShareEntity_ByURL$vars"))());
vars.value.in_ShareTypeIdInLocal = in_ShareTypeIdIn;
vars.value.in_ShareableObjectIdInLocal = in_ShareableObjectIdIn;
vars.value.in_UpdateTypeInLocal = in_UpdateTypeIn;
vars.value.in_UpdateDateInLocal = in_UpdateDateIn;
var sharePluginErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var cS_CreateShareProfileLinkVar = new OS.DataTypes.VariableHolder();
var socialSharingVar = new OS.DataTypes.VariableHolder();
var appManager_GetMemberIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sharePluginErrorVar = sharePluginErrorVar;
varBag.cS_CreateShareProfileLinkVar = cS_CreateShareProfileLinkVar;
varBag.socialSharingVar = socialSharingVar;
varBag.appManager_GetMemberIdVar = appManager_GetMemberIdVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:evd52rbPOEiRV2ogb4vRkQ:/ClientActionFlows.evd52rbPOEiRV2ogb4vRkQ:Ssuq4iVOpDTqXhhr7n4MTQ", "UBTConnect_Utils", "ShareEntity_ByURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uu+Mg+f1XUSLrzJZ9SlALQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k5ucW1o0fEq3RHbMySwwrw", callContext.id);
// Execute Action: AppManager_GetMemberId
appManager_GetMemberIdVar.value = UBT_AppManagerController.default.appManager_GetMemberId$Action(callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Q0IaQ2kOFkeDJqOtR6oLiw", callContext.id);
// Execute Action: CS_CreateShareProfileLink
return controller.cS_CreateShareProfileLink$ServerAction(vars.value.in_ShareTypeIdInLocal, vars.value.in_ShareableObjectIdInLocal, vars.value.in_UpdateTypeInLocal, vars.value.in_UpdateDateInLocal, callContext).then(function (value) {
cS_CreateShareProfileLinkVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tb4ECtIcpU+DPVT7bozJZg", callContext.id);
// Execute Action: SocialSharing
return SocialSharingPluginController.default.socialSharing$Action(cS_CreateShareProfileLinkVar.value.uRLOut, "", OS.BuiltinFunctions.nullTextIdentifier(), callContext).then(function (value) {
socialSharingVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AhjlVgR4+EON0FQDROclPA", callContext.id) && socialSharingVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:18O2ogH+o0aCoV3HjNQOwg", callContext.id);
// Execute Action: AuditShareEvent
return Connect2_LegacySharedController.default.auditShareEvent$Action(OS.BuiltinFunctions.longIntegerToText(cS_CreateShareProfileLinkVar.value.shareIdOut), appManager_GetMemberIdVar.value.memberIdOut, "", "Others", vars.value.in_ShareTypeIdInLocal, vars.value.in_ShareableObjectIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YAdC8qUXuEm4fkJfBWlJSw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MCgRFW0sQE6EhJV2CWcEhg", callContext.id);
// Raise Error: SharePluginError
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.SharePluginError", ((socialSharingVar.value.errorOut.errorCodeAttr + " - ") + socialSharingVar.value.errorOut.errorMessageAttr));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ShareEntity_ByURL.ShareEntity_ByURL", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: SharePluginError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "UBTConnect_Utils.SharePluginError")) {
OS.Logger.error(null, ex);
sharePluginErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(sharePluginErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lGTGrQlxaEKfnO0JbcXfmg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oEXehiBHEU2z6EpI4te0kw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(sharePluginErrorVar.value.exceptionMessageAttr, /*Warning*/ 2);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hYNjFIr1sUyYoAiq63WzcA", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:evd52rbPOEiRV2ogb4vRkQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:evd52rbPOEiRV2ogb4vRkQ", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ShareEntity_ByURL$vars", [{
name: "In_ShareTypeId",
attrName: "in_ShareTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ShareableObjectId",
attrName: "in_ShareableObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_UpdateType",
attrName: "in_UpdateTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_UpdateDate",
attrName: "in_UpdateDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.shareEntity_ByURL$Action = function (in_ShareTypeIdIn, in_ShareableObjectIdIn, in_UpdateTypeIn, in_UpdateDateIn) {
in_ShareTypeIdIn = (in_ShareTypeIdIn === undefined) ? "" : in_ShareTypeIdIn;
in_ShareableObjectIdIn = (in_ShareableObjectIdIn === undefined) ? "" : in_ShareableObjectIdIn;
in_UpdateTypeIn = (in_UpdateTypeIn === undefined) ? "" : in_UpdateTypeIn;
in_UpdateDateIn = (in_UpdateDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_UpdateDateIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.shareEntity_ByURL$Action.bind(controller, in_ShareTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ShareableObjectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_UpdateTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_UpdateDateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ShareSheet_IsSharing", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.clientVariables"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.shareSheet_IsSharing$Action = function (in_ExternalShareOptionTypeIdIn, in_SharingRecentMemberIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ShareSheet_IsSharing$vars"))());
vars.value.in_ExternalShareOptionTypeIdInLocal = in_ExternalShareOptionTypeIdIn;
vars.value.in_SharingRecentMemberIdInLocal = in_SharingRecentMemberIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.ShareSheet_IsSharing$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:wabF_6HIREikl5guAA32PQ:/ClientActionFlows.wabF_6HIREikl5guAA32PQ:W3AAE14RYKE2IgHT_a4XOA", "UBTConnect_Utils", "ShareSheet_IsSharing", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Ynuq5tIrZUqGqVp03lYY1w", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Ioz5VJlYR0ytGiFL20H0xw", callContext.id);
// Out_IsSharing = In_ExternalShareOptionTypeId <> NullTextIdentifier or In_SharingRecentMemberId <> ""
outVars.value.out_IsSharingOut = (((vars.value.in_ExternalShareOptionTypeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())) || ((vars.value.in_SharingRecentMemberIdInLocal) !== ("")));
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:STXUrC1swU69It6KTwiM6A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:wabF_6HIREikl5guAA32PQ", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ShareSheet_IsSharing$vars", [{
name: "In_ExternalShareOptionTypeId",
attrName: "in_ExternalShareOptionTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_SharingRecentMemberId",
attrName: "in_SharingRecentMemberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.ShareSheet_IsSharing$outVars", [{
name: "Out_IsSharing",
attrName: "out_IsSharingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.shareSheet_IsSharing$Action = function (in_ExternalShareOptionTypeIdIn, in_SharingRecentMemberIdIn) {
in_ExternalShareOptionTypeIdIn = (in_ExternalShareOptionTypeIdIn === undefined) ? "" : in_ExternalShareOptionTypeIdIn;
in_SharingRecentMemberIdIn = (in_SharingRecentMemberIdIn === undefined) ? "" : in_SharingRecentMemberIdIn;
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.shareSheet_IsSharing$Action.bind(controller, in_ExternalShareOptionTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(in_SharingRecentMemberIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_IsSharing: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_IsSharingOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("UBTConnect_Utils.controller$ShowComingSoonMessage", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.clientVariables", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetComingSoonMessage"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.showComingSoonMessage$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getComingSoonMessageVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getComingSoonMessageVar = getComingSoonMessageVar;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:JNdMkzGgHkug6jvqzrBMMw:/ClientActionFlows.JNdMkzGgHkug6jvqzrBMMw:Ad5uT6ITS7zAS_goO9ARSQ", "UBTConnect_Utils", "ShowComingSoonMessage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EbWD4ETtX0uBG0ibXxiqwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0G5B6kTbwUedGMMtAZJxnw", callContext.id);
// Execute Action: GetComingSoonMessage
getComingSoonMessageVar.value = UBTConnect_UtilsController.default.getComingSoonMessage$Action(callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6tXTuOeA506aBcYrgtVwRQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", getComingSoonMessageVar.value.out_ComingSoonMessageOut, UBTConnect_UtilsModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vxtglfCzr0ujy3YZNqJpQw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:JNdMkzGgHkug6jvqzrBMMw", callContext.id);
}

};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.clientActionProxies.showComingSoonMessage$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.showComingSoonMessage$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$TestDownload", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "FileTransferPlugin.model", "CommonPlugin.model", "FileTransferPlugin.controller", "FilePlugin.model", "FilePlugin.controller", "UBTConnect_Utils.clientVariables", "FileTransferPlugin.model$HeaderRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$FileTransferPlugin", "UBTConnect_Utils.model$HeaderList", "CommonPlugin.model$ErrorRec", "UBTConnect_Utils.referencesHealth$CommonPlugin", "FileTransferPlugin.controller$DownloadFile", "FilePlugin.model$FileInfoRec", "UBTConnect_Utils.referencesHealth$FilePlugin", "CommonPlugin.model$WarningRec", "FilePlugin.controller$GetMetadata", "UBTConnect_Utils.controller$OpenInApp_AddExtensionToFile"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, FileTransferPluginModel, CommonPluginModel, FileTransferPluginController, FilePluginModel, FilePluginController, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.testDownload$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.TestDownload$vars"))());
var downloadFile2Var = new OS.DataTypes.VariableHolder();
var getMetadata_DownloadFolderVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.downloadFile2Var = downloadFile2Var;
varBag.getMetadata_DownloadFolderVar = getMetadata_DownloadFolderVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:mSMHPHDdoUuMenSKJ57MXg:/ClientActionFlows.mSMHPHDdoUuMenSKJ57MXg:5CEynMQ4e8nJa9UrDDMHVA", "UBTConnect_Utils", "TestDownload", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:noOBClOoGkWf_utMb7J1WA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GDkC939sy06cJEEsVbsJ+A", callContext.id);
// Execute Action: GetMetadata_DownloadFolder
return FilePluginController.default.getMetadata$Action("download", UBTConnect_UtilsModel.staticEntities.pathDirectory.eXTERNAL_STORAGE, callContext).then(function (value) {
getMetadata_DownloadFolderVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HgEDY5C9_0eytsSodKATqw", callContext.id);
// Filepath = GetMetadata_DownloadFolder.Result.URI + "/" + OpenInApp_AddExtensionToFile(filename, fileextension)
vars.value.filepathVar = ((getMetadata_DownloadFolderVar.value.resultOut.uRIAttr + "/") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.openInApp_AddExtensionToFile$Action(vars.value.filenameVar, vars.value.fileextensionVar, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TX8pfgQfiEKprP1Tc3kJFQ", callContext.id);
// Execute Action: DownloadFile2
return FileTransferPluginController.default.downloadFile$Action("https://ubtm-dev.ubtconnectglobal.com/UBTConnect_Utils/new%2021.txt", vars.value.filepathVar, new UBTConnect_UtilsModel.HeaderList(), callContext).then(function (value) {
downloadFile2Var.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EClnNZfJG0my3+BaD_Y3YA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your downloads folder", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MsMprufjeEO75nUbvmkXnQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mSMHPHDdoUuMenSKJ57MXg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mSMHPHDdoUuMenSKJ57MXg", callContext.id);
throw ex;

});
};
var controller = UBTConnect_UtilsController.default;
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils.TestDownload$vars", [{
name: "filename",
attrName: "filenameVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "testfile";
}
}, {
name: "fileextension",
attrName: "fileextensionVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "txt";
}
}, {
name: "Filepath",
attrName: "filepathVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnect_UtilsController.default.clientActionProxies.testDownload$Action = function () {
return controller.executeActionInsideJSNode(UBTConnect_UtilsController.default.testDownload$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnect_Utils.controller$ServerAction.CS_CreateShareProfileLink", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.cS_CreateShareProfileLink$ServerAction = function (in_ShareObjectTypeIdIn, in_SharedObjectIdIn, in_UpdateTypeIn, in_UpdateDateIn, callContext) {
var controller = this.controller;
var inputs = {
In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.to(in_ShareObjectTypeIdIn, OS.DataTypes.DataTypes.Text),
In_SharedObjectId: OS.DataConversion.ServerDataConverter.to(in_SharedObjectIdIn, OS.DataTypes.DataTypes.Text),
In_UpdateType: OS.DataConversion.ServerDataConverter.to(in_UpdateTypeIn, OS.DataTypes.DataTypes.Text),
In_UpdateDate: OS.DataConversion.ServerDataConverter.to(in_UpdateDateIn, OS.DataTypes.DataTypes.Date)
};
return controller.callServerAction("CS_CreateShareProfileLink", "screenservices/UBTConnect_Utils/ActionCS_CreateShareProfileLink", "qXBmIppyKyiGN5H_4r0QyQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils$rssespaceconnect2_sharing_cs_ActionCS_CreateShareProfileLink"))();
executeServerActionResult.uRLOut = OS.DataConversion.ServerDataConverter.from(outputs.URL, OS.DataTypes.DataTypes.Text);
executeServerActionResult.shareIdOut = OS.DataConversion.ServerDataConverter.from(outputs.ShareId, OS.DataTypes.DataTypes.LongInteger);
return executeServerActionResult;
});
};
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils$rssespaceconnect2_sharing_cs_ActionCS_CreateShareProfileLink", [{
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
define("UBTConnect_Utils.controller$ServerAction.Get_RuntimeVersion", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.get_RuntimeVersion$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("Get_RuntimeVersion", "screenservices/UBTConnect_Utils/ActionGet_RuntimeVersion", "5waV5xUWeS2rbT5vesIIqw", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils$ActionGet_RuntimeVersion"))();
executeServerActionResult.out_RuntimeVersionOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_RuntimeVersion, OS.DataTypes.DataTypes.Integer);
executeServerActionResult.out_NameOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_Name, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils$ActionGet_RuntimeVersion", [{
name: "Out_RuntimeVersion",
attrName: "out_RuntimeVersionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Out_Name",
attrName: "out_NameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});
define("UBTConnect_Utils.controller$ServerAction.GetSignedImagesInBulk", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BulkSignedImageResultRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$BulkSignedImageResultList"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_LegacySharedModel) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getSignedImagesInBulk$ServerAction = function (bulkSignedImagesParametersIn, callContext) {
var controller = this.controller;
var inputs = {
BulkSignedImagesParameters: OS.DataConversion.ServerDataConverter.to(bulkSignedImagesParametersIn, OS.DataTypes.DataTypes.RecordList)
};
return controller.callServerAction("GetSignedImagesInBulk", "screenservices/UBTConnect_Utils/ActionGetSignedImagesInBulk", "wgvpTC+zWiTiXknozAa61g", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils$ActionGetSignedImagesInBulk"))();
executeServerActionResult.resultsOut = OS.DataConversion.ServerDataConverter.from(outputs.Results, UBTConnect_UtilsModel.BulkSignedImageResultList);
return executeServerActionResult;
});
};
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils$ActionGetSignedImagesInBulk", [{
name: "Results",
attrName: "resultsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnect_UtilsModel.BulkSignedImageResultList();
},
complexType: UBTConnect_UtilsModel.BulkSignedImageResultList
}]);
});
define("UBTConnect_Utils.controller$ServerAction.GetUserInformation", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.model$CacheControl_UserInformationRec"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController) {
var OS = OutSystems.Internal;
UBTConnect_UtilsController.default.getUserInformation$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetUserInformation", "screenservices/UBTConnect_Utils/ActionGetUserInformation", "YZYdEql7Z5Nq6vkutg4XqQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils$ActionGetUserInformation"))();
executeServerActionResult.userInformationOut = OS.DataConversion.ServerDataConverter.from(outputs.UserInformation, UBTConnect_UtilsModel.CacheControl_UserInformationRec);
return executeServerActionResult;
});
};
UBTConnect_UtilsController.default.constructor.registerVariableGroupType("UBTConnect_Utils$ActionGetUserInformation", [{
name: "UserInformation",
attrName: "userInformationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnect_UtilsModel.CacheControl_UserInformationRec();
},
complexType: UBTConnect_UtilsModel.CacheControl_UserInformationRec
}]);
});
define("UBTConnect_Utils.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller$debugger"], function (exports, OutSystems, UBTConnect_UtilsModel, UBTConnect_Utils_Controller_debugger) {
var OS = OutSystems.Internal;
var UBTConnect_UtilsController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBTConnect_UtilsController.default.defaultTimeout;
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
UBTConnect_UtilsController.default = new Controller(null, "UBTConnect_Utils");
});
define("UBTConnect_Utils.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.clientVariables"], function (exports, Debugger, OutSystems, UBTConnect_UtilsClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"RmyAOMiS6U+kYrToDFQqcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.externalAppPackageNameVar;
}
},
"zjQ2SbhNEkG8WBb54GsqBg": {
getter: function (varBag, idService) {
return varBag.vars.value.dataVar;
}
},
"Yq2O0t19MUqp7iGBsR2Tdg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"So_AaOMPDEmQcZhzu3DPpg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tUDu9EqLRUm97DM4zDeL4Q": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"PhWD49nw_U6aQ5yPaU+_fQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HasNewLDMOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ir85JIEax0mIiN5M2ikCMw": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"vjNsXnA0xUW5ky59evR4Vw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HasNewNotificationsOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2nwLztLFpUC1_OfHBC46tw": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"s_iDNDa0LEO8MiCs4iWyGw": {
getter: function (varBag, idService) {
return varBag.vars.value.shareTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SiFyV0yyiEGEI2pQ+i8jPQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.entityTypeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RZb6iVe7aUunAHebBlxabw": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasOrbitEventBookletOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+ozKwVK80kmHXAIoFxdT2g": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"bQFI1E6w6EK5xR1EdwwOyg": {
getter: function (varBag, idService) {
return varBag.vars.value.prefixVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XfiqdIPidE2iGIqYbZL8Jw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"W6n9R6TogkeekwotMJcHwA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_SubjectOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6HNMS588rEahVbCroY8S3Q": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9ZtltZXBZEGQfETfoTYGsg": {
getter: function (varBag, idService) {
return varBag.vars.value.packageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9Fl9Aozny0+Kp0plFGZu4A": {
getter: function (varBag, idService) {
return varBag.checkAppLauncherPluginVar.value;
}
},
"pq7nfyjENkuSKFiBb_H71w": {
getter: function (varBag, idService) {
return varBag.isCordovaDefinedVar.value;
}
},
"PfGOnqwOAk6OMuKi3S8kEg": {
getter: function (varBag, idService) {
return varBag.canLaunchWithDataVar.value;
}
},
"CrKHu53nKEmNS2JSX_ncjA": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"D39W3ygp50Gp9T8L0aQc2w": {
getter: function (varBag, idService) {
return varBag.getOperatingSystemVar.value;
}
},
"cxmhy2S330qqdRFxuFAc6w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"IXzyv28Xu0q+I4sev0_4Tg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareObjectTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PyaSnBAgXEa7TWq8dOeyLw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareableObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SsJODGXwrUC98cx5owjJoA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3HBnYa7fhESgijlz2NfNoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ExternalShareOptionTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FDtgBOwCUEWLu3YbSo3HpA": {
getter: function (varBag, idService) {
return varBag.appManager_GetMemberIdVar.value;
}
},
"MpwM8NEzW0ON8hagrvj50A": {
getter: function (varBag, idService) {
return varBag.externalShare_SocialSharingVar.value;
}
},
"DM77vqbtnEeEyeNrgjhMBQ": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"LGknxIxeYkmIS2jNFlUTWg": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasExtendedShareOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oltAGgqh0k+iHIc9UBE1gw": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"R9ejLSq5PkC+f92Aa7elVA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasOrbitAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"455pFxHsh0KQUNY184z88w": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"xDSegjMmtE6uaY_MlwLHDQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wAzok43h10Wnv_oNsJJdvQ": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"eQ7BoU+2VE+nuH9vmGJSyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fwHZ3E_PuEygTSK_7sPCow": {
getter: function (varBag, idService) {
return varBag.vars.value.fileextensionVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OMFMdQlFgkW6UoNB+8nmPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.filepathVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TX8pfgQfiEKprP1Tc3kJFQ": {
getter: function (varBag, idService) {
return varBag.downloadFile2Var.value;
}
},
"GDkC939sy06cJEEsVbsJ+A": {
getter: function (varBag, idService) {
return varBag.getMetadata_DownloadFolderVar.value;
}
},
"813+1Mce7UOUhDFnmFK7ag": {
getter: function (varBag, idService) {
return varBag.vars.value.entityTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jzsBT4tlEU+HMTGEB+AbZQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.iconIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VtplWFJMCUSaj5YWGSiocQ": {
getter: function (varBag, idService) {
return varBag.vars.value.useMapsItemsInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oXAC1vUQLkaHdEKQwfo6pQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isHouseholderInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"u7peTSdqRUaAm5kkgkVwJg": {
getter: function (varBag, idService) {
return varBag.outVars.value.bottomBar_ItemsListOut;
}
},
"mJHT4XL0JEOwO9mKOPIIcA": {
getter: function (varBag, idService) {
return varBag.outVars.value.menuItemsListOut;
}
},
"APvJffDEikSX4SOPGn7Xsw": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_fEDUOooIk+LwI4L4zTJug": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"NoYu8sA8kk+SDLicD8CXsg": {
getter: function (varBag, idService) {
return varBag.outVars.value.searchCategoryItemsListOut;
}
},
"5AI2vtigBU2aCkTR8ytkWw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_RuntimeVersionOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"SUFr5+GDW0uUqCXoipPDug": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_EnvironmentOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"45GKZO6orkGgS515WtJpTA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_NativeVersionOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nRsbCkZTCkK3YbtB2PoN+Q": {
getter: function (varBag, idService) {
return varBag.get_RuntimeVersionVar.value;
}
},
"k0QyAY1A0k2PUNWHyYVWPg": {
getter: function (varBag, idService) {
return varBag.appManager_GetEnvironmentVar.value;
}
},
"kE6w74aQoEu2QdRAHEN98Q": {
getter: function (varBag, idService) {
return varBag.getVersionNumberVar.value;
}
},
"beLQ4iIUgUmdGxekZu42Ow": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"tsb4gMEk8ESw6RawK3N5Ng": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lBmjDLoc5kyDHZK71pq41g": {
getter: function (varBag, idService) {
return varBag.vars.value.entityIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"hiDEEG8QzUaLB4gAQnTQ4w": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jAnCtlYQtUW6+KXvA0b+Cg": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gd0eu62E5UKS9Bq9nhRLhg": {
getter: function (varBag, idService) {
return varBag.outVars.value.uRLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5CUv_UrgNEmHIPG55sP17A": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectInBulkVar.value;
}
},
"sXPJJgzD602dbJS9jGvztg": {
getter: function (varBag, idService) {
return varBag.resultURLJSResult.value;
}
},
"gdSYYbqtjUu1AgPCCC8kaQ": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"4EH6C4XIb0Kja8wA4ncCZQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.userInformationOut;
}
},
"lJeP9dkCJUmn96QDYE5icg": {
getter: function (varBag, idService) {
return varBag.getUserInformationVar.value;
}
},
"rzZEcNLAgEuxJgeTe42ZnQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ComingSoonMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Z0iW5KP6G0iHkmgLHgoyTg": {
getter: function (varBag, idService) {
return varBag.vars.value.isCreateInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"htzm0H7fxUiiKi97dxYtZg": {
getter: function (varBag, idService) {
return varBag.vars.value.isErrorInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+qbMuPEAv0GzE91zJZtgSw": {
getter: function (varBag, idService) {
return varBag.confirmActionVar.value;
}
},
"A0Z3Zj5Q3UG9r_+ey43z9Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.latitudeOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"efmfKNffrEGC6ghf_xsLAQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.longitudeOut;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"VDE4Ky3hG0GQ7oPmVjCLYg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FFidByYDukS4LG3b2vQ8Qw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"fn3jRJZC6EOxcJE1ihEuWQ": {
getter: function (varBag, idService) {
return varBag.appManager_GetIsNativeVar.value;
}
},
"O6phWUDLcUikF6sbrYIlLQ": {
getter: function (varBag, idService) {
return varBag.getLocationVar.value;
}
},
"Xx2R9G+nbkGKUY2sJaZMWg": {
getter: function (varBag, idService) {
return varBag.checkLocationPluginVar.value;
}
},
"qYcC_AnrfUSh60nf1isjBQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"xeBMT17QT0O6OtSxFOgZAA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasBookmarkNoteAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0GFeZjvhT0Oh_ai16_zJLA": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"7+c3LUrVnkiTyKZXKPTA5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"BeXsaE9IKUaaEiq12DjdMQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultsOut;
}
},
"Jac6Gbl4SECVbIA6uehiZw": {
getter: function (varBag, idService) {
return varBag.getSignedImagesInBulkVar.value;
}
},
"5luvqqd3vEex2QkK6XDEmQ": {
getter: function (varBag, idService) {
return varBag.cache_SignedImageURL_GetParametersVar.value;
}
},
"JdHhuKiFNU60CQGJSOhymg": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheableUserDetailsVar;
}
},
"GxYAb0rsGU6gHqMJwAJD8w": {
getter: function (varBag, idService) {
return varBag.vars.value.timeToLiveSecondsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"pHvkWIuhMUuCsJeeGuXUCA": {
getter: function (varBag, idService) {
return varBag.vars.value.timeoutVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"afEzTmcA4USVTiaaahMtQQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.userInformationOut;
}
},
"aKecEXNsUUiRJsNbDJZylA": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheResultOut;
}
},
"_PbSRJy5bUG59jHJl24c2Q": {
getter: function (varBag, idService) {
return varBag.getCacheableObjectVar.value;
}
},
"17tjc3bFFEGRVTem2uHMpg": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"sRFROi7Lu0yzQTjszp5RnA": {
getter: function (varBag, idService) {
return varBag.callbacksJSResult.value;
}
},
"H7jr5szZuEKUB2Z4n3F1lQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5vGwNqwkqkaZapE7kJi0Xg": {
getter: function (varBag, idService) {
return varBag.vars.value.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MG6eZL_8hUqw5O3+IgUrEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.actionTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aQD2dW5zb0C7WU57lvd7+g": {
getter: function (varBag, idService) {
return varBag.vars.value.isSuccessInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cYM+yIrCQE+peBbyFTBiiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isNotFoundInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0cc3cpTkDEmJZPxRFBQXew": {
getter: function (varBag, idService) {
return varBag.vars.value.outSystems_FFInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Rr+blRcd8kyJFlDHiT1Ovg": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oQm7AQOnM0uRN0U_rE4xlw": {
getter: function (varBag, idService) {
return varBag.permissions_CheckVar.value;
}
},
"yfbYF6QGx02Y0haJjOUclQ": {
getter: function (varBag, idService) {
return varBag.vars.value.externalAppPackageNameVar;
}
},
"MWyK_5iUEUSkA2_2Trl4Kg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lBbX9ZJXcEe_1u0M4ZsZYw": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"Xm+xnHZn2k6kBfMmvcWBHg": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAncestry4thGenAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"s3selLMXXUypdJObtmWeWQ": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"CfpY_upd60eVNmAvcUliGw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_HasNewBookmarksOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QbKzthnpTky8o_HlgxVy+w": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"dakbYo4DHk6oUEx9UwYlWQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isFreeSubscriptionPlanOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0dPhzMujSEaoTUaSQBmQpg": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"0G5B6kTbwUedGMMtAZJxnw": {
getter: function (varBag, idService) {
return varBag.getComingSoonMessageVar.value;
}
},
"I2Zh4IvigUyhzt+r+q648g": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"psK+WnuoXkaF8TcpnBn_sw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q_FJNkWtDEi9G+lHoU146g": {
getter: function (varBag, idService) {
return varBag.vars.value.addressInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WbvayTT7sEO9JB2Hv7KKYA": {
getter: function (varBag, idService) {
return varBag.outVars.value.addressSafeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NKktXZGe2E2YaCUK+B9zDw": {
getter: function (varBag, idService) {
return varBag.cleanAddressJSResult.value;
}
},
"jBNpPqdWTUyqo8xOboyzFA": {
getter: function (varBag, idService) {
return varBag.vars.value.urlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rsFNfvj1L0ixA8NVi2GiDQ": {
getter: function (varBag, idService) {
return varBag.vars.value.inNewTabInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"yt+BEnJWrE6d_UE2VTvsWg": {
getter: function (varBag, idService) {
return varBag.openVar.value;
}
},
"kmVpR5eejkqMc+BTflXDaw": {
getter: function (varBag, idService) {
return varBag.checkInAppBrowserPluginVar.value;
}
},
"w1XX_eeXe0O94AlfbvImrQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAssembleOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fPJiuRisLkm7tPmEtGg9uQ": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"PzEGPEzRwkWFMiZzDc+R8w": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"0yAM_UvQiEmxu9QC8TBYNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.launchDarkly_FFInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0xkR3O7w+0qgbry5cAc6CQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WHN0CRxNYUCqQ_NZmgMw6A": {
getter: function (varBag, idService) {
return varBag.permissions_CheckVar.value;
}
},
"LsMirllZR02PWGTWsHVeVQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasHiddenMemberAccesOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"RZ9mhELlHEGv4CK55w56xA": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"PDs6278c8kaNz_aYqsY6ZQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasDeceasedProfileAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ygoSjUPeVU+5iWwC+9TlcQ": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"ncdhHHx5p0eVJ8rsp80+Rw": {
getter: function (varBag, idService) {
return varBag.vars.value.policyInformationInLocal;
}
},
"Ykxq8Rq0I0iuYx3hsKOFQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.errorMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"io5vIbhCMkKpJZEFtEdfqA": {
getter: function (varBag, idService) {
return varBag.openApplicationPolicyVar.value;
}
},
"YMnpJ1RXbUeCgY6Rv2Uh5w": {
getter: function (varBag, idService) {
return varBag.canOpenApplicationPolicyDirectlyViaUrlVar.value;
}
},
"usDQTdnQ4EWpiULsSRQfAQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasListVirtualizationDisabledOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ojWea+hGCkyU_7yjOM9_6Q": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"ZGrQtfGez0mxZvRvkrxsXg": {
getter: function (varBag, idService) {
return varBag.clearNotificationsVar.value;
}
},
"atV9zy_2bECA++hZjex34Q": {
getter: function (varBag, idService) {
return varBag.checkCloudMessagingPluginVar.value;
}
},
"JBaA+zB+k0CmlSeFgJC9gA": {
getter: function (varBag, idService) {
return varBag.vars.value.entityTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KNpbVj3VX0iC_DppG981UA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_NoteCategoryIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cG+Pu7c4o0in7s6GJDDE5A": {
getter: function (varBag, idService) {
return varBag.vars.value.entityTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g80Kr7CxVEytSnbxjTkVbA": {
getter: function (varBag, idService) {
return varBag.vars.value.isMyHouseholdInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wtqYkG6DJ0+DgtZYo1WJQQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.shareTypeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"X1m6C+HzX0ecjX7OwaG_ow": {
getter: function (varBag, idService) {
return varBag.vars.value.listIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WmTZ5fVO3UuNK9DPsAqgmg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"DnztXeRswEqRSveDO0km9w": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasPersonalEventsOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HdYlaZd_BU+R0uyk+Fdjcg": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"zn_iqKCFHEyNVE3hRG40zA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasCustomEventsOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3XjPvMpgL0e3j2I2IJXmiA": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"4qFkjCLenk2n+NvysN96QQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasPhotobookAccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2TD_u+AcEUqJzev62oX_ng": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"PjBw1fXSn0+mJThuFgVsCA": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasCarouselEnabledOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"iDo89TwbskqAHaCwecUGoA": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"mwofBJnM80y5HABrXvf6jg": {
getter: function (varBag, idService) {
return varBag.vars.value.entityTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ABGxumK9_UqHtAGU_8kqPA": {
getter: function (varBag, idService) {
return varBag.outVars.value.typeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LeTHtrLkvUSOfnFu2tqxoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"R5gnANHQHEWxwj3DaWzmNw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileExtensionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"q8GxSrsSSkG5CDK2YAIv7g": {
getter: function (varBag, idService) {
return varBag.outVars.value.fileWithExtensionOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cUTujpIG6kWROETrmDWl0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasC1DirectoryViewOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"iLfH3owCwkyDlDfy2pwbqw": {
getter: function (varBag, idService) {
return varBag.connect_OutSystems_PermissionCheckVar.value;
}
},
"MSyDVp9iZEmaA9JgttbFvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QcEntBTuSUyTQ+moWhU5JA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShareableObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vKkf7a2+wkGTRa1lnjNNuQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UpdateTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ys5Wk08yS0qamPH3XkqlJA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UpdateDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"lGTGrQlxaEKfnO0JbcXfmg": {
getter: function (varBag, idService) {
return varBag.sharePluginErrorVar.value;
}
},
"Q0IaQ2kOFkeDJqOtR6oLiw": {
getter: function (varBag, idService) {
return varBag.cS_CreateShareProfileLinkVar.value;
}
},
"tb4ECtIcpU+DPVT7bozJZg": {
getter: function (varBag, idService) {
return varBag.socialSharingVar.value;
}
},
"k5ucW1o0fEq3RHbMySwwrw": {
getter: function (varBag, idService) {
return varBag.appManager_GetMemberIdVar.value;
}
},
"awTW4GQYD0GB9ehVXrfwOw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isRegionalSubscriptionPlanOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jb1xPldhR0i_FynOzzOgyg": {
getter: function (varBag, idService) {
return varBag.cache_UserInfo_GetVar.value;
}
},
"o5+0vgT39E+r8eeDfrK42A": {
getter: function (varBag, idService) {
return varBag.outVars.value.keyOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5FaO4sNdm0GXIZz97Sd+FQ": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vri16tMdj0CyUMo7ICthew": {
getter: function (varBag, idService) {
return varBag.outVars.value.cacheKeyOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2SZj5hsfykaWBdDLqRp+Ow": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasOrbitHostSurveyOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+fHLVf_ts0GRbXRaaILQww": {
getter: function (varBag, idService) {
return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
}
},
"MiV5vCQFr02OBOai+m65sg": {
getter: function (varBag, idService) {
return varBag.vars.value.cacheKeysInLocal;
}
},
"9WQZ3V+lH0ikwqRW58o73Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.parametersOut;
}
},
"1Zny7qaNBkCr1vGzd+vmzQ": {
getter: function (varBag, idService) {
return varBag.getCacheKeyPartsVar.value;
}
},
"2wFPYsCAxEa9mT+4o8rkrA": {
getter: function (varBag, idService) {
return varBag.vars.value.externalAppPackageNameVar;
}
},
"FIwaWsgEkUG5y_K7Ibea9A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7NwhBa57AEebsbLMSQEj6Q": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"cnh9dJOclEORBjygPsEtxg": {
getter: function (varBag, idService) {
return varBag.vars.value.downloadUrlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"59rSgQxEHUiG0TgwOUvgUw": {
getter: function (varBag, idService) {
return varBag.checkInAppBrowserPluginVar.value;
}
},
"wj0QnvcjBEetLsojJIdHbQ": {
getter: function (varBag, idService) {
return varBag.openVar.value;
}
},
"MA5S0Xutr0ekVMA916S39w": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"37ZQgdsHKke1SYhQT6G4JA": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZvcQbFrUyU6tMf6G0l+aPA": {
getter: function (varBag, idService) {
return varBag.vars.value.downloadUrlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xEsFid_wpk24JrroT+99NQ": {
getter: function (varBag, idService) {
return varBag.vars.value.folderToSaveInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+e29Rpesjkm2B2VtZabHbQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileExtensionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+ARm+hZXpkqmyRGthlr2gg": {
getter: function (varBag, idService) {
return varBag.outVars.value.filepathOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UAe2rJHK2k2M535wYnRH5w": {
getter: function (varBag, idService) {
return varBag.outVars.value.isInAppOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"37xtB5lp2EyOlvLYFhVdHA": {
getter: function (varBag, idService) {
return varBag.downloadFileVar.value;
}
},
"izeiNRx0rku_tIG5GRbuvQ": {
getter: function (varBag, idService) {
return varBag.getMetadata_DownloadFolderVar.value;
}
},
"k66iUCf7Q0aWKgu1sXz_Dg": {
getter: function (varBag, idService) {
return varBag.checkFilePluginVar.value;
}
},
"FuOYVf7KpkSY6lCtx6qNxg": {
getter: function (varBag, idService) {
return varBag.checkFileTransferPluginVar.value;
}
},
"XzSkWIA90EuPZYcCl_IQnA": {
getter: function (varBag, idService) {
return varBag.getMetadataVar.value;
}
},
"3RpChbmhPUKcsilpMv_bjw": {
getter: function (varBag, idService) {
return varBag.createDirectoryVar.value;
}
},
"VyH0jR74ykeEaUrSEbWo7Q": {
getter: function (varBag, idService) {
return varBag.checkFileViewerPluginVar.value;
}
},
"T_3WtRylkkC5biEOG5GD5g": {
getter: function (varBag, idService) {
return varBag.downloadFile2Var.value;
}
},
"CeTP9QU3CE2Pf_XmLDrcCA": {
getter: function (varBag, idService) {
return varBag.get_FileExtensionJSResult.value;
}
},
"Z+yL35aOA0mMGLlrQIrDdA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LL+ia7ulu0+wHZqnV3vbcg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JEjYp_qZLEe0+iMLR1onsQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_IsErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Cej0r5oUMkK5+WjRW6sy1g": {
getter: function (varBag, idService) {
return varBag.sharePluginErrorVar.value;
}
},
"MDc6D9Ev3EGgW92IuG0MVg": {
getter: function (varBag, idService) {
return varBag.socialSharing_WithSubject2Var.value;
}
},
"31hImpmPNUaRCg+v+zNZOA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ExternalShareOptionTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y3HkRpis7kuE_4YEA2GV6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SharingRecentMemberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VNsMZUenP0C4AYuzgws4Fg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_IsSharingOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cY7aXEXmQU6NBqozC+ACAA": {
getter: function (varBag, idService) {
return UBTConnect_UtilsClientVariables.getApp_SubscriptionPopUp();
},
dataType: OS.DataTypes.DataTypes.Text
},
"jHhVlSGg_kamDt1TpssDfQ": {
getter: function (varBag, idService) {
return UBTConnect_UtilsClientVariables.getUniqueCacheKey();
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
