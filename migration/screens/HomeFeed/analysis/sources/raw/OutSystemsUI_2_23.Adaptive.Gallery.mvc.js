define("OutSystemsUI_2_23.Adaptive.Gallery.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$Gallery_InternalConfigRec", "OutSystemsUI_2_23.controller$GalleryDestroy", "OutSystemsUI_2_23.controller$GalleryInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GalleryChangeTextProperty", "OutSystemsUI_2_23.controller$GalleryRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$GalleryCreate"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Internal_configs", "internal_configsVar", "Internal_configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.Gallery_InternalConfigRec());
}, false, OutSystemsUI_2_23Model.Gallery_InternalConfigRec), 
this.attr("RowItemsDesktop", "rowItemsDesktopIn", "RowItemsDesktop", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 4;
}, false), 
this.attr("_rowItemsDesktopInDataFetchStatus", "_rowItemsDesktopInDataFetchStatus", "_rowItemsDesktopInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("RowItemsTablet", "rowItemsTabletIn", "RowItemsTablet", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 3;
}, false), 
this.attr("_rowItemsTabletInDataFetchStatus", "_rowItemsTabletInDataFetchStatus", "_rowItemsTabletInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("RowItemsPhone", "rowItemsPhoneIn", "RowItemsPhone", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, false), 
this.attr("_rowItemsPhoneInDataFetchStatus", "_rowItemsPhoneInDataFetchStatus", "_rowItemsPhoneInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ItemsGap", "itemsGapIn", "ItemsGap", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUI_2_23Model.staticEntities.space.base;
}, false), 
this.attr("_itemsGapInDataFetchStatus", "_itemsGapInDataFetchStatus", "_itemsGapInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("RowItemsDesktop" in inputs) {
this.variables.rowItemsDesktopIn = inputs.RowItemsDesktop;
if("_rowItemsDesktopInDataFetchStatus" in inputs) {
this.variables._rowItemsDesktopInDataFetchStatus = inputs._rowItemsDesktopInDataFetchStatus;
}

}

if("RowItemsTablet" in inputs) {
this.variables.rowItemsTabletIn = inputs.RowItemsTablet;
if("_rowItemsTabletInDataFetchStatus" in inputs) {
this.variables._rowItemsTabletInDataFetchStatus = inputs._rowItemsTabletInDataFetchStatus;
}

}

if("RowItemsPhone" in inputs) {
this.variables.rowItemsPhoneIn = inputs.RowItemsPhone;
if("_rowItemsPhoneInDataFetchStatus" in inputs) {
this.variables._rowItemsPhoneInDataFetchStatus = inputs._rowItemsPhoneInDataFetchStatus;
}

}

