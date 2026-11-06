define("NavigationHandler.controller$AddDefaultBackNavigationHandlers", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$AddDefaultBackNavigationHandlers.CloseExpandedDropdownJS", "NavigationHandler.controller$ModalBackNavigationPriority", "NavigationHandler.controller$PreventNavigation"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_AddDefaultBackNavigationHandlers_CloseExpandedDropdownJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.addDefaultBackNavigationHandlers$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:wypTecatKEGVuFNrOvMFig:/ClientActionFlows.wypTecatKEGVuFNrOvMFig:Gp0A9Kt_Ka4_UnaKCk0JuA", "NavigationHandler", "AddDefaultBackNavigationHandlers", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:C+SXPqECNkCzNMEdDGyuzA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:I9JRgvd1LUm6DXQwMSq8Hw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_AddDefaultBackNavigationHandlers_CloseExpandedDropdownJS, "CloseExpandedDropdown", "AddDefaultBackNavigationHandlers", {
Priority: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return NavigationHandlerController.default.modalBackNavigationPriority$Action(callContext).priorityOut;
}, OS.DataTypes.DataTypes.Integer, callContext.id), OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {
PreventNavigation: NavigationHandlerController.default.getClientActionProxies(controller).preventNavigation$Action
}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:OXc23ZHoJE6NJBFd1vO3cg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:wypTecatKEGVuFNrOvMFig", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.clientActionProxies.addDefaultBackNavigationHandlers$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.addDefaultBackNavigationHandlers$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$AddDefaultBackNavigationHandlers.CloseExpandedDropdownJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var customDropdownBack = function(evt) {
    var dropdownExpanded = document.querySelector(".dropdown.dropdown-expanded");
    if (dropdownExpanded) {
        // Collapse the dropdown by simulating a click on the backdrop
        dropdownExpanded.querySelector(".dropdown-background-window").click();
        $actions.PreventNavigation(evt);
    }
};

window.dx.Navigation.BeforeBackNavigation.add(customDropdownBack, $parameters.Priority);
};
});

define("NavigationHandler.controller$AllowUpcomingNavigation", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$AllowUpcomingNavigation.AllowUpcomingNavigationJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_AllowUpcomingNavigation_AllowUpcomingNavigationJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.allowUpcomingNavigation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:yoQwyomqP0SwX5ixCRZoeg:/ClientActionFlows.yoQwyomqP0SwX5ixCRZoeg:C1L9ZS0w01zscEPbUcBbJg", "NavigationHandler", "AllowUpcomingNavigation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:oIUfgnVcS0WimXIf4LQSUg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:ri3CkxBQh0aYZDj9guqc5w", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_AllowUpcomingNavigation_AllowUpcomingNavigationJS, "AllowUpcomingNavigation", "AllowUpcomingNavigation", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:eI_A3TBMHUeoNd3jrW247w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:yoQwyomqP0SwX5ixCRZoeg", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.clientActionProxies.allowUpcomingNavigation$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.allowUpcomingNavigation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$AllowUpcomingNavigation.AllowUpcomingNavigationJS", [], function () {
return function ($actions, $roles, $public) {
window.dx.Navigation.allowUpcomingNavigation();
};
});

