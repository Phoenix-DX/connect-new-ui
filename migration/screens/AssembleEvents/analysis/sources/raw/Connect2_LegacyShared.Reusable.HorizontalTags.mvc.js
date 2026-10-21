define("Connect2_LegacyShared.Reusable.HorizontalTags.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.Reusable.HorizontalScrollTiles.mvc$model", "OutSystemsUI_2_23.Content.Tag.mvc$model", "Connect2_LegacyShared.model$TagList"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacyShared_Reusable_HorizontalScrollTiles_mvcModel, OutSystemsUI_2_23_Content_Tag_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TagList", "tagListIn", "TagList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TagList());
}, false, Connect2_LegacySharedModel.TagList), 
this.attr("_tagListInDataFetchStatus", "_tagListInDataFetchStatus", "_tagListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ActiveTagId", "activeTagIdIn", "ActiveTagId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_activeTagIdInDataFetchStatus", "_activeTagIdInDataFetchStatus", "_activeTagIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsScrollToActiveTagOnReady", "isScrollToActiveTagOnReadyIn", "IsScrollToActiveTagOnReady", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isScrollToActiveTagOnReadyInDataFetchStatus", "_isScrollToActiveTagOnReadyInDataFetchStatus", "_isScrollToActiveTagOnReadyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (Connect2_LegacyShared_Reusable_HorizontalScrollTiles_mvcModel.hasValidationWidgets || OutSystemsUI_2_23_Content_Tag_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("TagList" in inputs) {
this.variables.tagListIn = inputs.TagList;
if("_tagListInDataFetchStatus" in inputs) {
this.variables._tagListInDataFetchStatus = inputs._tagListInDataFetchStatus;
}

}

if("ActiveTagId" in inputs) {
this.variables.activeTagIdIn = inputs.ActiveTagId;
if("_activeTagIdInDataFetchStatus" in inputs) {
this.variables._activeTagIdInDataFetchStatus = inputs._activeTagIdInDataFetchStatus;
}

}

if("IsScrollToActiveTagOnReady" in inputs) {
this.variables.isScrollToActiveTagOnReadyIn = inputs.IsScrollToActiveTagOnReady;
if("_isScrollToActiveTagOnReadyInDataFetchStatus" in inputs) {
this.variables._isScrollToActiveTagOnReadyInDataFetchStatus = inputs._isScrollToActiveTagOnReadyInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Reusable.HorizontalTags");
});
define("Connect2_LegacyShared.Reusable.HorizontalTags.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.HorizontalTags.mvc$model", "Connect2_LegacyShared.Reusable.HorizontalTags.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Reusable.HorizontalScrollTiles.mvc$view", "OutSystemsUI_2_23.Content.Tag.mvc$view", "Connect2_LegacyShared.model$TagList"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_HorizontalTags_mvc_model, Connect2_LegacyShared_Reusable_HorizontalTags_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, Connect2_LegacyShared_Reusable_HorizontalScrollTiles_mvc_view, OutSystemsUI_2_23_Content_Tag_mvc_view) {
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
        View.displayName = "Reusable.HorizontalTags";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_HorizontalScrollTiles_mvc_view, OutSystemsUI_2_23_Content_Tag_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Reusable_HorizontalTags_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Reusable_HorizontalTags_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Reusable_HorizontalScrollTiles_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.tagListIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "List_Tags"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/HorizontalTags/Container onclick");
return controller.onClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._activeTagIdInDataFetchStatus), asPrimitiveValue(model.variables._tagListInDataFetchStatus), asPrimitiveValue(model.variables.activeTagIdIn), asPrimitiveValue(model.variables.tagListIn.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.tagListIn.getCurrent(callContext.iterationContext).idAttr)]
}, React.createElement(OutSystemsUI_2_23_Content_Tag_mvc_view, {
inputs: {
ExtendedClass: model.getCachedValue(idService.getId("6Z_2kW2DTUio_9AXYsJzQg.ExtendedClass"), function () {
return ("connect-tag" + (((model.variables.tagListIn.getCurrent(callContext.iterationContext).idAttr === model.variables.activeTagIdIn)) ? (" connect-tag-active") : ("")));
}, function () {
return model.variables.tagListIn.getCurrent(callContext.iterationContext).idAttr;
}, function () {
return model.variables.activeTagIdIn;
}),
_extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagListInDataFetchStatus, model.variables._activeTagIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
tag: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "text-no-wrap",
value: model.variables.tagListIn.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._tagListInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._tagListInDataFetchStatus), asPrimitiveValue(model.variables.tagListIn.getCurrent(callContext.iterationContext).labelAttr)]
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._activeTagIdInDataFetchStatus), asPrimitiveValue(model.variables._tagListInDataFetchStatus), asPrimitiveValue(model.variables.activeTagIdIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.activeTagIdIn), asPrimitiveValue(model.variables._activeTagIdInDataFetchStatus), asPrimitiveValue(model.variables._tagListInDataFetchStatus), asPrimitiveValue(model.variables.tagListIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Reusable.HorizontalTags.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Reusable.HorizontalTags.mvc$debugger", "Connect2_LegacyShared.Reusable.HorizontalTags.mvc$controller.OnReady.ScrollToActiveTagJS", "Connect2_LegacyShared.model$TagList"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Reusable_HorizontalTags_mvc_Debugger, Connect2_LegacyShared_Reusable_HorizontalTags_mvc_controller_OnReady_ScrollToActiveTagJS) {
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
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:AndzYk63zE6izPxfIAybEA:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.EtP6cfvm5kWRjKxeYuumSw/ClientActions.AndzYk63zE6izPxfIAybEA:XS4FkiZ00U2YrcV8++qmjQ", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vM8reJxoskS7OanqNomRMA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZVyYNXnR0U68lhZ2eaLRig", callContext.id) && model.variables.isScrollToActiveTagOnReadyIn)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sKyOZTBEkEu9ArLcHqaMlA", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.tagListIn, function (p) {
return (p.idAttr === model.variables.activeTagIdIn);
}, callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ytPeOLkn+0SgzLebtjpLSQ", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Reusable_HorizontalTags_mvc_controller_OnReady_ScrollToActiveTagJS, "ScrollToActiveTag", "OnReady", {
ListId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("List_Tags"), OS.DataTypes.DataTypes.Text),
TagIndex: OS.DataConversion.JSNodeParamConverter.to(listIndexOfVar.value.positionOut, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:E33WqCOplESwudGWniNLvA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:E33WqCOplESwudGWniNLvA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:AndzYk63zE6izPxfIAybEA", callContext.id);
}

};
Controller.prototype._onClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:lZSNt8f4BUmJPMAvG5kXfg:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.EtP6cfvm5kWRjKxeYuumSw/ClientActions.lZSNt8f4BUmJPMAvG5kXfg:PC0YjEOQ2wapTM30z4nqNw", "Connect2_LegacyShared", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5oZQAKKhP0WLImLU4FJggg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tpx+GJNcdEKbL7ulBz5_3Q", callContext.id);
// Trigger Event: OnClickTag
return controller.onClickTag$Action(model.variables.tagListIn.getCurrent(callContext.iterationContext).idAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UJ0wZVHyHUadeEwuOUPC+Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lZSNt8f4BUmJPMAvG5kXfg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lZSNt8f4BUmJPMAvG5kXfg", callContext.id);
throw ex;

});
};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.onClickTag$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg:/NRWebFlows.ETpwt426gkGMinqmYFovCg:+3SGrhAl8EdnlQpf6QG84w", "Connect2_LegacyShared", "Reusable", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:EtP6cfvm5kWRjKxeYuumSw:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.EtP6cfvm5kWRjKxeYuumSw:hownjBCpAUfCMQGvktXSyQ", "Connect2_LegacyShared", "HorizontalTags", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EtP6cfvm5kWRjKxeYuumSw", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Reusable/HorizontalTags On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Reusable.HorizontalTags.mvc$controller.OnReady.ScrollToActiveTagJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const tagList = document.getElementById($parameters.ListId).querySelectorAll(".tag"); 
if (tagList.length >= $parameters.TagIndex && $parameters.TagIndex >= 0) {
    tagList[$parameters.TagIndex].scrollIntoView();
}



};
});

define("Connect2_LegacyShared.Reusable.HorizontalTags.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"sKyOZTBEkEu9ArLcHqaMlA": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"ytPeOLkn+0SgzLebtjpLSQ": {
getter: function (varBag, idService) {
return varBag.scrollToActiveTagJSResult.value;
}
},
"syk1DAV5IkqjqiOcC955DA": {
getter: function (varBag, idService) {
return varBag.model.variables.tagListIn;
}
},
"IQkr31EPSEOI4_jw+ha2QA": {
getter: function (varBag, idService) {
return varBag.model.variables.activeTagIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aQ+euQEN2UO4GgYkmStLng": {
getter: function (varBag, idService) {
return varBag.model.variables.isScrollToActiveTagOnReadyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"TsJ4VoBuEkyvb6VcP3hCIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"lW_zh+Ayx0KF1_qxVjrYUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_Tags"));
})(varBag.model, idService);
}
},
"aSKSoDgIDkyI4CFpKQKYSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tag"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