if("ItemsGap" in inputs) {
this.variables.itemsGapIn = inputs.ItemsGap;
if("_itemsGapInDataFetchStatus" in inputs) {
this.variables._itemsGapInDataFetchStatus = inputs._itemsGapInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Adaptive.Gallery");
});
define("OutSystemsUI_2_23.Adaptive.Gallery.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$model", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$Gallery_InternalConfigRec", "OutSystemsUI_2_23.controller$GalleryDestroy", "OutSystemsUI_2_23.controller$GalleryInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GalleryChangeTextProperty", "OutSystemsUI_2_23.controller$GalleryRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$GalleryCreate"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Adaptive_Gallery_mvc_model, OutSystemsUI_2_23_Adaptive_Gallery_mvc_controller, OSWidgets) {
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
        View.displayName = "Adaptive.Gallery";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return OutSystemsUI_2_23_Adaptive_Gallery_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return OutSystemsUI_2_23_Adaptive_Gallery_mvc_controller;
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
extendedProperties: {
name: model.variables.internal_configsVar.uniqueIdAttr
},
style: "osui-gallery",
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
define("OutSystemsUI_2_23.Adaptive.Gallery.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$translationsResources", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$debugger", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI_2_23.model$Gallery_InternalConfigRec", "OutSystemsUI_2_23.controller$GalleryDestroy", "OutSystemsUI_2_23.controller$GalleryInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GalleryChangeTextProperty", "OutSystemsUI_2_23.controller$GalleryRegisterCallback", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$GalleryCreate"], function (OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Adaptive_Gallery_mvc_TranslationsResources, OutSystemsUI_2_23_Adaptive_Gallery_mvc_Debugger, OutSystemsUI_2_23_Adaptive_Gallery_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (galleryIdIn) {
galleryIdIn = (galleryIdIn === undefined) ? "" : galleryIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(galleryIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
Controller.prototype.translationResources = OutSystemsUI_2_23_Adaptive_Gallery_mvc_TranslationsResources;
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:P9JZVJADAkWE+gGhX1UZJA:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg/ClientActions.P9JZVJADAkWE+gGhX1UZJA:MO3IjKy53xZ1Q82GGQYqvw", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:tyE3JiklNkCdBs5_doEdDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:xYjGq3dnDUWp8HX2UsdWGw", callContext.id);
// Execute Action: GalleryDestroy
OutSystemsUI_2_23Controller.default.galleryDestroy$Action(model.variables.internal_configsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:N6wnDBWGQUCF5NfC4YD38g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:P9JZVJADAkWE+gGhX1UZJA", callContext.id);
}

};
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
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:AKk6mZPA90qbLwR+MZkmoA:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg/ClientActions.AKk6mZPA90qbLwR+MZkmoA:egw6KrK2GN7veLW3YlKGdw", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JVV+8e7FK06zpFDc6y03Ng", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:j3kPC+v7HkqAfLbPk50OaA", callContext.id);
// Execute Action: GalleryInitialize
OutSystemsUI_2_23Controller.default.galleryInitialize$Action(model.variables.internal_configsVar.uniqueIdAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:fDOAydKsY0eeEAWkd2xVpw", callContext.id);
// Execute Action: LogEnd
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Gallery created", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:06aqpEeXIE6rbc8gCGpoTg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:AKk6mZPA90qbLwR+MZkmoA", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:JGJHmsSCD02dLxjonncWGw:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg/ClientActions.JGJHmsSCD02dLxjonncWGw:e8IaQt+5olRZ3Z2qOFTtDQ", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4SMxT_7vAk2N1IoQoc8bLg", callContext.id);
// Items in phone changed?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:S8_VqfFL90GjYZLaf+K6Eg", callContext.id) && (((model.variables.rowItemsPhoneIn).toString()) !== (model.variables.internal_configsVar.rowItemsPhoneAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JQr8FQSZW0WfYilZkXgY0A", callContext.id);
// Internal_configs.RowItemsPhone = RowItemsPhone
model.variables.internal_configsVar.rowItemsPhoneAttr = (model.variables.rowItemsPhoneIn).toString();
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JCfUBL0BgkCklQ0H7JFntQ", callContext.id);
// Execute Action: Update_RowItemsPhone
OutSystemsUI_2_23Controller.default.galleryChangeTextProperty$Action(model.variables.internal_configsVar.uniqueIdAttr, "RowItemsPhone", model.variables.internal_configsVar.rowItemsPhoneAttr, callContext);
}

// items in tablet changed?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DkzFrXkB+kSwIJwOuIuYlg", callContext.id) && (((model.variables.rowItemsTabletIn).toString()) !== (model.variables.internal_configsVar.rowItemsTabletAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:nf9vONPyUkCbhOkMS4ciCQ", callContext.id);
// Internal_configs.RowItemsTablet = RowItemsTablet
model.variables.internal_configsVar.rowItemsTabletAttr = (model.variables.rowItemsTabletIn).toString();
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NWXdUAu9w0SwG8yY+oUd_A", callContext.id);
// Execute Action: Update_RowItemsTablet
OutSystemsUI_2_23Controller.default.galleryChangeTextProperty$Action(model.variables.internal_configsVar.uniqueIdAttr, "RowItemsTablet", model.variables.internal_configsVar.rowItemsTabletAttr, callContext);
}

// Items in desktop changed?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NcdGvNxtcUeXgwoZlhyJmA", callContext.id) && (((model.variables.rowItemsDesktopIn).toString()) !== (model.variables.internal_configsVar.rowItemsDesktopAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:uYu8nEsfokepzGDPZpseXg", callContext.id);
// Internal_configs.RowItemsDesktop = RowItemsDesktop
model.variables.internal_configsVar.rowItemsDesktopAttr = (model.variables.rowItemsDesktopIn).toString();
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TuIHf5VlH0OVrcmqyiLZEg", callContext.id);
// Execute Action: Update_RowItemsDesktop
OutSystemsUI_2_23Controller.default.galleryChangeTextProperty$Action(model.variables.internal_configsVar.uniqueIdAttr, "RowItemsDesktop", model.variables.internal_configsVar.rowItemsDesktopAttr, callContext);
}