define("NavigationHandler.controller$AssignFromObject", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$AssignFromObject.AssignJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_AssignFromObject_AssignJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.assignFromObject$Action = function (toObjectRefIn, objectValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.AssignFromObject$vars"))());
vars.value.toObjectRefInLocal = toObjectRefIn;
vars.value.objectValueInLocal = objectValueIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.AssignFromObject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:F1lrmniP3k2_Xkp1YZZjpA:/ClientActionFlows.F1lrmniP3k2_Xkp1YZZjpA:FDQOikv+Xlsx_fAyslyuMg", "NavigationHandler", "AssignFromObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:uAhYD1ftoEeNEDRx5Eb+iw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+qJiGfZOI0GgcMS6qCGKJQ", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_AssignFromObject_AssignJS, "Assign", "AssignFromObject", {
ToObjectRef: OS.DataConversion.JSNodeParamConverter.to(vars.value.toObjectRefInLocal, OS.DataTypes.DataTypes.Object),
ObjectValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectValueInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:gez4eINReUaF2rfT8nAlEw", callContext.id);
// AssignedObjectRef = ToObjectRef
outVars.value.assignedObjectRefOut = vars.value.toObjectRefInLocal;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:eYCnQb5y6UmLSoi1tIFccg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:F1lrmniP3k2_Xkp1YZZjpA", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.AssignFromObject$vars", [{
name: "ToObjectRef",
attrName: "toObjectRefInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "ObjectValue",
attrName: "objectValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.AssignFromObject$outVars", [{
name: "AssignedObjectRef",
attrName: "assignedObjectRefOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.clientActionProxies.assignFromObject$Action = function (toObjectRefIn, objectValueIn) {
toObjectRefIn = (toObjectRefIn === undefined) ? null : toObjectRefIn;
objectValueIn = (objectValueIn === undefined) ? null : objectValueIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.assignFromObject$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toObjectRefIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(objectValueIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AssignedObjectRef: OS.DataConversion.JSNodeParamConverter.to(actionResults.assignedObjectRefOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("NavigationHandler.controller$AssignFromObject.AssignJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.ObjectValue) {
    // Cloning the object guarantees the same semantics as the assign itself,
    // which always assigns a copy of the object.
    // If changes are made to the ObjectValue after the assignment,
    // the variable referenced by ToObjectRef will not be affected because it was
    // populated with a clone.
    var clone = $parameters.ObjectValue.clone();

    // Calling writePropagate changes the variable referenced by ToObjectRef,
    // but also changes the propagationParent hierarchy.
    // It will cause any parent structures to be modified accordingly by
    // the assignment, and will also cause screens and blocks to react
    // to the changes.
    $parameters.ToObjectRef.writePropagate(clone.data, clone.cache);
}
};
});

define("NavigationHandler.controller$ConfirmAction", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$ConfirmAction.ShowDialogJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_ConfirmAction_ShowDialogJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.confirmAction$Action = function (actionConfirmationDialogWidgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.ConfirmAction$vars"))());
vars.value.actionConfirmationDialogWidgetIdInLocal = actionConfirmationDialogWidgetIdIn;
var showDialogJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.ConfirmAction$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.showDialogJSResult = showDialogJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:lGInc2zGy0mjRvntmdq6Qg:/ClientActionFlows.lGInc2zGy0mjRvntmdq6Qg:Edn++0TjaHqXDtjioRgkCQ", "NavigationHandler", "ConfirmAction", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:BYeTDvo6HEmXig50FuKhVw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:TVKP7JvK10aH4Yf3KJvinw", callContext.id);
return controller.safeExecuteAsyncJSNode(NavigationHandler_controller_ConfirmAction_ShowDialogJS, "ShowDialog", "ConfirmAction", {
ActionConfirmationDialogId: OS.DataConversion.JSNodeParamConverter.to(vars.value.actionConfirmationDialogWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NavigationHandler.ConfirmAction$showDialogJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
showDialogJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_hpi8xZKT0eUZXnwQpyz5A", callContext.id);
// IsConfirmed = ShowDialog.Result
outVars.value.isConfirmedOut = showDialogJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:2BrqclQl302cr+huLKwy4w", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:lGInc2zGy0mjRvntmdq6Qg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:lGInc2zGy0mjRvntmdq6Qg", callContext.id);
throw ex;

});
};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.ConfirmAction$vars", [{
name: "ActionConfirmationDialogWidgetId",
attrName: "actionConfirmationDialogWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.ConfirmAction$showDialogJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.ConfirmAction$outVars", [{
name: "IsConfirmed",
attrName: "isConfirmedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.clientActionProxies.confirmAction$Action = function (actionConfirmationDialogWidgetIdIn) {
actionConfirmationDialogWidgetIdIn = (actionConfirmationDialogWidgetIdIn === undefined) ? "" : actionConfirmationDialogWidgetIdIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.confirmAction$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(actionConfirmationDialogWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsConfirmed: OS.DataConversion.JSNodeParamConverter.to(actionResults.isConfirmedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("NavigationHandler.controller$ConfirmAction.ShowDialogJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var dialog = document.getElementById($parameters.ActionConfirmationDialogId);

if (dialog) {
    var eventHub = dialog.querySelector("[data-dx-event-hub]");

    if (eventHub) {
        var showEvent = new CustomEvent("dx-show", {
            cancelable: false,
            detail: {
                resolve: function(result) {
                    $parameters.Result = result;
                    $resolve();
                }
            }
        });
        eventHub.dispatchEvent(showEvent);
    } else {
        $resolve();
    }
} else {
    $resolve();
}
});
};
});

define("NavigationHandler.controller$CopyClassesAcrossPortal", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$CopyClassesAcrossPortal.CopyClassesAcrossPortalJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_CopyClassesAcrossPortal_CopyClassesAcrossPortalJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.copyClassesAcrossPortal$Action = function (rootWidgetIdIn, popupWidgetIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.CopyClassesAcrossPortal$vars"))());
vars.value.rootWidgetIdInLocal = rootWidgetIdIn;
vars.value.popupWidgetIdInLocal = popupWidgetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:qdr7ddyeQEm6oHhLbqlJow:/ClientActionFlows.qdr7ddyeQEm6oHhLbqlJow:bPC8cWRBcdv1yi_avLHhtg", "NavigationHandler", "CopyClassesAcrossPortal", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Ujk9T9I3lU6IzAs0+nlSsg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_iKFYXxj3EuL2UoiaLSKXw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_CopyClassesAcrossPortal_CopyClassesAcrossPortalJS, "CopyClassesAcrossPortal", "CopyClassesAcrossPortal", {
PopupWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.popupWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
RootWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.rootWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:CoCjBtRhakuCM6Ci8svsTg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:qdr7ddyeQEm6oHhLbqlJow", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.CopyClassesAcrossPortal$vars", [{
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
NavigationHandlerController.default.clientActionProxies.copyClassesAcrossPortal$Action = function (rootWidgetIdIn, popupWidgetIdIn) {
rootWidgetIdIn = (rootWidgetIdIn === undefined) ? "" : rootWidgetIdIn;
popupWidgetIdIn = (popupWidgetIdIn === undefined) ? "" : popupWidgetIdIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.copyClassesAcrossPortal$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(rootWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(popupWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$CopyClassesAcrossPortal.CopyClassesAcrossPortalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var root = document.getElementById($parameters.RootWidgetId);
var popup = document.getElementById($parameters.PopupWidgetId);

if (root && popup) {
    var rootParent = root.parentNode.parentNode;

    var portalRoot = popup.parentNode.parentNode;
    var portalParent = portalRoot.parentNode;


    portalRoot.className = root.className;
    portalParent.className = "portal-class" + (rootParent.className? " " + rootParent.className: "");

    // Portals are rendered with "display: inline;" style, but we replace it to not interfere with any CSS rules
    portalParent.style.display = "contents";
}
};
});

define("NavigationHandler.controller$DrawerBackNavigationPriority", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.drawerBackNavigationPriority$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.DrawerBackNavigationPriority$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:bpHk1chfW0+v8e3n5YBinQ:/ClientActionFlows.bpHk1chfW0+v8e3n5YBinQ:H8TTIoYp37VQuVLqLuB9fw", "NavigationHandler", "DrawerBackNavigationPriority", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:UFk4hrBA3EGBj_t1czWffg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:hdgRugD0ZUCzoIb5VDNHNw", callContext.id);
// Priority = 1000
outVars.value.priorityOut = 1000;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:+RsylqYoC06uvU7tBDcZGA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:bpHk1chfW0+v8e3n5YBinQ", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.DrawerBackNavigationPriority$outVars", [{
name: "Priority",
attrName: "priorityOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
NavigationHandlerController.default.clientActionProxies.drawerBackNavigationPriority$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.drawerBackNavigationPriority$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Priority: OS.DataConversion.JSNodeParamConverter.to(actionResults.priorityOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("NavigationHandler.controller$GetFocusedScrollAnchorOnBack", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$GetFocusedScrollAnchorOnBack.SetScrollAnchorOnNavigationStorageJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_GetFocusedScrollAnchorOnBack_SetScrollAnchorOnNavigationStorageJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.getFocusedScrollAnchorOnBack$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var setScrollAnchorOnNavigationStorageJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.GetFocusedScrollAnchorOnBack$outVars"))());
varBag.callContext = callContext;
varBag.setScrollAnchorOnNavigationStorageJSResult = setScrollAnchorOnNavigationStorageJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:RtaDszoIUUCdMv4e46dwpw:/ClientActionFlows.RtaDszoIUUCdMv4e46dwpw:WgGjqGh6EtWW5xm8xl2Iyg", "NavigationHandler", "GetFocusedScrollAnchorOnBack", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:gTckrF5aUEmlg9roWx1Rxw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:c24vuPio6USNjcEHLR3gfg", callContext.id);
setScrollAnchorOnNavigationStorageJSResult.value = controller.safeExecuteJSNode(NavigationHandler_controller_GetFocusedScrollAnchorOnBack_SetScrollAnchorOnNavigationStorageJS, "SetScrollAnchorOnNavigationStorage", "GetFocusedScrollAnchorOnBack", {
ScrollAnchorId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ListIndex: OS.DataConversion.JSNodeParamConverter.to(-1, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NavigationHandler.GetFocusedScrollAnchorOnBack$setScrollAnchorOnNavigationStorageJSResult"))();
jsNodeResult.scrollAnchorIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ScrollAnchorId, OS.DataTypes.DataTypes.Text);
jsNodeResult.listIndexOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ListIndex, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:H+_6LH_l30GAEFELjjoWGQ", callContext.id);
// ListIndex = SetScrollAnchorOnNavigationStorage.ListIndex
outVars.value.listIndexOut = setScrollAnchorOnNavigationStorageJSResult.value.listIndexOut;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:H+_6LH_l30GAEFELjjoWGQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScrollAnchorId = SetScrollAnchorOnNavigationStorage.ScrollAnchorId
outVars.value.scrollAnchorIdOut = setScrollAnchorOnNavigationStorageJSResult.value.scrollAnchorIdOut;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:6f7WhDOWc0Kb9GH73U7UlA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:RtaDszoIUUCdMv4e46dwpw", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.GetFocusedScrollAnchorOnBack$setScrollAnchorOnNavigationStorageJSResult", [{
name: "ScrollAnchorId",
attrName: "scrollAnchorIdOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ListIndex",
attrName: "listIndexOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return -1;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.GetFocusedScrollAnchorOnBack$outVars", [{
name: "ListIndex",
attrName: "listIndexOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ScrollAnchorId",
attrName: "scrollAnchorIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NavigationHandlerController.default.clientActionProxies.getFocusedScrollAnchorOnBack$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.getFocusedScrollAnchorOnBack$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ListIndex: OS.DataConversion.JSNodeParamConverter.to(actionResults.listIndexOut, OS.DataTypes.DataTypes.Integer),
ScrollAnchorId: OS.DataConversion.JSNodeParamConverter.to(actionResults.scrollAnchorIdOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("NavigationHandler.controller$GetFocusedScrollAnchorOnBack.SetScrollAnchorOnNavigationStorageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.dx.Navigation.Storage) {
    var anchor = window.dx.Navigation.Storage.get("dx-entering-scroll-anchor");
    if (anchor) {
        $parameters.ScrollAnchorId = anchor.id;
        $parameters.ListIndex = anchor.index;
    }
}
};
});

define("NavigationHandler.controller$GetPreloadObject", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$GetPreloadObject.GetPreloadJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_GetPreloadObject_GetPreloadJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.getPreloadObject$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getPreloadJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.GetPreloadObject$outVars"))());
varBag.callContext = callContext;
varBag.getPreloadJSResult = getPreloadJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:cWlC69JIG0i3MjrQ3bSO5Q:/ClientActionFlows.cWlC69JIG0i3MjrQ3bSO5Q:SRAmRmplJE3JcCQzKQDdnQ", "NavigationHandler", "GetPreloadObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:ZLatXWnfRESlcrTl_ELlzw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:S7PHgN1J90WTR9QPtizSzA", callContext.id);
getPreloadJSResult.value = controller.safeExecuteJSNode(NavigationHandler_controller_GetPreloadObject_GetPreloadJS, "GetPreload", "GetPreloadObject", {
Preload: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NavigationHandler.GetPreloadObject$getPreloadJSResult"))();
jsNodeResult.preloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Preload, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Ulgzq8QeS0etf0FjEHMj+Q", callContext.id);
// Preload = GetPreload.Preload
outVars.value.preloadOut = getPreloadJSResult.value.preloadOut;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:wg0Eb1sIk0az0d_F5iNTaw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:cWlC69JIG0i3MjrQ3bSO5Q", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.GetPreloadObject$getPreloadJSResult", [{
name: "Preload",
attrName: "preloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.GetPreloadObject$outVars", [{
name: "Preload",
attrName: "preloadOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.clientActionProxies.getPreloadObject$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.getPreloadObject$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Preload: OS.DataConversion.JSNodeParamConverter.to(actionResults.preloadOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("NavigationHandler.controller$GetPreloadObject.GetPreloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.dx && window.dx.Navigation && window.dx.Navigation.Storage) {
    $parameters.Preload = window.dx.Navigation.Storage.get("dx-preload") || $public.BuiltinFunctions.nullObject();
}
};
});

define("NavigationHandler.controller$IsNavigationToScreen", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$IsNavigationToScreen.CheckNavigationToScreenJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_IsNavigationToScreen_CheckNavigationToScreenJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.isNavigationToScreen$Action = function (navigationEventIn, screenNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.IsNavigationToScreen$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
vars.value.screenNameInLocal = screenNameIn;
var checkNavigationToScreenJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.IsNavigationToScreen$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkNavigationToScreenJSResult = checkNavigationToScreenJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:waHTpgS1zE+klYtwsPFNhg:/ClientActionFlows.waHTpgS1zE+klYtwsPFNhg:7YCI2IpLtfcgOFopMspORA", "NavigationHandler", "IsNavigationToScreen", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:C1LvErXKJUW45gEcgW+C2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:0O9fwaEAsUGorzGnWvDCpQ", callContext.id);
checkNavigationToScreenJSResult.value = controller.safeExecuteJSNode(NavigationHandler_controller_IsNavigationToScreen_CheckNavigationToScreenJS, "CheckNavigationToScreen", "IsNavigationToScreen", {
ModuleName: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.getEntryEspaceName(), OS.DataTypes.DataTypes.Text),
ScreenName: OS.DataConversion.JSNodeParamConverter.to(vars.value.screenNameInLocal, OS.DataTypes.DataTypes.Text),
NavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.navigationEventInLocal, OS.DataTypes.DataTypes.Object),
IsNavigationToScreen: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NavigationHandler.IsNavigationToScreen$checkNavigationToScreenJSResult"))();
jsNodeResult.isNavigationToScreenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsNavigationToScreen, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:O5CPT+7Cv02YMhVQ_dYs7w", callContext.id);
// IsNavigationToScreen = CheckNavigationToScreen.IsNavigationToScreen
outVars.value.isNavigationToScreenOut = checkNavigationToScreenJSResult.value.isNavigationToScreenOut;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:A6A4uYf9CUmutFYh6MmY6A", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:waHTpgS1zE+klYtwsPFNhg", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.IsNavigationToScreen$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "ScreenName",
attrName: "screenNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.IsNavigationToScreen$checkNavigationToScreenJSResult", [{
name: "IsNavigationToScreen",
attrName: "isNavigationToScreenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.IsNavigationToScreen$outVars", [{
name: "IsNavigationToScreen",
attrName: "isNavigationToScreenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.clientActionProxies.isNavigationToScreen$Action = function (navigationEventIn, screenNameIn) {
navigationEventIn = (navigationEventIn === undefined) ? null : navigationEventIn;
screenNameIn = (screenNameIn === undefined) ? "" : screenNameIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.isNavigationToScreen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(navigationEventIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(screenNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsNavigationToScreen: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNavigationToScreenOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("NavigationHandler.controller$IsNavigationToScreen.CheckNavigationToScreenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.NavigationEvent.detail.location) {
    var navigationPath = $parameters.NavigationEvent.detail.location.pathname;
    var screenPath = "/" + $parameters.ModuleName + "/" + $parameters.ScreenName;
    $parameters.IsNavigationToScreen = navigationPath == screenPath;
}
};
});

define("NavigationHandler.controller$LockScreenBackNavigationPriority", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.lockScreenBackNavigationPriority$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.LockScreenBackNavigationPriority$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:jeLizItDWUydHdFIa7Gheg:/ClientActionFlows.jeLizItDWUydHdFIa7Gheg:kjYFdHI0C_nip6YUwImKQw", "NavigationHandler", "LockScreenBackNavigationPriority", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:bKZ89ITuH0q0YRKikzKqVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:jL5IHLCW5UisxVRX2RLNLw", callContext.id);
// Priority = 100000
outVars.value.priorityOut = 100000;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:6f1PpNY2W0OZ6HON9TtTHQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:jeLizItDWUydHdFIa7Gheg", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.LockScreenBackNavigationPriority$outVars", [{
name: "Priority",
attrName: "priorityOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
NavigationHandlerController.default.clientActionProxies.lockScreenBackNavigationPriority$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.lockScreenBackNavigationPriority$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Priority: OS.DataConversion.JSNodeParamConverter.to(actionResults.priorityOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("NavigationHandler.controller$ModalBackNavigationPriority", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.modalBackNavigationPriority$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.ModalBackNavigationPriority$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:VpNqYiBC10+BOC7OrLsotw:/ClientActionFlows.VpNqYiBC10+BOC7OrLsotw:9LfWrIBMj2vYAMiKa6lb2w", "NavigationHandler", "ModalBackNavigationPriority", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:hwHh2Ek2A02olrLkiZggTw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:BMNNJygxgk6N8D6xvIQTMQ", callContext.id);
// Priority = 10000
outVars.value.priorityOut = 10000;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:bbiozJpcska_YaY28Dn6mA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:VpNqYiBC10+BOC7OrLsotw", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.ModalBackNavigationPriority$outVars", [{
name: "Priority",
attrName: "priorityOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
NavigationHandlerController.default.clientActionProxies.modalBackNavigationPriority$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.modalBackNavigationPriority$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Priority: OS.DataConversion.JSNodeParamConverter.to(actionResults.priorityOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("NavigationHandler.controller$OnApplicationReady_NavigationHandler", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$OnApplicationReady_NavigationHandler.NavigationEventsJS", "NavigationHandler.controller$OnApplicationReady_NavigationHandler.ScrollAnchorsJS", "NavigationHandler.controller$OnApplicationReady_NavigationHandler.PreloadingJS", "NavigationHandler.controller$OnApplicationReady_NavigationHandler.NavigationDataStorageJS", "NavigationHandler.controller$OnApplicationReady_NavigationHandler.UtilitiesJS", "NavigationHandler.controller$OnApplicationReady_NavigationHandler.TransitionEventsJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_OnApplicationReady_NavigationHandler_NavigationEventsJS, NavigationHandler_controller_OnApplicationReady_NavigationHandler_ScrollAnchorsJS, NavigationHandler_controller_OnApplicationReady_NavigationHandler_PreloadingJS, NavigationHandler_controller_OnApplicationReady_NavigationHandler_NavigationDataStorageJS, NavigationHandler_controller_OnApplicationReady_NavigationHandler_UtilitiesJS, NavigationHandler_controller_OnApplicationReady_NavigationHandler_TransitionEventsJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.onApplicationReady_NavigationHandler$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:KKxNRy56lEKLyueVzzTCww:/ClientActionFlows.KKxNRy56lEKLyueVzzTCww:zdREmy8HmhPU5yPpeV69uw", "NavigationHandler", "OnApplicationReady_NavigationHandler", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:9nWr+Wvb3UqlZ8lhXHCzsg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:25QX0XHKKEChGfIfXmo8Xg", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_OnApplicationReady_NavigationHandler_UtilitiesJS, "Utilities", "OnApplicationReady_NavigationHandler", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:WOiXB6LOPEemWXOY7OTNrg", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_OnApplicationReady_NavigationHandler_NavigationEventsJS, "NavigationEvents", "OnApplicationReady_NavigationHandler", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:VKZ31dob7kOzvsDrLUATsA", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_OnApplicationReady_NavigationHandler_TransitionEventsJS, "TransitionEvents", "OnApplicationReady_NavigationHandler", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:LMUbom57ykOebBG0p+iChw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_OnApplicationReady_NavigationHandler_NavigationDataStorageJS, "NavigationDataStorage", "OnApplicationReady_NavigationHandler", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:yLi5E0DsLUK9NLoG5hb5Qw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_OnApplicationReady_NavigationHandler_ScrollAnchorsJS, "ScrollAnchors", "OnApplicationReady_NavigationHandler", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:iCprauSHD0mofUSHqqLgnw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_OnApplicationReady_NavigationHandler_PreloadingJS, "Preloading", "OnApplicationReady_NavigationHandler", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:WbgxzbwXy0KzgZ_bc9TKmw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:KKxNRy56lEKLyueVzzTCww", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.clientActionProxies.onApplicationReady_NavigationHandler$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.onApplicationReady_NavigationHandler$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$OnApplicationReady_NavigationHandler.NavigationEventsJS", [], function () {
return function ($actions, $roles, $public) {
/*
 * ====================
 * Defines the events dx-before-back-navigation, dx-before-navigation, dx-navigation,
 * which are the building blocks for BackNavigationHandler and NavigationHandler blocks.
 */
window.require(["OutSystems/ClientRuntime/Navigation", "OutSystems/ReactWidgets/Link"], function(Navigation, LinkModule) {



// Namespace window.dx.Navigation
window.dx.Navigation = window.dx.Navigation || {};


// Reference to a screen that is being navigated away from
var navigatingAwayFromScreen;

// Reference to a screen that will be navigated away from, and we must
// skip the dx-before-back-navigation and dx-before-navigation events
var skipEventsFromScreen;

// Reference to a screen that will be replaced in the navigation history
var replaceNavigationFromScreen;

// Mutation observer to clear the global references above after the navigation
var screenMutationObserver = new MutationObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
        for (const removedNode of entries[i].removedNodes) {
            if (removedNode == navigatingAwayFromScreen) {
                navigatingAwayFromScreen = null;
            }
            if (removedNode == skipEventsFromScreen) {
                skipEventsFromScreen = null;
            }
            if (removedNode == replaceNavigationFromScreen) {
                replaceNavigationFromScreen = null;
            }
        }
    }
});





var dispatchBeforeBackNavigation = function(location) {
    var navigationEvent = new CustomEvent("dx-before-back-navigation", {
        cancelable: true,
        detail: {
            location: location, 
            resume: function() {
                // Flag that we're resuming the navigation
                window.dx.Navigation.allowUpcomingNavigation();

                window.history.back();
            },
            isInitialLocation: function() {
                return this.location.state === null || this.location.state.age === 0;
            }
        }
    });

    return window.dx.Util.withSynchronousBlockEvents(function() {
        window.dispatchEvent(navigationEvent);
        return navigationEvent;
    });
};


var dispatchBeforeNavigation = function(location, isBackNavigation, isReplace) {
    var navigationEvent = new CustomEvent("dx-before-navigation", {
        cancelable: true,
        detail: {
            location: location,
            replace: isReplace,
            resume: function() {
                // Flag that we're resuming the navigation
                window.dx.Navigation.allowUpcomingNavigation();

                if (isBackNavigation) {
                    window.history.back();
                } else {
                    Navigation.navigateTo(this.location.pathname + this.location.search, this.location.state.transition, /* callContext */ null, /* interruptExecution */ false, this.replace);
                }
            }
        }
    });

    return window.dx.Util.withSynchronousBlockEvents(function() {
        window.dispatchEvent(navigationEvent);
        return navigationEvent;
    });
};


var dispatchNavigation = function(location) {
    var navigationEvent = new CustomEvent("dx-navigation", {
        cancelable: false,
        detail: {
            location: location
        }
    });

    return window.dx.Util.withSynchronousBlockEvents(function() {
        window.dispatchEvent(navigationEvent);
        return navigationEvent;
    });
};



// Handle navigations within the same module
var onBeforeNavigate = Navigation.onBeforeNavigate;
Navigation.onBeforeNavigate = function(nextLocation, isBackNavigation) {
    var isHistoryNavigation = nextLocation.action == "POP";
    var isNavigatingAway = navigatingAwayFromScreen && navigatingAwayFromScreen.parentNode || !window.dx.Util.getActiveScreen();    
    if (isHistoryNavigation && isNavigatingAway) {
        // Block any history navigation if we're expecting to navigate away from
        // the current screen, to give time for the OnInitialize of the
        // new screen to execute, and time for the OnDestroy of the
        // old screen to execute.
        // Also block history navigation if there's no active screen in the document.
        // This can happen temporarily in rare occasions if a user taps too quickly
        // on the back/forward button of the device.
        return false;
    }

    
    var skipEvents = skipEventsFromScreen && skipEventsFromScreen.parentNode;
    var isReplace = replaceNavigationFromScreen && replaceNavigationFromScreen.parentNode;
    if (!skipEvents) {
        if (isBackNavigation) {
            var beforeBackNavigationEvent = dispatchBeforeBackNavigation(nextLocation);
            if (beforeBackNavigationEvent.defaultPrevented) {
                return false;
            }
        }

        var beforeNavigationEvent = dispatchBeforeNavigation(nextLocation, isBackNavigation, isReplace);
        if (beforeNavigationEvent.defaultPrevented) {
            return false;
        }
    }

    var navigating = onBeforeNavigate.call(this, nextLocation, isBackNavigation);
    if (navigating) {
        navigatingAwayFromScreen = window.dx.Util.getActiveScreen();
        if (navigatingAwayFromScreen && navigatingAwayFromScreen.parentNode) {
            screenMutationObserver.observe(navigatingAwayFromScreen.parentNode, { childList: true });
        }
        dispatchNavigation(nextLocation);
    }
    
    return navigating;
};


var urlInfoToLocation = function(urlInfo) {
    var search = new URLSearchParams(urlInfo.queryParams).toString();
    return {
        action: "PUSH",
        pathname: urlInfo.path,
        search: (search? "?" + search : ""),
        hash: urlInfo.hash || "",
        state: {}
    };
};


// Handle navigations to external modules
var navigateTo = Navigation.navigateTo;
Navigation.navigateTo = function(url, transition, callContext, interruptExecution, replace) {
    var skipEvents = skipEventsFromScreen && skipEventsFromScreen.parentNode;
    var isReplace = replace || replaceNavigationFromScreen && replaceNavigationFromScreen.parentNode;
    var urlInfo = Navigation.getUrlInfo(url);

    if (urlInfo.isInternal || skipEvents) {
        return navigateTo.call(this, url, transition, callContext, interruptExecution, isReplace);
    }

    var beforeNavigationEvent = dispatchBeforeNavigation(urlInfoToLocation(urlInfo), false, isReplace);
    if (!beforeNavigationEvent.defaultPrevented) {
        return navigateTo.call(this, url, transition, callContext, interruptExecution, isReplace);
    }
};


// Handle navigations to external modules from links
var Link = LinkModule.Link;
var linkRender = Link.prototype.render;
Link.prototype.render = function() {
    if (this.props.url) {
        var urlInfo = Navigation.getUrlInfo(this.props.url);

        if (!urlInfo.isInternal) {
            var handleClickForUrl = this.handleClickForUrl;
            this.handleClickForUrl = function(evt) {
                handleClickForUrl.call(this, evt);

                var beforeNavigationEvent = dispatchBeforeNavigation(urlInfoToLocation(urlInfo), false, false);
                if (beforeNavigationEvent.defaultPrevented) {
                    evt.preventDefault();
                }
            };
        }
    }

    return linkRender.call(this);
};


window.dx.Navigation.willNavigate = function(resolve) {
    // Simulates a navigation to check if it will be prevented
    var navigationEvent = new CustomEvent("dx-before-navigation", {
        cancelable: true,
        detail: {
            // When resuming this event, we want to simply continue execution
            resume: function() {
                resolve(navigationEvent);
            }
        }
    });

    window.dx.Util.withSynchronousBlockEvents(function() {
        window.dispatchEvent(navigationEvent);
    });


    // If the event was not prevented, then resume it immediately
    if (!navigationEvent.defaultPrevented) {
        navigationEvent.detail.resume();
    }
};



// Allows the next navigation to execute without
// triggering any navigation handlers.
window.dx.Navigation.allowUpcomingNavigation = function() {
    skipEventsFromScreen = window.dx.Util.getActiveScreen();
};


// Replaces the current screen in the navigation history
window.dx.Navigation.replaceOnUpcomingNavigation = function() {
    replaceNavigationFromScreen = window.dx.Util.getActiveScreen();
};

window.dx.Navigation.resetReplaceOnUpcomingNavigation = function() {
    replaceNavigationFromScreen = null;
};


});
};
});
define("NavigationHandler.controller$OnApplicationReady_NavigationHandler.ScrollAnchorsJS", [], function () {
return function ($actions, $roles, $public) {
/*
 * ====================
 * Handles using scroll anchors to allow a back navigation,
 * which are the building blocks for BackNavigationHandler and NavigationHandler blocks.
 */
window.require(["OutSystems/ReactWidgets/List", "OutSystems/ReactWidgets/Container"], function(ListModule, ContainerModule) {



var List = ListModule.List;
var listSerializeCustomStateProperties = List.prototype.serializeCustomStateProperties;
var listLoadCustomStateProperties = List.prototype.loadCustomStateProperties;

List.prototype.serializeCustomStateProperties = function() {
    var customProperties = listSerializeCustomStateProperties.call(this);

    var scrollViewer = this.getScrollViewer();
    if (scrollViewer) {
        customProperties.dxLeftScrollViewerState = scrollViewer.state;
    }

    var component = (scrollViewer || this);
    if (component.dxLeavingScrollAnchor) {
        customProperties.dxLeftScrollAnchor = component.dxLeavingScrollAnchor;
    }

    return customProperties;
};

List.prototype.loadCustomStateProperties = function(customProperties) {
    var leftScrollViewerState = customProperties.dxLeftScrollViewerState? customProperties.dxLeftScrollViewerState : null;
    var leftScrollAnchor = customProperties.dxLeftScrollAnchor? customProperties.dxLeftScrollAnchor : null;
    var enteringScrollAnchor = window.dx.Navigation.Storage? window.dx.Navigation.Storage.get("dx-entering-scroll-anchor") : null;

    var deltaIndex = leftScrollAnchor && enteringScrollAnchor? enteringScrollAnchor.index - leftScrollAnchor.index : 0;
    var deltaOffset = leftScrollViewerState? deltaIndex * leftScrollViewerState.averageItemSize : 0;

    var scrollHost = this.getScrollHostInfo().scrollHost;
    var scrollViewer = this.getScrollViewer();

    var updatedScrollHost = window.dx.Navigation.Storage? window.dx.Navigation.Storage.get("dx-entering-scroll-anchor-host") : null;
    if (scrollHost === updatedScrollHost) {
        /* Make sure only one list can update the same scroll host */
        return;
    }

    if (scrollViewer && leftScrollViewerState) {
        /* Virtualized lists should use the deltaIndex to calculate the new scroll position */
        if (deltaIndex != 0) {
            var newState = leftScrollViewerState;

            var newFirstRenderedItem = Math.max(0, newState.firstRenderedItemIndex + deltaIndex);
            var newLastRenderedItemIndex = Math.min(newState.lastRenderedItemIndex + deltaIndex, scrollViewer.props.length - 1);

            var firstRenderedItemDelta = newFirstRenderedItem - newState.firstRenderedItemIndex;
            var lastRenderedItemDelta = newLastRenderedItemIndex - newState.lastRenderedItemIndex;
            var effectiveDeltaIndex = Math.sign(deltaIndex) * Math.min(Math.abs(firstRenderedItemDelta), Math.abs(lastRenderedItemDelta));

            newState.firstRenderedItemIndex = newState.firstRenderedItemIndex + effectiveDeltaIndex;
            newState.lastRenderedItemIndex = newState.lastRenderedItemIndex + effectiveDeltaIndex;
            newState.effectiveScrollOffset += deltaOffset;
            newState.scrollOffset = (newState.firstRenderedItemIndex + newState.offScreenItemsCount) * newState.averageItemSize;

            customProperties.top = newState.effectiveScrollOffset;
            scrollViewer.setState(newState);
            
            window.dx.Navigation.Storage = window.dx.Navigation.Storage || new Map();
            window.dx.Navigation.Storage.set("dx-entering-scroll-anchor-host", scrollHost);
        }
    } else if (leftScrollAnchor && enteringScrollAnchor) {
        /* Non-virtualized lists should look up the anchor by id for a more precise scroll position calculation */
        var newAnchor = this.ref.current.querySelector("[data-dx-scroll-anchor-id='" + window.CSS.escape(enteringScrollAnchor.id) + "']");
        if (newAnchor) {
            customProperties.top += newAnchor.offsetTop - leftScrollAnchor.offsetTop;
        } else {
            customProperties.top += deltaOffset;
        }

        window.dx.Navigation.Storage = window.dx.Navigation.Storage || new Map();
        window.dx.Navigation.Storage.set("dx-entering-scroll-anchor-host", scrollHost);
    }

    listLoadCustomStateProperties.call(this, customProperties);
};


var Container = ContainerModule.Container;
var containerloadCustomStateProperties = Container.prototype.loadCustomStateProperties;

Container.prototype.loadCustomStateProperties = function(customProperties) {
    var container = this.ref.current;
    var updatedScrollHost = window.dx.Navigation.Storage? window.dx.Navigation.Storage.get("dx-entering-scroll-anchor-host") : null;
    if (container === updatedScrollHost) {
        return;
    }

    containerloadCustomStateProperties.call(this, customProperties);
};



});
};
});
define("NavigationHandler.controller$OnApplicationReady_NavigationHandler.PreloadingJS", [], function () {
return function ($actions, $roles, $public) {
/*
 * ====================
 * Handles custom restore of list data sources scroll anchors to allow a back navigation,
 * which are the building blocks for BackNavigationHandler and NavigationHandler blocks.
 */
window.require(["OutSystems/ReactWidgets/List"], function(ListModule) {



var List = ListModule.List;
var render = List.prototype.render;

List.prototype.render = function() {
    if (this.props.extendedEvents && this.props.extendedEvents["dx-preload-list-source"] && this.shouldLoadState && !this.dxHasRendered) {
        var preloadEventHandler = this.props.extendedEvents["dx-preload-list-source"];
        window.dx.Navigation.Storage = window.dx.Navigation.Storage || new Map();

        var model = this.props.source;
        var propagationKeys = [];
        while (model.propagationParent !== model) {
            propagationKeys.splice(0, 0, model.propagationKey);
            model = model.propagationParent;
        }


        this.dxHasRendered = true;
        preloadEventHandler();

        var newSource = model;
        for (var i = 0; i < propagationKeys.length; i++) {
            newSource = newSource[propagationKeys[i]];
        }

        if (this.props.source !== newSource) {
            this.props.source = newSource;
        }
    }

    this.dxHasRendered = true;
    return render.call(this);
};


var shouldComponentUpdate = List.prototype.shouldComponentUpdate;
List.prototype.shouldComponentUpdate = function(nextProps, nextState, nextContext) {
    if (this.props.extendedEvents && this.props.extendedEvents["dx-preload-list-source"] && this.shouldLoadState && this.dxHasRendered && !this.dxHasAvoidedDoubleRendering) {
        this.dxHasAvoidedDoubleRendering = true;
        return false;
    } else {
        return shouldComponentUpdate.call(this, nextProps, nextState, nextContext);
    }
};


});
};
});
define("NavigationHandler.controller$OnApplicationReady_NavigationHandler.NavigationDataStorageJS", [], function () {
return function ($actions, $roles, $public) {
/*
 * ====================
 * Defines a global map window.dx.Navigation.Storage which is only available during a navigation,
 * and can be used to efficiently propagate large objects between screens.
 */
window.require(["OutSystems/ReactView/BaseView"], function(BaseViewModule) {



// Deletes window.dx.Navigation.Storage after the OnInitialize event has executed
var BaseWebScreen = BaseViewModule.BaseWebScreen;
var componentDidMount = BaseWebScreen.prototype.componentDidMount;
BaseWebScreen.prototype.componentDidMount = function() {
    delete window.dx.Navigation.Storage;
    componentDidMount.call(this);
};



});
};
});
define("NavigationHandler.controller$OnApplicationReady_NavigationHandler.UtilitiesJS", [], function () {
return function ($actions, $roles, $public) {
/*
 * ====================
 * Defines global utility functions to ease of access by multiple javascript components.
 */


// Namespace window.dx.Util
window.dx = window.dx || {};
window.dx.Util = window.dx.Util || {};



// Retrieves the active screen element
window.dx.Util.getActiveScreen = function() {
    var screens = document.querySelectorAll("#reactContainer > div > .screen-container");
    if (screens.length > 0) {
        return screens[screens.length - 1];
    } else {
        return null;
    }
};

// Retrieves the react component from the corresponding DOM node
window.dx.Util.getReactComponent = function(node) {
    for (var key in node) {
        if (key.startsWith("__reactInternalInstance$")) {
            return node[key].return.stateNode;
        }
    }
};

// Resolves promises immediately (not asynchronously),
// to force block events being triggered synchronously through javascript
window.dx.Util.withSynchronousBlockEvents = function(callback) {
    var resolveImmediate = function(value) {
        return {
            then: function(onFulfilled) {
                return onFulfilled(value);
            }
        };
    };
    
    var promiseResolve = window.Promise.resolve;
    window.Promise.resolve = resolveImmediate;
    try {
        return callback();
    } finally {
        window.Promise.resolve = promiseResolve;
    }
};
};
});
define("NavigationHandler.controller$OnApplicationReady_NavigationHandler.TransitionEventsJS", [], function () {
return function ($actions, $roles, $public) {
/*
 * ====================
 * Defines the events dx-navigation-transition-start, dx-navigation-transition-end
 * which can be used to intercept screen transitions.
 */
window.require(["react-transition-group", "OutSystems/ReactView/Root"], function(ReactTransitionGroup, RootModule) {

// Transition events
var dispatchTransitionStart = function(detail) {
    var transitionEvent = new CustomEvent("dx-navigation-transition-start", {
        cancelable: false,
        detail: detail
    });
    
    window.dx.Util.withSynchronousBlockEvents(function() {
        window.dispatchEvent(transitionEvent);
    });
};

var dispatchTransitionEnd = function(detail) {
    var transitionEvent = new CustomEvent("dx-navigation-transition-end", {
        cancelable: false,
        detail: detail
    });
        
    window.dx.Util.withSynchronousBlockEvents(function() {
        window.dispatchEvent(transitionEvent);
    });
};


var getComputedTransitionDuration = function(el) {
    var duration = window.getComputedStyle(el).getPropertyValue("--dx-screen-transition-duration");
    if (duration) {
        return duration.endsWith("ms")? window.parseFloat(duration) : duration.endsWith("s")? window.parseFloat(duration) * 1000 : 0;
    }
};


const Transition = ReactTransitionGroup.Transition;

const wrapEnteringCallback = function(obj, callback) {
    return function(evt) {
        // When the ENTERING callback is called, it first invokes obj.props.onEntering with the maybeNode,
        // and then invokes obj.onTransitionEnd with the timeout value and a callback to set ENTERED state.

        // Mock obj.props to capture maybeNode
        let capturedMaybeNode;
        const props = obj.props;
        obj.props = {
            onEntering: function(maybeNode, maybeAppearing) {
                obj.props = props;

                capturedMaybeNode = maybeNode;
                return obj.props.onEntering(maybeNode, maybeAppearing);
            }
        };


        // Mock obj.onTransitionEnd to dispatch a transition-start event
        const onTransitionEnd = obj.onTransitionEnd;
        obj.onTransitionEnd = function(timeout, handler) {
            obj.onTransitionEnd = onTransitionEnd;

            if (capturedMaybeNode.matches(".screen-container")) {
                const duration = getComputedTransitionDuration(capturedMaybeNode) || timeout;

                dispatchTransitionStart({
                    from: capturedMaybeNode.nextElementSibling,
                    to: capturedMaybeNode,
                    duration: duration
                });
                
                return obj.onTransitionEnd(duration, handler);
            }

            return obj.onTransitionEnd(timeout, handler);
        };


        // This will invoke the two mocks above in sequence
        callback(evt);
    };
};


const wrapOnExitedHandler = function(obj, maybeNode, duration, handler) {
    return function() {
        // When the handler is invoked, it will call obj.safeSetState with EXITED and a callback to
        // remove the CSS classes.

        // Mock obj.safeSetState
        const safeSetState = obj.safeSetState;
        obj.safeSetState = function(nextState, callback) {
            obj.safeSetState = safeSetState;

            // Invoke safeSetState, but wrap the callback so that the transition-end event
            // is dispatched just before the CSS classes are removed
            obj.safeSetState(nextState, function(evt) {
                dispatchTransitionEnd({
                    from: maybeNode,
                    to: maybeNode.previousElementSibling,
                    duration: duration
                });

                callback(evt);
            });
        };

        // This will invoke the mock above
        handler();
    };
};


const wrapExitingCallback = function(obj, callback) {
    return function(evt) {
        // When the EXITING callback is called, it first invokes obj.props.onExiting with the maybeNode,
        // and then invokes obj.onTransitionEnd with the timeout value and a callback to set EXITED state.

        // Mock obj.props to capture maybeNode
        let capturedMaybeNode;
        const props = obj.props;
        obj.props = {
            onExiting: function(maybeNode) {
                obj.props = props;

                capturedMaybeNode = maybeNode;
                return obj.props.onExiting(maybeNode);
            }
        };


        // Mock obj.onTransitionEnd to use a dynamic timeout value if needed
        const onTransitionEnd = obj.onTransitionEnd;
        obj.onTransitionEnd = function(timeout, handler) {
            obj.onTransitionEnd = onTransitionEnd;

            if (capturedMaybeNode.matches(".screen-container")) {
                const duration = getComputedTransitionDuration(capturedMaybeNode) || timeout;

                return obj.onTransitionEnd(duration, wrapOnExitedHandler(obj, capturedMaybeNode, duration, handler));
            }

            return obj.onTransitionEnd(timeout, handler);
        };


        // This will invoke the two mocks above in sequence
        callback(evt);
    };
};

    
const safeSetState = Transition.prototype.safeSetState;
Transition.prototype.safeSetState = function(nextState, callback) {
    if (nextState.status == "entering") {
        return safeSetState.call(this, nextState, wrapEnteringCallback(this, callback));
    }

    if (nextState.status == "exiting") {
        return safeSetState.call(this, nextState, wrapExitingCallback(this, callback));
    }

    return safeSetState.call(this, nextState, callback);
};




var Root = RootModule.default;    

var transitionContainer = document.getElementById("transitionContainer");
if (!transitionContainer) {
    var Root = RootModule.default;    

    // Fire a special dx-navigation-transition-start and dx-navigation-transition-end
    // when the first screen is loaded
    var dispatchFirstTransition = function(transitionContainer) {
        var detail = {
            from: null,
            to: transitionContainer.firstChild,
            duration: 0
        };

        dispatchTransitionStart(detail);
        dispatchTransitionEnd(detail);
    };

    // Intercept the next call to Root's render method
    var render = Root.prototype.render;
    Root.prototype.render = function() {
        Root.prototype.render = render;

        Promise.resolve().then(function() {
            dispatchFirstTransition(document.getElementById("transitionContainer"));
        });

        return this.render();
    };
}



});
};
});

define("NavigationHandler.controller$PreventNavigation", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$PreventNavigation.PreventDefaultJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_PreventNavigation_PreventDefaultJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.preventNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.PreventNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:gvwTtg5qhk6tmidjYaLjlA:/ClientActionFlows.gvwTtg5qhk6tmidjYaLjlA:KWybW1k8cxwpAXsonB+SHw", "NavigationHandler", "PreventNavigation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:_uwfRZrjPEmvl8fDlO6zKg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:EHQn24Z0Y0GqRwYdaYpucw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_PreventNavigation_PreventDefaultJS, "PreventDefault", "PreventNavigation", {
NavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.navigationEventInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:1SqAcXo7Dkei6ymqJdVWnw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:gvwTtg5qhk6tmidjYaLjlA", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.PreventNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.clientActionProxies.preventNavigation$Action = function (navigationEventIn) {
navigationEventIn = (navigationEventIn === undefined) ? null : navigationEventIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.preventNavigation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(navigationEventIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$PreventNavigation.PreventDefaultJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.NavigationEvent.stopPropagation();
$parameters.NavigationEvent.preventDefault();
};
});

define("NavigationHandler.controller$RememberFocusedScrollAnchor", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$RememberFocusedScrollAnchor.SetScrollAnchorOnComponentPropertiesJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_RememberFocusedScrollAnchor_SetScrollAnchorOnComponentPropertiesJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.rememberFocusedScrollAnchor$Action = function (listWidgetIdIn, listIndexIn, scrollAnchorIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.RememberFocusedScrollAnchor$vars"))());
vars.value.listWidgetIdInLocal = listWidgetIdIn;
vars.value.listIndexInLocal = listIndexIn;
vars.value.scrollAnchorIdInLocal = scrollAnchorIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:N5o_+AjepUG2Qn0uFKbzQA:/ClientActionFlows.N5o_+AjepUG2Qn0uFKbzQA:bMvnWcAbhgmax4qDRCSFEg", "NavigationHandler", "RememberFocusedScrollAnchor", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Howln7kSDk60+Lt9tCymog", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:x5nj7_rqL0aAkR2Tk0xUhg", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_RememberFocusedScrollAnchor_SetScrollAnchorOnComponentPropertiesJS, "SetScrollAnchorOnComponentProperties", "RememberFocusedScrollAnchor", {
ListWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.listWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
ScrollAnchorId: OS.DataConversion.JSNodeParamConverter.to(vars.value.scrollAnchorIdInLocal, OS.DataTypes.DataTypes.Text),
ListIndex: OS.DataConversion.JSNodeParamConverter.to(vars.value.listIndexInLocal, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Q400+sf0QkSP7_Rt+9jDoQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:N5o_+AjepUG2Qn0uFKbzQA", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.RememberFocusedScrollAnchor$vars", [{
name: "ListWidgetId",
attrName: "listWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ListIndex",
attrName: "listIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ScrollAnchorId",
attrName: "scrollAnchorIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NavigationHandlerController.default.clientActionProxies.rememberFocusedScrollAnchor$Action = function (listWidgetIdIn, listIndexIn, scrollAnchorIdIn) {
listWidgetIdIn = (listWidgetIdIn === undefined) ? "" : listWidgetIdIn;
listIndexIn = (listIndexIn === undefined) ? 0 : listIndexIn;
scrollAnchorIdIn = (scrollAnchorIdIn === undefined) ? "" : scrollAnchorIdIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.rememberFocusedScrollAnchor$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(listIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(scrollAnchorIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$RememberFocusedScrollAnchor.SetScrollAnchorOnComponentPropertiesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var list = document.getElementById($parameters.ListWidgetId);
if (list && window.dx && window.dx.Util) {
    var listComponent = window.dx.Util.getReactComponent(list);
    var anchor = list.querySelector("[data-dx-scroll-anchor-id='" + window.CSS.escape($parameters.ScrollAnchorId) + "']");

    if (anchor) {
        listComponent.dxLeavingScrollAnchor = {
            index: $parameters.ListIndex,
            offsetTop: anchor.offsetTop
        };
    }
}
};
});

define("NavigationHandler.controller$ReplaceOnUpcomingNavigation", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$ReplaceOnUpcomingNavigation.AllowUpcomingNavigationJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_ReplaceOnUpcomingNavigation_AllowUpcomingNavigationJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:IuRFSBOJVUGgu1V59KfmIQ:/ClientActionFlows.IuRFSBOJVUGgu1V59KfmIQ:Re_yodSu+zn25qkanIUi2w", "NavigationHandler", "ReplaceOnUpcomingNavigation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:7TCix55YREK7T7CvJWzSuw", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:tbJGflytkUakrcfR8KRRhw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_ReplaceOnUpcomingNavigation_AllowUpcomingNavigationJS, "AllowUpcomingNavigation", "ReplaceOnUpcomingNavigation", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:nIzomwRME02uanFMFwoLYQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:IuRFSBOJVUGgu1V59KfmIQ", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.clientActionProxies.replaceOnUpcomingNavigation$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.replaceOnUpcomingNavigation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$ReplaceOnUpcomingNavigation.AllowUpcomingNavigationJS", [], function () {
return function ($actions, $roles, $public) {
window.dx.Navigation.replaceOnUpcomingNavigation();
};
});

define("NavigationHandler.controller$ResetReplaceOnUpcomingNavigation", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$ResetReplaceOnUpcomingNavigation.ResetReplaceOnUpcomingNavigationJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_ResetReplaceOnUpcomingNavigation_ResetReplaceOnUpcomingNavigationJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.resetReplaceOnUpcomingNavigation$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var resetReplaceOnUpcomingNavigationJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.resetReplaceOnUpcomingNavigationJSResult = resetReplaceOnUpcomingNavigationJSResult;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:kCK4Ah+7vk2jyr_2UQqKtg:/ClientActionFlows.kCK4Ah+7vk2jyr_2UQqKtg:ZZy9PBFdg6Gkcdl9AtqxUw", "NavigationHandler", "ResetReplaceOnUpcomingNavigation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:BgUfBYA1Hky0fm+tAiOIKg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:QBc+pFnTLU+zCVsxA4e48w", callContext.id);
resetReplaceOnUpcomingNavigationJSResult.value = controller.safeExecuteJSNode(NavigationHandler_controller_ResetReplaceOnUpcomingNavigation_ResetReplaceOnUpcomingNavigationJS, "ResetReplaceOnUpcomingNavigation", "ResetReplaceOnUpcomingNavigation", {
IsReset: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NavigationHandler.ResetReplaceOnUpcomingNavigation$resetReplaceOnUpcomingNavigationJSResult"))();
jsNodeResult.isResetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsReset, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:aKpzqCzTQkWO1Z1RArqKPg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:kCK4Ah+7vk2jyr_2UQqKtg", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.ResetReplaceOnUpcomingNavigation$resetReplaceOnUpcomingNavigationJSResult", [{
name: "IsReset",
attrName: "isResetOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.clientActionProxies.resetReplaceOnUpcomingNavigation$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.resetReplaceOnUpcomingNavigation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$ResetReplaceOnUpcomingNavigation.ResetReplaceOnUpcomingNavigationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window.dx && window.dx.Navigation && window.dx.Navigation.resetReplaceOnUpcomingNavigation){
    window.dx.Navigation.resetReplaceOnUpcomingNavigation();
}
};
});

define("NavigationHandler.controller$ResumeNavigation", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$ResumeNavigation.ResumeJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_ResumeNavigation_ResumeJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.resumeNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.ResumeNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:GQ+hgYpF40KL7sTrrp9KPA:/ClientActionFlows.GQ+hgYpF40KL7sTrrp9KPA:2_fPzPkTo1XORxx0xXWQEw", "NavigationHandler", "ResumeNavigation", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:QLG2lsw590SLekisNBmiKA", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:d8QOICE9rU+VGM6VPzAuuQ", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_ResumeNavigation_ResumeJS, "Resume", "ResumeNavigation", {
NavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.navigationEventInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:Al6bpJMaokekwFLnfbfTHA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:GQ+hgYpF40KL7sTrrp9KPA", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.ResumeNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.clientActionProxies.resumeNavigation$Action = function (navigationEventIn) {
navigationEventIn = (navigationEventIn === undefined) ? null : navigationEventIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.resumeNavigation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(navigationEventIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$ResumeNavigation.ResumeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.NavigationEvent.detail.resume();
};
});

define("NavigationHandler.controller$SetPreloadObject", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$SetPreloadObject.SetPreloadJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_SetPreloadObject_SetPreloadJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.setPreloadObject$Action = function (preloadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.SetPreloadObject$vars"))());
vars.value.preloadInLocal = preloadIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:+rnuuwlHmEiExaViEj4s9A:/ClientActionFlows.+rnuuwlHmEiExaViEj4s9A:A6TpVAbR_Y_ar7tzK8aNDw", "NavigationHandler", "SetPreloadObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:5rL85bEA4U2LZhafHtawiQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:UZYIqYoOjEavY9o7FfRP9g", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_SetPreloadObject_SetPreloadJS, "SetPreload", "SetPreloadObject", {
Preload: OS.DataConversion.JSNodeParamConverter.to(vars.value.preloadInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:UYo4CxFZz0K31Vcd_GzLFg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:+rnuuwlHmEiExaViEj4s9A", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.SetPreloadObject$vars", [{
name: "Preload",
attrName: "preloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.clientActionProxies.setPreloadObject$Action = function (preloadIn) {
preloadIn = (preloadIn === undefined) ? null : preloadIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.setPreloadObject$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(preloadIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$SetPreloadObject.SetPreloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.dx = window.dx || {};
window.dx.Navigation = window.dx.Navigation || {};
window.dx.Navigation.Storage = window.dx.Navigation.Storage || new Map();

if ($parameters.Preload) {
    window.dx.Navigation.Storage.set("dx-preload", $parameters.Preload);
}
};
});

define("NavigationHandler.controller$StabilizeFocusedScrollAnchor", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$StabilizeFocusedScrollAnchor.StabilizeJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_StabilizeFocusedScrollAnchor_StabilizeJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.stabilizeFocusedScrollAnchor$Action = function (listWidgetIdIn, scrollAnchorIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.StabilizeFocusedScrollAnchor$vars"))());
vars.value.listWidgetIdInLocal = listWidgetIdIn;
vars.value.scrollAnchorIdInLocal = scrollAnchorIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:2K0r_meB3keoVZrxetrE9Q:/ClientActionFlows.2K0r_meB3keoVZrxetrE9Q:UWBcPOcWc6lxcSIqC8TbXg", "NavigationHandler", "StabilizeFocusedScrollAnchor", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:GFNt8Xo6mE+dD34Ovm_MrQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:dZZ3ElZYQk6XG7v1TVBwiw", callContext.id);
controller.safeExecuteJSNode(NavigationHandler_controller_StabilizeFocusedScrollAnchor_StabilizeJS, "Stabilize", "StabilizeFocusedScrollAnchor", {
ListWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.listWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
ScrollAnchorId: OS.DataConversion.JSNodeParamConverter.to(vars.value.scrollAnchorIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:CMWQpv1MrUqU1uYPWOHV9w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:2K0r_meB3keoVZrxetrE9Q", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.StabilizeFocusedScrollAnchor$vars", [{
name: "ListWidgetId",
attrName: "listWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ScrollAnchorId",
attrName: "scrollAnchorIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
NavigationHandlerController.default.clientActionProxies.stabilizeFocusedScrollAnchor$Action = function (listWidgetIdIn, scrollAnchorIdIn) {
listWidgetIdIn = (listWidgetIdIn === undefined) ? "" : listWidgetIdIn;
scrollAnchorIdIn = (scrollAnchorIdIn === undefined) ? "" : scrollAnchorIdIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.stabilizeFocusedScrollAnchor$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(scrollAnchorIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$StabilizeFocusedScrollAnchor.StabilizeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var list = document.getElementById($parameters.ListWidgetId);
var listComponent = window.dx.Util.getReactComponent(list);

var previousAnchor = list.querySelector("[data-dx-scroll-anchor-id='" + CSS.escape($parameters.ScrollAnchorId) + "']");
if (previousAnchor) {
    var previousOffsetTop = previousAnchor.offsetTop;

    window.requestAnimationFrame(function() {
        var newAnchor = list.querySelector("[data-dx-scroll-anchor-id='" + CSS.escape($parameters.ScrollAnchorId) + "']");
        if (newAnchor) {
            var delta = newAnchor.offsetTop - previousOffsetTop;
            listComponent.scrollHostInfo.scrollHost.scrollTop += delta;
        }
    });
}
};
});

define("NavigationHandler.controller$WasNavigationPrevented", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$WasNavigationPrevented.GetDefaultPreventedJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_WasNavigationPrevented_GetDefaultPreventedJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.wasNavigationPrevented$Action = function (navigationEventIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.WasNavigationPrevented$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
var getDefaultPreventedJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NavigationHandler.WasNavigationPrevented$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getDefaultPreventedJSResult = getDefaultPreventedJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:iutNX_XDRkKtYDS8KAIEPw:/ClientActionFlows.iutNX_XDRkKtYDS8KAIEPw:Uh_a2Lu1tu3PG1derzS+Vw", "NavigationHandler", "WasNavigationPrevented", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:ugjdGi9r0EeT5XNpQYO2Cg", callContext.id);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:GQ7Sv35oEkKG8XLbNjiGvw", callContext.id);
getDefaultPreventedJSResult.value = controller.safeExecuteJSNode(NavigationHandler_controller_WasNavigationPrevented_GetDefaultPreventedJS, "GetDefaultPrevented", "WasNavigationPrevented", {
NavigationEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.navigationEventInLocal, OS.DataTypes.DataTypes.Object),
WasPrevented: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NavigationHandler.WasNavigationPrevented$getDefaultPreventedJSResult"))();
jsNodeResult.wasPreventedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WasPrevented, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:SsnXp4n8F0WBXd3rnHCmOA", callContext.id);
// WasPrevented = GetDefaultPrevented.WasPrevented
outVars.value.wasPreventedOut = getDefaultPreventedJSResult.value.wasPreventedOut;
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:X+BbYW_TNEekQUqpLfNxaQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:iutNX_XDRkKtYDS8KAIEPw", callContext.id);
}

};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.WasNavigationPrevented$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.WasNavigationPrevented$getDefaultPreventedJSResult", [{
name: "WasPrevented",
attrName: "wasPreventedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.constructor.registerVariableGroupType("NavigationHandler.WasNavigationPrevented$outVars", [{
name: "WasPrevented",
attrName: "wasPreventedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
NavigationHandlerController.default.clientActionProxies.wasNavigationPrevented$Action = function (navigationEventIn) {
navigationEventIn = (navigationEventIn === undefined) ? null : navigationEventIn;
return controller.executeActionInsideJSNode(NavigationHandlerController.default.wasNavigationPrevented$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(navigationEventIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
WasPrevented: OS.DataConversion.JSNodeParamConverter.to(actionResults.wasPreventedOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("NavigationHandler.controller$WasNavigationPrevented.GetDefaultPreventedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.WasPrevented = $parameters.NavigationEvent.defaultPrevented;
};
});

define("NavigationHandler.controller$WillNavigate", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "NavigationHandler.controller$WillNavigate.WillNavigateJS"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandlerController, NavigationHandler_controller_WillNavigate_WillNavigateJS) {
var OS = OutSystems.Internal;
NavigationHandlerController.default.willNavigate$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("wQiaiMpsYkOl7D4DOqcT3A:bgAc1nLNMkexJz1_vmwzEQ:/ClientActionFlows.bgAc1nLNMkexJz1_vmwzEQ:CUBYly+oCkwvR9vgUjrrwQ", "NavigationHandler", "WillNavigate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:cOG1EYHS80+d+BSNG0BPwg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:lEy0pVcMnEezlYOPfCscHQ", callContext.id);
return controller.safeExecuteAsyncJSNode(NavigationHandler_controller_WillNavigate_WillNavigateJS, "WillNavigate", "WillNavigate", null, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("wQiaiMpsYkOl7D4DOqcT3A:4LX25Zv5PkCE0I3zXAjZTg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:bgAc1nLNMkexJz1_vmwzEQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("wQiaiMpsYkOl7D4DOqcT3A:bgAc1nLNMkexJz1_vmwzEQ", callContext.id);
throw ex;

});
};
var controller = NavigationHandlerController.default;
NavigationHandlerController.default.clientActionProxies.willNavigate$Action = function () {
return controller.executeActionInsideJSNode(NavigationHandlerController.default.willNavigate$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NavigationHandler.controller$WillNavigate.WillNavigateJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.dx.Navigation.willNavigate($resolve);
});
};
});

define("NavigationHandler.controller", ["exports", "OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller$debugger"], function (exports, OutSystems, NavigationHandlerModel, NavigationHandler_Controller_debugger) {
var OS = OutSystems.Internal;
var NavigationHandlerController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return NavigationHandlerController.default.defaultTimeout;
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
NavigationHandlerController.default = new Controller(null, "NavigationHandler");
});
define("NavigationHandler.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QBc+pFnTLU+zCVsxA4e48w": {
getter: function (varBag, idService) {
return varBag.resetReplaceOnUpcomingNavigationJSResult.value;
}
},
"WOiXB6LOPEemWXOY7OTNrg": {
getter: function (varBag, idService) {
return varBag.navigationEventsJSResult.value;
}
},
"yLi5E0DsLUK9NLoG5hb5Qw": {
getter: function (varBag, idService) {
return varBag.scrollAnchorsJSResult.value;
}
},
"iCprauSHD0mofUSHqqLgnw": {
getter: function (varBag, idService) {
return varBag.preloadingJSResult.value;
}
},
"LMUbom57ykOebBG0p+iChw": {
getter: function (varBag, idService) {
return varBag.navigationDataStorageJSResult.value;
}
},
"25QX0XHKKEChGfIfXmo8Xg": {
getter: function (varBag, idService) {
return varBag.utilitiesJSResult.value;
}
},
"VKZ31dob7kOzvsDrLUATsA": {
getter: function (varBag, idService) {
return varBag.transitionEventsJSResult.value;
}
},
"tbJGflytkUakrcfR8KRRhw": {
getter: function (varBag, idService) {
return varBag.allowUpcomingNavigationJSResult.value;
}
},
"AKBrnNHTU0CkhdepygUMYw": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"fzXdoYc7gEiTQTnIzozOvA": {
getter: function (varBag, idService) {
return varBag.outVars.value.wasPreventedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"GQ7Sv35oEkKG8XLbNjiGvw": {
getter: function (varBag, idService) {
return varBag.getDefaultPreventedJSResult.value;
}
},
"2Yo+LXG78EaZC8nXqPgEHw": {
getter: function (varBag, idService) {
return varBag.outVars.value.priorityOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"rjpmhmXtYk+28uSXbep7og": {
getter: function (varBag, idService) {
return varBag.vars.value.actionConfirmationDialogWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lLbFz0JTvkee5eHcFr4mGg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isConfirmedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"TVKP7JvK10aH4Yf3KJvinw": {
getter: function (varBag, idService) {
return varBag.showDialogJSResult.value;
}
},
"kcNBdgKaHEGlH4VuZeDqPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.rootWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+kWeRsm2aE60+cGvI1uRVg": {
getter: function (varBag, idService) {
return varBag.vars.value.popupWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_iKFYXxj3EuL2UoiaLSKXw": {
getter: function (varBag, idService) {
return varBag.copyClassesAcrossPortalJSResult.value;
}
},
"I9JRgvd1LUm6DXQwMSq8Hw": {
getter: function (varBag, idService) {
return varBag.closeExpandedDropdownJSResult.value;
}
},
"EHjM73itFUWzmlNBK41rDw": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"d8QOICE9rU+VGM6VPzAuuQ": {
getter: function (varBag, idService) {
return varBag.resumeJSResult.value;
}
},
"5ix1PMUvjkKSgoUQjJKPVg": {
getter: function (varBag, idService) {
return varBag.vars.value.toObjectRefInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"BR2ydykKoUK_Q92e1heQhg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"i+_+ztdXd0Oxu6bF1yUW6A": {
getter: function (varBag, idService) {
return varBag.outVars.value.assignedObjectRefOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"+qJiGfZOI0GgcMS6qCGKJQ": {
getter: function (varBag, idService) {
return varBag.assignJSResult.value;
}
},
"XszFnflgHESU6oWON2BxdQ": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"P5faU4fmXUmkBrNzTfYzZA": {
getter: function (varBag, idService) {
return varBag.vars.value.screenNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Vgy37_eomkeM2MauaQOPhw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isNavigationToScreenOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0O9fwaEAsUGorzGnWvDCpQ": {
getter: function (varBag, idService) {
return varBag.checkNavigationToScreenJSResult.value;
}
},
"CQ9sLy8SnEqHMkxqQq0XTg": {
getter: function (varBag, idService) {
return varBag.outVars.value.listIndexOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"j3okvZ+xqESOmZ8yyOGn2A": {
getter: function (varBag, idService) {
return varBag.outVars.value.scrollAnchorIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"c24vuPio6USNjcEHLR3gfg": {
getter: function (varBag, idService) {
return varBag.setScrollAnchorOnNavigationStorageJSResult.value;
}
},
"1jY59BeyFkKA6OU7NXkASQ": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"EHQn24Z0Y0GqRwYdaYpucw": {
getter: function (varBag, idService) {
return varBag.preventDefaultJSResult.value;
}
},
"ijuZXfUab0KLZITKVoGZsw": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"UZYIqYoOjEavY9o7FfRP9g": {
getter: function (varBag, idService) {
return varBag.setPreloadJSResult.value;
}
},
"ri3CkxBQh0aYZDj9guqc5w": {
getter: function (varBag, idService) {
return varBag.allowUpcomingNavigationJSResult.value;
}
},
"qZgPIIKvlEOQaR1g4CSA7g": {
getter: function (varBag, idService) {
return varBag.outVars.value.priorityOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"0ux_thM0V0CPxrzX3sK9hg": {
getter: function (varBag, idService) {
return varBag.outVars.value.priorityOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lEy0pVcMnEezlYOPfCscHQ": {
getter: function (varBag, idService) {
return varBag.willNavigateJSResult.value;
}
},
"XbWdesm4uEW_ZTRK1CfCUA": {
getter: function (varBag, idService) {
return varBag.outVars.value.preloadOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"S7PHgN1J90WTR9QPtizSzA": {
getter: function (varBag, idService) {
return varBag.getPreloadJSResult.value;
}
},
"c9sqNyiSCUiL82K1vXSheQ": {
getter: function (varBag, idService) {
return varBag.vars.value.listWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZJuL21Mbok609MU6xymvPg": {
getter: function (varBag, idService) {
return varBag.vars.value.listIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"h_QSF0dZxEm41VWhK6UmYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.scrollAnchorIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x5nj7_rqL0aAkR2Tk0xUhg": {
getter: function (varBag, idService) {
return varBag.setScrollAnchorOnComponentPropertiesJSResult.value;
}
},
"jf0lg32s2U2sMthIdOlu9A": {
getter: function (varBag, idService) {
return varBag.vars.value.listWidgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dDMEvi0H_UiIKQamnc476w": {
getter: function (varBag, idService) {
return varBag.vars.value.scrollAnchorIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dZZ3ElZYQk6XG7v1TVBwiw": {
getter: function (varBag, idService) {
return varBag.stabilizeJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
