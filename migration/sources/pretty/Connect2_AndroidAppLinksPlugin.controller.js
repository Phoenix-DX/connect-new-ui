define("Connect2_AndroidAppLinksPlugin.controller$CheckTemplate_Plugin", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "CommonPlugin.controller", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.controller$CheckTemplate_Plugin.PluginIsLoadedJS", "CommonPlugin.controller$IsCordovaDefined", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin", "CommonPlugin.model$ErrorRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, CommonPluginController, CommonPluginModel, Connect2_AndroidAppLinksPlugin_controller_CheckTemplate_Plugin_PluginIsLoadedJS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.checkTemplate_Plugin$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
        var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.CheckTemplate_Plugin$outVars"))());
        varBag.callContext = callContext;
        varBag.isCordovaDefinedVar = isCordovaDefinedVar;
        varBag.pluginIsLoadedJSResult = pluginIsLoadedJSResult;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:S9kXFJwG60GHkCNyxs0UoQ:/ClientActionFlows.S9kXFJwG60GHkCNyxs0UoQ:gcwAK0Z7NODsjVUNfbrGgQ", "Connect2_AndroidAppLinksPlugin", "CheckTemplate_Plugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:zk9Fg0heAUaXrfb21Rn5xw", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:+O52bI1Fi0S7FoefmJK3PQ", callContext.id);
            // Execute Action: IsCordovaDefined
            isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:eLTLqRnB3k2lL7GlwwvjdQ", callContext.id) && isCordovaDefinedVar.value.isLoadedOut)) {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:9EfaYgMYHUKW7bpRFsJ4Sw", callContext.id);
                pluginIsLoadedJSResult.value = controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_CheckTemplate_Plugin_PluginIsLoadedJS, "PluginIsLoaded", "CheckTemplate_Plugin", {
                    IsAvailable: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.CheckTemplate_Plugin$pluginIsLoadedJSResult"))();
                    jsNodeResult.isAvailableOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsAvailable, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:JW8E8+lUvk+41C9G8nSLtQ", callContext.id) && pluginIsLoadedJSResult.value.isAvailableOut)) {
                    // Set Result
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:SmpqEd72kE+v+B8rVnUTMw", callContext.id);
                    // IsAvailable = True
                    outVars.value.isAvailableOut = true;
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:i4QK1Z9dIUmsjnC06F0Vew", callContext.id);
                } else {
                    // Set Output
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:yqnEB2WGPECmrWvYUc5Cgg", callContext.id);
                    // IsAvailable = False
                    outVars.value.isAvailableOut = false;
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:yqnEB2WGPECmrWvYUc5Cgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Error.ErrorCode = 2
                    outVars.value.errorOut.errorCodeAttr = "2";
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:yqnEB2WGPECmrWvYUc5Cgg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Error.ErrorMessage = "Plugin is not loaded."
                    outVars.value.errorOut.errorMessageAttr = "Plugin is not loaded.";
                    OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:AMFNVxrY+U+ZK_TbULUBeA", callContext.id);
                }

            } else {
                // Set Output
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:J1wZff9SAE2uVYSO3NH3uw", callContext.id);
                // IsAvailable = False
                outVars.value.isAvailableOut = false;
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:J1wZff9SAE2uVYSO3NH3uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Error.ErrorCode = 1
                outVars.value.errorOut.errorCodeAttr = "1";
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:J1wZff9SAE2uVYSO3NH3uw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Error.ErrorMessage = "cordova is not defined"
                outVars.value.errorOut.errorMessageAttr = "cordova is not defined";
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:GxDT24CrGUWfTlxw0FES1g", callContext.id);
            }

            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:S9kXFJwG60GHkCNyxs0UoQ", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.CheckTemplate_Plugin$pluginIsLoadedJSResult", [{
        name: "IsAvailable",
        attrName: "isAvailableOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.CheckTemplate_Plugin$outVars", [{
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
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.checkTemplate_Plugin$Action = function() {
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.checkTemplate_Plugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsAvailable: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAvailableOut, OS.DataTypes.DataTypes.Boolean),
                Error: actionResults.errorOut
            };
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$CheckTemplate_Plugin.PluginIsLoadedJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsAvailable = !!window.plugins && !!window.plugins.universalLinks;
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$GetAndroidAppLinkData", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.controller$GetAndroidAppLinkData.JavaScript1JS", "Connect2_AndroidAppLinksPlugin.controller$ResetAndroidAppLinkData", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPlugin_controller_GetAndroidAppLinkData_JavaScript1JS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.getAndroidAppLinkData$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var javaScript1JSResult = new OS.DataTypes.VariableHolder();
        var jSONDeserializeEventDataVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_AndroidAppLinksPluginModel.EventDataRec))());
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.GetAndroidAppLinkData$outVars"))());
        varBag.callContext = callContext;
        varBag.javaScript1JSResult = javaScript1JSResult;
        varBag.jSONDeserializeEventDataVar = jSONDeserializeEventDataVar;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:jBTZAATTq0SVRYNJ_QHrmg:/ClientActionFlows.jBTZAATTq0SVRYNJ_QHrmg:zFTiFbPTK45xD2mtjuE4UA", "Connect2_AndroidAppLinksPlugin", "GetAndroidAppLinkData", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:w+Vaqr6cB0G2xBJFTOjVpA", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:DzuHdQqX6kqw_FnWxdeNAg", callContext.id);
            javaScript1JSResult.value = controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_GetAndroidAppLinkData_JavaScript1JS, "JavaScript1", "GetAndroidAppLinkData", {
                EventData: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
            }, function($parameters) {
                var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.GetAndroidAppLinkData$javaScript1JSResult"))();
                jsNodeResult.eventDataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EventData, OS.DataTypes.DataTypes.Text);
                return jsNodeResult;
            }, {}, {});
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:Vl42wkZX_0WfN6VYSRFFEg", callContext.id);
            // JSON Deserialize: JSONDeserializeEventData
            jSONDeserializeEventDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.eventDataOut, Connect2_AndroidAppLinksPluginModel.EventDataRec, false);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:b+XHRGG9jESIQK+qMHaJEw", callContext.id);
            // EventData = JSONDeserializeEventData.Data
            outVars.value.eventDataOut = jSONDeserializeEventDataVar.value.dataOut;
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:l5RQxO_7vkiCuwDYnMPR_w", callContext.id);
            // Execute Action: ResetAndroidAppLinkData
            Connect2_AndroidAppLinksPluginController.default.resetAndroidAppLinkData$Action(callContext);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:Hc19d4bjfEeJXk3iTBarLQ", callContext.id);
            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:jBTZAATTq0SVRYNJ_QHrmg", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.GetAndroidAppLinkData$javaScript1JSResult", [{
        name: "EventData",
        attrName: "eventDataOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.GetAndroidAppLinkData$outVars", [{
        name: "EventData",
        attrName: "eventDataOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new Connect2_AndroidAppLinksPluginModel.EventDataRec();
        },
        complexType: Connect2_AndroidAppLinksPluginModel.EventDataRec
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.getAndroidAppLinkData$Action = function() {
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.getAndroidAppLinkData$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                EventData: actionResults.eventDataOut
            };
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$GetAndroidAppLinkData.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window && window.applinks && window.applinks.eventDataJSON) {
            $parameters.EventData = JSON.stringify(window.applinks.eventDataJSON);
        }

    };
});