// Gutter size changed?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:A6diYPTir0mKP9F6JElb3Q", callContext.id) && ((model.variables.itemsGapIn) !== (model.variables.internal_configsVar.itemsGapAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:r21WCJzJwkmX9cBYkgFhfw", callContext.id);
// Internal_configs.ItemsGap = ItemsGap
model.variables.internal_configsVar.itemsGapAttr = model.variables.itemsGapIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2GW0OFmv7ECCILlJCZmFjw", callContext.id);
// Execute Action: Update_ItemsGap
OutSystemsUI_2_23Controller.default.galleryChangeTextProperty$Action(model.variables.internal_configsVar.uniqueIdAttr, "ItemsGap", model.variables.internal_configsVar.itemsGapAttr, callContext);
}

// Extended Class changed?
if((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:D6guQLWsz023Bes2mer9Og", callContext.id) && ((model.variables.extendedClassIn) !== (model.variables.internal_configsVar.extendedClassAttr)))) {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:lPdd_pTakkyOLGweDl584g", callContext.id);
// Internal_configs.ExtendedClass = ExtendedClass
model.variables.internal_configsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ie6Xc+wGTki13nAx1_zZAA", callContext.id);
// Execute Action: Update_ExtendedClass
OutSystemsUI_2_23Controller.default.galleryChangeTextProperty$Action(model.variables.internal_configsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_configsVar.extendedClassAttr, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dm5ojTHf1Ea4DdFKPY_f5w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dm5ojTHf1Ea4DdFKPY_f5w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:JGJHmsSCD02dLxjonncWGw", callContext.id);
}

};
Controller.prototype._initializedHandler$Action = function (galleryIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Adaptive.Gallery.InitializedHandler$vars"))());
vars.value.galleryIdInLocal = galleryIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:TvBEvKbTo02sKfn3gAwLOw:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg/ClientActions.TvBEvKbTo02sKfn3gAwLOw:cqEJnJFFHGxtu2FTWBoDMw", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:u0qF0GjnTESUdwy8YtixEQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:NQDdvcOEp02_nLb0BpwPdg", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.galleryIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:kzS4WVST9UOAyBs_kRTDjw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:TvBEvKbTo02sKfn3gAwLOw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:TvBEvKbTo02sKfn3gAwLOw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Adaptive.Gallery.InitializedHandler$vars", [{
name: "GalleryId",
attrName: "galleryIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._registerCallbacks$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCallbackHandlersJSResult = getCallbackHandlersJSResult;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:5R0Z5h_R2UuwoYCorxzsRQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg/ClientActions.5R0Z5h_R2UuwoYCorxzsRQ:Q40ws0Gxo5KUliRnRO498Q", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Oksj8xGNSUOey9uOZ3pSVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IqNQoqa+tUS0DSEqaWTx+g", callContext.id);
getCallbackHandlersJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Adaptive_Gallery_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Adaptive.Gallery.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:8j62JeYiZkudfrQebup1YA", callContext.id);
// Execute Action: RegisterOnInitialize
OutSystemsUI_2_23Controller.default.galleryRegisterCallback$Action(model.variables.internal_configsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:BA0MmRy9h0KH8m7IYCctxg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:5R0Z5h_R2UuwoYCorxzsRQ", callContext.id);
}

};
Controller.registerVariableGroupType("OutSystemsUI_2_23.Adaptive.Gallery.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "Initialized",
attrName: "initializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.generateUniqueIdVar = generateUniqueIdVar;
varBag.serialize_configsVar = serialize_configsVar;
try {OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:yLGQ9eUsE0K4dWq0y69mbQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg/ClientActions.yLGQ9eUsE0K4dWq0y69mbQ:zHg1lGwOhVREjikm65TwMg", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:b3vz63sbpkGNYY82esKsqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:4O0c2Kg0t0y2t5PGg+S3Zw", callContext.id);
// Execute Action: LogStart
OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Creating Gallery", callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:vPhqFrrQEkyr4fHIZzOiqg", callContext.id);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internal_configsVar.uniqueIdAttr, callContext);

