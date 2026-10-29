define("UBTConnect.App_Common_Blocks.ItemCardActions.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc$model", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$ToggleBookmarkItem_C2"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ActionBarOptions", "actionBarOptionsIn", "ActionBarOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionBarOptionsRec());
}, false, UBTConnectLibraryModel.ActionBarOptionsRec), 
this.attr("_actionBarOptionsInDataFetchStatus", "_actionBarOptionsInDataFetchStatus", "_actionBarOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ObjectId", "objectIdIn", "ObjectId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_objectIdInDataFetchStatus", "_objectIdInDataFetchStatus", "_objectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("BookmarkType", "bookmarkTypeIn", "BookmarkType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_bookmarkTypeInDataFetchStatus", "_bookmarkTypeInDataFetchStatus", "_bookmarkTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ActionBarOptions" in inputs) {
this.variables.actionBarOptionsIn = inputs.ActionBarOptions;
if("_actionBarOptionsInDataFetchStatus" in inputs) {
this.variables._actionBarOptionsInDataFetchStatus = inputs._actionBarOptionsInDataFetchStatus;
}

}

if("ObjectId" in inputs) {
this.variables.objectIdIn = inputs.ObjectId;
if("_objectIdInDataFetchStatus" in inputs) {
this.variables._objectIdInDataFetchStatus = inputs._objectIdInDataFetchStatus;
}

}

if("BookmarkType" in inputs) {
this.variables.bookmarkTypeIn = inputs.BookmarkType;
if("_bookmarkTypeInDataFetchStatus" in inputs) {
this.variables._bookmarkTypeInDataFetchStatus = inputs._bookmarkTypeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Common_Blocks.ItemCardActions");
});
define("UBTConnect.App_Common_Blocks.ItemCardActions.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common_Blocks.ItemCardActions.mvc$model", "UBTConnect.App_Common_Blocks.ItemCardActions.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc$view", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$ToggleBookmarkItem_C2"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Common_Blocks_ItemCardActions_mvc_model, UBTConnect_App_Common_Blocks_ItemCardActions_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvc_view) {
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
        View.displayName = "App_Common_Blocks.ItemCardActions";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_Blocks_ItemCardActions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_Blocks_ItemCardActions_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("3x3us+SoD0aPvnmQtTGUrQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral2;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
return rec;
}();
return rec;
}();
})
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvc_view, {
inputs: {
ActionBarOptions: model.variables.actionBarOptionsIn,
_actionBarOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._actionBarOptionsInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickShare$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ItemCard_ActionBar OnClickShare");
controller.handler_OnClickShare$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClickUnbookmark$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ItemCard_ActionBar OnClickUnbookmark");
return controller.handler_OnClickUnmark$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onClickAddNote$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ItemCard_ActionBar OnClickAddNote");
return controller.handler_OnClickAddNote$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._actionBarOptionsInDataFetchStatus), asPrimitiveValue(model.variables.actionBarOptionsIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Common_Blocks.ItemCardActions.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.ItemCardActions.mvc$debugger", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$ToggleBookmarkItem_C2"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_ItemCardActions_mvc_Debugger) {
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
Controller.prototype._handler_OnClickShare$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClickShare");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wgy7brwC1kiBT959jB3fwA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.T3LmjHbjEE+I9dD+FbHmlA/ClientActions.wgy7brwC1kiBT959jB3fwA:7GTBRML_dQvaWuHyCiKYwQ", "UBTConnect", "Handler_OnClickShare", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:psBrpUWfjU29f6gr93aX6Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VZNZqQLOT0mWj8jtxWQyiQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wgy7brwC1kiBT959jB3fwA", callContext.id);
}

};
Controller.prototype._handler_OnClickUnmark$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClickUnmark");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8I8BlBDPW02_qxhUmEKHug:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.T3LmjHbjEE+I9dD+FbHmlA/ClientActions.8I8BlBDPW02_qxhUmEKHug:FGghXeQ7aBwNWRJSo_qGNA", "UBTConnect", "Handler_OnClickUnmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nw7VpHF540qEGtmC9ESNIg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jqAGWWdD_0qeHI6mOeWw3g", callContext.id);
// Execute Action: ToggleBookmarkItem_C2
model.flush();
return UBTConnectController.default.toggleBookmarkItem_C2$Action(model.variables.objectIdIn, model.variables.bookmarkTypeIn, true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NpDMId2HHEOc_YfBDk+tcA", callContext.id);
// Trigger Event: Event_ItemUnbookmarked
return controller.event_ItemUnbookmarked$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OQ6EfUTXkEOEiKSdUYWjsA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8I8BlBDPW02_qxhUmEKHug", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8I8BlBDPW02_qxhUmEKHug", callContext.id);
throw ex;

});
};
Controller.prototype._handler_OnClickAddNote$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClickAddNote");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QhMF1K6Nekmi77w+lhU8zw:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.T3LmjHbjEE+I9dD+FbHmlA/ClientActions.QhMF1K6Nekmi77w+lhU8zw:mjLsIN1b+KgPkxMkfos2nw", "UBTConnect", "Handler_OnClickAddNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jyMGv2maFUSo59l03msatQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q+YxPi3uCUa2uqafONkQxA", callContext.id);
// Trigger Event: Event_AddNote
return controller.event_AddNote$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3lw5hm8xkEOMkslNv0S1+g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QhMF1K6Nekmi77w+lhU8zw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QhMF1K6Nekmi77w+lhU8zw", callContext.id);
throw ex;

});
};

Controller.prototype.handler_OnClickShare$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClickShare$Action, callContext);

};
Controller.prototype.handler_OnClickUnmark$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClickUnmark$Action, callContext);

};
Controller.prototype.handler_OnClickAddNote$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClickAddNote$Action, callContext);

};
Controller.prototype.event_AddNote$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_ItemUnbookmarked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA:tjT3qcDcMm8Cw03tF5yCfg", "UBTConnect", "App_Common_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:T3LmjHbjEE+I9dD+FbHmlA:/NRWebFlows.nOP5YI0vaUiihxkrWd2JmA/NodesShownInESpaceTree.T3LmjHbjEE+I9dD+FbHmlA:NCPz78lXwh1zsKLVrIKv3g", "UBTConnect", "ItemCardActions", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:T3LmjHbjEE+I9dD+FbHmlA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nOP5YI0vaUiihxkrWd2JmA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Common_Blocks.ItemCardActions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Pap_RiXe00mV3++GQJE35w": {
getter: function (varBag, idService) {
return varBag.model.variables.actionBarOptionsIn;
}
},
"fX3+oL9qmESO3o5nKHVlRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.objectIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+6TOxVkddUWXB1j3dhaDRA": {
getter: function (varBag, idService) {
return varBag.model.variables.bookmarkTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"urSZTCot90GG9oA1CErBHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
