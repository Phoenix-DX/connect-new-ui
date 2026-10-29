define("EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin", ["exports", "OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin.PluginIsLoadedJS", "CommonPlugin.controller$IsCordovaDefined", "EventfulDeeplinksPlugin.referencesHealth", "EventfulDeeplinksPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function(exports, OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPluginController, CommonPluginController, CommonPluginModel, EventfulDeeplinksPlugin_controller_CheckEventfulDeekplinksPlugin_PluginIsLoadedJS) {
    var OS = OutSystems.Internal;
    EventfulDeeplinksPluginController.default.checkEventfulDeekplinksPlugin$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
        var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.CheckEventfulDeekplinksPlugin$outVars"))());
        varBag.callContext = callContext;
        varBag.isCordovaDefinedVar = isCordovaDefinedVar;
        varBag.pluginIsLoadedJSResult = pluginIsLoadedJSResult;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:S9kXFJwG60GHkCNyxs0UoQ:/ClientActionFlows.S9kXFJwG60GHkCNyxs0UoQ:6XkQZpz4i+917zbborR97Q", "EventfulDeeplinksPlugin", "CheckEventfulDeekplinksPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:zk9Fg0heAUaXrfb21Rn5xw", callContext.id);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:+O52bI1Fi0S7FoefmJK3PQ", callContext.id);
            // Execute Action: IsCordovaDefined
            isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:eLTLqRnB3k2lL7GlwwvjdQ", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:9EfaYgMYHUKW7bpRFsJ4Sw", callContext.id);
                pluginIsLoadedJSResult.value = controller.safeExecuteJSNode(EventfulDeeplinksPlugin_controller_CheckEventfulDeekplinksPlugin_PluginIsLoadedJS, "PluginIsLoaded", "CheckEventfulDeekplinksPlugin", {
                    IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.CheckEventfulDeekplinksPlugin$pluginIsLoadedJSResult"))();
                    jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:JW8E8+lUvk+41C9G8nSLtQ", callContext.id) && pluginIsLoadedJSResult.value.isAvailableOut)) {
                    // Set Result
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:SmpqEd72kE+v+B8rVnUTMw", callContext.id);
                    // IsAvailable = True
                    outVars.value.isAvailableOut = true;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:i4QK1Z9dIUmsjnC06F0Vew", callContext.id);
                } else {
                    // Set Output
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:yqnEB2WGPECmrWvYUc5Cgg", callContext.id);
                    // IsAvailable = False
                    outVars.value.isAvailableOut = false;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:yqnEB2WGPECmrWvYUc5Cgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Error.ErrorCode = 2
                    outVars.value.errorOut.errorCodeAttr = "2";
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:yqnEB2WGPECmrWvYUc5Cgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Error.ErrorMessage = "Plugin is not loaded."
                    outVars.value.errorOut.errorMessageAttr = "Plugin is not loaded.";
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:AMFNVxrY+U+ZK_TbULUBeA", callContext.id);
                }

            } else {
                // Set Output
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:J1wZff9SAE2uVYSO3NH3uw", callContext.id);
                // IsAvailable = False
                outVars.value.isAvailableOut = false;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:J1wZff9SAE2uVYSO3NH3uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Error.ErrorCode = 1
                outVars.value.errorOut.errorCodeAttr = "1";
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:J1wZff9SAE2uVYSO3NH3uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Error.ErrorMessage = "cordova is not defined (eventfullDeeplinksPlugin)"
                outVars.value.errorOut.errorMessageAttr = "cordova is not defined (eventfullDeeplinksPlugin)";
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:GxDT24CrGUWfTlxw0FES1g", callContext.id);
            }

            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:S9kXFJwG60GHkCNyxs0UoQ", callContext.id);
        }

    };
    var controller = EventfulDeeplinksPluginController.default;
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.CheckEventfulDeekplinksPlugin$pluginIsLoadedJSResult", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.CheckEventfulDeekplinksPlugin$outVars", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CommonPluginModel.ErrorRec();
        },
        complexType: CommonPluginModel.ErrorRec
    }]);
    EventfulDeeplinksPluginController.default.clientActionProxies.checkEventfulDeekplinksPlugin$Action = function() {
        return controller.executeActionInsideJSNode(EventfulDeeplinksPluginController.default.checkEventfulDeekplinksPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
                Error: actionResults.errorOut
            };
        });
    };
});
define("EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin.PluginIsLoadedJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsAvailable = !!cordova.plugins && !!cordova.plugins.EventfulDeeplinksPlugin;
    };
});

