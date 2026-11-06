define("ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl.IsWebJS", "ApplicationPolicies_CW.clientVariables"], function (exports, OutSystems, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, ApplicationPolicies_CW_controller_CanOpenApplicationPolicyDirectlyViaUrl_IsWebJS, ApplicationPolicies_CWClientVariables) {
var OS = OutSystems.Internal;
ApplicationPolicies_CWController.default.canOpenApplicationPolicyDirectlyViaUrl$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isWebJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.CanOpenApplicationPolicyDirectlyViaUrl$outVars"))());
varBag.callContext = callContext;
varBag.isWebJSResult = isWebJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("3kJzlwLAr0OzWbGQk+0lQw:ynCKULGFCUODOQtuc350gQ:/ClientActionFlows.ynCKULGFCUODOQtuc350gQ:xie8GgQRPumVksB_M4qpaA", "ApplicationPolicies_CW", "CanOpenApplicationPolicyDirectlyViaUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:I2om_MOAyUCqjWFtrRMHhA", callContext.id);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:wCdJ24CmF0++0KaEAkph6w", callContext.id);
isWebJSResult.value = controller.safeExecuteJSNode(ApplicationPolicies_CW_controller_CanOpenApplicationPolicyDirectlyViaUrl_IsWebJS, "IsWeb", "CanOpenApplicationPolicyDirectlyViaUrl", {
IsWeb: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.CanOpenApplicationPolicyDirectlyViaUrl$isWebJSResult"))();
jsNodeResult.isWebOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsWeb, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:5h5nd7ngjE6fwSjNdm9Gzg", callContext.id);
// CanOpenDirectly = IsWeb.IsWeb
outVars.value.canOpenDirectlyOut = isWebJSResult.value.isWebOut;
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:9RDh5Db4+02hw5Am2PcCWg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:ynCKULGFCUODOQtuc350gQ", callContext.id);
}

};
var controller = ApplicationPolicies_CWController.default;
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.CanOpenApplicationPolicyDirectlyViaUrl$isWebJSResult", [{
name: "IsWeb",
attrName: "isWebOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.CanOpenApplicationPolicyDirectlyViaUrl$outVars", [{
name: "CanOpenDirectly",
attrName: "canOpenDirectlyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.clientActionProxies.canOpenApplicationPolicyDirectlyViaUrl$Action = function () {
return controller.executeActionInsideJSNode(ApplicationPolicies_CWController.default.canOpenApplicationPolicyDirectlyViaUrl$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CanOpenDirectly: OS.DataConversion.JSNodeParamConverter.to(actionResults.canOpenDirectlyOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl.IsWebJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsWeb = !window.cordova;
};
});

define("ApplicationPolicies_CW.controller$Get_PolicsyIsLoading", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "ApplicationPolicies_CW.clientVariables"], function (exports, OutSystems, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, ApplicationPolicies_CWClientVariables) {
var OS = OutSystems.Internal;
ApplicationPolicies_CWController.default.get_PolicsyIsLoading$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.Get_PolicsyIsLoading$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("3kJzlwLAr0OzWbGQk+0lQw:rbIa7bNle0qpfixhXPfiHA:/ClientActionFlows.rbIa7bNle0qpfixhXPfiHA:jrETbkWujSamGOBDoh_c8Q", "ApplicationPolicies_CW", "Get_PolicsyIsLoading", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:lEYtlHE_dUypSlkaODiJEw", callContext.id);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:a2Gd9YBTdkaVr01_3oCcuA", callContext.id);
// isLoading = IsPolicyDetailsLoading
outVars.value.isLoadingOut = ApplicationPolicies_CWClientVariables.getIsPolicyDetailsLoading();
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:a6miAOBr60O5as4hd0l5rQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:rbIa7bNle0qpfixhXPfiHA", callContext.id);
}

};
var controller = ApplicationPolicies_CWController.default;
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.Get_PolicsyIsLoading$outVars", [{
name: "isLoading",
attrName: "isLoadingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.clientActionProxies.get_PolicsyIsLoading$Action = function () {
return controller.executeActionInsideJSNode(ApplicationPolicies_CWController.default.get_PolicsyIsLoading$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isLoading: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLoadingOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});

