define("UBTJavaScriptUtils.controller$CheckIOsPlatform", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$CheckIOsPlatform.GetPlatformIOS_PreventSwipeJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_CheckIOsPlatform_GetPlatformIOS_PreventSwipeJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.checkIOsPlatform$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getPlatformIOS_PreventSwipeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.CheckIOsPlatform$outVars"))());
varBag.callContext = callContext;
varBag.getPlatformIOS_PreventSwipeJSResult = getPlatformIOS_PreventSwipeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:N8G2No1ztkSksD+ub7N8+g:/ClientActionFlows.N8G2No1ztkSksD+ub7N8+g:pyM4WEm01Eg08IG2CcF6Tg", "UBTJavaScriptUtils", "CheckIOsPlatform", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:bM62FUR3lU+j0DRd7Prkpw", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:tYo7ixKMJ0CXXpx1bW2Hpg", callContext.id);
getPlatformIOS_PreventSwipeJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_CheckIOsPlatform_GetPlatformIOS_PreventSwipeJS, "GetPlatformIOS_PreventSwipe", "CheckIOsPlatform", {
IsApple: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.CheckIOsPlatform$getPlatformIOS_PreventSwipeJSResult"))();
jsNodeResult.isAppleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsApple, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:XuBWZPTv00yL8nJpLLRsLg", callContext.id);
// IsIOs = GetPlatformIOS_PreventSwipe.IsApple
outVars.value.isIOsOut = getPlatformIOS_PreventSwipeJSResult.value.isAppleOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:X9WGgcODsU2RctwzUQIT_Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:N8G2No1ztkSksD+ub7N8+g", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.CheckIOsPlatform$getPlatformIOS_PreventSwipeJSResult", [{
name: "IsApple",
attrName: "isAppleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.CheckIOsPlatform$outVars", [{
name: "IsIOs",
attrName: "isIOsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.checkIOsPlatform$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.checkIOsPlatform$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsIOs: OS.DataConversion.JSNodeParamConverter.to(actionResults.isIOsOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTJavaScriptUtils.controller$CheckIOsPlatform.GetPlatformIOS_PreventSwipeJS", [], function () {
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

define("UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.controller", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose.TimeoutJS", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose.SetLastTimeFiredJS", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose.InitializeVariablesJS", "OutSystemsUI_2_23.controller$FeedbackMessageShow", "UBTJavaScriptUtils.referencesHealth", "UBTJavaScriptUtils.referencesHealth$OutSystemsUI_2_23", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, OutSystemsUI_2_23Controller, UBTJavaScriptUtils_controller_FeedbackMessage_AutoClose_TimeoutJS, UBTJavaScriptUtils_controller_FeedbackMessage_AutoClose_SetLastTimeFiredJS, UBTJavaScriptUtils_controller_FeedbackMessage_AutoClose_InitializeVariablesJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action = function (titleIn, messageIn, messageTypeIn, encodedHTMLIn, extendedClassIn, delayMsIn, useDebounceIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.FeedbackMessage_AutoClose$vars"))());
vars.value.titleInLocal = titleIn;
vars.value.messageInLocal = messageIn;
vars.value.messageTypeInLocal = messageTypeIn;
vars.value.encodedHTMLInLocal = encodedHTMLIn;
vars.value.extendedClassInLocal = extendedClassIn;
vars.value.delayMsInLocal = delayMsIn;
vars.value.useDebounceInLocal = useDebounceIn;
var initializeVariablesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.initializeVariablesJSResult = initializeVariablesJSResult;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:qujYQQFGIEyQoqgB9lTYrA:/ClientActionFlows.qujYQQFGIEyQoqgB9lTYrA:Joe0ujeVn0UQUnd2iSic8A", "UBTJavaScriptUtils", "FeedbackMessage_AutoClose", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:oazDIaVZXUS0nKbuNmlfoA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Qfy6GMLa4ECOQb2XwUhj1w", callContext.id) && (vars.value.messageTypeInLocal === OS.BuiltinFunctions.nullIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:rTLAPjlFM0aS+hk5LZHxMg", callContext.id);
// MessageType = Error
vars.value.messageTypeInLocal = UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType.error;
}

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Nlq2RhFMpkKMXROxTMvkYg", callContext.id);
// CurrentDateTime = CurrDateTime
vars.value.currentDateTimeVar = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:7c5t3s3s10SWdolxxnWWGg", callContext.id);
initializeVariablesJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_FeedbackMessage_AutoClose_InitializeVariablesJS, "InitializeVariables", "FeedbackMessage_AutoClose", {
CurrentDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.currentDateTimeVar, OS.DataTypes.DataTypes.DateTime),
lastTimeMessageFired: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.DateTime.defaultValue, OS.DataTypes.DataTypes.DateTime)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.FeedbackMessage_AutoClose$initializeVariablesJSResult"))();
jsNodeResult.lastTimeMessageFiredOut = OS.DataConversion.JSNodeParamConverter.from($parameters.lastTimeMessageFired, OS.DataTypes.DataTypes.DateTime);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:oxcLXnvWhUSO2S3dvUi9_g", callContext.id) && vars.value.useDebounceInLocal)) {
// Treshold has not been met
if((OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Si5YPhilF0ym2HbXYnwt2Q", callContext.id) && !((initializeVariablesJSResult.value.lastTimeMessageFiredOut.equals(vars.value.currentDateTimeVar) || OS.BuiltinFunctions.addSeconds(initializeVariablesJSResult.value.lastTimeMessageFiredOut, 5).lte(vars.value.currentDateTimeVar))))) {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:jiapGmWb1UiudraBLdmNzg", callContext.id);
return ;

}

}

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:zVy8TWD5PkK59T0S4z6x5w", callContext.id);
// LastChar = Substr
vars.value.lastCharVar = OS.BuiltinFunctions.substr(vars.value.messageInLocal, (OS.BuiltinFunctions.length(vars.value.messageInLocal) - 1), OS.BuiltinFunctions.length(vars.value.messageInLocal));
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:zVy8TWD5PkK59T0S4z6x5w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Message = If
vars.value.messageInLocal = (((((vars.value.lastCharVar === ".") || (vars.value.lastCharVar === "!")) || (vars.value.lastCharVar === "?"))) ? (vars.value.messageInLocal) : ((vars.value.messageInLocal + ".")));
if((OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:5Z3d3dpZzkaHmnv5KnfzCA", callContext.id) && ((vars.value.titleInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:KRvu0FPJyEe46kF7tLs4iQ", callContext.id);
// Message = "<div class='feedback-message--title'>" + Title + "</div>" + "<div class='feedback-message--body'>" + Message + "</div>"
vars.value.messageInLocal = ((((("<div class=\'feedback-message--title\'>" + vars.value.titleInLocal) + "</div>") + "<div class=\'feedback-message--body\'>") + vars.value.messageInLocal) + "</div>");
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:KRvu0FPJyEe46kF7tLs4iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EncodedHTML = False
vars.value.encodedHTMLInLocal = false;
}

if((OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:9uVtaoH_5kCmR5B+EAGr9w", callContext.id) && (vars.value.delayMsInLocal === 0))) {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:qQfk4dU+YUOuMShYoiAkSQ", callContext.id);
// Execute Action: FeedbackMessageShow
OutSystemsUI_2_23Controller.default.feedbackMessageShow$Action(vars.value.messageInLocal, (OS.BuiltinFunctions.identifierToInteger(vars.value.messageTypeInLocal) - 1), vars.value.encodedHTMLInLocal, (((((vars.value.extendedClassInLocal) !== (""))) ? ((vars.value.extendedClassInLocal + " ")) : ("")) + "feedback-message-autoclose"), true, callContext);
} else {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:JGLcOMwF_06CSlTxQFkOyA", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_FeedbackMessage_AutoClose_TimeoutJS, "Timeout", "FeedbackMessage_AutoClose", {
MessageType: OS.DataConversion.JSNodeParamConverter.to(vars.value.delayMsInLocal, OS.DataTypes.DataTypes.Integer),
EncodedHTML: OS.DataConversion.JSNodeParamConverter.to(vars.value.encodedHTMLInLocal, OS.DataTypes.DataTypes.Boolean),
DelayMs: OS.DataConversion.JSNodeParamConverter.to(vars.value.delayMsInLocal, OS.DataTypes.DataTypes.Integer),
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text),
ExtendedClass: OS.DataConversion.JSNodeParamConverter.to(vars.value.extendedClassInLocal, OS.DataTypes.DataTypes.Text),
useDebounce: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
Title: OS.DataConversion.JSNodeParamConverter.to(vars.value.titleInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
FeedbackMessage_AutoClose: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).feedbackMessage_AutoClose$Action
}, {});
}

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:EUfZrL2C5EefpIqxiNn8lw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_FeedbackMessage_AutoClose_SetLastTimeFiredJS, "SetLastTimeFired", "FeedbackMessage_AutoClose", {
CurrentDateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.currentDateTimeVar, OS.DataTypes.DataTypes.DateTime)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:eTLRE3+z_0yj8irci6OGNg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:qujYQQFGIEyQoqgB9lTYrA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.FeedbackMessage_AutoClose$vars", [{
name: "Title",
attrName: "titleInLocal",
mandatory: false,
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
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType.error;
}
}, {
name: "EncodedHTML",
attrName: "encodedHTMLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "ExtendedClass",
attrName: "extendedClassInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DelayMs",
attrName: "delayMsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "useDebounce",
attrName: "useDebounceInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CurrentDateTime",
attrName: "currentDateTimeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "LastChar",
attrName: "lastCharVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.FeedbackMessage_AutoClose$initializeVariablesJSResult", [{
name: "lastTimeMessageFired",
attrName: "lastTimeMessageFiredOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.feedbackMessage_AutoClose$Action = function (titleIn, messageIn, messageTypeIn, encodedHTMLIn, extendedClassIn, delayMsIn, useDebounceIn) {
titleIn = (titleIn === undefined) ? "" : titleIn;
messageIn = (messageIn === undefined) ? "" : messageIn;
messageTypeIn = (messageTypeIn === undefined) ? UBTJavaScriptUtilsModel.staticEntities.uBT_MessageType.error : messageTypeIn;
encodedHTMLIn = (encodedHTMLIn === undefined) ? true : encodedHTMLIn;
extendedClassIn = (extendedClassIn === undefined) ? "" : extendedClassIn;
delayMsIn = (delayMsIn === undefined) ? 0 : delayMsIn;
useDebounceIn = (useDebounceIn === undefined) ? false : useDebounceIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(titleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text), messageTypeIn, OS.DataConversion.JSNodeParamConverter.from(encodedHTMLIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(extendedClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delayMsIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(useDebounceIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose.TimeoutJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $actions.FeedbackMessage_AutoClose($parameters.Title,$parameters.Message,$parameters.MessageType,$parameters.EncodedHTML,$parameters.ExtendedClass,0,$parameters.useDebounce);
}, $parameters.DelayMs);
};
});
define("UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose.SetLastTimeFiredJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.ubt.lastTimeMessageFired =$parameters.CurrentDateTime;
};
});
define("UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose.InitializeVariablesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (!window.ubt || !window.ubt.lastTimeMessageFired ) {
    window.ubt = window.ubt || {};
    window.ubt.lastTimeMessageFired = window.ubt.lastTimeMessageFired || $parameters.CurrentDateTime;
}


$parameters.lastTimeMessageFired = window.ubt.lastTimeMessageFired;
};
});

define("UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Blur", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Blur.JavaScript1JS", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtilis_Element_Operations_Blur_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtilis_Element_Operations_Blur$Action = function (idIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtilis_Element_Operations_Blur$vars"))());
vars.value.idInLocal = idIn;
var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:3Z5HWWoq1keIXswkobgJiw:/ClientActionFlows.3Z5HWWoq1keIXswkobgJiw:kE9D0uRUnwkJzZsk4W1geg", "UBTJavaScriptUtils", "JSUtilis_Element_Operations_Blur", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:U58Gju5LIkS5bIfyKX82DA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:8JPWJyo0Nkit7XoSiWs0TQ", callContext.id);
// Execute Action: JSUtils_Element_Operations_GetElementById
jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(vars.value.idInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:VwsA6fGLbkSQhkTAxlh+sw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtilis_Element_Operations_Blur_JavaScript1JS, "JavaScript1", "JSUtilis_Element_Operations_Blur", {
Element: OS.DataConversion.JSNodeParamConverter.to(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:H2Ihb8ksjEu88QlQVV4L5Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:3Z5HWWoq1keIXswkobgJiw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtilis_Element_Operations_Blur$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtilis_Element_Operations_Blur$Action = function (idIn) {
idIn = (idIn === undefined) ? "" : idIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtilis_Element_Operations_Blur$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Blur.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Element) {
    $parameters.Element.blur();
}
};
});

define("UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus.JavaScript1JS", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtilis_Element_Operations_Focus_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtilis_Element_Operations_Focus$Action = function (idIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtilis_Element_Operations_Focus$vars"))());
vars.value.idInLocal = idIn;
var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:2v7J3YQpOEm6A69dHE391A:/ClientActionFlows.2v7J3YQpOEm6A69dHE391A:jPwllwxv+AaCXS2m3rCtaA", "UBTJavaScriptUtils", "JSUtilis_Element_Operations_Focus", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:nQ5t0sopMEacSYrJpc8hrQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:TUg6fLkZtE2tCwRqQpk+Lw", callContext.id);
// Execute Action: JSUtils_Element_Operations_GetElementById
jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(vars.value.idInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:RCamvKBlb0aGXO6k1Zlk_w", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtilis_Element_Operations_Focus_JavaScript1JS, "JavaScript1", "JSUtilis_Element_Operations_Focus", {
Element: OS.DataConversion.JSNodeParamConverter.to(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:sTh4zv65c0GMFFi+LwFiRA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:2v7J3YQpOEm6A69dHE391A", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtilis_Element_Operations_Focus$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtilis_Element_Operations_Focus$Action = function (idIn) {
idIn = (idIn === undefined) ? "" : idIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtilis_Element_Operations_Focus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Element) {
    $parameters.Element.focus();
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_AddClass", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_AddClass.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_AddClass_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_AddClass$Action = function (classNameIn, objectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_AddClass$vars"))());
vars.value.classNameInLocal = classNameIn;
vars.value.objectIdInLocal = objectIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:5nX8HEk9_UepITVd6UHKFw:/ClientActionFlows.5nX8HEk9_UepITVd6UHKFw:Cw1oRYxX5nfFPjAqbIziRw", "UBTJavaScriptUtils", "JSUtils_AddClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:8D4yu5sj10OagePcbMlmaA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:XAD5hbm4qUaNA1wgopzimg", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_AddClass_JavaScript1JS, "JavaScript1", "JSUtils_AddClass", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.classNameInLocal, OS.DataTypes.DataTypes.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:12JrNXk4vEaJZxnTwJM3Fg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:5nX8HEk9_UepITVd6UHKFw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_AddClass$vars", [{
name: "ClassName",
attrName: "classNameInLocal",
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
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_AddClass$Action = function (classNameIn, objectIdIn) {
classNameIn = (classNameIn === undefined) ? "" : classNameIn;
objectIdIn = (objectIdIn === undefined) ? "" : objectIdIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_AddClass$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(classNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_AddClass.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.Id)?.classList.add($parameters.PropertyName)

};
});