define("EventfulDeeplinksPlugin.controller$GetColdStartDeeplinkURL", ["exports", "OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller", "CommonPlugin.model", "EventfulDeeplinksPlugin.controller$GetColdStartDeeplinkURL.GetColdStartDeeplinkURLJSJS", "CommonPlugin.model$ErrorRec", "EventfulDeeplinksPlugin.referencesHealth", "EventfulDeeplinksPlugin.referencesHealth$CommonPlugin", "EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin"], function(exports, OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPluginController, CommonPluginModel, EventfulDeeplinksPlugin_controller_GetColdStartDeeplinkURL_GetColdStartDeeplinkURLJSJS) {
    var OS = OutSystems.Internal;
    EventfulDeeplinksPluginController.default.getColdStartDeeplinkURL$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var checkEventfulDeekplinksPluginVar = new OS.DataTypes.VariableHolder();
        var getColdStartDeeplinkURLJSJSResult = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.GetColdStartDeeplinkURL$outVars"))());
        varBag.callContext = callContext;
        varBag.checkEventfulDeekplinksPluginVar = checkEventfulDeekplinksPluginVar;
        varBag.getColdStartDeeplinkURLJSJSResult = getColdStartDeeplinkURLJSJSResult;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:UzbRCksKvEyVGIiL+dddpw:/ClientActionFlows.UzbRCksKvEyVGIiL+dddpw:rATPVqnDC5kI6mtRIfGraw", "EventfulDeeplinksPlugin", "GetColdStartDeeplinkURL", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:EfKaTOVOvUaH7dz_vDqLMQ", callContext.id);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:NEFhyjscWUarO47Imqj8mg", callContext.id);
            // Execute Action: CheckEventfulDeekplinksPlugin
            checkEventfulDeekplinksPluginVar.value = EventfulDeeplinksPluginController.default.checkEventfulDeekplinksPlugin$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:BXpEz5cg9Ui29c5gV+GjyA", callContext.id) && checkEventfulDeekplinksPluginVar.value.isAvailableOut)) {
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:D7ESeviS_0S5gCCmFtnOxA", callContext.id);
                getColdStartDeeplinkURLJSJSResult.value = controller.safeExecuteJSNode(EventfulDeeplinksPlugin_controller_GetColdStartDeeplinkURL_GetColdStartDeeplinkURLJSJS, "GetColdStartDeeplinkURLJS", "GetColdStartDeeplinkURL", {
                    Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                    ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                    ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                    URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.GetColdStartDeeplinkURL$getColdStartDeeplinkURLJSJSResult"))();
                    jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
                    jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
                    jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
                    jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:UKTixO7Q8U+xHPg7gjcTUA", callContext.id) && getColdStartDeeplinkURLJSJSResult.value.successOut)) {
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:fMFPY1PWn0WbTHk4e+SSXw", callContext.id);
                    // Success = GetColdStartDeeplinkURLJS.Success
                    outVars.value.successOut = getColdStartDeeplinkURLJSJSResult.value.successOut;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:fMFPY1PWn0WbTHk4e+SSXw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // URL = GetColdStartDeeplinkURLJS.URL
                    outVars.value.uRLOut = getColdStartDeeplinkURLJSJSResult.value.uRLOut;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:porUykh5mE+SqNvrB8vjWQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:RvZKT3A1skKzt9k_xdBBLw", callContext.id);
                    // Error.ErrorCode = GetColdStartDeeplinkURLJS.ErrorCode
                    outVars.value.errorOut.errorCodeAttr = getColdStartDeeplinkURLJSJSResult.value.errorCodeOut;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:RvZKT3A1skKzt9k_xdBBLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Error.ErrorMessage = GetColdStartDeeplinkURLJS.ErrorMessage
                    outVars.value.errorOut.errorMessageAttr = getColdStartDeeplinkURLJSJSResult.value.errorMessageOut;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:RvZKT3A1skKzt9k_xdBBLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Success = GetColdStartDeeplinkURLJS.Success
                    outVars.value.successOut = getColdStartDeeplinkURLJSJSResult.value.successOut;
                    OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:Oro7zFr4bEi72C0DhDbiVw", callContext.id);
                }

            } else {
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:swc21HsohUezPlJedwcc8w", callContext.id);
                // Error.ErrorCode = CheckEventfulDeekplinksPlugin.Error.ErrorCode
                outVars.value.errorOut.errorCodeAttr = checkEventfulDeekplinksPluginVar.value.errorOut.errorCodeAttr;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:swc21HsohUezPlJedwcc8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Error.ErrorMessage = CheckEventfulDeekplinksPlugin.Error.ErrorMessage
                outVars.value.errorOut.errorMessageAttr = checkEventfulDeekplinksPluginVar.value.errorOut.errorMessageAttr;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:swc21HsohUezPlJedwcc8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Success = CheckEventfulDeekplinksPlugin.IsAvailable
                outVars.value.successOut = checkEventfulDeekplinksPluginVar.value.isAvailableOut;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:LRlEfYZ6OkKL7nx2a6ImaA", callContext.id);
            }

            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:UzbRCksKvEyVGIiL+dddpw", callContext.id);
        }

    };
    var controller = EventfulDeeplinksPluginController.default;
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.GetColdStartDeeplinkURL$getColdStartDeeplinkURLJSJSResult", [{
        name: "Success",
        attrName: "successOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "URL",
        attrName: "uRLOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.GetColdStartDeeplinkURL$outVars", [{
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CommonPluginModel.ErrorRec();
        },
        complexType: CommonPluginModel.ErrorRec
    }, {
        name: "Success",
        attrName: "successOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "URL",
        attrName: "uRLOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    EventfulDeeplinksPluginController.default.clientActionProxies.getColdStartDeeplinkURL$Action = function() {
        return controller.executeActionInsideJSNode(EventfulDeeplinksPluginController.default.getColdStartDeeplinkURL$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Error: actionResults.errorOut,
                Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
                URL: OS.DataConversion.JSNodeParamConverter.to(actionResults.uRLOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});
define("EventfulDeeplinksPlugin.controller$GetColdStartDeeplinkURL.GetColdStartDeeplinkURLJSJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var url = cordova.plugins.EventfulDeeplinksPlugin.getColdStartDeeplinkUrl();
        if (url) {
            $parameters.URL = url;
            $parameters.Success = true;
        } else {
            $parameters.Success = false;
            $parameters.ErrorCode = 14;
            $parameters.ErrorMessage = "No cold start deeplink URL is available";
        }
    };
});