define("ApplicationPolicies_CW.controller$OpenApplicationPolicy", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "ApplicationPolicies_CW.controller$OpenApplicationPolicy.DecideHowToOpenPolicyJS", "ApplicationPolicies_CW.controller$OpenApplicationPolicy.OpenInNewTabJS", "ApplicationPolicies_CW.controller$OpenApplicationPolicy.OpenInSystemBrowserJS", "ApplicationPolicies_CW.clientVariables", "ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer"], function (exports, OutSystems, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, ApplicationPolicies_CW_controller_OpenApplicationPolicy_DecideHowToOpenPolicyJS, ApplicationPolicies_CW_controller_OpenApplicationPolicy_OpenInNewTabJS, ApplicationPolicies_CW_controller_OpenApplicationPolicy_OpenInSystemBrowserJS, ApplicationPolicies_CWClientVariables) {
var OS = OutSystems.Internal;
ApplicationPolicies_CWController.default.openApplicationPolicy$Action = function (urlIn, filenameIn, contentTypeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicy$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.filenameInLocal = filenameIn;
vars.value.contentTypeInLocal = contentTypeIn;
var openApplicationPolicyInFileViewerVar = new OS.DataTypes.VariableHolder();
var decideHowToOpenPolicyJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicy$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openApplicationPolicyInFileViewerVar = openApplicationPolicyInFileViewerVar;
varBag.decideHowToOpenPolicyJSResult = decideHowToOpenPolicyJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("3kJzlwLAr0OzWbGQk+0lQw:KkmyZCnugUC3lpNM8FlNbw:/ClientActionFlows.KkmyZCnugUC3lpNM8FlNbw:kb2CA4K4edVGDouGbv9bXg", "ApplicationPolicies_CW", "OpenApplicationPolicy", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:MUdZaiJNMka8HEkHZPo_bg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:ujoTESDnz0CiVht8tQs2zA", callContext.id) && ((vars.value.urlInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:aVWel1KYjUyGTCe+BydukA", callContext.id);
// IsPolicyDetailsLoading = True
ApplicationPolicies_CWClientVariables.setIsPolicyDetailsLoading(true);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:zMIWLEr5kk+DiITfGyTtNw", callContext.id);
decideHowToOpenPolicyJSResult.value = controller.safeExecuteJSNode(ApplicationPolicies_CW_controller_OpenApplicationPolicy_DecideHowToOpenPolicyJS, "DecideHowToOpenPolicy", "OpenApplicationPolicy", {
ContentType: OS.DataConversion.JSNodeParamConverter.to(vars.value.contentTypeInLocal, OS.DataTypes.DataTypes.Text),
UseWindowOpen: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
UseFileViewer: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
UseSystemBrowser: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicy$decideHowToOpenPolicyJSResult"))();
jsNodeResult.useWindowOpenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UseWindowOpen, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.useFileViewerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UseFileViewer, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.useSystemBrowserOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UseSystemBrowser, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:TflQh3WIkUWVy_2hEtiM5g", callContext.id) && decideHowToOpenPolicyJSResult.value.useSystemBrowserOut)) {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:krLp_W2mmE+h0cZ_MZz0Mg", callContext.id);
controller.safeExecuteJSNode(ApplicationPolicies_CW_controller_OpenApplicationPolicy_OpenInSystemBrowserJS, "OpenInSystemBrowser", "OpenApplicationPolicy", {
Url: OS.DataConversion.JSNodeParamConverter.to(vars.value.urlInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} else {
return OS.Flow.executeSequence(function () {
if(decideHowToOpenPolicyJSResult.value.useFileViewerOut) {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:8tpqO6Ak0kKKddOgZ8iWQw", callContext.id);
// Execute Action: OpenApplicationPolicyInFileViewer
return ApplicationPolicies_CWController.default.openApplicationPolicyInFileViewer$Action(vars.value.urlInLocal, vars.value.filenameInLocal, callContext).then(function (value) {
openApplicationPolicyInFileViewerVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:AZxIEBRyU0uzL9_CZcnAlQ", callContext.id);
// HasFoundNetworkError = OpenApplicationPolicyInFileViewer.HasFoundNetworkError
outVars.value.hasFoundNetworkErrorOut = openApplicationPolicyInFileViewerVar.value.hasFoundNetworkErrorOut;
});
} else {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:u2kRpJUk_kC7DpaSj1ZIfw", callContext.id);
controller.safeExecuteJSNode(ApplicationPolicies_CW_controller_OpenApplicationPolicy_OpenInNewTabJS, "OpenInNewTab", "OpenApplicationPolicy", {
Url: OS.DataConversion.JSNodeParamConverter.to(vars.value.urlInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:1EeyZhEME06PPNDzG2mhxQ", callContext.id);
// IsPolicyDetailsLoading = False
ApplicationPolicies_CWClientVariables.setIsPolicyDetailsLoading(false);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:rHInkWDQMEetmNBgfalOmQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:egdK+UXOGkGO1Xjm8ZIXrQ", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:KkmyZCnugUC3lpNM8FlNbw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:KkmyZCnugUC3lpNM8FlNbw", callContext.id);
throw ex;

});
};
var controller = ApplicationPolicies_CWController.default;
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicy$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filename",
attrName: "filenameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ContentType",
attrName: "contentTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicy$decideHowToOpenPolicyJSResult", [{
name: "UseWindowOpen",
attrName: "useWindowOpenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UseFileViewer",
attrName: "useFileViewerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UseSystemBrowser",
attrName: "useSystemBrowserOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicy$outVars", [{
name: "HasFoundNetworkError",
attrName: "hasFoundNetworkErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.clientActionProxies.openApplicationPolicy$Action = function (urlIn, filenameIn, contentTypeIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
filenameIn = (filenameIn === undefined) ? "" : filenameIn;
contentTypeIn = (contentTypeIn === undefined) ? "" : contentTypeIn;
return controller.executeActionInsideJSNode(ApplicationPolicies_CWController.default.openApplicationPolicy$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(urlIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(contentTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasFoundNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasFoundNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("ApplicationPolicies_CW.controller$OpenApplicationPolicy.DecideHowToOpenPolicyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (!window.cordova) {
    // Open URL directly in a new browser tab
    $parameters.UseWindowOpen = true;
} else {

    if ($parameters.ContentType == "application/pdf") {
        // Android Google Chrome cannot display PDFs, and would just download the file without opening it.
        // So we improve the user experience by downloading the file into cache storage,
        // and open it in the native PDF viewer via intent.
        // This requires 2 native plugins: File Plugin and File Viewer Plugin.
        if (window.cordova.file && window.cordova.plugins.OSFileViewer) {
            $parameters.UseFileViewer = true;
        } else {
            $parameters.UseSystemBrowser = true;
        }

    } else {
        $parameters.UseSystemBrowser = true;
    }

}
};
});
define("ApplicationPolicies_CW.controller$OpenApplicationPolicy.OpenInNewTabJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.open($parameters.Url, "_blank");
};
});
define("ApplicationPolicies_CW.controller$OpenApplicationPolicy.OpenInSystemBrowserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.cordova.InAppBrowser.open($parameters.Url, "_system");
};
});

define("ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer.DownloadToFolderJS", "ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer.Wait500msJS", "ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer.OpenInFileViewerJS", "ApplicationPolicies_CW.clientVariables"], function (exports, OutSystems, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, ApplicationPolicies_CW_controller_OpenApplicationPolicyInFileViewer_DownloadToFolderJS, ApplicationPolicies_CW_controller_OpenApplicationPolicyInFileViewer_Wait500msJS, ApplicationPolicies_CW_controller_OpenApplicationPolicyInFileViewer_OpenInFileViewerJS, ApplicationPolicies_CWClientVariables) {
var OS = OutSystems.Internal;
ApplicationPolicies_CWController.default.openApplicationPolicyInFileViewer$Action = function (urlIn, filenameIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicyInFileViewer$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.filenameInLocal = filenameIn;
var downloadToFolderJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicyInFileViewer$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.downloadToFolderJSResult = downloadToFolderJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("3kJzlwLAr0OzWbGQk+0lQw:kJKkfNPuNku8vanpv2cT_A:/ClientActionFlows.kJKkfNPuNku8vanpv2cT_A:hZqzqgABMc+y96nisiQZFw", "ApplicationPolicies_CW", "OpenApplicationPolicyInFileViewer", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:EBZyES8mqkGPjQidsTJpqQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:4NTZB63r006hj9RYY+IqcA", callContext.id);
return controller.safeExecuteAsyncJSNode(ApplicationPolicies_CW_controller_OpenApplicationPolicyInFileViewer_DownloadToFolderJS, "DownloadToFolder", "OpenApplicationPolicyInFileViewer", {
Filename: OS.DataConversion.JSNodeParamConverter.to(vars.value.filenameInLocal, OS.DataTypes.DataTypes.Text),
Url: OS.DataConversion.JSNodeParamConverter.to(vars.value.urlInLocal, OS.DataTypes.DataTypes.Text),
FileNativeURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
HasFoundNetworkError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicyInFileViewer$downloadToFolderJSResult"))();
jsNodeResult.fileNativeURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FileNativeURL, OS.DataTypes.DataTypes.Text);
jsNodeResult.hasFoundNetworkErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasFoundNetworkError, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
downloadToFolderJSResult.value = results;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:JE8DFWCNcE6vkYdu88Ilwg", callContext.id) && downloadToFolderJSResult.value.hasFoundNetworkErrorOut)) {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:tPLUcdVVqk+UsEXScIZdig", callContext.id);
// HasFoundNetworkError = True
outVars.value.hasFoundNetworkErrorOut = true;
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:KviYNvJ6B0OubCF38FR9jg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:8fzPut4p8UO337dMCLeEWQ", callContext.id);
return controller.safeExecuteAsyncJSNode(ApplicationPolicies_CW_controller_OpenApplicationPolicyInFileViewer_OpenInFileViewerJS, "OpenInFileViewer", "OpenApplicationPolicyInFileViewer", {
FileNativeURL: OS.DataConversion.JSNodeParamConverter.to(downloadToFolderJSResult.value.fileNativeURLOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:D4dDd4y+qECOa4_LEZokhQ", callContext.id);
return controller.safeExecuteAsyncJSNode(ApplicationPolicies_CW_controller_OpenApplicationPolicyInFileViewer_Wait500msJS, "Wait500ms", "OpenApplicationPolicyInFileViewer", null, function ($parameters) {
}, {}, {});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:zyz1dLjpn0+brkvJr0hiOQ", callContext.id);
});
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:kJKkfNPuNku8vanpv2cT_A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:kJKkfNPuNku8vanpv2cT_A", callContext.id);
throw ex;

});
};
var controller = ApplicationPolicies_CWController.default;
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicyInFileViewer$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filename",
attrName: "filenameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicyInFileViewer$downloadToFolderJSResult", [{
name: "FileNativeURL",
attrName: "fileNativeURLOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasFoundNetworkError",
attrName: "hasFoundNetworkErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.OpenApplicationPolicyInFileViewer$outVars", [{
name: "HasFoundNetworkError",
attrName: "hasFoundNetworkErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.clientActionProxies.openApplicationPolicyInFileViewer$Action = function (urlIn, filenameIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
filenameIn = (filenameIn === undefined) ? "" : filenameIn;
return controller.executeActionInsideJSNode(ApplicationPolicies_CWController.default.openApplicationPolicyInFileViewer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(urlIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(filenameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasFoundNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasFoundNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer.DownloadToFolderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
// Create application-policies folder in cache storage
var download = function(url, file) {

    window.fetch(url).then(function(response) {
        if (response.ok) {
            response.blob().then(function(blob) {
                file.createWriter(function(writer) {
                    writer.onwriteend = $resolve;
                    writer.onwriteerror = $reject;
                    writer.write(blob);
                });
            });
        } else {
            response.text().then($reject);
        }
    }).catch(function() {
        $parameters.HasFoundNetworkError = true;
        $resolve();
    });

};

window.resolveLocalFileSystemURL(
    window.cordova.file.cacheDirectory,
    function(fs) {
        fs.getDirectory(
            "application-policies",
            { create: true },
            function(dir) {
                dir.getFile(
                    $parameters.Filename,
                    { create: true, exclusive: false },
                    function(file) {
                        $parameters.FileNativeURL = file.nativeURL;
                        download($parameters.Url, file);
                    },
                    $reject
                );
            },
            $reject
        );
    },
    $reject
);
});
};
});
define("ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer.Wait500msJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.setTimeout($resolve, 500);
});
};
});
define("ApplicationPolicies_CW.controller$OpenApplicationPolicyInFileViewer.OpenInFileViewerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.cordova.plugins.OSFileViewer.openDocumentFromLocalPath(
    window.decodeURIComponent($parameters.FileNativeURL),
    $resolve,
    function(error) {
        $reject(error.message);
    }
);
});
};
});

define("ApplicationPolicies_CW.controller$Set_PolicsyIsLoading", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "ApplicationPolicies_CW.clientVariables"], function (exports, OutSystems, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, ApplicationPolicies_CWClientVariables) {
var OS = OutSystems.Internal;
ApplicationPolicies_CWController.default.set_PolicsyIsLoading$Action = function (isLoadingIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ApplicationPolicies_CW.Set_PolicsyIsLoading$vars"))());
vars.value.isLoadingInLocal = isLoadingIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("3kJzlwLAr0OzWbGQk+0lQw:Jhwwd+5PlESl24EEtIF1iQ:/ClientActionFlows.Jhwwd+5PlESl24EEtIF1iQ:CRdYXUKAy0hU8hP1mFsBEw", "ApplicationPolicies_CW", "Set_PolicsyIsLoading", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:8T0nzEpKOkmvcpawFqWsAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:Kb+bgCL+50GAUAB1KN88sg", callContext.id);
// IsPolicyDetailsLoading = isLoading
ApplicationPolicies_CWClientVariables.setIsPolicyDetailsLoading(vars.value.isLoadingInLocal);
OutSystemsDebugger.handleBreakpoint("3kJzlwLAr0OzWbGQk+0lQw:1pCt6h2SgEm6_TvjrHQ3aw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("3kJzlwLAr0OzWbGQk+0lQw:Jhwwd+5PlESl24EEtIF1iQ", callContext.id);
}

};
var controller = ApplicationPolicies_CWController.default;
ApplicationPolicies_CWController.default.constructor.registerVariableGroupType("ApplicationPolicies_CW.Set_PolicsyIsLoading$vars", [{
name: "isLoading",
attrName: "isLoadingInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ApplicationPolicies_CWController.default.clientActionProxies.set_PolicsyIsLoading$Action = function (isLoadingIn) {
isLoadingIn = (isLoadingIn === undefined) ? false : isLoadingIn;
return controller.executeActionInsideJSNode(ApplicationPolicies_CWController.default.set_PolicsyIsLoading$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isLoadingIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("ApplicationPolicies_CW.controller", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller$debugger"], function (exports, OutSystems, ApplicationPolicies_CWModel, ApplicationPolicies_CW_Controller_debugger) {
var OS = OutSystems.Internal;
var ApplicationPolicies_CWController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return ApplicationPolicies_CWController.default.defaultTimeout;
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
ApplicationPolicies_CWController.default = new Controller(null, "ApplicationPolicies_CW");
});
define("ApplicationPolicies_CW.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "ApplicationPolicies_CW.clientVariables"], function (exports, Debugger, OutSystems, ApplicationPolicies_CWClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"IOxtUz5PZ0uS98kh6CnhXg": {
getter: function (varBag, idService) {
return varBag.outVars.value.canOpenDirectlyOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wCdJ24CmF0++0KaEAkph6w": {
getter: function (varBag, idService) {
return varBag.isWebJSResult.value;
}
},
"xhJU7OjhMk6CjAm6qmKCpg": {
getter: function (varBag, idService) {
return varBag.vars.value.urlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BEg+gUh51kmeCcw9aWSZ6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y_hZ8Y58j0m4cvhUpunPSw": {
getter: function (varBag, idService) {
return varBag.vars.value.contentTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GbcbmJvGUU+0CfmsjIr4+g": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasFoundNetworkErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8tpqO6Ak0kKKddOgZ8iWQw": {
getter: function (varBag, idService) {
return varBag.openApplicationPolicyInFileViewerVar.value;
}
},
"zMIWLEr5kk+DiITfGyTtNw": {
getter: function (varBag, idService) {
return varBag.decideHowToOpenPolicyJSResult.value;
}
},
"u2kRpJUk_kC7DpaSj1ZIfw": {
getter: function (varBag, idService) {
return varBag.openInNewTabJSResult.value;
}
},
"krLp_W2mmE+h0cZ_MZz0Mg": {
getter: function (varBag, idService) {
return varBag.openInSystemBrowserJSResult.value;
}
},
"LQh0SI4pvUCqr5gWbdEU4Q": {
getter: function (varBag, idService) {
return varBag.vars.value.isLoadingInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"mYVxI42ADEGyFTBVBP2K0g": {
getter: function (varBag, idService) {
return varBag.vars.value.urlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xUb7ZuKxGkGNbqGot_J1JQ": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UXaMTtPcYE+3eqF0mRmV6Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.hasFoundNetworkErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4NTZB63r006hj9RYY+IqcA": {
getter: function (varBag, idService) {
return varBag.downloadToFolderJSResult.value;
}
},
"D4dDd4y+qECOa4_LEZokhQ": {
getter: function (varBag, idService) {
return varBag.wait500msJSResult.value;
}
},
"8fzPut4p8UO337dMCLeEWQ": {
getter: function (varBag, idService) {
return varBag.openInFileViewerJSResult.value;
}
},
"weeqmGgfUUewwxFQYd8nCA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isLoadingOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YuoC6Xr59EaVZJvucBZ9xg": {
getter: function (varBag, idService) {
return ApplicationPolicies_CWClientVariables.getIsPolicyDetailsLoading();
},
dataType: OS.DataTypes.DataTypes.Boolean
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
