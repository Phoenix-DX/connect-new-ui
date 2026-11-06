define("ReactiveHtmlSanitizer.controller$AllowAttributes", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$AllowAttributes.HtmlSanitizer_AllowedAttributesJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_AllowAttributes_HtmlSanitizer_AllowedAttributesJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.allowAttributes$Action = function(attributeNamesIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.AllowAttributes$vars"))());
        vars.value.attributeNamesInLocal = attributeNamesIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:pHCYiUr62E65cFsHFh6C0w:/ClientActionFlows.pHCYiUr62E65cFsHFh6C0w:U7r2KTGPiE558fIwsLYvOw", "ReactiveHtmlSanitizer", "AllowAttributes", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:MYfXlc2YuU+KaS+9+_YUdw", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:6RmgoLJmNEKFheKI0JZadA", callContext.id);
            controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_AllowAttributes_HtmlSanitizer_AllowedAttributesJS, "HtmlSanitizer_AllowedAttributes", "AllowAttributes", {
                AttributeNames: OS.DataConversion.JSNodeParamConverter.to(vars.value.attributeNamesInLocal, OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:RUrVp56nmUWFEVogVgJ73Q", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:pHCYiUr62E65cFsHFh6C0w", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.AllowAttributes$vars", [{
        name: "AttributeNames",
        attrName: "attributeNamesInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.allowAttributes$Action = function(attributeNamesIn) {
        attributeNamesIn = (attributeNamesIn === undefined) ? "" : attributeNamesIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.allowAttributes$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(attributeNamesIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("ReactiveHtmlSanitizer.controller$AllowAttributes.HtmlSanitizer_AllowedAttributesJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var tokens = $parameters.AttributeNames.split(',');
        for (var inx = 0; inx < tokens.length; inx++) {
            if (tokens[inx].length > 0) {
                HtmlSanitizer.AllowedAttributes[tokens[inx]] = true;
            }
        }
    };
});

define("ReactiveHtmlSanitizer.controller$AllowCssStyles", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$AllowCssStyles.HtmlSanitizer_AllowedCssStylesJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_AllowCssStyles_HtmlSanitizer_AllowedCssStylesJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.allowCssStyles$Action = function(cssStylesIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.AllowCssStyles$vars"))());
        vars.value.cssStylesInLocal = cssStylesIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:hHhWmG1sKUKG3ptcdJEFDg:/ClientActionFlows.hHhWmG1sKUKG3ptcdJEFDg:B9rmMqadQ95dUeeLOgORJg", "ReactiveHtmlSanitizer", "AllowCssStyles", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:xZrc0fOsvkaB6hpQBlFvjg", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:YKcNAwoxmkmB2WflJfhb1Q", callContext.id);
            controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_AllowCssStyles_HtmlSanitizer_AllowedCssStylesJS, "HtmlSanitizer_AllowedCssStyles", "AllowCssStyles", {
                CssStyles: OS.DataConversion.JSNodeParamConverter.to(vars.value.cssStylesInLocal, OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:+OPlz1lwnkSJ0K3CfbVHlg", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:hHhWmG1sKUKG3ptcdJEFDg", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.AllowCssStyles$vars", [{
        name: "CssStyles",
        attrName: "cssStylesInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.allowCssStyles$Action = function(cssStylesIn) {
        cssStylesIn = (cssStylesIn === undefined) ? "" : cssStylesIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.allowCssStyles$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cssStylesIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("ReactiveHtmlSanitizer.controller$AllowCssStyles.HtmlSanitizer_AllowedCssStylesJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var tokens = $parameters.CssStyles.split(',');
        for (var inx = 0; inx < tokens.length; inx++) {
            if (tokens[inx].length > 0) {
                HtmlSanitizer.AllowedCssStyles[tokens[inx]] = true;
            }
        }
    };
});

define("ReactiveHtmlSanitizer.controller$AllowTags", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$AllowTags.HtmlSanitizer_AllowedTagsJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_AllowTags_HtmlSanitizer_AllowedTagsJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.allowTags$Action = function(tagsIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.AllowTags$vars"))());
        vars.value.tagsInLocal = tagsIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:q_8FjlQXB0G9MHnehDZUHw:/ClientActionFlows.q_8FjlQXB0G9MHnehDZUHw:5ehfyfMU+XzFFkQFfzny_Q", "ReactiveHtmlSanitizer", "AllowTags", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:u5wbrkPWfEC0RjTjvuf_wA", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:ix3NJJe1EUyTsXoPUIBNgw", callContext.id);
            controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_AllowTags_HtmlSanitizer_AllowedTagsJS, "HtmlSanitizer_AllowedTags", "AllowTags", {
                Tags: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.toUpper(vars.value.tagsInLocal), OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:DO8RCM4jmEWpgI9DO6GVJA", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:q_8FjlQXB0G9MHnehDZUHw", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.AllowTags$vars", [{
        name: "Tags",
        attrName: "tagsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.allowTags$Action = function(tagsIn) {
        tagsIn = (tagsIn === undefined) ? "" : tagsIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.allowTags$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tagsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("ReactiveHtmlSanitizer.controller$AllowTags.HtmlSanitizer_AllowedTagsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var tokens = $parameters.Tags.split(',');
        for (var inx = 0; inx < tokens.length; inx++) {
            if (tokens[inx].length > 0) {
                HtmlSanitizer.AllowedTags[tokens[inx]] = true;
            }
        }
    };
});

define("ReactiveHtmlSanitizer.controller$DisallowAttributes", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$DisallowAttributes.HtmlSanitizer_DisallowedAttributesJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_DisallowAttributes_HtmlSanitizer_DisallowedAttributesJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.disallowAttributes$Action = function(attributeNamesIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.DisallowAttributes$vars"))());
        vars.value.attributeNamesInLocal = attributeNamesIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:ryl3w16ki0+ClsOJg+zxoQ:/ClientActionFlows.ryl3w16ki0+ClsOJg+zxoQ:maiVdil84cZaPTC_wcA9hA", "ReactiveHtmlSanitizer", "DisallowAttributes", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:cvfc68PHj0G7a4xEuSG0Ow", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:uU5o_w5SEEWcM5o+4qBbhw", callContext.id);
            controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_DisallowAttributes_HtmlSanitizer_DisallowedAttributesJS, "HtmlSanitizer_DisallowedAttributes", "DisallowAttributes", {
                CssStyles: OS.DataConversion.JSNodeParamConverter.to(vars.value.attributeNamesInLocal, OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:MDbdYlIEVEqnl6ilTQZxxA", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:ryl3w16ki0+ClsOJg+zxoQ", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.DisallowAttributes$vars", [{
        name: "AttributeNames",
        attrName: "attributeNamesInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.disallowAttributes$Action = function(attributeNamesIn) {
        attributeNamesIn = (attributeNamesIn === undefined) ? "" : attributeNamesIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.disallowAttributes$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(attributeNamesIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("ReactiveHtmlSanitizer.controller$DisallowAttributes.HtmlSanitizer_DisallowedAttributesJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var tokens = $parameters.CssStyles.split(',');
        for (var inx = 0; inx < tokens.length; inx++) {
            if (tokens[inx].length > 0) {
                delete HtmlSanitizer.AllowedAttributes[tokens[inx]];
            }
        }
    };
});

define("ReactiveHtmlSanitizer.controller$DisallowCssStyles", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$DisallowCssStyles.HtmlSanitizer_DisallowedCssStylesJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_DisallowCssStyles_HtmlSanitizer_DisallowedCssStylesJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.disallowCssStyles$Action = function(cssStylesIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.DisallowCssStyles$vars"))());
        vars.value.cssStylesInLocal = cssStylesIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:oieOmPkE7EeWNfL_tolCww:/ClientActionFlows.oieOmPkE7EeWNfL_tolCww:Gp0HNBAIWXuddWNRBTT1zA", "ReactiveHtmlSanitizer", "DisallowCssStyles", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:+NXtQ61kGU2Jmgzn67WQWw", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:zE7m__vNFkO2jdMcc8hTXA", callContext.id);
            controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_DisallowCssStyles_HtmlSanitizer_DisallowedCssStylesJS, "HtmlSanitizer_DisallowedCssStyles", "DisallowCssStyles", {
                CssStyles: OS.DataConversion.JSNodeParamConverter.to(vars.value.cssStylesInLocal, OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:jRtjE4WsjUelYtagReqUnA", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:oieOmPkE7EeWNfL_tolCww", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.DisallowCssStyles$vars", [{
        name: "CssStyles",
        attrName: "cssStylesInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.disallowCssStyles$Action = function(cssStylesIn) {
        cssStylesIn = (cssStylesIn === undefined) ? "" : cssStylesIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.disallowCssStyles$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(cssStylesIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("ReactiveHtmlSanitizer.controller$DisallowCssStyles.HtmlSanitizer_DisallowedCssStylesJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var tokens = $parameters.CssStyles.split(',');
        for (var inx = 0; inx < tokens.length; inx++) {
            if (tokens[inx].length > 0) {
                delete HtmlSanitizer.AllowedCssStyles[tokens[inx]];
            }
        }
    };
});

define("ReactiveHtmlSanitizer.controller$DisallowTags", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$DisallowTags.HtmlSanitizer_DisallowedTagsJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_DisallowTags_HtmlSanitizer_DisallowedTagsJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.disallowTags$Action = function(tagsIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.DisallowTags$vars"))());
        vars.value.tagsInLocal = tagsIn;
        varBag.callContext = callContext;
        varBag.vars = vars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:pMD_TKjLLUm08WhfvFKeeA:/ClientActionFlows.pMD_TKjLLUm08WhfvFKeeA:NC5MDKXteBZf9_ZaMq+IDw", "ReactiveHtmlSanitizer", "DisallowTags", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:yTeKXTHKpkKKS14TuNfigA", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:UF43FZr3Bkys3n5C91Vobg", callContext.id);
            controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_DisallowTags_HtmlSanitizer_DisallowedTagsJS, "HtmlSanitizer_DisallowedTags", "DisallowTags", {
                Tags: OS.DataConversion.JSNodeParamConverter.to(vars.value.tagsInLocal, OS.DataTypes.DataTypes.Text)
            }, function($parameters) {}, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:MF1dLmiP5k6pOFnFQujDlg", callContext.id);
            return;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:pMD_TKjLLUm08WhfvFKeeA", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.DisallowTags$vars", [{
        name: "Tags",
        attrName: "tagsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.disallowTags$Action = function(tagsIn) {
        tagsIn = (tagsIn === undefined) ? "" : tagsIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.disallowTags$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tagsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});
define("ReactiveHtmlSanitizer.controller$DisallowTags.HtmlSanitizer_DisallowedTagsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var tokens = $parameters.Tags.split(',');
        for (var inx = 0; inx < tokens.length; inx++) {
            if (tokens[inx].length > 0) {
                delete HtmlSanitizer.AllowedTags[tokens[inx]];
            }
        }
    };
});

define("ReactiveHtmlSanitizer.controller$SanitizeHtml", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller", "ReactiveHtmlSanitizer.controller$SanitizeHtml.HtmlSanitizer_SanitizedHtmlJS"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizerController, ReactiveHtmlSanitizer_controller_SanitizeHtml_HtmlSanitizer_SanitizedHtmlJS) {
    var OS = OutSystems.Internal;
    ReactiveHtmlSanitizerController.default.sanitizeHtml$Action = function(valueIn, callContext) {
        var varBag = {};
        callContext = controller.callContext(callContext);
        var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.SanitizeHtml$vars"))());
        vars.value.valueInLocal = valueIn;
        var htmlSanitizer_SanitizedHtmlJSResult = new OS.DataTypes.VariableHolder();
        var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.SanitizeHtml$outVars"))());
        varBag.callContext = callContext;
        varBag.vars = vars;
        varBag.htmlSanitizer_SanitizedHtmlJSResult = htmlSanitizer_SanitizedHtmlJSResult;
        varBag.outVars = outVars;
        try {
            OutSystemsDebugger.push("EgHmWg54NUKS+T6qi1DAig:vbFzRJnhMEW_+m3qQ29u7A:/ClientActionFlows.vbFzRJnhMEW_+m3qQ29u7A:i76h5pnsD2lYKGoPRdn71Q", "ReactiveHtmlSanitizer", "SanitizeHtml", "NRFlows.ClientActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:CHo1gBBIiUmcXAI7fCxLqw", callContext.id);
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:93gKMSMllEuqrpxfvnxCyA", callContext.id);
            htmlSanitizer_SanitizedHtmlJSResult.value = controller.safeExecuteJSNode(ReactiveHtmlSanitizer_controller_SanitizeHtml_HtmlSanitizer_SanitizedHtmlJS, "HtmlSanitizer_SanitizedHtml", "SanitizeHtml", {
                Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.valueInLocal, OS.DataTypes.DataTypes.Text),
                SanitizedHtml: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
            }, function($parameters) {
                var jsNodeResult = new(controller.constructor.getVariableGroupType("ReactiveHtmlSanitizer.SanitizeHtml$htmlSanitizer_SanitizedHtmlJSResult"))();
                jsNodeResult.sanitizedHtmlOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SanitizedHtml, OS.DataTypes.DataTypes.Text);
                return jsNodeResult;
            }, {}, {});
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:WbzIgdz3KkWtZVpJu_9x9A", callContext.id);
            // SanitizedHTML = HtmlSanitizer_SanitizedHtml.SanitizedHtml
            outVars.value.sanitizedHTMLOut = htmlSanitizer_SanitizedHtmlJSResult.value.sanitizedHtmlOut;
            OutSystemsDebugger.handleBreakpoint("EgHmWg54NUKS+T6qi1DAig:KEh2vQoBh0mPO0qrVnU3Dw", callContext.id);
            return outVars.value;
        } catch (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            throw ex;
        } finally {
            OutSystemsDebugger.pop("EgHmWg54NUKS+T6qi1DAig:vbFzRJnhMEW_+m3qQ29u7A", callContext.id);
        }

    };
    var controller = ReactiveHtmlSanitizerController.default;
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.SanitizeHtml$vars", [{
        name: "Value",
        attrName: "valueInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.SanitizeHtml$htmlSanitizer_SanitizedHtmlJSResult", [{
        name: "SanitizedHtml",
        attrName: "sanitizedHtmlOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.constructor.registerVariableGroupType("ReactiveHtmlSanitizer.SanitizeHtml$outVars", [{
        name: "SanitizedHTML",
        attrName: "sanitizedHTMLOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    ReactiveHtmlSanitizerController.default.clientActionProxies.sanitizeHtml$Action = function(valueIn) {
        valueIn = (valueIn === undefined) ? "" : valueIn;
        return controller.executeActionInsideJSNode(ReactiveHtmlSanitizerController.default.sanitizeHtml$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                SanitizedHTML: OS.DataConversion.JSNodeParamConverter.to(actionResults.sanitizedHTMLOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});
define("ReactiveHtmlSanitizer.controller$SanitizeHtml.HtmlSanitizer_SanitizedHtmlJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.SanitizedHtml = HtmlSanitizer.SanitizeHtml($parameters.Value);
    };
});

define("ReactiveHtmlSanitizer.controller", ["exports", "OutSystems/ClientRuntime/Main", "ReactiveHtmlSanitizer.model", "ReactiveHtmlSanitizer.controller$debugger"], function(exports, OutSystems, ReactiveHtmlSanitizerModel, ReactiveHtmlSanitizer_Controller_debugger) {
    var OS = OutSystems.Internal;
    var ReactiveHtmlSanitizerController = exports;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
        }
        Controller.prototype.clientActionProxies = {};
        Controller.prototype.roles = {};
        Controller.prototype.defaultTimeout = 10;
        Controller.prototype.getDefaultTimeout = function() {
            return ReactiveHtmlSanitizerController.default.defaultTimeout;
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
    ReactiveHtmlSanitizerController.default = new Controller(null, "ReactiveHtmlSanitizer");
});
define("ReactiveHtmlSanitizer.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "fTwknnQkCkm1Hp8WyVUR6g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.valueInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JyL5jKHdXUKc87CfLVRogw": {
            getter: function(varBag, idService) {
                return varBag.outVars.value.sanitizedHTMLOut;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "93gKMSMllEuqrpxfvnxCyA": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_SanitizedHtmlJSResult.value;
            }
        },
        "46o+1pLRxEW2siWBIVJSDg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.tagsInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UF43FZr3Bkys3n5C91Vobg": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_DisallowedTagsJSResult.value;
            }
        },
        "7jY2ShEAo0KO0R+zoS8dHw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.attributeNamesInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "6RmgoLJmNEKFheKI0JZadA": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_AllowedAttributesJSResult.value;
            }
        },
        "lQ7TGUuBNUGF_dhIrfUoQQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.tagsInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ix3NJJe1EUyTsXoPUIBNgw": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_AllowedTagsJSResult.value;
            }
        },
        "NhY0NdPKa0+FLXI8bSWQiQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.cssStylesInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "YKcNAwoxmkmB2WflJfhb1Q": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_AllowedCssStylesJSResult.value;
            }
        },
        "ae2WULyjR0Oye+r5FczMkg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.cssStylesInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zE7m__vNFkO2jdMcc8hTXA": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_DisallowedCssStylesJSResult.value;
            }
        },
        "J1L2PyT2wkWBmvR7VYU1Gg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.attributeNamesInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uU5o_w5SEEWcM5o+4qBbhw": {
            getter: function(varBag, idService) {
                return varBag.htmlSanitizer_DisallowedAttributesJSResult.value;
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});