define("EventfulDeeplinksPlugin.controller$GetDeeplinkURI", ["exports", "OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller", "EventfulDeeplinksPlugin.controller$GetDeeplinkURI.GetScreenJSJS"], function(exports, OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPluginController, EventfulDeeplinksPlugin_controller_GetDeeplinkURI_GetScreenJSJS) {
    var OS = OutSystems.Internal;
    EventfulDeeplinksPluginController.default.getDeeplinkURI$Action = function(uRLIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.GetDeeplinkURI$vars"))());
        vars.value.uRLInLocal = uRLIn;
        var getScreenJSJSResult = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.GetDeeplinkURI$outVars"))());
        varBag.callContext = callContext;
        varBag.vars = vars;
        varBag.getScreenJSJSResult = getScreenJSJSResult;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:A3v9J7NujkaxiRXmZX3IDQ:/ClientActionFlows.A3v9J7NujkaxiRXmZX3IDQ:MpEHsnpv74JNobcRF_+haA", "EventfulDeeplinksPlugin", "GetDeeplinkURI", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:ViSvKN9bwEWqvd626U9icg", callContext.id);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:cuamhWbvjE2Tl7YY5d9pQQ", callContext.id);
            getScreenJSJSResult.value = controller.safeExecuteJSNode(EventfulDeeplinksPlugin_controller_GetDeeplinkURI_GetScreenJSJS, "GetScreenJS", "GetDeeplinkURI", {
                URL: OS.DataConversion.JSNodeParamConverter.to(vars.value.uRLInLocal, OS.DataTypes.DataTypes.Text),
                Screen: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
            }, function($parameters) {
                var jsNodeResult = new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.GetDeeplinkURI$getScreenJSJSResult"))();
                jsNodeResult.screenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Screen, OS.DataTypes.DataTypes.Text);
                return jsNodeResult;
            }, {}, {});
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:r815SwXOQ0iz00ZKSAzYXQ", callContext.id);
            // ScreenAndParams = GetScreenJS.Screen
            outVars.value.screenAndParamsOut = getScreenJSJSResult.value.screenOut;
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:nBHSAd0qYkCgeSMwwDkWnA", callContext.id);
            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:A3v9J7NujkaxiRXmZX3IDQ", callContext.id);
        }

    };
    var controller = EventfulDeeplinksPluginController.default;
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.GetDeeplinkURI$vars", [{
        name: "URL",
        attrName: "uRLInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.GetDeeplinkURI$getScreenJSJSResult", [{
        name: "Screen",
        attrName: "screenOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.GetDeeplinkURI$outVars", [{
        name: "ScreenAndParams",
        attrName: "screenAndParamsOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    EventfulDeeplinksPluginController.default.clientActionProxies.getDeeplinkURI$Action = function(uRLIn) {
        uRLIn = (uRLIn === undefined) ? "" : uRLIn;
        return controller.executeActionInsideJSNode(EventfulDeeplinksPluginController.default.getDeeplinkURI$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uRLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ScreenAndParams: OS.DataConversion.JSNodeParamConverter.to(actionResults.screenAndParamsOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});
define("EventfulDeeplinksPlugin.controller$GetDeeplinkURI.GetScreenJSJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        (function() {
            var _url = new URL($parameters.URL);
            var pathname = _url.pathname;
            pathname = pathname.startsWith("/") ? pathname.substring(1, pathname.length) : pathname;
            pathname = pathname.endsWith("/") ? pathname.substring(0, pathname.length - 1) : pathname;
            if (pathname !== undefined && pathname.length !== 0) {
                var moduleAndScreen = pathname.split("/");
                var module = moduleAndScreen[0];
                var screen;
                if (moduleAndScreen.length === 2) {
                    screen = moduleAndScreen[1];
                }
                if (screen !== undefined && screen.length > 0) {
                    screen = screen + _url.search;
                    $parameters.Screen = screen;
                }
            }
        })();
    };
});

