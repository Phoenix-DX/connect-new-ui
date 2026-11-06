define("Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBTConnect_Utils.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$model", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasWalletAccess", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "Connect2_LegacyShared.referencesHealth$SocialSharingPlugin"], function (OutSystems, Connect2_LegacySharedModel, UBTConnect_UtilsController, CommonPluginModel, SocialSharingPluginController, Connect2_LegacyShared_Widgets_PopupMenu_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsShareToOThersAvailable", "isShareToOThersAvailableVar", "IsShareToOThersAvailable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsBookmarked", "isBookmarkedVar", "IsBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_IsBookmarked", "in_IsBookmarkedIn", "In_IsBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsBookmarkedInDataFetchStatus", "_in_IsBookmarkedInDataFetchStatus", "_in_IsBookmarkedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsShareImplemented", "isShareImplementedIn", "IsShareImplemented", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isShareImplementedInDataFetchStatus", "_isShareImplementedInDataFetchStatus", "_isShareImplementedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsRecordAvailable", "in_IsRecordAvailableIn", "In_IsRecordAvailable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_IsRecordAvailableInDataFetchStatus", "_in_IsRecordAvailableInDataFetchStatus", "_in_IsRecordAvailableInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowGift", "showGiftIn", "ShowGift", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showGiftInDataFetchStatus", "_showGiftInDataFetchStatus", "_showGiftInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_LegacyShared_Widgets_PopupMenu_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsBookmarked" in inputs) {
this.variables.in_IsBookmarkedIn = inputs.In_IsBookmarked;
if("_in_IsBookmarkedInDataFetchStatus" in inputs) {
this.variables._in_IsBookmarkedInDataFetchStatus = inputs._in_IsBookmarkedInDataFetchStatus;
}

}

if("IsShareImplemented" in inputs) {
this.variables.isShareImplementedIn = inputs.IsShareImplemented;
if("_isShareImplementedInDataFetchStatus" in inputs) {
this.variables._isShareImplementedInDataFetchStatus = inputs._isShareImplementedInDataFetchStatus;
}

}

if("In_IsRecordAvailable" in inputs) {
this.variables.in_IsRecordAvailableIn = inputs.In_IsRecordAvailable;
if("_in_IsRecordAvailableInDataFetchStatus" in inputs) {
this.variables._in_IsRecordAvailableInDataFetchStatus = inputs._in_IsRecordAvailableInDataFetchStatus;
}

}