define("UBTJavaScriptUtils.controller$JSUtils_AssignFromObject", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_AssignFromObject.AssignJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_AssignFromObject_AssignJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_AssignFromObject$Action = function (toObjectRefIn, objectValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_AssignFromObject$vars"))());
vars.value.toObjectRefInLocal = toObjectRefIn;
vars.value.objectValueInLocal = objectValueIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_AssignFromObject$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:kWFsSgO7FEO1hnpw9wWaOA:/ClientActionFlows.kWFsSgO7FEO1hnpw9wWaOA:WaA49t8NaA1BgUDZpXIBTg", "UBTJavaScriptUtils", "JSUtils_AssignFromObject", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:LMyrwfHydEaECiNArqd6mw", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:8eJG3NhWLE+sTjlQCIjgDw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_AssignFromObject_AssignJS, "Assign", "JSUtils_AssignFromObject", {
ObjectValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectValueInLocal, OS.DataTypes.DataTypes.Object),
ToObjectRef: OS.DataConversion.JSNodeParamConverter.to(vars.value.toObjectRefInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Gdfn7nvRBkSbMCX+D26myg", callContext.id);
// AssignedObjectRef = ToObjectRef
outVars.value.assignedObjectRefOut = vars.value.toObjectRefInLocal;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:YZnY9C+VQU2CpNt+vDxCCg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:kWFsSgO7FEO1hnpw9wWaOA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_AssignFromObject$vars", [{
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
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_AssignFromObject$outVars", [{
name: "AssignedObjectRef",
attrName: "assignedObjectRefOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_AssignFromObject$Action = function (toObjectRefIn, objectValueIn) {
toObjectRefIn = (toObjectRefIn === undefined) ? null : toObjectRefIn;
objectValueIn = (objectValueIn === undefined) ? null : objectValueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_AssignFromObject$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toObjectRefIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(objectValueIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AssignedObjectRef: OS.DataConversion.JSNodeParamConverter.to(actionResults.assignedObjectRefOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_AssignFromObject.AssignJS", [], function () {
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

define("UBTJavaScriptUtils.controller$JSUtils_BuildAbsoluteURL", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_BuildAbsoluteURL.GetRedirectURIJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_BuildAbsoluteURL_GetRedirectURIJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_BuildAbsoluteURL$Action = function (relativeURLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_BuildAbsoluteURL$vars"))());
vars.value.relativeURLInLocal = relativeURLIn;
var getRedirectURIJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_BuildAbsoluteURL$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getRedirectURIJSResult = getRedirectURIJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:cz_F6OPbhUi0DAfD2VBdKA:/ClientActionFlows.cz_F6OPbhUi0DAfD2VBdKA:y05kaFMIHT_o8iRTPOvDww", "UBTJavaScriptUtils", "JSUtils_BuildAbsoluteURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:S6dILbiYokOJ1FtblIHFAg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:byWB9gzpgkeH2Im7Scl_lA", callContext.id);
getRedirectURIJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_BuildAbsoluteURL_GetRedirectURIJS, "GetRedirectURI", "JSUtils_BuildAbsoluteURL", {
RelativeURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.relativeURLInLocal, OS.DataTypes.DataTypes.Text),
AbsoluteURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_BuildAbsoluteURL$getRedirectURIJSResult"))();
jsNodeResult.absoluteURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AbsoluteURL, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:bM2y6tgtgkqoUR1JpeeX9g", callContext.id);
// AbsoluteURL = GetRedirectURI.AbsoluteURL
outVars.value.absoluteURLOut = getRedirectURIJSResult.value.absoluteURLOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:9ZJdaDt+lk2+PmfgHsPDrg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:cz_F6OPbhUi0DAfD2VBdKA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_BuildAbsoluteURL$vars", [{
name: "RelativeURL",
attrName: "relativeURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_BuildAbsoluteURL$getRedirectURIJSResult", [{
name: "AbsoluteURL",
attrName: "absoluteURLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_BuildAbsoluteURL$outVars", [{
name: "AbsoluteURL",
attrName: "absoluteURLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_BuildAbsoluteURL$Action = function (relativeURLIn) {
relativeURLIn = (relativeURLIn === undefined) ? "" : relativeURLIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_BuildAbsoluteURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(relativeURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AbsoluteURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.absoluteURLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_BuildAbsoluteURL.GetRedirectURIJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.AbsoluteURL  = window.location.origin + $parameters.RelativeURL
};
});

define("UBTJavaScriptUtils.controller$JSUtils_CheckElementInNameValueList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_CheckElementInNameValueList.FilterByNameJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_CheckElementInNameValueList_FilterByNameJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_CheckElementInNameValueList$Action = function (jSONListIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CheckElementInNameValueList$vars"))());
vars.value.jSONListInLocal = jSONListIn;
vars.value.valueInLocal = valueIn;
var filterByNameJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CheckElementInNameValueList$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.filterByNameJSResult = filterByNameJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:z8hlHFFZmEyYmbKGzX1P5g:/ClientActionFlows.z8hlHFFZmEyYmbKGzX1P5g:lUEspXt6qKu3pd+jDlc2hg", "UBTJavaScriptUtils", "JSUtils_CheckElementInNameValueList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:0gJnZkRTXk2alTN6IP+BaA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:USSvKXfEb0mUE1k91MWd5w", callContext.id);
filterByNameJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_CheckElementInNameValueList_FilterByNameJS, "FilterByName", "JSUtils_CheckElementInNameValueList", {
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Text),
List: OS.DataConversion.JSNodeParamConverter.to(vars.value.jSONListInLocal, OS.DataTypes.DataTypes.Text),
HasElement: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CheckElementInNameValueList$filterByNameJSResult"))();
jsNodeResult.hasElementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasElement, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:vQEEby+cVkWVJOj+CzlzSA", callContext.id);
// HasElement = FilterByName.HasElement
outVars.value.hasElementOut = filterByNameJSResult.value.hasElementOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:sRXmGNSaGEi8fNL_UDjAMw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:z8hlHFFZmEyYmbKGzX1P5g", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CheckElementInNameValueList$vars", [{
name: "JSONList",
attrName: "jSONListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CheckElementInNameValueList$filterByNameJSResult", [{
name: "HasElement",
attrName: "hasElementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CheckElementInNameValueList$outVars", [{
name: "HasElement",
attrName: "hasElementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_CheckElementInNameValueList$Action = function (jSONListIn, valueIn) {
jSONListIn = (jSONListIn === undefined) ? "" : jSONListIn;
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_CheckElementInNameValueList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(jSONListIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasElement: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasElementOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_CheckElementInNameValueList.FilterByNameJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var list = JSON.parse($parameters.List);
var filteredList = list.filter(list => list.Value === $parameters.Value);
$parameters.HasElement = result.length !== 0
};
});

define("UBTJavaScriptUtils.controller$JSUtils_Console_Log", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Console_Log.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Console_Log_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Console_Log$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:_CbYrfoGz0KLZeJCMgXylw:/ClientActionFlows._CbYrfoGz0KLZeJCMgXylw:K6bohBAML+0JdcftuiondQ", "UBTJavaScriptUtils", "JSUtils_Console_Log", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:QqSQmsDGjEymPOnNuveQHw", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:3S5ex5sfIE+D2ElHSxA5OQ", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Console_Log_JavaScript1JS, "JavaScript1", "JSUtils_Console_Log", {
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:1zS2riR8cU2PtVVhmDlyxw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:_CbYrfoGz0KLZeJCMgXylw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Console_Log$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Console_Log$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Console_Log.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
console.log($parameters.Message);
};
});

define("UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_CopyToClipboard_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_CopyToClipboard$Action = function (textIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CopyToClipboard$vars"))());
vars.value.textInLocal = textIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:7BYhdl9HAEm4BMHnUulizA:/ClientActionFlows.7BYhdl9HAEm4BMHnUulizA:BzVJVJHyaFhWBq6cz3I5ag", "UBTJavaScriptUtils", "JSUtils_CopyToClipboard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:2E2ZtJ_leUCYFv4VHf0ZOA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:_dvwzZHBL0S5l812B8q2YQ", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTJavaScriptUtils_controller_JSUtils_CopyToClipboard_JavaScript1JS, "JavaScript1", "JSUtils_CopyToClipboard", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:CxkewE_sQUeYSFDaqXCJ2Q", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:7BYhdl9HAEm4BMHnUulizA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:7BYhdl9HAEm4BMHnUulizA", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CopyToClipboard$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_CopyToClipboard$Action = function (textIn) {
textIn = (textIn === undefined) ? "" : textIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_CopyToClipboard$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
navigator.clipboard.writeText($parameters.Text).then(() => {
      $resolve();
    })
    .catch((err) => {
      $reject(err);
    });
});
};
});

define("UBTJavaScriptUtils.controller$JSUtils_CustomEvent_Dispatch", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_CustomEvent_Dispatch.Dispatch_CustomEventJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_CustomEvent_Dispatch_Dispatch_CustomEventJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_CustomEvent_Dispatch$Action = function (eventNameIn, dataJSONIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_Dispatch$vars"))());
vars.value.eventNameInLocal = eventNameIn;
vars.value.dataJSONInLocal = dataJSONIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:w_6yBttc2Uum_5tOP_f5Gg:/ClientActionFlows.w_6yBttc2Uum_5tOP_f5Gg:HlxREF+dY4WhXBBjmRwJNw", "UBTJavaScriptUtils", "JSUtils_CustomEvent_Dispatch", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:qgEA_IYiqkKm8Z2EIlUJ7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:wBBhKUIGxUupR9SrqXtuig", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_CustomEvent_Dispatch_Dispatch_CustomEventJS, "Dispatch_CustomEvent", "JSUtils_CustomEvent_Dispatch", {
EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
Args: OS.DataConversion.JSNodeParamConverter.to(vars.value.dataJSONInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:GlWo4rnj9Uaec7wSzbnpwA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:w_6yBttc2Uum_5tOP_f5Gg", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_Dispatch$vars", [{
name: "EventName",
attrName: "eventNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DataJSON",
attrName: "dataJSONInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_CustomEvent_Dispatch$Action = function (eventNameIn, dataJSONIn) {
eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
dataJSONIn = (dataJSONIn === undefined) ? "" : dataJSONIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_CustomEvent_Dispatch$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(dataJSONIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_CustomEvent_Dispatch.Dispatch_CustomEventJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.dispatchEvent(new CustomEvent($parameters.EventName, { detail: $parameters.Args }));
};
});

define("UBTJavaScriptUtils.controller$JSUtils_CustomEvent_RegisterHandler", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_CustomEvent_RegisterHandler.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_CustomEvent_RegisterHandler_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_CustomEvent_RegisterHandler$Action = function (eventIdIn, callbackIn, eventListenerContainerIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_RegisterHandler$vars"))());
vars.value.eventIdInLocal = eventIdIn;
vars.value.callbackInLocal = callbackIn;
vars.value.eventListenerContainerIdInLocal = eventListenerContainerIdIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_RegisterHandler$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:xfoVfTe7oEOjLcXolN29vA:/ClientActionFlows.xfoVfTe7oEOjLcXolN29vA:iTmt8Ha2D0PauKRI4EX8CQ", "UBTJavaScriptUtils", "JSUtils_CustomEvent_RegisterHandler", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:U2A0sRR7GUu21HarJ38jdA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:uUcAuulmcEuYN8_KvzAY8g", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_CustomEvent_RegisterHandler_JavaScript1JS, "JavaScript1", "JSUtils_CustomEvent_RegisterHandler", {
EventListenerContainer: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventListenerContainerIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
EventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventIdInLocal, OS.DataTypes.DataTypes.Text),
DestroyCallbackFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_RegisterHandler$javaScript1JSResult"))();
jsNodeResult.destroyCallbackFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallbackFunction, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ZTp6EEcff0mx09wUyH9ryA", callContext.id);
// DestroyCallbackFunction = JavaScript1.DestroyCallbackFunction
outVars.value.destroyCallbackFunctionOut = javaScript1JSResult.value.destroyCallbackFunctionOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:JTAWDrGjBkGjfNkbUmoq3w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:xfoVfTe7oEOjLcXolN29vA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_RegisterHandler$vars", [{
name: "EventId",
attrName: "eventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "EventListenerContainerId",
attrName: "eventListenerContainerIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_RegisterHandler$javaScript1JSResult", [{
name: "DestroyCallbackFunction",
attrName: "destroyCallbackFunctionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_CustomEvent_RegisterHandler$outVars", [{
name: "DestroyCallbackFunction",
attrName: "destroyCallbackFunctionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_CustomEvent_RegisterHandler$Action = function (eventIdIn, callbackIn, eventListenerContainerIdIn) {
eventIdIn = (eventIdIn === undefined) ? "" : eventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
eventListenerContainerIdIn = (eventListenerContainerIdIn === undefined) ? "" : eventListenerContainerIdIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_CustomEvent_RegisterHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(eventListenerContainerIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DestroyCallbackFunction: OS.DataConversion.JSNodeParamConverter.to(actionResults.destroyCallbackFunctionOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_CustomEvent_RegisterHandler.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var eventListenerContainer = document.getElementById($parameters.EventListenerContainer) || window; 

var handler = function(event) {
    $parameters.Callback(event.detail);
};

eventListenerContainer.addEventListener($parameters.EventId, handler);

function destroyCustomEventHandlers() {
    eventListenerContainer.removeEventListener($parameters.EventId, handler);
}

$parameters.DestroyCallbackFunction = destroyCustomEventHandlers;
};
});

define("UBTJavaScriptUtils.controller$JSUtils_DateTime_GetUTCOffset", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_DateTime_GetUTCOffset.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_DateTime_GetUTCOffset_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_DateTime_GetUTCOffset$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_DateTime_GetUTCOffset$outVars"))());
varBag.callContext = callContext;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:n6BWIjupUEqKmgtO_DYm_w:/ClientActionFlows.n6BWIjupUEqKmgtO_DYm_w:ITIdINJwICTNlT6xeY+QYQ", "UBTJavaScriptUtils", "JSUtils_DateTime_GetUTCOffset", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:CX1_RiE2wkWcbI_NXaIRAw", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:44ugfkWMIUm8N4G3JIiqBg", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_DateTime_GetUTCOffset_JavaScript1JS, "JavaScript1", "JSUtils_DateTime_GetUTCOffset", {
UTCOffsetMinutes: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_DateTime_GetUTCOffset$javaScript1JSResult"))();
jsNodeResult.uTCOffsetMinutesOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UTCOffsetMinutes, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:MKp8kakFckOBWyEhFnGuPQ", callContext.id);
// UTCOffset = JavaScript1.UTCOffsetMinutes
outVars.value.uTCOffsetOut = javaScript1JSResult.value.uTCOffsetMinutesOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:yiwF3+QKQ0upHLTu7+7cXw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:n6BWIjupUEqKmgtO_DYm_w", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_DateTime_GetUTCOffset$javaScript1JSResult", [{
name: "UTCOffsetMinutes",
attrName: "uTCOffsetMinutesOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_DateTime_GetUTCOffset$outVars", [{
name: "UTCOffset",
attrName: "uTCOffsetOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_DateTime_GetUTCOffset$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_DateTime_GetUTCOffset$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
UTCOffset: OS.DataConversion.JSNodeParamConverter.to(actionResults.uTCOffsetOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_DateTime_GetUTCOffset.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.UTCOffsetMinutes = new Date().getTimezoneOffset()
};
});

define("UBTJavaScriptUtils.controller$JSUtils_DebounceTimer", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_DebounceTimer.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_DebounceTimer_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_DebounceTimer$Action = function (elementIdIn, delayMSIn, callbackActionIn, callbackActionParamIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_DebounceTimer$vars"))());
vars.value.elementIdInLocal = elementIdIn;
vars.value.delayMSInLocal = delayMSIn;
vars.value.callbackActionInLocal = callbackActionIn;
vars.value.callbackActionParamInLocal = callbackActionParamIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:iYadrdBUvUm_XTbJadTujw:/ClientActionFlows.iYadrdBUvUm_XTbJadTujw:8EOL23XMv5BT3BjdgQY+ow", "UBTJavaScriptUtils", "JSUtils_DebounceTimer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:BxldoXZ85keBskrj6dd5jg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:uIaKUzIu2k+g_wI9ymQ0Ow", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_DebounceTimer_JavaScript1JS, "JavaScript1", "JSUtils_DebounceTimer", {
CallbackActionParam: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackActionParamInLocal, OS.DataTypes.DataTypes.Object),
ElementId: OS.DataConversion.JSNodeParamConverter.to(vars.value.elementIdInLocal, OS.DataTypes.DataTypes.Text),
CallbackAction: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackActionInLocal, OS.DataTypes.DataTypes.Object),
DelayMS: OS.DataConversion.JSNodeParamConverter.to(vars.value.delayMSInLocal, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:FsWPfMnvQUKV3ZEpBBvGdg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:iYadrdBUvUm_XTbJadTujw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_DebounceTimer$vars", [{
name: "ElementId",
attrName: "elementIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DelayMS",
attrName: "delayMSInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return -1;
}
}, {
name: "CallbackAction",
attrName: "callbackActionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "CallbackActionParam",
attrName: "callbackActionParamInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_DebounceTimer$Action = function (elementIdIn, delayMSIn, callbackActionIn, callbackActionParamIn) {
elementIdIn = (elementIdIn === undefined) ? "" : elementIdIn;
delayMSIn = (delayMSIn === undefined) ? -1 : delayMSIn;
callbackActionIn = (callbackActionIn === undefined) ? null : callbackActionIn;
callbackActionParamIn = (callbackActionParamIn === undefined) ? null : callbackActionParamIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_DebounceTimer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(delayMSIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(callbackActionIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(callbackActionParamIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_DebounceTimer.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const el = document.getElementById($parameters.ElementId);
if (!el) return;

// Always clear any existing timer
if (el.debounceTimer) {
clearTimeout(el.debounceTimer);
el.debounceTimer = null;
}

// If delay === -1, this is a cancel-only call
if ($parameters.DelayMS === -1) {
return;
}

el.debounceTimer = setTimeout(() => {
$parameters.CallbackAction($parameters.CallbackActionParam);
el.debounceTimer = null;
}, $parameters.DelayMS);

};
});

define("UBTJavaScriptUtils.controller$JSUtils_Element_GetProperty_Obj", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Element_GetProperty_Obj.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Element_GetProperty_Obj_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Element_GetProperty_Obj$Action = function (elementIn, propertyNameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_GetProperty_Obj$vars"))());
vars.value.elementInLocal = elementIn;
vars.value.propertyNameInLocal = propertyNameIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_GetProperty_Obj$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:HlcBxxWQrkKPQXmoOqgDrA:/ClientActionFlows.HlcBxxWQrkKPQXmoOqgDrA:42mlho8IcWkdZkDVE0xQZg", "UBTJavaScriptUtils", "JSUtils_Element_GetProperty_Obj", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:XH_oBwIotkWSqae5sVBBUg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:BxvVGqnaIkeyySSIstIc5w", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Element_GetProperty_Obj_JavaScript1JS, "JavaScript1", "JSUtils_Element_GetProperty_Obj", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
Element: OS.DataConversion.JSNodeParamConverter.to(vars.value.elementInLocal, OS.DataTypes.DataTypes.Object),
Value: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_GetProperty_Obj$javaScript1JSResult"))();
jsNodeResult.valueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Value, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:mx7IbT4290+fgRcGGNbkbg", callContext.id);
// Value = JavaScript1.Value
outVars.value.valueOut = javaScript1JSResult.value.valueOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:yB9ntJ2B0Uuo2OxTEXkfSQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:HlcBxxWQrkKPQXmoOqgDrA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_GetProperty_Obj$vars", [{
name: "Element",
attrName: "elementInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_GetProperty_Obj$javaScript1JSResult", [{
name: "Value",
attrName: "valueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_GetProperty_Obj$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Element_GetProperty_Obj$Action = function (elementIn, propertyNameIn) {
elementIn = (elementIn === undefined) ? null : elementIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Element_GetProperty_Obj$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Element_GetProperty_Obj.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Element && $parameters.Element[$parameters.PropertyName] ) {
    $parameters.Value = $parameters.Element[$parameters.PropertyName];
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Element_Operations_GetElementById_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action = function (idIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_GetElementById$vars"))());
vars.value.idInLocal = idIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_GetElementById$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:DDfRtHpQnUKuRqUcDFBjjA:/ClientActionFlows.DDfRtHpQnUKuRqUcDFBjjA:hXsQjYtR4Y+UB+Ub_LZNbQ", "UBTJavaScriptUtils", "JSUtils_Element_Operations_GetElementById", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:n2DvLMA11ki2MAQiKHV_fQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:WM0ybcsiskC_h+2QR0I1SQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Element_Operations_GetElementById_JavaScript1JS, "JavaScript1", "JSUtils_Element_Operations_GetElementById", {
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.DataTypes.DataTypes.Text),
Element: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_GetElementById$javaScript1JSResult"))();
jsNodeResult.elementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Element, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:4S2znWGUokKJ8pA05Gxjig", callContext.id);
// Element = JavaScript1.Element
outVars.value.elementOut = javaScript1JSResult.value.elementOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:qChk7tNVeU2K2uWT3lDvpQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:DDfRtHpQnUKuRqUcDFBjjA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_GetElementById$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_GetElementById$javaScript1JSResult", [{
name: "Element",
attrName: "elementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_GetElementById$outVars", [{
name: "Element",
attrName: "elementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Element_Operations_GetElementById$Action = function (idIn) {
idIn = (idIn === undefined) ? "" : idIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Element: OS.DataConversion.JSNodeParamConverter.to(actionResults.elementOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Element = document.getElementById($parameters.Id);
};
});

define("UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Element_Operations_SetAttribute_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_SetAttribute$Action = function (elementIn, propertyNameIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_SetAttribute$vars"))());
vars.value.elementInLocal = elementIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:X88M6pVEHUq5cIQ5uoO1kQ:/ClientActionFlows.X88M6pVEHUq5cIQ5uoO1kQ:gN+JtHKuS9TebX2uIdxPWA", "UBTJavaScriptUtils", "JSUtils_Element_Operations_SetAttribute", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:YooXEyPmAECR4ekSfvtj1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:1kJffrq0V0qMYpJymwpOjQ", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Element_Operations_SetAttribute_JavaScript1JS, "JavaScript1", "JSUtils_Element_Operations_SetAttribute", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Object),
Element: OS.DataConversion.JSNodeParamConverter.to(vars.value.elementInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:iYK3iX7cO0exSKPTUqVxHw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:X88M6pVEHUq5cIQ5uoO1kQ", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_SetAttribute$vars", [{
name: "Element",
attrName: "elementInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Element_Operations_SetAttribute$Action = function (elementIn, propertyNameIn, valueIn) {
elementIn = (elementIn === undefined) ? null : elementIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
valueIn = (valueIn === undefined) ? null : valueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_SetAttribute$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Element) {
    $parameters.Element[$parameters.PropertyName] = $parameters.Value;
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_Element_Operations_ToggleAttribute", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_ToggleAttribute.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Element_Operations_ToggleAttribute_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_ToggleAttribute$Action = function (isAddIn, attrNameIn, elementIdIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_ToggleAttribute$vars"))());
vars.value.isAddInLocal = isAddIn;
vars.value.attrNameInLocal = attrNameIn;
vars.value.elementIdInLocal = elementIdIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:2uHcgpvaIUaEOl5piIeB1A:/ClientActionFlows.2uHcgpvaIUaEOl5piIeB1A:dr5PNDaBGtpXQGAnlMyVnQ", "UBTJavaScriptUtils", "JSUtils_Element_Operations_ToggleAttribute", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:D0nSbAUjAE+gRmiBBqYhSQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:b8VK1+_TC0+n_i3gOAs7Iw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Element_Operations_ToggleAttribute_JavaScript1JS, "JavaScript1", "JSUtils_Element_Operations_ToggleAttribute", {
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Text),
AttrName: OS.DataConversion.JSNodeParamConverter.to(vars.value.attrNameInLocal, OS.DataTypes.DataTypes.Text),
isAdd: OS.DataConversion.JSNodeParamConverter.to(vars.value.isAddInLocal, OS.DataTypes.DataTypes.Boolean),
ElementId: OS.DataConversion.JSNodeParamConverter.to(vars.value.elementIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:is9OVq2RZ0OuL9+5YG39Rw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:2uHcgpvaIUaEOl5piIeB1A", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Element_Operations_ToggleAttribute$vars", [{
name: "isAdd",
attrName: "isAddInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AttrName",
attrName: "attrNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ElementId",
attrName: "elementIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Element_Operations_ToggleAttribute$Action = function (isAddIn, attrNameIn, elementIdIn, valueIn) {
isAddIn = (isAddIn === undefined) ? false : isAddIn;
attrNameIn = (attrNameIn === undefined) ? "" : attrNameIn;
elementIdIn = (elementIdIn === undefined) ? "" : elementIdIn;
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_ToggleAttribute$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isAddIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(attrNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(elementIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Element_Operations_ToggleAttribute.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
 const el = document.getElementById($parameters.ElementId);

if (!el) return;

if (!$parameters.isAdd) {
    el.removeAttribute($parameters.AttrName);
} else {
    el.setAttribute($parameters.AttrName, $parameters.Value === true ? "" : $parameters.Value);
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_DeleteProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_DeleteProperty.SetPropertyJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_ElementCache_DeleteProperty_SetPropertyJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_DeleteProperty$Action = function (parentIn, propertyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_DeleteProperty$vars"))());
vars.value.parentInLocal = parentIn;
vars.value.propertyInLocal = propertyIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:5+3iqEFimE+ysfItR4w35g:/ClientActionFlows.5+3iqEFimE+ysfItR4w35g:q0M0IZErqxnpBiD0mhorBQ", "UBTJavaScriptUtils", "JSUtils_ElementCache_DeleteProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ZZqYpsIhJky8Xzp4N8zNnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Hk2ZC8RSoEyG8kM_t6qNaw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_ElementCache_DeleteProperty_SetPropertyJS, "SetProperty", "JSUtils_ElementCache_DeleteProperty", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyInLocal, OS.DataTypes.DataTypes.Text),
ParentName: OS.DataConversion.JSNodeParamConverter.to(vars.value.parentInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:TsGQzYCvmkOTk2TWZwWFWA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:5+3iqEFimE+ysfItR4w35g", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_DeleteProperty$vars", [{
name: "Parent",
attrName: "parentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_ElementCache_DeleteProperty$Action = function (parentIn, propertyIn) {
parentIn = (parentIn === undefined) ? "" : parentIn;
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_ElementCache_DeleteProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(parentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_DeleteProperty.SetPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window[$parameters.ParentName]) {
    window[$parameters.ParentName][$parameters.PropertyName] = null;
}


};
});

define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetObjProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetObjProperty.GetPropertyJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_ElementCache_GetObjProperty_GetPropertyJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_GetObjProperty$Action = function (parentIn, propertyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetObjProperty$vars"))());
vars.value.parentInLocal = parentIn;
vars.value.propertyInLocal = propertyIn;
var getPropertyJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetObjProperty$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPropertyJSResult = getPropertyJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:LVzMePGFQk6h4G+0iN20BQ:/ClientActionFlows.LVzMePGFQk6h4G+0iN20BQ:XsUcMlYzAWhKUfFwrHtoqg", "UBTJavaScriptUtils", "JSUtils_ElementCache_GetObjProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:XreIw4QL80yMBFmGw8zvwQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:QFYpI9xraUisvCofAfwH8g", callContext.id);
getPropertyJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_ElementCache_GetObjProperty_GetPropertyJS, "GetProperty", "JSUtils_ElementCache_GetObjProperty", {
ParentName: OS.DataConversion.JSNodeParamConverter.to(vars.value.parentInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetObjProperty$getPropertyJSResult"))();
jsNodeResult.valueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Value, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:l0vpLJsLBk2v+lzdH1FPAQ", callContext.id);
// Value = GetProperty.Value
outVars.value.valueOut = getPropertyJSResult.value.valueOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:oSqIaMSaQE6GAooog9KaZg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:LVzMePGFQk6h4G+0iN20BQ", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetObjProperty$vars", [{
name: "Parent",
attrName: "parentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetObjProperty$getPropertyJSResult", [{
name: "Value",
attrName: "valueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetObjProperty$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_ElementCache_GetObjProperty$Action = function (parentIn, propertyIn) {
parentIn = (parentIn === undefined) ? "" : parentIn;
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_ElementCache_GetObjProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(parentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetObjProperty.GetPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window[$parameters.ParentName] && window[$parameters.ParentName][$parameters.PropertyName]) {
    $parameters.Value = window[$parameters.ParentName][$parameters.PropertyName];
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetTextProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetTextProperty.GetPropertyJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_ElementCache_GetTextProperty_GetPropertyJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_GetTextProperty$Action = function (parentIn, propertyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetTextProperty$vars"))());
vars.value.parentInLocal = parentIn;
vars.value.propertyInLocal = propertyIn;
var getPropertyJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetTextProperty$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPropertyJSResult = getPropertyJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:SnWSTy7ih0GTY9DbX50dbA:/ClientActionFlows.SnWSTy7ih0GTY9DbX50dbA:OmjtZFpI+pa5nv8a4mg4bA", "UBTJavaScriptUtils", "JSUtils_ElementCache_GetTextProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:6EqoJQ1WvUWm+hcUzX1pVQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:VFKPQOT0oE+u3dmeI8ZUzQ", callContext.id);
getPropertyJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_ElementCache_GetTextProperty_GetPropertyJS, "GetProperty", "JSUtils_ElementCache_GetTextProperty", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyInLocal, OS.DataTypes.DataTypes.Text),
ParentName: OS.DataConversion.JSNodeParamConverter.to(vars.value.parentInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetTextProperty$getPropertyJSResult"))();
jsNodeResult.valueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Value, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:JUEVBczIYE+8v1T4qGbOrw", callContext.id);
// Value = GetProperty.Value
outVars.value.valueOut = getPropertyJSResult.value.valueOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:aCrO6DUl80yC5677BI9Sig", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:SnWSTy7ih0GTY9DbX50dbA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetTextProperty$vars", [{
name: "Parent",
attrName: "parentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetTextProperty$getPropertyJSResult", [{
name: "Value",
attrName: "valueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_GetTextProperty$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_ElementCache_GetTextProperty$Action = function (parentIn, propertyIn) {
parentIn = (parentIn === undefined) ? "" : parentIn;
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_ElementCache_GetTextProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(parentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_GetTextProperty.GetPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(window[$parameters.ParentName] && window[$parameters.ParentName][$parameters.PropertyName]) {
    $parameters.Value = window[$parameters.ParentName][$parameters.PropertyName];
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetObjProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetObjProperty.SetPropertyJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_ElementCache_SetObjProperty_SetPropertyJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_SetObjProperty$Action = function (parentIn, propertyIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_SetObjProperty$vars"))());
vars.value.parentInLocal = parentIn;
vars.value.propertyInLocal = propertyIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:zScjfRD2gEC_D+wYdIi08w:/ClientActionFlows.zScjfRD2gEC_D+wYdIi08w:lpkD6HQLNQsy8GqX5estUQ", "UBTJavaScriptUtils", "JSUtils_ElementCache_SetObjProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:7RSovxLOvUGlkDgiPS9Mww", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:hneotqh+AUG2Ce+D2Y00dw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_ElementCache_SetObjProperty_SetPropertyJS, "SetProperty", "JSUtils_ElementCache_SetObjProperty", {
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Object),
ParentName: OS.DataConversion.JSNodeParamConverter.to(vars.value.parentInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:AKmwTcYlLEW3MikJGLA_4g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:zScjfRD2gEC_D+wYdIi08w", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_SetObjProperty$vars", [{
name: "Parent",
attrName: "parentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_ElementCache_SetObjProperty$Action = function (parentIn, propertyIn, valueIn) {
parentIn = (parentIn === undefined) ? "" : parentIn;
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
valueIn = (valueIn === undefined) ? null : valueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_ElementCache_SetObjProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(parentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetObjProperty.SetPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(!window[$parameters.ParentName]) {
    window[$parameters.ParentName] = {};
}

window[$parameters.ParentName][$parameters.PropertyName] = $parameters.Value;
};
});

define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetTextProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetTextProperty.SetPropertyJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_ElementCache_SetTextProperty_SetPropertyJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_ElementCache_SetTextProperty$Action = function (parentIn, propertyIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_SetTextProperty$vars"))());
vars.value.parentInLocal = parentIn;
vars.value.propertyInLocal = propertyIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:6hzr92TO3E6A6Bah_sJ_ug:/ClientActionFlows.6hzr92TO3E6A6Bah_sJ_ug:ncsUCa6W502WZ5iVBUkUqg", "UBTJavaScriptUtils", "JSUtils_ElementCache_SetTextProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:pjnDUPIesUS7TPBmPtW_Ow", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:LVtrytQdVkeAO1rvwY2KbA", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_ElementCache_SetTextProperty_SetPropertyJS, "SetProperty", "JSUtils_ElementCache_SetTextProperty", {
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyInLocal, OS.DataTypes.DataTypes.Text),
ParentName: OS.DataConversion.JSNodeParamConverter.to(vars.value.parentInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ZAHV20wBr0e3G3mXqUcuYA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:6hzr92TO3E6A6Bah_sJ_ug", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_ElementCache_SetTextProperty$vars", [{
name: "Parent",
attrName: "parentInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_ElementCache_SetTextProperty$Action = function (parentIn, propertyIn, valueIn) {
parentIn = (parentIn === undefined) ? "" : parentIn;
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_ElementCache_SetTextProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(parentIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_ElementCache_SetTextProperty.SetPropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(!window[$parameters.ParentName]) {
    window[$parameters.ParentName] = {};
}

window[$parameters.ParentName][$parameters.PropertyName] = $parameters.Value;
};
});

define("UBTJavaScriptUtils.controller$JSUtils_GenerateGuid", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_GenerateGuid.GenerateGuidJSJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_GenerateGuid_GenerateGuidJSJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_GenerateGuid$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var generateGuidJSJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_GenerateGuid$outVars"))());
varBag.callContext = callContext;
varBag.generateGuidJSJSResult = generateGuidJSJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:pWldAHVbSUWPfEXbMWMGaA:/ClientActionFlows.pWldAHVbSUWPfEXbMWMGaA:vc4XJ+ZV2+PdceceEgmRiQ", "UBTJavaScriptUtils", "JSUtils_GenerateGuid", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:UvO2qnZvnUSwRxFycU5Mvg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:HpO+dzfqlEeSkKFqQOvbaA", callContext.id);
generateGuidJSJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_GenerateGuid_GenerateGuidJSJS, "GenerateGuidJS", "JSUtils_GenerateGuid", {
Guid: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_GenerateGuid$generateGuidJSJSResult"))();
jsNodeResult.guidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Guid, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:VBDRtZpVfUG5xtRLXQW+kA", callContext.id);
// Guid = GenerateGuidJS.Guid
outVars.value.guidOut = generateGuidJSJSResult.value.guidOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:7Cnn5g6dpE+4mSbELzgqmA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:pWldAHVbSUWPfEXbMWMGaA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_GenerateGuid$generateGuidJSJSResult", [{
name: "Guid",
attrName: "guidOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_GenerateGuid$outVars", [{
name: "Guid",
attrName: "guidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_GenerateGuid$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_GenerateGuid$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Guid: OS.DataConversion.JSNodeParamConverter.to(actionResults.guidOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_GenerateGuid.GenerateGuidJSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Guid = window.crypto.randomUUID();
};
});

define("UBTJavaScriptUtils.controller$JSUtils_LocalStorage_GetItem", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_LocalStorage_GetItem.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_LocalStorage_GetItem_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_LocalStorage_GetItem$Action = function (keyIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_GetItem$vars"))());
vars.value.keyInLocal = keyIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_GetItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:jbBBU5C_gkCy2vdxtdhXfg:/ClientActionFlows.jbBBU5C_gkCy2vdxtdhXfg:TvXqSSHFPm2K149DkvPf1A", "UBTJavaScriptUtils", "JSUtils_LocalStorage_GetItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:6Ok5OdGfR0mHOk_bJtdu9w", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:OU4QiPN0fk+t+ZxXCYR1sw", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_LocalStorage_GetItem_JavaScript1JS, "JavaScript1", "JSUtils_LocalStorage_GetItem", {
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.keyInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_GetItem$javaScript1JSResult"))();
jsNodeResult.valueOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Value, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:tT+tGWeFWEmRAmkJqeMAIw", callContext.id);
// Value = JavaScript1.Value
outVars.value.valueOut = javaScript1JSResult.value.valueOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:11rPl8aZA0iZCQ9pkgEp4w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:jbBBU5C_gkCy2vdxtdhXfg", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_GetItem$vars", [{
name: "Key",
attrName: "keyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_GetItem$javaScript1JSResult", [{
name: "Value",
attrName: "valueOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_GetItem$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_LocalStorage_GetItem$Action = function (keyIn) {
keyIn = (keyIn === undefined) ? "" : keyIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_LocalStorage_GetItem$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(keyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataConversion.JSNodeParamConverter.to(actionResults.valueOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_LocalStorage_GetItem.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var item =  localStorage.getItem($parameters.Key);
if(item){
    $parameters.Value = item;
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_LocalStorage_SetItem", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_LocalStorage_SetItem.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_LocalStorage_SetItem_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_LocalStorage_SetItem$Action = function (keyIn, valueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_SetItem$vars"))());
vars.value.keyInLocal = keyIn;
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:w7P1EkKE+k6oXENkmP8oSA:/ClientActionFlows.w7P1EkKE+k6oXENkmP8oSA:FEM5U171NXAhfgra+9povw", "UBTJavaScriptUtils", "JSUtils_LocalStorage_SetItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:V7JeUiml+EKhPkBnzY53mA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:tPe_ynxz90qfjj103xxutw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_LocalStorage_SetItem_JavaScript1JS, "JavaScript1", "JSUtils_LocalStorage_SetItem", {
Key: OS.DataConversion.JSNodeParamConverter.to(vars.value.keyInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:wpy+pLQVf0+kYNTLeme9WA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:w7P1EkKE+k6oXENkmP8oSA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_LocalStorage_SetItem$vars", [{
name: "Key",
attrName: "keyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_LocalStorage_SetItem$Action = function (keyIn, valueIn) {
keyIn = (keyIn === undefined) ? "" : keyIn;
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_LocalStorage_SetItem$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(keyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_LocalStorage_SetItem.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
localStorage.setItem($parameters.Key, $parameters.Value);
};
});

define("UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_PageOpenInNewTab_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_PageOpenInNewTab$Action = function (uRLIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_PageOpenInNewTab$vars"))());
vars.value.uRLInLocal = uRLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:kNdMXmA1EkuNfgCJbMBO3A:/ClientActionFlows.kNdMXmA1EkuNfgCJbMBO3A:xbuHOcVgLplHZCIH7bKMRg", "UBTJavaScriptUtils", "JSUtils_PageOpenInNewTab", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:3SMjN6OvQ0iFx5ygHt0V6w", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:0D1REPBTrkiSeRn6P1TGkw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_PageOpenInNewTab_JavaScript1JS, "JavaScript1", "JSUtils_PageOpenInNewTab", {
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:u+WK473jD0iTg6npdJreeQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:kNdMXmA1EkuNfgCJbMBO3A", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_PageOpenInNewTab$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_PageOpenInNewTab$Action = function (uRLIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_PageOpenInNewTab$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.open($parameters.URL , '_blank');
};
});

define("UBTJavaScriptUtils.controller$JSUtils_PageRedirect", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_PageRedirect.Navigate2JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_PageRedirect_Navigate2JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_PageRedirect$Action = function (uRLIn, navigateIfSamePageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_PageRedirect$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.navigateIfSamePageInLocal = navigateIfSamePageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:tprwAR3T_k2k2wircaETMA:/ClientActionFlows.tprwAR3T_k2k2wircaETMA:hbHzekA2OZZF2ArKJM_aFA", "UBTJavaScriptUtils", "JSUtils_PageRedirect", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:zUljqSrBOk2_ak4TLPYx0Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:rYNNzZQpykOUA0nJlTYKoA", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_PageRedirect_Navigate2JS, "Navigate2", "JSUtils_PageRedirect", {
NavigateIfSamePage: OS.DataConversion.JSNodeParamConverter.to(vars.value.navigateIfSamePageInLocal, OS.DataTypes.DataTypes.Boolean),
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:O6MIGiL1ikCT8KMVyu1j0Q", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:tprwAR3T_k2k2wircaETMA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_PageRedirect$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NavigateIfSamePage",
attrName: "navigateIfSamePageInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_PageRedirect$Action = function (uRLIn, navigateIfSamePageIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
navigateIfSamePageIn = (navigateIfSamePageIn === undefined) ? true : navigateIfSamePageIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_PageRedirect$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(navigateIfSamePageIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_PageRedirect.Navigate2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.NavigateIfSamePage || window.location.href !== $parameters.URL) {
    window.location.href = $parameters.URL;
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_PageRefresh", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_PageRefresh.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_PageRefresh_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_PageRefresh$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:yrn8jOwNaUGlQkfzp+fQxg:/ClientActionFlows.yrn8jOwNaUGlQkfzp+fQxg:NeArz++ylwyu27TFu5jjVA", "UBTJavaScriptUtils", "JSUtils_PageRefresh", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:P8Mo6hrEhUmREjgtY71ifw", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:qmlXwIUFwUC7UwDlIcPbsA", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_PageRefresh_JavaScript1JS, "JavaScript1", "JSUtils_PageRefresh", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:EscX9YkXzEaMznYUiS65PQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:yrn8jOwNaUGlQkfzp+fQxg", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_PageRefresh$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_PageRefresh$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_PageRefresh.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
//location.href = location.href;
location.reload(false);
};
});

define("UBTJavaScriptUtils.controller$JSUtils_RunFunc", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_RunFunc.RunFuncJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_RunFunc_RunFuncJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action = function (funcIn, paramIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc$vars"))());
vars.value.funcInLocal = funcIn;
vars.value.paramInLocal = paramIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:cfs7Es0NvE+hFArP4omcbQ:/ClientActionFlows.cfs7Es0NvE+hFArP4omcbQ:5WTsWxg50+M0UHafm0jdbg", "UBTJavaScriptUtils", "JSUtils_RunFunc", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Win+rbPZbkG2dGqwAsZPww", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:as7Zhcic90WVuPAHeSY7ew", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_RunFunc_RunFuncJS, "RunFunc", "JSUtils_RunFunc", {
Param: OS.DataConversion.JSNodeParamConverter.to(vars.value.paramInLocal, OS.DataTypes.DataTypes.Object),
Func: OS.DataConversion.JSNodeParamConverter.to(vars.value.funcInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:AC3INeixK02XkcCj8mbhyw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:cfs7Es0NvE+hFArP4omcbQ", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc$vars", [{
name: "Func",
attrName: "funcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Param",
attrName: "paramInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_RunFunc$Action = function (funcIn, paramIn) {
funcIn = (funcIn === undefined) ? null : funcIn;
paramIn = (paramIn === undefined) ? null : paramIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(funcIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(paramIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_RunFunc.RunFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Func) {
    $parameters.Func($parameters.Param);
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithBoolResult", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithBoolResult.RunFuncJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_RunFunc_Sync_WithBoolResult_RunFuncJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_RunFunc_Sync_WithBoolResult$Action = function (funcIn, paramIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithBoolResult$vars"))());
vars.value.funcInLocal = funcIn;
vars.value.paramInLocal = paramIn;
var runFuncJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithBoolResult$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.runFuncJSResult = runFuncJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:PDiNcbyG7kSuhMiVdujopQ:/ClientActionFlows.PDiNcbyG7kSuhMiVdujopQ:GC91GRCvXBqBzcmx1FGl6Q", "UBTJavaScriptUtils", "JSUtils_RunFunc_Sync_WithBoolResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:uFOIdDHc8UGfukMGXCgtQA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:W3KaEqvMaEG4Mb48X_xF0A", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTJavaScriptUtils_controller_JSUtils_RunFunc_Sync_WithBoolResult_RunFuncJS, "RunFunc", "JSUtils_RunFunc_Sync_WithBoolResult", {
Param: OS.DataConversion.JSNodeParamConverter.to(vars.value.paramInLocal, OS.DataTypes.DataTypes.Object),
Func: OS.DataConversion.JSNodeParamConverter.to(vars.value.funcInLocal, OS.DataTypes.DataTypes.Object),
Result: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithBoolResult$runFuncJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
runFuncJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:r65INfn43UqHT6+9k8dM8g", callContext.id);
// Result = RunFunc.Result
outVars.value.resultOut = runFuncJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:qdt7+H7_cEuJi9HhaFK9Ag", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:PDiNcbyG7kSuhMiVdujopQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:PDiNcbyG7kSuhMiVdujopQ", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithBoolResult$vars", [{
name: "Func",
attrName: "funcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Param",
attrName: "paramInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithBoolResult$runFuncJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithBoolResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_RunFunc_Sync_WithBoolResult$Action = function (funcIn, paramIn) {
funcIn = (funcIn === undefined) ? null : funcIn;
paramIn = (paramIn === undefined) ? null : paramIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_RunFunc_Sync_WithBoolResult$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(funcIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(paramIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithBoolResult.RunFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if($parameters.Func) { 
    $parameters.Func($parameters.Param).then(function(results) {
        $parameters.Result = results.Result;
        $resolve();
    }).catch(function(err) {
        $reject(err);
    });
} else {
    $resolve();
}
});
};
});

define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithTextResult", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithTextResult.RunFuncJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_RunFunc_Sync_WithTextResult_RunFuncJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_RunFunc_Sync_WithTextResult$Action = function (funcIn, paramIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithTextResult$vars"))());
vars.value.funcInLocal = funcIn;
vars.value.paramInLocal = paramIn;
var runFuncJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithTextResult$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.runFuncJSResult = runFuncJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:A02Fk0a970iQttA+QDw+bg:/ClientActionFlows.A02Fk0a970iQttA+QDw+bg:mdJM8rthQeLpV83ORxTQKg", "UBTJavaScriptUtils", "JSUtils_RunFunc_Sync_WithTextResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:WYmIdGgIrk+0rUrWuhYtOQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Q8j6iVSby06nfM3CJa97dA", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTJavaScriptUtils_controller_JSUtils_RunFunc_Sync_WithTextResult_RunFuncJS, "RunFunc", "JSUtils_RunFunc_Sync_WithTextResult", {
Param: OS.DataConversion.JSNodeParamConverter.to(vars.value.paramInLocal, OS.DataTypes.DataTypes.Object),
Func: OS.DataConversion.JSNodeParamConverter.to(vars.value.funcInLocal, OS.DataTypes.DataTypes.Object),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithTextResult$runFuncJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
runFuncJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Azw8uka44kmUOaNSa30Yvw", callContext.id);
// Result = RunFunc.Result
outVars.value.resultOut = runFuncJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:BoyFEBMp9EWvVqnbVGthQQ", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:A02Fk0a970iQttA+QDw+bg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:A02Fk0a970iQttA+QDw+bg", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithTextResult$vars", [{
name: "Func",
attrName: "funcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Param",
attrName: "paramInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithTextResult$runFuncJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_Sync_WithTextResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_RunFunc_Sync_WithTextResult$Action = function (funcIn, paramIn) {
funcIn = (funcIn === undefined) ? null : funcIn;
paramIn = (paramIn === undefined) ? null : paramIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_RunFunc_Sync_WithTextResult$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(funcIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(paramIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_Sync_WithTextResult.RunFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if($parameters.Func) { 
    $parameters.Func($parameters.Param).then(function(results) {
        $parameters.Result = results.Result;
        $resolve();
    }).catch(function(err) {
        $reject(err);
    });
} else {
    $resolve();
}
});
};
});

define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithBoolResult", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithBoolResult.RunFuncJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_RunFunc_WithBoolResult_RunFuncJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_RunFunc_WithBoolResult$Action = function (funcIn, paramIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithBoolResult$vars"))());
vars.value.funcInLocal = funcIn;
vars.value.paramInLocal = paramIn;
var runFuncJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithBoolResult$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.runFuncJSResult = runFuncJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:H6ZCeYitHEyVFbGjh3Wo+w:/ClientActionFlows.H6ZCeYitHEyVFbGjh3Wo+w:MMIdzb4mKYJVihZP84pIpg", "UBTJavaScriptUtils", "JSUtils_RunFunc_WithBoolResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:M9mI5kYR5EKsCZfUOkNVAQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:c9C4n+l9GEOCjtxjbf8plg", callContext.id);
runFuncJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_RunFunc_WithBoolResult_RunFuncJS, "RunFunc", "JSUtils_RunFunc_WithBoolResult", {
Func: OS.DataConversion.JSNodeParamConverter.to(vars.value.funcInLocal, OS.DataTypes.DataTypes.Object),
Param: OS.DataConversion.JSNodeParamConverter.to(vars.value.paramInLocal, OS.DataTypes.DataTypes.Object),
Result: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithBoolResult$runFuncJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:0dciyk6bRUSCFUEwRGKaYA", callContext.id);
// Result = RunFunc.Result
outVars.value.resultOut = runFuncJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:1bNbIWrWgUq1Oa+WypG2Fg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:H6ZCeYitHEyVFbGjh3Wo+w", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithBoolResult$vars", [{
name: "Func",
attrName: "funcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Param",
attrName: "paramInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithBoolResult$runFuncJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithBoolResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_RunFunc_WithBoolResult$Action = function (funcIn, paramIn) {
funcIn = (funcIn === undefined) ? null : funcIn;
paramIn = (paramIn === undefined) ? null : paramIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_RunFunc_WithBoolResult$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(funcIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(paramIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithBoolResult.RunFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Func) { 
    $parameters.Result =  $parameters.Func($parameters.Param).Result;
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithObjectResult", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithObjectResult.RunFuncJS", "UBTJavaScriptUtils.controller$JSUtils_AssignFromObject"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_RunFunc_WithObjectResult_RunFuncJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_RunFunc_WithObjectResult$Action = function (funcIn, paramIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithObjectResult$vars"))());
vars.value.funcInLocal = funcIn;
vars.value.paramInLocal = paramIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithObjectResult$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:w+BMovp0f0K_MQ0I0JMcFA:/ClientActionFlows.w+BMovp0f0K_MQ0I0JMcFA:2K8gLXE5_j5H3ba_L9gyRg", "UBTJavaScriptUtils", "JSUtils_RunFunc_WithObjectResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Gfd1YXSiIkCWD9Uc8edN7w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:6mOjvtzq7UGOXbVeDx+35A", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTJavaScriptUtils_controller_JSUtils_RunFunc_WithObjectResult_RunFuncJS, "RunFunc", "JSUtils_RunFunc_WithObjectResult", {
Param: OS.DataConversion.JSNodeParamConverter.to(vars.value.paramInLocal, OS.DataTypes.DataTypes.Object),
Func: OS.DataConversion.JSNodeParamConverter.to(vars.value.funcInLocal, OS.DataTypes.DataTypes.Object),
EmptyArray: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.toObject(outVars.value.resultOut), OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {
JSUtils_AssignFromObject: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_AssignFromObject$Action
}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:LNWnon_mNUu4sfey1k5hRg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:w+BMovp0f0K_MQ0I0JMcFA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:w+BMovp0f0K_MQ0I0JMcFA", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithObjectResult$vars", [{
name: "Func",
attrName: "funcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Param",
attrName: "paramInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithObjectResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_RunFunc_WithObjectResult$Action = function (funcIn, paramIn) {
funcIn = (funcIn === undefined) ? null : funcIn;
paramIn = (paramIn === undefined) ? null : paramIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_RunFunc_WithObjectResult$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(funcIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(paramIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: actionResults.resultOut
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithObjectResult.RunFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
Promise.resolve($parameters.Func($parameters.Param))
  .then(response => {
    // Collect all own-property values in a local array
    const responseArray = response && typeof response === "object"
      ? Object.values(response)
      : [];

    // Push all collected objects at once
    const clone =  $parameters.EmptyArray.clone();
    clone.pushAll(responseArray);
    $actions.JSUtils_AssignFromObject($parameters.EmptyArray,clone);
  })
  .catch(error => {
    console.error("Callback failed:", error);
  })
  .finally(() => {
    $resolve();
  });
});
};
});

define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithTextResult", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithTextResult.RunFuncJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_RunFunc_WithTextResult_RunFuncJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_RunFunc_WithTextResult$Action = function (funcIn, paramIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithTextResult$vars"))());
vars.value.funcInLocal = funcIn;
vars.value.paramInLocal = paramIn;
var runFuncJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithTextResult$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.runFuncJSResult = runFuncJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:hPy_4bGmKkyax3col8MEyQ:/ClientActionFlows.hPy_4bGmKkyax3col8MEyQ:OUVuly1kB3jGjHEMNa5itg", "UBTJavaScriptUtils", "JSUtils_RunFunc_WithTextResult", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:bNIxhmXjskSnhHmP7_NTxg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:dBBfC3ri+kWnEipHlq01vQ", callContext.id);
runFuncJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_RunFunc_WithTextResult_RunFuncJS, "RunFunc", "JSUtils_RunFunc_WithTextResult", {
Param: OS.DataConversion.JSNodeParamConverter.to(vars.value.paramInLocal, OS.DataTypes.DataTypes.Object),
Func: OS.DataConversion.JSNodeParamConverter.to(vars.value.funcInLocal, OS.DataTypes.DataTypes.Object),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithTextResult$runFuncJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:QbJbw9_C_E2Yal3ZJpDcSQ", callContext.id);
// Result = RunFunc.Result
outVars.value.resultOut = runFuncJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:1RtvkxopyUCmUFZl0sLaMw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:hPy_4bGmKkyax3col8MEyQ", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithTextResult$vars", [{
name: "Func",
attrName: "funcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Param",
attrName: "paramInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithTextResult$runFuncJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_RunFunc_WithTextResult$outVars", [{
name: "Result",
attrName: "resultOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_RunFunc_WithTextResult$Action = function (funcIn, paramIn) {
funcIn = (funcIn === undefined) ? null : funcIn;
paramIn = (paramIn === undefined) ? null : paramIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_RunFunc_WithTextResult$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(funcIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(paramIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_RunFunc_WithTextResult.RunFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if($parameters.Func) { 
    $parameters.Result =  $parameters.Func($parameters.Param).Result;
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_SetStyleProperty_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_SetStyleProperty$Action = function (objectIdIn, propertyNameIn, propertyValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_SetStyleProperty$vars"))());
vars.value.objectIdInLocal = objectIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertyValueInLocal = propertyValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:EeFqweVtsk+HRS2uiV1L7w:/ClientActionFlows.EeFqweVtsk+HRS2uiV1L7w:8ZXOr9OvISW1aeKP5VQRfg", "UBTJavaScriptUtils", "JSUtils_SetStyleProperty", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:mM22TUsAA0mdJwbU8Qk+7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:9EzrloT4W0WShMQVu_fyJQ", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_SetStyleProperty_JavaScript1JS, "JavaScript1", "JSUtils_SetStyleProperty", {
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertyValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyValueInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:If5J_vyU5kOBxN5yak_Heg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:EeFqweVtsk+HRS2uiV1L7w", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_SetStyleProperty$vars", [{
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValue",
attrName: "propertyValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_SetStyleProperty$Action = function (objectIdIn, propertyNameIn, propertyValueIn) {
objectIdIn = (objectIdIn === undefined) ? "" : objectIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertyValueIn = (propertyValueIn === undefined) ? "" : propertyValueIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_SetStyleProperty$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.Id)?.style.setProperty(
  $parameters.PropertyName,
  $parameters.PropertyValue
);

};
});

define("UBTJavaScriptUtils.controller$JSUtils_String_CheckNumbers", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_String_CheckNumbers.CheckNotContainNumberJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_String_CheckNumbers_CheckNotContainNumberJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_String_CheckNumbers$Action = function (textIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_CheckNumbers$vars"))());
vars.value.textInLocal = textIn;
var checkNotContainNumberJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_CheckNumbers$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkNotContainNumberJSResult = checkNotContainNumberJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:wqSgCqJ6zUG9uvtlQYfTSg:/ClientActionFlows.wqSgCqJ6zUG9uvtlQYfTSg:CJ3iGkyLn8XlrwM3X3kd3w", "UBTJavaScriptUtils", "JSUtils_String_CheckNumbers", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:jxU76T_xQ0eHF6WrBVW8ig", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:OvEk9R1X9EezqJ7c9fj8IA", callContext.id);
checkNotContainNumberJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_String_CheckNumbers_CheckNotContainNumberJS, "CheckNotContainNumber", "JSUtils_String_CheckNumbers", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_CheckNumbers$checkNotContainNumberJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:H3HRRnMkykaEg5NBXForAw", callContext.id);
// Found = CheckNotContainNumber.Result
outVars.value.foundOut = checkNotContainNumberJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ox9Z8IsQ6UaK6hhwjPSttA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:wqSgCqJ6zUG9uvtlQYfTSg", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_CheckNumbers$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_CheckNumbers$checkNotContainNumberJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_CheckNumbers$outVars", [{
name: "Found",
attrName: "foundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_String_CheckNumbers$Action = function (textIn) {
textIn = (textIn === undefined) ? "" : textIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_String_CheckNumbers$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Found: OS.DataConversion.JSNodeParamConverter.to(actionResults.foundOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_String_CheckNumbers.CheckNotContainNumberJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var Text = $parameters.Text;
$parameters.Result =/[0-9]/g.test(Text);

};
});

define("UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents.RemoveAccentesJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_String_RemoveAccents_RemoveAccentesJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action = function (in_TextIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_RemoveAccents$vars"))());
vars.value.in_TextInLocal = in_TextIn;
var removeAccentesJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_RemoveAccents$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.removeAccentesJSResult = removeAccentesJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:cUYxdfT_EEaFgwvaAopaCA:/ClientActionFlows.cUYxdfT_EEaFgwvaAopaCA:D5fjqrzhFr+j02NQ5DNFSw", "UBTJavaScriptUtils", "JSUtils_String_RemoveAccents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:i1bh+099okKfCOLjiLDWKg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:+8FbCBWRo0utMoHntnxVow", callContext.id);
removeAccentesJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_String_RemoveAccents_RemoveAccentesJS, "RemoveAccentes", "JSUtils_String_RemoveAccents", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_TextInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_RemoveAccents$removeAccentesJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:tjoYn1uqOEqNf7mNSJ1oWQ", callContext.id);
// Out_Text = RemoveAccentes.Result
outVars.value.out_TextOut = removeAccentesJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:b177JzbZpUmI8607tszLSw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:cUYxdfT_EEaFgwvaAopaCA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_RemoveAccents$vars", [{
name: "In_Text",
attrName: "in_TextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_RemoveAccents$removeAccentesJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_RemoveAccents$outVars", [{
name: "Out_Text",
attrName: "out_TextOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_String_RemoveAccents$Action = function (in_TextIn) {
in_TextIn = (in_TextIn === undefined) ? "" : in_TextIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TextIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Text: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_TextOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents.RemoveAccentesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var str = $parameters.Text;
// split accented chars into base + diacritic; And remove diacritics
$parameters.Result = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ;

};
});

define("UBTJavaScriptUtils.controller$JSUtils_String_Split", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_String_Split.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_String_Split_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_String_Split$Action = function (stringIn, charIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_Split$vars"))());
vars.value.stringInLocal = stringIn;
vars.value.charInLocal = charIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeTextListVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_Split$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.jSONDeserializeTextListVar = jSONDeserializeTextListVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:udfuznEmPkm18bLUT+XDQw:/ClientActionFlows.udfuznEmPkm18bLUT+XDQw:dqCAOmyzdZHSvF4UZvLNzg", "UBTJavaScriptUtils", "JSUtils_String_Split", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:g2LlTAaGtkSnCydkhrGKUA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ArY3l3zqsUWfnPXT+MgMhQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_String_Split_JavaScript1JS, "JavaScript1", "JSUtils_String_Split", {
string: OS.DataConversion.JSNodeParamConverter.to(vars.value.stringInLocal, OS.DataTypes.DataTypes.Text),
char: OS.DataConversion.JSNodeParamConverter.to(vars.value.charInLocal, OS.DataTypes.DataTypes.Text),
result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_String_Split$javaScript1JSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:wo4_3MAIT0SVRlemkq6H5w", callContext.id);
// JSON Deserialize: JSONDeserializeTextList
jSONDeserializeTextListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.resultOut, OS.DataTypes.TextList, false);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:wg59j2KK3UCJagiqJ63Zmw", callContext.id);
// List = JSONDeserializeTextList.Data
outVars.value.listOut = jSONDeserializeTextListVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:gFbo7UUdtU+oEycmSZ3OCQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:udfuznEmPkm18bLUT+XDQw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_Split$vars", [{
name: "String",
attrName: "stringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Char",
attrName: "charInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_Split$javaScript1JSResult", [{
name: "result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_String_Split$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_String_Split$Action = function (stringIn, charIn) {
stringIn = (stringIn === undefined) ? "" : stringIn;
charIn = (charIn === undefined) ? "" : charIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_String_Split$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(stringIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(charIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_String_Split.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var text = $parameters.string;
var myArray = text.split($parameters.char);
$parameters.result = JSON.stringify(myArray)
};
});

define("UBTJavaScriptUtils.controller$JSUtils_Text_BinaryToText", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Text_BinaryToText.BinaryToTextJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Text_BinaryToText_BinaryToTextJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Text_BinaryToText$Action = function (in_BinaryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_BinaryToText$vars"))());
vars.value.in_BinaryInLocal = in_BinaryIn;
var binaryToTextJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_BinaryToText$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.binaryToTextJSResult = binaryToTextJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:Zlz+a1ZYOk6gZe4JuIwmRA:/ClientActionFlows.Zlz+a1ZYOk6gZe4JuIwmRA:BJ5GfyolM+dx12qGixmCxA", "UBTJavaScriptUtils", "JSUtils_Text_BinaryToText", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ARZ_M7SpGEuj6SBCebiTIA", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:3sMEIAtOok2FjfL3Du9b5w", callContext.id);
binaryToTextJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Text_BinaryToText_BinaryToTextJS, "BinaryToText", "JSUtils_Text_BinaryToText", {
Binary: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_BinaryInLocal, OS.DataTypes.DataTypes.BinaryData),
Text: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_BinaryToText$binaryToTextJSResult"))();
jsNodeResult.textOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Text, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:5JxS8fr+x0uvk_2AO8C_sA", callContext.id);
// Out_Text = BinaryToText.Text
outVars.value.out_TextOut = binaryToTextJSResult.value.textOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:syGspyQk2U6wJ84Ww0bN1w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:Zlz+a1ZYOk6gZe4JuIwmRA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_BinaryToText$vars", [{
name: "In_Binary",
attrName: "in_BinaryInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_BinaryToText$binaryToTextJSResult", [{
name: "Text",
attrName: "textOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_BinaryToText$outVars", [{
name: "Out_Text",
attrName: "out_TextOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Text_BinaryToText$Action = function (in_BinaryIn) {
in_BinaryIn = (in_BinaryIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : in_BinaryIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Text_BinaryToText$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_BinaryIn, OS.DataTypes.DataTypes.BinaryData)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Text: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_TextOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Text_BinaryToText.BinaryToTextJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (!$parameters.Binary) {
    $parameters.Text = "";
    return;
}

try {
    // 2. Decode Base64 (OutSystems Binary) to raw string
    var rawString = atob($parameters.Binary);
    
    // 3. Escape the raw string to prepare for URI decoding
    var escapedString = escape(rawString);
    
    // 4. Decode URI components to properly restore UTF-8 characters (Rich Text/Emojis)
    $parameters.Text = decodeURIComponent(escapedString);

} catch (e) {
    console.error("BinaryToText Error:", e);
    // Return empty string on error to prevent app crash
    $parameters.Text = ""; 
}
};
});

define("UBTJavaScriptUtils.controller$JSUtils_Text_TextToBinary", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$JSUtils_Text_TextToBinary.TextToBinaryJS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_JSUtils_Text_TextToBinary_TextToBinaryJS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.jSUtils_Text_TextToBinary$Action = function (in_TextIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_TextToBinary$vars"))());
vars.value.in_TextInLocal = in_TextIn;
var textToBinaryJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_TextToBinary$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.textToBinaryJSResult = textToBinaryJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:64V442EB4EGxVFUjASBeiA:/ClientActionFlows.64V442EB4EGxVFUjASBeiA:Co5fpkjVcWEdTGitVnFJtQ", "UBTJavaScriptUtils", "JSUtils_Text_TextToBinary", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:+z4y9o2gzkaI0uJyHPTx8A", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Z_342yHyvk6t4szndQvU0A", callContext.id);
textToBinaryJSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_JSUtils_Text_TextToBinary_TextToBinaryJS, "TextToBinary", "JSUtils_Text_TextToBinary", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_TextInLocal, OS.DataTypes.DataTypes.Text),
Binary: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.BinaryData.defaultValue, OS.DataTypes.DataTypes.BinaryData)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_TextToBinary$textToBinaryJSResult"))();
jsNodeResult.binaryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Binary, OS.DataTypes.DataTypes.BinaryData);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:BxCxGhjeUkuw_ZfyXVFYbg", callContext.id);
// Out_Binary = TextToBinary.Binary
outVars.value.out_BinaryOut = textToBinaryJSResult.value.binaryOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:s7LU7UYNo0q_PJDE4Cb7ww", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:64V442EB4EGxVFUjASBeiA", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_TextToBinary$vars", [{
name: "In_Text",
attrName: "in_TextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_TextToBinary$textToBinaryJSResult", [{
name: "Binary",
attrName: "binaryOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.JSUtils_Text_TextToBinary$outVars", [{
name: "Out_Binary",
attrName: "out_BinaryOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.jSUtils_Text_TextToBinary$Action = function (in_TextIn) {
in_TextIn = (in_TextIn === undefined) ? "" : in_TextIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.jSUtils_Text_TextToBinary$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TextIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Binary: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_BinaryOut, OS.DataTypes.DataTypes.BinaryData)
};
});
};
});
define("UBTJavaScriptUtils.controller$JSUtils_Text_TextToBinary.TextToBinaryJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (!$parameters.Text) {
    $parameters.Binary = ""; 
    return;
}

try {
    // .toWellFormed() replaces invalid unicode sequences that crash encodeURIComponent
    // Note: Only necessary if you support very old copy-paste sources.
    var safeText = $parameters.Text;
    if (String.prototype.toWellFormed) {
        safeText = safeText.toWellFormed();
    }

    var uriEncoded = encodeURIComponent(safeText);
    var rawString = unescape(uriEncoded);
    $parameters.Binary = btoa(rawString);

} catch (e) {
    console.error("RichTextToBinary Error:", e);
    $parameters.Binary = ""; 
}
};
});

define("UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate.JavaScript1JS", "UBTJavaScriptUtils.controller$ReactiveInstance_GetStateNode", "UBTJavaScriptUtils.controller$ReactiveInstance_Get"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ReactiveInstance_ForceUpdate_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.reactiveInstance_ForceUpdate$Action = function (elementIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_ForceUpdate$vars"))());
vars.value.elementInLocal = elementIn;
var reactiveInstance_GetStateNodeVar = new OS.DataTypes.VariableHolder();
var reactiveInstance_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.reactiveInstance_GetStateNodeVar = reactiveInstance_GetStateNodeVar;
varBag.reactiveInstance_GetVar = reactiveInstance_GetVar;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:oU93HHzGyUOyKF74dUsXsw:/ClientActionFlows.oU93HHzGyUOyKF74dUsXsw:AqeYFDskHDQ0MxvmvITmZw", "UBTJavaScriptUtils", "ReactiveInstance_ForceUpdate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:5JXbjnIDW0aVHOCHe9MG5g", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:7xf3GqhL+0GrhxccQCNoMQ", callContext.id);
// Execute Action: ReactiveInstance_Get
reactiveInstance_GetVar.value = UBTJavaScriptUtilsController.default.reactiveInstance_Get$Action(vars.value.elementInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:YdB0AMiQwU2biG52Y5vkfw", callContext.id);
// Execute Action: ReactiveInstance_GetStateNode
reactiveInstance_GetStateNodeVar.value = UBTJavaScriptUtilsController.default.reactiveInstance_GetStateNode$Action(reactiveInstance_GetVar.value.reactiveInstanceOut, callContext);

OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:5QOf8JVFTEWCLspB_gihNg", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ReactiveInstance_ForceUpdate_JavaScript1JS, "JavaScript1", "ReactiveInstance_ForceUpdate", {
StateNode: OS.DataConversion.JSNodeParamConverter.to(reactiveInstance_GetStateNodeVar.value.stateNodeOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ucfdxOLZukCu3rPbQLeNbQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:oU93HHzGyUOyKF74dUsXsw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_ForceUpdate$vars", [{
name: "Element",
attrName: "elementInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.reactiveInstance_ForceUpdate$Action = function (elementIn) {
elementIn = (elementIn === undefined) ? null : elementIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.reactiveInstance_ForceUpdate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
setTimeout(function() {$parameters.StateNode.forceUpdate()},0);
};
});

define("UBTJavaScriptUtils.controller$ReactiveInstance_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ReactiveInstance_Get.JavaScript1JS", "UBTJavaScriptUtils.controller$JSUtils_Console_Log"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ReactiveInstance_Get_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.reactiveInstance_Get$Action = function (elementIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_Get$vars"))());
vars.value.elementInLocal = elementIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_Get$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:0zWNLlWirkqJz2iPGtTX8Q:/ClientActionFlows.0zWNLlWirkqJz2iPGtTX8Q:iI9P0abHlEot_0DdM9yi3g", "UBTJavaScriptUtils", "ReactiveInstance_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:DSWq6fLDtE6SDSgDc3LMmg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Yy9EnVgsv0GXzeGf8ZcwJw", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ReactiveInstance_Get_JavaScript1JS, "JavaScript1", "ReactiveInstance_Get", {
Element: OS.DataConversion.JSNodeParamConverter.to(vars.value.elementInLocal, OS.DataTypes.DataTypes.Object),
Instance: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_Get$javaScript1JSResult"))();
jsNodeResult.instanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Instance, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
JSUtils_Console_Log: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Console_Log$Action
}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:GdA8BMW+e0ONIefYqdQ_wA", callContext.id);
// ReactiveInstance = JavaScript1.Instance
outVars.value.reactiveInstanceOut = javaScript1JSResult.value.instanceOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:PJJaFaeND06KFGdvt1JqsQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:0zWNLlWirkqJz2iPGtTX8Q", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_Get$vars", [{
name: "Element",
attrName: "elementInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_Get$javaScript1JSResult", [{
name: "Instance",
attrName: "instanceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_Get$outVars", [{
name: "ReactiveInstance",
attrName: "reactiveInstanceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.reactiveInstance_Get$Action = function (elementIn) {
elementIn = (elementIn === undefined) ? null : elementIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.reactiveInstance_Get$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(elementIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ReactiveInstance: OS.DataConversion.JSNodeParamConverter.to(actionResults.reactiveInstanceOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$ReactiveInstance_Get.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Get React instance from DOM element
function getReactInstance(element) {
    if (!element) return;

    for (const key in element) {
        if (key.startsWith("__reactInternalInstance$")) {
            return element[key];
        }
    }
    $actions.JSUtils_Console_Log('Not a reactive component ' + element.id);
}

$parameters.Instance = getReactInstance($parameters.Element);
};
});

define("UBTJavaScriptUtils.controller$ReactiveInstance_GetStateNode", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ReactiveInstance_GetStateNode.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ReactiveInstance_GetStateNode_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.reactiveInstance_GetStateNode$Action = function (reactiveInstanceIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_GetStateNode$vars"))());
vars.value.reactiveInstanceInLocal = reactiveInstanceIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_GetStateNode$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:19KnCXPggkapoeKsDt4EIQ:/ClientActionFlows.19KnCXPggkapoeKsDt4EIQ:s22n9ERmyauY7JIqRth9hA", "UBTJavaScriptUtils", "ReactiveInstance_GetStateNode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:GcubznYOZkeq6ImXFy9Wjg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:qDuNALhhZkW4qHz7ju2oog", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ReactiveInstance_GetStateNode_JavaScript1JS, "JavaScript1", "ReactiveInstance_GetStateNode", {
ReactiveInstance: OS.DataConversion.JSNodeParamConverter.to(vars.value.reactiveInstanceInLocal, OS.DataTypes.DataTypes.Object),
StateNode: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_GetStateNode$javaScript1JSResult"))();
jsNodeResult.stateNodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.StateNode, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:WTHc6TiwfkSmboXz+lP+YQ", callContext.id);
// StateNode = JavaScript1.StateNode
outVars.value.stateNodeOut = javaScript1JSResult.value.stateNodeOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:mb9g0lP+A02b6rlbdCL5kQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:19KnCXPggkapoeKsDt4EIQ", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_GetStateNode$vars", [{
name: "ReactiveInstance",
attrName: "reactiveInstanceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_GetStateNode$javaScript1JSResult", [{
name: "StateNode",
attrName: "stateNodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ReactiveInstance_GetStateNode$outVars", [{
name: "StateNode",
attrName: "stateNodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.reactiveInstance_GetStateNode$Action = function (reactiveInstanceIn) {
reactiveInstanceIn = (reactiveInstanceIn === undefined) ? null : reactiveInstanceIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.reactiveInstance_GetStateNode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(reactiveInstanceIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
StateNode: OS.DataConversion.JSNodeParamConverter.to(actionResults.stateNodeOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$ReactiveInstance_GetStateNode.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// Get component instance (stateNode) from react instance element
function getWidgetStateNode(reactInstance) {
    if (!reactInstance) return null; // Base case: stop if null or undefined

    // Check if this fiber node has a component with __hasWidgetSpec === true
    if (reactInstance.type?.__hasWidgetSpec === true) {
        return reactInstance.stateNode;
    }

    // Recurse on parent (up the fiber tree)
    return getWidgetStateNode(reactInstance.return);
}

$parameters.StateNode =  getWidgetStateNode($parameters.ReactiveInstance);
};
});

define("UBTJavaScriptUtils.controller$ScreenController_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenController_Get.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenController_Get_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenController_Get$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_Get$outVars"))());
varBag.callContext = callContext;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:HlCZDvXy50iojtq_HrsELA:/ClientActionFlows.HlCZDvXy50iojtq_HrsELA:EPPlRhwc+VwtK9Pd6mStmQ", "UBTJavaScriptUtils", "ScreenController_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:R3kgUhpafUqiizYm_5N1sQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Z_BhjNwHu0y_jq1W3ios3Q", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTJavaScriptUtils_controller_ScreenController_Get_JavaScript1JS, "JavaScript1", "ScreenController_Get", {
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_Get$javaScript1JSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {}).then(function (results) {
javaScript1JSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Jm+ZJ4PA60WkdQbvZlwSGA", callContext.id);
// Object = JavaScript1.Object
outVars.value.objectOut = javaScript1JSResult.value.objectOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:X5eg415MVUONQ5itnK3h1w", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:HlCZDvXy50iojtq_HrsELA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:HlCZDvXy50iojtq_HrsELA", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_Get$javaScript1JSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_Get$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenController_Get$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenController_Get$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenController_Get.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var controllerModuleName = $public.ApplicationContext.getCurrentScreenDefinition().controllerModuleName;
require([controllerModuleName], function (ControllerModule) { 
    $parameters.Object  = ControllerModule.activeScreenController;
    $resolve();
});
});
};
});

define("UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage.JavaScript2JS", "UBTJavaScriptUtils.controller$ScreenController_Get"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenController_NavigateToPage_JavaScript2JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action = function (uRLIn, replaceInHistoryIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_NavigateToPage$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.replaceInHistoryInLocal = replaceInHistoryIn;
var screenController_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.screenController_GetVar = screenController_GetVar;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:PKnd08zYUk+IqQy5DDp2ng:/ClientActionFlows.PKnd08zYUk+IqQy5DDp2ng:e1dzXmzT4+Z5pVGUEaUIRw", "UBTJavaScriptUtils", "ScreenController_NavigateToPage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:g5G050yVYU+F2S6OceI2DA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:cIddOQe3rE2eQHgyF5zVEw", callContext.id);
// Execute Action: ScreenController_Get
return UBTJavaScriptUtilsController.default.screenController_Get$Action(callContext).then(function (value) {
screenController_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Ru5Rh6hhTkK0bEAsE4Uy0Q", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ScreenController_NavigateToPage_JavaScript2JS, "JavaScript2", "ScreenController_NavigateToPage", {
isReplace: OS.DataConversion.JSNodeParamConverter.to(vars.value.replaceInHistoryInLocal, OS.DataTypes.DataTypes.Boolean),
ScreenController: OS.DataConversion.JSNodeParamConverter.to(screenController_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object),
URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:Ck_BOaHjP0eFQICU5lLxPg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:PKnd08zYUk+IqQy5DDp2ng", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:PKnd08zYUk+IqQy5DDp2ng", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_NavigateToPage$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ReplaceInHistory",
attrName: "replaceInHistoryInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenController_NavigateToPage$Action = function (uRLIn, replaceInHistoryIn) {
uRLIn = (uRLIn === undefined) ? "" : uRLIn;
replaceInHistoryIn = (replaceInHistoryIn === undefined) ? false : replaceInHistoryIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(replaceInHistoryIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenController_NavigateToPage.JavaScript2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const screenController = $parameters.ScreenController;

screenController.publicApiHelper.Navigation.navigateTo($parameters.URL,
  screenController.publicApiHelper.Navigation.getTransitionObject(),
  $parameters.isReplace
);
};
});

define("UBTJavaScriptUtils.controller$ScreenController_RaiseCommunicationError", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenController_RaiseCommunicationError$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_RaiseCommunicationError$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:1BVikhbM_k+k9irQ5887IQ:/ClientActionFlows.1BVikhbM_k+k9irQ5887IQ:8fH7xWfCh3koOGbm_vau8g", "UBTJavaScriptUtils", "ScreenController_RaiseCommunicationError", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:0JrQjAl4LUiceqKjLKt6vA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:xAzOzJ2ZEkiz+xFVi71DGw", callContext.id);
// Execute Action: ScreenController_RaiseTypedException
return UBTJavaScriptUtilsController.default.screenController_RaiseTypedException$Action(vars.value.messageInLocal, UBTJavaScriptUtilsModel.staticEntities.uBT_SystemExceptionTypes.communicationException, "", "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:l9AD2lMd_0+CvvnmOcoOeQ", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:1BVikhbM_k+k9irQ5887IQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:1BVikhbM_k+k9irQ5887IQ", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_RaiseCommunicationError$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenController_RaiseCommunicationError$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenController_RaiseCommunicationError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTJavaScriptUtils.controller$ScreenController_RaiseError", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenController_RaiseError.JavaScript1JS", "UBTJavaScriptUtils.controller$ScreenController_Get"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenController_RaiseError_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenController_RaiseError$Action = function (messageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_RaiseError$vars"))());
vars.value.messageInLocal = messageIn;
var screenController_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.screenController_GetVar = screenController_GetVar;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:XOr3_rd3dUKJ4N1APac2AA:/ClientActionFlows.XOr3_rd3dUKJ4N1APac2AA:xmomdKVl3KbmS2rtM3RNZA", "UBTJavaScriptUtils", "ScreenController_RaiseError", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:uOgekrWcTU+GF4MoF4Hjww", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:spaO13eMhESXU1KOvM61Kw", callContext.id);
// Execute Action: ScreenController_Get
return UBTJavaScriptUtilsController.default.screenController_Get$Action(callContext).then(function (value) {
screenController_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:B7u8g8a7IUKOl7z0W22PuA", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ScreenController_RaiseError_JavaScript1JS, "JavaScript1", "ScreenController_RaiseError", {
ScreenController: OS.DataConversion.JSNodeParamConverter.to(screenController_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:rY8t0II070yAK2w4YbWujA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:XOr3_rd3dUKJ4N1APac2AA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:XOr3_rd3dUKJ4N1APac2AA", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_RaiseError$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenController_RaiseError$Action = function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenController_RaiseError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenController_RaiseError.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const screenController = $parameters.ScreenController;
screenController.handleError(new Error($parameters.Message));
};
});

define("UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException.JavaScript1JS", "UBTJavaScriptUtils.controller$ScreenController_Get"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenController_RaiseTypedException_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenController_RaiseTypedException$Action = function (messageIn, exceptionIdIn, specificTypeIn, extraStackIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_RaiseTypedException$vars"))());
vars.value.messageInLocal = messageIn;
vars.value.exceptionIdInLocal = exceptionIdIn;
vars.value.specificTypeInLocal = specificTypeIn;
vars.value.extraStackInLocal = extraStackIn;
var screenController_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.screenController_GetVar = screenController_GetVar;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:D4k5a9SjrU69RX1c7i1q2A:/ClientActionFlows.D4k5a9SjrU69RX1c7i1q2A:DEAiCcHZbzC7iO9hZ6RZyg", "UBTJavaScriptUtils", "ScreenController_RaiseTypedException", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:cyQMelkQBUGaNIXFgH5W8A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:CAi50L5BZEqhwUnWrmklOw", callContext.id);
// Execute Action: ScreenController_Get
return UBTJavaScriptUtilsController.default.screenController_Get$Action(callContext).then(function (value) {
screenController_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:ef_EZiOi6keEZvWZbxJlhQ", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTJavaScriptUtils_controller_ScreenController_RaiseTypedException_JavaScript1JS, "JavaScript1", "ScreenController_RaiseTypedException", {
Message: OS.DataConversion.JSNodeParamConverter.to(vars.value.messageInLocal, OS.DataTypes.DataTypes.Text),
SpecificType: OS.DataConversion.JSNodeParamConverter.to(vars.value.specificTypeInLocal, OS.DataTypes.DataTypes.Text),
ExceptionName: OS.DataConversion.JSNodeParamConverter.to(vars.value.exceptionIdInLocal, OS.DataTypes.DataTypes.Text),
ExtraStack: OS.DataConversion.JSNodeParamConverter.to(vars.value.extraStackInLocal, OS.DataTypes.DataTypes.Text),
ScreenController: OS.DataConversion.JSNodeParamConverter.to(screenController_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:uXHGNqENdUScW3+TjKe2Og", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:D4k5a9SjrU69RX1c7i1q2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:D4k5a9SjrU69RX1c7i1q2A", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_RaiseTypedException$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExceptionId",
attrName: "exceptionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpecificType",
attrName: "specificTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExtraStack",
attrName: "extraStackInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenController_RaiseTypedException$Action = function (messageIn, exceptionIdIn, specificTypeIn, extraStackIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
exceptionIdIn = (exceptionIdIn === undefined) ? "" : exceptionIdIn;
specificTypeIn = (specificTypeIn === undefined) ? "" : specificTypeIn;
extraStackIn = (extraStackIn === undefined) ? "" : extraStackIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenController_RaiseTypedException$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text), exceptionIdIn, OS.DataConversion.JSNodeParamConverter.from(specificTypeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(extraStackIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
require(["OutSystems/ClientRuntime/Exceptions"], function (ExceptionsModule) {
    const Exceptions = ExceptionsModule.Exceptions;

    const screenController = $parameters.ScreenController;
    const exceptionName = $parameters.ExceptionName;
    const specificType = $parameters.SpecificType || "";
    const message = $parameters.Message || "";
    const extraStack = $parameters.ExtraStack || "";

    const ExceptionClass = Exceptions[exceptionName];

    if (!ExceptionClass) {
        screenController.handleError(
            new Exceptions.UserException(
                "UnknownExceptionType",
                "Unknown exception type: " + exceptionName,
                extraStack
            )
        );
        $resolve();
        return;
    }

    const typedExceptions = [
        "ServerException",
        "DataBaseException",
        "NotRegisteredException",
        "UserException"
    ];

    let exception;

    if (typedExceptions.indexOf(exceptionName) >= 0) {
        exception = new ExceptionClass(
            specificType || exceptionName,
            message,
            extraStack
        );
    } else {
        exception = new ExceptionClass(
            message,
            extraStack
        );
    }

    screenController.handleError(exception);
    $resolve();
});
});
};
});

define("UBTJavaScriptUtils.controller$ScreenController_ValidateWidgets", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenController_ValidateWidgets.JavaScript1JS"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenController_ValidateWidgets_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenController_ValidateWidgets$Action = function (objectIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenController_ValidateWidgets$vars"))());
vars.value.objectInLocal = objectIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:oSnSDmU83k2P38SnqSGcUw:/ClientActionFlows.oSnSDmU83k2P38SnqSGcUw:7QHd8Xpmzz0QQQTPuiRkkA", "UBTJavaScriptUtils", "ScreenController_ValidateWidgets", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:rXH69nvCpUi1OFnYVNioQg", callContext.id);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:nsS2hpAKgk6YzIDd4iVIfg", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ScreenController_ValidateWidgets_JavaScript1JS, "JavaScript1", "ScreenController_ValidateWidgets", {
Object: OS.DataConversion.JSNodeParamConverter.to(vars.value.objectInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:raq3M9cDoUGpDzRYwifcKg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:oSnSDmU83k2P38SnqSGcUw", callContext.id);
}

};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenController_ValidateWidgets$vars", [{
name: "Object",
attrName: "objectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenController_ValidateWidgets$Action = function (objectIn) {
objectIn = (objectIn === undefined) ? null : objectIn;
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenController_ValidateWidgets$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(objectIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenController_ValidateWidgets.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Object?.validationServiceInstance?.validate();
};
});

define("UBTJavaScriptUtils.controller$ScreenModel_Flush", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenModel_Flush.JavaScript1JS", "UBTJavaScriptUtils.controller$ScreenModel_Get"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenModel_Flush_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenModel_Flush$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var screenModel_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.screenModel_GetVar = screenModel_GetVar;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:R_rqC6w7n0uTf7hLVIhv1Q:/ClientActionFlows.R_rqC6w7n0uTf7hLVIhv1Q:OkZewDcvyld_3Tj8bvf3Wg", "UBTJavaScriptUtils", "ScreenModel_Flush", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:bPG97pCmyEW9iqtPZsYNeQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:RSi0vv0QXUi0rkAklpQNxw", callContext.id);
// Execute Action: ScreenModel_Get
return UBTJavaScriptUtilsController.default.screenModel_Get$Action(callContext).then(function (value) {
screenModel_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:0PADjd0KC0S6p_Lb_UVLuw", callContext.id);
controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ScreenModel_Flush_JavaScript1JS, "JavaScript1", "ScreenModel_Flush", {
ScreenModel: OS.DataConversion.JSNodeParamConverter.to(screenModel_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:5lUJcEw2XkaTKnQFVQR3yA", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:R_rqC6w7n0uTf7hLVIhv1Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:R_rqC6w7n0uTf7hLVIhv1Q", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.clientActionProxies.screenModel_Flush$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenModel_Flush$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenModel_Flush.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ScreenModel.flush()
};
});

define("UBTJavaScriptUtils.controller$ScreenModel_Get", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller", "UBTJavaScriptUtils.controller$ScreenModel_Get.JavaScript1JS", "UBTJavaScriptUtils.controller$ScreenController_Get"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtilsController, UBTJavaScriptUtils_controller_ScreenModel_Get_JavaScript1JS) {
var OS = OutSystems.Internal;
UBTJavaScriptUtilsController.default.screenModel_Get$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var screenController_GetVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenModel_Get$outVars"))());
varBag.callContext = callContext;
varBag.screenController_GetVar = screenController_GetVar;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("w4YpLK_axU2gxtmnWkISXQ:TeCDtDQrAkm5Weyg4kPzIg:/ClientActionFlows.TeCDtDQrAkm5Weyg4kPzIg:sxEye720ms9YJi+IdERnPA", "UBTJavaScriptUtils", "ScreenModel_Get", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:jZV8DsjePkyVy1Yqy033nQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:hCuM9ZEyK0C9elDlrqeP8g", callContext.id);
// Execute Action: ScreenController_Get
return UBTJavaScriptUtilsController.default.screenController_Get$Action(callContext).then(function (value) {
screenController_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:sZnUWw4jBEm3OMY+G6i6rA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTJavaScriptUtils_controller_ScreenModel_Get_JavaScript1JS, "JavaScript1", "ScreenModel_Get", {
Controller: OS.DataConversion.JSNodeParamConverter.to(screenController_GetVar.value.objectOut, OS.DataTypes.DataTypes.Object),
Model: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTJavaScriptUtils.ScreenModel_Get$javaScript1JSResult"))();
jsNodeResult.modelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Model, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:jr7My5xwAEix6KbG1FytXA", callContext.id);
// Object = JavaScript1.Model
outVars.value.objectOut = javaScript1JSResult.value.modelOut;
OutSystemsDebugger.handleBreakpoint("w4YpLK_axU2gxtmnWkISXQ:IJ2idGZnVk2MhcDoPkn9xw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:TeCDtDQrAkm5Weyg4kPzIg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("w4YpLK_axU2gxtmnWkISXQ:TeCDtDQrAkm5Weyg4kPzIg", callContext.id);
throw ex;

});
};
var controller = UBTJavaScriptUtilsController.default;
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenModel_Get$javaScript1JSResult", [{
name: "Model",
attrName: "modelOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.constructor.registerVariableGroupType("UBTJavaScriptUtils.ScreenModel_Get$outVars", [{
name: "Object",
attrName: "objectOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTJavaScriptUtilsController.default.clientActionProxies.screenModel_Get$Action = function () {
return controller.executeActionInsideJSNode(UBTJavaScriptUtilsController.default.screenModel_Get$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Object: OS.DataConversion.JSNodeParamConverter.to(actionResults.objectOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTJavaScriptUtils.controller$ScreenModel_Get.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Model = $parameters.Controller.model
};
});

define("UBTJavaScriptUtils.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBTJavaScriptUtils.controller$debugger"], function (exports, OutSystems, UBTJavaScriptUtilsModel, UBTJavaScriptUtils_Controller_debugger) {
var OS = OutSystems.Internal;
var UBTJavaScriptUtilsController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBTJavaScriptUtilsController.default.defaultTimeout;
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
UBTJavaScriptUtilsController.default = new Controller(null, "UBTJavaScriptUtils");
});
define("UBTJavaScriptUtils.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RHBECP4XV0q3r16OSozSQw": {
getter: function (varBag, idService) {
return varBag.outVars.value.guidOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HpO+dzfqlEeSkKFqQOvbaA": {
getter: function (varBag, idService) {
return varBag.generateGuidJSJSResult.value;
}
},
"yz_aCNQMRUuTj0fnYHmnmg": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5O6_lpxi0Ee34AGqc5dqNw": {
getter: function (varBag, idService) {
return varBag.vars.value.navigateIfSamePageInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rYNNzZQpykOUA0nJlTYKoA": {
getter: function (varBag, idService) {
return varBag.navigate2JSResult.value;
}
},
"CJs4pXntK0CfS1GD1XBs7g": {
getter: function (varBag, idService) {
return varBag.vars.value.eventNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Au5wHLF4mkC5tuGsrPFZQg": {
getter: function (varBag, idService) {
return varBag.vars.value.dataJSONInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wBBhKUIGxUupR9SrqXtuig": {
getter: function (varBag, idService) {
return varBag.dispatch_CustomEventJSResult.value;
}
},
"xFLdmk6bNkSllE1mRPSvag": {
getter: function (varBag, idService) {
return varBag.vars.value.reactiveInstanceInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"81zlkKqqKkK46TyzxTb2yQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.stateNodeOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"qDuNALhhZkW4qHz7ju2oog": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"p3kKhFoIqUq+BhRmrW_Jyw": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mCISZk0ZGkyJqE6mrXh7Wg": {
getter: function (varBag, idService) {
return varBag.outVars.value.foundOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OvEk9R1X9EezqJ7c9fj8IA": {
getter: function (varBag, idService) {
return varBag.checkNotContainNumberJSResult.value;
}
},
"RSi0vv0QXUi0rkAklpQNxw": {
getter: function (varBag, idService) {
return varBag.screenModel_GetVar.value;
}
},
"0PADjd0KC0S6p_Lb_UVLuw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"44QwhxNjuU+ddNIvi9L4Mg": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Z_BhjNwHu0y_jq1W3ios3Q": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"BtznehzO6keCgxQql9m3eQ": {
getter: function (varBag, idService) {
return varBag.vars.value.objectInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"nsS2hpAKgk6YzIDd4iVIfg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"3OKkt5bXOU2fOwBim6d2Gg": {
getter: function (varBag, idService) {
return varBag.vars.value.funcInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"4PXZEYNtS0SkvzNinPeJlw": {
getter: function (varBag, idService) {
return varBag.vars.value.paramInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"as7Zhcic90WVuPAHeSY7ew": {
getter: function (varBag, idService) {
return varBag.runFuncJSResult.value;
}
},
"V6Ws6V_trE21b8NO_CTG+g": {
getter: function (varBag, idService) {
return varBag.vars.value.keyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OQcdOuG5eEmoeIriyFT2ow": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tPe_ynxz90qfjj103xxutw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"G4LLGlYwHkCS_6htMlxQuQ": {
getter: function (varBag, idService) {
return varBag.vars.value.jSONListInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jH0yEEESRUSulpvoyDdkbg": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oDiPlKAxF0K+ucrptqXnfw": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasElementOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"USSvKXfEb0mUE1k91MWd5w": {
getter: function (varBag, idService) {
return varBag.filterByNameJSResult.value;
}
},
"HGvIW9NJFUCyJeW3VwJpfw": {
getter: function (varBag, idService) {
return varBag.vars.value.elementInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"YdB0AMiQwU2biG52Y5vkfw": {
getter: function (varBag, idService) {
return varBag.reactiveInstance_GetStateNodeVar.value;
}
},
"7xf3GqhL+0GrhxccQCNoMQ": {
getter: function (varBag, idService) {
return varBag.reactiveInstance_GetVar.value;
}
},
"5QOf8JVFTEWCLspB_gihNg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"b+R7qWn0mEucKjdoq6mGGQ": {
getter: function (varBag, idService) {
return varBag.vars.value.classNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+RGgWr3u7k2rpJDR4fX3mg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XAD5hbm4qUaNA1wgopzimg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"m1Kogrb7X0qNKiBBkfdKtw": {
getter: function (varBag, idService) {
return varBag.outVars.value.uTCOffsetOut;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"44ugfkWMIUm8N4G3JIiqBg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"3ScZYNgzSEqteI+LQmsvew": {
getter: function (varBag, idService) {
return varBag.vars.value.elementInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"B8R3XFs9R0qRt+9rjp8kiQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.reactiveInstanceOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Yy9EnVgsv0GXzeGf8ZcwJw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"JCExTZQLmUavJn8w97t+uw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isIOsOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tYo7ixKMJ0CXXpx1bW2Hpg": {
getter: function (varBag, idService) {
return varBag.getPlatformIOS_PreventSwipeJSResult.value;
}
},
"I_isKDtGfUSZfOEEyEP3rg": {
getter: function (varBag, idService) {
return varBag.vars.value.currentDateTimeVar;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"Mwfny6BWSk6u9eqnpT1QNg": {
getter: function (varBag, idService) {
return varBag.vars.value.lastCharVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oI72R2Z6p0qm60E3DqYKgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.titleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qyZ4XHq2yk+zu6NV52OcWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ipGbowgd7EGQ8FAdHETwLQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"K2e0k5MzBEyXWz5IUvWYlg": {
getter: function (varBag, idService) {
return varBag.vars.value.encodedHTMLInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qwSYc7C2_kWWbqelb6m47g": {
getter: function (varBag, idService) {
return varBag.vars.value.extendedClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"o7sNV2E720eNQ_EM1Ybi5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.delayMsInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"nQdoMC5n+EGg1olxC87BFA": {
getter: function (varBag, idService) {
return varBag.vars.value.useDebounceInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JGLcOMwF_06CSlTxQFkOyA": {
getter: function (varBag, idService) {
return varBag.timeoutJSResult.value;
}
},
"EUfZrL2C5EefpIqxiNn8lw": {
getter: function (varBag, idService) {
return varBag.setLastTimeFiredJSResult.value;
}
},
"7c5t3s3s10SWdolxxnWWGg": {
getter: function (varBag, idService) {
return varBag.initializeVariablesJSResult.value;
}
},
"9PNOrGAEY0GG0w4Hz+TPvg": {
getter: function (varBag, idService) {
return varBag.vars.value.toObjectRefInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hsQOTolxJ0GW4Dqj1ERguw": {
getter: function (varBag, idService) {
return varBag.vars.value.objectValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"3AHKaR6QXUCWJYCpWlUbow": {
getter: function (varBag, idService) {
return varBag.outVars.value.assignedObjectRefOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"8eJG3NhWLE+sTjlQCIjgDw": {
getter: function (varBag, idService) {
return varBag.assignJSResult.value;
}
},
"RLBqkeW3vESfqcyyySOtcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.parentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a3RryL5fwkeqxqhx0jpkEg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1TWZoT3E_UCE57WtibsIVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VFKPQOT0oE+u3dmeI8ZUzQ": {
getter: function (varBag, idService) {
return varBag.getPropertyJSResult.value;
}
},
"0TmoIYigOEaNllEI58Fuhg": {
getter: function (varBag, idService) {
return varBag.vars.value.keyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3gnNP2+320WWYD7jR9mBpQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OU4QiPN0fk+t+ZxXCYR1sw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"a7b_IXJ+MkWpzviymSh9nA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8JPWJyo0Nkit7XoSiWs0TQ": {
getter: function (varBag, idService) {
return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
}
},
"VwsA6fGLbkSQhkTAxlh+sw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"T35IneA9K0CwyzBMKuZCDA": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0D1REPBTrkiSeRn6P1TGkw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"ZNSInMswgUKm5PatpG+3Ow": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RTfILgh1Lk6XxjT_qRVn9A": {
getter: function (varBag, idService) {
return varBag.vars.value.exceptionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RNtfpC8ITUuKk0UyB5xoPg": {
getter: function (varBag, idService) {
return varBag.vars.value.specificTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9pNtLP2TeEaKpbSnjrmQvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.extraStackInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CAi50L5BZEqhwUnWrmklOw": {
getter: function (varBag, idService) {
return varBag.screenController_GetVar.value;
}
},
"ef_EZiOi6keEZvWZbxJlhQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"R0U6uXmhDUuDUvJWMfJMsA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_BinaryInLocal;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"8ztCs+0sD0axsh4czPpEtA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_TextOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3sMEIAtOok2FjfL3Du9b5w": {
getter: function (varBag, idService) {
return varBag.binaryToTextJSResult.value;
}
},
"kEMGfykG4UaaNBMVHbN3uA": {
getter: function (varBag, idService) {
return varBag.vars.value.funcInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"wZ7TGHCFu0aZLs36khYOBQ": {
getter: function (varBag, idService) {
return varBag.vars.value.paramInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"gPYmyO+jq06zgvuobvl0tw": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"W3KaEqvMaEG4Mb48X_xF0A": {
getter: function (varBag, idService) {
return varBag.runFuncJSResult.value;
}
},
"b5Vcbh7jwES4_+R66zuNtA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kmSo2UC18EC09VTMVP0_6w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_TextOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+8FbCBWRo0utMoHntnxVow": {
getter: function (varBag, idService) {
return varBag.removeAccentesJSResult.value;
}
},
"dOy8YWgyH0aRyqPB4z7L9A": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_dvwzZHBL0S5l812B8q2YQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"mXcR__Ysnkydi_bH10i64Q": {
getter: function (varBag, idService) {
return varBag.vars.value.parentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vJOISRqS9kiaikv4HDIL4g": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6Y5DLKLugk2pMsg4unuXjA": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"QFYpI9xraUisvCofAfwH8g": {
getter: function (varBag, idService) {
return varBag.getPropertyJSResult.value;
}
},
"r_VxK+gEK06XYwTUAxsSiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.funcInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"DFTQeJ_WkEuLuGDbl0G5aA": {
getter: function (varBag, idService) {
return varBag.vars.value.paramInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"yA1+c+jeok2wOwV51djmIA": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"c9C4n+l9GEOCjtxjbf8plg": {
getter: function (varBag, idService) {
return varBag.runFuncJSResult.value;
}
},
"gidYAIar2EiSpA0NivrEyQ": {
getter: function (varBag, idService) {
return varBag.vars.value.eventIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZEyiaDUKa0GJgHS3dqCDeA": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"pWXOoW1PmEiMG2bF1zlJyA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventListenerContainerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2yPSJRvq0EWnysG3cYdmqg": {
getter: function (varBag, idService) {
return varBag.outVars.value.destroyCallbackFunctionOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"uUcAuulmcEuYN8_KvzAY8g": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"W8WYS8i5TUCHUeezGM2sRw": {
getter: function (varBag, idService) {
return varBag.vars.value.parentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MUIMsdeu3kuUQnE_3FeLwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DjpD6+N1KUK3qtF2X3USwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hneotqh+AUG2Ce+D2Y00dw": {
getter: function (varBag, idService) {
return varBag.setPropertyJSResult.value;
}
},
"qAnqsJk8WkerMEZ+y_YyAw": {
getter: function (varBag, idService) {
return varBag.vars.value.isAddInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qeZHNrXLckOIKOJ_SxJhnA": {
getter: function (varBag, idService) {
return varBag.vars.value.attrNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kTPP5mCHlE2wTadDdFBr5A": {
getter: function (varBag, idService) {
return varBag.vars.value.elementIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D3GExlp2c0qNJodxFBgaYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b8VK1+_TC0+n_i3gOAs7Iw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"qmlXwIUFwUC7UwDlIcPbsA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"OzBuli3kf0ynDxQdNyn0BQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Va7qEzcPSkuPu75tV2ZjNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.funcInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"5p0iwRkJ7EiuunQN89JyhA": {
getter: function (varBag, idService) {
return varBag.vars.value.paramInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"3vrL3j4b7U+suE42ZhPm8A": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q8j6iVSby06nfM3CJa97dA": {
getter: function (varBag, idService) {
return varBag.runFuncJSResult.value;
}
},
"B6mNfY_V_EqQUFjDHZWDsw": {
getter: function (varBag, idService) {
return varBag.vars.value.funcInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"qB3TPGqv10uo1Nxnia5xqg": {
getter: function (varBag, idService) {
return varBag.vars.value.paramInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VyVXrB_aS0io8ry30HTDqg": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
}
},
"6mOjvtzq7UGOXbVeDx+35A": {
getter: function (varBag, idService) {
return varBag.runFuncJSResult.value;
}
},
"uz+x99hC9U+yZwuunicuRw": {
getter: function (varBag, idService) {
return varBag.vars.value.parentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LM01db19P0mXU0MFGt8ELw": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Hk2ZC8RSoEyG8kM_t6qNaw": {
getter: function (varBag, idService) {
return varBag.setPropertyJSResult.value;
}
},
"9ttEDoAmN0qJOY4QgD91zw": {
getter: function (varBag, idService) {
return varBag.vars.value.elementIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BDFtJs0WF0etoQZ42BPI9w": {
getter: function (varBag, idService) {
return varBag.vars.value.delayMSInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ZTzFib2viECd_CqNkiJBNA": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackActionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"DzyjCRvdLEGMXRuW2MzObw": {
getter: function (varBag, idService) {
return varBag.vars.value.callbackActionParamInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"uIaKUzIu2k+g_wI9ymQ0Ow": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"NV3G5lxJk0yfG4XDIUyvhg": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3S5ex5sfIE+D2ElHSxA5OQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"oNPt4pOMVEyKv5pS7Mxkow": {
getter: function (varBag, idService) {
return varBag.outVars.value.objectOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hCuM9ZEyK0C9elDlrqeP8g": {
getter: function (varBag, idService) {
return varBag.screenController_GetVar.value;
}
},
"sZnUWw4jBEm3OMY+G6i6rA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"Y6kDy75ZNUKs5zAt__lKVA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SHKkAKCWsEilCsOnPPyqVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.elementOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"WM0ybcsiskC_h+2QR0I1SQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"_MeIaWOu0k6GJaHKTbzkRw": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"m9ioMgxztU2UrRmy9iKHrg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rlOaL+7qzkCaXreE6TP3ag": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9EzrloT4W0WShMQVu_fyJQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"xBtvlKcjMUqeDlzz4fbAXQ": {
getter: function (varBag, idService) {
return varBag.vars.value.elementInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VoirMQOM3E2R_1xKE7nj+g": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WK6In2aaXUSvQfZWSXSP_g": {
getter: function (varBag, idService) {
return varBag.outVars.value.valueOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"BxvVGqnaIkeyySSIstIc5w": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"4UTZRspe80yXm1xEbfU3Ug": {
getter: function (varBag, idService) {
return varBag.vars.value.stringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zqa_Cgkw1UeSy6ZuuzeV+w": {
getter: function (varBag, idService) {
return varBag.vars.value.charInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"W_XhsuMKH0yijjL5gjcBcw": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"wo4_3MAIT0SVRlemkq6H5w": {
getter: function (varBag, idService) {
return varBag.jSONDeserializeTextListVar.value;
}
},
"ArY3l3zqsUWfnPXT+MgMhQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"FiXD9HAQKUe9nELTJ2kcRw": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_cBDihG19UCDwdGl+ROFYA": {
getter: function (varBag, idService) {
return varBag.vars.value.replaceInHistoryInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cIddOQe3rE2eQHgyF5zVEw": {
getter: function (varBag, idService) {
return varBag.screenController_GetVar.value;
}
},
"Ru5Rh6hhTkK0bEAsE4Uy0Q": {
getter: function (varBag, idService) {
return varBag.javaScript2JSResult.value;
}
},
"BD3gYU9ReUSUH8v_ckhGBw": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TUg6fLkZtE2tCwRqQpk+Lw": {
getter: function (varBag, idService) {
return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
}
},
"RCamvKBlb0aGXO6k1Zlk_w": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"rghWP8dQqEqQUDDQOoaEEA": {
getter: function (varBag, idService) {
return varBag.vars.value.funcInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"u+MEHGBVPUObhPKRysf7SQ": {
getter: function (varBag, idService) {
return varBag.vars.value.paramInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"fHsZB0nnPUWIvmXp80NkNA": {
getter: function (varBag, idService) {
return varBag.outVars.value.resultOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dBBfC3ri+kWnEipHlq01vQ": {
getter: function (varBag, idService) {
return varBag.runFuncJSResult.value;
}
},
"YVg6K3GbJ0+p61k1gaTYdA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MRZEVFvdDUCW7rK6cTzN9Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_BinaryOut;
},
dataType: OS.DataTypes.DataTypes.BinaryData
},
"Z_342yHyvk6t4szndQvU0A": {
getter: function (varBag, idService) {
return varBag.textToBinaryJSResult.value;
}
},
"eK_yNqlm3Ui_KMZHq2cUUA": {
getter: function (varBag, idService) {
return varBag.vars.value.relativeURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uHacyC1m_ECtOOi7XDCXgg": {
getter: function (varBag, idService) {
return varBag.outVars.value.absoluteURLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"byWB9gzpgkeH2Im7Scl_lA": {
getter: function (varBag, idService) {
return varBag.getRedirectURIJSResult.value;
}
},
"Yf7HRneoWk6msOoX0IxmBA": {
getter: function (varBag, idService) {
return varBag.vars.value.elementInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"LQR3ApnVQ0GehHGJPyEIsg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SG6p6YrMSE6pGzuzqusLhg": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"1kJffrq0V0qMYpJymwpOjQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"CFAaaZL04EabvniTRenvDg": {
getter: function (varBag, idService) {
return varBag.vars.value.parentInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hCz_frApo0GMSk96aV7PzA": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7rvyzE_FwUic8Wj8eCSsXA": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LVtrytQdVkeAO1rvwY2KbA": {
getter: function (varBag, idService) {
return varBag.setPropertyJSResult.value;
}
},
"De0fDyxwdEmtn0ta_KGumw": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"spaO13eMhESXU1KOvM61Kw": {
getter: function (varBag, idService) {
return varBag.screenController_GetVar.value;
}
},
"B7u8g8a7IUKOl7z0W22PuA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