define("Connect2_AndroidAppLinksPlugin.controller$GetWindowAppLinkIsSet", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.controller$GetWindowAppLinkIsSet.GetIsSetJS"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPlugin_controller_GetWindowAppLinkIsSet_GetIsSetJS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.getWindowAppLinkIsSet$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var getIsSetJSResult = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.GetWindowAppLinkIsSet$outVars"))());
        varBag.callContext = callContext;
        varBag.getIsSetJSResult = getIsSetJSResult;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:3Z2QPSIEyEma0LA4by73Bg:/ClientActionFlows.3Z2QPSIEyEma0LA4by73Bg:ghT00_H3_BpZTtwlfweORQ", "Connect2_AndroidAppLinksPlugin", "GetWindowAppLinkIsSet", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:0zM9ah_I8kGILZXzsknLRQ", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:vcnUc3XUbU2biwNRqVuhfg", callContext.id);
            getIsSetJSResult.value = controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_GetWindowAppLinkIsSet_GetIsSetJS, "GetIsSet", "GetWindowAppLinkIsSet", {
                IsSet: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
            }, function($parameters) {
                var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.GetWindowAppLinkIsSet$getIsSetJSResult"))();
                jsNodeResult.isSetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSet, OS.DataTypes.DataTypes.Boolean);
                return jsNodeResult;
            }, {}, {});
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:4k_3n9Pr00KZw7r_c5nGsQ", callContext.id);
            // IsSet = GetIsSet.IsSet
            outVars.value.isSetOut = getIsSetJSResult.value.isSetOut;
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:fNaA_r6_bU6pPxiS9AoFCw", callContext.id);
            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:3Z2QPSIEyEma0LA4by73Bg", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.GetWindowAppLinkIsSet$getIsSetJSResult", [{
        name: "IsSet",
        attrName: "isSetOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.GetWindowAppLinkIsSet$outVars", [{
        name: "IsSet",
        attrName: "isSetOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.getWindowAppLinkIsSet$Action = function() {
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.getWindowAppLinkIsSet$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsSet: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSetOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$GetWindowAppLinkIsSet.GetIsSetJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window.applinks) {
            window.applinks.IsSet ? $parameters.IsSet = true : $parameters.IsSet = false;
        }
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$HandleAndroidAppLink", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.controller$HandleAndroidAppLink.JavaScript1JS", "Connect2_AndroidAppLinksPlugin.controller$SetAndroidAppLinkData"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPlugin_controller_HandleAndroidAppLink_JavaScript1JS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.handleAndroidAppLink$Action = function(eventDataIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.HandleAndroidAppLink$vars"))());
        vars.value.eventDataInLocal = eventDataIn;
        var javaScript1JSResult = new OS.DataTypes.VariableHolder();
        varBag.callContext = callContext;
        varBag.vars = vars;
        varBag.javaScript1JSResult = javaScript1JSResult;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:VHmFgA6O1ECltTnQ2JILlQ:/ClientActionFlows.VHmFgA6O1ECltTnQ2JILlQ:aalbzDCL56SzyTGp2f+TDA", "Connect2_AndroidAppLinksPlugin", "HandleAndroidAppLink", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:uh6iCDMTJk6UdMzzqH932w", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:x1DOutYyfUSvL9tviVMF6Q", callContext.id);
            javaScript1JSResult.value = controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_HandleAndroidAppLink_JavaScript1JS, "JavaScript1", "HandleAndroidAppLink", {
                Event: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventDataInLocal, OS.DataTypes.DataTypes.Object),
                URL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                EventDataJSON: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
            }, function($parameters) {
                var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.HandleAndroidAppLink$javaScript1JSResult"))();
                jsNodeResult.uRLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.URL, OS.DataTypes.DataTypes.Text);
                jsNodeResult.eventDataJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EventDataJSON, OS.DataTypes.DataTypes.Object);
                return jsNodeResult;
            }, {}, {});
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:RKC0oJoBA0aNdDT7Bt004w", callContext.id);
            // Execute Action: SetAndroidAppLinkData
            Connect2_AndroidAppLinksPluginController.default.setAndroidAppLinkData$Action(javaScript1JSResult.value.eventDataJSONOut, callContext);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:yf5xfqV9mkyRSHSEhelwfA", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:VHmFgA6O1ECltTnQ2JILlQ", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.HandleAndroidAppLink$vars", [{
        name: "EventData",
        attrName: "eventDataInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Object,
        defaultValue: function() {
            return null;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.HandleAndroidAppLink$javaScript1JSResult", [{
        name: "URL",
        attrName: "uRLOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "EventDataJSON",
        attrName: "eventDataJSONOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Object,
        defaultValue: function() {
            return null;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.handleAndroidAppLink$Action = function(eventDataIn) {
        eventDataIn = (eventDataIn === undefined) ? null : eventDataIn;
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.handleAndroidAppLink$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventDataIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$HandleAndroidAppLink.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {

        if ($parameters.Event) {
            var params = [];
            var eventParams = $parameters.Event.params;
            for (var key in eventParams) {
                if (eventParams.hasOwnProperty(key)) {
                    params.push({
                        "name": key,
                        "value": eventParams[key]
                    });
                }
            }

            $parameters.Event.params = params;

            $parameters.EventDataJSON = $parameters.Event;
            $parameters.URL = $parameters.Event.url;
        }
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$HandleOnApplicationResumeAndroidAppLinks", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.model$EventDataRec", "Connect2_AndroidAppLinksPlugin.controller$TriggerOnResumeNavigationEvent", "Connect2_AndroidAppLinksPlugin.controller$GetAndroidAppLinkData"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.handleOnApplicationResumeAndroidAppLinks$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var getAndroidAppLinkDataVar = new OS.DataTypes.VariableHolder();
        varBag.callContext = callContext;
        varBag.getAndroidAppLinkDataVar = getAndroidAppLinkDataVar;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:gBoh3aUuKUKyg1WUAW0STg:/ClientActionFlows.gBoh3aUuKUKyg1WUAW0STg:7X0Vz3cRL1l3kNTmN01pnw", "Connect2_AndroidAppLinksPlugin", "HandleOnApplicationResumeAndroidAppLinks", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:8c7dIVbnVEuGXtShZPabdA", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:AvEMMdGUuU2CfogjZm9E0w", callContext.id);
            // Execute Action: GetAndroidAppLinkData
            getAndroidAppLinkDataVar.value = Connect2_AndroidAppLinksPluginController.default.getAndroidAppLinkData$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:guQPt+vBL0SQHAQE8ZN3Og", callContext.id) && ((getAndroidAppLinkDataVar.value.eventDataOut.uRLAttr) !== ("")))) {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:5W7ZHlfiJE6SIhXL1CNTyg", callContext.id);
                // Execute Action: TriggerOnResumeNavigationEvent
                Connect2_AndroidAppLinksPluginController.default.triggerOnResumeNavigationEvent$Action(getAndroidAppLinkDataVar.value.eventDataOut, callContext);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:jJ0yu4uCyUCRX4j05OfrSw", callContext.id);
            } else {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:XhSLg8MI40uQ1E4bJkn0GQ", callContext.id);
            }

            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:gBoh3aUuKUKyg1WUAW0STg", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.handleOnApplicationResumeAndroidAppLinks$Action = function() {
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.handleOnApplicationResumeAndroidAppLinks$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$InitAndroidAppLinksPlugin", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.controller$InitAndroidAppLinksPlugin.OSActionToJSObjectJS", "Connect2_AndroidAppLinksPlugin.controller$InitAndroidAppLinksPlugin.RegisterResumeApplicationLogicJS", "Connect2_AndroidAppLinksPlugin.controller$SubscribeEvent", "CommonPlugin.model$ErrorRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin", "Connect2_AndroidAppLinksPlugin.controller$CheckTemplate_Plugin", "Connect2_AndroidAppLinksPlugin.controller$HandleAndroidAppLink", "Connect2_AndroidAppLinksPlugin.controller$HandleOnApplicationResumeAndroidAppLinks"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, CommonPluginModel, Connect2_AndroidAppLinksPlugin_controller_InitAndroidAppLinksPlugin_OSActionToJSObjectJS, Connect2_AndroidAppLinksPlugin_controller_InitAndroidAppLinksPlugin_RegisterResumeApplicationLogicJS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.initAndroidAppLinksPlugin$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.InitAndroidAppLinksPlugin$vars"))());
        var checkTemplate_PluginVar = new OS.DataTypes.VariableHolder();
        var oSActionToJSObjectJSResult = new OS.DataTypes.VariableHolder();
        varBag.callContext = callContext;
        varBag.vars = vars;
        varBag.checkTemplate_PluginVar = checkTemplate_PluginVar;
        varBag.oSActionToJSObjectJSResult = oSActionToJSObjectJSResult;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:lrmj_0e4n0W_47kKotLnGQ:/ClientActionFlows.lrmj_0e4n0W_47kKotLnGQ:BpQQOJxxiJ6cZtKD07fA+Q", "Connect2_AndroidAppLinksPlugin", "InitAndroidAppLinksPlugin", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:TJsFIbz_a0uUnZ3HJiG3IA", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:NkNuyDPL+E2afISQPUfNmg", callContext.id);
            // Execute Action: CheckTemplate_Plugin
            checkTemplate_PluginVar.value = Connect2_AndroidAppLinksPluginController.default.checkTemplate_Plugin$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:UXy_dBwkaUShUaWgKmf+zw", callContext.id) && checkTemplate_PluginVar.value.isAvailableOut)) {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:QpH6Ms9Xjku6E0qOoZuMkg", callContext.id);
                oSActionToJSObjectJSResult.value = controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_InitAndroidAppLinksPlugin_OSActionToJSObjectJS, "OSActionToJSObject", "InitAndroidAppLinksPlugin", {
                    ActionAsObject: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.InitAndroidAppLinksPlugin$oSActionToJSObjectJSResult"))();
                    jsNodeResult.actionAsObjectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ActionAsObject, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    HandleAndroidAppLink: Connect2_AndroidAppLinksPluginController.default.getClientActionProxies(controller).handleAndroidAppLink$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:XCAdon5OEUa63Tw2ulSHwg", callContext.id);
                // Execute Action: SubscribeEvent
                Connect2_AndroidAppLinksPluginController.default.subscribeEvent$Action(vars.value.uL_EVENT_NAMEVar, oSActionToJSObjectJSResult.value.actionAsObjectOut, callContext);
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:YqIzzr2fL0KlzDnSX2NEfw", callContext.id);
                controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_InitAndroidAppLinksPlugin_RegisterResumeApplicationLogicJS, "RegisterResumeApplicationLogic", "InitAndroidAppLinksPlugin", null, function($parameters) {}, {
                    HandleOnApplicationResumeAndroidAppLinks: Connect2_AndroidAppLinksPluginController.default.getClientActionProxies(controller).handleOnApplicationResumeAndroidAppLinks$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:ZLDxLYv+U0+zDSTB5Bd+9w", callContext.id);
            } else {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:Bua6pHHIaEOe0jsquE+QBg", callContext.id);
            }

            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:lrmj_0e4n0W_47kKotLnGQ", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.InitAndroidAppLinksPlugin$vars", [{
        name: "UL_EVENT_NAME",
        attrName: "uL_EVENT_NAMEVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "openAndroidPage";
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.InitAndroidAppLinksPlugin$oSActionToJSObjectJSResult", [{
        name: "ActionAsObject",
        attrName: "actionAsObjectOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Object,
        defaultValue: function() {
            return null;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.initAndroidAppLinksPlugin$Action = function() {
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.initAndroidAppLinksPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$InitAndroidAppLinksPlugin.OSActionToJSObjectJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.ActionAsObject = $actions.HandleAndroidAppLink;
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$InitAndroidAppLinksPlugin.RegisterResumeApplicationLogicJS", [], function() {
    return function($actions, $roles, $public) {
        document.addEventListener("resume", $actions.HandleOnApplicationResumeAndroidAppLinks);
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$ResetAndroidAppLinkData", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.controller$ResetAndroidAppLinkData.JavaScript1JS"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPlugin_controller_ResetAndroidAppLinkData_JavaScript1JS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.resetAndroidAppLinkData$Action = function(callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        varBag.callContext = callContext;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:+hSQuciBZEG6vDcn0jfnQw:/ClientActionFlows.+hSQuciBZEG6vDcn0jfnQw:1dPKMx3p6+QDI5jRqVTX9A", "Connect2_AndroidAppLinksPlugin", "ResetAndroidAppLinkData", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:H3DnY0vfVEe0a1+fOYM_Hw", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:hJfUL0_1wEGC104OnxoMHA", callContext.id);
            controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_ResetAndroidAppLinkData_JavaScript1JS, "JavaScript1", "ResetAndroidAppLinkData", null, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:8ZH70hOoSkOMnxfk55Enbg", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:+hSQuciBZEG6vDcn0jfnQw", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.resetAndroidAppLinkData$Action = function() {
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.resetAndroidAppLinkData$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$ResetAndroidAppLinkData.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.applinks = window.applinks || {};
        window.applinks.eventDataJSON = null;
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$SetAndroidAppLinkData", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.controller$SetAndroidAppLinkData.JavaScript1JS"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPlugin_controller_SetAndroidAppLinkData_JavaScript1JS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.setAndroidAppLinkData$Action = function(eventDataJSONIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.SetAndroidAppLinkData$vars"))());
        vars.value.eventDataJSONInLocal = eventDataJSONIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:1lBNT77NJUqDbFlU5n51Cw:/ClientActionFlows.1lBNT77NJUqDbFlU5n51Cw:RwQYs+TAcp6bhPkzYJmmUw", "Connect2_AndroidAppLinksPlugin", "SetAndroidAppLinkData", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:n6qnD24RX0aPmQTmBDEf9g", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:kNBqjDrmv0KLOUih01XzVA", callContext.id);
            controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_SetAndroidAppLinkData_JavaScript1JS, "JavaScript1", "SetAndroidAppLinkData", {
                EventDataJSON: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventDataJSONInLocal, OS.DataTypes.DataTypes.Object)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:mq1XmYAipE2M6FA2NgDPjg", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:1lBNT77NJUqDbFlU5n51Cw", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.SetAndroidAppLinkData$vars", [{
        name: "EventDataJSON",
        attrName: "eventDataJSONInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Object,
        defaultValue: function() {
            return null;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.setAndroidAppLinkData$Action = function(eventDataJSONIn) {
        eventDataJSONIn = (eventDataJSONIn === undefined) ? null : eventDataJSONIn;
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.setAndroidAppLinkData$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventDataJSONIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$SetAndroidAppLinkData.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.applinks = window.applinks || {};
        window.applinks.eventDataJSON = $parameters.EventDataJSON;
        window.applinks.IsSet = true;
    };
});

define("Connect2_AndroidAppLinksPlugin.controller$SubscribeEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.controller$SubscribeEvent.JavaScript1JS", "CommonPlugin.model$ErrorRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin", "Connect2_AndroidAppLinksPlugin.controller$CheckTemplate_Plugin"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, CommonPluginModel, Connect2_AndroidAppLinksPlugin_controller_SubscribeEvent_JavaScript1JS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.subscribeEvent$Action = function(eventNameIn, eventHandlerIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.SubscribeEvent$vars"))());
        vars.value.eventNameInLocal = eventNameIn;
        vars.value.eventHandlerInLocal = eventHandlerIn;
        var checkTemplate_PluginVar = new OS.DataTypes.VariableHolder();
        varBag.callContext = callContext;
        varBag.vars = vars;
        varBag.checkTemplate_PluginVar = checkTemplate_PluginVar;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:alSv30ZdjUGbPlJQUsM0Hw:/ClientActionFlows.alSv30ZdjUGbPlJQUsM0Hw:wThTIGCQmMfXzJ4YAtjQyg", "Connect2_AndroidAppLinksPlugin", "SubscribeEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:t+sXYAsdN0eOoGZdnjvGUg", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:v25dNguMrkaAe9FS6BUqJw", callContext.id);
            // Execute Action: CheckTemplate_Plugin
            checkTemplate_PluginVar.value = Connect2_AndroidAppLinksPluginController.default.checkTemplate_Plugin$Action(callContext);

            if ((OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:FHf0990J_UO2PgKq8al2gQ", callContext.id) && checkTemplate_PluginVar.value.isAvailableOut)) {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:iCVn2ZYy7Eetb4aIu8EQ5Q", callContext.id);
                controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_SubscribeEvent_JavaScript1JS, "JavaScript1", "SubscribeEvent", {
                    EventHandler: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventHandlerInLocal, OS.DataTypes.DataTypes.Object),
                    EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:4aq_IjliOkOJwXi3nDe+2w", callContext.id);
            } else {
                OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:rR9dwEPCLkeN1ozQMWtWgQ", callContext.id);
            }

            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:alSv30ZdjUGbPlJQUsM0Hw", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.SubscribeEvent$vars", [{
        name: "EventName",
        attrName: "eventNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "EventHandler",
        attrName: "eventHandlerInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Object,
        defaultValue: function() {
            return null;
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.subscribeEvent$Action = function(eventNameIn, eventHandlerIn) {
        eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
        eventHandlerIn = (eventHandlerIn === undefined) ? null : eventHandlerIn;
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.subscribeEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(eventHandlerIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$SubscribeEvent.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.plugins.universalLinks.subscribe($parameters.EventName, $parameters.EventHandler);

    };
});

define("Connect2_AndroidAppLinksPlugin.controller$TriggerOnResumeNavigationEvent", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller", "Connect2_AndroidAppLinksPlugin.controller$TriggerOnResumeNavigationEvent.TriggerOnResumeNavigationEventJS", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPluginController, Connect2_AndroidAppLinksPlugin_controller_TriggerOnResumeNavigationEvent_TriggerOnResumeNavigationEventJS) {
    var OS = OutSystems.Internal;
    Connect2_AndroidAppLinksPluginController.default.triggerOnResumeNavigationEvent$Action = function(eventDataIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_AndroidAppLinksPlugin.TriggerOnResumeNavigationEvent$vars"))());
        vars.value.eventDataInLocal = eventDataIn.clone();
        var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
        varBag.callContext = callContext;
        varBag.vars = vars;
        varBag.jSONSerialize1Var = jSONSerialize1Var;
        try {
            OutSystemsDebugger.push("_7Ka2eUJsUGB43J6slnJMw:SMUokOCMb0KdHnHTMWEUMA:/ClientActionFlows.SMUokOCMb0KdHnHTMWEUMA:p38lZDHPGmGRfUWJ60BD_Q", "Connect2_AndroidAppLinksPlugin", "TriggerOnResumeNavigationEvent", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:sGZCUlMSm0OQhm76zJzYJg", callContext.id);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:dyrGu6EIRU67ORPTslWsUQ", callContext.id);
            // JSON Serialize: JSONSerialize1
            jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.eventDataInLocal, false, false);
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:t3HZy_wOQUSPPGuPuE9eJQ", callContext.id);
            controller.safeExecuteJSNode(Connect2_AndroidAppLinksPlugin_controller_TriggerOnResumeNavigationEvent_TriggerOnResumeNavigationEventJS, "TriggerOnResumeNavigationEvent", "TriggerOnResumeNavigationEvent", {
                EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.rESUME_EVENT_NAMEVar, OS.DataTypes.DataTypes.Text),
                Detail: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("_7Ka2eUJsUGB43J6slnJMw:0Hs7k0bk+UaGsQ04tq3ErA", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("_7Ka2eUJsUGB43J6slnJMw:SMUokOCMb0KdHnHTMWEUMA", callContext.id);
        }

    };
    var controller = Connect2_AndroidAppLinksPluginController.default;
    Connect2_AndroidAppLinksPluginController.default.constructor.registerVariableGroupType("Connect2_AndroidAppLinksPlugin.TriggerOnResumeNavigationEvent$vars", [{
        name: "EventData",
        attrName: "eventDataInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new Connect2_AndroidAppLinksPluginModel.EventDataRec();
        },
        complexType: Connect2_AndroidAppLinksPluginModel.EventDataRec
    }, {
        name: "RESUME_EVENT_NAME",
        attrName: "rESUME_EVENT_NAMEVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "ResumeNavigationEventName";
        }
    }]);
    Connect2_AndroidAppLinksPluginController.default.clientActionProxies.triggerOnResumeNavigationEvent$Action = function(eventDataIn) {
        eventDataIn = (eventDataIn === undefined) ? new Connect2_AndroidAppLinksPluginModel.EventDataRec() : eventDataIn;
        return controller.executeActionInsideJSNode(Connect2_AndroidAppLinksPluginController.default.triggerOnResumeNavigationEvent$Action.bind(controller, eventDataIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("Connect2_AndroidAppLinksPlugin.controller$TriggerOnResumeNavigationEvent.TriggerOnResumeNavigationEventJS", [], function() {
    return function($parameters, $actions, $roles, $public) {


        var event = new CustomEvent($parameters.EventName, {
            detail: JSON.parse($parameters.Detail)
        });
        window.dispatchEvent(event);
    };
});

define("Connect2_AndroidAppLinksPlugin.controller", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.controller$debugger"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel, Connect2_AndroidAppLinksPlugin_Controller_debugger) {
    var OS = OutSystems.Internal;
    var Connect2_AndroidAppLinksPluginController = exports;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
        }
        Controller.prototype.clientActionProxies = {};
        Controller.prototype.roles = {};
        Controller.prototype.defaultTimeout = 10;
        Controller.prototype.getDefaultTimeout = function() {
            return Connect2_AndroidAppLinksPluginController.default.defaultTimeout;
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
    Connect2_AndroidAppLinksPluginController.default = new Controller(null, "Connect2_AndroidAppLinksPlugin");
});
define("Connect2_AndroidAppLinksPlugin.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "IjljkPwZ5ky7OfUgUUcRBA": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.eventDataOut;
            }
        },
        "Vl42wkZX_0WfN6VYSRFFEg": {
            getter: function(varBag, idService) {
                return varBag.jSONDeserializeEventDataVar.value;
            }
        },
        "DzuHdQqX6kqw_FnWxdeNAg": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
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
        "c3BgXNMQbUSlM6Z0DzYY_A": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.isSetOut;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "vcnUc3XUbU2biwNRqVuhfg": {
            getter: function(varBag, idService) {
                return varBag.getIsSetJSResult.value;
            }
        },
        "raJHtaQ1m0uK8KnDqbGHBg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventDataJSONInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "kNBqjDrmv0KLOUih01XzVA": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "uTaVnz4tcU+s8XMBN8MHUA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventDataInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "x1DOutYyfUSvL9tviVMF6Q": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "JifnksxJGEaskWnr+8P72w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.rESUME_EVENT_NAMEVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "klor989nDUiKkrhrbKK1VA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventDataInLocal;
            }
        },
        "dyrGu6EIRU67ORPTslWsUQ": {
            getter: function(varBag, idService) {
                return varBag.jSONSerialize1Var.value;
            }
        },
        "t3HZy_wOQUSPPGuPuE9eJQ": {
            getter: function(varBag, idService) {
                return varBag.triggerOnResumeNavigationEventJSResult.value;
            }
        },
        "hJfUL0_1wEGC104OnxoMHA": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "AvEMMdGUuU2CfogjZm9E0w": {
            getter: function(varBag, idService) {
                return varBag.getAndroidAppLinkDataVar.value;
            }
        },
        "r4foxsttr0q7CDYodqSTUA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4ZK1Jp_SUkGcCjwAO52g_A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventHandlerInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "v25dNguMrkaAe9FS6BUqJw": {
            getter: function(varBag, idService) {
                return varBag.checkTemplate_PluginVar.value;
            }
        },
        "iCVn2ZYy7Eetb4aIu8EQ5Q": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "9OXlUhhbUkqpohc11SZFog": {
            getter: function(varBag, idService) {
                return varBag.vars.value.uL_EVENT_NAMEVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NkNuyDPL+E2afISQPUfNmg": {
            getter: function(varBag, idService) {
                return varBag.checkTemplate_PluginVar.value;
            }
        },
        "QpH6Ms9Xjku6E0qOoZuMkg": {
            getter: function(varBag, idService) {
                return varBag.oSActionToJSObjectJSResult.value;
            }
        },
        "YqIzzr2fL0KlzDnSX2NEfw": {
            getter: function(varBag, idService) {
                return varBag.registerResumeApplicationLogicJSResult.value;
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});