define("EventfulDeeplinksPlugin.controller$InitializeEventfulDeeplinks", ["exports", "OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller", "CommonPlugin.model", "EventfulDeeplinksPlugin.controller$InitializeEventfulDeeplinks.SwitchToRuntimeHandlerJSJS", "CommonPlugin.model$ErrorRec", "EventfulDeeplinksPlugin.referencesHealth", "EventfulDeeplinksPlugin.referencesHealth$CommonPlugin", "EventfulDeeplinksPlugin.controller$CheckEventfulDeekplinksPlugin"], function(exports, OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPluginController, CommonPluginModel, EventfulDeeplinksPlugin_controller_InitializeEventfulDeeplinks_SwitchToRuntimeHandlerJSJS) {
    var OS = OutSystems.Internal;
    EventfulDeeplinksPluginController.default.initializeEventfulDeeplinks$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var checkEventfulDeekplinksPluginVar = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("EventfulDeeplinksPlugin.InitializeEventfulDeeplinks$outVars"))());
        varBag.callContext = callContext;
        varBag.checkEventfulDeekplinksPluginVar = checkEventfulDeekplinksPluginVar;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("vjEltHeTkECa4288CO703w:X+Ub7nMt1kGKzKWCtv5ZQg:/ClientActionFlows.X+Ub7nMt1kGKzKWCtv5ZQg:TUnd6bpyu_bifv3YZG4ZfA", "EventfulDeeplinksPlugin", "InitializeEventfulDeeplinks", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:LGyEcNjGAkCQ36C_jnOPXA", callContext.id);
            OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:9vmgn6oB8kCyaOeFOpKM7w", callContext.id);
            // Execute Action: CheckEventfulDeekplinksPlugin
            checkEventfulDeekplinksPluginVar.value = EventfulDeeplinksPluginController.default.checkEventfulDeekplinksPlugin$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:go5BDktLwEOpWAWcGDuEUA", callContext.id) && checkEventfulDeekplinksPluginVar.value.isAvailableOut)) {
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:YolBDMrlZEeKedBjGFTpuA", callContext.id);
                controller.safeExecuteJSNode(EventfulDeeplinksPlugin_controller_InitializeEventfulDeeplinks_SwitchToRuntimeHandlerJSJS, "SwitchToRuntimeHandlerJS", "InitializeEventfulDeeplinks", null, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:DCQhgXVRAEGrEOKPYBVbOA", callContext.id);
                // Success = True
                outVars.value.successOut = true;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:ZGhcTOO4zkWmXwQ9OT+swQ", callContext.id);
            } else {
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:0HbPBmolY0imK4zh_5esqg", callContext.id);
                // Error.ErrorCode = CheckEventfulDeekplinksPlugin.Error.ErrorCode
                outVars.value.errorOut.errorCodeAttr = checkEventfulDeekplinksPluginVar.value.errorOut.errorCodeAttr;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:0HbPBmolY0imK4zh_5esqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Error.ErrorMessage = CheckEventfulDeekplinksPlugin.Error.ErrorMessage
                outVars.value.errorOut.errorMessageAttr = checkEventfulDeekplinksPluginVar.value.errorOut.errorMessageAttr;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:0HbPBmolY0imK4zh_5esqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Success = CheckEventfulDeekplinksPlugin.IsAvailable
                outVars.value.successOut = checkEventfulDeekplinksPluginVar.value.isAvailableOut;
                OutSystemsDebugger.handleBreakpoint("vjEltHeTkECa4288CO703w:VAMcNcZkgkyjojmSpOA11g", callContext.id);
            }

            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("vjEltHeTkECa4288CO703w:X+Ub7nMt1kGKzKWCtv5ZQg", callContext.id);
        }

    };
    var controller = EventfulDeeplinksPluginController.default;
    EventfulDeeplinksPluginController.default.constructor.registerVariableGroupType("EventfulDeeplinksPlugin.InitializeEventfulDeeplinks$outVars", [{
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CommonPluginModel.ErrorRec();
        },
        complexType: CommonPluginModel.ErrorRec
    }, {
        name: "Success",
        attrName: "successOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    EventfulDeeplinksPluginController.default.clientActionProxies.initializeEventfulDeeplinks$Action = function() {
        return controller.executeActionInsideJSNode(EventfulDeeplinksPluginController.default.initializeEventfulDeeplinks$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Error: actionResults.errorOut,
                Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});
define("EventfulDeeplinksPlugin.controller$InitializeEventfulDeeplinks.SwitchToRuntimeHandlerJSJS", [], function() {
    return function($actions, $roles, $public) {
        cordova.plugins.EventfulDeeplinksPlugin.switchToRuntimeHandler();
    };
});

define("EventfulDeeplinksPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "EventfulDeeplinksPlugin.model", "EventfulDeeplinksPlugin.controller$debugger"], function(exports, OutSystems, EventfulDeeplinksPluginModel, EventfulDeeplinksPlugin_Controller_debugger) {
    var OS = OutSystems.Internal;
    var EventfulDeeplinksPluginController = exports;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
        }
        Controller.prototype.clientActionProxies = {};
        Controller.prototype.roles = {};
        Controller.prototype.defaultTimeout = 10;
        Controller.prototype.getDefaultTimeout = function() {
            return EventfulDeeplinksPluginController.default.defaultTimeout;
        };
        Controller.prototype.getClientActionProxies = function(controller) {
            var _this = this;
            var thisController = controller;
            return Object.keys(this.clientActionProxies).reduce(function(acc, actionName) {
                acc[actionName] = function() {
                    if (thisController.isActive()) {
                        return _this.clientActionProxies[actionName].apply(thisController, arguments);
                    }

                    return Promise.resolve();
                };
                return acc;
            }, {});
        };
        return Controller;
    })(OS.Controller.BaseModuleController);
    EventfulDeeplinksPluginController.default = new Controller(null, "EventfulDeeplinksPlugin");
});
define("EventfulDeeplinksPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "sPm_B_ix0Ear5qLGByS8vw": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.errorOut;
            }
        },
        "4NfgZybzF0KAntqA01ClIQ": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.successOut;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "uVg4cDmJXkCNeVO0Qdvi9w": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.uRLOut;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NEFhyjscWUarO47Imqj8mg": {
            getter: function(varBag, idService) {
                return varBag.checkEventfulDeekplinksPluginVar.value;
            }
        },
        "D7ESeviS_0S5gCCmFtnOxA": {
            getter: function(varBag, idService) {
                return varBag.getColdStartDeeplinkURLJSJSResult.value;
            }
        },
        "KVPTw+fvq0WiUq_HeNDzMQ": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.isAvailableOut;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "N0YvK2yJXEyurH6Th468fg": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.errorOut;
            }
        },
        "+O52bI1Fi0S7FoefmJK3PQ": {
            getter: function(varBag, idService) {
                return varBag.isCordovaDefinedVar.value;
            }
        },
        "9EfaYgMYHUKW7bpRFsJ4Sw": {
            getter: function(varBag, idService) {
                return varBag.pluginIsLoadedJSResult.value;
            }
        },
        "7kyOTA+jM0SceNhSt04ksg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.uRLInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "2EWODkjlUk+Kh_6hWkp3Jw": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.screenAndParamsOut;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "cuamhWbvjE2Tl7YY5d9pQQ": {
            getter: function(varBag, idService) {
                return varBag.getScreenJSJSResult.value;
            }
        },
        "2ykdV1Vp80qksFbdnZ8lSg": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.errorOut;
            }
        },
        "Kk3NfeKeyUyqRA0yNQyBdA": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.successOut;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9vmgn6oB8kCyaOeFOpKM7w": {
            getter: function(varBag, idService) {
                return varBag.checkEventfulDeekplinksPluginVar.value;
            }
        },
        "YolBDMrlZEeKedBjGFTpuA": {
            getter: function(varBag, idService) {
                return varBag.switchToRuntimeHandlerJSJSResult.value;
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});