// Internal_configs
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Z3buD1tjkWDrrkJG9qMeQ", callContext.id);
// Internal_configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_configsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Z3buD1tjkWDrrkJG9qMeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Internal_configs.RowItemsPhone = RowItemsPhone
model.variables.internal_configsVar.rowItemsPhoneAttr = (model.variables.rowItemsPhoneIn).toString();
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Z3buD1tjkWDrrkJG9qMeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Internal_configs.RowItemsTablet = RowItemsTablet
model.variables.internal_configsVar.rowItemsTabletAttr = (model.variables.rowItemsTabletIn).toString();
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Z3buD1tjkWDrrkJG9qMeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Internal_configs.RowItemsDesktop = RowItemsDesktop
model.variables.internal_configsVar.rowItemsDesktopAttr = (model.variables.rowItemsDesktopIn).toString();
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Z3buD1tjkWDrrkJG9qMeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Internal_configs.ItemsGap = ItemsGap
model.variables.internal_configsVar.itemsGapAttr = model.variables.itemsGapIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:3Z3buD1tjkWDrrkJG9qMeQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Internal_configs.ExtendedClass = ExtendedClass
model.variables.internal_configsVar.extendedClassAttr = model.variables.extendedClassIn;
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:vD0TSOtUaEiyBExXhG6tHg", callContext.id);
// JSON Serialize: Serialize_configs
serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internal_configsVar, true, false);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:bgMGkKv1_E6ksIeguCRf_Q", callContext.id);
// Execute Action: GalleryCreate
OutSystemsUI_2_23Controller.default.galleryCreate$Action(model.variables.internal_configsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:qhvWJTsbAk249VMwoz3qGw", callContext.id);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:DG44uds7kkaAfdlcS9TG3w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:yLGQ9eUsE0K4dWq0y69mbQ", callContext.id);
}

};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.initializedHandler$Action = function (galleryIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, galleryIdIn);

};
Controller.prototype.registerCallbacks$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:9GgB6wiQjkOC68Dd0FW6zQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ:c+cE6xHUcAGaZjT3hFmIag", "OutSystemsUI_2_23", "Adaptive", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:AjeOhc_rlUO2PQQoLX8Etg:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.AjeOhc_rlUO2PQQoLX8Etg:7CQsy5d5GB3hzmyEoMemZA", "OutSystemsUI_2_23", "Gallery", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:AjeOhc_rlUO2PQQoLX8Etg", callContext.id);
OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:9GgB6wiQjkOC68Dd0FW6zQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Adaptive/Gallery On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

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
define("OutSystemsUI_2_23.Adaptive.Gallery.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
};
});

define("OutSystemsUI_2_23.Adaptive.Gallery.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Yfap71ob10mnr1sVFhRRCA": {
getter: function (varBag, idService) {
return varBag.vars.value.galleryIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IqNQoqa+tUS0DSEqaWTx+g": {
getter: function (varBag, idService) {
return varBag.getCallbackHandlersJSResult.value;
}
},
"vPhqFrrQEkyr4fHIZzOiqg": {
getter: function (varBag, idService) {
return varBag.generateUniqueIdVar.value;
}
},
"vD0TSOtUaEiyBExXhG6tHg": {
getter: function (varBag, idService) {
return varBag.serialize_configsVar.value;
}
},
"vJrtBm0ysEuDfwFEzEBOaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.internal_configsVar;
}
},
"VEJibgBZsk62vIQ8hctojg": {
getter: function (varBag, idService) {
return varBag.model.variables.rowItemsDesktopIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"CtnajowldEqA3G+PYk17Gw": {
getter: function (varBag, idService) {
return varBag.model.variables.rowItemsTabletIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"BUCTqFwQAkmAspLbLOOX9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.rowItemsPhoneIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"y_NxgAPNlkKqtUiabYVpcw": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsGapIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iO59zc6QqU6Ch4BMb7sCnA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kzBs_rBDyEeuWOIwn2VVyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Adaptive.Gallery.mvc$translationsResources", ["exports"], function (exports) {
return {};
});
