define("OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function (OutSystems, OutSystemsUI_2_23Model) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ItemInPhone", "itemInPhoneIn", "ItemInPhone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "1";
}, false), 
this.attr("_itemInPhoneInDataFetchStatus", "_itemInPhoneInDataFetchStatus", "_itemInPhoneInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ItemsInTablet", "itemsInTabletIn", "ItemsInTablet", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 3;
}, false), 
this.attr("_itemsInTabletInDataFetchStatus", "_itemsInTabletInDataFetchStatus", "_itemsInTabletInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ItemsInDesktop", "itemsInDesktopIn", "ItemsInDesktop", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 4;
}, false), 
this.attr("_itemsInDesktopInDataFetchStatus", "_itemsInDesktopInDataFetchStatus", "_itemsInDesktopInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GutterSize", "gutterSizeIn", "GutterSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.space.base;
}, false), 
this.attr("_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("ItemInPhone" in inputs) {
this.variables.itemInPhoneIn = inputs.ItemInPhone;
if("_itemInPhoneInDataFetchStatus" in inputs) {
this.variables._itemInPhoneInDataFetchStatus = inputs._itemInPhoneInDataFetchStatus;
}

}

if("ItemsInTablet" in inputs) {
this.variables.itemsInTabletIn = inputs.ItemsInTablet;
if("_itemsInTabletInDataFetchStatus" in inputs) {
this.variables._itemsInTabletInDataFetchStatus = inputs._itemsInTabletInDataFetchStatus;
}

}

if("ItemsInDesktop" in inputs) {
this.variables.itemsInDesktopIn = inputs.ItemsInDesktop;
if("_itemsInDesktopInDataFetchStatus" in inputs) {
this.variables._itemsInDesktopInDataFetchStatus = inputs._itemsInDesktopInDataFetchStatus;
}

}

if("GutterSize" in inputs) {
this.variables.gutterSizeIn = inputs.GutterSize;
if("_gutterSizeInDataFetchStatus" in inputs) {
this.variables._gutterSizeInDataFetchStatus = inputs._gutterSizeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Adaptive.DEPRECATED_GalleryV2");
});
define("OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$model", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$controller", "OutSystems/ReactWidgets/Main"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_model, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }

            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Adaptive.DEPRECATED_GalleryV2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "osui-deprecated grid-gallery",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$translationsResources", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$debugger", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$controller.OnReady.InitJS"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_TranslationsResources, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_Debugger, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_controller_OnReady_InitJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:fILhQQAvLEuqoL38lr0dWA:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.Mr2B80S_hU2Vdr4LQkX0ww/ClientActions.fILhQQAvLEuqoL38lr0dWA:S1nXBU72OntK39IISzWK0g", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KFAGN014ckWh0TDHdwHIVA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:WGj21Fqqn0yR9We+eskxuQ", callContext.id);
controller.safeExecuteJSNode(OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_controller_OnReady_InitJS, "Init", "OnReady", {
ColumnsInPhone: OS.DataConversion.JSNodeParamConverter.to(model.variables.itemInPhoneIn, OS.DataTypes.DataTypes.PhoneNumber),
GalleryId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Content"), OS.DataTypes.DataTypes.Text),
ColumnsInTablet: OS.DataConversion.JSNodeParamConverter.to(model.variables.itemsInTabletIn, OS.DataTypes.DataTypes.Integer),
GutterSize: OS.DataConversion.JSNodeParamConverter.to(model.variables.gutterSizeIn, OS.DataTypes.DataTypes.Text),
ColumnsInDesktop: OS.DataConversion.JSNodeParamConverter.to((model.variables.itemsInDesktopIn).toString(), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:zHeyrpR4dUO0VqPffmR0bQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:fILhQQAvLEuqoL38lr0dWA", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:9GgB6wiQjkOC68Dd0FW6zQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ:c+cE6xHUcAGaZjT3hFmIag", "OutSystemsUI_2_23", "Adaptive", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:Mr2B80S_hU2Vdr4LQkX0ww:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.Mr2B80S_hU2Vdr4LQkX0ww:JbiWwBTtoLSS2cEX_uXTcQ", "OutSystemsUI_2_23", "DEPRECATED_GalleryV2", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Mr2B80S_hU2Vdr4LQkX0ww", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:9GgB6wiQjkOC68Dd0FW6zQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/DEPRECATED_GalleryV2 On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/DEPRECATED_GalleryV2 On Parameters Changed");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return OutSystemsUI_2_23Controller.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$controller.OnReady.InitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var root = document.documentElement;
var gallery = document.getElementById($parameters.GalleryId);
var IsEdge = document.body.classList.contains('edge');
var itemsDesktop = $parameters.ColumnsInDesktop;
var itemsTablet = $parameters.ColumnsInTablet;
var itemsPhone = $parameters.ColumnsInPhone;

// Set Items
gallery.style.setProperty('--grid-desktop', itemsDesktop);
gallery.style.setProperty('--grid-tablet', itemsTablet);
gallery.style.setProperty('--grid-phone', itemsPhone);

// Set Gutter
gallery.style.setProperty("--grid-gap", "var(--space-"+$parameters.GutterSize+")");

// Fix for Edge, as css calc() doesn't work on all scenarios for this browser
itemsDesktop++;
itemsTablet++;
itemsPhone++;
gallery.style.setProperty('--grid-list-desktop', itemsDesktop);
gallery.style.setProperty('--grid-list-tablet', itemsTablet);
gallery.style.setProperty('--grid-list-phone', itemsPhone);

};
});

define("OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"WGj21Fqqn0yR9We+eskxuQ": {
getter: function (varBag, idService) {
return varBag.initJSResult.value;
}
},
"xje1jsL27kyH+txIqrpQwg": {
getter: function (varBag, idService) {
return varBag.model.variables.itemInPhoneIn;
},
dataType: OS.DataTypes.DataTypes.PhoneNumber
},
"w1ZFMXyrC0GVGuZXGp5YEQ": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsInTabletIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sMcY6tISDkCy9Bjt7wZzzg": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsInDesktopIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ChaU4hmAjk2+UnR78ehKfQ": {
getter: function (varBag, idService) {
return varBag.model.variables.gutterSizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OLhNZugcjE6M+g4KxYAnDA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