if("ShowGift" in inputs) {
this.variables.showGiftIn = inputs.ShowGift;
if("_showGiftInDataFetchStatus" in inputs) {
this.variables._showGiftInDataFetchStatus = inputs._showGiftInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Utility.ItemOptionsMenu");
});
define("Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$model", "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.PopupMenu.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasWalletAccess", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "Connect2_LegacyShared.referencesHealth$SocialSharingPlugin"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, CommonPluginModel, SocialSharingPluginController, React, OSView, Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_model, Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_controller, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_PopupMenu_mvc_view, OSWidgets) {
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
        View.displayName = "Utility.ItemOptionsMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Widgets_PopupMenu_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_IsRecordAvailableIn, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Widgets_PopupMenu_mvc_view, {
inputs: {
ExtendedClass: "backwards-compatibility"
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
anchor: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.anchor_Placeholder,
_idProps: {
service: idService,
name: "Anchor_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
popupMenu: new PlaceholderContent(function () {
return [$if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu/Container onclick");
controller.bookmarkToggle$Action(model.variables.in_IsBookmarkedIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "context-menu-item",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "bookmark",
iconSize: /*FontSize*/ 0,
style: "icon bookmark-icon-style",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.isBookmarkedVar, false, this, function () {
return [React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Unmark"],
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Bookmark"],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), $if(model.variables.isShareImplementedIn, false, this, function () {
return [$if(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu/Container onclick");
controller.onShareToConnect$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "context-menu-item",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "share",
iconSize: /*FontSize*/ 0,
style: "icon icon-ch-Share",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Share"],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu/Container onclick");
controller.onShareToConnect$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "context-menu-item",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "share",
iconSize: /*FontSize*/ 0,
style: "icon icon-ch-Share",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Share to Connect"],
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.isShareToOThersAvailableVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu/Container onclick");
controller.onShareToOthers$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "context-menu-item",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "share",
iconSize: /*FontSize*/ 0,
style: "icon icon-ch-Share",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Share to others..."],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})];
}, function () {
return [];
}), $if((model.variables.showGiftIn && OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasWalletAccess$Action(callContext).hasAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu/Container onclick");
controller.onSendGift$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "context-menu-item",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "share",
iconSize: /*FontSize*/ 0,
style: "icon wallet-icon-heart-full-canvas",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Send a gift"],
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})];
})
}
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$debugger", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasWalletAccess", "CommonPlugin.model$ErrorRec", "Connect2_LegacyShared.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "Connect2_LegacyShared.referencesHealth$SocialSharingPlugin"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, CommonPluginModel, SocialSharingPluginController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_Debugger) {
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
var checkSocialSharingPluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkSocialSharingPluginVar = checkSocialSharingPluginVar;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:jev3lj2BWEiogwHdySPnLA:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.EjMYEtSPVU6ul_ZJ0daX9w/ClientActions.jev3lj2BWEiogwHdySPnLA:nkT6v4zUb78m5sL+Nv2GXA", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KjdMzlqTY0yBjZTg0MzftQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fXZW1aLvUk+5sM6bkHDOhA", callContext.id);
// Execute Action: CheckSocialSharingPlugin
checkSocialSharingPluginVar.value = SocialSharingPluginController.default.checkSocialSharingPlugin$Action(callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EIyirWqBl0uCuCd4J85Enw", callContext.id);
// IsShareToOThersAvailable = CheckSocialSharingPlugin.IsAvailable
model.variables.isShareToOThersAvailableVar = checkSocialSharingPluginVar.value.isAvailableOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZFWWBKIPXEK4xeS2pPiccA", callContext.id);
// IsBookmarked = In_IsBookmarked
model.variables.isBookmarkedVar = model.variables.in_IsBookmarkedIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rrjijewe+UqAPM2l_QzF+w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:jev3lj2BWEiogwHdySPnLA", callContext.id);
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:DDi3xzCNGUS2CSVVF0FOFg:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.EjMYEtSPVU6ul_ZJ0daX9w/ClientActions.DDi3xzCNGUS2CSVVF0FOFg:TvyPd64Mt6ubxTlPcJ2wTw", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DvUz0037l0Cdor1MF8FDNQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:X0z94rp9eEi1wgcHw48P+w", callContext.id);
// IsBookmarked = In_IsBookmarked
model.variables.isBookmarkedVar = model.variables.in_IsBookmarkedIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0lK+Sn_dTkatBIL6VLi0HQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:DDi3xzCNGUS2CSVVF0FOFg", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.bookmarkToggle$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSendGift$Action = function () {
return Promise.resolve();
};
Controller.prototype.onShareToOthers$Action = function () {
return Promise.resolve();
};
Controller.prototype.onShareToConnect$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw:y4OEvNt9FV7g_od25DYkmA", "Connect2_LegacyShared", "Utility", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:EjMYEtSPVU6ul_ZJ0daX9w:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.EjMYEtSPVU6ul_ZJ0daX9w:HgyNZhL44e56gGWG0CUnLw", "Connect2_LegacyShared", "ItemOptionsMenu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EjMYEtSPVU6ul_ZJ0daX9w", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utility/ItemOptionsMenu On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Utility/ItemOptionsMenu On Parameters Changed");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"fXZW1aLvUk+5sM6bkHDOhA": {
getter: function (varBag, idService) {
return varBag.checkSocialSharingPluginVar.value;
}
},
"CQIcggt_K023UDMFBcTkLw": {
getter: function (varBag, idService) {
return varBag.model.variables.isShareToOThersAvailableVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"T3A_NCiM1kmx8ISTrfWE0A": {
getter: function (varBag, idService) {
return varBag.model.variables.isBookmarkedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4vXablBzE0mtcR9sZVhTPQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsBookmarkedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"L20i+hpDpkKoWHyY9OaSUA": {
getter: function (varBag, idService) {
return varBag.model.variables.isShareImplementedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pIooXg4Qck2nieOv6_oX+A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsRecordAvailableIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"P9Jad97toU2nxpWeRu4EOg": {
getter: function (varBag, idService) {
return varBag.model.variables.showGiftIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NGMxECi5W0aumk1ARjky3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasItemOptionsMenu"));
})(varBag.model, idService);
}
},
"3HbVnlEwhEK3zuhL8Fe7Zg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Anchor"));
})(varBag.model, idService);
}
},
"j0bfJVvXUUqpeTE9qLTPJQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Anchor_Placeholder"));
})(varBag.model, idService);
}
},
"SwVu+yNXuUeXlMIhhNb1ow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopupMenu"));
})(varBag.model, idService);
}
},
"WrjtGgTcX0qqy1sFnfzeLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowFalse_Options"));
})(varBag.model, idService);
}
},
"WYxMOCm69EyeXxt70HdI7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsItemBookmarked"));
})(varBag.model, idService);
}
},
"Oz7X+2kxIESkN8tGIlesIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasShare"));
})(varBag.model, idService);
}
},
"T73macq0oEiZhKdEvbsdWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsShareToOThersAvailable"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
